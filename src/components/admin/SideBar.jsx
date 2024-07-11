import moment from 'moment';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useUserContext } from '../../context/Context';
// import { BsEnvelopeCheckFill } from "react-icons/bs";
// import { FaChartArea, FaUsers } from 'react-icons/fa';
// import { IoMdPricetags, IoMdSettings } from 'react-icons/io';
// import { MdDashboard, MdFindInPage } from 'react-icons/md';
// import { TbApi } from "react-icons/tb";
// import { GrHostMaintenance } from 'react-icons/gr'
// import { VscListOrdered } from 'react-icons/vsc'


function SideBar() {

    const { user } = useUserContext()


    const date1 = user?.subscription && moment(user?.subEndDate)
    const date2 = moment().format('YYYY-MM-DD');

    const daysDifference = user?.subscription && date1.diff(date2, 'days');

    return (
        <div>hi</div>
    )
   
}

export default SideBar

// return (
//     <>
//         <div className=' w-[13vw] flex flex-col  gay-3 md:hidden bg-[#030832] text-center text-white py-5 rounded-r-lg h-screen'>
//             <Link to={'/'} className=' mb-16 mt-4 w-full flex items-end gap-x-2 px-[4px]'>
//                 <div className=' bg-white py-2 rounded-lg w-full'>
//                     <img src='/10.png' alt='' className='h-8 aspect-square bg-white w-full object-contain p-[3px]' />
//                 </div>
//             </Link>
//             {
//                 user && user?.role === 'admin' ?
//                     <div className='sidebar flex flex-col py-10 w-full '>
//                         <NavLink className='  duration-500 hover:scale-105 py-5 border-y-2 border-blue-400 flex justify-center item-center text-2xl font-bold' to='/admin/dashboard' ><MdDashboard />
//                         </NavLink>
//                         <NavLink className=' duration-500 hover:scale-105 py-5 border-b-2 border-blue-400 flex justify-center item-center text-2xl font-bold' to='/admin/pricing' ><IoMdPricetags />
//                         </NavLink>
//                         <NavLink className=' duration-500 hover:scale-105 py-5 border-b-2 border-blue-400 flex justify-center item-center text-2xl font-bold' to='/admin/maintenance' ><GrHostMaintenance />
//                         </NavLink>
//                         <NavLink className=' duration-500 hover:scale-105 py-5 border-b-2 border-blue-400 flex justify-center item-center text-2xl font-bold' to='/admin/blogs' ><MdFindInPage />
//                         </NavLink>
//                         <NavLink className=' duration-500 hover:scale-105 py-5 border-b-2 border-blue-400 flex justify-center item-center text-2xl font-bold' to='/admin/users' ><FaUsers />
//                         </NavLink>
//                         <NavLink className=' duration-500 hover:scale-105 py-5 border-b-2 border-blue-400 flex justify-center item-center text-2xl font-bold' to='/admin/orders' ><VscListOrdered />
//                         </NavLink>

//                     </div>
//                     :
//                     <div className='sidebar flex flex-col py-10 w-full '>
//                         <NavLink className='  duration-500 hover:scale-105 py-6 border-y-2 border-blue-400 flex justify-center item-center text-2xl font-bold' to='/user/checker' ><BsEnvelopeCheckFill />
//                         </NavLink>
//                         <NavLink className=' duration-500 hover:scale-105 py-6 border-b-2 border-blue-400 flex justify-center item-center text-2xl font-bold' to='/user/stats' ><FaChartArea />
//                         </NavLink>
//                         <NavLink className=' duration-500 hover:scale-105 py-6 border-b-2 border-blue-400 flex justify-center item-center text-2xl font-bold' to='/user/api' ><TbApi />
//                         </NavLink>
//                         <NavLink className=' duration-500 hover:scale-105 py-6 border-b-2 border-blue-400 flex justify-center item-center text-2xl font-bold' to='/user/settings' ><IoMdSettings /> </NavLink>
//                     </div>

//             }
//         </div>
//         <div className={` hidden md:block w-[350px] duration-500  h-screen bg-[#030832] text-white`}>
//             <Link to={'/'} className=' w-full flex items-end gap-x-2 p-8 '>
//                 <img src='/10.png' alt='' className='h-12 aspect-square bg-gray-100 p-2' />
//                 <span className=' font-bold text-3xl'> ure Checker</span>
//             </Link>

//             {
//                 user && user?.role === 'admin' ?
//                     <div className='sidebar flex flex-col py-10 w-full '>
//                         <NavLink className='  font-medium duration-500 hover:px-8 p-4 border-y-2 border-blue-400' to='/admin/dashboard' >Dashboard</NavLink>
//                         <NavLink className=' font-medium duration-500 hover:px-8 p-4 border-b-2 border-blue-400' to='/admin/pricing' >Pricing</NavLink>
//                         <NavLink className=' font-medium duration-500 hover:px-8 p-4 border-b-2 border-blue-400' to='/admin/maintenance' >Maintenance</NavLink>
//                         <NavLink className=' font-medium duration-500 hover:px-8 p-4 border-b-2 border-blue-400' to='/admin/blogs' >Blogs</NavLink>
//                         <NavLink className=' font-medium duration-500 hover:px-8 p-4 border-b-2 border-blue-400' to='/admin/users' >Users</NavLink>
//                         <NavLink className=' font-medium duration-500 hover:px-8 p-4 border-b-2 border-blue-400' to='/admin/orders' >Orders</NavLink>
//                         {/* <NavLink className=' font-medium duration-500 hover:px-8 p-4 border-b-2 border-blue-400' to='/admin/users' >Users</NavLink> */}
//                     </div>
//                     :
//                     <div className='sidebar flex flex-col py-10 w-full '>
//                         <NavLink className='  font-semibold duration-500 hover:px-8 p-4 border-y-2 border-blue-400' to='/user/checker' >Email Checker</NavLink>
//                         <NavLink className=' font-semibold duration-500 hover:px-8 p-4 border-b-2 border-blue-400' to='/user/stats' >Stats</NavLink>
//                         <NavLink className=' font-semibold duration-500 hover:px-8 p-4 border-b-2 border-blue-400' to='/user/api' >API</NavLink>
//                         <NavLink className=' font-semibold duration-500 hover:px-8 p-4 border-b-2 border-blue-400' to='/user/settings' >Settings</NavLink>
//                     </div>
//             }

//             {
//                 user?.subscription &&
//                 <div className=' absolute w-full p-3 bottom-0 left-0'>
//                     <div className=' bg-gray-200 text-black py-2 px-4 rounded-xl'>
//                         <p className=' font-semibold texst-[17px]'>🟢 Subscription Running</p>
//                         <p className=' pt-1 font-semibold text-[14px] pl-6'>End Date : {user?.subEndDate} ({daysDifference} days)</p>
//                     </div>
//                 </div>
//             }

//         </div>
//     </>
// )
