import { fetchWeatherREST } from '../services/openWeatherService.js';
import { fetchWeatherGraphQL } from '../services/weatherGraphService.js';

export const getWeather = async (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: 'City parameter is required.' });
  }

  try {
    const [openWeather, weatherGraph] = await Promise.all([
      fetchWeatherREST(city),
      fetchWeatherGraphQL(city),
    ]);

    const normalized = {
      city: openWeather.city || weatherGraph.city,
      temperature: openWeather.temperature || weatherGraph.temperature,
      humidity: openWeather.humidity || weatherGraph.humidity,
      source: 'OpenWeatherMap | WeatherGraph',
    };

    res.json(normalized);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch weather data.' });
  }
};