import React from 'react';

function WeatherInfo({ data }) {
  return (
    <div className="weather-info">
      <h2>{data.name}, {data.sys.country}</h2>
      <p>Température: {Math.round(data.main.temp)}°C</p>
      <p>Ressenti: {Math.round(data.main.feels_like)}°C</p>
      <p>Humidité: {data.main.humidity}%</p>
      <p>Vent: {Math.round(data.wind.speed)} km/h</p>
      <p>Condition: {data.weather[0].description}</p>
    </div>
  );
}

export default WeatherInfo;