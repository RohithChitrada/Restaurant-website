import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../Context/ShopContext';

const Navbar = () => {
  const [Menu,SetMenu]=useState(false);
  const {getLength}=useShop();
  return (
    <div className="shadow-lg">
      <div className="flex justify-between items-center px-6 py-4">
        <img className="w-16 md:w-20" src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp" alt="logo" />
        <ul className="hidden md:flex space-x-10">
          <Link to="/" className="p-2 cursor-pointer hover:text-gray-500">Home</Link>
          <Link to="/contact" className="p-2 cursor-pointer hover:text-gray-500">Contact</Link>
          <Link to="/cart" className="p-2 cursor-pointer hover:text-gray-500">Cart
          {getLength() > 0 && (
            <span className="absolute top-7 right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
            {getLength()}
          </span>
      
          )}
          </Link>
        </ul>
        <button className=" block text-4xl md:hidden p-2 text-gray-600 hover:text-gray-950 focus:outline-none" onClick={()=> SetMenu(!Menu)}>≡</button>
      </div>

      {/*mobile navbar */}
      <ul className={`${Menu?'block':'hidden'} md:hidden w-full bg-white text-center shadow-md space-y-1`}>
          <Link to="/" className=" block p-2 cursor-pointer hover:text-gray-500">Home</Link>
          <Link to="/contact" className=" block p-2 cursor-pointer hover:text-gray-500">Contact</Link>
          <Link to="/cart" className="block p-2 cursor-pointer hover:text-gray-500">Cart
          {getLength() > 0 && (
            <span className="absolute bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
            {getLength()}
          </span>
      
          )}
          </Link>
      </ul>
    </div>
  );
};

export default Navbar;
