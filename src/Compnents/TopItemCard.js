import React from 'react';
import { Link } from 'react-router-dom';
const TopItemCards = ({ data }) => {
  return (
    <Link to={`/TopItem/${data?.menu_name}`} className="w-full">
    <div className="p-2 bg-white shadow-lg rounded-xl w-full hover:shadow-xl cursor-pointer">
      <div className="flex flex-col items-center text-center space-y-3">
        <img 
          className="w-20 h-auto object-cover rounded-full border-4 border-gray-200 shadow-md" 
          src={data?.menu_image} 
          alt={data?.menu_name} 
        />
        <span className="text-md font-semibold text-gray-800">{data?.menu_name}</span>
      </div>
    </div>
    </Link>
  );
};

export default TopItemCards;
