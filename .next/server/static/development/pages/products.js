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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer/index.js":
/*!************************************!*\
  !*** ./components/footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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



var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        className: "footer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container give-bottom"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " responsive-flex row mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-2 responsive-no-off all-width col-2 mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "redcolor"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "make-bold"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Websites"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer-menu"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "companion")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Equine")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Medical")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Corporate")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-2 col-2 all-width mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "redcolor"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "make-bold"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "LiteCure"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer-menu"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "About US")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Contact LiteCure")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Contact Sales")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Core Values")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Products")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Careers")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3 all-width mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "redcolor"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "make-bold"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Facebook"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer-menu"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "JULY 7, 2018"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Rowdy Can Walk!", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "WATCH VIDEO"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-2 col-2 social-icons mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-linkedin-square redcolor socialicons socialicons1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-twitter redcolor socialicons socialicons1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-envelope redcolor  socialicons socialicons1"
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container give-bottom custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row mt-6 pb-5  footer-menu-last"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 custom-flex-footer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "give-amazing-margin"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Copyright  \xA9 2018 LiteCure, LLC. All rights reserved."), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex another-left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Legal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Terms of  Use"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Privacy Policy"))))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/header/index.js":
/*!************************************!*\
  !*** ./components/header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Header =
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Pegasus"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        "http-equiv": "x-ua-compatible",
        content: "ie=edge"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/bootstrap.css"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/responsive.css"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto:300",
        rel: "stylesheet"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Open+Sans|Roboto:300",
        rel: "stylesheet"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Open+Sans",
        rel: "stylesheet"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
        integrity: "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO",
        crossOrigin: "anonymous"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "new-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "first-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "first-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row HEADERS"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-7 col-7 flex-end-row  "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/logos1.png"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-5 col-5 flex-end-row "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/magnifier.png",
        width: "18px",
        height: "18px"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "second-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "for-responsive-only"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menu-button  click"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container showhide custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row  justify-center align-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "responsive-column navbar flex-row nav-color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/products"
      }, "PRODUCTS"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "RESEARCH")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/resources"
      }, "RESOURCES"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/about-us"
      }, "ABOUT"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/support"
      }, "SUPPORT"))))))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layout/index.js":
/*!************************************!*\
  !*** ./components/layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header */ "./components/header/index.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer */ "./components/footer/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var index =
/*#__PURE__*/
function (_Component) {
  _inherits(index, _Component);

  function index() {
    _classCallCheck(this, index);

    return _possibleConstructorReturn(this, _getPrototypeOf(index).apply(this, arguments));
  }

  _createClass(index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_1__["default"], null), this.props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./components/product/index.js":
/*!*************************************!*\
  !*** ./components/product/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _requestDemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requestDemo */ "./components/requestDemo/index.js");
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





var Product =
/*#__PURE__*/
function (_Component) {
  _inherits(Product, _Component);

  function Product() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Product);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Product)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      products: null,
      err: null
    });

    return _this;
  }

  _createClass(Product, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://54.234.86.247:3000/api/products').then(function (res) {
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
      var dynamic = null;

      if (this.state.products) {
        dynamic = this.state.products.map(function (value, index) {
          console.log("index", index);

          if (index === 0) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
              className: "first-product"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
              className: "first-section",
              key: value.id
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "third-row"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "container custom-container"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "row flex"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "header-text text-extra"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "Product-text"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, value.leadText))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "container custom-container"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "row flex"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "header-image"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              src: value.featuredImage && value.featuredImage.url,
              className: "head-img"
            }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "small-upper-line flex"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "line line-ex"
            }, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "fourth-row"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "custom-container container"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "row flex"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "flex-column learnmore-header learn-ex"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: value.shortDescription
              }
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/products/" + value.slug
            }, "LEARN MORE")))))));
          } else if (index % 2 === 0) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
              className: "odd-product"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
              className: "second-section",
              key: value.id
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "container custom-container"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "row flex"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "PTL-PEGASUS"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, value.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, value.leadText)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "container custom-container"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "row image-container"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "col-sm-4 ms"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "second"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: value.shortDescription
              }
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Specifications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, Object.keys(value.spec.Name).map(function (data, indexx) {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
                key: indexx
              }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, value.spec.Name[data], ":")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, value.spec.Detail[data]));
            })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "col-sm-8 mn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              src: value.featuredImage && value.featuredImage.url,
              className: "image34"
            }))))));
          } else {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
              className: "even-product"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
              className: "third-section",
              key: value.id
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "container custom-container"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "row flex"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "PTC-PEGASUS"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, value.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, value.leadText)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "container custom-container"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "row image-container"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "col-sm-6 mn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              src: value.featuredImage && value.featuredImage.url,
              className: "image34"
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "col-sm-6 ms"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: value.shortDescription
              }
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Specifications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, Object.keys(value.spec.Name).map(function (data, indexx) {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
                key: indexx
              }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, value.spec.Name[data], ":")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, value.spec.Detail[data]));
            }))))))));
          }
        });
      }

      return this.state.products ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, dynamic, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_requestDemo__WEBPACK_IMPORTED_MODULE_2__["default"], null)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "first-product"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "first-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "third-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header-text text-extra"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "Product-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Loading ... "))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header-image"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "small-upper-line flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "line line-ex"
      }, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fourth-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-container container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex-column learnmore-header learn-ex"
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_requestDemo__WEBPACK_IMPORTED_MODULE_2__["default"], null));
    }
  }]);

  return Product;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./components/product/productDetail/index.js":
/*!***************************************************!*\
  !*** ./components/product/productDetail/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scrollable-anchor */ "react-scrollable-anchor");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _requestDemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../requestDemo */ "./components/requestDemo/index.js");
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






var ProductDetail =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductDetail, _Component);

  function ProductDetail() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ProductDetail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProductDetail)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      product: null,
      err: null,
      slug: null,
      products: null
    });

    return _this;
  }

  _createClass(ProductDetail, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var slug = this.props.slug;
      axios__WEBPACK_IMPORTED_MODULE_1___default()('http://54.234.86.247:3000/api/products/' + slug).then(function (res) {
        _this2.setState({
          product: res.data.product,
          slug: slug
        });
      }).catch(function (err) {
        _this2.setState({
          err: err
        });
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default()('http://54.234.86.247:3000/api/products').then(function (res) {
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
      var _this$state = this.state,
          product = _this$state.product,
          err = _this$state.err,
          slug = _this$state.slug,
          products = _this$state.products;
      var detailProduct = null;
      var allProducts = null;

      if (product) {
        {
          if (product.slug === slug) {
            detailProduct = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: product.id
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "third-row"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "container custom-container"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "row flex"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "header-text"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, product.leadText))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "container custom-container"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "row flex"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "header-image"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              src: product.featuredImage && product.featuredImage.url,
              height: "280",
              width: "280",
              className: "head-img1"
            }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "fourth-row text-area"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "overlay-section"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: " container"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "row "
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "col-sm-4 p-0"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "SPECIFICATIONS"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "SPECIFICATIONS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, Object.keys(product.spec.Name).map(function (data, index) {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
                key: index
              }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, product.spec.Name[data], ":")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, product.spec.Detail[data]));
            }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "col-sm-8 "
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: " learnmore-header"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: product.shortDescription
              }
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "button"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "#requestDemo"
            }, "REQUEST A DEMO"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "#"
            }, "TALK TO A REP ")))))))));
          }
        }
      }

      if (products) {
        allProducts = products.map(function (value) {
          if (value.slug === slug) {} else {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: value.id
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "col-sm-4"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "image-margin"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              src: value.featuredImage && value.featuredImage.url,
              height: "320",
              width: "320"
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "view-text"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, value.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/products/" + value.slug
            }, "VIEW PRODUCT"))))));
          }
        });
      }

      return err ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "product-det"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "first-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "third-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Product Not found"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header-image",
        style: {
          background: 'black'
        }
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_requestDemo__WEBPACK_IMPORTED_MODULE_3__["default"], null)) : product ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "product-det"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "first-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, detailProduct), "allProducts & ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "yellow-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row view-area"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-2"
      }), allProducts, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-2"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "prodct"
      }, "PRODUCTS")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "cards-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "Second-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row images-flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3 p-0 "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-overlay"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/doctorwithhourse.jpg",
        className: "image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "08.12.19"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "FEATURED ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CONTENT ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "TITLE HERE"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/straight-egyptian-arabians-horse.jpg",
        className: "image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "08.12.19"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "FEATURED ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CONTENT ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "TITLE HERE"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/whitehourse.jpg",
        className: "image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "08.12.19"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "FEATURED ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CONTENT ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "TITLE HERE"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/695128.jpg",
        className: "image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "08.12.19"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "FEATURED ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CONTENT ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "TITLE HERE"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/straight-egyptian-arabians-horse.jpg",
        className: "image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "08.12.19"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "FEATURED ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CONTENT ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "TITLE HERE"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/345446.jpg",
        className: "image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "08.12.19"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "FEATURED ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CONTENT ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "TITLE HERE"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/British-Horse-Racing-Frankel-Jockey-Wallpaper.jpg",
        className: "image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "08.12.19"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "FEATURED ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CONTENT ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "TITLE HERE"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-overlay"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/hourse.jpg",
        className: "image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "08.12.19"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "FEATURED ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CONTENT ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "TITLE HERE"))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_2___default.a, {
        id: 'requestDemo'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_requestDemo__WEBPACK_IMPORTED_MODULE_3__["default"], null))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "product-det"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "first-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "third-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Loading ..."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header-image",
        style: {
          background: 'black'
        }
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_requestDemo__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    }
  }]);

  return ProductDetail;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProductDetail);

/***/ }),

/***/ "./components/requestDemo/index.js":
/*!*****************************************!*\
  !*** ./components/requestDemo/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/* harmony default export */ __webpack_exports__["default"] = (RequestDemo);

/***/ }),

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_product_productDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/product/productDetail */ "./components/product/productDetail/index.js");
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/product */ "./components/product/index.js");
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








var Products =
/*#__PURE__*/
function (_Component) {
  _inherits(Products, _Component);

  function Products() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Products);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Products)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      products: [],
      slug: null
    });

    return _this;
  }

  _createClass(Products, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var slug = this.props.router.query.id;
      this.setState({
        slug: slug
      });
    }
  }, {
    key: "render",
    value: function render() {
      var slug = this.state.slug;
      return slug ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_product_productDetail__WEBPACK_IMPORTED_MODULE_4__["default"], {
        slug: slug
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_product__WEBPACK_IMPORTED_MODULE_5__["default"], null));
    }
  }]);

  return Products;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Products));

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/products.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/products.js */"./pages/products.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-scrollable-anchor":
/*!******************************************!*\
  !*** external "react-scrollable-anchor" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollable-anchor");

/***/ })

/******/ });
//# sourceMappingURL=products.js.map