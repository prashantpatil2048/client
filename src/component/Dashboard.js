import React from 'react'
import MyTable from './MyTable'

const Dashboard = () => {
  return (
    <div className="fixed top-15 left-0 w-full h-full bg-slate-100 bg-opacity-50 flex items-center justify-center">
      {/* Your content goes here */}
      <div className=" bg-white bg-opacity-80 h-full w-full rounded-sm mt-10 mx-4 ">

        {/* Add your modal content */}
        <div className=''>
          <div className=" my-10">
            <MyTable />
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
