import React from 'react'

export default function HowVerifyEmail() {
  return (
    <div className='container mx-auto py-28 px-3'>
    {/* <h1 className='text-2xl md:text-5xl font-bold text-center text-gray-700'>
        How we verify emails
    </h1> */} How we verify emails
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
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
                Syntax and Format Check
            </h1>
            <p className='text-md mt-2 text-gray-700'>
                We start by examining the syntax of each email address to ensure
                it complies with standard email formatting rules. This includes
                checking for the presence of "@" and valid domain extensions
                (.com, .net, etc.).
            </p>
        </div>
        <div>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
                Domain Validation
            </h1>
            <p className='text-md mt-2 text-gray-700'>
                Next, we verify the domain of the email address. This involves
                checking the DNS records to confirm that the domain exists and is
                configured correctly to receive emails.
            </p>
        </div>
        <div>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
                MX Record Verification
            </h1>
            <p className='text-md mt-2 text-gray-700'>
                We then check the Mail Exchange (MX) records of the domain. MX
                records indicate which mail servers are responsible for receiving
                emails for the domain. This step ensures that the domain is
                capable of accepting emails.
            </p>
        </div>
        <div>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
                SMTP Protocol Check
            </h1>
            <p className='text-md mt-2 text-gray-700'>
                Our system connects to the mail server via SMTP to verify the
                existence of the email address. This involves simulating an email
                send process without actually sending an email, to confirm whether
                the mailbox is active and able to receive messages.
            </p>
        </div>
        <div>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
                Mailbox Validation
            </h1>
            <p className='text-md mt-2 text-gray-700'>
                We go a step further to verify the existence of the mailbox. This
                helps in determining if the specific email address exists on the
                mail server and can receive emails.
            </p>
        </div>
        <div>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
                Catch-All Domain Detection
            </h1>
            <p className='text-md mt-2 text-gray-700'>
                Some domains are configured to accept all emails sent to them,
                regardless of the username. We identify such catch-all domains to
                provide additional insights about the deliverability of emails.
            </p>
        </div>
        <div>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
                Role-Based Email Detection
            </h1>
            <p className='text-md mt-2 text-gray-700'>
                Our system identifies role-based emails (e.g., info@, admin@) that
                are typically used for general inquiries or administrative
                purposes, helping you target individual users more effectively.
            </p>
        </div>
        <div>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
                Spam Trap Detection
            </h1>
            <p className='text-md mt-2 text-gray-700'>
                We identify known spam traps to prevent your emails from being
                flagged as spam. Spam traps are email addresses used by ISPs and
                organizations to catch spammers, and sending emails to these
                addresses can harm your sender reputation.
            </p>
        </div>
        <div>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
                Greylisting and Temporary Issues Handling
            </h1>
            <p className='text-md mt-2 text-gray-700'>
                Our verification process also accounts for temporary issues such
                as greylisting, where the mail server temporarily rejects an
                email. We handle these instances by re-attempting verification to
                ensure accuracy.
            </p>
        </div>
        <div>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
                Phone Verification (if required)
            </h1>
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
  )
}
