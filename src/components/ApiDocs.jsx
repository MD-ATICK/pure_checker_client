import React, { useEffect } from 'react'
import UseHelmet from '../utils/UseHelmet';

function ApiDocs() {

    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, []);

    return (
        <section className='container mx-auto px-[3vw] my-16'>
            <UseHelmet title={'API Documentation - PureChecker | Gmail Validation API'} param={'/api-docs'} description={'Explore the API documentation for PureChecker is Gmail Validation service. Learn how to integrate our API to validate Gmail addresses, check for disposability, existence, and validity with detailed endpoints and examples.'} />
            <div className='space-y-3'>
                <h4 className='font-semibold text-gray-700 mb-5 text-2xl'>
                    API Documentation
                </h4>
                <h4>1. Check Single Email</h4>
                <h4>Endpoint:</h4>

                <div className='border-[1px] border-gray-400 rounded-md shadow-md overflow-hidden'>
                    <div className='flex items-center justify-between p-2 px-3 text-sm bg-slate-200'>
                        <span>Javascript</span>
                        <button>Copy code</button>
                    </div>
                    <div className='py-4 px-3 text-sm font-medium'>
                        GET HTTP://LOCALHOST:9999/API/V1/GMAIL/CHECK/SINGLE
                    </div>
                </div>

                <h4>
                    <span className='font-medium block pb-1'>Description: </span>
                    This endpoint checks the validity of a single Gmail address.
                </h4>

                <h4>Parameters: :</h4>

                <div className='border-[1px] border-gray-400 flex rounded-md shadow-md overflow-hidden'>
                    <div className='text-sm w-[20%]'>
                        <h3 className='px-4 py-2 font-medium border-b-[1px] border-r-[1px] border-gray-300 bg-slate-200'>
                            Parameter
                        </h3>
                        <h4 className='px-4 py-2 border-b-[1px] border-r-[1px] border-gray-300'>
                            `KEY`
                        </h4>
                        <h4 className='px-4 py-2 border-r-[1px] border-gray-300'>
                            `EMAIL`
                        </h4>
                    </div>
                    <div className='text-sm w-[20%]'>
                        <h3 className='px-4 py-2 font-medium border-b-[1px] border-r-[1px] border-gray-300 bg-slate-200'>
                            Type
                        </h3>
                        <h4 className='px-4 py-2 border-b-[1px] border-r-[1px] border-gray-300'>
                            String
                        </h4>
                        <h4 className='px-4 py-2 border-r-[1px] border-gray-300'>String</h4>
                    </div>
                    <div className='text-sm w-[60%]'>
                        <h3 className='px-4 py-2 font-medium border-b-[1px] border-gray-300 bg-slate-200'>
                            Description
                        </h3>
                        <h4 className='px-4 py-2 border-b-[1px] border-gray-300'>
                            Your secret API key.
                        </h4>
                        <h4 className='px-4 py-2 border-gray-300'>
                            The email address to be checked.
                        </h4>
                    </div>
                </div>

                <h4>Example Request:</h4>

                <div className='border-[1px] border-gray-400 rounded-md shadow-md overflow-hidden'>
                    <div className='flex items-center justify-between p-2 px-3 text-sm bg-slate-200'>
                        <span>http</span>
                        <button>Copy code</button>
                    </div>
                    <div className='py-4 px-3 text-sm font-medium'>
                        GET
                        HTTP://LOCALHOST:9999/API/V1/GMAIL/CHECK/SINGLE?KEY=YOUR_API_KEY&EMAIL=example@example.com
                    </div>
                </div>

                <h4>Example Response:</h4>

                <div className='border-[1px] border-gray-400 rounded-md shadow-md overflow-hidden'>
                    <div className='flex items-center justify-between p-2 px-3 text-sm bg-slate-200'>
                        <span>json</span>
                        <button>Copy code</button>
                    </div>
                    <div className='py-4 px-3 text-sm font-medium'>
                        <pre>
                            {`{
"email": "example@example.com",
"is_valid": true,
"details": {
"domain": "example.com",
"mx_records": ["mx.example.com"],
"smtp_check": true
}
}`}{" "}
                        </pre>
                    </div>
                </div>

                <h4>Usage Instructions: </h4>
                <div className='text-sm ml-3'>
                    <h4>
                        1. Replace <strong>`YOUR_API_KEY`</strong> with your actual API key.
                    </h4>
                    <h4>
                        2. Replace <strong>`example@example.com`</strong> with the email
                        address you want to check.
                    </h4>
                    <h4>
                        3. Send the request via your browser or any HTTP client (like
                        Postman or cURL).
                    </h4>
                </div>

                <h4>Fetching Method (JavaScript Example):</h4>

                <div className='border-[1px] border-gray-400 rounded-md shadow-md overflow-hidden'>
                    <div className='flex items-center justify-between p-2 px-3 text-sm bg-slate-200'>
                        <span>javascript</span>
                        <button>Copy code</button>
                    </div>
                    <div className='py-4 px-3 text-sm font-medium'>
                        <pre className='overflow-auto'>
                            {`fetch('HTTP://LOCALHOST:9999/API/V1/GMAIL/CHECK/SINGLE?KEY=YOUR_API_KEY&EMAIL=example@example.com')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
`}{" "}
                        </pre>
                    </div>
                </div>

                <br />
                <br />
                <div className='flex h-[1px] bg-gray-300 w-full'></div>
                <br />
                <br />

                <h4>2. Check Bulk Emails</h4>

                <h4>Endpoint: </h4>

                <div className='border-[1px] border-gray-400 rounded-md shadow-md overflow-hidden'>
                    <div className='flex items-center justify-between p-2 px-3 text-sm bg-slate-200'>
                        <span>javascript</span>
                        <button>Copy code</button>
                    </div>
                    <div className='py-4 px-3 text-sm font-medium'>
                        POST HTTP://LOCALHOST:9999/API/V1/GMAIL/CHECK/BULK
                    </div>
                </div>

                <h4>
                    <span className='font-medium block pb-1'>Description: </span>
                    This endpoint checks the validity of multiple Gmail addresses in bulk.
                </h4>

                <h4>Parameters: :</h4>

                <div className='border-[1px] border-gray-400 flex rounded-md shadow-md overflow-hidden'>
                    <div className='text-sm w-[20%]'>
                        <h3 className='px-4 py-2 font-medium border-b-[1px] border-r-[1px] border-gray-300 bg-slate-200'>
                            Parameter
                        </h3>
                        <h4 className='px-4 py-2 border-b-[1px] border-r-[1px] border-gray-300'>
                            `KEY`
                        </h4>
                        <h4 className='px-4 py-2 border-r-[1px] border-gray-300'>
                            `EMAIL`
                        </h4>
                    </div>
                    <div className='text-sm w-[20%]'>
                        <h3 className='px-4 py-2 font-medium border-b-[1px] border-r-[1px] border-gray-300 bg-slate-200'>
                            Type
                        </h3>
                        <h4 className='px-4 py-2 border-b-[1px] border-r-[1px] border-gray-300'>
                            String
                        </h4>
                        <h4 className='px-4 py-2 border-r-[1px] border-gray-300'>Array</h4>
                    </div>
                    <div className='text-sm w-[60%]'>
                        <h3 className='px-4 py-2 font-medium border-b-[1px] border-gray-300 bg-slate-200'>
                            Description
                        </h3>
                        <h4 className='px-4 py-2 border-b-[1px] border-gray-300'>
                            Your secret API key.
                        </h4>
                        <h4 className='px-4 py-2 border-gray-300'>
                            List of email addresses to be checked.
                        </h4>
                    </div>
                </div>

                <h4>Example Request:</h4>

                <div className='border-[1px] border-gray-400 rounded-md shadow-md overflow-hidden'>
                    <div className='flex items-center justify-between p-2 px-3 text-sm bg-slate-200'>
                        <span>http</span>
                        <button>Copy code</button>
                    </div>
                    <div className='py-4 px-3 text-sm font-medium overflow-auto'>
                        <pre>
                            {`POST HTTP://LOCALHOST:9999/API/V1/GMAIL/CHECK/BULK?KEY=YOUR_API_KEY
Content-Type: application/json

{
"emails": [
"example1@example.com",
"example2@example.com",
"example3@example.com"
]
}
`}
                        </pre>
                    </div>
                </div>

                <h4>Example Response:</h4>

                <div className='border-[1px] border-gray-400 rounded-md shadow-md overflow-hidden'>
                    <div className='flex items-center justify-between p-2 px-3 text-sm bg-slate-200'>
                        <span>json</span>
                        <button>Copy code</button>
                    </div>
                    <div className='py-4 px-3 text-sm font-medium'>
                        <pre>
                            {`{
"results": [
{
"email": "example1@example.com",
"is_valid": true,
"details": {
"domain": "example.com",
"mx_records": ["mx.example.com"],
"smtp_check": true
}
},
{
"email": "example2@example.com",
"is_valid": false,
"details": {
"domain": "example.com",
"mx_records": [],
"smtp_check": false
}
}
// ...additional email results
]
}
`}
                        </pre>
                    </div>
                </div>

                <h4>Usage Instructions: </h4>
                <div className='text-sm ml-3'>
                    <h4>
                        1. Replace <strong>`YOUR_API_KEY`</strong> with your actual API key.
                    </h4>
                    <h4>
                        2. Construct the request body with a list of emails to be checked.
                    </h4>
                    <h4>
                        3. Send the request via your browser or any HTTP client (like
                        Postman or cURL).
                    </h4>
                </div>

                <h4>Fetching Method (JavaScript Example):</h4>

                <div className='border-[1px] border-gray-400 rounded-md shadow-md overflow-hidden'>
                    <div className='flex items-center justify-between p-2 px-3 text-sm bg-slate-200'>
                        <span>javascript</span>
                        <button>Copy code</button>
                    </div>
                    <div className='py-4 px-3 text-sm font-medium'>
                        <pre>
                            {`fetch('HTTP://LOCALHOST:9999/API/V1/GMAIL/CHECK/BULK?KEY=YOUR_API_KEY', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
"emails": [
"example1@example.com",
"example2@example.com",
"example3@example.com"
]
})
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
`}
                        </pre>
                    </div>
                </div>

                <p>
                    This documentation provides clear instructions and examples on how to
                    use your API endpoints. Adjust the LOCALHOST:9999 to your actual
                    server address when deploying.
                </p>
            </div>
        </section>

    )
}

export default ApiDocs
