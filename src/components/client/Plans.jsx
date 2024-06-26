import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { greenToast, redToast, userApi } from "../../api/Api";
import { useUserContext } from "../../context/Context";

const Plans = () => {


	const navigate = useNavigate()
	const { user, setUser, token } = useUserContext()
	const [loadOn, setLoadOn] = useState('');

	const buyPLan = async ({ planType, price, credit, currency, dayLimit }) => {
		try {
			setLoadOn(planType)
			if (!token) return alert('token not found')
			const { status, data } = await userApi.post('/buy-plan', { planType, price, credit, currency, dayLimit }, { headers: { Authorization: `Bearer ${token}` } })
			if (status === 201) {
				console.log(data)
				setUser(data.user)
				greenToast(data?.msg)
			} else {
				redToast(data?.err)
			}
			setLoadOn('')
		} catch (error) {
			alert(error.message)
		}
	}

	return (
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
					<AbsoluteCenter bg='white' px='4' fontSize={"sm"} fontWeight={"bold"}>
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
						{
							user ?
								<button onClick={() => buyPLan({ planType: 'payAsGo', price: 2, credit: 500, currency: "USD", dayLimit: 365 })} className='bg-primary text-white rounded py-2 px-7'>
									{loadOn === 'payAsGo' ? 'loading...' : 'Buy Plan'}
								</button>
								:
								<button onClick={() => navigate('/login')} className='bg-primary text-white rounded py-2 px-7'>
									Sign Up
								</button>
						}
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

							<p className='mb-2 text-sm md:text-base'>50,000 credits / day</p>
							{

							}
							{
								user ?
									<button onClick={() => buyPLan({ planType: 'subscription', price: 20, credit: 20000, currency: "USD", dayLimit: 30 })} disabled={user?.subscription ? true : false} className={`${user?.subscription && ' opacity-40 cursor-not-allowed'} bg-primary text-white rounded py-2 px-7`}>
										{loadOn === 'subscription' ? 'loading...' : user?.subscription ? 'running' : 'Buy Plan'}
									</button>
									:
									<button onClick={() => navigate('/login')} className='bg-primary text-white rounded py-2 px-7'>
										Sign Up
									</button>
							}
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
	);
};

export default Plans;
