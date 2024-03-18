/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto+Condensed&family=Russo+One&family=Teko&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    font-family: \"Roboto Condensed\",\"Roboto\",\"Open Sans\";\n    font-size: 18px;\n}\n\n:root{\n    --header-color: rgba(0, 0, 0, 0.575);\n    --header-font-color: rgb(240, 248, 255);\n    --ship-color: rgb(9, 61, 85);\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\nh1{\n    font-family:  \"Teko\", sans-serif;\n    color: var(--header-font-color);\n    font-size: 4rem;\n    letter-spacing: 2px;\n    padding-left: 5rem;\n    background-color: var(--header-color);\n}\n\n.main-cont{\n    display: flex;\n    justify-content: center;\n    flex: 1;\n    gap: 5rem;\n    padding-top: 5rem;\n}\n\nh2{\n    font-size: 2rem;\n    color: var(--header-font-color);\n    background-color: var(--header-color);\n    padding: 0.5rem;\n    border-radius: 2px;\n}\n.boards{\n    display: flex;\n    gap: 5rem;\n}\n\n.board{\n    display: grid;\n    width: 25rem;\n    height: 25rem;\n    grid-template-columns: repeat(10, 1fr);\n    border: 1px solid black;\n}\n\n.hidden{\n    display:none;\n}\n.cell{\n    border: 1px solid black;\n}\n\n.ship{\n    background-color:var(--ship-color);\n}\n\n.miss{\n    background-color: red;\n}\n\n.hit{\n    background-color: green;\n}\n\n.ships-cont{\n    display: flex;\n    flex-direction: column;\n    gap: 0.8rem;\n}\nbutton {\n    padding: 0.3rem 0;\n    font-size: 1rem;\n    border: none;\n    border-radius: 2px;\n    cursor: pointer;\n    border:1px solid var(--header-color);\n    transition: background-color 0.3s ease;\n}\n\nbutton:hover {\n    background-color: rgba(0, 0, 0, 0.37);\n}\n\n.ships{\n   display:flex;\n   flex-direction:column;\n   gap: 1rem;\n}\n\n.ship.container{\n   display: flex;\n   width:min-content;\n}\n.segment{\n    border: 1px solid black;\n    width: 2.5rem;\n    height: 2.5rem;\n}\n\n.vertical{\n    flex-direction: column;\n}\n\n.result-cont{\n    display: flex;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(158, 158, 158, 0.7);\n    justify-content: center;\n    align-items: center;\n}\n\n.result-cont > div{\n    color: var(--header-font-color);\n    width: 20rem;\n    height: 13rem;\n    background-color: rgb(97, 95, 95);\n    border: 2px solid var(--ship-color);\n    border-radius: 2px;\n    \n}\n\n.result-cont > div > button{\n    margin-left: 8rem;\n    margin-top: 3rem;\n    padding: 0.5rem ;\n}\n\n.result-cont > div > button:hover{\n    background-color:  var(--ship-color);\n    color: var(--header-font-color);\n}\n.result-cont > div > p{\n    text-align: center;\n    font-size: 4rem;\n    margin-top: 2rem;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    bottom: 0;\n    font-size: 1.2rem;\n    padding: 0.8rem 0;\n    background-color: var(--header-color);\n    color:  var(--header-font-color);\n}\n  `, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _model_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/game.js */ \"./src/model/game.js\");\n\n\n\nlet game = (0,_model_game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\ngame.startGame()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/model/ai.js":
/*!*************************!*\
  !*** ./src/model/ai.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ai: () => (/* binding */ Ai)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/model/player.js\");\n\n\nclass Ai extends _player__WEBPACK_IMPORTED_MODULE_0__.Player{\n\n    constructor(gameboard) {\n        super(gameboard);\n        this.lastAiAttack = [];\n    }\n    \n    aiAttack(player){\n        let row, col;\n        let result = \"\";\n\n        while(result === \"alreadyHit\" || result === \"\") {\n            row = Math.floor(Math.random() * 10);\n            col = Math.floor(Math.random() * 10);\n            result = player.receiveAttack(row, col);\n        }\n        this.lastAiAttack = [row,col];\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/model/ai.js?");

/***/ }),

/***/ "./src/model/fleet.js":
/*!****************************!*\
  !*** ./src/model/fleet.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFleet: () => (/* binding */ createFleet)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/model/ship.js\");\n\n\nconst createFleet = () => [\n    (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(5),\n    (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(4),\n    (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(3),\n    (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(3),\n    (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(2)\n];\n\n\n\n//# sourceURL=webpack://battleship/./src/model/fleet.js?");

/***/ }),

/***/ "./src/model/game.js":
/*!***************************!*\
  !*** ./src/model/game.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/model/player.js\");\n/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ai */ \"./src/model/ai.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ \"./src/model/gameboard.js\");\n/* harmony import */ var _view_boardOp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/boardOp */ \"./src/view/boardOp.js\");\n/* harmony import */ var _view_gameplayView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/gameplayView */ \"./src/view/gameplayView.js\");\n/* harmony import */ var _view_startScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/startScreen */ \"./src/view/startScreen.js\");\n/* harmony import */ var _view_domElements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/domElements */ \"./src/view/domElements.js\");\n/* harmony import */ var _view_eventListeners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view/eventListeners */ \"./src/view/eventListeners.js\");\n\n\n\n\n\n\n\n\n\nlet clickHandler\n\nconst Game = () => {\n    const player1 = new _player__WEBPACK_IMPORTED_MODULE_0__.Player((0,_gameboard__WEBPACK_IMPORTED_MODULE_2__.gameboard)());\n    const aiPlayer = new _ai__WEBPACK_IMPORTED_MODULE_1__.Ai((0,_gameboard__WEBPACK_IMPORTED_MODULE_2__.gameboard)());\n\n    const startGame = () => {\n        (0,_view_startScreen__WEBPACK_IMPORTED_MODULE_5__.startScreen)(player1,aiPlayer);\n\n        (0,_view_boardOp__WEBPACK_IMPORTED_MODULE_3__.displayBoard)(_view_domElements__WEBPACK_IMPORTED_MODULE_6__.elements.player1Board);\n        (0,_view_boardOp__WEBPACK_IMPORTED_MODULE_3__.displayBoard)(_view_domElements__WEBPACK_IMPORTED_MODULE_6__.elements.aiBoard);\n\n        (0,_view_eventListeners__WEBPACK_IMPORTED_MODULE_7__.addDropEventListeners)(player1)\n\n        aiPlayer.playerGameboard.autoPlace(aiPlayer.fleet)\n        \n        clickHandler = (e) => (0,_view_gameplayView__WEBPACK_IMPORTED_MODULE_4__.handlePlayerAttack)(e, player1, aiPlayer);\n        _view_domElements__WEBPACK_IMPORTED_MODULE_6__.elements.aiBoard.addEventListener('click', clickHandler)\n    };\n\n    const resetGame = () => {\n        player1.resetFleet();\n        aiPlayer.resetFleet();\n\n        player1.playerGameboard.resetBoard();\n        aiPlayer.playerGameboard.resetBoard();\n\n        startGame()\n    }\n\n   const endGame = () => {\n    const player1Board = player1.playerGameboard;\n    const aiBoard = aiPlayer.playerGameboard;\n\n    if(player1Board.areAllShipsSunk() || aiBoard.areAllShipsSunk()){\n        let result = \"\";\n        if (player1Board.areAllShipsSunk()) {\n            result = \"You Lost!\";\n        } else if (aiBoard.areAllShipsSunk()) {\n            result = \"You Won!\";\n        } \n        _view_domElements__WEBPACK_IMPORTED_MODULE_6__.elements.aiBoard.removeEventListener('click', clickHandler);\n        (0,_view_gameplayView__WEBPACK_IMPORTED_MODULE_4__.displayResult)(result,player1, aiPlayer)\n        return true\n        }     \n        return false\n    }; \n    return {\n    startGame,\n    resetGame,\n    endGame\n    };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://battleship/./src/model/game.js?");

/***/ }),

/***/ "./src/model/gameboard.js":
/*!********************************!*\
  !*** ./src/model/gameboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameboard: () => (/* binding */ gameboard)\n/* harmony export */ });\nconst gameboard = () => {\n    let board = new Array(10).fill(null).map(() => new Array(10).fill(null));\n\n    const ships = [];\n\n    function placeShip(shipRef,row, col,isVerticalArg){\n        const shipLength = shipRef.length;\n        let isVertical = isVerticalArg;\n\n        if((isVertical && row + shipLength > 10) ||\n           (!isVertical && col + shipLength > 10)\n           ) {\n            return false;\n           };\n\n        for (let i = 0; i < shipLength; i++) {\n            if (isVertical && board[row + i][col] !== null) {\n                return false;\n            } else if (!isVertical && board[row][col + i] !== null) {      \n                return false;\n            }\n        };\n\n        for(let i = 0; i < shipLength; i++){\n            if(isVertical){\n                board[row + i][col] = { shipRef, index: i };\n            }else{\n                board[row][col + i] = { shipRef, index: i };\n            }\n        };\n        ships.push(shipRef);\n\n        return true\n    };\n    \n    function autoPlace(fleet){\n        for (let i = 0; i < fleet.length; i++) {\n            const ship = fleet[i];\n            let isVertical, row, col;\n    \n            do {\n                row = Math.floor(Math.random() * 10);\n                col = Math.floor(Math.random() * 10);\n                isVertical = Math.random() < 0.5;\n            } while (!placeShip(ship, row, col, isVertical));\n        };\n    };\n     \n    function handleBoardAttack(row, col) {\n        if(board[row][col] === null){\n            board[row][col] = \"miss\";\n        }else {\n            if (board[row][col].shipRef){\n                board[row][col].shipRef.hit(board[row][col].index);\n                board[row][col] = \"hit\";\n            }else {\n                return \"alreadyHit\"\n            };\n        };\n        return board[row][col]\n    };\n\n\n    function areAllShipsSunk(){\n        return ships.every(ship => ship.isSunk());\n    };\n\n    function resetBoard(){\n\n        ships.splice(0, ships.length)\n        for (let i = 0; i < board.length; i++) {\n            for (let j = 0; j < board[i].length; j++) {\n              board[i][j] = null;\n            };\n        };\n    };\n\n    return {\n        ships,\n        board,\n        placeShip,\n        autoPlace,\n        handleBoardAttack,\n        areAllShipsSunk,\n        resetBoard\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/model/gameboard.js?");

/***/ }),

/***/ "./src/model/player.js":
/*!*****************************!*\
  !*** ./src/model/player.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _fleet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fleet */ \"./src/model/fleet.js\");\n\nclass Player{\n    constructor(gameboard){\n        this._gameboard = gameboard;\n        this._fleet = (0,_fleet__WEBPACK_IMPORTED_MODULE_0__.createFleet)();\n    }\n\n    receiveAttack(row,col){\n        return this._gameboard.handleBoardAttack(row, col);\n    }\n \n    get playerGameboard() {\n        return this._gameboard;\n    };\n\n    get fleet() {\n        return this._fleet;\n    };\n\n    resetFleet() {\n        this._fleet = (0,_fleet__WEBPACK_IMPORTED_MODULE_0__.createFleet)();\n    };\n};\n\n//# sourceURL=webpack://battleship/./src/model/player.js?");

/***/ }),

/***/ "./src/model/ship.js":
/*!***************************!*\
  !*** ./src/model/ship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ship: () => (/* binding */ ship)\n/* harmony export */ });\nconst ship = (shipLength) => {\n    const length = shipLength;\n    const hits = new Array(length).fill(null);\n    \n    let isVertical = false;\n\n    function getIsVertical(){\n        return isVertical\n    }\n    ;\n    function changeDirection(){\n        isVertical = !isVertical;\n    };\n\n    function hit(position){\n        hits[position] = \"hit\";\n    };\n\n    function isSunk(){\n        return hits.every(hit => hit === \"hit\");\n    };\n\n    return {\n        hits,\n        length,\n        getIsVertical,\n        hit,\n        isSunk,\n        changeDirection\n    };\n};\n\n\n//# sourceURL=webpack://battleship/./src/model/ship.js?");

/***/ }),

/***/ "./src/view/boardOp.js":
/*!*****************************!*\
  !*** ./src/view/boardOp.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayBoard: () => (/* binding */ displayBoard),\n/* harmony export */   updateBoard: () => (/* binding */ updateBoard),\n/* harmony export */   updatePlacedShips: () => (/* binding */ updatePlacedShips)\n/* harmony export */ });\n\nconst displayBoard = (domElement) => {\n    for (let i = 0; i < 10; i++) {\n        for (let j = 0; j < 10; j++) {\n            const cell = document.createElement(\"div\");\n            cell.classList.add(\"cell\");\n            cell.dataset.row = i;\n            cell.dataset.col = j;\n\n            domElement.appendChild(cell);\n        }\n    }\n}\n\nconst updateBoard = (cell, boardCell) => {\n    if(boardCell === \"miss\"){\n        cell.classList.add(\"miss\");\n    }else if(boardCell === \"hit\"){\n        cell.classList.add(\"hit\");\n    };\n};\n\nconst updatePlacedShips = (player) => {\n    const board = player.playerGameboard.board;\n    \n    const cells = document.querySelectorAll(\".cell\");\n\n    for (let i = 0; i < 10; i++) {\n        for (let j = 0; j < 10; j++) {\n            const cellStatus = board[i][j]\n            \n            const index = i * 10 + j ;\n            const cell = cells[index];\n\n            if (cellStatus !== null) {\n                cell.classList.add(\"ship\");\n            };\n           \n        };\n    };\n   \n};\n\n\n\n//# sourceURL=webpack://battleship/./src/view/boardOp.js?");

/***/ }),

/***/ "./src/view/domElements.js":
/*!*********************************!*\
  !*** ./src/view/domElements.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   elements: () => (/* binding */ elements)\n/* harmony export */ });\nconst elements = {\n    mainCont: document.querySelector(\".main-cont\"),\n    player1Board: document.querySelector(\"#player1-board\"),\n    aiBoard: document.querySelector(\"#ai-board\")\n};\n\n//# sourceURL=webpack://battleship/./src/view/domElements.js?");

/***/ }),

/***/ "./src/view/drag.js":
/*!**************************!*\
  !*** ./src/view/drag.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dragStart: () => (/* binding */ dragStart),\n/* harmony export */   handleDragOver: () => (/* binding */ handleDragOver),\n/* harmony export */   handleDrop: () => (/* binding */ handleDrop)\n/* harmony export */ });\n/* harmony import */ var _boardOp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardOp */ \"./src/view/boardOp.js\");\n\n\nfunction dragStart(event) {\n    const shipId = event.target.dataset.ship;\n    event.dataTransfer.setData(\"text\", shipId);\n}\n\nfunction handleDrop(event, player1) {\n    event.preventDefault();\n\n    const shipId = event.dataTransfer.getData(\"text/plain\");\n    \n    const row = parseInt(event.target.dataset.row);\n    const col = parseInt(event.target.dataset.col);\n\n    const ship = player1.fleet[shipId];\n    let shipDirection = ship.getIsVertical();\n\n    const placedShip = player1.playerGameboard.placeShip(ship, row, col,shipDirection);\n \n    if(placedShip){\n        (0,_boardOp__WEBPACK_IMPORTED_MODULE_0__.updatePlacedShips)(player1);\n\n        let shipElement = document.querySelector(`[data-ship=\"${shipId}\"]`);\n        let ships = document.querySelector(\".ships\");\n        ships.removeChild(shipElement);\n\n        if((player1.playerGameboard.ships.length === 5)){\n            document.querySelector(\".start-btn\").classList.remove(\"hidden\");\n        };\n    };\n};\n\n\n\nfunction handleDragOver(event) {\n    event.preventDefault();\n};\n\n//# sourceURL=webpack://battleship/./src/view/drag.js?");

/***/ }),

/***/ "./src/view/eventListeners.js":
/*!************************************!*\
  !*** ./src/view/eventListeners.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDropEventListeners: () => (/* binding */ addDropEventListeners),\n/* harmony export */   autoPlaceShips: () => (/* binding */ autoPlaceShips),\n/* harmony export */   playAgain: () => (/* binding */ playAgain),\n/* harmony export */   resetBoardEvent: () => (/* binding */ resetBoardEvent),\n/* harmony export */   startGameView: () => (/* binding */ startGameView)\n/* harmony export */ });\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ \"./src/view/domElements.js\");\n/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag */ \"./src/view/drag.js\");\n/* harmony import */ var _boardOp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boardOp */ \"./src/view/boardOp.js\");\n/* harmony import */ var _startScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startScreen */ \"./src/view/startScreen.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _gameplayView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameplayView */ \"./src/view/gameplayView.js\");\n\n\n\n\n\n\n\nfunction addDropEventListeners(player){\n    const cells = _domElements__WEBPACK_IMPORTED_MODULE_0__.elements.player1Board.childNodes;\n\n    for(const cell of cells){\n        cell.addEventListener(\"drop\",(event) => (0,_drag__WEBPACK_IMPORTED_MODULE_1__.handleDrop)(event, player));\n        cell.addEventListener(\"dragover\", _drag__WEBPACK_IMPORTED_MODULE_1__.handleDragOver);\n    }\n}\n\nfunction playAgain(player1, aiPlayer) {\n    const resultContainer = document.querySelector(\".result-cont\");\n    resultContainer.remove();\n\n    _domElements__WEBPACK_IMPORTED_MODULE_0__.elements.player1Board.innerHTML=\"\";\n    (0,_gameplayView__WEBPACK_IMPORTED_MODULE_5__.resetBoards)(player1, aiPlayer);\n\n    _index__WEBPACK_IMPORTED_MODULE_4__[\"default\"].resetGame();\n}\n\nfunction autoPlaceShips(player){\n\n    const ships = document.querySelector(\".ships\");\n    const startBtn = document.querySelector(\".start-btn\")\n\n    ships.style.display= \"none\";\n    startBtn.classList.remove(\"hidden\");\n\n    _domElements__WEBPACK_IMPORTED_MODULE_0__.elements.player1Board.innerHTML=\"\";\n    (0,_boardOp__WEBPACK_IMPORTED_MODULE_2__.displayBoard)(_domElements__WEBPACK_IMPORTED_MODULE_0__.elements.player1Board);\n\n    player.playerGameboard.resetBoard();\n    player.playerGameboard.autoPlace(player.fleet);\n    \n    (0,_boardOp__WEBPACK_IMPORTED_MODULE_2__.updatePlacedShips)(player)\n};\n\n\nfunction startGameView(){\n    _domElements__WEBPACK_IMPORTED_MODULE_0__.elements.aiBoard.classList.remove(\"hidden\");\n    document.querySelector(\".ships-cont\").remove();\n};\n\n\nfunction resetBoardEvent(player1){\n    _domElements__WEBPACK_IMPORTED_MODULE_0__.elements.player1Board.innerHTML= \"\";\n    (0,_boardOp__WEBPACK_IMPORTED_MODULE_2__.displayBoard)(_domElements__WEBPACK_IMPORTED_MODULE_0__.elements.player1Board);\n\n    addDropEventListeners(player1);\n\n    player1.playerGameboard.resetBoard();\n\n    let startBtn = document.querySelector(\".start-btn\");\n    startBtn.classList.add(\"hidden\");\n\n    let ships = document.querySelector(\".ships\");\n    const shipsCont = document.querySelector(\".ships-cont\");\n\n    ships.remove();\n\n    ships = (0,_startScreen__WEBPACK_IMPORTED_MODULE_3__.createShips)(player1);\n\n    shipsCont.appendChild(ships);\n};\n\n//# sourceURL=webpack://battleship/./src/view/eventListeners.js?");

/***/ }),

/***/ "./src/view/gameplayView.js":
/*!**********************************!*\
  !*** ./src/view/gameplayView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayResult: () => (/* binding */ displayResult),\n/* harmony export */   handleAiAttack: () => (/* binding */ handleAiAttack),\n/* harmony export */   handlePlayerAttack: () => (/* binding */ handlePlayerAttack),\n/* harmony export */   resetBoards: () => (/* binding */ resetBoards)\n/* harmony export */ });\n/* harmony import */ var _boardOp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardOp */ \"./src/view/boardOp.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners */ \"./src/view/eventListeners.js\");\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domElements */ \"./src/view/domElements.js\");\n\n\n\n\n\n\nfunction handlePlayerAttack(e, player1, aiPlayer){\n    const cell = e.target;\n\n    const row = cell.dataset.row;\n    const col = cell.dataset.col;\n\n    if(cell.classList.contains(\"miss\") ||\n        cell.classList.contains(\"hit\")) {\n        return\n    } \n\n    aiPlayer.receiveAttack(row,col);\n    (0,_boardOp__WEBPACK_IMPORTED_MODULE_0__.updateBoard)(cell,aiPlayer.playerGameboard.board[row][col]);\n    \n    if (!_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].endGame()) {\n        handleAiAttack(player1, aiPlayer);\n        if(_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].endGame()) {\n            return;\n        }\n    }\n}\n\n\nfunction handleAiAttack(player1, aiPlayer){\n\n    aiPlayer.aiAttack(player1);\n    const player1BoardUi = document.querySelector(\"#player1-board\")\n\n    const row = aiPlayer.lastAiAttack[0];\n    const col = aiPlayer.lastAiAttack[1];\n\n    const cell = player1BoardUi.querySelector(`[data-row=\"${row}\"][data-col=\"${col}\"]`)\n    ;(0,_boardOp__WEBPACK_IMPORTED_MODULE_0__.updateBoard)(cell,player1.playerGameboard.board[row][col])\n}\n\n\nfunction displayResult(resultMessage,player1,aiPlayer) {\n    const mainCont = document.querySelector(\".main-cont\")\n\n    const resultContainer = document.createElement(\"div\");\n    resultContainer.classList.add(\"result-cont\")\n\n    const resultMessageElement = document.createElement(\"div\");\n\n    const resultMessagePara = document.createElement(\"p\");\n    resultMessagePara.textContent = resultMessage;\n\n    const playAgainButton = document.createElement(\"button\");\n    playAgainButton.textContent = \"Play Again\";\n    playAgainButton.addEventListener('click', () => (0,_eventListeners__WEBPACK_IMPORTED_MODULE_2__.playAgain)(player1,aiPlayer));\n    \n    resultMessageElement.appendChild(resultMessagePara);\n    resultMessageElement.appendChild(playAgainButton)\n    resultContainer.appendChild(resultMessageElement);\n    mainCont.appendChild(resultContainer);\n\n    const aiBoardUi= document.querySelector(\"#ai-board\")\n    aiBoardUi.removeEventListener('click', handlePlayerAttack);\n}\n\nfunction resetBoards(player1,aiPlayer){\n    _domElements__WEBPACK_IMPORTED_MODULE_3__.elements.player1Board.innerHTML= \"\";\n    _domElements__WEBPACK_IMPORTED_MODULE_3__.elements.aiBoard.innerHTML= \"\";\n\n    (0,_eventListeners__WEBPACK_IMPORTED_MODULE_2__.addDropEventListeners)(player1);\n\n    player1.playerGameboard.resetBoard();\n    aiPlayer.playerGameboard.resetBoard();\n}\n\n\n//# sourceURL=webpack://battleship/./src/view/gameplayView.js?");

/***/ }),

/***/ "./src/view/startScreen.js":
/*!*********************************!*\
  !*** ./src/view/startScreen.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createShips: () => (/* binding */ createShips),\n/* harmony export */   startScreen: () => (/* binding */ startScreen)\n/* harmony export */ });\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ \"./src/view/domElements.js\");\n/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag */ \"./src/view/drag.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners */ \"./src/view/eventListeners.js\");\n\n\n\n\nfunction startScreen(player1,aiPlayer){\n    _domElements__WEBPACK_IMPORTED_MODULE_0__.elements.aiBoard.classList.add(\"hidden\");\n   \n    const shipsCont = document.createElement(\"div\");\n    shipsCont.classList.add(\"ships-cont\");\n\n    const title = document.createElement(\"h2\");\n    title.textContent = \"Place your ships\";\n\n    const info = document.createElement(\"p\");\n    info.textContent = \"* double click to rotate ship\"\n\n    const autoPlaceBtn = document.createElement(\"button\");\n    autoPlaceBtn.textContent= \"Auto-place\";\n    autoPlaceBtn.classList.add(\"autoPlace-btn\")\n\n    const resetBoardBtn = document.createElement(\"button\");\n    resetBoardBtn.textContent= \"Reset Board\";\n    resetBoardBtn.classList.add(\"resetBoard-btn\");\n\n    const startBtn = document.createElement(\"button\");\n    startBtn.textContent= \"Start\";\n    startBtn.classList.add(\"start-btn\");\n    startBtn.classList.add(\"hidden\");\n\n   \n    const ships = createShips(player1);\n\n    shipsCont.appendChild(title);\n    shipsCont.appendChild(info);\n    shipsCont.appendChild(autoPlaceBtn);\n    shipsCont.appendChild(resetBoardBtn);\n    shipsCont.appendChild(startBtn);\n    shipsCont.appendChild(ships);\n    _domElements__WEBPACK_IMPORTED_MODULE_0__.elements.mainCont.appendChild(shipsCont);\n\n    autoPlaceBtn.addEventListener('click', () => (0,_eventListeners__WEBPACK_IMPORTED_MODULE_2__.autoPlaceShips)(player1));\n    resetBoardBtn.addEventListener('click', () => (0,_eventListeners__WEBPACK_IMPORTED_MODULE_2__.resetBoardEvent)(player1))\n\n    startBtn.addEventListener('click', () => (0,_eventListeners__WEBPACK_IMPORTED_MODULE_2__.startGameView)(player1,aiPlayer));\n\n}\n\nfunction createShips(player1) {\n    const ships = document.createElement(\"div\");\n    ships.classList.add(\"ships\");\n\n    const fleet = player1.fleet;\n\n    for (let i = 0; i < fleet.length; i++) {\n        const shipContainer = document.createElement(\"div\");\n        shipContainer.classList.add(\"ship\",\"container\");\n        shipContainer.draggable = true;\n        shipContainer.dataset.ship = `${i}`;\n\n        for (let j = 0; j < fleet[i].length; j++) {\n            const shipSegment = document.createElement(\"div\");\n            shipSegment.classList.add(\"ship\", \"segment\");\n            shipContainer.appendChild(shipSegment);\n        }\n\n        shipContainer.addEventListener('dragstart', _drag__WEBPACK_IMPORTED_MODULE_1__.dragStart);\n        shipContainer.addEventListener('dblclick' , (e) => changeShipDirection(e,player1));\n\n        ships.appendChild(shipContainer);\n    }\n    return ships;\n};\n\nfunction changeShipDirection(e,player1){\n    const shipElement = e.target.parentElement;\n\n    const ship = player1.fleet[shipElement.dataset.ship];\n\n    ship.changeDirection()\n    shipElement.classList.toggle(\"vertical\");\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/view/startScreen.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;