document.getElementById('scroll-to-end').onclick = () => {
  const hourlyContainer = document.getElementById('hourly-forecast');

  hourlyContainer.scrollLeft = hourlyContainer.scrollWidth;
};
