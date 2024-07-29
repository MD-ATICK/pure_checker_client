import { Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { paymentApi } from '../../api/Api'
import { useUserContext } from '../../context/Context'

const UserPaymentHistory = () => {

    const { token } = useUserContext()
    const [loading, setLoading] = useState(false);
    const [payments, setPayments] = useState([]);

    const userPayments = async () => {
        setLoading(true)
        const { data, status } = await paymentApi.get('/payments', { withCredentials: true, headers: { Authorization: `Bearer ${token}` } })
        if (status === 200) {
            setPayments(data.payments)
        } else {
            console.log(data.err)
        }
        setLoading(false)
    }

    const formatNumber = num => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
        }
        return num;
    };


    useEffect(() => {
        userPayments()
    }, []);
    return (
        <section className='p-0 w-[80vw] overflow-x-auto'>
            <div className='py-0 w-full'>
                <Box py={8} className=" ">
                    <Table variant='simple'>
                        <Thead className=' h-28'>
                            <Tr>
                                <Th>NO</Th>
                                <Th>ORDER ID</Th>
                                <Th className=" whitespace-nowrap">PlAN</Th>
                                <Th>STATUS</Th>
                                <Th>TOTAL CREDITS</Th>
                                <Th>PER DAY LIMIT</Th>
                                <Th className=" whitespace-nowrap">PRICE</Th>
                                <Th>CREATED AT</Th>
                                <Th>ACTION</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {payments?.length > 0 && payments.map((item, i) => {
                                const { price, planType, credit, _id, dayLimit, createdAt, status } = item
                                return <Tr key={_id}>
                                    <Td className=" font-medium text-gray-400 text-xl ">{i + 1}</Td>
                                    <Td title={_id} className=" text-sm whitespace-nowrap font-[500]">
                                        <p className=' bg-gray-200 rounded-lg py-1 px-2'>{_id}</p>
                                    </Td>
                                    <Td className={`${planType === 'subscription' ? 'text-pink-600' : 'text-purple-700'} font-[500] text-md capitalize`}>{planType}</Td>
                                    <Td className=" text-sm ">
                                        <p className="py-1 px-2 rounded-md border text-gray-600 border-green-600 bg-green-100">{status}</p>
                                    </Td>
                                    <Td className=" text-xl font-[600]">{formatNumber(credit)}</Td>
                                    <Td className=" text-lg font-[600]">{dayLimit || '-'}</Td>
                                    <Td className=" text-xl font-[600]">${price || '-'}</Td>
                                    <Td className=" text-sm font-[500] text-gray-600">{moment(createdAt).format('DD MMMM YYYY')}</Td>
                                    <Td className=" text-sm">
                                        <button></button>
                                    </Td>

                                </Tr>
                            })}
                        </Tbody>
                    </Table>
                </Box>
                {/* <Box p={0} width={"100%"}>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>TYPE</Th>
                                <Th>PACKAGE</Th>
                                <Th>ORDER ID</Th>
                                <Th>PRICE</Th>
                                <Th>CREDIT</Th>
                                <Th>STATUS</Th>
                                <Th>CREATED</Th>
                                <Th>INVOICE</Th>
                            </Tr>
                        </Thead>
                        {
                            payments?.length > 0 ?
                                payments.map(item => {
                                    const { price, planType, credit, _id, currency, dayLimit, createdAt } = item
                                    return <Tbody key={item._id}>
                                        <Tr fontSize={'small'}>
                                            <Td fontWeight={'600'} className=' text-[15px] uppercase text-primary'>{planType}</Td>
                                            <Td>{dayLimit === 30 ? 'monthly' : 'one time'}</Td>
                                            <Td title={_id}>{_id.slice(0 , 10)}...</Td>
                                            <Td className=' text-lg whitespace-nowrap font-bold'>{`${currency === "USD" ? price : (price * 125)} ${currency === "USD" ? '$' : "tk"}`}</Td>
                                            <Td>{planType === 'subscription' ? `${credit}/ ${Math.floor(credit / 30)}d` : credit}</Td>
                                            <Td className=' font-medium capitalize '>
                                                <p className=' bg-purple-200 border border-purple-500 py-1 px-2 rounded-md'>{item?.status}</p>
                                            </Td>
                                            <Td className=' whitespace-nowrap'>{moment(createdAt).format('DD/MM/YYYY')}</Td>
                                            <Td>
                                                <Button colorScheme='blue' size={"sm"}>
                                                    Download
                                                </Button>
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                })
                                : <h1 className=' text-center py-10 font-bold text-3xl opacity-60'>Loading...</h1>
                        }
                    </Table>
                </Box> */}
            </div>
        </section>
    )
}

export default UserPaymentHistory
