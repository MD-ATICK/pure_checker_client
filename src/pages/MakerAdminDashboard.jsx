import {
	AbsoluteCenter,
	Box,
	Button,
	Divider,
	Input,
	Link,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Table,
	TableCaption,
	TableContainer,
	Tabs,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { React, useState } from "react";
import PlanEditModal from "../components/admin/PlanEditModal";
import StatsCard from "../components/admin/StatsCard";
import UserManagementTable from "../components/admin/UserManagementTable";
import BulkMailChecker from "../components/client/BulkMailChecker";
import UserChart from "../components/client/UserChart";
import { AiTwotoneApi } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { Code } from "@chakra-ui/react";

const MakerAdminDashboard = () => {
	const daily = {
		type: "Daily",
		payment: "Pay monthly",
		description: "Per Day Credits",
		question: "How many emails do you want to verify daily?",
		volumePrompt: "Select your email verification volume",
		volumes: ["100", "500", "1K", "2K", "3K", "5K", "10K", "25K", "50K"],
		customVolumePrompt: "Have custom volume need?",
		price: "$900",
		priceNote: "/ month",
		creditsPerDay: "50,000 credits / day",
		buttonText: "Sign Up",
		features: [
			"Low cost",
			"Credit resets daily",
			"Multiple subscriptions available",
			"Best for daily needs",
		],
	};

	const oneTime = {
		type: "One Time",
		payment: "Pay as you go",
		description: "Persistent Credits",
		question: "How many emails do you want to verify?",
		volumePrompt: "Select your email verification volume",
		volumes: [
			"500",
			"1K",
			"2.5K",
			"5K",
			"10K",
			"25K",
			"50K",
			"100K",
			"250K",
			"350K",
			"500K",
			"1M",
			"2.5M",
			"5M",
		],
		customVolumePrompt: "Have custom volume need?",
		price: "$3,500",
		priceNote: "One Time",
		creditsAmount: "5,000,000 credits",
		buttonText: "Sign Up",
		features: [
			"Pay as you go",
			"Credits never expire",
			"Custom plans available",
			"Backup solution for daily credits",
		],
	};

	const stats = [
		{
			title: "Deliverable",
			value: "$405,091.00",
			percentageColor: "text-green-500",
		},
		{
			title: "Invalid",
			value: "$12,787.00",
			percentageColor: "text-red-500",
		},
		{
			title: "API Usage",
			value: "$245,988.00",
			percentageColor: "text-gray-800",
		},
	];

	const initialUsers = [
		{
			id: 1,
			username: "user1",
			status: "Active",
			usedLimit: 250,
			limit: 500,
			package: "oneTime",
			createAt: "2023-01-15",
			buyingDate: "2023-01-01",
		},
		{
			id: 2,
			username: "user2",
			status: "Active",
			usedLimit: 1000,
			limit: 2000,
			package: "Daily",
			createAt: "2023-02-20",
			buyingDate: "2023-02-01",
		},
		{
			id: 3,
			username: "user3",
			status: "Banned",
			usedLimit: 500,
			limit: 1000,
			package: "oneTime",
			createAt: "2023-03-10",
			buyingDate: "2023-03-01",
		},
		{
			id: 4,
			username: "user4",
			status: "Active",
			usedLimit: 5000,
			limit: 10000,
			package: "Daily",
			createAt: "2023-04-05",
			buyingDate: "2023-04-01",
		},
		{
			id: 5,
			username: "user5",
			status: "Banned",
			limit: 200,
			usedLimit: 500,
			package: "oneTime",
			createAt: "2023-05-12",
			buyingDate: "2023-05-01",
		},
	];

	const [users, setUsers] = useState(initialUsers);

	return (
		<div className='container mx-auto space-y-10'>
			{/* pricing page start */}
			<div className='grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 md:mx-20 mt-10'>
				{/* <!-- One Time Section --> */}
				<div className='bg-white shadow-md border-[1px] border-primary rounded-lg px-4 p-4 md:p-6'>
					<h2 className='text-2xl font-bold text-center mb-2 text-primary'>
						One Time
					</h2>
					<p className='text-center text-orange-500 font-semibold mb-4'>
						(Pay as you go)
					</p>
					<p className='text-center mb-4 font-extrabold text-primary'>
						Persistent Credits
					</p>
					<p className='text-center mb-4 font-bold'>
						How many emails do you want to verify?
					</p>
					<p className='text-center mb-4 text-sm bg-primary text-secondary py-2'>
						Select your email verification volume
					</p>
					<div className='grid grid-cols-4 gap-2 mb-4'>
						<button className='border rounded py-2'>500</button>
						<button className='border rounded py-2'>1K</button>
						<button className='border rounded py-2'>2.5K</button>
						<button className='border rounded py-2'>5K</button>
						<button className='border rounded py-2'>10K</button>
						<button className='border rounded py-2'>25K</button>
						<button className='border rounded py-2'>50K</button>
						<button className='border rounded py-2'>100K</button>
						<button className='border rounded py-2'>250K</button>
						<button className='border rounded py-2'>350K</button>
						<button className='border rounded py-2'>500K</button>
						<button className='border rounded py-2'>1M</button>
						<button className='border rounded py-2'>2.5M</button>
						<button className='border rounded py-2'>5M</button>
					</div>

					<Box position='relative' padding='10'>
						<Divider />
						<AbsoluteCenter
							bg='white'
							px='4'
							fontSize={"sm"}
							fontWeight={"bold"}
						>
							OR
						</AbsoluteCenter>
					</Box>
					<div className='text-center mb-4'>
						<p className='font-medium text-base'>Have custom volume need?</p>
						<input
							type='text'
							placeholder='# enter number of emails'
							className='border rounded py-2 px-4 mt-2 text-sm focus:border-primary focus:outline-none'
						/>
					</div>
					<div className='bg-blue-100 grid grid-cols-2 gap-3 py-5 text-center mt-3 border-t-2 border-primary rounded-br-lg rounded-bl-lg'>
						<div>
							<p className='text-xl md:text-2xl font-semibold mb-2'>
								$3,500 <span className='text-sm font-normal'>One Time</span>
							</p>
							<span className='h-[1px] flex bg-primary mx-auto mb-2 w-2/3'></span>
							<p className='mb-2 text-sm md:text-base'>5,000,000 credits</p>
							<PlanEditModal name='Edit One Time' planIs={oneTime} />
						</div>
						<ul className='text-left list-disc mb-4 text-sm space-y-1'>
							<li>Pay as you go</li>
							<li>Credits never expire</li>
							<li>Custom plans available</li>
							<li>Backup solution for daily credits</li>
						</ul>
					</div>
				</div>

				{/* <!-- Daily Section --> */}
				<div className='bg-white shadow-md border-[1px] border-primary rounded-lg p-6 flex flex-col justify-between'>
					<div>
						<h2 className='text-2xl font-bold text-center mb-2 text-primary'>
							Daily
						</h2>
						<p className='text-center text-orange-500 font-semibold mb-4'>
							(Pay monthly)
						</p>
						<p className='text-center mb-4 font-extrabold text-primary'>
							Per Day Credits
						</p>
						<p className='text-center mb-4 font-bold'>
							How many emails do you want to verify daily?
						</p>
						<p className='text-center mb-4 text-sm bg-primary text-secondary py-2'>
							Select your email verification volume
						</p>
					</div>
					<div className='grid grid-cols-4 gap-2 mb-4'>
						<button className='border rounded py-2'>100</button>
						<button className='border rounded py-2'>500</button>
						<button className='border rounded py-2'>1K</button>
						<button className='border rounded py-2'>2K</button>
						<button className='border rounded py-2'>3K</button>
						<button className='border rounded py-2'>5K</button>
						<button className='border rounded py-2'>10K</button>
						<button className='border rounded py-2'>25K</button>
						<button className='border rounded py-2'>50K</button>
					</div>
					<div className=''>
						<Box position='relative' padding='10'>
							<Divider />
							<AbsoluteCenter
								bg='white'
								px='4'
								fontSize={"sm"}
								fontWeight={"bold"}
							>
								OR
							</AbsoluteCenter>
						</Box>

						<div className='text-center mb-4'>
							<p className='font-medium text-base'>Have custom volume need?</p>
							<input
								type='text'
								placeholder='1111111118'
								className='border rounded py-2 px-4 mt-2 text-sm focus:border-primary focus:outline-none'
							/>
						</div>
						<div className='bg-blue-100 grid grid-cols-2 gap-5 py-5 text-center mt-3 border-t-2 border-primary rounded-br-lg rounded-bl-lg'>
							<div>
								<p className='text-xl md:text-2xl font-semibold mb-2'>
									$900 <span className='text-sm font-normal'>/ month</span>
								</p>
								<span className='h-[1px] flex bg-primary mx-auto mb-2 w-2/3'></span>
								<p className='mb-2 text-sm md:text-base'>
									50,000 credits / day
								</p>
								<PlanEditModal name='Edit Daily' planIs={daily} />
								{/* <Button colorScheme='blue' size={"sm"} gap={"5px"}>
									<CiEdit size={20} />
									Edit Daily
								</Button> */}
							</div>
							<ul className='text-left list-disc mb-4 text-sm space-y-1'>
								<li>Low cost</li>
								<li>Credit resets daily</li>
								<li>Multiple subscriptions available</li>
								<li>Best for daily needs</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/* pricing page end */}

			{/* user manage page start */}
			{/* <UserManagementTable /> */}
			{/* user manage page end */}

			{/* dashboard page start */}
			{/* <div>
				<StatsCard />
			</div> */}
			{/* dashboard page end */}

			{/* verification page start */}
			{/* <div>
				<h3 className='text-xl font-bold text-primary py-2'>Email Checker</h3>
				<Tabs variant='enclosed'>
					<TabList>
						<Tab>Single</Tab>
						<Tab>Bulk </Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<div className='flex items-center justify-center min-h-[40vh] m-3 md:m-0'>
								<div className='p-3 md:p-5'>
									<div className='flex gap-5 mx-auto justify-center'>
										<div className='flex flex-col items-center'>
											<h5 className='py-5 font-medium text-gray-600'>
												Best for small businesses and startups
											</h5>

											<form
												action=''
												className='bg-white flex items-center border-[1px] border-primary w-full rounded overflow-hidden'
											>
												<input
													type='text'
													className='py-3 w-full px-3 focus:border-none focus:outline-none'
													placeholder='Enter email here...'
												/>
												<button
													type='submit'
													className='bg-primary whitespace-nowrap px-5 py-3 text-secondary font-medium'
												>
													100 Credits
												</button>
											</form>

											<p className='pt-5 text-sm md:text-base font-base md:font-medium text-gray-600'>
												Sign up and verify up to 100 email addresses for FREE
												daily on free tier.
											</p>
										</div>
									</div>
									<h1 className='text-2xl font-bold text-primary text-center mt-5'>
										Result
									</h1>
									<ul className='flex items-center gap-3 mt-2'>
										<li>
											<strong>Email:</strong> atick@gmail.com
										</li>
										<li>
											<strong>Exist:</strong> false
										</li>
										<li>
											<strong>Format Check:</strong> true
										</li>
										<li>
											<strong>Disposable:</strong> true
										</li>
										<li>
											<strong>Typo:</strong> true
										</li>
									</ul>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<BulkMailChecker title={"Let's check your mail"} />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</div> */}
			{/* verification page end */}

			{/* user stats start */}
			{/* <div>
				<div className='bg-white shadow-md border rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{stats.map((stat, index) => (
						<div
							key={index}
							className={`border-r-[1px] border-alternative last:border-none`}
						>
							<p className={`${stat.percentageColor} text-gray-600 mb-2`}>
								{stat.title}
							</p>
							<p className={`${stat.percentageColor} text-2xl font-bold mb-1`}>
								{stat.value}
							</p>
						</div>
					))}
				</div>
			</div> */}
			{/* user stats end */}
			{/* <div>
				<UserChart />
			</div> */}

			{/* user table start */}
			{/* <div>
				<TableContainer>
					<Table variant='simple'>
						<TableCaption color={"red"}>
							{" "}
							30 Days Left on Your Premium Package!
						</TableCaption>
						<Thead>
							<Tr>
								<Th>Purchased</Th>
								<Th>Total Limit</Th>
								<Th>Used Credits</Th>
								<Th>Package</Th>
							</Tr>
						</Thead>
						<Tbody>
							{users.map(user => (
								<Tr key={user.id}>
									<Td>{user.buyingDate}</Td>
									<Td>{user.limit}</Td>
									<Td>{user.usedLimit}</Td>
									<Td>{user.package}</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</TableContainer>
			</div> */}
			{/* user table end */}

			{/* api section start */}
			{/* <div>
				<h3 className='text-xl ml-1 font-bold text-primary py-2'>API</h3>

				<div>
					<div className='rounded-lg shadow-lg border-[1px] border-primary p-5 bg-[#EDF1F9] flex flex-col gap-5 items-center justify-center min-h-[40vh]'>
						<AiTwotoneApi size={70} color='#2B6CB0' />

						<h4>Create a new API</h4>

						<Button
							colorScheme='teal'
							size={"sm"}
							display={"flex"}
							gap={"2px"}
							alignItems={"center"}
						>
							<IoMdAdd size={20} />
							New API
						</Button>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 gap-5'>
						<div className='rounded-lg shadow-lg w-full border-[1px] border-primary overflow-hidden last:border-none'>
							<div className='bg-gray-100 p-5 border-b-[1px] border-gray-400'>
								<h4 className='font-medium text-gray-700'>first api key</h4>
								<h4 className='text-gray-500 font-medium text-sm'>
									24/06/2024
								</h4>
							</div>
							<div className='bg-green-200 border-b-[1px] border-gray-400 p-5 flex items-center justify-between text-accent'>
								<label>Deliverable</label>
								<span>0</span>
							</div>
							<div className='bg-red-200 border-b-[1px] border-gray-400 p-5 flex items-center justify-between text-accent'>
								<label>Undeliverable</label>
								<span>0</span>
							</div>
							<div className='bg-slate-200 p-5 flex items-center justify-between text-accent'>
								<label>Undeliverable</label>
								<span>0</span>
							</div>
						</div>
						<div className='rounded-lg shadow-lg w-full border-[1px] border-primary overflow-hidden'>
							<div className='bg-gray-100 p-5 border-b-[1px] border-gray-400'>
								<h4 className='font-medium text-gray-700'>first api key</h4>
								<h4 className='text-gray-500 font-medium text-sm'>
									24/06/2024
								</h4>
							</div>
							<div className='bg-green-200 border-b-[1px] border-gray-400 p-5 flex items-center justify-between text-accent'>
								<label>Deliverable</label>
								<span>0</span>
							</div>
							<div className='bg-red-200 border-b-[1px] border-gray-400 p-5 flex items-center justify-between text-accent'>
								<label>Undeliverable</label>
								<span>0</span>
							</div>
							<div className='bg-slate-200 p-5 flex items-center justify-between text-accent'>
								<label>Undeliverable</label>
								<span>0</span>
							</div>
						</div>
						<div className='rounded-lg shadow-lg w-full border-[1px] border-primary overflow-hidden'>
							<div className='bg-gray-100 p-5 border-b-[1px] border-gray-400'>
								<h4 className='font-medium text-gray-700'>first api key</h4>
								<h4 className='text-gray-500 font-medium text-sm'>
									24/06/2024
								</h4>
							</div>
							<div className='bg-green-200 border-b-[1px] border-gray-400 p-5 flex items-center justify-between text-accent'>
								<label>Deliverable</label>
								<span>0</span>
							</div>
							<div className='bg-red-200 border-b-[1px] border-gray-400 p-5 flex items-center justify-between text-accent'>
								<label>Undeliverable</label>
								<span>0</span>
							</div>
							<div className='bg-slate-200 p-5 flex items-center justify-between text-accent'>
								<label>Undeliverable</label>
								<span>0</span>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			{/* api section end */}

			{/* <div className='border-[1px] rounded-lg overflow-hidden border-primary p-10'>
				<h4 className='font-medium text-gray-700 mb-5'>API Keys</h4>

				<Input
					variant='filled'
					isReadOnly={true}
					border={"1px"}
					borderColor={"blue"}
					colorScheme='blue'
					defaultValue={"akshdfawiejofasjdo"}
				/>
			</div>

			<div className='space-y-3'>
				<h4 className='font-medium text-gray-700 mb-5 text-lg'>
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
			</div> */}

			<br />
			<br />
			<br />

			<div>
				<h3 className='text-xl font-bold mb-5'>Account Settings</h3>

				<div className='flex items-center justify-between'>
					<button className='bg-gray-200 py-2 w-full text-center border-r-[1px] border-gray-400'>
						GENERAL
					</button>
					<button className='bg-gray-200 py-2 w-full text-center border-r-[1px] border-gray-400'>
						SECURITY
					</button>
					<button className='bg-gray-200 py-2 w-full text-center'>
						PAYMENT HISTORY
					</button>
				</div>

				{/* general start */}
				{/* <div className='p-10 bg-gray-100 grid grid-cols-2 gap-10'>
					<div className='space-y-5'>
						<div className='space-y-1'>
							<label htmlFor='email' className='ml-1'>
								Email
							</label>
							<Input
								id='email'
								borderColor={"gray.400"}
								defaultValue={"earnmoneryforufuture18@gmail.com"}
								readOnly
							/>
						</div>
						<div className='space-y-1'>
							<label htmlFor='name' className='ml-1'>
								Name
							</label>
							<Input borderColor={"gray.400"} placeholder='Name' />
						</div>
						<div className='space-y-1'>
							<label htmlFor='phone' className='ml-1'>
								Mobile phone
							</label>
							<Input borderColor={"gray.400"} placeholder='Mobile number' />
						</div>
						<div className='space-y-1'>
							<label htmlFor='city' className='ml-1'>
								City
							</label>
							<Input borderColor={"gray.400"} placeholder='City' />
						</div>
					</div>
					<div className='space-y-5'>
						<div className='space-y-1'>
							<label htmlFor='country' className='ml-1'>
								Country
							</label>
							<Input borderColor={"gray.400"} placeholder='Country' />
						</div>
						<div className='space-y-1'>
							<label htmlFor='address' className='ml-1'>
								Address
							</label>
							<Input borderColor={"gray.400"} placeholder='Address' />
						</div>
						<div className='space-y-1'>
							<label htmlFor='zipCode' className='ml-1'>
								Zip code
							</label>
							<Input borderColor={"gray.400"} placeholder='Zip code' />
						</div>
					</div>
					<Button colorScheme='blue' className='w-[200px]'>
						Save
					</Button>
				</div> */}
				{/* general end */}

				{/* security start */}
				{/* <div className='p-10 bg-gray-100 grid grid-cols-2 gap-10 items-center'>
					<div className='space-y-5'>
						<div className='space-y-1'>
							<label htmlFor='nPassword' className='ml-1'>
								New Password
							</label>
							<Input
								id='nPassword'
								borderColor={"gray.400"}
								placeholder='New password'
							/>
						</div>
						<div className='space-y-1'>
							<label htmlFor='cPassword' className='ml-1'>
								Confirm Password
							</label>
							<Input
								id='cPassword'
								borderColor={"gray.400"}
								placeholder='Confirm password'
							/>
						</div>
					</div>
					<div className='flex w-full text-gray-600'>
						<div className='w-[30%]'>
							<h4>Last Login was</h4>
							<h4>Registered</h4>
						</div>
						<div className='w-[70%]'>
							<h4>6/24/24, 6:48 AM</h4>
							<h4>from IP address 58.145.190.205</h4>
						</div>
					</div>
					<Button colorScheme='blue' className='w-[200px]'>
						Save
					</Button>
				</div> */}
				{/* security end */}

				{/* payment history start */}
				<div className='p-5 '>
					<Box p={4}>
						<Table variant='simple'>
							<Thead>
								<Tr>
									<Th>PACKAGE</Th>
									<Th>ORDER ID</Th>
									<Th>PRICE</Th>
									<Th>STATUS</Th>
									<Th>CREATED</Th>
									<Th>INVOICE</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Td>Monthly</Td>
									<Td>5s45f4as</Td>
									<Td>$900</Td>
									<Td>success</Td>
									<Td>21/01/2024</Td>
									<Td>
										<Button colorScheme='blue' size={"sm"}>
											Download
										</Button>
									</Td>
								</Tr>
							</Tbody>
						</Table>
					</Box>
				</div>
				{/* payment history end */}
			</div>

			<br />
		</div>
	);
};

export default MakerAdminDashboard;
