import React, { useState } from 'react'
import { PulseLoader } from 'react-spinners';
import { greenToast, userApi } from '../api/Api';
import { Link } from 'react-router-dom';
// import { IoMdInformationCircleOutline } from 'react-icons/io';

function ForgetMailEnter({ setForgetModal }) {

    const [mailSent, setMailSent] = useState(false);
    const [error, setError] = useState();
    const [mail, setMail] = useState('');
    const [loading, setLoading] = useState();

    const ForgetHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        const { status, data } = await userApi.post('/mail-sent', { email: mail })
        if (status === 201) {
            setLoading(false)
            setMailSent(true)
            greenToast(data.msg)
        } else {
            setLoading(false)
            setError(data.err)
            // redToast(data.err)
        }

    }


    return (
        <>
            {
                mailSent ?
                    <div className=" text-center py-10">
                        <h1 className=" font-bold text-3xl py-3">Your mail send successful ✅</h1>
                        <p className=" text-gray-600">please check your <span className=" text-black font-semibold text-lg">{mail}</span> email. Then you can <br /> change your password.</p>
                        <br /> <br />
                        <button onClick={() => setForgetModal(false)} className=" text-primary hover:underline rounded-lg py-2 text-md font-medium  duration-300 px-6" >back to login</button>
                    </div>
                    :
                    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
                        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                            <Link to={'/'}>
                                <img
                                    className='mx-auto h-10 w-auto'
                                    src='./3.jpg'
                                    alt='Your Company'
                                />
                            </Link>
                            <h2 className='mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900'>
                                Forget Password
                            </h2>
                        </div>
                        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                            <form className='space-y-6' onSubmit={ForgetHandler} >
                                <div>
                                    <label
                                        htmlFor='email'
                                        className='block text-sm font-medium leading-6 text-gray-900'
                                    >
                                        Email address (mail will sent this email)
                                    </label>
                                    <div className='mt-2'>
                                        <input
                                            id='email'
                                            name='email'
                                            type='email'
                                            autoComplete='email'
                                            required
                                            value={mail}
                                            onChange={e =>
                                                setMail(e.target.value)
                                            }
                                            className='block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                        />
                                    </div>
                                </div>

                                {error &&
                                    <p className=" flex items-center gap-x-2 text-sm text-orange-500"> <span>
                                        {/* <IoMdInformationCircleOutline className=" text-xl" /> */}
                                        </span> {error}</p>
                                }
                                <div>
                                    <button
                                        type='submit'
                                        className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                    >
                                        {
                                            loading ?
                                                <PulseLoader size={12} className="my-1" color="white" />
                                                : 'send mail'
                                        }
                                    </button>
                                </div>
                            </form>


                        </div>
                    </div >
            }
        </>
    )
}

export default ForgetMailEnter
