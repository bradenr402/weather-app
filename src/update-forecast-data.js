import updateForecastDataPoint from './update-forecast-data-point';

function formatTime(time) {
  const [sunsetHours, sunsetMinutes] = time.split(/:|\s/);

  const date = new Date();
  date.setHours(sunsetHours);
  date.setMinutes(sunsetMinutes);

  return date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
  });
}

export default function updateForecastData(data) {
  for (let day = 0; day < 7; day++) {
    const forecastData = data.forecast.forecastday[day];
    updateForecastDataPoint(day, 'condition', forecastData.day.condition.text);
    updateForecastDataPoint(day, 'max-temp', `${forecastData.day.maxtemp_f}°F`);
    updateForecastDataPoint(day, 'min-temp', `${forecastData.day.mintemp_f}°F`);

    updateForecastDataPoint(
      day,
      'total-precipitation',
      `${forecastData.day.totalprecip_in} in`,
    );

    updateForecastDataPoint(
      day,
      'rain-chance',
      `${forecastData.day.daily_chance_of_rain}%`,
    );

    updateForecastDataPoint(
      day,
      'sunrise',
      formatTime(forecastData.astro.sunrise),
    );

    updateForecastDataPoint(
      day,
      'sunset',
      formatTime(forecastData.astro.sunset),
    );
  }
}