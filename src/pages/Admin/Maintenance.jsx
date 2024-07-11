import React, { useEffect, useState } from 'react';
import { greenToast, maintenanceApi, redToast } from '../../api/Api';
// import { FaArrowDown } from "react-icons/fa6";
import MaintenanceTable from '../../components/admin/MaintenanceTable';

function Maintenance() {

    const [status, setStatus] = useState();

    const [getLoading, setGetLoading] = useState(null);
    // checking 
    const getMaintenance = async () => {
        setGetLoading(true)
        const { status } = await maintenanceApi.get('/checking', { withCredentials: true })
        if (status === 200) {
            setGetLoading(false)
            return setStatus('open')
        }
        setGetLoading(false)
        setStatus('closed')
    }


    const [getAllLoading, setGetAllLoading] = useState(null);
    const [maintenances, setMaintenances] = useState([]);
    // get all maintenance
    const getAllMaintenance = async () => {
        setGetAllLoading(true)
        const { data, status } = await maintenanceApi.get('/all-maintenance', { withCredentials: true })
        if (status === 200) {
            setGetAllLoading(false)
            return setMaintenances(data?.maintenances)
        }
        setGetAllLoading(false)
        redToast(data?.err)
    }

    const [turnOffLoading, setTurnOffLoading] = useState(false);
    // off maintenance
    const removeMaintenance = async () => {
        setTurnOffLoading(true)
        const { data, status } = await maintenanceApi.get('/remove', { withCredentials: true })
        if (status === 200) {
            setTurnOffLoading(false)
            setMaintenances(prev => prev.map(m => m._id === data?.update._id ? data.update : m))
            return setStatus('closed')
        }
        setTurnOffLoading(false)
        redToast(data?.err)
    }


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [createLoading, setCreateLoading] = useState(false);
    // new create
    const createMaintenance = async () => {
        setCreateLoading(true)
        const { data, status } = await maintenanceApi.get('/create', { withCredentials: true })
        if (status === 201) {
            setCreateLoading(false)
            setTitle('')
            setDescription('')
            setMaintenances([...maintenances, data?.maintenance])
            setStatus('open')
            return greenToast(data?.msg)
        }
        redToast(data?.err)
        setCreateLoading(false)
        setTitle('')
        setDescription('')
    }


    useEffect(() => {
        getMaintenance()
        getAllMaintenance()
    }, []);

    const m = true

    const manageMaintenance = async () => {
        if (status === 'open') {
            await removeMaintenance()
        } else {
            await createMaintenance()
        }
    }


    return (
        <div className='p-10 w-full'>
            <div className=' w-full'>
                {
                    getLoading === false &&
                    <div className='flex items-center gap-3'>
                        <h1 className=' font-bold text-2xl text-gray-600'>Maintenance : </h1>
                        <div className=' relative h-9 px-2 py-1 w-20 rounded-full bg-gray-200'>
                            <button onClick={manageMaintenance} className={` h-full bg-purple-700 ${status === 'open' ? 'translate-x-9' : 'translate-x-0'} duration-300 cursor-pointer shadow-lg w-[45%] rounded-full`}></button>
                        </div>
                        <div className={` ${status === 'open' ? 'text-green-600' : 'text-red-600'} text-green-600 font-bold text-lg`}>
                            {status === 'open' ? 'ON' : 'OFF'}
                        </div>
                    </div>
                }
                <h1 className='pt-10 flex items-center gap-4 text-xl font-bold text-primary'>All Maintenance  </h1>
                {
                    getAllLoading === false &&
                    <MaintenanceTable maintenances={maintenances.reverse()} />
                }

            </div>
        </div>
    )
}

export default Maintenance
