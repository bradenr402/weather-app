import './style.css';
import fetchWeatherData, { DAYS } from './fetch-weather-data';
import getLastLocation from './get-last-location';
import updateWeatherData from './update-weather-data';
import updateDailyForecastData from './update-daily-forecast-data';
import generateDailyForecastList from './generate-daily-forecast-list';
import generateWeatherList from './generate-weather-list';
import geoLocate from './geolocation';
import generateHourlyForecastList from './generate-hourly-forecast-list';
import updateHourlyForecastData from './update-hourly-forecast-data';
import './save-settings';

function scrollToCurrentHour(data) {
  const hourlyContainer = document.getElementById('hourly-forecast');
  const exampleWidth = document.getElementById('hourly-0').clientWidth;

  const currentHour = new Date(data.location.localtime).getHours();
  hourlyContainer.scrollLeft = (exampleWidth + 18) * currentHour;
}

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

const locationBtn = document.getElementById('location-btn');
const locationBtnText = document.getElementById('location-btn-text');
const locationIcon = document.getElementById('location-icon');
const spinnerIcon = document.getElementById('spinner-icon');

locationBtn.onclick = async () => {
  locationBtn.disabled = true;
  const prevLocationBtnText = locationBtnText.textContent;
  locationBtnText.textContent = 'Getting Your Location';
  locationIcon.classList.add('hidden');
  spinnerIcon.classList.remove('hidden');

  try {
    const location = await geoLocate();
    locationBtnText.textContent = 'Updating Weather Information';

    const currentLocation = [location.lat, location.lng].join();
    const data = await fetchWeatherData(currentLocation);

    updateWeatherData(data);
    updateDailyForecastData(data);
    updateHourlyForecastData(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    locationBtn.disabled = false;
    locationBtnText.textContent = prevLocationBtnText;
    locationIcon.classList.remove('hidden');
    spinnerIcon.classList.add('hidden');
  }
};
