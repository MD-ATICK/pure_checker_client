import { ExtendedUser } from '@/types/nextauth'
import { Card, CardContent, CardHeader } from './ui/card'

interface UserInfoProps {
    label: string,
    user?: ExtendedUser
}

export default function UserInfo({
    label,
    user
}: UserInfoProps) {

    return (
        <Card className=' max-w-[700px] w-full text-center shadow-md'>
            <CardHeader>
                <p className=' font-bold'> {label}</p>
            </CardHeader>
            <CardContent className=' space-y-4'>
                <div className='flex flex-row items-center justify-between rounded-lg border p-2 text-sm font-semibold shadow-sm'>
                    <p>ID</p>
                    <p className={` bg-gray-200 px-3 rounded-md p-1`}>{user?.id}</p>
                </div>
                <div className='flex flex-row items-center justify-between rounded-lg border p-2 text-sm font-semibold shadow-sm'>
                    <p>Name</p>
                    <p className={` bg-gray-200 px-3 rounded-md p-1`}>{user?.name}</p>
                </div>
                <div className='flex flex-row items-center justify-between rounded-lg border p-2 text-sm font-semibold shadow-sm'>
                    <p>Email</p>
                    <p className={` bg-gray-200 px-3 rounded-md p-1`}>{user?.email}</p>
                </div>
                <div className='flex flex-row items-center justify-between rounded-lg border p-2 text-sm font-semibold shadow-sm'>
                    <p>Role</p>
                    <p className={` bg-gray-200 px-3 rounded-md p-1`}>{user?.role}</p>
                </div>
                <div className='flex flex-row items-center justify-between rounded-lg border p-2 text-sm font-semibold shadow-sm'>
                    <p>Two Factor Authentication</p>
                    <p className={`${user?.isTwoFactorEnabled ? 'bg-green-600  ' : 'bg-red-600'} text-[12px] shadow-lg px-3 text-white rounded-md p-1`}>{user?.isTwoFactorEnabled ? "ON" : "OFF"}</p>
                </div>
            </CardContent>
        </Card>
    )
}
