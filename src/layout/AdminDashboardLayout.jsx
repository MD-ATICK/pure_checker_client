import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/admin/SideBar'
import { useUserContext } from '../context/Context'

function AdminDashboardLayout() {
  const { user, load } = useUserContext()
  return (
    <>
      {
        load === false &&
        (
          user && user.role === 'user' &&
          <div className=' flex items-start'>
            <div className=' sticky top-0'>
            <SideBar />
            </div>
            <Outlet />
          </div>

        )
      }
    </>
  )
}

export default AdminDashboardLayout
