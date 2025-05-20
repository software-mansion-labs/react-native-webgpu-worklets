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

  'use client';

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
    global.console = Object.assign({}, originalConsole != null ? originalConsole : {}, {
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
    });
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
        if (originalConsole[methodName] && reactNativeMethod !== originalConsole[methodName]) {
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
  var _inGuard = 0;
  var _globalHandler = function onError(e, isFatal) {
    throw e;
  };
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
      _globalHandler && _globalHandler(error, true);
    },
    applyWithGuard: function applyWithGuard(fun, context, args, unused_onError, unused_name) {
      try {
        _inGuard++;
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
      if (typeof fun !== 'function') {
        console.warn('A function must be passed to ErrorUtils.guard, got ', fun);
        return null;
      }
      var guardName = (_ref = name != null ? name : fun.name) != null ? _ref : '<generated guard>';
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
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _typegpu = require(_dependencyMap[0], "typegpu");
  Object.keys(_typegpu).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _typegpu[key]) return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function get() {
        return _typegpu[key];
      }
    });
  });
  var _std = require(_dependencyMap[1], "typegpu/std");
  Object.keys(_std).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _std[key]) return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function get() {
        return _std[key];
      }
    });
  });
  var _data = require(_dependencyMap[2], "typegpu/data");
  Object.keys(_data).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _data[key]) return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function get() {
        return _data[key];
      }
    });
  });
},0,[1,33,34],"libEntry.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var _interopRequireDefault = require(_dependencyMap[0], "@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "MissingBindGroupsError", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.k;
    }
  });
  Object.defineProperty(exports, "MissingLinksError", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.j;
    }
  });
  Object.defineProperty(exports, "MissingSlotValueError", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.h;
    }
  });
  Object.defineProperty(exports, "MissingVertexBuffersError", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.l;
    }
  });
  Object.defineProperty(exports, "NotUniformError", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.i;
    }
  });
  exports.RandomNameRegistry = void 0;
  Object.defineProperty(exports, "ResolutionError", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.g;
    }
  });
  exports.default = exports.StrictNameRegistry = void 0;
  exports.isBuffer = ae;
  exports.isComparisonSampler = Qe;
  exports.isDerived = q;
  exports.isSampledTextureView = et;
  exports.isSampler = Ye;
  exports.isSlot = H;
  exports.isStorageTextureView = Ze;
  exports.isTexture = X;
  exports.isTgpuFn = Pr;
  exports.isUsableAsRender = Fa;
  exports.isUsableAsSampled = Sr;
  exports.isUsableAsStorage = xe;
  exports.isUsableAsUniform = xt;
  exports.isUsableAsVertex = Da;
  exports.tgpu = void 0;
  exports.unstable_asMutable = mr;
  exports.unstable_asReadonly = fr;
  exports.unstable_asUniform = gr;
  var _asyncToGenerator2 = _interopRequireDefault(require(_dependencyMap[1], "@babel/runtime/helpers/asyncToGenerator"));
  var _assertThisInitialized2 = _interopRequireDefault(require(_dependencyMap[2], "@babel/runtime/helpers/assertThisInitialized"));
  var _possibleConstructorReturn2 = _interopRequireDefault(require(_dependencyMap[3], "@babel/runtime/helpers/possibleConstructorReturn"));
  var _getPrototypeOf2 = _interopRequireDefault(require(_dependencyMap[4], "@babel/runtime/helpers/getPrototypeOf"));
  var _inherits2 = _interopRequireDefault(require(_dependencyMap[5], "@babel/runtime/helpers/inherits"));
  var _wrapNativeSuper2 = _interopRequireDefault(require(_dependencyMap[6], "@babel/runtime/helpers/wrapNativeSuper"));
  var _slicedToArray2 = _interopRequireDefault(require(_dependencyMap[7], "@babel/runtime/helpers/slicedToArray"));
  var _classCallCheck2 = _interopRequireDefault(require(_dependencyMap[8], "@babel/runtime/helpers/classCallCheck"));
  var _createClass2 = _interopRequireDefault(require(_dependencyMap[9], "@babel/runtime/helpers/createClass"));
  var _defineProperty2 = _interopRequireDefault(require(_dependencyMap[10], "@babel/runtime/helpers/defineProperty"));
  var _toConsumableArray2 = _interopRequireDefault(require(_dependencyMap[11], "@babel/runtime/helpers/toConsumableArray"));
  var _chunkSMTSXYNG = require(_dependencyMap[12], "./chunk-SMTSXYNG.js");
  var _chunk5RYM4COI = require(_dependencyMap[13], "./chunk-5RYM4COI.js");
  var _typedBinary = require(_dependencyMap[14], "typed-binary");
  var Aa = _interopRequireWildcard(require(_dependencyMap[15], "tinyest"));
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  function _defineAccessor(e, r, n, t) { var c = { configurable: !0, enumerable: !0 }; return c[e] = t, Object.defineProperty(r, n, c); }
  function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  function H(e) {
    return (e == null ? void 0 : e.resourceType) === "slot";
  }
  function q(e) {
    return (e == null ? void 0 : e.resourceType) === "derived";
  }
  function Ne(e) {
    return (e == null ? void 0 : e["~providing"]) !== void 0;
  }
  function ge(e) {
    return (e == null ? void 0 : e.resourceType) === "accessor";
  }
  function pt(e, t) {
    throw new Error(`Failed to handle ${e} at ${t}`);
  }
  var U = {
    type: "unknown"
  };
  function je(e) {
    return typeof (e == null ? void 0 : e["~resolve"]) == "function";
  }
  function J(e) {
    return typeof e == "number" || typeof e == "boolean" || typeof e == "string" || je(e) || (0, _chunk5RYM4COI.A)(e) || H(e) || q(e) || Ne(e);
  }
  function nn(e) {
    return !!e && typeof e == "object" && "getMappedRange" in e && "mapAsync" in e;
  }
  function lt(e) {
    return (e == null ? void 0 : e.resourceType) === "buffer-usage";
  }
  function Xt(e) {
    var _e$m;
    return !!e && typeof e == "object" && !!(e != null && (_e$m = e[_chunk5RYM4COI.a]) != null && _e$m.dataType);
  }
  function Zt(e) {
    return !!(e != null && e[_chunk5RYM4COI.a]);
  }
  var sa = ["vec2f", "vec2h", "vec2i", "vec2u", "vec2<bool>", "vec3f", "vec3h", "vec3i", "vec3u", "vec3<bool>", "vec4f", "vec4h", "vec4i", "vec4u", "vec4<bool>", "struct"],
    ia = {
      f: {
        1: _chunk5RYM4COI.T,
        2: _chunk5RYM4COI.V,
        3: _chunk5RYM4COI._,
        4: _chunk5RYM4COI.da
      },
      h: {
        1: _chunk5RYM4COI.U,
        2: _chunk5RYM4COI.W,
        3: _chunk5RYM4COI.$,
        4: _chunk5RYM4COI.ea
      },
      i: {
        1: _chunk5RYM4COI.S,
        2: _chunk5RYM4COI.X,
        3: _chunk5RYM4COI.aa,
        4: _chunk5RYM4COI.fa
      },
      u: {
        1: _chunk5RYM4COI.R,
        2: _chunk5RYM4COI.Y,
        3: _chunk5RYM4COI.ba,
        4: _chunk5RYM4COI.ga
      },
      b: {
        1: _chunk5RYM4COI.Q,
        2: _chunk5RYM4COI.Z,
        3: _chunk5RYM4COI.ca,
        4: _chunk5RYM4COI.ha
      }
    },
    an = {
      vec2f: _chunk5RYM4COI.V,
      vec2h: _chunk5RYM4COI.W,
      vec2i: _chunk5RYM4COI.X,
      vec2u: _chunk5RYM4COI.Y,
      "vec2<bool>": _chunk5RYM4COI.Z,
      vec3f: _chunk5RYM4COI._,
      vec3h: _chunk5RYM4COI.$,
      vec3i: _chunk5RYM4COI.aa,
      vec3u: _chunk5RYM4COI.ba,
      "vec3<bool>": _chunk5RYM4COI.ca,
      vec4f: _chunk5RYM4COI.da,
      vec4h: _chunk5RYM4COI.ea,
      vec4i: _chunk5RYM4COI.fa,
      vec4u: _chunk5RYM4COI.ga,
      "vec4<bool>": _chunk5RYM4COI.ha,
      mat2x2f: _chunk5RYM4COI.ja,
      mat3x3f: _chunk5RYM4COI.ka,
      mat4x4f: _chunk5RYM4COI.la
    },
    on = {
      vec2f: _chunk5RYM4COI.T,
      vec2h: _chunk5RYM4COI.U,
      vec2i: _chunk5RYM4COI.S,
      vec2u: _chunk5RYM4COI.R,
      "vec2<bool>": _chunk5RYM4COI.Q,
      vec3f: _chunk5RYM4COI.T,
      vec3h: _chunk5RYM4COI.U,
      vec3i: _chunk5RYM4COI.S,
      vec3u: _chunk5RYM4COI.R,
      "vec3<bool>": _chunk5RYM4COI.Q,
      vec4f: _chunk5RYM4COI.T,
      vec4h: _chunk5RYM4COI.U,
      vec4i: _chunk5RYM4COI.S,
      vec4u: _chunk5RYM4COI.R,
      "vec4<bool>": _chunk5RYM4COI.Q,
      mat2x2f: _chunk5RYM4COI.V,
      mat3x3f: _chunk5RYM4COI._,
      mat4x4f: _chunk5RYM4COI.da
    };
  function ce(e, t) {
    var _r$propTypes$t;
    if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return U;
    if (q(e) || H(e)) {
      var o = (0, _chunk5RYM4COI.o)();
      if (!o) throw new Error("Resolution context not found when unwrapping slot or derived");
      var s = o.unwrap(e);
      return mt(s);
    }
    var r = e;
    for (Xt(r) && (r = r[_chunk5RYM4COI.a].dataType); (0, _chunk5RYM4COI.K)(r);) r = r.inner;
    var n = "kind" in r ? r.kind : r.type;
    if (n === "struct") return (_r$propTypes$t = r.propTypes[t]) != null ? _r$propTypes$t : U;
    var a = t.length;
    if (sa.includes(n) && a >= 1 && a <= 4) {
      var _o = n.includes("bool") ? "b" : n[4],
        _s = ia[_o][a];
      if (_s) return _s;
    }
    return (0, _chunk5RYM4COI.A)(r) ? r : U;
  }
  function er(e) {
    if ((0, _chunk5RYM4COI.A)(e)) {
      if ((0, _chunk5RYM4COI.B)(e)) return e.elementType;
      if (e.type in on) return on[e.type];
    }
    return U;
  }
  function mt(e) {
    var _ft$dataType, _ft;
    if (Xt(e)) return e[_chunk5RYM4COI.a].dataType;
    if (typeof e == "string") return U;
    if (typeof e == "number") return (_ft$dataType = (_ft = ft(String(e))) == null ? void 0 : _ft.dataType) != null ? _ft$dataType : U;
    if (typeof e == "boolean") return _chunk5RYM4COI.Q;
    if ("kind" in e) {
      var t = e.kind;
      if (t in an) return an[t];
    }
    return (0, _chunk5RYM4COI.A)(e) || je(e) ? e : U;
  }
  function ft(e) {
    if (/^0x[0-9a-f]+$/i.test(e)) return {
      value: e,
      dataType: _chunk5RYM4COI.O
    };
    if (/^0b[01]+$/i.test(e)) return {
      value: `${Number.parseInt(e.slice(2), 2)}`,
      dataType: _chunk5RYM4COI.O
    };
    if (/^-?(?:\d+\.\d*|\d*\.\d+)$/i.test(e)) return {
      value: e,
      dataType: _chunk5RYM4COI.P
    };
    if (/^-?\d+(?:\.\d+)?e-?\d+$/i.test(e)) return {
      value: e,
      dataType: _chunk5RYM4COI.P
    };
    if (/^-?\d+$/i.test(e)) return {
      value: e,
      dataType: _chunk5RYM4COI.O
    };
  }
  var tr = {
    rank: Number.POSITIVE_INFINITY,
    action: "none"
  };
  function Ue(e) {
    return e.type === "decorated" ? e.inner : e;
  }
  function sn(e) {
    return (0, _chunk5RYM4COI.w)(e) ? _chunk5RYM4COI.ia[e.type] : void 0;
  }
  function dt(e, t) {
    var r = Ue(e),
      n = Ue(t);
    if (r.type === n.type) return {
      rank: 0,
      action: "none"
    };
    if (r.type === "abstractFloat") {
      if (n.type === "f32") return {
        rank: 1,
        action: "none"
      };
      if (n.type === "f16") return {
        rank: 2,
        action: "none"
      };
    }
    if (r.type === "abstractInt") {
      if (n.type === "i32") return {
        rank: 3,
        action: "none"
      };
      if (n.type === "u32") return {
        rank: 4,
        action: "none"
      };
      if (n.type === "abstractFloat") return {
        rank: 5,
        action: "none"
      };
      if (n.type === "f32") return {
        rank: 6,
        action: "none"
      };
      if (n.type === "f16") return {
        rank: 7,
        action: "none"
      };
    }
    if ((0, _chunk5RYM4COI.w)(r) && (0, _chunk5RYM4COI.w)(n)) {
      var a = sn(r),
        o = sn(n);
      if (a && o) return dt(a, o);
    }
    return (0, _chunk5RYM4COI.z)(r) && (0, _chunk5RYM4COI.z)(n) ? {
      rank: 0,
      action: "none"
    } : tr;
  }
  function ua(e, t) {
    var r = Ue(e),
      n = Ue(t);
    if (r.type === "ptr" && dt(r.inner, n).rank < Number.POSITIVE_INFINITY) return {
      rank: 0,
      action: "deref"
    };
    if (n.type === "ptr" && dt(r, n.inner).rank < Number.POSITIVE_INFINITY) return {
      rank: 1,
      action: "ref"
    };
    var a = {
      f32: 0,
      f16: 1,
      i32: 2,
      u32: 3,
      bool: 4
    };
    if (r.type in a && n.type in a) {
      var o = r.type,
        s = n.type;
      if (o !== s) {
        var i = a[o];
        return {
          rank: a[s] < i ? 10 : 20,
          action: "cast",
          targetType: n
        };
      }
    }
    return tr;
  }
  function pa(e, t, r) {
    var n = dt(e, t);
    return n.rank < Number.POSITIVE_INFINITY ? n : r ? ua(e, t) : tr;
  }
  function un(e, t, r) {
    var n,
      a = Number.POSITIVE_INFINITY,
      o = new Map();
    for (var u of t) {
      var d = 0,
        g = [],
        c = !0;
      for (var y of e) {
        var x = pa(y, u, r);
        if (x.rank === Number.POSITIVE_INFINITY) {
          c = !1;
          break;
        }
        d += x.rank, g.push(x);
      }
      c && d < a && (a = d, n = u, o.set(n, g));
    }
    if (!n) return;
    var i = o.get(n).map(function (u, d) {
        return Object.assign({
          sourceIndex: d,
          action: u.action
        }, u.action === "cast" && {
          targetType: u.targetType
        });
      }),
      l = i.some(function (u) {
        return u.action === "cast";
      });
    return {
      targetType: n,
      actions: i,
      hasImplicitConversions: l
    };
  }
  function rr(e) {
    return e.type === "abstractFloat" ? _chunk5RYM4COI.T : e.type === "abstractInt" ? _chunk5RYM4COI.S : e;
  }
  function pn(e, t) {
    if (e.length === 0) return;
    var r = (0, _toConsumableArray2.default)(new Set(e.map(Ue))),
      n = t ? (0, _toConsumableArray2.default)(new Set(t.map(Ue))) : r,
      a = un(e, n, !1);
    if (a) return a;
    var o = un(e, n, !0);
    if (o) return o.hasImplicitConversions = o.actions.some(function (s) {
      return s.action === "cast";
    }), o;
  }
  function A(e, t) {
    return J(t.value) ? e.resolve(t.value) : String(t.value);
  }
  function la(e, t, r, n) {
    if (r.action === "none") return {
      value: t.value,
      dataType: n
    };
    var a = A(e, t);
    switch (r.action) {
      case "ref":
        return {
          value: `&${a}`,
          dataType: n
        };
      case "deref":
        return {
          value: `*${a}`,
          dataType: n
        };
      case "cast":
        return {
          value: `${e.resolve(n)}(${a})`,
          dataType: n
        };
      default:
        pt(r.action, "applyActionToSnippet");
    }
  }
  function W(e, t, r) {
    var n = t.map(function (o) {
      return o.dataType;
    });
    if (n.some(function (o) {
      return o === U;
    })) return;
    var a = pn(n, r);
    if (a) return a.hasImplicitConversions && console.warn(`Implicit conversions from [
${t.map(function (o) {
      return `  ${o.value}: ${o.dataType.type}`;
    }).join(`,
`)}
] to ${a.targetType.type} are supported, but not recommended.
Consider using explicit conversions instead.`), t.map(function (o, s) {
      var i = a.actions[s];
      return (0, _chunk5RYM4COI.f)(i, "Action should not be undefined"), la(e, o, i, a.targetType);
    });
  }
  function nr(e, t, r) {
    return Object.keys(t.propTypes).map(function (a) {
      var _W$, _W;
      var o = r[a];
      if (!o) throw new Error(`Missing property ${a}`);
      var s = t.propTypes[a];
      return (_W$ = (_W = W(e, [o], [s])) == null ? void 0 : _W[0]) != null ? _W$ : o;
    });
  }
  function ar(e) {
    if (J(e)) return {
      value: e,
      dataType: mt(e)
    };
    if (Array.isArray(e)) {
      var _pn;
      var t = e.map(ar).filter(Boolean),
        r = (0, _chunk5RYM4COI.o)();
      if (!r) throw new Error("Tried to coerce array without a context");
      var n = W(r, t),
        a = (_pn = pn(t.map(function (o) {
          return o.dataType;
        }))) == null ? void 0 : _pn.targetType;
      return !n || !a ? {
        value: e,
        dataType: U
      } : {
        value: n.map(function (o) {
          return o.value;
        }).join(", "),
        dataType: (0, _chunkSMTSXYNG.da)(rr(a), e.length)
      };
    }
    if (typeof e != "object") {
      var _t2 = ft(String(e));
      if (_t2) return _t2;
    }
    return {
      value: e,
      dataType: U
    };
  }
  var Y = {
    get: function get(e, t) {
      if (t in e) return Reflect.get(e, t);
      if (t !== "~providing") return t === "toString" || t === Symbol.toStringTag || t === Symbol.toPrimitive ? function () {
        return e.toString();
      } : new Proxy((0, _defineProperty2.default)({
        "~resolve": function resolve(r) {
          return `${r.resolve(e)}.${String(t)}`;
        },
        toString: function toString() {
          var _p;
          return `.value(...).${String(t)}:${(_p = (0, _chunk5RYM4COI.c)(e)) != null ? _p : "<unnamed>"}`;
        }
      }, _chunk5RYM4COI.a, {
        dataType: ce(e[_chunk5RYM4COI.a].dataType, String(t))
      }), Y);
    }
  };
  function ze(e) {
    var t = e;
    for (; H(t) || q(t) || ge(t) || lt(t);) t = t.value;
    return t;
  }
  function ln(e, t) {
    return new or(e, t);
  }
  var or = /*#__PURE__*/function () {
    function or(t, r) {
      (0, _classCallCheck2.default)(this, or);
      this.dataType = t;
      this._value = r;
      this[_chunk5RYM4COI.a] = {
        dataType: t
      };
    }
    return (0, _createClass2.default)(or, [{
      key: "$name",
      value: function $name(t) {
        return (0, _chunk5RYM4COI.d)(this, t), this;
      }
    }, {
      key: "~resolve",
      value: function resolve(t) {
        var r = t.names.makeUnique((0, _chunk5RYM4COI.c)(this)),
          n = t.resolveValue(this._value, this.dataType);
        return t.addDeclaration(`const ${r} = ${n};`), r;
      }
    }, {
      key: "toString",
      value: function toString() {
        var _p2;
        return `const:${(_p2 = (0, _chunk5RYM4COI.c)(this)) != null ? _p2 : "<unnamed>"}`;
      }
    }, {
      key: "value",
      get: function get() {
        var _this = this;
        return (0, _chunk5RYM4COI.r)() ? new Proxy((0, _defineProperty2.default)({
          "~resolve": function resolve(t) {
            return t.resolve(_this);
          },
          toString: function toString() {
            var _p3;
            return `.value:${(_p3 = (0, _chunk5RYM4COI.c)(_this)) != null ? _p3 : "<unnamed>"}`;
          }
        }, _chunk5RYM4COI.a, {
          dataType: this.dataType
        }), Y) : this._value;
      }
    }]);
  }();
  function Q(e, t) {
    for (var _ref of Object.entries(t)) {
      var _ref2 = (0, _slicedToArray2.default)(_ref, 2);
      var r = _ref2[0];
      var n = _ref2[1];
      e[r] = n, (0, _chunk5RYM4COI.e)(n) && (0, _chunk5RYM4COI.c)(n) === void 0 && n.$name(r);
    }
  }
  function dn(e, t, r) {
    var n = (0, _toConsumableArray2.default)(e.matchAll(/:\s*(?<arg>.*?)\s*[,)]/g)).map(function (a) {
      return a ? a[1] : void 0;
    });
    r(Object.fromEntries(t.flatMap(function (a, o) {
      var s = n ? n[o] : void 0;
      return (0, _chunk5RYM4COI.C)(a) && s !== void 0 ? [[s, a]] : [];
    })));
  }
  function Be(e, t, r) {
    var _n$;
    var n = e.match(/->\s(?<output>[\w\d_]+)\s{/),
      a = n ? (_n$ = n[1]) == null ? void 0 : _n$.trim() : void 0;
    (0, _chunk5RYM4COI.C)(t) && a && !/\s/g.test(a) && r((0, _defineProperty2.default)({}, a, t));
  }
  function da(e) {
    return new RegExp(`(?<![\\w\\$_.])${e.replaceAll(".", "\\.").replaceAll("$", "\\$")}(?![\\w\\$_])`, "g");
  }
  function ye(e, t, r) {
    return Object.entries(t).reduce(function (n, _ref3) {
      var _map;
      var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
        a = _ref4[0],
        o = _ref4[1];
      return J(o) || (0, _chunkSMTSXYNG.d)(o) ? n.replaceAll(da(a), e.resolve(o)) : o !== null && typeof o == "object" ? ((_map = (0, _toConsumableArray2.default)(r.matchAll(new RegExp(`${a.replaceAll(".", "\\.").replaceAll("$", "\\$")}\\.(?<prop>.*?)(?![\\w\\$_])`, "g"))).map(function (i) {
        return i[1];
      })) != null ? _map : []).reduce(function (i, l) {
        return l && l in o ? ye(e, (0, _defineProperty2.default)({}, `${a}.${l}`, o[l]), i) : i;
      }, n) : n;
    }, r);
  }
  function mn(e) {
    return new sr(e);
  }
  var sr = /*#__PURE__*/function () {
    function sr(t) {
      (0, _classCallCheck2.default)(this, sr);
      this.externalsToApply = [];
      this.declaration = t;
    }
    return (0, _createClass2.default)(sr, [{
      key: "$uses",
      value: function $uses(t) {
        return this.externalsToApply.push(t), this;
      }
    }, {
      key: "~resolve",
      value: function resolve(t) {
        var r = {};
        for (var a of this.externalsToApply) Q(r, a);
        var n = ye(t, r, this.declaration);
        return t.addDeclaration(n), "";
      }
    }, {
      key: "toString",
      value: function toString() {
        return `declare: ${this.declaration}`;
      }
    }]);
  }();
  var fn = new WeakMap();
  function gn(e) {
    return fn.get(e);
  }
  function cn(e, t, r) {
    return fn.set(e, {
      ast: t,
      externals: r
    }), e;
  }
  function yn(e) {
    return function () {
      throw new Error(`The function "${e != null ? e : "<unnamed>"}" is invokable only on the GPU. If you want to use it on the CPU, mark it with the "kernel & js" directive.`);
    };
  }
  function Ke(e) {
    return typeof (e == null ? void 0 : e.format) == "string";
  }
  function Tn(e, t) {
    var r = [];
    if ((0, _chunkSMTSXYNG.i)(e)) {
      var _ee;
      if (!Ke(t)) throw new Error("Shader expected a single attribute, not a record of attributes to be passed in.");
      return r.push(t._layout), {
        usedVertexLayouts: r,
        bufferDefinitions: [{
          arrayStride: t._layout.stride,
          stepMode: t._layout.stepMode,
          attributes: [{
            format: t.format,
            offset: t.offset,
            shaderLocation: (_ee = (0, _chunkSMTSXYNG.h)(e)) != null ? _ee : 0
          }]
        }]
      };
    }
    var n = [],
      a = new WeakMap(),
      o = 0;
    for (var _ref5 of Object.entries(e)) {
      var _ee2;
      var _ref6 = (0, _slicedToArray2.default)(_ref5, 2);
      var s = _ref6[0];
      var i = _ref6[1];
      if ((0, _chunkSMTSXYNG.ia)(i)) continue;
      var l = t[s];
      if (!l) throw new Error(`An attribute by the name of '${s}' was not provided to the shader.`);
      var u = l._layout,
        d = a.get(u);
      d || (r.push(u), d = [], n.push({
        arrayStride: u.stride,
        stepMode: u.stepMode,
        attributes: d
      }), a.set(u, d)), o = (_ee2 = (0, _chunkSMTSXYNG.h)(i)) != null ? _ee2 : o, d.push({
        format: l.format,
        offset: l.offset,
        shaderLocation: o++
      });
    }
    return {
      usedVertexLayouts: r,
      bufferDefinitions: n
    };
  }
  var ma = ["bool", "f32", "f16", "i32", "u32", "vec2f", "vec3f", "vec4f", "vec2h", "vec3h", "vec4h", "vec2i", "vec3i", "vec4i", "vec2u", "vec3u", "vec4u", "vec2<bool>", "vec3<bool>", "vec4<bool>", "mat2x2f", "mat3x3f", "mat4x4f"];
  function fa(e) {
    return ma.includes(e.type);
  }
  function ir(e, _ref7) {
    var _ref8 = (0, _slicedToArray2.default)(_ref7, 2),
      t = _ref8[0],
      r = _ref8[1];
    return `  ${(0, _chunkSMTSXYNG.ja)(r)}${t}: ${e.resolve(r)},
`;
  }
  function ga(e, t) {
    var r = e.names.makeUnique((0, _chunk5RYM4COI.c)(t));
    return e.addDeclaration(`
struct ${r} {
${Object.entries(t.propTypes).map(function (n) {
      return ir(e, n);
    }).join("")}}
`), r;
  }
  function ca(e, t) {
    var r = e.names.makeUnique((0, _chunk5RYM4COI.c)(t));
    return e.addDeclaration(`
struct ${r} {
${Object.entries(t.propTypes).map(function (n) {
      return Ke(n[1]) ? ir(e, [n[0], _chunkSMTSXYNG.j[n[1].format]]) : ir(e, n);
    }).join("")}
}
`), r;
  }
  function ya(e, t) {
    var r = e.resolve(t.elementType);
    return t.elementCount === 0 ? `array<${r}>` : `array<${r}, ${t.elementCount}>`;
  }
  function Ta(e, t) {
    var r = e.resolve(Ke(t.elementType) ? _chunkSMTSXYNG.j[t.elementType.format] : t.elementType);
    return t.elementCount === 0 ? `array<${r}>` : `array<${r}, ${t.elementCount}>`;
  }
  function ur(e, t) {
    if ((0, _chunkSMTSXYNG.d)(t)) return t.type === "unstruct" ? ca(e, t) : t.type === "disarray" ? Ta(e, t) : t.type === "loose-decorated" ? e.resolve(Ke(t.inner) ? _chunkSMTSXYNG.j[t.inner.format] : t.inner) : e.resolve(_chunkSMTSXYNG.j[t.type]);
    if (fa(t)) return t.type;
    if (t.type === "struct") return ga(e, t);
    if (t.type === "array") return ya(e, t);
    if (t.type === "atomic") return `atomic<${ur(e, t.inner)}>`;
    if (t.type === "decorated") return e.resolve(t.inner);
    if (t.type === "ptr") return t.addressSpace === "storage" ? `ptr<storage, ${e.resolve(t.inner)}, ${t.access === "read-write" ? "read_write" : t.access}>` : `ptr<${t.addressSpace}, ${e.resolve(t.inner)}>`;
    if (t.type === "abstractInt" || t.type === "abstractFloat") throw new Error("Abstract types have no concrete representation in WGSL");
    if (t.type === "void") throw new Error("Void has no representation in WGSL");
    pt(t, "resolveData");
  }
  function xa(e, t) {
    var r = "size" in e ? e.size : e.currentByteOffset,
      n = t - 1,
      a = r & n;
    "skipBytes" in e ? e.skipBytes(t - a & n) : e.add(t - a & n);
  }
  var B = xa;
  var xn = new WeakMap();
  function gt(e) {
    var t = xn.get(e);
    if (t) return t;
    var r = new _typedBinary.Measurer(),
      n = {},
      a;
    for (var o in e.propTypes) {
      var s = e.propTypes[o];
      if (s === void 0) throw new Error(`Property ${o} is undefined in struct`);
      var i = r.size;
      B(r, (0, _chunkSMTSXYNG.f)(e) ? (0, _chunkSMTSXYNG.$)(s) : (0, _chunkSMTSXYNG._)(s)), a && (a.padding = r.size - i);
      var l = (0, _chunkSMTSXYNG.ba)(s);
      n[o] = {
        offset: r.size,
        size: l
      }, a = n[o], r.add(l);
    }
    return a && (a.padding = (0, _chunkSMTSXYNG.a)((0, _chunkSMTSXYNG.ba)(e), (0, _chunkSMTSXYNG._)(e)) - r.size), xn.set(e, n), n;
  }
  var yt = function () {
      try {
        return new Function("return true"), !0;
      } catch (_unused) {
        return !1;
      }
    }(),
    pr = new WeakMap(),
    lr = {
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
    dr = {
      u32: "setUint32",
      i32: "setInt32",
      f32: "setFloat32"
    };
  function ct(e, t, r) {
    if ((0, _chunk5RYM4COI.E)(e) || (0, _chunk5RYM4COI.K)(e)) return ct(e.inner, t, r);
    if ((0, _chunk5RYM4COI.C)(e) || (0, _chunkSMTSXYNG.f)(e)) {
      var a = gt(e),
        o = Object.entries(a).sort(function (i, l) {
          return i[1].offset - l[1].offset;
        }),
        s = "";
      for (var _ref9 of o) {
        var _ref10 = (0, _slicedToArray2.default)(_ref9, 2);
        var i = _ref10[0];
        var l = _ref10[1];
        var u = e.propTypes[i];
        u && (s += ct(u, `(${t} + ${l.offset})`, `${r}.${i}`));
      }
      return s;
    }
    if ((0, _chunk5RYM4COI.B)(e) || (0, _chunkSMTSXYNG.e)(e)) {
      var _a2 = e,
        _o2 = (0, _chunkSMTSXYNG.a)((0, _chunkSMTSXYNG.ba)(_a2.elementType), (0, _chunkSMTSXYNG._)(_a2.elementType)),
        _s2 = "";
      return _s2 += `for (let i = 0; i < ${_a2.elementCount}; i++) {
`, _s2 += ct(_a2.elementType, `(${t} + i * ${_o2})`, `${r}[i]`), _s2 += `}
`, _s2;
    }
    if ((0, _chunk5RYM4COI.w)(e)) {
      var _a3 = lr[e.type],
        _o3 = "",
        _s3 = dr[_a3],
        _i = ["x", "y", "z", "w"],
        _l = (0, _chunk5RYM4COI.u)(e) ? 2 : (0, _chunk5RYM4COI.v)(e) ? 3 : 4;
      for (var _u = 0; _u < _l; _u++) _o3 += `output.${_s3}((${t} + ${_u * 4}), ${r}.${_i[_u]}, littleEndian);
`;
      return _o3;
    }
    if ((0, _chunk5RYM4COI.z)(e)) {
      var _a4 = lr[e.type],
        _o4 = dr[_a4],
        _s4 = (0, _chunk5RYM4COI.x)(e) ? 2 : (0, _chunk5RYM4COI.y)(e) ? 3 : 4,
        _i2 = _s4 * _s4,
        _l2 = (0, _chunkSMTSXYNG.a)(_s4 * 4, 8),
        _u2 = "";
      for (var d = 0; d < _i2; d++) {
        var g = Math.floor(d / _s4),
          c = d % _s4,
          y = g * _l2 + c * 4;
        _u2 += `output.${_o4}((${t} + ${y}), ${r}.columns[${g}].${["x", "y", "z", "w"][c]}, littleEndian);
`;
      }
      return _u2;
    }
    var n = lr[e.type];
    return `output.${dr[n]}(${t}, ${r}, littleEndian);
`;
  }
  function Tt(e) {
    if (pr.has(e)) return pr.get(e);
    var t = ct(e, "offset", "value"),
      r = new Function("output", "offset", "value", "littleEndian=true", t);
    return pr.set(e, r), r;
  }
  var Re = {
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
      var n = (0, _chunkSMTSXYNG._)(t);
      B(e, n);
      for (var _ref11 of Object.entries(t.propTypes)) {
        var _ref12 = (0, _slicedToArray2.default)(_ref11, 2);
        var a = _ref12[0];
        var o = _ref12[1];
        B(e, (0, _chunkSMTSXYNG._)(o)), ne(e, o, r[a]);
      }
      B(e, n);
    },
    array: function array(e, t, r) {
      if (t.elementCount === 0) throw new Error("Cannot write using a runtime-sized schema.");
      var n = (0, _chunkSMTSXYNG._)(t);
      B(e, n);
      var a = e.currentByteOffset;
      for (var o = 0; o < Math.min(t.elementCount, r.length); o++) B(e, n), ne(e, t.elementType, r[o]);
      e.seekTo(a + (0, _chunkSMTSXYNG.ba)(t));
    },
    ptr: function ptr() {
      throw new Error("Pointers are not host-shareable");
    },
    atomic: function atomic(e, t, r) {
      var _Re$t$inner$type;
      (_Re$t$inner$type = Re[t.inner.type]) == null || _Re$t$inner$type.call(Re, e, t, r);
    },
    decorated: function decorated(e, t, r) {
      var _Re$t$inner$type2, _t$inner;
      var n = (0, _chunkSMTSXYNG.$)(t);
      B(e, n);
      var a = e.currentByteOffset;
      (_Re$t$inner$type2 = Re[(_t$inner = t.inner) == null ? void 0 : _t$inner.type]) != null && _Re$t$inner$type2.call(Re, e, t.inner, r), e.seekTo(a + (0, _chunkSMTSXYNG.ba)(t));
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
      var n = (0, _chunkSMTSXYNG._)(t);
      B(e, n);
      var a = e.currentByteOffset;
      for (var o = 0; o < Math.min(t.elementCount, r.length); o++) {
        var _Re$t$elementType$typ, _t$elementType;
        B(e, n), (_Re$t$elementType$typ = Re[(_t$elementType = t.elementType) == null ? void 0 : _t$elementType.type]) == null ? void 0 : _Re$t$elementType$typ.call(Re, e, t.elementType, r[o]);
      }
      e.seekTo(a + (0, _chunkSMTSXYNG.ba)(t));
    },
    unstruct: function unstruct(e, t, r) {
      for (var _ref13 of Object.entries(t.propTypes)) {
        var _Re$a$type;
        var _ref14 = (0, _slicedToArray2.default)(_ref13, 2);
        var n = _ref14[0];
        var a = _ref14[1];
        (_Re$a$type = Re[a.type]) == null || _Re$a$type.call(Re, e, a, r[n]);
      }
    },
    "loose-decorated": function looseDecorated(e, t, r) {
      var _t$inner2;
      var n = (0, _chunkSMTSXYNG.$)(t);
      B(e, n);
      var a = e.currentByteOffset,
        o = Re[(_t$inner2 = t.inner) == null ? void 0 : _t$inner2.type];
      return o != null && o(e, t.inner, r), e.seekTo(a + (0, _chunkSMTSXYNG.ba)(t)), r;
    }
  };
  function ne(e, t, r) {
    var n = Re[t.type];
    if (!n) throw new Error(`Cannot write data of type '${t.type}'.`);
    n(e, t, r);
  }
  var Te = {
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
      return (0, _chunk5RYM4COI.V)(e.readFloat32(), e.readFloat32());
    },
    vec3f: function vec3f(e) {
      return (0, _chunk5RYM4COI._)(e.readFloat32(), e.readFloat32(), e.readFloat32());
    },
    vec4f: function vec4f(e) {
      return (0, _chunk5RYM4COI.da)(e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32());
    },
    vec2h: function vec2h(e) {
      return (0, _chunk5RYM4COI.W)(e.readFloat16(), e.readFloat16());
    },
    vec3h: function vec3h(e) {
      return (0, _chunk5RYM4COI.$)(e.readFloat16(), e.readFloat16(), e.readFloat16());
    },
    vec4h: function vec4h(e) {
      return (0, _chunk5RYM4COI.ea)(e.readFloat16(), e.readFloat16(), e.readFloat16(), e.readFloat16());
    },
    vec2i: function vec2i(e) {
      return (0, _chunk5RYM4COI.X)(e.readInt32(), e.readInt32());
    },
    vec3i: function vec3i(e) {
      return (0, _chunk5RYM4COI.aa)(e.readInt32(), e.readInt32(), e.readInt32());
    },
    vec4i: function vec4i(e) {
      return (0, _chunk5RYM4COI.fa)(e.readInt32(), e.readInt32(), e.readInt32(), e.readInt32());
    },
    vec2u: function vec2u(e) {
      return (0, _chunk5RYM4COI.Y)(e.readUint32(), e.readUint32());
    },
    vec3u: function vec3u(e) {
      return (0, _chunk5RYM4COI.ba)(e.readUint32(), e.readUint32(), e.readUint32());
    },
    vec4u: function vec4u(e) {
      return (0, _chunk5RYM4COI.ga)(e.readUint32(), e.readUint32(), e.readUint32(), e.readUint32());
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
      return (0, _chunk5RYM4COI.ja)(e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32());
    },
    mat3x3f: function mat3x3f(e) {
      var t = function t() {
        var r = e.readFloat32();
        return e.readFloat32(), r;
      };
      return (0, _chunk5RYM4COI.ka)(e.readFloat32(), e.readFloat32(), t(), e.readFloat32(), e.readFloat32(), t(), e.readFloat32(), e.readFloat32(), t());
    },
    mat4x4f: function mat4x4f(e) {
      return (0, _chunk5RYM4COI.la)(e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32());
    },
    struct: function struct(e, t) {
      var r = (0, _chunkSMTSXYNG._)(t);
      B(e, r);
      var n = {};
      for (var _ref15 of Object.entries(t.propTypes)) {
        var _ref16 = (0, _slicedToArray2.default)(_ref15, 2);
        var a = _ref16[0];
        var o = _ref16[1];
        B(e, (0, _chunkSMTSXYNG._)(o)), n[a] = M(e, o);
      }
      return B(e, r), n;
    },
    array: function array(e, t) {
      if (t.elementCount === 0) throw new Error("Cannot read using a runtime-sized schema.");
      var r = (0, _chunkSMTSXYNG._)(t),
        n = [];
      for (var a = 0; a < t.elementCount; a++) {
        B(e, r);
        var o = t.elementType,
          s = M(e, o);
        n.push(s);
      }
      return B(e, r), n;
    },
    ptr: function ptr() {
      throw new Error("Pointers are not host-shareable");
    },
    atomic: function atomic(e, t) {
      return M(e, t.inner);
    },
    decorated: function decorated(e, t) {
      var r = (0, _chunkSMTSXYNG.$)(t);
      B(e, r);
      var n = e.currentByteOffset,
        a = M(e, t.inner);
      return e.seekTo(n + (0, _chunkSMTSXYNG.ba)(t)), a;
    },
    uint8: function uint8(e) {
      return e.readUint8();
    },
    uint8x2: function uint8x2(e) {
      return (0, _chunk5RYM4COI.Y)(e.readUint8(), e.readUint8());
    },
    uint8x4: function uint8x4(e) {
      return (0, _chunk5RYM4COI.ga)(e.readUint8(), e.readUint8(), e.readUint8(), e.readUint8());
    },
    sint8: function sint8(e) {
      return e.readInt8();
    },
    sint8x2: function sint8x2(e) {
      return (0, _chunk5RYM4COI.X)(e.readInt8(), e.readInt8());
    },
    sint8x4: function sint8x4(e) {
      return (0, _chunk5RYM4COI.fa)(e.readInt8(), e.readInt8(), e.readInt8(), e.readInt8());
    },
    unorm8: function unorm8(e) {
      return e.readUint8() / 255;
    },
    unorm8x2: function unorm8x2(e) {
      return (0, _chunk5RYM4COI.V)(e.readUint8() / 255, e.readUint8() / 255);
    },
    unorm8x4: function unorm8x4(e) {
      return (0, _chunk5RYM4COI.da)(e.readUint8() / 255, e.readUint8() / 255, e.readUint8() / 255, e.readUint8() / 255);
    },
    snorm8: function snorm8(e) {
      return (e.readUint8() - 128) / 127;
    },
    snorm8x2: function snorm8x2(e) {
      return (0, _chunk5RYM4COI.V)((e.readUint8() - 128) / 127, (e.readUint8() - 128) / 127);
    },
    snorm8x4: function snorm8x4(e) {
      return (0, _chunk5RYM4COI.da)((e.readUint8() - 128) / 127, (e.readUint8() - 128) / 127, (e.readUint8() - 128) / 127, (e.readUint8() - 128) / 127);
    },
    uint16: function uint16(e) {
      return e.readUint16();
    },
    uint16x2: function uint16x2(e) {
      return (0, _chunk5RYM4COI.Y)(e.readUint16(), e.readUint16());
    },
    uint16x4: function uint16x4(e) {
      return (0, _chunk5RYM4COI.ga)(e.readUint16(), e.readUint16(), e.readUint16(), e.readUint16());
    },
    sint16: function sint16(e) {
      return e.readInt16();
    },
    sint16x2: function sint16x2(e) {
      return (0, _chunk5RYM4COI.X)(e.readInt16(), e.readInt16());
    },
    sint16x4: function sint16x4(e) {
      return (0, _chunk5RYM4COI.fa)(e.readInt16(), e.readInt16(), e.readInt16(), e.readInt16());
    },
    unorm16: function unorm16(e) {
      return e.readUint16() / 65535;
    },
    unorm16x2: function unorm16x2(e) {
      return (0, _chunk5RYM4COI.V)(e.readUint16() / 65535, e.readUint16() / 65535);
    },
    unorm16x4: function unorm16x4(e) {
      return (0, _chunk5RYM4COI.da)(e.readUint16() / 65535, e.readUint16() / 65535, e.readUint16() / 65535, e.readUint16() / 65535);
    },
    snorm16: function snorm16(e) {
      return (e.readUint16() - 32768) / 32767;
    },
    snorm16x2: function snorm16x2(e) {
      return (0, _chunk5RYM4COI.V)(Te.snorm16(e), Te.snorm16(e));
    },
    snorm16x4: function snorm16x4(e) {
      return (0, _chunk5RYM4COI.da)(Te.snorm16(e), Te.snorm16(e), Te.snorm16(e), Te.snorm16(e));
    },
    float16: function float16(e) {
      return e.readFloat16();
    },
    float16x2: function float16x2(e) {
      return (0, _chunk5RYM4COI.V)(e.readFloat16(), e.readFloat16());
    },
    float16x4: function float16x4(e) {
      return (0, _chunk5RYM4COI.da)(e.readFloat16(), e.readFloat16(), e.readFloat16(), e.readFloat16());
    },
    float32: function float32(e) {
      return e.readFloat32();
    },
    float32x2: function float32x2(e) {
      return (0, _chunk5RYM4COI.V)(e.readFloat32(), e.readFloat32());
    },
    float32x3: function float32x3(e) {
      return (0, _chunk5RYM4COI._)(e.readFloat32(), e.readFloat32(), e.readFloat32());
    },
    float32x4: function float32x4(e) {
      return (0, _chunk5RYM4COI.da)(e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32());
    },
    uint32: function uint32(e) {
      return e.readUint32();
    },
    uint32x2: function uint32x2(e) {
      return (0, _chunk5RYM4COI.Y)(e.readUint32(), e.readUint32());
    },
    uint32x3: function uint32x3(e) {
      return (0, _chunk5RYM4COI.ba)(e.readUint32(), e.readUint32(), e.readUint32());
    },
    uint32x4: function uint32x4(e) {
      return (0, _chunk5RYM4COI.ga)(e.readUint32(), e.readUint32(), e.readUint32(), e.readUint32());
    },
    sint32: function sint32(e) {
      return e.readInt32();
    },
    sint32x2: function sint32x2(e) {
      return (0, _chunk5RYM4COI.X)(e.readInt32(), e.readInt32());
    },
    sint32x3: function sint32x3(e) {
      return (0, _chunk5RYM4COI.aa)(e.readInt32(), e.readInt32(), e.readInt32());
    },
    sint32x4: function sint32x4(e) {
      return (0, _chunk5RYM4COI.fa)(e.readInt32(), e.readInt32(), e.readInt32(), e.readInt32());
    },
    "unorm10-10-10-2": function unorm1010102(e) {
      var t = e.readUint32(),
        r = (t >> 22) / 1023,
        n = (t >> 12 & 1023) / 1023,
        a = (t >> 2 & 1023) / 1023,
        o = (t & 3) / 3;
      return (0, _chunk5RYM4COI.da)(r, n, a, o);
    },
    "unorm8x4-bgra": function unorm8x4Bgra(e) {
      var t = e.readByte() / 255,
        r = e.readByte() / 255,
        n = e.readByte() / 255,
        a = e.readByte() / 255;
      return (0, _chunk5RYM4COI.da)(n, r, t, a);
    },
    unstruct: function unstruct(e, t) {
      var r = {};
      for (var _ref17 of Object.entries(t.propTypes)) {
        var _ref18 = (0, _slicedToArray2.default)(_ref17, 2);
        var n = _ref18[0];
        var a = _ref18[1];
        r[n] = M(e, a);
      }
      return r;
    },
    disarray: function disarray(e, t) {
      var r = (0, _chunkSMTSXYNG._)(t),
        n = [];
      for (var a = 0; a < t.elementCount; a++) B(e, r), n.push(M(e, t.elementType));
      return B(e, r), n;
    },
    "loose-decorated": function looseDecorated(e, t) {
      B(e, (0, _chunkSMTSXYNG.$)(t));
      var r = e.currentByteOffset,
        n = M(e, t.inner);
      return e.seekTo(r + (0, _chunkSMTSXYNG.ba)(t)), n;
    }
  };
  function M(e, t) {
    var r = Te[t.type];
    if (!r) throw new Error(`Cannot read data of type '${t.type}'.`);
    return r(e, t);
  }
  function hn(e, t) {
    var r = (0, _chunkSMTSXYNG.ba)(e);
    if (r === 0 || t === void 0 || t === null) return [];
    var n = new ArrayBuffer(r),
      a = new _typedBinary.BufferWriter(n),
      o = [];
    function s(u, d, g, c) {
      if (d != null) {
        if ((0, _chunk5RYM4COI.C)(u) || (0, _chunkSMTSXYNG.f)(u)) {
          var y = gt(u);
          for (var _ref19 of Object.entries(y)) {
            var _h$padding;
            var _ref20 = (0, _slicedToArray2.default)(_ref19, 2);
            var x = _ref20[0];
            var h = _ref20[1];
            var T = u.propTypes[x];
            if (!T) continue;
            var D = d[x];
            D !== void 0 && s(T, D, g + h.offset, (_h$padding = h.padding) != null ? _h$padding : c);
          }
          return;
        }
        if ((0, _chunk5RYM4COI.B)(u) || (0, _chunkSMTSXYNG.e)(u)) {
          var _y = u,
            _x = (0, _chunkSMTSXYNG.a)((0, _chunkSMTSXYNG.ba)(_y.elementType), (0, _chunkSMTSXYNG._)(_y.elementType));
          if (!Array.isArray(d)) throw new Error("Partial value for array must be an array");
          var _h = d != null ? d : [];
          _h.sort(function (T, D) {
            return T.idx - D.idx;
          });
          for (var _ref21 of _h) {
            var _T = _ref21.idx;
            var _D = _ref21.value;
            s(_y.elementType, _D, g + _T * _x, _x - (0, _chunkSMTSXYNG.ba)(_y.elementType));
          }
        } else {
          var _y2 = (0, _chunkSMTSXYNG.ba)(u);
          a.seekTo(g), ne(a, u, d), o.push({
            start: g,
            end: g + _y2,
            padding: c
          });
        }
      }
    }
    if (s(e, t, 0), o.length === 0) return [];
    var i = [],
      l = o[0];
    for (var u = 1; u < o.length; u++) {
      var _l$padding;
      var d = o[u];
      if (!d || !l) throw new Error("Internal error: missing segment");
      d.start === l.end + ((_l$padding = l.padding) != null ? _l$padding : 0) ? (l.end = d.end, l.padding = d.padding) : (i.push({
        data: new Uint8Array(n, l.start, l.end - l.start)
      }), l = d);
    }
    if (!l) throw new Error("Internal error: missing segment");
    return i.push({
      data: new Uint8Array(n, l.start, l.end - l.start)
    }), i;
  }
  function xe(e) {
    return !!(e != null && e.usableAsStorage);
  }
  var He = /*#__PURE__*/function (_Error) {
    function e(t) {
      var _p4;
      var _this2;
      (0, _classCallCheck2.default)(this, e);
      _this2 = _callSuper(this, e, [`Resource '${(_p4 = (0, _chunk5RYM4COI.c)(t)) != null ? _p4 : "<unnamed>"}' cannot be bound as 'storage'. Use .$usage('storage') to allow it.`]), Object.setPrototypeOf((0, _assertThisInitialized2.default)(_this2), e.prototype);
      return _this2;
    }
    (0, _inherits2.default)(e, _Error);
    return (0, _createClass2.default)(e);
  }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
  function xt(e) {
    return !!e.usableAsUniform;
  }
  var vn = {
      uniform: "uniform",
      mutable: "storage, read_write",
      readonly: "storage, read"
    },
    qe = /*#__PURE__*/function () {
      function qe(t, r) {
        (0, _classCallCheck2.default)(this, qe);
        this.resourceType = "buffer-usage";
        this.usage = t;
        this.buffer = r;
        this[_chunk5RYM4COI.a] = {
          dataType: r.dataType
        }, this[_chunk5RYM4COI.b] = r;
      }
      return (0, _createClass2.default)(qe, [{
        key: "$name",
        value: function $name(t) {
          return this.buffer.$name(t), this;
        }
      }, {
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique((0, _chunk5RYM4COI.c)(this)),
            _t$allocateFixedEntry = t.allocateFixedEntry(this.usage === "uniform" ? {
              uniform: this.buffer.dataType
            } : {
              storage: this.buffer.dataType,
              access: this.usage
            }, this.buffer),
            n = _t$allocateFixedEntry.group,
            a = _t$allocateFixedEntry.binding,
            o = vn[this.usage];
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
          var _p5;
          return `${this.usage}:${(_p5 = (0, _chunk5RYM4COI.c)(this)) != null ? _p5 : "<unnamed>"}`;
        }
      }, {
        key: "value",
        get: function get() {
          var _this3 = this;
          if (!(0, _chunk5RYM4COI.r)()) throw new Error("Cannot access buffer's value directly in JS.");
          return new Proxy((0, _defineProperty2.default)({
            "~resolve": function resolve(t) {
              return t.resolve(_this3);
            },
            toString: function toString() {
              var _p6;
              return `.value:${(_p6 = (0, _chunk5RYM4COI.c)(_this3)) != null ? _p6 : "<unnamed>"}`;
            }
          }, _chunk5RYM4COI.a, {
            dataType: this.buffer.dataType
          }), Y);
        }
      }]);
    }(),
    Je = /*#__PURE__*/function () {
      function Je(t, r, n) {
        (0, _classCallCheck2.default)(this, Je);
        this.resourceType = "buffer-usage";
        this.usage = t;
        this.dataType = r;
        this._membership = n;
        this[_chunk5RYM4COI.a] = {
          dataType: r
        }, (0, _chunk5RYM4COI.d)(this, n.key);
      }
      return (0, _createClass2.default)(Je, [{
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique((0, _chunk5RYM4COI.c)(this)),
            n = t.allocateLayoutEntry(this._membership.layout),
            a = vn[this.usage];
          return t.addDeclaration(`@group(${n}) @binding(${this._membership.idx}) var<${a}> ${r}: ${t.resolve(this.dataType)};`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _p7;
          return `${this.usage}:${(_p7 = (0, _chunk5RYM4COI.c)(this)) != null ? _p7 : "<unnamed>"}`;
        }
      }, {
        key: "value",
        get: function get() {
          var _this4 = this;
          if (!(0, _chunk5RYM4COI.r)()) throw new Error("Cannot access buffer's value directly in JS.");
          return new Proxy((0, _defineProperty2.default)({
            "~resolve": function resolve(t) {
              return t.resolve(_this4);
            },
            toString: function toString() {
              var _p8;
              return `.value:${(_p8 = (0, _chunk5RYM4COI.c)(_this4)) != null ? _p8 : "<unnamed>"}`;
            }
          }, _chunk5RYM4COI.a, {
            dataType: this.dataType
          }), Y);
        }
      }]);
    }(),
    wn = new WeakMap();
  function mr(e) {
    if (!xe(e)) throw new Error(`Cannot pass ${e} to asMutable, as it is not allowed to be used as storage. To allow it, call .$usage('storage') when creating the buffer.`);
    var t = wn.get(e);
    return t || (t = new qe("mutable", e), wn.set(e, t)), t;
  }
  var bn = new WeakMap();
  function fr(e) {
    if (!xe(e)) throw new Error(`Cannot pass ${e} to asReadonly, as it is not allowed to be used as storage. To allow it, call .$usage('storage') when creating the buffer.`);
    var t = bn.get(e);
    return t || (t = new qe("readonly", e), bn.set(e, t)), t;
  }
  var Sn = new WeakMap();
  function gr(e) {
    if (!xt(e)) throw new Error(`Cannot pass ${e} to asUniform, as it is not allowed to be used as a uniform. To allow it, call .$usage('uniform') when creating the buffer.`);
    var t = Sn.get(e);
    return t || (t = new qe("uniform", e), Sn.set(e, t)), t;
  }
  var va = {
    uniform: gr,
    mutable: mr,
    readonly: fr
  };
  function Fn(e, t, r) {
    return (0, _chunk5RYM4COI.A)(t) ? new ht(e, t, r) : new ht(e, t, r, ["storage", "uniform"]);
  }
  function ae(e) {
    return e.resourceType === "buffer";
  }
  function Da(e) {
    return !!e.usableAsVertex;
  }
  var Dn = (0, _typedBinary.getSystemEndianness)(),
    ht = /*#__PURE__*/function () {
      function ht(t, r, n, a) {
        (0, _classCallCheck2.default)(this, ht);
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
        nn(n) ? (this._ownBuffer = !1, this._buffer = n) : (this._ownBuffer = !0, this.initial = n);
      }
      return (0, _createClass2.default)(ht, [{
        key: "buffer",
        get: function get() {
          var _p9;
          var t = this._group.device;
          if (this._destroyed) throw new Error("This buffer has been destroyed");
          if (!this._buffer && (this._buffer = t.createBuffer({
            size: (0, _chunkSMTSXYNG.ba)(this.dataType),
            usage: this.flags,
            mappedAtCreation: !!this.initial,
            label: (_p9 = (0, _chunk5RYM4COI.c)(this)) != null ? _p9 : "<unnamed>"
          }), this.initial)) {
            var r = new _typedBinary.BufferWriter(this._buffer.getMappedRange());
            ne(r, this.dataType, this.initial), this._buffer.unmap();
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
          return (0, _chunk5RYM4COI.d)(this, t), this._buffer && (this._buffer.label = t), this;
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
          if (yt) Tt(this.dataType);else throw new Error("This environment does not allow eval");
        }
      }, {
        key: "write",
        value: function write(t) {
          var r = this.buffer,
            n = this._group.device;
          if (r.mapState === "mapped") {
            var o = r.getMappedRange();
            if (yt) {
              Tt(this.dataType)(new DataView(o), 0, t, Dn === "little");
              return;
            }
            ne(new _typedBinary.BufferWriter(o), this.dataType, t);
            return;
          }
          var a = (0, _chunkSMTSXYNG.ba)(this.dataType);
          this._hostBuffer || (this._hostBuffer = new ArrayBuffer(a)), this._group.flush(), yt ? Tt(this.dataType)(new DataView(this._hostBuffer), 0, t, Dn === "little") : ne(new _typedBinary.BufferWriter(this._hostBuffer), this.dataType, t), n.queue.writeBuffer(r, 0, this._hostBuffer, 0, a);
        }
      }, {
        key: "writePartial",
        value: function writePartial(t) {
          var r = this.buffer,
            n = this._group.device,
            a = hn(this.dataType, t);
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
          var r = (0, _chunkSMTSXYNG.ba)(this.dataType);
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
              return M(new _typedBinary.BufferReader(s), this.dataType);
            }
            if (t.usage & GPUBufferUsage.MAP_READ) {
              yield t.mapAsync(GPUMapMode.READ);
              var _s5 = t.getMappedRange(),
                i = M(new _typedBinary.BufferReader(_s5), this.dataType);
              return t.unmap(), i;
            }
            var n = r.createBuffer({
                size: (0, _chunkSMTSXYNG.ba)(this.dataType),
                usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
              }),
              a = r.createCommandEncoder();
            a.copyBufferToBuffer(t, 0, n, 0, (0, _chunkSMTSXYNG.ba)(this.dataType)), r.queue.submit([a.finish()]), yield r.queue.onSubmittedWorkDone(), yield n.mapAsync(GPUMapMode.READ, 0, (0, _chunkSMTSXYNG.ba)(this.dataType));
            var o = M(new _typedBinary.BufferReader(n.getMappedRange()), this.dataType);
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
          var _va$t;
          return (_va$t = va[t]) == null ? void 0 : _va$t.call(va, this);
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
          var _p10;
          return `buffer:${(_p10 = (0, _chunk5RYM4COI.c)(this)) != null ? _p10 : "<unnamed>"}`;
        }
      }]);
    }();
  function An(e) {
    return new Tr(e);
  }
  function In(e) {
    return new xr(e);
  }
  function Ye(e) {
    var t = e;
    return (t == null ? void 0 : t.resourceType) === "sampler" && !!t[_chunk5RYM4COI.a];
  }
  function Qe(e) {
    var t = e;
    return (t == null ? void 0 : t.resourceType) === "sampler-comparison" && !!t[_chunk5RYM4COI.a];
  }
  var wt = /*#__PURE__*/function () {
      function wt(t) {
        (0, _classCallCheck2.default)(this, wt);
        this.resourceType = "sampler";
        this._membership = t;
        this[_chunk5RYM4COI.a] = {}, (0, _chunk5RYM4COI.d)(this, t.key);
      }
      return (0, _createClass2.default)(wt, [{
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique((0, _chunk5RYM4COI.c)(this)),
            n = t.allocateLayoutEntry(this._membership.layout);
          return t.addDeclaration(`@group(${n}) @binding(${this._membership.idx}) var ${r}: sampler;`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _p11;
          return `${this.resourceType}:${(_p11 = (0, _chunk5RYM4COI.c)(this)) != null ? _p11 : "<unnamed>"}`;
        }
      }]);
    }(),
    bt = /*#__PURE__*/function () {
      function bt(t) {
        (0, _classCallCheck2.default)(this, bt);
        this.resourceType = "sampler-comparison";
        this._membership = t;
        this[_chunk5RYM4COI.a] = {}, (0, _chunk5RYM4COI.d)(this, t.key);
      }
      return (0, _createClass2.default)(bt, [{
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique((0, _chunk5RYM4COI.c)(this)),
            n = t.allocateLayoutEntry(this._membership.layout);
          return t.addDeclaration(`@group(${n}) @binding(${this._membership.idx}) var ${r}: sampler_comparison;`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _p12;
          return `${this.resourceType}:${(_p12 = (0, _chunk5RYM4COI.c)(this)) != null ? _p12 : "<unnamed>"}`;
        }
      }]);
    }(),
    Tr = /*#__PURE__*/function () {
      function Tr(t) {
        var _this5 = this;
        (0, _classCallCheck2.default)(this, Tr);
        this.resourceType = "sampler";
        this._sampler = null;
        this._props = t;
        this[_chunk5RYM4COI.a] = {
          unwrap: function unwrap(r) {
            var _p13;
            return _this5._sampler || (_this5._sampler = r.device.createSampler(Object.assign({}, _this5._props, {
              label: (_p13 = (0, _chunk5RYM4COI.c)(_this5)) != null ? _p13 : "<unnamed>"
            }))), _this5._sampler;
          }
        }, this._filtering = t.minFilter === "linear" || t.magFilter === "linear" || t.mipmapFilter === "linear";
      }
      return (0, _createClass2.default)(Tr, [{
        key: "$name",
        value: function $name(t) {
          return (0, _chunk5RYM4COI.d)(this, t), this;
        }
      }, {
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique((0, _chunk5RYM4COI.c)(this)),
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
          var _p14;
          return `${this.resourceType}:${(_p14 = (0, _chunk5RYM4COI.c)(this)) != null ? _p14 : "<unnamed>"}`;
        }
      }]);
    }(),
    xr = /*#__PURE__*/function () {
      function xr(t) {
        var _this6 = this;
        (0, _classCallCheck2.default)(this, xr);
        this.resourceType = "sampler-comparison";
        this._sampler = null;
        this._props = t;
        this[_chunk5RYM4COI.a] = {
          unwrap: function unwrap(r) {
            var _p15;
            return _this6._sampler || (_this6._sampler = r.device.createSampler(Object.assign({}, _this6._props, {
              label: (_p15 = (0, _chunk5RYM4COI.c)(_this6)) != null ? _p15 : "<unnamed>"
            }))), _this6._sampler;
          }
        };
      }
      return (0, _createClass2.default)(xr, [{
        key: "$name",
        value: function $name(t) {
          return (0, _chunk5RYM4COI.d)(this, t), this;
        }
      }, {
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique((0, _chunk5RYM4COI.c)(this)),
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
          var _p16;
          return `${this.resourceType}:${(_p16 = (0, _chunk5RYM4COI.c)(this)) != null ? _p16 : "<unnamed>"}`;
        }
      }]);
    }();
  var St = /*#__PURE__*/function () {
    function St(t) {
      (0, _classCallCheck2.default)(this, St);
      this.resourceType = "external-texture";
      this._membership = t;
      (0, _chunk5RYM4COI.d)(this, t.key);
    }
    return (0, _createClass2.default)(St, [{
      key: "~resolve",
      value: function resolve(t) {
        var r = t.names.makeUnique((0, _chunk5RYM4COI.c)(this)),
          n = t.allocateLayoutEntry(this._membership.layout);
        return t.addDeclaration(`@group(${n}) @binding(${this._membership.idx}) var ${r}: texture_external;`), r;
      }
    }, {
      key: "toString",
      value: function toString() {
        var _p17;
        return `${this.resourceType}:${(_p17 = (0, _chunk5RYM4COI.c)(this)) != null ? _p17 : "<unnamed>"}`;
      }
    }]);
  }();
  var Un = {
      r8unorm: _chunk5RYM4COI.T,
      r8snorm: _chunk5RYM4COI.T,
      r8uint: _chunk5RYM4COI.R,
      r8sint: _chunk5RYM4COI.S,
      r16uint: _chunk5RYM4COI.R,
      r16sint: _chunk5RYM4COI.S,
      r16float: _chunk5RYM4COI.T,
      rg8unorm: _chunk5RYM4COI.T,
      rg8snorm: _chunk5RYM4COI.T,
      rg8uint: _chunk5RYM4COI.R,
      rg8sint: _chunk5RYM4COI.S,
      r32uint: _chunk5RYM4COI.R,
      r32sint: _chunk5RYM4COI.S,
      r32float: _chunk5RYM4COI.T,
      rg16uint: _chunk5RYM4COI.R,
      rg16sint: _chunk5RYM4COI.S,
      rg16float: _chunk5RYM4COI.T,
      rgba8unorm: _chunk5RYM4COI.T,
      "rgba8unorm-srgb": _chunk5RYM4COI.T,
      rgba8snorm: _chunk5RYM4COI.T,
      rgba8uint: _chunk5RYM4COI.R,
      rgba8sint: _chunk5RYM4COI.S,
      bgra8unorm: _chunk5RYM4COI.T,
      "bgra8unorm-srgb": _chunk5RYM4COI.T,
      rgb9e5ufloat: _chunk5RYM4COI.T,
      rgb10a2uint: _chunk5RYM4COI.R,
      rgb10a2unorm: _chunk5RYM4COI.T,
      rg11b10ufloat: _chunk5RYM4COI.T,
      rg32uint: _chunk5RYM4COI.R,
      rg32sint: _chunk5RYM4COI.S,
      rg32float: _chunk5RYM4COI.T,
      rgba16uint: _chunk5RYM4COI.R,
      rgba16sint: _chunk5RYM4COI.S,
      rgba16float: _chunk5RYM4COI.T,
      rgba32uint: _chunk5RYM4COI.R,
      rgba32sint: _chunk5RYM4COI.S,
      rgba32float: _chunk5RYM4COI.T,
      stencil8: _chunk5RYM4COI.T,
      depth16unorm: _chunk5RYM4COI.T,
      depth24plus: _chunk5RYM4COI.T,
      "depth24plus-stencil8": _chunk5RYM4COI.T,
      depth32float: _chunk5RYM4COI.T,
      "depth32float-stencil8": _chunk5RYM4COI.T,
      "bc1-rgba-unorm": _chunk5RYM4COI.T,
      "bc1-rgba-unorm-srgb": _chunk5RYM4COI.T,
      "bc2-rgba-unorm": _chunk5RYM4COI.T,
      "bc2-rgba-unorm-srgb": _chunk5RYM4COI.T,
      "bc3-rgba-unorm": _chunk5RYM4COI.T,
      "bc3-rgba-unorm-srgb": _chunk5RYM4COI.T,
      "bc4-r-unorm": _chunk5RYM4COI.T,
      "bc4-r-snorm": _chunk5RYM4COI.T,
      "bc5-rg-unorm": _chunk5RYM4COI.T,
      "bc5-rg-snorm": _chunk5RYM4COI.T,
      "bc6h-rgb-ufloat": _chunk5RYM4COI.T,
      "bc6h-rgb-float": _chunk5RYM4COI.T,
      "bc7-rgba-unorm": _chunk5RYM4COI.T,
      "bc7-rgba-unorm-srgb": _chunk5RYM4COI.T,
      "etc2-rgb8unorm": _chunk5RYM4COI.T,
      "etc2-rgb8unorm-srgb": _chunk5RYM4COI.T,
      "etc2-rgb8a1unorm": _chunk5RYM4COI.T,
      "etc2-rgb8a1unorm-srgb": _chunk5RYM4COI.T,
      "etc2-rgba8unorm": _chunk5RYM4COI.T,
      "etc2-rgba8unorm-srgb": _chunk5RYM4COI.T,
      "eac-r11unorm": _chunk5RYM4COI.T,
      "eac-r11snorm": _chunk5RYM4COI.T,
      "eac-rg11unorm": _chunk5RYM4COI.T,
      "eac-rg11snorm": _chunk5RYM4COI.T,
      "astc-4x4-unorm": _chunk5RYM4COI.T,
      "astc-4x4-unorm-srgb": _chunk5RYM4COI.T,
      "astc-5x4-unorm": _chunk5RYM4COI.T,
      "astc-5x4-unorm-srgb": _chunk5RYM4COI.T,
      "astc-5x5-unorm": _chunk5RYM4COI.T,
      "astc-5x5-unorm-srgb": _chunk5RYM4COI.T,
      "astc-6x5-unorm": _chunk5RYM4COI.T,
      "astc-6x5-unorm-srgb": _chunk5RYM4COI.T,
      "astc-6x6-unorm": _chunk5RYM4COI.T,
      "astc-6x6-unorm-srgb": _chunk5RYM4COI.T,
      "astc-8x5-unorm": _chunk5RYM4COI.T,
      "astc-8x5-unorm-srgb": _chunk5RYM4COI.T,
      "astc-8x6-unorm": _chunk5RYM4COI.T,
      "astc-8x6-unorm-srgb": _chunk5RYM4COI.T,
      "astc-8x8-unorm": _chunk5RYM4COI.T,
      "astc-8x8-unorm-srgb": _chunk5RYM4COI.T,
      "astc-10x5-unorm": _chunk5RYM4COI.T,
      "astc-10x5-unorm-srgb": _chunk5RYM4COI.T,
      "astc-10x6-unorm": _chunk5RYM4COI.T,
      "astc-10x6-unorm-srgb": _chunk5RYM4COI.T,
      "astc-10x8-unorm": _chunk5RYM4COI.T,
      "astc-10x8-unorm-srgb": _chunk5RYM4COI.T,
      "astc-10x10-unorm": _chunk5RYM4COI.T,
      "astc-10x10-unorm-srgb": _chunk5RYM4COI.T,
      "astc-12x10-unorm": _chunk5RYM4COI.T,
      "astc-12x10-unorm-srgb": _chunk5RYM4COI.T,
      "astc-12x12-unorm": _chunk5RYM4COI.T,
      "astc-12x12-unorm-srgb": _chunk5RYM4COI.T
    },
    Xe = {
      rgba8unorm: _chunk5RYM4COI.da,
      rgba8snorm: _chunk5RYM4COI.da,
      rgba8uint: _chunk5RYM4COI.ga,
      rgba8sint: _chunk5RYM4COI.fa,
      rgba16uint: _chunk5RYM4COI.ga,
      rgba16sint: _chunk5RYM4COI.fa,
      rgba16float: _chunk5RYM4COI.da,
      r32uint: _chunk5RYM4COI.ga,
      r32sint: _chunk5RYM4COI.fa,
      r32float: _chunk5RYM4COI.da,
      rg32uint: _chunk5RYM4COI.ga,
      rg32sint: _chunk5RYM4COI.fa,
      rg32float: _chunk5RYM4COI.da,
      rgba32uint: _chunk5RYM4COI.ga,
      rgba32sint: _chunk5RYM4COI.fa,
      rgba32float: _chunk5RYM4COI.da,
      bgra8unorm: _chunk5RYM4COI.da
    },
    Bn = {
      f32: "float",
      u32: "uint",
      i32: "sint"
    },
    Rn = {
      float: _chunk5RYM4COI.T,
      "unfilterable-float": _chunk5RYM4COI.T,
      uint: _chunk5RYM4COI.R,
      sint: _chunk5RYM4COI.S,
      depth: _chunk5RYM4COI.T
    };
  function Cn(e, t) {
    return new hr(e, t);
  }
  function X(e) {
    return (e == null ? void 0 : e.resourceType) === "texture" && !!e[_chunk5RYM4COI.a];
  }
  function Ze(e) {
    return (e == null ? void 0 : e.resourceType) === "texture-storage-view" && !!e[_chunk5RYM4COI.a];
  }
  function et(e) {
    return (e == null ? void 0 : e.resourceType) === "texture-sampled-view" && !!e[_chunk5RYM4COI.a];
  }
  var Pn = {
      mutable: "read_write",
      readonly: "read",
      writeonly: "write"
    },
    hr = /*#__PURE__*/function () {
      function hr(t, r) {
        var _this7 = this;
        (0, _classCallCheck2.default)(this, hr);
        this.resourceType = "texture";
        this.usableAsSampled = !1;
        this.usableAsStorage = !1;
        this.usableAsRender = !1;
        this._destroyed = !1;
        this._flags = GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC;
        this._texture = null;
        this.props = t;
        this._branch = r;
        this[_chunk5RYM4COI.a] = {
          unwrap: function unwrap() {
            var _p18, _this7$props$dimensio, _this7$props$viewForm, _this7$props$mipLevel, _this7$props$sampleCo;
            if (_this7._destroyed) throw new Error("This texture has been destroyed");
            return _this7._texture || (_this7._texture = _this7._branch.device.createTexture({
              label: (_p18 = (0, _chunk5RYM4COI.c)(_this7)) != null ? _p18 : "<unnamed>",
              format: _this7.props.format,
              size: _this7.props.size,
              usage: _this7._flags,
              dimension: (_this7$props$dimensio = _this7.props.dimension) != null ? _this7$props$dimensio : "2d",
              viewFormats: (_this7$props$viewForm = _this7.props.viewFormats) != null ? _this7$props$viewForm : [],
              mipLevelCount: (_this7$props$mipLevel = _this7.props.mipLevelCount) != null ? _this7$props$mipLevel : 1,
              sampleCount: (_this7$props$sampleCo = _this7.props.sampleCount) != null ? _this7$props$sampleCo : 1
            })), _this7._texture;
          }
        };
      }
      return (0, _createClass2.default)(hr, [{
        key: "$name",
        value: function $name(t) {
          return (0, _chunk5RYM4COI.d)(this, t), this;
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
            a = Xe[n];
          return (0, _chunk5RYM4COI.f)(!!a, `Unsupported storage texture format: ${n}`), new wr(t != null ? t : {}, r, this);
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
          if (!Xe[r]) throw new Error(`Unsupported storage texture format: ${r}`);
          return new br(t, this);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          var _this$_texture;
          this._destroyed || (this._destroyed = !0, (_this$_texture = this._texture) == null ? void 0 : _this$_texture.destroy());
        }
      }]);
    }(),
    Ft = {
      "1d": "1d",
      "2d": "2d",
      "2d-array": "2d_array",
      cube: "cube",
      "cube-array": "cube_array",
      "3d": "3d"
    },
    wr = /*#__PURE__*/function () {
      function wr(t, r, n) {
        var _this8 = this,
          _ref22,
          _t$dimension,
          _t$format3;
        (0, _classCallCheck2.default)(this, wr);
        this.resourceType = "texture-storage-view";
        this.access = r;
        this._texture = n;
        this[_chunk5RYM4COI.a] = {
          unwrap: function unwrap() {
            var _p19;
            return _this8._view || (_this8._view = _this8._texture[_chunk5RYM4COI.a].unwrap().createView({
              label: `${(_p19 = (0, _chunk5RYM4COI.c)(_this8)) != null ? _p19 : "<unnamed>"} - View`,
              format: _this8._format,
              dimension: _this8.dimension
            })), _this8._view;
          }
        }, this[_chunk5RYM4COI.b] = n, this.dimension = (_ref22 = (_t$dimension = t == null ? void 0 : t.dimension) != null ? _t$dimension : n.props.dimension) != null ? _ref22 : "2d", this._format = (_t$format3 = t == null ? void 0 : t.format) != null ? _t$format3 : n.props.format, this.texelDataType = Xe[this._format];
      }
      return (0, _createClass2.default)(wr, [{
        key: "$name",
        value: function $name(t) {
          return this._texture.$name(t), this;
        }
      }, {
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique((0, _chunk5RYM4COI.c)(this)),
            _t$allocateFixedEntry4 = t.allocateFixedEntry({
              storageTexture: this._format,
              access: this.access,
              viewDimension: this.dimension
            }, this),
            n = _t$allocateFixedEntry4.group,
            a = _t$allocateFixedEntry4.binding,
            o = `texture_storage_${Ft[this.dimension]}`;
          return t.addDeclaration(`@group(${n}) @binding(${a}) var ${r}: ${o}<${this._format}, ${Pn[this.access]}>;`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _p20;
          return `${this.resourceType}:${(_p20 = (0, _chunk5RYM4COI.c)(this)) != null ? _p20 : "<unnamed>"}`;
        }
      }]);
    }(),
    vt = /*#__PURE__*/function () {
      function vt(t, r, n, a) {
        (0, _classCallCheck2.default)(this, vt);
        this.resourceType = "texture-storage-view";
        this._format = t;
        this.dimension = r;
        this.access = n;
        this._membership = a;
        this[_chunk5RYM4COI.a] = {}, this.texelDataType = Xe[this._format], (0, _chunk5RYM4COI.d)(this, a.key);
      }
      return (0, _createClass2.default)(vt, [{
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique((0, _chunk5RYM4COI.c)(this)),
            n = t.allocateLayoutEntry(this._membership.layout),
            a = `texture_storage_${Ft[this.dimension]}`;
          return t.addDeclaration(`@group(${n}) @binding(${this._membership.idx}) var ${r}: ${a}<${this._format}, ${Pn[this.access]}>;`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _p21;
          return `${this.resourceType}:${(_p21 = (0, _chunk5RYM4COI.c)(this)) != null ? _p21 : "<unnamed>"}`;
        }
      }]);
    }(),
    br = /*#__PURE__*/function () {
      function br(t, r) {
        var _this9 = this,
          _ref23,
          _t$dimension2,
          _t$format4;
        (0, _classCallCheck2.default)(this, br);
        this.resourceType = "texture-sampled-view";
        this._props = t;
        this._texture = r;
        this[_chunk5RYM4COI.a] = {
          unwrap: function unwrap() {
            var _p22;
            return _this9._view || (_this9._view = _this9._texture[_chunk5RYM4COI.a].unwrap().createView(Object.assign({
              label: `${(_p22 = (0, _chunk5RYM4COI.c)(_this9)) != null ? _p22 : "<unnamed>"} - View`
            }, _this9._props))), _this9._view;
          }
        }, this[_chunk5RYM4COI.b] = r, this.dimension = (_ref23 = (_t$dimension2 = t == null ? void 0 : t.dimension) != null ? _t$dimension2 : r.props.dimension) != null ? _ref23 : "2d", this._format = (_t$format4 = t == null ? void 0 : t.format) != null ? _t$format4 : r.props.format, this.channelDataType = Un[this._format];
      }
      return (0, _createClass2.default)(br, [{
        key: "$name",
        value: function $name(t) {
          return this._texture.$name(t), this;
        }
      }, {
        key: "~resolve",
        value: function resolve(t) {
          var _this$_texture$props$;
          var r = t.names.makeUnique((0, _chunk5RYM4COI.c)(this)),
            n = ((_this$_texture$props$ = this._texture.props.sampleCount) != null ? _this$_texture$props$ : 1) > 1,
            _t$allocateFixedEntry5 = t.allocateFixedEntry({
              texture: Bn[this.channelDataType.type],
              viewDimension: this.dimension,
              multisampled: n
            }, this),
            a = _t$allocateFixedEntry5.group,
            o = _t$allocateFixedEntry5.binding,
            s = n ? "texture_multisampled_2d" : `texture_${Ft[this.dimension]}`;
          return t.addDeclaration(`@group(${a}) @binding(${o}) var ${r}: ${s}<${t.resolve(this.channelDataType)}>;`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _p23;
          return `${this.resourceType}:${(_p23 = (0, _chunk5RYM4COI.c)(this)) != null ? _p23 : "<unnamed>"}`;
        }
      }]);
    }(),
    Dt = /*#__PURE__*/function () {
      function Dt(t, r, n, a) {
        (0, _classCallCheck2.default)(this, Dt);
        this.resourceType = "texture-sampled-view";
        this.dimension = r;
        this._multisampled = n;
        this._membership = a;
        this[_chunk5RYM4COI.a] = {}, (0, _chunk5RYM4COI.d)(this, a.key), this.channelDataType = Rn[t];
      }
      return (0, _createClass2.default)(Dt, [{
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique((0, _chunk5RYM4COI.c)(this)),
            n = t.allocateLayoutEntry(this._membership.layout),
            a = this._multisampled ? "texture_multisampled_2d" : `texture_${Ft[this.dimension]}`;
          return t.addDeclaration(`@group(${n}) @binding(${this._membership.idx}) var ${r}: ${a}<${t.resolve(this.channelDataType)}>;`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _p24;
          return `${this.resourceType}:${(_p24 = (0, _chunk5RYM4COI.c)(this)) != null ? _p24 : "<unnamed>"}`;
        }
      }]);
    }();
  function Sr(e) {
    return !!(e != null && e.usableAsSampled);
  }
  function Fa(e) {
    return !!(e != null && e.usableAsRender);
  }
  var At = /*#__PURE__*/function (_Error2) {
    function e(t) {
      var _p25;
      var _this10;
      (0, _classCallCheck2.default)(this, e);
      _this10 = _callSuper(this, e, [`Resource '${(_p25 = (0, _chunk5RYM4COI.c)(t)) != null ? _p25 : "<unnamed>"}' cannot be bound as 'sampled'. Use .$usage('sampled') to allow it.`]), Object.setPrototypeOf((0, _assertThisInitialized2.default)(_this10), e.prototype);
      return _this10;
    }
    (0, _inherits2.default)(e, _Error2);
    return (0, _createClass2.default)(e);
  }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
  function It(e) {
    return new Dr(e);
  }
  function Ut(e) {
    return !!e && e.resourceType === "bind-group-layout";
  }
  function Fr(e) {
    return !!e && e.resourceType === "bind-group";
  }
  var vr = /*#__PURE__*/function (_Error3) {
      function e(t, r) {
        var _this11;
        (0, _classCallCheck2.default)(this, e);
        _this11 = _callSuper(this, e, [`Bind group '${t != null ? t : "<unnamed>"}' is missing a required binding '${r}'`]), Object.setPrototypeOf((0, _assertThisInitialized2.default)(_this11), e.prototype);
        return _this11;
      }
      (0, _inherits2.default)(e, _Error3);
      return (0, _createClass2.default)(e);
    }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error)),
    Vn = ["compute"],
    Ce = ["compute", "vertex", "fragment"],
    Dr = /*#__PURE__*/function () {
      function Dr(t) {
        var _this12 = this;
        (0, _classCallCheck2.default)(this, Dr);
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
            layout: _this12,
            key: n,
            idx: r
          };
          if ("uniform" in a && (_this12.bound[n] = new Je("uniform", a.uniform, o)), "storage" in a) {
            var _a$access;
            var s = "type" in a.storage ? a.storage : a.storage(0);
            _this12.bound[n] = new Je((_a$access = a.access) != null ? _a$access : "readonly", s, o);
          }
          "texture" in a && (_this12.bound[n] = new Dt(a.texture, (_a$viewDimension = a.viewDimension) != null ? _a$viewDimension : "2d", (_a$multisampled = a.multisampled) != null ? _a$multisampled : !1, o)), "storageTexture" in a && (_this12.bound[n] = new vt(a.storageTexture, (_a$viewDimension2 = a.viewDimension) != null ? _a$viewDimension2 : "2d", (_a$access2 = a.access) != null ? _a$access2 : "writeonly", o)), "externalTexture" in a && (_this12.bound[n] = new St(o)), "sampler" in a && (a.sampler === "comparison" ? _this12.bound[n] = new bt(o) : _this12.bound[n] = new wt(o)), "texture" in a || "storageTexture" in a || "externalTexture" in a || "sampler" in a ? _this12.value[n] = _this12.bound[n] : Object.defineProperty(_this12.value, n, {
            get: function get() {
              return _this12.bound[n].value;
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
      return (0, _createClass2.default)(Dr, [{
        key: "toString",
        value: function toString() {
          var _p26;
          return `bindGroupLayout:${(_p26 = (0, _chunk5RYM4COI.c)(this)) != null ? _p26 : "<unnamed>"}`;
        }
      }, {
        key: "index",
        get: function get() {
          return this._index;
        }
      }, {
        key: "$name",
        value: function $name(t) {
          return (0, _chunk5RYM4COI.d)(this, t), this;
        }
      }, {
        key: "$idx",
        value: function $idx(t) {
          return this._index = t, this;
        }
      }, {
        key: "unwrap",
        value: function unwrap(t) {
          var _p27;
          return t.device.createBindGroupLayout({
            label: (_p27 = (0, _chunk5RYM4COI.c)(this)) != null ? _p27 : "<unnamed>",
            entries: Object.values(this.entries).map(function (n, a) {
              var _n$viewDimension, _n$multisampled, _o6, _o7, _o8;
              if (n === null) return null;
              var o = n.visibility,
                s = {
                  binding: a,
                  visibility: 0
                };
              if ("uniform" in n) o = o != null ? o : Ce, s.buffer = {
                type: "uniform"
              };else if ("storage" in n) o = o != null ? o : n.access === "mutable" ? Vn : Ce, s.buffer = {
                type: n.access === "mutable" ? "storage" : "read-only-storage"
              };else if ("sampler" in n) o = o != null ? o : Ce, s.sampler = {
                type: n.sampler
              };else if ("texture" in n) o = o != null ? o : Ce, s.texture = {
                sampleType: n.texture,
                viewDimension: (_n$viewDimension = n.viewDimension) != null ? _n$viewDimension : "2d",
                multisampled: (_n$multisampled = n.multisampled) != null ? _n$multisampled : !1
              };else if ("storageTexture" in n) {
                var _n$access, _n$viewDimension2;
                var i = (_n$access = n.access) != null ? _n$access : "writeonly";
                o = o != null ? o : i === "readonly" ? Ce : Vn, s.storageTexture = {
                  format: n.storageTexture,
                  access: {
                    mutable: "read-write",
                    readonly: "read-only",
                    writeonly: "write-only"
                  }[i],
                  viewDimension: (_n$viewDimension2 = n.viewDimension) != null ? _n$viewDimension2 : "2d"
                };
              } else "externalTexture" in n && (o = o != null ? o : Ce, s.externalTexture = {});
              return (_o6 = o) != null && _o6.includes("compute") && (s.visibility |= GPUShaderStage.COMPUTE), (_o7 = o) != null && _o7.includes("vertex") && (s.visibility |= GPUShaderStage.VERTEX), (_o8 = o) != null && _o8.includes("fragment") && (s.visibility |= GPUShaderStage.FRAGMENT), s;
            }).filter(function (n) {
              return n !== null;
            })
          });
        }
      }]);
    }(),
    Pe = /*#__PURE__*/function () {
      function Pe(t, r) {
        (0, _classCallCheck2.default)(this, Pe);
        this.resourceType = "bind-group";
        this.layout = t;
        this.entries = r;
        for (var n of Object.keys(t.entries)) if (t.entries[n] !== null && !(n in r)) throw new vr((0, _chunk5RYM4COI.c)(t), n);
      }
      return (0, _createClass2.default)(Pe, [{
        key: "unwrap",
        value: function unwrap(t) {
          var _p28,
            _this13 = this;
          return t.device.createBindGroup({
            label: (_p28 = (0, _chunk5RYM4COI.c)(this.layout)) != null ? _p28 : "<unnamed>",
            layout: t.unwrap(this.layout),
            entries: Object.entries(this.layout.entries).map(function (_ref26, o) {
              var _p29;
              var _ref27 = (0, _slicedToArray2.default)(_ref26, 2),
                n = _ref27[0],
                a = _ref27[1];
              if (a === null) return null;
              var s = _this13.entries[n];
              if (s === void 0) throw new Error(`'${n}' is a resource required to populate bind group layout '${(_p29 = (0, _chunk5RYM4COI.c)(_this13.layout)) != null ? _p29 : "<unnamed>"}'.`);
              if ("uniform" in a) {
                var i;
                if (ae(s)) {
                  if (!xt(s)) throw new _chunk5RYM4COI.i(s);
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
                if (ae(s)) {
                  if (!xe(s)) throw new He(s);
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
                if (X(s)) {
                  if (!Sr(s)) throw new At(s);
                  _i4 = t.unwrap(s.createView("sampled"));
                } else et(s) ? _i4 = t.unwrap(s) : _i4 = s;
                return {
                  binding: o,
                  resource: _i4
                };
              }
              if ("storageTexture" in a) {
                var _i5;
                if (X(s)) {
                  if (!xe(s)) throw new He(s);
                  a.access === "readonly" ? _i5 = t.unwrap(s.createView("readonly")) : a.access === "mutable" ? _i5 = t.unwrap(s.createView("mutable")) : _i5 = t.unwrap(s.createView("writeonly"));
                } else Ze(s) ? _i5 = t.unwrap(s) : _i5 = s;
                return {
                  binding: o,
                  resource: _i5
                };
              }
              if ("sampler" in a) return Ye(s) || Qe(s) ? {
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
  var v = Aa.NodeTypeCatalog,
    Ia = ["==", "!=", "<", "<=", ">", ">=", "<<", ">>", "+", "-", "*", "/", "%", "|", "^", "&", "&&", "||"],
    Ua = ["&&", "||", "==", "!=", "<", "<=", ">", ">="];
  function $n(e, t, r) {
    return r ? Ua.includes(t) ? _chunk5RYM4COI.Q : t === "=" ? r : e : t === "!" || t === "~" ? _chunk5RYM4COI.Q : e;
  }
  function Ba(e) {
    throw new Error(`'${JSON.stringify(e)}' was not handled by the WGSL generator.`);
  }
  function kn(e, t) {
    return {
      value: t ? "true" : "false",
      dataType: _chunk5RYM4COI.Q
    };
  }
  function En(e, _ref28) {
    var _ref29 = (0, _slicedToArray2.default)(_ref28, 2),
      t = _ref29[0],
      r = _ref29[1];
    e.pushBlockScope();
    try {
      return `${e.indent()}{
${r.map(function (n) {
        return he(e, n);
      }).join(`
`)}
${e.dedent()}}`;
    } finally {
      e.popBlockScope();
    }
  }
  function Ra(e, t, r) {
    return e.defineVariable(t, r);
  }
  function Ar(e, t) {
    var r = e.getById(t);
    if (!r) throw new Error(`Identifier ${t} not found`);
    return r;
  }
  function V(e, t) {
    if (typeof t == "string") return Ar(e, t);
    if (typeof t == "boolean") return kn(e, t);
    if (t[0] === v.logicalExpr || t[0] === v.binaryExpr || t[0] === v.assignmentExpr) {
      var _t3 = (0, _slicedToArray2.default)(t, 4),
        r = _t3[0],
        n = _t3[1],
        a = _t3[2],
        o = _t3[3],
        s = V(e, n),
        i = V(e, o),
        l = W(e, [s, i]),
        _ref30 = l || [s, i],
        _ref31 = (0, _slicedToArray2.default)(_ref30, 2),
        u = _ref31[0],
        d = _ref31[1],
        g = A(e, u),
        c = A(e, d),
        y = $n(u.dataType, a, d.dataType);
      return {
        value: Ia.includes(a) ? `(${g} ${a} ${c})` : `${g} ${a} ${c}`,
        dataType: y
      };
    }
    if (t[0] === v.postUpdate) {
      var _t4 = (0, _slicedToArray2.default)(t, 3),
        _r2 = _t4[0],
        _n2 = _t4[1],
        _a5 = _t4[2],
        _o9 = V(e, _a5);
      return {
        value: `${A(e, _o9)}${_n2}`,
        dataType: _o9.dataType
      };
    }
    if (t[0] === v.unaryExpr) {
      var _t5 = (0, _slicedToArray2.default)(t, 3),
        _r3 = _t5[0],
        _n3 = _t5[1],
        _a6 = _t5[2],
        _o10 = V(e, _a6),
        _s6 = A(e, _o10),
        _i6 = $n(_o10.dataType, _n3);
      return {
        value: `${_n3}${_s6}`,
        dataType: _i6
      };
    }
    if (t[0] === v.memberAccess) {
      var _t6 = (0, _slicedToArray2.default)(t, 3),
        _r4 = _t6[0],
        _n4 = _t6[1],
        _a7 = _t6[2],
        _o11 = V(e, _n4);
      if ((0, _chunk5RYM4COI.D)(_o11.dataType)) return {
        value: `(*${_o11.value}).${_a7}`,
        dataType: (0, _chunkSMTSXYNG.i)(_o11.dataType.inner) ? ce(_o11.dataType.inner, _a7) : U
      };
      if (typeof _o11.value == "string") return {
        value: `${_o11.value}.${_a7}`,
        dataType: (0, _chunkSMTSXYNG.i)(_o11.dataType) ? ce(_o11.dataType, _a7) : U
      };
      if ((0, _chunk5RYM4COI.B)(_o11.dataType) && _a7 === "length") return _o11.dataType.elementCount === 0 ? {
        value: `arrayLength(&${e.resolve(_o11.value)})`,
        dataType: _chunk5RYM4COI.R
      } : {
        value: String(_o11.dataType.elementCount),
        dataType: _chunk5RYM4COI.O
      };
      var _s7 = _o11.value[_a7];
      if (_o11.dataType.type !== "unknown") return (0, _chunk5RYM4COI.z)(_o11.dataType) && _a7 === "columns" ? {
        value: _o11.value,
        dataType: _o11.dataType
      } : {
        value: _s7,
        dataType: ce(_o11.dataType, _a7)
      };
      if (J(_o11.value)) return {
        value: _s7,
        dataType: ce(_o11.value, _a7)
      };
      if (typeof _o11.value == "object") {
        var _i7 = J(_s7) ? mt(_s7) : U;
        return {
          value: _s7,
          dataType: _i7
        };
      }
      throw new Error(`Cannot access member ${_a7} of ${_o11.value}`);
    }
    if (t[0] === v.indexAccess) {
      var _t7 = (0, _slicedToArray2.default)(t, 3),
        _r5 = _t7[0],
        _n5 = _t7[1],
        _a8 = _t7[2],
        _o12 = V(e, _n5),
        _s8 = V(e, _a8),
        _i8 = A(e, _o12),
        _l3 = A(e, _s8);
      return (0, _chunk5RYM4COI.D)(_o12.dataType) ? {
        value: `(*${_i8})[${_l3}]`,
        dataType: (0, _chunkSMTSXYNG.i)(_o12.dataType.inner) ? er(_o12.dataType.inner) : U
      } : {
        value: `${_i8}[${_l3}]`,
        dataType: (0, _chunkSMTSXYNG.i)(_o12.dataType) ? er(_o12.dataType) : U
      };
    }
    if (t[0] === v.numericLiteral) {
      var _r6 = ft(t[1]);
      if (!_r6) throw new Error(`Invalid numeric literal ${t[1]}`);
      return _r6;
    }
    if (t[0] === v.call) {
      var _s9$m, _W2;
      var _t8 = (0, _slicedToArray2.default)(t, 3),
        _r7 = _t8[0],
        _n6 = _t8[1],
        _a9 = _t8[2],
        _o13 = V(e, _n6),
        _s9 = _o13.value;
      e.callStack.push(_s9);
      var _i9 = _a9.map(function (y) {
          return V(e, y);
        }),
        _l4 = _i9.map(function (y) {
          return {
            value: A(e, y),
            dataType: y.dataType
          };
        }),
        _u3 = _l4.map(function (y) {
          return y.value;
        });
      if (e.callStack.pop(), typeof _s9 == "string") return {
        value: `${_s9}(${_u3.join(", ")})`,
        dataType: _o13.dataType
      };
      if ((0, _chunk5RYM4COI.C)(_s9)) return {
        value: `${e.resolve(_s9)}(${_u3.join(", ")})`,
        dataType: _o13.dataType
      };
      if (!Zt(_s9)) throw new Error(`Function ${String(_s9)} has not been created using TypeGPU APIs. Did you mean to wrap the function with tgpu.fn(args, return)(...) ?`);
      var _d = (_s9$m = _s9[_chunk5RYM4COI.a]) == null ? void 0 : _s9$m.argTypes,
        _g;
      !_d || _d === "keep" ? _g = _l4 : _d === "coerce" ? _g = (_W2 = W(e, _l4)) != null ? _W2 : _l4 : _g = (Array.isArray(_d) ? _d.map(function (x, h) {
        return [x, _l4[h]];
      }).filter(function (_ref32) {
        var _ref33 = (0, _slicedToArray2.default)(_ref32, 2),
          x = _ref33[1];
        return !!x;
      }) : typeof _d == "function" ? _d.apply(void 0, (0, _toConsumableArray2.default)(_l4)).map(function (x, h) {
        return [x, _l4[h]];
      }).filter(function (_ref34) {
        var _ref35 = (0, _slicedToArray2.default)(_ref34, 2),
          x = _ref35[1];
        return !!x;
      }) : Object.entries(_d).map(function (_ref36) {
        var _i9$;
        var _ref37 = (0, _slicedToArray2.default)(_ref36, 2),
          x = _ref37[0],
          h = _ref37[1];
        var T = ((_i9$ = _i9[0]) == null ? void 0 : _i9$.value)[x];
        if (!T) throw new Error(`Missing argument ${x} in function call`);
        return [h, T];
      })).map(function (_ref38) {
        var _W3;
        var _ref39 = (0, _slicedToArray2.default)(_ref38, 2),
          x = _ref39[0],
          h = _ref39[1];
        var T = (_W3 = W(e, [h], [x])) == null ? void 0 : _W3[0];
        if (!T) throw new Error(`Cannot convert ${e.resolve(h.dataType)} to ${e.resolve(x)}`);
        return T;
      });
      var _c = _s9.apply(void 0, (0, _toConsumableArray2.default)(_g));
      return {
        value: A(e, _c),
        dataType: _c.dataType
      };
    }
    if (t[0] === v.objectExpr) {
      var _r8 = t[1],
        _n7 = e.callStack[e.callStack.length - 1];
      if ((0, _chunk5RYM4COI.C)(_n7)) {
        var _a10 = Object.keys(_n7.propTypes),
          _o14 = Object.fromEntries(_a10.map(function (i) {
            var l = _r8[i];
            if (l === void 0) throw new Error(`Missing property ${i} in object literal for struct ${_n7}`);
            return [i, V(e, l)];
          }));
        return {
          value: nr(e, _n7, _o14).map(function (i) {
            return A(e, i);
          }).join(", "),
          dataType: _n7
        };
      }
      if (Zt(_n7)) {
        var _n7$m;
        var _a11 = (_n7$m = _n7[_chunk5RYM4COI.a]) == null ? void 0 : _n7$m.argTypes;
        if (typeof _a11 == "object" && _a11 !== null) {
          var _o15 = Object.keys(_a11),
            _s10 = {};
          for (var _i10 of _o15) {
            var _g2$;
            var _l5 = _r8[_i10];
            if (_l5 === void 0) throw new Error(`Missing property ${_i10} in object literal for function ${_n7}`);
            var _u4 = V(e, _l5),
              _d2 = _a11[_i10],
              _g2 = W(e, [_u4], [_d2]);
            _s10[_i10] = (_g2$ = _g2 == null ? void 0 : _g2[0]) != null ? _g2$ : _u4;
          }
          return {
            value: _s10,
            dataType: U
          };
        }
      }
      throw new Error("Object expressions are only allowed as return values of functions or as arguments to structs.");
    }
    if (t[0] === v.arrayExpr) {
      var _o16$;
      var _t9 = (0, _slicedToArray2.default)(t, 2),
        _r9 = _t9[0],
        _n8 = _t9[1],
        _a12 = _n8.map(function (g) {
          return V(e, g);
        });
      if (_a12.length === 0) throw new Error("Cannot create empty array literal.");
      var _o16 = W(e, _a12);
      if (!_o16) throw new Error("The given values cannot be automatically converted to a common type. Consider explicitly casting them.");
      var _s11 = (_o16$ = _o16[0]) == null ? void 0 : _o16$.dataType,
        _i11 = _s11.type === "abstractFloat" ? _chunk5RYM4COI.T : _s11.type === "abstractInt" ? _chunk5RYM4COI.S : _s11,
        _u5 = `array<${e.resolve(_i11)}, ${_a12.length}>`,
        _d3 = _o16.map(function (g) {
          return A(e, g);
        });
      return {
        value: `${_u5}( ${_d3.join(", ")} )`,
        dataType: (0, _chunkSMTSXYNG.da)(_i11, _a12.length)
      };
    }
    if (t[0] === v.stringLiteral) throw new Error("Cannot use string literals in TGSL.");
    if (t[0] === v.preUpdate) throw new Error("Cannot use pre-updates in TGSL.");
    Ba(t);
  }
  function Bt(e) {
    return typeof e != "object" || e[0] !== v.block ? [v.block, [e]] : e;
  }
  function he(e, t) {
    if (typeof t == "string") return `${e.pre}${A(e, Ar(e, t))};`;
    if (typeof t == "boolean") return `${e.pre}${A(e, kn(e, t))};`;
    if (t[0] === v.return) {
      var r = t[1],
        n = r !== void 0 ? A(e, V(e, r)) : void 0;
      if ((0, _chunk5RYM4COI.C)(e.callStack[e.callStack.length - 1]) && typeof r == "object" && r[0] === v.objectExpr) {
        var a = e.resolve(e.callStack[e.callStack.length - 1]);
        return `${e.pre}return ${a}(${n});`;
      }
      return n ? `${e.pre}return ${n};` : `${e.pre}return;`;
    }
    if (t[0] === v.if) {
      var _l6, _l7;
      var _t10 = (0, _slicedToArray2.default)(t, 4),
        _r10 = _t10[0],
        _n9 = _t10[1],
        _a13 = _t10[2],
        o = _t10[3],
        s = V(e, _n9),
        i = s,
        l = W(e, [s], [_chunk5RYM4COI.Q]);
      (l == null ? void 0 : l[0]) && (_l6 = l, _l7 = (0, _slicedToArray2.default)(_l6, 1), i = _l7[0], _l6);
      var u = A(e, i);
      e.indent();
      var d = he(e, Bt(_a13));
      e.dedent(), e.indent();
      var g = o ? he(e, Bt(o)) : void 0;
      return e.dedent(), g ? `${e.pre}if (${u})
${d}
${e.pre}else
${g}` : `${e.pre}if (${u})
${d}`;
    }
    if (t[0] === v.let || t[0] === v.const) {
      var _t11 = (0, _slicedToArray2.default)(t, 3),
        _r11 = _t11[0],
        _n10 = _t11[1],
        _a14 = _t11[2],
        _o17 = _a14 !== void 0 ? V(e, _a14) : void 0;
      if (!_o17) throw new Error(`Cannot create variable '${_n10}' without an initial value.`);
      if ((0, _chunkSMTSXYNG.d)(_o17.dataType)) throw new Error(`Cannot create variable '${_n10}' with loose data type.`);
      Ra(e, _n10, rr(_o17.dataType));
      var _s12 = A(e, Ar(e, _n10));
      if (typeof _a14 == "object" && _a14[0] === v.objectExpr && (0, _chunk5RYM4COI.C)(e.callStack[e.callStack.length - 1])) {
        var _i12 = e.callStack[e.callStack.length - 1],
          _l8 = _a14[1],
          _u6 = {};
        for (var _ref40 of Object.entries(_l8)) {
          var _ref41 = (0, _slicedToArray2.default)(_ref40, 2);
          var c = _ref41[0];
          var y = _ref41[1];
          if (!y) throw new Error(`Missing property ${c} in object literal`);
          _u6[c] = V(e, y);
        }
        var _d4 = nr(e, _i12, _u6),
          _g3 = e.resolve(_i12);
        return `${e.pre}var ${_s12} = ${_g3}(${_d4.map(function (c) {
          return A(e, c);
        }).join(", ")});`;
      }
      return `${e.pre}var ${_s12} = ${A(e, _o17)};`;
    }
    if (t[0] === v.block) return En(e, t);
    if (t[0] === v.for) {
      var _t12 = (0, _slicedToArray2.default)(t, 5),
        _r12 = _t12[0],
        _n11 = _t12[1],
        _a15 = _t12[2],
        _o18 = _t12[3],
        _s13 = _t12[4],
        _i13 = _n11 ? he(e, _n11) : void 0,
        _l9 = _i13 ? _i13.slice(0, -1) : "",
        _u7 = _a15 ? V(e, _a15) : void 0,
        _d5 = _u7;
      if (_u7) {
        var _h2, _h3;
        var h = W(e, [_u7], [_chunk5RYM4COI.Q]);
        (h == null ? void 0 : h[0]) && (_h2 = h, _h3 = (0, _slicedToArray2.default)(_h2, 1), _d5 = _h3[0], _h2);
      }
      var _g4 = _d5 ? A(e, _d5) : "",
        _c2 = _o18 ? he(e, _o18) : void 0,
        _y3 = _c2 ? _c2.slice(0, -1) : "";
      e.indent();
      var x = he(e, Bt(_s13));
      return e.dedent(), `${e.pre}for (${_l9}; ${_g4}; ${_y3})
${x}`;
    }
    if (t[0] === v.while) {
      var _t13 = (0, _slicedToArray2.default)(t, 3),
        _r13 = _t13[0],
        _n12 = _t13[1],
        _a16 = _t13[2],
        _o19 = V(e, _n12),
        _s14 = _o19;
      if (_o19) {
        var _u9, _u10;
        var _u8 = W(e, [_o19], [_chunk5RYM4COI.Q]);
        (_u8 == null ? void 0 : _u8[0]) && (_u9 = _u8, _u10 = (0, _slicedToArray2.default)(_u9, 1), _s14 = _u10[0], _u9);
      }
      var _i14 = A(e, _s14);
      e.indent();
      var _l10 = he(e, Bt(_a16));
      return e.dedent(), `${e.pre}while (${_i14})
${_l10}`;
    }
    return t[0] === v.continue ? `${e.pre}continue;` : t[0] === v.break ? `${e.pre}break;` : `${e.pre}${A(e, V(e, t))};`;
  }
  function Ln(e, t) {
    return En(e, t);
  }
  var _n = "#CATCHALL#",
    Ur = /*#__PURE__*/function () {
      function Ur() {
        (0, _classCallCheck2.default)(this, Ur);
        this._stack = [];
        this._itemDepth = 0;
      }
      return (0, _createClass2.default)(Ur, [{
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
              return o != null ? ar(o) : void 0;
            }
            if ((n == null ? void 0 : n.type) === "blockScope") {
              var _a17 = n.declarations.get(t);
              if (_a17 !== void 0) return {
                value: t,
                dataType: _a17
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
    Rt = ["", "  ", "    ", "      ", "        ", "          ", "            ", "              ", "                "],
    Ir = Rt.length - 1,
    Br = /*#__PURE__*/function () {
      function Br() {
        (0, _classCallCheck2.default)(this, Br);
        this.identLevel = 0;
      }
      return (0, _createClass2.default)(Br, [{
        key: "pre",
        get: function get() {
          var _Rt$this$identLevel;
          return (_Rt$this$identLevel = Rt[this.identLevel]) != null ? _Rt$this$identLevel : Rt[Ir].repeat(this.identLevel / Ir) + Rt[this.identLevel % Ir];
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
    Rr = /*#__PURE__*/function () {
      function Rr(t) {
        (0, _classCallCheck2.default)(this, Rr);
        this._memoizedResolves = new WeakMap();
        this._memoizedDerived = new WeakMap();
        this._indentController = new Br();
        this._itemStateStack = new Ur();
        this._declarations = [];
        this[_chunk5RYM4COI.a] = {
          itemStateStack: this._itemStateStack
        };
        this.bindGroupLayoutsToPlaceholderMap = new Map();
        this._nextFreeLayoutPlaceholderIdx = 0;
        this.fixedBindings = [];
        this.callStack = [];
        this.names = t.names, this._jitTranspiler = t.jitTranspiler;
      }
      return (0, _createClass2.default)(Rr, [{
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
              head: Cr(this, t.args, t.returnType),
              body: Ln(this, t.body)
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
            group: _n,
            binding: n
          };
        }
      }, {
        key: "readSlot",
        value: function readSlot(t) {
          var r = this._itemStateStack.readSlot(t);
          if (r === void 0) throw new _chunk5RYM4COI.h(t);
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
          var _this14 = this;
          if (Ne(t)) return this.withSlots(t["~providing"].pairs, function () {
            return _this14.unwrap(t["~providing"].inner);
          });
          var r = t;
          for (;;) if (H(r)) r = this.readSlot(r);else if (q(r)) r = this._getOrCompute(r);else break;
          return r;
        }
      }, {
        key: "_getOrCompute",
        value: function _getOrCompute(t) {
          var _this$_memoizedDerive,
            _this15 = this;
          var r = (_this$_memoizedDerive = this._memoizedDerived.get(t)) != null ? _this$_memoizedDerive : [];
          this._itemStateStack.pushItem();
          try {
            for (var o of r) if ((0, _toConsumableArray2.default)(o.slotToValueMap.entries()).every(function (_ref42) {
              var _ref43 = (0, _slicedToArray2.default)(_ref42, 2),
                i = _ref43[0],
                l = _ref43[1];
              return i.areEqual(_this15._itemStateStack.readSlot(i), l);
            })) return o.result;
            (0, _chunk5RYM4COI.p)(_chunk5RYM4COI.m.CPU);
            var n;
            try {
              n = t["~compute"]();
            } finally {
              (0, _chunk5RYM4COI.q)(_chunk5RYM4COI.m.CPU);
            }
            var a = new Map();
            for (var _o20 of this._itemStateStack.topItem.usedSlots) a.set(_o20, this._itemStateStack.readSlot(_o20));
            return r.push({
              slotToValueMap: a,
              result: n
            }), this._memoizedDerived.set(t, r), n;
          } catch (n) {
            throw n instanceof _chunk5RYM4COI.g ? n.appendToTrace(t) : new _chunk5RYM4COI.g(n, [t]);
          } finally {
            this._itemStateStack.popItem();
          }
        }
      }, {
        key: "_getOrInstantiate",
        value: function _getOrInstantiate(t) {
          var _this$_memoizedResolv,
            _this16 = this;
          var r = (_this$_memoizedResolv = this._memoizedResolves.get(t)) != null ? _this$_memoizedResolv : [];
          this._itemStateStack.pushItem();
          try {
            for (var o of r) if ((0, _toConsumableArray2.default)(o.slotToValueMap.entries()).every(function (_ref44) {
              var _ref45 = (0, _slicedToArray2.default)(_ref44, 2),
                i = _ref45[0],
                l = _ref45[1];
              return i.areEqual(_this16._itemStateStack.readSlot(i), l);
            })) return o.result;
            var n;
            (0, _chunkSMTSXYNG.i)(t) ? n = ur(this, t) : q(t) || H(t) ? n = this.resolve(this.unwrap(t)) : je(t) ? n = t["~resolve"](this) : n = this.resolveValue(t);
            var a = new Map();
            for (var _o21 of this._itemStateStack.topItem.usedSlots) a.set(_o21, this._itemStateStack.readSlot(_o21));
            return r.push({
              slotToValueMap: a,
              result: n
            }), this._memoizedResolves.set(t, r), n;
          } catch (n) {
            throw n instanceof _chunk5RYM4COI.g ? n.appendToTrace(t) : new _chunk5RYM4COI.g(n, [t]);
          } finally {
            this._itemStateStack.popItem();
          }
        }
      }, {
        key: "resolve",
        value: function resolve(t) {
          var _this17 = this;
          if (Ne(t)) return this.withSlots(t["~providing"].pairs, function () {
            return _this17.resolve(t["~providing"].inner);
          });
          if (t && typeof t == "object" || typeof t == "function") {
            if (this._itemStateStack.itemDepth === 0) try {
              (0, _chunk5RYM4COI.p)(_chunk5RYM4COI.m.GPU);
              var r = (0, _chunk5RYM4COI.n)(this, function () {
                return _this17._getOrInstantiate(t);
              });
              return `${(0, _toConsumableArray2.default)(this._declarations).join(`

`)}${r}`;
            } finally {
              (0, _chunk5RYM4COI.q)(_chunk5RYM4COI.m.GPU);
            }
            return this._getOrInstantiate(t);
          }
          return String(t);
        }
      }, {
        key: "resolveValue",
        value: function resolveValue(t, r) {
          var _this18 = this;
          if (J(t)) return this.resolve(t);
          if (r && (0, _chunk5RYM4COI.B)(r)) return `array(${t.map(function (n) {
            return _this18.resolveValue(n, r.elementType);
          })})`;
          if (Array.isArray(t)) return `array(${t.map(function (n) {
            return _this18.resolveValue(n);
          })})`;
          if (r && (0, _chunk5RYM4COI.C)(r)) return `${this.resolve(r)}(${Object.entries(r.propTypes).map(function (_ref46) {
            var _ref47 = (0, _slicedToArray2.default)(_ref46, 2),
              n = _ref47[0],
              a = _ref47[1];
            return _this18.resolveValue(t[n], a);
          })})`;
          throw new Error(`Value ${t} (as json: ${JSON.stringify(t)}) of schema ${r} is not resolvable to WGSL`);
        }
      }]);
    }();
  function Ve(e, t) {
    var r = new Rr(t),
      n = r.resolve(e),
      a = r.bindGroupLayoutsToPlaceholderMap,
      o = [],
      s = new Set((0, _toConsumableArray2.default)(a.keys()).map(function (g) {
        return g.index;
      }).filter(function (g) {
        return g !== void 0;
      })),
      i = (0, _chunk5RYM4COI.M)(s),
      l = r.fixedBindings.map(function (g, c) {
        return [String(c), g.layoutEntry];
      }),
      u = function u() {
        var g = i.next().value,
          c = It(Object.fromEntries(l));
        return o[g] = c, n = n.replaceAll(_n, String(g)), [g, new Pe(c, Object.fromEntries(r.fixedBindings.map(function (y, x) {
          return [String(x), y.resource];
        })))];
      },
      d = l.length > 0 ? u() : null;
    for (var _ref48 of a.entries()) {
      var _g$index;
      var _ref49 = (0, _slicedToArray2.default)(_ref48, 2);
      var g = _ref49[0];
      var c = _ref49[1];
      var y = (_g$index = g.index) != null ? _g$index : i.next().value;
      o[y] = g, n = n.replaceAll(c, String(y));
    }
    return {
      code: n,
      bindGroupLayouts: o,
      catchall: d
    };
  }
  function Cr(e, t, r) {
    var n = t.map(function (a) {
      return `${a.value}: ${e.resolve(a.dataType)}`;
    }).join(", ");
    return r !== void 0 ? `(${n}) -> ${(0, _chunkSMTSXYNG.ja)(r)} ${e.resolve(r)}` : `(${n})`;
  }
  function oe(e, t) {
    var r = [];
    typeof t == "string" && (e.isEntry ? (Array.isArray(e.argTypes) && (0, _chunk5RYM4COI.C)(e.argTypes[0]) && r.push({
      In: e.argTypes[0]
    }), (0, _chunk5RYM4COI.C)(e.returnType) && r.push({
      Out: e.returnType
    })) : Array.isArray(e.argTypes) && (dn(t, Array.isArray(e.argTypes) ? e.argTypes : Object.values(e.argTypes), function (o) {
      return r.push(o);
    }), Be(t, e.returnType, function (o) {
      return r.push(o);
    })));
    var n = {
        applyExternals: function applyExternals(o) {
          r.push(o);
        },
        resolve: function resolve(o) {
          var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var i = {};
          for (var u of r) Q(i, u);
          var l = o.names.makeUnique((0, _chunk5RYM4COI.c)(this));
          if (typeof t == "string") {
            var _u11 = "";
            if (!e.isEntry) _u11 = Array.isArray(e.argTypes) ? "" : Cr(o, Object.entries(e.argTypes).map(function (_ref50) {
              var _ref51 = (0, _slicedToArray2.default)(_ref50, 2),
                g = _ref51[0],
                c = _ref51[1];
              return {
                value: g,
                dataType: c
              };
            }), e.returnType);else {
              var g = Array.isArray(e.argTypes) && (0, _chunk5RYM4COI.C)(e.argTypes[0]) ? "(in: In)" : "()",
                c = (0, _chunk5RYM4COI.A)(e.returnType) ? (0, _chunkSMTSXYNG.ja)(e.returnType) : "",
                y = e.returnType !== void 0 ? (0, _chunk5RYM4COI.C)(e.returnType) ? "-> Out" : `-> ${c !== "" ? c : "@location(0)"} ${o.resolve(e.returnType)}` : "";
              _u11 = `${g} ${y} `;
            }
            var d = ye(o, i, `${_u11}${t.trim()}`);
            o.addDeclaration(`${s}fn ${l}${d}`);
          } else {
            var _u12$ast;
            var _u12 = gn(t);
            if (_u12 != null && _u12.externals) {
              var h = Object.fromEntries(Object.entries(_u12.externals).filter(function (_ref52) {
                var _ref53 = (0, _slicedToArray2.default)(_ref52, 1),
                  T = _ref53[0];
                return !(T in i);
              }));
              Q(i, h);
            }
            var _d6 = (_u12$ast = _u12 == null ? void 0 : _u12.ast) != null ? _u12$ast : o.transpileFn(String(t));
            _d6.argNames.type === "destructured-object" && Q(i, Object.fromEntries(_d6.argNames.props.map(function (_ref54) {
              var h = _ref54.prop,
                T = _ref54.alias;
              return [T, h];
            }))), !Array.isArray(e.argTypes) && _d6.argNames.type === "identifiers" && _d6.argNames.names[0] !== void 0 && Q(i, (0, _defineProperty2.default)({}, _d6.argNames.names[0], Object.fromEntries(Object.keys(e.argTypes).map(function (h) {
              return [h, h];
            }))));
            var _g5 = _d6.externalNames.filter(function (h) {
              return !(h in i);
            });
            if (_g5.length > 0) throw new _chunk5RYM4COI.j((0, _chunk5RYM4COI.c)(this), _g5);
            var _c3 = Array.isArray(e.argTypes) ? _d6.argNames.type === "identifiers" ? e.argTypes.map(function (h, T) {
                var _ref55;
                return {
                  value: (_ref55 = _d6.argNames.type === "identifiers" ? _d6.argNames.names[T] : void 0) != null ? _ref55 : `arg_${T}`,
                  dataType: h
                };
              }) : [] : Object.entries(e.argTypes).map(function (_ref56) {
                var _ref57 = (0, _slicedToArray2.default)(_ref56, 2),
                  h = _ref57[0],
                  T = _ref57[1];
                return {
                  value: h,
                  dataType: T
                };
              }),
              _o$fnToWgsl = o.fnToWgsl({
                args: _c3,
                returnType: e.returnType,
                body: _d6.body,
                externalMap: i
              }),
              _y4 = _o$fnToWgsl.head,
              x = _o$fnToWgsl.body;
            o.addDeclaration(`${s}fn ${l}${o.resolve(_y4)}${o.resolve(x)}`);
          }
          return l;
        }
      },
      a = (0, _chunk5RYM4COI.c)(t);
    return a !== void 0 && (0, _chunk5RYM4COI.d)(n, a), n;
  }
  function On(e) {
    var t = 0;
    return Object.fromEntries(Object.entries(e).map(function (_ref58) {
      var _ref59 = (0, _slicedToArray2.default)(_ref58, 2),
        r = _ref59[0],
        n = _ref59[1];
      if ((0, _chunkSMTSXYNG.ia)(n)) return [r, n];
      var a = (0, _chunkSMTSXYNG.h)(n);
      return a !== void 0 ? (t = a + 1, [r, n]) : [r, (0, _chunkSMTSXYNG.ga)(t++, n)];
    }));
  }
  function Ct(e) {
    return (0, _chunkSMTSXYNG.i)(e) ? (0, _chunk5RYM4COI.L)(e) ? void 0 : (0, _chunkSMTSXYNG.h)(e) !== void 0 ? e : (0, _chunkSMTSXYNG.ga)(0, e) : (0, _chunkSMTSXYNG.ka)(On(e));
  }
  function $e(e) {
    return (0, _chunkSMTSXYNG.ka)(On(e));
  }
  function se(e) {
    for (var _len3 = arguments.length, t = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      t[_key3 - 1] = arguments[_key3];
    }
    return Ca(e) ? Pa.apply(void 0, [e].concat(t)) : e;
  }
  function Ca(e) {
    return Array.isArray(e) && "raw" in e && Array.isArray(e.raw) && e.raw.every(function (t) {
      return typeof t == "string";
    });
  }
  function Pa(e) {
    for (var _len4 = arguments.length, t = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      t[_key4 - 1] = arguments[_key4];
    }
    return e.slice(1).reduce(function (r, n, a) {
      return `${r}${t[a]}${n}`;
    }, e[0]);
  }
  function Gn(e) {
    var _e$workgroupSize$, _e$workgroupSize$2, _e$workgroupSize$3;
    var t = {
        argTypes: e.in && Object.keys(e.in).length !== 0 ? [$e(e.in)] : [],
        returnType: void 0,
        workgroupSize: [(_e$workgroupSize$ = e.workgroupSize[0]) != null ? _e$workgroupSize$ : 1, (_e$workgroupSize$2 = e.workgroupSize[1]) != null ? _e$workgroupSize$2 : 1, (_e$workgroupSize$3 = e.workgroupSize[2]) != null ? _e$workgroupSize$3 : 1],
        isEntry: !0
      },
      r = function r(n) {
        for (var _len5 = arguments.length, a = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
          a[_key5 - 1] = arguments[_key5];
        }
        return Va(t, e.workgroupSize, se.apply(void 0, [n].concat(a)));
      };
    return Object.assign(Object.assign(r, t), {
      does: r
    });
  }
  function Va(e, t, r) {
    var n = oe(e, r),
      a = e.argTypes[0];
    return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
      shell: e,
      $uses: function $uses(o) {
        return n.applyExternals(o), this;
      }
    }, _chunk5RYM4COI.b, n), "$name", function $name(o) {
      return (0, _chunk5RYM4COI.d)(n, o), (0, _chunk5RYM4COI.e)(a) && a.$name(`${o}_Input`), this;
    }), "~resolve", function resolve(o) {
      return n.resolve(o, `@compute @workgroup_size(${t.join(", ")}) `);
    }), "toString", function toString() {
      var _p30;
      return `computeFn:${(_p30 = (0, _chunk5RYM4COI.c)(n)) != null ? _p30 : "<unnamed>"}`;
    });
  }
  function Wn(e, t) {
    var r = (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _chunk5RYM4COI.a, !0), "argTypes", e), "returnType", t), "isEntry", !1),
      n = function n(a) {
        for (var _len6 = arguments.length, o = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          o[_key6 - 1] = arguments[_key6];
        }
        return ka(r, se.apply(void 0, [a].concat(o)));
      };
    return Object.assign(Object.assign(n, r), {
      does: n
    });
  }
  function Pr(e) {
    return (e == null ? void 0 : e.resourceType) === "function";
  }
  function $a(_ref61) {
    var _p31;
    var _ref62 = (0, _slicedToArray2.default)(_ref61, 2),
      e = _ref62[0],
      t = _ref62[1];
    return `${(_p31 = (0, _chunk5RYM4COI.c)(e)) != null ? _p31 : "<unnamed>"}=${t}`;
  }
  function ka(e, t) {
    var r = oe(e, t),
      n = (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _chunk5RYM4COI.a, {
        implementation: t,
        argTypes: e.argTypes
      }), "shell", e), "resourceType", "function"), "$uses", function $uses(s) {
        return r.applyExternals(s), this;
      }), _chunk5RYM4COI.b, r), "$name", function $name(s) {
        return (0, _chunk5RYM4COI.d)(r, s), this;
      }), "with", function _with(s, i) {
        return Mn(o, [[ge(s) ? s.slot : s, i]]);
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
      a = (0, _chunk5RYM4COI.N)(function () {
        if (typeof t == "string") throw new Error("Cannot execute on the CPU functions constructed with raw WGSL");
        return t.apply(void 0, arguments);
      }, function () {
        var _e$returnType;
        for (var _len7 = arguments.length, s = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          s[_key7] = arguments[_key7];
        }
        return {
          value: new Pt(o, s.map(function (i) {
            return i.value;
          })),
          dataType: (_e$returnType = e.returnType) != null ? _e$returnType : U
        };
      }, e.argTypes);
    a[_chunk5RYM4COI.a].implementation = t;
    var o = Object.assign(a, n);
    return Object.defineProperty(o, "toString", {
      value: function value() {
        var _p32;
        return `fn:${(_p32 = (0, _chunk5RYM4COI.c)(r)) != null ? _p32 : "<unnamed>"}`;
      }
    }), o;
  }
  function Mn(e, t) {
    var r = (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _chunk5RYM4COI.a, {
        implementation: e[_chunk5RYM4COI.a].implementation,
        argTypes: e[_chunk5RYM4COI.a].argTypes
      }), "resourceType", "function"), "shell", e.shell), "~providing", {
        inner: e,
        pairs: t
      }), "$uses", function $uses(o) {
        return e.$uses(o), this;
      }), _chunk5RYM4COI.b, e), "$name", function $name(o) {
        return e.$name(o), this;
      }), "with", function _with(o, s) {
        return Mn(a, [].concat((0, _toConsumableArray2.default)(t), [[ge(o) ? o.slot : o, s]]));
      }),
      n = (0, _chunk5RYM4COI.N)(function () {
        return e.apply(void 0, arguments);
      }, function () {
        var _e$shell$returnType;
        for (var _len8 = arguments.length, o = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          o[_key8] = arguments[_key8];
        }
        return {
          value: new Pt(a, o.map(function (s) {
            return s.value;
          })),
          dataType: (_e$shell$returnType = e.shell.returnType) != null ? _e$shell$returnType : U
        };
      }, e.shell.argTypes),
      a = Object.assign(n, r);
    return Object.defineProperty(a, "toString", {
      value: function value() {
        var _p33;
        return `fn:${(_p33 = (0, _chunk5RYM4COI.c)(e)) != null ? _p33 : "<unnamed>"}[${t.map($a).join(", ")}]`;
      }
    }), a[_chunk5RYM4COI.a].implementation = e[_chunk5RYM4COI.a].implementation, a;
  }
  var Pt = /*#__PURE__*/function () {
    function Pt(t, r) {
      (0, _classCallCheck2.default)(this, Pt);
      this._fn = t;
      this._params = r;
      this[_chunk5RYM4COI.b] = t;
    }
    return (0, _createClass2.default)(Pt, [{
      key: "~resolve",
      value: function resolve(t) {
        return t.resolve(`${t.resolve(this._fn)}(${this._params.map(function (r) {
          return t.resolve(r);
        }).join(", ")})`);
      }
    }, {
      key: "toString",
      value: function toString() {
        var _p34;
        return `call:${(_p34 = (0, _chunk5RYM4COI.c)(this)) != null ? _p34 : "<unnamed>"}`;
      }
    }]);
  }();
  function Nn(e) {
    var t = {
        argTypes: e.in && Object.keys(e.in).length !== 0 ? [$e(e.in)] : [],
        targets: e.out,
        returnType: Ct(e.out),
        isEntry: !0
      },
      r = function r(n) {
        for (var _len9 = arguments.length, a = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
          a[_key9 - 1] = arguments[_key9];
        }
        return Ea(t, se.apply(void 0, [n].concat(a)));
      };
    return Object.assign(Object.assign(r, t), {
      does: r
    });
  }
  function Ea(e, t) {
    var r = oe(e, t),
      n = e.returnType,
      a = e.argTypes[0];
    return typeof t == "string" && Be(t, n, function (s) {
      return r.applyExternals(s);
    }), (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
      shell: e,
      outputType: n,
      $uses: function $uses(s) {
        return r.applyExternals(s), this;
      }
    }, _chunk5RYM4COI.b, r), "$name", function $name(s) {
      return (0, _chunk5RYM4COI.d)(r, s), (0, _chunk5RYM4COI.e)(n) && n.$name(`${s}_Output`), (0, _chunk5RYM4COI.e)(a) && a.$name(`${s}_Input`), this;
    }), "~resolve", function resolve(s) {
      if (typeof t == "string") return r.resolve(s, "@fragment ");
      var i = s;
      if (i.callStack === void 0) throw new Error("Cannot resolve a TGSL function outside of a generation context");
      try {
        return i.callStack.push(n), r.resolve(s, "@fragment ");
      } finally {
        i.callStack.pop();
      }
    }), "toString", function toString() {
      var _p35;
      return `fragmentFn:${(_p35 = (0, _chunk5RYM4COI.c)(r)) != null ? _p35 : "<unnamed>"}`;
    });
  }
  function jn(e) {
    var _e$in;
    var t = {
        attributes: [(_e$in = e.in) != null ? _e$in : {}],
        returnType: Object.keys(e.out).length !== 0 ? Ct(e.out) : void 0,
        argTypes: e.in && Object.keys(e.in).length !== 0 ? [$e(e.in)] : [],
        isEntry: !0
      },
      r = function r(n) {
        for (var _len10 = arguments.length, a = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
          a[_key10 - 1] = arguments[_key10];
        }
        return La(t, se.apply(void 0, [n].concat(a)));
      };
    return Object.assign(Object.assign(r, t), {
      does: r
    });
  }
  function La(e, t) {
    var r = oe(e, t),
      n = e.returnType,
      a = e.argTypes[0];
    return typeof t == "string" && Be(t, n, function (o) {
      return r.applyExternals(o);
    }), (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
      shell: e,
      outputType: n,
      inputType: a,
      $uses: function $uses(o) {
        return r.applyExternals(o), this;
      }
    }, _chunk5RYM4COI.b, r), "$name", function $name(o) {
      return (0, _chunk5RYM4COI.d)(r, o), (0, _chunk5RYM4COI.e)(n) && n.$name(`${o}_Output`), (0, _chunk5RYM4COI.e)(a) && a.$name(`${o}_Input`), this;
    }), "~resolve", function resolve(o) {
      if (typeof t == "string") return r.resolve(o, "@vertex ");
      var s = o;
      if (s.callStack === void 0) throw new Error("Cannot resolve a TGSL function outside of a generation context");
      try {
        return s.callStack.push(n), r.resolve(o, "@vertex ");
      } finally {
        s.callStack.pop();
      }
    }), "toString", function toString() {
      var _p36;
      return `vertexFn:${(_p36 = (0, _chunk5RYM4COI.c)(r)) != null ? _p36 : "<unnamed>"}`;
    });
  }
  var ie = exports.RandomNameRegistry = /*#__PURE__*/function () {
      function ie() {
        (0, _classCallCheck2.default)(this, ie);
        this.lastUniqueId = 0;
      }
      return (0, _createClass2.default)(ie, [{
        key: "makeUnique",
        value: function makeUnique(t) {
          var r;
          return t ? (r = t.replaceAll(/\s/g, "_"), r = r.replaceAll(/[^\w\d]/g, "")) : r = "item", `${r}_${this.lastUniqueId++}`;
        }
      }]);
    }(),
    ue = exports.StrictNameRegistry = /*#__PURE__*/function () {
      function ue() {
        (0, _classCallCheck2.default)(this, ue);
        this._usedNames = new Set();
      }
      return (0, _createClass2.default)(ue, [{
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
  function zn(e) {
    var t = e.externals,
      r = e.template,
      n = e.names,
      a = e.unstable_jitTranspiler,
      o = {};
    Q(o, t != null ? t : {});
    var s = {
        "~resolve": function resolve(l) {
          return ye(l, o, r != null ? r : "");
        },
        toString: function toString() {
          return "<root>";
        }
      },
      _Ve = Ve(s, {
        names: n === "strict" ? new ue() : new ie(),
        jitTranspiler: a
      }),
      i = _Ve.code;
    return i;
  }
  var tt = /*#__PURE__*/function () {
    function tt(t) {
      (0, _classCallCheck2.default)(this, tt);
      this._map = new WeakMap();
      this._make = t;
    }
    return (0, _createClass2.default)(tt, [{
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
  function Kn(e, t, r) {
    return new Vr(new $r(e, t, r), {});
  }
  function Hn(e) {
    var t = e;
    return (t == null ? void 0 : t.resourceType) === "compute-pipeline" && !!t[_chunk5RYM4COI.a];
  }
  var Vr = /*#__PURE__*/function () {
      function e(t, r) {
        (0, _classCallCheck2.default)(this, e);
        this.resourceType = "compute-pipeline";
        this._core = t;
        this._priors = r;
        this[_chunk5RYM4COI.a] = {
          get rawPipeline() {
            return t.unwrap().pipeline;
          }
        }, this[_chunk5RYM4COI.b] = t;
      }
      return (0, _createClass2.default)(e, [{
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
          var _p37,
            _this19 = this;
          var a = this._core.unwrap(),
            o = this._core.branch,
            s = o.commandEncoder.beginComputePass({
              label: (_p37 = (0, _chunk5RYM4COI.c)(this._core)) != null ? _p37 : "<unnamed>"
            });
          s.setPipeline(a.pipeline);
          var i = new Set(a.bindGroupLayouts);
          if (a.bindGroupLayouts.forEach(function (l, u) {
            if (a.catchall && u === a.catchall[0]) s.setBindGroup(u, o.unwrap(a.catchall[1])), i.delete(l);else {
              var _this19$_priors$bindG;
              var d = (_this19$_priors$bindG = _this19._priors.bindGroupLayoutMap) == null ? void 0 : _this19$_priors$bindG.get(l);
              d !== void 0 && (i.delete(l), s.setBindGroup(u, o.unwrap(d)));
            }
          }), i.size > 0) throw new _chunk5RYM4COI.k(i);
          s.dispatchWorkgroups(t, r, n), s.end();
        }
      }, {
        key: "$name",
        value: function $name(t) {
          return (0, _chunk5RYM4COI.d)(this._core, t), this;
        }
      }]);
    }(),
    $r = /*#__PURE__*/function () {
      function $r(t, r, n) {
        (0, _classCallCheck2.default)(this, $r);
        this.branch = t;
        this._slotBindings = r;
        this._entryFn = n;
      }
      return (0, _createClass2.default)($r, [{
        key: "unwrap",
        value: function unwrap() {
          var _this20 = this;
          if (this._memo === void 0) {
            var _n$a$, _p39, _p40, _p41, _p42;
            var t = this.branch.device,
              _Ve2 = Ve({
                "~resolve": function resolve(o) {
                  return o.withSlots(_this20._slotBindings, function () {
                    o.resolve(_this20._entryFn);
                  }), "";
                },
                toString: function toString() {
                  var _p38;
                  return `computePipeline:${(_p38 = (0, _chunk5RYM4COI.c)(_this20)) != null ? _p38 : "<unnamed>"}`;
                }
              }, {
                names: this.branch.nameRegistry,
                jitTranspiler: this.branch.jitTranspiler
              }),
              r = _Ve2.code,
              n = _Ve2.bindGroupLayouts,
              a = _Ve2.catchall;
            a !== null && (_n$a$ = n[a[0]]) != null && _n$a$.$name(`${(_p39 = (0, _chunk5RYM4COI.c)(this)) != null ? _p39 : "<unnamed>"} - Automatic Bind Group & Layout`), this._memo = {
              pipeline: t.createComputePipeline({
                label: (_p40 = (0, _chunk5RYM4COI.c)(this)) != null ? _p40 : "<unnamed>",
                layout: t.createPipelineLayout({
                  label: `${(_p41 = (0, _chunk5RYM4COI.c)(this)) != null ? _p41 : "<unnamed>"} - Pipeline Layout`,
                  bindGroupLayouts: n.map(function (o) {
                    return _this20.branch.unwrap(o);
                  })
                }),
                compute: {
                  module: t.createShaderModule({
                    label: `${(_p42 = (0, _chunk5RYM4COI.c)(this)) != null ? _p42 : "<unnamed>"} - Shader`,
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
  function Lr(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "vertex";
    return new Er(e, t);
  }
  function $t(e) {
    return (e == null ? void 0 : e.resourceType) === "vertex-layout";
  }
  var kr = Symbol("defaultAttribEntry");
  function Vt(e, t, r, n, a) {
    if ((0, _chunk5RYM4COI.K)(t) || (0, _chunkSMTSXYNG.g)(t)) {
      var o = (0, _chunkSMTSXYNG.h)(t);
      return o !== void 0 && (n[a != null ? a : kr] = o), Vt(e, t.inner, (0, _chunkSMTSXYNG.a)(r, (0, _chunkSMTSXYNG.$)(t)), n);
    }
    if ((0, _chunk5RYM4COI.C)(t)) {
      var _o22 = r;
      return Object.fromEntries(Object.entries(t.propTypes).map(function (_ref65) {
        var _ref66 = (0, _slicedToArray2.default)(_ref65, 2),
          s = _ref66[0],
          i = _ref66[1];
        _o22 = (0, _chunkSMTSXYNG.a)(_o22, (0, _chunkSMTSXYNG._)(i));
        var l = [s, Vt(e, i, _o22, n, s)];
        return _o22 += (0, _chunkSMTSXYNG.ba)(i), l;
      }));
    }
    if ((0, _chunkSMTSXYNG.f)(t)) {
      var _o23 = r;
      return Object.fromEntries(Object.entries(t.propTypes).map(function (_ref67) {
        var _ref68 = (0, _slicedToArray2.default)(_ref67, 2),
          s = _ref68[0],
          i = _ref68[1];
        _o23 = (0, _chunkSMTSXYNG.a)(_o23, (0, _chunkSMTSXYNG.$)(i));
        var l = [s, Vt(e, i, _o23, n, s)];
        return _o23 += (0, _chunkSMTSXYNG.ba)(i), l;
      }));
    }
    if ("type" in t && typeof t.type == "string") {
      if (_chunkSMTSXYNG.b.includes(t.type)) return {
        _layout: e,
        format: t.type,
        offset: r
      };
      var _o24 = _chunkSMTSXYNG.c[t.type];
      if (_o24) return {
        _layout: e,
        format: _o24,
        offset: r
      };
    }
    throw new Error(`Unsupported data used in vertex layout: ${String(t)}`);
  }
  var Er = /*#__PURE__*/function () {
    function Er(t, r) {
      (0, _classCallCheck2.default)(this, Er);
      this.resourceType = "vertex-layout";
      this._customLocationMap = {};
      this.schemaForCount = t;
      this.stepMode = r;
      var n = t(0);
      this.stride = (0, _chunkSMTSXYNG.a)((0, _chunkSMTSXYNG.ba)(n.elementType), (0, _chunkSMTSXYNG._)(n)), this.attrib = Vt(this, n.elementType, 0, this._customLocationMap);
    }
    return (0, _createClass2.default)(Er, [{
      key: "vertexLayout",
      get: function get() {
        var _this21 = this;
        if (this._customLocationMap[kr] !== void 0) {
          if (typeof this.attrib.format != "string" || typeof this.attrib.offset != "number") throw new Error("Single attribute vertex layouts must have a format and offset.");
          return {
            arrayStride: this.stride,
            stepMode: this.stepMode,
            attributes: [{
              format: this.attrib.format,
              offset: this.attrib.offset,
              shaderLocation: this._customLocationMap[kr]
            }]
          };
        }
        if (!Object.keys(this.attrib).every(function (r) {
          return _this21._customLocationMap[r] !== void 0;
        })) throw new Error("All attributes must have custom locations in order to unwrap a vertex layout.");
        return {
          arrayStride: this.stride,
          stepMode: this.stepMode,
          attributes: (0, _toConsumableArray2.default)(Object.entries(this.attrib).map(function (_ref69) {
            var _ref70 = (0, _slicedToArray2.default)(_ref69, 2),
              r = _ref70[0],
              n = _ref70[1];
            return {
              format: n.format,
              offset: n.offset,
              shaderLocation: _this21._customLocationMap[r]
            };
          }))
        };
      }
    }, {
      key: "$name",
      value: function $name(t) {
        return (0, _chunk5RYM4COI.d)(this, t), this;
      }
    }]);
  }();
  function _a(e) {
    return typeof (e == null ? void 0 : e.loadOp) == "string";
  }
  function qn(e, t) {
    if ((0, _chunkSMTSXYNG.i)(e)) {
      if (!_a(t)) throw new Error("Expected a single color attachment, not a record.");
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
  function Oa(e) {
    return typeof (e == null ? void 0 : e.format) == "string";
  }
  function Jn(e, t) {
    if ((0, _chunkSMTSXYNG.i)(e)) {
      if ((0, _chunk5RYM4COI.L)(e)) return [];
      if (!Oa(t)) throw new Error("Expected a single color target configuration, not a record.");
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
  function Yn(e) {
    return new _r(new Or(e), {});
  }
  function Qn(e) {
    var t = e;
    return (t == null ? void 0 : t.resourceType) === "render-pipeline" && !!t[_chunk5RYM4COI.a];
  }
  var _r = /*#__PURE__*/function () {
      function e(t, r) {
        (0, _classCallCheck2.default)(this, e);
        this.resourceType = "render-pipeline";
        this[_chunk5RYM4COI.a] = {
          core: t,
          priors: r
        }, this[_chunk5RYM4COI.b] = t;
      }
      return (0, _createClass2.default)(e, [{
        key: "$name",
        value: function $name(t) {
          return (0, _chunk5RYM4COI.d)(this[_chunk5RYM4COI.a].core, t), this;
        }
      }, {
        key: "with",
        value: function _with(t, r) {
          var _n$priors$bindGroupLa, _n$priors$vertexLayou;
          var n = this[_chunk5RYM4COI.a];
          if (Ut(t)) return new e(n.core, Object.assign({}, n.priors, {
            bindGroupLayoutMap: new Map([].concat((0, _toConsumableArray2.default)((_n$priors$bindGroupLa = n.priors.bindGroupLayoutMap) != null ? _n$priors$bindGroupLa : []), [[t, r]]))
          }));
          if ($t(t)) return new e(n.core, Object.assign({}, n.priors, {
            vertexLayoutMap: new Map([].concat((0, _toConsumableArray2.default)((_n$priors$vertexLayou = n.priors.vertexLayoutMap) != null ? _n$priors$vertexLayou : []), [[t, r]]))
          }));
          throw new Error("Unsupported value passed into .with()");
        }
      }, {
        key: "withColorAttachment",
        value: function withColorAttachment(t) {
          var r = this[_chunk5RYM4COI.a];
          return new e(r.core, Object.assign({}, r.priors, {
            colorAttachment: t
          }));
        }
      }, {
        key: "withDepthStencilAttachment",
        value: function withDepthStencilAttachment(t) {
          var r = this[_chunk5RYM4COI.a];
          return new e(r.core, Object.assign({}, r.priors, {
            depthStencilAttachment: t
          }));
        }
      }, {
        key: "draw",
        value: function draw(t, r, n, a) {
          var _o$priors$colorAttach;
          var o = this[_chunk5RYM4COI.a],
            s = o.core.unwrap(),
            _o$core$options = o.core.options,
            i = _o$core$options.branch,
            l = _o$core$options.fragmentFn,
            d = {
              colorAttachments: qn(l.shell.targets, (_o$priors$colorAttach = o.priors.colorAttachment) != null ? _o$priors$colorAttach : {}).map(function (T) {
                return X(T.view) ? Object.assign({}, T, {
                  view: i.unwrap(T.view).createView()
                }) : T;
              })
            },
            g = (0, _chunk5RYM4COI.c)(o.core);
          if (g !== void 0 && (d.label = g), o.priors.depthStencilAttachment !== void 0) {
            var T = o.priors.depthStencilAttachment;
            X(T.view) ? d.depthStencilAttachment = Object.assign({}, T, {
              view: i.unwrap(T.view).createView()
            }) : d.depthStencilAttachment = T;
          }
          var c = i.commandEncoder.beginRenderPass(d);
          c.setPipeline(s.pipeline);
          var y = new Set(s.bindGroupLayouts);
          s.bindGroupLayouts.forEach(function (T, D) {
            if (s.catchall && D === s.catchall[0]) c.setBindGroup(D, i.unwrap(s.catchall[1])), y.delete(T);else {
              var _o$priors$bindGroupLa;
              var ke = (_o$priors$bindGroupLa = o.priors.bindGroupLayoutMap) == null ? void 0 : _o$priors$bindGroupLa.get(T);
              ke !== void 0 && (y.delete(T), c.setBindGroup(D, i.unwrap(ke)));
            }
          });
          var x = new Set(o.core.usedVertexLayouts);
          if (o.core.usedVertexLayouts.forEach(function (T, D) {
            var _o$priors$vertexLayou;
            var ke = (_o$priors$vertexLayou = o.priors.vertexLayoutMap) == null ? void 0 : _o$priors$vertexLayou.get(T);
            ke && (x.delete(T), c.setVertexBuffer(D, i.unwrap(ke)));
          }), y.size > 0) throw new _chunk5RYM4COI.k(y);
          if (x.size > 0) throw new _chunk5RYM4COI.l(x);
          c.draw(t, r, n, a), c.end(), i.flush();
        }
      }]);
    }(),
    Or = /*#__PURE__*/function () {
      function Or(t) {
        (0, _classCallCheck2.default)(this, Or);
        this.options = t;
        var r = Tn(t.vertexFn.shell.attributes[0], t.vertexAttribs);
        this._vertexBufferLayouts = r.bufferDefinitions, this.usedVertexLayouts = r.usedVertexLayouts, this._targets = Jn(t.fragmentFn.shell.targets, t.targets);
      }
      return (0, _createClass2.default)(Or, [{
        key: "unwrap",
        value: function unwrap() {
          var _this22 = this;
          if (this._memo === void 0) {
            var _u$d$, _p44, _p45, _p46;
            var _this$options = this.options,
              t = _this$options.branch,
              r = _this$options.vertexFn,
              n = _this$options.fragmentFn,
              a = _this$options.slotBindings,
              o = _this$options.primitiveState,
              s = _this$options.depthStencilState,
              i = _this$options.multisampleState,
              _Ve3 = Ve({
                "~resolve": function resolve(h) {
                  return h.withSlots(a, function () {
                    h.resolve(r), h.resolve(n);
                  }), "";
                },
                toString: function toString() {
                  var _p43;
                  return `renderPipeline:${(_p43 = (0, _chunk5RYM4COI.c)(_this22)) != null ? _p43 : "<unnamed>"}`;
                }
              }, {
                names: t.nameRegistry,
                jitTranspiler: t.jitTranspiler
              }),
              l = _Ve3.code,
              u = _Ve3.bindGroupLayouts,
              d = _Ve3.catchall;
            d !== null && ((_u$d$ = u[d[0]]) == null ? void 0 : _u$d$.$name(`${(_p44 = (0, _chunk5RYM4COI.c)(this)) != null ? _p44 : "<unnamed>"} - Automatic Bind Group & Layout`));
            var g = t.device,
              c = g.createShaderModule({
                label: `${(_p45 = (0, _chunk5RYM4COI.c)(this)) != null ? _p45 : "<unnamed>"} - Shader`,
                code: l
              }),
              y = {
                layout: g.createPipelineLayout({
                  label: `${(_p46 = (0, _chunk5RYM4COI.c)(this)) != null ? _p46 : "<unnamed>"} - Pipeline Layout`,
                  bindGroupLayouts: u.map(function (h) {
                    return t.unwrap(h);
                  })
                }),
                vertex: {
                  module: c,
                  buffers: this._vertexBufferLayouts
                },
                fragment: {
                  module: c,
                  targets: this._targets
                }
              },
              x = (0, _chunk5RYM4COI.c)(this);
            x !== void 0 && (y.label = x), o && (y.primitive = o), s && (y.depthStencil = s), i && (y.multisample = i), this._memo = {
              pipeline: g.createRenderPipeline(y),
              bindGroupLayouts: u,
              catchall: d
            };
          }
          return this._memo;
        }
      }]);
    }();
  var Gr = /*#__PURE__*/function () {
      function e(t, r) {
        (0, _classCallCheck2.default)(this, e);
        this._getRoot = t;
        this._slotBindings = r;
      }
      return (0, _createClass2.default)(e, [{
        key: "with",
        value: function _with(t, r) {
          return new e(this._getRoot, [].concat((0, _toConsumableArray2.default)(this._slotBindings), [[ge(t) ? t.slot : t, r]]));
        }
      }, {
        key: "withCompute",
        value: function withCompute(t) {
          return new Wr(this._getRoot(), this._slotBindings, t);
        }
      }, {
        key: "withVertex",
        value: function withVertex(t, r) {
          return new Mr({
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
    Wr = /*#__PURE__*/function () {
      function Wr(t, r, n) {
        (0, _classCallCheck2.default)(this, Wr);
        this._root = t;
        this._slotBindings = r;
        this._entryFn = n;
      }
      return (0, _createClass2.default)(Wr, [{
        key: "createPipeline",
        value: function createPipeline() {
          return Kn(this._root, this._slotBindings, this._entryFn);
        }
      }]);
    }(),
    Mr = /*#__PURE__*/function () {
      function Mr(t) {
        (0, _classCallCheck2.default)(this, Mr);
        this._options = t;
      }
      return (0, _createClass2.default)(Mr, [{
        key: "withFragment",
        value: function withFragment(t, r, n) {
          return (0, _chunk5RYM4COI.f)(typeof t != "string", "Just type mismatch validation"), (0, _chunk5RYM4COI.f)(typeof r != "string", "Just type mismatch validation"), new Nr(Object.assign({}, this._options, {
            fragmentFn: t,
            targets: r
          }));
        }
      }]);
    }(),
    Nr = /*#__PURE__*/function () {
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
          return Yn(this._options);
        }
      }]);
    }(),
    kt = /*#__PURE__*/function (_Gr) {
      function kt(_r16, n, a, o) {
        var _this23;
        (0, _classCallCheck2.default)(this, kt);
        _this23 = _callSuper(this, kt, [function () {
          return (0, _assertThisInitialized2.default)(_this23);
        }, []]);
        _this23._disposables = [];
        _this23._unwrappedBindGroupLayouts = new tt(function (r) {
          return r.unwrap(_this23);
        });
        _this23._unwrappedBindGroups = new tt(function (r) {
          return r.unwrap(_this23);
        });
        _this23._commandEncoder = null;
        _this23.device = _r16;
        _this23.nameRegistry = n;
        _this23.jitTranspiler = a;
        _this23._ownDevice = o;
        _this23["~unstable"] = _this23;
        return _this23;
      }
      (0, _inherits2.default)(kt, _Gr);
      return (0, _createClass2.default)(kt, [{
        key: "commandEncoder",
        get: function get() {
          return this._commandEncoder || (this._commandEncoder = this.device.createCommandEncoder()), this._commandEncoder;
        }
      }, {
        key: "createBuffer",
        value: function createBuffer(r, n) {
          var a = Fn(this, r, n);
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
          return new Pe(r, n);
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
          var n = Cn(r, this);
          return this._disposables.push(n), n;
        }
      }, {
        key: "unwrap",
        value: function unwrap(r) {
          if (Hn(r)) return r[_chunk5RYM4COI.a].rawPipeline;
          if (Qn(r)) return r[_chunk5RYM4COI.a].core.unwrap().pipeline;
          if (Ut(r)) return this._unwrappedBindGroupLayouts.getOrMake(r);
          if (Fr(r)) return this._unwrappedBindGroups.getOrMake(r);
          if (ae(r)) return r.buffer;
          if (X(r)) return r[_chunk5RYM4COI.a].unwrap();
          if (Ze(r)) {
            if (r[_chunk5RYM4COI.a].unwrap) return r[_chunk5RYM4COI.a].unwrap();
            throw new Error("Cannot unwrap laid-out texture view.");
          }
          if (et(r)) {
            if (r[_chunk5RYM4COI.a].unwrap) return r[_chunk5RYM4COI.a].unwrap();
            throw new Error("Cannot unwrap laid-out texture view.");
          }
          if ($t(r)) return r.vertexLayout;
          if (Ye(r)) {
            if (r[_chunk5RYM4COI.a].unwrap) return r[_chunk5RYM4COI.a].unwrap(this);
            throw new Error("Cannot unwrap laid-out sampler.");
          }
          if (Qe(r)) {
            if (r[_chunk5RYM4COI.a].unwrap) return r[_chunk5RYM4COI.a].unwrap(this);
            throw new Error("Cannot unwrap laid-out comparison sampler.");
          }
          throw new Error(`Unknown resource type: ${r}`);
        }
      }, {
        key: "beginRenderPass",
        value: function beginRenderPass(r, n) {
          var _this24 = this;
          var a = this.commandEncoder.beginRenderPass(r),
            o = new Map(),
            s = new Map(),
            i,
            l = function l() {
              if (!i) throw new Error("Cannot draw without a call to pass.setPipeline");
              var _i$m = i[_chunk5RYM4COI.a],
                u = _i$m.core,
                d = _i$m.priors,
                g = u.unwrap();
              a.setPipeline(g.pipeline);
              var c = new Set(g.bindGroupLayouts);
              g.bindGroupLayouts.forEach(function (x, h) {
                if (g.catchall && h === g.catchall[0]) a.setBindGroup(h, _this24.unwrap(g.catchall[1])), c.delete(x);else {
                  var _d$bindGroupLayoutMap, _d$bindGroupLayoutMap2;
                  var T = (_d$bindGroupLayoutMap = (_d$bindGroupLayoutMap2 = d.bindGroupLayoutMap) == null ? void 0 : _d$bindGroupLayoutMap2.get(x)) != null ? _d$bindGroupLayoutMap : o.get(x);
                  T !== void 0 && (c.delete(x), Fr(T) ? a.setBindGroup(h, _this24.unwrap(T)) : a.setBindGroup(h, T));
                }
              });
              var y = new Set();
              if (u.usedVertexLayouts.forEach(function (x, h) {
                var _d$vertexLayoutMap;
                var T = (_d$vertexLayoutMap = d.vertexLayoutMap) == null ? void 0 : _d$vertexLayoutMap.get(x),
                  D = T ? {
                    buffer: T,
                    offset: void 0,
                    size: void 0
                  } : s.get(x);
                !D || !D.buffer ? y.add(x) : ae(D.buffer) ? a.setVertexBuffer(h, _this24.unwrap(D.buffer), D.offset, D.size) : a.setVertexBuffer(h, D.buffer, D.offset, D.size);
              }), c.size > 0) throw new _chunk5RYM4COI.k(c);
              if (y.size > 0) throw new _chunk5RYM4COI.l(y);
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
            setIndexBuffer: function setIndexBuffer(u, d, g, c) {
              ae(u) ? a.setIndexBuffer(_this24.unwrap(u), d, g, c) : a.setIndexBuffer(u, d, g, c);
            },
            setVertexBuffer: function setVertexBuffer(u, d, g, c) {
              s.set(u, {
                buffer: d,
                offset: g,
                size: c
              });
            },
            setBindGroup: function setBindGroup(u, d) {
              o.set(u, d);
            },
            draw: function draw(u, d, g, c) {
              l(), a.draw(u, d, g, c);
            },
            drawIndexed: function drawIndexed() {
              l(), a.drawIndexed.apply(a, arguments);
            },
            drawIndirect: function drawIndirect() {
              l(), a.drawIndirect.apply(a, arguments);
            },
            drawIndexedIndirect: function drawIndexedIndirect() {
              l(), a.drawIndexedIndirect.apply(a, arguments);
            }
          }), a.end();
        }
      }, {
        key: "flush",
        value: function flush() {
          this._commandEncoder && (this.device.queue.submit([this._commandEncoder.finish()]), this._commandEncoder = null);
        }
      }]);
    }(Gr);
  function Xn(_x2) {
    return _Xn.apply(this, arguments);
  }
  function _Xn() {
    _Xn = (0, _asyncToGenerator2.default)(function* (e) {
      var _ref76 = e != null ? e : {},
        t = _ref76.adapter,
        r = _ref76.device,
        _ref76$unstable_names = _ref76.unstable_names,
        n = _ref76$unstable_names === void 0 ? "random" : _ref76$unstable_names,
        a = _ref76.unstable_jitTranspiler;
      if (!navigator.gpu) throw new Error("WebGPU is not supported by this browser.");
      var o = yield navigator.gpu.requestAdapter(t);
      if (!o) throw new Error("Could not find a compatible GPU");
      return new kt(yield o.requestDevice(r), n === "random" ? new ie() : new ue(), a, !0);
    });
    return _Xn.apply(this, arguments);
  }
  function Zn(e) {
    var _ref71 = e != null ? e : {},
      t = _ref71.device,
      _ref71$unstable_names = _ref71.unstable_names,
      r = _ref71$unstable_names === void 0 ? "random" : _ref71$unstable_names,
      n = _ref71.unstable_jitTranspiler;
    return new kt(t, r === "random" ? new ie() : new ue(), n, !1);
  }
  function Et(e) {
    return new jr(e);
  }
  var jr = /*#__PURE__*/function () {
    function jr() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : void 0;
      (0, _classCallCheck2.default)(this, jr);
      this.resourceType = "slot";
      this.defaultValue = t;
    }
    return (0, _createClass2.default)(jr, [{
      key: "$name",
      value: function $name(t) {
        return (0, _chunk5RYM4COI.d)(this, t), this;
      }
    }, {
      key: "areEqual",
      value: function areEqual(t, r) {
        return Object.is(t, r);
      }
    }, {
      key: "toString",
      value: function toString() {
        var _p47;
        return `slot:${(_p47 = (0, _chunk5RYM4COI.c)(this)) != null ? _p47 : "<unnamed>"}`;
      }
    }, {
      key: "value",
      get: function get() {
        var t = (0, _chunk5RYM4COI.o)();
        if (!t) throw new Error("Cannot access tgpu.slot's value outside of resolution.");
        return ze(t.unwrap(this));
      }
    }]);
  }();
  function ea(e, t) {
    return new zr(e, t);
  }
  var zr = /*#__PURE__*/function () {
    function zr(t) {
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : void 0;
      (0, _classCallCheck2.default)(this, zr);
      this.resourceType = "accessor";
      this.schema = t;
      this.defaultValue = r;
      this.slot = Et(r), this[_chunk5RYM4COI.b] = this.slot;
    }
    return (0, _createClass2.default)(zr, [{
      key: "$name",
      value: function $name(t) {
        return this.slot.$name(t), this;
      }
    }, {
      key: "toString",
      value: function toString() {
        var _p48;
        return `accessor:${(_p48 = (0, _chunk5RYM4COI.c)(this)) != null ? _p48 : "<unnamed>"}`;
      }
    }, {
      key: "value",
      get: function get() {
        var _this25 = this;
        if (!(0, _chunk5RYM4COI.o)()) throw new Error("Cannot access tgpu.accessor's value outside of resolution.");
        return new Proxy((0, _defineProperty2.default)({
          "~resolve": function resolve(r) {
            return r.resolve(_this25);
          },
          toString: function toString() {
            var _p49;
            return `.value:${(_p49 = (0, _chunk5RYM4COI.c)(_this25)) != null ? _p49 : "<unnamed>"}`;
          }
        }, _chunk5RYM4COI.a, {
          dataType: this.schema
        }), Y);
      }
    }, {
      key: "~resolve",
      value: function resolve(t) {
        var r = t.unwrap(this.slot);
        return lt(r) ? t.resolve(r) : Pr(r) ? `${t.resolve(r)}()` : t.resolveValue(r, this.schema);
      }
    }]);
  }();
  function ta(e) {
    return Wa(e);
  }
  function Ga(_ref72) {
    var _p50;
    var _ref73 = (0, _slicedToArray2.default)(_ref72, 2),
      e = _ref73[0],
      t = _ref73[1];
    return `${(_p50 = (0, _chunk5RYM4COI.c)(e)) != null ? _p50 : "<unnamed>"}=${t}`;
  }
  function Wa(e) {
    if ((0, _chunk5RYM4COI.o)()) throw new Error("Cannot create tgpu.derived objects at the resolution stage.");
    return (0, _defineProperty2.default)((0, _defineProperty2.default)(_defineAccessor("get", (0, _defineProperty2.default)({
      resourceType: "derived",
      "~compute": e
    }, _chunk5RYM4COI.s, void 0), "value", function () {
      var r = (0, _chunk5RYM4COI.o)();
      if (!r) throw new Error("Cannot access tgpu.derived's value outside of resolution.");
      return ze(r.unwrap(this));
    }), "with", function _with(r, n) {
      return ra(this, [[r, n]]);
    }), "toString", function toString() {
      return "derived";
    });
  }
  function ra(e, t) {
    return (0, _defineProperty2.default)((0, _defineProperty2.default)(_defineAccessor("get", (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
      resourceType: "derived"
    }, _chunk5RYM4COI.s, void 0), "~compute", function compute() {
      throw new Error("'~compute' should never be read on bound derived items.");
    }), "~providing", {
      inner: e,
      pairs: t
    }), "value", function () {
      var n = (0, _chunk5RYM4COI.o)();
      if (!n) throw new Error("Cannot access tgpu.derived's value outside of resolution.");
      return ze(n.unwrap(this));
    }), "with", function _with(n, a) {
      return ra(e, [].concat((0, _toConsumableArray2.default)(t), [[n, a]]));
    }), "toString", function toString() {
      return `derived[${t.map(Ga).join(", ")}]`;
    });
  }
  function na(e, t) {
    return new Lt("private", e, t);
  }
  function aa(e) {
    return new Lt("workgroup", e);
  }
  var Lt = /*#__PURE__*/function () {
    function Lt(t, r, n) {
      (0, _classCallCheck2.default)(this, Lt);
      this.scope = t;
      this._dataType = r;
      this._initialValue = n;
    }
    return (0, _createClass2.default)(Lt, [{
      key: "~resolve",
      value: function resolve(t) {
        var r = t.names.makeUnique((0, _chunk5RYM4COI.c)(this));
        return this._initialValue ? t.addDeclaration(`var<${this.scope}> ${r}: ${t.resolve(this._dataType)} = ${t.resolveValue(this._initialValue, this._dataType)};`) : t.addDeclaration(`var<${this.scope}> ${r}: ${t.resolve(this._dataType)};`), r;
      }
    }, {
      key: "$name",
      value: function $name(t) {
        return (0, _chunk5RYM4COI.d)(this, t), this;
      }
    }, {
      key: "toString",
      value: function toString() {
        var _p51;
        return `var:${(_p51 = (0, _chunk5RYM4COI.c)(this)) != null ? _p51 : "<unnamed>"}`;
      }
    }, {
      key: "value",
      get: function get() {
        var _this26 = this;
        if (!(0, _chunk5RYM4COI.r)()) throw new Error("Cannot access tgpu.var's value directly in JS.");
        return new Proxy((0, _defineProperty2.default)({
          "~resolve": function resolve(t) {
            return t.resolve(_this26);
          },
          toString: function toString() {
            var _p52;
            return `.value:${(_p52 = (0, _chunk5RYM4COI.c)(_this26)) != null ? _p52 : "<unnamed>"}`;
          }
        }, _chunk5RYM4COI.a, {
          dataType: this._dataType
        }), Y);
      }
    }]);
  }();
  var oa = exports.tgpu = {
      bindGroupLayout: It,
      vertexLayout: Lr,
      init: Xn,
      initFromDevice: Zn,
      resolve: zn,
      "~unstable": {
        fn: Wn,
        fragmentFn: Nn,
        vertexFn: jn,
        computeFn: Gn,
        vertexLayout: Lr,
        derived: ta,
        slot: Et,
        accessor: ea,
        privateVar: na,
        workgroupVar: aa,
        const: ln,
        declare: mn,
        sampler: An,
        comparisonSampler: In
      }
    },
    jp = exports.default = oa;
  Object.assign(oa, {
    __assignAst: cn,
    __removedJsImpl: yn
  });
},1,[2,3,4,5,7,8,10,14,20,21,24,25,29,30,31,32],"node_modules/typegpu/index.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  }
  module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
},2,[],"node_modules/@babel/runtime/helpers/interopRequireDefault.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
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
},3,[],"node_modules/@babel/runtime/helpers/asyncToGenerator.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
},4,[],"node_modules/@babel/runtime/helpers/assertThisInitialized.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var _typeof = require(_dependencyMap[0], "./typeof.js")["default"];
  var assertThisInitialized = require(_dependencyMap[1], "./assertThisInitialized.js");
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return assertThisInitialized(t);
  }
  module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
},5,[6,4],"node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _typeof(o) {
    "@babel/helpers - typeof";

    return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
  }
  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
},6,[],"node_modules/@babel/runtime/helpers/typeof.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _getPrototypeOf(t) {
    return module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _getPrototypeOf(t);
  }
  module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},7,[],"node_modules/@babel/runtime/helpers/getPrototypeOf.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var setPrototypeOf = require(_dependencyMap[0], "./setPrototypeOf.js");
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
    }), e && setPrototypeOf(t, e);
  }
  module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
},8,[9],"node_modules/@babel/runtime/helpers/inherits.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _setPrototypeOf(t, e) {
    return module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf(t, e);
  }
  module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},9,[],"node_modules/@babel/runtime/helpers/setPrototypeOf.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var getPrototypeOf = require(_dependencyMap[0], "./getPrototypeOf.js");
  var setPrototypeOf = require(_dependencyMap[1], "./setPrototypeOf.js");
  var isNativeFunction = require(_dependencyMap[2], "./isNativeFunction.js");
  var construct = require(_dependencyMap[3], "./construct.js");
  function _wrapNativeSuper(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return module.exports = _wrapNativeSuper = function _wrapNativeSuper(t) {
      if (null === t || !isNativeFunction(t)) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, Wrapper);
      }
      function Wrapper() {
        return construct(t, arguments, getPrototypeOf(this).constructor);
      }
      return Wrapper.prototype = Object.create(t.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), setPrototypeOf(Wrapper, t);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _wrapNativeSuper(t);
  }
  module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;
},10,[7,9,11,12],"node_modules/@babel/runtime/helpers/wrapNativeSuper.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _isNativeFunction(t) {
    try {
      return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
      return "function" == typeof t;
    }
  }
  module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;
},11,[],"node_modules/@babel/runtime/helpers/isNativeFunction.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var isNativeReflectConstruct = require(_dependencyMap[0], "./isNativeReflectConstruct.js");
  var setPrototypeOf = require(_dependencyMap[1], "./setPrototypeOf.js");
  function _construct(t, e, r) {
    if (isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && setPrototypeOf(p, r.prototype), p;
  }
  module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
},12,[13,9],"node_modules/@babel/runtime/helpers/construct.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (module.exports = _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return !!t;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
  }
  module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
},13,[],"node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var arrayWithHoles = require(_dependencyMap[0], "./arrayWithHoles.js");
  var iterableToArrayLimit = require(_dependencyMap[1], "./iterableToArrayLimit.js");
  var unsupportedIterableToArray = require(_dependencyMap[2], "./unsupportedIterableToArray.js");
  var nonIterableRest = require(_dependencyMap[3], "./nonIterableRest.js");
  function _slicedToArray(r, e) {
    return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest();
  }
  module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},14,[15,16,17,19],"node_modules/@babel/runtime/helpers/slicedToArray.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
},15,[],"node_modules/@babel/runtime/helpers/arrayWithHoles.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
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
},16,[],"node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var arrayLikeToArray = require(_dependencyMap[0], "./arrayLikeToArray.js");
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
    }
  }
  module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},17,[18],"node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},18,[],"node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
},19,[],"node_modules/@babel/runtime/helpers/nonIterableRest.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
},20,[],"node_modules/@babel/runtime/helpers/classCallCheck.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var toPropertyKey = require(_dependencyMap[0], "./toPropertyKey.js");
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
},21,[22],"node_modules/@babel/runtime/helpers/createClass.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var _typeof = require(_dependencyMap[0], "./typeof.js")["default"];
  var toPrimitive = require(_dependencyMap[1], "./toPrimitive.js");
  function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
  }
  module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
},22,[6,23],"node_modules/@babel/runtime/helpers/toPropertyKey.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var _typeof = require(_dependencyMap[0], "./typeof.js")["default"];
  function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
},23,[6],"node_modules/@babel/runtime/helpers/toPrimitive.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var toPropertyKey = require(_dependencyMap[0], "./toPropertyKey.js");
  function _defineProperty(e, r, t) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
},24,[22],"node_modules/@babel/runtime/helpers/defineProperty.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var arrayWithoutHoles = require(_dependencyMap[0], "./arrayWithoutHoles.js");
  var iterableToArray = require(_dependencyMap[1], "./iterableToArray.js");
  var unsupportedIterableToArray = require(_dependencyMap[2], "./unsupportedIterableToArray.js");
  var nonIterableSpread = require(_dependencyMap[3], "./nonIterableSpread.js");
  function _toConsumableArray(r) {
    return arrayWithoutHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableSpread();
  }
  module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},25,[26,27,17,28],"node_modules/@babel/runtime/helpers/toConsumableArray.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var arrayLikeToArray = require(_dependencyMap[0], "./arrayLikeToArray.js");
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return arrayLikeToArray(r);
  }
  module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
},26,[18],"node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},27,[],"node_modules/@babel/runtime/helpers/iterableToArray.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
},28,[],"node_modules/@babel/runtime/helpers/nonIterableSpread.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var _interopRequireDefault = require(_dependencyMap[0], "@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.$ = A;
  exports.Z = exports.Y = exports.X = exports.W = exports.V = exports.U = exports.T = exports.S = exports.R = exports.Q = exports.P = exports.O = exports.N = exports.M = exports.L = exports.K = exports.J = exports.I = exports.H = exports.G = exports.F = exports.E = exports.D = exports.C = exports.B = exports.A = void 0;
  exports._ = x;
  exports.a = void 0;
  exports.aa = st;
  exports.b = void 0;
  exports.ba = l;
  exports.c = void 0;
  exports.ca = mt;
  exports.d = W;
  exports.da = G;
  exports.e = g;
  exports.ea = Tt;
  exports.f = b;
  exports.fa = gt;
  exports.g = m;
  exports.ga = bt;
  exports.h = Pt;
  exports.ha = Dt;
  exports.i = rt;
  exports.ia = At;
  exports.j = void 0;
  exports.ja = qe;
  exports.k = void 0;
  exports.ka = Z;
  exports.l = void 0;
  exports.la = ct;
  exports.m = void 0;
  exports.ma = yt;
  exports.n = void 0;
  exports.na = dt;
  exports.z = exports.y = exports.x = exports.w = exports.v = exports.u = exports.t = exports.s = exports.r = exports.q = exports.p = exports.oa = exports.o = void 0;
  var _possibleConstructorReturn2 = _interopRequireDefault(require(_dependencyMap[1], "@babel/runtime/helpers/possibleConstructorReturn"));
  var _getPrototypeOf2 = _interopRequireDefault(require(_dependencyMap[2], "@babel/runtime/helpers/getPrototypeOf"));
  var _inherits2 = _interopRequireDefault(require(_dependencyMap[3], "@babel/runtime/helpers/inherits"));
  var _toConsumableArray2 = _interopRequireDefault(require(_dependencyMap[4], "@babel/runtime/helpers/toConsumableArray"));
  var _createClass2 = _interopRequireDefault(require(_dependencyMap[5], "@babel/runtime/helpers/createClass"));
  var _classCallCheck2 = _interopRequireDefault(require(_dependencyMap[6], "@babel/runtime/helpers/classCallCheck"));
  var _defineProperty2 = _interopRequireDefault(require(_dependencyMap[7], "@babel/runtime/helpers/defineProperty"));
  var _chunk5RYM4COI = require(_dependencyMap[8], "./chunk-5RYM4COI.js");
  function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  function Z(t) {
    var e = function e(n) {
      return n;
    };
    return Object.setPrototypeOf(e, tt), e.propTypes = t, e;
  }
  var tt = (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _chunk5RYM4COI.a, !0), "type", "struct"), "$name", function $name(t) {
    return (0, _chunk5RYM4COI.d)(this, t), this;
  }), "toString", function toString() {
    var _k;
    return `struct:${(_k = (0, _chunk5RYM4COI.c)(this)) != null ? _k : "<unnamed>"}`;
  });
  var T = exports.a = function T(t, e) {
    var n = e - 1,
      i = ~n;
    return (t & n) === 0 ? t : (t & i) + e;
  };
  var H = exports.b = ["uint8", "uint8x2", "uint8x4", "sint8", "sint8x2", "sint8x4", "unorm8", "unorm8x2", "unorm8x4", "snorm8", "snorm8x2", "snorm8x4", "uint16", "uint16x2", "uint16x4", "sint16", "sint16x2", "sint16x4", "unorm16", "unorm16x2", "unorm16x4", "snorm16", "snorm16x2", "snorm16x4", "float16", "float16x2", "float16x4", "float32", "float32x2", "float32x3", "float32x4", "uint32", "uint32x2", "uint32x3", "uint32x4", "sint32", "sint32x2", "sint32x3", "sint32x4", "unorm10-10-10-2", "unorm8x4-bgra"],
    Ft = exports.c = {
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
  var et = ["unstruct", "disarray", "loose-decorated"].concat(H);
  function W(t) {
    return (t == null ? void 0 : t[_chunk5RYM4COI.a]) && et.includes(t == null ? void 0 : t.type);
  }
  function g(t) {
    return (t == null ? void 0 : t[_chunk5RYM4COI.a]) && (t == null ? void 0 : t.type) === "disarray";
  }
  function b(t) {
    return (t == null ? void 0 : t[_chunk5RYM4COI.a]) && (t == null ? void 0 : t.type) === "unstruct";
  }
  function m(t) {
    return (t == null ? void 0 : t[_chunk5RYM4COI.a]) && (t == null ? void 0 : t.type) === "loose-decorated";
  }
  function D(t) {
    var _t$attribs;
    return (_t$attribs = t.attribs) == null || (_t$attribs = _t$attribs.find(_chunk5RYM4COI.F)) == null ? void 0 : _t$attribs.value;
  }
  function J(t) {
    var _t$attribs2;
    return (_t$attribs2 = t.attribs) == null || (_t$attribs2 = _t$attribs2.find(_chunk5RYM4COI.G)) == null ? void 0 : _t$attribs2.value;
  }
  function Pt(t) {
    var _t$attribs3;
    return (_t$attribs3 = t.attribs) == null || (_t$attribs3 = _t$attribs3.find(_chunk5RYM4COI.H)) == null ? void 0 : _t$attribs3.value;
  }
  function rt(t) {
    return (0, _chunk5RYM4COI.A)(t) || W(t);
  }
  var r = /*#__PURE__*/(0, _createClass2.default)(function r(e) {
      (0, _classCallCheck2.default)(this, r);
      this[_chunk5RYM4COI.a] = !0;
      this.type = e;
    }),
    nt = exports.j = {
      uint8: _chunk5RYM4COI.R,
      uint8x2: _chunk5RYM4COI.Y,
      uint8x4: _chunk5RYM4COI.ga,
      sint8: _chunk5RYM4COI.S,
      sint8x2: _chunk5RYM4COI.X,
      sint8x4: _chunk5RYM4COI.fa,
      unorm8: _chunk5RYM4COI.T,
      unorm8x2: _chunk5RYM4COI.V,
      unorm8x4: _chunk5RYM4COI.da,
      snorm8: _chunk5RYM4COI.T,
      snorm8x2: _chunk5RYM4COI.V,
      snorm8x4: _chunk5RYM4COI.da,
      uint16: _chunk5RYM4COI.R,
      uint16x2: _chunk5RYM4COI.Y,
      uint16x4: _chunk5RYM4COI.ga,
      sint16: _chunk5RYM4COI.S,
      sint16x2: _chunk5RYM4COI.X,
      sint16x4: _chunk5RYM4COI.fa,
      unorm16: _chunk5RYM4COI.T,
      unorm16x2: _chunk5RYM4COI.V,
      unorm16x4: _chunk5RYM4COI.da,
      snorm16: _chunk5RYM4COI.T,
      snorm16x2: _chunk5RYM4COI.V,
      snorm16x4: _chunk5RYM4COI.da,
      float16: _chunk5RYM4COI.T,
      float16x2: _chunk5RYM4COI.V,
      float16x4: _chunk5RYM4COI.da,
      float32: _chunk5RYM4COI.T,
      float32x2: _chunk5RYM4COI.V,
      float32x3: _chunk5RYM4COI._,
      float32x4: _chunk5RYM4COI.da,
      uint32: _chunk5RYM4COI.R,
      uint32x2: _chunk5RYM4COI.Y,
      uint32x3: _chunk5RYM4COI.ba,
      uint32x4: _chunk5RYM4COI.ga,
      sint32: _chunk5RYM4COI.S,
      sint32x2: _chunk5RYM4COI.X,
      sint32x3: _chunk5RYM4COI.aa,
      sint32x4: _chunk5RYM4COI.fa,
      "unorm10-10-10-2": _chunk5RYM4COI.da,
      "unorm8x4-bgra": _chunk5RYM4COI.da
    },
    q = exports.k = Object.keys(nt),
    $t = exports.l = new r("uint8"),
    zt = exports.m = new r("uint8x2"),
    Et = exports.n = new r("uint8x4"),
    Ot = exports.o = new r("sint8"),
    Mt = exports.p = new r("sint8x2"),
    Nt = exports.q = new r("sint8x4"),
    Rt = exports.r = new r("unorm8"),
    Gt = exports.s = new r("unorm8x2"),
    jt = exports.t = new r("unorm8x4"),
    Kt = exports.u = new r("snorm8"),
    Ht = exports.v = new r("snorm8x2"),
    Jt = exports.w = new r("snorm8x4"),
    qt = exports.x = new r("uint16"),
    Qt = exports.y = new r("uint16x2"),
    Xt = exports.z = new r("uint16x4"),
    Yt = exports.A = new r("sint16"),
    Zt = exports.B = new r("sint16x2"),
    te = exports.C = new r("sint16x4"),
    ee = exports.D = new r("unorm16"),
    re = exports.E = new r("unorm16x2"),
    ne = exports.F = new r("unorm16x4"),
    oe = exports.G = new r("snorm16"),
    ie = exports.H = new r("snorm16x2"),
    ae = exports.I = new r("snorm16x4"),
    se = exports.J = new r("float16"),
    ue = exports.K = new r("float16x2"),
    pe = exports.L = new r("float16x4"),
    xe = exports.M = new r("float32"),
    le = exports.N = new r("float32x2"),
    me = exports.O = new r("float32x3"),
    ce = exports.P = new r("float32x4"),
    ye = exports.Q = new r("uint32"),
    fe = exports.R = new r("uint32x2"),
    de = exports.S = new r("uint32x3"),
    Te = exports.T = new r("uint32x4"),
    ge = exports.U = new r("sint32"),
    be = exports.V = new r("sint32x2"),
    De = exports.W = new r("sint32x3"),
    Ae = exports.X = new r("sint32x4"),
    Ie = exports.Y = new r("unorm10-10-10-2"),
    ve = exports.Z = new r("unorm8x4-bgra");
  var ot = {
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
  function it(t) {
    var _D2, _D3;
    var e = t == null ? void 0 : t.type,
      n = ot[e];
    if (n !== void 0) return n;
    if ((0, _chunk5RYM4COI.C)(t)) return Object.values(t.propTypes).map(x).reduce(function (i, y) {
      return i > y ? i : y;
    });
    if ((0, _chunk5RYM4COI.B)(t)) return x(t.elementType);
    if (b(t)) {
      var _D;
      var i = Object.values(t.propTypes)[0];
      return i ? (_D = D(i)) != null ? _D : 1 : 1;
    }
    if (g(t)) return (_D2 = D(t.elementType)) != null ? _D2 : 1;
    if ((0, _chunk5RYM4COI.K)(t) || m(t)) return (_D3 = D(t)) != null ? _D3 : x(t.inner);
    if (q.includes(e)) return 1;
    throw new Error(`Cannot determine alignment of data: ${JSON.stringify(t)}`);
  }
  function at(t) {
    var _D4, _D5;
    if (b(t)) {
      var e = Object.values(t.propTypes)[0];
      return e ? A(e) : 1;
    }
    return g(t) ? A(t.elementType) : m(t) ? (_D4 = D(t)) != null ? _D4 : A(t.inner) : (_D5 = D(t)) != null ? _D5 : 1;
  }
  var Q = new WeakMap(),
    X = new WeakMap();
  function x(t) {
    var e = Q.get(t);
    return e === void 0 && (e = it(t), Q.set(t, e)), e;
  }
  function A(t) {
    var e = X.get(t);
    return e === void 0 && (e = at(t), X.set(t, e)), e;
  }
  function st(t) {
    return x(t);
  }
  var ut = {
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
  function pt(t) {
    var e = 0;
    for (var n of Object.values(t.propTypes)) {
      if (Number.isNaN(e)) throw new Error("Only the last property of a struct can be unbounded");
      if (e = T(e, x(n)), e += l(n), Number.isNaN(e) && n.type !== "array") throw new Error("Cannot nest unbounded struct within another struct");
    }
    return T(e, x(t));
  }
  function xt(t) {
    var e = 0;
    for (var n of Object.values(t.propTypes)) {
      var i = A(n);
      e = T(e, i), e += l(n);
    }
    return e;
  }
  function lt(t) {
    var _J;
    var e = ut[t == null ? void 0 : t.type];
    if (e !== void 0) return e;
    if ((0, _chunk5RYM4COI.C)(t)) return pt(t);
    if (b(t)) return xt(t);
    if ((0, _chunk5RYM4COI.B)(t)) {
      if (t.elementCount === 0) return Number.NaN;
      var n = x(t.elementType);
      return T(l(t.elementType), n) * t.elementCount;
    }
    if (g(t)) {
      var _n = A(t.elementType);
      return T(l(t.elementType), _n) * t.elementCount;
    }
    if ((0, _chunk5RYM4COI.K)(t) || m(t)) return (_J = J(t)) != null ? _J : l(t.inner);
    throw new Error(`Cannot determine size of data: ${t}`);
  }
  var Y = new WeakMap();
  function l(t) {
    var e = Y.get(t);
    return e === void 0 && (e = lt(t), Y.set(t, e)), e;
  }
  function mt(t) {
    return l(t);
  }
  function G(t, e) {
    return new R(t, e);
  }
  var R = /*#__PURE__*/function () {
    function R(e, n) {
      (0, _classCallCheck2.default)(this, R);
      this[_chunk5RYM4COI.a] = !0;
      this.type = "array";
      this.elementType = e;
      this.elementCount = n;
      if (Number.isNaN(l(e))) throw new Error("Cannot nest runtime sized arrays.");
      if (!Number.isInteger(n) || n < 0) throw new Error(`Cannot create array schema with invalid element count: ${n}.`);
    }
    return (0, _createClass2.default)(R, [{
      key: "toString",
      value: function toString() {
        return `arrayOf(${this.elementType})`;
      }
    }]);
  }();
  function ct(t, e) {
    return new j(t, e);
  }
  var j = /*#__PURE__*/(0, _createClass2.default)(function j(e, n) {
    (0, _classCallCheck2.default)(this, j);
    this[_chunk5RYM4COI.a] = !0;
    this.type = "disarray";
    this.elementType = e;
    this.elementCount = n;
    if (!Number.isInteger(n) || n < 0) throw new Error(`Cannot create disarray schema with invalid element count: ${n}.`);
  });
  function yt(t) {
    var e = function e(n) {
      return n;
    };
    return Object.setPrototypeOf(e, ft), e.propTypes = t, e;
  }
  var ft = (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _chunk5RYM4COI.a, !0), "type", "unstruct"), "$name", function $name(t) {
    return (0, _chunk5RYM4COI.d)(this, t), this;
  }), "toString", function toString() {
    var _k2;
    return `unstruct:${(_k2 = (0, _chunk5RYM4COI.c)(this)) != null ? _k2 : "<unnamed>"}`;
  });
  function dt(t) {
    return new K(t);
  }
  var K = /*#__PURE__*/(0, _createClass2.default)(function K(e) {
    (0, _classCallCheck2.default)(this, K);
    this[_chunk5RYM4COI.a] = !0;
    this.type = "atomic";
    this.inner = e;
  });
  function I(t, e) {
    return (0, _chunk5RYM4COI.K)(t) ? new $(t.inner, [e].concat((0, _toConsumableArray2.default)(t.attribs))) : m(t) ? new z(t.inner, [e].concat((0, _toConsumableArray2.default)(t.attribs))) : W(t) ? new z(t, [e]) : new $(t, [e]);
  }
  function Tt(t, e) {
    return I(e, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _chunk5RYM4COI.a, !0), "type", "@align"), "value", t));
  }
  function gt(t, e) {
    return I(e, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _chunk5RYM4COI.a, !0), "type", "@size"), "value", t));
  }
  function bt(t, e) {
    return I(e, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _chunk5RYM4COI.a, !0), "type", "@location"), "value", t));
  }
  function Dt(t, e) {
    return I(e, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _chunk5RYM4COI.a, !0), "type", "@interpolate"), "value", t));
  }
  function At(t) {
    return ((0, _chunk5RYM4COI.K)(t) || m(t)) && t.attribs.find(_chunk5RYM4COI.J) !== void 0;
  }
  function qe(t) {
    return !(0, _chunk5RYM4COI.K)(t) && !m(t) ? "" : t.attribs.map(function (e) {
      return `${e.type}(${e.value}) `;
    }).join("");
  }
  var C = /*#__PURE__*/(0, _createClass2.default)(function C(e, n) {
      var _n$find, _n$find2;
      (0, _classCallCheck2.default)(this, C);
      this[_chunk5RYM4COI.a] = !0;
      this.inner = e;
      this.attribs = n;
      var i = (_n$find = n.find(_chunk5RYM4COI.F)) == null ? void 0 : _n$find.value,
        y = (_n$find2 = n.find(_chunk5RYM4COI.G)) == null ? void 0 : _n$find2.value;
      if (i !== void 0) {
        if (i <= 0) throw new Error(`Custom data alignment must be a positive number, got: ${i}.`);
        if (Math.log2(i) % 1 !== 0) throw new Error(`Alignment has to be a power of 2, got: ${i}.`);
        if ((0, _chunk5RYM4COI.A)(this.inner) && i % x(this.inner) !== 0) throw new Error(`Custom alignment has to be a multiple of the standard data alignment. Got: ${i}, expected multiple of: ${x(this.inner)}.`);
      }
      if (y !== void 0) {
        if (y < l(this.inner)) throw new Error(`Custom data size cannot be smaller then the standard data size. Got: ${y}, expected at least: ${l(this.inner)}.`);
        if (y <= 0) throw new Error(`Custom data size must be a positive number. Got: ${y}.`);
      }
    }),
    $ = /*#__PURE__*/function (_C) {
      function $() {
        var _this;
        (0, _classCallCheck2.default)(this, $);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _callSuper(this, $, [].concat(args));
        _this[_chunk5RYM4COI.a] = !0;
        _this.type = "decorated";
        return _this;
      }
      (0, _inherits2.default)($, _C);
      return (0, _createClass2.default)($);
    }(C),
    z = /*#__PURE__*/function (_C2) {
      function z() {
        var _this2;
        (0, _classCallCheck2.default)(this, z);
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        _this2 = _callSuper(this, z, [].concat(args));
        _this2[_chunk5RYM4COI.a] = !0;
        _this2.type = "loose-decorated";
        return _this2;
      }
      (0, _inherits2.default)(z, _C2);
      return (0, _createClass2.default)(z);
    }(C);
  function a(t, e) {
    return I(t, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _chunk5RYM4COI.a, !0), "type", "@builtin"), "value", e));
  }
  var It = exports.oa = {
    vertexIndex: a(_chunk5RYM4COI.R, "vertex_index"),
    instanceIndex: a(_chunk5RYM4COI.R, "instance_index"),
    position: a(_chunk5RYM4COI.da, "position"),
    clipDistances: a(G(_chunk5RYM4COI.R, 8), "clip_distances"),
    frontFacing: a(_chunk5RYM4COI.T, "front_facing"),
    fragDepth: a(_chunk5RYM4COI.T, "frag_depth"),
    sampleIndex: a(_chunk5RYM4COI.R, "sample_index"),
    sampleMask: a(_chunk5RYM4COI.R, "sample_mask"),
    localInvocationId: a(_chunk5RYM4COI.ba, "local_invocation_id"),
    localInvocationIndex: a(_chunk5RYM4COI.R, "local_invocation_index"),
    globalInvocationId: a(_chunk5RYM4COI.ba, "global_invocation_id"),
    workgroupId: a(_chunk5RYM4COI.ba, "workgroup_id"),
    numWorkgroups: a(_chunk5RYM4COI.ba, "num_workgroups"),
    subgroupInvocationId: a(_chunk5RYM4COI.R, "subgroup_invocation_id"),
    subgroupSize: a(_chunk5RYM4COI.R, "subgroup_size")
  };
},29,[2,5,7,8,25,21,20,24,30],"node_modules/typegpu/chunk-SMTSXYNG.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var _interopRequireDefault = require(_dependencyMap[0], "@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.$ = void 0;
  exports.A = Je;
  exports.B = Qe;
  exports.C = Xe;
  exports.D = Ze;
  exports.E = et;
  exports.F = tt;
  exports.G = nt;
  exports.H = rt;
  exports.I = st;
  exports.J = it;
  exports.K = oe;
  exports.L = ht;
  exports.M = mt;
  exports.N = y;
  exports.ba = exports.b = exports.aa = exports.a = exports._ = exports.Z = exports.Y = exports.X = exports.W = exports.V = exports.U = exports.T = exports.S = exports.R = exports.Q = exports.P = exports.O = void 0;
  exports.c = k;
  exports.ca = void 0;
  exports.d = U;
  exports.da = void 0;
  exports.e = Ge;
  exports.ea = void 0;
  exports.f = L;
  exports.m = exports.la = exports.l = exports.ka = exports.k = exports.ja = exports.j = exports.ia = exports.i = exports.ha = exports.h = exports.ga = exports.g = exports.fa = void 0;
  exports.ma = Gt;
  exports.n = yt;
  exports.na = Lt;
  exports.o = ut;
  exports.oa = jt;
  exports.p = ct;
  exports.pa = Kt;
  exports.q = lt;
  exports.qa = Yt;
  exports.r = void 0;
  exports.ra = Ht;
  exports.s = void 0;
  exports.sa = qt;
  exports.t = void 0;
  exports.u = le;
  exports.v = xe;
  exports.w = ae;
  exports.x = de;
  exports.y = me;
  exports.z = qe;
  var _construct2 = _interopRequireDefault(require(_dependencyMap[1], "@babel/runtime/helpers/construct"));
  var _defineProperty2 = _interopRequireDefault(require(_dependencyMap[2], "@babel/runtime/helpers/defineProperty"));
  var _assertThisInitialized2 = _interopRequireDefault(require(_dependencyMap[3], "@babel/runtime/helpers/assertThisInitialized"));
  var _toConsumableArray2 = _interopRequireDefault(require(_dependencyMap[4], "@babel/runtime/helpers/toConsumableArray"));
  var _classCallCheck2 = _interopRequireDefault(require(_dependencyMap[5], "@babel/runtime/helpers/classCallCheck"));
  var _createClass2 = _interopRequireDefault(require(_dependencyMap[6], "@babel/runtime/helpers/createClass"));
  var _possibleConstructorReturn2 = _interopRequireDefault(require(_dependencyMap[7], "@babel/runtime/helpers/possibleConstructorReturn"));
  var _getPrototypeOf2 = _interopRequireDefault(require(_dependencyMap[8], "@babel/runtime/helpers/getPrototypeOf"));
  var _inherits2 = _interopRequireDefault(require(_dependencyMap[9], "@babel/runtime/helpers/inherits"));
  var _wrapNativeSuper2 = _interopRequireDefault(require(_dependencyMap[10], "@babel/runtime/helpers/wrapNativeSuper"));
  var _typedBinary = _interopRequireDefault(require(_dependencyMap[11], "typed-binary"));
  function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  var r = exports.a = Symbol("internal"),
    O = exports.b = Symbol("get name forward");
  function ue(e) {
    return !!(e != null && e[O]);
  }
  function k(e) {
    var _globalThis$__TYPEGPU;
    return ue(e) ? k(e[O]) : (_globalThis$__TYPEGPU = globalThis.__TYPEGPU_META__) == null || (_globalThis$__TYPEGPU = _globalThis$__TYPEGPU.get(e)) == null ? void 0 : _globalThis$__TYPEGPU.name;
  }
  function U(e, t) {
    var _globalThis$__TYPEGPU2;
    (_globalThis$__TYPEGPU2 = globalThis.__TYPEGPU_META__) != null ? _globalThis$__TYPEGPU2 : globalThis.__TYPEGPU_META__ = new WeakMap();
    var n = globalThis.__TYPEGPU_META__;
    n.set(e, Object.assign({}, n.get(e), {
      name: t
    }));
  }
  function Ge(e) {
    return !!(e != null && e.$name);
  }
  var E = "Invariant failed";
  function L(e, t) {
    if (e) return;
    throw new Error(E);
  }
  var te = exports.g = /*#__PURE__*/function (_Error) {
      function e(n, i) {
        var _this;
        (0, _classCallCheck2.default)(this, e);
        var s = i.map(function (h) {
          return `- ${h}`;
        });
        s.length > 20 && (s = [].concat((0, _toConsumableArray2.default)(s.slice(0, 11)), ["..."], (0, _toConsumableArray2.default)(s.slice(-10))));
        _this = _callSuper(this, e, [`Resolution of the following tree failed: 
${s.join(`
`)}: ${n && typeof n == "object" && "message" in n ? n.message : n}`]);
        _this.cause = n;
        _this.trace = i;
        Object.setPrototypeOf(_this, e.prototype);
        return _this;
      }
      (0, _inherits2.default)(e, _Error);
      return (0, _createClass2.default)(e, [{
        key: "appendToTrace",
        value: function appendToTrace(n) {
          var i = [n].concat((0, _toConsumableArray2.default)(this.trace));
          return new e(this.cause, i);
        }
      }]);
    }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error)),
    ne = exports.h = /*#__PURE__*/function (_Error2) {
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
    re = exports.i = /*#__PURE__*/function (_Error3) {
      function e(t) {
        var _k;
        var _this3;
        (0, _classCallCheck2.default)(this, e);
        _this3 = _callSuper(this, e, [`Buffer '${(_k = k(t)) != null ? _k : "<unnamed>"}' is not bindable as a uniform. Use .$usage('uniform') to allow it.`]), Object.setPrototypeOf((0, _assertThisInitialized2.default)(_this3), e.prototype);
        return _this3;
      }
      (0, _inherits2.default)(e, _Error3);
      return (0, _createClass2.default)(e);
    }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error)),
    se = exports.j = /*#__PURE__*/function (_Error4) {
      function e(t, n) {
        var _this4;
        (0, _classCallCheck2.default)(this, e);
        _this4 = _callSuper(this, e, [`The function '${t != null ? t : "<unnamed>"}' is missing links to the following external values: ${n}.`]), Object.setPrototypeOf((0, _assertThisInitialized2.default)(_this4), e.prototype);
        return _this4;
      }
      (0, _inherits2.default)(e, _Error4);
      return (0, _createClass2.default)(e);
    }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error)),
    ie = exports.k = /*#__PURE__*/function (_Error5) {
      function e(t) {
        var _this5;
        (0, _classCallCheck2.default)(this, e);
        _this5 = _callSuper(this, e, [`Missing bind groups for layouts: '${(0, _toConsumableArray2.default)(t).map(function (n) {
          var _k2;
          return (_k2 = k(n)) != null ? _k2 : "<unnamed>";
        }).join(", ")}'. Please provide it using pipeline.with(layout, bindGroup).(...)`]), Object.setPrototypeOf((0, _assertThisInitialized2.default)(_this5), e.prototype);
        return _this5;
      }
      (0, _inherits2.default)(e, _Error5);
      return (0, _createClass2.default)(e);
    }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error)),
    he = exports.l = /*#__PURE__*/function (_Error6) {
      function e(t) {
        var _this6;
        (0, _classCallCheck2.default)(this, e);
        _this6 = _callSuper(this, e, [`Missing vertex buffers for layouts: '${(0, _toConsumableArray2.default)(t).map(function (n) {
          var _k3;
          return (_k3 = k(n)) != null ? _k3 : "<unnamed>";
        }).join(", ")}'. Please provide it using pipeline.with(layout, buffer).(...)`]), Object.setPrototypeOf((0, _assertThisInitialized2.default)(_this6), e.prototype);
        return _this6;
      }
      (0, _inherits2.default)(e, _Error6);
      return (0, _createClass2.default)(e);
    }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
  var x = exports.s = Symbol("Type token for the inferred (CPU & GPU) representation of a resource");
  var He = exports.t = (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "void"), x, void 0),
    ce = ["bool", "f32", "f16", "i32", "u32", "vec2f", "vec2h", "vec2i", "vec2u", "vec2<bool>", "vec3f", "vec3h", "vec3i", "vec3u", "vec3<bool>", "vec4f", "vec4h", "vec4i", "vec4u", "vec4<bool>", "mat2x2f", "mat3x3f", "mat4x4f", "struct", "array", "ptr", "atomic", "decorated", "abstractInt", "abstractFloat", "void"];
  function le(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type.startsWith("vec2"));
  }
  function xe(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type.startsWith("vec3"));
  }
  function we(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type.startsWith("vec4"));
  }
  function ae(e) {
    return le(e) || xe(e) || we(e);
  }
  function de(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "mat2x2f";
  }
  function me(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "mat3x3f";
  }
  function pe(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "mat4x4f";
  }
  function qe(e) {
    return de(e) || me(e) || pe(e);
  }
  function Je(e) {
    return (e == null ? void 0 : e[r]) && ce.includes(e == null ? void 0 : e.type);
  }
  function Qe(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "array";
  }
  function Xe(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "struct";
  }
  function Ze(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "ptr";
  }
  function et(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "atomic";
  }
  function tt(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "@align";
  }
  function nt(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "@size";
  }
  function rt(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "@location";
  }
  function st(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "@interpolate";
  }
  function it(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "@builtin";
  }
  function oe(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "decorated";
  }
  function ht(e) {
    return (e == null ? void 0 : e[r]) && e.type === "void";
  }
  var B = null,
    ze = Symbol("CPU"),
    Te = Symbol("GPU"),
    ge = exports.m = {
      CPU: ze,
      GPU: Te
    },
    D = [];
  function yt(e, t) {
    L(B === null, "Cannot nest context providers"), B = e;
    try {
      return t();
    } finally {
      B = null;
    }
  }
  function ut() {
    return B;
  }
  function ct(e) {
    D.push(e);
  }
  function lt(e) {
    var t = D.pop();
    e !== void 0 && L(t === e, "Unexpected mode");
  }
  var ye = exports.r = function ye() {
    return D.length > 0 && D[D.length - 1] === ge.GPU;
  };
  function* mt(e) {
    var t = 0;
    for (;;) e.has(t) || (yield t), t++;
  }
  function y(e, t, n) {
    var i = function i() {
      return ye() ? t.apply(void 0, arguments) : e.apply(void 0, arguments);
    };
    return i[r] = {
      implementation: e,
      argTypes: n
    }, i;
  }
  var Vt = exports.O = (0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "abstractInt"),
    bt = exports.P = (0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "abstractFloat"),
    W = exports.Q = (0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "bool"),
    Ve = y(function (e) {
      return typeof e == "boolean" ? e ? 1 : 0 : Number.isInteger(e) ? ((e < 0 || e > 4294967295) && console.warn(`u32 value ${e} overflowed`), (e & 4294967295) >>> 0) : Math.max(0, Math.min(4294967295, Math.floor(e)));
    }, function (e) {
      return {
        value: `u32(${e.value})`,
        dataType: P
      };
    }),
    P = exports.R = Object.assign(Ve, {
      type: "u32"
    }),
    be = y(function (e) {
      if (typeof e == "boolean") return e ? 1 : 0;
      if (Number.isInteger(e)) return (e < -2147483648 || e > 2147483647) && console.warn(`i32 value ${e} overflowed`), (e | 0) & 4294967295;
      var t = e < 0 ? Math.ceil(e) : Math.floor(e);
      return Math.max(-2147483648, Math.min(2147483647, t));
    }, function (e) {
      return {
        value: `i32(${e.value})`,
        dataType: M
      };
    }),
    M = exports.S = Object.assign(be, {
      type: "i32"
    }),
    fe = y(function (e) {
      if (typeof e == "boolean") return e ? 1 : 0;
      var t = new Float32Array(1);
      return t[0] = e, t[0];
    }, function (e) {
      return {
        value: `f32(${e.value})`,
        dataType: C
      };
    }),
    C = exports.T = Object.assign(fe, {
      type: "f32"
    }),
    ve = y(function (e) {
      if (typeof e == "boolean") return e ? 1 : 0;
      var t = new ArrayBuffer(2);
      return _typedBinary.default.f16.write(new _typedBinary.default.BufferWriter(t), e), _typedBinary.default.f16.read(new _typedBinary.default.BufferReader(t));
    }, function (e) {
      return {
        value: `f16(${e.value})`,
        dataType: N
      };
    }),
    N = exports.U = Object.assign(ve, {
      type: "f16"
    });
  var F = /*#__PURE__*/function (_Array) {
      function F() {
        var _this7;
        (0, _classCallCheck2.default)(this, F);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this7 = _callSuper(this, F, [].concat(args));
        _this7[r] = !0;
        return _this7;
      }
      (0, _inherits2.default)(F, _Array);
      return (0, _createClass2.default)(F, [{
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
    u = /*#__PURE__*/function (_F) {
      function u(t, n) {
        var _ref;
        var _this8;
        (0, _classCallCheck2.default)(this, u);
        _this8 = _callSuper(this, u, [2]), _this8[0] = t != null ? t : _this8.getDefaultValue(), _this8[1] = (_ref = n != null ? n : t) != null ? _ref : _this8.getDefaultValue();
        return _this8;
      }
      (0, _inherits2.default)(u, _F);
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
      }]);
    }(F),
    c = /*#__PURE__*/function (_F2) {
      function c(t, n, i) {
        var _ref2, _ref3;
        var _this9;
        (0, _classCallCheck2.default)(this, c);
        _this9 = _callSuper(this, c, [3]), _this9[0] = t != null ? t : _this9.getDefaultValue(), _this9[1] = (_ref2 = n != null ? n : t) != null ? _ref2 : _this9.getDefaultValue(), _this9[2] = (_ref3 = i != null ? i : t) != null ? _ref3 : _this9.getDefaultValue();
        return _this9;
      }
      (0, _inherits2.default)(c, _F2);
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
      }]);
    }(F),
    l = /*#__PURE__*/function (_F3) {
      function l(t, n, i, s) {
        var _ref4, _ref5, _ref6;
        var _this10;
        (0, _classCallCheck2.default)(this, l);
        _this10 = _callSuper(this, l, [4]), _this10[0] = t != null ? t : _this10.getDefaultValue(), _this10[1] = (_ref4 = n != null ? n : t) != null ? _ref4 : _this10.getDefaultValue(), _this10[2] = (_ref5 = i != null ? i : t) != null ? _ref5 : _this10.getDefaultValue(), _this10[3] = (_ref6 = s != null ? s : t) != null ? _ref6 : _this10.getDefaultValue();
        return _this10;
      }
      (0, _inherits2.default)(l, _F3);
      return (0, _createClass2.default)(l, [{
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
    }(F),
    w = /*#__PURE__*/function (_u) {
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
          return T;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return v;
        }
      }]);
    }(u),
    d = /*#__PURE__*/function (_u2) {
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
    }(u),
    m = /*#__PURE__*/function (_u3) {
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
          return V;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return I;
        }
      }]);
    }(u),
    p = /*#__PURE__*/function (_u4) {
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
    }(u),
    z = /*#__PURE__*/function (_u5) {
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
          return S;
        }
      }]);
    }(u),
    T = /*#__PURE__*/function (_c) {
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
    }(c),
    g = /*#__PURE__*/function (_c2) {
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
    }(c),
    V = /*#__PURE__*/function (_c3) {
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
    }(c),
    b = /*#__PURE__*/function (_c4) {
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
          return "vec3u";
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
          return A;
        }
      }]);
    }(c),
    f = /*#__PURE__*/function (_c5) {
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
          return "vec3<bool>";
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
          return S;
        }
      }]);
    }(c),
    v = /*#__PURE__*/function (_l) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _l);
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
          return T;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return e;
        }
      }]);
    }(l),
    _ = /*#__PURE__*/function (_l2) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _l2);
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
    }(l),
    I = /*#__PURE__*/function (_l3) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _l3);
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
          return V;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return e;
        }
      }]);
    }(l),
    A = /*#__PURE__*/function (_l4) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _l4);
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
          return p;
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
    }(l),
    S = /*#__PURE__*/function (_l5) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _l5);
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
          return z;
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
    }(l);
  var j = exports.V = a(w),
    _e = exports.W = a(d),
    Ie = exports.X = a(m),
    Ae = exports.Y = a(p),
    Se = exports.Z = a(z),
    K = exports._ = a(T),
    $e = exports.$ = a(g),
    ke = exports.aa = a(V),
    De = exports.ba = a(b),
    Pe = exports.ca = a(f),
    Y = exports.da = a(v),
    Me = exports.ea = a(_),
    Ce = exports.fa = a(I),
    Ne = exports.ga = a(A),
    Fe = exports.ha = a(S),
    Ue = {
      vec2f: j,
      vec2h: _e,
      vec2i: Ie,
      vec2u: Ae,
      "vec2<bool>": Se,
      vec3f: K,
      vec3h: $e,
      vec3i: ke,
      vec3u: De,
      "vec3<bool>": Pe,
      vec4f: Y,
      vec4h: Me,
      vec4i: Ce,
      vec4u: Ne,
      "vec4<bool>": Fe
    },
    Be = exports.ia = {
      vec2f: C,
      vec2h: N,
      vec2i: M,
      vec2u: P,
      "vec2<bool>": W,
      vec3f: C,
      vec3h: N,
      vec3i: M,
      vec3u: P,
      "vec3<bool>": W,
      vec4f: C,
      vec4h: N,
      vec4i: M,
      vec4u: P,
      "vec4<bool>": W
    };
  function a(e) {
    var _e2 = new e(),
      t = _e2.kind,
      n = _e2.length,
      i = y(function () {
        for (var _len2 = arguments.length, s = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          s[_key2] = arguments[_key2];
        }
        var h = new Array(s.length),
          o = 0;
        for (var $ of s) if (typeof $ == "number" || typeof $ == "boolean") h[o++] = $;else for (var G = 0; G < $.length; ++G) h[o++] = $[G];
        if (h.length <= 1 || h.length === n) return (0, _construct2.default)(e, h);
        throw new Error(`'${t}' constructor called with invalid number of arguments.`);
      }, function () {
        for (var _len3 = arguments.length, s = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          s[_key3] = arguments[_key3];
        }
        return {
          value: `${t}(${s.map(function (h) {
            return h.value;
          }).join(", ")})`,
          dataType: Ue[t]
        };
      }, function () {
        for (var _len4 = arguments.length, s = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          s[_key4] = arguments[_key4];
        }
        return s.map(function (h) {
          var o = h.dataType;
          return oe(o) && (o = o.inner), ae(o) ? o : Be[t];
        });
      });
    return U(i, t), Object.assign(i, (0, _defineProperty2.default)({
      type: t
    }, x, void 0));
  }
  function ee(e) {
    var t = (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), x, void 0), "type", e.type);
    U(t, e.type);
    var n = y(function () {
      var s = [];
      for (var _len5 = arguments.length, i = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        i[_key5] = arguments[_key5];
      }
      for (var h of i) if (typeof h == "number") s.push(h);else for (var o = 0; o < h.length; ++o) s.push(h[o]);
      for (var _h = s.length; _h < e.columns * e.rows; ++_h) s.push(0);
      return e.makeFromElements.apply(e, s);
    }, function () {
      for (var _len6 = arguments.length, i = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        i[_key6] = arguments[_key6];
      }
      return {
        value: `${t.type}(${i.map(function (s) {
          return s.value;
        }).join(", ")})`,
        dataType: t
      };
    });
    return Object.assign(n, t);
  }
  var H = /*#__PURE__*/function () {
      function H() {
        (0, _classCallCheck2.default)(this, H);
        this[r] = !0;
        this.length = 4;
        this.columns = [this.makeColumn(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]), this.makeColumn(arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3])];
      }
      return (0, _createClass2.default)(H, [{
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
        key: Symbol.iterator,
        value: function* value() {
          yield this[0], yield this[1], yield this[2], yield this[3];
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
    q = /*#__PURE__*/function (_H) {
      function q() {
        var _this12;
        (0, _classCallCheck2.default)(this, q);
        for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          args[_key7] = arguments[_key7];
        }
        _this12 = _callSuper(this, q, [].concat(args));
        _this12.kind = "mat2x2f";
        return _this12;
      }
      (0, _inherits2.default)(q, _H);
      return (0, _createClass2.default)(q, [{
        key: "makeColumn",
        value: function makeColumn(t, n) {
          return j(t, n);
        }
      }]);
    }(H),
    J = /*#__PURE__*/function () {
      function J() {
        (0, _classCallCheck2.default)(this, J);
        this[r] = !0;
        this.length = 12;
        this.columns = [this.makeColumn(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]), this.makeColumn(arguments.length <= 3 ? undefined : arguments[3], arguments.length <= 4 ? undefined : arguments[4], arguments.length <= 5 ? undefined : arguments[5]), this.makeColumn(arguments.length <= 6 ? undefined : arguments[6], arguments.length <= 7 ? undefined : arguments[7], arguments.length <= 8 ? undefined : arguments[8])];
      }
      return (0, _createClass2.default)(J, [{
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
        key: Symbol.iterator,
        value: function* value() {
          for (var t = 0; t < 12; t++) yield this[t];
        }
      }, {
        key: "~resolve",
        value: function resolve() {
          return `${this.kind}(${this[0]}, ${this[1]}, ${this[2]}, ${this[4]}, ${this[5]}, ${this[6]}, ${this[8]}, ${this[9]}, ${this[10]})`;
        }
      }]);
    }(),
    Q = /*#__PURE__*/function (_J) {
      function Q() {
        var _this13;
        (0, _classCallCheck2.default)(this, Q);
        for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          args[_key8] = arguments[_key8];
        }
        _this13 = _callSuper(this, Q, [].concat(args));
        _this13.kind = "mat3x3f";
        return _this13;
      }
      (0, _inherits2.default)(Q, _J);
      return (0, _createClass2.default)(Q, [{
        key: "makeColumn",
        value: function makeColumn(t, n, i) {
          return K(t, n, i);
        }
      }]);
    }(J),
    X = /*#__PURE__*/function () {
      function X() {
        (0, _classCallCheck2.default)(this, X);
        this[r] = !0;
        this.length = 16;
        this.columns = [this.makeColumn(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3]), this.makeColumn(arguments.length <= 4 ? undefined : arguments[4], arguments.length <= 5 ? undefined : arguments[5], arguments.length <= 6 ? undefined : arguments[6], arguments.length <= 7 ? undefined : arguments[7]), this.makeColumn(arguments.length <= 8 ? undefined : arguments[8], arguments.length <= 9 ? undefined : arguments[9], arguments.length <= 10 ? undefined : arguments[10], arguments.length <= 11 ? undefined : arguments[11]), this.makeColumn(arguments.length <= 12 ? undefined : arguments[12], arguments.length <= 13 ? undefined : arguments[13], arguments.length <= 14 ? undefined : arguments[14], arguments.length <= 15 ? undefined : arguments[15])];
      }
      return (0, _createClass2.default)(X, [{
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
        key: Symbol.iterator,
        value: function* value() {
          for (var t = 0; t < 16; t++) yield this[t];
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
    Z = /*#__PURE__*/function (_X) {
      function Z() {
        var _this15;
        (0, _classCallCheck2.default)(this, Z);
        for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
          args[_key9] = arguments[_key9];
        }
        _this15 = _callSuper(this, Z, [].concat(args));
        _this15.kind = "mat4x4f";
        return _this15;
      }
      (0, _inherits2.default)(Z, _X);
      return (0, _createClass2.default)(Z, [{
        key: "makeColumn",
        value: function makeColumn(t, n, i, s) {
          return Y(t, n, i, s);
        }
      }]);
    }(X),
    Bt = exports.ja = ee({
      type: "mat2x2f",
      rows: 2,
      columns: 2,
      makeFromElements: function makeFromElements() {
        for (var _len10 = arguments.length, e = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
          e[_key10] = arguments[_key10];
        }
        return (0, _construct2.default)(q, e);
      }
    }),
    Rt = exports.ka = ee({
      type: "mat3x3f",
      rows: 3,
      columns: 3,
      makeFromElements: function makeFromElements() {
        for (var _len11 = arguments.length, e = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
          e[_key11] = arguments[_key11];
        }
        return (0, _construct2.default)(Q, e);
      }
    }),
    Wt = exports.la = ee({
      type: "mat4x4f",
      rows: 4,
      columns: 4,
      makeFromElements: function makeFromElements() {
        for (var _len12 = arguments.length, e = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
          e[_key12] = arguments[_key12];
        }
        return (0, _construct2.default)(Z, e);
      }
    });
  function Gt(e) {
    return e.kind === "mat3x3f" ? [e[0], e[1], e[2], e[4], e[5], e[6], e[8], e[9], e[10]] : Array.from({
      length: e.length
    }).map(function (t, n) {
      return e[n];
    });
  }
  function Lt(e) {
    return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "ptr"), "inner", e), "addressSpace", "function"), "access", "read-write");
  }
  function jt(e) {
    return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "ptr"), "inner", e), "addressSpace", "private"), "access", "read-write");
  }
  function Kt(e) {
    return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "ptr"), "inner", e), "addressSpace", "workgroup"), "access", "read-write");
  }
  function Yt(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "read";
    return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "ptr"), "inner", e), "addressSpace", "storage"), "access", t);
  }
  function Ht(e) {
    return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "ptr"), "inner", e), "addressSpace", "uniform"), "access", "read");
  }
  function qt(e) {
    return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "ptr"), "inner", e), "addressSpace", "handle"), "access", "read");
  }
},30,[2,12,24,4,25,20,21,5,7,8,10,31],"node_modules/typegpu/chunk-5RYM4COI.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var _interopRequireDefault = require(_dependencyMap[0], "@babel/runtime/helpers/interopRequireDefault");
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
  var _slicedToArray2 = _interopRequireDefault(require(_dependencyMap[1], "@babel/runtime/helpers/slicedToArray"));
  var _createClass2 = _interopRequireDefault(require(_dependencyMap[2], "@babel/runtime/helpers/createClass"));
  var _classCallCheck2 = _interopRequireDefault(require(_dependencyMap[3], "@babel/runtime/helpers/classCallCheck"));
  var _possibleConstructorReturn2 = _interopRequireDefault(require(_dependencyMap[4], "@babel/runtime/helpers/possibleConstructorReturn"));
  var _getPrototypeOf2 = _interopRequireDefault(require(_dependencyMap[5], "@babel/runtime/helpers/getPrototypeOf"));
  var _inherits2 = _interopRequireDefault(require(_dependencyMap[6], "@babel/runtime/helpers/inherits"));
  var _wrapNativeSuper2 = _interopRequireDefault(require(_dependencyMap[7], "@babel/runtime/helpers/wrapNativeSuper"));
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
  // @__NO_SIDE_EFFECTS__
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
  // @__NO_SIDE_EFFECTS__
  function _chars(length) {
    return new CharsSchema(length);
  }

  // src/structure/object.ts
  // @__NO_SIDE_EFFECTS__
  function exactEntries(record) {
    return Object.entries(record);
  }
  // @__NO_SIDE_EFFECTS__
  function resolveMap(ctx, refs) {
    var props = {};
    for (var _ref of /* @__PURE__ */exactEntries(refs)) {
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
        this.properties = /* @__PURE__ */resolveMap(ctx, this._properties);
      }
    }, {
      key: "write",
      value: function write(output, value) {
        for (var _ref3 of /* @__PURE__ */exactEntries(this.properties)) {
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
        for (var _ref5 of /* @__PURE__ */exactEntries(this.properties)) {
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
        for (var _ref7 of /* @__PURE__ */exactEntries(this.properties)) {
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
        for (var _ref9 of /* @__PURE__ */exactEntries(this.properties)) {
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
  // @__NO_SIDE_EFFECTS__
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
        this.subTypeMap = /* @__PURE__ */resolveMap(ctx, this._subTypeMap);
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
        for (var _ref11 of /* @__PURE__ */exactEntries(subTypeDescription.properties)) {
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
          for (var _ref13 of /* @__PURE__ */exactEntries(subTypeDescription.properties)) {
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
          for (var _ref15 of /* @__PURE__ */exactEntries(subTypeDescription.properties)) {
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
  // @__NO_SIDE_EFFECTS__
  function _generic(properties, subTypeMap) {
    return new GenericObjectSchema(SubTypeKey.STRING, properties, subTypeMap);
  }
  // @__NO_SIDE_EFFECTS__
  function _genericEnum(properties, subTypeMap) {
    return new GenericObjectSchema(SubTypeKey.ENUM, properties, subTypeMap);
  }

  // src/structure/concat.ts
  // @__NO_SIDE_EFFECTS__
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
  // @__NO_SIDE_EFFECTS__
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
  // @__NO_SIDE_EFFECTS__
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
  // @__NO_SIDE_EFFECTS__
  function _optional(innerType) {
    return new OptionalSchema(innerType);
  }

  // src/structure/tuple.ts
  // @__NO_SIDE_EFFECTS__
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
        this.schemas = /* @__PURE__ */resolveArray(ctx, this._unstableSchemas);
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
  // @__NO_SIDE_EFFECTS__
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
  var _u8Array = exports.u8Array = /* @__NO_SIDE_EFFECTS__ */function _u8Array(length) {
    return new TypedArraySchema(length, Uint8Array);
  };
  var _u8ClampedArray = exports.u8ClampedArray = /* @__NO_SIDE_EFFECTS__ */function _u8ClampedArray(length) {
    return new TypedArraySchema(length, Uint8ClampedArray);
  };
  var _u16Array = exports.u16Array = /* @__NO_SIDE_EFFECTS__ */function _u16Array(length) {
    return new TypedArraySchema(length, Uint16Array);
  };
  var _u32Array = exports.u32Array = /* @__NO_SIDE_EFFECTS__ */function _u32Array(length) {
    return new TypedArraySchema(length, Uint32Array);
  };
  var _i8Array = exports.i8Array = /* @__NO_SIDE_EFFECTS__ */function _i8Array(length) {
    return new TypedArraySchema(length, Int8Array);
  };
  var _i16Array = exports.i16Array = /* @__NO_SIDE_EFFECTS__ */function _i16Array(length) {
    return new TypedArraySchema(length, Int16Array);
  };
  var _i32Array = exports.i32Array = /* @__NO_SIDE_EFFECTS__ */function _i32Array(length) {
    return new TypedArraySchema(length, Int32Array);
  };
  var _f32Array = exports.f32Array = /* @__NO_SIDE_EFFECTS__ */function _f32Array(length) {
    return new TypedArraySchema(length, Float32Array);
  };
  var _f64Array = exports.f64Array = /* @__NO_SIDE_EFFECTS__ */function _f64Array(length) {
    return new TypedArraySchema(length, Float64Array);
  };

  // src/util.ts
  // @__NO_SIDE_EFFECTS__
  function isSystemBigEndian() {
    var array = new Uint8Array(4);
    var view = new Uint32Array(array.buffer);
    view[0] = 1;
    return array[0] === 0;
  }
  // @__NO_SIDE_EFFECTS__
  function getSystemEndianness() {
    return /* @__PURE__ */isSystemBigEndian() ? "big" : "little";
  }

  // src/io/unwrapBuffer.ts
  // @__NO_SIDE_EFFECTS__
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
},31,[2,14,21,20,5,7,8,10],"node_modules/typed-binary/dist/index.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
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
},32,[],"node_modules/tinyest/index.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.workgroupBarrier = exports.unpack4x8unorm = exports.unpack2x16float = exports.textureStore = exports.textureSampleLevel = exports.textureSample = exports.textureLoad = exports.textureDimensions = exports.textureBarrier = exports.sub = exports.storageBarrier = exports.sqrt = exports.sin = exports.sign = exports.select = exports.reflect = exports.pow = exports.pack4x8unorm = exports.pack2x16float = exports.or = exports.not = exports.normalize = exports.neg = exports.ne = exports.mul = exports.mix = exports.min = exports.max = exports.lt = exports.length = exports.le = exports.isCloseTo = exports.gt = exports.ge = exports.fract = exports.floor = exports.exp = exports.eq = exports.dot = exports.div = exports.distance = exports.discard = exports.cross = exports.cos = exports.clamp = exports.ceil = exports.atomicXor = exports.atomicSub = exports.atomicStore = exports.atomicOr = exports.atomicMin = exports.atomicMax = exports.atomicLoad = exports.atomicAnd = exports.atomicAdd = exports.atan2 = exports.asin = exports.arrayLength = exports.any = exports.and = exports.allEq = exports.all = exports.add = exports.acos = exports.abs = void 0;
  var _chunk5RYM4COI = require(_dependencyMap[0], "../chunk-5RYM4COI.js");
  var k = _interopRequireWildcard(require(_dependencyMap[1], "typed-binary"));
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var Ae = exports.discard = (0, _chunk5RYM4COI.N)(function () {
    throw new Error("discard() can only be used on the GPU.");
  }, function () {
    return {
      value: "discard;",
      dataType: _chunk5RYM4COI.t
    };
  });
  var K = function K(e) {
      return Math.sqrt(e.x ** 2 + e.y ** 2);
    },
    _ = function _(e) {
      return Math.sqrt(e.x ** 2 + e.y ** 2 + e.z ** 2);
    },
    W = function W(e) {
      return Math.sqrt(e.x ** 2 + e.y ** 2 + e.z ** 2 + e.w ** 2);
    },
    j = function j(e, t) {
      return e.x * t.x + e.y * t.y;
    },
    X = function X(e, t) {
      return e.x * t.x + e.y * t.y + e.z * t.z;
    },
    Z = function Z(e, t) {
      return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
    },
    c = function c(e, t, n) {
      return Math.min(Math.max(t, e), n);
    },
    z = function z(e) {
      return function (t) {
        return (0, _chunk5RYM4COI.V)(e(t.x), e(t.y));
      };
    },
    h = function h(e) {
      return function (t) {
        return (0, _chunk5RYM4COI.W)(e(t.x), e(t.y));
      };
    },
    P = function P(e) {
      return function (t) {
        return (0, _chunk5RYM4COI.X)(e(t.x), e(t.y));
      };
    },
    H = function H(e) {
      return function (t) {
        return (0, _chunk5RYM4COI.Y)(e(t.x), e(t.y));
      };
    },
    b = function b(e) {
      return function (t) {
        return (0, _chunk5RYM4COI._)(e(t.x), e(t.y), e(t.z));
      };
    },
    M = function M(e) {
      return function (t) {
        return (0, _chunk5RYM4COI.$)(e(t.x), e(t.y), e(t.z));
      };
    },
    C = function C(e) {
      return function (t) {
        return (0, _chunk5RYM4COI.aa)(e(t.x), e(t.y), e(t.z));
      };
    },
    Q = function Q(e) {
      return function (t) {
        return (0, _chunk5RYM4COI.ba)(e(t.x), e(t.y), e(t.z));
      };
    },
    A = function A(e) {
      return function (t) {
        return (0, _chunk5RYM4COI.da)(e(t.x), e(t.y), e(t.z), e(t.w));
      };
    },
    V = function V(e) {
      return function (t) {
        return (0, _chunk5RYM4COI.ea)(e(t.x), e(t.y), e(t.z), e(t.w));
      };
    },
    G = function G(e) {
      return function (t) {
        return (0, _chunk5RYM4COI.fa)(e(t.x), e(t.y), e(t.z), e(t.w));
      };
    },
    Y = function Y(e) {
      return function (t) {
        return (0, _chunk5RYM4COI.ga)(e(t.x), e(t.y), e(t.z), e(t.w));
      };
    },
    ee = function ee(e) {
      return function (t, n) {
        return (0, _chunk5RYM4COI.V)(e(t.x, n.x), e(t.y, n.y));
      };
    },
    te = function te(e) {
      return function (t, n) {
        return (0, _chunk5RYM4COI.W)(e(t.x, n.x), e(t.y, n.y));
      };
    },
    le = function le(e) {
      return function (t, n) {
        return (0, _chunk5RYM4COI.X)(e(t.x, n.x), e(t.y, n.y));
      };
    },
    xe = function xe(e) {
      return function (t, n) {
        return (0, _chunk5RYM4COI.Y)(e(t.x, n.x), e(t.y, n.y));
      };
    },
    ne = function ne(e) {
      return function (t, n) {
        return (0, _chunk5RYM4COI._)(e(t.x, n.x), e(t.y, n.y), e(t.z, n.z));
      };
    },
    ae = function ae(e) {
      return function (t, n) {
        return (0, _chunk5RYM4COI.$)(e(t.x, n.x), e(t.y, n.y), e(t.z, n.z));
      };
    },
    Te = function Te(e) {
      return function (t, n) {
        return (0, _chunk5RYM4COI.aa)(e(t.x, n.x), e(t.y, n.y), e(t.z, n.z));
      };
    },
    ie = function ie(e) {
      return function (t, n) {
        return (0, _chunk5RYM4COI.ba)(e(t.x, n.x), e(t.y, n.y), e(t.z, n.z));
      };
    },
    re = function re(e) {
      return function (t, n) {
        return (0, _chunk5RYM4COI.da)(e(t.x, n.x), e(t.y, n.y), e(t.z, n.z), e(t.w, n.w));
      };
    },
    se = function se(e) {
      return function (t, n) {
        return (0, _chunk5RYM4COI.ea)(e(t.x, n.x), e(t.y, n.y), e(t.z, n.z), e(t.w, n.w));
      };
    },
    we = function we(e) {
      return function (t, n) {
        return (0, _chunk5RYM4COI.fa)(e(t.x, n.x), e(t.y, n.y), e(t.z, n.z), e(t.w, n.w));
      };
    },
    de = function de(e) {
      return function (t, n) {
        return (0, _chunk5RYM4COI.ga)(e(t.x, n.x), e(t.y, n.y), e(t.z, n.z), e(t.w, n.w));
      };
    },
    s = {
      eq: {
        vec2f: function vec2f(e, t) {
          return (0, _chunk5RYM4COI.Z)(e.x === t.x, e.y === t.y);
        },
        vec2h: function vec2h(e, t) {
          return (0, _chunk5RYM4COI.Z)(e.x === t.x, e.y === t.y);
        },
        vec2i: function vec2i(e, t) {
          return (0, _chunk5RYM4COI.Z)(e.x === t.x, e.y === t.y);
        },
        vec2u: function vec2u(e, t) {
          return (0, _chunk5RYM4COI.Z)(e.x === t.x, e.y === t.y);
        },
        "vec2<bool>": function vec2Bool(e, t) {
          return (0, _chunk5RYM4COI.Z)(e.x === t.x, e.y === t.y);
        },
        vec3f: function vec3f(e, t) {
          return (0, _chunk5RYM4COI.ca)(e.x === t.x, e.y === t.y, e.z === t.z);
        },
        vec3h: function vec3h(e, t) {
          return (0, _chunk5RYM4COI.ca)(e.x === t.x, e.y === t.y, e.z === t.z);
        },
        vec3i: function vec3i(e, t) {
          return (0, _chunk5RYM4COI.ca)(e.x === t.x, e.y === t.y, e.z === t.z);
        },
        vec3u: function vec3u(e, t) {
          return (0, _chunk5RYM4COI.ca)(e.x === t.x, e.y === t.y, e.z === t.z);
        },
        "vec3<bool>": function vec3Bool(e, t) {
          return (0, _chunk5RYM4COI.ca)(e.x === t.x, e.y === t.y, e.z === t.z);
        },
        vec4f: function vec4f(e, t) {
          return (0, _chunk5RYM4COI.ha)(e.x === t.x, e.y === t.y, e.z === t.z, e.w === t.w);
        },
        vec4h: function vec4h(e, t) {
          return (0, _chunk5RYM4COI.ha)(e.x === t.x, e.y === t.y, e.z === t.z, e.w === t.w);
        },
        vec4i: function vec4i(e, t) {
          return (0, _chunk5RYM4COI.ha)(e.x === t.x, e.y === t.y, e.z === t.z, e.w === t.w);
        },
        vec4u: function vec4u(e, t) {
          return (0, _chunk5RYM4COI.ha)(e.x === t.x, e.y === t.y, e.z === t.z, e.w === t.w);
        },
        "vec4<bool>": function vec4Bool(e, t) {
          return (0, _chunk5RYM4COI.ha)(e.x === t.x, e.y === t.y, e.z === t.z, e.w === t.w);
        }
      },
      lt: {
        vec2f: function vec2f(e, t) {
          return (0, _chunk5RYM4COI.Z)(e.x < t.x, e.y < t.y);
        },
        vec2h: function vec2h(e, t) {
          return (0, _chunk5RYM4COI.Z)(e.x < t.x, e.y < t.y);
        },
        vec2i: function vec2i(e, t) {
          return (0, _chunk5RYM4COI.Z)(e.x < t.x, e.y < t.y);
        },
        vec2u: function vec2u(e, t) {
          return (0, _chunk5RYM4COI.Z)(e.x < t.x, e.y < t.y);
        },
        vec3f: function vec3f(e, t) {
          return (0, _chunk5RYM4COI.ca)(e.x < t.x, e.y < t.y, e.z < t.z);
        },
        vec3h: function vec3h(e, t) {
          return (0, _chunk5RYM4COI.ca)(e.x < t.x, e.y < t.y, e.z < t.z);
        },
        vec3i: function vec3i(e, t) {
          return (0, _chunk5RYM4COI.ca)(e.x < t.x, e.y < t.y, e.z < t.z);
        },
        vec3u: function vec3u(e, t) {
          return (0, _chunk5RYM4COI.ca)(e.x < t.x, e.y < t.y, e.z < t.z);
        },
        vec4f: function vec4f(e, t) {
          return (0, _chunk5RYM4COI.ha)(e.x < t.x, e.y < t.y, e.z < t.z, e.w < t.w);
        },
        vec4h: function vec4h(e, t) {
          return (0, _chunk5RYM4COI.ha)(e.x < t.x, e.y < t.y, e.z < t.z, e.w < t.w);
        },
        vec4i: function vec4i(e, t) {
          return (0, _chunk5RYM4COI.ha)(e.x < t.x, e.y < t.y, e.z < t.z, e.w < t.w);
        },
        vec4u: function vec4u(e, t) {
          return (0, _chunk5RYM4COI.ha)(e.x < t.x, e.y < t.y, e.z < t.z, e.w < t.w);
        }
      },
      or: {
        "vec2<bool>": function vec2Bool(e, t) {
          return (0, _chunk5RYM4COI.Z)(e.x || t.x, e.y || t.y);
        },
        "vec3<bool>": function vec3Bool(e, t) {
          return (0, _chunk5RYM4COI.ca)(e.x || t.x, e.y || t.y, e.z || t.z);
        },
        "vec4<bool>": function vec4Bool(e, t) {
          return (0, _chunk5RYM4COI.ha)(e.x || t.x, e.y || t.y, e.z || t.z, e.w || t.w);
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
        vec2f: z(Math.abs),
        vec2h: h(Math.abs),
        vec2i: P(Math.abs),
        vec2u: H(Math.abs),
        vec3f: b(Math.abs),
        vec3h: M(Math.abs),
        vec3i: C(Math.abs),
        vec3u: Q(Math.abs),
        vec4f: A(Math.abs),
        vec4h: V(Math.abs),
        vec4i: G(Math.abs),
        vec4u: Y(Math.abs)
      },
      atan2: {
        vec2f: ee(Math.atan2),
        vec2h: te(Math.atan2),
        vec3f: ne(Math.atan2),
        vec3h: ae(Math.atan2),
        vec4f: re(Math.atan2),
        vec4h: se(Math.atan2)
      },
      acos: {
        vec2f: z(Math.acos),
        vec2h: h(Math.acos),
        vec2i: P(Math.acos),
        vec2u: H(Math.acos),
        vec3f: b(Math.acos),
        vec3h: M(Math.acos),
        vec3i: C(Math.acos),
        vec3u: Q(Math.acos),
        vec4f: A(Math.acos),
        vec4h: V(Math.acos),
        vec4i: G(Math.acos),
        vec4u: Y(Math.acos)
      },
      asin: {
        vec2f: z(Math.asin),
        vec2h: h(Math.asin),
        vec2i: P(Math.asin),
        vec2u: H(Math.asin),
        vec3f: b(Math.asin),
        vec3h: M(Math.asin),
        vec3i: C(Math.asin),
        vec3u: Q(Math.asin),
        vec4f: A(Math.asin),
        vec4h: V(Math.asin),
        vec4i: G(Math.asin),
        vec4u: Y(Math.asin)
      },
      ceil: {
        vec2f: z(Math.ceil),
        vec2h: h(Math.ceil),
        vec3f: b(Math.ceil),
        vec3h: M(Math.ceil),
        vec4f: A(Math.ceil),
        vec4h: V(Math.ceil)
      },
      clamp: {
        vec2f: function vec2f(e, t, n) {
          return (0, _chunk5RYM4COI.V)(c(e.x, t.x, n.x), c(e.y, t.y, n.y));
        },
        vec2h: function vec2h(e, t, n) {
          return (0, _chunk5RYM4COI.W)(c(e.x, t.x, n.x), c(e.y, t.y, n.y));
        },
        vec2i: function vec2i(e, t, n) {
          return (0, _chunk5RYM4COI.X)(c(e.x, t.x, n.x), c(e.y, t.y, n.y));
        },
        vec2u: function vec2u(e, t, n) {
          return (0, _chunk5RYM4COI.Y)(c(e.x, t.x, n.x), c(e.y, t.y, n.y));
        },
        vec3f: function vec3f(e, t, n) {
          return (0, _chunk5RYM4COI._)(c(e.x, t.x, n.x), c(e.y, t.y, n.y), c(e.z, t.z, n.z));
        },
        vec3h: function vec3h(e, t, n) {
          return (0, _chunk5RYM4COI.$)(c(e.x, t.x, n.x), c(e.y, t.y, n.y), c(e.z, t.z, n.z));
        },
        vec3i: function vec3i(e, t, n) {
          return (0, _chunk5RYM4COI.aa)(c(e.x, t.x, n.x), c(e.y, t.y, n.y), c(e.z, t.z, n.z));
        },
        vec3u: function vec3u(e, t, n) {
          return (0, _chunk5RYM4COI.ba)(c(e.x, t.x, n.x), c(e.y, t.y, n.y), c(e.z, t.z, n.z));
        },
        vec4f: function vec4f(e, t, n) {
          return (0, _chunk5RYM4COI.da)(c(e.x, t.x, n.x), c(e.y, t.y, n.y), c(e.z, t.z, n.z), c(e.w, t.w, n.w));
        },
        vec4h: function vec4h(e, t, n) {
          return (0, _chunk5RYM4COI.ea)(c(e.x, t.x, n.x), c(e.y, t.y, n.y), c(e.z, t.z, n.z), c(e.w, t.w, n.w));
        },
        vec4i: function vec4i(e, t, n) {
          return (0, _chunk5RYM4COI.fa)(c(e.x, t.x, n.x), c(e.y, t.y, n.y), c(e.z, t.z, n.z), c(e.w, t.w, n.w));
        },
        vec4u: function vec4u(e, t, n) {
          return (0, _chunk5RYM4COI.ga)(c(e.x, t.x, n.x), c(e.y, t.y, n.y), c(e.z, t.z, n.z), c(e.w, t.w, n.w));
        }
      },
      length: {
        vec2f: K,
        vec2h: K,
        vec3f: _,
        vec3h: _,
        vec4f: W,
        vec4h: W
      },
      add: {
        vec2f: function vec2f(e, t) {
          return (0, _chunk5RYM4COI.V)(e.x + t.x, e.y + t.y);
        },
        vec2h: function vec2h(e, t) {
          return (0, _chunk5RYM4COI.W)(e.x + t.x, e.y + t.y);
        },
        vec2i: function vec2i(e, t) {
          return (0, _chunk5RYM4COI.X)(e.x + t.x, e.y + t.y);
        },
        vec2u: function vec2u(e, t) {
          return (0, _chunk5RYM4COI.Y)(e.x + t.x, e.y + t.y);
        },
        vec3f: function vec3f(e, t) {
          return (0, _chunk5RYM4COI._)(e.x + t.x, e.y + t.y, e.z + t.z);
        },
        vec3h: function vec3h(e, t) {
          return (0, _chunk5RYM4COI.$)(e.x + t.x, e.y + t.y, e.z + t.z);
        },
        vec3i: function vec3i(e, t) {
          return (0, _chunk5RYM4COI.aa)(e.x + t.x, e.y + t.y, e.z + t.z);
        },
        vec3u: function vec3u(e, t) {
          return (0, _chunk5RYM4COI.ba)(e.x + t.x, e.y + t.y, e.z + t.z);
        },
        vec4f: function vec4f(e, t) {
          return (0, _chunk5RYM4COI.da)(e.x + t.x, e.y + t.y, e.z + t.z, e.w + t.w);
        },
        vec4h: function vec4h(e, t) {
          return (0, _chunk5RYM4COI.ea)(e.x + t.x, e.y + t.y, e.z + t.z, e.w + t.w);
        },
        vec4i: function vec4i(e, t) {
          return (0, _chunk5RYM4COI.fa)(e.x + t.x, e.y + t.y, e.z + t.z, e.w + t.w);
        },
        vec4u: function vec4u(e, t) {
          return (0, _chunk5RYM4COI.ga)(e.x + t.x, e.y + t.y, e.z + t.z, e.w + t.w);
        }
      },
      sub: {
        vec2f: function vec2f(e, t) {
          return (0, _chunk5RYM4COI.V)(e.x - t.x, e.y - t.y);
        },
        vec2h: function vec2h(e, t) {
          return (0, _chunk5RYM4COI.W)(e.x - t.x, e.y - t.y);
        },
        vec2i: function vec2i(e, t) {
          return (0, _chunk5RYM4COI.X)(e.x - t.x, e.y - t.y);
        },
        vec2u: function vec2u(e, t) {
          return (0, _chunk5RYM4COI.Y)(e.x - t.x, e.y - t.y);
        },
        vec3f: function vec3f(e, t) {
          return (0, _chunk5RYM4COI._)(e.x - t.x, e.y - t.y, e.z - t.z);
        },
        vec3h: function vec3h(e, t) {
          return (0, _chunk5RYM4COI.$)(e.x - t.x, e.y - t.y, e.z - t.z);
        },
        vec3i: function vec3i(e, t) {
          return (0, _chunk5RYM4COI.aa)(e.x - t.x, e.y - t.y, e.z - t.z);
        },
        vec3u: function vec3u(e, t) {
          return (0, _chunk5RYM4COI.ba)(e.x - t.x, e.y - t.y, e.z - t.z);
        },
        vec4f: function vec4f(e, t) {
          return (0, _chunk5RYM4COI.da)(e.x - t.x, e.y - t.y, e.z - t.z, e.w - t.w);
        },
        vec4h: function vec4h(e, t) {
          return (0, _chunk5RYM4COI.ea)(e.x - t.x, e.y - t.y, e.z - t.z, e.w - t.w);
        },
        vec4i: function vec4i(e, t) {
          return (0, _chunk5RYM4COI.fa)(e.x - t.x, e.y - t.y, e.z - t.z, e.w - t.w);
        },
        vec4u: function vec4u(e, t) {
          return (0, _chunk5RYM4COI.ga)(e.x - t.x, e.y - t.y, e.z - t.z, e.w - t.w);
        }
      },
      mulSxV: {
        vec2f: function vec2f(e, t) {
          return (0, _chunk5RYM4COI.V)(e * t.x, e * t.y);
        },
        vec2h: function vec2h(e, t) {
          return (0, _chunk5RYM4COI.W)(e * t.x, e * t.y);
        },
        vec2i: function vec2i(e, t) {
          return (0, _chunk5RYM4COI.X)(e * t.x, e * t.y);
        },
        vec2u: function vec2u(e, t) {
          return (0, _chunk5RYM4COI.Y)(e * t.x, e * t.y);
        },
        vec3f: function vec3f(e, t) {
          return (0, _chunk5RYM4COI._)(e * t.x, e * t.y, e * t.z);
        },
        vec3h: function vec3h(e, t) {
          return (0, _chunk5RYM4COI.$)(e * t.x, e * t.y, e * t.z);
        },
        vec3i: function vec3i(e, t) {
          return (0, _chunk5RYM4COI.aa)(e * t.x, e * t.y, e * t.z);
        },
        vec3u: function vec3u(e, t) {
          return (0, _chunk5RYM4COI.ba)(e * t.x, e * t.y, e * t.z);
        },
        vec4f: function vec4f(e, t) {
          return (0, _chunk5RYM4COI.da)(e * t.x, e * t.y, e * t.z, e * t.w);
        },
        vec4h: function vec4h(e, t) {
          return (0, _chunk5RYM4COI.ea)(e * t.x, e * t.y, e * t.z, e * t.w);
        },
        vec4i: function vec4i(e, t) {
          return (0, _chunk5RYM4COI.fa)(e * t.x, e * t.y, e * t.z, e * t.w);
        },
        vec4u: function vec4u(e, t) {
          return (0, _chunk5RYM4COI.ga)(e * t.x, e * t.y, e * t.z, e * t.w);
        },
        mat2x2f: function mat2x2f(e, t) {
          var n = t.columns;
          return (0, _chunk5RYM4COI.ja)(e * n[0].x, e * n[0].y, e * n[1].x, e * n[1].y);
        },
        mat3x3f: function mat3x3f(e, t) {
          var n = t.columns;
          return (0, _chunk5RYM4COI.ka)(e * n[0].x, e * n[0].y, e * n[0].z, e * n[1].x, e * n[1].y, e * n[1].z, e * n[2].x, e * n[2].y, e * n[2].z);
        },
        mat4x4f: function mat4x4f(e, t) {
          var n = t.columns;
          return (0, _chunk5RYM4COI.la)(e * n[0].x, e * n[0].y, e * n[0].z, e * n[0].w, e * n[1].x, e * n[1].y, e * n[1].z, e * n[1].w, e * n[2].x, e * n[2].y, e * n[2].z, e * n[2].w, e * n[3].x, e * n[3].y, e * n[3].z, e * n[3].w);
        }
      },
      mulVxV: {
        vec2f: function vec2f(e, t) {
          return (0, _chunk5RYM4COI.V)(e.x * t.x, e.y * t.y);
        },
        vec2h: function vec2h(e, t) {
          return (0, _chunk5RYM4COI.W)(e.x * t.x, e.y * t.y);
        },
        vec2i: function vec2i(e, t) {
          return (0, _chunk5RYM4COI.X)(e.x * t.x, e.y * t.y);
        },
        vec2u: function vec2u(e, t) {
          return (0, _chunk5RYM4COI.Y)(e.x * t.x, e.y * t.y);
        },
        vec3f: function vec3f(e, t) {
          return (0, _chunk5RYM4COI._)(e.x * t.x, e.y * t.y, e.z * t.z);
        },
        vec3h: function vec3h(e, t) {
          return (0, _chunk5RYM4COI.$)(e.x * t.x, e.y * t.y, e.z * t.z);
        },
        vec3i: function vec3i(e, t) {
          return (0, _chunk5RYM4COI.aa)(e.x * t.x, e.y * t.y, e.z * t.z);
        },
        vec3u: function vec3u(e, t) {
          return (0, _chunk5RYM4COI.ba)(e.x * t.x, e.y * t.y, e.z * t.z);
        },
        vec4f: function vec4f(e, t) {
          return (0, _chunk5RYM4COI.da)(e.x * t.x, e.y * t.y, e.z * t.z, e.w * t.w);
        },
        vec4h: function vec4h(e, t) {
          return (0, _chunk5RYM4COI.ea)(e.x * t.x, e.y * t.y, e.z * t.z, e.w * t.w);
        },
        vec4i: function vec4i(e, t) {
          return (0, _chunk5RYM4COI.fa)(e.x * t.x, e.y * t.y, e.z * t.z, e.w * t.w);
        },
        vec4u: function vec4u(e, t) {
          return (0, _chunk5RYM4COI.ga)(e.x * t.x, e.y * t.y, e.z * t.z, e.w * t.w);
        },
        mat2x2f: function mat2x2f(e, t) {
          var n = e.columns,
            a = t.columns;
          return (0, _chunk5RYM4COI.ja)(n[0].x * a[0].x + n[1].x * a[0].y, n[0].y * a[0].x + n[1].y * a[0].y, n[0].x * a[1].x + n[1].x * a[1].y, n[0].y * a[1].x + n[1].y * a[1].y);
        },
        mat3x3f: function mat3x3f(e, t) {
          var n = e.columns,
            a = t.columns;
          return (0, _chunk5RYM4COI.ka)(n[0].x * a[0].x + n[1].x * a[0].y + n[2].x * a[0].z, n[0].y * a[0].x + n[1].y * a[0].y + n[2].y * a[0].z, n[0].z * a[0].x + n[1].z * a[0].y + n[2].z * a[0].z, n[0].x * a[1].x + n[1].x * a[1].y + n[2].x * a[1].z, n[0].y * a[1].x + n[1].y * a[1].y + n[2].y * a[1].z, n[0].z * a[1].x + n[1].z * a[1].y + n[2].z * a[1].z, n[0].x * a[2].x + n[1].x * a[2].y + n[2].x * a[2].z, n[0].y * a[2].x + n[1].y * a[2].y + n[2].y * a[2].z, n[0].z * a[2].x + n[1].z * a[2].y + n[2].z * a[2].z);
        },
        mat4x4f: function mat4x4f(e, t) {
          var n = e.columns,
            a = t.columns;
          return (0, _chunk5RYM4COI.la)(n[0].x * a[0].x + n[1].x * a[0].y + n[2].x * a[0].z + n[3].x * a[0].w, n[0].y * a[0].x + n[1].y * a[0].y + n[2].y * a[0].z + n[3].y * a[0].w, n[0].z * a[0].x + n[1].z * a[0].y + n[2].z * a[0].z + n[3].z * a[0].w, n[0].w * a[0].x + n[1].w * a[0].y + n[2].w * a[0].z + n[3].w * a[0].w, n[0].x * a[1].x + n[1].x * a[1].y + n[2].x * a[1].z + n[3].x * a[1].w, n[0].y * a[1].x + n[1].y * a[1].y + n[2].y * a[1].z + n[3].y * a[1].w, n[0].z * a[1].x + n[1].z * a[1].y + n[2].z * a[1].z + n[3].z * a[1].w, n[0].w * a[1].x + n[1].w * a[1].y + n[2].w * a[1].z + n[3].w * a[1].w, n[0].x * a[2].x + n[1].x * a[2].y + n[2].x * a[2].z + n[3].x * a[2].w, n[0].y * a[2].x + n[1].y * a[2].y + n[2].y * a[2].z + n[3].y * a[2].w, n[0].z * a[2].x + n[1].z * a[2].y + n[2].z * a[2].z + n[3].z * a[2].w, n[0].w * a[2].x + n[1].w * a[2].y + n[2].w * a[2].z + n[3].w * a[2].w, n[0].x * a[3].x + n[1].x * a[3].y + n[2].x * a[3].z + n[3].x * a[3].w, n[0].y * a[3].x + n[1].y * a[3].y + n[2].y * a[3].z + n[3].y * a[3].w, n[0].z * a[3].x + n[1].z * a[3].y + n[2].z * a[3].z + n[3].z * a[3].w, n[0].w * a[3].x + n[1].w * a[3].y + n[2].w * a[3].z + n[3].w * a[3].w);
        }
      },
      mulMxV: {
        mat2x2f: function mat2x2f(e, t) {
          var n = e.columns;
          return (0, _chunk5RYM4COI.V)(n[0].x * t.x + n[1].x * t.y, n[0].y * t.x + n[1].y * t.y);
        },
        mat3x3f: function mat3x3f(e, t) {
          var n = e.columns;
          return (0, _chunk5RYM4COI._)(n[0].x * t.x + n[1].x * t.y + n[2].x * t.z, n[0].y * t.x + n[1].y * t.y + n[2].y * t.z, n[0].z * t.x + n[1].z * t.y + n[2].z * t.z);
        },
        mat4x4f: function mat4x4f(e, t) {
          var n = e.columns;
          return (0, _chunk5RYM4COI.da)(n[0].x * t.x + n[1].x * t.y + n[2].x * t.z + n[3].x * t.w, n[0].y * t.x + n[1].y * t.y + n[2].y * t.z + n[3].y * t.w, n[0].z * t.x + n[1].z * t.y + n[2].z * t.z + n[3].z * t.w, n[0].w * t.x + n[1].w * t.y + n[2].w * t.z + n[3].w * t.w);
        }
      },
      mulVxM: {
        mat2x2f: function mat2x2f(e, t) {
          var n = t.columns;
          return (0, _chunk5RYM4COI.V)(e.x * n[0].x + e.y * n[0].y, e.x * n[1].x + e.y * n[1].y);
        },
        mat3x3f: function mat3x3f(e, t) {
          var n = t.columns;
          return (0, _chunk5RYM4COI._)(e.x * n[0].x + e.y * n[0].y + e.z * n[0].z, e.x * n[1].x + e.y * n[1].y + e.z * n[1].z, e.x * n[2].x + e.y * n[2].y + e.z * n[2].z);
        },
        mat4x4f: function mat4x4f(e, t) {
          var n = t.columns;
          return (0, _chunk5RYM4COI.da)(e.x * n[0].x + e.y * n[0].y + e.z * n[0].z + e.w * n[0].w, e.x * n[1].x + e.y * n[1].y + e.z * n[1].z + e.w * n[1].w, e.x * n[2].x + e.y * n[2].y + e.z * n[2].z + e.w * n[2].w, e.x * n[3].x + e.y * n[3].y + e.z * n[3].z + e.w * n[3].w);
        }
      },
      dot: {
        vec2f: j,
        vec2h: j,
        vec2i: j,
        vec2u: j,
        vec3f: X,
        vec3h: X,
        vec3i: X,
        vec3u: X,
        vec4f: Z,
        vec4h: Z,
        vec4i: Z,
        vec4u: Z
      },
      normalize: {
        vec2f: function vec2f(e) {
          var t = K(e);
          return (0, _chunk5RYM4COI.V)(e.x / t, e.y / t);
        },
        vec2h: function vec2h(e) {
          var t = K(e);
          return (0, _chunk5RYM4COI.W)(e.x / t, e.y / t);
        },
        vec2i: function vec2i(e) {
          var t = K(e);
          return (0, _chunk5RYM4COI.X)(e.x / t, e.y / t);
        },
        vec2u: function vec2u(e) {
          var t = K(e);
          return (0, _chunk5RYM4COI.Y)(e.x / t, e.y / t);
        },
        vec3f: function vec3f(e) {
          var t = _(e);
          return (0, _chunk5RYM4COI._)(e.x / t, e.y / t, e.z / t);
        },
        vec3h: function vec3h(e) {
          var t = _(e);
          return (0, _chunk5RYM4COI.$)(e.x / t, e.y / t, e.z / t);
        },
        vec3i: function vec3i(e) {
          var t = _(e);
          return (0, _chunk5RYM4COI.aa)(e.x / t, e.y / t, e.z / t);
        },
        vec3u: function vec3u(e) {
          var t = _(e);
          return (0, _chunk5RYM4COI.ba)(e.x / t, e.y / t, e.z / t);
        },
        vec4f: function vec4f(e) {
          var t = W(e);
          return (0, _chunk5RYM4COI.da)(e.x / t, e.y / t, e.z / t, e.w / t);
        },
        vec4h: function vec4h(e) {
          var t = W(e);
          return (0, _chunk5RYM4COI.ea)(e.x / t, e.y / t, e.z / t, e.w / t);
        },
        vec4i: function vec4i(e) {
          var t = W(e);
          return (0, _chunk5RYM4COI.fa)(e.x / t, e.y / t, e.z / t, e.w / t);
        },
        vec4u: function vec4u(e) {
          var t = W(e);
          return (0, _chunk5RYM4COI.ga)(e.x / t, e.y / t, e.z / t, e.w / t);
        }
      },
      cross: {
        vec3f: function vec3f(e, t) {
          return (0, _chunk5RYM4COI._)(e.y * t.z - e.z * t.y, e.z * t.x - e.x * t.z, e.x * t.y - e.y * t.x);
        },
        vec3h: function vec3h(e, t) {
          return (0, _chunk5RYM4COI.$)(e.y * t.z - e.z * t.y, e.z * t.x - e.x * t.z, e.x * t.y - e.y * t.x);
        }
      },
      floor: {
        vec2f: z(Math.floor),
        vec2h: h(Math.floor),
        vec3f: b(Math.floor),
        vec3h: M(Math.floor),
        vec4f: A(Math.floor),
        vec4h: V(Math.floor)
      },
      max: {
        vec2f: ee(Math.max),
        vec2h: te(Math.max),
        vec2i: le(Math.max),
        vec2u: xe(Math.max),
        vec3f: ne(Math.max),
        vec3h: ae(Math.max),
        vec3i: Te(Math.max),
        vec3u: ie(Math.max),
        vec4f: re(Math.max),
        vec4h: se(Math.max),
        vec4i: we(Math.max),
        vec4u: de(Math.max)
      },
      min: {
        vec2f: ee(Math.min),
        vec2h: te(Math.min),
        vec2i: le(Math.min),
        vec2u: xe(Math.min),
        vec3f: ne(Math.min),
        vec3h: ae(Math.min),
        vec3i: Te(Math.min),
        vec3u: ie(Math.min),
        vec4f: re(Math.min),
        vec4h: se(Math.min),
        vec4i: we(Math.min),
        vec4u: de(Math.min)
      },
      pow: {
        vec2f: function vec2f(e, t) {
          return (0, _chunk5RYM4COI.V)(e.x ** t.x, e.y ** t.y);
        },
        vec2h: function vec2h(e, t) {
          return (0, _chunk5RYM4COI.W)(e.x ** t.x, e.y ** t.y);
        },
        vec3f: function vec3f(e, t) {
          return (0, _chunk5RYM4COI._)(e.x ** t.x, e.y ** t.y, e.z ** t.z);
        },
        vec3h: function vec3h(e, t) {
          return (0, _chunk5RYM4COI.$)(e.x ** t.x, e.y ** t.y, e.z ** t.z);
        },
        vec4f: function vec4f(e, t) {
          return (0, _chunk5RYM4COI.da)(e.x ** t.x, e.y ** t.y, e.z ** t.z, e.w ** t.w);
        },
        vec4h: function vec4h(e, t) {
          return (0, _chunk5RYM4COI.ea)(e.x ** t.x, e.y ** t.y, e.z ** t.z, e.w ** t.w);
        }
      },
      sign: {
        vec2f: z(Math.sign),
        vec2h: h(Math.sign),
        vec2i: P(Math.sign),
        vec3f: b(Math.sign),
        vec3h: M(Math.sign),
        vec3i: C(Math.sign),
        vec4f: A(Math.sign),
        vec4h: V(Math.sign),
        vec4i: G(Math.sign)
      },
      sqrt: {
        vec2f: z(Math.sqrt),
        vec2h: h(Math.sqrt),
        vec3f: b(Math.sqrt),
        vec3h: M(Math.sqrt),
        vec4f: A(Math.sqrt),
        vec4h: V(Math.sqrt)
      },
      div: {
        vec2f: ee(function (e, t) {
          return e / t;
        }),
        vec2h: te(function (e, t) {
          return e / t;
        }),
        vec2i: le(function (e, t) {
          return e / t;
        }),
        vec2u: xe(function (e, t) {
          return e / t;
        }),
        vec3f: ne(function (e, t) {
          return e / t;
        }),
        vec3h: ae(function (e, t) {
          return e / t;
        }),
        vec3i: Te(function (e, t) {
          return e / t;
        }),
        vec3u: ie(function (e, t) {
          return e / t;
        }),
        vec4f: re(function (e, t) {
          return e / t;
        }),
        vec4h: se(function (e, t) {
          return e / t;
        }),
        vec4i: we(function (e, t) {
          return e / t;
        }),
        vec4u: de(function (e, t) {
          return e / t;
        })
      },
      mix: {
        vec2f: function vec2f(e, t, n) {
          return typeof n == "number" ? (0, _chunk5RYM4COI.V)(e.x * (1 - n) + t.x * n, e.y * (1 - n) + t.y * n) : (0, _chunk5RYM4COI.V)(e.x * (1 - n.x) + t.x * n.x, e.y * (1 - n.y) + t.y * n.y);
        },
        vec2h: function vec2h(e, t, n) {
          return typeof n == "number" ? (0, _chunk5RYM4COI.W)(e.x * (1 - n) + t.x * n, e.y * (1 - n) + t.y * n) : (0, _chunk5RYM4COI.W)(e.x * (1 - n.x) + t.x * n.x, e.y * (1 - n.y) + t.y * n.y);
        },
        vec3f: function vec3f(e, t, n) {
          return typeof n == "number" ? (0, _chunk5RYM4COI._)(e.x * (1 - n) + t.x * n, e.y * (1 - n) + t.y * n, e.z * (1 - n) + t.z * n) : (0, _chunk5RYM4COI._)(e.x * (1 - n.x) + t.x * n.x, e.y * (1 - n.y) + t.y * n.y, e.z * (1 - n.z) + t.z * n.z);
        },
        vec3h: function vec3h(e, t, n) {
          return typeof n == "number" ? (0, _chunk5RYM4COI.$)(e.x * (1 - n) + t.x * n, e.y * (1 - n) + t.y * n, e.z * (1 - n) + t.z * n) : (0, _chunk5RYM4COI.$)(e.x * (1 - n.x) + t.x * n.x, e.y * (1 - n.y) + t.y * n.y, e.z * (1 - n.z) + t.z * n.z);
        },
        vec4f: function vec4f(e, t, n) {
          return typeof n == "number" ? (0, _chunk5RYM4COI.da)(e.x * (1 - n) + t.x * n, e.y * (1 - n) + t.y * n, e.z * (1 - n) + t.z * n, e.w * (1 - n) + t.w * n) : (0, _chunk5RYM4COI.da)(e.x * (1 - n.x) + t.x * n.x, e.y * (1 - n.y) + t.y * n.y, e.z * (1 - n.z) + t.z * n.z, e.w * (1 - n.w) + t.w * n.w);
        },
        vec4h: function vec4h(e, t, n) {
          return typeof n == "number" ? (0, _chunk5RYM4COI.ea)(e.x * (1 - n) + t.x * n, e.y * (1 - n) + t.y * n, e.z * (1 - n) + t.z * n, e.w * (1 - n) + t.w * n) : (0, _chunk5RYM4COI.ea)(e.x * (1 - n.x) + t.x * n.x, e.y * (1 - n.y) + t.y * n.y, e.z * (1 - n.z) + t.z * n.z, e.w * (1 - n.w) + t.w * n.w);
        }
      },
      sin: {
        vec2f: z(Math.sin),
        vec2h: h(Math.sin),
        vec3f: b(Math.sin),
        vec3h: M(Math.sin),
        vec4f: A(Math.sin),
        vec4h: V(Math.sin)
      },
      cos: {
        vec2f: z(Math.cos),
        vec2h: h(Math.cos),
        vec3f: b(Math.cos),
        vec3h: M(Math.cos),
        vec4f: A(Math.cos),
        vec4h: V(Math.cos)
      },
      exp: {
        vec2f: z(Math.exp),
        vec2h: h(Math.exp),
        vec3f: b(Math.exp),
        vec3h: M(Math.exp),
        vec4f: A(Math.exp),
        vec4h: V(Math.exp)
      },
      fract: {
        vec2f: z(function (e) {
          return e - Math.floor(e);
        }),
        vec2h: h(function (e) {
          return e - Math.floor(e);
        }),
        vec3f: b(function (e) {
          return e - Math.floor(e);
        }),
        vec3h: M(function (e) {
          return e - Math.floor(e);
        }),
        vec4f: A(function (e) {
          return e - Math.floor(e);
        }),
        vec4h: V(function (e) {
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
        vec2f: z(function (e) {
          return -e;
        }),
        vec2h: h(function (e) {
          return -e;
        }),
        vec2i: P(function (e) {
          return -e;
        }),
        vec2u: H(function (e) {
          return -e;
        }),
        "vec2<bool>": function vec2Bool(e) {
          return (0, _chunk5RYM4COI.Z)(!e.x, !e.y);
        },
        vec3f: b(function (e) {
          return -e;
        }),
        vec3h: M(function (e) {
          return -e;
        }),
        vec3i: C(function (e) {
          return -e;
        }),
        vec3u: Q(function (e) {
          return -e;
        }),
        "vec3<bool>": function vec3Bool(e) {
          return (0, _chunk5RYM4COI.ca)(!e.x, !e.y, !e.z);
        },
        vec4f: A(function (e) {
          return -e;
        }),
        vec4h: V(function (e) {
          return -e;
        }),
        vec4i: G(function (e) {
          return -e;
        }),
        vec4u: Y(function (e) {
          return -e;
        }),
        "vec4<bool>": function vec4Bool(e) {
          return (0, _chunk5RYM4COI.ha)(!e.x, !e.y, !e.z, !e.w);
        }
      },
      select: {
        vec2f: function vec2f(e, t, n) {
          return (0, _chunk5RYM4COI.V)(n.x ? t.x : e.x, n.y ? t.y : e.y);
        },
        vec2h: function vec2h(e, t, n) {
          return (0, _chunk5RYM4COI.W)(n.x ? t.x : e.x, n.y ? t.y : e.y);
        },
        vec2i: function vec2i(e, t, n) {
          return (0, _chunk5RYM4COI.X)(n.x ? t.x : e.x, n.y ? t.y : e.y);
        },
        vec2u: function vec2u(e, t, n) {
          return (0, _chunk5RYM4COI.Y)(n.x ? t.x : e.x, n.y ? t.y : e.y);
        },
        "vec2<bool>": function vec2Bool(e, t, n) {
          return (0, _chunk5RYM4COI.Z)(n.x ? t.x : e.x, n.y ? t.y : e.y);
        },
        vec3f: function vec3f(e, t, n) {
          return (0, _chunk5RYM4COI._)(n.x ? t.x : e.x, n.y ? t.y : e.y, n.z ? t.z : e.z);
        },
        vec3h: function vec3h(e, t, n) {
          return (0, _chunk5RYM4COI.$)(n.x ? t.x : e.x, n.y ? t.y : e.y, n.z ? t.z : e.z);
        },
        vec3i: function vec3i(e, t, n) {
          return (0, _chunk5RYM4COI.aa)(n.x ? t.x : e.x, n.y ? t.y : e.y, n.z ? t.z : e.z);
        },
        vec3u: function vec3u(e, t, n) {
          return (0, _chunk5RYM4COI.ba)(n.x ? t.x : e.x, n.y ? t.y : e.y, n.z ? t.z : e.z);
        },
        "vec3<bool>": function vec3Bool(e, t, n) {
          return (0, _chunk5RYM4COI.ca)(n.x ? t.x : e.x, n.y ? t.y : e.y, n.z ? t.z : e.z);
        },
        vec4f: function vec4f(e, t, n) {
          return (0, _chunk5RYM4COI.da)(n.x ? t.x : e.x, n.y ? t.y : e.y, n.z ? t.z : e.z, n.w ? t.w : e.w);
        },
        vec4h: function vec4h(e, t, n) {
          return (0, _chunk5RYM4COI.ea)(n.x ? t.x : e.x, n.y ? t.y : e.y, n.z ? t.z : e.z, n.w ? t.w : e.w);
        },
        vec4i: function vec4i(e, t, n) {
          return (0, _chunk5RYM4COI.fa)(n.x ? t.x : e.x, n.y ? t.y : e.y, n.z ? t.z : e.z, n.w ? t.w : e.w);
        },
        vec4u: function vec4u(e, t, n) {
          return (0, _chunk5RYM4COI.ga)(n.x ? t.x : e.x, n.y ? t.y : e.y, n.z ? t.z : e.z, n.w ? t.w : e.w);
        },
        "vec4<bool>": function vec4Bool(e, t, n) {
          return (0, _chunk5RYM4COI.ha)(n.x ? t.x : e.x, n.y ? t.y : e.y, n.z ? t.z : e.z, n.w ? t.w : e.w);
        }
      }
    };
  function E(e) {
    var t = e.dataType.type;
    return t === "abstractInt" || t === "abstractFloat" || t === "f32" || t === "f16" || t === "i32" || t === "u32";
  }
  var Ve = exports.add = (0, _chunk5RYM4COI.N)(function (e, t) {
      return s.add[e.kind](e, t);
    }, function (e, t) {
      return {
        value: `(${e.value} + ${t.value})`,
        dataType: e.dataType
      };
    }, "coerce"),
    L = exports.sub = (0, _chunk5RYM4COI.N)(function (e, t) {
      return s.sub[e.kind](e, t);
    }, function (e, t) {
      return {
        value: `(${e.value} - ${t.value})`,
        dataType: e.dataType
      };
    }, "coerce"),
    ze = exports.mul = (0, _chunk5RYM4COI.N)(function (e, t) {
      if (typeof e == "number") return s.mulSxV[t.kind](e, t);
      if (typeof e == "object" && typeof t == "object" && "kind" in e && "kind" in t) {
        var n = !e.kind.startsWith("mat"),
          a = !t.kind.startsWith("mat");
        if (!n && a) return s.mulMxV[e.kind](e, t);
        if (n && !a) return s.mulVxM[t.kind](e, t);
      }
      return s.mulVxV[t.kind](e, t);
    }, function (e, t) {
      var n = E(e) ? t.dataType : e.dataType.type.startsWith("mat") ? t.dataType.type.startsWith("mat") ? e.dataType : t.dataType : e.dataType;
      return {
        value: `(${e.value} * ${t.value})`,
        dataType: n
      };
    }),
    Ie = exports.abs = (0, _chunk5RYM4COI.N)(function (e) {
      return typeof e == "number" ? Math.abs(e) : s.abs[e.kind](e);
    }, function (e) {
      return {
        value: `abs(${e.value})`,
        dataType: e.dataType
      };
    }),
    Se = exports.atan2 = (0, _chunk5RYM4COI.N)(function (e, t) {
      return typeof e == "number" && typeof t == "number" ? Math.atan2(e, t) : s.atan2[e.kind](e, t);
    }, function (e, t) {
      return {
        value: `atan2(${e.value}, ${t.value})`,
        dataType: e.dataType
      };
    }),
    $e = exports.acos = (0, _chunk5RYM4COI.N)(function (e) {
      return typeof e == "number" ? Math.acos(e) : s.acos[e.kind](e);
    }, function (e) {
      return {
        value: `acos(${e.value})`,
        dataType: e.dataType
      };
    }),
    Be = exports.asin = (0, _chunk5RYM4COI.N)(function (e) {
      return typeof e == "number" ? Math.asin(e) : s.asin[e.kind](e);
    }, function (e) {
      return {
        value: `asin(${e.value})`,
        dataType: e.dataType
      };
    }),
    ke = exports.ceil = (0, _chunk5RYM4COI.N)(function (e) {
      return typeof e == "number" ? Math.ceil(e) : s.ceil[e.kind](e);
    }, function (e) {
      return {
        value: `ceil(${e.value})`,
        dataType: e.dataType
      };
    }),
    Oe = exports.clamp = (0, _chunk5RYM4COI.N)(function (e, t, n) {
      return typeof e == "number" ? Math.min(Math.max(t, e), n) : s.clamp[e.kind](e, t, n);
    }, function (e, t, n) {
      return {
        value: `clamp(${e.value}, ${t.value}, ${n.value})`,
        dataType: e.dataType
      };
    }),
    De = exports.cos = (0, _chunk5RYM4COI.N)(function (e) {
      return typeof e == "number" ? Math.cos(e) : s.cos[e.kind](e);
    }, function (e) {
      return {
        value: `cos(${e.value})`,
        dataType: e.dataType
      };
    }),
    Fe = exports.cross = (0, _chunk5RYM4COI.N)(function (e, t) {
      return s.cross[e.kind](e, t);
    }, function (e, t) {
      return {
        value: `cross(${e.value}, ${t.value})`,
        dataType: e.dataType
      };
    }),
    he = exports.dot = (0, _chunk5RYM4COI.N)(function (e, t) {
      return s.dot[e.kind](e, t);
    }, function (e, t) {
      return {
        value: `dot(${e.value}, ${t.value})`,
        dataType: _chunk5RYM4COI.T
      };
    }),
    Ue = exports.normalize = (0, _chunk5RYM4COI.N)(function (e) {
      return s.normalize[e.kind](e);
    }, function (e) {
      return {
        value: `normalize(${e.value})`,
        dataType: e.dataType
      };
    }),
    Ne = exports.floor = (0, _chunk5RYM4COI.N)(function (e) {
      return typeof e == "number" ? Math.floor(e) : s.floor[e.kind](e);
    }, function (e) {
      return {
        value: `floor(${e.value})`,
        dataType: e.dataType
      };
    }),
    Re = exports.fract = (0, _chunk5RYM4COI.N)(function (e) {
      return typeof e == "number" ? e - Math.floor(e) : s.fract[e.kind](e);
    }, function (e) {
      return {
        value: `fract(${e.value})`,
        dataType: e.dataType
      };
    }),
    be = exports.length = (0, _chunk5RYM4COI.N)(function (e) {
      return typeof e == "number" ? Math.abs(e) : s.length[e.kind](e);
    }, function (e) {
      return {
        value: `length(${e.value})`,
        dataType: _chunk5RYM4COI.T
      };
    }),
    Ke = exports.max = (0, _chunk5RYM4COI.N)(function (e, t) {
      return typeof e == "number" ? Math.max(e, t) : s.max[e.kind](e, t);
    }, function (e, t) {
      return {
        value: `max(${e.value}, ${t.value})`,
        dataType: e.dataType
      };
    }, "coerce"),
    _e = exports.min = (0, _chunk5RYM4COI.N)(function (e, t) {
      return typeof e == "number" ? Math.min(e, t) : s.min[e.kind](e, t);
    }, function (e, t) {
      return {
        value: `min(${e.value}, ${t.value})`,
        dataType: e.dataType
      };
    }, "coerce"),
    We = exports.sign = (0, _chunk5RYM4COI.N)(function (e) {
      return typeof e == "number" ? Math.sign(e) : s.sign[e.kind](e);
    }, function (e) {
      return {
        value: `sign(${e.value})`,
        dataType: e.dataType
      };
    }),
    Ee = exports.sin = (0, _chunk5RYM4COI.N)(function (e) {
      return typeof e == "number" ? Math.sin(e) : s.sin[e.kind](e);
    }, function (e) {
      return {
        value: `sin(${e.value})`,
        dataType: e.dataType
      };
    }),
    qe = exports.exp = (0, _chunk5RYM4COI.N)(function (e) {
      return typeof e == "number" ? Math.exp(e) : s.exp[e.kind](e);
    }, function (e) {
      return {
        value: `exp(${e.value})`,
        dataType: e.dataType
      };
    }),
    Pe = exports.pow = (0, _chunk5RYM4COI.N)(function (e, t) {
      if (typeof e == "number" && typeof t == "number") return e ** t;
      if (typeof e == "object" && typeof t == "object" && "kind" in e && "kind" in t) return s.pow[e.kind](e, t);
      throw new Error("Invalid arguments to pow()");
    }, function (e, t) {
      return {
        value: `pow(${e.value}, ${t.value})`,
        dataType: e.dataType
      };
    }),
    Ce = exports.mix = (0, _chunk5RYM4COI.N)(function (e, t, n) {
      if (typeof e == "number") {
        if (typeof n != "number" || typeof t != "number") throw new Error("When e1 and e2 are numbers, the blend factor must be a number.");
        return e * (1 - n) + t * n;
      }
      if (typeof e == "number" || typeof t == "number") throw new Error("e1 and e2 need to both be vectors of the same kind.");
      return s.mix[e.kind](e, t, n);
    }, function (e, t, n) {
      return {
        value: `mix(${e.value}, ${t.value}, ${n.value})`,
        dataType: e.dataType
      };
    }),
    Ge = exports.reflect = (0, _chunk5RYM4COI.N)(function (e, t) {
      return L(e, ze(2 * he(t, e), t));
    }, function (e, t) {
      return {
        value: `reflect(${e.value}, ${t.value})`,
        dataType: e.dataType
      };
    }),
    Le = exports.distance = (0, _chunk5RYM4COI.N)(function (e, t) {
      return typeof e == "number" && typeof t == "number" ? Math.abs(e - t) : be(L(e, t));
    }, function (e, t) {
      return {
        value: `distance(${e.value}, ${t.value})`,
        dataType: _chunk5RYM4COI.T
      };
    }),
    Je = exports.neg = (0, _chunk5RYM4COI.N)(function (e) {
      return typeof e == "number" ? -e : s.neg[e.kind](e);
    }, function (e) {
      return {
        value: `-(${e.value})`,
        dataType: e.dataType
      };
    }),
    je = exports.sqrt = (0, _chunk5RYM4COI.N)(function (e) {
      return typeof e == "number" ? Math.sqrt(e) : s.sqrt[e.kind](e);
    }, function (e) {
      return {
        value: `sqrt(${e.value})`,
        dataType: e.dataType
      };
    }),
    Xe = exports.div = (0, _chunk5RYM4COI.N)(function (e, t) {
      return typeof e == "number" && typeof t == "number" ? e / t : typeof t == "number" ? s.mulSxV[e.kind](1 / t, e) : s.div[e.kind](e, t);
    }, function (e, t) {
      return {
        value: `(${e.value} / ${t.value})`,
        dataType: e.dataType
      };
    });
  function q(e) {
    return e.dataType.type.includes("2") ? _chunk5RYM4COI.Z : e.dataType.type.includes("3") ? _chunk5RYM4COI.ca : _chunk5RYM4COI.ha;
  }
  var Ze = exports.allEq = (0, _chunk5RYM4COI.N)(function (e, t) {
      return me(J(e, t));
    }, function (e, t) {
      return {
        value: `all(${e.value} == ${t.value})`,
        dataType: _chunk5RYM4COI.Q
      };
    }),
    J = exports.eq = (0, _chunk5RYM4COI.N)(function (e, t) {
      return s.eq[e.kind](e, t);
    }, function (e, t) {
      return {
        value: `(${e.value} == ${t.value})`,
        dataType: q(e)
      };
    }),
    He = exports.ne = (0, _chunk5RYM4COI.N)(function (e, t) {
      return D(J(e, t));
    }, function (e, t) {
      return {
        value: `(${e.value} != ${t.value})`,
        dataType: q(e)
      };
    }),
    ce = exports.lt = (0, _chunk5RYM4COI.N)(function (e, t) {
      return s.lt[e.kind](e, t);
    }, function (e, t) {
      return {
        value: `(${e.value} < ${t.value})`,
        dataType: q(e)
      };
    }),
    Qe = exports.le = (0, _chunk5RYM4COI.N)(function (e, t) {
      return pe(ce(e, t), J(e, t));
    }, function (e, t) {
      return {
        value: `(${e.value} <= ${t.value})`,
        dataType: q(e)
      };
    }),
    Ye = exports.gt = (0, _chunk5RYM4COI.N)(function (e, t) {
      return Me(D(ce(e, t)), D(J(e, t)));
    }, function (e, t) {
      return {
        value: `(${e.value} > ${t.value})`,
        dataType: q(e)
      };
    }),
    et = exports.ge = (0, _chunk5RYM4COI.N)(function (e, t) {
      return D(ce(e, t));
    }, function (e, t) {
      return {
        value: `(${e.value} >= ${t.value})`,
        dataType: q(e)
      };
    }),
    D = exports.not = (0, _chunk5RYM4COI.N)(function (e) {
      return s.neg[e.kind](e);
    }, function (e) {
      return {
        value: `!(${e.value})`,
        dataType: e.dataType
      };
    }),
    pe = exports.or = (0, _chunk5RYM4COI.N)(function (e, t) {
      return s.or[e.kind](e, t);
    }, function (e, t) {
      return {
        value: `(${e.value} | ${t.value})`,
        dataType: e.dataType
      };
    }),
    Me = exports.and = (0, _chunk5RYM4COI.N)(function (e, t) {
      return D(pe(D(e), D(t)));
    }, function (e, t) {
      return {
        value: `(${e.value} & ${t.value})`,
        dataType: e.dataType
      };
    }),
    me = exports.all = (0, _chunk5RYM4COI.N)(function (e) {
      return s.all[e.kind](e);
    }, function (e) {
      return {
        value: `all(${e.value})`,
        dataType: _chunk5RYM4COI.Q
      };
    }),
    tt = exports.any = (0, _chunk5RYM4COI.N)(function (e) {
      return !me(D(e));
    }, function (e) {
      return {
        value: `any(${e.value})`,
        dataType: _chunk5RYM4COI.Q
      };
    }),
    nt = exports.isCloseTo = (0, _chunk5RYM4COI.N)(function (e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .01;
      return typeof e == "number" && typeof t == "number" ? Math.abs(e - t) < n : typeof e != "number" && typeof t != "number" ? s.isCloseToZero[e.kind](L(e, t), n) : !1;
    }, function (e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        value: .01,
        dataType: _chunk5RYM4COI.T
      };
      return E(e) && E(t) ? {
        value: `(abs(f32(${e.value}) - f32(${t.value})) <= ${n.value})`,
        dataType: _chunk5RYM4COI.Q
      } : !E(e) && !E(t) ? {
        value: `all(abs(${e.value} - ${t.value}) <= (${e.value} - ${e.value}) + ${n.value})`,
        dataType: _chunk5RYM4COI.Q
      } : {
        value: "false",
        dataType: _chunk5RYM4COI.Q
      };
    }),
    at = exports.select = (0, _chunk5RYM4COI.N)(function (e, t, n) {
      return typeof n == "boolean" ? n ? t : e : s.select[e.kind](e, t, n);
    }, function (e, t, n) {
      return {
        value: `select(${e.value}, ${t.value}, ${n.value})`,
        dataType: e.dataType
      };
    });
  var rt = exports.workgroupBarrier = (0, _chunk5RYM4COI.N)(function () {
      return console.warn("workgroupBarrier is a no-op outside of GPU mode.");
    }, function () {
      return {
        value: "workgroupBarrier()",
        dataType: _chunk5RYM4COI.t
      };
    }),
    st = exports.storageBarrier = (0, _chunk5RYM4COI.N)(function () {
      return console.warn("storageBarrier is a no-op outside of GPU mode.");
    }, function () {
      return {
        value: "storageBarrier()",
        dataType: _chunk5RYM4COI.t
      };
    }),
    ct = exports.textureBarrier = (0, _chunk5RYM4COI.N)(function () {
      return console.warn("textureBarrier is a no-op outside of GPU mode.");
    }, function () {
      return {
        value: "textureBarrier()",
        dataType: _chunk5RYM4COI.t
      };
    }),
    ot = exports.atomicLoad = (0, _chunk5RYM4COI.N)(function (e) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e) {
      if ((0, _chunk5RYM4COI.A)(e.dataType) && e.dataType.type === "atomic") return {
        value: `atomicLoad(&${e.value})`,
        dataType: e.dataType.inner
      };
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }),
    ut = exports.atomicStore = (0, _chunk5RYM4COI.N)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if (!(0, _chunk5RYM4COI.A)(e.dataType) || e.dataType.type !== "atomic") throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
      return {
        value: `atomicStore(&${e.value}, ${t.value})`,
        dataType: _chunk5RYM4COI.t
      };
    }),
    N = function N(e, t) {
      return e.dataType.type === "atomic" && e.dataType.inner.type === "i32" ? [e.dataType, _chunk5RYM4COI.S] : [e.dataType, _chunk5RYM4COI.R];
    },
    yt = exports.atomicAdd = (0, _chunk5RYM4COI.N)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if ((0, _chunk5RYM4COI.A)(e.dataType) && e.dataType.type === "atomic") return {
        value: `atomicAdd(&${e.value}, ${t.value})`,
        dataType: e.dataType.inner
      };
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }, N),
    vt = exports.atomicSub = (0, _chunk5RYM4COI.N)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if ((0, _chunk5RYM4COI.A)(e.dataType) && e.dataType.type === "atomic") return {
        value: `atomicSub(&${e.value}, ${t.value})`,
        dataType: e.dataType.inner
      };
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }, N),
    lt = exports.atomicMax = (0, _chunk5RYM4COI.N)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if ((0, _chunk5RYM4COI.A)(e.dataType) && e.dataType.type === "atomic") return {
        value: `atomicMax(&${e.value}, ${t.value})`,
        dataType: e.dataType.inner
      };
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }, N),
    xt = exports.atomicMin = (0, _chunk5RYM4COI.N)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if ((0, _chunk5RYM4COI.A)(e.dataType) && e.dataType.type === "atomic") return {
        value: `atomicMin(&${e.value}, ${t.value})`,
        dataType: e.dataType.inner
      };
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }, N),
    Tt = exports.atomicAnd = (0, _chunk5RYM4COI.N)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if ((0, _chunk5RYM4COI.A)(e.dataType) && e.dataType.type === "atomic") return {
        value: `atomicAnd(&${e.value}, ${t.value})`,
        dataType: e.dataType.inner
      };
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }, N),
    it = exports.atomicOr = (0, _chunk5RYM4COI.N)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if ((0, _chunk5RYM4COI.A)(e.dataType) && e.dataType.type === "atomic") return {
        value: `atomicOr(&${e.value}, ${t.value})`,
        dataType: e.dataType.inner
      };
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }, N),
    wt = exports.atomicXor = (0, _chunk5RYM4COI.N)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if ((0, _chunk5RYM4COI.A)(e.dataType) && e.dataType.type === "atomic") return {
        value: `atomicXor(&${e.value}, ${t.value})`,
        dataType: e.dataType.inner
      };
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }, N);
  var dt = exports.arrayLength = (0, _chunk5RYM4COI.N)(function (e) {
    return e.length;
  }, function (e) {
    return {
      value: `arrayLength(${e.value})`,
      dataType: _chunk5RYM4COI.R
    };
  }, function (e) {
    return [(0, _chunk5RYM4COI.na)(e.dataType)];
  });
  var pt = exports.unpack2x16float = (0, _chunk5RYM4COI.N)(function (e) {
      var t = new ArrayBuffer(4);
      new k.BufferWriter(t).writeUint32(e);
      var a = new k.BufferReader(t);
      return (0, _chunk5RYM4COI.V)(a.readFloat16(), a.readFloat16());
    }, function (e) {
      return {
        value: `unpack2x16float(${e.value})`,
        dataType: _chunk5RYM4COI.V
      };
    }),
    mt = exports.pack2x16float = (0, _chunk5RYM4COI.N)(function (e) {
      var t = new ArrayBuffer(4),
        n = new k.BufferWriter(t);
      n.writeFloat16(e.x), n.writeFloat16(e.y);
      var a = new k.BufferReader(t);
      return (0, _chunk5RYM4COI.R)(a.readUint32());
    }, function (e) {
      return {
        value: `pack2x16float(${e.value})`,
        dataType: _chunk5RYM4COI.R
      };
    }),
    gt = exports.unpack4x8unorm = (0, _chunk5RYM4COI.N)(function (e) {
      var t = new ArrayBuffer(4);
      new k.BufferWriter(t).writeUint32(e);
      var a = new k.BufferReader(t);
      return (0, _chunk5RYM4COI.da)(a.readUint8() / 255, a.readUint8() / 255, a.readUint8() / 255, a.readUint8() / 255);
    }, function (e) {
      return {
        value: `unpack4x8unorm(${e.value})`,
        dataType: _chunk5RYM4COI.da
      };
    }),
    ft = exports.pack4x8unorm = (0, _chunk5RYM4COI.N)(function (e) {
      var t = new ArrayBuffer(4),
        n = new k.BufferWriter(t);
      n.writeUint8(e.x * 255), n.writeUint8(e.y * 255), n.writeUint8(e.z * 255), n.writeUint8(e.w * 255);
      var a = new k.BufferReader(t);
      return (0, _chunk5RYM4COI.R)(a.readUint32());
    }, function (e) {
      return {
        value: `pack4x8unorm(${e.value})`,
        dataType: _chunk5RYM4COI.R
      };
    });
  var zt = exports.textureSample = (0, _chunk5RYM4COI.N)(function (e, t, n, a, v) {
      throw new Error("Texture sampling is not supported outside of GPU mode.");
    }, function (e, t, n, a, v) {
      var F = [e, t, n];
      return a !== void 0 && F.push(a), v !== void 0 && F.push(v), {
        value: `textureSample(${F.map(function (oe) {
          return oe.value;
        }).join(", ")})`,
        dataType: _chunk5RYM4COI.da
      };
    }),
    ht = exports.textureSampleLevel = (0, _chunk5RYM4COI.N)(function (e, t, n, a, v) {
      throw new Error("Texture sampling is not supported outside of GPU mode.");
    }, function (e, t, n, a, v) {
      var F = [e, t, n, a];
      return v !== void 0 && F.push(v), {
        value: `textureSampleLevel(${F.map(function (oe) {
          return oe.value;
        }).join(", ")})`,
        dataType: _chunk5RYM4COI.da
      };
    }),
    bt = {
      u32: _chunk5RYM4COI.ga,
      i32: _chunk5RYM4COI.fa,
      f32: _chunk5RYM4COI.da
    },
    Mt = exports.textureLoad = (0, _chunk5RYM4COI.N)(function (e, t, n) {
      throw new Error("Texture loading is not supported outside of GPU mode.");
    }, function (e, t, n) {
      var a = [e, t];
      n !== void 0 && a.push(n);
      var v = e.dataType;
      return {
        value: `textureLoad(${a.map(function (F) {
          return F.value;
        }).join(", ")})`,
        dataType: "texelDataType" in v ? v.texelDataType : bt[v.channelDataType.type]
      };
    }),
    At = exports.textureStore = (0, _chunk5RYM4COI.N)(function (e, t, n, a) {
      throw new Error("Texture storing is not supported outside of GPU mode.");
    }, function (e, t, n, a) {
      return {
        value: `textureStore(${[e, t, n, a].filter(function (v) {
          return v !== void 0;
        }).map(function (v) {
          return v.value;
        }).join(", ")})`,
        dataType: _chunk5RYM4COI.t
      };
    }),
    Vt = exports.textureDimensions = (0, _chunk5RYM4COI.N)(function (e, t) {
      throw new Error("Texture dimensions are not supported outside of GPU mode.");
    }, function (e, t) {
      var n = e.dataType.dimension;
      return {
        value: `textureDimensions(${e.value}${t !== void 0 ? `, ${t.value}` : ""})`,
        dataType: n === "1d" ? _chunk5RYM4COI.R : n === "3d" ? _chunk5RYM4COI.ba : _chunk5RYM4COI.Y
      };
    });
},33,[30,31],"node_modules/typegpu/std/index.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "align", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.ea;
    }
  });
  Object.defineProperty(exports, "alignmentOf", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.aa;
    }
  });
  Object.defineProperty(exports, "arrayOf", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.da;
    }
  });
  Object.defineProperty(exports, "atomic", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.na;
    }
  });
  Object.defineProperty(exports, "bool", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.Q;
    }
  });
  Object.defineProperty(exports, "builtin", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.oa;
    }
  });
  Object.defineProperty(exports, "disarrayOf", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.la;
    }
  });
  Object.defineProperty(exports, "f16", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.U;
    }
  });
  Object.defineProperty(exports, "f32", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.T;
    }
  });
  Object.defineProperty(exports, "float16", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.J;
    }
  });
  Object.defineProperty(exports, "float16x2", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.K;
    }
  });
  Object.defineProperty(exports, "float16x4", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.L;
    }
  });
  Object.defineProperty(exports, "float32", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.M;
    }
  });
  Object.defineProperty(exports, "float32x2", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.N;
    }
  });
  Object.defineProperty(exports, "float32x3", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.O;
    }
  });
  Object.defineProperty(exports, "float32x4", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.P;
    }
  });
  Object.defineProperty(exports, "formatToWGSLType", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.j;
    }
  });
  Object.defineProperty(exports, "i32", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.S;
    }
  });
  Object.defineProperty(exports, "interpolate", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.ha;
    }
  });
  Object.defineProperty(exports, "isAlignAttrib", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.F;
    }
  });
  Object.defineProperty(exports, "isAtomic", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.E;
    }
  });
  Object.defineProperty(exports, "isBuiltin", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.ia;
    }
  });
  Object.defineProperty(exports, "isBuiltinAttrib", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.J;
    }
  });
  Object.defineProperty(exports, "isData", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.i;
    }
  });
  Object.defineProperty(exports, "isDecorated", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.K;
    }
  });
  Object.defineProperty(exports, "isDisarray", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.e;
    }
  });
  Object.defineProperty(exports, "isInterpolateAttrib", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.I;
    }
  });
  Object.defineProperty(exports, "isLocationAttrib", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.H;
    }
  });
  Object.defineProperty(exports, "isLooseData", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.d;
    }
  });
  Object.defineProperty(exports, "isLooseDecorated", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.g;
    }
  });
  Object.defineProperty(exports, "isPtr", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.D;
    }
  });
  Object.defineProperty(exports, "isSizeAttrib", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.G;
    }
  });
  Object.defineProperty(exports, "isUnstruct", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.f;
    }
  });
  Object.defineProperty(exports, "isWgslArray", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.B;
    }
  });
  Object.defineProperty(exports, "isWgslData", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.A;
    }
  });
  Object.defineProperty(exports, "isWgslStruct", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.C;
    }
  });
  Object.defineProperty(exports, "location", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.ga;
    }
  });
  Object.defineProperty(exports, "mat2x2f", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.ja;
    }
  });
  Object.defineProperty(exports, "mat3x3f", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.ka;
    }
  });
  Object.defineProperty(exports, "mat4x4f", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.la;
    }
  });
  Object.defineProperty(exports, "matToArray", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.ma;
    }
  });
  Object.defineProperty(exports, "packedFormats", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.k;
    }
  });
  Object.defineProperty(exports, "ptrFn", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.na;
    }
  });
  Object.defineProperty(exports, "ptrHandle", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.sa;
    }
  });
  Object.defineProperty(exports, "ptrPrivate", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.oa;
    }
  });
  Object.defineProperty(exports, "ptrStorage", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.qa;
    }
  });
  Object.defineProperty(exports, "ptrUniform", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.ra;
    }
  });
  Object.defineProperty(exports, "ptrWorkgroup", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.pa;
    }
  });
  Object.defineProperty(exports, "sint16", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.A;
    }
  });
  Object.defineProperty(exports, "sint16x2", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.B;
    }
  });
  Object.defineProperty(exports, "sint16x4", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.C;
    }
  });
  Object.defineProperty(exports, "sint32", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.U;
    }
  });
  Object.defineProperty(exports, "sint32x2", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.V;
    }
  });
  Object.defineProperty(exports, "sint32x3", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.W;
    }
  });
  Object.defineProperty(exports, "sint32x4", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.X;
    }
  });
  Object.defineProperty(exports, "sint8", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.o;
    }
  });
  Object.defineProperty(exports, "sint8x2", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.p;
    }
  });
  Object.defineProperty(exports, "sint8x4", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.q;
    }
  });
  Object.defineProperty(exports, "size", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.fa;
    }
  });
  Object.defineProperty(exports, "sizeOf", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.ca;
    }
  });
  Object.defineProperty(exports, "snorm16", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.G;
    }
  });
  Object.defineProperty(exports, "snorm16x2", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.H;
    }
  });
  Object.defineProperty(exports, "snorm16x4", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.I;
    }
  });
  Object.defineProperty(exports, "snorm8", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.u;
    }
  });
  Object.defineProperty(exports, "snorm8x2", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.v;
    }
  });
  Object.defineProperty(exports, "snorm8x4", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.w;
    }
  });
  Object.defineProperty(exports, "struct", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.ka;
    }
  });
  Object.defineProperty(exports, "u32", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.R;
    }
  });
  Object.defineProperty(exports, "uint16", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.x;
    }
  });
  Object.defineProperty(exports, "uint16x2", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.y;
    }
  });
  Object.defineProperty(exports, "uint16x4", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.z;
    }
  });
  Object.defineProperty(exports, "uint32", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.Q;
    }
  });
  Object.defineProperty(exports, "uint32x2", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.R;
    }
  });
  Object.defineProperty(exports, "uint32x3", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.S;
    }
  });
  Object.defineProperty(exports, "uint32x4", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.T;
    }
  });
  Object.defineProperty(exports, "uint8", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.l;
    }
  });
  Object.defineProperty(exports, "uint8x2", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.m;
    }
  });
  Object.defineProperty(exports, "uint8x4", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.n;
    }
  });
  Object.defineProperty(exports, "unorm10_10_10_2", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.Y;
    }
  });
  Object.defineProperty(exports, "unorm16", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.D;
    }
  });
  Object.defineProperty(exports, "unorm16x2", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.E;
    }
  });
  Object.defineProperty(exports, "unorm16x4", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.F;
    }
  });
  Object.defineProperty(exports, "unorm8", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.r;
    }
  });
  Object.defineProperty(exports, "unorm8x2", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.s;
    }
  });
  Object.defineProperty(exports, "unorm8x4", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.t;
    }
  });
  Object.defineProperty(exports, "unorm8x4_bgra", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.Z;
    }
  });
  Object.defineProperty(exports, "unstruct", {
    enumerable: true,
    get: function get() {
      return _chunkSMTSXYNG.ma;
    }
  });
  Object.defineProperty(exports, "vec2b", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.Z;
    }
  });
  Object.defineProperty(exports, "vec2f", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.V;
    }
  });
  Object.defineProperty(exports, "vec2h", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.W;
    }
  });
  Object.defineProperty(exports, "vec2i", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.X;
    }
  });
  Object.defineProperty(exports, "vec2u", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.Y;
    }
  });
  Object.defineProperty(exports, "vec3b", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.ca;
    }
  });
  Object.defineProperty(exports, "vec3f", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI._;
    }
  });
  Object.defineProperty(exports, "vec3h", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.$;
    }
  });
  Object.defineProperty(exports, "vec3i", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.aa;
    }
  });
  Object.defineProperty(exports, "vec3u", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.ba;
    }
  });
  Object.defineProperty(exports, "vec4b", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.ha;
    }
  });
  Object.defineProperty(exports, "vec4f", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.da;
    }
  });
  Object.defineProperty(exports, "vec4h", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.ea;
    }
  });
  Object.defineProperty(exports, "vec4i", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.fa;
    }
  });
  Object.defineProperty(exports, "vec4u", {
    enumerable: true,
    get: function get() {
      return _chunk5RYM4COI.ga;
    }
  });
  var _chunkSMTSXYNG = require(_dependencyMap[0], "../chunk-SMTSXYNG.js");
  var _chunk5RYM4COI = require(_dependencyMap[1], "../chunk-5RYM4COI.js");
},34,[29,30],"node_modules/typegpu/data/index.js");

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
