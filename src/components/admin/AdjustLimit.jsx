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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { greenToast, redToast, userApi } from "../../api/Api";
import { useUserContext } from "../../context/Context";

const AdjustLimit = ({ openAdjust, setOpenAdjust }) => {
	const [newLimit, setNewLimit] = useState('');
	const { setUsers } = useUserContext()
	const [loading, setLoading] = useState(false);

	const HandleUserLimit = async () => {
		if (!openAdjust || !newLimit) return;
		setLoading(true)
		const { data, status } = await userApi.post(`/adjust/${openAdjust?._id}`, { limit: newLimit }, { withCredentials: true })
		if (status === 201) {
			setLoading(false)
			greenToast(data?.msg)
			setUsers(prev => prev.map(user => user._id === data.user._id ? data.user : prev))
			setOpenAdjust('')
		} else {
			setLoading(false)
			redToast(data.err)
		}
	}

	return (
		<>
			{/* <Button colorScheme='red' size={"xs"} ml={"10px"}>
				Adjust
			</Button> */}
			<Modal isOpen={open} onClose={() => setOpenAdjust(null)}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Adjust Limit</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Input
							defaultValue={newLimit}
							onChange={e => setNewLimit(e.target.value)}
							type='number'
							fontWeight={'semibold'}
							placeholder='Adjust user limit..'
						/>
					</ModalBody>
					<p className="p-4 text-sm text-red-600">Notice : if you adjust any limit , this user subscription will be close and he got a amount of credit that you choosen.</p>
					<ModalFooter>
						<Button
							colorScheme='blue'
							size={"sm"}
							mr={3}
							onClick={() => setOpenAdjust(null)}
						>
							Close
						</Button>
						<Button onClick={HandleUserLimit} colorScheme='green' size={"sm"}>
							{loading ? 'loading ...' : 'Update Changes'}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AdjustLimit;
