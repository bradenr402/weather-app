export default function formatTime(date) {
  const time = new Date(date);
  let format = '{h}:{m}{ap}';

  let h = time.getHours();

  const ap = h > 11 ? 'pm' : 'am';

  if (h > 12) h -= 12;

  let m = time.getMinutes();
  if (m < 10) m = `0${m}`;

  format = format.replace(/\{ap\}/g, ap);
  format = format.replace(/\{h\}/g, h);
  format = format.replace(/\{m\}/g, m);

  return format;
}
