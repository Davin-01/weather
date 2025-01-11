import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import Footer from "./components/Footer";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    const apiKey = "bfb17fc12b28a4f2b012023c93dbc587"; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather({
        city: data.name,
        temp: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
      });
      setError(null); // Clear any previous error
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow">
        <SearchBar onSearch={handleSearch} />
        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}
        <WeatherDisplay weather={weather} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
