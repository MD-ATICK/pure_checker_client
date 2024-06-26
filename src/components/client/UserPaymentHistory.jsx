import { Box, Button, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { userApi } from '../../api/Api'
import { useUserContext } from '../../context/Context'
import moment from 'moment'

const UserPaymentHistory = () => {

    const { token } = useUserContext()
    const [loading, setLoading] = useState(false);
    const [payments, setPayments] = useState([]);

    const userPayments = async () => {
        setLoading(true)
        const { data, status } = await userApi.get('/payments', { withCredentials: true, headers: { Authorization: `Bearer ${token}` } })
        if (status === 200) {
            console.log('data', data)
            setPayments(data.payments)
        } else {
            console.log(data.err)
        }
        setLoading(false)
    }


    useEffect(() => {
        userPayments()
    }, []);
    return (
        <section className='m-10 w-full'>
            <div className='p-5 w-full'>
                <Box p={0} width={"100%"}>
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
                                            <Td fontWeight={'500'}>{planType}</Td>
                                            <Td>{dayLimit === 30 ? 'monthly' : 'one time'}</Td>
                                            <Td>{_id}</Td>
                                            <Td>{`${currency === "USD" ? price : (price * 125)} ${currency === "USD" ? '$' : "tk"}`}</Td>
                                            <Td>{planType === 'subscription' ? `${credit}/ ${Math.floor(credit / 30)}d` : credit}</Td>
                                            <Td>{item?.status}</Td>
                                            <Td>{moment(createdAt).format('YYYY MM DD')}</Td>
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
                </Box>
            </div>
        </section>
    )
}

export default UserPaymentHistory
