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

const AdjustLimit = ({ openAdjust, setOpenAdjust }) => {
	const [newLimit, setNewLimit] = useState(openAdjust);

	console.log(newLimit, "limit");

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
							defaultValue={newLimit.limit}
							onChange={e => setNewLimit(e.target.value)}
							type='number'
							placeholder='Adjust user limit..'
						/>
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme='blue'
							size={"sm"}
							mr={3}
							onClick={() => setOpenAdjust(null)}
						>
							Close
						</Button>
						<Button colorScheme='green' size={"sm"}>
							Update Changes
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AdjustLimit;
