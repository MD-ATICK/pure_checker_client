import React from 'react';


const StatsCard = ({ stats }) => {
  return (
    <div className="bg-white shadow-md border border-primary rounded-lg p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className={`border-r-[1px] border-alternative last:border-none`}>
          <p className="text-gray-600 mb-2">{stat.title}</p>
          <p className="text-2xl font-bold mb-1">{stat.value}</p>
          {/* <p className={`${stat.percentageColor}`}>{stat.percentage}</p> */}
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
