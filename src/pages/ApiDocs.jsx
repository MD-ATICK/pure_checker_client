import React from 'react'
import { useUserContext } from '../context/Context'

function ApiDocs() {

  const { load, user, key, setKey } = useUserContext()

  return (
    <div className=' m-10 max-w-screen-xl bg-gray-200 border flex flex-col gap-y-4 border-gray-300 mx-auto rounded-xl p-8 font-semibold'>
      <h1 className=' font-bold text-4xl'>PureChecker API Documentation</h1>
      <p className=' text-gray-700'>Website ychecker.com is built on Sonjj.com's API system. With Sonjj's powerful API system, this website operates very stably and can withstand high traffic without having to spend extra money on servers. Refer to the API documentation below</p>
      <br />
      <p className=' bg-gray-100 py-2 px-4 text-center text-lg rounded-lg'>Our Api : <span className=' text-lg bg-gradient-to-r bg-gray-100 from-pink-700 to-purple-700 text-transparent bg-clip-text'>http://localhost:9999/api/v1/gmail/check/single?key=loginforkey&gmail=example@gmail.com</span></p>
      <br />
      <div className='flex items-center h-[40px] gap-x-6'>
        <div className=' w-[600px] h-full group relative rounded-lg overflow-hidden'>
          {user && key && <p className=' font-bold text-2xl bg-blue-200 py-1 rounded-lg  px-6 border h-full border-gray-500'>at_7avCGlfUhgBWoRADi9FNrA6FwBL0g</p>}
        </div>
      </div>
      <br />

      {!load && user && <button onClick={() => setKey(true)} className='bg-blue-700 text-white font-semibold rounded-lg py-3 px-8'>Click for key</button>}
    </div>
  )
}

export default ApiDocs
