import { useContext, createContext, useState } from "react";
import { greenToast, redToast, userApi } from "../api/Api";

const UserContext = createContext()


export default function UserContextProvider({ children }) {

    const [user, setUser] = useState('');
    const [load, setLoad] = useState(false);
    const [key, setKey] = useState(false);
    const token = localStorage.getItem('token')
    const [users, setUsers] = useState([]);
    const [reset, setReset] = useState(false);

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
            alert('token expired! login again.')
        } else {
            localStorage.removeItem('token')
            alert(data.err)
        }
    }

    const logout = async () => {
        localStorage.removeItem('token')
        setUser(null)
    }


    const login = async ({ email, password }) => {
        const { status, data } = await userApi.post('/login', { email, password }, { withCredentials: true })
        if (status === 201) {
            localStorage.setItem('token', data.token)
            setUser(data.user)
            greenToast(data.msg)
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
            greenToast(data.msg)
            return 'navigate'
        } else {
            redToast(data.err)
        }
    }

    const getUsers = async () => {
        const { status, data } = await userApi.get('/get', { withCredentials: true, headers: { Authorization: `Bearer ${token}` } })
        if (status === 200) {
            setUsers(data.users)
        } else {
            redToast(data.err)
        }
    }

    const deleteUsers = async () => {
        const { status, data } = await userApi.delete('/delete', { withCredentials: true })
        if (status === 200) {
            console.log(data.users)
        } else {
            redToast(data.err)
        }
    }


    return <UserContext.Provider value={{ key, reset, setReset , setUsers , setKey, auth, logout, login, register, getUsers, deleteUsers, token, user, setUser, load, setLoad , users }}>
        {children}
    </UserContext.Provider>
}


export const useUserContext = () => useContext(UserContext)