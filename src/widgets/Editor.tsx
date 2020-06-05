/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import { subclass, declared, property } from 'esri/core/accessorSupport/decorators';
//import { renderable } from 'esri/widgets/support/widget';
import '@esri/calcite-components';
import ArcGISEditor from 'esri/widgets/Editor';
import * as watchUtils from 'esri/core/watchUtils';
import esri = __esri;

interface EditorParams {
  view: esri.SceneView | esri.MapView;
  layerInfos: [];
  container: HTMLDivElement;
}

@subclass('esri.widgets.Editor')
class Editor extends declared(ArcGISEditor) {
  @property()
  container: HTMLDivElement;
  constructor(params?: EditorParams) {
    super();
    //this.container = params.container;
    //this.editor = new ArcGISEditor(params);
    this.fireReady();
    watchUtils.watch(this.viewModel, 'state', this.onAwaitingFeature);
  }
  fireReady() {
    this.emit('ready', this);
  }
  viewToggle(toView: esri.SceneView | esri.MapView) {
    this.view = toView.hasOwnProperty('camera') ? null : (toView as esri.MapView);
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
