import { compareSync } from "bcryptjs";
import { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";
import { getUserByEmail } from "./lib/reuse/user";
import { LoginSchema } from "./schemas";


export default {
    providers: [
        github({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        google({
            clientId : process.env.GOOGLE_CLIENT_ID ,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET,
        }),
        // just only write Providers cz it not work in edge browsers.
        credentials({
            async authorize(credentials) {
                const validate = LoginSchema.safeParse(credentials)
                if (validate.success) {
                    const { email, password } = validate.data
                    const user = await getUserByEmail(email)
                    if (!user || !user.password) return null;

                    const isCorrectPassword = compareSync(password, user.password)

                    if (isCorrectPassword) return user;

                }
                return null;
            }
        })
    ]
} satisfies NextAuthConfig