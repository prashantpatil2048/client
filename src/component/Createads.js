import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Createads = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedm, setIsCheckedm] = useState(false);
  const [text, setText] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  function addfrom(e) {
    e.preventDefault();
    localStorage.setItem('saveText', text);
    localStorage.setItem('savefile', file?.name);


    navigate('/');


  } 
  const handleFileChange = (e) => {
    const files = e.target.files?.[0] || null;
    setFile(files)
  }

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
            {isChecked ? (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Text Input</label>
                <input
                  type="text"
                  className="mt-1 p-2 border rounded-md w-full"
                  value={text}
                  onChange={(e)=>{setText(e.target.value)}}
                  placeholder="Enter text"
                />
              </div>
            ) : <p className="text-slate-300 flex justify-center">Create</p>}

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
            {isCheckedm ? (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Media Input</label>
                <input
                  type="file"
                  className="mt-1 p-2 border rounded-md w-full"
                  // value={file}
                  onChange={handleFileChange}
                  accept="image/*, video/*"
                />
              </div>
            ) : <p className="text-slate-300 flex justify-center">Create</p>}

            <h2 className="text-2xl font-bold flex justify-center mb-4">Media Ad</h2>

          </div>
        </div>
        <div className='flex justify-end mr-4'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded" onClick={addfrom}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Createads
