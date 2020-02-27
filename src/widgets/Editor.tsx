/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import { subclass, declared, property } from 'esri/core/accessorSupport/decorators';
//import { renderable } from 'esri/widgets/support/widget';
import '@esri/calcite-components';
import Widgets from 'esri/widgets/Widget';
import watchUtils from 'esri/core/watchUtils';
import promiseUtils from 'esri/core/promiseUtils';
import { tsx, renderable } from 'esri/widgets/support/widget';
import ArcGISEditor from 'esri/widgets/Editor';
import esri = __esri;

interface BasemapGalleryParams {
  view: esri.SceneView | esri.MapView;
  container: HTMLDivElement;
}

@subclass('esri.widgets.Editor')
class Editor extends declared(ArcGISEditor) {
  @property()
  container: HTMLDivElement;
  constructor(params?: BasemapGalleryParams) {
    super();
    //this.container = params.container;
    //this.editor = new ArcGISEditor(params);
  }

  viewToggle(toView: esri.SceneView | esri.MapView) {}
}

export default Editor;
