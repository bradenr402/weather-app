export default function getMeasurementUnit() {
  return localStorage.getItem('measurementUnit') || 'in';
}
