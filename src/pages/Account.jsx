import React, { useEffect } from 'react'
import { useUserContext } from '../context/Context'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { greenToast, userApi } from '../api/Api'

export default function Account() {

    const { user, load, setUsers, setReset, users, logout, getUsers, deleteUsers, reset, token } = useUserContext()
    const navigate = useNavigate()

    const BlockUser = async (_id) => {
        console.log('run now')
        if (!token) return greenToast('token not found account')
        const { status, data } = await userApi.get(`/block/${_id}`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } })
        if (status === 200) {
            console.log(data)
            setReset(!reset)
        }
    }

    useEffect(() => {
        if (!load) {
            if (user?.role === 'admin') {
                getUsers()
            }
        }
    }, [reset]);
    console.log(users)

    return (
        <div>
            {load && <div className=' p-5 rounded-lg bg-gray-200 m-4'>
                loading...
            </div>}
            {
                !load && (
                    user ?
                        <div className=' p-6'>
                            {user.subscription && <div className=' font-semibold'>
                                <p>ip : {user.ip}</p>
                                <p>Subscription : {'Running Monthly Subscription'}</p>
                                <p>credit claim last date : {user.lastDate}</p>
                                <p>subscription end date : {user.endDate}</p>
                            </div>}
                            <div className=' p-5 rounded-xl font-semibold border border-gray-400 bg-gray-200'>
                                <p> name : {user.name}</p>
                                <p> email : {user.email} </p>
                                <p> credit : {user.credit} </p>
                            </div>
                            <br />
                            <button onClick={() => {
                                logout()
                                navigate('/')
                            }}>logout</button>
                            <br /> <br />
                            <button onClick={deleteUsers}>delete users</button>
                            <br /> <br />
                            <h1 className=' text-2xl font-bold'>All Users</h1>
                        </div> :
                        <div>you have to login first!</div>

                )
            }

            {
                users && users.map((user, i) => {
                    return (
                        <div key={user._id} className='flex mt-2 font-bold px-4 gap-x-6 items-center'>
                            <p> {i + 1} </p>
                            <p> {user._id}</p>
                            <p> {user.name}</p>
                            <p> {user.email} </p>
                            <button onClick={() => BlockUser(user._id)} className={`${user.block ? 'bg-green-600' : 'bg-red-600'} text-white font-semibold p-3  rounded-lg`}>{user.block ? 'Unblock' : 'Block'}</button>
                        </div>
                    )
                })
            }
            <br /> <br />
        </div>
    )
}
