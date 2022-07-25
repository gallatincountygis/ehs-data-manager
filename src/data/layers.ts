import FeatureLayer from 'esri/layers/FeatureLayer';
import AttachmentsContent from 'esri/popup/content/AttachmentsContent';
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
      },
      new AttachmentsContent({
        displayType: 'list'
      })
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

export const waterSupplySystemLayer = new FeatureLayer({
  portalItem: {
    id: '940b0c5b4fa64f44ab23f3bf19396e75'
  },
  outFields: ['*'],
  title: 'Water Supply Systems',
  id: 'wss',
  displayField: 'GW_MONITOR'
});

waterSupplySystemLayer.when(() => {
  const wSSFieldConfig = waterSupplySystemLayer.fields
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
  addLayerInfos(waterSupplySystemLayer, wSSFieldConfig);
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
  editor?.layerInfos.push({
    layer: notesLayer,
    fieldConfig: notesLayerFieldConfig
  });
});

export const areasOfConcernLayer = new FeatureLayer({
  portalItem: {
    id: 'e227951905de4252af848e182af8e39a'
  }
});

areasOfConcernLayer.when(() => {
  const areasOfConcernFieldConfig = areasOfConcernLayer.fields
    .filter(f => {
      return ['PROPDESC', 'NOTES'].indexOf(f.name) >= 0;
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
  editor?.layerInfos.push({
    layer: areasOfConcernLayer,
    fieldConfig: areasOfConcernFieldConfig
  });
});

export const septageLandApplicationSites = new FeatureLayer({
  portalItem: {
    id: '11e9b60f11df40e5bd00841d001be3ab'
  },
  id: 'septageSites',
  visible: false
});

septageLandApplicationSites.when(() => {
  const septageLandApplicationSitesFieldConfig = septageLandApplicationSites.fields
    .filter(f => {
      return f.name !== 'OBJECTID' && !f.name.startsWith('Shape_');
    })
    .map((f: esri.Field) => {
      return {
        description: f.description,
        domain: f.domain,
        editable: f.editable,
        name: f.name,
        maxLength: f.length,
        label: f.alias
      };
    }) as esri.FieldConfig[];
  editor?.layerInfos.push({
    layer: septageLandApplicationSites,
    fieldConfig: septageLandApplicationSitesFieldConfig
  });
});

export const hydraulicGradient = new FeatureLayer({
  portalItem: {
    id: '74b93b8d191d4895b1e79a01a8fa46a4'
  },
  id: 'hydraulicGradient',
  visible: false
});

hydraulicGradient.when(() => {
  const hydraulicGradientFieldConfig = hydraulicGradient.fields
    .filter(f => {
      return f.name !== 'OBJECTID';
    })
    .map((f: esri.Field) => {
      const editorType = f.name === 'NOTES' ? 'text-area' : 'text-box';
      return {
        description: f.description,
        domain: f.domain,
        editable: f.editable,
        name: f.name,
        maxLength: f.length,
        label: f.alias,
        editorType
      };
    }) as esri.FieldConfig[];
  editor?.layerInfos.push({
    layer: hydraulicGradient,
    fieldConfig: hydraulicGradientFieldConfig
  });
});

export const hydraulicConductivity = new FeatureLayer({
  portalItem: {
    id: '7be2de4e0590402e9e53c522e25e67dc'
  },
  id: 'hydraulicConductivity',
  visible: false
});

hydraulicConductivity.when(() => {
  const hydraulicConductivityFieldConfig = hydraulicConductivity.fields
    .filter(f => {
      return f.name !== 'OBJECTID';
    })
    .map((f: esri.Field) => {
      const editorType = f.name === 'NOTES' ? 'text-area' : 'text-box';
      return {
        description: f.description,
        domain: f.domain,
        editable: f.editable,
        name: f.name,
        maxLength: f.length,
        label: f.alias,
        editorType
      };
    }) as esri.FieldConfig[];
  editor?.layerInfos.push({
    layer: hydraulicConductivity,
    fieldConfig: hydraulicConductivityFieldConfig
  });
});

let symbol = {
  type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
  style: "circle",
  color: "black",
  size: "6px",  // pixels
};

let symbol1 = {
  type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
  style: "circle",
  color: "red",
  size: "6px",  // pixels
};

let symbol2 = {
  type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
  style: "circle",
  color: "green",
  size: "6px",  // pixels
};

let symbol3 = {
  type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
  style: "circle",
  color: "yellow",
  size: "6px",  // pixels
};

let symbol4 = {
  type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
  style: "circle",
  color: "blue",
  size: "6px",  // pixels
};

let cosaRenderer = {
  type: "unique-value",
  field: "COSAstatus",
  defaultSymbol: symbol,
  uniqueValueInfos: [{
      value: "Completed - succeeded",
      symbol: symbol2
  },{
      value: "Active",
      symbol: symbol4
  }, {
      value: "Pending",
      symbol: symbol3
  }, {
      value: "Completed - failed",
      symbol: symbol1
  }]
};

export const cosaReviewLayer = new FeatureLayer({
  url: 'https://services8.arcgis.com/VY7LGmlsl8pbHxE5/arcgis/rest/services/COSA_review_status/FeatureServer',
  outFields: ['*'],
  title: 'COSA Review Status',
  renderer: cosaRenderer
  }
})

export const artificialDrains = new FeatureLayer({
  portalItem: {
    id: '7c8d12ed87244151b0501af48ae4da4f'
  },
  id: 'artificialDrain',
  visible: false
});

artificialDrains.when(() => {
  const artificialDrainsFieldConfig = artificialDrains.fields
    .filter(f => {
      return f.name !== 'OBJECTID';
    })
    .map((f: esri.Field) => {
      const editorType = f.name === 'NOTES' ? 'text-area' : 'text-box';
      return {
        description: f.description,
        domain: f.domain,
        editable: f.editable,
        name: f.name,
        maxLength: f.length,
        label: f.alias,
        editorType
      };
    }) as esri.FieldConfig[];
  editor?.layerInfos.push({
    layer: artificialDrains,
    fieldConfig: artificialDrainsFieldConfig
  });
});

function addLayerInfos(layer: esri.FeatureLayer, fieldConfig: esri.FieldConfig[]) {
  editor?.layerInfos.push({
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
