import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoMdInformationCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { useUserContext } from "../context/Context";
import UseHelmet from "../utils/UseHelmet";

function Register() {
	const [regisData, setRegisData] = useState({
		name: "",
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const { register, handleGoogleAuthLogin, mailSentTab, setMailSentTab, registerLoading } = useUserContext();

	const [errors, setErrors] = useState([]);

	const validatePassword = (password) => {
		const errors = [];
		const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
		const numberRegex = /[0-9]/;
		const uppercaseRegex = /[A-Z]/;
		const lowercaseRegex = /[a-z]/;

		if (password.length < 8) {
			errors.push('Password must be at least 8 characters long.');
		}
		if (!specialCharacterRegex.test(password)) {
			errors.push('Password must contain at least one(@#$) special character.');
		}
		if (!numberRegex.test(password)) {
			errors.push('Password must contain at least one number.');
		}
		if (!uppercaseRegex.test(password)) {
			errors.push('Password must contain at least one uppercase letter.');
		}
		if (!lowercaseRegex.test(password)) {
			errors.push('Password must contain at least one lowercase letter.');
		}

		setErrors(errors);
	};

	console.log(errors)

	const RegisterSub = e => {
		e.preventDefault();
		if (errors.length === 0) {
			register(regisData);
		}
	};

	const handleGoogleLogin = async () => {
		const data = await handleGoogleAuthLogin()
		data === 'home' ? navigate('/') : data === 'login' && navigate('/login')
	}

	return (
		<>
		<UseHelmet param={'register'} title={'Register for Pure Checker | Email Validation Services'} description={' Sign up for Pure Checker to start using our email validation, existence check, and disposable email detection services. Create your account securely.'} />
			{
				mailSentTab ?
					<div className=" text-center py-10">
						<h1 className=" font-bold text-3xl py-3">Your mail send successful ✅</h1>
						<p className=" text-gray-600">please check your <span className=" text-black font-semibold text-lg">{regisData?.email}</span> email for verify your account</p>
						<br /> <br />
						<button onClick={() => setMailSentTab(false)} className="  text-primary hover:underline rounded-lg py-2 text-sm font-medium hover:scale-105 duration-300 px-6" >back to register</button>
					</div>
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
								Register to your account
							</h2>
						</div>

						<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
							<form className='space-y-3' onSubmit={RegisterSub}>
								<div>
									<label
										htmlFor='name'
										className='block text-sm font-medium leading-6 text-gray-900'
									>
										Name
									</label>
									<div className='mt-2'>
										<input
											id='name'
											name='name'
											type='text'
											autoComplete='name'
											required
											value={regisData.name}
											onChange={e =>
												setRegisData({ ...regisData, name: e.target.value })
											}
											className='block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>
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
											value={regisData.email}
											onChange={e =>
												setRegisData({ ...regisData, email: e.target.value })
											}
											className='block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
										{/* <div className='text-sm'>
									<a
										href='#'
										className='font-semibold text-indigo-600 hover:text-indigo-500'
									>
										Forgot password?
									</a>
								</div> */}
									</div>
									<div className='mt-2'>
										<input
											id='password'
											name='password'
											type='password'
											autoComplete='current-password'
											required
											value={regisData.password}
											onChange={e => {
												setRegisData({ ...regisData, password: e.target.value });
												validatePassword(e.target.value);
											}

											}
											className='block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>
								<div className="flex flex-col gap-y-1">
									{
										errors?.length > 0 && errors.map(err => {
											return <p key={err} className='text-red-500 text-sm flex items-start gap-2 '> <IoMdInformationCircle className=" text-lg" />  {err}</p>
										})
									}
								</div>
								<div>
									<button
										type='submit'
										className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
									>
										{
											registerLoading ?
												<PulseLoader size={12} className="my-1" color="white" />
												: <p>Register</p>
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
								<FcGoogle size={26} /> Google
							</button>

							<p className='mt-10 text-center text-sm text-gray-500'>
								Already have an account?{" "}
								<Link
									to='/login'
									className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
								>
									Login
								</Link>
							</p>
						</div>
					</div>
			}
		</>
	);
}

export default Register;
