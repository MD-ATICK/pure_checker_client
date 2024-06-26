import { useEffect } from 'react'
import StatsCard from '../../components/admin/StatsCard'
import UserManagementTable from '../../components/admin/UserManagementTable'
import { useUserContext } from '../../context/Context'

const Dashboard = () => {

    const { getUsers } = useUserContext()

    useEffect(() => {
        getUsers()
    }, []);

    return (

        <section className="my-10 w-full">
            <h4 className="ml-10 text-xl font-semibold text-primary mb-5">Dashboard</h4>

            <div className='px-10 space-y-10'>
                <StatsCard />
                <div className='border-[1px] border-primary rounded-lg'>
                    <UserManagementTable />

                </div>

            </div>







        </section>
    )
}

export default Dashboard
