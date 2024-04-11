import fetchWeatherData, { DAYS } from './fetch-weather-data';
import generateDailyForecastList from './generate-daily-forecast-list';
import generateHourlyForecastList from './generate-hourly-forecast-list';
import generateWeatherList from './generate-weather-list';
import getLastLocation from './get-last-location';
import setupScrollButtons from './scroll-buttons';
import scrollToCurrentHour from './scroll-to-current-hour';
import updateDailyForecastData from './update-daily-forecast-data';
import updateHourlyForecastData from './update-hourly-forecast-data';
import updateWeatherData from './update-weather-data';

import './location-btn';
import './save-settings';
import './scroll-to-beginning';
import './scroll-to-end';
import './search-form';
import './search-keyboard-shortcuts';
import './style.css';

window.onload = () => {
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
  setupScrollButtons();
};
