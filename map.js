
// Map Variable
var map = L.map('mapa', {
    center: [36.76, -5.46],
    zoom: 15,
    zoomControl: false,
    minZoom:13,
    
});

// Customize link to view source code; add your own GitHub repository
map.attributionControl
.setPrefix('View <a href="https://github.com/AntonioMorenoAbril/VisorBenamahoma/tree/version1">code on GitHub</a>, created with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');

// Scale
L.control.scale({
    imperial: false
}).addTo(map);

// Reposition zoom control other than default topleft
L.control.zoom({position: "topright"}).addTo(map);

// Layer Control
var controlLayers = L.control.layers( null, null, {
    position: "bottomright", // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // false = open by default
  }).addTo(map);

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

// OVERLAYS LAYERS

// My_Interest_Zones

    // Style Function
function stylePolygon(feature) {
    return {
        weight: 1.3, // grosor de línea
        color: 'yellow', // color de línea
        opacity: 0.5, // tansparencia de línea
        fillColor: 'yellow', // color de relleno
        fillOpacity: 0.5 // transparencia de relleno
    };
};

    // Layer My_Interest_Zones

var My_Interest_Zones = L.geoJson(My_Interest_Zones, {

    style:stylePolygon

}).addTo(map);
controlLayers.addOverlay(My_Interest_Zones, "Zonas de Interes")


// My_Interest_Ptos

    // Style Function
function stylePoint(feature) {
    return {
        color: "green"

    };
};

    // Icon Variables

var myIcon1 = L.icon({
    iconUrl: './images/style/marker-icon1.png',
    iconSize: [18, 18]
});

var myIcon2 = L.icon({
    iconUrl: './images/style/marker-icon2.png',
    iconSize: [18, 18]
});


    // PointToLayer Conditional Symbol Function

function PointToLayer (feature, latlng) {
    var Type = feature.properties.Tipo
    if (Type == "Natural")
        return L.marker(latlng, {icon: myIcon1});

    else if (Type == "Paisajístico")
        return L.marker(latlng, {icon: myIcon2});

    else
        return new L.CircleMarker(latlng, {
            color: "blue",
            fillColor: "blue",
            radius: 10, 
            fillOpacity: 0.85,
            weight: 2,
            opacity: 1,
        });
};

 //Poup Function Leaflet Default
    function PopupInfo (feature, layer) {
        if (feature.properties && feature.properties.ID) {
        var PopupContent = 
                "<div class = 'ventana'>" + 
                        "ID: " + feature.properties.ID +
                        "<br/>" + "Tipo: " + feature.properties.Tipo +
                        "<br/>" + "Subtipo: " + feature.properties.Subtipo +
                        "<br>" + "Nombre: " + feature.properties.Nombre +
                        "<br>" + "IMG: " + 
                            "<div class='row'>" +
                                "<div class='column'>" +
                                    "<a href='https://www.grazalema.es/'> <img src='./images/map/1.jpg' alt='Cabreriza' style='width:100%'>" +
                                "</div>" +
                            "<div class='row'>" +
                                "<div class='column'>" +
                                    "<img src='./images/map/2.jpg' alt='Snow' style='width:100%'>" +
                            "</div>" +
                        "<br>" + "<a href='https://www.grazalema.es/' title= 'Web Ayto. Grazalema' target= '_blank'>Web Ayuntamiento Grazalema </a>" +
                        "<br>" + "Pdf Content:" + "<br>" + "<button class='btn'><i class='fa fa-download'></i> Download</button>"
    }
        layer.bindPopup(PopupContent);
    }
    

    /* Popup Function Table
function PopupInfo (feature, layer) {
    if (feature.properties && feature.properties.ID) {
    var PopupContent = 
        "<div class = 'tabla'>" +
            "<table>" +
                "<thead>" +
                "<tr>" +
                    "<th>ID</th>" +
                    "<th>Tipo</th>" +
                    "<th>Subtipo</th>" +
                    "<th>Nombre</th>" +
                    "<th>Descripción</th>" +
                    "<th>Link</th>" +
                "</tr>" +
                "<tr>" +
                    "<td> " + feature.properties.ID + "</td>" +
                    "<td>" + feature.properties.Tipo + "</td>" +
                    "<td>" + feature.properties.Subtipo + "</td>" +
                    "<td>" + feature.properties.Nombre + "</td>" +
                    "<td>" + feature.properties.Descripcio + "</td>" +
                    "<td><a href='https://www.grazalema.es/' title= 'Web Ayto. Grazalema' target= '_blank'>Web Ayuntamiento Grazalema </a></td>" +
                "</tr>" +
            "</table>" +
        "</div>";
    }
    layer.bindPopup(PopupContent);
}
*/

    // Layer My_Interest_Zones
var My_Interest_Ptos = L.geoJson(My_Interest_Ptos, {

    style: stylePoint,
    pointToLayer: PointToLayer,
    onEachFeature: PopupInfo

}).addTo(map);
controlLayers.addOverlay(My_Interest_Ptos, 'Puntos de Interes');


// Touristic Info Pto

    //Popup Function
function popUpInfoOficina(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.info) {
        layer.bindPopup(feature.properties.info);
    }
}
    // Icon Variable
    var infoIcon = L.icon({
        iconUrl: './images/style/info-icon.png',
        iconSize: [18, 18]
    });

    // Style Function
function estiloinfoIcon(feature, latlng) {
	return L.marker(latlng, {
		icon: infoIcon
		//title: feature.properties.nombre
	})
};

    // Layer Touristic Info Pto
var geojsonInfoPto = {
	"type": "Feature",
	"properties": {
        "info": "<b>Punto de Información Turístico de Benamahoma</b>" +
        "<br>Calle Cuesta de la Venta, s/n." +
        "11679, Benamahoma (Cádiz)</br>"+
        "Telf.: 673300323<br>"+
        "<a target='_blank' href='https://www.grazalema.es/departamentos-del-ayuntamiento/benamahoma/punto-de-informacion-turistica-de-benamahoma'>Visitar web</a></p>"
		
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-5.46942, 36.76564]
	}
};

L.geoJson(geojsonInfoPto, {
    onEachFeature: popUpInfoOficina,
    pointToLayer: estiloinfoIcon
}).addTo(map);









// DUDAS:

/* 

1. ADDING GEOJSON FROM A JSON:


WAY1 TO ADD GEOJSON:

$.getJSON("./data/myinterestptos.geojson", function(data){
    // add GeoJSON layer to the map once the file is loaded
    var myinterestptos = L.geoJson(data).addTo(map);
  });
  controlLayers.addOverlay(myinterestptos, 'Ortofoto PNOA');
 

WAY1 TO ADD GEOJSON:
// specify polygon style for plotting
function polystyle(feature) {
    return {
        fillColor: 'blue',
        weight: 2,
        opacity: 1,
        color: 'black',  //Outline color
        fillOpacity: 0.7
        };
    }
    
    // import geojson using ajax
    var outline = new L.GeoJSON.AJAX("./data/myinterestzones.geojson");      
    
    // add outline to map
    L.geoJSON(outline, {
        style: polystyle
    }).addTo(map);


2. Modifing width of Popupcontent:

function popUpInfoOficina(feature, layer) {
    if (feature.properties && feature.properties.info) {
        layer.bindPopup(L.popup({maxWidth:400}),feature.properties.info);
    }
}


3. Insert html code in javascript 
4. Insert html code in javascript variable

*/




/* Code Security Copy

var PopupContent = 
        "<div class = 'ventana'>" + 
                "ID: " + feature.properties.ID +
                "<br/>" + "Tipo: " + feature.properties.Tipo +
                "<br/>" + "Subtipo: " + feature.properties.Subtipo +
                "<br>" + "Nombre: " + feature.properties.Nombre +
                "<br>" + "IMG: " + "<br>" + "<a href='https://www.grazalema.es/'> <img src='./images/map/1.jpg' alt='Cabreriza'" +
                "<br>" + "Link: " + "<br>" + "<a href='https://www.grazalema.es/' title= 'Web Ayto. Grazalema' target= '_blank'>Web Ayuntamiento Grazalema </a>"

*/






/* TASKS

Añadir tabla 
Añadir for para recorrer cambo de atributos y denominar las fotos
Añadir boton descarga pdf
Añadir barra superior mapa

*/
