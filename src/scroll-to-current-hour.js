export default function scrollToCurrentHour(data) {
  const hourlyContainer = document.getElementById('hourly-forecast');
  const exampleWidth = document.getElementById('hourly-0').clientWidth;

  const currentHour = new Date(data.location.localtime).getHours();
  hourlyContainer.scrollLeft = (exampleWidth + 18) * currentHour;
}
