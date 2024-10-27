import NextAuth, { type DefaultSession } from "next-auth";


export type ExtendedUser = DefaultSession['user'] & {
    role: "ADMIN" | "USER",
    emailVerified: any,
    isTwoFactorEnabled: boolean,
    isOAuth: boolean
}

declare module "next-auth" {
    interface Session {
        user: ExtendedUser
    }
}