webpackHotUpdate("static/development/pages/pegasus.js",{

/***/ "./components/home/index.js":
/*!**********************************!*\
  !*** ./components/home/index.js ***!
  \**********************************/
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





var Home =
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
      pages: [],
      products: []
    });

    return _this;
  }

  _createClass(Home, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://54.234.86.247:3000/api/pages').then(function (res) {
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
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://54.234.86.247:3000/api/products').then(function (res) {
        var temp = [];
        res.data.products.map(function (val) {
          temp.push(val);
        });

        _this2.setState({
          products: temp
        });
      }).catch(function (err) {
        throw err;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var product;

      if (this.state.products) {
        product = this.state.products.map(function (value, index) {
          if (index === 0) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
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
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Specifications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, Object.keys(value.spec.Name).map(function (data) {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, value.spec.Name[data], ":")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, value.spec.Detail[data]));
            })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "col-sm-8 mn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              src: value.featuredImage.url,
              className: "image34"
            })))));
          }
        });
      }

      var dynamic;

      if (this.state.pages) {
        dynamic = this.state.pages.map(function (value) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
            className: "section-one",
            key: value.id,
            style: {
              background: "linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url(".concat(value.featuredImage && value.featuredImage.url, ")"),
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "third-row"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "container custom-container"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "row flex"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "header-text"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, value.headerImageLable)))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "small-upper-line flex"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "line"
          }, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "fourth-row"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "custom-container container"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "row flex"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "flex-column learnmore-header learn-home"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            dangerouslySetInnerHTML: {
              __html: value.leadText
            }
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, "LEARN MORE"))))));
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section-one",
        style: {
          background: "linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url('/static/images/buffalo.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "third-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\"No comparison,", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "No compromise.\"")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "small-upper-line flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "line"
      }, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fourth-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-container container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex-column learnmore-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "See why the world's toughest competitors have made Pegasus a part of their team."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "LEARN MORE")))))), dynamic, product, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section-three"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "myCarousel",
        className: "carousel slide",
        "data-ride": "2000"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
        className: "carousel-indicators carouselinicator"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        "data-target": "#myCarousel",
        "data-slide-to": "0",
        className: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        "data-target": "#myCarousel",
        "data-slide-to": "1",
        className: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        "data-target": "#myCarousel",
        "data-slide-to": "2",
        className: "active"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carousel-inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-three-overlay"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-container product-text container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex big-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "STORIES")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fourth-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-container container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex-column learnmore-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\"We all feel a lot better with Pegasus laser therapy. It means a huge difference in quality of life for our horses,particularly as they grow older.\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "- Joanie Matus")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-three-overlay"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-container product-text container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex big-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "STORIES")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fourth-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-container container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex-column learnmore-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\"We all feel a lot better with Pegasus laser therapy. It means a huge difference in quality of life for our horses, particularly as they grow older.\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "- Joanie Matus")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item active"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-three-overlay"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-container product-text container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex big-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "STORIES")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fourth-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-container container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex-column learnmore-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\"We all feel a lot better with Pegasus laser therapy. It means a huge difference in quality of life for our horses, particularly as they grow older.\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "- Joanie Matus"))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_requestDemo__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./components/product/index.js":
/*!*************************************!*\
  !*** ./components/product/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
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
      products: []
    });

    return _this;
  }

  _createClass(Product, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var slug = this.props.router.query.id;
      console.log("slug", slug);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://54.234.86.247:3000/api/products').then(function (res) {
        var temp = [];
        res.data.products.map(function (val) {
          temp.push(val);
        });

        _this2.setState({
          products: temp
        });
      }).catch(function (err) {
        throw err;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var dynamic;

      if (this.state.products) {
        dynamic = this.state.products.map(function (value, index) {
          if (index % 2 === 0) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
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
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Specifications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, Object.keys(value.spec.Name).map(function (data) {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, value.spec.Name[data], ":")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, value.spec.Detail[data]));
            })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "col-sm-8 mn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              src: value.featuredImage.url,
              className: "image34"
            })))));
          } else {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
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
              src: value.featuredImage.url,
              className: "image34"
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "col-sm-6 ms"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: value.shortDescription
              }
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Specifications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, Object.keys(value.spec.Name).map(function (data) {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, value.spec.Name[data], ":")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, value.spec.Detail[data]));
            })))))));
          }
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section-one bg-color"
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
      }, "EMPOWER ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "DS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "DELIVERY SYSTEM"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header-image"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/2018-09-12.png",
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Empower DS provides the versatility you need to treat your toughest cases. Four application-", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "specific treatment heads, the patented laser-contact ball and the toughest fiber available make ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Pegasus therapy lasers clinically practical and ruggedly durable."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "LEARN MORE")))))), dynamic, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_requestDemo__WEBPACK_IMPORTED_MODULE_2__["default"], null));
    }
  }]);

  return Product;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ })

})
//# sourceMappingURL=pegasus.js.e173e53604892a5e5fe2.hot-update.js.map