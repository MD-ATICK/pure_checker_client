import { z } from "zod";


export const updateUserSchema = z.object({
    name: z.optional(z.string().nonempty("name is required")),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum(["ADMIN", "USER"]),
    email: z.optional(z.string()),
    password: z.optional(z.string()),
    newPassword: z.optional(z.string().min(6)),
    otp: z.optional(z.string().max(6))
}).refine((data) => {
    if (data.password && !data.newPassword) return false;

    if (data.newPassword && !data.password) return false;

    return true;
}, { message: "Please enter password and new password.", path: ["password", "newPassword"] })

export const LoginSchema = z.object({
    email: z.string().min(6, { message: 'minimum enter 6 characters.' }).email({ message: "Email is required" }),
    password: z.string().min(1, { message: "Password is required" }),
    otp: z.optional(z.string())
})


export const RegisterSchema = z.object({
    name: z.string(),
    email: z.string().nonempty({ message: "Email is required" }),
    password: z.string().min(1, { message: "Password is required" })
})


export const ResetSchema = z.object({
    email: z.string().nonempty('Email is empty')
})


export const ResetPasswordSchema = z.object({
    password: z.string().nonempty('Password is empty'),
    confirmPassword: z.string().nonempty('Confirm Password is empty'),
})