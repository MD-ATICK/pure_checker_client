import { Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { AiTwotoneApi } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'
import { greenToast, redToast, userApi } from '../../api/Api'
import { useUserContext } from '../../context/Context'
import moment from 'moment'
import { Link, useNavigate } from 'react-router-dom'

const UserApi = () => {

    const [apiName, setApiName] = useState('');
    const [loading, setLoading] = useState(false);
    const { token, allApi, setAllApi } = useUserContext()
    const navigate = useNavigate()

    const CreteApiHandler = async (e) => {
        e.preventDefault()
        if (!token) return redToast('token not found')
        setLoading(true)
        const { data, status } = await userApi.post('/create-api', { apiName }, { headers: { Authorization: `Bearer ${token}` } })
        if (status === 201) {
            setLoading(false)
            console.log(data)
            setAllApi([...allApi, data.newApi])
            greenToast(data.msg)
        }
    }



    const getAllApi = async () => {
        if (!token) return redToast('token not found')
        const { data, status } = await userApi.get('/get-api', { headers: { Authorization: `Bearer ${token}` } })
        if (status === 200) {
            console.log(data)
            setAllApi(data.allApi)
        }
    }


    useEffect(() => {
        getAllApi()
    }, []);

    return (
        <div className='p-10 w-full'>
            <h3 className='text-xl ml-1 font-bold text-primary py-2'>API</h3>

            <div>
                <div className='rounded-lg shadow-lg border-[1px] border-primary p-5 bg-[#EDF1F9] flex  flex-col gap-5 items-center justify-center min-h-[40vh]'>
                    <AiTwotoneApi size={70} color='#2B6CB0' />

                    <h4>Create a new API</h4>

                    <Button
                        colorScheme='teal'
                        size={"sm"}
                        display={"flex"}
                        gap={"2px"}
                        alignItems={"center"}
                    >
                        <IoMdAdd size={20} />
                        New API
                    </Button>
                </div>

                <div >
                    <br /> <br />
                    <h1>initial create new api key</h1>
                    <form action="" onSubmit={CreteApiHandler}>
                        <input required={true} type="text" value={apiName} onChange={(e) => setApiName(e.target.value)} className=' border border-primary rounded-lg p-1' />
                        <br /> <br />
                        <button type='submit' className=' bg-primary py-1 px-5 text-white'>{loading ? 'loading... ' : 'create'}</button>
                    </form>
                    <br /> <br />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 gap-5'>
                    {
                        allApi?.length > 0 &&
                        allApi.map(api => {
                            const { _id, deliverable, invalid, apiKey, apiName, apiUsage, userId, createdAt } = api;
                            return <div key={_id} className='rounded-lg shadow-lg w-full border-[1px] border-primary  overflow-hidden last:border-none'>
                                <div onClick={() => navigate('/user/single-api', { state: { apiKey, userId, apiName } })} className='bg-gray-100 cursor-pointer p-5 border-b-[1px] border-gray-400'>
                                    <h4 className='font-medium text-gray-700'>{apiName}</h4>
                                    <h4 className='text-gray-500 font-medium text-sm'>
                                        {moment(createdAt).format('LLL')}
                                    </h4>
                                </div>
                                <div className='bg-green-200 border-b-[1px] border-gray-400 p-5 flex items-center justify-between text-accent'>
                                    <label>Deliverable</label>
                                    <span>{deliverable}</span>
                                </div>
                                <div className='bg-red-200 border-b-[1px] border-gray-400 p-5 flex items-center justify-between text-accent'>
                                    <label>Undeliverable</label>
                                    <span>{invalid}</span>
                                </div>
                                <div className='bg-slate-200 p-5 flex items-center justify-between text-accent'>
                                    <label>Api Usage</label>
                                    <span>{apiUsage}</span>
                                </div>
                            </div>
                        })
                    }
                    {/* <div className='rounded-lg shadow-lg w-full border-[1px] border-primary overflow-hidden'>
                        <div className='bg-gray-100 p-5 border-b-[1px] border-gray-400'>
                            <h4 className='font-medium text-gray-700'>first api key</h4>
                            <h4 className='text-gray-500 font-medium text-sm'>
                                24/06/2024
                            </h4>
                        </div>
                        <div className='bg-green-200 border-b-[1px] border-gray-400 p-5 flex items-center justify-between text-accent'>
                            <label>Deliverable</label>
                            <span>0</span>
                        </div>
                        <div className='bg-red-200 border-b-[1px] border-gray-400 p-5 flex items-center justify-between text-accent'>
                            <label>Undeliverable</label>
                            <span>0</span>
                        </div>
                        <div className='bg-slate-200 p-5 flex items-center justify-between text-accent'>
                            <label>Undeliverable</label>
                            <span>0</span>
                        </div>
                    </div>
                    <div className='rounded-lg shadow-lg w-full border-[1px] border-primary overflow-hidden'>
                        <div className='bg-gray-100 p-5 border-b-[1px] border-gray-400'>
                            <h4 className='font-medium text-gray-700'>first api key</h4>
                            <h4 className='text-gray-500 font-medium text-sm'>
                                24/06/2024
                            </h4>
                        </div>
                        <div className='bg-green-200 border-b-[1px] border-gray-400 p-5 flex items-center justify-between text-accent'>
                            <label>Deliverable</label>
                            <span>0</span>
                        </div>
                        <div className='bg-red-200 border-b-[1px] border-gray-400 p-5 flex items-center justify-between text-accent'>
                            <label>Undeliverable</label>
                            <span>0</span>
                        </div>
                        <div className='bg-slate-200 p-5 flex items-center justify-between text-accent'>
                            <label>Undeliverable</label>
                            <span>0</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div >
    )
}

export default UserApi
