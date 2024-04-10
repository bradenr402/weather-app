import updateWeatherDataPoint from './update-weather-data-point';
import getCityTitle from './get-city-title';
import formatTime from './format-time';

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
  const currentTime = document.getElementById('current-time');
  currentTime.textContent = formatTime(data.location.localtime);

  const city = document.getElementById('city');
  city.textContent = `${getCityTitle(data.location)}`;

  const weatherIcon = document.getElementById('weather-icon');
  weatherIcon.src = `https:${data.current.condition.icon}`;

  updateWeatherDataPoint({
    dataPoint: 'condition',
    conditionCode: data.current.condition.code,
    text: data.current.condition.text.trim(),
    notes: `${data.current.cloud}% cloud coverage`,
  });
  updateWeatherDataPoint({
    dataPoint: 'temperature',
    text: data.current.temp_f,
    notes: `Feels like ${data.current.feelslike_f}°F`,
  });
  updateWeatherDataPoint({
    dataPoint: 'precipitation',
    text: `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`,
    notes: `${data.current.precip_in} in`,
  });
  updateWeatherDataPoint({
    dataPoint: 'humidity',
    text: `${data.current.humidity}%`,
  });
  updateWeatherDataPoint({
    dataPoint: 'visibility',
    text: `${data.current.vis_miles} mi`,
  });
  updateWeatherDataPoint({
    dataPoint: 'air-quality',
    text: data.current.air_quality['us-epa-index'],
    notes: aqiValue(data.current.air_quality['us-epa-index']),
  });
  updateWeatherDataPoint({
    dataPoint: 'uv-index',
    text: data.current.uv,
  });
  updateWeatherDataPoint({
    dataPoint: 'wind',
    text: `${data.current.wind_mph} mph ${data.current.wind_dir}`,
    notes: `Gusts of wind up to ${data.current.gust_mph} mph`,
  });
}
