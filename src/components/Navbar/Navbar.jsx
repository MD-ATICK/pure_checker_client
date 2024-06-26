import { useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/Context";
import NavValidate from "./NavValidate";


function Navbar() {
	const [open, setOpen] = useState(false);
	const { user } = useUserContext();

	const navLists = [
		{ path: "/", name: "Home" },
		{ path: "/user/checker", name: "Bulk Check" },
		// { path: "/service", name: "Service" },
		{ path: "/pricing", name: "Pricing" },
		// { path: "/blogs", name: "Blogs" },
		{ path: "/contact-us", name: "Contact Us" },
		{ path: "/api-docs", name: "API Docs" },
	];

	return (
		<>


			{/* separate  */}

			<div className='bg-primary px-3 md:px-0'>
				<div className='container mx-auto flex items-center justify-between py-8 relative'>
					<div className='flex items-center gap-10'>
						<img src='./10.png' alt='' className='h-12 bg-white p-2' />
						<ul className='hidden md:flex items-center gap-5 text-secondary font-[500]'>
							{navLists &&
								navLists?.map((nav) => {
									if (nav?.name === navLists[1].name || nav?.name === navLists[6]?.name) {
										if (user && (user.subscription === true || user.payAsGo === true)) {
											return (
												<li key={nav.path}>
													<Link to={nav.path}>{nav.name}</Link>
												</li>
											);
										}
									} else {
										return <li key={nav.path}>
											<Link to={nav.path}>{nav.name}</Link>
										</li>
									}
								})}
						</ul>
					</div>
					<NavValidate open={open} setOpen={setOpen} navLists={navLists} />

				</div>
			</div>
		</>
	);
}

export default Navbar;
