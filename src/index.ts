// styles
import './css/main.css';
// Map data
import { wTSLayer, map, display } from './data/app';
// MapView
import SceneView from 'esri/views/SceneView';
import MapView from 'esri/views/MapView';
import Viewpoint from 'esri/Viewpoint';
import watchUtils from 'esri/core/watchUtils';
// widget utils
import { initWidgets } from './widgets';
import { popupSort } from './popup';
// interactions
import { interactions } from './interactions';
import { drawRegulatoryBuffer } from './regulatory-buffer';
import esri = __esri;
import { Point } from 'esri/geometry';
/**
 * Initialize application
 */

const viewpoint = new Viewpoint({
  scale: 288895,
  targetGeometry: new Point({
    spatialReference: {
      wkid: 102100
    },
    x: -12377880,
    y: 5736061
  })
});

const sceneView = new SceneView({
  container: 'sceneViewDiv',
  map,
  viewpoint,
  popup: { defaultPopupTemplateEnabled: true },
  qualityProfile: 'high'
});

const mapView = new MapView({
  container: 'mapViewDiv',
  viewpoint,
  popup: { defaultPopupTemplateEnabled: true },
  map
});

const initView = display === '2D' ? mapView : sceneView;
initView.container.classList.remove('hidden');

export const viewConfig = {
  sceneView,
  mapView
};

wTSLayer.when(() => {
  //initView.goTo({ target: wTSLayer.fullExtent as esri.Extent, heading: 0 });
});

initView
  .when()
  .then(() => initWidgets(sceneView, mapView))
  .then(interactions);

for (const key in viewConfig) {
  viewConfig[key].when().then(
    watchUtils.watch(viewConfig[key].popup, 'featureCount', () => {
      popupSort(viewConfig[key]);
    })
  );
  viewConfig[key].on('click', function(event: esri.MapViewClickEvent) {
    viewConfig[key].hitTest(event).then(function(response: esri.HitTestResult) {
      drawRegulatoryBuffer(response, viewConfig[key]);
    });
  });
}
