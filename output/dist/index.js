define(["exports","esri/layers/FeatureLayer","esri/layers/MapImageLayer","esri/layers/GroupLayer","esri/Map","esri/layers/ElevationLayer","esri/views/SceneView","esri/views/MapView","esri/widgets/LayerList","esri/widgets/Legend","esri/widgets/BasemapGallery","esri/widgets/Compass","esri/widgets/Editor","esri/core/accessorSupport/decorators","esri/widgets/support/widget","esri/widgets/Measurement","esri/widgets/Widget","esri/Graphic","esri/geometry/geometryEngine"],(function(e,t,n,i,r,o,s,a,c,d,l,u,h,f,p,v,w,g,y){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n,i=i&&i.hasOwnProperty("default")?i.default:i,r=r&&r.hasOwnProperty("default")?r.default:r,o=o&&o.hasOwnProperty("default")?o.default:o,s=s&&s.hasOwnProperty("default")?s.default:s,a=a&&a.hasOwnProperty("default")?a.default:a,c=c&&c.hasOwnProperty("default")?c.default:c,d=d&&d.hasOwnProperty("default")?d.default:d,l=l&&l.hasOwnProperty("default")?l.default:l,u=u&&u.hasOwnProperty("default")?u.default:u,h=h&&h.hasOwnProperty("default")?h.default:h,v=v&&v.hasOwnProperty("default")?v.default:v,w=w&&w.hasOwnProperty("default")?w.default:w,g=g&&g.hasOwnProperty("default")?g.default:g,y=y&&y.hasOwnProperty("default")?y.default:y;var b=new t({portalItem:{id:"49e1606446f34f93807b1fc437be53c9"},outFields:["*"],title:"Wastewater Treatment Systems",opacity:.8}),m=new n({url:"https://gisweb.bozeman.net/arcgis/rest/services/COB_Utilities/Wastewater_Utility/MapServer",title:"Bozeman Wastewater",visible:!1}),_=new o({url:"https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer"}),O=new t({url:"https://gis.gallatin.mt.gov/arcgis/rest/services/MapServices/EHSBase/MapServer/7",title:"Parcels"}),E=(new i({title:"Contours",visible:!1,visibilityMode:"inherited",layers:[new t({url:"https://carto.nationalmap.gov/arcgis/rest/services/contours/MapServer/26",title:"Intermediate Contours",returnZ:!1,elevationInfo:{mode:"on-the-ground"}}),new t({url:"https://carto.nationalmap.gov/arcgis/rest/services/contours/MapServer/25",title:"Index Contours",returnZ:!1,elevationInfo:{mode:"on-the-ground"}})],opacity:.75}),new r({basemap:"topo",ground:{layers:[_]},layers:[O,m,b]})),M=function(e,t){return(M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function V(e,t){function n(){this.constructor=e}M(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var P=function(){return(P=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function T(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}var L=function(e){function t(t){return e.call(this)||this}return V(t,e),t.prototype.disable=function(){this.clear(),console.log(this)},t.prototype.enable=function(){var e=this;this.activeTool="direct-line",this.stateWatch||(this.stateWatch=this.watch("viewModel.state",(function(t){var n;switch(t){case"measured":null===(n=e.gradientNode)||void 0===n||n.remove(),e.gradientNode=null,e.addHydraulicGradientNodes()}console.log("Current state: ",t)}))),console.log(this)},t.prototype.addHydraulicGradientNodes=function(){var e,t,n,i;if(this.container){this.renderNow();var r=(null===this||void 0===this?void 0:this.container).querySelectorAll("section")[1];if(this.gradientNode=null===(t=null===(e=r)||void 0===e?void 0:e.lastElementChild)||void 0===t?void 0:t.cloneNode(!0),(null===(n=null===this||void 0===this?void 0:this.gradientNode)||void 0===n?void 0:n.firstElementChild)&&(null===(i=null===this||void 0===this?void 0:this.gradientNode)||void 0===i?void 0:i.lastElementChild)){this.gradientNode.firstElementChild.innerText="Hydaulic Gradient";var o=(this.viewModel.activeViewModel.tool.verticalDistance.value/this.viewModel.activeViewModel.tool.horizontalDistance.value/3).toFixed(4);this.gradientNode.lastElementChild.innerText=o}r.appendChild(this.gradientNode)}},T([f.property(),p.renderable()],t.prototype,"gradientNode",void 0),T([f.property(),p.renderable()],t.prototype,"loadingSpan",void 0),t=T([f.subclass("esri.widgets.Measure")],t)}(f.declared(v)),A="view-toggle esri-component esri-widget--button esri-widget esri-interactive",D=function(e){function t(t){var n,i,r,o,s=e.call(this)||this;return"3d"==(null===(n=t)||void 0===n?void 0:n.initView.type)?(s.sceneView=t.initView,s.mapView=t.otherView,s.state="2D"):(s.sceneView=null===(i=t)||void 0===i?void 0:i.otherView,s.mapView=null===(r=t)||void 0===r?void 0:r.initView,s.state="3D"),s.activeView=null===(o=t)||void 0===o?void 0:o.initView,s}return V(t,e),t.prototype.render=function(){return p.tsx("div",{bind:this,class:A,role:"button",type:"button",id:"switch-btn",value:this.state,onclick:this.toggle},p.tsx("span",{id:"button_label"},this.state))},t.prototype.switchView=function(e){var t=this.activeView.viewpoint;this.activeView.container.classList.toggle("hidden"),e.container.classList.remove("hidden"),console.log(t),e.viewpoint=t,e.ui.add(this,"top-left"),this.activeView=e},t.prototype.toggle=function(){var e="3D"===this.state?"2D":"3D";this.set("state",e),this.switchView("2D"==e?this.sceneView:this.mapView)},T([f.property()],t.prototype,"activeView",void 0),T([f.property(),p.renderable()],t.prototype,"state",void 0),t=T([f.subclass("esri.widgets.ViewToggle")],t)}(f.declared(w));var x=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,i){return e[0]===t&&(n=i,!0)})),n}return(function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),i=this.__entries__[n];return i&&i[1]},t.prototype.set=function(t,n){var i=e(this.__entries__,t);~i?this.__entries__[i][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,i=e(n,t);~i&&n.splice(i,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,i=this.__entries__;n<i.length;n++){var r=i[n];e.call(t,r[1],r[0])}},t}())}(),C="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,S="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),B="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(S):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var I=["top","right","bottom","left","width","height","size","weight"],j="undefined"!=typeof MutationObserver,R=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,i=!1,r=0;function o(){n&&(n=!1,e()),i&&a()}function s(){B(o)}function a(){var e=Date.now();if(n){if(e-r<2)return;i=!0}else n=!0,i=!1,setTimeout(s,t);r=e}return a}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){C&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),j?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){C&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;I.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),W=function(e,t){for(var n=0,i=Object.keys(t);n<i.length;n++){var r=i[n];Object.defineProperty(e,r,{value:t[r],enumerable:!1,writable:!1,configurable:!0})}return e},N=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||S},G=U(0,0,0,0);function k(e){return parseFloat(e)||0}function z(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+k(e["border-"+n+"-width"])}),0)}function H(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return G;var i=N(e).getComputedStyle(e),r=function(e){for(var t={},n=0,i=["top","right","bottom","left"];n<i.length;n++){var r=i[n],o=e["padding-"+r];t[r]=k(o)}return t}(i),o=r.left+r.right,s=r.top+r.bottom,a=k(i.width),c=k(i.height);if("border-box"===i.boxSizing&&(Math.round(a+o)!==t&&(a-=z(i,"left","right")+o),Math.round(c+s)!==n&&(c-=z(i,"top","bottom")+s)),!function(e){return e===N(e).document.documentElement}(e)){var d=Math.round(a+o)-t,l=Math.round(c+s)-n;1!==Math.abs(d)&&(a-=d),1!==Math.abs(l)&&(c-=l)}return U(r.left,r.top,a,c)}var q="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof N(e).SVGGraphicsElement}:function(e){return e instanceof N(e).SVGElement&&"function"==typeof e.getBBox};function F(e){return C?q(e)?function(e){var t=e.getBBox();return U(0,0,t.width,t.height)}(e):H(e):G}function U(e,t,n,i){return{x:e,y:t,width:n,height:i}}var Z=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=U(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=F(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),J=function(e,t){var n,i,r,o,s,a,c,d=(i=(n=t).x,r=n.y,o=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),W(c,{x:i,y:r,width:o,height:s,top:r,right:i+o,bottom:s+r,left:i}),c);W(this,{target:e,contentRect:d})},K=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new x,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof N(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new Z(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof N(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new J(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Q="undefined"!=typeof WeakMap?new WeakMap:new x,X=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=R.getInstance(),i=new K(t,n,this);Q.set(this,i)};["observe","unobserve","disconnect"].forEach((function(e){X.prototype[e]=function(){var t;return(t=Q.get(this))[e].apply(t,arguments)}}));var Y,$=void 0!==S.ResizeObserver?S.ResizeObserver:X;var ee=new s({container:"sceneViewDiv",map:E}),te=new a({container:"mapViewDiv",map:E}),ne={sceneView:ee,mapView:te};b.when((function(){ee.goTo(b.fullExtent)})),ee.when((function(){return function(e,t){var n=new d({view:e}),i=new c({view:e}),r=new L({view:e}),o=new l({view:e}),s=new u({view:t});t.ui.add(s,"top-left");var a=new h({view:t,layerInfos:[{layer:b}],container:document.getElementById("widget-editor")}),f=new D({initView:e,otherView:t});e.ui.add(f,"top-left");var p=document.getElementById("widget-legend"),v=document.getElementById("widget-layerlist"),w=document.getElementById("widget-measure"),g=document.getElementById("widget-basemap-gallery"),y=document.getElementById("widget-panel");return y&&(e.padding=t.padding=P(P({},e.padding),{left:y.offsetWidth})),p&&(n.container=p),v&&(i.container=v),w&&(r.container=w),g&&(o.container=g),{layerListContainer:v,legendContainer:p,measure:r,basemapGallery:o,editor:a,viewToggle:f,widgetPanel:y,view:e,mapView:t}}(ee,te)})).then((function(e){for(var t=e.layerListContainer,n=e.legendContainer,i=e.measure,r=e.basemapGallery,o=e.editor,s=e.viewToggle,a=e.widgetPanel,c=e.view,d=e.mapView,l=Array.from(document.querySelectorAll("calcite-action")),u=[{label:"Layers",container:t},{label:"Legend",container:n},{label:"Measure",container:i.container},{label:"Basemap",container:r.container},{label:"Edit",container:o.container}],h=function(e){e.addEventListener("click",(function(){var t=e.text;u.forEach((function(e){t==e.label?e.container.classList.toggle("hidden"):e.container.classList.add("hidden")})),"Measure"!=t?i.disable():i.enable(),"Edit"==t&&"2D"==s.state&&s.toggle(),a.collapsed=0==u.filter((function(e){return!e.container.classList.contains("hidden")})).length}))},f=0,p=l;f<p.length;f++){h(p[f])}var v=new $((function(){c.padding=d.padding=P(P({},c.padding),{left:a.offsetWidth})}));return v.observe(a),v})),ee.on("click",(function(e){ee.hitTest(e).then((function(e){!function(e,t){Y&&t.graphics.remove(Y);var n=e.results.filter((function(e){return e.graphic.layer===b}))[0].graphic,i=y.geodesicBuffer(n.geometry,200,"feet"),r=new g({geometry:i,symbol:{type:"simple-fill",outline:{width:2,color:[255,170,0,1]},color:[0,0,0,0]}});Y=r,t.graphics.add(r)}(e,ee)}))})),e.viewConfig=ne,Object.defineProperty(e,"__esModule",{value:!0})}));
