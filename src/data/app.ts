import FeatureLayer from 'esri/layers/FeatureLayer';
import MapImageLayer from 'esri/layers/MapImageLayer';
import Map from 'esri/Map';
import ElevationLayer from 'esri/layers/ElevationLayer';
//import esri = __esri;

export const wTSLayer = new FeatureLayer({
  portalItem: {
    id: '49e1606446f34f93807b1fc437be53c9'
    //id: '17a725a913cc415195ac9263e12e22e7'
  },
  outFields: ['*'],
  title: 'Wastewater Treatment Systems',
  opacity: 0.8
  // elevationInfo: {
  //   mode: 'on-the-ground'
  // }
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

export const map = new Map({
  basemap: 'topo',
  ground: {
    layers: [elevationLayer]
  },
  layers: [parcelsLayer, cobMains, wTSLayer]
});
