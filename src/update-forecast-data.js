import updateForecastDataPoint from './update-forecast-data-point';

export default function updateForecastData(data) {
  for (let day = 0; day < 7; day++) {
    const forecastData = data.forecast.forecastday[day];
    updateForecastDataPoint(day, 'condition', forecastData.day.condition.text);
    updateForecastDataPoint(day, 'max-temp', forecastData.day.maxtemp_f);
    updateForecastDataPoint(day, 'min-temp', forecastData.day.mintemp_f);
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
    updateForecastDataPoint(day, 'sunrise', forecastData.astro.sunrise);
    updateForecastDataPoint(day, 'sunset', forecastData.astro.sunset);
  }
}
