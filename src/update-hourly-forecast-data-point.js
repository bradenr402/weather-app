import backgroundClass from './background-class';

export default function updateHourlyForecastDataPoint({
  hour,
  dataPoint,
  conditionCode,
  text,
  notes = '',
}) {
  const hourlyData = document.getElementById(
    `hourly-${dataPoint}-data-${hour}`,
  );
  hourlyData.textContent = text;

  if (conditionCode) {
    const hourlyContainer = document.getElementById(`hourly-${hour}`);

    // removes previous background color
    Array.from(hourlyContainer.classList).forEach((element) => {
      if (element.startsWith('bg-')) {
        hourlyContainer.classList.remove(element);
      }
    });

    // adds new background color
    let bgClass = backgroundClass(conditionCode);
    if (conditionCode === 1000 && text === 'Clear') bgClass = 'bg-sky-200/40'; // changes background color if it is nighttime
    hourlyContainer.classList.add(bgClass);
  }

  const hourlyNotes = document.getElementById(
    `hourly-${dataPoint}-notes-${hour}`,
  );
  hourlyNotes.textContent = notes;

  if (notes === '') hourlyNotes.classList.add('hidden');
  else hourlyNotes.classList.remove('hidden');
}
