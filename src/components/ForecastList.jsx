import React from 'react';

const ForecastList = ({ forecast }) => {
  if (!forecast) {
    return (
      <p className="text-center text-gray-600">
        No forecast data available.
      </p>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-blue-500">5-Day Forecast</h3>
      <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {forecast.map((day, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md text-center"
          >
            <p className="font-semibold text-gray-700">
              {new Date(day.dt * 1000).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500">
              Temp: {Math.round(day.main.temp)}°C
            </p>
            <p className="text-sm text-gray-500">
              {day.weather[0].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastList;
