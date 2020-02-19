/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import { subclass, declared, property } from 'esri/core/accessorSupport/decorators';
import { renderable } from 'esri/widgets/support/widget';
import Measurement from 'esri/widgets/Measurement';
import esri = __esri;

interface Measure3DTool extends esri.DirectLineMeasurement3DViewModel {
  tool: {
    horizontalDistance: {
      value: number;
    };
    verticalDistance: {
      value: number;
    };
  };
}

@subclass('esri.widgets.Measure')
class Measure extends declared(Measurement) {
  @property()
  @renderable()
  gradientNode: HTMLElement | null;
  @property()
  @renderable()
  loadingSpan: HTMLSpanElement;
  @property()
  stateWatch: esri.WatchHandle;

  constructor(params?: any) {
    super();
  }

  disable() {
    this.clear();
    this.activeTool = null;
  }
  enable() {
    this.activeTool = this.view.type == '2d' ? 'distance' : 'direct-line';
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

  viewToggle(toView: esri.SceneView | esri.MapView) {
    this.clear();
    this.view = toView;
    if (!(this.container as HTMLElement).classList.contains('hidden')) {
      this.activeTool = toView.type == '2d' ? 'distance' : 'direct-line';
    }
  }

  private addHydraulicGradientNodes() {
    if (this.container) {
      this.renderNow();
      if (this.activeTool == 'direct-line') {
        const section = (this?.container as HTMLElement).querySelectorAll('section')[1];
        this.gradientNode = section?.lastElementChild?.cloneNode(true) as HTMLSpanElement;
        if (this?.gradientNode?.firstElementChild && this?.gradientNode?.lastElementChild) {
          (this.gradientNode.firstElementChild as HTMLSpanElement).innerText = 'Hydraulic Gradient';
          const hydraulicGradient = (
            (this.viewModel.activeViewModel as Measure3DTool).tool.verticalDistance.value /
            (this.viewModel.activeViewModel as Measure3DTool).tool.horizontalDistance.value /
            3
          ).toFixed(4);
          (this.gradientNode.lastElementChild as HTMLSpanElement).innerText = hydraulicGradient;
        }
        section.appendChild(this.gradientNode);
      }
    }
  }
}

export default Measure;
