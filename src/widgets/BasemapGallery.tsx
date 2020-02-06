/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import { subclass, declared } from 'esri/core/accessorSupport/decorators';
//import { renderable } from 'esri/widgets/support/widget';
import ArcGISBasemapGallery from 'esri/widgets/BasemapGallery';
import esri = __esri;

@subclass('esri.widgets.BasemapGallery')
class BasemapGallery extends declared(ArcGISBasemapGallery) {
  constructor() {
    super();
  }

  viewToggle(toView: esri.SceneView | esri.MapView) {
    this.view = toView;
    // this.viewModel.activeBasemap = this.viewModel.items
    //   .filter(bgItem => {
    //     return bgItem.basemap.title == basemapTitle;
    //   })
    //   .getItemAt(0).basemap;
  }
}

export default BasemapGallery;
