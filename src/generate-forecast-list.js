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
    'forecast-list',
    'bg-sky-300',
    'bg-opacity-30',
    'rounded-2xl',
    'text-center',
    'p-6',
    'min-w-[200px]',
    'flex',
    'flex-col',
    'gap-2',
  );

  const dayTitle = document.createElement('h3');
  dayTitle.classList.add(
    'day-title',
    'font-bold',
    'text-center',
    'text-lg',
    'mb-2',
  );
  dayTitle.textContent = getDayName(index);
  forecastList.appendChild(dayTitle);

  const forecastItems = [
    { id: 'condition', title: 'Conditions' },
    { id: 'max-temp', title: 'High' },
    { id: 'min-temp', title: 'Low' },
    { id: 'total-precipitation', title: 'Precipitation' },
    { id: 'rain-chance', title: 'Chance of Rain' },
    { id: 'sunrise', title: 'Sunrise' },
    { id: 'sunset', title: 'Sunset' },
  ];

  forecastItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.id = `${item.id}-${index}`;
    listItem.classList.add('forecast-item', 'list-none');

    const titleSpan = document.createElement('span');
    titleSpan.className = 'sr-only';
    titleSpan.textContent = item.title;

    const containerDiv = document.createElement('div');
    containerDiv.className = 'forecast-container';

    const dataParagraph = document.createElement('p');
    dataParagraph.id = `${item.id}-data-${index}`;
    // dataParagraph.className = `${item.id}-value`;

    containerDiv.appendChild(dataParagraph);
    listItem.append(titleSpan);
    listItem.appendChild(containerDiv);
    forecastList.appendChild(listItem);
  });

  return forecastList;
}
