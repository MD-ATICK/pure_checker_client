"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

interface loginButtonProps {
    children: React.ReactNode,
    mode?: "modal" | "redirect",
    asChild?: boolean
}


export default function LoginButton({
    children,
    mode = 'redirect',
    asChild
}: loginButtonProps) {

    const router = useRouter()

    const buttonClick = () => {
        return router.push('/auth/login')
    }

    return (
        <span onClick={buttonClick}>
            {children}
        </span>
    )
}
