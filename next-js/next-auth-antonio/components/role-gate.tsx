

import { useCurrentUser } from '@/hooks/use-current-user'
import React from 'react'
import FormError from './formError'

interface RoleGateProps {
    children: React.ReactNode,
    allowedRole: string,
}
export default function RoleGate({ children, allowedRole }: RoleGateProps) {

    const role = useCurrentUser()?.role

    if (role !== allowedRole) {
        return (
            <FormError message='You do not have permission to view this content' />
        )
    }

    return (
        <>
            {children}
        </>
    )
}
