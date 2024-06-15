import React, { useEffect, useState } from 'react'
import { useUserContext } from '../context/Context'
import { useNavigate } from 'react-router-dom'
import { greenToast, userApi } from '../api/Api'

function Plan() {

    const { setUser, user, load, token } = useUserContext()
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const PlanHandler = async (e) => {
        e.preventDefault()
        console.log('click')
        if (!token) return greenToast('token not found.')
        setLoading(true)
        const { status, data } = await userApi.get('/subscription', { withCredentials: true, headers: { Authorization: `Bearer ${token}` } })
        setLoading(false)
        if (status === 200) {
            console.log(data)
            setUser(data.user)
            navigate('/')
        } else {
            redToast(data.err)
        }
    }

    // useEffect(() => {
    //     if (!load) {
    //         if (user?.subscription === true) {
    //             greenToast('subscription already purchased.')
    //             navigate('/')
    //         }
    //     }
    // }, []);

    return (
        <div className='p-10'>
            <form onSubmit={PlanHandler} className=' bg-gray-200 flex justify-center flex-col items-center w-[400px] rounded-xl border border-gray-300 p-12'>
                <h1 className=' text-2xl font-bold'>Monthly Plan</h1> <br />
                <p className=' text-2xl font-bold text-blue-800'>Get 2500 Credit</p> <br />
                <p className=' text-3xl font-bold'>price : 12$ <span className=' font-bold text-xl'>/month</span></p> <br /> <br /> 
                {
                    !load && user &&
                    <button type='submit' disabled={user.subscription ? true : false} className={`${user.subscription? ' bg-gray-700 cursor-not-allowed': 'bg-blue-700'} py-3 px-8 -ml-2 rounded-xl  font-bold text-white`}>{user.subscription ? 'Plan is Running ' : 'Buy Plan'}</button>
                }
            </form>
            {
                loading &&
                <p className=' font-semibold'>loading...</p>
            }
        </div>
    )
}

export default Plan

