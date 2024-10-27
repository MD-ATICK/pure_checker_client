import { db } from "../db";



export const GetDbVerificationTokenByToken = async (token: string) => {
    try {
        const verificationToken = await db.verificationToken.findUnique({ where: { token } })
        return verificationToken;
    } catch (error) {
        return null;
    }
}

export const GetDbVerificationTokenByEmail = async (email: string) => {
    try {
        const verificationToken = await db.verificationToken.findFirst({ where: { email } })
        return verificationToken;
    } catch (error) {
        return null;
    }
}