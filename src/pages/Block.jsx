import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/Context'

function Block() {

  const { logout } = useUserContext()
  const navigate = useNavigate()

  const logClient = () => {
    logout()
    navigate('/login', { replace: true })
  }
  return (
    <div className=' text-center bg-white h-screen w-screen fixed top-0 left-0 py-8'>
      <h1 className=' text-5xl font-bold'>Sorry! 😔</h1> <br />
      <h1 className=' text-4xl font-bold text-red-600'>You are Blocked By Admin.</h1>
      <button onClick={logClient} className=' font-semibold mt-3'>Logout</button>
    </div>
  )
}

export default Block
