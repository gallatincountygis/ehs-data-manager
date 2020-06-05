import ResizeObserver from 'resize-observer-polyfill';
import Measure from './widgets/Measure';
import BasemapGallery from './widgets/BasemapGallery';
import { editor } from './widgets';
import esri = __esri;
import ViewToggle from './widgets/ViewToggle';

export interface InteractionParameters {
  layerListContainer: HTMLElement;
  legendContainer: HTMLElement;
  measure: Measure;
  basemapGallery: BasemapGallery;
  editor: esri.Editor;
  viewToggle: ViewToggle;
  widgetPanel: any;
  sceneView: esri.SceneView;
  mapView: esri.MapView;
}
interface WidgetListItem {
  label: string;
  container: HTMLElement;
}

let widgetList: WidgetListItem[];
let actions: HTMLElement[];
let editAction: Element;

export function interactions({
  layerListContainer,
  legendContainer,
  measure,
  basemapGallery,
  editor,
  viewToggle,
  widgetPanel,
  sceneView,
  mapView
}: InteractionParameters) {
  // toggle widgets
  actions = Array.from(document.querySelectorAll('calcite-action'));
  widgetList = [
    {
      label: 'Layers',
      container: layerListContainer
    },
    {
      label: 'Legend',
      container: legendContainer
    },
    {
      label: 'Measure',
      container: measure.container as HTMLElement
    },
    {
      label: 'Basemap',
      container: basemapGallery.container as HTMLElement
    },
    {
      label: 'Edit',
      container: editor.container as HTMLElement
    }
  ];
  for (const action of actions) {
    action.addEventListener('click', () => {
      const actionText = (action as any).text;
      widgetList.forEach(w => {
        actionText == w.label ? w.container.classList.toggle('hidden') : w.container.classList.add('hidden');
      });
      if (actionText != 'Measure') {
        measure.disable();
      } else {
        measure.enable();
      }
      if (actionText == 'Edit') {
        if (viewToggle.state == '2D') {
          viewToggle.toggle();
        }
      } else {
        editor?.viewModel?.cancelWorkflow();
      }
      widgetPanel.collapsed =
        widgetList.filter(w => {
          return !w.container.classList.contains('hidden');
        }).length == 0;
    });
  }

  // listen for widget panel to be to be resized
  const rObserver = new ResizeObserver(() => {
    sceneView.padding = mapView.padding = {
      ...sceneView.padding,
      left: widgetPanel.offsetWidth
    };
  });

  rObserver.observe(widgetPanel);
  return rObserver;
}

export function openEditor() {
  for (const action of actions) {
    if ((action as any).text === 'Edit' && (editor.container as HTMLElement).classList.contains('hidden')) {
      (action as HTMLElement).click();
    }
  }
}
