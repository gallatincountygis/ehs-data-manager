/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
import { subclass, declared, property } from 'esri/core/accessorSupport/decorators';
import Widget from 'esri/widgets/Widget';
import { tsx, renderable } from 'esri/widgets/support/widget';
import Measure from './Measure';
import Coordinates from './Coordinates';
import BasemapGallery from './BasemapGallery';
import Search from './Search';
import Editor from './Editor';
import Ground from 'esri/Ground';
import { elevationLayer } from '../data/app';
import watchUtils from 'esri/core/watchUtils';

import esri = __esri;

interface ViewToggleParameters {
  initView: esri.SceneView | esri.MapView;
  otherView: esri.SceneView | esri.MapView;
  widgets: {
    layerList: esri.LayerList;
    legend: esri.Legend;
    measure: Measure;
    coordinates: Coordinates;
    basemapGallery: BasemapGallery;
    editor: Editor;
    search: Search;
  };
}

const CSS = {
  base: 'view-toggle esri-component esri-widget--button esri-widget esri-interactive'
};

@subclass('esri.widgets.ViewToggle')
class ViewToggle extends declared(Widget) {
  sceneView: esri.SceneView;
  mapView: esri.MapView;
  ground = new Ground({
    layers: [elevationLayer]
  });
  @property()
  widgets: {
    layerList?: esri.LayerList;
    legend?: esri.Legend;
    measure?: Measure;
    basemapGallery?: esri.BasemapGallery;
    editor?: Editor;
    search?: esri.Search;
  };

  @property()
  activeView: esri.SceneView | esri.MapView;
  @property()
  @renderable()
  state: string;
  //@property()
  //container: HTMLDivElement;

  constructor(params?: ViewToggleParameters) {
    super();
    if (params?.initView.type == '3d') {
      this.sceneView = params.initView as esri.SceneView;
      this.mapView = params.otherView as esri.MapView;
      this.state = '2D';
      //this.sceneView.map.ground = this.ground;
    } else {
      this.sceneView = params?.otherView as esri.SceneView;
      this.mapView = params?.initView as esri.MapView;
      this.state = '3D';
    }
    this.activeView = params?.initView;
    //this.container = params?.initView.container!;
  }

  render() {
    return (
      <div
        bind={this}
        class={CSS.base}
        role="button"
        type="button"
        id="switch-btn"
        value={this.state}
        onclick={this.toggle}
      >
        <span id="button_label">{this.state}</span>
      </div>
    );
  }

  switchView(toView: esri.SceneView | esri.MapView) {
    const viewpoint = this.activeView.viewpoint.clone();
    //const container = this.activeView.container;
    for (const key in this.widgets) {
      if (this.widgets[key].viewToggle) {
        this.widgets[key].viewToggle?.(toView);
      } else if (key == 'editor') {
        continue;
      } else {
        this.widgets[key].view = toView;
      }
    }

    this.activeView.container.classList.toggle('hidden');
    toView.container.classList.remove('hidden');
    toView.ui.add(this, 'top-left');
    this.activeView = toView;
    //watchUtils.whenFalseOnce(this.activeView.layerViewManager, 'updating', () => {
    toView.viewpoint = viewpoint;
    //});
  }

  toggle() {
    const newState = this.state === '3D' ? '2D' : '3D';
    this.set('state', newState);
    this.switchView(newState == '2D' ? this.sceneView : this.mapView);
  }
}

export default ViewToggle;
