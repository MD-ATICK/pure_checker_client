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
		{ path: "/blogs", name: "Blogs" },
		// { path: "/test", name: "test" },
	];

	return (
		<>


			{/* separate  */}

			<div className='bg-[#229cc5] px-3 md:px-0'>
				<div className='container mx-auto flex items-center justify-between py-8 relative'>
					<div className='flex items-center gap-10'>
						<Link to={'/'} className=" flex items-center">
							<img src='./favicon.png' className='h-12 md:h-14' loading="lazy" title="pure checker" alt='pure checker' />
						</Link>
						<ul className='hidden md:flex items-center gap-5 text-[#ffffff] font-[500]'>
							{navLists &&
								navLists?.map((nav) => {
									if (nav?.name === navLists[1].name || nav?.name === navLists[7]?.name) {
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
