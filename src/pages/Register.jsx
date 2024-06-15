import React, { useState } from 'react'
import { useUserContext } from '../context/Context';
import { Link, useNavigate } from 'react-router-dom';

function Register() {

    const [regisData, setRegisData] = useState({ name: '', email: '', password: '' });
    const { register } = useUserContext()
    const navigate = useNavigate()

    const RegisterSub = (e) => {
        e.preventDefault()
        const data = register(regisData)
        if (data === 'navigate') return navigate('/')

    }

    return (
        <div className=' w-full h-screen grid place-content-center'>
            <form className='p-10 flex rounded-xl bg-gray-200 flex-col gap-y-2 items-start' onSubmit={RegisterSub}>
                <input type="text" required={true} value={regisData.name} onChange={(e) => setRegisData({ ...regisData, name: e.target.value })} placeholder='name' className=' font-[500] py-3 px-8 border-2 border-black rounded-lg' />
                <input type="email" required={true} value={regisData.email} onChange={(e) => setRegisData({ ...regisData, email: e.target.value })} placeholder='email' className=' font-[500] py-3 px-8 border-2 border-black rounded-lg' />
                <input type="text" required={true} value={regisData.password} onChange={(e) => setRegisData({ ...regisData, password: e.target.value })} placeholder='password' className=' font-[500] py-3 px-8 border-2 border-black rounded-lg' />
                <button className=' bg-blue-700 rounded-lg py-3 w-full text-center mt-5 font-semibold text-white'>Register</button>
                <br />
                <Link to={'/login'} className=' underline'>already have an account?</Link>

            </form>
        </div>
    )
}

export default Register
