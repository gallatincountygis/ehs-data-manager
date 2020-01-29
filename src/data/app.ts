import FeatureLayer from 'esri/layers/FeatureLayer';
import MapImageLayer from 'esri/layers/MapImageLayer';
import GroupLayer from 'esri/layers/GroupLayer';
//import TileLayer from 'esri/layers/TileLayer';
//import VectorTileLayer from 'esri/layers/VectorTileLayer';
import Map from 'esri/Map';
import ElevationLayer from 'esri/layers/ElevationLayer';
import esri = __esri;

export const wTSLayer = new FeatureLayer({
  portalItem: {
    id: '17a725a913cc415195ac9263e12e22e7'
  },
  outFields: ['*'],
  title: 'Wastewater Treatment Systems',
  opacity: 0.8,
  elevationInfo: {
    mode: 'on-the-ground'
  }
});

const cobMains = new MapImageLayer({
  url: 'https://gisweb.bozeman.net/arcgis/rest/services/COB_Utilities/Wastewater_Utility/MapServer',
  title: 'Bozeman Wastewater',
  visible: false
});

const elevationLayer = new ElevationLayer({
  url: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'
});

const parcelsLayer = new FeatureLayer({
  url: 'https://gis.gallatin.mt.gov/arcgis/rest/services/MapServices/EHSBase/MapServer/7',
  title: 'Parcels'
});

parcelsLayer.when().then(l => {
  console.log(l);
});

const intermediateContoursLayer = new FeatureLayer({
  url: 'https://carto.nationalmap.gov/arcgis/rest/services/contours/MapServer/26',
  title: 'Intermediate Contours',
  returnZ: false,
  elevationInfo: {
    mode: 'on-the-ground'
  }
});

const indexContoursLayer = new FeatureLayer({
  url: 'https://carto.nationalmap.gov/arcgis/rest/services/contours/MapServer/25',
  title: 'Index Contours',
  returnZ: false,
  elevationInfo: {
    mode: 'on-the-ground'
  }
});

const contoursLayer = new GroupLayer({
  title: 'Contours',
  visible: false,
  visibilityMode: 'inherited',
  layers: [intermediateContoursLayer, indexContoursLayer],
  opacity: 0.75
});

export const map = new Map({
  basemap: 'topo',
  ground: {
    layers: [elevationLayer]
  },
  layers: [contoursLayer, parcelsLayer, cobMains, wTSLayer]
});
