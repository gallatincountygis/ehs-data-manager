// Widgets
import LayerList from 'esri/widgets/LayerList';
import Legend from 'esri/widgets/Legend';

import Measure from './widgets/Measure';

import esri = __esri;

export function initWidgets(view: esri.View | esri.SceneView) {
  const legend = new Legend({ view });
  const layerList = new LayerList({ view });
  const measure = new Measure({ view });

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
    //measure.enable();
  }

  return {
    layerListContainer,
    legendContainer,
    measure,
    widgetPanel,
    view
  };
}
