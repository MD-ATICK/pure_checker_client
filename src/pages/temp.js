<div className=' w-full bg-gray-200 h-[88vh] py-8  flex justify-center items-center '>
	<div className=' flex justify-between items-center py-14  h-full w-full max-w-screen-xl bg-white rounded-xl'>
		<div
			id='one'
			className=' hidden w-full pl-12  pr-6 border-r-2 xl:grid place-content-center gap-y-5 flex-[0.32] h-full border-gray-200'
		>
			<h1 className=' font-bold text-[33px] bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700 leading-[47px]'>
				Verify with Confidence, Verify with Purechecker
			</h1>
			<p className=' font-[500] text-[15px] text-gray-600 leading-7'>
				Discover the power of Ychecker and streamline your email verification
				process. Our advanced tool enables quick and efficient verification,
				ensuring accurate data. Don't waste time on invalid emails. Start
				verifying with Ychecker today and experience the convenience and
				accuracy of our solution.
			</p>
			<Link
				to={"/bulk-checker"}
				className=' w-[85%] mt-4 text-center py-3 rounded-lg bg-gradient-to-r text-white font-semibold from-blue-600 to-blue-700'
			>
				Start Checking Email in Bulk
			</Link>
		</div>
		<div
			id='two'
			className='flex  justify-between px-5 w-full flex-[1] xl:flex-[0.66]  h-full border-black'
		>
			<div id='one' className=' w-full flex flex-col gap-y-4   flex-[0.60]'>
				<h1 className=' font-bold text-[34px] bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700 leading-[50px]'>
					Single Check Mail
				</h1>
				<form
					action=''
					onSubmit={HandleSubmit}
					className=' h-[50px] flex items-center'
				>
					<input
						type='text'
						value={email}
						onChange={e => setEmail(e.target.value)}
						className='  border-r-0 w-full font-semibold rounded-l-lg border-2 h-full border-gray-300 outline-none px-6 focus:border-blue-700'
					/>
					<button
						type='submit'
						disabled={loading ? true : false}
						className=' h-full flex justify-center items-center text-white aspect-square border-2-blue rounded-r-lg bg-blue-700'
					>
						{" "}
						{loading ? (
							<ColorRing
								visible={true}
								height='80'
								width='80'
								ariaLabel='color-ring-loading'
								wrapperStyle={{}}
								wrapperClass='color-ring-wrapper'
								colors={["#ffff", "#ffff", "#ffff", "#ffff", "#ffff", "#ffff"]}
							/>
						) : (
							<MdDone className='text-3xl' />
						)}{" "}
					</button>
				</form>
				{data ? (
					<div className='mt-3 flex flex-col gap-y-3'>
						<div className='flex items-center gap-x-3'>
							<p className=' font-semibold'>Email : </p>
							<p className={`font-semibold`}> {data.email} </p>
						</div>
						<div className='flex items-center gap-x-3'>
							<p className=' font-semibold'>Exist : </p>
							<p
								className={`${
									data.validators.smtp.valid === true
										? " text-green-700"
										: "text-red-600"
								} font-semibold`}
							>
								{" "}
								{data.validators.smtp.valid ? "true" : "false"}{" "}
							</p>
						</div>
						<div className='flex items-center gap-x-3'>
							<p className=' font-semibold'>Format Check : </p>
							<p
								className={`${
									data.validators.regex.valid === true
										? " text-green-700"
										: "text-red-600"
								} font-semibold`}
							>
								{" "}
								{data.validators.regex.valid ? "true" : "false"}{" "}
							</p>
						</div>
						<div className='flex items-center gap-x-3'>
							<p className=' font-semibold'>Disposable : </p>
							<p
								className={`${
									data.validators.disposable.valid === true
										? " text-green-700"
										: "text-red-600"
								} font-semibold`}
							>
								{" "}
								{data.validators.disposable.valid ? "true" : "false"}{" "}
							</p>
						</div>
						<div className='flex items-center gap-x-3'>
							<p className=' font-semibold'>Typo : </p>
							<p
								className={`${
									data.validators.typo.valid === true
										? " text-green-700"
										: "text-red-600"
								} font-semibold`}
							>
								{" "}
								{data.validators.typo.valid ? "true" : "false"}{" "}
							</p>
						</div>
					</div>
				) : (
					data && (
						<p className=' text-red-600 font-semibold'>
							{" "}
							your entered email is incorrect format.{" "}
						</p>
					)
				)}
			</div>
			<div
				id='two'
				className=' w-full gap-y-3 flex-col flex flex-[0.35] h-full p-5 px-6 rounded-xl bg-gray-100 border border-gray-300'
			>
				<h1 className=' font-bold text-[32px] bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700 leading-[50px]'>
					Feature
				</h1>
				<p className=' font-[500] text-gray-600 leading-6 text-[15px]'>
					Below are the features of Your Ultimate Email Verification Tool here!
				</p>
				<div className='flex flex-col gap-y-3 mt-2'>
					<div className='flex justify-between gap-x-2'>
						<MdDoneAll className=' text-[22px] flex-[0.1] h-6 w-full text-blue-800' />
						<p className=' font-[500] text-gray-600 flex-[0.9] leading-5 text-[14px]'>
							Verify Email Address
						</p>
					</div>
					<div className='flex justify-between gap-x-2'>
						<MdDoneAll className=' text-[22px] flex-[0.1] h-6 w-full text-blue-800' />
						<p className=' font-[500] text-gray-600 flex-[0.9] leading-5 text-[14px]'>
							Check gmail verify phone or disable
						</p>
					</div>
					<div className='flex justify-between gap-x-2'>
						<MdDoneAll className=' text-[22px] flex-[0.1] h-6 w-full text-blue-800' />
						<p className=' font-[500] text-gray-600 flex-[0.9] leading-5 text-[14px]'>
							Check Outlook verify, disable
						</p>
					</div>
					<div className='flex justify-between gap-x-2'>
						<MdDoneAll className=' text-[22px] flex-[0.1] h-6 w-full text-blue-800' />
						<p className=' font-[500] text-gray-600 flex-[0.9] leading-5 text-[14px]'>
							Check Outlook & Gmail availability
						</p>
					</div>
					<div className='flex justify-between gap-x-2'>
						<MdDoneAll className=' text-[22px] flex-[0.1] h-6 w-full text-blue-800' />
						<p className=' font-[500] text-gray-600 flex-[0.9] leading-5 text-[14px]'>
							Detect disposable emails
						</p>
					</div>
					<div className='flex justify-between gap-x-2'>
						<MdDoneAll className=' text-[22px] flex-[0.1] h-6 w-full text-blue-800' />
						<p className=' font-[500] text-gray-600 flex-[0.9] leading-5 text-[14px]'>
							Bulk check & API
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>;

// home end





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


// pricing end