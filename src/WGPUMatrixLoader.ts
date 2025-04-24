// @ts-nocheck

import { runOnUI } from "react-native-reanimated";

export function initWGPUMartix() {

runOnUI(() => {

var __BUNDLE_START_TIME__ = Date.now();
var __DEV__ = true;
var process = {};
var __METRO_GLOBAL_PREFIX__ = '';
var __requireCycleIgnorePatterns = [/(^|\/|\\)node_modules($|\/|\\)/];
process.env = process.env || {};
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// ---------------------------------------------------------------------------

(function (global) {
  "use strict";

  global.__r = metroRequire;
  global[`${__METRO_GLOBAL_PREFIX__}__d`] = define;
  global.__c = clear;
  global.__registerSegment = registerSegment;
  var modules = clear();
  var EMPTY = {};
  var CYCLE_DETECTED = {};
  var _ref = {},
    hasOwnProperty = _ref.hasOwnProperty;
  if (__DEV__) {
    global.$RefreshReg$ = function () {};
    global.$RefreshSig$ = function () {
      return function (type) {
        return type;
      };
    };
  }
  function clear() {
    modules = new Map();
    return modules;
  }
  if (__DEV__) {
    var verboseNamesToModuleIds = new Map();
    var getModuleIdForVerboseName = function getModuleIdForVerboseName(verboseName) {
      var moduleId = verboseNamesToModuleIds.get(verboseName);
      if (moduleId == null) {
        throw new Error(`Unknown named module: "${verboseName}"`);
      }
      return moduleId;
    };
    var initializingModuleIds = [];
  }
  function define(factory, moduleId, dependencyMap) {
    if (modules.has(moduleId)) {
      if (__DEV__) {
        var inverseDependencies = arguments[4];
        if (inverseDependencies) {
          global.__accept(moduleId, factory, dependencyMap, inverseDependencies);
        }
      }
      return;
    }
    var mod = {
      dependencyMap: dependencyMap,
      factory: factory,
      hasError: false,
      importedAll: EMPTY,
      importedDefault: EMPTY,
      isInitialized: false,
      publicModule: {
        exports: {}
      }
    };
    modules.set(moduleId, mod);
    if (__DEV__) {
      mod.hot = createHotReloadingObject();
      var verboseName = arguments[3];
      if (verboseName) {
        mod.verboseName = verboseName;
        verboseNamesToModuleIds.set(verboseName, moduleId);
      }
    }
  }
  function metroRequire(moduleId) {
    if (__DEV__ && typeof moduleId === "string") {
      var verboseName = moduleId;
      moduleId = getModuleIdForVerboseName(verboseName);
      console.warn(`Requiring module "${verboseName}" by name is only supported for ` + "debugging purposes and will BREAK IN PRODUCTION!");
    }
    var moduleIdReallyIsNumber = moduleId;
    if (__DEV__) {
      var initializingIndex = initializingModuleIds.indexOf(moduleIdReallyIsNumber);
      if (initializingIndex !== -1) {
        var cycle = initializingModuleIds.slice(initializingIndex).map(function (id) {
          var _modules$get$verboseN, _modules$get;
          return (_modules$get$verboseN = (_modules$get = modules.get(id)) == null ? void 0 : _modules$get.verboseName) != null ? _modules$get$verboseN : "[unknown]";
        });
        if (shouldPrintRequireCycle(cycle)) {
          cycle.push(cycle[0]);
          console.warn(`Require cycle: ${cycle.join(" -> ")}\n\n` + "Require cycles are allowed, but can result in uninitialized values. " + "Consider refactoring to remove the need for a cycle.");
        }
      }
    }
    var module = modules.get(moduleIdReallyIsNumber);
    return module && module.isInitialized ? module.publicModule.exports : guardedLoadModule(moduleIdReallyIsNumber, module);
  }
  function shouldPrintRequireCycle(modules) {
    var regExps = global[__METRO_GLOBAL_PREFIX__ + "__requireCycleIgnorePatterns"];
    if (!Array.isArray(regExps)) {
      return true;
    }
    var isIgnored = function isIgnored(module) {
      return module != null && regExps.some(function (regExp) {
        return regExp.test(module);
      });
    };
    return modules.every(function (module) {
      return !isIgnored(module);
    });
  }
  function metroImportDefault(moduleId) {
    if (__DEV__ && typeof moduleId === "string") {
      var verboseName = moduleId;
      moduleId = getModuleIdForVerboseName(verboseName);
    }
    var moduleIdReallyIsNumber = moduleId;
    var maybeInitializedModule = modules.get(moduleIdReallyIsNumber);
    if (maybeInitializedModule && maybeInitializedModule.importedDefault !== EMPTY) {
      return maybeInitializedModule.importedDefault;
    }
    var exports = metroRequire(moduleIdReallyIsNumber);
    var importedDefault = exports && exports.__esModule ? exports.default : exports;
    var initializedModule = modules.get(moduleIdReallyIsNumber);
    return initializedModule.importedDefault = importedDefault;
  }
  metroRequire.importDefault = metroImportDefault;
  function metroImportAll(moduleId) {
    if (__DEV__ && typeof moduleId === "string") {
      var verboseName = moduleId;
      moduleId = getModuleIdForVerboseName(verboseName);
    }
    var moduleIdReallyIsNumber = moduleId;
    var maybeInitializedModule = modules.get(moduleIdReallyIsNumber);
    if (maybeInitializedModule && maybeInitializedModule.importedAll !== EMPTY) {
      return maybeInitializedModule.importedAll;
    }
    var exports = metroRequire(moduleIdReallyIsNumber);
    var importedAll;
    if (exports && exports.__esModule) {
      importedAll = exports;
    } else {
      importedAll = {};
      if (exports) {
        for (var key in exports) {
          if (hasOwnProperty.call(exports, key)) {
            importedAll[key] = exports[key];
          }
        }
      }
      importedAll.default = exports;
    }
    var initializedModule = modules.get(moduleIdReallyIsNumber);
    return initializedModule.importedAll = importedAll;
  }
  metroRequire.importAll = metroImportAll;
  metroRequire.context = function fallbackRequireContext() {
    if (__DEV__) {
      throw new Error("The experimental Metro feature `require.context` is not enabled in your project.\nThis can be enabled by setting the `transformer.unstable_allowRequireContext` property to `true` in your Metro configuration.");
    }
    throw new Error("The experimental Metro feature `require.context` is not enabled in your project.");
  };
  metroRequire.resolveWeak = function fallbackRequireResolveWeak() {
    if (__DEV__) {
      throw new Error("require.resolveWeak cannot be called dynamically. Ensure you are using the same version of `metro` and `metro-runtime`.");
    }
    throw new Error("require.resolveWeak cannot be called dynamically.");
  };
  var inGuard = false;
  function guardedLoadModule(moduleId, module) {
    if (!inGuard && global.ErrorUtils) {
      inGuard = true;
      var returnValue;
      try {
        returnValue = loadModuleImplementation(moduleId, module);
      } catch (e) {
        global.ErrorUtils.reportFatalError(e);
      }
      inGuard = false;
      return returnValue;
    } else {
      return loadModuleImplementation(moduleId, module);
    }
  }
  var ID_MASK_SHIFT = 16;
  var LOCAL_ID_MASK = ~0 >>> ID_MASK_SHIFT;
  function unpackModuleId(moduleId) {
    var segmentId = moduleId >>> ID_MASK_SHIFT;
    var localId = moduleId & LOCAL_ID_MASK;
    return {
      segmentId: segmentId,
      localId: localId
    };
  }
  metroRequire.unpackModuleId = unpackModuleId;
  function packModuleId(value) {
    return (value.segmentId << ID_MASK_SHIFT) + value.localId;
  }
  metroRequire.packModuleId = packModuleId;
  var moduleDefinersBySegmentID = [];
  var definingSegmentByModuleID = new Map();
  function registerSegment(segmentId, moduleDefiner, moduleIds) {
    moduleDefinersBySegmentID[segmentId] = moduleDefiner;
    if (__DEV__) {
      if (segmentId === 0 && moduleIds) {
        throw new Error("registerSegment: Expected moduleIds to be null for main segment");
      }
      if (segmentId !== 0 && !moduleIds) {
        throw new Error("registerSegment: Expected moduleIds to be passed for segment #" + segmentId);
      }
    }
    if (moduleIds) {
      moduleIds.forEach(function (moduleId) {
        if (!modules.has(moduleId) && !definingSegmentByModuleID.has(moduleId)) {
          definingSegmentByModuleID.set(moduleId, segmentId);
        }
      });
    }
  }
  function loadModuleImplementation(moduleId, module) {
    if (!module && moduleDefinersBySegmentID.length > 0) {
      var _definingSegmentByMod;
      var segmentId = (_definingSegmentByMod = definingSegmentByModuleID.get(moduleId)) != null ? _definingSegmentByMod : 0;
      var definer = moduleDefinersBySegmentID[segmentId];
      if (definer != null) {
        definer(moduleId);
        module = modules.get(moduleId);
        definingSegmentByModuleID.delete(moduleId);
      }
    }
    var nativeRequire = global.nativeRequire;
    if (!module && nativeRequire) {
      var _unpackModuleId = unpackModuleId(moduleId),
        _segmentId = _unpackModuleId.segmentId,
        localId = _unpackModuleId.localId;
      nativeRequire(localId, _segmentId);
      module = modules.get(moduleId);
    }
    if (!module) {
      throw unknownModuleError(moduleId);
    }
    if (module.hasError) {
      throw module.error;
    }
    if (__DEV__) {
      var Systrace = requireSystrace();
      var Refresh = requireRefresh();
    }
    module.isInitialized = true;
    var _module = module,
      factory = _module.factory,
      dependencyMap = _module.dependencyMap;
    if (__DEV__) {
      initializingModuleIds.push(moduleId);
    }
    try {
      if (__DEV__) {
        Systrace.beginEvent("JS_require_" + (module.verboseName || moduleId));
      }
      var moduleObject = module.publicModule;
      if (__DEV__) {
        moduleObject.hot = module.hot;
        var prevRefreshReg = global.$RefreshReg$;
        var prevRefreshSig = global.$RefreshSig$;
        if (Refresh != null) {
          var RefreshRuntime = Refresh;
          global.$RefreshReg$ = function (type, id) {
            RefreshRuntime.register(type, moduleId + " " + id);
          };
          global.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
        }
      }
      moduleObject.id = moduleId;
      factory(global, metroRequire, metroImportDefault, metroImportAll, moduleObject, moduleObject.exports, dependencyMap);
      if (!__DEV__) {
        module.factory = undefined;
        module.dependencyMap = undefined;
      }
      if (__DEV__) {
        Systrace.endEvent();
        if (Refresh != null) {
          registerExportsForReactRefresh(Refresh, moduleObject.exports, moduleId);
        }
      }
      return moduleObject.exports;
    } catch (e) {
      module.hasError = true;
      module.error = e;
      module.isInitialized = false;
      module.publicModule.exports = undefined;
      throw e;
    } finally {
      if (__DEV__) {
        if (initializingModuleIds.pop() !== moduleId) {
          throw new Error("initializingModuleIds is corrupt; something is terribly wrong");
        }
        global.$RefreshReg$ = prevRefreshReg;
        global.$RefreshSig$ = prevRefreshSig;
      }
    }
  }
  function unknownModuleError(id) {
    var message = 'Requiring unknown module "' + id + '".';
    if (__DEV__) {
      message += " If you are sure the module exists, try restarting Metro. " + "You may also want to run `yarn` or `npm install`.";
    }
    return Error(message);
  }
  if (__DEV__) {
    metroRequire.Systrace = {
      beginEvent: function beginEvent() {},
      endEvent: function endEvent() {}
    };
    metroRequire.getModules = function () {
      return modules;
    };
    var createHotReloadingObject = function createHotReloadingObject() {
      var hot = {
        _acceptCallback: null,
        _disposeCallback: null,
        _didAccept: false,
        accept: function accept(callback) {
          hot._didAccept = true;
          hot._acceptCallback = callback;
        },
        dispose: function dispose(callback) {
          hot._disposeCallback = callback;
        }
      };
      return hot;
    };
    var reactRefreshTimeout = null;
    var metroHotUpdateModule = function metroHotUpdateModule(id, factory, dependencyMap, inverseDependencies) {
      var mod = modules.get(id);
      if (!mod) {
        if (factory) {
          return;
        }
        throw unknownModuleError(id);
      }
      if (!mod.hasError && !mod.isInitialized) {
        mod.factory = factory;
        mod.dependencyMap = dependencyMap;
        return;
      }
      var Refresh = requireRefresh();
      var refreshBoundaryIDs = new Set();
      var didBailOut = false;
      var updatedModuleIDs;
      try {
        updatedModuleIDs = topologicalSort([id], function (pendingID) {
          var pendingModule = modules.get(pendingID);
          if (pendingModule == null) {
            return [];
          }
          var pendingHot = pendingModule.hot;
          if (pendingHot == null) {
            throw new Error("[Refresh] Expected module.hot to always exist in DEV.");
          }
          var canAccept = pendingHot._didAccept;
          if (!canAccept && Refresh != null) {
            var isBoundary = isReactRefreshBoundary(Refresh, pendingModule.publicModule.exports);
            if (isBoundary) {
              canAccept = true;
              refreshBoundaryIDs.add(pendingID);
            }
          }
          if (canAccept) {
            return [];
          }
          var parentIDs = inverseDependencies[pendingID];
          if (parentIDs.length === 0) {
            performFullRefresh("No root boundary", {
              source: mod,
              failed: pendingModule
            });
            didBailOut = true;
            return [];
          }
          return parentIDs;
        }, function () {
          return didBailOut;
        }).reverse();
      } catch (e) {
        if (e === CYCLE_DETECTED) {
          performFullRefresh("Dependency cycle", {
            source: mod
          });
          return;
        }
        throw e;
      }
      if (didBailOut) {
        return;
      }
      var seenModuleIDs = new Set();
      for (var i = 0; i < updatedModuleIDs.length; i++) {
        var updatedID = updatedModuleIDs[i];
        if (seenModuleIDs.has(updatedID)) {
          continue;
        }
        seenModuleIDs.add(updatedID);
        var updatedMod = modules.get(updatedID);
        if (updatedMod == null) {
          throw new Error("[Refresh] Expected to find the updated module.");
        }
        var prevExports = updatedMod.publicModule.exports;
        var didError = runUpdatedModule(updatedID, updatedID === id ? factory : undefined, updatedID === id ? dependencyMap : undefined);
        var nextExports = updatedMod.publicModule.exports;
        if (didError) {
          return;
        }
        if (refreshBoundaryIDs.has(updatedID)) {
          var isNoLongerABoundary = !isReactRefreshBoundary(Refresh, nextExports);
          var didInvalidate = shouldInvalidateReactRefreshBoundary(Refresh, prevExports, nextExports);
          if (isNoLongerABoundary || didInvalidate) {
            var parentIDs = inverseDependencies[updatedID];
            if (parentIDs.length === 0) {
              performFullRefresh(isNoLongerABoundary ? "No longer a boundary" : "Invalidated boundary", {
                source: mod,
                failed: updatedMod
              });
              return;
            }
            for (var j = 0; j < parentIDs.length; j++) {
              var parentID = parentIDs[j];
              var parentMod = modules.get(parentID);
              if (parentMod == null) {
                throw new Error("[Refresh] Expected to find parent module.");
              }
              var canAcceptParent = isReactRefreshBoundary(Refresh, parentMod.publicModule.exports);
              if (canAcceptParent) {
                refreshBoundaryIDs.add(parentID);
                updatedModuleIDs.push(parentID);
              } else {
                performFullRefresh("Invalidated boundary", {
                  source: mod,
                  failed: parentMod
                });
                return;
              }
            }
          }
        }
      }
      if (Refresh != null) {
        if (reactRefreshTimeout == null) {
          reactRefreshTimeout = setTimeout(function () {
            reactRefreshTimeout = null;
            Refresh.performReactRefresh();
          }, 30);
        }
      }
    };
    var topologicalSort = function topologicalSort(roots, getEdges, earlyStop) {
      var result = [];
      var visited = new Set();
      var stack = new Set();
      function traverseDependentNodes(node) {
        if (stack.has(node)) {
          throw CYCLE_DETECTED;
        }
        if (visited.has(node)) {
          return;
        }
        visited.add(node);
        stack.add(node);
        var dependentNodes = getEdges(node);
        if (earlyStop(node)) {
          stack.delete(node);
          return;
        }
        dependentNodes.forEach(function (dependent) {
          traverseDependentNodes(dependent);
        });
        stack.delete(node);
        result.push(node);
      }
      roots.forEach(function (root) {
        traverseDependentNodes(root);
      });
      return result;
    };
    var runUpdatedModule = function runUpdatedModule(id, factory, dependencyMap) {
      var mod = modules.get(id);
      if (mod == null) {
        throw new Error("[Refresh] Expected to find the module.");
      }
      var hot = mod.hot;
      if (!hot) {
        throw new Error("[Refresh] Expected module.hot to always exist in DEV.");
      }
      if (hot._disposeCallback) {
        try {
          hot._disposeCallback();
        } catch (error) {
          console.error(`Error while calling dispose handler for module ${id}: `, error);
        }
      }
      if (factory) {
        mod.factory = factory;
      }
      if (dependencyMap) {
        mod.dependencyMap = dependencyMap;
      }
      mod.hasError = false;
      mod.error = undefined;
      mod.importedAll = EMPTY;
      mod.importedDefault = EMPTY;
      mod.isInitialized = false;
      var prevExports = mod.publicModule.exports;
      mod.publicModule.exports = {};
      hot._didAccept = false;
      hot._acceptCallback = null;
      hot._disposeCallback = null;
      metroRequire(id);
      if (mod.hasError) {
        mod.hasError = false;
        mod.isInitialized = true;
        mod.error = null;
        mod.publicModule.exports = prevExports;
        return true;
      }
      if (hot._acceptCallback) {
        try {
          hot._acceptCallback();
        } catch (error) {
          console.error(`Error while calling accept handler for module ${id}: `, error);
        }
      }
      return false;
    };
    var performFullRefresh = function performFullRefresh(reason, modules) {
      if (typeof window !== "undefined" && window.location != null && typeof window.location.reload === "function") {
        window.location.reload();
      } else {
        var Refresh = requireRefresh();
        if (Refresh != null) {
          var _modules$source$verbo, _modules$source, _modules$failed$verbo, _modules$failed;
          var sourceName = (_modules$source$verbo = (_modules$source = modules.source) == null ? void 0 : _modules$source.verboseName) != null ? _modules$source$verbo : "unknown";
          var failedName = (_modules$failed$verbo = (_modules$failed = modules.failed) == null ? void 0 : _modules$failed.verboseName) != null ? _modules$failed$verbo : "unknown";
          Refresh.performFullRefresh(`Fast Refresh - ${reason} <${sourceName}> <${failedName}>`);
        } else {
          console.warn("Could not reload the application after an edit.");
        }
      }
    };
    var isReactRefreshBoundary = function isReactRefreshBoundary(Refresh, moduleExports) {
      if (Refresh.isLikelyComponentType(moduleExports)) {
        return true;
      }
      if (moduleExports == null || typeof moduleExports !== "object") {
        return false;
      }
      var hasExports = false;
      var areAllExportsComponents = true;
      for (var key in moduleExports) {
        hasExports = true;
        if (key === "__esModule") {
          continue;
        }
        var desc = Object.getOwnPropertyDescriptor(moduleExports, key);
        if (desc && desc.get) {
          return false;
        }
        var exportValue = moduleExports[key];
        if (!Refresh.isLikelyComponentType(exportValue)) {
          areAllExportsComponents = false;
        }
      }
      return hasExports && areAllExportsComponents;
    };
    var shouldInvalidateReactRefreshBoundary = function shouldInvalidateReactRefreshBoundary(Refresh, prevExports, nextExports) {
      var prevSignature = getRefreshBoundarySignature(Refresh, prevExports);
      var nextSignature = getRefreshBoundarySignature(Refresh, nextExports);
      if (prevSignature.length !== nextSignature.length) {
        return true;
      }
      for (var i = 0; i < nextSignature.length; i++) {
        if (prevSignature[i] !== nextSignature[i]) {
          return true;
        }
      }
      return false;
    };
    var getRefreshBoundarySignature = function getRefreshBoundarySignature(Refresh, moduleExports) {
      var signature = [];
      signature.push(Refresh.getFamilyByType(moduleExports));
      if (moduleExports == null || typeof moduleExports !== "object") {
        return signature;
      }
      for (var key in moduleExports) {
        if (key === "__esModule") {
          continue;
        }
        var desc = Object.getOwnPropertyDescriptor(moduleExports, key);
        if (desc && desc.get) {
          continue;
        }
        var exportValue = moduleExports[key];
        signature.push(key);
        signature.push(Refresh.getFamilyByType(exportValue));
      }
      return signature;
    };
    var registerExportsForReactRefresh = function registerExportsForReactRefresh(Refresh, moduleExports, moduleID) {
      Refresh.register(moduleExports, moduleID + " %exports%");
      if (moduleExports == null || typeof moduleExports !== "object") {
        return;
      }
      for (var key in moduleExports) {
        var desc = Object.getOwnPropertyDescriptor(moduleExports, key);
        if (desc && desc.get) {
          continue;
        }
        var exportValue = moduleExports[key];
        var typeID = moduleID + " %exports% " + key;
        Refresh.register(exportValue, typeID);
      }
    };
    global.__accept = metroHotUpdateModule;
  }
  if (__DEV__) {
    var requireSystrace = function requireSystrace() {
      return global[__METRO_GLOBAL_PREFIX__ + "__SYSTRACE"] || metroRequire.Systrace;
    };
    var requireRefresh = function requireRefresh() {
      return global[__METRO_GLOBAL_PREFIX__ + "__ReactRefresh"] || metroRequire.Refresh;
    };
  }
})(typeof globalThis !== 'undefined' ? globalThis : typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this);
(function (global) {
  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @polyfill
   * @nolint
   * @format
   */

  /* eslint-disable no-shadow, eqeqeq, curly, no-unused-vars, no-void, no-control-regex  */

  /**
   * This pipes all of our console logging functions to native logging so that
   * JavaScript errors in required modules show up in Xcode via NSLog.
   */
  var inspect = function () {
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    //
    // https://github.com/joyent/node/blob/master/lib/util.js

    function inspect(obj, opts) {
      var ctx = {
        seen: [],
        formatValueCalls: 0,
        stylize: stylizeNoColor
      };
      return formatValue(ctx, obj, opts.depth);
    }
    function stylizeNoColor(str, styleType) {
      return str;
    }
    function arrayToHash(array) {
      var hash = {};
      array.forEach(function (val, idx) {
        hash[val] = true;
      });
      return hash;
    }
    function formatValue(ctx, value, recurseTimes) {
      ctx.formatValueCalls++;
      if (ctx.formatValueCalls > 200) {
        return `[TOO BIG formatValueCalls ${ctx.formatValueCalls} exceeded limit of 200]`;
      }

      // Primitive types cannot have properties
      var primitive = formatPrimitive(ctx, value);
      if (primitive) {
        return primitive;
      }

      // Look up the keys of the object.
      var keys = Object.keys(value);
      var visibleKeys = arrayToHash(keys);

      // IE doesn't make error fields non-enumerable
      // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
      if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
        return formatError(value);
      }

      // Some type of object without properties can be shortcutted.
      if (keys.length === 0) {
        if (isFunction(value)) {
          var name = value.name ? ': ' + value.name : '';
          return ctx.stylize('[Function' + name + ']', 'special');
        }
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        }
        if (isDate(value)) {
          return ctx.stylize(Date.prototype.toString.call(value), 'date');
        }
        if (isError(value)) {
          return formatError(value);
        }
      }
      var base = '',
        array = false,
        braces = ['{', '}'];

      // Make Array say that they are Array
      if (isArray(value)) {
        array = true;
        braces = ['[', ']'];
      }

      // Make functions say that they are functions
      if (isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
      }

      // Make RegExps say that they are RegExps
      if (isRegExp(value)) {
        base = ' ' + RegExp.prototype.toString.call(value);
      }

      // Make dates with properties first say the date
      if (isDate(value)) {
        base = ' ' + Date.prototype.toUTCString.call(value);
      }

      // Make error with message first say the error
      if (isError(value)) {
        base = ' ' + formatError(value);
      }
      if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
      }
      if (recurseTimes < 0) {
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        } else {
          return ctx.stylize('[Object]', 'special');
        }
      }
      ctx.seen.push(value);
      var output;
      if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
      } else {
        output = keys.map(function (key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
      }
      ctx.seen.pop();
      return reduceToSingleString(output, base, braces);
    }
    function formatPrimitive(ctx, value) {
      if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
      if (isString(value)) {
        var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return ctx.stylize(simple, 'string');
      }
      if (isNumber(value)) return ctx.stylize('' + value, 'number');
      if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
      // For some reason typeof null is "object", so special case here.
      if (isNull(value)) return ctx.stylize('null', 'null');
    }
    function formatError(value) {
      return '[' + Error.prototype.toString.call(value) + ']';
    }
    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];
      for (var i = 0, l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
        } else {
          output.push('');
        }
      }
      keys.forEach(function (key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
        }
      });
      return output;
    }
    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name, str, desc;
      desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
      };
      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize('[Getter/Setter]', 'special');
        } else {
          str = ctx.stylize('[Getter]', 'special');
        }
      } else {
        if (desc.set) {
          str = ctx.stylize('[Setter]', 'special');
        }
      }
      if (!hasOwnProperty(visibleKeys, key)) {
        name = '[' + key + ']';
      }
      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
          } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
          }
          if (str.indexOf('\n') > -1) {
            if (array) {
              str = str.split('\n').map(function (line) {
                return '  ' + line;
              }).join('\n').slice(2);
            } else {
              str = '\n' + str.split('\n').map(function (line) {
                return '   ' + line;
              }).join('\n');
            }
          }
        } else {
          str = ctx.stylize('[Circular]', 'special');
        }
      }
      if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.slice(1, name.length - 1);
          name = ctx.stylize(name, 'name');
        } else {
          name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, 'string');
        }
      }
      return name + ': ' + str;
    }
    function reduceToSingleString(output, base, braces) {
      var numLinesEst = 0;
      var length = output.reduce(function (prev, cur) {
        numLinesEst++;
        if (cur.indexOf('\n') >= 0) numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
      }, 0);
      if (length > 60) {
        return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
      }
      return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
    }

    // NOTE: These type checking functions intentionally don't use `instanceof`
    // because it is fragile and can be easily faked with `Object.create()`.
    function isArray(ar) {
      return Array.isArray(ar);
    }
    function isBoolean(arg) {
      return typeof arg === 'boolean';
    }
    function isNull(arg) {
      return arg === null;
    }
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    function isNumber(arg) {
      return typeof arg === 'number';
    }
    function isString(arg) {
      return typeof arg === 'string';
    }
    function isSymbol(arg) {
      return typeof arg === 'symbol';
    }
    function isUndefined(arg) {
      return arg === void 0;
    }
    function isRegExp(re) {
      return isObject(re) && objectToString(re) === '[object RegExp]';
    }
    function isObject(arg) {
      return typeof arg === 'object' && arg !== null;
    }
    function isDate(d) {
      return isObject(d) && objectToString(d) === '[object Date]';
    }
    function isError(e) {
      return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
    }
    function isFunction(arg) {
      return typeof arg === 'function';
    }
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    return inspect;
  }();
  var OBJECT_COLUMN_NAME = '(index)';
  var LOG_LEVELS = {
    trace: 0,
    info: 1,
    warn: 2,
    error: 3
  };
  var INSPECTOR_LEVELS = [];
  INSPECTOR_LEVELS[LOG_LEVELS.trace] = 'debug';
  INSPECTOR_LEVELS[LOG_LEVELS.info] = 'log';
  INSPECTOR_LEVELS[LOG_LEVELS.warn] = 'warning';
  INSPECTOR_LEVELS[LOG_LEVELS.error] = 'error';

  // Strip the inner function in getNativeLogFunction(), if in dev also
  // strip method printing to originalConsole.
  var INSPECTOR_FRAMES_TO_SKIP = __DEV__ ? 2 : 1;
  function getNativeLogFunction(level) {
    return function () {
      var str;
      if (arguments.length === 1 && typeof arguments[0] === 'string') {
        str = arguments[0];
      } else {
        str = Array.prototype.map.call(arguments, function (arg) {
          return inspect(arg, {
            depth: 10
          });
        }).join(', ');
      }

      // TRICKY
      // If more than one argument is provided, the code above collapses them all
      // into a single formatted string. This transform wraps string arguments in
      // single quotes (e.g. "foo" -> "'foo'") which then breaks the "Warning:"
      // check below. So it's important that we look at the first argument, rather
      // than the formatted argument string.
      var firstArg = arguments[0];
      var logLevel = level;
      if (typeof firstArg === 'string' && firstArg.slice(0, 9) === 'Warning: ' && logLevel >= LOG_LEVELS.error) {
        // React warnings use console.error so that a stack trace is shown,
        // but we don't (currently) want these to show a redbox
        // (Note: Logic duplicated in ExceptionsManager.js.)
        logLevel = LOG_LEVELS.warn;
      }
      if (global.__inspectorLog) {
        global.__inspectorLog(INSPECTOR_LEVELS[logLevel], str, [].slice.call(arguments), INSPECTOR_FRAMES_TO_SKIP);
      }
      if (groupStack.length) {
        str = groupFormat('', str);
      }
      global.nativeLoggingHook(str, logLevel);
    };
  }
  function repeat(element, n) {
    return Array.apply(null, Array(n)).map(function () {
      return element;
    });
  }
  function consoleTablePolyfill(rows) {
    // convert object -> array
    if (!Array.isArray(rows)) {
      var data = rows;
      rows = [];
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          var row = data[key];
          row[OBJECT_COLUMN_NAME] = key;
          rows.push(row);
        }
      }
    }
    if (rows.length === 0) {
      global.nativeLoggingHook('', LOG_LEVELS.info);
      return;
    }
    var columns = Object.keys(rows[0]).sort();
    var stringRows = [];
    var columnWidths = [];

    // Convert each cell to a string. Also
    // figure out max cell width for each column
    columns.forEach(function (k, i) {
      columnWidths[i] = k.length;
      for (var j = 0; j < rows.length; j++) {
        var cellStr = (rows[j][k] || '?').toString();
        stringRows[j] = stringRows[j] || [];
        stringRows[j][i] = cellStr;
        columnWidths[i] = Math.max(columnWidths[i], cellStr.length);
      }
    });

    // Join all elements in the row into a single string with | separators
    // (appends extra spaces to each cell to make separators  | aligned)
    function joinRow(row, space) {
      var cells = row.map(function (cell, i) {
        var extraSpaces = repeat(' ', columnWidths[i] - cell.length).join('');
        return cell + extraSpaces;
      });
      space = space || ' ';
      return cells.join(space + '|' + space);
    }
    var separators = columnWidths.map(function (columnWidth) {
      return repeat('-', columnWidth).join('');
    });
    var separatorRow = joinRow(separators, '-');
    var header = joinRow(columns);
    var table = [header, separatorRow];
    for (var i = 0; i < rows.length; i++) {
      table.push(joinRow(stringRows[i]));
    }

    // Notice extra empty line at the beginning.
    // Native logging hook adds "RCTLog >" at the front of every
    // logged string, which would shift the header and screw up
    // the table
    global.nativeLoggingHook('\n' + table.join('\n'), LOG_LEVELS.info);
  }
  var GROUP_PAD = "\u2502"; // Box light vertical
  var GROUP_OPEN = "\u2510"; // Box light down+left
  var GROUP_CLOSE = "\u2518"; // Box light up+left

  var groupStack = [];
  function groupFormat(prefix, msg) {
    // Insert group formatting before the console message
    return groupStack.join('') + prefix + ' ' + (msg || '');
  }
  function consoleGroupPolyfill(label) {
    global.nativeLoggingHook(groupFormat(GROUP_OPEN, label), LOG_LEVELS.info);
    groupStack.push(GROUP_PAD);
  }
  function consoleGroupCollapsedPolyfill(label) {
    global.nativeLoggingHook(groupFormat(GROUP_CLOSE, label), LOG_LEVELS.info);
    groupStack.push(GROUP_PAD);
  }
  function consoleGroupEndPolyfill() {
    groupStack.pop();
    global.nativeLoggingHook(groupFormat(GROUP_CLOSE), LOG_LEVELS.info);
  }
  function consoleAssertPolyfill(expression, label) {
    if (!expression) {
      global.nativeLoggingHook('Assertion failed: ' + label, LOG_LEVELS.error);
    }
  }
  if (global.nativeLoggingHook) {
    var originalConsole = global.console;
    // Preserve the original `console` as `originalConsole`
    if (__DEV__ && originalConsole) {
      var descriptor = Object.getOwnPropertyDescriptor(global, 'console');
      if (descriptor) {
        Object.defineProperty(global, 'originalConsole', descriptor);
      }
    }
    global.console = {
      error: getNativeLogFunction(LOG_LEVELS.error),
      info: getNativeLogFunction(LOG_LEVELS.info),
      log: getNativeLogFunction(LOG_LEVELS.info),
      warn: getNativeLogFunction(LOG_LEVELS.warn),
      trace: getNativeLogFunction(LOG_LEVELS.trace),
      debug: getNativeLogFunction(LOG_LEVELS.trace),
      table: consoleTablePolyfill,
      group: consoleGroupPolyfill,
      groupEnd: consoleGroupEndPolyfill,
      groupCollapsed: consoleGroupCollapsedPolyfill,
      assert: consoleAssertPolyfill
    };
    Object.defineProperty(console, '_isPolyfilled', {
      value: true,
      enumerable: false
    });

    // If available, also call the original `console` method since that is
    // sometimes useful. Ex: on OS X, this will let you see rich output in
    // the Safari Web Inspector console.
    if (__DEV__ && originalConsole) {
      Object.keys(console).forEach(function (methodName) {
        var reactNativeMethod = console[methodName];
        if (originalConsole[methodName]) {
          console[methodName] = function () {
            originalConsole[methodName].apply(originalConsole, arguments);
            reactNativeMethod.apply(console, arguments);
          };
        }
      });

      // The following methods are not supported by this polyfill but
      // we still should pass them to original console if they are
      // supported by it.
      ['clear', 'dir', 'dirxml', 'profile', 'profileEnd'].forEach(function (methodName) {
        if (typeof originalConsole[methodName] === 'function') {
          console[methodName] = function () {
            originalConsole[methodName].apply(originalConsole, arguments);
          };
        }
      });
    }
  } else if (!global.console) {
    var stub = function stub() {};
    var log = global.print || stub;
    global.console = {
      debug: log,
      error: log,
      info: log,
      log: log,
      trace: log,
      warn: log,
      assert: function assert(expression, label) {
        if (!expression) {
          log('Assertion failed: ' + label);
        }
      },
      clear: stub,
      dir: stub,
      dirxml: stub,
      group: stub,
      groupCollapsed: stub,
      groupEnd: stub,
      profile: stub,
      profileEnd: stub,
      table: stub
    };
    Object.defineProperty(console, '_isPolyfilled', {
      value: true,
      enumerable: false
    });
  }
})(typeof globalThis !== 'undefined' ? globalThis : typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this);
(function (global) {
  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @format
   * 
   * @polyfill
   */

  var _inGuard = 0;
  /**
   * This is the error handler that is called when we encounter an exception
   * when loading a module. This will report any errors encountered before
   * ExceptionsManager is configured.
   */
  var _globalHandler = function onError(e, isFatal) {
    throw e;
  };

  /**
   * The particular require runtime that we are using looks for a global
   * `ErrorUtils` object and if it exists, then it requires modules with the
   * error handler specified via ErrorUtils.setGlobalHandler by calling the
   * require function with applyWithGuard. Since the require module is loaded
   * before any of the modules, this ErrorUtils must be defined (and the handler
   * set) globally before requiring anything.
   */
  var ErrorUtils = {
    setGlobalHandler: function setGlobalHandler(fun) {
      _globalHandler = fun;
    },
    getGlobalHandler: function getGlobalHandler() {
      return _globalHandler;
    },
    reportError: function reportError(error) {
      _globalHandler && _globalHandler(error, false);
    },
    reportFatalError: function reportFatalError(error) {
      // NOTE: This has an untyped call site in Metro.
      _globalHandler && _globalHandler(error, true);
    },
    applyWithGuard: function applyWithGuard(fun, context, args,
    // Unused, but some code synced from www sets it to null.
    unused_onError,
    // Some callers pass a name here, which we ignore.
    unused_name) {
      try {
        _inGuard++;
        /* $FlowFixMe[incompatible-call] : TODO T48204745 (1) apply(context,
          * null) is fine. (2) array -> rest array should work */
        /* $FlowFixMe[incompatible-type] : TODO T48204745 (1) apply(context,
          * null) is fine. (2) array -> rest array should work */
        return fun.apply(context, args);
      } catch (e) {
        ErrorUtils.reportError(e);
      } finally {
        _inGuard--;
      }
      return null;
    },
    applyWithGuardIfNeeded: function applyWithGuardIfNeeded(fun, context, args) {
      if (ErrorUtils.inGuard()) {
        /* $FlowFixMe[incompatible-call] : TODO T48204745 (1) apply(context,
          * null) is fine. (2) array -> rest array should work */
        /* $FlowFixMe[incompatible-type] : TODO T48204745 (1) apply(context,
          * null) is fine. (2) array -> rest array should work */
        return fun.apply(context, args);
      } else {
        ErrorUtils.applyWithGuard(fun, context, args);
      }
      return null;
    },
    inGuard: function inGuard() {
      return !!_inGuard;
    },
    guard: function guard(fun, name, context) {
      var _ref;
      // TODO: (moti) T48204753 Make sure this warning is never hit and remove it - types
      // should be sufficient.
      if (typeof fun !== 'function') {
        console.warn('A function must be passed to ErrorUtils.guard, got ', fun);
        return null;
      }
      var guardName = (_ref = name != null ? name : fun.name) != null ? _ref : '<generated guard>';
      /* $FlowFixMe[missing-this-annot] The 'this' type annotation(s) required by
        * Flow's LTI update could not be added via codemod */
      function guarded() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return ErrorUtils.applyWithGuard(fun, context != null ? context : this, args, null, guardName);
      }
      return guarded;
    }
  };
  global.ErrorUtils = ErrorUtils;
})(typeof globalThis !== 'undefined' ? globalThis : typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this);
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var wgpu = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[0], "wgpu-matrix"));
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
},0,[1],"test.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0], "@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.vec4n = exports.vec4d = exports.vec4 = exports.vec3n = exports.vec3d = exports.vec3 = exports.vec2n = exports.vec2d = exports.vec2 = exports.utils = exports.quatn = exports.quatd = exports.quat = exports.mat4n = exports.mat4d = exports.mat4 = exports.mat3n = exports.mat3d = exports.mat3 = void 0;
  var _createClass2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1], "@babel/runtime/helpers/createClass"));
  var _classCallCheck2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2], "@babel/runtime/helpers/classCallCheck"));
  var _possibleConstructorReturn2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3], "@babel/runtime/helpers/possibleConstructorReturn"));
  var _getPrototypeOf2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4], "@babel/runtime/helpers/getPrototypeOf"));
  var _inherits2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5], "@babel/runtime/helpers/inherits"));
  function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  /* wgpu-matrix@3.3.0, license MIT */
  function wrapConstructor(OriginalConstructor, modifier) {
    return /*#__PURE__*/function (_OriginalConstructor) {
      function _class() {
        var _this;
        (0, _classCallCheck2.default)(this, _class);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _callSuper(this, _class, [].concat(args));
        modifier(_this);
        return _this;
      }
      (0, _inherits2.default)(_class, _OriginalConstructor);
      return (0, _createClass2.default)(_class);
    }(OriginalConstructor); // Type assertion is necessary here
  }
  var ZeroArray = wrapConstructor(Array, function (a) {
    return a.fill(0);
  });

  /*
    * Copyright 2022 Gregg Tavares
    *
    * Permission is hereby granted, free of charge, to any person obtaining a
    * copy of this software and associated documentation files (the "Software"),
    * to deal in the Software without restriction, including without limitation
    * the rights to use, copy, modify, merge, publish, distribute, sublicense,
    * and/or sell copies of the Software, and to permit persons to whom the
    * Software is furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
    * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
    * DEALINGS IN THE SOFTWARE.
    */
  var EPSILON = 0.000001;
  /**
   * Set the value for EPSILON for various checks
   * @param v - Value to use for EPSILON.
   * @returns previous value of EPSILON;
   */
  function setEpsilon(v) {
    var old = EPSILON;
    EPSILON = v;
    return old;
  }
  /**
   * Convert degrees to radians
   * @param degrees - Angle in degrees
   * @returns angle converted to radians
   */
  function degToRad(degrees) {
    return degrees * Math.PI / 180;
  }
  /**
   * Convert radians to degrees
   * @param radians - Angle in radians
   * @returns angle converted to degrees
   */
  function radToDeg(radians) {
    return radians * 180 / Math.PI;
  }
  /**
   * Lerps between a and b via t
   * @param a - starting value
   * @param b - ending value
   * @param t - value where 0 = a and 1 = b
   * @returns a + (b - a) * t
   */
  function lerp(a, b, t) {
    return a + (b - a) * t;
  }
  /**
   * Compute the opposite of lerp. Given a and b and a value between
   * a and b returns a value between 0 and 1. 0 if a, 1 if b.
   * Note: no clamping is done.
   * @param a - start value
   * @param b - end value
   * @param v - value between a and b
   * @returns (v - a) / (b - a)
   */
  function inverseLerp(a, b, v) {
    var d = b - a;
    return Math.abs(b - a) < EPSILON ? a : (v - a) / d;
  }
  /**
   * Compute the euclidean modulo
   *
   * ```
   * // table for n / 3
   * -5, -4, -3, -2, -1,  0,  1,  2,  3,  4,  5   <- n
   * ------------------------------------
   * -2  -1  -0  -2  -1   0,  1,  2,  0,  1,  2   <- n % 3
   *  1   2   0   1   2   0,  1,  2,  0,  1,  2   <- euclideanModule(n, 3)
   * ```
   *
   * @param n - dividend
   * @param m - divisor
   * @returns the euclidean modulo of n / m
   */
  function euclideanModulo(n, m) {
    return (n % m + m) % m;
  }
  var utils = exports.utils = {
    __proto__: null,
    get EPSILON() {
      return EPSILON;
    },
    degToRad: degToRad,
    euclideanModulo: euclideanModulo,
    inverseLerp: inverseLerp,
    lerp: lerp,
    radToDeg: radToDeg,
    setEpsilon: setEpsilon
  };

  /*
    * Copyright 2022 Gregg Tavares
    *
    * Permission is hereby granted, free of charge, to any person obtaining a
    * copy of this software and associated documentation files (the "Software"),
    * to deal in the Software without restriction, including without limitation
    * the rights to use, copy, modify, merge, publish, distribute, sublicense,
    * and/or sell copies of the Software, and to permit persons to whom the
    * Software is furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
    * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
    * DEALINGS IN THE SOFTWARE.
    */
  /**
   * Generates am typed API for Vec3
   */
  function getAPIImpl$5(Ctor) {
    /**
     * Creates a Vec2; may be called with x, y, z to set initial values.
     *
     * Note: Since passing in a raw JavaScript array
     * is valid in all circumstances, if you want to
     * force a JavaScript array into a Vec2's specified type
     * it would be faster to use
     *
     * ```
     * const v = vec2.clone(someJSArray);
     * ```
     *
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @returns the created vector
     */
    function create() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var newDst = new Ctor(2);
      if (x !== undefined) {
        newDst[0] = x;
        if (y !== undefined) {
          newDst[1] = y;
        }
      }
      return newDst;
    }
    /**
     * Creates a Vec2; may be called with x, y, z to set initial values. (same as create)
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @returns the created vector
     */
    var fromValues = create;
    /**
     * Sets the values of a Vec2
     * Also see {@link vec2.create} and {@link vec2.copy}
     *
     * @param x first value
     * @param y second value
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector with its elements set.
     */
    function set(x, y, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      newDst[0] = x;
      newDst[1] = y;
      return newDst;
    }
    /**
     * Applies Math.ceil to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the ceil of each element of v.
     */
    function ceil(v, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      newDst[0] = Math.ceil(v[0]);
      newDst[1] = Math.ceil(v[1]);
      return newDst;
    }
    /**
     * Applies Math.floor to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the floor of each element of v.
     */
    function floor(v, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      newDst[0] = Math.floor(v[0]);
      newDst[1] = Math.floor(v[1]);
      return newDst;
    }
    /**
     * Applies Math.round to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the round of each element of v.
     */
    function round(v, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      newDst[0] = Math.round(v[0]);
      newDst[1] = Math.round(v[1]);
      return newDst;
    }
    /**
     * Clamp each element of vector between min and max
     * @param v - Operand vector.
     * @param max - Min value, default 0
     * @param min - Max value, default 1
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that the clamped value of each element of v.
     */
    function clamp(v) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var dst = arguments.length > 3 ? arguments[3] : undefined;
      var newDst = dst != null ? dst : new Ctor(2);
      newDst[0] = Math.min(max, Math.max(min, v[0]));
      newDst[1] = Math.min(max, Math.max(min, v[1]));
      return newDst;
    }
    /**
     * Adds two vectors; assumes a and b have the same dimension.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the sum of a and b.
     */
    function add(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      newDst[0] = a[0] + b[0];
      newDst[1] = a[1] + b[1];
      return newDst;
    }
    /**
     * Adds two vectors, scaling the 2nd; assumes a and b have the same dimension.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param scale - Amount to scale b
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the sum of a + b * scale.
     */
    function addScaled(a, b, scale, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      newDst[0] = a[0] + b[0] * scale;
      newDst[1] = a[1] + b[1] * scale;
      return newDst;
    }
    /**
     * Returns the angle in radians between two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns The angle in radians between the 2 vectors.
     */
    function angle(a, b) {
      var ax = a[0];
      var ay = a[1];
      var bx = b[0];
      var by = b[1];
      var mag1 = Math.sqrt(ax * ax + ay * ay);
      var mag2 = Math.sqrt(bx * bx + by * by);
      var mag = mag1 * mag2;
      var cosine = mag && dot(a, b) / mag;
      return Math.acos(cosine);
    }
    /**
     * Subtracts two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the difference of a and b.
     */
    function subtract(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      newDst[0] = a[0] - b[0];
      newDst[1] = a[1] - b[1];
      return newDst;
    }
    /**
     * Subtracts two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the difference of a and b.
     */
    var sub = subtract;
    /**
     * Check if 2 vectors are approximately equal
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns true if vectors are approximately equal
     */
    function equalsApproximately(a, b) {
      return Math.abs(a[0] - b[0]) < EPSILON && Math.abs(a[1] - b[1]) < EPSILON;
    }
    /**
     * Check if 2 vectors are exactly equal
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns true if vectors are exactly equal
     */
    function equals(a, b) {
      return a[0] === b[0] && a[1] === b[1];
    }
    /**
     * Performs linear interpolation on two vectors.
     * Given vectors a and b and interpolation coefficient t, returns
     * a + t * (b - a).
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param t - Interpolation coefficient.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The linear interpolated result.
     */
    function lerp(a, b, t, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      newDst[0] = a[0] + t * (b[0] - a[0]);
      newDst[1] = a[1] + t * (b[1] - a[1]);
      return newDst;
    }
    /**
     * Performs linear interpolation on two vectors.
     * Given vectors a and b and interpolation coefficient vector t, returns
     * a + t * (b - a).
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param t - Interpolation coefficients vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns the linear interpolated result.
     */
    function lerpV(a, b, t, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      newDst[0] = a[0] + t[0] * (b[0] - a[0]);
      newDst[1] = a[1] + t[1] * (b[1] - a[1]);
      return newDst;
    }
    /**
     * Return max values of two vectors.
     * Given vectors a and b returns
     * [max(a[0], b[0]), max(a[1], b[1]), max(a[2], b[2])].
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The max components vector.
     */
    function max(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      newDst[0] = Math.max(a[0], b[0]);
      newDst[1] = Math.max(a[1], b[1]);
      return newDst;
    }
    /**
     * Return min values of two vectors.
     * Given vectors a and b returns
     * [min(a[0], b[0]), min(a[1], b[1]), min(a[2], b[2])].
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The min components vector.
     */
    function min(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      newDst[0] = Math.min(a[0], b[0]);
      newDst[1] = Math.min(a[1], b[1]);
      return newDst;
    }
    /**
     * Multiplies a vector by a scalar.
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    function mulScalar(v, k, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      newDst[0] = v[0] * k;
      newDst[1] = v[1] * k;
      return newDst;
    }
    /**
     * Multiplies a vector by a scalar. (same as mulScalar)
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    var scale = mulScalar;
    /**
     * Divides a vector by a scalar.
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    function divScalar(v, k, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      newDst[0] = v[0] / k;
      newDst[1] = v[1] / k;
      return newDst;
    }
    /**
     * Inverse a vector.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The inverted vector.
     */
    function inverse(v, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      newDst[0] = 1 / v[0];
      newDst[1] = 1 / v[1];
      return newDst;
    }
    /**
     * Invert a vector. (same as inverse)
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The inverted vector.
     */
    var invert = inverse;
    /**
     * Computes the cross product of two vectors; assumes both vectors have
     * three entries.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of a cross b.
     */
    function cross(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      var z = a[0] * b[1] - a[1] * b[0];
      newDst[0] = 0;
      newDst[1] = 0;
      newDst[2] = z;
      return newDst;
    }
    /**
     * Computes the dot product of two vectors; assumes both vectors have
     * three entries.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns dot product
     */
    function dot(a, b) {
      return a[0] * b[0] + a[1] * b[1];
    }
    /**
     * Computes the length of vector
     * @param v - vector.
     * @returns length of vector.
     */
    function length(v) {
      var v0 = v[0];
      var v1 = v[1];
      return Math.sqrt(v0 * v0 + v1 * v1);
    }
    /**
     * Computes the length of vector (same as length)
     * @param v - vector.
     * @returns length of vector.
     */
    var len = length;
    /**
     * Computes the square of the length of vector
     * @param v - vector.
     * @returns square of the length of vector.
     */
    function lengthSq(v) {
      var v0 = v[0];
      var v1 = v[1];
      return v0 * v0 + v1 * v1;
    }
    /**
     * Computes the square of the length of vector (same as lengthSq)
     * @param v - vector.
     * @returns square of the length of vector.
     */
    var lenSq = lengthSq;
    /**
     * Computes the distance between 2 points
     * @param a - vector.
     * @param b - vector.
     * @returns distance between a and b
     */
    function distance(a, b) {
      var dx = a[0] - b[0];
      var dy = a[1] - b[1];
      return Math.sqrt(dx * dx + dy * dy);
    }
    /**
     * Computes the distance between 2 points (same as distance)
     * @param a - vector.
     * @param b - vector.
     * @returns distance between a and b
     */
    var dist = distance;
    /**
     * Computes the square of the distance between 2 points
     * @param a - vector.
     * @param b - vector.
     * @returns square of the distance between a and b
     */
    function distanceSq(a, b) {
      var dx = a[0] - b[0];
      var dy = a[1] - b[1];
      return dx * dx + dy * dy;
    }
    /**
     * Computes the square of the distance between 2 points (same as distanceSq)
     * @param a - vector.
     * @param b - vector.
     * @returns square of the distance between a and b
     */
    var distSq = distanceSq;
    /**
     * Divides a vector by its Euclidean length and returns the quotient.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The normalized vector.
     */
    function normalize(v, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      var v0 = v[0];
      var v1 = v[1];
      var len = Math.sqrt(v0 * v0 + v1 * v1);
      if (len > 0.00001) {
        newDst[0] = v0 / len;
        newDst[1] = v1 / len;
      } else {
        newDst[0] = 0;
        newDst[1] = 0;
      }
      return newDst;
    }
    /**
     * Negates a vector.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns -v.
     */
    function negate(v, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      newDst[0] = -v[0];
      newDst[1] = -v[1];
      return newDst;
    }
    /**
     * Copies a vector. (same as {@link vec2.clone})
     * Also see {@link vec2.create} and {@link vec2.set}
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A copy of v.
     */
    function copy(v, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      newDst[0] = v[0];
      newDst[1] = v[1];
      return newDst;
    }
    /**
     * Clones a vector. (same as {@link vec2.copy})
     * Also see {@link vec2.create} and {@link vec2.set}
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A copy of v.
     */
    var clone = copy;
    /**
     * Multiplies a vector by another vector (component-wise); assumes a and
     * b have the same length.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of products of entries of a and b.
     */
    function multiply(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      newDst[0] = a[0] * b[0];
      newDst[1] = a[1] * b[1];
      return newDst;
    }
    /**
     * Multiplies a vector by another vector (component-wise); assumes a and
     * b have the same length. (same as mul)
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of products of entries of a and b.
     */
    var mul = multiply;
    /**
     * Divides a vector by another vector (component-wise); assumes a and
     * b have the same length.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of quotients of entries of a and b.
     */
    function divide(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      newDst[0] = a[0] / b[0];
      newDst[1] = a[1] / b[1];
      return newDst;
    }
    /**
     * Divides a vector by another vector (component-wise); assumes a and
     * b have the same length. (same as divide)
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of quotients of entries of a and b.
     */
    var div = divide;
    /**
     * Creates a random unit vector * scale
     * @param scale - Default 1
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The random vector.
     */
    function random() {
      var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var dst = arguments.length > 1 ? arguments[1] : undefined;
      var newDst = dst != null ? dst : new Ctor(2);
      var angle = Math.random() * 2 * Math.PI;
      newDst[0] = Math.cos(angle) * scale;
      newDst[1] = Math.sin(angle) * scale;
      return newDst;
    }
    /**
     * Zero's a vector
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The zeroed vector.
     */
    function zero(dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      newDst[0] = 0;
      newDst[1] = 0;
      return newDst;
    }
    /**
     * transform Vec2 by 4x4 matrix
     * @param v - the vector
     * @param m - The matrix.
     * @param dst - optional Vec2 to store result. If not passed a new one is created.
     * @returns the transformed vector
     */
    function transformMat4(v, m, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      var x = v[0];
      var y = v[1];
      newDst[0] = x * m[0] + y * m[4] + m[12];
      newDst[1] = x * m[1] + y * m[5] + m[13];
      return newDst;
    }
    /**
     * Transforms vec4 by 3x3 matrix
     *
     * @param v - the vector
     * @param m - The matrix.
     * @param dst - optional Vec2 to store result. If not passed a new one is created.
     * @returns the transformed vector
     */
    function transformMat3(v, m, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      var x = v[0];
      var y = v[1];
      newDst[0] = m[0] * x + m[4] * y + m[8];
      newDst[1] = m[1] * x + m[5] * y + m[9];
      return newDst;
    }
    /**
     * Rotate a 2D vector
     *
     * @param a The vec2 point to rotate
     * @param b The origin of the rotation
     * @param rad The angle of rotation in radians
     * @returns the rotated vector
     */
    function rotate(a, b, rad, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      // Translate point to the origin
      var p0 = a[0] - b[0];
      var p1 = a[1] - b[1];
      var sinC = Math.sin(rad);
      var cosC = Math.cos(rad);
      //perform rotation and translate to correct position
      newDst[0] = p0 * cosC - p1 * sinC + b[0];
      newDst[1] = p0 * sinC + p1 * cosC + b[1];
      return newDst;
    }
    /**
     * Treat a 2D vector as a direction and set it's length
     *
     * @param a The vec2 to lengthen
     * @param len The length of the resulting vector
     * @returns The lengthened vector
     */
    function setLength(a, len, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      normalize(a, newDst);
      return mulScalar(newDst, len, newDst);
    }
    /**
     * Ensure a vector is not longer than a max length
     *
     * @param a The vec2 to limit
     * @param maxLen The longest length of the resulting vector
     * @returns The vector, shortened to maxLen if it's too long
     */
    function truncate(a, maxLen, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      if (length(a) > maxLen) {
        return setLength(a, maxLen, newDst);
      }
      return copy(a, newDst);
    }
    /**
     * Return the vector exactly between 2 endpoint vectors
     *
     * @param a Endpoint 1
     * @param b Endpoint 2
     * @returns The vector exactly residing between endpoints 1 and 2
     */
    function midpoint(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(2);
      return lerp(a, b, 0.5, newDst);
    }
    return {
      create: create,
      fromValues: fromValues,
      set: set,
      ceil: ceil,
      floor: floor,
      round: round,
      clamp: clamp,
      add: add,
      addScaled: addScaled,
      angle: angle,
      subtract: subtract,
      sub: sub,
      equalsApproximately: equalsApproximately,
      equals: equals,
      lerp: lerp,
      lerpV: lerpV,
      max: max,
      min: min,
      mulScalar: mulScalar,
      scale: scale,
      divScalar: divScalar,
      inverse: inverse,
      invert: invert,
      cross: cross,
      dot: dot,
      length: length,
      len: len,
      lengthSq: lengthSq,
      lenSq: lenSq,
      distance: distance,
      dist: dist,
      distanceSq: distanceSq,
      distSq: distSq,
      normalize: normalize,
      negate: negate,
      copy: copy,
      clone: clone,
      multiply: multiply,
      mul: mul,
      divide: divide,
      div: div,
      random: random,
      zero: zero,
      transformMat4: transformMat4,
      transformMat3: transformMat3,
      rotate: rotate,
      setLength: setLength,
      truncate: truncate,
      midpoint: midpoint
    };
  }
  var cache$5 = new Map();
  function getAPI$5(Ctor) {
    var api = cache$5.get(Ctor);
    if (!api) {
      api = getAPIImpl$5(Ctor);
      cache$5.set(Ctor, api);
    }
    return api;
  }

  /*
    * Copyright 2022 Gregg Tavares
    *
    * Permission is hereby granted, free of charge, to any person obtaining a
    * copy of this software and associated documentation files (the "Software"),
    * to deal in the Software without restriction, including without limitation
    * the rights to use, copy, modify, merge, publish, distribute, sublicense,
    * and/or sell copies of the Software, and to permit persons to whom the
    * Software is furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
    * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
    * DEALINGS IN THE SOFTWARE.
    */
  /**
   * Generates am typed API for Vec3
   * */
  function getAPIImpl$4(Ctor) {
    /**
     * Creates a vec3; may be called with x, y, z to set initial values.
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @param z - Initial z value.
     * @returns the created vector
     */
    function create(x, y, z) {
      var newDst = new Ctor(3);
      if (x !== undefined) {
        newDst[0] = x;
        if (y !== undefined) {
          newDst[1] = y;
          if (z !== undefined) {
            newDst[2] = z;
          }
        }
      }
      return newDst;
    }
    /**
     * Creates a vec3; may be called with x, y, z to set initial values. (same as create)
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @param z - Initial z value.
     * @returns the created vector
     */
    var fromValues = create;
    /**
     * Sets the values of a Vec3
     * Also see {@link vec3.create} and {@link vec3.copy}
     *
     * @param x first value
     * @param y second value
     * @param z third value
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector with its elements set.
     */
    function set(x, y, z, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      newDst[0] = x;
      newDst[1] = y;
      newDst[2] = z;
      return newDst;
    }
    /**
     * Applies Math.ceil to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the ceil of each element of v.
     */
    function ceil(v, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      newDst[0] = Math.ceil(v[0]);
      newDst[1] = Math.ceil(v[1]);
      newDst[2] = Math.ceil(v[2]);
      return newDst;
    }
    /**
     * Applies Math.floor to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the floor of each element of v.
     */
    function floor(v, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      newDst[0] = Math.floor(v[0]);
      newDst[1] = Math.floor(v[1]);
      newDst[2] = Math.floor(v[2]);
      return newDst;
    }
    /**
     * Applies Math.round to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the round of each element of v.
     */
    function round(v, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      newDst[0] = Math.round(v[0]);
      newDst[1] = Math.round(v[1]);
      newDst[2] = Math.round(v[2]);
      return newDst;
    }
    /**
     * Clamp each element of vector between min and max
     * @param v - Operand vector.
     * @param max - Min value, default 0
     * @param min - Max value, default 1
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that the clamped value of each element of v.
     */
    function clamp(v) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var dst = arguments.length > 3 ? arguments[3] : undefined;
      var newDst = dst != null ? dst : new Ctor(3);
      newDst[0] = Math.min(max, Math.max(min, v[0]));
      newDst[1] = Math.min(max, Math.max(min, v[1]));
      newDst[2] = Math.min(max, Math.max(min, v[2]));
      return newDst;
    }
    /**
     * Adds two vectors; assumes a and b have the same dimension.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the sum of a and b.
     */
    function add(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      newDst[0] = a[0] + b[0];
      newDst[1] = a[1] + b[1];
      newDst[2] = a[2] + b[2];
      return newDst;
    }
    /**
     * Adds two vectors, scaling the 2nd; assumes a and b have the same dimension.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param scale - Amount to scale b
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the sum of a + b * scale.
     */
    function addScaled(a, b, scale, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      newDst[0] = a[0] + b[0] * scale;
      newDst[1] = a[1] + b[1] * scale;
      newDst[2] = a[2] + b[2] * scale;
      return newDst;
    }
    /**
     * Returns the angle in radians between two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns The angle in radians between the 2 vectors.
     */
    function angle(a, b) {
      var ax = a[0];
      var ay = a[1];
      var az = a[2];
      var bx = b[0];
      var by = b[1];
      var bz = b[2];
      var mag1 = Math.sqrt(ax * ax + ay * ay + az * az);
      var mag2 = Math.sqrt(bx * bx + by * by + bz * bz);
      var mag = mag1 * mag2;
      var cosine = mag && dot(a, b) / mag;
      return Math.acos(cosine);
    }
    /**
     * Subtracts two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the difference of a and b.
     */
    function subtract(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      newDst[0] = a[0] - b[0];
      newDst[1] = a[1] - b[1];
      newDst[2] = a[2] - b[2];
      return newDst;
    }
    /**
     * Subtracts two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the difference of a and b.
     */
    var sub = subtract;
    /**
     * Check if 2 vectors are approximately equal
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns true if vectors are approximately equal
     */
    function equalsApproximately(a, b) {
      return Math.abs(a[0] - b[0]) < EPSILON && Math.abs(a[1] - b[1]) < EPSILON && Math.abs(a[2] - b[2]) < EPSILON;
    }
    /**
     * Check if 2 vectors are exactly equal
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns true if vectors are exactly equal
     */
    function equals(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
    }
    /**
     * Performs linear interpolation on two vectors.
     * Given vectors a and b and interpolation coefficient t, returns
     * a + t * (b - a).
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param t - Interpolation coefficient.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The linear interpolated result.
     */
    function lerp(a, b, t, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      newDst[0] = a[0] + t * (b[0] - a[0]);
      newDst[1] = a[1] + t * (b[1] - a[1]);
      newDst[2] = a[2] + t * (b[2] - a[2]);
      return newDst;
    }
    /**
     * Performs linear interpolation on two vectors.
     * Given vectors a and b and interpolation coefficient vector t, returns
     * a + t * (b - a).
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param t - Interpolation coefficients vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns the linear interpolated result.
     */
    function lerpV(a, b, t, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      newDst[0] = a[0] + t[0] * (b[0] - a[0]);
      newDst[1] = a[1] + t[1] * (b[1] - a[1]);
      newDst[2] = a[2] + t[2] * (b[2] - a[2]);
      return newDst;
    }
    /**
     * Return max values of two vectors.
     * Given vectors a and b returns
     * [max(a[0], b[0]), max(a[1], b[1]), max(a[2], b[2])].
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The max components vector.
     */
    function max(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      newDst[0] = Math.max(a[0], b[0]);
      newDst[1] = Math.max(a[1], b[1]);
      newDst[2] = Math.max(a[2], b[2]);
      return newDst;
    }
    /**
     * Return min values of two vectors.
     * Given vectors a and b returns
     * [min(a[0], b[0]), min(a[1], b[1]), min(a[2], b[2])].
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The min components vector.
     */
    function min(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      newDst[0] = Math.min(a[0], b[0]);
      newDst[1] = Math.min(a[1], b[1]);
      newDst[2] = Math.min(a[2], b[2]);
      return newDst;
    }
    /**
     * Multiplies a vector by a scalar.
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    function mulScalar(v, k, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      newDst[0] = v[0] * k;
      newDst[1] = v[1] * k;
      newDst[2] = v[2] * k;
      return newDst;
    }
    /**
     * Multiplies a vector by a scalar. (same as mulScalar)
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    var scale = mulScalar;
    /**
     * Divides a vector by a scalar.
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    function divScalar(v, k, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      newDst[0] = v[0] / k;
      newDst[1] = v[1] / k;
      newDst[2] = v[2] / k;
      return newDst;
    }
    /**
     * Inverse a vector.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The inverted vector.
     */
    function inverse(v, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      newDst[0] = 1 / v[0];
      newDst[1] = 1 / v[1];
      newDst[2] = 1 / v[2];
      return newDst;
    }
    /**
     * Invert a vector. (same as inverse)
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The inverted vector.
     */
    var invert = inverse;
    /**
     * Computes the cross product of two vectors; assumes both vectors have
     * three entries.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of a cross b.
     */
    function cross(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      var t1 = a[2] * b[0] - a[0] * b[2];
      var t2 = a[0] * b[1] - a[1] * b[0];
      newDst[0] = a[1] * b[2] - a[2] * b[1];
      newDst[1] = t1;
      newDst[2] = t2;
      return newDst;
    }
    /**
     * Computes the dot product of two vectors; assumes both vectors have
     * three entries.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns dot product
     */
    function dot(a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    }
    /**
     * Computes the length of vector
     * @param v - vector.
     * @returns length of vector.
     */
    function length(v) {
      var v0 = v[0];
      var v1 = v[1];
      var v2 = v[2];
      return Math.sqrt(v0 * v0 + v1 * v1 + v2 * v2);
    }
    /**
     * Computes the length of vector (same as length)
     * @param v - vector.
     * @returns length of vector.
     */
    var len = length;
    /**
     * Computes the square of the length of vector
     * @param v - vector.
     * @returns square of the length of vector.
     */
    function lengthSq(v) {
      var v0 = v[0];
      var v1 = v[1];
      var v2 = v[2];
      return v0 * v0 + v1 * v1 + v2 * v2;
    }
    /**
     * Computes the square of the length of vector (same as lengthSq)
     * @param v - vector.
     * @returns square of the length of vector.
     */
    var lenSq = lengthSq;
    /**
     * Computes the distance between 2 points
     * @param a - vector.
     * @param b - vector.
     * @returns distance between a and b
     */
    function distance(a, b) {
      var dx = a[0] - b[0];
      var dy = a[1] - b[1];
      var dz = a[2] - b[2];
      return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
    /**
     * Computes the distance between 2 points (same as distance)
     * @param a - vector.
     * @param b - vector.
     * @returns distance between a and b
     */
    var dist = distance;
    /**
     * Computes the square of the distance between 2 points
     * @param a - vector.
     * @param b - vector.
     * @returns square of the distance between a and b
     */
    function distanceSq(a, b) {
      var dx = a[0] - b[0];
      var dy = a[1] - b[1];
      var dz = a[2] - b[2];
      return dx * dx + dy * dy + dz * dz;
    }
    /**
     * Computes the square of the distance between 2 points (same as distanceSq)
     * @param a - vector.
     * @param b - vector.
     * @returns square of the distance between a and b
     */
    var distSq = distanceSq;
    /**
     * Divides a vector by its Euclidean length and returns the quotient.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The normalized vector.
     */
    function normalize(v, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      var v0 = v[0];
      var v1 = v[1];
      var v2 = v[2];
      var len = Math.sqrt(v0 * v0 + v1 * v1 + v2 * v2);
      if (len > 0.00001) {
        newDst[0] = v0 / len;
        newDst[1] = v1 / len;
        newDst[2] = v2 / len;
      } else {
        newDst[0] = 0;
        newDst[1] = 0;
        newDst[2] = 0;
      }
      return newDst;
    }
    /**
     * Negates a vector.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns -v.
     */
    function negate(v, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      newDst[0] = -v[0];
      newDst[1] = -v[1];
      newDst[2] = -v[2];
      return newDst;
    }
    /**
     * Copies a vector. (same as {@link vec3.clone})
     * Also see {@link vec3.create} and {@link vec3.set}
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A copy of v.
     */
    function copy(v, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      newDst[0] = v[0];
      newDst[1] = v[1];
      newDst[2] = v[2];
      return newDst;
    }
    /**
     * Clones a vector. (same as {@link vec3.copy})
     * Also see {@link vec3.create} and {@link vec3.set}
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A copy of v.
     */
    var clone = copy;
    /**
     * Multiplies a vector by another vector (component-wise); assumes a and
     * b have the same length.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of products of entries of a and b.
     */
    function multiply(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      newDst[0] = a[0] * b[0];
      newDst[1] = a[1] * b[1];
      newDst[2] = a[2] * b[2];
      return newDst;
    }
    /**
     * Multiplies a vector by another vector (component-wise); assumes a and
     * b have the same length. (same as mul)
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of products of entries of a and b.
     */
    var mul = multiply;
    /**
     * Divides a vector by another vector (component-wise); assumes a and
     * b have the same length.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of quotients of entries of a and b.
     */
    function divide(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      newDst[0] = a[0] / b[0];
      newDst[1] = a[1] / b[1];
      newDst[2] = a[2] / b[2];
      return newDst;
    }
    /**
     * Divides a vector by another vector (component-wise); assumes a and
     * b have the same length. (same as divide)
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of quotients of entries of a and b.
     */
    var div = divide;
    /**
     * Creates a random vector
     * @param scale - Default 1
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The random vector.
     */
    function random() {
      var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var dst = arguments.length > 1 ? arguments[1] : undefined;
      var newDst = dst != null ? dst : new Ctor(3);
      var angle = Math.random() * 2 * Math.PI;
      var z = Math.random() * 2 - 1;
      var zScale = Math.sqrt(1 - z * z) * scale;
      newDst[0] = Math.cos(angle) * zScale;
      newDst[1] = Math.sin(angle) * zScale;
      newDst[2] = z * scale;
      return newDst;
    }
    /**
     * Zero's a vector
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The zeroed vector.
     */
    function zero(dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      newDst[0] = 0;
      newDst[1] = 0;
      newDst[2] = 0;
      return newDst;
    }
    /**
     * transform vec3 by 4x4 matrix
     * @param v - the vector
     * @param m - The matrix.
     * @param dst - optional vec3 to store result. If not passed a new one is created.
     * @returns the transformed vector
     */
    function transformMat4(v, m, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      var x = v[0];
      var y = v[1];
      var z = v[2];
      var w = m[3] * x + m[7] * y + m[11] * z + m[15] || 1;
      newDst[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
      newDst[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
      newDst[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
      return newDst;
    }
    /**
     * Transform vec3 by upper 3x3 matrix inside 4x4 matrix.
     * @param v - The direction.
     * @param m - The matrix.
     * @param dst - optional vec3 to store result. If not passed a new one is created.
     * @returns The transformed vector.
     */
    function transformMat4Upper3x3(v, m, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      var v0 = v[0];
      var v1 = v[1];
      var v2 = v[2];
      newDst[0] = v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0];
      newDst[1] = v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1];
      newDst[2] = v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2];
      return newDst;
    }
    /**
     * Transforms vec3 by 3x3 matrix
     *
     * @param v - the vector
     * @param m - The matrix.
     * @param dst - optional vec3 to store result. If not passed a new one is created.
     * @returns the transformed vector
     */
    function transformMat3(v, m, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      var x = v[0];
      var y = v[1];
      var z = v[2];
      newDst[0] = x * m[0] + y * m[4] + z * m[8];
      newDst[1] = x * m[1] + y * m[5] + z * m[9];
      newDst[2] = x * m[2] + y * m[6] + z * m[10];
      return newDst;
    }
    /**
     * Transforms vec3 by Quaternion
     * @param v - the vector to transform
     * @param q - the quaternion to transform by
     * @param dst - optional vec3 to store result. If not passed a new one is created.
     * @returns the transformed
     */
    function transformQuat(v, q, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      var qx = q[0];
      var qy = q[1];
      var qz = q[2];
      var w2 = q[3] * 2;
      var x = v[0];
      var y = v[1];
      var z = v[2];
      var uvX = qy * z - qz * y;
      var uvY = qz * x - qx * z;
      var uvZ = qx * y - qy * x;
      newDst[0] = x + uvX * w2 + (qy * uvZ - qz * uvY) * 2;
      newDst[1] = y + uvY * w2 + (qz * uvX - qx * uvZ) * 2;
      newDst[2] = z + uvZ * w2 + (qx * uvY - qy * uvX) * 2;
      return newDst;
    }
    /**
     * Returns the translation component of a 4-by-4 matrix as a vector with 3
     * entries.
     * @param m - The matrix.
     * @param dst - vector to hold result. If not passed a new one is created.
     * @returns The translation component of m.
     */
    function getTranslation(m, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      newDst[0] = m[12];
      newDst[1] = m[13];
      newDst[2] = m[14];
      return newDst;
    }
    /**
     * Returns an axis of a 4x4 matrix as a vector with 3 entries
     * @param m - The matrix.
     * @param axis - The axis 0 = x, 1 = y, 2 = z;
     * @returns The axis component of m.
     */
    function getAxis(m, axis, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      var off = axis * 4;
      newDst[0] = m[off + 0];
      newDst[1] = m[off + 1];
      newDst[2] = m[off + 2];
      return newDst;
    }
    /**
     * Returns the scaling component of the matrix
     * @param m - The Matrix
     * @param dst - The vector to set. If not passed a new one is created.
     */
    function getScaling(m, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      var xx = m[0];
      var xy = m[1];
      var xz = m[2];
      var yx = m[4];
      var yy = m[5];
      var yz = m[6];
      var zx = m[8];
      var zy = m[9];
      var zz = m[10];
      newDst[0] = Math.sqrt(xx * xx + xy * xy + xz * xz);
      newDst[1] = Math.sqrt(yx * yx + yy * yy + yz * yz);
      newDst[2] = Math.sqrt(zx * zx + zy * zy + zz * zz);
      return newDst;
    }
    /**
     * Rotate a 3D vector around the x-axis
     *
     * @param {ReadonlyVec3} a The vec3 point to rotate
     * @param {ReadonlyVec3} b The origin of the rotation
     * @param {Number} rad The angle of rotation in radians
     * @param dst - The vector to set. If not passed a new one is created.
     * @returns the rotated vector
     */
    function rotateX(a, b, rad, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      var p = [];
      var r = [];
      //Translate point to the origin
      p[0] = a[0] - b[0];
      p[1] = a[1] - b[1];
      p[2] = a[2] - b[2];
      //perform rotation
      r[0] = p[0];
      r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
      r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad);
      //translate to correct position
      newDst[0] = r[0] + b[0];
      newDst[1] = r[1] + b[1];
      newDst[2] = r[2] + b[2];
      return newDst;
    }
    /**
     * Rotate a 3D vector around the y-axis
     *
     * @param {ReadonlyVec3} a The vec3 point to rotate
     * @param {ReadonlyVec3} b The origin of the rotation
     * @param {Number} rad The angle of rotation in radians
     * @param dst - The vector to set. If not passed a new one is created.
     * @returns the rotated vector
     */
    function rotateY(a, b, rad, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      var p = [];
      var r = [];
      // translate point to the origin
      p[0] = a[0] - b[0];
      p[1] = a[1] - b[1];
      p[2] = a[2] - b[2];
      // perform rotation
      r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
      r[1] = p[1];
      r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad);
      // translate to correct position
      newDst[0] = r[0] + b[0];
      newDst[1] = r[1] + b[1];
      newDst[2] = r[2] + b[2];
      return newDst;
    }
    /**
     * Rotate a 3D vector around the z-axis
     *
     * @param {ReadonlyVec3} a The vec3 point to rotate
     * @param {ReadonlyVec3} b The origin of the rotation
     * @param {Number} rad The angle of rotation in radians
     * @param dst - The vector to set. If not passed a new one is created.
     * @returns {vec3} out
     */
    function rotateZ(a, b, rad, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      var p = [];
      var r = [];
      // translate point to the origin
      p[0] = a[0] - b[0];
      p[1] = a[1] - b[1];
      p[2] = a[2] - b[2];
      // perform rotation
      r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
      r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
      r[2] = p[2];
      // translate to correct position
      newDst[0] = r[0] + b[0];
      newDst[1] = r[1] + b[1];
      newDst[2] = r[2] + b[2];
      return newDst;
    }
    /**
     * Treat a 3D vector as a direction and set it's length
     *
     * @param a The vec3 to lengthen
     * @param len The length of the resulting vector
     * @returns The lengthened vector
     */
    function setLength(a, len, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      normalize(a, newDst);
      return mulScalar(newDst, len, newDst);
    }
    /**
     * Ensure a vector is not longer than a max length
     *
     * @param a The vec3 to limit
     * @param maxLen The longest length of the resulting vector
     * @returns The vector, shortened to maxLen if it's too long
     */
    function truncate(a, maxLen, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      if (length(a) > maxLen) {
        return setLength(a, maxLen, newDst);
      }
      return copy(a, newDst);
    }
    /**
     * Return the vector exactly between 2 endpoint vectors
     *
     * @param a Endpoint 1
     * @param b Endpoint 2
     * @returns The vector exactly residing between endpoints 1 and 2
     */
    function midpoint(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(3);
      return lerp(a, b, 0.5, newDst);
    }
    return {
      create: create,
      fromValues: fromValues,
      set: set,
      ceil: ceil,
      floor: floor,
      round: round,
      clamp: clamp,
      add: add,
      addScaled: addScaled,
      angle: angle,
      subtract: subtract,
      sub: sub,
      equalsApproximately: equalsApproximately,
      equals: equals,
      lerp: lerp,
      lerpV: lerpV,
      max: max,
      min: min,
      mulScalar: mulScalar,
      scale: scale,
      divScalar: divScalar,
      inverse: inverse,
      invert: invert,
      cross: cross,
      dot: dot,
      length: length,
      len: len,
      lengthSq: lengthSq,
      lenSq: lenSq,
      distance: distance,
      dist: dist,
      distanceSq: distanceSq,
      distSq: distSq,
      normalize: normalize,
      negate: negate,
      copy: copy,
      clone: clone,
      multiply: multiply,
      mul: mul,
      divide: divide,
      div: div,
      random: random,
      zero: zero,
      transformMat4: transformMat4,
      transformMat4Upper3x3: transformMat4Upper3x3,
      transformMat3: transformMat3,
      transformQuat: transformQuat,
      getTranslation: getTranslation,
      getAxis: getAxis,
      getScaling: getScaling,
      rotateX: rotateX,
      rotateY: rotateY,
      rotateZ: rotateZ,
      setLength: setLength,
      truncate: truncate,
      midpoint: midpoint
    };
  }
  var cache$4 = new Map();
  function getAPI$4(Ctor) {
    var api = cache$4.get(Ctor);
    if (!api) {
      api = getAPIImpl$4(Ctor);
      cache$4.set(Ctor, api);
    }
    return api;
  }

  /*
    * Copyright 2022 Gregg Tavares
    *
    * Permission is hereby granted, free of charge, to any person obtaining a
    * copy of this software and associated documentation files (the "Software"),
    * to deal in the Software without restriction, including without limitation
    * the rights to use, copy, modify, merge, publish, distribute, sublicense,
    * and/or sell copies of the Software, and to permit persons to whom the
    * Software is furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
    * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
    * DEALINGS IN THE SOFTWARE.
    */
  /**
   * Generates a typed API for Mat3
   * */
  function getAPIImpl$3(Ctor) {
    var vec2 = getAPI$5(Ctor);
    var vec3 = getAPI$4(Ctor);
    /**
     * Create a Mat3 from values
     *
     * Note: Since passing in a raw JavaScript array
     * is valid in all circumstances, if you want to
     * force a JavaScript array into a Mat3's specified type
     * it would be faster to use
     *
     * ```
     * const m = mat3.clone(someJSArray);
     * ```
     *
     * @param v0 - value for element 0
     * @param v1 - value for element 1
     * @param v2 - value for element 2
     * @param v3 - value for element 3
     * @param v4 - value for element 4
     * @param v5 - value for element 5
     * @param v6 - value for element 6
     * @param v7 - value for element 7
     * @param v8 - value for element 8
     * @returns matrix created from values.
     */
    function create(v0, v1, v2, v3, v4, v5, v6, v7, v8) {
      var newDst = new Ctor(12);
      // to make the array homogenous
      newDst[3] = 0;
      newDst[7] = 0;
      newDst[11] = 0;
      if (v0 !== undefined) {
        newDst[0] = v0;
        if (v1 !== undefined) {
          newDst[1] = v1;
          if (v2 !== undefined) {
            newDst[2] = v2;
            if (v3 !== undefined) {
              newDst[4] = v3;
              if (v4 !== undefined) {
                newDst[5] = v4;
                if (v5 !== undefined) {
                  newDst[6] = v5;
                  if (v6 !== undefined) {
                    newDst[8] = v6;
                    if (v7 !== undefined) {
                      newDst[9] = v7;
                      if (v8 !== undefined) {
                        newDst[10] = v8;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      return newDst;
    }
    /**
     * Sets the values of a Mat3
     * Also see {@link mat3.create} and {@link mat3.copy}
     *
     * @param v0 - value for element 0
     * @param v1 - value for element 1
     * @param v2 - value for element 2
     * @param v3 - value for element 3
     * @param v4 - value for element 4
     * @param v5 - value for element 5
     * @param v6 - value for element 6
     * @param v7 - value for element 7
     * @param v8 - value for element 8
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns Mat3 set from values.
     */
    function set(v0, v1, v2, v3, v4, v5, v6, v7, v8, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      newDst[0] = v0;
      newDst[1] = v1;
      newDst[2] = v2;
      newDst[3] = 0;
      newDst[4] = v3;
      newDst[5] = v4;
      newDst[6] = v5;
      newDst[7] = 0;
      newDst[8] = v6;
      newDst[9] = v7;
      newDst[10] = v8;
      newDst[11] = 0;
      return newDst;
    }
    /**
     * Creates a Mat3 from the upper left 3x3 part of a Mat4
     * @param m4 - source matrix
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns Mat3 made from m4
     */
    function fromMat4(m4, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      newDst[0] = m4[0];
      newDst[1] = m4[1];
      newDst[2] = m4[2];
      newDst[3] = 0;
      newDst[4] = m4[4];
      newDst[5] = m4[5];
      newDst[6] = m4[6];
      newDst[7] = 0;
      newDst[8] = m4[8];
      newDst[9] = m4[9];
      newDst[10] = m4[10];
      newDst[11] = 0;
      return newDst;
    }
    /**
     * Creates a Mat3 rotation matrix from a quaternion
     * @param q - quaternion to create matrix from
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns Mat3 made from q
     */
    function fromQuat(q, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      var x = q[0];
      var y = q[1];
      var z = q[2];
      var w = q[3];
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;
      var xx = x * x2;
      var yx = y * x2;
      var yy = y * y2;
      var zx = z * x2;
      var zy = z * y2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;
      newDst[0] = 1 - yy - zz;
      newDst[1] = yx + wz;
      newDst[2] = zx - wy;
      newDst[3] = 0;
      newDst[4] = yx - wz;
      newDst[5] = 1 - xx - zz;
      newDst[6] = zy + wx;
      newDst[7] = 0;
      newDst[8] = zx + wy;
      newDst[9] = zy - wx;
      newDst[10] = 1 - xx - yy;
      newDst[11] = 0;
      return newDst;
    }
    /**
     * Negates a matrix.
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns -m.
     */
    function negate(m, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      newDst[0] = -m[0];
      newDst[1] = -m[1];
      newDst[2] = -m[2];
      newDst[4] = -m[4];
      newDst[5] = -m[5];
      newDst[6] = -m[6];
      newDst[8] = -m[8];
      newDst[9] = -m[9];
      newDst[10] = -m[10];
      return newDst;
    }
    /**
     * Copies a matrix. (same as {@link mat3.clone})
     * Also see {@link mat3.create} and {@link mat3.set}
     * @param m - The matrix.
     * @param dst - The matrix. If not passed a new one is created.
     * @returns A copy of m.
     */
    function copy(m, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      newDst[0] = m[0];
      newDst[1] = m[1];
      newDst[2] = m[2];
      newDst[4] = m[4];
      newDst[5] = m[5];
      newDst[6] = m[6];
      newDst[8] = m[8];
      newDst[9] = m[9];
      newDst[10] = m[10];
      return newDst;
    }
    /**
     * Copies a matrix (same as {@link mat3.copy})
     * Also see {@link mat3.create} and {@link mat3.set}
     * @param m - The matrix.
     * @param dst - The matrix. If not passed a new one is created.
     * @returns A copy of m.
     */
    var clone = copy;
    /**
     * Check if 2 matrices are approximately equal
     * @param a Operand matrix.
     * @param b Operand matrix.
     * @returns true if matrices are approximately equal
     */
    function equalsApproximately(a, b) {
      return Math.abs(a[0] - b[0]) < EPSILON && Math.abs(a[1] - b[1]) < EPSILON && Math.abs(a[2] - b[2]) < EPSILON && Math.abs(a[4] - b[4]) < EPSILON && Math.abs(a[5] - b[5]) < EPSILON && Math.abs(a[6] - b[6]) < EPSILON && Math.abs(a[8] - b[8]) < EPSILON && Math.abs(a[9] - b[9]) < EPSILON && Math.abs(a[10] - b[10]) < EPSILON;
    }
    /**
     * Check if 2 matrices are exactly equal
     * @param a Operand matrix.
     * @param b Operand matrix.
     * @returns true if matrices are exactly equal
     */
    function equals(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10];
    }
    /**
     * Creates a 3-by-3 identity matrix.
     *
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns A 3-by-3 identity matrix.
     */
    function identity(dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      newDst[0] = 1;
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[4] = 0;
      newDst[5] = 1;
      newDst[6] = 0;
      newDst[8] = 0;
      newDst[9] = 0;
      newDst[10] = 1;
      return newDst;
    }
    /**
     * Takes the transpose of a matrix.
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The transpose of m.
     */
    function transpose(m, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      if (newDst === m) {
        var t;
        // 0 1 2
        // 4 5 6
        // 8 9 10
        t = m[1];
        m[1] = m[4];
        m[4] = t;
        t = m[2];
        m[2] = m[8];
        m[8] = t;
        t = m[6];
        m[6] = m[9];
        m[9] = t;
        return newDst;
      }
      var m00 = m[0 * 4 + 0];
      var m01 = m[0 * 4 + 1];
      var m02 = m[0 * 4 + 2];
      var m10 = m[1 * 4 + 0];
      var m11 = m[1 * 4 + 1];
      var m12 = m[1 * 4 + 2];
      var m20 = m[2 * 4 + 0];
      var m21 = m[2 * 4 + 1];
      var m22 = m[2 * 4 + 2];
      newDst[0] = m00;
      newDst[1] = m10;
      newDst[2] = m20;
      newDst[4] = m01;
      newDst[5] = m11;
      newDst[6] = m21;
      newDst[8] = m02;
      newDst[9] = m12;
      newDst[10] = m22;
      return newDst;
    }
    /**
     * Computes the inverse of a 3-by-3 matrix.
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The inverse of m.
     */
    function inverse(m, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      var m00 = m[0 * 4 + 0];
      var m01 = m[0 * 4 + 1];
      var m02 = m[0 * 4 + 2];
      var m10 = m[1 * 4 + 0];
      var m11 = m[1 * 4 + 1];
      var m12 = m[1 * 4 + 2];
      var m20 = m[2 * 4 + 0];
      var m21 = m[2 * 4 + 1];
      var m22 = m[2 * 4 + 2];
      var b01 = m22 * m11 - m12 * m21;
      var b11 = -m22 * m10 + m12 * m20;
      var b21 = m21 * m10 - m11 * m20;
      var invDet = 1 / (m00 * b01 + m01 * b11 + m02 * b21);
      newDst[0] = b01 * invDet;
      newDst[1] = (-m22 * m01 + m02 * m21) * invDet;
      newDst[2] = (m12 * m01 - m02 * m11) * invDet;
      newDst[4] = b11 * invDet;
      newDst[5] = (m22 * m00 - m02 * m20) * invDet;
      newDst[6] = (-m12 * m00 + m02 * m10) * invDet;
      newDst[8] = b21 * invDet;
      newDst[9] = (-m21 * m00 + m01 * m20) * invDet;
      newDst[10] = (m11 * m00 - m01 * m10) * invDet;
      return newDst;
    }
    /**
     * Compute the determinant of a matrix
     * @param m - the matrix
     * @returns the determinant
     */
    function determinant(m) {
      var m00 = m[0 * 4 + 0];
      var m01 = m[0 * 4 + 1];
      var m02 = m[0 * 4 + 2];
      var m10 = m[1 * 4 + 0];
      var m11 = m[1 * 4 + 1];
      var m12 = m[1 * 4 + 2];
      var m20 = m[2 * 4 + 0];
      var m21 = m[2 * 4 + 1];
      var m22 = m[2 * 4 + 2];
      return m00 * (m11 * m22 - m21 * m12) - m10 * (m01 * m22 - m21 * m02) + m20 * (m01 * m12 - m11 * m02);
    }
    /**
     * Computes the inverse of a 3-by-3 matrix. (same as inverse)
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The inverse of m.
     */
    var invert = inverse;
    /**
     * Multiplies two 3-by-3 matrices with a on the left and b on the right
     * @param a - The matrix on the left.
     * @param b - The matrix on the right.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The matrix product of a and b.
     */
    function multiply(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      var a00 = a[0];
      var a01 = a[1];
      var a02 = a[2];
      var a10 = a[4 + 0];
      var a11 = a[4 + 1];
      var a12 = a[4 + 2];
      var a20 = a[8 + 0];
      var a21 = a[8 + 1];
      var a22 = a[8 + 2];
      var b00 = b[0];
      var b01 = b[1];
      var b02 = b[2];
      var b10 = b[4 + 0];
      var b11 = b[4 + 1];
      var b12 = b[4 + 2];
      var b20 = b[8 + 0];
      var b21 = b[8 + 1];
      var b22 = b[8 + 2];
      newDst[0] = a00 * b00 + a10 * b01 + a20 * b02;
      newDst[1] = a01 * b00 + a11 * b01 + a21 * b02;
      newDst[2] = a02 * b00 + a12 * b01 + a22 * b02;
      newDst[4] = a00 * b10 + a10 * b11 + a20 * b12;
      newDst[5] = a01 * b10 + a11 * b11 + a21 * b12;
      newDst[6] = a02 * b10 + a12 * b11 + a22 * b12;
      newDst[8] = a00 * b20 + a10 * b21 + a20 * b22;
      newDst[9] = a01 * b20 + a11 * b21 + a21 * b22;
      newDst[10] = a02 * b20 + a12 * b21 + a22 * b22;
      return newDst;
    }
    /**
     * Multiplies two 3-by-3 matrices with a on the left and b on the right (same as multiply)
     * @param a - The matrix on the left.
     * @param b - The matrix on the right.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The matrix product of a and b.
     */
    var mul = multiply;
    /**
     * Sets the translation component of a 3-by-3 matrix to the given
     * vector.
     * @param a - The matrix.
     * @param v - The vector.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The matrix with translation set.
     */
    function setTranslation(a, v, dst) {
      var newDst = dst != null ? dst : identity();
      if (a !== newDst) {
        newDst[0] = a[0];
        newDst[1] = a[1];
        newDst[2] = a[2];
        newDst[4] = a[4];
        newDst[5] = a[5];
        newDst[6] = a[6];
      }
      newDst[8] = v[0];
      newDst[9] = v[1];
      newDst[10] = 1;
      return newDst;
    }
    /**
     * Returns the translation component of a 3-by-3 matrix as a vector with 3
     * entries.
     * @param m - The matrix.
     * @param dst - vector to hold result. If not passed a new one is created.
     * @returns The translation component of m.
     */
    function getTranslation(m, dst) {
      var newDst = dst != null ? dst : vec2.create();
      newDst[0] = m[8];
      newDst[1] = m[9];
      return newDst;
    }
    /**
     * Returns an axis of a 3x3 matrix as a vector with 2 entries
     * @param m - The matrix.
     * @param axis - The axis 0 = x, 1 = y,
     * @returns The axis component of m.
     */
    function getAxis(m, axis, dst) {
      var newDst = dst != null ? dst : vec2.create();
      var off = axis * 4;
      newDst[0] = m[off + 0];
      newDst[1] = m[off + 1];
      return newDst;
    }
    /**
     * Sets an axis of a 3x3 matrix as a vector with 2 entries
     * @param m - The matrix.
     * @param v - the axis vector
     * @param axis - The axis  0 = x, 1 = y;
     * @param dst - The matrix to set. If not passed a new one is created.
     * @returns The matrix with axis set.
     */
    function setAxis(m, v, axis, dst) {
      var newDst = dst === m ? m : copy(m, dst);
      var off = axis * 4;
      newDst[off + 0] = v[0];
      newDst[off + 1] = v[1];
      return newDst;
    }
    /**
     * Returns the "2d" scaling component of the matrix
     * @param m - The Matrix
     * @param dst - The vector to set. If not passed a new one is created.
     */
    function getScaling(m, dst) {
      var newDst = dst != null ? dst : vec2.create();
      var xx = m[0];
      var xy = m[1];
      var yx = m[4];
      var yy = m[5];
      newDst[0] = Math.sqrt(xx * xx + xy * xy);
      newDst[1] = Math.sqrt(yx * yx + yy * yy);
      return newDst;
    }
    /**
     * Returns the "3d" scaling component of the matrix
     * @param m - The Matrix
     * @param dst - The vector to set. If not passed a new one is created.
     */
    function get3DScaling(m, dst) {
      var newDst = dst != null ? dst : vec3.create();
      var xx = m[0];
      var xy = m[1];
      var xz = m[2];
      var yx = m[4];
      var yy = m[5];
      var yz = m[6];
      var zx = m[8];
      var zy = m[9];
      var zz = m[10];
      newDst[0] = Math.sqrt(xx * xx + xy * xy + xz * xz);
      newDst[1] = Math.sqrt(yx * yx + yy * yy + yz * yz);
      newDst[2] = Math.sqrt(zx * zx + zy * zy + zz * zz);
      return newDst;
    }
    /**
     * Creates a 3-by-3 matrix which translates by the given vector v.
     * @param v - The vector by which to translate.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The translation matrix.
     */
    function translation(v, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      newDst[0] = 1;
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[4] = 0;
      newDst[5] = 1;
      newDst[6] = 0;
      newDst[8] = v[0];
      newDst[9] = v[1];
      newDst[10] = 1;
      return newDst;
    }
    /**
     * Translates the given 3-by-3 matrix by the given vector v.
     * @param m - The matrix.
     * @param v - The vector by which to translate.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The translated matrix.
     */
    function translate(m, v, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      var v0 = v[0];
      var v1 = v[1];
      var m00 = m[0];
      var m01 = m[1];
      var m02 = m[2];
      var m10 = m[1 * 4 + 0];
      var m11 = m[1 * 4 + 1];
      var m12 = m[1 * 4 + 2];
      var m20 = m[2 * 4 + 0];
      var m21 = m[2 * 4 + 1];
      var m22 = m[2 * 4 + 2];
      if (m !== newDst) {
        newDst[0] = m00;
        newDst[1] = m01;
        newDst[2] = m02;
        newDst[4] = m10;
        newDst[5] = m11;
        newDst[6] = m12;
      }
      newDst[8] = m00 * v0 + m10 * v1 + m20;
      newDst[9] = m01 * v0 + m11 * v1 + m21;
      newDst[10] = m02 * v0 + m12 * v1 + m22;
      return newDst;
    }
    /**
     * Creates a 3-by-3 matrix which rotates  by the given angle.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotation matrix.
     */
    function rotation(angleInRadians, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      var c = Math.cos(angleInRadians);
      var s = Math.sin(angleInRadians);
      newDst[0] = c;
      newDst[1] = s;
      newDst[2] = 0;
      newDst[4] = -s;
      newDst[5] = c;
      newDst[6] = 0;
      newDst[8] = 0;
      newDst[9] = 0;
      newDst[10] = 1;
      return newDst;
    }
    /**
     * Rotates the given 3-by-3 matrix  by the given angle.
     * @param m - The matrix.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    function rotate(m, angleInRadians, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      var m00 = m[0 * 4 + 0];
      var m01 = m[0 * 4 + 1];
      var m02 = m[0 * 4 + 2];
      var m10 = m[1 * 4 + 0];
      var m11 = m[1 * 4 + 1];
      var m12 = m[1 * 4 + 2];
      var c = Math.cos(angleInRadians);
      var s = Math.sin(angleInRadians);
      newDst[0] = c * m00 + s * m10;
      newDst[1] = c * m01 + s * m11;
      newDst[2] = c * m02 + s * m12;
      newDst[4] = c * m10 - s * m00;
      newDst[5] = c * m11 - s * m01;
      newDst[6] = c * m12 - s * m02;
      if (m !== newDst) {
        newDst[8] = m[8];
        newDst[9] = m[9];
        newDst[10] = m[10];
      }
      return newDst;
    }
    /**
     * Creates a 3-by-3 matrix which rotates around the x-axis by the given angle.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotation matrix.
     */
    function rotationX(angleInRadians, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      var c = Math.cos(angleInRadians);
      var s = Math.sin(angleInRadians);
      newDst[0] = 1;
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[4] = 0;
      newDst[5] = c;
      newDst[6] = s;
      newDst[8] = 0;
      newDst[9] = -s;
      newDst[10] = c;
      return newDst;
    }
    /**
     * Rotates the given 3-by-3 matrix around the x-axis by the given
     * angle.
     * @param m - The matrix.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    function rotateX(m, angleInRadians, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      var m10 = m[4];
      var m11 = m[5];
      var m12 = m[6];
      var m20 = m[8];
      var m21 = m[9];
      var m22 = m[10];
      var c = Math.cos(angleInRadians);
      var s = Math.sin(angleInRadians);
      newDst[4] = c * m10 + s * m20;
      newDst[5] = c * m11 + s * m21;
      newDst[6] = c * m12 + s * m22;
      newDst[8] = c * m20 - s * m10;
      newDst[9] = c * m21 - s * m11;
      newDst[10] = c * m22 - s * m12;
      if (m !== newDst) {
        newDst[0] = m[0];
        newDst[1] = m[1];
        newDst[2] = m[2];
      }
      return newDst;
    }
    /**
     * Creates a 3-by-3 matrix which rotates around the y-axis by the given angle.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotation matrix.
     */
    function rotationY(angleInRadians, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      var c = Math.cos(angleInRadians);
      var s = Math.sin(angleInRadians);
      newDst[0] = c;
      newDst[1] = 0;
      newDst[2] = -s;
      newDst[4] = 0;
      newDst[5] = 1;
      newDst[6] = 0;
      newDst[8] = s;
      newDst[9] = 0;
      newDst[10] = c;
      return newDst;
    }
    /**
     * Rotates the given 3-by-3 matrix around the y-axis by the given
     * angle.
     * @param m - The matrix.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    function rotateY(m, angleInRadians, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      var m00 = m[0 * 4 + 0];
      var m01 = m[0 * 4 + 1];
      var m02 = m[0 * 4 + 2];
      var m20 = m[2 * 4 + 0];
      var m21 = m[2 * 4 + 1];
      var m22 = m[2 * 4 + 2];
      var c = Math.cos(angleInRadians);
      var s = Math.sin(angleInRadians);
      newDst[0] = c * m00 - s * m20;
      newDst[1] = c * m01 - s * m21;
      newDst[2] = c * m02 - s * m22;
      newDst[8] = c * m20 + s * m00;
      newDst[9] = c * m21 + s * m01;
      newDst[10] = c * m22 + s * m02;
      if (m !== newDst) {
        newDst[4] = m[4];
        newDst[5] = m[5];
        newDst[6] = m[6];
      }
      return newDst;
    }
    /**
     * Creates a 3-by-3 matrix which rotates around the z-axis by the given angle.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotation matrix.
     */
    var rotationZ = rotation;
    /**
     * Rotates the given 3-by-3 matrix around the z-axis by the given
     * angle.
     * @param m - The matrix.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    var rotateZ = rotate;
    /**
     * Creates a 3-by-3 matrix which scales in each dimension by an amount given by
     * the corresponding entry in the given vector; assumes the vector has two
     * entries.
     * @param v - A vector of
     *     2 entries specifying the factor by which to scale in each dimension.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaling matrix.
     */
    function scaling(v, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      newDst[0] = v[0];
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[4] = 0;
      newDst[5] = v[1];
      newDst[6] = 0;
      newDst[8] = 0;
      newDst[9] = 0;
      newDst[10] = 1;
      return newDst;
    }
    /**
     * Scales the given 3-by-3 matrix in each dimension by an amount
     * given by the corresponding entry in the given vector; assumes the vector has
     * two entries.
     * @param m - The matrix to be modified.
     * @param v - A vector of 2 entries specifying the
     *     factor by which to scale in each dimension.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaled matrix.
     */
    function scale(m, v, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      var v0 = v[0];
      var v1 = v[1];
      newDst[0] = v0 * m[0 * 4 + 0];
      newDst[1] = v0 * m[0 * 4 + 1];
      newDst[2] = v0 * m[0 * 4 + 2];
      newDst[4] = v1 * m[1 * 4 + 0];
      newDst[5] = v1 * m[1 * 4 + 1];
      newDst[6] = v1 * m[1 * 4 + 2];
      if (m !== newDst) {
        newDst[8] = m[8];
        newDst[9] = m[9];
        newDst[10] = m[10];
      }
      return newDst;
    }
    /**
     * Creates a 3-by-3 matrix which scales in each dimension by an amount given by
     * the corresponding entry in the given vector; assumes the vector has three
     * entries.
     * @param v - A vector of
     *     3 entries specifying the factor by which to scale in each dimension.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaling matrix.
     */
    function scaling3D(v, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      newDst[0] = v[0];
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[4] = 0;
      newDst[5] = v[1];
      newDst[6] = 0;
      newDst[8] = 0;
      newDst[9] = 0;
      newDst[10] = v[2];
      return newDst;
    }
    /**
     * Scales the given 3-by-3 matrix in each dimension by an amount
     * given by the corresponding entry in the given vector; assumes the vector has
     * three entries.
     * @param m - The matrix to be modified.
     * @param v - A vector of 3 entries specifying the
     *     factor by which to scale in each dimension.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaled matrix.
     */
    function scale3D(m, v, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      var v0 = v[0];
      var v1 = v[1];
      var v2 = v[2];
      newDst[0] = v0 * m[0 * 4 + 0];
      newDst[1] = v0 * m[0 * 4 + 1];
      newDst[2] = v0 * m[0 * 4 + 2];
      newDst[4] = v1 * m[1 * 4 + 0];
      newDst[5] = v1 * m[1 * 4 + 1];
      newDst[6] = v1 * m[1 * 4 + 2];
      newDst[8] = v2 * m[2 * 4 + 0];
      newDst[9] = v2 * m[2 * 4 + 1];
      newDst[10] = v2 * m[2 * 4 + 2];
      return newDst;
    }
    /**
     * Creates a 3-by-3 matrix which scales uniformly in the X and Y dimensions
     * @param s - Amount to scale
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaling matrix.
     */
    function uniformScaling(s, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      newDst[0] = s;
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[4] = 0;
      newDst[5] = s;
      newDst[6] = 0;
      newDst[8] = 0;
      newDst[9] = 0;
      newDst[10] = 1;
      return newDst;
    }
    /**
     * Scales the given 3-by-3 matrix in the X and Y dimension by an amount
     * given.
     * @param m - The matrix to be modified.
     * @param s - Amount to scale.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaled matrix.
     */
    function uniformScale(m, s, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      newDst[0] = s * m[0 * 4 + 0];
      newDst[1] = s * m[0 * 4 + 1];
      newDst[2] = s * m[0 * 4 + 2];
      newDst[4] = s * m[1 * 4 + 0];
      newDst[5] = s * m[1 * 4 + 1];
      newDst[6] = s * m[1 * 4 + 2];
      if (m !== newDst) {
        newDst[8] = m[8];
        newDst[9] = m[9];
        newDst[10] = m[10];
      }
      return newDst;
    }
    /**
     * Creates a 3-by-3 matrix which scales uniformly in each dimension
     * @param s - Amount to scale
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaling matrix.
     */
    function uniformScaling3D(s, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      newDst[0] = s;
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[4] = 0;
      newDst[5] = s;
      newDst[6] = 0;
      newDst[8] = 0;
      newDst[9] = 0;
      newDst[10] = s;
      return newDst;
    }
    /**
     * Scales the given 3-by-3 matrix in each dimension by an amount
     * given.
     * @param m - The matrix to be modified.
     * @param s - Amount to scale.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaled matrix.
     */
    function uniformScale3D(m, s, dst) {
      var newDst = dst != null ? dst : new Ctor(12);
      newDst[0] = s * m[0 * 4 + 0];
      newDst[1] = s * m[0 * 4 + 1];
      newDst[2] = s * m[0 * 4 + 2];
      newDst[4] = s * m[1 * 4 + 0];
      newDst[5] = s * m[1 * 4 + 1];
      newDst[6] = s * m[1 * 4 + 2];
      newDst[8] = s * m[2 * 4 + 0];
      newDst[9] = s * m[2 * 4 + 1];
      newDst[10] = s * m[2 * 4 + 2];
      return newDst;
    }
    return {
      clone: clone,
      create: create,
      set: set,
      fromMat4: fromMat4,
      fromQuat: fromQuat,
      negate: negate,
      copy: copy,
      equalsApproximately: equalsApproximately,
      equals: equals,
      identity: identity,
      transpose: transpose,
      inverse: inverse,
      invert: invert,
      determinant: determinant,
      mul: mul,
      multiply: multiply,
      setTranslation: setTranslation,
      getTranslation: getTranslation,
      getAxis: getAxis,
      setAxis: setAxis,
      getScaling: getScaling,
      get3DScaling: get3DScaling,
      translation: translation,
      translate: translate,
      rotation: rotation,
      rotate: rotate,
      rotationX: rotationX,
      rotateX: rotateX,
      rotationY: rotationY,
      rotateY: rotateY,
      rotationZ: rotationZ,
      rotateZ: rotateZ,
      scaling: scaling,
      scale: scale,
      uniformScaling: uniformScaling,
      uniformScale: uniformScale,
      scaling3D: scaling3D,
      scale3D: scale3D,
      uniformScaling3D: uniformScaling3D,
      uniformScale3D: uniformScale3D
    };
  }
  var cache$3 = new Map();
  function getAPI$3(Ctor) {
    var api = cache$3.get(Ctor);
    if (!api) {
      api = getAPIImpl$3(Ctor);
      cache$3.set(Ctor, api);
    }
    return api;
  }

  /**
   * Generates a typed API for Mat4
   * */
  function getAPIImpl$2(Ctor) {
    var vec3 = getAPI$4(Ctor);
    /**
     * 4x4 Matrix math math functions.
     *
     * Almost all functions take an optional `newDst` argument. If it is not passed in the
     * functions will create a new matrix. In other words you can do this
     *
     *     const mat = mat4.translation([1, 2, 3]);  // Creates a new translation matrix
     *
     * or
     *
     *     const mat = mat4.create();
     *     mat4.translation([1, 2, 3], mat);  // Puts translation matrix in mat.
     *
     * The first style is often easier but depending on where it's used it generates garbage where
     * as there is almost never allocation with the second style.
     *
     * It is always save to pass any matrix as the destination. So for example
     *
     *     const mat = mat4.identity();
     *     const trans = mat4.translation([1, 2, 3]);
     *     mat4.multiply(mat, trans, mat);  // Multiplies mat * trans and puts result in mat.
     *
     */
    /**
     * Create a Mat4 from values
     *
     * Note: Since passing in a raw JavaScript array
     * is valid in all circumstances, if you want to
     * force a JavaScript array into a Mat4's specified type
     * it would be faster to use
     *
     * ```
     * const m = mat4.clone(someJSArray);
     * ```
     *
     * @param v0 - value for element 0
     * @param v1 - value for element 1
     * @param v2 - value for element 2
     * @param v3 - value for element 3
     * @param v4 - value for element 4
     * @param v5 - value for element 5
     * @param v6 - value for element 6
     * @param v7 - value for element 7
     * @param v8 - value for element 8
     * @param v9 - value for element 9
     * @param v10 - value for element 10
     * @param v11 - value for element 11
     * @param v12 - value for element 12
     * @param v13 - value for element 13
     * @param v14 - value for element 14
     * @param v15 - value for element 15
     * @returns created from values.
     */
    function create(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15) {
      var newDst = new Ctor(16);
      if (v0 !== undefined) {
        newDst[0] = v0;
        if (v1 !== undefined) {
          newDst[1] = v1;
          if (v2 !== undefined) {
            newDst[2] = v2;
            if (v3 !== undefined) {
              newDst[3] = v3;
              if (v4 !== undefined) {
                newDst[4] = v4;
                if (v5 !== undefined) {
                  newDst[5] = v5;
                  if (v6 !== undefined) {
                    newDst[6] = v6;
                    if (v7 !== undefined) {
                      newDst[7] = v7;
                      if (v8 !== undefined) {
                        newDst[8] = v8;
                        if (v9 !== undefined) {
                          newDst[9] = v9;
                          if (v10 !== undefined) {
                            newDst[10] = v10;
                            if (v11 !== undefined) {
                              newDst[11] = v11;
                              if (v12 !== undefined) {
                                newDst[12] = v12;
                                if (v13 !== undefined) {
                                  newDst[13] = v13;
                                  if (v14 !== undefined) {
                                    newDst[14] = v14;
                                    if (v15 !== undefined) {
                                      newDst[15] = v15;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      return newDst;
    }
    /**
     * Sets the values of a Mat4
     * Also see {@link mat4.create} and {@link mat4.copy}
     *
     * @param v0 - value for element 0
     * @param v1 - value for element 1
     * @param v2 - value for element 2
     * @param v3 - value for element 3
     * @param v4 - value for element 4
     * @param v5 - value for element 5
     * @param v6 - value for element 6
     * @param v7 - value for element 7
     * @param v8 - value for element 8
     * @param v9 - value for element 9
     * @param v10 - value for element 10
     * @param v11 - value for element 11
     * @param v12 - value for element 12
     * @param v13 - value for element 13
     * @param v14 - value for element 14
     * @param v15 - value for element 15
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns Mat4 created from values.
     */
    function set(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      newDst[0] = v0;
      newDst[1] = v1;
      newDst[2] = v2;
      newDst[3] = v3;
      newDst[4] = v4;
      newDst[5] = v5;
      newDst[6] = v6;
      newDst[7] = v7;
      newDst[8] = v8;
      newDst[9] = v9;
      newDst[10] = v10;
      newDst[11] = v11;
      newDst[12] = v12;
      newDst[13] = v13;
      newDst[14] = v14;
      newDst[15] = v15;
      return newDst;
    }
    /**
     * Creates a Mat4 from a Mat3
     * @param m3 - source matrix
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns Mat4 made from m3
     */
    function fromMat3(m3, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      newDst[0] = m3[0];
      newDst[1] = m3[1];
      newDst[2] = m3[2];
      newDst[3] = 0;
      newDst[4] = m3[4];
      newDst[5] = m3[5];
      newDst[6] = m3[6];
      newDst[7] = 0;
      newDst[8] = m3[8];
      newDst[9] = m3[9];
      newDst[10] = m3[10];
      newDst[11] = 0;
      newDst[12] = 0;
      newDst[13] = 0;
      newDst[14] = 0;
      newDst[15] = 1;
      return newDst;
    }
    /**
     * Creates a Mat4 rotation matrix from a quaternion
     * @param q - quaternion to create matrix from
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns Mat4 made from q
     */
    function fromQuat(q, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      var x = q[0];
      var y = q[1];
      var z = q[2];
      var w = q[3];
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;
      var xx = x * x2;
      var yx = y * x2;
      var yy = y * y2;
      var zx = z * x2;
      var zy = z * y2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;
      newDst[0] = 1 - yy - zz;
      newDst[1] = yx + wz;
      newDst[2] = zx - wy;
      newDst[3] = 0;
      newDst[4] = yx - wz;
      newDst[5] = 1 - xx - zz;
      newDst[6] = zy + wx;
      newDst[7] = 0;
      newDst[8] = zx + wy;
      newDst[9] = zy - wx;
      newDst[10] = 1 - xx - yy;
      newDst[11] = 0;
      newDst[12] = 0;
      newDst[13] = 0;
      newDst[14] = 0;
      newDst[15] = 1;
      return newDst;
    }
    /**
     * Negates a matrix.
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns -m.
     */
    function negate(m, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      newDst[0] = -m[0];
      newDst[1] = -m[1];
      newDst[2] = -m[2];
      newDst[3] = -m[3];
      newDst[4] = -m[4];
      newDst[5] = -m[5];
      newDst[6] = -m[6];
      newDst[7] = -m[7];
      newDst[8] = -m[8];
      newDst[9] = -m[9];
      newDst[10] = -m[10];
      newDst[11] = -m[11];
      newDst[12] = -m[12];
      newDst[13] = -m[13];
      newDst[14] = -m[14];
      newDst[15] = -m[15];
      return newDst;
    }
    /**
     * Copies a matrix. (same as {@link mat4.clone})
     * Also see {@link mat4.create} and {@link mat4.set}
     * @param m - The matrix.
     * @param dst - The matrix. If not passed a new one is created.
     * @returns A copy of m.
     */
    function copy(m, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      newDst[0] = m[0];
      newDst[1] = m[1];
      newDst[2] = m[2];
      newDst[3] = m[3];
      newDst[4] = m[4];
      newDst[5] = m[5];
      newDst[6] = m[6];
      newDst[7] = m[7];
      newDst[8] = m[8];
      newDst[9] = m[9];
      newDst[10] = m[10];
      newDst[11] = m[11];
      newDst[12] = m[12];
      newDst[13] = m[13];
      newDst[14] = m[14];
      newDst[15] = m[15];
      return newDst;
    }
    /**
     * Copies a matrix (same as {@link mat4.copy})
     * Also see {@link mat4.create} and {@link mat4.set}
     * @param m - The matrix.
     * @param dst - The matrix. If not passed a new one is created.
     * @returns A copy of m.
     */
    var clone = copy;
    /**
     * Check if 2 matrices are approximately equal
     * @param a - Operand matrix.
     * @param b - Operand matrix.
     * @returns true if matrices are approximately equal
     */
    function equalsApproximately(a, b) {
      return Math.abs(a[0] - b[0]) < EPSILON && Math.abs(a[1] - b[1]) < EPSILON && Math.abs(a[2] - b[2]) < EPSILON && Math.abs(a[3] - b[3]) < EPSILON && Math.abs(a[4] - b[4]) < EPSILON && Math.abs(a[5] - b[5]) < EPSILON && Math.abs(a[6] - b[6]) < EPSILON && Math.abs(a[7] - b[7]) < EPSILON && Math.abs(a[8] - b[8]) < EPSILON && Math.abs(a[9] - b[9]) < EPSILON && Math.abs(a[10] - b[10]) < EPSILON && Math.abs(a[11] - b[11]) < EPSILON && Math.abs(a[12] - b[12]) < EPSILON && Math.abs(a[13] - b[13]) < EPSILON && Math.abs(a[14] - b[14]) < EPSILON && Math.abs(a[15] - b[15]) < EPSILON;
    }
    /**
     * Check if 2 matrices are exactly equal
     * @param a - Operand matrix.
     * @param b - Operand matrix.
     * @returns true if matrices are exactly equal
     */
    function equals(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
    }
    /**
     * Creates a 4-by-4 identity matrix.
     *
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns A 4-by-4 identity matrix.
     */
    function identity(dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      newDst[0] = 1;
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[3] = 0;
      newDst[4] = 0;
      newDst[5] = 1;
      newDst[6] = 0;
      newDst[7] = 0;
      newDst[8] = 0;
      newDst[9] = 0;
      newDst[10] = 1;
      newDst[11] = 0;
      newDst[12] = 0;
      newDst[13] = 0;
      newDst[14] = 0;
      newDst[15] = 1;
      return newDst;
    }
    /**
     * Takes the transpose of a matrix.
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The transpose of m.
     */
    function transpose(m, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      if (newDst === m) {
        var t;
        t = m[1];
        m[1] = m[4];
        m[4] = t;
        t = m[2];
        m[2] = m[8];
        m[8] = t;
        t = m[3];
        m[3] = m[12];
        m[12] = t;
        t = m[6];
        m[6] = m[9];
        m[9] = t;
        t = m[7];
        m[7] = m[13];
        m[13] = t;
        t = m[11];
        m[11] = m[14];
        m[14] = t;
        return newDst;
      }
      var m00 = m[0 * 4 + 0];
      var m01 = m[0 * 4 + 1];
      var m02 = m[0 * 4 + 2];
      var m03 = m[0 * 4 + 3];
      var m10 = m[1 * 4 + 0];
      var m11 = m[1 * 4 + 1];
      var m12 = m[1 * 4 + 2];
      var m13 = m[1 * 4 + 3];
      var m20 = m[2 * 4 + 0];
      var m21 = m[2 * 4 + 1];
      var m22 = m[2 * 4 + 2];
      var m23 = m[2 * 4 + 3];
      var m30 = m[3 * 4 + 0];
      var m31 = m[3 * 4 + 1];
      var m32 = m[3 * 4 + 2];
      var m33 = m[3 * 4 + 3];
      newDst[0] = m00;
      newDst[1] = m10;
      newDst[2] = m20;
      newDst[3] = m30;
      newDst[4] = m01;
      newDst[5] = m11;
      newDst[6] = m21;
      newDst[7] = m31;
      newDst[8] = m02;
      newDst[9] = m12;
      newDst[10] = m22;
      newDst[11] = m32;
      newDst[12] = m03;
      newDst[13] = m13;
      newDst[14] = m23;
      newDst[15] = m33;
      return newDst;
    }
    /**
     * Computes the inverse of a 4-by-4 matrix.
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The inverse of m.
     */
    function inverse(m, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      var m00 = m[0 * 4 + 0];
      var m01 = m[0 * 4 + 1];
      var m02 = m[0 * 4 + 2];
      var m03 = m[0 * 4 + 3];
      var m10 = m[1 * 4 + 0];
      var m11 = m[1 * 4 + 1];
      var m12 = m[1 * 4 + 2];
      var m13 = m[1 * 4 + 3];
      var m20 = m[2 * 4 + 0];
      var m21 = m[2 * 4 + 1];
      var m22 = m[2 * 4 + 2];
      var m23 = m[2 * 4 + 3];
      var m30 = m[3 * 4 + 0];
      var m31 = m[3 * 4 + 1];
      var m32 = m[3 * 4 + 2];
      var m33 = m[3 * 4 + 3];
      var tmp0 = m22 * m33;
      var tmp1 = m32 * m23;
      var tmp2 = m12 * m33;
      var tmp3 = m32 * m13;
      var tmp4 = m12 * m23;
      var tmp5 = m22 * m13;
      var tmp6 = m02 * m33;
      var tmp7 = m32 * m03;
      var tmp8 = m02 * m23;
      var tmp9 = m22 * m03;
      var tmp10 = m02 * m13;
      var tmp11 = m12 * m03;
      var tmp12 = m20 * m31;
      var tmp13 = m30 * m21;
      var tmp14 = m10 * m31;
      var tmp15 = m30 * m11;
      var tmp16 = m10 * m21;
      var tmp17 = m20 * m11;
      var tmp18 = m00 * m31;
      var tmp19 = m30 * m01;
      var tmp20 = m00 * m21;
      var tmp21 = m20 * m01;
      var tmp22 = m00 * m11;
      var tmp23 = m10 * m01;
      var t0 = tmp0 * m11 + tmp3 * m21 + tmp4 * m31 - (tmp1 * m11 + tmp2 * m21 + tmp5 * m31);
      var t1 = tmp1 * m01 + tmp6 * m21 + tmp9 * m31 - (tmp0 * m01 + tmp7 * m21 + tmp8 * m31);
      var t2 = tmp2 * m01 + tmp7 * m11 + tmp10 * m31 - (tmp3 * m01 + tmp6 * m11 + tmp11 * m31);
      var t3 = tmp5 * m01 + tmp8 * m11 + tmp11 * m21 - (tmp4 * m01 + tmp9 * m11 + tmp10 * m21);
      var d = 1 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
      newDst[0] = d * t0;
      newDst[1] = d * t1;
      newDst[2] = d * t2;
      newDst[3] = d * t3;
      newDst[4] = d * (tmp1 * m10 + tmp2 * m20 + tmp5 * m30 - (tmp0 * m10 + tmp3 * m20 + tmp4 * m30));
      newDst[5] = d * (tmp0 * m00 + tmp7 * m20 + tmp8 * m30 - (tmp1 * m00 + tmp6 * m20 + tmp9 * m30));
      newDst[6] = d * (tmp3 * m00 + tmp6 * m10 + tmp11 * m30 - (tmp2 * m00 + tmp7 * m10 + tmp10 * m30));
      newDst[7] = d * (tmp4 * m00 + tmp9 * m10 + tmp10 * m20 - (tmp5 * m00 + tmp8 * m10 + tmp11 * m20));
      newDst[8] = d * (tmp12 * m13 + tmp15 * m23 + tmp16 * m33 - (tmp13 * m13 + tmp14 * m23 + tmp17 * m33));
      newDst[9] = d * (tmp13 * m03 + tmp18 * m23 + tmp21 * m33 - (tmp12 * m03 + tmp19 * m23 + tmp20 * m33));
      newDst[10] = d * (tmp14 * m03 + tmp19 * m13 + tmp22 * m33 - (tmp15 * m03 + tmp18 * m13 + tmp23 * m33));
      newDst[11] = d * (tmp17 * m03 + tmp20 * m13 + tmp23 * m23 - (tmp16 * m03 + tmp21 * m13 + tmp22 * m23));
      newDst[12] = d * (tmp14 * m22 + tmp17 * m32 + tmp13 * m12 - (tmp16 * m32 + tmp12 * m12 + tmp15 * m22));
      newDst[13] = d * (tmp20 * m32 + tmp12 * m02 + tmp19 * m22 - (tmp18 * m22 + tmp21 * m32 + tmp13 * m02));
      newDst[14] = d * (tmp18 * m12 + tmp23 * m32 + tmp15 * m02 - (tmp22 * m32 + tmp14 * m02 + tmp19 * m12));
      newDst[15] = d * (tmp22 * m22 + tmp16 * m02 + tmp21 * m12 - (tmp20 * m12 + tmp23 * m22 + tmp17 * m02));
      return newDst;
    }
    /**
     * Compute the determinant of a matrix
     * @param m - the matrix
     * @returns the determinant
     */
    function determinant(m) {
      var m00 = m[0 * 4 + 0];
      var m01 = m[0 * 4 + 1];
      var m02 = m[0 * 4 + 2];
      var m03 = m[0 * 4 + 3];
      var m10 = m[1 * 4 + 0];
      var m11 = m[1 * 4 + 1];
      var m12 = m[1 * 4 + 2];
      var m13 = m[1 * 4 + 3];
      var m20 = m[2 * 4 + 0];
      var m21 = m[2 * 4 + 1];
      var m22 = m[2 * 4 + 2];
      var m23 = m[2 * 4 + 3];
      var m30 = m[3 * 4 + 0];
      var m31 = m[3 * 4 + 1];
      var m32 = m[3 * 4 + 2];
      var m33 = m[3 * 4 + 3];
      var tmp0 = m22 * m33;
      var tmp1 = m32 * m23;
      var tmp2 = m12 * m33;
      var tmp3 = m32 * m13;
      var tmp4 = m12 * m23;
      var tmp5 = m22 * m13;
      var tmp6 = m02 * m33;
      var tmp7 = m32 * m03;
      var tmp8 = m02 * m23;
      var tmp9 = m22 * m03;
      var tmp10 = m02 * m13;
      var tmp11 = m12 * m03;
      var t0 = tmp0 * m11 + tmp3 * m21 + tmp4 * m31 - (tmp1 * m11 + tmp2 * m21 + tmp5 * m31);
      var t1 = tmp1 * m01 + tmp6 * m21 + tmp9 * m31 - (tmp0 * m01 + tmp7 * m21 + tmp8 * m31);
      var t2 = tmp2 * m01 + tmp7 * m11 + tmp10 * m31 - (tmp3 * m01 + tmp6 * m11 + tmp11 * m31);
      var t3 = tmp5 * m01 + tmp8 * m11 + tmp11 * m21 - (tmp4 * m01 + tmp9 * m11 + tmp10 * m21);
      return m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3;
    }
    /**
     * Computes the inverse of a 4-by-4 matrix. (same as inverse)
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The inverse of m.
     */
    var invert = inverse;
    /**
     * Multiplies two 4-by-4 matrices with a on the left and b on the right
     * @param a - The matrix on the left.
     * @param b - The matrix on the right.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The matrix product of a and b.
     */
    function multiply(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      var a00 = a[0];
      var a01 = a[1];
      var a02 = a[2];
      var a03 = a[3];
      var a10 = a[4 + 0];
      var a11 = a[4 + 1];
      var a12 = a[4 + 2];
      var a13 = a[4 + 3];
      var a20 = a[8 + 0];
      var a21 = a[8 + 1];
      var a22 = a[8 + 2];
      var a23 = a[8 + 3];
      var a30 = a[12 + 0];
      var a31 = a[12 + 1];
      var a32 = a[12 + 2];
      var a33 = a[12 + 3];
      var b00 = b[0];
      var b01 = b[1];
      var b02 = b[2];
      var b03 = b[3];
      var b10 = b[4 + 0];
      var b11 = b[4 + 1];
      var b12 = b[4 + 2];
      var b13 = b[4 + 3];
      var b20 = b[8 + 0];
      var b21 = b[8 + 1];
      var b22 = b[8 + 2];
      var b23 = b[8 + 3];
      var b30 = b[12 + 0];
      var b31 = b[12 + 1];
      var b32 = b[12 + 2];
      var b33 = b[12 + 3];
      newDst[0] = a00 * b00 + a10 * b01 + a20 * b02 + a30 * b03;
      newDst[1] = a01 * b00 + a11 * b01 + a21 * b02 + a31 * b03;
      newDst[2] = a02 * b00 + a12 * b01 + a22 * b02 + a32 * b03;
      newDst[3] = a03 * b00 + a13 * b01 + a23 * b02 + a33 * b03;
      newDst[4] = a00 * b10 + a10 * b11 + a20 * b12 + a30 * b13;
      newDst[5] = a01 * b10 + a11 * b11 + a21 * b12 + a31 * b13;
      newDst[6] = a02 * b10 + a12 * b11 + a22 * b12 + a32 * b13;
      newDst[7] = a03 * b10 + a13 * b11 + a23 * b12 + a33 * b13;
      newDst[8] = a00 * b20 + a10 * b21 + a20 * b22 + a30 * b23;
      newDst[9] = a01 * b20 + a11 * b21 + a21 * b22 + a31 * b23;
      newDst[10] = a02 * b20 + a12 * b21 + a22 * b22 + a32 * b23;
      newDst[11] = a03 * b20 + a13 * b21 + a23 * b22 + a33 * b23;
      newDst[12] = a00 * b30 + a10 * b31 + a20 * b32 + a30 * b33;
      newDst[13] = a01 * b30 + a11 * b31 + a21 * b32 + a31 * b33;
      newDst[14] = a02 * b30 + a12 * b31 + a22 * b32 + a32 * b33;
      newDst[15] = a03 * b30 + a13 * b31 + a23 * b32 + a33 * b33;
      return newDst;
    }
    /**
     * Multiplies two 4-by-4 matrices with a on the left and b on the right (same as multiply)
     * @param a - The matrix on the left.
     * @param b - The matrix on the right.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The matrix product of a and b.
     */
    var mul = multiply;
    /**
     * Sets the translation component of a 4-by-4 matrix to the given
     * vector.
     * @param a - The matrix.
     * @param v - The vector.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The matrix with translation set.
     */
    function setTranslation(a, v, dst) {
      var newDst = dst != null ? dst : identity();
      if (a !== newDst) {
        newDst[0] = a[0];
        newDst[1] = a[1];
        newDst[2] = a[2];
        newDst[3] = a[3];
        newDst[4] = a[4];
        newDst[5] = a[5];
        newDst[6] = a[6];
        newDst[7] = a[7];
        newDst[8] = a[8];
        newDst[9] = a[9];
        newDst[10] = a[10];
        newDst[11] = a[11];
      }
      newDst[12] = v[0];
      newDst[13] = v[1];
      newDst[14] = v[2];
      newDst[15] = 1;
      return newDst;
    }
    ///**
    // * Returns the translation component of a 4-by-4 matrix as a vector with 3
    // * entries.
    // * @param m - The matrix.
    // * @param dst - vector to hold result. If not passed a new one is created.
    // * @returns The translation component of m.
    // */
    function getTranslation(m, dst) {
      var newDst = dst != null ? dst : vec3.create();
      newDst[0] = m[12];
      newDst[1] = m[13];
      newDst[2] = m[14];
      return newDst;
    }
    /**
     * Returns an axis of a 4x4 matrix as a vector with 3 entries
     * @param m - The matrix.
     * @param axis - The axis 0 = x, 1 = y, 2 = z;
     * @returns The axis component of m.
     */
    function getAxis(m, axis, dst) {
      var newDst = dst != null ? dst : vec3.create();
      var off = axis * 4;
      newDst[0] = m[off + 0];
      newDst[1] = m[off + 1];
      newDst[2] = m[off + 2];
      return newDst;
    }
    /**
     * Sets an axis of a 4x4 matrix as a vector with 3 entries
     * @param m - The matrix.
     * @param v - the axis vector
     * @param axis - The axis  0 = x, 1 = y, 2 = z;
     * @param dst - The matrix to set. If not passed a new one is created.
     * @returns The matrix with axis set.
     */
    function setAxis(m, v, axis, dst) {
      var newDst = dst === m ? dst : copy(m, dst);
      var off = axis * 4;
      newDst[off + 0] = v[0];
      newDst[off + 1] = v[1];
      newDst[off + 2] = v[2];
      return newDst;
    }
    /**
     * Returns the "3d" scaling component of the matrix
     * @param m - The Matrix
     * @param dst - The vector to set. If not passed a new one is created.
     */
    function getScaling(m, dst) {
      var newDst = dst != null ? dst : vec3.create();
      var xx = m[0];
      var xy = m[1];
      var xz = m[2];
      var yx = m[4];
      var yy = m[5];
      var yz = m[6];
      var zx = m[8];
      var zy = m[9];
      var zz = m[10];
      newDst[0] = Math.sqrt(xx * xx + xy * xy + xz * xz);
      newDst[1] = Math.sqrt(yx * yx + yy * yy + yz * yz);
      newDst[2] = Math.sqrt(zx * zx + zy * zy + zz * zz);
      return newDst;
    }
    /**
     * Computes a 4-by-4 perspective transformation matrix given the angular height
     * of the frustum, the aspect ratio, and the near and far clipping planes.  The
     * arguments define a frustum extending in the negative z direction.  The given
     * angle is the vertical angle of the frustum, and the horizontal angle is
     * determined to produce the given aspect ratio.  The arguments near and far are
     * the distances to the near and far clipping planes.  Note that near and far
     * are not z coordinates, but rather they are distances along the negative
     * z-axis.  The matrix generated sends the viewing frustum to the unit box.
     * We assume a unit box extending from -1 to 1 in the x and y dimensions and
     * from 0 to 1 in the z dimension.
     *
     * Note: If you pass `Infinity` for zFar then it will produce a projection matrix
     * returns -Infinity for Z when transforming coordinates with Z <= 0 and +Infinity for Z
     * otherwise.
     *
     * @param fieldOfViewYInRadians - The camera angle from top to bottom (in radians).
     * @param aspect - The aspect ratio width / height.
     * @param zNear - The depth (negative z coordinate)
     *     of the near clipping plane.
     * @param zFar - The depth (negative z coordinate)
     *     of the far clipping plane.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The perspective matrix.
     */
    function perspective(fieldOfViewYInRadians, aspect, zNear, zFar, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewYInRadians);
      newDst[0] = f / aspect;
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[3] = 0;
      newDst[4] = 0;
      newDst[5] = f;
      newDst[6] = 0;
      newDst[7] = 0;
      newDst[8] = 0;
      newDst[9] = 0;
      newDst[11] = -1;
      newDst[12] = 0;
      newDst[13] = 0;
      newDst[15] = 0;
      if (Number.isFinite(zFar)) {
        var rangeInv = 1 / (zNear - zFar);
        newDst[10] = zFar * rangeInv;
        newDst[14] = zFar * zNear * rangeInv;
      } else {
        newDst[10] = -1;
        newDst[14] = -zNear;
      }
      return newDst;
    }
    /**
     * Computes a 4-by-4 reverse-z perspective transformation matrix given the angular height
     * of the frustum, the aspect ratio, and the near and far clipping planes.  The
     * arguments define a frustum extending in the negative z direction.  The given
     * angle is the vertical angle of the frustum, and the horizontal angle is
     * determined to produce the given aspect ratio.  The arguments near and far are
     * the distances to the near and far clipping planes.  Note that near and far
     * are not z coordinates, but rather they are distances along the negative
     * z-axis.  The matrix generated sends the viewing frustum to the unit box.
     * We assume a unit box extending from -1 to 1 in the x and y dimensions and
     * from 1 (at -zNear) to 0 (at -zFar) in the z dimension.
     *
     * @param fieldOfViewYInRadians - The camera angle from top to bottom (in radians).
     * @param aspect - The aspect ratio width / height.
     * @param zNear - The depth (negative z coordinate)
     *     of the near clipping plane.
     * @param zFar - The depth (negative z coordinate)
     *     of the far clipping plane. (default = Infinity)
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The perspective matrix.
     */
    function perspectiveReverseZ(fieldOfViewYInRadians, aspect, zNear) {
      var zFar = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Infinity;
      var dst = arguments.length > 4 ? arguments[4] : undefined;
      var newDst = dst != null ? dst : new Ctor(16);
      var f = 1 / Math.tan(fieldOfViewYInRadians * 0.5);
      newDst[0] = f / aspect;
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[3] = 0;
      newDst[4] = 0;
      newDst[5] = f;
      newDst[6] = 0;
      newDst[7] = 0;
      newDst[8] = 0;
      newDst[9] = 0;
      newDst[11] = -1;
      newDst[12] = 0;
      newDst[13] = 0;
      newDst[15] = 0;
      if (zFar === Infinity) {
        newDst[10] = 0;
        newDst[14] = zNear;
      } else {
        var rangeInv = 1 / (zFar - zNear);
        newDst[10] = zNear * rangeInv;
        newDst[14] = zFar * zNear * rangeInv;
      }
      return newDst;
    }
    /**
     * Computes a 4-by-4 orthogonal transformation matrix that transforms from
     * the given the left, right, bottom, and top dimensions to -1 +1 in x, and y
     * and 0 to +1 in z.
     * @param left - Left side of the near clipping plane viewport.
     * @param right - Right side of the near clipping plane viewport.
     * @param bottom - Bottom of the near clipping plane viewport.
     * @param top - Top of the near clipping plane viewport.
     * @param near - The depth (negative z coordinate)
     *     of the near clipping plane.
     * @param far - The depth (negative z coordinate)
     *     of the far clipping plane.
     * @param dst - Output matrix. If not passed a new one is created.
     * @returns The orthographic projection matrix.
     */
    function ortho(left, right, bottom, top, near, far, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      newDst[0] = 2 / (right - left);
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[3] = 0;
      newDst[4] = 0;
      newDst[5] = 2 / (top - bottom);
      newDst[6] = 0;
      newDst[7] = 0;
      newDst[8] = 0;
      newDst[9] = 0;
      newDst[10] = 1 / (near - far);
      newDst[11] = 0;
      newDst[12] = (right + left) / (left - right);
      newDst[13] = (top + bottom) / (bottom - top);
      newDst[14] = near / (near - far);
      newDst[15] = 1;
      return newDst;
    }
    /**
     * Computes a 4-by-4 perspective transformation matrix given the left, right,
     * top, bottom, near and far clipping planes. The arguments define a frustum
     * extending in the negative z direction. The arguments near and far are the
     * distances to the near and far clipping planes. Note that near and far are not
     * z coordinates, but rather they are distances along the negative z-axis. The
     * matrix generated sends the viewing frustum to the unit box. We assume a unit
     * box extending from -1 to 1 in the x and y dimensions and from 0 to 1 in the z
     * dimension.
     * @param left - The x coordinate of the left plane of the box.
     * @param right - The x coordinate of the right plane of the box.
     * @param bottom - The y coordinate of the bottom plane of the box.
     * @param top - The y coordinate of the right plane of the box.
     * @param near - The negative z coordinate of the near plane of the box.
     * @param far - The negative z coordinate of the far plane of the box.
     * @param dst - Output matrix. If not passed a new one is created.
     * @returns The perspective projection matrix.
     */
    function frustum(left, right, bottom, top, near, far, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      var dx = right - left;
      var dy = top - bottom;
      var dz = near - far;
      newDst[0] = 2 * near / dx;
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[3] = 0;
      newDst[4] = 0;
      newDst[5] = 2 * near / dy;
      newDst[6] = 0;
      newDst[7] = 0;
      newDst[8] = (left + right) / dx;
      newDst[9] = (top + bottom) / dy;
      newDst[10] = far / dz;
      newDst[11] = -1;
      newDst[12] = 0;
      newDst[13] = 0;
      newDst[14] = near * far / dz;
      newDst[15] = 0;
      return newDst;
    }
    /**
     * Computes a 4-by-4 reverse-z perspective transformation matrix given the left, right,
     * top, bottom, near and far clipping planes. The arguments define a frustum
     * extending in the negative z direction. The arguments near and far are the
     * distances to the near and far clipping planes. Note that near and far are not
     * z coordinates, but rather they are distances along the negative z-axis. The
     * matrix generated sends the viewing frustum to the unit box. We assume a unit
     * box extending from -1 to 1 in the x and y dimensions and from 1 (-near) to 0 (-far) in the z
     * dimension.
     * @param left - The x coordinate of the left plane of the box.
     * @param right - The x coordinate of the right plane of the box.
     * @param bottom - The y coordinate of the bottom plane of the box.
     * @param top - The y coordinate of the right plane of the box.
     * @param near - The negative z coordinate of the near plane of the box.
     * @param far - The negative z coordinate of the far plane of the box.
     * @param dst - Output matrix. If not passed a new one is created.
     * @returns The perspective projection matrix.
     */
    function frustumReverseZ(left, right, bottom, top, near) {
      var far = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Infinity;
      var dst = arguments.length > 6 ? arguments[6] : undefined;
      var newDst = dst != null ? dst : new Ctor(16);
      var dx = right - left;
      var dy = top - bottom;
      newDst[0] = 2 * near / dx;
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[3] = 0;
      newDst[4] = 0;
      newDst[5] = 2 * near / dy;
      newDst[6] = 0;
      newDst[7] = 0;
      newDst[8] = (left + right) / dx;
      newDst[9] = (top + bottom) / dy;
      newDst[11] = -1;
      newDst[12] = 0;
      newDst[13] = 0;
      newDst[15] = 0;
      if (far === Infinity) {
        newDst[10] = 0;
        newDst[14] = near;
      } else {
        var rangeInv = 1 / (far - near);
        newDst[10] = near * rangeInv;
        newDst[14] = far * near * rangeInv;
      }
      return newDst;
    }
    var xAxis = vec3.create();
    var yAxis = vec3.create();
    var zAxis = vec3.create();
    /**
     * Computes a 4-by-4 aim transformation.
     *
     * This is a matrix which positions an object aiming down positive Z.
     * toward the target.
     *
     * Note: this is **NOT** the inverse of lookAt as lookAt looks at negative Z.
     *
     * @param position - The position of the object.
     * @param target - The position meant to be aimed at.
     * @param up - A vector pointing up.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The aim matrix.
     */
    function aim(position, target, up, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      vec3.normalize(vec3.subtract(target, position, zAxis), zAxis);
      vec3.normalize(vec3.cross(up, zAxis, xAxis), xAxis);
      vec3.normalize(vec3.cross(zAxis, xAxis, yAxis), yAxis);
      newDst[0] = xAxis[0];
      newDst[1] = xAxis[1];
      newDst[2] = xAxis[2];
      newDst[3] = 0;
      newDst[4] = yAxis[0];
      newDst[5] = yAxis[1];
      newDst[6] = yAxis[2];
      newDst[7] = 0;
      newDst[8] = zAxis[0];
      newDst[9] = zAxis[1];
      newDst[10] = zAxis[2];
      newDst[11] = 0;
      newDst[12] = position[0];
      newDst[13] = position[1];
      newDst[14] = position[2];
      newDst[15] = 1;
      return newDst;
    }
    /**
     * Computes a 4-by-4 camera aim transformation.
     *
     * This is a matrix which positions an object aiming down negative Z.
     * toward the target.
     *
     * Note: this is the inverse of `lookAt`
     *
     * @param eye - The position of the object.
     * @param target - The position meant to be aimed at.
     * @param up - A vector pointing up.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The aim matrix.
     */
    function cameraAim(eye, target, up, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      vec3.normalize(vec3.subtract(eye, target, zAxis), zAxis);
      vec3.normalize(vec3.cross(up, zAxis, xAxis), xAxis);
      vec3.normalize(vec3.cross(zAxis, xAxis, yAxis), yAxis);
      newDst[0] = xAxis[0];
      newDst[1] = xAxis[1];
      newDst[2] = xAxis[2];
      newDst[3] = 0;
      newDst[4] = yAxis[0];
      newDst[5] = yAxis[1];
      newDst[6] = yAxis[2];
      newDst[7] = 0;
      newDst[8] = zAxis[0];
      newDst[9] = zAxis[1];
      newDst[10] = zAxis[2];
      newDst[11] = 0;
      newDst[12] = eye[0];
      newDst[13] = eye[1];
      newDst[14] = eye[2];
      newDst[15] = 1;
      return newDst;
    }
    /**
     * Computes a 4-by-4 view transformation.
     *
     * This is a view matrix which transforms all other objects
     * to be in the space of the view defined by the parameters.
     *
     * @param eye - The position of the object.
     * @param target - The position meant to be aimed at.
     * @param up - A vector pointing up.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The look-at matrix.
     */
    function lookAt(eye, target, up, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      vec3.normalize(vec3.subtract(eye, target, zAxis), zAxis);
      vec3.normalize(vec3.cross(up, zAxis, xAxis), xAxis);
      vec3.normalize(vec3.cross(zAxis, xAxis, yAxis), yAxis);
      newDst[0] = xAxis[0];
      newDst[1] = yAxis[0];
      newDst[2] = zAxis[0];
      newDst[3] = 0;
      newDst[4] = xAxis[1];
      newDst[5] = yAxis[1];
      newDst[6] = zAxis[1];
      newDst[7] = 0;
      newDst[8] = xAxis[2];
      newDst[9] = yAxis[2];
      newDst[10] = zAxis[2];
      newDst[11] = 0;
      newDst[12] = -(xAxis[0] * eye[0] + xAxis[1] * eye[1] + xAxis[2] * eye[2]);
      newDst[13] = -(yAxis[0] * eye[0] + yAxis[1] * eye[1] + yAxis[2] * eye[2]);
      newDst[14] = -(zAxis[0] * eye[0] + zAxis[1] * eye[1] + zAxis[2] * eye[2]);
      newDst[15] = 1;
      return newDst;
    }
    /**
     * Creates a 4-by-4 matrix which translates by the given vector v.
     * @param v - The vector by
     *     which to translate.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The translation matrix.
     */
    function translation(v, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      newDst[0] = 1;
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[3] = 0;
      newDst[4] = 0;
      newDst[5] = 1;
      newDst[6] = 0;
      newDst[7] = 0;
      newDst[8] = 0;
      newDst[9] = 0;
      newDst[10] = 1;
      newDst[11] = 0;
      newDst[12] = v[0];
      newDst[13] = v[1];
      newDst[14] = v[2];
      newDst[15] = 1;
      return newDst;
    }
    /**
     * Translates the given 4-by-4 matrix by the given vector v.
     * @param m - The matrix.
     * @param v - The vector by
     *     which to translate.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The translated matrix.
     */
    function translate(m, v, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      var v0 = v[0];
      var v1 = v[1];
      var v2 = v[2];
      var m00 = m[0];
      var m01 = m[1];
      var m02 = m[2];
      var m03 = m[3];
      var m10 = m[1 * 4 + 0];
      var m11 = m[1 * 4 + 1];
      var m12 = m[1 * 4 + 2];
      var m13 = m[1 * 4 + 3];
      var m20 = m[2 * 4 + 0];
      var m21 = m[2 * 4 + 1];
      var m22 = m[2 * 4 + 2];
      var m23 = m[2 * 4 + 3];
      var m30 = m[3 * 4 + 0];
      var m31 = m[3 * 4 + 1];
      var m32 = m[3 * 4 + 2];
      var m33 = m[3 * 4 + 3];
      if (m !== newDst) {
        newDst[0] = m00;
        newDst[1] = m01;
        newDst[2] = m02;
        newDst[3] = m03;
        newDst[4] = m10;
        newDst[5] = m11;
        newDst[6] = m12;
        newDst[7] = m13;
        newDst[8] = m20;
        newDst[9] = m21;
        newDst[10] = m22;
        newDst[11] = m23;
      }
      newDst[12] = m00 * v0 + m10 * v1 + m20 * v2 + m30;
      newDst[13] = m01 * v0 + m11 * v1 + m21 * v2 + m31;
      newDst[14] = m02 * v0 + m12 * v1 + m22 * v2 + m32;
      newDst[15] = m03 * v0 + m13 * v1 + m23 * v2 + m33;
      return newDst;
    }
    /**
     * Creates a 4-by-4 matrix which rotates around the x-axis by the given angle.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotation matrix.
     */
    function rotationX(angleInRadians, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      var c = Math.cos(angleInRadians);
      var s = Math.sin(angleInRadians);
      newDst[0] = 1;
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[3] = 0;
      newDst[4] = 0;
      newDst[5] = c;
      newDst[6] = s;
      newDst[7] = 0;
      newDst[8] = 0;
      newDst[9] = -s;
      newDst[10] = c;
      newDst[11] = 0;
      newDst[12] = 0;
      newDst[13] = 0;
      newDst[14] = 0;
      newDst[15] = 1;
      return newDst;
    }
    /**
     * Rotates the given 4-by-4 matrix around the x-axis by the given
     * angle.
     * @param m - The matrix.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    function rotateX(m, angleInRadians, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      var m10 = m[4];
      var m11 = m[5];
      var m12 = m[6];
      var m13 = m[7];
      var m20 = m[8];
      var m21 = m[9];
      var m22 = m[10];
      var m23 = m[11];
      var c = Math.cos(angleInRadians);
      var s = Math.sin(angleInRadians);
      newDst[4] = c * m10 + s * m20;
      newDst[5] = c * m11 + s * m21;
      newDst[6] = c * m12 + s * m22;
      newDst[7] = c * m13 + s * m23;
      newDst[8] = c * m20 - s * m10;
      newDst[9] = c * m21 - s * m11;
      newDst[10] = c * m22 - s * m12;
      newDst[11] = c * m23 - s * m13;
      if (m !== newDst) {
        newDst[0] = m[0];
        newDst[1] = m[1];
        newDst[2] = m[2];
        newDst[3] = m[3];
        newDst[12] = m[12];
        newDst[13] = m[13];
        newDst[14] = m[14];
        newDst[15] = m[15];
      }
      return newDst;
    }
    /**
     * Creates a 4-by-4 matrix which rotates around the y-axis by the given angle.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotation matrix.
     */
    function rotationY(angleInRadians, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      var c = Math.cos(angleInRadians);
      var s = Math.sin(angleInRadians);
      newDst[0] = c;
      newDst[1] = 0;
      newDst[2] = -s;
      newDst[3] = 0;
      newDst[4] = 0;
      newDst[5] = 1;
      newDst[6] = 0;
      newDst[7] = 0;
      newDst[8] = s;
      newDst[9] = 0;
      newDst[10] = c;
      newDst[11] = 0;
      newDst[12] = 0;
      newDst[13] = 0;
      newDst[14] = 0;
      newDst[15] = 1;
      return newDst;
    }
    /**
     * Rotates the given 4-by-4 matrix around the y-axis by the given
     * angle.
     * @param m - The matrix.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    function rotateY(m, angleInRadians, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      var m00 = m[0 * 4 + 0];
      var m01 = m[0 * 4 + 1];
      var m02 = m[0 * 4 + 2];
      var m03 = m[0 * 4 + 3];
      var m20 = m[2 * 4 + 0];
      var m21 = m[2 * 4 + 1];
      var m22 = m[2 * 4 + 2];
      var m23 = m[2 * 4 + 3];
      var c = Math.cos(angleInRadians);
      var s = Math.sin(angleInRadians);
      newDst[0] = c * m00 - s * m20;
      newDst[1] = c * m01 - s * m21;
      newDst[2] = c * m02 - s * m22;
      newDst[3] = c * m03 - s * m23;
      newDst[8] = c * m20 + s * m00;
      newDst[9] = c * m21 + s * m01;
      newDst[10] = c * m22 + s * m02;
      newDst[11] = c * m23 + s * m03;
      if (m !== newDst) {
        newDst[4] = m[4];
        newDst[5] = m[5];
        newDst[6] = m[6];
        newDst[7] = m[7];
        newDst[12] = m[12];
        newDst[13] = m[13];
        newDst[14] = m[14];
        newDst[15] = m[15];
      }
      return newDst;
    }
    /**
     * Creates a 4-by-4 matrix which rotates around the z-axis by the given angle.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotation matrix.
     */
    function rotationZ(angleInRadians, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      var c = Math.cos(angleInRadians);
      var s = Math.sin(angleInRadians);
      newDst[0] = c;
      newDst[1] = s;
      newDst[2] = 0;
      newDst[3] = 0;
      newDst[4] = -s;
      newDst[5] = c;
      newDst[6] = 0;
      newDst[7] = 0;
      newDst[8] = 0;
      newDst[9] = 0;
      newDst[10] = 1;
      newDst[11] = 0;
      newDst[12] = 0;
      newDst[13] = 0;
      newDst[14] = 0;
      newDst[15] = 1;
      return newDst;
    }
    /**
     * Rotates the given 4-by-4 matrix around the z-axis by the given
     * angle.
     * @param m - The matrix.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    function rotateZ(m, angleInRadians, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      var m00 = m[0 * 4 + 0];
      var m01 = m[0 * 4 + 1];
      var m02 = m[0 * 4 + 2];
      var m03 = m[0 * 4 + 3];
      var m10 = m[1 * 4 + 0];
      var m11 = m[1 * 4 + 1];
      var m12 = m[1 * 4 + 2];
      var m13 = m[1 * 4 + 3];
      var c = Math.cos(angleInRadians);
      var s = Math.sin(angleInRadians);
      newDst[0] = c * m00 + s * m10;
      newDst[1] = c * m01 + s * m11;
      newDst[2] = c * m02 + s * m12;
      newDst[3] = c * m03 + s * m13;
      newDst[4] = c * m10 - s * m00;
      newDst[5] = c * m11 - s * m01;
      newDst[6] = c * m12 - s * m02;
      newDst[7] = c * m13 - s * m03;
      if (m !== newDst) {
        newDst[8] = m[8];
        newDst[9] = m[9];
        newDst[10] = m[10];
        newDst[11] = m[11];
        newDst[12] = m[12];
        newDst[13] = m[13];
        newDst[14] = m[14];
        newDst[15] = m[15];
      }
      return newDst;
    }
    /**
     * Creates a 4-by-4 matrix which rotates around the given axis by the given
     * angle.
     * @param axis - The axis
     *     about which to rotate.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns A matrix which rotates angle radians
     *     around the axis.
     */
    function axisRotation(axis, angleInRadians, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      var x = axis[0];
      var y = axis[1];
      var z = axis[2];
      var n = Math.sqrt(x * x + y * y + z * z);
      x /= n;
      y /= n;
      z /= n;
      var xx = x * x;
      var yy = y * y;
      var zz = z * z;
      var c = Math.cos(angleInRadians);
      var s = Math.sin(angleInRadians);
      var oneMinusCosine = 1 - c;
      newDst[0] = xx + (1 - xx) * c;
      newDst[1] = x * y * oneMinusCosine + z * s;
      newDst[2] = x * z * oneMinusCosine - y * s;
      newDst[3] = 0;
      newDst[4] = x * y * oneMinusCosine - z * s;
      newDst[5] = yy + (1 - yy) * c;
      newDst[6] = y * z * oneMinusCosine + x * s;
      newDst[7] = 0;
      newDst[8] = x * z * oneMinusCosine + y * s;
      newDst[9] = y * z * oneMinusCosine - x * s;
      newDst[10] = zz + (1 - zz) * c;
      newDst[11] = 0;
      newDst[12] = 0;
      newDst[13] = 0;
      newDst[14] = 0;
      newDst[15] = 1;
      return newDst;
    }
    /**
     * Creates a 4-by-4 matrix which rotates around the given axis by the given
     * angle. (same as axisRotation)
     * @param axis - The axis
     *     about which to rotate.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns A matrix which rotates angle radians
     *     around the axis.
     */
    var rotation = axisRotation;
    /**
     * Rotates the given 4-by-4 matrix around the given axis by the
     * given angle.
     * @param m - The matrix.
     * @param axis - The axis
     *     about which to rotate.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    function axisRotate(m, axis, angleInRadians, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      var x = axis[0];
      var y = axis[1];
      var z = axis[2];
      var n = Math.sqrt(x * x + y * y + z * z);
      x /= n;
      y /= n;
      z /= n;
      var xx = x * x;
      var yy = y * y;
      var zz = z * z;
      var c = Math.cos(angleInRadians);
      var s = Math.sin(angleInRadians);
      var oneMinusCosine = 1 - c;
      var r00 = xx + (1 - xx) * c;
      var r01 = x * y * oneMinusCosine + z * s;
      var r02 = x * z * oneMinusCosine - y * s;
      var r10 = x * y * oneMinusCosine - z * s;
      var r11 = yy + (1 - yy) * c;
      var r12 = y * z * oneMinusCosine + x * s;
      var r20 = x * z * oneMinusCosine + y * s;
      var r21 = y * z * oneMinusCosine - x * s;
      var r22 = zz + (1 - zz) * c;
      var m00 = m[0];
      var m01 = m[1];
      var m02 = m[2];
      var m03 = m[3];
      var m10 = m[4];
      var m11 = m[5];
      var m12 = m[6];
      var m13 = m[7];
      var m20 = m[8];
      var m21 = m[9];
      var m22 = m[10];
      var m23 = m[11];
      newDst[0] = r00 * m00 + r01 * m10 + r02 * m20;
      newDst[1] = r00 * m01 + r01 * m11 + r02 * m21;
      newDst[2] = r00 * m02 + r01 * m12 + r02 * m22;
      newDst[3] = r00 * m03 + r01 * m13 + r02 * m23;
      newDst[4] = r10 * m00 + r11 * m10 + r12 * m20;
      newDst[5] = r10 * m01 + r11 * m11 + r12 * m21;
      newDst[6] = r10 * m02 + r11 * m12 + r12 * m22;
      newDst[7] = r10 * m03 + r11 * m13 + r12 * m23;
      newDst[8] = r20 * m00 + r21 * m10 + r22 * m20;
      newDst[9] = r20 * m01 + r21 * m11 + r22 * m21;
      newDst[10] = r20 * m02 + r21 * m12 + r22 * m22;
      newDst[11] = r20 * m03 + r21 * m13 + r22 * m23;
      if (m !== newDst) {
        newDst[12] = m[12];
        newDst[13] = m[13];
        newDst[14] = m[14];
        newDst[15] = m[15];
      }
      return newDst;
    }
    /**
     * Rotates the given 4-by-4 matrix around the given axis by the
     * given angle. (same as rotate)
     * @param m - The matrix.
     * @param axis - The axis
     *     about which to rotate.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    var rotate = axisRotate;
    /**
     * Creates a 4-by-4 matrix which scales in each dimension by an amount given by
     * the corresponding entry in the given vector; assumes the vector has three
     * entries.
     * @param v - A vector of
     *     three entries specifying the factor by which to scale in each dimension.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaling matrix.
     */
    function scaling(v, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      newDst[0] = v[0];
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[3] = 0;
      newDst[4] = 0;
      newDst[5] = v[1];
      newDst[6] = 0;
      newDst[7] = 0;
      newDst[8] = 0;
      newDst[9] = 0;
      newDst[10] = v[2];
      newDst[11] = 0;
      newDst[12] = 0;
      newDst[13] = 0;
      newDst[14] = 0;
      newDst[15] = 1;
      return newDst;
    }
    /**
     * Scales the given 4-by-4 matrix in each dimension by an amount
     * given by the corresponding entry in the given vector; assumes the vector has
     * three entries.
     * @param m - The matrix to be modified.
     * @param v - A vector of three entries specifying the
     *     factor by which to scale in each dimension.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaled matrix.
     */
    function scale(m, v, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      var v0 = v[0];
      var v1 = v[1];
      var v2 = v[2];
      newDst[0] = v0 * m[0 * 4 + 0];
      newDst[1] = v0 * m[0 * 4 + 1];
      newDst[2] = v0 * m[0 * 4 + 2];
      newDst[3] = v0 * m[0 * 4 + 3];
      newDst[4] = v1 * m[1 * 4 + 0];
      newDst[5] = v1 * m[1 * 4 + 1];
      newDst[6] = v1 * m[1 * 4 + 2];
      newDst[7] = v1 * m[1 * 4 + 3];
      newDst[8] = v2 * m[2 * 4 + 0];
      newDst[9] = v2 * m[2 * 4 + 1];
      newDst[10] = v2 * m[2 * 4 + 2];
      newDst[11] = v2 * m[2 * 4 + 3];
      if (m !== newDst) {
        newDst[12] = m[12];
        newDst[13] = m[13];
        newDst[14] = m[14];
        newDst[15] = m[15];
      }
      return newDst;
    }
    /**
     * Creates a 4-by-4 matrix which scales a uniform amount in each dimension.
     * @param s - the amount to scale
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaling matrix.
     */
    function uniformScaling(s, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      newDst[0] = s;
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[3] = 0;
      newDst[4] = 0;
      newDst[5] = s;
      newDst[6] = 0;
      newDst[7] = 0;
      newDst[8] = 0;
      newDst[9] = 0;
      newDst[10] = s;
      newDst[11] = 0;
      newDst[12] = 0;
      newDst[13] = 0;
      newDst[14] = 0;
      newDst[15] = 1;
      return newDst;
    }
    /**
     * Scales the given 4-by-4 matrix in each dimension by a uniform scale.
     * @param m - The matrix to be modified.
     * @param s - The amount to scale.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaled matrix.
     */
    function uniformScale(m, s, dst) {
      var newDst = dst != null ? dst : new Ctor(16);
      newDst[0] = s * m[0 * 4 + 0];
      newDst[1] = s * m[0 * 4 + 1];
      newDst[2] = s * m[0 * 4 + 2];
      newDst[3] = s * m[0 * 4 + 3];
      newDst[4] = s * m[1 * 4 + 0];
      newDst[5] = s * m[1 * 4 + 1];
      newDst[6] = s * m[1 * 4 + 2];
      newDst[7] = s * m[1 * 4 + 3];
      newDst[8] = s * m[2 * 4 + 0];
      newDst[9] = s * m[2 * 4 + 1];
      newDst[10] = s * m[2 * 4 + 2];
      newDst[11] = s * m[2 * 4 + 3];
      if (m !== newDst) {
        newDst[12] = m[12];
        newDst[13] = m[13];
        newDst[14] = m[14];
        newDst[15] = m[15];
      }
      return newDst;
    }
    return {
      create: create,
      set: set,
      fromMat3: fromMat3,
      fromQuat: fromQuat,
      negate: negate,
      copy: copy,
      clone: clone,
      equalsApproximately: equalsApproximately,
      equals: equals,
      identity: identity,
      transpose: transpose,
      inverse: inverse,
      determinant: determinant,
      invert: invert,
      multiply: multiply,
      mul: mul,
      setTranslation: setTranslation,
      getTranslation: getTranslation,
      getAxis: getAxis,
      setAxis: setAxis,
      getScaling: getScaling,
      perspective: perspective,
      perspectiveReverseZ: perspectiveReverseZ,
      ortho: ortho,
      frustum: frustum,
      frustumReverseZ: frustumReverseZ,
      aim: aim,
      cameraAim: cameraAim,
      lookAt: lookAt,
      translation: translation,
      translate: translate,
      rotationX: rotationX,
      rotateX: rotateX,
      rotationY: rotationY,
      rotateY: rotateY,
      rotationZ: rotationZ,
      rotateZ: rotateZ,
      axisRotation: axisRotation,
      rotation: rotation,
      axisRotate: axisRotate,
      rotate: rotate,
      scaling: scaling,
      scale: scale,
      uniformScaling: uniformScaling,
      uniformScale: uniformScale
    };
  }
  var cache$2 = new Map();
  function getAPI$2(Ctor) {
    var api = cache$2.get(Ctor);
    if (!api) {
      api = getAPIImpl$2(Ctor);
      cache$2.set(Ctor, api);
    }
    return api;
  }

  /*
    * Copyright 2022 Gregg Tavares
    *
    * Permission is hereby granted, free of charge, to any person obtaining a
    * copy of this software and associated documentation files (the "Software"),
    * to deal in the Software without restriction, including without limitation
    * the rights to use, copy, modify, merge, publish, distribute, sublicense,
    * and/or sell copies of the Software, and to permit persons to whom the
    * Software is furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
    * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
    * DEALINGS IN THE SOFTWARE.
    */
  /**
   * Generates am typed API for Qud
   * */
  function getAPIImpl$1(Ctor) {
    var vec3 = getAPI$4(Ctor);
    /**
     * Creates a quat4; may be called with x, y, z to set initial values.
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @param z - Initial z value.
     * @param w - Initial w value.
     * @returns the created vector
     */
    function create(x, y, z, w) {
      var newDst = new Ctor(4);
      if (x !== undefined) {
        newDst[0] = x;
        if (y !== undefined) {
          newDst[1] = y;
          if (z !== undefined) {
            newDst[2] = z;
            if (w !== undefined) {
              newDst[3] = w;
            }
          }
        }
      }
      return newDst;
    }
    /**
     * Creates a Quat; may be called with x, y, z to set initial values. (same as create)
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @param z - Initial z value.
     * @param z - Initial w value.
     * @returns the created vector
     */
    var fromValues = create;
    /**
     * Sets the values of a Quat
     * Also see {@link quat.create} and {@link quat.copy}
     *
     * @param x first value
     * @param y second value
     * @param z third value
     * @param w fourth value
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector with its elements set.
     */
    function set(x, y, z, w, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = x;
      newDst[1] = y;
      newDst[2] = z;
      newDst[3] = w;
      return newDst;
    }
    /**
     * Sets a quaternion from the given angle and  axis,
     * then returns it.
     *
     * @param axis - the axis to rotate around
     * @param angleInRadians - the angle
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns The quaternion that represents the given axis and angle
     **/
    function fromAxisAngle(axis, angleInRadians, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      var halfAngle = angleInRadians * 0.5;
      var s = Math.sin(halfAngle);
      newDst[0] = s * axis[0];
      newDst[1] = s * axis[1];
      newDst[2] = s * axis[2];
      newDst[3] = Math.cos(halfAngle);
      return newDst;
    }
    /**
     * Gets the rotation axis and angle
     * @param q - quaternion to compute from
     * @param dst - Vec3 to hold result. If not passed in a new one is created.
     * @return angle and axis
     */
    function toAxisAngle(q, dst) {
      var newDst = dst != null ? dst : vec3.create(3);
      var angle = Math.acos(q[3]) * 2;
      var s = Math.sin(angle * 0.5);
      if (s > EPSILON) {
        newDst[0] = q[0] / s;
        newDst[1] = q[1] / s;
        newDst[2] = q[2] / s;
      } else {
        newDst[0] = 1;
        newDst[1] = 0;
        newDst[2] = 0;
      }
      return {
        angle: angle,
        axis: newDst
      };
    }
    /**
     * Returns the angle in degrees between two rotations a and b.
     * @param a - quaternion a
     * @param b - quaternion b
     * @return angle in radians between the two quaternions
     */
    function angle(a, b) {
      var d = dot(a, b);
      return Math.acos(2 * d * d - 1);
    }
    /**
     * Multiplies two quaternions
     *
     * @param a - the first quaternion
     * @param b - the second quaternion
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the result of a * b
     */
    function multiply(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      var ax = a[0];
      var ay = a[1];
      var az = a[2];
      var aw = a[3];
      var bx = b[0];
      var by = b[1];
      var bz = b[2];
      var bw = b[3];
      newDst[0] = ax * bw + aw * bx + ay * bz - az * by;
      newDst[1] = ay * bw + aw * by + az * bx - ax * bz;
      newDst[2] = az * bw + aw * bz + ax * by - ay * bx;
      newDst[3] = aw * bw - ax * bx - ay * by - az * bz;
      return newDst;
    }
    /**
     * Multiplies two quaternions
     *
     * @param a - the first quaternion
     * @param b - the second quaternion
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the result of a * b
     */
    var mul = multiply;
    /**
     * Rotates the given quaternion around the X axis by the given angle.
     * @param q - quaternion to rotate
     * @param angleInRadians - The angle by which to rotate
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the result of a * b
     */
    function rotateX(q, angleInRadians, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      var halfAngle = angleInRadians * 0.5;
      var qx = q[0];
      var qy = q[1];
      var qz = q[2];
      var qw = q[3];
      var bx = Math.sin(halfAngle);
      var bw = Math.cos(halfAngle);
      newDst[0] = qx * bw + qw * bx;
      newDst[1] = qy * bw + qz * bx;
      newDst[2] = qz * bw - qy * bx;
      newDst[3] = qw * bw - qx * bx;
      return newDst;
    }
    /**
     * Rotates the given quaternion around the Y axis by the given angle.
     * @param q - quaternion to rotate
     * @param angleInRadians - The angle by which to rotate
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the result of a * b
     */
    function rotateY(q, angleInRadians, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      var halfAngle = angleInRadians * 0.5;
      var qx = q[0];
      var qy = q[1];
      var qz = q[2];
      var qw = q[3];
      var by = Math.sin(halfAngle);
      var bw = Math.cos(halfAngle);
      newDst[0] = qx * bw - qz * by;
      newDst[1] = qy * bw + qw * by;
      newDst[2] = qz * bw + qx * by;
      newDst[3] = qw * bw - qy * by;
      return newDst;
    }
    /**
     * Rotates the given quaternion around the Z axis by the given angle.
     * @param q - quaternion to rotate
     * @param angleInRadians - The angle by which to rotate
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the result of a * b
     */
    function rotateZ(q, angleInRadians, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      var halfAngle = angleInRadians * 0.5;
      var qx = q[0];
      var qy = q[1];
      var qz = q[2];
      var qw = q[3];
      var bz = Math.sin(halfAngle);
      var bw = Math.cos(halfAngle);
      newDst[0] = qx * bw + qy * bz;
      newDst[1] = qy * bw - qx * bz;
      newDst[2] = qz * bw + qw * bz;
      newDst[3] = qw * bw - qz * bz;
      return newDst;
    }
    /**
     * Spherically linear interpolate between two quaternions
     *
     * @param a - starting value
     * @param b - ending value
     * @param t - value where 0 = a and 1 = b
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the result of a * b
     */
    function slerp(a, b, t, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      var ax = a[0];
      var ay = a[1];
      var az = a[2];
      var aw = a[3];
      var bx = b[0];
      var by = b[1];
      var bz = b[2];
      var bw = b[3];
      var cosOmega = ax * bx + ay * by + az * bz + aw * bw;
      if (cosOmega < 0) {
        cosOmega = -cosOmega;
        bx = -bx;
        by = -by;
        bz = -bz;
        bw = -bw;
      }
      var scale0;
      var scale1;
      if (1.0 - cosOmega > EPSILON) {
        var omega = Math.acos(cosOmega);
        var sinOmega = Math.sin(omega);
        scale0 = Math.sin((1 - t) * omega) / sinOmega;
        scale1 = Math.sin(t * omega) / sinOmega;
      } else {
        scale0 = 1.0 - t;
        scale1 = t;
      }
      newDst[0] = scale0 * ax + scale1 * bx;
      newDst[1] = scale0 * ay + scale1 * by;
      newDst[2] = scale0 * az + scale1 * bz;
      newDst[3] = scale0 * aw + scale1 * bw;
      return newDst;
    }
    /**
     * Compute the inverse of a quaternion
     *
     * @param q - quaternion to compute the inverse of
     * @returns A quaternion that is the result of a * b
     */
    function inverse(q, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      var a0 = q[0];
      var a1 = q[1];
      var a2 = q[2];
      var a3 = q[3];
      var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
      var invDot = dot ? 1 / dot : 0;
      newDst[0] = -a0 * invDot;
      newDst[1] = -a1 * invDot;
      newDst[2] = -a2 * invDot;
      newDst[3] = a3 * invDot;
      return newDst;
    }
    /**
     * Compute the conjugate of a quaternion
     * For quaternions with a magnitude of 1 (a unit quaternion)
     * this returns the same as the inverse but is faster to calculate.
     *
     * @param q - quaternion to compute the conjugate of.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns The conjugate of q
     */
    function conjugate(q, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = -q[0];
      newDst[1] = -q[1];
      newDst[2] = -q[2];
      newDst[3] = q[3];
      return newDst;
    }
    /**
     * Creates a quaternion from the given rotation matrix.
     *
     * The created quaternion is not normalized.
     *
     * @param m - rotation matrix
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns the result
     */
    function fromMat(m, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      /*
      0 1 2
      3 4 5
      6 7 8
              0 1 2
      4 5 6
      8 9 10
        */
      // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
      // article "Quaternion Calculus and Fast Animation".
      var trace = m[0] + m[5] + m[10];
      if (trace > 0.0) {
        // |w| > 1/2, may as well choose w > 1/2
        var root = Math.sqrt(trace + 1); // 2w
        newDst[3] = 0.5 * root;
        var invRoot = 0.5 / root; // 1/(4w)
        newDst[0] = (m[6] - m[9]) * invRoot;
        newDst[1] = (m[8] - m[2]) * invRoot;
        newDst[2] = (m[1] - m[4]) * invRoot;
      } else {
        // |w| <= 1/2
        var i = 0;
        if (m[5] > m[0]) {
          i = 1;
        }
        if (m[10] > m[i * 4 + i]) {
          i = 2;
        }
        var j = (i + 1) % 3;
        var k = (i + 2) % 3;
        var _root = Math.sqrt(m[i * 4 + i] - m[j * 4 + j] - m[k * 4 + k] + 1.0);
        newDst[i] = 0.5 * _root;
        var _invRoot = 0.5 / _root;
        newDst[3] = (m[j * 4 + k] - m[k * 4 + j]) * _invRoot;
        newDst[j] = (m[j * 4 + i] + m[i * 4 + j]) * _invRoot;
        newDst[k] = (m[k * 4 + i] + m[i * 4 + k]) * _invRoot;
      }
      return newDst;
    }
    /**
     * Creates a quaternion from the given euler angle x, y, z using the provided intrinsic order for the conversion.
     *
     * @param xAngleInRadians - angle to rotate around X axis in radians.
     * @param yAngleInRadians - angle to rotate around Y axis in radians.
     * @param zAngleInRadians - angle to rotate around Z axis in radians.
     * @param order - order to apply euler angles
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion representing the same rotation as the euler angles applied in the given order
     */
    function fromEuler(xAngleInRadians, yAngleInRadians, zAngleInRadians, order, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      var xHalfAngle = xAngleInRadians * 0.5;
      var yHalfAngle = yAngleInRadians * 0.5;
      var zHalfAngle = zAngleInRadians * 0.5;
      var sx = Math.sin(xHalfAngle);
      var cx = Math.cos(xHalfAngle);
      var sy = Math.sin(yHalfAngle);
      var cy = Math.cos(yHalfAngle);
      var sz = Math.sin(zHalfAngle);
      var cz = Math.cos(zHalfAngle);
      switch (order) {
        case 'xyz':
          newDst[0] = sx * cy * cz + cx * sy * sz;
          newDst[1] = cx * sy * cz - sx * cy * sz;
          newDst[2] = cx * cy * sz + sx * sy * cz;
          newDst[3] = cx * cy * cz - sx * sy * sz;
          break;
        case 'xzy':
          newDst[0] = sx * cy * cz - cx * sy * sz;
          newDst[1] = cx * sy * cz - sx * cy * sz;
          newDst[2] = cx * cy * sz + sx * sy * cz;
          newDst[3] = cx * cy * cz + sx * sy * sz;
          break;
        case 'yxz':
          newDst[0] = sx * cy * cz + cx * sy * sz;
          newDst[1] = cx * sy * cz - sx * cy * sz;
          newDst[2] = cx * cy * sz - sx * sy * cz;
          newDst[3] = cx * cy * cz + sx * sy * sz;
          break;
        case 'yzx':
          newDst[0] = sx * cy * cz + cx * sy * sz;
          newDst[1] = cx * sy * cz + sx * cy * sz;
          newDst[2] = cx * cy * sz - sx * sy * cz;
          newDst[3] = cx * cy * cz - sx * sy * sz;
          break;
        case 'zxy':
          newDst[0] = sx * cy * cz - cx * sy * sz;
          newDst[1] = cx * sy * cz + sx * cy * sz;
          newDst[2] = cx * cy * sz + sx * sy * cz;
          newDst[3] = cx * cy * cz - sx * sy * sz;
          break;
        case 'zyx':
          newDst[0] = sx * cy * cz - cx * sy * sz;
          newDst[1] = cx * sy * cz + sx * cy * sz;
          newDst[2] = cx * cy * sz - sx * sy * cz;
          newDst[3] = cx * cy * cz + sx * sy * sz;
          break;
        default:
          throw new Error(`Unknown rotation order: ${order}`);
      }
      return newDst;
    }
    /**
     * Copies a quaternion. (same as {@link quat.clone})
     * Also see {@link quat.create} and {@link quat.set}
     * @param q - The quaternion.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is a copy of q
     */
    function copy(q, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = q[0];
      newDst[1] = q[1];
      newDst[2] = q[2];
      newDst[3] = q[3];
      return newDst;
    }
    /**
     * Clones a quaternion. (same as {@link quat.copy})
     * Also see {@link quat.create} and {@link quat.set}
     * @param q - The quaternion.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A copy of q.
     */
    var clone = copy;
    /**
     * Adds two quaternions; assumes a and b have the same dimension.
     * @param a - Operand quaternion.
     * @param b - Operand quaternion.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the sum of a and b.
     */
    function add(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = a[0] + b[0];
      newDst[1] = a[1] + b[1];
      newDst[2] = a[2] + b[2];
      newDst[3] = a[3] + b[3];
      return newDst;
    }
    /**
     * Subtracts two quaternions.
     * @param a - Operand quaternion.
     * @param b - Operand quaternion.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the difference of a and b.
     */
    function subtract(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = a[0] - b[0];
      newDst[1] = a[1] - b[1];
      newDst[2] = a[2] - b[2];
      newDst[3] = a[3] - b[3];
      return newDst;
    }
    /**
     * Subtracts two quaternions.
     * @param a - Operand quaternion.
     * @param b - Operand quaternion.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the difference of a and b.
     */
    var sub = subtract;
    /**
     * Multiplies a quaternion by a scalar.
     * @param v - The quaternion.
     * @param k - The scalar.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns The scaled quaternion.
     */
    function mulScalar(v, k, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = v[0] * k;
      newDst[1] = v[1] * k;
      newDst[2] = v[2] * k;
      newDst[3] = v[3] * k;
      return newDst;
    }
    /**
     * Multiplies a quaternion by a scalar. (same as mulScalar)
     * @param v - The quaternion.
     * @param k - The scalar.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns The scaled quaternion.
     */
    var scale = mulScalar;
    /**
     * Divides a vector by a scalar.
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns The scaled quaternion.
     */
    function divScalar(v, k, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = v[0] / k;
      newDst[1] = v[1] / k;
      newDst[2] = v[2] / k;
      newDst[3] = v[3] / k;
      return newDst;
    }
    /**
     * Computes the dot product of two quaternions
     * @param a - Operand quaternion.
     * @param b - Operand quaternion.
     * @returns dot product
     */
    function dot(a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    }
    /**
     * Performs linear interpolation on two quaternions.
     * Given quaternions a and b and interpolation coefficient t, returns
     * a + t * (b - a).
     * @param a - Operand quaternion.
     * @param b - Operand quaternion.
     * @param t - Interpolation coefficient.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns The linear interpolated result.
     */
    function lerp(a, b, t, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = a[0] + t * (b[0] - a[0]);
      newDst[1] = a[1] + t * (b[1] - a[1]);
      newDst[2] = a[2] + t * (b[2] - a[2]);
      newDst[3] = a[3] + t * (b[3] - a[3]);
      return newDst;
    }
    /**
     * Computes the length of quaternion
     * @param v - quaternion.
     * @returns length of quaternion.
     */
    function length(v) {
      var v0 = v[0];
      var v1 = v[1];
      var v2 = v[2];
      var v3 = v[3];
      return Math.sqrt(v0 * v0 + v1 * v1 + v2 * v2 + v3 * v3);
    }
    /**
     * Computes the length of quaternion (same as length)
     * @param v - quaternion.
     * @returns length of quaternion.
     */
    var len = length;
    /**
     * Computes the square of the length of quaternion
     * @param v - quaternion.
     * @returns square of the length of quaternion.
     */
    function lengthSq(v) {
      var v0 = v[0];
      var v1 = v[1];
      var v2 = v[2];
      var v3 = v[3];
      return v0 * v0 + v1 * v1 + v2 * v2 + v3 * v3;
    }
    /**
     * Computes the square of the length of quaternion (same as lengthSq)
     * @param v - quaternion.
     * @returns square of the length of quaternion.
     */
    var lenSq = lengthSq;
    /**
     * Divides a quaternion by its Euclidean length and returns the quotient.
     * @param v - The quaternion.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns The normalized quaternion.
     */
    function normalize(v, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      var v0 = v[0];
      var v1 = v[1];
      var v2 = v[2];
      var v3 = v[3];
      var len = Math.sqrt(v0 * v0 + v1 * v1 + v2 * v2 + v3 * v3);
      if (len > 0.00001) {
        newDst[0] = v0 / len;
        newDst[1] = v1 / len;
        newDst[2] = v2 / len;
        newDst[3] = v3 / len;
      } else {
        newDst[0] = 0;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 1;
      }
      return newDst;
    }
    /**
     * Check if 2 quaternions are approximately equal
     * @param a - Operand quaternion.
     * @param b - Operand quaternion.
     * @returns true if quaternions are approximately equal
     */
    function equalsApproximately(a, b) {
      return Math.abs(a[0] - b[0]) < EPSILON && Math.abs(a[1] - b[1]) < EPSILON && Math.abs(a[2] - b[2]) < EPSILON && Math.abs(a[3] - b[3]) < EPSILON;
    }
    /**
     * Check if 2 quaternions are exactly equal
     * @param a - Operand quaternion.
     * @param b - Operand quaternion.
     * @returns true if quaternions are exactly equal
     */
    function equals(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
    }
    /**
     * Creates an identity quaternion
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns an identity quaternion
     */
    function identity(dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = 0;
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[3] = 1;
      return newDst;
    }
    var tempVec3 = vec3.create();
    var xUnitVec3 = vec3.create();
    var yUnitVec3 = vec3.create();
    /**
     * Computes a quaternion to represent the shortest rotation from one vector to another.
     *
     * @param aUnit - the start vector
     * @param bUnit - the end vector
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns the result
     */
    function rotationTo(aUnit, bUnit, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      var dot = vec3.dot(aUnit, bUnit);
      if (dot < -0.999999) {
        vec3.cross(xUnitVec3, aUnit, tempVec3);
        if (vec3.len(tempVec3) < 0.000001) {
          vec3.cross(yUnitVec3, aUnit, tempVec3);
        }
        vec3.normalize(tempVec3, tempVec3);
        fromAxisAngle(tempVec3, Math.PI, newDst);
        return newDst;
      } else if (dot > 0.999999) {
        newDst[0] = 0;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 1;
        return newDst;
      } else {
        vec3.cross(aUnit, bUnit, tempVec3);
        newDst[0] = tempVec3[0];
        newDst[1] = tempVec3[1];
        newDst[2] = tempVec3[2];
        newDst[3] = 1 + dot;
        return normalize(newDst, newDst);
      }
    }
    var tempQuat1 = new Ctor(4);
    var tempQuat2 = new Ctor(4);
    /**
     * Performs a spherical linear interpolation with two control points
     *
     * @param a - the first quaternion
     * @param b - the second quaternion
     * @param c - the third quaternion
     * @param d - the fourth quaternion
     * @param t - Interpolation coefficient 0 to 1
     * @returns result
     */
    function sqlerp(a, b, c, d, t, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      slerp(a, d, t, tempQuat1);
      slerp(b, c, t, tempQuat2);
      slerp(tempQuat1, tempQuat2, 2 * t * (1 - t), newDst);
      return newDst;
    }
    return {
      create: create,
      fromValues: fromValues,
      set: set,
      fromAxisAngle: fromAxisAngle,
      toAxisAngle: toAxisAngle,
      angle: angle,
      multiply: multiply,
      mul: mul,
      rotateX: rotateX,
      rotateY: rotateY,
      rotateZ: rotateZ,
      slerp: slerp,
      inverse: inverse,
      conjugate: conjugate,
      fromMat: fromMat,
      fromEuler: fromEuler,
      copy: copy,
      clone: clone,
      add: add,
      subtract: subtract,
      sub: sub,
      mulScalar: mulScalar,
      scale: scale,
      divScalar: divScalar,
      dot: dot,
      lerp: lerp,
      length: length,
      len: len,
      lengthSq: lengthSq,
      lenSq: lenSq,
      normalize: normalize,
      equalsApproximately: equalsApproximately,
      equals: equals,
      identity: identity,
      rotationTo: rotationTo,
      sqlerp: sqlerp
    };
  }
  var cache$1 = new Map();
  /**
   *
   * Quat4 math functions.
   *
   * Almost all functions take an optional `newDst` argument. If it is not passed in the
   * functions will create a new `Quat4`. In other words you can do this
   *
   *     const v = quat4.cross(v1, v2);  // Creates a new Quat4 with the cross product of v1 x v2.
   *
   * or
   *
   *     const v = quat4.create();
   *     quat4.cross(v1, v2, v);  // Puts the cross product of v1 x v2 in v
   *
   * The first style is often easier but depending on where it's used it generates garbage where
   * as there is almost never allocation with the second style.
   *
   * It is always safe to pass any vector as the destination. So for example
   *
   *     quat4.cross(v1, v2, v1);  // Puts the cross product of v1 x v2 in v1
   *
   */
  function getAPI$1(Ctor) {
    var api = cache$1.get(Ctor);
    if (!api) {
      api = getAPIImpl$1(Ctor);
      cache$1.set(Ctor, api);
    }
    return api;
  }

  /*
    * Copyright 2022 Gregg Tavares
    *
    * Permission is hereby granted, free of charge, to any person obtaining a
    * copy of this software and associated documentation files (the "Software"),
    * to deal in the Software without restriction, including without limitation
    * the rights to use, copy, modify, merge, publish, distribute, sublicense,
    * and/or sell copies of the Software, and to permit persons to whom the
    * Software is furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
    * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
    * DEALINGS IN THE SOFTWARE.
    */
  /**
   * Generates am typed API for Vec4
   * */
  function getAPIImpl(Ctor) {
    /**
     * Creates a vec4; may be called with x, y, z to set initial values.
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @param z - Initial z value.
     * @param w - Initial w value.
     * @returns the created vector
     */
    function create(x, y, z, w) {
      var newDst = new Ctor(4);
      if (x !== undefined) {
        newDst[0] = x;
        if (y !== undefined) {
          newDst[1] = y;
          if (z !== undefined) {
            newDst[2] = z;
            if (w !== undefined) {
              newDst[3] = w;
            }
          }
        }
      }
      return newDst;
    }
    /**
     * Creates a vec4; may be called with x, y, z to set initial values. (same as create)
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @param z - Initial z value.
     * @param z - Initial w value.
     * @returns the created vector
     */
    var fromValues = create;
    /**
     * Sets the values of a Vec4
     * Also see {@link vec4.create} and {@link vec4.copy}
     *
     * @param x first value
     * @param y second value
     * @param z third value
     * @param w fourth value
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector with its elements set.
     */
    function set(x, y, z, w, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = x;
      newDst[1] = y;
      newDst[2] = z;
      newDst[3] = w;
      return newDst;
    }
    /**
     * Applies Math.ceil to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the ceil of each element of v.
     */
    function ceil(v, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = Math.ceil(v[0]);
      newDst[1] = Math.ceil(v[1]);
      newDst[2] = Math.ceil(v[2]);
      newDst[3] = Math.ceil(v[3]);
      return newDst;
    }
    /**
     * Applies Math.floor to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the floor of each element of v.
     */
    function floor(v, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = Math.floor(v[0]);
      newDst[1] = Math.floor(v[1]);
      newDst[2] = Math.floor(v[2]);
      newDst[3] = Math.floor(v[3]);
      return newDst;
    }
    /**
     * Applies Math.round to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the round of each element of v.
     */
    function round(v, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = Math.round(v[0]);
      newDst[1] = Math.round(v[1]);
      newDst[2] = Math.round(v[2]);
      newDst[3] = Math.round(v[3]);
      return newDst;
    }
    /**
     * Clamp each element of vector between min and max
     * @param v - Operand vector.
     * @param max - Min value, default 0
     * @param min - Max value, default 1
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that the clamped value of each element of v.
     */
    function clamp(v) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var dst = arguments.length > 3 ? arguments[3] : undefined;
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = Math.min(max, Math.max(min, v[0]));
      newDst[1] = Math.min(max, Math.max(min, v[1]));
      newDst[2] = Math.min(max, Math.max(min, v[2]));
      newDst[3] = Math.min(max, Math.max(min, v[3]));
      return newDst;
    }
    /**
     * Adds two vectors; assumes a and b have the same dimension.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the sum of a and b.
     */
    function add(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = a[0] + b[0];
      newDst[1] = a[1] + b[1];
      newDst[2] = a[2] + b[2];
      newDst[3] = a[3] + b[3];
      return newDst;
    }
    /**
     * Adds two vectors, scaling the 2nd; assumes a and b have the same dimension.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param scale - Amount to scale b
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the sum of a + b * scale.
     */
    function addScaled(a, b, scale, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = a[0] + b[0] * scale;
      newDst[1] = a[1] + b[1] * scale;
      newDst[2] = a[2] + b[2] * scale;
      newDst[3] = a[3] + b[3] * scale;
      return newDst;
    }
    /**
     * Subtracts two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the difference of a and b.
     */
    function subtract(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = a[0] - b[0];
      newDst[1] = a[1] - b[1];
      newDst[2] = a[2] - b[2];
      newDst[3] = a[3] - b[3];
      return newDst;
    }
    /**
     * Subtracts two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the difference of a and b.
     */
    var sub = subtract;
    /**
     * Check if 2 vectors are approximately equal
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns true if vectors are approximately equal
     */
    function equalsApproximately(a, b) {
      return Math.abs(a[0] - b[0]) < EPSILON && Math.abs(a[1] - b[1]) < EPSILON && Math.abs(a[2] - b[2]) < EPSILON && Math.abs(a[3] - b[3]) < EPSILON;
    }
    /**
     * Check if 2 vectors are exactly equal
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns true if vectors are exactly equal
     */
    function equals(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
    }
    /**
     * Performs linear interpolation on two vectors.
     * Given vectors a and b and interpolation coefficient t, returns
     * a + t * (b - a).
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param t - Interpolation coefficient.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The linear interpolated result.
     */
    function lerp(a, b, t, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = a[0] + t * (b[0] - a[0]);
      newDst[1] = a[1] + t * (b[1] - a[1]);
      newDst[2] = a[2] + t * (b[2] - a[2]);
      newDst[3] = a[3] + t * (b[3] - a[3]);
      return newDst;
    }
    /**
     * Performs linear interpolation on two vectors.
     * Given vectors a and b and interpolation coefficient vector t, returns
     * a + t * (b - a).
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param t - Interpolation coefficients vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns the linear interpolated result.
     */
    function lerpV(a, b, t, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = a[0] + t[0] * (b[0] - a[0]);
      newDst[1] = a[1] + t[1] * (b[1] - a[1]);
      newDst[2] = a[2] + t[2] * (b[2] - a[2]);
      newDst[3] = a[3] + t[3] * (b[3] - a[3]);
      return newDst;
    }
    /**
     * Return max values of two vectors.
     * Given vectors a and b returns
     * [max(a[0], b[0]), max(a[1], b[1]), max(a[2], b[2])].
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The max components vector.
     */
    function max(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = Math.max(a[0], b[0]);
      newDst[1] = Math.max(a[1], b[1]);
      newDst[2] = Math.max(a[2], b[2]);
      newDst[3] = Math.max(a[3], b[3]);
      return newDst;
    }
    /**
     * Return min values of two vectors.
     * Given vectors a and b returns
     * [min(a[0], b[0]), min(a[1], b[1]), min(a[2], b[2])].
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The min components vector.
     */
    function min(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = Math.min(a[0], b[0]);
      newDst[1] = Math.min(a[1], b[1]);
      newDst[2] = Math.min(a[2], b[2]);
      newDst[3] = Math.min(a[3], b[3]);
      return newDst;
    }
    /**
     * Multiplies a vector by a scalar.
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    function mulScalar(v, k, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = v[0] * k;
      newDst[1] = v[1] * k;
      newDst[2] = v[2] * k;
      newDst[3] = v[3] * k;
      return newDst;
    }
    /**
     * Multiplies a vector by a scalar. (same as mulScalar)
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    var scale = mulScalar;
    /**
     * Divides a vector by a scalar.
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    function divScalar(v, k, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = v[0] / k;
      newDst[1] = v[1] / k;
      newDst[2] = v[2] / k;
      newDst[3] = v[3] / k;
      return newDst;
    }
    /**
     * Inverse a vector.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The inverted vector.
     */
    function inverse(v, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = 1 / v[0];
      newDst[1] = 1 / v[1];
      newDst[2] = 1 / v[2];
      newDst[3] = 1 / v[3];
      return newDst;
    }
    /**
     * Invert a vector. (same as inverse)
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The inverted vector.
     */
    var invert = inverse;
    /**
     * Computes the dot product of two vectors
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns dot product
     */
    function dot(a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    }
    /**
     * Computes the length of vector
     * @param v - vector.
     * @returns length of vector.
     */
    function length(v) {
      var v0 = v[0];
      var v1 = v[1];
      var v2 = v[2];
      var v3 = v[3];
      return Math.sqrt(v0 * v0 + v1 * v1 + v2 * v2 + v3 * v3);
    }
    /**
     * Computes the length of vector (same as length)
     * @param v - vector.
     * @returns length of vector.
     */
    var len = length;
    /**
     * Computes the square of the length of vector
     * @param v - vector.
     * @returns square of the length of vector.
     */
    function lengthSq(v) {
      var v0 = v[0];
      var v1 = v[1];
      var v2 = v[2];
      var v3 = v[3];
      return v0 * v0 + v1 * v1 + v2 * v2 + v3 * v3;
    }
    /**
     * Computes the square of the length of vector (same as lengthSq)
     * @param v - vector.
     * @returns square of the length of vector.
     */
    var lenSq = lengthSq;
    /**
     * Computes the distance between 2 points
     * @param a - vector.
     * @param b - vector.
     * @returns distance between a and b
     */
    function distance(a, b) {
      var dx = a[0] - b[0];
      var dy = a[1] - b[1];
      var dz = a[2] - b[2];
      var dw = a[3] - b[3];
      return Math.sqrt(dx * dx + dy * dy + dz * dz + dw * dw);
    }
    /**
     * Computes the distance between 2 points (same as distance)
     * @param a - vector.
     * @param b - vector.
     * @returns distance between a and b
     */
    var dist = distance;
    /**
     * Computes the square of the distance between 2 points
     * @param a - vector.
     * @param b - vector.
     * @returns square of the distance between a and b
     */
    function distanceSq(a, b) {
      var dx = a[0] - b[0];
      var dy = a[1] - b[1];
      var dz = a[2] - b[2];
      var dw = a[3] - b[3];
      return dx * dx + dy * dy + dz * dz + dw * dw;
    }
    /**
     * Computes the square of the distance between 2 points (same as distanceSq)
     * @param a - vector.
     * @param b - vector.
     * @returns square of the distance between a and b
     */
    var distSq = distanceSq;
    /**
     * Divides a vector by its Euclidean length and returns the quotient.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The normalized vector.
     */
    function normalize(v, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      var v0 = v[0];
      var v1 = v[1];
      var v2 = v[2];
      var v3 = v[3];
      var len = Math.sqrt(v0 * v0 + v1 * v1 + v2 * v2 + v3 * v3);
      if (len > 0.00001) {
        newDst[0] = v0 / len;
        newDst[1] = v1 / len;
        newDst[2] = v2 / len;
        newDst[3] = v3 / len;
      } else {
        newDst[0] = 0;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
      }
      return newDst;
    }
    /**
     * Negates a vector.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns -v.
     */
    function negate(v, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = -v[0];
      newDst[1] = -v[1];
      newDst[2] = -v[2];
      newDst[3] = -v[3];
      return newDst;
    }
    /**
     * Copies a vector. (same as {@link vec4.clone})
     * Also see {@link vec4.create} and {@link vec4.set}
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A copy of v.
     */
    function copy(v, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = v[0];
      newDst[1] = v[1];
      newDst[2] = v[2];
      newDst[3] = v[3];
      return newDst;
    }
    /**
     * Clones a vector. (same as {@link vec4.copy})
     * Also see {@link vec4.create} and {@link vec4.set}
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A copy of v.
     */
    var clone = copy;
    /**
     * Multiplies a vector by another vector (component-wise); assumes a and
     * b have the same length.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of products of entries of a and b.
     */
    function multiply(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = a[0] * b[0];
      newDst[1] = a[1] * b[1];
      newDst[2] = a[2] * b[2];
      newDst[3] = a[3] * b[3];
      return newDst;
    }
    /**
     * Multiplies a vector by another vector (component-wise); assumes a and
     * b have the same length. (same as mul)
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of products of entries of a and b.
     */
    var mul = multiply;
    /**
     * Divides a vector by another vector (component-wise); assumes a and
     * b have the same length.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of quotients of entries of a and b.
     */
    function divide(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = a[0] / b[0];
      newDst[1] = a[1] / b[1];
      newDst[2] = a[2] / b[2];
      newDst[3] = a[3] / b[3];
      return newDst;
    }
    /**
     * Divides a vector by another vector (component-wise); assumes a and
     * b have the same length. (same as divide)
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of quotients of entries of a and b.
     */
    var div = divide;
    /**
     * Zero's a vector
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The zeroed vector.
     */
    function zero(dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      newDst[0] = 0;
      newDst[1] = 0;
      newDst[2] = 0;
      newDst[3] = 0;
      return newDst;
    }
    /**
     * transform vec4 by 4x4 matrix
     * @param v - the vector
     * @param m - The matrix.
     * @param dst - optional vec4 to store result. If not passed a new one is created.
     * @returns the transformed vector
     */
    function transformMat4(v, m, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      var x = v[0];
      var y = v[1];
      var z = v[2];
      var w = v[3];
      newDst[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
      newDst[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
      newDst[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
      newDst[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
      return newDst;
    }
    /**
     * Treat a 4D vector as a direction and set it's length
     *
     * @param a The vec4 to lengthen
     * @param len The length of the resulting vector
     * @returns The lengthened vector
     */
    function setLength(a, len, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      normalize(a, newDst);
      return mulScalar(newDst, len, newDst);
    }
    /**
     * Ensure a vector is not longer than a max length
     *
     * @param a The vec4 to limit
     * @param maxLen The longest length of the resulting vector
     * @returns The vector, shortened to maxLen if it's too long
     */
    function truncate(a, maxLen, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      if (length(a) > maxLen) {
        return setLength(a, maxLen, newDst);
      }
      return copy(a, newDst);
    }
    /**
     * Return the vector exactly between 2 endpoint vectors
     *
     * @param a Endpoint 1
     * @param b Endpoint 2
     * @returns The vector exactly residing between endpoints 1 and 2
     */
    function midpoint(a, b, dst) {
      var newDst = dst != null ? dst : new Ctor(4);
      return lerp(a, b, 0.5, newDst);
    }
    return {
      create: create,
      fromValues: fromValues,
      set: set,
      ceil: ceil,
      floor: floor,
      round: round,
      clamp: clamp,
      add: add,
      addScaled: addScaled,
      subtract: subtract,
      sub: sub,
      equalsApproximately: equalsApproximately,
      equals: equals,
      lerp: lerp,
      lerpV: lerpV,
      max: max,
      min: min,
      mulScalar: mulScalar,
      scale: scale,
      divScalar: divScalar,
      inverse: inverse,
      invert: invert,
      dot: dot,
      length: length,
      len: len,
      lengthSq: lengthSq,
      lenSq: lenSq,
      distance: distance,
      dist: dist,
      distanceSq: distanceSq,
      distSq: distSq,
      normalize: normalize,
      negate: negate,
      copy: copy,
      clone: clone,
      multiply: multiply,
      mul: mul,
      divide: divide,
      div: div,
      zero: zero,
      transformMat4: transformMat4,
      setLength: setLength,
      truncate: truncate,
      midpoint: midpoint
    };
  }
  var cache = new Map();
  /**
   *
   * Vec4 math functions.
   *
   * Almost all functions take an optional `newDst` argument. If it is not passed in the
   * functions will create a new `Vec4`. In other words you can do this
   *
   *     const v = vec4.cross(v1, v2);  // Creates a new Vec4 with the cross product of v1 x v2.
   *
   * or
   *
   *     const v = vec4.create();
   *     vec4.cross(v1, v2, v);  // Puts the cross product of v1 x v2 in v
   *
   * The first style is often easier but depending on where it's used it generates garbage where
   * as there is almost never allocation with the second style.
   *
   * It is always safe to pass any vector as the destination. So for example
   *
   *     vec4.cross(v1, v2, v1);  // Puts the cross product of v1 x v2 in v1
   *
   */
  function getAPI(Ctor) {
    var api = cache.get(Ctor);
    if (!api) {
      api = getAPIImpl(Ctor);
      cache.set(Ctor, api);
    }
    return api;
  }

  /**
   * Some docs
   * @namespace wgpu-matrix
   */
  /**
   * Generate wgpu-matrix API for type
   */
  function wgpuMatrixAPI(Mat3Ctor, Mat4Ctor, QuatCtor, Vec2Ctor, Vec3Ctor, Vec4Ctor) {
    return {
      /** @namespace mat3 */
      mat3: getAPI$3(Mat3Ctor),
      /** @namespace mat4 */
      mat4: getAPI$2(Mat4Ctor),
      /** @namespace quat */
      quat: getAPI$1(QuatCtor),
      /** @namespace vec2 */
      vec2: getAPI$5(Vec2Ctor),
      /** @namespace vec3 */
      vec3: getAPI$4(Vec3Ctor),
      /** @namespace vec4 */
      vec4: getAPI(Vec4Ctor)
    };
  }
  var _wgpuMatrixAPI = wgpuMatrixAPI(Float32Array, Float32Array, Float32Array, Float32Array, Float32Array, Float32Array),
    mat3 = exports.mat3 = _wgpuMatrixAPI.mat3,
    mat4 = exports.mat4 = _wgpuMatrixAPI.mat4,
    quat = exports.quat = _wgpuMatrixAPI.quat,
    vec2 = exports.vec2 = _wgpuMatrixAPI.vec2,
    vec3 = exports.vec3 = _wgpuMatrixAPI.vec3,
    vec4 = exports.vec4 = _wgpuMatrixAPI.vec4;
  var _wgpuMatrixAPI2 = wgpuMatrixAPI(Float64Array, Float64Array, Float64Array, Float64Array, Float64Array, Float64Array),
    mat3d = exports.mat3d = _wgpuMatrixAPI2.mat3,
    mat4d = exports.mat4d = _wgpuMatrixAPI2.mat4,
    quatd = exports.quatd = _wgpuMatrixAPI2.quat,
    vec2d = exports.vec2d = _wgpuMatrixAPI2.vec2,
    vec3d = exports.vec3d = _wgpuMatrixAPI2.vec3,
    vec4d = exports.vec4d = _wgpuMatrixAPI2.vec4;
  var _wgpuMatrixAPI3 = wgpuMatrixAPI(ZeroArray, Array, Array, Array, Array, Array),
    mat3n = exports.mat3n = _wgpuMatrixAPI3.mat3,
    mat4n = exports.mat4n = _wgpuMatrixAPI3.mat4,
    quatn = exports.quatn = _wgpuMatrixAPI3.quat,
    vec2n = exports.vec2n = _wgpuMatrixAPI3.vec2,
    vec3n = exports.vec3n = _wgpuMatrixAPI3.vec3,
    vec4n = exports.vec4n = _wgpuMatrixAPI3.vec4;
},1,[2,3,7,8,10,11],"../../node_modules/wgpu-matrix/dist/3.x/wgpu-matrix.module.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  }
  module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
},2,[],"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _$$_REQUIRE(_dependencyMap[0], "./toPropertyKey.js")(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
},3,[4],"../../node_modules/@babel/runtime/helpers/createClass.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function toPropertyKey(t) {
    var i = _$$_REQUIRE(_dependencyMap[0], "./toPrimitive.js")(t, "string");
    return "symbol" == _$$_REQUIRE(_dependencyMap[1], "./typeof.js")["default"](i) ? i : i + "";
  }
  module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
},4,[5,6],"../../node_modules/@babel/runtime/helpers/toPropertyKey.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function toPrimitive(t, r) {
    if ("object" != _$$_REQUIRE(_dependencyMap[0], "./typeof.js")["default"](t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _$$_REQUIRE(_dependencyMap[0], "./typeof.js")["default"](i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
},5,[6],"../../node_modules/@babel/runtime/helpers/toPrimitive.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _typeof(o) {
    "@babel/helpers - typeof";

    return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
  }
  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
},6,[],"../../node_modules/@babel/runtime/helpers/typeof.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
},7,[],"../../node_modules/@babel/runtime/helpers/classCallCheck.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _$$_REQUIRE(_dependencyMap[0], "./typeof.js")["default"](e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _$$_REQUIRE(_dependencyMap[1], "./assertThisInitialized.js")(t);
  }
  module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
},8,[6,9],"../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
},9,[],"../../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _getPrototypeOf(t) {
    return module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _getPrototypeOf(t);
  }
  module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},10,[],"../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _$$_REQUIRE(_dependencyMap[0], "./setPrototypeOf.js")(t, e);
  }
  module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
},11,[12],"../../node_modules/@babel/runtime/helpers/inherits.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _setPrototypeOf(t, e) {
    return module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf(t, e);
  }
  module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},12,[],"../../node_modules/@babel/runtime/helpers/setPrototypeOf.js");

// ---------------------------------------------------------------------------

global.__UIModules.wgpuMatrix = global.__r(1);

})();

}