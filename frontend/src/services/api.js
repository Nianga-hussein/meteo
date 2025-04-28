import axios from 'axios';

export const fetchWeather = async (city) => {
  const { data } = await axios.get(`/api/weather?city=${city}`);
  return data;
};