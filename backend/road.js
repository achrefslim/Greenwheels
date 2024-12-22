// Coordinates for possible random road line start and end points in Tunisia
const randomLineCoordinates = [
    [
      [36.8980, 10.1893], // Tunis
      [33.8869, 9.5375], // Sousse
    ],
    [
      [37.2858, 9.8726], // Bizerte
      [34.0194, 10.1947], // Gabès
    ],
    [
      [35.8256, 10.6395], // Kairouan
      [33.5101, 9.4700], // Tozeur
    ],
    [
      [36.7403, 10.2132], // Hammamet
      [32.9571, 10.1297], // Medenine
    ]
  ];
  
  // Create the map centered on Tunisia
  const map = L.map('map').setView([33.8869, 9.5375], 7); // Tunisia's central coordinates
  
  // Add OpenStreetMap tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  
  // Randomly select a road line from the coordinates array
  const randomIndex = Math.floor(Math.random() * randomLineCoordinates.length);
  const roadLine = randomLineCoordinates[randomIndex];
  
  // Draw the random road line on the map
  const line = L.polyline(roadLine, {color: 'red'}).addTo(map);
  