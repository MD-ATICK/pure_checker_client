import React from 'react'
import UserChart from '../../components/client/UserChart';
import { useUserContext } from '../../context/Context';
import moment from 'moment';

const UserStats = () => {


    const { user } = useUserContext()

    const stats = [
        {
            title: "Deliverable",
            value: "$405,091.00",
            percentageColor: "text-green-500",
        },
        {
            title: "Invalid",
            value: "$12,787.00",
            percentageColor: "text-red-500",
        },
        {
            title: "API Usage",
            value: "$245,988.00",
            percentageColor: "text-gray-800",
        },
    ];



    return (
        <div className='p-[3vw] w-[90%] overflow-hidden'>
            <h4 className="text-xl font-semibold text-primary mb-5">Stats</h4>



            <div className='bg-white shadow-md border rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                <div className={`border-r-[1px] border-alternative last:border-none`}>
                    <p className={` text-green-500  text-md mb-2`}>
                        Deliverable
                    </p>
                    <p className={` text-green-500 text-2xl font-bold mb-1`}>
                        {user?.deliverable || 0}
                    </p>
                </div>
                <div className={`border-r-[1px] border-alternative last:border-none`}>
                    <p className={` text-red-500  text-md mb-2`}>
                        Invalid
                    </p>
                    <p className={` text-red-500 text-2xl font-bold mb-1`}>
                        {user?.invalid || 0}
                    </p>
                </div>
                <div className={`border-r-[1px] border-alternative last:border-none`}>
                    <p className={` text-black  text-md mb-2`}>
                        Api Usage
                    </p>
                    <p className={` text-black text-2xl font-bold mb-1`}>
                        {user?.apiUsage || 0}
                    </p>
                </div>
            </div>

            <div className='mt-10'>
                <UserChart />
            </div>
        </div>
    )
}

export default UserStats
