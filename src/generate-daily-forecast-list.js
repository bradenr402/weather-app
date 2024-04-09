function getDayName(daysInFuture) {
  if (daysInFuture === 0) return 'Today';

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const futureDay = (new Date().getDay() + daysInFuture) % 7;

  return days[futureDay];
}

export default function generateDailyForecastList(day) {
  const forecastList = document.createElement('ul');
  forecastList.id = `forecast-${day}`;
  forecastList.classList.add(
    'rounded-2xl',
    'text-center',
    'border',
    'border-gray-300',
    'p-6',
    'basis-[250px]',
    'flex-shrink-0',
    'flex-grow',
    'grid',
    'grid-cols-2',
    'gap-x-2',
    'gap-y-8',
  );

  const headerDiv = document.createElement('div');
  headerDiv.classList.add('col-span-2');

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('flex', 'items-center', 'justify-center');

  const weatherIcon = document.createElement('img');
  weatherIcon.src = '#';
  weatherIcon.id = `forecast-weather-icon-${day}`;
  weatherIcon.classList.add('mr-2', 'aspect-square', 'size-8');

  const dayTitle = document.createElement('h3');
  dayTitle.classList.add('font-bold', 'text-center', 'text-lg');
  dayTitle.textContent = getDayName(day);

  titleContainer.append(weatherIcon, dayTitle);
  headerDiv.appendChild(titleContainer);
  forecastList.appendChild(headerDiv);

  const forecastItems = [
    { id: 'condition', title: 'Conditions' },
    { id: 'max-temp', title: 'High' },
    { id: 'min-temp', title: 'Low' },
    { id: 'sunrise', title: 'Sunrise' },
    { id: 'sunset', title: 'Sunset' },
    { id: 'precipitation-chance', title: 'Chance of Precipitation' },
  ];

  forecastItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.id = `${item.id}-${day}`;
    listItem.classList.add('list-none');
    if (item.id === 'precipitation-chance') {
      listItem.classList.add('col-span-2');
    }

    const titleSpan = document.createElement('span');
    titleSpan.className = 'sr-only';
    titleSpan.textContent = item.title;

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('flex', 'flex-col');

    const dataSpan = document.createElement('span');
    dataSpan.id = `${item.id}-data-${day}`;
    if (item.id === 'condition') dataSpan.classList.add('text-lg');
    else dataSpan.classList.add('text-2xl');

    const notesSpan = document.createElement('span');
    notesSpan.id = `${item.id}-notes-${day}`;
    notesSpan.classList.add('text-sm', 'opacity-60');

    containerDiv.append(dataSpan, notesSpan);
    listItem.append(titleSpan, containerDiv);
    if (item.id === 'condition') headerDiv.appendChild(listItem);
    else forecastList.appendChild(listItem);
  });

  return forecastList;
}
