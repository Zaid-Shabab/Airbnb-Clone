const coordinates = listingGeometry.coordinates;
const lat = coordinates[1];
const lng = coordinates[0];



const map = L.map('map').setView([lat, lng], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);




    L.marker([lat, lng])
    .addTo(map)
    .bindPopup(`<h4>${listingLocation}</h4><p>Exact location will be provided after booking</p>`)
    .openPopup();