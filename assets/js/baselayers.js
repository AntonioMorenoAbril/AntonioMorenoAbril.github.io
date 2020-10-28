// BASE LAYERS

// Layer OpenCycleMap_3
var OCM3 = L.tileLayer(
  "https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=8f3fd4826f1641e9a2cead3ef443e05d",
  {
    attribution:
      "All maps &copy; " +
      '<a target=_blank href="http://www.opencyclemap.org/">OpenCycleMap</a>',
    opacity: 0.7,
    //minZoom: 12,
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 18,
  }
).addTo(map);
//controlLayers.addBaseLayer(OCM3, 'OpenCycleMap_3');

// Ortofoto del PNOA
var PNOA = L.tileLayer.wms("http://www.ign.es/wms-inspire/pnoa-ma", {
  layers: "OI.OrthoimageCoverage", //nombre de la capa del servicio WMS (ver documento getCapabilities)
  format: "image/jpeg",
  attribution:
    '<a target=_blank href="http://www.ign.es/ign/main/index.do" target="_blank">© Instituto Geográfico Nacional de España</a>',
  opacity: 1,
  zIndex: 2,
});
//controlLayers.addBaseLayer(PNOA, 'Ortofoto PNOA');

/* // Layer LIDAR 
var LIDAR = L.tileLayer.wms('https://wmts-mapa-lidar.idee.es/lidar', {
    layers: "EL.GridCoverageDSM",
    attribution: '&copy; Modelo Digital de Superficies LiDAR',
    matrixSet: 'EPSG:3857',
    format: 'image/png',
    title: "Modelo Digital de Superficies LiDAR",
    opacity: 1.0
}).addTo(map);
//controlLayers.addBaseLayer(LIDAR, 'LIDAR IDEE'); */
