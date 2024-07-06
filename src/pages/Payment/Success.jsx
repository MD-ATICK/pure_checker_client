import { Button } from "@chakra-ui/react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Success = () => {
	return (
		<div className='flex flex-col justify-center items-center container mx-auto h-screen space-y-4'>
			<FaCheckCircle size={60} className='fill-green-600' />
			<h1 className='text-3xl font-bold text-green-500'>Payment Success!</h1>
			<h3 className='text-3xl font-bold text-slate-700'>
				Your request has been processed successfully
			</h3>
			<h6>You&apos;ll receive a confirmation email shortly.</h6>
			<Button colorScheme='green' size={"sm"}>
				<Link to='/'>Back to Home</Link>
			</Button>
		</div>
	);
};

export default Success;
