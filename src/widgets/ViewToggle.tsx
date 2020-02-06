/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
import { subclass, declared, property } from 'esri/core/accessorSupport/decorators';
import Widget from 'esri/widgets/Widget';
import { tsx, renderable } from 'esri/widgets/support/widget';
import Measure from './Measure';
import watchUtils from 'esri/core/watchUtils';

import esri = __esri;

interface ViewToggleParameters {
  initView: esri.SceneView | esri.MapView;
  otherView: esri.SceneView | esri.MapView;
  widgets: {
    layerList: esri.LayerList;
    legend: esri.Legend;
    measure: Measure;
    basemapGallery: esri.BasemapGallery;
    editor: esri.Editor;
  };
}

const CSS = {
  base: 'view-toggle esri-component esri-widget--button esri-widget esri-interactive'
};

@subclass('esri.widgets.ViewToggle')
class ViewToggle extends declared(Widget) {
  sceneView: esri.SceneView;
  mapView: esri.MapView;
  @property()
  widgets: {
    layerList?: esri.LayerList;
    legend?: esri.Legend;
    measure?: Measure;
    basemapGallery?: esri.BasemapGallery;
    editor?: esri.Editor;
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
    } else {
      this.sceneView = params?.otherView as esri.SceneView;
      this.mapView = params?.initView as esri.MapView;
      this.state = '3D';
    }
    this.activeView = params?.initView!;
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
    const viewPoint = this.activeView.viewpoint.clone();
    //const container = this.activeView.container;

    this.activeView.container.classList.toggle('hidden');
    toView.container.classList.remove('hidden');
    console.log(viewPoint);

    toView.ui.add(this, 'top-left');
    this.activeView = toView;

    //toView.viewpoint = viewPoint;
    for (const key in this.widgets) {
      if (this.widgets[key].viewToggle) {
        this.widgets[key].viewToggle?.(toView);
      } else if (key == 'editor') {
        continue;
      } else {
        this.widgets[key].view = toView;
      }
    }
  }

  toggle() {
    const newState = this.state === '3D' ? '2D' : '3D';
    this.set('state', newState);
    this.switchView(newState == '2D' ? this.sceneView : this.mapView);
  }
}

export default ViewToggle;
