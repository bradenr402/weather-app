import backgroundClass from './background-class';

export default function updateDailyForecastDataPoint({
  day,
  dataPoint,
  conditionCode,
  text,
  notes = '',
}) {
  const forecastData = document.getElementById(`${dataPoint}-data-${day}`);
  forecastData.textContent = text;

  if (conditionCode) {
    const forecastContainer = document.getElementById(`forecast-${day}`);

    // removes previous background color
    Array.from(forecastContainer.classList).forEach((element) => {
      if (element.startsWith('bg-')) {
        forecastContainer.classList.remove(element);
      }
    });

    // adds new background color
    forecastContainer.classList.add(backgroundClass(conditionCode));
  }

  const forecastNotes = document.getElementById(`${dataPoint}-notes-${day}`);
  forecastNotes.textContent = notes;

  if (notes === '') forecastNotes.classList.add('hidden');
  else forecastNotes.classList.remove('hidden');
}
