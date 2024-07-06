import React from 'react';
import { MdDashboardCustomize } from 'react-icons/md';
import { IoLogOutOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/Context';
import NavbarDrawer from './NavbarDrawer';


function NavValidate({ open, setOpen, navLists }) {

    const { user, logout, handleSignOut } = useUserContext();
    const navigate = useNavigate()

    return (
        <div className=''>
            {

                user && user !== 'null' ?
                    <div className=' cursor-pointer flex items-center gap-x-3'>
                        <li className='md:hidden  flex justify-center items-center'>
                            <NavbarDrawer open={open} setOpen={setOpen} navLists={navLists} />
                        </li>
                        <Link to={user && user.role === 'admin' ? '/admin/dashboard' : '/user/checker'} className=' group bg-white flex items-center gap-x-2 text-sm border-[4px] border-gray-300 font-medium  duration-300  py-2 px-5 rounded-lg'>
                            Dashboard <MdDashboardCustomize className=' font-bold text-xl group-hover:translate-x-1 duration-300' />
                        </Link>
                        <button onClick={() => {
                            if (window.confirm('are you sure?')) {
                                logout()
                                handleSignOut()
                                localStorage.removeItem('token')
                                navigate('/login')
                            }
                        }} className=' bg-white text-red-600 h-11 gap-2 px-3 group rounded-md font-[500] flex justify-center items-center text-sm'>
                            Logout
                            <IoLogOutOutline className=' font-bold text-xl group-hover:translate-x-1 duration-300' />
                        </button>

                    </div> :
                    <ul className='flex  items-center gap-5 md:gap-10'>
                        <li className='text-secondary'>
                            <Link to={"/login"}>Login</Link>
                        </li>
                        <li className='bg-secondary text-primary font-medium py-[10px] px-5 rounded-lg'>
                            <Link to={"/register"}>Register now</Link>
                        </li>
                        <li className='md:hidden'>
                            <NavbarDrawer open={open} setOpen={setOpen} navLists={navLists} />
                        </li>
                    </ul>

            }
        </div>
    )
}

export default NavValidate
