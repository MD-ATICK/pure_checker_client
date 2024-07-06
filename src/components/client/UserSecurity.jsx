import { Button, Input } from '@chakra-ui/react'
import React from 'react'
import { greenToast, redToast, userApi } from '../../api/Api'
import { useUserContext } from '../../context/Context'
import { useState } from 'react'

const UserSecurity = () => {

    const { token } = useUserContext()

    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const updatePassword = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) return redToast('password not match')
        if (!token) return redToast('token not found')
        setLoading(true)
        const { status, data } = await userApi.put('/update-pass', {password}, { headers: { Authorization: `Bearer ${token}` } })
        if (status === 202) {
            greenToast(data.msg)
            setPassword('')
            setConfirmPassword('')
            setLoading(false)
        }
    }

    return (
        <form onSubmit={updatePassword} className='p-10 bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            <div className='space-y-5'>
                <div className='space-y-1'>
                    <label htmlFor='nPassword' className='ml-1'>
                        New Password
                    </label>
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id='nPassword'
                        type='text'
                        borderColor={"gray.400"}
                        placeholder='New password'
                    />
                </div>
                <div className='space-y-1'>
                    <label htmlFor='cPassword' className='ml-1'>
                        Confirm Password
                    </label>
                    <Input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        id='cPassword'
                        type='password'
                        borderColor={"gray.400"}
                        placeholder='Confirm password'
                    />
                </div>
            </div>
            <div className='flex w-full text-gray-600'>
                <div className='w-[30%]'>
                    <h4>Last Login was</h4>
                    <h4>Registered</h4>
                </div>
                <div className='w-[70%]'>
                    <h4>6/24/24, 6:48 AM</h4>
                    <h4>from IP address 58.145.190.205</h4>
                </div>
            </div>
            <Button type='submit' colorScheme='blue' className='w-[200px]'>
                {loading ? 'Loading...' : 'Save'}
            </Button>
        </form>
    )
}

export default UserSecurity
