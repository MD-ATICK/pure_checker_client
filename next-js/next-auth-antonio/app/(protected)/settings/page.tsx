"use client"
import FormError from "@/components/formError"
import FormSuccess from "@/components/formSuccess"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useCurrentUser } from "@/hooks/use-current-user"
import { updateUser } from "@/lib/settings"
import { updateUserSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { Settings } from "lucide-react"
import { useSession } from "next-auth/react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from 'zod'

export default function Page() {

    const { update } = useSession()

    const user = useCurrentUser()
    const [isPending, setIsPending] = useState(false);
    const [twoFactor, setTwoFactor] = useState<boolean>(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const form = useForm<z.infer<typeof updateUserSchema>>({ resolver: zodResolver(updateUserSchema), defaultValues: { name: user?.name || undefined, email: user?.email || undefined, password: undefined, role: user?.role || undefined, isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined } })

    console.log({ user })
    const onsubmit = async (values: z.infer<typeof updateUserSchema>) => {
        setIsPending(true)
        const data = await updateUser(values)
        update()
        setError(data?.error as string)
        setSuccess(data?.success as string)
        setTwoFactor(data?.twoFactor as boolean)
        setIsPending(false)
    }
    return (
        <Card className=' w-full max-w-[700px] text-center shadow-md'>
            <CardHeader>
                <p className='flex items-center gap-2 justify-center font-bold text-2xl'> <Settings size={35} /> Settings </p>
            </CardHeader>
            <CardContent className=' space-y-4'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onsubmit)} className=" space-y-4 flex flex-col items-start">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="w-full text-start font-semibold">
                                    <FormLabel className=" font-semibold">Name</FormLabel>
                                    <FormControl>
                                        <Input disabled={isPending} {...field} placeholder="John Due" type="text" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {
                            user?.isOAuth === false &&
                            <>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="w-full text-start font-semibold">
                                            <FormLabel className=" font-semibold">Email</FormLabel>
                                            <FormControl>
                                                <Input disabled={isPending} {...field} placeholder="example@gmail.com" type="email" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {
                                    twoFactor &&
                                    <FormField control={form.control} name="otp" render={({ field }) => (
                                        <FormItem className="w-full flex flex-col items-start">
                                            <FormLabel className=" font-semibold">Two Factor Code</FormLabel>
                                            <FormControl>
                                                <Input disabled={isPending} {...field} className=' text-black font-semibold text-md' maxLength={6} placeholder="123456" type="text" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                }
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="w-full text-start font-semibold">
                                            <FormLabel className=" font-semibold">Password</FormLabel>
                                            <FormControl>
                                                <Input disabled={isPending} {...field} placeholder="******" type="text" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="newPassword"
                                    render={({ field }) => (
                                        <FormItem className="w-full text-start font-semibold">
                                            <FormLabel className=" font-semibold">New Password</FormLabel>
                                            <FormControl>
                                                <Input disabled={isPending} {...field} placeholder="******" type="text" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </>
                        }
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem className="w-full flex flex-col text-start font-semibold">
                                    <FormLabel className=" font-semibold">Role</FormLabel>
                                    <FormControl>
                                        <Select disabled={isPending} defaultValue={field.value} onValueChange={field.onChange} >
                                            <SelectTrigger className=" outline-none">
                                                <SelectValue placeholder="select a role" />
                                            </SelectTrigger>
                                            <SelectContent className=" font-medium">
                                                <SelectItem value="ADMIN">
                                                    Admin
                                                </SelectItem>
                                                <SelectItem value="USER">
                                                    User
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {
                            user?.isOAuth === false &&

                            <FormField
                                control={form.control}
                                name="isTwoFactorEnabled"
                                render={({ field }) => (
                                    <FormItem className="w-full flex justify-between items-center p-4 shadow-md rounded-lg text-start font-semibold">
                                        <div>
                                            <FormLabel className=" font-semibold">Two-Factor Authentication</FormLabel>
                                            <FormDescription className=" font-medium">
                                                Enable two factor Authentication for your account
                                            </FormDescription>
                                        </div>
                                        <Switch disabled={isPending} checked={field.value} onCheckedChange={field.onChange} />
                                    </FormItem>
                                )}
                            />
                        }

                        <FormError message={error} />
                        <FormSuccess message={success} />
                        <Button variant={'default'} disabled={isPending} type="submit">Save</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
// 