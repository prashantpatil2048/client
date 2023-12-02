import React, { useState, useEffect } from 'react';

const MyTable = () => {
  const [data, setData] = useState([
    { id: 1, Campaigns: 'Cosmatics', Clicks: 712, Cost: 4272, Conversions: 8, Revenue: 16568 },
    { id: 2, Campaigns: 'Serums', Clicks: 3961, Cost: 27331, Conversions: 115, Revenue: 362526 },
    { id: 3, Campaigns: 'Facewash', Clicks: 9462, Cost: 76831, Conversions: 123, Revenue: 266800 },
    { id: 4, Campaigns: 'Shampoos', Clicks: 439, Cost: 2151, Conversions: 5, Revenue: 11029 },
    { id: 5, Campaigns: 'Conditioners', Clicks: 1680, Cost: 3864, Conversions: 49, Revenue: 175245 },
    { id: 6, Campaigns: 'Facewash 2', Clicks: 4978, Cost: 29370, Conversions: 189, Revenue: 623106 },
    // Add more data as needed
  ]);

  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending
  const [sortKey, setSortKey] = useState(null);
  useEffect(() => {
    const calculateTotals = () => {
      const totalClicks = data.reduce((total, item) => total + item.Clicks, 0);
      const totalCost = data.reduce((total, item) => total + item.Cost, 0);
      const totalConversions = data.reduce((total, item) => total + item.Conversions, 0);
      const totalRevenue = data.reduce((total, item) => total + item.Revenue, 0);
      setTotals({ totalClicks, totalCost,totalConversions ,totalRevenue });
    };
    calculateTotals();
  }, [data]);

  

  const [totals, setTotals] = useState({ totalClicks: 0, totalCost: 0,totalConversions: 0 ,totalRevenue: 0  });

  const handleSort = (key) => {
    const sortedData = [...data].sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
      } else if (typeof valueA === 'string' && typeof valueB === 'string') {
        return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      }

      return 0;
    });

    setData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setSortKey(key);
  };

  return (
    
      <div className="shadow border-2 border-gray-200 ml-4">
      <div className="bg-white bg-opacity-50 px-6 py-4 border-2 border-slate-200">
      <div className='flex justify-between'>
      <label>Ad Insights</label>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    </svg>
              </div>
     </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer"
                onClick={() => handleSort('Campaigns')}
              >
              Campaigns {sortKey === 'Campaigns' && sortOrder === 'asc' ? '^' : '↓'}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer"
                onClick={() => handleSort('Clicks')}
              >
              Clicks {sortKey === 'Clicks' && sortOrder === 'asc' ? '^' : '↓'}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer"
                onClick={() => handleSort('Cost')}
              >
              Cost{sortKey === 'Cost' && sortOrder === 'asc' ? '^' : '↓'}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer"
                onClick={() => handleSort('Conversions')}
              >
              Conversions {sortKey === 'Conversions' && sortOrder === 'asc' ? '^' : '↓'}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer"
                onClick={() => handleSort('Revenue')}
              >
              Revenue{sortKey === 'Revenue' && sortOrder === 'asc' ? '^' : '↓'}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
         
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">{item.Campaigns}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.Clicks}</td>
                <td className="px-6 py-4 whitespace-nowrap">USD {item.Cost}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.Conversions}</td>
                <td className="px-6 py-4 whitespace-nowrap">USD {item.Revenue}</td>
              </tr>
            ))}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">Total</td>
              <td className="px-6 py-4 whitespace-nowrap font-medium">{totals.totalClicks}</td>
              <td className="px-6 py-4 whitespace-nowrap font-medium">USD {totals.totalCost}</td>
              <td className="px-6 py-4 whitespace-nowrap font-medium">{totals.totalConversions}</td>
              <td className="px-6 py-4 whitespace-nowrap font-medium">USD {totals.totalRevenue}</td>
              </tr>
          </tbody>
        </table>
      </div>
    
  );
};

export default MyTable;
