import geoLocate from './geolocation';
import fetchWeatherData from './fetch-weather-data';
import updateWeatherData from './update-weather-data';
import updateDailyForecastData from './update-daily-forecast-data';
import updateHourlyForecastData from './update-hourly-forecast-data';
import scrollToCurrentHour from './scroll-to-current-hour';

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
    scrollToCurrentHour(data);
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
