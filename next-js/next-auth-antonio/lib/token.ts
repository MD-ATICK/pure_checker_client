import { v4 as uuidV4 } from "uuid";
import crypto from 'crypto'
import { db } from "./db";
import { GetDbVerificationTokenByEmail } from "./reuse/verification";
import { GetTwoFactorByEmail } from "./reuse/two-factor";

export const createVerificationToken = async (email: string) => {
    const token = uuidV4();
    const expires = new Date(new Date().getTime() + (1000 * 3600))

    const findToken = await GetDbVerificationTokenByEmail(email)
    if (findToken) {
        await db.verificationToken.delete({ where: { id: findToken.id } })
    }

    const newVerificationToken = await db.verificationToken.create({
        data: {
            email,
            token,
            expires
        }
    })

    return newVerificationToken;
}

export const createTwoFactorOTP = async (email: string) => {
    const otp = crypto.randomInt(100_000, 1_000_000).toString()
    const expires = new Date(new Date().getTime() + (1000 * 3600))

    const findToken = await GetTwoFactorByEmail(email)
    if (findToken) {
        await db.twoFactorToken.delete({ where: { id: findToken.id } })
    }

    const newTwoFactorToken = await db.twoFactorToken.create({
        data: {
            email,
            otp,
            expires
        }
    })

    return newTwoFactorToken;
}

