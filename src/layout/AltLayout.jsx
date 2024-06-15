import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useUserContext } from '../context/Context'

function AltLayout() {
    const { user, load } = useUserContext()
    return (
        <div>
            {
                !load &&
                    user ?
                    <Navigate to={'/'} />
                    :
                    <Outlet />
            }
        </div>
    )
}

export default AltLayout
