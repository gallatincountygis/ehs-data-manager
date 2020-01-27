// Widgets
import LayerList from 'esri/widgets/LayerList';
import Legend from 'esri/widgets/Legend';
import DirectLineMeasurement3D from 'esri/widgets/DirectLineMeasurement3D';

import esri = __esri;

export function initWidgets(view: esri.View | esri.SceneView) {
  const legend = new Legend({ view });
  const layerList = new LayerList({ view });
  const measure = new DirectLineMeasurement3D({ view });

  // interactions
  const legendContainer = document.getElementById('widget-legend') as HTMLElement;
  const layerListContainer = document.getElementById('widget-layerlist') as HTMLElement;
  const measureContainer = document.getElementById('widget-measure') as HTMLElement;
  const widgetPanel = document.getElementById('widget-panel');

  if (widgetPanel) {
    view.padding = {
      ...view.padding,
      left: widgetPanel.offsetWidth
    };
  }

  if (legendContainer) {
    legend.container = legendContainer;
  }
  if (layerListContainer) {
    layerList.container = layerListContainer;
  }
  if (measureContainer) {
    measure.container = measureContainer;
  }

  return {
    layerListContainer,
    legendContainer,
    measureContainer,
    widgetPanel,
    view
  };
}
