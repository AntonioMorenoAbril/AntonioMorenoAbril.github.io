
//MAP

    // Map Variable
var map = L.map('mapa', {
   center: [36.76, -5.46],
    zoom: 13,
    zoomControl: false,
    minZoom:1,
    
});

    // Customize link to view source code; add your own GitHub repository
map.attributionControl
.setPrefix('View <a href="https://github.com/AntonioMorenoAbril/VisorBenamahoma/tree/version1">code on GitHub</a>, created with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');

    // Reposition zoom control other than default topleft
    L.control.zoom({position: "topright"}).addTo(map);

// Scale
L.control.scale({
    imperial: false
}).addTo(map);


// Layer Control 
/*
var controlLayers = L.control.layers( null, null, {
    position: "bottomright", // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // false = open by default
  }).addTo(map);
*/


