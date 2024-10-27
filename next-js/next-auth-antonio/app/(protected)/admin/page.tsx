"use client"
import FormSuccess from '@/components/formSuccess'
import RoleGate from '@/components/role-gate'
import { Card, CardHeader } from '@/components/ui/card'

export default function Admin() {
    return (

        <Card className=' font-medium max-w-[700px] w-full text-center bg-white p-3 rounded-lg'>
            <CardHeader className=' text-2xl font-bold'>
                <p>🤖 Admin</p>
            </CardHeader>
            <RoleGate allowedRole='ADMIN' >
                <FormSuccess message='you allowed to show this content.' />
            </RoleGate>
        </Card>
    )
}
