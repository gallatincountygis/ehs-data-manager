import esri = __esri;
export function popupSort(view: esri.View) {
  if (view.popup.featureCount === 0) {
    return;
  }
  console.log(view.popup.featureCount);
  const featureList = view.popup.features.sort((a, b) => {
    const aLayer = a.layer || a.sourceLayer.layer;
    const bLayer = b.layer || b.sourceLayer.layer;
    return (view.map.allLayers.indexOf(aLayer) - view.map.allLayers.indexOf(bLayer)) * -1;
  });
  view.popup.features = featureList;
}

export function addPopupsToMapImageLayer(layer: esri.MapImageLayer) {
  layer?.sublayers.forEach((sublayer: esri.Sublayer) => {
    sublayer
      .createFeatureLayer()
      .then(featureLayer => featureLayer.load())
      .then(featureLayer => {
        sublayer.popupTemplate = featureLayer.createPopupTemplate();
      });
  });
}
