import { Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useUserContext } from '../../context/Context'
import { greenToast, userApi } from '../../api/Api'

const UserGeneral = () => {

    const { user, token, setUser } = useUserContext()
    const [userData, setUserData] = useState({ name: user?.name, country: user?.country, email: user?.email, address: user?.address, city: user?.city, mobileNumber: user?.mobileNumber, zipCode: user?.zipCode });
    const [loading, setLoading] = useState(false);

    const updateProfile = async (e) => {
        e.preventDefault()   
        setLoading(true)  
        const { status, data } = await userApi.put('/update-profile', userData, { headers: { Authorization: `Bearer ${token}` } })
        if (status === 202) {
            console.log(data)
            setUser(data.user)
            greenToast(data.msg)
            setLoading(false)
        }
    }

    return (
        <form onSubmit={updateProfile} className='p-10 bg-gray-100 grid grid-cols-2 gap-10'>
            <div className='space-y-5'>
                <div className='space-y-1'>
                    <label htmlFor='email' className='ml-1'>
                        Email
                    </label>
                    <Input
                        id='email'
                        borderColor={"gray.400"}
                        defaultValue={"earnmoneryforufuture18@gmail.com"}
                        readOnly
                    />
                </div>
                <div className='space-y-1'>
                    <label htmlFor='name' className='ml-1'>
                        Name
                    </label>
                    <Input value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} borderColor={"gray.400"} placeholder='Name' />
                </div>
                <div className='space-y-1'>
                    <label htmlFor='phone' className='ml-1'>
                        Mobile phone
                    </label>
                    <Input value={userData.mobileNumber} onChange={(e) => setUserData({ ...userData, mobileNumber: e.target.value })} borderColor={"gray.400"} placeholder='Mobile number' />
                </div>
                <div className='space-y-1'>
                    <label htmlFor='city' className='ml-1'>
                        City
                    </label>
                    <Input value={userData.city} onChange={(e) => setUserData({ ...userData, city: e.target.value })} borderColor={"gray.400"} placeholder='City' />
                </div>
            </div>
            <div className='space-y-5'>
                <div className='space-y-1'>
                    <label htmlFor='country' className='ml-1'>
                        Country
                    </label>
                    <Input value={userData.country} onChange={(e) => setUserData({ ...userData, country: e.target.value })} borderColor={"gray.400"} placeholder='Country' />
                </div>
                <div className='space-y-1'>
                    <label htmlFor='address' className='ml-1'>
                        Address
                    </label>
                    <Input value={userData.address} onChange={(e) => setUserData({ ...userData, address: e.target.value })} borderColor={"gray.400"} placeholder='Address' />
                </div>
                <div className='space-y-1'>
                    <label htmlFor='zipCode' className='ml-1'>
                        Zip code
                    </label>
                    <Input value={userData.zipCode} onChange={(e) => setUserData({ ...userData, zipCode: e.target.value })} borderColor={"gray.400"} placeholder='Zip code' />
                </div>
            </div>
            <Button type='submit' colorScheme='blue' className='w-[200px]'>
                {loading? 'Loading...' : "Save"}
            </Button>
        </form>
    )
}

export default UserGeneral
