"use server"

import { RegisterSchema } from "@/schemas"
import { hashSync } from 'bcryptjs'
import { string, z } from "zod"
import { db } from "./db"
import { getUserByEmail } from "./reuse/user"
import { createVerificationToken } from "./token"
import { sendVerificationEmail } from "./reuse/mail"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const valid = RegisterSchema.safeParse(values)
    if (!valid.success) return { error: 'Invalid credentials' }

    const { name, email, password } = valid.data

    const existUser = await getUserByEmail(email)
    if (existUser) return { error: 'User already exists' }

    await db.user.create({
        data: {
            name,
            email,
            password: hashSync(password, 10),
        }
    })

    const verificationToken = await createVerificationToken(email)
    await sendVerificationEmail({ email: String(verificationToken.email), token: String(verificationToken.token) })
    return { success: 'Confirmation Email Sent' }


    // todo : "email verification"

    // return { success: 'successfully registered.' }
}