import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { greenToast, redToast, userApi } from '../api/Api';
import { useUserContext } from '../context/Context';
import { SyncLoader } from 'react-spinners';

function EmailValidation() {

    const { token } = useParams();
    const { setUser } = useUserContext()
    const [status, setStatus] = useState('loading');


    // const [searchParams] = useSearchParams();
    // const token = searchParams
    const validationCall = async () => {
        setStatus('loading')
        const { data, status } = await userApi.get(`/emailAuthCheck/${token}`, { withCredentials: true })
        if (status === 200) {
            setStatus('success')
            setUser(data.user)
            localStorage.setItem('token', data.token)
            // greenToast(data.msg)

        } else if (status === 203) {
            setStatus('failed')
            // redToast('time is expand or token not valid;')
        } else {
            setStatus('failed')
            // redToast(data.err)
        }
    }

    useEffect(() => {
        validationCall()
    }, []);
    return (
        <div className=' p-10 h-screen w-full flex text-center justify-center items-center'>
            {
                status === 'loading' &&
                <SyncLoader /> || status === 'failed' &&
                <div>
                    <h1 className=' text-[50px] font-bold'>Sorry! ❌</h1>
                    <p className='mt-4 text-lg text-gray-600'>Verification Failed! Please Resend Mail.</p>
                </div> || status === 'success' &&
                <div>
                    <h1 className=' text-[50px] font-bold'>Verify Success! ✅</h1>
                    <p className='mt-4 text-lg text-gray-500'>Successfully verify you email. Now take e reload.</p>
                </div>
            }

        </div>
    )
}

export default EmailValidation
