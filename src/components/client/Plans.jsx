import { AbsoluteCenter, Box, Button, Divider, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { greenToast, redToast, userApi } from "../../api/Api";
import { useUserContext } from "../../context/Context";
import { IoMdArrowDown } from 'react-icons/io';
import { SiBinance } from 'react-icons/si'
import moment from 'moment'

const Plans = () => {


	const navigate = useNavigate()
	const { token } = useUserContext()
	// const [loadOn, setLoadOn] = useState('');
	const [volumes, setVolumes] = useState([]);
	const [activePayVolume, setActivePayVolume] = useState('');
	const [activeSubsVolume, setActiveSubsVolume] = useState('');


	const getAllVolumes = async () => {
		try {
			const { status, data } = await userApi.get('/get-volume', { withCredentials: true });
			if (status === 201) {
				setVolumes(data.volumes);
				const payVol = data?.volumes.filter(vol => vol?.planType === 'payAsGo')
				const subsVol = data?.volumes.filter(vol => vol?.planType === 'subscription')
				setActivePayVolume(payVol[0])
				setActiveSubsVolume(subsVol[0])
			} else {
				console.error('Failed to fetch volumes')
			}
		} catch (error) {
			console.error(error);
		}
	}

	const formatNumber = num => {
		if (num >= 1000000) {
			return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
		} else if (num >= 1000) {
			return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
		}
		return num;
	};

	const buyPlan = async (planType) => {
		try {
			if (!token) return alert('token not found')
			planType === 'subscription' ? (activeSubsVolume === '' && alert('select one subscription')) : (activePayVolume === '' && alert('select one subscription'))
			const { status, data } = await userApi.post('/buy-plan', planType === 'subscription' ? { planType, ...activeSubsVolume } : { planType, ...activePayVolume }, { headers: { Authorization: `Bearer ${token}` } })
			if (status === 201) {
				greenToast(data?.msg)
				navigate('/user/settings', { state: { status: 'payment' } })
			} else {
				redToast(data?.err)
			}
		} catch (error) {
			alert(error.message)
		}
	}

	const HandleBinancePay = async () => {
		try {
			const orderDetails = {
				symbol: "BTCUSDT",
				quantity: 1,
				price: 40000,
			};
			const { data, status } = await userApi.post('/binance-order', orderDetails)
			if (status === 201) {
				return;
			}

		} catch (error) {
			console.log(error.message)
		}
	}


	useEffect(() => {
		getAllVolumes()
	}, []);

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 md:mx-20 mt-10'>

			<div className='bg-white shadow-md border-[1px] border-primary rounded-lg p-6 flex flex-col justify-between'>
				<div>
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
						How many emails do you want to verify daily?
					</p>
					<p className='text-center mb-4 text-sm bg-primary text-secondary py-2'>
						Select your email verification volume
					</p>
				</div>
				<div className='grid grid-cols-4 gap-2 mb-4'>
					{
						volumes?.map(volume => {
							if (volume?.planType === 'payAsGo') {
								return <button
									key={volume._id}
									className={`border ${activePayVolume._id === volume._id && ' bg-primary text-white '} rounded py-2`}
									onClick={() => setActivePayVolume(volume)}
								>
									{formatNumber(volume.totalCredits)}
								</button>
							}
						})
					}
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
							placeholder='enter volume ...'
							onChange={(e) => {
								setActivePayVolume({
									perDay: '',
									planType: "payAsGo",
									price: Math.floor(e.target.value / 80),
									totalCredits: e.target.value,
									createdAt: moment().toISOString()
								})
							}}
							className='border rounded py-2 px-4 mt-2 text-sm focus:border-primary focus:outline-none'
						/>
					</div>
					<div className='bg-blue-100 grid grid-cols-2 gap-5 py-5 text-center mt-3 border-t-2 border-primary rounded-br-lg rounded-bl-lg'>
						<div>
							<p className='text-xl md:text-2xl font-semibold mb-2'>
								${activePayVolume?.price || '-'} <span className='text-sm font-normal'>/ month</span>
							</p>
							<span className='h-[1px] flex bg-primary mx-auto mb-2 w-2/3'></span>
							<p className='mb-2 text-sm md:text-base'>
								{formatNumber(activePayVolume?.totalCredits) || '-'} credits
							</p>

							<Menu>
								<MenuButton
									className={activeSubsVolume ? ' opacity-100' : 'opacity-50'}
									backgroundColor={'#0700EC'}
									color={"white"}
									as={Button}
									_hover={'blue'}
									rightIcon={<IoMdArrowDown />}
									isDisabled={activePayVolume ? false : true}
								>
									Buy Now
								</MenuButton>
								<MenuList>
									<MenuItem onClick={HandleBinancePay} alignItems={"center"} gap={"5px"}>
										<SiBinance color={"orange"} size={18} />
										Binance Pay
									</MenuItem>
									<MenuItem onClick={() => buyPlan('payAsGo')} alignItems={"center"} gap={"5px"}>
										<img
											src='https://sslcommerz.com/wp-content/uploads/2020/03/favicon.png'
											alt=''
											className='w-5'
										/>
										SSLCOMMERZ Pay
									</MenuItem>
								</MenuList>
							</Menu>

						</div>
						<ul className='text-left list-disc mb-4 text-sm space-y-1'>
							<li>high cost</li>
							<li>Credit resets daily</li>
							<li>Multiple subscriptions available</li>
							<li>Best for daily needs</li>
						</ul>
					</div>
				</div>
			</div>

			{/* <!-- Daily Section --> */}
			<div className='bg-white shadow-md border-[1px] border-primary rounded-lg p-6 flex flex-col justify-between'>
				<div>
					<h2 className='text-2xl font-bold text-center mb-2 text-primary'>
						Daily
					</h2>
					<p className='text-center text-orange-500 font-semibold mb-4'>
						(Monthly)
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
					{
						volumes?.map(volume => {
							if (volume?.planType === 'subscription') {
								return <button
									key={volume._id}
									className={`border ${activeSubsVolume._id === volume._id && ' bg-primary text-white '} rounded py-2`}
									onClick={() => setActiveSubsVolume(volume)}
								>
									{formatNumber(volume.totalCredits)}
								</button>
							}
						})
					}
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
							placeholder='enter volume...'
							onChange={(e) => {
								setActiveSubsVolume({
									perDay: e.target.value,
									planType: "subscription",
									price: Math.floor((e.target.value * 30) / 85),
									totalCredits: (e.target.value * 30),
									createdAt: moment().toISOString()
								})
							}}
							className='border rounded py-2 px-4 mt-2 text-sm focus:border-primary focus:outline-none'
						/>
					</div>
					<div className='bg-blue-100 grid grid-cols-2 gap-5 py-5 text-center mt-3 border-t-2 border-primary rounded-br-lg rounded-bl-lg'>
						<div>
							<p className='text-xl md:text-2xl font-semibold mb-2'>
								${activeSubsVolume?.price || '-'} <span className='text-sm font-normal'>/ month</span>
							</p>
							<span className='h-[1px] flex bg-primary mx-auto mb-2 w-2/3'></span>
							<p className='mb-2 text-sm md:text-base'>
								{formatNumber(activeSubsVolume?.totalCredits) || '-'} total credits
							</p>
							<p className='mb-2 text-sm md:text-base'>
								{Math.floor(activeSubsVolume?.totalCredits / 30) || '-'} credits / day
							</p>
							{/* <PlanEditModal planType={'subscription'} name='Edit Daily' volumes={volumes} setVolumes={setVolumes} /> */}
							{/* <button onClick={() => buyPlan('subscription')} disabled={activeSubsVolume ? false : true} className={`${!activeSubsVolume && ' opacity-50 cursor-not-allowed'} bg-primary text-white px-8 my-2 mr-5 rounded-md py-2`}>Buy Now</button> */}

							<Menu>
								<MenuButton
									disabled={activeSubsVolume ? false : true}
									className={activeSubsVolume ? ' opacity-100' : 'opacity-50'}
									backgroundColor={'#0700EC'}
									color={"white"}
									as={Button}
									_hover={'blue'}
									rightIcon={<IoMdArrowDown />}
									isDisabled={activePayVolume ? false : true}
								>
									Buy Now
								</MenuButton>
								<MenuList>
									<MenuItem onClick={HandleBinancePay} alignItems={"center"} gap={"5px"}>
										<SiBinance color={"orange"} size={18} />
										Binance Pay
									</MenuItem>
									<MenuItem onClick={() => buyPlan('subscription')} alignItems={"center"} gap={"5px"}>
										<img
											src='https://sslcommerz.com/wp-content/uploads/2020/03/favicon.png'
											alt=''
											className='w-5'
										/>
										SSLCOMMERZ Pay
									</MenuItem>
								</MenuList>
							</Menu>
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
