import updateHourlyForecastDataPoint from './update-hourly-forecast-data-point';

function updateCurrentHourForecastData(data) {
  const hour = new Date().getHours();

  const weatherIcon = document.getElementById(`hourly-weather-icon-${hour}`);
  weatherIcon.src = `https:${data.current.condition.icon}`;

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
    text: `${data.current.temp_f}°F`,
    notes: `Feels like ${data.current.feelslike_f}°F`,
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
      text: `${hourlyData.temp_f}°F`,
      notes: `Feels like ${hourlyData.feelslike_f}°F`,
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
      text: `${hourlyData.vis_miles} mi`,
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
      text: `${hourlyData.wind_mph} mph ${hourlyData.wind_dir}`,
      notes: `gusts up to ${hourlyData.gust_mph} mph`,
    });
  }
}
