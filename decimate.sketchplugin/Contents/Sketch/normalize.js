var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/normalize.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/normalize.js":
/*!**************************!*\
  !*** ./src/normalize.js ***!
  \**************************/
/*! exports provided: iterate_corner, iterate_length, iterate_text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate_corner", function() { return iterate_corner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate_length", function() { return iterate_length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate_text", function() { return iterate_text; });
var radiusSeparator = sketchVersionNumber() < 420 ? '/' : ';';
function iterate_corner() {
  var sketch = __webpack_require__(/*! sketch */ "sketch");

  var document = sketch.getSelectedDocument();
  var selectedLayers = document.selectedLayers;
  var selectedCount = selectedLayers.length;
  var selectedArtboard = document.selectedLayers.layers[0];
  var radiusSeparator = sketchVersionNumber() < 420 ? '/' : ';';

  if (selectedArtboard == undefined) {
    sketch.UI.message("You haven't selected an artboard");
  } else {
    sketch.UI.message("Here we go.");
  }

  function corners(layer) {
    if (layer.layers) {
      layer.layers.forEach(corners);
    }

    if (layer.type == "Shape") {
      roundoffcorners(layer);
    }

    document.sketchObject.inspectorController().reload();
  }

  corners(selectedArtboard);
  sketch.UI.message("Done with Corners!");
}
function iterate_length() {
  var sketch = __webpack_require__(/*! sketch */ "sketch");

  var document = sketch.getSelectedDocument();
  var selectedLayers = document.selectedLayers;
  var selectedCount = selectedLayers.length;
  var selectedArtboard = document.selectedLayers.layers[0];
  var radiusSeparator = sketchVersionNumber() < 420 ? '/' : ';';

  if (selectedArtboard == undefined) {
    sketch.UI.message("You haven't selected an artboard");
  } else {
    sketch.UI.message("Here we go.");
  }

  function length(layer) {
    if (layer.layers) {
      layer.layers.forEach(length);
    }

    if (layer.type == "Shape") {
      // shapeassessment(layer)
      var l = layer.sketchObject.layers()[0];

      if (!l.isKindOfClass(MSRectangleShape)) {
        return;
      }

      var shape = layer.frame;
      var w = shape.width;
      var h = shape.height;

      if (w % 1 > 0.5) {
        w = Math.ceil(w);
      } else {
        w = Math.floor(w);
      }

      if (h % 1 > 0.5) {
        h = Math.ceil(h);
      } else {
        h = Math.floor(h);
      }

      shape.width = w;
      shape.height = h;
      document.sketchObject.inspectorController().reload();
    }
  }

  length(selectedArtboard);
  sketch.UI.message("Done with Card Lengths!");
}
function iterate_text() {
  var sketch = __webpack_require__(/*! sketch */ "sketch");

  var document = sketch.getSelectedDocument();
  var selectedLayers = document.selectedLayers;
  var selectedCount = selectedLayers.length;
  var selectedArtboard = document.selectedLayers.layers[0];
  var radiusSeparator = sketchVersionNumber() < 420 ? '/' : ';';

  if (selectedArtboard == undefined) {
    sketch.UI.message("You haven't selected an artboard");
  } else {
    sketch.UI.message("Here we go.");
  }

  function text(layer) {
    if (layer.layers) {
      layer.layers.forEach(text);
    }

    if (layer.type == "Text") {
      fonts(layer);
    }

    document.sketchObject.inspectorController().reload();
  }

  text(selectedArtboard);
  sketch.UI.message("Done with Fonts!");
}

function sketchVersionNumber() {
  var version = NSBundle.mainBundle().objectForInfoDictionaryKey("CFBundleShortVersionString");
  var versionNumber = version.stringByReplacingOccurrencesOfString_withString(".", "") + "";

  while (versionNumber.length != 3) {
    versionNumber += "0";
  }

  console.log(versionNumber);
  return parseInt(versionNumber);
}

function roundoffcorners(layer) {
  console.log(radiusSeparator);
  layer = layer.sketchObject.layers()[0];

  if (!layer.isKindOfClass(MSRectangleShape)) {
    return;
  }

  var radii = layer.cornerRadiusString().split(radiusSeparator);
  radii = radii.map(function (radius) {
    return Math.round(radius);
  });
  layer.setCornerRadiusFromComponents(radii.join(radiusSeparator));
}

function fonts(layer) {
  console.log("found");
  var fo = layer.sketchObject.font(); //font object    

  var tfs = layer.sketchObject.font().pointSize(); //fontsize   

  var new_fo = NSFont.fontWithDescriptor_size(fo.fontDescriptor(), Math.round(tfs));

  layer._object.setFont(new_fo);
}

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['iterate_corner'] = __skpm_run.bind(this, 'iterate_corner');
that['onRun'] = __skpm_run.bind(this, 'default');
that['iterate_length'] = __skpm_run.bind(this, 'iterate_length');
that['iterate_text'] = __skpm_run.bind(this, 'iterate_text')

//# sourceMappingURL=normalize.js.map