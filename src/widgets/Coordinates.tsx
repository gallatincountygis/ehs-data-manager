/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import { subclass, declared, property } from 'esri/core/accessorSupport/decorators';
import Widget from 'esri/widgets/Widget';
import * as watchUtils from 'esri/core/watchUtils';

import { renderable, tsx } from 'esri/widgets/support/widget';

import Point from 'esri/geometry/Point';
import Graphic from 'esri/Graphic';
import MapView from 'esri/views/MapView';
import esri = __esri;

interface Center {
  x?: number;
  y?: number;
}

interface State extends Center {
  interacting?: boolean;
  x?: number;
  y?: number;
}

interface Style {
  textShadow: string;
}

interface CoordinateParams {
  view: MapView;
  container: HTMLElement;
}

const CSS = {
  base: 'esri-widget',
  pointList: 'point-list'
};

@subclass('esri.widgets.Widget')
class Coordinates extends declared(Widget) {
  constructor(params: CoordinateParams) {
    super();
  }

  postInitialize() {
    this.state.x = this.view.center.x;
    this.state.y = this.view.center.y;
    watchUtils.watch(this, 'activated', a => {
      this._onActivation(a);
    });
  }

  //--------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------

  //----------------------------------
  //  view
  //----------------------------------

  @property()
  @renderable()
  view: MapView | esri.SceneView;

  @property()
  @renderable()
  activated = false;

  //----------------------------------
  //  state
  //----------------------------------

  @property()
  @renderable()
  state: State = {};

  @property()
  @renderable()
  cursorLocation: esri.Point = new Point();

  @property()
  @renderable()
  container: HTMLElement;

  @property()
  cursorMoveHandle: esri.ViewPointerMoveEventHandler;

  @property()
  clickHandle: esri.ViewClickEventHandler;

  @property()
  @renderable()
  graphicsList: esri.Graphic[] = [];

  @property()
  eventHandlers: esri.WatchHandle[] = [];

  //-------------------------------------------------------------------
  //
  //  Public methods
  //
  //-------------------------------------------------------------------

  render() {
    const { latitude, longitude } = this.cursorLocation;
    const styles: Style = {
      textShadow: this.state.interacting ? '-1px 0 red, 0 1px red, 1px 0 red, 0 -1px red' : ''
    };
    const rows: tsx.JSX.Element[] = [];
    this.graphicsList
      .filter((g, i) => {
        return i % 2 === 0;
      })
      .forEach(g => {
        const geom = g.geometry as esri.Point;
        rows.push(
          <li key={this.graphicsList.length}>
            <span>longitude: {Number(geom.longitude).toFixed(5)}</span>
            <br></br>
            <span>latitude: {Number(geom.latitude).toFixed(5)}</span>
          </li>
        );
      });
    return (
      <div bind={this} class={CSS.base} styles={styles}>
        <ol class={CSS.pointList}>{rows}</ol>
        <p>
          <span>Cursor:</span>
          <br></br>
          <span>longitude: {Number(longitude).toFixed(5)}</span>
          <br></br>
          <span>latitude: {Number(latitude).toFixed(5)}</span>
        </p>
      </div>
    );
  }

  //-------------------------------------------------------------------
  //
  //  Private methods
  //
  //-------------------------------------------------------------------
  private _onActivation(e: boolean) {
    if (e) {
      this.eventHandlers = [
        (this.view.on('pointer-move', e => {
          this._onCursorMove(e);
        }) as unknown) as esri.WatchHandle,
        (this.view.on('click', e => {
          this._onClick(e);
        }) as unknown) as esri.WatchHandle,
        this.view.popup.watch('visible', opened => {
          if (opened) {
            this.view.popup.close();
          }
        })
      ];
      this.view.surface.style.cursor = 'crosshair';
    } else {
      this.eventHandlers.forEach(h => {
        h.remove();
        this.view.surface.style.cursor = '';
      });
      this.graphicsList.forEach(g => {
        this.view.graphics.remove(g);
      }, this);
      this.graphicsList = [];
    }
  }

  private _onCursorMove(e: esri.ViewPointerMoveEvent) {
    this.cursorLocation = this.view.toMap(e);
  }

  private _onClick(e: esri.ViewClickEvent) {
    const graphic = new Graphic({
      geometry: e.mapPoint,
      symbol: {
        type: 'simple-marker',
        outline: { width: 2.5, color: [255, 186, 13, 1] },
        color: [255, 209, 117, 1]
      }
    });
    const label = new Graphic({
      geometry: e.mapPoint,
      symbol: {
        type: 'text',
        text: this.graphicsList.length / 2 + 1,
        yoffset: -3
      }
    });
    this.view.graphics.addMany([graphic, label]);
    this.graphicsList.push(graphic, label);
  }

  viewToggle(toView: esri.SceneView | esri.MapView) {
    this.view.graphics.removeMany(this.graphicsList);
    this.eventHandlers.forEach(e => {
      e.remove();
    });
    this.view = toView;
    this.view.graphics.addMany(this.graphicsList);
    if (this.activated) {
      this._onActivation(true);
    }
  }
}

export default Coordinates;
