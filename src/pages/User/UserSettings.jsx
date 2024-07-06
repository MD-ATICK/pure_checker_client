import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import UserGeneral from '../../components/client/UserGeneral'
import UserPaymentHistory from '../../components/client/UserPaymentHistory'
import UserSecurity from '../../components/client/UserSecurity'

const UserSettings = () => {
    const location = useLocation()

    const selectV = location?.state?.status
    const [select, setSelect] = useState(selectV || "general")


    return (
        <div className='p-[3vw] overflow-auto overflow-x-hidden w-full'>
            <div>
                <h3 className='text-xl font-bold mb-5'>Account Settings</h3>

                <div className='flex items-center mb-4 justify-between  gap-x-4 text-[14px]'>
                    <button onClick={() => setSelect("general")} className={` ${select === 'general' ? 'bg-blue-700 text-white' : 'bg-gray-200'} duration-500 rounded-full font-[500] text-[13px] md:text-[16px] py-2 w-full text-center border-r-[1px] border-gray-400`}>
                        GENERAL
                    </button>
                    <button onClick={() => setSelect("security")} className={` ${select === 'security' ? 'bg-blue-700 text-white' : 'bg-gray-200'} duration-500 rounded-full font-[500] text-[13px] md:text-[16px] py-2 w-full text-center border-r-[1px] border-gray-400`}>
                        SECURITY
                    </button>
                    <button onClick={() => setSelect("payment")} className={` ${select === 'payment' ? 'bg-blue-700 text-white' : 'bg-gray-200'} duration-500 rounded-full font-[500] text-[12px] md:text-[16px] py-2 w-full text-center`}>
                        PAYMENT HISTORY
                    </button>
                </div>
                {
                    select === "general" ? <UserGeneral /> : select === "security" ? <UserSecurity /> : <UserPaymentHistory />
                }
            </div>
        </div>
    )
}

export default UserSettings
