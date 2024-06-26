import React from 'react';

const stats = [
  {
    title: 'Revenue',
    value: '$405,091.00',
    percentage: '+4.75%',
    percentageColor: 'text-green-500',
  },
  {
    title: 'Overdue invoices',
    value: '$12,787.00',
    percentage: '+54.02%',
    percentageColor: 'text-red-500',
  },
  {
    title: 'Outstanding invoices',
    value: '$245,988.00',
    percentage: '-1.39%',
    percentageColor: 'text-red-500',
  },
  {
    title: 'Expenses',
    value: '$30,156.00',
    percentage: '+10.18%',
    percentageColor: 'text-red-500',
  },
];

const StatsCard = () => {
  return (
    <div className="bg-white shadow-md border border-primary rounded-lg p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className={`border-r-[1px] border-alternative last:border-none`}>
          <p className="text-gray-600 mb-2">{stat.title}</p>
          <p className="text-2xl font-bold mb-1">{stat.value}</p>
          <p className={`${stat.percentageColor}`}>{stat.percentage}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
