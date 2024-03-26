import './style.css';
import fetchWeatherData from './fetch-weather-data';
import getLastLocation from './get-last-location';
import updateWeatherData from './update-weather-data';
import updateForecastData from './update-forecast-data';
import generateForecastList from './generate-forecast-list';
import generateDataList from './generate-data-list';

window.addEventListener('load', () => {
  const dataContainer = document.querySelector('.current-weather');
  const dataList = generateDataList();
  dataContainer.appendChild(dataList);

  const forecastContainer = document.querySelector('.weather-forecast');
  // Generate forecast lists for numbers 1 through 6
  for (let i = 0; i <= 6; i++) {
    const forecastList = generateForecastList(i);
    forecastContainer.appendChild(forecastList);
  }

  const lastLocation = getLastLocation();
  fetchWeatherData(lastLocation).then((data) => {
    updateWeatherData(data);
    updateForecastData(data);
  });
});

const form = document.querySelector('form');
const searchField = document.getElementById('search');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchField.value;

  fetchWeatherData(searchTerm).then((data) => {
    updateWeatherData(data);
    updateForecastData(data);
  });
  form.reset();
  searchField.blur();
});
