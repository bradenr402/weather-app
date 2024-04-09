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
    updateForecastDataPoint({
      day,
      dataPoint: 'condition',
      conditionCode: forecastData.day.condition.code,
      text: forecastData.day.condition.text,
      notes: '',
    });
    updateForecastDataPoint({
      day,
      dataPoint: 'max-temp',
      text: `${forecastData.day.maxtemp_f}°F`,
      notes: 'high',
    });
    updateForecastDataPoint({
      day,
      dataPoint: 'min-temp',
      text: `${forecastData.day.mintemp_f}°F`,
      notes: 'low',
    });

    updateForecastDataPoint({
      day,
      dataPoint: 'total-precipitation',
      text: `${forecastData.day.totalprecip_in} in`,
      notes: 'precip',
    });

    updateForecastDataPoint({
      day,
      dataPoint: 'rain-chance',
      text: `${forecastData.day.daily_chance_of_rain}%`,
      notes: 'chance',
    });

    updateForecastDataPoint({
      day,
      dataPoint: 'sunrise',
      text: formatTime(forecastData.astro.sunrise),
      notes: 'sunrise',
    });

    updateForecastDataPoint({
      day,
      dataPoint: 'sunset',
      text: formatTime(forecastData.astro.sunset),
      notes: 'sunset',
    });
  }
}
