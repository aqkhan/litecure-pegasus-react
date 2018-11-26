webpackHotUpdate("static/development/pages/resources.js",{

/***/ "./components/mediaDetail/index.js":
/*!*****************************************!*\
  !*** ./components/mediaDetail/index.js ***!
  \*****************************************/
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





var MediaDetail =
/*#__PURE__*/
function (_Component) {
  _inherits(MediaDetail, _Component);

  function MediaDetail() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MediaDetail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MediaDetail)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      products: null
    });

    return _this;
  }

  _createClass(MediaDetail, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://54.234.86.247:3000/api/products').then(function (res) {
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

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("container", {
        className: "new-media-detail"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("container", {
        className: "first-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container image-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex year"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "quarter"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "26-YEAR OLD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "QUARTER HORSE GELDING"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/images-(3).png",
        className: "video-icon"
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "new-media-detail-containers"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "second-section hours-img"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fourth-row text-area"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "LASER-THREAT"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "We provide ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "solutions."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "When you have a full case load and are constantly on the move from barn to barn, you need a reliable partner who is focused on delivering innovations that provide you with both clinical and practice benefits. At Pegasus our mission is simple - to make animals better. Pegasus products are developed by equine practitioners, technicians, and industry-leading engineers to provide you with the most appropriate evidence-based technologies. Get back in action faster with Pegasus on your side.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Laser physicist Brian Pryor, PhD, founded Pegasus in 2006. Pegasus products are distributed worldwide and are manufactured in the United States. Pegasus\u2019s corporate headquarters are located in New Castle, Delaware. Carlsbad, California is home to Pegasus\u2019s Engineering, Research, and Development team headed by CTO, Luis De Taboada, MSEE. Internationally, Pegasus has two satellite offices located in the United Kingdom and in Shanghai."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-8 "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " learnmore-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Our core values are woven into the fabric of everything we do at Pegasus. From manufacturing and education to service and sales you will be treated as a member of the Pegasus Family.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ">> "), " \xA0We Tirelessly Solve Problems", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ">> "), " \xA0We are Fair and Honest", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ">> "), " \xA0We Provide Solutions", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ">> "), " \xA0We Innovate", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ">> "), " \xA0We are Nice", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ">> "), " \xA0We Care", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ">> "), " \xA0We Lead", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Pegasus-manufactured products are produced under stringent quality control systems and are certified to meet ISO-13485 standards for medical devices. Built on the foundation of quality Pegasus proudly provides you with products based on evidence, supported by education, and sustained through partnership."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "HOW TREATMENTS ARE GIVEN"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "cost-btn"
      }, "WHAT DOES IT COST? ")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "BENEFITS"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "BENEFITS")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "second-section hours-img"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fourth-row text-area"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-12 "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " learnmore-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "extra-p"
      }, "Pegasus products are based in evidence and provide superior outcomes. Protocols, techniques, and treatment recommendations are all developed based on a large body of scientific research to ensure you get the best clinical results - every time."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "BENEFITS"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "PROVEN")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "second-section hours-img"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fourth-row text-area"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-12 "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " learnmore-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "extra-p"
      }, "Pegasus provides clinical solutions for every equine patient. From dressage horses, jumpers, hunters, cutters, to family pets, Pegasus has a therapeutic solution for you."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "BENEFITS performance"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Performance")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "second-section hours-img"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fourth-row text-area"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-12 "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " learnmore-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "extra-p"
      }, "Our team of sales, clinical, and customer support resources are here to support you long-term. With Pegasus on your team, you can rest assured that you have the best products that will give you superior outcomes", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Pegasus actively collaborates with teaching institutions, clinicians, and scientists around the world to validate current technology applications and to discover new opportunities."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "BENEFITS performance"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Partnership"))))))), product, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_requestDemo__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return MediaDetail;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MediaDetail);

/***/ })

})
//# sourceMappingURL=resources.js.b854118be7d59f7c2998.hot-update.js.map