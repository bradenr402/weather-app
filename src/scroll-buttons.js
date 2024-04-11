export default function setupScrollButtons() {
  const hourlyContainer = document.getElementById('hourly-forecast');
  const exampleWidth = document.getElementById('hourly-0').clientWidth;

  document.getElementById('hourly-scroll-left').onclick = () => {
    hourlyContainer.scrollLeft -= exampleWidth;
  };

  document.getElementById('hourly-scroll-right').onclick = () => {
    hourlyContainer.scrollLeft += exampleWidth;
  };
}
