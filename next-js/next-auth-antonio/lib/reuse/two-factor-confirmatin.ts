import { db } from "../db";

export const getTwoFactorConfirmationByUserId = async (userId: string) => {
    try {
        const twoFactorConfirmation = await db.twoFactorConfirmation.findFirstOrThrow({
            where: { userId }
        })

        return twoFactorConfirmation;
    } catch (error) {
        return null;
    }
}