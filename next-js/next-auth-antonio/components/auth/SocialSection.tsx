"use client"
import { Button } from "../ui/button";
import google from '@/public/google.png'
import github from '@/public/github.png'
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function SocialSection() {

  const socialLogin = async (provider  : ("google" | "github")) => {
    await signIn(provider, {callbackUrl : "/settings"})
  }

  return (
    <> 
       <Button onClick={() => socialLogin('google')} variant={'outline'} size={'lg'}  className=' text-sm w-full'>
        <Image src={google} height={25} alt="google" />
       </Button>
       <Button onClick={() => socialLogin("github")} variant={'outline'} size={'lg'}  className=' text-sm w-full'>
        <Image src={github} height={25} alt="google" />
       </Button>
    </>
  )
}
