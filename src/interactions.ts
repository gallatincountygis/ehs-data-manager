import ResizeObserver from 'resize-observer-polyfill';
import esri = __esri;

interface InteractionParameters {
  layerListContainer: HTMLElement;
  legendContainer: HTMLElement;
  measureContainer: HTMLElement;
  widgetPanel: any;
  view: esri.MapView | esri.SceneView;
}

export function interactions({
  layerListContainer,
  legendContainer,
  measureContainer,
  widgetPanel,
  view
}: InteractionParameters) {
  // toggle widgets
  const actions = Array.from(document.querySelectorAll('calcite-action'));
  for (const action of actions) {
    action.addEventListener('click', () => {
      if ((action as any).text === 'Layers') {
        layerListContainer.classList.toggle('hidden');
        legendContainer.classList.add('hidden');
        measureContainer.classList.add('hidden');
      } else if ((action as any).text === 'Legend') {
        layerListContainer.classList.add('hidden');
        legendContainer.classList.toggle('hidden');
        measureContainer.classList.add('hidden');
      } else if ((action as any).text === 'Measure') {
        layerListContainer.classList.add('hidden');
        legendContainer.classList.add('hidden');
        measureContainer.classList.toggle('hidden');
      }
      widgetPanel.collapsed =
        layerListContainer.classList.contains('hidden') &&
        legendContainer.classList.contains('hidden') &&
        measureContainer.classList.contains('hidden');
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
