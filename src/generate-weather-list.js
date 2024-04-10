export default function generateWeatherList() {
  const weatherList = document.createElement('ul');
  weatherList.classList.add(
    'grid',
    'grid-cols-1',
    'sm:grid-cols-2',
    'md:grid-cols-3',
    'lg:grid-cols-4',
    'gap-y-4',
    'gap-x-0',
    'place-items-center',
  );

  const dataItems = [
    { id: 'condition', title: 'Conditions' },
    { id: 'temperature', title: 'Temperature' },
    { id: 'precipitation', title: 'Precipitation' },
    { id: 'humidity', title: 'Humidity' },
    { id: 'visibility', title: 'Visibility' },
    { id: 'air-quality', title: 'Air Quality' },
    { id: 'uv-index', title: 'UV Index' },
    { id: 'wind', title: 'Wind' },
  ];

  dataItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.id = item.id;
    listItem.classList.add(
      'relative',
      'list-none',
      'rounded-2xl',
      'text-center',
      'bg-sky-200/40',
      'border',
      'border-gray-300',
      'p-6',
      'size-[200px]',
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
    );

    const titleSpan = document.createElement('span');
    titleSpan.textContent = item.title;
    titleSpan.classList.add('font-bold', 'text-lg', 'absolute', 'top-6');

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('flex', 'flex-col', 'items-center', 'gap-4');

    const dataParagraph = document.createElement('p');
    dataParagraph.id = `${item.id}-data`;
    dataParagraph.classList.add('text-2xl');

    const notesParagraph = document.createElement('p');
    notesParagraph.id = `${item.id}-notes`;
    notesParagraph.classList.add(
      'text-sm',
      'opacity-60',
      'absolute',
      'bottom-6',
    );

    containerDiv.append(dataParagraph, notesParagraph);
    listItem.appendChild(titleSpan);
    listItem.appendChild(containerDiv);
    weatherList.appendChild(listItem);
  });

  return weatherList;
}
