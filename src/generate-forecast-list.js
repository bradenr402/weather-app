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

export default function generateForecastList(index) {
  const forecastList = document.createElement('ul');
  forecastList.id = `forecast-${index}`;
  forecastList.className = 'forecast-list';
  forecastList.classList.add(
    'rounded-2xl',
    'text-center',
    'border',
    'border-gray-300',
    'p-6',
    'w-[225px]',
    'flex-shrink-0',
    'grid',
    'grid-cols-2',
    'gap-x-2',
    'gap-y-8',
  );

  const headerDiv = document.createElement('div');
  headerDiv.classList.add('col-span-2');

  const dayTitle = document.createElement('h3');
  dayTitle.classList.add('font-bold', 'text-center', 'text-lg');
  dayTitle.textContent = getDayName(index);
  headerDiv.appendChild(dayTitle);
  forecastList.appendChild(headerDiv);

  const forecastItems = [
    { id: 'condition', title: 'Conditions' },
    { id: 'max-temp', title: 'High' },
    { id: 'min-temp', title: 'Low' },
    { id: 'rain-chance', title: 'Chance of Rain' },
    { id: 'total-precipitation', title: 'Precipitation' },
    { id: 'sunrise', title: 'Sunrise' },
    { id: 'sunset', title: 'Sunset' },
  ];

  forecastItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.id = `${item.id}-${index}`;
    listItem.classList.add('list-none');

    const titleSpan = document.createElement('span');
    titleSpan.className = 'sr-only';
    titleSpan.textContent = item.title;

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('flex', 'flex-col');

    const dataSpan = document.createElement('span');
    dataSpan.id = `${item.id}-data-${index}`;
    dataSpan.classList.add('text-lg', 'leading-tight');

    const notesSpan = document.createElement('span');
    notesSpan.id = `${item.id}-notes-${index}`;
    notesSpan.classList.add('text-sm', 'opacity-60');

    containerDiv.append(dataSpan, notesSpan);
    listItem.append(titleSpan);
    listItem.appendChild(containerDiv);
    if (item.id === 'condition') headerDiv.appendChild(listItem);
    else forecastList.appendChild(listItem);
  });

  return forecastList;
}
