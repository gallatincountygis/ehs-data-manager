define(["exports","esri/layers/FeatureLayer","esri/layers/MapImageLayer","esri/Map","esri/layers/GroupLayer","esri/layers/ElevationLayer","esri/views/SceneView","esri/views/MapView","esri/Viewpoint","esri/core/watchUtils","esri/widgets/LayerList","esri/widgets/Legend","esri/widgets/Compass","esri/core/accessorSupport/decorators","esri/widgets/support/widget","esri/widgets/Measurement","esri/widgets/Widget","esri/Basemap","esri/widgets/BasemapGallery/support/LocalBasemapsSource","esri/layers/ImageryLayer","esri/widgets/BasemapGallery","esri/Ground","esri/widgets/Editor","esri/Graphic","esri/geometry/geometryEngine","esri/geometry"],(function(e,t,i,r,a,n,s,o,l,d,c,u,p,h,v,f,g,y,m,w,b,_,S,E,M,O){"use strict";function A(e){var t;null===(t=e)||void 0===t||t.sublayers.forEach((function(e){e.createFeatureLayer().then((function(e){return e.load()})).then((function(t){e.popupTemplate=t.createPopupTemplate()}))}))}t=t&&t.hasOwnProperty("default")?t.default:t,i=i&&i.hasOwnProperty("default")?i.default:i,r=r&&r.hasOwnProperty("default")?r.default:r,a=a&&a.hasOwnProperty("default")?a.default:a,n=n&&n.hasOwnProperty("default")?n.default:n,s=s&&s.hasOwnProperty("default")?s.default:s,o=o&&o.hasOwnProperty("default")?o.default:o,l=l&&l.hasOwnProperty("default")?l.default:l,d=d&&d.hasOwnProperty("default")?d.default:d,c=c&&c.hasOwnProperty("default")?c.default:c,u=u&&u.hasOwnProperty("default")?u.default:u,p=p&&p.hasOwnProperty("default")?p.default:p,f=f&&f.hasOwnProperty("default")?f.default:f,g=g&&g.hasOwnProperty("default")?g.default:g,y=y&&y.hasOwnProperty("default")?y.default:y,m=m&&m.hasOwnProperty("default")?m.default:m,w=w&&w.hasOwnProperty("default")?w.default:w,b=b&&b.hasOwnProperty("default")?b.default:b,_=_&&_.hasOwnProperty("default")?_.default:_,S=S&&S.hasOwnProperty("default")?S.default:S,E=E&&E.hasOwnProperty("default")?E.default:E,M=M&&M.hasOwnProperty("default")?M.default:M;var V=new t({portalItem:{id:"49e1606446f34f93807b1fc437be53c9"},outFields:["*"],title:"Wastewater Treatment Systems",id:"wwtp",opacity:.8}),T=new t({portalItem:{id:"d88f46d2f52a4a6daa73ba10e605d761"},listMode:"hide",minScale:24001,legendEnabled:!1}),I=new i({portalItem:{id:"9595acf80a45479890552f8d579bb763"},listMode:"hide"});I.when().then((function(){return A(I)}));var P=new a({layers:[I,T],title:"Addresses",id:"addressLayers",visible:!0}),D=new i({url:"https://gis.gallatin.mt.gov/arcgis/rest/services/MapServices/EHS/MapServer",title:"Miscellaneous",visible:!1});D.when().then((function(){D.sublayers=D.sublayers.filter((function(e){return e.id>=2})),A(D)}));var B=new t({url:"http://deqgis.mt.gov/arcgis/rest/services/Reference/Ground_Water/MapServer/0",outFields:["*"],title:"GWIC Water Wells",visible:!1,id:"gwic"}),L=new t({url:"http://deqgis.mt.gov/arcgis/rest/services/DEQ/DST/MapServer/2",outFields:["*"],title:"DST Response Sites",visible:!0,id:"dstResponseSites"}),N=new a({layers:[new t({url:"http://deqgis.mt.gov/arcgis/rest/services/DEQ/DST/MapServer/9",outFields:["*"],title:"DST SWDAR Locations",visible:!0,id:"dstSWDARLocations"}),L],title:"DEQ Layers",id:"deqLayers",visible:!1}),C=new i({url:"https://gisweb.bozeman.net/arcgis/rest/services/COB_Utilities/Wastewater_Utility/MapServer",title:"Bozeman Wastewater",id:"bznWastewater",visible:!0});C.when().then((function(){var e,t,i;(null===(t=null===(e=C.sublayers)||void 0===e?void 0:e.getItemAt(0))||void 0===t?void 0:t.sublayers)&&"Wastewater Collection System"===(null===(i=C.sublayers)||void 0===i?void 0:i.getItemAt(0).title)&&(C.sublayers=C.sublayers.getItemAt(0).sublayers),A(C)}));var x=new t({url:"http://gis.gallatin.mt.gov/arcgis/rest/services/MapServices/EHSBase/MapServer/11",outFields:["*"],title:"Water & Sewer Districts",visible:!0,id:"waterSewerDistricts"}),F=new a({title:"Public Systems",id:"publicWastewaterSystems",visible:!1,layers:[C,x]}),W=new i({title:"Flood Hazard Zones",url:"https://hazards.fema.gov/gis/nfhl/rest/services/public/NFHL/MapServer",id:"floodHazardZones",opacity:.5,visible:!1,sublayers:[{id:28,visible:!0,popupEnabled:!0,listMode:"hide",popupTemplate:{title:"Flood Hazard Zone",content:[{type:"fields",fieldInfos:[{fieldName:"VERSION_ID",label:"Version"},{fieldName:"FLD_ZONE",label:"Flood Zone"},{fieldName:"ZONE_SUBTY",label:"Zone Subtype"},{fieldName:"STUDY_TYP",label:"Study Type"},{fieldName:"DFIRM_ID",label:"DFIRM ID"}]}]}}]}),H=new t({url:"https://gis.gallatin.mt.gov/arcgis/rest/services/MapServices/EHSBase/MapServer/7",title:"Parcels",id:"parcels"}),R=new n({url:"https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",id:"ground"}),k=new r({basemap:"satellite",ground:{layers:[R]},layers:[H,W,F,D,N,B,V,P]}),z=function(e,t){return(z=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};function G(e,t){function i(){this.constructor=e}z(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}var j=function(){return(j=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function q(e,t,i,r){var a,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(s=(n<3?a(s):n>3?a(t,i,s):a(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s}var Z=function(e){function t(t){return e.call(this)||this}return G(t,e),t.prototype.disable=function(){this.clear(),this.activeTool=null},t.prototype.enable=function(){var e=this;this.activeTool="2d"==this.view.type?"distance":"direct-line",this.stateWatch||(this.stateWatch=this.watch("viewModel.state",(function(t){switch(t){case"measured":e.addNodes()}console.log("Current state: ",t)}))),console.log(this)},t.prototype.viewToggle=function(e){this.clear(),this.view=e,this.container.classList.contains("hidden")||(this.activeTool="2d"==e.type?"distance":"direct-line")},t.prototype.addNodes=function(){var e,t;null===(e=this.gradientNode)||void 0===e||e.remove(),this.gradientNode=null,null===(t=this.bearingNode)||void 0===t||t.remove(),this.bearingNode=null,this.addHydraulicGradientNodes(),this.addBearingNode()},t.prototype.addHydraulicGradientNodes=function(){var e,t,i,r;if(this.container&&(this.renderNow(),"direct-line"==this.activeTool)){var a=(null===this||void 0===this?void 0:this.container).querySelectorAll("section")[1];if(this.gradientNode=null===(t=null===(e=a)||void 0===e?void 0:e.lastElementChild)||void 0===t?void 0:t.cloneNode(!0),(null===(i=null===this||void 0===this?void 0:this.gradientNode)||void 0===i?void 0:i.firstElementChild)&&(null===(r=null===this||void 0===this?void 0:this.gradientNode)||void 0===r?void 0:r.lastElementChild)){this.gradientNode.firstElementChild.innerText="Hydraulic Gradient";var n=(this.viewModel.activeViewModel.tool.verticalDistance.value/this.viewModel.activeViewModel.tool.horizontalDistance.value/3).toFixed(4);this.gradientNode.lastElementChild.innerText=n}a.appendChild(this.gradientNode)}},t.prototype.addBearingNode=function(){var e,t,i,r,a,n,s,o,l;if("distance"===this.activeTool){var d=null===(e=this.viewModel.activeViewModel.measurement)||void 0===e?void 0:e.geometry;l=null===(t=d)||void 0===t?void 0:t.paths[d.paths.length-1].slice(d.paths[d.paths.length-1].length-2)}else if("direct-line"===this.activeTool){var c=null===(a=null===(r=(null===(i=this.viewModel)||void 0===i?void 0:i.activeViewModel).tool)||void 0===r?void 0:r.model)||void 0===a?void 0:a.startPoint,u=null===(o=null===(s=(null===(n=this.viewModel)||void 0===n?void 0:n.activeViewModel).tool)||void 0===s?void 0:s.model)||void 0===o?void 0:o.endPoint;l=[[c.x,c.y],[u.x,u.y]]}var p=(null===this||void 0===this?void 0:this.container).querySelectorAll("section")[1];this.bearingNode=p.firstElementChild.cloneNode(!0),this.bearingNode.firstElementChild.innerText="Bearing",this.bearingNode.lastElementChild.innerText=this.computeAngle(l),p.appendChild(this.bearingNode)},t.prototype.computeAngle=function(e){var t=e[0],i=e[1],r=parseFloat((180*Math.atan2(i[1]-t[1],i[0]-t[0])/Math.PI).toFixed(1));return r<0&&(r+=360),0==r?"E":r>0&&r<=90?"N "+(90!=r?(90-r).toFixed(1)+"° E":""):r>90&&r<180?"N "+Math.abs(90-r).toFixed(1)+"° W":180==r?"W":r>180&&r<=270?"S "+(180!=r?(270-r).toFixed(1)+"° W":""):r>270?"S "+(360-r!=270?(r-270).toFixed(1):"")+"° E":"Something is wrong"},q([h.property(),v.renderable()],t.prototype,"gradientNode",void 0),q([h.property(),v.renderable()],t.prototype,"bearingNode",void 0),q([h.property(),v.renderable()],t.prototype,"loadingSpan",void 0),q([h.property()],t.prototype,"stateWatch",void 0),t=q([h.subclass("esri.widgets.Measure")],t)}(h.declared(f)),U=function(e){function t(t){var i,r,a,n,s=e.call(this)||this;return s.customBasemaps=[{title:"Street Map",id:"streetMap",layers:[{type:"map-image",params:{url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/HillshadeBasemap/MapServer"}}]},{title:"2017 Aerial",id:"stateNAIP201710",layers:[{type:"imagery",params:{url:"http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2017/ImageServer",noData:0}}]},{title:"Hi-Res (date varies)",id:"esriImagery",layers:[{type:"map-image",params:{url:"http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"}}]},{title:"2015 Aerial",id:"naip2015",layers:[{type:"imagery",params:{url:"http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2015/ImageServer"}}]},{title:"2013 Aerial",id:"naip2013",layers:[{type:"imagery",params:{url:"http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2013/ImageServer"}}]},{title:"2012 Bozeman Aerial",id:"bozeman2012",layers:[{type:"map-image",params:{url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",sublayers:[{id:0}]}}]},{title:"2011 Aerial",id:"naip2011",layers:[{type:"imagery",params:{url:"http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2011/ImageServer"}}]},{title:"2011 Color Infrared",id:"cir2011",layers:[{type:"map-image",params:{url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",sublayers:[{id:1}]}}]},{title:"2009 Aerial",id:"naip2009",layers:[{type:"imagery",params:{url:"http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2009/ImageServer"}}]},{title:"2009 Color Infrared",id:"cir2009",layers:[{type:"map-image",params:{url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",sublayers:[{id:2}]}}]},{title:"2007 Bozeman Aerial",id:"bozeman2007",layers:[{type:"map-image",params:{url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",sublayers:[{id:3}]}}]},{title:"2005 Aerial",id:"naip2005",layers:[{type:"imagery",params:{url:"http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2005/ImageServer"}}]},{title:"2005 Color Infrared",id:"cir2005",layers:[{type:"map-image",params:{url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",sublayers:[{id:4}]}}]},{title:"2004 WYS Aerial",id:"wys2004",layers:[{type:"map-image",params:{url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",title:"piss",sublayers:[{id:5}]}}]},{title:"2004 Bozeman Aerial",id:"bozeman2004",layers:[{type:"map-image",params:{url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",sublayers:[{id:6}]}}]},{title:"2003 Big Sky Aerial",id:"bigsky2003",layers:[{type:"map-image",params:{id:"fuck",title:"shit",url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",sublayers:[{id:7}]}}]},{title:"2001 Color Infrared",id:"cir2001",layers:[{type:"map-image",params:{url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",sublayers:[{id:8}]}}]},{title:"1990s Aerial",id:"doqq1990s",layers:[{type:"imagery",params:{url:"http://gisservicemt.gov/arcgis/rest/services/MSL/DOQQ_1990s/ImageServer"}}]},{title:"State Topo",id:"mtTopo",layers:[{type:"map-image",params:{url:"https://gisservicemt.gov/arcgis/rest/services/MSL/HistoricTopo/MapServer"}}]},{title:"County Topo",id:"gcTopo",layers:[{type:"map-image",params:{url:"http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",sublayers:[{id:9}]}}]}],"3d"==(null===(i=t)||void 0===i?void 0:i.initView.type)?(s.sceneView=t.initView,s.mapView=t.otherView):(s.sceneView=null===(r=t)||void 0===r?void 0:r.otherView,s.mapView=null===(a=t)||void 0===a?void 0:a.initView),s.container=t.container,s.gallery=new b({view:null===(n=t)||void 0===n?void 0:n.initView}),s}return G(t,e),t.prototype.render=function(){return this.gallery.render()},t.prototype.viewToggle=function(e){var t,i,r=this.gallery.activeBasemap.toJSON();r.baseLayers=r.baseMapLayers,this.gallery.view=e,null===(t=this.gallery.activeBasemap)||void 0===t||t.destroy(),null===(i=this.gallery.view.basemapView)||void 0===i||i.destroy()},t.prototype.addCustomBasemaps=function(){var e=[];return this.customBasemaps.forEach((function(t){var r,a=[];null===(r=t.layers)||void 0===r||r.forEach((function(e){var r;switch(e.type){case"imagery":r=new w(e.params);break;case"map-image":r=new i(e.params);break;default:console.log("fuck"),console.log(t)}r&&a.push(r)})),a&&e.push(new y({baseLayers:a,id:t.id,title:t.title}))})),new m({basemaps:e})},q([h.property()],t.prototype,"customBasemaps",void 0),q([h.property()],t.prototype,"container",void 0),t=q([h.subclass("esri.widgets.BasemapGallery")],t)}(h.declared(g)),Q="view-toggle esri-component esri-widget--button esri-widget esri-interactive",Y=function(e){function t(t){var i,r,a,n,s=e.call(this)||this;return s.ground=new _({layers:[R]}),"3d"==(null===(i=t)||void 0===i?void 0:i.initView.type)?(s.sceneView=t.initView,s.mapView=t.otherView,s.state="2D"):(s.sceneView=null===(r=t)||void 0===r?void 0:r.otherView,s.mapView=null===(a=t)||void 0===a?void 0:a.initView,s.state="3D"),s.activeView=null===(n=t)||void 0===n?void 0:n.initView,s}return G(t,e),t.prototype.render=function(){return v.tsx("div",{bind:this,class:Q,role:"button",type:"button",id:"switch-btn",value:this.state,onclick:this.toggle},v.tsx("span",{id:"button_label"},this.state))},t.prototype.switchView=function(e){var t,i,r=this.activeView.viewpoint.clone();for(var a in this.widgets)if(this.widgets[a].viewToggle)null===(i=(t=this.widgets[a]).viewToggle)||void 0===i||i.call(t,e);else{if("editor"==a)continue;this.widgets[a].view=e}this.activeView.container.classList.toggle("hidden"),e.container.classList.remove("hidden"),e.ui.add(this,"top-left"),this.activeView=e,e.viewpoint=r},t.prototype.toggle=function(){var e="3D"===this.state?"2D":"3D";this.set("state",e),this.switchView("2D"==e?this.sceneView:this.mapView)},q([h.property()],t.prototype,"widgets",void 0),q([h.property()],t.prototype,"activeView",void 0),q([h.property(),v.renderable()],t.prototype,"state",void 0),t=q([h.subclass("esri.widgets.ViewToggle")],t)}(h.declared(g)),J=function(e){function t(t){return e.call(this)||this}return G(t,e),t.prototype.viewToggle=function(e){},q([h.property()],t.prototype,"container",void 0),t=q([h.subclass("esri.widgets.Editor")],t)}(h.declared(S));var K=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var i=-1;return e.some((function(e,r){return e[0]===t&&(i=r,!0)})),i}return(function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var i=e(this.__entries__,t),r=this.__entries__[i];return r&&r[1]},t.prototype.set=function(t,i){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=i:this.__entries__.push([t,i])},t.prototype.delete=function(t){var i=this.__entries__,r=e(i,t);~r&&i.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var i=0,r=this.__entries__;i<r.length;i++){var a=r[i];e.call(t,a[1],a[0])}},t}())}(),X="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,$="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),ee="function"==typeof requestAnimationFrame?requestAnimationFrame.bind($):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var te=["top","right","bottom","left","width","height","size","weight"],ie="undefined"!=typeof MutationObserver,re=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var i=!1,r=!1,a=0;function n(){i&&(i=!1,e()),r&&o()}function s(){ee(n)}function o(){var e=Date.now();if(i){if(e-a<2)return;r=!0}else i=!0,r=!1,setTimeout(s,t);a=e}return o}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,i=t.indexOf(e);~i&&t.splice(i,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){X&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),ie?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){X&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,i=void 0===t?"":t;te.some((function(e){return!!~i.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),ae=function(e,t){for(var i=0,r=Object.keys(t);i<r.length;i++){var a=r[i];Object.defineProperty(e,a,{value:t[a],enumerable:!1,writable:!1,configurable:!0})}return e},ne=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||$},se=pe(0,0,0,0);function oe(e){return parseFloat(e)||0}function le(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return t.reduce((function(t,i){return t+oe(e["border-"+i+"-width"])}),0)}function de(e){var t=e.clientWidth,i=e.clientHeight;if(!t&&!i)return se;var r=ne(e).getComputedStyle(e),a=function(e){for(var t={},i=0,r=["top","right","bottom","left"];i<r.length;i++){var a=r[i],n=e["padding-"+a];t[a]=oe(n)}return t}(r),n=a.left+a.right,s=a.top+a.bottom,o=oe(r.width),l=oe(r.height);if("border-box"===r.boxSizing&&(Math.round(o+n)!==t&&(o-=le(r,"left","right")+n),Math.round(l+s)!==i&&(l-=le(r,"top","bottom")+s)),!function(e){return e===ne(e).document.documentElement}(e)){var d=Math.round(o+n)-t,c=Math.round(l+s)-i;1!==Math.abs(d)&&(o-=d),1!==Math.abs(c)&&(l-=c)}return pe(a.left,a.top,o,l)}var ce="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof ne(e).SVGGraphicsElement}:function(e){return e instanceof ne(e).SVGElement&&"function"==typeof e.getBBox};function ue(e){return X?ce(e)?function(e){var t=e.getBBox();return pe(0,0,t.width,t.height)}(e):de(e):se}function pe(e,t,i,r){return{x:e,y:t,width:i,height:r}}var he=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=pe(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=ue(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),ve=function(e,t){var i,r,a,n,s,o,l,d=(r=(i=t).x,a=i.y,n=i.width,s=i.height,o="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,l=Object.create(o.prototype),ae(l,{x:r,y:a,width:n,height:s,top:a,right:r+n,bottom:s+a,left:r}),l);ae(this,{target:e,contentRect:d})},fe=function(){function e(e,t,i){if(this.activeObservations_=[],this.observations_=new K,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=i}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof ne(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new he(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof ne(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new ve(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),ge="undefined"!=typeof WeakMap?new WeakMap:new K,ye=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=re.getInstance(),r=new fe(t,i,this);ge.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){ye.prototype[e]=function(){var t;return(t=ge.get(this))[e].apply(t,arguments)}}));var me,we=void 0!==$.ResizeObserver?$.ResizeObserver:ye;var be=new l({scale:23e5,targetGeometry:new O.Point({spatialReference:{wkid:102100},x:-12481272,y:57002435})}),_e=new s({container:"sceneViewDiv",map:k,viewpoint:be,popup:{defaultPopupTemplateEnabled:!0},qualityProfile:"high"}),Se=new o({container:"mapViewDiv",viewpoint:be,popup:{defaultPopupTemplateEnabled:!0},map:k}),Ee=Se;Ee.container.classList.remove("hidden");var Me={sceneView:_e,mapView:Se};V.when((function(){Ee.goTo({target:V.fullExtent,heading:0})})),Ee.when().then((function(){return function(e,t){var i,r;r=e;var a=new u({view:i=t}),n=new c({view:i}),s=new Z({view:i,linearUnit:"feet"}),o=document.getElementById("widget-basemap-gallery"),l=new U({initView:i,otherView:r,container:o}),d=new p({view:t});t.ui.add(d,"top-left");var h=new J({view:t,container:document.getElementById("widget-editor")});V.when((function(){var e=V.fields.map((function(e){return{description:e.description,domain:e.domain,editable:e.editable,name:e.name,maxLength:e.length,label:e.alias}}));h.layerInfos=[{layer:V,fieldConfig:e}]}));var v=new Y({initView:i,otherView:r,widgets:{layerList:n,legend:a,measure:s,basemapGallery:l,editor:h}});i.ui.add(v,"top-left");var f=document.getElementById("widget-legend"),g=document.getElementById("widget-layerlist"),y=document.getElementById("widget-measure"),m=document.getElementById("widget-panel");return m&&(e.padding=t.padding=j(j({},e.padding),{left:m.offsetWidth})),f&&(a.container=f),g&&(n.container=g),y&&(s.container=y),{layerListContainer:g,legendContainer:f,measure:s,basemapGallery:l,editor:h,viewToggle:v,widgetPanel:m,sceneView:e,mapView:t}}(_e,Se)})).then((function(e){for(var t=e.layerListContainer,i=e.legendContainer,r=e.measure,a=e.basemapGallery,n=e.editor,s=e.viewToggle,o=e.widgetPanel,l=e.sceneView,d=e.mapView,c=Array.from(document.querySelectorAll("calcite-action")),u=[{label:"Layers",container:t},{label:"Legend",container:i},{label:"Measure",container:r.container},{label:"Basemap",container:a.container},{label:"Edit",container:n.container}],p=function(e){e.addEventListener("click",(function(){var t=e.text;u.forEach((function(e){t==e.label?e.container.classList.toggle("hidden"):e.container.classList.add("hidden")})),"Measure"!=t?r.disable():r.enable(),"Edit"==t&&"2D"==s.state&&s.toggle(),o.collapsed=0==u.filter((function(e){return!e.container.classList.contains("hidden")})).length}))},h=0,v=c;h<v.length;h++){p(v[h])}var f=new we((function(){l.padding=d.padding=j(j({},l.padding),{left:o.offsetWidth})}));return f.observe(o),f}));var Oe=function(e){Me[e].when().then(d.watch(Me[e].popup,"featureCount",(function(){!function(e){if(0!==e.popup.featureCount){console.log(e.popup.featureCount);var t=e.popup.features.sort((function(t,i){var r=t.layer||t.sourceLayer.layer,a=i.layer||i.sourceLayer.layer;return-1*(e.map.allLayers.indexOf(r)-e.map.allLayers.indexOf(a))}));e.popup.features=t}}(Me[e])}))),Me[e].on("click",(function(t){Me[e].hitTest(t).then((function(t){!function(e,t){me&&t.graphics.remove(me);var i=e.results.filter((function(e){return e.graphic.layer===V}))[0].graphic,r=M.geodesicBuffer(i.geometry,200,"feet"),a=new E({geometry:r,symbol:{type:"simple-fill",outline:{width:2,color:[255,170,0,1]},color:[0,0,0,0]}});me=a,t.graphics.add(a)}(t,Me[e])}))}))};for(var Ae in Me)Oe(Ae);e.viewConfig=Me,Object.defineProperty(e,"__esModule",{value:!0})}));
