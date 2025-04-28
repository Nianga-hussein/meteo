
import { request, gql } from 'graphql-request';

const endpoint = 'https://weather-graphql.example.com/graphql'; // <- Mets ici l'URL du serveur GraphQL

export const fetchWeatherGraphQL = async (city) => {
  const query = gql`
    query GetWeather($city: String!) {
      weather(city: $city) {
        name
        temperature
        humidity
      }
    }
  `;

  const variables = { city };

  const data = await request(endpoint, query, variables);

  return {
    city: data.weather.name,
    temperature: `${data.weather.temperature}°C`,
    humidity: data.weather.humidity,
    source: "WeatherGraph"
  };
};
