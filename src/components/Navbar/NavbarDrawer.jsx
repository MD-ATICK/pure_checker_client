import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay
} from "@chakra-ui/react";
import React from "react";
// import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavbarDrawer = ({ open, setOpen, navLists }) => {
	return (
		<>
			{/* <FiMenu size={30} color='white' onClick={() => setOpen(!open)} /> */}
			<button onClick={() => setOpen(!open)} >M</button>
			<Drawer isOpen={open} placement='right' onClose={() => setOpen(false)}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>
						<img src='./11.png' alt='' className='h-16 mx-auto' />
					</DrawerHeader>

					<DrawerBody>
						<div className='space-y-2'>
							{navLists &&
								navLists?.map((nav, index) => {
									return (
										<div key={nav.path}>
											<Link to={nav.path}>{nav.name}</Link>
										</div>
									);
								})}
						</div>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default NavbarDrawer;
