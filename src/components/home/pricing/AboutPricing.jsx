import React from 'react'

export default function AboutPricing() {
    return (
        <div>
            <img src='./favicon.png' alt='favicon' title='favicon' className='h-20 mx-auto mb-2' />
            <h1 className='text-2xl font-bold text-center'>Go Premium!</h1>
            <ul className='flex flex-wrap items-center justify-center gap-1 md:gap-8 my-3 md:my-5'>
                <li className='flex items-center gap-2'>
                    {/* <FaCheckCircle /> */}
                    Volume discount
                </li>
                <li className='flex items-center gap-2'>
                    {/* <FaCheckCircle /> */}
                    Prioritized job
                </li>
                <li className='flex items-center gap-2'>
                    {/* <FaCheckCircle /> */}
                    Personalized Support
                </li>
                <li className='flex items-center gap-2'>
                    {/* <FaCheckCircle /> */}
                    All Features included
                </li>
            </ul>
            <p className='mx-auto w-full md:w-1/2 text-center'>
                Whether your need is one-time or daily, we have the right plan for
                you. Get started now and send your next campaign with confidence!
            </p>
        </div>
    )
}
