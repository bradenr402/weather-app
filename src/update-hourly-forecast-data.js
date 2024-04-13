import getDistanceUnit from './get-distance-unit';
import getSpeedUnit from './get-speed-unit';
import getTemperatureUnit from './get-temperature-unit';
import updateHourlyForecastDataPoint from './update-hourly-forecast-data-point';

function getHour(hour, now) {
  if (hour === now) return 'Now';
  if (hour === 0) return '12am';
  if (hour <= 12) return `${hour}am`;
  return `${hour - 12}pm`;
}

function updateCurrentHourForecastData(data) {
  const hour = new Date(data.location.localtime).getHours();

  const weatherIcon = document.getElementById(`hourly-weather-icon-${hour}`);
  weatherIcon.src = `https:${data.current.condition.icon}`;

  const hourContainer = document.getElementById(`hourly-${hour}`);
  [...hourContainer.classList].forEach((element) => {
    if (element.startsWith('border-')) {
      hourContainer.classList.remove(element);
    }
  });
  hourContainer.classList.add('border-[#1da1f2]');

  const tempUnit = getTemperatureUnit();
  let tempData;
  let feelslikeData;
  if (tempUnit === 'C') {
    tempData = data.current.temp_c;
    feelslikeData = data.current.feelslike_c;
  } else {
    tempData = data.current.temp_f;
    feelslikeData = data.current.feelslike_f;
  }

  const distanceUnit = getDistanceUnit();
  let windData;
  let gustData;
  const speedUnit = getSpeedUnit();
  if (distanceUnit === 'km') {
    windData = data.current.wind_kph;
    gustData = data.current.gust_kph;
  } else {
    windData = data.current.wind_mph;
    gustData = data.current.gust_mph;
  }

  updateHourlyForecastDataPoint({
    hour,
    dataPoint: 'condition',
    conditionCode: data.current.condition.code,
    isDay: data.current.is_day,
    text: data.current.condition.text.trim(),
    notes: `${data.current.cloud}% cloud cover`,
  });

  updateHourlyForecastDataPoint({
    hour,
    dataPoint: 'temperature',
    text: `${tempData}°${tempUnit}`,
    notes: `Feels like ${feelslikeData}°${tempUnit}`,
  });
  updateHourlyForecastDataPoint({
    hour,
    dataPoint: 'precipitation',
    text: `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`,
    notes: 'Chance of precipitation',
  });

  updateHourlyForecastDataPoint({
    hour,
    dataPoint: 'humidity',
    text: `${data.current.humidity}%`,
    notes: 'Humidity',
  });

  updateHourlyForecastDataPoint({
    hour,
    dataPoint: 'uv-index',
    text: data.current.uv,
    notes: 'UV index',
  });

  updateHourlyForecastDataPoint({
    hour,
    dataPoint: 'wind',
    text: `${windData} ${speedUnit} ${data.current.wind_dir}`,
    notes: `Gusts up to ${gustData} ${speedUnit}`,
  });
}

export default function updateHourlyForecastData(data) {
  for (let hour = 0; hour < 24; hour++) {
    const now = new Date(data.location.localtime).getHours();

    document.getElementById(`hour-${hour}`).textContent = getHour(hour, now);

    if (hour === now) {
      updateCurrentHourForecastData(data);
    } else {
      const hourlyData = data.forecast.forecastday[0].hour[hour];

      const weatherIcon = document.getElementById(
        `hourly-weather-icon-${hour}`,
      );
      weatherIcon.src = `https:${hourlyData.condition.icon}`;

      const hourContainer = document.getElementById(`hourly-${hour}`);
      [...hourContainer.classList].forEach((element) => {
        if (element.startsWith('border-')) {
          hourContainer.classList.remove(element);
        }
      });
      hourContainer.classList.add('border-gray-300');

      const tempUnit = getTemperatureUnit();
      let tempData;
      let feelslikeData;
      if (tempUnit === 'C') {
        tempData = hourlyData.temp_c;
        feelslikeData = hourlyData.feelslike_c;
      } else {
        tempData = hourlyData.temp_f;
        feelslikeData = hourlyData.feelslike_f;
      }

      const distanceUnit = getDistanceUnit();
      let windData;
      let gustData;
      const speedUnit = getSpeedUnit();
      if (distanceUnit === 'km') {
        windData = hourlyData.wind_kph;
        gustData = hourlyData.gust_kph;
      } else {
        windData = hourlyData.wind_mph;
        gustData = hourlyData.gust_mph;
      }

      updateHourlyForecastDataPoint({
        hour,
        dataPoint: 'condition',
        isDay: hourlyData.is_day,
        conditionCode: hourlyData.condition.code,
        text: hourlyData.condition.text.trim(),
        notes: `${hourlyData.cloud}% cloud cover`,
      });

      updateHourlyForecastDataPoint({
        hour,
        dataPoint: 'temperature',
        text: `${tempData}°${tempUnit}`,
        notes: `Feels like ${feelslikeData}°${tempUnit}`,
      });
      updateHourlyForecastDataPoint({
        hour,
        dataPoint: 'precipitation',
        text: `${hourlyData.chance_of_rain}%`,
        notes: 'Chance of precipitation',
      });

      updateHourlyForecastDataPoint({
        hour,
        dataPoint: 'humidity',
        text: `${hourlyData.humidity}%`,
        notes: 'Humidity',
      });

      updateHourlyForecastDataPoint({
        hour,
        dataPoint: 'uv-index',
        text: hourlyData.uv,
        notes: 'UV index',
      });

      updateHourlyForecastDataPoint({
        hour,
        dataPoint: 'wind',
        text: `${windData} ${speedUnit} ${hourlyData.wind_dir}`,
        notes: `Gusts up to ${gustData} ${speedUnit}`,
      });
    }
  }
}
