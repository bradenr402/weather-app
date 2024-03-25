export default function updateWeatherDataPoint(dataPoint, text, notes = '') {
  const weatherData = document.getElementById(`${dataPoint}-data`);
  weatherData.textContent = text;

  const weatherNotes = document.getElementById(`${dataPoint}-notes`);
  weatherNotes.textContent = notes;
  if (notes === '') weatherNotes.classList.add('hidden');
  else weatherNotes.classList.remove('hidden');
}
