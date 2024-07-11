import { Center } from '@chakra-ui/react'
import React from 'react'
import UseHelmet from '../utils/UseHelmet'

function Policy() {
    return (
        <>
        <UseHelmet param={'privacy-policy'} title={'Privacy Policy - PureChecker | Your Privacy Matters'} description={'Read PureChecker is Privacy Policy to understand how we collect, use, and protect your personal information. Learn about our commitment to maintaining your privacy and ensuring the security of your data.'} />
        <section>
            <div className='bg-primary themeClip h-[300px]'>
                <div className='container mx-auto flex flex-col text-center items-center justify-center h-[80%]'>
                    <h1 className='text-5xl font-bold text-secondary'>
                        Privacy Policy
                    </h1>
                </div>
            </div>

            <div className='container mx-auto my-20 space-y-3 w-full md:w-[80%] lg:w-[60%]'>
                <strong>Effective Date: time here</strong>
                <p>
                    <strong>Pure Checker</strong>
                    ("we", "us", or "our") operates the website purechecker.com (the
                    "Site"). This Privacy Policy informs you of our policies regarding the
                    collection, use, and management of personal data when you use our Site
                    and the choices you have associated with that data.
                    <br />
                    <br />
                    By using the Site, you agree to the collection and use of information
                    in accordance with this policy.
                </p>
                <Center height='50px'>
                    <div className='bg-gray-300 h-[1px] w-full'></div>
                </Center>
                <strong className='text-lg pt-2'>Information Collection and Use</strong>
                <p>
                    We collect information solely for the purpose of providing and
                    improving our email verification services. We do not sell or share
                    your data with third parties.
                </p>

                <h2 className='text-lg pt-2 font-bold'>Types of Data Collected</h2>
                <br />

                <strong className='text-lg'>1. Personal Data</strong>
                <p>
                    While using our Site, we may ask you to provide us with certain
                    personally identifiable information that can be used to contact or
                    identify you ("Personal Data"). This may include, but is not limited
                    to:
                </p>

                <p className='ml-5'>
                    - Email address
                    <br />
                    - First name and last name
                    <br />
                    - Phone number
                    <br />- Address, State, Province, ZIP/Postal code, City
                </p>

                <strong className='text-lg pt-4 block'>2. Verification Data</strong>

                <p>
                    We collect email addresses and other data you provide for verification
                    purposes. This data is used solely to perform the verification service
                    and is not shared with any third parties.
                </p>

                <strong className='text-lg pt-4 block'>3. Usage Data</strong>

                <p>
                    We may also collect information on how the Site is accessed and used
                    ("Usage Data"). This Usage Data may include information such as your
                    computer's Internet Protocol (IP) address, browser type, browser
                    version, the pages of our Site that you visit, the time and date of
                    your visit, the time spent on those pages, unique device identifiers,
                    and other diagnostic data.
                </p>

                <strong className='text-lg pt-4 block'>Use of Data</strong>
                <p>Pure Checker uses the collected data for various purposes:</p>

                <ul className='list-decimal ml-10'>
                    <li>To provide and maintain the Site</li>
                    <li>To notify you about changes to our Site</li>
                    <li>
                        To allow you to participate in interactive features of our Site when
                        you choose to do so
                    </li>
                    <li>To provide customer support</li>
                    <li>
                        To gather analysis or valuable information so that we can improve
                        our Site
                    </li>
                    <li>To monitor the usage of the Site</li>

                    <li>To detect, prevent, and address technical issues</li>
                </ul>

                <Center height='50px'>
                    <div className='bg-gray-300 h-[1px] w-full'></div>
                </Center>

                <strong className='text-lg'>Data Protection</strong>
                <p>
                    We are committed to protecting your data. We implement a variety of
                    security measures to maintain the safety of your personal information
                    when you enter, submit, or access your personal information.
                </p>

                <strong className='text-lg pt-4 block'>Security of Data</strong>
                <p>
                    The security of your data is important to us, but remember that no
                    method of transmission over the Internet, or method of electronic
                    storage, is 100% secure. While we strive to use commercially
                    acceptable means to protect your data, we cannot guarantee its
                    absolute security.
                </p>

                <Center height='50px'>
                    <div className='bg-gray-300 h-[1px] w-full'></div>
                </Center>

                <strong className='text-lg'>Changes to This Privacy Policy</strong>

                <p>
                    We may update our Privacy Policy from time to time. We will notify you
                    of any changes by posting the new Privacy Policy on this page. You are
                    advised to review this Privacy Policy periodically for any changes.
                    Changes to this Privacy Policy are effective when they are posted on
                    this page.
                </p>

                <Center height='50px'>
                    <div className='bg-gray-300 h-[1px] w-full'></div>
                </Center>

                <strong className='text-lg'>Contact Us</strong>

                <p>
                    If you have any questions about this Privacy Policy, please contact us
                    at:
                </p>
                <ul>
                    <strong>Email:</strong> support@purechecker.com
                </ul>
            </div>
        </section>
        </>
    )
}

export default Policy
