webpackHotUpdate("static/development/pages/about-us.js",{

/***/ "./components/aboutUs/index.js":
/*!*************************************!*\
  !*** ./components/aboutUs/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _requestDemo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../requestDemo */ "./components/requestDemo/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
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





var AboutUs =
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

      axios__WEBPACK_IMPORTED_MODULE_2___default()('http://54.234.86.247:3000/api/products').then(function (res) {
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

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "company-profile"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "first-section",
        style: {
          backgroundImage: "url('/static/images/white_horse_stock_4_by_phoenixs_stock.png')"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fourth-row text-area new"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "PROFILE"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "COMPANY PROFILE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Pegasus Therapy Laser is part of the", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " veterinary division of LiteCure, LLC.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Combining physics, laser science, and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "engineering, LiteCure, LLC is a leading", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " medical device manufacturing company ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "bringing advanced laser technology and", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " innovative solutions to the health care", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " industry."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-8 "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " learnmore-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Located in Newark, Delaware, LiteCure provides expertise in design, manufacturing, production and support. LiteCure provides highly reliable products and the resources and tools to successfully incorporate the technology and products into any practice.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "LiteCure is an FDA-registered manufacturer providing FDA cleared products for a variety of medical applications. Each product has been designed and manufactured under stringent quality control systems that are certified to meet ISO-9001 and ISO-13485 standards for medical devices.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "With over 12 years of state-of-the-art laser development and manufacturing expertise, LiteCure ensures its customers the best in technology and design. LiteCure employs a highly experienced management team of research and development engineers that together represent over 100 years of experience in the field of laser development and systems"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "BENEFITS OF LASER THERAPY"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "CONTACT US ")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "about"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "ABOUT US"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "yellow-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row view-area"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-margin"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/img2.png",
        className: "img-pegasus"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "view-text1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "EMPOWER DELIVERY SYSTEM (EDS)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "VIEW PRODUCT")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-margin"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/ptc-400px.png"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "view-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Pegasus Therapy LASER (PTL)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "VIEW PRODUCT")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4 pl-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-margin"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/34.png"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "view-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Pegasus Therapy LASER (PTL)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "VIEW PRODUCT")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "prodct"
      }, "PRODUCTS")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_requestDemo__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return AboutUs;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AboutUs);

/***/ })

})
//# sourceMappingURL=about-us.js.e3d35397c79600c80289.hot-update.js.map