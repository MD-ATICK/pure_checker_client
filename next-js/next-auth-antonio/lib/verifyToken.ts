"use server"

import { db } from "./db"
import { getUserByEmail } from "./reuse/user"
import { GetDbVerificationTokenByToken } from "./reuse/verification"


export const verifyToken = async (token: string) => {
    const findToken = await GetDbVerificationTokenByToken(token)
    if (!findToken) return { error: 'send email again.' }

    const hasExpired = new Date(findToken.expires) < new Date()
    if (hasExpired) return { error: 'token already expired.' }

    const findUser = await getUserByEmail(findToken.email)
    if (!findUser) return { error: 'user does not exist.' }

    await db.user.update({
        where: { id: findUser.id }, data: {
            emailVerified: new Date(),
            email: findUser.email
        }
    })

    await db.verificationToken.delete({ where: { id: findToken.id } })

    return { success: 'verified successfully.' }
}