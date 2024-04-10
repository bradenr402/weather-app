import updateHourlyForecastDataPoint from './update-hourly-forecast-data-point';

function updateCurrentHourForecastData(data) {
  const hour = new Date().getHours();

  const weatherIcon = document.getElementById(`hourly-weather-icon-${hour}`);
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

  updateHourlyForecastDataPoint({
    hour,
    dataPoint: 'condition',
    conditionCode: data.current.condition.code,
    isDay: data.current.is_day,
    text: data.current.condition.text.trim(),
    notes: `${data.current.cloud}% cloud coverage`,
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
    notes: 'chance of precipitation',
  });

  updateHourlyForecastDataPoint({
    hour,
    dataPoint: 'humidity',
    text: `${data.current.humidity}%`,
    notes: 'humidity',
  });

  updateHourlyForecastDataPoint({
    hour,
    dataPoint: 'visibility',
    text: `${data.current.vis_miles} mi`,
    notes: 'visiblity',
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
    text: `${data.current.wind_mph} mph ${data.current.wind_dir}`,
    notes: `gusts up to ${data.current.gust_mph} mph`,
  });
}

export default function updateHourlyForecastData(data) {
  updateCurrentHourForecastData(data);

  for (let hour = 0; hour < 24; hour++) {
    const hourlyData = data.forecast.forecastday[0].hour[hour];

    const weatherIcon = document.getElementById(`hourly-weather-icon-${hour}`);
    weatherIcon.src = `https:${hourlyData.condition.icon}`;

    const tempUnit = localStorage.getItem('temperatureUnit') || 'F';
    let tempData;
    let feelslikeData;
    if (tempUnit === 'C') {
      tempData = hourlyData.temp_c;
      feelslikeData = hourlyData.feelslike_c;
    } else {
      tempData = hourlyData.temp_f;
      feelslikeData = hourlyData.feelslike_f;
    }

    const distanceUnit = localStorage.getItem('distanceUnit') || 'mi';
    let visibilityData;
    let windData;
    let gustData;
    let speedUnit;
    if (distanceUnit === 'km') {
      visibilityData = hourlyData.vis_km;
      windData = hourlyData.wind_kph;
      gustData = hourlyData.gust_kph;
      speedUnit = 'kph';
    } else {
      visibilityData = hourlyData.vis_miles;
      windData = hourlyData.wind_mph;
      gustData = hourlyData.gust_mph;
      speedUnit = 'mph';
    }

    updateHourlyForecastDataPoint({
      hour,
      dataPoint: 'condition',
      conditionCode: hourlyData.condition.code,
      text: hourlyData.condition.text.trim(),
      notes: `${hourlyData.cloud}% cloud coverage`,
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
      notes: 'chance of precipitation',
    });

    updateHourlyForecastDataPoint({
      hour,
      dataPoint: 'humidity',
      text: `${hourlyData.humidity}%`,
      notes: 'humidity',
    });

    updateHourlyForecastDataPoint({
      hour,
      dataPoint: 'visibility',
      text: `${visibilityData} ${distanceUnit}`,
      notes: 'visiblity',
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
      notes: `gusts up to ${gustData} ${speedUnit}`,
    });
  }
}
