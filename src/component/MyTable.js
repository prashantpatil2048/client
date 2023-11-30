import React, { useState } from 'react';

const MyTable = () => {
  const [data, setData] = useState([
    { id: 1, Campaigns: 'Cosmatics', Clicks: 712, Cost: 165568, Conversions: 8, Revenue: 16568 },
    { id: 2, Campaigns: 'Serums', Clicks: 3961, Cost: 27331, Conversions: 115, Revenue: 362526 },
    { id: 3, Campaigns: 'Facewash', Clicks: 9462, Cost: 76831, Conversions: 123, Revenue: 266800 },
    { id: 4, Campaigns: 'Shampoos', Clicks: 439, Cost: 2151, Conversions: 5, Revenue: 11029 },
    { id: 5, Campaigns: 'Conditioners', Clicks: 1680, Cost: 3864, Conversions: 49, Revenue: 175245 },
    { id: 6, Campaigns: 'Facewash 2', Clicks: 4978, Cost: 29370, Conversions: 189, Revenue: 623106 },
    // Add more data as needed
  ]);

  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending
  const [sortKey, setSortKey] = useState(null);

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
    <div className="max-w-md mx-auto my-10">
      <div className="shadow border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('Campaigns')}
              >
              Campaigns {sortKey === 'Campaigns' && sortOrder === 'asc' ? '↑' : '↓'}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('Clicks')}
              >
              Clicks {sortKey === 'Clicks' && sortOrder === 'asc' ? '↑' : '↓'}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('Cost')}
              >
              Cost{sortKey === 'Cost' && sortOrder === 'asc' ? '↑' : '↓'}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('Conversions')}
              >
              Conversions {sortKey === 'Conversions' && sortOrder === 'asc' ? '↑' : '↓'}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('Revenue')}
              >
              Revenue{sortKey === 'Revenue' && sortOrder === 'asc' ? '↑' : '↓'}
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTable;
