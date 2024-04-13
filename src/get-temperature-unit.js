export default function getTemperatureUnit() {
  return localStorage.getItem('temperatureUnit') || 'F';
}
