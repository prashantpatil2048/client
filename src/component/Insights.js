import React from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

const chartData = [
  { name: '40% Male', value: 40  },
  { name: '35% Female', value: 35 },
  { name: '25% Unknown', value: 25  },
];

const COLORS = ['#ff7843', 'blue', 'black'];

const PieChartWithPaddingAngle = () => {
  return (
    <div className="max-w-md mx-auto my-10">
    <div className="shadow border-b border-gray-200 sm:rounded-lg">
    <PieChart width={400} height={400}>
      <Pie
        data={chartData}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5} // Adjust the padding angle as needed
        dataKey="value"
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
    </div></div>
  );
};

export default PieChartWithPaddingAngle;

