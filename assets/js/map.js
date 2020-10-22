
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
.setPrefix('View <a target=_blank href="https://github.com/AntonioMorenoAbril/VisorBenamahoma/tree/version1">code on GitHub</a>, created with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');

    // Reposition zoom control other than default topleft
    L.control.zoom({position: "topleft"}).addTo(map);

// Scale
L.control.scale({
    imperial: false,
}).addTo(map);


// Layer Control 
/*
var controlLayers = L.control.layers( null, null, {
    position: "bottomright", // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // false = open by default
  }).addTo(map);
*/

//Horizontal Icon Bar

    //infobtn Button
    var modal1 = document.getElementById("popup");
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
    
    // Lateral Bar: Presentation Buttons

    function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
    }
    function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
    }

    // Button Portada
    var modal2 = document.getElementById("popup1");
    var btn1 = document.getElementById("infobtn1");
    var span1 = document.getElementsByClassName("close3")[0];
    btn1.onclick = function() {
        modal2.style.display = "block";
    }
    span1.onclick = function() {
        modal2.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal2.style.display = "none";
        }
    }
      
   // Button Indice
   var modal3 = document.getElementById("popup2");
   var btn2 = document.getElementById("infobtn2");
   var span2 = document.getElementsByClassName("close4")[0];
   btn2.onclick = function() {
       modal3.style.display = "block";
   }
   span2.onclick = function() {
       modal3.style.display = "none";
   }
   window.onclick = function(event) {
       if (event.target == modal) {
           modal3.style.display = "none";
       }
   }

  // Button Idea
  var modal4 = document.getElementById("popup3");
  var btn3 = document.getElementById("infobtn3");
  var span3 = document.getElementsByClassName("close5")[0];
  btn3.onclick = function() {
      modal4.style.display = "block";
  }
  span3.onclick = function() {
      modal4.style.display = "none";
  }
  window.onclick = function(event) {
      if (event.target == modal) {
          modal4.style.display = "none";
      }
  }


    // Button Objetivo
    var modal5 = document.getElementById("popup4");
    var btn4 = document.getElementById("infobtn4");
    var span4 = document.getElementsByClassName("close6")[0];
    btn4.onclick = function() {
        modal5.style.display = "block";
    }
    span4.onclick = function() {
        modal5.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal5.style.display = "none";
        }
    }

    // Button Beneficios
    var modal6 = document.getElementById("popup5");
    var btn5 = document.getElementById("infobtn5");
    var span5 = document.getElementsByClassName("close7")[0];
    btn5.onclick = function() {
        modal6.style.display = "block";
    }
    span5.onclick = function() {
        modal6.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal6.style.display = "none";
        }
    }

    // Button Limitaciones
    var modal7 = document.getElementById("popup6");
    var btn6 = document.getElementById("infobtn6");
    var span6 = document.getElementsByClassName("close8")[0];
    btn6.onclick = function() {
        modal7.style.display = "block";
    }
    span6.onclick = function() {
        modal7.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal7.style.display = "none";
        }
    }

    // Button Sistemática
    var modal8 = document.getElementById("popup7");
    var btn7 = document.getElementById("infobtn7");
    var span7 = document.getElementsByClassName("close9")[0];
    btn7.onclick = function() {
        modal8.style.display = "block";
    }
    span7.onclick = function() {
        modal8.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal8.style.display = "none";
        }
    }

     // Button Tecnologías
     var modal9 = document.getElementById("popup8");
     var btn8 = document.getElementById("infobtn8");
     var span8 = document.getElementsByClassName("close10")[0];
     btn8.onclick = function() {
         modal9.style.display = "block";
     }
     span8.onclick = function() {
         modal9.style.display = "none";
     }
     window.onclick = function(event) {
         if (event.target == modal) {
             modal9.style.display = "none";
         }
     }

     // Button Visor
     var modal10 = document.getElementById("popup9");
     var btn9 = document.getElementById("infobtn9");
     var span9 = document.getElementsByClassName("close11")[0];
     btn9.onclick = function() {
         modal10.style.display = "block";
     }
     span9.onclick = function() {
         modal10.style.display = "none";
     }
     window.onclick = function(event) {
         if (event.target == modal) {
             modal10.style.display = "none";
         }
     }

      // Button Mejoras
      var modal11 = document.getElementById("popup10");
      var btn10 = document.getElementById("infobtn10");
      var span10 = document.getElementsByClassName("close12")[0];
      btn10.onclick = function() {
          modal11.style.display = "block";
      }
      span10.onclick = function() {
          modal11.style.display = "none";
      }
      window.onclick = function(event) {
          if (event.target == modal) {
              modal11.style.display = "none";
          }
      }

       // Button Agradecimientos
       var modal12 = document.getElementById("popup11");
       var btn11 = document.getElementById("infobtn11");
       var span11 = document.getElementsByClassName("close13")[0];
       btn11.onclick = function() {
           modal12.style.display = "block";
       }
       span11.onclick = function() {
           modal12.style.display = "none";
       }
       window.onclick = function(event) {
           if (event.target == modal) {
               modal12.style.display = "none";
           }
       }