// Crea una variable que contendrá el elemento de mapa y le da unos ajustes iniciales
var map = L.map('mapa', {
    center: [36.766, -5.425],
    zoom: 12
});

// Crea la variable capa de teselas de OpenCycleMap_3 y la añade al elemento de mapa
var layer_OpenCycleMap_3 = L.tileLayer('https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=8f3fd4826f1641e9a2cead3ef443e05d', {
    attribution: '&copy; OpenCycleMap_3',
    opacity: 0.504,
    minZoom: 12,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 18,
});
layer_OpenCycleMap_3.addTo(map);