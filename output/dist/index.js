define(["exports", "esri/layers/FeatureLayer", "esri/layers/MapImageLayer", "esri/Map", "esri/layers/GroupLayer", "esri/layers/ElevationLayer", "esri/widgets/LayerList", "esri/widgets/Legend", "esri/widgets/Compass", "esri/core/accessorSupport/decorators", "esri/widgets/support/widget", "esri/widgets/Measurement", "esri/widgets/Widget", "esri/Basemap", "esri/widgets/BasemapGallery/support/LocalBasemapsSource", "esri/layers/ImageryLayer", "esri/widgets/BasemapGallery", "esri/Ground", "esri/widgets/Editor", "esri/core/watchUtils", "esri/geometry/Extent", "esri/widgets/Search", "esri/widgets/Search/LayerSearchSource", "esri/popup/content/AttachmentsContent", "esri/geometry/Point", "esri/Graphic", "esri/views/SceneView", "esri/views/MapView", "esri/Viewpoint", "esri/geometry/geometryEngine", "esri/geometry", "esri/identity/IdentityManager", "esri/identity/OAuthInfo"], (function (e, t, i, r, n, a, o, s, l, d, c, p, u, h, v, f, y, m, g, w, b, _, E, S, O, M, I, x, T, A, L, P, N) {
  "use strict"; t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, i = i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i, r = r && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n, a = a && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a, o = o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o, s = s && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s, l = l && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l, p = p && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p, u = u && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u, h = h && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h, v = v && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v, f = f && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f, y = y && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y, m = m && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m, g = g && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g; var D = "default" in w ? w.default : w; b = b && Object.prototype.hasOwnProperty.call(b, "default") ? b.default : b, _ = _ && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _, E = E && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E, S = S && Object.prototype.hasOwnProperty.call(S, "default") ? S.default : S, O = O && Object.prototype.hasOwnProperty.call(O, "default") ? O.default : O, M = M && Object.prototype.hasOwnProperty.call(M, "default") ? M.default : M, I = I && Object.prototype.hasOwnProperty.call(I, "default") ? I.default : I, x = x && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x, T = T && Object.prototype.hasOwnProperty.call(T, "default") ? T.default : T, A = A && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A, P = P && Object.prototype.hasOwnProperty.call(P, "default") ? P.default : P, N = N && Object.prototype.hasOwnProperty.call(N, "default") ? N.default : N;
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

var C = function(e, t) {
    return (C = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
        })(e, t)
};

function W(e, t) {
    function i() {
        this.constructor = e
    }
    C(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
}

var V = function() {
    return (V = Object.assign || function(e) {
        for (var t, i = 1, r = arguments.length; i < r; i++)
            for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e
    }).apply(this, arguments)
};

function B(e, t, i, r) {
    var n, a = arguments.length,
        o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, r);
    else
        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (o = (a < 3 ? n(o) : a > 3 ? n(t, i, o) : n(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o
}

function G(e, t, i, r) {
    return new(i || (i = Promise))((function(n, a) {
        function o(e) {
            try {
                l(r.next(e))
            } catch (e) {
                a(e)
            }
        }

        function s(e) {
            try {
                l(r.throw(e))
            } catch (e) {
                a(e)
            }
        }

        function l(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
                e(t)
            }))).then(o, s)
        }
        l((r = r.apply(e, t || [])).next())
    }))
}

function F(e, t) {
    var i, r, n, a, o = {
        label: 0,
        sent: function() {
            if (1 & n[0]) throw n[1];
            return n[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: s(0),
        throw: s(1),
        return: s(2)
    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }), a;

    function s(a) {
        return function(s) {
            return function(a) {
                if (i) throw new TypeError("Generator is already executing.");
                for (; o;) try {
                    if (i = 1, r && (n = 2 & a[0] ? r.return : a[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, a[1])).done) return n;
                    switch (r = 0, n && (a = [2 & a[0], n.value]), a[0]) {
                        case 0:
                        case 1:
                            n = a;
                            break;
                        case 4:
                            return o.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            o.label++, r = a[1], a = [0];
                            continue;
                        case 7:
                            a = o.ops.pop(), o.trys.pop();
                            continue;
                        default:
                            if (!(n = o.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                o = 0;
                                continue
                            }
                            if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                                o.label = a[1];
                                break
                            }
                            if (6 === a[0] && o.label < n[1]) {
                                o.label = n[1], n = a;
                                break
                            }
                            if (n && o.label < n[2]) {
                                o.label = n[2], o.ops.push(a);
                                break
                            }
                            n[2] && o.ops.pop(), o.trys.pop();
                            continue
                    }
                    a = t.call(e, o)
                } catch (e) {
                    a = [6, e], r = 0
                } finally {
                    i = n = 0
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }([a, s])
        }
    }
}
var k = function(e) {
        function t(t) {
            return e.call(this) || this
        }
        return W(t, e), t.prototype.disable = function() {
            this.clear(), this.activeTool = null
        }, t.prototype.enable = function() {
            var e = this;
            this.activeTool = "2d" == this.view.type ? "distance" : "direct-line", this.stateWatch || (this.stateWatch = this.watch("viewModel.state", (function(t) {
                switch (t) {
                    case "measured":
                        e.addNodes()
                }
                console.log("Current state: ", t)
            }))), console.log(this)
        }, t.prototype.viewToggle = function(e) {
            this.clear(), this.view = e, this.container.classList.contains("hidden") || (this.activeTool = "2d" == e.type ? "distance" : "direct-line")
        }, t.prototype.addNodes = function() {
            var e, t;
            null === (e = this.gradientNode) || void 0 === e || e.remove(), this.gradientNode = null, null === (t = this.bearingNode) || void 0 === t || t.remove(), this.bearingNode = null, this.addHydraulicGradientNodes(), this.addBearingNode()
        }, t.prototype.addHydraulicGradientNodes = function() {
            var e, t, i;
            if (this.container && (this.renderNow(), "direct-line" == this.activeTool)) {
                var r = (null == this ? void 0 : this.container).querySelectorAll("section")[1];
                if (this.gradientNode = null === (e = null == r ? void 0 : r.lastElementChild) || void 0 === e ? void 0 : e.cloneNode(!0), (null === (t = null == this ? void 0 : this.gradientNode) || void 0 === t ? void 0 : t.firstElementChild) && (null === (i = null == this ? void 0 : this.gradientNode) || void 0 === i ? void 0 : i.lastElementChild)) {
                    this.gradientNode.firstElementChild.innerText = "Hydraulic Gradient";
                    var n = (this.viewModel.activeViewModel.tool.verticalDistance.value / this.viewModel.activeViewModel.tool.horizontalDistance.value / 3).toFixed(4);
                    this.gradientNode.lastElementChild.innerText = n
                }
                r.appendChild(this.gradientNode)
            }
        }, t.prototype.addBearingNode = function() {
            var e, t, i, r, n, a, o, s;
            if ("distance" === this.activeTool) {
                var l = null === (e = this.viewModel.activeViewModel.measurement) || void 0 === e ? void 0 : e.geometry;
                s = null == l ? void 0 : l.paths[l.paths.length - 1].slice(l.paths[l.paths.length - 1].length - 2)
            } else if ("direct-line" === this.activeTool) {
                var d = null === (r = null === (i = (null === (t = this.viewModel) || void 0 === t ? void 0 : t.activeViewModel).tool) || void 0 === i ? void 0 : i.model) || void 0 === r ? void 0 : r.startPoint,
                    c = null === (o = null === (a = (null === (n = this.viewModel) || void 0 === n ? void 0 : n.activeViewModel).tool) || void 0 === a ? void 0 : a.model) || void 0 === o ? void 0 : o.endPoint;
                s = [
                    [d.x, d.y],
                    [c.x, c.y]
                ]
            }
            var p = (null == this ? void 0 : this.container).querySelectorAll("section")[1];
            this.bearingNode = p.firstElementChild.cloneNode(!0), this.bearingNode.firstElementChild.innerText = "Bearing", this.bearingNode.lastElementChild.innerText = this.computeAngle(s), p.appendChild(this.bearingNode)
        }, t.prototype.computeAngle = function(e) {
            var t = e[0],
                i = e[1],
                r = parseFloat((180 * Math.atan2(i[1] - t[1], i[0] - t[0]) / Math.PI).toFixed(1));
            return r < 0 && (r += 360), 0 == r ? "E" : r > 0 && r <= 90 ? "N " + (90 != r ? (90 - r).toFixed(1) + "° E" : "") : r > 90 && r < 180 ? "N " + Math.abs(90 - r).toFixed(1) + "° W" : 180 == r ? "W" : r > 180 && r <= 270 ? "S " + (180 != r ? (270 - r).toFixed(1) + "° W" : "") : r > 270 ? "S " + (360 - r != 270 ? (r - 270).toFixed(1) : "") + "° E" : "Something is wrong"
        }, B([d.property(), c.renderable()], t.prototype, "gradientNode", void 0), B([d.property(), c.renderable()], t.prototype, "bearingNode", void 0), B([d.property(), c.renderable()], t.prototype, "loadingSpan", void 0), B([d.property()], t.prototype, "stateWatch", void 0), t = B([d.subclass("esri.widgets.Measure")], t)
    }(d.declared(p)),
    j = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            return i.customBasemaps = [{
                title: "Street Map",
                id: "streetMap",
                layers: [{
                    type: "map-image",
                    params: {
                        url: "http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/HillshadeBasemap/MapServer"
                    }
                }]
            }, {
                title: "2017 Aerial",
                id: "stateNAIP201710",
                layers: [{
                    type: "imagery",
                    params: {
                        url: "http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2017/ImageServer",
                        noData: 0
                    }
                }]
            }, {
                title: "Hi-Res (date varies)",
                id: "esriImagery",
                layers: [{
                    type: "map-image",
                    params: {
                        url: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
                    }
                }]
            }, {
                title: "2015 Aerial",
                id: "naip2015",
                layers: [{
                    type: "imagery",
                    params: {
                        url: "http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2015/ImageServer"
                    }
                }]
            }, {
                title: "2013 Aerial",
                id: "naip2013",
                layers: [{
                    type: "imagery",
                    params: {
                        url: "http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2013/ImageServer"
                    }
                }]
            }, {
                title: "2012 Bozeman Aerial",
                id: "bozeman2012",
                layers: [{
                    type: "map-image",
                    params: {
                        url: "http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",
                        sublayers: [{
                            id: 0
                        }]
                    }
                }]
            }, {
                title: "2011 Aerial",
                id: "naip2011",
                layers: [{
                    type: "imagery",
                    params: {
                        url: "http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2011/ImageServer"
                    }
                }]
            }, {
                title: "2011 Color Infrared",
                id: "cir2011",
                layers: [{
                    type: "map-image",
                    params: {
                        url: "http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",
                        sublayers: [{
                            id: 1
                        }]
                    }
                }]
            }, {
                title: "2009 Aerial",
                id: "naip2009",
                layers: [{
                    type: "imagery",
                    params: {
                        url: "http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2009/ImageServer"
                    }
                }]
            }, {
                title: "2009 Color Infrared",
                id: "cir2009",
                layers: [{
                    type: "map-image",
                    params: {
                        url: "http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",
                        sublayers: [{
                            id: 2
                        }]
                    }
                }]
            }, {
                title: "2007 Bozeman Aerial",
                id: "bozeman2007",
                layers: [{
                    type: "map-image",
                    params: {
                        url: "http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",
                        sublayers: [{
                            id: 3
                        }]
                    }
                }]
            }, {
                title: "2005 Aerial",
                id: "naip2005",
                layers: [{
                    type: "imagery",
                    params: {
                        url: "http://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/NAIP_2005/ImageServer"
                    }
                }]
            }, {
                title: "2005 Color Infrared",
                id: "cir2005",
                layers: [{
                    type: "map-image",
                    params: {
                        url: "http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",
                        sublayers: [{
                            id: 4
                        }]
                    }
                }]
            }, {
                title: "2004 WYS Aerial",
                id: "wys2004",
                layers: [{
                    type: "map-image",
                    params: {
                        url: "http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",
                        title: "piss",
                        sublayers: [{
                            id: 5
                        }]
                    }
                }]
            }, {
                title: "2004 Bozeman Aerial",
                id: "bozeman2004",
                layers: [{
                    type: "map-image",
                    params: {
                        url: "http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",
                        sublayers: [{
                            id: 6
                        }]
                    }
                }]
            }, {
                title: "2003 Big Sky Aerial",
                id: "bigsky2003",
                layers: [{
                    type: "map-image",
                    params: {
                        id: "fuck",
                        title: "shit",
                        url: "http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",
                        sublayers: [{
                            id: 7
                        }]
                    }
                }]
            }, {
                title: "2001 Color Infrared",
                id: "cir2001",
                layers: [{
                    type: "map-image",
                    params: {
                        url: "http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",
                        sublayers: [{
                            id: 8
                        }]
                    }
                }]
            }, {
                title: "1990s Aerial",
                id: "doqq1990s",
                layers: [{
                    type: "imagery",
                    params: {
                        url: "http://gisservicemt.gov/arcgis/rest/services/MSL/DOQQ_1990s/ImageServer"
                    }
                }]
            }, {
                title: "State Topo",
                id: "mtTopo",
                layers: [{
                    type: "map-image",
                    params: {
                        url: "https://gisservicemt.gov/arcgis/rest/services/MSL/HistoricTopo/MapServer"
                    }
                }]
            }, {
                title: "County Topo",
                id: "gcTopo",
                layers: [{
                    type: "map-image",
                    params: {
                        url: "http://gis.gallatin.mt.gov/arcgis/rest/services/Basemaps/EHSAerials/MapServer",
                        sublayers: [{
                            id: 9
                        }]
                    }
                }]
            }], "3d" == (null == t ? void 0 : t.initView.type) ? (i.sceneView = t.initView, i.mapView = t.otherView) : (i.sceneView = null == t ? void 0 : t.otherView, i.mapView = null == t ? void 0 : t.initView), i.container = t.container, i.gallery = new y({
                view: null == t ? void 0 : t.initView
            }), i
        }
        return W(t, e), t.prototype.render = function() {
            return this.gallery.render()
        }, t.prototype.viewToggle = function(e) {
            var t, i, r = this.gallery.activeBasemap.toJSON();
            r.baseLayers = r.baseMapLayers, this.gallery.view = e, null === (t = this.gallery.activeBasemap) || void 0 === t || t.destroy(), null === (i = this.gallery.view.basemapView) || void 0 === i || i.destroy()
        }, t.prototype.addCustomBasemaps = function() {
            var e = [];
            return this.customBasemaps.forEach((function(t) {
                var r, n = [];
                null === (r = t.layers) || void 0 === r || r.forEach((function(e) {
                    var r;
                    switch (e.type) {
                        case "imagery":
                            r = new f(e.params);
                            break;
                        case "map-image":
                            r = new i(e.params);
                            break;
                        default:
                            console.log("fuck"), console.log(t)
                    }
                    r && n.push(r)
                })), n && e.push(new h({
                    baseLayers: n,
                    id: t.id,
                    title: t.title
                }))
            })), new v({
                basemaps: e
            })
        }, B([d.property()], t.prototype, "customBasemaps", void 0), B([d.property()], t.prototype, "container", void 0), t = B([d.subclass("esri.widgets.BasemapGallery")], t)
    }(d.declared(u)),
    H = "view-toggle esri-component esri-widget--button esri-widget esri-interactive",
    R = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            return i.ground = new m({
                layers: [ze]
            }), "3d" == (null == t ? void 0 : t.initView.type) ? (i.sceneView = t.initView, i.mapView = t.otherView, i.state = "2D") : (i.sceneView = null == t ? void 0 : t.otherView, i.mapView = null == t ? void 0 : t.initView, i.state = "3D"), i.activeView = null == t ? void 0 : t.initView, i
        }
        return W(t, e), t.prototype.render = function() {
            return c.tsx("div", {
                bind: this,
                class: H,
                role: "button",
                type: "button",
                id: "switch-btn",
                value: this.state,
                onclick: this.toggle
            }, c.tsx("span", {
                id: "button_label"
            }, this.state))
        }, t.prototype.switchView = function(e) {
            var t, i, r = this.activeView.viewpoint.clone();
            for (var n in this.widgets)
                if (this.widgets[n].viewToggle) null === (i = (t = this.widgets[n]).viewToggle) || void 0 === i || i.call(t, e);
                else {
                    if (["editor", "legend"].indexOf(n) >= 0) continue;
                    this.widgets[n].view = e
                } this.activeView.container.classList.toggle("hidden"), e.container.classList.remove("hidden"), e.ui.add(this, "top-left"), this.activeView = e, e.viewpoint = r
        }, t.prototype.toggle = function() {
            var e = "3D" === this.state ? "2D" : "3D";
            this.set("state", e), this.switchView("2D" == e ? this.sceneView : this.mapView)
        }, B([d.property()], t.prototype, "widgets", void 0), B([d.property()], t.prototype, "activeView", void 0), B([d.property(), c.renderable()], t.prototype, "state", void 0), t = B([d.subclass("esri.widgets.ViewToggle")], t)
    }(d.declared(u)),
    z = function(e) {
        function t(t) {
            return e.call(this) || this
        }
        return W(t, e), t.prototype.makeArcGISWidget = function() {
            var e;
            0 === this.container.children.length && this.container.appendChild(document.createElement("div")), this.arcGISEditor = new g({
                view: this.view,
                layerInfos: this.layerInfos,
                container: this.container.firstElementChild
            }), w.watch(null === (e = this.arcGISEditor) || void 0 === e ? void 0 : e.viewModel, "state", this.onAwaitingFeature)
        }, t.prototype.postInitialize = function() {
            this.makeArcGISWidget()
        }, t.prototype.fireReady = function() {
            this.emit("ready", this)
        }, t.prototype.render = function() {
            return this.arcGISEditor ? this.arcGISEditor.container : c.tsx("div", null, "editing not supported in 3d")
        }, t.prototype.viewToggle = function(e) {
            var t = this;
            e.hasOwnProperty("camera") ? this.arcGISEditor.destroy() : setTimeout((function() {
                t.makeArcGISWidget()
            }), 3e3)
        }, t.prototype.onAwaitingFeature = function(e) {
            var t, i;
            ["awaiting-feature-to-update", "awaiting-feature-to-create"].indexOf(e) >= 0 && (null === (i = null === (t = this.view) || void 0 === t ? void 0 : t.popup) || void 0 === i || i.close())
        }, B([d.property()], t.prototype, "container", void 0), B([d.property()], t.prototype, "layerInfos", void 0), B([d.property()], t.prototype, "view", void 0), t = B([d.subclass("esri.widgets.Editor")], t)
    }(d.declared(u)),
    q = new t({
        portalItem: {
            id: "49e1606446f34f93807b1fc437be53c9"
        },
        outFields: ["*"],
        title: "Wastewater Treatment Systems",
        id: "wwtp",
        displayField: "GCCHDWWTP",
        opacity: .8,
        popupTemplate: {
            title: "Permit Number: {GCCHDWWTP}",
            actions: [{
                title: "Get permit",
                id: "get-permit",
                className: "esri-icon-documentation"
            }, {
                title: "Edit feature",
                id: "edit-this",
                className: "esri-icon-edit"
            }],
            content: [{
                type: "fields",
                fieldInfos: []
            }, new S({
                displayType: "list"
            })]
        }
    });
q.when((function() {
    q.types[0].templates[0].prototype.attributes && (q.types[0].templates[0].prototype.attributes.SYSTEMTYPE = "INDIV", q.types[0].templates[0].prototype.attributes.GPS = "N", q.types[0].templates[0].prototype.attributes.UPDATED = new Date);
    var e = q.fields.filter((function(e) {
        return "FID" != e.name
    })).map((function(e) {
        return q.popupTemplate.content[0].fieldInfos.push({
            fieldName: e.name,
            label: e.alias
        }), {
            description: e.description,
            domain: e.domain,
            editable: e.editable,
            name: e.name,
            maxLength: e.length,
            label: e.alias
        }
    }));
    ee(q, e)
}));

const symbol = {
  type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
  style: 'circle',
  color: 'black',
  size: '6px' // pixels
};

const symbol1 = {
  type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
  style: 'circle',
  color: 'red',
  size: '6px' // pixels
};

const symbol2 = {
  type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
  style: 'circle',
  color: 'green',
  size: '6px' // pixels
};

const symbol3 = {
  type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
  style: 'circle',
  color: 'yellow',
  size: '6px' // pixels
};

const symbol4 = {
  type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
  style: 'circle',
  color: 'blue',
  size: '6px' // pixels
};

const cosaRenderer = {
  type: 'unique-value',
  field: 'COSAstatus',
  defaultSymbol: symbol,
  uniqueValueInfos: [
    {
      value: 'Completed - succeeded',
      symbol: symbol2
    },
    {
      value: 'Active',
      symbol: symbol4
    },
    {
      value: 'Pending',
      symbol: symbol3
    },
    {
      value: 'Completed - failed',
      symbol: symbol1
    }
  ]
};

var CC = new t({
  url: 'https://services8.arcgis.com/VY7LGmlsl8pbHxE5/arcgis/rest/services/COSA_review_status/FeatureServer',
  outFields: ['*'],
  title: 'COSA Review Status',
  visible: true,
  renderer: cosaRenderer
});

var U = new t({
    portalItem: {
        id: "1f9fddd5d5b04d86bc2e3166004ead93"
    },
    renderer: {
        type: "simple",
        symbol: {
            type: "simple-marker",
            style: "triangle",
            outline: {
                width: 1.25,
                color: [2, 120, 240, 1]
            },
            angle: 60,
            color: [5, 207, 255, .8]
        }
    },
    outFields: ["*"],
    title: "Groundwater Monitoring Wells",
    id: "gwm",
    displayField: "GW_MONITOR",
    opacity: .8
});
U.when((function() {
    var e = U.fields.filter((function(e) {
        return "FID" !== e.name
    })).map((function(e) {
        return {
            description: e.description,
            domain: e.domain,
            editable: e.editable,
            name: e.name,
            maxLength: e.length,
            label: e.alias
        }
    }));
    ee(U, e)
}));
var Z = new t({
    portalItem: {
        id: "940b0c5b4fa64f44ab23f3bf19396e75"
    },
    outFields: ["*"],
    title: "Water Supply Systems",
    id: "wss",
    displayField: "GW_MONITOR"
});
Z.when((function() {
    var e = Z.fields.filter((function(e) {
        return "FID" !== e.name
    })).map((function(e) {
        return {
            description: e.description,
            domain: e.domain,
            editable: e.editable,
            name: e.name,
            maxLength: e.length,
            label: e.alias
        }
    }));
    ee(Z, e)
}));
var Y = new t({
    portalItem: {
        id: "9d8ecc343fad4ffdb5c094647f78690e"
    }
});
Y.when((function() {
    var e = Y.fields.filter((function(e) {
        return "Notes" === e.name
    })).map((function(e) {
        return {
            description: e.description,
            domain: e.domain,
            editable: e.editable,
            name: e.name,
            maxLength: e.length,
            label: e.alias,
            editorType: "text-area"
        }
    }));
    null == te || te.layerInfos.push({
        layer: Y,
        fieldConfig: e
    })
}));
var J = new t({
    portalItem: {
        id: "e227951905de4252af848e182af8e39a"
    }
});
J.when((function() {
    var e = J.fields.filter((function(e) {
        return ["PROPDESC", "NOTES"].indexOf(e.name) >= 0
    })).map((function(e) {
        return {
            description: e.description,
            domain: e.domain,
            editable: e.editable,
            name: e.name,
            maxLength: e.length,
            label: e.alias,
            editorType: "text-area"
        }
    }));
    null == te || te.layerInfos.push({
        layer: J,
        fieldConfig: e
    })
}));
var Q = new t({
    portalItem: {
        id: "11e9b60f11df40e5bd00841d001be3ab"
    },
    id: "septageSites",
    visible: !1
});
Q.when((function() {
    var e = Q.fields.filter((function(e) {
        return "OBJECTID" !== e.name && !e.name.startsWith("Shape_")
    })).map((function(e) {
        return {
            description: e.description,
            domain: e.domain,
            editable: e.editable,
            name: e.name,
            maxLength: e.length,
            label: e.alias
        }
    }));
    null == te || te.layerInfos.push({
        layer: Q,
        fieldConfig: e
    })
}));
var K = new t({
    portalItem: {
        id: "74b93b8d191d4895b1e79a01a8fa46a4"
    },
    id: "hydraulicGradient",
    visible: !1
});
K.when((function() {
    var e = K.fields.filter((function(e) {
        return "OBJECTID" !== e.name
    })).map((function(e) {
        var t = "NOTES" === e.name ? "text-area" : "text-box";
        return {
            description: e.description,
            domain: e.domain,
            editable: e.editable,
            name: e.name,
            maxLength: e.length,
            label: e.alias,
            editorType: t
        }
    }));
    null == te || te.layerInfos.push({
        layer: K,
        fieldConfig: e
    })
}));
var X = new t({
    portalItem: {
        id: "7be2de4e0590402e9e53c522e25e67dc"
    },
    id: "hydraulicConductivity",
    visible: !1
});
X.when((function() {
    var e = X.fields.filter((function(e) {
        return "OBJECTID" !== e.name
    })).map((function(e) {
        var t = "NOTES" === e.name ? "text-area" : "text-box";
        return {
            description: e.description,
            domain: e.domain,
            editable: e.editable,
            name: e.name,
            maxLength: e.length,
            label: e.alias,
            editorType: t
        }
    }));
    null == te || te.layerInfos.push({
        layer: X,
        fieldConfig: e
    })
}));
var $ = new t({
    portalItem: {
        id: "7c8d12ed87244151b0501af48ae4da4f"
    },
    id: "artificialDrain",
    visible: !1
});

function ee(e, t) {
    null == te || te.layerInfos.push({
        layer: e,
        fieldConfig: t
    })
}
$.when((function() {
    var e = $.fields.filter((function(e) {
        return "OBJECTID" !== e.name
    })).map((function(e) {
        var t = "NOTES" === e.name ? "text-area" : "text-box";
        return {
            description: e.description,
            domain: e.domain,
            editable: e.editable,
            name: e.name,
            maxLength: e.length,
            label: e.alias,
            editorType: t
        }
    }));
    null == te || te.layerInfos.push({
        layer: $,
        fieldConfig: e
    })
}));
var te, ie, re = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            return i.addWWTSLayer(), i.allSources.on("after-add", (function(e) {
                "ArcGIS World Geocoding Service" === e.item.name && (e.item.filter = {
                    geometry: new b({
                        xmin: -12446771.509102838,
                        ymin: 5538979.1157324435,
                        xmax: -12332398.764615571,
                        ymax: 5811320.651543414,
                        spatialReference: {
                            wkid: 102100
                        }
                    })
                })
            })), i.on("select-result", (function(e) {
                this.view.goTo({
                    zoom: 18
                })
            })), i
        }
        return W(t, e), t.prototype.addWWTSLayer = function() {
            this.sources.add(new E({
                layer: q,
                searchFields: ["GCCHDWWTP"],
                displayField: "GCCHDWWTP",
                exactMatch: !0,
                name: "Permit Number",
                placeholder: "enter a permit number",
                zoomScale: 1e3
            }))
        }, t.prototype.viewToggle = function(e) {
            this.view = e, this.view.ui.add(this, {
                position: "top-left",
                index: 0
            })
        }, B([d.property()], t.prototype, "sceneView", void 0), B([d.property()], t.prototype, "container", void 0), t = B([d.subclass("esri.widgets.BasemapGallery")], t)
    }(d.declared(_)),
    ne = "esri-widget",
    ae = "point-list",
    oe = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            return i.activated = !1, i.state = {}, i.cursorLocation = new O, i.graphicsList = [], i.eventHandlers = [], i
        }
        return W(t, e), t.prototype.postInitialize = function() {
            var e = this;
            this.state.x = this.view.center.x, this.state.y = this.view.center.y, w.watch(this, "activated", (function(t) {
                e._onActivation(t)
            }))
        }, t.prototype.render = function() {
            var e = this,
                t = this.cursorLocation,
                i = t.latitude,
                r = t.longitude,
                n = {
                    textShadow: this.state.interacting ? "-1px 0 red, 0 1px red, 1px 0 red, 0 -1px red" : ""
                },
                a = [];
            return this.graphicsList.filter((function(e, t) {
                return t % 2 == 0
            })).forEach((function(t) {
                var i = t.geometry;
                a.push(c.tsx("li", {
                    key: e.graphicsList.length
                }, c.tsx("span", null, "longitude: ", Number(i.longitude).toFixed(6)), c.tsx("br", null), c.tsx("span", null, "latitude: ", Number(i.latitude).toFixed(6))))
            })), c.tsx("div", {
                bind: this,
                class: ne,
                styles: n
            }, c.tsx("ol", {
                class: ae
            }, a), c.tsx("p", null, c.tsx("span", null, "Cursor:"), c.tsx("br", null), c.tsx("span", null, "longitude: ", Number(r).toFixed(6)), c.tsx("br", null), c.tsx("span", null, "latitude: ", Number(i).toFixed(6))))
        }, t.prototype._onActivation = function(e) {
            var t = this;
            e ? (this.eventHandlers = [this.view.on("pointer-move", (function(e) {
                t._onCursorMove(e)
            })), this.view.on("click", (function(e) {
                t._onClick(e)
            })), this.view.popup.watch("visible", (function(e) {
                e && t.view.popup.close()
            }))], this.view.surface.style.cursor = "crosshair") : (this.eventHandlers.forEach((function(e) {
                e.remove(), t.view.surface.style.cursor = ""
            })), this.graphicsList.forEach((function(e) {
                t.view.graphics.remove(e)
            }), this), this.graphicsList = [])
        }, t.prototype._onCursorMove = function(e) {
            this.cursorLocation = this.view.toMap(e)
        }, t.prototype._onClick = function(e) {
            var t = new M({
                    geometry: e.mapPoint,
                    symbol: {
                        type: "simple-marker",
                        outline: {
                            width: 2.5,
                            color: [255, 186, 13, 1]
                        },
                        color: [255, 209, 117, 1]
                    }
                }),
                i = new M({
                    geometry: e.mapPoint,
                    symbol: {
                        type: "text",
                        text: this.graphicsList.length / 2 + 1,
                        yoffset: -3
                    }
                });
            this.view.graphics.addMany([t, i]), this.graphicsList.push(t, i)
        }, t.prototype.viewToggle = function(e) {
            this.view.graphics.removeMany(this.graphicsList), this.eventHandlers.forEach((function(e) {
                e.remove()
            })), this.view = e, this.view.graphics.addMany(this.graphicsList), this.activated && this._onActivation(!0)
        }, B([d.property(), c.renderable()], t.prototype, "view", void 0), B([d.property(), c.renderable()], t.prototype, "activated", void 0), B([d.property(), c.renderable()], t.prototype, "state", void 0), B([d.property(), c.renderable()], t.prototype, "cursorLocation", void 0), B([d.property(), c.renderable()], t.prototype, "container", void 0), B([d.property()], t.prototype, "cursorMoveHandle", void 0), B([d.property()], t.prototype, "clickHandle", void 0), B([d.property(), c.renderable()], t.prototype, "graphicsList", void 0), B([d.property()], t.prototype, "eventHandlers", void 0), t = B([d.subclass("esri.widgets.Widget")], t)
    }(d.declared(u));
var se = function() {
        if ("undefined" != typeof Map) return Map;

        function e(e, t) {
            var i = -1;
            return e.some((function(e, r) {
                return e[0] === t && (i = r, !0)
            })), i
        }
        return function() {
            function t() {
                this.__entries__ = []
            }
            return Object.defineProperty(t.prototype, "size", {
                get: function() {
                    return this.__entries__.length
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.get = function(t) {
                var i = e(this.__entries__, t),
                    r = this.__entries__[i];
                return r && r[1]
            }, t.prototype.set = function(t, i) {
                var r = e(this.__entries__, t);
                ~r ? this.__entries__[r][1] = i : this.__entries__.push([t, i])
            }, t.prototype.delete = function(t) {
                var i = this.__entries__,
                    r = e(i, t);
                ~r && i.splice(r, 1)
            }, t.prototype.has = function(t) {
                return !!~e(this.__entries__, t)
            }, t.prototype.clear = function() {
                this.__entries__.splice(0)
            }, t.prototype.forEach = function(e, t) {
                void 0 === t && (t = null);
                for (var i = 0, r = this.__entries__; i < r.length; i++) {
                    var n = r[i];
                    e.call(t, n[1], n[0])
                }
            }, t
        }()
    }(),
    le = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
    de = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
    ce = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(de) : function(e) {
        return setTimeout((function() {
            return e(Date.now())
        }), 1e3 / 60)
    };
var pe = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
    ue = "undefined" != typeof MutationObserver,
    he = function() {
        function e() {
            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e, t) {
                var i = !1,
                    r = !1,
                    n = 0;

                function a() {
                    i && (i = !1, e()), r && s()
                }

                function o() {
                    ce(a)
                }

                function s() {
                    var e = Date.now();
                    if (i) {
                        if (e - n < 2) return;
                        r = !0
                    } else i = !0, r = !1, setTimeout(o, t);
                    n = e
                }
                return s
            }(this.refresh.bind(this), 20)
        }
        return e.prototype.addObserver = function(e) {
            ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
        }, e.prototype.removeObserver = function(e) {
            var t = this.observers_,
                i = t.indexOf(e);
            ~i && t.splice(i, 1), !t.length && this.connected_ && this.disconnect_()
        }, e.prototype.refresh = function() {
            this.updateObservers_() && this.refresh()
        }, e.prototype.updateObservers_ = function() {
            var e = this.observers_.filter((function(e) {
                return e.gatherActive(), e.hasActive()
            }));
            return e.forEach((function(e) {
                return e.broadcastActive()
            })), e.length > 0
        }, e.prototype.connect_ = function() {
            le && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), ue ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, e.prototype.disconnect_ = function() {
            le && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, e.prototype.onTransitionEnd_ = function(e) {
            var t = e.propertyName,
                i = void 0 === t ? "" : t;
            pe.some((function(e) {
                return !!~i.indexOf(e)
            })) && this.refresh()
        }, e.getInstance = function() {
            return this.instance_ || (this.instance_ = new e), this.instance_
        }, e.instance_ = null, e
    }(),
    ve = function(e, t) {
        for (var i = 0, r = Object.keys(t); i < r.length; i++) {
            var n = r[i];
            Object.defineProperty(e, n, {
                value: t[n],
                enumerable: !1,
                writable: !1,
                configurable: !0
            })
        }
        return e
    },
    fe = function(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView || de
    },
    ye = Ee(0, 0, 0, 0);

function me(e) {
    return parseFloat(e) || 0
}

function ge(e) {
    for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
    return t.reduce((function(t, i) {
        return t + me(e["border-" + i + "-width"])
    }), 0)
}

function we(e) {
    var t = e.clientWidth,
        i = e.clientHeight;
    if (!t && !i) return ye;
    var r = fe(e).getComputedStyle(e),
        n = function(e) {
            for (var t = {}, i = 0, r = ["top", "right", "bottom", "left"]; i < r.length; i++) {
                var n = r[i],
                    a = e["padding-" + n];
                t[n] = me(a)
            }
            return t
        }(r),
        a = n.left + n.right,
        o = n.top + n.bottom,
        s = me(r.width),
        l = me(r.height);
    if ("border-box" === r.boxSizing && (Math.round(s + a) !== t && (s -= ge(r, "left", "right") + a), Math.round(l + o) !== i && (l -= ge(r, "top", "bottom") + o)), ! function(e) {
            return e === fe(e).document.documentElement
        }(e)) {
        var d = Math.round(s + a) - t,
            c = Math.round(l + o) - i;
        1 !== Math.abs(d) && (s -= d), 1 !== Math.abs(c) && (l -= c)
    }
    return Ee(n.left, n.top, s, l)
}
var be = "undefined" != typeof SVGGraphicsElement ? function(e) {
    return e instanceof fe(e).SVGGraphicsElement
} : function(e) {
    return e instanceof fe(e).SVGElement && "function" == typeof e.getBBox
};

function _e(e) {
    return le ? be(e) ? function(e) {
        var t = e.getBBox();
        return Ee(0, 0, t.width, t.height)
    }(e) : we(e) : ye
}

function Ee(e, t, i, r) {
    return {
        x: e,
        y: t,
        width: i,
        height: r
    }
}
var Se = function() {
        function e(e) {
            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ee(0, 0, 0, 0), this.target = e
        }
        return e.prototype.isActive = function() {
            var e = _e(this.target);
            return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
        }, e.prototype.broadcastRect = function() {
            var e = this.contentRect_;
            return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
        }, e
    }(),
    Oe = function(e, t) {
        var i, r, n, a, o, s, l, d = (r = (i = t).x, n = i.y, a = i.width, o = i.height, s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, l = Object.create(s.prototype), ve(l, {
            x: r,
            y: n,
            width: a,
            height: o,
            top: n,
            right: r + a,
            bottom: o + n,
            left: r
        }), l);
        ve(this, {
            target: e,
            contentRect: d
        })
    },
    Me = function() {
        function e(e, t, i) {
            if (this.activeObservations_ = [], this.observations_ = new se, "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = e, this.controller_ = t, this.callbackCtx_ = i
        }
        return e.prototype.observe = function(e) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof fe(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) || (t.set(e, new Se(e)), this.controller_.addObserver(this), this.controller_.refresh())
            }
        }, e.prototype.unobserve = function(e) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof fe(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
            }
        }, e.prototype.disconnect = function() {
            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, e.prototype.gatherActive = function() {
            var e = this;
            this.clearActive(), this.observations_.forEach((function(t) {
                t.isActive() && e.activeObservations_.push(t)
            }))
        }, e.prototype.broadcastActive = function() {
            if (this.hasActive()) {
                var e = this.callbackCtx_,
                    t = this.activeObservations_.map((function(e) {
                        return new Oe(e.target, e.broadcastRect())
                    }));
                this.callback_.call(e, t, e), this.clearActive()
            }
        }, e.prototype.clearActive = function() {
            this.activeObservations_.splice(0)
        }, e.prototype.hasActive = function() {
            return this.activeObservations_.length > 0
        }, e
    }(),
    Ie = "undefined" != typeof WeakMap ? new WeakMap : new se,
    xe = function e(t) {
        if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var i = he.getInstance(),
            r = new Me(t, i, this);
        Ie.set(this, r)
    };
["observe", "unobserve", "disconnect"].forEach((function(e) {
    xe.prototype[e] = function() {
        var t;
        return (t = Ie.get(this))[e].apply(t, arguments)
    }
}));
var Te, Ae, Le = void 0 !== de.ResizeObserver ? de.ResizeObserver : xe;

function Pe() {
    for (var e = 0, t = Ae; e < t.length; e++) {
        var i = t[e];
        "Edit" === i.text && te.container.classList.contains("hidden") && i.click()
    }
}
document.getElementById("version").innerText = "v:1.3.6";
var Ne = new t({
        portalItem: {
            id: "d88f46d2f52a4a6daa73ba10e605d761"
        },
        listMode: "hide",
        minScale: 24001,
        legendEnabled: !1
    }),
    De = new n({
        layers: [new i({
            portalItem: {
                id: "9595acf80a45479890552f8d579bb763"
            },
            listMode: "hide"
        }), Ne],
        title: "Addresses",
        id: "addressLayers",
        visible: !0
    }),
    Ce = new i({
        url: "https://gis.gallatin.mt.gov/arcgis/rest/services/MapServices/EHS/MapServer",
        title: "Miscellaneous",
        visible: !1
    });
Ce.when().then((function() {
    Ce.sublayers = Ce.sublayers.filter((function(e) {
        return e.id >= 5 && 11 != e.id
    }))
}));
var We = new t({
        url: "http://deqgis.mt.gov/arcgis/rest/services/Reference/Ground_Water/MapServer/0",
        outFields: ["*"],
        title: "GWIC Water Wells",
        visible: !1,
        id: "gwic",
        popupTemplate: {
            title: "GWIC Well: {MNUMBER}",
            content: function(e) {
                var t = e.graphic;
                return G(this, void 0, void 0, (function() {
                    var e;
                    return F(this, (function(i) {
                        return (e = document.createElement("div")).innerHTML = "<hr><table><tr><td>Site Name:</td><td>" + t.attributes.SITE_NAME + "</td></tr><tr><td>Geomethod:</td><td>" + t.attributes.GEOMETHOD + "</td></tr> </table><a href='http://mbmggwic.mtech.edu/sqlserver/v11/reports/SiteSummary.asp?gwicid=" + t.attributes.MNUMBER + "' target=_blank>View Well Log Report</a><br/>", [2, e]
                    }))
                }))
            }
        }
    }),
    Ve = new t({
        url: "http://deqgis.mt.gov/arcgis/rest/services/DEQ/DST/MapServer/2",
        outFields: ["*"],
        title: "DST Response Sites",
        visible: !0,
        id: "dstResponseSites"
    }),
    Be = new n({
        layers: [new t({
            url: "http://deqgis.mt.gov/arcgis/rest/services/DEQ/DST/MapServer/9",
            outFields: ["*"],
            title: "DST SWDAR Locations",
            visible: !0,
            id: "dstSWDARLocations"
        }), Ve],
        title: "DEQ Layers",
        id: "deqLayers",
        visible: !1
    }),
    Ge = new i({
        url: "https://gisweb.bozeman.net/arcgis/rest/services/COB_Utilities/Wastewater_Utility/MapServer",
        title: "Bozeman Wastewater",
        id: "bznWastewater",
        visible: !0
    });
Ge.when().then((function() {
    var e, t, i;
    (null === (t = null === (e = Ge.sublayers) || void 0 === e ? void 0 : e.getItemAt(0)) || void 0 === t ? void 0 : t.sublayers) && "Wastewater Collection System" === (null === (i = Ge.sublayers) || void 0 === i ? void 0 : i.getItemAt(0).title) && (Ge.sublayers = Ge.sublayers.getItemAt(0).sublayers)
}));
var Fe, ke = new t({
        url: "http://gis.gallatin.mt.gov/arcgis/rest/services/MapServices/EHSBase/MapServer/11",
        outFields: ["*"],
        title: "Water & Sewer Districts",
        visible: !0,
        id: "waterSewerDistricts"
    }),
    je = new n({
        title: "Public Systems",
        id: "publicWastewaterSystems",
        visible: !1,
        layers: [Ge, ke]
    }),
    He = new i({
        title: "Flood Hazard Zones",
        url: "https://hazards.fema.gov/gis/nfhl/rest/services/public/NFHL/MapServer",
        id: "floodHazardZones",
        opacity: .5,
        visible: !1,
        sublayers: [{
            id: 28,
            visible: !0,
            popupEnabled: !0,
            listMode: "hide",
            popupTemplate: {
                title: "Flood Hazard Zone",
                content: [{
                    type: "fields",
                    fieldInfos: [{
                        fieldName: "VERSION_ID",
                        label: "Version"
                    }, {
                        fieldName: "FLD_ZONE",
                        label: "Flood Zone"
                    }, {
                        fieldName: "ZONE_SUBTY",
                        label: "Zone Subtype"
                    }, {
                        fieldName: "STUDY_TYP",
                        label: "Study Type"
                    }, {
                        fieldName: "DFIRM_ID",
                        label: "DFIRM ID"
                    }]
                }]
            }
        }]
    }),
    Re = new t({
        portalItem: {
            id: "adb80ad0ba814391a68dd52b8bf27ada"
        },
        id: "parcels"
    }),
    ze = new a({
        url: "https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",
        id: "ground"
    }),
    qe = new r({
        basemap: "satellite",
        ground: {
            layers: [ze]
        },
        layers: [Re, He, J, je, Ce, Be, $, K, X, Q, CC, We, Y, Z, U, q, De]
    });

function Ue(e) {
    e.graphics.remove(Fe)
}! function e(t) {
    t.forEach((function(t) {
        "map-image" === t.type && t.when().then((function() {
            ! function e(t) {
                var i;
                null === (i = null == t ? void 0 : t.sublayers) || void 0 === i || i.forEach((function(t) {
                    t.sublayers ? e(t) : function(e) {
                        e.popupTemplate || e.createFeatureLayer().then((function(e) {
                            return e.load()
                        })).then((function(t) {
                            e.popupTemplate = t.createPopupTemplate()
                        }))
                    }(t)
                }))
            }(t)
        })), t.layers && e(t.layers)
    }))
}(qe.layers);
var Ze = new N({
    appId: "P9589LByKLuOWflM",
    popup: !1
});
P.registerOAuthInfos([Ze]);
var Ye = new T({
        scale: 288895,
        targetGeometry: new L.Point({
            spatialReference: {
                wkid: 102100
            },
            x: -12377880,
            y: 5736061
        })
    }),
    Je = new I({
        container: "sceneViewDiv",
        map: qe,
        viewpoint: Ye,
        popup: {
            defaultPopupTemplateEnabled: !0,
            spinnerEnabled: !1
        },
        qualityProfile: "high"
    }),
    Qe = new x({
        container: "mapViewDiv",
        viewpoint: Ye,
        popup: {
            defaultPopupTemplateEnabled: !0,
            spinnerEnabled: !1
        },
        map: qe
    }),
    Ke = Qe;
Ke.container.classList.remove("hidden");
var Xe = {
    sceneView: Je,
    mapView: Qe
};
q.when((function() {})), Ke.when().then((function() {
    return function(e, t) {
        var i, r;
        r = e;
        var n = new s({
                view: i = t
            }),
            a = new o({
                view: i
            }),
            d = new k({
                view: i,
                linearUnit: "feet"
            }),
            c = document.getElementById("widget-basemap-gallery"),
            p = new j({
                initView: i,
                otherView: r,
                container: c
            }),
            u = new l({
                view: t
            });
        t.ui.add(u, "top-left");
        var h = new re({
            view: i,
            otherView: r
        });
        i.ui.add(h, {
            position: "top-left",
            index: 0
        }), te = new z({
            view: t,
            layerInfos: [],
            container: document.getElementById("widget-editor")
        });
        var v = document.getElementById("widget-coordinates");
        console.log(v), ie = new oe({
            view: i,
            container: v
        });
        var f = new R({
            initView: i,
            otherView: r,
            widgets: {
                layerList: a,
                legend: n,
                measure: d,
                coordinates: ie,
                basemapGallery: p,
                editor: te,
                search: h
            }
        });
        i.ui.add(f, "top-left");
        var y = document.getElementById("widget-legend"),
            m = document.getElementById("widget-layerlist"),
            g = document.getElementById("widget-measure"),
            w = document.getElementById("widget-panel");
        return w && (e.padding = t.padding = V(V({}, e.padding), {
            left: w.offsetWidth
        })), y && (n.container = y), m && (a.container = m), g && (d.container = g), {
            layerListContainer: m,
            legendContainer: y,
            measure: d,
            coordinates: ie,
            basemapGallery: p,
            editor: te,
            viewToggle: f,
            widgetPanel: w,
            sceneView: e,
            mapView: t
        }
    }(Je, Qe)
})).then((function(e) {
    var t = e.layerListContainer,
        i = e.legendContainer,
        r = e.measure,
        n = e.coordinates,
        a = e.basemapGallery,
        o = e.editor,
        s = e.viewToggle,
        l = e.widgetPanel,
        d = e.sceneView,
        c = e.mapView;
    Ae = Array.from(document.querySelectorAll("calcite-action")), Te = [{
        label: "Layers",
        container: t
    }, {
        label: "Legend",
        container: i
    }, {
        label: "Measure",
        container: r.container
    }, {
        label: "Coordinates",
        container: n.container
    }, {
        label: "Basemap",
        container: a.container
    }, {
        label: "Edit",
        container: o.container
    }];
    for (var p = function(e) {
            e.addEventListener("click", (function() {
                var t, i, a, d = e.text;
                console.log(d), Te.forEach((function(e) {
                    var t, i;
                    d == e.label ? null === (t = e.container) || void 0 === t || t.classList.toggle("hidden") : null === (i = e.container) || void 0 === i || i.classList.add("hidden")
                })), "Measure" != d ? r.disable() : r.enable(), !0 === n.activated && "Coordinates" === d ? n.activated = !1 : n.activated = "Coordinates" === d, "Edit" == d ? "2D" == s.state && s.toggle() : (null === (t = null == o ? void 0 : o.arcGISEditor) || void 0 === t ? void 0 : t.activeWorkflow) && (null === (a = null === (i = null == o ? void 0 : o.arcGISEditor) || void 0 === i ? void 0 : i.viewModel) || void 0 === a || a.cancelWorkflow()), l.collapsed = 0 == Te.filter((function(e) {
                    return !e.container.classList.contains("hidden")
                })).length
            }))
        }, u = 0, h = Ae; u < h.length; u++) {
        p(h[u])
    }
    var v = new Le((function() {
        d.padding = c.padding = V(V({}, d.padding), {
            left: l.offsetWidth
        })
    }));
    return v.observe(l), v
}));
var $e = function(e) {
    Xe[e].when().then((function() {
        Xe[e].popup.watch("visible", (function() {
            var t, i;
            "editing-existing-feature" === (null === (i = null === (t = te.arcGISEditor) || void 0 === t ? void 0 : t.viewModel) || void 0 === i ? void 0 : i.state) && Xe[e].popup.close()
        })), D.watch(Xe[e].popup, "featureCount", (function() {
            ! function(e) {
                if (0 !== e.popup.featureCount) {
                    var t = e.popup.features.sort((function(t, i) {
                        var r = t.layer || t.sourceLayer.layer,
                            n = i.layer || i.sourceLayer.layer;
                        return -1 * (e.map.allLayers.indexOf(r) - e.map.allLayers.indexOf(n))
                    }));
                    e.popup.features = t
                }
            }(Xe[e])
        })), Xe[e].popup.viewModel.on("trigger-action", (function(t) {
            var i, r, n;
            "get-permit" === t.action.id ? function(e, t) {
                G(this, void 0, void 0, (function() {
                    var i, r, n, a, o;
                    return F(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                i = e.action.className, r = e.action.title, s.label = 1;
                            case 1:
                                return s.trys.push([1, 4, 5, 6]), e.action.className = "esri-icon-loading-indicator loader", e.action.title = "Getting permit", n = e.target.selectedFeature.attributes.GCCHDWWTP, [4, fetch("https://ehs-cm-service.herokuapp.com/?permit=" + n, {
                                    method: "GET"
                                })];
                            case 2:
                                return [4, s.sent().json()];
                            case 3:
                                return (null == (a = s.sent()) ? void 0 : a.documentid) ? (t.location.href = "http://eagleweb.gallatin.mt.gov/eaglecm/eagleweb/viewDoc.jsp?node=" + a.documentid, t.focus()) : (t.close(), alert("nothing found")), [3, 6];
                            case 4:
                                return o = s.sent(), t.close(), alert(o), [3, 6];
                            case 5:
                                return e.action.className = i, e.action.title = r, [7];
                            case 6:
                                return [2]
                        }
                    }))
                }))
            }(t, window.open("", "_blank")) : "edit-this" === t.action.id && (i = Xe[e], (null === (r = te.arcGISEditor) || void 0 === r ? void 0 : r.viewModel.activeWorkflow) || (i.popup.visible = !1, null === (n = te.arcGISEditor) || void 0 === n || n.startUpdateWorkflowAtFeatureEdit(i.popup.selectedFeature), setTimeout(Pe, 100)))
        }))
    })), D.watch(Xe[e].popup, ["selectedFeature", "visible"], (function() {
        var t, i, r, n, a;
        Xe[e].popup.visible ? (null === (i = null === (t = null == te ? void 0 : te.arcGISEditor) || void 0 === t ? void 0 : t.viewModel) || void 0 === i ? void 0 : i.activeWorkflow) || (null === (n = null === (r = Xe[e].popup) || void 0 === r ? void 0 : r.selectedFeature) || void 0 === n ? void 0 : n.layer) !== q ? Ue(Xe[e]) : function(e, t) {
            if (Fe && t.graphics.remove(Fe), e) {
                var i = A.geodesicBuffer(e.geometry, 200, "feet"),
                    r = new M({
                        geometry: i,
                        symbol: {
                            type: "simple-fill",
                            outline: {
                                width: 2,
                                color: [255, 170, 0, 1]
                            },
                            color: [0, 0, 0, 0]
                        }
                    });
                Fe = r, t.graphics.add(r)
            }
        }(null === (a = Xe[e].popup) || void 0 === a ? void 0 : a.selectedFeature, Xe[e]) : Ue(Xe[e])
    }))
};
for (var et in Xe) $e(et);
e.viewConfig = Xe, Object.defineProperty(e, "__esModule", {
value: !0
})
}));