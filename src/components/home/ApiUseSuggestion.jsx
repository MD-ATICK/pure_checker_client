import React from 'react'
import { useUserContext } from '../../context/Context'
import { Link } from 'react-router-dom'

export default function ApiUseSuggestion() {

    const { user } = useUserContext()

    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 px-3 items-center py-20 pt-10'>
            <div>
                <img src='./api.png' title='Pure Checker Api' alt='Pure Checker Api' />
            </div>
            <div>
                <h4 className='text-2xl font-bold text-primary mb-8'>
                    Email verification API
                </h4>
                {/* <h1 className='text-4xl md:text-5xl font-bold text-accent my-5'>
            Catch bad emails before they get to database
        </h1> */} Catch bad emails before they get to
                <p className='text-lg'>
                    Verify emails before they get to your database. Implement ELV is
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
    )
}
