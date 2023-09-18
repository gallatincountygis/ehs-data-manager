// styles
import './css/main.css';
// Map data
import { map, display } from './data/app';
import { wTSLayer } from './data/layers';
// MapView
import SceneView from 'esri/views/SceneView';
import MapView from 'esri/views/MapView';
import Viewpoint from 'esri/Viewpoint';
import watchUtils from 'esri/core/watchUtils';
// widget utils
import { initWidgets, editor } from './widgets';
import { popupSort, editThis } from './popup';
// interactions
import { interactions } from './interactions';
import { drawRegulatoryBuffer, clearRegulatoryBuffer } from './regulatory-buffer';
import esri = __esri;
import { Point } from 'esri/geometry';
import { getPermit } from './tyler';
import IdentityManager from 'esri/identity/IdentityManager';
import OAuthInfo from 'esri/identity/OAuthInfo';
/**
 * Initialize application
 */
const info = new OAuthInfo({
  appId: 'P9589LByKLuOWflM',
  // Uncomment the next line and update if using your own portal
  // portalUrl: "https://<host>:<port>/arcgis",
  // Uncomment the next line to prevent the user's signed in state from being shared
  // with other apps on the same domain with the same authNamespace value.
  //authNamespace: "portal_oauth_inline",
  popup: false
});

IdentityManager.registerOAuthInfos([info]);
//IdentityManager.checkSignInStatus(info.portalUrl + '/sharing');

const viewpoint = new Viewpoint({
  scale: 50000,
  targetGeometry: new Point({
    spatialReference: {
      wkid: 102100
    },
    x: -12377880,
    y: 5736061
  })
});

const sceneView = new SceneView({
  container: 'sceneViewDiv',
  map,
  viewpoint,
  popup: { defaultPopupTemplateEnabled: true, spinnerEnabled: false },
  qualityProfile: 'high'
});

const mapView = new MapView({
  container: 'mapViewDiv',
  viewpoint,
  popup: { defaultPopupTemplateEnabled: true, spinnerEnabled: false },
  map
});

const initView = display === '2D' ? mapView : sceneView;
initView.container.classList.remove('hidden');

export const viewConfig = {
  sceneView,
  mapView
};

wTSLayer.when(() => {
  //initView.goTo({ target: wTSLayer.fullExtent as esri.Extent, heading: 0 });
});

initView
  .when()
  .then(() => initWidgets(sceneView, mapView))
  .then(interactions);

for (const key in viewConfig) {
  viewConfig[key].when().then(() => {
    viewConfig[key].popup.watch('visible', () => {
      if (editor.arcGISEditor?.viewModel?.state === 'editing-existing-feature') {
        viewConfig[key].popup.close();
      }
    });
    watchUtils.watch(viewConfig[key].popup, 'featureCount', () => {
      popupSort(viewConfig[key]);
    });
    viewConfig[key].popup.viewModel.on('trigger-action', function(e: esri.PopupTriggerActionEvent) {
      if (e.action.id === 'get-permit') {
        const w = window.open('', '_blank');
        getPermit(e, w);
      } else if (e.action.id === 'edit-this') {
        editThis(viewConfig[key]);
      }
    });
  });
  watchUtils.watch(viewConfig[key].popup, ['selectedFeature', 'visible'], () => {
    if (!viewConfig[key].popup.visible) {
      clearRegulatoryBuffer(viewConfig[key]);
    } else if (
      !editor?.arcGISEditor?.viewModel?.activeWorkflow &&
      viewConfig[key].popup?.selectedFeature?.layer === wTSLayer
    ) {
      drawRegulatoryBuffer(viewConfig[key].popup?.selectedFeature, viewConfig[key]);
    } else {
      clearRegulatoryBuffer(viewConfig[key]);
    }
  });
}
