var map = L.map('map').setView([4.675513672627986, -74.1249053684577], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var markers = [
    { lat: 4.6663851638712055, lon: -74.11985667681624, popup: "Salchipaperia" },
    { lat: 4.665675920645431, lon: -74.12039925761289, popup: "Exito Modelia" },
    { lat: 4.669149919220247, lon: -74.12284493503633, popup: "KFC" },
    { lat: 4.67495661846992, lon: -74.13074420703772, popup: "Humedal capellania" },
    { lat: 4.663484417102394, lon: -74.12145964534542, popup: "Parque Amazonas Modelia" }
];

// Agregar los marcadores al mapa
markers.forEach(function(markerData) {
    var marker = L.marker([markerData.lat, markerData.lon]).addTo(map);
    marker.bindPopup("<b>" + markerData.popup + "</b>").openPopup();
});