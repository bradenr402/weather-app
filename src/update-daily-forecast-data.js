import updateDailyForecastDataPoint from './update-daily-forecast-data-point';
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

export default function updateDailyForecastData(data) {
  for (let day = 0; day < DAYS; day++) {
    const forecastData = data.forecast.forecastday[day];
    updateDailyForecastDataPoint({
      day,
      dataPoint: 'condition',
      conditionCode: forecastData.day.condition.code,
      text: forecastData.day.condition.text,
      notes: '',
    });
    updateDailyForecastDataPoint({
      day,
      dataPoint: 'max-temp',
      text: `${forecastData.day.maxtemp_f}°F`,
      notes: 'high',
    });
    updateDailyForecastDataPoint({
      day,
      dataPoint: 'min-temp',
      text: `${forecastData.day.mintemp_f}°F`,
      notes: 'low',
    });

    updateDailyForecastDataPoint({
      day,
      dataPoint: 'total-precipitation',
      text: `${forecastData.day.totalprecip_in} in`,
      notes: 'precip',
    });

    updateDailyForecastDataPoint({
      day,
      dataPoint: 'rain-chance',
      text: `${forecastData.day.daily_chance_of_rain}%`,
      notes: 'chance',
    });

    updateDailyForecastDataPoint({
      day,
      dataPoint: 'sunrise',
      text: formatTime(forecastData.astro.sunrise),
      notes: 'sunrise',
    });

    updateDailyForecastDataPoint({
      day,
      dataPoint: 'sunset',
      text: formatTime(forecastData.astro.sunset),
      notes: 'sunset',
    });
  }
}