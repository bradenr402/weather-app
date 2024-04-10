import updateWeatherData from './update-weather-data';
import updateDailyForecastData from './update-daily-forecast-data';
import updateHourlyForecastData from './update-hourly-forecast-data';

function preselectChosenSettings() {
  const temperatureUnit = localStorage.getItem('temperatureUnit') || 'F';
  const distanceUnit = localStorage.getItem('distanceUnit') || 'mi';
  const measurementUnit = localStorage.getItem('measurementUnit') || 'in';

  document.getElementById(temperatureUnit).checked = true;
  document.getElementById(distanceUnit).checked = true;
  document.getElementById(measurementUnit).checked = true;
}

const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const settingsForm = document.getElementById('settings-form');
const closeSettingsBtn = document.getElementById('close-settings-btn');
const cancelSettingsBtn = document.getElementById('cancel-settings-btn');
const saveSettingsBtn = document.getElementById('save-settings-btn');

function closeSettingsModal() {
  settingsModal.classList.add('hidden');
  settingsForm.reset();
}

function showSettingsModal() {
  preselectChosenSettings();
  settingsModal.classList.remove('hidden');
}

function saveSettings() {
  const celsiusRadio = document.getElementById('C');
  if (celsiusRadio.checked) localStorage.setItem('temperatureUnit', 'C');
  else localStorage.setItem('temperatureUnit', 'F');

  const kmRadio = document.getElementById('km');
  if (kmRadio.checked) localStorage.setItem('distanceUnit', 'km');
  else localStorage.setItem('distanceUnit', 'mi');

  const mmRadio = document.getElementById('mm');
  if (mmRadio.checked) localStorage.setItem('measurementUnit', 'mm');
  else localStorage.setItem('measurementUnit', 'in');

  closeSettingsModal();

  const data = JSON.parse(localStorage.getItem('weatherData'));
  updateWeatherData(data);
  updateDailyForecastData(data);
  updateHourlyForecastData(data);
}

settingsBtn.onclick = showSettingsModal;
closeSettingsBtn.onclick = closeSettingsModal;
cancelSettingsBtn.onclick = closeSettingsModal;
saveSettingsBtn.onclick = saveSettings;
