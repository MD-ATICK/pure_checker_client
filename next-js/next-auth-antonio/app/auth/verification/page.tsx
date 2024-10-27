"use client"
import BoxCard from '@/components/boxCard'
import FormError from '@/components/formError'
import FormSuccess from '@/components/formSuccess'
import { verifyToken } from '@/lib/verifyToken'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { SyncLoader } from 'react-spinners'

export default function Page() {

    const searchParams = useSearchParams()
    const token = searchParams.get('token')

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const onsubmit = useCallback(async () => {
        if (!token) return setError("token not found.")

        const data = await verifyToken(token)
        setError(data?.error as string)
        setSuccess(data?.success as string)
    }, [token])

    useEffect(() => {
        onsubmit()
    }, [onsubmit]);

    return (
        <BoxCard header='Verification' title='welcome you! in verification' backBtnText='back to login' backBtnLink='/auth/login' >
            <br />
            {
                !success && !error &&
                <SyncLoader color='white' className='' />
            }
            <FormError message={error} />
            <FormSuccess message={success} />
            <br />
        </BoxCard>
    )
}
