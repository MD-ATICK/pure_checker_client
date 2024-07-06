import React from 'react'
import SideBar from '../components/admin/SideBar'
import { Outlet } from 'react-router-dom'
import { useUserContext } from '../context/Context'
import Maintenance from '../components/Maintenance'

function UserDashboardLayout() {
  const { user, load, mLoading, maintenance } = useUserContext()

  return (
    <>
      {
        mLoading === false &&
        maintenance ?
          <Maintenance maintenance={maintenance} />
          :
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
