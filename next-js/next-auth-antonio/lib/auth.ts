import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { db } from "./db";
import { getUserById } from "./reuse/user";
import { getTwoFactorConfirmationByUserId } from "./reuse/two-factor-confirmatin";


export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({

    // without providers do others things.
    pages: {
        signIn: '/auth/login',
        error: "/auth/error"
    },
    events: {
        async linkAccount({ user }) {
            await db.user.update({
                where: { id: user.id },
                data: {
                    emailVerified: new Date()
                }
            })
        }
    },
    callbacks: {
        async signIn({ user, account }) {
            console.log({ account })
            if (account?.provider === "credentials") {

                const existingUser = await getUserById(String(user.id))
                if (!existingUser?.emailVerified) return false

                if (existingUser.isTwoFactorEnabled) {

                    const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id)
                    if (!twoFactorConfirmation) return false;

                    await db.twoFactorConfirmation.delete({ where: { id: twoFactorConfirmation.id } })
                    return true

                }
            }


            return true;
        },
        async jwt({ token }) {
            // if set other field in token this will not be show in frontend. only session added field show in frontend.
            if (!token.sub) return token;

            const existUser = await getUserById(token.sub)
            if (!existUser) return token;

            const isOAuth = await db.account.findFirst({ where: { userId: existUser.id } })
            // "!" means negative(false) but "!!" means if have value
            token.isOAuth = !!isOAuth;
            token.role = existUser.role;
            token.emailVerified = existUser.emailVerified;
            token.isTwoFactorEnabled = existUser.isTwoFactorEnabled;
            token.name = existUser.name
            token.email = existUser.email
            return token;
        },
        async session({ token, session }) {
            session.user.name = token.name;
            session.user.email = token.email as string;

            if (token.sub && session.user) {
                session.user.id = token.sub
            }

            if (token.isOAuth && session.user) {
                session.user.isOAuth = token.isOAuth as boolean
            } else {
                session.user.isOAuth = false
            }

            if (token.role && session.user) {
                session.user.role = token.role as "ADMIN" | "USER"
                session.user.emailVerified = token.emailVerified
            }
            if (session.user) {
                session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean
            }
            return session;
        },
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig
})