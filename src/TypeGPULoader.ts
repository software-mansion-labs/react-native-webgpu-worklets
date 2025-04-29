// @ts-nocheck

import { runOnUI } from "react-native-reanimated";
import { runOnBackground } from './Runtime';

export function initTypeGPU() {

function init() {
  'worklet';

class TextDecoder {}
class TextEncoder {}

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
  var typegpu = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[0], "typegpu"));
  var typegpuData = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[1], "typegpu/data"));
  var typegpuStd = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[2], "typegpu/std"));
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
},0,[1,33,34],"test.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0], "@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "MissingBindGroupsError", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").f;
    }
  });
  Object.defineProperty(exports, "MissingLinksError", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").e;
    }
  });
  Object.defineProperty(exports, "MissingSlotValueError", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").c;
    }
  });
  Object.defineProperty(exports, "MissingVertexBuffersError", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").g;
    }
  });
  Object.defineProperty(exports, "NotUniformError", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").d;
    }
  });
  exports.RandomNameRegistry = void 0;
  Object.defineProperty(exports, "ResolutionError", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").b;
    }
  });
  exports.default = exports.StrictNameRegistry = void 0;
  exports.isBuffer = ee;
  exports.isComparisonSampler = Ne;
  exports.isDerived = k;
  exports.isSampledTextureView = Ke;
  exports.isSampler = Me;
  exports.isSlot = $;
  exports.isStorageTextureView = ze;
  exports.isTexture = H;
  exports.isTgpuFn = mr;
  exports.isUsableAsRender = aa;
  exports.isUsableAsSampled = rr;
  exports.isUsableAsStorage = de;
  exports.isUsableAsUniform = ot;
  exports.isUsableAsVertex = na;
  exports.tgpu = void 0;
  exports.unstable_asMutable = Kt;
  exports.unstable_asReadonly = qt;
  exports.unstable_asUniform = Ht;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2], "@babel/runtime/helpers/asyncToGenerator"));
  var _assertThisInitialized2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3], "@babel/runtime/helpers/assertThisInitialized"));
  var _possibleConstructorReturn2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4], "@babel/runtime/helpers/possibleConstructorReturn"));
  var _getPrototypeOf2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5], "@babel/runtime/helpers/getPrototypeOf"));
  var _inherits2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[6], "@babel/runtime/helpers/inherits"));
  var _wrapNativeSuper2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[7], "@babel/runtime/helpers/wrapNativeSuper"));
  var _toConsumableArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8], "@babel/runtime/helpers/toConsumableArray"));
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9], "@babel/runtime/helpers/slicedToArray"));
  var _classCallCheck2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10], "@babel/runtime/helpers/classCallCheck"));
  var _createClass2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11], "@babel/runtime/helpers/createClass"));
  var _defineProperty2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12], "@babel/runtime/helpers/defineProperty"));
  var oa = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[13], "tinyest"));
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  function _defineAccessor(e, r, n, t) { var c = { configurable: !0, enumerable: !0 }; return c[e] = t, Object.defineProperty(r, n, c); }
  function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  function $(e) {
    return (e == null ? void 0 : e.resourceType) === "slot";
  }
  function k(e) {
    return (e == null ? void 0 : e.resourceType) === "derived";
  }
  function Ve(e) {
    return (e == null ? void 0 : e["~providing"]) !== void 0;
  }
  function ue(e) {
    return (e == null ? void 0 : e.resourceType) === "accessor";
  }
  var U = {
    type: "unknown"
  };
  function $t(e) {
    return typeof (e == null ? void 0 : e["~resolve"]) == "function";
  }
  function K(e) {
    return typeof e == "number" || typeof e == "boolean" || typeof e == "string" || $t(e) || (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").Y)(e) || $(e) || k(e) || Ve(e);
  }
  function kr(e) {
    return !!e && typeof e == "object" && "getMappedRange" in e && "mapAsync" in e;
  }
  function et(e) {
    return (e == null ? void 0 : e.resourceType) === "buffer-usage";
  }
  function Or(e) {
    var _e$y;
    return !!e && typeof e == "object" && !!(e != null && (_e$y = e[_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").n]) != null && _e$y.dataType);
  }
  function Gr(e) {
    return !!(e != null && e[_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").n]);
  }
  var Mn = ["vec2f", "vec2h", "vec2i", "vec2u", "vec2<bool>", "vec3f", "vec3h", "vec3i", "vec3u", "vec3<bool>", "vec4f", "vec4h", "vec4i", "vec4u", "vec4<bool>", "struct"],
    Nn = {
      f: {
        1: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
        2: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").r,
        3: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").w,
        4: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").B
      },
      h: {
        1: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").Q,
        2: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").s,
        3: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").x,
        4: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").C
      },
      i: {
        1: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").O,
        2: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").t,
        3: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").y,
        4: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").D
      },
      u: {
        1: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").N,
        2: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").u,
        3: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").z,
        4: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").E
      },
      b: {
        1: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").M,
        2: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").v,
        3: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").A,
        4: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").F
      }
    },
    Wr = {
      vec2f: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").r,
      vec2h: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").s,
      vec2i: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").t,
      vec2u: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").u,
      "vec2<bool>": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").v,
      vec3f: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").w,
      vec3h: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").x,
      vec3i: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").y,
      vec3u: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").z,
      "vec3<bool>": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").A,
      vec4f: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").B,
      vec4h: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").C,
      vec4i: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").D,
      vec4u: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").E,
      "vec4<bool>": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").F,
      mat2x2f: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").G,
      mat3x3f: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").H,
      mat4x4f: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").I
    },
    Mr = {
      vec2f: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      vec2h: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").Q,
      vec2i: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").O,
      vec2u: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").N,
      "vec2<bool>": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").M,
      vec3f: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      vec3h: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").Q,
      vec3i: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").O,
      vec3u: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").N,
      "vec3<bool>": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").M,
      vec4f: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      vec4h: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").Q,
      vec4i: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").O,
      vec4u: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").N,
      "vec4<bool>": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").M,
      mat2x2f: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").r,
      mat3x3f: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").w,
      mat4x4f: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").B
    };
  function he(e, t) {
    var _r$propTypes$t;
    if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return U;
    if (k(e) || $(e)) {
      var o = (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").j)();
      if (!o) throw new Error("Resolution context not found when unwrapping slot or derived");
      var s = o.unwrap(e);
      return we(s);
    }
    var r = e;
    for (Or(r) && (r = r[_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").n].dataType); (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").ga)(r);) r = r.inner;
    var n = "kind" in r ? r.kind : r.type;
    if (n === "struct") return (_r$propTypes$t = r.propTypes[t]) != null ? _r$propTypes$t : U;
    var a = t.length;
    if (Mn.includes(n) && a >= 1 && a <= 4) {
      var _o = n.includes("bool") ? "b" : n[4],
        _s = Nn[_o][a];
      if (_s) return _s;
    }
    return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").Y)(r) ? r : U;
  }
  function Nr(e) {
    if ((0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").Y)(e)) {
      if ((0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").Z)(e)) return e.elementType;
      if (e.type in Mr) return Mr[e.type];
    }
    return U;
  }
  function we(e) {
    var _kt$dataType, _kt;
    if (k(e) || $(e)) return we(e.value);
    if (typeof e == "string") return U;
    if (typeof e == "number") return (_kt$dataType = (_kt = kt(String(e))) == null ? void 0 : _kt.dataType) != null ? _kt$dataType : U;
    if (typeof e == "boolean") return _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").M;
    if ("kind" in e) {
      var t = e.kind;
      if (t in Wr) return Wr[t];
    }
    return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").Y)(e) ? e : U;
  }
  function kt(e) {
    if (/^0x[0-9a-f]+$/i.test(e)) return {
      value: e,
      dataType: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").K
    };
    if (/^0b[01]+$/i.test(e)) return {
      value: `${Number.parseInt(e.slice(2), 2)}`,
      dataType: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").K
    };
    if (/^-?(?:\d+\.\d*|\d*\.\d+)$/i.test(e)) return {
      value: e,
      dataType: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").L
    };
    if (/^-?\d+(?:\.\d+)?e-?\d+$/i.test(e)) return {
      value: e,
      dataType: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").L
    };
    if (/^-?\d+$/i.test(e)) return {
      value: e,
      dataType: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").K
    };
  }
  var N = {
    get: function get(e, t) {
      if (t in e) return Reflect.get(e, t);
      if (t !== "~providing") return t === "toString" || t === Symbol.toStringTag || t === Symbol.toPrimitive ? function () {
        return e.toString();
      } : new Proxy((0, _defineProperty2.default)({
        "~resolve": function resolve(r) {
          return `${r.resolve(e)}.${String(t)}`;
        },
        toString: function toString() {
          var _e$label;
          return `.value(...).${String(t)}:${(_e$label = e.label) != null ? _e$label : "<unnamed>"}`;
        }
      }, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").n, {
        dataType: he(e[_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").n].dataType, String(t))
      }), N);
    }
  };
  function $e(e) {
    var t = e;
    for (; $(t) || k(t) || ue(t) || et(t);) t = t.value;
    return t;
  }
  function jr(e, t) {
    return new Ot(e, t);
  }
  var Ot = /*#__PURE__*/function () {
    function Ot(t, r) {
      (0, _classCallCheck2.default)(this, Ot);
      this.dataType = t;
      this._value = r;
      this[_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").n] = {
        dataType: t
      };
    }
    return (0, _createClass2.default)(Ot, [{
      key: "label",
      get: function get() {
        return this._label;
      }
    }, {
      key: "$name",
      value: function $name(t) {
        return this._label = t, this;
      }
    }, {
      key: "~resolve",
      value: function resolve(t) {
        var r = t.names.makeUnique(this._label),
          n = t.resolveValue(this._value, this.dataType);
        return t.addDeclaration(`const ${r} = ${n};`), r;
      }
    }, {
      key: "toString",
      value: function toString() {
        var _this$label;
        return `const:${(_this$label = this.label) != null ? _this$label : "<unnamed>"}`;
      }
    }, {
      key: "value",
      get: function get() {
        var _this = this;
        return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").m)() ? new Proxy((0, _defineProperty2.default)({
          "~resolve": function resolve(t) {
            return t.resolve(_this);
          },
          toString: function toString() {
            var _this$label2;
            return `.value:${(_this$label2 = _this.label) != null ? _this$label2 : "<unnamed>"}`;
          }
        }, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").n, {
          dataType: this.dataType
        }), N) : this._value;
      }
    }]);
  }();
  function j(e) {
    return !!e && (typeof e == "object" || typeof e == "function") && "$name" in e;
  }
  function q(e, t) {
    for (var _ref of Object.entries(t)) {
      var _ref2 = (0, _slicedToArray2.default)(_ref, 2);
      var r = _ref2[0];
      var n = _ref2[1];
      e[r] = n, j(n) && (!("label" in n) || n.label === void 0) && n.$name(r);
    }
  }
  function zr(e, t, r) {
    var n = (0, _toConsumableArray2.default)(e.matchAll(/:\s*(?<arg>.*?)\s*[,)]/g)).map(function (a) {
      return a ? a[1] : void 0;
    });
    r(Object.fromEntries(t.flatMap(function (a, o) {
      var s = n ? n[o] : void 0;
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js")._)(a) && s !== void 0 ? [[s, a]] : [];
    })));
  }
  function Se(e, t, r) {
    var _n$;
    var n = e.match(/->\s(?<output>[\w\d_]+)\s{/),
      a = n ? (_n$ = n[1]) == null ? void 0 : _n$.trim() : void 0;
    (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js")._)(t) && a && !/\s/g.test(a) && r((0, _defineProperty2.default)({}, a, t));
  }
  function jn(e) {
    return new RegExp(`(?<![\\w\\$_.])${e.replaceAll(".", "\\.").replaceAll("$", "\\$")}(?![\\w\\$_])`, "g");
  }
  function pe(e, t, r) {
    return Object.entries(t).reduce(function (n, _ref3) {
      var _map;
      var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
        a = _ref4[0],
        o = _ref4[1];
      return K(o) || (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").c)(o) ? n.replaceAll(jn(a), e.resolve(o)) : o !== null && typeof o == "object" ? ((_map = (0, _toConsumableArray2.default)(r.matchAll(new RegExp(`${a.replaceAll(".", "\\.").replaceAll("$", "\\$")}\\.(?<prop>.*?)(?![\\w\\$_])`, "g"))).map(function (i) {
        return i[1];
      })) != null ? _map : []).reduce(function (i, p) {
        return p && p in o ? pe(e, (0, _defineProperty2.default)({}, `${a}.${p}`, o[p]), i) : i;
      }, n) : n;
    }, r);
  }
  function Kr(e) {
    return new Gt(e);
  }
  var Gt = /*#__PURE__*/function () {
    function Gt(t) {
      (0, _classCallCheck2.default)(this, Gt);
      this.externalsToApply = [];
      this.declaration = t;
    }
    return (0, _createClass2.default)(Gt, [{
      key: "$uses",
      value: function $uses(t) {
        return this.externalsToApply.push(t), this;
      }
    }, {
      key: "~resolve",
      value: function resolve(t) {
        var r = {};
        for (var a of this.externalsToApply) q(r, a);
        var n = pe(t, r, this.declaration);
        return t.addDeclaration(n), "";
      }
    }, {
      key: "toString",
      value: function toString() {
        return `declare: ${this.declaration}`;
      }
    }]);
  }();
  var qr = new WeakMap();
  function Hr(e) {
    return qr.get(e);
  }
  function Jr(e, t, r) {
    return qr.set(e, {
      ast: t,
      externals: r
    }), e;
  }
  function Yr(e) {
    return function () {
      throw new Error(`The function "${e != null ? e : "<unnamed>"}" is invokable only on the GPU. If you want to use it on the CPU, mark it with the "kernel & js" directive.`);
    };
  }
  function Qr(e, t) {
    throw new Error(`Failed to handle ${e} at ${t}`);
  }
  function ke(e) {
    return typeof (e == null ? void 0 : e.format) == "string";
  }
  function Xr(e, t) {
    var r = [];
    if ((0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").h)(e)) {
      var _X;
      if (!ke(t)) throw new Error("Shader expected a single attribute, not a record of attributes to be passed in.");
      return r.push(t._layout), {
        usedVertexLayouts: r,
        bufferDefinitions: [{
          arrayStride: t._layout.stride,
          stepMode: t._layout.stepMode,
          attributes: [{
            format: t.format,
            offset: t.offset,
            shaderLocation: (_X = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").g)(e)) != null ? _X : 0
          }]
        }]
      };
    }
    var n = [],
      a = new WeakMap(),
      o = 0;
    for (var _ref5 of Object.entries(e)) {
      var _X2;
      var _ref6 = (0, _slicedToArray2.default)(_ref5, 2);
      var s = _ref6[0];
      var i = _ref6[1];
      if ((0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ha)(i)) continue;
      var p = t[s];
      if (!p) throw new Error(`An attribute by the name of '${s}' was not provided to the shader.`);
      var u = p._layout,
        d = a.get(u);
      d || (r.push(u), d = [], n.push({
        arrayStride: u.stride,
        stepMode: u.stepMode,
        attributes: d
      }), a.set(u, d)), o = (_X2 = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").g)(i)) != null ? _X2 : o, d.push({
        format: p.format,
        offset: p.offset,
        shaderLocation: o++
      });
    }
    return {
      usedVertexLayouts: r,
      bufferDefinitions: n
    };
  }
  var zn = ["bool", "f32", "f16", "i32", "u32", "vec2f", "vec3f", "vec4f", "vec2h", "vec3h", "vec4h", "vec2i", "vec3i", "vec4i", "vec2u", "vec3u", "vec4u", "vec2<bool>", "vec3<bool>", "vec4<bool>", "mat2x2f", "mat3x3f", "mat4x4f"];
  function Kn(e) {
    return zn.includes(e.type);
  }
  function Wt(e, _ref7) {
    var _ref8 = (0, _slicedToArray2.default)(_ref7, 2),
      t = _ref8[0],
      r = _ref8[1];
    return `  ${(0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ia)(r)}${t}: ${e.resolve(r)},
`;
  }
  function qn(e, t) {
    var r = e.names.makeUnique(t.label);
    return e.addDeclaration(`
struct ${r} {
${Object.entries(t.propTypes).map(function (n) {
      return Wt(e, n);
    }).join("")}}
`), r;
  }
  function Hn(e, t) {
    var r = e.names.makeUnique(t.label);
    return e.addDeclaration(`
struct ${r} {
${Object.entries(t.propTypes).map(function (n) {
      return ke(n[1]) ? Wt(e, [n[0], _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").i[n[1].format]]) : Wt(e, n);
    }).join("")}
}
`), r;
  }
  function Jn(e, t) {
    var r = e.resolve(t.elementType);
    return t.elementCount === 0 ? `array<${r}>` : `array<${r}, ${t.elementCount}>`;
  }
  function Yn(e, t) {
    var r = e.resolve(ke(t.elementType) ? _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").i[t.elementType.format] : t.elementType);
    return t.elementCount === 0 ? `array<${r}>` : `array<${r}, ${t.elementCount}>`;
  }
  function Mt(e, t) {
    if ((0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").c)(t)) return t.type === "unstruct" ? Hn(e, t) : t.type === "disarray" ? Yn(e, t) : t.type === "loose-decorated" ? e.resolve(ke(t.inner) ? _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").i[t.inner.format] : t.inner) : e.resolve(_$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").i[t.type]);
    if (Kn(t)) return t.type;
    if (t.type === "struct") return qn(e, t);
    if (t.type === "array") return Jn(e, t);
    if (t.type === "atomic") return `atomic<${Mt(e, t.inner)}>`;
    if (t.type === "decorated") return e.resolve(t.inner);
    if (t.type === "ptr") return t.addressSpace === "storage" ? `ptr<storage, ${e.resolve(t.inner)}, ${t.access === "read-write" ? "read_write" : t.access}>` : `ptr<${t.addressSpace}, ${e.resolve(t.inner)}>`;
    if (t.type === "abstractInt" || t.type === "abstractFloat") throw new Error("Abstract types have no concrete representation in WGSL");
    if (t.type === "void") throw new Error("Void has no representation in WGSL");
    Qr(t, "resolveData");
  }
  function Qn(e, t) {
    var r = "size" in e ? e.size : e.currentByteOffset,
      n = t - 1,
      a = r & n;
    "skipBytes" in e ? e.skipBytes(t - a & n) : e.add(t - a & n);
  }
  var w = Qn;
  var Zr = new WeakMap();
  function tt(e) {
    var t = Zr.get(e);
    if (t) return t;
    var r = new (_$$_REQUIRE(_dependencyMap[15], "typed-binary").Measurer)(),
      n = {},
      a;
    for (var o in e.propTypes) {
      var s = e.propTypes[o];
      if (s === void 0) throw new Error(`Property ${o} is undefined in struct`);
      var i = r.size;
      w(r, (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").e)(e) ? (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js")._)(s) : (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").Z)(s)), a && (a.padding = r.size - i);
      var p = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(s);
      n[o] = {
        offset: r.size,
        size: p
      }, a = n[o], r.add(p);
    }
    return a && (a.padding = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").aa)((0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(e), (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").Z)(e)) - r.size), Zr.set(e, n), n;
  }
  var nt = function () {
      try {
        return new Function("return true"), !0;
      } catch (_unused) {
        return !1;
      }
    }(),
    Nt = new WeakMap(),
    jt = {
      u32: "u32",
      vec2u: "u32",
      vec3u: "u32",
      vec4u: "u32",
      i32: "i32",
      vec2i: "i32",
      vec3i: "i32",
      vec4i: "i32",
      f32: "f32",
      vec2f: "f32",
      vec3f: "f32",
      vec4f: "f32",
      vec2h: "f32",
      vec3h: "f32",
      vec4h: "f32",
      mat2x2f: "f32",
      mat3x3f: "f32",
      mat4x4f: "f32"
    },
    zt = {
      u32: "setUint32",
      i32: "setInt32",
      f32: "setFloat32"
    };
  function rt(e, t, r) {
    if ((0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").aa)(e) || (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").ga)(e)) return rt(e.inner, t, r);
    if ((0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js")._)(e) || (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").e)(e)) {
      var a = tt(e),
        o = Object.entries(a).sort(function (i, p) {
          return i[1].offset - p[1].offset;
        }),
        s = "";
      for (var _ref9 of o) {
        var _ref10 = (0, _slicedToArray2.default)(_ref9, 2);
        var i = _ref10[0];
        var p = _ref10[1];
        var u = e.propTypes[i];
        u && (s += rt(u, `(${t} + ${p.offset})`, `${r}.${i}`));
      }
      return s;
    }
    if ((0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").Z)(e) || (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").d)(e)) {
      var _a = e,
        _o2 = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").aa)((0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(_a.elementType), (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").Z)(_a.elementType)),
        _s2 = "";
      return _s2 += `for (let i = 0; i < ${_a.elementCount}; i++) {
`, _s2 += rt(_a.elementType, `(${t} + i * ${_o2})`, `${r}[i]`), _s2 += `}
`, _s2;
    }
    if ((0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").U)(e)) {
      var _a2 = jt[e.type],
        _o3 = "",
        _s3 = zt[_a2],
        _i = ["x", "y", "z", "w"],
        _p = (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").S)(e) ? 2 : (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").T)(e) ? 3 : 4;
      for (var _u = 0; _u < _p; _u++) _o3 += `output.${_s3}((${t} + ${_u * 4}), ${r}.${_i[_u]}, littleEndian);
`;
      return _o3;
    }
    if ((0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").X)(e)) {
      var _a3 = jt[e.type],
        _o4 = zt[_a3],
        _s4 = (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").V)(e) ? 2 : (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").W)(e) ? 3 : 4,
        _i2 = _s4 * _s4,
        _p2 = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").aa)(_s4 * 4, 8),
        _u2 = "";
      for (var d = 0; d < _i2; d++) {
        var m = Math.floor(d / _s4),
          T = d % _s4,
          f = m * _p2 + T * 4;
        _u2 += `output.${_o4}((${t} + ${f}), ${r}.columns[${m}].${["x", "y", "z", "w"][T]}, littleEndian);
`;
      }
      return _u2;
    }
    var n = jt[e.type];
    return `output.${zt[n]}(${t}, ${r}, littleEndian);
`;
  }
  function at(e) {
    if (Nt.has(e)) return Nt.get(e);
    var t = rt(e, "offset", "value"),
      r = new Function("output", "offset", "value", "littleEndian=true", t);
    return Nt.set(e, r), r;
  }
  var ve = {
    bool: function bool() {
      throw new Error("Booleans are not host-shareable");
    },
    f32: function f32(e, t, r) {
      e.writeFloat32(r);
    },
    f16: function f16(e, t, r) {
      e.writeFloat16(r);
    },
    i32: function i32(e, t, r) {
      e.writeInt32(r);
    },
    u32: function u32(e, t, r) {
      e.writeUint32(r);
    },
    vec2f: function vec2f(e, t, r) {
      e.writeFloat32(r.x), e.writeFloat32(r.y);
    },
    vec2h: function vec2h(e, t, r) {
      e.writeFloat16(r.x), e.writeFloat16(r.y);
    },
    vec2i: function vec2i(e, t, r) {
      e.writeInt32(r.x), e.writeInt32(r.y);
    },
    vec2u: function vec2u(e, t, r) {
      e.writeUint32(r.x), e.writeUint32(r.y);
    },
    "vec2<bool>": function vec2Bool() {
      throw new Error("Booleans are not host-shareable");
    },
    vec3f: function vec3f(e, t, r) {
      e.writeFloat32(r.x), e.writeFloat32(r.y), e.writeFloat32(r.z);
    },
    vec3h: function vec3h(e, t, r) {
      e.writeFloat16(r.x), e.writeFloat16(r.y), e.writeFloat16(r.z);
    },
    vec3i: function vec3i(e, t, r) {
      e.writeInt32(r.x), e.writeInt32(r.y), e.writeInt32(r.z);
    },
    vec3u: function vec3u(e, t, r) {
      e.writeUint32(r.x), e.writeUint32(r.y), e.writeUint32(r.z);
    },
    "vec3<bool>": function vec3Bool() {
      throw new Error("Booleans are not host-shareable");
    },
    vec4f: function vec4f(e, t, r) {
      e.writeFloat32(r.x), e.writeFloat32(r.y), e.writeFloat32(r.z), e.writeFloat32(r.w);
    },
    vec4h: function vec4h(e, t, r) {
      e.writeFloat16(r.x), e.writeFloat16(r.y), e.writeFloat16(r.z), e.writeFloat16(r.w);
    },
    vec4i: function vec4i(e, t, r) {
      e.writeInt32(r.x), e.writeInt32(r.y), e.writeInt32(r.z), e.writeInt32(r.w);
    },
    vec4u: function vec4u(e, t, r) {
      e.writeUint32(r.x), e.writeUint32(r.y), e.writeUint32(r.z), e.writeUint32(r.w);
    },
    "vec4<bool>": function vec4Bool() {
      throw new Error("Booleans are not host-shareable");
    },
    mat2x2f: function mat2x2f(e, t, r) {
      for (var n = 0; n < r.length; ++n) e.writeFloat32(r[n]);
    },
    mat3x3f: function mat3x3f(e, t, r) {
      for (var n = 0; n < r.length; ++n) e.writeFloat32(r[n]);
    },
    mat4x4f: function mat4x4f(e, t, r) {
      for (var n = 0; n < r.length; ++n) e.writeFloat32(r[n]);
    },
    struct: function struct(e, t, r) {
      var n = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").Z)(t);
      w(e, n);
      for (var _ref11 of Object.entries(t.propTypes)) {
        var _ref12 = (0, _slicedToArray2.default)(_ref11, 2);
        var a = _ref12[0];
        var o = _ref12[1];
        w(e, (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").Z)(o)), Z(e, o, r[a]);
      }
      w(e, n);
    },
    array: function array(e, t, r) {
      if (t.elementCount === 0) throw new Error("Cannot write using a runtime-sized schema.");
      var n = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").Z)(t);
      w(e, n);
      var a = e.currentByteOffset;
      for (var o = 0; o < Math.min(t.elementCount, r.length); o++) w(e, n), Z(e, t.elementType, r[o]);
      e.seekTo(a + (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(t));
    },
    ptr: function ptr() {
      throw new Error("Pointers are not host-shareable");
    },
    atomic: function atomic(e, t, r) {
      var _ve$t$inner$type;
      (_ve$t$inner$type = ve[t.inner.type]) == null ? void 0 : _ve$t$inner$type.call(ve, e, t, r);
    },
    decorated: function decorated(e, t, r) {
      var _ve$t$inner$type2, _t$inner;
      var n = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js")._)(t);
      w(e, n);
      var a = e.currentByteOffset;
      (_ve$t$inner$type2 = ve[(_t$inner = t.inner) == null ? void 0 : _t$inner.type]) != null && _ve$t$inner$type2.call(ve, e, t.inner, r), e.seekTo(a + (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(t));
    },
    uint8: function uint8(e, t, r) {
      e.writeUint8(r);
    },
    uint8x2: function uint8x2(e, t, r) {
      e.writeUint8(r.x), e.writeUint8(r.y);
    },
    uint8x4: function uint8x4(e, t, r) {
      e.writeUint8(r.x), e.writeUint8(r.y), e.writeUint8(r.z), e.writeUint8(r.w);
    },
    sint8: function sint8(e, t, r) {
      e.writeInt8(r);
    },
    sint8x2: function sint8x2(e, t, r) {
      e.writeInt8(r.x), e.writeInt8(r.y);
    },
    sint8x4: function sint8x4(e, t, r) {
      e.writeInt8(r.x), e.writeInt8(r.y), e.writeInt8(r.z), e.writeInt8(r.w);
    },
    unorm8: function unorm8(e, t, r) {
      e.writeUint8(r * 255);
    },
    unorm8x2: function unorm8x2(e, t, r) {
      e.writeUint8(r.x * 255), e.writeUint8(r.y * 255);
    },
    unorm8x4: function unorm8x4(e, t, r) {
      e.writeUint8(r.x * 255), e.writeUint8(r.y * 255), e.writeUint8(r.z * 255), e.writeUint8(r.w * 255);
    },
    snorm8: function snorm8(e, t, r) {
      e.writeUint8(r * 127 + 128);
    },
    snorm8x2: function snorm8x2(e, t, r) {
      e.writeUint8(r.x * 127 + 128), e.writeUint8(r.y * 127 + 128);
    },
    snorm8x4: function snorm8x4(e, t, r) {
      e.writeUint8(r.x * 127 + 128), e.writeUint8(r.y * 127 + 128), e.writeUint8(r.z * 127 + 128), e.writeUint8(r.w * 127 + 128);
    },
    uint16: function uint16(e, t, r) {
      e.writeUint16(r);
    },
    uint16x2: function uint16x2(e, t, r) {
      e.writeUint16(r.x), e.writeUint16(r.y);
    },
    uint16x4: function uint16x4(e, t, r) {
      e.writeUint16(r.x), e.writeUint16(r.y), e.writeUint16(r.z), e.writeUint16(r.w);
    },
    sint16: function sint16(e, t, r) {
      e.writeInt16(r);
    },
    sint16x2: function sint16x2(e, t, r) {
      e.writeInt16(r.x), e.writeInt16(r.y);
    },
    sint16x4: function sint16x4(e, t, r) {
      e.writeInt16(r.x), e.writeInt16(r.y), e.writeInt16(r.z), e.writeInt16(r.w);
    },
    unorm16: function unorm16(e, t, r) {
      e.writeUint16(r * 65535);
    },
    unorm16x2: function unorm16x2(e, t, r) {
      e.writeUint16(r.x * 65535), e.writeUint16(r.y * 65535);
    },
    unorm16x4: function unorm16x4(e, t, r) {
      e.writeUint16(r.x * 65535), e.writeUint16(r.y * 65535), e.writeUint16(r.z * 65535), e.writeUint16(r.w * 65535);
    },
    snorm16: function snorm16(e, t, r) {
      e.writeUint16(r * 32767 + 32768);
    },
    snorm16x2: function snorm16x2(e, t, r) {
      e.writeUint16(r.x * 32767 + 32768), e.writeUint16(r.y * 32767 + 32768);
    },
    snorm16x4: function snorm16x4(e, t, r) {
      e.writeUint16(r.x * 32767 + 32768), e.writeUint16(r.y * 32767 + 32768), e.writeUint16(r.z * 32767 + 32768), e.writeUint16(r.w * 32767 + 32768);
    },
    float16: function float16(e, t, r) {
      e.writeFloat16(r);
    },
    float16x2: function float16x2(e, t, r) {
      e.writeFloat16(r.x), e.writeFloat16(r.y);
    },
    float16x4: function float16x4(e, t, r) {
      e.writeFloat16(r.x), e.writeFloat16(r.y), e.writeFloat16(r.z), e.writeFloat16(r.w);
    },
    float32: function float32(e, t, r) {
      e.writeFloat32(r);
    },
    float32x2: function float32x2(e, t, r) {
      e.writeFloat32(r.x), e.writeFloat32(r.y);
    },
    float32x3: function float32x3(e, t, r) {
      e.writeFloat32(r.x), e.writeFloat32(r.y), e.writeFloat32(r.z);
    },
    float32x4: function float32x4(e, t, r) {
      e.writeFloat32(r.x), e.writeFloat32(r.y), e.writeFloat32(r.z), e.writeFloat32(r.w);
    },
    uint32: function uint32(e, t, r) {
      e.writeUint32(r);
    },
    uint32x2: function uint32x2(e, t, r) {
      e.writeUint32(r.x), e.writeUint32(r.y);
    },
    uint32x3: function uint32x3(e, t, r) {
      e.writeUint32(r.x), e.writeUint32(r.y), e.writeUint32(r.z);
    },
    uint32x4: function uint32x4(e, t, r) {
      e.writeUint32(r.x), e.writeUint32(r.y), e.writeUint32(r.z), e.writeUint32(r.w);
    },
    sint32: function sint32(e, t, r) {
      e.writeInt32(r);
    },
    sint32x2: function sint32x2(e, t, r) {
      e.writeInt32(r.x), e.writeInt32(r.y);
    },
    sint32x3: function sint32x3(e, t, r) {
      e.writeInt32(r.x), e.writeInt32(r.y), e.writeInt32(r.z);
    },
    sint32x4: function sint32x4(e, t, r) {
      e.writeInt32(r.x), e.writeInt32(r.y), e.writeInt32(r.z), e.writeInt32(r.w);
    },
    "unorm10-10-10-2": function unorm1010102(e, t, r) {
      var n = 0;
      n |= (r.x * 1023 & 1023) << 22, n |= (r.x * 1023 & 1023) << 12, n |= (r.y * 1023 & 1023) << 2, n |= r.z * 3 & 3, e.writeUint32(n);
    },
    "unorm8x4-bgra": function unorm8x4Bgra(e, t, r) {
      e.writeUint8(r.z * 255), e.writeUint8(r.y * 255), e.writeUint8(r.x * 255), e.writeUint8(r.w * 255);
    },
    disarray: function disarray(e, t, r) {
      var n = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").Z)(t);
      w(e, n);
      var a = e.currentByteOffset;
      for (var o = 0; o < Math.min(t.elementCount, r.length); o++) {
        var _ve$t$elementType$typ, _t$elementType;
        w(e, n), (_ve$t$elementType$typ = ve[(_t$elementType = t.elementType) == null ? void 0 : _t$elementType.type]) == null ? void 0 : _ve$t$elementType$typ.call(ve, e, t.elementType, r[o]);
      }
      e.seekTo(a + (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(t));
    },
    unstruct: function unstruct(e, t, r) {
      for (var _ref13 of Object.entries(t.propTypes)) {
        var _ve$a$type;
        var _ref14 = (0, _slicedToArray2.default)(_ref13, 2);
        var n = _ref14[0];
        var a = _ref14[1];
        (_ve$a$type = ve[a.type]) == null ? void 0 : _ve$a$type.call(ve, e, a, r[n]);
      }
    },
    "loose-decorated": function looseDecorated(e, t, r) {
      var _t$inner2;
      var n = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js")._)(t);
      w(e, n);
      var a = e.currentByteOffset,
        o = ve[(_t$inner2 = t.inner) == null ? void 0 : _t$inner2.type];
      return o != null && o(e, t.inner, r), e.seekTo(a + (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(t)), r;
    }
  };
  function Z(e, t, r) {
    var n = ve[t.type];
    if (!n) throw new Error(`Cannot write data of type '${t.type}'.`);
    n(e, t, r);
  }
  var le = {
    bool: function bool() {
      throw new Error("Booleans are not host-shareable");
    },
    f32: function f32(e) {
      return e.readFloat32();
    },
    f16: function f16(e) {
      return e.readFloat16();
    },
    i32: function i32(e) {
      return e.readInt32();
    },
    u32: function u32(e) {
      return e.readUint32();
    },
    vec2f: function vec2f(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").r)(e.readFloat32(), e.readFloat32());
    },
    vec3f: function vec3f(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").w)(e.readFloat32(), e.readFloat32(), e.readFloat32());
    },
    vec4f: function vec4f(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").B)(e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32());
    },
    vec2h: function vec2h(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").s)(e.readFloat16(), e.readFloat16());
    },
    vec3h: function vec3h(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").x)(e.readFloat16(), e.readFloat16(), e.readFloat16());
    },
    vec4h: function vec4h(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").C)(e.readFloat16(), e.readFloat16(), e.readFloat16(), e.readFloat16());
    },
    vec2i: function vec2i(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").t)(e.readInt32(), e.readInt32());
    },
    vec3i: function vec3i(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").y)(e.readInt32(), e.readInt32(), e.readInt32());
    },
    vec4i: function vec4i(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").D)(e.readInt32(), e.readInt32(), e.readInt32(), e.readInt32());
    },
    vec2u: function vec2u(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").u)(e.readUint32(), e.readUint32());
    },
    vec3u: function vec3u(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").z)(e.readUint32(), e.readUint32(), e.readUint32());
    },
    vec4u: function vec4u(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").E)(e.readUint32(), e.readUint32(), e.readUint32(), e.readUint32());
    },
    "vec2<bool>": function vec2Bool() {
      throw new Error("Booleans are not host-shareable");
    },
    "vec3<bool>": function vec3Bool() {
      throw new Error("Booleans are not host-shareable");
    },
    "vec4<bool>": function vec4Bool() {
      throw new Error("Booleans are not host-shareable");
    },
    mat2x2f: function mat2x2f(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").G)(e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32());
    },
    mat3x3f: function mat3x3f(e) {
      var t = function t() {
        var r = e.readFloat32();
        return e.readFloat32(), r;
      };
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").H)(e.readFloat32(), e.readFloat32(), t(), e.readFloat32(), e.readFloat32(), t(), e.readFloat32(), e.readFloat32(), t());
    },
    mat4x4f: function mat4x4f(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").I)(e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32());
    },
    struct: function struct(e, t) {
      var r = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").Z)(t);
      w(e, r);
      var n = {};
      for (var _ref15 of Object.entries(t.propTypes)) {
        var _ref16 = (0, _slicedToArray2.default)(_ref15, 2);
        var a = _ref16[0];
        var o = _ref16[1];
        w(e, (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").Z)(o)), n[a] = O(e, o);
      }
      return w(e, r), n;
    },
    array: function array(e, t) {
      if (t.elementCount === 0) throw new Error("Cannot read using a runtime-sized schema.");
      var r = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").Z)(t),
        n = [];
      for (var a = 0; a < t.elementCount; a++) {
        w(e, r);
        var o = t.elementType,
          s = O(e, o);
        n.push(s);
      }
      return w(e, r), n;
    },
    ptr: function ptr() {
      throw new Error("Pointers are not host-shareable");
    },
    atomic: function atomic(e, t) {
      return O(e, t.inner);
    },
    decorated: function decorated(e, t) {
      var r = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js")._)(t);
      w(e, r);
      var n = e.currentByteOffset,
        a = O(e, t.inner);
      return e.seekTo(n + (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(t)), a;
    },
    uint8: function uint8(e) {
      return e.readUint8();
    },
    uint8x2: function uint8x2(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").u)(e.readUint8(), e.readUint8());
    },
    uint8x4: function uint8x4(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").E)(e.readUint8(), e.readUint8(), e.readUint8(), e.readUint8());
    },
    sint8: function sint8(e) {
      return e.readInt8();
    },
    sint8x2: function sint8x2(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").t)(e.readInt8(), e.readInt8());
    },
    sint8x4: function sint8x4(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").D)(e.readInt8(), e.readInt8(), e.readInt8(), e.readInt8());
    },
    unorm8: function unorm8(e) {
      return e.readUint8() / 255;
    },
    unorm8x2: function unorm8x2(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").r)(e.readUint8() / 255, e.readUint8() / 255);
    },
    unorm8x4: function unorm8x4(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").B)(e.readUint8() / 255, e.readUint8() / 255, e.readUint8() / 255, e.readUint8() / 255);
    },
    snorm8: function snorm8(e) {
      return (e.readUint8() - 128) / 127;
    },
    snorm8x2: function snorm8x2(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").r)((e.readUint8() - 128) / 127, (e.readUint8() - 128) / 127);
    },
    snorm8x4: function snorm8x4(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").B)((e.readUint8() - 128) / 127, (e.readUint8() - 128) / 127, (e.readUint8() - 128) / 127, (e.readUint8() - 128) / 127);
    },
    uint16: function uint16(e) {
      return e.readUint16();
    },
    uint16x2: function uint16x2(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").u)(e.readUint16(), e.readUint16());
    },
    uint16x4: function uint16x4(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").E)(e.readUint16(), e.readUint16(), e.readUint16(), e.readUint16());
    },
    sint16: function sint16(e) {
      return e.readInt16();
    },
    sint16x2: function sint16x2(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").t)(e.readInt16(), e.readInt16());
    },
    sint16x4: function sint16x4(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").D)(e.readInt16(), e.readInt16(), e.readInt16(), e.readInt16());
    },
    unorm16: function unorm16(e) {
      return e.readUint16() / 65535;
    },
    unorm16x2: function unorm16x2(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").r)(e.readUint16() / 65535, e.readUint16() / 65535);
    },
    unorm16x4: function unorm16x4(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").B)(e.readUint16() / 65535, e.readUint16() / 65535, e.readUint16() / 65535, e.readUint16() / 65535);
    },
    snorm16: function snorm16(e) {
      return (e.readUint16() - 32768) / 32767;
    },
    snorm16x2: function snorm16x2(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").r)(le.snorm16(e), le.snorm16(e));
    },
    snorm16x4: function snorm16x4(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").B)(le.snorm16(e), le.snorm16(e), le.snorm16(e), le.snorm16(e));
    },
    float16: function float16(e) {
      return e.readFloat16();
    },
    float16x2: function float16x2(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").r)(e.readFloat16(), e.readFloat16());
    },
    float16x4: function float16x4(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").B)(e.readFloat16(), e.readFloat16(), e.readFloat16(), e.readFloat16());
    },
    float32: function float32(e) {
      return e.readFloat32();
    },
    float32x2: function float32x2(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").r)(e.readFloat32(), e.readFloat32());
    },
    float32x3: function float32x3(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").w)(e.readFloat32(), e.readFloat32(), e.readFloat32());
    },
    float32x4: function float32x4(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").B)(e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32());
    },
    uint32: function uint32(e) {
      return e.readUint32();
    },
    uint32x2: function uint32x2(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").u)(e.readUint32(), e.readUint32());
    },
    uint32x3: function uint32x3(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").z)(e.readUint32(), e.readUint32(), e.readUint32());
    },
    uint32x4: function uint32x4(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").E)(e.readUint32(), e.readUint32(), e.readUint32(), e.readUint32());
    },
    sint32: function sint32(e) {
      return e.readInt32();
    },
    sint32x2: function sint32x2(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").t)(e.readInt32(), e.readInt32());
    },
    sint32x3: function sint32x3(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").y)(e.readInt32(), e.readInt32(), e.readInt32());
    },
    sint32x4: function sint32x4(e) {
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").D)(e.readInt32(), e.readInt32(), e.readInt32(), e.readInt32());
    },
    "unorm10-10-10-2": function unorm1010102(e) {
      var t = e.readUint32(),
        r = (t >> 22) / 1023,
        n = (t >> 12 & 1023) / 1023,
        a = (t >> 2 & 1023) / 1023,
        o = (t & 3) / 3;
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").B)(r, n, a, o);
    },
    "unorm8x4-bgra": function unorm8x4Bgra(e) {
      var t = e.readByte() / 255,
        r = e.readByte() / 255,
        n = e.readByte() / 255,
        a = e.readByte() / 255;
      return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").B)(n, r, t, a);
    },
    unstruct: function unstruct(e, t) {
      var r = {};
      for (var _ref17 of Object.entries(t.propTypes)) {
        var _ref18 = (0, _slicedToArray2.default)(_ref17, 2);
        var n = _ref18[0];
        var a = _ref18[1];
        r[n] = O(e, a);
      }
      return r;
    },
    disarray: function disarray(e, t) {
      var r = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").Z)(t),
        n = [];
      for (var a = 0; a < t.elementCount; a++) w(e, r), n.push(O(e, t.elementType));
      return w(e, r), n;
    },
    "loose-decorated": function looseDecorated(e, t) {
      w(e, (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js")._)(t));
      var r = e.currentByteOffset,
        n = O(e, t.inner);
      return e.seekTo(r + (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(t)), n;
    }
  };
  function O(e, t) {
    var r = le[t.type];
    if (!r) throw new Error(`Cannot read data of type '${t.type}'.`);
    return r(e, t);
  }
  function en(e, t) {
    var r = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(e);
    if (r === 0 || t === void 0 || t === null) return [];
    var n = new ArrayBuffer(r),
      a = new (_$$_REQUIRE(_dependencyMap[15], "typed-binary").BufferWriter)(n),
      o = [];
    function s(u, d, m, T) {
      if (d != null) {
        if ((0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js")._)(u) || (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").e)(u)) {
          var f = tt(u);
          for (var _ref19 of Object.entries(f)) {
            var _F$padding;
            var _ref20 = (0, _slicedToArray2.default)(_ref19, 2);
            var g = _ref20[0];
            var F = _ref20[1];
            var S = u.propTypes[g];
            if (!S) continue;
            var B = d[g];
            B !== void 0 && s(S, B, m + F.offset, (_F$padding = F.padding) != null ? _F$padding : T);
          }
          return;
        }
        if ((0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").Z)(u) || (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").d)(u)) {
          var _f = u,
            _g = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").aa)((0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(_f.elementType), (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").Z)(_f.elementType));
          if (!Array.isArray(d)) throw new Error("Partial value for array must be an array");
          var _F = d;
          _F.sort(function (S, B) {
            return S.idx - B.idx;
          });
          for (var _ref21 of _F) {
            var _S = _ref21.idx;
            var _B = _ref21.value;
            s(_f.elementType, _B, m + _S * _g, _g - (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(_f.elementType));
          }
        } else {
          var _f2 = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(u);
          a.seekTo(m), Z(a, u, d), o.push({
            start: m,
            end: m + _f2,
            padding: T
          });
        }
      }
    }
    if (s(e, t, 0), o.length === 0) return [];
    var i = [],
      p = o[0];
    for (var u = 1; u < o.length; u++) {
      var _p$padding;
      var d = o[u];
      if (!d || !p) throw new Error("Internal error: missing segment");
      d.start === p.end + ((_p$padding = p.padding) != null ? _p$padding : 0) ? (p.end = d.end, p.padding = d.padding) : (i.push({
        data: new Uint8Array(n, p.start, p.end - p.start)
      }), p = d);
    }
    if (!p) throw new Error("Internal error: missing segment");
    return i.push({
      data: new Uint8Array(n, p.start, p.end - p.start)
    }), i;
  }
  function de(e) {
    return !!(e != null && e.usableAsStorage);
  }
  var Oe = /*#__PURE__*/function (_Error) {
    function e(t) {
      var _t$label;
      var _this2;
      (0, _classCallCheck2.default)(this, e);
      _this2 = _callSuper(this, e, [`Resource '${(_t$label = t.label) != null ? _t$label : "<unnamed>"}' cannot be bound as 'storage'. Use .$usage('storage') to allow it.`]), Object.setPrototypeOf((0, _assertThisInitialized2.default)(_this2), e.prototype);
      return _this2;
    }
    (0, _inherits2.default)(e, _Error);
    return (0, _createClass2.default)(e);
  }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
  function ot(e) {
    return !!e.usableAsUniform;
  }
  var an = {
      uniform: "uniform",
      mutable: "storage, read_write",
      readonly: "storage, read"
    },
    Ge = /*#__PURE__*/function () {
      function Ge(t, r) {
        (0, _classCallCheck2.default)(this, Ge);
        this.resourceType = "buffer-usage";
        this.usage = t;
        this.buffer = r;
        this[_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").n] = {
          dataType: r.dataType
        };
      }
      return (0, _createClass2.default)(Ge, [{
        key: "label",
        get: function get() {
          return this.buffer.label;
        }
      }, {
        key: "$name",
        value: function $name(t) {
          return this.buffer.$name(t), this;
        }
      }, {
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique(this.label),
            _t$allocateFixedEntry = t.allocateFixedEntry(this.usage === "uniform" ? {
              uniform: this.buffer.dataType
            } : {
              storage: this.buffer.dataType,
              access: this.usage
            }, this.buffer),
            n = _t$allocateFixedEntry.group,
            a = _t$allocateFixedEntry.binding,
            o = an[this.usage];
          return t.addDeclaration(`@group(${n}) @binding(${a}) var<${o}> ${r}: ${t.resolve(this.buffer.dataType)};`), r;
        }
      }, {
        key: "write",
        value: function write(t) {
          this.buffer.write(t);
        }
      }, {
        key: "toString",
        value: function toString() {
          var _this$label3;
          return `${this.usage}:${(_this$label3 = this.label) != null ? _this$label3 : "<unnamed>"}`;
        }
      }, {
        key: "value",
        get: function get() {
          var _this3 = this;
          if (!(0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").m)()) throw new Error("Cannot access buffer's value directly in JS.");
          return new Proxy((0, _defineProperty2.default)({
            "~resolve": function resolve(t) {
              return t.resolve(_this3);
            },
            toString: function toString() {
              var _this3$label;
              return `.value:${(_this3$label = _this3.label) != null ? _this3$label : "<unnamed>"}`;
            }
          }, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").n, {
            dataType: this.buffer.dataType
          }), N);
        }
      }]);
    }(),
    We = /*#__PURE__*/function () {
      function We(t, r, n) {
        (0, _classCallCheck2.default)(this, We);
        this.resourceType = "buffer-usage";
        this.usage = t;
        this.dataType = r;
        this._membership = n;
        this[_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").n] = {
          dataType: r
        };
      }
      return (0, _createClass2.default)(We, [{
        key: "label",
        get: function get() {
          return this._membership.key;
        }
      }, {
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique(this.label),
            n = t.allocateLayoutEntry(this._membership.layout),
            a = an[this.usage];
          return t.addDeclaration(`@group(${n}) @binding(${this._membership.idx}) var<${a}> ${r}: ${t.resolve(this.dataType)};`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _this$label4;
          return `${this.usage}:${(_this$label4 = this.label) != null ? _this$label4 : "<unnamed>"}`;
        }
      }, {
        key: "value",
        get: function get() {
          var _this4 = this;
          if (!(0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").m)()) throw new Error("Cannot access buffer's value directly in JS.");
          return new Proxy((0, _defineProperty2.default)({
            "~resolve": function resolve(t) {
              return t.resolve(_this4);
            },
            toString: function toString() {
              var _this4$label;
              return `.value:${(_this4$label = _this4.label) != null ? _this4$label : "<unnamed>"}`;
            }
          }, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").n, {
            dataType: this.dataType
          }), N);
        }
      }]);
    }(),
    tn = new WeakMap();
  function Kt(e) {
    if (!de(e)) throw new Error(`Cannot pass ${e} to asMutable, as it is not allowed to be used as storage. To allow it, call .$usage('storage') when creating the buffer.`);
    var t = tn.get(e);
    return t || (t = new Ge("mutable", e), tn.set(e, t)), t;
  }
  var rn = new WeakMap();
  function qt(e) {
    if (!de(e)) throw new Error(`Cannot pass ${e} to asReadonly, as it is not allowed to be used as storage. To allow it, call .$usage('storage') when creating the buffer.`);
    var t = rn.get(e);
    return t || (t = new Ge("readonly", e), rn.set(e, t)), t;
  }
  var nn = new WeakMap();
  function Ht(e) {
    if (!ot(e)) throw new Error(`Cannot pass ${e} to asUniform, as it is not allowed to be used as a uniform. To allow it, call .$usage('uniform') when creating the buffer.`);
    var t = nn.get(e);
    return t || (t = new Ge("uniform", e), nn.set(e, t)), t;
  }
  var ra = {
    uniform: Ht,
    mutable: Kt,
    readonly: qt
  };
  function sn(e, t, r) {
    return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").Y)(t) ? new st(e, t, r) : new st(e, t, r, ["storage", "uniform"]);
  }
  function ee(e) {
    return e.resourceType === "buffer";
  }
  function na(e) {
    return !!e.usableAsVertex;
  }
  var on = (0, _$$_REQUIRE(_dependencyMap[15], "typed-binary").getSystemEndianness)(),
    st = /*#__PURE__*/function () {
      function st(t, r, n, a) {
        (0, _classCallCheck2.default)(this, st);
        this.resourceType = "buffer";
        this.flags = GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC;
        this._buffer = null;
        this._destroyed = !1;
        this.usableAsUniform = !1;
        this.usableAsStorage = !1;
        this.usableAsVertex = !1;
        this._group = t;
        this.dataType = r;
        this.initialOrBuffer = n;
        this._disallowedUsages = a;
        kr(n) ? (this._ownBuffer = !1, this._buffer = n) : (this._ownBuffer = !0, this.initial = n);
      }
      return (0, _createClass2.default)(st, [{
        key: "label",
        get: function get() {
          return this._label;
        }
      }, {
        key: "buffer",
        get: function get() {
          var _this$label5;
          var t = this._group.device;
          if (this._destroyed) throw new Error("This buffer has been destroyed");
          if (!this._buffer && (this._buffer = t.createBuffer({
            size: (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(this.dataType),
            usage: this.flags,
            mappedAtCreation: !!this.initial,
            label: (_this$label5 = this.label) != null ? _this$label5 : "<unnamed>"
          }), this.initial)) {
            var r = new (_$$_REQUIRE(_dependencyMap[15], "typed-binary").BufferWriter)(this._buffer.getMappedRange());
            Z(r, this.dataType, this.initial), this._buffer.unmap();
          }
          return this._buffer;
        }
      }, {
        key: "destroyed",
        get: function get() {
          return this._destroyed;
        }
      }, {
        key: "$name",
        value: function $name(t) {
          return this._label = t, this._buffer && (this._buffer.label = t), this;
        }
      }, {
        key: "$usage",
        value: function $usage() {
          for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
            t[_key] = arguments[_key];
          }
          for (var r of t) {
            var _this$_disallowedUsag;
            if ((_this$_disallowedUsag = this._disallowedUsages) != null && _this$_disallowedUsag.includes(r)) throw new Error(`Buffer of type ${this.dataType.type} cannot be used as ${r}`);
            this.flags |= r === "uniform" ? GPUBufferUsage.UNIFORM : 0, this.flags |= r === "storage" ? GPUBufferUsage.STORAGE : 0, this.flags |= r === "vertex" ? GPUBufferUsage.VERTEX : 0, this.usableAsUniform = this.usableAsUniform || r === "uniform", this.usableAsStorage = this.usableAsStorage || r === "storage", this.usableAsVertex = this.usableAsVertex || r === "vertex";
          }
          return this;
        }
      }, {
        key: "$addFlags",
        value: function $addFlags(t) {
          if (!this._ownBuffer) throw new Error("Cannot add flags to a buffer that is not managed by TypeGPU.");
          return t & GPUBufferUsage.MAP_READ ? (this.flags = GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ, this) : t & GPUBufferUsage.MAP_WRITE ? (this.flags = GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE, this) : (this.flags |= t, this);
        }
      }, {
        key: "compileWriter",
        value: function compileWriter() {
          if (nt) at(this.dataType);else throw new Error("This environment does not allow eval");
        }
      }, {
        key: "write",
        value: function write(t) {
          var r = this.buffer,
            n = this._group.device;
          if (r.mapState === "mapped") {
            var o = r.getMappedRange();
            if (nt) {
              at(this.dataType)(new DataView(o), 0, t, on === "little");
              return;
            }
            Z(new (_$$_REQUIRE(_dependencyMap[15], "typed-binary").BufferWriter)(o), this.dataType, t);
            return;
          }
          var a = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(this.dataType);
          this._hostBuffer || (this._hostBuffer = new ArrayBuffer(a)), this._group.flush(), nt ? at(this.dataType)(new DataView(this._hostBuffer), 0, t, on === "little") : Z(new (_$$_REQUIRE(_dependencyMap[15], "typed-binary").BufferWriter)(this._hostBuffer), this.dataType, t), n.queue.writeBuffer(r, 0, this._hostBuffer, 0, a);
        }
      }, {
        key: "writePartial",
        value: function writePartial(t) {
          var r = this.buffer,
            n = this._group.device,
            a = en(this.dataType, t);
          if (r.mapState === "mapped") {
            var o = r.getMappedRange(),
              s = new Uint8Array(o);
            for (var i of a) s.set(i.data, i.data.byteOffset);
          } else for (var _o5 of a) n.queue.writeBuffer(r, _o5.data.byteOffset, _o5.data, 0, _o5.data.byteLength);
        }
      }, {
        key: "copyFrom",
        value: function copyFrom(t) {
          if (this.buffer.mapState === "mapped") throw new Error("Cannot copy to a mapped buffer.");
          var r = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(this.dataType);
          this._group.commandEncoder.copyBufferToBuffer(t.buffer, 0, this.buffer, 0, r);
        }
      }, {
        key: "read",
        value: function () {
          var _read = (0, _asyncToGenerator2.default)(function* () {
            this._group.flush();
            var t = this.buffer,
              r = this._group.device;
            if (t.mapState === "mapped") {
              var s = t.getMappedRange();
              return O(new (_$$_REQUIRE(_dependencyMap[15], "typed-binary").BufferReader)(s), this.dataType);
            }
            if (t.usage & GPUBufferUsage.MAP_READ) {
              yield t.mapAsync(GPUMapMode.READ);
              var _s5 = t.getMappedRange(),
                i = O(new (_$$_REQUIRE(_dependencyMap[15], "typed-binary").BufferReader)(_s5), this.dataType);
              return t.unmap(), i;
            }
            var n = r.createBuffer({
                size: (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(this.dataType),
                usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
              }),
              a = r.createCommandEncoder();
            a.copyBufferToBuffer(t, 0, n, 0, (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(this.dataType)), r.queue.submit([a.finish()]), yield r.queue.onSubmittedWorkDone(), yield n.mapAsync(GPUMapMode.READ, 0, (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(this.dataType));
            var o = O(new (_$$_REQUIRE(_dependencyMap[15], "typed-binary").BufferReader)(n.getMappedRange()), this.dataType);
            return n.unmap(), n.destroy(), o;
          });
          function read() {
            return _read.apply(this, arguments);
          }
          return read;
        }()
      }, {
        key: "as",
        value: function as(t) {
          var _ra$t;
          return (_ra$t = ra[t]) == null ? void 0 : _ra$t.call(ra, this);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          var _this$_buffer;
          this._destroyed || (this._destroyed = !0, this._ownBuffer && ((_this$_buffer = this._buffer) == null ? void 0 : _this$_buffer.destroy()));
        }
      }, {
        key: "toString",
        value: function toString() {
          var _this$_label;
          return `buffer:${(_this$_label = this._label) != null ? _this$_label : "<unnamed>"}`;
        }
      }]);
    }();
  function un(e) {
    return new Qt(e);
  }
  function pn(e) {
    return new Xt(e);
  }
  function Me(e) {
    return (e == null ? void 0 : e.resourceType) === "sampler";
  }
  function Ne(e) {
    return (e == null ? void 0 : e.resourceType) === "sampler-comparison";
  }
  var it = /*#__PURE__*/function () {
      function it(t) {
        (0, _classCallCheck2.default)(this, it);
        this.resourceType = "sampler";
        this._membership = t;
      }
      return (0, _createClass2.default)(it, [{
        key: "label",
        get: function get() {
          return this._membership.key;
        }
      }, {
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique(this.label),
            n = t.allocateLayoutEntry(this._membership.layout);
          return t.addDeclaration(`@group(${n}) @binding(${this._membership.idx}) var ${r}: sampler;`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _this$label6;
          return `${this.resourceType}:${(_this$label6 = this.label) != null ? _this$label6 : "<unnamed>"}`;
        }
      }]);
    }(),
    ut = /*#__PURE__*/function () {
      function ut(t) {
        (0, _classCallCheck2.default)(this, ut);
        this.resourceType = "sampler-comparison";
        this._membership = t;
      }
      return (0, _createClass2.default)(ut, [{
        key: "label",
        get: function get() {
          return this._membership.key;
        }
      }, {
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique(this.label),
            n = t.allocateLayoutEntry(this._membership.layout);
          return t.addDeclaration(`@group(${n}) @binding(${this._membership.idx}) var ${r}: sampler_comparison;`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _this$label7;
          return `${this.resourceType}:${(_this$label7 = this.label) != null ? _this$label7 : "<unnamed>"}`;
        }
      }]);
    }(),
    Qt = /*#__PURE__*/function () {
      function Qt(t) {
        (0, _classCallCheck2.default)(this, Qt);
        this.resourceType = "sampler";
        this._sampler = null;
        this._props = t;
        this._filtering = t.minFilter === "linear" || t.magFilter === "linear" || t.mipmapFilter === "linear";
      }
      return (0, _createClass2.default)(Qt, [{
        key: "unwrap",
        value: function unwrap(t) {
          var _this$_label2;
          return this._sampler || (this._sampler = t.device.createSampler(Object.assign({}, this._props, {
            label: (_this$_label2 = this._label) != null ? _this$_label2 : "<unnamed>"
          }))), this._sampler;
        }
      }, {
        key: "label",
        get: function get() {
          return this._label;
        }
      }, {
        key: "$name",
        value: function $name(t) {
          return this._label = t, this;
        }
      }, {
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique(this._label),
            _t$allocateFixedEntry2 = t.allocateFixedEntry({
              sampler: this._filtering ? "filtering" : "non-filtering"
            }, this),
            n = _t$allocateFixedEntry2.group,
            a = _t$allocateFixedEntry2.binding;
          return t.addDeclaration(`@group(${n}) @binding(${a}) var ${r}: sampler;`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _this$label8;
          return `${this.resourceType}:${(_this$label8 = this.label) != null ? _this$label8 : "<unnamed>"}`;
        }
      }]);
    }(),
    Xt = /*#__PURE__*/function () {
      function Xt(t) {
        (0, _classCallCheck2.default)(this, Xt);
        this.resourceType = "sampler-comparison";
        this._sampler = null;
        this._props = t;
      }
      return (0, _createClass2.default)(Xt, [{
        key: "unwrap",
        value: function unwrap(t) {
          var _this$_label3;
          return this._sampler || (this._sampler = t.device.createSampler(Object.assign({}, this._props, {
            label: (_this$_label3 = this._label) != null ? _this$_label3 : "<unnamed>"
          }))), this._sampler;
        }
      }, {
        key: "label",
        get: function get() {
          return this._label;
        }
      }, {
        key: "$name",
        value: function $name(t) {
          return this._label = t, this;
        }
      }, {
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique(this.label),
            _t$allocateFixedEntry3 = t.allocateFixedEntry({
              sampler: "comparison"
            }, this),
            n = _t$allocateFixedEntry3.group,
            a = _t$allocateFixedEntry3.binding;
          return t.addDeclaration(`@group(${n}) @binding(${a}) var ${r}: sampler_comparison;`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _this$label9;
          return `${this.resourceType}:${(_this$label9 = this.label) != null ? _this$label9 : "<unnamed>"}`;
        }
      }]);
    }();
  var pt = /*#__PURE__*/function () {
    function pt(t) {
      (0, _classCallCheck2.default)(this, pt);
      this.resourceType = "external-texture";
      this._membership = t;
    }
    return (0, _createClass2.default)(pt, [{
      key: "label",
      get: function get() {
        return this._membership.key;
      }
    }, {
      key: "~resolve",
      value: function resolve(t) {
        var r = t.names.makeUnique(this.label),
          n = t.allocateLayoutEntry(this._membership.layout);
        return t.addDeclaration(`@group(${n}) @binding(${this._membership.idx}) var ${r}: texture_external;`), r;
      }
    }, {
      key: "toString",
      value: function toString() {
        var _this$label10;
        return `${this.resourceType}:${(_this$label10 = this.label) != null ? _this$label10 : "<unnamed>"}`;
      }
    }]);
  }();
  var ln = {
      r8unorm: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      r8snorm: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      r8uint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").N,
      r8sint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").O,
      r16uint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").N,
      r16sint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").O,
      r16float: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      rg8unorm: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      rg8snorm: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      rg8uint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").N,
      rg8sint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").O,
      r32uint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").N,
      r32sint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").O,
      r32float: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      rg16uint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").N,
      rg16sint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").O,
      rg16float: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      rgba8unorm: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "rgba8unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      rgba8snorm: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      rgba8uint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").N,
      rgba8sint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").O,
      bgra8unorm: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "bgra8unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      rgb9e5ufloat: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      rgb10a2uint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").N,
      rgb10a2unorm: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      rg11b10ufloat: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      rg32uint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").N,
      rg32sint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").O,
      rg32float: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      rgba16uint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").N,
      rgba16sint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").O,
      rgba16float: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      rgba32uint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").N,
      rgba32sint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").O,
      rgba32float: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      stencil8: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      depth16unorm: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      depth24plus: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "depth24plus-stencil8": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      depth32float: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "depth32float-stencil8": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "bc1-rgba-unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "bc1-rgba-unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "bc2-rgba-unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "bc2-rgba-unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "bc3-rgba-unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "bc3-rgba-unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "bc4-r-unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "bc4-r-snorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "bc5-rg-unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "bc5-rg-snorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "bc6h-rgb-ufloat": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "bc6h-rgb-float": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "bc7-rgba-unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "bc7-rgba-unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "etc2-rgb8unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "etc2-rgb8unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "etc2-rgb8a1unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "etc2-rgb8a1unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "etc2-rgba8unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "etc2-rgba8unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "eac-r11unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "eac-r11snorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "eac-rg11unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "eac-rg11snorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-4x4-unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-4x4-unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-5x4-unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-5x4-unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-5x5-unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-5x5-unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-6x5-unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-6x5-unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-6x6-unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-6x6-unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-8x5-unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-8x5-unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-8x6-unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-8x6-unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-8x8-unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-8x8-unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-10x5-unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-10x5-unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-10x6-unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-10x6-unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-10x8-unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-10x8-unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-10x10-unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-10x10-unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-12x10-unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-12x10-unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-12x12-unorm": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "astc-12x12-unorm-srgb": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P
    },
    je = {
      rgba8unorm: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").B,
      rgba8snorm: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").B,
      rgba8uint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").E,
      rgba8sint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").D,
      rgba16uint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").E,
      rgba16sint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").D,
      rgba16float: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").B,
      r32uint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").E,
      r32sint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").D,
      r32float: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").B,
      rg32uint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").E,
      rg32sint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").D,
      rg32float: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").B,
      rgba32uint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").E,
      rgba32sint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").D,
      rgba32float: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").B,
      bgra8unorm: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").B
    },
    dn = {
      f32: "float",
      u32: "uint",
      i32: "sint"
    },
    mn = {
      float: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      "unfilterable-float": _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P,
      uint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").N,
      sint: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").O,
      depth: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P
    };
  function gn(e, t) {
    return new Zt(e, t);
  }
  function H(e) {
    return (e == null ? void 0 : e.resourceType) === "texture";
  }
  function ze(e) {
    return (e == null ? void 0 : e.resourceType) === "texture-storage-view";
  }
  function Ke(e) {
    return (e == null ? void 0 : e.resourceType) === "texture-sampled-view";
  }
  var fn = {
      mutable: "read_write",
      readonly: "read",
      writeonly: "write"
    },
    Zt = /*#__PURE__*/function () {
      function Zt(t, r) {
        (0, _classCallCheck2.default)(this, Zt);
        this.resourceType = "texture";
        this.usableAsSampled = !1;
        this.usableAsStorage = !1;
        this.usableAsRender = !1;
        this._destroyed = !1;
        this._flags = GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC;
        this._texture = null;
        this.props = t;
        this._branch = r;
      }
      return (0, _createClass2.default)(Zt, [{
        key: "label",
        get: function get() {
          return this._label;
        }
      }, {
        key: "$name",
        value: function $name(t) {
          return this._label = t, this;
        }
      }, {
        key: "unwrap",
        value: function unwrap() {
          var _this$_label4, _this$props$dimension, _this$props$viewForma, _this$props$mipLevelC, _this$props$sampleCou;
          if (this._destroyed) throw new Error("This texture has been destroyed");
          return this._texture || (this._texture = this._branch.device.createTexture({
            label: (_this$_label4 = this._label) != null ? _this$_label4 : "<unnamed>",
            format: this.props.format,
            size: this.props.size,
            usage: this._flags,
            dimension: (_this$props$dimension = this.props.dimension) != null ? _this$props$dimension : "2d",
            viewFormats: (_this$props$viewForma = this.props.viewFormats) != null ? _this$props$viewForma : [],
            mipLevelCount: (_this$props$mipLevelC = this.props.mipLevelCount) != null ? _this$props$mipLevelC : 1,
            sampleCount: (_this$props$sampleCou = this.props.sampleCount) != null ? _this$props$sampleCou : 1
          })), this._texture;
        }
      }, {
        key: "$usage",
        value: function $usage() {
          for (var _len2 = arguments.length, t = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            t[_key2] = arguments[_key2];
          }
          var r = t.includes("storage"),
            n = t.includes("sampled"),
            a = t.includes("render");
          return this._flags |= n ? GPUTextureUsage.TEXTURE_BINDING : 0, this._flags |= r ? GPUTextureUsage.STORAGE_BINDING : 0, this._flags |= a ? GPUTextureUsage.RENDER_ATTACHMENT : 0, this.usableAsStorage || (this.usableAsStorage = r), this.usableAsSampled || (this.usableAsSampled = n), this.usableAsRender || (this.usableAsRender = a), this;
        }
      }, {
        key: "createView",
        value: function createView(t, r) {
          if (t === "sampled") return this._asSampled(r);
          var n = r;
          switch (t) {
            case "mutable":
              return this._asMutable(n);
            case "readonly":
              return this._asReadonly(n);
            case "writeonly":
              return this._asWriteonly(n);
          }
        }
      }, {
        key: "_asStorage",
        value: function _asStorage(t, r) {
          var _t$format;
          if (!this.usableAsStorage) throw new Error("Unusable as storage");
          var n = (_t$format = t == null ? void 0 : t.format) != null ? _t$format : this.props.format,
            a = je[n];
          return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").a)(!!a, `Unsupported storage texture format: ${n}`), new er(t != null ? t : {}, r, this);
        }
      }, {
        key: "_asReadonly",
        value: function _asReadonly(t) {
          return this._asStorage(t, "readonly");
        }
      }, {
        key: "_asWriteonly",
        value: function _asWriteonly(t) {
          return this._asStorage(t, "writeonly");
        }
      }, {
        key: "_asMutable",
        value: function _asMutable(t) {
          return this._asStorage(t, "mutable");
        }
      }, {
        key: "_asSampled",
        value: function _asSampled(t) {
          var _t$format2;
          if (!this.usableAsSampled) throw new Error("Unusable as sampled");
          var r = (_t$format2 = t == null ? void 0 : t.format) != null ? _t$format2 : this.props.format;
          if (!je[r]) throw new Error(`Unsupported storage texture format: ${r}`);
          return new tr(t, this);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          var _this$_texture;
          this._destroyed || (this._destroyed = !0, (_this$_texture = this._texture) == null ? void 0 : _this$_texture.destroy());
        }
      }]);
    }(),
    mt = {
      "1d": "1d",
      "2d": "2d",
      "2d-array": "2d_array",
      cube: "cube",
      "cube-array": "cube_array",
      "3d": "3d"
    },
    er = /*#__PURE__*/function () {
      function er(t, r, n) {
        var _ref22, _t$dimension, _t$format3;
        (0, _classCallCheck2.default)(this, er);
        this.resourceType = "texture-storage-view";
        this.access = r;
        this._texture = n;
        this.dimension = (_ref22 = (_t$dimension = t == null ? void 0 : t.dimension) != null ? _t$dimension : n.props.dimension) != null ? _ref22 : "2d", this._format = (_t$format3 = t == null ? void 0 : t.format) != null ? _t$format3 : n.props.format, this.texelDataType = je[this._format];
      }
      return (0, _createClass2.default)(er, [{
        key: "label",
        get: function get() {
          return this._texture.label;
        }
      }, {
        key: "$name",
        value: function $name(t) {
          return this._texture.$name(t), this;
        }
      }, {
        key: "unwrap",
        value: function unwrap() {
          var _this$label11;
          return this._view || (this._view = this._texture.unwrap().createView({
            label: `${(_this$label11 = this.label) != null ? _this$label11 : "<unnamed>"} - View`,
            format: this._format,
            dimension: this.dimension
          })), this._view;
        }
      }, {
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique(this.label),
            _t$allocateFixedEntry4 = t.allocateFixedEntry({
              storageTexture: this._format,
              access: this.access,
              viewDimension: this.dimension
            }, this),
            n = _t$allocateFixedEntry4.group,
            a = _t$allocateFixedEntry4.binding,
            o = `texture_storage_${mt[this.dimension]}`;
          return t.addDeclaration(`@group(${n}) @binding(${a}) var ${r}: ${o}<${this._format}, ${fn[this.access]}>;`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _this$label12;
          return `${this.resourceType}:${(_this$label12 = this.label) != null ? _this$label12 : "<unnamed>"}`;
        }
      }]);
    }(),
    lt = /*#__PURE__*/function () {
      function lt(t, r, n, a) {
        (0, _classCallCheck2.default)(this, lt);
        this.resourceType = "texture-storage-view";
        this._format = t;
        this.dimension = r;
        this.access = n;
        this._membership = a;
        this.texelDataType = je[this._format];
      }
      return (0, _createClass2.default)(lt, [{
        key: "label",
        get: function get() {
          return this._membership.key;
        }
      }, {
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique(this.label),
            n = t.allocateLayoutEntry(this._membership.layout),
            a = `texture_storage_${mt[this.dimension]}`;
          return t.addDeclaration(`@group(${n}) @binding(${this._membership.idx}) var ${r}: ${a}<${this._format}, ${fn[this.access]}>;`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _this$label13;
          return `${this.resourceType}:${(_this$label13 = this.label) != null ? _this$label13 : "<unnamed>"}`;
        }
      }]);
    }(),
    tr = /*#__PURE__*/function () {
      function tr(t, r) {
        var _ref23, _t$dimension2, _t$format4;
        (0, _classCallCheck2.default)(this, tr);
        this.resourceType = "texture-sampled-view";
        this._props = t;
        this._texture = r;
        this.dimension = (_ref23 = (_t$dimension2 = t == null ? void 0 : t.dimension) != null ? _t$dimension2 : r.props.dimension) != null ? _ref23 : "2d", this._format = (_t$format4 = t == null ? void 0 : t.format) != null ? _t$format4 : r.props.format, this.channelDataType = ln[this._format];
      }
      return (0, _createClass2.default)(tr, [{
        key: "label",
        get: function get() {
          return this._texture.label;
        }
      }, {
        key: "$name",
        value: function $name(t) {
          return this._texture.$name(t), this;
        }
      }, {
        key: "unwrap",
        value: function unwrap() {
          var _this$label14;
          return this._view || (this._view = this._texture.unwrap().createView(Object.assign({
            label: `${(_this$label14 = this.label) != null ? _this$label14 : "<unnamed>"} - View`
          }, this._props))), this._view;
        }
      }, {
        key: "~resolve",
        value: function resolve(t) {
          var _this$_texture$props$;
          var r = t.names.makeUnique(this.label),
            n = ((_this$_texture$props$ = this._texture.props.sampleCount) != null ? _this$_texture$props$ : 1) > 1,
            _t$allocateFixedEntry5 = t.allocateFixedEntry({
              texture: dn[this.channelDataType.type],
              viewDimension: this.dimension,
              multisampled: n
            }, this),
            a = _t$allocateFixedEntry5.group,
            o = _t$allocateFixedEntry5.binding,
            s = n ? "texture_multisampled_2d" : `texture_${mt[this.dimension]}`;
          return t.addDeclaration(`@group(${a}) @binding(${o}) var ${r}: ${s}<${t.resolve(this.channelDataType)}>;`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _this$label15;
          return `${this.resourceType}:${(_this$label15 = this.label) != null ? _this$label15 : "<unnamed>"}`;
        }
      }]);
    }(),
    dt = /*#__PURE__*/function () {
      function dt(t, r, n, a) {
        (0, _classCallCheck2.default)(this, dt);
        this.resourceType = "texture-sampled-view";
        this.dimension = r;
        this._multisampled = n;
        this._membership = a;
        this.channelDataType = mn[t];
      }
      return (0, _createClass2.default)(dt, [{
        key: "label",
        get: function get() {
          return this._membership.key;
        }
      }, {
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique(this.label),
            n = t.allocateLayoutEntry(this._membership.layout),
            a = this._multisampled ? "texture_multisampled_2d" : `texture_${mt[this.dimension]}`;
          return t.addDeclaration(`@group(${n}) @binding(${this._membership.idx}) var ${r}: ${a}<${t.resolve(this.channelDataType)}>;`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _this$label16;
          return `${this.resourceType}:${(_this$label16 = this.label) != null ? _this$label16 : "<unnamed>"}`;
        }
      }]);
    }();
  function rr(e) {
    return !!(e != null && e.usableAsSampled);
  }
  function aa(e) {
    return !!(e != null && e.usableAsRender);
  }
  var gt = /*#__PURE__*/function (_Error2) {
    function e(t) {
      var _t$label2;
      var _this5;
      (0, _classCallCheck2.default)(this, e);
      _this5 = _callSuper(this, e, [`Resource '${(_t$label2 = t.label) != null ? _t$label2 : "<unnamed>"}' cannot be bound as 'sampled'. Use .$usage('sampled') to allow it.`]), Object.setPrototypeOf((0, _assertThisInitialized2.default)(_this5), e.prototype);
      return _this5;
    }
    (0, _inherits2.default)(e, _Error2);
    return (0, _createClass2.default)(e);
  }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
  function ft(e) {
    return new ar(e);
  }
  function Tt(e) {
    return !!e && e.resourceType === "bind-group-layout";
  }
  function or(e) {
    return !!e && e.resourceType === "bind-group";
  }
  var nr = /*#__PURE__*/function (_Error3) {
      function e(t, r) {
        var _this6;
        (0, _classCallCheck2.default)(this, e);
        _this6 = _callSuper(this, e, [`Bind group '${t != null ? t : "<unnamed>"}' is missing a required binding '${r}'`]), Object.setPrototypeOf((0, _assertThisInitialized2.default)(_this6), e.prototype);
        return _this6;
      }
      (0, _inherits2.default)(e, _Error3);
      return (0, _createClass2.default)(e);
    }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error)),
    Tn = ["compute"],
    De = ["compute", "vertex", "fragment"],
    ar = /*#__PURE__*/function () {
      function ar(t) {
        var _this7 = this;
        (0, _classCallCheck2.default)(this, ar);
        this.resourceType = "bind-group-layout";
        this.bound = {};
        this.value = {};
        this.$ = this.value;
        this.entries = t;
        var r = 0;
        var _loop = function _loop(n) {
          var _a$viewDimension, _a$multisampled, _a$viewDimension2, _a$access2;
          if (a === null) {
            r++;
            return 1; // continue
          }
          var o = {
            idx: r,
            key: n,
            layout: _this7
          };
          if ("uniform" in a && (_this7.bound[n] = new We("uniform", a.uniform, o)), "storage" in a) {
            var _a$access;
            var s = "type" in a.storage ? a.storage : a.storage(0);
            _this7.bound[n] = new We((_a$access = a.access) != null ? _a$access : "readonly", s, o);
          }
          "texture" in a && (_this7.bound[n] = new dt(a.texture, (_a$viewDimension = a.viewDimension) != null ? _a$viewDimension : "2d", (_a$multisampled = a.multisampled) != null ? _a$multisampled : !1, o)), "storageTexture" in a && (_this7.bound[n] = new lt(a.storageTexture, (_a$viewDimension2 = a.viewDimension) != null ? _a$viewDimension2 : "2d", (_a$access2 = a.access) != null ? _a$access2 : "writeonly", o)), "externalTexture" in a && (_this7.bound[n] = new pt(o)), "sampler" in a && (a.sampler === "comparison" ? _this7.bound[n] = new ut(o) : _this7.bound[n] = new it(o)), "texture" in a || "storageTexture" in a || "externalTexture" in a || "sampler" in a ? _this7.value[n] = _this7.bound[n] : Object.defineProperty(_this7.value, n, {
            get: function get() {
              return _this7.bound[n].value;
            }
          }), r++;
        };
        for (var _ref24 of Object.entries(t)) {
          var _ref25 = (0, _slicedToArray2.default)(_ref24, 2);
          var n = _ref25[0];
          var a = _ref25[1];
          if (_loop(n)) continue;
        }
      }
      return (0, _createClass2.default)(ar, [{
        key: "toString",
        value: function toString() {
          var _this$_label5;
          return `bindGroupLayout:${(_this$_label5 = this._label) != null ? _this$_label5 : "<unnamed>"}`;
        }
      }, {
        key: "label",
        get: function get() {
          return this._label;
        }
      }, {
        key: "index",
        get: function get() {
          return this._index;
        }
      }, {
        key: "$name",
        value: function $name(t) {
          return this._label = t, this;
        }
      }, {
        key: "$idx",
        value: function $idx(t) {
          return this._index = t, this;
        }
      }, {
        key: "unwrap",
        value: function unwrap(t) {
          var _this$label17;
          return t.device.createBindGroupLayout({
            label: (_this$label17 = this.label) != null ? _this$label17 : "<unnamed>",
            entries: Object.values(this.entries).map(function (n, a) {
              var _o6, _o7, _o8, _o9, _n$viewDimension, _n$multisampled, _o11, _o12, _o13, _o14;
              if (n === null) return null;
              var o = n.visibility,
                s = {
                  binding: a,
                  visibility: 0
                };
              if ("uniform" in n) o = (_o6 = o) != null ? _o6 : De, s.buffer = {
                type: "uniform"
              };else if ("storage" in n) o = (_o7 = o) != null ? _o7 : n.access === "mutable" ? Tn : De, s.buffer = {
                type: n.access === "mutable" ? "storage" : "read-only-storage"
              };else if ("sampler" in n) o = (_o8 = o) != null ? _o8 : De, s.sampler = {
                type: n.sampler
              };else if ("texture" in n) o = (_o9 = o) != null ? _o9 : De, s.texture = {
                sampleType: n.texture,
                viewDimension: (_n$viewDimension = n.viewDimension) != null ? _n$viewDimension : "2d",
                multisampled: (_n$multisampled = n.multisampled) != null ? _n$multisampled : !1
              };else if ("storageTexture" in n) {
                var _n$access, _o10, _n$viewDimension2;
                var i = (_n$access = n.access) != null ? _n$access : "writeonly";
                o = (_o10 = o) != null ? _o10 : i === "readonly" ? De : Tn, s.storageTexture = {
                  format: n.storageTexture,
                  access: {
                    mutable: "read-write",
                    readonly: "read-only",
                    writeonly: "write-only"
                  }[i],
                  viewDimension: (_n$viewDimension2 = n.viewDimension) != null ? _n$viewDimension2 : "2d"
                };
              } else "externalTexture" in n && (o = (_o11 = o) != null ? _o11 : De, s.externalTexture = {});
              return (_o12 = o) != null && _o12.includes("compute") && (s.visibility |= GPUShaderStage.COMPUTE), (_o13 = o) != null && _o13.includes("vertex") && (s.visibility |= GPUShaderStage.VERTEX), (_o14 = o) != null && _o14.includes("fragment") && (s.visibility |= GPUShaderStage.FRAGMENT), s;
            }).filter(function (n) {
              return n !== null;
            })
          });
        }
      }]);
    }(),
    Fe = /*#__PURE__*/function () {
      function Fe(t, r) {
        (0, _classCallCheck2.default)(this, Fe);
        this.resourceType = "bind-group";
        this.layout = t;
        this.entries = r;
        for (var n of Object.keys(t.entries)) if (t.entries[n] !== null && !(n in r)) throw new nr(t.label, n);
      }
      return (0, _createClass2.default)(Fe, [{
        key: "unwrap",
        value: function unwrap(t) {
          var _this$layout$label,
            _this8 = this;
          return t.device.createBindGroup({
            label: (_this$layout$label = this.layout.label) != null ? _this$layout$label : "<unnamed>",
            layout: t.unwrap(this.layout),
            entries: Object.entries(this.layout.entries).map(function (_ref26, o) {
              var _this8$layout$label;
              var _ref27 = (0, _slicedToArray2.default)(_ref26, 2),
                n = _ref27[0],
                a = _ref27[1];
              if (a === null) return null;
              var s = _this8.entries[n];
              if (s === void 0) throw new Error(`'${n}' is a resource required to populate bind group layout '${(_this8$layout$label = _this8.layout.label) != null ? _this8$layout$label : "<unnamed>"}'.`);
              if ("uniform" in a) {
                var i;
                if (ee(s)) {
                  if (!ot(s)) throw new (_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").d)(s);
                  i = {
                    buffer: t.unwrap(s)
                  };
                } else i = {
                  buffer: s
                };
                return {
                  binding: o,
                  resource: i
                };
              }
              if ("storage" in a) {
                var _i3;
                if (ee(s)) {
                  if (!de(s)) throw new Oe(s);
                  _i3 = {
                    buffer: t.unwrap(s)
                  };
                } else _i3 = {
                  buffer: s
                };
                return {
                  binding: o,
                  resource: _i3
                };
              }
              if ("texture" in a) {
                var _i4;
                if (H(s)) {
                  if (!rr(s)) throw new gt(s);
                  _i4 = t.unwrap(s.createView("sampled"));
                } else Ke(s) ? _i4 = t.unwrap(s) : _i4 = s;
                return {
                  binding: o,
                  resource: _i4
                };
              }
              if ("storageTexture" in a) {
                var _i5;
                if (H(s)) {
                  if (!de(s)) throw new Oe(s);
                  a.access === "readonly" ? _i5 = t.unwrap(s.createView("readonly")) : a.access === "mutable" ? _i5 = t.unwrap(s.createView("mutable")) : _i5 = t.unwrap(s.createView("writeonly"));
                } else ze(s) ? _i5 = t.unwrap(s) : _i5 = s;
                return {
                  binding: o,
                  resource: _i5
                };
              }
              if ("sampler" in a) return Me(s) || Ne(s) ? {
                binding: o,
                resource: t.unwrap(s)
              } : {
                binding: o,
                resource: s
              };
              if ("externalTexture" in a) return {
                binding: o,
                resource: s
              };
              throw new Error(`Malformed bind group entry: ${s} (${JSON.stringify(s)})`);
            }).filter(function (n) {
              return n !== null;
            })
          });
        }
      }]);
    }();
  var x = oa.NodeTypeCatalog,
    sa = ["==", "!=", "<", "<=", ">", ">=", "<<", ">>", "+", "-", "*", "/", "%", "|", "^", "&", "&&", "||"],
    ia = ["&&", "||", "==", "!=", "<", "<=", ">", ">="];
  function yn(e, t, r) {
    return r ? ia.includes(t) ? _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").M : t === "=" ? r : e : t === "!" || t === "~" ? _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").M : e;
  }
  function D(e, t) {
    return K(t.value) ? e.resolve(t.value) : String(t.value);
  }
  function ua(e) {
    throw new Error(`'${JSON.stringify(e)}' was not handled by the WGSL generator.`);
  }
  function cn(e, t) {
    return {
      value: t ? "true" : "false",
      dataType: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").M
    };
  }
  function xn(e, _ref28) {
    var _ref29 = (0, _slicedToArray2.default)(_ref28, 2),
      t = _ref29[0],
      r = _ref29[1];
    e.pushBlockScope();
    try {
      return `${e.indent()}{
${r.map(function (n) {
        return me(e, n);
      }).join(`
`)}
${e.dedent()}}`;
    } finally {
      e.popBlockScope();
    }
  }
  function pa(e, t, r) {
    return e.defineVariable(t, r);
  }
  function sr(e, t) {
    var r = e.getById(t);
    if (!r) throw new Error(`Identifier ${t} not found`);
    return r;
  }
  function I(e, t) {
    if (typeof t == "string") return sr(e, t);
    if (typeof t == "boolean") return cn(e, t);
    if (t[0] === x.logicalExpr || t[0] === x.binaryExpr || t[0] === x.assignmentExpr) {
      var _t2 = (0, _slicedToArray2.default)(t, 4),
        r = _t2[0],
        n = _t2[1],
        a = _t2[2],
        o = _t2[3],
        s = I(e, n),
        i = I(e, o),
        p = D(e, s),
        u = D(e, i),
        d = yn(s.dataType, a, i.dataType);
      return {
        value: sa.includes(a) ? `(${p} ${a} ${u})` : `${p} ${a} ${u}`,
        dataType: d
      };
    }
    if (t[0] === x.postUpdate) {
      var _t3 = (0, _slicedToArray2.default)(t, 3),
        _r2 = _t3[0],
        _n2 = _t3[1],
        _a4 = _t3[2],
        _o15 = I(e, _a4);
      return {
        value: `${D(e, _o15)}${_n2}`,
        dataType: _o15.dataType
      };
    }
    if (t[0] === x.unaryExpr) {
      var _t4 = (0, _slicedToArray2.default)(t, 3),
        _r3 = _t4[0],
        _n3 = _t4[1],
        _a5 = _t4[2],
        _o16 = I(e, _a5),
        _s6 = D(e, _o16),
        _i6 = yn(_o16.dataType, _n3);
      return {
        value: `${_n3}${_s6}`,
        dataType: _i6
      };
    }
    if (t[0] === x.memberAccess) {
      var _t5 = (0, _slicedToArray2.default)(t, 3),
        _r4 = _t5[0],
        _n4 = _t5[1],
        _a6 = _t5[2],
        _o17 = I(e, _n4);
      if (typeof _o17.value == "string") return {
        value: `${_o17.value}.${_a6}`,
        dataType: (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").h)(_o17.dataType) ? he(_o17.dataType, _a6) : U
      };
      if ((0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").Z)(_o17.dataType) && _a6 === "length") return _o17.dataType.elementCount === 0 ? {
        value: `arrayLength(&${e.resolve(_o17.value)})`,
        dataType: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").N
      } : {
        value: String(_o17.dataType.elementCount),
        dataType: _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").K
      };
      var _s7 = _o17.value[_a6];
      if (_o17.dataType.type !== "unknown") return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").X)(_o17.dataType) && _a6 === "columns" ? {
        value: _o17.value,
        dataType: _o17.dataType
      } : {
        value: _s7,
        dataType: he(_o17.dataType, _a6)
      };
      if (K(_o17.value)) return {
        value: _s7,
        dataType: he(_o17.value, _a6)
      };
      if (typeof _o17.value == "object") {
        var _i7 = K(_s7) ? we(_s7) : U;
        return {
          value: _s7,
          dataType: _i7
        };
      }
      throw new Error(`Cannot access member ${_a6} of ${_o17.value}`);
    }
    if (t[0] === x.indexAccess) {
      var _t6 = (0, _slicedToArray2.default)(t, 3),
        _r5 = _t6[0],
        _n5 = _t6[1],
        _a7 = _t6[2],
        _o18 = I(e, _n5),
        _s8 = I(e, _a7),
        _i8 = D(e, _o18),
        _p3 = D(e, _s8);
      return {
        value: `${_i8}[${_p3}]`,
        dataType: (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").h)(_o18.dataType) ? Nr(_o18.dataType) : U
      };
    }
    if (t[0] === x.numericLiteral) {
      var _r6 = kt(t[1]);
      if (!_r6) throw new Error(`Invalid numeric literal ${t[1]}`);
      return _r6;
    }
    if (t[0] === x.call) {
      var _t7 = (0, _slicedToArray2.default)(t, 3),
        _r7 = _t7[0],
        _n6 = _t7[1],
        _a8 = _t7[2],
        _o19 = I(e, _n6),
        _s9 = _o19.value;
      e.callStack.push(_s9);
      var _p4 = _a8.map(function (m) {
          return I(e, m);
        }).map(function (m) {
          return {
            value: D(e, m),
            dataType: m.dataType
          };
        }),
        _u3 = _p4.map(function (m) {
          return m.value;
        });
      if (e.callStack.pop(), typeof _s9 == "string") return {
        value: `${_s9}(${_u3.join(", ")})`,
        dataType: _o19.dataType
      };
      if ((0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js")._)(_s9)) return {
        value: `${e.resolve(_s9)}(${_u3.join(", ")})`,
        dataType: _o19.dataType
      };
      if (!Gr(_s9)) throw new Error(`Function ${String(_s9)} has not been created using TypeGPU APIs. Did you mean to wrap the function with tgpu.fn(args, return)(...) ?`);
      var _d = _s9.apply(void 0, (0, _toConsumableArray2.default)(_p4));
      return {
        value: D(e, _d),
        dataType: _d.dataType
      };
    }
    if (t[0] === x.objectExpr) {
      var _r8 = t[1],
        _n7 = e.callStack[e.callStack.length - 1],
        _a9 = function _a9(o) {
          return o.map(function (s) {
            var i = I(e, s);
            return D(e, i);
          }).join(", ");
        };
      if ((0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js")._)(_n7)) {
        var _s10 = Object.keys(_n7.propTypes).map(function (i) {
          var p = _r8[i];
          if (p === void 0) throw new Error(`Missing property ${i} in object literal for struct ${_n7}`);
          return p;
        });
        return {
          value: _a9(_s10),
          dataType: _n7
        };
      }
      return {
        value: _a9(Object.values(_r8)),
        dataType: U
      };
    }
    if (t[0] === x.arrayExpr) {
      var _a10$, _o21;
      var _t8 = (0, _slicedToArray2.default)(t, 2),
        _r9 = _t8[0],
        _n8 = _t8[1],
        _a10 = _n8.map(function (d) {
          return I(e, d);
        });
      if (_a10.length === 0) throw new Error("Cannot create empty array literal.");
      var _o20 = (_a10$ = _a10[0]) == null ? void 0 : _a10$.dataType,
        _s11 = _a10.find(function (d) {
          return d.dataType !== _o20;
        });
      if (_s11) throw new Error(`Cannot mix types in array literal. Type ${_s11.dataType.type} does not match expected type ${(_o21 = _o20) == null ? void 0 : _o21.type}.`);
      if (!(0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").Y)(_o20)) throw new Error("Cannot use non-WGSL data types in array literals.");
      _o20 = _o20.type === "abstractInt" ? _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").N : _o20.type === "abstractFloat" ? _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").P : _o20;
      var _p5 = `array<${e.resolve(_o20)}, ${_a10.length}>`,
        _u4 = _a10.map(function (d) {
          return D(e, d);
        });
      return {
        value: `${_p5}( ${_u4.join(", ")} )`,
        dataType: (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ka)(_o20, _a10.length)
      };
    }
    if (t[0] === x.stringLiteral) throw new Error("Cannot use string literals in TGSL.");
    if (t[0] === x.preUpdate) throw new Error("Cannot use pre-updates in TGSL.");
    ua(t);
  }
  function me(e, t) {
    if (typeof t == "string") return `${e.pre}${D(e, sr(e, t))};`;
    if (typeof t == "boolean") return `${e.pre}${D(e, cn(e, t))};`;
    if (t[0] === x.return) {
      var r = t[1],
        n = r !== void 0 ? D(e, I(e, r)) : void 0;
      if ((0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js")._)(e.callStack[e.callStack.length - 1]) && typeof r == "object" && r[0] === x.objectExpr) {
        var a = e.resolve(e.callStack[e.callStack.length - 1]);
        return `${e.pre}return ${a}(${n});`;
      }
      return n ? `${e.pre}return ${n};` : `${e.pre}return;`;
    }
    if (t[0] === x.if) {
      var _t9 = (0, _slicedToArray2.default)(t, 4),
        _r10 = _t9[0],
        _n9 = _t9[1],
        _a11 = _t9[2],
        o = _t9[3],
        s = D(e, I(e, _n9));
      e.indent();
      var i = me(e, _a11);
      e.dedent(), e.indent();
      var p = o ? me(e, o) : void 0;
      return e.dedent(), p ? `${e.pre}if (${s})
${i}
${e.pre}else
${p}` : `${e.pre}if (${s})
${i}`;
    }
    if (t[0] === x.let || t[0] === x.const) {
      var _t10 = (0, _slicedToArray2.default)(t, 3),
        _r11 = _t10[0],
        _n10 = _t10[1],
        _a12 = _t10[2],
        _o22 = _a12 ? I(e, _a12) : void 0;
      if (!_o22 || !_a12) throw new Error("Cannot create variable without an initial value.");
      if ((0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").c)(_o22.dataType)) throw new Error("Cannot create variable with loose data type.");
      pa(e, _n10, _o22.dataType);
      var _s12 = D(e, sr(e, _n10));
      if (typeof _a12 == "object" && _a12[0] === x.objectExpr && (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js")._)(e.callStack[e.callStack.length - 1])) {
        var _i9 = e.resolve(e.callStack[e.callStack.length - 1]);
        return `${e.pre}var ${_s12} = ${_i9}(${D(e, _o22)});`;
      }
      return `${e.pre}var ${_s12} = ${D(e, _o22)};`;
    }
    if (t[0] === x.block) return xn(e, t);
    if (t[0] === x.for) {
      var _t11 = (0, _slicedToArray2.default)(t, 5),
        _r12 = _t11[0],
        _n11 = _t11[1],
        _a13 = _t11[2],
        _o23 = _t11[3],
        _s13 = _t11[4],
        _i10 = _n11 ? me(e, _n11) : void 0,
        _p6 = _i10 ? _i10.slice(0, -1) : "",
        u = _a13 ? I(e, _a13) : void 0,
        d = u ? D(e, u) : "",
        m = _o23 ? me(e, _o23) : void 0,
        T = m ? m.slice(0, -1) : "";
      e.indent();
      var f = me(e, _s13);
      return e.dedent(), `${e.pre}for (${_p6}; ${d}; ${T})
${f}`;
    }
    if (t[0] === x.while) {
      var _t12 = (0, _slicedToArray2.default)(t, 3),
        _r13 = _t12[0],
        _n12 = _t12[1],
        _a14 = _t12[2],
        _o24 = D(e, I(e, _n12));
      e.indent();
      var _s14 = me(e, _a14);
      return e.dedent(), `${e.pre}while (${_o24})
${_s14}`;
    }
    return t[0] === x.continue ? `${e.pre}continue;` : t[0] === x.break ? `${e.pre}break;` : `${e.pre}${D(e, I(e, t))};`;
  }
  function bn(e, t) {
    return xn(e, t);
  }
  var hn = "#CATCHALL#",
    ur = /*#__PURE__*/function () {
      function ur() {
        (0, _classCallCheck2.default)(this, ur);
        this._stack = [];
        this._itemDepth = 0;
      }
      return (0, _createClass2.default)(ur, [{
        key: "itemDepth",
        get: function get() {
          return this._itemDepth;
        }
      }, {
        key: "topItem",
        get: function get() {
          var t = this._stack[this._stack.length - 1];
          if (!t || t.type !== "item") throw new Error("Internal error, expected item layer to be on top.");
          return t;
        }
      }, {
        key: "pushItem",
        value: function pushItem() {
          this._itemDepth++, this._stack.push({
            type: "item",
            usedSlots: new Set()
          });
        }
      }, {
        key: "popItem",
        value: function popItem() {
          this.pop("item");
        }
      }, {
        key: "pushSlotBindings",
        value: function pushSlotBindings(t) {
          this._stack.push({
            type: "slotBinding",
            bindingMap: new WeakMap(t)
          });
        }
      }, {
        key: "popSlotBindings",
        value: function popSlotBindings() {
          this.pop("slotBinding");
        }
      }, {
        key: "pushFunctionScope",
        value: function pushFunctionScope(t, r, n) {
          this._stack.push({
            type: "functionScope",
            args: t,
            returnType: r,
            externalMap: n
          });
        }
      }, {
        key: "popFunctionScope",
        value: function popFunctionScope() {
          this.pop("functionScope");
        }
      }, {
        key: "pushBlockScope",
        value: function pushBlockScope() {
          this._stack.push({
            type: "blockScope",
            declarations: new Map()
          });
        }
      }, {
        key: "popBlockScope",
        value: function popBlockScope() {
          this.pop("blockScope");
        }
      }, {
        key: "pop",
        value: function pop(t) {
          var r = this._stack[this._stack.length - 1];
          if (!r || t && r.type !== t) throw new Error(`Internal error, expected a ${t} layer to be on top.`);
          this._stack.pop(), t === "item" && this._itemDepth--;
        }
      }, {
        key: "readSlot",
        value: function readSlot(t) {
          for (var r = this._stack.length - 1; r >= 0; --r) {
            var n = this._stack[r];
            if ((n == null ? void 0 : n.type) === "item") n.usedSlots.add(t);else if ((n == null ? void 0 : n.type) === "slotBinding") {
              var a = n.bindingMap.get(t);
              if (a !== void 0) return a;
            } else if (!((n == null ? void 0 : n.type) === "functionScope" || (n == null ? void 0 : n.type) === "blockScope")) throw new Error("Unknown layer type.");
          }
          return t.defaultValue;
        }
      }, {
        key: "getSnippetById",
        value: function getSnippetById(t) {
          for (var r = this._stack.length - 1; r >= 0; --r) {
            var n = this._stack[r];
            if ((n == null ? void 0 : n.type) === "functionScope") {
              var a = n.args.find(function (s) {
                return s.value === t;
              });
              if (a !== void 0) return a;
              var o = n.externalMap[t];
              return o !== void 0 ? {
                value: o,
                dataType: K(o) ? we(o) : U
              } : void 0;
            }
            if ((n == null ? void 0 : n.type) === "blockScope") {
              var _a15 = n.declarations.get(t);
              if (_a15 !== void 0) return {
                value: t,
                dataType: _a15
              };
            }
          }
        }
      }, {
        key: "defineBlockVariable",
        value: function defineBlockVariable(t, r) {
          for (var n = this._stack.length - 1; n >= 0; --n) {
            var a = this._stack[n];
            if ((a == null ? void 0 : a.type) === "blockScope") return a.declarations.set(t, r), {
              value: t,
              dataType: r
            };
          }
          throw new Error("No block scope found to define a variable in.");
        }
      }]);
    }(),
    yt = ["", "  ", "    ", "      ", "        ", "          ", "            ", "              ", "                "],
    ir = yt.length - 1,
    pr = /*#__PURE__*/function () {
      function pr() {
        (0, _classCallCheck2.default)(this, pr);
        this.identLevel = 0;
      }
      return (0, _createClass2.default)(pr, [{
        key: "pre",
        get: function get() {
          var _yt$this$identLevel;
          return (_yt$this$identLevel = yt[this.identLevel]) != null ? _yt$this$identLevel : yt[ir].repeat(this.identLevel / ir) + yt[this.identLevel % ir];
        }
      }, {
        key: "indent",
        value: function indent() {
          var t = this.pre;
          return this.identLevel++, t;
        }
      }, {
        key: "dedent",
        value: function dedent() {
          return this.identLevel--, this.pre;
        }
      }]);
    }(),
    lr = /*#__PURE__*/function () {
      function lr(t) {
        (0, _classCallCheck2.default)(this, lr);
        this._memoizedResolves = new WeakMap();
        this._memoizedDerived = new WeakMap();
        this._indentController = new pr();
        this._itemStateStack = new ur();
        this._declarations = [];
        this[_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").n] = {
          itemStateStack: this._itemStateStack
        };
        this.bindGroupLayoutsToPlaceholderMap = new Map();
        this._nextFreeLayoutPlaceholderIdx = 0;
        this.fixedBindings = [];
        this.callStack = [];
        this.names = t.names, this._jitTranspiler = t.jitTranspiler;
      }
      return (0, _createClass2.default)(lr, [{
        key: "pre",
        get: function get() {
          return this._indentController.pre;
        }
      }, {
        key: "indent",
        value: function indent() {
          return this._indentController.indent();
        }
      }, {
        key: "dedent",
        value: function dedent() {
          return this._indentController.dedent();
        }
      }, {
        key: "getById",
        value: function getById(t) {
          var r = this._itemStateStack.getSnippetById(t);
          return r === void 0 ? null : r;
        }
      }, {
        key: "defineVariable",
        value: function defineVariable(t, r) {
          return this._itemStateStack.defineBlockVariable(t, r);
        }
      }, {
        key: "pushBlockScope",
        value: function pushBlockScope() {
          this._itemStateStack.pushBlockScope();
        }
      }, {
        key: "popBlockScope",
        value: function popBlockScope() {
          this._itemStateStack.popBlockScope();
        }
      }, {
        key: "transpileFn",
        value: function transpileFn(t) {
          if (!this._jitTranspiler) throw new Error("Tried to execute a tgpu.fn function without providing a JIT transpiler, or transpiling at build time.");
          return this._jitTranspiler.transpileFn(t);
        }
      }, {
        key: "fnToWgsl",
        value: function fnToWgsl(t) {
          this._itemStateStack.pushFunctionScope(t.args, t.returnType, t.externalMap);
          try {
            return {
              head: dr(this, t.args, t.returnType),
              body: bn(this, t.body)
            };
          } finally {
            this._itemStateStack.popFunctionScope();
          }
        }
      }, {
        key: "addDeclaration",
        value: function addDeclaration(t) {
          this._declarations.push(t);
        }
      }, {
        key: "allocateLayoutEntry",
        value: function allocateLayoutEntry(t) {
          var r = this.bindGroupLayoutsToPlaceholderMap,
            n = r.get(t);
          return n || (n = `#BIND_GROUP_LAYOUT_${this._nextFreeLayoutPlaceholderIdx++}#`, r.set(t, n)), n;
        }
      }, {
        key: "allocateFixedEntry",
        value: function allocateFixedEntry(t, r) {
          var n = this.fixedBindings.length;
          return this.fixedBindings.push({
            layoutEntry: t,
            resource: r
          }), {
            group: hn,
            binding: n
          };
        }
      }, {
        key: "readSlot",
        value: function readSlot(t) {
          var r = this._itemStateStack.readSlot(t);
          if (r === void 0) throw new (_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").c)(t);
          return r;
        }
      }, {
        key: "withSlots",
        value: function withSlots(t, r) {
          this._itemStateStack.pushSlotBindings(t);
          try {
            return r();
          } finally {
            this._itemStateStack.popSlotBindings();
          }
        }
      }, {
        key: "unwrap",
        value: function unwrap(t) {
          var _this9 = this;
          if (Ve(t)) return this.withSlots(t["~providing"].pairs, function () {
            return _this9.unwrap(t["~providing"].inner);
          });
          var r = t;
          for (;;) if ($(r)) r = this.readSlot(r);else if (k(r)) r = this._getOrCompute(r);else break;
          return r;
        }
      }, {
        key: "_getOrCompute",
        value: function _getOrCompute(t) {
          var _this$_memoizedDerive,
            _this10 = this;
          var r = (_this$_memoizedDerive = this._memoizedDerived.get(t)) != null ? _this$_memoizedDerive : [];
          this._itemStateStack.pushItem();
          try {
            for (var o of r) if ((0, _toConsumableArray2.default)(o.slotToValueMap.entries()).every(function (_ref30) {
              var _ref31 = (0, _slicedToArray2.default)(_ref30, 2),
                i = _ref31[0],
                p = _ref31[1];
              return i.areEqual(_this10._itemStateStack.readSlot(i), p);
            })) return o.result;
            (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").k)(_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").h.CPU);
            var n;
            try {
              n = t["~compute"]();
            } finally {
              (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").l)(_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").h.CPU);
            }
            var a = new Map();
            for (var _o25 of this._itemStateStack.topItem.usedSlots) a.set(_o25, this._itemStateStack.readSlot(_o25));
            return r.push({
              slotToValueMap: a,
              result: n
            }), this._memoizedDerived.set(t, r), n;
          } catch (n) {
            throw n instanceof _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").b ? n.appendToTrace(t) : new (_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").b)(n, [t]);
          } finally {
            this._itemStateStack.popItem();
          }
        }
      }, {
        key: "_getOrInstantiate",
        value: function _getOrInstantiate(t) {
          var _this$_memoizedResolv,
            _this11 = this;
          var r = (_this$_memoizedResolv = this._memoizedResolves.get(t)) != null ? _this$_memoizedResolv : [];
          this._itemStateStack.pushItem();
          try {
            for (var o of r) if ((0, _toConsumableArray2.default)(o.slotToValueMap.entries()).every(function (_ref32) {
              var _ref33 = (0, _slicedToArray2.default)(_ref32, 2),
                i = _ref33[0],
                p = _ref33[1];
              return i.areEqual(_this11._itemStateStack.readSlot(i), p);
            })) return o.result;
            var n;
            (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").h)(t) ? n = Mt(this, t) : k(t) || $(t) ? n = this.resolve(this.unwrap(t)) : $t(t) ? n = t["~resolve"](this) : n = this.resolveValue(t);
            var a = new Map();
            for (var _o26 of this._itemStateStack.topItem.usedSlots) a.set(_o26, this._itemStateStack.readSlot(_o26));
            return r.push({
              slotToValueMap: a,
              result: n
            }), this._memoizedResolves.set(t, r), n;
          } catch (n) {
            throw n instanceof _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").b ? n.appendToTrace(t) : new (_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").b)(n, [t]);
          } finally {
            this._itemStateStack.popItem();
          }
        }
      }, {
        key: "resolve",
        value: function resolve(t) {
          var _this12 = this;
          if (Ve(t)) return this.withSlots(t["~providing"].pairs, function () {
            return _this12.resolve(t["~providing"].inner);
          });
          if (t && typeof t == "object" || typeof t == "function") {
            if (this._itemStateStack.itemDepth === 0) try {
              (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").k)(_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").h.GPU);
              var r = (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").i)(this, function () {
                return _this12._getOrInstantiate(t);
              });
              return `${(0, _toConsumableArray2.default)(this._declarations).join(`

`)}${r}`;
            } finally {
              (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").l)(_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").h.GPU);
            }
            return this._getOrInstantiate(t);
          }
          return String(t);
        }
      }, {
        key: "resolveValue",
        value: function resolveValue(t, r) {
          var _this13 = this;
          if (K(t)) return this.resolve(t);
          if (r && (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").Z)(r)) return `array(${t.map(function (n) {
            return _this13.resolveValue(n, r.elementType);
          })})`;
          if (Array.isArray(t)) return `array(${t.map(function (n) {
            return _this13.resolveValue(n);
          })})`;
          if (r && (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js")._)(r)) return `${this.resolve(r)}(${Object.entries(r.propTypes).map(function (_ref34) {
            var _ref35 = (0, _slicedToArray2.default)(_ref34, 2),
              n = _ref35[0],
              a = _ref35[1];
            return _this13.resolveValue(t[n], a);
          })})`;
          throw new Error(`Value ${t} (as json: ${JSON.stringify(t)}) of schema ${r} is not resolvable to WGSL`);
        }
      }]);
    }();
  function Ae(e, t) {
    var r = new lr(t),
      n = r.resolve(e),
      a = r.bindGroupLayoutsToPlaceholderMap,
      o = [],
      s = new Set((0, _toConsumableArray2.default)(a.keys()).map(function (m) {
        return m.index;
      }).filter(function (m) {
        return m !== void 0;
      })),
      i = (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").o)(s),
      p = r.fixedBindings.map(function (m, T) {
        return [String(T), m.layoutEntry];
      }),
      u = function u() {
        var m = i.next().value,
          T = ft(Object.fromEntries(p));
        return o[m] = T, n = n.replaceAll(hn, String(m)), [m, new Fe(T, Object.fromEntries(r.fixedBindings.map(function (f, g) {
          return [String(g), f.resource];
        })))];
      },
      d = p.length > 0 ? u() : null;
    for (var _ref36 of a.entries()) {
      var _m$index;
      var _ref37 = (0, _slicedToArray2.default)(_ref36, 2);
      var m = _ref37[0];
      var T = _ref37[1];
      var f = (_m$index = m.index) != null ? _m$index : i.next().value;
      o[f] = m, n = n.replaceAll(T, String(f));
    }
    return {
      code: n,
      bindGroupLayouts: o,
      catchall: d
    };
  }
  function dr(e, t, r) {
    var n = t.map(function (a) {
      return `${a.value}: ${e.resolve(a.dataType)}`;
    }).join(", ");
    return r !== void 0 ? `(${n}) -> ${(0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ia)(r)} ${e.resolve(r)}` : `(${n})`;
  }
  function te(e, t) {
    var r = [];
    return typeof t == "string" && (e.isEntry ? (Array.isArray(e.argTypes) && (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js")._)(e.argTypes[0]) && r.push({
      In: e.argTypes[0]
    }), (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js")._)(e.returnType) && r.push({
      Out: e.returnType
    })) : Array.isArray(e.argTypes) && (zr(t, Array.isArray(e.argTypes) ? e.argTypes : Object.values(e.argTypes), function (n) {
      return r.push(n);
    }), Se(t, e.returnType, function (n) {
      return r.push(n);
    }))), {
      label: void 0,
      applyExternals: function applyExternals(n) {
        r.push(n);
      },
      resolve: function resolve(n) {
        var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var o = {};
        for (var i of r) q(o, i);
        var s = n.names.makeUnique(this.label);
        if (typeof t == "string") {
          var _i11 = "";
          if (!e.isEntry) _i11 = Array.isArray(e.argTypes) ? "" : dr(n, Object.entries(e.argTypes).map(function (_ref38) {
            var _ref39 = (0, _slicedToArray2.default)(_ref38, 2),
              u = _ref39[0],
              d = _ref39[1];
            return {
              value: u,
              dataType: d
            };
          }), e.returnType);else {
            var u = Array.isArray(e.argTypes) && (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js")._)(e.argTypes[0]) ? "(in: In)" : "()",
              d = (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").Y)(e.returnType) ? (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ia)(e.returnType) : "",
              m = e.returnType !== void 0 ? (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js")._)(e.returnType) ? "-> Out" : `-> ${d !== "" ? d : "@location(0)"} ${n.resolve(e.returnType)}` : "";
            _i11 = `${u} ${m} `;
          }
          var p = pe(n, o, `${_i11}${t.trim()}`);
          n.addDeclaration(`${a}fn ${s}${p}`);
        } else {
          var _i12$ast;
          var _i12 = Hr(t);
          if (_i12 != null && _i12.externals) {
            var f = Object.fromEntries(Object.entries(_i12.externals).filter(function (_ref40) {
              var _ref41 = (0, _slicedToArray2.default)(_ref40, 1),
                g = _ref41[0];
              return !(g in o);
            }));
            q(o, f);
          }
          var _p7 = (_i12$ast = _i12 == null ? void 0 : _i12.ast) != null ? _i12$ast : n.transpileFn(String(t));
          _p7.argNames.type === "destructured-object" && q(o, Object.fromEntries(_p7.argNames.props.map(function (_ref42) {
            var f = _ref42.prop,
              g = _ref42.alias;
            return [g, f];
          }))), !Array.isArray(e.argTypes) && _p7.argNames.type === "identifiers" && _p7.argNames.names[0] !== void 0 && q(o, (0, _defineProperty2.default)({}, _p7.argNames.names[0], Object.fromEntries(Object.keys(e.argTypes).map(function (f) {
            return [f, f];
          }))));
          var _u5 = _p7.externalNames.filter(function (f) {
            return !(f in o);
          });
          if (_u5.length > 0) throw new (_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").e)(this.label, _u5);
          var _d2 = Array.isArray(e.argTypes) ? _p7.argNames.type === "identifiers" ? e.argTypes.map(function (f, g) {
              var _ref43;
              return {
                value: (_ref43 = _p7.argNames.type === "identifiers" ? _p7.argNames.names[g] : void 0) != null ? _ref43 : `arg_${g}`,
                dataType: f
              };
            }) : [] : Object.entries(e.argTypes).map(function (_ref44) {
              var _ref45 = (0, _slicedToArray2.default)(_ref44, 2),
                f = _ref45[0],
                g = _ref45[1];
              return {
                value: f,
                dataType: g
              };
            }),
            _n$fnToWgsl = n.fnToWgsl({
              args: _d2,
              returnType: e.returnType,
              body: _p7.body,
              externalMap: o
            }),
            _m = _n$fnToWgsl.head,
            T = _n$fnToWgsl.body;
          n.addDeclaration(`${a}fn ${s}${n.resolve(_m)}${n.resolve(T)}`);
        }
        return s;
      }
    };
  }
  function wn(e) {
    var t = 0;
    return Object.fromEntries(Object.entries(e).map(function (_ref46) {
      var _ref47 = (0, _slicedToArray2.default)(_ref46, 2),
        r = _ref47[0],
        n = _ref47[1];
      if ((0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ha)(n)) return [r, n];
      var a = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").g)(n);
      return a !== void 0 ? (t = a + 1, [r, n]) : [r, (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").fa)(t++, n)];
    }));
  }
  function ct(e) {
    return (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").h)(e) ? (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").g)(e) !== void 0 ? e : (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").fa)(0, e) : (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ja)(wn(e));
  }
  function Ue(e) {
    return (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ja)(wn(e));
  }
  function re(e) {
    for (var _len3 = arguments.length, t = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      t[_key3 - 1] = arguments[_key3];
    }
    return la(e) ? da.apply(void 0, [e].concat(t)) : e;
  }
  function la(e) {
    return Array.isArray(e) && "raw" in e && Array.isArray(e.raw) && e.raw.every(function (t) {
      return typeof t == "string";
    });
  }
  function da(e) {
    for (var _len4 = arguments.length, t = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      t[_key4 - 1] = arguments[_key4];
    }
    return e.slice(1).reduce(function (r, n, a) {
      return `${r}${t[a]}${n}`;
    }, e[0]);
  }
  function Sn(e) {
    var _e$workgroupSize$, _e$workgroupSize$2, _e$workgroupSize$3;
    var t = {
        argTypes: e.in && Object.keys(e.in).length !== 0 ? [Ue(e.in)] : [],
        returnType: void 0,
        workgroupSize: [(_e$workgroupSize$ = e.workgroupSize[0]) != null ? _e$workgroupSize$ : 1, (_e$workgroupSize$2 = e.workgroupSize[1]) != null ? _e$workgroupSize$2 : 1, (_e$workgroupSize$3 = e.workgroupSize[2]) != null ? _e$workgroupSize$3 : 1],
        isEntry: !0
      },
      r = function r(n) {
        for (var _len5 = arguments.length, a = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
          a[_key5 - 1] = arguments[_key5];
        }
        return ma(t, e.workgroupSize, re.apply(void 0, [n].concat(a)));
      };
    return Object.assign(Object.assign(r, t), {
      does: r
    });
  }
  function ma(e, t, r) {
    var n = te(e, r),
      a = e.argTypes[0];
    return {
      shell: e,
      get label() {
        return n.label;
      },
      $uses: function $uses(o) {
        return n.applyExternals(o), this;
      },
      $name: function $name(o) {
        return n.label = o, j(a) && a.$name(`${o}_Input`), this;
      },
      "~resolve": function resolve(o) {
        return n.resolve(o, `@compute @workgroup_size(${t.join(", ")}) `);
      },
      toString: function toString() {
        var _this$label18;
        return `computeFn:${(_this$label18 = this.label) != null ? _this$label18 : "<unnamed>"}`;
      }
    };
  }
  function vn(e, t) {
    var r = {
        argTypes: e,
        returnType: t,
        isEntry: !1
      },
      n = function n(a) {
        for (var _len6 = arguments.length, o = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          o[_key6 - 1] = arguments[_key6];
        }
        return fa(r, re.apply(void 0, [a].concat(o)));
      };
    return Object.assign(Object.assign(n, r), {
      does: n
    });
  }
  function mr(e) {
    return (e == null ? void 0 : e.resourceType) === "function";
  }
  function ga(_ref48) {
    var _e$label2;
    var _ref49 = (0, _slicedToArray2.default)(_ref48, 2),
      e = _ref49[0],
      t = _ref49[1];
    return `${(_e$label2 = e.label) != null ? _e$label2 : "<unnamed>"}=${t}`;
  }
  function fa(e, t) {
    var r = te(e, t),
      n = (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").n, {
        implementation: t
      }), "shell", e), "resourceType", "function"), "$uses", function $uses(s) {
        return r.applyExternals(s), this;
      }), "$name", function $name(s) {
        return r.label = s, this;
      }), "with", function _with(s, i) {
        return Dn(o, [[ue(s) ? s.slot : s, i]]);
      }), "~resolve", function resolve(s) {
        if (typeof t == "string") return r.resolve(s);
        var i = s;
        if (i.callStack === void 0) throw new Error("Cannot resolve a TGSL function outside of a generation context");
        try {
          return i.callStack.push(e.returnType), r.resolve(s);
        } finally {
          i.callStack.pop();
        }
      }),
      a = (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").p)(function () {
        if (typeof t == "string") throw new Error("Cannot execute on the CPU functions constructed with raw WGSL");
        return t.apply(void 0, arguments);
      }, function () {
        var _e$returnType;
        for (var _len7 = arguments.length, s = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          s[_key7] = arguments[_key7];
        }
        return {
          value: new xt(o, s.map(function (i) {
            return i.value;
          })),
          dataType: (_e$returnType = e.returnType) != null ? _e$returnType : U
        };
      }),
      o = Object.assign(a, n);
    return Object.defineProperty(o, "label", {
      get: function get() {
        return r.label;
      }
    }), Object.defineProperty(o, "toString", {
      value: function value() {
        var _r$label;
        return `fn:${(_r$label = r.label) != null ? _r$label : "<unnamed>"}`;
      }
    }), o;
  }
  function Dn(e, t) {
    var r = (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").n, {
        implementation: e[_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").n].implementation
      }), "resourceType", "function"), "shell", e.shell), "~providing", {
        inner: e,
        pairs: t
      }), "$uses", function $uses(o) {
        return e.$uses(o), this;
      }), "$name", function $name(o) {
        return e.$name(o), this;
      }), "with", function _with(o, s) {
        return Dn(a, [].concat((0, _toConsumableArray2.default)(t), [[ue(o) ? o.slot : o, s]]));
      }),
      n = (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").p)(function () {
        return e.apply(void 0, arguments);
      }, function () {
        var _e$shell$returnType;
        for (var _len8 = arguments.length, o = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          o[_key8] = arguments[_key8];
        }
        return {
          value: new xt(a, o.map(function (s) {
            return s.value;
          })),
          dataType: (_e$shell$returnType = e.shell.returnType) != null ? _e$shell$returnType : U
        };
      }),
      a = Object.assign(n, r);
    return Object.defineProperty(a, "label", {
      get: function get() {
        return e.label;
      }
    }), Object.defineProperty(a, "toString", {
      value: function value() {
        var _e$label3;
        return `fn:${(_e$label3 = e.label) != null ? _e$label3 : "<unnamed>"}[${t.map(ga).join(", ")}]`;
      }
    }), a[_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").n].implementation = e[_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").n].implementation, a;
  }
  var xt = /*#__PURE__*/function () {
    function xt(t, r) {
      (0, _classCallCheck2.default)(this, xt);
      this._fn = t;
      this._params = r;
    }
    return (0, _createClass2.default)(xt, [{
      key: "label",
      get: function get() {
        return this._fn.label;
      }
    }, {
      key: "~resolve",
      value: function resolve(t) {
        return t.resolve(`${t.resolve(this._fn)}(${this._params.map(function (r) {
          return t.resolve(r);
        }).join(", ")})`);
      }
    }, {
      key: "toString",
      value: function toString() {
        var _this$label19;
        return `call:${(_this$label19 = this.label) != null ? _this$label19 : "<unnamed>"}`;
      }
    }]);
  }();
  function Fn(e) {
    var t = {
        argTypes: e.in && Object.keys(e.in).length !== 0 ? [Ue(e.in)] : [],
        targets: e.out,
        returnType: Object.keys(e.out).length !== 0 ? ct(e.out) : void 0,
        isEntry: !0
      },
      r = function r(n) {
        for (var _len9 = arguments.length, a = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
          a[_key9 - 1] = arguments[_key9];
        }
        return Ta(t, re.apply(void 0, [n].concat(a)));
      };
    return Object.assign(Object.assign(r, t), {
      does: r
    });
  }
  function Ta(e, t) {
    var r = te(e, t),
      n = e.returnType,
      a = e.argTypes[0];
    return typeof t == "string" && Se(t, n, function (s) {
      return r.applyExternals(s);
    }), {
      shell: e,
      outputType: n,
      get label() {
        return r.label;
      },
      $uses: function $uses(s) {
        return r.applyExternals(s), this;
      },
      $name: function $name(s) {
        return r.label = s, j(n) && n.$name(`${s}_Output`), j(a) && a.$name(`${s}_Input`), this;
      },
      "~resolve": function resolve(s) {
        if (typeof t == "string") return r.resolve(s, "@fragment ");
        var i = s;
        if (i.callStack === void 0) throw new Error("Cannot resolve a TGSL function outside of a generation context");
        try {
          return i.callStack.push(n), r.resolve(s, "@fragment ");
        } finally {
          i.callStack.pop();
        }
      },
      toString: function toString() {
        var _this$label20;
        return `fragmentFn:${(_this$label20 = this.label) != null ? _this$label20 : "<unnamed>"}`;
      }
    };
  }
  function An(e) {
    var _e$in;
    var t = {
        attributes: [(_e$in = e.in) != null ? _e$in : {}],
        returnType: Object.keys(e.out).length !== 0 ? ct(e.out) : void 0,
        argTypes: e.in && Object.keys(e.in).length !== 0 ? [Ue(e.in)] : [],
        isEntry: !0
      },
      r = function r(n) {
        for (var _len10 = arguments.length, a = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
          a[_key10 - 1] = arguments[_key10];
        }
        return ya(t, re.apply(void 0, [n].concat(a)));
      };
    return Object.assign(Object.assign(r, t), {
      does: r
    });
  }
  function ya(e, t) {
    var r = te(e, t),
      n = e.returnType,
      a = e.argTypes[0];
    return typeof t == "string" && Se(t, n, function (o) {
      return r.applyExternals(o);
    }), {
      shell: e,
      outputType: n,
      inputType: a,
      get label() {
        return r.label;
      },
      $uses: function $uses(o) {
        return r.applyExternals(o), this;
      },
      $name: function $name(o) {
        return r.label = o, j(n) && n.$name(`${o}_Output`), j(a) && a.$name(`${o}_Input`), this;
      },
      "~resolve": function resolve(o) {
        if (typeof t == "string") return r.resolve(o, "@vertex ");
        var s = o;
        if (s.callStack === void 0) throw new Error("Cannot resolve a TGSL function outside of a generation context");
        try {
          return s.callStack.push(n), r.resolve(o, "@vertex ");
        } finally {
          s.callStack.pop();
        }
      },
      toString: function toString() {
        var _this$label21;
        return `vertexFn:${(_this$label21 = this.label) != null ? _this$label21 : "<unnamed>"}`;
      }
    };
  }
  var ne = exports.RandomNameRegistry = /*#__PURE__*/function () {
      function ne() {
        (0, _classCallCheck2.default)(this, ne);
        this.lastUniqueId = 0;
      }
      return (0, _createClass2.default)(ne, [{
        key: "makeUnique",
        value: function makeUnique(t) {
          var r;
          return t ? (r = t.replaceAll(/\s/g, "_"), r = r.replaceAll(/[^\w\d]/g, "")) : r = "item", `${r}_${this.lastUniqueId++}`;
        }
      }]);
    }(),
    ae = exports.StrictNameRegistry = /*#__PURE__*/function () {
      function ae() {
        (0, _classCallCheck2.default)(this, ae);
        this._usedNames = new Set();
      }
      return (0, _createClass2.default)(ae, [{
        key: "makeUnique",
        value: function makeUnique(t) {
          if (t === void 0) throw new Error("Unnamed item found when using a strict name registry");
          var r = 0,
            n = t;
          for (; this._usedNames.has(n);) r++, n = `${t}_${r}`;
          return this._usedNames.add(n), n;
        }
      }]);
    }();
  function Un(e) {
    var t = e.externals,
      r = e.template,
      n = e.names,
      a = e.unstable_jitTranspiler,
      o = {};
    q(o, t != null ? t : {});
    var s = {
        "~resolve": function resolve(p) {
          return pe(p, o, r != null ? r : "");
        },
        toString: function toString() {
          return "<root>";
        }
      },
      _Ae = Ae(s, {
        names: n === "strict" ? new ae() : new ne(),
        jitTranspiler: a
      }),
      i = _Ae.code;
    return i;
  }
  var qe = /*#__PURE__*/function () {
    function qe(t) {
      (0, _classCallCheck2.default)(this, qe);
      this._map = new WeakMap();
      this._make = t;
    }
    return (0, _createClass2.default)(qe, [{
      key: "getOrMake",
      value: function getOrMake(t) {
        if (this._map.has(t)) return this._map.get(t);
        for (var _len11 = arguments.length, r = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
          r[_key11 - 1] = arguments[_key11];
        }
        var n = this._make.apply(this, [t].concat(r));
        return this._map.set(t, n), n;
      }
    }]);
  }();
  function In(e, t, r) {
    return new gr(new fr(e, t, r), {});
  }
  function Bn(e) {
    return (e == null ? void 0 : e.resourceType) === "compute-pipeline";
  }
  var gr = /*#__PURE__*/function () {
      function e(t, r) {
        (0, _classCallCheck2.default)(this, e);
        this.resourceType = "compute-pipeline";
        this._core = t;
        this._priors = r;
      }
      return (0, _createClass2.default)(e, [{
        key: "label",
        get: function get() {
          return this._core.label;
        }
      }, {
        key: "rawPipeline",
        get: function get() {
          return this._core.unwrap().pipeline;
        }
      }, {
        key: "with",
        value: function _with(t, r) {
          var _this$_priors$bindGro;
          return new e(this._core, {
            bindGroupLayoutMap: new Map([].concat((0, _toConsumableArray2.default)((_this$_priors$bindGro = this._priors.bindGroupLayoutMap) != null ? _this$_priors$bindGro : []), [[t, r]]))
          });
        }
      }, {
        key: "dispatchWorkgroups",
        value: function dispatchWorkgroups(t, r, n) {
          var _this14 = this;
          var a = this._core.unwrap(),
            _this$_core = this._core,
            o = _this$_core.branch,
            s = _this$_core.label,
            i = o.commandEncoder.beginComputePass({
              label: s != null ? s : "<unnamed>"
            });
          i.setPipeline(a.pipeline);
          var p = new Set(a.bindGroupLayouts);
          if (a.bindGroupLayouts.forEach(function (u, d) {
            if (a.catchall && d === a.catchall[0]) i.setBindGroup(d, o.unwrap(a.catchall[1])), p.delete(u);else {
              var _this14$_priors$bindG;
              var m = (_this14$_priors$bindG = _this14._priors.bindGroupLayoutMap) == null ? void 0 : _this14$_priors$bindG.get(u);
              m !== void 0 && (p.delete(u), i.setBindGroup(d, o.unwrap(m)));
            }
          }), p.size > 0) throw new (_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").f)(p);
          i.dispatchWorkgroups(t, r, n), i.end();
        }
      }, {
        key: "$name",
        value: function $name(t) {
          return this._core.label = t, this;
        }
      }]);
    }(),
    fr = /*#__PURE__*/function () {
      function fr(t, r, n) {
        (0, _classCallCheck2.default)(this, fr);
        this.branch = t;
        this._slotBindings = r;
        this._entryFn = n;
      }
      return (0, _createClass2.default)(fr, [{
        key: "unwrap",
        value: function unwrap() {
          var _this15 = this;
          if (this._memo === void 0) {
            var _n$a$, _this$label22, _this$label23, _this$label24, _this$label25;
            var t = this.branch.device,
              _Ae2 = Ae({
                "~resolve": function resolve(o) {
                  return o.withSlots(_this15._slotBindings, function () {
                    o.resolve(_this15._entryFn);
                  }), "";
                },
                toString: function toString() {
                  var _this15$label;
                  return `computePipeline:${(_this15$label = _this15.label) != null ? _this15$label : "<unnamed>"}`;
                }
              }, {
                names: this.branch.nameRegistry,
                jitTranspiler: this.branch.jitTranspiler
              }),
              r = _Ae2.code,
              n = _Ae2.bindGroupLayouts,
              a = _Ae2.catchall;
            a !== null && (_n$a$ = n[a[0]]) != null && _n$a$.$name(`${(_this$label22 = this.label) != null ? _this$label22 : "<unnamed>"} - Automatic Bind Group & Layout`), this._memo = {
              pipeline: t.createComputePipeline({
                label: (_this$label23 = this.label) != null ? _this$label23 : "<unnamed>",
                layout: t.createPipelineLayout({
                  label: `${(_this$label24 = this.label) != null ? _this$label24 : "<unnamed>"} - Pipeline Layout`,
                  bindGroupLayouts: n.map(function (o) {
                    return _this15.branch.unwrap(o);
                  })
                }),
                compute: {
                  module: t.createShaderModule({
                    label: `${(_this$label25 = this.label) != null ? _this$label25 : "<unnamed>"} - Shader`,
                    code: r
                  })
                }
              }),
              bindGroupLayouts: n,
              catchall: a
            };
          }
          return this._memo;
        }
      }]);
    }();
  function cr(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "vertex";
    return new yr(e, t);
  }
  function ht(e) {
    return (e == null ? void 0 : e.resourceType) === "vertex-layout";
  }
  var Tr = Symbol("defaultAttribEntry");
  function bt(e, t, r, n, a) {
    if ((0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").ga)(t) || (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").f)(t)) {
      var o = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").g)(t);
      return o !== void 0 && (n[a != null ? a : Tr] = o), bt(e, t.inner, (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").aa)(r, (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js")._)(t)), n);
    }
    if ((0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js")._)(t)) {
      var _o27 = r;
      return Object.fromEntries(Object.entries(t.propTypes).map(function (_ref50) {
        var _ref51 = (0, _slicedToArray2.default)(_ref50, 2),
          s = _ref51[0],
          i = _ref51[1];
        _o27 = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").aa)(_o27, (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").Z)(i));
        var p = [s, bt(e, i, _o27, n, s)];
        return _o27 += (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(i), p;
      }));
    }
    if ((0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").e)(t)) {
      var _o28 = r;
      return Object.fromEntries(Object.entries(t.propTypes).map(function (_ref52) {
        var _ref53 = (0, _slicedToArray2.default)(_ref52, 2),
          s = _ref53[0],
          i = _ref53[1];
        _o28 = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").aa)(_o28, (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js")._)(i));
        var p = [s, bt(e, i, _o28, n, s)];
        return _o28 += (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(i), p;
      }));
    }
    if ("type" in t && typeof t.type == "string") {
      if (_$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").a.includes(t.type)) return {
        _layout: e,
        format: t.type,
        offset: r
      };
      var _o29 = _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").b[t.type];
      if (_o29) return {
        _layout: e,
        format: _o29,
        offset: r
      };
    }
    throw new Error(`Unsupported data used in vertex layout: ${String(t)}`);
  }
  var yr = /*#__PURE__*/function () {
    function yr(t, r) {
      (0, _classCallCheck2.default)(this, yr);
      this.resourceType = "vertex-layout";
      this._customLocationMap = {};
      this.schemaForCount = t;
      this.stepMode = r;
      var n = t(0);
      this.stride = (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").aa)((0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").ba)(n.elementType), (0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").Z)(n)), this.attrib = bt(this, n.elementType, 0, this._customLocationMap);
    }
    return (0, _createClass2.default)(yr, [{
      key: "label",
      get: function get() {
        return this._label;
      }
    }, {
      key: "vertexLayout",
      get: function get() {
        var _this16 = this;
        if (this._customLocationMap[Tr] !== void 0) {
          if (typeof this.attrib.format != "string" || typeof this.attrib.offset != "number") throw new Error("Single attribute vertex layouts must have a format and offset.");
          return {
            arrayStride: this.stride,
            stepMode: this.stepMode,
            attributes: [{
              format: this.attrib.format,
              offset: this.attrib.offset,
              shaderLocation: this._customLocationMap[Tr]
            }]
          };
        }
        if (!Object.keys(this.attrib).every(function (r) {
          return _this16._customLocationMap[r] !== void 0;
        })) throw new Error("All attributes must have custom locations in order to unwrap a vertex layout.");
        return {
          arrayStride: this.stride,
          stepMode: this.stepMode,
          attributes: (0, _toConsumableArray2.default)(Object.entries(this.attrib).map(function (_ref54) {
            var _ref55 = (0, _slicedToArray2.default)(_ref54, 2),
              r = _ref55[0],
              n = _ref55[1];
            return {
              format: n.format,
              offset: n.offset,
              shaderLocation: _this16._customLocationMap[r]
            };
          }))
        };
      }
    }, {
      key: "$name",
      value: function $name(t) {
        return this._label = t, this;
      }
    }]);
  }();
  function ca(e) {
    return typeof (e == null ? void 0 : e.loadOp) == "string";
  }
  function Rn(e, t) {
    if ((0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").h)(e)) {
      if (!ca(t)) throw new Error("Expected a single color attachment, not a record.");
      return [t];
    }
    var r = [];
    for (var n of Object.keys(e)) {
      var a = t[n];
      if (!a) throw new Error(`A color attachment by the name of '${n}' was not provided to the shader.`);
      r.push(a);
    }
    return r;
  }
  function xa(e) {
    return typeof (e == null ? void 0 : e.format) == "string";
  }
  function _n(e, t) {
    if ((0, _$$_REQUIRE(_dependencyMap[14], "./chunk-YVK55BVR.js").h)(e)) {
      if (!xa(t)) throw new Error("Expected a single color target configuration, not a record.");
      return [t];
    }
    var r = [];
    for (var n of Object.keys(e)) {
      var a = t[n];
      if (!a) throw new Error(`A color target by the name of '${n}' was not provided to the shader.`);
      r.push(a);
    }
    return r;
  }
  function Pn(e) {
    return new xr(new br(e), {});
  }
  function Ln(e) {
    return (e == null ? void 0 : e.resourceType) === "render-pipeline";
  }
  var xr = /*#__PURE__*/function () {
      function e(t, r) {
        (0, _classCallCheck2.default)(this, e);
        this.resourceType = "render-pipeline";
        this.core = t;
        this.priors = r;
      }
      return (0, _createClass2.default)(e, [{
        key: "label",
        get: function get() {
          return this.core.label;
        }
      }, {
        key: "$name",
        value: function $name(t) {
          return this.core.label = t, this;
        }
      }, {
        key: "with",
        value: function _with(t, r) {
          var _this$priors$bindGrou, _this$priors$vertexLa;
          if (Tt(t)) return new e(this.core, Object.assign({}, this.priors, {
            bindGroupLayoutMap: new Map([].concat((0, _toConsumableArray2.default)((_this$priors$bindGrou = this.priors.bindGroupLayoutMap) != null ? _this$priors$bindGrou : []), [[t, r]]))
          }));
          if (ht(t)) return new e(this.core, Object.assign({}, this.priors, {
            vertexLayoutMap: new Map([].concat((0, _toConsumableArray2.default)((_this$priors$vertexLa = this.priors.vertexLayoutMap) != null ? _this$priors$vertexLa : []), [[t, r]]))
          }));
          throw new Error("Unsupported value passed into .with()");
        }
      }, {
        key: "withColorAttachment",
        value: function withColorAttachment(t) {
          return new e(this.core, Object.assign({}, this.priors, {
            colorAttachment: t
          }));
        }
      }, {
        key: "withDepthStencilAttachment",
        value: function withDepthStencilAttachment(t) {
          return new e(this.core, Object.assign({}, this.priors, {
            depthStencilAttachment: t
          }));
        }
      }, {
        key: "draw",
        value: function draw(t, r, n, a) {
          var _this$priors$colorAtt,
            _this17 = this;
          var o = this.core.unwrap(),
            _this$core$options = this.core.options,
            s = _this$core$options.branch,
            i = _this$core$options.fragmentFn,
            u = {
              colorAttachments: Rn(i.shell.targets, (_this$priors$colorAtt = this.priors.colorAttachment) != null ? _this$priors$colorAtt : {}).map(function (g) {
                return H(g.view) ? Object.assign({}, g, {
                  view: s.unwrap(g.view).createView()
                }) : g;
              })
            };
          if (this.core.label !== void 0 && (u.label = this.core.label), this.priors.depthStencilAttachment !== void 0) {
            var g = this.priors.depthStencilAttachment;
            H(g.view) ? u.depthStencilAttachment = Object.assign({}, g, {
              view: s.unwrap(g.view).createView()
            }) : u.depthStencilAttachment = g;
          }
          var d = s.commandEncoder.beginRenderPass(u);
          d.setPipeline(o.pipeline);
          var m = new Set(o.bindGroupLayouts);
          o.bindGroupLayouts.forEach(function (g, F) {
            if (o.catchall && F === o.catchall[0]) d.setBindGroup(F, s.unwrap(o.catchall[1])), m.delete(g);else {
              var _this17$priors$bindGr;
              var S = (_this17$priors$bindGr = _this17.priors.bindGroupLayoutMap) == null ? void 0 : _this17$priors$bindGr.get(g);
              S !== void 0 && (m.delete(g), d.setBindGroup(F, s.unwrap(S)));
            }
          });
          var T = new Set(this.core.usedVertexLayouts);
          if (this.core.usedVertexLayouts.forEach(function (g, F) {
            var _this17$priors$vertex;
            var S = (_this17$priors$vertex = _this17.priors.vertexLayoutMap) == null ? void 0 : _this17$priors$vertex.get(g);
            S && (T.delete(g), d.setVertexBuffer(F, s.unwrap(S)));
          }), m.size > 0) throw new (_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").f)(m);
          if (T.size > 0) throw new (_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").g)(T);
          d.draw(t, r, n, a), d.end(), s.flush();
        }
      }]);
    }(),
    br = /*#__PURE__*/function () {
      function br(t) {
        (0, _classCallCheck2.default)(this, br);
        this.options = t;
        var r = Xr(t.vertexFn.shell.attributes[0], t.vertexAttribs);
        this._vertexBufferLayouts = r.bufferDefinitions, this.usedVertexLayouts = r.usedVertexLayouts, this._targets = _n(t.fragmentFn.shell.targets, t.targets);
      }
      return (0, _createClass2.default)(br, [{
        key: "unwrap",
        value: function unwrap() {
          var _this18 = this;
          if (this._memo === void 0) {
            var _u$d$, _this$label26, _this$label27, _this$label28;
            var _this$options = this.options,
              t = _this$options.branch,
              r = _this$options.vertexFn,
              n = _this$options.fragmentFn,
              a = _this$options.slotBindings,
              o = _this$options.primitiveState,
              s = _this$options.depthStencilState,
              i = _this$options.multisampleState,
              _Ae3 = Ae({
                "~resolve": function resolve(g) {
                  return g.withSlots(a, function () {
                    g.resolve(r), g.resolve(n);
                  }), "";
                },
                toString: function toString() {
                  var _this18$label;
                  return `renderPipeline:${(_this18$label = _this18.label) != null ? _this18$label : "<unnamed>"}`;
                }
              }, {
                names: t.nameRegistry,
                jitTranspiler: t.jitTranspiler
              }),
              p = _Ae3.code,
              u = _Ae3.bindGroupLayouts,
              d = _Ae3.catchall;
            d !== null && ((_u$d$ = u[d[0]]) == null ? void 0 : _u$d$.$name(`${(_this$label26 = this.label) != null ? _this$label26 : "<unnamed>"} - Automatic Bind Group & Layout`));
            var m = t.device,
              T = m.createShaderModule({
                label: `${(_this$label27 = this.label) != null ? _this$label27 : "<unnamed>"} - Shader`,
                code: p
              }),
              f = {
                layout: m.createPipelineLayout({
                  label: `${(_this$label28 = this.label) != null ? _this$label28 : "<unnamed>"} - Pipeline Layout`,
                  bindGroupLayouts: u.map(function (g) {
                    return t.unwrap(g);
                  })
                }),
                vertex: {
                  module: T,
                  buffers: this._vertexBufferLayouts
                },
                fragment: {
                  module: T,
                  targets: this._targets
                }
              };
            this.label !== void 0 && (f.label = this.label), o && (f.primitive = o), s && (f.depthStencil = s), i && (f.multisample = i), this._memo = {
              pipeline: m.createRenderPipeline(f),
              bindGroupLayouts: u,
              catchall: d
            };
          }
          return this._memo;
        }
      }]);
    }();
  var hr = /*#__PURE__*/function () {
      function e(t, r) {
        (0, _classCallCheck2.default)(this, e);
        this._getRoot = t;
        this._slotBindings = r;
      }
      return (0, _createClass2.default)(e, [{
        key: "with",
        value: function _with(t, r) {
          return new e(this._getRoot, [].concat((0, _toConsumableArray2.default)(this._slotBindings), [[ue(t) ? t.slot : t, r]]));
        }
      }, {
        key: "withCompute",
        value: function withCompute(t) {
          return new wr(this._getRoot(), this._slotBindings, t);
        }
      }, {
        key: "withVertex",
        value: function withVertex(t, r) {
          return new Sr({
            branch: this._getRoot(),
            primitiveState: void 0,
            depthStencilState: void 0,
            slotBindings: this._slotBindings,
            vertexFn: t,
            vertexAttribs: r,
            multisampleState: void 0
          });
        }
      }]);
    }(),
    wr = /*#__PURE__*/function () {
      function wr(t, r, n) {
        (0, _classCallCheck2.default)(this, wr);
        this._root = t;
        this._slotBindings = r;
        this._entryFn = n;
      }
      return (0, _createClass2.default)(wr, [{
        key: "createPipeline",
        value: function createPipeline() {
          return In(this._root, this._slotBindings, this._entryFn);
        }
      }]);
    }(),
    Sr = /*#__PURE__*/function () {
      function Sr(t) {
        (0, _classCallCheck2.default)(this, Sr);
        this._options = t;
      }
      return (0, _createClass2.default)(Sr, [{
        key: "withFragment",
        value: function withFragment(t, r, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").a)(typeof t != "string", "Just type mismatch validation"), (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").a)(typeof r != "string", "Just type mismatch validation"), new vr(Object.assign({}, this._options, {
            fragmentFn: t,
            targets: r
          }));
        }
      }]);
    }(),
    vr = /*#__PURE__*/function () {
      function e(t) {
        (0, _classCallCheck2.default)(this, e);
        this._options = t;
      }
      return (0, _createClass2.default)(e, [{
        key: "withPrimitive",
        value: function withPrimitive(t) {
          return new e(Object.assign({}, this._options, {
            primitiveState: t
          }));
        }
      }, {
        key: "withDepthStencil",
        value: function withDepthStencil(t) {
          return new e(Object.assign({}, this._options, {
            depthStencilState: t
          }));
        }
      }, {
        key: "withMultisample",
        value: function withMultisample(t) {
          return new e(Object.assign({}, this._options, {
            multisampleState: t
          }));
        }
      }, {
        key: "createPipeline",
        value: function createPipeline() {
          return Pn(this._options);
        }
      }]);
    }(),
    wt = /*#__PURE__*/function (_hr) {
      function wt(_r15, n, a, o) {
        var _this19;
        (0, _classCallCheck2.default)(this, wt);
        _this19 = _callSuper(this, wt, [function () {
          return (0, _assertThisInitialized2.default)(_this19);
        }, []]);
        _this19._disposables = [];
        _this19._unwrappedBindGroupLayouts = new qe(function (r) {
          return r.unwrap(_this19);
        });
        _this19._unwrappedBindGroups = new qe(function (r) {
          return r.unwrap(_this19);
        });
        _this19._commandEncoder = null;
        _this19.device = _r15;
        _this19.nameRegistry = n;
        _this19.jitTranspiler = a;
        _this19._ownDevice = o;
        _this19["~unstable"] = _this19;
        return _this19;
      }
      (0, _inherits2.default)(wt, _hr);
      return (0, _createClass2.default)(wt, [{
        key: "commandEncoder",
        get: function get() {
          return this._commandEncoder || (this._commandEncoder = this.device.createCommandEncoder()), this._commandEncoder;
        }
      }, {
        key: "createBuffer",
        value: function createBuffer(r, n) {
          var a = sn(this, r, n);
          return this._disposables.push(a), a;
        }
      }, {
        key: "createUniform",
        value: function createUniform(r, n) {
          return this.createBuffer(r, n).$usage("uniform").as("uniform");
        }
      }, {
        key: "createMutable",
        value: function createMutable(r, n) {
          return this.createBuffer(r, n).$usage("storage").as("mutable");
        }
      }, {
        key: "createReadonly",
        value: function createReadonly(r, n) {
          return this.createBuffer(r, n).$usage("storage").as("readonly");
        }
      }, {
        key: "createBindGroup",
        value: function createBindGroup(r, n) {
          return new Fe(r, n);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          for (var r of this._disposables) r.destroy();
          this._ownDevice && this.device.destroy();
        }
      }, {
        key: "createTexture",
        value: function createTexture(r) {
          var n = gn(r, this);
          return this._disposables.push(n), n;
        }
      }, {
        key: "unwrap",
        value: function unwrap(r) {
          if (Bn(r)) return r.rawPipeline;
          if (Ln(r)) return r.core.unwrap().pipeline;
          if (Tt(r)) return this._unwrappedBindGroupLayouts.getOrMake(r);
          if (or(r)) return this._unwrappedBindGroups.getOrMake(r);
          if (ee(r)) return r.buffer;
          if (H(r) || ze(r) || Ke(r)) return r.unwrap();
          if (ht(r)) return r.vertexLayout;
          if (Me(r)) {
            if ("unwrap" in r) return r.unwrap(this);
            throw new Error("Cannot unwrap laid-out sampler.");
          }
          if (Ne(r)) {
            if ("unwrap" in r) return r.unwrap(this);
            throw new Error("Cannot unwrap laid-out comparison sampler.");
          }
          throw new Error(`Unknown resource type: ${r}`);
        }
      }, {
        key: "beginRenderPass",
        value: function beginRenderPass(r, n) {
          var _this20 = this;
          var a = this.commandEncoder.beginRenderPass(r),
            o = new Map(),
            s = new Map(),
            i,
            p = function p() {
              if (!i) throw new Error("Cannot draw without a call to pass.setPipeline");
              var _i13 = i,
                u = _i13.core,
                d = _i13.priors,
                m = u.unwrap();
              a.setPipeline(m.pipeline);
              var T = new Set(m.bindGroupLayouts);
              m.bindGroupLayouts.forEach(function (g, F) {
                if (m.catchall && F === m.catchall[0]) a.setBindGroup(F, _this20.unwrap(m.catchall[1])), T.delete(g);else {
                  var _d$bindGroupLayoutMap, _d$bindGroupLayoutMap2;
                  var S = (_d$bindGroupLayoutMap = (_d$bindGroupLayoutMap2 = d.bindGroupLayoutMap) == null ? void 0 : _d$bindGroupLayoutMap2.get(g)) != null ? _d$bindGroupLayoutMap : o.get(g);
                  S !== void 0 && (T.delete(g), or(S) ? a.setBindGroup(F, _this20.unwrap(S)) : a.setBindGroup(F, S));
                }
              });
              var f = new Set();
              if (u.usedVertexLayouts.forEach(function (g, F) {
                var _d$vertexLayoutMap;
                var S = (_d$vertexLayoutMap = d.vertexLayoutMap) == null ? void 0 : _d$vertexLayoutMap.get(g),
                  B = S ? {
                    buffer: S,
                    offset: void 0,
                    size: void 0
                  } : s.get(g);
                !B || !B.buffer ? f.add(g) : ee(B.buffer) ? a.setVertexBuffer(F, _this20.unwrap(B.buffer), B.offset, B.size) : a.setVertexBuffer(F, B.buffer, B.offset, B.size);
              }), T.size > 0) throw new (_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").f)(T);
              if (f.size > 0) throw new (_$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").g)(f);
            };
          n({
            setViewport: function setViewport() {
              a.setViewport.apply(a, arguments);
            },
            setScissorRect: function setScissorRect() {
              a.setScissorRect.apply(a, arguments);
            },
            setBlendConstant: function setBlendConstant() {
              a.setBlendConstant.apply(a, arguments);
            },
            setStencilReference: function setStencilReference() {
              a.setStencilReference.apply(a, arguments);
            },
            beginOcclusionQuery: function beginOcclusionQuery() {
              a.beginOcclusionQuery.apply(a, arguments);
            },
            endOcclusionQuery: function endOcclusionQuery() {
              a.endOcclusionQuery.apply(a, arguments);
            },
            executeBundles: function executeBundles() {
              a.executeBundles.apply(a, arguments);
            },
            setPipeline: function setPipeline(u) {
              i = u;
            },
            setIndexBuffer: function setIndexBuffer(u, d, m, T) {
              ee(u) ? a.setIndexBuffer(_this20.unwrap(u), d, m, T) : a.setIndexBuffer(u, d, m, T);
            },
            setVertexBuffer: function setVertexBuffer(u, d, m, T) {
              s.set(u, {
                buffer: d,
                offset: m,
                size: T
              });
            },
            setBindGroup: function setBindGroup(u, d) {
              o.set(u, d);
            },
            draw: function draw(u, d, m, T) {
              p(), a.draw(u, d, m, T);
            },
            drawIndexed: function drawIndexed() {
              p(), a.drawIndexed.apply(a, arguments);
            },
            drawIndirect: function drawIndirect() {
              p(), a.drawIndirect.apply(a, arguments);
            },
            drawIndexedIndirect: function drawIndexedIndirect() {
              p(), a.drawIndexedIndirect.apply(a, arguments);
            }
          }), a.end();
        }
      }, {
        key: "flush",
        value: function flush() {
          this._commandEncoder && (this.device.queue.submit([this._commandEncoder.finish()]), this._commandEncoder = null);
        }
      }]);
    }(hr);
  function Cn(_x) {
    return _Cn.apply(this, arguments);
  }
  function _Cn() {
    _Cn = (0, _asyncToGenerator2.default)(function* (e) {
      var _ref61 = e != null ? e : {},
        t = _ref61.adapter,
        r = _ref61.device,
        _ref61$unstable_names = _ref61.unstable_names,
        n = _ref61$unstable_names === void 0 ? "random" : _ref61$unstable_names,
        a = _ref61.unstable_jitTranspiler;
      if (!navigator.gpu) throw new Error("WebGPU is not supported by this browser.");
      var o = yield navigator.gpu.requestAdapter(t);
      if (!o) throw new Error("Could not find a compatible GPU");
      return new wt(yield o.requestDevice(r), n === "random" ? new ne() : new ae(), a, !0);
    });
    return _Cn.apply(this, arguments);
  }
  function En(e) {
    var _ref56 = e != null ? e : {},
      t = _ref56.device,
      _ref56$unstable_names = _ref56.unstable_names,
      r = _ref56$unstable_names === void 0 ? "random" : _ref56$unstable_names,
      n = _ref56.unstable_jitTranspiler;
    return new wt(t, r === "random" ? new ne() : new ae(), n, !1);
  }
  function St(e) {
    return new Dr(e);
  }
  var Dr = /*#__PURE__*/function () {
    function Dr() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : void 0;
      (0, _classCallCheck2.default)(this, Dr);
      this.resourceType = "slot";
      this.defaultValue = t;
    }
    return (0, _createClass2.default)(Dr, [{
      key: "$name",
      value: function $name(t) {
        return this.label = t, this;
      }
    }, {
      key: "areEqual",
      value: function areEqual(t, r) {
        return Object.is(t, r);
      }
    }, {
      key: "toString",
      value: function toString() {
        var _this$label29;
        return `slot:${(_this$label29 = this.label) != null ? _this$label29 : "<unnamed>"}`;
      }
    }, {
      key: "value",
      get: function get() {
        var t = (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").j)();
        if (!t) throw new Error("Cannot access tgpu.slot's value outside of resolution.");
        return $e(t.unwrap(this));
      }
    }]);
  }();
  function Vn(e, t) {
    return new Fr(e, t);
  }
  var Fr = /*#__PURE__*/function () {
    function Fr(t) {
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : void 0;
      (0, _classCallCheck2.default)(this, Fr);
      this.resourceType = "accessor";
      this.schema = t;
      this.defaultValue = r;
      this.slot = St(r);
    }
    return (0, _createClass2.default)(Fr, [{
      key: "$name",
      value: function $name(t) {
        return this.label = t, this.slot.$name(t), this;
      }
    }, {
      key: "toString",
      value: function toString() {
        var _this$label30;
        return `accessor:${(_this$label30 = this.label) != null ? _this$label30 : "<unnamed>"}`;
      }
    }, {
      key: "value",
      get: function get() {
        var _this21 = this;
        if (!(0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").j)()) throw new Error("Cannot access tgpu.accessor's value outside of resolution.");
        return new Proxy((0, _defineProperty2.default)({
          "~resolve": function resolve(r) {
            return r.resolve(_this21);
          },
          toString: function toString() {
            var _this21$label;
            return `.value:${(_this21$label = _this21.label) != null ? _this21$label : "<unnamed>"}`;
          }
        }, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").n, {
          dataType: this.schema
        }), N);
      }
    }, {
      key: "~resolve",
      value: function resolve(t) {
        var r = t.unwrap(this.slot);
        return et(r) ? t.resolve(r) : mr(r) ? `${t.resolve(r)}()` : t.resolveValue(r, this.schema);
      }
    }]);
  }();
  function $n(e) {
    return ha(e);
  }
  function ba(_ref57) {
    var _e$label4;
    var _ref58 = (0, _slicedToArray2.default)(_ref57, 2),
      e = _ref58[0],
      t = _ref58[1];
    return `${(_e$label4 = e.label) != null ? _e$label4 : "<unnamed>"}=${t}`;
  }
  function ha(e) {
    return (0, _defineProperty2.default)((0, _defineProperty2.default)(_defineAccessor("get", (0, _defineProperty2.default)({
      resourceType: "derived",
      "~compute": e
    }, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").q, void 0), "value", function () {
      var r = (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").j)();
      if (!r) throw new Error("Cannot access tgpu.derived's value outside of resolution.");
      return $e(r.unwrap(this));
    }), "with", function _with(r, n) {
      return kn(this, [[r, n]]);
    }), "toString", function toString() {
      return "derived";
    });
  }
  function kn(e, t) {
    return (0, _defineProperty2.default)((0, _defineProperty2.default)(_defineAccessor("get", (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
      resourceType: "derived"
    }, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").q, void 0), "~compute", function compute() {
      throw new Error("'~compute' should never be read on bound derived items.");
    }), "~providing", {
      inner: e,
      pairs: t
    }), "value", function () {
      var n = (0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").j)();
      if (!n) throw new Error("Cannot access tgpu.derived's value outside of resolution.");
      return $e(n.unwrap(this));
    }), "with", function _with(n, a) {
      return kn(e, [].concat((0, _toConsumableArray2.default)(t), [[n, a]]));
    }), "toString", function toString() {
      return `derived[${t.map(ba).join(", ")}]`;
    });
  }
  function On(e, t) {
    return new vt("private", e, t);
  }
  function Gn(e) {
    return new vt("workgroup", e);
  }
  var vt = /*#__PURE__*/function () {
    function vt(t, r, n) {
      (0, _classCallCheck2.default)(this, vt);
      this.scope = t;
      this._dataType = r;
      this._initialValue = n;
    }
    return (0, _createClass2.default)(vt, [{
      key: "$name",
      value: function $name(t) {
        return this._label = t, this;
      }
    }, {
      key: "~resolve",
      value: function resolve(t) {
        var r = t.names.makeUnique(this._label);
        return this._initialValue ? t.addDeclaration(`var<${this.scope}> ${r}: ${t.resolve(this._dataType)} = ${t.resolveValue(this._initialValue, this._dataType)};`) : t.addDeclaration(`var<${this.scope}> ${r}: ${t.resolve(this._dataType)};`), r;
      }
    }, {
      key: "label",
      get: function get() {
        return this._label;
      }
    }, {
      key: "toString",
      value: function toString() {
        var _this$label31;
        return `var:${(_this$label31 = this.label) != null ? _this$label31 : "<unnamed>"}`;
      }
    }, {
      key: "value",
      get: function get() {
        var _this22 = this;
        if (!(0, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").m)()) throw new Error("Cannot access tgpu.var's value directly in JS.");
        return new Proxy((0, _defineProperty2.default)({
          "~resolve": function resolve(t) {
            return t.resolve(_this22);
          },
          toString: function toString() {
            var _this22$label;
            return `.value:${(_this22$label = _this22.label) != null ? _this22$label : "<unnamed>"}`;
          }
        }, _$$_REQUIRE(_dependencyMap[1], "./chunk-KJHEEZQT.js").n, {
          dataType: this._dataType
        }), N);
      }
    }]);
  }();
  var Wn = exports.tgpu = {
      bindGroupLayout: ft,
      vertexLayout: cr,
      init: Cn,
      initFromDevice: En,
      resolve: Un,
      "~unstable": {
        fn: vn,
        fragmentFn: Fn,
        vertexFn: An,
        computeFn: Sn,
        vertexLayout: cr,
        derived: $n,
        slot: St,
        accessor: Vn,
        privateVar: On,
        workgroupVar: Gn,
        const: jr,
        declare: Kr,
        sampler: un,
        comparisonSampler: pn
      }
    },
    Nu = exports.default = Wn;
  Object.assign(Wn, {
    __assignAst: Jr,
    __removedJsImpl: Yr
  });
},1,[2,3,30,11,20,21,22,23,12,26,18,19,4,31,32,25],"../../node_modules/typegpu/index.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  }
  module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
},2,[],"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0], "@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.$ = Tt;
  exports.I = exports.H = exports.G = exports.F = exports.E = exports.D = exports.C = exports.B = exports.A = void 0;
  exports.J = st;
  exports.R = exports.Q = exports.P = exports.O = exports.N = exports.M = exports.L = exports.K = void 0;
  exports.S = _e;
  exports.T = Ie;
  exports.U = mt;
  exports.V = $e;
  exports.W = Se;
  exports.X = zt;
  exports.Y = pt;
  exports.Z = Vt;
  exports._ = gt;
  exports.a = B;
  exports.aa = bt;
  exports.b = void 0;
  exports.ba = ft;
  exports.c = void 0;
  exports.ca = vt;
  exports.d = void 0;
  exports.da = _t;
  exports.e = void 0;
  exports.ea = It;
  exports.f = void 0;
  exports.fa = At;
  exports.g = void 0;
  exports.ga = $t;
  exports.h = void 0;
  exports.i = Ce;
  exports.j = Ne;
  exports.k = Me;
  exports.l = Be;
  exports.n = exports.m = void 0;
  exports.o = Oe;
  exports.p = y;
  exports.z = exports.y = exports.x = exports.w = exports.v = exports.u = exports.t = exports.s = exports.r = exports.q = void 0;
  var _defineProperty2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1], "@babel/runtime/helpers/defineProperty"));
  var _construct2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2], "@babel/runtime/helpers/construct"));
  var _assertThisInitialized2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3], "@babel/runtime/helpers/assertThisInitialized"));
  var _toConsumableArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4], "@babel/runtime/helpers/toConsumableArray"));
  var _classCallCheck2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5], "@babel/runtime/helpers/classCallCheck"));
  var _createClass2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[6], "@babel/runtime/helpers/createClass"));
  var _possibleConstructorReturn2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[7], "@babel/runtime/helpers/possibleConstructorReturn"));
  var _getPrototypeOf2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8], "@babel/runtime/helpers/getPrototypeOf"));
  var _inherits2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9], "@babel/runtime/helpers/inherits"));
  var _wrapNativeSuper2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10], "@babel/runtime/helpers/wrapNativeSuper"));
  var _typedBinary = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11], "typed-binary"));
  function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  var M = "Invariant failed";
  function B(e, t) {
    if (e) return;
    throw new Error(M);
  }
  var q = exports.b = /*#__PURE__*/function (_Error) {
      function e(n, s) {
        var _this;
        (0, _classCallCheck2.default)(this, e);
        var i = s.map(function (h) {
          return `- ${h}`;
        });
        i.length > 20 && (i = [].concat((0, _toConsumableArray2.default)(i.slice(0, 11)), ["..."], (0, _toConsumableArray2.default)(i.slice(-10))));
        _this = _callSuper(this, e, [`Resolution of the following tree failed: 
${i.join(`
`)}: ${n && typeof n == "object" && "message" in n ? n.message : n}`]);
        _this.cause = n;
        _this.trace = s;
        Object.setPrototypeOf(_this, e.prototype);
        return _this;
      }
      (0, _inherits2.default)(e, _Error);
      return (0, _createClass2.default)(e, [{
        key: "appendToTrace",
        value: function appendToTrace(n) {
          var s = [n].concat((0, _toConsumableArray2.default)(this.trace));
          return new e(this.cause, s);
        }
      }]);
    }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error)),
    H = exports.c = /*#__PURE__*/function (_Error2) {
      function e(n) {
        var _this2;
        (0, _classCallCheck2.default)(this, e);
        _this2 = _callSuper(this, e, [`Missing value for '${n}'`]);
        _this2.slot = n;
        Object.setPrototypeOf(_this2, e.prototype);
        return _this2;
      }
      (0, _inherits2.default)(e, _Error2);
      return (0, _createClass2.default)(e);
    }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error)),
    J = exports.d = /*#__PURE__*/function (_Error3) {
      function e(t) {
        var _t$label;
        var _this3;
        (0, _classCallCheck2.default)(this, e);
        _this3 = _callSuper(this, e, [`Buffer '${(_t$label = t.label) != null ? _t$label : "<unnamed>"}' is not bindable as a uniform. Use .$usage('uniform') to allow it.`]), Object.setPrototypeOf((0, _assertThisInitialized2.default)(_this3), e.prototype);
        return _this3;
      }
      (0, _inherits2.default)(e, _Error3);
      return (0, _createClass2.default)(e);
    }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error)),
    Q = exports.e = /*#__PURE__*/function (_Error4) {
      function e(t, n) {
        var _this4;
        (0, _classCallCheck2.default)(this, e);
        _this4 = _callSuper(this, e, [`The function '${t != null ? t : "<unnamed>"}' is missing links to the following external values: ${n}.`]), Object.setPrototypeOf((0, _assertThisInitialized2.default)(_this4), e.prototype);
        return _this4;
      }
      (0, _inherits2.default)(e, _Error4);
      return (0, _createClass2.default)(e);
    }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error)),
    X = exports.f = /*#__PURE__*/function (_Error5) {
      function e(t) {
        var _this5;
        (0, _classCallCheck2.default)(this, e);
        _this5 = _callSuper(this, e, [`Missing bind groups for layouts: '${(0, _toConsumableArray2.default)(t).map(function (n) {
          var _n$label;
          return (_n$label = n.label) != null ? _n$label : "<unnamed>";
        }).join(", ")}'. Please provide it using pipeline.with(layout, bindGroup).(...)`]), Object.setPrototypeOf((0, _assertThisInitialized2.default)(_this5), e.prototype);
        return _this5;
      }
      (0, _inherits2.default)(e, _Error5);
      return (0, _createClass2.default)(e);
    }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error)),
    Y = exports.g = /*#__PURE__*/function (_Error6) {
      function e(t) {
        var _this6;
        (0, _classCallCheck2.default)(this, e);
        _this6 = _callSuper(this, e, [`Missing vertex buffers for layouts: '${(0, _toConsumableArray2.default)(t).map(function (n) {
          var _n$label2;
          return (_n$label2 = n.label) != null ? _n$label2 : "<unnamed>";
        }).join(", ")}'. Please provide it using pipeline.with(layout, buffer).(...)`]), Object.setPrototypeOf((0, _assertThisInitialized2.default)(_this6), e.prototype);
        return _this6;
      }
      (0, _inherits2.default)(e, _Error6);
      return (0, _createClass2.default)(e);
    }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
  var P = null,
    ee = Symbol("CPU"),
    te = Symbol("GPU"),
    ne = exports.h = {
      CPU: ee,
      GPU: te
    },
    k = [];
  function Ce(e, t) {
    B(P === null, "Cannot nest context providers"), P = e;
    try {
      return t();
    } finally {
      P = null;
    }
  }
  function Ne() {
    return P;
  }
  function Me(e) {
    k.push(e);
  }
  function Be(e) {
    var t = k.pop();
    e !== void 0 && B(t === e, "Unexpected mode");
  }
  var Z = exports.m = function Z() {
    return k.length > 0 && k[k.length - 1] === ne.GPU;
  };
  var r = exports.n = Symbol("internal");
  function* Oe(e) {
    var t = 0;
    for (;;) e.has(t) || (yield t), t++;
  }
  function y(e, t) {
    var n = function n() {
      return Z() ? t.apply(void 0, arguments) : e.apply(void 0, arguments);
    };
    return n[r] = !0, n;
  }
  var x = exports.q = Symbol("Type token for the inferred (CPU & GPU) representation of a resource");
  var D = /*#__PURE__*/function (_Array) {
      function D() {
        var _this7;
        (0, _classCallCheck2.default)(this, D);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this7 = _callSuper(this, D, [].concat(args));
        _this7[r] = !0;
        return _this7;
      }
      (0, _inherits2.default)(D, _Array);
      return (0, _createClass2.default)(D, [{
        key: "~resolve",
        value: function resolve() {
          return `${this.kind}(${this.join(", ")})`;
        }
      }, {
        key: "toString",
        value: function toString() {
          return this["~resolve"]();
        }
      }, {
        key: "xx",
        get: function get() {
          return new this._Vec2(this[0], this[0]);
        }
      }, {
        key: "xy",
        get: function get() {
          return new this._Vec2(this[0], this[1]);
        }
      }, {
        key: "xz",
        get: function get() {
          return new this._Vec2(this[0], this[2]);
        }
      }, {
        key: "xw",
        get: function get() {
          return new this._Vec2(this[0], this[3]);
        }
      }, {
        key: "yx",
        get: function get() {
          return new this._Vec2(this[1], this[0]);
        }
      }, {
        key: "yy",
        get: function get() {
          return new this._Vec2(this[1], this[1]);
        }
      }, {
        key: "yz",
        get: function get() {
          return new this._Vec2(this[1], this[2]);
        }
      }, {
        key: "yw",
        get: function get() {
          return new this._Vec2(this[1], this[3]);
        }
      }, {
        key: "zx",
        get: function get() {
          return new this._Vec2(this[2], this[0]);
        }
      }, {
        key: "zy",
        get: function get() {
          return new this._Vec2(this[2], this[1]);
        }
      }, {
        key: "zz",
        get: function get() {
          return new this._Vec2(this[2], this[2]);
        }
      }, {
        key: "zw",
        get: function get() {
          return new this._Vec2(this[2], this[3]);
        }
      }, {
        key: "wx",
        get: function get() {
          return new this._Vec2(this[3], this[0]);
        }
      }, {
        key: "wy",
        get: function get() {
          return new this._Vec2(this[3], this[1]);
        }
      }, {
        key: "wz",
        get: function get() {
          return new this._Vec2(this[3], this[2]);
        }
      }, {
        key: "ww",
        get: function get() {
          return new this._Vec2(this[3], this[3]);
        }
      }, {
        key: "xxx",
        get: function get() {
          return new this._Vec3(this[0], this[0], this[0]);
        }
      }, {
        key: "xxy",
        get: function get() {
          return new this._Vec3(this[0], this[0], this[1]);
        }
      }, {
        key: "xxz",
        get: function get() {
          return new this._Vec3(this[0], this[0], this[2]);
        }
      }, {
        key: "xxw",
        get: function get() {
          return new this._Vec3(this[0], this[0], this[3]);
        }
      }, {
        key: "xyx",
        get: function get() {
          return new this._Vec3(this[0], this[1], this[0]);
        }
      }, {
        key: "xyy",
        get: function get() {
          return new this._Vec3(this[0], this[1], this[1]);
        }
      }, {
        key: "xyz",
        get: function get() {
          return new this._Vec3(this[0], this[1], this[2]);
        }
      }, {
        key: "xyw",
        get: function get() {
          return new this._Vec3(this[0], this[1], this[3]);
        }
      }, {
        key: "xzx",
        get: function get() {
          return new this._Vec3(this[0], this[2], this[0]);
        }
      }, {
        key: "xzy",
        get: function get() {
          return new this._Vec3(this[0], this[2], this[1]);
        }
      }, {
        key: "xzz",
        get: function get() {
          return new this._Vec3(this[0], this[2], this[2]);
        }
      }, {
        key: "xzw",
        get: function get() {
          return new this._Vec3(this[0], this[2], this[3]);
        }
      }, {
        key: "xwx",
        get: function get() {
          return new this._Vec3(this[0], this[3], this[0]);
        }
      }, {
        key: "xwy",
        get: function get() {
          return new this._Vec3(this[0], this[3], this[1]);
        }
      }, {
        key: "xwz",
        get: function get() {
          return new this._Vec3(this[0], this[3], this[2]);
        }
      }, {
        key: "xww",
        get: function get() {
          return new this._Vec3(this[0], this[3], this[3]);
        }
      }, {
        key: "yxx",
        get: function get() {
          return new this._Vec3(this[1], this[0], this[0]);
        }
      }, {
        key: "yxy",
        get: function get() {
          return new this._Vec3(this[1], this[0], this[1]);
        }
      }, {
        key: "yxz",
        get: function get() {
          return new this._Vec3(this[1], this[0], this[2]);
        }
      }, {
        key: "yxw",
        get: function get() {
          return new this._Vec3(this[1], this[0], this[3]);
        }
      }, {
        key: "yyx",
        get: function get() {
          return new this._Vec3(this[1], this[1], this[0]);
        }
      }, {
        key: "yyy",
        get: function get() {
          return new this._Vec3(this[1], this[1], this[1]);
        }
      }, {
        key: "yyz",
        get: function get() {
          return new this._Vec3(this[1], this[1], this[2]);
        }
      }, {
        key: "yyw",
        get: function get() {
          return new this._Vec3(this[1], this[1], this[3]);
        }
      }, {
        key: "yzx",
        get: function get() {
          return new this._Vec3(this[1], this[2], this[0]);
        }
      }, {
        key: "yzy",
        get: function get() {
          return new this._Vec3(this[1], this[2], this[1]);
        }
      }, {
        key: "yzz",
        get: function get() {
          return new this._Vec3(this[1], this[2], this[2]);
        }
      }, {
        key: "yzw",
        get: function get() {
          return new this._Vec3(this[1], this[2], this[3]);
        }
      }, {
        key: "ywx",
        get: function get() {
          return new this._Vec3(this[1], this[3], this[0]);
        }
      }, {
        key: "ywy",
        get: function get() {
          return new this._Vec3(this[1], this[3], this[1]);
        }
      }, {
        key: "ywz",
        get: function get() {
          return new this._Vec3(this[1], this[3], this[2]);
        }
      }, {
        key: "yww",
        get: function get() {
          return new this._Vec3(this[1], this[3], this[3]);
        }
      }, {
        key: "zxx",
        get: function get() {
          return new this._Vec3(this[2], this[0], this[0]);
        }
      }, {
        key: "zxy",
        get: function get() {
          return new this._Vec3(this[2], this[0], this[1]);
        }
      }, {
        key: "zxz",
        get: function get() {
          return new this._Vec3(this[2], this[0], this[2]);
        }
      }, {
        key: "zxw",
        get: function get() {
          return new this._Vec3(this[2], this[0], this[3]);
        }
      }, {
        key: "zyx",
        get: function get() {
          return new this._Vec3(this[2], this[1], this[0]);
        }
      }, {
        key: "zyy",
        get: function get() {
          return new this._Vec3(this[2], this[1], this[1]);
        }
      }, {
        key: "zyz",
        get: function get() {
          return new this._Vec3(this[2], this[1], this[2]);
        }
      }, {
        key: "zyw",
        get: function get() {
          return new this._Vec3(this[2], this[1], this[3]);
        }
      }, {
        key: "zzx",
        get: function get() {
          return new this._Vec3(this[2], this[2], this[0]);
        }
      }, {
        key: "zzy",
        get: function get() {
          return new this._Vec3(this[2], this[2], this[1]);
        }
      }, {
        key: "zzz",
        get: function get() {
          return new this._Vec3(this[2], this[2], this[2]);
        }
      }, {
        key: "zzw",
        get: function get() {
          return new this._Vec3(this[2], this[2], this[3]);
        }
      }, {
        key: "zwx",
        get: function get() {
          return new this._Vec3(this[2], this[3], this[0]);
        }
      }, {
        key: "zwy",
        get: function get() {
          return new this._Vec3(this[2], this[3], this[1]);
        }
      }, {
        key: "zwz",
        get: function get() {
          return new this._Vec3(this[2], this[3], this[2]);
        }
      }, {
        key: "zww",
        get: function get() {
          return new this._Vec3(this[2], this[3], this[3]);
        }
      }, {
        key: "wxx",
        get: function get() {
          return new this._Vec3(this[3], this[0], this[0]);
        }
      }, {
        key: "wxy",
        get: function get() {
          return new this._Vec3(this[3], this[0], this[1]);
        }
      }, {
        key: "wxz",
        get: function get() {
          return new this._Vec3(this[3], this[0], this[2]);
        }
      }, {
        key: "wxw",
        get: function get() {
          return new this._Vec3(this[3], this[0], this[3]);
        }
      }, {
        key: "wyx",
        get: function get() {
          return new this._Vec3(this[3], this[1], this[0]);
        }
      }, {
        key: "wyy",
        get: function get() {
          return new this._Vec3(this[3], this[1], this[1]);
        }
      }, {
        key: "wyz",
        get: function get() {
          return new this._Vec3(this[3], this[1], this[2]);
        }
      }, {
        key: "wyw",
        get: function get() {
          return new this._Vec3(this[3], this[1], this[3]);
        }
      }, {
        key: "wzx",
        get: function get() {
          return new this._Vec3(this[3], this[2], this[0]);
        }
      }, {
        key: "wzy",
        get: function get() {
          return new this._Vec3(this[3], this[2], this[1]);
        }
      }, {
        key: "wzz",
        get: function get() {
          return new this._Vec3(this[3], this[2], this[2]);
        }
      }, {
        key: "wzw",
        get: function get() {
          return new this._Vec3(this[3], this[2], this[3]);
        }
      }, {
        key: "wwx",
        get: function get() {
          return new this._Vec3(this[3], this[3], this[0]);
        }
      }, {
        key: "wwy",
        get: function get() {
          return new this._Vec3(this[3], this[3], this[1]);
        }
      }, {
        key: "wwz",
        get: function get() {
          return new this._Vec3(this[3], this[3], this[2]);
        }
      }, {
        key: "www",
        get: function get() {
          return new this._Vec3(this[3], this[3], this[3]);
        }
      }, {
        key: "xxxx",
        get: function get() {
          return new this._Vec4(this[0], this[0], this[0], this[0]);
        }
      }, {
        key: "xxxy",
        get: function get() {
          return new this._Vec4(this[0], this[0], this[0], this[1]);
        }
      }, {
        key: "xxxz",
        get: function get() {
          return new this._Vec4(this[0], this[0], this[0], this[2]);
        }
      }, {
        key: "xxxw",
        get: function get() {
          return new this._Vec4(this[0], this[0], this[0], this[3]);
        }
      }, {
        key: "xxyx",
        get: function get() {
          return new this._Vec4(this[0], this[0], this[1], this[0]);
        }
      }, {
        key: "xxyy",
        get: function get() {
          return new this._Vec4(this[0], this[0], this[1], this[1]);
        }
      }, {
        key: "xxyz",
        get: function get() {
          return new this._Vec4(this[0], this[0], this[1], this[2]);
        }
      }, {
        key: "xxyw",
        get: function get() {
          return new this._Vec4(this[0], this[0], this[1], this[3]);
        }
      }, {
        key: "xxzx",
        get: function get() {
          return new this._Vec4(this[0], this[0], this[2], this[0]);
        }
      }, {
        key: "xxzy",
        get: function get() {
          return new this._Vec4(this[0], this[0], this[2], this[1]);
        }
      }, {
        key: "xxzz",
        get: function get() {
          return new this._Vec4(this[0], this[0], this[2], this[2]);
        }
      }, {
        key: "xxzw",
        get: function get() {
          return new this._Vec4(this[0], this[0], this[2], this[3]);
        }
      }, {
        key: "xxwx",
        get: function get() {
          return new this._Vec4(this[0], this[0], this[3], this[0]);
        }
      }, {
        key: "xxwy",
        get: function get() {
          return new this._Vec4(this[0], this[0], this[3], this[1]);
        }
      }, {
        key: "xxwz",
        get: function get() {
          return new this._Vec4(this[0], this[0], this[3], this[2]);
        }
      }, {
        key: "xxww",
        get: function get() {
          return new this._Vec4(this[0], this[0], this[3], this[3]);
        }
      }, {
        key: "xyxx",
        get: function get() {
          return new this._Vec4(this[0], this[1], this[0], this[0]);
        }
      }, {
        key: "xyxy",
        get: function get() {
          return new this._Vec4(this[0], this[1], this[0], this[1]);
        }
      }, {
        key: "xyxz",
        get: function get() {
          return new this._Vec4(this[0], this[1], this[0], this[2]);
        }
      }, {
        key: "xyxw",
        get: function get() {
          return new this._Vec4(this[0], this[1], this[0], this[3]);
        }
      }, {
        key: "xyyx",
        get: function get() {
          return new this._Vec4(this[0], this[1], this[1], this[0]);
        }
      }, {
        key: "xyyy",
        get: function get() {
          return new this._Vec4(this[0], this[1], this[1], this[1]);
        }
      }, {
        key: "xyyz",
        get: function get() {
          return new this._Vec4(this[0], this[1], this[1], this[2]);
        }
      }, {
        key: "xyyw",
        get: function get() {
          return new this._Vec4(this[0], this[1], this[1], this[3]);
        }
      }, {
        key: "xyzx",
        get: function get() {
          return new this._Vec4(this[0], this[1], this[2], this[0]);
        }
      }, {
        key: "xyzy",
        get: function get() {
          return new this._Vec4(this[0], this[1], this[2], this[1]);
        }
      }, {
        key: "xyzz",
        get: function get() {
          return new this._Vec4(this[0], this[1], this[2], this[2]);
        }
      }, {
        key: "xyzw",
        get: function get() {
          return new this._Vec4(this[0], this[1], this[2], this[3]);
        }
      }, {
        key: "xywx",
        get: function get() {
          return new this._Vec4(this[0], this[1], this[3], this[0]);
        }
      }, {
        key: "xywy",
        get: function get() {
          return new this._Vec4(this[0], this[1], this[3], this[1]);
        }
      }, {
        key: "xywz",
        get: function get() {
          return new this._Vec4(this[0], this[1], this[3], this[2]);
        }
      }, {
        key: "xyww",
        get: function get() {
          return new this._Vec4(this[0], this[1], this[3], this[3]);
        }
      }, {
        key: "xzxx",
        get: function get() {
          return new this._Vec4(this[0], this[2], this[0], this[0]);
        }
      }, {
        key: "xzxy",
        get: function get() {
          return new this._Vec4(this[0], this[2], this[0], this[1]);
        }
      }, {
        key: "xzxz",
        get: function get() {
          return new this._Vec4(this[0], this[2], this[0], this[2]);
        }
      }, {
        key: "xzxw",
        get: function get() {
          return new this._Vec4(this[0], this[2], this[0], this[3]);
        }
      }, {
        key: "xzyx",
        get: function get() {
          return new this._Vec4(this[0], this[2], this[1], this[0]);
        }
      }, {
        key: "xzyy",
        get: function get() {
          return new this._Vec4(this[0], this[2], this[1], this[1]);
        }
      }, {
        key: "xzyz",
        get: function get() {
          return new this._Vec4(this[0], this[2], this[1], this[2]);
        }
      }, {
        key: "xzyw",
        get: function get() {
          return new this._Vec4(this[0], this[2], this[1], this[3]);
        }
      }, {
        key: "xzzx",
        get: function get() {
          return new this._Vec4(this[0], this[2], this[2], this[0]);
        }
      }, {
        key: "xzzy",
        get: function get() {
          return new this._Vec4(this[0], this[2], this[2], this[1]);
        }
      }, {
        key: "xzzz",
        get: function get() {
          return new this._Vec4(this[0], this[2], this[2], this[2]);
        }
      }, {
        key: "xzzw",
        get: function get() {
          return new this._Vec4(this[0], this[2], this[2], this[3]);
        }
      }, {
        key: "xzwx",
        get: function get() {
          return new this._Vec4(this[0], this[2], this[3], this[0]);
        }
      }, {
        key: "xzwy",
        get: function get() {
          return new this._Vec4(this[0], this[2], this[3], this[1]);
        }
      }, {
        key: "xzwz",
        get: function get() {
          return new this._Vec4(this[0], this[2], this[3], this[2]);
        }
      }, {
        key: "xzww",
        get: function get() {
          return new this._Vec4(this[0], this[2], this[3], this[3]);
        }
      }, {
        key: "xwxx",
        get: function get() {
          return new this._Vec4(this[0], this[3], this[0], this[0]);
        }
      }, {
        key: "xwxy",
        get: function get() {
          return new this._Vec4(this[0], this[3], this[0], this[1]);
        }
      }, {
        key: "xwxz",
        get: function get() {
          return new this._Vec4(this[0], this[3], this[0], this[2]);
        }
      }, {
        key: "xwxw",
        get: function get() {
          return new this._Vec4(this[0], this[3], this[0], this[3]);
        }
      }, {
        key: "xwyx",
        get: function get() {
          return new this._Vec4(this[0], this[3], this[1], this[0]);
        }
      }, {
        key: "xwyy",
        get: function get() {
          return new this._Vec4(this[0], this[3], this[1], this[1]);
        }
      }, {
        key: "xwyz",
        get: function get() {
          return new this._Vec4(this[0], this[3], this[1], this[2]);
        }
      }, {
        key: "xwyw",
        get: function get() {
          return new this._Vec4(this[0], this[3], this[1], this[3]);
        }
      }, {
        key: "xwzx",
        get: function get() {
          return new this._Vec4(this[0], this[3], this[2], this[0]);
        }
      }, {
        key: "xwzy",
        get: function get() {
          return new this._Vec4(this[0], this[3], this[2], this[1]);
        }
      }, {
        key: "xwzz",
        get: function get() {
          return new this._Vec4(this[0], this[3], this[2], this[2]);
        }
      }, {
        key: "xwzw",
        get: function get() {
          return new this._Vec4(this[0], this[3], this[2], this[3]);
        }
      }, {
        key: "xwwx",
        get: function get() {
          return new this._Vec4(this[0], this[3], this[3], this[0]);
        }
      }, {
        key: "xwwy",
        get: function get() {
          return new this._Vec4(this[0], this[3], this[3], this[1]);
        }
      }, {
        key: "xwwz",
        get: function get() {
          return new this._Vec4(this[0], this[3], this[3], this[2]);
        }
      }, {
        key: "xwww",
        get: function get() {
          return new this._Vec4(this[0], this[3], this[3], this[3]);
        }
      }, {
        key: "yxxx",
        get: function get() {
          return new this._Vec4(this[1], this[0], this[0], this[0]);
        }
      }, {
        key: "yxxy",
        get: function get() {
          return new this._Vec4(this[1], this[0], this[0], this[1]);
        }
      }, {
        key: "yxxz",
        get: function get() {
          return new this._Vec4(this[1], this[0], this[0], this[2]);
        }
      }, {
        key: "yxxw",
        get: function get() {
          return new this._Vec4(this[1], this[0], this[0], this[3]);
        }
      }, {
        key: "yxyx",
        get: function get() {
          return new this._Vec4(this[1], this[0], this[1], this[0]);
        }
      }, {
        key: "yxyy",
        get: function get() {
          return new this._Vec4(this[1], this[0], this[1], this[1]);
        }
      }, {
        key: "yxyz",
        get: function get() {
          return new this._Vec4(this[1], this[0], this[1], this[2]);
        }
      }, {
        key: "yxyw",
        get: function get() {
          return new this._Vec4(this[1], this[0], this[1], this[3]);
        }
      }, {
        key: "yxzx",
        get: function get() {
          return new this._Vec4(this[1], this[0], this[2], this[0]);
        }
      }, {
        key: "yxzy",
        get: function get() {
          return new this._Vec4(this[1], this[0], this[2], this[1]);
        }
      }, {
        key: "yxzz",
        get: function get() {
          return new this._Vec4(this[1], this[0], this[2], this[2]);
        }
      }, {
        key: "yxzw",
        get: function get() {
          return new this._Vec4(this[1], this[0], this[2], this[3]);
        }
      }, {
        key: "yxwx",
        get: function get() {
          return new this._Vec4(this[1], this[0], this[3], this[0]);
        }
      }, {
        key: "yxwy",
        get: function get() {
          return new this._Vec4(this[1], this[0], this[3], this[1]);
        }
      }, {
        key: "yxwz",
        get: function get() {
          return new this._Vec4(this[1], this[0], this[3], this[2]);
        }
      }, {
        key: "yxww",
        get: function get() {
          return new this._Vec4(this[1], this[0], this[3], this[3]);
        }
      }, {
        key: "yyxx",
        get: function get() {
          return new this._Vec4(this[1], this[1], this[0], this[0]);
        }
      }, {
        key: "yyxy",
        get: function get() {
          return new this._Vec4(this[1], this[1], this[0], this[1]);
        }
      }, {
        key: "yyxz",
        get: function get() {
          return new this._Vec4(this[1], this[1], this[0], this[2]);
        }
      }, {
        key: "yyxw",
        get: function get() {
          return new this._Vec4(this[1], this[1], this[0], this[3]);
        }
      }, {
        key: "yyyx",
        get: function get() {
          return new this._Vec4(this[1], this[1], this[1], this[0]);
        }
      }, {
        key: "yyyy",
        get: function get() {
          return new this._Vec4(this[1], this[1], this[1], this[1]);
        }
      }, {
        key: "yyyz",
        get: function get() {
          return new this._Vec4(this[1], this[1], this[1], this[2]);
        }
      }, {
        key: "yyyw",
        get: function get() {
          return new this._Vec4(this[1], this[1], this[1], this[3]);
        }
      }, {
        key: "yyzx",
        get: function get() {
          return new this._Vec4(this[1], this[1], this[2], this[0]);
        }
      }, {
        key: "yyzy",
        get: function get() {
          return new this._Vec4(this[1], this[1], this[2], this[1]);
        }
      }, {
        key: "yyzz",
        get: function get() {
          return new this._Vec4(this[1], this[1], this[2], this[2]);
        }
      }, {
        key: "yyzw",
        get: function get() {
          return new this._Vec4(this[1], this[1], this[2], this[3]);
        }
      }, {
        key: "yywx",
        get: function get() {
          return new this._Vec4(this[1], this[1], this[3], this[0]);
        }
      }, {
        key: "yywy",
        get: function get() {
          return new this._Vec4(this[1], this[1], this[3], this[1]);
        }
      }, {
        key: "yywz",
        get: function get() {
          return new this._Vec4(this[1], this[1], this[3], this[2]);
        }
      }, {
        key: "yyww",
        get: function get() {
          return new this._Vec4(this[1], this[1], this[3], this[3]);
        }
      }, {
        key: "yzxx",
        get: function get() {
          return new this._Vec4(this[1], this[2], this[0], this[0]);
        }
      }, {
        key: "yzxy",
        get: function get() {
          return new this._Vec4(this[1], this[2], this[0], this[1]);
        }
      }, {
        key: "yzxz",
        get: function get() {
          return new this._Vec4(this[1], this[2], this[0], this[2]);
        }
      }, {
        key: "yzxw",
        get: function get() {
          return new this._Vec4(this[1], this[2], this[0], this[3]);
        }
      }, {
        key: "yzyx",
        get: function get() {
          return new this._Vec4(this[1], this[2], this[1], this[0]);
        }
      }, {
        key: "yzyy",
        get: function get() {
          return new this._Vec4(this[1], this[2], this[1], this[1]);
        }
      }, {
        key: "yzyz",
        get: function get() {
          return new this._Vec4(this[1], this[2], this[1], this[2]);
        }
      }, {
        key: "yzyw",
        get: function get() {
          return new this._Vec4(this[1], this[2], this[1], this[3]);
        }
      }, {
        key: "yzzx",
        get: function get() {
          return new this._Vec4(this[1], this[2], this[2], this[0]);
        }
      }, {
        key: "yzzy",
        get: function get() {
          return new this._Vec4(this[1], this[2], this[2], this[1]);
        }
      }, {
        key: "yzzz",
        get: function get() {
          return new this._Vec4(this[1], this[2], this[2], this[2]);
        }
      }, {
        key: "yzzw",
        get: function get() {
          return new this._Vec4(this[1], this[2], this[2], this[3]);
        }
      }, {
        key: "yzwx",
        get: function get() {
          return new this._Vec4(this[1], this[2], this[3], this[0]);
        }
      }, {
        key: "yzwy",
        get: function get() {
          return new this._Vec4(this[1], this[2], this[3], this[1]);
        }
      }, {
        key: "yzwz",
        get: function get() {
          return new this._Vec4(this[1], this[2], this[3], this[2]);
        }
      }, {
        key: "yzww",
        get: function get() {
          return new this._Vec4(this[1], this[2], this[3], this[3]);
        }
      }, {
        key: "ywxx",
        get: function get() {
          return new this._Vec4(this[1], this[3], this[0], this[0]);
        }
      }, {
        key: "ywxy",
        get: function get() {
          return new this._Vec4(this[1], this[3], this[0], this[1]);
        }
      }, {
        key: "ywxz",
        get: function get() {
          return new this._Vec4(this[1], this[3], this[0], this[2]);
        }
      }, {
        key: "ywxw",
        get: function get() {
          return new this._Vec4(this[1], this[3], this[0], this[3]);
        }
      }, {
        key: "ywyx",
        get: function get() {
          return new this._Vec4(this[1], this[3], this[1], this[0]);
        }
      }, {
        key: "ywyy",
        get: function get() {
          return new this._Vec4(this[1], this[3], this[1], this[1]);
        }
      }, {
        key: "ywyz",
        get: function get() {
          return new this._Vec4(this[1], this[3], this[1], this[2]);
        }
      }, {
        key: "ywyw",
        get: function get() {
          return new this._Vec4(this[1], this[3], this[1], this[3]);
        }
      }, {
        key: "ywzx",
        get: function get() {
          return new this._Vec4(this[1], this[3], this[2], this[0]);
        }
      }, {
        key: "ywzy",
        get: function get() {
          return new this._Vec4(this[1], this[3], this[2], this[1]);
        }
      }, {
        key: "ywzz",
        get: function get() {
          return new this._Vec4(this[1], this[3], this[2], this[2]);
        }
      }, {
        key: "ywzw",
        get: function get() {
          return new this._Vec4(this[1], this[3], this[2], this[3]);
        }
      }, {
        key: "ywwx",
        get: function get() {
          return new this._Vec4(this[1], this[3], this[3], this[0]);
        }
      }, {
        key: "ywwy",
        get: function get() {
          return new this._Vec4(this[1], this[3], this[3], this[1]);
        }
      }, {
        key: "ywwz",
        get: function get() {
          return new this._Vec4(this[1], this[3], this[3], this[2]);
        }
      }, {
        key: "ywww",
        get: function get() {
          return new this._Vec4(this[1], this[3], this[3], this[3]);
        }
      }, {
        key: "zxxx",
        get: function get() {
          return new this._Vec4(this[2], this[0], this[0], this[0]);
        }
      }, {
        key: "zxxy",
        get: function get() {
          return new this._Vec4(this[2], this[0], this[0], this[1]);
        }
      }, {
        key: "zxxz",
        get: function get() {
          return new this._Vec4(this[2], this[0], this[0], this[2]);
        }
      }, {
        key: "zxxw",
        get: function get() {
          return new this._Vec4(this[2], this[0], this[0], this[3]);
        }
      }, {
        key: "zxyx",
        get: function get() {
          return new this._Vec4(this[2], this[0], this[1], this[0]);
        }
      }, {
        key: "zxyy",
        get: function get() {
          return new this._Vec4(this[2], this[0], this[1], this[1]);
        }
      }, {
        key: "zxyz",
        get: function get() {
          return new this._Vec4(this[2], this[0], this[1], this[2]);
        }
      }, {
        key: "zxyw",
        get: function get() {
          return new this._Vec4(this[2], this[0], this[1], this[3]);
        }
      }, {
        key: "zxzx",
        get: function get() {
          return new this._Vec4(this[2], this[0], this[2], this[0]);
        }
      }, {
        key: "zxzy",
        get: function get() {
          return new this._Vec4(this[2], this[0], this[2], this[1]);
        }
      }, {
        key: "zxzz",
        get: function get() {
          return new this._Vec4(this[2], this[0], this[2], this[2]);
        }
      }, {
        key: "zxzw",
        get: function get() {
          return new this._Vec4(this[2], this[0], this[2], this[3]);
        }
      }, {
        key: "zxwx",
        get: function get() {
          return new this._Vec4(this[2], this[0], this[3], this[0]);
        }
      }, {
        key: "zxwy",
        get: function get() {
          return new this._Vec4(this[2], this[0], this[3], this[1]);
        }
      }, {
        key: "zxwz",
        get: function get() {
          return new this._Vec4(this[2], this[0], this[3], this[2]);
        }
      }, {
        key: "zxww",
        get: function get() {
          return new this._Vec4(this[2], this[0], this[3], this[3]);
        }
      }, {
        key: "zyxx",
        get: function get() {
          return new this._Vec4(this[2], this[1], this[0], this[0]);
        }
      }, {
        key: "zyxy",
        get: function get() {
          return new this._Vec4(this[2], this[1], this[0], this[1]);
        }
      }, {
        key: "zyxz",
        get: function get() {
          return new this._Vec4(this[2], this[1], this[0], this[2]);
        }
      }, {
        key: "zyxw",
        get: function get() {
          return new this._Vec4(this[2], this[1], this[0], this[3]);
        }
      }, {
        key: "zyyx",
        get: function get() {
          return new this._Vec4(this[2], this[1], this[1], this[0]);
        }
      }, {
        key: "zyyy",
        get: function get() {
          return new this._Vec4(this[2], this[1], this[1], this[1]);
        }
      }, {
        key: "zyyz",
        get: function get() {
          return new this._Vec4(this[2], this[1], this[1], this[2]);
        }
      }, {
        key: "zyyw",
        get: function get() {
          return new this._Vec4(this[2], this[1], this[1], this[3]);
        }
      }, {
        key: "zyzx",
        get: function get() {
          return new this._Vec4(this[2], this[1], this[2], this[0]);
        }
      }, {
        key: "zyzy",
        get: function get() {
          return new this._Vec4(this[2], this[1], this[2], this[1]);
        }
      }, {
        key: "zyzz",
        get: function get() {
          return new this._Vec4(this[2], this[1], this[2], this[2]);
        }
      }, {
        key: "zyzw",
        get: function get() {
          return new this._Vec4(this[2], this[1], this[2], this[3]);
        }
      }, {
        key: "zywx",
        get: function get() {
          return new this._Vec4(this[2], this[1], this[3], this[0]);
        }
      }, {
        key: "zywy",
        get: function get() {
          return new this._Vec4(this[2], this[1], this[3], this[1]);
        }
      }, {
        key: "zywz",
        get: function get() {
          return new this._Vec4(this[2], this[1], this[3], this[2]);
        }
      }, {
        key: "zyww",
        get: function get() {
          return new this._Vec4(this[2], this[1], this[3], this[3]);
        }
      }, {
        key: "zzxx",
        get: function get() {
          return new this._Vec4(this[2], this[2], this[0], this[0]);
        }
      }, {
        key: "zzxy",
        get: function get() {
          return new this._Vec4(this[2], this[2], this[0], this[1]);
        }
      }, {
        key: "zzxz",
        get: function get() {
          return new this._Vec4(this[2], this[2], this[0], this[2]);
        }
      }, {
        key: "zzxw",
        get: function get() {
          return new this._Vec4(this[2], this[2], this[0], this[3]);
        }
      }, {
        key: "zzyx",
        get: function get() {
          return new this._Vec4(this[2], this[2], this[1], this[0]);
        }
      }, {
        key: "zzyy",
        get: function get() {
          return new this._Vec4(this[2], this[2], this[1], this[1]);
        }
      }, {
        key: "zzyz",
        get: function get() {
          return new this._Vec4(this[2], this[2], this[1], this[2]);
        }
      }, {
        key: "zzyw",
        get: function get() {
          return new this._Vec4(this[2], this[2], this[1], this[3]);
        }
      }, {
        key: "zzzx",
        get: function get() {
          return new this._Vec4(this[2], this[2], this[2], this[0]);
        }
      }, {
        key: "zzzy",
        get: function get() {
          return new this._Vec4(this[2], this[2], this[2], this[1]);
        }
      }, {
        key: "zzzz",
        get: function get() {
          return new this._Vec4(this[2], this[2], this[2], this[2]);
        }
      }, {
        key: "zzzw",
        get: function get() {
          return new this._Vec4(this[2], this[2], this[2], this[3]);
        }
      }, {
        key: "zzwx",
        get: function get() {
          return new this._Vec4(this[2], this[2], this[3], this[0]);
        }
      }, {
        key: "zzwy",
        get: function get() {
          return new this._Vec4(this[2], this[2], this[3], this[1]);
        }
      }, {
        key: "zzwz",
        get: function get() {
          return new this._Vec4(this[2], this[2], this[3], this[2]);
        }
      }, {
        key: "zzww",
        get: function get() {
          return new this._Vec4(this[2], this[2], this[3], this[3]);
        }
      }, {
        key: "zwxx",
        get: function get() {
          return new this._Vec4(this[2], this[3], this[0], this[0]);
        }
      }, {
        key: "zwxy",
        get: function get() {
          return new this._Vec4(this[2], this[3], this[0], this[1]);
        }
      }, {
        key: "zwxz",
        get: function get() {
          return new this._Vec4(this[2], this[3], this[0], this[2]);
        }
      }, {
        key: "zwxw",
        get: function get() {
          return new this._Vec4(this[2], this[3], this[0], this[3]);
        }
      }, {
        key: "zwyx",
        get: function get() {
          return new this._Vec4(this[2], this[3], this[1], this[0]);
        }
      }, {
        key: "zwyy",
        get: function get() {
          return new this._Vec4(this[2], this[3], this[1], this[1]);
        }
      }, {
        key: "zwyz",
        get: function get() {
          return new this._Vec4(this[2], this[3], this[1], this[2]);
        }
      }, {
        key: "zwyw",
        get: function get() {
          return new this._Vec4(this[2], this[3], this[1], this[3]);
        }
      }, {
        key: "zwzx",
        get: function get() {
          return new this._Vec4(this[2], this[3], this[2], this[0]);
        }
      }, {
        key: "zwzy",
        get: function get() {
          return new this._Vec4(this[2], this[3], this[2], this[1]);
        }
      }, {
        key: "zwzz",
        get: function get() {
          return new this._Vec4(this[2], this[3], this[2], this[2]);
        }
      }, {
        key: "zwzw",
        get: function get() {
          return new this._Vec4(this[2], this[3], this[2], this[3]);
        }
      }, {
        key: "zwwx",
        get: function get() {
          return new this._Vec4(this[2], this[3], this[3], this[0]);
        }
      }, {
        key: "zwwy",
        get: function get() {
          return new this._Vec4(this[2], this[3], this[3], this[1]);
        }
      }, {
        key: "zwwz",
        get: function get() {
          return new this._Vec4(this[2], this[3], this[3], this[2]);
        }
      }, {
        key: "zwww",
        get: function get() {
          return new this._Vec4(this[2], this[3], this[3], this[3]);
        }
      }, {
        key: "wxxx",
        get: function get() {
          return new this._Vec4(this[3], this[0], this[0], this[0]);
        }
      }, {
        key: "wxxy",
        get: function get() {
          return new this._Vec4(this[3], this[0], this[0], this[1]);
        }
      }, {
        key: "wxxz",
        get: function get() {
          return new this._Vec4(this[3], this[0], this[0], this[2]);
        }
      }, {
        key: "wxxw",
        get: function get() {
          return new this._Vec4(this[3], this[0], this[0], this[3]);
        }
      }, {
        key: "wxyx",
        get: function get() {
          return new this._Vec4(this[3], this[0], this[1], this[0]);
        }
      }, {
        key: "wxyy",
        get: function get() {
          return new this._Vec4(this[3], this[0], this[1], this[1]);
        }
      }, {
        key: "wxyz",
        get: function get() {
          return new this._Vec4(this[3], this[0], this[1], this[2]);
        }
      }, {
        key: "wxyw",
        get: function get() {
          return new this._Vec4(this[3], this[0], this[1], this[3]);
        }
      }, {
        key: "wxzx",
        get: function get() {
          return new this._Vec4(this[3], this[0], this[2], this[0]);
        }
      }, {
        key: "wxzy",
        get: function get() {
          return new this._Vec4(this[3], this[0], this[2], this[1]);
        }
      }, {
        key: "wxzz",
        get: function get() {
          return new this._Vec4(this[3], this[0], this[2], this[2]);
        }
      }, {
        key: "wxzw",
        get: function get() {
          return new this._Vec4(this[3], this[0], this[2], this[3]);
        }
      }, {
        key: "wxwx",
        get: function get() {
          return new this._Vec4(this[3], this[0], this[3], this[0]);
        }
      }, {
        key: "wxwy",
        get: function get() {
          return new this._Vec4(this[3], this[0], this[3], this[1]);
        }
      }, {
        key: "wxwz",
        get: function get() {
          return new this._Vec4(this[3], this[0], this[3], this[2]);
        }
      }, {
        key: "wxww",
        get: function get() {
          return new this._Vec4(this[3], this[0], this[3], this[3]);
        }
      }, {
        key: "wyxx",
        get: function get() {
          return new this._Vec4(this[3], this[1], this[0], this[0]);
        }
      }, {
        key: "wyxy",
        get: function get() {
          return new this._Vec4(this[3], this[1], this[0], this[1]);
        }
      }, {
        key: "wyxz",
        get: function get() {
          return new this._Vec4(this[3], this[1], this[0], this[2]);
        }
      }, {
        key: "wyxw",
        get: function get() {
          return new this._Vec4(this[3], this[1], this[0], this[3]);
        }
      }, {
        key: "wyyx",
        get: function get() {
          return new this._Vec4(this[3], this[1], this[1], this[0]);
        }
      }, {
        key: "wyyy",
        get: function get() {
          return new this._Vec4(this[3], this[1], this[1], this[1]);
        }
      }, {
        key: "wyyz",
        get: function get() {
          return new this._Vec4(this[3], this[1], this[1], this[2]);
        }
      }, {
        key: "wyyw",
        get: function get() {
          return new this._Vec4(this[3], this[1], this[1], this[3]);
        }
      }, {
        key: "wyzx",
        get: function get() {
          return new this._Vec4(this[3], this[1], this[2], this[0]);
        }
      }, {
        key: "wyzy",
        get: function get() {
          return new this._Vec4(this[3], this[1], this[2], this[1]);
        }
      }, {
        key: "wyzz",
        get: function get() {
          return new this._Vec4(this[3], this[1], this[2], this[2]);
        }
      }, {
        key: "wyzw",
        get: function get() {
          return new this._Vec4(this[3], this[1], this[2], this[3]);
        }
      }, {
        key: "wywx",
        get: function get() {
          return new this._Vec4(this[3], this[1], this[3], this[0]);
        }
      }, {
        key: "wywy",
        get: function get() {
          return new this._Vec4(this[3], this[1], this[3], this[1]);
        }
      }, {
        key: "wywz",
        get: function get() {
          return new this._Vec4(this[3], this[1], this[3], this[2]);
        }
      }, {
        key: "wyww",
        get: function get() {
          return new this._Vec4(this[3], this[1], this[3], this[3]);
        }
      }, {
        key: "wzxx",
        get: function get() {
          return new this._Vec4(this[3], this[2], this[0], this[0]);
        }
      }, {
        key: "wzxy",
        get: function get() {
          return new this._Vec4(this[3], this[2], this[0], this[1]);
        }
      }, {
        key: "wzxz",
        get: function get() {
          return new this._Vec4(this[3], this[2], this[0], this[2]);
        }
      }, {
        key: "wzxw",
        get: function get() {
          return new this._Vec4(this[3], this[2], this[0], this[3]);
        }
      }, {
        key: "wzyx",
        get: function get() {
          return new this._Vec4(this[3], this[2], this[1], this[0]);
        }
      }, {
        key: "wzyy",
        get: function get() {
          return new this._Vec4(this[3], this[2], this[1], this[1]);
        }
      }, {
        key: "wzyz",
        get: function get() {
          return new this._Vec4(this[3], this[2], this[1], this[2]);
        }
      }, {
        key: "wzyw",
        get: function get() {
          return new this._Vec4(this[3], this[2], this[1], this[3]);
        }
      }, {
        key: "wzzx",
        get: function get() {
          return new this._Vec4(this[3], this[2], this[2], this[0]);
        }
      }, {
        key: "wzzy",
        get: function get() {
          return new this._Vec4(this[3], this[2], this[2], this[1]);
        }
      }, {
        key: "wzzz",
        get: function get() {
          return new this._Vec4(this[3], this[2], this[2], this[2]);
        }
      }, {
        key: "wzzw",
        get: function get() {
          return new this._Vec4(this[3], this[2], this[2], this[3]);
        }
      }, {
        key: "wzwx",
        get: function get() {
          return new this._Vec4(this[3], this[2], this[3], this[0]);
        }
      }, {
        key: "wzwy",
        get: function get() {
          return new this._Vec4(this[3], this[2], this[3], this[1]);
        }
      }, {
        key: "wzwz",
        get: function get() {
          return new this._Vec4(this[3], this[2], this[3], this[2]);
        }
      }, {
        key: "wzww",
        get: function get() {
          return new this._Vec4(this[3], this[2], this[3], this[3]);
        }
      }, {
        key: "wwxx",
        get: function get() {
          return new this._Vec4(this[3], this[3], this[0], this[0]);
        }
      }, {
        key: "wwxy",
        get: function get() {
          return new this._Vec4(this[3], this[3], this[0], this[1]);
        }
      }, {
        key: "wwxz",
        get: function get() {
          return new this._Vec4(this[3], this[3], this[0], this[2]);
        }
      }, {
        key: "wwxw",
        get: function get() {
          return new this._Vec4(this[3], this[3], this[0], this[3]);
        }
      }, {
        key: "wwyx",
        get: function get() {
          return new this._Vec4(this[3], this[3], this[1], this[0]);
        }
      }, {
        key: "wwyy",
        get: function get() {
          return new this._Vec4(this[3], this[3], this[1], this[1]);
        }
      }, {
        key: "wwyz",
        get: function get() {
          return new this._Vec4(this[3], this[3], this[1], this[2]);
        }
      }, {
        key: "wwyw",
        get: function get() {
          return new this._Vec4(this[3], this[3], this[1], this[3]);
        }
      }, {
        key: "wwzx",
        get: function get() {
          return new this._Vec4(this[3], this[3], this[2], this[0]);
        }
      }, {
        key: "wwzy",
        get: function get() {
          return new this._Vec4(this[3], this[3], this[2], this[1]);
        }
      }, {
        key: "wwzz",
        get: function get() {
          return new this._Vec4(this[3], this[3], this[2], this[2]);
        }
      }, {
        key: "wwzw",
        get: function get() {
          return new this._Vec4(this[3], this[3], this[2], this[3]);
        }
      }, {
        key: "wwwx",
        get: function get() {
          return new this._Vec4(this[3], this[3], this[3], this[0]);
        }
      }, {
        key: "wwwy",
        get: function get() {
          return new this._Vec4(this[3], this[3], this[3], this[1]);
        }
      }, {
        key: "wwwz",
        get: function get() {
          return new this._Vec4(this[3], this[3], this[3], this[2]);
        }
      }, {
        key: "wwww",
        get: function get() {
          return new this._Vec4(this[3], this[3], this[3], this[3]);
        }
      }]);
    }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Array)),
    o = /*#__PURE__*/function (_D) {
      function o(t, n) {
        var _ref;
        var _this8;
        (0, _classCallCheck2.default)(this, o);
        _this8 = _callSuper(this, o, [2]), _this8[0] = t != null ? t : _this8.getDefaultValue(), _this8[1] = (_ref = n != null ? n : t) != null ? _ref : _this8.getDefaultValue();
        return _this8;
      }
      (0, _inherits2.default)(o, _D);
      return (0, _createClass2.default)(o, [{
        key: "x",
        get: function get() {
          return this[0];
        },
        set: function set(t) {
          this[0] = t;
        }
      }, {
        key: "y",
        get: function get() {
          return this[1];
        },
        set: function set(t) {
          this[1] = t;
        }
      }]);
    }(D),
    u = /*#__PURE__*/function (_D2) {
      function u(t, n, s) {
        var _ref2, _ref3;
        var _this9;
        (0, _classCallCheck2.default)(this, u);
        _this9 = _callSuper(this, u, [3]), _this9[0] = t != null ? t : _this9.getDefaultValue(), _this9[1] = (_ref2 = n != null ? n : t) != null ? _ref2 : _this9.getDefaultValue(), _this9[2] = (_ref3 = s != null ? s : t) != null ? _ref3 : _this9.getDefaultValue();
        return _this9;
      }
      (0, _inherits2.default)(u, _D2);
      return (0, _createClass2.default)(u, [{
        key: "x",
        get: function get() {
          return this[0];
        },
        set: function set(t) {
          this[0] = t;
        }
      }, {
        key: "y",
        get: function get() {
          return this[1];
        },
        set: function set(t) {
          this[1] = t;
        }
      }, {
        key: "z",
        get: function get() {
          return this[2];
        },
        set: function set(t) {
          this[2] = t;
        }
      }]);
    }(D),
    c = /*#__PURE__*/function (_D3) {
      function c(t, n, s, i) {
        var _ref4, _ref5, _ref6;
        var _this10;
        (0, _classCallCheck2.default)(this, c);
        _this10 = _callSuper(this, c, [4]), _this10[0] = t != null ? t : _this10.getDefaultValue(), _this10[1] = (_ref4 = n != null ? n : t) != null ? _ref4 : _this10.getDefaultValue(), _this10[2] = (_ref5 = s != null ? s : t) != null ? _ref5 : _this10.getDefaultValue(), _this10[3] = (_ref6 = i != null ? i : t) != null ? _ref6 : _this10.getDefaultValue();
        return _this10;
      }
      (0, _inherits2.default)(c, _D3);
      return (0, _createClass2.default)(c, [{
        key: "x",
        get: function get() {
          return this[0];
        },
        set: function set(t) {
          this[0] = t;
        }
      }, {
        key: "y",
        get: function get() {
          return this[1];
        },
        set: function set(t) {
          this[1] = t;
        }
      }, {
        key: "z",
        get: function get() {
          return this[2];
        },
        set: function set(t) {
          this[2] = t;
        }
      }, {
        key: "w",
        get: function get() {
          return this[3];
        },
        set: function set(t) {
          this[3] = t;
        }
      }]);
    }(D),
    w = /*#__PURE__*/function (_o) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _o);
      return (0, _createClass2.default)(e, [{
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return 0;
        }
      }, {
        key: "kind",
        get: function get() {
          return "vec2f";
        }
      }, {
        key: "_Vec2",
        get: function get() {
          return e;
        }
      }, {
        key: "_Vec3",
        get: function get() {
          return V;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return v;
        }
      }]);
    }(o),
    d = /*#__PURE__*/function (_o2) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _o2);
      return (0, _createClass2.default)(e, [{
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return 0;
        }
      }, {
        key: "kind",
        get: function get() {
          return "vec2h";
        }
      }, {
        key: "_Vec2",
        get: function get() {
          return e;
        }
      }, {
        key: "_Vec3",
        get: function get() {
          return g;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return _;
        }
      }]);
    }(o),
    m = /*#__PURE__*/function (_o3) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _o3);
      return (0, _createClass2.default)(e, [{
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return 0;
        }
      }, {
        key: "kind",
        get: function get() {
          return "vec2i";
        }
      }, {
        key: "_Vec2",
        get: function get() {
          return e;
        }
      }, {
        key: "_Vec3",
        get: function get() {
          return T;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return I;
        }
      }]);
    }(o),
    z = /*#__PURE__*/function (_o4) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _o4);
      return (0, _createClass2.default)(e, [{
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return 0;
        }
      }, {
        key: "kind",
        get: function get() {
          return "vec2u";
        }
      }, {
        key: "_Vec2",
        get: function get() {
          return e;
        }
      }, {
        key: "_Vec3",
        get: function get() {
          return b;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return A;
        }
      }]);
    }(o),
    p = /*#__PURE__*/function (_o5) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _o5);
      return (0, _createClass2.default)(e, [{
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return !1;
        }
      }, {
        key: "kind",
        get: function get() {
          return "vec2<bool>";
        }
      }, {
        key: "_Vec2",
        get: function get() {
          return e;
        }
      }, {
        key: "_Vec3",
        get: function get() {
          return f;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return $;
        }
      }]);
    }(o),
    V = /*#__PURE__*/function (_u) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _u);
      return (0, _createClass2.default)(e, [{
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return 0;
        }
      }, {
        key: "kind",
        get: function get() {
          return "vec3f";
        }
      }, {
        key: "_Vec2",
        get: function get() {
          return w;
        }
      }, {
        key: "_Vec3",
        get: function get() {
          return e;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return v;
        }
      }]);
    }(u),
    g = /*#__PURE__*/function (_u2) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _u2);
      return (0, _createClass2.default)(e, [{
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return 0;
        }
      }, {
        key: "kind",
        get: function get() {
          return "vec3h";
        }
      }, {
        key: "_Vec2",
        get: function get() {
          return d;
        }
      }, {
        key: "_Vec3",
        get: function get() {
          return e;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return _;
        }
      }]);
    }(u),
    T = /*#__PURE__*/function (_u3) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _u3);
      return (0, _createClass2.default)(e, [{
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return 0;
        }
      }, {
        key: "kind",
        get: function get() {
          return "vec3i";
        }
      }, {
        key: "_Vec2",
        get: function get() {
          return m;
        }
      }, {
        key: "_Vec3",
        get: function get() {
          return e;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return I;
        }
      }]);
    }(u),
    b = /*#__PURE__*/function (_u4) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _u4);
      return (0, _createClass2.default)(e, [{
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return 0;
        }
      }, {
        key: "kind",
        get: function get() {
          return "vec3u";
        }
      }, {
        key: "_Vec2",
        get: function get() {
          return z;
        }
      }, {
        key: "_Vec3",
        get: function get() {
          return e;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return A;
        }
      }]);
    }(u),
    f = /*#__PURE__*/function (_u5) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _u5);
      return (0, _createClass2.default)(e, [{
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return !1;
        }
      }, {
        key: "kind",
        get: function get() {
          return "vec3<bool>";
        }
      }, {
        key: "_Vec2",
        get: function get() {
          return p;
        }
      }, {
        key: "_Vec3",
        get: function get() {
          return e;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return $;
        }
      }]);
    }(u),
    v = /*#__PURE__*/function (_c) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _c);
      return (0, _createClass2.default)(e, [{
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return 0;
        }
      }, {
        key: "kind",
        get: function get() {
          return "vec4f";
        }
      }, {
        key: "_Vec2",
        get: function get() {
          return w;
        }
      }, {
        key: "_Vec3",
        get: function get() {
          return V;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return e;
        }
      }]);
    }(c),
    _ = /*#__PURE__*/function (_c2) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _c2);
      return (0, _createClass2.default)(e, [{
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return 0;
        }
      }, {
        key: "kind",
        get: function get() {
          return "vec4h";
        }
      }, {
        key: "_Vec2",
        get: function get() {
          return d;
        }
      }, {
        key: "_Vec3",
        get: function get() {
          return g;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return e;
        }
      }]);
    }(c),
    I = /*#__PURE__*/function (_c3) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _c3);
      return (0, _createClass2.default)(e, [{
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return 0;
        }
      }, {
        key: "kind",
        get: function get() {
          return "vec4i";
        }
      }, {
        key: "_Vec2",
        get: function get() {
          return m;
        }
      }, {
        key: "_Vec3",
        get: function get() {
          return T;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return e;
        }
      }]);
    }(c),
    A = /*#__PURE__*/function (_c4) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _c4);
      return (0, _createClass2.default)(e, [{
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return 0;
        }
      }, {
        key: "kind",
        get: function get() {
          return "vec4u";
        }
      }, {
        key: "_Vec2",
        get: function get() {
          return z;
        }
      }, {
        key: "_Vec3",
        get: function get() {
          return b;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return e;
        }
      }]);
    }(c),
    $ = /*#__PURE__*/function (_c5) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _c5);
      return (0, _createClass2.default)(e, [{
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return !1;
        }
      }, {
        key: "kind",
        get: function get() {
          return "vec4<bool>";
        }
      }, {
        key: "_Vec2",
        get: function get() {
          return p;
        }
      }, {
        key: "_Vec3",
        get: function get() {
          return f;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return e;
        }
      }]);
    }(c);
  var R = exports.r = a(w),
    re = exports.s = a(d),
    se = exports.t = a(m),
    ie = exports.u = a(z),
    he = exports.v = a(p),
    F = exports.w = a(V),
    ae = exports.x = a(g),
    ye = exports.y = a(T),
    oe = exports.z = a(b),
    ue = exports.A = a(f),
    U = exports.B = a(v),
    ce = exports.C = a(_),
    le = exports.D = a(I),
    xe = exports.E = a(A),
    we = exports.F = a($),
    de = {
      vec2f: R,
      vec2h: re,
      vec2i: se,
      vec2u: ie,
      "vec2<bool>": he,
      vec3f: F,
      vec3h: ae,
      vec3i: ye,
      vec3u: oe,
      "vec3<bool>": ue,
      vec4f: U,
      vec4h: ce,
      vec4i: le,
      vec4u: xe,
      "vec4<bool>": we
    };
  function a(e) {
    var _e2 = new e(),
      t = _e2.kind,
      n = _e2.length,
      s = y(function () {
        for (var _len2 = arguments.length, i = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          i[_key2] = arguments[_key2];
        }
        var h = new Array(i.length),
          l = 0;
        for (var S of i) if (typeof S == "number" || typeof S == "boolean") h[l++] = S;else for (var N = 0; N < S.length; ++N) h[l++] = S[N];
        if (h.length <= 1 || h.length === n) return (0, _construct2.default)(e, h);
        throw new Error(`'${t}' constructor called with invalid number of arguments.`);
      }, function () {
        for (var _len3 = arguments.length, i = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          i[_key3] = arguments[_key3];
        }
        return {
          value: `${t}(${i.map(function (h) {
            return h.value;
          }).join(", ")})`,
          dataType: de[t]
        };
      });
    return Object.assign(s, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", t), x, void 0));
  }
  function K(e) {
    var t = (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), x, void 0), "type", e.type), "label", e.type),
      n = y(function () {
        var i = [];
        for (var _len4 = arguments.length, s = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          s[_key4] = arguments[_key4];
        }
        for (var h of s) if (typeof h == "number") i.push(h);else for (var l = 0; l < h.length; ++l) i.push(h[l]);
        for (var _h = i.length; _h < e.columns * e.rows; ++_h) i.push(0);
        return e.makeFromElements.apply(e, i);
      }, function () {
        for (var _len5 = arguments.length, s = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          s[_key5] = arguments[_key5];
        }
        return {
          value: `${t.type}(${s.map(function (i) {
            return i.value;
          }).join(", ")})`,
          dataType: t
        };
      });
    return Object.assign(n, t);
  }
  var W = /*#__PURE__*/function () {
      function W() {
        (0, _classCallCheck2.default)(this, W);
        this[r] = !0;
        this.length = 4;
        this.columns = [this.makeColumn(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]), this.makeColumn(arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3])];
      }
      return (0, _createClass2.default)(W, [{
        key: "0",
        get: function get() {
          return this.columns[0].x;
        },
        set: function set(t) {
          this.columns[0].x = t;
        }
      }, {
        key: "1",
        get: function get() {
          return this.columns[0].y;
        },
        set: function set(t) {
          this.columns[0].y = t;
        }
      }, {
        key: "2",
        get: function get() {
          return this.columns[1].x;
        },
        set: function set(t) {
          this.columns[1].x = t;
        }
      }, {
        key: "3",
        get: function get() {
          return this.columns[1].y;
        },
        set: function set(t) {
          this.columns[1].y = t;
        }
      }, {
        key: "~resolve",
        value: function resolve() {
          var _this11 = this;
          return `${this.kind}(${Array.from({
            length: this.length
          }).map(function (t, n) {
            return _this11[n];
          }).join(", ")})`;
        }
      }]);
    }(),
    O = /*#__PURE__*/function (_W) {
      function O() {
        var _this12;
        (0, _classCallCheck2.default)(this, O);
        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }
        _this12 = _callSuper(this, O, [].concat(args));
        _this12.kind = "mat2x2f";
        return _this12;
      }
      (0, _inherits2.default)(O, _W);
      return (0, _createClass2.default)(O, [{
        key: "makeColumn",
        value: function makeColumn(t, n) {
          return R(t, n);
        }
      }]);
    }(W),
    L = /*#__PURE__*/function () {
      function L() {
        (0, _classCallCheck2.default)(this, L);
        this[r] = !0;
        this.length = 12;
        this.columns = [this.makeColumn(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]), this.makeColumn(arguments.length <= 3 ? undefined : arguments[3], arguments.length <= 4 ? undefined : arguments[4], arguments.length <= 5 ? undefined : arguments[5]), this.makeColumn(arguments.length <= 6 ? undefined : arguments[6], arguments.length <= 7 ? undefined : arguments[7], arguments.length <= 8 ? undefined : arguments[8])];
      }
      return (0, _createClass2.default)(L, [{
        key: "0",
        get: function get() {
          return this.columns[0].x;
        },
        set: function set(t) {
          this.columns[0].x = t;
        }
      }, {
        key: "1",
        get: function get() {
          return this.columns[0].y;
        },
        set: function set(t) {
          this.columns[0].y = t;
        }
      }, {
        key: "2",
        get: function get() {
          return this.columns[0].z;
        },
        set: function set(t) {
          this.columns[0].z = t;
        }
      }, {
        key: "3",
        get: function get() {
          return 0;
        },
        set: function set(t) {}
      }, {
        key: "4",
        get: function get() {
          return this.columns[1].x;
        },
        set: function set(t) {
          this.columns[1].x = t;
        }
      }, {
        key: "5",
        get: function get() {
          return this.columns[1].y;
        },
        set: function set(t) {
          this.columns[1].y = t;
        }
      }, {
        key: "6",
        get: function get() {
          return this.columns[1].z;
        },
        set: function set(t) {
          this.columns[1].z = t;
        }
      }, {
        key: "7",
        get: function get() {
          return 0;
        },
        set: function set(t) {}
      }, {
        key: "8",
        get: function get() {
          return this.columns[2].x;
        },
        set: function set(t) {
          this.columns[2].x = t;
        }
      }, {
        key: "9",
        get: function get() {
          return this.columns[2].y;
        },
        set: function set(t) {
          this.columns[2].y = t;
        }
      }, {
        key: "10",
        get: function get() {
          return this.columns[2].z;
        },
        set: function set(t) {
          this.columns[2].z = t;
        }
      }, {
        key: "11",
        get: function get() {
          return 0;
        },
        set: function set(t) {}
      }, {
        key: "~resolve",
        value: function resolve() {
          return `${this.kind}(${this[0]}, ${this[1]}, ${this[2]}, ${this[4]}, ${this[5]}, ${this[6]}, ${this[8]}, ${this[9]}, ${this[10]})`;
        }
      }]);
    }(),
    j = /*#__PURE__*/function (_L) {
      function j() {
        var _this13;
        (0, _classCallCheck2.default)(this, j);
        for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          args[_key7] = arguments[_key7];
        }
        _this13 = _callSuper(this, j, [].concat(args));
        _this13.kind = "mat3x3f";
        return _this13;
      }
      (0, _inherits2.default)(j, _L);
      return (0, _createClass2.default)(j, [{
        key: "makeColumn",
        value: function makeColumn(t, n, s) {
          return F(t, n, s);
        }
      }]);
    }(L),
    G = /*#__PURE__*/function () {
      function G() {
        (0, _classCallCheck2.default)(this, G);
        this[r] = !0;
        this.length = 16;
        this.columns = [this.makeColumn(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3]), this.makeColumn(arguments.length <= 4 ? undefined : arguments[4], arguments.length <= 5 ? undefined : arguments[5], arguments.length <= 6 ? undefined : arguments[6], arguments.length <= 7 ? undefined : arguments[7]), this.makeColumn(arguments.length <= 8 ? undefined : arguments[8], arguments.length <= 9 ? undefined : arguments[9], arguments.length <= 10 ? undefined : arguments[10], arguments.length <= 11 ? undefined : arguments[11]), this.makeColumn(arguments.length <= 12 ? undefined : arguments[12], arguments.length <= 13 ? undefined : arguments[13], arguments.length <= 14 ? undefined : arguments[14], arguments.length <= 15 ? undefined : arguments[15])];
      }
      return (0, _createClass2.default)(G, [{
        key: "0",
        get: function get() {
          return this.columns[0].x;
        },
        set: function set(t) {
          this.columns[0].x = t;
        }
      }, {
        key: "1",
        get: function get() {
          return this.columns[0].y;
        },
        set: function set(t) {
          this.columns[0].y = t;
        }
      }, {
        key: "2",
        get: function get() {
          return this.columns[0].z;
        },
        set: function set(t) {
          this.columns[0].z = t;
        }
      }, {
        key: "3",
        get: function get() {
          return this.columns[0].w;
        },
        set: function set(t) {
          this.columns[0].w = t;
        }
      }, {
        key: "4",
        get: function get() {
          return this.columns[1].x;
        },
        set: function set(t) {
          this.columns[1].x = t;
        }
      }, {
        key: "5",
        get: function get() {
          return this.columns[1].y;
        },
        set: function set(t) {
          this.columns[1].y = t;
        }
      }, {
        key: "6",
        get: function get() {
          return this.columns[1].z;
        },
        set: function set(t) {
          this.columns[1].z = t;
        }
      }, {
        key: "7",
        get: function get() {
          return this.columns[1].w;
        },
        set: function set(t) {
          this.columns[1].w = t;
        }
      }, {
        key: "8",
        get: function get() {
          return this.columns[2].x;
        },
        set: function set(t) {
          this.columns[2].x = t;
        }
      }, {
        key: "9",
        get: function get() {
          return this.columns[2].y;
        },
        set: function set(t) {
          this.columns[2].y = t;
        }
      }, {
        key: "10",
        get: function get() {
          return this.columns[2].z;
        },
        set: function set(t) {
          this.columns[2].z = t;
        }
      }, {
        key: "11",
        get: function get() {
          return this.columns[2].w;
        },
        set: function set(t) {
          this.columns[2].w = t;
        }
      }, {
        key: "12",
        get: function get() {
          return this.columns[3].x;
        },
        set: function set(t) {
          this.columns[3].x = t;
        }
      }, {
        key: "13",
        get: function get() {
          return this.columns[3].y;
        },
        set: function set(t) {
          this.columns[3].y = t;
        }
      }, {
        key: "14",
        get: function get() {
          return this.columns[3].z;
        },
        set: function set(t) {
          this.columns[3].z = t;
        }
      }, {
        key: "15",
        get: function get() {
          return this.columns[3].w;
        },
        set: function set(t) {
          this.columns[3].w = t;
        }
      }, {
        key: "~resolve",
        value: function resolve() {
          var _this14 = this;
          return `${this.kind}(${Array.from({
            length: this.length
          }).map(function (t, n) {
            return _this14[n];
          }).join(", ")})`;
        }
      }]);
    }(),
    E = /*#__PURE__*/function (_G) {
      function E() {
        var _this15;
        (0, _classCallCheck2.default)(this, E);
        for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          args[_key8] = arguments[_key8];
        }
        _this15 = _callSuper(this, E, [].concat(args));
        _this15.kind = "mat4x4f";
        return _this15;
      }
      (0, _inherits2.default)(E, _G);
      return (0, _createClass2.default)(E, [{
        key: "makeColumn",
        value: function makeColumn(t, n, s, i) {
          return U(t, n, s, i);
        }
      }]);
    }(G),
    tt = exports.G = K({
      type: "mat2x2f",
      rows: 2,
      columns: 2,
      makeFromElements: function makeFromElements() {
        for (var _len9 = arguments.length, e = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
          e[_key9] = arguments[_key9];
        }
        return (0, _construct2.default)(O, e);
      }
    }),
    nt = exports.H = K({
      type: "mat3x3f",
      rows: 3,
      columns: 3,
      makeFromElements: function makeFromElements() {
        for (var _len10 = arguments.length, e = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
          e[_key10] = arguments[_key10];
        }
        return (0, _construct2.default)(j, e);
      }
    }),
    rt = exports.I = K({
      type: "mat4x4f",
      rows: 4,
      columns: 4,
      makeFromElements: function makeFromElements() {
        for (var _len11 = arguments.length, e = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
          e[_key11] = arguments[_key11];
        }
        return (0, _construct2.default)(E, e);
      }
    });
  function st(e) {
    return e.kind === "mat3x3f" ? [e[0], e[1], e[2], e[4], e[5], e[6], e[8], e[9], e[10]] : Array.from({
      length: e.length
    }).map(function (t, n) {
      return e[n];
    });
  }
  var ot = exports.K = (0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "abstractInt"),
    ut = exports.L = (0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "abstractFloat"),
    ct = exports.M = (0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "bool"),
    me = y(function (e) {
      return typeof e == "boolean" ? e ? 1 : 0 : Number.isInteger(e) ? ((e < 0 || e > 4294967295) && console.warn(`u32 value ${e} overflowed`), (e & 4294967295) >>> 0) : Math.max(0, Math.min(4294967295, Math.floor(e)));
    }, function (e) {
      return {
        value: `u32(${e.value})`,
        dataType: ze
      };
    }),
    ze = exports.N = Object.assign(me, {
      type: "u32"
    }),
    pe = y(function (e) {
      if (typeof e == "boolean") return e ? 1 : 0;
      if (Number.isInteger(e)) return (e < -2147483648 || e > 2147483647) && console.warn(`i32 value ${e} overflowed`), (e | 0) & 4294967295;
      var t = e < 0 ? Math.ceil(e) : Math.floor(e);
      return Math.max(-2147483648, Math.min(2147483647, t));
    }, function (e) {
      return {
        value: `i32(${e.value})`,
        dataType: Ve
      };
    }),
    Ve = exports.O = Object.assign(pe, {
      type: "i32"
    }),
    ge = y(function (e) {
      if (typeof e == "boolean") return e ? 1 : 0;
      var t = new Float32Array(1);
      return t[0] = e, t[0];
    }, function (e) {
      return {
        value: `f32(${e.value})`,
        dataType: Te
      };
    }),
    Te = exports.P = Object.assign(ge, {
      type: "f32"
    }),
    be = y(function (e) {
      if (typeof e == "boolean") return e ? 1 : 0;
      var t = new ArrayBuffer(2);
      return _typedBinary.default.f16.write(new _typedBinary.default.BufferWriter(t), e), _typedBinary.default.f16.read(new _typedBinary.default.BufferReader(t));
    }, function (e) {
      return {
        value: `f16(${e.value})`,
        dataType: fe
      };
    }),
    fe = exports.Q = Object.assign(be, {
      type: "f16"
    });
  var dt = exports.R = (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "void"), x, void 0),
    ve = ["bool", "f32", "f16", "i32", "u32", "vec2f", "vec2h", "vec2i", "vec2u", "vec2<bool>", "vec3f", "vec3h", "vec3i", "vec3u", "vec3<bool>", "vec4f", "vec4h", "vec4i", "vec4u", "vec4<bool>", "mat2x2f", "mat3x3f", "mat4x4f", "struct", "array", "ptr", "atomic", "decorated", "abstractInt", "abstractFloat", "void"];
  function _e(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type.startsWith("vec2"));
  }
  function Ie(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type.startsWith("vec3"));
  }
  function Ae(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type.startsWith("vec4"));
  }
  function mt(e) {
    return _e(e) || Ie(e) || Ae(e);
  }
  function $e(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "mat2x2f";
  }
  function Se(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "mat3x3f";
  }
  function ke(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "mat4x4f";
  }
  function zt(e) {
    return $e(e) || Se(e) || ke(e);
  }
  function pt(e) {
    return (e == null ? void 0 : e[r]) && ve.includes(e == null ? void 0 : e.type);
  }
  function Vt(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "array";
  }
  function gt(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "struct";
  }
  function Tt(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "ptr";
  }
  function bt(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "atomic";
  }
  function ft(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "@align";
  }
  function vt(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "@size";
  }
  function _t(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "@location";
  }
  function It(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "@interpolate";
  }
  function At(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "@builtin";
  }
  function $t(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "decorated";
  }
},3,[2,4,8,11,12,18,19,20,21,22,23,25],"../../node_modules/typegpu/chunk-KJHEEZQT.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _defineProperty(e, r, t) {
    return (r = _$$_REQUIRE(_dependencyMap[0], "./toPropertyKey.js")(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
},4,[5],"../../node_modules/@babel/runtime/helpers/defineProperty.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function toPropertyKey(t) {
    var i = _$$_REQUIRE(_dependencyMap[0], "./toPrimitive.js")(t, "string");
    return "symbol" == _$$_REQUIRE(_dependencyMap[1], "./typeof.js")["default"](i) ? i : i + "";
  }
  module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
},5,[6,7],"../../node_modules/@babel/runtime/helpers/toPropertyKey.js");
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
},6,[7],"../../node_modules/@babel/runtime/helpers/toPrimitive.js");
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
},7,[],"../../node_modules/@babel/runtime/helpers/typeof.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _construct(t, e, r) {
    if (_$$_REQUIRE(_dependencyMap[0], "./isNativeReflectConstruct.js")()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _$$_REQUIRE(_dependencyMap[1], "./setPrototypeOf.js")(p, r.prototype), p;
  }
  module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
},8,[9,10],"../../node_modules/@babel/runtime/helpers/construct.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (module.exports = _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return !!t;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
  }
  module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
},9,[],"../../node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _setPrototypeOf(t, e) {
    return module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf(t, e);
  }
  module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},10,[],"../../node_modules/@babel/runtime/helpers/setPrototypeOf.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
},11,[],"../../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _toConsumableArray(r) {
    return _$$_REQUIRE(_dependencyMap[0], "./arrayWithoutHoles.js")(r) || _$$_REQUIRE(_dependencyMap[1], "./iterableToArray.js")(r) || _$$_REQUIRE(_dependencyMap[2], "./unsupportedIterableToArray.js")(r) || _$$_REQUIRE(_dependencyMap[3], "./nonIterableSpread.js")();
  }
  module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},12,[13,15,16,17],"../../node_modules/@babel/runtime/helpers/toConsumableArray.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _$$_REQUIRE(_dependencyMap[0], "./arrayLikeToArray.js")(r);
  }
  module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
},13,[14],"../../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},14,[],"../../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},15,[],"../../node_modules/@babel/runtime/helpers/iterableToArray.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _$$_REQUIRE(_dependencyMap[0], "./arrayLikeToArray.js")(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _$$_REQUIRE(_dependencyMap[0], "./arrayLikeToArray.js")(r, a) : void 0;
    }
  }
  module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},16,[14],"../../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
},17,[],"../../node_modules/@babel/runtime/helpers/nonIterableSpread.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
},18,[],"../../node_modules/@babel/runtime/helpers/classCallCheck.js");
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
},19,[5],"../../node_modules/@babel/runtime/helpers/createClass.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _$$_REQUIRE(_dependencyMap[0], "./typeof.js")["default"](e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _$$_REQUIRE(_dependencyMap[1], "./assertThisInitialized.js")(t);
  }
  module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
},20,[7,11],"../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _getPrototypeOf(t) {
    return module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _getPrototypeOf(t);
  }
  module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},21,[],"../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
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
},22,[10],"../../node_modules/@babel/runtime/helpers/inherits.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _wrapNativeSuper(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return module.exports = _wrapNativeSuper = function _wrapNativeSuper(t) {
      if (null === t || !_$$_REQUIRE(_dependencyMap[0], "./isNativeFunction.js")(t)) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, Wrapper);
      }
      function Wrapper() {
        return _$$_REQUIRE(_dependencyMap[1], "./construct.js")(t, arguments, _$$_REQUIRE(_dependencyMap[2], "./getPrototypeOf.js")(this).constructor);
      }
      return Wrapper.prototype = Object.create(t.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), _$$_REQUIRE(_dependencyMap[3], "./setPrototypeOf.js")(Wrapper, t);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _wrapNativeSuper(t);
  }
  module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;
},23,[24,8,21,10],"../../node_modules/@babel/runtime/helpers/wrapNativeSuper.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _isNativeFunction(t) {
    try {
      return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
      return "function" == typeof t;
    }
  }
  module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;
},24,[],"../../node_modules/@babel/runtime/helpers/isNativeFunction.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0], "@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ValidationError = exports.UnresolvedReferenceError = exports.Uint8Schema = exports.Uint32Schema = exports.Uint16Schema = exports.TypedArraySchema = exports.TupleSchema = exports.SubTypeKey = exports.StringSchema = exports.Schema = exports.OptionalSchema = exports.ObjectSchema = exports.Measurer = exports.MaxValue = exports.KeyedSchema = exports.Int8Schema = exports.Int32Schema = exports.Int16Schema = exports.GenericObjectSchema = exports.Float32Schema = exports.Float16Schema = exports.DynamicArraySchema = exports.CharsSchema = exports.ByteSchema = exports.BufferWriter = exports.BufferReader = exports.BoolSchema = exports.ArraySchema = void 0;
  exports.arrayOf = _arrayOf;
  exports.byte = exports.bool = exports.bin = void 0;
  exports.chars = _chars;
  exports.concat = _concat;
  exports.default = void 0;
  exports.dynamicArrayOf = _dynamicArrayOf;
  exports.f64Array = exports.f32Array = exports.f32 = exports.f16 = void 0;
  exports.generic = _generic;
  exports.genericEnum = _genericEnum;
  exports.getSystemEndianness = getSystemEndianness;
  exports.i8Array = exports.i8 = exports.i32Array = exports.i32 = exports.i16Array = exports.i16 = void 0;
  exports.keyed = _keyed;
  exports.object = _object;
  exports.optional = _optional;
  exports.string = void 0;
  exports.tupleOf = _tupleOf;
  exports.u8ClampedArray = exports.u8Array = exports.u8 = exports.u32Array = exports.u32 = exports.u16Array = exports.u16 = void 0;
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1], "@babel/runtime/helpers/slicedToArray"));
  var _createClass2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2], "@babel/runtime/helpers/createClass"));
  var _classCallCheck2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3], "@babel/runtime/helpers/classCallCheck"));
  var _possibleConstructorReturn2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4], "@babel/runtime/helpers/possibleConstructorReturn"));
  var _getPrototypeOf2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5], "@babel/runtime/helpers/getPrototypeOf"));
  var _inherits2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[6], "@babel/runtime/helpers/inherits"));
  var _wrapNativeSuper2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[7], "@babel/runtime/helpers/wrapNativeSuper"));
  function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  var __defProp = Object.defineProperty;
  var __defNormalProp = function __defNormalProp(obj, key, value) {
    return key in obj ? __defProp(obj, key, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: value
    }) : obj[key] = value;
  };
  var __export = function __export(target, all) {
    for (var name in all) __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
  };
  var __publicField = function __publicField(obj, key, value) {
    return __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  };

  // src/main-api.ts
  var main_api_exports = exports.bin = {};
  __export(main_api_exports, {
    BufferReader: function BufferReader() {
      return _BufferReader;
    },
    BufferWriter: function BufferWriter() {
      return _BufferWriter;
    },
    MaxValue: function MaxValue() {
      return _MaxValue;
    },
    Measurer: function Measurer() {
      return _Measurer2;
    },
    UnresolvedReferenceError: function UnresolvedReferenceError() {
      return _UnresolvedReferenceError2;
    },
    ValidationError: function ValidationError() {
      return _ValidationError2;
    },
    arrayOf: function arrayOf() {
      return _arrayOf;
    },
    bool: function bool() {
      return _bool;
    },
    byte: function byte() {
      return _byte;
    },
    chars: function chars() {
      return _chars;
    },
    concat: function concat() {
      return _concat;
    },
    dynamicArrayOf: function dynamicArrayOf() {
      return _dynamicArrayOf;
    },
    f16: function f16() {
      return _f;
    },
    f32: function f32() {
      return _f2;
    },
    f32Array: function f32Array() {
      return _f32Array;
    },
    f64Array: function f64Array() {
      return _f64Array;
    },
    generic: function generic() {
      return _generic;
    },
    genericEnum: function genericEnum() {
      return _genericEnum;
    },
    i16: function i16() {
      return _i;
    },
    i16Array: function i16Array() {
      return _i16Array;
    },
    i32: function i32() {
      return _i2;
    },
    i32Array: function i32Array() {
      return _i32Array;
    },
    i8: function i8() {
      return _i3;
    },
    i8Array: function i8Array() {
      return _i8Array;
    },
    keyed: function keyed() {
      return _keyed;
    },
    object: function object() {
      return _object;
    },
    optional: function optional() {
      return _optional;
    },
    string: function string() {
      return _string;
    },
    tupleOf: function tupleOf() {
      return _tupleOf;
    },
    u16: function u16() {
      return _u;
    },
    u16Array: function u16Array() {
      return _u16Array;
    },
    u32: function u32() {
      return _u2;
    },
    u32Array: function u32Array() {
      return _u32Array;
    },
    u8: function u8() {
      return _u3;
    },
    u8Array: function u8Array() {
      return _u8Array;
    },
    u8ClampedArray: function u8ClampedArray() {
      return _u8ClampedArray;
    }
  });

  // src/error.ts
  var _UnresolvedReferenceError2 = exports.UnresolvedReferenceError = /*#__PURE__*/function (_Error) {
    function _UnresolvedReferenceError(msg) {
      var _this;
      (0, _classCallCheck2.default)(this, _UnresolvedReferenceError);
      _this = _callSuper(this, _UnresolvedReferenceError, [msg]);
      Object.setPrototypeOf(_this, _UnresolvedReferenceError.prototype);
      return _this;
    }
    (0, _inherits2.default)(_UnresolvedReferenceError, _Error);
    return (0, _createClass2.default)(_UnresolvedReferenceError);
  }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
  var _ValidationError2 = exports.ValidationError = /*#__PURE__*/function (_Error2) {
    function _ValidationError(msg) {
      var _this2;
      (0, _classCallCheck2.default)(this, _ValidationError);
      _this2 = _callSuper(this, _ValidationError, [msg]);
      Object.setPrototypeOf(_this2, _ValidationError.prototype);
      return _this2;
    }
    (0, _inherits2.default)(_ValidationError, _Error2);
    return (0, _createClass2.default)(_ValidationError);
  }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));

  // src/io/measurer.ts
  var UnboundedMeasurer = /*#__PURE__*/function () {
    function UnboundedMeasurer() {
      (0, _classCallCheck2.default)(this, UnboundedMeasurer);
      __publicField(this, "size", Number.NaN);
      __publicField(this, "unbounded", this);
      __publicField(this, "isUnbounded", true);
    }
    return (0, _createClass2.default)(UnboundedMeasurer, [{
      key: "add",
      value: function add() {
        return this;
      }
    }, {
      key: "fork",
      value: function fork() {
        return this;
      }
    }]);
  }();
  var unboundedMeasurer = new UnboundedMeasurer();
  var _Measurer2 = exports.Measurer = /*#__PURE__*/function () {
    function _Measurer() {
      (0, _classCallCheck2.default)(this, _Measurer);
      __publicField(this, "size", 0);
      __publicField(this, "unbounded", unboundedMeasurer);
      __publicField(this, "isUnbounded", false);
    }
    return (0, _createClass2.default)(_Measurer, [{
      key: "add",
      value: function add(bytes) {
        this.size += bytes;
        return this;
      }
    }, {
      key: "fork",
      value: function fork() {
        var forked = new _Measurer();
        forked.size = this.size;
        return forked;
      }
    }]);
  }();

  // src/structure/types.ts
  var _MaxValue = exports.MaxValue = Symbol("The biggest (in amount of bytes needed) value a schema can represent");
  var Schema = exports.Schema = /*#__PURE__*/function () {
    function Schema() {
      (0, _classCallCheck2.default)(this, Schema);
      __publicField(this, "__unwrapped");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return (0, _createClass2.default)(Schema, [{
      key: "resolveReferences",
      value: function resolveReferences(ctx) {}
    }, {
      key: "seekProperty",
      value: function seekProperty(_reference, _prop) {
        return null;
      }
    }]);
  }();
  var Ref = /*#__PURE__*/(0, _createClass2.default)(function Ref(key) {
    (0, _classCallCheck2.default)(this, Ref);
    this.key = key;
  });
  var SubTypeKey = exports.SubTypeKey = {
    STRING: "string",
    ENUM: "enum"
  };

  // src/structure/array.ts
  var ArraySchema = exports.ArraySchema = /*#__PURE__*/function (_Schema) {
    function ArraySchema(_unstableElementSchema, length) {
      var _this3;
      (0, _classCallCheck2.default)(this, ArraySchema);
      _this3 = _callSuper(this, ArraySchema);
      _this3._unstableElementSchema = _unstableElementSchema;
      _this3.length = length;
      __publicField(_this3, "elementSchema");
      _this3.elementSchema = _unstableElementSchema;
      return _this3;
    }
    (0, _inherits2.default)(ArraySchema, _Schema);
    return (0, _createClass2.default)(ArraySchema, [{
      key: "resolveReferences",
      value: function resolveReferences(ctx) {
        this.elementSchema = ctx.resolve(this._unstableElementSchema);
      }
    }, {
      key: "write",
      value: function write(output, values) {
        if (values.length !== this.length) {
          throw new _ValidationError2(`Expected array of length ${this.length}, got ${values.length}`);
        }
        for (var value of values) {
          this.elementSchema.write(output, value);
        }
      }
    }, {
      key: "read",
      value: function read(input) {
        var array = [];
        for (var i = 0; i < this.length; ++i) {
          array.push(this.elementSchema.read(input));
        }
        return array;
      }
      /**
       * Returns the maximum number of bytes this schema can take up.
       *
       * Returns `NaN` if the schema is unbounded. If you would like to know
       * how many bytes a particular value encoding will take up, use `.measure(value)`.
       *
       * Alias for `.measure(MaxValue).size`
       */
    }, {
      key: "maxSize",
      get: function get() {
        return this.elementSchema.measure(_MaxValue).size * this.length;
      }
    }, {
      key: "measure",
      value: function measure(values) {
        var measurer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Measurer2();
        for (var i = 0; i < this.length; ++i) {
          this.elementSchema.measure(values === _MaxValue ? _MaxValue : values[i], measurer);
        }
        return measurer;
      }
    }]);
  }(Schema);
  function _arrayOf(elementSchema, length) {
    return new ArraySchema(elementSchema, length);
  }

  // src/structure/baseTypes.ts
  var BoolSchema = exports.BoolSchema = /*#__PURE__*/function (_Schema2) {
    function BoolSchema() {
      var _this4;
      (0, _classCallCheck2.default)(this, BoolSchema);
      _this4 = _callSuper(this, BoolSchema, arguments);
      /**
       * The maximum number of bytes this schema can take up.
       *
       * Alias for `.measure(MaxValue).size`
       */
      __publicField(_this4, "maxSize", 1);
      return _this4;
    }
    (0, _inherits2.default)(BoolSchema, _Schema2);
    return (0, _createClass2.default)(BoolSchema, [{
      key: "read",
      value: function read(input) {
        return input.readBool();
      }
    }, {
      key: "write",
      value: function write(output, value) {
        output.writeBool(value);
      }
    }, {
      key: "measure",
      value: function measure(_) {
        var measurer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Measurer2();
        return measurer.add(1);
      }
    }]);
  }(Schema);
  var _bool = exports.bool = new BoolSchema();
  var _StringSchema = /*#__PURE__*/function (_Schema3) {
    function _StringSchema() {
      (0, _classCallCheck2.default)(this, _StringSchema);
      return _callSuper(this, _StringSchema, arguments);
    }
    (0, _inherits2.default)(_StringSchema, _Schema3);
    return (0, _createClass2.default)(_StringSchema, [{
      key: "read",
      value: function read(input) {
        return input.readString();
      }
    }, {
      key: "write",
      value: function write(output, value) {
        output.writeString(value);
      }
    }, {
      key: "measure",
      value: function measure(value) {
        var measurer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Measurer2();
        if (value === _MaxValue) {
          return measurer.unbounded;
        }
        var encoded = _StringSchema._encoder.encode(value);
        return measurer.add(encoded.byteLength + 1);
      }
    }], [{
      key: "_encoder",
      get: function get() {
        if (!_StringSchema._cachedEncoder) {
          _StringSchema._cachedEncoder = new TextEncoder();
        }
        return _StringSchema._cachedEncoder;
      }
    }]);
  }(Schema);
  __publicField(_StringSchema, "_cachedEncoder");
  var StringSchema = exports.StringSchema = _StringSchema;
  var _string = exports.string = new StringSchema();
  var Int8Schema = exports.Int8Schema = /*#__PURE__*/function (_Schema4) {
    function Int8Schema() {
      var _this5;
      (0, _classCallCheck2.default)(this, Int8Schema);
      _this5 = _callSuper(this, Int8Schema, arguments);
      /**
       * The maximum number of bytes this schema can take up.
       *
       * Alias for `.measure(MaxValue).size`
       */
      __publicField(_this5, "maxSize", 1);
      return _this5;
    }
    (0, _inherits2.default)(Int8Schema, _Schema4);
    return (0, _createClass2.default)(Int8Schema, [{
      key: "read",
      value: function read(input) {
        return input.readInt8();
      }
    }, {
      key: "write",
      value: function write(output, value) {
        output.writeInt8(value);
      }
    }, {
      key: "measure",
      value: function measure(_) {
        var measurer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Measurer2();
        return measurer.add(1);
      }
    }]);
  }(Schema);
  var _i3 = exports.i8 = new Int8Schema();
  var Uint8Schema = exports.Uint8Schema = exports.ByteSchema = /*#__PURE__*/function (_Schema5) {
    function Uint8Schema() {
      var _this6;
      (0, _classCallCheck2.default)(this, Uint8Schema);
      _this6 = _callSuper(this, Uint8Schema, arguments);
      /**
       * The maximum number of bytes this schema can take up.
       *
       * Alias for `.measure(MaxValue).size`
       */
      __publicField(_this6, "maxSize", 1);
      return _this6;
    }
    (0, _inherits2.default)(Uint8Schema, _Schema5);
    return (0, _createClass2.default)(Uint8Schema, [{
      key: "read",
      value: function read(input) {
        return input.readUint8();
      }
    }, {
      key: "write",
      value: function write(output, value) {
        output.writeUint8(value);
      }
    }, {
      key: "measure",
      value: function measure(_) {
        var measurer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Measurer2();
        return measurer.add(1);
      }
    }]);
  }(Schema);
  var _u3 = exports.u8 = new Uint8Schema();
  var _byte = exports.byte = _u3;
  var Int16Schema = exports.Int16Schema = /*#__PURE__*/function (_Schema6) {
    function Int16Schema() {
      var _this7;
      (0, _classCallCheck2.default)(this, Int16Schema);
      _this7 = _callSuper(this, Int16Schema, arguments);
      /**
       * The maximum number of bytes this schema can take up.
       *
       * Alias for `.measure(MaxValue).size`
       */
      __publicField(_this7, "maxSize", 2);
      return _this7;
    }
    (0, _inherits2.default)(Int16Schema, _Schema6);
    return (0, _createClass2.default)(Int16Schema, [{
      key: "read",
      value: function read(input) {
        return input.readInt16();
      }
    }, {
      key: "write",
      value: function write(output, value) {
        output.writeInt16(value);
      }
    }, {
      key: "measure",
      value: function measure(_) {
        var measurer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Measurer2();
        return measurer.add(2);
      }
    }]);
  }(Schema);
  var _i = exports.i16 = new Int16Schema();
  var Uint16Schema = exports.Uint16Schema = /*#__PURE__*/function (_Schema7) {
    function Uint16Schema() {
      var _this8;
      (0, _classCallCheck2.default)(this, Uint16Schema);
      _this8 = _callSuper(this, Uint16Schema, arguments);
      /**
       * The maximum number of bytes this schema can take up.
       *
       * Alias for `.measure(MaxValue).size`
       */
      __publicField(_this8, "maxSize", 2);
      return _this8;
    }
    (0, _inherits2.default)(Uint16Schema, _Schema7);
    return (0, _createClass2.default)(Uint16Schema, [{
      key: "read",
      value: function read(input) {
        return input.readUint16();
      }
    }, {
      key: "write",
      value: function write(output, value) {
        output.writeUint16(value);
      }
    }, {
      key: "measure",
      value: function measure(_) {
        var measurer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Measurer2();
        return measurer.add(2);
      }
    }]);
  }(Schema);
  var _u = exports.u16 = new Uint16Schema();
  var Int32Schema = exports.Int32Schema = /*#__PURE__*/function (_Schema8) {
    function Int32Schema() {
      var _this9;
      (0, _classCallCheck2.default)(this, Int32Schema);
      _this9 = _callSuper(this, Int32Schema, arguments);
      /**
       * The maximum number of bytes this schema can take up.
       *
       * Alias for `.measure(MaxValue).size`
       */
      __publicField(_this9, "maxSize", 4);
      return _this9;
    }
    (0, _inherits2.default)(Int32Schema, _Schema8);
    return (0, _createClass2.default)(Int32Schema, [{
      key: "read",
      value: function read(input) {
        return input.readInt32();
      }
    }, {
      key: "write",
      value: function write(output, value) {
        output.writeInt32(value);
      }
    }, {
      key: "measure",
      value: function measure(_) {
        var measurer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Measurer2();
        return measurer.add(4);
      }
    }]);
  }(Schema);
  var _i2 = exports.i32 = new Int32Schema();
  var Uint32Schema = exports.Uint32Schema = /*#__PURE__*/function (_Schema9) {
    function Uint32Schema() {
      var _this10;
      (0, _classCallCheck2.default)(this, Uint32Schema);
      _this10 = _callSuper(this, Uint32Schema, arguments);
      /**
       * The maximum number of bytes this schema can take up.
       *
       * Alias for `.measure(MaxValue).size`
       */
      __publicField(_this10, "maxSize", 4);
      return _this10;
    }
    (0, _inherits2.default)(Uint32Schema, _Schema9);
    return (0, _createClass2.default)(Uint32Schema, [{
      key: "read",
      value: function read(input) {
        return input.readUint32();
      }
    }, {
      key: "write",
      value: function write(output, value) {
        output.writeUint32(value);
      }
    }, {
      key: "measure",
      value: function measure(_) {
        var measurer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Measurer2();
        return measurer.add(4);
      }
    }]);
  }(Schema);
  var _u2 = exports.u32 = new Uint32Schema();
  var Float16Schema = exports.Float16Schema = /*#__PURE__*/function (_Schema10) {
    function Float16Schema() {
      var _this11;
      (0, _classCallCheck2.default)(this, Float16Schema);
      _this11 = _callSuper(this, Float16Schema, arguments);
      /**
       * The maximum number of bytes this schema can take up.
       *
       * Alias for `.measure(MaxValue).size`
       */
      __publicField(_this11, "maxSize", 2);
      return _this11;
    }
    (0, _inherits2.default)(Float16Schema, _Schema10);
    return (0, _createClass2.default)(Float16Schema, [{
      key: "read",
      value: function read(input) {
        return input.readFloat16();
      }
    }, {
      key: "write",
      value: function write(output, value) {
        output.writeFloat16(value);
      }
    }, {
      key: "measure",
      value: function measure(_) {
        var measurer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Measurer2();
        return measurer.add(2);
      }
    }]);
  }(Schema);
  var _f = exports.f16 = new Float16Schema();
  var Float32Schema = exports.Float32Schema = /*#__PURE__*/function (_Schema11) {
    function Float32Schema() {
      var _this12;
      (0, _classCallCheck2.default)(this, Float32Schema);
      _this12 = _callSuper(this, Float32Schema, arguments);
      /**
       * The maximum number of bytes this schema can take up.
       *
       * Alias for `.measure(MaxValue).size`
       */
      __publicField(_this12, "maxSize", 4);
      return _this12;
    }
    (0, _inherits2.default)(Float32Schema, _Schema11);
    return (0, _createClass2.default)(Float32Schema, [{
      key: "read",
      value: function read(input) {
        return input.readFloat32();
      }
    }, {
      key: "write",
      value: function write(output, value) {
        output.writeFloat32(value);
      }
    }, {
      key: "measure",
      value: function measure(_) {
        var measurer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Measurer2();
        return measurer.add(4);
      }
    }]);
  }(Schema);
  var _f2 = exports.f32 = new Float32Schema();

  // src/structure/chars.ts
  var CharsSchema = exports.CharsSchema = /*#__PURE__*/function (_Schema12) {
    function CharsSchema(length) {
      var _this13;
      (0, _classCallCheck2.default)(this, CharsSchema);
      _this13 = _callSuper(this, CharsSchema);
      _this13.length = length;
      return _this13;
    }
    (0, _inherits2.default)(CharsSchema, _Schema12);
    return (0, _createClass2.default)(CharsSchema, [{
      key: "write",
      value: function write(output, value) {
        if (value.length !== this.length) {
          throw new _ValidationError2(`Expected char-string of length ${this.length}, got ${value.length}`);
        }
        for (var i = 0; i < value.length; ++i) {
          output.writeUint8(value.charCodeAt(i));
        }
      }
    }, {
      key: "read",
      value: function read(input) {
        var content = "";
        for (var i = 0; i < this.length; ++i) {
          content += String.fromCharCode(input.readByte());
        }
        return content;
      }
    }, {
      key: "measure",
      value: function measure(_) {
        var measurer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Measurer2();
        return measurer.add(this.length);
      }
    }]);
  }(Schema);
  function _chars(length) {
    return new CharsSchema(length);
  }

  // src/structure/object.ts
  function exactEntries(record) {
    return Object.entries(record);
  }
  function resolveMap(ctx, refs) {
    var props = {};
    for (var _ref of exactEntries(refs)) {
      var _ref2 = (0, _slicedToArray2.default)(_ref, 2);
      var key = _ref2[0];
      var ref = _ref2[1];
      props[key] = ctx.resolve(ref);
    }
    return props;
  }
  var ObjectSchema = exports.ObjectSchema = /*#__PURE__*/function (_Schema13) {
    function ObjectSchema(_properties) {
      var _this14;
      (0, _classCallCheck2.default)(this, ObjectSchema);
      _this14 = _callSuper(this, ObjectSchema);
      _this14._properties = _properties;
      __publicField(_this14, "properties");
      _this14.properties = _properties;
      return _this14;
    }
    (0, _inherits2.default)(ObjectSchema, _Schema13);
    return (0, _createClass2.default)(ObjectSchema, [{
      key: "resolveReferences",
      value: function resolveReferences(ctx) {
        this.properties = resolveMap(ctx, this._properties);
      }
    }, {
      key: "write",
      value: function write(output, value) {
        for (var _ref3 of exactEntries(this.properties)) {
          var _ref4 = (0, _slicedToArray2.default)(_ref3, 2);
          var key = _ref4[0];
          var property = _ref4[1];
          property.write(output, value[key]);
        }
      }
    }, {
      key: "read",
      value: function read(input) {
        var result = {};
        for (var _ref5 of exactEntries(this.properties)) {
          var _ref6 = (0, _slicedToArray2.default)(_ref5, 2);
          var key = _ref6[0];
          var property = _ref6[1];
          result[key] = property.read(input);
        }
        return result;
      }
      /**
       * The maximum number of bytes this schema can take up.
       *
       * Is `NaN` if the schema is unbounded. If you would like to know
       * how many bytes a particular value encoding will take up, use `.measure(value)`.
       *
       * Alias for `.measure(MaxValue).size`
       */
    }, {
      key: "maxSize",
      get: function get() {
        var measurer = new _Measurer2();
        for (var property of Object.values(this.properties)) {
          property.measure(_MaxValue, measurer);
        }
        return measurer.size;
      }
    }, {
      key: "measure",
      value: function measure(value) {
        var measurer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Measurer2();
        for (var _ref7 of exactEntries(this.properties)) {
          var _ref8 = (0, _slicedToArray2.default)(_ref7, 2);
          var key = _ref8[0];
          var property = _ref8[1];
          property.measure(value === _MaxValue ? _MaxValue : value[key], measurer);
        }
        return measurer;
      }
    }, {
      key: "seekProperty",
      value: function seekProperty(reference, prop) {
        var bufferOffset = 0;
        for (var _ref9 of exactEntries(this.properties)) {
          var _ref10 = (0, _slicedToArray2.default)(_ref9, 2);
          var key = _ref10[0];
          var property = _ref10[1];
          if (key === prop) {
            return {
              bufferOffset: bufferOffset,
              schema: property
            };
          }
          bufferOffset += property.measure(reference).size;
        }
        return null;
      }
    }]);
  }(Schema);
  function _object(properties) {
    return new ObjectSchema(properties);
  }
  var GenericObjectSchema = exports.GenericObjectSchema = /*#__PURE__*/function (_Schema14) {
    function GenericObjectSchema(keyedBy, properties, _subTypeMap) {
      var _this15;
      (0, _classCallCheck2.default)(this, GenericObjectSchema);
      _this15 = _callSuper(this, GenericObjectSchema);
      _this15.keyedBy = keyedBy;
      _this15._subTypeMap = _subTypeMap;
      __publicField(_this15, "_baseObject");
      __publicField(_this15, "subTypeMap");
      _this15._baseObject = new ObjectSchema(properties);
      _this15.subTypeMap = _subTypeMap;
      return _this15;
    }
    (0, _inherits2.default)(GenericObjectSchema, _Schema14);
    return (0, _createClass2.default)(GenericObjectSchema, [{
      key: "resolveReferences",
      value: function resolveReferences(ctx) {
        this._baseObject.resolveReferences(ctx);
        this.subTypeMap = resolveMap(ctx, this._subTypeMap);
      }
    }, {
      key: "write",
      value: function write(output, value) {
        var subTypeKey = value.type;
        var subTypeDescription = this.subTypeMap[subTypeKey] || null;
        if (subTypeDescription === null) {
          throw new Error(`Unknown sub-type '${subTypeKey.toString()}' in among '${JSON.stringify(Object.keys(this.subTypeMap))}'`);
        }
        if (this.keyedBy === SubTypeKey.ENUM) {
          output.writeUint8(value.type);
        } else {
          output.writeString(value.type);
        }
        this._baseObject.write(output, value);
        for (var _ref11 of exactEntries(subTypeDescription.properties)) {
          var _ref12 = (0, _slicedToArray2.default)(_ref11, 2);
          var key = _ref12[0];
          var extraProp = _ref12[1];
          extraProp.write(output, value[key]);
        }
      }
    }, {
      key: "read",
      value: function read(input) {
        var subTypeKey = this.keyedBy === SubTypeKey.ENUM ? input.readByte() : input.readString();
        var subTypeDescription = this.subTypeMap[subTypeKey] || null;
        if (subTypeDescription === null) {
          throw new Error(`Unknown sub-type '${subTypeKey}' in among '${JSON.stringify(Object.keys(this.subTypeMap))}'`);
        }
        var result = this._baseObject.read(input);
        result.type = subTypeKey;
        if (subTypeDescription !== null) {
          for (var _ref13 of exactEntries(subTypeDescription.properties)) {
            var _ref14 = (0, _slicedToArray2.default)(_ref13, 2);
            var key = _ref14[0];
            var extraProp = _ref14[1];
            result[key] = extraProp.read(input);
          }
        }
        return result;
      }
    }, {
      key: "measure",
      value: function measure(value) {
        var measurer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Measurer2();
        this._baseObject.measure(value, measurer);
        if (this.keyedBy === SubTypeKey.ENUM) {
          measurer.add(1);
        } else if (value !== _MaxValue) {
          measurer.add(value.type.length + 1);
        } else {
          return measurer.unbounded;
        }
        if (value === _MaxValue) {
          var biggestSubType = Object.values(this.subTypeMap).map(function (subType) {
            var forkedMeasurer = measurer.fork();
            for (var prop of Object.values(subType.properties)) {
              prop.measure(_MaxValue, forkedMeasurer);
            }
            return [subType, forkedMeasurer.size];
          }).reduce(function (a, b) {
            return a[1] > b[1] ? a : b;
          })[0];
          for (var prop of Object.values(biggestSubType.properties)) {
            prop.measure(_MaxValue, measurer);
          }
        } else {
          var subTypeKey = value.type;
          var subTypeDescription = this.subTypeMap[subTypeKey] || null;
          if (subTypeDescription === null) {
            throw new Error(`Unknown sub-type '${subTypeKey.toString()}', expected one of '${JSON.stringify(Object.keys(this.subTypeMap))}'`);
          }
          for (var _ref15 of exactEntries(subTypeDescription.properties)) {
            var _ref16 = (0, _slicedToArray2.default)(_ref15, 2);
            var key = _ref16[0];
            var _prop2 = _ref16[1];
            _prop2.measure(value[key], measurer);
          }
        }
        return measurer;
      }
    }]);
  }(Schema);
  function _generic(properties, subTypeMap) {
    return new GenericObjectSchema(SubTypeKey.STRING, properties, subTypeMap);
  }
  function _genericEnum(properties, subTypeMap) {
    return new GenericObjectSchema(SubTypeKey.ENUM, properties, subTypeMap);
  }

  // src/structure/concat.ts
  function _concat(objs) {
    return new ObjectSchema(Object.fromEntries(objs.flatMap(function (_ref17) {
      var properties = _ref17.properties;
      return Object.entries(properties);
    })));
  }

  // src/structure/dynamicArray.ts
  var DynamicArraySchema = exports.DynamicArraySchema = /*#__PURE__*/function (_Schema15) {
    function DynamicArraySchema(_unstableElementType) {
      var _this16;
      (0, _classCallCheck2.default)(this, DynamicArraySchema);
      _this16 = _callSuper(this, DynamicArraySchema);
      _this16._unstableElementType = _unstableElementType;
      __publicField(_this16, "elementType");
      _this16.elementType = _unstableElementType;
      return _this16;
    }
    (0, _inherits2.default)(DynamicArraySchema, _Schema15);
    return (0, _createClass2.default)(DynamicArraySchema, [{
      key: "resolveReferences",
      value: function resolveReferences(ctx) {
        this.elementType = ctx.resolve(this._unstableElementType);
      }
    }, {
      key: "write",
      value: function write(output, values) {
        output.writeUint32(values.length);
        for (var value of values) {
          this.elementType.write(output, value);
        }
      }
    }, {
      key: "read",
      value: function read(input) {
        var array = [];
        var len = input.readUint32();
        for (var i = 0; i < len; ++i) {
          array.push(this.elementType.read(input));
        }
        return array;
      }
      /**
       * The maximum number of bytes this schema can take up.
       *
       * Is `NaN` if the schema is unbounded. If you would like to know
       * how many bytes a particular value encoding will take up, use `.measure(value)`.
       *
       * Alias for `.measure(MaxValue).size`
       */
    }, {
      key: "maxSize",
      get: function get() {
        return this.measure(_MaxValue).size;
      }
    }, {
      key: "measure",
      value: function measure(values) {
        var measurer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Measurer2();
        if (values === _MaxValue) {
          return measurer.unbounded;
        }
        measurer.add(4);
        for (var value of values) {
          this.elementType.measure(value, measurer);
        }
        return measurer;
      }
    }, {
      key: "seekProperty",
      value: function seekProperty(reference, prop) {
        if (typeof prop === "symbol") {
          return null;
        }
        var indexProp = Number.parseInt(String(prop), 10);
        if (Number.isNaN(indexProp)) {
          return null;
        }
        if (reference === _MaxValue) {
          return {
            bufferOffset: this.elementType.measure(_MaxValue).size * indexProp,
            schema: this.elementType
          };
        }
        if (indexProp >= reference.length) {
          return null;
        }
        var measurer = new _Measurer2();
        for (var i = 0; i < indexProp; ++i) {
          this.elementType.measure(reference[i], measurer);
        }
        return {
          bufferOffset: measurer.size,
          schema: this.elementType
        };
      }
    }]);
  }(Schema);
  function _dynamicArrayOf(elementSchema) {
    return new DynamicArraySchema(elementSchema);
  }

  // src/structure/keyed.ts
  var RefSchema = /*#__PURE__*/function () {
    function RefSchema(key) {
      (0, _classCallCheck2.default)(this, RefSchema);
      __publicField(this, "__unwrapped");
      __publicField(this, "ref");
      this.ref = new Ref(key);
    }
    return (0, _createClass2.default)(RefSchema, [{
      key: "resolveReferences",
      value: function resolveReferences() {
        throw new _UnresolvedReferenceError2("Tried to resolve a reference directly. Do it through a RefResolver instead.");
      }
    }, {
      key: "read",
      value: function read() {
        throw new _UnresolvedReferenceError2("Tried to read a reference directly. Resolve it instead.");
      }
    }, {
      key: "write",
      value: function write() {
        throw new _UnresolvedReferenceError2("Tried to write a reference directly. Resolve it instead.");
      }
    }, {
      key: "measure",
      value: function measure() {
        throw new _UnresolvedReferenceError2("Tried to measure size of a reference directly. Resolve it instead.");
      }
    }, {
      key: "seekProperty",
      value: function seekProperty() {
        throw new _UnresolvedReferenceError2("Tried to seek property of a reference directly. Resolve it instead.");
      }
    }]);
  }();
  var RefResolve = /*#__PURE__*/function () {
    function RefResolve() {
      (0, _classCallCheck2.default)(this, RefResolve);
      __publicField(this, "registry", {});
    }
    return (0, _createClass2.default)(RefResolve, [{
      key: "hasKey",
      value: function hasKey(key) {
        return this.registry[key] !== void 0;
      }
    }, {
      key: "register",
      value: function register(key, schema) {
        this.registry[key] = schema;
      }
    }, {
      key: "resolve",
      value: function resolve(unstableSchema) {
        if (unstableSchema instanceof RefSchema) {
          var ref = unstableSchema.ref;
          var key = ref.key;
          if (this.registry[key] !== void 0) {
            return this.registry[key];
          }
          throw new _UnresolvedReferenceError2(`Couldn't resolve reference to ${key}. Unknown key.`);
        }
        unstableSchema.resolveReferences(this);
        return unstableSchema;
      }
    }]);
  }();
  var KeyedSchema = exports.KeyedSchema = /*#__PURE__*/function () {
    function KeyedSchema(key, innerResolver) {
      (0, _classCallCheck2.default)(this, KeyedSchema);
      this.key = key;
      __publicField(this, "__unwrapped");
      __publicField(this, "__keyDefinition");
      __publicField(this, "innerType");
      this.innerType = innerResolver(new RefSchema(key));
      this.resolveReferences(new RefResolve());
    }
    return (0, _createClass2.default)(KeyedSchema, [{
      key: "resolveReferences",
      value: function resolveReferences(ctx) {
        if (!ctx.hasKey(this.key)) {
          ctx.register(this.key, this.innerType);
          this.innerType.resolveReferences(ctx);
        }
      }
    }, {
      key: "read",
      value: function read(input) {
        return this.innerType.read(input);
      }
    }, {
      key: "write",
      value: function write(output, value) {
        this.innerType.write(output, value);
      }
      /**
       * The maximum number of bytes this schema can take up.
       *
       * Is `NaN` if the schema is unbounded. If you would like to know
       * how many bytes a particular value encoding will take up, use `.measure(value)`.
       *
       * Alias for `.measure(MaxValue).size`
       */
    }, {
      key: "maxSize",
      get: function get() {
        return this.measure(_MaxValue).size;
      }
    }, {
      key: "measure",
      value: function measure(value) {
        var measurer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Measurer2();
        return this.innerType.measure(value, measurer);
      }
    }, {
      key: "seekProperty",
      value: function seekProperty(reference, prop) {
        return this.innerType.seekProperty(reference, prop);
      }
    }]);
  }();
  function _keyed(key, inner) {
    return new KeyedSchema(key, inner);
  }

  // src/structure/optional.ts
  var OptionalSchema = exports.OptionalSchema = /*#__PURE__*/function (_Schema16) {
    function OptionalSchema(_innerUnstableSchema) {
      var _this17;
      (0, _classCallCheck2.default)(this, OptionalSchema);
      _this17 = _callSuper(this, OptionalSchema);
      _this17._innerUnstableSchema = _innerUnstableSchema;
      __publicField(_this17, "innerSchema");
      _this17.innerSchema = _innerUnstableSchema;
      return _this17;
    }
    (0, _inherits2.default)(OptionalSchema, _Schema16);
    return (0, _createClass2.default)(OptionalSchema, [{
      key: "resolveReferences",
      value: function resolveReferences(ctx) {
        this.innerSchema = ctx.resolve(this._innerUnstableSchema);
      }
    }, {
      key: "write",
      value: function write(output, value) {
        if (value !== void 0 && value !== null) {
          output.writeBool(true);
          this.innerSchema.write(output, value);
        } else {
          output.writeBool(false);
        }
      }
    }, {
      key: "read",
      value: function read(input) {
        var valueExists = input.readBool();
        if (valueExists) {
          return this.innerSchema.read(input);
        }
        return void 0;
      }
      /**
       * The maximum number of bytes this schema can take up.
       *
       * Is `NaN` if the schema is unbounded. If you would like to know
       * how many bytes a particular value encoding will take up, use `.measure(value)`.
       *
       * Alias for `.measure(MaxValue).size`
       */
    }, {
      key: "maxSize",
      get: function get() {
        return this.measure(_MaxValue).size;
      }
    }, {
      key: "measure",
      value: function measure(value) {
        var measurer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Measurer2();
        if (value !== void 0) {
          this.innerSchema.measure(value, measurer);
        }
        return measurer.add(1);
      }
    }]);
  }(Schema);
  function _optional(innerType) {
    return new OptionalSchema(innerType);
  }

  // src/structure/tuple.ts
  function resolveArray(ctx, refs) {
    return refs.map(function (ref) {
      return ctx.resolve(ref);
    });
  }
  var TupleSchema = exports.TupleSchema = /*#__PURE__*/function (_Schema17) {
    function TupleSchema(_unstableSchemas) {
      var _this18;
      (0, _classCallCheck2.default)(this, TupleSchema);
      _this18 = _callSuper(this, TupleSchema);
      _this18._unstableSchemas = _unstableSchemas;
      __publicField(_this18, "schemas");
      _this18.schemas = _unstableSchemas;
      return _this18;
    }
    (0, _inherits2.default)(TupleSchema, _Schema17);
    return (0, _createClass2.default)(TupleSchema, [{
      key: "resolveReferences",
      value: function resolveReferences(ctx) {
        this.schemas = resolveArray(ctx, this._unstableSchemas);
      }
    }, {
      key: "write",
      value: function write(output, values) {
        if (values.length !== this.schemas.length) {
          throw new _ValidationError2(`Expected tuple of length ${this.schemas.length}, got ${values.length}`);
        }
        for (var i = 0; i < this.schemas.length; ++i) {
          this.schemas[i].write(output, values[i]);
        }
      }
    }, {
      key: "read",
      value: function read(input) {
        var array = [];
        for (var i = 0; i < this.schemas.length; ++i) {
          array.push(this.schemas[i].read(input));
        }
        return array;
      }
      /**
       * The maximum number of bytes this schema can take up.
       *
       * Is `NaN` if the schema is unbounded. If you would like to know
       * how many bytes a particular value encoding will take up, use `.measure(value)`.
       *
       * Alias for `.measure(MaxValue).size`
       */
    }, {
      key: "maxSize",
      get: function get() {
        return this.measure(_MaxValue).size;
      }
    }, {
      key: "measure",
      value: function measure(values) {
        var measurer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Measurer2();
        for (var i = 0; i < this.schemas.length; ++i) {
          this.schemas[i].measure(values === _MaxValue ? _MaxValue : values[i], measurer);
        }
        return measurer;
      }
    }]);
  }(Schema);
  function _tupleOf(schemas) {
    return new TupleSchema(schemas);
  }

  // src/structure/typedArray.ts
  var TypedArraySchema = exports.TypedArraySchema = /*#__PURE__*/function (_Schema18) {
    function TypedArraySchema(length, _arrayConstructor) {
      var _this19;
      (0, _classCallCheck2.default)(this, TypedArraySchema);
      _this19 = _callSuper(this, TypedArraySchema);
      _this19.length = length;
      _this19._arrayConstructor = _arrayConstructor;
      __publicField(_this19, "byteLength");
      _this19.byteLength = length * _arrayConstructor.BYTES_PER_ELEMENT;
      return _this19;
    }
    (0, _inherits2.default)(TypedArraySchema, _Schema18);
    return (0, _createClass2.default)(TypedArraySchema, [{
      key: "write",
      value: function write(output, value) {
        output.writeSlice(value);
      }
    }, {
      key: "read",
      value: function read(input) {
        var buffer = new ArrayBuffer(this.byteLength);
        var view = new this._arrayConstructor(buffer, 0, this.length);
        input.readSlice(view, 0, this.byteLength);
        return view;
      }
    }, {
      key: "measure",
      value: function measure(_value) {
        var measurer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Measurer2();
        return measurer.add(this.byteLength);
      }
    }]);
  }(Schema);
  var _u8Array = exports.u8Array = function _u8Array(length) {
    return new TypedArraySchema(length, Uint8Array);
  };
  var _u8ClampedArray = exports.u8ClampedArray = function _u8ClampedArray(length) {
    return new TypedArraySchema(length, Uint8ClampedArray);
  };
  var _u16Array = exports.u16Array = function _u16Array(length) {
    return new TypedArraySchema(length, Uint16Array);
  };
  var _u32Array = exports.u32Array = function _u32Array(length) {
    return new TypedArraySchema(length, Uint32Array);
  };
  var _i8Array = exports.i8Array = function _i8Array(length) {
    return new TypedArraySchema(length, Int8Array);
  };
  var _i16Array = exports.i16Array = function _i16Array(length) {
    return new TypedArraySchema(length, Int16Array);
  };
  var _i32Array = exports.i32Array = function _i32Array(length) {
    return new TypedArraySchema(length, Int32Array);
  };
  var _f32Array = exports.f32Array = function _f32Array(length) {
    return new TypedArraySchema(length, Float32Array);
  };
  var _f64Array = exports.f64Array = function _f64Array(length) {
    return new TypedArraySchema(length, Float64Array);
  };

  // src/util.ts
  function isSystemBigEndian() {
    var array = new Uint8Array(4);
    var view = new Uint32Array(array.buffer);
    view[0] = 1;
    return array[0] === 0;
  }
  function getSystemEndianness() {
    return isSystemBigEndian() ? "big" : "little";
  }

  // src/io/unwrapBuffer.ts
  function unwrapBuffer(buffer) {
    var byteOffset = 0;
    var innerBuffer = buffer;
    if (!!innerBuffer && "buffer" in innerBuffer && "byteOffset" in innerBuffer) {
      byteOffset += innerBuffer.byteOffset;
      innerBuffer = innerBuffer.buffer;
    }
    return {
      buffer: innerBuffer,
      byteOffset: byteOffset,
      byteLength: buffer.byteLength
    };
  }

  // src/io/bufferIOBase.ts
  var BufferIOBase = /*#__PURE__*/function () {
    function BufferIOBase(buffer, options) {
      (0, _classCallCheck2.default)(this, BufferIOBase);
      __publicField(this, "dataView");
      __publicField(this, "littleEndian");
      __publicField(this, "byteOffset", 0);
      __publicField(this, "endianness");
      var _ref18 = options != null ? options : {},
        _ref18$byteOffset = _ref18.byteOffset,
        byteOffset = _ref18$byteOffset === void 0 ? 0 : _ref18$byteOffset,
        _ref18$endianness = _ref18.endianness,
        endianness = _ref18$endianness === void 0 ? "system" : _ref18$endianness;
      this.byteOffset = byteOffset;
      var systemEndianness = getSystemEndianness();
      this.endianness = endianness === "system" ? systemEndianness : endianness;
      this.littleEndian = this.endianness === "little";
      var unwrapped = unwrapBuffer(buffer);
      this.byteOffset += unwrapped.byteOffset;
      this.dataView = new DataView(unwrapped.buffer);
    }
    return (0, _createClass2.default)(BufferIOBase, [{
      key: "currentByteOffset",
      get: function get() {
        return this.byteOffset;
      }
    }, {
      key: "seekTo",
      value: function seekTo(offset) {
        this.byteOffset = offset;
      }
    }, {
      key: "skipBytes",
      value: function skipBytes(bytes) {
        this.byteOffset += bytes;
      }
    }]);
  }();

  // src/io/float16converter.ts
  function numberToFloat16(value) {
    if (value === 0) return 0;
    if (Number.isNaN(value)) return 32256;
    if (!Number.isFinite(value)) return value > 0 ? 31744 : 64512;
    var sign = value < 0 ? 1 : 0;
    var absValue = Math.abs(value);
    var exponent = Math.floor(Math.log2(absValue));
    var mantissa = absValue / 2 ** exponent - 1;
    var biasedExponent = exponent + 15;
    var mantissaBits = Math.floor(mantissa * 1024);
    return sign << 15 | biasedExponent << 10 | mantissaBits;
  }
  function float16ToNumber(uint16Encoding) {
    var sign = (uint16Encoding & 32768) >> 15;
    var exponent = (uint16Encoding & 31744) >> 10;
    var mantissa = uint16Encoding & 1023;
    if (exponent === 0) {
      return sign === 0 ? mantissa / 1024 : -mantissa / 1024;
    }
    if (exponent === 31) {
      return mantissa === 0 ? sign === 0 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : Number.NaN;
    }
    return (sign === 0 ? 1 : -1) * (1 + mantissa / 1024) * 2 ** (exponent - 15);
  }

  // src/io/bufferReader.ts
  var _BufferReader = exports.BufferReader = /*#__PURE__*/function (_BufferIOBase) {
    function _BufferReader() {
      var _this20;
      (0, _classCallCheck2.default)(this, _BufferReader);
      _this20 = _callSuper(this, _BufferReader, arguments);
      __publicField(_this20, "_cachedTextDecoder");
      return _this20;
    }
    (0, _inherits2.default)(_BufferReader, _BufferIOBase);
    return (0, _createClass2.default)(_BufferReader, [{
      key: "_textDecoder",
      get: function get() {
        if (!this._cachedTextDecoder) {
          this._cachedTextDecoder = new TextDecoder(void 0, {
            fatal: true
          });
        }
        return this._cachedTextDecoder;
      }
    }, {
      key: "readBool",
      value: function readBool() {
        return this.dataView.getUint8(this.byteOffset++) !== 0;
      }
    }, {
      key: "readByte",
      value: function readByte() {
        return this.dataView.getUint8(this.byteOffset++);
      }
    }, {
      key: "readInt8",
      value: function readInt8() {
        return this.dataView.getInt8(this.byteOffset++);
      }
    }, {
      key: "readUint8",
      value: function readUint8() {
        return this.dataView.getUint8(this.byteOffset++);
      }
    }, {
      key: "readInt16",
      value: function readInt16() {
        var value = this.dataView.getInt16(this.byteOffset, this.littleEndian);
        this.byteOffset += 2;
        return value;
      }
    }, {
      key: "readUint16",
      value: function readUint16() {
        var value = this.dataView.getUint16(this.byteOffset, this.littleEndian);
        this.byteOffset += 2;
        return value;
      }
    }, {
      key: "readInt32",
      value: function readInt32() {
        var value = this.dataView.getInt32(this.byteOffset, this.littleEndian);
        this.byteOffset += 4;
        return value;
      }
    }, {
      key: "readUint32",
      value: function readUint32() {
        var value = this.dataView.getUint32(this.byteOffset, this.littleEndian);
        this.byteOffset += 4;
        return value;
      }
    }, {
      key: "readFloat16",
      value: function readFloat16() {
        var value = this.dataView.getUint16(this.byteOffset, this.littleEndian);
        this.byteOffset += 2;
        return float16ToNumber(value);
      }
    }, {
      key: "readFloat32",
      value: function readFloat32() {
        var value = this.dataView.getFloat32(this.byteOffset, this.littleEndian);
        this.byteOffset += 4;
        return value;
      }
    }, {
      key: "readString",
      value: function readString() {
        var strLength = 0;
        while (this.byteOffset + strLength < this.dataView.byteLength) {
          if (this.dataView.getUint8(this.byteOffset + strLength++) === 0) {
            break;
          }
        }
        var result = this._textDecoder.decode(new Uint8Array(this.dataView.buffer, this.byteOffset, strLength - 1));
        this.byteOffset += strLength;
        return result;
      }
    }, {
      key: "readSlice",
      value: function readSlice(bufferView, offset, byteLength) {
        var unwrapped = unwrapBuffer(bufferView);
        var destU8 = new Uint8Array(unwrapped.buffer, unwrapped.byteOffset + offset);
        for (var i = 0; i < byteLength; ++i) {
          destU8[i] = this.dataView.getUint8(this.byteOffset++);
        }
      }
    }]);
  }(BufferIOBase);

  // src/io/bufferWriter.ts
  var _BufferWriter = exports.BufferWriter = /*#__PURE__*/function (_BufferIOBase2) {
    function _BufferWriter() {
      var _this21;
      (0, _classCallCheck2.default)(this, _BufferWriter);
      _this21 = _callSuper(this, _BufferWriter, arguments);
      __publicField(_this21, "_cachedTextEncoder");
      return _this21;
    }
    (0, _inherits2.default)(_BufferWriter, _BufferIOBase2);
    return (0, _createClass2.default)(_BufferWriter, [{
      key: "_textEncoder",
      get: function get() {
        if (!this._cachedTextEncoder) {
          this._cachedTextEncoder = new TextEncoder();
        }
        return this._cachedTextEncoder;
      }
    }, {
      key: "writeBool",
      value: function writeBool(value) {
        this.dataView.setUint8(this.byteOffset++, value ? 1 : 0);
      }
    }, {
      key: "writeByte",
      value: function writeByte(value) {
        this.dataView.setUint8(this.byteOffset++, value);
      }
    }, {
      key: "writeInt8",
      value: function writeInt8(value) {
        this.dataView.setInt8(this.byteOffset++, value);
      }
    }, {
      key: "writeUint8",
      value: function writeUint8(value) {
        this.dataView.setUint8(this.byteOffset++, value);
      }
    }, {
      key: "writeInt16",
      value: function writeInt16(value) {
        this.dataView.setInt16(this.byteOffset, value, this.littleEndian);
        this.byteOffset += 2;
      }
    }, {
      key: "writeUint16",
      value: function writeUint16(value) {
        this.dataView.setUint16(this.byteOffset, value, this.littleEndian);
        this.byteOffset += 2;
      }
    }, {
      key: "writeInt32",
      value: function writeInt32(value) {
        this.dataView.setInt32(this.byteOffset, value, this.littleEndian);
        this.byteOffset += 4;
      }
    }, {
      key: "writeUint32",
      value: function writeUint32(value) {
        this.dataView.setUint32(this.byteOffset, value, this.littleEndian);
        this.byteOffset += 4;
      }
    }, {
      key: "writeFloat16",
      value: function writeFloat16(value) {
        this.dataView.setUint16(this.byteOffset, numberToFloat16(value), this.littleEndian);
        this.byteOffset += 2;
      }
    }, {
      key: "writeFloat32",
      value: function writeFloat32(value) {
        this.dataView.setFloat32(this.byteOffset, value, this.littleEndian);
        this.byteOffset += 4;
      }
    }, {
      key: "writeString",
      value: function writeString(value) {
        var result = this._textEncoder.encodeInto(value, new Uint8Array(this.dataView.buffer, this.byteOffset));
        this.byteOffset += result.written;
        this.dataView.setUint8(this.byteOffset++, 0);
      }
    }, {
      key: "writeSlice",
      value: function writeSlice(bufferView) {
        var unwrapped = unwrapBuffer(bufferView);
        var srcU8 = new Uint8Array(unwrapped.buffer, unwrapped.byteOffset, unwrapped.byteLength);
        for (var srcByte of srcU8) {
          this.dataView.setUint8(this.byteOffset++, srcByte);
        }
      }
    }]);
  }(BufferIOBase);

  // src/index.ts
  var src_default = exports.default = main_api_exports;
},25,[2,26,19,18,20,21,22,23],"../../node_modules/typed-binary/dist/index.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _slicedToArray(r, e) {
    return _$$_REQUIRE(_dependencyMap[0], "./arrayWithHoles.js")(r) || _$$_REQUIRE(_dependencyMap[1], "./iterableToArrayLimit.js")(r, e) || _$$_REQUIRE(_dependencyMap[2], "./unsupportedIterableToArray.js")(r, e) || _$$_REQUIRE(_dependencyMap[3], "./nonIterableRest.js")();
  }
  module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},26,[27,28,16,29],"../../node_modules/@babel/runtime/helpers/slicedToArray.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
},27,[],"../../node_modules/@babel/runtime/helpers/arrayWithHoles.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
},28,[],"../../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
},29,[],"../../node_modules/@babel/runtime/helpers/nonIterableRest.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
},30,[],"../../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.NodeTypeCatalog = void 0;
  var e = exports.NodeTypeCatalog = {
    block: 0,
    binaryExpr: 1,
    assignmentExpr: 2,
    logicalExpr: 3,
    unaryExpr: 4,
    numericLiteral: 5,
    call: 6,
    memberAccess: 7,
    indexAccess: 8,
    return: 10,
    if: 11,
    let: 12,
    const: 13,
    for: 14,
    while: 15,
    continue: 16,
    break: 17,
    arrayExpr: 100,
    preUpdate: 101,
    postUpdate: 102,
    stringLiteral: 103,
    objectExpr: 104
  };
},31,[],"../../node_modules/tinyest/index.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0], "@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.$ = it;
  exports.Y = exports.X = exports.W = exports.V = exports.U = exports.T = exports.S = exports.R = exports.Q = exports.P = exports.O = exports.N = exports.M = exports.L = exports.K = exports.J = exports.I = exports.H = exports.G = exports.F = exports.E = exports.D = exports.C = exports.B = exports.A = void 0;
  exports.Z = x;
  exports._ = A;
  exports.b = exports.aa = exports.a = void 0;
  exports.ba = l;
  exports.c = k;
  exports.ca = xt;
  exports.d = g;
  exports.da = At;
  exports.e = b;
  exports.ea = It;
  exports.f = m;
  exports.fa = vt;
  exports.g = Wt;
  exports.ga = wt;
  exports.h = tt;
  exports.ha = Bt;
  exports.i = void 0;
  exports.ia = Ze;
  exports.j = void 0;
  exports.ja = X;
  exports.k = void 0;
  exports.ka = N;
  exports.l = void 0;
  exports.la = lt;
  exports.m = void 0;
  exports.ma = mt;
  exports.n = void 0;
  exports.na = ct;
  exports.o = void 0;
  exports.oa = ft;
  exports.p = void 0;
  exports.pa = yt;
  exports.q = void 0;
  exports.qa = dt;
  exports.r = void 0;
  exports.ra = Tt;
  exports.s = void 0;
  exports.sa = gt;
  exports.t = void 0;
  exports.ta = Dt;
  exports.z = exports.y = exports.x = exports.w = exports.v = exports.ua = exports.u = void 0;
  var _possibleConstructorReturn2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1], "@babel/runtime/helpers/possibleConstructorReturn"));
  var _getPrototypeOf2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2], "@babel/runtime/helpers/getPrototypeOf"));
  var _inherits2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3], "@babel/runtime/helpers/inherits"));
  var _toConsumableArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4], "@babel/runtime/helpers/toConsumableArray"));
  var _createClass2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5], "@babel/runtime/helpers/createClass"));
  var _classCallCheck2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[6], "@babel/runtime/helpers/classCallCheck"));
  var _defineProperty2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[7], "@babel/runtime/helpers/defineProperty"));
  function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  function _defineAccessor(e, r, n, t) { var c = { configurable: !0, enumerable: !0 }; return c[e] = t, Object.defineProperty(r, n, c); }
  function X(t) {
    var e = function e(o) {
      return o;
    };
    return Object.setPrototypeOf(e, Y), e.propTypes = t, e;
  }
  var Y = (0, _defineProperty2.default)((0, _defineProperty2.default)(_defineAccessor("get", (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n, !0), "type", "struct"), "_label", void 0), "label", function () {
    return this._label;
  }), "$name", function $name(t) {
    return this._label = t, this;
  }), "toString", function toString() {
    var _this$label;
    return `struct:${(_this$label = this.label) != null ? _this$label : "<unnamed>"}`;
  });
  var T = exports.aa = function T(t, e) {
    var o = e - 1,
      i = ~o;
    return (t & o) === 0 ? t : (t & i) + e;
  };
  var j = exports.a = ["uint8", "uint8x2", "uint8x4", "sint8", "sint8x2", "sint8x4", "unorm8", "unorm8x2", "unorm8x4", "snorm8", "snorm8x2", "snorm8x4", "uint16", "uint16x2", "uint16x4", "sint16", "sint16x2", "sint16x4", "unorm16", "unorm16x2", "unorm16x4", "snorm16", "snorm16x2", "snorm16x4", "float16", "float16x2", "float16x4", "float32", "float32x2", "float32x3", "float32x4", "uint32", "uint32x2", "uint32x3", "uint32x4", "sint32", "sint32x2", "sint32x3", "sint32x4", "unorm10-10-10-2", "unorm8x4-bgra"],
    St = exports.b = {
      f32: "float32",
      vec2f: "float32x2",
      vec3f: "float32x3",
      vec4f: "float32x4",
      f16: "float16",
      vec2h: "float16x2",
      vec4h: "float16x4",
      u32: "uint32",
      vec2u: "uint32x2",
      vec3u: "uint32x3",
      vec4u: "uint32x4",
      i32: "sint32",
      vec2i: "sint32x2",
      vec3i: "sint32x3",
      vec4i: "sint32x4"
    };
  var Z = ["unstruct", "disarray", "loose-decorated"].concat(j);
  function k(t) {
    return (t == null ? void 0 : t[_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n]) && Z.includes(t == null ? void 0 : t.type);
  }
  function g(t) {
    return (t == null ? void 0 : t[_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n]) && (t == null ? void 0 : t.type) === "disarray";
  }
  function b(t) {
    return (t == null ? void 0 : t[_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n]) && (t == null ? void 0 : t.type) === "unstruct";
  }
  function m(t) {
    return (t == null ? void 0 : t[_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n]) && (t == null ? void 0 : t.type) === "loose-decorated";
  }
  function D(t) {
    var _t$attribs, _t$attribs$find;
    return (_t$attribs = t.attribs) == null ? void 0 : (_t$attribs$find = _t$attribs.find(_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").ba)) == null ? void 0 : _t$attribs$find.value;
  }
  function K(t) {
    var _t$attribs2, _t$attribs2$find;
    return (_t$attribs2 = t.attribs) == null ? void 0 : (_t$attribs2$find = _t$attribs2.find(_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").ca)) == null ? void 0 : _t$attribs2$find.value;
  }
  function Wt(t) {
    var _t$attribs3, _t$attribs3$find;
    return (_t$attribs3 = t.attribs) == null ? void 0 : (_t$attribs3$find = _t$attribs3.find(_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").da)) == null ? void 0 : _t$attribs3$find.value;
  }
  function tt(t) {
    return (0, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").Y)(t) || k(t);
  }
  var r = /*#__PURE__*/(0, _createClass2.default)(function r(e) {
      (0, _classCallCheck2.default)(this, r);
      this[_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n] = !0;
      this.type = e;
    }),
    et = exports.i = {
      uint8: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").N,
      uint8x2: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").u,
      uint8x4: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").E,
      sint8: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").O,
      sint8x2: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").t,
      sint8x4: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").D,
      unorm8: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").P,
      unorm8x2: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").r,
      unorm8x4: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").B,
      snorm8: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").P,
      snorm8x2: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").r,
      snorm8x4: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").B,
      uint16: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").N,
      uint16x2: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").u,
      uint16x4: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").E,
      sint16: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").O,
      sint16x2: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").t,
      sint16x4: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").D,
      unorm16: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").P,
      unorm16x2: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").r,
      unorm16x4: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").B,
      snorm16: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").P,
      snorm16x2: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").r,
      snorm16x4: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").B,
      float16: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").P,
      float16x2: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").r,
      float16x4: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").B,
      float32: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").P,
      float32x2: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").r,
      float32x3: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").w,
      float32x4: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").B,
      uint32: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").N,
      uint32x2: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").u,
      uint32x3: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").z,
      uint32x4: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").E,
      sint32: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").O,
      sint32x2: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").t,
      sint32x3: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").y,
      sint32x4: _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").D,
      "unorm10-10-10-2": _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").B,
      "unorm8x4-bgra": _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").B
    },
    H = exports.j = Object.keys(et),
    Ot = exports.k = new r("uint8"),
    Mt = exports.l = new r("uint8x2"),
    Nt = exports.m = new r("uint8x4"),
    Rt = exports.n = new r("sint8"),
    Gt = exports.o = new r("sint8x2"),
    jt = exports.p = new r("sint8x4"),
    Kt = exports.q = new r("unorm8"),
    Ht = exports.r = new r("unorm8x2"),
    Jt = exports.s = new r("unorm8x4"),
    qt = exports.t = new r("snorm8"),
    Qt = exports.u = new r("snorm8x2"),
    Xt = exports.v = new r("snorm8x4"),
    Yt = exports.w = new r("uint16"),
    Zt = exports.x = new r("uint16x2"),
    te = exports.y = new r("uint16x4"),
    ee = exports.z = new r("sint16"),
    re = exports.A = new r("sint16x2"),
    ne = exports.B = new r("sint16x4"),
    oe = exports.C = new r("unorm16"),
    ie = exports.D = new r("unorm16x2"),
    ae = exports.E = new r("unorm16x4"),
    se = exports.F = new r("snorm16"),
    ue = exports.G = new r("snorm16x2"),
    pe = exports.H = new r("snorm16x4"),
    xe = exports.I = new r("float16"),
    le = exports.J = new r("float16x2"),
    me = exports.K = new r("float16x4"),
    ce = exports.L = new r("float32"),
    fe = exports.M = new r("float32x2"),
    ye = exports.N = new r("float32x3"),
    de = exports.O = new r("float32x4"),
    Te = exports.P = new r("uint32"),
    ge = exports.Q = new r("uint32x2"),
    be = exports.R = new r("uint32x3"),
    De = exports.S = new r("uint32x4"),
    Ae = exports.T = new r("sint32"),
    Ie = exports.U = new r("sint32x2"),
    ve = exports.V = new r("sint32x3"),
    we = exports.W = new r("sint32x4"),
    Be = exports.X = new r("unorm10-10-10-2"),
    Ve = exports.Y = new r("unorm8x4-bgra");
  var rt = {
    f32: 4,
    f16: 2,
    i32: 4,
    u32: 4,
    vec2f: 8,
    vec2h: 4,
    vec2i: 8,
    vec2u: 8,
    vec3f: 16,
    vec3h: 8,
    vec3i: 16,
    vec3u: 16,
    vec4f: 16,
    vec4h: 8,
    vec4i: 16,
    vec4u: 16,
    mat2x2f: 8,
    mat3x3f: 16,
    mat4x4f: 16,
    atomic: 4
  };
  function nt(t) {
    var _D2, _D3;
    var e = t == null ? void 0 : t.type,
      o = rt[e];
    if (o !== void 0) return o;
    if ((0, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js")._)(t)) return Object.values(t.propTypes).map(x).reduce(function (i, f) {
      return i > f ? i : f;
    });
    if ((0, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").Z)(t)) return x(t.elementType);
    if (b(t)) {
      var _D;
      var i = Object.values(t.propTypes)[0];
      return i ? (_D = D(i)) != null ? _D : 1 : 1;
    }
    if (g(t)) return (_D2 = D(t.elementType)) != null ? _D2 : 1;
    if ((0, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").ga)(t) || m(t)) return (_D3 = D(t)) != null ? _D3 : x(t.inner);
    if (H.includes(e)) return 1;
    throw new Error(`Cannot determine alignment of data: ${JSON.stringify(t)}`);
  }
  function ot(t) {
    var _D4, _D5;
    if (b(t)) {
      var e = Object.values(t.propTypes)[0];
      return e ? A(e) : 1;
    }
    return g(t) ? A(t.elementType) : m(t) ? (_D4 = D(t)) != null ? _D4 : A(t.inner) : (_D5 = D(t)) != null ? _D5 : 1;
  }
  var J = new WeakMap(),
    q = new WeakMap();
  function x(t) {
    var e = J.get(t);
    return e === void 0 && (e = nt(t), J.set(t, e)), e;
  }
  function A(t) {
    var e = q.get(t);
    return e === void 0 && (e = ot(t), q.set(t, e)), e;
  }
  function it(t) {
    return x(t);
  }
  var at = {
    f32: 4,
    f16: 2,
    i32: 4,
    u32: 4,
    vec2f: 8,
    vec2h: 4,
    vec2i: 8,
    vec2u: 8,
    vec3f: 12,
    vec3h: 6,
    vec3i: 12,
    vec3u: 12,
    vec4f: 16,
    vec4h: 8,
    vec4i: 16,
    vec4u: 16,
    mat2x2f: 16,
    mat3x3f: 48,
    mat4x4f: 64,
    uint8: 1,
    uint8x2: 2,
    uint8x4: 4,
    sint8: 1,
    sint8x2: 2,
    sint8x4: 4,
    unorm8: 1,
    unorm8x2: 2,
    unorm8x4: 4,
    snorm8: 1,
    snorm8x2: 2,
    snorm8x4: 4,
    uint16: 2,
    uint16x2: 4,
    uint16x4: 8,
    sint16: 2,
    sint16x2: 4,
    sint16x4: 8,
    unorm16: 2,
    unorm16x2: 4,
    unorm16x4: 8,
    snorm16: 2,
    snorm16x2: 4,
    snorm16x4: 8,
    float16: 2,
    float16x2: 4,
    float16x4: 8,
    float32: 4,
    float32x2: 8,
    float32x3: 12,
    float32x4: 16,
    uint32: 4,
    uint32x2: 8,
    uint32x3: 12,
    uint32x4: 16,
    sint32: 4,
    sint32x2: 8,
    sint32x3: 12,
    sint32x4: 16,
    "unorm10-10-10-2": 4,
    "unorm8x4-bgra": 4,
    atomic: 4
  };
  function st(t) {
    var e = 0;
    for (var o of Object.values(t.propTypes)) {
      if (Number.isNaN(e)) throw new Error("Only the last property of a struct can be unbounded");
      if (e = T(e, x(o)), e += l(o), Number.isNaN(e) && o.type !== "array") throw new Error("Cannot nest unbounded struct within another struct");
    }
    return T(e, x(t));
  }
  function ut(t) {
    var e = 0;
    for (var o of Object.values(t.propTypes)) {
      var i = A(o);
      e = T(e, i), e += l(o);
    }
    return e;
  }
  function pt(t) {
    var _K;
    var e = at[t == null ? void 0 : t.type];
    if (e !== void 0) return e;
    if ((0, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js")._)(t)) return st(t);
    if (b(t)) return ut(t);
    if ((0, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").Z)(t)) {
      if (t.elementCount === 0) return Number.NaN;
      var o = x(t.elementType);
      return T(l(t.elementType), o) * t.elementCount;
    }
    if (g(t)) {
      var _o = A(t.elementType);
      return T(l(t.elementType), _o) * t.elementCount;
    }
    if ((0, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").ga)(t) || m(t)) return (_K = K(t)) != null ? _K : l(t.inner);
    throw new Error(`Cannot determine size of data: ${t}`);
  }
  var Q = new WeakMap();
  function l(t) {
    var e = Q.get(t);
    return e === void 0 && (e = pt(t), Q.set(t, e)), e;
  }
  function xt(t) {
    return l(t);
  }
  function N(t, e) {
    return new M(t, e);
  }
  var M = /*#__PURE__*/function () {
    function M(e, o) {
      (0, _classCallCheck2.default)(this, M);
      this[_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n] = !0;
      this.type = "array";
      this.elementType = e;
      this.elementCount = o;
      if (Number.isNaN(l(e))) throw new Error("Cannot nest runtime sized arrays.");
      if (!Number.isInteger(o) || o < 0) throw new Error(`Cannot create array schema with invalid element count: ${o}.`);
    }
    return (0, _createClass2.default)(M, [{
      key: "toString",
      value: function toString() {
        return `arrayOf(${this.elementType})`;
      }
    }]);
  }();
  function lt(t) {
    return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n, !0), "type", "ptr"), "inner", t), "addressSpace", "function"), "access", "read-write");
  }
  function mt(t) {
    return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n, !0), "type", "ptr"), "inner", t), "addressSpace", "private"), "access", "read-write");
  }
  function ct(t) {
    return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n, !0), "type", "ptr"), "inner", t), "addressSpace", "workgroup"), "access", "read-write");
  }
  function ft(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "read";
    return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n, !0), "type", "ptr"), "inner", t), "addressSpace", "storage"), "access", e);
  }
  function yt(t) {
    return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n, !0), "type", "ptr"), "inner", t), "addressSpace", "uniform"), "access", "read");
  }
  function dt(t) {
    return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n, !0), "type", "ptr"), "inner", t), "addressSpace", "handle"), "access", "read");
  }
  function Tt(t, e) {
    return new R(t, e);
  }
  var R = /*#__PURE__*/(0, _createClass2.default)(function R(e, o) {
    (0, _classCallCheck2.default)(this, R);
    this[_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n] = !0;
    this.type = "disarray";
    this.elementType = e;
    this.elementCount = o;
    if (!Number.isInteger(o) || o < 0) throw new Error(`Cannot create disarray schema with invalid element count: ${o}.`);
  });
  function gt(t) {
    var e = function e(o) {
      return o;
    };
    return Object.setPrototypeOf(e, bt), e.propTypes = t, e;
  }
  var bt = (0, _defineProperty2.default)((0, _defineProperty2.default)(_defineAccessor("get", (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n, !0), "type", "unstruct"), "_label", void 0), "label", function () {
    return this._label;
  }), "$name", function $name(t) {
    return this._label = t, this;
  }), "toString", function toString() {
    var _this$label2;
    return `unstruct:${(_this$label2 = this.label) != null ? _this$label2 : "<unnamed>"}`;
  });
  function Dt(t) {
    return new G(t);
  }
  var G = /*#__PURE__*/(0, _createClass2.default)(function G(e) {
    (0, _classCallCheck2.default)(this, G);
    this[_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n] = !0;
    this.type = "atomic";
    this.inner = e;
  });
  function I(t, e) {
    return (0, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").ga)(t) ? new W(t.inner, [e].concat((0, _toConsumableArray2.default)(t.attribs))) : m(t) ? new C(t.inner, [e].concat((0, _toConsumableArray2.default)(t.attribs))) : k(t) ? new C(t, [e]) : new W(t, [e]);
  }
  function At(t, e) {
    return I(e, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n, !0), "type", "@align"), "value", t));
  }
  function It(t, e) {
    return I(e, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n, !0), "type", "@size"), "value", t));
  }
  function vt(t, e) {
    return I(e, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n, !0), "type", "@location"), "value", t));
  }
  function wt(t, e) {
    return I(e, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n, !0), "type", "@interpolate"), "value", t));
  }
  function Bt(t) {
    return ((0, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").ga)(t) || m(t)) && t.attribs.find(_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").fa) !== void 0;
  }
  function Ze(t) {
    return !(0, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").ga)(t) && !m(t) ? "" : t.attribs.map(function (e) {
      return `${e.type}(${e.value}) `;
    }).join("");
  }
  var U = /*#__PURE__*/(0, _createClass2.default)(function U(e, o) {
      var _o$find, _o$find2;
      (0, _classCallCheck2.default)(this, U);
      this[_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n] = !0;
      this.inner = e;
      this.attribs = o;
      var i = (_o$find = o.find(_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").ba)) == null ? void 0 : _o$find.value,
        f = (_o$find2 = o.find(_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").ca)) == null ? void 0 : _o$find2.value;
      if (i !== void 0) {
        if (i <= 0) throw new Error(`Custom data alignment must be a positive number, got: ${i}.`);
        if (Math.log2(i) % 1 !== 0) throw new Error(`Alignment has to be a power of 2, got: ${i}.`);
        if ((0, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").Y)(this.inner) && i % x(this.inner) !== 0) throw new Error(`Custom alignment has to be a multiple of the standard data alignment. Got: ${i}, expected multiple of: ${x(this.inner)}.`);
      }
      if (f !== void 0) {
        if (f < l(this.inner)) throw new Error(`Custom data size cannot be smaller then the standard data size. Got: ${f}, expected at least: ${l(this.inner)}.`);
        if (f <= 0) throw new Error(`Custom data size must be a positive number. Got: ${f}.`);
      }
    }),
    W = /*#__PURE__*/function (_U) {
      function W() {
        var _this;
        (0, _classCallCheck2.default)(this, W);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _callSuper(this, W, [].concat(args));
        _this[_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n] = !0;
        _this.type = "decorated";
        return _this;
      }
      (0, _inherits2.default)(W, _U);
      return (0, _createClass2.default)(W);
    }(U),
    C = /*#__PURE__*/function (_U2) {
      function C() {
        var _this2;
        (0, _classCallCheck2.default)(this, C);
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        _this2 = _callSuper(this, C, [].concat(args));
        _this2[_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n] = !0;
        _this2.type = "loose-decorated";
        return _this2;
      }
      (0, _inherits2.default)(C, _U2);
      return (0, _createClass2.default)(C);
    }(U);
  function a(t, e) {
    return I(t, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").n, !0), "type", "@builtin"), "value", e));
  }
  var Vt = exports.ua = {
    vertexIndex: a(_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").N, "vertex_index"),
    instanceIndex: a(_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").N, "instance_index"),
    position: a(_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").B, "position"),
    clipDistances: a(N(_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").N, 8), "clip_distances"),
    frontFacing: a(_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").P, "front_facing"),
    fragDepth: a(_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").P, "frag_depth"),
    sampleIndex: a(_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").N, "sample_index"),
    sampleMask: a(_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").N, "sample_mask"),
    localInvocationId: a(_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").z, "local_invocation_id"),
    localInvocationIndex: a(_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").N, "local_invocation_index"),
    globalInvocationId: a(_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").z, "global_invocation_id"),
    workgroupId: a(_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").z, "workgroup_id"),
    numWorkgroups: a(_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").z, "num_workgroups"),
    subgroupInvocationId: a(_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").N, "subgroup_invocation_id"),
    subgroupSize: a(_$$_REQUIRE(_dependencyMap[8], "./chunk-KJHEEZQT.js").N, "subgroup_size")
  };
},32,[2,20,21,22,12,19,18,4,3],"../../node_modules/typegpu/chunk-YVK55BVR.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "align", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").da;
    }
  });
  Object.defineProperty(exports, "alignmentOf", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").$;
    }
  });
  Object.defineProperty(exports, "arrayOf", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").ka;
    }
  });
  Object.defineProperty(exports, "atomic", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").ta;
    }
  });
  Object.defineProperty(exports, "bool", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").M;
    }
  });
  Object.defineProperty(exports, "builtin", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").ua;
    }
  });
  Object.defineProperty(exports, "disarrayOf", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").ra;
    }
  });
  Object.defineProperty(exports, "f16", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").Q;
    }
  });
  Object.defineProperty(exports, "f32", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").P;
    }
  });
  Object.defineProperty(exports, "float16", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").I;
    }
  });
  Object.defineProperty(exports, "float16x2", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").J;
    }
  });
  Object.defineProperty(exports, "float16x4", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").K;
    }
  });
  Object.defineProperty(exports, "float32", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").L;
    }
  });
  Object.defineProperty(exports, "float32x2", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").M;
    }
  });
  Object.defineProperty(exports, "float32x3", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").N;
    }
  });
  Object.defineProperty(exports, "float32x4", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").O;
    }
  });
  Object.defineProperty(exports, "formatToWGSLType", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").i;
    }
  });
  Object.defineProperty(exports, "i32", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").O;
    }
  });
  Object.defineProperty(exports, "interpolate", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").ga;
    }
  });
  Object.defineProperty(exports, "isAlignAttrib", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").ba;
    }
  });
  Object.defineProperty(exports, "isAtomic", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").aa;
    }
  });
  Object.defineProperty(exports, "isBuiltin", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").ha;
    }
  });
  Object.defineProperty(exports, "isBuiltinAttrib", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").fa;
    }
  });
  Object.defineProperty(exports, "isData", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").h;
    }
  });
  Object.defineProperty(exports, "isDecorated", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").ga;
    }
  });
  Object.defineProperty(exports, "isDisarray", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").d;
    }
  });
  Object.defineProperty(exports, "isInterpolateAttrib", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").ea;
    }
  });
  Object.defineProperty(exports, "isLocationAttrib", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").da;
    }
  });
  Object.defineProperty(exports, "isLooseData", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").c;
    }
  });
  Object.defineProperty(exports, "isLooseDecorated", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").f;
    }
  });
  Object.defineProperty(exports, "isPtr", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").$;
    }
  });
  Object.defineProperty(exports, "isSizeAttrib", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").ca;
    }
  });
  Object.defineProperty(exports, "isUnstruct", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").e;
    }
  });
  Object.defineProperty(exports, "isWgslArray", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").Z;
    }
  });
  Object.defineProperty(exports, "isWgslData", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").Y;
    }
  });
  Object.defineProperty(exports, "isWgslStruct", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js")._;
    }
  });
  Object.defineProperty(exports, "location", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").fa;
    }
  });
  Object.defineProperty(exports, "mat2x2f", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").G;
    }
  });
  Object.defineProperty(exports, "mat3x3f", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").H;
    }
  });
  Object.defineProperty(exports, "mat4x4f", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").I;
    }
  });
  Object.defineProperty(exports, "matToArray", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").J;
    }
  });
  Object.defineProperty(exports, "packedFormats", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").j;
    }
  });
  Object.defineProperty(exports, "ptrFn", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").la;
    }
  });
  Object.defineProperty(exports, "ptrHandle", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").qa;
    }
  });
  Object.defineProperty(exports, "ptrPrivate", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").ma;
    }
  });
  Object.defineProperty(exports, "ptrStorage", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").oa;
    }
  });
  Object.defineProperty(exports, "ptrUniform", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").pa;
    }
  });
  Object.defineProperty(exports, "ptrWorkgroup", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").na;
    }
  });
  Object.defineProperty(exports, "sint16", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").z;
    }
  });
  Object.defineProperty(exports, "sint16x2", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").A;
    }
  });
  Object.defineProperty(exports, "sint16x4", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").B;
    }
  });
  Object.defineProperty(exports, "sint32", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").T;
    }
  });
  Object.defineProperty(exports, "sint32x2", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").U;
    }
  });
  Object.defineProperty(exports, "sint32x3", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").V;
    }
  });
  Object.defineProperty(exports, "sint32x4", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").W;
    }
  });
  Object.defineProperty(exports, "sint8", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").n;
    }
  });
  Object.defineProperty(exports, "sint8x2", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").o;
    }
  });
  Object.defineProperty(exports, "sint8x4", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").p;
    }
  });
  Object.defineProperty(exports, "size", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").ea;
    }
  });
  Object.defineProperty(exports, "sizeOf", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").ca;
    }
  });
  Object.defineProperty(exports, "snorm16", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").F;
    }
  });
  Object.defineProperty(exports, "snorm16x2", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").G;
    }
  });
  Object.defineProperty(exports, "snorm16x4", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").H;
    }
  });
  Object.defineProperty(exports, "snorm8", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").t;
    }
  });
  Object.defineProperty(exports, "snorm8x2", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").u;
    }
  });
  Object.defineProperty(exports, "snorm8x4", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").v;
    }
  });
  Object.defineProperty(exports, "struct", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").ja;
    }
  });
  Object.defineProperty(exports, "u32", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").N;
    }
  });
  Object.defineProperty(exports, "uint16", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").w;
    }
  });
  Object.defineProperty(exports, "uint16x2", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").x;
    }
  });
  Object.defineProperty(exports, "uint16x4", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").y;
    }
  });
  Object.defineProperty(exports, "uint32", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").P;
    }
  });
  Object.defineProperty(exports, "uint32x2", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").Q;
    }
  });
  Object.defineProperty(exports, "uint32x3", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").R;
    }
  });
  Object.defineProperty(exports, "uint32x4", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").S;
    }
  });
  Object.defineProperty(exports, "uint8", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").k;
    }
  });
  Object.defineProperty(exports, "uint8x2", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").l;
    }
  });
  Object.defineProperty(exports, "uint8x4", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").m;
    }
  });
  Object.defineProperty(exports, "unorm10_10_10_2", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").X;
    }
  });
  Object.defineProperty(exports, "unorm16", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").C;
    }
  });
  Object.defineProperty(exports, "unorm16x2", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").D;
    }
  });
  Object.defineProperty(exports, "unorm16x4", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").E;
    }
  });
  Object.defineProperty(exports, "unorm8", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").q;
    }
  });
  Object.defineProperty(exports, "unorm8x2", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").r;
    }
  });
  Object.defineProperty(exports, "unorm8x4", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").s;
    }
  });
  Object.defineProperty(exports, "unorm8x4_bgra", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").Y;
    }
  });
  Object.defineProperty(exports, "unstruct", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[0], "../chunk-YVK55BVR.js").sa;
    }
  });
  Object.defineProperty(exports, "vec2b", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").v;
    }
  });
  Object.defineProperty(exports, "vec2f", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").r;
    }
  });
  Object.defineProperty(exports, "vec2h", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").s;
    }
  });
  Object.defineProperty(exports, "vec2i", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").t;
    }
  });
  Object.defineProperty(exports, "vec2u", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").u;
    }
  });
  Object.defineProperty(exports, "vec3b", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").A;
    }
  });
  Object.defineProperty(exports, "vec3f", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").w;
    }
  });
  Object.defineProperty(exports, "vec3h", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").x;
    }
  });
  Object.defineProperty(exports, "vec3i", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").y;
    }
  });
  Object.defineProperty(exports, "vec3u", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").z;
    }
  });
  Object.defineProperty(exports, "vec4b", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").F;
    }
  });
  Object.defineProperty(exports, "vec4f", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").B;
    }
  });
  Object.defineProperty(exports, "vec4h", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").C;
    }
  });
  Object.defineProperty(exports, "vec4i", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").D;
    }
  });
  Object.defineProperty(exports, "vec4u", {
    enumerable: true,
    get: function get() {
      return _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").E;
    }
  });
},33,[32,3],"../../node_modules/typegpu/data/index.js");
global.__d(function (global, _$$_REQUIRE, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.workgroupBarrier = exports.unpack4x8unorm = exports.unpack2x16float = exports.textureSample = exports.textureBarrier = exports.sub = exports.storageBarrier = exports.sin = exports.select = exports.reflect = exports.pow = exports.pack4x8unorm = exports.pack2x16float = exports.or = exports.not = exports.normalize = exports.neg = exports.ne = exports.mul = exports.mix = exports.min = exports.max = exports.lt = exports.length = exports.le = exports.isCloseTo = exports.gt = exports.ge = exports.fract = exports.floor = exports.exp = exports.eq = exports.dot = exports.distance = exports.discard = exports.cross = exports.cos = exports.clamp = exports.ceil = exports.atomicXor = exports.atomicSub = exports.atomicStore = exports.atomicOr = exports.atomicMin = exports.atomicMax = exports.atomicLoad = exports.atomicAnd = exports.atomicAdd = exports.atan2 = exports.asin = exports.arrayLength = exports.any = exports.and = exports.allEq = exports.all = exports.add = exports.acos = exports.abs = void 0;
  var B = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[0], "typed-binary"));
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var he = exports.discard = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function () {
    throw new Error("discard() can only be used on the GPU.");
  }, function () {
    return {
      value: "discard;",
      dataType: _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").R
    };
  });
  var R = function R(e) {
      return Math.sqrt(e.x ** 2 + e.y ** 2);
    },
    K = function K(e) {
      return Math.sqrt(e.x ** 2 + e.y ** 2 + e.z ** 2);
    },
    N = function N(e) {
      return Math.sqrt(e.x ** 2 + e.y ** 2 + e.z ** 2 + e.w ** 2);
    },
    D = function D(e, t) {
      return e.x * t.x + e.y * t.y;
    },
    P = function P(e, t) {
      return e.x * t.x + e.y * t.y + e.z * t.z;
    },
    G = function G(e, t) {
      return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
    },
    r = function r(e, t, n) {
      return Math.min(Math.max(t, e), n);
    },
    b = function b(e) {
      return function (t) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").r)(e(t.x), e(t.y));
      };
    },
    M = function M(e) {
      return function (t) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").s)(e(t.x), e(t.y));
      };
    },
    q = function q(e) {
      return function (t) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").t)(e(t.x), e(t.y));
      };
    },
    J = function J(e) {
      return function (t) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").u)(e(t.x), e(t.y));
      };
    },
    A = function A(e) {
      return function (t) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").w)(e(t.x), e(t.y), e(t.z));
      };
    },
    V = function V(e) {
      return function (t) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").x)(e(t.x), e(t.y), e(t.z));
      };
    },
    L = function L(e) {
      return function (t) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").y)(e(t.x), e(t.y), e(t.z));
      };
    },
    j = function j(e) {
      return function (t) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").z)(e(t.x), e(t.y), e(t.z));
      };
    },
    I = function I(e) {
      return function (t) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").B)(e(t.x), e(t.y), e(t.z), e(t.w));
      };
    },
    $ = function $(e) {
      return function (t) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").C)(e(t.x), e(t.y), e(t.z), e(t.w));
      };
    },
    X = function X(e) {
      return function (t) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").D)(e(t.x), e(t.y), e(t.z), e(t.w));
      };
    },
    Z = function Z(e) {
      return function (t) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").E)(e(t.x), e(t.y), e(t.z), e(t.w));
      };
    },
    ae = function ae(e) {
      return function (t, n) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").r)(e(t.x, n.x), e(t.y, n.y));
      };
    },
    se = function se(e) {
      return function (t, n) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").s)(e(t.x, n.x), e(t.y, n.y));
      };
    },
    xe = function xe(e) {
      return function (t, n) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").t)(e(t.x, n.x), e(t.y, n.y));
      };
    },
    ue = function ue(e) {
      return function (t, n) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").u)(e(t.x, n.x), e(t.y, n.y));
      };
    },
    re = function re(e) {
      return function (t, n) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").w)(e(t.x, n.x), e(t.y, n.y), e(t.z, n.z));
      };
    },
    ce = function ce(e) {
      return function (t, n) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").x)(e(t.x, n.x), e(t.y, n.y), e(t.z, n.z));
      };
    },
    we = function we(e) {
      return function (t, n) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").y)(e(t.x, n.x), e(t.y, n.y), e(t.z, n.z));
      };
    },
    ie = function ie(e) {
      return function (t, n) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").z)(e(t.x, n.x), e(t.y, n.y), e(t.z, n.z));
      };
    },
    ye = function ye(e) {
      return function (t, n) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").B)(e(t.x, n.x), e(t.y, n.y), e(t.z, n.z), e(t.w, n.w));
      };
    },
    oe = function oe(e) {
      return function (t, n) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").C)(e(t.x, n.x), e(t.y, n.y), e(t.z, n.z), e(t.w, n.w));
      };
    },
    Te = function Te(e) {
      return function (t, n) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").D)(e(t.x, n.x), e(t.y, n.y), e(t.z, n.z), e(t.w, n.w));
      };
    },
    me = function me(e) {
      return function (t, n) {
        return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").E)(e(t.x, n.x), e(t.y, n.y), e(t.z, n.z), e(t.w, n.w));
      };
    },
    c = {
      eq: {
        vec2f: function vec2f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").v)(e.x === t.x, e.y === t.y);
        },
        vec2h: function vec2h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").v)(e.x === t.x, e.y === t.y);
        },
        vec2i: function vec2i(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").v)(e.x === t.x, e.y === t.y);
        },
        vec2u: function vec2u(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").v)(e.x === t.x, e.y === t.y);
        },
        "vec2<bool>": function vec2Bool(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").v)(e.x === t.x, e.y === t.y);
        },
        vec3f: function vec3f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").A)(e.x === t.x, e.y === t.y, e.z === t.z);
        },
        vec3h: function vec3h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").A)(e.x === t.x, e.y === t.y, e.z === t.z);
        },
        vec3i: function vec3i(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").A)(e.x === t.x, e.y === t.y, e.z === t.z);
        },
        vec3u: function vec3u(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").A)(e.x === t.x, e.y === t.y, e.z === t.z);
        },
        "vec3<bool>": function vec3Bool(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").A)(e.x === t.x, e.y === t.y, e.z === t.z);
        },
        vec4f: function vec4f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").F)(e.x === t.x, e.y === t.y, e.z === t.z, e.w === t.w);
        },
        vec4h: function vec4h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").F)(e.x === t.x, e.y === t.y, e.z === t.z, e.w === t.w);
        },
        vec4i: function vec4i(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").F)(e.x === t.x, e.y === t.y, e.z === t.z, e.w === t.w);
        },
        vec4u: function vec4u(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").F)(e.x === t.x, e.y === t.y, e.z === t.z, e.w === t.w);
        },
        "vec4<bool>": function vec4Bool(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").F)(e.x === t.x, e.y === t.y, e.z === t.z, e.w === t.w);
        }
      },
      lt: {
        vec2f: function vec2f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").v)(e.x < t.x, e.y < t.y);
        },
        vec2h: function vec2h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").v)(e.x < t.x, e.y < t.y);
        },
        vec2i: function vec2i(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").v)(e.x < t.x, e.y < t.y);
        },
        vec2u: function vec2u(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").v)(e.x < t.x, e.y < t.y);
        },
        vec3f: function vec3f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").A)(e.x < t.x, e.y < t.y, e.z < t.z);
        },
        vec3h: function vec3h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").A)(e.x < t.x, e.y < t.y, e.z < t.z);
        },
        vec3i: function vec3i(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").A)(e.x < t.x, e.y < t.y, e.z < t.z);
        },
        vec3u: function vec3u(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").A)(e.x < t.x, e.y < t.y, e.z < t.z);
        },
        vec4f: function vec4f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").F)(e.x < t.x, e.y < t.y, e.z < t.z, e.w < t.w);
        },
        vec4h: function vec4h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").F)(e.x < t.x, e.y < t.y, e.z < t.z, e.w < t.w);
        },
        vec4i: function vec4i(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").F)(e.x < t.x, e.y < t.y, e.z < t.z, e.w < t.w);
        },
        vec4u: function vec4u(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").F)(e.x < t.x, e.y < t.y, e.z < t.z, e.w < t.w);
        }
      },
      or: {
        "vec2<bool>": function vec2Bool(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").v)(e.x || t.x, e.y || t.y);
        },
        "vec3<bool>": function vec3Bool(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").A)(e.x || t.x, e.y || t.y, e.z || t.z);
        },
        "vec4<bool>": function vec4Bool(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").F)(e.x || t.x, e.y || t.y, e.z || t.z, e.w || t.w);
        }
      },
      all: {
        "vec2<bool>": function vec2Bool(e) {
          return e.x && e.y;
        },
        "vec3<bool>": function vec3Bool(e) {
          return e.x && e.y && e.z;
        },
        "vec4<bool>": function vec4Bool(e) {
          return e.x && e.y && e.z && e.w;
        }
      },
      abs: {
        vec2f: b(Math.abs),
        vec2h: M(Math.abs),
        vec2i: q(Math.abs),
        vec2u: J(Math.abs),
        vec3f: A(Math.abs),
        vec3h: V(Math.abs),
        vec3i: L(Math.abs),
        vec3u: j(Math.abs),
        vec4f: I(Math.abs),
        vec4h: $(Math.abs),
        vec4i: X(Math.abs),
        vec4u: Z(Math.abs)
      },
      atan2: {
        vec2f: ae(Math.atan2),
        vec2h: se(Math.atan2),
        vec3f: re(Math.atan2),
        vec3h: ce(Math.atan2),
        vec4f: ye(Math.atan2),
        vec4h: oe(Math.atan2)
      },
      acos: {
        vec2f: b(Math.acos),
        vec2h: M(Math.acos),
        vec2i: q(Math.acos),
        vec2u: J(Math.acos),
        vec3f: A(Math.acos),
        vec3h: V(Math.acos),
        vec3i: L(Math.acos),
        vec3u: j(Math.acos),
        vec4f: I(Math.acos),
        vec4h: $(Math.acos),
        vec4i: X(Math.acos),
        vec4u: Z(Math.acos)
      },
      asin: {
        vec2f: b(Math.asin),
        vec2h: M(Math.asin),
        vec2i: q(Math.asin),
        vec2u: J(Math.asin),
        vec3f: A(Math.asin),
        vec3h: V(Math.asin),
        vec3i: L(Math.asin),
        vec3u: j(Math.asin),
        vec4f: I(Math.asin),
        vec4h: $(Math.asin),
        vec4i: X(Math.asin),
        vec4u: Z(Math.asin)
      },
      ceil: {
        vec2f: b(Math.ceil),
        vec2h: M(Math.ceil),
        vec3f: A(Math.ceil),
        vec3h: V(Math.ceil),
        vec4f: I(Math.ceil),
        vec4h: $(Math.ceil)
      },
      clamp: {
        vec2f: function vec2f(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").r)(r(e.x, t.x, n.x), r(e.y, t.y, n.y));
        },
        vec2h: function vec2h(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").s)(r(e.x, t.x, n.x), r(e.y, t.y, n.y));
        },
        vec2i: function vec2i(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").t)(r(e.x, t.x, n.x), r(e.y, t.y, n.y));
        },
        vec2u: function vec2u(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").u)(r(e.x, t.x, n.x), r(e.y, t.y, n.y));
        },
        vec3f: function vec3f(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").w)(r(e.x, t.x, n.x), r(e.y, t.y, n.y), r(e.z, t.z, n.z));
        },
        vec3h: function vec3h(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").x)(r(e.x, t.x, n.x), r(e.y, t.y, n.y), r(e.z, t.z, n.z));
        },
        vec3i: function vec3i(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").y)(r(e.x, t.x, n.x), r(e.y, t.y, n.y), r(e.z, t.z, n.z));
        },
        vec3u: function vec3u(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").z)(r(e.x, t.x, n.x), r(e.y, t.y, n.y), r(e.z, t.z, n.z));
        },
        vec4f: function vec4f(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").B)(r(e.x, t.x, n.x), r(e.y, t.y, n.y), r(e.z, t.z, n.z), r(e.w, t.w, n.w));
        },
        vec4h: function vec4h(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").C)(r(e.x, t.x, n.x), r(e.y, t.y, n.y), r(e.z, t.z, n.z), r(e.w, t.w, n.w));
        },
        vec4i: function vec4i(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").D)(r(e.x, t.x, n.x), r(e.y, t.y, n.y), r(e.z, t.z, n.z), r(e.w, t.w, n.w));
        },
        vec4u: function vec4u(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").E)(r(e.x, t.x, n.x), r(e.y, t.y, n.y), r(e.z, t.z, n.z), r(e.w, t.w, n.w));
        }
      },
      length: {
        vec2f: R,
        vec2h: R,
        vec3f: K,
        vec3h: K,
        vec4f: N,
        vec4h: N
      },
      add: {
        vec2f: function vec2f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").r)(e.x + t.x, e.y + t.y);
        },
        vec2h: function vec2h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").s)(e.x + t.x, e.y + t.y);
        },
        vec2i: function vec2i(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").t)(e.x + t.x, e.y + t.y);
        },
        vec2u: function vec2u(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").u)(e.x + t.x, e.y + t.y);
        },
        vec3f: function vec3f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").w)(e.x + t.x, e.y + t.y, e.z + t.z);
        },
        vec3h: function vec3h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").x)(e.x + t.x, e.y + t.y, e.z + t.z);
        },
        vec3i: function vec3i(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").y)(e.x + t.x, e.y + t.y, e.z + t.z);
        },
        vec3u: function vec3u(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").z)(e.x + t.x, e.y + t.y, e.z + t.z);
        },
        vec4f: function vec4f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").B)(e.x + t.x, e.y + t.y, e.z + t.z, e.w + t.w);
        },
        vec4h: function vec4h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").C)(e.x + t.x, e.y + t.y, e.z + t.z, e.w + t.w);
        },
        vec4i: function vec4i(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").D)(e.x + t.x, e.y + t.y, e.z + t.z, e.w + t.w);
        },
        vec4u: function vec4u(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").E)(e.x + t.x, e.y + t.y, e.z + t.z, e.w + t.w);
        }
      },
      sub: {
        vec2f: function vec2f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").r)(e.x - t.x, e.y - t.y);
        },
        vec2h: function vec2h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").s)(e.x - t.x, e.y - t.y);
        },
        vec2i: function vec2i(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").t)(e.x - t.x, e.y - t.y);
        },
        vec2u: function vec2u(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").u)(e.x - t.x, e.y - t.y);
        },
        vec3f: function vec3f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").w)(e.x - t.x, e.y - t.y, e.z - t.z);
        },
        vec3h: function vec3h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").x)(e.x - t.x, e.y - t.y, e.z - t.z);
        },
        vec3i: function vec3i(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").y)(e.x - t.x, e.y - t.y, e.z - t.z);
        },
        vec3u: function vec3u(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").z)(e.x - t.x, e.y - t.y, e.z - t.z);
        },
        vec4f: function vec4f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").B)(e.x - t.x, e.y - t.y, e.z - t.z, e.w - t.w);
        },
        vec4h: function vec4h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").C)(e.x - t.x, e.y - t.y, e.z - t.z, e.w - t.w);
        },
        vec4i: function vec4i(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").D)(e.x - t.x, e.y - t.y, e.z - t.z, e.w - t.w);
        },
        vec4u: function vec4u(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").E)(e.x - t.x, e.y - t.y, e.z - t.z, e.w - t.w);
        }
      },
      mulSxV: {
        vec2f: function vec2f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").r)(e * t.x, e * t.y);
        },
        vec2h: function vec2h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").s)(e * t.x, e * t.y);
        },
        vec2i: function vec2i(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").t)(e * t.x, e * t.y);
        },
        vec2u: function vec2u(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").u)(e * t.x, e * t.y);
        },
        vec3f: function vec3f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").w)(e * t.x, e * t.y, e * t.z);
        },
        vec3h: function vec3h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").x)(e * t.x, e * t.y, e * t.z);
        },
        vec3i: function vec3i(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").y)(e * t.x, e * t.y, e * t.z);
        },
        vec3u: function vec3u(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").z)(e * t.x, e * t.y, e * t.z);
        },
        vec4f: function vec4f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").B)(e * t.x, e * t.y, e * t.z, e * t.w);
        },
        vec4h: function vec4h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").C)(e * t.x, e * t.y, e * t.z, e * t.w);
        },
        vec4i: function vec4i(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").D)(e * t.x, e * t.y, e * t.z, e * t.w);
        },
        vec4u: function vec4u(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").E)(e * t.x, e * t.y, e * t.z, e * t.w);
        },
        mat2x2f: function mat2x2f(e, t) {
          var n = t.columns;
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").G)(e * n[0].x, e * n[0].y, e * n[1].x, e * n[1].y);
        },
        mat3x3f: function mat3x3f(e, t) {
          var n = t.columns;
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").H)(e * n[0].x, e * n[0].y, e * n[0].z, e * n[1].x, e * n[1].y, e * n[1].z, e * n[2].x, e * n[2].y, e * n[2].z);
        },
        mat4x4f: function mat4x4f(e, t) {
          var n = t.columns;
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").I)(e * n[0].x, e * n[0].y, e * n[0].z, e * n[0].w, e * n[1].x, e * n[1].y, e * n[1].z, e * n[1].w, e * n[2].x, e * n[2].y, e * n[2].z, e * n[2].w, e * n[3].x, e * n[3].y, e * n[3].z, e * n[3].w);
        }
      },
      mulVxV: {
        vec2f: function vec2f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").r)(e.x * t.x, e.y * t.y);
        },
        vec2h: function vec2h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").s)(e.x * t.x, e.y * t.y);
        },
        vec2i: function vec2i(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").t)(e.x * t.x, e.y * t.y);
        },
        vec2u: function vec2u(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").u)(e.x * t.x, e.y * t.y);
        },
        vec3f: function vec3f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").w)(e.x * t.x, e.y * t.y, e.z * t.z);
        },
        vec3h: function vec3h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").x)(e.x * t.x, e.y * t.y, e.z * t.z);
        },
        vec3i: function vec3i(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").y)(e.x * t.x, e.y * t.y, e.z * t.z);
        },
        vec3u: function vec3u(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").z)(e.x * t.x, e.y * t.y, e.z * t.z);
        },
        vec4f: function vec4f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").B)(e.x * t.x, e.y * t.y, e.z * t.z, e.w * t.w);
        },
        vec4h: function vec4h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").C)(e.x * t.x, e.y * t.y, e.z * t.z, e.w * t.w);
        },
        vec4i: function vec4i(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").D)(e.x * t.x, e.y * t.y, e.z * t.z, e.w * t.w);
        },
        vec4u: function vec4u(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").E)(e.x * t.x, e.y * t.y, e.z * t.z, e.w * t.w);
        },
        mat2x2f: function mat2x2f(e, t) {
          var n = e.columns,
            a = t.columns;
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").G)(n[0].x * a[0].x + n[1].x * a[0].y, n[0].y * a[0].x + n[1].y * a[0].y, n[0].x * a[1].x + n[1].x * a[1].y, n[0].y * a[1].x + n[1].y * a[1].y);
        },
        mat3x3f: function mat3x3f(e, t) {
          var n = e.columns,
            a = t.columns;
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").H)(n[0].x * a[0].x + n[1].x * a[0].y + n[2].x * a[0].z, n[0].y * a[0].x + n[1].y * a[0].y + n[2].y * a[0].z, n[0].z * a[0].x + n[1].z * a[0].y + n[2].z * a[0].z, n[0].x * a[1].x + n[1].x * a[1].y + n[2].x * a[1].z, n[0].y * a[1].x + n[1].y * a[1].y + n[2].y * a[1].z, n[0].z * a[1].x + n[1].z * a[1].y + n[2].z * a[1].z, n[0].x * a[2].x + n[1].x * a[2].y + n[2].x * a[2].z, n[0].y * a[2].x + n[1].y * a[2].y + n[2].y * a[2].z, n[0].z * a[2].x + n[1].z * a[2].y + n[2].z * a[2].z);
        },
        mat4x4f: function mat4x4f(e, t) {
          var n = e.columns,
            a = t.columns;
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").I)(n[0].x * a[0].x + n[1].x * a[0].y + n[2].x * a[0].z + n[3].x * a[0].w, n[0].y * a[0].x + n[1].y * a[0].y + n[2].y * a[0].z + n[3].y * a[0].w, n[0].z * a[0].x + n[1].z * a[0].y + n[2].z * a[0].z + n[3].z * a[0].w, n[0].w * a[0].x + n[1].w * a[0].y + n[2].w * a[0].z + n[3].w * a[0].w, n[0].x * a[1].x + n[1].x * a[1].y + n[2].x * a[1].z + n[3].x * a[1].w, n[0].y * a[1].x + n[1].y * a[1].y + n[2].y * a[1].z + n[3].y * a[1].w, n[0].z * a[1].x + n[1].z * a[1].y + n[2].z * a[1].z + n[3].z * a[1].w, n[0].w * a[1].x + n[1].w * a[1].y + n[2].w * a[1].z + n[3].w * a[1].w, n[0].x * a[2].x + n[1].x * a[2].y + n[2].x * a[2].z + n[3].x * a[2].w, n[0].y * a[2].x + n[1].y * a[2].y + n[2].y * a[2].z + n[3].y * a[2].w, n[0].z * a[2].x + n[1].z * a[2].y + n[2].z * a[2].z + n[3].z * a[2].w, n[0].w * a[2].x + n[1].w * a[2].y + n[2].w * a[2].z + n[3].w * a[2].w, n[0].x * a[3].x + n[1].x * a[3].y + n[2].x * a[3].z + n[3].x * a[3].w, n[0].y * a[3].x + n[1].y * a[3].y + n[2].y * a[3].z + n[3].y * a[3].w, n[0].z * a[3].x + n[1].z * a[3].y + n[2].z * a[3].z + n[3].z * a[3].w, n[0].w * a[3].x + n[1].w * a[3].y + n[2].w * a[3].z + n[3].w * a[3].w);
        }
      },
      mulMxV: {
        mat2x2f: function mat2x2f(e, t) {
          var n = e.columns;
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").r)(n[0].x * t.x + n[1].x * t.y, n[0].y * t.x + n[1].y * t.y);
        },
        mat3x3f: function mat3x3f(e, t) {
          var n = e.columns;
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").w)(n[0].x * t.x + n[1].x * t.y + n[2].x * t.z, n[0].y * t.x + n[1].y * t.y + n[2].y * t.z, n[0].z * t.x + n[1].z * t.y + n[2].z * t.z);
        },
        mat4x4f: function mat4x4f(e, t) {
          var n = e.columns;
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").B)(n[0].x * t.x + n[1].x * t.y + n[2].x * t.z + n[3].x * t.w, n[0].y * t.x + n[1].y * t.y + n[2].y * t.z + n[3].y * t.w, n[0].z * t.x + n[1].z * t.y + n[2].z * t.z + n[3].z * t.w, n[0].w * t.x + n[1].w * t.y + n[2].w * t.z + n[3].w * t.w);
        }
      },
      mulVxM: {
        mat2x2f: function mat2x2f(e, t) {
          var n = t.columns;
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").r)(e.x * n[0].x + e.y * n[0].y, e.x * n[1].x + e.y * n[1].y);
        },
        mat3x3f: function mat3x3f(e, t) {
          var n = t.columns;
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").w)(e.x * n[0].x + e.y * n[0].y + e.z * n[0].z, e.x * n[1].x + e.y * n[1].y + e.z * n[1].z, e.x * n[2].x + e.y * n[2].y + e.z * n[2].z);
        },
        mat4x4f: function mat4x4f(e, t) {
          var n = t.columns;
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").B)(e.x * n[0].x + e.y * n[0].y + e.z * n[0].z + e.w * n[0].w, e.x * n[1].x + e.y * n[1].y + e.z * n[1].z + e.w * n[1].w, e.x * n[2].x + e.y * n[2].y + e.z * n[2].z + e.w * n[2].w, e.x * n[3].x + e.y * n[3].y + e.z * n[3].z + e.w * n[3].w);
        }
      },
      dot: {
        vec2f: D,
        vec2h: D,
        vec2i: D,
        vec2u: D,
        vec3f: P,
        vec3h: P,
        vec3i: P,
        vec3u: P,
        vec4f: G,
        vec4h: G,
        vec4i: G,
        vec4u: G
      },
      normalize: {
        vec2f: function vec2f(e) {
          var t = R(e);
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").r)(e.x / t, e.y / t);
        },
        vec2h: function vec2h(e) {
          var t = R(e);
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").s)(e.x / t, e.y / t);
        },
        vec2i: function vec2i(e) {
          var t = R(e);
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").t)(e.x / t, e.y / t);
        },
        vec2u: function vec2u(e) {
          var t = R(e);
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").u)(e.x / t, e.y / t);
        },
        vec3f: function vec3f(e) {
          var t = K(e);
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").w)(e.x / t, e.y / t, e.z / t);
        },
        vec3h: function vec3h(e) {
          var t = K(e);
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").x)(e.x / t, e.y / t, e.z / t);
        },
        vec3i: function vec3i(e) {
          var t = K(e);
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").y)(e.x / t, e.y / t, e.z / t);
        },
        vec3u: function vec3u(e) {
          var t = K(e);
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").z)(e.x / t, e.y / t, e.z / t);
        },
        vec4f: function vec4f(e) {
          var t = N(e);
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").B)(e.x / t, e.y / t, e.z / t, e.w / t);
        },
        vec4h: function vec4h(e) {
          var t = N(e);
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").C)(e.x / t, e.y / t, e.z / t, e.w / t);
        },
        vec4i: function vec4i(e) {
          var t = N(e);
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").D)(e.x / t, e.y / t, e.z / t, e.w / t);
        },
        vec4u: function vec4u(e) {
          var t = N(e);
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").E)(e.x / t, e.y / t, e.z / t, e.w / t);
        }
      },
      cross: {
        vec3f: function vec3f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").w)(e.y * t.z - e.z * t.y, e.z * t.x - e.x * t.z, e.x * t.y - e.y * t.x);
        },
        vec3h: function vec3h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").x)(e.y * t.z - e.z * t.y, e.z * t.x - e.x * t.z, e.x * t.y - e.y * t.x);
        }
      },
      floor: {
        vec2f: b(Math.floor),
        vec2h: M(Math.floor),
        vec3f: A(Math.floor),
        vec3h: V(Math.floor),
        vec4f: I(Math.floor),
        vec4h: $(Math.floor)
      },
      max: {
        vec2f: ae(Math.max),
        vec2h: se(Math.max),
        vec2i: xe(Math.max),
        vec2u: ue(Math.max),
        vec3f: re(Math.max),
        vec3h: ce(Math.max),
        vec3i: we(Math.max),
        vec3u: ie(Math.max),
        vec4f: ye(Math.max),
        vec4h: oe(Math.max),
        vec4i: Te(Math.max),
        vec4u: me(Math.max)
      },
      min: {
        vec2f: ae(Math.min),
        vec2h: se(Math.min),
        vec2i: xe(Math.min),
        vec2u: ue(Math.min),
        vec3f: re(Math.min),
        vec3h: ce(Math.min),
        vec3i: we(Math.min),
        vec3u: ie(Math.min),
        vec4f: ye(Math.min),
        vec4h: oe(Math.min),
        vec4i: Te(Math.min),
        vec4u: me(Math.min)
      },
      pow: {
        vec2f: function vec2f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").r)(e.x ** t.x, e.y ** t.y);
        },
        vec2h: function vec2h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").s)(e.x ** t.x, e.y ** t.y);
        },
        vec3f: function vec3f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").w)(e.x ** t.x, e.y ** t.y, e.z ** t.z);
        },
        vec3h: function vec3h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").x)(e.x ** t.x, e.y ** t.y, e.z ** t.z);
        },
        vec4f: function vec4f(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").B)(e.x ** t.x, e.y ** t.y, e.z ** t.z, e.w ** t.w);
        },
        vec4h: function vec4h(e, t) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").C)(e.x ** t.x, e.y ** t.y, e.z ** t.z, e.w ** t.w);
        }
      },
      mix: {
        vec2f: function vec2f(e, t, n) {
          return typeof n == "number" ? (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").r)(e.x * (1 - n) + t.x * n, e.y * (1 - n) + t.y * n) : (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").r)(e.x * (1 - n.x) + t.x * n.x, e.y * (1 - n.y) + t.y * n.y);
        },
        vec2h: function vec2h(e, t, n) {
          return typeof n == "number" ? (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").s)(e.x * (1 - n) + t.x * n, e.y * (1 - n) + t.y * n) : (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").s)(e.x * (1 - n.x) + t.x * n.x, e.y * (1 - n.y) + t.y * n.y);
        },
        vec3f: function vec3f(e, t, n) {
          return typeof n == "number" ? (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").w)(e.x * (1 - n) + t.x * n, e.y * (1 - n) + t.y * n, e.z * (1 - n) + t.z * n) : (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").w)(e.x * (1 - n.x) + t.x * n.x, e.y * (1 - n.y) + t.y * n.y, e.z * (1 - n.z) + t.z * n.z);
        },
        vec3h: function vec3h(e, t, n) {
          return typeof n == "number" ? (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").x)(e.x * (1 - n) + t.x * n, e.y * (1 - n) + t.y * n, e.z * (1 - n) + t.z * n) : (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").x)(e.x * (1 - n.x) + t.x * n.x, e.y * (1 - n.y) + t.y * n.y, e.z * (1 - n.z) + t.z * n.z);
        },
        vec4f: function vec4f(e, t, n) {
          return typeof n == "number" ? (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").B)(e.x * (1 - n) + t.x * n, e.y * (1 - n) + t.y * n, e.z * (1 - n) + t.z * n, e.w * (1 - n) + t.w * n) : (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").B)(e.x * (1 - n.x) + t.x * n.x, e.y * (1 - n.y) + t.y * n.y, e.z * (1 - n.z) + t.z * n.z, e.w * (1 - n.w) + t.w * n.w);
        },
        vec4h: function vec4h(e, t, n) {
          return typeof n == "number" ? (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").C)(e.x * (1 - n) + t.x * n, e.y * (1 - n) + t.y * n, e.z * (1 - n) + t.z * n, e.w * (1 - n) + t.w * n) : (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").C)(e.x * (1 - n.x) + t.x * n.x, e.y * (1 - n.y) + t.y * n.y, e.z * (1 - n.z) + t.z * n.z, e.w * (1 - n.w) + t.w * n.w);
        }
      },
      sin: {
        vec2f: b(Math.sin),
        vec2h: M(Math.sin),
        vec3f: A(Math.sin),
        vec3h: V(Math.sin),
        vec4f: I(Math.sin),
        vec4h: $(Math.sin)
      },
      cos: {
        vec2f: b(Math.cos),
        vec2h: M(Math.cos),
        vec3f: A(Math.cos),
        vec3h: V(Math.cos),
        vec4f: I(Math.cos),
        vec4h: $(Math.cos)
      },
      exp: {
        vec2f: b(Math.exp),
        vec2h: M(Math.exp),
        vec3f: A(Math.exp),
        vec3h: V(Math.exp),
        vec4f: I(Math.exp),
        vec4h: $(Math.exp)
      },
      fract: {
        vec2f: b(function (e) {
          return e - Math.floor(e);
        }),
        vec2h: M(function (e) {
          return e - Math.floor(e);
        }),
        vec3f: A(function (e) {
          return e - Math.floor(e);
        }),
        vec3h: V(function (e) {
          return e - Math.floor(e);
        }),
        vec4f: I(function (e) {
          return e - Math.floor(e);
        }),
        vec4h: $(function (e) {
          return e - Math.floor(e);
        })
      },
      isCloseToZero: {
        vec2f: function vec2f(e, t) {
          return Math.abs(e.x) <= t && Math.abs(e.y) <= t;
        },
        vec2h: function vec2h(e, t) {
          return Math.abs(e.x) <= t && Math.abs(e.y) <= t;
        },
        vec3f: function vec3f(e, t) {
          return Math.abs(e.x) <= t && Math.abs(e.y) <= t && Math.abs(e.z) <= t;
        },
        vec3h: function vec3h(e, t) {
          return Math.abs(e.x) <= t && Math.abs(e.y) <= t && Math.abs(e.z) <= t;
        },
        vec4f: function vec4f(e, t) {
          return Math.abs(e.x) <= t && Math.abs(e.y) <= t && Math.abs(e.z) <= t && Math.abs(e.w) <= t;
        },
        vec4h: function vec4h(e, t) {
          return Math.abs(e.x) <= t && Math.abs(e.y) <= t && Math.abs(e.z) <= t && Math.abs(e.w) <= t;
        }
      },
      neg: {
        vec2f: b(function (e) {
          return -e;
        }),
        vec2h: M(function (e) {
          return -e;
        }),
        vec2i: q(function (e) {
          return -e;
        }),
        vec2u: J(function (e) {
          return -e;
        }),
        "vec2<bool>": function vec2Bool(e) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").v)(!e.x, !e.y);
        },
        vec3f: A(function (e) {
          return -e;
        }),
        vec3h: V(function (e) {
          return -e;
        }),
        vec3i: L(function (e) {
          return -e;
        }),
        vec3u: j(function (e) {
          return -e;
        }),
        "vec3<bool>": function vec3Bool(e) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").A)(!e.x, !e.y, !e.z);
        },
        vec4f: I(function (e) {
          return -e;
        }),
        vec4h: $(function (e) {
          return -e;
        }),
        vec4i: X(function (e) {
          return -e;
        }),
        vec4u: Z(function (e) {
          return -e;
        }),
        "vec4<bool>": function vec4Bool(e) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").F)(!e.x, !e.y, !e.z, !e.w);
        }
      },
      select: {
        vec2f: function vec2f(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").r)(n.x ? t.x : e.x, n.y ? t.y : e.y);
        },
        vec2h: function vec2h(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").s)(n.x ? t.x : e.x, n.y ? t.y : e.y);
        },
        vec2i: function vec2i(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").t)(n.x ? t.x : e.x, n.y ? t.y : e.y);
        },
        vec2u: function vec2u(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").u)(n.x ? t.x : e.x, n.y ? t.y : e.y);
        },
        "vec2<bool>": function vec2Bool(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").v)(n.x ? t.x : e.x, n.y ? t.y : e.y);
        },
        vec3f: function vec3f(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").w)(n.x ? t.x : e.x, n.y ? t.y : e.y, n.z ? t.z : e.z);
        },
        vec3h: function vec3h(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").x)(n.x ? t.x : e.x, n.y ? t.y : e.y, n.z ? t.z : e.z);
        },
        vec3i: function vec3i(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").y)(n.x ? t.x : e.x, n.y ? t.y : e.y, n.z ? t.z : e.z);
        },
        vec3u: function vec3u(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").z)(n.x ? t.x : e.x, n.y ? t.y : e.y, n.z ? t.z : e.z);
        },
        "vec3<bool>": function vec3Bool(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").A)(n.x ? t.x : e.x, n.y ? t.y : e.y, n.z ? t.z : e.z);
        },
        vec4f: function vec4f(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").B)(n.x ? t.x : e.x, n.y ? t.y : e.y, n.z ? t.z : e.z, n.w ? t.w : e.w);
        },
        vec4h: function vec4h(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").C)(n.x ? t.x : e.x, n.y ? t.y : e.y, n.z ? t.z : e.z, n.w ? t.w : e.w);
        },
        vec4i: function vec4i(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").D)(n.x ? t.x : e.x, n.y ? t.y : e.y, n.z ? t.z : e.z, n.w ? t.w : e.w);
        },
        vec4u: function vec4u(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").E)(n.x ? t.x : e.x, n.y ? t.y : e.y, n.z ? t.z : e.z, n.w ? t.w : e.w);
        },
        "vec4<bool>": function vec4Bool(e, t, n) {
          return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").F)(n.x ? t.x : e.x, n.y ? t.y : e.y, n.z ? t.z : e.z, n.w ? t.w : e.w);
        }
      }
    };
  function W(e) {
    var t = e.dataType.type;
    return t === "abstractInt" || t === "abstractFloat" || t === "f32" || t === "f16" || t === "i32" || t === "u32";
  }
  var be = exports.add = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      return c.add[e.kind](e, t);
    }, function (e, t) {
      return {
        value: `(${e.value} + ${t.value})`,
        dataType: e.dataType
      };
    }),
    _ = exports.sub = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      return c.sub[e.kind](e, t);
    }, function (e, t) {
      return {
        value: `(${e.value} - ${t.value})`,
        dataType: e.dataType
      };
    }),
    fe = exports.mul = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      if (typeof e == "number") return c.mulSxV[t.kind](e, t);
      if (typeof e == "object" && typeof t == "object" && "kind" in e && "kind" in t) {
        var n = !e.kind.startsWith("mat"),
          a = !t.kind.startsWith("mat");
        if (!n && a) return c.mulMxV[e.kind](e, t);
        if (n && !a) return c.mulVxM[t.kind](e, t);
      }
      return c.mulVxV[t.kind](e, t);
    }, function (e, t) {
      var n = W(e) ? t.dataType : e.dataType.type.startsWith("mat") ? t.dataType.type.startsWith("mat") ? e.dataType : t.dataType : e.dataType;
      return {
        value: `(${e.value} * ${t.value})`,
        dataType: n
      };
    }),
    Me = exports.abs = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e) {
      return typeof e == "number" ? Math.abs(e) : c.abs[e.kind](e);
    }, function (e) {
      return {
        value: `abs(${e.value})`,
        dataType: e.dataType
      };
    }),
    Ae = exports.atan2 = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      return typeof e == "number" && typeof t == "number" ? Math.atan2(e, t) : c.atan2[e.kind](e, t);
    }, function (e, t) {
      return {
        value: `atan2(${e.value}, ${t.value})`,
        dataType: e.dataType
      };
    }),
    Ve = exports.acos = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e) {
      return typeof e == "number" ? Math.acos(e) : c.acos[e.kind](e);
    }, function (e) {
      return {
        value: `acos(${e.value})`,
        dataType: e.dataType
      };
    }),
    Ie = exports.asin = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e) {
      return typeof e == "number" ? Math.asin(e) : c.asin[e.kind](e);
    }, function (e) {
      return {
        value: `asin(${e.value})`,
        dataType: e.dataType
      };
    }),
    $e = exports.ceil = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e) {
      return typeof e == "number" ? Math.ceil(e) : c.ceil[e.kind](e);
    }, function (e) {
      return {
        value: `ceil(${e.value})`,
        dataType: e.dataType
      };
    }),
    Be = exports.clamp = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t, n) {
      return typeof e == "number" ? Math.min(Math.max(t, e), n) : c.clamp[e.kind](e, t, n);
    }, function (e, t, n) {
      return {
        value: `clamp(${e.value}, ${t.value}, ${n.value})`,
        dataType: e.dataType
      };
    }),
    ke = exports.cos = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e) {
      return typeof e == "number" ? Math.cos(e) : c.cos[e.kind](e);
    }, function (e) {
      return {
        value: `cos(${e.value})`,
        dataType: e.dataType
      };
    }),
    Se = exports.cross = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      return c.cross[e.kind](e, t);
    }, function (e, t) {
      return {
        value: `cross(${e.value}, ${t.value})`,
        dataType: e.dataType
      };
    }),
    de = exports.dot = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      return c.dot[e.kind](e, t);
    }, function (e, t) {
      return {
        value: `dot(${e.value}, ${t.value})`,
        dataType: _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").P
      };
    }),
    Oe = exports.normalize = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e) {
      return c.normalize[e.kind](e);
    }, function (e) {
      return {
        value: `normalize(${e.value})`,
        dataType: e.dataType
      };
    }),
    Fe = exports.floor = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e) {
      return typeof e == "number" ? Math.floor(e) : c.floor[e.kind](e);
    }, function (e) {
      return {
        value: `floor(${e.value})`,
        dataType: e.dataType
      };
    }),
    Ue = exports.fract = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e) {
      return typeof e == "number" ? e - Math.floor(e) : c.fract[e.kind](e);
    }, function (e) {
      return {
        value: `fract(${e.value})`,
        dataType: e.dataType
      };
    }),
    ge = exports.length = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e) {
      return typeof e == "number" ? Math.abs(e) : c.length[e.kind](e);
    }, function (e) {
      return {
        value: `length(${e.value})`,
        dataType: _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").P
      };
    }),
    Re = exports.max = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      return typeof e == "number" ? Math.max(e, t) : c.max[e.kind](e, t);
    }, function (e, t) {
      return {
        value: `max(${e.value}, ${t.value})`,
        dataType: e.dataType
      };
    }),
    Ke = exports.min = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      return typeof e == "number" ? Math.min(e, t) : c.min[e.kind](e, t);
    }, function (e, t) {
      return {
        value: `min(${e.value}, ${t.value})`,
        dataType: e.dataType
      };
    }),
    Ne = exports.sin = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e) {
      return typeof e == "number" ? Math.sin(e) : c.sin[e.kind](e);
    }, function (e) {
      return {
        value: `sin(${e.value})`,
        dataType: e.dataType
      };
    }),
    We = exports.exp = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e) {
      return typeof e == "number" ? Math.exp(e) : c.exp[e.kind](e);
    }, function (e) {
      return {
        value: `exp(${e.value})`,
        dataType: e.dataType
      };
    }),
    Ee = exports.pow = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      if (typeof e == "number" && typeof t == "number") return e ** t;
      if (typeof e == "object" && typeof t == "object" && "kind" in e && "kind" in t) return c.pow[e.kind](e, t);
      throw new Error("Invalid arguments to pow()");
    }, function (e, t) {
      return {
        value: `pow(${e.value}, ${t.value})`,
        dataType: e.dataType
      };
    }),
    _e = exports.mix = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t, n) {
      if (typeof e == "number") {
        if (typeof n != "number" || typeof t != "number") throw new Error("When e1 and e2 are numbers, the blend factor must be a number.");
        return e * (1 - n) + t * n;
      }
      if (typeof e == "number" || typeof t == "number") throw new Error("e1 and e2 need to both be vectors of the same kind.");
      return c.mix[e.kind](e, t, n);
    }, function (e, t, n) {
      return {
        value: `mix(${e.value}, ${t.value}, ${n.value})`,
        dataType: e.dataType
      };
    }),
    Ce = exports.reflect = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      return _(e, fe(2 * de(t, e), t));
    }, function (e, t) {
      return {
        value: `reflect(${e.value}, ${t.value})`,
        dataType: e.dataType
      };
    }),
    De = exports.distance = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      return typeof e == "number" && typeof t == "number" ? Math.abs(e - t) : ge(_(e, t));
    }, function (e, t) {
      return {
        value: `distance(${e.value}, ${t.value})`,
        dataType: _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").P
      };
    }),
    Pe = exports.neg = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e) {
      return typeof e == "number" ? -e : c.neg[e.kind](e);
    }, function (e) {
      return {
        value: `-(${e.value})`,
        dataType: e.dataType
      };
    });
  function E(e) {
    return e.dataType.type.includes("2") ? _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").v : e.dataType.type.includes("3") ? _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").A : _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").F;
  }
  var Ge = exports.allEq = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      return ve(C(e, t));
    }, function (e, t) {
      return {
        value: `all(${e.value} == ${t.value})`,
        dataType: _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").M
      };
    }),
    C = exports.eq = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      return c.eq[e.kind](e, t);
    }, function (e, t) {
      return {
        value: `(${e.value} == ${t.value})`,
        dataType: E(e)
      };
    }),
    qe = exports.ne = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      return k(C(e, t));
    }, function (e, t) {
      return {
        value: `(${e.value} != ${t.value})`,
        dataType: E(e)
      };
    }),
    H = exports.lt = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      return c.lt[e.kind](e, t);
    }, function (e, t) {
      return {
        value: `(${e.value} < ${t.value})`,
        dataType: E(e)
      };
    }),
    Je = exports.le = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      return le(H(e, t), C(e, t));
    }, function (e, t) {
      return {
        value: `(${e.value} <= ${t.value})`,
        dataType: E(e)
      };
    }),
    Le = exports.gt = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      return pe(k(H(e, t)), k(C(e, t)));
    }, function (e, t) {
      return {
        value: `(${e.value} > ${t.value})`,
        dataType: E(e)
      };
    }),
    je = exports.ge = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      return k(H(e, t));
    }, function (e, t) {
      return {
        value: `(${e.value} >= ${t.value})`,
        dataType: E(e)
      };
    }),
    k = exports.not = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e) {
      return c.neg[e.kind](e);
    }, function (e) {
      return {
        value: `!(${e.value})`,
        dataType: e.dataType
      };
    }),
    le = exports.or = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      return c.or[e.kind](e, t);
    }, function (e, t) {
      return {
        value: `(${e.value} | ${t.value})`,
        dataType: e.dataType
      };
    }),
    pe = exports.and = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      return k(le(k(e), k(t)));
    }, function (e, t) {
      return {
        value: `(${e.value} & ${t.value})`,
        dataType: e.dataType
      };
    }),
    ve = exports.all = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e) {
      return c.all[e.kind](e);
    }, function (e) {
      return {
        value: `all(${e.value})`,
        dataType: _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").M
      };
    }),
    Xe = exports.any = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e) {
      return !ve(k(e));
    }, function (e) {
      return {
        value: `any(${e.value})`,
        dataType: _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").M
      };
    }),
    Ze = exports.isCloseTo = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .01;
      return typeof e == "number" && typeof t == "number" ? Math.abs(e - t) < n : typeof e != "number" && typeof t != "number" ? c.isCloseToZero[e.kind](_(e, t), n) : !1;
    }, function (e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        value: .01,
        dataType: _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").P
      };
      return W(e) && W(t) ? {
        value: `(abs(f32(${e.value}) - f32(${t.value})) <= ${n.value})`,
        dataType: _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").M
      } : !W(e) && !W(t) ? {
        value: `all(abs(${e.value} - ${t.value}) <= (${e.value} - ${e.value}) + ${n.value})`,
        dataType: _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").M
      } : {
        value: "false",
        dataType: _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").M
      };
    }),
    He = exports.select = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t, n) {
      return typeof n == "boolean" ? n ? t : e : c.select[e.kind](e, t, n);
    }, function (e, t, n) {
      return {
        value: `select(${e.value}, ${t.value}, ${n.value})`,
        dataType: e.dataType
      };
    });
  var Qe = exports.workgroupBarrier = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function () {
      return console.warn("workgroupBarrier is a no-op outside of GPU mode.");
    }, function () {
      return {
        value: "workgroupBarrier()",
        dataType: _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").R
      };
    }),
    Ye = exports.storageBarrier = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function () {
      return console.warn("storageBarrier is a no-op outside of GPU mode.");
    }, function () {
      return {
        value: "storageBarrier()",
        dataType: _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").R
      };
    }),
    et = exports.textureBarrier = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function () {
      return console.warn("textureBarrier is a no-op outside of GPU mode.");
    }, function () {
      return {
        value: "textureBarrier()",
        dataType: _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").R
      };
    }),
    tt = exports.atomicLoad = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e) {
      if ((0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").Y)(e.dataType) && e.dataType.type === "atomic") return {
        value: `atomicLoad(&${e.value})`,
        dataType: e.dataType.inner
      };
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }),
    nt = exports.atomicStore = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if (!(0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").Y)(e.dataType) || e.dataType.type !== "atomic") throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
      return {
        value: `atomicStore(&${e.value}, ${t.value})`,
        dataType: _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").R
      };
    }),
    at = exports.atomicAdd = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if ((0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").Y)(e.dataType) && e.dataType.type === "atomic") return {
        value: `atomicAdd(&${e.value}, ${t.value})`,
        dataType: e.dataType.inner
      };
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }),
    st = exports.atomicSub = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if ((0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").Y)(e.dataType) && e.dataType.type === "atomic") return {
        value: `atomicSub(&${e.value}, ${t.value})`,
        dataType: e.dataType.inner
      };
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }),
    rt = exports.atomicMax = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if ((0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").Y)(e.dataType) && e.dataType.type === "atomic") return {
        value: `atomicMax(&${e.value}, ${t.value})`,
        dataType: e.dataType.inner
      };
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }),
    ct = exports.atomicMin = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if ((0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").Y)(e.dataType) && e.dataType.type === "atomic") return {
        value: `atomicMin(&${e.value}, ${t.value})`,
        dataType: e.dataType.inner
      };
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }),
    yt = exports.atomicAnd = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if ((0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").Y)(e.dataType) && e.dataType.type === "atomic") return {
        value: `atomicAnd(&${e.value}, ${t.value})`,
        dataType: e.dataType.inner
      };
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }),
    ot = exports.atomicOr = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if ((0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").Y)(e.dataType) && e.dataType.type === "atomic") return {
        value: `atomicOr(&${e.value}, ${t.value})`,
        dataType: e.dataType.inner
      };
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }),
    lt = exports.atomicXor = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if ((0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").Y)(e.dataType) && e.dataType.type === "atomic") return {
        value: `atomicXor(&${e.value}, ${t.value})`,
        dataType: e.dataType.inner
      };
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    });
  var vt = exports.arrayLength = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e) {
    return e.length;
  }, function (e) {
    return {
      value: `arrayLength(&${e.value})`,
      dataType: _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").N
    };
  });
  var xt = exports.unpack2x16float = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e) {
      var t = new ArrayBuffer(4);
      new B.BufferWriter(t).writeUint32(e);
      var a = new B.BufferReader(t);
      return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").r)(a.readFloat16(), a.readFloat16());
    }, function (e) {
      return {
        value: `unpack2x16float(${e.value})`,
        dataType: _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").r
      };
    }),
    ut = exports.pack2x16float = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e) {
      var t = new ArrayBuffer(4),
        n = new B.BufferWriter(t);
      n.writeFloat16(e.x), n.writeFloat16(e.y);
      var a = new B.BufferReader(t);
      return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").N)(a.readUint32());
    }, function (e) {
      return {
        value: `pack2x16float(${e.value})`,
        dataType: _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").N
      };
    }),
    wt = exports.unpack4x8unorm = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e) {
      var t = new ArrayBuffer(4);
      new B.BufferWriter(t).writeUint32(e);
      var a = new B.BufferReader(t);
      return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").B)(a.readUint8() / 255, a.readUint8() / 255, a.readUint8() / 255, a.readUint8() / 255);
    }, function (e) {
      return {
        value: `unpack4x8unorm(${e.value})`,
        dataType: _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").B
      };
    }),
    it = exports.pack4x8unorm = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e) {
      var t = new ArrayBuffer(4),
        n = new B.BufferWriter(t);
      n.writeUint8(e.x * 255), n.writeUint8(e.y * 255), n.writeUint8(e.z * 255), n.writeUint8(e.w * 255);
      var a = new B.BufferReader(t);
      return (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").N)(a.readUint32());
    }, function (e) {
      return {
        value: `pack4x8unorm(${e.value})`,
        dataType: _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").N
      };
    });
  var Tt = exports.textureSample = (0, _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").p)(function (e, t, n, a, Q) {
    throw new Error("Texture sampling is not supported outside of GPU mode.");
  }, function (e, t, n, a, Q) {
    var Y = [e, t, n];
    return a !== void 0 && Y.push(a), Q !== void 0 && Y.push(Q), {
      value: `textureSample(${Y.map(function (ze) {
        return ze.value;
      }).join(", ")})`,
      dataType: _$$_REQUIRE(_dependencyMap[1], "../chunk-KJHEEZQT.js").B
    };
  });
},34,[25,3],"../../node_modules/typegpu/std/index.js");

// ---------------------------------------------------------------------------

global.__UIModules.typegpu = {
  core: global.__r(1),
  data: global.__r(33),
  std: global.__r(34),
};

}

runOnUI(init)();
runOnBackground(init)();

}
