"use server"

import { signIn } from "@/lib/auth"
import { default_login_redirect } from "@/routes"
import { LoginSchema } from "@/schemas"
import { AuthError } from "next-auth"
import { z } from "zod"
import { getUserByEmail } from "./reuse/user"
import { createTwoFactorOTP, createVerificationToken } from "./token"
import { sendTwoFactorMail, sendVerificationEmail } from "./reuse/mail"
import { getTwoFactorConfirmationByUserId } from "./reuse/two-factor-confirmatin"
import { GetTwoFactorByEmail, GetTwoFactorByOTP } from "./reuse/two-factor"
import { db } from "./db"

// if write interface there is no need z.infer typeof. but we use zod and 
// this schema for shortcut so we have to use z.infer for checking typeof this schema.
export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validate = LoginSchema.safeParse(values)
    if (!validate.success) return { error: 'Invalid credentials' }
    const { email, password, otp } = validate.data

    const existingUser = await getUserByEmail(email)
    if (!existingUser) {
        return { error: "user not found" }
    }

    if (!existingUser.emailVerified) {
        const verificationToken = await createVerificationToken(email)
        await sendVerificationEmail({ email: String(verificationToken.email), token: String(verificationToken.token) })
        return { success: `email verification sent.` }
    }


    if (existingUser.isTwoFactorEnabled) {
        if (otp) {
            console.log({ otp })
            const existTwoFactorToken = await db.twoFactorToken.findFirst({ where: { email: String(existingUser.email), otp } })

            if (!existTwoFactorToken) {
                return { error: 'Invalid OTP', twoFactor: true }
            }

            const hasExpired = new Date(existTwoFactorToken.expires) < new Date()
            if (hasExpired) {
                return { error: 'OTP expired', twoFactor: true }
            }

            const existTwoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id)
            if (existTwoFactorConfirmation) {
                await db.twoFactorConfirmation.delete({ where: { id: existTwoFactorConfirmation.id } })
            }


            await db.twoFactorConfirmation.create({
                data: {
                    userId: existingUser.id
                }
            })

        } else {
            const createTwoFactorToken = await createTwoFactorOTP(email)
            await sendTwoFactorMail({ email: createTwoFactorToken.email, otp: createTwoFactorToken.otp })
            return { twoFactor: true, success: 'Otp email sent' }
        }
    }

    try {
        await signIn('credentials', { email, password, redirectTo: default_login_redirect })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials" };
                default:
                    return { error: "something went wrong" };
            }
        }

        throw error;
    }
}