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
import { greenToast, userApi } from "../../api/Api";
import { useUserContext } from "../../context/Context";

const AddUserModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { users, setUsers, token } = useUserContext()
	const [addUserLoading, setAddUserLoading] = useState(false);

	const handleAddUser = async () => {
		try {
			setAddUserLoading(true)
			const { data, status } = await userApi.post('/add-user', { name: userName, email, password }, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } })
			if (status === 201) {
				greenToast(data.msg)
				setUsers([...users, data.user]);
			}
			// setNewUser("");
			setUserName("");
			setEmail("");
			setPassword("");
			setAddUserLoading(false)
			onClose();
		} catch (error) {
			setAddUserLoading(false)
		}

	};

	return (
		<>
			<Button
				leftIcon={<MdPersonAdd />}
				colorScheme='blue'
				size='sm'
				position={'sticky'}
				left={'20px'}
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
						<Button colorScheme='blue' mr={3} onClick={() => handleAddUser()}>
							{addUserLoading ? 'loading...' : 'add'}
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AddUserModal;
