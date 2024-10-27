"use client"
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '../ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { User } from 'lucide-react'
import { logout } from '@/lib/logout'
import { useCurrentUser } from '@/hooks/use-current-user'

export default function UserButton() {

    const user = useCurrentUser();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className=' outline-none'>
                <Avatar>
                    <AvatarImage src={user?.image || ''} />
                    <AvatarFallback className=' bg-amber-700 rounded-full text-white'>
                        <User size={20} />
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem className=' font-medium cursor-pointer'>Profile</DropdownMenuItem>
                <DropdownMenuItem className=' font-medium cursor-pointer'>Settings</DropdownMenuItem>
                <DropdownMenuItem className=' font-medium cursor-pointer' onClick={async () => await logout()}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
