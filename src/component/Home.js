import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    function addfrom(e){
        e.preventDefault();
        setIsOpen(true);
        setTimeout(()=>{
            setIsOpen(false);
            navigate('/createads');
            
        },6000)
    }
    return (
        <div className="fixed top-15 left-0 w-full h-full bg-slate-100 bg-opacity-50 flex items-center justify-center">
            {/* Your content goes here */}
            <div className=" bg-white bg-opacity-80 h-full w-full rounded-sm mt-10 mx-4 ">
                <h4 className="text-xl mx-5 mt-2">Create Text & Media</h4>
                {/* Add your modal content */}

                <div className="mx-5 my-2 grid grid-cols-2 space-x-6">
                    <div>
                        <label className="block text-black-100 text-sm font-medium mb-2" htmlFor="username">
                            Heading 01
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-black-100 leading-tight  "
                            id="username"
                            type="text"
                            placeholder="Add the heading that would make users interest"
                        />
                        <label className="pt-5 block text-black-100 text-sm font-medium mb-2" htmlFor="username">
                        Heading 02
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-black-100 leading-tight  "
                            id="username"
                            type="text"
                            placeholder="Add the heading that would make users interest"
                        />
                    </div>
                    <div>
                        <label className="block text-black-100 text-sm font-medium mb-2" htmlFor="username">
                           Description 01
                        </label>

                        <textarea
                        className="appearance-none border rounded w-full h-full mb-6 px-3 text-black-100 leading-tight"
                        id="username"
                        placeholder="Add primary text to help users understand more about your products, services, or offers"
                      />
                      

                    </div>
                </div>

                <div className="mx-4 my-2 grid grid-cols-3 space-x-6">
                    <div>
                        <label className="pt-5 block text-black-100 text-sm font-medium mb-2" htmlFor="username">
                            Landscape Marketing Image (1.9:1)
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-black-100 leading-tight  "
                            id="username"
                            type="text"
                            placeholder="Add the URL of the Image you want to use for the ad"
                        />
                    </div>
                    <div>
                        <label className="pt-5 block text-black-100 text-sm font-medium mb-2" htmlFor="username">
                        Portrait Marketing Image (4:5)
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-black-100 leading-tight  "
                            id="username"
                            type="text"
                            placeholder="Add the URL of the Image you want to use for the ad"
                        />
                    </div>
                    <div>
                        <label className="pt-5 block text-black-100 text-sm font-medium mb-2" htmlFor="username">
                       Square Marketing Image (1:1)
                        </label>

                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-black-100 leading-tight  "
                            id="username"
                            type="text"
                            placeholder="Add the URL of the Image you want to use for the ad"
                        />
                    </div>
                </div>
                <div className="mx-4 my-2">
                    <label className="pt-5 block text-black-100 text-sm font-medium mb-2" htmlFor="username">
                        Video URL
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-black-100 leading-tight  "
                        id="username"
                        type="text"
                        placeholder="Add the URL of the video you want to use for the ad"
                    />
                </div>
                <div className="mx-4 my-2 grid grid-cols-2 space-x-6">
                    <div>
                        <label className="pt-5 block text-black-100 text-sm font-medium mb-2" htmlFor="username">
                           Business Name
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-black-100 leading-tight  "
                            id="username"
                            type="text"
                            placeholder="Add your business name"
                        />
                    </div>
                    <div>
                        <label className="pt-5 block text-black-100 text-sm font-medium mb-2" htmlFor="username">
                           Button Label
                        </label>

                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-black-100 leading-tight  "
                            id="username"
                            type="text"
                            placeholder="Select a label that best suits your ad"
                        />
                    </div>
                </div>
                <div className="mx-4 my-2">
                    <label className="pt-5 block text-black-100 text-sm  font-medium mb-2" htmlFor="username">
                        Website URL
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-black-100 leading-tight  "
                        id="username"
                        type="text"
                        placeholder="Add the URL of the landing page you want to redirect users to"
                    />
                </div>
                <div className='flex justify-end mt-4'>
                    <button className="bg-slate-100 hover:bg-blue-700 text-black border mr-4 font-medium py-2 px-10 rounded">
                        Back
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white mr-4 font-medium py-2 px-10 rounded" onClick={addfrom}>
                        Submit
                    </button>
                </div>
                {isOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                      <div className="bg-blue-500 text-black px-32 py-16  rounded">
                    
                        <p>Submitted.</p>
                        
                      </div>
                    </div>
                  )}
            </div>
        </div>
    )
}

export default Home
