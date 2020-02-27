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

function createPopupsFromFeatureLayer(sublayer: esri.Sublayer) {
  if (!sublayer.popupTemplate)
    sublayer
      .createFeatureLayer()
      .then(featureLayer => featureLayer.load())
      .then(featureLayer => {
        sublayer.popupTemplate = featureLayer.createPopupTemplate();
      });
}

export function addPopupsToMapImageLayer(layer) {
  layer?.sublayers?.forEach((sublayer: esri.Sublayer) => {
    if (sublayer.sublayers) addPopupsToMapImageLayer(sublayer);
    else createPopupsFromFeatureLayer(sublayer);
  });
}
