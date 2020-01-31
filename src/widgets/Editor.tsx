/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
import { declared, subclass, property } from 'esri/core/accessorSupport/decorators';
//import DirectLineMeasurement3D from 'esri/widgets/DirectLineMeasurement3D';
import ArcGISEditor from 'esri/widgets/Editor';
import { tsx, renderable } from 'esri/widgets/support/widget';

import esri = __esri;

@subclass('esri.widgets.Editor')
class Editor extends declared(ArcGISEditor) {
  constructor(params?: esri.EditorProperties) {
    super();
  }
  render() {
    return this.domNode;
  }
}

export default Editor;
