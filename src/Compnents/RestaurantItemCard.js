import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantItemCard = ({ data }) => {

  return (
    <Link to={`/ItemDetails/${data?._id}`}>
    <div className="w-auto bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer">
      <img 
        src={data?.image} 
        alt={data?.name} 
        className="w-full h-56 object-cover"
      />
      
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{data?.name}</h2>
        
        <p className="text-gray-600 text-sm my-2">{data?.description}</p>
        
        <p className="text-lg font-bold text-green-600">Rs{data?.price*15}/-</p>
        
        {/* Add to Cart Button */}
        <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
    </Link>
  );
};

export default RestaurantItemCard;
