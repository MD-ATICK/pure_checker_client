import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
} from "@chakra-ui/react";
import React from "react";

const AccordionFaqs = () => {
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
		<>
			<div className='container px-5 md:mx-auto mb-20 w-full sm:w-[80%] md:w-[70%] lg:w-[60%]'>
				<h2 className='text-2xl font-bold text-center mb-10'>
					{" "}
					Frequently Asked Questions (FAQ)
				</h2>
				<Accordion defaultIndex={[0]} allowToggle>
					{faqs?.slice(0, 7).map((faq, index) => (
						<AccordionItem key={index}>
							<h2>
								<AccordionButton>
									<Box as='span' flex='1' padding={4} textAlign='left'>
										{faq?.title}
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<p
									className='text-lg mt-4'
									dangerouslySetInnerHTML={{ __html: faq?.description }}
								/>
							</AccordionPanel>
						</AccordionItem>
					))}
				</Accordion>

			</div>
			{/* <div style={{ width: '100%', padding: '30px', }}>
				<div style={{ maxWidth: '450px', width: '100%', background: '#e6ece9', margin: 'auto' }}>
					<div style={{ background: 'blue', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<img src="/3.jpg" className="h-[35px]" alt="" />
					</div>
					<div style={{ padding: '20px', borderTop : '6px solid #09316D' , display: "flex", flexDirection: 'column', gap: '30px' }}>
						<p>Hello, <span style={{ fontWeight: '600', fontSize: '18px', }}>Mohammad Atick</span></p>
						<p style={{ fontSize: '15px' }}>Welcome to pure checker. we are excited to have you join out community. Before you get started, you need to verify you email address to ensure we have the correct impormation.</p>
						<button style={{ margin: '0 20px', padding: '15px 40px', fontSize: '20px', background: 'blue', color: 'white', fontWeight: '500', borderRadius: '50px' }} onClick={() => window.location.href = 'http://www.example.com'}>Verify</button>
						<p style={{ fontSize: '14px' }}>If this attempt wasnot you, email <span style={{fontWeight: '600'}}>support@example.com</span> so we can assist you.</p>
					</div>
					<div style={{ background: 'blue', display: 'flex', flexDirection : 'column' , color : '#e6ece9' ,fontSize :'14px' , textAlign : 'center' , padding : "20px 0", justifyContent: 'center', alignItems: 'center' }}>
						<p>pure checker, inc</p>
						<p>San Francisco CA 68592</p>
						<p>we are already copyright for 2024!</p>
					</div>
				</div>
			</div> */}
		</>
	);
};

export default AccordionFaqs;
