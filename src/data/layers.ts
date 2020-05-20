import FeatureLayer from 'esri/layers/FeatureLayer';
import { editor } from '../widgets';
import esri = __esri;

export const wTSLayer = new FeatureLayer({
  portalItem: {
    id: '49e1606446f34f93807b1fc437be53c9'
  },
  outFields: ['*'],
  title: 'Wastewater Treatment Systems',
  id: 'wwtp',
  displayField: 'GCCHDWWTP',
  opacity: 0.8
});

wTSLayer.when(() => {
  if (wTSLayer.types[0].templates[0].prototype.attributes) {
    wTSLayer.types[0].templates[0].prototype.attributes.SYSTEMTYPE = 'INDIV';
    wTSLayer.types[0].templates[0].prototype.attributes.UPDATED = new Date();
  }
  const wTSFieldConfig = wTSLayer.fields
    .filter(f => {
      return f.name != 'FID';
    })
    .map(f => {
      const fc = {
        description: f.description,
        domain: f.domain as esri.CodedValueDomain | esri.RangeDomain,
        editable: f.editable,
        name: f.name,
        maxLength: f.length,
        label: f.alias
      } as esri.FieldConfig;
      return fc;
    }) as esri.FieldConfig[];
  editor
    ? addLayerInfos(wTSLayer, wTSFieldConfig)
    : editor.on('ready', () => {
        addLayerInfos(wTSLayer, wTSFieldConfig);
      });
});

export const gwMLayer = new FeatureLayer({
  portalItem: {
    id: '1f9fddd5d5b04d86bc2e3166004ead93'
  },
  renderer: {
    type: 'simple',
    symbol: {
      type: 'simple-marker',
      style: 'triangle',
      outline: { width: 1.25, color: [2, 120, 240, 1] },
      angle: 60,
      color: [5, 207, 255, 0.8]
    }
  },
  outFields: ['*'],
  title: 'Groundwater Monitoring Wells',
  id: 'gwm',
  displayField: 'GW_MONITOR',
  opacity: 0.8
});

gwMLayer.when(() => {
  const gwMFieldConfig = gwMLayer.fields
    .filter((f: esri.Field) => {
      return f.name !== 'FID';
    })
    .map((f: esri.Field) => {
      const fc = {
        description: f.description,
        domain: f.domain,
        editable: f.editable,
        name: f.name,
        maxLength: f.length,
        label: f.alias
      } as esri.FieldConfig;
      return fc;
    }) as esri.FieldConfig[];
  editor
    ? addLayerInfos(gwMLayer, gwMFieldConfig)
    : editor.on('ready', () => {
        addLayerInfos(gwMLayer, gwMFieldConfig);
      });
});

function addLayerInfos(layer: esri.FeatureLayer, fieldConfig: esri.FieldConfig[]) {
  editor.layerInfos.push({
    layer,
    fieldConfig
  });
}
