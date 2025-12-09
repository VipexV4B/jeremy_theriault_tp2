import maplibregl from "maplibre-gl";

const carte = new maplibregl.Map({
  container: "carte", // id du div
  style: "https://tiles.openfreemap.org/styles/dark",
  center: [-97.4824746, 49.8533133], // Laval
  zoom: 9, // Plus c'est bas, plus c'est haut
  attributionControl: false,

});
