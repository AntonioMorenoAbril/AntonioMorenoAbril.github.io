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
        iconUrl: './assets/img/style/marker-icon1.png',
        iconSize: [18, 18]
    });
    
    var myIcon2 = L.icon({
        iconUrl: './assets/imag/style/marker-icon2.png',
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
                            //Images Side by Side //
                            "<div class='row'>" +
                                "<div class='column'>" +
                                    "<a href='https://www.grazalema.es/'> <img src='./assets/img/map/1.jpg' alt='Cabreriza' style='width:100%'>" +
                                "</div>" +
                            "<div class='row'>" +
                                "<div class='column'>" +
                                    "<img id='myImg' src='./assets/img/map/2.jpg' alt='Snow' style='width:100%'>" +
                                "</div>" +
                            "</div>" +
                        "<br>" + "Web:" + "<a href='https://www.grazalema.es/' title= 'Web Ayto. Grazalema' target= '_blank'> Web Ayuntamiento Grazalema </a>" +
                        "<br>" + "Pdf Content: " + "<a href='./assets/pdf/arboles_espiral.pdf' download> <button class='btn'><i class='fa fa-download'></i> Download</button> </a>" 
                           
        }                   
        layer.bindPopup(PopupContent);
    }
    
       
    
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
            iconUrl: './assets/img/style/info-icon.png',
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
     
    
    WAY2 TO ADD GEOJSON:
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
    4. Insert html code in javascript variable in a clear way
    

    5. Insert Modal image and combine with side by side imagen in popup

    
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
                           /Images Side by Side //
                        "<div class='row'>" +
                            "<div class='column'>" +
                                "<a href='https://www.grazalema.es/'> <img src='./assets/img/map/1.jpg' alt='Cabreriza' style='width:100%'>" +
                            "</div>" +
                        "<div class='row'>" +
                            "<div class='column'>" +
                                "<img id='myImg' src='./assets/img/map/2.jpg' alt='Snow' style='width:100%;max-width:300px'>" +
                                    // The Modal 
                                "<div id='myModal' class='modal'>" +
                                    "<span class='close'>&times;</span>" +
                                    "<img class='modal-content' id='img01'>" +
                                    "<div id='caption'></div>" +
                                "</div>" +
                            "</div>" +
                        "</div>" +
                    "<br>" + "Web:" + "<a href='https://www.grazalema.es/' title= 'Web Ayto. Grazalema' target= '_blank'> Web Ayuntamiento Grazalema </a>" +
                    "<br>" + "Pdf Content: " + "<a href='./assets/pdf/arboles_espiral.pdf' download> <button class='btn'><i class='fa fa-download'></i> Download</button> </a>" 
          
            }                   
            layer.bindPopup(PopupContent);
        }
        
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
    
    */
    
    
    
    /* TASKS
    
    Añadir tabla 
    Añadir for para recorrer cambo de atributos y denominar las fotos
    Añadir boton descarga pdf
    Añadir barra superior mapa
    
    */
    