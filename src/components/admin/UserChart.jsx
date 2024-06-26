import React from "react";
import {
	Area,
	AreaChart,
	CartesianGrid,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const UserChart = () => {
	const data = [
		{ uv: 4000, pv: 2400 },
		{ uv: 3000, pv: 1398 },
		{ uv: 2000, pv: 9800 },
		{ uv: 2780, pv: 3908 },
		{ uv: 1890, pv: 4800 },
		{ uv: 2390, pv: 3800 },
		{ uv: 3490, pv: 4300 },
	];

	const moments = ["TODAY", "YESTERDAY", "WEEK", "MONTH", "YEAR"];

	return (
		<div>
			<h2 className="text-2xl font-bold text-gray-700">Verification Summary</h2>
			<h4 className="font-bold text-gray-600">Sun, 23 Jun 2024</h4>

			<div className='my-10 grid grid-cols-5 mx-auto'>
				{moments.map((moment, index) => (
					<button
						key={index}
						className={`text-sm text-center bg-gray-200
						} py-2 font-medium`}
					>
						{moment}
					</button>
				))}
			</div>

			<div className='flex justify-center'>
				<AreaChart
					width={1240}
					height={250}
					data={data}
					margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
				>
					<defs>
						<linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='5%' stopColor='#888dff' stopOpacity={0.8} />
							<stop offset='95%' stopColor='#888dff' stopOpacity={0} />
						</linearGradient>
						<linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
							<stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
						</linearGradient>
					</defs>
					{/* <XAxis dataKey='name' /> */}
					<YAxis />
					<CartesianGrid strokeDasharray='3 3' />
					<Tooltip />
					<Area
						type='monotone'
						dataKey='uv'
						stroke='#FF0000'
						fillOpacity={1}
						fill='url(#colorUv)'
					/>
					<Area
						type='monotone'
						dataKey='pv'
						stroke='#82ca9d'
						fillOpacity={1}
						fill='url(#colorPv)'
					/>
				</AreaChart>
			</div>
		</div>
	);
};

export default UserChart;
