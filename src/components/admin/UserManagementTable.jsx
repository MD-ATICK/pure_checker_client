import { Box, Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdBackHand, MdBlock, MdUndo } from "react-icons/md";
import AddUserModal from "./AddUserModal";
import AdjustLimit from "./AdjustLimit";
import { greenToast, userApi } from "../../api/Api";
import { useUserContext } from "../../context/Context";
import ReactPaginate from 'react-paginate';


const UserManagementTable = () => {

	const { users, setUsers, search, token, getUsers, pageCount, setCurrentPage, currentPage } = useUserContext()

	const [openAdjust, setOpenAdjust] = useState('');

	const handleBanUser = async (_id) => {
		try {
			const { data, status } = await userApi.get(`/block/${_id}`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } })
			if (status === 200) {
				greenToast(data.msg)
				setUsers(pv => {
					const usersAll = pv
					let newUsers = usersAll.map(u => u._id === data.updatedUser._id ? data.updatedUser : u)
					return newUsers;
				})
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getUsers({ search: '', page: currentPage })
	}, []);

	// pagination work.

	// const [itemOffset, setItemOffset] = useState(0);
	// const items = users;
	// const endOffset = itemOffset + itemsPerPage;
	// const currentItems = items.slice(itemOffset, endOffset);
	const handlePageClick = (event) => {
		setCurrentPage(event.selected + 1)
		getUsers({ search, page: (event.selected + 1) })
	};

	return (
		<div className=" overflow-x-scroll  overflow-hidden relative">
			<Box py={8}>
				<Table variant='simple'>
					<Thead>
						<Tr>
							<Th>NO</Th>
							<Th>Username</Th>
							<Th className=" whitespace-nowrap">Total Limit</Th>
							<Th className=" whitespace-nowrap">Used Credits</Th>
							<Th>email</Th>
							<Th>Subscription</Th>
							<Th>Verified</Th>
							<Th>Ip</Th>
							<Th>action</Th>
						</Tr>
					</Thead>
					<Tbody>
						{users?.length > 0 && users.map((user, i) => (
							<Tr key={user._id}>
								<Td className=" font-medium">{i + 1}</Td>
								<Td className=" font-medium capitalize">{user.name}</Td>
								<Td>
									<Button
										onClick={() =>
											setOpenAdjust(user)
										}
										colorScheme='red'
										size={"xs"}
										ml={"10px"}
									>
										Adjust
									</Button>
								</Td>
								<Td className=" font-semibold text-primary">{user.credit}</Td>
								<Td className=" text-sm">{user.email}</Td>
								<Td className={` capitalize font-medium ${user?.subscription ? 'text-green-700' : 'text-red-600'}`}>{user.subscription ? 'true' : 'false'}</Td>
								<Td className={user.isVerify ? ' text-green-700 font-[600]' : 'text-red-600 text-[15px] font-[500]'}>{user.isVerify ? 'Yes' : 'No'}</Td>
								<Td>{user.ip}</Td>
								<Td className=" flex flex-col items-center gap-2">
									{!user.block ? (
										<Button
											leftIcon={<MdBlock />}
											colorScheme='red'
											size='sm'
											onClick={() => handleBanUser(user._id)}
										>
											Ban
										</Button>
									) : (
										<Button
											leftIcon={<MdUndo />}
											colorScheme='green'
											size='sm'
											onClick={() => handleBanUser(user._id)}
										>
											Unban
										</Button>

									)}
									{/* <Button
										leftIcon={<MdBackHand />}
										colorScheme='pink'
										size='sm'
									>
										Refund
									</Button> */}
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>

				<AddUserModal users={users} />
				{openAdjust && (
					<AdjustLimit openAdjust={openAdjust} setOpenAdjust={setOpenAdjust} />
				)}
			</Box>
			<div className=" w-full py-3 flex justify-center items-center">

				<ReactPaginate
					breakLabel="..."
					nextLabel="next >"
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					className=" flex items-center my-3 gap-3"
					pageClassName=" duration-300 hover:scale-150 hover:px-4 cursor:pointer"
					nextClassName=" bg-primary text-white px-4 py-2 hover:scale-105 rounded-full"
					previousClassName=" bg-primary text-white px-4 py-2 hover:scale-105 rounded-full"
					activeClassName=" bg-primary text-white h-10 w-10 flex justify-center items-center font-[600] rounded-full"
					pageCount={pageCount}
					previousLabel="< previous"
					renderOnZeroPageCount={null}
				/>
			</div>
		</div>
	);
};

export default UserManagementTable;
