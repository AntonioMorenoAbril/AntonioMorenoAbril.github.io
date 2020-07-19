// Crea una variable que contendrá el elemento de mapa y le da unos ajustes iniciales
var map = L.map('mapa', {
    center: [36.766, -5.425],
    zoom: 12
});

// CAPAS BASE

// Capa OpenCycleMap_3 
var OCM3 = L.tileLayer('https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=8f3fd4826f1641e9a2cead3ef443e05d', {
    attribution: '&copy; OpenCycleMap_3',
    opacity: 0.5,
    minZoom: 12,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 18,
}).addTo(map);

// Ortofoto del PNOA
var PNOA = L.tileLayer.wms('http://www.ign.es/wms-inspire/pnoa-ma', {
    layers: 'OI.OrthoimageCoverage', //nombre de la capa del servicio WMS (ver documento getCapabilities)
    format: 'image/jpeg',
    attribution: '&copy; Instituto Geográfico Nacional de España',
    opacity: 0.3,
    zIndex: 2
}).addTo(map);


// CAPAS SUPERPUESTAS

// Funcion popup 
function popupInfo(feature, layer) { 
	if (feature.properties && feature.properties.ID) 
	{ 
		layer.bindPopup( "<strong>" + feature.properties.ID + "</strong><br/>" + feature.properties.Tipo); 
	} 
}

// Funcion estilo poligono
function stylePolygon(feature) {
    return {
      weight: 1.3, // grosor de línea
      color: 'yellow', // color de línea
      opacity: 0.5, // tansparencia de línea
      fillColor: 'yellow', // color de relleno
      fillOpacity: 0.5 // transparencia de relleno
    };
  };


// Layer
var My_Interest_Zones = L.geoJson(My_Interest_Zones, {
    onEachFeature: popupInfo, //Funcion popup
    style: stylePolygon // Funcion estilo
}).addTo(map);


// Control de capas

var baseMaps = {
    "OCM3": OCM3,
    "Ortofoto": PNOA
};

var overlayMaps = {
    "Zonas_Interes": My_Interest_Zones
};

L.control.layers(baseMaps, overlayMaps,{
	position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
	collapsed: false // true
}).addTo(map);

// Escala
L.control.scale({
    imperial: false
  }
  ).addTo(map);