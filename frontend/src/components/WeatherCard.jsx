import { useEffect, useState } from "react";
function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/weather?city=Paris')
      .then(response => response.json())
      .then(data => setWeather(data))
      .catch(error => console.error('Erreur:', error));
  }, []);

  if (!weather) return <div>Chargement...</div>;

  return (
  <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white p-6 rounded-3xl shadow-2xl w-full max-w-md">
  <div className="flex items-center justify-between mb-4">
    <div>
      <h2 className="text-2xl font-bold">{weather.city}</h2>
      <p className="text-sm opacity-80">Partiellement nuageux</p>
    </div>
    <div className="text-5xl">
      🌤️
    </div>
  </div>
  <div className="flex justify-between items-center">
    <div className="text-6xl font-bold">
      {weather.temperature}
    </div>
    <div className="flex flex-col text-sm space-y-1 text-right">
      <p>💧 Humidité: {weather.humidity}%</p>
      <p>🌍 Source: <span className="font-semibold">{weather.source}</span></p>
    </div>
  </div>
</div>

);
}

export default WeatherCard;