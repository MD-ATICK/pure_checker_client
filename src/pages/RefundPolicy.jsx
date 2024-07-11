
const RefundPolicy = () => {
	return (
		<section>
			<div className='bg-primary themeClip h-[300px]'>
				<div className='container mx-auto flex flex-col text-center items-center justify-center h-[80%]'>
					<h1 className='text-5xl font-bold text-secondary'>
						Refund Policy
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
				<h1 className='text-xl font-bold block pt-5'>
					Pure Checker Refund Policy
				</h1>
				<p>
					We at Pure Checker are committed to providing excellent email
					verification services. If for any reason you are not satisfied with
					our services, please review our refund policy below.
				</p>

				<h2 className='text-lg font-bold block pt-5'>
					Eligibility for Refunds
				</h2>
				<p>Refunds may be granted under the following conditions:</p>
				<ul className='ml-10 list-disc'>
					<li>
						<strong>Service Issues:</strong> If you experience technical issues
						that prevent you from using our service effectively, and we are
						unable to resolve these issues within a reasonable time frame.
					</li>
					<li>
						<strong>Incorrect Billing:</strong> If you believe you were charged
						incorrectly or for services you did not receive.
					</li>
				</ul>

				<h2 className='text-lg font-bold block pt-5'>
					Non-Refundable Conditions
				</h2>
				<p>Refunds will not be granted in the following situations:</p>
				<ul className='list-disc ml-10'>
					<li>
						<strong>Change of Mind:</strong> If you change your mind after
						purchasing credits or subscribing to a plan.
					</li>
					<li>
						<strong>Used Credits:</strong> If you have used the credits
						purchased, those credits are considered consumed and non-refundable.
					</li>
					<li>
						<strong>Custom Orders:</strong> Custom orders and bulk verification
						services are non-refundable once the service has commenced.
					</li>
				</ul>

				<h2 className='text-lg font-bold block pt-5'>Requesting a Refund</h2>
				<p>To request a refund, please follow these steps:</p>
				<ul className='ml-10 list-disc'>
					<li>
						<strong>Contact Support:</strong> Email our support team at{" "}
						<a href='mailto:support@purechecker.com'>support@purechecker.com</a>{" "}
						with your refund request, including your account details, purchase
						information, and the reason for the refund request.
					</li>
					<li>
						<strong>Review Process:</strong> Our team will review your request
						and may ask for additional information to process your refund.
					</li>
					<li>
						<strong>Refund Decision:</strong> We will notify you of the refund
						decision within 10 business days. If approved, the refund will be
						processed to your original payment method.
					</li>
				</ul>

				<h2 className='text-lg font-bold block pt-5'>Refund Processing Time</h2>
				<p>
					If your refund is approved, it will be processed within 10 business
					days. The time it takes for the refund to appear in your account may
					vary depending on your payment method and financial institution.
				</p>

				<h2 className='text-lg font-bold block pt-5'>Contact Us</h2>
				<p>
					If you have any questions about our refund policy, please contact us
					at:
				</p>
				<p>
					<strong>Email:</strong>{" "}
					<a href='mailto:support@purechecker.com'>support@purechecker.com</a>
				</p>
			</div>
		</section>
	);
};

export default RefundPolicy;
