import { CircleCheckBig, DoorOpen, Info } from 'lucide-react';
import React from 'react'

export default function FormSuccess({ message }: { message?: string }) {


    if(!message) return;

    return (
        <div className=' w-full text-center border-green-300 flex items-center font-medium justify-center gap-2 py-3 rounded-lg bg-green-200'>
           <CircleCheckBig className=' text-green-700 h-5' /> <p className=' text-sm text-green-800'>{message}</p>
        </div>
    )
}
