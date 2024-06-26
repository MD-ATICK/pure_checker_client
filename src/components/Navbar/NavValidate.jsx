import React from 'react'
import { useUserContext } from '../../context/Context';
import { Link, useNavigate } from 'react-router-dom';
import NavbarDrawer from './NavbarDrawer';
import { IoLogOutOutline } from "react-icons/io5";


function NavValidate({ open, setOpen, navLists }) {

    const { load, user, userIp, logout } = useUserContext();
    const navigate = useNavigate()

    return (
        <div className=''>
            {

                !user ?
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
                    </ul> :
                    <div className=' group cursor-pointer flex items-center gap-x-3'>
                        <Link to={user && user.role === 'admin' ? '/admin/dashboard' : '/user/checker'} className=' bg-white text-black py-2 px-5 rounded-lg'>
                            Go to Dashboard
                        </Link>
                        <button onClick={() => {
                            logout()
                            navigate('/')
                        }} className=' bg-white text-red-600 h-10 w-10 rounded-md flex justify-center items-center text-2xl'>
                            <IoLogOutOutline />
                        </button>
                        {/* <div
                                className={`  hidden w-40 bg-gray-100 top-[52px] profile right-0 fixed  group-hover:flex flex-col items-start rounded-lg`}
                            >
                                <Link
                                    to={"/account"}
                                    className=' text-left p-2 z-20 rounded-t-lg  hover:bg-blue-300 w-full font-semibold px-4'
                                >
                                    Account
                                </Link>
                                <Link
                                    to={
                                        user.role === "admin"
                                            ? "/admin/dashboard"
                                            : "/admin/dashboard"
                                    }
                                    className=' text-left rounded-b-lg p-2 z-[20] hover:bg-blue-300 w-full font-semibold px-4'
                                >
                                    Dashboard
                                </Link>
                            </div> */}
                    </div>

            }
        </div>
    )
}

export default NavValidate
