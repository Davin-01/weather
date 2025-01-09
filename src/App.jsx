import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ForecastList from './components/ForecastList';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState('');

  const fetchWeatherData = async (city) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${London}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${London}&appid=${apiKey}&units=metric`;

    try {
      setError(''); // Clear any previous errors

      // Fetch current weather
      const weatherResponse = await axios.get(weatherUrl);

      // Fetch 5-day forecast
      const forecastResponse = await axios.get(forecastUrl);

      setWeather(weatherResponse.data);
      setForecast(forecastResponse.data.list); // List of forecast data
    } catch (err) {
      console.error(err);
      setError('Unable to fetch data. Please check the city name and try again.');
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-blue-500">
        Weather App
      </h1>
      <SearchBar onSearch={fetchWeatherData} />
      {error && <p className="text-center text-red-500">{error}</p>}
      <WeatherDisplay weather={weather} />
      <ForecastList forecast={forecast} />
    </div>
  );
};

export default App;
