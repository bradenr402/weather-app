import updateWeatherDataPoint from './update-weather-data-point';
import getCityTitle from './get-city-title';

function aqiValue(num) {
  const aqiDictionary = {
    1: 'Good',
    2: 'Moderate',
    3: 'Unhealthy for sensitive groups',
    4: 'Unhealthy',
    5: 'Very Unhealthy',
    6: 'Hazardous',
  };

  if (num >= 1 && num <= 6) return aqiDictionary[num];
  return 'Unavailable';
}

export default function updateWeatherData(data) {
  const city = document.getElementById('city');
  city.textContent = getCityTitle(data.location);

  const weatherIcon = document.getElementById('weather-icon');
  weatherIcon.src = `https:${data.current.condition.icon}`;

  updateWeatherDataPoint(
    'conditions',
    data.current.condition.text,
    `${data.current.cloud}% cloud coverage`,
  );
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
  updateWeatherDataPoint(
    'air-quality',
    aqiValue(data.current.air_quality['us-epa-index']),
  );
}
