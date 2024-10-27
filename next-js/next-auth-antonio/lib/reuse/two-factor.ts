import { db } from "../db";


export const GetTwoFactorByOTP = async (otp: string) => {
    try {
        const twoFactorToken = await db.twoFactorToken.findFirstOrThrow({ where: { otp } })
        return twoFactorToken;
    } catch (error) {
        return null;
    }
}

export const GetTwoFactorByEmail = async (email: string) => {
    try {
        const twoFactorToken = await db.twoFactorToken.findFirstOrThrow({ where: { email } })
        return twoFactorToken;
    } catch (error) {
        return null;
    }
}