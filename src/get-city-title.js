import saveLastLocation from './save-last-location';

export default function getCityTitle(location) {
  const city = location.name;
  const { region } = location;
  const { country } = location;

  saveLastLocation(city, region, country);

  if (country === 'United States of America' || country === 'Canada') {
    return `${city}, ${region}, ${country}`;
  }
  return `${city}, ${country}`;
}
