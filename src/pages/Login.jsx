import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/Context";
import { FcGoogle } from "react-icons/fc";

function Login() {
	const [loginData, setLoginData] = useState({
		email: "user@gmail.com",
		password: "user",
	});
	const { login } = useUserContext();
	const navigate = useNavigate();

	const LoginSub = e => {
		e.preventDefault();
		const data = login(loginData);
		if (data === "navigate") return navigate("/");
	};

	return (
		<>


			{/* separate */}
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
									<a
										href='#'
										className='font-semibold text-indigo-600 hover:text-indigo-500'
									>
										Forgot password?
									</a>
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

						<div>
							<button
								type='submit'
								className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							>
								Sign in
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

					<button className='flex items-center gap-3 font-medium justify-center mt-5 py-2 border-[2px] rounded border-gray-300 w-full'>
						<FcGoogle size={26} /> Google
					</button>

					<p className='mt-10 text-center text-sm text-gray-500'>
						Not a member?{" "}
						<Link
							to='/register'
							className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
						>
							have not any account?
						</Link>
					</p>
				</div>
			</div>
		</>
	);
}

export default Login;
