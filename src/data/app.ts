import FeatureLayer from 'esri/layers/FeatureLayer';
import MapImageLayer from 'esri/layers/MapImageLayer';
import Map from 'esri/Map';
import GroupLayer from 'esri/layers/GroupLayer';
import ElevationLayer from 'esri/layers/ElevationLayer';
//import esri = __esri;

export const display = '2D';

export const wTSLayer = new FeatureLayer({
  portalItem: {
    id: '49e1606446f34f93807b1fc437be53c9'
    //id: '17a725a913cc415195ac9263e12e22e7'
  },
  outFields: ['*'],
  title: 'Wastewater Treatment Systems',
  id: 'wwtp',
  opacity: 0.8
  // elevationInfo: {
  //   mode: 'on-the-ground'
  // }
});

const gwicLayer = new FeatureLayer({
  url: 'http://deqgis.mt.gov/arcgis/rest/services/Reference/Ground_Water/MapServer/0',
  outFields: ['*'],
  title: 'GWIC Water Wells',
  visible: false,
  id: 'gwic'
});

const dstResponseSitesLayer = new FeatureLayer({
  url: 'http://deqgis.mt.gov/arcgis/rest/services/DEQ/DST/MapServer/2',
  outFields: ['*'],
  title: 'DST Response Sites',
  visible: true,
  id: 'dstResponseSites'
});

const dstSWDARLocationsLayer = new FeatureLayer({
  url: 'http://deqgis.mt.gov/arcgis/rest/services/DEQ/DST/MapServer/9',
  outFields: ['*'],
  title: 'DST SWDAR Locations',
  visible: true,
  id: 'dstSWDARLocations'
});

const deqGroupLayer = new GroupLayer({
  layers: [dstSWDARLocationsLayer, dstResponseSitesLayer],
  title: 'DEQ Layers',
  id: 'deqLayers',
  visible: false
});

const cobMains = new MapImageLayer({
  url: 'https://gisweb.bozeman.net/arcgis/rest/services/COB_Utilities/Wastewater_Utility/MapServer',
  title: 'Bozeman Wastewater',
  id: 'bznWastewater',
  visible: false
});

cobMains.when().then(() => {
  if (
    cobMains.sublayers?.getItemAt(0)?.sublayers &&
    cobMains.sublayers?.getItemAt(0).title === 'Wastewater Collection System'
  ) {
    cobMains.sublayers = cobMains.sublayers.getItemAt(0).sublayers;
  }
  //workaround until 4.15
  cobMains.sublayers.forEach(sublayer => {
    sublayer
      .createFeatureLayer()
      .then(featureLayer => featureLayer.load())
      .then(featureLayer => {
        sublayer.popupTemplate = featureLayer.createPopupTemplate();
      });
  });
});

const floodHazardZonesLayer = new MapImageLayer({
  title: 'Flood Hazard Zones',
  url: 'http://hazards.fema.gov/gis/nfhl/rest/services/public/NFHL/MapServer',
  id: 'floodHazardZones',
  opacity: 0.5,
  visible: false,
  sublayers: [
    {
      id: 28,
      visible: true,
      popupEnabled: true,
      listMode: 'hide',
      popupTemplate: {
        // autocasts as new PopupTemplate()
        title: 'Flood Hazard Zone',

        content: [
          {
            type: 'fields',
            fieldInfos: [
              {
                fieldName: 'VERSION_ID',
                label: 'Version'
              },
              {
                fieldName: 'FLD_ZONE',
                label: 'Flood Zone'
              },
              {
                fieldName: 'ZONE_SUBTY',
                label: 'Zone Subtype'
              },
              {
                fieldName: 'STUDY_TYP',
                label: 'Study Type'
              },
              {
                fieldName: 'DFIRM_ID',
                label: 'DFIRM ID'
              }
            ]
          }
        ]
      }
    }
  ]
});

const parcelsLayer = new FeatureLayer({
  url: 'https://gis.gallatin.mt.gov/arcgis/rest/services/MapServices/EHSBase/MapServer/7',
  title: 'Parcels',
  id: 'parcels'
});

export const elevationLayer = new ElevationLayer({
  url: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer',
  id: 'ground'
});

export const map = new Map({
  basemap: 'satellite',
  ground: {
    layers: [elevationLayer]
  },
  layers: [parcelsLayer, floodHazardZonesLayer, cobMains, deqGroupLayer, gwicLayer, wTSLayer]
});
