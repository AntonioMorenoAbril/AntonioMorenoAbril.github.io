// Crea una variable que contendrá el elemento de mapa y le da unos ajustes iniciales
var map = L.map('mapa', {
    center: [36.766, -5.425],
    zoom: 12
});

// Capa OpenCycleMap_3 
L.tileLayer('https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=8f3fd4826f1641e9a2cead3ef443e05d', {
    attribution: '&copy; OpenCycleMap_3',
    opacity: 0.5,
    minZoom: 12,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 18,
}).addTo(map);

// Ortofoto del PNOA
L.tileLayer.wms('http://www.ign.es/wms-inspire/pnoa-ma', {
    layers: 'OI.OrthoimageCoverage', //nombre de la capa del servicio WMS (ver documento getCapabilities)
    format: 'image/jpeg',
    attribution: '&copy; Instituto Geográfico Nacional de España',
    opacity: 0.3,
    zIndex: 2
}).addTo(map);

// Layer
L.geoJson(My_Interest_Zones).addTo(map);
