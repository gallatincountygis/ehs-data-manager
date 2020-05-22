/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import { subclass, declared, property } from 'esri/core/accessorSupport/decorators';
//import { renderable } from 'esri/widgets/support/widget';
import Widget from 'esri/widgets/Widget';
import { tsx, renderable } from 'esri/widgets/support/widget';

import Basemap from 'esri/Basemap';
import ArcGISSearch from 'esri/widgets/Search';
import esri = __esri;

interface SearchParams {
  view: esri.SceneView | esri.MapView;
  otherView: esri.SceneView | esri.MapView;
}

@subclass('esri.widgets.BasemapGallery')
class Search extends declared(ArcGISSearch) {
  @property()
  sceneView: esri.SceneView;
  mapView: esri.MapView;
  @property()
  container: HTMLDivElement;
  constructor(params?: SearchParams) {
    super();
    // if (params?.initView.type == '3d') {
    //   this.sceneView = params.initView as esri.SceneView;
    //   this.mapView = params.otherView as esri.MapView;
    // } else {
    //   this.sceneView = params?.otherView as esri.SceneView;
    //   this.mapView = params?.initView as esri.MapView;
    // }
  }

  viewToggle(toView: esri.SceneView | esri.MapView) {
    this.view = toView;
    this.view.ui.add(this, { position: 'top-left', index: 0 });
  }
}

export default Search;
