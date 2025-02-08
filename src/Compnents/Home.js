import React, { useEffect, useState } from "react";
import { menu_list } from "../asserts/assets";
import { food_list } from "../asserts/assets";
import RestaurantCard from "./TopItemCard";
import RestaurantItemCard from "./RestaurantItemCard";

const Home = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(food_list);
  const [rating, setRating] = useState(false);

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleRating = () => {
    setRating(!rating);
  };

  useEffect(() => {
    setFilter(
      food_list.filter((item) =>
        (search.trim() === "" || item.name.toLowerCase().includes(search.toLowerCase())) && 
        (!rating || item.rating >= 4.5)
      )
    );
  }, [search, rating]);

  return (
    <div className="p-3">
      <input
        type="text"
        placeholder="Enter the name"
        className="p-2 border border-black text-l rounded-lg"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button onClick={handleRating} className="p-2 mx-5 text-white rounded-lg border border-blue-500 bg-blue-500 hover:bg-blue-600">{rating?"Show All":"Top Rated Items"}</button>

      <div className="flex flex-row space-x-6 overflow-x-auto p-5">
        {menu_list.map((item, index) => (
          <RestaurantCard key={index} data={item} />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filter.length === 0 ? (
          <h1 className="text-5xl text-gray-500 font-bold text-center col-span-full">Item Not Found</h1>
        ) : (
          filter.map((item, index) => (
            <RestaurantItemCard data={item} key={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
