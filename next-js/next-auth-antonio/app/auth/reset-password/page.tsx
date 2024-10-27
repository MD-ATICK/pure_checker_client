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
import React, { useState } from 'react'
import BoxCard from '@/components/boxCard'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { ResetPasswordSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import FormError from '@/components/formError'
import FormSuccess from '@/components/formSuccess'
import { Button } from '@/components/ui/button'
import { resetPassword } from '@/lib/reset-password'
import { useSearchParams } from 'next/navigation'

export default function ForgetPassword() {

  const form = useForm<z.infer<typeof ResetPasswordSchema>>({ resolver: zodResolver(ResetPasswordSchema), defaultValues: { password: "", confirmPassword: "" } })
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isPending, setIsPending] = useState<boolean>(false);

  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const onSubmit = async (values: z.infer<typeof ResetPasswordSchema>) => {
    setIsPending(true)
    const data = await resetPassword(values, token as string)
    setError(data?.error as string)
    setSuccess(data?.success as string)
    setIsPending(false)
  }

  return (
    <BoxCard header='Reset Password' title='Reset your password Now!' backBtnLink='/auth/login' backBtnText='Back to login'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="py-3 space-y-5 w-full">
          <FormField control={form.control} name="password" render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input disabled={isPending} {...field} className=' text-black' placeholder="password" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="confirmPassword" render={({ field }) => (
            <FormItem className="w-full flex flex-col items-start gap-2">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input disabled={isPending} {...field} className=' text-black' placeholder="*******" type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          {
            !isPending &&
            <div>
              <FormError message={error} />
              <FormSuccess message={success} />
            </div>
          }

          <Button disabled={isPending} type="submit" className="w-full bg-black h-12" >Reset Password</Button>
        </form>
      </Form>

    </BoxCard>
  )
}
