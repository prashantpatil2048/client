import { useState } from "react"

const Createads = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedm, setIsCheckedm] = useState(false);


  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleCheckboxChangem = () => {
    setIsCheckedm(!isCheckedm);
  };
    return (
        <div className="fixed top-15 left-0 w-full h-full bg-slate-100 bg-opacity-50 flex items-center justify-center">
            {/* Your content goes here */}
            <div className=" bg-white bg-opacity-80 h-full w-full rounded-sm mt-10 mx-4 ">
                <h4 className="text-xl  mt-2 ml-2">Create Ads</h4>
                {/* Add your modal content */}
                <div className='flex items-center justify-center'>
                    <div className="bg-white shadow-md bg-opacity-400 px-16 py-32 m-4 rounded-lg">
                    <input
                    type="checkbox"
                    id="myCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                  />
                  <p className="text-slate-300 flex justify-center">Create</p>
                        <h2 className="text-2xl font-bold mb-4 flex justify-center">Text Ad</h2>
                        
                    </div>
                    <div className="bg-white shadow-md bg-opacity-400 px-16 py-32 m-4 rounded-lg">
                    <input
                    type="checkbox"
                    id="myCheckbox"
                    checked={isCheckedm}
                    onChange={handleCheckboxChangem}
                    className="form-checkbox h-5 w-5 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                  />
                  <p className="text-slate-300 flex justify-center">Create</p>
                        <h2 className="text-2xl font-bold flex justify-center mb-4">Media Ad</h2>
                        
                    </div>
                </div>
                <div className='flex justify-end mr-4'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded">
                Next
              </button>
              </div>
            </div>
        </div>
    )
}

export default Createads
