import React from "react";

const Maintenance = () => {
	return (
		<div className='container mx-auto h-screen space-y-4 flex flex-col justify-center items-center'>
			{/* <img src="./maintenance-2.jpg" alt="" className="h-[75%]" /> */}
			<img src='./3.jpg' alt='' className="w-[200px] mb-10" />
			<h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">We are presently undergoing maintenance</h1>

			<p className="w-[50%] text-center flex justify-center">
				we&apos;ll be back up and runing again shortly please check out our
				social channels for further update.
			</p>

			<img src='./maintenancenew.jpg' alt='' className="w-[500px] fill-blue-700" />
		</div>
	);
};

export default Maintenance;
