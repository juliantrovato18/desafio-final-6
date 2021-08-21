// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gcK6j":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "62877c4239c327d2";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4L6tv":[function(require,module,exports) {
var _text = require("./components/text");
var _button = require("./components/button");
var _piedra = require("./components/piedra");
var _tijera = require("./components/tijera");
var _papel = require("./components/papel");
var _score = require("./components/score");
var _win = require("./components/win");
var _lose = require("./components/lose");
var _contador = require("./components/contador");
var _router = require("./router");
var _state = require("./state");
(function() {
    const root = document.querySelector(".root");
    _router.initRouter(root);
    _state.state.init();
    _contador.contadorComp();
    _win.winComp();
    _lose.loseComp();
    _papel.papelComp();
    _tijera.tijeraComp();
    _piedra.piedraComp();
    _text.customText();
    _score.scoreComp();
    _button.button();
})();

},{"./components/text":"7QAPx","./components/button":"2LIbR","./components/piedra":"71A2J","./components/tijera":"aG5n2","./components/papel":"ixv5A","./components/score":"l7w21","./components/win":"7xRyg","./components/lose":"EQ9O0","./components/contador":"8t07h","./router":"4zXxa","./state":"4KTlf"}],"7QAPx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "customText", ()=>customText
);
function customText() {
    class TextComponent extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const variant = this.getAttribute("variant") || "body";
            const shadow = this.attachShadow({
                mode: 'open'
            });
            const div = document.createElement("div");
            const style = document.createElement("style");
            style.innerHTML = `\n            .title{\n                font-size: 80px;\n                font-weight: bold;\n                color: #009048;\n                padding:20px;\n\n            }\n            .body{\n                font-size: 40px;\n                \n            }\n        `;
            div.className = variant;
            div.textContent = this.textContent;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-text", TextComponent);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2LIbR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "button", ()=>button
);
function button() {
    class Button extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: 'open'
            });
            const button1 = document.createElement("button");
            const style = document.createElement("style");
            button1.className = "root";
            style.innerHTML = `\n                .root{\n                    width: 100%;\n                    height: 87px;\n                    background-color: #006CFC;\n                    border: solid 4px blue;\n                    border-radius: 4px;\n                    padding: 20px;\n                }\n            `;
            button1.textContent = this.textContent;
            shadow.appendChild(button1);
            shadow.appendChild(style);
        }
    }
    customElements.define("button-comp", Button);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"71A2J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "piedraComp", ()=>piedraComp
);
const piedra = require("url:../../img/piedracolor.png");
function piedraComp() {
    class Piedra extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const variant = this.getAttribute("variant") || "small";
            const shadow = this.attachShadow({
                mode: 'open'
            });
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.innerHTML = `\n                <img variant= "big" class="piedra" src="${piedra}"> \n            `;
            style.innerHTML = `\n                .big{\n                    width: 157px;\n                    height: 300px;\n                }\n                .small{\n                    width: 110px;\n                    height: 230px;\n                }\n                .piedra{\n                    width:100%;\n                }\n            `;
            const elegido = div.querySelector(".piedra");
            elegido.addEventListener("click", (r)=>{
                const evento = new CustomEvent("change", {
                    detail: {
                        myPlay: "piedra"
                    }
                });
                this.dispatchEvent(evento);
            });
            div.className = variant;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-piedra", Piedra);
}

},{"url:../../img/piedracolor.png":"9Gv0Y","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"9Gv0Y":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8st4b') + "piedracolor.0f20a739.png";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"aG5n2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tijeraComp", ()=>tijeraComp
);
const tijera = require("url:../../img/tijeracolor.png");
function tijeraComp() {
    class Tijera extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const variant = this.getAttribute("variant") || "small";
            const shadow = this.attachShadow({
                mode: 'open'
            });
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.innerHTML = `\n                <img variant="big" class="tijeras" src=${tijera}> \n            `;
            style.innerHTML = `\n            .big{\n                width: 157px;\n                height: 300px;\n            }\n            .small{\n                width: 110px;\n                height: 230px;\n            }\n            .tijeras{\n                width:100%;\n            }\n            `;
            const elegido = div.querySelector(".tijeras");
            elegido.addEventListener("click", (r)=>{
                const evento = new CustomEvent("change", {
                    detail: {
                        myPlay: "tijeras"
                    }
                });
                this.dispatchEvent(evento);
            });
            div.className = variant;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-tijera", Tijera);
}

},{"url:../../img/tijeracolor.png":"bDwK2","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bDwK2":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8st4b') + "tijeracolor.c4cd2c58.png";

},{"./helpers/bundle-url":"8YnfL"}],"ixv5A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "papelComp", ()=>papelComp
);
const papel = require("url:../../img/papel1.png");
function papelComp() {
    class Papel extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const variant = this.getAttribute("variant") || "small";
            const shadow = this.attachShadow({
                mode: 'open'
            });
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.innerHTML = `\n                <img variant="big" class="papel" src="${papel}"> \n            `;
            style.innerHTML = `\n            .big{\n                width: 157px;\n                height: 300px;\n            }\n            .small{\n                width: 110px;\n                height: 230px;\n            }\n            .papel{\n                width:100%;\n            }\n            `;
            const elegido = div.querySelector(".papel");
            elegido.addEventListener("click", (r)=>{
                const evento = new CustomEvent("change", {
                    detail: {
                        myPlay: "papel"
                    }
                });
                this.dispatchEvent(evento);
            });
            div.className = variant;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-papel", Papel);
}

},{"url:../../img/papel1.png":"ipM4X","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"ipM4X":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8st4b') + "papel1.5274095a.png";

},{"./helpers/bundle-url":"8YnfL"}],"l7w21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scoreComp", ()=>scoreComp
);
var _state = require("../../state");
function scoreComp() {
    class Score extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: 'open'
            });
            const div = document.createElement("div");
            const style = document.createElement("style");
            const score = _state.state.getScore();
            div.innerHTML = `\n                <div class="container">\n                <h3 class="title">Score</h3>\n                <custom-text class="text" variant="body">Vos: ${score.myScore}</custom-text>\n                <custom-text class="text" variant="body">Maquina: ${score.computerScore}</custom-text>\n                </div> \n            `;
            style.innerHTML = `\n                .container{\n                    display: flex;\n                    flex-direction: column;\n                    border: solid black 5px;\n                    border-radius: 2px;\n                    min-width: 250px;\n                    min-height: 210px;\n                }\n                .title{\n                    text-align: center;\n                    font-weight: 700;\n                    font-size: bold;\n\n                }\n                .text{\n                    text-align: right;\n                    padding: 10px;\n\n                }\n            `;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-score", Score);
}

},{"../../state":"4KTlf","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"4KTlf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: ""
        },
        history: [],
        listeners: []
    },
    init () {
        const localData = localStorage.getItem("saved-state");
        if (JSON.parse(localData) != null) this.data.history = JSON.parse(localData);
    },
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
        for (const cb of this.listeners)cb();
    },
    suscribe (callback) {
        this.listeners.push(callback);
    },
    setMove (move) {
        const currentState = state.getState();
        currentState.currentGame.myPlay = move;
        let random = Math.floor(Math.random() * 3);
        console.log(random, "random");
        if (random == 0) currentState.currentGame.computerPlay = "tijeras";
        if (random == 1) currentState.currentGame.computerPlay = "piedra";
        if (random == 2) currentState.currentGame.computerPlay = "papel";
        this.pushToHistory(currentState.currentGame.myPlay, currentState.currentGame.computerPlay);
    },
    getScore () {
        let myScore = 0;
        let computerScore = 0;
        let history = state.data.history;
        console.log(history);
        for (const s of history){
            if (this.whoWins(s.myPlay, s.computerPlay) == "ganaste") myScore++;
            if (this.whoWins(s.myPlay, s.computerPlay) == "perdiste") computerScore++;
        }
        return {
            myScore,
            computerScore
        };
    },
    pushToHistory (myPlay, computerPlay) {
        const currentState = state.getState();
        currentState.history.push({
            myPlay,
            computerPlay
        });
        localStorage.setItem("saved-state", JSON.stringify(currentState.history));
    },
    whoWins (myPlay, computerPlay) {
        if (myPlay == "piedra") {
            if (computerPlay == "papel") return "perdiste";
            if (computerPlay == "tijeras") return "ganaste";
            if (computerPlay == "piedra") return "empataste";
        }
        if (myPlay == "tijeras") {
            if (computerPlay == "papel") return "ganaste";
            if (computerPlay == "piedra") return "perdiste";
            if (computerPlay == "tijeras") return "empataste";
        }
        if (myPlay == "papel") {
            if (computerPlay == "tijeras") return "perdiste";
            if (computerPlay == "piedra") return "ganaste";
            if (computerPlay == "papel") return "empataste";
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"7xRyg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "winComp", ()=>winComp
);
function winComp() {
    class Win extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: 'open'
            });
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.innerHTML = `\n                <img class="img" src="./ganar.png"> \n            `;
            style.innerHTML = `\n                .img{\n                    width: 230px;\n                    height: 230px;\n                }\n            `;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-win", Win);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"EQ9O0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loseComp", ()=>loseComp
);
function loseComp() {
    class Lose extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: 'open'
            });
            const div = document.createElement("div");
            div.innerHTML = `\n                <img src="./perder.png"> \n            `;
            shadow.appendChild(div);
        }
    }
    customElements.define("custom-lose", Lose);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8t07h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "contadorComp", ()=>contadorComp
);
function contadorComp() {
    class ContadorComp extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            let counter = 3;
            const shadow = this.attachShadow({
                mode: 'open'
            });
            const div = document.createElement("div");
            const style = document.createElement("style");
            style.innerHTML = `\n            .counter{\n                min-width:  60px;\n                min-height: 80px;\n                \n                display: flex;\n                align-items: center;\n                justify-content: center;\n                font-size: 100px;\n            }\n        `;
            const intervalo = setInterval(()=>{
                div.innerHTML = `\n            <div class= "counter">${counter}</div>\n        `;
                if (counter <= 0) {
                    clearInterval(intervalo);
                    const contador = new CustomEvent("change", {
                        detail: {
                            numero: counter
                        }
                    });
                    this.dispatchEvent(contador);
                }
                counter--;
            }, 1000);
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("contador-comp", ContadorComp);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"4zXxa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
var _welcomePage = require("./pages/welcome-page");
var _instructions = require("./pages/instructions");
var _play = require("./pages/play");
var _resultsWin = require("./pages/results-win");
var _resultsLose = require("./pages/results-lose");
const routes = [
    {
        path: /\/welcome/,
        component: _welcomePage.initWelcomePage
    },
    {
        path: /\//,
        component: _welcomePage.initWelcomePage
    },
    {
        path: /\/instructions/,
        component: _instructions.initinstructionsPage
    },
    {
        path: /\/play/,
        component: _play.initiPlayPage
    },
    {
        path: /\/results/,
        component: _resultsWin.initPageResults
    },
    {
        path: /\/resultslose/,
        component: _resultsLose.initPageResultsLose
    }, 
];
function initRouter(container) {
    function goTo(path) {
        history.pushState({
        }, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        console.log("el handle recibio una nueva ruta", route);
        for (const r of routes)if (r.path.test(route)) {
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    handleRoute(location.pathname.replace("/dwf-m5-parcel-server/", "/welcome"));
    if (location.pathname == "/dwf-m5-parcel-server/") goTo("/welcome");
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"./pages/welcome-page":"jx3uZ","./pages/instructions":"apAEX","./pages/play":"gU8pT","./pages/results-win":"lbCWU","./pages/results-lose":"joq4d","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"jx3uZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcomePage", ()=>initWelcomePage
);
const imgFondo = require("url:../../img/fondo.png");
function initWelcomePage(params) {
    const div = document.createElement("div");
    div.innerHTML = `\n    <section class= "section">\n    <div class="container-title">\n    <custom-text  variant="title">Piedra, Papel o Tijera</custom-text>\n    </div>\n    <div class="container-button">\n    <button-comp class="button">Comenzar</button-comp>\n    </div>\n    <div class = "contenedor-ppt">\n    <custom-tijera variant="small" class="elementos"></custom-tijera>\n    <custom-piedra variant="small" class="elementos" ></custom-piedra>\n    <custom-papel variant = "small" class="elementos" ></custom-papel>\n    </div>\n    </section>\n    `;
    const style = document.createElement("style");
    style.innerHTML = `\n             * {\n            box-sizing: border-box;\n         }\n         body {\n          margin: 0;\n         }\n  \n         .contenedor-ppt {\n         display: flex;\n         flex-direction: row;\n         margin: 0px;\n        }\n        @media (min-width: 700px){\n           .contenedor-ppt{\n              display:flex;\n              flex-direction: row;\n              justify-content: flex-end;\n           }\n        }\n  \n        .elementos {\n         padding: 10px;\n         position: relative;\n         top: 40px;\n         }\n            .container-title {\n         margin: 30px 20px;\n             }\n        .container-button {\n         min-width: 320px;\n         padding: 10px;\n            align-items: center;\n            justify-content: center;\n         }\n         .section {\n            background-image:url(${imgFondo});\n            display: flex;\n            height: 100vh;\n         flex-direction: column;\n            justify-content: center;\n        align-items: center;\n         }\n         @media (min-width: 700px){\n            .section{\n               background-image:url(${imgFondo});\n               display:flex;\n               height: 100vh;\n               flex-direction:column;\n               justify-content:space-around;\n               align-items:center;\n\n            }\n         }\n        .container {\n         display: flex;\n         flex-direction: row;\n            padding: 20px;\n         }\n  \n    `;
    div.appendChild(style);
    div.querySelector(".button").addEventListener("click", ()=>{
        params.goTo("/instructions");
    });
    return div;
}

},{"url:../../img/fondo.png":"6C61R","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6C61R":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8st4b') + "fondo.2b65ca64.png";

},{"./helpers/bundle-url":"8YnfL"}],"apAEX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initinstructionsPage", ()=>initinstructionsPage
);
const imgFondo = require("url:../../img/fondo.png");
function initinstructionsPage(params) {
    const div = document.createElement("div");
    div.innerHTML = `\n        <section class = "section">\n        <div class="container-title">\n        <custom-text variant="body">Presioná jugar\n        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</custom-text>\n        </div>\n        <div class="container-button">\n        <button-comp class="button">¡Jugar!</button-comp>\n        </div>\n        <div class="contenedor-ppt">\n        <custom-tijera class="elementos"></custom-tijera>\n        <custom-piedra class="elementos"></custom-piedra>\n        <custom-papel class="elementos"></custom-papel>\n        </div>\n        </section>\n    `;
    const style = document.createElement("style");
    style.innerHTML = `\n        * {\n            box-sizing: border-box;\n        }\n        body {\n            margin: 0;\n         }\n  \n        .contenedor-ppt {\n            display: flex;\n            flex-direction: row;\n            margin: 0px;\n         }\n         @media (min-width:700px){\n             .contenedor-ppt{\n                 display: flex;\n                 flex-direction: row;\n                 align-items: flex-end;\n\n             }\n         }\n  \n        .elementos {\n            padding: 10px;\n            position: relative;\n            top: 90px;\n        }\n        .container-title {\n            margin: 30px 20px;\n        }\n        .container-button {\n            min-width: 320px;\n            padding: 10px;\n            align-items: center;\n            justify-content: center;\n        }\n        .section {\n            background-image:url(${imgFondo});\n            display: flex;\n            min-height: 667px;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n        }\n        @media (min-width:700px){\n            .section{\n                background-image:url(${imgFondo});\n                height: 100vh;\n                display:flex;\n                flex-direction: column;\n                justify-content: space-around;\n\n            }\n        }\n  \n    \n    `;
    div.appendChild(style);
    div.querySelector(".button").addEventListener("click", ()=>{
        params.goTo("/play");
    });
    return div;
}

},{"url:../../img/fondo.png":"6C61R","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"gU8pT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initiPlayPage", ()=>initiPlayPage
);
var _state = require("../../state");
const fondo = require("url:../../img/fondo.png");
function initiPlayPage(params) {
    const div = document.createElement("div");
    div.innerHTML = `\n        <section class="section">\n        <div class="container-contador">\n        <contador-comp class ="contador"></contador-comp>\n        </div>\n        <div class="container">\n        <custom-tijera id = "pointer" class="elementos"></custom-tijera>\n        <custom-piedra id = "pointer" class="elementos"></custom-piedra>\n        <custom-papel id = "pointer" class="elementos"></custom-papel>\n        </div>\n        </section>\n        \n    `;
    const style = document.createElement("style");
    style.innerHTML = `\n         * {\n         box-sizing: border-box;\n        }\n         body {\n         margin: 0;\n         }\n        .section {\n            background-image:url(${fondo});\n            display: flex;\n         flex-direction: column;\n         justify-content: space-around;\n          min-width: 375px;\n         min-height: 667px;\n         \n        }\n        @media(min-width:700px){\n            .section{\n                background-image:url(${fondo});\n                height: 100vh;\n            }\n        }\n\n        .container-contador{\n            min-height: 200px;\n        }\n  \n        .container {\n         min-width: 370px;\n         min-height: 200px;\n         justify-content: space-around;\n          display: flex;\n          flex-direction: row;\n          align-items: flex end;\n         }\n         .elementos {\n             \n             position:relative;\n             top: 150px;\n\n         }\n    \n    `;
    console.log(_state.state.getScore);
    const pointEl = div.querySelectorAll("#pointer");
    let contador = div.querySelector(".contador");
    let boolean = false;
    pointEl.forEach((element)=>{
        element.addEventListener("change", (e)=>{
            boolean = true;
            const evento = new CustomEvent("change", {
                detail: {
                    myPlay: e.detail.myPlay
                }
            });
            _state.state.setMove(e.detail.myPlay);
            params.goTo("/results");
        });
    });
    contador.addEventListener("change", (e)=>{
        console.log("entro al if", e);
        if (boolean == false) params.goTo("/instructions");
    });
    div.appendChild(style);
    return div;
}

},{"../../state":"4KTlf","url:../../img/fondo.png":"6C61R","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"lbCWU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPageResults", ()=>initPageResults
);
var _state = require("../../state");
const ganaste = require("url:../../img/ganaste.png");
const perdiste = require("url:../../img/perdiste.png");
const empate = require("url:../../img/empatepng.png");
const fondo = require("url:../../img/fondo.png");
function initPageResults(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    const lastState = _state.state.getState();
    const myState = lastState.currentGame.myPlay;
    const computerState = lastState.currentGame.computerPlay;
    const myPlay = document.createElement("div");
    const computerPlay = document.createElement("div");
    if (myState == "piedra") myPlay.innerHTML = `\n         <custom-piedra variant= "big" class= "my-play"></custom-piedra>\n         `;
    if (myState == "papel") myPlay.innerHTML = `\n         <custom-papel variant="big" class= "my-play"></custom-papel>\n         `;
    if (myState == "tijeras") myPlay.innerHTML = `\n        <custom-tijera variant="big" class="my-play"></custom-tijera>\n        `;
    if (computerState == "piedra") computerPlay.innerHTML = `\n        <custom-piedra variant= "big" class= "computer-play"></custom-piedra>\n        `;
    if (computerState == "papel") computerPlay.innerHTML = `\n        <custom-papel variant= "big" class= "computer-play"></custom-papel>\n        `;
    if (computerState == "tijeras") computerPlay.innerHTML = `\n        <custom-tijera variant= "big" class= "computer-play"></custom-tijera>\n        `;
    div.innerHTML = `\n        <div class = "container-all">\n        <div class="my-play"></div>\n        <div class="computer-play"></div>\n        <section class= "section">\n        <img class="imagen" src = "${ganaste}"></img>\n        <custom-score></custom-score>\n        <div class= "container-button">\n        <button-comp class="button">Volver A Jugar</button-comp>\n        </div>\n        </section>\n        </div>\n    `;
    style.innerHTML = `\n        *{\n            box-sizing:border-box;\n        }\n        body{\n            margin:0;\n        }\n        \n        .section{\n            background-image:url(${fondo});\n            display: none;\n            flex-direction: column;\n            justify-content: space-evenly;\n            align-items: center;\n            min-width:375px;\n            min-height: 667px;\n            position: absolute;\n            top: 0px;\n            bottom: 0px;\n            right: 0px;\n            left: 0px;\n        }\n        .section-2{\n            background-color: #894949E5;\n            display:flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            min-width:375px;\n            min-height: 667px;\n            position: absolute;\n            top: 0px;\n            bottom: 0px;\n            right: 0px;\n            left: 0px;\n            display:none;\n        }\n        \n        .container-button{\n            padding: 20px;\n            min-width: 300px;\n        }\n        .my-play{\n            min-width: 157px;\n            min-height: 300px;\n            \n        }\n        .container-all{\n            background-image:url(${fondo});\n            display:flex;\n            flex-direction: column-reverse;\n            min-height:100vh;\n            justify-content: space-between;\n            align-items: center;\n        }\n        .computer-play{\n            transform: rotate(180deg);\n        }\n        .button{\n            width:100%;\n        }\n        \n    `;
    const intevarlo = setInterval(()=>1000
    );
    const section = div.querySelector(".section");
    const imagen = div.querySelector(".imagen");
    const jugadas = div.querySelector("container-all");
    const sectionLose = div.querySelector(".section-2");
    console.log(sectionLose);
    setTimeout(()=>{
        clearInterval(intevarlo);
        if (_state.state.whoWins(_state.state.getState().currentGame.myPlay, _state.state.getState().currentGame.computerPlay) == "ganaste") {
            section.style.display = "flex";
            section.style.background = "#888949E5";
            //jugadas.style.display= "none";
            imagen.src = ganaste;
        }
        if (_state.state.whoWins(_state.state.getState().currentGame.myPlay, _state.state.getState().currentGame.computerPlay) == "perdiste") {
            section.style.display = "flex";
            section.style.background = "rgba(137, 73, 73, 0.9)";
            imagen.src = perdiste;
        }
        if (_state.state.whoWins(_state.state.getState().currentGame.myPlay, _state.state.getState().currentGame.computerPlay) == "empataste") {
            section.style.display = "flex";
            section.style.background = "rgba(255, 233, 0, 0.7)";
            imagen.src = empate;
        }
    }, 1000);
    div.querySelector(".computer-play").appendChild(computerPlay);
    div.querySelector(".my-play").appendChild(myPlay);
    div.appendChild(style);
    div.querySelector(".button").addEventListener("click", ()=>{
        params.goTo("/instructions");
    });
    return div;
}

},{"../../state":"4KTlf","url:../../img/ganaste.png":"hE5QB","url:../../img/perdiste.png":"icEcM","url:../../img/empatepng.png":"frlqW","url:../../img/fondo.png":"6C61R","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"hE5QB":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8st4b') + "ganaste.af264498.png";

},{"./helpers/bundle-url":"8YnfL"}],"icEcM":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8st4b') + "perdiste.cd56bd19.png";

},{"./helpers/bundle-url":"8YnfL"}],"frlqW":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8st4b') + "empatepng.30ff8aab.png";

},{"./helpers/bundle-url":"8YnfL"}],"joq4d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPageResultsLose", ()=>initPageResultsLose
);
function initPageResultsLose(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.innerHTML = `\n        <section class= "section">\n        <custom-lose></custom-lose>\n        <custom-score></custom-score>\n        <div class= "container-button">\n        <button-comp class="button">Volver A Jugar</button-comp>\n        </div>\n        </section>\n    `;
    style.innerHTML = `\n        *{\n            box-sizing:border-box;\n        }\n        body{\n            margin:0;\n        }\n        .section{\n            background-color: #894949E5;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            min-width:375px;\n            min-height: 667px;\n        }\n        .container-button{\n            padding: 20px;\n            min-width: 300px;\n        }\n        \n    `;
    div.appendChild(style);
    div.querySelector(".button").addEventListener("click", ()=>{
        params.goTo("/instructions");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["gcK6j","4L6tv"], "4L6tv", "parcelRequire6f1e")

//# sourceMappingURL=index.39c327d2.js.map
