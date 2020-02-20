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
  bearingNode: HTMLElement | null;
  @property()
  @renderable()
  loadingSpan: HTMLSpanElement;
  @property()
  stateWatch: esri.WatchHandle;
  domNode: any;

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
            this.addNodes();
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

  private addNodes() {
    this.gradientNode?.remove();
    this.gradientNode = null;
    this.bearingNode?.remove();
    this.bearingNode = null;
    this.addHydraulicGradientNodes();
    this.addBearingNode();
  }

  private addHydraulicGradientNodes() {
    if (this.container) {
      this.renderNow();
      if (this.activeTool == 'direct-line') {
        const section = (this?.container as HTMLElement).querySelectorAll('section')[1];
        this.gradientNode = section?.lastElementChild?.cloneNode(true);
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

  private addBearingNode() {
    let path: number[][];
    if (this.activeTool === 'distance') {
      const geometry = (this.viewModel.activeViewModel as esri.DistanceMeasurement2DViewModel).measurement?.geometry;
      path = geometry?.paths[geometry.paths.length - 1].slice(geometry.paths[geometry.paths.length - 1].length - 2);
      //resultsContainer = this.domNode.getElementsByClassName('esri-distance-measurement-2d__measurement')[0];
    } else if (this.activeTool === 'direct-line') {
      const startPoint = (this.viewModel?.activeViewModel as Measure3DTool).tool?.model?.startPoint;
      const endPoint = (this.viewModel?.activeViewModel as Measure3DTool).tool?.model?.endPoint;
      path = [
        [startPoint.x, startPoint.y],
        [endPoint.x, endPoint.y]
      ];
      //resultsContainer = this.domNode.getElementsByClassName('esri-direct-line-measurement-3d__measurement')[0];
    }
    const resultsContainer = (this?.container as HTMLElement).querySelectorAll('section')[1];

    this.bearingNode = resultsContainer.firstElementChild.cloneNode(true);
    this.bearingNode.firstElementChild.innerText = 'Bearing';
    this.bearingNode.lastElementChild.innerText = this.computeAngle(path);
    resultsContainer.appendChild(this.bearingNode);
  }

  private computeAngle(path: number[][]) {
    const pointA = path[0];
    const pointB = path[1];
    let bearing = parseFloat(((Math.atan2(pointB[1] - pointA[1], pointB[0] - pointA[0]) * 180) / Math.PI).toFixed(1));
    if (bearing < 0) {
      bearing = bearing + 360;
    }
    if (bearing == 0) {
      return 'E';
    }
    if (bearing > 0 && bearing <= 90) {
      return 'N ' + (bearing != 90 ? (90 - bearing).toFixed(1) + '° E' : '');
    }
    if (bearing > 90 && bearing < 180) {
      return 'N ' + Math.abs(90 - bearing).toFixed(1) + '° W';
    }
    if (bearing == 180) {
      return 'W';
    }
    if (bearing > 180 && bearing <= 270) {
      return 'S ' + (bearing != 180 ? (270 - bearing).toFixed(1) + '° W' : '');
    }
    if (bearing > 270) {
      return 'S ' + (360 - bearing != 270 ? (bearing - 270).toFixed(1) : '') + '° E';
    }
    return 'Something is wrong';
  }
}

export default Measure;
