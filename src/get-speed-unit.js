export default function getSpeedUnit() {
  return localStorage.getItem('distanceUnit') === 'km' ? 'kph' : 'mph';
}
