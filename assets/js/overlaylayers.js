// OVERLAYS LAYERS


// Area del Proyecto

// Style Function
function stylePolygon1(feature) {
    return {
        weight: 3, // grosor de línea
        color:  'rgb(1, 1, 1)', // color de línea
        opacity: 1, // tansparencia de línea
        dashArray: '50,40',
        fillColor: 'yellow', // color de relleno
        fillOpacity: 0 // transparencia de relleno
    };
};

// Layer Area de Trabajo: Cargar archivo .geojson

var AreaProyecto = L.geoJson(null, {
    style: stylePolygon1
});

$.getJSON("./data/AreaProyecto.geojson", function (data) {
    AreaProyecto.addData(data);
});

AreaProyecto.addTo(map);

// Limites Municipios

// Style Function
function styleLine1(feature) {
    return {
        weight: 3, // grosor de línea
        color:  'rgb(224, 30, 20)', // color de línea
        opacity: 1, // tansparencia de línea
        dashArray: '50,40',
        fillColor: 'yellow', // color de relleno
        fillOpacity: 0 // transparencia de relleno
    };
};

// Layer Limites Municipios: Cargar archivo .geojson

var LimitesMunicipios = L.geoJson(null, {
    style: styleLine1
});

$.getJSON("./data/LimitesMunicipales.geojson", function (data) {
    LimitesMunicipios.addData(data);
});

//LimitesMunicipios.addTo(map);

// Limites Parque Natural

// Style Function
function stylePolygon2(feature) {
    return {
        weight: 3, // grosor de línea
        color:  'rgb(224, 137, 22)', // color de línea
        opacity: 1, // tansparencia de línea
        dashArray: '20,10',
        fillColor: 'yellow', // color de relleno
        fillOpacity: 0 // transparencia de relleno
    };
};

// Layer Limites Parque Natural: Cargar archivo .geojson

var LimitesParque = L.geoJson(null, {
    style: stylePolygon2
});

$.getJSON("./data/LimitesParqueNatural.geojson", function (data) {
    LimitesParque.addData(data);
});

//LimitesParque.addTo(map);


// Monte Público

// Style Function
function stylePolygon3(feature) {
    return {
        weight: 3, // grosor de línea
        color: 'rgb(4, 56, 20)', // color de línea
        opacity: 0.8, // tansparencia de línea
        //fillColor: 'rgb(4, 56, 20)', // color de relleno
        //fillOpacity: 0.5 // transparencia de relleno
    };
};

// Layer Monte Público: Cargar archivo .geojson

var MontePublico = L.geoJson(null, {
    style: stylePolygon3
});

$.getJSON("./data/MontePublico.geojson", function (data) {
    MontePublico.addData(data);
});

//MontePublico.addTo(map);

// Parcelas Catastro

// Style Function
function stylePolygon4(feature) {
    return {
        weight: 1, // grosor de línea
        color: 'rgb(55, 46, 55)', // color de línea
        opacity: 0.7, // tansparencia de línea
        fillColor: 'rgb(55, 46, 55)', // color de relleno
        fillOpacity: 0.5 // transparencia de relleno
    };
};

// Layer Parcelas Catastro: Cargar archivo .geojson

var ParcelasCatastro = L.geoJson(null, {
    style: stylePolygon4
});

$.getJSON("./data/ParcelasCatastro.geojson", function (data) {
    ParcelasCatastro.addData(data);
});

ParcelasCatastro.addTo(map);

// Rios

// Style Function
function styleLine2(feature) {
    return {
        weight: 2.5, // grosor de línea
        color:  'rgb(0, 193, 255)', // color de línea
        opacity: 0.4, // tansparencia de línea
        //dashArray: '20,10',
        
    };
};

// Layer Rios: Cargar archivo .geojson

var Rios = L.geoJson(null, {
    style: styleLine2
});

$.getJSON("./data/Rios.geojson", function (data) {
    Rios.addData(data);
});

//Rios.addTo(map);

// Senderos Actuales

// Style Function
function styleLine3(feature) {
    return {
        weight: 3, // grosor de línea
        color:  'rgb(10, 113, 247)', // color de línea
        opacity: 1, // tansparencia de línea
        //dashArray: '20,10'
    };
};

// Popup function
//onEachFeature
function PopupInfo3 (feature,layer) {
// Popup function
    if (feature.properties && feature.properties.ID) {

        var PopupContent3 =   
    
            `<div class='window1'>
            <header class='header1'> <b> INFORMACIÓN SENDERO SEÑALIZADO: </b> </header>
                    
                <div class='text1'> 
                    <p> <b> Nombre: </b> ${feature.properties.Nombre} </p>
                    <p> <b> Recorrido: </b> ${feature.properties.Descripcio} </p>
                    <p> <b> Longitud (m): </b> ${feature.properties.Longitud} </p>
                    <p> <b> Dificultad: </b> ${feature.properties.Dificultad} </p>
                    <p> <b> Paraje: </b> ${feature.properties.Paraje} </p>
                
                    <p> <b> Web Parque Natural: </b> <a href='${feature.properties.Website}' title= 'Web Parque Natural' target= '_blank'> ${feature.properties.Nombre} </a> </p>
                    <p> <b> Fichero pdf ruta: </b> <a href='${feature.properties.Pdf_Path}' download> <button class='btn1'><i class='fa fa-download'></i> Download</button> </p>     
                </div>
    </div>`

    var PopupContent6 =   
        
            `<div class='window2'>      
                <div class='text1'> 
                    ${feature.properties.Nombre}  
                </div>
            </div>
            `

    }
    layer.bindPopup(PopupContent3);

//Hightlight Track when mousesover
    
         layer.on('mouseover', function() {
            this.bringToFront();
            this.setPopupContent(PopupContent6);
            this.openPopup()
            this.setStyle({
            weight: 3, // grosor de línea
            opacity: 1, // tansparencia de línea
            color: 'rgb(255, 0, 26)'
            });
            });
    
            
        layer.on('mouseout', function() {
            //this.closePopup()
            this.setStyle({
            weight: 3, // grosor de línea
            color:  'rgb(10, 113, 247)', // color de línea
            opacity: 1, // tansparencia de línea
            //dashArray: '20,10'
            });
            });  
    
        layer.on('click', function() {
            this.bringToFront();
            this.setPopupContent(PopupContent3);
            this.setStyle({
            weight: 5, // grosor de línea
            color: 'rgb(255, 0, 26)', // color de línea
            opacity: 1, // tansparencia de línea
            });
            }); 
    
        layer.on('dblclick', function() {
            this.closePopup()
            });  
        }
    

// Layer Senderos Actuales: Cargar archivo .geojson

var SenderosActuales = L.geoJson(null, {
    style: styleLine3,
    onEachFeature: PopupInfo3
});

$.getJSON("./data/SenderosActuales.geojson", function (data) {
    SenderosActuales.addData(data);
});

SenderosActuales.addTo(map);



// My_Interest_Ptos

//Poup Function Leaflet Default

// List image function: Create div column for each image 
function ListImg (idfoto) {
    var HtmlImg =""
    var IdPhoto = idfoto
    var IdPhotoList = IdPhoto.split(',')

    IdPhotoList.forEach((foto) => {
        
       HtmlImg += `<div class='column1'>
        <img id='myImg1' src='./assets/img/map/Merge/${foto}.jpg' alt='${foto}' style='width:100%' onclick = "myFunction1(${foto})">
       </div>` 
    
    })
    console.log(HtmlImg)
    return HtmlImg 
 
} 

// Popup function
function PopupInfo (feature,layer) {
    if (feature.properties && feature.properties.ID) {
    
        var PopupContent =   
            //Images Side by Side//
            `<div class='window1'>
            <header class='header1'> INFORMACIÓN PUNTO DE INTERÉS: </header>
                    
                <div class='text1'> 
                    <p> <b> Tipo: </b> ${feature.properties.Tipo} </p>
                    <p> <b> Subtipo: </b> ${feature.properties.Subtipo} </p>
                    <p> <b> Nombre: </b> ${feature.properties.Nombre} </p>
                    <p> <b> Descripción: </b> ${feature.properties.Descripcio} </p>
                    <p> <b> Fotos: </b> </p>
                    
                </div>
            <!--Images Side by Side -->
            <div class='row1'>
                <!-- List the Img and Trigger the Modal -->
                 ${ListImg(feature.properties.Foto_ID)}

                 
                    </div>
            </div>
            `
            var PopupContent4 =   
        
            `<div class='window2'>      
                <div class='text1'> 
                    ${feature.properties.Nombre}  
                </div>
            </div>
            `
    }
    layer.bindPopup(PopupContent);


    //Create Popup in Interest Points when mousesover

    layer.on('mouseover', function() {
        
        this.setPopupContent(PopupContent4);
        this.openPopup()
        });

    layer.on('mouseout', function() {
        //this.closePopup(PopupContent4)
        });  
    
    layer.on('click', function() {
        this.setPopupContent(PopupContent);
        this.openPopup()
        }); 
        
    }

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

var myIcon7 = L.icon({
    iconUrl: './assets/img/icon/AreaRecreativa.png',
    iconSize: [20,20]
});

var myIcon8 = L.icon({
    iconUrl: './assets/img/icon/Ayuntamiento.png',
    iconSize: [30,30]
});

var myIcon9 = L.icon({
    iconUrl: './assets/img/icon/Cajero.png',
    iconSize: [25,25]
});

var myIcon10 = L.icon({
    iconUrl: './assets/img/icon/Camping.png',
    iconSize: [25,25]
});

var myIcon11 = L.icon({
    iconUrl: './assets/img/icon/Colegio.png',
    iconSize: [25,25]
});

var myIcon12 = L.icon({
    iconUrl: './assets/img/icon/Iglesia.png',
    iconSize: [30,30]
});

var myIcon13 = L.icon({
    iconUrl: './assets/img/icon/Farmacia.png',
    iconSize: [22,27]
});

var myIcon14 = L.icon({
    iconUrl: './assets/img/icon/Kiosko.png',
    iconSize: [22,27]
});

var myIcon15 = L.icon({
    iconUrl: './assets/img/icon/Medico.png',
    iconSize: [20,20]
});

var myIcon16 = L.icon({
    iconUrl: './assets/img/icon/Ermita.png',
    iconSize: [20,20]
});

var myIcon17 = L.icon({
    iconUrl: './assets/img/icon/Museo.png',
    iconSize: [20,20]
});

var myIcon18 = L.icon({
    iconUrl: './assets/img/icon/Bus.png',
    iconSize: [20,20]
});

var myIcon19 = L.icon({
    iconUrl: './assets/img/icon/Parking.png',
    iconSize: [20,20]
});

var myIcon20 = L.icon({
    iconUrl: './assets/img/icon/Parque.png',
    iconSize: [15,15]
});

var myIcon21 = L.icon({
    iconUrl: './assets/img/icon/PistaDeportes.png',
    iconSize: [20,20]
});

var myIcon22 = L.icon({
    iconUrl: './assets/img/icon/PlazaToros.png',
    iconSize: [20,20]
});

var myIcon23 = L.icon({
    iconUrl: './assets/img/icon/Baños.png',
    iconSize: [20,20]
});

var myIcon24 = L.icon({
    iconUrl: './assets/img/icon/Fuente.png',
    iconSize: [20,20]
});

var myIcon25 = L.icon({
    iconUrl: './assets/img/icon/AreaDescanso.png',
    iconSize: [23,23]
});



// PointToLayer Conditional Symbol Function
function PointToLayer(feature, latlng) {
    var Type = feature.properties.Tipo
    var Subtype = feature.properties.Subtipo

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
    
    else if (Type == "Infraestructura" && Subtype == "Área descanso" )
    return L.marker(latlng, {
        icon: myIcon7
        });

    else if (Type == "Infraestructura" && Subtype == "Ayuntamiento" )
    return L.marker(latlng, {
        icon: myIcon8
        });

    else if (Type == "Infraestructura" && Subtype == "Cajero" )
    return L.marker(latlng, {
        icon: myIcon9
        });

    else if (Type == "Infraestructura" && Subtype == "Camping" )
    return L.marker(latlng, {
        icon: myIcon10
        });

    else if (Type == "Infraestructura" && Subtype == "Colegio" )
    return L.marker(latlng, {
        icon: myIcon11
        });
    
    else if (Type == "Infraestructura" && Subtype == "Iglesia" )
    return L.marker(latlng, {
        icon: myIcon12
        });

    else if (Type == "Infraestructura" && Subtype == "Farmacia" )
    return L.marker(latlng, {
        icon: myIcon13
        });

    else if (Type == "Infraestructura" && Subtype == "Kiosko" )
    return L.marker(latlng, {
        icon: myIcon14
        });
    
    else if (Type == "Infraestructura" && Subtype == "Médico" )
    return L.marker(latlng, {
        icon: myIcon15
        });
        
    else if (Type == "Infraestructura" && Subtype == "Ermita" )
    return L.marker(latlng, {
        icon: myIcon16
        });

    else if (Type == "Infraestructura" && Subtype == "Museo" )
    return L.marker(latlng, {
        icon: myIcon17
        });

    else if (Type == "Infraestructura" && Subtype == "Parada Bus" )
    return L.marker(latlng, {
        icon: myIcon18
        });

    else if (Type == "Infraestructura" && Subtype == "Parking" )
    return L.marker(latlng, {
        icon: myIcon19
        });

    else if (Type == "Infraestructura" && Subtype == "Parque" || Subtype == "Plaza" || Subtype == "Asiento" )
    return L.marker(latlng, {
        icon: myIcon20
        });

    else if (Type == "Infraestructura" && Subtype == "Pista deportes" )
    return L.marker(latlng, {
        icon: myIcon21
        });

    else if (Type == "Infraestructura" && Subtype == "Plaza Toros" )
    return L.marker(latlng, {
        icon: myIcon22
        });

    else if (Type == "Infraestructura" && Subtype == "Baños" )
    return L.marker(latlng, {
        icon: myIcon23
        });

    else if (Type == "Infraestructura" && Subtype == "Fuente" )
    return L.marker(latlng, {
        icon: myIcon24
        });

    else if (Type == "Infraestructura" && Subtype == "Área de descanso" )
    return L.marker(latlng, {
        icon: myIcon25
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


// Modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function myFunction1(foto) {
    modal.style.display = "block";
    modalImg.src = `./assets/img/map/Merge/${foto}.jpg`;
    //captionText.innerHTML = `${foto}`;
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}


// Layer My_Interest_Ptos: Cargar archivo .geojson 

// Layer My_Interest_Ptos_Natural: Cargar archivo .geojson 
var My_Interest_Ptos_Natural = L.geoJson(null, {
    style: stylePoint,
    pointToLayer: PointToLayer,
    onEachFeature: PopupInfo,
    filter: function (feature, layer) {
        return feature.properties.Tipo == "Natural";
    },
});

$.getJSON("./data/myinterestptos.geojson", function (data) {
    My_Interest_Ptos_Natural.addData(data);
});

//My_Interest_Ptos_Natural.addTo(map);
//controlLayers.addOverlay(My_Interest_Ptos_Natural, "Pto. Interés Natural")

// Layer My_Interest_Ptos_Paisajistico: Cargar archivo .geojson 
var My_Interest_Ptos_Paisajistico = L.geoJson(null, {
    style: stylePoint,
    pointToLayer: PointToLayer,
    onEachFeature: PopupInfo,
    filter: function (feature, layer) {
        return feature.properties.Tipo == "Paisajístico";
    },
});

$.getJSON("./data/myinterestptos.geojson", function (data) {
    My_Interest_Ptos_Paisajistico.addData(data);
});

//My_Interest_Ptos_Paisajistico.addTo(map);
//controlLayers.addOverlay(My_Interest_Ptos_Paisajistico, "Pto. Interés Paisajístico")

// Layer My_Interest_Ptos_Etnografico: Cargar archivo .geojson 
var My_Interest_Ptos_Etnografico = L.geoJson(null, {
    style: stylePoint,
    pointToLayer: PointToLayer,
    onEachFeature: PopupInfo,
    filter: function (feature, layer) {
        return feature.properties.Tipo == "Etnográfico";
    },
});

$.getJSON("./data/myinterestptos.geojson", function (data) {
    My_Interest_Ptos_Etnografico.addData(data);
});

//My_Interest_Ptos_Etnografico.addTo(map);
//controlLayers.addOverlay(My_Interest_Ptos_Etnografico, "Pto. Interés Etnográfico")

/* // Layer My_Interest_Ptos_Sendero: Cargar archivo .geojson 
var My_Interest_Ptos_Sendero = L.geoJson(geojsonSenderoPto, {
    style: stylePoint,
    pointToLayer: PointToLayer,
    onEachFeature: PopupInfo,
    filter: function (feature, layer) {
        return feature.properties.Tipo == "Sendero";
    },
});

$.getJSON("./data/myinterestptos.geojson", function (data) {
    My_Interest_Ptos_Sendero.addData(data);
});

My_Interest_Ptos_Sendero.addTo(map);
controlLayers.addOverlay(My_Interest_Ptos_Sendero, "Pto. Interés Sendero") */

// Layer My_Interest_Ptos_Arqueologico: Cargar archivo .geojson 
var My_Interest_Ptos_Arqueologico = L.geoJson(null, {
    style: stylePoint,
    pointToLayer: PointToLayer,
    onEachFeature: PopupInfo,
    filter: function (feature, layer) {
        return feature.properties.Tipo == "Arqueológico";
    },
});

$.getJSON("./data/myinterestptos.geojson", function (data) {
    My_Interest_Ptos_Arqueologico.addData(data);
});

//My_Interest_Ptos_Arqueologico.addTo(map);
//controlLayers.addOverlay(My_Interest_Ptos_Arqueologico, "Pto. Interés Arqueólogico")

// Layer My_Interest_Ptos_Infraestructura: Cargar archivo .geojson 
var My_Interest_Ptos_Infraestructura = L.geoJson(null, {
    style: stylePoint,
    pointToLayer: PointToLayer,
    onEachFeature: PopupInfo,
    filter: function (feature, layer) {
        return feature.properties.Tipo == "Infraestructura";
    },
});

$.getJSON("./data/myinterestptos.geojson", function (data) {
    My_Interest_Ptos_Infraestructura.addData(data);
});

//My_Interest_Ptos_Infraestructura.addTo(map);
//controlLayers.addOverlay(My_Interest_Ptos_Infraestructura, "Pto. Interés Infraestructrua")

// Layer Sendero Interest Pto: Create geojson 

var geojsonSenderoPto = 

{
    "type": "FeatureCollection",
    "name": "myinterestptosSendero",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "ID": 22, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "28", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462053458831676, 36.756525812690036 ] } },
    { "type": "Feature", "properties": { "ID": 29, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "53", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.473645798382249, 36.766702972896809 ] } },
    { "type": "Feature", "properties": { "ID": 36, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero a través de encinas y algarrobos", "Foto_ID": "62", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.479407326790111, 36.765467671727322 ] } },
    { "type": "Feature", "properties": { "ID": 38, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección cortafuegos\/El Bosque o dirección llanos de la Sierra Albarracín", "Foto_ID": "64,65", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.480724622402517, 36.762330160949496 ] } },
    { "type": "Feature", "properties": { "ID": 58, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Inicio del sendero", "Foto_ID": "140", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Molino del Susto", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464154743962383, 36.758750497156981 ] } },
    { "type": "Feature", "properties": { "ID": 60, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "142", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Molino del Susto", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463357906960073, 36.757685629510313 ] } },
    { "type": "Feature", "properties": { "ID": 61, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección A-372 o dirección Molino del Susto", "Foto_ID": "143,144", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Molino del Susto", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463171539755757, 36.757485211195167 ] } },
    { "type": "Feature", "properties": { "ID": 62, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero hacia la cascada que hay justo encima del molino", "Foto_ID": "153", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Molino del Susto", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463112826567355, 36.757282677281168 ] } },
    { "type": "Feature", "properties": { "ID": 65, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero entre vegetación", "Foto_ID": "156", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Molino del Susto", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462837476578263, 36.757414231633547 ] } },
    { "type": "Feature", "properties": { "ID": 67, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifuración sendero", "Descripcio": "Bifuración del sendero: dirección A-372 o dirección poza Arroyo del Descansadero", "Foto_ID": "158", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Molino del Susto", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462437932103912, 36.757177046735826 ] } },
    { "type": "Feature", "properties": { "ID": 70, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "98", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.455778480239943, 36.757127353876143 ] } },
    { "type": "Feature", "properties": { "ID": 75, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección Llanos del Berral o dirección carretera A-372", "Foto_ID": "139", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.456222955159554, 36.754698659192677 ] } },
    { "type": "Feature", "properties": { "ID": 76, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "104", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.456244599292075, 36.754351313466657 ] } },
    { "type": "Feature", "properties": { "ID": 78, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "107", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.456364925891008, 36.752726532801745 ] } },
    { "type": "Feature", "properties": { "ID": 83, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero entre calizas trituradas", "Foto_ID": "112", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.461631506194479, 36.748216716427848 ] } },
    { "type": "Feature", "properties": { "ID": 85, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero entre piedras calizas", "Foto_ID": "114", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462649388041815, 36.747837295885475 ] } },
    { "type": "Feature", "properties": { "ID": 87, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifuración sendero", "Descripcio": "Bifurcación del sendero: dirección Llanos de la Sierra del Albarracín o dirección Pico del Granadillo", "Foto_ID": "116,117", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464115619414009, 36.748354177493773 ] } },
    { "type": "Feature", "properties": { "ID": 88, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "118", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463850710961469, 36.74870084001757 ] } },
    { "type": "Feature", "properties": { "ID": 92, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "122", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462138004720366, 36.750576131971727 ] } },
    { "type": "Feature", "properties": { "ID": 97, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "136", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464393758831247, 36.748408684645895 ] } },
    { "type": "Feature", "properties": { "ID": 98, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "137", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.467601611059782, 36.750541597568521 ] } },
    { "type": "Feature", "properties": { "ID": 99, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "138", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.469471447686996, 36.753825092541312 ] } },
    { "type": "Feature", "properties": { "ID": 103, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "162", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464586519405441, 36.766655926433238 ] } },
    { "type": "Feature", "properties": { "ID": 104, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección El Nacimiento o dirección plaza de toros", "Foto_ID": "163", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464236166022412, 36.766892124394637 ] } },
    { "type": "Feature", "properties": { "ID": 105, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "164", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463975301737565, 36.767050154773557 ] } },
    { "type": "Feature", "properties": { "ID": 106, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "165", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463455364366422, 36.767475194141589 ] } },
    { "type": "Feature", "properties": { "ID": 107, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "166", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463130610663851, 36.767648173543122 ] } },
    { "type": "Feature", "properties": { "ID": 111, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección cementerio o dirección El Pinsapar", "Foto_ID": "171", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.461061013842179, 36.768343770163135 ] } },
    { "type": "Feature", "properties": { "ID": 115, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso a El Pinsapar", "Foto_ID": "177", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.459484513197245, 36.768940555848275 ] } },
    { "type": "Feature", "properties": { "ID": 116, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "178", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.459456259406386, 36.768957492896277 ] } },
    { "type": "Feature", "properties": { "ID": 119, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección El Pinsapar o dirección Cerro La Atalaya", "Foto_ID": "181", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.456170470293988, 36.767585018971467 ] } },
    { "type": "Feature", "properties": { "ID": 120, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "182", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.45619450408833, 36.767329693944397 ] } },
    { "type": "Feature", "properties": { "ID": 122, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "184", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.457045669576855, 36.765871713855546 ] } },
    { "type": "Feature", "properties": { "ID": 125, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección a Cruz de La Atalaya, dirección ruinas de La Atalaya o dirección Sierra del Pinar", "Foto_ID": "187", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": "La foto es confusa por la orientación", "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.458359305780189, 36.764129357930734 ] } },
    { "type": "Feature", "properties": { "ID": 126, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "190", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.460181250884356, 36.765151539309414 ] } },
    { "type": "Feature", "properties": { "ID": 127, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección a Cruz de La Atalaya o dirección ruinas de La Atalaya", "Foto_ID": "191", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.461284067889, 36.76504288781662 ] } },
    { "type": "Feature", "properties": { "ID": 128, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "192", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462250856043642, 36.765128409777688 ] } },
    { "type": "Feature", "properties": { "ID": 129, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección Cruz de La Ataya, dirección plaza de toros o dirección El Pinsapar", "Foto_ID": "193", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462696320472684, 36.76573302026577 ] } },
    { "type": "Feature", "properties": { "ID": 136, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero. Discurre sobre las ruinas", "Foto_ID": "205", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462292886882896, 36.764276491430017 ] } },
    { "type": "Feature", "properties": { "ID": 138, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero. Discurre sobre las ruinas", "Foto_ID": "207", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462179348691149, 36.76423731919401 ] } },
    { "type": "Feature", "properties": { "ID": 139, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero. Discurre sobre las ruinas", "Foto_ID": "208", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.461954058616457, 36.764149398268003 ] } },
    { "type": "Feature", "properties": { "ID": 140, "Tipo": "Sendero", "Subtipo": "Trazo sendero", "Nombre": "Trazo del sendero", "Descripcio": "Trazo del sendero. Discurre sobre las ruinas", "Foto_ID": "209", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.461734201246461, 36.764056875426107 ] } },
    { "type": "Feature", "properties": { "ID": 144, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "217", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.460632834556679, 36.763800199849406 ] } },
    { "type": "Feature", "properties": { "ID": 145, "Tipo": "Sendero", "Subtipo": "Referencia", "Nombre": "Encina", "Descripcio": "Bonito ejemplar de encina centenaria. Punto de referencia", "Foto_ID": "218", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462189816821655, 36.764206654312687 ] } },
    { "type": "Feature", "properties": { "ID": 146, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "219", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.460685194036174, 36.763894730295981 ] } },
    { "type": "Feature", "properties": { "ID": 149, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "222", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.460330874691385, 36.763705586514149 ] } },
    { "type": "Feature", "properties": { "ID": 150, "Tipo": "Sendero", "Subtipo": "Referencia", "Nombre": "Encina", "Descripcio": "Bonita encina con vistas a Sierra del Pinar. Punto de referencia", "Foto_ID": "223,224", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.459635047552544, 36.763631505795892 ] } },
    { "type": "Feature", "properties": { "ID": 151, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "225", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.465539188867371, 36.764776875425376 ] } },
    { "type": "Feature", "properties": { "ID": 152, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "226", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.465449533739188, 36.764850508275629 ] } },
    { "type": "Feature", "properties": { "ID": 153, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "227", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.465236645294143, 36.764991698828972 ] } },
    { "type": "Feature", "properties": { "ID": 154, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "228", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": "Pendiente recorrer alternativa de la derecha", "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.465186634351388, 36.765041999103367 ] } },
    { "type": "Feature", "properties": { "ID": 155, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "229", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.465068945723228, 36.765122007459276 ] } },
    { "type": "Feature", "properties": { "ID": 156, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "230", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464912119168145, 36.765229833240234 ] } },
    { "type": "Feature", "properties": { "ID": 157, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "231", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464833368000177, 36.764978225815483 ] } },
    { "type": "Feature", "properties": { "ID": 158, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "232,251", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464786911456134, 36.764753936196442 ] } },
    { "type": "Feature", "properties": { "ID": 159, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "233", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464798976500367, 36.764867892340284 ] } },
    { "type": "Feature", "properties": { "ID": 160, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "234", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464560567681542, 36.764880141231842 ] } },
    { "type": "Feature", "properties": { "ID": 161, "Tipo": "Sendero", "Subtipo": "Referencia", "Nombre": "Perrera", "Descripcio": "Perrera abandonada", "Foto_ID": "235", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464502101221635, 36.76480641930614 ] } },
    { "type": "Feature", "properties": { "ID": 162, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "236", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464577497172384, 36.764743013686292 ] } },
    { "type": "Feature", "properties": { "ID": 163, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "237", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464344520948058, 36.764624833658104 ] } },
    { "type": "Feature", "properties": { "ID": 164, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "238", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464287496522126, 36.764703491006784 ] } },
    { "type": "Feature", "properties": { "ID": 165, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "239", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464321016052558, 36.764924604370414 ] } },
    { "type": "Feature", "properties": { "ID": 166, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "240", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464437325267189, 36.764647342710035 ] } },
    { "type": "Feature", "properties": { "ID": 167, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "241", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Benamahoma", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464376585944311, 36.765098429734621 ] } },
    { "type": "Feature", "properties": { "ID": 168, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "242", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Benamahoma", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464170654961808, 36.764309122081933 ] } },
    { "type": "Feature", "properties": { "ID": 169, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección las canteras o dirección Cruz de La Atalaya", "Foto_ID": "243", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Benamahoma", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463947733032582, 36.763882759639131 ] } },
    { "type": "Feature", "properties": { "ID": 170, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "244", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Benamahoma", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463845845595534, 36.76459087326419 ] } },
    { "type": "Feature", "properties": { "ID": 171, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección Cruz de La Atalaya o dirección El Nacimiento", "Foto_ID": "245", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Benamahoma", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463817737729948, 36.764887128022629 ] } },
    { "type": "Feature", "properties": { "ID": 172, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "246", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Benamahoma", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.46378285509973, 36.763665888842333 ] } },
    { "type": "Feature", "properties": { "ID": 173, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "247", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.465581013356259, 36.764745523910612 ] } },
    { "type": "Feature", "properties": { "ID": 174, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "248", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.465519328832655, 36.764827537872826 ] } },
    { "type": "Feature", "properties": { "ID": 175, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "249", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.465382578243476, 36.764878492135296 ] } },
    { "type": "Feature", "properties": { "ID": 176, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "250", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.465310196051196, 36.764868718173133 ] } },
    { "type": "Feature", "properties": { "ID": 177, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "252", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463638245109014, 36.763417011662291 ] } },
    { "type": "Feature", "properties": { "ID": 180, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "256", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463111698940575, 36.762557370885808 ] } },
    { "type": "Feature", "properties": { "ID": 181, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "257", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462981627951115, 36.762351684306346 ] } },
    { "type": "Feature", "properties": { "ID": 183, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección La Atalaya o dirección las canteras", "Foto_ID": "259,260", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462504272105578, 36.762175462604347 ] } },
    { "type": "Feature", "properties": { "ID": 184, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "261", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462460169263911, 36.762137342262577 ] } },
    { "type": "Feature", "properties": { "ID": 185, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "262", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462340918153214, 36.762070351444926 ] } },
    { "type": "Feature", "properties": { "ID": 186, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero al borde de cantera", "Foto_ID": "263", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462287776923234, 36.762051821780929 ] } },
    { "type": "Feature", "properties": { "ID": 187, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección Llanos del Campo o dirección Benamahoma", "Foto_ID": "264", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462182246811914, 36.761970805616286 ] } },
    { "type": "Feature", "properties": { "ID": 190, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "268", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462645273650927, 36.761687453008889 ] } },
    { "type": "Feature", "properties": { "ID": 191, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "269", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463032860450408, 36.761882370227767 ] } },
    { "type": "Feature", "properties": { "ID": 192, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "270", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463071081284534, 36.762326124321824 ] } },
    { "type": "Feature", "properties": { "ID": 193, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero al borde de una cantera", "Foto_ID": "271", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462525534689607, 36.761558260205682 ] } },
    { "type": "Feature", "properties": { "ID": 194, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "272", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.461887057363766, 36.761170423027572 ] } },
    { "type": "Feature", "properties": { "ID": 195, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección las canteras, dirección Benamahoma o dirección carrtera A-372", "Foto_ID": "273", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.461693628338461, 36.76068518536718 ] } },
    { "type": "Feature", "properties": { "ID": 197, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección A-372 o dirección Benamahoma", "Foto_ID": "274", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462489839191986, 36.760556742642223 ] } },
    { "type": "Feature", "properties": { "ID": 198, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "275", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463015486498982, 36.760432178408806 ] } },
    { "type": "Feature", "properties": { "ID": 199, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "276", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463856502847735, 36.760411883492353 ] } },
    { "type": "Feature", "properties": { "ID": 200, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "277", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464328141100912, 36.760292974933463 ] } },
    { "type": "Feature", "properties": { "ID": 201, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "278", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463456559471425, 36.760451187063097 ] } },
    { "type": "Feature", "properties": { "ID": 202, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "279", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463427454804165, 36.760857888077489 ] } },
    { "type": "Feature", "properties": { "ID": 203, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "280", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463974896239874, 36.760966020098721 ] } },
    { "type": "Feature", "properties": { "ID": 204, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "281", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462925374305567, 36.760772938623909 ] } },
    { "type": "Feature", "properties": { "ID": 205, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "282", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.461642740831133, 36.760456008970131 ] } },
    { "type": "Feature", "properties": { "ID": 206, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "283", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462506196180934, 36.762197219411448 ] } },
    { "type": "Feature", "properties": { "ID": 207, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "284", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462520964232098, 36.762469177334538 ] } },
    { "type": "Feature", "properties": { "ID": 208, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "285", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462209350342327, 36.763239289842311 ] } },
    { "type": "Feature", "properties": { "ID": 209, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "286", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462258649661237, 36.76399934375678 ] } },
    { "type": "Feature", "properties": { "ID": 211, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "288", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462206217124247, 36.764123350231863 ] } },
    { "type": "Feature", "properties": { "ID": 212, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "289", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463677472414771, 36.765346207502937 ] } },
    { "type": "Feature", "properties": { "ID": 213, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "290", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463477313290984, 36.76623032879494 ] } },
    { "type": "Feature", "properties": { "ID": 214, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "291", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.46354747848652, 36.766950316019454 ] } },
    { "type": "Feature", "properties": { "ID": 216, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "295", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464179274043108, 36.76688208229379 ] } },
    { "type": "Feature", "properties": { "ID": 217, "Tipo": "Sendero", "Subtipo": "Referencia", "Nombre": "Edificación de piedra", "Descripcio": "Edificación de piedra con roca superpuesta", "Foto_ID": "296", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463886501422415, 36.766924910713918 ] } },
    { "type": "Feature", "properties": { "ID": 220, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "299", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Benamahoma", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464213514875419, 36.767809932115185 ] } },
    { "type": "Feature", "properties": { "ID": 226, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero: escaleras", "Foto_ID": "305", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Rio Majaceite", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.463209403599292, 36.767799750256493 ] } },
    { "type": "Feature", "properties": { "ID": 229, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero: puente", "Foto_ID": "312", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Rio Majaceite", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462833709981089, 36.768386039736008 ] } },
    { "type": "Feature", "properties": { "ID": 230, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo sendero", "Foto_ID": "314", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.459405739151014, 36.763347304383956 ] } },
    { "type": "Feature", "properties": { "ID": 231, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "315", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.459465667639781, 36.762579752432266 ] } },
    { "type": "Feature", "properties": { "ID": 232, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "316", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.459623512378543, 36.762013392580123 ] } },
    { "type": "Feature", "properties": { "ID": 234, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "318", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.458835326838571, 36.760741180754813 ] } },
    { "type": "Feature", "properties": { "ID": 236, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "320", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.458592623915925, 36.76016863325475 ] } },
    { "type": "Feature", "properties": { "ID": 237, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "321", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.458910548860469, 36.760256433010063 ] } },
    { "type": "Feature", "properties": { "ID": 238, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "322", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.459759531033094, 36.760690608776407 ] } },
    { "type": "Feature", "properties": { "ID": 239, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "323", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462056307309795, 36.761944171215717 ] } },
    { "type": "Feature", "properties": { "ID": 241, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "325", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.46121496259371, 36.761602969434129 ] } },
    { "type": "Feature", "properties": { "ID": 242, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "326", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Cerro de La Atalaya", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.4606590802721, 36.761385460931031 ] } },
    { "type": "Feature", "properties": { "ID": 243, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "327", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.457298294773467, 36.759524706096428 ] } },
    { "type": "Feature", "properties": { "ID": 244, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "328", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.456863426534871, 36.759521108563234 ] } },
    { "type": "Feature", "properties": { "ID": 245, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "329", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.456681880845283, 36.76005586783841 ] } },
    { "type": "Feature", "properties": { "ID": 248, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "333", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.454399468457953, 36.76014358023744 ] } },
    { "type": "Feature", "properties": { "ID": 249, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "334", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.453257548998633, 36.759152942571568 ] } },
    { "type": "Feature", "properties": { "ID": 251, "Tipo": "Sendero", "Subtipo": "Referencia", "Nombre": "Tronco", "Descripcio": "Tronco seco de quejigo", "Foto_ID": "337", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.45590245208076, 36.758528960071693 ] } },
    { "type": "Feature", "properties": { "ID": 253, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "340", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.456110030419933, 36.758663087416309 ] } },
    { "type": "Feature", "properties": { "ID": 254, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo de sendero", "Foto_ID": "341", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Arroyo del Descansadero", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.462121335240209, 36.757163340629404 ] } },
    { "type": "Feature", "properties": { "ID": 255, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "342", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Arroyo del Descansadero", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.461995354707374, 36.756959706308933 ] } },
    { "type": "Feature", "properties": { "ID": 256, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "343", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Arroyo del Descansadero", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.461044663022679, 36.756982007034317 ] } },
    { "type": "Feature", "properties": { "ID": 258, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "346", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Arroyo del Descansadero", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.460598613914711, 36.757060276353279 ] } },
    { "type": "Feature", "properties": { "ID": 260, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "350", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Arroyo del Descansadero", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.459283433109802, 36.757096221795528 ] } },
    { "type": "Feature", "properties": { "ID": 261, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "351", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Arroyo del Descansadero", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.458726044113913, 36.75732709921359 ] } },
    { "type": "Feature", "properties": { "ID": 262, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "352", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Arroyo del Descansadero", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.458407117747933, 36.757407101429571 ] } },
    { "type": "Feature", "properties": { "ID": 263, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "353", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Arroyo del Descansadero", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.45782900439207, 36.75739720391848 ] } },
    { "type": "Feature", "properties": { "ID": 265, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "355", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Arroyo del Descansadero", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.457094498650006, 36.757353393955526 ] } },
    { "type": "Feature", "properties": { "ID": 267, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "359", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.455851626699642, 36.757656097944846 ] } },
    { "type": "Feature", "properties": { "ID": 269, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "361", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.455840245260274, 36.757690852464073 ] } },
    { "type": "Feature", "properties": { "ID": 270, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección Arroyo El Descansadero o dirección El Tesorillo", "Foto_ID": "362", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.455835222317297, 36.757703627901662 ] } },
    { "type": "Feature", "properties": { "ID": 271, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección Arroyo El Descansadero o dirección Llanos del Campo", "Foto_ID": "363", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.455750163957001, 36.757795014950837 ] } },
    { "type": "Feature", "properties": { "ID": 272, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "364", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.455657640302653, 36.757958817587962 ] } },
    { "type": "Feature", "properties": { "ID": 273, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "365", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.454924630902192, 36.758541120401617 ] } },
    { "type": "Feature", "properties": { "ID": 274, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección Benamahoma o dirección El Tesorillo", "Foto_ID": "366", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.453447431220428, 36.758623167958795 ] } },
    { "type": "Feature", "properties": { "ID": 277, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero entre encinas centenarias", "Foto_ID": "370", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.450898451245048, 36.758063556306155 ] } },
    { "type": "Feature", "properties": { "ID": 278, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección El Tesorillo o dirección fuente", "Foto_ID": "371", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.450265497856187, 36.757576285668776 ] } },
    { "type": "Feature", "properties": { "ID": 279, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "372", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.450099140257465, 36.757638702395148 ] } },
    { "type": "Feature", "properties": { "ID": 281, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero: dirección El Tesorillo, dirección carretera A-372 o dirección Arroyo El Descansadero", "Foto_ID": "375", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.450254018007385, 36.757573900475826 ] } },
    { "type": "Feature", "properties": { "ID": 282, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero entre quejigos centenarios", "Foto_ID": "376", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.450437311856734, 36.75746350635638 ] } },
    { "type": "Feature", "properties": { "ID": 285, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "382", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.454348537961565, 36.75862225028726 ] } },
    { "type": "Feature", "properties": { "ID": 287, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "384", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.450726263824262, 36.757934105414193 ] } },
    { "type": "Feature", "properties": { "ID": 288, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "385", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.452215571432045, 36.757101159466899 ] } },
    { "type": "Feature", "properties": { "ID": 289, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "386", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.452557513037363, 36.757077774576892 ] } },
    { "type": "Feature", "properties": { "ID": 290, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "387", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.452838508384752, 36.756902883309273 ] } },
    { "type": "Feature", "properties": { "ID": 291, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "388", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.452761772774591, 36.757005346990105 ] } },
    { "type": "Feature", "properties": { "ID": 292, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso a área de descanso Llanos del Campo", "Foto_ID": "389", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.453368553034169, 36.756637344947023 ] } },
    { "type": "Feature", "properties": { "ID": 293, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso a área de descanso Llanos del Campo", "Foto_ID": "399", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.454545300762788, 36.755589841251606 ] } },
    { "type": "Feature", "properties": { "ID": 295, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "401", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.455515307964429, 36.757177184138882 ] } },
    { "type": "Feature", "properties": { "ID": 296, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "404", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Llanos del Campo", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.455713889668845, 36.757638096085351 ] } },
    { "type": "Feature", "properties": { "ID": 297, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso a Llanos del Berral", "Foto_ID": "406,407", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.45510510213472, 36.755263332745336 ] } },
    { "type": "Feature", "properties": { "ID": 298, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "408", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.455509846875579, 36.755262662145704 ] } },
    { "type": "Feature", "properties": { "ID": 299, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "409", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.45606367962475, 36.755182049478115 ] } },
    { "type": "Feature", "properties": { "ID": 300, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "410", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.456125898768732, 36.754855848292564 ] } },
    { "type": "Feature", "properties": { "ID": 301, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación sendero: dirección a área de descanso Llanos del Campo o dirección Benamahoma", "Foto_ID": "411", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.456246192493566, 36.754652738554647 ] } },
    { "type": "Feature", "properties": { "ID": 302, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero: dirección Llanos del Berral o dirección Pico Granadillo", "Foto_ID": "412", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.456177410422547, 36.754517729840344 ] } },
    { "type": "Feature", "properties": { "ID": 303, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "413", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464304549374273, 36.758671690170786 ] } },
    { "type": "Feature", "properties": { "ID": 304, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "414", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464294101238358, 36.757978174869862 ] } },
    { "type": "Feature", "properties": { "ID": 305, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero: Puente", "Foto_ID": "415", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.464529221233926, 36.75777534634507 ] } },
    { "type": "Feature", "properties": { "ID": 306, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "416", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.465665937063912, 36.758138830179298 ] } },
    { "type": "Feature", "properties": { "ID": 307, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "417", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.4666614490937, 36.759137508555305 ] } },
    { "type": "Feature", "properties": { "ID": 308, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "418", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.466808337410084, 36.759206552834399 ] } },
    { "type": "Feature", "properties": { "ID": 309, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "419", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.466978669152888, 36.759250883154564 ] } },
    { "type": "Feature", "properties": { "ID": 311, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "421", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.472532681643163, 36.762303389701714 ] } },
    { "type": "Feature", "properties": { "ID": 313, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "423", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.472878492105963, 36.762450326030198 ] } },
    { "type": "Feature", "properties": { "ID": 314, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "424", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.472881730915511, 36.762400183512277 ] } },
    { "type": "Feature", "properties": { "ID": 315, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "425", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.472935084307877, 36.762324936684841 ] } },
    { "type": "Feature", "properties": { "ID": 317, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero: Curso de río", "Foto_ID": "427", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.472934934710895, 36.762281754032955 ] } },
    { "type": "Feature", "properties": { "ID": 318, "Tipo": "Sendero", "Subtipo": "Bifurcación", "Nombre": "Bifurcación sendero", "Descripcio": "Bifurcación del sendero", "Foto_ID": "428", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.472606555669319, 36.76217506249062 ] } },
    { "type": "Feature", "properties": { "ID": 320, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "430", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.472679682546627, 36.761937682934189 ] } },
    { "type": "Feature", "properties": { "ID": 319, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "429", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.472614858599709, 36.76211453165773 ] } },
    { "type": "Feature", "properties": { "ID": 325, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "437", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.46759031401323, 36.758864275069904 ] } },
    { "type": "Feature", "properties": { "ID": 326, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "438", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.467716658783622, 36.75901410862086 ] } },
    { "type": "Feature", "properties": { "ID": 327, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "439", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.467532989977873, 36.759149398053339 ] } },
    { "type": "Feature", "properties": { "ID": 328, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "440", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.467565643443768, 36.759068356366569 ] } },
    { "type": "Feature", "properties": { "ID": 329, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "441", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.467579354161211, 36.759026412523937 ] } },
    { "type": "Feature", "properties": { "ID": 330, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "442", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.467814985344024, 36.759097454931393 ] } },
    { "type": "Feature", "properties": { "ID": 331, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "443", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.467936987927892, 36.759169082446149 ] } },
    { "type": "Feature", "properties": { "ID": 332, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "444", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.468060351574553, 36.759271704483552 ] } },
    { "type": "Feature", "properties": { "ID": 335, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "447", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.467555098436224, 36.758867166353077 ] } },
    { "type": "Feature", "properties": { "ID": 336, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "448", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.467633818297495, 36.758911623995509 ] } },
    { "type": "Feature", "properties": { "ID": 337, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "449", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.467784503861021, 36.759007474779963 ] } },
    { "type": "Feature", "properties": { "ID": 338, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "450", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.467926179782276, 36.759074262186665 ] } },
    { "type": "Feature", "properties": { "ID": 339, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "451", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.46810325324989, 36.75919142865316 ] } },
    { "type": "Feature", "properties": { "ID": 340, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "452", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.468214427468895, 36.759268894291125 ] } },
    { "type": "Feature", "properties": { "ID": 341, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "453", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.468330234809264, 36.759364877388144 ] } },
    { "type": "Feature", "properties": { "ID": 342, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "454", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.468448464176755, 36.75947912837119 ] } },
    { "type": "Feature", "properties": { "ID": 343, "Tipo": "Sendero", "Subtipo": "Referencia", "Nombre": "Encina", "Descripcio": "Encina", "Foto_ID": "455", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.468692068610266, 36.759770118315373 ] } },
    { "type": "Feature", "properties": { "ID": 344, "Tipo": "Sendero", "Subtipo": "Referencia", "Nombre": "Encina", "Descripcio": "Encina", "Foto_ID": "456", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.469322368105186, 36.760119260397943 ] } },
    { "type": "Feature", "properties": { "ID": 345, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso", "Foto_ID": "457", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.469513598749792, 36.760219732867199 ] } },
    { "type": "Feature", "properties": { "ID": 347, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "459", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.469979121402731, 36.76035424669017 ] } },
    { "type": "Feature", "properties": { "ID": 350, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "462", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.470643713557885, 36.760638850738935 ] } },
    { "type": "Feature", "properties": { "ID": 352, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "464", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.471036536083703, 36.760819189214914 ] } },
    { "type": "Feature", "properties": { "ID": 354, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "467", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.471555476914042, 36.761290588224682 ] } },
    { "type": "Feature", "properties": { "ID": 355, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "468", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.471773878854743, 36.761413685465669 ] } },
    { "type": "Feature", "properties": { "ID": 356, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "469", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.472201094414628, 36.761612805112954 ] } },
    { "type": "Feature", "properties": { "ID": 357, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "470", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.472620049214801, 36.761806185840044 ] } },
    { "type": "Feature", "properties": { "ID": 358, "Tipo": "Sendero", "Subtipo": "Referencia", "Nombre": "Encina", "Descripcio": "Encina", "Foto_ID": "471", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.472942780408836, 36.761907611300643 ] } },
    { "type": "Feature", "properties": { "ID": 359, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "472", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.473349103886526, 36.762073479240186 ] } },
    { "type": "Feature", "properties": { "ID": 360, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "473", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.473441200624615, 36.762134052451529 ] } },
    { "type": "Feature", "properties": { "ID": 363, "Tipo": "Sendero", "Subtipo": "Valla", "Nombre": "Valla acceso", "Descripcio": "Valla de acceso: Necesario saltarla", "Foto_ID": "479", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.472313373183739, 36.761746298604884 ] } },
    { "type": "Feature", "properties": { "ID": 365, "Tipo": "Sendero", "Subtipo": "Trazo", "Nombre": "Trazo sendero", "Descripcio": "Trazo del sendero", "Foto_ID": "481", "X-ETRS89": null, "Y-ETRS89": null, "Z": null, "Adicional": null, "Paraje": "Sierra del Albarracín", "Capa": "Interest Points" }, "geometry": { "type": "Point", "coordinates": [ -5.472448724722875, 36.764964887362865 ] } }
    ]
    }
    
    
    var My_Interest_Ptos_Sendero = L.geoJson(geojsonSenderoPto, {
        onEachFeature: PopupInfo,
        pointToLayer: PointToLayer,
        filter: function (feature, layer) {
            return feature.properties.Tipo == "Sendero";
        },

}) 

//My_Interest_Ptos_Sendero.addTo(map)



// My_Interest_Zones

// Style Function
function stylePolygon6(feature) {
    return {
        weight: 1.3, // grosor de línea
        color: 'red', // color de línea
        opacity: 0.5, // tansparencia de línea
        fillColor: 'red', // color de relleno
        fillOpacity: 0.5 // transparencia de relleno
    };
};

function stylePolygon7(feature) {
    return {
        weight: 1.3, // grosor de línea
        color: 'blue', // color de línea
        opacity: 0.5, // tansparencia de línea
        fillColor: 'blue', // color de relleno
        fillOpacity: 0.5 // transparencia de relleno
    };
};

function stylePolygon8(feature) {
    return {
        weight: 1.3, // grosor de línea
        color: 'rgb(255,242,0)', // color de línea
        opacity: 0.5, // tansparencia de línea
        fillColor: 'rgb(255,242,0)', // color de relleno
        fillOpacity: 0.5 // transparencia de relleno
    };
};

function stylePolygon9(feature) {
    return {
        weight: 1.3, // grosor de línea
        color: 'orange', // color de línea
        opacity: 0.5, // tansparencia de línea
        fillColor: 'orange', // color de relleno
        fillOpacity: 0.5 // transparencia de relleno
    };
};

function stylePolygon10(feature) {
    return {
        weight: 1.3, // grosor de línea
        color: 'green', // color de línea
        opacity: 0.5, // tansparencia de línea
        fillColor: 'green', // color de relleno
        fillOpacity: 0.5 // transparencia de relleno
    };
};

// Popup function
function PopupInfo1 (feature,layer) {
    if (feature.properties && feature.properties.ID) {

        var PopupContent1 =   
            //Images Side by Side//
            `<div class='window1'>
            <header class='header1'> INFORMACIÓN ZONA DE INTERÉS: </header>
                    
                <div class='text1'> 
                    <p> <b> Tipo: </b> ${feature.properties.Tipo} </p>
                    <p> <b> Subtipo: </b> ${feature.properties.Subtipo} </p>
                    <p> <b> Nombre: </b> ${feature.properties.Nombre} </p>
                    <p> <b> Descripción: </b> ${feature.properties.Descripcio} </p>
                    <p> <b> Fotos: </b> </p>
                    
                </div>
            <!--Images Side by Side -->
            <div class='row1'>
                <!-- List the Img and Trigger the Modal -->
                 ${ListImg(feature.properties.Foto_ID)}
            </div>
    </div>
    `
    var PopupContent5 =   
        
            `<div class='window2'>      
                <div class='text1'> 
                    ${feature.properties.Nombre}  
                </div>
            </div>
            `
    }
    layer.bindPopup(PopupContent1);


    //Create Popup in Interest Zones when mousesover

    layer.on('mouseover', function() {
        
        this.setPopupContent(PopupContent5);
        this.openPopup()
        });

    layer.on('mouseout', function() {
        //this.closePopup()
        });  
    
    layer.on('click', function() {
        this.setPopupContent(PopupContent1);
        this.openPopup()
        });  
        
    }

// Modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function myFunction1(foto) {
    modal.style.display = "block";
    modalImg.src = `./assets/img/map/Merge/${foto}.jpg`;
    //captionText.innerHTML = `${foto}`;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// Layer My_Interest_Zones: Cargar archivo .geojson 

// Layer My_Interest_Zones_Natural: Cargar archivo .geojson 
var My_Interest_Zones_Natural = L.geoJson(null, {
    style: stylePolygon6,
    onEachFeature: PopupInfo1,
    filter: function (feature, layer) {
        return feature.properties.Tipo == "Natural";
    },
});

$.getJSON("./data/myinterestzones.geojson", function (data) {
    My_Interest_Zones_Natural.addData(data);
});

//My_Interest_Zones_Natural.addTo(map);
//controlLayers.addOverlay(My_Interest_Ptos_Natural, "Zona Interés Natural")

// Layer My_Interest_Zones_Paisajistico: Cargar archivo .geojson 
var My_Interest_Zones_Paisajistico = L.geoJson(null, {
    style: stylePolygon7,
    onEachFeature: PopupInfo1,
    filter: function (feature, layer) {
        return feature.properties.Tipo == "Paisajístico";
    },
});

$.getJSON("./data/myinterestzones.geojson", function (data) {
    My_Interest_Zones_Paisajistico.addData(data);
});

//My_Interest_Zones_Paisajistico.addTo(map);
//controlLayers.addOverlay(My_Interest_Ptos_Paisajistico, "Zona Interés Paisajístico")

// Layer My_Interest_Zones_Etnografico: Cargar archivo .geojson 
var My_Interest_Zones_Etnografico = L.geoJson(null, {
    style: stylePolygon8,
    onEachFeature: PopupInfo1,
    filter: function (feature, layer) {
        return feature.properties.Tipo == "Etnográfico";
    },
});

$.getJSON("./data/myinterestzones.geojson", function (data) {
    My_Interest_Zones_Etnografico.addData(data);
});

//My_Interest_Zones_Etnografico.addTo(map);
//controlLayers.addOverlay(My_Interest_Ptos_Etnografico, "Zona Interés Etnográfico")

/* // Layer My_Interest_Zones_Sendero: Cargar archivo .geojson 
var My_Interest_Ptos_Sendero = L.geoJson(geojsonSenderoPto, {
    style: stylePolygonX,
    onEachFeature: PopupInfo,
    filter: function (feature, layer) {
        return feature.properties.Tipo == "Sendero";
    },
});

$.getJSON("./data/myinterestzones.geojson", function (data) {
    My_Interest_Zones_Sendero.addData(data);
});

My_Interest_Zones_Sendero.addTo(map);
controlLayers.addOverlay(My_Interest_Zones_Sendero, "Zona Interés Sendero") */

// Layer My_Interest_Zones_Arqueologico: Cargar archivo .geojson 
var My_Interest_Zones_Arqueologico = L.geoJson(null, {
    style: stylePolygon9,
    onEachFeature: PopupInfo1,
    filter: function (feature, layer) {
        return feature.properties.Tipo == "Arqueológico";
    },
});

$.getJSON("./data/myinterestzones.geojson", function (data) {
My_Interest_Zones_Arqueologico.addData(data);
});

//My_Interest_Zones_Arqueologico.addTo(map);
//controlLayers.addOverlay(My_Interest_Zones_Arqueologico, "Zona Interés Arqueólogico")

// Layer My_Interest_Zones_Infraestructura: Cargar archivo .geojson 
var My_Interest_Zones_Infraestructura = L.geoJson(null, {
    style: stylePolygon10,
    onEachFeature: PopupInfo1,
    filter: function (feature, layer) {
        return feature.properties.Tipo == "Infraestructura";
    },
});

$.getJSON("./data/myinterestzones.geojson", function (data) {
    My_Interest_Zones_Infraestructura.addData(data);
});


//My_Interest_Zones_Infraestructura.addTo(map);
//controlLayers.addOverlay(My_Interest_Zones_Infraestructura, "Zona Interés Infraestructrua")

// Layer Sendero Interest Pto: Create geojson 


// Touristic Info Pto

//Popup Function
function popUpInfoOficina(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.info) {

        var PopupContent7 =   
        
                    `<div class='window2'>      
                        <div class='text1'> 
                            Punto Información Turístico  
                        </div>
            </div>
            `

        layer.bindPopup(feature.properties.info);

    //Create Popup in Info Pto when mousesover
        layer.on('mouseover', function() {
        
            this.setPopupContent(PopupContent7);
            this.openPopup()
            });
    
        layer.on('mouseout', function() {
            //this.closePopup()
            });  
        
        layer.on('click', function() {
            this.setPopupContent(feature.properties.info);
            this.openPopup()
            });  
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

// Layer Touristic Info Pto: Create geojson 

var geojsonInfoPto = {
   
            "type": "Feature",
            "properties": {
                "info": "<b>Punto de Información Turístico de Benamahoma</b>" +
                    "<br>Calle Cuesta de la Venta, s/n." +
                    "11679, Benamahoma (Cádiz)</br>" +
                    "Telf.: 673300323<br>" +
                    "<a target='_blank' href='https://www.grazalema.es/departamentos-del-ayuntamiento/benamahoma/punto-de-informacion-turistica-de-benamahoma'>Visitar web</a></p>"+
                    "<img id='myImg1' src='./assets/img/map/Merge/543.jpg' alt='543' style='width:100%' onclick = 'myFunction2()'>"
                      
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-5.46942, 36.76564]
            }
        };

//Popup Function
function myFunction2() {
    modal.style.display = "block";
    modalImg.src = "./assets/img/map/Merge/543.jpg";
    //captionText.innerHTML = "543";
    }
        
var InfoPto = L.geoJson(geojsonInfoPto, {
    onEachFeature: popUpInfoOficina,
    pointToLayer: estiloinfoIcon
}) 
InfoPto.addTo(map);


// My_Tracks

// Popup 
    
// onEachFeature
function PopupInfo2 (feature,layer) {

// Popup function
    // Conditional ternary operator to delete null values
    feature.properties.Observacio = "null" ? "" : "feature.properties.Observacio";
        

    if (feature.properties && feature.properties.ID) {
        var PopupContent2 =   
  
            `<div class='window1'>
            <header class='header1'> INFORMACIÓN SENDERO VIRTUAL: </header>
                    
                <div class='text1'> 
                    <p> <b> Nombre: </b> ${feature.properties.Nombre} </p>
                    <p> <b> Recorrido: </b> ${feature.properties.Descripcio} </p>
                    <p> <b> Longitud (m): </b> ${feature.properties.Longitud} </p>
                    <p> <b> Dificultad: </b> ${feature.properties.Dificultad} </p>
                    <p> <b> Paraje: </b> ${feature.properties.Paraje} </p>
                    <p> <b> Observaciones: </b> ${feature.properties.Observacio} </p>
                </div>
    </div>
    `
        var PopupContent3 =   
        
                    `<div class='window2'>      
                        <div class='text1'> 
                            ${feature.properties.Nombre}  
                        </div>
            </div>
            `
    }
    layer.bindPopup(PopupContent2);


          //Hightlight Track when mousesover
    
    layer.on('mouseover', function() {
        this.bringToFront();
        this.setPopupContent(PopupContent3);
        this.openPopup()
        this.setStyle({
        weight: 3, // grosor de línea
        opacity: 1, // tansparencia de línea
        color: 'rgb(255, 0, 26)'
        });
        });

        
    layer.on('mouseout', function() {
        //this.closePopup()
        this.setStyle({
        weight: 3, // grosor de línea
        color: 'rgb(178, 80, 235)', // color de línea
        opacity: 1, // tansparencia de línea
        });
        });  

    layer.on('click', function() {
        this.bringToFront();
        this.setPopupContent(PopupContent2);
        this.setStyle({
        weight: 5, // grosor de línea
        color: 'rgb(255, 0, 26)', // color de línea
        opacity: 1, // tansparencia de línea
        });
        }); 

    layer.on('dblclick', function() {
        this.closePopup()
        });  
    }

// Style Function
function styleLine(feature) {
    return {
        weight: 3, // grosor de línea
        color: 'rgb(178, 80, 235)', // color de línea
        opacity: 1, // tansparencia de línea
        
    };
};
// Layer My_Tracks: Cargar archivo .geojson 
var My_Tracks = L.geoJson(null, {
    style: styleLine,
    onEachFeature: PopupInfo2

});

$.getJSON("./data/mytracks.geojson", function (data) {
    My_Tracks.addData(data);
});

My_Tracks.addTo(map);


// PLUGINS 

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

L.control.mousePosition({position: "bottomleft"}).addTo(map);


// Plugin Leaflet.markercluster

    // Markercluster My_Interest_Ptos_Sendero

var markers1 = L.markerClusterGroup({
    showCoverageOnHover:false,
    zoomToBoundsOnClick:false,
    spiderfyOnMaxZoom:false,
    disableClusteringAtZoom:16,
    maxClusterRadius: 100,
    iconCreateFunction: function (cluster) {
        var markers = cluster.getAllChildMarkers();
        var n = 0;
        for (var i = 0; i < markers.length; i++) {
          n += markers[i].number;
        }
        return L.divIcon({
          html: i,
          className: 'mycluster',
          iconSize: L.point(22, 22)
        
        });
      },

});
markers1.addLayer(My_Interest_Ptos_Sendero);
//map.addLayer(markers1);
//controlLayers.addOverlay((My_Interest_Ptos_Sendero,markers1), "Punto de información turístico")


// Plugin Group Layer Control

var basemaps = {
    
    
        "Fotografía aérea": PNOA,
        "OpenCycleMap 3": OCM3,
    
};


var overlaylayers = {
    
    "Senderos:": {
        "<img src='assets/img/icon/solidline-icon5.png' class='layercontrol2'> Senderos Virtuales": My_Tracks,
        "<img src='assets/img/icon/solidline-icon4.png' class='layercontrol2'> Senderos Físicos": SenderosActuales,
        
    },
    
    
    "Puntos de interés:": {
        "<img src='assets/img/icon/marker-icon1.png' class='layercontrol1'>  Natural": My_Interest_Ptos_Natural,
        "<img src='assets/img/icon/marker-icon2.png' class='layercontrol1'>  Paisajístico": My_Interest_Ptos_Paisajistico,
        "<img src='assets/img/icon/marker-icon3.png' class='layercontrol1'>  Etnográfico": My_Interest_Ptos_Etnografico,
        "<img src='assets/img/icon/marker-icon4.png' class='layercontrol1'>  Sendero": My_Interest_Ptos_Sendero,
        "<img src='assets/img/icon/marker-icon4.png' class='layercontrol1'>  Sendero": markers1,
        "<img src='assets/img/icon/marker-icon5.png' class='layercontrol1'>  Arqueológico": My_Interest_Ptos_Arqueologico,
        "<img src='assets/img/icon/marker-icon6.png' class='layercontrol1'>  Infraestructura": My_Interest_Ptos_Infraestructura
    },

    "Zonas de interés:": {
        "<img src='assets/img/icon/polygoncircle-icon1.png' class='layercontrol3'>  Natural": My_Interest_Zones_Natural,
        "<img src='assets/img/icon/polygoncircle-icon2.png' class='layercontrol3'>  Paisajístico": My_Interest_Zones_Paisajistico,
        "<img src='assets/img/icon/polygoncircle-icon3.png' class='layercontrol3'>  Etnográfico": My_Interest_Zones_Etnografico,
        //"<img src='assets/img/icon/polygoncircle-icon4.png' class='layercontrol3'>  Sendero4": My_Interest_Zones_Sendero,
        "<img src='assets/img/icon/polygoncircle-icon5.png' class='layercontrol3'>  Arqueológico": My_Interest_Zones_Arqueologico,
        //"<img src='assets/img/icon/polygoncircle-icon6.png' class='layercontrol3'>  Infraestructura": My_Interest_Zones_Infraestructura
    },

    "Capas Adicionales:": {
        "<img src='assets/img/icon/dashedline-icon1.png' class='layercontrol2'> Área Proyecto": AreaProyecto,
        "<img src='assets/img/icon/polygon-icon2.png' class='layercontrol3'> Monte Público": MontePublico,
        "<img src='assets/img/icon/dashedline-icon3.png' class='layercontrol2'> Límite Municipal": LimitesMunicipios,
        "<img src='assets/img/icon/dashedline-icon2.png' class='layercontrol2'> Parque Natural": LimitesParque,
        "<img src='assets/img/icon/polygon-icon3.png' class='layercontrol3'> Poblaciones": ParcelasCatastro,
        "<img src='assets/img/icon/solidline-icon3.png' class='layercontrol2'> Ríos": Rios,
        

        
    }
};


var controlCapas = L.control.groupedLayers(basemaps, overlaylayers, {
    position: "bottomright", // 'topleft', 'bottomleft', 'bottomright'
    collapsed: true, // false = open by default
    }

);
controlCapas.addTo(map);
