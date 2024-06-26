import React, { useEffect, useState } from 'react'
import UserPaymentHistory from '../../components/client/UserPaymentHistory'
import UserGeneral from '../../components/client/UserGeneral'
import UserSecurity from '../../components/client/UserSecurity'

const UserSettings = () => {

    const [select, setSelect] = useState("general")
  

    return (
        <div className='m-10 w-full'>
            <div>
                <h3 className='text-xl font-bold mb-5'>Account Settings</h3>

                <div className='flex items-center justify-between'>
                    <button onClick={() => setSelect("general")} className='bg-gray-200 py-2 w-full text-center border-r-[1px] border-gray-400'>
                        GENERAL
                    </button>
                    <button onClick={() => setSelect("security")} className='bg-gray-200 py-2 w-full text-center border-r-[1px] border-gray-400'>
                        SECURITY
                    </button>
                    <button onClick={() => setSelect("payment")} className='bg-gray-200 py-2 w-full text-center'>
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
