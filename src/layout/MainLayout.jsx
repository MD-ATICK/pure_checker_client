import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/Context'
import Block from '../pages/Block'

function MainLayout() {
    const { load, user, auth, token, ipAuth } = useUserContext()
    const navigate = useNavigate()


    return (
        <div>
            {
                !load &&
                user && user.block &&
                <Block />
            }

            {
                load === false ?
                    <>
                        <Navbar />
                        <Outlet />
                        <Footer />
                    </>
                    :
                    <div>
                        <h1 className=' p-10 text-5xl font-bold text-center'>Loading...</h1>
                    </div>
            }
        </div>
    )
}

export default MainLayout
