import React from "react";

const Faqs = () => {
	const faqs = [
		{
			title: "1. What is Pure Checker?",
			description: `<strong>Pure Checker</strong> is an online service that provides email verification to ensure the accuracy and validity of your email lists. Our service helps you clean your email list by identifying invalid, inactive, or potentially harmful email addresses.`,
		},
		{
			title: "2. How does Pure Checker work?",
			description: `Pure Checker works by analyzing each email address in your list through various checks, including:<br/>
            - Syntax validation<br/>
            - Domain/MX records check<br/>
            - SMTP verification<br/>
            - Role-based account detection<br/>
            - Disposable email detection<br/>
            The results are categorized into different statuses such as valid, invalid, unknown, and more.`,
		},
		{
			title: "3. What types of email addresses can be verified?",
			description: `Pure Checker can verify a wide range of email addresses, including those from popular providers like Gmail, Hotmail, Outlook, Yahoo, and many others.`,
		},
		{
			title: "4. What file formats do you support for uploading email lists?",
			description: `We support the following file formats for uploading your email lists:<br/>
            - Text Box (1 email per line)<br/>
            - CSV (.csv)<br/>
            - Excel (.xls, .xlsx)<br/>
            - Text (.txt)`,
		},
		{
			title:
				"5. What are the output categories of the email verification process?",
			description: `The results of the email verification process are categorized as follows:<br/>
            - All<br/>
            - Good<br/>
            - Disabled<br/>
            - Phone Verify<br/>
            - Unknown<br/>
            - Not Exist<br/>
            - Duplicate<br/>
            - Wrong Format`,
		},
		{
			title: "6. How can I download my verification results?",
			description: `You can view and download the verification results in various formats, including:<br/>
            - .txt<br/>
            - .csv<br/>
            - .xls<br/>
            - .xlsx<br/>
            The output files will have the email address in the first column and the result status in the second column.`,
		},
		{
			title: "7. Is there a limit on the number of emails I can verify?",
			description: `The limit depends on your account type. Free trial users get 100 credits (1 credit = 1 email check). For paid users, limits depend on the plan you choose:<br/>
            - Pay-as-you-go: Buy credits as needed.<br/>
            - Monthly Subscriptions: Check up to 2500 emails per day. For custom orders, please contact us.`,
		},
		{
			title: "8. How can I purchase credits?",
			description: `You can purchase credits through our website using various payment methods, including:<br/>
            - Cryptocurrency<br/>
            - Bkash For Bangladesh`,
		},
		{
			title: "9. How do I view my credit balance and usage?",
			description: `You can view your credit balance, total credits spent, and daily credits spent in your user area after logging into your account.`,
		},
		{
			title:
				"10. What security measures does Pure Checker take to protect my data?",
			description: `We take data security seriously and implement various measures to protect your information. These include:<br/>
            - Data encryption<br/>
            - Secure servers<br/>
            - Regular security audits<br/>
            - IP restriction to ensure one user per IP`,
		},
		{
			title: "11. Can I integrate Pure Checker with other platforms?",
			description: `Yes, Pure Checker offers an API for customers to automate and integrate email verification with other platforms. Detailed API documentation is available on our API Docs page.`,
		},
		{
			title: "12. Can I change my account settings and preferences?",
			description: `Yes, you can update your account settings, including personal information, password, and preferences, in the user area.`,
		},
		{
			title: "13. How can I contact support?",
			description: `If you have any questions or need assistance, you can contact our support team at <a href="mailto:support@purechecker.com">support@purechecker.com</a>. We are here to help!`,
		},
	];

	return (
		<section>
			<div className='bg-primary themeClip h-[300px]'>
				<div className='container mx-auto flex flex-col text-center items-center justify-center h-[80%]'>
					<h1 className='text-5xl font-extrabold text-secondary'>
						Frequently Asked Questions (FAQ)
					</h1>
					<p className='text-secondary mt-5'>
						Welcome to the Pure Checker FAQ page. Here you’ll find answers to
						some of the most common questions we receive. If you have a question
						that’s not addressed here, feel free to contact us at
						support@purechecker.com.
					</p>
				</div>
			</div>

			<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 my-20'>
				{faqs?.map((singleFaq, index) => (
					<div key={index}>
						<h1 className='text-3xl font-extrabold text-slate-700'>
							{singleFaq?.title}
						</h1>
						<p
							className='text-lg mt-4'
							dangerouslySetInnerHTML={{ __html: singleFaq?.description }}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Faqs;
