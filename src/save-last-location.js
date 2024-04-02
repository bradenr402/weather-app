export default function saveLastLocation(location) {
  localStorage.setItem('lastLocation', `${location.lat},${location.lon}`);
}
