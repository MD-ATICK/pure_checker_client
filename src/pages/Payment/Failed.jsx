import { Button } from "@chakra-ui/react";
import React from "react";
import { FaTimesCircle } from "react-icons/fa"; // Using a different icon for failure
import { Link } from "react-router-dom";

const Failed = () => {
	return (
		<div className='flex flex-col justify-center items-center container mx-auto h-screen space-y-4'>
			<FaTimesCircle size={60} className='fill-red-600' /> {/* Failure icon */}
			<h1 className='text-3xl font-bold text-red-500'>Payment Failed!</h1>
			<h3 className='text-3xl font-bold text-slate-700'>
				Your payment could not be processed.
			</h3>
			<h6>Please try again or contact support.</h6>
			<Button colorScheme='red' size={"sm"}>
				<Link to='/'>Back to Home</Link>
			</Button>
		</div>
	);
};

export default Failed;
