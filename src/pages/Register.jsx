import React, { useState } from "react";
import { useUserContext } from "../context/Context";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Register() {
	const [regisData, setRegisData] = useState({
		name: "user",
		email: "user@gmail.com",
		password: "user",
	});
	const { register } = useUserContext();
	const navigate = useNavigate();

	const RegisterSub = e => {
		e.preventDefault();
		const data = register(regisData);
		if (data === "navigate") return navigate("/");
	};

	return (
		<>
			{/* <div className=' w-full h-screen grid place-content-center'>
            <form className='p-10 flex rounded-xl bg-gray-200 flex-col gap-y-2 items-start' onSubmit={RegisterSub}>
                <input type="text" required={true} value={regisData.name} onChange={(e) => setRegisData({ ...regisData, name: e.target.value })} placeholder='name' className=' font-[500] py-3 px-8 border-2 border-black rounded-lg' />
                <input type="email" required={true} value={regisData.email} onChange={(e) => setRegisData({ ...regisData, email: e.target.value })} placeholder='email' className=' font-[500] py-3 px-8 border-2 border-black rounded-lg' />
                <input type="text" required={true} value={regisData.password} onChange={(e) => setRegisData({ ...regisData, password: e.target.value })} placeholder='password' className=' font-[500] py-3 px-8 border-2 border-black rounded-lg' />
                <button className=' bg-blue-700 rounded-lg py-3 w-full text-center mt-5 font-semibold text-white'>Register</button>
                <br />
                <Link to={'/login'} className=' underline'>already have an account?</Link>

            </form>
        </div> */}

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
									onChange={e =>
										setRegisData({ ...regisData, password: e.target.value })
									}
									className='block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>

						<div>
							<button
								type='submit'
								className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							>
								Register
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
							to='/login'
							className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
						>
							start your 14 days free trail
						</Link>
					</p>
				</div>
			</div>
		</>
	);
}

export default Register;
