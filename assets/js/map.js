
//MAP

    // Map Variable
var map = L.map('mapa', {
   center: [36.7585, -5.4647],
    zoom: 15,
    zoomControl: false,
    minZoom:12,
    doubleClickZoom: false
    
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

//Horizontal Icon Bar

    //infobtn
    
    var modal1 = document.getElementById('popup');
    var btn = document.getElementById("infobtn");
    var span = document.getElementsByClassName("close2")[0];
    btn.onclick = function() {
        modal1.style.display = "block";
    }
    span.onclick = function() {
        modal1.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal1.style.display = "none";
        }
    }
    


