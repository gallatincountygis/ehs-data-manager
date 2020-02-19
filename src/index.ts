// styles
import './css/main.css';
// Map data
import { wTSLayer, map, display } from './data/app';
// MapView
import SceneView from 'esri/views/SceneView';
import MapView from 'esri/views/MapView';
import Viewpoint from 'esri/Viewpoint';
// widget utils
import { initWidgets } from './widgets';
// interactions
import { interactions } from './interactions';
import { drawRegulatoryBuffer } from './regulatory-buffer';
import esri = __esri;
import { Point } from 'esri/geometry';
/**
 * Initialize application
 */

const viewpoint = new Viewpoint({
  rotation: 0,
  scale: 9809049.34536391,
  targetGeometry: new Point({
    spatialReference: {
      wkid: 102100
    },
    x: -12431608.276620537,
    y: 6211820.033542403,
    z: 1052.8817086927593
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
  initView.goTo({ target: wTSLayer.fullExtent as esri.Extent, heading: 0 });
});

initView.when(() => initWidgets(sceneView, mapView)).then(interactions);

for (const key in viewConfig) {
  viewConfig[key].on('click', function(event: esri.MapViewClickEvent) {
    viewConfig[key].hitTest(event).then(function(response: esri.HitTestResult) {
      drawRegulatoryBuffer(response, viewConfig[key]);
    });
  });
}
