webpackHotUpdate("static\\development\\pages\\BookPage.js",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Geon\\Desktop\\nextcrap\\next-redux-thunk\\components\\Footer.js";


var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-center text-italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "If you click on some of these links and end up purchasing something, I ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-underline text-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "WILL NOT"), " receive a small commission."));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/BookPage.js":
/*!***************************!*\
  !*** ./pages/BookPage.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Jumbotron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Jumbotron */ "./components/Jumbotron.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "C:\\Users\\Geon\\Desktop\\nextcrap\\next-redux-thunk\\pages\\BookPage.js";








var BookPage = function BookPage(_ref) {
  var dispatch = _ref.dispatch,
      loading = _ref.loading,
      booksData = _ref.booksData;
  // For when book has no description property from the API
  var loremFiller = "God gave you this gift of imagination. Use it. The least little bit can do so much. This painting comes right out of your heart.";
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_2__["fetchBooksData"])());
  }, []); // const testRedux = () => {
  //     dispatch(fetchBooksData())
  // }

  var renderBooksTest = function renderBooksTest() {
    if (!loading) {
      return booksData.map(function (book) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row",
          key: book.id,
          style: {
            paddingBottom: "50px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-sm-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: book.volumeInfo.imageLinks.thumbnail,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, book.volumeInfo.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "font-italic",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, "By ", book.volumeInfo.authors[0]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, book.volumeInfo.description ? "".concat(book.volumeInfo.description.substring(0, 200), "...") : loremFiller), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: book.volumeInfo.infoLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, "Go to the Amazon page to read more & make me money."))));
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "LOADING...");
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      paddingTop: "2rem",
      paddingBottom: "2rem"
    },
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Some Python Books!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Jumbotron__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), renderBooksTest(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "justify-content-end btn btn-warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  var loading = state.loading,
      booksData = state.booksData;
  return {
    loading: loading,
    booksData: booksData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(BookPage));

/***/ })

})
//# sourceMappingURL=BookPage.js.545bb7fe736a4410d21b.hot-update.js.map