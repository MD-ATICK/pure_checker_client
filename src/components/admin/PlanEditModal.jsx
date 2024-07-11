import {
	Button,
	IconButton,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
// import { CiEdit } from "react-icons/ci";
// import { MdDelete } from "react-icons/md";
import { greenToast, userApi } from "../../api/Api";
import { useUserContext } from "../../context/Context";



const PlanEditModal = ({ planType, name, volumes, setVolumes }) => {

	const { token } = useUserContext()

	const [open, setOpen] = useState(false);
	const [newVolumePrice, setNewVolumePrice] = useState("");
	const [newVolumeValue, setNewVolumeValue] = useState("");
	const [newVolumePerDayCredit, setNewVolumePerDayCredit] = useState('');
	const [updateVolume, setUpdateVolume] = useState(null);


	// Submit handler
	const handleSubmit = e => {
		e.preventDefault();
	};

	// Add volume handler
	const handleAddVolume = async e => {
		e.preventDefault();
		if (!newVolumePrice || !newVolumeValue) {
			alert("Please enter both value and price.");
			return;
		}
		if (!token) return alert('token not found')
		const { status, data } = await userApi.post('/create-volume', { planType, totalCredits: newVolumeValue, perDay: newVolumePerDayCredit, price: newVolumePrice }, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
		if (status === 201) {
			greenToast(data.msg)
			setVolumes([...volumes, data?.volume]);
			setNewVolumePrice("");
			setNewVolumeValue("");
		} else {
			console.error('Failed to fetch volumes')
		}
	};

	const handleDeleteVolume = async (_id) => {
		// e.preventDefault();
		if (!token) return alert('token not found')
		const { status, data } = await userApi.delete(`/delete-volume/${_id}`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
		if (status === 200) {
			greenToast(data.msg)
			setVolumes(
				volumes?.filter(oVol => oVol._id !== data.volume._id),
			);
		} else {
			console.error('Failed to fetch volumes')
		}
	};

	// Update volume handler
	const handleUpdateVolume = async () => {
		if (!token) return alert('token not found')
		if (!updateVolume) return alert('pls select one field;')
		const { status, data } = await userApi.put('/update-volume', { volumeId: updateVolume._id, planType, totalCredits: updateVolume.totalCredits, price: updateVolume.price }, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
		if (status === 201) {
			greenToast(data.msg)
			const updatedVolumes = volumes.map(vol =>
				vol._id === data.volume._id ? data.volume : vol,
			);
			setVolumes(updatedVolumes);
			setUpdateVolume(null);
		} else {
			console.error('Failed to fetch volumes')
		}
	};

	const formatNumber = num => {
		if (num >= 1000000) {
			return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
		} else if (num >= 1000) {
			return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
		}
		return num.toString();
	};

	return (
		<>
			<Button
				onClick={() => setOpen(true)}
				colorScheme='blue'
				size='sm'
				gap='5px'
			>
				{/* <CiEdit size={20} /> */}
				{name}
			</Button>

			<Modal isOpen={open} onClose={() => setOpen(false)}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{name}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<form onSubmit={handleSubmit}>
							<div className='grid grid-cols-2 gap-2 my-4'>
								{volumes?.length > 0 && volumes.map(vol => {
									if (vol.planType === planType) {
										return <div
											key={vol._id}
											className={`border ${updateVolume && updateVolume?._id === vol._id && ' bg-blue-600 text-white'} rounded border-primary py-2 flex gap-3 items-center justify-between px-5`}
										>
											<h3
												onClick={() => setUpdateVolume(vol)}
												className='cursor-pointer'
											>
												{formatNumber(vol.totalCredits)} - ${vol.price}
											</h3>

											<IconButton
												variant='outline'
												onClick={() => {
													if (window.confirm("are you sure?")) {
														handleDeleteVolume(vol._id)
													}
												}}
												background={'white'}
												colorScheme='red'
												aria-label='delete volumes'
												size={"sm"}
												icon={"D"}
											// icon={<MdDelete />}
											/>
										</div>
									}
								})}
							</div>
							{!updateVolume ? (
								<div className='flex flex-col  items-center gap-2 md:gap-5 w-full'>
									<div className=" w-full">
										<label className='ml-1 font-medium text-sm'>Price:</label>
										<Input
											name='price'
											type='number'
											borderColor={"green"}
											placeholder='Price'
											value={newVolumePrice}
											onChange={e => setNewVolumePrice(e.target.value)}
										/>
									</div>
									{
										planType === 'subscription' ?
											<>
												<div className=" w-full">
													<label className='ml-1 font-medium text-sm'>Per Day Volume:</label>
													<Input
														name='price'
														type='number'
														borderColor={"green"}
														placeholder='per day volume'
														value={newVolumePerDayCredit}
														onChange={e => {
															setNewVolumeValue(e.target.value * 30)
															setNewVolumePerDayCredit(e.target.value)
														}}
													/>
												</div>
												<div className=" w-full">
													<label className='ml-1 font-medium text-sm'>Monthly Volume:</label>
													<Input
														name='value'
														type='number'
														borderColor={"green"}
														placeholder='monthly volume'
														value={newVolumeValue}
														onChange={e => setNewVolumeValue(e.target.value)}
													/>
												</div>
											</> :
											<>
												<div className=" w-full">
													<label className='ml-1 font-medium text-sm'>Total Volume:</label>
													<Input
														name='value'
														type='number'
														borderColor={"green"}
														placeholder='monthly volume'
														value={newVolumeValue}
														onChange={e => setNewVolumeValue(e.target.value)}
													/>
												</div>
											</>
									}
									<Button
										onClick={handleAddVolume}
										colorScheme='green'
										size={"md"}
										width={"full"}
										marginTop={6}
									>
										Add Volume
									</Button>
								</div>
							) : (
								<div className='flex items-center gap-2 md:gap-5 w-full my-4'>
									<div>
										<label className='ml-1 font-medium text-sm'>Price:</label>
										<Input
											type='text'
											borderColor={"blue"}
											placeholder='Price'
											value={updateVolume.price}
											onChange={e =>
												setUpdateVolume({
													...updateVolume,
													price: e.target.value,
												})
											}
										/>
									</div>

									<div>
										<label className='ml-1 font-medium text-sm'>Value:</label>
										<Input
											type='text'
											borderColor={"blue"}
											placeholder='Value'
											value={updateVolume.totalCredits}
											onChange={e =>
												setUpdateVolume({
													...updateVolume,
													totalCredits: e.target.value,
												})
											}
										/>
									</div>
									<Button
										onClick={handleUpdateVolume}
										colorScheme='teal'
										size={"md"}
										width={"full"}
										marginTop={6}
									>
										Update Volume
									</Button>
								</div>
							)}

							<div className='my-3 flex justify-end'>
								<Button colorScheme='red' mr={3} onClick={() => setOpen(false)}>
									Close
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
