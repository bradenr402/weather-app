export default function updateForecastDataPoint(day, dataPoint, text, notes = '') {
  const forecastData = document.getElementById(`${dataPoint}-data-${day}`);
  forecastData.textContent = text;

  const forecastNotes = document.getElementById(`${dataPoint}-notes-${day}`);
  forecastNotes.textContent = notes;

  if (notes === '') forecastNotes.classList.add('hidden');
  else forecastNotes.classList.remove('hidden');
}
