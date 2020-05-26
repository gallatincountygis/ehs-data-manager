// Widgets
import LayerList from 'esri/widgets/LayerList';
import Legend from 'esri/widgets/Legend';
import Compass from 'esri/widgets/Compass';
//import Editor from './widgets/Editor';

import Measure from './widgets/Measure';
import BasemapGallery from './widgets/BasemapGallery';
import ViewToggle from './widgets/ViewToggle';
import Editor from './widgets/Editor';
import Search from './widgets/Search';
import { display } from './data/app';
import { InteractionParameters } from './interactions';

import esri = __esri;

export let editor: esri.Editor;

export function initWidgets(sceneView: esri.SceneView, mapView: esri.MapView): InteractionParameters {
  let initView;
  let otherView;
  if (display == '2D') {
    initView = mapView;
    otherView = sceneView;
  } else {
    initView = sceneView;
    otherView = mapView;
  }

  const legend = new Legend({ view: initView });
  const layerList = new LayerList({ view: initView });
  const measure = new Measure({ view: initView, linearUnit: 'feet' });
  const basemapGalleryContainer = document.getElementById('widget-basemap-gallery') as HTMLDivElement;
  const basemapGallery = new BasemapGallery({ initView, otherView, container: basemapGalleryContainer });
  const compass = new Compass({ view: mapView });
  mapView.ui.add(compass, 'top-left');

  const search = new Search({
    view: initView,
    otherView
  });
  initView.ui.add(search, { position: 'top-left', index: 0 });

  editor = new Editor({
    view: mapView,
    layerInfos: [],
    container: document.getElementById('widget-editor') as HTMLDivElement
  });

  const viewToggle = new ViewToggle({
    initView,
    otherView,
    widgets: {
      layerList,
      legend,
      measure,
      basemapGallery,
      editor,
      search
    }
  });
  initView.ui.add(viewToggle, 'top-left');
  //mapView.ui.add(viewToggle, 'top-left');

  // interactions
  const legendContainer = document.getElementById('widget-legend') as HTMLElement;
  const layerListContainer = document.getElementById('widget-layerlist') as HTMLElement;
  const measureContainer = document.getElementById('widget-measure') as HTMLElement;

  //editor.container =
  const widgetPanel = document.getElementById('widget-panel');

  if (widgetPanel) {
    sceneView.padding = mapView.padding = {
      ...sceneView.padding,
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
  // if (basemapGalleryContainer) {
  //   basemapGallery.container = basemapGalleryContainer;
  // }

  return {
    layerListContainer,
    legendContainer,
    measure,
    basemapGallery,
    editor,
    viewToggle,
    widgetPanel,
    sceneView,
    mapView
  };
}
