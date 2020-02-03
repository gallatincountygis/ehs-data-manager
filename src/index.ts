// styles
import './css/main.css';
// Map data
import { wTSLayer, map } from './data/app';
// MapView
import SceneView from 'esri/views/SceneView';
import MapView from 'esri/views/MapView';
// widget utils
import { initWidgets } from './widgets';
import Editor from 'esri/widgets/Editor';
// interactions
import { interactions } from './interactions';
import { drawRegulatoryBuffer } from './regulatory-buffer';

/**
 * Initialize application
 */

const sceneView = new SceneView({
  container: 'sceneViewDiv',
  map
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
  sceneView.goTo(wTSLayer.fullExtent);
});
// let editor;
// mapView.when(mapView => {
//   editor = new Editor({
//     view: mapView,
//     layerInfos: [
//       {
//         layer: wTSLayer
//       }
//     ],
//     container: document.getElementById('widget-editor') as HTMLElement
//   });
//   //mapView.ui.add(editor, 'top-right');
// });
sceneView.when(() => initWidgets(sceneView, mapView)).then(interactions);

sceneView.on('click', function(event) {
  sceneView.hitTest(event).then(function(response) {
    drawRegulatoryBuffer(response, sceneView);
  });
});
