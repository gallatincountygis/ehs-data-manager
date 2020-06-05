import FeatureLayer from 'esri/layers/FeatureLayer';
import { addPopupsToMapImageLayer } from '../popup';
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
  opacity: 0.8,
  popupTemplate: {
    title: 'Permit Number: {GCCHDWWTP}',
    actions: [
      {
        title: 'Get permit',
        id: 'get-permit',
        className: 'esri-icon-documentation'
      },
      {
        title: 'Edit feature',
        id: 'edit-this',
        className: 'esri-icon-edit'
      }
    ] as esri.ActionButton[],
    content: [
      {
        type: 'fields',
        fieldInfos: []
      }
    ]
  }
});

wTSLayer.when(() => {
  if (wTSLayer.types[0].templates[0].prototype.attributes) {
    wTSLayer.types[0].templates[0].prototype.attributes.SYSTEMTYPE = 'INDIV';
    wTSLayer.types[0].templates[0].prototype.attributes.GPS = 'N';
    wTSLayer.types[0].templates[0].prototype.attributes.UPDATED = new Date();
  }
  //wTSLayer.popupTemplate.content[0].fieldInfos = wTSLayer.fields.map((f: esri.Field) => {});
  const wTSFieldConfig = wTSLayer.fields
    .filter((f: esri.Field) => {
      return f.name != 'FID';
    })
    .map((f: esri.Field) => {
      wTSLayer.popupTemplate.content[0].fieldInfos.push({
        fieldName: f.name,
        label: f.alias
      });
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
  addLayerInfos(wTSLayer, wTSFieldConfig);
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
  } as esri.SimpleRendererProperties,
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
  addLayerInfos(gwMLayer, gwMFieldConfig);
});

export const notesLayer = new FeatureLayer({
  portalItem: {
    id: '9d8ecc343fad4ffdb5c094647f78690e'
  }
});

notesLayer.when(() => {
  const notesLayerFieldConfig = notesLayer.fields
    .filter(f => {
      return f.name === 'Notes';
    })
    .map((f: esri.Field) => {
      return {
        description: f.description,
        domain: f.domain,
        editable: f.editable,
        name: f.name,
        maxLength: f.length,
        label: f.alias,
        editorType: 'text-area'
      };
    }) as esri.FieldConfig[];
  editor.layerInfos.push({
    layer: notesLayer,
    fieldConfig: notesLayerFieldConfig
  });
});

function addLayerInfos(layer: esri.FeatureLayer, fieldConfig: esri.FieldConfig[]) {
  editor.layerInfos.push({
    layer,
    fieldConfig
  });
}

export function walkDownLayers(layers: esri.Collection<esri.Layer>) {
  layers.forEach(l => {
    if (l.type === 'map-image') {
      l.when().then(() => {
        addPopupsToMapImageLayer(l as esri.MapImageLayer);
      });
    }
    if (l.layers) {
      walkDownLayers(l.layers);
    }
  });
}