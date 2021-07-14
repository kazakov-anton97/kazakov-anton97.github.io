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
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lazysizes */ "lazysizes");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_11__);
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
        lineNumber: 123,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }
    }, __jsx("meta", {
      name: "google-site-verification",
      content: "fTp7loBzDTAjXEutiEclfst4c3vt13uktqW_dAFTWoI",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 3
      }
    }), __jsx("meta", {
      name: "keywords",
      content: "brand identity agency, brand identity design agency, corporate identity agency, brand identity, branding design, digital media management,digital media agency, social media agencies,digital media marketing companies",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 3
      }
    }), __jsx("title", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 11
      }
    }, "Brand Identity Agency | Opposable Thumbs"), __jsx("meta", {
      name: "description",
      content: "Opposable Thumbs work with companies for their branding. If you have a new brand to launch, we can help you, right from naming it to developing its identity.",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 1
      }
    }), __jsx("link", {
      rel: "icon",
      href: "/favicon.ico",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 11
      }
    }), __jsx("script", {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=G-VTMF70P7HW",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
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
        lineNumber: 135,
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
        lineNumber: 147,
        columnNumber: 1
      }
    })), this.state.loadingLogoReady && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + `${this.state.animate ? "animate" : ""}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
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
        lineNumber: 156,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "/images/loading_logo.png",
      alt: "homecover",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
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
        lineNumber: 160,
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
        lineNumber: 162,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "top-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "storytellers futura-light",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "overflow-hidden",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "child",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 27
      }
    }, "MEET THE STORYTELLERS"))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "hello helvetica-neue-condensed",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "overflow-hidden",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "child",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 27
      }
    }, "Hello")), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "full-service big-caslon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "overflow-hidden",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "child",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 31
      }
    }, "Independent", __jsx("br", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 45
      }
    }), "Agency")))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "home-down-arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow down",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 25
      }
    }, " ")), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "overflow-hidden looking-for",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "child",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "bottom-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 27
      }
    }, __jsx("h1", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 56
      }
    }, "Brand Identity Agency")))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "white-fade",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-categories text-center padded-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 13
      }
    }, "Insights / Brand Identity / Packaging / Advertising / Digital / Graphics / Films"), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-items",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "row no-gutters",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 odd larger-cursor white-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
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
        lineNumber: 210,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/projects/big-banyan",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 35
      }
    }, "Big Banyan ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 88
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 118
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 35
      }
    }, "An Italian winemaker. A passionate brand team. And us. Years of t\xEAte-\xE0-t\xEAtes and research-driven insights led us to recreate the packaging and communication strategy for Big Banyan. "))))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 even larger-cursor white-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
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
        lineNumber: 224,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/projects/langoor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 35
      }
    }, "L'angoor ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 86
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 116
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 35
      }
    }, "Wine can be elegant. Wine can be sophisticated. But wine and fun? Here\u2019s how we married \u2018fun\u2019 and a new brand of wines from Big Banyan, known for its premium wines."))))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 odd larger-cursor white-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
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
        lineNumber: 238,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/projects/enchanteur",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 35
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 37
      }
    }, "Enchanteur ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 90
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 120
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 37
      }
    }, "It\u2019s French, it\u2019s romantic and it\u2019s so very floral. How can we not fall in love with Enchanteur? We have K-drama fans on our team who absolutely love this brand!"))))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 even larger-cursor white-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
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
        lineNumber: 252,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/projects/fynd",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 35
      }
    }, "FYND ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 82
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 112
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 35
      }
    }, "Seeded in the idea of self-expression, FYND inspired us with its functional clothing lines. From strategy to identity and brand architecture design, we helped bring this brand to life. "))))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 odd larger-cursor white-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
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
        lineNumber: 266,
        columnNumber: 23
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/projects/chandrika",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 35
      }
    }, "Chandrika ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 87
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 117
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 35
      }
    }, "Here\u2019s a brand we all grew up with. And yet, it managed to surprise us with its secrets. We shared these little nuggets with the world in our campaign."))))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 even larger-cursor white-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 19
      }
    }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_6__["Parallax"], {
      bgImage: "/images/portfolio/Santoor.jpg",
      bgImageAlt: "langoor",
      strength: 200,
      className: "portfolio-item lazyload",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/projects/santoor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 35
      }
    }, "Santoor ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 85
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 115
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 35
      }
    }, "Who doesn\u2019t remember the classic \u201Cmummy\u201D ads! It gives us great pride to work on campaigns for a brand that\u2019s as relevant today as it was a few decades ago."))))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 odd larger-cursor white-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 19
      }
    }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_6__["Parallax"], {
      bgImage: "/images/portfolio/VoiJeans.png",
      bgImageAlt: "langoor",
      strength: 200,
      className: `portfolio-item ${this.state.isMobile ? "white-menu-btn" : ""}`,
      lazyload: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/projects/voi-jeans",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 35
      }
    }, "VOI Jeans ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 87
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 117
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 35
      }
    }, "The very idea of these denims inspired us! VOI has ergonomically engineered denims that called for edgy, fashion forward communication. And we reveled in it."))))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 even larger-cursor white-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
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
        lineNumber: 309,
        columnNumber: 23
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/projects/iceburg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 35
      }
    }, "IceBurg ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 85
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 115
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 35
      }
    }, "Intense cravings for burgers and shakes fed our brains as we worked on the brand idea and identity for this UK-based gourmet burger chain."))))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 odd mia-by-tanishq larger-cursor white-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
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
        lineNumber: 324,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/projects/mia-by-tanishq",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 35
      }
    }, "Mia - Tanishq ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 91
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 121
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 35
      }
    }, "These films are a collection of stories of Indian women who inspire you with their resilience, charm you with their presence and awe you with their achievements."))))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 even larger-cursor white-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 19
      }
    }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_6__["Parallax"], {
      bgImage: "/images/portfolio/Graphics1.jpg",
      bgImageAlt: "graphics",
      strength: 200,
      className: "portfolio-item lazyload",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 35
      }
    }, "Graphics"), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 35
      }
    }, "A digital art project that led us to create edgy, modern graphics for clothing and merchandise."))))))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/projects",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "no-css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "explore-more text-center padded-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "browse",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 21
      }
    }, "browse"), __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "explore-arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 23
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "down",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 25
      }
    })))))), __jsx("div", {
      ref: this.whiteMenuSections[0],
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "services position-relative padded-content white-cursor white-cursor white-menu-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "service-heading more-letter-spacing futura-light slightly-larger-text yellow-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 15
      }
    }, "SERVICES"), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "service-lists",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 15
      }
    }, __jsx("ul", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "service-items list-style-none white-text larger-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 17
      }
    }, __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
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
        lineNumber: 370,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 23
      }
    }, "Insights"))), __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376,
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
        lineNumber: 377,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 25
      }
    }, "Brand Identity"))), __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
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
        lineNumber: 384,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 25
      }
    }, "Packaging"))), __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
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
        lineNumber: 391,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 25
      }
    }, "Advertising"))), __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397,
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
        lineNumber: 398,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 25
      }
    }, "Digital"))), __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404,
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
        lineNumber: 405,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 25
      }
    }, "Graphics"))), __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
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
        lineNumber: 412,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 25
      }
    }, "Films")))), __jsx("ul", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "skills list-style-none slightly-larger-text futura-light yellow-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 17
      }
    }, __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 19
      }
    }, "CREATIVE"), __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 19
      }
    }, "INSIGHT-DRIVEN"), __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 19
      }
    }, "CULTURALLY RELEVANT"))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "service-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 15
      }
    }, __jsx("img", {
      "data-src": "/images/services-bg-2.png",
      alt: "homecover",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "width-100 lazyload",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426,
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
        lineNumber: 428,
        columnNumber: 15
      }
    }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: "down",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 17
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "position-relative",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 11
      }
    }, __jsx(_components_clients__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433,
        columnNumber: 13
      }
    }), __jsx("img", {
      "data-src": "/images/wave-black.gif",
      alt: "homecover",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "width-100 wave lazyload",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434,
        columnNumber: 13
      }
    }))), !this.state.loadingLogoReady && __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "black-bg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439,
        columnNumber: 11
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2863980262",
      dynamic: [this.props.common.windowHeight + 100],
      __self: this
    }, `.white-fade.__jsx-style-dynamic-selector{position:absolute;bottom:0;height:10rem;width:50%;background:-moz-linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,1));background:-webkit-linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,1));background:linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,1));background:linear-gradient(to bottom,rgba(255,255,255,0),white);}.arrow-right.__jsx-style-dynamic-selector{-webkit-transition:-webkit-transform 400ms cubic-bezier(0.77,0,0.175,1);-webkit-transition:transform 400ms cubic-bezier(0.77,0,0.175,1);transition:transform 400ms cubic-bezier(0.77,0,0.175,1);display:inline-block;}.p-info-wrapper.__jsx-style-dynamic-selector:hover .arrow-right.__jsx-style-dynamic-selector,.portfolio-item.__jsx-style-dynamic-selector:hover .arrow-right.__jsx-style-dynamic-selector{-webkit-transform:translateX(1rem);-ms-transform:translateX(1rem);transform:translateX(1rem);}.wave.__jsx-style-dynamic-selector{width:100%;position:absolute;bottom:0;left:0;}.service-items.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#ffffff;}.service-items.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:none;text-decoration:none;color:#F9ED32;}.service-items.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector:hover{font-family:PoppinsMediumItalic,sans-serif !important;}.p-info-wrapper.__jsx-style-dynamic-selector{position:relative;}.format1.__jsx-style-dynamic-selector .p-info.__jsx-style-dynamic-selector{position:absolute;bottom:0;color:#ffffff;bottom:7rem;padding:0 5%;}.animate.__jsx-style-dynamic-selector .hello.__jsx-style-dynamic-selector .child.__jsx-style-dynamic-selector{-webkit-transition-delay:0.4s;transition-delay:0.4s;}.animate.__jsx-style-dynamic-selector .storytellers.__jsx-style-dynamic-selector .child.__jsx-style-dynamic-selector{-webkit-transition-delay:0.6s;transition-delay:0.6s;}.animate.__jsx-style-dynamic-selector .full-service.__jsx-style-dynamic-selector .child.__jsx-style-dynamic-selector{-webkit-transition-delay:0.8s;transition-delay:0.8s;}.animate.__jsx-style-dynamic-selector .looking-for.__jsx-style-dynamic-selector .child.__jsx-style-dynamic-selector{-webkit-transition-delay:1s;transition-delay:1s;}.explore-more.__jsx-style-dynamic-selector{font-size:4.6rem;margin-top:8rem;}.service-lists.__jsx-style-dynamic-selector{margin-left:14rem;}.service-items.__jsx-style-dynamic-selector{padding-left:6.5rem;margin-top:5rem;line-height:1.2;border-left:1px solid #ffffff;}.skills.__jsx-style-dynamic-selector{margin-top:6rem;padding-left:6.5rem;}.service-image.__jsx-style-dynamic-selector{position:absolute;right:-5%;top:-1%;width:47%;}.services.__jsx-style-dynamic-selector{background:#000000;padding-top:8.8rem;padding-bottom:25rem;overflow:hidden;}.portfolio.__jsx-style-dynamic-selector{background:#ffffff;padding-top:8rem;padding-bottom:8rem;position:relative;}.portfolio-items.__jsx-style-dynamic-selector{margin-top:17rem;padding-left:15%;padding-right:15%;}.portfolio-items.__jsx-style-dynamic-selector .row.__jsx-style-dynamic-selector .even.__jsx-style-dynamic-selector{margin-top:-8rem;}.portfolio-title.__jsx-style-dynamic-selector{font-size:4.6rem;}.portfolio-item.format2.__jsx-style-dynamic-selector .image-wrapper.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:100%;}.portfolio-description.__jsx-style-dynamic-selector{width:80%;}.even.__jsx-style-dynamic-selector .format2.__jsx-style-dynamic-selector .portfolio-info.__jsx-style-dynamic-selector{margin-bottom:12rem;}.format2.__jsx-style-dynamic-selector .portfolio-info.__jsx-style-dynamic-selector{margin-top:3rem;padding:0 5%;}.format1.__jsx-style-dynamic-selector .portfolio-info.__jsx-style-dynamic-selector{position:absolute;bottom:0;color:#ffffff;bottom:8rem;padding:0 5%;}.format1.__jsx-style-dynamic-selector{padding-top:125%;background-attachment:fixed;background-size:50%;background-repeat:no-repeat;}.even.__jsx-style-dynamic-selector .format1.__jsx-style-dynamic-selector{background-position:calc(100%) 0px;}.portfolio-categories.__jsx-style-dynamic-selector{font-size:1.8rem;}.bottom-text.__jsx-style-dynamic-selector{margin-top:4.5rem;font-size:1.8rem;}.home-down-arrow.__jsx-style-dynamic-selector{margin-top:4rem;opacity:0;-webkit-animation-name:floating-__jsx-style-dynamic-selector;animation-name:floating-__jsx-style-dynamic-selector;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-transition:opacity 1s;transition:opacity 1s;-webkit-transition-delay:1.4s;transition-delay:1.4s;}.animate.__jsx-style-dynamic-selector .home-down-arrow.__jsx-style-dynamic-selector{opacity:1;}@-webkit-keyframes floating-__jsx-style-dynamic-selector{from{-webkit-transform:translate(0,0px);-ms-transform:translate(0,0px);transform:translate(0,0px);}65%{-webkit-transform:translate(0,15px);-ms-transform:translate(0,15px);transform:translate(0,15px);}to{-webkit-transform:translate(0,-0px);-ms-transform:translate(0,-0px);transform:translate(0,-0px);}}@keyframes floating-__jsx-style-dynamic-selector{from{-webkit-transform:translate(0,0px);-ms-transform:translate(0,0px);transform:translate(0,0px);}65%{-webkit-transform:translate(0,15px);-ms-transform:translate(0,15px);transform:translate(0,15px);}to{-webkit-transform:translate(0,-0px);-ms-transform:translate(0,-0px);transform:translate(0,-0px);}}.storytellers.__jsx-style-dynamic-selector{-webkit-letter-spacing:1.7rem;-moz-letter-spacing:1.7rem;-ms-letter-spacing:1.7rem;letter-spacing:1.7rem;font-size:1.2rem;margin-top:15rem;}.animate.__jsx-style-dynamic-selector .loading-wrapper.__jsx-style-dynamic-selector{-webkit-transform:translateY(-${this.props.common.windowHeight + 100}px);-ms-transform:translateY(-${this.props.common.windowHeight + 100}px);transform:translateY(-${this.props.common.windowHeight + 100}px);}.loading-wrapper.__jsx-style-dynamic-selector{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.loading-wrapper.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:1000;background:#000000;-webkit-transition:-webkit-transform 0.6s cubic-bezier(0.77,0,0.175,1);-webkit-transition:transform 0.6s cubic-bezier(0.77,0,0.175,1);transition:transform 0.6s cubic-bezier(0.77,0,0.175,1);}.black-bg.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:999;background:#000000;}.loading-wrapper.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:200px;position:absolute;left:calc(50% - 100px);top:calc(50% - 56px);}.top-section-wrapper.__jsx-style-dynamic-selector{max-width:100%;width:100%;height:100vh;margin:auto;overflow:hidden;position:relative;background:#ffffff;}.top-content.__jsx-style-dynamic-selector{position:relative;z-index:2;text-align:center;height:100%;overflow:hidden;}.text.__jsx-style-dynamic-selector{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;padding-bottom:5rem;}.hello.__jsx-style-dynamic-selector{color:#ffff20;font-size:36rem;position:relative;line-height:0.8;}.full-service.__jsx-style-dynamic-selector{color:#414042;font-size:7rem;position:absolute;left:0;right:0;margin:auto;top:3rem;line-height:1.15;}.background.__jsx-style-dynamic-selector{position:absolute;width:100%;opacity:0;-webkit-transition:opacity 1.5s;transition:opacity 1.5s;-webkit-transition-delay:1.2s;transition-delay:1.2s;}.animate.__jsx-style-dynamic-selector .background.__jsx-style-dynamic-selector{opacity:1;}.contact.__jsx-style-dynamic-selector{position:absolute;bottom:3.5rem;right:3.5rem;z-index:3;font-size:1.4rem;}.contact.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#212529;}.contact.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{color:#212529;-webkit-text-decoration:none;text-decoration:none;}.underline.__jsx-style-dynamic-selector{position:absolute;display:inline-block;left:0;width:0;height:0.1rem;background:#000000;bottom:-1rem;-webkit-transition:all 0.3s cubic-bezier(0.785,0.135,0.15,0.86);transition:all 0.3s cubic-bezier(0.785,0.135,0.15,0.86);}.contact.__jsx-style-dynamic-selector:hover .underline.__jsx-style-dynamic-selector,.underline.expand.__jsx-style-dynamic-selector{width:6rem;}.browse.__jsx-style-dynamic-selector{margin-bottom:-1rem;}@media only screen and (max-width:768px){.text.__jsx-style-dynamic-selector{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:40%;}.hello.__jsx-style-dynamic-selector{font-size:16rem;}.full-service.__jsx-style-dynamic-selector{font-size:3.5rem;}.storytellers.__jsx-style-dynamic-selector{font-size:1.1rem;margin-top:0;}.bottom-text.__jsx-style-dynamic-selector{margin-top:7rem;}.portfolio-items.__jsx-style-dynamic-selector{margin-top:3rem;padding-left:0;padding-right:0;}.portfolio-items.__jsx-style-dynamic-selector .row.__jsx-style-dynamic-selector .even.__jsx-style-dynamic-selector{margin-top:0;}.mia-by-tanishq.__jsx-style-dynamic-selector{margin-top:-5rem;}.service-lists.__jsx-style-dynamic-selector{margin-left:0rem;position:relative;z-index:10;}.service-heading.__jsx-style-dynamic-selector{text-align:center;}.service-items.__jsx-style-dynamic-selector{padding-left:0;border-left:none;text-align:center;}.skills.__jsx-style-dynamic-selector{padding-left:0;text-align:center;}.service-image.__jsx-style-dynamic-selector{display:none;}.services.__jsx-style-dynamic-selector{padding-bottom:8.8rem;}.white-fade.__jsx-style-dynamic-selector{height:3rem;}.full-service.__jsx-style-dynamic-selector{top:0;}.storytellers.__jsx-style-dynamic-selector{margin-bottom:2rem;}.portfolio.__jsx-style-dynamic-selector{padding-bottom:4rem;}.explore-more.__jsx-style-dynamic-selector{margin-top:4rem;}.explore-arrow.__jsx-style-dynamic-selector{display:inline-block;margin-left:1rem;}.browse.__jsx-style-dynamic-selector{margin-bottom:-2rem;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25cXERvY3VtZW50c1xcR2l0SHViXFxhbnRvbi5naXRodWIuaW9cXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Ym9CLEFBR2lDLEFBVXlDLEFBSzlELEFBRWMsQUFPRSxBQUdPLEFBSWtDLEFBR3JDLEFBR0MsQUFPSSxBQUdBLEFBR0EsQUFHRixBQUdKLEFBSUUsQUFHRSxBQU1KLEFBSUUsQUFNQSxBQU1BLEFBTUEsQUFLRixBQUdFLEFBR1IsQUFHQSxBQUdTLEFBR0osQUFJSyxBQU9ELEFBTWtCLEFBR25CLEFBR0UsQUFJSCxBQVVSLEFBRzBCLEFBQ0EsQUFDQSxBQUdYLEFBS2dDLEFBR2hDLEFBR1AsQUFVRixBQVNELEFBTUcsQUFTRyxBQU9OLEFBUUUsQUFNQSxBQVVJLEFBT1IsQUFHUSxBQU9KLEFBR0EsQUFJSSxBQVdQLEFBR00sQUFJUSxBQUlWLEFBR0UsQUFHRCxBQUlBLEFBR0EsQUFLSixBQUdJLEFBR0MsQUFLQSxBQUdILEFBS0EsQUFTRixBQUdTLEFBR1IsQUFHUixBQUdjLEFBR0EsQUFHSixBQUdLLEFBSUQsTUFmckIsSUFwT0YsQUEyQ0EsQUEyRkEsQ0E5Tm9CLEFBcUZwQixBQXFLQSxDQWpGc0IsQUFzQkwsQUEwSGYsQ0FsQ0EsQUE0QkEsQ0E1U0YsQUFnTW9CLEFBTUQsQUEyQm5CLEFBR3lCLENBckZmLEFBVUYsQUFlTyxBQXNISyxBQUtDLENBdFBDLEFBMENSLEFBMkJELEFBNElYLEFBVUEsQUFHZ0IsQUFtRGhCLENBOVJlLEFBbUNHLEFBS3BCLEFBR0EsQUF1QmdDLEFBU2hDLEFBc0pFLEFBR2MsQUFlZCxBQUdvQixDQTlTWCxBQWtDWCxBQUdXLEFBdUJYLEFBYVksQUEwQ0MsQUFtQk8sQUFtRU4sQUErQkMsQUFVRyxBQWNPLEFBbUR2QixDQXBPa0IsQUFNRixBQTJQaEIsQ0FqUmdCLEFBNkNsQixBQWtLQSxBQXFFRSxBQVVBLENBckxTLEFBVUYsQUF1S1csQ0FsQmxCLElBNUwwQixBQXNEWCxDQWhNRixBQXFDQyxBQThFRSxDQTFDUixBQStGSyxBQVVGLEFBdUJTLENBdkxaLEFBNkZWLEFBK0dzQixBQVVSLENBOUNhLEFBOEJMLEFBb0VwQixDQU9pQixDQWpERixBQW9FSSxDQTlQckIsQUFtUUUsQ0FoT21CLENBb0NyQixBQU9BLEFBd0tlLENBL09HLEFBTWxCLEFBS1ksQUFXVSxFQWxFYixBQTREYSxBQTBRcEIsQ0FoTGUsQUFVRixBQWNDLEFBd0NZLEFBdUJqQixDQS9QQyxDQXFDRSxBQThFRSxJQWhHaEIsQUFzR3dCLEFBeUhWLENBeEtkLEFBK0hnQixBQXVESixBQThDVixDQWhGUyxBQXFFVCxDQWhQRixBQXFLbUIsRUF2TndFLEFBd0I1RSxBQTZSYixDQXJIa0IsQ0F2SnBCLEFBR0EsQUFHQSxBQWVnQyxBQTRCaEMsQUE4RWlCLEFBVUgsQ0E3SUMsQUE4RUUsQUFzRVEsQ0E3SnpCLEFBa01ZLEFBa0NNLENBZEcsQ0E5SkYsRUFxSEMsQ0EzSEgsR0FpSkQsRUF0TWhCLEFBMEpxQixBQXFDckIsQUFrQ0EsQ0FqSWdDLEFBZ0RULENBbkl2QixBQThFQSxDQTZFc0IsQ0FnRUMsSUFkdkIsRUE5SkEsQUFxR0EsQUFnQkEsQUFzQmEsQ0FqSmIsT0FoQkEsQ0FxSEEsQUE2Q3FCLENBaEVyQixBQVM4RCxDQXdCdkMsQ0FZRyxDQW9EVCxNQXZQakIsQUErR0EsQUF5QnNDLEVBcUZaLENBcEZZLEFBQ0EsQ0EwSGYsR0E3Q3ZCLEFBaUMrRCxJQWhFL0QsQ0ExQ3FCLFdBdUhuQixNQXRIbUIsV0F6SnlFLE1BMEo5RixDQWxCMEIsT0FnRzFCLGlCQTFCMEIsVUFqRDFCLGtCQXZKc0IsQUFtSWlCLHFCQWxJdkMsTUFOc0YsQ0FrUXRGLDJDQXBEc0IsT0FyRW9CLEdBZ0MxQyxRQXNDd0IsZ0JBOU0rQyxJQStNdkUscURBdEUwQixPQXhJMUIsNkNBeUl5QixvREFDekIiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbnRvblxcRG9jdW1lbnRzXFxHaXRIdWJcXGFudG9uLmdpdGh1Yi5pb1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IEFycm93IGZyb20gXCIuLi9jb21wb25lbnRzL2Fycm93XCJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtvcGVuTWVudX0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcbmltcG9ydCBDbGllbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvY2xpZW50cydcbmltcG9ydCB7YWRkQ2xhc3NUb0N1cnNvcixyZW1vdmVDbGFzc0Zyb21DdXJzb3J9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnXG5pbXBvcnQgeyBNT0JJTEVfQlJFQUtQT0lOVCB9IGZyb20gXCIuLi9jb25maWdcIlxuaW1wb3J0IHtsYXp5c2l6ZXN9IGZyb20gXCJsYXp5c2l6ZXNcIlxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc01vYmlsZTpmYWxzZSxcbiAgICAgIHVuZGVybGluZUV4cGFuZDogZmFsc2UsXG4gICAgICBiYWNrZ3JvdW5kU3R5bGVzOiB7IHRvcDogXCIwXCIsIGxlZnQ6IFwiMFwiIH0sXG4gICAgICBiYWNrZ3JvdW5kUmVhZHk6IGZhbHNlLFxuICAgICAgYmFja2dyb3VuZFNob3c6IGZhbHNlLFxuICAgICAgbG9hZGluZ0xvZ29SZWFkeTogZmFsc2UsXG4gICAgICBhbmltYXRlOiBmYWxzZSxcbiAgICAgIG1lbnVCdG5Db2xvcjpcImJsYWNrXCJcbiAgICB9O1xuICAgIHRoaXMuYmFja2dyb3VuZEltYWdlID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgICB0aGlzLnJlbGxheFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5ub3RQZXJmb3JtZWRBbmltYXRpb24gPSB0cnVlXG4gICAgdGhpcy53aGl0ZU1lbnVTZWN0aW9ucyA9IFtSZWFjdC5jcmVhdGVSZWYoKV1cbiAgfVxuICAvLyBoYW5kbGVTY3JvbGwgPSAoKT0+e1xuICAvLyAgIGZvcihsZXQgaT0wO2k8dGhpcy53aGl0ZU1lbnVTZWN0aW9ucy5sZW5ndGg7aSsrKXtcbiAgLy8gICAgIGxldCBib3VuZGluZ1ZhbHMgPSB0aGlzLndoaXRlTWVudVNlY3Rpb25zW2ldLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgLy8gICAgIGlmKGJvdW5kaW5nVmFscy50b3AgPCAwICYmIChib3VuZGluZ1ZhbHMudG9wICogLTEgPCBib3VuZGluZ1ZhbHMuaGVpZ2h0KSl7XG4gIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbnVCdG5Db2xvcjpcIndoaXRlXCJ9KVxuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudUJ0bkNvbG9yOlwiYmxhY2tcIn0pXG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG4gIGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICB0aGlzLnBvc2l0aW9uSW1hZ2UoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtpc01vYmlsZTp3aW5kb3cuaW5uZXJXaWR0aCA8IE1PQklMRV9CUkVBS1BPSU5UP3RydWU6ZmFsc2V9KVxuICB9XG4gIHBvc2l0aW9uSW1hZ2UoY2IpIHtcbiAgICBsZXQgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjByZW1cIiwgbGVmdDogXCItMzEuNSVcIiwgd2lkdGg6IFwiMjA4JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNDAwKVxuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjByZW1cIiwgbGVmdDogXCItMzEuNSVcIiwgd2lkdGg6IFwiMjA4JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNjUwKVxuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItMjAuNSVcIiwgd2lkdGg6IFwiMTIwJVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAyNClcbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7dG9wOlwiLTEuNXJlbVwiLGxlZnQ6XCItMjAuNSVcIix3aWR0aDpcIjEyMCVcIn1cbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7IHRvcDogXCItMC41cmVtXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTM2NilcbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7IHRvcDogXCItMC41cmVtXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTQ0MClcbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7IHRvcDogXCItMS41cmVtXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgLy8gfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBiYWNrZ3JvdW5kU3R5bGVzIH0sICgpID0+IHtcbiAgICAgIGlmIChjYikge1xuICAgICAgICBjYigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuc3RhdGUuYmFja2dyb3VuZFJlYWR5ICYmXG4gICAgICB0aGlzLnN0YXRlLmxvYWRpbmdMb2dvUmVhZHkgJiZcbiAgICAgIHRoaXMubm90UGVyZm9ybWVkQW5pbWF0aW9uXG4gICAgKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uSW1hZ2UoKTtcbiAgICAgIHRoaXMubm90UGVyZm9ybWVkQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLnByb3BzLm9wZW5NZW51KGZhbHNlKTtcbiAgICAgIC8vIHRoaXMubW91c2VFdmVudHMoKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbmltYXRlOiB0cnVlIH0sKCk9PntcbiAgICAgICAgICAvLyB0aGlzLnByb3BzLnJlbW92ZUNsYXNzRnJvbUN1cnNvcihcImxhcmdlclwiKSAgXG4gICAgICAgICAgLy8gdGhpcy5wcm9wcy5yZW1vdmVDbGFzc0Zyb21DdXJzb3IoXCJ3aGl0ZVwiKSAgXG4gICAgICAgIH0pO1xuICAgICAgfSwgNzUwKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aXNNb2JpbGU6d2luZG93LmlubmVyV2lkdGggPCBNT0JJTEVfQlJFQUtQT0lOVD90cnVlOmZhbHNlfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLmhhbmRsZVJlc2l6ZSlcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVNjcm9sbClcbiAgICBjb25zdCBsb2FkaW5nTG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGxvYWRpbmdMb2dvLnNyYyA9IFwiL2ltYWdlcy9sb2FkaW5nX2xvZ28ucG5nXCI7XG4gICAgbG9hZGluZ0xvZ28ub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmdMb2dvUmVhZHk6IHRydWUgfSk7XG4gICAgfTtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gXCIvaW1hZ2VzL2hvbWUtY292ZXIuanBnXCI7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYWNrZ3JvdW5kUmVhZHk6IHRydWUgfSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMucmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKFwid2hpdGVcIilcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuaGFuZGxlUmVzaXplKVxuICAgIC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlU2Nyb2xsKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICBcbi8vICAgICBmb3Igc2VvIHB1cnBvc2VcbiAgICAgIGNvbnN0IHNjaGVtYURhdGE9e1xuXG4gICAgICBcIkBjb250ZXh0XCI6IFwiaHR0cDovL3NjaGVtYS5vcmdcIixcbiAgICAgIFwiQHR5cGVcIjogXCJzZXJ2aWNlXCIsXG4gICAgICBcIm5hbWVcIjogXCJPcHBvc2FibGUgVGh1bWJzXCIsXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vb3Bwb3NhYmxlLXRodW1icy52ZXJjZWwuYXBwL1wiXG4gICB9XG5cbiAgIEpTT04uc3RyaW5naWZ5KHNjaGVtYURhdGEpXG4gICAgXG4gICAgXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgbmF2UG9zaXRpb249XCJhYnNvbHV0ZVwiIG5hdlRleHRDb2xvcj1cImJsYWNrXCIgbWVudUJ0bkNvbG9yPXt0aGlzLnN0YXRlLm1lbnVCdG5Db2xvcn0gcGFnZT1cImhvbWVcIj5cbiAgICAgICAgPEhlYWQ+XG4gIDxtZXRhIG5hbWU9XCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIiBjb250ZW50PVwiZlRwN2xvQnpEVEFqWEV1dGlFY2xmc3Q0YzN2dDEzdWt0cVdfZEFGVFdvSVwiIC8+XG4gIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJicmFuZCBpZGVudGl0eSBhZ2VuY3ksIGJyYW5kIGlkZW50aXR5IGRlc2lnbiBhZ2VuY3ksIGNvcnBvcmF0ZSBpZGVudGl0eSBhZ2VuY3ksIGJyYW5kIGlkZW50aXR5LCBicmFuZGluZyBkZXNpZ24sIGRpZ2l0YWwgbWVkaWEgbWFuYWdlbWVudCxkaWdpdGFsIG1lZGlhIGFnZW5jeSwgc29jaWFsIG1lZGlhIGFnZW5jaWVzLGRpZ2l0YWwgbWVkaWEgbWFya2V0aW5nIGNvbXBhbmllc1wiLz5cbiAgICAgICAgICA8dGl0bGU+QnJhbmQgSWRlbnRpdHkgQWdlbmN5IHwgT3Bwb3NhYmxlIFRodW1iczwvdGl0bGU+XG4gICAgICAgICAgey8qIDxoMT5PcHBvc2FibGUgVGh1bWJzPC9oMT4gKi99XG48bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiT3Bwb3NhYmxlIFRodW1icyB3b3JrIHdpdGggY29tcGFuaWVzIGZvciB0aGVpciBicmFuZGluZy4gSWYgeW91IGhhdmUgYSBuZXcgYnJhbmQgdG8gbGF1bmNoLCB3ZSBjYW4gaGVscCB5b3UsIHJpZ2h0IGZyb20gbmFtaW5nIGl0IHRvIGRldmVsb3BpbmcgaXRzIGlkZW50aXR5LlwiLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry1WVE1GNzBQN0hXXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICBndGFnKCdjb25maWcnLCAnRy1WVE1GNzBQN0hXJyk7XG4gICAgICAgICAgYCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz4gXG5cbiB7Lyogc2NoZW1hIGlzIGltcGxlbWVudGVkICovfVxuPHNjcmlwdFxuICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCJcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KHNjaGVtYURhdGEpIH19XG4gIC8+XG4gICAgICAgICAgICAgICAgICBcbjwvSGVhZD5cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZ0xvZ29SZWFkeSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuYW5pbWF0ZSA/IFwiYW5pbWF0ZVwiIDogXCJcIn1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy13cmFwcGVyXCIgc3R5bGU9e3toZWlnaHQ6YCR7dGhpcy5wcm9wcy5jb21tb24ud2luZG93SGVpZ2h0fXB4YH19PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvYWRpbmdfbG9nby5wbmdcIiBhbHQ9J2hvbWVjb3ZlcicgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9wLXNlY3Rpb24td3JhcHBlciBibGFjay1jdXJzb3IgJHt0aGlzLnN0YXRlLmFuaW1hdGUgPyBcImFuaW1hdGVcIiA6IFwiXCJ9YH0gc3R5bGU9e3sgaGVpZ2h0OiBgJHt0aGlzLnByb3BzLmNvbW1vbi53aW5kb3dIZWlnaHR9cHhgIH19PlxuICAgICAgICAgICAgey8qIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9ob21lLWNvdmVyLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJob21lIGNvdmVyXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPVwiXCI+ICovfVxuICAgICAgICAgICAgPGltZyBzdHlsZT17dGhpcy5zdGF0ZS5iYWNrZ3JvdW5kU3R5bGVzfSBzcmM9XCIvaW1hZ2VzL2hvbWUtY292ZXIuanBnXCIgY2xhc3NOYW1lPXtgYmFja2dyb3VuZGB9IHJlZj17dGhpcy5iYWNrZ3JvdW5kSW1hZ2V9IGFsdD0naG9tZWNvdmVyJy8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Rvcnl0ZWxsZXJzIGZ1dHVyYS1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgTUVFVCBUSEUgU1RPUllURUxMRVJTICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVsbG8gaGVsdmV0aWNhLW5ldWUtY29uZGVuc2VkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVsbG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVsbC1zZXJ2aWNlIGJpZy1jYXNsb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZGVwZW5kZW50PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFnZW5jeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWRvd24tYXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgZG93blwiPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBsb29raW5nLWZvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS10ZXh0XCI+PGgxPkJyYW5kIElkZW50aXR5IEFnZW5jeTwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8L1BhcmFsbGF4PiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hpdGUtZmFkZVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1jYXRlZ29yaWVzIHRleHQtY2VudGVyIHBhZGRlZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIEluc2lnaHRzIC8gQnJhbmQgSWRlbnRpdHkgLyBQYWNrYWdpbmcgLyBBZHZlcnRpc2luZyAvIERpZ2l0YWwgLyBHcmFwaGljcyAvIEZpbG1zXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWl0ZW1zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9kZCBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9CaWdCYW55YW4uanBnXCIgYmdJbWFnZUFsdD1cImJpZyBiYW55YW5cIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvYmlnLWJhbnlhblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5CaWcgQmFueWFuIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5BbiBJdGFsaWFuIHdpbmVtYWtlci4gQSBwYXNzaW9uYXRlIGJyYW5kIHRlYW0uIEFuZCB1cy4gWWVhcnMgb2YgdMOqdGUtw6AtdMOqdGVzIGFuZCByZXNlYXJjaC1kcml2ZW4gaW5zaWdodHMgbGVkIHVzIHRvIHJlY3JlYXRlIHRoZSBwYWNrYWdpbmcgYW5kIGNvbW11bmljYXRpb24gc3RyYXRlZ3kgZm9yIEJpZyBCYW55YW4uIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBldmVuIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL2xhbmdvb3IuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvbGFuZ29vclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5MJ2FuZ29vciA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+V2luZSBjYW4gYmUgZWxlZ2FudC4gV2luZSBjYW4gYmUgc29waGlzdGljYXRlZC4gQnV0IHdpbmUgYW5kIGZ1bj8gSGVyZeKAmXMgaG93IHdlIG1hcnJpZWQg4oCYZnVu4oCZIGFuZCBhIG5ldyBicmFuZCBvZiB3aW5lcyBmcm9tIEJpZyBCYW55YW4sIGtub3duIGZvciBpdHMgcHJlbWl1bSB3aW5lcy48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2RkIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL0VuY2hhbnRldXIuanBnXCIgYmdJbWFnZUFsdD1cImVuY2hhbnRldXJcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9XCJwb3J0Zm9saW8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL2VuY2hhbnRldXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+RW5jaGFudGV1ciA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5JdOKAmXMgRnJlbmNoLCBpdOKAmXMgcm9tYW50aWMgYW5kIGl04oCZcyBzbyB2ZXJ5IGZsb3JhbC4gSG93IGNhbiB3ZSBub3QgZmFsbCBpbiBsb3ZlIHdpdGggRW5jaGFudGV1cj8gV2UgaGF2ZSBLLWRyYW1hIGZhbnMgb24gb3VyIHRlYW0gd2hvIGFic29sdXRlbHkgbG92ZSB0aGlzIGJyYW5kITwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZXZlbiBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9meW5kLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJsYW5nb29yXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPVwicG9ydGZvbGlvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9meW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkZZTkQgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPlNlZWRlZCBpbiB0aGUgaWRlYSBvZiBzZWxmLWV4cHJlc3Npb24sIEZZTkQgaW5zcGlyZWQgdXMgd2l0aCBpdHMgZnVuY3Rpb25hbCBjbG90aGluZyBsaW5lcy4gRnJvbSBzdHJhdGVneSB0byBpZGVudGl0eSBhbmQgYnJhbmQgYXJjaGl0ZWN0dXJlIGRlc2lnbiwgd2UgaGVscGVkIGJyaW5nIHRoaXMgYnJhbmQgdG8gbGlmZS4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9kZCBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vQ2hhbmRyaWthMy5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT17YHBvcnRmb2xpby1pdGVtICR7dGhpcy5zdGF0ZS5pc01vYmlsZT9cIndoaXRlLW1lbnUtYnRuXCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9jaGFuZHJpa2FcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+Q2hhbmRyaWthIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5IZXJl4oCZcyBhIGJyYW5kIHdlIGFsbCBncmV3IHVwIHdpdGguIEFuZCB5ZXQsIGl0IG1hbmFnZWQgdG8gc3VycHJpc2UgdXMgd2l0aCBpdHMgc2VjcmV0cy4gV2Ugc2hhcmVkIHRoZXNlIGxpdHRsZSBudWdnZXRzIHdpdGggdGhlIHdvcmxkIGluIG91ciBjYW1wYWlnbi48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGV2ZW4gbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vU2FudG9vci5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pdGVtIGxhenlsb2FkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvc2FudG9vclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5TYW50b29yIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5XaG8gZG9lc27igJl0IHJlbWVtYmVyIHRoZSBjbGFzc2ljIOKAnG11bW154oCdIGFkcyEgSXQgZ2l2ZXMgdXMgZ3JlYXQgcHJpZGUgdG8gd29yayBvbiBjYW1wYWlnbnMgZm9yIGEgYnJhbmQgdGhhdOKAmXMgYXMgcmVsZXZhbnQgdG9kYXkgYXMgaXQgd2FzIGEgZmV3IGRlY2FkZXMgYWdvLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZGQgbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vVm9pSmVhbnMucG5nXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0gbGF6eWxvYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvdm9pLWplYW5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPlZPSSBKZWFucyA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+VGhlIHZlcnkgaWRlYSBvZiB0aGVzZSBkZW5pbXMgaW5zcGlyZWQgdXMhIFZPSSBoYXMgZXJnb25vbWljYWxseSBlbmdpbmVlcmVkIGRlbmltcyB0aGF0IGNhbGxlZCBmb3IgZWRneSwgZmFzaGlvbiBmb3J3YXJkIGNvbW11bmljYXRpb24uIEFuZCB3ZSByZXZlbGVkIGluIGl0LjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBldmVuIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9JY2VidXJnMS5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT17YHBvcnRmb2xpby1pdGVtICR7dGhpcy5zdGF0ZS5pc01vYmlsZT9cIndoaXRlLW1lbnUtYnRuXCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9pY2VidXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkljZUJ1cmcgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPkludGVuc2UgY3JhdmluZ3MgZm9yIGJ1cmdlcnMgYW5kIHNoYWtlcyBmZWQgb3VyIGJyYWlucyBhcyB3ZSB3b3JrZWQgb24gdGhlIGJyYW5kIGlkZWEgYW5kIGlkZW50aXR5IGZvciB0aGlzIFVLLWJhc2VkIGdvdXJtZXQgYnVyZ2VyIGNoYWluLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZGQgbWlhLWJ5LXRhbmlzaHEgbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vTWlhMS5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT17YHBvcnRmb2xpby1pdGVtICR7dGhpcy5zdGF0ZS5pc01vYmlsZT9cIndoaXRlLW1lbnUtYnRuXCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9taWEtYnktdGFuaXNocVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5NaWEgLSBUYW5pc2hxIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5UaGVzZSBmaWxtcyBhcmUgYSBjb2xsZWN0aW9uIG9mIHN0b3JpZXMgb2YgSW5kaWFuIHdvbWVuIHdobyBpbnNwaXJlIHlvdSB3aXRoIHRoZWlyIHJlc2lsaWVuY2UsIGNoYXJtIHlvdSB3aXRoIHRoZWlyIHByZXNlbmNlIGFuZCBhd2UgeW91IHdpdGggdGhlaXIgYWNoaWV2ZW1lbnRzLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBldmVuIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL0dyYXBoaWNzMS5qcGdcIiBiZ0ltYWdlQWx0PVwiZ3JhcGhpY3NcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9XCJwb3J0Zm9saW8taXRlbSBsYXp5bG9hZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5HcmFwaGljcyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPkEgZGlnaXRhbCBhcnQgcHJvamVjdCB0aGF0IGxlZCB1cyB0byBjcmVhdGUgZWRneSwgbW9kZXJuIGdyYXBoaWNzIGZvciBjbG90aGluZyBhbmQgbWVyY2hhbmRpc2UuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5vLWNzc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbG9yZS1tb3JlIHRleHQtY2VudGVyIHBhZGRlZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJvd3NlXCI+YnJvd3NlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiNC42cmVtXCJ9fT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXhwbG9yZS1hcnJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93IGRpcmVjdGlvbj1cImRvd25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXMgcG9zaXRpb24tcmVsYXRpdmUgcGFkZGVkLWNvbnRlbnQgd2hpdGUtY3Vyc29yIHdoaXRlLWN1cnNvciB3aGl0ZS1tZW51LWJ0blwiIHJlZj17dGhpcy53aGl0ZU1lbnVTZWN0aW9uc1swXX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1oZWFkaW5nIG1vcmUtbGV0dGVyLXNwYWNpbmcgZnV0dXJhLWxpZ2h0IHNsaWdodGx5LWxhcmdlci10ZXh0IHllbGxvdy10ZXh0XCI+U0VSVklDRVM8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWxpc3RzXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNlcnZpY2UtaXRlbXMgbGlzdC1zdHlsZS1ub25lIHdoaXRlLXRleHQgbGFyZ2VyLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ2luc2lnaHRzJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEluc2lnaHRzXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnYnJhbmQtaWRlbnRpdHknIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEJyYW5kIElkZW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdwYWNrYWdpbmcnIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFBhY2thZ2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnYWR2ZXJ0aXNpbmcnIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkdmVydGlzaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdkaWdpdGFsJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBEaWdpdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdkaWdpdGFsJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBHcmFwaGljc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnZmlsbXMnIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEZpbG1zXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2tpbGxzIGxpc3Qtc3R5bGUtbm9uZSBzbGlnaHRseS1sYXJnZXItdGV4dCBmdXR1cmEtbGlnaHQgeWVsbG93LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxsaT5DUkVBVElWRTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+SU5TSUdIVC1EUklWRU48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPkNVTFRVUkFMTFkgUkVMRVZBTlQ8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGRhdGEtc3JjPVwiL2ltYWdlcy9zZXJ2aWNlcy1iZy0yLnBuZ1wiIGNsYXNzTmFtZT1cIndpZHRoLTEwMCBsYXp5bG9hZFwiICBhbHQ9J2hvbWVjb3ZlcicvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LW1vYmlsZSBoaWRlLWRlc2t0b3AgdGV4dC1jZW50ZXJcIiBzdHlsZT17e21hcmdpblRvcDpcIjcuMnJlbVwifX0+XG4gICAgICAgICAgICAgICAgPEFycm93IGRpcmVjdGlvbj1cImRvd25cIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8Q2xpZW50cyAvPlxuICAgICAgICAgICAgPGltZyBkYXRhLXNyYz1cIi9pbWFnZXMvd2F2ZS1ibGFjay5naWZcIiBjbGFzc05hbWU9XCJ3aWR0aC0xMDAgd2F2ZSBsYXp5bG9hZFwiIGFsdD0naG9tZWNvdmVyJyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyF0aGlzLnN0YXRlLmxvYWRpbmdMb2dvUmVhZHkgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxhY2stYmdcIj48L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLndoaXRlLWZhZGV7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwcmVtO1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LDI1NSwyNTUsIDEpKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwyNTUsMjU1LCAxKSk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LDI1NSwyNTUsIDEpKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgd2hpdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFycm93LXJpZ2h0e1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKTtcbiAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucC1pbmZvLXdyYXBwZXI6aG92ZXIgLmFycm93LXJpZ2h0LC5wb3J0Zm9saW8taXRlbTpob3ZlciAuYXJyb3ctcmlnaHR7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDFyZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAud2F2ZXtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgLy8gYm90dG9tOiAtNzglO1xuICAgICAgICAgICAgICBib3R0b206MDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWl0ZW1zIGxpIGF7XG4gICAgICAgICAgICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1pdGVtcyBsaSBhOmhvdmVye1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgY29sb3I6I0Y5RUQzMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWl0ZW1zIGxpOmhvdmVye1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGluc01lZGl1bUl0YWxpYyxzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucC1pbmZvLXdyYXBwZXJ7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1hdDEgLnAtaW5mb3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICBib3R0b206IDdyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuaGVsbG8gLmNoaWxke1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLnN0b3J5dGVsbGVycyAuY2hpbGR7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuZnVsbC1zZXJ2aWNlIC5jaGlsZHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAuYW5pbWF0ZSAubG9va2luZy1mb3IgLmNoaWxke1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5leHBsb3JlLW1vcmV7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTo0LjZyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6OHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWxpc3RzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2UtaXRlbXN7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNi41cmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2tpbGxzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2LjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1pbWFnZXtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogLTUlO1xuICAgICAgICAgICAgICB0b3A6IC0xJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDQ3JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlc3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDojMDAwMDAwO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo4LjhyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjI1cmVtO1xuICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9ydGZvbGlve1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmZmZmY7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOjhyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cmVtO1xuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3J0Zm9saW8taXRlbXN7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxN3JlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTUlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MTUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtcyAucm93IC5ldmVue1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOi04cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby10aXRsZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6NC42cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtLmZvcm1hdDIgLmltYWdlLXdyYXBwZXIgaW1ne1xuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1kZXNjcmlwdGlvbntcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ldmVuIC5mb3JtYXQyIC5wb3J0Zm9saW8taW5mb3tcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtYXQyIC5wb3J0Zm9saW8taW5mb3tcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDozcmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nOjAgNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybWF0MSAucG9ydGZvbGlvLWluZm97XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBib3R0b206IDhyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtYXQxe1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMjUlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ldmVuIC5mb3JtYXQxe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSkgMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1jYXRlZ29yaWVze1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm90dG9tLXRleHR7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNC41cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaG9tZS1kb3duLWFycm93e1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NHJlbTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZsb2F0aW5nO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OjEuNHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuaG9tZS1kb3duLWFycm93e1xuICAgICAgICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZsb2F0aW5nIHtcbiAgICAgICAgICAgICAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsICAwcHgpOyB9XG4gICAgICAgICAgICAgIDY1JSAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxNXB4KTsgfVxuICAgICAgICAgICAgICB0byAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTBweCk7IH0gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3Rvcnl0ZWxsZXJzIHtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS43cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLmxvYWRpbmctd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ke3RoaXMucHJvcHMuY29tbW9uLndpbmRvd0hlaWdodCArIDEwMH1weCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9hZGluZy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvYWRpbmctd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllcigwLjc3LCAwLCAwLjE3NSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxhY2stYmd7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvYWRpbmctd3JhcHBlciBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XG4gICAgICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDU2cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRvcC1zZWN0aW9uLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRvcC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWxsbyB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmMjA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnJlbTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MC44O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZ1bGwtc2VydmljZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0MTQwNDI7O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgdG9wOiAzcmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMy41cmVtO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAzLjVyZW07XG4gICAgICAgICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0IGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3QgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVuZGVybGluZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMC4xcmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMXJlbTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0OmhvdmVyIC51bmRlcmxpbmUsXG4gICAgICAgICAgICAudW5kZXJsaW5lLmV4cGFuZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDZyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnJvd3Nle1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOi0xcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcbiAgICAgICAgICAgICAgLnRleHR7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5oZWxsb3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTZyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmZ1bGwtc2VydmljZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc3Rvcnl0ZWxsZXJze1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjFyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDowO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ib3R0b20tdGV4dHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wb3J0Zm9saW8taXRlbXN7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtcyAucm93IC5ldmVue1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubWlhLWJ5LXRhbmlzaHF7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDotNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VydmljZS1saXN0cyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlLWhlYWRpbmd7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlcnZpY2UtaXRlbXN7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6bm9uZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2tpbGxze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlLWltYWdlIHtcbiAgICAgICAgICAgICAgICAvLyByaWdodDogLTEwJTtcbiAgICAgICAgICAgICAgICAvLyB0b3A6YXV0bztcbiAgICAgICAgICAgICAgICAvLyBib3R0b206IC0xJTtcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogNTclO1xuICAgICAgICAgICAgICAgIC8vIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlc3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo4LjhyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLndoaXRlLWZhZGV7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6M3JlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZnVsbC1zZXJ2aWNle1xuICAgICAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zdG9yeXRlbGxlcnMge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBvcnRmb2xpb3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo0cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsb3JlLW1vcmV7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo0cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsb3JlLWFycm93e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjFyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmJyb3dzZXtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOi0ycmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7IGNvbW1vbiB9KSB7XG4gIHJldHVybiB7XG4gICAgY29tbW9uLFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtvcGVuTWVudSxhZGRDbGFzc1RvQ3Vyc29yLHJlbW92ZUNsYXNzRnJvbUN1cnNvcn0pKEhvbWUpO1xuIl19 */
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

/***/ "lazysizes":
/*!****************************!*\
  !*** external "lazysizes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lazysizes");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fycm93LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2xpZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rlc2t0b3BNZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9hZGluZ0ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB2aW1lby9wbGF5ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsYXp5c2l6ZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXBhcmFsbGF4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiQXJyb3ciLCJwcm9wcyIsImRpcmVjdGlvbiIsIkNsaWVudHMiLCJBTklNQVRJT05fRFVSQVRJT04iLCJEZXNrdG9wTWVudSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImVycm9yIiwic2V0RXJyb3IiLCJtZXNzYWdlVGV4dCIsInNldE1lc3NhZ2VUZXh0IiwibWVzc2FnZVRleHRUb3VjaGVkIiwic2V0TWVzc2FnZVRleHRUb3VjaGVkIiwibWVzc2FnZVRleHRWYWxpZCIsInNldE1lc3NhZ2VUZXh0VmFsaWQiLCJtb3VzZU92ZXJDdXJzb3JFZmZlY3QiLCJhZGRDbGFzc1RvQ3Vyc29yIiwibW91c2VPdXRDdXJzb3JFZmZlY3QiLCJyZW1vdmVDbGFzc0Zyb21DdXJzb3IiLCJkZWJvdW5jZSIsIm1ldGhvZCIsImRlbGF5IiwiY2xlYXJUaW1lb3V0IiwiX3RJZCIsInNldFRpbWVvdXQiLCJkSGFuZGxlU2Nyb2xsIiwid2hpdGUiLCJlbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJib3VuZGluZ1ZhbHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJoZWlnaHQiLCJzZXRNZW51QnRuQ29sb3IiLCJoYW5kbGVTY3JvbGwiLCJtb3VzZU92ZXJXaGl0ZUN1cnNvciIsIm1vdXNlT3V0V2hpdGVDdXJzb3IiLCJtb3VzZU92ZXJCbGFja0N1cnNvciIsImFkZE1vdXNlTGlzdGVuZXJzIiwiZm9yRWFjaCIsImVsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVNb3VzZUxpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRXaGl0ZU1lbnVUcmlnZ2VycyIsInVzZUVmZmVjdCIsIndpbmRvdyIsInNlbmRNZXNzYWdlIiwiZmV0Y2giLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXNzYWdlIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJzdGF0dXMiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJlbWFpbEluU3RyaW5nIiwidGV4dCIsInJlIiwidGVzdCIsInZhbGlkYXRlTWVzc2FnZSIsIm9uTWVzc2FnZUNoYW5nZSIsInR4dCIsImNvbW1vbiIsIndpbmRvd0hlaWdodCIsIm1lbnVPcGVuIiwicGFnZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbm5lY3QiLCJGb290ZXIiLCJidG5Db250ZW50IiwidHlwZSIsIm5vV2F2ZURlc2t0b3AiLCJub1dhdmVNb2JpbGUiLCJDb21wb25lbnQiLCJyZXF1aXJlIiwiTGF5b3V0IiwiY29uc3RydWN0b3IiLCJpbm5lcldpZHRoIiwiTU9CSUxFX0JSRUFLUE9JTlQiLCJzZXRXaW5kb3ciLCJpbm5lckhlaWdodCIsIm1vZGUiLCJzdGF0ZSIsInNldFN0YXRlIiwibW91c2VYIiwibW91c2VZIiwidHJhaWxpbmdYIiwidHJhaWxpbmdZIiwiZGlmZlgiLCJkaWZmWSIsImN1cnNvciIsImN1cnJlbnQiLCJzdHlsZSIsInRyYW5zZm9ybSIsImN1cnNvclRyYWlsaW5nIiwiYW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3ZlQ3Vyc29yIiwiZXZ0IiwiY2xpZW50WCIsImNsaWVudFkiLCJtb3VzZUNpcmNsZUNvbG9yIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJjb21wb25lbnREaWRNb3VudCIsInNldFdpbiIsIm9uTW91c2VNb3ZlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNob3dfZnVsbHNjcmVlbl92aWRlbyIsInZpZGVvIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2aWRlb190eXBlIiwib25jYW5wbGF5IiwicGxheSIsInBsYXllciIsIlBsYXllciIsInJlbmRlciIsInZpZGVvX3NyYyIsIm1lbnVfYnRuX2NvbG9yIiwiaGlkZUZ1bGxzY3JlZW5WaWRlbyIsInN0b3BQcm9wYWdhdGlvbiIsInZpZGVvX2lkIiwiY3Vyc29yQ2xhc3NlcyIsImpvaW4iLCJoaW5kaVRleHQiLCJuYXZQb3NpdGlvbiIsIm5hdlRleHRDb2xvciIsIm1lbnVCdG5Db2xvciIsImNoaWxkcmVuIiwiZm9vdGVyVHlwZSIsIkxvYWRpbmdJY29uIiwic2hvdyIsIndpZHRoIiwid2VpZ2h0IiwiY2VudGVyZWQiLCJjb2xvciIsIk5hdmlnYXRpb24iLCJtZW51QnRuQ2xpY2siLCJ0b2dnbGVNZW51IiwiVmlkZW9FbWJlZCIsImh0bWxfaWQiLCJ2aWRlb2lkIiwibG9vcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJTRU5ER1JJRF9BUElfS0VZIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwicm91dGVyIiwiaHJlZiIsImV2ZW50Iiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJoYXNXYXJuZWQiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEhyZWYiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJ3YXJuIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJMaW5rIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJ1cGRhdGUiLCJtb2QiLCJkYXRhIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwib3B0aW9ucyIsInByZXBhcmVVcmxBcyIsImNoYW5nZSIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYXJzZWQiLCJ0cnlQYXJzZVJlbGF0aXZlVXJsIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIlByb21pc2UiLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImVuY29kZVVSSUNvbXBvbmVudCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsInNlYXJjaFBhcmFtcyIsIkFycmF5IiwiaXRlbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJrZXkiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJIb21lIiwicG9zaXRpb25JbWFnZSIsImlzTW9iaWxlIiwidW5kZXJsaW5lRXhwYW5kIiwiYmFja2dyb3VuZFN0eWxlcyIsImxlZnQiLCJiYWNrZ3JvdW5kUmVhZHkiLCJiYWNrZ3JvdW5kU2hvdyIsImxvYWRpbmdMb2dvUmVhZHkiLCJhbmltYXRlIiwiYmFja2dyb3VuZEltYWdlIiwicmVsbGF4UmVmIiwibm90UGVyZm9ybWVkQW5pbWF0aW9uIiwid2hpdGVNZW51U2VjdGlvbnMiLCJib3R0b20iLCJvcGVuTWVudSIsImhhbmRsZVJlc2l6ZSIsImxvYWRpbmdMb2dvIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJpbWciLCJzY2hlbWFEYXRhIiwiX19odG1sIiwiZmlsdGVyIiwibWFyZ2luVG9wIiwiU0VUX1dJTkRPVyIsIlRPR0dMRV9NRU5VIiwiT1BFTl9NRU5VIiwiQUREX0NMQVNTX1RPX0NVUlNPUiIsIlJFTU9WRV9DTEFTU19GUk9NX0NVUlNPUiIsIkhJREVfRlVMTF9TQ1JFRU5fVklERU8iLCJTSE9XX0ZVTExfU0NSRUVOX1ZJREVPIiwiU0VUX01FTlVfQlROX0NPTE9SIiwic2hvd0Z1bGxzY3JlZW5WaWRlbyIsIndpbmRvd1dpZHRoIiwiYm9vbCIsImNscyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWUsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXFCO0FBQ2hDLFNBQ0ksbUVBQ0E7QUFBQSx3Q0FBaUIsV0FBVUEsS0FBSyxDQUFDQyxTQUFVLEVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFB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MEJ1WixHQUExQixFQUE4QjtBQUNqQyxTQUFPO0FBQ0huVixRQUFJLEVBQUMyVSxtQkFERjtBQUVIUTtBQUZHLEdBQVA7QUFJSDtBQUNNLFNBQVNuWSxlQUFULENBQXlCcUgsS0FBekIsRUFBK0I7QUFDbEMsU0FBTztBQUNIckUsUUFBSSxFQUFDK1Usa0JBREY7QUFFSDFRO0FBRkcsR0FBUDtBQUlIO0FBQ00sU0FBU3ZJLHFCQUFULENBQStCcVosR0FBL0IsRUFBbUM7QUFDdEMsU0FBTztBQUNIblYsUUFBSSxFQUFDNFUsd0JBREY7QUFFSE87QUFGRyxHQUFQO0FBSUgsQzs7Ozs7Ozs7Ozs7QUN4REQsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFycm93KHByb3BzKXtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvaW50ZXIgJHtwcm9wcy5kaXJlY3Rpb259YH0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYXJyb3cuc3ZnXCIgY2xhc3NOYW1lPVwiYXJyb3ctaW1hZ2VcImFsdD0naW1hZ2UnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuYXJyb3ctaW1hZ2V7XG4gICAgICAgICAgICAgICAgd2lkdGg6Mi44cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvaW50ZXIubGVmdHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDE4MGRlZykgdHJhbnNsYXRlWSgtMTVweClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb2ludGVyLmRvd257XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb2ludGVye1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn0iLCJpbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJ3JlYWN0LWFuaW1hdGUtb24tc2Nyb2xsJztcbmltcG9ydCB7QU5JTUFUSU9OX0RVUkFUSU9OfSBmcm9tICcuLi9jb25maWcnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGllbnRzKCl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnRzIHBhZGRlZC1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudHMtaGVhZGluZyBtb3JlLWxldHRlci1zcGFjaW5nIGZ1dHVyYS1saWdodCBzbGlnaHRseS1sYXJnZXItdGV4dFwiPlRPUCBDTElFTlRTPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudC1saXN0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJzY3JvbGxGYWRlSW5cIiBkdXJhdGlvbj17QU5JTUFUSU9OX0RVUkFUSU9OfSBhbmltYXRlT25jZT17dHJ1ZX0gZGVsYXk9ezB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NsaWVudHMvYmlnYmFueWFuLnBuZ1wiYWx0PSdpbWFnZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJzY3JvbGxGYWRlSW5cIiBkdXJhdGlvbj17QU5JTUFUSU9OX0RVUkFUSU9OfSBhbmltYXRlT25jZT17dHJ1ZX0gZGVsYXk9ezEwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY2xpZW50cy9meW5kLnBuZ1wiYWx0PSdpbWFnZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJzY3JvbGxGYWRlSW5cIiBkdXJhdGlvbj17QU5JTUFUSU9OX0RVUkFUSU9OfSBhbmltYXRlT25jZT17dHJ1ZX0gZGVsYXk9ezIwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY2xpZW50cy9jZWxsd29ya3MucG5nXCJhbHQ9J2ltYWdlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cInNjcm9sbEZhZGVJblwiIGR1cmF0aW9uPXtBTklNQVRJT05fRFVSQVRJT059IGFuaW1hdGVPbmNlPXt0cnVlfSBkZWxheT17MzAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jbGllbnRzL3RhbmlzaHEucG5nXCJhbHQ9J2ltYWdlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cInNjcm9sbEZhZGVJblwiIGR1cmF0aW9uPXtBTklNQVRJT05fRFVSQVRJT059IGFuaW1hdGVPbmNlPXt0cnVlfSBkZWxheT17NDAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jbGllbnRzL2NoYW5kcmlrYS5wbmdcImFsdD0naW1hZ2UnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwic2Nyb2xsRmFkZUluXCIgZHVyYXRpb249e0FOSU1BVElPTl9EVVJBVElPTn0gYW5pbWF0ZU9uY2U9e3RydWV9IGRlbGF5PXs1MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NsaWVudHMvbGFuZ29vci5wbmdcImFsdD0naW1hZ2UnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwic2Nyb2xsRmFkZUluXCIgZHVyYXRpb249e0FOSU1BVElPTl9EVVJBVElPTn0gYW5pbWF0ZU9uY2U9e3RydWV9IGRlbGF5PXs2MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NsaWVudHMvaWNlYnVyZy5wbmdcImFsdD0naW1hZ2UnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwic2Nyb2xsRmFkZUluXCIgZHVyYXRpb249e0FOSU1BVElPTl9EVVJBVElPTn0gYW5pbWF0ZU9uY2U9e3RydWV9IGRlbGF5PXs3MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NsaWVudHMvZW5jaGFudGV1ci5wbmdcImFsdD0naW1hZ2UnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwic2Nyb2xsRmFkZUluXCIgZHVyYXRpb249e0FOSU1BVElPTl9EVVJBVElPTn0gYW5pbWF0ZU9uY2U9e3RydWV9IGRlbGF5PXs4MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NsaWVudHMvc2FudG9vci5wbmdcIiBhbHQ9J2ltYWdlJy8+XG4gICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwic2Nyb2xsRmFkZUluXCIgZHVyYXRpb249e0FOSU1BVElPTl9EVVJBVElPTn0gYW5pbWF0ZU9uY2U9e3RydWV9IGRlbGF5PXs4MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NsaWVudHMva2F5YWwucG5nXCIgYWx0PSdpbWFnZScvPlxuICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNsaWVudHN7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6NXJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbToxMHJlbTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xpZW50LWxpc3R7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6NXJlbTtcbiAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWZsb3c6cm93IHdyYXA7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDo1JTtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDo1JTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jbGllbnR7XG4gICAgICAgICAgICAgIHdpZHRoOjIwJTtcbiAgICAgICAgICAgICAgcGFkZGluZzowIDIuNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xpZW50IGltZ3tcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XG4gICAgICAgICAgICAgICAgLmNsaWVudHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY2xpZW50cyB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY2xpZW50cy1oZWFkaW5ne1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNsaWVudC1saXN0e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApXG59IiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBBcnJvdyBmcm9tICcuLi9jb21wb25lbnRzL2Fycm93J1xuaW1wb3J0IExvYWRpbmdJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZGluZ0ljb24nXG5pbXBvcnQge3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge2FkZENsYXNzVG9DdXJzb3IscmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yLHNldE1lbnVCdG5Db2xvcn0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcbmZ1bmN0aW9uIERlc2t0b3BNZW51KHByb3BzKXtcbiAgICB2YXIgW2xvYWRpbmcsc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICB2YXIgW3N1Y2Nlc3Msc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICB2YXIgW2Vycm9yLHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIHZhciBbbWVzc2FnZVRleHQsc2V0TWVzc2FnZVRleHRdID0gdXNlU3RhdGUoXCJcIilcbiAgICB2YXIgW21lc3NhZ2VUZXh0VG91Y2hlZCxzZXRNZXNzYWdlVGV4dFRvdWNoZWRdID0gdXNlU3RhdGUoXCJcIilcbiAgICB2YXIgW21lc3NhZ2VUZXh0VmFsaWQsc2V0TWVzc2FnZVRleHRWYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBmdW5jdGlvbiBtb3VzZU92ZXJDdXJzb3JFZmZlY3QoKXtcbiAgICAgICAgcHJvcHMuYWRkQ2xhc3NUb0N1cnNvcihcImxhcmdlclwiKVxuICAgIH1cbiAgICBmdW5jdGlvbiBtb3VzZU91dEN1cnNvckVmZmVjdCgpe1xuICAgICAgICBwcm9wcy5yZW1vdmVDbGFzc0Zyb21DdXJzb3IoXCJsYXJnZXJcIilcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVib3VuY2UobWV0aG9kLCBkZWxheSkge1xuICAgICAgICBjbGVhclRpbWVvdXQobWV0aG9kLl90SWQpO1xuICAgICAgICBtZXRob2QuX3RJZD0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgbWV0aG9kKCk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZEhhbmRsZVNjcm9sbCgpe1xuICAgICAgICBsZXQgd2hpdGUgPSBmYWxzZVxuICAgICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2hpdGUtbWVudS1idG4nKVxuICAgICAgICBmb3IobGV0IGk9MDtpPGVsZW1lbnRzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgbGV0IGJvdW5kaW5nVmFscyA9IGVsZW1lbnRzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBpZihib3VuZGluZ1ZhbHMudG9wIDwgMCAmJiAoYm91bmRpbmdWYWxzLnRvcCAqIC0xIDwgYm91bmRpbmdWYWxzLmhlaWdodCkpe1xuICAgICAgICAgICAgICAgIHdoaXRlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aGl0ZSA9IGZhbHNlICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHdoaXRlKVxuICAgICAgICAgICAgcHJvcHMuc2V0TWVudUJ0bkNvbG9yKFwid2hpdGVcIilcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcHJvcHMuc2V0TWVudUJ0bkNvbG9yKFwiYmxhY2tcIilcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCl7XG4gICAgICAgIC8vIGRlYm91bmNlKGRIYW5kbGVTY3JvbGwsIDUwKTtcbiAgICAgICAgLy8gZEhhbmRsZVNjcm9sbCgpXG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vdXNlT3ZlcldoaXRlQ3Vyc29yKCl7XG4gICAgICAgIHByb3BzLmFkZENsYXNzVG9DdXJzb3IoXCJ3aGl0ZVwiKVxuICAgIH1cbiAgICBmdW5jdGlvbiBtb3VzZU91dFdoaXRlQ3Vyc29yKCl7XG4gICAgICAgIHByb3BzLnJlbW92ZUNsYXNzRnJvbUN1cnNvcihcIndoaXRlXCIpXG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vdXNlT3ZlckJsYWNrQ3Vyc29yKCl7XG4gICAgICAgIHByb3BzLnJlbW92ZUNsYXNzRnJvbUN1cnNvcihcIndoaXRlXCIpXG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZE1vdXNlTGlzdGVuZXJzKCl7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2hpdGUtY3Vyc29yJykuZm9yRWFjaChlbGU9PntcbiAgICAgICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIixtb3VzZU92ZXJXaGl0ZUN1cnNvcilcbiAgICAgICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIixtb3VzZU91dFdoaXRlQ3Vyc29yKVxuICAgICAgfSlcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibGFjay1jdXJzb3InKS5mb3JFYWNoKGVsZT0+e1xuICAgICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIixtb3VzZU92ZXJCbGFja0N1cnNvcilcbiAgICAgIH0pXG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZU1vdXNlTGlzdGVuZXJzKCl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aGl0ZS1jdXJzb3InKS5mb3JFYWNoKGVsZT0+e1xuICAgICAgICAgICAgZWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsbW91c2VPdmVyV2hpdGVDdXJzb3IpXG4gICAgICAgICAgICBlbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIixtb3VzZU91dFdoaXRlQ3Vyc29yKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRXaGl0ZU1lbnVUcmlnZ2Vycygpe1xuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2hpdGUtbWVudS1idG4nKS5mb3JFYWNoKGVsZT0+e1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZWxlKVxuICAgICAgICAvLyB9KVxuICAgIH1cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgLy8gc2V0V2hpdGVNZW51VHJpZ2dlcnMoKVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBkSGFuZGxlU2Nyb2xsKVxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBhZGRNb3VzZUxpc3RlbmVycygpXG4gICAgICAgIH0sNTAwMClcbiAgICAgICAgcmV0dXJuICgpPT57XG4gICAgICAgICAgICByZW1vdmVNb3VzZUxpc3RlbmVycygpXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBkSGFuZGxlU2Nyb2xsKVxuICAgICAgICB9XG4gICAgfSwgW10pXG4gICAgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoKXtcbiAgICAgICAgaWYobWVzc2FnZVRleHRWYWxpZCl7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgICAgICBmZXRjaChgL2FwaS9tYWlsYCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe21lc3NhZ2U6bWVzc2FnZVRleHR9KSBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXM9PnJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQ9PntcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQuc3RhdHVzID09IFwic3VjY2Vzc1wiKVxuICAgICAgICAgICAgICAgICAgICBzZXRTdWNjZXNzKHRydWUpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcih0cnVlKVxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICB9KS5jYXRjaChlcnI9PntcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IodHJ1ZSlcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgfSkgXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZW1haWxJblN0cmluZyh0ZXh0KSB7IFxuICAgICAgICB2YXIgcmUgPSAvKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkvO1xuICAgICAgICByZXR1cm4gcmUudGVzdCh0ZXh0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdmFsaWRhdGVNZXNzYWdlKCl7XG4gICAgICAgIGlmKCFlbWFpbEluU3RyaW5nKG1lc3NhZ2VUZXh0KSlcbiAgICAgICAgICAgIHNldE1lc3NhZ2VUZXh0VmFsaWQoZmFsc2UpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHNldE1lc3NhZ2VUZXh0VmFsaWQodHJ1ZSkgXG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uTWVzc2FnZUNoYW5nZSh0eHQpe1xuICAgICAgICBzZXRNZXNzYWdlVGV4dFRvdWNoZWQodHJ1ZSlcbiAgICAgICAgc2V0TWVzc2FnZVRleHQodHh0KVxuICAgICAgICB2YWxpZGF0ZU1lc3NhZ2UoKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGRlc2t0b3AtbWVudSB3aGl0ZS1jdXJzb3IgJHtwcm9wcy5jb21tb24ubWVudU9wZW4/XCJzaG93XCI6XCJcIn1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wxXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sMS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtbG9nbyBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9NZW51TG9nby5zdmdcImFsdD0naW1hZ2UnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wcG9zYWJsZSBUaHVtYnM8YnIvPiBJbmRlcGVuZGVudCBBZ2VuY3lcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodHMgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGwgUmlnaHRzIFJlc2VydmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1oZWFkaW5nIGZ1dHVyYS1saWdodCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5NRU5VPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudSBwb3BwaW5zLXJlZ3VsYXIgbGFyZ2VyLWN1cnNvciBsaXN0LXN0eWxlLW5vbmUgbGFyZ2VyLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+PExpbmsgaHJlZj1cIi9cIj48YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdi10ZXh0IGxhcmdlci1jdXJzb3IgJHtwcm9wcy5wYWdlPT1cImhvbWVcIj9cImN1cnJlbnRcIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFcIj5Ib21lPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYlwiPkhvbWU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+PExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPjxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2LXRleHQgbGFyZ2VyLWN1cnNvciAke3Byb3BzLnBhZ2U9PVwicHJvamVjdHNcIj9cImN1cnJlbnRcIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFcIj5Qcm9qZWN0czwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJcIj5Qcm9qZWN0czwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj48TGluayBocmVmPVwiL2Fib3V0XCI+PGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXYtdGV4dCBsYXJnZXItY3Vyc29yICR7cHJvcHMucGFnZT09XCJhYm91dFwiP1wiY3VycmVudFwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYVwiPkFib3V0PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYlwiPkFib3V0PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPjxMaW5rIGhyZWY9XCIvc2VydmljZXNcIj48YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdi10ZXh0IGxhcmdlci1jdXJzb3IgJHtwcm9wcy5wYWdlPT1cInNlcnZpY2VzXCI/XCJjdXJyZW50XCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhXCI+U2VydmljZXM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiXCI+U2VydmljZXM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+PExpbmsgaHJlZj1cIi9jb250YWN0XCI+PGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXYtdGV4dCBsYXJnZXItY3Vyc29yICR7cHJvcHMucGFnZT09XCJjb250YWN0XCI/XCJjdXJyZW50XCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhXCI+Q29udGFjdDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJcIj5Db250YWN0PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPjxMaW5rIGhyZWY9XCIvYmxvZ1wiPjxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2LXRleHQgbGFyZ2VyLWN1cnNvciAke3Byb3BzLnBhZ2U9PVwiYmxvZ1wiP1wiY3VycmVudFwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYVwiPkJsb2c8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiXCI+QmxvZzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzdWNjZXNzP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGFuayB5b3UgZm9yIHlvdXIgbWVzc2FnZS4gV2Ugd2lsbCBiZSBpbiB0b3VjaCBzb29uITwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlciBjaGlsZCBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e21lc3NhZ2VUZXh0fSBvbkNoYW5nZT17KGUpPT5vbk1lc3NhZ2VDaGFuZ2UoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIlNlbmQgYSBNZXNzYWdlXCIgY2xhc3NOYW1lPVwiY29udGFjdC1pbnB1dCB1bmRlcmxpbmVkLXdoaXRlLWlucHV0IHdpZHRoLTEwMFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1hcnJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ0ljb24gc2hvdz1cInRydWVcIiB3aWR0aD1cIjIuNXJlbVwiIGhlaWdodD1cIjIuNXJlbVwiIHdlaWdodD1cInRoaW5cIiBjZW50ZXJlZD1cInRydWVcIiBjb2xvcj1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpPT5zZW5kTWVzc2FnZSgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvdyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHshbWVzc2FnZVRleHRWYWxpZCAmJiBtZXNzYWdlVGV4dFRvdWNoZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItbXNnXCI+TWVzc2FnZSBzaG91bGQgY29udGFpbiBhbiBlbWFpbCBhZGRyZXNzLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tc2dcIj5UaGVyZSB3YXMgYW4gdW5leHBlY3RlZCBlcnJvciBzZW5kaW5nIHlvdXIgbWVzc2FnZS48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmd1YWdlXCI+TGFuZ3VhZ2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzcy10aXRsZSBzbGlnaHRseS1sYXJnZXItdGV4dFwiPk9wcG9zYWJsZSBUaHVtYnM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZHJlc3MtdGV4dCBmdXR1cmEtYm9va1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdXJyZW50bHkgd29ya2luZyBvdXQgb2YgbGl2aW5nIHJvb21zIGFjcm9zcyBJbmRpYS48YnIgLz4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdl4oCZbGwgdXBkYXRlIG91ciBvZmZpY2UgYWRkcmVzcyB3aGVuIHRoZSB3b3JsZOKAmXMgYSB0YWQgc2FmZXIgdG8gbGl2ZSBpbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuZXJyb3ItbXNne1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0LWlucHV0e1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDozLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdC1hcnJvd3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWRkcmVzcy10ZXh0e1xuICAgICAgICAgICAgICAgIGNvbG9yOiNhMGEwYTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWRkcmVzc3tcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjZyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGFuZ3VhZ2V7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnNSZWd1bGFyLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1LjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmFtZXtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyLjJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlnaHRze1xuICAgICAgICAgICAgICAgIGNvbG9yOiM5Njk5OUM7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51e1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6My40cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUtaGVhZGluZ3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MS40cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgbGl7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDU0MGRlZyk7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwMG1zLCBvcGFjaXR5IDUwMG1zO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6LjNzO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNob3cgLm1lbnUgbGl7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgbGkgYXtcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmZmZmO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNC45cmVtO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2LXRleHQgLmJ7XG4gICAgICAgICAgICAgICAgY29sb3I6I0Y5RUQzMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYtdGV4dHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS4ycyBjdWJpYy1iZXppZXIoLjE5LDEsLjIyLDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdi10ZXh0LmN1cnJlbnR7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IGxpIGE6aG92ZXIgc3BhbntcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwNSUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgbGkgYTpob3ZlcntcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb2wxe1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGluc1JlZ3VsYXIsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEuNHJlbTtcbiAgICAgICAgICAgICAgICAvLyBmb250LWZhbWlseTogTmV1ZnJlaXQsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgLy9mb250LWZhbWlseTogRnV0dXJhTGlnaHQsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgLy9mb250LWZhbWlseTogRnV0dXJhQm9vaywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBGdXR1cmFNREJULCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbDEtY29udGVudHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOmF1dG87XG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVza3RvcC1tZW51e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgei1pbmRleDo5OTY7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojMDAwMDAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDowO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCA2MDBtcztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZmZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXNrdG9wLW1lbnUuc2hvd3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6JHtwcm9wcy5jb21tb24ud2luZG93SGVpZ2h0fXB4O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OnNjcm9sbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250ZW50LXdyYXBwZXJ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjE0LjRyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2hpbGR7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaG93IC5jaGlsZHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29sMXtcbiAgICAgICAgICAgICAgICB3aWR0aDozMi43JTtcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb2wye1xuICAgICAgICAgICAgICAgIHdpZHRoOjM1LjY1JTtcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb2wze1xuICAgICAgICAgICAgICAgIHdpZHRoOjEyLjklO1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gLnVuZGVybGluZWQtd2hpdGUtaW5wdXR7XG4gICAgICAgICAgICAvLyAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpe1xuICAgICAgICAgICAgICAgIC5tZW51IGxpIGE6aG92ZXIgLm5hdi10ZXh0e1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVyZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XG4gICAgICAgICAgICAgICAgLmVycm9yLW1zZ3tcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb250ZW50LXdyYXBwZXJ7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzpjb2x1bW4gbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo4cmVtO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6NSU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6NSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb2wxe1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICBvcmRlcjozO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29sMntcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6MTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb2wze1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICBvcmRlcjoyO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDozcmVtO1xuICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICAgICAubWVudS1sb2dvLC5uYW1le1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbDEtY29udGVudHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJpZ2h0c3tcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYWRkcmVzc3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDozcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29sMyAuaW5wdXQtd3JhcHBlcntcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOmF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb2wzIC51bmRlcmxpbmVkLXdoaXRlLWlucHV0e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHtjb21tb259KXtcbiAgICByZXR1cm4ge2NvbW1vbn1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLHthZGRDbGFzc1RvQ3Vyc29yLHJlbW92ZUNsYXNzRnJvbUN1cnNvcixzZXRNZW51QnRuQ29sb3J9KShEZXNrdG9wTWVudSkiLCJpbXBvcnQgTG9hZGluZ0ljb24gZnJvbSAnLi9sb2FkaW5nSWNvbidcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKHByb3BzKXtcbiAgICB2YXIgW2xvYWRpbmcsc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICB2YXIgW3N1Y2Nlc3Msc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICB2YXIgW2Vycm9yLHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIHZhciBbbWVzc2FnZVRleHQsc2V0TWVzc2FnZVRleHRdID0gdXNlU3RhdGUoXCJcIilcbiAgICB2YXIgW21lc3NhZ2VUZXh0VG91Y2hlZCxzZXRNZXNzYWdlVGV4dFRvdWNoZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgdmFyIFttZXNzYWdlVGV4dFZhbGlkLHNldE1lc3NhZ2VUZXh0VmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgYnRuQ29udGVudCA9IGxvYWRpbmc/PExvYWRpbmdJY29uIHNob3c9XCJ0cnVlXCIgd2lkdGg9XCIzcmVtXCIgaGVpZ2h0PVwiM3JlbVwiIHdlaWdodD1cInRoaW5cIiBjZW50ZXJlZD1cInRydWVcIiBjb2xvcj17YCR7cHJvcHMudHlwZT09XCJ5ZWxsb3dcIj9cIndoaXRlXCI6XCJibGFja1wifWB9IC8+OlwiU0VORFwiXG4gICAgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoKXtcbiAgICAgICAgaWYobWVzc2FnZVRleHRWYWxpZCl7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgICAgICBmZXRjaChgL2FwaS9tYWlsYCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe21lc3NhZ2U6bWVzc2FnZVRleHR9KSBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXM9PnJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQ9PntcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQuc3RhdHVzID09IFwic3VjY2Vzc1wiKVxuICAgICAgICAgICAgICAgICAgICBzZXRTdWNjZXNzKHRydWUpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcih0cnVlKVxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICB9KS5jYXRjaChlcnI9PntcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IodHJ1ZSlcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgfSkgXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZW1haWxJblN0cmluZyh0ZXh0KSB7IFxuICAgICAgICB2YXIgcmUgPSAvKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkvO1xuICAgICAgICByZXR1cm4gcmUudGVzdCh0ZXh0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdmFsaWRhdGVNZXNzYWdlKCl7XG4gICAgICAgIGlmKCFlbWFpbEluU3RyaW5nKG1lc3NhZ2VUZXh0KSlcbiAgICAgICAgICAgIHNldE1lc3NhZ2VUZXh0VmFsaWQoZmFsc2UpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHNldE1lc3NhZ2VUZXh0VmFsaWQodHJ1ZSkgXG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uTWVzc2FnZUNoYW5nZSh0eHQpe1xuICAgICAgICBzZXRNZXNzYWdlVGV4dCh0eHQpXG4gICAgICAgIHNldE1lc3NhZ2VUZXh0VG91Y2hlZCh0cnVlKVxuICAgICAgICB2YWxpZGF0ZU1lc3NhZ2UoKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2BwYWRkZWQtY29udGVudCAke3Byb3BzLnR5cGU9PVwieWVsbG93XCI/XCJ5ZWxsb3dcIjpcImJsYWNrIHdoaXRlLW1lbnUtYnRuIHdoaXRlLWN1cnNvclwifSAke3Byb3BzLm5vV2F2ZURlc2t0b3A/XCJuby13YXZlLWRlc2t0b3BcIjpcIlwifSAke3Byb3BzLm5vV2F2ZU1vYmlsZT9cIm5vLXdhdmUtbW9iaWxlXCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbCBsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzLWhlYWRpbmcgYmlnZ2VyLWNhc2xvbi1sZXR0ZXItc3BhY2luZ1wiPkFkZHJlc3M8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzLXRpdGxlIHNsaWdodGx5LWxhcmdlci10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcHBvc2FibGUgVGh1bWJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZHIgZnV0dXJhLWJvb2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbnRseSB3b3JraW5nIG91dCBvZiBsaXZpbmcgcm9vbXMgYWNyb3NzIEluZGlhLjxiciBjbGFzc05hbWU9XCJoaWRlLWRlc2t0b3Agc2hvdy1tb2JpbGVcIiAvPiBXZeKAmWxsIHVwZGF0ZSBvdXIgb2ZmaWNlIGFkZHJlc3Mgd2hlbiB0aGUgd29ybGTigJlzIDxiciBjbGFzc05hbWU9XCJoaWRlLWRlc2t0b3Agc2hvdy1tb2JpbGVcIiAvPmEgdGFkIHNhZmVyIHRvIGxpdmUgaW4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJnb29nbGUtbWFwLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+R29vZ2xlIE1hcDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1haWxcIj5pbmZvQG9wcG9zYWJsZXRodW1icy5pbjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb2wgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1yaWdodC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VjY2Vzcz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoYW5rIHlvdSBmb3IgeW91ciBtZXNzYWdlLiBXZSB3aWxsIGJlIGluIHRvdWNoIHNvb24hPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy50eXBlPT1cInllbGxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e21lc3NhZ2VUZXh0fSBvbkNoYW5nZT17KGUpPT5vbk1lc3NhZ2VDaGFuZ2UoZS50YXJnZXQudmFsdWUpfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiIGNsYXNzTmFtZT1cInVuZGVybGluZWQtYmxhY2staW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e21lc3NhZ2VUZXh0fSBvbkNoYW5nZT17KGUpPT5vbk1lc3NhZ2VDaGFuZ2UoZS50YXJnZXQudmFsdWUpfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiIGNsYXNzTmFtZT1cInVuZGVybGluZWQtd2hpdGUtaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17YGJ0biBidG4td2hpdGUgYnRuLXNlbmQgJHtwcm9wcy50eXBlPT1cInllbGxvd1wiP1wiYnRuLWJsYWNrXCI6XCJidG4td2hpdGVcIn1gfSBvbkNsaWNrPXsoKT0+c2VuZE1lc3NhZ2UoKX0+e2J0bkNvbnRlbnR9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFtZXNzYWdlVGV4dFZhbGlkICYmIG1lc3NhZ2VUZXh0VG91Y2hlZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLW1zZ1wiPk1lc3NhZ2Ugc2hvdWxkIGNvbnRhaW4gYW4gZW1haWwgYWRkcmVzcy48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItbXNnXCI+VGhlcmUgd2FzIGFuIHVuZXhwZWN0ZWQgZXJyb3Igc2VuZGluZyB5b3VyIG1lc3NhZ2UuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbCBzbGlnaHRseS1sYXJnZXItdGV4dCBmdXR1cmEtbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vb3Bwb3NhYmxlX3RodW1ic19vZmZpY2lhbC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5JTlNUQUdSQU08L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9vcHBvc2FibGUtdGh1bWJzLWJiMWE5YTFiNC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5MSU5LRURJTjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL29wcG9zYWJsZS50aHVtYnMuNzUwXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RkFDRUJPT0s8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vdmltZW8uY29tL3VzZXI5NzczNTIzN1wiIHRhcmdldD1cIl9ibGFua1wiPlZJTUVPPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5lcnJvci1tc2d7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNvY2lhbCBhe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjppbmhlcml0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc29jaWFsIGE6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOmluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudW5kZXJsaW5lZC13aGl0ZS1pbnB1dCwudW5kZXJsaW5lZC1ibGFjay1pbnB1dHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MzVyZW07XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuNzVyZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGFjdC1mb3Jte1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRhY3QtZm9ybSAudW5kZXJsaW5lZC13aGl0ZS1pbnB1dCwuY29udGFjdC1mb3JtIC51bmRlcmxpbmVkLWJsYWNrLWlucHV0e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNvY2lhbHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTByZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zb2NpYWwgdWwgbGkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6NC4yNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc29jaWFsIHVsIGxpOm5vdCg6bGFzdC1jaGlsZCl7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNvY2lhbCB1bHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmdvb2dsZS1tYXAtbGluayBhe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjppbmhlcml0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIueWVsbG93IC5hZGRyZXNzLWhlYWRpbmd7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiMwMTAxMDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3Rlci5ibGFjayAuYWRkcmVzcy1oZWFkaW5ne1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjojZmZmZmZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYWRkcmVzc3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo0LjFyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3Rlci5ibGFja3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZmZmZjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojMDAwMDAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIueWVsbG93e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjojMDAwMDAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmZmMjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlcntcbiAgICAgICAgICAgICAgICAgICAgLy8gcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJvdHRvbTowO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICAvL3otaW5kZXg6MTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6NHJlbTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206NXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmVtYWlse1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjUuMnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZvb3Rlci1jb2wubGVmdHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZm9vdGVyLWNvbC5yaWdodHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZvb3Rlci1yaWdodC13cmFwe1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3Rlci5uby13YXZlLWRlc2t0b3B7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjEwcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI2MHB4KXtcbiAgICAgICAgICAgICAgICAgICAgLnNvY2lhbCB1bCBsaTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDozcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5idG4tc2VuZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZXJyb3ItbXNne1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhY3QtZm9ybSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjEwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYnRuLXNlbmR7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNvY2lhbHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6OXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zb2NpYWwgdWwgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo2LjRyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci1jb2wucmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLWNvbC5sZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDowO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXItcmlnaHQtd3JhcHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZXJyb3ItbXNne1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn0iLCJjb25zdCB7IENvbXBvbmVudCB9ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7c2V0V2luZG93LGFkZENsYXNzVG9DdXJzb3IscmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yLGhpZGVGdWxsc2NyZWVuVmlkZW99IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24nXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuaW1wb3J0IERlc2t0b3BNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvZGVza3RvcE1lbnUnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQge01PQklMRV9CUkVBS1BPSU5UfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgVmlkZW8gZnJvbSAnLi4vY29tcG9uZW50cy92aWRlbydcbmltcG9ydCBQbGF5ZXIgZnJvbSAnQHZpbWVvL3BsYXllcidcbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbW91c2VYOiAwLFxuICAgICAgICAgICAgbW91c2VZOiAwLFxuICAgICAgICAgICAgdHJhaWxpbmdYOiAwLFxuICAgICAgICAgICAgdHJhaWxpbmdZOiAwLFxuICAgICAgICAgICAgbW9kZTpcImxhbmRzY2FwZVwiLFxuICAgICAgICAgICAgbW91c2VDaXJjbGVDb2xvcjpcImJsYWNrXCJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnNvciA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICB0aGlzLmN1cnNvclRyYWlsaW5nID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuICAgIH1cbiAgICBzZXRXaW4gPSAoKT0+e1xuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IE1PQklMRV9CUkVBS1BPSU5UKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRXaW5kb3cod2luZG93LmlubmVyV2lkdGgsd2luZG93LmlubmVySGVpZ2h0KVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgbGV0IG1vZGUgPSB3aW5kb3cuaW5uZXJXaWR0aDx3aW5kb3cuaW5uZXJIZWlnaHQ/XCJwb3J0cmFpdFwiOlwibGFuZHNjYXBlXCJcbiAgICAgICAgICAgIGlmKG1vZGUhPXRoaXMuc3RhdGUubW9kZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRXaW5kb3cod2luZG93LmlubmVyV2lkdGgsd2luZG93LmlubmVySGVpZ2h0KVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGV9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG1vdmVDdXJzb3IgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbW91c2VYLCBtb3VzZVksIHRyYWlsaW5nWCwgdHJhaWxpbmdZIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBkaWZmWCA9IG1vdXNlWCAtIHRyYWlsaW5nWDtcbiAgICAgICAgY29uc3QgZGlmZlkgPSBtb3VzZVkgLSB0cmFpbGluZ1k7XG4gICAgICAgIC8vICBOdW1iZXIgaW4gZXhwcmVzc2lvbiBpcyBjb2VmaWNpZW50IG9mIHRoZSBkZWxheS4gMTAgZm9yIGV4YW1wbGUuIFlvdSBjYW4gcGxheSB3aXRoIGl0LiBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdHJhaWxpbmdYOiB0cmFpbGluZ1ggKyBkaWZmWCAvIDUsXG4gICAgICAgICAgdHJhaWxpbmdZOiB0cmFpbGluZ1kgKyBkaWZmWSAvIDUsXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgLy8gVXNpbmcgcmVmcyBhbmQgdHJhbnNmb3JtIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UuXG4gICAgICAgICAgdGhpcy5jdXJzb3IuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHttb3VzZVh9cHgsICR7bW91c2VZfXB4LCAwKWA7XG4gICAgICAgICAgdGhpcy5jdXJzb3JUcmFpbGluZy5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3RyYWlsaW5nWH1weCwgJHt0cmFpbGluZ1l9cHgsIDApYDtcbiAgICAgICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZUN1cnNvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvbk1vdXNlTW92ZSA9IChldnQpID0+IHtcbiAgICAgICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSBldnQ7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1vdXNlWDogY2xpZW50WCAtIDUsXG4gICAgICAgICAgbW91c2VZOiBjbGllbnRZIC0gNSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHZhciBlbGVtZW50TW91c2VJc092ZXIgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGNsaWVudFgsIGNsaWVudFkpXG4gICAgICAgIC8vIHZhciBtb3VzZUNpcmNsZUNvbG9yID0gZWxlbWVudE1vdXNlSXNPdmVyLmdldEF0dHJpYnV0ZShcIm1vdXNlY2lyY2xlY29sb3JcIilcbiAgICAgICAgLy8gaWYobW91c2VDaXJjbGVDb2xvcj09XCJ3aGl0ZVwiKXtcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe21vdXNlQ2lyY2xlQ29sb3I6XCJ3aGl0ZVwifSlcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwid2hpdGVcIilcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlXG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHttb3VzZUNpcmNsZUNvbG9yOlwiYmxhY2tcIn0pXG4gICAgfVxuICAgIC8vIG1vdXNlT3ZlckN1cnNvckVmZmVjdCA9ICgpPT57XG4gICAgLy8gICAgIHRoaXMucHJvcHMuYWRkQ2xhc3NUb0N1cnNvcihcImxhcmdlclwiKVxuICAgIC8vIH1cbiAgICAvLyBtb3VzZU91dEN1cnNvckVmZmVjdCA9ICgpPT57XG4gICAgLy8gICAgIHRoaXMucHJvcHMucmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKFwibGFyZ2VyXCIpXG4gICAgLy8gfVxuICAgIC8vIG1vdXNlT3ZlcldoaXRlQ3Vyc29yID0gKCk9PntcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3doaXRlIGN1cnNvcicpXG4gICAgLy8gICAgIHRoaXMucHJvcHMuYWRkQ2xhc3NUb0N1cnNvcihcIndoaXRlXCIpXG4gICAgLy8gfVxuICAgIC8vIG1vdXNlT3V0V2hpdGVDdXJzb3IgPSAoKT0+e1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnd2hpdGUgY3Vyc29yIGxlYXZlJylcbiAgICAvLyAgICAgdGhpcy5wcm9wcy5yZW1vdmVDbGFzc0Zyb21DdXJzb3IoXCJ3aGl0ZVwiKVxuICAgIC8vIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttb2RlOndpbmRvdy5pbm5lcldpZHRoPHdpbmRvdy5pbm5lckhlaWdodD9cInBvcnRyYWl0XCI6XCJsYW5kc2NhcGVcIn0pXG4gICAgICAgIHRoaXMuc2V0V2luKClcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICAgIHRoaXMubW92ZUN1cnNvcigpXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLHRoaXMuc2V0V2luKVxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSlcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZSk7XG4gICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYXJnZXItY3Vyc29yJykuZm9yRWFjaChlbGU9PntcbiAgICAgICAgLy8gICAgIGVsZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLHRoaXMubW91c2VPdmVyQ3Vyc29yRWZmZWN0KVxuICAgICAgICAvLyAgICAgZWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3VzZU91dEN1cnNvckVmZmVjdClcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndoaXRlLWN1cnNvcicpLmZvckVhY2goZWxlPT57XG4gICAgICAgIC8vICAgICBlbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIix0aGlzLm1vdXNlT3ZlcldoaXRlQ3Vyc29yKVxuICAgICAgICAvLyAgICAgZWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3VzZU91dFdoaXRlQ3Vyc29yKVxuICAgICAgICAvLyB9KVxuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLHByZXZTdGF0ZSl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29tbW9uLnNob3dfZnVsbHNjcmVlbl92aWRlbyE9cHJldlByb3BzLmNvbW1vbi5zaG93X2Z1bGxzY3JlZW5fdmlkZW8pe1xuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5jb21tb24uc2hvd19mdWxsc2NyZWVuX3ZpZGVvKXtcbiAgICAgICAgICAgICAgICB2YXIgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbHNjcmVlbl92aWRlbycpXG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5jb21tb24udmlkZW9fdHlwZT09XCJodG1sXCIpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmlkZW8gdHlwZSBodG1sJylcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8ub25jYW5wbGF5ID0gKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlby5wbGF5KClcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwbGF5ZXIgPSBuZXcgUGxheWVyKHZpZGVvKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnBsYXkoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgICAgICAgICAgIGNoYXJzZXQ9XCJVVEYtOFwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmdWxsLXNjcmVlbi12aWRlby13cmFwcGVyICR7dGhpcy5wcm9wcy5jb21tb24uc2hvd19mdWxsc2NyZWVuX3ZpZGVvP1wic2hvd1wiOlwiXCJ9YH0gb25DbGljaz17KCk9PnRoaXMucHJvcHMuaGlkZUZ1bGxzY3JlZW5WaWRlbygpfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2VcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8td3JhcFwiIG9uQ2xpY2s9eyhlKT0+ZS5zdG9wUHJvcGFnYXRpb24oKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb21tb24uc2hvd19mdWxsc2NyZWVuX3ZpZGVvICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZGVvIHZpZGVvaWQ9e3RoaXMucHJvcHMuY29tbW9uLnZpZGVvX2lkfSB2aWRlb190eXBlPXt0aGlzLnByb3BzLmNvbW1vbi52aWRlb190eXBlfSB2aWRlb19zcmM9e3RoaXMucHJvcHMuY29tbW9uLnZpZGVvX3NyY30gaHRtbF9pZD1cImZ1bGxzY3JlZW5fdmlkZW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGN1cnNvcnMgJHt0aGlzLnByb3BzLmNvbW1vbi5jdXJzb3JDbGFzc2VzLmpvaW4oJyAnKX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vyc29yXCIgcmVmPXt0aGlzLmN1cnNvcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vyc29yXCIgcmVmPXt0aGlzLmN1cnNvclRyYWlsaW5nfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPERlc2t0b3BNZW51IHBhZ2U9e3RoaXMucHJvcHMucGFnZX0vPlxuICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbiBoaW5kaVRleHQ9e3RoaXMucHJvcHMuaGluZGlUZXh0fSBuYXZQb3NpdGlvbj17dGhpcy5wcm9wcy5uYXZQb3NpdGlvbn0gbmF2VGV4dENvbG9yPXt0aGlzLnByb3BzLm5hdlRleHRDb2xvcn0gbWVudUJ0bkNvbG9yPXt0aGlzLnByb3BzLm1lbnVCdG5Db2xvcn0gLz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidHJhbnNwYXJlbnQtZm9vdGVyXCI+PC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDxGb290ZXIgdHlwZT17dGhpcy5wcm9wcy5mb290ZXJUeXBlfSBub1dhdmVEZXNrdG9wPXt0aGlzLnByb3BzLm5vV2F2ZURlc2t0b3B9IG5vV2F2ZU1vYmlsZT17dGhpcy5wcm9wcy5ub1dhdmVNb2JpbGV9IC8+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgLmZ1bGwtc2NyZWVuLXZpZGVvLXdyYXBwZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6LTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHJlbSAke3RoaXMucHJvcHMuY29tbW9uLnZpZGVvX3NyYz09XCIvdmlkZW9zL2VuY2hhbnRldXJfZGVza3RvcC5tcDRcIj9cIjM4JVwiOlwiNy41JVwifTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDBiMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjpvcGFjaXR5IDAuNHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6c2Nyb2xsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZ1bGwtc2NyZWVuLXZpZGVvLXdyYXBwZXIuc2hvd3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZnVsbC1zY3JlZW4tdmlkZW8td3JhcHBlciAuY2xvc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDoxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6MnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mdWxsLXNjcmVlbi12aWRlby13cmFwcGVyIC5jbG9zZTphZnRlciwuZnVsbC1zY3JlZW4tdmlkZW8td3JhcHBlciAuY2xvc2U6YmVmb3Jle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICNtYWlue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmN1cnNvciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jdXJzb3JzIC5jdXJzb3I6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EyNmZkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuY3Vyc29ycyAuY3Vyc29yOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOndpZHRoIDAuN3MsaGVpZ2h0IDAuN3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuY3Vyc29ycy5sYXJnZXIgLmN1cnNvcjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jdXJzb3JzLm9ubWVudWJ0biAuY3Vyc29yOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246d2lkdGggMC4ycyxoZWlnaHQgMC4ycztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMzBweCw3cHgsMCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoaXMucHJvcHMuY29tbW9uLm1lbnVfYnRuX2NvbG9yPT1cIndoaXRlXCI/XCIjZmZmZmZmXCI6XCIjMDAwMDAwXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuY3Vyc29ycy53aGl0ZSAuY3Vyc29yOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyYW5zcGFyZW50LWZvb3RlcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDIuN3JlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cbn1cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7Y29tbW9ufSl7XG4gICAgcmV0dXJuIHtjb21tb259XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyx7c2V0V2luZG93LGFkZENsYXNzVG9DdXJzb3IscmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yLGhpZGVGdWxsc2NyZWVuVmlkZW99KShMYXlvdXQpIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZ0ljb24oe3Nob3csd2lkdGgsaGVpZ2h0LHdlaWdodCxjZW50ZXJlZCxjb2xvcn0pe1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbG9hZGluZy1pY29uICR7c2hvdz9cInNob3dcIjpcIlwifSAke2NvbG9yfSAke3dlaWdodH0gJHtjZW50ZXJlZD9cImNlbnRlcmVkXCI6XCJcIn1gfSBzdHlsZT17e3dpZHRoLGhlaWdodH19PjwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5sb2FkaW5nLWljb24ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6c29saWQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cztcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzcGluIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgICAgICAgICAgICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmxvYWRpbmctaWNvbi5ibGFja3tcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjojMDAwMDAwO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojYzFjMWMxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5sb2FkaW5nLWljb24ud2hpdGV7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiNmZmZmZmY7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojNDE0MTQyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubG9hZGluZy1pY29uLnRoaW57XG4gICAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6M3B4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5sb2FkaW5nLWljb24udGhpY2t7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA2cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmxvYWRpbmctaWNvbi5jZW50ZXJlZHtcbiAgICAgICAgICAgICAgICBtYXJnaW46YXV0bztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubG9hZGluZy1pY29uLnNob3d7XG4gICAgICAgICAgICAgICAgb3BhY2l0eToxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufSIsImltcG9ydCB7dG9nZ2xlTWVudSxhZGRDbGFzc1RvQ3Vyc29yLHJlbW92ZUNsYXNzRnJvbUN1cnNvcn0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5mdW5jdGlvbiBOYXZpZ2F0aW9uKHByb3BzKXtcbiAgICBmdW5jdGlvbiBtZW51QnRuQ2xpY2soKXtcbiAgICAgICAgaWYocHJvcHMuY29tbW9uLm1lbnVPcGVuKVxuICAgICAgICAgICAgcHJvcHMucmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKFwid2hpdGVcIilcbiAgICAgICAgcHJvcHMudG9nZ2xlTWVudSgpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YG1lbnUtYnRuICR7cHJvcHMuY29tbW9uLm1lbnVfYnRuX2NvbG9yfSAke3Byb3BzLmNvbW1vbi5tZW51T3Blbj9cIm9wZW5cIjpcIlwifWB9IG9uQ2xpY2s9eygpPT5tZW51QnRuQ2xpY2soKX0gb25Nb3VzZU92ZXI9eygpPT5wcm9wcy5hZGRDbGFzc1RvQ3Vyc29yKFwib25tZW51YnRuXCIpfSBvbk1vdXNlT3V0PXsoKT0+cHJvcHMucmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKFwib25tZW51YnRuXCIpfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmVzXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Ake3Byb3BzLm5hdlBvc2l0aW9ufSAke3Byb3BzLm5hdlRleHRDb2xvcn1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby13cmFwXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImxvZ28gbG9nby1ibGFja1wiYWx0PSdpbWFnZScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nb193aGl0ZS5wbmdcIiBjbGFzc05hbWU9XCJsb2dvIGxvZ28td2hpdGVcImFsdD0naW1hZ2UnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtbG9nby13cmFwXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby1zaG9ydC1ibGFjay5wbmdcIiBjbGFzc05hbWU9XCJtb2JpbGUtbG9nbyB3aWR0aC0xMDBcImFsdD0naW1hZ2UnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJvcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+PGE+RU5HTElTSDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2BsYXJnZXItY3Vyc29yIGhpbmRpLXRleHRgfT5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmhpbmRpVGV4dD09XCJ3aGl0ZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9oaW5kaV93aGl0ZS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9oaW5kaS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9saT4gKi99XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmhpbmRpLXRleHQgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0M3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vYmlsZS1sb2dvLXdyYXB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vYmlsZS1sb2dve1xuICAgICAgICAgICAgICAgIHdpZHRoOjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1idG57XG4gICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICAgICAgdG9wOjIuNXJlbTtcbiAgICAgICAgICAgICAgICBsZWZ0OjQuOHJlbTtcbiAgICAgICAgICAgICAgICB6LWluZGV4Ojk5OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWJ0biAubGluZXMge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWJ0bi5vcGVuIC5saW5lcyBzcGFuIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjlFQjIxICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1idG4gLmxpbmVzIHNwYW4ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIDBzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUtYnRuLmJsYWNrIC5saW5lcyBzcGFue1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1idG4ud2hpdGUgLmxpbmVzIHNwYW57XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWJ0biAubGluZXMgc3BhbjpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWJ0bi5vcGVuIC5saW5lcyBzcGFuOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgdG9wOjExcHg7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWJ0biAubGluZXMgc3BhbjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgIHRvcDogMTFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWJ0bi5vcGVuIC5saW5lcyBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUtYnRuIC5saW5lcyBzcGFuOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgdG9wOiAyMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUtYnRuLm9wZW4gLmxpbmVzIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgICAgICB0b3A6MTFweDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKC00NWRlZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1mbG93OnJvdyBub3dyYXA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6Mi4zcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2ID4gKiB7XG4gICAgICAgICAgICAgICAgZmxleDoxIDEgMzMuMzMlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2LmFic29sdXRle1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6NTAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9nby13cmFwcGVye1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyOHJlbTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYuYmxhY2sgLmxvZ28tYmxhY2t7XG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYud2hpdGUgLmxvZ28td2hpdGV7XG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bC5vcHRpb25ze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6NC44cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwub3B0aW9ucyBsaXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsLm9wdGlvbnMgbGkgYXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjAuNXJlbSAwLjc1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2LmJsYWNrIHVsLm9wdGlvbnMgbGkgYTpub3QoLmhpbmRpKXtcbiAgICAgICAgICAgICAgICBjb2xvcjojMDAwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2LndoaXRlIHVsLm9wdGlvbnMgbGkgYTpub3QoLmhpbmRpKXtcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwub3B0aW9ucyBsaSBhOm5vdCguaGluZGkpe1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGdXR1cmFCb29rLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwub3B0aW9ucyBsaSBhLmhpbmRpe1xuICAgICAgICAgICAgICAgIGNvbG9yOiNGOUVCMjE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpe1xuICAgICAgICAgICAgICAgIC5tZW51LWJ0bi5ibGFjazpob3ZlciAubGluZXMgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tZW51LWJ0bi53aGl0ZTpob3ZlciAubGluZXMgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcbiAgICAgICAgICAgICAgICAubG9nby13cmFwe1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVsLm9wdGlvbnN7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1lbnUtYnRue1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OjIuOHJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vYmlsZS1sb2dvLXdyYXB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7Y29tbW9ufSl7XG4gICAgcmV0dXJuIHtjb21tb259XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyx7dG9nZ2xlTWVudSxhZGRDbGFzc1RvQ3Vyc29yLHJlbW92ZUNsYXNzRnJvbUN1cnNvcn0pKE5hdmlnYXRpb24pIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlkZW9FbWJlZChwcm9wcyl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAge3Byb3BzLnZpZGVvX3R5cGU9PVwiaHRtbFwiXG4gICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgIDx2aWRlbyB3aWR0aD1cIjEwMCVcIiBpZD17cHJvcHMuaHRtbF9pZH0gY29udHJvbHM+XG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtwcm9wcy52aWRlb19zcmN9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxuICAgICAgICAgICAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgdmlkZW8gdGFnLlxuICAgICAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8td3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHNyYz17YGh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8ke3Byb3BzLnZpZGVvaWR9P3RpdGxlPTAmYnlsaW5lPTAmcG9ydHJhaXQ9MCZsb29wPSR7cHJvcHMubG9vcD8xOjB9YH0gZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhdXRvcGxheTsgZnVsbHNjcmVlblwiIGFsbG93ZnVsbHNjcmVlbiBpZD17cHJvcHMuaHRtbF9pZH0+PC9pZnJhbWU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnZpZGVvLXdyYXB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzo1Ni4yNSUgMCAwIDA7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojMDAwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnZpZGVvLXdyYXAgaWZyYW1le1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgICAgICAgIGxlZnQ6MDtcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBNT0JJTEVfQlJFQUtQT0lOVDogNzY4LFxuICAgIEFOSU1BVElPTl9EVVJBVElPTjogMC40LFxuICAgIFNFTkRHUklEX0FQSV9LRVk6J1NHLlkwUmRsZVJQUzE2X1FDdUN6aVN1VkEuZng5S1QzNldLZ1JkSmtMSFhNQXBiSVNZeTVvaFhGeXRXNXZkVnA2ZW9Kaydcbn0iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIFByZWZldGNoT3B0aW9ucyxcbiAgTmV4dFJvdXRlcixcbiAgaXNMb2NhbFVSTCxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBleGVjT25jZSB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGgsIHJlc29sdmVIcmVmIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQge1xuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBiYXNlUGF0aCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGJhc2VQYXRoKVxuICAgICAgOiBiYXNlUGF0aCArIHBhdGhcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoY3VycmVudFBhdGg6IHN0cmluZywgaHJlZjogVXJsKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIHJldHVybiBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgIDogZmluYWxVcmwuaHJlZlxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIHVybEFzU3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5mdW5jdGlvbiB0cnlQYXJzZVJlbGF0aXZlVXJsKFxuICB1cmw6IHN0cmluZ1xuKTogbnVsbCB8IFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgIClcbiAgICAgIH0sIDApXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm4gZmFsc2VcblxuICAgIGxldCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IHBhcnNlZFxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKGNsZWFuZWRBcylcbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciwgZXJyb3I6IGVyciB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgICAgIChyZXMpID0+XG4gICAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgICB9IGFzIFJvdXRlSW5mbylcbiAgICAgICAgICApXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVyblxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGFzUGF0aCksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgaXRlbSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IEFycm93IGZyb20gXCIuLi9jb21wb25lbnRzL2Fycm93XCJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtvcGVuTWVudX0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcbmltcG9ydCBDbGllbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvY2xpZW50cydcbmltcG9ydCB7YWRkQ2xhc3NUb0N1cnNvcixyZW1vdmVDbGFzc0Zyb21DdXJzb3J9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnXG5pbXBvcnQgeyBNT0JJTEVfQlJFQUtQT0lOVCB9IGZyb20gXCIuLi9jb25maWdcIlxuaW1wb3J0IHtsYXp5c2l6ZXN9IGZyb20gXCJsYXp5c2l6ZXNcIlxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc01vYmlsZTpmYWxzZSxcbiAgICAgIHVuZGVybGluZUV4cGFuZDogZmFsc2UsXG4gICAgICBiYWNrZ3JvdW5kU3R5bGVzOiB7IHRvcDogXCIwXCIsIGxlZnQ6IFwiMFwiIH0sXG4gICAgICBiYWNrZ3JvdW5kUmVhZHk6IGZhbHNlLFxuICAgICAgYmFja2dyb3VuZFNob3c6IGZhbHNlLFxuICAgICAgbG9hZGluZ0xvZ29SZWFkeTogZmFsc2UsXG4gICAgICBhbmltYXRlOiBmYWxzZSxcbiAgICAgIG1lbnVCdG5Db2xvcjpcImJsYWNrXCJcbiAgICB9O1xuICAgIHRoaXMuYmFja2dyb3VuZEltYWdlID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgICB0aGlzLnJlbGxheFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5ub3RQZXJmb3JtZWRBbmltYXRpb24gPSB0cnVlXG4gICAgdGhpcy53aGl0ZU1lbnVTZWN0aW9ucyA9IFtSZWFjdC5jcmVhdGVSZWYoKV1cbiAgfVxuICAvLyBoYW5kbGVTY3JvbGwgPSAoKT0+e1xuICAvLyAgIGZvcihsZXQgaT0wO2k8dGhpcy53aGl0ZU1lbnVTZWN0aW9ucy5sZW5ndGg7aSsrKXtcbiAgLy8gICAgIGxldCBib3VuZGluZ1ZhbHMgPSB0aGlzLndoaXRlTWVudVNlY3Rpb25zW2ldLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgLy8gICAgIGlmKGJvdW5kaW5nVmFscy50b3AgPCAwICYmIChib3VuZGluZ1ZhbHMudG9wICogLTEgPCBib3VuZGluZ1ZhbHMuaGVpZ2h0KSl7XG4gIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbnVCdG5Db2xvcjpcIndoaXRlXCJ9KVxuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudUJ0bkNvbG9yOlwiYmxhY2tcIn0pXG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG4gIGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICB0aGlzLnBvc2l0aW9uSW1hZ2UoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtpc01vYmlsZTp3aW5kb3cuaW5uZXJXaWR0aCA8IE1PQklMRV9CUkVBS1BPSU5UP3RydWU6ZmFsc2V9KVxuICB9XG4gIHBvc2l0aW9uSW1hZ2UoY2IpIHtcbiAgICBsZXQgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjByZW1cIiwgbGVmdDogXCItMzEuNSVcIiwgd2lkdGg6IFwiMjA4JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNDAwKVxuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjByZW1cIiwgbGVmdDogXCItMzEuNSVcIiwgd2lkdGg6IFwiMjA4JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNjUwKVxuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItMjAuNSVcIiwgd2lkdGg6IFwiMTIwJVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAyNClcbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7dG9wOlwiLTEuNXJlbVwiLGxlZnQ6XCItMjAuNSVcIix3aWR0aDpcIjEyMCVcIn1cbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7IHRvcDogXCItMC41cmVtXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTM2NilcbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7IHRvcDogXCItMC41cmVtXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTQ0MClcbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7IHRvcDogXCItMS41cmVtXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgLy8gfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBiYWNrZ3JvdW5kU3R5bGVzIH0sICgpID0+IHtcbiAgICAgIGlmIChjYikge1xuICAgICAgICBjYigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuc3RhdGUuYmFja2dyb3VuZFJlYWR5ICYmXG4gICAgICB0aGlzLnN0YXRlLmxvYWRpbmdMb2dvUmVhZHkgJiZcbiAgICAgIHRoaXMubm90UGVyZm9ybWVkQW5pbWF0aW9uXG4gICAgKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uSW1hZ2UoKTtcbiAgICAgIHRoaXMubm90UGVyZm9ybWVkQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLnByb3BzLm9wZW5NZW51KGZhbHNlKTtcbiAgICAgIC8vIHRoaXMubW91c2VFdmVudHMoKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbmltYXRlOiB0cnVlIH0sKCk9PntcbiAgICAgICAgICAvLyB0aGlzLnByb3BzLnJlbW92ZUNsYXNzRnJvbUN1cnNvcihcImxhcmdlclwiKSAgXG4gICAgICAgICAgLy8gdGhpcy5wcm9wcy5yZW1vdmVDbGFzc0Zyb21DdXJzb3IoXCJ3aGl0ZVwiKSAgXG4gICAgICAgIH0pO1xuICAgICAgfSwgNzUwKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aXNNb2JpbGU6d2luZG93LmlubmVyV2lkdGggPCBNT0JJTEVfQlJFQUtQT0lOVD90cnVlOmZhbHNlfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLmhhbmRsZVJlc2l6ZSlcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVNjcm9sbClcbiAgICBjb25zdCBsb2FkaW5nTG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGxvYWRpbmdMb2dvLnNyYyA9IFwiL2ltYWdlcy9sb2FkaW5nX2xvZ28ucG5nXCI7XG4gICAgbG9hZGluZ0xvZ28ub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmdMb2dvUmVhZHk6IHRydWUgfSk7XG4gICAgfTtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gXCIvaW1hZ2VzL2hvbWUtY292ZXIuanBnXCI7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYWNrZ3JvdW5kUmVhZHk6IHRydWUgfSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMucmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKFwid2hpdGVcIilcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuaGFuZGxlUmVzaXplKVxuICAgIC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlU2Nyb2xsKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICBcbi8vICAgICBmb3Igc2VvIHB1cnBvc2VcbiAgICAgIGNvbnN0IHNjaGVtYURhdGE9e1xuXG4gICAgICBcIkBjb250ZXh0XCI6IFwiaHR0cDovL3NjaGVtYS5vcmdcIixcbiAgICAgIFwiQHR5cGVcIjogXCJzZXJ2aWNlXCIsXG4gICAgICBcIm5hbWVcIjogXCJPcHBvc2FibGUgVGh1bWJzXCIsXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vb3Bwb3NhYmxlLXRodW1icy52ZXJjZWwuYXBwL1wiXG4gICB9XG5cbiAgIEpTT04uc3RyaW5naWZ5KHNjaGVtYURhdGEpXG4gICAgXG4gICAgXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgbmF2UG9zaXRpb249XCJhYnNvbHV0ZVwiIG5hdlRleHRDb2xvcj1cImJsYWNrXCIgbWVudUJ0bkNvbG9yPXt0aGlzLnN0YXRlLm1lbnVCdG5Db2xvcn0gcGFnZT1cImhvbWVcIj5cbiAgICAgICAgPEhlYWQ+XG4gIDxtZXRhIG5hbWU9XCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIiBjb250ZW50PVwiZlRwN2xvQnpEVEFqWEV1dGlFY2xmc3Q0YzN2dDEzdWt0cVdfZEFGVFdvSVwiIC8+XG4gIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJicmFuZCBpZGVudGl0eSBhZ2VuY3ksIGJyYW5kIGlkZW50aXR5IGRlc2lnbiBhZ2VuY3ksIGNvcnBvcmF0ZSBpZGVudGl0eSBhZ2VuY3ksIGJyYW5kIGlkZW50aXR5LCBicmFuZGluZyBkZXNpZ24sIGRpZ2l0YWwgbWVkaWEgbWFuYWdlbWVudCxkaWdpdGFsIG1lZGlhIGFnZW5jeSwgc29jaWFsIG1lZGlhIGFnZW5jaWVzLGRpZ2l0YWwgbWVkaWEgbWFya2V0aW5nIGNvbXBhbmllc1wiLz5cbiAgICAgICAgICA8dGl0bGU+QnJhbmQgSWRlbnRpdHkgQWdlbmN5IHwgT3Bwb3NhYmxlIFRodW1iczwvdGl0bGU+XG4gICAgICAgICAgey8qIDxoMT5PcHBvc2FibGUgVGh1bWJzPC9oMT4gKi99XG48bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiT3Bwb3NhYmxlIFRodW1icyB3b3JrIHdpdGggY29tcGFuaWVzIGZvciB0aGVpciBicmFuZGluZy4gSWYgeW91IGhhdmUgYSBuZXcgYnJhbmQgdG8gbGF1bmNoLCB3ZSBjYW4gaGVscCB5b3UsIHJpZ2h0IGZyb20gbmFtaW5nIGl0IHRvIGRldmVsb3BpbmcgaXRzIGlkZW50aXR5LlwiLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry1WVE1GNzBQN0hXXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICBndGFnKCdjb25maWcnLCAnRy1WVE1GNzBQN0hXJyk7XG4gICAgICAgICAgYCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz4gXG5cbiB7Lyogc2NoZW1hIGlzIGltcGxlbWVudGVkICovfVxuPHNjcmlwdFxuICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCJcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KHNjaGVtYURhdGEpIH19XG4gIC8+XG4gICAgICAgICAgICAgICAgICBcbjwvSGVhZD5cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZ0xvZ29SZWFkeSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuYW5pbWF0ZSA/IFwiYW5pbWF0ZVwiIDogXCJcIn1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy13cmFwcGVyXCIgc3R5bGU9e3toZWlnaHQ6YCR7dGhpcy5wcm9wcy5jb21tb24ud2luZG93SGVpZ2h0fXB4YH19PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvYWRpbmdfbG9nby5wbmdcIiBhbHQ9J2hvbWVjb3ZlcicgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9wLXNlY3Rpb24td3JhcHBlciBibGFjay1jdXJzb3IgJHt0aGlzLnN0YXRlLmFuaW1hdGUgPyBcImFuaW1hdGVcIiA6IFwiXCJ9YH0gc3R5bGU9e3sgaGVpZ2h0OiBgJHt0aGlzLnByb3BzLmNvbW1vbi53aW5kb3dIZWlnaHR9cHhgIH19PlxuICAgICAgICAgICAgey8qIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9ob21lLWNvdmVyLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJob21lIGNvdmVyXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPVwiXCI+ICovfVxuICAgICAgICAgICAgPGltZyBzdHlsZT17dGhpcy5zdGF0ZS5iYWNrZ3JvdW5kU3R5bGVzfSBzcmM9XCIvaW1hZ2VzL2hvbWUtY292ZXIuanBnXCIgY2xhc3NOYW1lPXtgYmFja2dyb3VuZGB9IHJlZj17dGhpcy5iYWNrZ3JvdW5kSW1hZ2V9IGFsdD0naG9tZWNvdmVyJy8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Rvcnl0ZWxsZXJzIGZ1dHVyYS1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgTUVFVCBUSEUgU1RPUllURUxMRVJTICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVsbG8gaGVsdmV0aWNhLW5ldWUtY29uZGVuc2VkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVsbG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVsbC1zZXJ2aWNlIGJpZy1jYXNsb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZGVwZW5kZW50PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFnZW5jeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWRvd24tYXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgZG93blwiPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBsb29raW5nLWZvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS10ZXh0XCI+PGgxPkJyYW5kIElkZW50aXR5IEFnZW5jeTwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8L1BhcmFsbGF4PiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hpdGUtZmFkZVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1jYXRlZ29yaWVzIHRleHQtY2VudGVyIHBhZGRlZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIEluc2lnaHRzIC8gQnJhbmQgSWRlbnRpdHkgLyBQYWNrYWdpbmcgLyBBZHZlcnRpc2luZyAvIERpZ2l0YWwgLyBHcmFwaGljcyAvIEZpbG1zXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWl0ZW1zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9kZCBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9CaWdCYW55YW4uanBnXCIgYmdJbWFnZUFsdD1cImJpZyBiYW55YW5cIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvYmlnLWJhbnlhblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5CaWcgQmFueWFuIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5BbiBJdGFsaWFuIHdpbmVtYWtlci4gQSBwYXNzaW9uYXRlIGJyYW5kIHRlYW0uIEFuZCB1cy4gWWVhcnMgb2YgdMOqdGUtw6AtdMOqdGVzIGFuZCByZXNlYXJjaC1kcml2ZW4gaW5zaWdodHMgbGVkIHVzIHRvIHJlY3JlYXRlIHRoZSBwYWNrYWdpbmcgYW5kIGNvbW11bmljYXRpb24gc3RyYXRlZ3kgZm9yIEJpZyBCYW55YW4uIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBldmVuIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL2xhbmdvb3IuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvbGFuZ29vclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5MJ2FuZ29vciA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+V2luZSBjYW4gYmUgZWxlZ2FudC4gV2luZSBjYW4gYmUgc29waGlzdGljYXRlZC4gQnV0IHdpbmUgYW5kIGZ1bj8gSGVyZeKAmXMgaG93IHdlIG1hcnJpZWQg4oCYZnVu4oCZIGFuZCBhIG5ldyBicmFuZCBvZiB3aW5lcyBmcm9tIEJpZyBCYW55YW4sIGtub3duIGZvciBpdHMgcHJlbWl1bSB3aW5lcy48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2RkIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL0VuY2hhbnRldXIuanBnXCIgYmdJbWFnZUFsdD1cImVuY2hhbnRldXJcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9XCJwb3J0Zm9saW8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL2VuY2hhbnRldXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+RW5jaGFudGV1ciA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5JdOKAmXMgRnJlbmNoLCBpdOKAmXMgcm9tYW50aWMgYW5kIGl04oCZcyBzbyB2ZXJ5IGZsb3JhbC4gSG93IGNhbiB3ZSBub3QgZmFsbCBpbiBsb3ZlIHdpdGggRW5jaGFudGV1cj8gV2UgaGF2ZSBLLWRyYW1hIGZhbnMgb24gb3VyIHRlYW0gd2hvIGFic29sdXRlbHkgbG92ZSB0aGlzIGJyYW5kITwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZXZlbiBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9meW5kLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJsYW5nb29yXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPVwicG9ydGZvbGlvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9meW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkZZTkQgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPlNlZWRlZCBpbiB0aGUgaWRlYSBvZiBzZWxmLWV4cHJlc3Npb24sIEZZTkQgaW5zcGlyZWQgdXMgd2l0aCBpdHMgZnVuY3Rpb25hbCBjbG90aGluZyBsaW5lcy4gRnJvbSBzdHJhdGVneSB0byBpZGVudGl0eSBhbmQgYnJhbmQgYXJjaGl0ZWN0dXJlIGRlc2lnbiwgd2UgaGVscGVkIGJyaW5nIHRoaXMgYnJhbmQgdG8gbGlmZS4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9kZCBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vQ2hhbmRyaWthMy5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT17YHBvcnRmb2xpby1pdGVtICR7dGhpcy5zdGF0ZS5pc01vYmlsZT9cIndoaXRlLW1lbnUtYnRuXCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9jaGFuZHJpa2FcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+Q2hhbmRyaWthIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5IZXJl4oCZcyBhIGJyYW5kIHdlIGFsbCBncmV3IHVwIHdpdGguIEFuZCB5ZXQsIGl0IG1hbmFnZWQgdG8gc3VycHJpc2UgdXMgd2l0aCBpdHMgc2VjcmV0cy4gV2Ugc2hhcmVkIHRoZXNlIGxpdHRsZSBudWdnZXRzIHdpdGggdGhlIHdvcmxkIGluIG91ciBjYW1wYWlnbi48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGV2ZW4gbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vU2FudG9vci5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pdGVtIGxhenlsb2FkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvc2FudG9vclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5TYW50b29yIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5XaG8gZG9lc27igJl0IHJlbWVtYmVyIHRoZSBjbGFzc2ljIOKAnG11bW154oCdIGFkcyEgSXQgZ2l2ZXMgdXMgZ3JlYXQgcHJpZGUgdG8gd29yayBvbiBjYW1wYWlnbnMgZm9yIGEgYnJhbmQgdGhhdOKAmXMgYXMgcmVsZXZhbnQgdG9kYXkgYXMgaXQgd2FzIGEgZmV3IGRlY2FkZXMgYWdvLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZGQgbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vVm9pSmVhbnMucG5nXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0gbGF6eWxvYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvdm9pLWplYW5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPlZPSSBKZWFucyA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+VGhlIHZlcnkgaWRlYSBvZiB0aGVzZSBkZW5pbXMgaW5zcGlyZWQgdXMhIFZPSSBoYXMgZXJnb25vbWljYWxseSBlbmdpbmVlcmVkIGRlbmltcyB0aGF0IGNhbGxlZCBmb3IgZWRneSwgZmFzaGlvbiBmb3J3YXJkIGNvbW11bmljYXRpb24uIEFuZCB3ZSByZXZlbGVkIGluIGl0LjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBldmVuIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9JY2VidXJnMS5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT17YHBvcnRmb2xpby1pdGVtICR7dGhpcy5zdGF0ZS5pc01vYmlsZT9cIndoaXRlLW1lbnUtYnRuXCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9pY2VidXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkljZUJ1cmcgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPkludGVuc2UgY3JhdmluZ3MgZm9yIGJ1cmdlcnMgYW5kIHNoYWtlcyBmZWQgb3VyIGJyYWlucyBhcyB3ZSB3b3JrZWQgb24gdGhlIGJyYW5kIGlkZWEgYW5kIGlkZW50aXR5IGZvciB0aGlzIFVLLWJhc2VkIGdvdXJtZXQgYnVyZ2VyIGNoYWluLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZGQgbWlhLWJ5LXRhbmlzaHEgbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vTWlhMS5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT17YHBvcnRmb2xpby1pdGVtICR7dGhpcy5zdGF0ZS5pc01vYmlsZT9cIndoaXRlLW1lbnUtYnRuXCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9taWEtYnktdGFuaXNocVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5NaWEgLSBUYW5pc2hxIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5UaGVzZSBmaWxtcyBhcmUgYSBjb2xsZWN0aW9uIG9mIHN0b3JpZXMgb2YgSW5kaWFuIHdvbWVuIHdobyBpbnNwaXJlIHlvdSB3aXRoIHRoZWlyIHJlc2lsaWVuY2UsIGNoYXJtIHlvdSB3aXRoIHRoZWlyIHByZXNlbmNlIGFuZCBhd2UgeW91IHdpdGggdGhlaXIgYWNoaWV2ZW1lbnRzLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBldmVuIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL0dyYXBoaWNzMS5qcGdcIiBiZ0ltYWdlQWx0PVwiZ3JhcGhpY3NcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9XCJwb3J0Zm9saW8taXRlbSBsYXp5bG9hZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5HcmFwaGljcyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPkEgZGlnaXRhbCBhcnQgcHJvamVjdCB0aGF0IGxlZCB1cyB0byBjcmVhdGUgZWRneSwgbW9kZXJuIGdyYXBoaWNzIGZvciBjbG90aGluZyBhbmQgbWVyY2hhbmRpc2UuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5vLWNzc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbG9yZS1tb3JlIHRleHQtY2VudGVyIHBhZGRlZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJvd3NlXCI+YnJvd3NlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiNC42cmVtXCJ9fT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXhwbG9yZS1hcnJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93IGRpcmVjdGlvbj1cImRvd25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXMgcG9zaXRpb24tcmVsYXRpdmUgcGFkZGVkLWNvbnRlbnQgd2hpdGUtY3Vyc29yIHdoaXRlLWN1cnNvciB3aGl0ZS1tZW51LWJ0blwiIHJlZj17dGhpcy53aGl0ZU1lbnVTZWN0aW9uc1swXX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1oZWFkaW5nIG1vcmUtbGV0dGVyLXNwYWNpbmcgZnV0dXJhLWxpZ2h0IHNsaWdodGx5LWxhcmdlci10ZXh0IHllbGxvdy10ZXh0XCI+U0VSVklDRVM8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWxpc3RzXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNlcnZpY2UtaXRlbXMgbGlzdC1zdHlsZS1ub25lIHdoaXRlLXRleHQgbGFyZ2VyLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ2luc2lnaHRzJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEluc2lnaHRzXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnYnJhbmQtaWRlbnRpdHknIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEJyYW5kIElkZW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdwYWNrYWdpbmcnIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFBhY2thZ2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnYWR2ZXJ0aXNpbmcnIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkdmVydGlzaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdkaWdpdGFsJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBEaWdpdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdkaWdpdGFsJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBHcmFwaGljc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnZmlsbXMnIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEZpbG1zXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2tpbGxzIGxpc3Qtc3R5bGUtbm9uZSBzbGlnaHRseS1sYXJnZXItdGV4dCBmdXR1cmEtbGlnaHQgeWVsbG93LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxsaT5DUkVBVElWRTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+SU5TSUdIVC1EUklWRU48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPkNVTFRVUkFMTFkgUkVMRVZBTlQ8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGRhdGEtc3JjPVwiL2ltYWdlcy9zZXJ2aWNlcy1iZy0yLnBuZ1wiIGNsYXNzTmFtZT1cIndpZHRoLTEwMCBsYXp5bG9hZFwiICBhbHQ9J2hvbWVjb3ZlcicvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LW1vYmlsZSBoaWRlLWRlc2t0b3AgdGV4dC1jZW50ZXJcIiBzdHlsZT17e21hcmdpblRvcDpcIjcuMnJlbVwifX0+XG4gICAgICAgICAgICAgICAgPEFycm93IGRpcmVjdGlvbj1cImRvd25cIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8Q2xpZW50cyAvPlxuICAgICAgICAgICAgPGltZyBkYXRhLXNyYz1cIi9pbWFnZXMvd2F2ZS1ibGFjay5naWZcIiBjbGFzc05hbWU9XCJ3aWR0aC0xMDAgd2F2ZSBsYXp5bG9hZFwiIGFsdD0naG9tZWNvdmVyJyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyF0aGlzLnN0YXRlLmxvYWRpbmdMb2dvUmVhZHkgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxhY2stYmdcIj48L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLndoaXRlLWZhZGV7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwcmVtO1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LDI1NSwyNTUsIDEpKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwyNTUsMjU1LCAxKSk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LDI1NSwyNTUsIDEpKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgd2hpdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFycm93LXJpZ2h0e1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKTtcbiAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucC1pbmZvLXdyYXBwZXI6aG92ZXIgLmFycm93LXJpZ2h0LC5wb3J0Zm9saW8taXRlbTpob3ZlciAuYXJyb3ctcmlnaHR7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDFyZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAud2F2ZXtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgLy8gYm90dG9tOiAtNzglO1xuICAgICAgICAgICAgICBib3R0b206MDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWl0ZW1zIGxpIGF7XG4gICAgICAgICAgICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1pdGVtcyBsaSBhOmhvdmVye1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgY29sb3I6I0Y5RUQzMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWl0ZW1zIGxpOmhvdmVye1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGluc01lZGl1bUl0YWxpYyxzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucC1pbmZvLXdyYXBwZXJ7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1hdDEgLnAtaW5mb3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICBib3R0b206IDdyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuaGVsbG8gLmNoaWxke1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLnN0b3J5dGVsbGVycyAuY2hpbGR7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuZnVsbC1zZXJ2aWNlIC5jaGlsZHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAuYW5pbWF0ZSAubG9va2luZy1mb3IgLmNoaWxke1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5leHBsb3JlLW1vcmV7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTo0LjZyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6OHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWxpc3RzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2UtaXRlbXN7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNi41cmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2tpbGxzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2LjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1pbWFnZXtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogLTUlO1xuICAgICAgICAgICAgICB0b3A6IC0xJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDQ3JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlc3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDojMDAwMDAwO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo4LjhyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjI1cmVtO1xuICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9ydGZvbGlve1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmZmZmY7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOjhyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cmVtO1xuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3J0Zm9saW8taXRlbXN7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxN3JlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTUlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MTUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtcyAucm93IC5ldmVue1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOi04cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby10aXRsZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6NC42cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtLmZvcm1hdDIgLmltYWdlLXdyYXBwZXIgaW1ne1xuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1kZXNjcmlwdGlvbntcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ldmVuIC5mb3JtYXQyIC5wb3J0Zm9saW8taW5mb3tcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtYXQyIC5wb3J0Zm9saW8taW5mb3tcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDozcmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nOjAgNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybWF0MSAucG9ydGZvbGlvLWluZm97XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBib3R0b206IDhyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtYXQxe1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMjUlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ldmVuIC5mb3JtYXQxe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSkgMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1jYXRlZ29yaWVze1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm90dG9tLXRleHR7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNC41cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaG9tZS1kb3duLWFycm93e1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NHJlbTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZsb2F0aW5nO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OjEuNHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuaG9tZS1kb3duLWFycm93e1xuICAgICAgICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZsb2F0aW5nIHtcbiAgICAgICAgICAgICAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsICAwcHgpOyB9XG4gICAgICAgICAgICAgIDY1JSAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxNXB4KTsgfVxuICAgICAgICAgICAgICB0byAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTBweCk7IH0gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3Rvcnl0ZWxsZXJzIHtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS43cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLmxvYWRpbmctd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ke3RoaXMucHJvcHMuY29tbW9uLndpbmRvd0hlaWdodCArIDEwMH1weCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9hZGluZy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvYWRpbmctd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllcigwLjc3LCAwLCAwLjE3NSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxhY2stYmd7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvYWRpbmctd3JhcHBlciBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XG4gICAgICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDU2cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRvcC1zZWN0aW9uLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRvcC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWxsbyB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmMjA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnJlbTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MC44O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZ1bGwtc2VydmljZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0MTQwNDI7O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgdG9wOiAzcmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMy41cmVtO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAzLjVyZW07XG4gICAgICAgICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0IGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3QgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVuZGVybGluZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMC4xcmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMXJlbTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0OmhvdmVyIC51bmRlcmxpbmUsXG4gICAgICAgICAgICAudW5kZXJsaW5lLmV4cGFuZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDZyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnJvd3Nle1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOi0xcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcbiAgICAgICAgICAgICAgLnRleHR7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5oZWxsb3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTZyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmZ1bGwtc2VydmljZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc3Rvcnl0ZWxsZXJze1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjFyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDowO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ib3R0b20tdGV4dHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wb3J0Zm9saW8taXRlbXN7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtcyAucm93IC5ldmVue1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubWlhLWJ5LXRhbmlzaHF7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDotNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VydmljZS1saXN0cyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlLWhlYWRpbmd7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlcnZpY2UtaXRlbXN7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6bm9uZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2tpbGxze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlLWltYWdlIHtcbiAgICAgICAgICAgICAgICAvLyByaWdodDogLTEwJTtcbiAgICAgICAgICAgICAgICAvLyB0b3A6YXV0bztcbiAgICAgICAgICAgICAgICAvLyBib3R0b206IC0xJTtcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogNTclO1xuICAgICAgICAgICAgICAgIC8vIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlc3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo4LjhyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLndoaXRlLWZhZGV7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6M3JlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZnVsbC1zZXJ2aWNle1xuICAgICAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zdG9yeXRlbGxlcnMge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBvcnRmb2xpb3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo0cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsb3JlLW1vcmV7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo0cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsb3JlLWFycm93e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjFyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmJyb3dzZXtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOi0ycmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7IGNvbW1vbiB9KSB7XG4gIHJldHVybiB7XG4gICAgY29tbW9uLFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtvcGVuTWVudSxhZGRDbGFzc1RvQ3Vyc29yLHJlbW92ZUNsYXNzRnJvbUN1cnNvcn0pKEhvbWUpO1xuIiwiZXhwb3J0IGNvbnN0IFNFVF9XSU5ET1cgPSBcIlNFVF9XSU5ET1dcIlxuZXhwb3J0IGNvbnN0IFRPR0dMRV9NRU5VID0gXCJUT0dHTEVfTUVOVVwiXG5leHBvcnQgY29uc3QgT1BFTl9NRU5VID0gXCJPUEVOX01FTlVcIlxuZXhwb3J0IGNvbnN0IEFERF9DTEFTU19UT19DVVJTT1IgPSBcIkFERF9DTEFTU19UT19DVVJTT1JcIlxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DTEFTU19GUk9NX0NVUlNPUiA9IFwiUkVNT1ZFX0NMQVNTX0ZST01fQ1VSU09SXCJcbmV4cG9ydCBjb25zdCBISURFX0ZVTExfU0NSRUVOX1ZJREVPID0gXCJISURFX0ZVTExfU0NSRUVOX1ZJREVPXCJcbmV4cG9ydCBjb25zdCBTSE9XX0ZVTExfU0NSRUVOX1ZJREVPID0gXCJTSE9XX0ZVTExfU0NSRUVOX1ZJREVPXCJcbmV4cG9ydCBjb25zdCBTRVRfTUVOVV9CVE5fQ09MT1IgPSBcIlNFVF9NRU5VX0JUTl9DT0xPUlwiXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Z1bGxzY3JlZW5WaWRlbyh2aWRlb19pZCwgdmlkZW9fc3JjLHZpZGVvX3R5cGUpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6U0hPV19GVUxMX1NDUkVFTl9WSURFTyxcbiAgICAgICAgdmlkZW9faWQsXG4gICAgICAgIHZpZGVvX3NyYyxcbiAgICAgICAgdmlkZW9fdHlwZVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBoaWRlRnVsbHNjcmVlblZpZGVvKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTpISURFX0ZVTExfU0NSRUVOX1ZJREVPXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFdpbmRvdyh3aW5kb3dXaWR0aCx3aW5kb3dIZWlnaHQpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6U0VUX1dJTkRPVyxcbiAgICAgICAgd2luZG93V2lkdGgsXG4gICAgICAgIHdpbmRvd0hlaWdodFxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVNZW51KCl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTpUT0dHTEVfTUVOVVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBvcGVuTWVudShib29sKXtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOk9QRU5fTUVOVSxcbiAgICAgICAgYm9vbFxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzc1RvQ3Vyc29yKGNscyl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTpBRERfQ0xBU1NfVE9fQ1VSU09SLFxuICAgICAgICBjbHNcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0TWVudUJ0bkNvbG9yKGNvbG9yKXtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOlNFVF9NRU5VX0JUTl9DT0xPUixcbiAgICAgICAgY29sb3JcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKGNscyl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTpSRU1PVkVfQ0xBU1NfRlJPTV9DVVJTT1IsXG4gICAgICAgIGNsc1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdmltZW8vcGxheWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxhenlzaXplc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFuaW1hdGUtb24tc2Nyb2xsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBhcmFsbGF4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==