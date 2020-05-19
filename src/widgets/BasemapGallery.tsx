/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import { subclass, declared, property } from 'esri/core/accessorSupport/decorators';
//import { renderable } from 'esri/widgets/support/widget';
import Widget from 'esri/widgets/Widget';
import Basemap from 'esri/Basemap';
import LocalBasemapsSource from 'esri/widgets/BasemapGallery/support/LocalBasemapsSource';
import ImageryLayer from 'esri/layers/ImageryLayer';
import MapImageLayer from 'esri/layers/MapImageLayer';

import ArcGISBasemapGallery from 'esri/widgets/BasemapGallery';
import esri = __esri;

interface BasemapGalleryParams {
  initView: esri.SceneView | esri.MapView;
  otherView: esri.SceneView | esri.MapView;
  container: HTMLDivElement;
}

@subclass('esri.widgets.BasemapGallery')
class BasemapGallery extends declared(Widget) {
  @property()
  customBasemaps = [
    {
      title: 'Street Map',
      id: 'streetMap',
      layers: [
        {
          type: 'map-image',
          params: {
            url: 'http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/HillshadeBasemap/MapServer'
          }
        }
      ]
    },
    {
      title: '2017 Aerial',
      id: 'stateNAIP201710',
      layers: [
        {
          type: 'imagery',
          params: {
            url: 'http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2017/ImageServer',
            noData: 0
            // rasterFunction: {
            //   functionName: 'ContrastBrightness',
            //   arguments: {
            //     BrightnessOffset: 10
            //   }
            // }
          }
        }
      ]
    },
    {
      title: 'Hi-Res (date varies)',
      id: 'esriImagery',
      layers: [
        {
          type: 'map-image',
          params: {
            url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
          }
        }
      ]
    },
    {
      title: '2015 Aerial',
      id: 'naip2015',
      layers: [
        {
          type: 'imagery',
          params: {
            url: 'http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2015/ImageServer'
          }
        }
      ]
    },
    {
      title: '2013 Aerial',
      id: 'naip2013',
      layers: [
        {
          type: 'imagery',
          params: {
            url: 'http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2013/ImageServer'
          }
        }
      ]
    },
    {
      title: '2012 Bozeman Aerial',
      id: 'bozeman2012',
      layers: [
        {
          type: 'map-image',

          params: {
            url: 'http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer',
            sublayers: [
              {
                id: 0
              }
            ]
          }
        }
      ]
    },
    {
      title: '2011 Aerial',
      id: 'naip2011',
      layers: [
        {
          type: 'imagery',
          params: {
            url: 'http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2011/ImageServer'
          }
        }
      ]
    },
    {
      title: '2011 Color Infrared',
      id: 'cir2011',
      layers: [
        {
          type: 'map-image',
          params: {
            url: 'http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer',

            sublayers: [
              {
                id: 1
              }
            ]
          }
        }
      ]
    },
    {
      title: '2009 Aerial',
      id: 'naip2009',
      layers: [
        {
          type: 'imagery',
          params: {
            url: 'http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2009/ImageServer'
          }
        }
      ]
    },
    {
      title: '2009 Color Infrared',
      id: 'cir2009',
      layers: [
        {
          type: 'map-image',
          params: {
            url: 'http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer',

            sublayers: [
              {
                id: 2
              }
            ]
          }
        }
      ]
    },
    {
      title: '2007 Bozeman Aerial',
      id: 'bozeman2007',
      layers: [
        {
          type: 'map-image',
          params: {
            url: 'http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer',

            sublayers: [
              {
                id: 3
              }
            ]
          }
        }
      ]
    },
    {
      title: '2005 Aerial',
      id: 'naip2005',
      layers: [
        {
          type: 'imagery',
          params: {
            url: 'http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2005/ImageServer'
          }
        }
      ]
    },
    {
      title: '2005 Color Infrared',
      id: 'cir2005',
      layers: [
        {
          type: 'map-image',
          params: {
            url: 'http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer',

            sublayers: [
              {
                id: 4
              }
            ]
          }
        }
      ]
    },
    {
      title: '2004 WYS Aerial',
      id: 'wys2004',
      layers: [
        {
          type: 'map-image',
          params: {
            url: 'http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer',
            title: 'piss',
            sublayers: [
              {
                id: 5
              }
            ]
          }
        }
      ]
    },
    {
      title: '2004 Bozeman Aerial',
      id: 'bozeman2004',
      layers: [
        {
          type: 'map-image',
          params: {
            url: 'http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer',
            sublayers: [
              {
                id: 6
              }
            ]
          }
        }
      ]
    },
    {
      title: '2003 Big Sky Aerial',
      id: 'bigsky2003',
      layers: [
        {
          type: 'map-image',
          params: {
            id: 'fuck',
            title: 'shit',
            url: 'http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer',
            sublayers: [
              {
                id: 7
              }
            ]
          }
        }
      ]
    },
    {
      title: '2001 Color Infrared',
      id: 'cir2001',
      layers: [
        {
          type: 'map-image',
          params: {
            url: 'http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer',

            sublayers: [
              {
                id: 8
              }
            ]
          }
        }
      ]
    },
    {
      title: '1990s Aerial',
      id: 'doqq1990s',
      layers: [
        {
          type: 'imagery',
          params: {
            url: 'http://gisservicemt.gov/arcgis/rest/services/MSL/DOQQ_1990s/ImageServer'
          }
        }
      ]
    },
    {
      title: 'State Topo',
      id: 'mtTopo',
      layers: [
        {
          type: 'map-image',
          params: {
            url: 'https://gisservicemt.gov/arcgis/rest/services/MSL/HistoricTopo/MapServer'
          }
        }
      ]
    },
    {
      title: 'County Topo',
      id: 'gcTopo',
      layers: [
        {
          type: 'map-image',
          params: {
            url: 'http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer',

            sublayers: [
              {
                id: 9
              }
            ]
          }
        }
      ]
    }
  ];

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
    //const source = this.addCustomBasemaps();
    this.gallery = new ArcGISBasemapGallery({ view: params?.initView });
    // this.gallery.viewModel.basemapEquals = (a: Basemap, b: Basemap) => {
    //   return a.id === b.id;
    // };
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

  private addCustomBasemaps() {
    const basemaps: esri.Collection<Basemap> = [];

    this.customBasemaps.forEach(config => {
      const baseLayers: esri.Collection<esri.Layer> = [];
      config.layers?.forEach(layer => {
        let baseLayer;
        switch (layer.type) {
          case 'imagery': {
            baseLayer = new ImageryLayer(layer.params);
            break;
          }
          case 'map-image': {
            baseLayer = new MapImageLayer(layer.params);
            break;
          }
          default: {
            console.log('fuck');
            console.log(config);
            break;
          }
        }
        if (baseLayer) baseLayers.push(baseLayer);
      });
      if (baseLayers) basemaps.push(new Basemap({ baseLayers, id: config.id!, title: config.title! }));
    });
    return new LocalBasemapsSource({ basemaps: basemaps });
  }
}

export default BasemapGallery;
