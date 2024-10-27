"use client"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { login } from "@/lib/login"
import lock from '@/public/lock.png'
import { LoginSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import FormError from '../formError'
import FormSuccess from '../formSuccess'
import { Button } from "../ui/button"
import SocialSection from './SocialSection'
import { useSearchParams } from 'next/navigation'
import BoxCard from '../boxCard'


export default function LoginForm() {

    const [showTwoFactor, setShowTwoFactor] = useState<boolean | undefined>(false);
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const [isPending, setIsPending] = useState(false);

    const searchParams = useSearchParams()
    let urlError = searchParams.get("error") === "OAuthAccountNotLinked" ? "email already use in different provider" : ""

    const form = useForm<z.infer<typeof LoginSchema>>({ resolver: zodResolver(LoginSchema), defaultValues: { email: '', password: '' } })

    const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
        setError('')
        setSuccess('')
        setIsPending(true)
        const data = await login(values)
        setError(data?.error)
        setSuccess(data?.success)
        setShowTwoFactor(data?.twoFactor)
        setIsPending(false)
    }

    return (
        <BoxCard header='login' title='Welcome to login!' backBtnText='have not any account?' backBtnLink='/auth/register'>

            {/* two factor form  */}
            {
                showTwoFactor &&
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="py-3 space-y-5 w-full">
                        <FormField control={form.control} name="otp" render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Two Factor Code</FormLabel>
                                <FormControl>
                                    <Input disabled={isPending} {...field} className=' text-black font-semibold text-md' maxLength={6} placeholder="123456" type="text" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        {
                            !isPending &&
                            <div>
                                <FormError message={error || urlError} />
                                <FormSuccess message={success} />
                            </div>
                        }

                        <Button disabled={isPending} type="submit" className="w-full bg-black h-12" >Login</Button>
                    </form>
                </Form>
            }

            {/* email and password form */}
            {
                !showTwoFactor &&
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="py-3 space-y-5 w-full">
                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input disabled={isPending} {...field} className=' text-black' placeholder="atick@example.com" type="email" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem className="w-full flex flex-col items-start gap-2">
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input disabled={isPending} {...field} className=' text-black' placeholder="*******" type="password" />
                                </FormControl>
                                <FormMessage />
                                <Link href={'/auth/reset'} className=' hover:border-b-2 border-white cursor-pointer text-sm '>forgot password?</Link>
                            </FormItem>
                        )} />

                        {
                            !isPending &&
                            <div>
                                <FormError message={error || urlError} />
                                <FormSuccess message={success} />
                            </div>
                        }

                        <Button disabled={isPending} type="submit" className="w-full bg-black h-12" >Login</Button>
                    </form>
                </Form>
            }
            <p className=' opacity-50 text-sm'>or</p>
            <div className='flex justify-between py-1 items-center mt-4 w-full gap-2'>
                <SocialSection />
            </div>
        </BoxCard>
    )
}
