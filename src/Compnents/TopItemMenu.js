import React, { useState, useEffect } from 'react';
import { food_list } from '../asserts/assets';
import { useParams } from 'react-router-dom';
import RestaurantItemCard from './RestaurantItemCard';

const TopItemMenu = () => {
    const [MenuItems, setMenuItems] = useState([]);
    const { category } = useParams(); 
    console.log(category);

    useEffect(() => {
        const filteredData = food_list.filter(
            (item) => item.category.toLowerCase() === category.toLowerCase()
        );
        setMenuItems(filteredData);
    }, [category]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-2xl text-gray-800 font-bold" >{category}</h1>
            </div>

            {MenuItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {MenuItems.map((item, index) => (
                        <RestaurantItemCard key={index} data={item} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-lg text-gray-500">No items found in this category.</p>
            )}
        </div>
    );
};

export default TopItemMenu;
