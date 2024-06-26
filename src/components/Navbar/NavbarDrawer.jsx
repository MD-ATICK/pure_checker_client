import React from "react";
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavbarDrawer = ({ open, setOpen, navLists }) => {
	return (
		<>
			<FiMenu size={30} color='white' onClick={() => setOpen(!open)} />
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
