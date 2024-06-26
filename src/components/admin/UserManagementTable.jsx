import { Box, Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdBlock, MdUndo } from "react-icons/md";
import AddUserModal from "./AddUserModal";
import AdjustLimit from "./AdjustLimit";
import { userApi } from "../../api/Api";
import { useUserContext } from "../../context/Context";

const UserManagementTable = () => {



	const [openAdjust, setOpenAdjust] = useState(null);

	// const initialUsers = [
	// 	{
	// 		id: 1,
	// 		username: "user1",
	// 		status: "Active",
	// 		usedLimit: 250,
	// 		limit: 500,
	// 		package: "oneTime",
	// 		createAt: "2023-01-15",
	// 		buyingDate: "2023-01-01",
	// 	},
	// 	{
	// 		id: 2,
	// 		username: "user2",
	// 		status: "Active",
	// 		usedLimit: 1000,
	// 		limit: 2000,
	// 		package: "Daily",
	// 		createAt: "2023-02-20",
	// 		buyingDate: "2023-02-01",
	// 	},
	// 	{
	// 		id: 3,
	// 		username: "user3",
	// 		status: "Banned",
	// 		usedLimit: 500,
	// 		limit: 1000,
	// 		package: "oneTime",
	// 		createAt: "2023-03-10",
	// 		buyingDate: "2023-03-01",
	// 	},
	// 	{
	// 		id: 4,
	// 		username: "user4",
	// 		status: "Active",
	// 		usedLimit: 5000,
	// 		limit: 10000,
	// 		package: "Daily",
	// 		createAt: "2023-04-05",
	// 		buyingDate: "2023-04-01",
	// 	},
	// 	{
	// 		id: 5,
	// 		username: "user5",
	// 		status: "Banned",
	// 		limit: 200,
	// 		usedLimit: 500,
	// 		package: "oneTime",
	// 		createAt: "2023-05-12",
	// 		buyingDate: "2023-05-01",
	// 	},
	// ];

	// const [users, setUsers] = useState(initialUsers);

	// const handleBanUser = userId => {
	// 	const updatedUsers = users.map(user =>
	// 		user.id === userId ? { ...user, status: "Banned" } : user,
	// 	);
	// 	setUsers(updatedUsers);
	// };

	// const handleUnbanUser = userId => {
	// 	const updatedUsers = users.map(user =>
	// 		user.id === userId ? { ...user, status: "Active" } : user,
	// 	);
	// 	setUsers(updatedUsers);
	// };

	const { users } = useUserContext()


	console.log(users	)



	return (
		<Box p={4}>
			<Table variant='simple'>
				<Thead>
					<Tr>
						<Th>Username</Th>
						<Th>Total Limit</Th>
						<Th>Used Credits</Th>
						<Th>email</Th>
						<Th>Ip</Th>
						<Th>action</Th>
					</Tr>
				</Thead>
				<Tbody>
					{users && users.map(user => (
						<Tr key={user.id}>
							<Td>{user.name}</Td>
							<Td>
								{user.limit}
								<Button
									onClick={() =>
										setOpenAdjust({ userId: user?.id, limit: user.limit })
									}
									colorScheme='red'
									size={"xs"}
									ml={"10px"}
								>
									Adjust
								</Button>
							</Td>
							<Td>{user.credit}</Td>
							<Td>{user.email}</Td>
							<Td>{user.ip}</Td>
							<Td>
								{user.status === "Active" ? (
									<Button
										leftIcon={<MdBlock />}
										colorScheme='red'
										size='sm'
									// onClick={() => handleBanUser(user.id)}
									>
										Ban
									</Button>
								) : (
									<Button
										leftIcon={<MdUndo />}
										colorScheme='green'
										size='sm'
									// onClick={() => handleUnbanUser(user.id)}
									>
										Unban
									</Button>
								)}
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>

			<AddUserModal users={users} />
			{openAdjust !== null && (
				<AdjustLimit openAdjust={openAdjust} setOpenAdjust={setOpenAdjust} />
			)}
		</Box>
	);
};

export default UserManagementTable;
