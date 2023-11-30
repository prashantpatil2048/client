import React from 'react'

const Createads = () => {
    return (
        <div className="fixed top-15 left-0 w-full h-full bg-slate-100 bg-opacity-50 flex items-center justify-center">
            {/* Your content goes here */}
            <div className=" bg-white bg-opacity-80 h-full w-full rounded-sm mt-10 mx-4 ">
                <h4 className="text-xl  mt-2 ml-2">Create Ads</h4>
                {/* Add your modal content */}
                <div className='flex items-center justify-center'>
                    <div className="bg-white bg-opacity-400 px-16 py-32 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Text Ad</h2>
                        <p>Your modal content goes here.</p>
                    </div>
                    <div className="bg-white bg-opacity-400 px-16 py-32 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Media Ad</h2>
                        <p>Your modal content goes here.</p>
                    </div>
                </div>
                <div className='flex justify-end mr-4'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded">
                Next
              </button>
              </div>
            </div>
        </div>
    )
}

export default Createads
