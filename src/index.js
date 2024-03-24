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

function addWeatherData(data) {
  console.log(data);

  const city = document.getElementById('city');
  const location = data.location.name;
  const region = data.location.region;
  city.textContent = `${location}, ${region}`;

  const weatherIcon = document.createElement('img');
  weatherIcon.src = `https:${data.current.condition.icon}`;
  weatherIcon.classList.add('weather-icon');
  const heading = document.querySelector('h1');
  heading.appendChild(weatherIcon);

  addWeatherPoint('Conditions', data.current.condition.text);
  addWeatherPoint('Humidity', `${data.current.humidity}%`);
  addWeatherPoint(
    'Temperature',
    `${data.current.temp_f}°F (Feels like ${data.current.feelslike_f}°F)`
  );
  addWeatherPoint('UV Index', data.current.uv);
  addWeatherPoint(
    'Wind',
    `${data.current.wind_mph} mph, ${data.current.wind_dir}`
  );
  addWeatherPoint('Gusts', `${data.current.gust_mph} mph`);
}

function updateWeatherData(data) {
  console.log(data);

  const city = document.getElementById('city');
  const location = data.location.name;
  const region = data.location.region;
  city.textContent = `${location}, ${region}`;

  const weatherIcon = document.querySelector('.weather-icon');
  weatherIcon.src = `https:${data.current.condition.icon}`;

  updateWeatherPoint('Conditions', data.current.condition.text);
  updateWeatherPoint('Humidity', `${data.current.humidity}%`);
  updateWeatherPoint(
    'Temperature',
    `${data.current.temp_f}°F (Feels like ${data.current.feelslike_f}°F)`
  );
  updateWeatherPoint('UV Index', data.current.uv);
  updateWeatherPoint(
    'Wind',
    `${data.current.wind_mph} mph ${data.current.wind_dir}`
  );
  updateWeatherPoint('Gusts', `${data.current.gust_mph} mph`);
}

function addWeatherPoint(dataPoint, text) {
  const ul = document.getElementById('weather-data-list');
  const li = document.createElement('li');

  li.id = dataPoint;
  li.textContent = `${dataPoint}: ${text}`;
  ul.appendChild(li);
}

function updateWeatherPoint(dataPoint, text) {
  const li = document.getElementById(dataPoint);
  li.textContent = `${dataPoint}: ${text}`;
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
