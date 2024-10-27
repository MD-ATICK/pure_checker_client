"use client"
import BoxCard from "@/components/boxCard";
import FormError from "@/components/formError";
import FormSuccess from "@/components/formSuccess";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { reset } from "@/lib/reset";
import { ResetSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from 'next/navigation';
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";






export default function Page() {

    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const [isPending, setIsPending] = useState(false);
    
    const searchParams = useSearchParams()
    let urlError = searchParams.get("error") === "OAuthAccountNotLinked" ? "email already use in different provider" : ""
    
    // useForm take 2 value is :  resolver  and defaultValues.
    const form = useForm<z.infer<typeof ResetSchema>>({ resolver: zodResolver(ResetSchema), defaultValues: { email: ''} })
    
    const onSubmit = async (values: z.infer<typeof ResetSchema>) => {
        setError('')
        setSuccess('')
        setIsPending(true)
        const data = await reset(values)
        setError(data?.error)
        setSuccess(data?.success)
        setIsPending(false)
    }

    return (
        <BoxCard header="Forget Password" title="Forget your Password!" backBtnLink="/auth/login" backBtnText="Back to login">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="py-3 space-y-5 w-full">
                    <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel className=" text-white">Email</FormLabel>
                            <FormControl>
                                <Input disabled={isPending} {...field} className=' text-black' placeholder="atick@example.com" type="email" />
                            </FormControl>
                            <FormMessage className=" text-yellow-300" />
                        </FormItem>
                    )} />
                    {
                        !isPending &&
                        <div>
                            <FormError message={error || urlError} />
                            <FormSuccess message={success} />
                        </div>
                    }

                    <Button disabled={isPending} type="submit" className="w-full bg-black h-12" >Send reset email</Button>
                </form>
            </Form>
        </BoxCard>
    )
}
