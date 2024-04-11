import './style.css';
import fetchWeatherData, { DAYS } from './fetch-weather-data';
import getLastLocation from './get-last-location';
import updateWeatherData from './update-weather-data';
import updateDailyForecastData from './update-daily-forecast-data';
import generateDailyForecastList from './generate-daily-forecast-list';
import generateWeatherList from './generate-weather-list';
import generateHourlyForecastList from './generate-hourly-forecast-list';
import updateHourlyForecastData from './update-hourly-forecast-data';
import './save-settings';
import './location-btn';
import scrollToCurrentHour from './scroll-to-current-hour';

document.getElementById('scroll-to-current-hour').onclick = () => {
  const data = JSON.parse(localStorage.getItem('weatherData'));
  scrollToCurrentHour(data);
};

window.addEventListener('load', () => {
  const weatherContainer = document.getElementById('current-weather');
  const weatherList = generateWeatherList();
  weatherContainer.appendChild(weatherList);

  const forecastContainer = document.getElementById('daily-forecast');
  for (let i = 0; i < DAYS; i++) {
    const forecastList = generateDailyForecastList(i);
    forecastContainer.appendChild(forecastList);
  }

  const hourlyContainer = document.getElementById('hourly-forecast');
  for (let i = 0; i < 24; i++) {
    const hourlyList = generateHourlyForecastList(i);
    hourlyContainer.appendChild(hourlyList);
  }

  const lastLocation = getLastLocation();
  fetchWeatherData(lastLocation).then((data) => {
    updateWeatherData(data);
    updateDailyForecastData(data);
    updateHourlyForecastData(data);

    setTimeout(() => scrollToCurrentHour(data), 500);
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
    updateHourlyForecastData(data);
    scrollToCurrentHour(data);
  });
  form.reset();
});

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.key === 'k') {
    event.preventDefault(); // avoid triggering browser shortcuts
    searchField.focus();
  }

  if (event.key === 'Escape') {
    event.preventDefault();
    searchField.blur();
  }
});
