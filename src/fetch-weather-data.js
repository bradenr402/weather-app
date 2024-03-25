const API_KEY = '3b5e7413d81949a3b17232658242103';

export default async function fetchWeatherData(search) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${search}`,
    { mode: 'cors' },
  );
  const data = await response.json();
  console.log(data);
  return data;
}
