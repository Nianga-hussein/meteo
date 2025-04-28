import React, { useState } from 'react';
import { fetchWeather } from './services/api';
import { WeatherCard } from './components/WeatherCard';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      console.error(err);
      alert('Erreur lors de la récupération de la météo');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
        <input
          type="text"
          placeholder="Entrez une ville..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 rounded-xl shadow-md"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-xl">Rechercher</button>
      </form>

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;