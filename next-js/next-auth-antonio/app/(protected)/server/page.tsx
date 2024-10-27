import UserInfo from '@/components/user-info'
import { currentUser } from '@/lib/reuse/currentUser'
import React from 'react'

export default async function Server() {

  const user = await currentUser()
console.log({user})
  return (
    <div className=' max-w-[700px] w-full'>
      <UserInfo label='🟢 Server Component' user={user} />
    </div>
  )
}
