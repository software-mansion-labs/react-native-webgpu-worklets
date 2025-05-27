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
  var _noise = require(_dependencyMap[3], "@typegpu/noise");
  Object.keys(_noise).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _noise[key]) return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function get() {
        return _noise[key];
      }
    });
  });
},0,[1,34,35,36],"libEntry.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var _interopRequireDefault = require(_dependencyMap[0], "@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "MissingBindGroupsError", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.m;
    }
  });
  Object.defineProperty(exports, "MissingLinksError", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.l;
    }
  });
  Object.defineProperty(exports, "MissingSlotValueError", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.j;
    }
  });
  Object.defineProperty(exports, "MissingVertexBuffersError", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.n;
    }
  });
  Object.defineProperty(exports, "NotUniformError", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.k;
    }
  });
  exports.RandomNameRegistry = void 0;
  Object.defineProperty(exports, "ResolutionError", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.i;
    }
  });
  exports.default = exports.StrictNameRegistry = void 0;
  exports.isBuffer = ue;
  exports.isComparisonSampler = Ze;
  exports.isDerived = Re;
  exports.isSampledTextureView = rt;
  exports.isSampler = Xe;
  exports.isSlot = Be;
  exports.isStorageTextureView = tt;
  exports.isTexture = Q;
  exports.isTgpuFn = ir;
  exports.isUsableAsRender = _a;
  exports.isUsableAsSampled = Sr;
  exports.isUsableAsStorage = Te;
  exports.isUsableAsUniform = wt;
  exports.isUsableAsVertex = ka;
  exports.tgpu = void 0;
  exports.unstable_asMutable = dr;
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
  var _chunkSFECI7OX = require(_dependencyMap[12], "./chunk-SFECI7OX.js");
  var _chunkSLWTVY6K = require(_dependencyMap[13], "./chunk-SLWTVY6K.js");
  var _chunkL7HIBZAX = require(_dependencyMap[14], "./chunk-L7HIBZAX.js");
  var _tinyest = _interopRequireWildcard(require(_dependencyMap[15], "tinyest"));
  var Ea = _tinyest;
  var _typedBinary = require(_dependencyMap[16], "typed-binary");
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  function _defineAccessor(e, r, n, t) { var c = { configurable: !0, enumerable: !0 }; return c[e] = t, Object.defineProperty(r, n, c); }
  function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  function sn(e) {
    if (typeof (e == null ? void 0 : e[_chunkL7HIBZAX.c]) == "function") return e[_chunkL7HIBZAX.c].bind(e);
  }
  function dt(e, t) {
    throw new Error(`Failed to handle ${e} at ${t}`);
  }
  var pa = {
      f: {
        1: _chunkL7HIBZAX.ka,
        2: _chunkL7HIBZAX.ma,
        3: _chunkL7HIBZAX.ra,
        4: _chunkL7HIBZAX.wa
      },
      h: {
        1: _chunkL7HIBZAX.la,
        2: _chunkL7HIBZAX.na,
        3: _chunkL7HIBZAX.sa,
        4: _chunkL7HIBZAX.xa
      },
      i: {
        1: _chunkL7HIBZAX.ja,
        2: _chunkL7HIBZAX.oa,
        3: _chunkL7HIBZAX.ta,
        4: _chunkL7HIBZAX.ya
      },
      u: {
        1: _chunkL7HIBZAX.ia,
        2: _chunkL7HIBZAX.pa,
        3: _chunkL7HIBZAX.ua,
        4: _chunkL7HIBZAX.za
      },
      b: {
        1: _chunkL7HIBZAX.ha,
        2: _chunkL7HIBZAX.qa,
        3: _chunkL7HIBZAX.va,
        4: _chunkL7HIBZAX.Aa
      }
    },
    la = {
      vec2f: _chunkL7HIBZAX.ma,
      vec2h: _chunkL7HIBZAX.na,
      vec2i: _chunkL7HIBZAX.oa,
      vec2u: _chunkL7HIBZAX.pa,
      "vec2<bool>": _chunkL7HIBZAX.qa,
      vec3f: _chunkL7HIBZAX.ra,
      vec3h: _chunkL7HIBZAX.sa,
      vec3i: _chunkL7HIBZAX.ta,
      vec3u: _chunkL7HIBZAX.ua,
      "vec3<bool>": _chunkL7HIBZAX.va,
      vec4f: _chunkL7HIBZAX.wa,
      vec4h: _chunkL7HIBZAX.xa,
      vec4i: _chunkL7HIBZAX.ya,
      vec4u: _chunkL7HIBZAX.za,
      "vec4<bool>": _chunkL7HIBZAX.Aa,
      mat2x2f: _chunkL7HIBZAX.Ca,
      mat3x3f: _chunkL7HIBZAX.Da,
      mat4x4f: _chunkL7HIBZAX.Ea
    },
    un = {
      vec2f: _chunkL7HIBZAX.ka,
      vec2h: _chunkL7HIBZAX.la,
      vec2i: _chunkL7HIBZAX.ja,
      vec2u: _chunkL7HIBZAX.ia,
      "vec2<bool>": _chunkL7HIBZAX.ha,
      vec3f: _chunkL7HIBZAX.ka,
      vec3h: _chunkL7HIBZAX.la,
      vec3i: _chunkL7HIBZAX.ja,
      vec3u: _chunkL7HIBZAX.ia,
      "vec3<bool>": _chunkL7HIBZAX.ha,
      vec4f: _chunkL7HIBZAX.ka,
      vec4h: _chunkL7HIBZAX.la,
      vec4i: _chunkL7HIBZAX.ja,
      vec4u: _chunkL7HIBZAX.ia,
      "vec4<bool>": _chunkL7HIBZAX.ha,
      mat2x2f: _chunkL7HIBZAX.ma,
      mat3x3f: _chunkL7HIBZAX.ra,
      mat4x4f: _chunkL7HIBZAX.wa
    };
  function je(e, t) {
    var _e$propTypes$t;
    if ((0, _chunkL7HIBZAX.K)(e) || (0, _chunkL7HIBZAX.W)(e)) return (_e$propTypes$t = e.propTypes[t]) != null ? _e$propTypes$t : _chunkL7HIBZAX.aa;
    if (e === _chunkL7HIBZAX.ha || (0, _chunkSLWTVY6K.c)(e)) return _chunkL7HIBZAX.aa;
    var r = t.length;
    if ((0, _chunkL7HIBZAX.C)(e) && r >= 1 && r <= 4) {
      var n = e.type.includes("bool") ? "b" : e.type[4],
        a = pa[n][r];
      if (a) return a;
    }
    return _chunkL7HIBZAX.aa;
  }
  function Qt(e) {
    return (0, _chunkL7HIBZAX.J)(e) || (0, _chunkL7HIBZAX.V)(e) ? e.elementType : e.type in un ? un[e.type] : _chunkL7HIBZAX.aa;
  }
  function Xt(e) {
    if (/^0x[0-9a-f]+$/i.test(e)) return (0, _chunkL7HIBZAX.ba)(e, _chunkL7HIBZAX.fa);
    if (/^0b[01]+$/i.test(e)) return (0, _chunkL7HIBZAX.ba)(`${Number.parseInt(e.slice(2), 2)}`, _chunkL7HIBZAX.fa);
    if (/^-?(?:\d+\.\d*|\d*\.\d+)$/i.test(e)) return (0, _chunkL7HIBZAX.ba)(e, _chunkL7HIBZAX.ga);
    if (/^-?\d+(?:\.\d+)?e-?\d+$/i.test(e)) return (0, _chunkL7HIBZAX.ba)(e, _chunkL7HIBZAX.ga);
    if (/^-?\d+$/i.test(e)) return (0, _chunkL7HIBZAX.ba)(e, _chunkL7HIBZAX.fa);
  }
  var Zt = {
    rank: Number.POSITIVE_INFINITY,
    action: "none"
  };
  function Ae(e) {
    return e.type === "decorated" ? e.inner : e;
  }
  function pn(e) {
    return (0, _chunkL7HIBZAX.C)(e) ? _chunkL7HIBZAX.Ba[e.type] : void 0;
  }
  function ft(e, t) {
    var r = Ae(e),
      n = Ae(t);
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
    if ((0, _chunkL7HIBZAX.C)(r) && (0, _chunkL7HIBZAX.C)(n)) {
      var a = pn(r),
        o = pn(n);
      if (a && o) return ft(a, o);
    }
    return (0, _chunkL7HIBZAX.G)(r) && (0, _chunkL7HIBZAX.G)(n) ? {
      rank: 0,
      action: "none"
    } : Zt;
  }
  function ma(e, t) {
    var r = Ae(e),
      n = Ae(t);
    if (r.type === "ptr" && ft(r.inner, n).rank < Number.POSITIVE_INFINITY) return {
      rank: 0,
      action: "deref"
    };
    if (n.type === "ptr" && ft(r, n.inner).rank < Number.POSITIVE_INFINITY) return {
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
        i = n.type;
      if (o !== i) {
        var s = a[o];
        return {
          rank: a[i] < s ? 10 : 20,
          action: "cast",
          targetType: n
        };
      }
    }
    return Zt;
  }
  function da(e, t, r) {
    var n = ft(e, t);
    return n.rank < Number.POSITIVE_INFINITY ? n : r ? ma(e, t) : Zt;
  }
  function ln(e, t, r) {
    var n,
      a = Number.POSITIVE_INFINITY,
      o = new Map();
    for (var u of t) {
      var d = 0,
        g = [],
        c = !0;
      for (var y of e) {
        var x = da(y, u, r);
        if (x.rank === Number.POSITIVE_INFINITY) {
          c = !1;
          break;
        }
        d += x.rank, g.push(x);
      }
      c && d < a && (a = d, n = u, o.set(n, g));
    }
    if (!n) return;
    var s = o.get(n).map(function (u, d) {
        return Object.assign({
          sourceIndex: d,
          action: u.action
        }, u.action === "cast" && {
          targetType: u.targetType
        });
      }),
      l = s.some(function (u) {
        return u.action === "cast";
      });
    return {
      targetType: n,
      actions: s,
      hasImplicitConversions: l
    };
  }
  function er(e) {
    return e.type === "abstractFloat" ? _chunkL7HIBZAX.ka : e.type === "abstractInt" ? _chunkL7HIBZAX.ja : e;
  }
  function mn(e, t) {
    if (e.length === 0) return;
    var r = (0, _toConsumableArray2.default)(new Set(e.map(Ae))),
      n = t ? (0, _toConsumableArray2.default)(new Set(t.map(Ae))) : r,
      a = ln(e, n, !1);
    if (a) return a;
    var o = ln(e, n, !0);
    if (o) return o.hasImplicitConversions = o.actions.some(function (i) {
      return i.action === "cast";
    }), o;
  }
  function fa(e, t, r, n) {
    if (r.action === "none") return (0, _chunkL7HIBZAX.ba)(t.value, n);
    var a = e.resolve(t.value);
    switch (r.action) {
      case "ref":
        return (0, _chunkL7HIBZAX.ba)(`&${a}`, n);
      case "deref":
        return (0, _chunkL7HIBZAX.ba)(`*${a}`, n);
      case "cast":
        return (0, _chunkL7HIBZAX.ba)(`${e.resolve(n)}(${a})`, n);
      default:
        dt(r.action, "applyActionToSnippet");
    }
  }
  function W(e, t, r) {
    var n = t.map(function (o) {
      return o.dataType;
    });
    if (n.some(function (o) {
      return o === _chunkL7HIBZAX.aa;
    })) return;
    var a = mn(n, r);
    if (a) return a.hasImplicitConversions && console.warn(`Implicit conversions from [
${t.map(function (o) {
      return `  ${o.value}: ${o.dataType.type}`;
    }).join(`,
`)}
] to ${a.targetType.type} are supported, but not recommended.
Consider using explicit conversions instead.`), t.map(function (o, i) {
      var s = a.actions[i];
      return (0, _chunkL7HIBZAX.h)(s, "Action should not be undefined"), fa(e, o, s, a.targetType);
    });
  }
  function tr(e, t, r) {
    return Object.keys(t.propTypes).map(function (a) {
      var _W$, _W;
      var o = r[a];
      if (!o) throw new Error(`Missing property ${a}`);
      var i = t.propTypes[a];
      return (_W$ = (_W = W(e, [o], [i])) == null ? void 0 : _W[0]) != null ? _W$ : o;
    });
  }
  function fe(e) {
    var _Xt$dataType, _Xt;
    if ((0, _chunkL7HIBZAX.ca)(e)) return e;
    if ((0, _chunkL7HIBZAX.x)(e)) return (0, _chunkL7HIBZAX.ba)(e, e[_chunkL7HIBZAX.b]);
    if ((0, _chunkL7HIBZAX.z)(e) || (0, _chunkL7HIBZAX.D)(e)) return (0, _chunkL7HIBZAX.ba)(e, la[e.kind]);
    if (Array.isArray(e)) {
      var _mn;
      var t = e.map(fe).filter(Boolean),
        r = (0, _chunkL7HIBZAX.q)();
      if (!r) throw new Error("Tried to coerce array without a context");
      var n = W(r, t),
        a = (_mn = mn(t.map(function (o) {
          return o.dataType;
        }))) == null ? void 0 : _mn.targetType;
      return !n || !a ? (0, _chunkL7HIBZAX.ba)(e, _chunkL7HIBZAX.aa) : (0, _chunkL7HIBZAX.ba)(n.map(function (o) {
        return o.value;
      }).join(", "), (0, _chunkSFECI7OX.X)(er(a), e.length));
    }
    return typeof e == "string" || typeof e == "function" || typeof e == "object" || typeof e == "symbol" || typeof e > "u" || e === null ? (0, _chunkL7HIBZAX.ba)(e, _chunkL7HIBZAX.aa) : typeof e == "number" || typeof e == "bigint" ? (0, _chunkL7HIBZAX.ba)(e, (_Xt$dataType = (_Xt = Xt(String(e))) == null ? void 0 : _Xt.dataType) != null ? _Xt$dataType : _chunkL7HIBZAX.aa) : typeof e == "boolean" ? (0, _chunkL7HIBZAX.ba)(e, _chunkL7HIBZAX.ha) : (0, _chunkL7HIBZAX.ba)(e, _chunkL7HIBZAX.aa);
  }
  var q = {
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
          return `.value(...).${String(t)}:${(_p = (0, _chunkL7HIBZAX.e)(e)) != null ? _p : "<unnamed>"}`;
        }
      }, _chunkL7HIBZAX.b, je(e[_chunkL7HIBZAX.b], String(t))), q);
    }
  };
  function ze(e, t) {
    var r = t,
      n;
    for (; n = sn(r);) r = n(e);
    return r;
  }
  function dn(e, t) {
    return new rr(e, t);
  }
  var rr = /*#__PURE__*/function () {
    function rr(t, r) {
      (0, _classCallCheck2.default)(this, rr);
      this.dataType = t;
      this._value = r;
      this[_chunkL7HIBZAX.a] = {
        dataType: t
      };
    }
    return (0, _createClass2.default)(rr, [{
      key: "$name",
      value: function $name(t) {
        return (0, _chunkL7HIBZAX.f)(this, t), this;
      }
    }, {
      key: "~resolve",
      value: function resolve(t) {
        var r = t.names.makeUnique((0, _chunkL7HIBZAX.e)(this)),
          n = t.resolveValue(this._value, this.dataType);
        return t.addDeclaration(`const ${r} = ${n};`), r;
      }
    }, {
      key: "toString",
      value: function toString() {
        var _p2;
        return `const:${(_p2 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p2 : "<unnamed>"}`;
      }
    }, {
      key: _chunkL7HIBZAX.c,
      value: function value() {
        var _this = this;
        return new Proxy((0, _defineProperty2.default)({
          "~resolve": function resolve(t) {
            return t.resolve(_this);
          },
          toString: function toString() {
            var _p3;
            return `.value:${(_p3 = (0, _chunkL7HIBZAX.e)(_this)) != null ? _p3 : "<unnamed>"}`;
          }
        }, _chunkL7HIBZAX.b, this.dataType), q);
      }
    }, {
      key: "value",
      get: function get() {
        return (0, _chunkL7HIBZAX.t)() ? this[_chunkL7HIBZAX.c]() : this._value;
      }
    }]);
  }();
  function Be(e) {
    return (e == null ? void 0 : e.resourceType) === "slot";
  }
  function Re(e) {
    return (e == null ? void 0 : e.resourceType) === "derived";
  }
  function Ke(e) {
    return (e == null ? void 0 : e["~providing"]) !== void 0;
  }
  function He(e) {
    return (e == null ? void 0 : e.resourceType) === "accessor";
  }
  function nr(e) {
    return typeof (e == null ? void 0 : e["~resolve"]) == "function";
  }
  function gt(e) {
    return typeof e == "number" || typeof e == "boolean" || typeof e == "string" || nr(e) || (0, _chunkL7HIBZAX.I)(e) || Be(e) || Re(e) || Ke(e);
  }
  function fn(e) {
    return !!e && typeof e == "object" && "getMappedRange" in e && "mapAsync" in e;
  }
  function gn(e) {
    return (e == null ? void 0 : e.resourceType) === "buffer-usage";
  }
  function ar(e) {
    return !!(e != null && e[_chunkL7HIBZAX.a]);
  }
  function ge(e, t) {
    for (var _ref of Object.entries(t)) {
      var _ref2 = (0, _slicedToArray2.default)(_ref, 2);
      var r = _ref2[0];
      var n = _ref2[1];
      e[r] = n, (0, _chunkL7HIBZAX.g)(n) && (0, _chunkL7HIBZAX.e)(n) === void 0 && n.$name(r);
    }
  }
  function cn(e, t, r) {
    var n = (0, _toConsumableArray2.default)(e.matchAll(/:\s*(?<arg>.*?)\s*[,)]/g)).map(function (a) {
      return a ? a[1] : void 0;
    });
    r(Object.fromEntries(t.flatMap(function (a, o) {
      var i = n ? n[o] : void 0;
      return (0, _chunkL7HIBZAX.K)(a) && i !== void 0 ? [[i, a]] : [];
    })));
  }
  function Pe(e, t, r) {
    var _n$;
    var n = e.match(/->\s(?<output>[\w\d_]+)\s{/),
      a = n ? (_n$ = n[1]) == null ? void 0 : _n$.trim() : void 0;
    (0, _chunkL7HIBZAX.K)(t) && a && !/\s/g.test(a) && r((0, _defineProperty2.default)({}, a, t));
  }
  function ga(e) {
    return new RegExp(`(?<![\\w\\$_.])${e.replaceAll(".", "\\.").replaceAll("$", "\\$")}(?![\\w\\$_])`, "g");
  }
  function ce(e, t, r) {
    return Object.entries(t).reduce(function (n, _ref3) {
      var _map;
      var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
        a = _ref4[0],
        o = _ref4[1];
      return gt(o) || (0, _chunkL7HIBZAX.U)(o) ? n.replaceAll(ga(a), e.resolve(o)) : o !== null && typeof o == "object" ? ((_map = (0, _toConsumableArray2.default)(r.matchAll(new RegExp(`${a.replaceAll(".", "\\.").replaceAll("$", "\\$")}\\.(?<prop>.*?)(?![\\w\\$_])`, "g"))).map(function (s) {
        return s[1];
      })) != null ? _map : []).reduce(function (s, l) {
        return l && l in o ? ce(e, (0, _defineProperty2.default)({}, `${a}.${l}`, o[l]), s) : s;
      }, n) : n;
    }, r);
  }
  function yn(e) {
    return new or(e);
  }
  var or = /*#__PURE__*/function () {
    function or(t) {
      (0, _classCallCheck2.default)(this, or);
      this.externalsToApply = [];
      this.declaration = t;
    }
    return (0, _createClass2.default)(or, [{
      key: "$uses",
      value: function $uses(t) {
        return this.externalsToApply.push(t), this;
      }
    }, {
      key: "~resolve",
      value: function resolve(t) {
        var r = {};
        for (var a of this.externalsToApply) ge(r, a);
        var n = ce(t, r, this.declaration);
        return t.addDeclaration(n), "";
      }
    }, {
      key: "toString",
      value: function toString() {
        return `declare: ${this.declaration}`;
      }
    }]);
  }();
  var Tn = new WeakMap();
  function xn(e) {
    return Tn.get(e);
  }
  function hn(e, t, r) {
    return Tn.set(e, {
      ast: t,
      externals: r
    }), e;
  }
  function wn(e) {
    return function () {
      throw new Error(`The function "${e != null ? e : "<unnamed>"}" is invokable only on the GPU. If you want to use it on the CPU, mark it with the "kernel & js" directive.`);
    };
  }
  function re(e, t) {
    var r = [];
    typeof t == "string" && (e.isEntry ? ((0, _chunkL7HIBZAX.K)(e.argTypes[0]) && r.push({
      In: e.argTypes[0]
    }), (0, _chunkL7HIBZAX.K)(e.returnType) && r.push({
      Out: e.returnType
    })) : (cn(t, e.argTypes, function (o) {
      return r.push(o);
    }), Pe(t, e.returnType, function (o) {
      return r.push(o);
    })));
    var n = {
        applyExternals: function applyExternals(o) {
          r.push(o);
        },
        resolve: function resolve(o) {
          var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var s = {};
          for (var u of r) ge(s, u);
          var l = o.names.makeUnique((0, _chunkL7HIBZAX.e)(this));
          if (typeof t == "string") {
            var _u = "";
            if (e.isEntry) {
              var g = (0, _chunkL7HIBZAX.K)(e.argTypes[0]) ? "(in: In)" : "()",
                c = (0, _chunkL7HIBZAX.I)(e.returnType) ? (0, _chunkSFECI7OX.ba)(e.returnType) : "",
                y = e.returnType !== _chunkL7HIBZAX.y ? (0, _chunkL7HIBZAX.K)(e.returnType) ? "-> Out" : `-> ${c !== "" ? c : "@location(0)"} ${o.resolve(e.returnType)}` : "";
              _u = `${g} ${y} `;
            }
            var d = ce(o, s, `${_u}${t.trim()}`);
            o.addDeclaration(`${i}fn ${l}${d}`);
          } else {
            var _u2$ast;
            var _u2 = xn(t);
            if (_u2 != null && _u2.externals) {
              var x = Object.fromEntries(Object.entries(_u2.externals).filter(function (_ref5) {
                var _ref6 = (0, _slicedToArray2.default)(_ref5, 1),
                  w = _ref6[0];
                return !(w in s);
              }));
              ge(s, x);
            }
            var _d = (_u2$ast = _u2 == null ? void 0 : _u2.ast) != null ? _u2$ast : o.transpileFn(String(t)),
              _g = _d.externalNames.filter(function (x) {
                return !(x in s);
              });
            if (_g.length > 0) throw new _chunkL7HIBZAX.l((0, _chunkL7HIBZAX.e)(this), _g);
            var _o$fnToWgsl = o.fnToWgsl({
                args: e.argTypes.map(function (x, w) {
                  var _d$params$w;
                  return (0, _chunkL7HIBZAX.ba)(((_d$params$w = _d.params[w]) == null ? void 0 : _d$params$w.type) === _tinyest.FuncParameterType.identifier ? _d.params[w].name : `_arg_${w}`, x);
                }),
                argAliases: Object.fromEntries(_d.params.flatMap(function (x, w) {
                  return x.type === _tinyest.FuncParameterType.destructuredObject ? x.props.map(function (_ref7) {
                    var b = _ref7.name,
                      U = _ref7.alias;
                    return [U, (0, _chunkL7HIBZAX.ba)(`_arg_${w}.${b}`, e.argTypes[w].propTypes[b])];
                  }) : [];
                })),
                returnType: e.returnType,
                body: _d.body,
                externalMap: s
              }),
              _c = _o$fnToWgsl.head,
              _y = _o$fnToWgsl.body;
            o.addDeclaration(`${i}fn ${l}${o.resolve(_c)}${o.resolve(_y)}`);
          }
          return l;
        }
      },
      a = (0, _chunkL7HIBZAX.e)(t);
    return a !== void 0 && (0, _chunkL7HIBZAX.f)(n, a), n;
  }
  function ca(e) {
    var t = 0;
    return Object.fromEntries(Object.entries(e).map(function (_ref8) {
      var _ref9 = (0, _slicedToArray2.default)(_ref8, 2),
        r = _ref9[0],
        n = _ref9[1];
      if ((0, _chunkSFECI7OX.aa)(n)) return [r, n];
      var a = (0, _chunkL7HIBZAX._)(n);
      return a !== void 0 ? (t = a + 1, [r, n]) : [r, (0, _chunkSFECI7OX._)(t++, n)];
    }));
  }
  function ne(e) {
    return (0, _chunkL7HIBZAX.$)(e) ? (0, _chunkL7HIBZAX.T)(e) || (0, _chunkL7HIBZAX._)(e) !== void 0 ? e : (0, _chunkSFECI7OX._)(0, e) : (0, _chunkSFECI7OX.ca)(ca(e));
  }
  function ae(e) {
    for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      t[_key - 1] = arguments[_key];
    }
    return ya(e) ? Ta.apply(void 0, [e].concat(t)) : e;
  }
  function ya(e) {
    return Array.isArray(e) && "raw" in e && Array.isArray(e.raw) && e.raw.every(function (t) {
      return typeof t == "string";
    });
  }
  function Ta(e) {
    for (var _len2 = arguments.length, t = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      t[_key2 - 1] = arguments[_key2];
    }
    return e.slice(1).reduce(function (r, n, a) {
      return `${r}${t[a]}${n}`;
    }, e[0]);
  }
  function Sn(e) {
    var _e$workgroupSize$, _e$workgroupSize$2, _e$workgroupSize$3;
    var t = {
        argTypes: e.in && Object.keys(e.in).length !== 0 ? [ne(e.in)] : [],
        returnType: _chunkL7HIBZAX.y,
        workgroupSize: [(_e$workgroupSize$ = e.workgroupSize[0]) != null ? _e$workgroupSize$ : 1, (_e$workgroupSize$2 = e.workgroupSize[1]) != null ? _e$workgroupSize$2 : 1, (_e$workgroupSize$3 = e.workgroupSize[2]) != null ? _e$workgroupSize$3 : 1],
        isEntry: !0
      },
      r = function r(n) {
        for (var _len3 = arguments.length, a = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          a[_key3 - 1] = arguments[_key3];
        }
        return xa(t, e.workgroupSize, ae.apply(void 0, [n].concat(a)));
      };
    return Object.assign(Object.assign(r, t), {
      does: r
    });
  }
  function xa(e, t, r) {
    var n = re(e, r),
      a = e.argTypes[0];
    return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
      shell: e,
      $uses: function $uses(o) {
        return n.applyExternals(o), this;
      }
    }, _chunkL7HIBZAX.d, n), "$name", function $name(o) {
      return (0, _chunkL7HIBZAX.f)(n, o), (0, _chunkL7HIBZAX.g)(a) && a.$name(`${o}_Input`), this;
    }), "~resolve", function resolve(o) {
      return n.resolve(o, `@compute @workgroup_size(${t.join(", ")}) `);
    }), "toString", function toString() {
      var _p4;
      return `computeFn:${(_p4 = (0, _chunkL7HIBZAX.e)(n)) != null ? _p4 : "<unnamed>"}`;
    });
  }
  function vn(e, t) {
    var r = (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _chunkL7HIBZAX.a, !0), "argTypes", e), "returnType", t != null ? t : _chunkL7HIBZAX.y), "isEntry", !1),
      n = function n(a) {
        for (var _len4 = arguments.length, o = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          o[_key4 - 1] = arguments[_key4];
        }
        return wa(r, ae.apply(void 0, [a].concat(o)));
      };
    return Object.assign(Object.assign(n, r), {
      does: n
    });
  }
  function ir(e) {
    return !!(e != null && e[_chunkL7HIBZAX.a]) && (e == null ? void 0 : e.resourceType) === "function";
  }
  function ha(_ref11) {
    var _p5;
    var _ref12 = (0, _slicedToArray2.default)(_ref11, 2),
      e = _ref12[0],
      t = _ref12[1];
    return `${(_p5 = (0, _chunkL7HIBZAX.e)(e)) != null ? _p5 : "<unnamed>"}=${t}`;
  }
  function wa(e, t) {
    var r = re(e, t),
      n = (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _chunkL7HIBZAX.a, {
        implementation: t,
        argTypes: e.argTypes
      }), "shell", e), "resourceType", "function"), "$uses", function $uses(i) {
        return r.applyExternals(i), this;
      }), _chunkL7HIBZAX.d, r), "$name", function $name(i) {
        return (0, _chunkL7HIBZAX.f)(r, i), this;
      }), "with", function _with(i, s) {
        return Dn(o, [[He(i) ? i.slot : i, s]]);
      }), "~resolve", function resolve(i) {
        if (typeof t == "string") return r.resolve(i);
        var s = i;
        if (s.callStack === void 0) throw new Error("Cannot resolve a TGSL function outside of a generation context");
        try {
          return s.callStack.push(e.returnType), r.resolve(i);
        } finally {
          s.callStack.pop();
        }
      }),
      a = (0, _chunkL7HIBZAX.ea)(function () {
        if (typeof t == "string") throw new Error("Cannot execute on the CPU functions constructed with raw WGSL");
        return t.apply(void 0, arguments);
      }, function () {
        var _e$returnType;
        for (var _len5 = arguments.length, i = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          i[_key5] = arguments[_key5];
        }
        return (0, _chunkL7HIBZAX.ba)(new ct(o, i.map(function (s) {
          return s.value;
        })), (_e$returnType = e.returnType) != null ? _e$returnType : _chunkL7HIBZAX.aa);
      }, e.argTypes);
    a[_chunkL7HIBZAX.a].implementation = t;
    var o = Object.assign(a, n);
    return Object.defineProperty(o, "toString", {
      value: function value() {
        var _p6;
        return `fn:${(_p6 = (0, _chunkL7HIBZAX.e)(r)) != null ? _p6 : "<unnamed>"}`;
      }
    }), o;
  }
  function Dn(e, t) {
    var r = (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _chunkL7HIBZAX.a, {
        implementation: e[_chunkL7HIBZAX.a].implementation,
        argTypes: e[_chunkL7HIBZAX.a].argTypes
      }), "resourceType", "function"), "shell", e.shell), "~providing", {
        inner: e,
        pairs: t
      }), "$uses", function $uses(o) {
        return e.$uses(o), this;
      }), _chunkL7HIBZAX.d, e), "$name", function $name(o) {
        return e.$name(o), this;
      }), "with", function _with(o, i) {
        return Dn(a, [].concat((0, _toConsumableArray2.default)(t), [[He(o) ? o.slot : o, i]]));
      }),
      n = (0, _chunkL7HIBZAX.ea)(function () {
        return e.apply(void 0, arguments);
      }, function () {
        var _e$shell$returnType;
        for (var _len6 = arguments.length, o = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          o[_key6] = arguments[_key6];
        }
        return (0, _chunkL7HIBZAX.ba)(new ct(a, o.map(function (i) {
          return i.value;
        })), (_e$shell$returnType = e.shell.returnType) != null ? _e$shell$returnType : _chunkL7HIBZAX.aa);
      }, e.shell.argTypes),
      a = Object.assign(n, r);
    return Object.defineProperty(a, "toString", {
      value: function value() {
        var _p7;
        return `fn:${(_p7 = (0, _chunkL7HIBZAX.e)(e)) != null ? _p7 : "<unnamed>"}[${t.map(ha).join(", ")}]`;
      }
    }), a[_chunkL7HIBZAX.a].implementation = e[_chunkL7HIBZAX.a].implementation, a;
  }
  var ct = /*#__PURE__*/function () {
    function ct(t, r) {
      (0, _classCallCheck2.default)(this, ct);
      this._fn = t;
      this._params = r;
      this[_chunkL7HIBZAX.d] = t;
    }
    return (0, _createClass2.default)(ct, [{
      key: "~resolve",
      value: function resolve(t) {
        return t.resolve(`${t.resolve(this._fn)}(${this._params.map(function (r) {
          return t.resolve(r);
        }).join(", ")})`);
      }
    }, {
      key: "toString",
      value: function toString() {
        var _p8;
        return `call:${(_p8 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p8 : "<unnamed>"}`;
      }
    }]);
  }();
  function Fn(e) {
    var t = {
        argTypes: e.in && Object.keys(e.in).length !== 0 ? [ne(e.in)] : [],
        targets: e.out,
        returnType: ne(e.out),
        isEntry: !0
      },
      r = function r(n) {
        for (var _len7 = arguments.length, a = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
          a[_key7 - 1] = arguments[_key7];
        }
        return ba(t, ae.apply(void 0, [n].concat(a)));
      };
    return Object.assign(Object.assign(r, t), {
      does: r
    });
  }
  function ba(e, t) {
    var r = re(e, t),
      n = e.returnType,
      a = e.argTypes[0];
    return typeof t == "string" && Pe(t, n, function (i) {
      return r.applyExternals(i);
    }), (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
      shell: e,
      outputType: n,
      $uses: function $uses(i) {
        return r.applyExternals(i), this;
      }
    }, _chunkL7HIBZAX.d, r), "$name", function $name(i) {
      return (0, _chunkL7HIBZAX.f)(r, i), (0, _chunkL7HIBZAX.g)(n) && n.$name(`${i}_Output`), (0, _chunkL7HIBZAX.g)(a) && a.$name(`${i}_Input`), this;
    }), "~resolve", function resolve(i) {
      if (typeof t == "string") return r.resolve(i, "@fragment ");
      var s = i;
      if (s.callStack === void 0) throw new Error("Cannot resolve a TGSL function outside of a generation context");
      try {
        return s.callStack.push(n), r.resolve(i, "@fragment ");
      } finally {
        s.callStack.pop();
      }
    }), "toString", function toString() {
      var _p9;
      return `fragmentFn:${(_p9 = (0, _chunkL7HIBZAX.e)(r)) != null ? _p9 : "<unnamed>"}`;
    });
  }
  function In(e) {
    var _e$in;
    var t = {
        attributes: [(_e$in = e.in) != null ? _e$in : {}],
        returnType: Object.keys(e.out).length !== 0 ? ne(e.out) : void 0,
        argTypes: e.in && Object.keys(e.in).length !== 0 ? [ne(e.in)] : [],
        isEntry: !0
      },
      r = function r(n) {
        for (var _len8 = arguments.length, a = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
          a[_key8 - 1] = arguments[_key8];
        }
        return Sa(t, ae.apply(void 0, [n].concat(a)));
      };
    return Object.assign(Object.assign(r, t), {
      does: r
    });
  }
  function Sa(e, t) {
    var r = re(e, t),
      n = e.returnType,
      a = e.argTypes[0];
    return typeof t == "string" && Pe(t, n, function (o) {
      return r.applyExternals(o);
    }), (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
      shell: e,
      outputType: n,
      inputType: a,
      $uses: function $uses(o) {
        return r.applyExternals(o), this;
      }
    }, _chunkL7HIBZAX.d, r), "$name", function $name(o) {
      return (0, _chunkL7HIBZAX.f)(r, o), (0, _chunkL7HIBZAX.g)(n) && n.$name(`${o}_Output`), (0, _chunkL7HIBZAX.g)(a) && a.$name(`${o}_Input`), this;
    }), "~resolve", function resolve(o) {
      if (typeof t == "string") return r.resolve(o, "@vertex ");
      var i = o;
      if (i.callStack === void 0) throw new Error("Cannot resolve a TGSL function outside of a generation context");
      try {
        return i.callStack.push(n), r.resolve(o, "@vertex ");
      } finally {
        i.callStack.pop();
      }
    }), "toString", function toString() {
      var _p10;
      return `vertexFn:${(_p10 = (0, _chunkL7HIBZAX.e)(r)) != null ? _p10 : "<unnamed>"}`;
    });
  }
  var oe = exports.RandomNameRegistry = /*#__PURE__*/function () {
      function oe() {
        (0, _classCallCheck2.default)(this, oe);
        this.lastUniqueId = 0;
      }
      return (0, _createClass2.default)(oe, [{
        key: "makeUnique",
        value: function makeUnique(t) {
          var r;
          return t ? (r = t.replaceAll(/\s/g, "_"), r = r.replaceAll(/[^\w\d]/g, "")) : r = "item", `${r}_${this.lastUniqueId++}`;
        }
      }]);
    }(),
    ie = exports.StrictNameRegistry = /*#__PURE__*/function () {
      function ie() {
        (0, _classCallCheck2.default)(this, ie);
        this._usedNames = new Set();
      }
      return (0, _createClass2.default)(ie, [{
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
  function qe(e) {
    return typeof (e == null ? void 0 : e.format) == "string";
  }
  function Un(e, t) {
    var r = [];
    if ((0, _chunkL7HIBZAX.$)(e)) {
      var _Z;
      if (!qe(t)) throw new Error("Shader expected a single attribute, not a record of attributes to be passed in.");
      return r.push(t._layout), {
        usedVertexLayouts: r,
        bufferDefinitions: [{
          arrayStride: t._layout.stride,
          stepMode: t._layout.stepMode,
          attributes: [{
            format: t.format,
            offset: t.offset,
            shaderLocation: (_Z = (0, _chunkL7HIBZAX._)(e)) != null ? _Z : 0
          }]
        }]
      };
    }
    var n = [],
      a = new WeakMap(),
      o = 0;
    for (var _ref15 of Object.entries(e)) {
      var _Z2;
      var _ref16 = (0, _slicedToArray2.default)(_ref15, 2);
      var i = _ref16[0];
      var s = _ref16[1];
      if ((0, _chunkSFECI7OX.aa)(s)) continue;
      var l = t[i];
      if (!l) throw new Error(`An attribute by the name of '${i}' was not provided to the shader.`);
      var u = l._layout,
        d = a.get(u);
      d || (r.push(u), d = [], n.push({
        arrayStride: u.stride,
        stepMode: u.stepMode,
        attributes: d
      }), a.set(u, d)), o = (_Z2 = (0, _chunkL7HIBZAX._)(s)) != null ? _Z2 : o, d.push({
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
  var va = ["bool", "f32", "f16", "i32", "u32", "vec2f", "vec3f", "vec4f", "vec2h", "vec3h", "vec4h", "vec2i", "vec3i", "vec4i", "vec2u", "vec3u", "vec4u", "vec2<bool>", "vec3<bool>", "vec4<bool>", "mat2x2f", "mat3x3f", "mat4x4f"];
  function Da(e) {
    return va.includes(e.type);
  }
  function sr(e, _ref17) {
    var _ref18 = (0, _slicedToArray2.default)(_ref17, 2),
      t = _ref18[0],
      r = _ref18[1];
    return `  ${(0, _chunkSFECI7OX.ba)(r)}${t}: ${e.resolve(r)},
`;
  }
  function Fa(e, t) {
    var r = e.names.makeUnique((0, _chunkL7HIBZAX.e)(t));
    return e.addDeclaration(`
struct ${r} {
${Object.entries(t.propTypes).map(function (n) {
      return sr(e, n);
    }).join("")}}
`), r;
  }
  function Ia(e, t) {
    var r = e.names.makeUnique((0, _chunkL7HIBZAX.e)(t));
    return e.addDeclaration(`
struct ${r} {
${Object.entries(t.propTypes).map(function (n) {
      return qe(n[1]) ? sr(e, [n[0], _chunkSFECI7OX.b[n[1].format]]) : sr(e, n);
    }).join("")}
}
`), r;
  }
  function Ua(e, t) {
    var r = e.resolve(t.elementType);
    return t.elementCount === 0 ? `array<${r}>` : `array<${r}, ${t.elementCount}>`;
  }
  function Aa(e, t) {
    var r = e.resolve(qe(t.elementType) ? _chunkSFECI7OX.b[t.elementType.format] : t.elementType);
    return t.elementCount === 0 ? `array<${r}>` : `array<${r}, ${t.elementCount}>`;
  }
  function ur(e, t) {
    if ((0, _chunkL7HIBZAX.U)(t)) return t.type === "unstruct" ? Ia(e, t) : t.type === "disarray" ? Aa(e, t) : t.type === "loose-decorated" ? e.resolve(qe(t.inner) ? _chunkSFECI7OX.b[t.inner.format] : t.inner) : e.resolve(_chunkSFECI7OX.b[t.type]);
    if (Da(t)) return t.type;
    if (t.type === "struct") return Fa(e, t);
    if (t.type === "array") return Ua(e, t);
    if (t.type === "atomic") return `atomic<${ur(e, t.inner)}>`;
    if (t.type === "decorated") return e.resolve(t.inner);
    if (t.type === "ptr") return t.addressSpace === "storage" ? `ptr<storage, ${e.resolve(t.inner)}, ${t.access === "read-write" ? "read_write" : t.access}>` : `ptr<${t.addressSpace}, ${e.resolve(t.inner)}>`;
    if (t.type === "abstractInt" || t.type === "abstractFloat") throw new Error("Abstract types have no concrete representation in WGSL");
    if (t.type === "void") throw new Error("Void has no representation in WGSL");
    dt(t, "resolveData");
  }
  function Ba(e, t) {
    var r = "size" in e ? e.size : e.currentByteOffset,
      n = t - 1,
      a = r & n;
    "skipBytes" in e ? e.skipBytes(t - a & n) : e.add(t - a & n);
  }
  var R = Ba;
  var An = new WeakMap();
  function yt(e) {
    var t = An.get(e);
    if (t) return t;
    var r = new _typedBinary.Measurer(),
      n = {},
      a;
    for (var o in e.propTypes) {
      var i = e.propTypes[o];
      if (i === void 0) throw new Error(`Property ${o} is undefined in struct`);
      var s = r.size;
      R(r, (0, _chunkL7HIBZAX.W)(e) ? (0, _chunkSFECI7OX.T)(i) : (0, _chunkSFECI7OX.S)(i)), a && (a.padding = r.size - s);
      var l = (0, _chunkSFECI7OX.V)(i);
      n[o] = {
        offset: r.size,
        size: l
      }, a = n[o], r.add(l);
    }
    return a && (a.padding = (0, _chunkSFECI7OX.a)((0, _chunkSFECI7OX.V)(e), (0, _chunkSFECI7OX.S)(e)) - r.size), An.set(e, n), n;
  }
  var xt = function () {
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
    mr = {
      u32: "setUint32",
      i32: "setInt32",
      f32: "setFloat32"
    };
  function Tt(e, t, r) {
    if ((0, _chunkL7HIBZAX.M)(e) || (0, _chunkL7HIBZAX.S)(e)) return Tt(e.inner, t, r);
    if ((0, _chunkL7HIBZAX.K)(e) || (0, _chunkL7HIBZAX.W)(e)) {
      var a = yt(e),
        o = Object.entries(a).sort(function (s, l) {
          return s[1].offset - l[1].offset;
        }),
        i = "";
      for (var _ref19 of o) {
        var _ref20 = (0, _slicedToArray2.default)(_ref19, 2);
        var s = _ref20[0];
        var l = _ref20[1];
        var u = e.propTypes[s];
        u && (i += Tt(u, `(${t} + ${l.offset})`, `${r}.${s}`));
      }
      return i;
    }
    if ((0, _chunkL7HIBZAX.J)(e) || (0, _chunkL7HIBZAX.V)(e)) {
      var _a2 = e,
        _o = (0, _chunkSFECI7OX.a)((0, _chunkSFECI7OX.V)(_a2.elementType), (0, _chunkSFECI7OX.S)(_a2.elementType)),
        _i = "";
      return _i += `for (let i = 0; i < ${_a2.elementCount}; i++) {
`, _i += Tt(_a2.elementType, `(${t} + i * ${_o})`, `${r}[i]`), _i += `}
`, _i;
    }
    if ((0, _chunkL7HIBZAX.C)(e)) {
      var _a3 = lr[e.type],
        _o2 = "",
        _i2 = mr[_a3],
        _s = ["x", "y", "z", "w"],
        _l = (0, _chunkL7HIBZAX.A)(e) ? 2 : (0, _chunkL7HIBZAX.B)(e) ? 3 : 4;
      for (var _u3 = 0; _u3 < _l; _u3++) _o2 += `output.${_i2}((${t} + ${_u3 * 4}), ${r}.${_s[_u3]}, littleEndian);
`;
      return _o2;
    }
    if ((0, _chunkL7HIBZAX.G)(e)) {
      var _a4 = lr[e.type],
        _o3 = mr[_a4],
        _i3 = (0, _chunkL7HIBZAX.E)(e) ? 2 : (0, _chunkL7HIBZAX.F)(e) ? 3 : 4,
        _s2 = _i3 * _i3,
        _l2 = (0, _chunkSFECI7OX.a)(_i3 * 4, 8),
        _u4 = "";
      for (var d = 0; d < _s2; d++) {
        var g = Math.floor(d / _i3),
          c = d % _i3,
          y = g * _l2 + c * 4;
        _u4 += `output.${_o3}((${t} + ${y}), ${r}.columns[${g}].${["x", "y", "z", "w"][c]}, littleEndian);
`;
      }
      return _u4;
    }
    var n = lr[e.type];
    return `output.${mr[n]}(${t}, ${r}, littleEndian);
`;
  }
  function ht(e) {
    if (pr.has(e)) return pr.get(e);
    var t = Tt(e, "offset", "value"),
      r = new Function("output", "offset", "value", "littleEndian=true", t);
    return pr.set(e, r), r;
  }
  var Ce = {
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
      var n = (0, _chunkSFECI7OX.S)(t);
      R(e, n);
      for (var _ref21 of Object.entries(t.propTypes)) {
        var _ref22 = (0, _slicedToArray2.default)(_ref21, 2);
        var a = _ref22[0];
        var o = _ref22[1];
        R(e, (0, _chunkSFECI7OX.S)(o)), se(e, o, r[a]);
      }
      R(e, n);
    },
    array: function array(e, t, r) {
      if (t.elementCount === 0) throw new Error("Cannot write using a runtime-sized schema.");
      var n = (0, _chunkSFECI7OX.S)(t);
      R(e, n);
      var a = e.currentByteOffset;
      for (var o = 0; o < Math.min(t.elementCount, r.length); o++) R(e, n), se(e, t.elementType, r[o]);
      e.seekTo(a + (0, _chunkSFECI7OX.V)(t));
    },
    ptr: function ptr() {
      throw new Error("Pointers are not host-shareable");
    },
    atomic: function atomic(e, t, r) {
      var _Ce$t$inner$type;
      (_Ce$t$inner$type = Ce[t.inner.type]) == null || _Ce$t$inner$type.call(Ce, e, t, r);
    },
    decorated: function decorated(e, t, r) {
      var _Ce$t$inner$type2, _t$inner;
      var n = (0, _chunkSFECI7OX.T)(t);
      R(e, n);
      var a = e.currentByteOffset;
      (_Ce$t$inner$type2 = Ce[(_t$inner = t.inner) == null ? void 0 : _t$inner.type]) != null && _Ce$t$inner$type2.call(Ce, e, t.inner, r), e.seekTo(a + (0, _chunkSFECI7OX.V)(t));
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
      var n = (0, _chunkSFECI7OX.S)(t);
      R(e, n);
      var a = e.currentByteOffset;
      for (var o = 0; o < Math.min(t.elementCount, r.length); o++) {
        var _Ce$t$elementType$typ, _t$elementType;
        R(e, n), (_Ce$t$elementType$typ = Ce[(_t$elementType = t.elementType) == null ? void 0 : _t$elementType.type]) == null ? void 0 : _Ce$t$elementType$typ.call(Ce, e, t.elementType, r[o]);
      }
      e.seekTo(a + (0, _chunkSFECI7OX.V)(t));
    },
    unstruct: function unstruct(e, t, r) {
      for (var _ref23 of Object.entries(t.propTypes)) {
        var _Ce$a$type;
        var _ref24 = (0, _slicedToArray2.default)(_ref23, 2);
        var n = _ref24[0];
        var a = _ref24[1];
        (_Ce$a$type = Ce[a.type]) == null || _Ce$a$type.call(Ce, e, a, r[n]);
      }
    },
    "loose-decorated": function looseDecorated(e, t, r) {
      var _t$inner2;
      var n = (0, _chunkSFECI7OX.T)(t);
      R(e, n);
      var a = e.currentByteOffset,
        o = Ce[(_t$inner2 = t.inner) == null ? void 0 : _t$inner2.type];
      return o != null && o(e, t.inner, r), e.seekTo(a + (0, _chunkSFECI7OX.V)(t)), r;
    }
  };
  function se(e, t, r) {
    var n = Ce[t.type];
    if (!n) throw new Error(`Cannot write data of type '${t.type}'.`);
    n(e, t, r);
  }
  var ye = {
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
      return (0, _chunkL7HIBZAX.ma)(e.readFloat32(), e.readFloat32());
    },
    vec3f: function vec3f(e) {
      return (0, _chunkL7HIBZAX.ra)(e.readFloat32(), e.readFloat32(), e.readFloat32());
    },
    vec4f: function vec4f(e) {
      return (0, _chunkL7HIBZAX.wa)(e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32());
    },
    vec2h: function vec2h(e) {
      return (0, _chunkL7HIBZAX.na)(e.readFloat16(), e.readFloat16());
    },
    vec3h: function vec3h(e) {
      return (0, _chunkL7HIBZAX.sa)(e.readFloat16(), e.readFloat16(), e.readFloat16());
    },
    vec4h: function vec4h(e) {
      return (0, _chunkL7HIBZAX.xa)(e.readFloat16(), e.readFloat16(), e.readFloat16(), e.readFloat16());
    },
    vec2i: function vec2i(e) {
      return (0, _chunkL7HIBZAX.oa)(e.readInt32(), e.readInt32());
    },
    vec3i: function vec3i(e) {
      return (0, _chunkL7HIBZAX.ta)(e.readInt32(), e.readInt32(), e.readInt32());
    },
    vec4i: function vec4i(e) {
      return (0, _chunkL7HIBZAX.ya)(e.readInt32(), e.readInt32(), e.readInt32(), e.readInt32());
    },
    vec2u: function vec2u(e) {
      return (0, _chunkL7HIBZAX.pa)(e.readUint32(), e.readUint32());
    },
    vec3u: function vec3u(e) {
      return (0, _chunkL7HIBZAX.ua)(e.readUint32(), e.readUint32(), e.readUint32());
    },
    vec4u: function vec4u(e) {
      return (0, _chunkL7HIBZAX.za)(e.readUint32(), e.readUint32(), e.readUint32(), e.readUint32());
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
      return (0, _chunkL7HIBZAX.Ca)(e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32());
    },
    mat3x3f: function mat3x3f(e) {
      var t = function t() {
        var r = e.readFloat32();
        return e.readFloat32(), r;
      };
      return (0, _chunkL7HIBZAX.Da)(e.readFloat32(), e.readFloat32(), t(), e.readFloat32(), e.readFloat32(), t(), e.readFloat32(), e.readFloat32(), t());
    },
    mat4x4f: function mat4x4f(e) {
      return (0, _chunkL7HIBZAX.Ea)(e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32());
    },
    struct: function struct(e, t) {
      var r = (0, _chunkSFECI7OX.S)(t);
      R(e, r);
      var n = {};
      for (var _ref25 of Object.entries(t.propTypes)) {
        var _ref26 = (0, _slicedToArray2.default)(_ref25, 2);
        var a = _ref26[0];
        var o = _ref26[1];
        R(e, (0, _chunkSFECI7OX.S)(o)), n[a] = N(e, o);
      }
      return R(e, r), n;
    },
    array: function array(e, t) {
      if (t.elementCount === 0) throw new Error("Cannot read using a runtime-sized schema.");
      var r = (0, _chunkSFECI7OX.S)(t),
        n = [];
      for (var a = 0; a < t.elementCount; a++) {
        R(e, r);
        var o = t.elementType,
          i = N(e, o);
        n.push(i);
      }
      return R(e, r), n;
    },
    ptr: function ptr() {
      throw new Error("Pointers are not host-shareable");
    },
    atomic: function atomic(e, t) {
      return N(e, t.inner);
    },
    decorated: function decorated(e, t) {
      var r = (0, _chunkSFECI7OX.T)(t);
      R(e, r);
      var n = e.currentByteOffset,
        a = N(e, t.inner);
      return e.seekTo(n + (0, _chunkSFECI7OX.V)(t)), a;
    },
    uint8: function uint8(e) {
      return e.readUint8();
    },
    uint8x2: function uint8x2(e) {
      return (0, _chunkL7HIBZAX.pa)(e.readUint8(), e.readUint8());
    },
    uint8x4: function uint8x4(e) {
      return (0, _chunkL7HIBZAX.za)(e.readUint8(), e.readUint8(), e.readUint8(), e.readUint8());
    },
    sint8: function sint8(e) {
      return e.readInt8();
    },
    sint8x2: function sint8x2(e) {
      return (0, _chunkL7HIBZAX.oa)(e.readInt8(), e.readInt8());
    },
    sint8x4: function sint8x4(e) {
      return (0, _chunkL7HIBZAX.ya)(e.readInt8(), e.readInt8(), e.readInt8(), e.readInt8());
    },
    unorm8: function unorm8(e) {
      return e.readUint8() / 255;
    },
    unorm8x2: function unorm8x2(e) {
      return (0, _chunkL7HIBZAX.ma)(e.readUint8() / 255, e.readUint8() / 255);
    },
    unorm8x4: function unorm8x4(e) {
      return (0, _chunkL7HIBZAX.wa)(e.readUint8() / 255, e.readUint8() / 255, e.readUint8() / 255, e.readUint8() / 255);
    },
    snorm8: function snorm8(e) {
      return (e.readUint8() - 128) / 127;
    },
    snorm8x2: function snorm8x2(e) {
      return (0, _chunkL7HIBZAX.ma)((e.readUint8() - 128) / 127, (e.readUint8() - 128) / 127);
    },
    snorm8x4: function snorm8x4(e) {
      return (0, _chunkL7HIBZAX.wa)((e.readUint8() - 128) / 127, (e.readUint8() - 128) / 127, (e.readUint8() - 128) / 127, (e.readUint8() - 128) / 127);
    },
    uint16: function uint16(e) {
      return e.readUint16();
    },
    uint16x2: function uint16x2(e) {
      return (0, _chunkL7HIBZAX.pa)(e.readUint16(), e.readUint16());
    },
    uint16x4: function uint16x4(e) {
      return (0, _chunkL7HIBZAX.za)(e.readUint16(), e.readUint16(), e.readUint16(), e.readUint16());
    },
    sint16: function sint16(e) {
      return e.readInt16();
    },
    sint16x2: function sint16x2(e) {
      return (0, _chunkL7HIBZAX.oa)(e.readInt16(), e.readInt16());
    },
    sint16x4: function sint16x4(e) {
      return (0, _chunkL7HIBZAX.ya)(e.readInt16(), e.readInt16(), e.readInt16(), e.readInt16());
    },
    unorm16: function unorm16(e) {
      return e.readUint16() / 65535;
    },
    unorm16x2: function unorm16x2(e) {
      return (0, _chunkL7HIBZAX.ma)(e.readUint16() / 65535, e.readUint16() / 65535);
    },
    unorm16x4: function unorm16x4(e) {
      return (0, _chunkL7HIBZAX.wa)(e.readUint16() / 65535, e.readUint16() / 65535, e.readUint16() / 65535, e.readUint16() / 65535);
    },
    snorm16: function snorm16(e) {
      return (e.readUint16() - 32768) / 32767;
    },
    snorm16x2: function snorm16x2(e) {
      return (0, _chunkL7HIBZAX.ma)(ye.snorm16(e), ye.snorm16(e));
    },
    snorm16x4: function snorm16x4(e) {
      return (0, _chunkL7HIBZAX.wa)(ye.snorm16(e), ye.snorm16(e), ye.snorm16(e), ye.snorm16(e));
    },
    float16: function float16(e) {
      return e.readFloat16();
    },
    float16x2: function float16x2(e) {
      return (0, _chunkL7HIBZAX.ma)(e.readFloat16(), e.readFloat16());
    },
    float16x4: function float16x4(e) {
      return (0, _chunkL7HIBZAX.wa)(e.readFloat16(), e.readFloat16(), e.readFloat16(), e.readFloat16());
    },
    float32: function float32(e) {
      return e.readFloat32();
    },
    float32x2: function float32x2(e) {
      return (0, _chunkL7HIBZAX.ma)(e.readFloat32(), e.readFloat32());
    },
    float32x3: function float32x3(e) {
      return (0, _chunkL7HIBZAX.ra)(e.readFloat32(), e.readFloat32(), e.readFloat32());
    },
    float32x4: function float32x4(e) {
      return (0, _chunkL7HIBZAX.wa)(e.readFloat32(), e.readFloat32(), e.readFloat32(), e.readFloat32());
    },
    uint32: function uint32(e) {
      return e.readUint32();
    },
    uint32x2: function uint32x2(e) {
      return (0, _chunkL7HIBZAX.pa)(e.readUint32(), e.readUint32());
    },
    uint32x3: function uint32x3(e) {
      return (0, _chunkL7HIBZAX.ua)(e.readUint32(), e.readUint32(), e.readUint32());
    },
    uint32x4: function uint32x4(e) {
      return (0, _chunkL7HIBZAX.za)(e.readUint32(), e.readUint32(), e.readUint32(), e.readUint32());
    },
    sint32: function sint32(e) {
      return e.readInt32();
    },
    sint32x2: function sint32x2(e) {
      return (0, _chunkL7HIBZAX.oa)(e.readInt32(), e.readInt32());
    },
    sint32x3: function sint32x3(e) {
      return (0, _chunkL7HIBZAX.ta)(e.readInt32(), e.readInt32(), e.readInt32());
    },
    sint32x4: function sint32x4(e) {
      return (0, _chunkL7HIBZAX.ya)(e.readInt32(), e.readInt32(), e.readInt32(), e.readInt32());
    },
    "unorm10-10-10-2": function unorm1010102(e) {
      var t = e.readUint32(),
        r = (t >> 22) / 1023,
        n = (t >> 12 & 1023) / 1023,
        a = (t >> 2 & 1023) / 1023,
        o = (t & 3) / 3;
      return (0, _chunkL7HIBZAX.wa)(r, n, a, o);
    },
    "unorm8x4-bgra": function unorm8x4Bgra(e) {
      var t = e.readByte() / 255,
        r = e.readByte() / 255,
        n = e.readByte() / 255,
        a = e.readByte() / 255;
      return (0, _chunkL7HIBZAX.wa)(n, r, t, a);
    },
    unstruct: function unstruct(e, t) {
      var r = {};
      for (var _ref27 of Object.entries(t.propTypes)) {
        var _ref28 = (0, _slicedToArray2.default)(_ref27, 2);
        var n = _ref28[0];
        var a = _ref28[1];
        r[n] = N(e, a);
      }
      return r;
    },
    disarray: function disarray(e, t) {
      var r = (0, _chunkSFECI7OX.S)(t),
        n = [];
      for (var a = 0; a < t.elementCount; a++) R(e, r), n.push(N(e, t.elementType));
      return R(e, r), n;
    },
    "loose-decorated": function looseDecorated(e, t) {
      R(e, (0, _chunkSFECI7OX.T)(t));
      var r = e.currentByteOffset,
        n = N(e, t.inner);
      return e.seekTo(r + (0, _chunkSFECI7OX.V)(t)), n;
    }
  };
  function N(e, t) {
    var r = ye[t.type];
    if (!r) throw new Error(`Cannot read data of type '${t.type}'.`);
    return r(e, t);
  }
  function Bn(e, t) {
    var r = (0, _chunkSFECI7OX.V)(e);
    if (r === 0 || t === void 0 || t === null) return [];
    var n = new ArrayBuffer(r),
      a = new _typedBinary.BufferWriter(n),
      o = [];
    function i(u, d, g, c) {
      if (d != null) {
        if ((0, _chunkL7HIBZAX.K)(u) || (0, _chunkL7HIBZAX.W)(u)) {
          var y = yt(u);
          for (var _ref29 of Object.entries(y)) {
            var _w$padding;
            var _ref30 = (0, _slicedToArray2.default)(_ref29, 2);
            var x = _ref30[0];
            var w = _ref30[1];
            var b = u.propTypes[x];
            if (!b) continue;
            var U = d[x];
            U !== void 0 && i(b, U, g + w.offset, (_w$padding = w.padding) != null ? _w$padding : c);
          }
          return;
        }
        if ((0, _chunkL7HIBZAX.J)(u) || (0, _chunkL7HIBZAX.V)(u)) {
          var _y2 = u,
            _x = (0, _chunkSFECI7OX.a)((0, _chunkSFECI7OX.V)(_y2.elementType), (0, _chunkSFECI7OX.S)(_y2.elementType));
          if (!Array.isArray(d)) throw new Error("Partial value for array must be an array");
          var _w = d != null ? d : [];
          _w.sort(function (b, U) {
            return b.idx - U.idx;
          });
          for (var _ref31 of _w) {
            var _b = _ref31.idx;
            var _U = _ref31.value;
            i(_y2.elementType, _U, g + _b * _x, _x - (0, _chunkSFECI7OX.V)(_y2.elementType));
          }
        } else {
          var _y3 = (0, _chunkSFECI7OX.V)(u);
          a.seekTo(g), se(a, u, d), o.push({
            start: g,
            end: g + _y3,
            padding: c
          });
        }
      }
    }
    if (i(e, t, 0), o.length === 0) return [];
    var s = [],
      l = o[0];
    for (var u = 1; u < o.length; u++) {
      var _l$padding;
      var d = o[u];
      if (!d || !l) throw new Error("Internal error: missing segment");
      d.start === l.end + ((_l$padding = l.padding) != null ? _l$padding : 0) ? (l.end = d.end, l.padding = d.padding) : (s.push({
        data: new Uint8Array(n, l.start, l.end - l.start)
      }), l = d);
    }
    if (!l) throw new Error("Internal error: missing segment");
    return s.push({
      data: new Uint8Array(n, l.start, l.end - l.start)
    }), s;
  }
  function Te(e) {
    return !!(e != null && e.usableAsStorage);
  }
  var Je = /*#__PURE__*/function (_Error) {
    function e(t) {
      var _p11;
      var _this2;
      (0, _classCallCheck2.default)(this, e);
      _this2 = _callSuper(this, e, [`Resource '${(_p11 = (0, _chunkL7HIBZAX.e)(t)) != null ? _p11 : "<unnamed>"}' cannot be bound as 'storage'. Use .$usage('storage') to allow it.`]), Object.setPrototypeOf((0, _assertThisInitialized2.default)(_this2), e.prototype);
      return _this2;
    }
    (0, _inherits2.default)(e, _Error);
    return (0, _createClass2.default)(e);
  }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
  function wt(e) {
    return !!e.usableAsUniform;
  }
  var Vn = {
      uniform: "uniform",
      mutable: "storage, read_write",
      readonly: "storage, read"
    },
    Ye = /*#__PURE__*/function () {
      function Ye(t, r) {
        (0, _classCallCheck2.default)(this, Ye);
        this.resourceType = "buffer-usage";
        this.usage = t;
        this.buffer = r;
        this[_chunkL7HIBZAX.a] = {
          dataType: r.dataType
        }, this[_chunkL7HIBZAX.d] = r;
      }
      return (0, _createClass2.default)(Ye, [{
        key: "$name",
        value: function $name(t) {
          return this.buffer.$name(t), this;
        }
      }, {
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique((0, _chunkL7HIBZAX.e)(this)),
            _t$allocateFixedEntry = t.allocateFixedEntry(this.usage === "uniform" ? {
              uniform: this.buffer.dataType
            } : {
              storage: this.buffer.dataType,
              access: this.usage
            }, this.buffer),
            n = _t$allocateFixedEntry.group,
            a = _t$allocateFixedEntry.binding,
            o = Vn[this.usage];
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
          var _p12;
          return `${this.usage}:${(_p12 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p12 : "<unnamed>"}`;
        }
      }, {
        key: _chunkL7HIBZAX.c,
        value: function value() {
          var _this3 = this;
          return new Proxy((0, _defineProperty2.default)({
            "~resolve": function resolve(t) {
              return t.resolve(_this3);
            },
            toString: function toString() {
              var _p13;
              return `.value:${(_p13 = (0, _chunkL7HIBZAX.e)(_this3)) != null ? _p13 : "<unnamed>"}`;
            }
          }, _chunkL7HIBZAX.b, this.buffer.dataType), q);
        }
      }, {
        key: "value",
        get: function get() {
          if (!(0, _chunkL7HIBZAX.t)()) throw new Error("Cannot access buffer's value directly in JS.");
          return this[_chunkL7HIBZAX.c]();
        }
      }]);
    }(),
    Qe = /*#__PURE__*/function () {
      function Qe(t, r, n) {
        (0, _classCallCheck2.default)(this, Qe);
        this.resourceType = "buffer-usage";
        this.usage = t;
        this.dataType = r;
        this._membership = n;
        this[_chunkL7HIBZAX.a] = {
          dataType: r
        }, (0, _chunkL7HIBZAX.f)(this, n.key);
      }
      return (0, _createClass2.default)(Qe, [{
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique((0, _chunkL7HIBZAX.e)(this)),
            n = t.allocateLayoutEntry(this._membership.layout),
            a = Vn[this.usage];
          return t.addDeclaration(`@group(${n}) @binding(${this._membership.idx}) var<${a}> ${r}: ${t.resolve(this.dataType)};`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _p14;
          return `${this.usage}:${(_p14 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p14 : "<unnamed>"}`;
        }
      }, {
        key: _chunkL7HIBZAX.c,
        value: function value() {
          var _this4 = this;
          return new Proxy((0, _defineProperty2.default)({
            "~resolve": function resolve(t) {
              return t.resolve(_this4);
            },
            toString: function toString() {
              var _p15;
              return `.value:${(_p15 = (0, _chunkL7HIBZAX.e)(_this4)) != null ? _p15 : "<unnamed>"}`;
            }
          }, _chunkL7HIBZAX.b, this.dataType), q);
        }
      }, {
        key: "value",
        get: function get() {
          if (!(0, _chunkL7HIBZAX.t)()) throw new Error("Cannot access buffer's value directly in JS.");
          return this[_chunkL7HIBZAX.c]();
        }
      }]);
    }(),
    Rn = new WeakMap();
  function dr(e) {
    if (!Te(e)) throw new Error(`Cannot pass ${e} to asMutable, as it is not allowed to be used as storage. To allow it, call .$usage('storage') when creating the buffer.`);
    var t = Rn.get(e);
    return t || (t = new Ye("mutable", e), Rn.set(e, t)), t;
  }
  var Pn = new WeakMap();
  function fr(e) {
    if (!Te(e)) throw new Error(`Cannot pass ${e} to asReadonly, as it is not allowed to be used as storage. To allow it, call .$usage('storage') when creating the buffer.`);
    var t = Pn.get(e);
    return t || (t = new Ye("readonly", e), Pn.set(e, t)), t;
  }
  var Cn = new WeakMap();
  function gr(e) {
    if (!wt(e)) throw new Error(`Cannot pass ${e} to asUniform, as it is not allowed to be used as a uniform. To allow it, call .$usage('uniform') when creating the buffer.`);
    var t = Cn.get(e);
    return t || (t = new Ye("uniform", e), Cn.set(e, t)), t;
  }
  var $a = {
    uniform: gr,
    mutable: dr,
    readonly: fr
  };
  function kn(e, t, r) {
    return (0, _chunkL7HIBZAX.I)(t) ? new bt(e, t, r) : new bt(e, t, r, ["storage", "uniform"]);
  }
  function ue(e) {
    return e.resourceType === "buffer";
  }
  function ka(e) {
    return !!e.usableAsVertex;
  }
  var $n = (0, _typedBinary.getSystemEndianness)(),
    bt = /*#__PURE__*/function () {
      function bt(t, r, n, a) {
        (0, _classCallCheck2.default)(this, bt);
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
        fn(n) ? (this._ownBuffer = !1, this._buffer = n) : (this._ownBuffer = !0, this.initial = n);
      }
      return (0, _createClass2.default)(bt, [{
        key: "buffer",
        get: function get() {
          var _p16;
          var t = this._group.device;
          if (this._destroyed) throw new Error("This buffer has been destroyed");
          if (!this._buffer && (this._buffer = t.createBuffer({
            size: (0, _chunkSFECI7OX.V)(this.dataType),
            usage: this.flags,
            mappedAtCreation: !!this.initial,
            label: (_p16 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p16 : "<unnamed>"
          }), this.initial)) {
            var r = new _typedBinary.BufferWriter(this._buffer.getMappedRange());
            se(r, this.dataType, this.initial), this._buffer.unmap();
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
          return (0, _chunkL7HIBZAX.f)(this, t), this._buffer && (this._buffer.label = t), this;
        }
      }, {
        key: "$usage",
        value: function $usage() {
          for (var _len9 = arguments.length, t = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            t[_key9] = arguments[_key9];
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
          if (xt) ht(this.dataType);else throw new Error("This environment does not allow eval");
        }
      }, {
        key: "write",
        value: function write(t) {
          var r = this.buffer,
            n = this._group.device;
          if (r.mapState === "mapped") {
            var o = r.getMappedRange();
            if (xt) {
              ht(this.dataType)(new DataView(o), 0, t, $n === "little");
              return;
            }
            se(new _typedBinary.BufferWriter(o), this.dataType, t);
            return;
          }
          var a = (0, _chunkSFECI7OX.V)(this.dataType);
          this._hostBuffer || (this._hostBuffer = new ArrayBuffer(a)), this._group.flush(), xt ? ht(this.dataType)(new DataView(this._hostBuffer), 0, t, $n === "little") : se(new _typedBinary.BufferWriter(this._hostBuffer), this.dataType, t), n.queue.writeBuffer(r, 0, this._hostBuffer, 0, a);
        }
      }, {
        key: "writePartial",
        value: function writePartial(t) {
          var r = this.buffer,
            n = this._group.device,
            a = Bn(this.dataType, t);
          if (r.mapState === "mapped") {
            var o = r.getMappedRange(),
              i = new Uint8Array(o);
            for (var s of a) i.set(s.data, s.data.byteOffset);
          } else for (var _o4 of a) n.queue.writeBuffer(r, _o4.data.byteOffset, _o4.data, 0, _o4.data.byteLength);
        }
      }, {
        key: "copyFrom",
        value: function copyFrom(t) {
          if (this.buffer.mapState === "mapped") throw new Error("Cannot copy to a mapped buffer.");
          var r = (0, _chunkSFECI7OX.V)(this.dataType);
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
              var i = t.getMappedRange();
              return N(new _typedBinary.BufferReader(i), this.dataType);
            }
            if (t.usage & GPUBufferUsage.MAP_READ) {
              yield t.mapAsync(GPUMapMode.READ);
              var _i4 = t.getMappedRange(),
                s = N(new _typedBinary.BufferReader(_i4), this.dataType);
              return t.unmap(), s;
            }
            var n = r.createBuffer({
                size: (0, _chunkSFECI7OX.V)(this.dataType),
                usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
              }),
              a = r.createCommandEncoder();
            a.copyBufferToBuffer(t, 0, n, 0, (0, _chunkSFECI7OX.V)(this.dataType)), r.queue.submit([a.finish()]), yield r.queue.onSubmittedWorkDone(), yield n.mapAsync(GPUMapMode.READ, 0, (0, _chunkSFECI7OX.V)(this.dataType));
            var o = N(new _typedBinary.BufferReader(n.getMappedRange()), this.dataType);
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
          var _$a$t;
          return (_$a$t = $a[t]) == null ? void 0 : _$a$t.call($a, this);
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
          var _p17;
          return `buffer:${(_p17 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p17 : "<unnamed>"}`;
        }
      }]);
    }();
  function _n(e) {
    return new Tr(e);
  }
  function En(e) {
    return new xr(e);
  }
  function Xe(e) {
    var t = e;
    return (t == null ? void 0 : t.resourceType) === "sampler" && !!t[_chunkL7HIBZAX.a];
  }
  function Ze(e) {
    var t = e;
    return (t == null ? void 0 : t.resourceType) === "sampler-comparison" && !!t[_chunkL7HIBZAX.a];
  }
  var St = /*#__PURE__*/function () {
      function St(t) {
        (0, _classCallCheck2.default)(this, St);
        this.resourceType = "sampler";
        this._membership = t;
        this[_chunkL7HIBZAX.b] = this, this[_chunkL7HIBZAX.a] = {}, (0, _chunkL7HIBZAX.f)(this, t.key);
      }
      return (0, _createClass2.default)(St, [{
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique((0, _chunkL7HIBZAX.e)(this)),
            n = t.allocateLayoutEntry(this._membership.layout);
          return t.addDeclaration(`@group(${n}) @binding(${this._membership.idx}) var ${r}: sampler;`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _p18;
          return `${this.resourceType}:${(_p18 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p18 : "<unnamed>"}`;
        }
      }]);
    }(),
    vt = /*#__PURE__*/function () {
      function vt(t) {
        (0, _classCallCheck2.default)(this, vt);
        this.resourceType = "sampler-comparison";
        this._membership = t;
        this[_chunkL7HIBZAX.b] = this, this[_chunkL7HIBZAX.a] = {}, (0, _chunkL7HIBZAX.f)(this, t.key);
      }
      return (0, _createClass2.default)(vt, [{
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique((0, _chunkL7HIBZAX.e)(this)),
            n = t.allocateLayoutEntry(this._membership.layout);
          return t.addDeclaration(`@group(${n}) @binding(${this._membership.idx}) var ${r}: sampler_comparison;`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _p19;
          return `${this.resourceType}:${(_p19 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p19 : "<unnamed>"}`;
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
        this[_chunkL7HIBZAX.b] = this, this[_chunkL7HIBZAX.a] = {
          unwrap: function unwrap(r) {
            var _p20;
            return _this5._sampler || (_this5._sampler = r.device.createSampler(Object.assign({}, _this5._props, {
              label: (_p20 = (0, _chunkL7HIBZAX.e)(_this5)) != null ? _p20 : "<unnamed>"
            }))), _this5._sampler;
          }
        }, this._filtering = t.minFilter === "linear" || t.magFilter === "linear" || t.mipmapFilter === "linear";
      }
      return (0, _createClass2.default)(Tr, [{
        key: "$name",
        value: function $name(t) {
          return (0, _chunkL7HIBZAX.f)(this, t), this;
        }
      }, {
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique((0, _chunkL7HIBZAX.e)(this)),
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
          var _p21;
          return `${this.resourceType}:${(_p21 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p21 : "<unnamed>"}`;
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
        this[_chunkL7HIBZAX.b] = this, this[_chunkL7HIBZAX.a] = {
          unwrap: function unwrap(r) {
            var _p22;
            return _this6._sampler || (_this6._sampler = r.device.createSampler(Object.assign({}, _this6._props, {
              label: (_p22 = (0, _chunkL7HIBZAX.e)(_this6)) != null ? _p22 : "<unnamed>"
            }))), _this6._sampler;
          }
        };
      }
      return (0, _createClass2.default)(xr, [{
        key: "$name",
        value: function $name(t) {
          return (0, _chunkL7HIBZAX.f)(this, t), this;
        }
      }, {
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique((0, _chunkL7HIBZAX.e)(this)),
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
          var _p23;
          return `${this.resourceType}:${(_p23 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p23 : "<unnamed>"}`;
        }
      }]);
    }();
  var Dt = /*#__PURE__*/function () {
    function Dt(t) {
      (0, _classCallCheck2.default)(this, Dt);
      this.resourceType = "external-texture";
      this._membership = t;
      (0, _chunkL7HIBZAX.f)(this, t.key);
    }
    return (0, _createClass2.default)(Dt, [{
      key: "~resolve",
      value: function resolve(t) {
        var r = t.names.makeUnique((0, _chunkL7HIBZAX.e)(this)),
          n = t.allocateLayoutEntry(this._membership.layout);
        return t.addDeclaration(`@group(${n}) @binding(${this._membership.idx}) var ${r}: texture_external;`), r;
      }
    }, {
      key: "toString",
      value: function toString() {
        var _p24;
        return `${this.resourceType}:${(_p24 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p24 : "<unnamed>"}`;
      }
    }]);
  }();
  var Gn = {
      r8unorm: _chunkL7HIBZAX.ka,
      r8snorm: _chunkL7HIBZAX.ka,
      r8uint: _chunkL7HIBZAX.ia,
      r8sint: _chunkL7HIBZAX.ja,
      r16uint: _chunkL7HIBZAX.ia,
      r16sint: _chunkL7HIBZAX.ja,
      r16float: _chunkL7HIBZAX.ka,
      rg8unorm: _chunkL7HIBZAX.ka,
      rg8snorm: _chunkL7HIBZAX.ka,
      rg8uint: _chunkL7HIBZAX.ia,
      rg8sint: _chunkL7HIBZAX.ja,
      r32uint: _chunkL7HIBZAX.ia,
      r32sint: _chunkL7HIBZAX.ja,
      r32float: _chunkL7HIBZAX.ka,
      rg16uint: _chunkL7HIBZAX.ia,
      rg16sint: _chunkL7HIBZAX.ja,
      rg16float: _chunkL7HIBZAX.ka,
      rgba8unorm: _chunkL7HIBZAX.ka,
      "rgba8unorm-srgb": _chunkL7HIBZAX.ka,
      rgba8snorm: _chunkL7HIBZAX.ka,
      rgba8uint: _chunkL7HIBZAX.ia,
      rgba8sint: _chunkL7HIBZAX.ja,
      bgra8unorm: _chunkL7HIBZAX.ka,
      "bgra8unorm-srgb": _chunkL7HIBZAX.ka,
      rgb9e5ufloat: _chunkL7HIBZAX.ka,
      rgb10a2uint: _chunkL7HIBZAX.ia,
      rgb10a2unorm: _chunkL7HIBZAX.ka,
      rg11b10ufloat: _chunkL7HIBZAX.ka,
      rg32uint: _chunkL7HIBZAX.ia,
      rg32sint: _chunkL7HIBZAX.ja,
      rg32float: _chunkL7HIBZAX.ka,
      rgba16uint: _chunkL7HIBZAX.ia,
      rgba16sint: _chunkL7HIBZAX.ja,
      rgba16float: _chunkL7HIBZAX.ka,
      rgba32uint: _chunkL7HIBZAX.ia,
      rgba32sint: _chunkL7HIBZAX.ja,
      rgba32float: _chunkL7HIBZAX.ka,
      stencil8: _chunkL7HIBZAX.ka,
      depth16unorm: _chunkL7HIBZAX.ka,
      depth24plus: _chunkL7HIBZAX.ka,
      "depth24plus-stencil8": _chunkL7HIBZAX.ka,
      depth32float: _chunkL7HIBZAX.ka,
      "depth32float-stencil8": _chunkL7HIBZAX.ka,
      "bc1-rgba-unorm": _chunkL7HIBZAX.ka,
      "bc1-rgba-unorm-srgb": _chunkL7HIBZAX.ka,
      "bc2-rgba-unorm": _chunkL7HIBZAX.ka,
      "bc2-rgba-unorm-srgb": _chunkL7HIBZAX.ka,
      "bc3-rgba-unorm": _chunkL7HIBZAX.ka,
      "bc3-rgba-unorm-srgb": _chunkL7HIBZAX.ka,
      "bc4-r-unorm": _chunkL7HIBZAX.ka,
      "bc4-r-snorm": _chunkL7HIBZAX.ka,
      "bc5-rg-unorm": _chunkL7HIBZAX.ka,
      "bc5-rg-snorm": _chunkL7HIBZAX.ka,
      "bc6h-rgb-ufloat": _chunkL7HIBZAX.ka,
      "bc6h-rgb-float": _chunkL7HIBZAX.ka,
      "bc7-rgba-unorm": _chunkL7HIBZAX.ka,
      "bc7-rgba-unorm-srgb": _chunkL7HIBZAX.ka,
      "etc2-rgb8unorm": _chunkL7HIBZAX.ka,
      "etc2-rgb8unorm-srgb": _chunkL7HIBZAX.ka,
      "etc2-rgb8a1unorm": _chunkL7HIBZAX.ka,
      "etc2-rgb8a1unorm-srgb": _chunkL7HIBZAX.ka,
      "etc2-rgba8unorm": _chunkL7HIBZAX.ka,
      "etc2-rgba8unorm-srgb": _chunkL7HIBZAX.ka,
      "eac-r11unorm": _chunkL7HIBZAX.ka,
      "eac-r11snorm": _chunkL7HIBZAX.ka,
      "eac-rg11unorm": _chunkL7HIBZAX.ka,
      "eac-rg11snorm": _chunkL7HIBZAX.ka,
      "astc-4x4-unorm": _chunkL7HIBZAX.ka,
      "astc-4x4-unorm-srgb": _chunkL7HIBZAX.ka,
      "astc-5x4-unorm": _chunkL7HIBZAX.ka,
      "astc-5x4-unorm-srgb": _chunkL7HIBZAX.ka,
      "astc-5x5-unorm": _chunkL7HIBZAX.ka,
      "astc-5x5-unorm-srgb": _chunkL7HIBZAX.ka,
      "astc-6x5-unorm": _chunkL7HIBZAX.ka,
      "astc-6x5-unorm-srgb": _chunkL7HIBZAX.ka,
      "astc-6x6-unorm": _chunkL7HIBZAX.ka,
      "astc-6x6-unorm-srgb": _chunkL7HIBZAX.ka,
      "astc-8x5-unorm": _chunkL7HIBZAX.ka,
      "astc-8x5-unorm-srgb": _chunkL7HIBZAX.ka,
      "astc-8x6-unorm": _chunkL7HIBZAX.ka,
      "astc-8x6-unorm-srgb": _chunkL7HIBZAX.ka,
      "astc-8x8-unorm": _chunkL7HIBZAX.ka,
      "astc-8x8-unorm-srgb": _chunkL7HIBZAX.ka,
      "astc-10x5-unorm": _chunkL7HIBZAX.ka,
      "astc-10x5-unorm-srgb": _chunkL7HIBZAX.ka,
      "astc-10x6-unorm": _chunkL7HIBZAX.ka,
      "astc-10x6-unorm-srgb": _chunkL7HIBZAX.ka,
      "astc-10x8-unorm": _chunkL7HIBZAX.ka,
      "astc-10x8-unorm-srgb": _chunkL7HIBZAX.ka,
      "astc-10x10-unorm": _chunkL7HIBZAX.ka,
      "astc-10x10-unorm-srgb": _chunkL7HIBZAX.ka,
      "astc-12x10-unorm": _chunkL7HIBZAX.ka,
      "astc-12x10-unorm-srgb": _chunkL7HIBZAX.ka,
      "astc-12x12-unorm": _chunkL7HIBZAX.ka,
      "astc-12x12-unorm-srgb": _chunkL7HIBZAX.ka
    },
    et = {
      rgba8unorm: _chunkL7HIBZAX.wa,
      rgba8snorm: _chunkL7HIBZAX.wa,
      rgba8uint: _chunkL7HIBZAX.za,
      rgba8sint: _chunkL7HIBZAX.ya,
      rgba16uint: _chunkL7HIBZAX.za,
      rgba16sint: _chunkL7HIBZAX.ya,
      rgba16float: _chunkL7HIBZAX.wa,
      r32uint: _chunkL7HIBZAX.za,
      r32sint: _chunkL7HIBZAX.ya,
      r32float: _chunkL7HIBZAX.wa,
      rg32uint: _chunkL7HIBZAX.za,
      rg32sint: _chunkL7HIBZAX.ya,
      rg32float: _chunkL7HIBZAX.wa,
      rgba32uint: _chunkL7HIBZAX.za,
      rgba32sint: _chunkL7HIBZAX.ya,
      rgba32float: _chunkL7HIBZAX.wa,
      bgra8unorm: _chunkL7HIBZAX.wa
    },
    Ln = {
      f32: "float",
      u32: "uint",
      i32: "sint"
    },
    On = {
      float: _chunkL7HIBZAX.ka,
      "unfilterable-float": _chunkL7HIBZAX.ka,
      uint: _chunkL7HIBZAX.ia,
      sint: _chunkL7HIBZAX.ja,
      depth: _chunkL7HIBZAX.ka
    };
  function Mn(e, t) {
    return new hr(e, t);
  }
  function Q(e) {
    return (e == null ? void 0 : e.resourceType) === "texture" && !!e[_chunkL7HIBZAX.a];
  }
  function tt(e) {
    return (e == null ? void 0 : e.resourceType) === "texture-storage-view" && !!e[_chunkL7HIBZAX.a];
  }
  function rt(e) {
    return (e == null ? void 0 : e.resourceType) === "texture-sampled-view" && !!e[_chunkL7HIBZAX.a];
  }
  var Wn = {
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
        this[_chunkL7HIBZAX.a] = {
          unwrap: function unwrap() {
            var _p25, _this7$props$dimensio, _this7$props$viewForm, _this7$props$mipLevel, _this7$props$sampleCo;
            if (_this7._destroyed) throw new Error("This texture has been destroyed");
            return _this7._texture || (_this7._texture = _this7._branch.device.createTexture({
              label: (_p25 = (0, _chunkL7HIBZAX.e)(_this7)) != null ? _p25 : "<unnamed>",
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
          return (0, _chunkL7HIBZAX.f)(this, t), this;
        }
      }, {
        key: "$usage",
        value: function $usage() {
          for (var _len10 = arguments.length, t = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
            t[_key10] = arguments[_key10];
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
            a = et[n];
          return (0, _chunkL7HIBZAX.h)(!!a, `Unsupported storage texture format: ${n}`), new wr(t != null ? t : {}, r, this);
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
          if (!et[r]) throw new Error(`Unsupported storage texture format: ${r}`);
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
    Ut = {
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
          _ref32,
          _t$dimension,
          _t$format3;
        (0, _classCallCheck2.default)(this, wr);
        this.resourceType = "texture-storage-view";
        this.access = r;
        this._texture = n;
        this[_chunkL7HIBZAX.b] = this, this[_chunkL7HIBZAX.a] = {
          unwrap: function unwrap() {
            var _p26;
            return _this8._view || (_this8._view = _this8._texture[_chunkL7HIBZAX.a].unwrap().createView({
              label: `${(_p26 = (0, _chunkL7HIBZAX.e)(_this8)) != null ? _p26 : "<unnamed>"} - View`,
              format: _this8._format,
              dimension: _this8.dimension
            })), _this8._view;
          }
        }, this[_chunkL7HIBZAX.d] = n, this.dimension = (_ref32 = (_t$dimension = t == null ? void 0 : t.dimension) != null ? _t$dimension : n.props.dimension) != null ? _ref32 : "2d", this._format = (_t$format3 = t == null ? void 0 : t.format) != null ? _t$format3 : n.props.format, this.texelDataType = et[this._format];
      }
      return (0, _createClass2.default)(wr, [{
        key: "$name",
        value: function $name(t) {
          return this._texture.$name(t), this;
        }
      }, {
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique((0, _chunkL7HIBZAX.e)(this)),
            _t$allocateFixedEntry4 = t.allocateFixedEntry({
              storageTexture: this._format,
              access: this.access,
              viewDimension: this.dimension
            }, this),
            n = _t$allocateFixedEntry4.group,
            a = _t$allocateFixedEntry4.binding,
            o = `texture_storage_${Ut[this.dimension]}`;
          return t.addDeclaration(`@group(${n}) @binding(${a}) var ${r}: ${o}<${this._format}, ${Wn[this.access]}>;`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _p27;
          return `${this.resourceType}:${(_p27 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p27 : "<unnamed>"}`;
        }
      }]);
    }(),
    Ft = /*#__PURE__*/function () {
      function Ft(t, r, n, a) {
        (0, _classCallCheck2.default)(this, Ft);
        this.resourceType = "texture-storage-view";
        this._format = t;
        this.dimension = r;
        this.access = n;
        this._membership = a;
        this[_chunkL7HIBZAX.b] = this, this[_chunkL7HIBZAX.a] = {}, this.texelDataType = et[this._format], (0, _chunkL7HIBZAX.f)(this, a.key);
      }
      return (0, _createClass2.default)(Ft, [{
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique((0, _chunkL7HIBZAX.e)(this)),
            n = t.allocateLayoutEntry(this._membership.layout),
            a = `texture_storage_${Ut[this.dimension]}`;
          return t.addDeclaration(`@group(${n}) @binding(${this._membership.idx}) var ${r}: ${a}<${this._format}, ${Wn[this.access]}>;`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _p28;
          return `${this.resourceType}:${(_p28 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p28 : "<unnamed>"}`;
        }
      }]);
    }(),
    br = /*#__PURE__*/function () {
      function br(t, r) {
        var _this9 = this,
          _ref33,
          _t$dimension2,
          _t$format4;
        (0, _classCallCheck2.default)(this, br);
        this.resourceType = "texture-sampled-view";
        this._props = t;
        this._texture = r;
        this[_chunkL7HIBZAX.b] = this, this[_chunkL7HIBZAX.a] = {
          unwrap: function unwrap() {
            var _p29;
            return _this9._view || (_this9._view = _this9._texture[_chunkL7HIBZAX.a].unwrap().createView(Object.assign({
              label: `${(_p29 = (0, _chunkL7HIBZAX.e)(_this9)) != null ? _p29 : "<unnamed>"} - View`
            }, _this9._props))), _this9._view;
          }
        }, this[_chunkL7HIBZAX.d] = r, this.dimension = (_ref33 = (_t$dimension2 = t == null ? void 0 : t.dimension) != null ? _t$dimension2 : r.props.dimension) != null ? _ref33 : "2d", this._format = (_t$format4 = t == null ? void 0 : t.format) != null ? _t$format4 : r.props.format, this.channelDataType = Gn[this._format];
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
          var r = t.names.makeUnique((0, _chunkL7HIBZAX.e)(this)),
            n = ((_this$_texture$props$ = this._texture.props.sampleCount) != null ? _this$_texture$props$ : 1) > 1,
            _t$allocateFixedEntry5 = t.allocateFixedEntry({
              texture: Ln[this.channelDataType.type],
              viewDimension: this.dimension,
              multisampled: n
            }, this),
            a = _t$allocateFixedEntry5.group,
            o = _t$allocateFixedEntry5.binding,
            i = n ? "texture_multisampled_2d" : `texture_${Ut[this.dimension]}`;
          return t.addDeclaration(`@group(${a}) @binding(${o}) var ${r}: ${i}<${t.resolve(this.channelDataType)}>;`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _p30;
          return `${this.resourceType}:${(_p30 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p30 : "<unnamed>"}`;
        }
      }]);
    }(),
    It = /*#__PURE__*/function () {
      function It(t, r, n, a) {
        (0, _classCallCheck2.default)(this, It);
        this.resourceType = "texture-sampled-view";
        this.dimension = r;
        this._multisampled = n;
        this._membership = a;
        this[_chunkL7HIBZAX.b] = this, this[_chunkL7HIBZAX.a] = {}, (0, _chunkL7HIBZAX.f)(this, a.key), this.channelDataType = On[t];
      }
      return (0, _createClass2.default)(It, [{
        key: "~resolve",
        value: function resolve(t) {
          var r = t.names.makeUnique((0, _chunkL7HIBZAX.e)(this)),
            n = t.allocateLayoutEntry(this._membership.layout),
            a = this._multisampled ? "texture_multisampled_2d" : `texture_${Ut[this.dimension]}`;
          return t.addDeclaration(`@group(${n}) @binding(${this._membership.idx}) var ${r}: ${a}<${t.resolve(this.channelDataType)}>;`), r;
        }
      }, {
        key: "toString",
        value: function toString() {
          var _p31;
          return `${this.resourceType}:${(_p31 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p31 : "<unnamed>"}`;
        }
      }]);
    }();
  function Sr(e) {
    return !!(e != null && e.usableAsSampled);
  }
  function _a(e) {
    return !!(e != null && e.usableAsRender);
  }
  var At = /*#__PURE__*/function (_Error2) {
    function e(t) {
      var _p32;
      var _this10;
      (0, _classCallCheck2.default)(this, e);
      _this10 = _callSuper(this, e, [`Resource '${(_p32 = (0, _chunkL7HIBZAX.e)(t)) != null ? _p32 : "<unnamed>"}' cannot be bound as 'sampled'. Use .$usage('sampled') to allow it.`]), Object.setPrototypeOf((0, _assertThisInitialized2.default)(_this10), e.prototype);
      return _this10;
    }
    (0, _inherits2.default)(e, _Error2);
    return (0, _createClass2.default)(e);
  }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
  function Bt(e) {
    return new Dr(e);
  }
  function Rt(e) {
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
    Nn = ["compute"],
    Ve = ["compute", "vertex", "fragment"],
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
          if ("uniform" in a && (_this12.bound[n] = new Qe("uniform", a.uniform, o)), "storage" in a) {
            var _a$access;
            var i = "type" in a.storage ? a.storage : a.storage(0);
            _this12.bound[n] = new Qe((_a$access = a.access) != null ? _a$access : "readonly", i, o);
          }
          "texture" in a && (_this12.bound[n] = new It(a.texture, (_a$viewDimension = a.viewDimension) != null ? _a$viewDimension : "2d", (_a$multisampled = a.multisampled) != null ? _a$multisampled : !1, o)), "storageTexture" in a && (_this12.bound[n] = new Ft(a.storageTexture, (_a$viewDimension2 = a.viewDimension) != null ? _a$viewDimension2 : "2d", (_a$access2 = a.access) != null ? _a$access2 : "writeonly", o)), "externalTexture" in a && (_this12.bound[n] = new Dt(o)), "sampler" in a && (a.sampler === "comparison" ? _this12.bound[n] = new vt(o) : _this12.bound[n] = new St(o)), "texture" in a || "storageTexture" in a || "externalTexture" in a || "sampler" in a ? _this12.value[n] = _this12.bound[n] : Object.defineProperty(_this12.value, n, {
            get: function get() {
              return _this12.bound[n].value;
            }
          }), r++;
        };
        for (var _ref34 of Object.entries(t)) {
          var _ref35 = (0, _slicedToArray2.default)(_ref34, 2);
          var n = _ref35[0];
          var a = _ref35[1];
          if (_loop(n)) continue;
        }
      }
      return (0, _createClass2.default)(Dr, [{
        key: "toString",
        value: function toString() {
          var _p33;
          return `bindGroupLayout:${(_p33 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p33 : "<unnamed>"}`;
        }
      }, {
        key: "index",
        get: function get() {
          return this._index;
        }
      }, {
        key: "$name",
        value: function $name(t) {
          return (0, _chunkL7HIBZAX.f)(this, t), this;
        }
      }, {
        key: "$idx",
        value: function $idx(t) {
          return this._index = t, this;
        }
      }, {
        key: "unwrap",
        value: function unwrap(t) {
          var _p34;
          return t.device.createBindGroupLayout({
            label: (_p34 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p34 : "<unnamed>",
            entries: Object.values(this.entries).map(function (n, a) {
              var _n$viewDimension, _n$multisampled, _o5, _o6, _o7;
              if (n === null) return null;
              var o = n.visibility,
                i = {
                  binding: a,
                  visibility: 0
                };
              if ("uniform" in n) o = o != null ? o : Ve, i.buffer = {
                type: "uniform"
              };else if ("storage" in n) o = o != null ? o : n.access === "mutable" ? Nn : Ve, i.buffer = {
                type: n.access === "mutable" ? "storage" : "read-only-storage"
              };else if ("sampler" in n) o = o != null ? o : Ve, i.sampler = {
                type: n.sampler
              };else if ("texture" in n) o = o != null ? o : Ve, i.texture = {
                sampleType: n.texture,
                viewDimension: (_n$viewDimension = n.viewDimension) != null ? _n$viewDimension : "2d",
                multisampled: (_n$multisampled = n.multisampled) != null ? _n$multisampled : !1
              };else if ("storageTexture" in n) {
                var _n$access, _n$viewDimension2;
                var s = (_n$access = n.access) != null ? _n$access : "writeonly";
                o = o != null ? o : s === "readonly" ? Ve : Nn, i.storageTexture = {
                  format: n.storageTexture,
                  access: {
                    mutable: "read-write",
                    readonly: "read-only",
                    writeonly: "write-only"
                  }[s],
                  viewDimension: (_n$viewDimension2 = n.viewDimension) != null ? _n$viewDimension2 : "2d"
                };
              } else "externalTexture" in n && (o = o != null ? o : Ve, i.externalTexture = {});
              return (_o5 = o) != null && _o5.includes("compute") && (i.visibility |= GPUShaderStage.COMPUTE), (_o6 = o) != null && _o6.includes("vertex") && (i.visibility |= GPUShaderStage.VERTEX), (_o7 = o) != null && _o7.includes("fragment") && (i.visibility |= GPUShaderStage.FRAGMENT), i;
            }).filter(function (n) {
              return n !== null;
            })
          });
        }
      }]);
    }(),
    $e = /*#__PURE__*/function () {
      function $e(t, r) {
        (0, _classCallCheck2.default)(this, $e);
        this.resourceType = "bind-group";
        this.layout = t;
        this.entries = r;
        for (var n of Object.keys(t.entries)) if (t.entries[n] !== null && !(n in r)) throw new vr((0, _chunkL7HIBZAX.e)(t), n);
      }
      return (0, _createClass2.default)($e, [{
        key: "unwrap",
        value: function unwrap(t) {
          var _p35,
            _this13 = this;
          return t.device.createBindGroup({
            label: (_p35 = (0, _chunkL7HIBZAX.e)(this.layout)) != null ? _p35 : "<unnamed>",
            layout: t.unwrap(this.layout),
            entries: Object.entries(this.layout.entries).map(function (_ref36, o) {
              var _p36;
              var _ref37 = (0, _slicedToArray2.default)(_ref36, 2),
                n = _ref37[0],
                a = _ref37[1];
              if (a === null) return null;
              var i = _this13.entries[n];
              if (i === void 0) throw new Error(`'${n}' is a resource required to populate bind group layout '${(_p36 = (0, _chunkL7HIBZAX.e)(_this13.layout)) != null ? _p36 : "<unnamed>"}'.`);
              if ("uniform" in a) {
                var s;
                if (ue(i)) {
                  if (!wt(i)) throw new _chunkL7HIBZAX.k(i);
                  s = {
                    buffer: t.unwrap(i)
                  };
                } else s = {
                  buffer: i
                };
                return {
                  binding: o,
                  resource: s
                };
              }
              if ("storage" in a) {
                var _s3;
                if (ue(i)) {
                  if (!Te(i)) throw new Je(i);
                  _s3 = {
                    buffer: t.unwrap(i)
                  };
                } else _s3 = {
                  buffer: i
                };
                return {
                  binding: o,
                  resource: _s3
                };
              }
              if ("texture" in a) {
                var _s4;
                if (Q(i)) {
                  if (!Sr(i)) throw new At(i);
                  _s4 = t.unwrap(i.createView("sampled"));
                } else rt(i) ? _s4 = t.unwrap(i) : _s4 = i;
                return {
                  binding: o,
                  resource: _s4
                };
              }
              if ("storageTexture" in a) {
                var _s5;
                if (Q(i)) {
                  if (!Te(i)) throw new Je(i);
                  a.access === "readonly" ? _s5 = t.unwrap(i.createView("readonly")) : a.access === "mutable" ? _s5 = t.unwrap(i.createView("mutable")) : _s5 = t.unwrap(i.createView("writeonly"));
                } else tt(i) ? _s5 = t.unwrap(i) : _s5 = i;
                return {
                  binding: o,
                  resource: _s5
                };
              }
              if ("sampler" in a) return Xe(i) || Ze(i) ? {
                binding: o,
                resource: t.unwrap(i)
              } : {
                binding: o,
                resource: i
              };
              if ("externalTexture" in a) return {
                binding: o,
                resource: i
              };
              throw new Error(`Malformed bind group entry: ${i} (${JSON.stringify(i)})`);
            }).filter(function (n) {
              return n !== null;
            })
          });
        }
      }]);
    }();
  var F = Ea.NodeTypeCatalog,
    Ga = ["==", "!=", "<", "<=", ">", ">=", "<<", ">>", "+", "-", "*", "/", "%", "|", "^", "&", "&&", "||"],
    La = ["&&", "||", "==", "!=", "<", "<=", ">", ">="];
  function jn(e, t, r) {
    return r ? La.includes(t) ? _chunkL7HIBZAX.ha : t === "=" ? r : e : t === "!" || t === "~" ? _chunkL7HIBZAX.ha : e;
  }
  function Oa(e) {
    throw new Error(`'${JSON.stringify(e)}' was not handled by the WGSL generator.`);
  }
  function zn(e, _ref10) {
    var _ref13 = (0, _slicedToArray2.default)(_ref10, 2),
      t = _ref13[0],
      r = _ref13[1];
    e.pushBlockScope();
    try {
      return `${e.indent()}{
${r.map(function (n) {
        return xe(e, n);
      }).join(`
`)}
${e.dedent()}}`;
    } finally {
      e.popBlockScope();
    }
  }
  function Ma(e, t, r) {
    return e.defineVariable(t, r);
  }
  function Ir(e, t) {
    var r = e.getById(t);
    if (!r) throw new Error(`Identifier ${t} not found`);
    return r;
  }
  function $(e, t) {
    if (typeof t == "string") return Ir(e, t);
    if (typeof t == "boolean") return (0, _chunkL7HIBZAX.ba)(t ? "true" : "false", _chunkL7HIBZAX.ha);
    if (t[0] === F.logicalExpr || t[0] === F.binaryExpr || t[0] === F.assignmentExpr) {
      var _t2 = (0, _slicedToArray2.default)(t, 4),
        r = _t2[0],
        n = _t2[1],
        a = _t2[2],
        o = _t2[3],
        i = $(e, n),
        s = $(e, o),
        l = W(e, [i, s]),
        _ref14 = l || [i, s],
        _ref38 = (0, _slicedToArray2.default)(_ref14, 2),
        u = _ref38[0],
        d = _ref38[1],
        g = e.resolve(u.value),
        c = e.resolve(d.value),
        y = jn(u.dataType, a, d.dataType);
      return (0, _chunkL7HIBZAX.ba)(Ga.includes(a) ? `(${g} ${a} ${c})` : `${g} ${a} ${c}`, y);
    }
    if (t[0] === F.postUpdate) {
      var _t3 = (0, _slicedToArray2.default)(t, 3),
        _r2 = _t3[0],
        _n2 = _t3[1],
        _a5 = _t3[2],
        _o8 = $(e, _a5),
        _i5 = e.resolve(_o8.value);
      return (0, _chunkL7HIBZAX.ba)(`${_i5}${_n2}`, _o8.dataType);
    }
    if (t[0] === F.unaryExpr) {
      var _t4 = (0, _slicedToArray2.default)(t, 3),
        _r3 = _t4[0],
        _n3 = _t4[1],
        _a6 = _t4[2],
        _o9 = $(e, _a6),
        _i6 = e.resolve(_o9.value),
        _s6 = jn(_o9.dataType, _n3);
      return (0, _chunkL7HIBZAX.ba)(`${_n3}${_i6}`, _s6);
    }
    if (t[0] === F.memberAccess) {
      var _t5 = (0, _slicedToArray2.default)(t, 3),
        _r4 = _t5[0],
        _n4 = _t5[1],
        _a7 = _t5[2],
        _o10 = $(e, _n4);
      if (_o10.dataType.type === "unknown") {
        var _i7 = _o10.value[_a7];
        return fe(_i7);
      }
      return (0, _chunkL7HIBZAX.L)(_o10.dataType) ? (0, _chunkL7HIBZAX.ba)(`(*${e.resolve(_o10.value)}).${_a7}`, je(_o10.dataType.inner, _a7)) : (0, _chunkL7HIBZAX.J)(_o10.dataType) && _a7 === "length" ? _o10.dataType.elementCount === 0 ? (0, _chunkL7HIBZAX.ba)(`arrayLength(&${e.resolve(_o10.value)})`, _chunkL7HIBZAX.ia) : (0, _chunkL7HIBZAX.ba)(String(_o10.dataType.elementCount), _chunkL7HIBZAX.fa) : (0, _chunkL7HIBZAX.G)(_o10.dataType) && _a7 === "columns" ? (0, _chunkL7HIBZAX.ba)(_o10.value, _o10.dataType) : (0, _chunkL7HIBZAX.C)(_o10.dataType) && (0, _chunkL7HIBZAX.z)(_o10.value) ? fe(_o10.value[_a7]) : (0, _chunkL7HIBZAX.ba)(`${e.resolve(_o10.value)}.${_a7}`, je(_o10.dataType, _a7));
    }
    if (t[0] === F.indexAccess) {
      var _t6 = (0, _slicedToArray2.default)(t, 3),
        _r5 = _t6[0],
        _n5 = _t6[1],
        _a8 = _t6[2],
        _o11 = $(e, _n5),
        _i8 = $(e, _a8),
        _s7 = e.resolve(_o11.value),
        _l3 = e.resolve(_i8.value);
      if (_o11.dataType.type === "unknown") {
        if (Array.isArray(_a8) && _a8[0] === F.numericLiteral) return fe(_o11.value[_a8[1]]);
        throw new Error(`Cannot index value ${_s7} of unknown type with index ${_l3}`);
      }
      return (0, _chunkL7HIBZAX.L)(_o11.dataType) ? (0, _chunkL7HIBZAX.ba)(`(*${_s7})[${_l3}]`, Qt(_o11.dataType.inner)) : (0, _chunkL7HIBZAX.ba)(`${_s7}[${_l3}]`, (0, _chunkL7HIBZAX.$)(_o11.dataType) ? Qt(_o11.dataType) : _chunkL7HIBZAX.aa);
    }
    if (t[0] === F.numericLiteral) {
      var _r6 = Xt(t[1]);
      if (!_r6) throw new Error(`Invalid numeric literal ${t[1]}`);
      return _r6;
    }
    if (t[0] === F.call) {
      var _o12$value$f, _W2;
      var _t7 = (0, _slicedToArray2.default)(t, 3),
        _r7 = _t7[0],
        _n6 = _t7[1],
        _a9 = _t7[2],
        _o12 = $(e, _n6);
      e.callStack.push(_o12.value);
      var _s8 = _a9.map(function (c) {
          return $(e, c);
        }).map(function (c) {
          return (0, _chunkL7HIBZAX.ba)(e.resolve(c.value), c.dataType);
        }),
        _l4 = _s8.map(function (c) {
          return c.value;
        });
      if (e.callStack.pop(), _s8.forEach(function (c, y) {
        var _p37;
        if (c.dataType === _chunkL7HIBZAX.aa) throw new Error(`Tried to pass '${c.value}' of unknown type as argument #${y} to '${typeof _o12.value == "string" ? _o12.value : (_p37 = (0, _chunkL7HIBZAX.e)(_o12.value)) != null ? _p37 : "<unnamed>"}()'`);
      }), typeof _o12.value == "string") return (0, _chunkL7HIBZAX.ba)(`${_o12.value}(${_l4.join(", ")})`, _o12.dataType);
      if ((0, _chunkL7HIBZAX.K)(_o12.value)) {
        var _c2 = e.resolve(_o12.value);
        return (0, _chunkL7HIBZAX.ba)(`${_c2}(${_l4.join(", ")})`, _o12.value);
      }
      if (!ar(_o12.value)) throw new Error(`Function ${String(_o12.value)} has not been created using TypeGPU APIs. Did you mean to wrap the function with tgpu.fn(args, return)(...) ?`);
      var _u5 = (_o12$value$f = _o12.value[_chunkL7HIBZAX.a]) == null ? void 0 : _o12$value$f.argTypes,
        _d2;
      !_u5 || _u5 === "keep" ? _d2 = _s8 : _u5 === "coerce" ? _d2 = (_W2 = W(e, _s8)) != null ? _W2 : _s8 : _d2 = (Array.isArray(_u5) ? _u5 : _u5.apply(void 0, (0, _toConsumableArray2.default)(_s8))).map(function (y, x) {
        return [y, _s8[x]];
      }).map(function (_ref39) {
        var _W3;
        var _ref40 = (0, _slicedToArray2.default)(_ref39, 2),
          y = _ref40[0],
          x = _ref40[1];
        if (x.dataType.type === "unknown") return console.warn(`Internal error: unknown type when generating expression: ${t}`), x;
        var w = (_W3 = W(e, [x], [y])) == null ? void 0 : _W3[0];
        if (!w) throw new Error(`Cannot convert ${e.resolve(x.dataType)} to ${e.resolve(y)}`);
        return w;
      });
      var _g2 = _o12.value.apply(_o12, (0, _toConsumableArray2.default)(_d2));
      return (0, _chunkL7HIBZAX.ba)(e.resolve(_g2.value), _g2.dataType);
    }
    if (t[0] === F.objectExpr) {
      var _r8 = t[1],
        _n7 = e.callStack[e.callStack.length - 1];
      if ((0, _chunkL7HIBZAX.K)(_n7)) {
        var _a10 = Object.keys(_n7.propTypes),
          _o13 = Object.fromEntries(_a10.map(function (s) {
            var l = _r8[s];
            if (l === void 0) throw new Error(`Missing property ${s} in object literal for struct ${_n7}`);
            return [s, $(e, l)];
          })),
          _i9 = tr(e, _n7, _o13);
        return (0, _chunkL7HIBZAX.ba)(_i9.map(function (s) {
          return e.resolve(s.value);
        }).join(", "), _n7);
      }
      if (ar(_n7)) {
        var _n7$f;
        var _a11 = (_n7$f = _n7[_chunkL7HIBZAX.a]) == null ? void 0 : _n7$f.argTypes;
        if (typeof _a11 == "object" && _a11 !== null) {
          var _o14 = Object.keys(_a11),
            _i10 = {};
          for (var _s9 of _o14) {
            var _g3$;
            var _l5 = _r8[_s9];
            if (_l5 === void 0) throw new Error(`Missing property ${_s9} in object literal for function ${_n7}`);
            var _u6 = $(e, _l5),
              _d3 = _a11[_s9],
              _g3 = W(e, [_u6], [_d3]);
            _i10[_s9] = (_g3$ = _g3 == null ? void 0 : _g3[0]) != null ? _g3$ : _u6;
          }
          return (0, _chunkL7HIBZAX.ba)(_i10, _chunkL7HIBZAX.aa);
        }
      }
      throw new Error("Object expressions are only allowed as return values of functions or as arguments to structs.");
    }
    if (t[0] === F.arrayExpr) {
      var _o15$;
      var _t8 = (0, _slicedToArray2.default)(t, 2),
        _r9 = _t8[0],
        _n8 = _t8[1],
        _a12 = _n8.map(function (g) {
          return $(e, g);
        });
      if (_a12.length === 0) throw new Error("Cannot create empty array literal.");
      var _o15 = W(e, _a12);
      if (!_o15) throw new Error("The given values cannot be automatically converted to a common type. Consider explicitly casting them.");
      var _i11 = (_o15$ = _o15[0]) == null ? void 0 : _o15$.dataType,
        _s10 = _i11.type === "abstractFloat" ? _chunkL7HIBZAX.ka : _i11.type === "abstractInt" ? _chunkL7HIBZAX.ja : _i11,
        _u7 = `array<${e.resolve(_s10)}, ${_a12.length}>`,
        _d4 = _o15.map(function (g) {
          return e.resolve(g.value);
        });
      return (0, _chunkL7HIBZAX.ba)(`${_u7}( ${_d4.join(", ")} )`, (0, _chunkSFECI7OX.X)(_s10, _a12.length));
    }
    if (t[0] === F.stringLiteral) throw new Error("Cannot use string literals in TGSL.");
    if (t[0] === F.preUpdate) throw new Error("Cannot use pre-updates in TGSL.");
    Oa(t);
  }
  function Pt(e) {
    return typeof e != "object" || e[0] !== F.block ? [F.block, [e]] : e;
  }
  function xe(e, t) {
    if (typeof t == "string") return `${e.pre}${e.resolve(Ir(e, t).value)};`;
    if (typeof t == "boolean") return `${e.pre}${t ? "true" : "false"};`;
    if (t[0] === F.return) {
      var r = t[1],
        n = r !== void 0 ? e.resolve($(e, r).value) : void 0;
      if ((0, _chunkL7HIBZAX.K)(e.callStack[e.callStack.length - 1]) && typeof r == "object" && r[0] === F.objectExpr) {
        var a = e.resolve(e.callStack[e.callStack.length - 1]);
        return `${e.pre}return ${a}(${n});`;
      }
      return n ? `${e.pre}return ${n};` : `${e.pre}return;`;
    }
    if (t[0] === F.if) {
      var _l6, _l7;
      var _t9 = (0, _slicedToArray2.default)(t, 4),
        _r10 = _t9[0],
        _n9 = _t9[1],
        _a13 = _t9[2],
        o = _t9[3],
        i = $(e, _n9),
        s = i,
        l = W(e, [i], [_chunkL7HIBZAX.ha]);
      (l == null ? void 0 : l[0]) && (_l6 = l, _l7 = (0, _slicedToArray2.default)(_l6, 1), s = _l7[0], _l6);
      var u = e.resolve(s.value);
      e.indent();
      var d = xe(e, Pt(_a13));
      e.dedent(), e.indent();
      var g = o ? xe(e, Pt(o)) : void 0;
      return e.dedent(), g ? `${e.pre}if (${u})
${d}
${e.pre}else
${g}` : `${e.pre}if (${u})
${d}`;
    }
    if (t[0] === F.let || t[0] === F.const) {
      var _t10 = (0, _slicedToArray2.default)(t, 3),
        _r11 = _t10[0],
        _n10 = _t10[1],
        _a14 = _t10[2],
        _o16 = _a14 !== void 0 ? $(e, _a14) : void 0;
      if (!_o16) throw new Error(`Cannot create variable '${_n10}' without an initial value.`);
      if ((0, _chunkL7HIBZAX.U)(_o16.dataType)) throw new Error(`Cannot create variable '${_n10}' with loose data type.`);
      Ma(e, _n10, er(_o16.dataType));
      var _i12 = e.resolve(Ir(e, _n10).value);
      if (typeof _a14 == "object" && _a14[0] === F.objectExpr && (0, _chunkL7HIBZAX.K)(e.callStack[e.callStack.length - 1])) {
        var _s11 = e.callStack[e.callStack.length - 1],
          _l8 = _a14[1],
          _u8 = {};
        for (var _ref41 of Object.entries(_l8)) {
          var _ref42 = (0, _slicedToArray2.default)(_ref41, 2);
          var c = _ref42[0];
          var y = _ref42[1];
          if (!y) throw new Error(`Missing property ${c} in object literal`);
          _u8[c] = $(e, y);
        }
        var _d5 = tr(e, _s11, _u8),
          _g4 = e.resolve(_s11);
        return `${e.pre}var ${_i12} = ${_g4}(${_d5.map(function (c) {
          return e.resolve(c.value);
        }).join(", ")});`;
      }
      return `${e.pre}var ${_i12} = ${e.resolve(_o16.value)};`;
    }
    if (t[0] === F.block) return zn(e, t);
    if (t[0] === F.for) {
      var _t11 = (0, _slicedToArray2.default)(t, 5),
        _r12 = _t11[0],
        _n11 = _t11[1],
        _a15 = _t11[2],
        _o17 = _t11[3],
        _i13 = _t11[4],
        _s12 = _n11 ? xe(e, _n11) : void 0,
        _l9 = _s12 ? _s12.slice(0, -1) : "",
        _u9 = _a15 ? $(e, _a15) : void 0,
        _d6 = _u9;
      if (_u9) {
        var _w2, _w3;
        var w = W(e, [_u9], [_chunkL7HIBZAX.ha]);
        (w == null ? void 0 : w[0]) && (_w2 = w, _w3 = (0, _slicedToArray2.default)(_w2, 1), _d6 = _w3[0], _w2);
      }
      var _g5 = _d6 ? e.resolve(_d6.value) : "",
        _c3 = _o17 ? xe(e, _o17) : void 0,
        _y4 = _c3 ? _c3.slice(0, -1) : "";
      e.indent();
      var x = xe(e, Pt(_i13));
      return e.dedent(), `${e.pre}for (${_l9}; ${_g5}; ${_y4})
${x}`;
    }
    if (t[0] === F.while) {
      var _t12 = (0, _slicedToArray2.default)(t, 3),
        _r13 = _t12[0],
        _n12 = _t12[1],
        _a16 = _t12[2],
        _o18 = $(e, _n12),
        _i14 = _o18;
      if (_o18) {
        var _u11, _u12;
        var _u10 = W(e, [_o18], [_chunkL7HIBZAX.ha]);
        (_u10 == null ? void 0 : _u10[0]) && (_u11 = _u10, _u12 = (0, _slicedToArray2.default)(_u11, 1), _i14 = _u12[0], _u11);
      }
      var _s13 = e.resolve(_i14.value);
      e.indent();
      var _l10 = xe(e, Pt(_a16));
      return e.dedent(), `${e.pre}while (${_s13})
${_l10}`;
    }
    return t[0] === F.continue ? `${e.pre}continue;` : t[0] === F.break ? `${e.pre}break;` : `${e.pre}${e.resolve($(e, t).value)};`;
  }
  function Kn(e, t) {
    return zn(e, t);
  }
  var Hn = "#CATCHALL#",
    Ar = /*#__PURE__*/function () {
      function Ar() {
        (0, _classCallCheck2.default)(this, Ar);
        this._stack = [];
        this._itemDepth = 0;
      }
      return (0, _createClass2.default)(Ar, [{
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
        value: function pushFunctionScope(t, r, n, a) {
          this._stack.push({
            type: "functionScope",
            args: t,
            argAliases: r,
            returnType: n,
            externalMap: a
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
              var a = n.args.find(function (i) {
                return i.value === t;
              });
              if (a !== void 0) return a;
              if (n.argAliases[t]) return n.argAliases[t];
              var o = n.externalMap[t];
              return o != null ? fe(o) : void 0;
            }
            if ((n == null ? void 0 : n.type) === "blockScope") {
              var _a17 = n.declarations.get(t);
              if (_a17 !== void 0) return (0, _chunkL7HIBZAX.ba)(t, _a17);
            }
          }
        }
      }, {
        key: "defineBlockVariable",
        value: function defineBlockVariable(t, r) {
          if (r.type === "unknown") throw Error(`Tried to define variable '${t}' of unknown type`);
          for (var n = this._stack.length - 1; n >= 0; --n) {
            var a = this._stack[n];
            if ((a == null ? void 0 : a.type) === "blockScope") return a.declarations.set(t, r), (0, _chunkL7HIBZAX.ba)(t, r);
          }
          throw new Error("No block scope found to define a variable in.");
        }
      }]);
    }(),
    Ct = ["", "  ", "    ", "      ", "        ", "          ", "            ", "              ", "                "],
    Ur = Ct.length - 1,
    Br = /*#__PURE__*/function () {
      function Br() {
        (0, _classCallCheck2.default)(this, Br);
        this.identLevel = 0;
      }
      return (0, _createClass2.default)(Br, [{
        key: "pre",
        get: function get() {
          var _Ct$this$identLevel;
          return (_Ct$this$identLevel = Ct[this.identLevel]) != null ? _Ct$this$identLevel : Ct[Ur].repeat(this.identLevel / Ur) + Ct[this.identLevel % Ur];
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
        this._itemStateStack = new Ar();
        this._declarations = [];
        this[_chunkL7HIBZAX.a] = {
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
          this._itemStateStack.pushFunctionScope(t.args, t.argAliases, t.returnType, t.externalMap);
          try {
            return {
              head: Wa(this, t.args, t.returnType),
              body: Kn(this, t.body)
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
            group: Hn,
            binding: n
          };
        }
      }, {
        key: "readSlot",
        value: function readSlot(t) {
          var r = this._itemStateStack.readSlot(t);
          if (r === void 0) throw new _chunkL7HIBZAX.j(t);
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
          if (Ke(t)) return this.withSlots(t["~providing"].pairs, function () {
            return _this14.unwrap(t["~providing"].inner);
          });
          var r = t;
          for (;;) if (Be(r)) r = this.readSlot(r);else if (Re(r)) r = this._getOrCompute(r);else break;
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
            for (var o of r) if ((0, _toConsumableArray2.default)(o.slotToValueMap.entries()).every(function (_ref43) {
              var _ref44 = (0, _slicedToArray2.default)(_ref43, 2),
                s = _ref44[0],
                l = _ref44[1];
              return s.areEqual(_this15._itemStateStack.readSlot(s), l);
            })) return o.result;
            (0, _chunkL7HIBZAX.r)(_chunkL7HIBZAX.o.CPU);
            var n;
            try {
              n = t["~compute"]();
            } finally {
              (0, _chunkL7HIBZAX.s)(_chunkL7HIBZAX.o.CPU);
            }
            var a = new Map();
            for (var _o19 of this._itemStateStack.topItem.usedSlots) a.set(_o19, this._itemStateStack.readSlot(_o19));
            return r.push({
              slotToValueMap: a,
              result: n
            }), this._memoizedDerived.set(t, r), n;
          } catch (n) {
            throw n instanceof _chunkL7HIBZAX.i ? n.appendToTrace(t) : new _chunkL7HIBZAX.i(n, [t]);
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
            for (var o of r) if ((0, _toConsumableArray2.default)(o.slotToValueMap.entries()).every(function (_ref45) {
              var _ref46 = (0, _slicedToArray2.default)(_ref45, 2),
                s = _ref46[0],
                l = _ref46[1];
              return s.areEqual(_this16._itemStateStack.readSlot(s), l);
            })) return o.result;
            var n;
            (0, _chunkL7HIBZAX.$)(t) ? n = ur(this, t) : Re(t) || Be(t) ? n = this.resolve(this.unwrap(t)) : nr(t) ? n = t["~resolve"](this) : n = this.resolveValue(t);
            var a = new Map();
            for (var _o20 of this._itemStateStack.topItem.usedSlots) a.set(_o20, this._itemStateStack.readSlot(_o20));
            return r.push({
              slotToValueMap: a,
              result: n
            }), this._memoizedResolves.set(t, r), n;
          } catch (n) {
            throw n instanceof _chunkL7HIBZAX.i ? n.appendToTrace(t) : new _chunkL7HIBZAX.i(n, [t]);
          } finally {
            this._itemStateStack.popItem();
          }
        }
      }, {
        key: "resolve",
        value: function resolve(t) {
          var _this17 = this;
          if (Ke(t)) return this.withSlots(t["~providing"].pairs, function () {
            return _this17.resolve(t["~providing"].inner);
          });
          if (t && typeof t == "object" || typeof t == "function") {
            if (this._itemStateStack.itemDepth === 0) try {
              (0, _chunkL7HIBZAX.r)(_chunkL7HIBZAX.o.GPU);
              var r = (0, _chunkL7HIBZAX.p)(this, function () {
                return _this17._getOrInstantiate(t);
              });
              return `${(0, _toConsumableArray2.default)(this._declarations).join(`

`)}${r}`;
            } finally {
              (0, _chunkL7HIBZAX.s)(_chunkL7HIBZAX.o.GPU);
            }
            return this._getOrInstantiate(t);
          }
          return String(t);
        }
      }, {
        key: "resolveValue",
        value: function resolveValue(t, r) {
          var _this18 = this;
          if (gt(t)) return this.resolve(t);
          if (r && (0, _chunkL7HIBZAX.J)(r)) return `array(${t.map(function (n) {
            return _this18.resolveValue(n, r.elementType);
          })})`;
          if (Array.isArray(t)) return `array(${t.map(function (n) {
            return _this18.resolveValue(n);
          })})`;
          if (r && (0, _chunkL7HIBZAX.K)(r)) return `${this.resolve(r)}(${Object.entries(r.propTypes).map(function (_ref47) {
            var _ref48 = (0, _slicedToArray2.default)(_ref47, 2),
              n = _ref48[0],
              a = _ref48[1];
            return _this18.resolveValue(t[n], a);
          })})`;
          throw new Error(`Value ${t} (as json: ${JSON.stringify(t)}) of schema ${r} is not resolvable to WGSL`);
        }
      }]);
    }();
  function ke(e, t) {
    var r = new Rr(t),
      n = r.resolve(e),
      a = r.bindGroupLayoutsToPlaceholderMap,
      o = [],
      i = new Set((0, _toConsumableArray2.default)(a.keys()).map(function (g) {
        return g.index;
      }).filter(function (g) {
        return g !== void 0;
      })),
      s = (0, _chunkL7HIBZAX.da)(i),
      l = r.fixedBindings.map(function (g, c) {
        return [String(c), g.layoutEntry];
      }),
      u = function u() {
        var g = s.next().value,
          c = Bt(Object.fromEntries(l));
        return o[g] = c, n = n.replaceAll(Hn, String(g)), [g, new $e(c, Object.fromEntries(r.fixedBindings.map(function (y, x) {
          return [String(x), y.resource];
        })))];
      },
      d = l.length > 0 ? u() : null;
    for (var _ref49 of a.entries()) {
      var _g$index;
      var _ref50 = (0, _slicedToArray2.default)(_ref49, 2);
      var g = _ref50[0];
      var c = _ref50[1];
      var y = (_g$index = g.index) != null ? _g$index : s.next().value;
      o[y] = g, n = n.replaceAll(c, String(y));
    }
    return {
      code: n,
      bindGroupLayouts: o,
      catchall: d
    };
  }
  function Wa(e, t, r) {
    var n = t.map(function (a) {
      return `${a.value}: ${e.resolve(a.dataType)}`;
    }).join(", ");
    return r.type !== "void" ? `(${n}) -> ${(0, _chunkSFECI7OX.ba)(r)} ${e.resolve(r)}` : `(${n})`;
  }
  function qn(e) {
    var t = e.externals,
      r = e.template,
      n = e.names,
      a = e.unstable_jitTranspiler,
      o = {};
    ge(o, t != null ? t : {});
    var i = {
        "~resolve": function resolve(l) {
          return ce(l, o, r != null ? r : "");
        },
        toString: function toString() {
          return "<root>";
        }
      },
      _ke = ke(i, {
        names: n === "strict" ? new ie() : new oe(),
        jitTranspiler: a
      }),
      s = _ke.code;
    return s;
  }
  var nt = /*#__PURE__*/function () {
    function nt(t) {
      (0, _classCallCheck2.default)(this, nt);
      this._map = new WeakMap();
      this._make = t;
    }
    return (0, _createClass2.default)(nt, [{
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
  function Jn(e, t, r) {
    return new Pr(new Cr(e, t, r), {});
  }
  function Yn(e) {
    var t = e;
    return (t == null ? void 0 : t.resourceType) === "compute-pipeline" && !!t[_chunkL7HIBZAX.a];
  }
  var Pr = /*#__PURE__*/function () {
      function e(t, r) {
        (0, _classCallCheck2.default)(this, e);
        this.resourceType = "compute-pipeline";
        this._core = t;
        this._priors = r;
        this[_chunkL7HIBZAX.a] = {
          get rawPipeline() {
            return t.unwrap().pipeline;
          }
        }, this[_chunkL7HIBZAX.d] = t;
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
          var _p38,
            _this19 = this;
          var a = this._core.unwrap(),
            o = this._core.branch,
            i = o.commandEncoder.beginComputePass({
              label: (_p38 = (0, _chunkL7HIBZAX.e)(this._core)) != null ? _p38 : "<unnamed>"
            });
          i.setPipeline(a.pipeline);
          var s = new Set(a.bindGroupLayouts);
          if (a.bindGroupLayouts.forEach(function (l, u) {
            if (a.catchall && u === a.catchall[0]) i.setBindGroup(u, o.unwrap(a.catchall[1])), s.delete(l);else {
              var _this19$_priors$bindG;
              var d = (_this19$_priors$bindG = _this19._priors.bindGroupLayoutMap) == null ? void 0 : _this19$_priors$bindG.get(l);
              d !== void 0 && (s.delete(l), i.setBindGroup(u, o.unwrap(d)));
            }
          }), s.size > 0) throw new _chunkL7HIBZAX.m(s);
          i.dispatchWorkgroups(t, r, n), i.end();
        }
      }, {
        key: "$name",
        value: function $name(t) {
          return (0, _chunkL7HIBZAX.f)(this._core, t), this;
        }
      }]);
    }(),
    Cr = /*#__PURE__*/function () {
      function Cr(t, r, n) {
        (0, _classCallCheck2.default)(this, Cr);
        this.branch = t;
        this._slotBindings = r;
        this._entryFn = n;
      }
      return (0, _createClass2.default)(Cr, [{
        key: "unwrap",
        value: function unwrap() {
          var _this20 = this;
          if (this._memo === void 0) {
            var _n$a$, _p40, _p41, _p42, _p43;
            var t = this.branch.device,
              _ke2 = ke({
                "~resolve": function resolve(o) {
                  return o.withSlots(_this20._slotBindings, function () {
                    o.resolve(_this20._entryFn);
                  }), "";
                },
                toString: function toString() {
                  var _p39;
                  return `computePipeline:${(_p39 = (0, _chunkL7HIBZAX.e)(_this20)) != null ? _p39 : "<unnamed>"}`;
                }
              }, {
                names: this.branch.nameRegistry,
                jitTranspiler: this.branch.jitTranspiler
              }),
              r = _ke2.code,
              n = _ke2.bindGroupLayouts,
              a = _ke2.catchall;
            a !== null && (_n$a$ = n[a[0]]) != null && _n$a$.$name(`${(_p40 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p40 : "<unnamed>"} - Automatic Bind Group & Layout`), this._memo = {
              pipeline: t.createComputePipeline({
                label: (_p41 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p41 : "<unnamed>",
                layout: t.createPipelineLayout({
                  label: `${(_p42 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p42 : "<unnamed>"} - Pipeline Layout`,
                  bindGroupLayouts: n.map(function (o) {
                    return _this20.branch.unwrap(o);
                  })
                }),
                compute: {
                  module: t.createShaderModule({
                    label: `${(_p43 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p43 : "<unnamed>"} - Shader`,
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
  function kr(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "vertex";
    return new $r(e, t);
  }
  function $t(e) {
    return (e == null ? void 0 : e.resourceType) === "vertex-layout";
  }
  var Vr = Symbol("defaultAttribEntry");
  function Vt(e, t, r, n, a) {
    if ((0, _chunkL7HIBZAX.S)(t) || (0, _chunkL7HIBZAX.X)(t)) {
      var o = (0, _chunkL7HIBZAX._)(t);
      return o !== void 0 && (n[a != null ? a : Vr] = o), Vt(e, t.inner, (0, _chunkSFECI7OX.a)(r, (0, _chunkSFECI7OX.T)(t)), n);
    }
    if ((0, _chunkL7HIBZAX.K)(t)) {
      var _o21 = r;
      return Object.fromEntries(Object.entries(t.propTypes).map(function (_ref51) {
        var _ref52 = (0, _slicedToArray2.default)(_ref51, 2),
          i = _ref52[0],
          s = _ref52[1];
        _o21 = (0, _chunkSFECI7OX.a)(_o21, (0, _chunkSFECI7OX.S)(s));
        var l = [i, Vt(e, s, _o21, n, i)];
        return _o21 += (0, _chunkSFECI7OX.V)(s), l;
      }));
    }
    if ((0, _chunkL7HIBZAX.W)(t)) {
      var _o22 = r;
      return Object.fromEntries(Object.entries(t.propTypes).map(function (_ref53) {
        var _ref54 = (0, _slicedToArray2.default)(_ref53, 2),
          i = _ref54[0],
          s = _ref54[1];
        _o22 = (0, _chunkSFECI7OX.a)(_o22, (0, _chunkSFECI7OX.T)(s));
        var l = [i, Vt(e, s, _o22, n, i)];
        return _o22 += (0, _chunkSFECI7OX.V)(s), l;
      }));
    }
    if ("type" in t && typeof t.type == "string") {
      if (_chunkL7HIBZAX.u.includes(t.type)) return {
        _layout: e,
        format: t.type,
        offset: r
      };
      var _o23 = _chunkL7HIBZAX.v[t.type];
      if (_o23) return {
        _layout: e,
        format: _o23,
        offset: r
      };
    }
    throw new Error(`Unsupported data used in vertex layout: ${String(t)}`);
  }
  var $r = /*#__PURE__*/function () {
    function $r(t, r) {
      (0, _classCallCheck2.default)(this, $r);
      this.resourceType = "vertex-layout";
      this._customLocationMap = {};
      this.schemaForCount = t;
      this.stepMode = r;
      var n = t(0);
      this.stride = (0, _chunkSFECI7OX.a)((0, _chunkSFECI7OX.V)(n.elementType), (0, _chunkSFECI7OX.S)(n)), this.attrib = Vt(this, n.elementType, 0, this._customLocationMap);
    }
    return (0, _createClass2.default)($r, [{
      key: "vertexLayout",
      get: function get() {
        var _this21 = this;
        if (this._customLocationMap[Vr] !== void 0) {
          if (typeof this.attrib.format != "string" || typeof this.attrib.offset != "number") throw new Error("Single attribute vertex layouts must have a format and offset.");
          return {
            arrayStride: this.stride,
            stepMode: this.stepMode,
            attributes: [{
              format: this.attrib.format,
              offset: this.attrib.offset,
              shaderLocation: this._customLocationMap[Vr]
            }]
          };
        }
        if (!Object.keys(this.attrib).every(function (r) {
          return _this21._customLocationMap[r] !== void 0;
        })) throw new Error("All attributes must have custom locations in order to unwrap a vertex layout.");
        return {
          arrayStride: this.stride,
          stepMode: this.stepMode,
          attributes: (0, _toConsumableArray2.default)(Object.entries(this.attrib).map(function (_ref55) {
            var _ref56 = (0, _slicedToArray2.default)(_ref55, 2),
              r = _ref56[0],
              n = _ref56[1];
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
        return (0, _chunkL7HIBZAX.f)(this, t), this;
      }
    }]);
  }();
  function Na(e) {
    return typeof (e == null ? void 0 : e.loadOp) == "string";
  }
  function Qn(e, t) {
    if ((0, _chunkL7HIBZAX.$)(e)) {
      if (!Na(t)) throw new Error("Expected a single color attachment, not a record.");
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
  function ja(e) {
    return typeof (e == null ? void 0 : e.format) == "string";
  }
  function Xn(e, t) {
    if ((0, _chunkL7HIBZAX.$)(e)) {
      if ((0, _chunkL7HIBZAX.T)(e)) return [];
      if (!ja(t)) throw new Error("Expected a single color target configuration, not a record.");
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
  function Zn(e) {
    return new _r(new Er(e), {});
  }
  function ea(e) {
    var t = e;
    return (t == null ? void 0 : t.resourceType) === "render-pipeline" && !!t[_chunkL7HIBZAX.a];
  }
  var _r = /*#__PURE__*/function () {
      function e(t, r) {
        (0, _classCallCheck2.default)(this, e);
        this.resourceType = "render-pipeline";
        this[_chunkL7HIBZAX.a] = {
          core: t,
          priors: r
        }, this[_chunkL7HIBZAX.d] = t;
      }
      return (0, _createClass2.default)(e, [{
        key: "$name",
        value: function $name(t) {
          return (0, _chunkL7HIBZAX.f)(this[_chunkL7HIBZAX.a].core, t), this;
        }
      }, {
        key: "with",
        value: function _with(t, r) {
          var _n$priors$bindGroupLa, _n$priors$vertexLayou;
          var n = this[_chunkL7HIBZAX.a];
          if (Rt(t)) return new e(n.core, Object.assign({}, n.priors, {
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
          var r = this[_chunkL7HIBZAX.a];
          return new e(r.core, Object.assign({}, r.priors, {
            colorAttachment: t
          }));
        }
      }, {
        key: "withDepthStencilAttachment",
        value: function withDepthStencilAttachment(t) {
          var r = this[_chunkL7HIBZAX.a];
          return new e(r.core, Object.assign({}, r.priors, {
            depthStencilAttachment: t
          }));
        }
      }, {
        key: "draw",
        value: function draw(t, r, n, a) {
          var _o$priors$colorAttach;
          var o = this[_chunkL7HIBZAX.a],
            i = o.core.unwrap(),
            _o$core$options = o.core.options,
            s = _o$core$options.branch,
            l = _o$core$options.fragmentFn,
            d = {
              colorAttachments: Qn(l.shell.targets, (_o$priors$colorAttach = o.priors.colorAttachment) != null ? _o$priors$colorAttach : {}).map(function (b) {
                return Q(b.view) ? Object.assign({}, b, {
                  view: s.unwrap(b.view).createView()
                }) : b;
              })
            },
            g = (0, _chunkL7HIBZAX.e)(o.core);
          if (g !== void 0 && (d.label = g), o.priors.depthStencilAttachment !== void 0) {
            var b = o.priors.depthStencilAttachment;
            Q(b.view) ? d.depthStencilAttachment = Object.assign({}, b, {
              view: s.unwrap(b.view).createView()
            }) : d.depthStencilAttachment = b;
          }
          var c = s.commandEncoder.beginRenderPass(d);
          c.setPipeline(i.pipeline);
          var y = new Set(i.bindGroupLayouts);
          i.bindGroupLayouts.forEach(function (b, U) {
            if (i.catchall && U === i.catchall[0]) c.setBindGroup(U, s.unwrap(i.catchall[1])), y.delete(b);else {
              var _o$priors$bindGroupLa;
              var _e = (_o$priors$bindGroupLa = o.priors.bindGroupLayoutMap) == null ? void 0 : _o$priors$bindGroupLa.get(b);
              _e !== void 0 && (y.delete(b), c.setBindGroup(U, s.unwrap(_e)));
            }
          });
          var x = new Set(o.core.usedVertexLayouts);
          if (o.core.usedVertexLayouts.forEach(function (b, U) {
            var _o$priors$vertexLayou;
            var _e = (_o$priors$vertexLayou = o.priors.vertexLayoutMap) == null ? void 0 : _o$priors$vertexLayou.get(b);
            _e && (x.delete(b), c.setVertexBuffer(U, s.unwrap(_e)));
          }), y.size > 0) throw new _chunkL7HIBZAX.m(y);
          if (x.size > 0) throw new _chunkL7HIBZAX.n(x);
          c.draw(t, r, n, a), c.end(), s.flush();
        }
      }]);
    }(),
    Er = /*#__PURE__*/function () {
      function Er(t) {
        (0, _classCallCheck2.default)(this, Er);
        this.options = t;
        var r = Un(t.vertexFn.shell.attributes[0], t.vertexAttribs);
        this._vertexBufferLayouts = r.bufferDefinitions, this.usedVertexLayouts = r.usedVertexLayouts, this._targets = Xn(t.fragmentFn.shell.targets, t.targets);
      }
      return (0, _createClass2.default)(Er, [{
        key: "unwrap",
        value: function unwrap() {
          var _this22 = this;
          if (this._memo === void 0) {
            var _u$d$, _p45, _p46, _p47;
            var _this$options = this.options,
              t = _this$options.branch,
              r = _this$options.vertexFn,
              n = _this$options.fragmentFn,
              a = _this$options.slotBindings,
              o = _this$options.primitiveState,
              i = _this$options.depthStencilState,
              s = _this$options.multisampleState,
              _ke3 = ke({
                "~resolve": function resolve(w) {
                  return w.withSlots(a, function () {
                    w.resolve(r), w.resolve(n);
                  }), "";
                },
                toString: function toString() {
                  var _p44;
                  return `renderPipeline:${(_p44 = (0, _chunkL7HIBZAX.e)(_this22)) != null ? _p44 : "<unnamed>"}`;
                }
              }, {
                names: t.nameRegistry,
                jitTranspiler: t.jitTranspiler
              }),
              l = _ke3.code,
              u = _ke3.bindGroupLayouts,
              d = _ke3.catchall;
            d !== null && ((_u$d$ = u[d[0]]) == null ? void 0 : _u$d$.$name(`${(_p45 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p45 : "<unnamed>"} - Automatic Bind Group & Layout`));
            var g = t.device,
              c = g.createShaderModule({
                label: `${(_p46 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p46 : "<unnamed>"} - Shader`,
                code: l
              }),
              y = {
                layout: g.createPipelineLayout({
                  label: `${(_p47 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p47 : "<unnamed>"} - Pipeline Layout`,
                  bindGroupLayouts: u.map(function (w) {
                    return t.unwrap(w);
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
              x = (0, _chunkL7HIBZAX.e)(this);
            x !== void 0 && (y.label = x), o && (y.primitive = o), i && (y.depthStencil = i), s && (y.multisample = s), this._memo = {
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
          return new e(this._getRoot, [].concat((0, _toConsumableArray2.default)(this._slotBindings), [[He(t) ? t.slot : t, r]]));
        }
      }, {
        key: "withCompute",
        value: function withCompute(t) {
          return new Lr(this._getRoot(), this._slotBindings, t);
        }
      }, {
        key: "withVertex",
        value: function withVertex(t, r) {
          return new Or({
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
    Lr = /*#__PURE__*/function () {
      function Lr(t, r, n) {
        (0, _classCallCheck2.default)(this, Lr);
        this._root = t;
        this._slotBindings = r;
        this._entryFn = n;
      }
      return (0, _createClass2.default)(Lr, [{
        key: "createPipeline",
        value: function createPipeline() {
          return Jn(this._root, this._slotBindings, this._entryFn);
        }
      }]);
    }(),
    Or = /*#__PURE__*/function () {
      function Or(t) {
        (0, _classCallCheck2.default)(this, Or);
        this._options = t;
      }
      return (0, _createClass2.default)(Or, [{
        key: "withFragment",
        value: function withFragment(t, r, n) {
          return (0, _chunkL7HIBZAX.h)(typeof t != "string", "Just type mismatch validation"), (0, _chunkL7HIBZAX.h)(typeof r != "string", "Just type mismatch validation"), new Mr(Object.assign({}, this._options, {
            fragmentFn: t,
            targets: r
          }));
        }
      }]);
    }(),
    Mr = /*#__PURE__*/function () {
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
          return Zn(this._options);
        }
      }]);
    }(),
    kt = /*#__PURE__*/function (_Gr) {
      function kt(_r14, n, a, o) {
        var _this23;
        (0, _classCallCheck2.default)(this, kt);
        _this23 = _callSuper(this, kt, [function () {
          return (0, _assertThisInitialized2.default)(_this23);
        }, []]);
        _this23._disposables = [];
        _this23._unwrappedBindGroupLayouts = new nt(function (r) {
          return r.unwrap(_this23);
        });
        _this23._unwrappedBindGroups = new nt(function (r) {
          return r.unwrap(_this23);
        });
        _this23._commandEncoder = null;
        _this23.device = _r14;
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
          var a = kn(this, r, n);
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
          return new $e(r, n);
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
          var n = Mn(r, this);
          return this._disposables.push(n), n;
        }
      }, {
        key: "unwrap",
        value: function unwrap(r) {
          if (Yn(r)) return r[_chunkL7HIBZAX.a].rawPipeline;
          if (ea(r)) return r[_chunkL7HIBZAX.a].core.unwrap().pipeline;
          if (Rt(r)) return this._unwrappedBindGroupLayouts.getOrMake(r);
          if (Fr(r)) return this._unwrappedBindGroups.getOrMake(r);
          if (ue(r)) return r.buffer;
          if (Q(r)) return r[_chunkL7HIBZAX.a].unwrap();
          if (tt(r)) {
            if (r[_chunkL7HIBZAX.a].unwrap) return r[_chunkL7HIBZAX.a].unwrap();
            throw new Error("Cannot unwrap laid-out texture view.");
          }
          if (rt(r)) {
            if (r[_chunkL7HIBZAX.a].unwrap) return r[_chunkL7HIBZAX.a].unwrap();
            throw new Error("Cannot unwrap laid-out texture view.");
          }
          if ($t(r)) return r.vertexLayout;
          if (Xe(r)) {
            if (r[_chunkL7HIBZAX.a].unwrap) return r[_chunkL7HIBZAX.a].unwrap(this);
            throw new Error("Cannot unwrap laid-out sampler.");
          }
          if (Ze(r)) {
            if (r[_chunkL7HIBZAX.a].unwrap) return r[_chunkL7HIBZAX.a].unwrap(this);
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
            i = new Map(),
            s,
            l = function l() {
              if (!s) throw new Error("Cannot draw without a call to pass.setPipeline");
              var _s$f = s[_chunkL7HIBZAX.a],
                u = _s$f.core,
                d = _s$f.priors,
                g = u.unwrap();
              a.setPipeline(g.pipeline);
              var c = new Set(g.bindGroupLayouts);
              g.bindGroupLayouts.forEach(function (x, w) {
                if (g.catchall && w === g.catchall[0]) a.setBindGroup(w, _this24.unwrap(g.catchall[1])), c.delete(x);else {
                  var _d$bindGroupLayoutMap, _d$bindGroupLayoutMap2;
                  var b = (_d$bindGroupLayoutMap = (_d$bindGroupLayoutMap2 = d.bindGroupLayoutMap) == null ? void 0 : _d$bindGroupLayoutMap2.get(x)) != null ? _d$bindGroupLayoutMap : o.get(x);
                  b !== void 0 && (c.delete(x), Fr(b) ? a.setBindGroup(w, _this24.unwrap(b)) : a.setBindGroup(w, b));
                }
              });
              var y = new Set();
              if (u.usedVertexLayouts.forEach(function (x, w) {
                var _d$vertexLayoutMap;
                var b = (_d$vertexLayoutMap = d.vertexLayoutMap) == null ? void 0 : _d$vertexLayoutMap.get(x),
                  U = b ? {
                    buffer: b,
                    offset: void 0,
                    size: void 0
                  } : i.get(x);
                !U || !U.buffer ? y.add(x) : ue(U.buffer) ? a.setVertexBuffer(w, _this24.unwrap(U.buffer), U.offset, U.size) : a.setVertexBuffer(w, U.buffer, U.offset, U.size);
              }), c.size > 0) throw new _chunkL7HIBZAX.m(c);
              if (y.size > 0) throw new _chunkL7HIBZAX.n(y);
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
              s = u;
            },
            setIndexBuffer: function setIndexBuffer(u, d, g, c) {
              ue(u) ? a.setIndexBuffer(_this24.unwrap(u), d, g, c) : a.setIndexBuffer(u, d, g, c);
            },
            setVertexBuffer: function setVertexBuffer(u, d, g, c) {
              i.set(u, {
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
  function ta(_x2) {
    return _ta.apply(this, arguments);
  }
  function _ta() {
    _ta = (0, _asyncToGenerator2.default)(function* (e) {
      var _ref62 = e != null ? e : {},
        t = _ref62.adapter,
        r = _ref62.device,
        _ref62$unstable_names = _ref62.unstable_names,
        n = _ref62$unstable_names === void 0 ? "random" : _ref62$unstable_names,
        a = _ref62.unstable_jitTranspiler;
      if (!navigator.gpu) throw new Error("WebGPU is not supported by this browser.");
      var o = yield navigator.gpu.requestAdapter(t);
      if (!o) throw new Error("Could not find a compatible GPU");
      return new kt(yield o.requestDevice(r), n === "random" ? new oe() : new ie(), a, !0);
    });
    return _ta.apply(this, arguments);
  }
  function ra(e) {
    var _ref57 = e != null ? e : {},
      t = _ref57.device,
      _ref57$unstable_names = _ref57.unstable_names,
      r = _ref57$unstable_names === void 0 ? "random" : _ref57$unstable_names,
      n = _ref57.unstable_jitTranspiler;
    return new kt(t, r === "random" ? new oe() : new ie(), n, !1);
  }
  function _t(e) {
    return new Wr(e);
  }
  var Wr = /*#__PURE__*/function () {
    function Wr() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : void 0;
      (0, _classCallCheck2.default)(this, Wr);
      this.resourceType = "slot";
      this.defaultValue = t;
    }
    return (0, _createClass2.default)(Wr, [{
      key: "$name",
      value: function $name(t) {
        return (0, _chunkL7HIBZAX.f)(this, t), this;
      }
    }, {
      key: "areEqual",
      value: function areEqual(t, r) {
        return Object.is(t, r);
      }
    }, {
      key: "toString",
      value: function toString() {
        var _p48;
        return `slot:${(_p48 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p48 : "<unnamed>"}`;
      }
    }, {
      key: _chunkL7HIBZAX.c,
      value: function value(t) {
        return ze(t, t.unwrap(this));
      }
    }, {
      key: "value",
      get: function get() {
        var t = (0, _chunkL7HIBZAX.q)();
        if (!t) throw new Error("Cannot access tgpu.slot's value outside of resolution.");
        return this[_chunkL7HIBZAX.c](t);
      }
    }]);
  }();
  function na(e, t) {
    return new Nr(e, t);
  }
  var Nr = /*#__PURE__*/function () {
    function Nr(t) {
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : void 0;
      (0, _classCallCheck2.default)(this, Nr);
      this.resourceType = "accessor";
      this.schema = t;
      this.defaultValue = r;
      this.slot = _t(r), this[_chunkL7HIBZAX.d] = this.slot;
    }
    return (0, _createClass2.default)(Nr, [{
      key: "$name",
      value: function $name(t) {
        return this.slot.$name(t), this;
      }
    }, {
      key: "toString",
      value: function toString() {
        var _p49;
        return `accessor:${(_p49 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p49 : "<unnamed>"}`;
      }
    }, {
      key: _chunkL7HIBZAX.c,
      value: function value() {
        var _this25 = this;
        return new Proxy((0, _defineProperty2.default)({
          "~resolve": function resolve(t) {
            return t.resolve(_this25);
          },
          toString: function toString() {
            var _p50;
            return `.value:${(_p50 = (0, _chunkL7HIBZAX.e)(_this25)) != null ? _p50 : "<unnamed>"}`;
          }
        }, _chunkL7HIBZAX.b, this.schema), q);
      }
    }, {
      key: "value",
      get: function get() {
        if (!(0, _chunkL7HIBZAX.t)()) throw new Error("`tgpu.accessor` values are only accessible on the GPU");
        return this[_chunkL7HIBZAX.c]();
      }
    }, {
      key: "~resolve",
      value: function resolve(t) {
        var r = t.unwrap(this.slot);
        return gn(r) ? t.resolve(r) : ir(r) ? `${t.resolve(r)}()` : t.resolveValue(r, this.schema);
      }
    }]);
  }();
  function aa(e) {
    return Ka(e);
  }
  function za(_ref58) {
    var _p51;
    var _ref59 = (0, _slicedToArray2.default)(_ref58, 2),
      e = _ref59[0],
      t = _ref59[1];
    return `${(_p51 = (0, _chunkL7HIBZAX.e)(e)) != null ? _p51 : "<unnamed>"}=${t}`;
  }
  function Ka(e) {
    if ((0, _chunkL7HIBZAX.q)()) throw new Error("Cannot create tgpu.derived objects at the resolution stage.");
    return (0, _defineProperty2.default)((0, _defineProperty2.default)(_defineAccessor("get", (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
      resourceType: "derived",
      "~compute": e
    }, _chunkL7HIBZAX.w, void 0), "~gpuRepr", void 0), _chunkL7HIBZAX.c, function (r) {
      return ze(r, r.unwrap(this));
    }), "value", function () {
      var r = (0, _chunkL7HIBZAX.q)();
      if (!r) throw new Error("Cannot access tgpu.derived's value outside of resolution.");
      return this[_chunkL7HIBZAX.c](r);
    }), "with", function _with(r, n) {
      return oa(this, [[r, n]]);
    }), "toString", function toString() {
      return "derived";
    });
  }
  function oa(e, t) {
    return (0, _defineProperty2.default)((0, _defineProperty2.default)(_defineAccessor("get", (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
      resourceType: "derived"
    }, _chunkL7HIBZAX.w, void 0), "~gpuRepr", void 0), "~compute", function compute() {
      throw new Error("'~compute' should never be read on bound derived items.");
    }), "~providing", {
      inner: e,
      pairs: t
    }), _chunkL7HIBZAX.c, function (n) {
      return ze(n, n.unwrap(this));
    }), "value", function () {
      var n = (0, _chunkL7HIBZAX.q)();
      if (!n) throw new Error("Cannot access tgpu.derived's value outside of resolution.");
      return this[_chunkL7HIBZAX.c](n);
    }), "with", function _with(n, a) {
      return oa(e, [].concat((0, _toConsumableArray2.default)(t), [[n, a]]));
    }), "toString", function toString() {
      return `derived[${t.map(za).join(", ")}]`;
    });
  }
  function ia(e, t) {
    return new Et("private", e, t);
  }
  function sa(e) {
    return new Et("workgroup", e);
  }
  var Et = /*#__PURE__*/function () {
    function Et(t, r, n) {
      (0, _classCallCheck2.default)(this, Et);
      this.scope = t;
      this._dataType = r;
      this._initialValue = n;
      this[_chunkL7HIBZAX.a] = {
        scope: t
      };
    }
    return (0, _createClass2.default)(Et, [{
      key: "~resolve",
      value: function resolve(t) {
        var r = t.names.makeUnique((0, _chunkL7HIBZAX.e)(this));
        return this._initialValue ? t.addDeclaration(`var<${this.scope}> ${r}: ${t.resolve(this._dataType)} = ${t.resolveValue(this._initialValue, this._dataType)};`) : t.addDeclaration(`var<${this.scope}> ${r}: ${t.resolve(this._dataType)};`), r;
      }
    }, {
      key: "$name",
      value: function $name(t) {
        return (0, _chunkL7HIBZAX.f)(this, t), this;
      }
    }, {
      key: "toString",
      value: function toString() {
        var _p52;
        return `var:${(_p52 = (0, _chunkL7HIBZAX.e)(this)) != null ? _p52 : "<unnamed>"}`;
      }
    }, {
      key: _chunkL7HIBZAX.c,
      value: function value() {
        var _this26 = this;
        return new Proxy((0, _defineProperty2.default)({
          "~resolve": function resolve(t) {
            return t.resolve(_this26);
          },
          toString: function toString() {
            var _p53;
            return `.value:${(_p53 = (0, _chunkL7HIBZAX.e)(_this26)) != null ? _p53 : "<unnamed>"}`;
          }
        }, _chunkL7HIBZAX.b, this._dataType), q);
      }
    }, {
      key: "value",
      get: function get() {
        if (!(0, _chunkL7HIBZAX.t)()) throw new Error("`tgpu.var` values are only accessible on the GPU");
        return this[_chunkL7HIBZAX.c]();
      }
    }]);
  }();
  var ua = exports.tgpu = {
      bindGroupLayout: Bt,
      vertexLayout: kr,
      init: ta,
      initFromDevice: ra,
      resolve: qn,
      "~unstable": {
        fn: vn,
        fragmentFn: Fn,
        vertexFn: In,
        computeFn: Sn,
        vertexLayout: kr,
        derived: aa,
        slot: _t,
        accessor: na,
        privateVar: ia,
        workgroupVar: sa,
        const: dn,
        declare: yn,
        sampler: _n,
        comparisonSampler: En
      }
    },
    rl = exports.default = ua;
  Object.assign(ua, {
    __assignAst: hn,
    __removedJsImpl: wn
  });
},1,[2,3,4,5,7,8,10,14,20,21,24,25,29,32,30,33,31],"node_modules/typegpu/index.js");
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
  exports.$ = dt;
  exports.R = exports.Q = exports.P = exports.O = exports.N = exports.M = exports.L = exports.K = exports.J = exports.I = exports.H = exports.G = exports.F = exports.E = exports.D = exports.C = exports.B = exports.A = void 0;
  exports.S = x;
  exports.T = I;
  exports.U = rt;
  exports.V = l;
  exports.W = ut;
  exports.X = G;
  exports.Y = ct;
  exports.Z = yt;
  exports._ = ft;
  exports.a = void 0;
  exports.aa = Tt;
  exports.b = void 0;
  exports.ba = $e;
  exports.c = void 0;
  exports.ca = X;
  exports.d = void 0;
  exports.da = pt;
  exports.e = void 0;
  exports.ea = xt;
  exports.f = void 0;
  exports.fa = mt;
  exports.z = exports.y = exports.x = exports.w = exports.v = exports.u = exports.t = exports.s = exports.r = exports.q = exports.p = exports.o = exports.n = exports.m = exports.l = exports.k = exports.j = exports.i = exports.h = exports.ga = exports.g = void 0;
  var _possibleConstructorReturn2 = _interopRequireDefault(require(_dependencyMap[1], "@babel/runtime/helpers/possibleConstructorReturn"));
  var _getPrototypeOf2 = _interopRequireDefault(require(_dependencyMap[2], "@babel/runtime/helpers/getPrototypeOf"));
  var _inherits2 = _interopRequireDefault(require(_dependencyMap[3], "@babel/runtime/helpers/inherits"));
  var _toConsumableArray2 = _interopRequireDefault(require(_dependencyMap[4], "@babel/runtime/helpers/toConsumableArray"));
  var _createClass2 = _interopRequireDefault(require(_dependencyMap[5], "@babel/runtime/helpers/createClass"));
  var _classCallCheck2 = _interopRequireDefault(require(_dependencyMap[6], "@babel/runtime/helpers/classCallCheck"));
  var _defineProperty2 = _interopRequireDefault(require(_dependencyMap[7], "@babel/runtime/helpers/defineProperty"));
  var _chunkL7HIBZAX = require(_dependencyMap[8], "./chunk-L7HIBZAX.js");
  function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  function X(t) {
    var e = function e(r) {
      return r;
    };
    return Object.setPrototypeOf(e, Y), e.propTypes = t, e;
  }
  var Y = (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _chunkL7HIBZAX.a, !0), "type", "struct"), "$name", function $name(t) {
    return (0, _chunkL7HIBZAX.f)(this, t), this;
  }), "toString", function toString() {
    var _h;
    return `struct:${(_h = (0, _chunkL7HIBZAX.e)(this)) != null ? _h : "<unnamed>"}`;
  });
  var b = exports.a = function b(t, e) {
    var r = e - 1,
      i = ~r;
    return (t & r) === 0 ? t : (t & i) + e;
  };
  var n = /*#__PURE__*/(0, _createClass2.default)(function n(e) {
      (0, _classCallCheck2.default)(this, n);
      this[_chunkL7HIBZAX.a] = !0;
      this.type = e;
    }),
    Z = exports.b = {
      uint8: _chunkL7HIBZAX.ia,
      uint8x2: _chunkL7HIBZAX.pa,
      uint8x4: _chunkL7HIBZAX.za,
      sint8: _chunkL7HIBZAX.ja,
      sint8x2: _chunkL7HIBZAX.oa,
      sint8x4: _chunkL7HIBZAX.ya,
      unorm8: _chunkL7HIBZAX.ka,
      unorm8x2: _chunkL7HIBZAX.ma,
      unorm8x4: _chunkL7HIBZAX.wa,
      snorm8: _chunkL7HIBZAX.ka,
      snorm8x2: _chunkL7HIBZAX.ma,
      snorm8x4: _chunkL7HIBZAX.wa,
      uint16: _chunkL7HIBZAX.ia,
      uint16x2: _chunkL7HIBZAX.pa,
      uint16x4: _chunkL7HIBZAX.za,
      sint16: _chunkL7HIBZAX.ja,
      sint16x2: _chunkL7HIBZAX.oa,
      sint16x4: _chunkL7HIBZAX.ya,
      unorm16: _chunkL7HIBZAX.ka,
      unorm16x2: _chunkL7HIBZAX.ma,
      unorm16x4: _chunkL7HIBZAX.wa,
      snorm16: _chunkL7HIBZAX.ka,
      snorm16x2: _chunkL7HIBZAX.ma,
      snorm16x4: _chunkL7HIBZAX.wa,
      float16: _chunkL7HIBZAX.ka,
      float16x2: _chunkL7HIBZAX.ma,
      float16x4: _chunkL7HIBZAX.wa,
      float32: _chunkL7HIBZAX.ka,
      float32x2: _chunkL7HIBZAX.ma,
      float32x3: _chunkL7HIBZAX.ra,
      float32x4: _chunkL7HIBZAX.wa,
      uint32: _chunkL7HIBZAX.ia,
      uint32x2: _chunkL7HIBZAX.pa,
      uint32x3: _chunkL7HIBZAX.ua,
      uint32x4: _chunkL7HIBZAX.za,
      sint32: _chunkL7HIBZAX.ja,
      sint32x2: _chunkL7HIBZAX.oa,
      sint32x3: _chunkL7HIBZAX.ta,
      sint32x4: _chunkL7HIBZAX.ya,
      "unorm10-10-10-2": _chunkL7HIBZAX.wa,
      "unorm8x4-bgra": _chunkL7HIBZAX.wa
    },
    H = exports.c = Object.keys(Z),
    Vt = exports.d = new n("uint8"),
    Ft = exports.e = new n("uint8x2"),
    St = exports.f = new n("uint8x4"),
    _t = exports.g = new n("sint8"),
    ht = exports.h = new n("sint8x2"),
    Lt = exports.i = new n("sint8x4"),
    Wt = exports.j = new n("unorm8"),
    kt = exports.k = new n("unorm8x2"),
    Pt = exports.l = new n("unorm8x4"),
    zt = exports.m = new n("snorm8"),
    Ut = exports.n = new n("snorm8x2"),
    Ot = exports.o = new n("snorm8x4"),
    $t = exports.p = new n("uint16"),
    Et = exports.q = new n("uint16x2"),
    Nt = exports.r = new n("uint16x4"),
    Mt = exports.s = new n("sint16"),
    Ct = exports.t = new n("sint16x2"),
    Gt = exports.u = new n("sint16x4"),
    jt = exports.v = new n("unorm16"),
    Rt = exports.w = new n("unorm16x2"),
    Kt = exports.x = new n("unorm16x4"),
    Ht = exports.y = new n("snorm16"),
    Jt = exports.z = new n("snorm16x2"),
    qt = exports.A = new n("snorm16x4"),
    Qt = exports.B = new n("float16"),
    Xt = exports.C = new n("float16x2"),
    Yt = exports.D = new n("float16x4"),
    Zt = exports.E = new n("float32"),
    te = exports.F = new n("float32x2"),
    ee = exports.G = new n("float32x3"),
    ne = exports.H = new n("float32x4"),
    re = exports.I = new n("uint32"),
    oe = exports.J = new n("uint32x2"),
    ie = exports.K = new n("uint32x3"),
    ae = exports.L = new n("uint32x4"),
    se = exports.M = new n("sint32"),
    ue = exports.N = new n("sint32x2"),
    pe = exports.O = new n("sint32x3"),
    xe = exports.P = new n("sint32x4"),
    le = exports.Q = new n("unorm10-10-10-2"),
    me = exports.R = new n("unorm8x4-bgra");
  var tt = {
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
  function et(t) {
    var _D2, _D3;
    var e = t == null ? void 0 : t.type,
      r = tt[e];
    if (r !== void 0) return r;
    if ((0, _chunkL7HIBZAX.K)(t)) return Object.values(t.propTypes).map(x).reduce(function (i, y) {
      return i > y ? i : y;
    });
    if ((0, _chunkL7HIBZAX.J)(t)) return x(t.elementType);
    if ((0, _chunkL7HIBZAX.W)(t)) {
      var _D;
      var i = Object.values(t.propTypes)[0];
      return i ? (_D = (0, _chunkL7HIBZAX.Y)(i)) != null ? _D : 1 : 1;
    }
    if ((0, _chunkL7HIBZAX.V)(t)) return (_D2 = (0, _chunkL7HIBZAX.Y)(t.elementType)) != null ? _D2 : 1;
    if ((0, _chunkL7HIBZAX.S)(t) || (0, _chunkL7HIBZAX.X)(t)) return (_D3 = (0, _chunkL7HIBZAX.Y)(t)) != null ? _D3 : x(t.inner);
    if (H.includes(e)) return 1;
    throw new Error(`Cannot determine alignment of data: ${JSON.stringify(t)}`);
  }
  function nt(t) {
    var _D4, _D5;
    if ((0, _chunkL7HIBZAX.W)(t)) {
      var e = Object.values(t.propTypes)[0];
      return e ? I(e) : 1;
    }
    return (0, _chunkL7HIBZAX.V)(t) ? I(t.elementType) : (0, _chunkL7HIBZAX.X)(t) ? (_D4 = (0, _chunkL7HIBZAX.Y)(t)) != null ? _D4 : I(t.inner) : (_D5 = (0, _chunkL7HIBZAX.Y)(t)) != null ? _D5 : 1;
  }
  var J = new WeakMap(),
    q = new WeakMap();
  function x(t) {
    var e = J.get(t);
    return e === void 0 && (e = et(t), J.set(t, e)), e;
  }
  function I(t) {
    var e = q.get(t);
    return e === void 0 && (e = nt(t), q.set(t, e)), e;
  }
  function rt(t) {
    return x(t);
  }
  var ot = {
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
  function it(t) {
    var e = 0;
    for (var r of Object.values(t.propTypes)) {
      if (Number.isNaN(e)) throw new Error("Only the last property of a struct can be unbounded");
      if (e = b(e, x(r)), e += l(r), Number.isNaN(e) && r.type !== "array") throw new Error("Cannot nest unbounded struct within another struct");
    }
    return b(e, x(t));
  }
  function at(t) {
    var e = 0;
    for (var r of Object.values(t.propTypes)) {
      var i = I(r);
      e = b(e, i), e += l(r);
    }
    return e;
  }
  function st(t) {
    var _K;
    var e = ot[t == null ? void 0 : t.type];
    if (e !== void 0) return e;
    if ((0, _chunkL7HIBZAX.K)(t)) return it(t);
    if ((0, _chunkL7HIBZAX.W)(t)) return at(t);
    if ((0, _chunkL7HIBZAX.J)(t)) {
      if (t.elementCount === 0) return Number.NaN;
      var r = x(t.elementType);
      return b(l(t.elementType), r) * t.elementCount;
    }
    if ((0, _chunkL7HIBZAX.V)(t)) {
      var _r = I(t.elementType);
      return b(l(t.elementType), _r) * t.elementCount;
    }
    if ((0, _chunkL7HIBZAX.S)(t) || (0, _chunkL7HIBZAX.X)(t)) return (_K = (0, _chunkL7HIBZAX.Z)(t)) != null ? _K : l(t.inner);
    throw new Error(`Cannot determine size of data: ${t}`);
  }
  var Q = new WeakMap();
  function l(t) {
    var e = Q.get(t);
    return e === void 0 && (e = st(t), Q.set(t, e)), e;
  }
  function ut(t) {
    return l(t);
  }
  function G(t, e) {
    return new C(t, e);
  }
  var C = /*#__PURE__*/function () {
    function C(e, r) {
      (0, _classCallCheck2.default)(this, C);
      this[_chunkL7HIBZAX.a] = !0;
      this.type = "array";
      this.elementType = e;
      this.elementCount = r;
      if (Number.isNaN(l(e))) throw new Error("Cannot nest runtime sized arrays.");
      if (!Number.isInteger(r) || r < 0) throw new Error(`Cannot create array schema with invalid element count: ${r}.`);
    }
    return (0, _createClass2.default)(C, [{
      key: "toString",
      value: function toString() {
        return `arrayOf(${this.elementType})`;
      }
    }]);
  }();
  function pt(t, e) {
    return new j(t, e);
  }
  var j = /*#__PURE__*/(0, _createClass2.default)(function j(e, r) {
    (0, _classCallCheck2.default)(this, j);
    this[_chunkL7HIBZAX.a] = !0;
    this.type = "disarray";
    this.elementType = e;
    this.elementCount = r;
    if (!Number.isInteger(r) || r < 0) throw new Error(`Cannot create disarray schema with invalid element count: ${r}.`);
  });
  function xt(t) {
    var e = function e(r) {
      return r;
    };
    return Object.setPrototypeOf(e, lt), e.propTypes = t, e;
  }
  var lt = (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _chunkL7HIBZAX.a, !0), "type", "unstruct"), "$name", function $name(t) {
    return (0, _chunkL7HIBZAX.f)(this, t), this;
  }), "toString", function toString() {
    var _h2;
    return `unstruct:${(_h2 = (0, _chunkL7HIBZAX.e)(this)) != null ? _h2 : "<unnamed>"}`;
  });
  function mt(t) {
    return new R(t);
  }
  var R = /*#__PURE__*/(0, _createClass2.default)(function R(e) {
    (0, _classCallCheck2.default)(this, R);
    this[_chunkL7HIBZAX.a] = !0;
    this.type = "atomic";
    this.inner = e;
  });
  function B(t, e) {
    return (0, _chunkL7HIBZAX.S)(t) ? new k(t.inner, [e].concat((0, _toConsumableArray2.default)(t.attribs))) : (0, _chunkL7HIBZAX.X)(t) ? new P(t.inner, [e].concat((0, _toConsumableArray2.default)(t.attribs))) : (0, _chunkL7HIBZAX.U)(t) ? new P(t, [e]) : new k(t, [e]);
  }
  function ct(t, e) {
    return B(e, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _chunkL7HIBZAX.a, !0), "type", "@align"), "value", t));
  }
  function yt(t, e) {
    return B(e, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _chunkL7HIBZAX.a, !0), "type", "@size"), "value", t));
  }
  function ft(t, e) {
    return B(e, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _chunkL7HIBZAX.a, !0), "type", "@location"), "value", t));
  }
  function dt(t, e) {
    return B(e, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _chunkL7HIBZAX.a, !0), "type", "@interpolate"), "value", t));
  }
  function Tt(t) {
    return ((0, _chunkL7HIBZAX.S)(t) || (0, _chunkL7HIBZAX.X)(t)) && t.attribs.find(_chunkL7HIBZAX.R) !== void 0;
  }
  function $e(t) {
    return !(0, _chunkL7HIBZAX.S)(t) && !(0, _chunkL7HIBZAX.X)(t) ? "" : t.attribs.map(function (e) {
      return `${e.type}(${e.value}) `;
    }).join("");
  }
  var W = /*#__PURE__*/(0, _createClass2.default)(function W(e, r) {
      var _r$find, _r$find2;
      (0, _classCallCheck2.default)(this, W);
      this[_chunkL7HIBZAX.a] = !0;
      this.inner = e;
      this.attribs = r;
      var i = (_r$find = r.find(_chunkL7HIBZAX.N)) == null ? void 0 : _r$find.value,
        y = (_r$find2 = r.find(_chunkL7HIBZAX.O)) == null ? void 0 : _r$find2.value;
      if (i !== void 0) {
        if (i <= 0) throw new Error(`Custom data alignment must be a positive number, got: ${i}.`);
        if (Math.log2(i) % 1 !== 0) throw new Error(`Alignment has to be a power of 2, got: ${i}.`);
        if ((0, _chunkL7HIBZAX.I)(this.inner) && i % x(this.inner) !== 0) throw new Error(`Custom alignment has to be a multiple of the standard data alignment. Got: ${i}, expected multiple of: ${x(this.inner)}.`);
      }
      if (y !== void 0) {
        if (y < l(this.inner)) throw new Error(`Custom data size cannot be smaller then the standard data size. Got: ${y}, expected at least: ${l(this.inner)}.`);
        if (y <= 0) throw new Error(`Custom data size must be a positive number. Got: ${y}.`);
      }
    }),
    k = /*#__PURE__*/function (_W) {
      function k() {
        var _this;
        (0, _classCallCheck2.default)(this, k);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _callSuper(this, k, [].concat(args));
        _this[_chunkL7HIBZAX.a] = !0;
        _this.type = "decorated";
        return _this;
      }
      (0, _inherits2.default)(k, _W);
      return (0, _createClass2.default)(k);
    }(W),
    P = /*#__PURE__*/function (_W2) {
      function P() {
        var _this2;
        (0, _classCallCheck2.default)(this, P);
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        _this2 = _callSuper(this, P, [].concat(args));
        _this2[_chunkL7HIBZAX.a] = !0;
        _this2.type = "loose-decorated";
        return _this2;
      }
      (0, _inherits2.default)(P, _W2);
      return (0, _createClass2.default)(P);
    }(W);
  function a(t, e) {
    return B(t, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, _chunkL7HIBZAX.a, !0), "type", "@builtin"), "value", e));
  }
  var gt = exports.ga = {
    vertexIndex: a(_chunkL7HIBZAX.ia, "vertex_index"),
    instanceIndex: a(_chunkL7HIBZAX.ia, "instance_index"),
    position: a(_chunkL7HIBZAX.wa, "position"),
    clipDistances: a(G(_chunkL7HIBZAX.ia, 8), "clip_distances"),
    frontFacing: a(_chunkL7HIBZAX.ka, "front_facing"),
    fragDepth: a(_chunkL7HIBZAX.ka, "frag_depth"),
    sampleIndex: a(_chunkL7HIBZAX.ia, "sample_index"),
    sampleMask: a(_chunkL7HIBZAX.ia, "sample_mask"),
    localInvocationId: a(_chunkL7HIBZAX.ua, "local_invocation_id"),
    localInvocationIndex: a(_chunkL7HIBZAX.ia, "local_invocation_index"),
    globalInvocationId: a(_chunkL7HIBZAX.ua, "global_invocation_id"),
    workgroupId: a(_chunkL7HIBZAX.ua, "workgroup_id"),
    numWorkgroups: a(_chunkL7HIBZAX.ua, "num_workgroups"),
    subgroupInvocationId: a(_chunkL7HIBZAX.ia, "subgroup_invocation_id"),
    subgroupSize: a(_chunkL7HIBZAX.ia, "subgroup_size")
  };
},29,[2,5,7,8,25,21,20,24,30],"node_modules/typegpu/chunk-SFECI7OX.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var _interopRequireDefault = require(_dependencyMap[0], "@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.$ = Ct;
  exports.A = Ve;
  exports.Aa = void 0;
  exports.B = ve;
  exports.Ba = void 0;
  exports.C = ce;
  exports.Ca = void 0;
  exports.D = xt;
  exports.Da = void 0;
  exports.E = Ae;
  exports.Ea = void 0;
  exports.F = Ie;
  exports.Fa = fn;
  exports.G = wt;
  exports.Ga = Vn;
  exports.H = dt;
  exports.Ha = vn;
  exports.I = le;
  exports.Ia = _n;
  exports.J = pt;
  exports.Ja = An;
  exports.K = mt;
  exports.Ka = In;
  exports.L = gt;
  exports.La = kn;
  exports.M = Tt;
  exports.N = xe;
  exports.O = we;
  exports.P = de;
  exports.Q = ft;
  exports.R = bt;
  exports.S = pe;
  exports.T = zt;
  exports.U = De;
  exports.V = It;
  exports.W = kt;
  exports.X = $t;
  exports.Y = St;
  exports.Z = Dt;
  exports._ = Pt;
  exports.b = exports.aa = exports.a = void 0;
  exports.ba = u;
  exports.c = void 0;
  exports.ca = Mt;
  exports.d = void 0;
  exports.da = Ot;
  exports.e = P;
  exports.ea = y;
  exports.f = B;
  exports.fa = void 0;
  exports.g = st;
  exports.ga = void 0;
  exports.h = H;
  exports.oa = exports.o = exports.na = exports.n = exports.ma = exports.m = exports.la = exports.l = exports.ka = exports.k = exports.ja = exports.j = exports.ia = exports.i = exports.ha = void 0;
  exports.p = Rt;
  exports.pa = void 0;
  exports.q = Bt;
  exports.qa = void 0;
  exports.r = Wt;
  exports.ra = void 0;
  exports.s = Lt;
  exports.wa = exports.w = exports.va = exports.v = exports.ua = exports.u = exports.ta = exports.t = exports.sa = void 0;
  exports.x = ct;
  exports.ya = exports.y = exports.xa = void 0;
  exports.z = ze;
  exports.za = void 0;
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
  var D = "0.5.8";
  var r = exports.a = Symbol(`typegpu:${D}:$internal`),
    se = exports.b = Symbol(`typegpu:${D}:$wgslDataType`),
    tt = exports.c = Symbol(`typegpu:${D}:$gpuValueOf`),
    O = exports.d = Symbol(`typegpu:${D}:$getNameForward`);
  function fe(e) {
    return !!(e != null && e[O]);
  }
  function P(e) {
    var _globalThis$__TYPEGPU;
    return fe(e) ? P(e[O]) : (_globalThis$__TYPEGPU = globalThis.__TYPEGPU_META__) == null || (_globalThis$__TYPEGPU = _globalThis$__TYPEGPU.get(e)) == null ? void 0 : _globalThis$__TYPEGPU.name;
  }
  function B(e, t) {
    var _globalThis$__TYPEGPU2;
    (_globalThis$__TYPEGPU2 = globalThis.__TYPEGPU_META__) != null ? _globalThis$__TYPEGPU2 : globalThis.__TYPEGPU_META__ = new WeakMap();
    var n = globalThis.__TYPEGPU_META__;
    n.set(e, Object.assign({}, n.get(e), {
      name: t
    }));
  }
  function st(e) {
    return !!(e != null && e.$name);
  }
  var K = "Invariant failed";
  function H(e, t) {
    if (e) return;
    throw new Error(K);
  }
  var ie = exports.i = /*#__PURE__*/function (_Error) {
      function e(n, i) {
        var _this;
        (0, _classCallCheck2.default)(this, e);
        var s = i.map(function (a) {
          return `- ${a}`;
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
    ae = exports.j = /*#__PURE__*/function (_Error2) {
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
    oe = exports.k = /*#__PURE__*/function (_Error3) {
      function e(t) {
        var _P;
        var _this3;
        (0, _classCallCheck2.default)(this, e);
        _this3 = _callSuper(this, e, [`Buffer '${(_P = P(t)) != null ? _P : "<unnamed>"}' is not bindable as a uniform. Use .$usage('uniform') to allow it.`]), Object.setPrototypeOf((0, _assertThisInitialized2.default)(_this3), e.prototype);
        return _this3;
      }
      (0, _inherits2.default)(e, _Error3);
      return (0, _createClass2.default)(e);
    }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error)),
    he = exports.l = /*#__PURE__*/function (_Error4) {
      function e(t, n) {
        var _this4;
        (0, _classCallCheck2.default)(this, e);
        _this4 = _callSuper(this, e, [`The function '${t != null ? t : "<unnamed>"}' is missing links to the following external values: ${n}.`]), Object.setPrototypeOf((0, _assertThisInitialized2.default)(_this4), e.prototype);
        return _this4;
      }
      (0, _inherits2.default)(e, _Error4);
      return (0, _createClass2.default)(e);
    }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error)),
    ue = exports.m = /*#__PURE__*/function (_Error5) {
      function e(t) {
        var _this5;
        (0, _classCallCheck2.default)(this, e);
        _this5 = _callSuper(this, e, [`Missing bind groups for layouts: '${(0, _toConsumableArray2.default)(t).map(function (n) {
          var _P2;
          return (_P2 = P(n)) != null ? _P2 : "<unnamed>";
        }).join(", ")}'. Please provide it using pipeline.with(layout, bindGroup).(...)`]), Object.setPrototypeOf((0, _assertThisInitialized2.default)(_this5), e.prototype);
        return _this5;
      }
      (0, _inherits2.default)(e, _Error5);
      return (0, _createClass2.default)(e);
    }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error)),
    ye = exports.n = /*#__PURE__*/function (_Error6) {
      function e(t) {
        var _this6;
        (0, _classCallCheck2.default)(this, e);
        _this6 = _callSuper(this, e, [`Missing vertex buffers for layouts: '${(0, _toConsumableArray2.default)(t).map(function (n) {
          var _P3;
          return (_P3 = P(n)) != null ? _P3 : "<unnamed>";
        }).join(", ")}'. Please provide it using pipeline.with(layout, buffer).(...)`]), Object.setPrototypeOf((0, _assertThisInitialized2.default)(_this6), e.prototype);
        return _this6;
      }
      (0, _inherits2.default)(e, _Error6);
      return (0, _createClass2.default)(e);
    }(/*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
  var w = exports.w = Symbol("Type token for the inferred (CPU & GPU) representation of a resource");
  function ct(e) {
    return !!(e != null && e[se]);
  }
  var lt = exports.y = (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "void"), w, void 0),
    be = ["bool", "f32", "f16", "i32", "u32", "vec2f", "vec2h", "vec2i", "vec2u", "vec2<bool>", "vec3f", "vec3h", "vec3i", "vec3u", "vec3<bool>", "vec4f", "vec4h", "vec4i", "vec4u", "vec4<bool>", "mat2x2f", "mat3x3f", "mat4x4f", "struct", "array", "ptr", "atomic", "decorated", "abstractInt", "abstractFloat", "void"];
  function ze(e) {
    var _t$kind;
    var t = e;
    return !!(t != null && t[r]) && typeof ((_t$kind = t.kind) == null ? void 0 : _t$kind.startsWith) == "function" && t.kind.startsWith("vec");
  }
  function Ve(e) {
    var _t$type;
    var t = e;
    return !!(t != null && t[r]) && typeof ((_t$type = t.type) == null ? void 0 : _t$type.startsWith) == "function" && (t.type.startsWith == null ? void 0 : t.type.startsWith("vec2"));
  }
  function ve(e) {
    var _t$type2;
    var t = e;
    return !!(t != null && t[r]) && typeof ((_t$type2 = t.type) == null ? void 0 : _t$type2.startsWith) == "function" && t.type.startsWith("vec3");
  }
  function _e(e) {
    var _t$type3;
    var t = e;
    return !!(t != null && t[r]) && typeof ((_t$type3 = t.type) == null ? void 0 : _t$type3.startsWith) == "function" && t.type.startsWith("vec4");
  }
  function ce(e) {
    return Ve(e) || ve(e) || _e(e);
  }
  function xt(e) {
    var _t$kind2;
    var t = e;
    return !!(t != null && t[r]) && typeof ((_t$kind2 = t.kind) == null ? void 0 : _t$kind2.startsWith) == "function" && t.kind.startsWith("mat");
  }
  function Ae(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "mat2x2f";
  }
  function Ie(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "mat3x3f";
  }
  function ke(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "mat4x4f";
  }
  function wt(e) {
    return Ae(e) || Ie(e) || ke(e);
  }
  function dt(e) {
    return ze(e) && ["vec2f", "vec3f", "vec4f"].includes(e.kind);
  }
  function le(e) {
    return (e == null ? void 0 : e[r]) && be.includes(e == null ? void 0 : e.type);
  }
  function pt(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "array";
  }
  function mt(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "struct";
  }
  function gt(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "ptr";
  }
  function Tt(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "atomic";
  }
  function xe(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "@align";
  }
  function we(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "@size";
  }
  function de(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "@location";
  }
  function ft(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "@interpolate";
  }
  function bt(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "@builtin";
  }
  function pe(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "decorated";
  }
  function zt(e) {
    return (e == null ? void 0 : e[r]) && e.type === "void";
  }
  var me = exports.u = ["uint8", "uint8x2", "uint8x4", "sint8", "sint8x2", "sint8x4", "unorm8", "unorm8x2", "unorm8x4", "snorm8", "snorm8x2", "snorm8x4", "uint16", "uint16x2", "uint16x4", "sint16", "sint16x2", "sint16x4", "unorm16", "unorm16x2", "unorm16x4", "snorm16", "snorm16x2", "snorm16x4", "float16", "float16x2", "float16x4", "float32", "float32x2", "float32x3", "float32x4", "uint32", "uint32x2", "uint32x3", "uint32x4", "sint32", "sint32x2", "sint32x3", "sint32x4", "unorm10-10-10-2", "unorm8x4-bgra"],
    Vt = exports.v = {
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
  var Se = ["unstruct", "disarray", "loose-decorated"].concat(me);
  function De(e) {
    return (e == null ? void 0 : e[r]) && Se.includes(e == null ? void 0 : e.type);
  }
  function It(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "disarray";
  }
  function kt(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "unstruct";
  }
  function $t(e) {
    return (e == null ? void 0 : e[r]) && (e == null ? void 0 : e.type) === "loose-decorated";
  }
  function St(e) {
    var _e$attribs;
    return (_e$attribs = e.attribs) == null || (_e$attribs = _e$attribs.find(xe)) == null ? void 0 : _e$attribs.value;
  }
  function Dt(e) {
    var _e$attribs2;
    return (_e$attribs2 = e.attribs) == null || (_e$attribs2 = _e$attribs2.find(we)) == null ? void 0 : _e$attribs2.value;
  }
  function Pt(e) {
    var _e$attribs3;
    return (_e$attribs3 = e.attribs) == null || (_e$attribs3 = _e$attribs3.find(de)) == null ? void 0 : _e$attribs3.value;
  }
  function Ct(e) {
    return le(e) || De(e);
  }
  var Ft = exports.aa = {
      type: "unknown",
      toString: function toString() {
        return "unknown";
      }
    },
    W = /*#__PURE__*/(0, _createClass2.default)(function W(t, n) {
      (0, _classCallCheck2.default)(this, W);
      this.value = t;
      this.dataType = n;
    });
  function u(e, t) {
    return new W(e, t.type === "decorated" || t.type === "loose-decorated" ? t.inner : t);
  }
  function Mt(e) {
    return e instanceof W;
  }
  var L = null,
    Pe = Symbol("CPU"),
    Ce = Symbol("GPU"),
    Fe = exports.o = {
      CPU: Pe,
      GPU: Ce
    },
    C = [];
  function Rt(e, t) {
    H(L === null, "Cannot nest context providers"), L = e;
    try {
      return t();
    } finally {
      L = null;
    }
  }
  function Bt() {
    return L;
  }
  function Wt(e) {
    C.push(e);
  }
  function Lt(e) {
    var t = C.pop();
    e !== void 0 && H(t === e, "Unexpected mode");
  }
  var ge = exports.t = function ge() {
    return C.length > 0 && C[C.length - 1] === Fe.GPU;
  };
  function* Ot(e) {
    var t = 0;
    for (;;) e.has(t) || (yield t), t++;
  }
  function y(e, t, n) {
    var i = function i() {
      return ge() ? t.apply(void 0, arguments) : e.apply(void 0, arguments);
    };
    return i[r] = {
      implementation: e,
      argTypes: n
    }, i;
  }
  var Qt = exports.fa = (0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "abstractInt"),
    Xt = exports.ga = (0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "abstractFloat"),
    G = exports.ha = (0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "bool"),
    Me = y(function (e) {
      return typeof e == "boolean" ? e ? 1 : 0 : Number.isInteger(e) ? ((e < 0 || e > 4294967295) && console.warn(`u32 value ${e} overflowed`), (e & 4294967295) >>> 0) : Math.max(0, Math.min(4294967295, Math.floor(e)));
    }, function (e) {
      return u(`u32(${e.value})`, F);
    }),
    F = exports.ia = Object.assign(Me, {
      type: "u32"
    }),
    Ne = y(function (e) {
      if (typeof e == "boolean") return e ? 1 : 0;
      if (Number.isInteger(e)) return (e < -2147483648 || e > 2147483647) && console.warn(`i32 value ${e} overflowed`), (e | 0) & 4294967295;
      var t = e < 0 ? Math.ceil(e) : Math.floor(e);
      return Math.max(-2147483648, Math.min(2147483647, t));
    }, function (e) {
      return u(`i32(${e.value})`, M);
    }),
    M = exports.ja = Object.assign(Ne, {
      type: "i32"
    }),
    Ue = y(function (e) {
      if (typeof e == "boolean") return e ? 1 : 0;
      var t = new Float32Array(1);
      return t[0] = e, t[0];
    }, function (e) {
      return u(`f32(${e.value})`, N);
    }),
    N = exports.ka = Object.assign(Ue, {
      type: "f32"
    }),
    Re = y(function (e) {
      if (typeof e == "boolean") return e ? 1 : 0;
      var t = new ArrayBuffer(2);
      return _typedBinary.default.f16.write(new _typedBinary.default.BufferWriter(t), e), _typedBinary.default.f16.read(new _typedBinary.default.BufferReader(t));
    }, function (e) {
      return u(`f16(${e.value})`, U);
    }),
    U = exports.la = Object.assign(Re, {
      type: "f16"
    });
  var R = /*#__PURE__*/function (_Array) {
      function R() {
        var _this7;
        (0, _classCallCheck2.default)(this, R);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this7 = _callSuper(this, R, [].concat(args));
        _this7[r] = !0;
        return _this7;
      }
      (0, _inherits2.default)(R, _Array);
      return (0, _createClass2.default)(R, [{
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
    c = /*#__PURE__*/function (_R) {
      function c(t, n) {
        var _ref;
        var _this8;
        (0, _classCallCheck2.default)(this, c);
        _this8 = _callSuper(this, c, [2]), _this8[0] = t != null ? t : _this8.getDefaultValue(), _this8[1] = (_ref = n != null ? n : t) != null ? _ref : _this8.getDefaultValue();
        return _this8;
      }
      (0, _inherits2.default)(c, _R);
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
      }]);
    }(R),
    l = /*#__PURE__*/function (_R2) {
      function l(t, n, i) {
        var _ref2, _ref3;
        var _this9;
        (0, _classCallCheck2.default)(this, l);
        _this9 = _callSuper(this, l, [3]), _this9[0] = t != null ? t : _this9.getDefaultValue(), _this9[1] = (_ref2 = n != null ? n : t) != null ? _ref2 : _this9.getDefaultValue(), _this9[2] = (_ref3 = i != null ? i : t) != null ? _ref3 : _this9.getDefaultValue();
        return _this9;
      }
      (0, _inherits2.default)(l, _R2);
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
      }]);
    }(R),
    x = /*#__PURE__*/function (_R3) {
      function x(t, n, i, s) {
        var _ref4, _ref5, _ref6;
        var _this10;
        (0, _classCallCheck2.default)(this, x);
        _this10 = _callSuper(this, x, [4]), _this10[0] = t != null ? t : _this10.getDefaultValue(), _this10[1] = (_ref4 = n != null ? n : t) != null ? _ref4 : _this10.getDefaultValue(), _this10[2] = (_ref5 = i != null ? i : t) != null ? _ref5 : _this10.getDefaultValue(), _this10[3] = (_ref6 = s != null ? s : t) != null ? _ref6 : _this10.getDefaultValue();
        return _this10;
      }
      (0, _inherits2.default)(x, _R3);
      return (0, _createClass2.default)(x, [{
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
    }(R),
    d = /*#__PURE__*/function (_c) {
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
          return f;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return _;
        }
      }]);
    }(c),
    p = /*#__PURE__*/function (_c2) {
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
          return b;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return A;
        }
      }]);
    }(c),
    m = /*#__PURE__*/function (_c3) {
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
          return z;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return I;
        }
      }]);
    }(c),
    g = /*#__PURE__*/function (_c4) {
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
          return V;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return k;
        }
      }]);
    }(c),
    T = /*#__PURE__*/function (_c5) {
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
          return v;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return $;
        }
      }]);
    }(c),
    f = /*#__PURE__*/function (_l) {
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
          return "vec3f";
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
    }(l),
    b = /*#__PURE__*/function (_l2) {
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
          return "vec3h";
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
    }(l),
    z = /*#__PURE__*/function (_l3) {
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
    }(l),
    V = /*#__PURE__*/function (_l4) {
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
          return "vec3u";
        }
      }, {
        key: "_Vec2",
        get: function get() {
          return g;
        }
      }, {
        key: "_Vec3",
        get: function get() {
          return e;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return k;
        }
      }]);
    }(l),
    v = /*#__PURE__*/function (_l5) {
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
          return "vec3<bool>";
        }
      }, {
        key: "_Vec2",
        get: function get() {
          return T;
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
    }(l),
    _ = /*#__PURE__*/function (_x) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _x);
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
          return d;
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
    }(x),
    A = /*#__PURE__*/function (_x2) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _x2);
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
    }(x),
    I = /*#__PURE__*/function (_x3) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _x3);
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
          return z;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return e;
        }
      }]);
    }(x),
    k = /*#__PURE__*/function (_x4) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _x4);
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
          return g;
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
    }(x),
    $ = /*#__PURE__*/function (_x5) {
      function e() {
        (0, _classCallCheck2.default)(this, e);
        return _callSuper(this, e, arguments);
      }
      (0, _inherits2.default)(e, _x5);
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
          return T;
        }
      }, {
        key: "_Vec3",
        get: function get() {
          return v;
        }
      }, {
        key: "_Vec4",
        get: function get() {
          return e;
        }
      }]);
    }(x);
  var Y = exports.ma = o(d),
    Be = exports.na = o(p),
    We = exports.oa = o(m),
    Le = exports.pa = o(g),
    je = exports.qa = o(T),
    J = exports.ra = o(f),
    Ge = exports.sa = o(b),
    Ee = exports.ta = o(z),
    Oe = exports.ua = o(V),
    Ke = exports.va = o(v),
    q = exports.wa = o(_),
    He = exports.xa = o(A),
    Ye = exports.ya = o(I),
    Je = exports.za = o(k),
    qe = exports.Aa = o($),
    Qe = {
      vec2f: Y,
      vec2h: Be,
      vec2i: We,
      vec2u: Le,
      "vec2<bool>": je,
      vec3f: J,
      vec3h: Ge,
      vec3i: Ee,
      vec3u: Oe,
      "vec3<bool>": Ke,
      vec4f: q,
      vec4h: He,
      vec4i: Ye,
      vec4u: Je,
      "vec4<bool>": qe
    },
    Xe = exports.Ba = {
      vec2f: N,
      vec2h: U,
      vec2i: M,
      vec2u: F,
      "vec2<bool>": G,
      vec3f: N,
      vec3h: U,
      vec3i: M,
      vec3u: F,
      "vec3<bool>": G,
      vec4f: N,
      vec4h: U,
      vec4i: M,
      vec4u: F,
      "vec4<bool>": G
    };
  function o(e) {
    var _e2 = new e(),
      t = _e2.kind,
      n = _e2.length,
      i = y(function () {
        for (var _len2 = arguments.length, s = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          s[_key2] = arguments[_key2];
        }
        var a = new Array(s.length),
          h = 0;
        for (var S of s) if (typeof S == "number" || typeof S == "boolean") a[h++] = S;else for (var E = 0; E < S.length; ++E) a[h++] = S[E];
        if (a.length <= 1 || a.length === n) return (0, _construct2.default)(e, a);
        throw new Error(`'${t}' constructor called with invalid number of arguments.`);
      }, function () {
        for (var _len3 = arguments.length, s = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          s[_key3] = arguments[_key3];
        }
        return u(`${t}(${s.map(function (a) {
          return a.value;
        }).join(", ")})`, Qe[t]);
      }, function () {
        for (var _len4 = arguments.length, s = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          s[_key4] = arguments[_key4];
        }
        return s.map(function (a) {
          var h = a.dataType;
          return pe(h) && (h = h.inner), ce(h) ? h : Xe[t];
        });
      });
    return B(i, t), Object.assign(i, (0, _defineProperty2.default)({
      type: t
    }, w, void 0));
  }
  function re(e) {
    var t = (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), w, void 0), "type", e.type);
    B(t, e.type);
    var n = y(function () {
      var s = [];
      for (var _len5 = arguments.length, i = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        i[_key5] = arguments[_key5];
      }
      for (var a of i) if (typeof a == "number") s.push(a);else for (var h = 0; h < a.length; ++h) s.push(a[h]);
      if (s.length !== 0 && s.length !== e.columns * e.rows) throw new Error(`'${e.type}' constructor called with invalid number of arguments.`);
      for (var _a = s.length; _a < e.columns * e.rows; ++_a) s.push(0);
      return e.makeFromElements.apply(e, s);
    }, function () {
      for (var _len6 = arguments.length, i = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        i[_key6] = arguments[_key6];
      }
      return u(`${t.type}(${i.map(function (s) {
        return s.value;
      }).join(", ")})`, t);
    });
    return Object.assign(n, t);
  }
  var Q = /*#__PURE__*/function () {
      function Q() {
        (0, _classCallCheck2.default)(this, Q);
        this[r] = !0;
        this.length = 4;
        this.columns = [this.makeColumn(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]), this.makeColumn(arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3])];
      }
      return (0, _createClass2.default)(Q, [{
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
    X = /*#__PURE__*/function (_Q) {
      function X() {
        var _this12;
        (0, _classCallCheck2.default)(this, X);
        for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          args[_key7] = arguments[_key7];
        }
        _this12 = _callSuper(this, X, [].concat(args));
        _this12.kind = "mat2x2f";
        return _this12;
      }
      (0, _inherits2.default)(X, _Q);
      return (0, _createClass2.default)(X, [{
        key: "makeColumn",
        value: function makeColumn(t, n) {
          return Y(t, n);
        }
      }]);
    }(Q),
    Z = /*#__PURE__*/function () {
      function Z() {
        (0, _classCallCheck2.default)(this, Z);
        this[r] = !0;
        this.length = 12;
        this.columns = [this.makeColumn(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]), this.makeColumn(arguments.length <= 3 ? undefined : arguments[3], arguments.length <= 4 ? undefined : arguments[4], arguments.length <= 5 ? undefined : arguments[5]), this.makeColumn(arguments.length <= 6 ? undefined : arguments[6], arguments.length <= 7 ? undefined : arguments[7], arguments.length <= 8 ? undefined : arguments[8])];
      }
      return (0, _createClass2.default)(Z, [{
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
    ee = /*#__PURE__*/function (_Z) {
      function ee() {
        var _this13;
        (0, _classCallCheck2.default)(this, ee);
        for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          args[_key8] = arguments[_key8];
        }
        _this13 = _callSuper(this, ee, [].concat(args));
        _this13.kind = "mat3x3f";
        return _this13;
      }
      (0, _inherits2.default)(ee, _Z);
      return (0, _createClass2.default)(ee, [{
        key: "makeColumn",
        value: function makeColumn(t, n, i) {
          return J(t, n, i);
        }
      }]);
    }(Z),
    te = /*#__PURE__*/function () {
      function te() {
        (0, _classCallCheck2.default)(this, te);
        this[r] = !0;
        this.length = 16;
        this.columns = [this.makeColumn(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3]), this.makeColumn(arguments.length <= 4 ? undefined : arguments[4], arguments.length <= 5 ? undefined : arguments[5], arguments.length <= 6 ? undefined : arguments[6], arguments.length <= 7 ? undefined : arguments[7]), this.makeColumn(arguments.length <= 8 ? undefined : arguments[8], arguments.length <= 9 ? undefined : arguments[9], arguments.length <= 10 ? undefined : arguments[10], arguments.length <= 11 ? undefined : arguments[11]), this.makeColumn(arguments.length <= 12 ? undefined : arguments[12], arguments.length <= 13 ? undefined : arguments[13], arguments.length <= 14 ? undefined : arguments[14], arguments.length <= 15 ? undefined : arguments[15])];
      }
      return (0, _createClass2.default)(te, [{
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
    ne = /*#__PURE__*/function (_te) {
      function ne() {
        var _this15;
        (0, _classCallCheck2.default)(this, ne);
        for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
          args[_key9] = arguments[_key9];
        }
        _this15 = _callSuper(this, ne, [].concat(args));
        _this15.kind = "mat4x4f";
        return _this15;
      }
      (0, _inherits2.default)(ne, _te);
      return (0, _createClass2.default)(ne, [{
        key: "makeColumn",
        value: function makeColumn(t, n, i, s) {
          return q(t, n, i, s);
        }
      }]);
    }(te),
    mn = exports.Ca = re({
      type: "mat2x2f",
      rows: 2,
      columns: 2,
      makeFromElements: function makeFromElements() {
        for (var _len10 = arguments.length, e = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
          e[_key10] = arguments[_key10];
        }
        return (0, _construct2.default)(X, e);
      }
    }),
    gn = exports.Da = re({
      type: "mat3x3f",
      rows: 3,
      columns: 3,
      makeFromElements: function makeFromElements() {
        for (var _len11 = arguments.length, e = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
          e[_key11] = arguments[_key11];
        }
        return (0, _construct2.default)(ee, e);
      }
    }),
    Tn = exports.Ea = re({
      type: "mat4x4f",
      rows: 4,
      columns: 4,
      makeFromElements: function makeFromElements() {
        for (var _len12 = arguments.length, e = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
          e[_key12] = arguments[_key12];
        }
        return (0, _construct2.default)(ne, e);
      }
    });
  function fn(e) {
    return e.kind === "mat3x3f" ? [e[0], e[1], e[2], e[4], e[5], e[6], e[8], e[9], e[10]] : Array.from({
      length: e.length
    }).map(function (t, n) {
      return e[n];
    });
  }
  function Vn(e) {
    return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "ptr"), "inner", e), "addressSpace", "function"), "access", "read-write");
  }
  function vn(e) {
    return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "ptr"), "inner", e), "addressSpace", "private"), "access", "read-write");
  }
  function _n(e) {
    return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "ptr"), "inner", e), "addressSpace", "workgroup"), "access", "read-write");
  }
  function An(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "read";
    return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "ptr"), "inner", e), "addressSpace", "storage"), "access", t);
  }
  function In(e) {
    return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "ptr"), "inner", e), "addressSpace", "uniform"), "access", "read");
  }
  function kn(e) {
    return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, r, !0), "type", "ptr"), "inner", e), "addressSpace", "handle"), "access", "read");
  }
},30,[2,12,24,4,25,20,21,5,7,8,10,31],"node_modules/typegpu/chunk-L7HIBZAX.js");
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
  exports.a = exports.E = exports.D = exports.C = exports.B = exports.A = void 0;
  exports.b = G;
  exports.c = Te;
  exports.z = exports.y = exports.x = exports.w = exports.v = exports.u = exports.t = exports.s = exports.r = exports.q = exports.p = exports.o = exports.n = exports.m = exports.l = exports.k = exports.j = exports.i = exports.h = exports.g = exports.f = exports.e = exports.d = void 0;
  var _chunkL7HIBZAX = require(_dependencyMap[0], "./chunk-L7HIBZAX.js");
  var S = function S(e) {
      return Math.sqrt(e.x ** 2 + e.y ** 2);
    },
    D = function D(e) {
      return Math.sqrt(e.x ** 2 + e.y ** 2 + e.z ** 2);
    },
    E = function E(e) {
      return Math.sqrt(e.x ** 2 + e.y ** 2 + e.z ** 2 + e.w ** 2);
    },
    re = function re(e, n) {
      return e.x * n.x + e.y * n.y;
    },
    ae = function ae(e, n) {
      return e.x * n.x + e.y * n.y + e.z * n.z;
    },
    ve = function ve(e, n) {
      return e.x * n.x + e.y * n.y + e.z * n.z + e.w * n.w;
    },
    c = function c(e, n, s) {
      return Math.min(Math.max(n, e), s);
    },
    x = function x(e) {
      return function (n) {
        return (0, _chunkL7HIBZAX.ma)(e(n.x), e(n.y));
      };
    },
    w = function w(e) {
      return function (n) {
        return (0, _chunkL7HIBZAX.na)(e(n.x), e(n.y));
      };
    },
    N = function N(e) {
      return function (n) {
        return (0, _chunkL7HIBZAX.oa)(e(n.x), e(n.y));
      };
    },
    K = function K(e) {
      return function (n) {
        return (0, _chunkL7HIBZAX.pa)(e(n.x), e(n.y));
      };
    },
    y = function y(e) {
      return function (n) {
        return (0, _chunkL7HIBZAX.ra)(e(n.x), e(n.y), e(n.z));
      };
    },
    l = function l(e) {
      return function (n) {
        return (0, _chunkL7HIBZAX.sa)(e(n.x), e(n.y), e(n.z));
      };
    },
    R = function R(e) {
      return function (n) {
        return (0, _chunkL7HIBZAX.ta)(e(n.x), e(n.y), e(n.z));
      };
    },
    k = function k(e) {
      return function (n) {
        return (0, _chunkL7HIBZAX.ua)(e(n.x), e(n.y), e(n.z));
      };
    },
    u = function u(e) {
      return function (n) {
        return (0, _chunkL7HIBZAX.wa)(e(n.x), e(n.y), e(n.z), e(n.w));
      };
    },
    i = function i(e) {
      return function (n) {
        return (0, _chunkL7HIBZAX.xa)(e(n.x), e(n.y), e(n.z), e(n.w));
      };
    },
    $ = function $(e) {
      return function (n) {
        return (0, _chunkL7HIBZAX.ya)(e(n.x), e(n.y), e(n.z), e(n.w));
      };
    },
    O = function O(e) {
      return function (n) {
        return (0, _chunkL7HIBZAX.za)(e(n.x), e(n.y), e(n.z), e(n.w));
      };
    },
    le = function le(e) {
      return function (n) {
        var s = n.columns;
        return (0, _chunkL7HIBZAX.Ca)(x(e)(s[0]), x(e)(s[1]));
      };
    },
    ie = function ie(e) {
      return function (n) {
        var s = n.columns;
        return (0, _chunkL7HIBZAX.Da)(y(e)(s[0]), y(e)(s[1]), y(e)(s[2]));
      };
    },
    me = function me(e) {
      return function (n) {
        var s = n.columns;
        return (0, _chunkL7HIBZAX.Ea)(u(e)(s[0]), u(e)(s[1]), u(e)(s[2]), u(e)(s[3]));
      };
    },
    F = function F(e) {
      return function (n, s) {
        return (0, _chunkL7HIBZAX.ma)(e(n.x, s.x), e(n.y, s.y));
      };
    },
    j = function j(e) {
      return function (n, s) {
        return (0, _chunkL7HIBZAX.na)(e(n.x, s.x), e(n.y, s.y));
      };
    },
    J = function J(e) {
      return function (n, s) {
        return (0, _chunkL7HIBZAX.oa)(e(n.x, s.x), e(n.y, s.y));
      };
    },
    Q = function Q(e) {
      return function (n, s) {
        return (0, _chunkL7HIBZAX.pa)(e(n.x, s.x), e(n.y, s.y));
      };
    },
    B = function B(e) {
      return function (n, s) {
        return (0, _chunkL7HIBZAX.ra)(e(n.x, s.x), e(n.y, s.y), e(n.z, s.z));
      };
    },
    P = function P(e) {
      return function (n, s) {
        return (0, _chunkL7HIBZAX.sa)(e(n.x, s.x), e(n.y, s.y), e(n.z, s.z));
      };
    },
    X = function X(e) {
      return function (n, s) {
        return (0, _chunkL7HIBZAX.ta)(e(n.x, s.x), e(n.y, s.y), e(n.z, s.z));
      };
    },
    Y = function Y(e) {
      return function (n, s) {
        return (0, _chunkL7HIBZAX.ua)(e(n.x, s.x), e(n.y, s.y), e(n.z, s.z));
      };
    },
    p = function p(e) {
      return function (n, s) {
        return (0, _chunkL7HIBZAX.wa)(e(n.x, s.x), e(n.y, s.y), e(n.z, s.z), e(n.w, s.w));
      };
    },
    Z = function Z(e) {
      return function (n, s) {
        return (0, _chunkL7HIBZAX.xa)(e(n.x, s.x), e(n.y, s.y), e(n.z, s.z), e(n.w, s.w));
      };
    },
    ee = function ee(e) {
      return function (n, s) {
        return (0, _chunkL7HIBZAX.ya)(e(n.x, s.x), e(n.y, s.y), e(n.z, s.z), e(n.w, s.w));
      };
    },
    ne = function ne(e) {
      return function (n, s) {
        return (0, _chunkL7HIBZAX.za)(e(n.x, s.x), e(n.y, s.y), e(n.z, s.z), e(n.w, s.w));
      };
    },
    ge = function ge(e) {
      return function (n, s) {
        var t = n.columns,
          T = s.columns;
        return (0, _chunkL7HIBZAX.Ca)(F(e)(t[0], T[0]), F(e)(t[1], T[1]));
      };
    },
    de = function de(e) {
      return function (n, s) {
        var t = n.columns,
          T = s.columns;
        return (0, _chunkL7HIBZAX.Da)(B(e)(t[0], T[0]), B(e)(t[1], T[1]), B(e)(t[2], T[2]));
      };
    },
    he = function he(e) {
      return function (n, s) {
        var t = n.columns,
          T = s.columns;
        return (0, _chunkL7HIBZAX.Ea)(p(e)(t[0], T[0]), p(e)(t[1], T[1]), p(e)(t[2], T[2]), p(e)(t[3], T[3]));
      };
    },
    h = {
      divInteger: function divInteger(e, n) {
        return n === 0 ? e : Math.trunc(e / n);
      }
    },
    r = exports.a = {
      eq: {
        vec2f: function vec2f(e, n) {
          return (0, _chunkL7HIBZAX.qa)(e.x === n.x, e.y === n.y);
        },
        vec2h: function vec2h(e, n) {
          return (0, _chunkL7HIBZAX.qa)(e.x === n.x, e.y === n.y);
        },
        vec2i: function vec2i(e, n) {
          return (0, _chunkL7HIBZAX.qa)(e.x === n.x, e.y === n.y);
        },
        vec2u: function vec2u(e, n) {
          return (0, _chunkL7HIBZAX.qa)(e.x === n.x, e.y === n.y);
        },
        "vec2<bool>": function vec2Bool(e, n) {
          return (0, _chunkL7HIBZAX.qa)(e.x === n.x, e.y === n.y);
        },
        vec3f: function vec3f(e, n) {
          return (0, _chunkL7HIBZAX.va)(e.x === n.x, e.y === n.y, e.z === n.z);
        },
        vec3h: function vec3h(e, n) {
          return (0, _chunkL7HIBZAX.va)(e.x === n.x, e.y === n.y, e.z === n.z);
        },
        vec3i: function vec3i(e, n) {
          return (0, _chunkL7HIBZAX.va)(e.x === n.x, e.y === n.y, e.z === n.z);
        },
        vec3u: function vec3u(e, n) {
          return (0, _chunkL7HIBZAX.va)(e.x === n.x, e.y === n.y, e.z === n.z);
        },
        "vec3<bool>": function vec3Bool(e, n) {
          return (0, _chunkL7HIBZAX.va)(e.x === n.x, e.y === n.y, e.z === n.z);
        },
        vec4f: function vec4f(e, n) {
          return (0, _chunkL7HIBZAX.Aa)(e.x === n.x, e.y === n.y, e.z === n.z, e.w === n.w);
        },
        vec4h: function vec4h(e, n) {
          return (0, _chunkL7HIBZAX.Aa)(e.x === n.x, e.y === n.y, e.z === n.z, e.w === n.w);
        },
        vec4i: function vec4i(e, n) {
          return (0, _chunkL7HIBZAX.Aa)(e.x === n.x, e.y === n.y, e.z === n.z, e.w === n.w);
        },
        vec4u: function vec4u(e, n) {
          return (0, _chunkL7HIBZAX.Aa)(e.x === n.x, e.y === n.y, e.z === n.z, e.w === n.w);
        },
        "vec4<bool>": function vec4Bool(e, n) {
          return (0, _chunkL7HIBZAX.Aa)(e.x === n.x, e.y === n.y, e.z === n.z, e.w === n.w);
        }
      },
      lt: {
        vec2f: function vec2f(e, n) {
          return (0, _chunkL7HIBZAX.qa)(e.x < n.x, e.y < n.y);
        },
        vec2h: function vec2h(e, n) {
          return (0, _chunkL7HIBZAX.qa)(e.x < n.x, e.y < n.y);
        },
        vec2i: function vec2i(e, n) {
          return (0, _chunkL7HIBZAX.qa)(e.x < n.x, e.y < n.y);
        },
        vec2u: function vec2u(e, n) {
          return (0, _chunkL7HIBZAX.qa)(e.x < n.x, e.y < n.y);
        },
        vec3f: function vec3f(e, n) {
          return (0, _chunkL7HIBZAX.va)(e.x < n.x, e.y < n.y, e.z < n.z);
        },
        vec3h: function vec3h(e, n) {
          return (0, _chunkL7HIBZAX.va)(e.x < n.x, e.y < n.y, e.z < n.z);
        },
        vec3i: function vec3i(e, n) {
          return (0, _chunkL7HIBZAX.va)(e.x < n.x, e.y < n.y, e.z < n.z);
        },
        vec3u: function vec3u(e, n) {
          return (0, _chunkL7HIBZAX.va)(e.x < n.x, e.y < n.y, e.z < n.z);
        },
        vec4f: function vec4f(e, n) {
          return (0, _chunkL7HIBZAX.Aa)(e.x < n.x, e.y < n.y, e.z < n.z, e.w < n.w);
        },
        vec4h: function vec4h(e, n) {
          return (0, _chunkL7HIBZAX.Aa)(e.x < n.x, e.y < n.y, e.z < n.z, e.w < n.w);
        },
        vec4i: function vec4i(e, n) {
          return (0, _chunkL7HIBZAX.Aa)(e.x < n.x, e.y < n.y, e.z < n.z, e.w < n.w);
        },
        vec4u: function vec4u(e, n) {
          return (0, _chunkL7HIBZAX.Aa)(e.x < n.x, e.y < n.y, e.z < n.z, e.w < n.w);
        }
      },
      or: {
        "vec2<bool>": function vec2Bool(e, n) {
          return (0, _chunkL7HIBZAX.qa)(e.x || n.x, e.y || n.y);
        },
        "vec3<bool>": function vec3Bool(e, n) {
          return (0, _chunkL7HIBZAX.va)(e.x || n.x, e.y || n.y, e.z || n.z);
        },
        "vec4<bool>": function vec4Bool(e, n) {
          return (0, _chunkL7HIBZAX.Aa)(e.x || n.x, e.y || n.y, e.z || n.z, e.w || n.w);
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
        vec2f: x(Math.abs),
        vec2h: w(Math.abs),
        vec2i: N(Math.abs),
        vec2u: K(Math.abs),
        vec3f: y(Math.abs),
        vec3h: l(Math.abs),
        vec3i: R(Math.abs),
        vec3u: k(Math.abs),
        vec4f: u(Math.abs),
        vec4h: i(Math.abs),
        vec4i: $(Math.abs),
        vec4u: O(Math.abs)
      },
      atan2: {
        vec2f: F(Math.atan2),
        vec2h: j(Math.atan2),
        vec3f: B(Math.atan2),
        vec3h: P(Math.atan2),
        vec4f: p(Math.atan2),
        vec4h: Z(Math.atan2)
      },
      acos: {
        vec2f: x(Math.acos),
        vec2h: w(Math.acos),
        vec2i: N(Math.acos),
        vec2u: K(Math.acos),
        vec3f: y(Math.acos),
        vec3h: l(Math.acos),
        vec3i: R(Math.acos),
        vec3u: k(Math.acos),
        vec4f: u(Math.acos),
        vec4h: i(Math.acos),
        vec4i: $(Math.acos),
        vec4u: O(Math.acos)
      },
      asin: {
        vec2f: x(Math.asin),
        vec2h: w(Math.asin),
        vec2i: N(Math.asin),
        vec2u: K(Math.asin),
        vec3f: y(Math.asin),
        vec3h: l(Math.asin),
        vec3i: R(Math.asin),
        vec3u: k(Math.asin),
        vec4f: u(Math.asin),
        vec4h: i(Math.asin),
        vec4i: $(Math.asin),
        vec4u: O(Math.asin)
      },
      ceil: {
        vec2f: x(Math.ceil),
        vec2h: w(Math.ceil),
        vec3f: y(Math.ceil),
        vec3h: l(Math.ceil),
        vec4f: u(Math.ceil),
        vec4h: i(Math.ceil)
      },
      clamp: {
        vec2f: function vec2f(e, n, s) {
          return (0, _chunkL7HIBZAX.ma)(c(e.x, n.x, s.x), c(e.y, n.y, s.y));
        },
        vec2h: function vec2h(e, n, s) {
          return (0, _chunkL7HIBZAX.na)(c(e.x, n.x, s.x), c(e.y, n.y, s.y));
        },
        vec2i: function vec2i(e, n, s) {
          return (0, _chunkL7HIBZAX.oa)(c(e.x, n.x, s.x), c(e.y, n.y, s.y));
        },
        vec2u: function vec2u(e, n, s) {
          return (0, _chunkL7HIBZAX.pa)(c(e.x, n.x, s.x), c(e.y, n.y, s.y));
        },
        vec3f: function vec3f(e, n, s) {
          return (0, _chunkL7HIBZAX.ra)(c(e.x, n.x, s.x), c(e.y, n.y, s.y), c(e.z, n.z, s.z));
        },
        vec3h: function vec3h(e, n, s) {
          return (0, _chunkL7HIBZAX.sa)(c(e.x, n.x, s.x), c(e.y, n.y, s.y), c(e.z, n.z, s.z));
        },
        vec3i: function vec3i(e, n, s) {
          return (0, _chunkL7HIBZAX.ta)(c(e.x, n.x, s.x), c(e.y, n.y, s.y), c(e.z, n.z, s.z));
        },
        vec3u: function vec3u(e, n, s) {
          return (0, _chunkL7HIBZAX.ua)(c(e.x, n.x, s.x), c(e.y, n.y, s.y), c(e.z, n.z, s.z));
        },
        vec4f: function vec4f(e, n, s) {
          return (0, _chunkL7HIBZAX.wa)(c(e.x, n.x, s.x), c(e.y, n.y, s.y), c(e.z, n.z, s.z), c(e.w, n.w, s.w));
        },
        vec4h: function vec4h(e, n, s) {
          return (0, _chunkL7HIBZAX.xa)(c(e.x, n.x, s.x), c(e.y, n.y, s.y), c(e.z, n.z, s.z), c(e.w, n.w, s.w));
        },
        vec4i: function vec4i(e, n, s) {
          return (0, _chunkL7HIBZAX.ya)(c(e.x, n.x, s.x), c(e.y, n.y, s.y), c(e.z, n.z, s.z), c(e.w, n.w, s.w));
        },
        vec4u: function vec4u(e, n, s) {
          return (0, _chunkL7HIBZAX.za)(c(e.x, n.x, s.x), c(e.y, n.y, s.y), c(e.z, n.z, s.z), c(e.w, n.w, s.w));
        }
      },
      length: {
        vec2f: S,
        vec2h: S,
        vec3f: D,
        vec3h: D,
        vec4f: E,
        vec4h: E
      },
      add: {
        vec2f: F(function (e, n) {
          return e + n;
        }),
        vec2h: j(function (e, n) {
          return e + n;
        }),
        vec2i: J(function (e, n) {
          return e + n;
        }),
        vec2u: Q(function (e, n) {
          return e + n;
        }),
        vec3f: B(function (e, n) {
          return e + n;
        }),
        vec3h: P(function (e, n) {
          return e + n;
        }),
        vec3i: X(function (e, n) {
          return e + n;
        }),
        vec3u: Y(function (e, n) {
          return e + n;
        }),
        vec4f: p(function (e, n) {
          return e + n;
        }),
        vec4h: Z(function (e, n) {
          return e + n;
        }),
        vec4i: ee(function (e, n) {
          return e + n;
        }),
        vec4u: ne(function (e, n) {
          return e + n;
        }),
        mat2x2f: ge(function (e, n) {
          return e + n;
        }),
        mat3x3f: de(function (e, n) {
          return e + n;
        }),
        mat4x4f: he(function (e, n) {
          return e + n;
        })
      },
      addMixed: {
        vec2f: function vec2f(e, n) {
          return x(function (s) {
            return s + n;
          })(e);
        },
        vec2h: function vec2h(e, n) {
          return w(function (s) {
            return s + n;
          })(e);
        },
        vec2i: function vec2i(e, n) {
          return N(function (s) {
            return s + n;
          })(e);
        },
        vec2u: function vec2u(e, n) {
          return K(function (s) {
            return s + n;
          })(e);
        },
        vec3f: function vec3f(e, n) {
          return y(function (s) {
            return s + n;
          })(e);
        },
        vec3h: function vec3h(e, n) {
          return l(function (s) {
            return s + n;
          })(e);
        },
        vec3i: function vec3i(e, n) {
          return R(function (s) {
            return s + n;
          })(e);
        },
        vec3u: function vec3u(e, n) {
          return k(function (s) {
            return s + n;
          })(e);
        },
        vec4f: function vec4f(e, n) {
          return u(function (s) {
            return s + n;
          })(e);
        },
        vec4h: function vec4h(e, n) {
          return i(function (s) {
            return s + n;
          })(e);
        },
        vec4i: function vec4i(e, n) {
          return $(function (s) {
            return s + n;
          })(e);
        },
        vec4u: function vec4u(e, n) {
          return O(function (s) {
            return s + n;
          })(e);
        },
        mat2x2f: function mat2x2f(e, n) {
          return le(function (s) {
            return s + n;
          })(e);
        },
        mat3x3f: function mat3x3f(e, n) {
          return ie(function (s) {
            return s + n;
          })(e);
        },
        mat4x4f: function mat4x4f(e, n) {
          return me(function (s) {
            return s + n;
          })(e);
        }
      },
      mulSxV: {
        vec2f: function vec2f(e, n) {
          return x(function (s) {
            return e * s;
          })(n);
        },
        vec2h: function vec2h(e, n) {
          return w(function (s) {
            return e * s;
          })(n);
        },
        vec2i: function vec2i(e, n) {
          return N(function (s) {
            return e * s;
          })(n);
        },
        vec2u: function vec2u(e, n) {
          return K(function (s) {
            return e * s;
          })(n);
        },
        vec3f: function vec3f(e, n) {
          return y(function (s) {
            return e * s;
          })(n);
        },
        vec3h: function vec3h(e, n) {
          return l(function (s) {
            return e * s;
          })(n);
        },
        vec3i: function vec3i(e, n) {
          return R(function (s) {
            return e * s;
          })(n);
        },
        vec3u: function vec3u(e, n) {
          return k(function (s) {
            return e * s;
          })(n);
        },
        vec4f: function vec4f(e, n) {
          return u(function (s) {
            return e * s;
          })(n);
        },
        vec4h: function vec4h(e, n) {
          return i(function (s) {
            return e * s;
          })(n);
        },
        vec4i: function vec4i(e, n) {
          return $(function (s) {
            return e * s;
          })(n);
        },
        vec4u: function vec4u(e, n) {
          return O(function (s) {
            return e * s;
          })(n);
        },
        mat2x2f: function mat2x2f(e, n) {
          return le(function (s) {
            return e * s;
          })(n);
        },
        mat3x3f: function mat3x3f(e, n) {
          return ie(function (s) {
            return e * s;
          })(n);
        },
        mat4x4f: function mat4x4f(e, n) {
          return me(function (s) {
            return e * s;
          })(n);
        }
      },
      mulVxV: {
        vec2f: F(function (e, n) {
          return e * n;
        }),
        vec2h: j(function (e, n) {
          return e * n;
        }),
        vec2i: J(function (e, n) {
          return e * n;
        }),
        vec2u: Q(function (e, n) {
          return e * n;
        }),
        vec3f: B(function (e, n) {
          return e * n;
        }),
        vec3h: P(function (e, n) {
          return e * n;
        }),
        vec3i: X(function (e, n) {
          return e * n;
        }),
        vec3u: Y(function (e, n) {
          return e * n;
        }),
        vec4f: p(function (e, n) {
          return e * n;
        }),
        vec4h: Z(function (e, n) {
          return e * n;
        }),
        vec4i: ee(function (e, n) {
          return e * n;
        }),
        vec4u: ne(function (e, n) {
          return e * n;
        }),
        mat2x2f: function mat2x2f(e, n) {
          var s = e.columns,
            t = n.columns;
          return (0, _chunkL7HIBZAX.Ca)(s[0].x * t[0].x + s[1].x * t[0].y, s[0].y * t[0].x + s[1].y * t[0].y, s[0].x * t[1].x + s[1].x * t[1].y, s[0].y * t[1].x + s[1].y * t[1].y);
        },
        mat3x3f: function mat3x3f(e, n) {
          var s = e.columns,
            t = n.columns;
          return (0, _chunkL7HIBZAX.Da)(s[0].x * t[0].x + s[1].x * t[0].y + s[2].x * t[0].z, s[0].y * t[0].x + s[1].y * t[0].y + s[2].y * t[0].z, s[0].z * t[0].x + s[1].z * t[0].y + s[2].z * t[0].z, s[0].x * t[1].x + s[1].x * t[1].y + s[2].x * t[1].z, s[0].y * t[1].x + s[1].y * t[1].y + s[2].y * t[1].z, s[0].z * t[1].x + s[1].z * t[1].y + s[2].z * t[1].z, s[0].x * t[2].x + s[1].x * t[2].y + s[2].x * t[2].z, s[0].y * t[2].x + s[1].y * t[2].y + s[2].y * t[2].z, s[0].z * t[2].x + s[1].z * t[2].y + s[2].z * t[2].z);
        },
        mat4x4f: function mat4x4f(e, n) {
          var s = e.columns,
            t = n.columns;
          return (0, _chunkL7HIBZAX.Ea)(s[0].x * t[0].x + s[1].x * t[0].y + s[2].x * t[0].z + s[3].x * t[0].w, s[0].y * t[0].x + s[1].y * t[0].y + s[2].y * t[0].z + s[3].y * t[0].w, s[0].z * t[0].x + s[1].z * t[0].y + s[2].z * t[0].z + s[3].z * t[0].w, s[0].w * t[0].x + s[1].w * t[0].y + s[2].w * t[0].z + s[3].w * t[0].w, s[0].x * t[1].x + s[1].x * t[1].y + s[2].x * t[1].z + s[3].x * t[1].w, s[0].y * t[1].x + s[1].y * t[1].y + s[2].y * t[1].z + s[3].y * t[1].w, s[0].z * t[1].x + s[1].z * t[1].y + s[2].z * t[1].z + s[3].z * t[1].w, s[0].w * t[1].x + s[1].w * t[1].y + s[2].w * t[1].z + s[3].w * t[1].w, s[0].x * t[2].x + s[1].x * t[2].y + s[2].x * t[2].z + s[3].x * t[2].w, s[0].y * t[2].x + s[1].y * t[2].y + s[2].y * t[2].z + s[3].y * t[2].w, s[0].z * t[2].x + s[1].z * t[2].y + s[2].z * t[2].z + s[3].z * t[2].w, s[0].w * t[2].x + s[1].w * t[2].y + s[2].w * t[2].z + s[3].w * t[2].w, s[0].x * t[3].x + s[1].x * t[3].y + s[2].x * t[3].z + s[3].x * t[3].w, s[0].y * t[3].x + s[1].y * t[3].y + s[2].y * t[3].z + s[3].y * t[3].w, s[0].z * t[3].x + s[1].z * t[3].y + s[2].z * t[3].z + s[3].z * t[3].w, s[0].w * t[3].x + s[1].w * t[3].y + s[2].w * t[3].z + s[3].w * t[3].w);
        }
      },
      mulMxV: {
        mat2x2f: function mat2x2f(e, n) {
          var s = e.columns;
          return (0, _chunkL7HIBZAX.ma)(s[0].x * n.x + s[1].x * n.y, s[0].y * n.x + s[1].y * n.y);
        },
        mat3x3f: function mat3x3f(e, n) {
          var s = e.columns;
          return (0, _chunkL7HIBZAX.ra)(s[0].x * n.x + s[1].x * n.y + s[2].x * n.z, s[0].y * n.x + s[1].y * n.y + s[2].y * n.z, s[0].z * n.x + s[1].z * n.y + s[2].z * n.z);
        },
        mat4x4f: function mat4x4f(e, n) {
          var s = e.columns;
          return (0, _chunkL7HIBZAX.wa)(s[0].x * n.x + s[1].x * n.y + s[2].x * n.z + s[3].x * n.w, s[0].y * n.x + s[1].y * n.y + s[2].y * n.z + s[3].y * n.w, s[0].z * n.x + s[1].z * n.y + s[2].z * n.z + s[3].z * n.w, s[0].w * n.x + s[1].w * n.y + s[2].w * n.z + s[3].w * n.w);
        }
      },
      mulVxM: {
        mat2x2f: function mat2x2f(e, n) {
          var s = n.columns;
          return (0, _chunkL7HIBZAX.ma)(e.x * s[0].x + e.y * s[0].y, e.x * s[1].x + e.y * s[1].y);
        },
        mat3x3f: function mat3x3f(e, n) {
          var s = n.columns;
          return (0, _chunkL7HIBZAX.ra)(e.x * s[0].x + e.y * s[0].y + e.z * s[0].z, e.x * s[1].x + e.y * s[1].y + e.z * s[1].z, e.x * s[2].x + e.y * s[2].y + e.z * s[2].z);
        },
        mat4x4f: function mat4x4f(e, n) {
          var s = n.columns;
          return (0, _chunkL7HIBZAX.wa)(e.x * s[0].x + e.y * s[0].y + e.z * s[0].z + e.w * s[0].w, e.x * s[1].x + e.y * s[1].y + e.z * s[1].z + e.w * s[1].w, e.x * s[2].x + e.y * s[2].y + e.z * s[2].z + e.w * s[2].w, e.x * s[3].x + e.y * s[3].y + e.z * s[3].z + e.w * s[3].w);
        }
      },
      div: {
        vec2f: F(function (e, n) {
          return e / n;
        }),
        vec2h: j(function (e, n) {
          return e / n;
        }),
        vec2i: J(h.divInteger),
        vec2u: Q(h.divInteger),
        vec3f: B(function (e, n) {
          return e / n;
        }),
        vec3h: P(function (e, n) {
          return e / n;
        }),
        vec3i: X(h.divInteger),
        vec3u: Y(h.divInteger),
        vec4f: p(function (e, n) {
          return e / n;
        }),
        vec4h: Z(function (e, n) {
          return e / n;
        }),
        vec4i: ee(h.divInteger),
        vec4u: ne(h.divInteger)
      },
      divMixed: {
        vec2f: function vec2f(e, n) {
          return x(function (s) {
            return s / n;
          })(e);
        },
        vec2h: function vec2h(e, n) {
          return w(function (s) {
            return s / n;
          })(e);
        },
        vec2i: function vec2i(e, n) {
          return N(function (s) {
            return h.divInteger(s, n);
          })(e);
        },
        vec2u: function vec2u(e, n) {
          return K(function (s) {
            return h.divInteger(s, n);
          })(e);
        },
        vec3f: function vec3f(e, n) {
          return y(function (s) {
            return s / n;
          })(e);
        },
        vec3h: function vec3h(e, n) {
          return l(function (s) {
            return s / n;
          })(e);
        },
        vec3i: function vec3i(e, n) {
          return R(function (s) {
            return h.divInteger(s, n);
          })(e);
        },
        vec3u: function vec3u(e, n) {
          return k(function (s) {
            return h.divInteger(s, n);
          })(e);
        },
        vec4f: function vec4f(e, n) {
          return u(function (s) {
            return s / n;
          })(e);
        },
        vec4h: function vec4h(e, n) {
          return i(function (s) {
            return s / n;
          })(e);
        },
        vec4i: function vec4i(e, n) {
          return $(function (s) {
            return h.divInteger(s, n);
          })(e);
        },
        vec4u: function vec4u(e, n) {
          return O(function (s) {
            return h.divInteger(s, n);
          })(e);
        }
      },
      dot: {
        vec2f: re,
        vec2h: re,
        vec2i: re,
        vec2u: re,
        vec3f: ae,
        vec3h: ae,
        vec3i: ae,
        vec3u: ae,
        vec4f: ve,
        vec4h: ve,
        vec4i: ve,
        vec4u: ve
      },
      normalize: {
        vec2f: function vec2f(e) {
          var n = S(e);
          return (0, _chunkL7HIBZAX.ma)(e.x / n, e.y / n);
        },
        vec2h: function vec2h(e) {
          var n = S(e);
          return (0, _chunkL7HIBZAX.na)(e.x / n, e.y / n);
        },
        vec2i: function vec2i(e) {
          var n = S(e);
          return (0, _chunkL7HIBZAX.oa)(e.x / n, e.y / n);
        },
        vec2u: function vec2u(e) {
          var n = S(e);
          return (0, _chunkL7HIBZAX.pa)(e.x / n, e.y / n);
        },
        vec3f: function vec3f(e) {
          var n = D(e);
          return (0, _chunkL7HIBZAX.ra)(e.x / n, e.y / n, e.z / n);
        },
        vec3h: function vec3h(e) {
          var n = D(e);
          return (0, _chunkL7HIBZAX.sa)(e.x / n, e.y / n, e.z / n);
        },
        vec3i: function vec3i(e) {
          var n = D(e);
          return (0, _chunkL7HIBZAX.ta)(e.x / n, e.y / n, e.z / n);
        },
        vec3u: function vec3u(e) {
          var n = D(e);
          return (0, _chunkL7HIBZAX.ua)(e.x / n, e.y / n, e.z / n);
        },
        vec4f: function vec4f(e) {
          var n = E(e);
          return (0, _chunkL7HIBZAX.wa)(e.x / n, e.y / n, e.z / n, e.w / n);
        },
        vec4h: function vec4h(e) {
          var n = E(e);
          return (0, _chunkL7HIBZAX.xa)(e.x / n, e.y / n, e.z / n, e.w / n);
        },
        vec4i: function vec4i(e) {
          var n = E(e);
          return (0, _chunkL7HIBZAX.ya)(e.x / n, e.y / n, e.z / n, e.w / n);
        },
        vec4u: function vec4u(e) {
          var n = E(e);
          return (0, _chunkL7HIBZAX.za)(e.x / n, e.y / n, e.z / n, e.w / n);
        }
      },
      cross: {
        vec3f: function vec3f(e, n) {
          return (0, _chunkL7HIBZAX.ra)(e.y * n.z - e.z * n.y, e.z * n.x - e.x * n.z, e.x * n.y - e.y * n.x);
        },
        vec3h: function vec3h(e, n) {
          return (0, _chunkL7HIBZAX.sa)(e.y * n.z - e.z * n.y, e.z * n.x - e.x * n.z, e.x * n.y - e.y * n.x);
        }
      },
      floor: {
        vec2f: x(Math.floor),
        vec2h: w(Math.floor),
        vec3f: y(Math.floor),
        vec3h: l(Math.floor),
        vec4f: u(Math.floor),
        vec4h: i(Math.floor)
      },
      max: {
        vec2f: F(Math.max),
        vec2h: j(Math.max),
        vec2i: J(Math.max),
        vec2u: Q(Math.max),
        vec3f: B(Math.max),
        vec3h: P(Math.max),
        vec3i: X(Math.max),
        vec3u: Y(Math.max),
        vec4f: p(Math.max),
        vec4h: Z(Math.max),
        vec4i: ee(Math.max),
        vec4u: ne(Math.max)
      },
      min: {
        vec2f: F(Math.min),
        vec2h: j(Math.min),
        vec2i: J(Math.min),
        vec2u: Q(Math.min),
        vec3f: B(Math.min),
        vec3h: P(Math.min),
        vec3i: X(Math.min),
        vec3u: Y(Math.min),
        vec4f: p(Math.min),
        vec4h: Z(Math.min),
        vec4i: ee(Math.min),
        vec4u: ne(Math.min)
      },
      pow: {
        vec2f: function vec2f(e, n) {
          return (0, _chunkL7HIBZAX.ma)(e.x ** n.x, e.y ** n.y);
        },
        vec2h: function vec2h(e, n) {
          return (0, _chunkL7HIBZAX.na)(e.x ** n.x, e.y ** n.y);
        },
        vec3f: function vec3f(e, n) {
          return (0, _chunkL7HIBZAX.ra)(e.x ** n.x, e.y ** n.y, e.z ** n.z);
        },
        vec3h: function vec3h(e, n) {
          return (0, _chunkL7HIBZAX.sa)(e.x ** n.x, e.y ** n.y, e.z ** n.z);
        },
        vec4f: function vec4f(e, n) {
          return (0, _chunkL7HIBZAX.wa)(e.x ** n.x, e.y ** n.y, e.z ** n.z, e.w ** n.w);
        },
        vec4h: function vec4h(e, n) {
          return (0, _chunkL7HIBZAX.xa)(e.x ** n.x, e.y ** n.y, e.z ** n.z, e.w ** n.w);
        }
      },
      sign: {
        vec2f: x(Math.sign),
        vec2h: w(Math.sign),
        vec2i: N(Math.sign),
        vec3f: y(Math.sign),
        vec3h: l(Math.sign),
        vec3i: R(Math.sign),
        vec4f: u(Math.sign),
        vec4h: i(Math.sign),
        vec4i: $(Math.sign)
      },
      sqrt: {
        vec2f: x(Math.sqrt),
        vec2h: w(Math.sqrt),
        vec3f: y(Math.sqrt),
        vec3h: l(Math.sqrt),
        vec4f: u(Math.sqrt),
        vec4h: i(Math.sqrt)
      },
      mix: {
        vec2f: function vec2f(e, n, s) {
          return typeof s == "number" ? (0, _chunkL7HIBZAX.ma)(e.x * (1 - s) + n.x * s, e.y * (1 - s) + n.y * s) : (0, _chunkL7HIBZAX.ma)(e.x * (1 - s.x) + n.x * s.x, e.y * (1 - s.y) + n.y * s.y);
        },
        vec2h: function vec2h(e, n, s) {
          return typeof s == "number" ? (0, _chunkL7HIBZAX.na)(e.x * (1 - s) + n.x * s, e.y * (1 - s) + n.y * s) : (0, _chunkL7HIBZAX.na)(e.x * (1 - s.x) + n.x * s.x, e.y * (1 - s.y) + n.y * s.y);
        },
        vec3f: function vec3f(e, n, s) {
          return typeof s == "number" ? (0, _chunkL7HIBZAX.ra)(e.x * (1 - s) + n.x * s, e.y * (1 - s) + n.y * s, e.z * (1 - s) + n.z * s) : (0, _chunkL7HIBZAX.ra)(e.x * (1 - s.x) + n.x * s.x, e.y * (1 - s.y) + n.y * s.y, e.z * (1 - s.z) + n.z * s.z);
        },
        vec3h: function vec3h(e, n, s) {
          return typeof s == "number" ? (0, _chunkL7HIBZAX.sa)(e.x * (1 - s) + n.x * s, e.y * (1 - s) + n.y * s, e.z * (1 - s) + n.z * s) : (0, _chunkL7HIBZAX.sa)(e.x * (1 - s.x) + n.x * s.x, e.y * (1 - s.y) + n.y * s.y, e.z * (1 - s.z) + n.z * s.z);
        },
        vec4f: function vec4f(e, n, s) {
          return typeof s == "number" ? (0, _chunkL7HIBZAX.wa)(e.x * (1 - s) + n.x * s, e.y * (1 - s) + n.y * s, e.z * (1 - s) + n.z * s, e.w * (1 - s) + n.w * s) : (0, _chunkL7HIBZAX.wa)(e.x * (1 - s.x) + n.x * s.x, e.y * (1 - s.y) + n.y * s.y, e.z * (1 - s.z) + n.z * s.z, e.w * (1 - s.w) + n.w * s.w);
        },
        vec4h: function vec4h(e, n, s) {
          return typeof s == "number" ? (0, _chunkL7HIBZAX.xa)(e.x * (1 - s) + n.x * s, e.y * (1 - s) + n.y * s, e.z * (1 - s) + n.z * s, e.w * (1 - s) + n.w * s) : (0, _chunkL7HIBZAX.xa)(e.x * (1 - s.x) + n.x * s.x, e.y * (1 - s.y) + n.y * s.y, e.z * (1 - s.z) + n.z * s.z, e.w * (1 - s.w) + n.w * s.w);
        }
      },
      sin: {
        vec2f: x(Math.sin),
        vec2h: w(Math.sin),
        vec3f: y(Math.sin),
        vec3h: l(Math.sin),
        vec4f: u(Math.sin),
        vec4h: i(Math.sin)
      },
      cos: {
        vec2f: x(Math.cos),
        vec2h: w(Math.cos),
        vec3f: y(Math.cos),
        vec3h: l(Math.cos),
        vec4f: u(Math.cos),
        vec4h: i(Math.cos)
      },
      exp: {
        vec2f: x(Math.exp),
        vec2h: w(Math.exp),
        vec3f: y(Math.exp),
        vec3h: l(Math.exp),
        vec4f: u(Math.exp),
        vec4h: i(Math.exp)
      },
      fract: {
        vec2f: x(function (e) {
          return e - Math.floor(e);
        }),
        vec2h: w(function (e) {
          return e - Math.floor(e);
        }),
        vec3f: y(function (e) {
          return e - Math.floor(e);
        }),
        vec3h: l(function (e) {
          return e - Math.floor(e);
        }),
        vec4f: u(function (e) {
          return e - Math.floor(e);
        }),
        vec4h: i(function (e) {
          return e - Math.floor(e);
        })
      },
      isCloseToZero: {
        vec2f: function vec2f(e, n) {
          return Math.abs(e.x) <= n && Math.abs(e.y) <= n;
        },
        vec2h: function vec2h(e, n) {
          return Math.abs(e.x) <= n && Math.abs(e.y) <= n;
        },
        vec3f: function vec3f(e, n) {
          return Math.abs(e.x) <= n && Math.abs(e.y) <= n && Math.abs(e.z) <= n;
        },
        vec3h: function vec3h(e, n) {
          return Math.abs(e.x) <= n && Math.abs(e.y) <= n && Math.abs(e.z) <= n;
        },
        vec4f: function vec4f(e, n) {
          return Math.abs(e.x) <= n && Math.abs(e.y) <= n && Math.abs(e.z) <= n && Math.abs(e.w) <= n;
        },
        vec4h: function vec4h(e, n) {
          return Math.abs(e.x) <= n && Math.abs(e.y) <= n && Math.abs(e.z) <= n && Math.abs(e.w) <= n;
        }
      },
      neg: {
        vec2f: x(function (e) {
          return -e;
        }),
        vec2h: w(function (e) {
          return -e;
        }),
        vec2i: N(function (e) {
          return -e;
        }),
        vec2u: K(function (e) {
          return -e;
        }),
        "vec2<bool>": function vec2Bool(e) {
          return (0, _chunkL7HIBZAX.qa)(!e.x, !e.y);
        },
        vec3f: y(function (e) {
          return -e;
        }),
        vec3h: l(function (e) {
          return -e;
        }),
        vec3i: R(function (e) {
          return -e;
        }),
        vec3u: k(function (e) {
          return -e;
        }),
        "vec3<bool>": function vec3Bool(e) {
          return (0, _chunkL7HIBZAX.va)(!e.x, !e.y, !e.z);
        },
        vec4f: u(function (e) {
          return -e;
        }),
        vec4h: i(function (e) {
          return -e;
        }),
        vec4i: $(function (e) {
          return -e;
        }),
        vec4u: O(function (e) {
          return -e;
        }),
        "vec4<bool>": function vec4Bool(e) {
          return (0, _chunkL7HIBZAX.Aa)(!e.x, !e.y, !e.z, !e.w);
        }
      },
      select: {
        vec2f: function vec2f(e, n, s) {
          return (0, _chunkL7HIBZAX.ma)(s.x ? n.x : e.x, s.y ? n.y : e.y);
        },
        vec2h: function vec2h(e, n, s) {
          return (0, _chunkL7HIBZAX.na)(s.x ? n.x : e.x, s.y ? n.y : e.y);
        },
        vec2i: function vec2i(e, n, s) {
          return (0, _chunkL7HIBZAX.oa)(s.x ? n.x : e.x, s.y ? n.y : e.y);
        },
        vec2u: function vec2u(e, n, s) {
          return (0, _chunkL7HIBZAX.pa)(s.x ? n.x : e.x, s.y ? n.y : e.y);
        },
        "vec2<bool>": function vec2Bool(e, n, s) {
          return (0, _chunkL7HIBZAX.qa)(s.x ? n.x : e.x, s.y ? n.y : e.y);
        },
        vec3f: function vec3f(e, n, s) {
          return (0, _chunkL7HIBZAX.ra)(s.x ? n.x : e.x, s.y ? n.y : e.y, s.z ? n.z : e.z);
        },
        vec3h: function vec3h(e, n, s) {
          return (0, _chunkL7HIBZAX.sa)(s.x ? n.x : e.x, s.y ? n.y : e.y, s.z ? n.z : e.z);
        },
        vec3i: function vec3i(e, n, s) {
          return (0, _chunkL7HIBZAX.ta)(s.x ? n.x : e.x, s.y ? n.y : e.y, s.z ? n.z : e.z);
        },
        vec3u: function vec3u(e, n, s) {
          return (0, _chunkL7HIBZAX.ua)(s.x ? n.x : e.x, s.y ? n.y : e.y, s.z ? n.z : e.z);
        },
        "vec3<bool>": function vec3Bool(e, n, s) {
          return (0, _chunkL7HIBZAX.va)(s.x ? n.x : e.x, s.y ? n.y : e.y, s.z ? n.z : e.z);
        },
        vec4f: function vec4f(e, n, s) {
          return (0, _chunkL7HIBZAX.wa)(s.x ? n.x : e.x, s.y ? n.y : e.y, s.z ? n.z : e.z, s.w ? n.w : e.w);
        },
        vec4h: function vec4h(e, n, s) {
          return (0, _chunkL7HIBZAX.xa)(s.x ? n.x : e.x, s.y ? n.y : e.y, s.z ? n.z : e.z, s.w ? n.w : e.w);
        },
        vec4i: function vec4i(e, n, s) {
          return (0, _chunkL7HIBZAX.ya)(s.x ? n.x : e.x, s.y ? n.y : e.y, s.z ? n.z : e.z, s.w ? n.w : e.w);
        },
        vec4u: function vec4u(e, n, s) {
          return (0, _chunkL7HIBZAX.za)(s.x ? n.x : e.x, s.y ? n.y : e.y, s.z ? n.z : e.z, s.w ? n.w : e.w);
        },
        "vec4<bool>": function vec4Bool(e, n, s) {
          return (0, _chunkL7HIBZAX.Aa)(s.x ? n.x : e.x, s.y ? n.y : e.y, s.z ? n.z : e.z, s.w ? n.w : e.w);
        }
      }
    };
  function G(e) {
    return Te(e.dataType);
  }
  function Te(e) {
    var n = e == null ? void 0 : e.type;
    return !!(e != null && e[_chunkL7HIBZAX.a]) && (n === "abstractInt" || n === "abstractFloat" || n === "f32" || n === "f16" || n === "i32" || n === "u32");
  }
  function oe(e, n) {
    if (typeof e == "number" && typeof n == "number") return e + n;
    if (typeof e == "number" && (0, _chunkL7HIBZAX.z)(n)) return r.addMixed[n.kind](n, e);
    if ((0, _chunkL7HIBZAX.z)(e) && typeof n == "number") return r.addMixed[e.kind](e, n);
    if ((0, _chunkL7HIBZAX.z)(e) && (0, _chunkL7HIBZAX.z)(n) || (0, _chunkL7HIBZAX.D)(e) && (0, _chunkL7HIBZAX.D)(n)) return r.add[e.kind](e, n);
    throw new Error("Add/Sub called with invalid arguments.");
  }
  var _e = exports.d = (0, _chunkL7HIBZAX.ea)(oe, function (e, n) {
    return (0, _chunkL7HIBZAX.ba)(`(${e.value} + ${n.value})`, G(e) ? n.dataType : e.dataType);
  }, "coerce");
  function be(e, n) {
    return oe(e, xe(-1, n));
  }
  var fe = exports.e = (0, _chunkL7HIBZAX.ea)(be, function (e, n) {
    return (0, _chunkL7HIBZAX.ba)(`(${e.value} - ${n.value})`, G(e) ? n.dataType : e.dataType);
  }, "coerce");
  function ze(e, n) {
    if (typeof e == "number" && typeof n == "number") return e * n;
    if (typeof e == "number" && ((0, _chunkL7HIBZAX.z)(n) || (0, _chunkL7HIBZAX.D)(n))) return r.mulSxV[n.kind](e, n);
    if (((0, _chunkL7HIBZAX.z)(e) || (0, _chunkL7HIBZAX.D)(e)) && typeof n == "number") return r.mulSxV[e.kind](n, e);
    if ((0, _chunkL7HIBZAX.z)(e) && (0, _chunkL7HIBZAX.z)(n)) return r.mulVxV[e.kind](e, n);
    if ((0, _chunkL7HIBZAX.H)(e) && (0, _chunkL7HIBZAX.D)(n)) return r.mulVxM[n.kind](e, n);
    if ((0, _chunkL7HIBZAX.D)(e) && (0, _chunkL7HIBZAX.H)(n)) return r.mulMxV[e.kind](e, n);
    if ((0, _chunkL7HIBZAX.D)(e) && (0, _chunkL7HIBZAX.D)(n)) return r.mulVxV[e.kind](e, n);
    throw new Error("Mul called with invalid arguments.");
  }
  var xe = exports.f = (0, _chunkL7HIBZAX.ea)(ze, function (e, n) {
    var s = G(e) ? n.dataType : G(n) || e.dataType.type.startsWith("vec") ? e.dataType : n.dataType.type.startsWith("vec") ? n.dataType : e.dataType;
    return (0, _chunkL7HIBZAX.ba)(`(${e.value} * ${n.value})`, s);
  });
  function Me(e, n) {
    if (typeof e == "number" && typeof n == "number") return e / n;
    if (typeof e == "number" && (0, _chunkL7HIBZAX.z)(n)) return r.divMixed[n.kind](n, e);
    if ((0, _chunkL7HIBZAX.z)(e) && typeof n == "number") return r.divMixed[e.kind](e, n);
    if ((0, _chunkL7HIBZAX.z)(e) && (0, _chunkL7HIBZAX.z)(n)) return r.div[e.kind](e, n);
    throw new Error("Div called with invalid arguments.");
  }
  var Ue = exports.g = (0, _chunkL7HIBZAX.ea)(Me, function (e, n) {
    return G(e) && G(n) ? (0, _chunkL7HIBZAX.ba)(`(f32(${e.value}) / ${n.value})`, _chunkL7HIBZAX.ka) : (0, _chunkL7HIBZAX.ba)(`(${e.value} / ${n.value})`, e.dataType);
  });
  (0, _chunkL7HIBZAX.f)(xe, "mul");
  var We = exports.h = (0, _chunkL7HIBZAX.ea)(function (e) {
      return typeof e == "number" ? Math.abs(e) : r.abs[e.kind](e);
    }, function (e) {
      return (0, _chunkL7HIBZAX.ba)(`abs(${e.value})`, e.dataType);
    }),
    Ce = exports.i = (0, _chunkL7HIBZAX.ea)(function (e, n) {
      return typeof e == "number" && typeof n == "number" ? Math.atan2(e, n) : r.atan2[e.kind](e, n);
    }, function (e, n) {
      return (0, _chunkL7HIBZAX.ba)(`atan2(${e.value}, ${n.value})`, e.dataType);
    }),
    qe = exports.j = (0, _chunkL7HIBZAX.ea)(function (e) {
      return typeof e == "number" ? Math.acos(e) : r.acos[e.kind](e);
    }, function (e) {
      return (0, _chunkL7HIBZAX.ba)(`acos(${e.value})`, e.dataType);
    }),
    Se = exports.k = (0, _chunkL7HIBZAX.ea)(function (e) {
      return typeof e == "number" ? Math.asin(e) : r.asin[e.kind](e);
    }, function (e) {
      return (0, _chunkL7HIBZAX.ba)(`asin(${e.value})`, e.dataType);
    }),
    De = exports.l = (0, _chunkL7HIBZAX.ea)(function (e) {
      return typeof e == "number" ? Math.ceil(e) : r.ceil[e.kind](e);
    }, function (e) {
      return (0, _chunkL7HIBZAX.ba)(`ceil(${e.value})`, e.dataType);
    }),
    Ee = exports.m = (0, _chunkL7HIBZAX.ea)(function (e, n, s) {
      return typeof e == "number" ? Math.min(Math.max(n, e), s) : r.clamp[e.kind](e, n, s);
    }, function (e, n, s) {
      return (0, _chunkL7HIBZAX.ba)(`clamp(${e.value}, ${n.value}, ${s.value})`, e.dataType);
    }),
    je = exports.n = (0, _chunkL7HIBZAX.ea)(function (e) {
      return typeof e == "number" ? Math.cos(e) : r.cos[e.kind](e);
    }, function (e) {
      return (0, _chunkL7HIBZAX.ba)(`cos(${e.value})`, e.dataType);
    }),
    Pe = exports.o = (0, _chunkL7HIBZAX.ea)(function (e, n) {
      return r.cross[e.kind](e, n);
    }, function (e, n) {
      return (0, _chunkL7HIBZAX.ba)(`cross(${e.value}, ${n.value})`, e.dataType);
    }),
    pe = exports.p = (0, _chunkL7HIBZAX.ea)(function (e, n) {
      return r.dot[e.kind](e, n);
    }, function (e, n) {
      return (0, _chunkL7HIBZAX.ba)(`dot(${e.value}, ${n.value})`, _chunkL7HIBZAX.ka);
    }),
    Ze = exports.q = (0, _chunkL7HIBZAX.ea)(function (e) {
      return r.normalize[e.kind](e);
    }, function (e) {
      return (0, _chunkL7HIBZAX.ba)(`normalize(${e.value})`, e.dataType);
    }),
    Ge = exports.r = (0, _chunkL7HIBZAX.ea)(function (e) {
      return typeof e == "number" ? Math.floor(e) : r.floor[e.kind](e);
    }, function (e) {
      return (0, _chunkL7HIBZAX.ba)(`floor(${e.value})`, e.dataType);
    }),
    He = exports.s = (0, _chunkL7HIBZAX.ea)(function (e) {
      return typeof e == "number" ? e - Math.floor(e) : r.fract[e.kind](e);
    }, function (e) {
      return (0, _chunkL7HIBZAX.ba)(`fract(${e.value})`, e.dataType);
    }),
    Ve = exports.t = (0, _chunkL7HIBZAX.ea)(function (e) {
      return typeof e == "number" ? Math.abs(e) : r.length[e.kind](e);
    }, function (e) {
      return (0, _chunkL7HIBZAX.ba)(`length(${e.value})`, _chunkL7HIBZAX.ka);
    }),
    Je = exports.u = (0, _chunkL7HIBZAX.ea)(function (e, n) {
      return typeof e == "number" ? Math.max(e, n) : r.max[e.kind](e, n);
    }, function (e, n) {
      return (0, _chunkL7HIBZAX.ba)(`max(${e.value}, ${n.value})`, e.dataType);
    }, "coerce"),
    Qe = exports.v = (0, _chunkL7HIBZAX.ea)(function (e, n) {
      return typeof e == "number" ? Math.min(e, n) : r.min[e.kind](e, n);
    }, function (e, n) {
      return (0, _chunkL7HIBZAX.ba)(`min(${e.value}, ${n.value})`, e.dataType);
    }, "coerce"),
    Xe = exports.w = (0, _chunkL7HIBZAX.ea)(function (e) {
      return typeof e == "number" ? Math.sign(e) : r.sign[e.kind](e);
    }, function (e) {
      return (0, _chunkL7HIBZAX.ba)(`sign(${e.value})`, e.dataType);
    }),
    Ye = exports.x = (0, _chunkL7HIBZAX.ea)(function (e) {
      return typeof e == "number" ? Math.sin(e) : r.sin[e.kind](e);
    }, function (e) {
      return (0, _chunkL7HIBZAX.ba)(`sin(${e.value})`, e.dataType);
    }),
    en = exports.y = (0, _chunkL7HIBZAX.ea)(function (e) {
      return typeof e == "number" ? Math.exp(e) : r.exp[e.kind](e);
    }, function (e) {
      return (0, _chunkL7HIBZAX.ba)(`exp(${e.value})`, e.dataType);
    }),
    Ie = exports.z = (0, _chunkL7HIBZAX.ea)(function (e, n) {
      if (typeof e == "number" && typeof n == "number") return e ** n;
      if (typeof e == "object" && typeof n == "object" && "kind" in e && "kind" in n) return r.pow[e.kind](e, n);
      throw new Error("Invalid arguments to pow()");
    }, function (e, n) {
      return (0, _chunkL7HIBZAX.ba)(`pow(${e.value}, ${n.value})`, e.dataType);
    });
  (0, _chunkL7HIBZAX.f)(Ie, "pow");
  var nn = exports.A = (0, _chunkL7HIBZAX.ea)(function (e, n, s) {
      if (typeof e == "number") {
        if (typeof s != "number" || typeof n != "number") throw new Error("When e1 and e2 are numbers, the blend factor must be a number.");
        return e * (1 - s) + n * s;
      }
      if (typeof e == "number" || typeof n == "number") throw new Error("e1 and e2 need to both be vectors of the same kind.");
      return r.mix[e.kind](e, n, s);
    }, function (e, n, s) {
      return (0, _chunkL7HIBZAX.ba)(`mix(${e.value}, ${n.value}, ${s.value})`, e.dataType);
    }),
    sn = exports.B = (0, _chunkL7HIBZAX.ea)(function (e, n) {
      return fe(e, xe(2 * pe(n, e), n));
    }, function (e, n) {
      return (0, _chunkL7HIBZAX.ba)(`reflect(${e.value}, ${n.value})`, e.dataType);
    }),
    tn = exports.C = (0, _chunkL7HIBZAX.ea)(function (e, n) {
      return typeof e == "number" && typeof n == "number" ? Math.abs(e - n) : Ve(fe(e, n));
    }, function (e, n) {
      return (0, _chunkL7HIBZAX.ba)(`distance(${e.value}, ${n.value})`, _chunkL7HIBZAX.ka);
    }),
    cn = exports.D = (0, _chunkL7HIBZAX.ea)(function (e) {
      return typeof e == "number" ? -e : r.neg[e.kind](e);
    }, function (e) {
      return (0, _chunkL7HIBZAX.ba)(`-(${e.value})`, e.dataType);
    }),
    rn = exports.E = (0, _chunkL7HIBZAX.ea)(function (e) {
      return typeof e == "number" ? Math.sqrt(e) : r.sqrt[e.kind](e);
    }, function (e) {
      return (0, _chunkL7HIBZAX.ba)(`sqrt(${e.value})`, e.dataType);
    });
},32,[30],"node_modules/typegpu/chunk-SLWTVY6K.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.NodeTypeCatalog = exports.FuncParameterType = exports.FORMAT_VERSION = void 0;
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
    },
    t = exports.FuncParameterType = {
      identifier: "i",
      destructuredObject: "d"
    };
  var o = exports.FORMAT_VERSION = 1;
},33,[],"node_modules/tinyest/index.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "abs", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.h;
    }
  });
  Object.defineProperty(exports, "acos", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.j;
    }
  });
  Object.defineProperty(exports, "add", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.d;
    }
  });
  exports.arrayLength = exports.any = exports.and = exports.allEq = exports.all = void 0;
  Object.defineProperty(exports, "asin", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.k;
    }
  });
  Object.defineProperty(exports, "atan2", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.i;
    }
  });
  exports.atomicXor = exports.atomicSub = exports.atomicStore = exports.atomicOr = exports.atomicMin = exports.atomicMax = exports.atomicLoad = exports.atomicAnd = exports.atomicAdd = void 0;
  Object.defineProperty(exports, "ceil", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.l;
    }
  });
  Object.defineProperty(exports, "clamp", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.m;
    }
  });
  Object.defineProperty(exports, "cos", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.n;
    }
  });
  Object.defineProperty(exports, "cross", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.o;
    }
  });
  exports.discard = void 0;
  Object.defineProperty(exports, "distance", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.C;
    }
  });
  Object.defineProperty(exports, "div", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.g;
    }
  });
  Object.defineProperty(exports, "dot", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.p;
    }
  });
  exports.eq = void 0;
  Object.defineProperty(exports, "exp", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.y;
    }
  });
  Object.defineProperty(exports, "floor", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.r;
    }
  });
  Object.defineProperty(exports, "fract", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.s;
    }
  });
  exports.le = exports.isCloseTo = exports.gt = exports.ge = void 0;
  Object.defineProperty(exports, "length", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.t;
    }
  });
  exports.lt = void 0;
  Object.defineProperty(exports, "max", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.u;
    }
  });
  Object.defineProperty(exports, "min", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.v;
    }
  });
  Object.defineProperty(exports, "mix", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.A;
    }
  });
  Object.defineProperty(exports, "mul", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.f;
    }
  });
  exports.ne = void 0;
  Object.defineProperty(exports, "neg", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.D;
    }
  });
  Object.defineProperty(exports, "normalize", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.q;
    }
  });
  exports.pack4x8unorm = exports.pack2x16float = exports.or = exports.not = void 0;
  Object.defineProperty(exports, "pow", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.z;
    }
  });
  Object.defineProperty(exports, "reflect", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.B;
    }
  });
  exports.select = void 0;
  Object.defineProperty(exports, "sign", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.w;
    }
  });
  Object.defineProperty(exports, "sin", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.x;
    }
  });
  Object.defineProperty(exports, "sqrt", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.E;
    }
  });
  exports.storageBarrier = void 0;
  Object.defineProperty(exports, "sub", {
    enumerable: true,
    get: function get() {
      return _chunkSLWTVY6K.e;
    }
  });
  exports.workgroupBarrier = exports.unpack4x8unorm = exports.unpack2x16float = exports.textureStore = exports.textureSampleLevel = exports.textureSample = exports.textureLoad = exports.textureDimensions = exports.textureBarrier = void 0;
  var _chunkSLWTVY6K = require(_dependencyMap[0], "../chunk-SLWTVY6K.js");
  var _chunkL7HIBZAX = require(_dependencyMap[1], "../chunk-L7HIBZAX.js");
  var d = _interopRequireWildcard(require(_dependencyMap[2], "typed-binary"));
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var ce = exports.discard = (0, _chunkL7HIBZAX.ea)(function () {
    throw new Error("discard() can only be used on the GPU.");
  }, function () {
    return (0, _chunkL7HIBZAX.ba)("discard;", _chunkL7HIBZAX.y);
  });
  function v(e) {
    return e.dataType.type.includes("2") ? _chunkL7HIBZAX.qa : e.dataType.type.includes("3") ? _chunkL7HIBZAX.va : _chunkL7HIBZAX.Aa;
  }
  var xe = exports.allEq = (0, _chunkL7HIBZAX.ea)(function (e, t) {
      return D(g(e, t));
    }, function (e, t) {
      return (0, _chunkL7HIBZAX.ba)(`all(${e.value} == ${t.value})`, _chunkL7HIBZAX.ha);
    }),
    g = exports.eq = (0, _chunkL7HIBZAX.ea)(function (e, t) {
      return _chunkSLWTVY6K.a.eq[e.kind](e, t);
    }, function (e, t) {
      return (0, _chunkL7HIBZAX.ba)(`(${e.value} == ${t.value})`, v(e));
    }),
    ye = exports.ne = (0, _chunkL7HIBZAX.ea)(function (e, t) {
      return m(g(e, t));
    }, function (e, t) {
      return (0, _chunkL7HIBZAX.ba)(`(${e.value} != ${t.value})`, v(e));
    }),
    S = exports.lt = (0, _chunkL7HIBZAX.ea)(function (e, t) {
      return _chunkSLWTVY6K.a.lt[e.kind](e, t);
    }, function (e, t) {
      return (0, _chunkL7HIBZAX.ba)(`(${e.value} < ${t.value})`, v(e));
    }),
    ve = exports.le = (0, _chunkL7HIBZAX.ea)(function (e, t) {
      return $(S(e, t), g(e, t));
    }, function (e, t) {
      return (0, _chunkL7HIBZAX.ba)(`(${e.value} <= ${t.value})`, v(e));
    }),
    fe = exports.gt = (0, _chunkL7HIBZAX.ea)(function (e, t) {
      return W(m(S(e, t)), m(g(e, t)));
    }, function (e, t) {
      return (0, _chunkL7HIBZAX.ba)(`(${e.value} > ${t.value})`, v(e));
    }),
    ge = exports.ge = (0, _chunkL7HIBZAX.ea)(function (e, t) {
      return m(S(e, t));
    }, function (e, t) {
      return (0, _chunkL7HIBZAX.ba)(`(${e.value} >= ${t.value})`, v(e));
    }),
    m = exports.not = (0, _chunkL7HIBZAX.ea)(function (e) {
      return _chunkSLWTVY6K.a.neg[e.kind](e);
    }, function (e) {
      return (0, _chunkL7HIBZAX.ba)(`!(${e.value})`, e.dataType);
    }),
    $ = exports.or = (0, _chunkL7HIBZAX.ea)(function (e, t) {
      return _chunkSLWTVY6K.a.or[e.kind](e, t);
    }, function (e, t) {
      return (0, _chunkL7HIBZAX.ba)(`(${e.value} | ${t.value})`, e.dataType);
    }),
    W = exports.and = (0, _chunkL7HIBZAX.ea)(function (e, t) {
      return m($(m(e), m(t)));
    }, function (e, t) {
      return (0, _chunkL7HIBZAX.ba)(`(${e.value} & ${t.value})`, e.dataType);
    }),
    D = exports.all = (0, _chunkL7HIBZAX.ea)(function (e) {
      return _chunkSLWTVY6K.a.all[e.kind](e);
    }, function (e) {
      return (0, _chunkL7HIBZAX.ba)(`all(${e.value})`, _chunkL7HIBZAX.ha);
    }),
    Se = exports.any = (0, _chunkL7HIBZAX.ea)(function (e) {
      return !D(m(e));
    }, function (e) {
      return (0, _chunkL7HIBZAX.ba)(`any(${e.value})`, _chunkL7HIBZAX.ha);
    }),
    be = exports.isCloseTo = (0, _chunkL7HIBZAX.ea)(function (e, t) {
      var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .01;
      return typeof e == "number" && typeof t == "number" ? Math.abs(e - t) < o : (0, _chunkL7HIBZAX.z)(e) && (0, _chunkL7HIBZAX.z)(t) ? _chunkSLWTVY6K.a.isCloseToZero[e.kind]((0, _chunkSLWTVY6K.e)(e, t), o) : !1;
    }, function (e, t) {
      var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _chunkL7HIBZAX.ba)(.01, _chunkL7HIBZAX.ka);
      return (0, _chunkSLWTVY6K.b)(e) && (0, _chunkSLWTVY6K.b)(t) ? (0, _chunkL7HIBZAX.ba)(`(abs(f32(${e.value}) - f32(${t.value})) <= ${o.value})`, _chunkL7HIBZAX.ha) : !(0, _chunkSLWTVY6K.b)(e) && !(0, _chunkSLWTVY6K.b)(t) ? (0, _chunkL7HIBZAX.ba)(`all(abs(${e.value} - ${t.value}) <= (${e.value} - ${e.value}) + ${o.value})`, _chunkL7HIBZAX.ha) : (0, _chunkL7HIBZAX.ba)("false", _chunkL7HIBZAX.ha);
    }),
    we = exports.select = (0, _chunkL7HIBZAX.ea)(function (e, t, o) {
      return typeof o == "boolean" ? o ? t : e : _chunkSLWTVY6K.a.select[e.kind](e, t, o);
    }, function (e, t, o) {
      return (0, _chunkL7HIBZAX.ba)(`select(${e.value}, ${t.value}, ${o.value})`, e.dataType);
    });
  var Ae = exports.workgroupBarrier = (0, _chunkL7HIBZAX.ea)(function () {
      return console.warn("workgroupBarrier is a no-op outside of GPU mode.");
    }, function () {
      return (0, _chunkL7HIBZAX.ba)("workgroupBarrier()", _chunkL7HIBZAX.y);
    }),
    Ie = exports.storageBarrier = (0, _chunkL7HIBZAX.ea)(function () {
      return console.warn("storageBarrier is a no-op outside of GPU mode.");
    }, function () {
      return (0, _chunkL7HIBZAX.ba)("storageBarrier()", _chunkL7HIBZAX.y);
    }),
    $e = exports.textureBarrier = (0, _chunkL7HIBZAX.ea)(function () {
      return console.warn("textureBarrier is a no-op outside of GPU mode.");
    }, function () {
      return (0, _chunkL7HIBZAX.ba)("textureBarrier()", _chunkL7HIBZAX.y);
    }),
    De = exports.atomicLoad = (0, _chunkL7HIBZAX.ea)(function (e) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e) {
      if ((0, _chunkL7HIBZAX.I)(e.dataType) && e.dataType.type === "atomic") return (0, _chunkL7HIBZAX.ba)(`atomicLoad(&${e.value})`, e.dataType.inner);
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }),
    Be = exports.atomicStore = (0, _chunkL7HIBZAX.ea)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if (!(0, _chunkL7HIBZAX.I)(e.dataType) || e.dataType.type !== "atomic") throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
      return (0, _chunkL7HIBZAX.ba)(`atomicStore(&${e.value}, ${t.value})`, _chunkL7HIBZAX.y);
    }),
    y = function y(e, t) {
      return e.dataType.type === "atomic" && e.dataType.inner.type === "i32" ? [e.dataType, _chunkL7HIBZAX.ja] : [e.dataType, _chunkL7HIBZAX.ia];
    },
    Ve = exports.atomicAdd = (0, _chunkL7HIBZAX.ea)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if ((0, _chunkL7HIBZAX.I)(e.dataType) && e.dataType.type === "atomic") return (0, _chunkL7HIBZAX.ba)(`atomicAdd(&${e.value}, ${t.value})`, e.dataType.inner);
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }, y),
    Ue = exports.atomicSub = (0, _chunkL7HIBZAX.ea)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if ((0, _chunkL7HIBZAX.I)(e.dataType) && e.dataType.type === "atomic") return (0, _chunkL7HIBZAX.ba)(`atomicSub(&${e.value}, ${t.value})`, e.dataType.inner);
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }, y),
    ke = exports.atomicMax = (0, _chunkL7HIBZAX.ea)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if ((0, _chunkL7HIBZAX.I)(e.dataType) && e.dataType.type === "atomic") return (0, _chunkL7HIBZAX.ba)(`atomicMax(&${e.value}, ${t.value})`, e.dataType.inner);
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }, y),
    Ee = exports.atomicMin = (0, _chunkL7HIBZAX.ea)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if ((0, _chunkL7HIBZAX.I)(e.dataType) && e.dataType.type === "atomic") return (0, _chunkL7HIBZAX.ba)(`atomicMin(&${e.value}, ${t.value})`, e.dataType.inner);
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }, y),
    Oe = exports.atomicAnd = (0, _chunkL7HIBZAX.ea)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if ((0, _chunkL7HIBZAX.I)(e.dataType) && e.dataType.type === "atomic") return (0, _chunkL7HIBZAX.ba)(`atomicAnd(&${e.value}, ${t.value})`, e.dataType.inner);
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }, y),
    _e = exports.atomicOr = (0, _chunkL7HIBZAX.ea)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if ((0, _chunkL7HIBZAX.I)(e.dataType) && e.dataType.type === "atomic") return (0, _chunkL7HIBZAX.ba)(`atomicOr(&${e.value}, ${t.value})`, e.dataType.inner);
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }, y),
    Pe = exports.atomicXor = (0, _chunkL7HIBZAX.ea)(function (e, t) {
      throw new Error("Atomic operations are not supported outside of GPU mode.");
    }, function (e, t) {
      if ((0, _chunkL7HIBZAX.I)(e.dataType) && e.dataType.type === "atomic") return (0, _chunkL7HIBZAX.ba)(`atomicXor(&${e.value}, ${t.value})`, e.dataType.inner);
      throw new Error(`Invalid atomic type: ${JSON.stringify(e.dataType, null, 2)}`);
    }, y);
  var Ge = exports.arrayLength = (0, _chunkL7HIBZAX.ea)(function (e) {
    return e.length;
  }, function (e) {
    return (0, _chunkL7HIBZAX.L)(e.dataType) && (0, _chunkL7HIBZAX.J)(e.dataType.inner) && e.dataType.inner.elementCount > 0 ? (0, _chunkL7HIBZAX.ba)(String(e.dataType.inner.elementCount), _chunkL7HIBZAX.fa) : (0, _chunkL7HIBZAX.ba)(`arrayLength(${e.value})`, _chunkL7HIBZAX.ia);
  }, function (e) {
    return [(0, _chunkL7HIBZAX.Ga)(e.dataType)];
  });
  var Le = exports.unpack2x16float = (0, _chunkL7HIBZAX.ea)(function (e) {
      var t = new ArrayBuffer(4);
      new d.BufferWriter(t).writeUint32(e);
      var n = new d.BufferReader(t);
      return (0, _chunkL7HIBZAX.ma)(n.readFloat16(), n.readFloat16());
    }, function (e) {
      return (0, _chunkL7HIBZAX.ba)(`unpack2x16float(${e.value})`, _chunkL7HIBZAX.ma);
    }),
    Ne = exports.pack2x16float = (0, _chunkL7HIBZAX.ea)(function (e) {
      var t = new ArrayBuffer(4),
        o = new d.BufferWriter(t);
      o.writeFloat16(e.x), o.writeFloat16(e.y);
      var n = new d.BufferReader(t);
      return (0, _chunkL7HIBZAX.ia)(n.readUint32());
    }, function (e) {
      return (0, _chunkL7HIBZAX.ba)(`pack2x16float(${e.value})`, _chunkL7HIBZAX.ia);
    }),
    he = exports.unpack4x8unorm = (0, _chunkL7HIBZAX.ea)(function (e) {
      var t = new ArrayBuffer(4);
      new d.BufferWriter(t).writeUint32(e);
      var n = new d.BufferReader(t);
      return (0, _chunkL7HIBZAX.wa)(n.readUint8() / 255, n.readUint8() / 255, n.readUint8() / 255, n.readUint8() / 255);
    }, function (e) {
      return (0, _chunkL7HIBZAX.ba)(`unpack4x8unorm(${e.value})`, _chunkL7HIBZAX.wa);
    }),
    Fe = exports.pack4x8unorm = (0, _chunkL7HIBZAX.ea)(function (e) {
      var t = new ArrayBuffer(4),
        o = new d.BufferWriter(t);
      o.writeUint8(e.x * 255), o.writeUint8(e.y * 255), o.writeUint8(e.z * 255), o.writeUint8(e.w * 255);
      var n = new d.BufferReader(t);
      return (0, _chunkL7HIBZAX.ia)(n.readUint32());
    }, function (e) {
      return (0, _chunkL7HIBZAX.ba)(`pack4x8unorm(${e.value})`, _chunkL7HIBZAX.ia);
    });
  var We = exports.textureSample = (0, _chunkL7HIBZAX.ea)(function (e, t, o, n, u) {
      throw new Error("Texture sampling is not supported outside of GPU mode.");
    }, function (e, t, o, n, u) {
      var s = [e, t, o];
      return n !== void 0 && s.push(n), u !== void 0 && s.push(u), (0, _chunkL7HIBZAX.ba)(`textureSample(${s.map(function (b) {
        return b.value;
      }).join(", ")})`, _chunkL7HIBZAX.wa);
    }),
    Je = exports.textureSampleLevel = (0, _chunkL7HIBZAX.ea)(function (e, t, o, n, u) {
      throw new Error("Texture sampling is not supported outside of GPU mode.");
    }, function (e, t, o, n, u) {
      var s = [e, t, o, n];
      return u !== void 0 && s.push(u), (0, _chunkL7HIBZAX.ba)(`textureSampleLevel(${s.map(function (b) {
        return b.value;
      }).join(", ")})`, _chunkL7HIBZAX.wa);
    }),
    Ce = {
      u32: _chunkL7HIBZAX.za,
      i32: _chunkL7HIBZAX.ya,
      f32: _chunkL7HIBZAX.wa
    },
    Me = exports.textureLoad = (0, _chunkL7HIBZAX.ea)(function (e, t, o) {
      throw new Error("Texture loading is not supported outside of GPU mode.");
    }, function (e, t, o) {
      var n = [e, t];
      o !== void 0 && n.push(o);
      var u = e.dataType;
      return (0, _chunkL7HIBZAX.ba)(`textureLoad(${n.map(function (s) {
        return s.value;
      }).join(", ")})`, "texelDataType" in u ? u.texelDataType : Ce[u.channelDataType.type]);
    }),
    qe = exports.textureStore = (0, _chunkL7HIBZAX.ea)(function (e, t, o, n) {
      throw new Error("Texture storing is not supported outside of GPU mode.");
    }, function (e, t, o, n) {
      return (0, _chunkL7HIBZAX.ba)(`textureStore(${[e, t, o, n].filter(function (u) {
        return u !== void 0;
      }).map(function (u) {
        return u.value;
      }).join(", ")})`, _chunkL7HIBZAX.y);
    }),
    je = exports.textureDimensions = (0, _chunkL7HIBZAX.ea)(function (e, t) {
      throw new Error("Texture dimensions are not supported outside of GPU mode.");
    }, function (e, t) {
      var o = e.dataType.dimension;
      return (0, _chunkL7HIBZAX.ba)(`textureDimensions(${e.value}${t !== void 0 ? `, ${t.value}` : ""})`, o === "1d" ? _chunkL7HIBZAX.ia : o === "3d" ? _chunkL7HIBZAX.ua : _chunkL7HIBZAX.pa);
    });
},34,[32,30,31],"node_modules/typegpu/std/index.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Void", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.y;
    }
  });
  Object.defineProperty(exports, "align", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.Y;
    }
  });
  Object.defineProperty(exports, "alignmentOf", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.U;
    }
  });
  Object.defineProperty(exports, "arrayOf", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.X;
    }
  });
  Object.defineProperty(exports, "atomic", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.fa;
    }
  });
  Object.defineProperty(exports, "bool", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.ha;
    }
  });
  Object.defineProperty(exports, "builtin", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.ga;
    }
  });
  Object.defineProperty(exports, "disarrayOf", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.da;
    }
  });
  Object.defineProperty(exports, "f16", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.la;
    }
  });
  Object.defineProperty(exports, "f32", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.ka;
    }
  });
  Object.defineProperty(exports, "float16", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.B;
    }
  });
  Object.defineProperty(exports, "float16x2", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.C;
    }
  });
  Object.defineProperty(exports, "float16x4", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.D;
    }
  });
  Object.defineProperty(exports, "float32", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.E;
    }
  });
  Object.defineProperty(exports, "float32x2", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.F;
    }
  });
  Object.defineProperty(exports, "float32x3", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.G;
    }
  });
  Object.defineProperty(exports, "float32x4", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.H;
    }
  });
  Object.defineProperty(exports, "formatToWGSLType", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.b;
    }
  });
  Object.defineProperty(exports, "i32", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.ja;
    }
  });
  Object.defineProperty(exports, "interpolate", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.$;
    }
  });
  Object.defineProperty(exports, "isAlignAttrib", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.N;
    }
  });
  Object.defineProperty(exports, "isAtomic", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.M;
    }
  });
  Object.defineProperty(exports, "isBuiltin", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.aa;
    }
  });
  Object.defineProperty(exports, "isBuiltinAttrib", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.R;
    }
  });
  Object.defineProperty(exports, "isData", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.$;
    }
  });
  Object.defineProperty(exports, "isDecorated", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.S;
    }
  });
  Object.defineProperty(exports, "isDisarray", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.V;
    }
  });
  Object.defineProperty(exports, "isInterpolateAttrib", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.Q;
    }
  });
  Object.defineProperty(exports, "isLocationAttrib", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.P;
    }
  });
  Object.defineProperty(exports, "isLooseData", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.U;
    }
  });
  Object.defineProperty(exports, "isLooseDecorated", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.X;
    }
  });
  Object.defineProperty(exports, "isPtr", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.L;
    }
  });
  Object.defineProperty(exports, "isSizeAttrib", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.O;
    }
  });
  Object.defineProperty(exports, "isUnstruct", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.W;
    }
  });
  Object.defineProperty(exports, "isWgslArray", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.J;
    }
  });
  Object.defineProperty(exports, "isWgslData", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.I;
    }
  });
  Object.defineProperty(exports, "isWgslStruct", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.K;
    }
  });
  Object.defineProperty(exports, "location", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX._;
    }
  });
  Object.defineProperty(exports, "mat2x2f", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.Ca;
    }
  });
  Object.defineProperty(exports, "mat3x3f", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.Da;
    }
  });
  Object.defineProperty(exports, "mat4x4f", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.Ea;
    }
  });
  Object.defineProperty(exports, "matToArray", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.Fa;
    }
  });
  Object.defineProperty(exports, "packedFormats", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.c;
    }
  });
  Object.defineProperty(exports, "ptrFn", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.Ga;
    }
  });
  Object.defineProperty(exports, "ptrHandle", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.La;
    }
  });
  Object.defineProperty(exports, "ptrPrivate", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.Ha;
    }
  });
  Object.defineProperty(exports, "ptrStorage", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.Ja;
    }
  });
  Object.defineProperty(exports, "ptrUniform", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.Ka;
    }
  });
  Object.defineProperty(exports, "ptrWorkgroup", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.Ia;
    }
  });
  Object.defineProperty(exports, "sint16", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.s;
    }
  });
  Object.defineProperty(exports, "sint16x2", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.t;
    }
  });
  Object.defineProperty(exports, "sint16x4", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.u;
    }
  });
  Object.defineProperty(exports, "sint32", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.M;
    }
  });
  Object.defineProperty(exports, "sint32x2", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.N;
    }
  });
  Object.defineProperty(exports, "sint32x3", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.O;
    }
  });
  Object.defineProperty(exports, "sint32x4", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.P;
    }
  });
  Object.defineProperty(exports, "sint8", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.g;
    }
  });
  Object.defineProperty(exports, "sint8x2", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.h;
    }
  });
  Object.defineProperty(exports, "sint8x4", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.i;
    }
  });
  Object.defineProperty(exports, "size", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.Z;
    }
  });
  Object.defineProperty(exports, "sizeOf", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.W;
    }
  });
  Object.defineProperty(exports, "snorm16", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.y;
    }
  });
  Object.defineProperty(exports, "snorm16x2", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.z;
    }
  });
  Object.defineProperty(exports, "snorm16x4", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.A;
    }
  });
  Object.defineProperty(exports, "snorm8", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.m;
    }
  });
  Object.defineProperty(exports, "snorm8x2", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.n;
    }
  });
  Object.defineProperty(exports, "snorm8x4", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.o;
    }
  });
  Object.defineProperty(exports, "struct", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.ca;
    }
  });
  Object.defineProperty(exports, "u32", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.ia;
    }
  });
  Object.defineProperty(exports, "uint16", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.p;
    }
  });
  Object.defineProperty(exports, "uint16x2", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.q;
    }
  });
  Object.defineProperty(exports, "uint16x4", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.r;
    }
  });
  Object.defineProperty(exports, "uint32", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.I;
    }
  });
  Object.defineProperty(exports, "uint32x2", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.J;
    }
  });
  Object.defineProperty(exports, "uint32x3", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.K;
    }
  });
  Object.defineProperty(exports, "uint32x4", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.L;
    }
  });
  Object.defineProperty(exports, "uint8", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.d;
    }
  });
  Object.defineProperty(exports, "uint8x2", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.e;
    }
  });
  Object.defineProperty(exports, "uint8x4", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.f;
    }
  });
  Object.defineProperty(exports, "unorm10_10_10_2", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.Q;
    }
  });
  Object.defineProperty(exports, "unorm16", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.v;
    }
  });
  Object.defineProperty(exports, "unorm16x2", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.w;
    }
  });
  Object.defineProperty(exports, "unorm16x4", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.x;
    }
  });
  Object.defineProperty(exports, "unorm8", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.j;
    }
  });
  Object.defineProperty(exports, "unorm8x2", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.k;
    }
  });
  Object.defineProperty(exports, "unorm8x4", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.l;
    }
  });
  Object.defineProperty(exports, "unorm8x4_bgra", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.R;
    }
  });
  Object.defineProperty(exports, "unstruct", {
    enumerable: true,
    get: function get() {
      return _chunkSFECI7OX.ea;
    }
  });
  Object.defineProperty(exports, "vec2b", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.qa;
    }
  });
  Object.defineProperty(exports, "vec2f", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.ma;
    }
  });
  Object.defineProperty(exports, "vec2h", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.na;
    }
  });
  Object.defineProperty(exports, "vec2i", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.oa;
    }
  });
  Object.defineProperty(exports, "vec2u", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.pa;
    }
  });
  Object.defineProperty(exports, "vec3b", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.va;
    }
  });
  Object.defineProperty(exports, "vec3f", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.ra;
    }
  });
  Object.defineProperty(exports, "vec3h", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.sa;
    }
  });
  Object.defineProperty(exports, "vec3i", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.ta;
    }
  });
  Object.defineProperty(exports, "vec3u", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.ua;
    }
  });
  Object.defineProperty(exports, "vec4b", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.Aa;
    }
  });
  Object.defineProperty(exports, "vec4f", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.wa;
    }
  });
  Object.defineProperty(exports, "vec4h", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.xa;
    }
  });
  Object.defineProperty(exports, "vec4i", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.ya;
    }
  });
  Object.defineProperty(exports, "vec4u", {
    enumerable: true,
    get: function get() {
      return _chunkL7HIBZAX.za;
    }
  });
  var _chunkSFECI7OX = require(_dependencyMap[0], "../chunk-SFECI7OX.js");
  var _chunkL7HIBZAX = require(_dependencyMap[1], "../chunk-L7HIBZAX.js");
},35,[29,30],"node_modules/typegpu/data/index.js");
global.__d(function (global, require, _$$_IMPORT_DEFAULT, _$$_IMPORT_ALL, module, exports, _dependencyMap) {
  var _interopRequireDefault = require(_dependencyMap[0], "@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.randomGeneratorSlot = exports.randomGeneratorShell = exports.randf = exports.perlin3d = exports.perlin2d = exports.DefaultGenerator = exports.BPETER = void 0;
  var _defineProperty2 = _interopRequireDefault(require(_dependencyMap[1], "@babel/runtime/helpers/defineProperty"));
  var _typegpu = _interopRequireDefault(require(_dependencyMap[2], "typegpu"));
  var d = _interopRequireWildcard(require(_dependencyMap[3], "typegpu/data"));
  var _std = require(_dependencyMap[4], "typegpu/std");
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var randomGeneratorShell = exports.randomGeneratorShell = _typegpu.default["~unstable"].fn([], d.f32);
  var BPETER = exports.BPETER = function () {
    var seed = _typegpu.default["~unstable"].privateVar(d.vec2f);
    return {
      seed: _typegpu.default["~unstable"].fn([d.f32])(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
        "params": [{
          "type": "i",
          "name": "value"
        }],
        "body": [0, [[2, [7, "seed", "value"], "=", [6, [7, "d", "vec2f"], ["value", [5, "0"]]]]]],
        "externalNames": ["seed", "d"]
      }, {
        seed: seed,
        d: d
      })),
      seed2: _typegpu.default["~unstable"].fn([d.vec2f])(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
        "params": [{
          "type": "i",
          "name": "value"
        }],
        "body": [0, [[2, [7, "seed", "value"], "=", "value"]]],
        "externalNames": ["seed"]
      }, {
        seed: seed
      })),
      seed3: _typegpu.default["~unstable"].fn([d.vec3f])(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
        "params": [{
          "type": "i",
          "name": "value"
        }],
        "body": [0, [[2, [7, "seed", "value"], "=", [6, "add", [[7, "value", "xy"], [6, [7, "d", "vec2f"], [[7, "value", "z"]]]]]]]],
        "externalNames": ["seed", "add", "d"]
      }, {
        seed: seed,
        add: _std.add,
        d: d
      })),
      seed4: _typegpu.default["~unstable"].fn([d.vec4f])(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
        "params": [{
          "type": "i",
          "name": "value"
        }],
        "body": [0, [[2, [7, "seed", "value"], "=", [6, "add", [[7, "value", "xy"], [7, "value", "zw"]]]]]],
        "externalNames": ["seed", "add"]
      }, {
        seed: seed,
        add: _std.add
      })),
      sample: randomGeneratorShell(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
        "params": [],
        "body": [0, [[13, "a", [6, "dot", [[7, "seed", "value"], [6, [7, "d", "vec2f"], [[5, "23.14077926"], [5, "232.61690225"]]]]]], [13, "b", [6, "dot", [[7, "seed", "value"], [6, [7, "d", "vec2f"], [[5, "54.47856553"], [5, "345.84153136"]]]]]], [2, [7, [7, "seed", "value"], "x"], "=", [6, "fract", [[1, [6, "cos", ["a"]], "*", [5, "136.8168"]]]]], [2, [7, [7, "seed", "value"], "y"], "=", [6, "fract", [[1, [6, "cos", ["b"]], "*", [5, "534.7645"]]]]], [10, [7, [7, "seed", "value"], "y"]]]],
        "externalNames": ["dot", "seed", "d", "fract", "cos"]
      }, {
        dot: _std.dot,
        seed: seed,
        d: d,
        fract: _std.fract,
        cos: _std.cos
      }))
    };
  }();
  var DefaultGenerator = exports.DefaultGenerator = BPETER;
  var randomGeneratorSlot = exports.randomGeneratorSlot = _typegpu.default["~unstable"].slot(DefaultGenerator);
  var TWO_PI = Math.PI * 2;
  var randSeed = _typegpu.default["~unstable"].fn([d.f32])(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
    "params": [{
      "type": "i",
      "name": "seed"
    }],
    "body": [0, [[6, [7, [7, "randomGeneratorSlot", "value"], "seed"], ["seed"]]]],
    "externalNames": ["randomGeneratorSlot"]
  }, {
    randomGeneratorSlot: randomGeneratorSlot
  }));
  var randSeed2 = _typegpu.default["~unstable"].fn([d.vec2f])(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
    "params": [{
      "type": "i",
      "name": "seed"
    }],
    "body": [0, [[6, [7, [7, "randomGeneratorSlot", "value"], "seed2"], ["seed"]]]],
    "externalNames": ["randomGeneratorSlot"]
  }, {
    randomGeneratorSlot: randomGeneratorSlot
  }));
  var randSeed3 = _typegpu.default["~unstable"].fn([d.vec3f])(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
    "params": [{
      "type": "i",
      "name": "seed"
    }],
    "body": [0, [[6, [7, [7, "randomGeneratorSlot", "value"], "seed3"], ["seed"]]]],
    "externalNames": ["randomGeneratorSlot"]
  }, {
    randomGeneratorSlot: randomGeneratorSlot
  }));
  var randSeed4 = _typegpu.default["~unstable"].fn([d.vec4f])(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
    "params": [{
      "type": "i",
      "name": "seed"
    }],
    "body": [0, [[6, [7, [7, "randomGeneratorSlot", "value"], "seed4"], ["seed"]]]],
    "externalNames": ["randomGeneratorSlot"]
  }, {
    randomGeneratorSlot: randomGeneratorSlot
  }));
  var randFloat01 = _typegpu.default["~unstable"].fn([], d.f32)(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
    "params": [],
    "body": [0, [[10, [6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []]]]],
    "externalNames": ["randomGeneratorSlot"]
  }, {
    randomGeneratorSlot: randomGeneratorSlot
  }));
  var randInUnitCube = _typegpu.default["~unstable"].fn([], d.vec3f)(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
    "params": [],
    "body": [0, [[10, [6, [7, "d", "vec3f"], [[1, [1, [6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []], "*", [5, "2"]], "-", [5, "1"]], [1, [1, [6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []], "*", [5, "2"]], "-", [5, "1"]], [1, [1, [6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []], "*", [5, "2"]], "-", [5, "1"]]]]]]],
    "externalNames": ["d", "randomGeneratorSlot"]
  }, {
    d: d,
    randomGeneratorSlot: randomGeneratorSlot
  }));
  var randInUnitCircle = _typegpu.default["~unstable"].fn([], d.vec2f)(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
    "params": [],
    "body": [0, [[13, "radius", [6, "sqrt", [[6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []]]]], [13, "angle", [1, [6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []], "*", "TWO_PI"]], [10, [6, [7, "d", "vec2f"], [[1, [6, "cos", ["angle"]], "*", "radius"], [1, [6, "sin", ["angle"]], "*", "radius"]]]]]],
    "externalNames": ["sqrt", "randomGeneratorSlot", "TWO_PI", "d", "cos", "sin"]
  }, {
    sqrt: _std.sqrt,
    randomGeneratorSlot: randomGeneratorSlot,
    TWO_PI: TWO_PI,
    d: d,
    cos: _std.cos,
    sin: _std.sin
  }));
  var randOnUnitCircle = _typegpu.default["~unstable"].fn([], d.vec2f)(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
    "params": [],
    "body": [0, [[13, "angle", [1, [6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []], "*", "TWO_PI"]], [10, [6, [7, "d", "vec2f"], [[6, "cos", ["angle"]], [6, "sin", ["angle"]]]]]]],
    "externalNames": ["randomGeneratorSlot", "TWO_PI", "d", "cos", "sin"]
  }, {
    randomGeneratorSlot: randomGeneratorSlot,
    TWO_PI: TWO_PI,
    d: d,
    cos: _std.cos,
    sin: _std.sin
  }));
  var randOnUnitSphere = _typegpu.default["~unstable"].fn([], d.vec3f)(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
    "params": [],
    "body": [0, [[13, "z", [1, [1, [5, "2"], "*", [6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []]], "-", [5, "1"]]], [13, "oneMinusZSq", [6, "sqrt", [[1, [5, "1"], "-", [1, "z", "*", "z"]]]]], [13, "theta", [1, [1, "TWO_PI", "*", [6, [7, [7, "randomGeneratorSlot", "value"], "sample"], []]], "-", [7, "Math", "PI"]]], [13, "x", [1, [6, "sin", ["theta"]], "*", "oneMinusZSq"]], [13, "y", [1, [6, "cos", ["theta"]], "*", "oneMinusZSq"]], [10, [6, [7, "d", "vec3f"], ["x", "y", "z"]]]]],
    "externalNames": ["randomGeneratorSlot", "sqrt", "TWO_PI", "Math", "sin", "cos", "d"]
  }, {
    randomGeneratorSlot: randomGeneratorSlot,
    sqrt: _std.sqrt,
    TWO_PI: TWO_PI,
    Math: Math,
    sin: _std.sin,
    cos: _std.cos,
    d: d
  }));
  var randOnUnitHemisphere = _typegpu.default["~unstable"].fn([d.vec3f], d.vec3f)(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
    "params": [{
      "type": "i",
      "name": "normal"
    }],
    "body": [0, [[13, "value", [6, "randOnUnitSphere", []]], [13, "alignment", [6, "dot", ["normal", "value"]]], [10, [6, "mul", [[6, "sign", ["alignment"]], "value"]]]]],
    "externalNames": ["randOnUnitSphere", "dot", "mul", "sign"]
  }, {
    randOnUnitSphere: randOnUnitSphere,
    dot: _std.dot,
    mul: _std.mul,
    sign: _std.sign
  }));
  var smootherStep = _typegpu.default["~unstable"].fn([d.f32], d.f32)(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
    "params": [{
      "type": "i",
      "name": "x"
    }],
    "body": [0, [[10, [1, [1, [1, [5, "6"], "*", [6, "pow", ["x", [5, "5"]]]], "-", [1, [5, "15"], "*", [6, "pow", ["x", [5, "4"]]]]], "+", [1, [5, "10"], "*", [6, "pow", ["x", [5, "3"]]]]]]]],
    "externalNames": ["pow"]
  }, {
    pow: _std.pow
  }));
  var computeJunctionGradient$1 = _typegpu.default["~unstable"].fn([d.vec2i], d.vec2f)(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
    "params": [{
      "type": "i",
      "name": "pos"
    }],
    "body": [0, [[6, "randSeed2", [[6, "mul", [[5, "1e-3"], [6, [7, "d", "vec2f"], ["pos"]]]]]], [10, [6, "randOnUnitCircle", []]]]],
    "externalNames": ["randSeed2", "mul", "d", "randOnUnitCircle"]
  }, {
    randSeed2: randSeed2,
    mul: _std.mul,
    d: d,
    randOnUnitCircle: randOnUnitCircle
  }));
  var getJunctionGradientSlot$1 = _typegpu.default["~unstable"].slot(computeJunctionGradient$1);
  var dotProdGrid$1 = _typegpu.default["~unstable"].fn([d.vec2f, d.vec2i], d.f32)(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
    "params": [{
      "type": "i",
      "name": "pos"
    }, {
      "type": "i",
      "name": "junction"
    }],
    "body": [0, [[13, "relative", [6, "sub", ["pos", [6, [7, "d", "vec2f"], ["junction"]]]]], [13, "gridVector", [6, [7, "getJunctionGradientSlot", "value"], ["junction"]]], [10, [6, "dot", ["relative", "gridVector"]]]]],
    "externalNames": ["sub", "d", "getJunctionGradientSlot", "dot"]
  }, {
    sub: _std.sub,
    d: d,
    getJunctionGradientSlot: getJunctionGradientSlot$1,
    dot: _std.dot
  }));
  var sample$1 = _typegpu.default["~unstable"].fn([d.vec2f], d.f32)(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
    "params": [{
      "type": "i",
      "name": "pos"
    }],
    "body": [0, [[13, "topLeftJunction", [6, [7, "d", "vec2i"], [[6, "floor", ["pos"]]]]], [13, "topLeft", [6, "dotProdGrid", ["pos", "topLeftJunction"]]], [13, "topRight", [6, "dotProdGrid", ["pos", [6, "add", ["topLeftJunction", [6, [7, "d", "vec2i"], [[5, "1"], [5, "0"]]]]]]]], [13, "bottomLeft", [6, "dotProdGrid", ["pos", [6, "add", ["topLeftJunction", [6, [7, "d", "vec2i"], [[5, "0"], [5, "1"]]]]]]]], [13, "bottomRight", [6, "dotProdGrid", ["pos", [6, "add", ["topLeftJunction", [6, [7, "d", "vec2i"], [[5, "1"], [5, "1"]]]]]]]], [13, "partial", [6, "sub", ["pos", [6, "floor", ["pos"]]]]], [13, "top", [6, "mix", ["topLeft", "topRight", [6, "smootherStep", [[7, "partial", "x"]]]]]], [13, "bottom", [6, "mix", ["bottomLeft", "bottomRight", [6, "smootherStep", [[7, "partial", "x"]]]]]], [10, [6, "mix", ["top", "bottom", [6, "smootherStep", [[7, "partial", "y"]]]]]]]],
    "externalNames": ["d", "floor", "dotProdGrid", "add", "sub", "mix", "smootherStep"]
  }, {
    d: d,
    floor: _std.floor,
    dotProdGrid: dotProdGrid$1,
    add: _std.add,
    sub: _std.sub,
    mix: _std.mix,
    smootherStep: smootherStep
  }));
  var perlin2d = exports.perlin2d = {
    __proto__: null,
    computeJunctionGradient: computeJunctionGradient$1,
    getJunctionGradientSlot: getJunctionGradientSlot$1,
    sample: sample$1
  };
  var computeJunctionGradient = _typegpu.default["~unstable"].fn([d.vec3i], d.vec3f)(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
    "params": [{
      "type": "i",
      "name": "pos"
    }],
    "body": [0, [[6, "randSeed3", [[6, "mul", [[5, "1e-3"], [6, [7, "d", "vec3f"], ["pos"]]]]]], [10, [6, "randOnUnitSphere", []]]]],
    "externalNames": ["randSeed3", "mul", "d", "randOnUnitSphere"]
  }, {
    randSeed3: randSeed3,
    mul: _std.mul,
    d: d,
    randOnUnitSphere: randOnUnitSphere
  }));
  var getJunctionGradientSlot = _typegpu.default["~unstable"].slot(computeJunctionGradient);
  var dotProdGrid = _typegpu.default["~unstable"].fn([d.vec3f, d.vec3f], d.f32)(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
    "params": [{
      "type": "i",
      "name": "pos"
    }, {
      "type": "i",
      "name": "junction"
    }],
    "body": [0, [[13, "relative", [6, "sub", ["pos", "junction"]]], [13, "gridVector", [6, [7, "getJunctionGradientSlot", "value"], [[6, [7, "d", "vec3i"], ["junction"]]]]], [10, [6, "dot", ["relative", "gridVector"]]]]],
    "externalNames": ["sub", "getJunctionGradientSlot", "d", "dot"]
  }, {
    sub: _std.sub,
    getJunctionGradientSlot: getJunctionGradientSlot,
    d: d,
    dot: _std.dot
  }));
  var sample = _typegpu.default["~unstable"].fn([d.vec3f], d.f32)(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
    "params": [{
      "type": "i",
      "name": "pos"
    }],
    "body": [0, [[13, "minJunction", [6, "floor", ["pos"]]], [13, "xyz", [6, "dotProdGrid", ["pos", "minJunction"]]], [13, "xyZ", [6, "dotProdGrid", ["pos", [6, "add", ["minJunction", [6, [7, "d", "vec3f"], [[5, "0"], [5, "0"], [5, "1"]]]]]]]], [13, "xYz", [6, "dotProdGrid", ["pos", [6, "add", ["minJunction", [6, [7, "d", "vec3f"], [[5, "0"], [5, "1"], [5, "0"]]]]]]]], [13, "xYZ", [6, "dotProdGrid", ["pos", [6, "add", ["minJunction", [6, [7, "d", "vec3f"], [[5, "0"], [5, "1"], [5, "1"]]]]]]]], [13, "Xyz", [6, "dotProdGrid", ["pos", [6, "add", ["minJunction", [6, [7, "d", "vec3f"], [[5, "1"], [5, "0"], [5, "0"]]]]]]]], [13, "XyZ", [6, "dotProdGrid", ["pos", [6, "add", ["minJunction", [6, [7, "d", "vec3f"], [[5, "1"], [5, "0"], [5, "1"]]]]]]]], [13, "XYz", [6, "dotProdGrid", ["pos", [6, "add", ["minJunction", [6, [7, "d", "vec3f"], [[5, "1"], [5, "1"], [5, "0"]]]]]]]], [13, "XYZ", [6, "dotProdGrid", ["pos", [6, "add", ["minJunction", [6, [7, "d", "vec3f"], [[5, "1"], [5, "1"], [5, "1"]]]]]]]], [13, "partial", [6, "sub", ["pos", "minJunction"]]], [13, "xy", [6, "mix", ["xyz", "xyZ", [6, "smootherStep", [[7, "partial", "z"]]]]]], [13, "xY", [6, "mix", ["xYz", "xYZ", [6, "smootherStep", [[7, "partial", "z"]]]]]], [13, "Xy", [6, "mix", ["Xyz", "XyZ", [6, "smootherStep", [[7, "partial", "z"]]]]]], [13, "XY", [6, "mix", ["XYz", "XYZ", [6, "smootherStep", [[7, "partial", "z"]]]]]], [13, "x", [6, "mix", ["xy", "xY", [6, "smootherStep", [[7, "partial", "y"]]]]]], [13, "X", [6, "mix", ["Xy", "XY", [6, "smootherStep", [[7, "partial", "y"]]]]]], [10, [6, "mix", ["x", "X", [6, "smootherStep", [[7, "partial", "x"]]]]]]]],
    "externalNames": ["floor", "dotProdGrid", "add", "d", "sub", "mix", "smootherStep"]
  }, {
    floor: _std.floor,
    dotProdGrid: dotProdGrid,
    add: _std.add,
    d: d,
    sub: _std.sub,
    mix: _std.mix,
    smootherStep: smootherStep
  }));
  var MemorySchema$1 = function MemorySchema$1(n) {
    return d.arrayOf(d.vec3f, n);
  };
  var DefaultPerlin3DLayoutPrefix = "perlin3dCache__";
  function dynamicCacheConfig(options) {
    var _ref = options != null ? options : {},
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? DefaultPerlin3DLayoutPrefix : _ref$prefix;
    var valuesSlot = _typegpu.default["~unstable"].slot();
    var cleanValuesSlot = _typegpu.default["~unstable"].derived(function () {
      return {
        get size() {
          return valuesSlot.value[`${prefix}size`];
        },
        get memory() {
          return valuesSlot.value[`${prefix}memory`];
        }
      };
    });
    var getJunctionGradient = _typegpu.default["~unstable"].fn([d.vec3i], d.vec3f)(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
      "params": [{
        "type": "i",
        "name": "pos"
      }],
      "body": [0, [[13, "size", [6, [7, "d", "vec3i"], [[7, [7, "cleanValuesSlot", "value"], "size"]]]], [13, "x", [1, [1, [1, [7, "pos", "x"], "%", [7, "size", "x"]], "+", [7, "size", "x"]], "%", [7, "size", "x"]]], [13, "y", [1, [1, [1, [7, "pos", "y"], "%", [7, "size", "y"]], "+", [7, "size", "y"]], "%", [7, "size", "y"]]], [13, "z", [1, [1, [1, [7, "pos", "z"], "%", [7, "size", "z"]], "+", [7, "size", "z"]], "%", [7, "size", "z"]]], [10, [8, [7, [7, "cleanValuesSlot", "value"], "memory"], [1, [1, "x", "+", [1, "y", "*", [7, "size", "x"]]], "+", [1, [1, "z", "*", [7, "size", "x"]], "*", [7, "size", "y"]]]]]]],
      "externalNames": ["d", "cleanValuesSlot"]
    }, {
      d: d,
      cleanValuesSlot: cleanValuesSlot
    }));
    var computeLayout = _typegpu.default.bindGroupLayout({
      size: {
        uniform: d.vec3u
      },
      memory: {
        storage: MemorySchema$1,
        access: "mutable"
      }
    });
    var mainCompute = _typegpu.default["~unstable"].computeFn({
      workgroupSize: [1, 1, 1],
      in: {
        gid: d.builtin.globalInvocationId
      }
    })(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
      "params": [{
        "type": "i",
        "name": "input"
      }],
      "body": [0, [[13, "size", [7, [7, "computeLayout", "$"], "size"]], [13, "idx", [1, [1, [7, [7, "input", "gid"], "x"], "+", [1, [7, [7, "input", "gid"], "y"], "*", [7, "size", "x"]]], "+", [1, [1, [7, [7, "input", "gid"], "z"], "*", [7, "size", "x"]], "*", [7, "size", "y"]]]], [2, [8, [7, [7, "computeLayout", "$"], "memory"], "idx"], "=", [6, "computeJunctionGradient", [[6, [7, "d", "vec3i"], [[7, [7, "input", "gid"], "xyz"]]]]]]]],
      "externalNames": ["computeLayout", "computeJunctionGradient", "d"]
    }, {
      computeLayout: computeLayout,
      computeJunctionGradient: computeJunctionGradient,
      d: d
    }));
    var instance = function instance(root, initialSize) {
      var dirty = false;
      var size = initialSize;
      var sizeBuffer = root.createBuffer(d.vec3u, size).$usage("uniform");
      var computePipeline = root["~unstable"].withCompute(mainCompute).createPipeline();
      var createMemory = function createMemory() {
        var memory = root.createBuffer(d.arrayOf(d.vec3f, size.x * size.y * size.z)).$usage("storage");
        var computeBindGroup = root.createBindGroup(computeLayout, {
          size: sizeBuffer,
          memory: memory
        });
        computePipeline.with(computeLayout, computeBindGroup).dispatchWorkgroups(size.x, size.y, size.z);
        return memory;
      };
      var memoryBuffer = createMemory();
      return {
        get size() {
          return size;
        },
        get bindings() {
          if (dirty) {
            memoryBuffer.destroy();
            memoryBuffer = createMemory();
          }
          return (0, _defineProperty2.default)((0, _defineProperty2.default)({}, `${prefix}size`, sizeBuffer), `${prefix}memory`, memoryBuffer);
        },
        set size(value) {
          if ((0, _std.allEq)(size, value)) {
            return;
          }
          size = value;
          sizeBuffer.write(size);
          dirty = true;
        },
        destroy: function destroy() {
          sizeBuffer.destroy();
          memoryBuffer.destroy();
        }
      };
    };
    return {
      layout: (0, _defineProperty2.default)((0, _defineProperty2.default)({}, `${prefix}size`, {
        uniform: d.vec3u
      }), `${prefix}memory`, {
        storage: MemorySchema$1,
        access: "readonly"
      }),
      valuesSlot: valuesSlot,
      getJunctionGradient: getJunctionGradient,
      instance: instance
    };
  }
  var MemorySchema = function MemorySchema(n) {
    return d.arrayOf(d.vec3f, n);
  };
  function staticCache(options) {
    var root = options.root,
      size = options.size;
    var memoryBuffer = root.createBuffer(MemorySchema(size.x * size.y * size.z)).$usage("storage");
    var memoryReadonly = memoryBuffer.as("readonly");
    var memoryMutable = memoryBuffer.as("mutable");
    var mainCompute = _typegpu.default["~unstable"].computeFn({
      workgroupSize: [1, 1, 1],
      in: {
        gid: d.builtin.globalInvocationId
      }
    })(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
      "params": [{
        "type": "i",
        "name": "input"
      }],
      "body": [0, [[13, "idx", [1, [1, [7, [7, "input", "gid"], "x"], "+", [1, [7, [7, "input", "gid"], "y"], "*", [7, "size", "x"]]], "+", [1, [1, [7, [7, "input", "gid"], "z"], "*", [7, "size", "x"]], "*", [7, "size", "y"]]]], [2, [8, [7, "memoryMutable", "value"], "idx"], "=", [6, "computeJunctionGradient", [[6, [7, "d", "vec3i"], [[7, [7, "input", "gid"], "xyz"]]]]]]]],
      "externalNames": ["size", "memoryMutable", "computeJunctionGradient", "d"]
    }, {
      size: size,
      memoryMutable: memoryMutable,
      computeJunctionGradient: computeJunctionGradient,
      d: d
    }));
    var computePipeline = root["~unstable"].withCompute(mainCompute).createPipeline();
    computePipeline.dispatchWorkgroups(size.x, size.y, size.z);
    var getJunctionGradient = _typegpu.default["~unstable"].fn([d.vec3i], d.vec3f)(_typegpu.default.__assignAst(_typegpu.default.__removedJsImpl(), {
      "params": [{
        "type": "i",
        "name": "pos"
      }],
      "body": [0, [[13, "size_i", [6, [7, "d", "vec3i"], ["size"]]], [13, "x", [1, [1, [1, [7, "pos", "x"], "%", [7, "size_i", "x"]], "+", [7, "size_i", "x"]], "%", [7, "size_i", "x"]]], [13, "y", [1, [1, [1, [7, "pos", "y"], "%", [7, "size_i", "y"]], "+", [7, "size_i", "y"]], "%", [7, "size_i", "y"]]], [13, "z", [1, [1, [1, [7, "pos", "z"], "%", [7, "size_i", "z"]], "+", [7, "size_i", "z"]], "%", [7, "size_i", "z"]]], [10, [8, [7, "memoryReadonly", "value"], [1, [1, "x", "+", [1, "y", "*", [7, "size_i", "x"]]], "+", [1, [1, "z", "*", [7, "size_i", "x"]], "*", [7, "size_i", "y"]]]]]]],
      "externalNames": ["d", "size", "memoryReadonly"]
    }, {
      d: d,
      size: size,
      memoryReadonly: memoryReadonly
    }));
    return {
      getJunctionGradient: getJunctionGradient,
      get size() {
        return size;
      },
      destroy: function destroy() {
        memoryBuffer.destroy();
      }
    };
  }
  var index = exports.perlin3d = {
    __proto__: null,
    computeJunctionGradient: computeJunctionGradient,
    dynamicCacheConfig: dynamicCacheConfig,
    getJunctionGradientSlot: getJunctionGradientSlot,
    sample: sample,
    staticCache: staticCache
  };
  var randf = exports.randf = {
    seed: randSeed,
    seed2: randSeed2,
    seed3: randSeed3,
    seed4: randSeed4,
    sample: randFloat01,
    inUnitCircle: randInUnitCircle,
    inUnitCube: randInUnitCube,
    onHemisphere: randOnUnitHemisphere,
    onUnitSphere: randOnUnitSphere
  };
},36,[2,24,1,35,34],"node_modules/@typegpu/noise/index.mjs");

// ---------------------------------------------------------------------------

global.__UIModules.typegpu = {
  core: global.__r(1),
  std: global.__r(34),
  data: global.__r(35),
  noise: global.__r(36),
};

}

runOnUI(init)();
runOnBackground(init)();

}
