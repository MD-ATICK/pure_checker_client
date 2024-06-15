import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../context/Context'
import { SyncLoader } from 'react-spinners'

function Navbar() {
    const navigate = useNavigate()
    const { load , user} = useUserContext()
    return (
        <div className=' h-[90px]  w-full bg-white '>
            <div className=' h-full container mx-auto flex justify-between  items-center'>
                <Link to={'/'}>
                <img src="/3.jpg" className=' h-12 bg-white' alt="pure checker" />
                </Link>
                <nav className=' hidden lg:flex items-center gap-x-[2vw] font-semibold'>
                    <NavLink to={'/'} >Home</NavLink>
                    <NavLink to={'/bulk-checker'} >Bulk Check</NavLink>
                    <NavLink to={'/plan'} >Plan</NavLink>
                    <NavLink to={'/api-docs'} >Api Docs</NavLink>
                    <NavLink to={'/contact'} >FAQS</NavLink>
                    <NavLink to={'/contact'} >Contact Us</NavLink>
                </nav>
                {
                    load ?  <div>
                        <SyncLoader color='blue' />
                    </div> :(
                        user ?
                            <div className='flex items-center gap-x-10'>
                                <p className=' font-semibold'>Credit : <span className=' font-bold text-2xl bg-gradient-to-r from-pink-700 to-purple-700 text-transparent bg-clip-text'>{user.credit}</span></p>
                                <button onClick={() => navigate('/account')}>
                                    <img className=' h-10 aspect-square rounded-full' src="/user.png" alt="" />
                                </button>
                            </div> :
                            <button onClick={() => navigate('/login')} className=' py-3 hover:shadow-lg duration-300 px-8 bg-blue-700  rounded-lg font-semibold text-gray-100'>Login</button>
                    )
                }

            </div>

        </div>
    )
}

export default Navbar
