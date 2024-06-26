import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useUserContext } from '../../context/Context';


function SideBar() {

    const { user } = useUserContext()

    const { AdminSideBar } = useUserContext()
    console.log(AdminSideBar)
    return (
        <div className={` ${!AdminSideBar ? '!w-0 overflow-hidden p-0' : ''} duration-500 h-screen w-full md:relative sm:w-[350px] bg-primary text-white`}>
            <Link to={'/'} className=' w-full flex items-end gap-x-2 p-8 '>
                <img src='/10.png' alt='' className='h-12 aspect-square bg-gray-100 p-2' />
                <span className=' font-bold text-3xl'> ure Checker</span>
            </Link>
            <div className=' w-full px-8'>
                {
                    user?.subscription &&
                    <p className='  text-xl text-green-300 font-semibold '> - Subscription Running</p>
                }
            </div>
            {
                user && user.role === 'admin' ?
                    <div className='sidebar flex flex-col py-10 w-full '>
                        <NavLink className='  font-medium duration-500 hover:px-8 p-4 border-y-2 border-blue-400' to='/admin/dashboard' >Dashboard</NavLink>
                        <NavLink className=' font-medium duration-500 hover:px-8 p-4 border-b-2 border-blue-400' to='/admin/pricing' >Pricing</NavLink>
                        {/* <NavLink className=' font-medium duration-500 hover:px-8 p-4 border-b-2 border-blue-400' to='/admin/users' >Users</NavLink> */}
                    </div>
                    :
                    <div className='sidebar flex flex-col py-10 w-full '>
                        <NavLink className='  font-semibold duration-500 hover:px-8 p-4 border-y-2 border-blue-400' to='/user/checker' >Email Checker</NavLink>
                        <NavLink className=' font-semibold duration-500 hover:px-8 p-4 border-b-2 border-blue-400' to='/user/stats' >Stats</NavLink>
                        <NavLink className=' font-semibold duration-500 hover:px-8 p-4 border-b-2 border-blue-400' to='/user/api' >API</NavLink>
                        <NavLink className=' font-semibold duration-500 hover:px-8 p-4 border-b-2 border-blue-400' to='/user/settings' >Settings</NavLink>
                    </div>
            }

        </div>
    )
}

export default SideBar
