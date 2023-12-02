import React from 'react';

const InTable = () => {
  const data = ([
    { id: 1,  Person: 'Male', Persentage: 40},
    { id: 2,  Person: 'Female', Persentage:25},
    { id: 3,  Person: 'Unknown', Persentage: 35},
    
    // Add more data as needed
  ]);



 

  return (
    <div className="max-w-md mx-auto my-10">
      <div className="shadow border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
          
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                
              >
             id
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
             
              >
             Person
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
               
              >
             Persentage
              </th>
            
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
         
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.Person}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.Persentage}%</td>
              </tr>
            ))}
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InTable;
