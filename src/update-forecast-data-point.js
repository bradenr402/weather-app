export default function updateForecastDataPoint(day, dataPoint, text) {
  const forecastData = document.getElementById(`${dataPoint}-${day}`);
  forecastData.querySelector('.forecast-value').textContent = text;
}
