// @ts-nocheck

export function makeWebGPURenderer(
  context: GPUCanvasContext, 
  device?: GPUDevice, 
  { antialias = true }: { antialias?: boolean } = {},
) {
  'worklet';
  
  function _classCallCheck(a: any, n: any) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
  function _defineProperties(e: any, r: any) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
  function _createClass(e: any, r: any, t: any) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
  function _toPropertyKey(t: any) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t: any, r: any) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  let ReactNativeCanvas = /*#__PURE__*/function () {
    function ReactNativeCanvas(canvas: any) {
      _classCallCheck(this, ReactNativeCanvas);
      this.canvas = canvas;
    }
    return _createClass(ReactNativeCanvas, [{
      key: "width",
      get: function () {
        return this.canvas.width;
      },
      set: function (width: number) {
        this.canvas.width = width;
      }
    }, {
      key: "height",
      get: function () {
        return this.canvas.height;
      },
      set: function (height: number) {
        this.canvas.height = height;
      }
    }, {
      key: "clientWidth",
      get: function () {
        return this.canvas.width;
      },
      set: function (width: number) {
        this.canvas.width = width;
      }
    }, {
      key: "clientHeight",
      get: function () {
        return this.canvas.height;
      },
      set: function (height: number) {
        this.canvas.height = height;
      }
    }, {
      key: "addEventListener",
      value: function addEventListener(_type: any, _listener: any) {}
    }, {
      key: "removeEventListener",
      value: function removeEventListener(_type: any, _listener: any) {}
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(_event: any) {}
    }, {
      key: "setPointerCapture",
      value: function setPointerCapture() {}
    }, {
      key: "releasePointerCapture",
      value: function releasePointerCapture() {}
    }]);
  }();

  return new global.__UIModules.threeJS.WebGPURenderer({
    antialias,
    canvas: new ReactNativeCanvas(context.canvas),
    context,
    device
  });
};
