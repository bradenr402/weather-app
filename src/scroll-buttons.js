function isScrolledToRight(element) {
  return element.scrollLeft + element.clientWidth > element.scrollWidth - 1;
}

export default function setupScrollButtons() {
  const hourlyScrollLeftBtn = document.getElementById('hourly-scroll-left');
  const hourlyScrollRightBtn = document.getElementById('hourly-scroll-right');

  const hourlyContainer = document.getElementById('hourly-forecast');
  const exampleWidth = document.getElementById('hourly-0').clientWidth;

  hourlyScrollLeftBtn.onclick = () => {
    if (isScrolledToRight(hourlyContainer)) {
      hourlyContainer.scrollLeft -= exampleWidth + 108;
    } else {
      hourlyContainer.scrollLeft -= exampleWidth + 18;
    }
  };

  hourlyScrollRightBtn.onclick = () => {
    hourlyContainer.scrollLeft += exampleWidth + 18;
  };
}
