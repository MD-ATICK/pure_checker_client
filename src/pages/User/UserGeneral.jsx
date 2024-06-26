import { Button, Input } from '@chakra-ui/react'
import React from 'react'

const UserGeneral = () => {
    return (
        <div>
            <div className='p-10 bg-gray-100 grid grid-cols-2 gap-10'>
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
                        <Input borderColor={"gray.400"} placeholder='Name' />
                    </div>
                    <div className='space-y-1'>
                        <label htmlFor='phone' className='ml-1'>
                            Mobile phone
                        </label>
                        <Input borderColor={"gray.400"} placeholder='Mobile number' />
                    </div>
                    <div className='space-y-1'>
                        <label htmlFor='city' className='ml-1'>
                            City
                        </label>
                        <Input borderColor={"gray.400"} placeholder='City' />
                    </div>
                </div>
                <div className='space-y-5'>
                    <div className='space-y-1'>
                        <label htmlFor='country' className='ml-1'>
                            Country
                        </label>
                        <Input borderColor={"gray.400"} placeholder='Country' />
                    </div>
                    <div className='space-y-1'>
                        <label htmlFor='address' className='ml-1'>
                            Address
                        </label>
                        <Input borderColor={"gray.400"} placeholder='Address' />
                    </div>
                    <div className='space-y-1'>
                        <label htmlFor='zipCode' className='ml-1'>
                            Zip code
                        </label>
                        <Input borderColor={"gray.400"} placeholder='Zip code' />
                    </div>
                </div>
                <Button colorScheme='blue' className='w-[200px]'>
                    Save
                </Button>
            </div>
        </div>
    )
}
