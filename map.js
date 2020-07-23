// Crea una variable que contendrá el elemento de mapa y le da unos ajustes iniciales
var map = L.map('mapa', {
    center: [36.76, -5.46],
    zoom: 16
});

// Variable que almacena My_Interest_Zones attributos:




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

// Funcion popup con imagen 

function multiplestringsvariable() {
    const id = ID
    const tipo = Tipo
    const subtipe = Subtipo
    const name = Nombre
}

function popupInfo(feature, layer) {
    if (feature.properties && feature.properties.ID) {

        var popupContent =

            "<div class = 'ventana'> ID: " + feature.properties.ID +
            "<br/>" + "Tipo: " + feature.properties.Tipo +
            "<br/>" + "Subtipo: " + feature.properties.Subtipo +
            "<br>" + "Nombre: " + feature.properties.Nombre +
            "<br>" + "IMG: " + "<br>" + "<a href='https://www.grazalema.es/'> <img src='./images/map/1.jpg' alt='Cabreriza'" +
            "<br>" + "Link: " + "<br>" + "<a href='https://www.grazalema.es/' title= 'Web Ayto. Grazalema' target= '_blank'>Web Ayuntamiento Grazalema </a>"

        console.log(popupContent)
        layer.bindPopup(popupContent)

    }
}
/*
"<div class = 'ventana'> ID: " + feature.properties.ID + 
"<br/>" + "Tipo: " + feature.properties.Tipo + 
"<br/>" + "Subtipo: " + feature.properties.Subtipo + 
"<br>" + "Nombre: " + feature.properties.Nombre + 

"<br>" + "IMG: " + "<br>" + "<a href='https://www.grazalema.es/'> <img src='./images/map/1.jpg' alt='Cabreriza'" + 
"<br>" + "Link: " + "<br>" + "<a href='https://www.grazalema.es/' title= 'Web Ayto. Grazalema' target= '_blank'>Web Ayuntamiento Grazalema </a>"
*/

//var popupContent = "<div class = 'ventana'> ID: " + feature.properties.ID + "<br/>" + "Tipo: " + feature.properties.Tipo + "<br/>" + "Subtipo: " + feature.properties.Subtipo + "<br>" + "Nombre: " + feature.properties.Nombre + "<br>" + "<img src='./images/map/.jpg' alt='Flowers in Chania' width='460' height='345'></div>"




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

L.control.layers(baseMaps, overlayMaps, {
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);

// Escala
L.control.scale({
    imperial: false
}).addTo(map);