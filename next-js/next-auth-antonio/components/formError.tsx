import { Info } from 'lucide-react';
import React from 'react'

export default function FormError({ message }: { message?: string }) {


    return (
        <div className={` ${!message && ' !h-0 !py-0 !opacity-0 !overflow-hidden'} duration-300  w-full text-center font-medium flex items-center justify-center gap-2 py-3 rounded-lg  bg-red-200`}>
           <Info className=' text-red-700 h-5' /> <p className=' text-sm text-red-700'>{message}</p>
        </div>
    )
}
