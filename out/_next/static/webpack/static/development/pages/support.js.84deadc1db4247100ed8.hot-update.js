webpackHotUpdate("static/development/pages/support.js",{

/***/ "./components/textDetail/index.js":
/*!****************************************!*\
  !*** ./components/textDetail/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _requestDemo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../requestDemo */ "./components/requestDemo/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TextDetail =
/*#__PURE__*/
function (_Component) {
  _inherits(TextDetail, _Component);

  function TextDetail() {
    _classCallCheck(this, TextDetail);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextDetail).apply(this, arguments));
  }

  _createClass(TextDetail, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "classification"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "first-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "LASER CLASSIFICATIONS")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fourth-row text-area"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-12 "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " learnmore-header ex-class"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lasers are divided into safety classifications in the US by the American National Standard Identification (ANSI) and globally by the International Electrotechnical Commission (IEC). The classifications below from the revised system (2002) apply to non-magnified laser devices.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Class I "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Safe under all conditions of normal use.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Class II"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Applies to only visible light lasers (400-700nm). These devices are considered eye-safe because the blink reflex will limit exposure to less than 0.25 seconds. Intentional suppression of the blink reflex could lead to eye injury. Most laser pointers are Class II devices.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "CLASS III"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Class III lasers in the visible spectrum have continuous wave (cw) emission of 5mw or less. These devices are considered safe if handled carefully with restricted beam viewing", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "CLASS IIIB"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "IIIB lasers are hazardous to the eye when viewed directly. For visible and infrared devices emission power is limited to 0.5W. Protective eyewear, key switch and safety interlock are required safety features.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "CLASS IV"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Class IV lasers include all lasers that emit power in excess of IIIB limitations. Eye protection is needed to limit both direct and diffuse reflected exposure. Key switch and safety interlocks are also required safety features. Most scientific, industrial, military and medical lasers fall into this category."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "TERMS IN LASER THERAPY"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "benefits"
      }, "BENEFITS OF LASER THERAPY"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "RESOURCES & LINKS "))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_requestDemo__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return TextDetail;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TextDetail);

/***/ })

})
//# sourceMappingURL=support.js.84deadc1db4247100ed8.hot-update.js.map