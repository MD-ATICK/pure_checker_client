import { useState } from "react"
import { IoMdInformationCircleOutline } from "react-icons/io"
import { Link, useParams } from "react-router-dom"
import { PulseLoader } from "react-spinners"
import { userApi } from "../api/Api"
import UseHelmet from "../utils/UseHelmet"

function ForgetPassword() {


    const { email, token } = useParams()

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [successModel, setSuccessModel] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const changePassword = async (e) => {
        e.preventDefault()
        setError('')
        if (password !== confirmPassword) return setError('password not match')
        setLoading(true)
        const { status, data } = await userApi.post(`/forget-password/${token}`, { email, password })
        if (status === 201) {
            setLoading(false)
            setSuccessModel(true)
        } else {
            setLoading(false)
            setError(data.err)
            // redToast(data.err)
        }
    }

    return (
        <>
        <UseHelmet param={'forget-password'} title={'Forgot Password | Pure Checker'} description={'Recover your Pure Checker account password securely. Follow the steps to reset your password and regain access to your account.'} />
            {
                successModel ?
                    <div className=" h-screen w-full flex justify-center items-center flex-col text-center">
                        <h1 className=" text-4xl font-bold">Password Changed Success! ✅</h1>
                        <p className=" text-gray-600 mt-3">Successfully changed you password. <br /> Be careful about password.</p>
                    </div>
                    :
                    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
                        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                            <Link to={'/'}>
                                <img
                                    className='mx-auto h-10 w-auto'
                                    src='/3.jpg'
                                    loading="lazy"
                                    title="Forget Password"
                                    alt='Forget Password'
                                />
                            </Link>
                            <h1 className='mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900'>
                                Change Password!
                            </h1>
                        </div>
                        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                            <form className='space-y-6' onSubmit={changePassword} method='POST'>
                                <div>
                                    <label
                                        htmlFor='password'
                                        className='block text-sm font-medium leading-6 text-gray-900'
                                    >
                                        Password
                                    </label>
                                    <div className='mt-2'>
                                        <input
                                            id='password'
                                            name='password'
                                            type='text'
                                            autoComplete='password'
                                            required={true}
                                            value={password}
                                            onChange={(e => setPassword(e.target.value))}
                                            className='block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor='confirmPassword'
                                        className='block text-sm font-medium leading-6 text-gray-900'
                                    >
                                        Confirm Password
                                    </label>
                                    <div className='mt-2'>
                                        <input
                                            id='confirmPassword'
                                            name='confirmPassword'
                                            type='password'
                                            autoComplete='current-confirmPassword'
                                            required={true}
                                            value={confirmPassword}
                                            onChange={(e => setConfirmPassword(e.target.value))}
                                            className='block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                        />
                                    </div>
                                </div>

                                {error &&
                                    <p className=" flex items-center gap-x-2 text-sm text-orange-500"> <span><IoMdInformationCircleOutline className=" text-xl" /></span> {error}</p>
                                }
                                <div>
                                    <button
                                        type='submit'
                                        className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                    >
                                        {
                                            loading ?
                                                <PulseLoader size={12} className="my-1" color="white" />
                                                : <p>Change Password</p>
                                        }
                                    </button>
                                </div>
                            </form>

                            <p className='mt-10 text-center text-sm text-gray-500'>
                                Not a member?{" "}
                                <Link
                                    to='/register'
                                    className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
                                >
                                    Register
                                </Link>
                            </p>
                        </div>
                    </div >
            }
        </>
    )
}

export default ForgetPassword
