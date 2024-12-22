// Function to generate random latitude and longitude within Tunisia's boundaries
function getRandomLatLon() {
  // Tunisia Latitude and Longitude Boundaries
  const minLat = 30.2; // Southernmost latitude
  const maxLat = 37.5; // Northernmost latitude
  const minLon = 7.5; // Westernmost longitude
  const maxLon = 11.6; // Easternmost longitude

  // Generate random latitude and longitude
  const randomLat = (Math.random() * (maxLat - minLat) + minLat).toFixed(4);
  const randomLon = (Math.random() * (maxLon - minLon) + minLon).toFixed(4);

  return { lat: randomLat, lon: randomLon };
}

// Function to load the Google Maps iframe with a random place
function loadRandomMap() {
  const { lat, lon } = getRandomLatLon();

  // Set Google Maps iframe URL
  const iframe = document.getElementById("map");
  iframe.src = `https://www.google.com/maps?q=${lat},${lon}&z=10&output=embed`;
}

// Automatically load a random place when the page is opened
window.onload = loadRandomMap;
