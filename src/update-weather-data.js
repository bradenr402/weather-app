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

function uvIndexDescription(num) {
  // exposure categories from https://www.epa.gov/enviro/uv-index-description

  if (num <= 2) return 'Low';
  if (num <= 5) return 'Moderate';
  if (num <= 7) return 'High';
  if (num <= 10) return 'Very High';
  return 'Extreme';
}

export default function updateWeatherData(data) {
  const currentTime = document.getElementById('current-time');
  currentTime.textContent = formatTime(data.location.localtime);

  const city = document.getElementById('city');
  city.textContent = `${getCityTitle(data.location)}`;

  const weatherIcon = document.getElementById('weather-icon');
  weatherIcon.src = `https:${data.current.condition.icon}`;

  const tempUnit = localStorage.getItem('temperatureUnit') || 'F';
  let tempData;
  let feelslikeData;
  if (tempUnit === 'C') {
    tempData = data.current.temp_c;
    feelslikeData = data.current.feelslike_c;
  } else {
    tempData = data.current.temp_f;
    feelslikeData = data.current.feelslike_f;
  }

  const distanceUnit = localStorage.getItem('distanceUnit') || 'mi';
  let visibilityData;
  let windData;
  let gustData;
  let speedUnit;
  if (distanceUnit === 'km') {
    visibilityData = data.current.vis_km;
    windData = data.current.wind_kph;
    gustData = data.current.gust_kph;
    speedUnit = 'kph';
  } else {
    visibilityData = data.current.vis_miles;
    windData = data.current.wind_mph;
    gustData = data.current.gust_mph;
    speedUnit = 'mph';
  }

  const measurementUnit = localStorage.getItem('measurementUnit') || 'in';
  let precipitationData;
  if (measurementUnit === 'mm') precipitationData = data.current.precip_mm;
  else precipitationData = data.current.precip_in;

  updateWeatherDataPoint({
    dataPoint: 'condition',
    conditionCode: data.current.condition.code,
    text: data.current.condition.text.trim(),
    notes: `${data.current.cloud}% cloud coverage`,
  });

  updateWeatherDataPoint({
    dataPoint: 'temperature',
    text: `${tempData}°${tempUnit}`,
    notes: `Feels like ${feelslikeData}°${tempUnit}`,
  });

  updateWeatherDataPoint({
    dataPoint: 'precipitation',
    text: `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`,
    notes: `${precipitationData} ${measurementUnit}`,
  });

  updateWeatherDataPoint({
    dataPoint: 'humidity',
    text: `${data.current.humidity}%`,
  });

  updateWeatherDataPoint({
    dataPoint: 'visibility',
    text: `${visibilityData} ${distanceUnit}`,
  });

  updateWeatherDataPoint({
    dataPoint: 'air-quality',
    text: data.current.air_quality['us-epa-index'],
    notes: aqiValue(data.current.air_quality['us-epa-index']),
  });

  updateWeatherDataPoint({
    dataPoint: 'uv-index',
    text: data.current.uv,
    notes: uvIndexDescription(data.current.uv),
  });

  updateWeatherDataPoint({
    dataPoint: 'wind',
    text: `${windData} ${speedUnit} ${data.current.wind_dir}`,
    notes: `Gusts up to ${gustData} ${speedUnit}`,
  });
}
