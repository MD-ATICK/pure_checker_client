import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import moment from "moment";

function MaintenanceTable({ maintenances }) {
    return (
        <div className=" overflow-x-scroll w-full   overflow-hidden relative">
            <Box py={8}>
                <Table variant='simple'>
                    <Thead className="  h-10">
                        <Tr>
                            <Th>NO</Th>
                            <Th>ID</Th>
                            <Th>STATUS</Th>
                            <Th>MAINTENANCE ON</Th>
                            <Th>MAINTENANCE OFF</Th>
                        </Tr>
                    </Thead>
                    <Tbody className="">
                        {maintenances && maintenances?.map(({ _id, status, createdAt, updatedAt }, i) => (
                            <Tr key={_id} className=" h-16">
                                <Td>{i}</Td>
                                <Td>{_id}</Td>
                                <Td className={status === 'open' ? 'text-green-600 font-[500]' : 'text-red-600 font-[600]'}>{status}</Td>
                                <Td className=" text-sm tracking-wide">{moment(createdAt).calendar()}</Td>
                                <Td className=" text-sm tracking-wide">{createdAt === updatedAt ? '-' : moment(updatedAt).calendar()}</Td>
                            </Tr>

                        ))}
                    </Tbody>
                </Table>


            </Box>
        </div>
    )
}

export default MaintenanceTable
