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
      }), "Independent", __jsx("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 44
        }
      }), "Agency")))), __jsx("div", {
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
      }, ".white-fade.__jsx-style-dynamic-selector{position:absolute;bottom:0;height:10rem;width:50%;background:-moz-linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,1));background:-webkit-linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,1));background:linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,1));background:linear-gradient(to bottom,rgba(255,255,255,0),white);}.arrow-right.__jsx-style-dynamic-selector{-webkit-transition:-webkit-transform 400ms cubic-bezier(0.77,0,0.175,1);-webkit-transition:transform 400ms cubic-bezier(0.77,0,0.175,1);transition:transform 400ms cubic-bezier(0.77,0,0.175,1);display:inline-block;}.p-info-wrapper.__jsx-style-dynamic-selector:hover .arrow-right.__jsx-style-dynamic-selector,.portfolio-item.__jsx-style-dynamic-selector:hover .arrow-right.__jsx-style-dynamic-selector{-webkit-transform:translateX(1rem);-ms-transform:translateX(1rem);transform:translateX(1rem);}.wave.__jsx-style-dynamic-selector{width:100%;position:absolute;bottom:0;left:0;}.service-items.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#ffffff;}.service-items.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:none;text-decoration:none;color:#F9ED32;}.service-items.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector:hover{font-family:PoppinsMediumItalic,sans-serif !important;}.p-info-wrapper.__jsx-style-dynamic-selector{position:relative;}.format1.__jsx-style-dynamic-selector .p-info.__jsx-style-dynamic-selector{position:absolute;bottom:0;color:#ffffff;bottom:7rem;padding:0 5%;}.animate.__jsx-style-dynamic-selector .hello.__jsx-style-dynamic-selector .child.__jsx-style-dynamic-selector{-webkit-transition-delay:0.4s;transition-delay:0.4s;}.animate.__jsx-style-dynamic-selector .storytellers.__jsx-style-dynamic-selector .child.__jsx-style-dynamic-selector{-webkit-transition-delay:0.6s;transition-delay:0.6s;}.animate.__jsx-style-dynamic-selector .full-service.__jsx-style-dynamic-selector .child.__jsx-style-dynamic-selector{-webkit-transition-delay:0.8s;transition-delay:0.8s;}.animate.__jsx-style-dynamic-selector .looking-for.__jsx-style-dynamic-selector .child.__jsx-style-dynamic-selector{-webkit-transition-delay:1s;transition-delay:1s;}.explore-more.__jsx-style-dynamic-selector{font-size:4.6rem;margin-top:8rem;}.service-lists.__jsx-style-dynamic-selector{margin-left:14rem;}.service-items.__jsx-style-dynamic-selector{padding-left:6.5rem;margin-top:5rem;line-height:1.2;border-left:1px solid #ffffff;}.skills.__jsx-style-dynamic-selector{margin-top:6rem;padding-left:6.5rem;}.service-image.__jsx-style-dynamic-selector{position:absolute;right:-5%;top:-1%;width:47%;}.services.__jsx-style-dynamic-selector{background:#000000;padding-top:8.8rem;padding-bottom:25rem;overflow:hidden;}.portfolio.__jsx-style-dynamic-selector{background:#ffffff;padding-top:8rem;padding-bottom:8rem;position:relative;}.portfolio-items.__jsx-style-dynamic-selector{margin-top:17rem;padding-left:15%;padding-right:15%;}.portfolio-items.__jsx-style-dynamic-selector .row.__jsx-style-dynamic-selector .even.__jsx-style-dynamic-selector{margin-top:-8rem;}.portfolio-title.__jsx-style-dynamic-selector{font-size:4.6rem;}.portfolio-item.format2.__jsx-style-dynamic-selector .image-wrapper.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:100%;}.portfolio-description.__jsx-style-dynamic-selector{width:80%;}.even.__jsx-style-dynamic-selector .format2.__jsx-style-dynamic-selector .portfolio-info.__jsx-style-dynamic-selector{margin-bottom:12rem;}.format2.__jsx-style-dynamic-selector .portfolio-info.__jsx-style-dynamic-selector{margin-top:3rem;padding:0 5%;}.format1.__jsx-style-dynamic-selector .portfolio-info.__jsx-style-dynamic-selector{position:absolute;bottom:0;color:#ffffff;bottom:8rem;padding:0 5%;}.format1.__jsx-style-dynamic-selector{padding-top:125%;background-attachment:fixed;background-size:50%;background-repeat:no-repeat;}.even.__jsx-style-dynamic-selector .format1.__jsx-style-dynamic-selector{background-position:calc(100%) 0px;}.portfolio-categories.__jsx-style-dynamic-selector{font-size:1.8rem;}.bottom-text.__jsx-style-dynamic-selector{margin-top:4.5rem;font-size:1.8rem;}.home-down-arrow.__jsx-style-dynamic-selector{margin-top:4rem;opacity:0;-webkit-animation-name:floating-__jsx-style-dynamic-selector;animation-name:floating-__jsx-style-dynamic-selector;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-transition:opacity 1s;transition:opacity 1s;-webkit-transition-delay:1.4s;transition-delay:1.4s;}.animate.__jsx-style-dynamic-selector .home-down-arrow.__jsx-style-dynamic-selector{opacity:1;}@-webkit-keyframes floating-__jsx-style-dynamic-selector{from{-webkit-transform:translate(0,0px);-ms-transform:translate(0,0px);transform:translate(0,0px);}65%{-webkit-transform:translate(0,15px);-ms-transform:translate(0,15px);transform:translate(0,15px);}to{-webkit-transform:translate(0,-0px);-ms-transform:translate(0,-0px);transform:translate(0,-0px);}}@keyframes floating-__jsx-style-dynamic-selector{from{-webkit-transform:translate(0,0px);-ms-transform:translate(0,0px);transform:translate(0,0px);}65%{-webkit-transform:translate(0,15px);-ms-transform:translate(0,15px);transform:translate(0,15px);}to{-webkit-transform:translate(0,-0px);-ms-transform:translate(0,-0px);transform:translate(0,-0px);}}.storytellers.__jsx-style-dynamic-selector{-webkit-letter-spacing:1.7rem;-moz-letter-spacing:1.7rem;-ms-letter-spacing:1.7rem;letter-spacing:1.7rem;font-size:1.2rem;margin-top:15rem;}.animate.__jsx-style-dynamic-selector .loading-wrapper.__jsx-style-dynamic-selector{-webkit-transform:translateY(-".concat(this.props.common.windowHeight + 100, "px);-ms-transform:translateY(-").concat(this.props.common.windowHeight + 100, "px);transform:translateY(-").concat(this.props.common.windowHeight + 100, "px);}.loading-wrapper.__jsx-style-dynamic-selector{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.loading-wrapper.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:1000;background:#000000;-webkit-transition:-webkit-transform 0.6s cubic-bezier(0.77,0,0.175,1);-webkit-transition:transform 0.6s cubic-bezier(0.77,0,0.175,1);transition:transform 0.6s cubic-bezier(0.77,0,0.175,1);}.black-bg.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:999;background:#000000;}.loading-wrapper.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:200px;position:absolute;left:calc(50% - 100px);top:calc(50% - 56px);}.top-section-wrapper.__jsx-style-dynamic-selector{max-width:100%;width:100%;height:100vh;margin:auto;overflow:hidden;position:relative;background:#ffffff;}.top-content.__jsx-style-dynamic-selector{position:relative;z-index:2;text-align:center;height:100%;overflow:hidden;}.text.__jsx-style-dynamic-selector{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;padding-bottom:5rem;}.hello.__jsx-style-dynamic-selector{color:#ffff20;font-size:36rem;position:relative;line-height:0.8;}.full-service.__jsx-style-dynamic-selector{color:#414042;font-size:7rem;position:absolute;left:0;right:0;margin:auto;top:3rem;line-height:1.15;}.background.__jsx-style-dynamic-selector{position:absolute;width:100%;opacity:0;-webkit-transition:opacity 1.5s;transition:opacity 1.5s;-webkit-transition-delay:1.2s;transition-delay:1.2s;}.animate.__jsx-style-dynamic-selector .background.__jsx-style-dynamic-selector{opacity:1;}.contact.__jsx-style-dynamic-selector{position:absolute;bottom:3.5rem;right:3.5rem;z-index:3;font-size:1.4rem;}.contact.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#212529;}.contact.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{color:#212529;-webkit-text-decoration:none;text-decoration:none;}.underline.__jsx-style-dynamic-selector{position:absolute;display:inline-block;left:0;width:0;height:0.1rem;background:#000000;bottom:-1rem;-webkit-transition:all 0.3s cubic-bezier(0.785,0.135,0.15,0.86);transition:all 0.3s cubic-bezier(0.785,0.135,0.15,0.86);}.contact.__jsx-style-dynamic-selector:hover .underline.__jsx-style-dynamic-selector,.underline.expand.__jsx-style-dynamic-selector{width:6rem;}.browse.__jsx-style-dynamic-selector{margin-bottom:-1rem;}@media only screen and (max-width:768px){.text.__jsx-style-dynamic-selector{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:40%;}.hello.__jsx-style-dynamic-selector{font-size:16rem;}.full-service.__jsx-style-dynamic-selector{font-size:3.5rem;}.storytellers.__jsx-style-dynamic-selector{font-size:1.1rem;margin-top:0;}.bottom-text.__jsx-style-dynamic-selector{margin-top:7rem;}.portfolio-items.__jsx-style-dynamic-selector{margin-top:3rem;padding-left:0;padding-right:0;}.portfolio-items.__jsx-style-dynamic-selector .row.__jsx-style-dynamic-selector .even.__jsx-style-dynamic-selector{margin-top:0;}.mia-by-tanishq.__jsx-style-dynamic-selector{margin-top:-5rem;}.service-lists.__jsx-style-dynamic-selector{margin-left:0rem;position:relative;z-index:10;}.service-heading.__jsx-style-dynamic-selector{text-align:center;}.service-items.__jsx-style-dynamic-selector{padding-left:0;border-left:none;text-align:center;}.skills.__jsx-style-dynamic-selector{padding-left:0;text-align:center;}.service-image.__jsx-style-dynamic-selector{display:none;}.services.__jsx-style-dynamic-selector{padding-bottom:8.8rem;}.white-fade.__jsx-style-dynamic-selector{height:3rem;}.full-service.__jsx-style-dynamic-selector{top:0;}.storytellers.__jsx-style-dynamic-selector{margin-bottom:2rem;}.portfolio.__jsx-style-dynamic-selector{padding-bottom:4rem;}.explore-more.__jsx-style-dynamic-selector{margin-top:4rem;}.explore-arrow.__jsx-style-dynamic-selector{display:inline-block;margin-left:1rem;}.browse.__jsx-style-dynamic-selector{margin-bottom:-2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxFY2VzaXN2Mi4wXFxPcHBvc2FibGVUaHVtYnNTZU9GaXhcXG90aHVtYnNcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzYm9CLEFBR2lDLEFBVXlDLEFBSzlELEFBRWMsQUFPRSxBQUdPLEFBSWtDLEFBR3JDLEFBR0MsQUFPSSxBQUdBLEFBR0EsQUFHRixBQUdKLEFBSUUsQUFHRSxBQU1KLEFBSUUsQUFNQSxBQU1BLEFBTUEsQUFLRixBQUdFLEFBR1IsQUFHQSxBQUdTLEFBR0osQUFJSyxBQU9ELEFBTWtCLEFBR25CLEFBR0UsQUFJSCxBQVVSLEFBRzBCLEFBQ0EsQUFDQSxBQUdYLEFBS2dDLEFBR2hDLEFBR1AsQUFVRixBQVNELEFBTUcsQUFTRyxBQU9OLEFBUUUsQUFNQSxBQVVJLEFBT1IsQUFHUSxBQU9KLEFBR0EsQUFJSSxBQVdQLEFBR00sQUFJUSxBQUlWLEFBR0UsQUFHRCxBQUlBLEFBR0EsQUFLSixBQUdJLEFBR0MsQUFLQSxBQUdILEFBS0EsQUFTRixBQUdTLEFBR1IsQUFHUixBQUdjLEFBR0EsQUFHSixBQUdLLEFBSUQsTUFmckIsSUFwT0YsQUEyQ0EsQUEyRkEsQ0E5Tm9CLEFBcUZwQixBQXFLQSxDQWpGc0IsQUFzQkwsQUEwSGYsQ0FsQ0EsQUE0QkEsQ0E1U0YsQUFnTW9CLEFBTUQsQUEyQm5CLEFBR3lCLENBckZmLEFBVUYsQUFlTyxBQXNISyxBQUtDLENBdFBDLEFBMENSLEFBMkJELEFBNElYLEFBVUEsQUFHZ0IsQUFtRGhCLENBOVJlLEFBbUNHLEFBS3BCLEFBR0EsQUF1QmdDLEFBU2hDLEFBc0pFLEFBR2MsQUFlZCxBQUdvQixDQTlTWCxBQWtDWCxBQUdXLEFBdUJYLEFBYVksQUEwQ0MsQUFtQk8sQUFtRU4sQUErQkMsQUFVRyxBQWNPLEFBbUR2QixDQXBPa0IsQUFNRixBQTJQaEIsQ0FqUmdCLEFBNkNsQixBQWtLQSxBQXFFRSxBQVVBLENBckxTLEFBVUYsQUF1S1csQ0FsQmxCLElBNUwwQixBQXNEWCxDQWhNRixBQXFDQyxBQThFRSxDQTFDUixBQStGSyxBQVVGLEFBdUJTLENBdkxaLEFBNkZWLEFBK0dzQixBQVVSLENBOUNhLEFBOEJMLEFBb0VwQixDQU9pQixDQWpERixBQW9FSSxDQTlQckIsQUFtUUUsQ0FoT21CLENBb0NyQixBQU9BLEFBd0tlLENBL09HLEFBTWxCLEFBS1ksQUFXVSxFQWxFYixBQTREYSxBQTBRcEIsQ0FoTGUsQUFVRixBQWNDLEFBd0NZLEFBdUJqQixDQS9QQyxDQXFDRSxBQThFRSxJQWhHaEIsQUFzR3dCLEFBeUhWLENBeEtkLEFBK0hnQixBQXVESixBQThDVixDQWhGUyxBQXFFVCxDQWhQRixBQXFLbUIsRUF2TndFLEFBd0I1RSxBQTZSYixDQXJIa0IsQ0F2SnBCLEFBR0EsQUFHQSxBQWVnQyxBQTRCaEMsQUE4RWlCLEFBVUgsQ0E3SUMsQUE4RUUsQUFzRVEsQ0E3SnpCLEFBa01ZLEFBa0NNLENBZEcsQ0E5SkYsRUFxSEMsQ0EzSEgsR0FpSkQsRUF0TWhCLEFBMEpxQixBQXFDckIsQUFrQ0EsQ0FqSWdDLEFBZ0RULENBbkl2QixBQThFQSxDQTZFc0IsQ0FnRUMsSUFkdkIsRUE5SkEsQUFxR0EsQUFnQkEsQUFzQmEsQ0FqSmIsT0FoQkEsQ0FxSEEsQUE2Q3FCLENBaEVyQixBQVM4RCxDQXdCdkMsQ0FZRyxDQW9EVCxNQXZQakIsQUErR0EsQUF5QnNDLEVBcUZaLENBcEZZLEFBQ0EsQ0EwSGYsR0E3Q3ZCLEFBaUMrRCxJQWhFL0QsQ0ExQ3FCLFdBdUhuQixNQXRIbUIsV0F6SnlFLE1BMEo5RixDQWxCMEIsT0FnRzFCLGlCQTFCMEIsVUFqRDFCLGtCQXZKc0IsQUFtSWlCLHFCQWxJdkMsTUFOc0YsQ0FrUXRGLDJDQXBEc0IsT0FyRW9CLEdBZ0MxQyxRQXNDd0IsZ0JBOU0rQyxJQStNdkUscURBdEUwQixPQXhJMUIsNkNBeUl5QixvREFDekIiLCJmaWxlIjoiRDpcXEVjZXNpc3YyLjBcXE9wcG9zYWJsZVRodW1ic1NlT0ZpeFxcb3RodW1ic1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IEFycm93IGZyb20gXCIuLi9jb21wb25lbnRzL2Fycm93XCJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtvcGVuTWVudX0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcbmltcG9ydCBDbGllbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvY2xpZW50cydcbmltcG9ydCB7YWRkQ2xhc3NUb0N1cnNvcixyZW1vdmVDbGFzc0Zyb21DdXJzb3J9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnXG5pbXBvcnQgeyBNT0JJTEVfQlJFQUtQT0lOVCB9IGZyb20gXCIuLi9jb25maWdcIlxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc01vYmlsZTpmYWxzZSxcbiAgICAgIHVuZGVybGluZUV4cGFuZDogZmFsc2UsXG4gICAgICBiYWNrZ3JvdW5kU3R5bGVzOiB7IHRvcDogXCIwXCIsIGxlZnQ6IFwiMFwiIH0sXG4gICAgICBiYWNrZ3JvdW5kUmVhZHk6IGZhbHNlLFxuICAgICAgYmFja2dyb3VuZFNob3c6IGZhbHNlLFxuICAgICAgbG9hZGluZ0xvZ29SZWFkeTogZmFsc2UsXG4gICAgICBhbmltYXRlOiBmYWxzZSxcbiAgICAgIG1lbnVCdG5Db2xvcjpcImJsYWNrXCJcbiAgICB9O1xuICAgIHRoaXMuYmFja2dyb3VuZEltYWdlID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgICB0aGlzLnJlbGxheFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5ub3RQZXJmb3JtZWRBbmltYXRpb24gPSB0cnVlXG4gICAgdGhpcy53aGl0ZU1lbnVTZWN0aW9ucyA9IFtSZWFjdC5jcmVhdGVSZWYoKV1cbiAgfVxuICAvLyBoYW5kbGVTY3JvbGwgPSAoKT0+e1xuICAvLyAgIGZvcihsZXQgaT0wO2k8dGhpcy53aGl0ZU1lbnVTZWN0aW9ucy5sZW5ndGg7aSsrKXtcbiAgLy8gICAgIGxldCBib3VuZGluZ1ZhbHMgPSB0aGlzLndoaXRlTWVudVNlY3Rpb25zW2ldLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgLy8gICAgIGlmKGJvdW5kaW5nVmFscy50b3AgPCAwICYmIChib3VuZGluZ1ZhbHMudG9wICogLTEgPCBib3VuZGluZ1ZhbHMuaGVpZ2h0KSl7XG4gIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbnVCdG5Db2xvcjpcIndoaXRlXCJ9KVxuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudUJ0bkNvbG9yOlwiYmxhY2tcIn0pXG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG4gIGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICB0aGlzLnBvc2l0aW9uSW1hZ2UoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtpc01vYmlsZTp3aW5kb3cuaW5uZXJXaWR0aCA8IE1PQklMRV9CUkVBS1BPSU5UP3RydWU6ZmFsc2V9KVxuICB9XG4gIHBvc2l0aW9uSW1hZ2UoY2IpIHtcbiAgICBsZXQgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjByZW1cIiwgbGVmdDogXCItMzEuNSVcIiwgd2lkdGg6IFwiMjA4JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNDAwKVxuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjByZW1cIiwgbGVmdDogXCItMzEuNSVcIiwgd2lkdGg6IFwiMjA4JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNjUwKVxuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItMjAuNSVcIiwgd2lkdGg6IFwiMTIwJVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAyNClcbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7dG9wOlwiLTEuNXJlbVwiLGxlZnQ6XCItMjAuNSVcIix3aWR0aDpcIjEyMCVcIn1cbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7IHRvcDogXCItMC41cmVtXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTM2NilcbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7IHRvcDogXCItMC41cmVtXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTQ0MClcbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7IHRvcDogXCItMS41cmVtXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgLy8gfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBiYWNrZ3JvdW5kU3R5bGVzIH0sICgpID0+IHtcbiAgICAgIGlmIChjYikge1xuICAgICAgICBjYigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuc3RhdGUuYmFja2dyb3VuZFJlYWR5ICYmXG4gICAgICB0aGlzLnN0YXRlLmxvYWRpbmdMb2dvUmVhZHkgJiZcbiAgICAgIHRoaXMubm90UGVyZm9ybWVkQW5pbWF0aW9uXG4gICAgKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uSW1hZ2UoKTtcbiAgICAgIHRoaXMubm90UGVyZm9ybWVkQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLnByb3BzLm9wZW5NZW51KGZhbHNlKTtcbiAgICAgIC8vIHRoaXMubW91c2VFdmVudHMoKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbmltYXRlOiB0cnVlIH0sKCk9PntcbiAgICAgICAgICAvLyB0aGlzLnByb3BzLnJlbW92ZUNsYXNzRnJvbUN1cnNvcihcImxhcmdlclwiKSAgXG4gICAgICAgICAgLy8gdGhpcy5wcm9wcy5yZW1vdmVDbGFzc0Zyb21DdXJzb3IoXCJ3aGl0ZVwiKSAgXG4gICAgICAgIH0pO1xuICAgICAgfSwgNzUwKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aXNNb2JpbGU6d2luZG93LmlubmVyV2lkdGggPCBNT0JJTEVfQlJFQUtQT0lOVD90cnVlOmZhbHNlfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLmhhbmRsZVJlc2l6ZSlcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVNjcm9sbClcbiAgICBjb25zdCBsb2FkaW5nTG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGxvYWRpbmdMb2dvLnNyYyA9IFwiL2ltYWdlcy9sb2FkaW5nX2xvZ28ucG5nXCI7XG4gICAgbG9hZGluZ0xvZ28ub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmdMb2dvUmVhZHk6IHRydWUgfSk7XG4gICAgfTtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gXCIvaW1hZ2VzL2hvbWUtY292ZXIuanBnXCI7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYWNrZ3JvdW5kUmVhZHk6IHRydWUgfSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMucmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKFwid2hpdGVcIilcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuaGFuZGxlUmVzaXplKVxuICAgIC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlU2Nyb2xsKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICBcbi8vICAgICBmb3Igc2VvIHB1cnBvc2VcbiAgICAgIGNvbnN0IHNjaGVtYURhdGE9e1xuXG4gICAgICBcIkBjb250ZXh0XCI6IFwiaHR0cDovL3NjaGVtYS5vcmdcIixcbiAgICAgIFwiQHR5cGVcIjogXCJzZXJ2aWNlXCIsXG4gICAgICBcIm5hbWVcIjogXCJPcHBvc2FibGUgVGh1bWJzXCIsXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vb3Bwb3NhYmxlLXRodW1icy52ZXJjZWwuYXBwL1wiXG4gICB9XG5cbiAgIEpTT04uc3RyaW5naWZ5KHNjaGVtYURhdGEpXG4gICAgXG4gICAgXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgbmF2UG9zaXRpb249XCJhYnNvbHV0ZVwiIG5hdlRleHRDb2xvcj1cImJsYWNrXCIgbWVudUJ0bkNvbG9yPXt0aGlzLnN0YXRlLm1lbnVCdG5Db2xvcn0gcGFnZT1cImhvbWVcIj5cbiAgICAgICAgPEhlYWQ+XG4gIDxtZXRhIG5hbWU9XCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIiBjb250ZW50PVwiZlRwN2xvQnpEVEFqWEV1dGlFY2xmc3Q0YzN2dDEzdWt0cVdfZEFGVFdvSVwiIC8+XG4gIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJicmFuZCBpZGVudGl0eSBhZ2VuY3ksIGJyYW5kIGlkZW50aXR5IGRlc2lnbiBhZ2VuY3ksIGNvcnBvcmF0ZSBpZGVudGl0eSBhZ2VuY3ksIGJyYW5kIGlkZW50aXR5LCBicmFuZGluZyBkZXNpZ24sIGRpZ2l0YWwgbWVkaWEgbWFuYWdlbWVudCxkaWdpdGFsIG1lZGlhIGFnZW5jeSwgc29jaWFsIG1lZGlhIGFnZW5jaWVzLGRpZ2l0YWwgbWVkaWEgbWFya2V0aW5nIGNvbXBhbmllc1wiLz5cbiAgICAgICAgICA8dGl0bGU+QnJhbmQgSWRlbnRpdHkgQWdlbmN5IHwgT3Bwb3NhYmxlIFRodW1iczwvdGl0bGU+XG4gICAgICAgICAgey8qIDxoMT5PcHBvc2FibGUgVGh1bWJzPC9oMT4gKi99XG48bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiT3Bwb3NhYmxlIFRodW1icyB3b3JrIHdpdGggY29tcGFuaWVzIGZvciB0aGVpciBicmFuZGluZy4gSWYgeW91IGhhdmUgYSBuZXcgYnJhbmQgdG8gbGF1bmNoLCB3ZSBjYW4gaGVscCB5b3UsIHJpZ2h0IGZyb20gbmFtaW5nIGl0IHRvIGRldmVsb3BpbmcgaXRzIGlkZW50aXR5LlwiLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry1WVE1GNzBQN0hXXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICBndGFnKCdjb25maWcnLCAnRy1WVE1GNzBQN0hXJyk7XG4gICAgICAgICAgYCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz4gXG5cbiB7Lyogc2NoZW1hIGlzIGltcGxlbWVudGVkICovfVxuPHNjcmlwdFxuICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCJcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KHNjaGVtYURhdGEpIH19XG4gIC8+XG4gICAgICAgICAgICAgICAgICBcbjwvSGVhZD5cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZ0xvZ29SZWFkeSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuYW5pbWF0ZSA/IFwiYW5pbWF0ZVwiIDogXCJcIn1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy13cmFwcGVyXCIgc3R5bGU9e3toZWlnaHQ6YCR7dGhpcy5wcm9wcy5jb21tb24ud2luZG93SGVpZ2h0fXB4YH19PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvYWRpbmdfbG9nby5wbmdcIiBhbHQ9J2hvbWVjb3ZlcicgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9wLXNlY3Rpb24td3JhcHBlciBibGFjay1jdXJzb3IgJHt0aGlzLnN0YXRlLmFuaW1hdGUgPyBcImFuaW1hdGVcIiA6IFwiXCJ9YH0gc3R5bGU9e3sgaGVpZ2h0OiBgJHt0aGlzLnByb3BzLmNvbW1vbi53aW5kb3dIZWlnaHR9cHhgIH19PlxuICAgICAgICAgICAgey8qIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9ob21lLWNvdmVyLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJob21lIGNvdmVyXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPVwiXCI+ICovfVxuICAgICAgICAgICAgPGltZyBzdHlsZT17dGhpcy5zdGF0ZS5iYWNrZ3JvdW5kU3R5bGVzfSBzcmM9XCIvaW1hZ2VzL2hvbWUtY292ZXIuanBnXCIgY2xhc3NOYW1lPXtgYmFja2dyb3VuZGB9IHJlZj17dGhpcy5iYWNrZ3JvdW5kSW1hZ2V9IGFsdD0naG9tZWNvdmVyJy8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Rvcnl0ZWxsZXJzIGZ1dHVyYS1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNoaWxkXCIgc3R5bGU9e3tmb250V2VpZ2h0OlwiNTAlXCJ9fT5NRUVUIFRIRSBTVE9SWVRFTExFUlM8L2g0PiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbGxvIGhlbHZldGljYS1uZXVlLWNvbmRlbnNlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlbGxvXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bGwtc2VydmljZSBiaWctY2FzbG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT48L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmRlcGVuZGVudDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZ2VuY3lcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1kb3duLWFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IGRvd25cIj4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gbG9va2luZy1mb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tdGV4dFwiPjxoMT5CcmFuZCBJZGVudGl0eSBBZ2VuY3k8L2gxPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPC9QYXJhbGxheD4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoaXRlLWZhZGVcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tY2F0ZWdvcmllcyB0ZXh0LWNlbnRlciBwYWRkZWQtY29udGVudFwiPlxuICAgICAgICAgICAgICBJbnNpZ2h0cyAvIEJyYW5kIElkZW50aXR5IC8gUGFja2FnaW5nIC8gQWR2ZXJ0aXNpbmcgLyBEaWdpdGFsIC8gR3JhcGhpY3MgLyBGaWxtc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pdGVtc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZGQgbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vQmlnQmFueWFuLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJiaWcgYmFueWFuXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPXtgcG9ydGZvbGlvLWl0ZW0gJHt0aGlzLnN0YXRlLmlzTW9iaWxlP1wid2hpdGUtbWVudS1idG5cIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL2JpZy1iYW55YW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+QmlnIEJhbnlhbiA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+QW4gSXRhbGlhbiB3aW5lbWFrZXIuIEEgcGFzc2lvbmF0ZSBicmFuZCB0ZWFtLiBBbmQgdXMuIFllYXJzIG9mIHTDqnRlLcOgLXTDqnRlcyBhbmQgcmVzZWFyY2gtZHJpdmVuIGluc2lnaHRzIGxlZCB1cyB0byByZWNyZWF0ZSB0aGUgcGFja2FnaW5nIGFuZCBjb21tdW5pY2F0aW9uIHN0cmF0ZWd5IGZvciBCaWcgQmFueWFuLiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZXZlbiBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9sYW5nb29yLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJsYW5nb29yXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPXtgcG9ydGZvbGlvLWl0ZW0gJHt0aGlzLnN0YXRlLmlzTW9iaWxlP1wid2hpdGUtbWVudS1idG5cIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL2xhbmdvb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+TCdhbmdvb3IgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPldpbmUgY2FuIGJlIGVsZWdhbnQuIFdpbmUgY2FuIGJlIHNvcGhpc3RpY2F0ZWQuIEJ1dCB3aW5lIGFuZCBmdW4/IEhlcmXigJlzIGhvdyB3ZSBtYXJyaWVkIOKAmGZ1buKAmSBhbmQgYSBuZXcgYnJhbmQgb2Ygd2luZXMgZnJvbSBCaWcgQmFueWFuLCBrbm93biBmb3IgaXRzIHByZW1pdW0gd2luZXMuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9kZCBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9FbmNoYW50ZXVyLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJlbmNoYW50ZXVyXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPVwicG9ydGZvbGlvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9lbmNoYW50ZXVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkVuY2hhbnRldXIgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+SXTigJlzIEZyZW5jaCwgaXTigJlzIHJvbWFudGljIGFuZCBpdOKAmXMgc28gdmVyeSBmbG9yYWwuIEhvdyBjYW4gd2Ugbm90IGZhbGwgaW4gbG92ZSB3aXRoIEVuY2hhbnRldXI/IFdlIGhhdmUgSy1kcmFtYSBmYW5zIG9uIG91ciB0ZWFtIHdobyBhYnNvbHV0ZWx5IGxvdmUgdGhpcyBicmFuZCE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGV2ZW4gbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vZnluZC5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvZnluZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5GWU5EIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5TZWVkZWQgaW4gdGhlIGlkZWEgb2Ygc2VsZi1leHByZXNzaW9uLCBGWU5EIGluc3BpcmVkIHVzIHdpdGggaXRzIGZ1bmN0aW9uYWwgY2xvdGhpbmcgbGluZXMuIEZyb20gc3RyYXRlZ3kgdG8gaWRlbnRpdHkgYW5kIGJyYW5kIGFyY2hpdGVjdHVyZSBkZXNpZ24sIHdlIGhlbHBlZCBicmluZyB0aGlzIGJyYW5kIHRvIGxpZmUuIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZGQgbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL0NoYW5kcmlrYTMuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvY2hhbmRyaWthXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkNoYW5kcmlrYSA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+SGVyZeKAmXMgYSBicmFuZCB3ZSBhbGwgZ3JldyB1cCB3aXRoLiBBbmQgeWV0LCBpdCBtYW5hZ2VkIHRvIHN1cnByaXNlIHVzIHdpdGggaXRzIHNlY3JldHMuIFdlIHNoYXJlZCB0aGVzZSBsaXR0bGUgbnVnZ2V0cyB3aXRoIHRoZSB3b3JsZCBpbiBvdXIgY2FtcGFpZ24uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBldmVuIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL1NhbnRvb3IuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9XCJwb3J0Zm9saW8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL3NhbnRvb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+U2FudG9vciA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+V2hvIGRvZXNu4oCZdCByZW1lbWJlciB0aGUgY2xhc3NpYyDigJxtdW1teeKAnSBhZHMhIEl0IGdpdmVzIHVzIGdyZWF0IHByaWRlIHRvIHdvcmsgb24gY2FtcGFpZ25zIGZvciBhIGJyYW5kIHRoYXTigJlzIGFzIHJlbGV2YW50IHRvZGF5IGFzIGl0IHdhcyBhIGZldyBkZWNhZGVzIGFnby48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2RkIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL1ZvaUplYW5zLnBuZ1wiIGJnSW1hZ2VBbHQ9XCJsYW5nb29yXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPXtgcG9ydGZvbGlvLWl0ZW0gJHt0aGlzLnN0YXRlLmlzTW9iaWxlP1wid2hpdGUtbWVudS1idG5cIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL3ZvaS1qZWFuc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5WT0kgSmVhbnMgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPlRoZSB2ZXJ5IGlkZWEgb2YgdGhlc2UgZGVuaW1zIGluc3BpcmVkIHVzISBWT0kgaGFzIGVyZ29ub21pY2FsbHkgZW5naW5lZXJlZCBkZW5pbXMgdGhhdCBjYWxsZWQgZm9yIGVkZ3ksIGZhc2hpb24gZm9yd2FyZCBjb21tdW5pY2F0aW9uLiBBbmQgd2UgcmV2ZWxlZCBpbiBpdC48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZXZlbiBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vSWNlYnVyZzEuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvaWNlYnVyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5JY2VCdXJnIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5JbnRlbnNlIGNyYXZpbmdzIGZvciBidXJnZXJzIGFuZCBzaGFrZXMgZmVkIG91ciBicmFpbnMgYXMgd2Ugd29ya2VkIG9uIHRoZSBicmFuZCBpZGVhIGFuZCBpZGVudGl0eSBmb3IgdGhpcyBVSy1iYXNlZCBnb3VybWV0IGJ1cmdlciBjaGFpbi48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2RkIG1pYS1ieS10YW5pc2hxIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL01pYTEuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvbWlhLWJ5LXRhbmlzaHFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+TWlhIC0gVGFuaXNocSA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+VGhlc2UgZmlsbXMgYXJlIGEgY29sbGVjdGlvbiBvZiBzdG9yaWVzIG9mIEluZGlhbiB3b21lbiB3aG8gaW5zcGlyZSB5b3Ugd2l0aCB0aGVpciByZXNpbGllbmNlLCBjaGFybSB5b3Ugd2l0aCB0aGVpciBwcmVzZW5jZSBhbmQgYXdlIHlvdSB3aXRoIHRoZWlyIGFjaGlldmVtZW50cy48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZXZlbiBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9HcmFwaGljczEuanBnXCIgYmdJbWFnZUFsdD1cImdyYXBoaWNzXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPVwicG9ydGZvbGlvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+R3JhcGhpY3MgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5BIGRpZ2l0YWwgYXJ0IHByb2plY3QgdGhhdCBsZWQgdXMgdG8gY3JlYXRlIGVkZ3ksIG1vZGVybiBncmFwaGljcyBmb3IgY2xvdGhpbmcgYW5kIG1lcmNoYW5kaXNlLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuby1jc3NcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxvcmUtbW9yZSB0ZXh0LWNlbnRlciBwYWRkZWQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZVwiPmJyb3dzZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjQuNnJlbVwifX0+ICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV4cGxvcmUtYXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvdyBkaXJlY3Rpb249XCJkb3duXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzIHBvc2l0aW9uLXJlbGF0aXZlIHBhZGRlZC1jb250ZW50IHdoaXRlLWN1cnNvciB3aGl0ZS1jdXJzb3Igd2hpdGUtbWVudS1idG5cIiByZWY9e3RoaXMud2hpdGVNZW51U2VjdGlvbnNbMF19PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtaGVhZGluZyBtb3JlLWxldHRlci1zcGFjaW5nIGZ1dHVyYS1saWdodCBzbGlnaHRseS1sYXJnZXItdGV4dCB5ZWxsb3ctdGV4dFwiPlNFUlZJQ0VTPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1saXN0c1wiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzZXJ2aWNlLWl0ZW1zIGxpc3Qtc3R5bGUtbm9uZSB3aGl0ZS10ZXh0IGxhcmdlci10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdpbnNpZ2h0cycgfSx9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBJbnNpZ2h0c1xuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ2JyYW5kLWlkZW50aXR5JyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBCcmFuZCBJZGVudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAncGFja2FnaW5nJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBQYWNrYWdpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ2FkdmVydGlzaW5nJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBBZHZlcnRpc2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnZGlnaXRhbCcgfSx9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRGlnaXRhbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnZGlnaXRhbCcgfSx9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgR3JhcGhpY3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ2ZpbG1zJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxtc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNraWxscyBsaXN0LXN0eWxlLW5vbmUgc2xpZ2h0bHktbGFyZ2VyLXRleHQgZnV0dXJhLWxpZ2h0IHllbGxvdy10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8bGk+Q1JFQVRJVkU8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPklOU0lHSFQtRFJJVkVOPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5DVUxUVVJBTExZIFJFTEVWQU5UPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NlcnZpY2VzLWJnLTIucG5nXCIgY2xhc3NOYW1lPVwid2lkdGgtMTAwXCIgIGFsdD0naG9tZWNvdmVyJy8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctbW9iaWxlIGhpZGUtZGVza3RvcCB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7bWFyZ2luVG9wOlwiNy4ycmVtXCJ9fT5cbiAgICAgICAgICAgICAgICA8QXJyb3cgZGlyZWN0aW9uPVwiZG93blwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxDbGllbnRzIC8+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvd2F2ZS1ibGFjay5naWZcIiBjbGFzc05hbWU9XCJ3aWR0aC0xMDAgd2F2ZVwiIGFsdD0naG9tZWNvdmVyJyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyF0aGlzLnN0YXRlLmxvYWRpbmdMb2dvUmVhZHkgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxhY2stYmdcIj48L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLndoaXRlLWZhZGV7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwcmVtO1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LDI1NSwyNTUsIDEpKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwyNTUsMjU1LCAxKSk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LDI1NSwyNTUsIDEpKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgd2hpdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFycm93LXJpZ2h0e1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKTtcbiAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucC1pbmZvLXdyYXBwZXI6aG92ZXIgLmFycm93LXJpZ2h0LC5wb3J0Zm9saW8taXRlbTpob3ZlciAuYXJyb3ctcmlnaHR7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDFyZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAud2F2ZXtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgLy8gYm90dG9tOiAtNzglO1xuICAgICAgICAgICAgICBib3R0b206MDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWl0ZW1zIGxpIGF7XG4gICAgICAgICAgICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1pdGVtcyBsaSBhOmhvdmVye1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgY29sb3I6I0Y5RUQzMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWl0ZW1zIGxpOmhvdmVye1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGluc01lZGl1bUl0YWxpYyxzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucC1pbmZvLXdyYXBwZXJ7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1hdDEgLnAtaW5mb3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICBib3R0b206IDdyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuaGVsbG8gLmNoaWxke1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLnN0b3J5dGVsbGVycyAuY2hpbGR7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuZnVsbC1zZXJ2aWNlIC5jaGlsZHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAuYW5pbWF0ZSAubG9va2luZy1mb3IgLmNoaWxke1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5leHBsb3JlLW1vcmV7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTo0LjZyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6OHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWxpc3RzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2UtaXRlbXN7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNi41cmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2tpbGxzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2LjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1pbWFnZXtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogLTUlO1xuICAgICAgICAgICAgICB0b3A6IC0xJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDQ3JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlc3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDojMDAwMDAwO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo4LjhyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjI1cmVtO1xuICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9ydGZvbGlve1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmZmZmY7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOjhyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cmVtO1xuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3J0Zm9saW8taXRlbXN7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxN3JlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTUlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MTUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtcyAucm93IC5ldmVue1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOi04cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby10aXRsZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6NC42cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtLmZvcm1hdDIgLmltYWdlLXdyYXBwZXIgaW1ne1xuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1kZXNjcmlwdGlvbntcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ldmVuIC5mb3JtYXQyIC5wb3J0Zm9saW8taW5mb3tcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtYXQyIC5wb3J0Zm9saW8taW5mb3tcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDozcmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nOjAgNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybWF0MSAucG9ydGZvbGlvLWluZm97XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBib3R0b206IDhyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtYXQxe1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMjUlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ldmVuIC5mb3JtYXQxe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSkgMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1jYXRlZ29yaWVze1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm90dG9tLXRleHR7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNC41cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaG9tZS1kb3duLWFycm93e1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NHJlbTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZsb2F0aW5nO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OjEuNHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuaG9tZS1kb3duLWFycm93e1xuICAgICAgICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZsb2F0aW5nIHtcbiAgICAgICAgICAgICAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsICAwcHgpOyB9XG4gICAgICAgICAgICAgIDY1JSAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxNXB4KTsgfVxuICAgICAgICAgICAgICB0byAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTBweCk7IH0gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3Rvcnl0ZWxsZXJzIHtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS43cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLmxvYWRpbmctd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ke3RoaXMucHJvcHMuY29tbW9uLndpbmRvd0hlaWdodCArIDEwMH1weCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9hZGluZy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvYWRpbmctd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllcigwLjc3LCAwLCAwLjE3NSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxhY2stYmd7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvYWRpbmctd3JhcHBlciBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XG4gICAgICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDU2cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRvcC1zZWN0aW9uLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRvcC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWxsbyB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmMjA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnJlbTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MC44O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZ1bGwtc2VydmljZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0MTQwNDI7O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgdG9wOiAzcmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMy41cmVtO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAzLjVyZW07XG4gICAgICAgICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0IGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3QgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVuZGVybGluZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMC4xcmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMXJlbTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0OmhvdmVyIC51bmRlcmxpbmUsXG4gICAgICAgICAgICAudW5kZXJsaW5lLmV4cGFuZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDZyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnJvd3Nle1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOi0xcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcbiAgICAgICAgICAgICAgLnRleHR7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5oZWxsb3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTZyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmZ1bGwtc2VydmljZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc3Rvcnl0ZWxsZXJze1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjFyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDowO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ib3R0b20tdGV4dHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wb3J0Zm9saW8taXRlbXN7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtcyAucm93IC5ldmVue1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubWlhLWJ5LXRhbmlzaHF7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDotNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VydmljZS1saXN0cyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlLWhlYWRpbmd7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlcnZpY2UtaXRlbXN7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6bm9uZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2tpbGxze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlLWltYWdlIHtcbiAgICAgICAgICAgICAgICAvLyByaWdodDogLTEwJTtcbiAgICAgICAgICAgICAgICAvLyB0b3A6YXV0bztcbiAgICAgICAgICAgICAgICAvLyBib3R0b206IC0xJTtcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogNTclO1xuICAgICAgICAgICAgICAgIC8vIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlc3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo4LjhyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLndoaXRlLWZhZGV7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6M3JlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZnVsbC1zZXJ2aWNle1xuICAgICAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zdG9yeXRlbGxlcnMge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBvcnRmb2xpb3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo0cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsb3JlLW1vcmV7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo0cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsb3JlLWFycm93e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjFyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmJyb3dzZXtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOi0ycmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7IGNvbW1vbiB9KSB7XG4gIHJldHVybiB7XG4gICAgY29tbW9uLFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtvcGVuTWVudSxhZGRDbGFzc1RvQ3Vyc29yLHJlbW92ZUNsYXNzRnJvbUN1cnNvcn0pKEhvbWUpO1xuIl19 */\n/*@ sourceURL=D:\\\\Ecesisv2.0\\\\OpposableThumbsSeOFix\\\\othumbs\\\\pages\\\\index.js */")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwicG9zaXRpb25JbWFnZSIsInNldFN0YXRlIiwiaXNNb2JpbGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiTU9CSUxFX0JSRUFLUE9JTlQiLCJzdGF0ZSIsInVuZGVybGluZUV4cGFuZCIsImJhY2tncm91bmRTdHlsZXMiLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VuZFJlYWR5IiwiYmFja2dyb3VuZFNob3ciLCJsb2FkaW5nTG9nb1JlYWR5IiwiYW5pbWF0ZSIsIm1lbnVCdG5Db2xvciIsImJhY2tncm91bmRJbWFnZSIsIlJlYWN0IiwiY3JlYXRlUmVmIiwicmVsbGF4UmVmIiwibm90UGVyZm9ybWVkQW5pbWF0aW9uIiwid2hpdGVNZW51U2VjdGlvbnMiLCJjYiIsImJvdHRvbSIsIndpZHRoIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib3Blbk1lbnUiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVJlc2l6ZSIsImxvYWRpbmdMb2dvIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJpbWciLCJyZW1vdmVDbGFzc0Zyb21DdXJzb3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2NoZW1hRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb21tb24iLCJ3aW5kb3dIZWlnaHQiLCJfX2h0bWwiLCJoZWlnaHQiLCJmb250V2VpZ2h0IiwicGF0aG5hbWUiLCJxdWVyeSIsImZpbHRlciIsIm1hcmdpblRvcCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbm5lY3QiLCJhZGRDbGFzc1RvQ3Vyc29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBQ01BLEk7Ozs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLHVOQTJCSixZQUFNO0FBQ25CLFlBQUtDLGFBQUw7O0FBQ0EsWUFBS0MsUUFBTCxDQUFjO0FBQUNDLGdCQUFRLEVBQUNDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQkMsMERBQXBCLEdBQXNDLElBQXRDLEdBQTJDO0FBQXJELE9BQWQ7QUFDRCxLQTlCa0I7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYSixjQUFRLEVBQUMsS0FERTtBQUVYSyxxQkFBZSxFQUFFLEtBRk47QUFHWEMsc0JBQWdCLEVBQUU7QUFBRUMsV0FBRyxFQUFFLEdBQVA7QUFBWUMsWUFBSSxFQUFFO0FBQWxCLE9BSFA7QUFJWEMscUJBQWUsRUFBRSxLQUpOO0FBS1hDLG9CQUFjLEVBQUUsS0FMTDtBQU1YQyxzQkFBZ0IsRUFBRSxLQU5QO0FBT1hDLGFBQU8sRUFBRSxLQVBFO0FBUVhDLGtCQUFZLEVBQUM7QUFSRixLQUFiO0FBVUEsVUFBS0MsZUFBTCxHQUF1QkMsNkNBQUssQ0FBQ0MsU0FBTixFQUF2QjtBQUNBLFVBQUtDLFNBQUwsR0FBaUJGLDZDQUFLLENBQUNDLFNBQU4sRUFBakI7QUFDQSxVQUFLRSxxQkFBTCxHQUE2QixJQUE3QjtBQUNBLFVBQUtDLGlCQUFMLEdBQXlCLENBQUNKLDZDQUFLLENBQUNDLFNBQU4sRUFBRCxDQUF6QjtBQWZpQjtBQWdCbEIsRyxDQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztrQ0FLY0ksRSxFQUFJO0FBQ2hCLFVBQUlkLGdCQUFnQixHQUFHO0FBQUVlLGNBQU0sRUFBRSxNQUFWO0FBQWtCYixZQUFJLEVBQUUsUUFBeEI7QUFBa0NjLGFBQUssRUFBRTtBQUF6QyxPQUF2QjtBQUNBLFVBQUlyQixNQUFNLENBQUNDLFVBQVAsR0FBb0IsR0FBeEIsRUFDRUksZ0JBQWdCLEdBQUc7QUFBRWUsY0FBTSxFQUFFLE1BQVY7QUFBa0JiLFlBQUksRUFBRSxRQUF4QjtBQUFrQ2MsYUFBSyxFQUFFO0FBQXpDLE9BQW5CO0FBQ0YsVUFBSXJCLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixHQUF4QixFQUNFSSxnQkFBZ0IsR0FBRztBQUFFZSxjQUFNLEVBQUUsR0FBVjtBQUFlYixZQUFJLEVBQUUsUUFBckI7QUFBK0JjLGFBQUssRUFBRTtBQUF0QyxPQUFuQjtBQUNGLFVBQUlyQixNQUFNLENBQUNDLFVBQVAsR0FBb0IsSUFBeEIsRUFDRTtBQUNBO0FBQ0FJLHdCQUFnQixHQUFHO0FBQUVlLGdCQUFNLEVBQUUsR0FBVjtBQUFlYixjQUFJLEVBQUU7QUFBckIsU0FBbkI7QUFDRixVQUFJUCxNQUFNLENBQUNDLFVBQVAsR0FBb0IsSUFBeEIsRUFDRTtBQUNBSSx3QkFBZ0IsR0FBRztBQUFFZSxnQkFBTSxFQUFFLEdBQVY7QUFBZWIsY0FBSSxFQUFFO0FBQXJCLFNBQW5CO0FBQ0YsVUFBSVAsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLElBQXhCLEVBQ0U7QUFDQUksd0JBQWdCLEdBQUc7QUFBRWUsZ0JBQU0sRUFBRSxHQUFWO0FBQWViLGNBQUksRUFBRTtBQUFyQixTQUFuQixDQWZjLENBZ0JoQjs7QUFDQSxXQUFLVCxRQUFMLENBQWM7QUFBRU8sd0JBQWdCLEVBQWhCQTtBQUFGLE9BQWQsRUFBb0MsWUFBTTtBQUN4QyxZQUFJYyxFQUFKLEVBQVE7QUFDTkEsWUFBRTtBQUNIO0FBQ0YsT0FKRDtBQUtEOzs7dUNBQ2tCRyxTLEVBQVdDLFMsRUFBVztBQUFBOztBQUN2QyxVQUNFLEtBQUtwQixLQUFMLENBQVdLLGVBQVgsSUFDQSxLQUFLTCxLQUFMLENBQVdPLGdCQURYLElBRUEsS0FBS08scUJBSFAsRUFJRTtBQUNBLGFBQUtwQixhQUFMO0FBQ0EsYUFBS29CLHFCQUFMLEdBQTZCLEtBQTdCO0FBQ0EsYUFBS3JCLEtBQUwsQ0FBVzRCLFFBQVgsQ0FBb0IsS0FBcEIsRUFIQSxDQUlBOztBQUNBQyxrQkFBVSxDQUFDLFlBQU07QUFDZixnQkFBSSxDQUFDM0IsUUFBTCxDQUFjO0FBQUVhLG1CQUFPLEVBQUU7QUFBWCxXQUFkLEVBQWdDLFlBQUksQ0FDbEM7QUFDQTtBQUNELFdBSEQ7QUFJRCxTQUxTLEVBS1AsR0FMTyxDQUFWO0FBTUQ7QUFDRjs7O3dDQUNtQjtBQUFBOztBQUNsQixXQUFLYixRQUFMLENBQWM7QUFBQ0MsZ0JBQVEsRUFBQ0MsTUFBTSxDQUFDQyxVQUFQLEdBQW9CQywwREFBcEIsR0FBc0MsSUFBdEMsR0FBMkM7QUFBckQsT0FBZDtBQUNBRixZQUFNLENBQUMwQixnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLQyxZQUF2QyxFQUZrQixDQUdsQjs7QUFDQSxVQUFNQyxXQUFXLEdBQUcsSUFBSUMsS0FBSixFQUFwQjtBQUNBRCxpQkFBVyxDQUFDRSxHQUFaLEdBQWtCLDBCQUFsQjs7QUFDQUYsaUJBQVcsQ0FBQ0csTUFBWixHQUFxQixZQUFNO0FBQ3pCLGNBQUksQ0FBQ2pDLFFBQUwsQ0FBYztBQUFFWSwwQkFBZ0IsRUFBRTtBQUFwQixTQUFkO0FBQ0QsT0FGRDs7QUFHQSxVQUFNc0IsR0FBRyxHQUFHLElBQUlILEtBQUosRUFBWjtBQUNBRyxTQUFHLENBQUNGLEdBQUosR0FBVSx3QkFBVjs7QUFDQUUsU0FBRyxDQUFDRCxNQUFKLEdBQWEsWUFBTTtBQUNqQixjQUFJLENBQUNqQyxRQUFMLENBQWM7QUFBRVUseUJBQWUsRUFBRTtBQUFuQixTQUFkO0FBQ0QsT0FGRDs7QUFHQSxXQUFLWixLQUFMLENBQVdxQyxxQkFBWCxDQUFpQyxPQUFqQztBQUNEOzs7MkNBQ3FCO0FBQ3BCakMsWUFBTSxDQUFDa0MsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBS1AsWUFBMUMsRUFEb0IsQ0FFcEI7QUFDRDs7OzZCQUNRO0FBR1g7QUFDTSxVQUFNUSxVQUFVLEdBQUM7QUFFakIsb0JBQVksbUJBRks7QUFHakIsaUJBQVMsU0FIUTtBQUlqQixnQkFBUSxrQkFKUztBQUtqQixlQUFPO0FBTFUsT0FBakI7QUFRSEMsVUFBSSxDQUFDQyxTQUFMLENBQWVGLFVBQWY7QUFJQyxhQUNFLE1BQUMsMkRBQUQ7QUFBUSxtQkFBVyxFQUFDLFVBQXBCO0FBQStCLG9CQUFZLEVBQUMsT0FBNUM7QUFBb0Qsb0JBQVksRUFBRSxLQUFLaEMsS0FBTCxDQUFXUyxZQUE3RTtBQUEyRixZQUFJLEVBQUMsTUFBaEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNOO0FBQU0sWUFBSSxFQUFDLDBCQUFYO0FBQXNDLGVBQU8sRUFBQyw2Q0FBOUM7QUFBQSxvR0E4ZHVDLEtBQUtoQixLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQTlkeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURNLEVBRU47QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUMseU5BQTlCO0FBQUEsb0dBNmR1QyxLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0E3ZHhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGTSxFQUdFO0FBQUEsb0dBNGQrQixLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0E1ZGhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBSEYsRUFLUjtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQywrSkFBakM7QUFBQSxvR0EwZHlDLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQTFkMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUxRLEVBTUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUMsY0FBdEI7QUFBQSxvR0F5ZCtCLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXpkaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU5GLEVBVUs7QUFBUSxhQUFLLE1BQWI7QUFBYyxXQUFHLEVBQUMsMERBQWxCO0FBQUEsb0dBcWQ0QixLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0FyZDdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFWTCxFQVdFO0FBQ0UsK0JBQXVCLEVBQUU7QUFDdkJDLGdCQUFNO0FBRGlCLFNBRDNCO0FBQUEsb0dBb2QrQixLQUFLNUMsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0FwZGhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFYRixFQXVCUjtBQUNJLFlBQUksRUFBQyxxQkFEVDtBQUVJLCtCQUF1QixFQUFFO0FBQUVDLGdCQUFNLEVBQUVKLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixVQUFmO0FBQVYsU0FGN0I7QUFBQSxvR0F3Y3lDLEtBQUt2QyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXhjMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQXZCUSxDQURGLEVBOEJHLEtBQUtwQyxLQUFMLENBQVdPLGdCQUFYLElBQ0Qsb0VBQ0U7QUFBQSxvR0FnYytCLEtBQUtkLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBaGNoRSx1QkFBbUIsS0FBS3BDLEtBQUwsQ0FBV1EsT0FBWCxHQUFxQixTQUFyQixHQUFpQyxFQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBaUMsYUFBSyxFQUFFO0FBQUM4QixnQkFBTSxZQUFJLEtBQUs3QyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUF0QjtBQUFQLFNBQXhDO0FBQUEsb0dBK2I2QixLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0EvYjlELGFBQWUsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNNO0FBQUssV0FBRyxFQUFDLDBCQUFUO0FBQW9DLFdBQUcsRUFBQyxXQUF4QztBQUFBLG9HQThidUIsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBOWJ4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRE4sQ0FERixDQURGLEVBTUU7QUFBMkYsYUFBSyxFQUFFO0FBQUVFLGdCQUFNLFlBQUssS0FBSzdDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQXZCO0FBQVIsU0FBbEc7QUFBQSxvR0EyYitCLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQTNiaEUsd0RBQW9ELEtBQUtwQyxLQUFMLENBQVdRLE9BQVgsR0FBcUIsU0FBckIsR0FBaUMsRUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVFO0FBQUssYUFBSyxFQUFFLEtBQUtSLEtBQUwsQ0FBV0UsZ0JBQXZCO0FBQXlDLFdBQUcsRUFBQyx3QkFBN0M7QUFBK0YsV0FBRyxFQUFFLEtBQUtRLGVBQXpHO0FBQTBILFdBQUcsRUFBQyxXQUE5SDtBQUFBLG9HQXliNkIsS0FBS2pCLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBemI5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsRUFHSTtBQUFBLG9HQXdiMkIsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBeGI1RCxhQUFlLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUEsb0dBdWJ1QixLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0F2YnhELGFBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQSxvR0FzYm1CLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXRicEQsYUFBZSwyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQSxvR0FxYmlCLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXJibEQsYUFBZSxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQSxvR0FvYmUsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBcGJoRCxhQUFlLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQXNCLGFBQUssRUFBRTtBQUFDRyxvQkFBVSxFQUFDO0FBQVosU0FBN0I7QUFBQSxvR0FtYmMsS0FBSzlDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBbmIvQyxhQUFjLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERCxDQURGLENBREYsQ0FESixFQVNJO0FBQUEsb0dBOGFtQixLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0E5YXBELGFBQWUsZ0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBNmFpQixLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0E3YWxELGFBQWUsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBNGFlLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQTVhaEQsYUFBZSxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FERixFQU1FO0FBQUEsb0dBd2FpQixLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0F4YWxELGFBQWUseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBdWFlLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXZhaEQsYUFBZSxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQSxvR0FzYVcsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBdGE1QyxhQUFlLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBcWFTLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXJhMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLGlCQUVhO0FBQUEsb0dBb2FGLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXBhL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZiLFdBREosQ0FERixDQU5GLENBVEosRUF5Qkk7QUFBQSxvR0E4Wm1CLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQTlacEQsYUFBZSxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQSxvR0E2WmlCLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQTdabEQsYUFBZSxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQXpCSixFQTRCSTtBQUFBLG9HQTJabUIsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBM1pwRCxhQUFlLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLG9HQTBaaUIsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBMVpsRCxhQUFlLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBeVplLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXpaaEQsYUFBZSxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBNkI7QUFBQSxvR0F5WmQsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBelpuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUE3QixDQURGLENBREYsQ0E1QkosQ0FESixDQUhKLEVBd0NFO0FBQUEsb0dBbVo2QixLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0FuWjlELGFBQWUsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBeENGLENBTkYsRUFnREU7QUFBQSxvR0FpWitCLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQWpaaEUsYUFBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLG9HQWdaNkIsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBaFo5RCxhQUFlLGlEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEZBREYsRUFJRTtBQUFBLG9HQTZZNkIsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBN1k5RCxhQUFlLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLG9HQTRZMkIsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBNVk1RCxhQUFlLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLG9HQTJZeUIsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBM1kxRCxhQUFlLHlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDUSxNQUFDLHdEQUFEO0FBQVUsZUFBTyxFQUFDLGlDQUFsQjtBQUFvRCxrQkFBVSxFQUFDLFlBQS9EO0FBQTRFLGdCQUFRLEVBQUUsR0FBdEY7QUFBMkYsaUJBQVMsMkJBQW9CLEtBQUtwQyxLQUFMLENBQVdKLFFBQVgsR0FBb0IsZ0JBQXBCLEdBQXFDLEVBQXpELENBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGlEQUFEO0FBQU0sWUFBSSxFQUFDLHNCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLG9HQXdZYSxLQUFLSCxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXhZOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBdVlXLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXZZNUMsYUFBZSx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQSxvR0FzWVMsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBdFkxQyxhQUFlLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBcVlPLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXJZeEMsYUFBZSwwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUFxRDtBQUFBLG9HQXFZOUMsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBcllhLGFBQWdCLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBOEIsTUFBQywwREFBRDtBQUFPLGlCQUFTLEVBQUMsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUE5QixDQUFyRCxDQURGLEVBRUU7QUFBQSxvR0FvWU8sS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBcFl4QyxhQUFlLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMk1BRkYsQ0FERixDQURGLENBREYsQ0FERixDQURSLENBREYsRUFlSTtBQUFBLG9HQTZYdUIsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBN1h4RCxhQUFlLDBDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDTSxNQUFDLHdEQUFEO0FBQVUsZUFBTyxFQUFDLCtCQUFsQjtBQUFrRCxrQkFBVSxFQUFDLFNBQTdEO0FBQXVFLGdCQUFRLEVBQUUsR0FBakY7QUFBc0YsaUJBQVMsMkJBQW9CLEtBQUtwQyxLQUFMLENBQVdKLFFBQVgsR0FBb0IsZ0JBQXBCLEdBQXFDLEVBQXpELENBQS9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGlEQUFEO0FBQU0sWUFBSSxFQUFDLG1CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLG9HQTBYYSxLQUFLSCxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQTFYOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBeVhXLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXpYNUMsYUFBZSx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQSxvR0F3WFMsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBeFgxQyxhQUFlLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBdVhPLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXZYeEMsYUFBZSwwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFtRDtBQUFBLG9HQXVYNUMsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBdlhXLGFBQWdCLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBOEIsTUFBQywwREFBRDtBQUFPLGlCQUFTLEVBQUMsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUE5QixDQUFuRCxDQURGLEVBRUU7QUFBQSxvR0FzWE8sS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBdFh4QyxhQUFlLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0xBRkYsQ0FERixDQURGLENBREYsQ0FERixDQUROLENBZkosRUE2Qkk7QUFBQSxvR0ErV3VCLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQS9XeEQsYUFBZSx5Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ00sTUFBQyx3REFBRDtBQUFVLGVBQU8sRUFBQyxrQ0FBbEI7QUFBcUQsa0JBQVUsRUFBQyxZQUFoRTtBQUE2RSxnQkFBUSxFQUFFLEdBQXZGO0FBQTRGLGlCQUFTLEVBQUMsZ0JBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGlEQUFEO0FBQU0sWUFBSSxFQUFDLHNCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLG9HQTRXYSxLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0E1VzlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBLG9HQTJXUyxLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0EzVzFDLGFBQWUsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBMFdPLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQTFXeEMsYUFBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLG9HQXlXSyxLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0F6V3RDLGFBQWUsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBcUQ7QUFBQSxvR0F5V2hELEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXpXZSxhQUFnQixhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQThCLE1BQUMsMERBQUQ7QUFBTyxpQkFBUyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBOUIsQ0FBckQsQ0FERixFQUVFO0FBQUEsb0dBd1dLLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXhXdEMsYUFBZSx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRMQUZGLENBREYsQ0FESixDQURGLENBREYsQ0FETixDQTdCSixFQTJDSTtBQUFBLG9HQWlXdUIsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBald4RCxhQUFlLDBDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDTSxNQUFDLHdEQUFEO0FBQVUsZUFBTyxFQUFDLDRCQUFsQjtBQUErQyxrQkFBVSxFQUFDLFNBQTFEO0FBQW9FLGdCQUFRLEVBQUUsR0FBOUU7QUFBbUYsaUJBQVMsRUFBQyxnQkFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsaURBQUQ7QUFBTSxZQUFJLEVBQUMsZ0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBOFZhLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQTlWOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBNlZXLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQTdWNUMsYUFBZSx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQSxvR0E0VlMsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBNVYxQyxhQUFlLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBMlZPLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQTNWeEMsYUFBZSwwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUErQztBQUFBLG9HQTJWeEMsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBM1ZPLGFBQWdCLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBOEIsTUFBQywwREFBRDtBQUFPLGlCQUFTLEVBQUMsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUE5QixDQUEvQyxDQURGLEVBRUU7QUFBQSxvR0EwVk8sS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBMVZ4QyxhQUFlLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscU1BRkYsQ0FERixDQURGLENBREYsQ0FERixDQUROLENBM0NKLEVBeURJO0FBQUEsb0dBbVZ1QixLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0FuVnhELGFBQWUseUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsd0RBQUQ7QUFBVSxlQUFPLEVBQUMsa0NBQWxCO0FBQXFELGtCQUFVLEVBQUMsU0FBaEU7QUFBMEUsZ0JBQVEsRUFBRSxHQUFwRjtBQUF5RixpQkFBUywyQkFBb0IsS0FBS3BDLEtBQUwsQ0FBV0osUUFBWCxHQUFvQixnQkFBcEIsR0FBcUMsRUFBekQsQ0FBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsaURBQUQ7QUFBTSxZQUFJLEVBQUMscUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBZ1ZhLEtBQUtILEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBaFY5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQSxvR0ErVVcsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBL1U1QyxhQUFlLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLG9HQThVUyxLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0E5VTFDLGFBQWUsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQSxvR0E2VU8sS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBN1V4QyxhQUFlLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQW9EO0FBQUEsb0dBNlU3QyxLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0E3VVksYUFBZ0IsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE4QixNQUFDLDBEQUFEO0FBQU8saUJBQVMsRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQTlCLENBQXBELENBREYsRUFFRTtBQUFBLG9HQTRVTyxLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0E1VXhDLGFBQWUsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3S0FGRixDQURGLENBREYsQ0FERixDQURKLENBREosQ0F6REosRUF1RUk7QUFBQSxvR0FxVXVCLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXJVeEQsYUFBZSwwQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ00sTUFBQyx3REFBRDtBQUFVLGVBQU8sRUFBQywrQkFBbEI7QUFBa0Qsa0JBQVUsRUFBQyxTQUE3RDtBQUF1RSxnQkFBUSxFQUFFLEdBQWpGO0FBQXNGLGlCQUFTLEVBQUMsZ0JBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGlEQUFEO0FBQU0sWUFBSSxFQUFDLG1CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLG9HQWtVYSxLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0FsVTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLG9HQWlVVyxLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0FqVTVDLGFBQWUsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBZ1VTLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQWhVMUMsYUFBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLG9HQStUTyxLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0EvVHhDLGFBQWUsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBa0Q7QUFBQSxvR0ErVDNDLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQS9UVSxhQUFnQixhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQThCLE1BQUMsMERBQUQ7QUFBTyxpQkFBUyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBOUIsQ0FBbEQsQ0FERixFQUVFO0FBQUEsb0dBOFRPLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQTlUeEMsYUFBZSx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRMQUZGLENBREYsQ0FERixDQURGLENBREYsQ0FETixDQXZFSixFQXFGSTtBQUFBLG9HQXVUdUIsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBdlR4RCxhQUFlLHlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDTSxNQUFDLHdEQUFEO0FBQVUsZUFBTyxFQUFDLGdDQUFsQjtBQUFtRCxrQkFBVSxFQUFDLFNBQTlEO0FBQXdFLGdCQUFRLEVBQUUsR0FBbEY7QUFBdUYsaUJBQVMsMkJBQW9CLEtBQUtwQyxLQUFMLENBQVdKLFFBQVgsR0FBb0IsZ0JBQXBCLEdBQXFDLEVBQXpELENBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGlEQUFEO0FBQU0sWUFBSSxFQUFDLHFCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLG9HQW9UYSxLQUFLSCxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXBUOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBbVRXLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQW5UNUMsYUFBZSx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQSxvR0FrVFMsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBbFQxQyxhQUFlLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBaVRPLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQWpUeEMsYUFBZSwwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFvRDtBQUFBLG9HQWlUN0MsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBalRZLGFBQWdCLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBOEIsTUFBQywwREFBRDtBQUFPLGlCQUFTLEVBQUMsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUE5QixDQUFwRCxDQURGLEVBR0U7QUFBQSxvR0ErU08sS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBL1N4QyxhQUFlLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUtBSEYsQ0FERixDQURGLENBREYsQ0FERixDQUROLENBckZKLEVBb0dJO0FBQUEsb0dBd1N1QixLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0F4U3hELGFBQWUsMENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsd0RBQUQ7QUFBVSxlQUFPLEVBQUMsZ0NBQWxCO0FBQW1ELGtCQUFVLEVBQUMsU0FBOUQ7QUFBd0UsZ0JBQVEsRUFBRSxHQUFsRjtBQUF1RixpQkFBUywyQkFBb0IsS0FBS3BDLEtBQUwsQ0FBV0osUUFBWCxHQUFvQixnQkFBcEIsR0FBcUMsRUFBekQsQ0FBaEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsaURBQUQ7QUFBTSxZQUFJLEVBQUMsbUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBcVNhLEtBQUtILEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBclM5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQSxvR0FvU1csS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBcFM1QyxhQUFlLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLG9HQW1TUyxLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0FuUzFDLGFBQWUsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQSxvR0FrU08sS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBbFN4QyxhQUFlLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWtEO0FBQUEsb0dBa1MzQyxLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0FsU1UsYUFBZ0IsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE4QixNQUFDLDBEQUFEO0FBQU8saUJBQVMsRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQTlCLENBQWxELENBREYsRUFHRTtBQUFBLG9HQWdTTyxLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0FoU3hDLGFBQWUsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzSkFIRixDQURGLENBREYsQ0FERixDQURKLENBREosQ0FwR0osRUFtSEk7QUFBQSxvR0F5UnVCLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXpSeEQsYUFBZSx3REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ00sTUFBQyx3REFBRDtBQUFVLGVBQU8sRUFBQyw0QkFBbEI7QUFBK0Msa0JBQVUsRUFBQyxTQUExRDtBQUFvRSxnQkFBUSxFQUFFLEdBQTlFO0FBQW1GLGlCQUFTLDJCQUFvQixLQUFLcEMsS0FBTCxDQUFXSixRQUFYLEdBQW9CLGdCQUFwQixHQUFxQyxFQUF6RCxDQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxpREFBRDtBQUFNLFlBQUksRUFBQywwQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQSxvR0FzUmEsS0FBS0gsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0F0UjlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLG9HQXFSVyxLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0FyUjVDLGFBQWUsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBb1JTLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXBSMUMsYUFBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLG9HQW1STyxLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0FuUnhDLGFBQWUsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBd0Q7QUFBQSxvR0FtUmpELEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQW5SZ0IsYUFBZ0IsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE4QixNQUFDLDBEQUFEO0FBQU8saUJBQVMsRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQTlCLENBQXhELENBREYsRUFHRTtBQUFBLG9HQWlSTyxLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0FqUnhDLGFBQWUsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2S0FIRixDQURGLENBREYsQ0FERixDQURGLENBRE4sQ0FuSEosRUFrSUk7QUFBQSxvR0EwUXVCLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQTFReEQsYUFBZSwwQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ00sTUFBQyx3REFBRDtBQUFVLGVBQU8sRUFBQyxpQ0FBbEI7QUFBb0Qsa0JBQVUsRUFBQyxVQUEvRDtBQUEwRSxnQkFBUSxFQUFFLEdBQXBGO0FBQXlGLGlCQUFTLEVBQUMsZ0JBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDTTtBQUFBLG9HQXdRVyxLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0F4UTVDLGFBQWUsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBdVFTLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXZRMUMsYUFBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLG9HQXNRTyxLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0F0UXhDLGFBQWUsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUlFO0FBQUEsb0dBbVFPLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQW5ReEMsYUFBZSx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJHQUpGLENBREYsQ0FETixDQUROLENBbElKLENBREYsQ0FKRixFQXFKRSxNQUFDLGlEQUFEO0FBQU0sWUFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBMlAyQixLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0EzUDVELGFBQWEsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQSxvR0EwUHlCLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQTFQMUQsYUFBZSx5Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQSxvR0F5UHFCLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXpQdEQsYUFBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosRUFHTTtBQUFBLG9HQXVQbUIsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBdlBwRCxhQUFnQixlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQywwREFBRDtBQUFPLGlCQUFTLEVBQUMsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBSE4sQ0FERixDQURGLENBckpGLENBaERGLEVBa05FO0FBQW9HLFdBQUcsRUFBRSxLQUFLckIsaUJBQUwsQ0FBdUIsQ0FBdkIsQ0FBekc7QUFBQSxvR0ErTytCLEtBQUt0QixLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQS9PaEUsYUFBZSxvRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQSxvR0E4TzJCLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQTlPNUQsYUFBZSxtRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLEVBRUk7QUFBQSxvR0E2TzJCLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQTdPNUQsYUFBZSxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLG9HQTRPeUIsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBNU8xRCxhQUFjLHNEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLG9HQTJPdUIsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBM094RCxhQUFjLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGlEQUFEO0FBQU0sWUFBSSxFQUFFO0FBQUVJLGtCQUFRLEVBQUUsV0FBWjtBQUF5QkMsZUFBSyxFQUFFO0FBQUVDLGtCQUFNLEVBQUU7QUFBVjtBQUFoQyxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLG9HQXlPbUIsS0FBS2pELEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBek9wRCxhQUFhLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQURGLENBREYsRUFRRTtBQUFBLG9HQW9PdUIsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBcE94RCxhQUFjLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGlEQUFEO0FBQU0sWUFBSSxFQUFFO0FBQUVJLGtCQUFRLEVBQUUsV0FBWjtBQUF5QkMsZUFBSyxFQUFFO0FBQUVDLGtCQUFNLEVBQUU7QUFBVjtBQUFoQyxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBLG9HQWtPaUIsS0FBS2pELEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBbE9sRCxhQUFhLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixDQURGLENBUkYsRUFlRTtBQUFBLG9HQTZOdUIsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBN054RCxhQUFjLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGlEQUFEO0FBQU0sWUFBSSxFQUFFO0FBQUVJLGtCQUFRLEVBQUUsV0FBWjtBQUF5QkMsZUFBSyxFQUFFO0FBQUVDLGtCQUFNLEVBQUU7QUFBVjtBQUFoQyxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBLG9HQTJOaUIsS0FBS2pELEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBM05sRCxhQUFhLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixDQURGLENBZkYsRUFzQkU7QUFBQSxvR0FzTnVCLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXROeEQsYUFBYyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxpREFBRDtBQUFNLFlBQUksRUFBRTtBQUFFSSxrQkFBUSxFQUFFLFdBQVo7QUFBeUJDLGVBQUssRUFBRTtBQUFFQyxrQkFBTSxFQUFFO0FBQVY7QUFBaEMsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQSxvR0FvTmlCLEtBQUtqRCxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXBObEQsYUFBYSxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosQ0FERixDQXRCRixFQTZCRTtBQUFBLG9HQStNdUIsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBL014RCxhQUFjLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGlEQUFEO0FBQU0sWUFBSSxFQUFFO0FBQUVJLGtCQUFRLEVBQUUsV0FBWjtBQUF5QkMsZUFBSyxFQUFFO0FBQUVDLGtCQUFNLEVBQUU7QUFBVjtBQUFoQyxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBLG9HQTZNaUIsS0FBS2pELEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBN01sRCxhQUFhLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixDQURGLENBN0JGLEVBb0NFO0FBQUEsb0dBd011QixLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0F4TXhELGFBQWMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsaURBQUQ7QUFBTSxZQUFJLEVBQUU7QUFBRUksa0JBQVEsRUFBRSxXQUFaO0FBQXlCQyxlQUFLLEVBQUU7QUFBRUMsa0JBQU0sRUFBRTtBQUFWO0FBQWhDLFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUEsb0dBc01pQixLQUFLakQsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0F0TWxELGFBQWEsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLENBREYsQ0FwQ0YsRUEyQ0U7QUFBQSxvR0FpTXVCLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQWpNeEQsYUFBYyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxpREFBRDtBQUFNLFlBQUksRUFBRTtBQUFFSSxrQkFBUSxFQUFFLFdBQVo7QUFBeUJDLGVBQUssRUFBRTtBQUFFQyxrQkFBTSxFQUFFO0FBQVY7QUFBaEMsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQSxvR0ErTGlCLEtBQUtqRCxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQS9MbEQsYUFBYSxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosQ0FERixDQTNDRixDQURGLEVBb0RFO0FBQUEsb0dBeUx5QixLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0F6TDFELGFBQWMsc0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsb0dBd0x1QixLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0F4THhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRTtBQUFBLG9HQXVMdUIsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBdkx4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZGLEVBR0U7QUFBQSxvR0FzTHVCLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQXRMeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFIRixDQXBERixDQUZKLEVBNERJO0FBQUEsb0dBbUwyQixLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0FuTDVELGFBQWUsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxXQUFHLEVBQUMsMkJBQVQ7QUFBNEQsV0FBRyxFQUFDLFdBQWhFO0FBQUEsb0dBa0x5QixLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0FsTDFELGFBQStDLFdBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQTVESixFQStESTtBQUFzRCxhQUFLLEVBQUU7QUFBQ08sbUJBQVMsRUFBQztBQUFYLFNBQTdEO0FBQUEsb0dBZ0wyQixLQUFLbEQsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0FoTDVELGFBQWUsc0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsMERBQUQ7QUFBTyxpQkFBUyxFQUFDLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQS9ESixDQWxORixFQXFSRTtBQUFBLG9HQTRLK0IsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBNUtoRSxhQUFlLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVFO0FBQUssV0FBRyxFQUFDLHdCQUFUO0FBQTZELFdBQUcsRUFBQyxXQUFqRTtBQUFBLG9HQTBLNkIsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBMUs5RCxhQUE0QyxnQkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBclJGLENBL0JGLEVBMFRHLENBQUMsS0FBS3BDLEtBQUwsQ0FBV08sZ0JBQVosSUFDQztBQUFBLG9HQXFLK0IsS0FBS2QsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0FyS2hFLGFBQWUsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBM1RKO0FBQUE7QUFBQSxrQkFnZW1DLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQWhlcEU7QUFBQTtBQUFBLG94TEFnZW1DLEtBQUszQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCQyxZQUFsQixHQUFpQyxHQWhlcEUsMkNBZ2VtQyxLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0FoZXBFLHVDQWdlbUMsS0FBSzNDLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JDLFlBQWxCLEdBQWlDLEdBaGVwRSxpcXBEQURGO0FBbXFCRDs7OztFQWh4QmdCekIsNkNBQUssQ0FBQ2lDLFM7O0FBa3hCekIsU0FBU0MsZUFBVCxPQUFxQztBQUFBLE1BQVZWLE1BQVUsUUFBVkEsTUFBVTtBQUNuQyxTQUFPO0FBQ0xBLFVBQU0sRUFBTkE7QUFESyxHQUFQO0FBR0Q7O0FBQ2NXLDBIQUFPLENBQUNELGVBQUQsRUFBa0I7QUFBQ3hCLFVBQVEsRUFBUkEsd0RBQUQ7QUFBVTBCLGtCQUFnQixFQUFoQkEsZ0VBQVY7QUFBMkJqQix1QkFBcUIsRUFBckJBLHFFQUFxQkE7QUFBaEQsQ0FBbEIsQ0FBUCxDQUE0RXRDLElBQTVFLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTJjM2Y4ZGFiMTg1MWE2OGY5OTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcbmltcG9ydCBBcnJvdyBmcm9tIFwiLi4vY29tcG9uZW50cy9hcnJvd1wiXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7b3Blbk1lbnV9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnXG5pbXBvcnQgQ2xpZW50cyBmcm9tICcuLi9jb21wb25lbnRzL2NsaWVudHMnXG5pbXBvcnQge2FkZENsYXNzVG9DdXJzb3IscmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zJ1xuaW1wb3J0IHsgTU9CSUxFX0JSRUFLUE9JTlQgfSBmcm9tIFwiLi4vY29uZmlnXCJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNNb2JpbGU6ZmFsc2UsXG4gICAgICB1bmRlcmxpbmVFeHBhbmQ6IGZhbHNlLFxuICAgICAgYmFja2dyb3VuZFN0eWxlczogeyB0b3A6IFwiMFwiLCBsZWZ0OiBcIjBcIiB9LFxuICAgICAgYmFja2dyb3VuZFJlYWR5OiBmYWxzZSxcbiAgICAgIGJhY2tncm91bmRTaG93OiBmYWxzZSxcbiAgICAgIGxvYWRpbmdMb2dvUmVhZHk6IGZhbHNlLFxuICAgICAgYW5pbWF0ZTogZmFsc2UsXG4gICAgICBtZW51QnRuQ29sb3I6XCJibGFja1wiXG4gICAgfTtcbiAgICB0aGlzLmJhY2tncm91bmRJbWFnZSA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5yZWxsYXhSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIHRoaXMubm90UGVyZm9ybWVkQW5pbWF0aW9uID0gdHJ1ZVxuICAgIHRoaXMud2hpdGVNZW51U2VjdGlvbnMgPSBbUmVhY3QuY3JlYXRlUmVmKCldXG4gIH1cbiAgLy8gaGFuZGxlU2Nyb2xsID0gKCk9PntcbiAgLy8gICBmb3IobGV0IGk9MDtpPHRoaXMud2hpdGVNZW51U2VjdGlvbnMubGVuZ3RoO2krKyl7XG4gIC8vICAgICBsZXQgYm91bmRpbmdWYWxzID0gdGhpcy53aGl0ZU1lbnVTZWN0aW9uc1tpXS5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIC8vICAgICBpZihib3VuZGluZ1ZhbHMudG9wIDwgMCAmJiAoYm91bmRpbmdWYWxzLnRvcCAqIC0xIDwgYm91bmRpbmdWYWxzLmhlaWdodCkpe1xuICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHttZW51QnRuQ29sb3I6XCJ3aGl0ZVwifSlcbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbnVCdG5Db2xvcjpcImJsYWNrXCJ9KVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuICBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgdGhpcy5wb3NpdGlvbkltYWdlKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aXNNb2JpbGU6d2luZG93LmlubmVyV2lkdGggPCBNT0JJTEVfQlJFQUtQT0lOVD90cnVlOmZhbHNlfSlcbiAgfVxuICBwb3NpdGlvbkltYWdlKGNiKSB7XG4gICAgbGV0IGJhY2tncm91bmRTdHlsZXMgPSB7IGJvdHRvbTogXCIwcmVtXCIsIGxlZnQ6IFwiLTMxLjUlXCIsIHdpZHRoOiBcIjIwOCVcIiB9O1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDQwMClcbiAgICAgIGJhY2tncm91bmRTdHlsZXMgPSB7IGJvdHRvbTogXCIwcmVtXCIsIGxlZnQ6IFwiLTMxLjUlXCIsIHdpZHRoOiBcIjIwOCVcIiB9O1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDY1MClcbiAgICAgIGJhY2tncm91bmRTdHlsZXMgPSB7IGJvdHRvbTogXCIwXCIsIGxlZnQ6IFwiLTIwLjUlXCIsIHdpZHRoOiBcIjEyMCVcIiB9O1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDEwMjQpXG4gICAgICAvLyBiYWNrZ3JvdW5kU3R5bGVzID0ge3RvcDpcIi0xLjVyZW1cIixsZWZ0OlwiLTIwLjUlXCIsd2lkdGg6XCIxMjAlXCJ9XG4gICAgICAvLyBiYWNrZ3JvdW5kU3R5bGVzID0geyB0b3A6IFwiLTAuNXJlbVwiLCBsZWZ0OiBcIi03LjUlXCIgfTtcbiAgICAgIGJhY2tncm91bmRTdHlsZXMgPSB7IGJvdHRvbTogXCIwXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDEzNjYpXG4gICAgICAvLyBiYWNrZ3JvdW5kU3R5bGVzID0geyB0b3A6IFwiLTAuNXJlbVwiLCBsZWZ0OiBcIi03LjUlXCIgfTtcbiAgICAgIGJhY2tncm91bmRTdHlsZXMgPSB7IGJvdHRvbTogXCIwXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDE0NDApXG4gICAgICAvLyBiYWNrZ3JvdW5kU3R5bGVzID0geyB0b3A6IFwiLTEuNXJlbVwiLCBsZWZ0OiBcIi03LjUlXCIgfTtcbiAgICAgIGJhY2tncm91bmRTdHlsZXMgPSB7IGJvdHRvbTogXCIwXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgIC8vIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgYmFja2dyb3VuZFN0eWxlcyB9LCAoKSA9PiB7XG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgY2IoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnN0YXRlLmJhY2tncm91bmRSZWFkeSAmJlxuICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nTG9nb1JlYWR5ICYmXG4gICAgICB0aGlzLm5vdFBlcmZvcm1lZEFuaW1hdGlvblxuICAgICkge1xuICAgICAgdGhpcy5wb3NpdGlvbkltYWdlKCk7XG4gICAgICB0aGlzLm5vdFBlcmZvcm1lZEFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgdGhpcy5wcm9wcy5vcGVuTWVudShmYWxzZSk7XG4gICAgICAvLyB0aGlzLm1vdXNlRXZlbnRzKClcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYW5pbWF0ZTogdHJ1ZSB9LCgpPT57XG4gICAgICAgICAgLy8gdGhpcy5wcm9wcy5yZW1vdmVDbGFzc0Zyb21DdXJzb3IoXCJsYXJnZXJcIikgIFxuICAgICAgICAgIC8vIHRoaXMucHJvcHMucmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKFwid2hpdGVcIikgIFxuICAgICAgICB9KTtcbiAgICAgIH0sIDc1MCk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2lzTW9iaWxlOndpbmRvdy5pbm5lcldpZHRoIDwgTU9CSUxFX0JSRUFLUE9JTlQ/dHJ1ZTpmYWxzZX0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5oYW5kbGVSZXNpemUpXG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5oYW5kbGVTY3JvbGwpXG4gICAgY29uc3QgbG9hZGluZ0xvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2FkaW5nTG9nby5zcmMgPSBcIi9pbWFnZXMvbG9hZGluZ19sb2dvLnBuZ1wiO1xuICAgIGxvYWRpbmdMb2dvLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nTG9nb1JlYWR5OiB0cnVlIH0pO1xuICAgIH07XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9IFwiL2ltYWdlcy9ob21lLWNvdmVyLmpwZ1wiO1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYmFja2dyb3VuZFJlYWR5OiB0cnVlIH0pO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLnJlbW92ZUNsYXNzRnJvbUN1cnNvcihcIndoaXRlXCIpXG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLmhhbmRsZVJlc2l6ZSlcbiAgICAvLyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVNjcm9sbClcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgXG4gICAgXG4vLyAgICAgZm9yIHNlbyBwdXJwb3NlXG4gICAgICBjb25zdCBzY2hlbWFEYXRhPXtcblxuICAgICAgXCJAY29udGV4dFwiOiBcImh0dHA6Ly9zY2hlbWEub3JnXCIsXG4gICAgICBcIkB0eXBlXCI6IFwic2VydmljZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiT3Bwb3NhYmxlIFRodW1ic1wiLFxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL29wcG9zYWJsZS10aHVtYnMudmVyY2VsLmFwcC9cIlxuICAgfVxuXG4gICBKU09OLnN0cmluZ2lmeShzY2hlbWFEYXRhKVxuICAgIFxuICAgIFxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IG5hdlBvc2l0aW9uPVwiYWJzb2x1dGVcIiBuYXZUZXh0Q29sb3I9XCJibGFja1wiIG1lbnVCdG5Db2xvcj17dGhpcy5zdGF0ZS5tZW51QnRuQ29sb3J9IHBhZ2U9XCJob21lXCI+XG4gICAgICAgIDxIZWFkPlxuICA8bWV0YSBuYW1lPVwiZ29vZ2xlLXNpdGUtdmVyaWZpY2F0aW9uXCIgY29udGVudD1cImZUcDdsb0J6RFRBalhFdXRpRWNsZnN0NGMzdnQxM3VrdHFXX2RBRlRXb0lcIiAvPlxuICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiYnJhbmQgaWRlbnRpdHkgYWdlbmN5LCBicmFuZCBpZGVudGl0eSBkZXNpZ24gYWdlbmN5LCBjb3Jwb3JhdGUgaWRlbnRpdHkgYWdlbmN5LCBicmFuZCBpZGVudGl0eSwgYnJhbmRpbmcgZGVzaWduLCBkaWdpdGFsIG1lZGlhIG1hbmFnZW1lbnQsZGlnaXRhbCBtZWRpYSBhZ2VuY3ksIHNvY2lhbCBtZWRpYSBhZ2VuY2llcyxkaWdpdGFsIG1lZGlhIG1hcmtldGluZyBjb21wYW5pZXNcIi8+XG4gICAgICAgICAgPHRpdGxlPkJyYW5kIElkZW50aXR5IEFnZW5jeSB8IE9wcG9zYWJsZSBUaHVtYnM8L3RpdGxlPlxuICAgICAgICAgIHsvKiA8aDE+T3Bwb3NhYmxlIFRodW1iczwvaDE+ICovfVxuPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk9wcG9zYWJsZSBUaHVtYnMgd29yayB3aXRoIGNvbXBhbmllcyBmb3IgdGhlaXIgYnJhbmRpbmcuIElmIHlvdSBoYXZlIGEgbmV3IGJyYW5kIHRvIGxhdW5jaCwgd2UgY2FuIGhlbHAgeW91LCByaWdodCBmcm9tIG5hbWluZyBpdCB0byBkZXZlbG9waW5nIGl0cyBpZGVudGl0eS5cIi8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctVlRNRjcwUDdIV1wiPjwvc2NyaXB0PlxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgZ3RhZygnY29uZmlnJywgJ0ctVlRNRjcwUDdIVycpO1xuICAgICAgICAgIGAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+IFxuXG4gey8qIHNjaGVtYSBpcyBpbXBsZW1lbnRlZCAqL31cbjxzY3JpcHRcbiAgICB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBKU09OLnN0cmluZ2lmeShzY2hlbWFEYXRhKSB9fVxuICAvPlxuICAgICAgICAgICAgICAgICAgXG48L0hlYWQ+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmdMb2dvUmVhZHkgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLmFuaW1hdGUgPyBcImFuaW1hdGVcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctd3JhcHBlclwiIHN0eWxlPXt7aGVpZ2h0OmAke3RoaXMucHJvcHMuY29tbW9uLndpbmRvd0hlaWdodH1weGB9fT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2FkaW5nX2xvZ28ucG5nXCIgYWx0PSdob21lY292ZXInIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvcC1zZWN0aW9uLXdyYXBwZXIgYmxhY2stY3Vyc29yICR7dGhpcy5zdGF0ZS5hbmltYXRlID8gXCJhbmltYXRlXCIgOiBcIlwifWB9IHN0eWxlPXt7IGhlaWdodDogYCR7dGhpcy5wcm9wcy5jb21tb24ud2luZG93SGVpZ2h0fXB4YCB9fT5cbiAgICAgICAgICAgIHsvKiA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvaG9tZS1jb3Zlci5qcGdcIiBiZ0ltYWdlQWx0PVwiaG9tZSBjb3ZlclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT1cIlwiPiAqL31cbiAgICAgICAgICAgIDxpbWcgc3R5bGU9e3RoaXMuc3RhdGUuYmFja2dyb3VuZFN0eWxlc30gc3JjPVwiL2ltYWdlcy9ob21lLWNvdmVyLmpwZ1wiIGNsYXNzTmFtZT17YGJhY2tncm91bmRgfSByZWY9e3RoaXMuYmFja2dyb3VuZEltYWdlfSBhbHQ9J2hvbWVjb3ZlcicvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5dGVsbGVycyBmdXR1cmEtbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjaGlsZFwiIHN0eWxlPXt7Zm9udFdlaWdodDpcIjUwJVwifX0+TUVFVCBUSEUgU1RPUllURUxMRVJTPC9oND4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxsbyBoZWx2ZXRpY2EtbmV1ZS1jb25kZW5zZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWxsb1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsLXNlcnZpY2UgYmlnLWNhc2xvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5kZXBlbmRlbnQ8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWdlbmN5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtZG93bi1hcnJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdyBkb3duXCI+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIGxvb2tpbmctZm9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLXRleHRcIj48aDE+QnJhbmQgSWRlbnRpdHkgQWdlbmN5PC9oMT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIDwvUGFyYWxsYXg+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGl0ZS1mYWRlXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWNhdGVnb3JpZXMgdGV4dC1jZW50ZXIgcGFkZGVkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgSW5zaWdodHMgLyBCcmFuZCBJZGVudGl0eSAvIFBhY2thZ2luZyAvIEFkdmVydGlzaW5nIC8gRGlnaXRhbCAvIEdyYXBoaWNzIC8gRmlsbXNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8taXRlbXNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2RkIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL0JpZ0Jhbnlhbi5qcGdcIiBiZ0ltYWdlQWx0PVwiYmlnIGJhbnlhblwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT17YHBvcnRmb2xpby1pdGVtICR7dGhpcy5zdGF0ZS5pc01vYmlsZT9cIndoaXRlLW1lbnUtYnRuXCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9iaWctYmFueWFuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkJpZyBCYW55YW4gPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPkFuIEl0YWxpYW4gd2luZW1ha2VyLiBBIHBhc3Npb25hdGUgYnJhbmQgdGVhbS4gQW5kIHVzLiBZZWFycyBvZiB0w6p0ZS3DoC10w6p0ZXMgYW5kIHJlc2VhcmNoLWRyaXZlbiBpbnNpZ2h0cyBsZWQgdXMgdG8gcmVjcmVhdGUgdGhlIHBhY2thZ2luZyBhbmQgY29tbXVuaWNhdGlvbiBzdHJhdGVneSBmb3IgQmlnIEJhbnlhbi4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGV2ZW4gbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vbGFuZ29vci5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT17YHBvcnRmb2xpby1pdGVtICR7dGhpcy5zdGF0ZS5pc01vYmlsZT9cIndoaXRlLW1lbnUtYnRuXCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9sYW5nb29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkwnYW5nb29yIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5XaW5lIGNhbiBiZSBlbGVnYW50LiBXaW5lIGNhbiBiZSBzb3BoaXN0aWNhdGVkLiBCdXQgd2luZSBhbmQgZnVuPyBIZXJl4oCZcyBob3cgd2UgbWFycmllZCDigJhmdW7igJkgYW5kIGEgbmV3IGJyYW5kIG9mIHdpbmVzIGZyb20gQmlnIEJhbnlhbiwga25vd24gZm9yIGl0cyBwcmVtaXVtIHdpbmVzLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZGQgbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vRW5jaGFudGV1ci5qcGdcIiBiZ0ltYWdlQWx0PVwiZW5jaGFudGV1clwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvZW5jaGFudGV1clwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5FbmNoYW50ZXVyIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPkl04oCZcyBGcmVuY2gsIGl04oCZcyByb21hbnRpYyBhbmQgaXTigJlzIHNvIHZlcnkgZmxvcmFsLiBIb3cgY2FuIHdlIG5vdCBmYWxsIGluIGxvdmUgd2l0aCBFbmNoYW50ZXVyPyBXZSBoYXZlIEstZHJhbWEgZmFucyBvbiBvdXIgdGVhbSB3aG8gYWJzb2x1dGVseSBsb3ZlIHRoaXMgYnJhbmQhPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBldmVuIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL2Z5bmQuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9XCJwb3J0Zm9saW8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL2Z5bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+RllORCA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+U2VlZGVkIGluIHRoZSBpZGVhIG9mIHNlbGYtZXhwcmVzc2lvbiwgRllORCBpbnNwaXJlZCB1cyB3aXRoIGl0cyBmdW5jdGlvbmFsIGNsb3RoaW5nIGxpbmVzLiBGcm9tIHN0cmF0ZWd5IHRvIGlkZW50aXR5IGFuZCBicmFuZCBhcmNoaXRlY3R1cmUgZGVzaWduLCB3ZSBoZWxwZWQgYnJpbmcgdGhpcyBicmFuZCB0byBsaWZlLiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2RkIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9DaGFuZHJpa2EzLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJsYW5nb29yXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPXtgcG9ydGZvbGlvLWl0ZW0gJHt0aGlzLnN0YXRlLmlzTW9iaWxlP1wid2hpdGUtbWVudS1idG5cIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL2NoYW5kcmlrYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5DaGFuZHJpa2EgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPkhlcmXigJlzIGEgYnJhbmQgd2UgYWxsIGdyZXcgdXAgd2l0aC4gQW5kIHlldCwgaXQgbWFuYWdlZCB0byBzdXJwcmlzZSB1cyB3aXRoIGl0cyBzZWNyZXRzLiBXZSBzaGFyZWQgdGhlc2UgbGl0dGxlIG51Z2dldHMgd2l0aCB0aGUgd29ybGQgaW4gb3VyIGNhbXBhaWduLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZXZlbiBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9TYW50b29yLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJsYW5nb29yXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPVwicG9ydGZvbGlvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9zYW50b29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPlNhbnRvb3IgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPldobyBkb2VzbuKAmXQgcmVtZW1iZXIgdGhlIGNsYXNzaWMg4oCcbXVtbXnigJ0gYWRzISBJdCBnaXZlcyB1cyBncmVhdCBwcmlkZSB0byB3b3JrIG9uIGNhbXBhaWducyBmb3IgYSBicmFuZCB0aGF04oCZcyBhcyByZWxldmFudCB0b2RheSBhcyBpdCB3YXMgYSBmZXcgZGVjYWRlcyBhZ28uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9kZCBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9Wb2lKZWFucy5wbmdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT17YHBvcnRmb2xpby1pdGVtICR7dGhpcy5zdGF0ZS5pc01vYmlsZT9cIndoaXRlLW1lbnUtYnRuXCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy92b2ktamVhbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+Vk9JIEplYW5zIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5UaGUgdmVyeSBpZGVhIG9mIHRoZXNlIGRlbmltcyBpbnNwaXJlZCB1cyEgVk9JIGhhcyBlcmdvbm9taWNhbGx5IGVuZ2luZWVyZWQgZGVuaW1zIHRoYXQgY2FsbGVkIGZvciBlZGd5LCBmYXNoaW9uIGZvcndhcmQgY29tbXVuaWNhdGlvbi4gQW5kIHdlIHJldmVsZWQgaW4gaXQuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGV2ZW4gbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL0ljZWJ1cmcxLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJsYW5nb29yXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPXtgcG9ydGZvbGlvLWl0ZW0gJHt0aGlzLnN0YXRlLmlzTW9iaWxlP1wid2hpdGUtbWVudS1idG5cIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL2ljZWJ1cmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+SWNlQnVyZyA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+SW50ZW5zZSBjcmF2aW5ncyBmb3IgYnVyZ2VycyBhbmQgc2hha2VzIGZlZCBvdXIgYnJhaW5zIGFzIHdlIHdvcmtlZCBvbiB0aGUgYnJhbmQgaWRlYSBhbmQgaWRlbnRpdHkgZm9yIHRoaXMgVUstYmFzZWQgZ291cm1ldCBidXJnZXIgY2hhaW4uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9kZCBtaWEtYnktdGFuaXNocSBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9NaWExLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJsYW5nb29yXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPXtgcG9ydGZvbGlvLWl0ZW0gJHt0aGlzLnN0YXRlLmlzTW9iaWxlP1wid2hpdGUtbWVudS1idG5cIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL21pYS1ieS10YW5pc2hxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPk1pYSAtIFRhbmlzaHEgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPlRoZXNlIGZpbG1zIGFyZSBhIGNvbGxlY3Rpb24gb2Ygc3RvcmllcyBvZiBJbmRpYW4gd29tZW4gd2hvIGluc3BpcmUgeW91IHdpdGggdGhlaXIgcmVzaWxpZW5jZSwgY2hhcm0geW91IHdpdGggdGhlaXIgcHJlc2VuY2UgYW5kIGF3ZSB5b3Ugd2l0aCB0aGVpciBhY2hpZXZlbWVudHMuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGV2ZW4gbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vR3JhcGhpY3MxLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJncmFwaGljc1wiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkdyYXBoaWNzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+QSBkaWdpdGFsIGFydCBwcm9qZWN0IHRoYXQgbGVkIHVzIHRvIGNyZWF0ZSBlZGd5LCBtb2Rlcm4gZ3JhcGhpY3MgZm9yIGNsb3RoaW5nIGFuZCBtZXJjaGFuZGlzZS48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibm8tY3NzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsb3JlLW1vcmUgdGV4dC1jZW50ZXIgcGFkZGVkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicm93c2VcIj5icm93c2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCI0LjZyZW1cIn19PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJleHBsb3JlLWFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3cgZGlyZWN0aW9uPVwiZG93blwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7LyogPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlcyBwb3NpdGlvbi1yZWxhdGl2ZSBwYWRkZWQtY29udGVudCB3aGl0ZS1jdXJzb3Igd2hpdGUtY3Vyc29yIHdoaXRlLW1lbnUtYnRuXCIgcmVmPXt0aGlzLndoaXRlTWVudVNlY3Rpb25zWzBdfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWhlYWRpbmcgbW9yZS1sZXR0ZXItc3BhY2luZyBmdXR1cmEtbGlnaHQgc2xpZ2h0bHktbGFyZ2VyLXRleHQgeWVsbG93LXRleHRcIj5TRVJWSUNFUzwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtbGlzdHNcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2VydmljZS1pdGVtcyBsaXN0LXN0eWxlLW5vbmUgd2hpdGUtdGV4dCBsYXJnZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnaW5zaWdodHMnIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSW5zaWdodHNcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdicmFuZC1pZGVudGl0eScgfSx9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQnJhbmQgSWRlbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ3BhY2thZ2luZycgfSx9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUGFja2FnaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdhZHZlcnRpc2luZycgfSx9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWR2ZXJ0aXNpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ2RpZ2l0YWwnIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIERpZ2l0YWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ2RpZ2l0YWwnIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEdyYXBoaWNzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdmaWxtcycgfSx9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsbXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJza2lsbHMgbGlzdC1zdHlsZS1ub25lIHNsaWdodGx5LWxhcmdlci10ZXh0IGZ1dHVyYS1saWdodCB5ZWxsb3ctdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPGxpPkNSRUFUSVZFPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5JTlNJR0hULURSSVZFTjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+Q1VMVFVSQUxMWSBSRUxFVkFOVDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1pbWFnZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zZXJ2aWNlcy1iZy0yLnBuZ1wiIGNsYXNzTmFtZT1cIndpZHRoLTEwMFwiICBhbHQ9J2hvbWVjb3ZlcicvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LW1vYmlsZSBoaWRlLWRlc2t0b3AgdGV4dC1jZW50ZXJcIiBzdHlsZT17e21hcmdpblRvcDpcIjcuMnJlbVwifX0+XG4gICAgICAgICAgICAgICAgPEFycm93IGRpcmVjdGlvbj1cImRvd25cIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8Q2xpZW50cyAvPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3dhdmUtYmxhY2suZ2lmXCIgY2xhc3NOYW1lPVwid2lkdGgtMTAwIHdhdmVcIiBhbHQ9J2hvbWVjb3ZlcicgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHshdGhpcy5zdGF0ZS5sb2FkaW5nTG9nb1JlYWR5ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsYWNrLWJnXCI+PC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC53aGl0ZS1mYWRle1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMHJlbTtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwyNTUsMjU1LCAxKSk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSgyNTUsMjU1LDI1NSwgMSkpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwyNTUsMjU1LCAxKSk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHdoaXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcnJvdy1yaWdodHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIGN1YmljLWJlemllcigwLjc3LCAwLCAwLjE3NSwgMSk7XG4gICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnAtaW5mby13cmFwcGVyOmhvdmVyIC5hcnJvdy1yaWdodCwucG9ydGZvbGlvLWl0ZW06aG92ZXIgLmFycm93LXJpZ2h0e1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgxcmVtKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLndhdmV7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIC8vIGJvdHRvbTogLTc4JTtcbiAgICAgICAgICAgICAgYm90dG9tOjA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1pdGVtcyBsaSBhe1xuICAgICAgICAgICAgICBjb2xvcjojZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2UtaXRlbXMgbGkgYTpob3ZlcntcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICAgIGNvbG9yOiNGOUVEMzI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1pdGVtcyBsaTpob3ZlcntcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnNNZWRpdW1JdGFsaWMsc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnAtaW5mby13cmFwcGVye1xuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtYXQxIC5wLWluZm97XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgYm90dG9tOiA3cmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLmhlbGxvIC5jaGlsZHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbmltYXRlIC5zdG9yeXRlbGxlcnMgLmNoaWxke1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLmZ1bGwtc2VydmljZSAuY2hpbGR7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgLmFuaW1hdGUgLmxvb2tpbmctZm9yIC5jaGlsZHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZXhwbG9yZS1tb3Jle1xuICAgICAgICAgICAgICBmb250LXNpemU6NC42cmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1saXN0cyB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWl0ZW1ze1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDYuNXJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNraWxscyB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDZyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNi41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2UtaW1hZ2V7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgcmlnaHQ6IC01JTtcbiAgICAgICAgICAgICAgdG9wOiAtMSU7XG4gICAgICAgICAgICAgIHdpZHRoOiA0NyU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZXN7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IzAwMDAwMDtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6OC44cmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbToyNXJlbTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpb3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmZmZmO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo4cmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHJlbTtcbiAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9ydGZvbGlvLWl0ZW1ze1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTdyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjE1JTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjE1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3J0Zm9saW8taXRlbXMgLnJvdyAuZXZlbntcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDotOHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3J0Zm9saW8tdGl0bGV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjQuNnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3J0Zm9saW8taXRlbS5mb3JtYXQyIC5pbWFnZS13cmFwcGVyIGltZ3tcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3J0Zm9saW8tZGVzY3JpcHRpb257XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZXZlbiAuZm9ybWF0MiAucG9ydGZvbGlvLWluZm97XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybWF0MiAucG9ydGZvbGlvLWluZm97XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6M3JlbTtcbiAgICAgICAgICAgICAgcGFkZGluZzowIDUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1hdDEgLnBvcnRmb2xpby1pbmZve1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA4cmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybWF0MXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTI1JTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZXZlbiAuZm9ybWF0MXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUpIDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3J0Zm9saW8tY2F0ZWdvcmllc3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MS44cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJvdHRvbS10ZXh0e1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQuNXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MS44cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhvbWUtZG93bi1hcnJvd3tcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjRyZW07XG4gICAgICAgICAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmbG9hdGluZztcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheToxLjRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLmhvbWUtZG93bi1hcnJvd3tcbiAgICAgICAgICAgICAgb3BhY2l0eToxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGtleWZyYW1lcyBmbG9hdGluZyB7XG4gICAgICAgICAgICAgIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAgMHB4KTsgfVxuICAgICAgICAgICAgICA2NSUgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTVweCk7IH1cbiAgICAgICAgICAgICAgdG8gICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0wcHgpOyB9ICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN0b3J5dGVsbGVycyB7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuN3JlbTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbmltYXRlIC5sb2FkaW5nLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJHt0aGlzLnByb3BzLmNvbW1vbi53aW5kb3dIZWlnaHQgKyAxMDB9cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvYWRpbmctd3JhcHBlciB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb2FkaW5nLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBjdWJpYy1iZXppZXIoMC43NywgMCwgMC4xNzUsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJsYWNrLWJne1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb2FkaW5nLXdyYXBwZXIgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xuICAgICAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSA1NnB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50b3Atc2VjdGlvbi13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50b3AtY29udGVudCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVsbG8ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZjIwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZyZW07XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjAuODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mdWxsLXNlcnZpY2Uge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDE0MDQyOztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDdyZW07XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIHRvcDogM3JlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXM7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS4ycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbmltYXRlIC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDMuNXJlbTtcbiAgICAgICAgICAgICAgICByaWdodDogMy41cmVtO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdCBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIxMjUyOTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0IGE6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC51bmRlcmxpbmUge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAuMXJlbTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogLTFyZW07XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzg1LCAwLjEzNSwgMC4xNSwgMC44Nik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdDpob3ZlciAudW5kZXJsaW5lLFxuICAgICAgICAgICAgLnVuZGVybGluZS5leHBhbmQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJyb3dzZXtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTotMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XG4gICAgICAgICAgICAgIC50ZXh0e1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaGVsbG97XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjE2cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5mdWxsLXNlcnZpY2V7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnN0b3J5dGVsbGVyc3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MS4xcmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYm90dG9tLXRleHR7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogN3JlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucG9ydGZvbGlvLWl0ZW1ze1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDowO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wb3J0Zm9saW8taXRlbXMgLnJvdyAuZXZlbntcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1pYS1ieS10YW5pc2hxe1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6LTVyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlcnZpY2UtbGlzdHMge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VydmljZS1oZWFkaW5ne1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlLWl0ZW1ze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0Om5vbmU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNraWxsc3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VydmljZS1pbWFnZSB7XG4gICAgICAgICAgICAgICAgLy8gcmlnaHQ6IC0xMCU7XG4gICAgICAgICAgICAgICAgLy8gdG9wOmF1dG87XG4gICAgICAgICAgICAgICAgLy8gYm90dG9tOiAtMSU7XG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IDU3JTtcbiAgICAgICAgICAgICAgICAvLyB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VydmljZXN7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206OC44cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC53aGl0ZS1mYWRle1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjNyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmZ1bGwtc2VydmljZXtcbiAgICAgICAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc3Rvcnl0ZWxsZXJzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wb3J0Zm9saW97XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206NHJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbG9yZS1tb3Jle1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NHJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbG9yZS1hcnJvd3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxcmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5icm93c2V7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTotMnJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoeyBjb21tb24gfSkge1xuICByZXR1cm4ge1xuICAgIGNvbW1vbixcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7b3Blbk1lbnUsYWRkQ2xhc3NUb0N1cnNvcixyZW1vdmVDbGFzc0Zyb21DdXJzb3J9KShIb21lKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=