import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { greenToast, userApi } from '../api/Api'
import { useUserContext } from '../context/Context'

export default function Account() {

    const { user, load, setUsers, setReset, users, logout, getUsers, deleteUsers, reset, token } = useUserContext()
    const navigate = useNavigate()


    const optionObj = {
        subscription: 'subscription',
        payAsGo: 'payAsGo'
    }

    const limitObj = {
        week: 7,
        month: 30
    }

    const [creditLimit, setCreditLimit] = useState('');
    const [priceOfPlan, setPriceOfPlan] = useState('');
    const [planType, setPlanType] = useState(optionObj.payAsGo);
    const [subLimit, setSubLimit] = useState(limitObj.week);

    const BlockUser = async (_id) => {
        if (!token) return greenToast('token not found account')
        const { status, data } = await userApi.get(`/block/${_id}`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } })
        if (status === 200) {
            console.log('user block/unblock')
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


    const PricingCreateHandler = async (e) => {
        e.preventDefault()
        const { status, data } = await userApi.post('/create-plan', { price: priceOfPlan, isType: planType, dayFor: subLimit, credit: creditLimit }, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } })
        if (status === 201) {
            console.table(data.plan)
        }
    }

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
                                <p>credit claim last date : {user.subLastDate}</p>
                                <p>subscription end date : {user.subEndDate}</p>
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


            {/* pricing create */}
            <div className=' p-4'>
                <form action="" onSubmit={PricingCreateHandler} className=' flex flex-col items-start w-[300px]  font-semibold gap-y-4'>
                    <input type="number" value={priceOfPlan} onChange={(e) => setPriceOfPlan(e.target.value)} className=' placeholder:font-[500] bg-gray-200 rounded-lg p-2 w-full' placeholder='enter price(USDT)' />
                    <select name="" id="" value={planType} onChange={(e) => setPlanType(e.target.value)} className='bg-gray-200 rounded-lg p-2 w-full'>
                        <option className=' font-semibold h-20' value={optionObj.subscription}>Subscription</option>
                        <option className=' font-semibold h-20' value={optionObj.payAsGo}>Pay As Go</option>
                    </select>
                    {
                        planType === optionObj.subscription ?
                            <div className='flex flex-col gap-y-4 w-full'>
                                <select name="" id="" value={subLimit} onChange={(e) => setSubLimit(e.target.value)} className='bg-gray-200 rounded-lg p-2 w-full'>
                                    <option className=' font-semibold h-20' value={limitObj.week}>7 days</option>
                                    <option className=' font-semibold h-20' value={limitObj.month}>30 days</option>
                                </select>
                                <input type="number" value={creditLimit} onChange={(e) => setCreditLimit(e.target.value)} className=' placeholder:font-[500] bg-gray-200 rounded-lg p-2 w-full' placeholder='per day credit limit' />

                            </div>
                            :
                            <div>
                                <input type="number" value={creditLimit} onChange={(e) => setCreditLimit(e.target.value)} className=' placeholder:font-[500] bg-gray-200 rounded-lg p-2 w-full' placeholder='enter credit' />

                            </div>
                    }
                    <button type='submit' className=' bg-blue-700 rounded-lg text-white w-full py-2 text-center'>Create Pricing</button>
                </form>
            </div>


            <br /> <br />
        </div>
    )
}
