import { Center } from "@chakra-ui/react";
import React from "react";

const Terms = () => {
	return (
		<section>
			<div className='bg-primary themeClip h-[300px]'>
				<div className='container mx-auto flex flex-col text-center items-center justify-center h-[80%]'>
					<h1 className='text-5xl font-extrabold text-secondary'>
						Terms of Use
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
			<strong>Effective Date: [Insert Date]</strong>
				<p>
					Welcome to Pure Checker! By accessing or using our website at
					purechecker.com (the "Site"), you agree to be bound by these Terms of
					Use ("Terms"). If you do not agree with these Terms, please do not use
					the Site.
				</p>

				<Center height='50px'>
					<div className='bg-gray-300 h-[1px] w-full'></div>
				</Center>

				<strong className='text-lg block'>1. Acceptance of Terms</strong>

				<p>
					By using the Site, you agree to comply with and be legally bound by
					these Terms and any applicable laws and regulations. If you do not
					agree to these Terms, you must not use the Site.
				</p>

				<strong className='text-lg block pt-5'>2. Changes to Terms</strong>

				<p>
					We reserve the right to modify these Terms at any time. Any changes
					will be effective immediately upon posting on the Site. Your continued
					use of the Site following the posting of revised Terms means that you
					accept and agree to the changes.
				</p>

				<strong className='text-lg block pt-5'>3. Use of the Site</strong>

				<p>
					You agree to use the Site only for lawful purposes and in accordance
					with these Terms. You agree not to:
				</p>

				<ol className='ml-10 list-disc space-y-1'>
					<li>
						Use the Site in any way that violates any applicable federal, state,
						local, or international law or regulation.
					</li>
					<li>
						Engage in any conduct that restricts or inhibits anyone's use or
						enjoyment of the Site, or which, as determined by us, may harm Pure
						Checker or users of the Site.
					</li>

					<li>
						Use any device, software, or routine that interferes with the proper
						working of the Site.
					</li>

					<li>
						Introduce any viruses, Trojan horses, worms, logic bombs, or other
						material that is malicious or technologically harmful.
					</li>
				</ol>
				<strong className='text-lg block pt-5'>4. Account Registration</strong>

				<p>
					To use certain features of the Site, you may be required to register
					for an account. You agree to:
				</p>

				<ol className='ml-10 list-disc space-y-1'>
					<li>
						Provide accurate, current, and complete information during the
						registration process.
					</li>

					<li>Maintain and promptly update your account information.</li>
					<li>
						Maintain the security of your password and accept all risks of
						unauthorized access to your account and the information you provide.
					</li>
				</ol>

				<strong className='text-lg block pt-5'>
					5. Email Verification Services
				</strong>

				<p>
					Pure Checker provides email verification services to help ensure the
					accuracy of your email lists. By using our services, you agree that:
				</p>

				<ol className='ml-10 list-disc space-y-1'>
					<li>
						You will not use the service for any illegal or unauthorized
						purpose.
					</li>
					<li>
						You will not use the service to verify email addresses without the
						consent of the email address owner.
					</li>
					<li>
						You will not use the service to send unsolicited emails or spam.
					</li>
				</ol>

				<strong className='text-lg block pt-5'>6. Payment and Credits</strong>

				<p>
					Pure Checker offers both pay-as-you-go and subscription plans for
					email verification services. By purchasing credits or subscribing to a
					plan, you agree to:
				</p>

				<ol className='ml-10 list-disc space-y-1'>
					<li>
						Pay all applicable fees and charges in accordance with the selected
						plan.
					</li>
					<li>Provide valid payment information.</li>
					<li>
						Allow us to charge your payment method for all fees incurred under
						your account.
					</li>
				</ol>

				<strong className='text-lg block pt-5'>7. Intellectual Property</strong>

				<p>
					The Site and its entire contents, features, and functionality
					(including but not limited to all information, software, text,
					displays, images, video, and audio, and the design, selection, and
					arrangement thereof) are owned by Pure Checker, its licensors, or
					other providers of such material and are protected by international
					copyright, trademark, patent, trade secret, and other intellectual
					property or proprietary rights laws.
				</p>

				<strong className='text-lg block pt-5'>8. Termination</strong>
				<p>
					We reserve the right to terminate or suspend your account and access
					to the Site at our sole discretion, without notice, for conduct that
					we believe violates these Terms or is harmful to other users of the
					Site, us, or third parties, or for any other reason.
				</p>

				<strong className='text-lg block pt-5'>
					9. Limitation of Liability
				</strong>

				<p>
					To the fullest extent permitted by applicable law, in no event will
					Pure Checker, its affiliates, or their licensors be responsible for
					any indirect, incidental, special, consequential, or punitive damages,
					including but not limited to, loss of profits, data, use, goodwill, or
					other intangible losses, resulting from (i) your use or inability to
					use the Site; (ii) any unauthorized access to or use of our servers
					and/or any personal information stored therein; (iii) any interruption
					or cessation of transmission to or from the Site; (iv) any bugs,
					viruses, trojan horses, or the like that may be transmitted to or
					through the Site by any third party; or (v) any errors or omissions in
					any content or for any loss or damage incurred as a result of the use
					of any content posted, emailed, transmitted, or otherwise made
					available through the Site, whether based on warranty, contract, tort
					(including negligence), or any other legal theory, and whether or not
					we have been informed of the possibility of such damage.
				</p>

				<strong className='text-lg block pt-5'>10. Indemnification</strong>

				<p>
					You agree to protect, defend, and hold harmless Pure Checker, its
					affiliates, licensors, and service providers, and their respective
					officers, directors, employees, agents, and contractors from and
					against any and all claims, damages, obligations, losses, liabilities,
					costs, or debt, and expenses (including but not limited to attorney's
					fees) arising from:
				</p>

				<ol className='ml-10 list-disc space-y-1'>
					<li>Your use of and access to the Site.</li>
					<li>Your violation of any of these Terms.</li>
					<li>
						Your violation of any third-party right, including without
						limitation any intellectual property, property, or privacy right.
					</li>
					<li>
						Any claim that your use of the Site caused damage to a third party.
					</li>
				</ol>

				<Center height='50px'>
					<div className='bg-gray-300 h-[1px] w-full'></div>
				</Center>

				<strong className='text-lg block'>Contact Us</strong>
				<p>
					If you have any questions about these Terms, please contact us at:
				</p>
				<ol>
					<li>
						<strong>Email: </strong> support@purechecker.com
					</li>
				</ol>
			</div>
		</section>
	);
};

export default Terms;
