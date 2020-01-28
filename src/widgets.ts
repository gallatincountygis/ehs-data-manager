// Widgets
import LayerList from 'esri/widgets/LayerList';
import Legend from 'esri/widgets/Legend';
import BasemapGallery from 'esri/widgets/BasemapGallery';
import Measure from './widgets/Measure';

import esri = __esri;

export function initWidgets(view: esri.View | esri.SceneView) {
  const legend = new Legend({ view });
  const layerList = new LayerList({ view });
  const measure = new Measure({ view });
  const basemapGallery = new BasemapGallery({ view });

  // interactions
  const legendContainer = document.getElementById('widget-legend') as HTMLElement;
  const layerListContainer = document.getElementById('widget-layerlist') as HTMLElement;
  const measureContainer = document.getElementById('widget-measure') as HTMLElement;
  const basemapGalleryContainer = document.getElementById('widget-basemap-gallery') as HTMLElement;
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
  if (basemapGalleryContainer) {
    basemapGallery.container = basemapGalleryContainer;
  }

  return {
    layerListContainer,
    legendContainer,
    measure,
    basemapGallery,
    widgetPanel,
    view
  };
}
