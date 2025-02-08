import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="shadow-lg">
      <div className="flex justify-between items-center px-6 py-4">
        <img className="w-16 md:w-20" src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp" alt="logo" />
        <ul className="hidden md:flex space-x-10">
          <Link to="/" className="p-2 cursor-pointer hover:text-gray-500">Home</Link>
          <Link to="/about" className="p-2 cursor-pointer hover:text-gray-500">About</Link>
          <li className="p-2 cursor-pointer hover:text-gray-500">Contact</li>
          <li className="p-2 cursor-pointer hover:text-gray-500">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
