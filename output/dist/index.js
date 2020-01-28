define(["esri/layers/FeatureLayer","esri/layers/MapImageLayer","esri/layers/GroupLayer","esri/Map","esri/layers/ElevationLayer","esri/views/SceneView","esri/widgets/LayerList","esri/widgets/Legend","esri/core/accessorSupport/decorators","esri/widgets/support/widget","esri/widgets/Measurement","esri/Graphic","esri/geometry/geometryEngine"],(function(e,t,n,i,r,o,s,a,c,d,u,l,h){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n,i=i&&i.hasOwnProperty("default")?i.default:i,r=r&&r.hasOwnProperty("default")?r.default:r,o=o&&o.hasOwnProperty("default")?o.default:o,s=s&&s.hasOwnProperty("default")?s.default:s,a=a&&a.hasOwnProperty("default")?a.default:a,u=u&&u.hasOwnProperty("default")?u.default:u,l=l&&l.hasOwnProperty("default")?l.default:l,h=h&&h.hasOwnProperty("default")?h.default:h;var f=new e({portalItem:{id:"17a725a913cc415195ac9263e12e22e7"},outFields:["*"],title:"Wastewater Treatment Systems",opacity:.8,elevationInfo:{mode:"on-the-ground"}}),v=new t({url:"https://gisweb.bozeman.net/arcgis/rest/services/COB_Utilities/Wastewater_Utility/MapServer",title:"Bozeman Wastewater",visible:!1}),p=new r({url:"https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer"}),y=new e({url:"https://gis.gallatin.mt.gov/arcgis/rest/services/MapServices/EHSBase/MapServer/7",title:"Parcels"});y.when().then((function(e){console.log(e)}));var g=new i({basemap:"topo",ground:{layers:[p]},layers:[new n({title:"Contours",visible:!1,visibilityMode:"inherited",layers:[new e({url:"https://carto.nationalmap.gov/arcgis/rest/services/contours/MapServer/26",title:"Intermediate Contours",returnZ:!1,elevationInfo:{mode:"on-the-ground"}}),new e({url:"https://carto.nationalmap.gov/arcgis/rest/services/contours/MapServer/25",title:"Index Contours",returnZ:!1,elevationInfo:{mode:"on-the-ground"}})],opacity:.75}),y,v,f]}),w=function(e,t){return(w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var _=function(){return(_=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function b(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}var m=function(e){function t(t){return e.call(this)||this}return function(e,t){function n(){this.constructor=e}w(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.disable=function(){this.clear(),console.log(this)},t.prototype.enable=function(){var e=this;this.activeTool="direct-line",this.stateWatch||(this.stateWatch=this.watch("viewModel.state",(function(t){switch(t){case"measured":e.addHydraulicGradientNodes();case"ready":e.conductivityNode=null}console.log("Current state: ",t)}))),console.log(this)},t.prototype.addHydraulicGradientNodes=function(){var e,t;if(this.container&&!this.conductivityNode){this.renderNow();var n=null===this||void 0===this?void 0:this.container.querySelectorAll("section")[1];if(this.conductivityNode=n.lastElementChild.cloneNode(!0),(null===(e=null===this||void 0===this?void 0:this.conductivityNode)||void 0===e?void 0:e.firstElementChild)&&(null===(t=null===this||void 0===this?void 0:this.conductivityNode)||void 0===t?void 0:t.lastElementChild)){this.conductivityNode.firstElementChild.innerText="Hydaulic Conductivity";var i=(this.viewModel.activeViewModel.tool.verticalDistance.value/this.viewModel.activeViewModel.tool.horizontalDistance.value/3).toFixed(4);this.conductivityNode.lastElementChild.innerText=i}n.appendChild(this.conductivityNode)}},b([c.property(),d.renderable()],t.prototype,"conductivityNode",void 0),b([c.property(),d.renderable()],t.prototype,"loadingSpan",void 0),t=b([c.subclass("esri.widgets.Measure")],t)}(c.declared(u));var O=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,i){return e[0]===t&&(n=i,!0)})),n}return(function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),i=this.__entries__[n];return i&&i[1]},t.prototype.set=function(t,n){var i=e(this.__entries__,t);~i?this.__entries__[i][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,i=e(n,t);~i&&n.splice(i,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,i=this.__entries__;n<i.length;n++){var r=i[n];e.call(t,r[1],r[0])}},t}())}(),E="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,M="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),L="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(M):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var A=["top","right","bottom","left","width","height","size","weight"],T="undefined"!=typeof MutationObserver,x=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,i=!1,r=0;function o(){n&&(n=!1,e()),i&&a()}function s(){L(o)}function a(){var e=Date.now();if(n){if(e-r<2)return;i=!0}else n=!0,i=!1,setTimeout(s,t);r=e}return a}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){E&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),T?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){E&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;A.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),P=function(e,t){for(var n=0,i=Object.keys(t);n<i.length;n++){var r=i[n];Object.defineProperty(e,r,{value:t[r],enumerable:!1,writable:!1,configurable:!0})}return e},C=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||M},S=W(0,0,0,0);function D(e){return parseFloat(e)||0}function R(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+D(e["border-"+n+"-width"])}),0)}function j(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return S;var i=C(e).getComputedStyle(e),r=function(e){for(var t={},n=0,i=["top","right","bottom","left"];n<i.length;n++){var r=i[n],o=e["padding-"+r];t[r]=D(o)}return t}(i),o=r.left+r.right,s=r.top+r.bottom,a=D(i.width),c=D(i.height);if("border-box"===i.boxSizing&&(Math.round(a+o)!==t&&(a-=R(i,"left","right")+o),Math.round(c+s)!==n&&(c-=R(i,"top","bottom")+s)),!function(e){return e===C(e).document.documentElement}(e)){var d=Math.round(a+o)-t,u=Math.round(c+s)-n;1!==Math.abs(d)&&(a-=d),1!==Math.abs(u)&&(c-=u)}return W(r.left,r.top,a,c)}var I="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof C(e).SVGGraphicsElement}:function(e){return e instanceof C(e).SVGElement&&"function"==typeof e.getBBox};function N(e){return E?I(e)?function(e){var t=e.getBBox();return W(0,0,t.width,t.height)}(e):j(e):S}function W(e,t,n,i){return{x:e,y:t,width:n,height:i}}var B=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=W(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=N(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),z=function(e,t){var n,i,r,o,s,a,c,d=(i=(n=t).x,r=n.y,o=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),P(c,{x:i,y:r,width:o,height:s,top:r,right:i+o,bottom:s+r,left:i}),c);P(this,{target:e,contentRect:d})},k=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new O,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof C(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new B(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof C(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new z(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),G="undefined"!=typeof WeakMap?new WeakMap:new O,H=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=x.getInstance(),i=new k(t,n,this);G.set(this,i)};["observe","unobserve","disconnect"].forEach((function(e){H.prototype[e]=function(){var t;return(t=G.get(this))[e].apply(t,arguments)}}));var q,F=void 0!==M.ResizeObserver?M.ResizeObserver:H;var V=new o({container:"viewDiv",map:g});f.when((function(){V.goTo(f.fullExtent)})),V.when((function(e){var t=new a({view:e}),n=new s({view:e}),i=new m({view:e}),r=document.getElementById("widget-legend"),o=document.getElementById("widget-layerlist"),c=document.getElementById("widget-measure"),d=document.getElementById("widget-panel");return d&&(e.padding=_(_({},e.padding),{left:d.offsetWidth})),r&&(t.container=r),o&&(n.container=o),c&&(i.container=c),{layerListContainer:o,legendContainer:r,measure:i,widgetPanel:d,view:e}})).then((function(e){for(var t=e.layerListContainer,n=e.legendContainer,i=e.measure,r=e.widgetPanel,o=e.view,s=function(e){e.addEventListener("click",(function(){var o,s,a,c,d,u,l,h;"Measure"!=e.text?i.disable():i.enable(),"Layers"===e.text?(t.classList.toggle("hidden"),n.classList.add("hidden"),null===(s=null===(o=i)||void 0===o?void 0:o.container)||void 0===s||s.classList.add("hidden")):"Legend"===e.text?(t.classList.add("hidden"),n.classList.toggle("hidden"),null===(c=null===(a=i)||void 0===a?void 0:a.container)||void 0===c||c.classList.add("hidden")):"Measure"===e.text&&(t.classList.add("hidden"),n.classList.add("hidden"),null===(u=null===(d=i)||void 0===d?void 0:d.container)||void 0===u||u.classList.toggle("hidden")),r.collapsed=t.classList.contains("hidden")&&n.classList.contains("hidden")&&(null===(h=null===(l=i)||void 0===l?void 0:l.container)||void 0===h?void 0:h.classList.contains("hidden"))}))},a=0,c=Array.from(document.querySelectorAll("calcite-action"));a<c.length;a++){s(c[a])}var d=new F((function(){o.padding=_(_({},o.padding),{left:r.offsetWidth})}));return d.observe(r),d})),V.on("click",(function(e){V.hitTest(e).then((function(e){!function(e,t){q&&t.graphics.remove(q);var n=e.results.filter((function(e){return e.graphic.layer===f}))[0].graphic,i=h.geodesicBuffer(n.geometry,200,"feet"),r=new l({geometry:i,symbol:{type:"simple-fill",outline:{width:2,color:[255,170,0,1]},color:[0,0,0,0]}});q=r,t.graphics.add(r)}(e,V)}))}))}));
