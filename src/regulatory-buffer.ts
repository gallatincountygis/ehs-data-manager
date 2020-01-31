import Graphic from 'esri/Graphic';
import geometryEngine from 'esri/geometry/geometryEngine';
import { wTSLayer } from './data/app';
import esri = __esri;

let graphic: Graphic;

export function drawRegulatoryBuffer(response: esri.HitTestResult, view: esri.View | esri.SceneView) {
  // check if a feature is returned from the hurricanesLayer
  // do something with the result graphic
  if (graphic) {
    view.graphics.remove(graphic);
  }
  const hitgraphic = response.results.filter(function(result) {
    return result.graphic.layer === wTSLayer;
  })[0].graphic;
  const septicBuffer = geometryEngine.geodesicBuffer(hitgraphic.geometry, 200, 'feet') as esri.Geometry;
  const bufferGraphic = new Graphic({
    geometry: septicBuffer,
    symbol: {
      type: 'simple-fill',
      outline: { width: 2, color: [255, 170, 0, 1] },
      color: [0, 0, 0, 0]
    } as esri.SymbolProperties
  });
  graphic = bufferGraphic;
  view.graphics.add(bufferGraphic);
}
