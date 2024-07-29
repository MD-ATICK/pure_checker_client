import React from 'react'

function WhyUse() {
    return (
        <div className=' bg-[#030832] text-secondary px-3 py-16 pb-40 reClip relative -top-1'>
            <h1 className='text-center text-2xl md:text-4xl font-semibold'>
                Why you should give a f@#k
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-6 container mx-auto mt-20'>
                <div className='flex flex-col items-center gap-8'>
                    <img src='./saving.png' title='Save money on email marketing' alt='Save money on email marketing' className='h-24' />
                    <h3 className='self-start text-3xl font-bold'>
                        Save money on email marketing
                    </h3>
                    <p>
                        Increase the sender reputation, deliverability & conversion rate
                        of your emails by sending them only to real people.
                    </p>
                </div>
                <div className='flex flex-col items-center gap-8'>
                    <img src='./increase.png' alt=' Increase ROI of your email campaigns' title=' Increase ROI of your email campaigns' className='h-20' />

                    <h3 className='self-start text-3xl font-bold'>
                        Increase ROI of your email campaigns
                    </h3>
                    <p>
                        Stop spending money on spammy email addresses. Spend less by
                        sending fewer emails thanks to the verified email list.
                    </p>
                </div>
                <div className='flex flex-col items-center gap-8'>
                    <img src='./shield.png' alt='Protect your domain reputation score' title='Protect your domain reputation score' className='h-20' />
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
    )
}

export default WhyUse
