import React, { useState } from "react";
import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Textarea,
} from "@chakra-ui/react";
import { CiEdit } from "react-icons/ci";

// const defaultPlan = {
//   type: "Daily",
//   payment: "Pay monthly",
//   description: "Per Day Credits",
//   question: "How many emails do you want to verify daily?",
//   volumePrompt: "Select your email verification volume",
//   volumes: ["100", "500", "1K", "2K", "3K", "5K", "10K", "25K", "50K"],
//   customVolumePrompt: "Have custom volume need?",
//   price: "$900",
//   priceNote: "/ month",
//   creditsPerDay: "50,000 credits / day",
//   buttonText: "Sign Up",
//   features: [
//     "Low cost",
//     "Credit resets daily",
//     "Multiple subscriptions available",
//     "Best for daily needs",
//   ],
// };

const PlanEditModal = ({ name, planIs }) => {
	const [open, setOpen] = useState(false);
	const [planData, setPlanData] = useState(planIs);

	// Handler for input change
	const handleInputChange = (key, value) => {
		setPlanData({ ...planData, [key]: value });
	};

	// Submit handler
	const handleSubmit = e => {
		e.preventDefault();
		// onSubmit(planData);
        console.log(planData, "planData")
		// setOpen(false); // Close modal after submission
	};

	return (
		<>
			<Button
				onClick={() => setOpen(true)}
				colorScheme='blue'
				size='sm'
				gap='5px'
			>
				<CiEdit size={20} />
				{name}
			</Button>

			<Modal isOpen={open} onClose={() => setOpen(false)}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{name}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<form onSubmit={handleSubmit}>
							<div>
								<label>Type:</label>
								<Input
									type='text'
									value={planData?.type}
									onChange={e => handleInputChange("type", e.target.value)}
									required
								/>
							</div>
							<div>
								<label>Payment:</label>
								<Input
									type='text'
									value={planData?.payment}
									onChange={e => handleInputChange("payment", e.target.value)}
									required
								/>
							</div>
							<div>
								<label>Description:</label>
								<Textarea
									type='text'
									value={planData?.description}
									onChange={e =>
										handleInputChange("description", e.target.value)
									}
									required
								/>
							</div>
							<div>
								<label>Question:</label>
								<Input
									type='text'
									value={planData?.question}
									onChange={e => handleInputChange("question", e.target.value)}
								/>
							</div>
							<div>
								<label>Volume Prompt:</label>
								<Input
									type='text'
									value={planData?.volumePrompt}
									onChange={e =>
										handleInputChange("volumePrompt", e.target.value)
									}
								/>
							</div>
							<div>
								<label>Volumes:</label>
								<Textarea
									type='text'
									value={planData?.volumes.join(", ")}
									onChange={e =>
										handleInputChange("volumes", e.target.value.split(", "))
									}
								/>
							</div>
							<div>
								<label>Custom Volume Prompt:</label>
								<Input
									type='text'
									value={planData?.customVolumePrompt}
									onChange={e =>
										handleInputChange("customVolumePrompt", e.target.value)
									}
								/>
							</div>
							<div>
								<label>Price:</label>
								<Input
									type='text'
									value={planData?.price}
									onChange={e => handleInputChange("price", e.target.value)}
								/>
							</div>
							<div>
								<label>Price Note:</label>
								<Input
									type='text'
									value={planData?.priceNote}
									onChange={e => handleInputChange("priceNote", e.target.value)}
								/>
							</div>
							<div>
								<label>Credits Per Day:</label>
								<Input
									type='text'
									value={planData?.creditsPerDay}
									onChange={e =>
										handleInputChange("creditsPerDay", e.target.value)
									}
								/>
							</div>
							<div>
								<label>Button Text:</label>
								<Input
									type='text'
									value={planData?.buttonText}
									onChange={e =>
										handleInputChange("buttonText", e.target.value)
									}
								/>
							</div>
							<div>
								<label>Features (comma-separated):</label>
								<Input
									type='text'
									value={planData?.features.join(", ")}
									onChange={e =>
										handleInputChange("features", e.target.value.split(", "))
									}
								/>
							</div>
							<div className='my-3 flex justify-end'>
								<Button
									colorScheme='red'
									size='sm'
									mr={3}
									onClick={() => setOpen(false)}
								>
									Close
								</Button>
								<Button type='submit' colorScheme='blue' size='sm'>
									Save Changes
								</Button>
							</div>
						</form>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default PlanEditModal;
