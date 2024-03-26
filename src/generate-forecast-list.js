function getDayName(daysInFuture) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const today = new Date().getDay();
  const futureDay = (today + daysInFuture) % 7;

  return days[futureDay];
}

export default function generateForecastList(index) {
  const forecastList = document.createElement('ul');
  forecastList.className = 'forecast-list';
  forecastList.id = `forecast-${index}`;

  const section = document.querySelector('section.weather-forecast');
  const dayTitle = document.createElement('h3');
  dayTitle.classList.add('day-title', 'title');
  dayTitle.textContent = getDayName(index);
  section.appendChild(dayTitle);

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
    listItem.className = 'forecast-item';

    const titleSpan = document.createElement('span');
    titleSpan.className = 'forecast-title';
    titleSpan.textContent = item.title;

    const containerDiv = document.createElement('div');
    containerDiv.className = 'forecast-container';

    const dataParagraph = document.createElement('p');
    dataParagraph.id = `${item.id}-data-${index}`;
    dataParagraph.className = 'forecast-value';

    containerDiv.appendChild(dataParagraph);
    listItem.append(titleSpan);
    listItem.appendChild(containerDiv);
    forecastList.appendChild(listItem);
  });

  return forecastList;
}
