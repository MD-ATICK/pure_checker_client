import React from "react";

const Cookie = () => {
	return (
		<section>
			<div className='bg-primary themeClip h-[300px]'>
				<div className='container mx-auto flex flex-col text-center items-center justify-center h-[80%]'>
					<h1 className='text-5xl font-extrabold text-secondary'>
						Cookie Policy
					</h1>
					{/* <p className='text-secondary mt-5'>
Welcome to the Pure Checker FAQ page. Here you’ll find answers to
some of the most common questions we receive. If you have a question
that’s not addressed here, feel free to contact us at
support@purechecker.com.
</p> */}
				</div>
			</div>

            <div className='container mx-auto my-20 mt-10 space-y-3 w-full md:w-[80%] lg:w-[60%]'>
            <p className='font-bold block pt-5'>Effective Date: [Insert Date]</p>

				<h2 className='text-lg font-bold block pt-5'>1. Introduction</h2>
				<p>
					Pure Checker (“we”, “our”, “us”) uses cookies and similar technologies
					to enhance your experience on our website purechecker.com. This Cookie
					Policy explains what cookies are, how we use them, and your choices
					regarding cookies.
				</p>

				<h2 className='text-lg font-bold block pt-5'>2. What Are Cookies?</h2>
				<p>
					Cookies are small text files stored on your device (computer, tablet,
					or mobile) when you visit a website. They help the site remember your
					preferences and actions over a period of time, so you don’t have to
					re-enter them whenever you return to the site or browse from one page
					to another.
				</p>

				<h2 className='text-lg font-bold block pt-5'>3. How We Use Cookies</h2>
				<p>We use cookies for the following purposes:</p>
				<ul className='ml-10 list-disc'>
					<li>
						<strong>Necessary Cookies:</strong> These are essential for the
						operation of our website. They enable you to navigate our site and
						use its features.
					</li>
					<li>
						<strong>Performance Cookies:</strong> These cookies collect
						information about how you use our website. This data helps us
						improve the site’s functionality and performance.
					</li>
					<li>
						<strong>Functionality Cookies:</strong> These cookies allow our
						website to remember choices you make and provide enhanced, more
						personalized features.
					</li>
					<li>
						<strong>Targeting Cookies:</strong> These cookies record your visit
						to our website, the pages you have visited, and the links you have
						followed. We use this information to make our website and the
						advertising displayed on it more relevant to your interests.
					</li>
				</ul>

				<h2 className='text-lg font-bold block pt-5'>4. Managing Cookies</h2>
				<p>
					You can control and manage cookies in various ways. Most browsers
					allow you to block or delete cookies. Please note that if you disable
					cookies, some parts of our website may not function properly.
				</p>

				<h2 className='text-lg font-bold block pt-5'>
					5. Changes to This Policy
				</h2>
				<p>
					We may update our Cookie Policy from time to time. Any changes will be
					posted on this page with an updated effective date.
				</p>

				<h2 className='text-lg font-bold block pt-5'>6. Contact Us</h2>
				<p>
					If you have any questions about our Cookie Policy, please contact us
					at:
					<br />
					<a href='mailto:support@purechecker.com'>
						<strong>Email: </strong>
						support@purechecker.com
					</a>
				</p>
			</div>
		</section>
	);
};

export default Cookie;
