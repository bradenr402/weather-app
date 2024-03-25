import updateWeatherDataPoint from './update-weather-data-point';
import getCityTitle from './get-city-title';

export default function updateWeatherData(data) {
  const city = document.getElementById('city');
  city.textContent = getCityTitle(data.location);

  const weatherIcon = document.getElementById('weather-icon');
  weatherIcon.src = `https:${data.current.condition.icon}`;

  updateWeatherDataPoint('conditions', data.current.condition.text);
  updateWeatherDataPoint('humidity', `${data.current.humidity}%`);
  updateWeatherDataPoint(
    'temperature',
    `${data.current.temp_f}°F`,
    `Feels like ${data.current.feelslike_f}°F`,
  );
  updateWeatherDataPoint('uv-index', data.current.uv);
  updateWeatherDataPoint(
    'wind',
    `${data.current.wind_mph} mph ${data.current.wind_dir}`,
  );
  updateWeatherDataPoint('gusts', `${data.current.gust_mph} mph`);
  updateWeatherDataPoint('visibility', `${data.current.vis_miles} mi`);
  updateWeatherDataPoint('precipitation', `${data.current.precip_in} in`);
}
