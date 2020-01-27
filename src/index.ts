// styles
import './css/main.css';
// Map data
import { wTSLayer, map } from './data/app';
// MapView
import SceneView from 'esri/views/SceneView';
// widget utils
import { initWidgets } from './widgets';
// interactions
import { interactions } from './interactions';
import { drawRegulatoryBuffer } from './regulatory-buffer';

/**
 * Initialize application
 */
const view = new SceneView({
  container: 'viewDiv',
  map
});

wTSLayer.when(() => {
  view.goTo(wTSLayer.fullExtent);
});

view.when(initWidgets).then(interactions);

view.on('click', function(event) {
  view.hitTest(event).then(function(response) {
    drawRegulatoryBuffer(response, view);
  });
});
