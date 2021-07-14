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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/arrow.js":
/*!*****************************!*\
  !*** ./components/arrow.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Arrow; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Anton\\Documents\\GitHub\\anton.github.io\\components\\arrow.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function Arrow(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1135017373" + " " + `pointer ${props.direction}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/images/arrow.svg",
    alt: "image",
    className: "jsx-1135017373" + " " + "arrow-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1135017373",
    __self: this
  }, ".arrow-image.jsx-1135017373{width:2.8rem;}.pointer.left.jsx-1135017373{-webkit-transform:rotate(180deg) translateY(-15px);-ms-transform:rotate(180deg) translateY(-15px);transform:rotate(180deg) translateY(-15px);}.pointer.down.jsx-1135017373{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.pointer.jsx-1135017373{display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25cXERvY3VtZW50c1xcR2l0SHViXFxhbnRvbi5naXRodWIuaW9cXGNvbXBvbmVudHNcXGFycm93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1vQixBQUc2QixBQUlqQixBQUdBLEFBRXlCLGFBUnhCLFFBU0EsK0RBSEEseURBSEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbnRvblxcRG9jdW1lbnRzXFxHaXRIdWJcXGFudG9uLmdpdGh1Yi5pb1xcY29tcG9uZW50c1xcYXJyb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnJvdyhwcm9wcyl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb2ludGVyICR7cHJvcHMuZGlyZWN0aW9ufWB9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2Fycm93LnN2Z1wiIGNsYXNzTmFtZT1cImFycm93LWltYWdlXCJhbHQ9J2ltYWdlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmFycm93LWltYWdle1xuICAgICAgICAgICAgICAgIHdpZHRoOjIuOHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb2ludGVyLmxlZnR7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZVkoLTE1cHgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9pbnRlci5kb3due1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9pbnRlcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApXG59Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Anton\\\\Documents\\\\GitHub\\\\anton.github.io\\\\components\\\\arrow.js */"));
}

/***/ }),

/***/ "./components/clients.js":
/*!*******************************!*\
  !*** ./components/clients.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clients; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-animate-on-scroll */ "react-animate-on-scroll");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Anton\\Documents\\GitHub\\anton.github.io\\components\\clients.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Clients() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2000766857" + " " + "clients padded-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2000766857" + " " + "clients-heading more-letter-spacing futura-light slightly-larger-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "TOP CLIENTS"), __jsx("div", {
    className: "jsx-2000766857" + " " + "client-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2000766857" + " " + "client",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
    animateIn: "scrollFadeIn",
    duration: _config__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_DURATION"],
    animateOnce: true,
    delay: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/clients/bigbanyan.png",
    alt: "image",
    className: "jsx-2000766857",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "jsx-2000766857" + " " + "client",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
    animateIn: "scrollFadeIn",
    duration: _config__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_DURATION"],
    animateOnce: true,
    delay: 100,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/clients/fynd.png",
    alt: "image",
    className: "jsx-2000766857",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "jsx-2000766857" + " " + "client",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
    animateIn: "scrollFadeIn",
    duration: _config__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_DURATION"],
    animateOnce: true,
    delay: 200,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/clients/cellworks.png",
    alt: "image",
    className: "jsx-2000766857",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "jsx-2000766857" + " " + "client",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
    animateIn: "scrollFadeIn",
    duration: _config__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_DURATION"],
    animateOnce: true,
    delay: 300,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/clients/tanishq.png",
    alt: "image",
    className: "jsx-2000766857",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "jsx-2000766857" + " " + "client",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
    animateIn: "scrollFadeIn",
    duration: _config__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_DURATION"],
    animateOnce: true,
    delay: 400,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/clients/chandrika.png",
    alt: "image",
    className: "jsx-2000766857",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "jsx-2000766857" + " " + "client",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
    animateIn: "scrollFadeIn",
    duration: _config__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_DURATION"],
    animateOnce: true,
    delay: 500,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/clients/langoor.png",
    alt: "image",
    className: "jsx-2000766857",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "jsx-2000766857" + " " + "client",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
    animateIn: "scrollFadeIn",
    duration: _config__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_DURATION"],
    animateOnce: true,
    delay: 600,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/clients/iceburg.png",
    alt: "image",
    className: "jsx-2000766857",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "jsx-2000766857" + " " + "client",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
    animateIn: "scrollFadeIn",
    duration: _config__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_DURATION"],
    animateOnce: true,
    delay: 700,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/clients/enchanteur.png",
    alt: "image",
    className: "jsx-2000766857",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "jsx-2000766857" + " " + "client",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
    animateIn: "scrollFadeIn",
    duration: _config__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_DURATION"],
    animateOnce: true,
    delay: 800,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/clients/santoor.png",
    alt: "image",
    className: "jsx-2000766857",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "jsx-2000766857" + " " + "client",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
    animateIn: "scrollFadeIn",
    duration: _config__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_DURATION"],
    animateOnce: true,
    delay: 800,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/clients/kayal.png",
    alt: "image",
    className: "jsx-2000766857",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2000766857",
    __self: this
  }, ".clients.jsx-2000766857{padding-top:5rem;padding-bottom:10rem;background:#ffffff;}.client-list.jsx-2000766857{margin-top:5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;padding-left:5%;padding-right:5%;position:relative;z-index:2;margin-bottom:15rem;}.client.jsx-2000766857{width:20%;padding:0 2.5%;}.client.jsx-2000766857 img.jsx-2000766857{width:100%;}@media only screen and (max-width:768px){.client.jsx-2000766857{width:70%;margin:auto;}.clients.jsx-2000766857{padding-bottom:2rem;}.clients-heading.jsx-2000766857{text-align:center;}.client-list.jsx-2000766857{margin-bottom:7rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25cXERvY3VtZW50c1xcR2l0SHViXFxhbnRvbi5naXRodWIuaW9cXGNvbXBvbmVudHNcXGNsaWVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNERvQixBQUdpQyxBQUtILEFBVU4sQUFJQyxBQUlNLEFBSVUsQUFHSCxBQUdFLFVBakJYLEFBUUksQ0FKcEIsS0FkYyxDQUxVLENBOEJwQixDQUdBLENBTkEsRUFIQSxHQVJKLGFBZnNCLG1CQUN0QixpQ0FJb0IscUVBQ0gsZ0JBQ0MsaUJBQ0Usa0JBQ1IsVUFDVSxvQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbnRvblxcRG9jdW1lbnRzXFxHaXRIdWJcXGFudG9uLmdpdGh1Yi5pb1xcY29tcG9uZW50c1xcY2xpZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSAncmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGwnO1xuaW1wb3J0IHtBTklNQVRJT05fRFVSQVRJT059IGZyb20gJy4uL2NvbmZpZydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsaWVudHMoKXtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudHMgcGFkZGVkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50cy1oZWFkaW5nIG1vcmUtbGV0dGVyLXNwYWNpbmcgZnV0dXJhLWxpZ2h0IHNsaWdodGx5LWxhcmdlci10ZXh0XCI+VE9QIENMSUVOVFM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50LWxpc3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cInNjcm9sbEZhZGVJblwiIGR1cmF0aW9uPXtBTklNQVRJT05fRFVSQVRJT059IGFuaW1hdGVPbmNlPXt0cnVlfSBkZWxheT17MH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY2xpZW50cy9iaWdiYW55YW4ucG5nXCJhbHQ9J2ltYWdlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cInNjcm9sbEZhZGVJblwiIGR1cmF0aW9uPXtBTklNQVRJT05fRFVSQVRJT059IGFuaW1hdGVPbmNlPXt0cnVlfSBkZWxheT17MTAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jbGllbnRzL2Z5bmQucG5nXCJhbHQ9J2ltYWdlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cInNjcm9sbEZhZGVJblwiIGR1cmF0aW9uPXtBTklNQVRJT05fRFVSQVRJT059IGFuaW1hdGVPbmNlPXt0cnVlfSBkZWxheT17MjAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jbGllbnRzL2NlbGx3b3Jrcy5wbmdcImFsdD0naW1hZ2UnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwic2Nyb2xsRmFkZUluXCIgZHVyYXRpb249e0FOSU1BVElPTl9EVVJBVElPTn0gYW5pbWF0ZU9uY2U9e3RydWV9IGRlbGF5PXszMDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NsaWVudHMvdGFuaXNocS5wbmdcImFsdD0naW1hZ2UnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwic2Nyb2xsRmFkZUluXCIgZHVyYXRpb249e0FOSU1BVElPTl9EVVJBVElPTn0gYW5pbWF0ZU9uY2U9e3RydWV9IGRlbGF5PXs0MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NsaWVudHMvY2hhbmRyaWthLnBuZ1wiYWx0PSdpbWFnZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJzY3JvbGxGYWRlSW5cIiBkdXJhdGlvbj17QU5JTUFUSU9OX0RVUkFUSU9OfSBhbmltYXRlT25jZT17dHJ1ZX0gZGVsYXk9ezUwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY2xpZW50cy9sYW5nb29yLnBuZ1wiYWx0PSdpbWFnZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJzY3JvbGxGYWRlSW5cIiBkdXJhdGlvbj17QU5JTUFUSU9OX0RVUkFUSU9OfSBhbmltYXRlT25jZT17dHJ1ZX0gZGVsYXk9ezYwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY2xpZW50cy9pY2VidXJnLnBuZ1wiYWx0PSdpbWFnZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJzY3JvbGxGYWRlSW5cIiBkdXJhdGlvbj17QU5JTUFUSU9OX0RVUkFUSU9OfSBhbmltYXRlT25jZT17dHJ1ZX0gZGVsYXk9ezcwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY2xpZW50cy9lbmNoYW50ZXVyLnBuZ1wiYWx0PSdpbWFnZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJzY3JvbGxGYWRlSW5cIiBkdXJhdGlvbj17QU5JTUFUSU9OX0RVUkFUSU9OfSBhbmltYXRlT25jZT17dHJ1ZX0gZGVsYXk9ezgwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY2xpZW50cy9zYW50b29yLnBuZ1wiIGFsdD0naW1hZ2UnLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJzY3JvbGxGYWRlSW5cIiBkdXJhdGlvbj17QU5JTUFUSU9OX0RVUkFUSU9OfSBhbmltYXRlT25jZT17dHJ1ZX0gZGVsYXk9ezgwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY2xpZW50cy9rYXlhbC5wbmdcIiBhbHQ9J2ltYWdlJy8+XG4gICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY2xpZW50c3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo1cmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjEwcmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jbGllbnQtbGlzdHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1cmVtO1xuICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZmxvdzpyb3cgd3JhcDtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjUlO1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjUlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsaWVudHtcbiAgICAgICAgICAgICAgd2lkdGg6MjAlO1xuICAgICAgICAgICAgICBwYWRkaW5nOjAgMi41JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jbGllbnQgaW1ne1xuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcbiAgICAgICAgICAgICAgICAuY2xpZW50e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jbGllbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jbGllbnRzLWhlYWRpbmd7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY2xpZW50LWxpc3R7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDdyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Anton\\\\Documents\\\\GitHub\\\\anton.github.io\\\\components\\\\clients.js */"));
}

/***/ }),

/***/ "./components/desktopMenu.js":
/*!***********************************!*\
  !*** ./components/desktopMenu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_arrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/arrow */ "./components/arrow.js");
/* harmony import */ var _components_loadingIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/loadingIcon */ "./components/loadingIcon.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions.js");
var _jsxFileName = "C:\\Users\\Anton\\Documents\\GitHub\\anton.github.io\\components\\desktopMenu.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function DesktopMenu(props) {
  var {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  var {
    0: success,
    1: setSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  var {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  var {
    0: messageText,
    1: setMessageText
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  var {
    0: messageTextTouched,
    1: setMessageTextTouched
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  var {
    0: messageTextValid,
    1: setMessageTextValid
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  function mouseOverCursorEffect() {
    props.addClassToCursor("larger");
  }

  function mouseOutCursorEffect() {
    props.removeClassFromCursor("larger");
  }

  function debounce(method, delay) {
    clearTimeout(method._tId);
    method._tId = setTimeout(function () {
      method();
    }, delay);
  }

  function dHandleScroll() {
    let white = false;
    let elements = document.querySelectorAll('.white-menu-btn');

    for (let i = 0; i < elements.length; i++) {
      let boundingVals = elements[i].getBoundingClientRect();

      if (boundingVals.top < 0 && boundingVals.top * -1 < boundingVals.height) {
        white = true;
        break;
      } else {
        white = false;
      }
    }

    if (white) props.setMenuBtnColor("white");else props.setMenuBtnColor("black");
  }

  function handleScroll() {// debounce(dHandleScroll, 50);
    // dHandleScroll()
  }

  function mouseOverWhiteCursor() {
    props.addClassToCursor("white");
  }

  function mouseOutWhiteCursor() {
    props.removeClassFromCursor("white");
  }

  function mouseOverBlackCursor() {
    props.removeClassFromCursor("white");
  }

  function addMouseListeners() {
    document.querySelectorAll('.white-cursor').forEach(ele => {
      ele.addEventListener("mouseenter", mouseOverWhiteCursor);
      ele.addEventListener("mouseleave", mouseOutWhiteCursor);
    });
    document.querySelectorAll('.black-cursor').forEach(ele => {
      ele.addEventListener("mouseenter", mouseOverBlackCursor);
    });
  }

  function removeMouseListeners() {
    document.querySelectorAll('.white-cursor').forEach(ele => {
      ele.removeEventListener("mouseenter", mouseOverWhiteCursor);
      ele.removeEventListener("mouseleave", mouseOutWhiteCursor);
    });
  }

  function setWhiteMenuTriggers() {// document.querySelectorAll('.white-menu-btn').forEach(ele=>{
    //     console.log(ele)
    // })
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // setWhiteMenuTriggers()
    window.addEventListener("scroll", dHandleScroll);
    setTimeout(() => {
      addMouseListeners();
    }, 5000);
    return () => {
      removeMouseListeners();
      window.removeEventListener("scroll", dHandleScroll);
    };
  }, []);

  function sendMessage() {
    if (messageTextValid) {
      setLoading(true);
      fetch(`/api/mail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: messageText
        })
      }).then(res => res.json()).then(result => {
        if (result.status == "success") setSuccess(true);else setError(true);
        setLoading(false);
      }).catch(err => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
    }
  }

  function emailInString(text) {
    var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return re.test(text);
  }

  function validateMessage() {
    if (!emailInString(messageText)) setMessageTextValid(false);else setMessageTextValid(true);
  }

  function onMessageChange(txt) {
    setMessageTextTouched(true);
    setMessageText(txt);
    validateMessage();
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + `desktop-menu white-cursor ${props.common.menuOpen ? "show" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "content-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "col1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "col1-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "menu-logo overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "child",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "/images/MenuLogo.svg",
    alt: "image",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "name overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "child",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 29
    }
  }, "Opposable Thumbs", __jsx("br", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 49
    }
  }), " Independent Agency")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "rights overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "child",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 29
    }
  }, "All Rights Reserved")))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "col2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "menu-heading futura-light overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "child",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 25
    }
  }, "MENU")), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "menu poppins-regular larger-cursor list-style-none larger-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "larger-cursor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 55
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 70
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + `nav-text larger-cursor ${props.page == "home" ? "current" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "a",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 33
    }
  }, "Home"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "b",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 33
    }
  }, "Home"))))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "larger-cursor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 55
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 78
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + `nav-text larger-cursor ${props.page == "projects" ? "current" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "a",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 33
    }
  }, "Projects"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "b",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 33
    }
  }, "Projects"))))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "larger-cursor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 55
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 75
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + `nav-text larger-cursor ${props.page == "about" ? "current" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "a",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 33
    }
  }, "About"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "b",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 33
    }
  }, "About"))))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "larger-cursor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 55
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 78
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + `nav-text larger-cursor ${props.page == "services" ? "current" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "a",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 33
    }
  }, "Services"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "b",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 33
    }
  }, "Services"))))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "larger-cursor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 55
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 77
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + `nav-text larger-cursor ${props.page == "contact" ? "current" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "a",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 33
    }
  }, "Contact"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "b",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 33
    }
  }, "Contact"))))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "larger-cursor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/blog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 55
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 74
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + `nav-text larger-cursor ${props.page == "blog" ? "current" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "a",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 33
    }
  }, "Blog"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "b",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 33
    }
  }, "Blog"))))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "col3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }, success ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 25
    }
  }, "Thank you for your message. We will be in touch soon!") : __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "input-wrapper child position-relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    value: messageText,
    onChange: e => onMessageChange(e.target.value),
    placeholder: "Send a Message",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "contact-input underlined-white-input width-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "contact-arrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 25
    }
  }, loading ? __jsx(_components_loadingIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: "true",
    width: "2.5rem",
    height: "2.5rem",
    weight: "thin",
    centered: "true",
    color: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 33
    }
  }) : __jsx("span", {
    onClick: () => sendMessage(),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 33
    }
  }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 37
    }
  })))), !messageTextValid && messageTextTouched && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "error-msg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 25
    }
  }, "Message should contain an email address."), error && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "error-msg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 25
    }
  }, "There was an unexpected error sending your message.")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "child",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "address",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "address-title slightly-larger-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 29
    }
  }, "Opposable Thumbs"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]) + " " + "address-text futura-book",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 29
    }
  }, "Currently working out of living rooms across India.", __jsx("br", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2368440169", [props.common.windowHeight]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 84
    }
  }), "We\u2019ll update our office address when the world\u2019s a tad safer to live in."))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2368440169",
    dynamic: [props.common.windowHeight],
    __self: this
  }, `.error-msg.__jsx-style-dynamic-selector{text-align:left;}.contact-input.__jsx-style-dynamic-selector{padding-bottom:1rem !important;padding-top:1rem;padding-right:3.5rem;}.contact-arrow.__jsx-style-dynamic-selector{position:absolute;right:0;top:5px;}.address-text.__jsx-style-dynamic-selector{color:#a0a0a0;}.address.__jsx-style-dynamic-selector{margin-top:6rem;}.language.__jsx-style-dynamic-selector{font-family:PoppinsRegular,sans-serif;margin-top:5.5rem;}.name.__jsx-style-dynamic-selector{margin-top:2.2rem;}.rights.__jsx-style-dynamic-selector{color:#96999C;margin-top:0.75rem;}.menu.__jsx-style-dynamic-selector{padding-left:0;margin-top:3.4rem;}.menu-heading.__jsx-style-dynamic-selector{font-size:1.4rem;}.menu.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{-webkit-transform:rotateX(540deg);-ms-transform:rotateX(540deg);transform:rotateX(540deg);-webkit-transition:-webkit-transform 800ms,opacity 500ms;-webkit-transition:transform 800ms,opacity 500ms;transition:transform 800ms,opacity 500ms;-webkit-transition-delay:.3s;transition-delay:.3s;-webkit-transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275);transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275);-webkit-backface-visibility:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden;}.show.__jsx-style-dynamic-selector .menu.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);}.menu.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#ffffff;height:4.9rem;overflow:hidden;display:block;}.nav-text.__jsx-style-dynamic-selector .b.__jsx-style-dynamic-selector{color:#F9ED32;}.nav-text.__jsx-style-dynamic-selector{-webkit-transition:-webkit-transform 1.2s cubic-bezier(.19,1,.22,1);-webkit-transition:transform 1.2s cubic-bezier(.19,1,.22,1);transition:transform 1.2s cubic-bezier(.19,1,.22,1);}.nav-text.current.__jsx-style-dynamic-selector{-webkit-transform:translateY(-5rem);-ms-transform:translateY(-5rem);transform:translateY(-5rem);}.menu.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover span.__jsx-style-dynamic-selector{-webkit-transform:translateY(-105%);-ms-transform:translateY(-105%);transform:translateY(-105%);}.menu.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:none;text-decoration:none;}.col1.__jsx-style-dynamic-selector{text-align:center;font-family:PoppinsRegular,sans-serif;font-size:1.4rem;}.col1-content.__jsx-style-dynamic-selector{text-align:left;margin:auto;display:inline-block;}.desktop-menu.__jsx-style-dynamic-selector{position:fixed;width:100%;z-index:996;background:#000000;height:0;-webkit-transition:height 600ms;transition:height 600ms;-webkit-transition-timing-function:cubic-bezier(0.77,0,0.175,1);transition-timing-function:cubic-bezier(0.77,0,0.175,1);overflow:hidden;color:#ffffff;}.desktop-menu.show.__jsx-style-dynamic-selector{height:${props.common.windowHeight}px;overflow:scroll;}.content-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:14.4rem;}.child.__jsx-style-dynamic-selector{-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform 400ms;-webkit-transition:transform 400ms;transition:transform 400ms;-webkit-transition-timing-function:cubic-bezier(0.165,0.84,0.44,1);transition-timing-function:cubic-bezier(0.165,0.84,0.44,1);-webkit-transition-delay:0s;transition-delay:0s;}.show.__jsx-style-dynamic-selector .child.__jsx-style-dynamic-selector{-webkit-transform:translateY(0%);-ms-transform:translateY(0%);transform:translateY(0%);-webkit-transition-delay:0.3s;transition-delay:0.3s;}.col1.__jsx-style-dynamic-selector{width:32.7%;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}.col2.__jsx-style-dynamic-selector{width:35.65%;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}.col3.__jsx-style-dynamic-selector{width:12.9%;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}@media only screen and (min-width:768px){.menu.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover .nav-text.__jsx-style-dynamic-selector{-webkit-transform:translateY(-5rem);-ms-transform:translateY(-5rem);transform:translateY(-5rem);}}@media only screen and (max-width:768px){.error-msg.__jsx-style-dynamic-selector{text-align:center;}.content-wrapper.__jsx-style-dynamic-selector{-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;padding-top:8rem;padding-left:5%;padding-right:5%;}.col1.__jsx-style-dynamic-selector{width:100%;-webkit-order:3;-ms-flex-order:3;order:3;}.col2.__jsx-style-dynamic-selector{width:100%;-webkit-order:1;-ms-flex-order:1;order:1;text-align:center;}.col3.__jsx-style-dynamic-selector{width:100%;-webkit-order:2;-ms-flex-order:2;order:2;text-align:center;margin-top:3rem;}.menu-logo.__jsx-style-dynamic-selector,.name.__jsx-style-dynamic-selector{display:inline-block;}.col1-content.__jsx-style-dynamic-selector{padding-top:2rem;}.name.__jsx-style-dynamic-selector{font-size:1.2rem;margin-left:1rem;}.rights.__jsx-style-dynamic-selector{text-align:center;font-size:1rem;}.address.__jsx-style-dynamic-selector{margin-top:3rem;}.col3.__jsx-style-dynamic-selector .input-wrapper.__jsx-style-dynamic-selector{width:60%;margin:auto;}.col3.__jsx-style-dynamic-selector .underlined-white-input.__jsx-style-dynamic-selector{width:100%;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25cXERvY3VtZW50c1xcR2l0SHViXFxhbnRvbi5naXRodWIuaW9cXGNvbXBvbmVudHNcXGRlc2t0b3BNZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJPb0IsQUFHZ0MsQUFHZ0IsQUFLYixBQUtMLEFBR0UsQUFHdUIsQUFJcEIsQUFHTCxBQUlDLEFBSUUsQUFHVSxBQVFGLEFBR1gsQUFNQSxBQUd1QyxBQUd4QixBQUdBLEFBR1IsQUFHSCxBQVNGLEFBS0QsQUFXdUIsQUFJekIsQUFJZSxBQU1GLEFBSWQsQUFJQyxBQUlELEFBUXFCLEFBS1gsQUFHTSxBQU1iLEFBSUEsQUFLQSxBQU1VLEFBR0osQUFHQyxBQUlBLEFBSUYsQUFHTCxBQUlDLFVBSEEsQ0FoQ0osQUFJQSxBQUtBLEFBMkJYLENBbEVjLEFBUUEsQ0FKQSxDQXZHbEIsQUFhdUIsQUFzQkwsQUFNbEIsQ0F4QnFCLEFBcURQLENBbkZkLEFBZ0JBLEFBOERlLEFBNkZYLENBeklKLEFBOEhJLEFBR3FCLENBM0piLEFBZVosQUE4QzJDLEFBZ0V2QyxBQWtDa0IsR0FWbEIsQ0FrQkEsSUF0S1EsQUEyRUcsRUFuQ0ssQUE4QkksR0E1RUgsRUF3QnJCLEFBSUEsQUF5SUksQ0E5SkosQUEwSkksSUFqSmlCLEFBa0VDLEFBU0gsTUE1Q0QsSUE5Q00sQ0E0RXhCLENBZEEsRUE2RUksQUFJcUIsQUFLQSxFQXpEekIsRUEzRUEsQUFrRHFCLENBZ0JULENBbkNaLFFBb0M0QixBQTBCNUIsQUFRQSxDQUpBLEVBaEhBLENBK0lJLEFBS21CLEdBOUV2QixDQXVCdUIsVUFyRHZCLEFBMkZ3QixFQWtCcEIsQ0E5Q3NCLEdBdkVvQixHQWlFZixDQUgvQixFQXZDQSxBQUdBLEFBaUVJLEtBU21CLGdCQUNDLEtBbER1QyxZQW1EM0QsS0E5QkoseUNBcERBLGtCQThDa0UsdUNBakUxQyxLQW1ETCxnQkFDRixjQUNqQixlQXBEdUUscUNBaUUvQyxnREFDeEIsbURBakV1QyxtQ0FDUiw4REFDL0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbnRvblxcRG9jdW1lbnRzXFxHaXRIdWJcXGFudG9uLmdpdGh1Yi5pb1xcY29tcG9uZW50c1xcZGVza3RvcE1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEFycm93IGZyb20gJy4uL2NvbXBvbmVudHMvYXJyb3cnXG5pbXBvcnQgTG9hZGluZ0ljb24gZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkaW5nSWNvbidcbmltcG9ydCB7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7YWRkQ2xhc3NUb0N1cnNvcixyZW1vdmVDbGFzc0Zyb21DdXJzb3Isc2V0TWVudUJ0bkNvbG9yfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zJ1xuZnVuY3Rpb24gRGVza3RvcE1lbnUocHJvcHMpe1xuICAgIHZhciBbbG9hZGluZyxzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIHZhciBbc3VjY2VzcyxzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIHZhciBbZXJyb3Isc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgdmFyIFttZXNzYWdlVGV4dCxzZXRNZXNzYWdlVGV4dF0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIHZhciBbbWVzc2FnZVRleHRUb3VjaGVkLHNldE1lc3NhZ2VUZXh0VG91Y2hlZF0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIHZhciBbbWVzc2FnZVRleHRWYWxpZCxzZXRNZXNzYWdlVGV4dFZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGZ1bmN0aW9uIG1vdXNlT3ZlckN1cnNvckVmZmVjdCgpe1xuICAgICAgICBwcm9wcy5hZGRDbGFzc1RvQ3Vyc29yKFwibGFyZ2VyXCIpXG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vdXNlT3V0Q3Vyc29yRWZmZWN0KCl7XG4gICAgICAgIHByb3BzLnJlbW92ZUNsYXNzRnJvbUN1cnNvcihcImxhcmdlclwiKVxuICAgIH1cbiAgICBmdW5jdGlvbiBkZWJvdW5jZShtZXRob2QsIGRlbGF5KSB7XG4gICAgICAgIGNsZWFyVGltZW91dChtZXRob2QuX3RJZCk7XG4gICAgICAgIG1ldGhvZC5fdElkPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBtZXRob2QoKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkSGFuZGxlU2Nyb2xsKCl7XG4gICAgICAgIGxldCB3aGl0ZSA9IGZhbHNlXG4gICAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aGl0ZS1tZW51LWJ0bicpXG4gICAgICAgIGZvcihsZXQgaT0wO2k8ZWxlbWVudHMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBsZXQgYm91bmRpbmdWYWxzID0gZWxlbWVudHNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIGlmKGJvdW5kaW5nVmFscy50b3AgPCAwICYmIChib3VuZGluZ1ZhbHMudG9wICogLTEgPCBib3VuZGluZ1ZhbHMuaGVpZ2h0KSl7XG4gICAgICAgICAgICAgICAgd2hpdGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoaXRlID0gZmFsc2UgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYod2hpdGUpXG4gICAgICAgICAgICBwcm9wcy5zZXRNZW51QnRuQ29sb3IoXCJ3aGl0ZVwiKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBwcm9wcy5zZXRNZW51QnRuQ29sb3IoXCJibGFja1wiKVxuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKXtcbiAgICAgICAgLy8gZGVib3VuY2UoZEhhbmRsZVNjcm9sbCwgNTApO1xuICAgICAgICAvLyBkSGFuZGxlU2Nyb2xsKClcbiAgICB9XG4gICAgZnVuY3Rpb24gbW91c2VPdmVyV2hpdGVDdXJzb3IoKXtcbiAgICAgICAgcHJvcHMuYWRkQ2xhc3NUb0N1cnNvcihcIndoaXRlXCIpXG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vdXNlT3V0V2hpdGVDdXJzb3IoKXtcbiAgICAgICAgcHJvcHMucmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKFwid2hpdGVcIilcbiAgICB9XG4gICAgZnVuY3Rpb24gbW91c2VPdmVyQmxhY2tDdXJzb3IoKXtcbiAgICAgICAgcHJvcHMucmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKFwid2hpdGVcIilcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkTW91c2VMaXN0ZW5lcnMoKXtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aGl0ZS1jdXJzb3InKS5mb3JFYWNoKGVsZT0+e1xuICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLG1vdXNlT3ZlcldoaXRlQ3Vyc29yKVxuICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLG1vdXNlT3V0V2hpdGVDdXJzb3IpXG4gICAgICB9KVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsYWNrLWN1cnNvcicpLmZvckVhY2goZWxlPT57XG4gICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLG1vdXNlT3ZlckJsYWNrQ3Vyc29yKVxuICAgICAgfSlcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTW91c2VMaXN0ZW5lcnMoKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndoaXRlLWN1cnNvcicpLmZvckVhY2goZWxlPT57XG4gICAgICAgICAgICBlbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIixtb3VzZU92ZXJXaGl0ZUN1cnNvcilcbiAgICAgICAgICAgIGVsZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLG1vdXNlT3V0V2hpdGVDdXJzb3IpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFdoaXRlTWVudVRyaWdnZXJzKCl7XG4gICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aGl0ZS1tZW51LWJ0bicpLmZvckVhY2goZWxlPT57XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlbGUpXG4gICAgICAgIC8vIH0pXG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICAvLyBzZXRXaGl0ZU1lbnVUcmlnZ2VycygpXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGRIYW5kbGVTY3JvbGwpXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIGFkZE1vdXNlTGlzdGVuZXJzKClcbiAgICAgICAgfSw1MDAwKVxuICAgICAgICByZXR1cm4gKCk9PntcbiAgICAgICAgICAgIHJlbW92ZU1vdXNlTGlzdGVuZXJzKClcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGRIYW5kbGVTY3JvbGwpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcbiAgICBmdW5jdGlvbiBzZW5kTWVzc2FnZSgpe1xuICAgICAgICBpZihtZXNzYWdlVGV4dFZhbGlkKXtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgICAgIGZldGNoKGAvYXBpL21haWxgLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7bWVzc2FnZTptZXNzYWdlVGV4dH0pIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcz0+cmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdD0+e1xuICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpXG4gICAgICAgICAgICAgICAgICAgIHNldFN1Y2Nlc3ModHJ1ZSlcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKHRydWUpXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycj0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICBzZXRFcnJvcih0cnVlKVxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICB9KSBcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBlbWFpbEluU3RyaW5nKHRleHQpIHsgXG4gICAgICAgIHZhciByZSA9IC8oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKS87XG4gICAgICAgIHJldHVybiByZS50ZXN0KHRleHQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZU1lc3NhZ2UoKXtcbiAgICAgICAgaWYoIWVtYWlsSW5TdHJpbmcobWVzc2FnZVRleHQpKVxuICAgICAgICAgICAgc2V0TWVzc2FnZVRleHRWYWxpZChmYWxzZSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc2V0TWVzc2FnZVRleHRWYWxpZCh0cnVlKSBcbiAgICB9XG4gICAgZnVuY3Rpb24gb25NZXNzYWdlQ2hhbmdlKHR4dCl7XG4gICAgICAgIHNldE1lc3NhZ2VUZXh0VG91Y2hlZCh0cnVlKVxuICAgICAgICBzZXRNZXNzYWdlVGV4dCh0eHQpXG4gICAgICAgIHZhbGlkYXRlTWVzc2FnZSgpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZGVza3RvcC1tZW51IHdoaXRlLWN1cnNvciAke3Byb3BzLmNvbW1vbi5tZW51T3Blbj9cInNob3dcIjpcIlwifWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbDFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wxLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1sb2dvIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL01lbnVMb2dvLnN2Z1wiYWx0PSdpbWFnZScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3Bwb3NhYmxlIFRodW1iczxici8+IEluZGVwZW5kZW50IEFnZW5jeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0cyBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbDJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWhlYWRpbmcgZnV0dXJhLWxpZ2h0IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPk1FTlU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51IHBvcHBpbnMtcmVndWxhciBsYXJnZXItY3Vyc29yIGxpc3Qtc3R5bGUtbm9uZSBsYXJnZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj48TGluayBocmVmPVwiL1wiPjxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2LXRleHQgbGFyZ2VyLWN1cnNvciAke3Byb3BzLnBhZ2U9PVwiaG9tZVwiP1wiY3VycmVudFwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYVwiPkhvbWU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiXCI+SG9tZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj48TGluayBocmVmPVwiL3Byb2plY3RzXCI+PGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXYtdGV4dCBsYXJnZXItY3Vyc29yICR7cHJvcHMucGFnZT09XCJwcm9qZWN0c1wiP1wiY3VycmVudFwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYVwiPlByb2plY3RzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYlwiPlByb2plY3RzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPjxMaW5rIGhyZWY9XCIvYWJvdXRcIj48YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdi10ZXh0IGxhcmdlci1jdXJzb3IgJHtwcm9wcy5wYWdlPT1cImFib3V0XCI/XCJjdXJyZW50XCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhXCI+QWJvdXQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiXCI+QWJvdXQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+PExpbmsgaHJlZj1cIi9zZXJ2aWNlc1wiPjxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2LXRleHQgbGFyZ2VyLWN1cnNvciAke3Byb3BzLnBhZ2U9PVwic2VydmljZXNcIj9cImN1cnJlbnRcIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFcIj5TZXJ2aWNlczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJcIj5TZXJ2aWNlczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj48TGluayBocmVmPVwiL2NvbnRhY3RcIj48YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdi10ZXh0IGxhcmdlci1jdXJzb3IgJHtwcm9wcy5wYWdlPT1cImNvbnRhY3RcIj9cImN1cnJlbnRcIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFcIj5Db250YWN0PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYlwiPkNvbnRhY3Q8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+PExpbmsgaHJlZj1cIi9ibG9nXCI+PGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXYtdGV4dCBsYXJnZXItY3Vyc29yICR7cHJvcHMucGFnZT09XCJibG9nXCI/XCJjdXJyZW50XCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhXCI+QmxvZzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJcIj5CbG9nPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAge3N1Y2Nlc3M/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoYW5rIHlvdSBmb3IgeW91ciBtZXNzYWdlLiBXZSB3aWxsIGJlIGluIHRvdWNoIHNvb24hPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyIGNoaWxkIHBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bWVzc2FnZVRleHR9IG9uQ2hhbmdlPXsoZSk9Pm9uTWVzc2FnZUNoYW5nZShlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiU2VuZCBhIE1lc3NhZ2VcIiBjbGFzc05hbWU9XCJjb250YWN0LWlucHV0IHVuZGVybGluZWQtd2hpdGUtaW5wdXQgd2lkdGgtMTAwXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmc/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSWNvbiBzaG93PVwidHJ1ZVwiIHdpZHRoPVwiMi41cmVtXCIgaGVpZ2h0PVwiMi41cmVtXCIgd2VpZ2h0PVwidGhpblwiIGNlbnRlcmVkPVwidHJ1ZVwiIGNvbG9yPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCk9PnNlbmRNZXNzYWdlKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeyFtZXNzYWdlVGV4dFZhbGlkICYmIG1lc3NhZ2VUZXh0VG91Y2hlZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tc2dcIj5NZXNzYWdlIHNob3VsZCBjb250YWluIGFuIGVtYWlsIGFkZHJlc3MuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge2Vycm9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLW1zZ1wiPlRoZXJlIHdhcyBhbiB1bmV4cGVjdGVkIGVycm9yIHNlbmRpbmcgeW91ciBtZXNzYWdlLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZ3VhZ2VcIj5MYW5ndWFnZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzLXRpdGxlIHNsaWdodGx5LWxhcmdlci10ZXh0XCI+T3Bwb3NhYmxlIFRodW1iczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzcy10ZXh0IGZ1dHVyYS1ib29rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbnRseSB3b3JraW5nIG91dCBvZiBsaXZpbmcgcm9vbXMgYWNyb3NzIEluZGlhLjxiciAvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2XigJlsbCB1cGRhdGUgb3VyIG9mZmljZSBhZGRyZXNzIHdoZW4gdGhlIHdvcmxk4oCZcyBhIHRhZCBzYWZlciB0byBsaXZlIGluLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5lcnJvci1tc2d7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3QtaW5wdXR7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjMuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0LWFycm93e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hZGRyZXNzLXRleHR7XG4gICAgICAgICAgICAgICAgY29sb3I6I2EwYTBhMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hZGRyZXNze1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sYW5ndWFnZXtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGluc1JlZ3VsYXIsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjUuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYW1le1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIuMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yaWdodHN7XG4gICAgICAgICAgICAgICAgY29sb3I6Izk2OTk5QztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnV7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDozLjRyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1oZWFkaW5ne1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjRyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSBsaXtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoNTQwZGVnKTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODAwbXMsIG9wYWNpdHkgNTAwbXM7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTouM3M7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2hvdyAubWVudSBsaXtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSBsaSBhe1xuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0LjlyZW07XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYtdGV4dCAuYntcbiAgICAgICAgICAgICAgICBjb2xvcjojRjlFRDMyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdi10ZXh0e1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjJzIGN1YmljLWJlemllciguMTksMSwuMjIsMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2LXRleHQuY3VycmVudHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgbGkgYTpob3ZlciBzcGFue1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTA1JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSBsaSBhOmhvdmVye1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbDF7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zUmVndWxhcixzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICBmb250LXNpemU6MS40cmVtO1xuICAgICAgICAgICAgICAgIC8vIGZvbnQtZmFtaWx5OiBOZXVmcmVpdCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBGdXR1cmFMaWdodCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBGdXR1cmFCb29rLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIC8vZm9udC1mYW1pbHk6IEZ1dHVyYU1EQlQsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29sMS1jb250ZW50e1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW46YXV0bztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXNrdG9wLW1lbnV7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICB6LWluZGV4Ojk5NjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMwMDAwMDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OjA7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDYwMG1zO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NywgMCwgMC4xNzUsIDEpO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRlc2t0b3AtbWVudS5zaG93e1xuICAgICAgICAgICAgICAgIGhlaWdodDoke3Byb3BzLmNvbW1vbi53aW5kb3dIZWlnaHR9cHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6c2Nyb2xsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnQtd3JhcHBlcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MTQuNHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGlsZHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNob3cgLmNoaWxke1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb2wxe1xuICAgICAgICAgICAgICAgIHdpZHRoOjMyLjclO1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbDJ7XG4gICAgICAgICAgICAgICAgd2lkdGg6MzUuNjUlO1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbDN7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTIuOSU7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAudW5kZXJsaW5lZC13aGl0ZS1pbnB1dHtcbiAgICAgICAgICAgIC8vICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCl7XG4gICAgICAgICAgICAgICAgLm1lbnUgbGkgYTpob3ZlciAubmF2LXRleHR7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXJlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcbiAgICAgICAgICAgICAgICAuZXJyb3ItbXNne1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRlbnQtd3JhcHBlcntcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OmNvbHVtbiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjhyZW07XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDo1JTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDo1JTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbDF7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOjM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb2wye1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICBvcmRlcjoxO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbDN7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOjI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjNyZW07XG4gICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgICAgIC5tZW51LWxvZ28sLm5hbWV7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29sMS1jb250ZW50e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoycmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmFtZXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmlnaHRze1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjFyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hZGRyZXNze1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjNyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb2wzIC5pbnB1dC13cmFwcGVye1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46YXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbDMgLnVuZGVybGluZWQtd2hpdGUtaW5wdXR7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoe2NvbW1vbn0pe1xuICAgIHJldHVybiB7Y29tbW9ufVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMse2FkZENsYXNzVG9DdXJzb3IscmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yLHNldE1lbnVCdG5Db2xvcn0pKERlc2t0b3BNZW51KSJdfQ== */
/*@ sourceURL=C:\\Users\\Anton\\Documents\\GitHub\\anton.github.io\\components\\desktopMenu.js */`));
}

function mapStateToProps({
  common
}) {
  return {
    common
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  addClassToCursor: _redux_actions__WEBPACK_IMPORTED_MODULE_6__["addClassToCursor"],
  removeClassFromCursor: _redux_actions__WEBPACK_IMPORTED_MODULE_6__["removeClassFromCursor"],
  setMenuBtnColor: _redux_actions__WEBPACK_IMPORTED_MODULE_6__["setMenuBtnColor"]
})(DesktopMenu));

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loadingIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadingIcon */ "./components/loadingIcon.js");
var _jsxFileName = "C:\\Users\\Anton\\Documents\\GitHub\\anton.github.io\\components\\footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Footer(props) {
  var {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  var {
    0: success,
    1: setSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  var {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  var {
    0: messageText,
    1: setMessageText
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  var {
    0: messageTextTouched,
    1: setMessageTextTouched
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  var {
    0: messageTextValid,
    1: setMessageTextValid
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const btnContent = loading ? __jsx(_loadingIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    show: "true",
    width: "3rem",
    height: "3rem",
    weight: "thin",
    centered: "true",
    color: `${props.type == "yellow" ? "white" : "black"}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 32
    }
  }) : "SEND";

  function sendMessage() {
    if (messageTextValid) {
      setLoading(true);
      fetch(`/api/mail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: messageText
        })
      }).then(res => res.json()).then(result => {
        if (result.status == "success") setSuccess(true);else setError(true);
        setLoading(false);
      }).catch(err => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
    }
  }

  function emailInString(text) {
    var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return re.test(text);
  }

  function validateMessage() {
    if (!emailInString(messageText)) setMessageTextValid(false);else setMessageTextValid(true);
  }

  function onMessageChange(txt) {
    setMessageText(txt);
    setMessageTextTouched(true);
    validateMessage();
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("footer", {
    className: "jsx-3994500338" + " " + `padded-content ${props.type == "yellow" ? "yellow" : "black white-menu-btn white-cursor"} ${props.noWaveDesktop ? "no-wave-desktop" : ""} ${props.noWaveMobile ? "no-wave-mobile" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3994500338" + " " + "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-3994500338" + " " + "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-3994500338" + " " + "footer-col left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-3994500338" + " " + "address-heading bigger-caslon-letter-spacing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  }, "Address"), __jsx("div", {
    className: "jsx-3994500338" + " " + "address",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "jsx-3994500338" + " " + "address-title slightly-larger-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 33
    }
  }, "Opposable Thumbs"), __jsx("div", {
    className: "jsx-3994500338" + " " + "addr futura-book",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }, "Currently working out of living rooms across India.", __jsx("br", {
    className: "jsx-3994500338" + " " + "hide-desktop show-mobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 88
    }
  }), " We\u2019ll update our office address when the world\u2019s ", __jsx("br", {
    className: "jsx-3994500338" + " " + "hide-desktop show-mobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 181
    }
  }), "a tad safer to live in.")), __jsx("div", {
    className: "jsx-3994500338" + " " + "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, "info@opposablethumbs.in"))), __jsx("div", {
    className: "jsx-3994500338" + " " + "col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-3994500338" + " " + "footer-col right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-3994500338" + " " + "footer-right-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "jsx-3994500338" + " " + "contact-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }, success ? __jsx("div", {
    className: "jsx-3994500338",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 41
    }
  }, "Thank you for your message. We will be in touch soon!") : __jsx("div", {
    className: "jsx-3994500338",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 37
    }
  }, props.type == "yellow" ? __jsx("input", {
    value: messageText,
    onChange: e => onMessageChange(e.target.value),
    type: "text",
    placeholder: "Message",
    className: "jsx-3994500338" + " " + "underlined-black-input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 45
    }
  }) : __jsx("input", {
    value: messageText,
    onChange: e => onMessageChange(e.target.value),
    type: "text",
    placeholder: "Message",
    className: "jsx-3994500338" + " " + "underlined-white-input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 45
    }
  }), __jsx("button", {
    type: "button",
    onClick: () => sendMessage(),
    className: "jsx-3994500338" + " " + `btn btn-white btn-send ${props.type == "yellow" ? "btn-black" : "btn-white"}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 41
    }
  }, btnContent), !messageTextValid && messageTextTouched && __jsx("div", {
    className: "jsx-3994500338" + " " + "error-msg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 45
    }
  }, "Message should contain an email address."), error && __jsx("div", {
    className: "jsx-3994500338" + " " + "error-msg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 45
    }
  }, "There was an unexpected error sending your message."))), __jsx("div", {
    className: "jsx-3994500338" + " " + "social slightly-larger-text futura-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 33
    }
  }, __jsx("ul", {
    className: "jsx-3994500338",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 37
    }
  }, __jsx("li", {
    className: "jsx-3994500338",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 41
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/opposable_thumbs_official/",
    target: "_blank",
    className: "jsx-3994500338",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 45
    }
  }, "INSTAGRAM")), __jsx("li", {
    className: "jsx-3994500338",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 41
    }
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/opposable-thumbs-bb1a9a1b4/",
    target: "_blank",
    className: "jsx-3994500338",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 45
    }
  }, "LINKEDIN")), __jsx("li", {
    className: "jsx-3994500338",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 41
    }
  }, __jsx("a", {
    href: "https://www.facebook.com/opposable.thumbs.750",
    target: "_blank",
    className: "jsx-3994500338",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 45
    }
  }, "FACEBOOK")), __jsx("li", {
    className: "jsx-3994500338",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 41
    }
  }, __jsx("a", {
    href: "https://vimeo.com/user97735237",
    target: "_blank",
    className: "jsx-3994500338",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 45
    }
  }, "VIMEO"))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3994500338",
    __self: this
  }, ".error-msg.jsx-3994500338{text-align:left;}.social.jsx-3994500338 a.jsx-3994500338{color:inherit;}.social.jsx-3994500338 a.jsx-3994500338:hover{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.underlined-white-input.jsx-3994500338,.underlined-black-input.jsx-3994500338{width:35rem;max-width:100%;-webkit-transform:translateY(0.75rem);-ms-transform:translateY(0.75rem);transform:translateY(0.75rem);}.contact-form.jsx-3994500338{margin-top:12rem;}.contact-form.jsx-3994500338 .underlined-white-input.jsx-3994500338,.contact-form.jsx-3994500338 .underlined-black-input.jsx-3994500338{margin-right:2rem;}.social.jsx-3994500338{margin-top:10rem;}.social.jsx-3994500338 ul.jsx-3994500338 li.jsx-3994500338{display:inline-block;-webkit-letter-spacing:4.25px;-moz-letter-spacing:4.25px;-ms-letter-spacing:4.25px;letter-spacing:4.25px;}.social.jsx-3994500338 ul.jsx-3994500338 li.jsx-3994500338:not(:last-child){margin-right:5rem;}.social.jsx-3994500338 ul.jsx-3994500338{list-style:none;padding-left:0;}.google-map-link.jsx-3994500338 a.jsx-3994500338{color:inherit;}footer.yellow.jsx-3994500338 .address-heading.jsx-3994500338{color:#010101;}footer.black.jsx-3994500338 .address-heading.jsx-3994500338{color:#ffffff;}.address.jsx-3994500338{margin-top:4.1rem;}footer.black.jsx-3994500338{color:#ffffff;background:#000000;}footer.yellow.jsx-3994500338{color:#000000;background:#ffff20;}footer.jsx-3994500338{width:100%;padding-top:4rem;padding-bottom:5rem;}.email.jsx-3994500338{margin-top:5.2rem;}.footer-col.left.jsx-3994500338{margin-left:10%;}.footer-col.right.jsx-3994500338{text-align:right;}.footer-right-wrap.jsx-3994500338{display:inline-block;text-align:center;}footer.no-wave-desktop.jsx-3994500338{padding-top:10rem;}@media only screen and (max-width:1260px){.social.jsx-3994500338 ul.jsx-3994500338 li.jsx-3994500338:not(:last-child){margin-right:3rem;}.btn-send.jsx-3994500338{margin-top:3rem;width:auto;}.error-msg.jsx-3994500338{text-align:center;}}@media only screen and (max-width:768px){.contact-form.jsx-3994500338{margin-top:6rem;margin-left:10%;margin-right:10%;}.btn-send.jsx-3994500338{margin-top:5rem;width:100%;}.social.jsx-3994500338{margin-top:9rem;text-align:center;}.social.jsx-3994500338 ul.jsx-3994500338 li.jsx-3994500338{margin-right:0 !important;display:block;margin-top:6.4rem;}.footer-col.right.jsx-3994500338{text-align:center;}.footer-col.left.jsx-3994500338{text-align:center;margin-left:0;}.footer-right-wrap.jsx-3994500338{display:block;text-align:center;}.error-msg.jsx-3994500338{text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25cXERvY3VtZW50c1xcR2l0SHViXFxhbnRvbi5naXRodWIuaW9cXGNvbXBvbmVudHNcXGZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyR3dCLEFBR29DLEFBR0YsQUFHQSxBQUlGLEFBS00sQUFHQSxBQUdBLEFBR0csQUFJRixBQUdILEFBSUYsQUFHQSxBQUdBLEFBR0ksQUFHSixBQUlBLEFBTUgsQUFNTyxBQUdGLEFBR0MsQUFHSSxBQUlILEFBSUksQUFHRCxBQUlDLEFBS0QsQUFLQSxBQUlELEFBSVcsQUFLVCxBQUdBLEFBSUosQUFJSSxXQTlETCxDQWhERCxFQVBuQixBQUd3QixBQTZCeEIsQUFHQSxBQUdBLEFBTXNCLEFBSUEsQUFrRUcsRUFySHpCLEFBK0JrQixBQW1DbEIsQUFpQm1CLEFBU0ksQUFLSixBQUlNLENBdEZ6QixBQU1BLEFBZ0RBLENBbkRBLEFBVUEsQUFnQkEsQUFtQkEsQUFhQSxBQUlJLEFBT0EsQUF1QkEsQUFHaUIsQUFRakIsR0FqR3FCLEFBZ0RKLEtBaUNBLENBOUZhLEFBeUU5QixBQWNBLENBdkNtQixHQTNCdkIsQ0E2RHdCLEFBcUJwQixBQUlBLENBdEVKLEFBSUEsQ0FrREksS0E3QkosQ0FpQ3lCLFFBOUN6QixDQWtDSSxTQWFBLE1BcEdKLDhEQWtCQSxHQWJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQW50b25cXERvY3VtZW50c1xcR2l0SHViXFxhbnRvbi5naXRodWIuaW9cXGNvbXBvbmVudHNcXGZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2FkaW5nSWNvbiBmcm9tICcuL2xvYWRpbmdJY29uJ1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIocHJvcHMpe1xuICAgIHZhciBbbG9hZGluZyxzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIHZhciBbc3VjY2VzcyxzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIHZhciBbZXJyb3Isc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgdmFyIFttZXNzYWdlVGV4dCxzZXRNZXNzYWdlVGV4dF0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIHZhciBbbWVzc2FnZVRleHRUb3VjaGVkLHNldE1lc3NhZ2VUZXh0VG91Y2hlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICB2YXIgW21lc3NhZ2VUZXh0VmFsaWQsc2V0TWVzc2FnZVRleHRWYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBidG5Db250ZW50ID0gbG9hZGluZz88TG9hZGluZ0ljb24gc2hvdz1cInRydWVcIiB3aWR0aD1cIjNyZW1cIiBoZWlnaHQ9XCIzcmVtXCIgd2VpZ2h0PVwidGhpblwiIGNlbnRlcmVkPVwidHJ1ZVwiIGNvbG9yPXtgJHtwcm9wcy50eXBlPT1cInllbGxvd1wiP1wid2hpdGVcIjpcImJsYWNrXCJ9YH0gLz46XCJTRU5EXCJcbiAgICBmdW5jdGlvbiBzZW5kTWVzc2FnZSgpe1xuICAgICAgICBpZihtZXNzYWdlVGV4dFZhbGlkKXtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgICAgIGZldGNoKGAvYXBpL21haWxgLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7bWVzc2FnZTptZXNzYWdlVGV4dH0pIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcz0+cmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdD0+e1xuICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpXG4gICAgICAgICAgICAgICAgICAgIHNldFN1Y2Nlc3ModHJ1ZSlcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKHRydWUpXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycj0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICBzZXRFcnJvcih0cnVlKVxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICB9KSBcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBlbWFpbEluU3RyaW5nKHRleHQpIHsgXG4gICAgICAgIHZhciByZSA9IC8oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKS87XG4gICAgICAgIHJldHVybiByZS50ZXN0KHRleHQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZU1lc3NhZ2UoKXtcbiAgICAgICAgaWYoIWVtYWlsSW5TdHJpbmcobWVzc2FnZVRleHQpKVxuICAgICAgICAgICAgc2V0TWVzc2FnZVRleHRWYWxpZChmYWxzZSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc2V0TWVzc2FnZVRleHRWYWxpZCh0cnVlKSBcbiAgICB9XG4gICAgZnVuY3Rpb24gb25NZXNzYWdlQ2hhbmdlKHR4dCl7XG4gICAgICAgIHNldE1lc3NhZ2VUZXh0KHR4dClcbiAgICAgICAgc2V0TWVzc2FnZVRleHRUb3VjaGVkKHRydWUpXG4gICAgICAgIHZhbGlkYXRlTWVzc2FnZSgpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17YHBhZGRlZC1jb250ZW50ICR7cHJvcHMudHlwZT09XCJ5ZWxsb3dcIj9cInllbGxvd1wiOlwiYmxhY2sgd2hpdGUtbWVudS1idG4gd2hpdGUtY3Vyc29yXCJ9ICR7cHJvcHMubm9XYXZlRGVza3RvcD9cIm5vLXdhdmUtZGVza3RvcFwiOlwiXCJ9ICR7cHJvcHMubm9XYXZlTW9iaWxlP1wibm8td2F2ZS1tb2JpbGVcIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29sIGxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZHJlc3MtaGVhZGluZyBiaWdnZXItY2FzbG9uLWxldHRlci1zcGFjaW5nXCI+QWRkcmVzczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZHJlc3MtdGl0bGUgc2xpZ2h0bHktbGFyZ2VyLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wcG9zYWJsZSBUaHVtYnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkciBmdXR1cmEtYm9va1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VycmVudGx5IHdvcmtpbmcgb3V0IG9mIGxpdmluZyByb29tcyBhY3Jvc3MgSW5kaWEuPGJyIGNsYXNzTmFtZT1cImhpZGUtZGVza3RvcCBzaG93LW1vYmlsZVwiIC8+IFdl4oCZbGwgdXBkYXRlIG91ciBvZmZpY2UgYWRkcmVzcyB3aGVuIHRoZSB3b3JsZOKAmXMgPGJyIGNsYXNzTmFtZT1cImhpZGUtZGVza3RvcCBzaG93LW1vYmlsZVwiIC8+YSB0YWQgc2FmZXIgdG8gbGl2ZSBpbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImdvb2dsZS1tYXAtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Hb29nbGUgTWFwPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWFpbFwiPmluZm9Ab3Bwb3NhYmxldGh1bWJzLmluPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbCByaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXJpZ2h0LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWNjZXNzP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+VGhhbmsgeW91IGZvciB5b3VyIG1lc3NhZ2UuIFdlIHdpbGwgYmUgaW4gdG91Y2ggc29vbiE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnR5cGU9PVwieWVsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bWVzc2FnZVRleHR9IG9uQ2hhbmdlPXsoZSk9Pm9uTWVzc2FnZUNoYW5nZShlLnRhcmdldC52YWx1ZSl9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCIgY2xhc3NOYW1lPVwidW5kZXJsaW5lZC1ibGFjay1pbnB1dFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bWVzc2FnZVRleHR9IG9uQ2hhbmdlPXsoZSk9Pm9uTWVzc2FnZUNoYW5nZShlLnRhcmdldC52YWx1ZSl9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCIgY2xhc3NOYW1lPVwidW5kZXJsaW5lZC13aGl0ZS1pbnB1dFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtgYnRuIGJ0bi13aGl0ZSBidG4tc2VuZCAke3Byb3BzLnR5cGU9PVwieWVsbG93XCI/XCJidG4tYmxhY2tcIjpcImJ0bi13aGl0ZVwifWB9IG9uQ2xpY2s9eygpPT5zZW5kTWVzc2FnZSgpfT57YnRuQ29udGVudH08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW1lc3NhZ2VUZXh0VmFsaWQgJiYgbWVzc2FnZVRleHRUb3VjaGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItbXNnXCI+TWVzc2FnZSBzaG91bGQgY29udGFpbiBhbiBlbWFpbCBhZGRyZXNzLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tc2dcIj5UaGVyZSB3YXMgYW4gdW5leHBlY3RlZCBlcnJvciBzZW5kaW5nIHlvdXIgbWVzc2FnZS48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsIHNsaWdodGx5LWxhcmdlci10ZXh0IGZ1dHVyYS1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9vcHBvc2FibGVfdGh1bWJzX29mZmljaWFsL1wiIHRhcmdldD1cIl9ibGFua1wiPklOU1RBR1JBTTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL29wcG9zYWJsZS10aHVtYnMtYmIxYTlhMWI0L1wiIHRhcmdldD1cIl9ibGFua1wiPkxJTktFRElOPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vb3Bwb3NhYmxlLnRodW1icy43NTBcIiB0YXJnZXQ9XCJfYmxhbmtcIj5GQUNFQk9PSzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly92aW1lby5jb20vdXNlcjk3NzM1MjM3XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VklNRU88L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmVycm9yLW1zZ3tcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc29jaWFsIGF7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOmluaGVyaXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zb2NpYWwgYTpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6aW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC51bmRlcmxpbmVkLXdoaXRlLWlucHV0LC51bmRlcmxpbmVkLWJsYWNrLWlucHV0e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDozNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC43NXJlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb250YWN0LWZvcm17XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGFjdC1mb3JtIC51bmRlcmxpbmVkLXdoaXRlLWlucHV0LC5jb250YWN0LWZvcm0gLnVuZGVybGluZWQtYmxhY2staW5wdXR7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDoycmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc29jaWFse1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNvY2lhbCB1bCBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzo0LjI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zb2NpYWwgdWwgbGk6bm90KDpsYXN0LWNoaWxkKXtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc29jaWFsIHVse1xuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZ29vZ2xlLW1hcC1saW5rIGF7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOmluaGVyaXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3Rlci55ZWxsb3cgLmFkZHJlc3MtaGVhZGluZ3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IzAxMDEwMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyLmJsYWNrIC5hZGRyZXNzLWhlYWRpbmd7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hZGRyZXNze1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjQuMXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyLmJsYWNre1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjojZmZmZmZmO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMwMDAwMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3Rlci55ZWxsb3d7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiMwMDAwMDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZmYyMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVye1xuICAgICAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgLy8gYm90dG9tOjA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIC8vei1pbmRleDoxO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo0cmVtO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo1cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZW1haWx7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NS4ycmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZm9vdGVyLWNvbC5sZWZ0e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5mb290ZXItY29sLnJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZm9vdGVyLXJpZ2h0LXdyYXB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyLm5vLXdhdmUtZGVza3RvcHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MTByZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjYwcHgpe1xuICAgICAgICAgICAgICAgICAgICAuc29jaWFsIHVsIGxpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjNyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1zZW5ke1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5lcnJvci1tc2d7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpe1xuICAgICAgICAgICAgICAgICAgICAuY29udGFjdC1mb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDZyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5idG4tc2VuZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc29jaWFse1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo5cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNvY2lhbCB1bCBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjYuNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLWNvbC5yaWdodHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXItY29sLmxlZnR7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci1yaWdodC13cmFwe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5lcnJvci1tc2d7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Anton\\\\Documents\\\\GitHub\\\\anton.github.io\\\\components\\\\footer.js */"));
}

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions.js");
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/navigation */ "./components/navigation.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_desktopMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/desktopMenu */ "./components/desktopMenu.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/video */ "./components/video.js");
/* harmony import */ var _vimeo_player__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vimeo/player */ "@vimeo/player");
/* harmony import */ var _vimeo_player__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_vimeo_player__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\Anton\\Documents\\GitHub\\anton.github.io\\components\\layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  Component
} = __webpack_require__(/*! react */ "react");











class Layout extends Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "setWin", () => {
      if (window.innerWidth > _config__WEBPACK_IMPORTED_MODULE_8__["MOBILE_BREAKPOINT"]) this.props.setWindow(window.innerWidth, window.innerHeight);else {
        let mode = window.innerWidth < window.innerHeight ? "portrait" : "landscape";

        if (mode != this.state.mode) {
          this.props.setWindow(window.innerWidth, window.innerHeight);
          this.setState({
            mode
          });
        }
      }
    });

    _defineProperty(this, "moveCursor", () => {
      const {
        mouseX,
        mouseY,
        trailingX,
        trailingY
      } = this.state;
      const diffX = mouseX - trailingX;
      const diffY = mouseY - trailingY; //  Number in expression is coeficient of the delay. 10 for example. You can play with it. 

      this.setState({
        trailingX: trailingX + diffX / 5,
        trailingY: trailingY + diffY / 5
      }, () => {
        // Using refs and transform for better performance.
        this.cursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        this.cursorTrailing.current.style.transform = `translate3d(${trailingX}px, ${trailingY}px, 0)`;
        this.animationFrame = requestAnimationFrame(this.moveCursor);
      });
    });

    _defineProperty(this, "onMouseMove", evt => {
      const {
        clientX,
        clientY
      } = evt;
      this.setState({
        mouseX: clientX - 5,
        mouseY: clientY - 5
      }); // var elementMouseIsOver = document.elementFromPoint(clientX, clientY)
      // var mouseCircleColor = elementMouseIsOver.getAttribute("mousecirclecolor")
      // if(mouseCircleColor=="white"){
      //     this.setState({mouseCircleColor:"white"})
      //     console.log("white")
      // }
      // else
      //     this.setState({mouseCircleColor:"black"})
    });

    this.state = {
      mouseX: 0,
      mouseY: 0,
      trailingX: 0,
      trailingY: 0,
      mode: "landscape",
      mouseCircleColor: "black"
    };
    this.cursor = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.cursorTrailing = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.animationFrame = null;
  }

  // mouseOverCursorEffect = ()=>{
  //     this.props.addClassToCursor("larger")
  // }
  // mouseOutCursorEffect = ()=>{
  //     this.props.removeClassFromCursor("larger")
  // }
  // mouseOverWhiteCursor = ()=>{
  //     console.log('white cursor')
  //     this.props.addClassToCursor("white")
  // }
  // mouseOutWhiteCursor = ()=>{
  //     console.log('white cursor leave')
  //     this.props.removeClassFromCursor("white")
  // }
  componentDidMount() {
    this.setState({
      mode: window.innerWidth < window.innerHeight ? "portrait" : "landscape"
    });
    this.setWin();
    document.addEventListener('mousemove', this.onMouseMove);
    this.moveCursor();
    window.addEventListener('resize', this.setWin);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove);
    cancelAnimationFrame(this.animationFrame); // document.querySelectorAll('.larger-cursor').forEach(ele=>{
    //     ele.removeEventListener("mouseenter",this.mouseOverCursorEffect)
    //     ele.removeEventListener("mouseleave",this.mouseOutCursorEffect)
    // })
    // document.querySelectorAll('.white-cursor').forEach(ele=>{
    //     ele.removeEventListener("mouseenter",this.mouseOverWhiteCursor)
    //     ele.removeEventListener("mouseleave",this.mouseOutWhiteCursor)
    // })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.common.show_fullscreen_video != prevProps.common.show_fullscreen_video) {
      if (this.props.common.show_fullscreen_video) {
        var video = document.getElementById('fullscreen_video');

        if (this.props.common.video_type == "html") {
          console.log('video type html');

          video.oncanplay = () => {
            video.play();
          };
        } else {
          var player = new _vimeo_player__WEBPACK_IMPORTED_MODULE_10___default.a(video);
          player.play();
        }
      }
    }
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }
    }, __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      charset: "UTF-8",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["774079752", [this.props.common.video_src == "/videos/enchanteur_desktop.mp4" ? "38%" : "7.5%", this.props.common.menu_btn_color == "white" ? "#ffffff" : "#000000"]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }
    }), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["774079752", [this.props.common.video_src == "/videos/enchanteur_desktop.mp4" ? "38%" : "7.5%", this.props.common.menu_btn_color == "white" ? "#ffffff" : "#000000"]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }
    })), __jsx("div", {
      onClick: () => this.props.hideFullscreenVideo(),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["774079752", [this.props.common.video_src == "/videos/enchanteur_desktop.mp4" ? "38%" : "7.5%", this.props.common.menu_btn_color == "white" ? "#ffffff" : "#000000"]]]) + " " + `full-screen-video-wrapper ${this.props.common.show_fullscreen_video ? "show" : ""}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["774079752", [this.props.common.video_src == "/videos/enchanteur_desktop.mp4" ? "38%" : "7.5%", this.props.common.menu_btn_color == "white" ? "#ffffff" : "#000000"]]]) + " " + "close",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 21
      }
    }), __jsx("div", {
      onClick: e => e.stopPropagation(),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["774079752", [this.props.common.video_src == "/videos/enchanteur_desktop.mp4" ? "38%" : "7.5%", this.props.common.menu_btn_color == "white" ? "#ffffff" : "#000000"]]]) + " " + "video-wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 21
      }
    }, this.props.common.show_fullscreen_video && __jsx(_components_video__WEBPACK_IMPORTED_MODULE_9__["default"], {
      videoid: this.props.common.video_id,
      video_type: this.props.common.video_type,
      video_src: this.props.common.video_src,
      html_id: "fullscreen_video",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 29
      }
    }))), __jsx("div", {
      id: "main",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["774079752", [this.props.common.video_src == "/videos/enchanteur_desktop.mp4" ? "38%" : "7.5%", this.props.common.menu_btn_color == "white" ? "#ffffff" : "#000000"]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["774079752", [this.props.common.video_src == "/videos/enchanteur_desktop.mp4" ? "38%" : "7.5%", this.props.common.menu_btn_color == "white" ? "#ffffff" : "#000000"]]]) + " " + `cursors ${this.props.common.cursorClasses.join(' ')}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 21
      }
    }, __jsx("div", {
      ref: this.cursor,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["774079752", [this.props.common.video_src == "/videos/enchanteur_desktop.mp4" ? "38%" : "7.5%", this.props.common.menu_btn_color == "white" ? "#ffffff" : "#000000"]]]) + " " + "cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 25
      }
    }), __jsx("div", {
      ref: this.cursorTrailing,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["774079752", [this.props.common.video_src == "/videos/enchanteur_desktop.mp4" ? "38%" : "7.5%", this.props.common.menu_btn_color == "white" ? "#ffffff" : "#000000"]]]) + " " + "cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 25
      }
    })), __jsx(_components_desktopMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
      page: this.props.page,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 21
      }
    }), __jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
      hindiText: this.props.hindiText,
      navPosition: this.props.navPosition,
      navTextColor: this.props.navTextColor,
      menuBtnColor: this.props.menuBtnColor,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 21
      }
    }), this.props.children), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: this.props.footerType,
      noWaveDesktop: this.props.noWaveDesktop,
      noWaveMobile: this.props.noWaveMobile,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "774079752",
      dynamic: [this.props.common.video_src == "/videos/enchanteur_desktop.mp4" ? "38%" : "7.5%", this.props.common.menu_btn_color == "white" ? "#ffffff" : "#000000"],
      __self: this
    }, `.full-screen-video-wrapper.__jsx-style-dynamic-selector{position:fixed;z-index:-1;top:0;left:0;width:100%;padding:4rem ${this.props.common.video_src == "/videos/enchanteur_desktop.mp4" ? "38%" : "7.5%"};height:100vh;background:#000000b3;opacity:0;-webkit-transition:opacity 0.4s;transition:opacity 0.4s;overflow:scroll;}.full-screen-video-wrapper.show.__jsx-style-dynamic-selector{z-index:99;opacity:1;}.full-screen-video-wrapper.__jsx-style-dynamic-selector .close.__jsx-style-dynamic-selector{position:fixed;z-index:100;right:2rem;top:2rem;}.full-screen-video-wrapper.__jsx-style-dynamic-selector .close.__jsx-style-dynamic-selector:after,.full-screen-video-wrapper.__jsx-style-dynamic-selector .close.__jsx-style-dynamic-selector:before{background-color:#ffffff;}#main.__jsx-style-dynamic-selector{overflow:hidden;position:relative;z-index:10;}.cursor.__jsx-style-dynamic-selector{position:fixed;height:10px;width:10px;border-radius:50%;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);pointer-events:none;}.cursors.__jsx-style-dynamic-selector .cursor.__jsx-style-dynamic-selector:nth-child(1){background-color:#3a26fd;z-index:100002;opacity:0;}.cursors.__jsx-style-dynamic-selector .cursor.__jsx-style-dynamic-selector:nth-child(2){background-color:#000000;z-index:997;height:9px;width:9px;-webkit-transition:width 0.7s,height 0.7s;transition:width 0.7s,height 0.7s;}.cursors.larger.__jsx-style-dynamic-selector .cursor.__jsx-style-dynamic-selector:nth-child(2){height:25px;width:25px;}.cursors.onmenubtn.__jsx-style-dynamic-selector .cursor.__jsx-style-dynamic-selector:nth-child(2){height:60px;width:60px;-webkit-transition:width 0.2s,height 0.2s;transition:width 0.2s,height 0.2s;-webkit-transform:translate3d(30px,7px,0) !important;-ms-transform:translate3d(30px,7px,0) !important;transform:translate3d(30px,7px,0) !important;background-color:${this.props.common.menu_btn_color == "white" ? "#ffffff" : "#000000"};}.cursors.white.__jsx-style-dynamic-selector .cursor.__jsx-style-dynamic-selector:nth-child(2){background-color:#ffffff !important;}.transparent-footer.__jsx-style-dynamic-selector{height:42.7rem;width:100%;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25cXERvY3VtZW50c1xcR2l0SHViXFxhbnRvbi5naXRodWIuaW9cXGNvbXBvbmVudHNcXGxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SjRCLEFBRzRDLEFBYUosQUFJRyxBQU1VLEFBR1QsQUFLQSxBQVFVLEFBS0EsQUFPYixBQUlBLEFBT3dCLEFBR3RCLFdBbkRMLENBc0NFLEFBSUEsR0F2REQsQUFpQkMsQUFjQyxBQWtDRixDQXZDTyxLQVpyQixFQXNDQSxBQUlxQyxFQWpDckMsQUFnQm1CLEFBS0gsQ0EzQ04sQUFpRVYsQ0FoRGMsQUFjQyxLQTlCSixFQXlCRyxFQW1DZCxDQWpCZSxDQTFCSCxBQWNVLENBOUJQLENBcUNGLEtBWmIsRUFSQSxDQTBCYyxFQTFDZ0MsQUFxQzlDLE1BUGdELEVBYVgsa0NBMUNwQixPQW9EK0IsTUFuRHZCLHFCQUNaLFFBeUNiLEVBeEMyQix3REFDUixRQTBCSSxRQXpCdkIsWUEwQkEsMEJBdUJELDhDQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQW50b25cXERvY3VtZW50c1xcR2l0SHViXFxhbnRvbi5naXRodWIuaW9cXGNvbXBvbmVudHNcXGxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgQ29tcG9uZW50IH0gPSByZXF1aXJlKFwicmVhY3RcIik7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtzZXRXaW5kb3csYWRkQ2xhc3NUb0N1cnNvcixyZW1vdmVDbGFzc0Zyb21DdXJzb3IsaGlkZUZ1bGxzY3JlZW5WaWRlb30gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQgRGVza3RvcE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9kZXNrdG9wTWVudSdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7TU9CSUxFX0JSRUFLUE9JTlR9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBWaWRlbyBmcm9tICcuLi9jb21wb25lbnRzL3ZpZGVvJ1xuaW1wb3J0IFBsYXllciBmcm9tICdAdmltZW8vcGxheWVyJ1xuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtb3VzZVg6IDAsXG4gICAgICAgICAgICBtb3VzZVk6IDAsXG4gICAgICAgICAgICB0cmFpbGluZ1g6IDAsXG4gICAgICAgICAgICB0cmFpbGluZ1k6IDAsXG4gICAgICAgICAgICBtb2RlOlwibGFuZHNjYXBlXCIsXG4gICAgICAgICAgICBtb3VzZUNpcmNsZUNvbG9yOlwiYmxhY2tcIlxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3Vyc29yID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMuY3Vyc29yVHJhaWxpbmcgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25GcmFtZSA9IG51bGw7XG4gICAgfVxuICAgIHNldFdpbiA9ICgpPT57XG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gTU9CSUxFX0JSRUFLUE9JTlQpXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldFdpbmRvdyh3aW5kb3cuaW5uZXJXaWR0aCx3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgbW9kZSA9IHdpbmRvdy5pbm5lcldpZHRoPHdpbmRvdy5pbm5lckhlaWdodD9cInBvcnRyYWl0XCI6XCJsYW5kc2NhcGVcIlxuICAgICAgICAgICAgaWYobW9kZSE9dGhpcy5zdGF0ZS5tb2RlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldFdpbmRvdyh3aW5kb3cuaW5uZXJXaWR0aCx3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bW9kZX0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbW92ZUN1cnNvciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBtb3VzZVgsIG1vdXNlWSwgdHJhaWxpbmdYLCB0cmFpbGluZ1kgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGRpZmZYID0gbW91c2VYIC0gdHJhaWxpbmdYO1xuICAgICAgICBjb25zdCBkaWZmWSA9IG1vdXNlWSAtIHRyYWlsaW5nWTtcbiAgICAgICAgLy8gIE51bWJlciBpbiBleHByZXNzaW9uIGlzIGNvZWZpY2llbnQgb2YgdGhlIGRlbGF5LiAxMCBmb3IgZXhhbXBsZS4gWW91IGNhbiBwbGF5IHdpdGggaXQuIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB0cmFpbGluZ1g6IHRyYWlsaW5nWCArIGRpZmZYIC8gNSxcbiAgICAgICAgICB0cmFpbGluZ1k6IHRyYWlsaW5nWSArIGRpZmZZIC8gNSxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAvLyBVc2luZyByZWZzIGFuZCB0cmFuc2Zvcm0gZm9yIGJldHRlciBwZXJmb3JtYW5jZS5cbiAgICAgICAgICB0aGlzLmN1cnNvci5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke21vdXNlWH1weCwgJHttb3VzZVl9cHgsIDApYDtcbiAgICAgICAgICB0aGlzLmN1cnNvclRyYWlsaW5nLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7dHJhaWxpbmdYfXB4LCAke3RyYWlsaW5nWX1weCwgMClgO1xuICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlQ3Vyc29yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uTW91c2VNb3ZlID0gKGV2dCkgPT4ge1xuICAgICAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IGV2dDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbW91c2VYOiBjbGllbnRYIC0gNSxcbiAgICAgICAgICBtb3VzZVk6IGNsaWVudFkgLSA1LFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gdmFyIGVsZW1lbnRNb3VzZUlzT3ZlciA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoY2xpZW50WCwgY2xpZW50WSlcbiAgICAgICAgLy8gdmFyIG1vdXNlQ2lyY2xlQ29sb3IgPSBlbGVtZW50TW91c2VJc092ZXIuZ2V0QXR0cmlidXRlKFwibW91c2VjaXJjbGVjb2xvclwiKVxuICAgICAgICAvLyBpZihtb3VzZUNpcmNsZUNvbG9yPT1cIndoaXRlXCIpe1xuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7bW91c2VDaXJjbGVDb2xvcjpcIndoaXRlXCJ9KVxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJ3aGl0ZVwiKVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2VcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe21vdXNlQ2lyY2xlQ29sb3I6XCJibGFja1wifSlcbiAgICB9XG4gICAgLy8gbW91c2VPdmVyQ3Vyc29yRWZmZWN0ID0gKCk9PntcbiAgICAvLyAgICAgdGhpcy5wcm9wcy5hZGRDbGFzc1RvQ3Vyc29yKFwibGFyZ2VyXCIpXG4gICAgLy8gfVxuICAgIC8vIG1vdXNlT3V0Q3Vyc29yRWZmZWN0ID0gKCk9PntcbiAgICAvLyAgICAgdGhpcy5wcm9wcy5yZW1vdmVDbGFzc0Zyb21DdXJzb3IoXCJsYXJnZXJcIilcbiAgICAvLyB9XG4gICAgLy8gbW91c2VPdmVyV2hpdGVDdXJzb3IgPSAoKT0+e1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnd2hpdGUgY3Vyc29yJylcbiAgICAvLyAgICAgdGhpcy5wcm9wcy5hZGRDbGFzc1RvQ3Vyc29yKFwid2hpdGVcIilcbiAgICAvLyB9XG4gICAgLy8gbW91c2VPdXRXaGl0ZUN1cnNvciA9ICgpPT57XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCd3aGl0ZSBjdXJzb3IgbGVhdmUnKVxuICAgIC8vICAgICB0aGlzLnByb3BzLnJlbW92ZUNsYXNzRnJvbUN1cnNvcihcIndoaXRlXCIpXG4gICAgLy8gfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGU6d2luZG93LmlubmVyV2lkdGg8d2luZG93LmlubmVySGVpZ2h0P1wicG9ydHJhaXRcIjpcImxhbmRzY2FwZVwifSlcbiAgICAgICAgdGhpcy5zZXRXaW4oKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgdGhpcy5tb3ZlQ3Vyc29yKClcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsdGhpcy5zZXRXaW4pXG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKVxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lKTtcbiAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhcmdlci1jdXJzb3InKS5mb3JFYWNoKGVsZT0+e1xuICAgICAgICAvLyAgICAgZWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsdGhpcy5tb3VzZU92ZXJDdXJzb3JFZmZlY3QpXG4gICAgICAgIC8vICAgICBlbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0aGlzLm1vdXNlT3V0Q3Vyc29yRWZmZWN0KVxuICAgICAgICAvLyB9KVxuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2hpdGUtY3Vyc29yJykuZm9yRWFjaChlbGU9PntcbiAgICAgICAgLy8gICAgIGVsZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLHRoaXMubW91c2VPdmVyV2hpdGVDdXJzb3IpXG4gICAgICAgIC8vICAgICBlbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0aGlzLm1vdXNlT3V0V2hpdGVDdXJzb3IpXG4gICAgICAgIC8vIH0pXG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMscHJldlN0YXRlKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb21tb24uc2hvd19mdWxsc2NyZWVuX3ZpZGVvIT1wcmV2UHJvcHMuY29tbW9uLnNob3dfZnVsbHNjcmVlbl92aWRlbyl7XG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLmNvbW1vbi5zaG93X2Z1bGxzY3JlZW5fdmlkZW8pe1xuICAgICAgICAgICAgICAgIHZhciB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsc2NyZWVuX3ZpZGVvJylcbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLmNvbW1vbi52aWRlb190eXBlPT1cImh0bWxcIil7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2aWRlbyB0eXBlIGh0bWwnKVxuICAgICAgICAgICAgICAgICAgICB2aWRlby5vbmNhbnBsYXkgPSAoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvLnBsYXkoKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBsYXllciA9IG5ldyBQbGF5ZXIodmlkZW8pO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGxheSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAgICAgICAgICAgY2hhcnNldD1cIlVURi04XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZ1bGwtc2NyZWVuLXZpZGVvLXdyYXBwZXIgJHt0aGlzLnByb3BzLmNvbW1vbi5zaG93X2Z1bGxzY3JlZW5fdmlkZW8/XCJzaG93XCI6XCJcIn1gfSBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5oaWRlRnVsbHNjcmVlblZpZGVvKCl9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbG9zZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby13cmFwXCIgb25DbGljaz17KGUpPT5lLnN0b3BQcm9wYWdhdGlvbigpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbW1vbi5zaG93X2Z1bGxzY3JlZW5fdmlkZW8gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlkZW8gdmlkZW9pZD17dGhpcy5wcm9wcy5jb21tb24udmlkZW9faWR9IHZpZGVvX3R5cGU9e3RoaXMucHJvcHMuY29tbW9uLnZpZGVvX3R5cGV9IHZpZGVvX3NyYz17dGhpcy5wcm9wcy5jb21tb24udmlkZW9fc3JjfSBodG1sX2lkPVwiZnVsbHNjcmVlbl92aWRlb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYWluXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY3Vyc29ycyAke3RoaXMucHJvcHMuY29tbW9uLmN1cnNvckNsYXNzZXMuam9pbignICcpfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3JcIiByZWY9e3RoaXMuY3Vyc29yfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3JcIiByZWY9e3RoaXMuY3Vyc29yVHJhaWxpbmd9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RGVza3RvcE1lbnUgcGFnZT17dGhpcy5wcm9wcy5wYWdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uIGhpbmRpVGV4dD17dGhpcy5wcm9wcy5oaW5kaVRleHR9IG5hdlBvc2l0aW9uPXt0aGlzLnByb3BzLm5hdlBvc2l0aW9ufSBuYXZUZXh0Q29sb3I9e3RoaXMucHJvcHMubmF2VGV4dENvbG9yfSBtZW51QnRuQ29sb3I9e3RoaXMucHJvcHMubWVudUJ0bkNvbG9yfSAvPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ0cmFuc3BhcmVudC1mb290ZXJcIj48L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPEZvb3RlciB0eXBlPXt0aGlzLnByb3BzLmZvb3RlclR5cGV9IG5vV2F2ZURlc2t0b3A9e3RoaXMucHJvcHMubm9XYXZlRGVza3RvcH0gbm9XYXZlTW9iaWxlPXt0aGlzLnByb3BzLm5vV2F2ZU1vYmlsZX0gLz5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAuZnVsbC1zY3JlZW4tdmlkZW8td3JhcHBlcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDotMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cmVtICR7dGhpcy5wcm9wcy5jb21tb24udmlkZW9fc3JjPT1cIi92aWRlb3MvZW5jaGFudGV1cl9kZXNrdG9wLm1wNFwiP1wiMzglXCI6XCI3LjUlXCJ9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMGIzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOm9wYWNpdHkgMC40cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzpzY3JvbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZnVsbC1zY3JlZW4tdmlkZW8td3JhcHBlci5zaG93e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mdWxsLXNjcmVlbi12aWRlby13cmFwcGVyIC5jbG9zZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDoycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDoycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZ1bGwtc2NyZWVuLXZpZGVvLXdyYXBwZXIgLmNsb3NlOmFmdGVyLC5mdWxsLXNjcmVlbi12aWRlby13cmFwcGVyIC5jbG9zZTpiZWZvcmV7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgI21haW57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6MTA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuY3Vyc29yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czpub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLmN1cnNvcnMgLmN1cnNvcjpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTI2ZmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jdXJzb3JzIC5jdXJzb3I6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5NztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246d2lkdGggMC43cyxoZWlnaHQgMC43cztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jdXJzb3JzLmxhcmdlciAuY3Vyc29yOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmN1cnNvcnMub25tZW51YnRuIC5jdXJzb3I6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjp3aWR0aCAwLjJzLGhlaWdodCAwLjJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUzZCgzMHB4LDdweCwwKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy5wcm9wcy5jb21tb24ubWVudV9idG5fY29sb3I9PVwid2hpdGVcIj9cIiNmZmZmZmZcIjpcIiMwMDAwMDBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jdXJzb3JzLndoaXRlIC5jdXJzb3I6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNwYXJlbnQtZm9vdGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo0Mi43cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxufVxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHtjb21tb259KXtcbiAgICByZXR1cm4ge2NvbW1vbn1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLHtzZXRXaW5kb3csYWRkQ2xhc3NUb0N1cnNvcixyZW1vdmVDbGFzc0Zyb21DdXJzb3IsaGlkZUZ1bGxzY3JlZW5WaWRlb30pKExheW91dCkiXX0= */
/*@ sourceURL=C:\\Users\\Anton\\Documents\\GitHub\\anton.github.io\\components\\layout.js */`));
  }

}

function mapStateToProps({
  common
}) {
  return {
    common
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  setWindow: _redux_actions__WEBPACK_IMPORTED_MODULE_3__["setWindow"],
  addClassToCursor: _redux_actions__WEBPACK_IMPORTED_MODULE_3__["addClassToCursor"],
  removeClassFromCursor: _redux_actions__WEBPACK_IMPORTED_MODULE_3__["removeClassFromCursor"],
  hideFullscreenVideo: _redux_actions__WEBPACK_IMPORTED_MODULE_3__["hideFullscreenVideo"]
})(Layout));

/***/ }),

/***/ "./components/loadingIcon.js":
/*!***********************************!*\
  !*** ./components/loadingIcon.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadingIcon; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Anton\\Documents\\GitHub\\anton.github.io\\components\\loadingIcon.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function LoadingIcon({
  show,
  width,
  height,
  weight,
  centered,
  color
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    style: {
      width,
      height
    },
    className: "jsx-1447020762" + " " + `loading-icon ${show ? "show" : ""} ${color} ${weight} ${centered ? "centered" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1447020762",
    __self: this
  }, ".loading-icon.jsx-1447020762{border-radius:50%;border-style:solid;width:0;height:0;opacity:0;-webkit-transition:all 0.7s;transition:all 0.7s;-webkit-animation:spin 1s linear infinite;-webkit-animation:spin-jsx-1447020762 1s ease-in-out infinite;animation:spin-jsx-1447020762 1s ease-in-out infinite;}@-webkit-keyframes spin-jsx-1447020762{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin-jsx-1447020762{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.loading-icon.black.jsx-1447020762{border-color:#000000;border-top-color:#c1c1c1;}.loading-icon.white.jsx-1447020762{border-color:#ffffff;border-top-color:#414142;}.loading-icon.thin.jsx-1447020762{border-width:3px;}.loading-icon.thick.jsx-1447020762{border-width:6px;}.loading-icon.centered.jsx-1447020762{margin:auto;}.loading-icon.show.jsx-1447020762{opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25cXERvY3VtZW50c1xcR2l0SHViXFxhbnRvbi5naXRodWIuaW9cXGNvbXBvbmVudHNcXGxvYWRpbmdJY29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlvQixBQUdtQyxBQVVTLEFBQ0ksQUFHVCxBQUlGLEFBSUYsQUFHRCxBQUdOLEFBR0YsVUFDWCxFQUhBLEtBTkEsQUFHQSxDQXpCb0IsR0FjUSxBQUlGLGdCQWpCaEIsUUFDQyxDQWFYLEFBSUYsUUFoQmEsVUFDVyxpQkFLUSxNQUNJLHlCQUxVLDBDQUNILG9IQUN6QyIsImZpbGUiOiJDOlxcVXNlcnNcXEFudG9uXFxEb2N1bWVudHNcXEdpdEh1YlxcYW50b24uZ2l0aHViLmlvXFxjb21wb25lbnRzXFxsb2FkaW5nSWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmdJY29uKHtzaG93LHdpZHRoLGhlaWdodCx3ZWlnaHQsY2VudGVyZWQsY29sb3J9KXtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGxvYWRpbmctaWNvbiAke3Nob3c/XCJzaG93XCI6XCJcIn0gJHtjb2xvcn0gJHt3ZWlnaHR9ICR7Y2VudGVyZWQ/XCJjZW50ZXJlZFwiOlwiXCJ9YH0gc3R5bGU9e3t3aWR0aCxoZWlnaHR9fT48L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAubG9hZGluZy1pY29uIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuN3M7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc3BpbiAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgICAgICAgICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5sb2FkaW5nLWljb24uYmxhY2t7XG4gICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2MxYzFjMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubG9hZGluZy1pY29uLndoaXRle1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjojZmZmZmZmO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IzQxNDE0MjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmxvYWRpbmctaWNvbi50aGlue1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOjNweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubG9hZGluZy1pY29uLnRoaWNre1xuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogNnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5sb2FkaW5nLWljb24uY2VudGVyZWR7XG4gICAgICAgICAgICAgICAgbWFyZ2luOmF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmxvYWRpbmctaWNvbi5zaG93e1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Anton\\\\Documents\\\\GitHub\\\\anton.github.io\\\\components\\\\loadingIcon.js */"));
}

/***/ }),

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Anton\\Documents\\GitHub\\anton.github.io\\components\\navigation.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Navigation(props) {
  function menuBtnClick() {
    if (props.common.menuOpen) props.removeClassFromCursor("white");
    props.toggleMenu();
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("span", {
    onClick: () => menuBtnClick(),
    onMouseOver: () => props.addClassToCursor("onmenubtn"),
    onMouseOut: () => props.removeClassFromCursor("onmenubtn"),
    className: "jsx-2726025511" + " " + `menu-btn ${props.common.menu_btn_color} ${props.common.menuOpen ? "open" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "jsx-2726025511" + " " + "lines",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-2726025511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "jsx-2726025511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "jsx-2726025511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }))), __jsx("nav", {
    className: "jsx-2726025511" + " " + `${props.navPosition} ${props.navTextColor}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2726025511" + " " + "empty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2726025511" + " " + "logo-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "jsx-2726025511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-2726025511" + " " + "logo-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/images/logo.png",
    alt: "image",
    className: "jsx-2726025511" + " " + "logo logo-black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 29
    }
  }), __jsx("img", {
    src: "/images/logo_white.png",
    alt: "image",
    className: "jsx-2726025511" + " " + "logo logo-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  }))))), __jsx("div", {
    className: "jsx-2726025511" + " " + "mobile-logo-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "jsx-2726025511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/logo-short-black.png",
    alt: "image",
    className: "jsx-2726025511" + " " + "mobile-logo width-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  })))), __jsx("ul", {
    className: "jsx-2726025511" + " " + "options",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2726025511",
    __self: this
  }, ".hindi-text.jsx-2726025511 img.jsx-2726025511{width:43px;}.mobile-logo-wrap.jsx-2726025511{display:none;text-align:center;}.mobile-logo.jsx-2726025511{width:5rem;}.menu-btn.jsx-2726025511{position:fixed;top:2.5rem;left:4.8rem;z-index:999;}.menu-btn.jsx-2726025511 .lines.jsx-2726025511{position:relative;display:inline-block;width:25px;height:24px;vertical-align:middle;z-index:1;}.menu-btn.open.jsx-2726025511 .lines.jsx-2726025511 span.jsx-2726025511{background:#F9EB21 !important;}.menu-btn.jsx-2726025511 .lines.jsx-2726025511 span.jsx-2726025511{position:absolute;display:block;height:2px;width:100%;-webkit-transition:-webkit-transform .2s 0s;-webkit-transition:transform .2s 0s;transition:transform .2s 0s;}.menu-btn.black.jsx-2726025511 .lines.jsx-2726025511 span.jsx-2726025511{background:#000000;}.menu-btn.white.jsx-2726025511 .lines.jsx-2726025511 span.jsx-2726025511{background:#ffffff;}.menu-btn.jsx-2726025511 .lines.jsx-2726025511 span.jsx-2726025511:nth-child(1){top:0;}.menu-btn.open.jsx-2726025511 .lines.jsx-2726025511 span.jsx-2726025511:nth-child(1){top:11px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.menu-btn.jsx-2726025511 .lines.jsx-2726025511 span.jsx-2726025511:nth-child(2){top:11px;}.menu-btn.open.jsx-2726025511 .lines.jsx-2726025511 span.jsx-2726025511:nth-child(2){display:none;}.menu-btn.jsx-2726025511 .lines.jsx-2726025511 span.jsx-2726025511:nth-child(3){top:22px;}.menu-btn.open.jsx-2726025511 .lines.jsx-2726025511 span.jsx-2726025511:nth-child(3){top:11px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}nav.jsx-2726025511{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;padding-top:2.3rem;}nav.jsx-2726025511>*.jsx-2726025511{-webkit-flex:1 1 33.33%;-ms-flex:1 1 33.33%;flex:1 1 33.33%;}nav.absolute.jsx-2726025511{position:absolute;z-index:500;width:100%;}.logo-wrapper.jsx-2726025511{text-align:center;}.logo.jsx-2726025511{width:28rem;display:none;}nav.black.jsx-2726025511 .logo-black.jsx-2726025511{display:inline-block;}nav.white.jsx-2726025511 .logo-white.jsx-2726025511{display:inline-block;}ul.options.jsx-2726025511{padding-left:0;list-style:none;text-align:right;padding-right:4.8rem;}ul.options.jsx-2726025511 li.jsx-2726025511{display:inline-block;}ul.options.jsx-2726025511 li.jsx-2726025511 a.jsx-2726025511{padding:0.5rem 0.75rem;}nav.black.jsx-2726025511 ul.options.jsx-2726025511 li.jsx-2726025511 a.jsx-2726025511:not(.hindi){color:#000000;}nav.white.jsx-2726025511 ul.options.jsx-2726025511 li.jsx-2726025511 a.jsx-2726025511:not(.hindi){color:#ffffff;}ul.options.jsx-2726025511 li.jsx-2726025511 a.jsx-2726025511:not(.hindi){display:inline-block;font-family:FuturaBook,sans-serif;}ul.options.jsx-2726025511 li.jsx-2726025511 a.hindi.jsx-2726025511{color:#F9EB21;}@media only screen and (min-width:768px){.menu-btn.black.jsx-2726025511:hover .lines.jsx-2726025511 span.jsx-2726025511{background:#ffffff;}.menu-btn.white.jsx-2726025511:hover .lines.jsx-2726025511 span.jsx-2726025511{background:#000000;}}@media only screen and (max-width:768px){.logo-wrap.jsx-2726025511{display:none;}ul.options.jsx-2726025511{padding-right:2rem;}.menu-btn.jsx-2726025511{left:2.8rem;}.mobile-logo-wrap.jsx-2726025511{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25cXERvY3VtZW50c1xcR2l0SHViXFxhbnRvbi5naXRodWIuaW9cXGNvbXBvbmVudHNcXG5hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURvQixBQUc0QixBQUdDLEFBSUYsQUFHSSxBQU1JLEFBUVksQUFHWixBQU9DLEFBR0EsQUFHYixBQUdFLEFBSUMsQUFHRyxBQUdILEFBR0QsQUFJSSxBQUtHLEFBR0UsQUFLQSxBQUdMLEFBSVEsQUFHQSxBQUdOLEFBTU0sQUFHRSxBQUdULEFBR0EsQUFHTyxBQUlQLEFBSVUsQUFHQSxBQUtQLEFBR00sQUFHUCxBQUdFLE1BeEZyQixHQUlELEFBR0MsQUFNQSxBQUlELEVBekRDLEFBT0EsQ0FxRWdCLEFBa0RaLENBM0hpQixBQStDckIsQUFzRUksQ0F0QkosQUFHQSxBQU9BLEFBcUJJLENBdkhVLEFBNEVLLEdBdEVNLEFBV1AsQUF5Q0gsQUFLZixDQXZDQSxBQUdBLEFBMkVJLEFBR0EsQUFRQSxFQTNDSixBQUdBLEFBU0EsQUFZdUMsRUFUdkMsRUFsQkEsQ0FsRWUsSUFhZixBQTZDYyxDQWpFZCxBQW1Gb0IsQ0EzREwsTUFoQkEsQ0FLQSxFQXFEZixFQXpDZSxLQTJEUyxFQTNFeEIsQUFLZ0IsSUFZZ0IsQ0EyRWhDLEtBeENBLEVBOUMwQixPQXNFMUIsS0E3QndCLFVBeENWLFNBd0JkLENBdkJBLEVBb0NBLHFEQUlzQixhQTlCdEIsTUErQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbnRvblxcRG9jdW1lbnRzXFxHaXRIdWJcXGFudG9uLmdpdGh1Yi5pb1xcY29tcG9uZW50c1xcbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dG9nZ2xlTWVudSxhZGRDbGFzc1RvQ3Vyc29yLHJlbW92ZUNsYXNzRnJvbUN1cnNvcn0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5mdW5jdGlvbiBOYXZpZ2F0aW9uKHByb3BzKXtcbiAgICBmdW5jdGlvbiBtZW51QnRuQ2xpY2soKXtcbiAgICAgICAgaWYocHJvcHMuY29tbW9uLm1lbnVPcGVuKVxuICAgICAgICAgICAgcHJvcHMucmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKFwid2hpdGVcIilcbiAgICAgICAgcHJvcHMudG9nZ2xlTWVudSgpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YG1lbnUtYnRuICR7cHJvcHMuY29tbW9uLm1lbnVfYnRuX2NvbG9yfSAke3Byb3BzLmNvbW1vbi5tZW51T3Blbj9cIm9wZW5cIjpcIlwifWB9IG9uQ2xpY2s9eygpPT5tZW51QnRuQ2xpY2soKX0gb25Nb3VzZU92ZXI9eygpPT5wcm9wcy5hZGRDbGFzc1RvQ3Vyc29yKFwib25tZW51YnRuXCIpfSBvbk1vdXNlT3V0PXsoKT0+cHJvcHMucmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKFwib25tZW51YnRuXCIpfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmVzXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Ake3Byb3BzLm5hdlBvc2l0aW9ufSAke3Byb3BzLm5hdlRleHRDb2xvcn1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby13cmFwXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImxvZ28gbG9nby1ibGFja1wiYWx0PSdpbWFnZScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nb193aGl0ZS5wbmdcIiBjbGFzc05hbWU9XCJsb2dvIGxvZ28td2hpdGVcImFsdD0naW1hZ2UnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtbG9nby13cmFwXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby1zaG9ydC1ibGFjay5wbmdcIiBjbGFzc05hbWU9XCJtb2JpbGUtbG9nbyB3aWR0aC0xMDBcImFsdD0naW1hZ2UnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJvcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+PGE+RU5HTElTSDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2BsYXJnZXItY3Vyc29yIGhpbmRpLXRleHRgfT5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmhpbmRpVGV4dD09XCJ3aGl0ZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9oaW5kaV93aGl0ZS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9oaW5kaS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9saT4gKi99XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmhpbmRpLXRleHQgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0M3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vYmlsZS1sb2dvLXdyYXB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vYmlsZS1sb2dve1xuICAgICAgICAgICAgICAgIHdpZHRoOjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1idG57XG4gICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICAgICAgdG9wOjIuNXJlbTtcbiAgICAgICAgICAgICAgICBsZWZ0OjQuOHJlbTtcbiAgICAgICAgICAgICAgICB6LWluZGV4Ojk5OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWJ0biAubGluZXMge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWJ0bi5vcGVuIC5saW5lcyBzcGFuIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjlFQjIxICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1idG4gLmxpbmVzIHNwYW4ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIDBzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUtYnRuLmJsYWNrIC5saW5lcyBzcGFue1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1idG4ud2hpdGUgLmxpbmVzIHNwYW57XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWJ0biAubGluZXMgc3BhbjpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWJ0bi5vcGVuIC5saW5lcyBzcGFuOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgdG9wOjExcHg7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWJ0biAubGluZXMgc3BhbjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgIHRvcDogMTFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWJ0bi5vcGVuIC5saW5lcyBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUtYnRuIC5saW5lcyBzcGFuOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgdG9wOiAyMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUtYnRuLm9wZW4gLmxpbmVzIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgICAgICB0b3A6MTFweDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKC00NWRlZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1mbG93OnJvdyBub3dyYXA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6Mi4zcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2ID4gKiB7XG4gICAgICAgICAgICAgICAgZmxleDoxIDEgMzMuMzMlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2LmFic29sdXRle1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6NTAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9nby13cmFwcGVye1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyOHJlbTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYuYmxhY2sgLmxvZ28tYmxhY2t7XG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYud2hpdGUgLmxvZ28td2hpdGV7XG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bC5vcHRpb25ze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6NC44cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwub3B0aW9ucyBsaXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsLm9wdGlvbnMgbGkgYXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjAuNXJlbSAwLjc1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2LmJsYWNrIHVsLm9wdGlvbnMgbGkgYTpub3QoLmhpbmRpKXtcbiAgICAgICAgICAgICAgICBjb2xvcjojMDAwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2LndoaXRlIHVsLm9wdGlvbnMgbGkgYTpub3QoLmhpbmRpKXtcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwub3B0aW9ucyBsaSBhOm5vdCguaGluZGkpe1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGdXR1cmFCb29rLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwub3B0aW9ucyBsaSBhLmhpbmRpe1xuICAgICAgICAgICAgICAgIGNvbG9yOiNGOUVCMjE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpe1xuICAgICAgICAgICAgICAgIC5tZW51LWJ0bi5ibGFjazpob3ZlciAubGluZXMgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tZW51LWJ0bi53aGl0ZTpob3ZlciAubGluZXMgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcbiAgICAgICAgICAgICAgICAubG9nby13cmFwe1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVsLm9wdGlvbnN7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1lbnUtYnRue1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OjIuOHJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vYmlsZS1sb2dvLXdyYXB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7Y29tbW9ufSl7XG4gICAgcmV0dXJuIHtjb21tb259XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyx7dG9nZ2xlTWVudSxhZGRDbGFzc1RvQ3Vyc29yLHJlbW92ZUNsYXNzRnJvbUN1cnNvcn0pKE5hdmlnYXRpb24pIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Anton\\\\Documents\\\\GitHub\\\\anton.github.io\\\\components\\\\navigation.js */"));
}

function mapStateToProps({
  common
}) {
  return {
    common
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  toggleMenu: _redux_actions__WEBPACK_IMPORTED_MODULE_2__["toggleMenu"],
  addClassToCursor: _redux_actions__WEBPACK_IMPORTED_MODULE_2__["addClassToCursor"],
  removeClassFromCursor: _redux_actions__WEBPACK_IMPORTED_MODULE_2__["removeClassFromCursor"]
})(Navigation));

/***/ }),

/***/ "./components/video.js":
/*!*****************************!*\
  !*** ./components/video.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoEmbed; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Anton\\Documents\\GitHub\\anton.github.io\\components\\video.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function VideoEmbed(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, props.video_type == "html" ? __jsx("video", {
    width: "100%",
    id: props.html_id,
    controls: true,
    className: "jsx-972331939",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }, __jsx("source", {
    src: props.video_src,
    type: "video/mp4",
    className: "jsx-972331939",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 21
    }
  }), "Your browser does not support the video tag.") : __jsx("div", {
    className: "jsx-972331939" + " " + "video-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("iframe", {
    src: `https://player.vimeo.com/video/${props.videoid}?title=0&byline=0&portrait=0&loop=${props.loop ? 1 : 0}`,
    frameborder: "0",
    allow: "autoplay; fullscreen",
    allowfullscreen: true,
    id: props.html_id,
    className: "jsx-972331939",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "972331939",
    __self: this
  }, ".video-wrap.jsx-972331939{padding:56.25% 0 0 0;position:relative;background:#000000;}.video-wrap.jsx-972331939 iframe.jsx-972331939{position:absolute;top:0;left:0;width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25cXERvY3VtZW50c1xcR2l0SHViXFxhbnRvbi5naXRodWIuaW9cXGNvbXBvbmVudHNcXHZpZGVvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNvQixBQUdxQyxBQUtILGtCQUNaLEdBTFksR0FNWCxPQUNJLFFBTlEsR0FPUCxZQUNmLElBUEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbnRvblxcRG9jdW1lbnRzXFxHaXRIdWJcXGFudG9uLmdpdGh1Yi5pb1xcY29tcG9uZW50c1xcdmlkZW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb0VtYmVkKHByb3BzKXtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICB7cHJvcHMudmlkZW9fdHlwZT09XCJodG1sXCJcbiAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgPHZpZGVvIHdpZHRoPVwiMTAwJVwiIGlkPXtwcm9wcy5odG1sX2lkfSBjb250cm9scz5cbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e3Byb3BzLnZpZGVvX3NyY30gdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyB0YWcuXG4gICAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPXtgaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLyR7cHJvcHMudmlkZW9pZH0/dGl0bGU9MCZieWxpbmU9MCZwb3J0cmFpdD0wJmxvb3A9JHtwcm9wcy5sb29wPzE6MH1gfSBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImF1dG9wbGF5OyBmdWxsc2NyZWVuXCIgYWxsb3dmdWxsc2NyZWVuIGlkPXtwcm9wcy5odG1sX2lkfT48L2lmcmFtZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAudmlkZW8td3JhcHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjU2LjI1JSAwIDAgMDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMwMDAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudmlkZW8td3JhcCBpZnJhbWV7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Anton\\\\Documents\\\\GitHub\\\\anton.github.io\\\\components\\\\video.js */"));
}

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  MOBILE_BREAKPOINT: 768,
  ANIMATION_DURATION: 0.4,
  SENDGRID_API_KEY: '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'
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return _react.default.cloneElement(child, childProps);
}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (true) {
      setTimeout(() => {
        throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
      }, 0);
    }

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
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


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_arrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/arrow */ "./components/arrow.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-parallax */ "react-parallax");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions.js");
/* harmony import */ var _components_clients__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/clients */ "./components/clients.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\Anton\\Documents\\GitHub\\anton.github.io\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













class Home extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleResize", () => {
      this.positionImage();
      this.setState({
        isMobile: window.innerWidth < _config__WEBPACK_IMPORTED_MODULE_10__["MOBILE_BREAKPOINT"] ? true : false
      });
    });

    this.state = {
      isMobile: false,
      underlineExpand: false,
      backgroundStyles: {
        top: "0",
        left: "0"
      },
      backgroundReady: false,
      backgroundShow: false,
      loadingLogoReady: false,
      animate: false,
      menuBtnColor: "black"
    };
    this.backgroundImage = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();
    this.rellaxRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();
    this.notPerformedAnimation = true;
    this.whiteMenuSections = [react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef()];
  } // handleScroll = ()=>{
  //   for(let i=0;i<this.whiteMenuSections.length;i++){
  //     let boundingVals = this.whiteMenuSections[i].current.getBoundingClientRect()
  //     if(boundingVals.top < 0 && (boundingVals.top * -1 < boundingVals.height)){
  //       this.setState({menuBtnColor:"white"})
  //     } else {
  //       this.setState({menuBtnColor:"black"})
  //     }
  //   }
  // }


  positionImage(cb) {
    let backgroundStyles = {
      bottom: "0rem",
      left: "-31.5%",
      width: "208%"
    };
    if (window.innerWidth > 400) backgroundStyles = {
      bottom: "0rem",
      left: "-31.5%",
      width: "208%"
    };
    if (window.innerWidth > 650) backgroundStyles = {
      bottom: "0",
      left: "-20.5%",
      width: "120%"
    };
    if (window.innerWidth > 1024) // backgroundStyles = {top:"-1.5rem",left:"-20.5%",width:"120%"}
      // backgroundStyles = { top: "-0.5rem", left: "-7.5%" };
      backgroundStyles = {
        bottom: "0",
        left: "-7.5%"
      };
    if (window.innerWidth > 1366) // backgroundStyles = { top: "-0.5rem", left: "-7.5%" };
      backgroundStyles = {
        bottom: "0",
        left: "-7.5%"
      };
    if (window.innerWidth > 1440) // backgroundStyles = { top: "-1.5rem", left: "-7.5%" };
      backgroundStyles = {
        bottom: "0",
        left: "-7.5%"
      }; // }

    this.setState({
      backgroundStyles
    }, () => {
      if (cb) {
        cb();
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.backgroundReady && this.state.loadingLogoReady && this.notPerformedAnimation) {
      this.positionImage();
      this.notPerformedAnimation = false;
      this.props.openMenu(false); // this.mouseEvents()

      setTimeout(() => {
        this.setState({
          animate: true
        }, () => {// this.props.removeClassFromCursor("larger")  
          // this.props.removeClassFromCursor("white")  
        });
      }, 750);
    }
  }

  componentDidMount() {
    this.setState({
      isMobile: window.innerWidth < _config__WEBPACK_IMPORTED_MODULE_10__["MOBILE_BREAKPOINT"] ? true : false
    });
    window.addEventListener("resize", this.handleResize); // window.addEventListener("scroll", this.handleScroll)

    const loadingLogo = new Image();
    loadingLogo.src = "/images/loading_logo.png";

    loadingLogo.onload = () => {
      this.setState({
        loadingLogoReady: true
      });
    };

    const img = new Image();
    img.src = "/images/home-cover.jpg";

    img.onload = () => {
      this.setState({
        backgroundReady: true
      });
    };

    this.props.removeClassFromCursor("white");
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize); // window.removeEventListener("scroll", this.handleScroll)
  }

  render() {
    //     for seo purpose
    const schemaData = {
      "@context": "http://schema.org",
      "@type": "service",
      "name": "Opposable Thumbs",
      "url": "https://opposable-thumbs.vercel.app/"
    };
    JSON.stringify(schemaData);
    return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      navPosition: "absolute",
      navTextColor: "black",
      menuBtnColor: this.state.menuBtnColor,
      page: "home",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }
    }, __jsx("meta", {
      name: "google-site-verification",
      content: "fTp7loBzDTAjXEutiEclfst4c3vt13uktqW_dAFTWoI",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 3
      }
    }), __jsx("meta", {
      name: "keywords",
      content: "brand identity agency, brand identity design agency, corporate identity agency, brand identity, branding design, digital media management,digital media agency, social media agencies,digital media marketing companies",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 3
      }
    }), __jsx("title", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 11
      }
    }, "Brand Identity Agency | Opposable Thumbs"), __jsx("meta", {
      name: "description",
      content: "Opposable Thumbs work with companies for their branding. If you have a new brand to launch, we can help you, right from naming it to developing its identity.",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 1
      }
    }), __jsx("link", {
      rel: "icon",
      href: "/favicon.ico",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 11
      }
    }), __jsx("script", {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=G-VTMF70P7HW",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 14
      }
    }), __jsx("script", {
      dangerouslySetInnerHTML: {
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VTMF70P7HW');
          `
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 11
      }
    }), __jsx("script", {
      type: "application/ld+json",
      dangerouslySetInnerHTML: {
        __html: JSON.stringify(schemaData)
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 1
      }
    })), this.state.loadingLogoReady && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + `${this.state.animate ? "animate" : ""}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        height: `${this.props.common.windowHeight}px`
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "loading-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "/images/loading_logo.png",
      alt: "homecover",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 19
      }
    }))), __jsx("div", {
      style: {
        height: `${this.props.common.windowHeight}px`
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + `top-section-wrapper black-cursor ${this.state.animate ? "animate" : ""}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 11
      }
    }, __jsx("img", {
      style: this.state.backgroundStyles,
      src: "/images/home-cover.jpg",
      ref: this.backgroundImage,
      alt: "homecover",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + `background`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "top-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "storytellers futura-light",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "overflow-hidden",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "child",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 27
      }
    }, "MEET THE STORYTELLERS"))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "hello helvetica-neue-condensed",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "overflow-hidden",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "child",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 27
      }
    }, "Hello")), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "full-service big-caslon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "overflow-hidden",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "child",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 31
      }
    }, "Independent", __jsx("br", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 45
      }
    }), "Agency")))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "home-down-arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow down",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 25
      }
    }, " ")), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "overflow-hidden looking-for",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "child",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "bottom-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 27
      }
    }, __jsx("h1", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 56
      }
    }, "Brand Identity Agency")))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "white-fade",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-categories text-center padded-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 13
      }
    }, "Insights / Brand Identity / Packaging / Advertising / Digital / Graphics / Films"), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-items",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "row no-gutters",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 odd larger-cursor white-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }
    }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_6__["Parallax"], {
      bgImage: "/images/portfolio/BigBanyan.jpg",
      bgImageAlt: "big banyan",
      strength: 200,
      className: `portfolio-item ${this.state.isMobile ? "white-menu-btn" : ""}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/projects/big-banyan",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 35
      }
    }, "Big Banyan ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 88
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 118
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 35
      }
    }, "An Italian winemaker. A passionate brand team. And us. Years of t\xEAte-\xE0-t\xEAtes and research-driven insights led us to recreate the packaging and communication strategy for Big Banyan. "))))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 even larger-cursor white-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 19
      }
    }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_6__["Parallax"], {
      bgImage: "/images/portfolio/langoor.jpg",
      bgImageAlt: "langoor",
      strength: 200,
      className: `portfolio-item ${this.state.isMobile ? "white-menu-btn" : ""}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/projects/langoor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 35
      }
    }, "L'angoor ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 86
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 116
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 35
      }
    }, "Wine can be elegant. Wine can be sophisticated. But wine and fun? Here\u2019s how we married \u2018fun\u2019 and a new brand of wines from Big Banyan, known for its premium wines."))))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 odd larger-cursor white-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 19
      }
    }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_6__["Parallax"], {
      bgImage: "/images/portfolio/Enchanteur.jpg",
      bgImageAlt: "enchanteur",
      strength: 200,
      className: "portfolio-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/projects/enchanteur",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 35
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 37
      }
    }, "Enchanteur ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 90
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 120
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 37
      }
    }, "It\u2019s French, it\u2019s romantic and it\u2019s so very floral. How can we not fall in love with Enchanteur? We have K-drama fans on our team who absolutely love this brand!"))))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 even larger-cursor white-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 19
      }
    }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_6__["Parallax"], {
      bgImage: "/images/portfolio/fynd.jpg",
      bgImageAlt: "langoor",
      strength: 200,
      className: "portfolio-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/projects/fynd",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 35
      }
    }, "FYND ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 82
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 112
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 35
      }
    }, "Seeded in the idea of self-expression, FYND inspired us with its functional clothing lines. From strategy to identity and brand architecture design, we helped bring this brand to life. "))))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 odd larger-cursor white-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 19
      }
    }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_6__["Parallax"], {
      bgImage: "/images/portfolio/Chandrika3.jpg",
      bgImageAlt: "langoor",
      strength: 200,
      className: `portfolio-item ${this.state.isMobile ? "white-menu-btn" : ""}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 23
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/projects/chandrika",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 35
      }
    }, "Chandrika ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 87
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 117
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 35
      }
    }, "Here\u2019s a brand we all grew up with. And yet, it managed to surprise us with its secrets. We shared these little nuggets with the world in our campaign."))))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 even larger-cursor white-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 19
      }
    }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_6__["Parallax"], {
      bgImage: "/images/portfolio/Santoor.jpg",
      bgImageAlt: "langoor",
      strength: 200,
      className: "portfolio-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/projects/santoor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 35
      }
    }, "Santoor ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 85
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 115
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 35
      }
    }, "Who doesn\u2019t remember the classic \u201Cmummy\u201D ads! It gives us great pride to work on campaigns for a brand that\u2019s as relevant today as it was a few decades ago."))))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 odd larger-cursor white-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 19
      }
    }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_6__["Parallax"], {
      bgImage: "/images/portfolio/VoiJeans.png",
      bgImageAlt: "langoor",
      strength: 200,
      className: `portfolio-item ${this.state.isMobile ? "white-menu-btn" : ""}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/projects/voi-jeans",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 35
      }
    }, "VOI Jeans ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 87
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 117
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 35
      }
    }, "The very idea of these denims inspired us! VOI has ergonomically engineered denims that called for edgy, fashion forward communication. And we reveled in it."))))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 even larger-cursor white-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 19
      }
    }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_6__["Parallax"], {
      bgImage: "/images/portfolio/Iceburg1.jpg",
      bgImageAlt: "langoor",
      strength: 200,
      className: `portfolio-item ${this.state.isMobile ? "white-menu-btn" : ""}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 23
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/projects/iceburg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 35
      }
    }, "IceBurg ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 85
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 115
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 35
      }
    }, "Intense cravings for burgers and shakes fed our brains as we worked on the brand idea and identity for this UK-based gourmet burger chain."))))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 odd mia-by-tanishq larger-cursor white-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 19
      }
    }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_6__["Parallax"], {
      bgImage: "/images/portfolio/Mia1.jpg",
      bgImageAlt: "langoor",
      strength: 200,
      className: `portfolio-item ${this.state.isMobile ? "white-menu-btn" : ""}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/projects/mia-by-tanishq",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 35
      }
    }, "Mia - Tanishq ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 91
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 121
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 35
      }
    }, "These films are a collection of stories of Indian women who inspire you with their resilience, charm you with their presence and awe you with their achievements."))))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 even larger-cursor white-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 19
      }
    }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_6__["Parallax"], {
      bgImage: "/images/portfolio/Graphics1.jpg",
      bgImageAlt: "graphics",
      strength: 200,
      className: "portfolio-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 35
      }
    }, "Graphics"), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 35
      }
    }, "A digital art project that led us to create edgy, modern graphics for clothing and merchandise."))))))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/projects",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "no-css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "explore-more text-center padded-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "browse",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 21
      }
    }, "browse"), __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "explore-arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 23
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "down",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 25
      }
    })))))), __jsx("div", {
      ref: this.whiteMenuSections[0],
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "services position-relative padded-content white-cursor white-cursor white-menu-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "service-heading more-letter-spacing futura-light slightly-larger-text yellow-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 15
      }
    }, "SERVICES"), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "service-lists",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 15
      }
    }, __jsx("ul", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "service-items list-style-none white-text larger-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 17
      }
    }, __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: {
        pathname: '/projects',
        query: {
          filter: 'insights'
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 23
      }
    }, "Insights"))), __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: {
        pathname: '/projects',
        query: {
          filter: 'brand-identity'
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 25
      }
    }, "Brand Identity"))), __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: {
        pathname: '/projects',
        query: {
          filter: 'packaging'
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 25
      }
    }, "Packaging"))), __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: {
        pathname: '/projects',
        query: {
          filter: 'advertising'
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 25
      }
    }, "Advertising"))), __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: {
        pathname: '/projects',
        query: {
          filter: 'digital'
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 25
      }
    }, "Digital"))), __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: {
        pathname: '/projects',
        query: {
          filter: 'digital'
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 25
      }
    }, "Graphics"))), __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: {
        pathname: '/projects',
        query: {
          filter: 'films'
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 25
      }
    }, "Films")))), __jsx("ul", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "skills list-style-none slightly-larger-text futura-light yellow-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 17
      }
    }, __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 19
      }
    }, "CREATIVE"), __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 19
      }
    }, "INSIGHT-DRIVEN"), __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 19
      }
    }, "CULTURALLY RELEVANT"))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "service-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: "/images/services-bg-2.png",
      alt: "homecover",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "width-100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 17
      }
    })), __jsx("div", {
      style: {
        marginTop: "7.2rem"
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "show-mobile hide-desktop text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 15
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "down",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 17
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "position-relative",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 11
      }
    }, __jsx(_components_clients__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 13
      }
    }), __jsx("img", {
      src: "/images/wave-black.gif",
      alt: "homecover",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "width-100 wave",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433,
        columnNumber: 13
      }
    }))), !this.state.loadingLogoReady && __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "black-bg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438,
        columnNumber: 11
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2863980262",
      dynamic: [this.props.common.windowHeight + 100],
      __self: this
    }, `.white-fade.__jsx-style-dynamic-selector{position:absolute;bottom:0;height:10rem;width:50%;background:-moz-linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,1));background:-webkit-linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,1));background:linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,1));background:linear-gradient(to bottom,rgba(255,255,255,0),white);}.arrow-right.__jsx-style-dynamic-selector{-webkit-transition:-webkit-transform 400ms cubic-bezier(0.77,0,0.175,1);-webkit-transition:transform 400ms cubic-bezier(0.77,0,0.175,1);transition:transform 400ms cubic-bezier(0.77,0,0.175,1);display:inline-block;}.p-info-wrapper.__jsx-style-dynamic-selector:hover .arrow-right.__jsx-style-dynamic-selector,.portfolio-item.__jsx-style-dynamic-selector:hover .arrow-right.__jsx-style-dynamic-selector{-webkit-transform:translateX(1rem);-ms-transform:translateX(1rem);transform:translateX(1rem);}.wave.__jsx-style-dynamic-selector{width:100%;position:absolute;bottom:0;left:0;}.service-items.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#ffffff;}.service-items.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:none;text-decoration:none;color:#F9ED32;}.service-items.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector:hover{font-family:PoppinsMediumItalic,sans-serif !important;}.p-info-wrapper.__jsx-style-dynamic-selector{position:relative;}.format1.__jsx-style-dynamic-selector .p-info.__jsx-style-dynamic-selector{position:absolute;bottom:0;color:#ffffff;bottom:7rem;padding:0 5%;}.animate.__jsx-style-dynamic-selector .hello.__jsx-style-dynamic-selector .child.__jsx-style-dynamic-selector{-webkit-transition-delay:0.4s;transition-delay:0.4s;}.animate.__jsx-style-dynamic-selector .storytellers.__jsx-style-dynamic-selector .child.__jsx-style-dynamic-selector{-webkit-transition-delay:0.6s;transition-delay:0.6s;}.animate.__jsx-style-dynamic-selector .full-service.__jsx-style-dynamic-selector .child.__jsx-style-dynamic-selector{-webkit-transition-delay:0.8s;transition-delay:0.8s;}.animate.__jsx-style-dynamic-selector .looking-for.__jsx-style-dynamic-selector .child.__jsx-style-dynamic-selector{-webkit-transition-delay:1s;transition-delay:1s;}.explore-more.__jsx-style-dynamic-selector{font-size:4.6rem;margin-top:8rem;}.service-lists.__jsx-style-dynamic-selector{margin-left:14rem;}.service-items.__jsx-style-dynamic-selector{padding-left:6.5rem;margin-top:5rem;line-height:1.2;border-left:1px solid #ffffff;}.skills.__jsx-style-dynamic-selector{margin-top:6rem;padding-left:6.5rem;}.service-image.__jsx-style-dynamic-selector{position:absolute;right:-5%;top:-1%;width:47%;}.services.__jsx-style-dynamic-selector{background:#000000;padding-top:8.8rem;padding-bottom:25rem;overflow:hidden;}.portfolio.__jsx-style-dynamic-selector{background:#ffffff;padding-top:8rem;padding-bottom:8rem;position:relative;}.portfolio-items.__jsx-style-dynamic-selector{margin-top:17rem;padding-left:15%;padding-right:15%;}.portfolio-items.__jsx-style-dynamic-selector .row.__jsx-style-dynamic-selector .even.__jsx-style-dynamic-selector{margin-top:-8rem;}.portfolio-title.__jsx-style-dynamic-selector{font-size:4.6rem;}.portfolio-item.format2.__jsx-style-dynamic-selector .image-wrapper.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:100%;}.portfolio-description.__jsx-style-dynamic-selector{width:80%;}.even.__jsx-style-dynamic-selector .format2.__jsx-style-dynamic-selector .portfolio-info.__jsx-style-dynamic-selector{margin-bottom:12rem;}.format2.__jsx-style-dynamic-selector .portfolio-info.__jsx-style-dynamic-selector{margin-top:3rem;padding:0 5%;}.format1.__jsx-style-dynamic-selector .portfolio-info.__jsx-style-dynamic-selector{position:absolute;bottom:0;color:#ffffff;bottom:8rem;padding:0 5%;}.format1.__jsx-style-dynamic-selector{padding-top:125%;background-attachment:fixed;background-size:50%;background-repeat:no-repeat;}.even.__jsx-style-dynamic-selector .format1.__jsx-style-dynamic-selector{background-position:calc(100%) 0px;}.portfolio-categories.__jsx-style-dynamic-selector{font-size:1.8rem;}.bottom-text.__jsx-style-dynamic-selector{margin-top:4.5rem;font-size:1.8rem;}.home-down-arrow.__jsx-style-dynamic-selector{margin-top:4rem;opacity:0;-webkit-animation-name:floating-__jsx-style-dynamic-selector;animation-name:floating-__jsx-style-dynamic-selector;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-transition:opacity 1s;transition:opacity 1s;-webkit-transition-delay:1.4s;transition-delay:1.4s;}.animate.__jsx-style-dynamic-selector .home-down-arrow.__jsx-style-dynamic-selector{opacity:1;}@-webkit-keyframes floating-__jsx-style-dynamic-selector{from{-webkit-transform:translate(0,0px);-ms-transform:translate(0,0px);transform:translate(0,0px);}65%{-webkit-transform:translate(0,15px);-ms-transform:translate(0,15px);transform:translate(0,15px);}to{-webkit-transform:translate(0,-0px);-ms-transform:translate(0,-0px);transform:translate(0,-0px);}}@keyframes floating-__jsx-style-dynamic-selector{from{-webkit-transform:translate(0,0px);-ms-transform:translate(0,0px);transform:translate(0,0px);}65%{-webkit-transform:translate(0,15px);-ms-transform:translate(0,15px);transform:translate(0,15px);}to{-webkit-transform:translate(0,-0px);-ms-transform:translate(0,-0px);transform:translate(0,-0px);}}.storytellers.__jsx-style-dynamic-selector{-webkit-letter-spacing:1.7rem;-moz-letter-spacing:1.7rem;-ms-letter-spacing:1.7rem;letter-spacing:1.7rem;font-size:1.2rem;margin-top:15rem;}.animate.__jsx-style-dynamic-selector .loading-wrapper.__jsx-style-dynamic-selector{-webkit-transform:translateY(-${this.props.common.windowHeight + 100}px);-ms-transform:translateY(-${this.props.common.windowHeight + 100}px);transform:translateY(-${this.props.common.windowHeight + 100}px);}.loading-wrapper.__jsx-style-dynamic-selector{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.loading-wrapper.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:1000;background:#000000;-webkit-transition:-webkit-transform 0.6s cubic-bezier(0.77,0,0.175,1);-webkit-transition:transform 0.6s cubic-bezier(0.77,0,0.175,1);transition:transform 0.6s cubic-bezier(0.77,0,0.175,1);}.black-bg.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:999;background:#000000;}.loading-wrapper.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:200px;position:absolute;left:calc(50% - 100px);top:calc(50% - 56px);}.top-section-wrapper.__jsx-style-dynamic-selector{max-width:100%;width:100%;height:100vh;margin:auto;overflow:hidden;position:relative;background:#ffffff;}.top-content.__jsx-style-dynamic-selector{position:relative;z-index:2;text-align:center;height:100%;overflow:hidden;}.text.__jsx-style-dynamic-selector{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;padding-bottom:5rem;}.hello.__jsx-style-dynamic-selector{color:#ffff20;font-size:36rem;position:relative;line-height:0.8;}.full-service.__jsx-style-dynamic-selector{color:#414042;font-size:7rem;position:absolute;left:0;right:0;margin:auto;top:3rem;line-height:1.15;}.background.__jsx-style-dynamic-selector{position:absolute;width:100%;opacity:0;-webkit-transition:opacity 1.5s;transition:opacity 1.5s;-webkit-transition-delay:1.2s;transition-delay:1.2s;}.animate.__jsx-style-dynamic-selector .background.__jsx-style-dynamic-selector{opacity:1;}.contact.__jsx-style-dynamic-selector{position:absolute;bottom:3.5rem;right:3.5rem;z-index:3;font-size:1.4rem;}.contact.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#212529;}.contact.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{color:#212529;-webkit-text-decoration:none;text-decoration:none;}.underline.__jsx-style-dynamic-selector{position:absolute;display:inline-block;left:0;width:0;height:0.1rem;background:#000000;bottom:-1rem;-webkit-transition:all 0.3s cubic-bezier(0.785,0.135,0.15,0.86);transition:all 0.3s cubic-bezier(0.785,0.135,0.15,0.86);}.contact.__jsx-style-dynamic-selector:hover .underline.__jsx-style-dynamic-selector,.underline.expand.__jsx-style-dynamic-selector{width:6rem;}.browse.__jsx-style-dynamic-selector{margin-bottom:-1rem;}@media only screen and (max-width:768px){.text.__jsx-style-dynamic-selector{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:40%;}.hello.__jsx-style-dynamic-selector{font-size:16rem;}.full-service.__jsx-style-dynamic-selector{font-size:3.5rem;}.storytellers.__jsx-style-dynamic-selector{font-size:1.1rem;margin-top:0;}.bottom-text.__jsx-style-dynamic-selector{margin-top:7rem;}.portfolio-items.__jsx-style-dynamic-selector{margin-top:3rem;padding-left:0;padding-right:0;}.portfolio-items.__jsx-style-dynamic-selector .row.__jsx-style-dynamic-selector .even.__jsx-style-dynamic-selector{margin-top:0;}.mia-by-tanishq.__jsx-style-dynamic-selector{margin-top:-5rem;}.service-lists.__jsx-style-dynamic-selector{margin-left:0rem;position:relative;z-index:10;}.service-heading.__jsx-style-dynamic-selector{text-align:center;}.service-items.__jsx-style-dynamic-selector{padding-left:0;border-left:none;text-align:center;}.skills.__jsx-style-dynamic-selector{padding-left:0;text-align:center;}.service-image.__jsx-style-dynamic-selector{display:none;}.services.__jsx-style-dynamic-selector{padding-bottom:8.8rem;}.white-fade.__jsx-style-dynamic-selector{height:3rem;}.full-service.__jsx-style-dynamic-selector{top:0;}.storytellers.__jsx-style-dynamic-selector{margin-bottom:2rem;}.portfolio.__jsx-style-dynamic-selector{padding-bottom:4rem;}.explore-more.__jsx-style-dynamic-selector{margin-top:4rem;}.explore-arrow.__jsx-style-dynamic-selector{display:inline-block;margin-left:1rem;}.browse.__jsx-style-dynamic-selector{margin-bottom:-2rem;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25cXERvY3VtZW50c1xcR2l0SHViXFxhbnRvbi5naXRodWIuaW9cXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Ym9CLEFBR2lDLEFBVXlDLEFBSzlELEFBRWMsQUFPRSxBQUdPLEFBSWtDLEFBR3JDLEFBR0MsQUFPSSxBQUdBLEFBR0EsQUFHRixBQUdKLEFBSUUsQUFHRSxBQU1KLEFBSUUsQUFNQSxBQU1BLEFBTUEsQUFLRixBQUdFLEFBR1IsQUFHQSxBQUdTLEFBR0osQUFJSyxBQU9ELEFBTWtCLEFBR25CLEFBR0UsQUFJSCxBQVVSLEFBRzBCLEFBQ0EsQUFDQSxBQUdYLEFBS2dDLEFBR2hDLEFBR1AsQUFVRixBQVNELEFBTUcsQUFTRyxBQU9OLEFBUUUsQUFNQSxBQVVJLEFBT1IsQUFHUSxBQU9KLEFBR0EsQUFJSSxBQVdQLEFBR00sQUFJUSxBQUlWLEFBR0UsQUFHRCxBQUlBLEFBR0EsQUFLSixBQUdJLEFBR0MsQUFLQSxBQUdILEFBS0EsQUFTRixBQUdTLEFBR1IsQUFHUixBQUdjLEFBR0EsQUFHSixBQUdLLEFBSUQsTUFmckIsSUFwT0YsQUEyQ0EsQUEyRkEsQ0E5Tm9CLEFBcUZwQixBQXFLQSxDQWpGc0IsQUFzQkwsQUEwSGYsQ0FsQ0EsQUE0QkEsQ0E1U0YsQUFnTW9CLEFBTUQsQUEyQm5CLEFBR3lCLENBckZmLEFBVUYsQUFlTyxBQXNISyxBQUtDLENBdFBDLEFBMENSLEFBMkJELEFBNElYLEFBVUEsQUFHZ0IsQUFtRGhCLENBOVJlLEFBbUNHLEFBS3BCLEFBR0EsQUF1QmdDLEFBU2hDLEFBc0pFLEFBR2MsQUFlZCxBQUdvQixDQTlTWCxBQWtDWCxBQUdXLEFBdUJYLEFBYVksQUEwQ0MsQUFtQk8sQUFtRU4sQUErQkMsQUFVRyxBQWNPLEFBbUR2QixDQXBPa0IsQUFNRixBQTJQaEIsQ0FqUmdCLEFBNkNsQixBQWtLQSxBQXFFRSxBQVVBLENBckxTLEFBVUYsQUF1S1csQ0FsQmxCLElBNUwwQixBQXNEWCxDQWhNRixBQXFDQyxBQThFRSxDQTFDUixBQStGSyxBQVVGLEFBdUJTLENBdkxaLEFBNkZWLEFBK0dzQixBQVVSLENBOUNhLEFBOEJMLEFBb0VwQixDQU9pQixDQWpERixBQW9FSSxDQTlQckIsQUFtUUUsQ0FoT21CLENBb0NyQixBQU9BLEFBd0tlLENBL09HLEFBTWxCLEFBS1ksQUFXVSxFQWxFYixBQTREYSxBQTBRcEIsQ0FoTGUsQUFVRixBQWNDLEFBd0NZLEFBdUJqQixDQS9QQyxDQXFDRSxBQThFRSxJQWhHaEIsQUFzR3dCLEFBeUhWLENBeEtkLEFBK0hnQixBQXVESixBQThDVixDQWhGUyxBQXFFVCxDQWhQRixBQXFLbUIsRUF2TndFLEFBd0I1RSxBQTZSYixDQXJIa0IsQ0F2SnBCLEFBR0EsQUFHQSxBQWVnQyxBQTRCaEMsQUE4RWlCLEFBVUgsQ0E3SUMsQUE4RUUsQUFzRVEsQ0E3SnpCLEFBa01ZLEFBa0NNLENBZEcsQ0E5SkYsRUFxSEMsQ0EzSEgsR0FpSkQsRUF0TWhCLEFBMEpxQixBQXFDckIsQUFrQ0EsQ0FqSWdDLEFBZ0RULENBbkl2QixBQThFQSxDQTZFc0IsQ0FnRUMsSUFkdkIsRUE5SkEsQUFxR0EsQUFnQkEsQUFzQmEsQ0FqSmIsT0FoQkEsQ0FxSEEsQUE2Q3FCLENBaEVyQixBQVM4RCxDQXdCdkMsQ0FZRyxDQW9EVCxNQXZQakIsQUErR0EsQUF5QnNDLEVBcUZaLENBcEZZLEFBQ0EsQ0EwSGYsR0E3Q3ZCLEFBaUMrRCxJQWhFL0QsQ0ExQ3FCLFdBdUhuQixNQXRIbUIsV0F6SnlFLE1BMEo5RixDQWxCMEIsT0FnRzFCLGlCQTFCMEIsVUFqRDFCLGtCQXZKc0IsQUFtSWlCLHFCQWxJdkMsTUFOc0YsQ0FrUXRGLDJDQXBEc0IsT0FyRW9CLEdBZ0MxQyxRQXNDd0IsZ0JBOU0rQyxJQStNdkUscURBdEUwQixPQXhJMUIsNkNBeUl5QixvREFDekIiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbnRvblxcRG9jdW1lbnRzXFxHaXRIdWJcXGFudG9uLmdpdGh1Yi5pb1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IEFycm93IGZyb20gXCIuLi9jb21wb25lbnRzL2Fycm93XCJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtvcGVuTWVudX0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcbmltcG9ydCBDbGllbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvY2xpZW50cydcbmltcG9ydCB7YWRkQ2xhc3NUb0N1cnNvcixyZW1vdmVDbGFzc0Zyb21DdXJzb3J9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnXG5pbXBvcnQgeyBNT0JJTEVfQlJFQUtQT0lOVCB9IGZyb20gXCIuLi9jb25maWdcIlxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc01vYmlsZTpmYWxzZSxcbiAgICAgIHVuZGVybGluZUV4cGFuZDogZmFsc2UsXG4gICAgICBiYWNrZ3JvdW5kU3R5bGVzOiB7IHRvcDogXCIwXCIsIGxlZnQ6IFwiMFwiIH0sXG4gICAgICBiYWNrZ3JvdW5kUmVhZHk6IGZhbHNlLFxuICAgICAgYmFja2dyb3VuZFNob3c6IGZhbHNlLFxuICAgICAgbG9hZGluZ0xvZ29SZWFkeTogZmFsc2UsXG4gICAgICBhbmltYXRlOiBmYWxzZSxcbiAgICAgIG1lbnVCdG5Db2xvcjpcImJsYWNrXCJcbiAgICB9O1xuICAgIHRoaXMuYmFja2dyb3VuZEltYWdlID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgICB0aGlzLnJlbGxheFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5ub3RQZXJmb3JtZWRBbmltYXRpb24gPSB0cnVlXG4gICAgdGhpcy53aGl0ZU1lbnVTZWN0aW9ucyA9IFtSZWFjdC5jcmVhdGVSZWYoKV1cbiAgfVxuICAvLyBoYW5kbGVTY3JvbGwgPSAoKT0+e1xuICAvLyAgIGZvcihsZXQgaT0wO2k8dGhpcy53aGl0ZU1lbnVTZWN0aW9ucy5sZW5ndGg7aSsrKXtcbiAgLy8gICAgIGxldCBib3VuZGluZ1ZhbHMgPSB0aGlzLndoaXRlTWVudVNlY3Rpb25zW2ldLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgLy8gICAgIGlmKGJvdW5kaW5nVmFscy50b3AgPCAwICYmIChib3VuZGluZ1ZhbHMudG9wICogLTEgPCBib3VuZGluZ1ZhbHMuaGVpZ2h0KSl7XG4gIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbnVCdG5Db2xvcjpcIndoaXRlXCJ9KVxuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudUJ0bkNvbG9yOlwiYmxhY2tcIn0pXG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG4gIGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICB0aGlzLnBvc2l0aW9uSW1hZ2UoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtpc01vYmlsZTp3aW5kb3cuaW5uZXJXaWR0aCA8IE1PQklMRV9CUkVBS1BPSU5UP3RydWU6ZmFsc2V9KVxuICB9XG4gIHBvc2l0aW9uSW1hZ2UoY2IpIHtcbiAgICBsZXQgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjByZW1cIiwgbGVmdDogXCItMzEuNSVcIiwgd2lkdGg6IFwiMjA4JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNDAwKVxuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjByZW1cIiwgbGVmdDogXCItMzEuNSVcIiwgd2lkdGg6IFwiMjA4JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNjUwKVxuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItMjAuNSVcIiwgd2lkdGg6IFwiMTIwJVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAyNClcbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7dG9wOlwiLTEuNXJlbVwiLGxlZnQ6XCItMjAuNSVcIix3aWR0aDpcIjEyMCVcIn1cbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7IHRvcDogXCItMC41cmVtXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTM2NilcbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7IHRvcDogXCItMC41cmVtXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTQ0MClcbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7IHRvcDogXCItMS41cmVtXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgLy8gfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBiYWNrZ3JvdW5kU3R5bGVzIH0sICgpID0+IHtcbiAgICAgIGlmIChjYikge1xuICAgICAgICBjYigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuc3RhdGUuYmFja2dyb3VuZFJlYWR5ICYmXG4gICAgICB0aGlzLnN0YXRlLmxvYWRpbmdMb2dvUmVhZHkgJiZcbiAgICAgIHRoaXMubm90UGVyZm9ybWVkQW5pbWF0aW9uXG4gICAgKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uSW1hZ2UoKTtcbiAgICAgIHRoaXMubm90UGVyZm9ybWVkQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLnByb3BzLm9wZW5NZW51KGZhbHNlKTtcbiAgICAgIC8vIHRoaXMubW91c2VFdmVudHMoKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbmltYXRlOiB0cnVlIH0sKCk9PntcbiAgICAgICAgICAvLyB0aGlzLnByb3BzLnJlbW92ZUNsYXNzRnJvbUN1cnNvcihcImxhcmdlclwiKSAgXG4gICAgICAgICAgLy8gdGhpcy5wcm9wcy5yZW1vdmVDbGFzc0Zyb21DdXJzb3IoXCJ3aGl0ZVwiKSAgXG4gICAgICAgIH0pO1xuICAgICAgfSwgNzUwKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aXNNb2JpbGU6d2luZG93LmlubmVyV2lkdGggPCBNT0JJTEVfQlJFQUtQT0lOVD90cnVlOmZhbHNlfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLmhhbmRsZVJlc2l6ZSlcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVNjcm9sbClcbiAgICBjb25zdCBsb2FkaW5nTG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGxvYWRpbmdMb2dvLnNyYyA9IFwiL2ltYWdlcy9sb2FkaW5nX2xvZ28ucG5nXCI7XG4gICAgbG9hZGluZ0xvZ28ub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmdMb2dvUmVhZHk6IHRydWUgfSk7XG4gICAgfTtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gXCIvaW1hZ2VzL2hvbWUtY292ZXIuanBnXCI7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYWNrZ3JvdW5kUmVhZHk6IHRydWUgfSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMucmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKFwid2hpdGVcIilcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuaGFuZGxlUmVzaXplKVxuICAgIC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlU2Nyb2xsKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICBcbi8vICAgICBmb3Igc2VvIHB1cnBvc2VcbiAgICAgIGNvbnN0IHNjaGVtYURhdGE9e1xuXG4gICAgICBcIkBjb250ZXh0XCI6IFwiaHR0cDovL3NjaGVtYS5vcmdcIixcbiAgICAgIFwiQHR5cGVcIjogXCJzZXJ2aWNlXCIsXG4gICAgICBcIm5hbWVcIjogXCJPcHBvc2FibGUgVGh1bWJzXCIsXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vb3Bwb3NhYmxlLXRodW1icy52ZXJjZWwuYXBwL1wiXG4gICB9XG5cbiAgIEpTT04uc3RyaW5naWZ5KHNjaGVtYURhdGEpXG4gICAgXG4gICAgXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgbmF2UG9zaXRpb249XCJhYnNvbHV0ZVwiIG5hdlRleHRDb2xvcj1cImJsYWNrXCIgbWVudUJ0bkNvbG9yPXt0aGlzLnN0YXRlLm1lbnVCdG5Db2xvcn0gcGFnZT1cImhvbWVcIj5cbiAgICAgICAgPEhlYWQ+XG4gIDxtZXRhIG5hbWU9XCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIiBjb250ZW50PVwiZlRwN2xvQnpEVEFqWEV1dGlFY2xmc3Q0YzN2dDEzdWt0cVdfZEFGVFdvSVwiIC8+XG4gIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJicmFuZCBpZGVudGl0eSBhZ2VuY3ksIGJyYW5kIGlkZW50aXR5IGRlc2lnbiBhZ2VuY3ksIGNvcnBvcmF0ZSBpZGVudGl0eSBhZ2VuY3ksIGJyYW5kIGlkZW50aXR5LCBicmFuZGluZyBkZXNpZ24sIGRpZ2l0YWwgbWVkaWEgbWFuYWdlbWVudCxkaWdpdGFsIG1lZGlhIGFnZW5jeSwgc29jaWFsIG1lZGlhIGFnZW5jaWVzLGRpZ2l0YWwgbWVkaWEgbWFya2V0aW5nIGNvbXBhbmllc1wiLz5cbiAgICAgICAgICA8dGl0bGU+QnJhbmQgSWRlbnRpdHkgQWdlbmN5IHwgT3Bwb3NhYmxlIFRodW1iczwvdGl0bGU+XG4gICAgICAgICAgey8qIDxoMT5PcHBvc2FibGUgVGh1bWJzPC9oMT4gKi99XG48bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiT3Bwb3NhYmxlIFRodW1icyB3b3JrIHdpdGggY29tcGFuaWVzIGZvciB0aGVpciBicmFuZGluZy4gSWYgeW91IGhhdmUgYSBuZXcgYnJhbmQgdG8gbGF1bmNoLCB3ZSBjYW4gaGVscCB5b3UsIHJpZ2h0IGZyb20gbmFtaW5nIGl0IHRvIGRldmVsb3BpbmcgaXRzIGlkZW50aXR5LlwiLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry1WVE1GNzBQN0hXXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICBndGFnKCdjb25maWcnLCAnRy1WVE1GNzBQN0hXJyk7XG4gICAgICAgICAgYCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz4gXG5cbiB7Lyogc2NoZW1hIGlzIGltcGxlbWVudGVkICovfVxuPHNjcmlwdFxuICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCJcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KHNjaGVtYURhdGEpIH19XG4gIC8+XG4gICAgICAgICAgICAgICAgICBcbjwvSGVhZD5cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZ0xvZ29SZWFkeSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuYW5pbWF0ZSA/IFwiYW5pbWF0ZVwiIDogXCJcIn1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy13cmFwcGVyXCIgc3R5bGU9e3toZWlnaHQ6YCR7dGhpcy5wcm9wcy5jb21tb24ud2luZG93SGVpZ2h0fXB4YH19PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvYWRpbmdfbG9nby5wbmdcIiBhbHQ9J2hvbWVjb3ZlcicgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9wLXNlY3Rpb24td3JhcHBlciBibGFjay1jdXJzb3IgJHt0aGlzLnN0YXRlLmFuaW1hdGUgPyBcImFuaW1hdGVcIiA6IFwiXCJ9YH0gc3R5bGU9e3sgaGVpZ2h0OiBgJHt0aGlzLnByb3BzLmNvbW1vbi53aW5kb3dIZWlnaHR9cHhgIH19PlxuICAgICAgICAgICAgey8qIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9ob21lLWNvdmVyLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJob21lIGNvdmVyXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPVwiXCI+ICovfVxuICAgICAgICAgICAgPGltZyBzdHlsZT17dGhpcy5zdGF0ZS5iYWNrZ3JvdW5kU3R5bGVzfSBzcmM9XCIvaW1hZ2VzL2hvbWUtY292ZXIuanBnXCIgY2xhc3NOYW1lPXtgYmFja2dyb3VuZGB9IHJlZj17dGhpcy5iYWNrZ3JvdW5kSW1hZ2V9IGFsdD0naG9tZWNvdmVyJy8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Rvcnl0ZWxsZXJzIGZ1dHVyYS1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgTUVFVCBUSEUgU1RPUllURUxMRVJTICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVsbG8gaGVsdmV0aWNhLW5ldWUtY29uZGVuc2VkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVsbG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVsbC1zZXJ2aWNlIGJpZy1jYXNsb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZGVwZW5kZW50PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFnZW5jeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWRvd24tYXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgZG93blwiPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBsb29raW5nLWZvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS10ZXh0XCI+PGgxPkJyYW5kIElkZW50aXR5IEFnZW5jeTwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8L1BhcmFsbGF4PiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hpdGUtZmFkZVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1jYXRlZ29yaWVzIHRleHQtY2VudGVyIHBhZGRlZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIEluc2lnaHRzIC8gQnJhbmQgSWRlbnRpdHkgLyBQYWNrYWdpbmcgLyBBZHZlcnRpc2luZyAvIERpZ2l0YWwgLyBHcmFwaGljcyAvIEZpbG1zXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWl0ZW1zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9kZCBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9CaWdCYW55YW4uanBnXCIgYmdJbWFnZUFsdD1cImJpZyBiYW55YW5cIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvYmlnLWJhbnlhblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5CaWcgQmFueWFuIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5BbiBJdGFsaWFuIHdpbmVtYWtlci4gQSBwYXNzaW9uYXRlIGJyYW5kIHRlYW0uIEFuZCB1cy4gWWVhcnMgb2YgdMOqdGUtw6AtdMOqdGVzIGFuZCByZXNlYXJjaC1kcml2ZW4gaW5zaWdodHMgbGVkIHVzIHRvIHJlY3JlYXRlIHRoZSBwYWNrYWdpbmcgYW5kIGNvbW11bmljYXRpb24gc3RyYXRlZ3kgZm9yIEJpZyBCYW55YW4uIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBldmVuIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL2xhbmdvb3IuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvbGFuZ29vclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5MJ2FuZ29vciA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+V2luZSBjYW4gYmUgZWxlZ2FudC4gV2luZSBjYW4gYmUgc29waGlzdGljYXRlZC4gQnV0IHdpbmUgYW5kIGZ1bj8gSGVyZeKAmXMgaG93IHdlIG1hcnJpZWQg4oCYZnVu4oCZIGFuZCBhIG5ldyBicmFuZCBvZiB3aW5lcyBmcm9tIEJpZyBCYW55YW4sIGtub3duIGZvciBpdHMgcHJlbWl1bSB3aW5lcy48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2RkIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL0VuY2hhbnRldXIuanBnXCIgYmdJbWFnZUFsdD1cImVuY2hhbnRldXJcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9XCJwb3J0Zm9saW8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL2VuY2hhbnRldXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+RW5jaGFudGV1ciA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5JdOKAmXMgRnJlbmNoLCBpdOKAmXMgcm9tYW50aWMgYW5kIGl04oCZcyBzbyB2ZXJ5IGZsb3JhbC4gSG93IGNhbiB3ZSBub3QgZmFsbCBpbiBsb3ZlIHdpdGggRW5jaGFudGV1cj8gV2UgaGF2ZSBLLWRyYW1hIGZhbnMgb24gb3VyIHRlYW0gd2hvIGFic29sdXRlbHkgbG92ZSB0aGlzIGJyYW5kITwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZXZlbiBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9meW5kLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJsYW5nb29yXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPVwicG9ydGZvbGlvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9meW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkZZTkQgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPlNlZWRlZCBpbiB0aGUgaWRlYSBvZiBzZWxmLWV4cHJlc3Npb24sIEZZTkQgaW5zcGlyZWQgdXMgd2l0aCBpdHMgZnVuY3Rpb25hbCBjbG90aGluZyBsaW5lcy4gRnJvbSBzdHJhdGVneSB0byBpZGVudGl0eSBhbmQgYnJhbmQgYXJjaGl0ZWN0dXJlIGRlc2lnbiwgd2UgaGVscGVkIGJyaW5nIHRoaXMgYnJhbmQgdG8gbGlmZS4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9kZCBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vQ2hhbmRyaWthMy5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT17YHBvcnRmb2xpby1pdGVtICR7dGhpcy5zdGF0ZS5pc01vYmlsZT9cIndoaXRlLW1lbnUtYnRuXCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9jaGFuZHJpa2FcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+Q2hhbmRyaWthIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5IZXJl4oCZcyBhIGJyYW5kIHdlIGFsbCBncmV3IHVwIHdpdGguIEFuZCB5ZXQsIGl0IG1hbmFnZWQgdG8gc3VycHJpc2UgdXMgd2l0aCBpdHMgc2VjcmV0cy4gV2Ugc2hhcmVkIHRoZXNlIGxpdHRsZSBudWdnZXRzIHdpdGggdGhlIHdvcmxkIGluIG91ciBjYW1wYWlnbi48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGV2ZW4gbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vU2FudG9vci5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvc2FudG9vclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5TYW50b29yIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5XaG8gZG9lc27igJl0IHJlbWVtYmVyIHRoZSBjbGFzc2ljIOKAnG11bW154oCdIGFkcyEgSXQgZ2l2ZXMgdXMgZ3JlYXQgcHJpZGUgdG8gd29yayBvbiBjYW1wYWlnbnMgZm9yIGEgYnJhbmQgdGhhdOKAmXMgYXMgcmVsZXZhbnQgdG9kYXkgYXMgaXQgd2FzIGEgZmV3IGRlY2FkZXMgYWdvLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZGQgbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vVm9pSmVhbnMucG5nXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvdm9pLWplYW5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPlZPSSBKZWFucyA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+VGhlIHZlcnkgaWRlYSBvZiB0aGVzZSBkZW5pbXMgaW5zcGlyZWQgdXMhIFZPSSBoYXMgZXJnb25vbWljYWxseSBlbmdpbmVlcmVkIGRlbmltcyB0aGF0IGNhbGxlZCBmb3IgZWRneSwgZmFzaGlvbiBmb3J3YXJkIGNvbW11bmljYXRpb24uIEFuZCB3ZSByZXZlbGVkIGluIGl0LjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBldmVuIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9JY2VidXJnMS5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT17YHBvcnRmb2xpby1pdGVtICR7dGhpcy5zdGF0ZS5pc01vYmlsZT9cIndoaXRlLW1lbnUtYnRuXCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9pY2VidXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkljZUJ1cmcgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPkludGVuc2UgY3JhdmluZ3MgZm9yIGJ1cmdlcnMgYW5kIHNoYWtlcyBmZWQgb3VyIGJyYWlucyBhcyB3ZSB3b3JrZWQgb24gdGhlIGJyYW5kIGlkZWEgYW5kIGlkZW50aXR5IGZvciB0aGlzIFVLLWJhc2VkIGdvdXJtZXQgYnVyZ2VyIGNoYWluLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZGQgbWlhLWJ5LXRhbmlzaHEgbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vTWlhMS5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT17YHBvcnRmb2xpby1pdGVtICR7dGhpcy5zdGF0ZS5pc01vYmlsZT9cIndoaXRlLW1lbnUtYnRuXCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9taWEtYnktdGFuaXNocVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5NaWEgLSBUYW5pc2hxIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5UaGVzZSBmaWxtcyBhcmUgYSBjb2xsZWN0aW9uIG9mIHN0b3JpZXMgb2YgSW5kaWFuIHdvbWVuIHdobyBpbnNwaXJlIHlvdSB3aXRoIHRoZWlyIHJlc2lsaWVuY2UsIGNoYXJtIHlvdSB3aXRoIHRoZWlyIHByZXNlbmNlIGFuZCBhd2UgeW91IHdpdGggdGhlaXIgYWNoaWV2ZW1lbnRzLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBldmVuIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL0dyYXBoaWNzMS5qcGdcIiBiZ0ltYWdlQWx0PVwiZ3JhcGhpY3NcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9XCJwb3J0Zm9saW8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5HcmFwaGljcyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPkEgZGlnaXRhbCBhcnQgcHJvamVjdCB0aGF0IGxlZCB1cyB0byBjcmVhdGUgZWRneSwgbW9kZXJuIGdyYXBoaWNzIGZvciBjbG90aGluZyBhbmQgbWVyY2hhbmRpc2UuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5vLWNzc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbG9yZS1tb3JlIHRleHQtY2VudGVyIHBhZGRlZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJvd3NlXCI+YnJvd3NlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiNC42cmVtXCJ9fT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXhwbG9yZS1hcnJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93IGRpcmVjdGlvbj1cImRvd25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXMgcG9zaXRpb24tcmVsYXRpdmUgcGFkZGVkLWNvbnRlbnQgd2hpdGUtY3Vyc29yIHdoaXRlLWN1cnNvciB3aGl0ZS1tZW51LWJ0blwiIHJlZj17dGhpcy53aGl0ZU1lbnVTZWN0aW9uc1swXX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1oZWFkaW5nIG1vcmUtbGV0dGVyLXNwYWNpbmcgZnV0dXJhLWxpZ2h0IHNsaWdodGx5LWxhcmdlci10ZXh0IHllbGxvdy10ZXh0XCI+U0VSVklDRVM8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWxpc3RzXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNlcnZpY2UtaXRlbXMgbGlzdC1zdHlsZS1ub25lIHdoaXRlLXRleHQgbGFyZ2VyLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ2luc2lnaHRzJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEluc2lnaHRzXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnYnJhbmQtaWRlbnRpdHknIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEJyYW5kIElkZW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdwYWNrYWdpbmcnIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFBhY2thZ2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnYWR2ZXJ0aXNpbmcnIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkdmVydGlzaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdkaWdpdGFsJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBEaWdpdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdkaWdpdGFsJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBHcmFwaGljc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnZmlsbXMnIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEZpbG1zXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2tpbGxzIGxpc3Qtc3R5bGUtbm9uZSBzbGlnaHRseS1sYXJnZXItdGV4dCBmdXR1cmEtbGlnaHQgeWVsbG93LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxsaT5DUkVBVElWRTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+SU5TSUdIVC1EUklWRU48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPkNVTFRVUkFMTFkgUkVMRVZBTlQ8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc2VydmljZXMtYmctMi5wbmdcIiBjbGFzc05hbWU9XCJ3aWR0aC0xMDBcIiAgYWx0PSdob21lY292ZXInLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1tb2JpbGUgaGlkZS1kZXNrdG9wIHRleHQtY2VudGVyXCIgc3R5bGU9e3ttYXJnaW5Ub3A6XCI3LjJyZW1cIn19PlxuICAgICAgICAgICAgICAgIDxBcnJvdyBkaXJlY3Rpb249XCJkb3duXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPENsaWVudHMgLz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy93YXZlLWJsYWNrLmdpZlwiIGNsYXNzTmFtZT1cIndpZHRoLTEwMCB3YXZlXCIgYWx0PSdob21lY292ZXInIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7IXRoaXMuc3RhdGUubG9hZGluZ0xvZ29SZWFkeSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibGFjay1iZ1wiPjwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAud2hpdGUtZmFkZXtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIGhlaWdodDogMTByZW07XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSgyNTUsMjU1LDI1NSwgMSkpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LDI1NSwyNTUsIDEpKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSgyNTUsMjU1LDI1NSwgMSkpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCB3aGl0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXJyb3ctcmlnaHR7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBjdWJpYy1iZXppZXIoMC43NywgMCwgMC4xNzUsIDEpO1xuICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wLWluZm8td3JhcHBlcjpob3ZlciAuYXJyb3ctcmlnaHQsLnBvcnRmb2xpby1pdGVtOmhvdmVyIC5hcnJvdy1yaWdodHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMXJlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC53YXZle1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAvLyBib3R0b206IC03OCU7XG4gICAgICAgICAgICAgIGJvdHRvbTowO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2UtaXRlbXMgbGkgYXtcbiAgICAgICAgICAgICAgY29sb3I6I2ZmZmZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWl0ZW1zIGxpIGE6aG92ZXJ7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgICBjb2xvcjojRjlFRDMyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2UtaXRlbXMgbGk6aG92ZXJ7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zTWVkaXVtSXRhbGljLHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wLWluZm8td3JhcHBlcntcbiAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybWF0MSAucC1pbmZve1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIGJvdHRvbTogN3JlbTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCA1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbmltYXRlIC5oZWxsbyAuY2hpbGR7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuc3Rvcnl0ZWxsZXJzIC5jaGlsZHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC42cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbmltYXRlIC5mdWxsLXNlcnZpY2UgLmNoaWxke1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIC5hbmltYXRlIC5sb29raW5nLWZvciAuY2hpbGR7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDFzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmV4cGxvcmUtbW9yZXtcbiAgICAgICAgICAgICAgZm9udC1zaXplOjQuNnJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDo4cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2UtbGlzdHMge1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTRyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1pdGVtc3tcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2LjVyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZmZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5za2lsbHMge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2cmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDYuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWltYWdle1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHJpZ2h0OiAtNSU7XG4gICAgICAgICAgICAgIHRvcDogLTElO1xuICAgICAgICAgICAgICB3aWR0aDogNDclO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2Vze1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMwMDAwMDA7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOjguOHJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206MjVyZW07XG4gICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3J0Zm9saW97XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6OHJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhyZW07XG4gICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtc3tcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjE3cmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxNSU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDoxNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9ydGZvbGlvLWl0ZW1zIC5yb3cgLmV2ZW57XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6LThyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9ydGZvbGlvLXRpdGxle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTo0LjZyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9ydGZvbGlvLWl0ZW0uZm9ybWF0MiAuaW1hZ2Utd3JhcHBlciBpbWd7XG4gICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9ydGZvbGlvLWRlc2NyaXB0aW9ue1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmV2ZW4gLmZvcm1hdDIgLnBvcnRmb2xpby1pbmZve1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjEycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1hdDIgLnBvcnRmb2xpby1pbmZve1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOjNyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmc6MCA1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtYXQxIC5wb3J0Zm9saW8taW5mb3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogOHJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1hdDF7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEyNSU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmV2ZW4gLmZvcm1hdDF7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlKSAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9ydGZvbGlvLWNhdGVnb3JpZXN7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjEuOHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib3R0b20tdGV4dHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0LjVyZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjEuOHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ob21lLWRvd24tYXJyb3d7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo0cmVtO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmxvYXRpbmc7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6MS40cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbmltYXRlIC5ob21lLWRvd24tYXJyb3d7XG4gICAgICAgICAgICAgIG9wYWNpdHk6MTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZmxvYXRpbmcge1xuICAgICAgICAgICAgICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgIDBweCk7IH1cbiAgICAgICAgICAgICAgNjUlICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDE1cHgpOyB9XG4gICAgICAgICAgICAgIHRvICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMHB4KTsgfSAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdG9yeXRlbGxlcnMge1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjdyZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAubG9hZGluZy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSR7dGhpcy5wcm9wcy5jb21tb24ud2luZG93SGVpZ2h0ICsgMTAwfXB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb2FkaW5nLXdyYXBwZXIge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9hZGluZy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ibGFjay1iZ3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9hZGluZy13cmFwcGVyIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcbiAgICAgICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gNTZweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudG9wLXNlY3Rpb24td3JhcHBlciB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudG9wLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlbGxvIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmYyMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cmVtO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDowLjg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZnVsbC1zZXJ2aWNlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQxNDA0Mjs7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA3cmVtO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICB0b3A6IDNyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAzLjVyZW07XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDMuNXJlbTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3QgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdCBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIxMjUyOTtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudW5kZXJsaW5lIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLjFyZW07XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICBib3R0b206IC0xcmVtO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjc4NSwgMC4xMzUsIDAuMTUsIDAuODYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3Q6aG92ZXIgLnVuZGVybGluZSxcbiAgICAgICAgICAgIC51bmRlcmxpbmUuZXhwYW5kIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5icm93c2V7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206LTFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpe1xuICAgICAgICAgICAgICAudGV4dHtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmhlbGxve1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNnJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZnVsbC1zZXJ2aWNle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zdG9yeXRlbGxlcnN7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjEuMXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmJvdHRvbS10ZXh0e1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDdyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtc3tcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucG9ydGZvbGlvLWl0ZW1zIC5yb3cgLmV2ZW57XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDowO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5taWEtYnktdGFuaXNocXtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOi01cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlLWxpc3RzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHJlbTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlcnZpY2UtaGVhZGluZ3tcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VydmljZS1pdGVtc3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDpub25lO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5za2lsbHN7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlcnZpY2UtaW1hZ2Uge1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0OiAtMTAlO1xuICAgICAgICAgICAgICAgIC8vIHRvcDphdXRvO1xuICAgICAgICAgICAgICAgIC8vIGJvdHRvbTogLTElO1xuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiA1NyU7XG4gICAgICAgICAgICAgICAgLy8gei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlcnZpY2Vze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjguOHJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAud2hpdGUtZmFkZXtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDozcmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5mdWxsLXNlcnZpY2V7XG4gICAgICAgICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnN0b3J5dGVsbGVycyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucG9ydGZvbGlve1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjRyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxvcmUtbW9yZXtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjRyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxvcmUtYXJyb3d7XG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYnJvd3Nle1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206LTJyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHsgY29tbW9uIH0pIHtcbiAgcmV0dXJuIHtcbiAgICBjb21tb24sXG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge29wZW5NZW51LGFkZENsYXNzVG9DdXJzb3IscmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yfSkoSG9tZSk7XG4iXX0= */
/*@ sourceURL=C:\\Users\\Anton\\Documents\\GitHub\\anton.github.io\\pages\\index.js */`));
  }

}

function mapStateToProps({
  common
}) {
  return {
    common
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  openMenu: _redux_actions__WEBPACK_IMPORTED_MODULE_8__["openMenu"],
  addClassToCursor: _redux_actions__WEBPACK_IMPORTED_MODULE_8__["addClassToCursor"],
  removeClassFromCursor: _redux_actions__WEBPACK_IMPORTED_MODULE_8__["removeClassFromCursor"]
})(Home));

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

/***/ "@vimeo/player":
/*!********************************!*\
  !*** external "@vimeo/player" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@vimeo/player");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-animate-on-scroll":
/*!******************************************!*\
  !*** external "react-animate-on-scroll" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-animate-on-scroll");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-parallax":
/*!*********************************!*\
  !*** external "react-parallax" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-parallax");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fycm93LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2xpZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rlc2t0b3BNZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9hZGluZ0ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB2aW1lby9wbGF5ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXBhcmFsbGF4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiQXJyb3ciLCJwcm9wcyIsImRpcmVjdGlvbiIsIkNsaWVudHMiLCJBTklNQVRJT05fRFVSQVRJT04iLCJEZXNrdG9wTWVudSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImVycm9yIiwic2V0RXJyb3IiLCJtZXNzYWdlVGV4dCIsInNldE1lc3NhZ2VUZXh0IiwibWVzc2FnZVRleHRUb3VjaGVkIiwic2V0TWVzc2FnZVRleHRUb3VjaGVkIiwibWVzc2FnZVRleHRWYWxpZCIsInNldE1lc3NhZ2VUZXh0VmFsaWQiLCJtb3VzZU92ZXJDdXJzb3JFZmZlY3QiLCJhZGRDbGFzc1RvQ3Vyc29yIiwibW91c2VPdXRDdXJzb3JFZmZlY3QiLCJyZW1vdmVDbGFzc0Zyb21DdXJzb3IiLCJkZWJvdW5jZSIsIm1ldGhvZCIsImRlbGF5IiwiY2xlYXJUaW1lb3V0IiwiX3RJZCIsInNldFRpbWVvdXQiLCJkSGFuZGxlU2Nyb2xsIiwid2hpdGUiLCJlbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJib3VuZGluZ1ZhbHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJoZWlnaHQiLCJzZXRNZW51QnRuQ29sb3IiLCJoYW5kbGVTY3JvbGwiLCJtb3VzZU92ZXJXaGl0ZUN1cnNvciIsIm1vdXNlT3V0V2hpdGVDdXJzb3IiLCJtb3VzZU92ZXJCbGFja0N1cnNvciIsImFkZE1vdXNlTGlzdGVuZXJzIiwiZm9yRWFjaCIsImVsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVNb3VzZUxpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRXaGl0ZU1lbnVUcmlnZ2VycyIsInVzZUVmZmVjdCIsIndpbmRvdyIsInNlbmRNZXNzYWdlIiwiZmV0Y2giLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXNzYWdlIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJzdGF0dXMiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJlbWFpbEluU3RyaW5nIiwidGV4dCIsInJlIiwidGVzdCIsInZhbGlkYXRlTWVzc2FnZSIsIm9uTWVzc2FnZUNoYW5nZSIsInR4dCIsImNvbW1vbiIsIndpbmRvd0hlaWdodCIsIm1lbnVPcGVuIiwicGFnZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbm5lY3QiLCJGb290ZXIiLCJidG5Db250ZW50IiwidHlwZSIsIm5vV2F2ZURlc2t0b3AiLCJub1dhdmVNb2JpbGUiLCJDb21wb25lbnQiLCJyZXF1aXJlIiwiTGF5b3V0IiwiY29uc3RydWN0b3IiLCJpbm5lcldpZHRoIiwiTU9CSUxFX0JSRUFLUE9JTlQiLCJzZXRXaW5kb3ciLCJpbm5lckhlaWdodCIsIm1vZGUiLCJzdGF0ZSIsInNldFN0YXRlIiwibW91c2VYIiwibW91c2VZIiwidHJhaWxpbmdYIiwidHJhaWxpbmdZIiwiZGlmZlgiLCJkaWZmWSIsImN1cnNvciIsImN1cnJlbnQiLCJzdHlsZSIsInRyYW5zZm9ybSIsImN1cnNvclRyYWlsaW5nIiwiYW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3ZlQ3Vyc29yIiwiZXZ0IiwiY2xpZW50WCIsImNsaWVudFkiLCJtb3VzZUNpcmNsZUNvbG9yIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJjb21wb25lbnREaWRNb3VudCIsInNldFdpbiIsIm9uTW91c2VNb3ZlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNob3dfZnVsbHNjcmVlbl92aWRlbyIsInZpZGVvIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2aWRlb190eXBlIiwib25jYW5wbGF5IiwicGxheSIsInBsYXllciIsIlBsYXllciIsInJlbmRlciIsInZpZGVvX3NyYyIsIm1lbnVfYnRuX2NvbG9yIiwiaGlkZUZ1bGxzY3JlZW5WaWRlbyIsInN0b3BQcm9wYWdhdGlvbiIsInZpZGVvX2lkIiwiY3Vyc29yQ2xhc3NlcyIsImpvaW4iLCJoaW5kaVRleHQiLCJuYXZQb3NpdGlvbiIsIm5hdlRleHRDb2xvciIsIm1lbnVCdG5Db2xvciIsImNoaWxkcmVuIiwiZm9vdGVyVHlwZSIsIkxvYWRpbmdJY29uIiwic2hvdyIsIndpZHRoIiwid2VpZ2h0IiwiY2VudGVyZWQiLCJjb2xvciIsIk5hdmlnYXRpb24iLCJtZW51QnRuQ2xpY2siLCJ0b2dnbGVNZW51IiwiVmlkZW9FbWJlZCIsImh0bWxfaWQiLCJ2aWRlb2lkIiwibG9vcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJTRU5ER1JJRF9BUElfS0VZIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwicm91dGVyIiwiaHJlZiIsImV2ZW50Iiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJoYXNXYXJuZWQiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEhyZWYiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJ3YXJuIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJMaW5rIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJ1cGRhdGUiLCJtb2QiLCJkYXRhIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwib3B0aW9ucyIsInByZXBhcmVVcmxBcyIsImNoYW5nZSIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYXJzZWQiLCJ0cnlQYXJzZVJlbGF0aXZlVXJsIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIlByb21pc2UiLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImVuY29kZVVSSUNvbXBvbmVudCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsInNlYXJjaFBhcmFtcyIsIkFycmF5IiwiaXRlbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJrZXkiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJIb21lIiwicG9zaXRpb25JbWFnZSIsImlzTW9iaWxlIiwidW5kZXJsaW5lRXhwYW5kIiwiYmFja2dyb3VuZFN0eWxlcyIsImxlZnQiLCJiYWNrZ3JvdW5kUmVhZHkiLCJiYWNrZ3JvdW5kU2hvdyIsImxvYWRpbmdMb2dvUmVhZHkiLCJhbmltYXRlIiwiYmFja2dyb3VuZEltYWdlIiwicmVsbGF4UmVmIiwibm90UGVyZm9ybWVkQW5pbWF0aW9uIiwid2hpdGVNZW51U2VjdGlvbnMiLCJib3R0b20iLCJvcGVuTWVudSIsImhhbmRsZVJlc2l6ZSIsImxvYWRpbmdMb2dvIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJpbWciLCJzY2hlbWFEYXRhIiwiX19odG1sIiwiZmlsdGVyIiwibWFyZ2luVG9wIiwiU0VUX1dJTkRPVyIsIlRPR0dMRV9NRU5VIiwiT1BFTl9NRU5VIiwiQUREX0NMQVNTX1RPX0NVUlNPUiIsIlJFTU9WRV9DTEFTU19GUk9NX0NVUlNPUiIsIkhJREVfRlVMTF9TQ1JFRU5fVklERU8iLCJTSE9XX0ZVTExfU0NSRUVOX1ZJREVPIiwiU0VUX01FTlVfQlROX0NPTE9SIiwic2hvd0Z1bGxzY3JlZW5WaWRlbyIsIndpbmRvd1dpZHRoIiwiYm9vbCIsImNscyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWUsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXFCO0FBQ2hDLFNBQ0ksbUVBQ0E7QUFBQSx3Q0FBaUIsV0FBVUEsS0FBSyxDQUFDQyxTQUFVLEVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUFvRCxPQUFHLEVBQUMsT0FBeEQ7QUFBQSx3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QUFFSFE7QUFGRyxHQUFQO0FBSUg7QUFDTSxTQUFTblksZUFBVCxDQUF5QnFILEtBQXpCLEVBQStCO0FBQ2xDLFNBQU87QUFDSHJFLFFBQUksRUFBQytVLGtCQURGO0FBRUgxUTtBQUZHLEdBQVA7QUFJSDtBQUNNLFNBQVN2SSxxQkFBVCxDQUErQnFaLEdBQS9CLEVBQW1DO0FBQ3RDLFNBQU87QUFDSG5WLFFBQUksRUFBQzRVLHdCQURGO0FBRUhPO0FBRkcsR0FBUDtBQUlILEM7Ozs7Ozs7Ozs7O0FDeERELDBDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnJvdyhwcm9wcyl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb2ludGVyICR7cHJvcHMuZGlyZWN0aW9ufWB9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2Fycm93LnN2Z1wiIGNsYXNzTmFtZT1cImFycm93LWltYWdlXCJhbHQ9J2ltYWdlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmFycm93LWltYWdle1xuICAgICAgICAgICAgICAgIHdpZHRoOjIuOHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb2ludGVyLmxlZnR7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZVkoLTE1cHgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9pbnRlci5kb3due1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9pbnRlcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApXG59IiwiaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tICdyZWFjdC1hbmltYXRlLW9uLXNjcm9sbCc7XG5pbXBvcnQge0FOSU1BVElPTl9EVVJBVElPTn0gZnJvbSAnLi4vY29uZmlnJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpZW50cygpe1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50cyBwYWRkZWQtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnRzLWhlYWRpbmcgbW9yZS1sZXR0ZXItc3BhY2luZyBmdXR1cmEtbGlnaHQgc2xpZ2h0bHktbGFyZ2VyLXRleHRcIj5UT1AgQ0xJRU5UUzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnQtbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwic2Nyb2xsRmFkZUluXCIgZHVyYXRpb249e0FOSU1BVElPTl9EVVJBVElPTn0gYW5pbWF0ZU9uY2U9e3RydWV9IGRlbGF5PXswfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jbGllbnRzL2JpZ2Jhbnlhbi5wbmdcImFsdD0naW1hZ2UnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwic2Nyb2xsRmFkZUluXCIgZHVyYXRpb249e0FOSU1BVElPTl9EVVJBVElPTn0gYW5pbWF0ZU9uY2U9e3RydWV9IGRlbGF5PXsxMDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NsaWVudHMvZnluZC5wbmdcImFsdD0naW1hZ2UnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwic2Nyb2xsRmFkZUluXCIgZHVyYXRpb249e0FOSU1BVElPTl9EVVJBVElPTn0gYW5pbWF0ZU9uY2U9e3RydWV9IGRlbGF5PXsyMDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NsaWVudHMvY2VsbHdvcmtzLnBuZ1wiYWx0PSdpbWFnZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJzY3JvbGxGYWRlSW5cIiBkdXJhdGlvbj17QU5JTUFUSU9OX0RVUkFUSU9OfSBhbmltYXRlT25jZT17dHJ1ZX0gZGVsYXk9ezMwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY2xpZW50cy90YW5pc2hxLnBuZ1wiYWx0PSdpbWFnZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJzY3JvbGxGYWRlSW5cIiBkdXJhdGlvbj17QU5JTUFUSU9OX0RVUkFUSU9OfSBhbmltYXRlT25jZT17dHJ1ZX0gZGVsYXk9ezQwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY2xpZW50cy9jaGFuZHJpa2EucG5nXCJhbHQ9J2ltYWdlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cInNjcm9sbEZhZGVJblwiIGR1cmF0aW9uPXtBTklNQVRJT05fRFVSQVRJT059IGFuaW1hdGVPbmNlPXt0cnVlfSBkZWxheT17NTAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jbGllbnRzL2xhbmdvb3IucG5nXCJhbHQ9J2ltYWdlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cInNjcm9sbEZhZGVJblwiIGR1cmF0aW9uPXtBTklNQVRJT05fRFVSQVRJT059IGFuaW1hdGVPbmNlPXt0cnVlfSBkZWxheT17NjAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jbGllbnRzL2ljZWJ1cmcucG5nXCJhbHQ9J2ltYWdlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cInNjcm9sbEZhZGVJblwiIGR1cmF0aW9uPXtBTklNQVRJT05fRFVSQVRJT059IGFuaW1hdGVPbmNlPXt0cnVlfSBkZWxheT17NzAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jbGllbnRzL2VuY2hhbnRldXIucG5nXCJhbHQ9J2ltYWdlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cInNjcm9sbEZhZGVJblwiIGR1cmF0aW9uPXtBTklNQVRJT05fRFVSQVRJT059IGFuaW1hdGVPbmNlPXt0cnVlfSBkZWxheT17ODAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jbGllbnRzL3NhbnRvb3IucG5nXCIgYWx0PSdpbWFnZScvPlxuICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cInNjcm9sbEZhZGVJblwiIGR1cmF0aW9uPXtBTklNQVRJT05fRFVSQVRJT059IGFuaW1hdGVPbmNlPXt0cnVlfSBkZWxheT17ODAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jbGllbnRzL2theWFsLnBuZ1wiIGFsdD0naW1hZ2UnLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jbGllbnRze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjVyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206MTByZW07XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsaWVudC1saXN0e1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOjVyZW07XG4gICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgZmxleC1mbG93OnJvdyB3cmFwO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6NSU7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6NSU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xpZW50e1xuICAgICAgICAgICAgICB3aWR0aDoyMCU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6MCAyLjUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsaWVudCBpbWd7XG4gICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpe1xuICAgICAgICAgICAgICAgIC5jbGllbnR7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNsaWVudHMge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNsaWVudHMtaGVhZGluZ3tcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jbGllbnQtbGlzdHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogN3JlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufSIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgQXJyb3cgZnJvbSAnLi4vY29tcG9uZW50cy9hcnJvdydcbmltcG9ydCBMb2FkaW5nSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRpbmdJY29uJ1xuaW1wb3J0IHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHthZGRDbGFzc1RvQ3Vyc29yLHJlbW92ZUNsYXNzRnJvbUN1cnNvcixzZXRNZW51QnRuQ29sb3J9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnXG5mdW5jdGlvbiBEZXNrdG9wTWVudShwcm9wcyl7XG4gICAgdmFyIFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgdmFyIFtzdWNjZXNzLHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgdmFyIFtlcnJvcixzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICB2YXIgW21lc3NhZ2VUZXh0LHNldE1lc3NhZ2VUZXh0XSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgdmFyIFttZXNzYWdlVGV4dFRvdWNoZWQsc2V0TWVzc2FnZVRleHRUb3VjaGVkXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgdmFyIFttZXNzYWdlVGV4dFZhbGlkLHNldE1lc3NhZ2VUZXh0VmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgZnVuY3Rpb24gbW91c2VPdmVyQ3Vyc29yRWZmZWN0KCl7XG4gICAgICAgIHByb3BzLmFkZENsYXNzVG9DdXJzb3IoXCJsYXJnZXJcIilcbiAgICB9XG4gICAgZnVuY3Rpb24gbW91c2VPdXRDdXJzb3JFZmZlY3QoKXtcbiAgICAgICAgcHJvcHMucmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKFwibGFyZ2VyXCIpXG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlYm91bmNlKG1ldGhvZCwgZGVsYXkpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KG1ldGhvZC5fdElkKTtcbiAgICAgICAgbWV0aG9kLl90SWQ9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIG1ldGhvZCgpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRIYW5kbGVTY3JvbGwoKXtcbiAgICAgICAgbGV0IHdoaXRlID0gZmFsc2VcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndoaXRlLW1lbnUtYnRuJylcbiAgICAgICAgZm9yKGxldCBpPTA7aTxlbGVtZW50cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGxldCBib3VuZGluZ1ZhbHMgPSBlbGVtZW50c1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgaWYoYm91bmRpbmdWYWxzLnRvcCA8IDAgJiYgKGJvdW5kaW5nVmFscy50b3AgKiAtMSA8IGJvdW5kaW5nVmFscy5oZWlnaHQpKXtcbiAgICAgICAgICAgICAgICB3aGl0ZSA9IHRydWVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpdGUgPSBmYWxzZSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih3aGl0ZSlcbiAgICAgICAgICAgIHByb3BzLnNldE1lbnVCdG5Db2xvcihcIndoaXRlXCIpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHByb3BzLnNldE1lbnVCdG5Db2xvcihcImJsYWNrXCIpXG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpe1xuICAgICAgICAvLyBkZWJvdW5jZShkSGFuZGxlU2Nyb2xsLCA1MCk7XG4gICAgICAgIC8vIGRIYW5kbGVTY3JvbGwoKVxuICAgIH1cbiAgICBmdW5jdGlvbiBtb3VzZU92ZXJXaGl0ZUN1cnNvcigpe1xuICAgICAgICBwcm9wcy5hZGRDbGFzc1RvQ3Vyc29yKFwid2hpdGVcIilcbiAgICB9XG4gICAgZnVuY3Rpb24gbW91c2VPdXRXaGl0ZUN1cnNvcigpe1xuICAgICAgICBwcm9wcy5yZW1vdmVDbGFzc0Zyb21DdXJzb3IoXCJ3aGl0ZVwiKVxuICAgIH1cbiAgICBmdW5jdGlvbiBtb3VzZU92ZXJCbGFja0N1cnNvcigpe1xuICAgICAgICBwcm9wcy5yZW1vdmVDbGFzc0Zyb21DdXJzb3IoXCJ3aGl0ZVwiKVxuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRNb3VzZUxpc3RlbmVycygpe1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndoaXRlLWN1cnNvcicpLmZvckVhY2goZWxlPT57XG4gICAgICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsbW91c2VPdmVyV2hpdGVDdXJzb3IpXG4gICAgICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsbW91c2VPdXRXaGl0ZUN1cnNvcilcbiAgICAgIH0pXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxhY2stY3Vyc29yJykuZm9yRWFjaChlbGU9PntcbiAgICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsbW91c2VPdmVyQmxhY2tDdXJzb3IpXG4gICAgICB9KVxuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVNb3VzZUxpc3RlbmVycygpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2hpdGUtY3Vyc29yJykuZm9yRWFjaChlbGU9PntcbiAgICAgICAgICAgIGVsZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLG1vdXNlT3ZlcldoaXRlQ3Vyc29yKVxuICAgICAgICAgICAgZWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsbW91c2VPdXRXaGl0ZUN1cnNvcilcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0V2hpdGVNZW51VHJpZ2dlcnMoKXtcbiAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndoaXRlLW1lbnUtYnRuJykuZm9yRWFjaChlbGU9PntcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVsZSlcbiAgICAgICAgLy8gfSlcbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIC8vIHNldFdoaXRlTWVudVRyaWdnZXJzKClcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZEhhbmRsZVNjcm9sbClcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgYWRkTW91c2VMaXN0ZW5lcnMoKVxuICAgICAgICB9LDUwMDApXG4gICAgICAgIHJldHVybiAoKT0+e1xuICAgICAgICAgICAgcmVtb3ZlTW91c2VMaXN0ZW5lcnMoKVxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZEhhbmRsZVNjcm9sbClcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuICAgIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKCl7XG4gICAgICAgIGlmKG1lc3NhZ2VUZXh0VmFsaWQpe1xuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICAgICAgZmV0Y2goYC9hcGkvbWFpbGAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHttZXNzYWdlOm1lc3NhZ2VUZXh0fSkgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzPT5yZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0PT57XG4gICAgICAgICAgICAgICAgaWYocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIilcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VjY2Vzcyh0cnVlKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IodHJ1ZSlcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgIHNldEVycm9yKHRydWUpXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIH0pIFxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVtYWlsSW5TdHJpbmcodGV4dCkgeyBcbiAgICAgICAgdmFyIHJlID0gLygoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpLztcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QodGV4dCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlTWVzc2FnZSgpe1xuICAgICAgICBpZighZW1haWxJblN0cmluZyhtZXNzYWdlVGV4dCkpXG4gICAgICAgICAgICBzZXRNZXNzYWdlVGV4dFZhbGlkKGZhbHNlKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzZXRNZXNzYWdlVGV4dFZhbGlkKHRydWUpIFxuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1lc3NhZ2VDaGFuZ2UodHh0KXtcbiAgICAgICAgc2V0TWVzc2FnZVRleHRUb3VjaGVkKHRydWUpXG4gICAgICAgIHNldE1lc3NhZ2VUZXh0KHR4dClcbiAgICAgICAgdmFsaWRhdGVNZXNzYWdlKClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BkZXNrdG9wLW1lbnUgd2hpdGUtY3Vyc29yICR7cHJvcHMuY29tbW9uLm1lbnVPcGVuP1wic2hvd1wiOlwiXCJ9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sMVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbDEtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWxvZ28gb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvTWVudUxvZ28uc3ZnXCJhbHQ9J2ltYWdlJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWUgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcHBvc2FibGUgVGh1bWJzPGJyLz4gSW5kZXBlbmRlbnQgQWdlbmN5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRzIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxsIFJpZ2h0cyBSZXNlcnZlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaGVhZGluZyBmdXR1cmEtbGlnaHQgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkXCI+TUVOVTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUgcG9wcGlucy1yZWd1bGFyIGxhcmdlci1jdXJzb3IgbGlzdC1zdHlsZS1ub25lIGxhcmdlci10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPjxMaW5rIGhyZWY9XCIvXCI+PGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXYtdGV4dCBsYXJnZXItY3Vyc29yICR7cHJvcHMucGFnZT09XCJob21lXCI/XCJjdXJyZW50XCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhXCI+SG9tZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJcIj5Ib21lPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPjxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj48YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdi10ZXh0IGxhcmdlci1jdXJzb3IgJHtwcm9wcy5wYWdlPT1cInByb2plY3RzXCI/XCJjdXJyZW50XCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhXCI+UHJvamVjdHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiXCI+UHJvamVjdHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+PExpbmsgaHJlZj1cIi9hYm91dFwiPjxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2LXRleHQgbGFyZ2VyLWN1cnNvciAke3Byb3BzLnBhZ2U9PVwiYWJvdXRcIj9cImN1cnJlbnRcIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFcIj5BYm91dDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJcIj5BYm91dDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj48TGluayBocmVmPVwiL3NlcnZpY2VzXCI+PGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXYtdGV4dCBsYXJnZXItY3Vyc29yICR7cHJvcHMucGFnZT09XCJzZXJ2aWNlc1wiP1wiY3VycmVudFwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYVwiPlNlcnZpY2VzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYlwiPlNlcnZpY2VzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPjxMaW5rIGhyZWY9XCIvY29udGFjdFwiPjxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2LXRleHQgbGFyZ2VyLWN1cnNvciAke3Byb3BzLnBhZ2U9PVwiY29udGFjdFwiP1wiY3VycmVudFwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYVwiPkNvbnRhY3Q8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiXCI+Q29udGFjdDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj48TGluayBocmVmPVwiL2Jsb2dcIj48YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdi10ZXh0IGxhcmdlci1jdXJzb3IgJHtwcm9wcy5wYWdlPT1cImJsb2dcIj9cImN1cnJlbnRcIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFcIj5CbG9nPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYlwiPkJsb2c8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbDNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICB7c3VjY2Vzcz9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+VGhhbmsgeW91IGZvciB5b3VyIG1lc3NhZ2UuIFdlIHdpbGwgYmUgaW4gdG91Y2ggc29vbiE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXIgY2hpbGQgcG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXttZXNzYWdlVGV4dH0gb25DaGFuZ2U9eyhlKT0+b25NZXNzYWdlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJTZW5kIGEgTWVzc2FnZVwiIGNsYXNzTmFtZT1cImNvbnRhY3QtaW5wdXQgdW5kZXJsaW5lZC13aGl0ZS1pbnB1dCB3aWR0aC0xMDBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtYXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdJY29uIHNob3c9XCJ0cnVlXCIgd2lkdGg9XCIyLjVyZW1cIiBoZWlnaHQ9XCIyLjVyZW1cIiB3ZWlnaHQ9XCJ0aGluXCIgY2VudGVyZWQ9XCJ0cnVlXCIgY29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKT0+c2VuZE1lc3NhZ2UoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3cgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7IW1lc3NhZ2VUZXh0VmFsaWQgJiYgbWVzc2FnZVRleHRUb3VjaGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLW1zZ1wiPk1lc3NhZ2Ugc2hvdWxkIGNvbnRhaW4gYW4gZW1haWwgYWRkcmVzcy48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItbXNnXCI+VGhlcmUgd2FzIGFuIHVuZXhwZWN0ZWQgZXJyb3Igc2VuZGluZyB5b3VyIG1lc3NhZ2UuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5ndWFnZVwiPkxhbmd1YWdlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZHJlc3MtdGl0bGUgc2xpZ2h0bHktbGFyZ2VyLXRleHRcIj5PcHBvc2FibGUgVGh1bWJzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzLXRleHQgZnV0dXJhLWJvb2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VycmVudGx5IHdvcmtpbmcgb3V0IG9mIGxpdmluZyByb29tcyBhY3Jvc3MgSW5kaWEuPGJyIC8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZeKAmWxsIHVwZGF0ZSBvdXIgb2ZmaWNlIGFkZHJlc3Mgd2hlbiB0aGUgd29ybGTigJlzIGEgdGFkIHNhZmVyIHRvIGxpdmUgaW4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmVycm9yLW1zZ3tcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdC1pbnB1dHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6My41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3QtYXJyb3d7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFkZHJlc3MtdGV4dHtcbiAgICAgICAgICAgICAgICBjb2xvcjojYTBhMGEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFkZHJlc3N7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo2cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxhbmd1YWdle1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zUmVndWxhcixzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NS41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMi4ycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJpZ2h0c3tcbiAgICAgICAgICAgICAgICBjb2xvcjojOTY5OTlDO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNzVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjMuNHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWhlYWRpbmd7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjEuNHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IGxpe1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg1NDBkZWcpO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MDBtcywgb3BhY2l0eSA1MDBtcztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5Oi4zcztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaG93IC5tZW51IGxpe1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IGxpIGF7XG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQuOXJlbTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdi10ZXh0IC5ie1xuICAgICAgICAgICAgICAgIGNvbG9yOiNGOUVEMzI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2LXRleHR7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuMnMgY3ViaWMtYmV6aWVyKC4xOSwxLC4yMiwxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYtdGV4dC5jdXJyZW50e1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSBsaSBhOmhvdmVyIHNwYW57XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IGxpIGE6aG92ZXJ7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29sMXtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnNSZWd1bGFyLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjRyZW07XG4gICAgICAgICAgICAgICAgLy8gZm9udC1mYW1pbHk6IE5ldWZyZWl0LCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIC8vZm9udC1mYW1pbHk6IEZ1dHVyYUxpZ2h0LCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIC8vZm9udC1mYW1pbHk6IEZ1dHVyYUJvb2ssIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgLy9mb250LWZhbWlseTogRnV0dXJhTURCVCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb2wxLWNvbnRlbnR7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbjphdXRvO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRlc2t0b3AtbWVudXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6OTk2O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzAwMDAwMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNjAwbXM7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc3LCAwLCAwLjE3NSwgMSk7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVza3RvcC1tZW51LnNob3d7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiR7cHJvcHMuY29tbW9uLndpbmRvd0hlaWdodH1weDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzpzY3JvbGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGVudC13cmFwcGVye1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxNC40cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoaWxke1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXM7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2hvdyAuY2hpbGR7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbDF7XG4gICAgICAgICAgICAgICAgd2lkdGg6MzIuNyU7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29sMntcbiAgICAgICAgICAgICAgICB3aWR0aDozNS42NSU7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29sM3tcbiAgICAgICAgICAgICAgICB3aWR0aDoxMi45JTtcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIC51bmRlcmxpbmVkLXdoaXRlLWlucHV0e1xuICAgICAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KXtcbiAgICAgICAgICAgICAgICAubWVudSBsaSBhOmhvdmVyIC5uYXYtdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cmVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpe1xuICAgICAgICAgICAgICAgIC5lcnJvci1tc2d7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGVudC13cmFwcGVye1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6Y29sdW1uIG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6OHJlbTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjUlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjUlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29sMXtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6MztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbDJ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOjE7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29sM3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6MjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6M3JlbTtcbiAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgLm1lbnUtbG9nbywubmFtZXtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb2wxLWNvbnRlbnR7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjJyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYW1le1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yaWdodHN7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFkZHJlc3N7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6M3JlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbDMgLmlucHV0LXdyYXBwZXJ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjphdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29sMyAudW5kZXJsaW5lZC13aGl0ZS1pbnB1dHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7Y29tbW9ufSl7XG4gICAgcmV0dXJuIHtjb21tb259XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyx7YWRkQ2xhc3NUb0N1cnNvcixyZW1vdmVDbGFzc0Zyb21DdXJzb3Isc2V0TWVudUJ0bkNvbG9yfSkoRGVza3RvcE1lbnUpIiwiaW1wb3J0IExvYWRpbmdJY29uIGZyb20gJy4vbG9hZGluZ0ljb24nXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3Rlcihwcm9wcyl7XG4gICAgdmFyIFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgdmFyIFtzdWNjZXNzLHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgdmFyIFtlcnJvcixzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICB2YXIgW21lc3NhZ2VUZXh0LHNldE1lc3NhZ2VUZXh0XSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgdmFyIFttZXNzYWdlVGV4dFRvdWNoZWQsc2V0TWVzc2FnZVRleHRUb3VjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIHZhciBbbWVzc2FnZVRleHRWYWxpZCxzZXRNZXNzYWdlVGV4dFZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IGJ0bkNvbnRlbnQgPSBsb2FkaW5nPzxMb2FkaW5nSWNvbiBzaG93PVwidHJ1ZVwiIHdpZHRoPVwiM3JlbVwiIGhlaWdodD1cIjNyZW1cIiB3ZWlnaHQ9XCJ0aGluXCIgY2VudGVyZWQ9XCJ0cnVlXCIgY29sb3I9e2Ake3Byb3BzLnR5cGU9PVwieWVsbG93XCI/XCJ3aGl0ZVwiOlwiYmxhY2tcIn1gfSAvPjpcIlNFTkRcIlxuICAgIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKCl7XG4gICAgICAgIGlmKG1lc3NhZ2VUZXh0VmFsaWQpe1xuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICAgICAgZmV0Y2goYC9hcGkvbWFpbGAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHttZXNzYWdlOm1lc3NhZ2VUZXh0fSkgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzPT5yZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0PT57XG4gICAgICAgICAgICAgICAgaWYocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIilcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VjY2Vzcyh0cnVlKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IodHJ1ZSlcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgIHNldEVycm9yKHRydWUpXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIH0pIFxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVtYWlsSW5TdHJpbmcodGV4dCkgeyBcbiAgICAgICAgdmFyIHJlID0gLygoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpLztcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QodGV4dCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlTWVzc2FnZSgpe1xuICAgICAgICBpZighZW1haWxJblN0cmluZyhtZXNzYWdlVGV4dCkpXG4gICAgICAgICAgICBzZXRNZXNzYWdlVGV4dFZhbGlkKGZhbHNlKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzZXRNZXNzYWdlVGV4dFZhbGlkKHRydWUpIFxuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1lc3NhZ2VDaGFuZ2UodHh0KXtcbiAgICAgICAgc2V0TWVzc2FnZVRleHQodHh0KVxuICAgICAgICBzZXRNZXNzYWdlVGV4dFRvdWNoZWQodHJ1ZSlcbiAgICAgICAgdmFsaWRhdGVNZXNzYWdlKClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtgcGFkZGVkLWNvbnRlbnQgJHtwcm9wcy50eXBlPT1cInllbGxvd1wiP1wieWVsbG93XCI6XCJibGFjayB3aGl0ZS1tZW51LWJ0biB3aGl0ZS1jdXJzb3JcIn0gJHtwcm9wcy5ub1dhdmVEZXNrdG9wP1wibm8td2F2ZS1kZXNrdG9wXCI6XCJcIn0gJHtwcm9wcy5ub1dhdmVNb2JpbGU/XCJuby13YXZlLW1vYmlsZVwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb2wgbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzcy1oZWFkaW5nIGJpZ2dlci1jYXNsb24tbGV0dGVyLXNwYWNpbmdcIj5BZGRyZXNzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzcy10aXRsZSBzbGlnaHRseS1sYXJnZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3Bwb3NhYmxlIFRodW1ic1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRyIGZ1dHVyYS1ib29rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdXJyZW50bHkgd29ya2luZyBvdXQgb2YgbGl2aW5nIHJvb21zIGFjcm9zcyBJbmRpYS48YnIgY2xhc3NOYW1lPVwiaGlkZS1kZXNrdG9wIHNob3ctbW9iaWxlXCIgLz4gV2XigJlsbCB1cGRhdGUgb3VyIG9mZmljZSBhZGRyZXNzIHdoZW4gdGhlIHdvcmxk4oCZcyA8YnIgY2xhc3NOYW1lPVwiaGlkZS1kZXNrdG9wIHNob3ctbW9iaWxlXCIgLz5hIHRhZCBzYWZlciB0byBsaXZlIGluLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZ29vZ2xlLW1hcC1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkdvb2dsZSBNYXA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYWlsXCI+aW5mb0BvcHBvc2FibGV0aHVtYnMuaW48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29sIHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItcmlnaHQtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Y2Nlc3M/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGFuayB5b3UgZm9yIHlvdXIgbWVzc2FnZS4gV2Ugd2lsbCBiZSBpbiB0b3VjaCBzb29uITwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMudHlwZT09XCJ5ZWxsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXttZXNzYWdlVGV4dH0gb25DaGFuZ2U9eyhlKT0+b25NZXNzYWdlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVkLWJsYWNrLWlucHV0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXttZXNzYWdlVGV4dH0gb25DaGFuZ2U9eyhlKT0+b25NZXNzYWdlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVkLXdoaXRlLWlucHV0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2BidG4gYnRuLXdoaXRlIGJ0bi1zZW5kICR7cHJvcHMudHlwZT09XCJ5ZWxsb3dcIj9cImJ0bi1ibGFja1wiOlwiYnRuLXdoaXRlXCJ9YH0gb25DbGljaz17KCk9PnNlbmRNZXNzYWdlKCl9PntidG5Db250ZW50fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshbWVzc2FnZVRleHRWYWxpZCAmJiBtZXNzYWdlVGV4dFRvdWNoZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tc2dcIj5NZXNzYWdlIHNob3VsZCBjb250YWluIGFuIGVtYWlsIGFkZHJlc3MuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLW1zZ1wiPlRoZXJlIHdhcyBhbiB1bmV4cGVjdGVkIGVycm9yIHNlbmRpbmcgeW91ciBtZXNzYWdlLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwgc2xpZ2h0bHktbGFyZ2VyLXRleHQgZnV0dXJhLWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL29wcG9zYWJsZV90aHVtYnNfb2ZmaWNpYWwvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+SU5TVEFHUkFNPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vb3Bwb3NhYmxlLXRodW1icy1iYjFhOWExYjQvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TElOS0VESU48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9vcHBvc2FibGUudGh1bWJzLjc1MFwiIHRhcmdldD1cIl9ibGFua1wiPkZBQ0VCT09LPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3ZpbWVvLmNvbS91c2VyOTc3MzUyMzdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5WSU1FTzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuZXJyb3ItbXNne1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zb2NpYWwgYXtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6aW5oZXJpdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNvY2lhbCBhOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjppbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnVuZGVybGluZWQtd2hpdGUtaW5wdXQsLnVuZGVybGluZWQtYmxhY2staW5wdXR7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjM1cmVtO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjc1cmVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRhY3QtZm9ybXtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb250YWN0LWZvcm0gLnVuZGVybGluZWQtd2hpdGUtaW5wdXQsLmNvbnRhY3QtZm9ybSAudW5kZXJsaW5lZC1ibGFjay1pbnB1dHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjJyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zb2NpYWx7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc29jaWFsIHVsIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOjQuMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNvY2lhbCB1bCBsaTpub3QoOmxhc3QtY2hpbGQpe1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zb2NpYWwgdWx7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5nb29nbGUtbWFwLWxpbmsgYXtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6aW5oZXJpdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyLnllbGxvdyAuYWRkcmVzcy1oZWFkaW5ne1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjojMDEwMTAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIuYmxhY2sgLmFkZHJlc3MtaGVhZGluZ3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZmZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFkZHJlc3N7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NC4xcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIuYmxhY2t7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzAwMDAwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyLnllbGxvd3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmZjIwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXJ7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAvLyBib3R0b206MDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgLy96LWluZGV4OjE7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjRyZW07XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjVyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5lbWFpbHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1LjJyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5mb290ZXItY29sLmxlZnR7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZvb3Rlci1jb2wucmlnaHR7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5mb290ZXItcmlnaHQtd3JhcHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIubm8td2F2ZS1kZXNrdG9we1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxMHJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyNjBweCl7XG4gICAgICAgICAgICAgICAgICAgIC5zb2NpYWwgdWwgbGk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6M3JlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYnRuLXNlbmR7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmVycm9yLW1zZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XG4gICAgICAgICAgICAgICAgICAgIC5jb250YWN0LWZvcm0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDoxMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1zZW5ke1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zb2NpYWx7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjlyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc29jaWFsIHVsIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6Ni40cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXItY29sLnJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci1jb2wubGVmdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLXJpZ2h0LXdyYXB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmVycm9yLW1zZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApXG59IiwiY29uc3QgeyBDb21wb25lbnQgfSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge3NldFdpbmRvdyxhZGRDbGFzc1RvQ3Vyc29yLHJlbW92ZUNsYXNzRnJvbUN1cnNvcixoaWRlRnVsbHNjcmVlblZpZGVvfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zJ1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcbmltcG9ydCBEZXNrdG9wTWVudSBmcm9tICcuLi9jb21wb25lbnRzL2Rlc2t0b3BNZW51J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHtNT0JJTEVfQlJFQUtQT0lOVH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IFZpZGVvIGZyb20gJy4uL2NvbXBvbmVudHMvdmlkZW8nXG5pbXBvcnQgUGxheWVyIGZyb20gJ0B2aW1lby9wbGF5ZXInXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1vdXNlWDogMCxcbiAgICAgICAgICAgIG1vdXNlWTogMCxcbiAgICAgICAgICAgIHRyYWlsaW5nWDogMCxcbiAgICAgICAgICAgIHRyYWlsaW5nWTogMCxcbiAgICAgICAgICAgIG1vZGU6XCJsYW5kc2NhcGVcIixcbiAgICAgICAgICAgIG1vdXNlQ2lyY2xlQ29sb3I6XCJibGFja1wiXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJzb3IgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgdGhpcy5jdXJzb3JUcmFpbGluZyA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gbnVsbDtcbiAgICB9XG4gICAgc2V0V2luID0gKCk9PntcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPiBNT0JJTEVfQlJFQUtQT0lOVClcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0V2luZG93KHdpbmRvdy5pbm5lcldpZHRoLHdpbmRvdy5pbm5lckhlaWdodClcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGxldCBtb2RlID0gd2luZG93LmlubmVyV2lkdGg8d2luZG93LmlubmVySGVpZ2h0P1wicG9ydHJhaXRcIjpcImxhbmRzY2FwZVwiXG4gICAgICAgICAgICBpZihtb2RlIT10aGlzLnN0YXRlLm1vZGUpe1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0V2luZG93KHdpbmRvdy5pbm5lcldpZHRoLHdpbmRvdy5pbm5lckhlaWdodClcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttb2RlfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBtb3ZlQ3Vyc29yID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IG1vdXNlWCwgbW91c2VZLCB0cmFpbGluZ1gsIHRyYWlsaW5nWSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgZGlmZlggPSBtb3VzZVggLSB0cmFpbGluZ1g7XG4gICAgICAgIGNvbnN0IGRpZmZZID0gbW91c2VZIC0gdHJhaWxpbmdZO1xuICAgICAgICAvLyAgTnVtYmVyIGluIGV4cHJlc3Npb24gaXMgY29lZmljaWVudCBvZiB0aGUgZGVsYXkuIDEwIGZvciBleGFtcGxlLiBZb3UgY2FuIHBsYXkgd2l0aCBpdC4gXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHRyYWlsaW5nWDogdHJhaWxpbmdYICsgZGlmZlggLyA1LFxuICAgICAgICAgIHRyYWlsaW5nWTogdHJhaWxpbmdZICsgZGlmZlkgLyA1LFxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgIC8vIFVzaW5nIHJlZnMgYW5kIHRyYW5zZm9ybSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlLlxuICAgICAgICAgIHRoaXMuY3Vyc29yLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7bW91c2VYfXB4LCAke21vdXNlWX1weCwgMClgO1xuICAgICAgICAgIHRoaXMuY3Vyc29yVHJhaWxpbmcuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt0cmFpbGluZ1h9cHgsICR7dHJhaWxpbmdZfXB4LCAwKWA7XG4gICAgICAgICAgdGhpcy5hbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVDdXJzb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25Nb3VzZU1vdmUgPSAoZXZ0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZ0O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtb3VzZVg6IGNsaWVudFggLSA1LFxuICAgICAgICAgIG1vdXNlWTogY2xpZW50WSAtIDUsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyB2YXIgZWxlbWVudE1vdXNlSXNPdmVyID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChjbGllbnRYLCBjbGllbnRZKVxuICAgICAgICAvLyB2YXIgbW91c2VDaXJjbGVDb2xvciA9IGVsZW1lbnRNb3VzZUlzT3Zlci5nZXRBdHRyaWJ1dGUoXCJtb3VzZWNpcmNsZWNvbG9yXCIpXG4gICAgICAgIC8vIGlmKG1vdXNlQ2lyY2xlQ29sb3I9PVwid2hpdGVcIil7XG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHttb3VzZUNpcmNsZUNvbG9yOlwid2hpdGVcIn0pXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIndoaXRlXCIpXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZVxuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7bW91c2VDaXJjbGVDb2xvcjpcImJsYWNrXCJ9KVxuICAgIH1cbiAgICAvLyBtb3VzZU92ZXJDdXJzb3JFZmZlY3QgPSAoKT0+e1xuICAgIC8vICAgICB0aGlzLnByb3BzLmFkZENsYXNzVG9DdXJzb3IoXCJsYXJnZXJcIilcbiAgICAvLyB9XG4gICAgLy8gbW91c2VPdXRDdXJzb3JFZmZlY3QgPSAoKT0+e1xuICAgIC8vICAgICB0aGlzLnByb3BzLnJlbW92ZUNsYXNzRnJvbUN1cnNvcihcImxhcmdlclwiKVxuICAgIC8vIH1cbiAgICAvLyBtb3VzZU92ZXJXaGl0ZUN1cnNvciA9ICgpPT57XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCd3aGl0ZSBjdXJzb3InKVxuICAgIC8vICAgICB0aGlzLnByb3BzLmFkZENsYXNzVG9DdXJzb3IoXCJ3aGl0ZVwiKVxuICAgIC8vIH1cbiAgICAvLyBtb3VzZU91dFdoaXRlQ3Vyc29yID0gKCk9PntcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3doaXRlIGN1cnNvciBsZWF2ZScpXG4gICAgLy8gICAgIHRoaXMucHJvcHMucmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKFwid2hpdGVcIilcbiAgICAvLyB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bW9kZTp3aW5kb3cuaW5uZXJXaWR0aDx3aW5kb3cuaW5uZXJIZWlnaHQ/XCJwb3J0cmFpdFwiOlwibGFuZHNjYXBlXCJ9KVxuICAgICAgICB0aGlzLnNldFdpbigpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICB0aGlzLm1vdmVDdXJzb3IoKVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJyx0aGlzLnNldFdpbilcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWUpO1xuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGFyZ2VyLWN1cnNvcicpLmZvckVhY2goZWxlPT57XG4gICAgICAgIC8vICAgICBlbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIix0aGlzLm1vdXNlT3ZlckN1cnNvckVmZmVjdClcbiAgICAgICAgLy8gICAgIGVsZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMubW91c2VPdXRDdXJzb3JFZmZlY3QpXG4gICAgICAgIC8vIH0pXG4gICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aGl0ZS1jdXJzb3InKS5mb3JFYWNoKGVsZT0+e1xuICAgICAgICAvLyAgICAgZWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsdGhpcy5tb3VzZU92ZXJXaGl0ZUN1cnNvcilcbiAgICAgICAgLy8gICAgIGVsZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMubW91c2VPdXRXaGl0ZUN1cnNvcilcbiAgICAgICAgLy8gfSlcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcyxwcmV2U3RhdGUpe1xuICAgICAgICBpZih0aGlzLnByb3BzLmNvbW1vbi5zaG93X2Z1bGxzY3JlZW5fdmlkZW8hPXByZXZQcm9wcy5jb21tb24uc2hvd19mdWxsc2NyZWVuX3ZpZGVvKXtcbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuY29tbW9uLnNob3dfZnVsbHNjcmVlbl92aWRlbyl7XG4gICAgICAgICAgICAgICAgdmFyIHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGxzY3JlZW5fdmlkZW8nKVxuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuY29tbW9uLnZpZGVvX3R5cGU9PVwiaHRtbFwiKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZpZGVvIHR5cGUgaHRtbCcpXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLm9uY2FucGxheSA9ICgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW8ucGxheSgpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGxheWVyID0gbmV3IFBsYXllcih2aWRlbyk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5wbGF5KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgICAgICAgICAgICBjaGFyc2V0PVwiVVRGLThcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLXRoZW1lLm1pbi5jc3NcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZnVsbC1zY3JlZW4tdmlkZW8td3JhcHBlciAke3RoaXMucHJvcHMuY29tbW9uLnNob3dfZnVsbHNjcmVlbl92aWRlbz9cInNob3dcIjpcIlwifWB9IG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLmhpZGVGdWxsc2NyZWVuVmlkZW8oKX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNsb3NlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLXdyYXBcIiBvbkNsaWNrPXsoZSk9PmUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29tbW9uLnNob3dfZnVsbHNjcmVlbl92aWRlbyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWRlbyB2aWRlb2lkPXt0aGlzLnByb3BzLmNvbW1vbi52aWRlb19pZH0gdmlkZW9fdHlwZT17dGhpcy5wcm9wcy5jb21tb24udmlkZW9fdHlwZX0gdmlkZW9fc3JjPXt0aGlzLnByb3BzLmNvbW1vbi52aWRlb19zcmN9IGh0bWxfaWQ9XCJmdWxsc2NyZWVuX3ZpZGVvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjdXJzb3JzICR7dGhpcy5wcm9wcy5jb21tb24uY3Vyc29yQ2xhc3Nlcy5qb2luKCcgJyl9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnNvclwiIHJlZj17dGhpcy5jdXJzb3J9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnNvclwiIHJlZj17dGhpcy5jdXJzb3JUcmFpbGluZ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxEZXNrdG9wTWVudSBwYWdlPXt0aGlzLnByb3BzLnBhZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb24gaGluZGlUZXh0PXt0aGlzLnByb3BzLmhpbmRpVGV4dH0gbmF2UG9zaXRpb249e3RoaXMucHJvcHMubmF2UG9zaXRpb259IG5hdlRleHRDb2xvcj17dGhpcy5wcm9wcy5uYXZUZXh0Q29sb3J9IG1lbnVCdG5Db2xvcj17dGhpcy5wcm9wcy5tZW51QnRuQ29sb3J9IC8+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zcGFyZW50LWZvb3RlclwiPjwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIHR5cGU9e3RoaXMucHJvcHMuZm9vdGVyVHlwZX0gbm9XYXZlRGVza3RvcD17dGhpcy5wcm9wcy5ub1dhdmVEZXNrdG9wfSBub1dhdmVNb2JpbGU9e3RoaXMucHJvcHMubm9XYXZlTW9iaWxlfSAvPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mdWxsLXNjcmVlbi12aWRlby13cmFwcGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4Oi0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRyZW0gJHt0aGlzLnByb3BzLmNvbW1vbi52aWRlb19zcmM9PVwiL3ZpZGVvcy9lbmNoYW50ZXVyX2Rlc2t0b3AubXA0XCI/XCIzOCVcIjpcIjcuNSVcIn07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwYjM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246b3BhY2l0eSAwLjRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OnNjcm9sbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mdWxsLXNjcmVlbi12aWRlby13cmFwcGVyLnNob3d7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZ1bGwtc2NyZWVuLXZpZGVvLXdyYXBwZXIgLmNsb3Nle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6MTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OjJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZnVsbC1zY3JlZW4tdmlkZW8td3JhcHBlciAuY2xvc2U6YWZ0ZXIsLmZ1bGwtc2NyZWVuLXZpZGVvLXdyYXBwZXIgLmNsb3NlOmJlZm9yZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAjbWFpbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDoxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jdXJzb3Ige1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3Vyc29ycyAuY3Vyc29yOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNhMjZmZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmN1cnNvcnMgLmN1cnNvcjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjp3aWR0aCAwLjdzLGhlaWdodCAwLjdzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmN1cnNvcnMubGFyZ2VyIC5jdXJzb3I6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuY3Vyc29ycy5vbm1lbnVidG4gLmN1cnNvcjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOndpZHRoIDAuMnMsaGVpZ2h0IDAuMnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDMwcHgsN3B4LDApICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLnByb3BzLmNvbW1vbi5tZW51X2J0bl9jb2xvcj09XCJ3aGl0ZVwiP1wiI2ZmZmZmZlwiOlwiIzAwMDAwMFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmN1cnNvcnMud2hpdGUgLmN1cnNvcjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmFuc3BhcmVudC1mb290ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjQyLjdyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICB9XG59XG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoe2NvbW1vbn0pe1xuICAgIHJldHVybiB7Y29tbW9ufVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMse3NldFdpbmRvdyxhZGRDbGFzc1RvQ3Vyc29yLHJlbW92ZUNsYXNzRnJvbUN1cnNvcixoaWRlRnVsbHNjcmVlblZpZGVvfSkoTGF5b3V0KSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmdJY29uKHtzaG93LHdpZHRoLGhlaWdodCx3ZWlnaHQsY2VudGVyZWQsY29sb3J9KXtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGxvYWRpbmctaWNvbiAke3Nob3c/XCJzaG93XCI6XCJcIn0gJHtjb2xvcn0gJHt3ZWlnaHR9ICR7Y2VudGVyZWQ/XCJjZW50ZXJlZFwiOlwiXCJ9YH0gc3R5bGU9e3t3aWR0aCxoZWlnaHR9fT48L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAubG9hZGluZy1pY29uIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuN3M7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc3BpbiAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgICAgICAgICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5sb2FkaW5nLWljb24uYmxhY2t7XG4gICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2MxYzFjMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubG9hZGluZy1pY29uLndoaXRle1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjojZmZmZmZmO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IzQxNDE0MjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmxvYWRpbmctaWNvbi50aGlue1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOjNweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubG9hZGluZy1pY29uLnRoaWNre1xuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogNnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5sb2FkaW5nLWljb24uY2VudGVyZWR7XG4gICAgICAgICAgICAgICAgbWFyZ2luOmF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmxvYWRpbmctaWNvbi5zaG93e1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn0iLCJpbXBvcnQge3RvZ2dsZU1lbnUsYWRkQ2xhc3NUb0N1cnNvcixyZW1vdmVDbGFzc0Zyb21DdXJzb3J9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuZnVuY3Rpb24gTmF2aWdhdGlvbihwcm9wcyl7XG4gICAgZnVuY3Rpb24gbWVudUJ0bkNsaWNrKCl7XG4gICAgICAgIGlmKHByb3BzLmNvbW1vbi5tZW51T3BlbilcbiAgICAgICAgICAgIHByb3BzLnJlbW92ZUNsYXNzRnJvbUN1cnNvcihcIndoaXRlXCIpXG4gICAgICAgIHByb3BzLnRvZ2dsZU1lbnUoKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BtZW51LWJ0biAke3Byb3BzLmNvbW1vbi5tZW51X2J0bl9jb2xvcn0gJHtwcm9wcy5jb21tb24ubWVudU9wZW4/XCJvcGVuXCI6XCJcIn1gfSBvbkNsaWNrPXsoKT0+bWVudUJ0bkNsaWNrKCl9IG9uTW91c2VPdmVyPXsoKT0+cHJvcHMuYWRkQ2xhc3NUb0N1cnNvcihcIm9ubWVudWJ0blwiKX0gb25Nb3VzZU91dD17KCk9PnByb3BzLnJlbW92ZUNsYXNzRnJvbUN1cnNvcihcIm9ubWVudWJ0blwiKX0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5lc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtgJHtwcm9wcy5uYXZQb3NpdGlvbn0gJHtwcm9wcy5uYXZUZXh0Q29sb3J9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28td3JhcFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBjbGFzc05hbWU9XCJsb2dvIGxvZ28tYmxhY2tcImFsdD0naW1hZ2UnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ29fd2hpdGUucG5nXCIgY2xhc3NOYW1lPVwibG9nbyBsb2dvLXdoaXRlXCJhbHQ9J2ltYWdlJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLWxvZ28td3JhcFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28tc2hvcnQtYmxhY2sucG5nXCIgY2xhc3NOYW1lPVwibW9iaWxlLWxvZ28gd2lkdGgtMTAwXCJhbHQ9J2ltYWdlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPjxhPkVOR0xJU0g8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgbGFyZ2VyLWN1cnNvciBoaW5kaS10ZXh0YH0+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5oaW5kaVRleHQ9PVwid2hpdGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaGluZGlfd2hpdGUucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaGluZGkucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5oaW5kaS10ZXh0IGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogNDNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb2JpbGUtbG9nby13cmFwe1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb2JpbGUtbG9nb3tcbiAgICAgICAgICAgICAgICB3aWR0aDo1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUtYnRue1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDoyLjVyZW07XG4gICAgICAgICAgICAgICAgbGVmdDo0LjhyZW07XG4gICAgICAgICAgICAgICAgei1pbmRleDo5OTk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1idG4gLmxpbmVzIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1idG4ub3BlbiAubGluZXMgc3BhbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y5RUIyMSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUtYnRuIC5saW5lcyBzcGFuIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyAwcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWJ0bi5ibGFjayAubGluZXMgc3BhbntcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUtYnRuLndoaXRlIC5saW5lcyBzcGFue1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1idG4gLmxpbmVzIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1idG4ub3BlbiAubGluZXMgc3BhbjpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICAgIHRvcDoxMXB4O1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1idG4gLmxpbmVzIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICB0b3A6IDExcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1idG4ub3BlbiAubGluZXMgc3BhbjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWJ0biAubGluZXMgc3BhbjpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgICAgIHRvcDogMjJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWJ0bi5vcGVuIC5saW5lcyBzcGFuOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgdG9wOjExcHg7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXZ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzpyb3cgbm93cmFwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjIuM3JlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdiA+ICoge1xuICAgICAgICAgICAgICAgIGZsZXg6MSAxIDMzLjMzJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdi5hYnNvbHV0ZXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OjUwMDtcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvZ28td3JhcHBlcntcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjhyZW07XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2LmJsYWNrIC5sb2dvLWJsYWNre1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2LndoaXRlIC5sb2dvLXdoaXRle1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwub3B0aW9uc3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjQuOHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsLm9wdGlvbnMgbGl7XG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bC5vcHRpb25zIGxpIGF7XG4gICAgICAgICAgICAgICAgcGFkZGluZzowLjVyZW0gMC43NXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdi5ibGFjayB1bC5vcHRpb25zIGxpIGE6bm90KC5oaW5kaSl7XG4gICAgICAgICAgICAgICAgY29sb3I6IzAwMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdi53aGl0ZSB1bC5vcHRpb25zIGxpIGE6bm90KC5oaW5kaSl7XG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZmZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsLm9wdGlvbnMgbGkgYTpub3QoLmhpbmRpKXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRnV0dXJhQm9vaywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsLm9wdGlvbnMgbGkgYS5oaW5kaXtcbiAgICAgICAgICAgICAgICBjb2xvcjojRjlFQjIxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KXtcbiAgICAgICAgICAgICAgICAubWVudS1idG4uYmxhY2s6aG92ZXIgLmxpbmVzIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubWVudS1idG4ud2hpdGU6aG92ZXIgLmxpbmVzIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XG4gICAgICAgICAgICAgICAgLmxvZ28td3JhcHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bC5vcHRpb25ze1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjJyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tZW51LWJ0bntcbiAgICAgICAgICAgICAgICAgICAgbGVmdDoyLjhyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tb2JpbGUtbG9nby13cmFwe1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoe2NvbW1vbn0pe1xuICAgIHJldHVybiB7Y29tbW9ufVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMse3RvZ2dsZU1lbnUsYWRkQ2xhc3NUb0N1cnNvcixyZW1vdmVDbGFzc0Zyb21DdXJzb3J9KShOYXZpZ2F0aW9uKSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGVvRW1iZWQocHJvcHMpe1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIHtwcm9wcy52aWRlb190eXBlPT1cImh0bWxcIlxuICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICA8dmlkZW8gd2lkdGg9XCIxMDAlXCIgaWQ9e3Byb3BzLmh0bWxfaWR9IGNvbnRyb2xzPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17cHJvcHMudmlkZW9fc3JjfSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy5cbiAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSBzcmM9e2BodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vJHtwcm9wcy52aWRlb2lkfT90aXRsZT0wJmJ5bGluZT0wJnBvcnRyYWl0PTAmbG9vcD0ke3Byb3BzLmxvb3A/MTowfWB9IGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYXV0b3BsYXk7IGZ1bGxzY3JlZW5cIiBhbGxvd2Z1bGxzY3JlZW4gaWQ9e3Byb3BzLmh0bWxfaWR9PjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC52aWRlby13cmFwe1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6NTYuMjUlIDAgMCAwO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzAwMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC52aWRlby13cmFwIGlmcmFtZXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICAgICAgICBsZWZ0OjA7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgTU9CSUxFX0JSRUFLUE9JTlQ6IDc2OCxcbiAgICBBTklNQVRJT05fRFVSQVRJT046IDAuNCxcbiAgICBTRU5ER1JJRF9BUElfS0VZOidTRy5ZMFJkbGVSUFMxNl9RQ3VDemlTdVZBLmZ4OUtUMzZXS2dSZEprTEhYTUFwYklTWXk1b2hYRnl0VzV2ZFZwNmVvSmsnXG59IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBQcmVmZXRjaE9wdGlvbnMsXG4gIE5leHRSb3V0ZXIsXG4gIGlzTG9jYWxVUkwsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgZXhlY09uY2UgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoLCByZXNvbHZlSHJlZiB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKGFzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHtcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYmFzZVBhdGggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICA6IGZpbmFsVXJsLmhyZWZcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiB1cmxBc1N0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJ5UGFyc2VSZWxhdGl2ZVVybChcbiAgdXJsOiBzdHJpbmdcbik6IG51bGwgfCBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICApXG4gICAgICB9LCAwKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhc1xuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkID0gdHJ5UGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBpZiAoIXBhcnNlZCkgcmV0dXJuIGZhbHNlXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChjbGVhbmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbylcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIsIGVycm9yOiBlcnIgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgICAgICAocmVzKSA9PlxuICAgICAgICAgICAgICAoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgICAgfSBhcyBSb3V0ZUluZm8pXG4gICAgICAgICAgKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm5cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIGl0ZW0pKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgdmFsdWUpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBmaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcbmltcG9ydCBBcnJvdyBmcm9tIFwiLi4vY29tcG9uZW50cy9hcnJvd1wiXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7b3Blbk1lbnV9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnXG5pbXBvcnQgQ2xpZW50cyBmcm9tICcuLi9jb21wb25lbnRzL2NsaWVudHMnXG5pbXBvcnQge2FkZENsYXNzVG9DdXJzb3IscmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zJ1xuaW1wb3J0IHsgTU9CSUxFX0JSRUFLUE9JTlQgfSBmcm9tIFwiLi4vY29uZmlnXCJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNNb2JpbGU6ZmFsc2UsXG4gICAgICB1bmRlcmxpbmVFeHBhbmQ6IGZhbHNlLFxuICAgICAgYmFja2dyb3VuZFN0eWxlczogeyB0b3A6IFwiMFwiLCBsZWZ0OiBcIjBcIiB9LFxuICAgICAgYmFja2dyb3VuZFJlYWR5OiBmYWxzZSxcbiAgICAgIGJhY2tncm91bmRTaG93OiBmYWxzZSxcbiAgICAgIGxvYWRpbmdMb2dvUmVhZHk6IGZhbHNlLFxuICAgICAgYW5pbWF0ZTogZmFsc2UsXG4gICAgICBtZW51QnRuQ29sb3I6XCJibGFja1wiXG4gICAgfTtcbiAgICB0aGlzLmJhY2tncm91bmRJbWFnZSA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5yZWxsYXhSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIHRoaXMubm90UGVyZm9ybWVkQW5pbWF0aW9uID0gdHJ1ZVxuICAgIHRoaXMud2hpdGVNZW51U2VjdGlvbnMgPSBbUmVhY3QuY3JlYXRlUmVmKCldXG4gIH1cbiAgLy8gaGFuZGxlU2Nyb2xsID0gKCk9PntcbiAgLy8gICBmb3IobGV0IGk9MDtpPHRoaXMud2hpdGVNZW51U2VjdGlvbnMubGVuZ3RoO2krKyl7XG4gIC8vICAgICBsZXQgYm91bmRpbmdWYWxzID0gdGhpcy53aGl0ZU1lbnVTZWN0aW9uc1tpXS5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIC8vICAgICBpZihib3VuZGluZ1ZhbHMudG9wIDwgMCAmJiAoYm91bmRpbmdWYWxzLnRvcCAqIC0xIDwgYm91bmRpbmdWYWxzLmhlaWdodCkpe1xuICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHttZW51QnRuQ29sb3I6XCJ3aGl0ZVwifSlcbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbnVCdG5Db2xvcjpcImJsYWNrXCJ9KVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuICBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgdGhpcy5wb3NpdGlvbkltYWdlKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aXNNb2JpbGU6d2luZG93LmlubmVyV2lkdGggPCBNT0JJTEVfQlJFQUtQT0lOVD90cnVlOmZhbHNlfSlcbiAgfVxuICBwb3NpdGlvbkltYWdlKGNiKSB7XG4gICAgbGV0IGJhY2tncm91bmRTdHlsZXMgPSB7IGJvdHRvbTogXCIwcmVtXCIsIGxlZnQ6IFwiLTMxLjUlXCIsIHdpZHRoOiBcIjIwOCVcIiB9O1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDQwMClcbiAgICAgIGJhY2tncm91bmRTdHlsZXMgPSB7IGJvdHRvbTogXCIwcmVtXCIsIGxlZnQ6IFwiLTMxLjUlXCIsIHdpZHRoOiBcIjIwOCVcIiB9O1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDY1MClcbiAgICAgIGJhY2tncm91bmRTdHlsZXMgPSB7IGJvdHRvbTogXCIwXCIsIGxlZnQ6IFwiLTIwLjUlXCIsIHdpZHRoOiBcIjEyMCVcIiB9O1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDEwMjQpXG4gICAgICAvLyBiYWNrZ3JvdW5kU3R5bGVzID0ge3RvcDpcIi0xLjVyZW1cIixsZWZ0OlwiLTIwLjUlXCIsd2lkdGg6XCIxMjAlXCJ9XG4gICAgICAvLyBiYWNrZ3JvdW5kU3R5bGVzID0geyB0b3A6IFwiLTAuNXJlbVwiLCBsZWZ0OiBcIi03LjUlXCIgfTtcbiAgICAgIGJhY2tncm91bmRTdHlsZXMgPSB7IGJvdHRvbTogXCIwXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDEzNjYpXG4gICAgICAvLyBiYWNrZ3JvdW5kU3R5bGVzID0geyB0b3A6IFwiLTAuNXJlbVwiLCBsZWZ0OiBcIi03LjUlXCIgfTtcbiAgICAgIGJhY2tncm91bmRTdHlsZXMgPSB7IGJvdHRvbTogXCIwXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDE0NDApXG4gICAgICAvLyBiYWNrZ3JvdW5kU3R5bGVzID0geyB0b3A6IFwiLTEuNXJlbVwiLCBsZWZ0OiBcIi03LjUlXCIgfTtcbiAgICAgIGJhY2tncm91bmRTdHlsZXMgPSB7IGJvdHRvbTogXCIwXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgIC8vIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgYmFja2dyb3VuZFN0eWxlcyB9LCAoKSA9PiB7XG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgY2IoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnN0YXRlLmJhY2tncm91bmRSZWFkeSAmJlxuICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nTG9nb1JlYWR5ICYmXG4gICAgICB0aGlzLm5vdFBlcmZvcm1lZEFuaW1hdGlvblxuICAgICkge1xuICAgICAgdGhpcy5wb3NpdGlvbkltYWdlKCk7XG4gICAgICB0aGlzLm5vdFBlcmZvcm1lZEFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgdGhpcy5wcm9wcy5vcGVuTWVudShmYWxzZSk7XG4gICAgICAvLyB0aGlzLm1vdXNlRXZlbnRzKClcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYW5pbWF0ZTogdHJ1ZSB9LCgpPT57XG4gICAgICAgICAgLy8gdGhpcy5wcm9wcy5yZW1vdmVDbGFzc0Zyb21DdXJzb3IoXCJsYXJnZXJcIikgIFxuICAgICAgICAgIC8vIHRoaXMucHJvcHMucmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKFwid2hpdGVcIikgIFxuICAgICAgICB9KTtcbiAgICAgIH0sIDc1MCk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2lzTW9iaWxlOndpbmRvdy5pbm5lcldpZHRoIDwgTU9CSUxFX0JSRUFLUE9JTlQ/dHJ1ZTpmYWxzZX0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5oYW5kbGVSZXNpemUpXG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5oYW5kbGVTY3JvbGwpXG4gICAgY29uc3QgbG9hZGluZ0xvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2FkaW5nTG9nby5zcmMgPSBcIi9pbWFnZXMvbG9hZGluZ19sb2dvLnBuZ1wiO1xuICAgIGxvYWRpbmdMb2dvLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nTG9nb1JlYWR5OiB0cnVlIH0pO1xuICAgIH07XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9IFwiL2ltYWdlcy9ob21lLWNvdmVyLmpwZ1wiO1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYmFja2dyb3VuZFJlYWR5OiB0cnVlIH0pO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLnJlbW92ZUNsYXNzRnJvbUN1cnNvcihcIndoaXRlXCIpXG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLmhhbmRsZVJlc2l6ZSlcbiAgICAvLyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVNjcm9sbClcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgXG4gICAgXG4vLyAgICAgZm9yIHNlbyBwdXJwb3NlXG4gICAgICBjb25zdCBzY2hlbWFEYXRhPXtcblxuICAgICAgXCJAY29udGV4dFwiOiBcImh0dHA6Ly9zY2hlbWEub3JnXCIsXG4gICAgICBcIkB0eXBlXCI6IFwic2VydmljZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiT3Bwb3NhYmxlIFRodW1ic1wiLFxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL29wcG9zYWJsZS10aHVtYnMudmVyY2VsLmFwcC9cIlxuICAgfVxuXG4gICBKU09OLnN0cmluZ2lmeShzY2hlbWFEYXRhKVxuICAgIFxuICAgIFxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IG5hdlBvc2l0aW9uPVwiYWJzb2x1dGVcIiBuYXZUZXh0Q29sb3I9XCJibGFja1wiIG1lbnVCdG5Db2xvcj17dGhpcy5zdGF0ZS5tZW51QnRuQ29sb3J9IHBhZ2U9XCJob21lXCI+XG4gICAgICAgIDxIZWFkPlxuICA8bWV0YSBuYW1lPVwiZ29vZ2xlLXNpdGUtdmVyaWZpY2F0aW9uXCIgY29udGVudD1cImZUcDdsb0J6RFRBalhFdXRpRWNsZnN0NGMzdnQxM3VrdHFXX2RBRlRXb0lcIiAvPlxuICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiYnJhbmQgaWRlbnRpdHkgYWdlbmN5LCBicmFuZCBpZGVudGl0eSBkZXNpZ24gYWdlbmN5LCBjb3Jwb3JhdGUgaWRlbnRpdHkgYWdlbmN5LCBicmFuZCBpZGVudGl0eSwgYnJhbmRpbmcgZGVzaWduLCBkaWdpdGFsIG1lZGlhIG1hbmFnZW1lbnQsZGlnaXRhbCBtZWRpYSBhZ2VuY3ksIHNvY2lhbCBtZWRpYSBhZ2VuY2llcyxkaWdpdGFsIG1lZGlhIG1hcmtldGluZyBjb21wYW5pZXNcIi8+XG4gICAgICAgICAgPHRpdGxlPkJyYW5kIElkZW50aXR5IEFnZW5jeSB8IE9wcG9zYWJsZSBUaHVtYnM8L3RpdGxlPlxuICAgICAgICAgIHsvKiA8aDE+T3Bwb3NhYmxlIFRodW1iczwvaDE+ICovfVxuPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk9wcG9zYWJsZSBUaHVtYnMgd29yayB3aXRoIGNvbXBhbmllcyBmb3IgdGhlaXIgYnJhbmRpbmcuIElmIHlvdSBoYXZlIGEgbmV3IGJyYW5kIHRvIGxhdW5jaCwgd2UgY2FuIGhlbHAgeW91LCByaWdodCBmcm9tIG5hbWluZyBpdCB0byBkZXZlbG9waW5nIGl0cyBpZGVudGl0eS5cIi8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctVlRNRjcwUDdIV1wiPjwvc2NyaXB0PlxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgZ3RhZygnY29uZmlnJywgJ0ctVlRNRjcwUDdIVycpO1xuICAgICAgICAgIGAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+IFxuXG4gey8qIHNjaGVtYSBpcyBpbXBsZW1lbnRlZCAqL31cbjxzY3JpcHRcbiAgICB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBKU09OLnN0cmluZ2lmeShzY2hlbWFEYXRhKSB9fVxuICAvPlxuICAgICAgICAgICAgICAgICAgXG48L0hlYWQ+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmdMb2dvUmVhZHkgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLmFuaW1hdGUgPyBcImFuaW1hdGVcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctd3JhcHBlclwiIHN0eWxlPXt7aGVpZ2h0OmAke3RoaXMucHJvcHMuY29tbW9uLndpbmRvd0hlaWdodH1weGB9fT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2FkaW5nX2xvZ28ucG5nXCIgYWx0PSdob21lY292ZXInIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvcC1zZWN0aW9uLXdyYXBwZXIgYmxhY2stY3Vyc29yICR7dGhpcy5zdGF0ZS5hbmltYXRlID8gXCJhbmltYXRlXCIgOiBcIlwifWB9IHN0eWxlPXt7IGhlaWdodDogYCR7dGhpcy5wcm9wcy5jb21tb24ud2luZG93SGVpZ2h0fXB4YCB9fT5cbiAgICAgICAgICAgIHsvKiA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvaG9tZS1jb3Zlci5qcGdcIiBiZ0ltYWdlQWx0PVwiaG9tZSBjb3ZlclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT1cIlwiPiAqL31cbiAgICAgICAgICAgIDxpbWcgc3R5bGU9e3RoaXMuc3RhdGUuYmFja2dyb3VuZFN0eWxlc30gc3JjPVwiL2ltYWdlcy9ob21lLWNvdmVyLmpwZ1wiIGNsYXNzTmFtZT17YGJhY2tncm91bmRgfSByZWY9e3RoaXMuYmFja2dyb3VuZEltYWdlfSBhbHQ9J2hvbWVjb3ZlcicvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5dGVsbGVycyBmdXR1cmEtbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIE1FRVQgVEhFIFNUT1JZVEVMTEVSUyAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbGxvIGhlbHZldGljYS1uZXVlLWNvbmRlbnNlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlbGxvXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bGwtc2VydmljZSBiaWctY2FzbG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmRlcGVuZGVudDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZ2VuY3lcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1kb3duLWFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IGRvd25cIj4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gbG9va2luZy1mb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tdGV4dFwiPjxoMT5CcmFuZCBJZGVudGl0eSBBZ2VuY3k8L2gxPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPC9QYXJhbGxheD4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoaXRlLWZhZGVcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tY2F0ZWdvcmllcyB0ZXh0LWNlbnRlciBwYWRkZWQtY29udGVudFwiPlxuICAgICAgICAgICAgICBJbnNpZ2h0cyAvIEJyYW5kIElkZW50aXR5IC8gUGFja2FnaW5nIC8gQWR2ZXJ0aXNpbmcgLyBEaWdpdGFsIC8gR3JhcGhpY3MgLyBGaWxtc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pdGVtc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZGQgbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vQmlnQmFueWFuLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJiaWcgYmFueWFuXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPXtgcG9ydGZvbGlvLWl0ZW0gJHt0aGlzLnN0YXRlLmlzTW9iaWxlP1wid2hpdGUtbWVudS1idG5cIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL2JpZy1iYW55YW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+QmlnIEJhbnlhbiA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+QW4gSXRhbGlhbiB3aW5lbWFrZXIuIEEgcGFzc2lvbmF0ZSBicmFuZCB0ZWFtLiBBbmQgdXMuIFllYXJzIG9mIHTDqnRlLcOgLXTDqnRlcyBhbmQgcmVzZWFyY2gtZHJpdmVuIGluc2lnaHRzIGxlZCB1cyB0byByZWNyZWF0ZSB0aGUgcGFja2FnaW5nIGFuZCBjb21tdW5pY2F0aW9uIHN0cmF0ZWd5IGZvciBCaWcgQmFueWFuLiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZXZlbiBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9sYW5nb29yLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJsYW5nb29yXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPXtgcG9ydGZvbGlvLWl0ZW0gJHt0aGlzLnN0YXRlLmlzTW9iaWxlP1wid2hpdGUtbWVudS1idG5cIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL2xhbmdvb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+TCdhbmdvb3IgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPldpbmUgY2FuIGJlIGVsZWdhbnQuIFdpbmUgY2FuIGJlIHNvcGhpc3RpY2F0ZWQuIEJ1dCB3aW5lIGFuZCBmdW4/IEhlcmXigJlzIGhvdyB3ZSBtYXJyaWVkIOKAmGZ1buKAmSBhbmQgYSBuZXcgYnJhbmQgb2Ygd2luZXMgZnJvbSBCaWcgQmFueWFuLCBrbm93biBmb3IgaXRzIHByZW1pdW0gd2luZXMuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9kZCBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9FbmNoYW50ZXVyLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJlbmNoYW50ZXVyXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPVwicG9ydGZvbGlvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9lbmNoYW50ZXVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkVuY2hhbnRldXIgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+SXTigJlzIEZyZW5jaCwgaXTigJlzIHJvbWFudGljIGFuZCBpdOKAmXMgc28gdmVyeSBmbG9yYWwuIEhvdyBjYW4gd2Ugbm90IGZhbGwgaW4gbG92ZSB3aXRoIEVuY2hhbnRldXI/IFdlIGhhdmUgSy1kcmFtYSBmYW5zIG9uIG91ciB0ZWFtIHdobyBhYnNvbHV0ZWx5IGxvdmUgdGhpcyBicmFuZCE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGV2ZW4gbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vZnluZC5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvZnluZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5GWU5EIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5TZWVkZWQgaW4gdGhlIGlkZWEgb2Ygc2VsZi1leHByZXNzaW9uLCBGWU5EIGluc3BpcmVkIHVzIHdpdGggaXRzIGZ1bmN0aW9uYWwgY2xvdGhpbmcgbGluZXMuIEZyb20gc3RyYXRlZ3kgdG8gaWRlbnRpdHkgYW5kIGJyYW5kIGFyY2hpdGVjdHVyZSBkZXNpZ24sIHdlIGhlbHBlZCBicmluZyB0aGlzIGJyYW5kIHRvIGxpZmUuIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZGQgbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL0NoYW5kcmlrYTMuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvY2hhbmRyaWthXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkNoYW5kcmlrYSA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+SGVyZeKAmXMgYSBicmFuZCB3ZSBhbGwgZ3JldyB1cCB3aXRoLiBBbmQgeWV0LCBpdCBtYW5hZ2VkIHRvIHN1cnByaXNlIHVzIHdpdGggaXRzIHNlY3JldHMuIFdlIHNoYXJlZCB0aGVzZSBsaXR0bGUgbnVnZ2V0cyB3aXRoIHRoZSB3b3JsZCBpbiBvdXIgY2FtcGFpZ24uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBldmVuIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL1NhbnRvb3IuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9XCJwb3J0Zm9saW8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL3NhbnRvb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+U2FudG9vciA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+V2hvIGRvZXNu4oCZdCByZW1lbWJlciB0aGUgY2xhc3NpYyDigJxtdW1teeKAnSBhZHMhIEl0IGdpdmVzIHVzIGdyZWF0IHByaWRlIHRvIHdvcmsgb24gY2FtcGFpZ25zIGZvciBhIGJyYW5kIHRoYXTigJlzIGFzIHJlbGV2YW50IHRvZGF5IGFzIGl0IHdhcyBhIGZldyBkZWNhZGVzIGFnby48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2RkIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL1ZvaUplYW5zLnBuZ1wiIGJnSW1hZ2VBbHQ9XCJsYW5nb29yXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPXtgcG9ydGZvbGlvLWl0ZW0gJHt0aGlzLnN0YXRlLmlzTW9iaWxlP1wid2hpdGUtbWVudS1idG5cIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL3ZvaS1qZWFuc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5WT0kgSmVhbnMgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPlRoZSB2ZXJ5IGlkZWEgb2YgdGhlc2UgZGVuaW1zIGluc3BpcmVkIHVzISBWT0kgaGFzIGVyZ29ub21pY2FsbHkgZW5naW5lZXJlZCBkZW5pbXMgdGhhdCBjYWxsZWQgZm9yIGVkZ3ksIGZhc2hpb24gZm9yd2FyZCBjb21tdW5pY2F0aW9uLiBBbmQgd2UgcmV2ZWxlZCBpbiBpdC48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZXZlbiBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vSWNlYnVyZzEuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvaWNlYnVyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5JY2VCdXJnIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5JbnRlbnNlIGNyYXZpbmdzIGZvciBidXJnZXJzIGFuZCBzaGFrZXMgZmVkIG91ciBicmFpbnMgYXMgd2Ugd29ya2VkIG9uIHRoZSBicmFuZCBpZGVhIGFuZCBpZGVudGl0eSBmb3IgdGhpcyBVSy1iYXNlZCBnb3VybWV0IGJ1cmdlciBjaGFpbi48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2RkIG1pYS1ieS10YW5pc2hxIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL01pYTEuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvbWlhLWJ5LXRhbmlzaHFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+TWlhIC0gVGFuaXNocSA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+VGhlc2UgZmlsbXMgYXJlIGEgY29sbGVjdGlvbiBvZiBzdG9yaWVzIG9mIEluZGlhbiB3b21lbiB3aG8gaW5zcGlyZSB5b3Ugd2l0aCB0aGVpciByZXNpbGllbmNlLCBjaGFybSB5b3Ugd2l0aCB0aGVpciBwcmVzZW5jZSBhbmQgYXdlIHlvdSB3aXRoIHRoZWlyIGFjaGlldmVtZW50cy48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZXZlbiBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9HcmFwaGljczEuanBnXCIgYmdJbWFnZUFsdD1cImdyYXBoaWNzXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPVwicG9ydGZvbGlvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+R3JhcGhpY3MgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5BIGRpZ2l0YWwgYXJ0IHByb2plY3QgdGhhdCBsZWQgdXMgdG8gY3JlYXRlIGVkZ3ksIG1vZGVybiBncmFwaGljcyBmb3IgY2xvdGhpbmcgYW5kIG1lcmNoYW5kaXNlLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuby1jc3NcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxvcmUtbW9yZSB0ZXh0LWNlbnRlciBwYWRkZWQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZVwiPmJyb3dzZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjQuNnJlbVwifX0+ICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV4cGxvcmUtYXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvdyBkaXJlY3Rpb249XCJkb3duXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzIHBvc2l0aW9uLXJlbGF0aXZlIHBhZGRlZC1jb250ZW50IHdoaXRlLWN1cnNvciB3aGl0ZS1jdXJzb3Igd2hpdGUtbWVudS1idG5cIiByZWY9e3RoaXMud2hpdGVNZW51U2VjdGlvbnNbMF19PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtaGVhZGluZyBtb3JlLWxldHRlci1zcGFjaW5nIGZ1dHVyYS1saWdodCBzbGlnaHRseS1sYXJnZXItdGV4dCB5ZWxsb3ctdGV4dFwiPlNFUlZJQ0VTPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1saXN0c1wiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzZXJ2aWNlLWl0ZW1zIGxpc3Qtc3R5bGUtbm9uZSB3aGl0ZS10ZXh0IGxhcmdlci10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdpbnNpZ2h0cycgfSx9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBJbnNpZ2h0c1xuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ2JyYW5kLWlkZW50aXR5JyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBCcmFuZCBJZGVudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAncGFja2FnaW5nJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBQYWNrYWdpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ2FkdmVydGlzaW5nJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBBZHZlcnRpc2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnZGlnaXRhbCcgfSx9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRGlnaXRhbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnZGlnaXRhbCcgfSx9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgR3JhcGhpY3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ2ZpbG1zJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxtc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNraWxscyBsaXN0LXN0eWxlLW5vbmUgc2xpZ2h0bHktbGFyZ2VyLXRleHQgZnV0dXJhLWxpZ2h0IHllbGxvdy10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8bGk+Q1JFQVRJVkU8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPklOU0lHSFQtRFJJVkVOPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5DVUxUVVJBTExZIFJFTEVWQU5UPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NlcnZpY2VzLWJnLTIucG5nXCIgY2xhc3NOYW1lPVwid2lkdGgtMTAwXCIgIGFsdD0naG9tZWNvdmVyJy8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctbW9iaWxlIGhpZGUtZGVza3RvcCB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7bWFyZ2luVG9wOlwiNy4ycmVtXCJ9fT5cbiAgICAgICAgICAgICAgICA8QXJyb3cgZGlyZWN0aW9uPVwiZG93blwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxDbGllbnRzIC8+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvd2F2ZS1ibGFjay5naWZcIiBjbGFzc05hbWU9XCJ3aWR0aC0xMDAgd2F2ZVwiIGFsdD0naG9tZWNvdmVyJyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyF0aGlzLnN0YXRlLmxvYWRpbmdMb2dvUmVhZHkgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxhY2stYmdcIj48L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLndoaXRlLWZhZGV7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwcmVtO1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LDI1NSwyNTUsIDEpKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwyNTUsMjU1LCAxKSk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LDI1NSwyNTUsIDEpKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgd2hpdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFycm93LXJpZ2h0e1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKTtcbiAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucC1pbmZvLXdyYXBwZXI6aG92ZXIgLmFycm93LXJpZ2h0LC5wb3J0Zm9saW8taXRlbTpob3ZlciAuYXJyb3ctcmlnaHR7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDFyZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAud2F2ZXtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgLy8gYm90dG9tOiAtNzglO1xuICAgICAgICAgICAgICBib3R0b206MDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWl0ZW1zIGxpIGF7XG4gICAgICAgICAgICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1pdGVtcyBsaSBhOmhvdmVye1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgY29sb3I6I0Y5RUQzMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWl0ZW1zIGxpOmhvdmVye1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGluc01lZGl1bUl0YWxpYyxzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucC1pbmZvLXdyYXBwZXJ7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1hdDEgLnAtaW5mb3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICBib3R0b206IDdyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuaGVsbG8gLmNoaWxke1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLnN0b3J5dGVsbGVycyAuY2hpbGR7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuZnVsbC1zZXJ2aWNlIC5jaGlsZHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAuYW5pbWF0ZSAubG9va2luZy1mb3IgLmNoaWxke1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5leHBsb3JlLW1vcmV7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTo0LjZyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6OHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWxpc3RzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2UtaXRlbXN7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNi41cmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2tpbGxzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2LjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1pbWFnZXtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogLTUlO1xuICAgICAgICAgICAgICB0b3A6IC0xJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDQ3JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlc3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDojMDAwMDAwO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo4LjhyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjI1cmVtO1xuICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9ydGZvbGlve1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmZmZmY7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOjhyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cmVtO1xuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3J0Zm9saW8taXRlbXN7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxN3JlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTUlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MTUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtcyAucm93IC5ldmVue1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOi04cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby10aXRsZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6NC42cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtLmZvcm1hdDIgLmltYWdlLXdyYXBwZXIgaW1ne1xuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1kZXNjcmlwdGlvbntcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ldmVuIC5mb3JtYXQyIC5wb3J0Zm9saW8taW5mb3tcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtYXQyIC5wb3J0Zm9saW8taW5mb3tcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDozcmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nOjAgNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybWF0MSAucG9ydGZvbGlvLWluZm97XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBib3R0b206IDhyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtYXQxe1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMjUlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ldmVuIC5mb3JtYXQxe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSkgMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1jYXRlZ29yaWVze1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm90dG9tLXRleHR7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNC41cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaG9tZS1kb3duLWFycm93e1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NHJlbTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZsb2F0aW5nO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OjEuNHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuaG9tZS1kb3duLWFycm93e1xuICAgICAgICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZsb2F0aW5nIHtcbiAgICAgICAgICAgICAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsICAwcHgpOyB9XG4gICAgICAgICAgICAgIDY1JSAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxNXB4KTsgfVxuICAgICAgICAgICAgICB0byAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTBweCk7IH0gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3Rvcnl0ZWxsZXJzIHtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS43cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLmxvYWRpbmctd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ke3RoaXMucHJvcHMuY29tbW9uLndpbmRvd0hlaWdodCArIDEwMH1weCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9hZGluZy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvYWRpbmctd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllcigwLjc3LCAwLCAwLjE3NSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxhY2stYmd7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvYWRpbmctd3JhcHBlciBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XG4gICAgICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDU2cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRvcC1zZWN0aW9uLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRvcC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWxsbyB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmMjA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnJlbTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MC44O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZ1bGwtc2VydmljZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0MTQwNDI7O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgdG9wOiAzcmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMy41cmVtO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAzLjVyZW07XG4gICAgICAgICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0IGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3QgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVuZGVybGluZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMC4xcmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMXJlbTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0OmhvdmVyIC51bmRlcmxpbmUsXG4gICAgICAgICAgICAudW5kZXJsaW5lLmV4cGFuZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDZyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnJvd3Nle1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOi0xcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcbiAgICAgICAgICAgICAgLnRleHR7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5oZWxsb3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTZyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmZ1bGwtc2VydmljZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc3Rvcnl0ZWxsZXJze1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjFyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDowO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ib3R0b20tdGV4dHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wb3J0Zm9saW8taXRlbXN7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtcyAucm93IC5ldmVue1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubWlhLWJ5LXRhbmlzaHF7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDotNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VydmljZS1saXN0cyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlLWhlYWRpbmd7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlcnZpY2UtaXRlbXN7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6bm9uZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2tpbGxze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlLWltYWdlIHtcbiAgICAgICAgICAgICAgICAvLyByaWdodDogLTEwJTtcbiAgICAgICAgICAgICAgICAvLyB0b3A6YXV0bztcbiAgICAgICAgICAgICAgICAvLyBib3R0b206IC0xJTtcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogNTclO1xuICAgICAgICAgICAgICAgIC8vIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlc3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo4LjhyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLndoaXRlLWZhZGV7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6M3JlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZnVsbC1zZXJ2aWNle1xuICAgICAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zdG9yeXRlbGxlcnMge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBvcnRmb2xpb3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo0cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsb3JlLW1vcmV7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo0cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsb3JlLWFycm93e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjFyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmJyb3dzZXtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOi0ycmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7IGNvbW1vbiB9KSB7XG4gIHJldHVybiB7XG4gICAgY29tbW9uLFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtvcGVuTWVudSxhZGRDbGFzc1RvQ3Vyc29yLHJlbW92ZUNsYXNzRnJvbUN1cnNvcn0pKEhvbWUpO1xuIiwiZXhwb3J0IGNvbnN0IFNFVF9XSU5ET1cgPSBcIlNFVF9XSU5ET1dcIlxuZXhwb3J0IGNvbnN0IFRPR0dMRV9NRU5VID0gXCJUT0dHTEVfTUVOVVwiXG5leHBvcnQgY29uc3QgT1BFTl9NRU5VID0gXCJPUEVOX01FTlVcIlxuZXhwb3J0IGNvbnN0IEFERF9DTEFTU19UT19DVVJTT1IgPSBcIkFERF9DTEFTU19UT19DVVJTT1JcIlxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DTEFTU19GUk9NX0NVUlNPUiA9IFwiUkVNT1ZFX0NMQVNTX0ZST01fQ1VSU09SXCJcbmV4cG9ydCBjb25zdCBISURFX0ZVTExfU0NSRUVOX1ZJREVPID0gXCJISURFX0ZVTExfU0NSRUVOX1ZJREVPXCJcbmV4cG9ydCBjb25zdCBTSE9XX0ZVTExfU0NSRUVOX1ZJREVPID0gXCJTSE9XX0ZVTExfU0NSRUVOX1ZJREVPXCJcbmV4cG9ydCBjb25zdCBTRVRfTUVOVV9CVE5fQ09MT1IgPSBcIlNFVF9NRU5VX0JUTl9DT0xPUlwiXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Z1bGxzY3JlZW5WaWRlbyh2aWRlb19pZCwgdmlkZW9fc3JjLHZpZGVvX3R5cGUpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6U0hPV19GVUxMX1NDUkVFTl9WSURFTyxcbiAgICAgICAgdmlkZW9faWQsXG4gICAgICAgIHZpZGVvX3NyYyxcbiAgICAgICAgdmlkZW9fdHlwZVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBoaWRlRnVsbHNjcmVlblZpZGVvKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTpISURFX0ZVTExfU0NSRUVOX1ZJREVPXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFdpbmRvdyh3aW5kb3dXaWR0aCx3aW5kb3dIZWlnaHQpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6U0VUX1dJTkRPVyxcbiAgICAgICAgd2luZG93V2lkdGgsXG4gICAgICAgIHdpbmRvd0hlaWdodFxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVNZW51KCl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTpUT0dHTEVfTUVOVVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBvcGVuTWVudShib29sKXtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOk9QRU5fTUVOVSxcbiAgICAgICAgYm9vbFxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzc1RvQ3Vyc29yKGNscyl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTpBRERfQ0xBU1NfVE9fQ1VSU09SLFxuICAgICAgICBjbHNcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0TWVudUJ0bkNvbG9yKGNvbG9yKXtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOlNFVF9NRU5VX0JUTl9DT0xPUixcbiAgICAgICAgY29sb3JcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKGNscyl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTpSRU1PVkVfQ0xBU1NfRlJPTV9DVVJTT1IsXG4gICAgICAgIGNsc1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdmltZW8vcGxheWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcGFyYWxsYXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9