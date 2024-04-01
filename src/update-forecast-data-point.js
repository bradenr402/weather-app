export default function updateForecastDataPoint(day, dataPoint, text) {
  document.getElementById(`${dataPoint}-data-${day}`).textContent = text;
}
