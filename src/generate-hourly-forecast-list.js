export default function generateHourlyForecastList(hour) {
  const hourlyList = document.createElement('ul');
  hourlyList.id = `hourly-${hour}`;
  hourlyList.classList.add(
    'rounded-2xl',
    'text-center',
    'bg-white',
    'border',
    'border-gray-300',
    'p-6',
    'w-[250px]',
    'flex-shrink-0',
    'flex',
    'flex-col',
    'gap-8',
    'snap-start',
  );

  const headerDiv = document.createElement('div');
  headerDiv.classList.add('flex', 'flex-col', 'items-center');

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('flex', 'items-center', 'justify-center');

  const weatherIcon = document.createElement('img');
  weatherIcon.src = '#';
  weatherIcon.id = `hourly-weather-icon-${hour}`;
  weatherIcon.classList.add('mr-2', 'aspect-square', 'size-8');

  const hourTitle = document.createElement('h3');
  hourTitle.id = `hour-${hour}`;
  hourTitle.classList.add(
    'font-bold',
    'text-center',
    'text-lg',
    'font-small-caps',
  );

  titleContainer.append(weatherIcon, hourTitle);
  headerDiv.appendChild(titleContainer);
  hourlyList.appendChild(headerDiv);

  const forecastItems = [
    { id: 'condition', title: 'Conditions' },
    { id: 'temperature', title: 'Temperature' },
    { id: 'precipitation', title: 'Precipitation' },
    { id: 'humidity', title: 'Humidity' },
    { id: 'uv-index', title: 'UV Index' },
    { id: 'wind', title: 'Wind' },
  ];

  forecastItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.id = `hourly-${item.id}-${hour}`;
    listItem.classList.add('list-none');

    const titleSpan = document.createElement('span');
    titleSpan.className = 'sr-only';
    titleSpan.textContent = item.title;

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('flex', 'flex-col');

    const dataSpan = document.createElement('span');
    dataSpan.id = `hourly-${item.id}-data-${hour}`;
    if (item.id === 'condition') dataSpan.classList.add('text-lg');
    else dataSpan.classList.add('text-2xl');

    const notesSpan = document.createElement('span');
    notesSpan.id = `hourly-${item.id}-notes-${hour}`;
    notesSpan.classList.add('text-sm', 'opacity-60');

    containerDiv.append(dataSpan, notesSpan);
    listItem.append(titleSpan, containerDiv);

    if (item.id === 'condition') headerDiv.appendChild(listItem);
    else hourlyList.appendChild(listItem);
  });

  return hourlyList;
}
