import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoInformationCircle } from "react-icons/io5";
import { MdPersonAdd } from "react-icons/md";

const AddUserModal = ({ users, setUsers }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleAddUser = () => {
		const newUserId = users?.length + 1;
		const newUserObj = {
			id: newUserId,
			username: userName,
			password: password,
			email: email,
			status: "Active",
		};
		setUsers([...users, newUserObj]);
		// setNewUser("");
		setUserName("");
		setEmail("");
		setPassword("");

		onClose();
	};

	return (
		<>
			<Button
				leftIcon={<MdPersonAdd />}
				colorScheme='blue'
				size='sm'
				mt={4}
				onClick={onOpen}
			>
				Add User
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add New User</ModalHeader>
					<ModalCloseButton />
					<ModalBody className='space-y-2'>
						<Input
							placeholder='Enter username'
							value={userName}
							onChange={e => setUserName(e.target.value)}
						/>
						<Input
							placeholder='Enter email'
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
						<Input
							placeholder='Enter password'
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
						<p className='text-sm flex items-center gap-1'>
							<IoInformationCircle size={20} color='green' />
							We Will Sent Verify Link On User Email
						</p>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' mr={3} onClick={handleAddUser}>
							Add
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AddUserModal;
