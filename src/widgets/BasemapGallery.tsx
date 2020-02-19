/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import { subclass, declared, property } from 'esri/core/accessorSupport/decorators';
//import { renderable } from 'esri/widgets/support/widget';
import Widgets from 'esri/widgets/Widget';
import Basemap from 'esri/Basemap';
import watchUtils from 'esri/core/watchUtils';
import promiseUtils from 'esri/core/promiseUtils';
import { tsx, renderable } from 'esri/widgets/support/widget';
import ArcGISBasemapGallery from 'esri/widgets/BasemapGallery';
import esri = __esri;

interface BasemapGalleryParams {
  initView: esri.SceneView | esri.MapView;
  otherView: esri.SceneView | esri.MapView;
  container: HTMLDivElement;
}

@subclass('esri.widgets.BasemapGallery')
class BasemapGallery extends declared(Widgets) {
  noBasemap: esri.Basemap;
  sceneView: esri.SceneView;
  mapView: esri.MapView;
  gallery: esri.BasemapGallery;
  @property()
  container: HTMLDivElement;
  constructor(params?: BasemapGalleryParams) {
    super();
    if (params?.initView.type == '3d') {
      this.sceneView = params.initView as esri.SceneView;
      this.mapView = params.otherView as esri.MapView;
    } else {
      this.sceneView = params?.otherView as esri.SceneView;
      this.mapView = params?.initView as esri.MapView;
    }
    this.container = params.container;
    this.gallery = new ArcGISBasemapGallery({ view: params?.initView });
  }
  render() {
    return this.gallery.render();
  }

  viewToggle(toView: esri.SceneView | esri.MapView) {
    const basemap = this.gallery.activeBasemap.toJSON();
    basemap.baseLayers = basemap.baseMapLayers;
    this.gallery.view = toView;
    this.gallery.activeBasemap?.destroy();
    this.gallery.view.basemapView?.destroy();
    //this.gallery.view.map.set('basemap', Basemap.fromJSON(basemap));
  }
}

export default BasemapGallery;
