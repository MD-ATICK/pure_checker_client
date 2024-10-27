import authConfig from "@/auth.config";
import { apiAuthPrefix, authRoutes, default_login_redirect, loginRoute, publicRoutes } from "@/routes";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig)

// middleware is unlocked for matcher route. 
// generally middleware is used for set access in routes.

export default auth((req): any => {
    const { nextUrl } = req
    const isLoggedIn = !!req.auth // must be write "!!" for negative check 

    const defaultLogin = nextUrl.pathname.startsWith(default_login_redirect)
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname) // it checks array data.
    const isAuthRoute = authRoutes.includes(nextUrl.pathname) // it checks array data.


    if (isApiAuthRoute) {
        return null;
    }

    
    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(default_login_redirect, nextUrl))
        }
        return null;
    }
    
    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL("/auth/login", nextUrl))
    }
    
    return null;
})


export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}