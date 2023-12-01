import React, { useState } from 'react';
import MyTable from './MyTable'
import PieChartWithPaddingAngle  from './Insights'
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
          <div className="bg-white bg-opacity-400 px-16 py-32 rounded-lg">
          <div className=" bg-white bg-opacity-80 h-full w-full rounded-sm mt-10 mx-4 ">
          
          <div className="container mx-auto mt-8">
      <div className="flex items-center mb-4">
        <label className="mr-2">Show Doughnut Chart:</label>
        <input
          type="checkbox"
          checked={showChart}
          onChange={() => setShowChart(!showChart)}
          className="form-checkbox h-5 w-5 text-blue-500"
        />
      </div>

      {showChart ?<PieChartWithPaddingAngle /> : <InTable/>}
    </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
