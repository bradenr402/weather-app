const weather_api_key = '3b5e7413d81949a3b17232658242103';

export default async function fetchWeatherData(search) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${weather_api_key}&q=${search}`,
    { mode: 'cors' }
  );
  const data = await response.json();
  console.log(data);
  return data;
}
