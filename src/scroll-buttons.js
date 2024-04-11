export default function setupScrollButtons() {
  const hourlyScrollLeftBtn = document.getElementById('hourly-scroll-left');
  const hourlyScrollRightBtn = document.getElementById('hourly-scroll-right');

  const hourlyContainer = document.getElementById('hourly-forecast');
  const exampleWidth = document.getElementById('hourly-0').clientWidth;

  hourlyScrollLeftBtn.onclick = () => {
    hourlyContainer.scrollLeft -= exampleWidth;
  };

  hourlyScrollRightBtn.onclick = () => {
    hourlyContainer.scrollLeft += exampleWidth;
  };
}
