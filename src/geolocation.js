/* eslint-disable no-console */

export default function geoLocate() {
  return new Promise((resolve, reject) => {
    // Check if geolocation is supported by the browser
    if ('geolocation' in navigator) {
      // Prompt user for permission to access their location
      navigator.geolocation.getCurrentPosition(
        // Success callback function
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          // Resolve promise with location data
          resolve({ lat, lng });
        },
        // Error callback function
        (error) => {
          // Reject promise with error
          reject(new Error(`Error getting user location: ${error.message}`));
        },
      );
    } else {
      // Geolocation is not supported by the browser
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
}
