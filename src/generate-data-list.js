export default function generateDataList() {
  const dataList = document.createElement('ul');
  dataList.className = 'data-list';

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
    listItem.className = 'data-item';

    const titleSpan = document.createElement('span');
    titleSpan.className = 'data-title';
    titleSpan.textContent = item.title;

    const containerDiv = document.createElement('div');
    containerDiv.className = 'data-container';

    const dataParagraph = document.createElement('p');
    dataParagraph.id = `${item.id}-data`;
    dataParagraph.className = 'data-value';

    const notesParagraph = document.createElement('p');
    notesParagraph.id = `${item.id}-notes`;
    notesParagraph.className = 'data-notes';

    containerDiv.append(dataParagraph, notesParagraph);
    listItem.appendChild(titleSpan);
    listItem.appendChild(containerDiv);
    dataList.appendChild(listItem);
  });

  return dataList;
}
