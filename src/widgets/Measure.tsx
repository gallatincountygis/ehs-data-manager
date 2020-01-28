/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import { subclass, declared, property } from 'esri/core/accessorSupport/decorators';
import { renderable } from 'esri/widgets/support/widget';
//import DirectLineMeasurement3D from 'esri/widgets/DirectLineMeasurement3D';
import Measurement from 'esri/widgets/Measurement';
import esri = __esri;

@subclass('esri.widgets.Measure')
class Measure extends declared(Measurement) {
  @property()
  @renderable()
  gradientNode: { firstElementChild: HTMLSpanElement } | null;
  @property()
  @renderable()
  loadingSpan: HTMLSpanElement;
  stateWatch: esri.WatchHandle;

  constructor(params?: any) {
    super();
  }
  disable() {
    this.clear();
    console.log(this);
  }
  enable() {
    this.activeTool = 'direct-line';
    if (!this.stateWatch) {
      this.stateWatch = this.watch('viewModel.state', state => {
        switch (state) {
          case 'measured': {
            this.gradientNode?.remove();
            this.gradientNode = null;
            this.addHydraulicGradientNodes();
          }
        }
        console.log('Current state: ', state);
      });
    }
    // this.watch('viewModel.activeViewModel.measurement', measurement => {
    //   console.log(measurement);
    // });
    console.log(this);
  }

  private addHydraulicGradientNodes() {
    if (this.container) {
      this.renderNow();
      const section = this?.container.querySelectorAll('section')[1];
      this.gradientNode = section.lastElementChild.cloneNode(true);
      if (this?.gradientNode?.firstElementChild && this?.gradientNode?.lastElementChild) {
        this.gradientNode.firstElementChild.innerText = 'Hydaulic Gradient';
        const hydraulicGradient = (
          this.viewModel.activeViewModel.tool.verticalDistance.value /
          this.viewModel.activeViewModel.tool.horizontalDistance.value /
          3
        ).toFixed(4);
        this.gradientNode.lastElementChild.innerText = hydraulicGradient;
      }
      section.appendChild(this.gradientNode);
    }
  }
}

export default Measure;
