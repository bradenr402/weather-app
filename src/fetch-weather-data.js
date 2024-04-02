import saveLastLocation from './save-last-location';

const API_KEY = '3b5e7413d81949a3b17232658242103';
export const DAYS = 10;

export default async function fetchWeatherData(search) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${search}&aqi=yes&days=${DAYS}`,
    { mode: 'cors' },
  );
  const data = await response.json();
  // eslint-disable-next-line no-console
  console.log(data);

  saveLastLocation(data.location);

  return data;
}
