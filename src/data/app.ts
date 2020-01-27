import FeatureLayer from 'esri/layers/FeatureLayer';
import MapImageLayer from 'esri/layers/MapImageLayer';
import GroupLayer from 'esri/layers/GroupLayer';
//import TileLayer from 'esri/layers/TileLayer';
//import VectorTileLayer from 'esri/layers/VectorTileLayer';
import ArcGISMap from 'esri/Map';
import ElevationLayer from 'esri/layers/ElevationLayer';

export const wTSLayer = new FeatureLayer({
  portalItem: {
    id: '49e1606446f34f93807b1fc437be53c9'
  },
  outFields: ['*'],
  title: 'Wastewater Treatment Systems',
  opacity: 0.8
});

const cobMains = new MapImageLayer({
  url: 'https://gisweb.bozeman.net/arcgis/rest/services/COB_Utilities/Wastewater_Utility/MapServer',
  title: 'Bozeman Wastewater'
});

const elevationLayer = new ElevationLayer({
  url: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'
});

const parcelsLayer = new FeatureLayer({
  url: 'https://gis.gallatin.mt.gov/arcgis/rest/services/MapServices/EHSBase/MapServer/7',
  title: 'Parcels'
});

// const intermediateContoursLayer = new FeatureLayer({
//   url: 'https://carto.nationalmap.gov/arcgis/rest/services/contours/MapServer/26',
//   title: 'Intermediate Contours'
// });
const indexContoursLayer = new FeatureLayer({
  url: 'https://carto.nationalmap.gov/arcgis/rest/services/contours/MapServer/25',
  title: 'Index Contours'
});

// const contoursLayer = new GroupLayer({
//   title: 'Contours',
//   visible: true,
//   visibilityMode: 'inherited',
//   layers: [intermediateContoursLayer, indexContoursLayer],
//   opacity: 0.75
// });

export const map = new ArcGISMap({
  basemap: 'topo',
  ground: {
    layers: [elevationLayer]
  },
  layers: [indexContoursLayer, parcelsLayer, cobMains, wTSLayer]
});
