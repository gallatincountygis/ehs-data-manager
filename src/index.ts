// styles
import './css/main.css';
// Map data
import { wTSLayer, map } from './data/app';
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
  rotation: 32.74273108334256,
  scale: 9809049.34536391,
  targetGeometry: new Point({
    spatialReference: {
      wkid: 102100
    },
    x: -12431608.276620537,
    y: 6211820.033542403,
    z: 1052.8817086927593
  }),
  camera: {
    position: {
      spatialReference: {
        wkid: 102100
      },
      x: -11116885.381539581,
      y: 4435696.605336761,
      z: 2176363.1578471847
    },
    heading: 327.25726891665744,
    tilt: 33.859258406057585
  }
});

const sceneView = new SceneView({
  container: 'sceneViewDiv',
  map,
  viewpoint
});

const mapView = new MapView({
  container: 'mapViewDiv',
  map
});
export const viewConfig = {
  sceneView,
  mapView
};

wTSLayer.when(() => {
  sceneView.goTo({ target: wTSLayer.fullExtent as esri.Extent, heading: 0 } as esri.GoToTarget3D);
});

sceneView.when(() => initWidgets(sceneView, mapView)).then(interactions);

sceneView.on('click', function(event) {
  sceneView.hitTest(event).then(function(response) {
    drawRegulatoryBuffer(response, sceneView);
  });
});
