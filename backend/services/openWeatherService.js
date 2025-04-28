import axios from 'axios';

export const fetchWeatherREST = async (city) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const { data } = await axios.get(url);

  return {
    city: data.name,
    temperature: `${data.main.temp}°C`,
    humidity: data.main.humidity,
  };
};