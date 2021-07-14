webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_arrow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/arrow */ "./components/arrow.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions.js");
/* harmony import */ var _components_clients__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/clients */ "./components/clients.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_17__);







var _jsxFileName = "D:\\Ecesisv2.0\\OpposableThumbsSeOFix\\othumbs\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }













var Home = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, _React$Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleResize", function () {
      _this.positionImage();

      _this.setState({
        isMobile: window.innerWidth < _config__WEBPACK_IMPORTED_MODULE_17__["MOBILE_BREAKPOINT"] ? true : false
      });
    });

    _this.state = {
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
    _this.backgroundImage = react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef();
    _this.rellaxRef = react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef();
    _this.notPerformedAnimation = true;
    _this.whiteMenuSections = [react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef()];
    return _this;
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


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "positionImage",
    value: function positionImage(cb) {
      var backgroundStyles = {
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
        backgroundStyles: backgroundStyles
      }, function () {
        if (cb) {
          cb();
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.state.backgroundReady && this.state.loadingLogoReady && this.notPerformedAnimation) {
        this.positionImage();
        this.notPerformedAnimation = false;
        this.props.openMenu(false); // this.mouseEvents()

        setTimeout(function () {
          _this2.setState({
            animate: true
          }, function () {// this.props.removeClassFromCursor("larger")  
            // this.props.removeClassFromCursor("white")  
          });
        }, 750);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.setState({
        isMobile: window.innerWidth < _config__WEBPACK_IMPORTED_MODULE_17__["MOBILE_BREAKPOINT"] ? true : false
      });
      window.addEventListener("resize", this.handleResize); // window.addEventListener("scroll", this.handleScroll)

      var loadingLogo = new Image();
      loadingLogo.src = "/images/loading_logo.png";

      loadingLogo.onload = function () {
        _this3.setState({
          loadingLogoReady: true
        });
      };

      var img = new Image();
      img.src = "/images/home-cover.jpg";

      img.onload = function () {
        _this3.setState({
          backgroundReady: true
        });
      };

      this.props.removeClassFromCursor("white");
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize); // window.removeEventListener("scroll", this.handleScroll)
    }
  }, {
    key: "render",
    value: function render() {
      //     for seo purpose
      var schemaData = {
        "@context": "http://schema.org",
        "@type": "service",
        "name": "Opposable Thumbs",
        "url": "https://opposable-thumbs.vercel.app/"
      };
      JSON.stringify(schemaData);
      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 9
        }
      }, __jsx("meta", {
        name: "google-site-verification",
        content: "fTp7loBzDTAjXEutiEclfst4c3vt13uktqW_dAFTWoI",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 3
        }
      }), __jsx("meta", {
        name: "keywords",
        content: "brand identity agency, brand identity design agency, corporate identity agency, brand identity, branding design, digital media management,digital media agency, social media agencies,digital media marketing companies",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 3
        }
      }), __jsx("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }
      }, "Brand Identity Agency | Opposable Thumbs"), __jsx("meta", {
        name: "description",
        content: "Opposable Thumbs work with companies for their branding. If you have a new brand to launch, we can help you, right from naming it to developing its identity.",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 1
        }
      }), __jsx("link", {
        rel: "icon",
        href: "/favicon.ico",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }
      }), __jsx("script", {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-VTMF70P7HW",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 14
        }
      }), __jsx("script", {
        dangerouslySetInnerHTML: {
          __html: "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', 'G-VTMF70P7HW');\n          "
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 1
        }
      })), this.state.loadingLogoReady && __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "".concat(this.state.animate ? "animate" : ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }
      }, __jsx("div", {
        style: {
          height: "".concat(this.props.common.windowHeight, "px")
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "loading-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "/images/loading_logo.png",
        alt: "homecover",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 19
        }
      }))), __jsx("div", {
        style: {
          height: "".concat(this.props.common.windowHeight, "px")
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "top-section-wrapper black-cursor ".concat(this.state.animate ? "animate" : ""),
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "background",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 13
        }
      }), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "top-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "storytellers futura-light",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "overflow-hidden",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "child",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 27
        }
      }, __jsx("h4", {
        style: {
          fontWeight: "50%"
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "child",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 28
        }
      }, "MEET THE STORYTELLERS")))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "hello helvetica-neue-condensed",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "overflow-hidden",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "child",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 27
        }
      }, "Hello")), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "full-service big-caslon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "overflow-hidden",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 27
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "child",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 31
        }
      }, __jsx("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 33
        }
      }, " Independent", __jsx("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 49
        }
      }), "Agency"))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "home-down-arrow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 25
        }
      }, " ")), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "overflow-hidden looking-for",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "child",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "bottom-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 27
        }
      }, __jsx("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 56
        }
      }, "Brand Identity Agency")))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "white-fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-categories text-center padded-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 13
        }
      }, "Insights / Brand Identity / Packaging / Advertising / Digital / Graphics / Films"), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-items",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "row no-gutters",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 odd larger-cursor white-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 17
        }
      }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: "/images/portfolio/BigBanyan.jpg",
        bgImageAlt: "big banyan",
        strength: 200,
        className: "portfolio-item ".concat(this.state.isMobile ? "white-menu-btn" : ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 25
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/projects/big-banyan",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 27
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 35
        }
      }, "Big Banyan ", __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 88
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 118
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 35
        }
      }, "An Italian winemaker. A passionate brand team. And us. Years of t\xEAte-\xE0-t\xEAtes and research-driven insights led us to recreate the packaging and communication strategy for Big Banyan. "))))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 even larger-cursor white-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 19
        }
      }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: "/images/portfolio/langoor.jpg",
        bgImageAlt: "langoor",
        strength: 200,
        className: "portfolio-item ".concat(this.state.isMobile ? "white-menu-btn" : ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 25
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/projects/langoor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 27
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 35
        }
      }, "L'angoor ", __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 86
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 116
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 35
        }
      }, "Wine can be elegant. Wine can be sophisticated. But wine and fun? Here\u2019s how we married \u2018fun\u2019 and a new brand of wines from Big Banyan, known for its premium wines."))))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 odd larger-cursor white-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 19
        }
      }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: "/images/portfolio/Enchanteur.jpg",
        bgImageAlt: "enchanteur",
        strength: 200,
        className: "portfolio-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 25
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/projects/enchanteur",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 27
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 35
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 37
        }
      }, "Enchanteur ", __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 90
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 120
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 37
        }
      }, "It\u2019s French, it\u2019s romantic and it\u2019s so very floral. How can we not fall in love with Enchanteur? We have K-drama fans on our team who absolutely love this brand!"))))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 even larger-cursor white-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 19
        }
      }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: "/images/portfolio/fynd.jpg",
        bgImageAlt: "langoor",
        strength: 200,
        className: "portfolio-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 25
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/projects/fynd",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 27
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 35
        }
      }, "FYND ", __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 82
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 112
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 35
        }
      }, "Seeded in the idea of self-expression, FYND inspired us with its functional clothing lines. From strategy to identity and brand architecture design, we helped bring this brand to life. "))))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 odd larger-cursor white-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 19
        }
      }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: "/images/portfolio/Chandrika3.jpg",
        bgImageAlt: "langoor",
        strength: 200,
        className: "portfolio-item ".concat(this.state.isMobile ? "white-menu-btn" : ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 23
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/projects/chandrika",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 27
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 35
        }
      }, "Chandrika ", __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 87
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 117
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 35
        }
      }, "Here\u2019s a brand we all grew up with. And yet, it managed to surprise us with its secrets. We shared these little nuggets with the world in our campaign."))))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 even larger-cursor white-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 19
        }
      }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: "/images/portfolio/Santoor.jpg",
        bgImageAlt: "langoor",
        strength: 200,
        className: "portfolio-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 25
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/projects/santoor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 27
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 35
        }
      }, "Santoor ", __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 85
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 115
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 35
        }
      }, "Who doesn\u2019t remember the classic \u201Cmummy\u201D ads! It gives us great pride to work on campaigns for a brand that\u2019s as relevant today as it was a few decades ago."))))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 odd larger-cursor white-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 19
        }
      }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: "/images/portfolio/VoiJeans.png",
        bgImageAlt: "langoor",
        strength: 200,
        className: "portfolio-item ".concat(this.state.isMobile ? "white-menu-btn" : ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 25
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/projects/voi-jeans",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 27
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 35
        }
      }, "VOI Jeans ", __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 87
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 117
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 35
        }
      }, "The very idea of these denims inspired us! VOI has ergonomically engineered denims that called for edgy, fashion forward communication. And we reveled in it."))))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 even larger-cursor white-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 19
        }
      }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: "/images/portfolio/Iceburg1.jpg",
        bgImageAlt: "langoor",
        strength: 200,
        className: "portfolio-item ".concat(this.state.isMobile ? "white-menu-btn" : ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 23
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/projects/iceburg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 27
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 35
        }
      }, "IceBurg ", __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 85
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 115
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 35
        }
      }, "Intense cravings for burgers and shakes fed our brains as we worked on the brand idea and identity for this UK-based gourmet burger chain."))))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 odd mia-by-tanishq larger-cursor white-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 19
        }
      }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: "/images/portfolio/Mia1.jpg",
        bgImageAlt: "langoor",
        strength: 200,
        className: "portfolio-item ".concat(this.state.isMobile ? "white-menu-btn" : ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 25
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/projects/mia-by-tanishq",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 27
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 35
        }
      }, "Mia - Tanishq ", __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 91
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 121
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 35
        }
      }, "These films are a collection of stories of Indian women who inspire you with their resilience, charm you with their presence and awe you with their achievements."))))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 even larger-cursor white-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 19
        }
      }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: "/images/portfolio/Graphics1.jpg",
        bgImageAlt: "graphics",
        strength: 200,
        className: "portfolio-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 35
        }
      }, "Graphics"), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 35
        }
      }, "A digital art project that led us to create edgy, modern graphics for clothing and merchandise."))))))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/projects",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "no-css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "explore-more text-center padded-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "browse",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 21
        }
      }, "browse"), __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "explore-arrow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 23
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 25
        }
      })))))), __jsx("div", {
        ref: this.whiteMenuSections[0],
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "services position-relative padded-content white-cursor white-cursor white-menu-btn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "service-heading more-letter-spacing futura-light slightly-larger-text yellow-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364,
          columnNumber: 15
        }
      }, "SERVICES"), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "service-lists",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 15
        }
      }, __jsx("ul", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "service-items list-style-none white-text larger-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 17
        }
      }, __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 19
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: {
          pathname: '/projects',
          query: {
            filter: 'insights'
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 23
        }
      }, "Insights"))), __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 19
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: {
          pathname: '/projects',
          query: {
            filter: 'brand-identity'
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 25
        }
      }, "Brand Identity"))), __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 19
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: {
          pathname: '/projects',
          query: {
            filter: 'packaging'
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383,
          columnNumber: 25
        }
      }, "Packaging"))), __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388,
          columnNumber: 19
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: {
          pathname: '/projects',
          query: {
            filter: 'advertising'
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 25
        }
      }, "Advertising"))), __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 19
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: {
          pathname: '/projects',
          query: {
            filter: 'digital'
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397,
          columnNumber: 25
        }
      }, "Digital"))), __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 19
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: {
          pathname: '/projects',
          query: {
            filter: 'digital'
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 25
        }
      }, "Graphics"))), __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 19
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: {
          pathname: '/projects',
          query: {
            filter: 'films'
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 25
        }
      }, "Films")))), __jsx("ul", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "skills list-style-none slightly-larger-text futura-light yellow-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417,
          columnNumber: 17
        }
      }, __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 19
        }
      }, "CREATIVE"), __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419,
          columnNumber: 19
        }
      }, "INSIGHT-DRIVEN"), __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420,
          columnNumber: 19
        }
      }, "CULTURALLY RELEVANT"))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "service-image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: "/images/services-bg-2.png",
        alt: "homecover",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "width-100",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 17
        }
      })), __jsx("div", {
        style: {
          marginTop: "7.2rem"
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "show-mobile hide-desktop text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426,
          columnNumber: 15
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 17
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "position-relative",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 11
        }
      }, __jsx(_components_clients__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 13
        }
      }), __jsx("img", {
        src: "/images/wave-black.gif",
        alt: "homecover",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "width-100 wave",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432,
          columnNumber: 13
        }
      }))), !this.state.loadingLogoReady && __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "black-bg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437,
          columnNumber: 11
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2863980262",
        dynamic: [this.props.common.windowHeight + 100],
        __self: this
      }, ".white-fade.__jsx-style-dynamic-selector{position:absolute;bottom:0;height:10rem;width:50%;background:-moz-linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,1));background:-webkit-linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,1));background:linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,1));background:linear-gradient(to bottom,rgba(255,255,255,0),white);}.arrow-right.__jsx-style-dynamic-selector{-webkit-transition:-webkit-transform 400ms cubic-bezier(0.77,0,0.175,1);-webkit-transition:transform 400ms cubic-bezier(0.77,0,0.175,1);transition:transform 400ms cubic-bezier(0.77,0,0.175,1);display:inline-block;}.p-info-wrapper.__jsx-style-dynamic-selector:hover .arrow-right.__jsx-style-dynamic-selector,.portfolio-item.__jsx-style-dynamic-selector:hover .arrow-right.__jsx-style-dynamic-selector{-webkit-transform:translateX(1rem);-ms-transform:translateX(1rem);transform:translateX(1rem);}.wave.__jsx-style-dynamic-selector{width:100%;position:absolute;bottom:0;left:0;}.service-items.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#ffffff;}.service-items.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:none;text-decoration:none;color:#F9ED32;}.service-items.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector:hover{font-family:PoppinsMediumItalic,sans-serif !important;}.p-info-wrapper.__jsx-style-dynamic-selector{position:relative;}.format1.__jsx-style-dynamic-selector .p-info.__jsx-style-dynamic-selector{position:absolute;bottom:0;color:#ffffff;bottom:7rem;padding:0 5%;}.animate.__jsx-style-dynamic-selector .hello.__jsx-style-dynamic-selector .child.__jsx-style-dynamic-selector{-webkit-transition-delay:0.4s;transition-delay:0.4s;}.animate.__jsx-style-dynamic-selector .storytellers.__jsx-style-dynamic-selector .child.__jsx-style-dynamic-selector{-webkit-transition-delay:0.6s;transition-delay:0.6s;}.animate.__jsx-style-dynamic-selector .full-service.__jsx-style-dynamic-selector .child.__jsx-style-dynamic-selector{-webkit-transition-delay:0.8s;transition-delay:0.8s;}.animate.__jsx-style-dynamic-selector .looking-for.__jsx-style-dynamic-selector .child.__jsx-style-dynamic-selector{-webkit-transition-delay:1s;transition-delay:1s;}.explore-more.__jsx-style-dynamic-selector{font-size:4.6rem;margin-top:8rem;}.service-lists.__jsx-style-dynamic-selector{margin-left:14rem;}.service-items.__jsx-style-dynamic-selector{padding-left:6.5rem;margin-top:5rem;line-height:1.2;border-left:1px solid #ffffff;}.skills.__jsx-style-dynamic-selector{margin-top:6rem;padding-left:6.5rem;}.service-image.__jsx-style-dynamic-selector{position:absolute;right:-5%;top:-1%;width:47%;}.services.__jsx-style-dynamic-selector{background:#000000;padding-top:8.8rem;padding-bottom:25rem;overflow:hidden;}.portfolio.__jsx-style-dynamic-selector{background:#ffffff;padding-top:8rem;padding-bottom:8rem;position:relative;}.portfolio-items.__jsx-style-dynamic-selector{margin-top:17rem;padding-left:15%;padding-right:15%;}.portfolio-items.__jsx-style-dynamic-selector .row.__jsx-style-dynamic-selector .even.__jsx-style-dynamic-selector{margin-top:-8rem;}.portfolio-title.__jsx-style-dynamic-selector{font-size:4.6rem;}.portfolio-item.format2.__jsx-style-dynamic-selector .image-wrapper.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:100%;}.portfolio-description.__jsx-style-dynamic-selector{width:80%;}.even.__jsx-style-dynamic-selector .format2.__jsx-style-dynamic-selector .portfolio-info.__jsx-style-dynamic-selector{margin-bottom:12rem;}.format2.__jsx-style-dynamic-selector .portfolio-info.__jsx-style-dynamic-selector{margin-top:3rem;padding:0 5%;}.format1.__jsx-style-dynamic-selector .portfolio-info.__jsx-style-dynamic-selector{position:absolute;bottom:0;color:#ffffff;bottom:8rem;padding:0 5%;}.format1.__jsx-style-dynamic-selector{padding-top:125%;background-attachment:fixed;background-size:50%;background-repeat:no-repeat;}.even.__jsx-style-dynamic-selector .format1.__jsx-style-dynamic-selector{background-position:calc(100%) 0px;}.portfolio-categories.__jsx-style-dynamic-selector{font-size:1.8rem;}.bottom-text.__jsx-style-dynamic-selector{margin-top:4.5rem;font-size:1.8rem;}.home-down-arrow.__jsx-style-dynamic-selector{margin-top:4rem;opacity:0;-webkit-animation-name:floating-__jsx-style-dynamic-selector;animation-name:floating-__jsx-style-dynamic-selector;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-transition:opacity 1s;transition:opacity 1s;-webkit-transition-delay:1.4s;transition-delay:1.4s;}.animate.__jsx-style-dynamic-selector .home-down-arrow.__jsx-style-dynamic-selector{opacity:1;}@-webkit-keyframes floating-__jsx-style-dynamic-selector{from{-webkit-transform:translate(0,0px);-ms-transform:translate(0,0px);transform:translate(0,0px);}65%{-webkit-transform:translate(0,15px);-ms-transform:translate(0,15px);transform:translate(0,15px);}to{-webkit-transform:translate(0,-0px);-ms-transform:translate(0,-0px);transform:translate(0,-0px);}}@keyframes floating-__jsx-style-dynamic-selector{from{-webkit-transform:translate(0,0px);-ms-transform:translate(0,0px);transform:translate(0,0px);}65%{-webkit-transform:translate(0,15px);-ms-transform:translate(0,15px);transform:translate(0,15px);}to{-webkit-transform:translate(0,-0px);-ms-transform:translate(0,-0px);transform:translate(0,-0px);}}.storytellers.__jsx-style-dynamic-selector{-webkit-letter-spacing:1.7rem;-moz-letter-spacing:1.7rem;-ms-letter-spacing:1.7rem;letter-spacing:1.7rem;font-size:1.2rem;margin-top:15rem;}.animate.__jsx-style-dynamic-selector .loading-wrapper.__jsx-style-dynamic-selector{-webkit-transform:translateY(-".concat(this.props.common.windowHeight + 100, "px);-ms-transform:translateY(-").concat(this.props.common.windowHeight + 100, "px);transform:translateY(-").concat(this.props.common.windowHeight + 100, "px);}.loading-wrapper.__jsx-style-dynamic-selector{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.loading-wrapper.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:1000;background:#000000;-webkit-transition:-webkit-transform 0.6s cubic-bezier(0.77,0,0.175,1);-webkit-transition:transform 0.6s cubic-bezier(0.77,0,0.175,1);transition:transform 0.6s cubic-bezier(0.77,0,0.175,1);}.black-bg.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:999;background:#000000;}.loading-wrapper.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:200px;position:absolute;left:calc(50% - 100px);top:calc(50% - 56px);}.top-section-wrapper.__jsx-style-dynamic-selector{max-width:100%;width:100%;height:100vh;margin:auto;overflow:hidden;position:relative;background:#ffffff;}.top-content.__jsx-style-dynamic-selector{position:relative;z-index:2;text-align:center;height:100%;overflow:hidden;}.text.__jsx-style-dynamic-selector{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;padding-bottom:5rem;}.hello.__jsx-style-dynamic-selector{color:#ffff20;font-size:36rem;position:relative;line-height:0.8;}.full-service.__jsx-style-dynamic-selector{color:#414042;font-size:7rem;position:absolute;left:0;right:0;margin:auto;top:3rem;line-height:1.15;}.background.__jsx-style-dynamic-selector{position:absolute;width:100%;opacity:0;-webkit-transition:opacity 1.5s;transition:opacity 1.5s;-webkit-transition-delay:1.2s;transition-delay:1.2s;}.animate.__jsx-style-dynamic-selector .background.__jsx-style-dynamic-selector{opacity:1;}.contact.__jsx-style-dynamic-selector{position:absolute;bottom:3.5rem;right:3.5rem;z-index:3;font-size:1.4rem;}.contact.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#212529;}.contact.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{color:#212529;-webkit-text-decoration:none;text-decoration:none;}.underline.__jsx-style-dynamic-selector{position:absolute;display:inline-block;left:0;width:0;height:0.1rem;background:#000000;bottom:-1rem;-webkit-transition:all 0.3s cubic-bezier(0.785,0.135,0.15,0.86);transition:all 0.3s cubic-bezier(0.785,0.135,0.15,0.86);}.contact.__jsx-style-dynamic-selector:hover .underline.__jsx-style-dynamic-selector,.underline.expand.__jsx-style-dynamic-selector{width:6rem;}.browse.__jsx-style-dynamic-selector{margin-bottom:-1rem;}@media only screen and (max-width:768px){.text.__jsx-style-dynamic-selector{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:40%;}.hello.__jsx-style-dynamic-selector{font-size:16rem;}.full-service.__jsx-style-dynamic-selector{font-size:3.5rem;}.storytellers.__jsx-style-dynamic-selector{font-size:1.1rem;margin-top:0;}.bottom-text.__jsx-style-dynamic-selector{margin-top:7rem;}.portfolio-items.__jsx-style-dynamic-selector{margin-top:3rem;padding-left:0;padding-right:0;}.portfolio-items.__jsx-style-dynamic-selector .row.__jsx-style-dynamic-selector .even.__jsx-style-dynamic-selector{margin-top:0;}.mia-by-tanishq.__jsx-style-dynamic-selector{margin-top:-5rem;}.service-lists.__jsx-style-dynamic-selector{margin-left:0rem;position:relative;z-index:10;}.service-heading.__jsx-style-dynamic-selector{text-align:center;}.service-items.__jsx-style-dynamic-selector{padding-left:0;border-left:none;text-align:center;}.skills.__jsx-style-dynamic-selector{padding-left:0;text-align:center;}.service-image.__jsx-style-dynamic-selector{display:none;}.services.__jsx-style-dynamic-selector{padding-bottom:8.8rem;}.white-fade.__jsx-style-dynamic-selector{height:3rem;}.full-service.__jsx-style-dynamic-selector{top:0;}.storytellers.__jsx-style-dynamic-selector{margin-bottom:2rem;}.portfolio.__jsx-style-dynamic-selector{padding-bottom:4rem;}.explore-more.__jsx-style-dynamic-selector{margin-top:4rem;}.explore-arrow.__jsx-style-dynamic-selector{display:inline-block;margin-left:1rem;}.browse.__jsx-style-dynamic-selector{margin-bottom:-2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxFY2VzaXN2Mi4wXFxPcHBvc2FibGVUaHVtYnNTZU9GaXhcXG90aHVtYnNcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzYm9CLEFBR2lDLEFBVXlDLEFBSzlELEFBRWMsQUFPRSxBQUdPLEFBSWtDLEFBR3JDLEFBR0MsQUFPSSxBQUdBLEFBR0EsQUFHRixBQUdKLEFBSUUsQUFHRSxBQU1KLEFBSUUsQUFNQSxBQU1BLEFBTUEsQUFLRixBQUdFLEFBR1IsQUFHQSxBQUdTLEFBR0osQUFJSyxBQU9ELEFBTWtCLEFBR25CLEFBR0UsQUFJSCxBQVVSLEFBRzBCLEFBQ0EsQUFDQSxBQUdYLEFBS2dDLEFBR2hDLEFBR1AsQUFVRixBQVNELEFBTUcsQUFTRyxBQU9OLEFBUUUsQUFNQSxBQVVJLEFBT1IsQUFHUSxBQU9KLEFBR0EsQUFJSSxBQVdQLEFBR00sQUFJUSxBQUlWLEFBR0UsQUFHRCxBQUlBLEFBR0EsQUFLSixBQUdJLEFBR0MsQUFLQSxBQUdILEFBS0EsQUFTRixBQUdTLEFBR1IsQUFHUixBQUdjLEFBR0EsQUFHSixBQUdLLEFBSUQsTUFmckIsSUFwT0YsQUEyQ0EsQUEyRkEsQ0E5Tm9CLEFBcUZwQixBQXFLQSxDQWpGc0IsQUFzQkwsQUEwSGYsQ0FsQ0EsQUE0QkEsQ0E1U0YsQUFnTW9CLEFBTUQsQUEyQm5CLEFBR3lCLENBckZmLEFBVUYsQUFlTyxBQXNISyxBQUtDLENBdFBDLEFBMENSLEFBMkJELEFBNElYLEFBVUEsQUFHZ0IsQUFtRGhCLENBOVJlLEFBbUNHLEFBS3BCLEFBR0EsQUF1QmdDLEFBU2hDLEFBc0pFLEFBR2MsQUFlZCxBQUdvQixDQTlTWCxBQWtDWCxBQUdXLEFBdUJYLEFBYVksQUEwQ0MsQUFtQk8sQUFtRU4sQUErQkMsQUFVRyxBQWNPLEFBbUR2QixDQXBPa0IsQUFNRixBQTJQaEIsQ0FqUmdCLEFBNkNsQixBQWtLQSxBQXFFRSxBQVVBLENBckxTLEFBVUYsQUF1S1csQ0FsQmxCLElBNUwwQixBQXNEWCxDQWhNRixBQXFDQyxBQThFRSxDQTFDUixBQStGSyxBQVVGLEFBdUJTLENBdkxaLEFBNkZWLEFBK0dzQixBQVVSLENBOUNhLEFBOEJMLEFBb0VwQixDQU9pQixDQWpERixBQW9FSSxDQTlQckIsQUFtUUUsQ0FoT21CLENBb0NyQixBQU9BLEFBd0tlLENBL09HLEFBTWxCLEFBS1ksQUFXVSxFQWxFYixBQTREYSxBQTBRcEIsQ0FoTGUsQUFVRixBQWNDLEFBd0NZLEFBdUJqQixDQS9QQyxDQXFDRSxBQThFRSxJQWhHaEIsQUFzR3dCLEFBeUhWLENBeEtkLEFBK0hnQixBQXVESixBQThDVixDQWhGUyxBQXFFVCxDQWhQRixBQXFLbUIsRUF2TndFLEFBd0I1RSxBQTZSYixDQXJIa0IsQ0F2SnBCLEFBR0EsQUFHQSxBQWVnQyxBQTRCaEMsQUE4RWlCLEFBVUgsQ0E3SUMsQUE4RUUsQUFzRVEsQ0E3SnpCLEFBa01ZLEFBa0NNLENBZEcsQ0E5SkYsRUFxSEMsQ0EzSEgsR0FpSkQsRUF0TWhCLEFBMEpxQixBQXFDckIsQUFrQ0EsQ0FqSWdDLEFBZ0RULENBbkl2QixBQThFQSxDQTZFc0IsQ0FnRUMsSUFkdkIsRUE5SkEsQUFxR0EsQUFnQkEsQUFzQmEsQ0FqSmIsT0FoQkEsQ0FxSEEsQUE2Q3FCLENBaEVyQixBQVM4RCxDQXdCdkMsQ0FZRyxDQW9EVCxNQXZQakIsQUErR0EsQUF5QnNDLEVBcUZaLENBcEZZLEFBQ0EsQ0EwSGYsR0E3Q3ZCLEFBaUMrRCxJQWhFL0QsQ0ExQ3FCLFdBdUhuQixNQXRIbUIsV0F6SnlFLE1BMEo5RixDQWxCMEIsT0FnRzFCLGlCQTFCMEIsVUFqRDFCLGtCQXZKc0IsQUFtSWlCLHFCQWxJdkMsTUFOc0YsQ0FrUXRGLDJDQXBEc0IsT0FyRW9CLEdBZ0MxQyxRQXNDd0IsZ0JBOU0rQyxJQStNdkUscURBdEUwQixPQXhJMUIsNkNBeUl5QixvREFDekIiLCJmaWxlIjoiRDpcXEVjZXNpc3YyLjBcXE9wcG9zYWJsZVRodW1ic1NlT0ZpeFxcb3RodW1ic1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IEFycm93IGZyb20gXCIuLi9jb21wb25lbnRzL2Fycm93XCJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtvcGVuTWVudX0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcbmltcG9ydCBDbGllbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvY2xpZW50cydcbmltcG9ydCB7YWRkQ2xhc3NUb0N1cnNvcixyZW1vdmVDbGFzc0Zyb21DdXJzb3J9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnXG5pbXBvcnQgeyBNT0JJTEVfQlJFQUtQT0lOVCB9IGZyb20gXCIuLi9jb25maWdcIlxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc01vYmlsZTpmYWxzZSxcbiAgICAgIHVuZGVybGluZUV4cGFuZDogZmFsc2UsXG4gICAgICBiYWNrZ3JvdW5kU3R5bGVzOiB7IHRvcDogXCIwXCIsIGxlZnQ6IFwiMFwiIH0sXG4gICAgICBiYWNrZ3JvdW5kUmVhZHk6IGZhbHNlLFxuICAgICAgYmFja2dyb3VuZFNob3c6IGZhbHNlLFxuICAgICAgbG9hZGluZ0xvZ29SZWFkeTogZmFsc2UsXG4gICAgICBhbmltYXRlOiBmYWxzZSxcbiAgICAgIG1lbnVCdG5Db2xvcjpcImJsYWNrXCJcbiAgICB9O1xuICAgIHRoaXMuYmFja2dyb3VuZEltYWdlID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgICB0aGlzLnJlbGxheFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5ub3RQZXJmb3JtZWRBbmltYXRpb24gPSB0cnVlXG4gICAgdGhpcy53aGl0ZU1lbnVTZWN0aW9ucyA9IFtSZWFjdC5jcmVhdGVSZWYoKV1cbiAgfVxuICAvLyBoYW5kbGVTY3JvbGwgPSAoKT0+e1xuICAvLyAgIGZvcihsZXQgaT0wO2k8dGhpcy53aGl0ZU1lbnVTZWN0aW9ucy5sZW5ndGg7aSsrKXtcbiAgLy8gICAgIGxldCBib3VuZGluZ1ZhbHMgPSB0aGlzLndoaXRlTWVudVNlY3Rpb25zW2ldLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgLy8gICAgIGlmKGJvdW5kaW5nVmFscy50b3AgPCAwICYmIChib3VuZGluZ1ZhbHMudG9wICogLTEgPCBib3VuZGluZ1ZhbHMuaGVpZ2h0KSl7XG4gIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbnVCdG5Db2xvcjpcIndoaXRlXCJ9KVxuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudUJ0bkNvbG9yOlwiYmxhY2tcIn0pXG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG4gIGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICB0aGlzLnBvc2l0aW9uSW1hZ2UoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtpc01vYmlsZTp3aW5kb3cuaW5uZXJXaWR0aCA8IE1PQklMRV9CUkVBS1BPSU5UP3RydWU6ZmFsc2V9KVxuICB9XG4gIHBvc2l0aW9uSW1hZ2UoY2IpIHtcbiAgICBsZXQgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjByZW1cIiwgbGVmdDogXCItMzEuNSVcIiwgd2lkdGg6IFwiMjA4JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNDAwKVxuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjByZW1cIiwgbGVmdDogXCItMzEuNSVcIiwgd2lkdGg6IFwiMjA4JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNjUwKVxuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItMjAuNSVcIiwgd2lkdGg6IFwiMTIwJVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAyNClcbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7dG9wOlwiLTEuNXJlbVwiLGxlZnQ6XCItMjAuNSVcIix3aWR0aDpcIjEyMCVcIn1cbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7IHRvcDogXCItMC41cmVtXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTM2NilcbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7IHRvcDogXCItMC41cmVtXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTQ0MClcbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7IHRvcDogXCItMS41cmVtXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgLy8gfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBiYWNrZ3JvdW5kU3R5bGVzIH0sICgpID0+IHtcbiAgICAgIGlmIChjYikge1xuICAgICAgICBjYigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuc3RhdGUuYmFja2dyb3VuZFJlYWR5ICYmXG4gICAgICB0aGlzLnN0YXRlLmxvYWRpbmdMb2dvUmVhZHkgJiZcbiAgICAgIHRoaXMubm90UGVyZm9ybWVkQW5pbWF0aW9uXG4gICAgKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uSW1hZ2UoKTtcbiAgICAgIHRoaXMubm90UGVyZm9ybWVkQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLnByb3BzLm9wZW5NZW51KGZhbHNlKTtcbiAgICAgIC8vIHRoaXMubW91c2VFdmVudHMoKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbmltYXRlOiB0cnVlIH0sKCk9PntcbiAgICAgICAgICAvLyB0aGlzLnByb3BzLnJlbW92ZUNsYXNzRnJvbUN1cnNvcihcImxhcmdlclwiKSAgXG4gICAgICAgICAgLy8gdGhpcy5wcm9wcy5yZW1vdmVDbGFzc0Zyb21DdXJzb3IoXCJ3aGl0ZVwiKSAgXG4gICAgICAgIH0pO1xuICAgICAgfSwgNzUwKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aXNNb2JpbGU6d2luZG93LmlubmVyV2lkdGggPCBNT0JJTEVfQlJFQUtQT0lOVD90cnVlOmZhbHNlfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLmhhbmRsZVJlc2l6ZSlcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVNjcm9sbClcbiAgICBjb25zdCBsb2FkaW5nTG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGxvYWRpbmdMb2dvLnNyYyA9IFwiL2ltYWdlcy9sb2FkaW5nX2xvZ28ucG5nXCI7XG4gICAgbG9hZGluZ0xvZ28ub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmdMb2dvUmVhZHk6IHRydWUgfSk7XG4gICAgfTtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gXCIvaW1hZ2VzL2hvbWUtY292ZXIuanBnXCI7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYWNrZ3JvdW5kUmVhZHk6IHRydWUgfSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMucmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKFwid2hpdGVcIilcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuaGFuZGxlUmVzaXplKVxuICAgIC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlU2Nyb2xsKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICBcbi8vICAgICBmb3Igc2VvIHB1cnBvc2VcbiAgICAgIGNvbnN0IHNjaGVtYURhdGE9e1xuXG4gICAgICBcIkBjb250ZXh0XCI6IFwiaHR0cDovL3NjaGVtYS5vcmdcIixcbiAgICAgIFwiQHR5cGVcIjogXCJzZXJ2aWNlXCIsXG4gICAgICBcIm5hbWVcIjogXCJPcHBvc2FibGUgVGh1bWJzXCIsXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vb3Bwb3NhYmxlLXRodW1icy52ZXJjZWwuYXBwL1wiXG4gICB9XG5cbiAgIEpTT04uc3RyaW5naWZ5KHNjaGVtYURhdGEpXG4gICAgXG4gICAgXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgbmF2UG9zaXRpb249XCJhYnNvbHV0ZVwiIG5hdlRleHRDb2xvcj1cImJsYWNrXCIgbWVudUJ0bkNvbG9yPXt0aGlzLnN0YXRlLm1lbnVCdG5Db2xvcn0gcGFnZT1cImhvbWVcIj5cbiAgICAgICAgPEhlYWQ+XG4gIDxtZXRhIG5hbWU9XCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIiBjb250ZW50PVwiZlRwN2xvQnpEVEFqWEV1dGlFY2xmc3Q0YzN2dDEzdWt0cVdfZEFGVFdvSVwiIC8+XG4gIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJicmFuZCBpZGVudGl0eSBhZ2VuY3ksIGJyYW5kIGlkZW50aXR5IGRlc2lnbiBhZ2VuY3ksIGNvcnBvcmF0ZSBpZGVudGl0eSBhZ2VuY3ksIGJyYW5kIGlkZW50aXR5LCBicmFuZGluZyBkZXNpZ24sIGRpZ2l0YWwgbWVkaWEgbWFuYWdlbWVudCxkaWdpdGFsIG1lZGlhIGFnZW5jeSwgc29jaWFsIG1lZGlhIGFnZW5jaWVzLGRpZ2l0YWwgbWVkaWEgbWFya2V0aW5nIGNvbXBhbmllc1wiLz5cbiAgICAgICAgICA8dGl0bGU+QnJhbmQgSWRlbnRpdHkgQWdlbmN5IHwgT3Bwb3NhYmxlIFRodW1iczwvdGl0bGU+XG4gICAgICAgICAgey8qIDxoMT5PcHBvc2FibGUgVGh1bWJzPC9oMT4gKi99XG48bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiT3Bwb3NhYmxlIFRodW1icyB3b3JrIHdpdGggY29tcGFuaWVzIGZvciB0aGVpciBicmFuZGluZy4gSWYgeW91IGhhdmUgYSBuZXcgYnJhbmQgdG8gbGF1bmNoLCB3ZSBjYW4gaGVscCB5b3UsIHJpZ2h0IGZyb20gbmFtaW5nIGl0IHRvIGRldmVsb3BpbmcgaXRzIGlkZW50aXR5LlwiLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry1WVE1GNzBQN0hXXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICBndGFnKCdjb25maWcnLCAnRy1WVE1GNzBQN0hXJyk7XG4gICAgICAgICAgYCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz4gXG5cbiB7Lyogc2NoZW1hIGlzIGltcGxlbWVudGVkICovfVxuPHNjcmlwdFxuICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCJcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KHNjaGVtYURhdGEpIH19XG4gIC8+XG4gICAgICAgICAgICAgICAgICBcbjwvSGVhZD5cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZ0xvZ29SZWFkeSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuYW5pbWF0ZSA/IFwiYW5pbWF0ZVwiIDogXCJcIn1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy13cmFwcGVyXCIgc3R5bGU9e3toZWlnaHQ6YCR7dGhpcy5wcm9wcy5jb21tb24ud2luZG93SGVpZ2h0fXB4YH19PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvYWRpbmdfbG9nby5wbmdcIiBhbHQ9J2hvbWVjb3ZlcicgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9wLXNlY3Rpb24td3JhcHBlciBibGFjay1jdXJzb3IgJHt0aGlzLnN0YXRlLmFuaW1hdGUgPyBcImFuaW1hdGVcIiA6IFwiXCJ9YH0gc3R5bGU9e3sgaGVpZ2h0OiBgJHt0aGlzLnByb3BzLmNvbW1vbi53aW5kb3dIZWlnaHR9cHhgIH19PlxuICAgICAgICAgICAgey8qIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9ob21lLWNvdmVyLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJob21lIGNvdmVyXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPVwiXCI+ICovfVxuICAgICAgICAgICAgPGltZyBzdHlsZT17dGhpcy5zdGF0ZS5iYWNrZ3JvdW5kU3R5bGVzfSBzcmM9XCIvaW1hZ2VzL2hvbWUtY292ZXIuanBnXCIgY2xhc3NOYW1lPXtgYmFja2dyb3VuZGB9IHJlZj17dGhpcy5iYWNrZ3JvdW5kSW1hZ2V9IGFsdD0naG9tZWNvdmVyJy8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Rvcnl0ZWxsZXJzIGZ1dHVyYS1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNoaWxkXCIgc3R5bGU9e3tmb250V2VpZ2h0OlwiNTAlXCJ9fT5NRUVUIFRIRSBTVE9SWVRFTExFUlM8L2g0PiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbGxvIGhlbHZldGljYS1uZXVlLWNvbmRlbnNlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlbGxvXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bGwtc2VydmljZSBiaWctY2FzbG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT4gSW5kZXBlbmRlbnQ8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWdlbmN5PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1kb3duLWFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IGRvd25cIj4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gbG9va2luZy1mb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tdGV4dFwiPjxoMT5CcmFuZCBJZGVudGl0eSBBZ2VuY3k8L2gxPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPC9QYXJhbGxheD4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoaXRlLWZhZGVcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tY2F0ZWdvcmllcyB0ZXh0LWNlbnRlciBwYWRkZWQtY29udGVudFwiPlxuICAgICAgICAgICAgICBJbnNpZ2h0cyAvIEJyYW5kIElkZW50aXR5IC8gUGFja2FnaW5nIC8gQWR2ZXJ0aXNpbmcgLyBEaWdpdGFsIC8gR3JhcGhpY3MgLyBGaWxtc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pdGVtc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZGQgbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vQmlnQmFueWFuLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJiaWcgYmFueWFuXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPXtgcG9ydGZvbGlvLWl0ZW0gJHt0aGlzLnN0YXRlLmlzTW9iaWxlP1wid2hpdGUtbWVudS1idG5cIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL2JpZy1iYW55YW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+QmlnIEJhbnlhbiA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+QW4gSXRhbGlhbiB3aW5lbWFrZXIuIEEgcGFzc2lvbmF0ZSBicmFuZCB0ZWFtLiBBbmQgdXMuIFllYXJzIG9mIHTDqnRlLcOgLXTDqnRlcyBhbmQgcmVzZWFyY2gtZHJpdmVuIGluc2lnaHRzIGxlZCB1cyB0byByZWNyZWF0ZSB0aGUgcGFja2FnaW5nIGFuZCBjb21tdW5pY2F0aW9uIHN0cmF0ZWd5IGZvciBCaWcgQmFueWFuLiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZXZlbiBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9sYW5nb29yLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJsYW5nb29yXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPXtgcG9ydGZvbGlvLWl0ZW0gJHt0aGlzLnN0YXRlLmlzTW9iaWxlP1wid2hpdGUtbWVudS1idG5cIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL2xhbmdvb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+TCdhbmdvb3IgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPldpbmUgY2FuIGJlIGVsZWdhbnQuIFdpbmUgY2FuIGJlIHNvcGhpc3RpY2F0ZWQuIEJ1dCB3aW5lIGFuZCBmdW4/IEhlcmXigJlzIGhvdyB3ZSBtYXJyaWVkIOKAmGZ1buKAmSBhbmQgYSBuZXcgYnJhbmQgb2Ygd2luZXMgZnJvbSBCaWcgQmFueWFuLCBrbm93biBmb3IgaXRzIHByZW1pdW0gd2luZXMuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9kZCBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9FbmNoYW50ZXVyLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJlbmNoYW50ZXVyXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPVwicG9ydGZvbGlvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9lbmNoYW50ZXVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkVuY2hhbnRldXIgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+SXTigJlzIEZyZW5jaCwgaXTigJlzIHJvbWFudGljIGFuZCBpdOKAmXMgc28gdmVyeSBmbG9yYWwuIEhvdyBjYW4gd2Ugbm90IGZhbGwgaW4gbG92ZSB3aXRoIEVuY2hhbnRldXI/IFdlIGhhdmUgSy1kcmFtYSBmYW5zIG9uIG91ciB0ZWFtIHdobyBhYnNvbHV0ZWx5IGxvdmUgdGhpcyBicmFuZCE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGV2ZW4gbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vZnluZC5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvZnluZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5GWU5EIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5TZWVkZWQgaW4gdGhlIGlkZWEgb2Ygc2VsZi1leHByZXNzaW9uLCBGWU5EIGluc3BpcmVkIHVzIHdpdGggaXRzIGZ1bmN0aW9uYWwgY2xvdGhpbmcgbGluZXMuIEZyb20gc3RyYXRlZ3kgdG8gaWRlbnRpdHkgYW5kIGJyYW5kIGFyY2hpdGVjdHVyZSBkZXNpZ24sIHdlIGhlbHBlZCBicmluZyB0aGlzIGJyYW5kIHRvIGxpZmUuIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZGQgbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL0NoYW5kcmlrYTMuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvY2hhbmRyaWthXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkNoYW5kcmlrYSA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+SGVyZeKAmXMgYSBicmFuZCB3ZSBhbGwgZ3JldyB1cCB3aXRoLiBBbmQgeWV0LCBpdCBtYW5hZ2VkIHRvIHN1cnByaXNlIHVzIHdpdGggaXRzIHNlY3JldHMuIFdlIHNoYXJlZCB0aGVzZSBsaXR0bGUgbnVnZ2V0cyB3aXRoIHRoZSB3b3JsZCBpbiBvdXIgY2FtcGFpZ24uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBldmVuIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL1NhbnRvb3IuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9XCJwb3J0Zm9saW8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL3NhbnRvb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+U2FudG9vciA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+V2hvIGRvZXNu4oCZdCByZW1lbWJlciB0aGUgY2xhc3NpYyDigJxtdW1teeKAnSBhZHMhIEl0IGdpdmVzIHVzIGdyZWF0IHByaWRlIHRvIHdvcmsgb24gY2FtcGFpZ25zIGZvciBhIGJyYW5kIHRoYXTigJlzIGFzIHJlbGV2YW50IHRvZGF5IGFzIGl0IHdhcyBhIGZldyBkZWNhZGVzIGFnby48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2RkIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL1ZvaUplYW5zLnBuZ1wiIGJnSW1hZ2VBbHQ9XCJsYW5nb29yXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPXtgcG9ydGZvbGlvLWl0ZW0gJHt0aGlzLnN0YXRlLmlzTW9iaWxlP1wid2hpdGUtbWVudS1idG5cIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL3ZvaS1qZWFuc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5WT0kgSmVhbnMgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPlRoZSB2ZXJ5IGlkZWEgb2YgdGhlc2UgZGVuaW1zIGluc3BpcmVkIHVzISBWT0kgaGFzIGVyZ29ub21pY2FsbHkgZW5naW5lZXJlZCBkZW5pbXMgdGhhdCBjYWxsZWQgZm9yIGVkZ3ksIGZhc2hpb24gZm9yd2FyZCBjb21tdW5pY2F0aW9uLiBBbmQgd2UgcmV2ZWxlZCBpbiBpdC48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZXZlbiBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vSWNlYnVyZzEuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvaWNlYnVyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5JY2VCdXJnIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5JbnRlbnNlIGNyYXZpbmdzIGZvciBidXJnZXJzIGFuZCBzaGFrZXMgZmVkIG91ciBicmFpbnMgYXMgd2Ugd29ya2VkIG9uIHRoZSBicmFuZCBpZGVhIGFuZCBpZGVudGl0eSBmb3IgdGhpcyBVSy1iYXNlZCBnb3VybWV0IGJ1cmdlciBjaGFpbi48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2RkIG1pYS1ieS10YW5pc2hxIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL01pYTEuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvbWlhLWJ5LXRhbmlzaHFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+TWlhIC0gVGFuaXNocSA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+VGhlc2UgZmlsbXMgYXJlIGEgY29sbGVjdGlvbiBvZiBzdG9yaWVzIG9mIEluZGlhbiB3b21lbiB3aG8gaW5zcGlyZSB5b3Ugd2l0aCB0aGVpciByZXNpbGllbmNlLCBjaGFybSB5b3Ugd2l0aCB0aGVpciBwcmVzZW5jZSBhbmQgYXdlIHlvdSB3aXRoIHRoZWlyIGFjaGlldmVtZW50cy48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZXZlbiBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9HcmFwaGljczEuanBnXCIgYmdJbWFnZUFsdD1cImdyYXBoaWNzXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPVwicG9ydGZvbGlvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+R3JhcGhpY3MgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5BIGRpZ2l0YWwgYXJ0IHByb2plY3QgdGhhdCBsZWQgdXMgdG8gY3JlYXRlIGVkZ3ksIG1vZGVybiBncmFwaGljcyBmb3IgY2xvdGhpbmcgYW5kIG1lcmNoYW5kaXNlLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuby1jc3NcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxvcmUtbW9yZSB0ZXh0LWNlbnRlciBwYWRkZWQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZVwiPmJyb3dzZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjQuNnJlbVwifX0+ICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV4cGxvcmUtYXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvdyBkaXJlY3Rpb249XCJkb3duXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzIHBvc2l0aW9uLXJlbGF0aXZlIHBhZGRlZC1jb250ZW50IHdoaXRlLWN1cnNvciB3aGl0ZS1jdXJzb3Igd2hpdGUtbWVudS1idG5cIiByZWY9e3RoaXMud2hpdGVNZW51U2VjdGlvbnNbMF19PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtaGVhZGluZyBtb3JlLWxldHRlci1zcGFjaW5nIGZ1dHVyYS1saWdodCBzbGlnaHRseS1sYXJnZXItdGV4dCB5ZWxsb3ctdGV4dFwiPlNFUlZJQ0VTPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1saXN0c1wiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzZXJ2aWNlLWl0ZW1zIGxpc3Qtc3R5bGUtbm9uZSB3aGl0ZS10ZXh0IGxhcmdlci10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdpbnNpZ2h0cycgfSx9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBJbnNpZ2h0c1xuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ2JyYW5kLWlkZW50aXR5JyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBCcmFuZCBJZGVudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAncGFja2FnaW5nJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBQYWNrYWdpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ2FkdmVydGlzaW5nJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBBZHZlcnRpc2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnZGlnaXRhbCcgfSx9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRGlnaXRhbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnZGlnaXRhbCcgfSx9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgR3JhcGhpY3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ2ZpbG1zJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxtc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNraWxscyBsaXN0LXN0eWxlLW5vbmUgc2xpZ2h0bHktbGFyZ2VyLXRleHQgZnV0dXJhLWxpZ2h0IHllbGxvdy10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8bGk+Q1JFQVRJVkU8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPklOU0lHSFQtRFJJVkVOPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5DVUxUVVJBTExZIFJFTEVWQU5UPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NlcnZpY2VzLWJnLTIucG5nXCIgY2xhc3NOYW1lPVwid2lkdGgtMTAwXCIgIGFsdD0naG9tZWNvdmVyJy8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctbW9iaWxlIGhpZGUtZGVza3RvcCB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7bWFyZ2luVG9wOlwiNy4ycmVtXCJ9fT5cbiAgICAgICAgICAgICAgICA8QXJyb3cgZGlyZWN0aW9uPVwiZG93blwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxDbGllbnRzIC8+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvd2F2ZS1ibGFjay5naWZcIiBjbGFzc05hbWU9XCJ3aWR0aC0xMDAgd2F2ZVwiIGFsdD0naG9tZWNvdmVyJyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyF0aGlzLnN0YXRlLmxvYWRpbmdMb2dvUmVhZHkgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxhY2stYmdcIj48L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLndoaXRlLWZhZGV7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwcmVtO1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LDI1NSwyNTUsIDEpKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwyNTUsMjU1LCAxKSk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LDI1NSwyNTUsIDEpKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgd2hpdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFycm93LXJpZ2h0e1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKTtcbiAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucC1pbmZvLXdyYXBwZXI6aG92ZXIgLmFycm93LXJpZ2h0LC5wb3J0Zm9saW8taXRlbTpob3ZlciAuYXJyb3ctcmlnaHR7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDFyZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAud2F2ZXtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgLy8gYm90dG9tOiAtNzglO1xuICAgICAgICAgICAgICBib3R0b206MDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWl0ZW1zIGxpIGF7XG4gICAgICAgICAgICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1pdGVtcyBsaSBhOmhvdmVye1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgY29sb3I6I0Y5RUQzMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWl0ZW1zIGxpOmhvdmVye1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGluc01lZGl1bUl0YWxpYyxzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucC1pbmZvLXdyYXBwZXJ7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1hdDEgLnAtaW5mb3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICBib3R0b206IDdyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuaGVsbG8gLmNoaWxke1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLnN0b3J5dGVsbGVycyAuY2hpbGR7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuZnVsbC1zZXJ2aWNlIC5jaGlsZHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAuYW5pbWF0ZSAubG9va2luZy1mb3IgLmNoaWxke1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5leHBsb3JlLW1vcmV7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTo0LjZyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6OHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWxpc3RzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2UtaXRlbXN7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNi41cmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2tpbGxzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2LjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1pbWFnZXtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogLTUlO1xuICAgICAgICAgICAgICB0b3A6IC0xJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDQ3JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlc3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDojMDAwMDAwO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo4LjhyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjI1cmVtO1xuICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9ydGZvbGlve1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmZmZmY7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOjhyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cmVtO1xuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3J0Zm9saW8taXRlbXN7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxN3JlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTUlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MTUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtcyAucm93IC5ldmVue1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOi04cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby10aXRsZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6NC42cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtLmZvcm1hdDIgLmltYWdlLXdyYXBwZXIgaW1ne1xuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1kZXNjcmlwdGlvbntcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ldmVuIC5mb3JtYXQyIC5wb3J0Zm9saW8taW5mb3tcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtYXQyIC5wb3J0Zm9saW8taW5mb3tcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDozcmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nOjAgNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybWF0MSAucG9ydGZvbGlvLWluZm97XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBib3R0b206IDhyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtYXQxe1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMjUlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ldmVuIC5mb3JtYXQxe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSkgMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1jYXRlZ29yaWVze1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm90dG9tLXRleHR7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNC41cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaG9tZS1kb3duLWFycm93e1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NHJlbTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZsb2F0aW5nO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OjEuNHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuaG9tZS1kb3duLWFycm93e1xuICAgICAgICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZsb2F0aW5nIHtcbiAgICAgICAgICAgICAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsICAwcHgpOyB9XG4gICAgICAgICAgICAgIDY1JSAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxNXB4KTsgfVxuICAgICAgICAgICAgICB0byAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTBweCk7IH0gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3Rvcnl0ZWxsZXJzIHtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS43cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLmxvYWRpbmctd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ke3RoaXMucHJvcHMuY29tbW9uLndpbmRvd0hlaWdodCArIDEwMH1weCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9hZGluZy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvYWRpbmctd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllcigwLjc3LCAwLCAwLjE3NSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxhY2stYmd7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvYWRpbmctd3JhcHBlciBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XG4gICAgICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDU2cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRvcC1zZWN0aW9uLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRvcC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWxsbyB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmMjA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnJlbTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MC44O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZ1bGwtc2VydmljZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0MTQwNDI7O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgdG9wOiAzcmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMy41cmVtO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAzLjVyZW07XG4gICAgICAgICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0IGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3QgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVuZGVybGluZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMC4xcmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMXJlbTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0OmhvdmVyIC51bmRlcmxpbmUsXG4gICAgICAgICAgICAudW5kZXJsaW5lLmV4cGFuZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDZyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnJvd3Nle1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOi0xcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcbiAgICAgICAgICAgICAgLnRleHR7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5oZWxsb3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTZyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmZ1bGwtc2VydmljZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc3Rvcnl0ZWxsZXJze1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjFyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDowO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ib3R0b20tdGV4dHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wb3J0Zm9saW8taXRlbXN7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtcyAucm93IC5ldmVue1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubWlhLWJ5LXRhbmlzaHF7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDotNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VydmljZS1saXN0cyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlLWhlYWRpbmd7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlcnZpY2UtaXRlbXN7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6bm9uZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2tpbGxze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlLWltYWdlIHtcbiAgICAgICAgICAgICAgICAvLyByaWdodDogLTEwJTtcbiAgICAgICAgICAgICAgICAvLyB0b3A6YXV0bztcbiAgICAgICAgICAgICAgICAvLyBib3R0b206IC0xJTtcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogNTclO1xuICAgICAgICAgICAgICAgIC8vIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlc3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo4LjhyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLndoaXRlLWZhZGV7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6M3JlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZnVsbC1zZXJ2aWNle1xuICAgICAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zdG9yeXRlbGxlcnMge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBvcnRmb2xpb3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo0cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsb3JlLW1vcmV7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo0cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsb3JlLWFycm93e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjFyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmJyb3dzZXtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOi0ycmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7IGNvbW1vbiB9KSB7XG4gIHJldHVybiB7XG4gICAgY29tbW9uLFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtvcGVuTWVudSxhZGRDbGFzc1RvQ3Vyc29yLHJlbW92ZUNsYXNzRnJvbUN1cnNvcn0pKEhvbWUpO1xuIl19 */\n/*@ sourceURL=D:\\\\Ecesisv2.0\\\\OpposableThumbsSeOFix\\\\othumbs\\\\pages\\\\index.js */")));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

function mapStateToProps(_ref) {
  var common = _ref.common;
  return {
    common: common
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, {
  openMenu: _redux_actions__WEBPACK_IMPORTED_MODULE_15__["openMenu"],
  addClassToCursor: _redux_actions__WEBPACK_IMPORTED_MODULE_15__["addClassToCursor"],
  removeClassFromCursor: _redux_actions__WEBPACK_IMPORTED_MODULE_15__["removeClassFromCursor"]
})(Home));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwicG9zaXRpb25JbWFnZSIsInNldFN0YXRlIiwiaXNNb2JpbGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiTU9CSUxFX0JSRUFLUE9JTlQiLCJzdGF0ZSIsInVuZGVybGluZUV4cGFuZCIsImJhY2tncm91bmRTdHlsZXMiLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VuZFJlYWR5IiwiYmFja2dyb3VuZFNob3ciLCJsb2FkaW5nTG9nb1JlYWR5IiwiYW5pbWF0ZSIsIm1lbnVCdG5Db2xvciIsImJhY2tncm91bmRJbWFnZSIsIlJlYWN0IiwiY3JlYXRlUmVmIiwicmVsbGF4UmVmIiwibm90UGVyZm9ybWVkQW5pbWF0aW9uIiwid2hpdGVNZW51U2VjdGlvbnMiLCJjYiIsImJvdHRvbSIsIndpZHRoIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib3Blbk1lbnUiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVJlc2l6ZSIsImxvYWRpbmdMb2dvIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJpbWciLCJyZW1vdmVDbGFzc0Zyb21DdXJzb3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2NoZW1hRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb21tb24iLCJ3aW5kb3dIZWlnaHQiLCJfX2h0bWwiLCJoZWlnaHQiLCJmb250V2VpZ2h0IiwicGF0aG5hbWUiLCJxdWVyeSIsImZpbHRlciIsIm1hcmdpblRvcCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbm5lY3QiLCJhZGRDbGFzc1RvQ3Vyc29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBQ01BLEk7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dXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IEFycm93IGZyb20gXCIuLi9jb21wb25lbnRzL2Fycm93XCJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtvcGVuTWVudX0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcbmltcG9ydCBDbGllbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvY2xpZW50cydcbmltcG9ydCB7YWRkQ2xhc3NUb0N1cnNvcixyZW1vdmVDbGFzc0Zyb21DdXJzb3J9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnXG5pbXBvcnQgeyBNT0JJTEVfQlJFQUtQT0lOVCB9IGZyb20gXCIuLi9jb25maWdcIlxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc01vYmlsZTpmYWxzZSxcbiAgICAgIHVuZGVybGluZUV4cGFuZDogZmFsc2UsXG4gICAgICBiYWNrZ3JvdW5kU3R5bGVzOiB7IHRvcDogXCIwXCIsIGxlZnQ6IFwiMFwiIH0sXG4gICAgICBiYWNrZ3JvdW5kUmVhZHk6IGZhbHNlLFxuICAgICAgYmFja2dyb3VuZFNob3c6IGZhbHNlLFxuICAgICAgbG9hZGluZ0xvZ29SZWFkeTogZmFsc2UsXG4gICAgICBhbmltYXRlOiBmYWxzZSxcbiAgICAgIG1lbnVCdG5Db2xvcjpcImJsYWNrXCJcbiAgICB9O1xuICAgIHRoaXMuYmFja2dyb3VuZEltYWdlID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgICB0aGlzLnJlbGxheFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5ub3RQZXJmb3JtZWRBbmltYXRpb24gPSB0cnVlXG4gICAgdGhpcy53aGl0ZU1lbnVTZWN0aW9ucyA9IFtSZWFjdC5jcmVhdGVSZWYoKV1cbiAgfVxuICAvLyBoYW5kbGVTY3JvbGwgPSAoKT0+e1xuICAvLyAgIGZvcihsZXQgaT0wO2k8dGhpcy53aGl0ZU1lbnVTZWN0aW9ucy5sZW5ndGg7aSsrKXtcbiAgLy8gICAgIGxldCBib3VuZGluZ1ZhbHMgPSB0aGlzLndoaXRlTWVudVNlY3Rpb25zW2ldLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgLy8gICAgIGlmKGJvdW5kaW5nVmFscy50b3AgPCAwICYmIChib3VuZGluZ1ZhbHMudG9wICogLTEgPCBib3VuZGluZ1ZhbHMuaGVpZ2h0KSl7XG4gIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbnVCdG5Db2xvcjpcIndoaXRlXCJ9KVxuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudUJ0bkNvbG9yOlwiYmxhY2tcIn0pXG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG4gIGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICB0aGlzLnBvc2l0aW9uSW1hZ2UoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtpc01vYmlsZTp3aW5kb3cuaW5uZXJXaWR0aCA8IE1PQklMRV9CUkVBS1BPSU5UP3RydWU6ZmFsc2V9KVxuICB9XG4gIHBvc2l0aW9uSW1hZ2UoY2IpIHtcbiAgICBsZXQgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjByZW1cIiwgbGVmdDogXCItMzEuNSVcIiwgd2lkdGg6IFwiMjA4JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNDAwKVxuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjByZW1cIiwgbGVmdDogXCItMzEuNSVcIiwgd2lkdGg6IFwiMjA4JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNjUwKVxuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItMjAuNSVcIiwgd2lkdGg6IFwiMTIwJVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAyNClcbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7dG9wOlwiLTEuNXJlbVwiLGxlZnQ6XCItMjAuNSVcIix3aWR0aDpcIjEyMCVcIn1cbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7IHRvcDogXCItMC41cmVtXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTM2NilcbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7IHRvcDogXCItMC41cmVtXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTQ0MClcbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7IHRvcDogXCItMS41cmVtXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgLy8gfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBiYWNrZ3JvdW5kU3R5bGVzIH0sICgpID0+IHtcbiAgICAgIGlmIChjYikge1xuICAgICAgICBjYigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuc3RhdGUuYmFja2dyb3VuZFJlYWR5ICYmXG4gICAgICB0aGlzLnN0YXRlLmxvYWRpbmdMb2dvUmVhZHkgJiZcbiAgICAgIHRoaXMubm90UGVyZm9ybWVkQW5pbWF0aW9uXG4gICAgKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uSW1hZ2UoKTtcbiAgICAgIHRoaXMubm90UGVyZm9ybWVkQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLnByb3BzLm9wZW5NZW51KGZhbHNlKTtcbiAgICAgIC8vIHRoaXMubW91c2VFdmVudHMoKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbmltYXRlOiB0cnVlIH0sKCk9PntcbiAgICAgICAgICAvLyB0aGlzLnByb3BzLnJlbW92ZUNsYXNzRnJvbUN1cnNvcihcImxhcmdlclwiKSAgXG4gICAgICAgICAgLy8gdGhpcy5wcm9wcy5yZW1vdmVDbGFzc0Zyb21DdXJzb3IoXCJ3aGl0ZVwiKSAgXG4gICAgICAgIH0pO1xuICAgICAgfSwgNzUwKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aXNNb2JpbGU6d2luZG93LmlubmVyV2lkdGggPCBNT0JJTEVfQlJFQUtQT0lOVD90cnVlOmZhbHNlfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLmhhbmRsZVJlc2l6ZSlcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVNjcm9sbClcbiAgICBjb25zdCBsb2FkaW5nTG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGxvYWRpbmdMb2dvLnNyYyA9IFwiL2ltYWdlcy9sb2FkaW5nX2xvZ28ucG5nXCI7XG4gICAgbG9hZGluZ0xvZ28ub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmdMb2dvUmVhZHk6IHRydWUgfSk7XG4gICAgfTtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gXCIvaW1hZ2VzL2hvbWUtY292ZXIuanBnXCI7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYWNrZ3JvdW5kUmVhZHk6IHRydWUgfSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMucmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKFwid2hpdGVcIilcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuaGFuZGxlUmVzaXplKVxuICAgIC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlU2Nyb2xsKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICBcbi8vICAgICBmb3Igc2VvIHB1cnBvc2VcbiAgICAgIGNvbnN0IHNjaGVtYURhdGE9e1xuXG4gICAgICBcIkBjb250ZXh0XCI6IFwiaHR0cDovL3NjaGVtYS5vcmdcIixcbiAgICAgIFwiQHR5cGVcIjogXCJzZXJ2aWNlXCIsXG4gICAgICBcIm5hbWVcIjogXCJPcHBvc2FibGUgVGh1bWJzXCIsXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vb3Bwb3NhYmxlLXRodW1icy52ZXJjZWwuYXBwL1wiXG4gICB9XG5cbiAgIEpTT04uc3RyaW5naWZ5KHNjaGVtYURhdGEpXG4gICAgXG4gICAgXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgbmF2UG9zaXRpb249XCJhYnNvbHV0ZVwiIG5hdlRleHRDb2xvcj1cImJsYWNrXCIgbWVudUJ0bkNvbG9yPXt0aGlzLnN0YXRlLm1lbnVCdG5Db2xvcn0gcGFnZT1cImhvbWVcIj5cbiAgICAgICAgPEhlYWQ+XG4gIDxtZXRhIG5hbWU9XCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIiBjb250ZW50PVwiZlRwN2xvQnpEVEFqWEV1dGlFY2xmc3Q0YzN2dDEzdWt0cVdfZEFGVFdvSVwiIC8+XG4gIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJicmFuZCBpZGVudGl0eSBhZ2VuY3ksIGJyYW5kIGlkZW50aXR5IGRlc2lnbiBhZ2VuY3ksIGNvcnBvcmF0ZSBpZGVudGl0eSBhZ2VuY3ksIGJyYW5kIGlkZW50aXR5LCBicmFuZGluZyBkZXNpZ24sIGRpZ2l0YWwgbWVkaWEgbWFuYWdlbWVudCxkaWdpdGFsIG1lZGlhIGFnZW5jeSwgc29jaWFsIG1lZGlhIGFnZW5jaWVzLGRpZ2l0YWwgbWVkaWEgbWFya2V0aW5nIGNvbXBhbmllc1wiLz5cbiAgICAgICAgICA8dGl0bGU+QnJhbmQgSWRlbnRpdHkgQWdlbmN5IHwgT3Bwb3NhYmxlIFRodW1iczwvdGl0bGU+XG4gICAgICAgICAgey8qIDxoMT5PcHBvc2FibGUgVGh1bWJzPC9oMT4gKi99XG48bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiT3Bwb3NhYmxlIFRodW1icyB3b3JrIHdpdGggY29tcGFuaWVzIGZvciB0aGVpciBicmFuZGluZy4gSWYgeW91IGhhdmUgYSBuZXcgYnJhbmQgdG8gbGF1bmNoLCB3ZSBjYW4gaGVscCB5b3UsIHJpZ2h0IGZyb20gbmFtaW5nIGl0IHRvIGRldmVsb3BpbmcgaXRzIGlkZW50aXR5LlwiLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry1WVE1GNzBQN0hXXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICBndGFnKCdjb25maWcnLCAnRy1WVE1GNzBQN0hXJyk7XG4gICAgICAgICAgYCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz4gXG5cbiB7Lyogc2NoZW1hIGlzIGltcGxlbWVudGVkICovfVxuPHNjcmlwdFxuICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCJcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KHNjaGVtYURhdGEpIH19XG4gIC8+XG4gICAgICAgICAgICAgICAgICBcbjwvSGVhZD5cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZ0xvZ29SZWFkeSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuYW5pbWF0ZSA/IFwiYW5pbWF0ZVwiIDogXCJcIn1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy13cmFwcGVyXCIgc3R5bGU9e3toZWlnaHQ6YCR7dGhpcy5wcm9wcy5jb21tb24ud2luZG93SGVpZ2h0fXB4YH19PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvYWRpbmdfbG9nby5wbmdcIiBhbHQ9J2hvbWVjb3ZlcicgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9wLXNlY3Rpb24td3JhcHBlciBibGFjay1jdXJzb3IgJHt0aGlzLnN0YXRlLmFuaW1hdGUgPyBcImFuaW1hdGVcIiA6IFwiXCJ9YH0gc3R5bGU9e3sgaGVpZ2h0OiBgJHt0aGlzLnByb3BzLmNvbW1vbi53aW5kb3dIZWlnaHR9cHhgIH19PlxuICAgICAgICAgICAgey8qIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9ob21lLWNvdmVyLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJob21lIGNvdmVyXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPVwiXCI+ICovfVxuICAgICAgICAgICAgPGltZyBzdHlsZT17dGhpcy5zdGF0ZS5iYWNrZ3JvdW5kU3R5bGVzfSBzcmM9XCIvaW1hZ2VzL2hvbWUtY292ZXIuanBnXCIgY2xhc3NOYW1lPXtgYmFja2dyb3VuZGB9IHJlZj17dGhpcy5iYWNrZ3JvdW5kSW1hZ2V9IGFsdD0naG9tZWNvdmVyJy8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Rvcnl0ZWxsZXJzIGZ1dHVyYS1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNoaWxkXCIgc3R5bGU9e3tmb250V2VpZ2h0OlwiNTAlXCJ9fT5NRUVUIFRIRSBTVE9SWVRFTExFUlM8L2g0PiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbGxvIGhlbHZldGljYS1uZXVlLWNvbmRlbnNlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlbGxvXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bGwtc2VydmljZSBiaWctY2FzbG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT4gSW5kZXBlbmRlbnQ8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWdlbmN5PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1kb3duLWFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IGRvd25cIj4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gbG9va2luZy1mb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tdGV4dFwiPjxoMT5CcmFuZCBJZGVudGl0eSBBZ2VuY3k8L2gxPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPC9QYXJhbGxheD4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoaXRlLWZhZGVcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tY2F0ZWdvcmllcyB0ZXh0LWNlbnRlciBwYWRkZWQtY29udGVudFwiPlxuICAgICAgICAgICAgICBJbnNpZ2h0cyAvIEJyYW5kIElkZW50aXR5IC8gUGFja2FnaW5nIC8gQWR2ZXJ0aXNpbmcgLyBEaWdpdGFsIC8gR3JhcGhpY3MgLyBGaWxtc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pdGVtc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZGQgbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vQmlnQmFueWFuLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJiaWcgYmFueWFuXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPXtgcG9ydGZvbGlvLWl0ZW0gJHt0aGlzLnN0YXRlLmlzTW9iaWxlP1wid2hpdGUtbWVudS1idG5cIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL2JpZy1iYW55YW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+QmlnIEJhbnlhbiA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+QW4gSXRhbGlhbiB3aW5lbWFrZXIuIEEgcGFzc2lvbmF0ZSBicmFuZCB0ZWFtLiBBbmQgdXMuIFllYXJzIG9mIHTDqnRlLcOgLXTDqnRlcyBhbmQgcmVzZWFyY2gtZHJpdmVuIGluc2lnaHRzIGxlZCB1cyB0byByZWNyZWF0ZSB0aGUgcGFja2FnaW5nIGFuZCBjb21tdW5pY2F0aW9uIHN0cmF0ZWd5IGZvciBCaWcgQmFueWFuLiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZXZlbiBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9sYW5nb29yLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJsYW5nb29yXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPXtgcG9ydGZvbGlvLWl0ZW0gJHt0aGlzLnN0YXRlLmlzTW9iaWxlP1wid2hpdGUtbWVudS1idG5cIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL2xhbmdvb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+TCdhbmdvb3IgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPldpbmUgY2FuIGJlIGVsZWdhbnQuIFdpbmUgY2FuIGJlIHNvcGhpc3RpY2F0ZWQuIEJ1dCB3aW5lIGFuZCBmdW4/IEhlcmXigJlzIGhvdyB3ZSBtYXJyaWVkIOKAmGZ1buKAmSBhbmQgYSBuZXcgYnJhbmQgb2Ygd2luZXMgZnJvbSBCaWcgQmFueWFuLCBrbm93biBmb3IgaXRzIHByZW1pdW0gd2luZXMuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9kZCBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9FbmNoYW50ZXVyLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJlbmNoYW50ZXVyXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPVwicG9ydGZvbGlvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9lbmNoYW50ZXVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkVuY2hhbnRldXIgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+SXTigJlzIEZyZW5jaCwgaXTigJlzIHJvbWFudGljIGFuZCBpdOKAmXMgc28gdmVyeSBmbG9yYWwuIEhvdyBjYW4gd2Ugbm90IGZhbGwgaW4gbG92ZSB3aXRoIEVuY2hhbnRldXI/IFdlIGhhdmUgSy1kcmFtYSBmYW5zIG9uIG91ciB0ZWFtIHdobyBhYnNvbHV0ZWx5IGxvdmUgdGhpcyBicmFuZCE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGV2ZW4gbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vZnluZC5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvZnluZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5GWU5EIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5TZWVkZWQgaW4gdGhlIGlkZWEgb2Ygc2VsZi1leHByZXNzaW9uLCBGWU5EIGluc3BpcmVkIHVzIHdpdGggaXRzIGZ1bmN0aW9uYWwgY2xvdGhpbmcgbGluZXMuIEZyb20gc3RyYXRlZ3kgdG8gaWRlbnRpdHkgYW5kIGJyYW5kIGFyY2hpdGVjdHVyZSBkZXNpZ24sIHdlIGhlbHBlZCBicmluZyB0aGlzIGJyYW5kIHRvIGxpZmUuIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZGQgbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL0NoYW5kcmlrYTMuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvY2hhbmRyaWthXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkNoYW5kcmlrYSA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+SGVyZeKAmXMgYSBicmFuZCB3ZSBhbGwgZ3JldyB1cCB3aXRoLiBBbmQgeWV0LCBpdCBtYW5hZ2VkIHRvIHN1cnByaXNlIHVzIHdpdGggaXRzIHNlY3JldHMuIFdlIHNoYXJlZCB0aGVzZSBsaXR0bGUgbnVnZ2V0cyB3aXRoIHRoZSB3b3JsZCBpbiBvdXIgY2FtcGFpZ24uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBldmVuIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL1NhbnRvb3IuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9XCJwb3J0Zm9saW8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL3NhbnRvb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+U2FudG9vciA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+V2hvIGRvZXNu4oCZdCByZW1lbWJlciB0aGUgY2xhc3NpYyDigJxtdW1teeKAnSBhZHMhIEl0IGdpdmVzIHVzIGdyZWF0IHByaWRlIHRvIHdvcmsgb24gY2FtcGFpZ25zIGZvciBhIGJyYW5kIHRoYXTigJlzIGFzIHJlbGV2YW50IHRvZGF5IGFzIGl0IHdhcyBhIGZldyBkZWNhZGVzIGFnby48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2RkIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL1ZvaUplYW5zLnBuZ1wiIGJnSW1hZ2VBbHQ9XCJsYW5nb29yXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPXtgcG9ydGZvbGlvLWl0ZW0gJHt0aGlzLnN0YXRlLmlzTW9iaWxlP1wid2hpdGUtbWVudS1idG5cIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL3ZvaS1qZWFuc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5WT0kgSmVhbnMgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPlRoZSB2ZXJ5IGlkZWEgb2YgdGhlc2UgZGVuaW1zIGluc3BpcmVkIHVzISBWT0kgaGFzIGVyZ29ub21pY2FsbHkgZW5naW5lZXJlZCBkZW5pbXMgdGhhdCBjYWxsZWQgZm9yIGVkZ3ksIGZhc2hpb24gZm9yd2FyZCBjb21tdW5pY2F0aW9uLiBBbmQgd2UgcmV2ZWxlZCBpbiBpdC48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZXZlbiBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vSWNlYnVyZzEuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvaWNlYnVyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5JY2VCdXJnIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5JbnRlbnNlIGNyYXZpbmdzIGZvciBidXJnZXJzIGFuZCBzaGFrZXMgZmVkIG91ciBicmFpbnMgYXMgd2Ugd29ya2VkIG9uIHRoZSBicmFuZCBpZGVhIGFuZCBpZGVudGl0eSBmb3IgdGhpcyBVSy1iYXNlZCBnb3VybWV0IGJ1cmdlciBjaGFpbi48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2RkIG1pYS1ieS10YW5pc2hxIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL01pYTEuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvbWlhLWJ5LXRhbmlzaHFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+TWlhIC0gVGFuaXNocSA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+VGhlc2UgZmlsbXMgYXJlIGEgY29sbGVjdGlvbiBvZiBzdG9yaWVzIG9mIEluZGlhbiB3b21lbiB3aG8gaW5zcGlyZSB5b3Ugd2l0aCB0aGVpciByZXNpbGllbmNlLCBjaGFybSB5b3Ugd2l0aCB0aGVpciBwcmVzZW5jZSBhbmQgYXdlIHlvdSB3aXRoIHRoZWlyIGFjaGlldmVtZW50cy48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZXZlbiBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9HcmFwaGljczEuanBnXCIgYmdJbWFnZUFsdD1cImdyYXBoaWNzXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPVwicG9ydGZvbGlvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+R3JhcGhpY3MgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5BIGRpZ2l0YWwgYXJ0IHByb2plY3QgdGhhdCBsZWQgdXMgdG8gY3JlYXRlIGVkZ3ksIG1vZGVybiBncmFwaGljcyBmb3IgY2xvdGhpbmcgYW5kIG1lcmNoYW5kaXNlLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuby1jc3NcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxvcmUtbW9yZSB0ZXh0LWNlbnRlciBwYWRkZWQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZVwiPmJyb3dzZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjQuNnJlbVwifX0+ICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV4cGxvcmUtYXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvdyBkaXJlY3Rpb249XCJkb3duXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzIHBvc2l0aW9uLXJlbGF0aXZlIHBhZGRlZC1jb250ZW50IHdoaXRlLWN1cnNvciB3aGl0ZS1jdXJzb3Igd2hpdGUtbWVudS1idG5cIiByZWY9e3RoaXMud2hpdGVNZW51U2VjdGlvbnNbMF19PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtaGVhZGluZyBtb3JlLWxldHRlci1zcGFjaW5nIGZ1dHVyYS1saWdodCBzbGlnaHRseS1sYXJnZXItdGV4dCB5ZWxsb3ctdGV4dFwiPlNFUlZJQ0VTPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1saXN0c1wiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzZXJ2aWNlLWl0ZW1zIGxpc3Qtc3R5bGUtbm9uZSB3aGl0ZS10ZXh0IGxhcmdlci10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdpbnNpZ2h0cycgfSx9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBJbnNpZ2h0c1xuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ2JyYW5kLWlkZW50aXR5JyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBCcmFuZCBJZGVudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAncGFja2FnaW5nJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBQYWNrYWdpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ2FkdmVydGlzaW5nJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBBZHZlcnRpc2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnZGlnaXRhbCcgfSx9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRGlnaXRhbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnZGlnaXRhbCcgfSx9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgR3JhcGhpY3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ2ZpbG1zJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxtc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNraWxscyBsaXN0LXN0eWxlLW5vbmUgc2xpZ2h0bHktbGFyZ2VyLXRleHQgZnV0dXJhLWxpZ2h0IHllbGxvdy10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8bGk+Q1JFQVRJVkU8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPklOU0lHSFQtRFJJVkVOPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5DVUxUVVJBTExZIFJFTEVWQU5UPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NlcnZpY2VzLWJnLTIucG5nXCIgY2xhc3NOYW1lPVwid2lkdGgtMTAwXCIgIGFsdD0naG9tZWNvdmVyJy8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctbW9iaWxlIGhpZGUtZGVza3RvcCB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7bWFyZ2luVG9wOlwiNy4ycmVtXCJ9fT5cbiAgICAgICAgICAgICAgICA8QXJyb3cgZGlyZWN0aW9uPVwiZG93blwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxDbGllbnRzIC8+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvd2F2ZS1ibGFjay5naWZcIiBjbGFzc05hbWU9XCJ3aWR0aC0xMDAgd2F2ZVwiIGFsdD0naG9tZWNvdmVyJyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyF0aGlzLnN0YXRlLmxvYWRpbmdMb2dvUmVhZHkgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxhY2stYmdcIj48L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLndoaXRlLWZhZGV7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwcmVtO1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LDI1NSwyNTUsIDEpKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwyNTUsMjU1LCAxKSk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LDI1NSwyNTUsIDEpKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgd2hpdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFycm93LXJpZ2h0e1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKTtcbiAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucC1pbmZvLXdyYXBwZXI6aG92ZXIgLmFycm93LXJpZ2h0LC5wb3J0Zm9saW8taXRlbTpob3ZlciAuYXJyb3ctcmlnaHR7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDFyZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAud2F2ZXtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgLy8gYm90dG9tOiAtNzglO1xuICAgICAgICAgICAgICBib3R0b206MDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWl0ZW1zIGxpIGF7XG4gICAgICAgICAgICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1pdGVtcyBsaSBhOmhvdmVye1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgY29sb3I6I0Y5RUQzMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWl0ZW1zIGxpOmhvdmVye1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGluc01lZGl1bUl0YWxpYyxzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucC1pbmZvLXdyYXBwZXJ7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1hdDEgLnAtaW5mb3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICBib3R0b206IDdyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuaGVsbG8gLmNoaWxke1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLnN0b3J5dGVsbGVycyAuY2hpbGR7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuZnVsbC1zZXJ2aWNlIC5jaGlsZHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAuYW5pbWF0ZSAubG9va2luZy1mb3IgLmNoaWxke1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5leHBsb3JlLW1vcmV7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTo0LjZyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6OHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWxpc3RzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2UtaXRlbXN7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNi41cmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2tpbGxzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2LjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1pbWFnZXtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogLTUlO1xuICAgICAgICAgICAgICB0b3A6IC0xJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDQ3JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlc3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDojMDAwMDAwO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo4LjhyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjI1cmVtO1xuICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9ydGZvbGlve1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmZmZmY7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOjhyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cmVtO1xuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3J0Zm9saW8taXRlbXN7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxN3JlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTUlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MTUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtcyAucm93IC5ldmVue1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOi04cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby10aXRsZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6NC42cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtLmZvcm1hdDIgLmltYWdlLXdyYXBwZXIgaW1ne1xuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1kZXNjcmlwdGlvbntcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ldmVuIC5mb3JtYXQyIC5wb3J0Zm9saW8taW5mb3tcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtYXQyIC5wb3J0Zm9saW8taW5mb3tcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDozcmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nOjAgNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybWF0MSAucG9ydGZvbGlvLWluZm97XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBib3R0b206IDhyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtYXQxe1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMjUlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ldmVuIC5mb3JtYXQxe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSkgMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1jYXRlZ29yaWVze1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm90dG9tLXRleHR7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNC41cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaG9tZS1kb3duLWFycm93e1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NHJlbTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZsb2F0aW5nO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OjEuNHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuaG9tZS1kb3duLWFycm93e1xuICAgICAgICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZsb2F0aW5nIHtcbiAgICAgICAgICAgICAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsICAwcHgpOyB9XG4gICAgICAgICAgICAgIDY1JSAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxNXB4KTsgfVxuICAgICAgICAgICAgICB0byAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTBweCk7IH0gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3Rvcnl0ZWxsZXJzIHtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS43cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLmxvYWRpbmctd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ke3RoaXMucHJvcHMuY29tbW9uLndpbmRvd0hlaWdodCArIDEwMH1weCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9hZGluZy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvYWRpbmctd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllcigwLjc3LCAwLCAwLjE3NSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxhY2stYmd7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvYWRpbmctd3JhcHBlciBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XG4gICAgICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDU2cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRvcC1zZWN0aW9uLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRvcC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWxsbyB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmMjA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnJlbTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MC44O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZ1bGwtc2VydmljZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0MTQwNDI7O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgdG9wOiAzcmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMy41cmVtO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAzLjVyZW07XG4gICAgICAgICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0IGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3QgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVuZGVybGluZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMC4xcmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMXJlbTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0OmhvdmVyIC51bmRlcmxpbmUsXG4gICAgICAgICAgICAudW5kZXJsaW5lLmV4cGFuZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDZyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnJvd3Nle1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOi0xcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcbiAgICAgICAgICAgICAgLnRleHR7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5oZWxsb3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTZyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmZ1bGwtc2VydmljZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc3Rvcnl0ZWxsZXJze1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjFyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDowO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ib3R0b20tdGV4dHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wb3J0Zm9saW8taXRlbXN7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtcyAucm93IC5ldmVue1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubWlhLWJ5LXRhbmlzaHF7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDotNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VydmljZS1saXN0cyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlLWhlYWRpbmd7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlcnZpY2UtaXRlbXN7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6bm9uZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2tpbGxze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlLWltYWdlIHtcbiAgICAgICAgICAgICAgICAvLyByaWdodDogLTEwJTtcbiAgICAgICAgICAgICAgICAvLyB0b3A6YXV0bztcbiAgICAgICAgICAgICAgICAvLyBib3R0b206IC0xJTtcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogNTclO1xuICAgICAgICAgICAgICAgIC8vIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlc3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo4LjhyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLndoaXRlLWZhZGV7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6M3JlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZnVsbC1zZXJ2aWNle1xuICAgICAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zdG9yeXRlbGxlcnMge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBvcnRmb2xpb3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo0cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsb3JlLW1vcmV7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo0cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsb3JlLWFycm93e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjFyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmJyb3dzZXtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOi0ycmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7IGNvbW1vbiB9KSB7XG4gIHJldHVybiB7XG4gICAgY29tbW9uLFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtvcGVuTWVudSxhZGRDbGFzc1RvQ3Vyc29yLHJlbW92ZUNsYXNzRnJvbUN1cnNvcn0pKEhvbWUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==