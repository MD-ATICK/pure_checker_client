import React from 'react'
import lock from '@/public/lock.png'
import Image from 'next/image'
import Link from 'next/link'

export default function BoxCard({ children, header, title, backBtnText, backBtnLink }: { children: React.ReactNode, header?: string, title?: string, backBtnLink?: string, backBtnText?: string, }) {
    return (
        <div className='w-[90vw]  sm:w-[450px] rounded-2xl shadow-lg p-8 bg-white border-b-2 border-r-2 border-sky-600 flex justify-center items-center flex-col text-black font-medium'>
            {header && <div className='flex items-center gap-3'>
                <Image src={lock} height={40} width={40} alt='lock' />
                <h1 className=' font-bold  text-3xl'>{header}</h1>
            </div>}
            <p className=' text-sm py-3 capitalize font-medium'>{title}</p>
            {children}
            {
                backBtnLink && backBtnText &&
                <Link href={backBtnLink} className=' pt-5 font-medium capitalize text-sm hover:underline duration-300' >{backBtnText}</Link>
            }
        </div>
    )
}
