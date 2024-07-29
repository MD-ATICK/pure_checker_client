import React, { useState } from 'react'
import { useUserContext } from '../../context/Context';
import { checkerApi } from '../../api/Api';
import { Link } from 'react-router-dom'

export default function Hero() {


    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState("");
    const { setUser, user, token, setUserIp, userIp } = useUserContext();

    const HandleSubmit = async e => {
        e.preventDefault();
        setData("");
        if (!email) return alert("email not provided.");
        setLoading(true);

        const { status, data } = await checkerApi.get(`/check?email=${email}`, {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
        });
        if (status === 200) {
            setData(data.data);
            data?.user && setUser(data?.user) ||
                setUserIp(data?.userIp);
        }
        setLoading(false);
        setEmail("");
    };


    return (
        <div className='bg-[#030832]'>
            <div className='bg-[#229cc5] min-h-screen heroClip pb-28'>
                <div className='container mx-auto pt-5 md:pt-10'>
                    <div className='flex items-center justify-center min-h-[40vh] m-3 md:m-0'>
                        <div className='bg-secondary p-3 md:p-5'>
                            <div className='bg-gray-100 relative p-3 sm:p-5 md:p-10 flex gap-8 border border-primary rounded'>
                                <div className='flex flex-col items-center'>
                                    <div className={` ${data?.exists ? 'scale-100' : 'scale-0'} duration-500 absolute shadow-lg top-10 h-20 bg-green-500 rounded-full w-20 flex justify-center items-center right-12`}>
                                        {/* <IoMdDoneAll className=' text-white text-4xl' /> */}
                                    </div>
                                    <div className={` ${data?.exists === false ? 'scale-100' : 'scale-0'} duration-500 absolute shadow-lg top-10 h-20 bg-red-500 rounded-full w-20 flex justify-center items-center right-12`}>
                                        {/* <IoMdClose className=' text-white text-5xl' /> */}
                                    </div>
                                    <img src='./favicon.png' alt='' className='h-16 md:h-20' />
                                    <h1 className='text-xl md:text-2xl font-bold text-accent'>
                                        Pure Checker
                                    </h1>
                                    <h5 className='py-5 font-medium text-gray-600'>
                                        Best for small businesses and startups
                                    </h5>

                                    <form
                                        action=''
                                        onSubmit={HandleSubmit}
                                        className='bg-white flex items-center border-[1px] border-primary w-full rounded overflow-hidden'
                                    >
                                        <input
                                            type='email'
                                            className='py-3 w-full font-[500] px-3 focus:border-none focus:outline-none'
                                            placeholder='Enter email here...'
                                            value={email}
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <button
                                            type='submit'
                                            className='bg-primary whitespace-nowrap px-5 py-3 text-secondary font-medium'
                                        >
                                            {loading ? 'loading...' :
                                                `${user?.credit || userIp?.freeCredit || 0} Credits`
                                            }
                                        </button>
                                    </form>

                                    <p className='pt-5 text-sm md:text-base font-base md:font-medium text-gray-600'>
                                        Sign up and verify up to 100 email addresses for FREE
                                        daily on free tier.
                                    </p>
                                    {
                                        data &&
                                        <div className=" w-full flex mt-4 border border-primary rounded-lg p-4">
                                            <div className=" left flex-[0.5] font-[500] text-gray-700 flex flex-col gap-y-2 text-md">
                                                <p>Email :</p>
                                                <p>Exist :</p>
                                                <p>Format :</p>
                                                <p>Disposable :</p>
                                                <p>role :</p>
                                                <p>Domain :</p>
                                                <p>Reason :</p>
                                                <p>Mx Server :</p>
                                            </div>
                                            <div className=" left flex-1 font-[500] text-gray-800 flex flex-col gap-y-2 text-md">
                                                <p>{data.email}</p>
                                                <p>{data.exists ? 'true' : 'false'}</p>
                                                <p>{data.format ? 'ok' : 'incorrect'}</p>
                                                <p>{data.disposable ? 'true' : 'false'}</p>
                                                <p>{data.role}</p>
                                                <p>{data.domain ? 'ok' : 'bad'}</p>
                                                <p>{data.reason}</p>
                                                <p>{data.mxServer}</p>
                                            </div>
                                        </div>
                                    }
                                </div>\
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center text-secondary py-10 md:pt-24 w-full md:w-4/5 mx-auto text-center'>
                        {/* <h1 className='text-2xl md:text-4xl font-bold pb-4 md:pb-8'>
                    Full-Featured Email Verification But half the price.
                </h1> */} Full-Featured Email Verification But half the price.
                        <p>
                            Get rid of spam traps, hard bounces, disposable or catch-all
                            emails without breaking your budget.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-8 items-center gap-8 p-3'>
                        <div className='col-span-1 md:col-span-3'>
                            <ul className='flex flex-col gap-8 text-secondary tracking-wide'>
                                <li>
                                    <h3 className='text-2xl font-bold'>
                                        1. Create a FREE account
                                    </h3>
                                    <h5 className='text-lg'>
                                        Get 100 email verifications for FREE.
                                    </h5>
                                </li>
                                <li>
                                    <h3 className='text-2xl font-bold'>
                                        2. Upload your dirty list
                                    </h3>
                                    <h5 className='text-lg'>
                                        We accept CSV, XLS, TXT and other formats
                                    </h5>
                                </li>
                                <li>
                                    <h3 className='text-2xl font-bold'>
                                        3. Download a clean list
                                    </h3>
                                    <h5 className='text-lg'>
                                        You will be notified within a few minutes
                                    </h5>
                                </li>
                                {
                                    user ?
                                        <button className='bg-highlight w-full md:w-[80%] py-5 text-center rounded text-lg md:mt-5' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Try It Now</button>
                                        :
                                        <li className='bg-highlight w-full md:w-[80%] py-5 text-center rounded text-lg md:mt-5'>
                                            <Link to={'/register'}>Get 100 FREE Verification</Link>
                                        </li>
                                }
                            </ul>
                        </div>
                        <div className='mt-8 md:mt-0 col-span-1 md:col-span-5'>
                            <img src='./screen4.png' title='dashboard | pure checker' alt='dashboard | pure checker' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
