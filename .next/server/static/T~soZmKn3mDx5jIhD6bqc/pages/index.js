module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var RequestDemo =
/*#__PURE__*/
function (_Component) {
  _inherits(RequestDemo, _Component);

  function RequestDemo() {
    _classCallCheck(this, RequestDemo);

    return _possibleConstructorReturn(this, _getPrototypeOf(RequestDemo).apply(this, arguments));
  }

  _createClass(RequestDemo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "new-request-demo "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section-four"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-four-background"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex requestitbro"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " REQUEST ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " A DEMO"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "small-upper-line flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "line"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "taketheflowbro"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "See what makes Pegasus equine lasers different from anything else on the market today.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Schedule a demo at your offices, or come pay us a visit. Either way, we know you'll like what you see."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 flex-custom "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "form-top-text"
      }, "Set up your demonstration today!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        placeholder: "Your Name"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "email",
        placeholder: "Your E-mail"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        placeholder: "Work Phone"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        placeholder: "Business Name "
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        placeholder: "City and State"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "SEND")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "new-subscribe"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section-five"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-container container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Stay up to date. Subscribe to the Pegasus feed :)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "SUBSCRIBE"))))));
    }
  }]);

  return RequestDemo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (RequestDemo);

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(4);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/header/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var header_Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Pegasus"), external_react_default.a.createElement("meta", {
        "http-equiv": "x-ua-compatible",
        content: "ie=edge"
      }), external_react_default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      }), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/bootstrap.css"
      }), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/responsive.css"
      }), external_react_default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto:300",
        rel: "stylesheet"
      }), external_react_default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Open+Sans|Roboto:300",
        rel: "stylesheet"
      }), external_react_default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Open+Sans",
        rel: "stylesheet"
      }), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      }), external_react_default.a.createElement("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
      }), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
        integrity: "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO",
        crossOrigin: "anonymous"
      })), external_react_default.a.createElement("section", {
        className: "new-header"
      }, external_react_default.a.createElement("section", {
        className: "first-section"
      }, external_react_default.a.createElement("div", {
        className: "first-row"
      }, external_react_default.a.createElement("div", {
        className: "container custom-container"
      }, external_react_default.a.createElement("div", {
        className: "row HEADERS"
      }, external_react_default.a.createElement("div", {
        className: "col-sm-7 col-7 flex-end-row  "
      }, external_react_default.a.createElement("a", {
        href: "/"
      }, external_react_default.a.createElement("img", {
        src: "/static/images/logos1.png"
      }))), external_react_default.a.createElement("div", {
        className: "col-sm-5 col-5 flex-end-row "
      }, external_react_default.a.createElement("img", {
        src: "/static/images/magnifier.png",
        width: "18px",
        height: "18px"
      }))))), external_react_default.a.createElement("div", {
        className: "second-row"
      }, external_react_default.a.createElement("div", {
        className: "for-responsive-only"
      }, external_react_default.a.createElement("div", {
        className: "custom-container"
      }, external_react_default.a.createElement("div", {
        className: "menu-button  click"
      }, external_react_default.a.createElement("div", null), external_react_default.a.createElement("div", null), external_react_default.a.createElement("div", null)))), external_react_default.a.createElement("div", {
        className: "container showhide custom-container"
      }, external_react_default.a.createElement("div", {
        className: "row  justify-center align-center"
      }, external_react_default.a.createElement("ul", {
        className: "responsive-column navbar flex-row nav-color"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("span", null, external_react_default.a.createElement("a", {
        href: "/products"
      }, "PRODUCTS"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("span", null, "RESEARCH")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("span", null, external_react_default.a.createElement("a", {
        href: "/resources"
      }, "RESOURCES"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("span", null, external_react_default.a.createElement("a", {
        href: "/about-us"
      }, "ABOUT"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("span", null, external_react_default.a.createElement("a", {
        href: "/support"
      }, "SUPPORT"))))))))));
    }
  }]);

  return Header;
}(external_react_["Component"]);

/* harmony default export */ var header = (header_Header);
// CONCATENATED MODULE: ./components/footer/index.js
function footer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { footer_typeof = function _typeof(obj) { return typeof obj; }; } else { footer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return footer_typeof(obj); }

function footer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function footer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function footer_createClass(Constructor, protoProps, staticProps) { if (protoProps) footer_defineProperties(Constructor.prototype, protoProps); if (staticProps) footer_defineProperties(Constructor, staticProps); return Constructor; }

function footer_possibleConstructorReturn(self, call) { if (call && (footer_typeof(call) === "object" || typeof call === "function")) { return call; } return footer_assertThisInitialized(self); }

function footer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function footer_getPrototypeOf(o) { footer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return footer_getPrototypeOf(o); }

function footer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) footer_setPrototypeOf(subClass, superClass); }

function footer_setPrototypeOf(o, p) { footer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return footer_setPrototypeOf(o, p); }



var footer_Footer =
/*#__PURE__*/
function (_Component) {
  footer_inherits(Footer, _Component);

  function Footer() {
    footer_classCallCheck(this, Footer);

    return footer_possibleConstructorReturn(this, footer_getPrototypeOf(Footer).apply(this, arguments));
  }

  footer_createClass(Footer, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("footer", {
        className: "footer"
      }, external_react_default.a.createElement("div", {
        className: "container give-bottom"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: " responsive-flex row mt-5"
      }, external_react_default.a.createElement("div", {
        className: "col-sm-2 responsive-no-off all-width col-2 mt-5"
      }, external_react_default.a.createElement("div", {
        className: "redcolor"
      }, external_react_default.a.createElement("p", {
        className: "make-bold"
      }, external_react_default.a.createElement("strong", null, "Websites"))), external_react_default.a.createElement("div", {
        className: "footer-menu"
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "companion")), external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "Equine")), external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "Medical")), external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "Corporate")))), external_react_default.a.createElement("div", {
        className: "col-sm-2 col-2 all-width mt-5"
      }, external_react_default.a.createElement("div", {
        className: "redcolor"
      }, external_react_default.a.createElement("p", {
        className: "make-bold"
      }, external_react_default.a.createElement("strong", null, "LiteCure"))), external_react_default.a.createElement("div", {
        className: "footer-menu"
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "About US")), external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "Contact LiteCure")), external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "Contact Sales")), external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "Core Values")), external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "Products")), external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "Careers")))), external_react_default.a.createElement("div", {
        className: "col-md-3 all-width mt-5"
      }, external_react_default.a.createElement("div", {
        className: "redcolor"
      }, external_react_default.a.createElement("p", {
        className: "make-bold"
      }, external_react_default.a.createElement("strong", null, "Facebook"))), external_react_default.a.createElement("div", {
        className: "footer-menu"
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, external_react_default.a.createElement("span", null, "JULY 7, 2018"), external_react_default.a.createElement("br", null), "Rowdy Can Walk!", external_react_default.a.createElement("br", null), external_react_default.a.createElement("span", null, "WATCH VIDEO"))))), external_react_default.a.createElement("div", {
        className: "col-sm-2 col-2 social-icons mt-5"
      }, external_react_default.a.createElement("i", {
        className: "fa fa-linkedin-square redcolor socialicons socialicons1"
      }), external_react_default.a.createElement("i", {
        className: "fa fa-twitter redcolor socialicons socialicons1"
      }), external_react_default.a.createElement("i", {
        className: "fa fa-envelope redcolor  socialicons socialicons1"
      })))))), external_react_default.a.createElement("div", {
        className: "container give-bottom custom-container"
      }, external_react_default.a.createElement("div", {
        className: "row mt-6 pb-5  footer-menu-last"
      }, external_react_default.a.createElement("div", {
        className: "col-12 custom-flex-footer"
      }, external_react_default.a.createElement("div", {
        className: "give-amazing-margin"
      }, external_react_default.a.createElement("p", null, "Copyright  \xA9 2018 LiteCure, LLC. All rights reserved."), " "), external_react_default.a.createElement("div", {
        className: "flex another-left"
      }, external_react_default.a.createElement("p", null, "Legal"), external_react_default.a.createElement("p", null, "Terms of  Use"), external_react_default.a.createElement("p", null, "Privacy Policy"))))));
    }
  }]);

  return Footer;
}(external_react_["Component"]);

/* harmony default export */ var footer = (footer_Footer);
// CONCATENATED MODULE: ./components/layout/index.js
function layout_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { layout_typeof = function _typeof(obj) { return typeof obj; }; } else { layout_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return layout_typeof(obj); }

function layout_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function layout_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function layout_createClass(Constructor, protoProps, staticProps) { if (protoProps) layout_defineProperties(Constructor.prototype, protoProps); if (staticProps) layout_defineProperties(Constructor, staticProps); return Constructor; }

function layout_possibleConstructorReturn(self, call) { if (call && (layout_typeof(call) === "object" || typeof call === "function")) { return call; } return layout_assertThisInitialized(self); }

function layout_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function layout_getPrototypeOf(o) { layout_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return layout_getPrototypeOf(o); }

function layout_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) layout_setPrototypeOf(subClass, superClass); }

function layout_setPrototypeOf(o, p) { layout_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return layout_setPrototypeOf(o, p); }





var layout_index =
/*#__PURE__*/
function (_Component) {
  layout_inherits(index, _Component);

  function index() {
    layout_classCallCheck(this, index);

    return layout_possibleConstructorReturn(this, layout_getPrototypeOf(index).apply(this, arguments));
  }

  layout_createClass(index, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("section", null, external_react_default.a.createElement(header, null), this.props.children, external_react_default.a.createElement(footer, null));
    }
  }]);

  return index;
}(external_react_["Component"]);

/* harmony default export */ var layout = __webpack_exports__["a"] = (layout_index);

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./style.css
var style = __webpack_require__(5);

// EXTERNAL MODULE: ./components/requestDemo/index.js
var requestDemo = __webpack_require__(1);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/home/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var home_Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      pages: null,
      products: null,
      storyOne: "active",
      storyTwo: "",
      storyThree: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "test", function (type) {
      console.log(type);
      console.log(_this.state.storyOne);

      switch (type) {
        case 'one':
          _this.setState({
            storyOne: "active",
            storyTwo: "",
            storyThree: ""
          });

          console.log(_this.state.storyOne);
          return;

        case 'two':
          _this.setState({
            storyOne: "",
            storyTwo: "active",
            storyThree: ""
          });

          return;

        case 'three':
          _this.setState({
            storyOne: "",
            storyTwo: "",
            storyThree: "active"
          });

          return;

        default:
          return;
      }
    });

    return _this;
  }

  _createClass(Home, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      external_axios_default.a.get('http://54.234.86.247:3000/api/pages').then(function (res) {
        var temp = [];
        res.data.pages.map(function (val) {
          if (val.type === "homepage") {
            temp.push(val);
          }
        });

        _this2.setState({
          pages: temp
        });
      }).catch(function (err) {
        throw err;
      });
      external_axios_default.a.get('http://54.234.86.247:3000/api/products').then(function (res) {
        _this2.setState({
          products: res.data.products
        });
      }).catch(function (err) {
        throw err;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var product;

      if (this.state.products) {
        product = this.state.products.map(function (value, index) {
          if (index === 0) {
            return external_react_default.a.createElement("section", {
              className: "odd-product"
            }, external_react_default.a.createElement("section", {
              className: "second-section",
              key: value.id
            }, external_react_default.a.createElement("div", {
              className: "container custom-container"
            }, external_react_default.a.createElement("div", {
              className: "row flex"
            }, external_react_default.a.createElement("div", {
              className: "PTL-PEGASUS"
            }, external_react_default.a.createElement("span", null, value.title), external_react_default.a.createElement("p", null, value.leadText)))), external_react_default.a.createElement("div", {
              className: "container custom-container"
            }, external_react_default.a.createElement("div", {
              className: "row image-container"
            }, external_react_default.a.createElement("div", {
              className: "col-sm-4 ms"
            }, external_react_default.a.createElement("div", {
              className: "second"
            }, external_react_default.a.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: value.shortDescription
              }
            }), external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement("h3", null, "Specifications"), external_react_default.a.createElement("ul", null, Object.keys(value.spec.Name).map(function (data, indexx) {
              return external_react_default.a.createElement("li", {
                key: indexx
              }, external_react_default.a.createElement("span", null, external_react_default.a.createElement("b", null, value.spec.Name[data], ":")), external_react_default.a.createElement("span", null, " "), external_react_default.a.createElement("span", null, value.spec.Detail[data]));
            })))), external_react_default.a.createElement("div", {
              className: "col-sm-8 mn"
            }, external_react_default.a.createElement("img", {
              src: value.featuredImage && value.featuredImage.url,
              className: "image34"
            }))))));
          }
        });
      }

      var pages;

      if (this.state.pages) {
        pages = this.state.pages.map(function (value) {
          return external_react_default.a.createElement("section", {
            className: "new-home-cards"
          }, external_react_default.a.createElement("section", {
            className: "section-one",
            key: value.id,
            style: {
              background: "linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url(".concat(value.featuredImage && value.featuredImage.url, ")"),
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }
          }, external_react_default.a.createElement("div", {
            className: "third-row"
          }, external_react_default.a.createElement("div", {
            className: "container custom-container"
          }, external_react_default.a.createElement("div", {
            className: "row flex"
          }, external_react_default.a.createElement("div", {
            className: "header-text"
          }, external_react_default.a.createElement("p", null, external_react_default.a.createElement("br", null), external_react_default.a.createElement("span", null, value.headerImageLable)))))), external_react_default.a.createElement("div", {
            className: "small-upper-line flex"
          }, external_react_default.a.createElement("div", {
            className: "line"
          }, " ")), external_react_default.a.createElement("div", {
            className: "fourth-row"
          }, external_react_default.a.createElement("div", {
            className: "custom-container container"
          }, external_react_default.a.createElement("div", {
            className: "row flex"
          }, external_react_default.a.createElement("div", {
            className: "flex-column learnmore-header learn-home"
          }, external_react_default.a.createElement("p", null, external_react_default.a.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: value.leadText
            }
          })), external_react_default.a.createElement("a", {
            href: "#"
          }, "LEARN MORE")))))));
        });
      }

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("section", {
        className: "new-home-cards"
      }, external_react_default.a.createElement("section", {
        key: "Home-Container",
        className: "section-one"
      }, external_react_default.a.createElement("div", {
        className: "third-row"
      }, external_react_default.a.createElement("div", {
        className: "container custom-container"
      }, external_react_default.a.createElement("div", {
        className: "row flex"
      }, external_react_default.a.createElement("div", {
        className: "header-text"
      }, external_react_default.a.createElement("p", null, "\"No comparison,", external_react_default.a.createElement("br", null), external_react_default.a.createElement("span", null, "No compromise.\"")))))), external_react_default.a.createElement("div", {
        className: "small-upper-line flex"
      }, external_react_default.a.createElement("div", {
        className: "line"
      }, " ")), external_react_default.a.createElement("div", {
        className: "fourth-row"
      }, external_react_default.a.createElement("div", {
        className: "custom-container container"
      }, external_react_default.a.createElement("div", {
        className: "row flex"
      }, external_react_default.a.createElement("div", {
        className: "flex-column learnmore-header"
      }, external_react_default.a.createElement("p", null, "See why the world's toughest competitors have made Pegasus a part of their team."), external_react_default.a.createElement("a", {
        href: "#"
      }, "LEARN MORE"))))))), pages, product, external_react_default.a.createElement("section", {
        className: "new-stories"
      }, external_react_default.a.createElement("section", {
        className: "section-three",
        key: "Home-Slide"
      }, external_react_default.a.createElement("div", {
        id: "myCarousel",
        className: "carousel slide",
        "data-ride": "2000"
      }, external_react_default.a.createElement("ol", {
        className: "carousel-indicators carouselinicator"
      }, external_react_default.a.createElement("li", {
        "data-target": "#myCarousel",
        "data-slide-to": "0",
        onClick: function onClick() {
          return _this3.test("one");
        },
        className: this.state.storyOne
      }), external_react_default.a.createElement("li", {
        "data-target": "#myCarousel",
        "data-slide-to": "1",
        onClick: function onClick() {
          return _this3.test("two");
        },
        className: this.state.storyTwo
      }), external_react_default.a.createElement("li", {
        "data-target": "#myCarousel",
        "data-slide-to": "2",
        onClick: function onClick() {
          return _this3.test("three");
        },
        className: this.state.storyThree
      })), external_react_default.a.createElement("div", {
        className: "carousel-inner"
      }, external_react_default.a.createElement("div", {
        className: "item ".concat(this.state.storyOne)
      }, external_react_default.a.createElement("div", {
        className: "section-three-overlay"
      }), external_react_default.a.createElement("div", {
        className: "custom-container product-text container"
      }, external_react_default.a.createElement("div", {
        className: "row flex big-text"
      }, external_react_default.a.createElement("div", {
        className: "col-12"
      }, external_react_default.a.createElement("p", null, "STORIES")))), external_react_default.a.createElement("div", {
        className: "fourth-row"
      }, external_react_default.a.createElement("div", {
        className: "custom-container container"
      }, external_react_default.a.createElement("div", {
        className: "row flex"
      }, external_react_default.a.createElement("div", {
        className: "flex-column learnmore-header"
      }, external_react_default.a.createElement("p", null, "\"We all feel a lot better with Pegasus laser therapy. It means a huge difference in quality of life for our horses,particularly as they grow older.\""), external_react_default.a.createElement("span", null, "- Joanie Matus 1")))))), external_react_default.a.createElement("div", {
        className: "item ".concat(this.state.storyTwo)
      }, external_react_default.a.createElement("div", {
        className: "section-three-overlay"
      }), external_react_default.a.createElement("div", {
        className: "custom-container product-text container"
      }, external_react_default.a.createElement("div", {
        className: "row flex big-text"
      }, external_react_default.a.createElement("div", {
        className: "col-12"
      }, external_react_default.a.createElement("p", null, "STORIES")))), external_react_default.a.createElement("div", {
        className: "fourth-row"
      }, external_react_default.a.createElement("div", {
        className: "custom-container container"
      }, external_react_default.a.createElement("div", {
        className: "row flex"
      }, external_react_default.a.createElement("div", {
        className: "flex-column learnmore-header"
      }, external_react_default.a.createElement("p", null, "\"We all feel a lot better with Pegasus laser therapy. It means a huge difference in quality of life for our horses, particularly as they grow older.\""), external_react_default.a.createElement("span", null, "- Joanie Matus 2")))))), external_react_default.a.createElement("div", {
        className: "item ".concat(this.state.storyThree)
      }, external_react_default.a.createElement("div", {
        className: "section-three-overlay"
      }), external_react_default.a.createElement("div", {
        className: "custom-container product-text container"
      }, external_react_default.a.createElement("div", {
        className: "row flex big-text"
      }, external_react_default.a.createElement("div", {
        className: "col-12"
      }, external_react_default.a.createElement("p", null, "STORIES")))), external_react_default.a.createElement("div", {
        className: "fourth-row"
      }, external_react_default.a.createElement("div", {
        className: "custom-container container"
      }, external_react_default.a.createElement("div", {
        className: "row flex"
      }, external_react_default.a.createElement("div", {
        className: "flex-column learnmore-header"
      }, external_react_default.a.createElement("p", null, "\"We all feel a lot better with Pegasus laser therapy. It means a huge difference in quality of life for our horses, particularly as they grow older.\""), external_react_default.a.createElement("span", null, "- Joanie Matus 3")))))))))), external_react_default.a.createElement(requestDemo["a" /* default */], null));
    }
  }]);

  return Home;
}(external_react_["Component"]);

/* harmony default export */ var home = (home_Home);
// EXTERNAL MODULE: ./components/layout/index.js + 2 modules
var layout = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.js
function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }






var pages_index =
/*#__PURE__*/
function (_Component) {
  pages_inherits(index, _Component);

  function index() {
    pages_classCallCheck(this, index);

    return pages_possibleConstructorReturn(this, pages_getPrototypeOf(index).apply(this, arguments));
  }

  pages_createClass(index, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(layout["a" /* default */], null, external_react_default.a.createElement(home, null));
    }
  }]);

  return index;
}(external_react_["Component"]);

/* harmony default export */ var pages_0 = __webpack_exports__["default"] = (pages_index);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {



/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ })

/******/ });