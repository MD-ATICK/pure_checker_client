import React, { useState } from 'react'
import { SyncLoader } from 'react-spinners'
import UserManagementTable from '../../components/admin/UserManagementTable'
import { useUserContext } from '../../context/Context'

function Users() {

    const { getUsers, currentPage, setSearch } = useUserContext()
    const [getLoading, setGetLoading] = useState(false);


    const handleChange = async (search) => {
        setGetLoading(true)
        setSearch(search)
        await getUsers({ search, page: currentPage })
        setGetLoading(false)
    }

    return (
        <div className=' w-full py-6 overflow-hidden'>
            <div className=' w-full flex relative justify-end h-[40px] px-10'>
                <input type="text" onChange={(e) => handleChange(e.target.value)} className=' w-[30%] border-2 rounded-md focus:border-primary border-gray-400 focus:outline-none px-4 py-2' placeholder='search user...' />
                {getLoading &&
                    <SyncLoader size={10} color='blue' className=' absolute right-12 top-[30%]' />
                }
            </div>

            <div className=' border-primary px-4 rounded-lg'>
                <UserManagementTable />

            </div>
        </div>
    )
}

export default Users
