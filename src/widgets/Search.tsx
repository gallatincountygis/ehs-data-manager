/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import { subclass, declared, property } from 'esri/core/accessorSupport/decorators';
//import { renderable } from 'esri/widgets/support/widget';
import Widget from 'esri/widgets/Widget';
import { tsx, renderable } from 'esri/widgets/support/widget';
import Basemap from 'esri/Basemap';
import Extent from 'esri/geometry/Extent';
import ArcGISSearch from 'esri/widgets/Search';
import LayerSearchSource from 'esri/widgets/Search/LayerSearchSource';
import { wTSLayer } from '../data/layers';
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
    this.addWWTSLayer();
    this.allSources.on('after-add', s => {
      if (s.item.name === 'ArcGIS World Geocoding Service') {
        s.item.filter = {
          geometry: new Extent({
            xmin: -1.2446771509102838e7,
            ymin: 5538979.1157324435,
            xmax: -1.2332398764615571e7,
            ymax: 5811320.651543414,
            spatialReference: {
              wkid: 102100
            }
          })
        };
      }
    });
    this.on('select-result', function(event) {
      this.view.goTo({ zoom: 18 });
    });
  }

  addWWTSLayer() {
    this.sources.add(
      new LayerSearchSource({
        layer: wTSLayer,
        searchFields: ['GCCHDWWTP'],
        displayField: 'GCCHDWWTP',
        exactMatch: true,
        name: 'Permit Number',
        placeholder: 'enter a permit number',
        zoomScale: 1000
      })
    );
  }

  viewToggle(toView: esri.SceneView | esri.MapView) {
    this.view = toView;
    this.view.ui.add(this, { position: 'top-left', index: 0 });
  }
}

export default Search;
