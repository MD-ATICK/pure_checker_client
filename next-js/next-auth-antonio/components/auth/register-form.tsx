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
import { register } from "@/lib/register"
import lock from '@/public/lock.png'
import { RegisterSchema } from "@/schemas"
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
import BoxCard from '../boxCard'


export default function RegisterForm() {

    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const [isPending, setIsPending] = useState(false);

    const form = useForm<z.infer<typeof RegisterSchema>>({ resolver: zodResolver(RegisterSchema), defaultValues: { email: '', password: '' } })

    const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
        setError('')
        setSuccess('')
        setIsPending(true)
        const data = await register(values)
        setError(data?.error)
        setSuccess(data?.success)
        setIsPending(false)
    }

    return (
        <BoxCard header='Register' title='Welcome to register!' backBtnText='already have an account?' backBtnLink='/auth/login'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="py-3 space-y-3 w-full">
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input disabled={isPending} {...field}  className=' text-black' placeholder="john" type="text" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
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
                            <FormItem className="w-full">
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input disabled={isPending} {...field} className=' text-black' placeholder="*******" type="password" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormError message={error} />
                        <FormSuccess message={success} />

                        <Button disabled={isPending} type="submit" className="w-full" >Register</Button>
                    </form>
                </Form>
                <div className='flex justify-between py-1 items-center mt-3 w-full gap-2'>
                    <SocialSection />
                </div>
        </BoxCard>
    )
}
