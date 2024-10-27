"use server"
import { ResetPasswordSchema } from "@/schemas";
import * as z from "zod";
import { GetDbVerificationTokenByToken } from "./reuse/verification";
import { compareSync, hashSync } from 'bcryptjs'
import { db } from "./db";
import { getUserByEmail } from "./reuse/user";

export const resetPassword = async (values: z.infer<typeof ResetPasswordSchema>, token: string) => {
    const { password, confirmPassword } = values;
    console.log(token)
    if (password !== confirmPassword) return { error: "Passwords do not match" };
    if (!token) return { error: "Invalid Token" };

    const existToken = await GetDbVerificationTokenByToken(token)
    if (!existToken) return { error: "Invalid Token" };

    if (new Date(existToken.expires) < new Date()) return { error: "Token has expired" };

    const existUser = await getUserByEmail(existToken.email)
    if (!existUser) return { error: 'invalid user.' }

    await db.user.update({
        where: { id: existUser?.id },
        data: {
            password: hashSync(password, 10)
        }
    })

    await db.verificationToken.delete({ where: { id: existToken.id } })

    return { success: "Password Updated." }

}