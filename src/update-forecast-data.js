import updateForecastDataPoint from './update-forecast-data-point';
import { DAYS } from './fetch-weather-data';

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
  const forecastDaysTitle = document.getElementById('days');
  forecastDaysTitle.textContent = DAYS;

  for (let day = 0; day < DAYS; day++) {
    const forecastData = data.forecast.forecastday[day];
    updateForecastDataPoint(day, 'condition', forecastData.day.condition.text);
    updateForecastDataPoint(
      day,
      'max-temp',
      `${forecastData.day.maxtemp_f}°F`,
      'high',
    );
    updateForecastDataPoint(
      day,
      'min-temp',
      `${forecastData.day.mintemp_f}°F`,
      'low',
    );

    updateForecastDataPoint(
      day,
      'total-precipitation',
      `${forecastData.day.totalprecip_in} in`,
      'precip',
    );

    updateForecastDataPoint(
      day,
      'rain-chance',
      `${forecastData.day.daily_chance_of_rain}%`,
      'chance',
    );

    updateForecastDataPoint(
      day,
      'sunrise',
      formatTime(forecastData.astro.sunrise),
      'sunrise',
    );

    updateForecastDataPoint(
      day,
      'sunset',
      formatTime(forecastData.astro.sunset),
      'sunset',
    );
  }
}
