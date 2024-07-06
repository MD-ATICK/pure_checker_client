import { Box, Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { default as React, useEffect, useState } from 'react';
import { MdBackHand, MdBlock, MdUndo } from "react-icons/md";
import ReactPaginate from 'react-paginate';
import { userApi } from '../../api/Api';

function Orders() {

    const [orders, setOrders] = useState([]);
    const [count, setCount] = useState(0);

    const orderFetch = async ({ page }) => {
        const { data, status } = await userApi.get(`/all-payments?page=${page}`, { withCredentials: true })
        if (status === 200) {
            setOrders(data?.payments)
            setCount(data?.count)
        }
    }

    const handlePageClick = async (event) => {
        await orderFetch({ page: event.selected + 1 })
    }


    useEffect(() => {
        orderFetch({ page: 1 })
    }, []);


    // createdAt
    // credit
    // currency
    // dayLimit
    // paymentId
    // planType
    // price
    // status
    // updatedAt
    // userId
    // _id

    return (
        <div className=' w-full overflow-hidden'>
            <div className=" overflow-x-auto px-2">
                <Box py={8} className=" ">
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>NO</Th>
                                <Th>ORDER ID</Th>
                                <Th className=" whitespace-nowrap">PlAN</Th>
                                <Th className=" whitespace-nowrap">PRICE</Th>
                                <Th>STATUS</Th>
                                <Th>BUYER</Th>
                                <Th>BUYER EMAIL</Th>
                                <Th>BUYER VERIFY</Th>
                                <Th>TOTAL CREDITS</Th>
                                <Th>PER DAY</Th>
                                <Th>ACTION</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {orders?.length > 0 && orders.map((order, i) => {
                                const { _id, credit, currency, dayLimit, planType, paymentId, price, status, userId } = order
                                return <Tr key={_id}>
                                    <Td className=" font-medium">{i + 1}</Td>
                                    <Td title={_id} className=" text-sm whitespace-nowrap font-[500]">{paymentId.slice(0,15)}...</Td>
                                    <Td className={`${ planType === 'subscription' ? 'text-pink-600' : 'text-purple-600'} font-[500] text-md capitalize`}>{planType}</Td>
                                    <Td className=" text-xl font-bold">${price || '-'}</Td>
                                    <Td className=" text-sm ">
                                        <p className="py-1 px-2 rounded-md border text-gray-600 border-green-600 bg-green-100">{status}</p>
                                    </Td>
                                    <Td className=" text-sm">{userId?.name || '-'}</Td>
                                    <Td className=" text-sm">{userId?.email || '-'}</Td>
                                    <Td className={` capitalize font-medium ${userId?.isVerify ? 'text-green-700' : 'text-red-600'}`}>{userId?.isVerify ? 'true' : 'false'}</Td>
                                    <Td className=" text-md font-[600]">{credit}</Td>
                                    <Td className=" text-sm">{'-'}</Td>
                                    <Td className=" text-sm">
                                        <Button
                                            leftIcon={<MdBackHand />}
                                            colorScheme='pink'
                                            size='sm'
                                        >
                                            Refund
                                        </Button>
                                    </Td>

                                </Tr>
                            })}
                        </Tbody>
                    </Table>
                </Box>
            </div>o
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
                    pageCount={Math.ceil(count / 10)}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    )
}

export default Orders
