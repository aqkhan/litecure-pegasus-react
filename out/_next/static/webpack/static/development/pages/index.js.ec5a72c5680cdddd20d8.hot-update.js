webpackHotUpdate("static/development/pages/index.js",{

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
      pages: null,
      products: null,
      storyOne: "active",
      storyTwo: "",
      storyThree: ""
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
        _this2.setState({
          products: res.data.products
        });
      }).catch(function (err) {
        throw err;
      });
    }
  }, {
    key: "test",
    value: function test(type) {
      switch (type) {
        case 'one':
          this.setState({
            storyOne: "true",
            storyTwo: "",
            storyThree: ""
          });
          return;

        case 'two':
          this.setState({
            storyOne: "",
            storyTwo: "true",
            storyThree: ""
          });
          return;

        case 'three':
          this.setState({
            storyOne: "",
            storyTwo: "",
            storyThree: "true"
          });
          return;

        default:
          return;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var product;

      if (this.state.products) {
        product = this.state.products.map(function (value, index) {
          if (index === 0) {
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
          }
        });
      }

      var pages;

      if (this.state.pages) {
        pages = this.state.pages.map(function (value) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
            className: "new-home-cards"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
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
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: value.leadText
            }
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, "LEARN MORE")))))));
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "new-home-cards"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        key: "Home-Container",
        className: "section-one"
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
      }, "LEARN MORE"))))))), pages, product, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "new-stories"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section-three",
        key: "Home-Slide"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "myCarousel",
        className: "carousel slide",
        "data-ride": "2000"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
        className: "carousel-indicators carouselinicator"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        "data-target": "#myCarousel",
        "data-slide-to": "0",
        onClick: function onClick() {
          return _this3.test("one");
        },
        className: this.state.storyOne
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        "data-target": "#myCarousel",
        "data-slide-to": "1",
        onClick: function onClick() {
          return _this3.test("two");
        },
        className: this.state.storyTwo
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        "data-target": "#myCarousel",
        "data-slide-to": "2",
        onClick: function onClick() {
          return _this3.test("three");
        },
        className: this.state.storyThree
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carousel-inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item ".concat(this.state.storyOne)
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\"We all feel a lot better with Pegasus laser therapy. It means a huge difference in quality of life for our horses,particularly as they grow older.\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "- Joanie Matus 1")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item ".concat(this.state.storyTwo)
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\"We all feel a lot better with Pegasus laser therapy. It means a huge difference in quality of life for our horses, particularly as they grow older.\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "- Joanie Matus 2")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item ".concat(this.state.storyThree)
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\"We all feel a lot better with Pegasus laser therapy. It means a huge difference in quality of life for our horses, particularly as they grow older.\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "- Joanie Matus 3")))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_requestDemo__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.ec5a72c5680cdddd20d8.hot-update.js.map