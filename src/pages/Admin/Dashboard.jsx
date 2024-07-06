import { useEffect, useState } from 'react'
import { userApi } from '../../api/Api'
import StatsCard from '../../components/admin/StatsCard'
import UserManagementTable from '../../components/admin/UserManagementTable'
import { useUserContext } from '../../context/Context'

const Dashboard = () => {

    const { getUsers, users } = useUserContext()
    const [payments, setPayments] = useState([]);
    const [totalMailCheckState, setTotalMailCheckState] = useState(0);

    const statsOFX = [
        {
            id: 1,
            title: 'Total Users',
            value: 0,
            percentage: '+4.75%',
            percentageColor: 'text-green-500',
        },
        {
            id: 2,
            title: 'Total Subscription User',
            value: '2',
            percentage: '+54.02%',
            percentageColor: 'text-red-500',
        },
        {
            id: 3,
            title: 'Total Payment',
            value: '$245,988.00',
            percentage: '-1.39%',
            percentageColor: 'text-red-500',
        },
        {
            id: 4,
            title: 'Total Mail Check',
            value: '568',
            percentage: '+10.18%',
            percentageColor: 'text-red-500',
        },
    ];

    const [statsX, setStatsX] = useState(statsOFX);

    useEffect(() => {

        setStatsX(pv => {
            const updatedStats = [...pv];
            let paymentAllPrice = 0
            updatedStats[0].value = users?.length || 0;
            updatedStats[1].value = users?.filter(user => user.subscription === true).length
            payments?.map(p => paymentAllPrice += Number(p.price))
            updatedStats[2].value = `$${paymentAllPrice}`;
            updatedStats[3].value = totalMailCheckState;
            return updatedStats;
        });

    }, [users, payments, totalMailCheckState]);

    const getAllPayments = async () => {
        try {
            const { data, status } = await userApi.get('/all-payments')
            if (status === 200) {
                setPayments(data?.payments)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const totalMailCheck = async () => {
        try {
            const { data, status } = await userApi.get('/total-mail-check')
            if (status === 200) {
                setTotalMailCheckState(data.totalMailCheck)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers()
        totalMailCheck()
        getAllPayments()
    }, []);


    // const stats = [
    //     {
    //         title: 'Revenue',
    //         value: '$405,091.00',
    //         percentage: '+4.75%',
    //         percentageColor: 'text-green-500',
    //     },
    //     {
    //         title: 'Overdue invoices',
    //         value: '$12,787.00',
    //         percentage: '+54.02%',
    //         percentageColor: 'text-red-500',
    //     },
    //     {
    //         title: 'Outstanding invoices',
    //         value: '$245,988.00',
    //         percentage: '-1.39%',
    //         percentageColor: 'text-red-500',
    //     },
    //     {
    //         title: 'Expenses',
    //         value: '$30,156.00',
    //         percentage: '+10.18%',
    //         percentageColor: 'text-red-500',
    //     },
    // ];


    return (
        <>

            <section className="my-10 h-screen overflow-y-auto px-[3vw] w-[85vw]">
                < h4 className=" text-xl font-semibold text-primary mb-5" > Dashboard</ h4>
                <div className='space-y-10'>
                    {/* <StatsCard stats={stats} /> */}
                    <StatsCard stats={statsX} />


                </div>
            </section >

        </>
    )
}

export default Dashboard
