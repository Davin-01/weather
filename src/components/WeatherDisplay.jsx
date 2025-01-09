import React from 'react';

const WeatherDisplay = ({ weather }) => {
  if (!weather) {
    return (
      <p className="text-center text-gray-600">
        No data to display. Search for a city!
      </p>
    );
  }

  const { name, main, weather: weatherDetails } = weather;

  return (
    <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-600">{name}</h2>
      <div className="mt-4 text-gray-700">
        <p className="text-lg">Temperature: {Math.round(main.temp)}°C</p>
        <p>Condition: {weatherDetails[0].description}</p>
        <p>Humidity: {main.humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
