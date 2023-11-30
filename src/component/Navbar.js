import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="shadow-lg p-4">
      <div className="container mx-auto flex justify-between">
     
        <Link to="/" className="text-black font-bold text-xl">APP LOGO</Link>
       
        <div>
        <Link to="/dashboard" className="text-black ml-4">DASHBOARD</Link>
        <Link to="/createads" className="text-black ml-4">CREATE ADS</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
