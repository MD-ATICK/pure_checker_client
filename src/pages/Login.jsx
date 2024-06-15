import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/Context';

function Login() {

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const { login } = useUserContext()
  const navigate = useNavigate()

  const LoginSub = (e) => {
    e.preventDefault()
    console.log(loginData)
    const data = login(loginData)
    if (data === 'navigate') return navigate('/')
  }

  return (
    <div className=' w-full h-screen grid place-content-center'>

    <form className='p-10 flex bg-gray-200 rounded-xl flex-col gap-y-2 items-start' onSubmit={LoginSub}>
      <input type="email" required={true} value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} placeholder='email' className=' font-[500] py-3 px-8 border-2 border-black rounded-lg' />
      <input type="text" required={true} value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} placeholder='password' className=' font-[500] py-3 px-8 border-2 border-black rounded-lg' />
      <button className=' bg-blue-700 mt-3 rounded-lg py-3 text-center w-full font-semibold text-white'>Login</button>
      <br />
      <Link to={'/register'} className=' underline'>don't have any account?</Link>
    </form>
    </div>
  )
}

export default Login
