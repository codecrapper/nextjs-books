webpackHotUpdate("static\\development\\pages\\BookPage.js",{

/***/ "./pages/BookPage.js":
/*!***************************!*\
  !*** ./pages/BookPage.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Jumbotron__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Jumbotron */ "./components/Jumbotron.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");



var _jsxFileName = "C:\\Users\\Geon\\Desktop\\nextcrap\\next-redux-thunk\\pages\\BookPage.js";







var BookPage = function BookPage(_ref) {
  var dispatch = _ref.dispatch,
      loading = _ref.loading,
      booksData = _ref.booksData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      test = _useState2[0],
      setTest = _useState2[1];

  var loremFiller = "God gave you this gift of imagination. Use it. The least little bit can do so much. This painting comes right out of your heart.";
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchBooks();
    testRedux();
  }, []);

  var fetchBooks =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('https://www.googleapis.com/books/v1/volumes?q=python');

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              data = _context.sent;
              setTest(data.items);
              console.log(data.items);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchBooks() {
      return _ref2.apply(this, arguments);
    };
  }();

  var testRedux = function testRedux() {
    dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_5__["fetchBooksData"])());
  };

  var renderBooks = function renderBooks() {
    if (test.length) {
      return test.map(function (book) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "row",
          key: book.id,
          style: {
            paddingBottom: "50px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "col-sm-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
          src: book.volumeInfo.imageLinks.thumbnail,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, book.volumeInfo.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
          className: "font-italic",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, "By ", book.volumeInfo.authors[0]), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, book.volumeInfo.description ? "".concat(book.volumeInfo.description.substring(0, 200), "...") : loremFiller), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
          href: book.volumeInfo.infoLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, "Go to the Amazon page to read more & make me money."))), console.log(booksData[0]));
      });
    }

    return null;
  };

  var renderBooksTest = function renderBooksTest() {
    if (booksData.length > 0) {
      return booksData.map(function (book) {
        return (// <div className="row" key={book.id} style={{paddingBottom: "50px"}}>
          //     <div className="col-sm-3">
          //         <img src={book.volumeInfo.imageLinks.thumbnail}/>
          //     </div>
          //     <div className="col-sm-9">
          //         <h4>{book.volumeInfo.title}</h4>
          //         <p className="font-italic">By {book.volumeInfo.authors[0]}</p>
          //         <p>{book.volumeInfo.description ? `${book.volumeInfo.description.substring(0, 200)}...` : loremFiller}</p>
          //         <span><a href={book.volumeInfo.infoLink}>Go to the Amazon page to read more &amp; make me money.</a></span>
          //     </div>
          // </div>
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
            key: book.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          }, book.title), console.log(book.title))
        );
      });
    }

    return null;
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    style: {
      paddingTop: "2rem",
      paddingBottom: "2rem"
    },
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Some Python Books!"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Jumbotron__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), renderBooks(), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "justify-content-end btn btn-warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Back")), renderBooksTest());
};

var mapStateToProps = function mapStateToProps(state) {
  var loading = state.loading,
      booksData = state.booksData;
  return {
    loading: loading,
    booksData: booksData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(BookPage));

/***/ })

})
//# sourceMappingURL=BookPage.js.76baea4fcf7426c13dc9.hot-update.js.map