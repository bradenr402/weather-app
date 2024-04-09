import './style.css';
import fetchWeatherData, { DAYS } from './fetch-weather-data';
import getLastLocation from './get-last-location';
import updateWeatherData from './update-weather-data';
import updateDailyForecastData from './update-daily-forecast-data';
import generateDailyForecastList from './generate-daily-forecast-list';
import generateWeatherList from './generate-weather-list';
import geoLocate from './geolocation';

window.addEventListener('load', () => {
  const weatherContainer = document.getElementById('current-weather');
  const weatherList = generateWeatherList();
  weatherContainer.appendChild(weatherList);

  const forecastContainer = document.getElementById('weather-forecast');
  // Generate forecast lists for numbers 1 through 6
  for (let i = 0; i < DAYS; i++) {
    const forecastList = generateDailyForecastList(i);
    forecastContainer.appendChild(forecastList);
  }

  const lastLocation = getLastLocation();
  fetchWeatherData(lastLocation).then((data) => {
    updateWeatherData(data);
    updateDailyForecastData(data);
  });
});

const form = document.getElementById('search-form');
const searchField = document.getElementById('search');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchField.value;

  fetchWeatherData(searchTerm).then((data) => {
    updateWeatherData(data);
    updateDailyForecastData(data);
  });
  form.reset();
});

const currentLocationBtn = document.getElementById('current-location');
currentLocationBtn.addEventListener('click', () => {
  geoLocate()
    .then((location) => {
      const currentLocation = `${location.lat},${location.lng}`;
      fetchWeatherData(currentLocation).then((data) => {
        updateWeatherData(data);
        updateDailyForecastData(data);
      });
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
});
