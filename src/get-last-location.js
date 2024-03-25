export default function getLastLocation() {
  return localStorage.getItem('lastLocation') || 'Tampa';
}
