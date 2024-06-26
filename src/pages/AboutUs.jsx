import React from "react";
import { Box, Flex, Heading, Text, VStack, Icon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const AboutUs = () => {
	return (
		<section>
			<div className='bg-primary themeClip h-[300px]'>
				<div className='container mx-auto flex flex-col text-center items-center justify-center h-[80%]'>
					<h1 className='text-5xl font-extrabold text-secondary'>About Us</h1>
					{/* <p className='text-secondary mt-5'>
                Welcome to the Pure Checker FAQ page. Here you’ll find answers to
                some of the most common questions we receive. If you have a question
                that’s not addressed here, feel free to contact us at
                support@purechecker.com.
            </p> */}
				</div>
			</div>
			<div className='container mx-auto my-20 mt-10 space-y-3 w-full md:w-[80%] lg:w-[60%]'>
			<h3 className='text-2xl font-extrabold text-slate-700 text-start mb-3'>
					Welcome to Pure Checker
				</h3>
				<p>
					At Pure Checker, we aim to provide top-notch email verification
					services that help businesses maintain clean and effective email
					lists. We understand the importance of accurate email communications
					in today's digital world, and we're dedicated to helping you achieve
					the highest level of email deliverability and performance.
				</p>
				<h3 className='text-xl font-bold pt-3'>Who We Are</h3>
				<p>
					Pure Checker comprises professionals with vast data management and
					email verification knowledge. They are committed to providing
					dependable, time-saving, and easy-to-use services that give you peace
					of mind when managing your mailing lists.
				</p>
				<h3 className='text-xl font-bold pt-3'>What We Do</h3>
				<p>
					Pure Checker is a verification service that checks email addresses
					against multiple criteria to ensure they are valid, active, and safe.
					We aim to reduce bounce rates, improve email deliverability, and
					enhance your email marketing strategy. Whether you're a small
					business, a large enterprise, or an individual, Pure Checker has the
					tools and expertise to meet your needs.
				</p>

				<h3 className='text-xl font-bold pt-3'>Our Values</h3>
				<p>
					<strong>- Accuracy:</strong> We strive to provide the most accurate
					email verification results, ensuring your email lists are clean and
					reliable.
					<br />
					<strong>- Efficiency:</strong> Our service is designed to be fast and
					efficient so that you can verify large email lists quickly. <br />
					<strong>- Security:</strong> We prioritize the security of your data
					and implement robust measures to protect it at all times.
					<br />
					<strong>- Customer Focus:</strong> We are dedicated to offering
					excellent customer service and assistance. Your happiness is our
					primary focus.
				</p>

				<h3 className='text-xl font-bold pt-3'>Why Choose Pure Checker?</h3>
				<p>
					<strong>- Thorough verification:</strong> Our multi-step process of
					checking guarantees the most precise results. <br />
					<strong>- User-friendly interface:</strong> Our system has intuitive
					functions and clear prompts for use. <br />
					<strong>- Flexible packages:</strong> We offer different choices, such
					as paying for what you use or signing up for a monthly plan. <br />
					<strong>- Support you can count on:</strong> Our dependable customer
					care service is here to help whenever you have queries or issues.
				</p>

				<p className='text-lg pt-5'>
					Thank you for choosing Pure Checker. We look forward to helping you
					achieve your email verification goals.
				</p>
			</div>
		</section>
	);
};

export default AboutUs;
