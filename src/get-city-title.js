import saveLastLocation from './save-last-location';

export default function getCityTitle(location) {
  const city = location.name;
  const region = location.region;
  const country = location.country;

  saveLastLocation(city, region, country);

  if (country === 'United States of America' || country === 'Canada') {
    return `${city}, ${region}, ${country}`;
  } else {
    return `${city}, ${country}`;
  }
}
