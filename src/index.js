import './style.css';

const weather_api_key = '3b5e7413d81949a3b17232658242103';

async function retrieveWeatherData(search) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${weather_api_key}&q=${search}`,
    { mode: 'cors' }
  );
  const data = await response.json();
  return data;
}

function updateWeatherPoint(dataPoint, text, notes = '') {
  const weatherData = document.getElementById(`${dataPoint}-data`);
  weatherData.textContent = text;

  const weatherNotes = document.getElementById(`${dataPoint}-notes`);
  weatherNotes.textContent = notes;
  if (notes === '') weatherNotes.classList.add('sr-only');
  else weatherNotes.classList.remove('sr-only');
}

function cityTitle(location) {
  const city = location.name;
  const region = location.region;
  const country = location.country;

  if (country === 'United States of America' || country === 'Canada') {
    return `${city}, ${region}, ${country}`;
  } else {
    return `${city}, ${country}`;
  }
}

function addWeatherData(data) {
  const city = document.getElementById('city');
  city.textContent = cityTitle(data.location);

  const weatherIcon = document.getElementById('weather-icon');
  weatherIcon.src = `https:${data.current.condition.icon}`;

  updateWeatherPoint('conditions', data.current.condition.text);
  updateWeatherPoint('humidity', `${data.current.humidity}%`);
  updateWeatherPoint(
    'temperature',
    `${data.current.temp_f}°F`,
    `Feels like ${data.current.feelslike_f}°F`
  );
  updateWeatherPoint('uv-index', data.current.uv);
  updateWeatherPoint(
    'wind',
    `${data.current.wind_mph} mph, ${data.current.wind_dir}`
  );
  updateWeatherPoint('gusts', `${data.current.gust_mph} mph`);
  updateWeatherPoint('visibility', `${data.current.vis_miles} mi`);
  updateWeatherPoint('precipitation', `${data.current.precip_in} in`);
}

function updateWeatherData(data) {
  const city = document.getElementById('city');
  city.textContent = cityTitle(data.location);

  const weatherIcon = document.querySelector('.weather-icon');
  weatherIcon.src = `https:${data.current.condition.icon}`;

  updateWeatherPoint('conditions', data.current.condition.text);
  updateWeatherPoint('humidity', `${data.current.humidity}%`);
  updateWeatherPoint(
    'temperature',
    `${data.current.temp_f}°F`,
    `Feels like ${data.current.feelslike_f}°F`
  );
  updateWeatherPoint('uv-index', data.current.uv);
  updateWeatherPoint(
    'wind',
    `${data.current.wind_mph} mph ${data.current.wind_dir}`
  );
  updateWeatherPoint('gusts', `${data.current.gust_mph} mph`);
}

window.onload = retrieveWeatherData('Tampa').then((data) => {
  addWeatherData(data);
});

const form = document.querySelector('form');
const searchField = document.getElementById('search');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchField.value;

  retrieveWeatherData(searchTerm).then((data) => updateWeatherData(data));
});
