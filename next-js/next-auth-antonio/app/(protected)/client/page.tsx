"use client"
import UserInfo from '@/components/user-info'
import { useCurrentUser } from '@/hooks/use-current-user'
import React from 'react'

export default function Client() {

    const user = useCurrentUser()

    return (
        <div className='max-w-[700px] w-full'>
            <UserInfo label='🔴 Client Component' user={user} />
        </div>
    )
}
