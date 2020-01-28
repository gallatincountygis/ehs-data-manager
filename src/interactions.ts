import ResizeObserver from 'resize-observer-polyfill';
import Measure from './widgets/Measure';
import esri = __esri;

interface InteractionParameters {
  layerListContainer: HTMLElement;
  legendContainer: HTMLElement;
  measure: Measure;
  widgetPanel: any;
  view: esri.MapView | esri.SceneView;
}

export function interactions({
  layerListContainer,
  legendContainer,
  measure,
  widgetPanel,
  view
}: InteractionParameters) {
  // toggle widgets
  const actions = Array.from(document.querySelectorAll('calcite-action'));
  for (const action of actions) {
    action.addEventListener('click', () => {
      if ((action as any).text != 'Measure') {
        measure.disable();
      } else {
        measure.enable();
      }
      if ((action as any).text === 'Layers') {
        layerListContainer.classList.toggle('hidden');
        legendContainer.classList.add('hidden');
        measure?.container?.classList.add('hidden');
      } else if ((action as any).text === 'Legend') {
        layerListContainer.classList.add('hidden');
        legendContainer.classList.toggle('hidden');
        measure?.container?.classList.add('hidden');
      } else if ((action as any).text === 'Measure') {
        layerListContainer.classList.add('hidden');
        legendContainer.classList.add('hidden');
        measure?.container?.classList.toggle('hidden');
      }
      widgetPanel.collapsed =
        layerListContainer.classList.contains('hidden') &&
        legendContainer.classList.contains('hidden') &&
        measure?.container?.classList.contains('hidden');
    });
  }

  // listen for widget panel to be to be resized
  const rObserver = new ResizeObserver(() => {
    view.padding = {
      ...view.padding,
      left: widgetPanel.offsetWidth
    };
  });

  rObserver.observe(widgetPanel);
  return rObserver;
}
