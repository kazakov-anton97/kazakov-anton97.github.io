module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.scss */ "./styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_bootstrap_grid_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/bootstrap-grid.min.css */ "./styles/bootstrap-grid.min.css");
/* harmony import */ var _styles_bootstrap_grid_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_bootstrap_grid_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_bootstrap_reboot_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/bootstrap-reboot.min.css */ "./styles/bootstrap-reboot.min.css");
/* harmony import */ var _styles_bootstrap_reboot_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_bootstrap_reboot_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
var _jsxFileName = "C:\\Users\\Anton\\Documents\\GitHub\\anton.github.io\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function MyApp({
  Component,
  pageProps
}) {
  return __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (_redux_store__WEBPACK_IMPORTED_MODULE_4__["wrapper"].withRedux(MyApp));

/***/ }),

/***/ "./redux/actions.js":
/*!**************************!*\
  !*** ./redux/actions.js ***!
  \**************************/
/*! exports provided: SET_WINDOW, TOGGLE_MENU, OPEN_MENU, ADD_CLASS_TO_CURSOR, REMOVE_CLASS_FROM_CURSOR, HIDE_FULL_SCREEN_VIDEO, SHOW_FULL_SCREEN_VIDEO, SET_MENU_BTN_COLOR, showFullscreenVideo, hideFullscreenVideo, setWindow, toggleMenu, openMenu, addClassToCursor, setMenuBtnColor, removeClassFromCursor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_WINDOW", function() { return SET_WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_MENU", function() { return TOGGLE_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_MENU", function() { return OPEN_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CLASS_TO_CURSOR", function() { return ADD_CLASS_TO_CURSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_CLASS_FROM_CURSOR", function() { return REMOVE_CLASS_FROM_CURSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_FULL_SCREEN_VIDEO", function() { return HIDE_FULL_SCREEN_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_FULL_SCREEN_VIDEO", function() { return SHOW_FULL_SCREEN_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MENU_BTN_COLOR", function() { return SET_MENU_BTN_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showFullscreenVideo", function() { return showFullscreenVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideFullscreenVideo", function() { return hideFullscreenVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWindow", function() { return setWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMenu", function() { return toggleMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openMenu", function() { return openMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClassToCursor", function() { return addClassToCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMenuBtnColor", function() { return setMenuBtnColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClassFromCursor", function() { return removeClassFromCursor; });
const SET_WINDOW = "SET_WINDOW";
const TOGGLE_MENU = "TOGGLE_MENU";
const OPEN_MENU = "OPEN_MENU";
const ADD_CLASS_TO_CURSOR = "ADD_CLASS_TO_CURSOR";
const REMOVE_CLASS_FROM_CURSOR = "REMOVE_CLASS_FROM_CURSOR";
const HIDE_FULL_SCREEN_VIDEO = "HIDE_FULL_SCREEN_VIDEO";
const SHOW_FULL_SCREEN_VIDEO = "SHOW_FULL_SCREEN_VIDEO";
const SET_MENU_BTN_COLOR = "SET_MENU_BTN_COLOR";
function showFullscreenVideo(video_id, video_src, video_type) {
  return {
    type: SHOW_FULL_SCREEN_VIDEO,
    video_id,
    video_src,
    video_type
  };
}
function hideFullscreenVideo() {
  return {
    type: HIDE_FULL_SCREEN_VIDEO
  };
}
function setWindow(windowWidth, windowHeight) {
  return {
    type: SET_WINDOW,
    windowWidth,
    windowHeight
  };
}
function toggleMenu() {
  return {
    type: TOGGLE_MENU
  };
}
function openMenu(bool) {
  return {
    type: OPEN_MENU,
    bool
  };
}
function addClassToCursor(cls) {
  return {
    type: ADD_CLASS_TO_CURSOR,
    cls
  };
}
function setMenuBtnColor(color) {
  return {
    type: SET_MENU_BTN_COLOR,
    color
  };
}
function removeClassFromCursor(cls) {
  return {
    type: REMOVE_CLASS_FROM_CURSOR,
    cls
  };
}

/***/ }),

/***/ "./redux/reducers.js":
/*!***************************!*\
  !*** ./redux/reducers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./redux/actions.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);



function commonReducer(state = {
  menu_btn_color: "black",
  show_fullscreen_video: false,
  video_id: null,
  video_src: null,
  video_type: null,
  windowWidth: 0,
  windowHeight: 0,
  menuOpen: false,
  cursorClasses: []
}, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["SET_MENU_BTN_COLOR"]:
      return Object.assign({}, state, {
        menu_btn_color: action.color
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["SHOW_FULL_SCREEN_VIDEO"]:
      return Object.assign({}, state, {
        show_fullscreen_video: true,
        video_id: action.video_id,
        video_src: action.video_src,
        video_type: action.video_type
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["HIDE_FULL_SCREEN_VIDEO"]:
      return Object.assign({}, state, {
        show_fullscreen_video: false,
        video_id: null,
        video_src: null,
        video_type: null
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["ADD_CLASS_TO_CURSOR"]:
      var cursorClasses = JSON.parse(JSON.stringify(state.cursorClasses));
      if (!cursorClasses.includes(action.cls)) cursorClasses.push(action.cls);
      return Object.assign({}, state, {
        cursorClasses
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_CLASS_FROM_CURSOR"]:
      var cursorClasses = JSON.parse(JSON.stringify(state.cursorClasses));
      var i = cursorClasses.findIndex(cls => cls == action.cls);
      if (i > -1) cursorClasses.splice(i, 1);
      return Object.assign({}, state, {
        cursorClasses
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["OPEN_MENU"]:
      return Object.assign({}, state, {
        menuOpen: action.bool
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_MENU"]:
      return Object.assign({}, state, {
        menuOpen: !state.menuOpen
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["SET_WINDOW"]:
      return Object.assign({}, state, {
        windowWidth: action.windowWidth,
        windowHeight: action.windowHeight
      });

    default:
      return state;
  }
}

const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  common: commonReducer
});
/* harmony default export */ __webpack_exports__["default"] = (combinedReducer);

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./redux/reducers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

const reducer = (state, action) => {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]) {
    const nextState = _objectSpread(_objectSpread({}, state), action.payload);

    if (state.count) nextState.count = state.count; // preserve count value on client side navigation

    return nextState;
  } else {
    return Object(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"])(state, action);
  }
};

const initStore = () => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, bindMiddleware([redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a]));
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(initStore);

/***/ }),

/***/ "./styles/bootstrap-grid.min.css":
/*!***************************************!*\
  !*** ./styles/bootstrap-grid.min.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/bootstrap-reboot.min.css":
/*!*****************************************!*\
  !*** ./styles/bootstrap-reboot.min.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid3JhcHBlciIsIndpdGhSZWR1eCIsIlNFVF9XSU5ET1ciLCJUT0dHTEVfTUVOVSIsIk9QRU5fTUVOVSIsIkFERF9DTEFTU19UT19DVVJTT1IiLCJSRU1PVkVfQ0xBU1NfRlJPTV9DVVJTT1IiLCJISURFX0ZVTExfU0NSRUVOX1ZJREVPIiwiU0hPV19GVUxMX1NDUkVFTl9WSURFTyIsIlNFVF9NRU5VX0JUTl9DT0xPUiIsInNob3dGdWxsc2NyZWVuVmlkZW8iLCJ2aWRlb19pZCIsInZpZGVvX3NyYyIsInZpZGVvX3R5cGUiLCJ0eXBlIiwiaGlkZUZ1bGxzY3JlZW5WaWRlbyIsInNldFdpbmRvdyIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwidG9nZ2xlTWVudSIsIm9wZW5NZW51IiwiYm9vbCIsImFkZENsYXNzVG9DdXJzb3IiLCJjbHMiLCJzZXRNZW51QnRuQ29sb3IiLCJjb2xvciIsInJlbW92ZUNsYXNzRnJvbUN1cnNvciIsImNvbW1vblJlZHVjZXIiLCJzdGF0ZSIsIm1lbnVfYnRuX2NvbG9yIiwic2hvd19mdWxsc2NyZWVuX3ZpZGVvIiwibWVudU9wZW4iLCJjdXJzb3JDbGFzc2VzIiwiYWN0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiaW5jbHVkZXMiLCJwdXNoIiwiaSIsImZpbmRJbmRleCIsInNwbGljZSIsImNvbWJpbmVkUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImNvbW1vbiIsImJpbmRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJyZXF1aXJlIiwiYXBwbHlNaWRkbGV3YXJlIiwicmVkdWNlciIsIkhZRFJBVEUiLCJuZXh0U3RhdGUiLCJwYXlsb2FkIiwiY291bnQiLCJpbml0U3RvcmUiLCJjcmVhdGVTdG9yZSIsInRodW5rTWlkZGxld2FyZSIsImNyZWF0ZVdyYXBwZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7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QU5EOztBQVFBLE1BQU1JLE9BQU8sR0FBRyxDQUFDeEIsS0FBRCxFQUFRSyxNQUFSLEtBQW1CO0FBQ2pDLE1BQUlBLE1BQU0sQ0FBQ25CLElBQVAsS0FBZ0J1QywwREFBcEIsRUFBNkI7QUFDM0IsVUFBTUMsU0FBUyxtQ0FDVjFCLEtBRFUsR0FFVkssTUFBTSxDQUFDc0IsT0FGRyxDQUFmOztBQUlBLFFBQUkzQixLQUFLLENBQUM0QixLQUFWLEVBQWlCRixTQUFTLENBQUNFLEtBQVYsR0FBa0I1QixLQUFLLENBQUM0QixLQUF4QixDQUxVLENBS29COztBQUMvQyxXQUFPRixTQUFQO0FBQ0QsR0FQRCxNQU9PO0FBQ0wsV0FBT1YseURBQWUsQ0FBQ2hCLEtBQUQsRUFBUUssTUFBUixDQUF0QjtBQUNEO0FBQ0YsQ0FYRDs7QUFhQSxNQUFNd0IsU0FBUyxHQUFHLE1BQU07QUFDdEIsU0FBT0MseURBQVcsQ0FBQ04sT0FBRCxFQUFVTCxjQUFjLENBQUMsQ0FBQ1ksa0RBQUQsQ0FBRCxDQUF4QixDQUFsQjtBQUNELENBRkQ7O0FBSU8sTUFBTTNELE9BQU8sR0FBRzRELHdFQUFhLENBQUNILFNBQUQsQ0FBN0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QlAsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5zY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvYm9vdHN0cmFwLWdyaWQubWluLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL2Jvb3RzdHJhcC1yZWJvb3QubWluLmNzcydcbmltcG9ydCB7d3JhcHBlcn0gZnJvbSAnLi4vcmVkdXgvc3RvcmUnO1xuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG59XG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XG4iLCJleHBvcnQgY29uc3QgU0VUX1dJTkRPVyA9IFwiU0VUX1dJTkRPV1wiXG5leHBvcnQgY29uc3QgVE9HR0xFX01FTlUgPSBcIlRPR0dMRV9NRU5VXCJcbmV4cG9ydCBjb25zdCBPUEVOX01FTlUgPSBcIk9QRU5fTUVOVVwiXG5leHBvcnQgY29uc3QgQUREX0NMQVNTX1RPX0NVUlNPUiA9IFwiQUREX0NMQVNTX1RPX0NVUlNPUlwiXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NMQVNTX0ZST01fQ1VSU09SID0gXCJSRU1PVkVfQ0xBU1NfRlJPTV9DVVJTT1JcIlxuZXhwb3J0IGNvbnN0IEhJREVfRlVMTF9TQ1JFRU5fVklERU8gPSBcIkhJREVfRlVMTF9TQ1JFRU5fVklERU9cIlxuZXhwb3J0IGNvbnN0IFNIT1dfRlVMTF9TQ1JFRU5fVklERU8gPSBcIlNIT1dfRlVMTF9TQ1JFRU5fVklERU9cIlxuZXhwb3J0IGNvbnN0IFNFVF9NRU5VX0JUTl9DT0xPUiA9IFwiU0VUX01FTlVfQlROX0NPTE9SXCJcbmV4cG9ydCBmdW5jdGlvbiBzaG93RnVsbHNjcmVlblZpZGVvKHZpZGVvX2lkLCB2aWRlb19zcmMsdmlkZW9fdHlwZSl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTpTSE9XX0ZVTExfU0NSRUVOX1ZJREVPLFxuICAgICAgICB2aWRlb19pZCxcbiAgICAgICAgdmlkZW9fc3JjLFxuICAgICAgICB2aWRlb190eXBlXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVGdWxsc2NyZWVuVmlkZW8oKXtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOkhJREVfRlVMTF9TQ1JFRU5fVklERU9cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0V2luZG93KHdpbmRvd1dpZHRoLHdpbmRvd0hlaWdodCl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTpTRVRfV0lORE9XLFxuICAgICAgICB3aW5kb3dXaWR0aCxcbiAgICAgICAgd2luZG93SGVpZ2h0XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKXtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOlRPR0dMRV9NRU5VXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5NZW51KGJvb2wpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6T1BFTl9NRU5VLFxuICAgICAgICBib29sXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzVG9DdXJzb3IoY2xzKXtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOkFERF9DTEFTU19UT19DVVJTT1IsXG4gICAgICAgIGNsc1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRNZW51QnRuQ29sb3IoY29sb3Ipe1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6U0VUX01FTlVfQlROX0NPTE9SLFxuICAgICAgICBjb2xvclxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzc0Zyb21DdXJzb3IoY2xzKXtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOlJFTU9WRV9DTEFTU19GUk9NX0NVUlNPUixcbiAgICAgICAgY2xzXG4gICAgfVxufSIsImltcG9ydCB7U0VUX1dJTkRPVyxUT0dHTEVfTUVOVSxPUEVOX01FTlUsUkVNT1ZFX0NMQVNTX0ZST01fQ1VSU09SLEFERF9DTEFTU19UT19DVVJTT1IsU0hPV19GVUxMX1NDUkVFTl9WSURFTyxISURFX0ZVTExfU0NSRUVOX1ZJREVPLFNFVF9NRU5VX0JUTl9DT0xPUn0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuZnVuY3Rpb24gY29tbW9uUmVkdWNlcihzdGF0ZT17bWVudV9idG5fY29sb3I6XCJibGFja1wiLHNob3dfZnVsbHNjcmVlbl92aWRlbzpmYWxzZSx2aWRlb19pZDpudWxsLHZpZGVvX3NyYzpudWxsLHZpZGVvX3R5cGU6bnVsbCx3aW5kb3dXaWR0aDowLHdpbmRvd0hlaWdodDowLG1lbnVPcGVuOmZhbHNlLGN1cnNvckNsYXNzZXM6W119LGFjdGlvbil7XG5cdHN3aXRjaChhY3Rpb24udHlwZSl7XG5cdFx0Y2FzZSBTRVRfTUVOVV9CVE5fQ09MT1I6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSxzdGF0ZSx7bWVudV9idG5fY29sb3I6YWN0aW9uLmNvbG9yfSlcblx0XHRjYXNlIFNIT1dfRlVMTF9TQ1JFRU5fVklERU86XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSxzdGF0ZSx7c2hvd19mdWxsc2NyZWVuX3ZpZGVvOnRydWUsdmlkZW9faWQ6YWN0aW9uLnZpZGVvX2lkLHZpZGVvX3NyYzphY3Rpb24udmlkZW9fc3JjLHZpZGVvX3R5cGU6YWN0aW9uLnZpZGVvX3R5cGV9KVxuXHRcdGNhc2UgSElERV9GVUxMX1NDUkVFTl9WSURFTzpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LHN0YXRlLHtzaG93X2Z1bGxzY3JlZW5fdmlkZW86ZmFsc2UsdmlkZW9faWQ6bnVsbCx2aWRlb19zcmM6bnVsbCx2aWRlb190eXBlOm51bGx9KVxuXHRcdGNhc2UgQUREX0NMQVNTX1RPX0NVUlNPUjpcblx0XHRcdHZhciBjdXJzb3JDbGFzc2VzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdGF0ZS5jdXJzb3JDbGFzc2VzKSlcblx0XHRcdGlmKCFjdXJzb3JDbGFzc2VzLmluY2x1ZGVzKGFjdGlvbi5jbHMpKVxuXHRcdFx0XHRjdXJzb3JDbGFzc2VzLnB1c2goYWN0aW9uLmNscylcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LHN0YXRlLHtjdXJzb3JDbGFzc2VzfSlcblx0XHRjYXNlIFJFTU9WRV9DTEFTU19GUk9NX0NVUlNPUjpcblx0XHRcdHZhciBjdXJzb3JDbGFzc2VzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdGF0ZS5jdXJzb3JDbGFzc2VzKSlcblx0XHRcdHZhciBpID0gY3Vyc29yQ2xhc3Nlcy5maW5kSW5kZXgoY2xzPT5jbHM9PWFjdGlvbi5jbHMpXG5cdFx0XHRpZihpID4gLTEpXG5cdFx0XHRcdGN1cnNvckNsYXNzZXMuc3BsaWNlKGksMSlcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LHN0YXRlLHtjdXJzb3JDbGFzc2VzfSlcblx0XHRjYXNlIE9QRU5fTUVOVTpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LHN0YXRlLHttZW51T3BlbjphY3Rpb24uYm9vbH0pXG5cdFx0Y2FzZSBUT0dHTEVfTUVOVTpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LHN0YXRlLHttZW51T3Blbjohc3RhdGUubWVudU9wZW59KVxuXHRcdGNhc2UgU0VUX1dJTkRPVzpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LHN0YXRlLHt3aW5kb3dXaWR0aDphY3Rpb24ud2luZG93V2lkdGgsd2luZG93SGVpZ2h0OmFjdGlvbi53aW5kb3dIZWlnaHR9KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cbmNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG5cdGNvbW1vbjpjb21tb25SZWR1Y2VyLFxufSk7XG5leHBvcnQgZGVmYXVsdCBjb21iaW5lZFJlZHVjZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBIWURSQVRFLCBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCBjb21iaW5lZFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VycydcblxuY29uc3QgYmluZE1pZGRsZXdhcmUgPSAobWlkZGxld2FyZSkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9ID0gcmVxdWlyZSgncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJylcbiAgICByZXR1cm4gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXG4gIH1cbiAgcmV0dXJuIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKVxufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSBIWURSQVRFKSB7XG4gICAgY29uc3QgbmV4dFN0YXRlID0ge1xuICAgICAgLi4uc3RhdGUsIC8vIHVzZSBwcmV2aW91cyBzdGF0ZVxuICAgICAgLi4uYWN0aW9uLnBheWxvYWQsIC8vIGFwcGx5IGRlbHRhIGZyb20gaHlkcmF0aW9uXG4gICAgfVxuICAgIGlmIChzdGF0ZS5jb3VudCkgbmV4dFN0YXRlLmNvdW50ID0gc3RhdGUuY291bnQgLy8gcHJlc2VydmUgY291bnQgdmFsdWUgb24gY2xpZW50IHNpZGUgbmF2aWdhdGlvblxuICAgIHJldHVybiBuZXh0U3RhdGVcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pXG4gIH1cbn1cblxuY29uc3QgaW5pdFN0b3JlID0gKCkgPT4ge1xuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgYmluZE1pZGRsZXdhcmUoW3RodW5rTWlkZGxld2FyZV0pKVxufVxuXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoaW5pdFN0b3JlKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9