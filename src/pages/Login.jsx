import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { IoMdInformationCircleOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { greenToast, mailSentApi, userApi } from "../api/Api";
import { useUserContext } from "../context/Context";
import ForgetMailEnter from "./ForgetMailEnter";
import UseHelmet from "../utils/UseHelmet";


function Login() {
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});
	const { login, noVerifyMsg, handleGoogleAuthLogin, loginLoading, loginError } = useUserContext();
	const [forgetModal, setForgetModal] = useState(false);
	const [verifyMailLoading, setVerifyMailLoading] = useState(false);
	const [remainingSeconds, setRemainingSeconds] = useState(10);
	const [timeShow, setTimeShow] = useState(false);
	const navigate = useNavigate();

	const LoginSub = async e => {
		e.preventDefault();
		const data = await login(loginData);
		if (data === "fector") {
			navigate(`/two-fector?email=${loginData.email}`)
		} else if (data === 'navigate') {
			navigate("/")
		}
	};




	// --- verify mail sent
	const VerifyMailSent = async () => {
		setVerifyMailLoading(true)
		const { status, data } = await mailSentApi.post('/verify-mail-sent', { email: loginData?.email })
		if (status === 201) {
			setTimeShow(true)
			countdown()
			setVerifyMailLoading(false)
			greenToast(data.msg)
		} else {
			setVerifyMailLoading(false)
			// redToast(data.err)
		}
	}


	const handleGoogleLogin = async () => {
		const data = await handleGoogleAuthLogin()
		data === 'home' ? navigate('/') : data === 'login' && navigate('/login')
	}

	function countdown() {
		let sec = remainingSeconds;

		const intervalId = setInterval(() => {
			sec--
			setRemainingSeconds(prev => prev - 1)
			if (sec === 1) {
				setTimeShow(false)
				setRemainingSeconds(60)
				clearInterval(intervalId);
			}
		}, 1000);
	}


	return (
		<>
		<UseHelmet param={'login'} title={'Login to Pure Checker | Email Validation Services'} description={'Log in to Pure Checker to access our email validation and security services. Secure and easy access to your account.'} />
			{
				forgetModal ?
					<ForgetMailEnter setForgetModal={setForgetModal} />
					:
					<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
						<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
							<Link to={'/'}>
								<img
									className='mx-auto h-10 w-auto'
									src='./3.jpg'
									alt='Your Company'
								/>
							</Link>
							<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
								Sign in to your account
							</h2>
						</div>
						<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
							<form className='space-y-6' action='#' onSubmit={LoginSub} method='POST'>
								<div>
									<label
										htmlFor='email'
										className='block text-sm font-medium leading-6 text-gray-900'
									>
										Email address
									</label>
									<div className='mt-2'>
										<input
											id='email'
											name='email'
											type='email'
											autoComplete='email'
											required
											value={loginData.email}
											onChange={e =>
												setLoginData({ ...loginData, email: e.target.value })
											}
											className='block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div>
									<div className='flex items-center justify-between'>
										<label
											htmlFor='password'
											className='block text-sm font-medium leading-6 text-gray-900'
										>
											Password
										</label>
										<div className='text-sm'>
											<p
												href='#'
												className='font-semibold cursor-pointer duration-300 scale-105 text-indigo-600 hover:text-indigo-500'
												onClick={() => setForgetModal(!forgetModal)}
											>
												Forgot password?
											</p>
										</div>
									</div>
									<div className='mt-2'>
										<input
											id='password'
											name='password'
											type='password'
											autoComplete='current-password'
											required
											value={loginData.password}
											onChange={e =>
												setLoginData({ ...loginData, password: e.target.value })
											}
											className='block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>
								{noVerifyMsg &&
									<div className=" text-orange-500 gap-x-2 flex text-sm">
										{/* <IoMdInformationCircleOutline className=" text-2xl" /> */}
										 <p className=" flex-col items-start flex">
										your account not verified. please verify your account. click <span onClick={VerifyMailSent} className={` rounded-md bg-primary py-1 mt-1 font-medium px-3 text-white cursor-pointer ${(timeShow || verifyMailLoading) && ' opacity-50 pointer-events-none cursor-not-allowed'}`}> {verifyMailLoading ? 'loading...' : timeShow ? `remaining 0:${remainingSeconds}` : 'Sent Verify Mail'} </span></p>  </div>
								}
								{loginError &&
									<p className=" flex items-center gap-x-2 text-sm text-orange-500"> <span>
										{/* <IoMdInformationCircleOutline className=" text-xl" /> */}
										</span> {loginError}</p>
								}
								<div>
									<button
										type='submit'
										className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
									>
										{
											loginLoading ?
												<PulseLoader size={12} className="my-1" color="white" />
												: <p>Login</p>
										}
									</button>
								</div>
							</form>

							<div className='flex items-center gap-3 pt-8'>
								<div className='h-[.5px] w-full bg-gray-300'></div>
								<h5 className='w-full whitespace-nowrap text-sm'>
									Or continue with
								</h5>
								<div className='h-[.5px] w-full bg-gray-300'></div>
							</div>

							<button
								onClick={handleGoogleLogin}
								className='flex items-center gap-3 font-medium justify-center mt-5 py-2 border-[2px] rounded border-gray-300 w-full'>
								{/* <FcGoogle size={26} /> Google */}
							</button>

							<p className='mt-10 text-center text-sm text-gray-500'>
								Not a member?{" "}
								<Link
									to='/register'
									className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
								>
									Register
								</Link>
							</p>
						</div>
					</div >
			}

		</>
	);
}

export default Login;
