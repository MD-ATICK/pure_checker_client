import React, { useState } from 'react';
import { FaCheckCircle, FaClosedCaptioning } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { checkerApi } from '../api/Api';
import Testimonial from '../components/Testimonial';
import Plans from '../components/client/Plans';
import { useUserContext } from '../context/Context';
import AccordionFags from './../components/client/AccordionFaqs';
import { TagRightIcon } from '@chakra-ui/react';
import { IoMdClose, IoMdDoneAll } from 'react-icons/io';
const Home = () => {


    const [email, setEmail] = useState("atick@gmail.com");
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
        <>
            {/* hero section start */}
            <div className='bg-green-600'>
                <div className='bg-primary min-h-screen heroClip pb-28'>
                    <div className='container mx-auto pt-5 md:pt-10'>
                        <div className='flex items-center justify-center min-h-[40vh] m-3 md:m-0'>
                            <div className='bg-secondary p-3 md:p-5'>
                                <div className='bg-gray-100 relative p-3 sm:p-5 md:p-10 flex gap-8 border border-primary rounded'>
                                    <div className='flex flex-col items-center'>
                                        <div className={` ${data?.exists ? 'scale-100' : 'scale-0'} duration-500 absolute shadow-lg top-10 h-20 flex justify-center items-center bg-green-500 rounded-full w-20 flex justify-center items-center right-12`}>
                                            <IoMdDoneAll className=' text-white text-4xl' />
                                        </div>
                                        <div className={` ${data?.exists === false ? 'scale-100' : 'scale-0'} duration-500 absolute shadow-lg top-10 h-20 flex justify-center items-center bg-red-500 rounded-full w-20 flex justify-center items-center right-12`}>
                                            <IoMdClose className=' text-white text-5xl' />
                                        </div>
                                        <img src='./favicon.png' alt='' className='h-16 md:h-20' />
                                        <h3 className='text-xl md:text-2xl font-bold text-accent'>
                                            Pure Checker
                                        </h3>
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
                                    </div>

                                    {/* <ul className="border-l border-primary pl-5 flex flex-col gap-3">
                                <li className="text-xl text-primary mb-5 font-bold text-center">Email Checked</li>
                                <li><strong>Email:</strong> atick@gmail.com</li>
                                <li><strong>Exist:</strong> false</li>
                                <li><strong>Format Check:</strong> true</li>
                                <li><strong>Disposable:</strong> true</li>
                                <li><strong>Typo:</strong> true</li>
                            </ul> */}
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col items-center text-secondary py-10 md:pt-24 w-full md:w-4/5 mx-auto text-center'>
                            <h1 className='text-3xl md:text-6xl font-extrabold pb-4 md:pb-8'>
                                Full-Featured Email Verification But half the price.
                            </h1>
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
                                <img src='./screen4.png' alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* hero section end */}

            {/* why should use section start */}
            <div className=' bg-green-600 text-secondary px-3 py-16 pb-40 reClip relative -top-1'>
                <h1 className='text-center text-2xl md:text-5xl font-bold'>
                    Why you should give a f@#k
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-6 container mx-auto mt-20'>
                    <div className='flex flex-col items-center gap-8'>
                        <img src='./saving.png' alt='' className='h-24' />
                        <h3 className='self-start text-3xl font-bold'>
                            Save money on email marketing
                        </h3>
                        <p>
                            Increase the sender reputation, deliverability & conversion rate
                            of your emails by sending them only to real people.
                        </p>
                    </div>
                    <div className='flex flex-col items-center gap-8'>
                        <img src='./increase.png' alt='' className='h-20' />

                        <h3 className='self-start text-3xl font-bold'>
                            Increase ROI of your email campaigns
                        </h3>
                        <p>
                            Stop spending money on spammy email addresses. Spend less by
                            sending fewer emails thanks to the verified email list.
                        </p>
                    </div>
                    <div className='flex flex-col items-center gap-8'>
                        <img src='./shield.png' alt='' className='h-20' />
                        <h3 className='self-start text-3xl font-bold'>
                            Protect your domain reputation score
                        </h3>
                        <p>
                            Spam traps and hard bounces kill your reputation. Get rid of them
                            so your emails donot end up in spam folders anymore.
                        </p>
                    </div>
                </div>
            </div>
            {/* why should use section end */}

            {/* verify emails section start */}
            <div className='container mx-auto py-28 px-3'>
                <h1 className='text-2xl md:text-5xl font-extrabold text-center text-gray-700'>
                    How we verify emails
                </h1>
                <p className='text-center mt-2'>
                    At Pure Checker, we employ a comprehensive and meticulous email
                    verification process to ensure the highest accuracy and deliverability
                    rates for your email lists. Our advanced verification system goes
                    through several stages to validate each email address, guaranteeing
                    you the best results. Here’s a detailed look at how we verify email:
                </p>

                <div
                    id='emailVerify'
                    className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8 lg:gap-10 mt-8 md:mt-16'
                >
                    <div>
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
                            Syntax and Format Check
                        </h2>
                        <p className='text-md mt-2 text-gray-700'>
                            We start by examining the syntax of each email address to ensure
                            it complies with standard email formatting rules. This includes
                            checking for the presence of "@" and valid domain extensions
                            (.com, .net, etc.).
                        </p>
                    </div>
                    <div>
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
                            Domain Validation
                        </h2>
                        <p className='text-md mt-2 text-gray-700'>
                            Next, we verify the domain of the email address. This involves
                            checking the DNS records to confirm that the domain exists and is
                            configured correctly to receive emails.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
                            MX Record Verification
                        </h2>
                        <p className='text-md mt-2 text-gray-700'>
                            We then check the Mail Exchange (MX) records of the domain. MX
                            records indicate which mail servers are responsible for receiving
                            emails for the domain. This step ensures that the domain is
                            capable of accepting emails.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
                            SMTP Protocol Check
                        </h2>
                        <p className='text-md mt-2 text-gray-700'>
                            Our system connects to the mail server via SMTP to verify the
                            existence of the email address. This involves simulating an email
                            send process without actually sending an email, to confirm whether
                            the mailbox is active and able to receive messages.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
                            Mailbox Validation
                        </h2>
                        <p className='text-md mt-2 text-gray-700'>
                            We go a step further to verify the existence of the mailbox. This
                            helps in determining if the specific email address exists on the
                            mail server and can receive emails.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
                            Catch-All Domain Detection
                        </h2>
                        <p className='text-md mt-2 text-gray-700'>
                            Some domains are configured to accept all emails sent to them,
                            regardless of the username. We identify such catch-all domains to
                            provide additional insights about the deliverability of emails.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
                            Role-Based Email Detection
                        </h2>
                        <p className='text-md mt-2 text-gray-700'>
                            Our system identifies role-based emails (e.g., info@, admin@) that
                            are typically used for general inquiries or administrative
                            purposes, helping you target individual users more effectively.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
                            Spam Trap Detection
                        </h2>
                        <p className='text-md mt-2 text-gray-700'>
                            We identify known spam traps to prevent your emails from being
                            flagged as spam. Spam traps are email addresses used by ISPs and
                            organizations to catch spammers, and sending emails to these
                            addresses can harm your sender reputation.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
                            Greylisting and Temporary Issues Handling
                        </h2>
                        <p className='text-md mt-2 text-gray-700'>
                            Our verification process also accounts for temporary issues such
                            as greylisting, where the mail server temporarily rejects an
                            email. We handle these instances by re-attempting verification to
                            ensure accuracy.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
                            Phone Verification (if required)
                        </h2>
                        <p className='text-md mt-2 text-gray-700'>
                            For certain emails, additional verification steps such as phone
                            verification might be necessary. We flag these emails for further
                            action to confirm their validity.
                        </p>
                    </div>
                </div>

                <h3 className='text-xl font-bold text-center text-primary mt-10'>
                    Comprehensive Reporting
                </h3>

                <p className="text-lg font-medium mt-5">
                    After completing the verification process, we provide a detailed
                    report categorizing each email address based on its verification
                    status (Valid, Disable, Phone Verify, Unknown, Not Exist, Duplicate,
                    Wrong Format). This helps you make informed decisions and maintain a
                    clean and effective email list. <br />
                    <br />
                    By leveraging our robust email verification process, you can enhance
                    your email deliverability, reduce bounce rates, and improve the
                    overall performance of your email marketing campaigns. Trust Pure
                    Checker to provide you with the most reliable and accurate email
                    verification service.
                </p>
            </div>
            {/* verify emails section end */}

            {/* email verification api section start */}
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 px-3 items-center py-20 pt-10'>
                <div>
                    <img src='./api.png' alt='' />
                </div>
                <div>
                    <h4 className='text-2xl font-bold text-primary mb-8'>
                        Email verification API
                    </h4>
                    <h1 className='text-4xl md:text-5xl font-extrabold text-accent my-5'>
                        Catch bad emails before they get to database
                    </h1>
                    <p className='text-lg'>
                        Verify emails before they get to your database. Implement ELV's
                        real-time API into your website registration process, newsletter
                        sign up form and everywhere else you ask for emails.
                    </p>
                    {
                        user
                            ?
                            <Link to={'/api-docs'} className='py-2 px-5 border-2 border-primary inline-block rounded text-primary mt-5'>
                                Get your API key
                            </Link>
                            :
                            <Link to={'/login'} className='py-2 px-5 border-2 border-primary inline-block rounded text-primary mt-5'>
                                Login to get api key
                            </Link>
                    }
                </div>
            </div>
            {/* email verification api section end */}

            {/* pricing section start */}

            <section className='container mx-auto'>
                <img src='./favicon.png' alt='' className='h-20 mx-auto mb-2' />
                <h1 className='text-2xl font-bold text-center'>Go Premium!</h1>
                <ul className='flex flex-wrap items-center justify-center gap-1 md:gap-8 my-3 md:my-5'>
                    <li className='flex items-center gap-2'>
                        <FaCheckCircle /> Volume discount
                    </li>
                    <li className='flex items-center gap-2'>
                        <FaCheckCircle /> Prioritized job
                    </li>
                    <li className='flex items-center gap-2'>
                        <FaCheckCircle /> Personalized Support
                    </li>
                    <li className='flex items-center gap-2'>
                        <FaCheckCircle /> All Features included
                    </li>
                </ul>
                <p className='mx-auto w-full md:w-1/2 text-center'>
                    Whether your need is one-time or daily, we have the right plan for
                    you. Get started now and send your next campaign with confidence!
                </p>

                <Plans />
            </section>

            {/* pricing section end */}

            {/* carousel sections start */}
            <div className='py-10 md:py-20 container mx-auto text-center'>
                <h1 className='text-4xl md:text-5xl font-extrabold text-center text-primary'>
                    Fast. Reliable. Affordable.
                </h1>
                <p className='py-3 md:py-5'>
                    Accurate bulk email validation shouldn’t cost a fortune. Rated 4.5/5
                    on{" "}
                </p>
                <Testimonial />
            </div>
            {/* carousel sections end */}


            {/* accordion start */}
            <AccordionFags />
            {/* accordion end */}


        </>
    )
}

export default Home
