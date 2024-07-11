import {
    Box,
    Divider
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { userApi } from "../../api/Api";
import PlanEditModal from "../../components/admin/PlanEditModal";

const Pricing = () => {

    const [volumes, setVolumes] = useState([]);

    const [activePayVolume, setActivePayVolume] = useState('');
    const [activeSubsVolume, setActiveSubsVolume] = useState('');


    const getAllVolumes = async () => {
        try {
            const { status, data } = await userApi.get('/get-volume', { withCredentials: true });
            if (status === 201) {
                setVolumes(data.volumes);
            } else {
                console.error('Failed to fetch volumes')
            }
        } catch (error) {
            console.error(error);
        }
    }


    const formatNumber = num => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
        }
        return num.toString();
    };



    useEffect(() => {
        getAllVolumes()
    }, []);


    return (
        <section className="my-10  px-[3vw]">
            <h4 className="text-xl font-semibold text-primary mb-5">Pricing</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:mx-20 '>
                {/* <!-- One Time Section --> */}
                <div className='bg-white shadow-md border-[1px] border-primary rounded-lg p-2 md:p-6 flex flex-col justify-between'>
                    <div>
                        <h2 className='text-2xl font-bold text-center mb-2 text-primary'>
                            One Time
                        </h2>
                        <p className='text-center text-orange-500 font-semibold mb-3 md:mb-4'>
                            (Pay as you go)
                        </p>
                        <p className='text-center mb-3 md:mb-4 font-bold text-primary'>
                            Persistent Credits
                        </p>
                        <p className='text-center mb-3 md:mb-4 font-bold'>
                            How many emails do you want to verify daily?
                        </p>
                        <p className='text-center mb-3 md:mb-4 text-sm bg-primary text-secondary py-2'>
                            Select your email verification volume
                        </p>
                    </div>
                    <div className='grid grid-cols-4 gap-2 mb-4'>
                        {
                            volumes?.map(volume => {
                                if (volume?.planType === 'payAsGo') {
                                    return <button
                                        key={volume._id}
                                        className={`border ${activePayVolume._id === volume._id && ' bg-primary text-white '} rounded py-2`}
                                        onClick={() => setActivePayVolume(volume)}
                                    >
                                        {formatNumber(volume.totalCredits)}
                                    </button>
                                }
                            })
                        }
                    </div>
                    <div className=''>
                        <Box position='relative' padding='10'>
                            <Divider />
                            {/* <AbsoluteCenter
                                bg='white'
                                px='4'
                                fontSize={"sm"}
                                fontWeight={"bold"}
                            >
                                OR
                            </AbsoluteCenter> */}
                        </Box>

                        {/* <div className='text-center mb-4'>
                            <p className='font-medium text-base'>Have custom volume need?</p>
                            <input
                                type='text'
                                placeholder='1111111118'
                                className='border rounded py-2 px-4 mt-2 text-sm focus:border-primary focus:outline-none'
                            />
                        </div> */}
                        <div className='bg-blue-100 grid grid-cols-2 gap-5 py-5 text-center mt-3 border-t-2 border-primary rounded-br-lg rounded-bl-lg'>
                            <div>
                                <p className='text-xl md:text-2xl font-semibold mb-2'>
                                    ${activePayVolume?.price || '-'} <span className='text-sm font-normal'>/ month</span>
                                </p>
                                <span className='h-[1px] flex bg-primary mx-auto mb-2 w-2/3'></span>
                                <p className='mb-2 text-sm md:text-base'>
                                    {activePayVolume?.totalCredits || '-'} credits
                                </p>
                                <PlanEditModal planType={'payAsGo'} name='Edit Daily' volumes={volumes} setVolumes={setVolumes} />

                            </div>
                            <ul className='text-left list-disc mb-4 text-sm space-y-1'>
                                <li>high cost</li>
                                <li>Credit resets daily</li>
                                <li>Multiple subscriptions available</li>
                                <li>Best for daily needs</li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* <!-- Daily Section --> */}

                <div className='bg-white shadow-md border-[1px] border-primary rounded-lg p-2 md:p-6 flex flex-col justify-between'>
                    <div>
                        <h2 className='text-2xl font-bold text-center mb-2 text-primary'>
                            Daily
                        </h2>
                        <p className='text-center text-orange-500 font-semibold mb-3 md:mb-4'>
                            (Monthly)
                        </p>
                        <p className='text-center mb-3 md:mb-4 font-bold text-primary'>
                            Per Day Credits
                        </p>
                        <p className='text-center mb-3 md:mb-4 font-bold'>
                            How many emails do you want to verify daily?
                        </p>
                        <p className='text-center mb-3 md:mb-4 text-sm bg-primary text-secondary py-2'>
                            Select your email verification volume
                        </p>
                    </div>
                    <div className='grid grid-cols-4 gap-2 mb-4'>
                        {
                            volumes?.map(volume => {
                                if (volume?.planType === 'subscription') {
                                    return <button
                                        key={volume._id}
                                        className={`border ${activeSubsVolume._id === volume._id && ' bg-primary text-white '} rounded py-2`}
                                        onClick={() => setActiveSubsVolume(volume)}
                                    >
                                        {formatNumber(volume.totalCredits)}
                                    </button>
                                }
                            })
                        }
                    </div>
                    <div className=''>
                        <Box position='relative' padding='10'>
                            <Divider />
                            {/* <AbsoluteCenter
                                bg='white'
                                px='4'
                                fontSize={"sm"}
                                fontWeight={"bold"}
                            >
                                OR
                            </AbsoluteCenter> */}
                        </Box>

                        {/* <div className='text-center mb-4'>
                            <p className='font-medium text-base'>Have custom volume need?</p>
                            <input
                                type='text'
                                placeholder='1111111118'
                                className='border rounded py-2 px-4 mt-2 text-sm focus:border-primary focus:outline-none'
                            />
                        </div> */}
                        <div className='bg-blue-100 grid grid-cols-2 gap-5 py-5 text-center mt-3 border-t-2 border-primary rounded-br-lg rounded-bl-lg'>
                            <div>
                                <p className='text-xl md:text-2xl font-semibold mb-2'>
                                    ${activeSubsVolume?.price || '-'} <span className='text-sm font-normal'>/ month</span>
                                </p>
                                <span className='h-[1px] flex bg-primary mx-auto mb-2 w-2/3'></span>
                                <p className='mb-2 text-sm md:text-base'>
                                    {Math.floor(activeSubsVolume?.totalCredits / 30) || '-'} credits / day
                                </p>
                                <PlanEditModal planType={'subscription'} name='Edit Daily' volumes={volumes} setVolumes={setVolumes} />

                            </div>
                            <ul className='text-left list-disc mb-4 text-sm space-y-1'>
                                <li>Low cost</li>
                                <li>Credit resets daily</li>
                                <li>Multiple subscriptions available</li>
                                <li>Best for daily needs</li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </section >
    )
}

export default Pricing
