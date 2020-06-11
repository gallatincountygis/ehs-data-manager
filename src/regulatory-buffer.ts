import Graphic from 'esri/Graphic';
import geometryEngine from 'esri/geometry/geometryEngine';
import { wTSLayer } from './data/layers';
import esri = __esri;

let graphic: Graphic;

export function drawRegulatoryBuffer(g: esri.Graphic, view: esri.View) {
  // check if a feature is returned from the hurricanesLayer
  // do something with the result graphic
  if (graphic) {
    view.graphics.remove(graphic);
  }
  if (g) {
    const septicBuffer = geometryEngine.geodesicBuffer(g.geometry, 200, 'feet') as esri.Geometry;
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
}

export function clearRegulatoryBuffer(view: esri.MapView | esri.SceneView) {
  view.graphics.remove(graphic);
}
