import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/Context'
import Block from '../pages/Block'

function MainLayout() {
    const { load, user, auth } = useUserContext()
    const navigate = useNavigate()

    useEffect(() => {
        auth()
    }, []);
    return (
        <div>
            {
                !load &&
                user && user.block &&
                <Block />
            }

            <>
                <Navbar />
                <Outlet />
                <Footer />
            </>
        </div>
    )
}

export default MainLayout
