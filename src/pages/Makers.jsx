import React from "react";
import { MdDone } from "react-icons/md";
import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import { Button, IconButton, Select, Textarea } from "@chakra-ui/react";
import { MdOutlineFilePresent } from "react-icons/md";
import { IoSave } from "react-icons/io5";
import { MdOutlineDocumentScanner } from "react-icons/md";
import ContactUs from "./ContactUs";

const Makers = () => {
	return (
		<>
			{/* contact us page start  */}
			<ContactUs />
			{/* contact us page end */}

			{/* bulk mail checker start */}
			<div className='container mx-auto my-10 px-3 w-full md:w-2/3'>
				<h1 className='text-lg ml-1 md:text-xl font-extrabold text-[#2B6CB0]'>
					Bulk Mail Checker
				</h1>

				<div className='my-5 mt-2'>
					<Textarea
						placeholder='Here is a sample placeholder'
						height={250}
						border={"1px"}
						borderColor={"blue"}
					/>
					<div className='flex items-center justify-between mt-2'>
						<Button
							colorScheme='blue'
							size='sm'
							title='WE ACCEPT CSV/XLS/XLSX/TXT'
							className='flex items-center gap-1'
						>
							<MdOutlineFilePresent size={20} />
							<p>Upload</p>
						</Button>
						<div className='flex items-center gap-1 md:gap-3'>
							<Select
								variant='filled'
								placeholder='Filled'
								size={"sm"}
								border={"1px"}
								borderColor={"blue"}
								rounded={"5px"}
								color={"blue"}
								minWidth={"130px"}
							>
								<option value='option1'>Option 1</option>
								<option value='option1'>Option 1</option>
								<option value='option1'>Option 1</option>
								<option value='option1'>Option 1</option>
							</Select>

							<IconButton
								colorScheme='blue'
								aria-label='file save'
								size='sm'
								icon={<IoSave />}
							/>

							<Button
								colorScheme='blue'
								size='sm'
								className='flex items-center gap-1 w-full'
							>
								Check
								<MdOutlineDocumentScanner size={20} />
							</Button>
						</div>
					</div>
				</div>

				<h4 className='mt-10'>
					Never worry about bounced emails again! Our live bulk email checker
					instantly validates email addresses across major providers like Gmail,
					Hotmail, Outlook, and Yahoo. Clean your lists, boost deliverability,
					and blast emails with confidence – all in one powerful tool.
				</h4>
				<br />
				<br />

				<h1 className='text-3xl font-bold mb-4'>
					How to Use Ychecker's Bulk Email Checker
				</h1>

				<p className='text-gray-700'>
					Never waste time with undeliverable emails again! Ychecker's bulk
					email checker helps you validate a large list of email addresses in
					seconds.
				</p>

				<h2 className='text-xl font-medium mb-2 mt-5'>
					Input Email Addresses:
				</h2>

				<ul className='list-disc pl-4 space-y-2 ml-10'>
					<li className='text-gray-700'>
						Copy and paste your list of email addresses into the provided
						textarea.
					</li>
					<li className='text-gray-700'>
						Each email address should be on a separate line.
					</li>
					<li className='text-gray-700'>
						Alternatively, you can upload a text file containing your email
						list.
					</li>
				</ul>

				<h2 className='text-xl font-medium mb-2 mt-5'>
					Upload Text File (Optional):
				</h2>

				<ol className='list-decimal pl-4 space-y-2 ml-10'>
					<li className='text-gray-700'>Click on the "Attach File" button.</li>
					<li className='text-gray-700'>
						Select the text file from your device and click "Open".
					</li>
					<li className='text-gray-700'>
						The contents of the text file will be automatically displayed in the
						textarea, ready for verification.
					</li>
				</ol>

				<h2 className='text-xl font-medium mb-2 mt-5'>
					Start the Verification Process:
				</h2>

				<p className='text-gray-700'>
					Once you have entered or uploaded your email list, click on the
					"Verify" button to initiate the bulk email verification process.
					Ychecker will check each email address individually and provide
					real-time results.
				</p>

				<h2 className='text-xl font-medium mb-2 mt-5'>
					Filter and Copy Results:
				</h2>

				<p className='text-gray-700'>
					After the verification process is complete, you can filter the results
					based on different statuses:
				</p>

				<ul className='list-disc pl-4 space-y-2 ml-5'>
					<li className='text-gray-700'>
						Select the desired status (Live, Die, Verify, or Disposable) from
						the dropdown menu.
					</li>
					<li className='text-gray-700'>
						Click on the "Copy" button to easily copy the filtered email
						addresses to your clipboard.
					</li>
				</ul>
			</div>
			{/* bulk mail checker end */}

			{/* why should use section start */}
			<div className='bg-alternative text-secondary px-3 py-16 pb-40 reClip relative -top-1'>
				<h1 className='text-center text-2xl md:text-5xl font-bold'>
					Why you should give a f@#k
				</h1>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-6 container mx-auto mt-10'>
					<div className='flex flex-col items-center gap-5'>
						<img src='./save-money.svg' alt='Save money on email marketing' title="Save money on email marketing" className='h-20' />
						<h2 className='self-start text-3xl font-bold'>
							Save money on email marketing
						</h2>
						<p>
							Increase the sender reputation, deliverability & conversion rate
							of your emails by sending them only to real people.
						</p>
					</div>
					<div className='flex flex-col items-center gap-5'>
						<img src='./increase-roi.svg' alt='Increase ROI of your email campaigns' title="Increase ROI of your email campaigns" className='h-20' />

						<h2 className='self-start text-3xl font-bold'>
							Increase ROI of your email campaigns
						</h2>
						<p>
							Stop spending money on spammy email addresses. Spend less by
							sending fewer emails thanks to the verified email list.
						</p>
					</div>
					<div className='flex flex-col items-center gap-5'>
						<img src='./protect.svg' title="Protect your domain reputation score" alt='Protect your domain reputation score' className='h-20' />
						<h2 className='self-start text-3xl font-bold'>
							Protect your domain reputation score
						</h2>
						<p>
							Spam traps and hard bounces kill your reputation. Get rid of them
							so your emails don't end up in spam folders anymore.
						</p>
					</div>
				</div>
			</div>
			{/* why should use section end */}

			{/* verify emails section start */}
			<div className='container mx-auto py-28 px-3'>
				<h1 className='text-2xl md:text-5xl font-extrabold text-center text-gray-700'>
					How we verify emails
				</h1>

				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-10 mt-8 md:mt-16'>
					<div>
						<h1 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
							Domain & SMTP validation
						</h1>
						<p className='text-lg text-gray-700'>
							We check the ISPs and remove all emails with invalid, inactive,
							parked domains or invalid accounts.
						</p>
					</div>
					<div>
						<h1 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
							Domain & SMTP validation
						</h1>
						<p className='text-lg text-gray-700'>
							We check the ISPs and remove all emails with invalid, inactive,
							parked domains or invalid accounts.
						</p>
					</div>
					<div>
						<h1 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
							Domain & SMTP validation
						</h1>
						<p className='text-lg text-gray-700'>
							We check the ISPs and remove all emails with invalid, inactive,
							parked domains or invalid accounts.
						</p>
					</div>
					<div>
						<h1 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
							Domain & SMTP validation
						</h1>
						<p className='text-lg text-gray-700'>
							We check the ISPs and remove all emails with invalid, inactive,
							parked domains or invalid accounts.
						</p>
					</div>
					<div>
						<h1 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
							Domain & SMTP validation
						</h1>
						<p className='text-lg text-gray-700'>
							We check the ISPs and remove all emails with invalid, inactive,
							parked domains or invalid accounts.
						</p>
					</div>
					<div>
						<h1 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
							Domain & SMTP validation
						</h1>
						<p className='text-lg text-gray-700'>
							We check the ISPs and remove all emails with invalid, inactive,
							parked domains or invalid accounts.
						</p>
					</div>
					<div>
						<h1 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
							Domain & SMTP validation
						</h1>
						<p className='text-lg text-gray-700'>
							We check the ISPs and remove all emails with invalid, inactive,
							parked domains or invalid accounts.
						</p>
					</div>
					<div>
						<h1 className='text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-3 text-primary'>
							Domain & SMTP validation
						</h1>
						<p className='text-lg text-gray-700'>
							We check the ISPs and remove all emails with invalid, inactive,
							parked domains or invalid accounts.
						</p>
					</div>
				</div>
			</div>
			{/* verify emails section end */}

			{/* email verification api section start */}
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 px-3 items-center py-20 pt-10'>
				<div>
					<img src='./api.png' alt='' />
				</div>
				<div>
					<h4 className='text-2xl font-bold text-primary mb-8'>
						Email verification API
					</h4>
					<h1 className='text-4xl md:text-5xl font-extrabold text-accent my-5'>
						Catch bad emails before they get to database
					</h1>
					<p className='text-lg'>
						Verify emails before they get to your database. Implement ELV's
						real-time API into your website registration process, newsletter
						sign up form and everywhere else you ask for emails.
					</p>
					<Link className='py-2 px-5 border-2 border-primary inline-block rounded text-primary mt-5'>
						Get your API key
					</Link>
				</div>
			</div>
			{/* email verification api section end */}

			{/* carousel sections start */}
			<div className='py-10 md:py-20 container mx-auto text-center'>
				<h1 className='text-4xl md:text-5xl font-extrabold text-center text-primary'>
					Fast. Reliable. Affordable.
				</h1>
				<p className='py-3 md:py-5'>
					Accurate bulk email validation shouldn’t cost a fortune. Rated 4.5/5
					on{" "}
				</p>
				<Testimonial />
			</div>
			{/* carousel sections end */}
		</>
	);
};

export default Makers;
