import FeatureLayer from 'esri/layers/FeatureLayer';
import MapImageLayer from 'esri/layers/MapImageLayer';
import Map from 'esri/Map';
import GroupLayer from 'esri/layers/GroupLayer';
import ElevationLayer from 'esri/layers/ElevationLayer';
import { getGWICPopup } from '../popup';
import { gwMLayer, wTSLayer, notesLayer, walkDownLayers } from './layers';
import esri = __esri;

const version = '1.2.6';
document.getElementById('version').innerText = 'v:' + version;

export const display = '2D';

const recentRecentAddressLayer = new FeatureLayer({
  portalItem: {
    id: 'd88f46d2f52a4a6daa73ba10e605d761'
  },
  listMode: 'hide',
  minScale: 24001,
  legendEnabled: false
});

const addressLayer = new MapImageLayer({
  portalItem: {
    id: '9595acf80a45479890552f8d579bb763'
  },
  listMode: 'hide'
});

const addressGroupLayer = new GroupLayer({
  layers: [addressLayer, recentRecentAddressLayer],
  title: 'Addresses',
  id: 'addressLayers',
  visible: true
});

const miscEHSLayer = new MapImageLayer({
  url: 'https://gis.gallatin.mt.gov/arcgis/rest/services/MapServices/EHS/MapServer',
  title: 'Miscellaneous',
  visible: false
});

miscEHSLayer.when().then(() => {
  miscEHSLayer.sublayers = miscEHSLayer.sublayers.filter(s => {
    return s.id >= 2;
  });
});

const gwicLayer = new FeatureLayer({
  url: 'http://deqgis.mt.gov/arcgis/rest/services/Reference/Ground_Water/MapServer/0',
  outFields: ['*'],
  title: 'GWIC Water Wells',
  visible: false,
  id: 'gwic',
  popupTemplate: {
    title: 'GWIC Well: {MNUMBER}',
    content: getGWICPopup
  }
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
  visible: true
});
cobMains.when().then(() => {
  if (
    cobMains.sublayers?.getItemAt(0)?.sublayers &&
    cobMains.sublayers?.getItemAt(0).title === 'Wastewater Collection System'
  ) {
    cobMains.sublayers = cobMains.sublayers.getItemAt(0).sublayers;
  }
});

const waterSewerDistricts = new FeatureLayer({
  url: 'http://gis.gallatin.mt.gov/arcgis/rest/services/MapServices/EHSBase/MapServer/11',
  outFields: ['*'],
  title: 'Water & Sewer Districts',
  visible: true,
  id: 'waterSewerDistricts'
});

const publicSystemsGroupLayer = new GroupLayer({
  title: 'Public Systems',
  id: 'publicWastewaterSystems',
  visible: false,
  layers: [cobMains, waterSewerDistricts]
});

const floodHazardZonesLayer = new MapImageLayer({
  title: 'Flood Hazard Zones',
  url: 'https://hazards.fema.gov/gis/nfhl/rest/services/public/NFHL/MapServer',
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
  portalItem: {
    id: 'adb80ad0ba814391a68dd52b8bf27ada'
  },
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
  layers: [
    parcelsLayer,
    floodHazardZonesLayer,
    publicSystemsGroupLayer,
    miscEHSLayer,
    deqGroupLayer,
    gwicLayer,
    notesLayer,
    gwMLayer,
    wTSLayer,
    addressGroupLayer
  ]
});

walkDownLayers(map.layers);
