/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import { subclass, declared, property } from 'esri/core/accessorSupport/decorators';
import { tsx, renderable } from 'esri/widgets/support/widget';

//import '@esri/calcite-components';
import Widget from 'esri/widgets/Widget';
import ArcGISEditor from 'esri/widgets/Editor';
import * as watchUtils from 'esri/core/watchUtils';
import esri = __esri;
//import { renderable } from 'esri/widgets/support/widget';

interface EditorParams {
  view: esri.SceneView | esri.MapView;
  layerInfos: esri.LayerInfo[];
  container: HTMLDivElement;
}

@subclass('esri.widgets.Editor')
class Editor extends declared(Widget) {
  @property()
  container: HTMLDivElement;

  arcGISEditor: ArcGISEditor;

  @property()
  layerInfos: esri.LayerInfo[];

  @property()
  view: esri.MapView;

  constructor(params?: EditorParams) {
    super();
    //this.makeArcGISWidget();
    //this.container = params.container;
    //this.editor = new ArcGISEditor(params);
    //this.fireReady();
  }
  makeArcGISWidget() {
    if (this.container.children.length === 0) {
      this.container.appendChild(document.createElement('div'));
    }
    this.arcGISEditor = new ArcGISEditor({
      view: this.view,
      layerInfos: this.layerInfos,
      container: this.container.firstElementChild as HTMLElement
    });
    watchUtils.watch(this.arcGISEditor?.viewModel, 'state', this.onAwaitingFeature);
  }
  postInitialize() {
    this.makeArcGISWidget();
  }
  fireReady() {
    this.emit('ready', this);
  }
  render() {
    return this.arcGISEditor ? this.arcGISEditor.container : <div>editing not supported in 3d</div>;
  }
  viewToggle(toView: esri.SceneView | esri.MapView) {
    if (toView.hasOwnProperty('camera')) {
      this.arcGISEditor.destroy();
    } else {
      setTimeout(() => {
        this.makeArcGISWidget();
      }, 3000);
    }
    //console.log('editing');
    //console.log(this.layerInfos);
  }

  onAwaitingFeature(state: string) {
    if (['awaiting-feature-to-update', 'awaiting-feature-to-create'].indexOf(state) >= 0) {
      this.view?.popup?.close();
    }
  }
}

export default Editor;
