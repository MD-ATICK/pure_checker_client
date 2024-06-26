import React from 'react'
import SideBar from '../components/admin/SideBar'
import { Outlet } from 'react-router-dom'
import { useUserContext } from '../context/Context'

function UserDashboardLayout() {
  const { user, load } = useUserContext()

  return (
    <>
      {
        load === false &&
        (
          user && user.role === 'user' &&
          <div className='flex items-start'>
            <div className=' sticky top-0 left-0'>

            <SideBar />
            </div>
            <Outlet />
          </div>

        )
      }
    </>
  )
}

export default UserDashboardLayout
