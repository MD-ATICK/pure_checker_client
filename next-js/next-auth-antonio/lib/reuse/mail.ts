import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendVerificationEmail = async ({ email, token }: { email: string, token: string }) => {
    const confirmationLink = `${process.env.APP_URL}/auth/verification?token=${token}`

    // done after installation resend.
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Confirm your email',
        html: `<p>Click the link below to confirm your email: <a href=${confirmationLink}>confirmation account</a></p>`,
    })
}

export const sendResetEmail = async ({ email, token }: { email: string, token: string }) => {
    const confirmationLink = `${process.env.APP_URL}/auth/reset-password?token=${token}`

    // done after installation resend.
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Confirm your email',
        html: `<p>Click the link below to reset your password: <a href=${confirmationLink}>confirmation account</a></p>`,
    })
}

export const sendTwoFactorMail = async ({ email, otp }: { email: string, otp: string }) => {
    // done after installation resend.
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Confirm your email',
        html: `<p>your otp is : <b>${otp}</b>. <br/> it valid for last 60 minutes.</p>`,
    })
}