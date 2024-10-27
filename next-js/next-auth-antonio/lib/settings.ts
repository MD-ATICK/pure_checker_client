"use server"

import { updateUserSchema } from "@/schemas"
import { z } from "zod"
import { currentUser } from "./reuse/currentUser"
import { getUserByEmail, getUserById } from "./reuse/user"
import { db } from "./db"
import { GetDbVerificationTokenByEmail } from "./reuse/verification"
import { sendTwoFactorMail, sendVerificationEmail } from "./reuse/mail"
import { compareSync, hashSync } from 'bcryptjs'
import { createTwoFactorOTP } from "./token"
import { GetTwoFactorByOTP } from "./reuse/two-factor"


export const updateUser = async (values: z.infer<typeof updateUserSchema>) => {

    const user = await currentUser()
    if (!user) return { error: 'user not authorized' }

    const dbUser = await getUserById(String(user.id))
    if (!dbUser) return { error: "user not found" }


    // if login with google or github
    if (user.isOAuth) {
        values.email = undefined
        values.password = undefined
        values.newPassword = undefined
        values.isTwoFactorEnabled = undefined
    }



    if (values.email && values.email !== dbUser.email) {
        if (values.otp) {

            const otpVerification = await GetTwoFactorByOTP(values.otp)
            if (!otpVerification) return { error: "invalid otp", twoFactor: true }

            const hasExpired = new Date(otpVerification.expires) < new Date()
            if (hasExpired) return { error: 'otp expired', twoFactor: true }

            values.otp = undefined;

        } else {

            const existingUser = await getUserByEmail(values.email)
            if (existingUser && existingUser.id !== dbUser.id) return { error: 'Email already in use' }
            const verificationToken = await createTwoFactorOTP(values.email)
            await sendTwoFactorMail({ email: values.email as string, otp: verificationToken?.otp as string })

            return { success: "verification mail sent.", twoFactor: true }

        }
    }

    if (values.password && values.newPassword && dbUser.password) {
        const isPasswordValid = await compareSync(values.password, dbUser.password)
        if (!isPasswordValid) return { error: 'Invalid password' }
        values.password = hashSync(values.newPassword, 10)
        values.newPassword = undefined;
    }

    // i prevent add otp but set otp : undefined. cz database doesn't add undefine value.
    await db.user.update({
        where: { id: dbUser.id },
        data: {
            ...values
        }
    })
    return { success: 'user updated successfully' }
}