import React from 'react'
import Testimonial from '../Testimonial'

export default function TestimonialSection() {
    return (
        <div className='py-10 md:py-20 container mx-auto text-center'>
            <h1 className='text-3xl md:text-4xl font-bold text-center text-primary'>
                Fast. Reliable. Affordable.
            </h1>
            <p className='py-3 md:py-5'>
                Accurate bulk email validation shouldn’t cost a fortune. Rated 4.5/5
                on{" "}
            </p>
            <Testimonial />
        </div>

    )
}
