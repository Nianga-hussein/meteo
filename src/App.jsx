import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';
import { fetchWeatherData } from './services/weatherService';


function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeatherData(city);
      setWeather(data);
      setError(null);
    } catch (err) {
      setError('Ville introuvable ou problème réseau.');
      setWeather(null);
    }
  };

  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      {weather && <WeatherInfo data={weather} />}
    </div>
  );
}

export default App;