export default function saveLastLocation(city, region, country) {
  localStorage.setItem('lastLocation', [city, region, country].join(', '));
}
