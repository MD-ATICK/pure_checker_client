import { useContext, createContext, useState, useEffect } from "react";
import { greenToast, redToast, userApi } from "../api/Api";

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

    const auth = async () => {
        if (!token) return;
        setLoad(true)
        const { status, data } = await userApi.get(`/auth`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } })
        setLoad(false)
        if (status === 200) {
            console.log(data.user)
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
        localStorage.removeItem('token')
        setUser(null)
        ipAuth()
    }


    const login = async ({ email, password }) => {
        const { status, data } = await userApi.post('/login', { email, password }, { withCredentials: true })
        if (status === 201) {
            localStorage.setItem('token', data.token)
            setUser(data.user)
            return 'navigate'
        } else {
            redToast(data.err)
        }
    }

    const register = async ({ name, email, password }) => {
        const { status, data } = await userApi.post('/register', { name, email, password }, { withCredentials: true })
        if (status === 201) {
            localStorage.setItem('token', data.token)
            setUser(data.user)
            return 'navigate'
        } else {
            redToast(data.err)
        }
    }

    const getUsers = async () => {
        const { status, data } = await userApi.get('/getUsers', { withCredentials: true, headers: { Authorization: `Bearer ${token}` } })
        if (status === 200) {
            console.log(data.users)
            setUsers(data.users)
        } else {
            console.log(data.err)
        }
    }

    const toggleBanUnban = async (_id) => {
        const { status, data } = await userApi.get(`/block/${_id}`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } })
        if (status === 200) {
            console.log(data.updatedUser)
            setUsers(prev => {
                const index = prev.findIndex(user => user?._id === data?.updatedUser?._id);
                if (index !== -1) {
                    const newUsers = [...prev];
                    newUsers[index] = data?.updatedUser;
                    return newUsers;
                }
                return prev;
            });
            console.log(data.updatedUser)
        } else {
            console.log(data.err)
        }
    }


    const deleteUsers = async () => {
        const { status, data } = await userApi.delete('/delete', { withCredentials: true })
        if (status === 200) {
            console.log('get users')
        } else {
            redToast(data.err)
        }
    }

    const ipAuth = async () => {
        setLoad(true)
        const { status, data } = await userApi.get('/ip-free-credit', { withCredentials: true })
        if (status === 200) {
            console.log(data.userIp)
            setUserIp(data.userIp)
        } else {
            redToast(data.err)
        }
        setLoad(false)
    }


    useEffect(() => {
        if (token) {
            auth()
        } else {
            ipAuth()
        }
    }, []);

    return <UserContext.Provider value={{ allApi, setAllApi, toggleBanUnban, AdminSideBar, setAdminSideBar, userIp, setUserIp, ipAuth, key, reset, setReset, setUsers, setKey, auth, logout, login, register, getUsers, deleteUsers, token, user, setUser, load, setLoad, users }}>
        {children}
    </UserContext.Provider>
}


export const useUserContext = () => useContext(UserContext)