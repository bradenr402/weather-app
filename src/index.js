import './style.css';
import fetchWeatherData from './fetch-weather-data';
import getLastLocation from './get-last-location';
import updateWeatherData from './update-weather-data';

window.addEventListener('load', () => {
  const lastLocation = getLastLocation();
  fetchWeatherData(lastLocation).then((data) => updateWeatherData(data));
});

const form = document.querySelector('form');
const searchField = document.getElementById('search');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchField.value;

  fetchWeatherData(searchTerm).then((data) => updateWeatherData(data));
});
