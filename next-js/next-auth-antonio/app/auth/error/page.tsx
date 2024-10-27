import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='w-[90vw]  sm:w-[400px] rounded-xl shadow-lg p-6 bg-gradient-to-r from-blue-600 to-blue-600 via-sky-500 flex justify-center items-center flex-col text-black font-medium'>
      <p className=' text-sm'>something to wrong.</p> <br />
      <Link href={'/auth/login'} className=' text-sm underline font-medium' >Back to login</Link>
    </div>
  )
}
