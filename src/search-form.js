import fetchWeatherData from './fetch-weather-data';
import updateWeatherData from './update-weather-data';
import updateDailyForecastData from './update-daily-forecast-data';
import updateHourlyForecastData from './update-hourly-forecast-data';
import scrollToCurrentHour from './scroll-to-current-hour';

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
