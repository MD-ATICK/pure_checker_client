import React from 'react'
import Navbar from './_components/Navbar'

export default function layout({ children } : {children : React.ReactNode}) {
    return (
        <div className=" min-h-screen py-8 flex gap-y-10 flex-col justify-center items-center w-full bg-gradient-to-r from-blue-800 via-sky-600 to-blue-800 ">
            <Navbar />
            {children}
        </div>
    )
}
