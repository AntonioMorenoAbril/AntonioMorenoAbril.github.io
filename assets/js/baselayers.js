// BASE LAYERS

// Layer OpenCycleMap_3 
var OCM3 = L.tileLayer('https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=8f3fd4826f1641e9a2cead3ef443e05d', {
    attribution: '&copy; OpenCycleMap_3',
    opacity: 1,
    minZoom: 12,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 18,
}).addTo(map);
controlLayers.addBaseLayer(OCM3, 'OpenCycleMap_3');


// Ortofoto del PNOA
var PNOA = L.tileLayer.wms('http://www.ign.es/wms-inspire/pnoa-ma', {
    layers: 'OI.OrthoimageCoverage', //nombre de la capa del servicio WMS (ver documento getCapabilities)
    format: 'image/jpeg',
    attribution: '&copy; Instituto Geográfico Nacional de España',
    opacity: 1,
    zIndex: 2
});
controlLayers.addBaseLayer(PNOA, 'Ortofoto PNOA');