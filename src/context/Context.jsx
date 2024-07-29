import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
// import { IoIosArrowUp } from "react-icons/io";
import { adminApi, greenToast, maintenanceApi, redToast, userApi } from "../api/Api";
import { firebaseAuth } from "../firebase/Config";
import Block from "../pages/Block";


const UserContext = createContext()


export default function UserContextProvider({ children }) {

    const [user, setUser] = useState('');
    const [load, setLoad] = useState('');
    const [key, setKey] = useState(false);
    const token = localStorage.getItem('token')
    const [users, setUsers] = useState([]);
    const [reset, setReset] = useState(false);
    const [userIp, setUserIp] = useState('');
    const [allApi, setAllApi] = useState([]);
    const [AdminSideBar, setAdminSideBar] = useState(true);
    const [noVerifyMsg, setNoVerifyMsg] = useState(false);
    const [mailSentTab, setMailSentTab] = useState(false);
    const [loginLoading, setLoginLoading] = useState(false);
    const [registerLoading, setRegisterLoading] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [registerError, setRegisterError] = useState('');


    const provider = new GoogleAuthProvider();
    const gAuth = firebaseAuth





    const auth = async () => {
        if (!token) return;
        setLoad(true)
        const { status, data } = await userApi.get(`/auth`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } })
        setLoad(false)
        if (status === 200) {
            setUser(data.user)
            setReset(!reset)
        } else if (status === 223) {
            localStorage.removeItem('token')
            redToast(data.err)
        } else {
            localStorage.removeItem('token')
            alert(data.err)
        }
    }

    const logout = async () => {
        await signOut(gAuth)
        setUser('')
        localStorage.removeItem('token')
        ipAuth()
    }


    const login = async ({ email, password }) => {
        setLoginLoading(true)
        setNoVerifyMsg('')
        setLoginError('')
        const { status, data } = await userApi.post('/login', { email, password }, { withCredentials: true })
        if (status === 201) {
            setLoginLoading(false)
            localStorage.setItem('token', data.token)
            setUser(data.user)
            return 'navigate'
        } else if (status === 224) {
            setLoginLoading(false)
            localStorage.removeItem('sent')
            return 'fector'
        } else if (status === 204) {
            setLoginLoading(false)
            setNoVerifyMsg(true)
            setLoginError(data?.err)
        } else {
            setLoginLoading(false)
            setLoginError(data?.err)
            // redToast(data.err)
        }
    }

    const register = async ({ name, email, password }) => {
        setRegisterError('')
        setRegisterLoading(true)
        const { status, data } = await userApi.post('/register', { name, email, password }, { withCredentials: true })
        if (status === 201) {
            setRegisterLoading(false)
            greenToast(data.msg)
            setMailSentTab(true)
        } else {
            setRegisterError(data?.err)
            setRegisterLoading(false)
            redToast(data.err)
        }
    }

    const [totalUsersCount, setTotalUsersCount] = useState(0);
    const getUsers = async ({ search, page }) => {
        const { status, data } = await adminApi.get(`/getUsers?search=${search}&page=${page}&limit={10}`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } })
        if (status === 200) {
            setUsers(data.users)
            setTotalUsersCount(data.count)
        } else {
            console.log(data.err)
        }
    }

    const toggleBanUnban = async (_id) => {
        const { status, data } = await userApi.get(`/block/${_id}`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } })
        if (status === 200) {
            setUsers(prev => {
                const index = prev.findIndex(user => user?._id === data?.updatedUser?._id);
                if (index !== -1) {
                    const newUsers = [...prev];
                    newUsers[index] = data?.updatedUser;
                    return newUsers;
                }
                return prev;
            });
        } else {
            console.log(data.err)
        }
    }


    const deleteUsers = async () => {
        const { status, data } = await adminApi.delete('/delete', { withCredentials: true })
        if (status === 200) {
            return;
        } else {
            redToast(data.err)
        }
    }

    const ipAuth = async () => {
        setLoad(true)
        const { status, data } = await userApi.get('/ip-free-credit', { withCredentials: true })
        if (status === 200) {
            setUserIp(data.userIp)
        } else {
            redToast(data.err)
        }
        setLoad(false)
    }


    const handleGoogleAuthLogin = async () => {
        setLoad(true)
        await signInWithPopup(gAuth, provider)
            .then(async (result) => {
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // const user = result.user;
                const { displayName, email } = result.user;
                const { status, data } = await userApi.post(`/googleLogin`, { name: displayName, email })
                if (status === 201) {
                    localStorage.setItem('token', data.token)
                    setUser(data.user)
                    setLoad(false)
                    return 'home'
                } else if (status === 223) {
                    await signOut(gAuth)
                    localStorage.removeItem('token')
                    redToast(data.err)
                    return 'login'
                } else[
                    redToast(data.err)
                ]
            }).catch((error) => {
                console.log(error.message)
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // const email = error.customData.email;
                // const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    const handleSignOut = async () => {
        await signOut(gAuth)
    }




    //  scroll section

    const [scrollButton, setScrollButton] = useState(false);

    const handleScroll = () => {
        if (Math.floor(window.scrollY) > 1500) {
            setScrollButton(true)
        } else {
            setScrollButton(false)
        }
    }

    const [maintenance, setMaintenance] = useState('');
    const [mLoading, setMLoading] = useState(null);
    const getMaintenance = async () => {
        setMLoading(true)
        const { data, status } = await maintenanceApi.get('/checking')
        if (status === 200) {
            setMLoading(false)
            return setMaintenance(data?.maintenance)
        }
        setMLoading(false)
        setMaintenance('')
    }


    useEffect(() => {
        getMaintenance()

        window.addEventListener('scroll', handleScroll)
        if (token) {
            auth()
        } else {
            ipAuth()
        }
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(gAuth, async () => {
            if (!token) return false;
            const { status, data } = await userApi.get(`/auth`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } })
            if (status === 200) {
                setUser(data.user)
            }
            setLoad(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);


    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    return <UserContext.Provider value={{ search, setSearch, currentPage, setCurrentPage, pageCount: Math.ceil(totalUsersCount / 10), mLoading, maintenance, loginError, registerError, loginLoading, registerLoading, noVerifyMsg, allApi, mailSentTab, setMailSentTab, handleSignOut, setAllApi, toggleBanUnban, AdminSideBar, handleGoogleAuthLogin, setAdminSideBar, userIp, setUserIp, ipAuth, key, reset, setReset, setUsers, setKey, auth, logout, login, register, getUsers, deleteUsers, token, user, setUser, load, setLoad, users }}>
        {
            user?.block === true ? <Block /> :
                <>

                    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={` ${scrollButton ? ' opacity-100  -translate-y-10' : 'opacity-0 '}  bg-primary h-12 w-12 hover:scale-105 duration-500 flex justify-center items-center shadow-lg border-[2px] border-gray-200 text-white rounded-xl fixed bottom-4 right-14 z-[50]`}>
                        {/* <IoIosArrowUp className=" text-3xl" /> */}
                        ^
                    </button>

                    {children}
                </>
        }
    </UserContext.Provider>
}


export const useUserContext = () => useContext(UserContext)