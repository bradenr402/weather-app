import updateWeatherDataPoint from './update-weather-data-point';
import getCityTitle from './get-city-title';
import formatTime from './format-time';

function aqiDescription(num) {
  // aqi values from https://www.weatherapi.com/docs/#intro-aqi

  const aqiDictionary = {
    1: 'Good',
    2: 'Moderate',
    3: 'Unhealthy for sensitive groups',
    4: 'Unhealthy',
    5: 'Very unhealthy',
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

function visiblityDescription(num) {
  // visiblity categories from https://www.star.nesdis.noaa.gov/portfolio/detail_Visibility.php#:~:text=Fog%20droplets%20and%20haze%20particles,V%20%3C%202%20km)%20visibilities.

  if (num <= 2) return 'Visibility is poor.';
  if (num <= 10) return 'Visibility is low.';
  if (num <= 30) return 'Visibility is moderate.';
  return 'Visibility is clear.';
}

function humidityDescription(num) {
  if (num < 30) return 'It should be dry and comfortable outside.';
  if (num < 60) return 'It should be moderately comfortable outside.';
  return 'It might be humid and uncomfortable outside.';
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
    notes: `Cloud cover is ${data.current.cloud}%.`,
  });

  updateWeatherDataPoint({
    dataPoint: 'temperature',
    text: `${tempData}°${tempUnit}`,
    notes: `It feels like ${feelslikeData}°${tempUnit}.`,
  });

  updateWeatherDataPoint({
    dataPoint: 'precipitation',
    text: `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`,
    notes: `Expect ${precipitationData} ${measurementUnit} of precipitation today.`,
  });

  updateWeatherDataPoint({
    dataPoint: 'humidity',
    text: `${data.current.humidity}%`,
    notes: humidityDescription(data.current.humidity),
  });

  updateWeatherDataPoint({
    dataPoint: 'visibility',
    text: `${visibilityData} ${distanceUnit}`,
    notes: visiblityDescription(data.current.vis_km),
  });

  updateWeatherDataPoint({
    dataPoint: 'air-quality',
    text: data.current.air_quality['us-epa-index'],
    notes: aqiDescription(data.current.air_quality['us-epa-index']),
  });

  updateWeatherDataPoint({
    dataPoint: 'uv-index',
    text: data.current.uv,
    notes: uvIndexDescription(data.current.uv),
  });

  updateWeatherDataPoint({
    dataPoint: 'wind',
    text: `${windData} ${speedUnit} ${data.current.wind_dir}`,
    notes: `Gusts of wind up to ${gustData} ${speedUnit} today.`,
  });
}
