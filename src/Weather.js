/* eslint-disable */


import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [json, setJson] = useState(null); // Added state for JSON data
  const API_KEY = 'dc7a374f922e172f90f601f574a875a4';

  const handleCity = (name) => {
    setCity(name);
  };

  useEffect(() => {
    if (city) {
      fetchData();  // Only fetch data if city is not empty
    }
  }, [city]);  // Run when city changes

  const fetchData = async () => {
    setLoading(true);
    const data = await fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`);
    const jsonData = await data.json(); // Parsing the JSON data correctly
    setJson(jsonData); // Save the fetched data to the state
    setLoading(false);
  };

  return (
    <div>
      <div>
        <p>The Weather App</p>
        <input
          type="text"
          value={city}
          placeholder="Enter the city Name"
          onChange={(e) => handleCity(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        json && json.current && (
          <div>
            <h1>{city}</h1>
            <h2>Temperature: {json.current.temperature}°C</h2>
            <h3>{json.current.weather_descriptions[0]}</h3>
            <img
              src={json.current.weather_icons[0]}
              alt={json.current.weather_descriptions[0]}
            />
            <p>Wind Speed: {json.current.wind_speed} km/h</p>
            <p>Humidity: {json.current.humidity}%</p>
            <p>Pressure: {json.current.pressure} hPa</p>
            <p>Feels Like: {json.current.feelslike}°C</p>
            <p>UV Index: {json.current.uv_index}</p>
            <p>Visibility: {json.current.visibility} km</p>
          </div>
        )
      )}
    </div>
  );
};

export default Weather;
