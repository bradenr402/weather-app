export default function getDistanceUnit() {
  return localStorage.getItem('distanceUnit') || 'mi';
}
