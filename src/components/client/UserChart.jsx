import React, { useEffect, useState } from "react";
import {
	Area,
	AreaChart,
	CartesianGrid,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import moment from 'moment'
import { getDataForPeriod } from "../../../Middleware/Chart";
import { useUserContext } from "../../context/Context";

const UserChart = () => {

	const data = [];
	const { user } = useUserContext()
	const [selector, setSelector] = useState("WEEK")
	const moments = ["TODAY", "YESTERDAY", "WEEK", "MONTH", "YEAR"];
	const [chartData, setChartData] = useState([]);



	useEffect(() => {
		if (user) {
			const x = getDataForPeriod(selector, user?.apiUsageHistory)
			setChartData(x)
		}
	}, [user, selector]);


	return (
		<div className=" w-full ">
			<h2 className="text-2xl font-bold text-gray-700">Verification Summary</h2>
			<h4 className="font-bold text-gray-600">Sun, 23 Jun 2024</h4>

			<div className='my-10 grid grid-cols-5 gap-2 relative mx-auto'>
				{moments.map((moment, index) => (
					<button
						onClick={() => setSelector(moment)}
						key={index}
						className={`text-[11px] sm:text-[15px] rounded-full text-center ${moment === selector ? "bg-purple-600 text-white  border-r-[3px]  border-gray-700" : "bg-gray-200  border-r-2 border-gray-400"}
					 	py-2 font-medium `}
					>
						{moment}
					</button>
				))}
			</div>

			<br />
			{/* {
				user &&
				<button onClick={() => console.log('chart data', getDataForPeriod(selector, user?.apiUsageHistory))} className=" py-2 px-6 rounded-full text-white bg-primary">Get Data</button>
			} */}
			<br />
			<div className='flex w-[80vw]  md:w-full md:overflow-hidden overflow-x-scroll justify-center'>
				<div className="">
					{
						chartData?.length > 0 &&
						<AreaChart
							width={1000}
							height={250}
							data={chartData}
							margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
						>
							<defs>
								<linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
									<stop offset='5%' stopColor='#E57373' stopOpacity={0.8} />
									<stop offset='95%' stopColor='#E57373' stopOpacity={0} />
								</linearGradient>
								<linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
									<stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
									<stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
								</linearGradient>
								<linearGradient id='colorBv' x1='0' y1='0' x2='0' y2='1'>
									<stop offset='5%' stopColor='#727272' stopOpacity={0.8} />
									<stop offset='95%' stopColor='#727272' stopOpacity={0} />
								</linearGradient>
							</defs>
							<XAxis dataKey='Date'  />
							<YAxis />
							<CartesianGrid strokeDasharray='3 3' />
							<Tooltip />
							<Area
								type='monotone'
								dataKey='invalid'
								stroke='red'
								fillOpacity={1}
								fill='url(#colorUv)'
							/>
							<Area
								type='monotone'
								dataKey='deliverable'
								stroke='green'
								fillOpacity={1}
								fill='url(#colorPv)'
							/>
							<Area
								type='monotone'
								dataKey='apiUsage'
								stroke='black'
								fillOpacity={1}
								fill='url(#colorBv)'
							/>
						</AreaChart>
					}
				</div>
			</div>
		</div>
	);
};

export default UserChart;
