import React from "react";
import { Link } from "react-router-dom";
import UseHelmet from "../utils/UseHelmet";

const Error = () => {
	return (
		<div className='container mx-auto'>
			<UseHelmet param={'404'} title={'404 Not Found | Pure Checker'} description={'Oops! The page you are looking for could not be found on Pure Checker. Return to our homepage or explore our services.'} />
			<div className='px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16'>
				<div className='xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0'>
					<div className='relative'>
						<div className='absolute'>
							<div className=''>
								<h1 className='my-2 text-gray-800 font-bold text-2xl'>
									Looks like you have found the doorway to the great nothing
								</h1>
								<p className='my-3 text-gray-800'>
									Sorry about that! Please visit our hompage to get where you
									need to go.
								</p>
								<Link
									to={"/"}
									className='sm:w-full lg:w-auto my-2 border rounded md py-3 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 inline-block'
								>
									GO BACK TO HOME!
								</Link>
							</div>
						</div>
						<div>
							<img src='https://i.ibb.co/G9DC8S0/404-2.png' />
						</div>
					</div>
				</div>
				<div>
					<img src='https://i.ibb.co/ck1SGFJ/Group.png' />
				</div>
			</div>
		</div>
	);
};

export default Error;
