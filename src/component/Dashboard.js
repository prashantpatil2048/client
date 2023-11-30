import React from 'react'

const Dashboard = () => {
  return (
    <div className="fixed top-15 left-0 w-full h-full bg-slate-100 bg-opacity-50 flex items-center justify-center">
            {/* Your content goes here */}
            <div className=" bg-white bg-opacity-80 h-full w-full rounded-sm mt-10 mx-4 ">
                
                {/* Add your modal content */}
                <div className='flex '>
                <div className=" my-10">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-sm">
                  <table className="w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                         Campaigns
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                         Clicks
                        </th>
                        <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                       Cost
                      </th>
                      <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                     Conversions
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                     Revenue
                    </th>
                        {/* Add more table headers as needed */}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                        <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
                        <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
                        <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
                        {/* Add more table rows as needed */}
                      </tr>
                      <tr>
                      <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                      <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
                      <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
                      <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
                      {/* Add more table rows as needed */}
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
                    <div className="bg-white bg-opacity-400 px-16 py-32 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Media Ad</h2>
                        <p>Your modal content goes here.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Dashboard
