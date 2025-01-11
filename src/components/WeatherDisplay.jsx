const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold text-gray-800">{weather.city}</h2>
      <p className="text-gray-600">{weather.description}</p>
      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-2xl font-bold">{weather.temp}°C</p>
          <p className="text-gray-600">Temperature</p>
        </div>
        <div>
          <p className="text-lg font-bold">{weather.humidity}%</p>
          <p className="text-gray-600">Humidity</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
