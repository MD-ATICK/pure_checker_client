import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Plans from "../components/client/Plans";
import UseHelmet from "../utils/UseHelmet";

const Pricing = () => {
	return (
		<section className='container mx-auto'>
			<UseHelmet title={'Buy plan in your own choice.'} param={'pricing'} description={'You are always available to provide extra service to our customers. so for that we enhance this pricing.'} />
			<img src='./favicon.png' alt='' className='h-20 mx-auto mb-2' />
			<h1 className='text-2xl font-bold text-center'>Go Premium!</h1>
			<ul className='flex flex-wrap items-center justify-center gap-1 md:gap-5 my-3 md:my-5'>
				<li className='flex items-center gap-2'>
					<FaCheckCircle /> Volume discount
				</li>
				<li className='flex items-center gap-2'>
					<FaCheckCircle /> Prioritized job
				</li>
				<li className='flex items-center gap-2'>
					<FaCheckCircle /> Personalized Support
				</li>
				<li className='flex items-center gap-2'>
					<FaCheckCircle /> All Features included
				</li>
			</ul>
			<p className='mx-auto w-full md:w-1/2 text-center'>
				Whether your need is one-time or daily, we have the right plan for you.
				Get started now and send your next campaign with confidence!
			</p>

			<Plans />
		</section>
	);
};

export default Pricing;
