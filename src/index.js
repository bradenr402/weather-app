import './style.css';
import fetchWeatherData, { DAYS } from './fetch-weather-data';
import getLastLocation from './get-last-location';
import updateWeatherData from './update-weather-data';
import updateForecastData from './update-forecast-data';
import generateForecastList from './generate-forecast-list';
import generateDataList from './generate-data-list';
import geoLocate from './geolocation';

window.addEventListener('load', () => {
  const weatherContainer = document.getElementById('current-weather');
  const dataList = generateDataList();
  weatherContainer.appendChild(dataList);

  const forecastContainer = document.getElementById('weather-forecast');
  // Generate forecast lists for numbers 1 through 6
  for (let i = 0; i < DAYS; i++) {
    const forecastList = generateForecastList(i);
    forecastContainer.appendChild(forecastList);
  }

  const lastLocation = getLastLocation();
  fetchWeatherData(lastLocation).then((data) => {
    updateWeatherData(data);
    updateForecastData(data);
  });
});

const form = document.getElementById('search-form');
const searchField = document.getElementById('search');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchField.value;

  fetchWeatherData(searchTerm).then((data) => {
    updateWeatherData(data);
    updateForecastData(data);
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
        updateForecastData(data);
      });
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
});
