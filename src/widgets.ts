// Widgets
import LayerList from 'esri/widgets/LayerList';
import Legend from 'esri/widgets/Legend';
import Compass from 'esri/widgets/Compass';
//import Editor from './widgets/Editor';
import Editor from 'esri/widgets/Editor';
import Measure from './widgets/Measure';
import BasemapGallery from './widgets/BasemapGallery';
import ViewToggle from './widgets/ViewToggle';
import { wTSLayer } from './data/app';

import esri = __esri;

export function initWidgets(view: esri.SceneView, mapView: esri.MapView) {
  const legend = new Legend({ view });
  const layerList = new LayerList({ view });
  const measure = new Measure({ view });
  const basemapGallery = new BasemapGallery({ view });
  const compass = new Compass({ view: mapView });
  mapView.ui.add(compass, 'top-left');
  const editor = new Editor({
    view: mapView,
    layerInfos: [
      {
        layer: wTSLayer
      }
    ],
    container: document.getElementById('widget-editor') as HTMLElement
  });
  const viewToggle = new ViewToggle({
    initView: view,
    otherView: mapView,
    widgets: {
      layerList,
      legend,
      measure,
      basemapGallery,
      editor
    }
  });
  view.ui.add(viewToggle, 'top-left');
  //mapView.ui.add(viewToggle, 'top-left');

  // interactions
  const legendContainer = document.getElementById('widget-legend') as HTMLElement;
  const layerListContainer = document.getElementById('widget-layerlist') as HTMLElement;
  const measureContainer = document.getElementById('widget-measure') as HTMLElement;
  const basemapGalleryContainer = document.getElementById('widget-basemap-gallery') as HTMLElement;
  //editor.container =
  const widgetPanel = document.getElementById('widget-panel');

  if (widgetPanel) {
    view.padding = mapView.padding = {
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
    editor,
    viewToggle,
    widgetPanel,
    view,
    mapView
  };
}
