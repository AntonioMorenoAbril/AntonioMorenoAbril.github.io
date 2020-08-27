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

// Layer My_Interest_Zones: Cargar archivo .geojson

var My_Interest_Zones = L.geoJson(null, {
    style: stylePolygon
});

$.getJSON("./data/myinterestzones.geojson", function (data) {
    My_Interest_Zones.addData(data);
});

My_Interest_Zones.addTo(map);

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
    iconUrl: './assets/img/icon/marker-icon1.png',
    iconSize: [12, 18]
});

var myIcon2 = L.icon({
    iconUrl: './assets/img/icon/marker-icon2.png',
    iconSize: [12, 18]
});

var myIcon3 = L.icon({
    iconUrl: './assets/img/icon/marker-icon3.png',
    iconSize: [12, 18]
});

var myIcon4 = L.icon({
    iconUrl: './assets/img/icon/marker-icon4.png',
    iconSize: [12, 18]
});

var myIcon5 = L.icon({
    iconUrl: './assets/img/icon/marker-icon5.png',
    iconSize: [12, 18]
});

var myIcon6 = L.icon({
    iconUrl: './assets/img/icon/marker-icon6.png',
    iconSize: [12, 18]
});

// PointToLayer Conditional Symbol Function
function PointToLayer(feature, latlng) {
    var Type = feature.properties.Tipo
    if (Type == "Natural")
        return L.marker(latlng, {
            icon: myIcon1
        });

    else if (Type == "Paisajístico")
        return L.marker(latlng, {
            icon: myIcon2
        });

    else if (Type == "Etnográfico")
        return L.marker(latlng, {
            icon: myIcon3
        });

    else if (Type == "Sendero")
        return L.marker(latlng, {
            icon: myIcon4
        });

    else if (Type == "Arqueológico")
        return L.marker(latlng, {
            icon: myIcon5
        });

    else if (Type == "Infraestructura")
        return L.marker(latlng, {
            icon: myIcon6
        });
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
function PopupInfo(feature, layer) {
    if (feature.properties && feature.properties.ID) {

        var PopupContent =
            `<div class= 'window'>

            <header class='header'> INFORMACIÓN: </header>
                
            <div class='text1'> 
                <p> <b> Tipo: </b> ${feature.properties.Tipo} </p>
                <p> <b> Subtipo: </b> ${feature.properties.Subtipo} </p>
                <p> <b> Nombre: </b> ${feature.properties.Nombre} </p>
                <p> <b> Descripción: </b> ${feature.properties.Descripcio} </p>
                
            </div>
            <!--Images Side by Side -->
            <div class='row'>
                <div class='column'>
                    <a href='https://www.grazalema.es/'><img src='./assets/img/map/1.jpg' alt='Cabreriza' style='width:100%'></a> 
                </div>
                <div class='column'>
                    <img id='myImg1' src='./assets/img/map/2.jpg' alt='Snow' style='width:100%' onclick = "myFunction1()">
                </div>
            </div>
                <p> Web: <a href='https://www.grazalema.es/' title= 'Web Ayto. Grazalema' target= '_blank'> Web Ayuntamiento Grazalema </a> </p>
                <p> Pdf Content: <a href='./assets/pdf/arboles_espiral.pdf' download> <button class='btn'><i class='fa fa-download'></i> Download</button> </p>
    </div>
    `
    }
    layer.bindPopup(PopupContent);
}
// Modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function myFunction1() {
    modal.style.display = "block";
    modalImg.src = "./assets/img/map/2.jpg";
    captionText.innerHTML = "Arbol";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}


// Layer My_Interest_Ptos: Cargar archivo .geojson 

var My_Interest_Ptos = L.geoJson(null, {
    style: stylePoint,
    pointToLayer: PointToLayer,
    onEachFeature: PopupInfo
});


$.getJSON("./data/myinterestptos.geojson", function (data) {
    My_Interest_Ptos.addData(data);
});


My_Interest_Ptos.addTo(map);


controlLayers.addOverlay(My_Interest_Ptos, "Puntos de Interes")


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
    iconUrl: './assets/img/icon/info-icon.png',
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
    "type": "FeatureCollection",
    "features": [{
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-5.48, 36.77]
            },
            "properties": {
                "prop0": "value0",
                "color": "blue"
            }
        },

        {
            "type": "Feature",
            "properties": {
                "info": "<b>Punto de Información Turístico de Benamahoma</b>" +
                    "<br>Calle Cuesta de la Venta, s/n." +
                    "11679, Benamahoma (Cádiz)</br>" +
                    "Telf.: 673300323<br>" +
                    "<a target='_blank' href='https://www.grazalema.es/departamentos-del-ayuntamiento/benamahoma/punto-de-informacion-turistica-de-benamahoma'>Visitar web</a></p>"

            },
            "geometry": {
                "type": "Point",
                "coordinates": [-5.46942, 36.76564]
            }
        }
    ]
};



var geojson1 = L.geoJson(geojsonInfoPto, {
    onEachFeature: popUpInfoOficina,
    pointToLayer: estiloinfoIcon
}).addTo(map);




// My_Tracks

// Style Function
function styleLine(feature) {
    return {
        weight: 2, // grosor de línea
        color: 'black', // color de línea
        opacity: 1, // tansparencia de línea
    };
};
// Layer My_Tracks: Cargar archivo .geojson 
var My_Tracks = L.geoJson(null, {
    style: styleLine,

});

$.getJSON("./data/mytracks.geojson", function (data) {
    My_Tracks.addData(data);
});

My_Tracks.addTo(map);

controlLayers.addOverlay(My_Tracks, "Tracks")

// Plugins 

// Plugin Load Layer Control 
var style1 = {
    color: 'red',
    opacity: 1.0,
    fillOpacity: 1.0,
    weight: 2,
    clickable: false
};
L.Control.FileLayerLoad.LABEL = '<img class="icon" src="./assets/plugins/Leaflet.FileLayer-master/docs/folder.svg" alt="file icon"/>';
control = L.Control.fileLayerLoad({
    fitBounds: true,
    layerOptions: {
        style: style1,
        pointToLayer: function (data, latlng) {
            return L.circleMarker(
                latlng, {
                    style: style1
                }
            );
        }
    }
});
control.addTo(map);


// Plugin MousePosition

L.control.mousePosition().addTo(map);

// Plugin Leaflet.markercluster

    // Markercluster Touristic Info Pto
var markers1 = L.markerClusterGroup();
markers1.addLayer(geojson1);
map.addLayer(markers1);
controlLayers.addOverlay((geojson1,markers1), "Punto de información turístico")

    // Markercluster My_Interest_Ptos

var markers2 = L.markerClusterGroup();
markers2.addLayer(My_Interest_Ptos);
map.addLayer(markers2);




// DUDAS:



/* TASKS

1. Añadir pdf rutas sierra grazalema: Torreon, pinsapar, berral
2. 

*/