/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Covered_By_Your_Grace/CoveredByYourGrace-Regular.ttf */ "./src/Covered_By_Your_Grace/CoveredByYourGrace-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/add_FILL1_wght400_GRAD0_opsz24.svg */ "./src/icons/add_FILL1_wght400_GRAD0_opsz24.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: \"grace-covered\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n:root {\n    --light-gray: #E2E8F0;\n    --darker-gray: #334155;\n    --gray: #94A3B8;\n    --lighter-gray: #F1F5F9;\n    --mustard: #CA8A04;\n    --blue: #1E293B;\n    --red: #FCA5A5;\n    --light-red: #FEE2E2;\n    --green: #86EFAC;\n    --yellow: #FDE047;\n\n    --fixed-ui-elements: #64748B;\n    --fixed-ui-color: white;\n    --bg-color: #CBD5E1;\n    --header-color: var(--blue);\n    --shadow: black;\n\n    --header-height: max(10vh, 60px);\n    --footer-height: clamp(40px, 8vh, 60px);\n    --add-btn-height: clamp(40px, 8vh, 55px);\n    --add-btn-margin: 1rem;\n    \n    --entry-title-size: 1.3rem;\n\n    --bradius: 1rem;\n    --bweight: 3px;\n}\n\n* {\n    box-sizing: border-box;\n\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none;\n}\n\nbody {\n    position: relative;\n    background-color: white;\n    justify-content: stretch;\n    font-family: \"grace-covered\";\n    margin: 0;\n    min-height: 100vh;\n    background-color: var(--bg-color);\n}\n\nheader {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    height: var(--header-height);\n    width: 100vw;\n    box-shadow: 2px 2px 3px black;\n    padding-left: 1rem;\n    background-color: var(--fixed-ui-elements);\n    color: var(--fixed-ui-color);\n    z-index: 2;\n}\n\ndiv#app-body {\n    padding: 1rem;\n    padding-bottom: calc(var(--footer-height) + var(--add-btn-height) + 2*var(--add-btn-margin));\n    height: 100%;\n}\n\ndiv#app-body .header {\n    font-size: 3rem;\n    margin: 0;\n    margin-top: var(--header-height);\n    margin-bottom: 1rem;\n    color: var(--header-color);\n}\n\ndiv#container {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    /* border: var(--bweight) solid var(--light-gray); */\n    border-radius: var(--bradius);\n}\n\ndiv#container ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\ndiv#container .entry:first-child {\n    --actual-bradius: calc(var(--bradius) - var(--bweight));\n    border-top-left-radius: var(--actual-bradius);\n    border-top-right-radius: var(--actual-bradius);\n}\n\ndiv#container .entry:last-child {\n    --actual-bradius: calc(var(--bradius) - var(--bweight));\n    border-bottom-left-radius: var(--actual-bradius);\n    border-bottom-right-radius: var(--actual-bradius);\n}\n\ndiv#container .entry {\n    position: relative;\n    padding: 0.5rem 1rem;\n    margin: 0.5rem, 0;\n}\n\ndiv#container .entry .due-container {\n    display: flex;\n    align-items: center;\n}\n\ndiv#container .entry p.due {\n    margin-bottom: 0;\n}\n\ndiv#container .entry img {\n    width: 24px;\n    height: 24px;\n    margin-right: 0.5rem;\n}\n\ndiv#container .entry p.tag {\n    color: var(--gray);\n}\n\ndiv#container .entry button,\ndiv#container .entry .task-details input, \ndiv#container .entry .task-details select {\n    font-family: inherit;\n    font-size: 0.8rem;\n    border: none;\n    text-align: center;\n    padding: 0.5rem;\n    background-color: var(--bg-color);\n    border-radius: 10px;\n    min-width: 4.5rem;\n    font-family: inherit;\n    color: var(--darker-gray)\n}\n\ndiv#container .entry .project-btns {\n    display: flex;\n    justify-content: flex-end;\n}\n\ndiv#container .entry button.low {\n    background-color: var(--green);\n    border: 1px solid var(--green);\n}\n\ndiv#container .entry button.medium {\n    background-color: var(--yellow);\n    border: 1px solid var(--yellow);\n}\n\ndiv#container .entry button.high {\n    background-color: var(--red);\n    border: 1px solid var(--red);\n}\n\ndiv#container .entry button:active {\n    box-shadow: inset 1px 1px 1px var(--darker-gray),\n        inset -1px 1px 1px var(--darker-gray);\n}\n\ndiv#container .entry button.done {\n    background-color: var(--green);\n}\n\ndiv#container .entry:nth-child(odd),\ndiv#container .entry:nth-child(odd) input{\n    background-color: var(--lighter-gray);\n}\n\ndiv#container .entry:nth-child(even),\ndiv#container .entry:nth-child(even) input {\n    background-color: white;\n}\n\ndiv#container p,\ndiv#container input[type=\"text\"] {\n    font-size: 1.1rem;\n    margin-bottom: 1.1rem;\n    color: var(--darker-gray);\n    width: 100%\n}\n\ndiv#container input[type=\"text\"] {\n    padding: 0.5rem;\n}\n\ndiv#container p.entry-title,\ndiv#container input.entry-title {\n    font-size: var(--entry-title-size);\n    margin: 1.3rem 0;\n    font-weight: bold;\n    color: navy;\n}\n\ndiv#container input.entry-title:invalid {\n    background-color: var(--light-red);\n    border-radius: 5px;\n}\n\ndiv#container .entry .task-details input:invalid {\n    background-color: var(--light-red);\n}\n\ndiv#container #add-task:valid button,\ndiv#container #add-project:valid button {\n    background-color: var(--green);\n}\n\ndiv#container .entry .task-details {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\ndiv#container .entry .task-details p,\ndiv#container .entry .task-details input {\n    font-size: 0.8em;\n    text-align: center;\n    margin: 0;\n}\n\ndiv#container .entry p.empty-task {\n    color: var(--gray);\n    text-align: center;\n}\n\ndiv#container .entry .details {\n    display: flex;\n}\n\ndiv#container .entry .delete-btn {\n    position: absolute;\n    right: 1rem;\n    padding-top: 0.2rem;\n    padding-bottom: 0.2rem;\n    border-radius: 5px;\n    background-color: var(--light-gray);\n    top: var(--entry-title-size);\n    color: var(--gray);\n    z-index: 1;\n}\n\ninput, select {\n    outline: none;\n    border: none;\n}\n\ninput::placeholder {\n    color: var(--gray);\n}\n\nbutton {\n    /* For compatibilit with Safari */\n    -webkit-apperance: none;\n    margin: 0;\n    padding: 0;\n\n    background-color: white;\n    font-family: \"grace-covered\";\n    outline: none;\n    border: none;\n    text-align: center;\n    font-size: 1.5rem;\n}\n\ndiv#add-container {\n    position: fixed;\n    left: 50%;\n    bottom: var(--footer-height);\n    display: flex;\n    justify-content: center;\n    height: var(--add-btn-height);\n    margin: var(--add-btn-margin) 0;\n    transform: translate(-50%, 0) scale(1);\n}\n\ndiv#add-container button#add {\n    display: grid;\n    place-items: center;\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-color: var(--fixed-ui-elements);\n    width: var(--add-btn-height);\n    height: var(--add-btn-height);\n    border-radius: 50%;\n    border: 1px solid var(--fixed-ui-elements);\n    box-shadow: 2px 2px 2px var(--bg-color),\n        2px -2px 2px var(--bg-color),\n        -2px 2px 2px var(--bg-color),\n        -2px -2px 2px var(--bg-color);\n}\n\ndiv#add-container button#add > img {\n    width: calc(0.7*var(--add-btn-height));\n    height: calc(0.7*var(--add-btn-height));\n}\n\ndiv#add-container button#add:active {\n    box-shadow: inset 1px 1px 1px black,\n        inset -1px 1px 1px black;\n}\n\nfooter {\n    position: fixed;\n    display: flex;\n    bottom: 0;\n    left: 0;\n    height: var(--footer-height);\n    width: 100vw;\n}\n\nfooter > button {\n    flex: 1;\n    box-shadow: inset 2px 2px 3px black;\n    background-color: var(--fixed-ui-elements);\n    color: var(--fixed-ui-color);\n}\n\nfooter > button.active {\n    font-size: 1.8rem;\n    box-shadow: 2px -2px 3px var(--shadow),\n        -2px -2px 3px var(--shadow);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: \"grace-covered\";\n    src: url(\"./Covered_By_Your_Grace/CoveredByYourGrace-Regular.ttf\");\n}\n\n:root {\n    --light-gray: #E2E8F0;\n    --darker-gray: #334155;\n    --gray: #94A3B8;\n    --lighter-gray: #F1F5F9;\n    --mustard: #CA8A04;\n    --blue: #1E293B;\n    --red: #FCA5A5;\n    --light-red: #FEE2E2;\n    --green: #86EFAC;\n    --yellow: #FDE047;\n\n    --fixed-ui-elements: #64748B;\n    --fixed-ui-color: white;\n    --bg-color: #CBD5E1;\n    --header-color: var(--blue);\n    --shadow: black;\n\n    --header-height: max(10vh, 60px);\n    --footer-height: clamp(40px, 8vh, 60px);\n    --add-btn-height: clamp(40px, 8vh, 55px);\n    --add-btn-margin: 1rem;\n    \n    --entry-title-size: 1.3rem;\n\n    --bradius: 1rem;\n    --bweight: 3px;\n}\n\n* {\n    box-sizing: border-box;\n\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none;\n}\n\nbody {\n    position: relative;\n    background-color: white;\n    justify-content: stretch;\n    font-family: \"grace-covered\";\n    margin: 0;\n    min-height: 100vh;\n    background-color: var(--bg-color);\n}\n\nheader {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    height: var(--header-height);\n    width: 100vw;\n    box-shadow: 2px 2px 3px black;\n    padding-left: 1rem;\n    background-color: var(--fixed-ui-elements);\n    color: var(--fixed-ui-color);\n    z-index: 2;\n}\n\ndiv#app-body {\n    padding: 1rem;\n    padding-bottom: calc(var(--footer-height) + var(--add-btn-height) + 2*var(--add-btn-margin));\n    height: 100%;\n}\n\ndiv#app-body .header {\n    font-size: 3rem;\n    margin: 0;\n    margin-top: var(--header-height);\n    margin-bottom: 1rem;\n    color: var(--header-color);\n}\n\ndiv#container {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    /* border: var(--bweight) solid var(--light-gray); */\n    border-radius: var(--bradius);\n}\n\ndiv#container ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\ndiv#container .entry:first-child {\n    --actual-bradius: calc(var(--bradius) - var(--bweight));\n    border-top-left-radius: var(--actual-bradius);\n    border-top-right-radius: var(--actual-bradius);\n}\n\ndiv#container .entry:last-child {\n    --actual-bradius: calc(var(--bradius) - var(--bweight));\n    border-bottom-left-radius: var(--actual-bradius);\n    border-bottom-right-radius: var(--actual-bradius);\n}\n\ndiv#container .entry {\n    position: relative;\n    padding: 0.5rem 1rem;\n    margin: 0.5rem, 0;\n}\n\ndiv#container .entry .due-container {\n    display: flex;\n    align-items: center;\n}\n\ndiv#container .entry p.due {\n    margin-bottom: 0;\n}\n\ndiv#container .entry img {\n    width: 24px;\n    height: 24px;\n    margin-right: 0.5rem;\n}\n\ndiv#container .entry p.tag {\n    color: var(--gray);\n}\n\ndiv#container .entry button,\ndiv#container .entry .task-details input, \ndiv#container .entry .task-details select {\n    font-family: inherit;\n    font-size: 0.8rem;\n    border: none;\n    text-align: center;\n    padding: 0.5rem;\n    background-color: var(--bg-color);\n    border-radius: 10px;\n    min-width: 4.5rem;\n    font-family: inherit;\n    color: var(--darker-gray)\n}\n\ndiv#container .entry .project-btns {\n    display: flex;\n    justify-content: flex-end;\n}\n\ndiv#container .entry button.low {\n    background-color: var(--green);\n    border: 1px solid var(--green);\n}\n\ndiv#container .entry button.medium {\n    background-color: var(--yellow);\n    border: 1px solid var(--yellow);\n}\n\ndiv#container .entry button.high {\n    background-color: var(--red);\n    border: 1px solid var(--red);\n}\n\ndiv#container .entry button:active {\n    box-shadow: inset 1px 1px 1px var(--darker-gray),\n        inset -1px 1px 1px var(--darker-gray);\n}\n\ndiv#container .entry button.done {\n    background-color: var(--green);\n}\n\ndiv#container .entry:nth-child(odd),\ndiv#container .entry:nth-child(odd) input{\n    background-color: var(--lighter-gray);\n}\n\ndiv#container .entry:nth-child(even),\ndiv#container .entry:nth-child(even) input {\n    background-color: white;\n}\n\ndiv#container p,\ndiv#container input[type=\"text\"] {\n    font-size: 1.1rem;\n    margin-bottom: 1.1rem;\n    color: var(--darker-gray);\n    width: 100%\n}\n\ndiv#container input[type=\"text\"] {\n    padding: 0.5rem;\n}\n\ndiv#container p.entry-title,\ndiv#container input.entry-title {\n    font-size: var(--entry-title-size);\n    margin: 1.3rem 0;\n    font-weight: bold;\n    color: navy;\n}\n\ndiv#container input.entry-title:invalid {\n    background-color: var(--light-red);\n    border-radius: 5px;\n}\n\ndiv#container .entry .task-details input:invalid {\n    background-color: var(--light-red);\n}\n\ndiv#container #add-task:valid button,\ndiv#container #add-project:valid button {\n    background-color: var(--green);\n}\n\ndiv#container .entry .task-details {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\ndiv#container .entry .task-details p,\ndiv#container .entry .task-details input {\n    font-size: 0.8em;\n    text-align: center;\n    margin: 0;\n}\n\ndiv#container .entry p.empty-task {\n    color: var(--gray);\n    text-align: center;\n}\n\ndiv#container .entry .details {\n    display: flex;\n}\n\ndiv#container .entry .delete-btn {\n    position: absolute;\n    right: 1rem;\n    padding-top: 0.2rem;\n    padding-bottom: 0.2rem;\n    border-radius: 5px;\n    background-color: var(--light-gray);\n    top: var(--entry-title-size);\n    color: var(--gray);\n    z-index: 1;\n}\n\ninput, select {\n    outline: none;\n    border: none;\n}\n\ninput::placeholder {\n    color: var(--gray);\n}\n\nbutton {\n    /* For compatibilit with Safari */\n    -webkit-apperance: none;\n    margin: 0;\n    padding: 0;\n\n    background-color: white;\n    font-family: \"grace-covered\";\n    outline: none;\n    border: none;\n    text-align: center;\n    font-size: 1.5rem;\n}\n\ndiv#add-container {\n    position: fixed;\n    left: 50%;\n    bottom: var(--footer-height);\n    display: flex;\n    justify-content: center;\n    height: var(--add-btn-height);\n    margin: var(--add-btn-margin) 0;\n    transform: translate(-50%, 0) scale(1);\n}\n\ndiv#add-container button#add {\n    display: grid;\n    place-items: center;\n    content: url(\"./icons/add_FILL1_wght400_GRAD0_opsz24.svg\");\n    background-color: var(--fixed-ui-elements);\n    width: var(--add-btn-height);\n    height: var(--add-btn-height);\n    border-radius: 50%;\n    border: 1px solid var(--fixed-ui-elements);\n    box-shadow: 2px 2px 2px var(--bg-color),\n        2px -2px 2px var(--bg-color),\n        -2px 2px 2px var(--bg-color),\n        -2px -2px 2px var(--bg-color);\n}\n\ndiv#add-container button#add > img {\n    width: calc(0.7*var(--add-btn-height));\n    height: calc(0.7*var(--add-btn-height));\n}\n\ndiv#add-container button#add:active {\n    box-shadow: inset 1px 1px 1px black,\n        inset -1px 1px 1px black;\n}\n\nfooter {\n    position: fixed;\n    display: flex;\n    bottom: 0;\n    left: 0;\n    height: var(--footer-height);\n    width: 100vw;\n}\n\nfooter > button {\n    flex: 1;\n    box-shadow: inset 2px 2px 3px black;\n    background-color: var(--fixed-ui-elements);\n    color: var(--fixed-ui-color);\n}\n\nfooter > button.active {\n    font-size: 1.8rem;\n    box-shadow: 2px -2px 3px var(--shadow),\n        -2px -2px 3px var(--shadow);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Covered_By_Your_Grace/CoveredByYourGrace-Regular.ttf":
/*!******************************************************************!*\
  !*** ./src/Covered_By_Your_Grace/CoveredByYourGrace-Regular.ttf ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b6d6931a0ea2fa10236.ttf";

/***/ }),

/***/ "./src/icons/add_FILL1_wght400_GRAD0_opsz24.svg":
/*!******************************************************!*\
  !*** ./src/icons/add_FILL1_wght400_GRAD0_opsz24.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aba5a3d27cb160d62d64.svg";

/***/ }),

/***/ "./src/icons/calendar_month_FILL1_wght400_GRAD0_opsz24.svg":
/*!*****************************************************************!*\
  !*** ./src/icons/calendar_month_FILL1_wght400_GRAD0_opsz24.svg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "292c0fa0799cd4b1f0ac.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _icons_add_FILL1_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/add_FILL1_wght400_GRAD0_opsz24.svg */ "./src/icons/add_FILL1_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _icons_calendar_month_FILL1_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/calendar_month_FILL1_wght400_GRAD0_opsz24.svg */ "./src/icons/calendar_month_FILL1_wght400_GRAD0_opsz24.svg");




const Task = function(title, description, dueDate, priority) {
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _priority = priority;

    let _done = false;
    let _priorities = ["Low", "Medium", "High"];

    const shiftPriority = function() {
        let priorityIndex = _priorities.indexOf(_priority);
        priorityIndex += 1;
        if (priorityIndex > _priorities.length - 1) {priorityIndex -= priorityIndex}
        _priority = _priorities[priorityIndex];
        return _priority;
    };

    const switchStatus = function() {
        _done = !_done;
    };

    const _inThisYear = function() {
        return _dueDate.getYear() === (new Date()).getYear();
    };

    const instance = {title, description, dueDate, priority, switchStatus, shiftPriority};

    Object.defineProperties(instance, {
        "dueDateHuman": {
            get() {
                if (_inThisYear()) {
                    return _dueDate.toLocaleString(LocaleConfig.locale, LocaleConfig.shortDateOptions);
                }
                return _dueDate.toLocaleString(LocaleConfig.locale, LocaleConfig.longDateOptions);
            },
        },
        "dueDate": {
            get() {return _dueDate;},
            set(date) {_dueDate = date;}
        },
        "doneString": {
            get() {return _done ? "Done" : "Pending";},
        },
        "done": {
            get() {return _done;}
        },
        "priority": {
            get() {return _priority;}
        },
        "title": {
            get() {return _title},
            set(title) {_title = title}
        },
        "description": {
            get() {return _description},
            set(description) {_description = description}
        },
    });

    return instance;
};

const Project = function(name, description) {
    let _name = name;
    let _description = description;

    let _tasks = [];
    const tasks = _tasks;

    const addTask = function(task) {
        _tasks.push(task);
    };

    const deleteTask = function(index) {
        _tasks.splice(index, 1);
    };

    const instance = {name, description, tasks, addTask, deleteTask};

    Object.defineProperties(instance, {
        "name": {
            get() {return _name},
            set(name) {_name = name}
        },
        "description": {
            get() {return _description},
            set(description) {_description = description}
        },
        "tasks": {
            get() {return _tasks},
            set(array) {_tasks = array}
        }
    });

    return instance;
};

const displayController = (function() {
    const _appBody = document.getElementById("app-body");

    const _mainContainer = document.createElement("div");
    _mainContainer.setAttribute("id", "container");

    const projectsTab = document.querySelector("button#projects");
    const tasksTab = document.querySelector("button#tasks");
    const tabs = [projectsTab, tasksTab];

    const addBtn = document.querySelector("button#add");
    const addIcon = new Image();
    addIcon.src = _icons_add_FILL1_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_1__;
    addBtn.appendChild(addIcon);

    const loadPage = function() {
        renderTasks.call(tasksTab);
    };

    const _clearAppBody = function() {
        window.scrollTo(0, 0);
        _appBody.innerHTML = "";
        _clearMainContainer();
        _appendContainerToBody();
    };

    const _clearMainContainer = function() {
        _mainContainer.innerHTML = "";
    };

    const _appendContainerToBody = function() {
        _appBody.appendChild(_mainContainer);
    };

    const _hideAddBtn = function() {
        addBtn.style.display = "none";
    };

    const _showAddBtn = function() {
        addBtn.style.display = "grid";
    };

    const deleteEntry = function(event) {
        event.stopPropagation();
        const index = Number(this.getAttribute("index"));
        if (this.classList.contains("delete-task")) {
            State.activeProject.deleteTask(index);
            renderTasks.call(tasksTab);
        }
        else if (this.classList.contains("delete-project")) {
            State.projects.splice(index, 1);
            renderProjects.call(projectsTab);
        }
        storageController.populate();
    };

    const addProject = function() {
        const projectList = document.getElementById("project-list");
        projectList.appendChild(DOMContentGenerator.projectInputForm());
        _hideAddBtn();
        window.scrollTo(0, document.body.scrollHeight);
    };

    const submitProject = function(event) {
        event.preventDefault();
        const title = document.querySelector("#add-project .entry-title").value;
        const description = document.querySelector("#add-project .description").value;
        const project = Project(title, description);
        State.addProject(project);

        renderProjects.call(projectsTab);
        _showAddBtn();

        storageController.populate();
    };

    const addTask = function() {
        const taskList = document.getElementById("task-list");
        taskList.appendChild(DOMContentGenerator.taskInputForm());
        _hideAddBtn();
        window.scrollTo(0, document.body.scrollHeight);
        //addBtn.style.display = "none";
    };

    const submitTask = function(event) {
        event.preventDefault();
        const title = document.querySelector("#add-task .entry-title").value;
        const description = document.querySelector("#add-task .description").value;

        const dateISOString = document.querySelector("#add-task .task-details .due-container input").value
            + "T00:00:00.000Z"; //To make sure it's always UTC.
        const dateUTC = new Date(dateISOString);
        const offset = dateUTC.getTimezoneOffset();
        const localDate = new Date(dateUTC.getTime() + offset*60000);
        
        const priority = document.querySelector("#add-task .task-details .priority select").value;
        const task = Task(title, description, localDate, priority);

        State.activeProject.addTask(task);
        renderTasks.call(tasksTab);

        _showAddBtn();
        window.scrollTo(0, document.body.scrollHeight);

        storageController.populate();
    };

    const switchTaskStatus = function() {
        const taskIndex = Number(this.getAttribute("index"));
        const task = State.activeProject.tasks[taskIndex];
        task.switchStatus();
        this.textContent = task.doneString;
        this.classList.toggle("done");
    };

    const shiftPriority = function() {
        const taskIndex = Number(this.getAttribute("index"));
        const task = State.activeProject.tasks[taskIndex];
        this.classList.remove(task.priority.toLowerCase());
        const newPriority = task.shiftPriority();
        this.classList.add(newPriority.toLowerCase());
        this.textContent = newPriority;
    }

    
    const renderProjects = function() {
        _clearAppBody();
        _showAddBtn();
        addBtn.onclick = addProject;
        tabs.forEach(tab => tab.classList.remove("active"));
        this.classList.add("active");

        const header = DOMContentGenerator.header("PROJECTS");
        _appBody.prepend(header);

        const projectList = DOMContentGenerator.projectList(State.projects);
        _mainContainer.append(projectList);
    };

    const renderTasks = function() {
        _clearAppBody();
        _showAddBtn();
        addBtn.onclick = addTask;
        tabs.forEach(tab => tab.classList.remove("active"));
        this.classList.add("active");

        const header = DOMContentGenerator.header(State.activeProject.name);
        _appBody.prepend(header);

        let taskList = DOMContentGenerator.taskList(State.activeProject);
        _mainContainer.appendChild(taskList);
    };

    const renderProjectTasks = function() {
        tabs.forEach(tab => tab.classList.remove("active"));
        tasksTab.classList.add("active");
        addBtn.onclick = addTask;
        const activeProjectIndex = Number(this.getAttribute("index"));
        State.activeProject = activeProjectIndex;
        _clearAppBody();
        const project = State.activeProject;

        let taskList  = DOMContentGenerator.taskList(project);
        _mainContainer.appendChild(taskList);

        const header = DOMContentGenerator.header(project.name);
        _appBody.prepend(header);
    };
    
    projectsTab.onclick = renderProjects;
    tasksTab.onclick = renderTasks;

    return {loadPage, renderProjects, renderTasks, renderProjectTasks, switchTaskStatus, shiftPriority,
        submitTask, submitProject, deleteEntry};
})();

const DOMContentGenerator = (function() {
    const _appendChildren = function(target, children) {
        const elements = Array.prototype.slice.call(arguments, 1);
        for (let element of elements) {
            target.appendChild(element);
        }
    };

    const header = function(headerText) {
        const header = document.createElement("div");
        const titleText = document.createElement("p");
        header.appendChild(titleText);
        titleText.classList.add("header");
        titleText.textContent = headerText;
        return header;
    };
    
    const _createDelBtn = function() {
        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("type", "button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Remove";
        deleteBtn.onclick = displayController.deleteEntry;

        return deleteBtn;
    };

    const projectList = function(projects) {
        let list = document.createElement("ul");
        list.setAttribute("id", "project-list");
        projects.forEach((project, index) => {
            let item = document.createElement("li");
            item.setAttribute("index", `${index}`)
            item.classList.add("entry");
            item.onclick = displayController.renderProjectTasks;
            list.appendChild(item);

            let projectName = document.createElement("p");
            projectName.textContent = project.name;
            projectName.classList.add("entry-title");

            let projectDescription = document.createElement("p");
            projectDescription.textContent = project.description;

            _appendChildren(item, projectName, projectDescription);
            if (index !== 0) {
                let delBtn = _createDelBtn();
                delBtn.classList.add("delete-project");
                delBtn.setAttribute("index", index);
                item.appendChild(delBtn);
            }
        });
        return list;
    };

    const projectInputForm = function() {
        const container = document.createElement("form");
        container.setAttribute("id", "add-project");
        container.setAttribute("action", "");
        container.setAttribute("method", "get");
        container.classList.add("entry");
        //container.classList.add("project-form")
        container.addEventListener("submit", displayController.submitProject);

        const title = document.createElement("input");
        title.setAttribute("type", "text");
        title.setAttribute("placeholder", "Title");
        title.setAttribute("required", "");
        title.classList.add("entry-title");

        const description = document.createElement("input");
        description.setAttribute("type", "text");
        description.setAttribute("placeholder", "Description (optional)");
        description.classList.add("description");

        const btnsCont = document.createElement("ul");
        btnsCont.classList.add("project-btns");

        const saveBtn = document.createElement("button");
        saveBtn.setAttribute("type", "submit");
        saveBtn.setAttribute("form", "add-project");
        saveBtn.textContent = "Save";
        btnsCont.appendChild(saveBtn);

        _appendChildren(container, title, description, btnsCont);
        return container;
    };

    const taskInputForm = function() {
        const taskList = document.getElementById("task-list");
        const taskIndex = State.activeProject.tasks.length;

        if (taskIndex === 0) {taskList.innerHTML = "";}

        const container = document.createElement("form");
        container.setAttribute("id", "add-task");
        container.setAttribute("action", "");
        container.setAttribute("method", "get");
        container.classList.add("entry");
        container.classList.add("task-form")
        container.addEventListener("submit", displayController.submitTask);

        const title = document.createElement("input");
        title.setAttribute("type", "text");
        title.setAttribute("placeholder", "Title");
        title.setAttribute("required", "");
        title.classList.add("entry-title");

        const description = document.createElement("input");
        description.setAttribute("type", "text");
        description.setAttribute("placeholder", "Description (optional)");
        description.classList.add("description");

        const details = document.createElement("ul");
        details.classList.add("task-details");

        const dueDateCont = document.createElement("li");
        dueDateCont.classList.add("due-container");
        const dueDate = document.createElement("input");
        dueDate.classList.add("due");
        dueDate.setAttribute("type", "date");
        dueDate.setAttribute("id", `date${taskIndex}`);
        dueDate.setAttribute("required", "");
        const calendarImage = new Image();
        calendarImage.src = _icons_calendar_month_FILL1_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_2__;
        const dateInputLabel = document.createElement("label");
        dateInputLabel.setAttribute("for", `date${taskIndex}`);
        dateInputLabel.appendChild(calendarImage);
        _appendChildren(dueDateCont, dateInputLabel, dueDate);
        
        const priorityCont = document.createElement("li");
        priorityCont.classList.add("priority");
        const priorityTag = document.createElement("p");
        priorityTag.classList.add("tag");
        priorityTag.textContent = "Priority";
        const priority = document.createElement("select");
        priority.setAttribute("index", taskIndex);
        const highOption = document.createElement("option");
        highOption.textContent = "High";
        const medOption = document.createElement("option");
        medOption.textContent = "Medium";
        const lowOption = document.createElement("option");
        lowOption.textContent = "Low";
        _appendChildren(priority, highOption, medOption, lowOption);
        _appendChildren(priorityCont, priorityTag, priority);

        const saveBtn = document.createElement("button");
        saveBtn.setAttribute("type", "submit");
        saveBtn.setAttribute("form", "add-task");
        saveBtn.textContent = "Save";

        _appendChildren(details, dueDateCont, priorityCont, saveBtn);

        _appendChildren(container, title, description, details);
        return container;
    };

    const _includeTaskContent = function(container, task) {
        const taskIndex = State.activeProject.tasks.indexOf(task);

        container.classList.add("entry");

        const title = document.createElement("p");
        title.classList.add("entry-title");
        title.textContent = task.title;

        const description = document.createElement("p");
        description.textContent = task.description;

        const details = document.createElement("ul");
        details.classList.add("task-details");

        const dueDateCont = document.createElement("li");
        const dueDate = document.createElement("p");
        const calendar = new Image();
        dueDateCont.classList.add("due-container");
        dueDate.classList.add("due");
        dueDate.textContent = task.dueDateHuman;
        calendar.src = _icons_calendar_month_FILL1_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_2__;
        _appendChildren(dueDateCont, calendar, dueDate);

        const priorityCont = document.createElement("li");
        const priorityTag = document.createElement("p");
        const priority = document.createElement("button");
        priorityTag.classList.add("tag");
        priority.classList.add(task.priority.toLowerCase());
        priority.setAttribute("index", taskIndex);
        priority.setAttribute("type", "button");
        priority.onclick = displayController.shiftPriority;
        priorityTag.textContent = "Priority";
        priority.textContent = task.priority;
        _appendChildren(priorityCont, priorityTag, priority);

        const doneContainer = document.createElement("li");
        const doneTag = document.createElement("p");
        const done = document.createElement("button");
        doneTag.classList.add("tag")
        if (task.done) {done.classList.add("done")};
        done.setAttribute("index", taskIndex);
        done.setAttribute("type", "button");
        done.onclick = displayController.switchTaskStatus;
        doneTag.textContent = "Completion";
        done.textContent = task.doneString;
        _appendChildren(doneContainer, doneTag, done);

        const delBtn = _createDelBtn();
        delBtn.classList.add("delete-task");
        delBtn.setAttribute("index", taskIndex);
        _appendChildren(details, dueDateCont, priorityCont, doneContainer);

        _appendChildren(container, title, description, details, delBtn);
    };

    const taskList = function(project) {
        let list = document.createElement("ul");
        list.setAttribute("id", "task-list");
        if (project.tasks.length === 0) {
            const item = document.createElement("li");
            item.classList.add("entry");
            list.appendChild(item);

            const noTaskElement = document.createElement("p");
            noTaskElement.textContent = "No tasks have been added";
            noTaskElement.classList.add("empty-task");
            item.appendChild(noTaskElement);
        }
        else {
            project.tasks.forEach(task => {
                let item = document.createElement("li");
                _includeTaskContent(item, task);

                list.appendChild(item);
            });
        }
        return list;
    };

    return {header, projectList, taskList, taskInputForm, projectInputForm};
})();

const State = (function() {
    let _activeProjectIndex = 0;

    let _projects = [];

    const gettingStarted = Project(
        "Getting Started",
        "Learn the features that My List App puts in your hand, it's simple!"
    );
    gettingStarted.addTask(Task(
        "Add your projects",
        "Explore the functionality that My Todo List offers you",
        new Date(),
        "High"
    ));
    gettingStarted.addTask(Task(
        "Add tasks to your projects",
        "Now that you have projects added, add tasks to them and get to work!",
        new Date(),
        "Medium"
    ));
    gettingStarted.addTask(Task(
        "Get to Work",
        "All that's left for you to do is get to work to make your dreams come true!",
        new Date(),
        "Low"
    ));

    const agency = Project(
        "Agency",
        "Along with my colaborators get this amazing project get going"
    );
    
    _projects.push(gettingStarted);
    _projects.push(agency);

    const addProject = function(project) {
        _projects.push(project);
    }
    
    const api = {addProject};

    Object.defineProperty(api, "activeProject", {
        get() {
            return _projects[_activeProjectIndex];
        },

        set(index) {
            _activeProjectIndex = index;
        }
    });

    Object.defineProperty(api, "dateOptions", {
        get() {
            return _dateOptions;
        }
    });

    Object.defineProperty(api, "projects", {
        set(array) {
            _projects = array;
        },
        get() {
            return _projects;
        }
    });

    return api;
})();

const LocaleConfig = (function() {
    let _locale = undefined;//"en-GB";

    const _longDateOptions = {
        "year": "numeric",
        "month": "short",
        "weekday": "short",
        "day": "numeric"
    };

    const _shortDateOptions = {
        "month": "short",
        "weekday": "long",
        "day": "numeric"
    };

    const api = {};

    Object.defineProperties(api, {
        "locale": {
            get() {return _locale;},
            set(tag) {_locale = tag;}
        },
        "shortDateOptions": {
            get() {return _shortDateOptions;},
        },
        "longDateOptions": {
            get() {return _longDateOptions;}
        }
    });
        
    return api;
})();

const storageController = (function() {
    const populate = function() {
        window.localStorage.setItem("projects", JSON.stringify(State.projects));
    };

    const retrieveStorage = function() {
        if (!window.localStorage.getItem("projects")) {
            populate();
        }
        const storedProjects = JSON.parse(window.localStorage.getItem("projects"));
        State.projects = storedProjects.map(_restoreProject);
    };

    const _restoreProject = function(project) {
        const restoredProject = Project(project.name, project.description);
        restoredProject.tasks = project.tasks.map(_restoreTask);
        return restoredProject;
    };

    const _restoreTask = function(task) {
        task.dueDate = _restoreDate(task.dueDate);
        const restoredTask = Task(task.title, task.description, task.dueDate, task.priority);
        return restoredTask;
    };

    const _restoreDate = function(dateStringUTC) {
        return new Date(dateStringUTC);
    };

    return {populate, retrieveStorage};
})();

storageController.retrieveStorage();
displayController.loadPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxNQUFNO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFVBQVU7QUFDcEQ7QUFDQTtBQUNBLDRCQUE0QixpRkFBVztBQUN2QztBQUNBLGtEQUFrRCxVQUFVO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpRkFBVztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQ7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DLHNCQUFzQjtBQUN0QixTQUFTO0FBQ1Q7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDLFNBQVM7QUFDVDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVEO0FBQ0EsNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Db3ZlcmVkX0J5X1lvdXJfR3JhY2UvQ292ZXJlZEJ5WW91ckdyYWNlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pY29ucy9hZGRfRklMTDFfd2dodDQwMF9HUkFEMF9vcHN6MjQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcImdyYWNlLWNvdmVyZWRcXFwiO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1saWdodC1ncmF5OiAjRTJFOEYwO1xcbiAgICAtLWRhcmtlci1ncmF5OiAjMzM0MTU1O1xcbiAgICAtLWdyYXk6ICM5NEEzQjg7XFxuICAgIC0tbGlnaHRlci1ncmF5OiAjRjFGNUY5O1xcbiAgICAtLW11c3RhcmQ6ICNDQThBMDQ7XFxuICAgIC0tYmx1ZTogIzFFMjkzQjtcXG4gICAgLS1yZWQ6ICNGQ0E1QTU7XFxuICAgIC0tbGlnaHQtcmVkOiAjRkVFMkUyO1xcbiAgICAtLWdyZWVuOiAjODZFRkFDO1xcbiAgICAtLXllbGxvdzogI0ZERTA0NztcXG5cXG4gICAgLS1maXhlZC11aS1lbGVtZW50czogIzY0NzQ4QjtcXG4gICAgLS1maXhlZC11aS1jb2xvcjogd2hpdGU7XFxuICAgIC0tYmctY29sb3I6ICNDQkQ1RTE7XFxuICAgIC0taGVhZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgLS1zaGFkb3c6IGJsYWNrO1xcblxcbiAgICAtLWhlYWRlci1oZWlnaHQ6IG1heCgxMHZoLCA2MHB4KTtcXG4gICAgLS1mb290ZXItaGVpZ2h0OiBjbGFtcCg0MHB4LCA4dmgsIDYwcHgpO1xcbiAgICAtLWFkZC1idG4taGVpZ2h0OiBjbGFtcCg0MHB4LCA4dmgsIDU1cHgpO1xcbiAgICAtLWFkZC1idG4tbWFyZ2luOiAxcmVtO1xcbiAgICBcXG4gICAgLS1lbnRyeS10aXRsZS1zaXplOiAxLjNyZW07XFxuXFxuICAgIC0tYnJhZGl1czogMXJlbTtcXG4gICAgLS1id2VpZ2h0OiAzcHg7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgICBmb250LWZhbWlseTogXFxcImdyYWNlLWNvdmVyZWRcXFwiO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IGJsYWNrO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpeGVkLXVpLWVsZW1lbnRzKTtcXG4gICAgY29sb3I6IHZhcigtLWZpeGVkLXVpLWNvbG9yKTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuZGl2I2FwcC1ib2R5IHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tZm9vdGVyLWhlaWdodCkgKyB2YXIoLS1hZGQtYnRuLWhlaWdodCkgKyAyKnZhcigtLWFkZC1idG4tbWFyZ2luKSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuZGl2I2FwcC1ib2R5IC5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXRvcDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxuICAgIC8qIGJvcmRlcjogdmFyKC0tYndlaWdodCkgc29saWQgdmFyKC0tbGlnaHQtZ3JheSk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJyYWRpdXMpO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIC5lbnRyeTpmaXJzdC1jaGlsZCB7XFxuICAgIC0tYWN0dWFsLWJyYWRpdXM6IGNhbGModmFyKC0tYnJhZGl1cykgLSB2YXIoLS1id2VpZ2h0KSk7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWFjdHVhbC1icmFkaXVzKTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLWFjdHVhbC1icmFkaXVzKTtcXG59XFxuXFxuZGl2I2NvbnRhaW5lciAuZW50cnk6bGFzdC1jaGlsZCB7XFxuICAgIC0tYWN0dWFsLWJyYWRpdXM6IGNhbGModmFyKC0tYnJhZGl1cykgLSB2YXIoLS1id2VpZ2h0KSk7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLWFjdHVhbC1icmFkaXVzKTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLWFjdHVhbC1icmFkaXVzKTtcXG59XFxuXFxuZGl2I2NvbnRhaW5lciAuZW50cnkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBtYXJnaW46IDAuNXJlbSwgMDtcXG59XFxuXFxuZGl2I2NvbnRhaW5lciAuZW50cnkgLmR1ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIC5lbnRyeSBwLmR1ZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbmRpdiNjb250YWluZXIgLmVudHJ5IGltZyB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIC5lbnRyeSBwLnRhZyB7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG59XFxuXFxuZGl2I2NvbnRhaW5lciAuZW50cnkgYnV0dG9uLFxcbmRpdiNjb250YWluZXIgLmVudHJ5IC50YXNrLWRldGFpbHMgaW5wdXQsIFxcbmRpdiNjb250YWluZXIgLmVudHJ5IC50YXNrLWRldGFpbHMgc2VsZWN0IHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1pbi13aWR0aDogNC41cmVtO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtlci1ncmF5KVxcbn1cXG5cXG5kaXYjY29udGFpbmVyIC5lbnRyeSAucHJvamVjdC1idG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuZGl2I2NvbnRhaW5lciAuZW50cnkgYnV0dG9uLmxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIC5lbnRyeSBidXR0b24ubWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teWVsbG93KTtcXG59XFxuXFxuZGl2I2NvbnRhaW5lciAuZW50cnkgYnV0dG9uLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1yZWQpO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIC5lbnRyeSBidXR0b246YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxcHggdmFyKC0tZGFya2VyLWdyYXkpLFxcbiAgICAgICAgaW5zZXQgLTFweCAxcHggMXB4IHZhcigtLWRhcmtlci1ncmF5KTtcXG59XFxuXFxuZGl2I2NvbnRhaW5lciAuZW50cnkgYnV0dG9uLmRvbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbmRpdiNjb250YWluZXIgLmVudHJ5Om50aC1jaGlsZChvZGQpLFxcbmRpdiNjb250YWluZXIgLmVudHJ5Om50aC1jaGlsZChvZGQpIGlucHV0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLWdyYXkpO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIC5lbnRyeTpudGgtY2hpbGQoZXZlbiksXFxuZGl2I2NvbnRhaW5lciAuZW50cnk6bnRoLWNoaWxkKGV2ZW4pIGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmRpdiNjb250YWluZXIgcCxcXG5kaXYjY29udGFpbmVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrZXItZ3JheSk7XFxuICAgIHdpZHRoOiAxMDAlXFxufVxcblxcbmRpdiNjb250YWluZXIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIHAuZW50cnktdGl0bGUsXFxuZGl2I2NvbnRhaW5lciBpbnB1dC5lbnRyeS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZW50cnktdGl0bGUtc2l6ZSk7XFxuICAgIG1hcmdpbjogMS4zcmVtIDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogbmF2eTtcXG59XFxuXFxuZGl2I2NvbnRhaW5lciBpbnB1dC5lbnRyeS10aXRsZTppbnZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcmVkKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIC5lbnRyeSAudGFzay1kZXRhaWxzIGlucHV0OmludmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1yZWQpO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyICNhZGQtdGFzazp2YWxpZCBidXR0b24sXFxuZGl2I2NvbnRhaW5lciAjYWRkLXByb2plY3Q6dmFsaWQgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIC5lbnRyeSAudGFzay1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbmRpdiNjb250YWluZXIgLmVudHJ5IC50YXNrLWRldGFpbHMgcCxcXG5kaXYjY29udGFpbmVyIC5lbnRyeSAudGFzay1kZXRhaWxzIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmRpdiNjb250YWluZXIgLmVudHJ5IHAuZW1wdHktdGFzayB7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIC5lbnRyeSAuZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmRpdiNjb250YWluZXIgLmVudHJ5IC5kZWxldGUtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuMnJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG4gICAgdG9wOiB2YXIoLS1lbnRyeS10aXRsZS1zaXplKTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG5pbnB1dCwgc2VsZWN0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIC8qIEZvciBjb21wYXRpYmlsaXQgd2l0aCBTYWZhcmkgKi9cXG4gICAgLXdlYmtpdC1hcHBlcmFuY2U6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiZ3JhY2UtY292ZXJlZFxcXCI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuZGl2I2FkZC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgYm90dG9tOiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogdmFyKC0tYWRkLWJ0bi1oZWlnaHQpO1xcbiAgICBtYXJnaW46IHZhcigtLWFkZC1idG4tbWFyZ2luKSAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuZGl2I2FkZC1jb250YWluZXIgYnV0dG9uI2FkZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpeGVkLXVpLWVsZW1lbnRzKTtcXG4gICAgd2lkdGg6IHZhcigtLWFkZC1idG4taGVpZ2h0KTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1hZGQtYnRuLWhlaWdodCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZml4ZWQtdWktZWxlbWVudHMpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCB2YXIoLS1iZy1jb2xvciksXFxuICAgICAgICAycHggLTJweCAycHggdmFyKC0tYmctY29sb3IpLFxcbiAgICAgICAgLTJweCAycHggMnB4IHZhcigtLWJnLWNvbG9yKSxcXG4gICAgICAgIC0ycHggLTJweCAycHggdmFyKC0tYmctY29sb3IpO1xcbn1cXG5cXG5kaXYjYWRkLWNvbnRhaW5lciBidXR0b24jYWRkID4gaW1nIHtcXG4gICAgd2lkdGg6IGNhbGMoMC43KnZhcigtLWFkZC1idG4taGVpZ2h0KSk7XFxuICAgIGhlaWdodDogY2FsYygwLjcqdmFyKC0tYWRkLWJ0bi1oZWlnaHQpKTtcXG59XFxuXFxuZGl2I2FkZC1jb250YWluZXIgYnV0dG9uI2FkZDphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDFweCBibGFjayxcXG4gICAgICAgIGluc2V0IC0xcHggMXB4IDFweCBibGFjaztcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuZm9vdGVyID4gYnV0dG9uIHtcXG4gICAgZmxleDogMTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCAzcHggYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpeGVkLXVpLWVsZW1lbnRzKTtcXG4gICAgY29sb3I6IHZhcigtLWZpeGVkLXVpLWNvbG9yKTtcXG59XFxuXFxuZm9vdGVyID4gYnV0dG9uLmFjdGl2ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBib3gtc2hhZG93OiAycHggLTJweCAzcHggdmFyKC0tc2hhZG93KSxcXG4gICAgICAgIC0ycHggLTJweCAzcHggdmFyKC0tc2hhZG93KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDRCQUE0QjtJQUM1Qiw0Q0FBa0U7QUFDdEU7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQkFBaUI7O0lBRWpCLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixlQUFlOztJQUVmLGdDQUFnQztJQUNoQyx1Q0FBdUM7SUFDdkMsd0NBQXdDO0lBQ3hDLHNCQUFzQjs7SUFFdEIsMEJBQTBCOztJQUUxQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNCQUFzQjs7SUFFdEIsMkJBQTJCLEVBQUUsZUFBZTtJQUM1Qyx5QkFBeUIsRUFBRSxXQUFXO0lBQ3RDLHdCQUF3QixFQUFFLG1CQUFtQjtJQUM3QyxzQkFBc0IsRUFBRSw0QkFBNEI7SUFDcEQscUJBQXFCLEVBQUUsMkJBQTJCO0lBQ2xELGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGlDQUFp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O0FBQzFDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnREFBMEQ7SUFDMUQsMENBQTBDO0lBQzFDLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLDBDQUEwQztJQUMxQzs7O3FDQUdpQztBQUNyQzs7QUFFQTtJQUNJLHNDQUFzQztJQUN0Qyx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSTtnQ0FDNEI7QUFDaEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFNBQVM7SUFDVCxPQUFPO0lBQ1AsNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsbUNBQW1DO0lBQ25DLDBDQUEwQztJQUMxQyw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakI7bUNBQytCO0FBQ25DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcImdyYWNlLWNvdmVyZWRcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi9Db3ZlcmVkX0J5X1lvdXJfR3JhY2UvQ292ZXJlZEJ5WW91ckdyYWNlLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1saWdodC1ncmF5OiAjRTJFOEYwO1xcbiAgICAtLWRhcmtlci1ncmF5OiAjMzM0MTU1O1xcbiAgICAtLWdyYXk6ICM5NEEzQjg7XFxuICAgIC0tbGlnaHRlci1ncmF5OiAjRjFGNUY5O1xcbiAgICAtLW11c3RhcmQ6ICNDQThBMDQ7XFxuICAgIC0tYmx1ZTogIzFFMjkzQjtcXG4gICAgLS1yZWQ6ICNGQ0E1QTU7XFxuICAgIC0tbGlnaHQtcmVkOiAjRkVFMkUyO1xcbiAgICAtLWdyZWVuOiAjODZFRkFDO1xcbiAgICAtLXllbGxvdzogI0ZERTA0NztcXG5cXG4gICAgLS1maXhlZC11aS1lbGVtZW50czogIzY0NzQ4QjtcXG4gICAgLS1maXhlZC11aS1jb2xvcjogd2hpdGU7XFxuICAgIC0tYmctY29sb3I6ICNDQkQ1RTE7XFxuICAgIC0taGVhZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgLS1zaGFkb3c6IGJsYWNrO1xcblxcbiAgICAtLWhlYWRlci1oZWlnaHQ6IG1heCgxMHZoLCA2MHB4KTtcXG4gICAgLS1mb290ZXItaGVpZ2h0OiBjbGFtcCg0MHB4LCA4dmgsIDYwcHgpO1xcbiAgICAtLWFkZC1idG4taGVpZ2h0OiBjbGFtcCg0MHB4LCA4dmgsIDU1cHgpO1xcbiAgICAtLWFkZC1idG4tbWFyZ2luOiAxcmVtO1xcbiAgICBcXG4gICAgLS1lbnRyeS10aXRsZS1zaXplOiAxLjNyZW07XFxuXFxuICAgIC0tYnJhZGl1czogMXJlbTtcXG4gICAgLS1id2VpZ2h0OiAzcHg7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgICBmb250LWZhbWlseTogXFxcImdyYWNlLWNvdmVyZWRcXFwiO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IGJsYWNrO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpeGVkLXVpLWVsZW1lbnRzKTtcXG4gICAgY29sb3I6IHZhcigtLWZpeGVkLXVpLWNvbG9yKTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuZGl2I2FwcC1ib2R5IHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tZm9vdGVyLWhlaWdodCkgKyB2YXIoLS1hZGQtYnRuLWhlaWdodCkgKyAyKnZhcigtLWFkZC1idG4tbWFyZ2luKSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuZGl2I2FwcC1ib2R5IC5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXRvcDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxuICAgIC8qIGJvcmRlcjogdmFyKC0tYndlaWdodCkgc29saWQgdmFyKC0tbGlnaHQtZ3JheSk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJyYWRpdXMpO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIC5lbnRyeTpmaXJzdC1jaGlsZCB7XFxuICAgIC0tYWN0dWFsLWJyYWRpdXM6IGNhbGModmFyKC0tYnJhZGl1cykgLSB2YXIoLS1id2VpZ2h0KSk7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWFjdHVhbC1icmFkaXVzKTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLWFjdHVhbC1icmFkaXVzKTtcXG59XFxuXFxuZGl2I2NvbnRhaW5lciAuZW50cnk6bGFzdC1jaGlsZCB7XFxuICAgIC0tYWN0dWFsLWJyYWRpdXM6IGNhbGModmFyKC0tYnJhZGl1cykgLSB2YXIoLS1id2VpZ2h0KSk7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLWFjdHVhbC1icmFkaXVzKTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLWFjdHVhbC1icmFkaXVzKTtcXG59XFxuXFxuZGl2I2NvbnRhaW5lciAuZW50cnkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBtYXJnaW46IDAuNXJlbSwgMDtcXG59XFxuXFxuZGl2I2NvbnRhaW5lciAuZW50cnkgLmR1ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIC5lbnRyeSBwLmR1ZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbmRpdiNjb250YWluZXIgLmVudHJ5IGltZyB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIC5lbnRyeSBwLnRhZyB7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG59XFxuXFxuZGl2I2NvbnRhaW5lciAuZW50cnkgYnV0dG9uLFxcbmRpdiNjb250YWluZXIgLmVudHJ5IC50YXNrLWRldGFpbHMgaW5wdXQsIFxcbmRpdiNjb250YWluZXIgLmVudHJ5IC50YXNrLWRldGFpbHMgc2VsZWN0IHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1pbi13aWR0aDogNC41cmVtO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtlci1ncmF5KVxcbn1cXG5cXG5kaXYjY29udGFpbmVyIC5lbnRyeSAucHJvamVjdC1idG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuZGl2I2NvbnRhaW5lciAuZW50cnkgYnV0dG9uLmxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIC5lbnRyeSBidXR0b24ubWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teWVsbG93KTtcXG59XFxuXFxuZGl2I2NvbnRhaW5lciAuZW50cnkgYnV0dG9uLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1yZWQpO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIC5lbnRyeSBidXR0b246YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxcHggdmFyKC0tZGFya2VyLWdyYXkpLFxcbiAgICAgICAgaW5zZXQgLTFweCAxcHggMXB4IHZhcigtLWRhcmtlci1ncmF5KTtcXG59XFxuXFxuZGl2I2NvbnRhaW5lciAuZW50cnkgYnV0dG9uLmRvbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbmRpdiNjb250YWluZXIgLmVudHJ5Om50aC1jaGlsZChvZGQpLFxcbmRpdiNjb250YWluZXIgLmVudHJ5Om50aC1jaGlsZChvZGQpIGlucHV0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLWdyYXkpO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIC5lbnRyeTpudGgtY2hpbGQoZXZlbiksXFxuZGl2I2NvbnRhaW5lciAuZW50cnk6bnRoLWNoaWxkKGV2ZW4pIGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmRpdiNjb250YWluZXIgcCxcXG5kaXYjY29udGFpbmVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrZXItZ3JheSk7XFxuICAgIHdpZHRoOiAxMDAlXFxufVxcblxcbmRpdiNjb250YWluZXIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIHAuZW50cnktdGl0bGUsXFxuZGl2I2NvbnRhaW5lciBpbnB1dC5lbnRyeS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZW50cnktdGl0bGUtc2l6ZSk7XFxuICAgIG1hcmdpbjogMS4zcmVtIDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogbmF2eTtcXG59XFxuXFxuZGl2I2NvbnRhaW5lciBpbnB1dC5lbnRyeS10aXRsZTppbnZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcmVkKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIC5lbnRyeSAudGFzay1kZXRhaWxzIGlucHV0OmludmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1yZWQpO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyICNhZGQtdGFzazp2YWxpZCBidXR0b24sXFxuZGl2I2NvbnRhaW5lciAjYWRkLXByb2plY3Q6dmFsaWQgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIC5lbnRyeSAudGFzay1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbmRpdiNjb250YWluZXIgLmVudHJ5IC50YXNrLWRldGFpbHMgcCxcXG5kaXYjY29udGFpbmVyIC5lbnRyeSAudGFzay1kZXRhaWxzIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmRpdiNjb250YWluZXIgLmVudHJ5IHAuZW1wdHktdGFzayB7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5kaXYjY29udGFpbmVyIC5lbnRyeSAuZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmRpdiNjb250YWluZXIgLmVudHJ5IC5kZWxldGUtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuMnJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG4gICAgdG9wOiB2YXIoLS1lbnRyeS10aXRsZS1zaXplKTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG5pbnB1dCwgc2VsZWN0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIC8qIEZvciBjb21wYXRpYmlsaXQgd2l0aCBTYWZhcmkgKi9cXG4gICAgLXdlYmtpdC1hcHBlcmFuY2U6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiZ3JhY2UtY292ZXJlZFxcXCI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuZGl2I2FkZC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgYm90dG9tOiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogdmFyKC0tYWRkLWJ0bi1oZWlnaHQpO1xcbiAgICBtYXJnaW46IHZhcigtLWFkZC1idG4tbWFyZ2luKSAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKSBzY2FsZSgxKTtcXG59XFxuXFxuZGl2I2FkZC1jb250YWluZXIgYnV0dG9uI2FkZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi9pY29ucy9hZGRfRklMTDFfd2dodDQwMF9HUkFEMF9vcHN6MjQuc3ZnXFxcIik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpeGVkLXVpLWVsZW1lbnRzKTtcXG4gICAgd2lkdGg6IHZhcigtLWFkZC1idG4taGVpZ2h0KTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1hZGQtYnRuLWhlaWdodCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZml4ZWQtdWktZWxlbWVudHMpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCB2YXIoLS1iZy1jb2xvciksXFxuICAgICAgICAycHggLTJweCAycHggdmFyKC0tYmctY29sb3IpLFxcbiAgICAgICAgLTJweCAycHggMnB4IHZhcigtLWJnLWNvbG9yKSxcXG4gICAgICAgIC0ycHggLTJweCAycHggdmFyKC0tYmctY29sb3IpO1xcbn1cXG5cXG5kaXYjYWRkLWNvbnRhaW5lciBidXR0b24jYWRkID4gaW1nIHtcXG4gICAgd2lkdGg6IGNhbGMoMC43KnZhcigtLWFkZC1idG4taGVpZ2h0KSk7XFxuICAgIGhlaWdodDogY2FsYygwLjcqdmFyKC0tYWRkLWJ0bi1oZWlnaHQpKTtcXG59XFxuXFxuZGl2I2FkZC1jb250YWluZXIgYnV0dG9uI2FkZDphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDFweCBibGFjayxcXG4gICAgICAgIGluc2V0IC0xcHggMXB4IDFweCBibGFjaztcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuZm9vdGVyID4gYnV0dG9uIHtcXG4gICAgZmxleDogMTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCAzcHggYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpeGVkLXVpLWVsZW1lbnRzKTtcXG4gICAgY29sb3I6IHZhcigtLWZpeGVkLXVpLWNvbG9yKTtcXG59XFxuXFxuZm9vdGVyID4gYnV0dG9uLmFjdGl2ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBib3gtc2hhZG93OiAycHggLTJweCAzcHggdmFyKC0tc2hhZG93KSxcXG4gICAgICAgIC0ycHggLTJweCAzcHggdmFyKC0tc2hhZG93KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGFkZFNyYyBmcm9tIFwiLi9pY29ucy9hZGRfRklMTDFfd2dodDQwMF9HUkFEMF9vcHN6MjQuc3ZnXCI7XG5pbXBvcnQgY2FsZW5kYXJTcmMgZnJvbSBcIi4vaWNvbnMvY2FsZW5kYXJfbW9udGhfRklMTDFfd2dodDQwMF9HUkFEMF9vcHN6MjQuc3ZnXCI7XG5cbmNvbnN0IFRhc2sgPSBmdW5jdGlvbih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgbGV0IF90aXRsZSA9IHRpdGxlO1xuICAgIGxldCBfZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBsZXQgX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgIGxldCBfcHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICAgIGxldCBfZG9uZSA9IGZhbHNlO1xuICAgIGxldCBfcHJpb3JpdGllcyA9IFtcIkxvd1wiLCBcIk1lZGl1bVwiLCBcIkhpZ2hcIl07XG5cbiAgICBjb25zdCBzaGlmdFByaW9yaXR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBwcmlvcml0eUluZGV4ID0gX3ByaW9yaXRpZXMuaW5kZXhPZihfcHJpb3JpdHkpO1xuICAgICAgICBwcmlvcml0eUluZGV4ICs9IDE7XG4gICAgICAgIGlmIChwcmlvcml0eUluZGV4ID4gX3ByaW9yaXRpZXMubGVuZ3RoIC0gMSkge3ByaW9yaXR5SW5kZXggLT0gcHJpb3JpdHlJbmRleH1cbiAgICAgICAgX3ByaW9yaXR5ID0gX3ByaW9yaXRpZXNbcHJpb3JpdHlJbmRleF07XG4gICAgICAgIHJldHVybiBfcHJpb3JpdHk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN3aXRjaFN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBfZG9uZSA9ICFfZG9uZTtcbiAgICB9O1xuXG4gICAgY29uc3QgX2luVGhpc1llYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9kdWVEYXRlLmdldFllYXIoKSA9PT0gKG5ldyBEYXRlKCkpLmdldFllYXIoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5zdGFuY2UgPSB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3dpdGNoU3RhdHVzLCBzaGlmdFByaW9yaXR5fTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGluc3RhbmNlLCB7XG4gICAgICAgIFwiZHVlRGF0ZUh1bWFuXCI6IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX2luVGhpc1llYXIoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2R1ZURhdGUudG9Mb2NhbGVTdHJpbmcoTG9jYWxlQ29uZmlnLmxvY2FsZSwgTG9jYWxlQ29uZmlnLnNob3J0RGF0ZU9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX2R1ZURhdGUudG9Mb2NhbGVTdHJpbmcoTG9jYWxlQ29uZmlnLmxvY2FsZSwgTG9jYWxlQ29uZmlnLmxvbmdEYXRlT3B0aW9ucyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBcImR1ZURhdGVcIjoge1xuICAgICAgICAgICAgZ2V0KCkge3JldHVybiBfZHVlRGF0ZTt9LFxuICAgICAgICAgICAgc2V0KGRhdGUpIHtfZHVlRGF0ZSA9IGRhdGU7fVxuICAgICAgICB9LFxuICAgICAgICBcImRvbmVTdHJpbmdcIjoge1xuICAgICAgICAgICAgZ2V0KCkge3JldHVybiBfZG9uZSA/IFwiRG9uZVwiIDogXCJQZW5kaW5nXCI7fSxcbiAgICAgICAgfSxcbiAgICAgICAgXCJkb25lXCI6IHtcbiAgICAgICAgICAgIGdldCgpIHtyZXR1cm4gX2RvbmU7fVxuICAgICAgICB9LFxuICAgICAgICBcInByaW9yaXR5XCI6IHtcbiAgICAgICAgICAgIGdldCgpIHtyZXR1cm4gX3ByaW9yaXR5O31cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0aXRsZVwiOiB7XG4gICAgICAgICAgICBnZXQoKSB7cmV0dXJuIF90aXRsZX0sXG4gICAgICAgICAgICBzZXQodGl0bGUpIHtfdGl0bGUgPSB0aXRsZX1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgICBnZXQoKSB7cmV0dXJuIF9kZXNjcmlwdGlvbn0sXG4gICAgICAgICAgICBzZXQoZGVzY3JpcHRpb24pIHtfZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbn1cbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBpbnN0YW5jZTtcbn07XG5cbmNvbnN0IFByb2plY3QgPSBmdW5jdGlvbihuYW1lLCBkZXNjcmlwdGlvbikge1xuICAgIGxldCBfbmFtZSA9IG5hbWU7XG4gICAgbGV0IF9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXG4gICAgbGV0IF90YXNrcyA9IFtdO1xuICAgIGNvbnN0IHRhc2tzID0gX3Rhc2tzO1xuXG4gICAgY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgX3Rhc2tzLnB1c2godGFzayk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICBfdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5zdGFuY2UgPSB7bmFtZSwgZGVzY3JpcHRpb24sIHRhc2tzLCBhZGRUYXNrLCBkZWxldGVUYXNrfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGluc3RhbmNlLCB7XG4gICAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgICAgICBnZXQoKSB7cmV0dXJuIF9uYW1lfSxcbiAgICAgICAgICAgIHNldChuYW1lKSB7X25hbWUgPSBuYW1lfVxuICAgICAgICB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICAgIGdldCgpIHtyZXR1cm4gX2Rlc2NyaXB0aW9ufSxcbiAgICAgICAgICAgIHNldChkZXNjcmlwdGlvbikge19kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9ufVxuICAgICAgICB9LFxuICAgICAgICBcInRhc2tzXCI6IHtcbiAgICAgICAgICAgIGdldCgpIHtyZXR1cm4gX3Rhc2tzfSxcbiAgICAgICAgICAgIHNldChhcnJheSkge190YXNrcyA9IGFycmF5fVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG59O1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBfYXBwQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwLWJvZHlcIik7XG5cbiAgICBjb25zdCBfbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgX21haW5Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWluZXJcIik7XG5cbiAgICBjb25zdCBwcm9qZWN0c1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jcHJvamVjdHNcIik7XG4gICAgY29uc3QgdGFza3NUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3Rhc2tzXCIpO1xuICAgIGNvbnN0IHRhYnMgPSBbcHJvamVjdHNUYWIsIHRhc2tzVGFiXTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jYWRkXCIpO1xuICAgIGNvbnN0IGFkZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBhZGRJY29uLnNyYyA9IGFkZFNyYztcbiAgICBhZGRCdG4uYXBwZW5kQ2hpbGQoYWRkSWNvbik7XG5cbiAgICBjb25zdCBsb2FkUGFnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZW5kZXJUYXNrcy5jYWxsKHRhc2tzVGFiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgX2NsZWFyQXBwQm9keSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIF9hcHBCb2R5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIF9jbGVhck1haW5Db250YWluZXIoKTtcbiAgICAgICAgX2FwcGVuZENvbnRhaW5lclRvQm9keSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBfY2xlYXJNYWluQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIF9tYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IF9hcHBlbmRDb250YWluZXJUb0JvZHkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgX2FwcEJvZHkuYXBwZW5kQ2hpbGQoX21haW5Db250YWluZXIpO1xuICAgIH07XG5cbiAgICBjb25zdCBfaGlkZUFkZEJ0biA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBhZGRCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH07XG5cbiAgICBjb25zdCBfc2hvd0FkZEJ0biA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBhZGRCdG4uc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVFbnRyeSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlcih0aGlzLmdldEF0dHJpYnV0ZShcImluZGV4XCIpKTtcbiAgICAgICAgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLXRhc2tcIikpIHtcbiAgICAgICAgICAgIFN0YXRlLmFjdGl2ZVByb2plY3QuZGVsZXRlVGFzayhpbmRleCk7XG4gICAgICAgICAgICByZW5kZXJUYXNrcy5jYWxsKHRhc2tzVGFiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS1wcm9qZWN0XCIpKSB7XG4gICAgICAgICAgICBTdGF0ZS5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgcmVuZGVyUHJvamVjdHMuY2FsbChwcm9qZWN0c1RhYik7XG4gICAgICAgIH1cbiAgICAgICAgc3RvcmFnZUNvbnRyb2xsZXIucG9wdWxhdGUoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpO1xuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChET01Db250ZW50R2VuZXJhdG9yLnByb2plY3RJbnB1dEZvcm0oKSk7XG4gICAgICAgIF9oaWRlQWRkQnRuKCk7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN1Ym1pdFByb2plY3QgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QgLmVudHJ5LXRpdGxlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QgLmRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICBTdGF0ZS5hZGRQcm9qZWN0KHByb2plY3QpO1xuXG4gICAgICAgIHJlbmRlclByb2plY3RzLmNhbGwocHJvamVjdHNUYWIpO1xuICAgICAgICBfc2hvd0FkZEJ0bigpO1xuXG4gICAgICAgIHN0b3JhZ2VDb250cm9sbGVyLnBvcHVsYXRlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFRhc2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbGlzdFwiKTtcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoRE9NQ29udGVudEdlbmVyYXRvci50YXNrSW5wdXRGb3JtKCkpO1xuICAgICAgICBfaGlkZUFkZEJ0bigpO1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpO1xuICAgICAgICAvL2FkZEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IHN1Ym1pdFRhc2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2sgLmVudHJ5LXRpdGxlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2sgLmRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IGRhdGVJU09TdHJpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrIC50YXNrLWRldGFpbHMgLmR1ZS1jb250YWluZXIgaW5wdXRcIikudmFsdWVcbiAgICAgICAgICAgICsgXCJUMDA6MDA6MDAuMDAwWlwiOyAvL1RvIG1ha2Ugc3VyZSBpdCdzIGFsd2F5cyBVVEMuXG4gICAgICAgIGNvbnN0IGRhdGVVVEMgPSBuZXcgRGF0ZShkYXRlSVNPU3RyaW5nKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZGF0ZVVUQy5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgICAgICBjb25zdCBsb2NhbERhdGUgPSBuZXcgRGF0ZShkYXRlVVRDLmdldFRpbWUoKSArIG9mZnNldCo2MDAwMCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2sgLnRhc2stZGV0YWlscyAucHJpb3JpdHkgc2VsZWN0XCIpLnZhbHVlO1xuICAgICAgICBjb25zdCB0YXNrID0gVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGxvY2FsRGF0ZSwgcHJpb3JpdHkpO1xuXG4gICAgICAgIFN0YXRlLmFjdGl2ZVByb2plY3QuYWRkVGFzayh0YXNrKTtcbiAgICAgICAgcmVuZGVyVGFza3MuY2FsbCh0YXNrc1RhYik7XG5cbiAgICAgICAgX3Nob3dBZGRCdG4oKTtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KTtcblxuICAgICAgICBzdG9yYWdlQ29udHJvbGxlci5wb3B1bGF0ZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBzd2l0Y2hUYXNrU3RhdHVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IE51bWJlcih0aGlzLmdldEF0dHJpYnV0ZShcImluZGV4XCIpKTtcbiAgICAgICAgY29uc3QgdGFzayA9IFN0YXRlLmFjdGl2ZVByb2plY3QudGFza3NbdGFza0luZGV4XTtcbiAgICAgICAgdGFzay5zd2l0Y2hTdGF0dXMoKTtcbiAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IHRhc2suZG9uZVN0cmluZztcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiZG9uZVwiKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2hpZnRQcmlvcml0eSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSBOdW1iZXIodGhpcy5nZXRBdHRyaWJ1dGUoXCJpbmRleFwiKSk7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBTdGF0ZS5hY3RpdmVQcm9qZWN0LnRhc2tzW3Rhc2tJbmRleF07XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSh0YXNrLnByaW9yaXR5LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICBjb25zdCBuZXdQcmlvcml0eSA9IHRhc2suc2hpZnRQcmlvcml0eSgpO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQobmV3UHJpb3JpdHkudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBuZXdQcmlvcml0eTtcbiAgICB9XG5cbiAgICBcbiAgICBjb25zdCByZW5kZXJQcm9qZWN0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBfY2xlYXJBcHBCb2R5KCk7XG4gICAgICAgIF9zaG93QWRkQnRuKCk7XG4gICAgICAgIGFkZEJ0bi5vbmNsaWNrID0gYWRkUHJvamVjdDtcbiAgICAgICAgdGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgICAgICBjb25zdCBoZWFkZXIgPSBET01Db250ZW50R2VuZXJhdG9yLmhlYWRlcihcIlBST0pFQ1RTXCIpO1xuICAgICAgICBfYXBwQm9keS5wcmVwZW5kKGhlYWRlcik7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBET01Db250ZW50R2VuZXJhdG9yLnByb2plY3RMaXN0KFN0YXRlLnByb2plY3RzKTtcbiAgICAgICAgX21haW5Db250YWluZXIuYXBwZW5kKHByb2plY3RMaXN0KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyVGFza3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgX2NsZWFyQXBwQm9keSgpO1xuICAgICAgICBfc2hvd0FkZEJ0bigpO1xuICAgICAgICBhZGRCdG4ub25jbGljayA9IGFkZFRhc2s7XG4gICAgICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4gdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gRE9NQ29udGVudEdlbmVyYXRvci5oZWFkZXIoU3RhdGUuYWN0aXZlUHJvamVjdC5uYW1lKTtcbiAgICAgICAgX2FwcEJvZHkucHJlcGVuZChoZWFkZXIpO1xuXG4gICAgICAgIGxldCB0YXNrTGlzdCA9IERPTUNvbnRlbnRHZW5lcmF0b3IudGFza0xpc3QoU3RhdGUuYWN0aXZlUHJvamVjdCk7XG4gICAgICAgIF9tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tMaXN0KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyUHJvamVjdFRhc2tzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4gdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICAgICAgICB0YXNrc1RhYi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBhZGRCdG4ub25jbGljayA9IGFkZFRhc2s7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVByb2plY3RJbmRleCA9IE51bWJlcih0aGlzLmdldEF0dHJpYnV0ZShcImluZGV4XCIpKTtcbiAgICAgICAgU3RhdGUuYWN0aXZlUHJvamVjdCA9IGFjdGl2ZVByb2plY3RJbmRleDtcbiAgICAgICAgX2NsZWFyQXBwQm9keSgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gU3RhdGUuYWN0aXZlUHJvamVjdDtcblxuICAgICAgICBsZXQgdGFza0xpc3QgID0gRE9NQ29udGVudEdlbmVyYXRvci50YXNrTGlzdChwcm9qZWN0KTtcbiAgICAgICAgX21haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IERPTUNvbnRlbnRHZW5lcmF0b3IuaGVhZGVyKHByb2plY3QubmFtZSk7XG4gICAgICAgIF9hcHBCb2R5LnByZXBlbmQoaGVhZGVyKTtcbiAgICB9O1xuICAgIFxuICAgIHByb2plY3RzVGFiLm9uY2xpY2sgPSByZW5kZXJQcm9qZWN0cztcbiAgICB0YXNrc1RhYi5vbmNsaWNrID0gcmVuZGVyVGFza3M7XG5cbiAgICByZXR1cm4ge2xvYWRQYWdlLCByZW5kZXJQcm9qZWN0cywgcmVuZGVyVGFza3MsIHJlbmRlclByb2plY3RUYXNrcywgc3dpdGNoVGFza1N0YXR1cywgc2hpZnRQcmlvcml0eSxcbiAgICAgICAgc3VibWl0VGFzaywgc3VibWl0UHJvamVjdCwgZGVsZXRlRW50cnl9O1xufSkoKTtcblxuY29uc3QgRE9NQ29udGVudEdlbmVyYXRvciA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBfYXBwZW5kQ2hpbGRyZW4gPSBmdW5jdGlvbih0YXJnZXQsIGNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGZ1bmN0aW9uKGhlYWRlclRleHQpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuICAgICAgICB0aXRsZVRleHQuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgICAgICAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gaGVhZGVyVGV4dDtcbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IF9jcmVhdGVEZWxCdG4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0blwiKTtcbiAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJSZW1vdmVcIjtcbiAgICAgICAgZGVsZXRlQnRuLm9uY2xpY2sgPSBkaXNwbGF5Q29udHJvbGxlci5kZWxldGVFbnRyeTtcblxuICAgICAgICByZXR1cm4gZGVsZXRlQnRuO1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGZ1bmN0aW9uKHByb2plY3RzKSB7XG4gICAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBsaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1saXN0XCIpO1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcImluZGV4XCIsIGAke2luZGV4fWApXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJlbnRyeVwiKTtcbiAgICAgICAgICAgIGl0ZW0ub25jbGljayA9IGRpc3BsYXlDb250cm9sbGVyLnJlbmRlclByb2plY3RUYXNrcztcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cbiAgICAgICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwiZW50cnktdGl0bGVcIik7XG5cbiAgICAgICAgICAgIGxldCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XG5cbiAgICAgICAgICAgIF9hcHBlbmRDaGlsZHJlbihpdGVtLCBwcm9qZWN0TmFtZSwgcHJvamVjdERlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGxldCBkZWxCdG4gPSBfY3JlYXRlRGVsQnRuKCk7XG4gICAgICAgICAgICAgICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdFwiKTtcbiAgICAgICAgICAgICAgICBkZWxCdG4uc2V0QXR0cmlidXRlKFwiaW5kZXhcIiwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZGVsQnRuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0SW5wdXRGb3JtID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvamVjdFwiKTtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIlwiKTtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcImdldFwiKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlbnRyeVwiKTtcbiAgICAgICAgLy9jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZm9ybVwiKVxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBkaXNwbGF5Q29udHJvbGxlci5zdWJtaXRQcm9qZWN0KTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiZW50cnktdGl0bGVcIik7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uIChvcHRpb25hbClcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcblxuICAgICAgICBjb25zdCBidG5zQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgYnRuc0NvbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnRuc1wiKTtcblxuICAgICAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc2F2ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgICAgICBzYXZlQnRuLnNldEF0dHJpYnV0ZShcImZvcm1cIiwgXCJhZGQtcHJvamVjdFwiKTtcbiAgICAgICAgc2F2ZUJ0bi50ZXh0Q29udGVudCA9IFwiU2F2ZVwiO1xuICAgICAgICBidG5zQ29udC5hcHBlbmRDaGlsZChzYXZlQnRuKTtcblxuICAgICAgICBfYXBwZW5kQ2hpbGRyZW4oY29udGFpbmVyLCB0aXRsZSwgZGVzY3JpcHRpb24sIGJ0bnNDb250KTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9O1xuXG4gICAgY29uc3QgdGFza0lucHV0Rm9ybSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1saXN0XCIpO1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSBTdGF0ZS5hY3RpdmVQcm9qZWN0LnRhc2tzLmxlbmd0aDtcblxuICAgICAgICBpZiAodGFza0luZGV4ID09PSAwKSB7dGFza0xpc3QuaW5uZXJIVE1MID0gXCJcIjt9XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrXCIpO1xuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwiZ2V0XCIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImVudHJ5XCIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stZm9ybVwiKVxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBkaXNwbGF5Q29udHJvbGxlci5zdWJtaXRUYXNrKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiZW50cnktdGl0bGVcIik7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uIChvcHRpb25hbClcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcblxuICAgICAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHNcIik7XG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZUNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGR1ZURhdGVDb250LmNsYXNzTGlzdC5hZGQoXCJkdWUtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWVcIik7XG4gICAgICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGRhdGUke3Rhc2tJbmRleH1gKTtcbiAgICAgICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgICAgICAgY29uc3QgY2FsZW5kYXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBjYWxlbmRhckltYWdlLnNyYyA9IGNhbGVuZGFyU3JjO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgZGF0ZUlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGBkYXRlJHt0YXNrSW5kZXh9YCk7XG4gICAgICAgIGRhdGVJbnB1dExhYmVsLmFwcGVuZENoaWxkKGNhbGVuZGFySW1hZ2UpO1xuICAgICAgICBfYXBwZW5kQ2hpbGRyZW4oZHVlRGF0ZUNvbnQsIGRhdGVJbnB1dExhYmVsLCBkdWVEYXRlKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5Q29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgcHJpb3JpdHlDb250LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcHJpb3JpdHlUYWcuY2xhc3NMaXN0LmFkZChcInRhZ1wiKTtcbiAgICAgICAgcHJpb3JpdHlUYWcudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaW5kZXhcIiwgdGFza0luZGV4KTtcbiAgICAgICAgY29uc3QgaGlnaE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIGhpZ2hPcHRpb24udGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgICAgICAgY29uc3QgbWVkT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgbWVkT3B0aW9uLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgICAgICAgY29uc3QgbG93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgbG93T3B0aW9uLnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgICAgICAgX2FwcGVuZENoaWxkcmVuKHByaW9yaXR5LCBoaWdoT3B0aW9uLCBtZWRPcHRpb24sIGxvd09wdGlvbik7XG4gICAgICAgIF9hcHBlbmRDaGlsZHJlbihwcmlvcml0eUNvbnQsIHByaW9yaXR5VGFnLCBwcmlvcml0eSk7XG5cbiAgICAgICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHNhdmVCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICAgICAgc2F2ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJmb3JtXCIsIFwiYWRkLXRhc2tcIik7XG4gICAgICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSBcIlNhdmVcIjtcblxuICAgICAgICBfYXBwZW5kQ2hpbGRyZW4oZGV0YWlscywgZHVlRGF0ZUNvbnQsIHByaW9yaXR5Q29udCwgc2F2ZUJ0bik7XG5cbiAgICAgICAgX2FwcGVuZENoaWxkcmVuKGNvbnRhaW5lciwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkZXRhaWxzKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9O1xuXG4gICAgY29uc3QgX2luY2x1ZGVUYXNrQ29udGVudCA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgdGFzaykge1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSBTdGF0ZS5hY3RpdmVQcm9qZWN0LnRhc2tzLmluZGV4T2YodGFzayk7XG5cbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlbnRyeVwiKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiZW50cnktdGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzXCIpO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGVDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IGNhbGVuZGFyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGR1ZURhdGVDb250LmNsYXNzTGlzdC5hZGQoXCJkdWUtY29udGFpbmVyXCIpO1xuICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWVcIik7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGVIdW1hbjtcbiAgICAgICAgY2FsZW5kYXIuc3JjID0gY2FsZW5kYXJTcmM7XG4gICAgICAgIF9hcHBlbmRDaGlsZHJlbihkdWVEYXRlQ29udCwgY2FsZW5kYXIsIGR1ZURhdGUpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5Q29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBwcmlvcml0eVRhZy5jbGFzc0xpc3QuYWRkKFwidGFnXCIpO1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKHRhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcImluZGV4XCIsIHRhc2tJbmRleCk7XG4gICAgICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgICAgIHByaW9yaXR5Lm9uY2xpY2sgPSBkaXNwbGF5Q29udHJvbGxlci5zaGlmdFByaW9yaXR5O1xuICAgICAgICBwcmlvcml0eVRhZy50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICBfYXBwZW5kQ2hpbGRyZW4ocHJpb3JpdHlDb250LCBwcmlvcml0eVRhZywgcHJpb3JpdHkpO1xuXG4gICAgICAgIGNvbnN0IGRvbmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGNvbnN0IGRvbmVUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY29uc3QgZG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRvbmVUYWcuY2xhc3NMaXN0LmFkZChcInRhZ1wiKVxuICAgICAgICBpZiAodGFzay5kb25lKSB7ZG9uZS5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKX07XG4gICAgICAgIGRvbmUuc2V0QXR0cmlidXRlKFwiaW5kZXhcIiwgdGFza0luZGV4KTtcbiAgICAgICAgZG9uZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICBkb25lLm9uY2xpY2sgPSBkaXNwbGF5Q29udHJvbGxlci5zd2l0Y2hUYXNrU3RhdHVzO1xuICAgICAgICBkb25lVGFnLnRleHRDb250ZW50ID0gXCJDb21wbGV0aW9uXCI7XG4gICAgICAgIGRvbmUudGV4dENvbnRlbnQgPSB0YXNrLmRvbmVTdHJpbmc7XG4gICAgICAgIF9hcHBlbmRDaGlsZHJlbihkb25lQ29udGFpbmVyLCBkb25lVGFnLCBkb25lKTtcblxuICAgICAgICBjb25zdCBkZWxCdG4gPSBfY3JlYXRlRGVsQnRuKCk7XG4gICAgICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRhc2tcIik7XG4gICAgICAgIGRlbEJ0bi5zZXRBdHRyaWJ1dGUoXCJpbmRleFwiLCB0YXNrSW5kZXgpO1xuICAgICAgICBfYXBwZW5kQ2hpbGRyZW4oZGV0YWlscywgZHVlRGF0ZUNvbnQsIHByaW9yaXR5Q29udCwgZG9uZUNvbnRhaW5lcik7XG5cbiAgICAgICAgX2FwcGVuZENoaWxkcmVuKGNvbnRhaW5lciwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkZXRhaWxzLCBkZWxCdG4pO1xuICAgIH07XG5cbiAgICBjb25zdCB0YXNrTGlzdCA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGxpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWxpc3RcIik7XG4gICAgICAgIGlmIChwcm9qZWN0LnRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImVudHJ5XCIpO1xuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcblxuICAgICAgICAgICAgY29uc3Qgbm9UYXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgbm9UYXNrRWxlbWVudC50ZXh0Q29udGVudCA9IFwiTm8gdGFza3MgaGF2ZSBiZWVuIGFkZGVkXCI7XG4gICAgICAgICAgICBub1Rhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlbXB0eS10YXNrXCIpO1xuICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChub1Rhc2tFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgICAgICBfaW5jbHVkZVRhc2tDb250ZW50KGl0ZW0sIHRhc2spO1xuXG4gICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH07XG5cbiAgICByZXR1cm4ge2hlYWRlciwgcHJvamVjdExpc3QsIHRhc2tMaXN0LCB0YXNrSW5wdXRGb3JtLCBwcm9qZWN0SW5wdXRGb3JtfTtcbn0pKCk7XG5cbmNvbnN0IFN0YXRlID0gKGZ1bmN0aW9uKCkge1xuICAgIGxldCBfYWN0aXZlUHJvamVjdEluZGV4ID0gMDtcblxuICAgIGxldCBfcHJvamVjdHMgPSBbXTtcblxuICAgIGNvbnN0IGdldHRpbmdTdGFydGVkID0gUHJvamVjdChcbiAgICAgICAgXCJHZXR0aW5nIFN0YXJ0ZWRcIixcbiAgICAgICAgXCJMZWFybiB0aGUgZmVhdHVyZXMgdGhhdCBNeSBMaXN0IEFwcCBwdXRzIGluIHlvdXIgaGFuZCwgaXQncyBzaW1wbGUhXCJcbiAgICApO1xuICAgIGdldHRpbmdTdGFydGVkLmFkZFRhc2soVGFzayhcbiAgICAgICAgXCJBZGQgeW91ciBwcm9qZWN0c1wiLFxuICAgICAgICBcIkV4cGxvcmUgdGhlIGZ1bmN0aW9uYWxpdHkgdGhhdCBNeSBUb2RvIExpc3Qgb2ZmZXJzIHlvdVwiLFxuICAgICAgICBuZXcgRGF0ZSgpLFxuICAgICAgICBcIkhpZ2hcIlxuICAgICkpO1xuICAgIGdldHRpbmdTdGFydGVkLmFkZFRhc2soVGFzayhcbiAgICAgICAgXCJBZGQgdGFza3MgdG8geW91ciBwcm9qZWN0c1wiLFxuICAgICAgICBcIk5vdyB0aGF0IHlvdSBoYXZlIHByb2plY3RzIGFkZGVkLCBhZGQgdGFza3MgdG8gdGhlbSBhbmQgZ2V0IHRvIHdvcmshXCIsXG4gICAgICAgIG5ldyBEYXRlKCksXG4gICAgICAgIFwiTWVkaXVtXCJcbiAgICApKTtcbiAgICBnZXR0aW5nU3RhcnRlZC5hZGRUYXNrKFRhc2soXG4gICAgICAgIFwiR2V0IHRvIFdvcmtcIixcbiAgICAgICAgXCJBbGwgdGhhdCdzIGxlZnQgZm9yIHlvdSB0byBkbyBpcyBnZXQgdG8gd29yayB0byBtYWtlIHlvdXIgZHJlYW1zIGNvbWUgdHJ1ZSFcIixcbiAgICAgICAgbmV3IERhdGUoKSxcbiAgICAgICAgXCJMb3dcIlxuICAgICkpO1xuXG4gICAgY29uc3QgYWdlbmN5ID0gUHJvamVjdChcbiAgICAgICAgXCJBZ2VuY3lcIixcbiAgICAgICAgXCJBbG9uZyB3aXRoIG15IGNvbGFib3JhdG9ycyBnZXQgdGhpcyBhbWF6aW5nIHByb2plY3QgZ2V0IGdvaW5nXCJcbiAgICApO1xuICAgIFxuICAgIF9wcm9qZWN0cy5wdXNoKGdldHRpbmdTdGFydGVkKTtcbiAgICBfcHJvamVjdHMucHVzaChhZ2VuY3kpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgX3Byb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGFwaSA9IHthZGRQcm9qZWN0fTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhcGksIFwiYWN0aXZlUHJvamVjdFwiLCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfcHJvamVjdHNbX2FjdGl2ZVByb2plY3RJbmRleF07XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0KGluZGV4KSB7XG4gICAgICAgICAgICBfYWN0aXZlUHJvamVjdEluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhcGksIFwiZGF0ZU9wdGlvbnNcIiwge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2RhdGVPcHRpb25zO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYXBpLCBcInByb2plY3RzXCIsIHtcbiAgICAgICAgc2V0KGFycmF5KSB7XG4gICAgICAgICAgICBfcHJvamVjdHMgPSBhcnJheTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9wcm9qZWN0cztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFwaTtcbn0pKCk7XG5cbmNvbnN0IExvY2FsZUNvbmZpZyA9IChmdW5jdGlvbigpIHtcbiAgICBsZXQgX2xvY2FsZSA9IHVuZGVmaW5lZDsvL1wiZW4tR0JcIjtcblxuICAgIGNvbnN0IF9sb25nRGF0ZU9wdGlvbnMgPSB7XG4gICAgICAgIFwieWVhclwiOiBcIm51bWVyaWNcIixcbiAgICAgICAgXCJtb250aFwiOiBcInNob3J0XCIsXG4gICAgICAgIFwid2Vla2RheVwiOiBcInNob3J0XCIsXG4gICAgICAgIFwiZGF5XCI6IFwibnVtZXJpY1wiXG4gICAgfTtcblxuICAgIGNvbnN0IF9zaG9ydERhdGVPcHRpb25zID0ge1xuICAgICAgICBcIm1vbnRoXCI6IFwic2hvcnRcIixcbiAgICAgICAgXCJ3ZWVrZGF5XCI6IFwibG9uZ1wiLFxuICAgICAgICBcImRheVwiOiBcIm51bWVyaWNcIlxuICAgIH07XG5cbiAgICBjb25zdCBhcGkgPSB7fTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGFwaSwge1xuICAgICAgICBcImxvY2FsZVwiOiB7XG4gICAgICAgICAgICBnZXQoKSB7cmV0dXJuIF9sb2NhbGU7fSxcbiAgICAgICAgICAgIHNldCh0YWcpIHtfbG9jYWxlID0gdGFnO31cbiAgICAgICAgfSxcbiAgICAgICAgXCJzaG9ydERhdGVPcHRpb25zXCI6IHtcbiAgICAgICAgICAgIGdldCgpIHtyZXR1cm4gX3Nob3J0RGF0ZU9wdGlvbnM7fSxcbiAgICAgICAgfSxcbiAgICAgICAgXCJsb25nRGF0ZU9wdGlvbnNcIjoge1xuICAgICAgICAgICAgZ2V0KCkge3JldHVybiBfbG9uZ0RhdGVPcHRpb25zO31cbiAgICAgICAgfVxuICAgIH0pO1xuICAgICAgICBcbiAgICByZXR1cm4gYXBpO1xufSkoKTtcblxuY29uc3Qgc3RvcmFnZUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcG9wdWxhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoU3RhdGUucHJvamVjdHMpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmV0cmlldmVTdG9yYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHtcbiAgICAgICAgICAgIHBvcHVsYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgICAgICAgU3RhdGUucHJvamVjdHMgPSBzdG9yZWRQcm9qZWN0cy5tYXAoX3Jlc3RvcmVQcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgY29uc3QgX3Jlc3RvcmVQcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICBjb25zdCByZXN0b3JlZFByb2plY3QgPSBQcm9qZWN0KHByb2plY3QubmFtZSwgcHJvamVjdC5kZXNjcmlwdGlvbik7XG4gICAgICAgIHJlc3RvcmVkUHJvamVjdC50YXNrcyA9IHByb2plY3QudGFza3MubWFwKF9yZXN0b3JlVGFzayk7XG4gICAgICAgIHJldHVybiByZXN0b3JlZFByb2plY3Q7XG4gICAgfTtcblxuICAgIGNvbnN0IF9yZXN0b3JlVGFzayA9IGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgdGFzay5kdWVEYXRlID0gX3Jlc3RvcmVEYXRlKHRhc2suZHVlRGF0ZSk7XG4gICAgICAgIGNvbnN0IHJlc3RvcmVkVGFzayA9IFRhc2sodGFzay50aXRsZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5KTtcbiAgICAgICAgcmV0dXJuIHJlc3RvcmVkVGFzaztcbiAgICB9O1xuXG4gICAgY29uc3QgX3Jlc3RvcmVEYXRlID0gZnVuY3Rpb24oZGF0ZVN0cmluZ1VUQykge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZVN0cmluZ1VUQyk7XG4gICAgfTtcblxuICAgIHJldHVybiB7cG9wdWxhdGUsIHJldHJpZXZlU3RvcmFnZX07XG59KSgpO1xuXG5zdG9yYWdlQ29udHJvbGxlci5yZXRyaWV2ZVN0b3JhZ2UoKTtcbmRpc3BsYXlDb250cm9sbGVyLmxvYWRQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9