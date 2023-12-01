import React, { useState } from 'react';
import MyTable from './MyTable'
import PieChartWithPaddingAngle from './Insights'
import InTable from './InTable';

const Dashboard = () => {
  const [showChart, setShowChart] = useState(true);
  return (
    <div className="fixed top-15 left-0 w-full h-full bg-slate-100 bg-opacity-50 flex items-center justify-center">
      {/* Your content goes here */}
      <div className=" bg-white bg-opacity-80 h-full w-full rounded-sm mt-10 mx-4 ">

        {/* Add your modal content */}
        <div className='flex justify-between'>
          <div className=" my-10">

            <MyTable />
          </div>
          <div className="bg-white bg-opacity-400 px-16 py-12 rounded-lg">
            <div className="bg-white bg-opacity-50 px-6 py-4 border-2 flex justify-between border-slate-200">
              <label>Ad Insights</label>
              <button
                onClick={() => setShowChart(!showChart)}
                className="px-4  bg-white text-black rounded-md border-2 focus:outline-none focus:ring focus:border-blue-300"
              >
                Clicks   ^
              </button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>

            </div>
            {showChart ? <PieChartWithPaddingAngle /> : <InTable />}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dashboard
