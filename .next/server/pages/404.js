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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/404.js");
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

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FourNotFour; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-animate-on-scroll */ "react-animate-on-scroll");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Anton\\Documents\\GitHub\\anton.github.io\\pages\\404.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function FourNotFour() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    page: "404",
    navPosition: "absolute",
    navTextColor: "black",
    menuBtnColor: "black",
    hindiText: "white",
    footerType: "yellow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-874357428" + " " + "inspire text-center bg-yellow padded-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "scrollFadeIn",
    duration: _config__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_DURATION"],
    animateOnce: true,
    delay: 100,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "jsx-874357428",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "Error Not Found..!"), "   ", __jsx("h1", {
    className: "jsx-874357428",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 35
    }
  }, "404"), "  ", __jsx("br", {
    className: "jsx-874357428" + " " + "hide-desktop show-mobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 49
    }
  }), "Take me to ", __jsx("br", {
    className: "jsx-874357428",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 103
    }
  }), __jsx("button", {
    onClick: () => router.push('/'),
    className: "jsx-874357428" + " " + 'btn btn-black btn-send',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, " Home"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "874357428",
    __self: this
  }, ".top-wave.jsx-874357428{position:absolute;bottom:0;left:0;z-index:1;}.wave.jsx-874357428{width:100%;position:absolute;bottom:0;left:0;z-index:1;}.brand-images-wrapper.jsx-874357428{position:relative;z-index:2;}.animate.jsx-874357428 .fun.jsx-874357428 .child.jsx-874357428{-webkit-transition-delay:0.4s;transition-delay:0.4s;}.animate.jsx-874357428 .top-title.jsx-874357428 .child.jsx-874357428{-webkit-transition-delay:0.6s;transition-delay:0.6s;}.animate.jsx-874357428 .bg-text.jsx-874357428 .child.jsx-874357428{-webkit-transition-delay:0.7s;transition-delay:0.7s;}.about-services-list.jsx-874357428 li.jsx-874357428 a.jsx-874357428{color:#ffffff;}.about-services-list.jsx-874357428 li.jsx-874357428{-webkit-transform:rotateX(540deg);-ms-transform:rotateX(540deg);transform:rotateX(540deg);-webkit-transition:-webkit-transform 800ms,opacity 500ms;-webkit-transition:transform 800ms,opacity 500ms;transition:transform 800ms,opacity 500ms;-webkit-transition-delay:.3s;transition-delay:.3s;-webkit-transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275);transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275);-webkit-backface-visibility:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden;margin:1.6rem 0;}.about-services-list.animate.jsx-874357428 li.jsx-874357428{-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);}.brands.jsx-874357428{background:#ffffff;padding-left:13.2rem;padding-right:13.2rem;padding-top:20rem;padding-bottom:20rem;}.brands.jsx-874357428 .col1.jsx-874357428 .brand-image.jsx-874357428{padding-right:9rem;}.brands.jsx-874357428 .col2.jsx-874357428 .brand-image.jsx-874357428{padding-left:4.5rem;padding-right:4.5rem;}.brands.jsx-874357428 .col3.jsx-874357428 .brand-image.jsx-874357428{padding-left:4.5rem;padding-right:4.5rem;}.inspire.jsx-874357428{font-size:4.6rem;padding-top:13.3rem;padding-bottom:13.3rem;}.navigator.jsx-874357428{font-size:4.6rem;margin-top:9.5rem;}.navigator.jsx-874357428 .txt.jsx-874357428{padding:0 3rem;}.team-member-info.jsx-874357428{margin-top:3.2rem;font-size:2rem;}.team-member-info.jsx-874357428 .designation.jsx-874357428{margin-left:1rem;}.team.jsx-874357428 .slide1.jsx-874357428{padding-right:4rem;}.team.jsx-874357428 .slide2.jsx-874357428{padding-left:4rem;}.team.jsx-874357428{padding-left:10%;padding-right:10%;}.storytellers-top.jsx-874357428{padding-top:12.2rem;padding-bottom:11.7rem;padding-left:17%;padding-right:17%;background:#E4E4E4;}.storytellers-top-heading.jsx-874357428{font-size:4.6rem;}.storytellers.jsx-874357428{background:#ffffff;padding-bottom:7.3rem;}.view-more.jsx-874357428{margin-top:3.3rem;font-size:2rem;}.about-services-wrapper.jsx-874357428{background:#000000;color:#ffffff;padding-top:10rem;padding-bottom:10rem;}.about-services.jsx-874357428{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;text-align:center;}.about-services-list.jsx-874357428{font-size:4rem;}.about-services-list.jsx-874357428 li.jsx-874357428{line-height:1.1;}.about-services.jsx-874357428 .col1.jsx-874357428 img.jsx-874357428{height:100%;position:absolute;left:-68%;}.about-services.jsx-874357428 .col3.jsx-874357428 img.jsx-874357428{height:100%;position:absolute;right:-68%;}.about-services.jsx-874357428 .col3.jsx-874357428{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;height:63rem;}.about-services.jsx-874357428 .col1.jsx-874357428{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;height:63rem;}.about-services.jsx-874357428 .col2.jsx-874357428{width:43%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.ideology.jsx-874357428{padding-top:2rem;padding-bottom:10rem;background:#ffffff;}.ideology-heading.jsx-874357428{font-size:4.6rem;}.ideology-content.jsx-874357428{-webkit-letter-spacing:0.8rem;-moz-letter-spacing:0.8rem;-ms-letter-spacing:0.8rem;letter-spacing:0.8rem;text-transform:uppercase;margin-top:5.5rem;line-height:2;}.relative-items.jsx-874357428{z-index:3;position:relative;}.top.jsx-874357428{padding-top:21.6rem;background:#ffff20;text-align:center;padding-bottom:50rem;}.fun.jsx-874357428{font-size:1.1rem;-webkit-letter-spacing:1.65rem;-moz-letter-spacing:1.65rem;-ms-letter-spacing:1.65rem;letter-spacing:1.65rem;}.top-title.jsx-874357428{font-size:7.2rem;position:relative;z-index:3;}.bg-text.jsx-874357428{font-size:27rem;color:#ffffff;position:absolute;z-index:2;text-align:center;width:100%;top:1.5rem;line-height:0.8;}.prev.jsx-874357428{-webkit-transform:translateY(-9px);-ms-transform:translateY(-9px);transform:translateY(-9px);}@media only screen and (max-width:1320px){.about-services.jsx-874357428 .col1.jsx-874357428 img.jsx-874357428{left:-80%;}.about-services.jsx-874357428 .col3.jsx-874357428 img.jsx-874357428{right:-80%;}}@media only screen and (max-width:1200px){.about-services.jsx-874357428 .col1.jsx-874357428 img.jsx-874357428{left:-100%;}.about-services.jsx-874357428 .col3.jsx-874357428 img.jsx-874357428{right:-100%;}}@media only screen and (max-width:1050px){.about-services.jsx-874357428 .col1.jsx-874357428 img.jsx-874357428{left:-130%;}.about-services.jsx-874357428 .col3.jsx-874357428 img.jsx-874357428{right:-130%;}}@media only screen and (max-width:950px){.about-services.jsx-874357428 .col1.jsx-874357428 img.jsx-874357428{left:-180%;}.about-services.jsx-874357428 .col3.jsx-874357428 img.jsx-874357428{right:-180%;}}@media only screen and (max-width:768px){.bg-text.jsx-874357428{font-size:14rem;}.top-title.jsx-874357428{font-size:5.6rem;}.fun.jsx-874357428{-webkit-letter-spacing:0.6rem;-moz-letter-spacing:0.6rem;-ms-letter-spacing:0.6rem;letter-spacing:0.6rem;}.top.jsx-874357428{padding-bottom:25rem;}.ideology-content.jsx-874357428{-webkit-letter-spacing:0.32rem;-moz-letter-spacing:0.32rem;-ms-letter-spacing:0.32rem;letter-spacing:0.32rem;}.ideology.jsx-874357428{padding-top:10rem;padding-bottom:10rem;}.about-services.jsx-874357428{text-align:center;padding-left:5%;padding-right:5%;}.about-services.jsx-874357428 .col2.jsx-874357428{width:100%;}.about-services-list.jsx-874357428{font-size:4rem;padding-left:0;margin-top:9.5rem;}.about-services-wrapper.jsx-874357428{padding-top:10rem;}.storytellers-top-heading.jsx-874357428{font-size:4.6rem;}.storytellers-top.jsx-874357428{padding-top:9.5rem;padding-bottom:9.5rem;padding-left:5%;padding-right:5%;}.storytellers-text.jsx-874357428{margin-top:4.1rem;}.team.jsx-874357428 .slide1.jsx-874357428{padding-right:0;}.team.jsx-874357428{padding-left:0;padding-right:0;}.team.jsx-874357428 .slide2.jsx-874357428{padding-left:0;}.name.jsx-874357428{display:block;}.designation.jsx-874357428{display:block;margin-top:2.4rem;}.navigator.jsx-874357428{margin-top:3.5rem;font-size:4.6rem;}.inspire.jsx-874357428{font-size:4.6rem;}.brands.jsx-874357428{padding-left:15%;padding-right:15%;padding-top:10rem;padding-bottom:10rem;}.brands.jsx-874357428 .col1.jsx-874357428 .brand-image.jsx-874357428{padding-right:0;}.about-services.jsx-874357428 .col1.jsx-874357428,.about-services.jsx-874357428 .col3.jsx-874357428{display:none;}}@media only screen and (max-width:400px){.bg-text.jsx-874357428{font-size:12rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25cXERvY3VtZW50c1xcR2l0SHViXFxhbnRvbi5naXRodWIuaW9cXHBhZ2VzXFw0MDQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJvQixBQUdrQyxBQU1SLEFBT08sQUFJSSxBQUdFLEFBR0EsQUFHWCxBQU1hLEFBU0YsQUFHTixBQU9BLEFBR0MsQUFJQSxBQUlILEFBS0EsQUFJRixBQUdHLEFBSUQsQUFHRSxBQUdELEFBR0QsQUFJRyxBQVFILEFBR0ksQUFJSCxBQUlDLEFBTU4sQUFLRyxBQUdDLEFBR0osQUFLQSxBQUtGLEFBSUEsQUFJRCxBQU1RLEFBS0MsQUFHSyxBQU1aLEFBSVUsQUFNSCxBQUlBLEFBS0YsQUFVVyxBQUlmLEFBR0MsQUFLQSxBQUdDLEFBS0QsQUFHQyxBQUtELEFBR0MsQUFLRyxBQUdDLEFBR0ssQUFHQSxBQUdFLEFBR0wsQUFJRCxBQUtQLEFBR0ssQUFLRyxBQUdELEFBR0UsQUFNRixBQUdELEFBR0YsQUFJQyxBQUdGLEFBR0EsQUFJSSxBQUlELEFBR0MsQUFNRCxBQUdKLEFBS0csVUF6S0wsQUFvQk8sQUFpQ25CLENBaE1rQixBQW1NbEIsQUFLQSxBQVFBLEFBUUEsQUFnQ0EsQ0EvSGtCLEFBS0EsQUE2RWxCLEFBUUEsQUFRQSxDQXFGQSxDQTVSRixBQXFRRSxBQUdtQixDQTNOckIsQUFrREEsQUF3SWtCLEFBdUJDLEFBSWpCLENBaEtGLEFBNERnQixBQThDZCxBQStDQSxBQThCQSxBQVFBLENBN1BtQixBQUtGLEFBV25CLEFBU21CLEFBWW5CLEFBb0R1QixBQUt2QixBQW1CMEIsQUFJTCxBQXNEbkIsQUFnQ0EsQUFpQ0EsQUFHb0IsQ0E3U1YsQUFhQSxBQTZESyxBQVVqQixBQXNCZ0IsQUEySVMsQUFJTixBQWFqQixBQVlBLEFBb0JrQixDQTFQRSxBQU90QixBQThCQSxBQXFCeUIsQUFRVixBQThKVyxDQXROSixBQUlBLEFBaUNFLEFBOEVGLENBc0VwQixNQTlPUSxDQWFWLEFBd0pBLENBL0pVLENBeUhFLEFBS0MsQUFvRE8sQUF5RUMsQ0F1Qm5CLENBVUEsQ0F4TkYsQUFnQ0EsQUFJbUIsQ0E3R04sQUF3UE8sQ0F0THBCLEFBb0JBLEFBNEZhLEFBbUhYLEFBT29CLEVBL09FLENBdkRmLEFBZ0pZLENBa0JBLEFBNEVuQixDQXpNcUIsQUFvRnZCLENBMUVBLEFBSUEsQUE0Q0EsQUErQkEsQUF1SW1CLEVBakxELENBekZsQixDQU1XLEFBZ0lHLEFBSUEsQUF3Q2QsR0FLWSxBQXlFVixHQW5Kb0IsQUEySXBCLENBMU9GLEFBR0EsQUFHQSxDQXdSeUIsRUFyU3pCLEVBK0lBLEFBa0J5QixBQW1HTCxDQXBJcEIsQUFJQSxBQTZDb0IsRUEzSHBCLEFBNkJtQixFQS9DQSxVQW1FbkIsRUFHc0IsQUEySnBCLEFBaUNBLEVBcEhXLEVBOUZPLEFBOEVwQixFQTdIc0IsSUFOdEIsQUF5R3VCLEdBMkNWLEdBN0orQixHQWtLNUMsSUFuR0EsQ0ErRmtCLEdBOUlsQixJQStHNEIsQUE2RTFCLElBTUEsS0FuREYsWUFmQSxJQWhCcUIsa0JBQ0osQ0E1Q0UsYUE4QkssQUFleEIsS0E1Q0Esc0VBckZzQix3QkFtSHRCLDBCQWxIcUUsd0lBQ2hDLG1DQUNSLDhEQUNYLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXEFudG9uXFxEb2N1bWVudHNcXEdpdEh1YlxcYW50b24uZ2l0aHViLmlvXFxwYWdlc1xcNDA0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHtvcGVuTWVudSxzZXRNZW51QnRuQ29sb3J9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCJcclxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tICdyZWFjdC1hbmltYXRlLW9uLXNjcm9sbCc7XHJcbmltcG9ydCB7QU5JTUFUSU9OX0RVUkFUSU9OfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCByb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm91ck5vdEZvdXIoKXtcclxuXHJcbiAgICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKClcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPExheW91dCBwYWdlPVwiNDA0XCIgbmF2UG9zaXRpb249XCJhYnNvbHV0ZVwiIG5hdlRleHRDb2xvcj1cImJsYWNrXCIgbWVudUJ0bkNvbG9yPVwiYmxhY2tcIiBoaW5kaVRleHQ9XCJ3aGl0ZVwiIGZvb3RlclR5cGU9XCJ5ZWxsb3dcIj5cclxuICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnNwaXJlIHRleHQtY2VudGVyIGJnLXllbGxvdyBwYWRkZWQtY29udGVudFwiPlxyXG4gICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJzY3JvbGxGYWRlSW5cIiBkdXJhdGlvbj17QU5JTUFUSU9OX0RVUkFUSU9OfSBhbmltYXRlT25jZT17dHJ1ZX0gZGVsYXk9ezEwMH0+XHJcbiAgICAgIDxwPkVycm9yIE5vdCBGb3VuZC4uITwvcD4gICA8aDE+NDA0PC9oMT4gIDxiciBjbGFzc05hbWU9XCJoaWRlLWRlc2t0b3Agc2hvdy1tb2JpbGVcIiAvPlRha2UgbWUgdG8gPGJyLz5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tYmxhY2sgYnRuLXNlbmQnIG9uQ2xpY2s9eygpPT5yb3V0ZXIucHVzaCgnLycpfSA+IEhvbWU8L2J1dHRvbj4gXHJcbiAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLnRvcC13YXZle1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206MDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6MDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAud2F2ZXtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgYm90dG9tOjA7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICB6LWluZGV4OjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJyYW5kLWltYWdlcy13cmFwcGVye1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hbmltYXRlIC5mdW4gLmNoaWxke1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFuaW1hdGUgLnRvcC10aXRsZSAuY2hpbGR7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAuYW5pbWF0ZSAuYmctdGV4dCAuY2hpbGR7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjdzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hYm91dC1zZXJ2aWNlcy1saXN0IGxpIGF7XHJcbiAgICAgICAgICAgICAgY29sb3I6I2ZmZmZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWJvdXQtc2VydmljZXMtbGlzdCBsaSBhOmhvdmVye1xyXG4gICAgICAgICAgICAgIC8vIGZvbnQtZmFtaWx5OiBQb3BwaW5zTWVkaXVtSXRhbGljLHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWJvdXQtc2VydmljZXMtbGlzdCBsaXtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoNTQwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODAwbXMsIG9wYWNpdHkgNTAwbXM7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTouM3M7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcclxuICAgICAgICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxLjZyZW0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWJvdXQtc2VydmljZXMtbGlzdC5hbmltYXRlIGxpe1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnJhbmRze1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZmZmZjtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTMuMnJlbTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjEzLjJyZW07XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6MjByZW07XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206MjByZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJyYW5kcyAuY29sMSAuYnJhbmQtaW1hZ2V7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDo5cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5icmFuZHMgLmNvbDIgLmJyYW5kLWltYWdle1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDo0LjVyZW07XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDo0LjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJyYW5kcyAuY29sMyAuYnJhbmQtaW1hZ2V7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjQuNXJlbTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjQuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5zcGlyZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6NC42cmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOjEzLjNyZW07XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206MTMuM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2aWdhdG9ye1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTo0LjZyZW07XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDo5LjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdmlnYXRvciAudHh0e1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6MCAzcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZWFtLW1lbWJlci1pbmZve1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6My4ycmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGVhbS1tZW1iZXItaW5mbyAuZGVzaWduYXRpb257XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGVhbSAuc2xpZGUxe1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6NHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGVhbSAuc2xpZGUye1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDo0cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZWFte1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxMCU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDoxMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN0b3J5dGVsbGVycy10b3B7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6MTIuMnJlbTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbToxMS43cmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxNyU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDoxNyU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDojRTRFNEU0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zdG9yeXRlbGxlcnMtdG9wLWhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgLy8gZm9udC1zaXplOjguNnJlbTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6NC42cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zdG9yeXRlbGxlcnN7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo3LjNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnZpZXctbW9yZXtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOjMuM3JlbTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6MnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWJvdXQtc2VydmljZXMtd3JhcHBlcntcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6I2ZmZmZmZjtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxMHJlbTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbToxMHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWJvdXQtc2VydmljZXN7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZmxvdzpyb3cgbm93cmFwO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hYm91dC1zZXJ2aWNlcy1saXN0e1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWJvdXQtc2VydmljZXMtbGlzdCBsaSB7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWJvdXQtc2VydmljZXMgLmNvbDEgaW1ne1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgbGVmdDogLTY4JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWJvdXQtc2VydmljZXMgLmNvbDMgaW1ne1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IC02OCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFib3V0LXNlcnZpY2VzIC5jb2wze1xyXG4gICAgICAgICAgICAgIGZsZXg6MSAxIDA7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OjYzcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hYm91dC1zZXJ2aWNlcyAuY29sMXtcclxuICAgICAgICAgICAgICBmbGV4OjEgMSAwO1xyXG4gICAgICAgICAgICAgIGhlaWdodDo2M3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWJvdXQtc2VydmljZXMgLmNvbDJ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6NDMlO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWZsb3c6Y29sdW1uIHdyYXA7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWRlb2xvZ3l7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlkZW9sb2d5LWhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6NC42cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pZGVvbG9neS1jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6MC44cmVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1LjVyZW07XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDoyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yZWxhdGl2ZS1pdGVtc3tcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6MztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50b3B7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoyMS42cmVtO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmZjIwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTByZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZ1bntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjFyZW07XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzoxLjY1cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50b3AtdGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6Ny4ycmVtO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OjM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJnLXRleHR7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyN3JlbTtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgdG9wOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJldntcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTlweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEzMjBweCl7XHJcbiAgICAgICAgICAgICAgLmFib3V0LXNlcnZpY2VzIC5jb2wxIGltZ3tcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC04MCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5hYm91dC1zZXJ2aWNlcyAuY29sMyBpbWd7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTgwJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMDBweCl7XHJcbiAgICAgICAgICAgICAgLmFib3V0LXNlcnZpY2VzIC5jb2wxIGltZ3tcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuYWJvdXQtc2VydmljZXMgLmNvbDMgaW1ne1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xMDAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTA1MHB4KXtcclxuICAgICAgICAgICAgICAuYWJvdXQtc2VydmljZXMgLmNvbDEgaW1ne1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTEzMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5hYm91dC1zZXJ2aWNlcyAuY29sMyBpbWd7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTEzMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5NTBweCl7XHJcbiAgICAgICAgICAgICAgLmFib3V0LXNlcnZpY2VzIC5jb2wxIGltZ3tcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0xODAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuYWJvdXQtc2VydmljZXMgLmNvbDMgaW1ne1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xODAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgICAgICAgICAgIC5iZy10ZXh0e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjE0cmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudG9wLXRpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjUuNnJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZ1biB7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzowLjZyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC50b3B7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5pZGVvbG9neS1jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMzJyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5pZGVvbG9neSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTByZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTByZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5hYm91dC1zZXJ2aWNlc3tcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjUlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDo1JTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmFib3V0LXNlcnZpY2VzIC5jb2wye1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmFib3V0LXNlcnZpY2VzLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjkuNXJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmFib3V0LXNlcnZpY2VzLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTByZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5zdG9yeXRlbGxlcnMtdG9wLWhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0LjZyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5zdG9yeXRlbGxlcnMtdG9we1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDkuNXJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA5LjVyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6NSU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjUlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc3Rvcnl0ZWxsZXJzLXRleHR7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjQuMXJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnRlYW0gLnNsaWRlMSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGVhbXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDowO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGVhbSAuc2xpZGUyIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm5hbWV7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZGVzaWduYXRpb257XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoyLjRyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5uYXZpZ2F0b3J7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjMuNXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTo0LjZyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5pbnNwaXJle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjQuNnJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmJyYW5kc3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTUlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTUlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcmVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuYnJhbmRzIC5jb2wxIC5icmFuZC1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuYWJvdXQtc2VydmljZXMgLmNvbDEsLmFib3V0LXNlcnZpY2VzIC5jb2wze1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDAwcHgpe1xyXG4gICAgICAgICAgICAgIC5iZy10ZXh0e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjEycmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Anton\\\\Documents\\\\GitHub\\\\anton.github.io\\\\pages\\\\404.js */"));
}

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fycm93LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGVza3RvcE1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2FkaW5nSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy92aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzLzQwNC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB2aW1lby9wbGF5ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hbmltYXRlLW9uLXNjcm9sbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiQXJyb3ciLCJwcm9wcyIsImRpcmVjdGlvbiIsIkRlc2t0b3BNZW51IiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiZXJyb3IiLCJzZXRFcnJvciIsIm1lc3NhZ2VUZXh0Iiwic2V0TWVzc2FnZVRleHQiLCJtZXNzYWdlVGV4dFRvdWNoZWQiLCJzZXRNZXNzYWdlVGV4dFRvdWNoZWQiLCJtZXNzYWdlVGV4dFZhbGlkIiwic2V0TWVzc2FnZVRleHRWYWxpZCIsIm1vdXNlT3ZlckN1cnNvckVmZmVjdCIsImFkZENsYXNzVG9DdXJzb3IiLCJtb3VzZU91dEN1cnNvckVmZmVjdCIsInJlbW92ZUNsYXNzRnJvbUN1cnNvciIsImRlYm91bmNlIiwibWV0aG9kIiwiZGVsYXkiLCJjbGVhclRpbWVvdXQiLCJfdElkIiwic2V0VGltZW91dCIsImRIYW5kbGVTY3JvbGwiLCJ3aGl0ZSIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsImJvdW5kaW5nVmFscyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImhlaWdodCIsInNldE1lbnVCdG5Db2xvciIsImhhbmRsZVNjcm9sbCIsIm1vdXNlT3ZlcldoaXRlQ3Vyc29yIiwibW91c2VPdXRXaGl0ZUN1cnNvciIsIm1vdXNlT3ZlckJsYWNrQ3Vyc29yIiwiYWRkTW91c2VMaXN0ZW5lcnMiLCJmb3JFYWNoIiwiZWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZU1vdXNlTGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldFdoaXRlTWVudVRyaWdnZXJzIiwidXNlRWZmZWN0Iiwid2luZG93Iiwic2VuZE1lc3NhZ2UiLCJmZXRjaCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3VsdCIsInN0YXR1cyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImVtYWlsSW5TdHJpbmciLCJ0ZXh0IiwicmUiLCJ0ZXN0IiwidmFsaWRhdGVNZXNzYWdlIiwib25NZXNzYWdlQ2hhbmdlIiwidHh0IiwiY29tbW9uIiwid2luZG93SGVpZ2h0IiwibWVudU9wZW4iLCJwYWdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwU3RhdGVUb1Byb3BzIiwiY29ubmVjdCIsIkZvb3RlciIsImJ0bkNvbnRlbnQiLCJ0eXBlIiwibm9XYXZlRGVza3RvcCIsIm5vV2F2ZU1vYmlsZSIsIkNvbXBvbmVudCIsInJlcXVpcmUiLCJMYXlvdXQiLCJjb25zdHJ1Y3RvciIsImlubmVyV2lkdGgiLCJNT0JJTEVfQlJFQUtQT0lOVCIsInNldFdpbmRvdyIsImlubmVySGVpZ2h0IiwibW9kZSIsInN0YXRlIiwic2V0U3RhdGUiLCJtb3VzZVgiLCJtb3VzZVkiLCJ0cmFpbGluZ1giLCJ0cmFpbGluZ1kiLCJkaWZmWCIsImRpZmZZIiwiY3Vyc29yIiwiY3VycmVudCIsInN0eWxlIiwidHJhbnNmb3JtIiwiY3Vyc29yVHJhaWxpbmciLCJhbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1vdmVDdXJzb3IiLCJldnQiLCJjbGllbnRYIiwiY2xpZW50WSIsIm1vdXNlQ2lyY2xlQ29sb3IiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0V2luIiwib25Nb3VzZU1vdmUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic2hvd19mdWxsc2NyZWVuX3ZpZGVvIiwidmlkZW8iLCJnZXRFbGVtZW50QnlJZCIsInZpZGVvX3R5cGUiLCJvbmNhbnBsYXkiLCJwbGF5IiwicGxheWVyIiwiUGxheWVyIiwicmVuZGVyIiwidmlkZW9fc3JjIiwibWVudV9idG5fY29sb3IiLCJoaWRlRnVsbHNjcmVlblZpZGVvIiwic3RvcFByb3BhZ2F0aW9uIiwidmlkZW9faWQiLCJjdXJzb3JDbGFzc2VzIiwiam9pbiIsImhpbmRpVGV4dCIsIm5hdlBvc2l0aW9uIiwibmF2VGV4dENvbG9yIiwibWVudUJ0bkNvbG9yIiwiY2hpbGRyZW4iLCJmb290ZXJUeXBlIiwiTG9hZGluZ0ljb24iLCJzaG93Iiwid2lkdGgiLCJ3ZWlnaHQiLCJjZW50ZXJlZCIsImNvbG9yIiwiTmF2aWdhdGlvbiIsIm1lbnVCdG5DbGljayIsInRvZ2dsZU1lbnUiLCJWaWRlb0VtYmVkIiwiaHRtbF9pZCIsInZpZGVvaWQiLCJsb29wIiwibW9kdWxlIiwiZXhwb3J0cyIsIkFOSU1BVElPTl9EVVJBVElPTiIsIlNFTkRHUklEX0FQSV9LRVkiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJyb3V0ZXIiLCJocmVmIiwiZXZlbnQiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImhhc1dhcm5lZCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkSHJlZiIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIndhcm4iLCJQcm9wVHlwZXMiLCJleGFjdCIsIkxpbmsiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsInVwZGF0ZSIsIm1vZCIsImRhdGEiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJvcHRpb25zIiwicHJlcGFyZVVybEFzIiwiY2hhbmdlIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJjbGVhbmVkQXMiLCJkZWxCYXNlUGF0aCIsInBhcnNlZCIsInRyeVBhcnNlUmVsYXRpdmVVcmwiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiUHJvbWlzZSIsImZldGNoQ29tcG9uZW50IiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwic2VhcmNoUGFyYW1zIiwiQXJyYXkiLCJpdGVtIiwic2VhcmNoUGFyYW1zTGlzdCIsImtleSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJvcHRpb25hbCIsInJlcGVhdCIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInNlZ21lbnQiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5Iiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkZvdXJOb3RGb3VyIiwidXNlUm91dGVyIiwiU0VUX1dJTkRPVyIsIlRPR0dMRV9NRU5VIiwiT1BFTl9NRU5VIiwiQUREX0NMQVNTX1RPX0NVUlNPUiIsIlJFTU9WRV9DTEFTU19GUk9NX0NVUlNPUiIsIkhJREVfRlVMTF9TQ1JFRU5fVklERU8iLCJTSE9XX0ZVTExfU0NSRUVOX1ZJREVPIiwiU0VUX01FTlVfQlROX0NPTE9SIiwic2hvd0Z1bGxzY3JlZW5WaWRlbyIsIndpbmRvd1dpZHRoIiwib3Blbk1lbnUiLCJib29sIiwiY2xzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdD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akMsU0FBTztBQUNIN1QsUUFBSSxFQUFDb1QsbUJBREY7QUFFSFM7QUFGRyxHQUFQO0FBSUg7QUFDTSxTQUFTN1csZUFBVCxDQUF5QnFILEtBQXpCLEVBQStCO0FBQ2xDLFNBQU87QUFDSHJFLFFBQUksRUFBQ3dULGtCQURGO0FBRUhuUDtBQUZHLEdBQVA7QUFJSDtBQUNNLFNBQVN2SSxxQkFBVCxDQUErQitYLEdBQS9CLEVBQW1DO0FBQ3RDLFNBQU87QUFDSDdULFFBQUksRUFBQ3FULHdCQURGO0FBRUhRO0FBRkcsR0FBUDtBQUlILEM7Ozs7Ozs7Ozs7O0FDeERELDBDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzLzQwNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvNDA0LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFycm93KHByb3BzKXtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvaW50ZXIgJHtwcm9wcy5kaXJlY3Rpb259YH0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYXJyb3cuc3ZnXCIgY2xhc3NOYW1lPVwiYXJyb3ctaW1hZ2VcImFsdD0naW1hZ2UnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuYXJyb3ctaW1hZ2V7XG4gICAgICAgICAgICAgICAgd2lkdGg6Mi44cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvaW50ZXIubGVmdHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDE4MGRlZykgdHJhbnNsYXRlWSgtMTVweClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb2ludGVyLmRvd257XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb2ludGVye1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn0iLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEFycm93IGZyb20gJy4uL2NvbXBvbmVudHMvYXJyb3cnXG5pbXBvcnQgTG9hZGluZ0ljb24gZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkaW5nSWNvbidcbmltcG9ydCB7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7YWRkQ2xhc3NUb0N1cnNvcixyZW1vdmVDbGFzc0Zyb21DdXJzb3Isc2V0TWVudUJ0bkNvbG9yfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zJ1xuZnVuY3Rpb24gRGVza3RvcE1lbnUocHJvcHMpe1xuICAgIHZhciBbbG9hZGluZyxzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIHZhciBbc3VjY2VzcyxzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIHZhciBbZXJyb3Isc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgdmFyIFttZXNzYWdlVGV4dCxzZXRNZXNzYWdlVGV4dF0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIHZhciBbbWVzc2FnZVRleHRUb3VjaGVkLHNldE1lc3NhZ2VUZXh0VG91Y2hlZF0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIHZhciBbbWVzc2FnZVRleHRWYWxpZCxzZXRNZXNzYWdlVGV4dFZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGZ1bmN0aW9uIG1vdXNlT3ZlckN1cnNvckVmZmVjdCgpe1xuICAgICAgICBwcm9wcy5hZGRDbGFzc1RvQ3Vyc29yKFwibGFyZ2VyXCIpXG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vdXNlT3V0Q3Vyc29yRWZmZWN0KCl7XG4gICAgICAgIHByb3BzLnJlbW92ZUNsYXNzRnJvbUN1cnNvcihcImxhcmdlclwiKVxuICAgIH1cbiAgICBmdW5jdGlvbiBkZWJvdW5jZShtZXRob2QsIGRlbGF5KSB7XG4gICAgICAgIGNsZWFyVGltZW91dChtZXRob2QuX3RJZCk7XG4gICAgICAgIG1ldGhvZC5fdElkPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBtZXRob2QoKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkSGFuZGxlU2Nyb2xsKCl7XG4gICAgICAgIGxldCB3aGl0ZSA9IGZhbHNlXG4gICAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aGl0ZS1tZW51LWJ0bicpXG4gICAgICAgIGZvcihsZXQgaT0wO2k8ZWxlbWVudHMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBsZXQgYm91bmRpbmdWYWxzID0gZWxlbWVudHNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIGlmKGJvdW5kaW5nVmFscy50b3AgPCAwICYmIChib3VuZGluZ1ZhbHMudG9wICogLTEgPCBib3VuZGluZ1ZhbHMuaGVpZ2h0KSl7XG4gICAgICAgICAgICAgICAgd2hpdGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoaXRlID0gZmFsc2UgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYod2hpdGUpXG4gICAgICAgICAgICBwcm9wcy5zZXRNZW51QnRuQ29sb3IoXCJ3aGl0ZVwiKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBwcm9wcy5zZXRNZW51QnRuQ29sb3IoXCJibGFja1wiKVxuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKXtcbiAgICAgICAgLy8gZGVib3VuY2UoZEhhbmRsZVNjcm9sbCwgNTApO1xuICAgICAgICAvLyBkSGFuZGxlU2Nyb2xsKClcbiAgICB9XG4gICAgZnVuY3Rpb24gbW91c2VPdmVyV2hpdGVDdXJzb3IoKXtcbiAgICAgICAgcHJvcHMuYWRkQ2xhc3NUb0N1cnNvcihcIndoaXRlXCIpXG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vdXNlT3V0V2hpdGVDdXJzb3IoKXtcbiAgICAgICAgcHJvcHMucmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKFwid2hpdGVcIilcbiAgICB9XG4gICAgZnVuY3Rpb24gbW91c2VPdmVyQmxhY2tDdXJzb3IoKXtcbiAgICAgICAgcHJvcHMucmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKFwid2hpdGVcIilcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkTW91c2VMaXN0ZW5lcnMoKXtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aGl0ZS1jdXJzb3InKS5mb3JFYWNoKGVsZT0+e1xuICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLG1vdXNlT3ZlcldoaXRlQ3Vyc29yKVxuICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLG1vdXNlT3V0V2hpdGVDdXJzb3IpXG4gICAgICB9KVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsYWNrLWN1cnNvcicpLmZvckVhY2goZWxlPT57XG4gICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLG1vdXNlT3ZlckJsYWNrQ3Vyc29yKVxuICAgICAgfSlcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTW91c2VMaXN0ZW5lcnMoKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndoaXRlLWN1cnNvcicpLmZvckVhY2goZWxlPT57XG4gICAgICAgICAgICBlbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIixtb3VzZU92ZXJXaGl0ZUN1cnNvcilcbiAgICAgICAgICAgIGVsZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLG1vdXNlT3V0V2hpdGVDdXJzb3IpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFdoaXRlTWVudVRyaWdnZXJzKCl7XG4gICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aGl0ZS1tZW51LWJ0bicpLmZvckVhY2goZWxlPT57XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlbGUpXG4gICAgICAgIC8vIH0pXG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICAvLyBzZXRXaGl0ZU1lbnVUcmlnZ2VycygpXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGRIYW5kbGVTY3JvbGwpXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIGFkZE1vdXNlTGlzdGVuZXJzKClcbiAgICAgICAgfSw1MDAwKVxuICAgICAgICByZXR1cm4gKCk9PntcbiAgICAgICAgICAgIHJlbW92ZU1vdXNlTGlzdGVuZXJzKClcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGRIYW5kbGVTY3JvbGwpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcbiAgICBmdW5jdGlvbiBzZW5kTWVzc2FnZSgpe1xuICAgICAgICBpZihtZXNzYWdlVGV4dFZhbGlkKXtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgICAgIGZldGNoKGAvYXBpL21haWxgLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7bWVzc2FnZTptZXNzYWdlVGV4dH0pIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcz0+cmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdD0+e1xuICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpXG4gICAgICAgICAgICAgICAgICAgIHNldFN1Y2Nlc3ModHJ1ZSlcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKHRydWUpXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycj0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICBzZXRFcnJvcih0cnVlKVxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICB9KSBcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBlbWFpbEluU3RyaW5nKHRleHQpIHsgXG4gICAgICAgIHZhciByZSA9IC8oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKS87XG4gICAgICAgIHJldHVybiByZS50ZXN0KHRleHQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZU1lc3NhZ2UoKXtcbiAgICAgICAgaWYoIWVtYWlsSW5TdHJpbmcobWVzc2FnZVRleHQpKVxuICAgICAgICAgICAgc2V0TWVzc2FnZVRleHRWYWxpZChmYWxzZSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc2V0TWVzc2FnZVRleHRWYWxpZCh0cnVlKSBcbiAgICB9XG4gICAgZnVuY3Rpb24gb25NZXNzYWdlQ2hhbmdlKHR4dCl7XG4gICAgICAgIHNldE1lc3NhZ2VUZXh0VG91Y2hlZCh0cnVlKVxuICAgICAgICBzZXRNZXNzYWdlVGV4dCh0eHQpXG4gICAgICAgIHZhbGlkYXRlTWVzc2FnZSgpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZGVza3RvcC1tZW51IHdoaXRlLWN1cnNvciAke3Byb3BzLmNvbW1vbi5tZW51T3Blbj9cInNob3dcIjpcIlwifWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbDFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wxLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1sb2dvIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL01lbnVMb2dvLnN2Z1wiYWx0PSdpbWFnZScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3Bwb3NhYmxlIFRodW1iczxici8+IEluZGVwZW5kZW50IEFnZW5jeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0cyBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbDJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWhlYWRpbmcgZnV0dXJhLWxpZ2h0IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPk1FTlU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51IHBvcHBpbnMtcmVndWxhciBsYXJnZXItY3Vyc29yIGxpc3Qtc3R5bGUtbm9uZSBsYXJnZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj48TGluayBocmVmPVwiL1wiPjxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2LXRleHQgbGFyZ2VyLWN1cnNvciAke3Byb3BzLnBhZ2U9PVwiaG9tZVwiP1wiY3VycmVudFwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYVwiPkhvbWU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiXCI+SG9tZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj48TGluayBocmVmPVwiL3Byb2plY3RzXCI+PGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXYtdGV4dCBsYXJnZXItY3Vyc29yICR7cHJvcHMucGFnZT09XCJwcm9qZWN0c1wiP1wiY3VycmVudFwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYVwiPlByb2plY3RzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYlwiPlByb2plY3RzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPjxMaW5rIGhyZWY9XCIvYWJvdXRcIj48YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdi10ZXh0IGxhcmdlci1jdXJzb3IgJHtwcm9wcy5wYWdlPT1cImFib3V0XCI/XCJjdXJyZW50XCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhXCI+QWJvdXQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiXCI+QWJvdXQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+PExpbmsgaHJlZj1cIi9zZXJ2aWNlc1wiPjxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2LXRleHQgbGFyZ2VyLWN1cnNvciAke3Byb3BzLnBhZ2U9PVwic2VydmljZXNcIj9cImN1cnJlbnRcIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFcIj5TZXJ2aWNlczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJcIj5TZXJ2aWNlczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj48TGluayBocmVmPVwiL2NvbnRhY3RcIj48YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdi10ZXh0IGxhcmdlci1jdXJzb3IgJHtwcm9wcy5wYWdlPT1cImNvbnRhY3RcIj9cImN1cnJlbnRcIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFcIj5Db250YWN0PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYlwiPkNvbnRhY3Q8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+PExpbmsgaHJlZj1cIi9ibG9nXCI+PGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXYtdGV4dCBsYXJnZXItY3Vyc29yICR7cHJvcHMucGFnZT09XCJibG9nXCI/XCJjdXJyZW50XCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhXCI+QmxvZzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJcIj5CbG9nPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAge3N1Y2Nlc3M/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoYW5rIHlvdSBmb3IgeW91ciBtZXNzYWdlLiBXZSB3aWxsIGJlIGluIHRvdWNoIHNvb24hPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyIGNoaWxkIHBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bWVzc2FnZVRleHR9IG9uQ2hhbmdlPXsoZSk9Pm9uTWVzc2FnZUNoYW5nZShlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiU2VuZCBhIE1lc3NhZ2VcIiBjbGFzc05hbWU9XCJjb250YWN0LWlucHV0IHVuZGVybGluZWQtd2hpdGUtaW5wdXQgd2lkdGgtMTAwXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmc/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSWNvbiBzaG93PVwidHJ1ZVwiIHdpZHRoPVwiMi41cmVtXCIgaGVpZ2h0PVwiMi41cmVtXCIgd2VpZ2h0PVwidGhpblwiIGNlbnRlcmVkPVwidHJ1ZVwiIGNvbG9yPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCk9PnNlbmRNZXNzYWdlKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeyFtZXNzYWdlVGV4dFZhbGlkICYmIG1lc3NhZ2VUZXh0VG91Y2hlZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tc2dcIj5NZXNzYWdlIHNob3VsZCBjb250YWluIGFuIGVtYWlsIGFkZHJlc3MuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge2Vycm9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLW1zZ1wiPlRoZXJlIHdhcyBhbiB1bmV4cGVjdGVkIGVycm9yIHNlbmRpbmcgeW91ciBtZXNzYWdlLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZ3VhZ2VcIj5MYW5ndWFnZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzLXRpdGxlIHNsaWdodGx5LWxhcmdlci10ZXh0XCI+T3Bwb3NhYmxlIFRodW1iczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzcy10ZXh0IGZ1dHVyYS1ib29rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbnRseSB3b3JraW5nIG91dCBvZiBsaXZpbmcgcm9vbXMgYWNyb3NzIEluZGlhLjxiciAvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2XigJlsbCB1cGRhdGUgb3VyIG9mZmljZSBhZGRyZXNzIHdoZW4gdGhlIHdvcmxk4oCZcyBhIHRhZCBzYWZlciB0byBsaXZlIGluLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5lcnJvci1tc2d7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3QtaW5wdXR7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjMuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0LWFycm93e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hZGRyZXNzLXRleHR7XG4gICAgICAgICAgICAgICAgY29sb3I6I2EwYTBhMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hZGRyZXNze1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sYW5ndWFnZXtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGluc1JlZ3VsYXIsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjUuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYW1le1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIuMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yaWdodHN7XG4gICAgICAgICAgICAgICAgY29sb3I6Izk2OTk5QztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnV7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDozLjRyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1oZWFkaW5ne1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjRyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSBsaXtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoNTQwZGVnKTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODAwbXMsIG9wYWNpdHkgNTAwbXM7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTouM3M7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2hvdyAubWVudSBsaXtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSBsaSBhe1xuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0LjlyZW07XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYtdGV4dCAuYntcbiAgICAgICAgICAgICAgICBjb2xvcjojRjlFRDMyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdi10ZXh0e1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjJzIGN1YmljLWJlemllciguMTksMSwuMjIsMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2LXRleHQuY3VycmVudHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgbGkgYTpob3ZlciBzcGFue1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTA1JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSBsaSBhOmhvdmVye1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbDF7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zUmVndWxhcixzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICBmb250LXNpemU6MS40cmVtO1xuICAgICAgICAgICAgICAgIC8vIGZvbnQtZmFtaWx5OiBOZXVmcmVpdCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBGdXR1cmFMaWdodCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBGdXR1cmFCb29rLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIC8vZm9udC1mYW1pbHk6IEZ1dHVyYU1EQlQsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29sMS1jb250ZW50e1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW46YXV0bztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXNrdG9wLW1lbnV7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICB6LWluZGV4Ojk5NjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMwMDAwMDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OjA7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDYwMG1zO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NywgMCwgMC4xNzUsIDEpO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRlc2t0b3AtbWVudS5zaG93e1xuICAgICAgICAgICAgICAgIGhlaWdodDoke3Byb3BzLmNvbW1vbi53aW5kb3dIZWlnaHR9cHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6c2Nyb2xsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnQtd3JhcHBlcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MTQuNHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGlsZHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNob3cgLmNoaWxke1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb2wxe1xuICAgICAgICAgICAgICAgIHdpZHRoOjMyLjclO1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbDJ7XG4gICAgICAgICAgICAgICAgd2lkdGg6MzUuNjUlO1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbDN7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTIuOSU7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAudW5kZXJsaW5lZC13aGl0ZS1pbnB1dHtcbiAgICAgICAgICAgIC8vICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCl7XG4gICAgICAgICAgICAgICAgLm1lbnUgbGkgYTpob3ZlciAubmF2LXRleHR7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXJlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcbiAgICAgICAgICAgICAgICAuZXJyb3ItbXNne1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRlbnQtd3JhcHBlcntcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OmNvbHVtbiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjhyZW07XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDo1JTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDo1JTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbDF7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOjM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb2wye1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICBvcmRlcjoxO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbDN7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOjI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjNyZW07XG4gICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgICAgIC5tZW51LWxvZ28sLm5hbWV7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29sMS1jb250ZW50e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoycmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmFtZXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmlnaHRze1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjFyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hZGRyZXNze1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjNyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb2wzIC5pbnB1dC13cmFwcGVye1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46YXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbDMgLnVuZGVybGluZWQtd2hpdGUtaW5wdXR7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoe2NvbW1vbn0pe1xuICAgIHJldHVybiB7Y29tbW9ufVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMse2FkZENsYXNzVG9DdXJzb3IscmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yLHNldE1lbnVCdG5Db2xvcn0pKERlc2t0b3BNZW51KSIsImltcG9ydCBMb2FkaW5nSWNvbiBmcm9tICcuL2xvYWRpbmdJY29uJ1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIocHJvcHMpe1xuICAgIHZhciBbbG9hZGluZyxzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIHZhciBbc3VjY2VzcyxzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIHZhciBbZXJyb3Isc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgdmFyIFttZXNzYWdlVGV4dCxzZXRNZXNzYWdlVGV4dF0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIHZhciBbbWVzc2FnZVRleHRUb3VjaGVkLHNldE1lc3NhZ2VUZXh0VG91Y2hlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICB2YXIgW21lc3NhZ2VUZXh0VmFsaWQsc2V0TWVzc2FnZVRleHRWYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBidG5Db250ZW50ID0gbG9hZGluZz88TG9hZGluZ0ljb24gc2hvdz1cInRydWVcIiB3aWR0aD1cIjNyZW1cIiBoZWlnaHQ9XCIzcmVtXCIgd2VpZ2h0PVwidGhpblwiIGNlbnRlcmVkPVwidHJ1ZVwiIGNvbG9yPXtgJHtwcm9wcy50eXBlPT1cInllbGxvd1wiP1wid2hpdGVcIjpcImJsYWNrXCJ9YH0gLz46XCJTRU5EXCJcbiAgICBmdW5jdGlvbiBzZW5kTWVzc2FnZSgpe1xuICAgICAgICBpZihtZXNzYWdlVGV4dFZhbGlkKXtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgICAgIGZldGNoKGAvYXBpL21haWxgLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7bWVzc2FnZTptZXNzYWdlVGV4dH0pIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcz0+cmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdD0+e1xuICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpXG4gICAgICAgICAgICAgICAgICAgIHNldFN1Y2Nlc3ModHJ1ZSlcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKHRydWUpXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycj0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICBzZXRFcnJvcih0cnVlKVxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICB9KSBcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBlbWFpbEluU3RyaW5nKHRleHQpIHsgXG4gICAgICAgIHZhciByZSA9IC8oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKS87XG4gICAgICAgIHJldHVybiByZS50ZXN0KHRleHQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZU1lc3NhZ2UoKXtcbiAgICAgICAgaWYoIWVtYWlsSW5TdHJpbmcobWVzc2FnZVRleHQpKVxuICAgICAgICAgICAgc2V0TWVzc2FnZVRleHRWYWxpZChmYWxzZSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc2V0TWVzc2FnZVRleHRWYWxpZCh0cnVlKSBcbiAgICB9XG4gICAgZnVuY3Rpb24gb25NZXNzYWdlQ2hhbmdlKHR4dCl7XG4gICAgICAgIHNldE1lc3NhZ2VUZXh0KHR4dClcbiAgICAgICAgc2V0TWVzc2FnZVRleHRUb3VjaGVkKHRydWUpXG4gICAgICAgIHZhbGlkYXRlTWVzc2FnZSgpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17YHBhZGRlZC1jb250ZW50ICR7cHJvcHMudHlwZT09XCJ5ZWxsb3dcIj9cInllbGxvd1wiOlwiYmxhY2sgd2hpdGUtbWVudS1idG4gd2hpdGUtY3Vyc29yXCJ9ICR7cHJvcHMubm9XYXZlRGVza3RvcD9cIm5vLXdhdmUtZGVza3RvcFwiOlwiXCJ9ICR7cHJvcHMubm9XYXZlTW9iaWxlP1wibm8td2F2ZS1tb2JpbGVcIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29sIGxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZHJlc3MtaGVhZGluZyBiaWdnZXItY2FzbG9uLWxldHRlci1zcGFjaW5nXCI+QWRkcmVzczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZHJlc3MtdGl0bGUgc2xpZ2h0bHktbGFyZ2VyLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wcG9zYWJsZSBUaHVtYnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkciBmdXR1cmEtYm9va1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VycmVudGx5IHdvcmtpbmcgb3V0IG9mIGxpdmluZyByb29tcyBhY3Jvc3MgSW5kaWEuPGJyIGNsYXNzTmFtZT1cImhpZGUtZGVza3RvcCBzaG93LW1vYmlsZVwiIC8+IFdl4oCZbGwgdXBkYXRlIG91ciBvZmZpY2UgYWRkcmVzcyB3aGVuIHRoZSB3b3JsZOKAmXMgPGJyIGNsYXNzTmFtZT1cImhpZGUtZGVza3RvcCBzaG93LW1vYmlsZVwiIC8+YSB0YWQgc2FmZXIgdG8gbGl2ZSBpbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImdvb2dsZS1tYXAtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Hb29nbGUgTWFwPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWFpbFwiPmluZm9Ab3Bwb3NhYmxldGh1bWJzLmluPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbCByaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXJpZ2h0LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWNjZXNzP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+VGhhbmsgeW91IGZvciB5b3VyIG1lc3NhZ2UuIFdlIHdpbGwgYmUgaW4gdG91Y2ggc29vbiE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnR5cGU9PVwieWVsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bWVzc2FnZVRleHR9IG9uQ2hhbmdlPXsoZSk9Pm9uTWVzc2FnZUNoYW5nZShlLnRhcmdldC52YWx1ZSl9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCIgY2xhc3NOYW1lPVwidW5kZXJsaW5lZC1ibGFjay1pbnB1dFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bWVzc2FnZVRleHR9IG9uQ2hhbmdlPXsoZSk9Pm9uTWVzc2FnZUNoYW5nZShlLnRhcmdldC52YWx1ZSl9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCIgY2xhc3NOYW1lPVwidW5kZXJsaW5lZC13aGl0ZS1pbnB1dFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtgYnRuIGJ0bi13aGl0ZSBidG4tc2VuZCAke3Byb3BzLnR5cGU9PVwieWVsbG93XCI/XCJidG4tYmxhY2tcIjpcImJ0bi13aGl0ZVwifWB9IG9uQ2xpY2s9eygpPT5zZW5kTWVzc2FnZSgpfT57YnRuQ29udGVudH08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW1lc3NhZ2VUZXh0VmFsaWQgJiYgbWVzc2FnZVRleHRUb3VjaGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItbXNnXCI+TWVzc2FnZSBzaG91bGQgY29udGFpbiBhbiBlbWFpbCBhZGRyZXNzLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tc2dcIj5UaGVyZSB3YXMgYW4gdW5leHBlY3RlZCBlcnJvciBzZW5kaW5nIHlvdXIgbWVzc2FnZS48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsIHNsaWdodGx5LWxhcmdlci10ZXh0IGZ1dHVyYS1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9vcHBvc2FibGVfdGh1bWJzX29mZmljaWFsL1wiIHRhcmdldD1cIl9ibGFua1wiPklOU1RBR1JBTTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL29wcG9zYWJsZS10aHVtYnMtYmIxYTlhMWI0L1wiIHRhcmdldD1cIl9ibGFua1wiPkxJTktFRElOPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vb3Bwb3NhYmxlLnRodW1icy43NTBcIiB0YXJnZXQ9XCJfYmxhbmtcIj5GQUNFQk9PSzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly92aW1lby5jb20vdXNlcjk3NzM1MjM3XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VklNRU88L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmVycm9yLW1zZ3tcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc29jaWFsIGF7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOmluaGVyaXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zb2NpYWwgYTpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6aW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC51bmRlcmxpbmVkLXdoaXRlLWlucHV0LC51bmRlcmxpbmVkLWJsYWNrLWlucHV0e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDozNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC43NXJlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb250YWN0LWZvcm17XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGFjdC1mb3JtIC51bmRlcmxpbmVkLXdoaXRlLWlucHV0LC5jb250YWN0LWZvcm0gLnVuZGVybGluZWQtYmxhY2staW5wdXR7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDoycmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc29jaWFse1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNvY2lhbCB1bCBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzo0LjI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zb2NpYWwgdWwgbGk6bm90KDpsYXN0LWNoaWxkKXtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc29jaWFsIHVse1xuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZ29vZ2xlLW1hcC1saW5rIGF7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOmluaGVyaXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3Rlci55ZWxsb3cgLmFkZHJlc3MtaGVhZGluZ3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IzAxMDEwMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyLmJsYWNrIC5hZGRyZXNzLWhlYWRpbmd7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hZGRyZXNze1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjQuMXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyLmJsYWNre1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjojZmZmZmZmO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMwMDAwMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3Rlci55ZWxsb3d7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiMwMDAwMDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZmYyMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVye1xuICAgICAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgLy8gYm90dG9tOjA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIC8vei1pbmRleDoxO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo0cmVtO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo1cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZW1haWx7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NS4ycmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZm9vdGVyLWNvbC5sZWZ0e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5mb290ZXItY29sLnJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZm9vdGVyLXJpZ2h0LXdyYXB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyLm5vLXdhdmUtZGVza3RvcHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MTByZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjYwcHgpe1xuICAgICAgICAgICAgICAgICAgICAuc29jaWFsIHVsIGxpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjNyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1zZW5ke1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5lcnJvci1tc2d7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpe1xuICAgICAgICAgICAgICAgICAgICAuY29udGFjdC1mb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDZyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5idG4tc2VuZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc29jaWFse1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo5cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNvY2lhbCB1bCBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjYuNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLWNvbC5yaWdodHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXItY29sLmxlZnR7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci1yaWdodC13cmFwe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5lcnJvci1tc2d7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufSIsImNvbnN0IHsgQ29tcG9uZW50IH0gPSByZXF1aXJlKFwicmVhY3RcIik7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtzZXRXaW5kb3csYWRkQ2xhc3NUb0N1cnNvcixyZW1vdmVDbGFzc0Zyb21DdXJzb3IsaGlkZUZ1bGxzY3JlZW5WaWRlb30gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQgRGVza3RvcE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9kZXNrdG9wTWVudSdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7TU9CSUxFX0JSRUFLUE9JTlR9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBWaWRlbyBmcm9tICcuLi9jb21wb25lbnRzL3ZpZGVvJ1xuaW1wb3J0IFBsYXllciBmcm9tICdAdmltZW8vcGxheWVyJ1xuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtb3VzZVg6IDAsXG4gICAgICAgICAgICBtb3VzZVk6IDAsXG4gICAgICAgICAgICB0cmFpbGluZ1g6IDAsXG4gICAgICAgICAgICB0cmFpbGluZ1k6IDAsXG4gICAgICAgICAgICBtb2RlOlwibGFuZHNjYXBlXCIsXG4gICAgICAgICAgICBtb3VzZUNpcmNsZUNvbG9yOlwiYmxhY2tcIlxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3Vyc29yID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMuY3Vyc29yVHJhaWxpbmcgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25GcmFtZSA9IG51bGw7XG4gICAgfVxuICAgIHNldFdpbiA9ICgpPT57XG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gTU9CSUxFX0JSRUFLUE9JTlQpXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldFdpbmRvdyh3aW5kb3cuaW5uZXJXaWR0aCx3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgbW9kZSA9IHdpbmRvdy5pbm5lcldpZHRoPHdpbmRvdy5pbm5lckhlaWdodD9cInBvcnRyYWl0XCI6XCJsYW5kc2NhcGVcIlxuICAgICAgICAgICAgaWYobW9kZSE9dGhpcy5zdGF0ZS5tb2RlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldFdpbmRvdyh3aW5kb3cuaW5uZXJXaWR0aCx3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bW9kZX0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbW92ZUN1cnNvciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBtb3VzZVgsIG1vdXNlWSwgdHJhaWxpbmdYLCB0cmFpbGluZ1kgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGRpZmZYID0gbW91c2VYIC0gdHJhaWxpbmdYO1xuICAgICAgICBjb25zdCBkaWZmWSA9IG1vdXNlWSAtIHRyYWlsaW5nWTtcbiAgICAgICAgLy8gIE51bWJlciBpbiBleHByZXNzaW9uIGlzIGNvZWZpY2llbnQgb2YgdGhlIGRlbGF5LiAxMCBmb3IgZXhhbXBsZS4gWW91IGNhbiBwbGF5IHdpdGggaXQuIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB0cmFpbGluZ1g6IHRyYWlsaW5nWCArIGRpZmZYIC8gNSxcbiAgICAgICAgICB0cmFpbGluZ1k6IHRyYWlsaW5nWSArIGRpZmZZIC8gNSxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAvLyBVc2luZyByZWZzIGFuZCB0cmFuc2Zvcm0gZm9yIGJldHRlciBwZXJmb3JtYW5jZS5cbiAgICAgICAgICB0aGlzLmN1cnNvci5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke21vdXNlWH1weCwgJHttb3VzZVl9cHgsIDApYDtcbiAgICAgICAgICB0aGlzLmN1cnNvclRyYWlsaW5nLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7dHJhaWxpbmdYfXB4LCAke3RyYWlsaW5nWX1weCwgMClgO1xuICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlQ3Vyc29yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uTW91c2VNb3ZlID0gKGV2dCkgPT4ge1xuICAgICAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IGV2dDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbW91c2VYOiBjbGllbnRYIC0gNSxcbiAgICAgICAgICBtb3VzZVk6IGNsaWVudFkgLSA1LFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gdmFyIGVsZW1lbnRNb3VzZUlzT3ZlciA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoY2xpZW50WCwgY2xpZW50WSlcbiAgICAgICAgLy8gdmFyIG1vdXNlQ2lyY2xlQ29sb3IgPSBlbGVtZW50TW91c2VJc092ZXIuZ2V0QXR0cmlidXRlKFwibW91c2VjaXJjbGVjb2xvclwiKVxuICAgICAgICAvLyBpZihtb3VzZUNpcmNsZUNvbG9yPT1cIndoaXRlXCIpe1xuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7bW91c2VDaXJjbGVDb2xvcjpcIndoaXRlXCJ9KVxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJ3aGl0ZVwiKVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2VcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe21vdXNlQ2lyY2xlQ29sb3I6XCJibGFja1wifSlcbiAgICB9XG4gICAgLy8gbW91c2VPdmVyQ3Vyc29yRWZmZWN0ID0gKCk9PntcbiAgICAvLyAgICAgdGhpcy5wcm9wcy5hZGRDbGFzc1RvQ3Vyc29yKFwibGFyZ2VyXCIpXG4gICAgLy8gfVxuICAgIC8vIG1vdXNlT3V0Q3Vyc29yRWZmZWN0ID0gKCk9PntcbiAgICAvLyAgICAgdGhpcy5wcm9wcy5yZW1vdmVDbGFzc0Zyb21DdXJzb3IoXCJsYXJnZXJcIilcbiAgICAvLyB9XG4gICAgLy8gbW91c2VPdmVyV2hpdGVDdXJzb3IgPSAoKT0+e1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnd2hpdGUgY3Vyc29yJylcbiAgICAvLyAgICAgdGhpcy5wcm9wcy5hZGRDbGFzc1RvQ3Vyc29yKFwid2hpdGVcIilcbiAgICAvLyB9XG4gICAgLy8gbW91c2VPdXRXaGl0ZUN1cnNvciA9ICgpPT57XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCd3aGl0ZSBjdXJzb3IgbGVhdmUnKVxuICAgIC8vICAgICB0aGlzLnByb3BzLnJlbW92ZUNsYXNzRnJvbUN1cnNvcihcIndoaXRlXCIpXG4gICAgLy8gfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGU6d2luZG93LmlubmVyV2lkdGg8d2luZG93LmlubmVySGVpZ2h0P1wicG9ydHJhaXRcIjpcImxhbmRzY2FwZVwifSlcbiAgICAgICAgdGhpcy5zZXRXaW4oKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgdGhpcy5tb3ZlQ3Vyc29yKClcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsdGhpcy5zZXRXaW4pXG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKVxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lKTtcbiAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhcmdlci1jdXJzb3InKS5mb3JFYWNoKGVsZT0+e1xuICAgICAgICAvLyAgICAgZWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsdGhpcy5tb3VzZU92ZXJDdXJzb3JFZmZlY3QpXG4gICAgICAgIC8vICAgICBlbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0aGlzLm1vdXNlT3V0Q3Vyc29yRWZmZWN0KVxuICAgICAgICAvLyB9KVxuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2hpdGUtY3Vyc29yJykuZm9yRWFjaChlbGU9PntcbiAgICAgICAgLy8gICAgIGVsZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLHRoaXMubW91c2VPdmVyV2hpdGVDdXJzb3IpXG4gICAgICAgIC8vICAgICBlbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0aGlzLm1vdXNlT3V0V2hpdGVDdXJzb3IpXG4gICAgICAgIC8vIH0pXG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMscHJldlN0YXRlKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb21tb24uc2hvd19mdWxsc2NyZWVuX3ZpZGVvIT1wcmV2UHJvcHMuY29tbW9uLnNob3dfZnVsbHNjcmVlbl92aWRlbyl7XG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLmNvbW1vbi5zaG93X2Z1bGxzY3JlZW5fdmlkZW8pe1xuICAgICAgICAgICAgICAgIHZhciB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsc2NyZWVuX3ZpZGVvJylcbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLmNvbW1vbi52aWRlb190eXBlPT1cImh0bWxcIil7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2aWRlbyB0eXBlIGh0bWwnKVxuICAgICAgICAgICAgICAgICAgICB2aWRlby5vbmNhbnBsYXkgPSAoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvLnBsYXkoKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBsYXllciA9IG5ldyBQbGF5ZXIodmlkZW8pO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGxheSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAgICAgICAgICAgY2hhcnNldD1cIlVURi04XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZ1bGwtc2NyZWVuLXZpZGVvLXdyYXBwZXIgJHt0aGlzLnByb3BzLmNvbW1vbi5zaG93X2Z1bGxzY3JlZW5fdmlkZW8/XCJzaG93XCI6XCJcIn1gfSBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5oaWRlRnVsbHNjcmVlblZpZGVvKCl9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbG9zZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby13cmFwXCIgb25DbGljaz17KGUpPT5lLnN0b3BQcm9wYWdhdGlvbigpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbW1vbi5zaG93X2Z1bGxzY3JlZW5fdmlkZW8gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlkZW8gdmlkZW9pZD17dGhpcy5wcm9wcy5jb21tb24udmlkZW9faWR9IHZpZGVvX3R5cGU9e3RoaXMucHJvcHMuY29tbW9uLnZpZGVvX3R5cGV9IHZpZGVvX3NyYz17dGhpcy5wcm9wcy5jb21tb24udmlkZW9fc3JjfSBodG1sX2lkPVwiZnVsbHNjcmVlbl92aWRlb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYWluXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY3Vyc29ycyAke3RoaXMucHJvcHMuY29tbW9uLmN1cnNvckNsYXNzZXMuam9pbignICcpfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3JcIiByZWY9e3RoaXMuY3Vyc29yfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3JcIiByZWY9e3RoaXMuY3Vyc29yVHJhaWxpbmd9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RGVza3RvcE1lbnUgcGFnZT17dGhpcy5wcm9wcy5wYWdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uIGhpbmRpVGV4dD17dGhpcy5wcm9wcy5oaW5kaVRleHR9IG5hdlBvc2l0aW9uPXt0aGlzLnByb3BzLm5hdlBvc2l0aW9ufSBuYXZUZXh0Q29sb3I9e3RoaXMucHJvcHMubmF2VGV4dENvbG9yfSBtZW51QnRuQ29sb3I9e3RoaXMucHJvcHMubWVudUJ0bkNvbG9yfSAvPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ0cmFuc3BhcmVudC1mb290ZXJcIj48L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPEZvb3RlciB0eXBlPXt0aGlzLnByb3BzLmZvb3RlclR5cGV9IG5vV2F2ZURlc2t0b3A9e3RoaXMucHJvcHMubm9XYXZlRGVza3RvcH0gbm9XYXZlTW9iaWxlPXt0aGlzLnByb3BzLm5vV2F2ZU1vYmlsZX0gLz5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAuZnVsbC1zY3JlZW4tdmlkZW8td3JhcHBlcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDotMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cmVtICR7dGhpcy5wcm9wcy5jb21tb24udmlkZW9fc3JjPT1cIi92aWRlb3MvZW5jaGFudGV1cl9kZXNrdG9wLm1wNFwiP1wiMzglXCI6XCI3LjUlXCJ9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMGIzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOm9wYWNpdHkgMC40cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzpzY3JvbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZnVsbC1zY3JlZW4tdmlkZW8td3JhcHBlci5zaG93e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mdWxsLXNjcmVlbi12aWRlby13cmFwcGVyIC5jbG9zZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDoycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDoycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZ1bGwtc2NyZWVuLXZpZGVvLXdyYXBwZXIgLmNsb3NlOmFmdGVyLC5mdWxsLXNjcmVlbi12aWRlby13cmFwcGVyIC5jbG9zZTpiZWZvcmV7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgI21haW57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6MTA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuY3Vyc29yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czpub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLmN1cnNvcnMgLmN1cnNvcjpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTI2ZmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jdXJzb3JzIC5jdXJzb3I6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5NztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246d2lkdGggMC43cyxoZWlnaHQgMC43cztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jdXJzb3JzLmxhcmdlciAuY3Vyc29yOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmN1cnNvcnMub25tZW51YnRuIC5jdXJzb3I6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjp3aWR0aCAwLjJzLGhlaWdodCAwLjJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUzZCgzMHB4LDdweCwwKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy5wcm9wcy5jb21tb24ubWVudV9idG5fY29sb3I9PVwid2hpdGVcIj9cIiNmZmZmZmZcIjpcIiMwMDAwMDBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jdXJzb3JzLndoaXRlIC5jdXJzb3I6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNwYXJlbnQtZm9vdGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo0Mi43cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxufVxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHtjb21tb259KXtcbiAgICByZXR1cm4ge2NvbW1vbn1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLHtzZXRXaW5kb3csYWRkQ2xhc3NUb0N1cnNvcixyZW1vdmVDbGFzc0Zyb21DdXJzb3IsaGlkZUZ1bGxzY3JlZW5WaWRlb30pKExheW91dCkiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nSWNvbih7c2hvdyx3aWR0aCxoZWlnaHQsd2VpZ2h0LGNlbnRlcmVkLGNvbG9yfSl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bsb2FkaW5nLWljb24gJHtzaG93P1wic2hvd1wiOlwiXCJ9ICR7Y29sb3J9ICR7d2VpZ2h0fSAke2NlbnRlcmVkP1wiY2VudGVyZWRcIjpcIlwifWB9IHN0eWxlPXt7d2lkdGgsaGVpZ2h0fX0+PC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLmxvYWRpbmctaWNvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTpzb2xpZDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHNwaW4gMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAgICAgICAgICAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgICAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubG9hZGluZy1pY29uLmJsYWNre1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiMwMDAwMDA7XG4gICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNjMWMxYzE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmxvYWRpbmctaWNvbi53aGl0ZXtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6I2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiM0MTQxNDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5sb2FkaW5nLWljb24udGhpbntcbiAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDozcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmxvYWRpbmctaWNvbi50aGlja3tcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDZweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubG9hZGluZy1pY29uLmNlbnRlcmVke1xuICAgICAgICAgICAgICAgIG1hcmdpbjphdXRvO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5sb2FkaW5nLWljb24uc2hvd3tcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApXG59IiwiaW1wb3J0IHt0b2dnbGVNZW51LGFkZENsYXNzVG9DdXJzb3IscmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmZ1bmN0aW9uIE5hdmlnYXRpb24ocHJvcHMpe1xuICAgIGZ1bmN0aW9uIG1lbnVCdG5DbGljaygpe1xuICAgICAgICBpZihwcm9wcy5jb21tb24ubWVudU9wZW4pXG4gICAgICAgICAgICBwcm9wcy5yZW1vdmVDbGFzc0Zyb21DdXJzb3IoXCJ3aGl0ZVwiKVxuICAgICAgICBwcm9wcy50b2dnbGVNZW51KClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgbWVudS1idG4gJHtwcm9wcy5jb21tb24ubWVudV9idG5fY29sb3J9ICR7cHJvcHMuY29tbW9uLm1lbnVPcGVuP1wib3BlblwiOlwiXCJ9YH0gb25DbGljaz17KCk9Pm1lbnVCdG5DbGljaygpfSBvbk1vdXNlT3Zlcj17KCk9PnByb3BzLmFkZENsYXNzVG9DdXJzb3IoXCJvbm1lbnVidG5cIil9IG9uTW91c2VPdXQ9eygpPT5wcm9wcy5yZW1vdmVDbGFzc0Zyb21DdXJzb3IoXCJvbm1lbnVidG5cIil9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluZXNcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17YCR7cHJvcHMubmF2UG9zaXRpb259ICR7cHJvcHMubmF2VGV4dENvbG9yfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwibG9nbyBsb2dvLWJsYWNrXCJhbHQ9J2ltYWdlJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvX3doaXRlLnBuZ1wiIGNsYXNzTmFtZT1cImxvZ28gbG9nby13aGl0ZVwiYWx0PSdpbWFnZScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1sb2dvLXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLXNob3J0LWJsYWNrLnBuZ1wiIGNsYXNzTmFtZT1cIm1vYmlsZS1sb2dvIHdpZHRoLTEwMFwiYWx0PSdpbWFnZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj48YT5FTkdMSVNIPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YGxhcmdlci1jdXJzb3IgaGluZGktdGV4dGB9PlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaGluZGlUZXh0PT1cIndoaXRlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2hpbmRpX3doaXRlLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2hpbmRpLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuaGluZGktdGV4dCBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9iaWxlLWxvZ28td3JhcHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9iaWxlLWxvZ297XG4gICAgICAgICAgICAgICAgd2lkdGg6NXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWJ0bntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgICAgICB0b3A6Mi41cmVtO1xuICAgICAgICAgICAgICAgIGxlZnQ6NC44cmVtO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6OTk5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUtYnRuIC5saW5lcyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUtYnRuLm9wZW4gLmxpbmVzIHNwYW4ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGOUVCMjEgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWJ0biAubGluZXMgc3BhbiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgMHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1idG4uYmxhY2sgLmxpbmVzIHNwYW57XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWJ0bi53aGl0ZSAubGluZXMgc3BhbntcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUtYnRuIC5saW5lcyBzcGFuOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUtYnRuLm9wZW4gLmxpbmVzIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICB0b3A6MTFweDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUtYnRuIC5saW5lcyBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUtYnRuLm9wZW4gLmxpbmVzIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1idG4gLmxpbmVzIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgICAgICB0b3A6IDIycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1idG4ub3BlbiAubGluZXMgc3BhbjpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgICAgIHRvcDoxMXB4O1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6cm93IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoyLjNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYgPiAqIHtcbiAgICAgICAgICAgICAgICBmbGV4OjEgMSAzMy4zMyU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYuYWJzb2x1dGV7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgei1pbmRleDo1MDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb2dvLXdyYXBwZXJ7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI4cmVtO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdi5ibGFjayAubG9nby1ibGFja3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdi53aGl0ZSAubG9nby13aGl0ZXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsLm9wdGlvbnN7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDo0LjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bC5vcHRpb25zIGxpe1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwub3B0aW9ucyBsaSBhe1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6MC41cmVtIDAuNzVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYuYmxhY2sgdWwub3B0aW9ucyBsaSBhOm5vdCguaGluZGkpe1xuICAgICAgICAgICAgICAgIGNvbG9yOiMwMDAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYud2hpdGUgdWwub3B0aW9ucyBsaSBhOm5vdCguaGluZGkpe1xuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bC5vcHRpb25zIGxpIGE6bm90KC5oaW5kaSl7XG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZ1dHVyYUJvb2ssIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bC5vcHRpb25zIGxpIGEuaGluZGl7XG4gICAgICAgICAgICAgICAgY29sb3I6I0Y5RUIyMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCl7XG4gICAgICAgICAgICAgICAgLm1lbnUtYnRuLmJsYWNrOmhvdmVyIC5saW5lcyBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1lbnUtYnRuLndoaXRlOmhvdmVyIC5saW5lcyBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpe1xuICAgICAgICAgICAgICAgIC5sb2dvLXdyYXB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdWwub3B0aW9uc3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDoycmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubWVudS1idG57XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6Mi44cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9iaWxlLWxvZ28td3JhcHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHtjb21tb259KXtcbiAgICByZXR1cm4ge2NvbW1vbn1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLHt0b2dnbGVNZW51LGFkZENsYXNzVG9DdXJzb3IscmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yfSkoTmF2aWdhdGlvbikiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb0VtYmVkKHByb3BzKXtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICB7cHJvcHMudmlkZW9fdHlwZT09XCJodG1sXCJcbiAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgPHZpZGVvIHdpZHRoPVwiMTAwJVwiIGlkPXtwcm9wcy5odG1sX2lkfSBjb250cm9scz5cbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e3Byb3BzLnZpZGVvX3NyY30gdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyB0YWcuXG4gICAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPXtgaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLyR7cHJvcHMudmlkZW9pZH0/dGl0bGU9MCZieWxpbmU9MCZwb3J0cmFpdD0wJmxvb3A9JHtwcm9wcy5sb29wPzE6MH1gfSBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImF1dG9wbGF5OyBmdWxsc2NyZWVuXCIgYWxsb3dmdWxsc2NyZWVuIGlkPXtwcm9wcy5odG1sX2lkfT48L2lmcmFtZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAudmlkZW8td3JhcHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjU2LjI1JSAwIDAgMDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMwMDAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudmlkZW8td3JhcCBpZnJhbWV7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIE1PQklMRV9CUkVBS1BPSU5UOiA3NjgsXG4gICAgQU5JTUFUSU9OX0RVUkFUSU9OOiAwLjQsXG4gICAgU0VOREdSSURfQVBJX0tFWTonU0cuWTBSZGxlUlBTMTZfUUN1Q3ppU3VWQS5meDlLVDM2V0tnUmRKa0xIWE1BcGJJU1l5NW9oWEZ5dFc1dmRWcDZlb0prJ1xufSIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICBOZXh0Um91dGVyLFxuICBpc0xvY2FsVVJMLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IGV4ZWNPbmNlIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCwgcmVzb2x2ZUhyZWYgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZilcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKSA6IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChhcylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7XG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGJhc2VQYXRoICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgOiBmaW5hbFVybC5ocmVmXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gdXJsQXNTdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmZ1bmN0aW9uIHRyeVBhcnNlUmVsYXRpdmVVcmwoXG4gIHVybDogc3RyaW5nXG4pOiBudWxsIHwgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4ge1xuICB0cnkge1xuICAgIHJldHVybiBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgKVxuICAgICAgfSwgMClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXNcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVybiBmYWxzZVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwoY2xlYW5lZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyLCBlcnJvcjogZXJyIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICAgICAgKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICAgIH0gYXMgUm91dGVJbmZvKVxuICAgICAgICAgIClcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcGFyc2VkID0gdHJ5UGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBpZiAoIXBhcnNlZCkgcmV0dXJuXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBpdGVtKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQge29wZW5NZW51LHNldE1lbnVCdG5Db2xvcn0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIlxyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJ3JlYWN0LWFuaW1hdGUtb24tc2Nyb2xsJztcclxuaW1wb3J0IHtBTklNQVRJT05fRFVSQVRJT059IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3VyTm90Rm91cigpe1xyXG5cclxuICAgIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8TGF5b3V0IHBhZ2U9XCI0MDRcIiBuYXZQb3NpdGlvbj1cImFic29sdXRlXCIgbmF2VGV4dENvbG9yPVwiYmxhY2tcIiBtZW51QnRuQ29sb3I9XCJibGFja1wiIGhpbmRpVGV4dD1cIndoaXRlXCIgZm9vdGVyVHlwZT1cInllbGxvd1wiPlxyXG4gICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3BpcmUgdGV4dC1jZW50ZXIgYmcteWVsbG93IHBhZGRlZC1jb250ZW50XCI+XHJcbiAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cInNjcm9sbEZhZGVJblwiIGR1cmF0aW9uPXtBTklNQVRJT05fRFVSQVRJT059IGFuaW1hdGVPbmNlPXt0cnVlfSBkZWxheT17MTAwfT5cclxuICAgICAgPHA+RXJyb3IgTm90IEZvdW5kLi4hPC9wPiAgIDxoMT40MDQ8L2gxPiAgPGJyIGNsYXNzTmFtZT1cImhpZGUtZGVza3RvcCBzaG93LW1vYmlsZVwiIC8+VGFrZSBtZSB0byA8YnIvPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1ibGFjayBidG4tc2VuZCcgb25DbGljaz17KCk9PnJvdXRlci5wdXNoKCcvJyl9ID4gSG9tZTwvYnV0dG9uPiBcclxuICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAudG9wLXdhdmV7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTowO1xyXG4gICAgICAgICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDoxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC53YXZle1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBib3R0b206MDtcclxuICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnJhbmQtaW1hZ2VzLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFuaW1hdGUgLmZ1biAuY2hpbGR7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYW5pbWF0ZSAudG9wLXRpdGxlIC5jaGlsZHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIC5hbmltYXRlIC5iZy10ZXh0IC5jaGlsZHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuN3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFib3V0LXNlcnZpY2VzLWxpc3QgbGkgYXtcclxuICAgICAgICAgICAgICBjb2xvcjojZmZmZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hYm91dC1zZXJ2aWNlcy1saXN0IGxpIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgLy8gZm9udC1mYW1pbHk6IFBvcHBpbnNNZWRpdW1JdGFsaWMsc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hYm91dC1zZXJ2aWNlcy1saXN0IGxpe1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg1NDBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MDBtcywgb3BhY2l0eSA1MDBtcztcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5Oi4zcztcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDEuNnJlbSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hYm91dC1zZXJ2aWNlcy1saXN0LmFuaW1hdGUgbGl7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5icmFuZHN7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmZmZmO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxMy4ycmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MTMuMnJlbTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoyMHJlbTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbToyMHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnJhbmRzIC5jb2wxIC5icmFuZC1pbWFnZXtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjlyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJyYW5kcyAuY29sMiAuYnJhbmQtaW1hZ2V7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjQuNXJlbTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjQuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnJhbmRzIC5jb2wzIC5icmFuZC1pbWFnZXtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6NC41cmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6NC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbnNwaXJle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTo0LjZyZW07XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6MTMuM3JlbTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbToxMy4zcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYXZpZ2F0b3J7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjQuNnJlbTtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOjkuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2aWdhdG9yIC50eHR7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzowIDNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRlYW0tbWVtYmVyLWluZm97XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDozLjJyZW07XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZWFtLW1lbWJlci1pbmZvIC5kZXNpZ25hdGlvbntcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZWFtIC5zbGlkZTF7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDo0cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZWFtIC5zbGlkZTJ7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjRyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRlYW17XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjEwJTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjEwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3Rvcnl0ZWxsZXJzLXRvcHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxMi4ycmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjExLjdyZW07XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjE3JTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjE3JTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNFNEU0RTQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN0b3J5dGVsbGVycy10b3AtaGVhZGluZ3tcclxuICAgICAgICAgICAgICAvLyBmb250LXNpemU6OC42cmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTo0LjZyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN0b3J5dGVsbGVyc3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjcuM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudmlldy1tb3Jle1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6My4zcmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZToycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hYm91dC1zZXJ2aWNlcy13cmFwcGVye1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IzAwMDAwMDtcclxuICAgICAgICAgICAgICBjb2xvcjojZmZmZmZmO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOjEwcmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjEwcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hYm91dC1zZXJ2aWNlc3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1mbG93OnJvdyBub3dyYXA7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFib3V0LXNlcnZpY2VzLWxpc3R7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hYm91dC1zZXJ2aWNlcy1saXN0IGxpIHtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hYm91dC1zZXJ2aWNlcyAuY29sMSBpbWd7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBsZWZ0OiAtNjglO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hYm91dC1zZXJ2aWNlcyAuY29sMyBpbWd7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICByaWdodDogLTY4JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWJvdXQtc2VydmljZXMgLmNvbDN7XHJcbiAgICAgICAgICAgICAgZmxleDoxIDEgMDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6NjNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFib3V0LXNlcnZpY2VzIC5jb2wxe1xyXG4gICAgICAgICAgICAgIGZsZXg6MSAxIDA7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OjYzcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hYm91dC1zZXJ2aWNlcyAuY29sMntcclxuICAgICAgICAgICAgICB3aWR0aDo0MyU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZmxvdzpjb2x1bW4gd3JhcDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pZGVvbG9neXtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTByZW07XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWRlb2xvZ3ktaGVhZGluZ3tcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTo0LjZyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlkZW9sb2d5LWNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzowLjhyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjUuNXJlbTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJlbGF0aXZlLWl0ZW1ze1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDozO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRvcHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjIxLjZyZW07XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmZmMjA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZnVue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjEuMXJlbTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOjEuNjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRvcC10aXRsZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTo3LjJyZW07XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6MztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmctdGV4dHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI3cmVtO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICB0b3A6IDEuNXJlbTtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC44O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcmV2e1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOXB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTMyMHB4KXtcclxuICAgICAgICAgICAgICAuYWJvdXQtc2VydmljZXMgLmNvbDEgaW1ne1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTgwJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmFib3V0LXNlcnZpY2VzIC5jb2wzIGltZ3tcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtODAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTIwMHB4KXtcclxuICAgICAgICAgICAgICAuYWJvdXQtc2VydmljZXMgLmNvbDEgaW1ne1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5hYm91dC1zZXJ2aWNlcyAuY29sMyBpbWd7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDUwcHgpe1xyXG4gICAgICAgICAgICAgIC5hYm91dC1zZXJ2aWNlcyAuY29sMSBpbWd7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTMwJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmFib3V0LXNlcnZpY2VzIC5jb2wzIGltZ3tcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMTMwJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk1MHB4KXtcclxuICAgICAgICAgICAgICAuYWJvdXQtc2VydmljZXMgLmNvbDEgaW1ne1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTE4MCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5hYm91dC1zZXJ2aWNlcyAuY29sMyBpbWd7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTE4MCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAgICAgICAgICAgLmJnLXRleHR7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTRyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC50b3AtdGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6NS42cmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZnVuIHtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOjAuNnJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnRvcHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmlkZW9sb2d5LWNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zMnJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmlkZW9sb2d5IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmFib3V0LXNlcnZpY2Vze1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6NSU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjUlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuYWJvdXQtc2VydmljZXMgLmNvbDJ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuYWJvdXQtc2VydmljZXMtbGlzdCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6OS41cmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuYWJvdXQtc2VydmljZXMtd3JhcHBlcntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnN0b3J5dGVsbGVycy10b3AtaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQuNnJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnN0b3J5dGVsbGVycy10b3B7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOS41cmVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDkuNXJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDo1JTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6NSU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5zdG9yeXRlbGxlcnMtdGV4dHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NC4xcmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGVhbSAuc2xpZGUxIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC50ZWFte1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC50ZWFtIC5zbGlkZTIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubmFtZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5kZXNpZ25hdGlvbntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjIuNHJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm5hdmlnYXRvcntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6My41cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjQuNnJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmluc3BpcmV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6NC42cmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuYnJhbmRze1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNSU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTByZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTByZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5icmFuZHMgLmNvbDEgLmJyYW5kLWltYWdlIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5hYm91dC1zZXJ2aWNlcyAuY29sMSwuYWJvdXQtc2VydmljZXMgLmNvbDN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MDBweCl7XHJcbiAgICAgICAgICAgICAgLmJnLXRleHR7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTJyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufSIsImV4cG9ydCBjb25zdCBTRVRfV0lORE9XID0gXCJTRVRfV0lORE9XXCJcbmV4cG9ydCBjb25zdCBUT0dHTEVfTUVOVSA9IFwiVE9HR0xFX01FTlVcIlxuZXhwb3J0IGNvbnN0IE9QRU5fTUVOVSA9IFwiT1BFTl9NRU5VXCJcbmV4cG9ydCBjb25zdCBBRERfQ0xBU1NfVE9fQ1VSU09SID0gXCJBRERfQ0xBU1NfVE9fQ1VSU09SXCJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ0xBU1NfRlJPTV9DVVJTT1IgPSBcIlJFTU9WRV9DTEFTU19GUk9NX0NVUlNPUlwiXG5leHBvcnQgY29uc3QgSElERV9GVUxMX1NDUkVFTl9WSURFTyA9IFwiSElERV9GVUxMX1NDUkVFTl9WSURFT1wiXG5leHBvcnQgY29uc3QgU0hPV19GVUxMX1NDUkVFTl9WSURFTyA9IFwiU0hPV19GVUxMX1NDUkVFTl9WSURFT1wiXG5leHBvcnQgY29uc3QgU0VUX01FTlVfQlROX0NPTE9SID0gXCJTRVRfTUVOVV9CVE5fQ09MT1JcIlxuZXhwb3J0IGZ1bmN0aW9uIHNob3dGdWxsc2NyZWVuVmlkZW8odmlkZW9faWQsIHZpZGVvX3NyYyx2aWRlb190eXBlKXtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOlNIT1dfRlVMTF9TQ1JFRU5fVklERU8sXG4gICAgICAgIHZpZGVvX2lkLFxuICAgICAgICB2aWRlb19zcmMsXG4gICAgICAgIHZpZGVvX3R5cGVcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaGlkZUZ1bGxzY3JlZW5WaWRlbygpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6SElERV9GVUxMX1NDUkVFTl9WSURFT1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRXaW5kb3cod2luZG93V2lkdGgsd2luZG93SGVpZ2h0KXtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOlNFVF9XSU5ET1csXG4gICAgICAgIHdpbmRvd1dpZHRoLFxuICAgICAgICB3aW5kb3dIZWlnaHRcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlTWVudSgpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6VE9HR0xFX01FTlVcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gb3Blbk1lbnUoYm9vbCl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTpPUEVOX01FTlUsXG4gICAgICAgIGJvb2xcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3NUb0N1cnNvcihjbHMpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6QUREX0NMQVNTX1RPX0NVUlNPUixcbiAgICAgICAgY2xzXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNldE1lbnVCdG5Db2xvcihjb2xvcil7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTpTRVRfTUVOVV9CVE5fQ09MT1IsXG4gICAgICAgIGNvbG9yXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzRnJvbUN1cnNvcihjbHMpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6UkVNT1ZFX0NMQVNTX0ZST01fQ1VSU09SLFxuICAgICAgICBjbHNcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHZpbWVvL3BsYXllclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFuaW1hdGUtb24tc2Nyb2xsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==