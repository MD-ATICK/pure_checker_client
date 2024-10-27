"use server"

import { error } from "console"
import { getUserByEmail } from "./reuse/user"
import email from "next-auth/providers/email"
import { createVerificationToken } from "./token"
import { sendResetEmail, sendVerificationEmail } from "./reuse/mail"

export const reset = async (values: { email: string }) => {
    if (!values.email) return { error: "Email not found." }

    const existUser = await getUserByEmail(values.email)
    if (!existUser) return { error: "Email not found." }


    const verificationToken = await createVerificationToken(values.email)
    await sendResetEmail({email : values.email, token : verificationToken.token})


    return { success: "Reset Email Sent" }

}