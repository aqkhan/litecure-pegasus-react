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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 5 */
/***/ (function(module, exports) {



/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
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

// CONCATENATED MODULE: ./components/aboutUs/index.js
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





var aboutUs_AboutUs =
/*#__PURE__*/
function (_Component) {
  _inherits(AboutUs, _Component);

  function AboutUs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AboutUs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AboutUs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      products: null
    });

    return _this;
  }

  _createClass(AboutUs, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      external_axios_default()('http://54.234.86.247:3000/api/products').then(function (res) {
        _this2.setState({
          products: res.data.products
        });
      }).catch(function (err) {
        _this2.setState({
          err: err
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var products = this.state.products;
      var allProducts = null;

      if (products) {
        allProducts = products.map(function (value) {
          return external_react_default.a.createElement("div", {
            key: value.id
          }, external_react_default.a.createElement("div", {
            className: "col-sm-4 p-0"
          }, external_react_default.a.createElement("div", {
            className: "image-margin"
          }, external_react_default.a.createElement("img", {
            src: value.featuredImage && value.featuredImage.url,
            height: "320",
            width: "320"
          }), external_react_default.a.createElement("div", {
            className: "view-text"
          }, external_react_default.a.createElement("h1", null, value.title), external_react_default.a.createElement("p", null, external_react_default.a.createElement("a", {
            href: "/products/" + value.slug
          }, "VIEW PRODUCT"))))));
        });
      }

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("section", {
        className: "company-profile"
      }, external_react_default.a.createElement("section", {
        className: "first-section",
        style: {
          backgroundImage: "url('/static/images/white_horse_stock_4_by_phoenixs_stock.png')"
        }
      }, external_react_default.a.createElement("div", {
        className: "fourth-row text-area new"
      }, external_react_default.a.createElement("div", {
        className: " container"
      }, external_react_default.a.createElement("div", {
        className: "row "
      }, external_react_default.a.createElement("div", {
        className: "col-sm-4 p-0"
      }, external_react_default.a.createElement("div", {
        className: "PROFILE"
      }, external_react_default.a.createElement("h1", null, "COMPANY PROFILE"), external_react_default.a.createElement("p", null, "Pegasus Therapy Laser is part of the", external_react_default.a.createElement("br", null), " veterinary division of LiteCure, LLC.", external_react_default.a.createElement("br", null), " Combining physics, laser science, and ", external_react_default.a.createElement("br", null), "engineering, LiteCure, LLC is a leading", external_react_default.a.createElement("br", null), " medical device manufacturing company ", external_react_default.a.createElement("br", null), "bringing advanced laser technology and", external_react_default.a.createElement("br", null), " innovative solutions to the health care", external_react_default.a.createElement("br", null), " industry."))), external_react_default.a.createElement("div", {
        className: "col-sm-8 "
      }, external_react_default.a.createElement("div", {
        className: " learnmore-header"
      }, external_react_default.a.createElement("p", null, "Located in Newark, Delaware, LiteCure provides expertise in design, manufacturing, production and support. LiteCure provides highly reliable products and the resources and tools to successfully incorporate the technology and products into any practice.", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), "LiteCure is an FDA-registered manufacturer providing FDA cleared products for a variety of medical applications. Each product has been designed and manufactured under stringent quality control systems that are certified to meet ISO-9001 and ISO-13485 standards for medical devices.", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), "With over 12 years of state-of-the-art laser development and manufacturing expertise, LiteCure ensures its customers the best in technology and design. LiteCure employs a highly experienced management team of research and development engineers that together represent over 100 years of experience in the field of laser development and systems"), external_react_default.a.createElement("div", {
        className: "button"
      }, external_react_default.a.createElement("a", {
        href: "#"
      }, "BENEFITS OF LASER THERAPY"), external_react_default.a.createElement("a", {
        href: "#"
      }, "CONTACT US ")))))), external_react_default.a.createElement("div", {
        className: "container custom-container"
      }, external_react_default.a.createElement("div", {
        className: "row flex"
      }, external_react_default.a.createElement("div", {
        className: "about"
      }, external_react_default.a.createElement("h1", null, "ABOUT US"))))), external_react_default.a.createElement("div", {
        className: "yellow-section"
      }, external_react_default.a.createElement("div", {
        className: "container custom-container"
      }, external_react_default.a.createElement("div", {
        className: "row view-area"
      }, allProducts)), external_react_default.a.createElement("div", {
        className: "container custom-container"
      }, external_react_default.a.createElement("div", {
        className: "row flex"
      }, external_react_default.a.createElement("h1", {
        className: "prodct"
      }, "PRODUCTS")))))), external_react_default.a.createElement(requestDemo["a" /* default */], null));
    }
  }]);

  return AboutUs;
}(external_react_["Component"]);

/* harmony default export */ var aboutUs = (aboutUs_AboutUs);
// EXTERNAL MODULE: ./components/layout/index.js + 2 modules
var layout = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/about-us.js
function about_us_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { about_us_typeof = function _typeof(obj) { return typeof obj; }; } else { about_us_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return about_us_typeof(obj); }

function about_us_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function about_us_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function about_us_createClass(Constructor, protoProps, staticProps) { if (protoProps) about_us_defineProperties(Constructor.prototype, protoProps); if (staticProps) about_us_defineProperties(Constructor, staticProps); return Constructor; }

function about_us_possibleConstructorReturn(self, call) { if (call && (about_us_typeof(call) === "object" || typeof call === "function")) { return call; } return about_us_assertThisInitialized(self); }

function about_us_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function about_us_getPrototypeOf(o) { about_us_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return about_us_getPrototypeOf(o); }

function about_us_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) about_us_setPrototypeOf(subClass, superClass); }

function about_us_setPrototypeOf(o, p) { about_us_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return about_us_setPrototypeOf(o, p); }






var about_us_index =
/*#__PURE__*/
function (_Component) {
  about_us_inherits(index, _Component);

  function index() {
    about_us_classCallCheck(this, index);

    return about_us_possibleConstructorReturn(this, about_us_getPrototypeOf(index).apply(this, arguments));
  }

  about_us_createClass(index, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(layout["a" /* default */], null, external_react_default.a.createElement(aboutUs, null));
    }
  }]);

  return index;
}(external_react_["Component"]);

/* harmony default export */ var about_us = __webpack_exports__["default"] = (about_us_index);

/***/ })
/******/ ]);