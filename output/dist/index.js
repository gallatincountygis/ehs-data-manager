define(["exports","esri/layers/FeatureLayer","esri/layers/MapImageLayer","esri/Map","esri/layers/GroupLayer","esri/layers/ElevationLayer","esri/widgets/LayerList","esri/widgets/Legend","esri/widgets/Compass","esri/core/accessorSupport/decorators","esri/widgets/support/widget","esri/widgets/Measurement","esri/widgets/Widget","esri/Basemap","esri/widgets/BasemapGallery/support/LocalBasemapsSource","esri/layers/ImageryLayer","esri/widgets/BasemapGallery","esri/Ground","esri/widgets/Editor","esri/widgets/Search","esri/widgets/Search/LayerSearchSource","esri/views/SceneView","esri/views/MapView","esri/Viewpoint","esri/core/watchUtils","esri/Graphic","esri/geometry/geometryEngine","esri/geometry"],(function(e,t,i,r,a,n,o,s,l,c,d,p,u,h,v,f,y,g,m,w,b,_,O,S,E,M,T,I){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,s=s&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s,l=l&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l,p=p&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p,u=u&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u,h=h&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h,v=v&&Object.prototype.hasOwnProperty.call(v,"default")?v.default:v,f=f&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f,y=y&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y,g=g&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g,m=m&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m,w=w&&Object.prototype.hasOwnProperty.call(w,"default")?w.default:w,b=b&&Object.prototype.hasOwnProperty.call(b,"default")?b.default:b,_=_&&Object.prototype.hasOwnProperty.call(_,"default")?_.default:_,O=O&&Object.prototype.hasOwnProperty.call(O,"default")?O.default:O,S=S&&Object.prototype.hasOwnProperty.call(S,"default")?S.default:S,E=E&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E,M=M&&Object.prototype.hasOwnProperty.call(M,"default")?M.default:M,T=T&&Object.prototype.hasOwnProperty.call(T,"default")?T.default:T;
/*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
var A=function(e,t){return(A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};function V(e,t){function i(){this.constructor=e}A(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}var P=function(){return(P=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function D(e,t,i,r){var a,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(n<3?a(o):n>3?a(t,i,o):a(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o}function L(e,t,i,r){return new(i||(i=Promise))((function(a,n){function o(e){try{l(r.next(e))}catch(e){n(e)}}function s(e){try{l(r.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,s)}l((r=r.apply(e,t||[])).next())}))}function N(e,t){var i,r,a,n,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return n={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function s(n){return function(s){return function(n){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,r&&(a=2&n[0]?r.return:n[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,n[1])).done)return a;switch(r=0,a&&(n=[2&n[0],a.value]),n[0]){case 0:case 1:a=n;break;case 4:return o.label++,{value:n[1],done:!1};case 5:o.label++,r=n[1],n=[0];continue;case 7:n=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==n[0]&&2!==n[0])){o=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){o.label=n[1];break}if(6===n[0]&&o.label<a[1]){o.label=a[1],a=n;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(n);break}a[2]&&o.ops.pop(),o.trys.pop();continue}n=t.call(e,o)}catch(e){n=[6,e],r=0}finally{i=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,s])}}}var B,W=function(e){function t(t){return e.call(this)||this}return V(t,e),t.prototype.disable=function(){this.clear(),this.activeTool=null},t.prototype.enable=function(){var e=this;this.activeTool="2d"==this.view.type?"distance":"direct-line",this.stateWatch||(this.stateWatch=this.watch("viewModel.state",(function(t){switch(t){case"measured":e.addNodes()}console.log("Current state: ",t)}))),console.log(this)},t.prototype.viewToggle=function(e){this.clear(),this.view=e,this.container.classList.contains("hidden")||(this.activeTool="2d"==e.type?"distance":"direct-line")},t.prototype.addNodes=function(){var e,t;null===(e=this.gradientNode)||void 0===e||e.remove(),this.gradientNode=null,null===(t=this.bearingNode)||void 0===t||t.remove(),this.bearingNode=null,this.addHydraulicGradientNodes(),this.addBearingNode()},t.prototype.addHydraulicGradientNodes=function(){var e,t,i;if(this.container&&(this.renderNow(),"direct-line"==this.activeTool)){var r=(null==this?void 0:this.container).querySelectorAll("section")[1];if(this.gradientNode=null===(e=null==r?void 0:r.lastElementChild)||void 0===e?void 0:e.cloneNode(!0),(null===(t=null==this?void 0:this.gradientNode)||void 0===t?void 0:t.firstElementChild)&&(null===(i=null==this?void 0:this.gradientNode)||void 0===i?void 0:i.lastElementChild)){this.gradientNode.firstElementChild.innerText="Hydraulic Gradient";var a=(this.viewModel.activeViewModel.tool.verticalDistance.value/this.viewModel.activeViewModel.tool.horizontalDistance.value/3).toFixed(4);this.gradientNode.lastElementChild.innerText=a}r.appendChild(this.gradientNode)}},t.prototype.addBearingNode=function(){var e,t,i,r,a,n,o,s;if("distance"===this.activeTool){var l=null===(e=this.viewModel.activeViewModel.measurement)||void 0===e?void 0:e.geometry;s=null==l?void 0:l.paths[l.paths.length-1].slice(l.paths[l.paths.length-1].length-2)}else if("direct-line"===this.activeTool){var c=null===(r=null===(i=(null===(t=this.viewModel)||void 0===t?void 0:t.activeViewModel).tool)||void 0===i?void 0:i.model)||void 0===r?void 0:r.startPoint,d=null===(o=null===(n=(null===(a=this.viewModel)||void 0===a?void 0:a.activeViewModel).tool)||void 0===n?void 0:n.model)||void 0===o?void 0:o.endPoint;s=[[c.x,c.y],[d.x,d.y]]}var p=(null==this?void 0:this.container).querySelectorAll("section")[1];this.bearingNode=p.firstElementChild.cloneNode(!0),this.bearingNode.firstElementChild.innerText="Bearing",this.bearingNode.lastElementChild.innerText=this.computeAngle(s),p.appendChild(this.bearingNode)},t.prototype.computeAngle=function(e){var t=e[0],i=e[1],r=parseFloat((180*Math.atan2(i[1]-t[1],i[0]-t[0])/Math.PI).toFixed(1));return r<0&&(r+=360),0==r?"E":r>0&&r<=90?"N "+(90!=r?(90-r).toFixed(1)+"° E":""):r>90&&r<180?"N "+Math.abs(90-r).toFixed(1)+"° W":180==r?"W":r>180&&r<=270?"S "+(180!=r?(270-r).toFixed(1)+"° W":""):r>270?"S "+(360-r!=270?(r-270).toFixed(1):"")+"° E":"Something is wrong"},D([c.property(),d.renderable()],t.prototype,"gradientNode",void 0),D([c.property(),d.renderable()],t.prototype,"bearingNode",void 0),D([c.property(),d.renderable()],t.prototype,"loadingSpan",void 0),D([c.property()],t.prototype,"stateWatch",void 0),t=D([c.subclass("esri.widgets.Measure")],t)}(c.declared(p)),x=function(e){function t(t){var i=e.call(this)||this;return i.customBasemaps=[{title:"Street Map",id:"streetMap",layers:[{type:"map-image",params:{url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/HillshadeBasemap/MapServer"}}]},{title:"2017 Aerial",id:"stateNAIP201710",layers:[{type:"imagery",params:{url:"http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2017/ImageServer",noData:0}}]},{title:"Hi-Res (date varies)",id:"esriImagery",layers:[{type:"map-image",params:{url:"http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"}}]},{title:"2015 Aerial",id:"naip2015",layers:[{type:"imagery",params:{url:"http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2015/ImageServer"}}]},{title:"2013 Aerial",id:"naip2013",layers:[{type:"imagery",params:{url:"http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2013/ImageServer"}}]},{title:"2012 Bozeman Aerial",id:"bozeman2012",layers:[{type:"map-image",params:{url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",sublayers:[{id:0}]}}]},{title:"2011 Aerial",id:"naip2011",layers:[{type:"imagery",params:{url:"http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2011/ImageServer"}}]},{title:"2011 Color Infrared",id:"cir2011",layers:[{type:"map-image",params:{url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",sublayers:[{id:1}]}}]},{title:"2009 Aerial",id:"naip2009",layers:[{type:"imagery",params:{url:"http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2009/ImageServer"}}]},{title:"2009 Color Infrared",id:"cir2009",layers:[{type:"map-image",params:{url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",sublayers:[{id:2}]}}]},{title:"2007 Bozeman Aerial",id:"bozeman2007",layers:[{type:"map-image",params:{url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",sublayers:[{id:3}]}}]},{title:"2005 Aerial",id:"naip2005",layers:[{type:"imagery",params:{url:"http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2005/ImageServer"}}]},{title:"2005 Color Infrared",id:"cir2005",layers:[{type:"map-image",params:{url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",sublayers:[{id:4}]}}]},{title:"2004 WYS Aerial",id:"wys2004",layers:[{type:"map-image",params:{url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",title:"piss",sublayers:[{id:5}]}}]},{title:"2004 Bozeman Aerial",id:"bozeman2004",layers:[{type:"map-image",params:{url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",sublayers:[{id:6}]}}]},{title:"2003 Big Sky Aerial",id:"bigsky2003",layers:[{type:"map-image",params:{id:"fuck",title:"shit",url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",sublayers:[{id:7}]}}]},{title:"2001 Color Infrared",id:"cir2001",layers:[{type:"map-image",params:{url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",sublayers:[{id:8}]}}]},{title:"1990s Aerial",id:"doqq1990s",layers:[{type:"imagery",params:{url:"http://gisservicemt.gov/arcgis/rest/services/MSL/DOQQ_1990s/ImageServer"}}]},{title:"State Topo",id:"mtTopo",layers:[{type:"map-image",params:{url:"https://gisservicemt.gov/arcgis/rest/services/MSL/HistoricTopo/MapServer"}}]},{title:"County Topo",id:"gcTopo",layers:[{type:"map-image",params:{url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",sublayers:[{id:9}]}}]}],"3d"==(null==t?void 0:t.initView.type)?(i.sceneView=t.initView,i.mapView=t.otherView):(i.sceneView=null==t?void 0:t.otherView,i.mapView=null==t?void 0:t.initView),i.container=t.container,i.gallery=new y({view:null==t?void 0:t.initView}),i}return V(t,e),t.prototype.render=function(){return this.gallery.render()},t.prototype.viewToggle=function(e){var t,i,r=this.gallery.activeBasemap.toJSON();r.baseLayers=r.baseMapLayers,this.gallery.view=e,null===(t=this.gallery.activeBasemap)||void 0===t||t.destroy(),null===(i=this.gallery.view.basemapView)||void 0===i||i.destroy()},t.prototype.addCustomBasemaps=function(){var e=[];return this.customBasemaps.forEach((function(t){var r,a=[];null===(r=t.layers)||void 0===r||r.forEach((function(e){var r;switch(e.type){case"imagery":r=new f(e.params);break;case"map-image":r=new i(e.params);break;default:console.log("fuck"),console.log(t)}r&&a.push(r)})),a&&e.push(new h({baseLayers:a,id:t.id,title:t.title}))})),new v({basemaps:e})},D([c.property()],t.prototype,"customBasemaps",void 0),D([c.property()],t.prototype,"container",void 0),t=D([c.subclass("esri.widgets.BasemapGallery")],t)}(c.declared(u)),C="view-toggle esri-component esri-widget--button esri-widget esri-interactive",j=function(e){function t(t){var i=e.call(this)||this;return i.ground=new g({layers:[te]}),"3d"==(null==t?void 0:t.initView.type)?(i.sceneView=t.initView,i.mapView=t.otherView,i.state="2D"):(i.sceneView=null==t?void 0:t.otherView,i.mapView=null==t?void 0:t.initView,i.state="3D"),i.activeView=null==t?void 0:t.initView,i}return V(t,e),t.prototype.render=function(){return d.tsx("div",{bind:this,class:C,role:"button",type:"button",id:"switch-btn",value:this.state,onclick:this.toggle},d.tsx("span",{id:"button_label"},this.state))},t.prototype.switchView=function(e){var t,i,r=this.activeView.viewpoint.clone();for(var a in this.widgets)if(this.widgets[a].viewToggle)null===(i=(t=this.widgets[a]).viewToggle)||void 0===i||i.call(t,e);else{if("editor"==a)continue;this.widgets[a].view=e}this.activeView.container.classList.toggle("hidden"),e.container.classList.remove("hidden"),e.ui.add(this,"top-left"),this.activeView=e,e.viewpoint=r},t.prototype.toggle=function(){var e="3D"===this.state?"2D":"3D";this.set("state",e),this.switchView("2D"==e?this.sceneView:this.mapView)},D([c.property()],t.prototype,"widgets",void 0),D([c.property()],t.prototype,"activeView",void 0),D([c.property(),d.renderable()],t.prototype,"state",void 0),t=D([c.subclass("esri.widgets.ViewToggle")],t)}(c.declared(u)),F=function(e){function t(t){var i=e.call(this)||this;return i.fireReady(),i}return V(t,e),t.prototype.fireReady=function(){this.emit("ready",this)},t.prototype.viewToggle=function(e){this.view=e.hasOwnProperty("camera")?null:e},D([c.property()],t.prototype,"container",void 0),t=D([c.subclass("esri.widgets.Editor")],t)}(c.declared(m)),G=function(e){function t(t){var i=e.call(this)||this;return i.addWWTSLayer(),i.on("select-result",(function(e){this.view.goTo({zoom:18})})),i}return V(t,e),t.prototype.addWWTSLayer=function(){this.sources.add(new b({layer:H,searchFields:["GCCHDWWTP"],displayField:"GCCHDWWTP",exactMatch:!0,name:"Permit Number",placeholder:"enter a permit number",zoomScale:1e3}))},t.prototype.viewToggle=function(e){this.view=e,this.view.ui.add(this,{position:"top-left",index:0})},D([c.property()],t.prototype,"sceneView",void 0),D([c.property()],t.prototype,"container",void 0),t=D([c.subclass("esri.widgets.BasemapGallery")],t)}(c.declared(w));var H=new t({portalItem:{id:"49e1606446f34f93807b1fc437be53c9"},outFields:["*"],title:"Wastewater Treatment Systems",id:"wwtp",displayField:"GCCHDWWTP",opacity:.8});H.when((function(){H.types[0].templates[0].prototype.attributes&&(H.types[0].templates[0].prototype.attributes.SYSTEMTYPE="INDIV",H.types[0].templates[0].prototype.attributes.GPS="N",H.types[0].templates[0].prototype.attributes.UPDATED=new Date);var e=H.fields.filter((function(e){return"FID"!=e.name})).map((function(e){return{description:e.description,domain:e.domain,editable:e.editable,name:e.name,maxLength:e.length,label:e.alias}}));k(H,e)}));var R=new t({portalItem:{id:"1f9fddd5d5b04d86bc2e3166004ead93"},renderer:{type:"simple",symbol:{type:"simple-marker",style:"triangle",outline:{width:1.25,color:[2,120,240,1]},angle:60,color:[5,207,255,.8]}},outFields:["*"],title:"Groundwater Monitoring Wells",id:"gwm",displayField:"GW_MONITOR",opacity:.8});function k(e,t){B.layerInfos.push({layer:e,fieldConfig:t})}R.when((function(){var e=R.fields.filter((function(e){return"FID"!==e.name})).map((function(e){return{description:e.description,domain:e.domain,editable:e.editable,name:e.name,maxLength:e.length,label:e.alias}}));k(R,e)}));document.getElementById("version").innerText="v:1.2.1";var z=new t({portalItem:{id:"d88f46d2f52a4a6daa73ba10e605d761"},listMode:"hide",minScale:24001,legendEnabled:!1}),q=new a({layers:[new i({portalItem:{id:"9595acf80a45479890552f8d579bb763"},listMode:"hide"}),z],title:"Addresses",id:"addressLayers",visible:!0}),U=new i({url:"https://gis.gallatin.mt.gov/arcgis/rest/services/MapServices/EHS/MapServer",title:"Miscellaneous",visible:!1});U.when().then((function(){U.sublayers=U.sublayers.filter((function(e){return e.id>=2}))}));var Z=new t({url:"http://deqgis.mt.gov/arcgis/rest/services/Reference/Ground_Water/MapServer/0",outFields:["*"],title:"GWIC Water Wells",visible:!1,id:"gwic",popupTemplate:{title:"GWIC Well: {MNUMBER}",content:function(e){var t=e.graphic;return L(this,void 0,void 0,(function(){var e;return N(this,(function(i){return(e=document.createElement("div")).innerHTML="<hr><table><tr><td>Site Name:</td><td>"+t.attributes.SITE_NAME+"</td></tr><tr><td>Geomethod:</td><td>"+t.attributes.GEOMETHOD+"</td></tr> </table><a href='http://mbmggwic.mtech.edu/sqlserver/v11/reports/SiteSummary.asp?gwicid="+t.attributes.MNUMBER+"' target=_blank>View Well Log Report</a><br/>",[2,e]}))}))}}}),Y=new t({url:"http://deqgis.mt.gov/arcgis/rest/services/DEQ/DST/MapServer/2",outFields:["*"],title:"DST Response Sites",visible:!0,id:"dstResponseSites"}),Q=new a({layers:[new t({url:"http://deqgis.mt.gov/arcgis/rest/services/DEQ/DST/MapServer/9",outFields:["*"],title:"DST SWDAR Locations",visible:!0,id:"dstSWDARLocations"}),Y],title:"DEQ Layers",id:"deqLayers",visible:!1}),J=new i({url:"https://gisweb.bozeman.net/arcgis/rest/services/COB_Utilities/Wastewater_Utility/MapServer",title:"Bozeman Wastewater",id:"bznWastewater",visible:!0});J.when().then((function(){var e,t,i;(null===(t=null===(e=J.sublayers)||void 0===e?void 0:e.getItemAt(0))||void 0===t?void 0:t.sublayers)&&"Wastewater Collection System"===(null===(i=J.sublayers)||void 0===i?void 0:i.getItemAt(0).title)&&(J.sublayers=J.sublayers.getItemAt(0).sublayers)}));var K=new t({url:"http://gis.gallatin.mt.gov/arcgis/rest/services/MapServices/EHSBase/MapServer/11",outFields:["*"],title:"Water & Sewer Districts",visible:!0,id:"waterSewerDistricts"}),X=new a({title:"Public Systems",id:"publicWastewaterSystems",visible:!1,layers:[J,K]}),$=new i({title:"Flood Hazard Zones",url:"https://hazards.fema.gov/gis/nfhl/rest/services/public/NFHL/MapServer",id:"floodHazardZones",opacity:.5,visible:!1,sublayers:[{id:28,visible:!0,popupEnabled:!0,listMode:"hide",popupTemplate:{title:"Flood Hazard Zone",content:[{type:"fields",fieldInfos:[{fieldName:"VERSION_ID",label:"Version"},{fieldName:"FLD_ZONE",label:"Flood Zone"},{fieldName:"ZONE_SUBTY",label:"Zone Subtype"},{fieldName:"STUDY_TYP",label:"Study Type"},{fieldName:"DFIRM_ID",label:"DFIRM ID"}]}]}}]}),ee=new t({portalItem:{id:"adb80ad0ba814391a68dd52b8bf27ada"},id:"parcels"}),te=new n({url:"https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",id:"ground"}),ie=new r({basemap:"satellite",ground:{layers:[te]},layers:[ee,$,X,U,Q,Z,R,H,q]}),re=function(e){e.forEach((function(e){"map-image"===e.type&&e.when().then((function(){!function e(t){var i;null===(i=null==t?void 0:t.sublayers)||void 0===i||i.forEach((function(t){t.sublayers?e(t):function(e){e.popupTemplate||e.createFeatureLayer().then((function(e){return e.load()})).then((function(t){e.popupTemplate=t.createPopupTemplate()}))}(t)}))}(e)})),e.layers&&re(e.layers)}))};re(ie.layers);var ae=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var i=-1;return e.some((function(e,r){return e[0]===t&&(i=r,!0)})),i}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var i=e(this.__entries__,t),r=this.__entries__[i];return r&&r[1]},t.prototype.set=function(t,i){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=i:this.__entries__.push([t,i])},t.prototype.delete=function(t){var i=this.__entries__,r=e(i,t);~r&&i.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var i=0,r=this.__entries__;i<r.length;i++){var a=r[i];e.call(t,a[1],a[0])}},t}()}(),ne="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,oe="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),se="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(oe):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var le=["top","right","bottom","left","width","height","size","weight"],ce="undefined"!=typeof MutationObserver,de=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var i=!1,r=!1,a=0;function n(){i&&(i=!1,e()),r&&s()}function o(){se(n)}function s(){var e=Date.now();if(i){if(e-a<2)return;r=!0}else i=!0,r=!1,setTimeout(o,t);a=e}return s}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,i=t.indexOf(e);~i&&t.splice(i,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){ne&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),ce?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){ne&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,i=void 0===t?"":t;le.some((function(e){return!!~i.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),pe=function(e,t){for(var i=0,r=Object.keys(t);i<r.length;i++){var a=r[i];Object.defineProperty(e,a,{value:t[a],enumerable:!1,writable:!1,configurable:!0})}return e},ue=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||oe},he=we(0,0,0,0);function ve(e){return parseFloat(e)||0}function fe(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return t.reduce((function(t,i){return t+ve(e["border-"+i+"-width"])}),0)}function ye(e){var t=e.clientWidth,i=e.clientHeight;if(!t&&!i)return he;var r=ue(e).getComputedStyle(e),a=function(e){for(var t={},i=0,r=["top","right","bottom","left"];i<r.length;i++){var a=r[i],n=e["padding-"+a];t[a]=ve(n)}return t}(r),n=a.left+a.right,o=a.top+a.bottom,s=ve(r.width),l=ve(r.height);if("border-box"===r.boxSizing&&(Math.round(s+n)!==t&&(s-=fe(r,"left","right")+n),Math.round(l+o)!==i&&(l-=fe(r,"top","bottom")+o)),!function(e){return e===ue(e).document.documentElement}(e)){var c=Math.round(s+n)-t,d=Math.round(l+o)-i;1!==Math.abs(c)&&(s-=c),1!==Math.abs(d)&&(l-=d)}return we(a.left,a.top,s,l)}var ge="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof ue(e).SVGGraphicsElement}:function(e){return e instanceof ue(e).SVGElement&&"function"==typeof e.getBBox};function me(e){return ne?ge(e)?function(e){var t=e.getBBox();return we(0,0,t.width,t.height)}(e):ye(e):he}function we(e,t,i,r){return{x:e,y:t,width:i,height:r}}var be=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=we(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=me(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),_e=function(e,t){var i,r,a,n,o,s,l,c=(r=(i=t).x,a=i.y,n=i.width,o=i.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,l=Object.create(s.prototype),pe(l,{x:r,y:a,width:n,height:o,top:a,right:r+n,bottom:o+a,left:r}),l);pe(this,{target:e,contentRect:c})},Oe=function(){function e(e,t,i){if(this.activeObservations_=[],this.observations_=new ae,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=i}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof ue(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new be(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof ue(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new _e(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Se="undefined"!=typeof WeakMap?new WeakMap:new ae,Ee=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=de.getInstance(),r=new Oe(t,i,this);Se.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){Ee.prototype[e]=function(){var t;return(t=Se.get(this))[e].apply(t,arguments)}}));var Me,Te=void 0!==oe.ResizeObserver?oe.ResizeObserver:Ee;var Ie=new S({scale:288895,targetGeometry:new I.Point({spatialReference:{wkid:102100},x:-12377880,y:5736061})}),Ae=new _({container:"sceneViewDiv",map:ie,viewpoint:Ie,popup:{defaultPopupTemplateEnabled:!0},qualityProfile:"high"}),Ve=new O({container:"mapViewDiv",viewpoint:Ie,popup:{defaultPopupTemplateEnabled:!0},map:ie}),Pe=Ve;Pe.container.classList.remove("hidden");var De={sceneView:Ae,mapView:Ve};H.when((function(){})),Pe.when().then((function(){return function(e,t){var i,r;r=e;var a=new s({view:i=t}),n=new o({view:i}),c=new W({view:i,linearUnit:"feet"}),d=document.getElementById("widget-basemap-gallery"),p=new x({initView:i,otherView:r,container:d}),u=new l({view:t});t.ui.add(u,"top-left");var h=new G({view:i,otherView:r});i.ui.add(h,{position:"top-left",index:0}),B=new F({view:t,layerInfos:[],container:document.getElementById("widget-editor")});var v=new j({initView:i,otherView:r,widgets:{layerList:n,legend:a,measure:c,basemapGallery:p,editor:B,search:h}});i.ui.add(v,"top-left");var f=document.getElementById("widget-legend"),y=document.getElementById("widget-layerlist"),g=document.getElementById("widget-measure"),m=document.getElementById("widget-panel");return m&&(e.padding=t.padding=P(P({},e.padding),{left:m.offsetWidth})),f&&(a.container=f),y&&(n.container=y),g&&(c.container=g),{layerListContainer:y,legendContainer:f,measure:c,basemapGallery:p,editor:B,viewToggle:v,widgetPanel:m,sceneView:e,mapView:t}}(Ae,Ve)})).then((function(e){for(var t=e.layerListContainer,i=e.legendContainer,r=e.measure,a=e.basemapGallery,n=e.editor,o=e.viewToggle,s=e.widgetPanel,l=e.sceneView,c=e.mapView,d=Array.from(document.querySelectorAll("calcite-action")),p=[{label:"Layers",container:t},{label:"Legend",container:i},{label:"Measure",container:r.container},{label:"Basemap",container:a.container},{label:"Edit",container:n.container}],u=function(e){e.addEventListener("click",(function(){var t=e.text;p.forEach((function(e){t==e.label?e.container.classList.toggle("hidden"):e.container.classList.add("hidden")})),"Measure"!=t?r.disable():r.enable(),"Edit"==t&&"2D"==o.state&&o.toggle(),s.collapsed=0==p.filter((function(e){return!e.container.classList.contains("hidden")})).length}))},h=0,v=d;h<v.length;h++){u(v[h])}var f=new Te((function(){l.padding=c.padding=P(P({},l.padding),{left:s.offsetWidth})}));return f.observe(s),f}));var Le=function(e){De[e].when().then(E.watch(De[e].popup,"featureCount",(function(){!function(e){if(0!==e.popup.featureCount){console.log(e.popup.featureCount);var t=e.popup.features.sort((function(t,i){var r=t.layer||t.sourceLayer.layer,a=i.layer||i.sourceLayer.layer;return-1*(e.map.allLayers.indexOf(r)-e.map.allLayers.indexOf(a))}));e.popup.features=t}}(De[e])}))),De[e].on("click",(function(t){De[e].hitTest(t).then((function(t){!function(e,t){var i;Me&&t.graphics.remove(Me);var r=null===(i=e.results.filter((function(e){return e.graphic.layer===H}))[0])||void 0===i?void 0:i.graphic;if(r){var a=T.geodesicBuffer(r.geometry,200,"feet"),n=new M({geometry:a,symbol:{type:"simple-fill",outline:{width:2,color:[255,170,0,1]},color:[0,0,0,0]}});Me=n,t.graphics.add(n)}}(t,De[e])}))}))};for(var Ne in De)Le(Ne);e.viewConfig=De,Object.defineProperty(e,"__esModule",{value:!0})}));
