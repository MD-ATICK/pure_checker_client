import React from "react";
import { checkerApi } from "../../api/Api";
import { Link } from "react-router-dom";

function Footer() {
	const apiBulkCheck = async () => {
		const { status, data } = await checkerApi.post(
			"/check/bulk?key=6672836ec7e53bd1b34ea5e0",
			["atick@gmail.com", "hasib@yahoo.com"],
		);

		console.table(data);
	};

	return (
		<footer className='bg-primary py-20 text-secondary'>
			<div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 px-5'>
				<div className="col-span-2">
					<img src='./3.jpg' alt='' className='w-60' />
					<h3 className='py-5 text-2xl font-bold'>contact@purechecker.com</h3>
					<p>
						Get rid of spam traps, hard bounces, disposable or catch-all emails.
						Clean your email lists now!
					</p>
				</div>
				<div>
					<h3 className='text-3xl font-bold pb-5'>Service</h3>
					<ul className='space-y-1 tracking-wide'>
						<li>
							<Link to={"/user/checker"}>Single Verification</Link>
						</li>
						<li>
							<Link to={"/user/checker"}>Bulk Verification</Link>
						</li>
						<li>
							<Link to={"/user/api"}>Email Verification API</Link>
						</li>
						<li>
							<Link to={"/pricing"}>Pricing</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className='text-3xl font-bold pb-5'>Recourse</h3>
					<ul className='space-y-1 tracking-wide'>
						<li>
							<Link to={"/blogs"}>Blogs</Link>
						</li>
						<li>
							<Link to={"/faqs"}>FAQs</Link>
						</li>
						<li>
							<Link to={"/api-docs"}>API Docs</Link>
						</li>
						<li>
							<Link to={"/about-us"}>About Us</Link>
						</li>
						<li>
							<Link to={"/contact-us"}>Contact Us</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className='text-3xl font-bold pb-5'>Legal</h3>
					<ul className='space-y-1 tracking-wide'>
						<li>
							<Link to={"/privacy-policy"}>Privacy Policy</Link>
						</li>
						<li>
							<Link to={"/terms"}>Terms of Use</Link>
						</li>
						<li>
							<Link to={"/cookie"}>Cookie Policy</Link>
						</li>
						<li>
							<Link to={"/refund-policy"}>Refund Policy</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
