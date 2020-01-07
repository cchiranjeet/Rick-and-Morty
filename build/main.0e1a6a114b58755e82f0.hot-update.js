exports.id = "main";
exports.modules = {

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/chiranjeet/Desktop/rickandmorty/src/App.js";

/* eslint-disable jsx-a11y/alt-text */





var App =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(App, _React$Component);

  function App() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App).call(this));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "getData", function () {
      var _this$state = _this.state,
          species = _this$state.species,
          gender = _this$state.gender,
          status = _this$state.status;
      var queryString = query_string__WEBPACK_IMPORTED_MODULE_9___default.a.stringify({
        species: species,
        gender: gender,
        status: status
      }, {
        arrayFormat: "comma"
      });
      console.log(queryString);
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://rickandmortyapi.com/api/character/?".concat(queryString)).then(function (response) {
        // handle success
        _this.setState({
          characterList: response.data.results
        });
      })["catch"](function (error) {
        // handle error
        console.log(error);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "addStatusFilter", function (e) {
      _this.setState({
        status: e.target.checked ? e.target.value : ""
      }, function () {
        _this.getData();
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "addSpeciesFilter", function (e) {
      _this.setState({
        species: e.target.checked ? e.target.value : ""
      }, function () {
        _this.getData();
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "addGenderFilter", function (e) {
      _this.setState({
        gender: e.target.checked ? e.target.value : ""
      }, function () {
        _this.getData();
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "removeFilter", function (key) {
      _this.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, key, ""), function () {
        _this.getData();
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "sortCharacterList", function (e) {
      _this.setState({
        characterList: Number(e.target.value) === 1 ? _this.state.characterList.sort(function (a, b) {
          return a.id - b.id;
        }) : _this.state.characterList.sort(function (a, b) {
          return b.id - a.id;
        })
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "openFilter", function () {
      _this.setState({
        filter: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "closeFilter", function () {
      _this.setState({
        filter: false
      });
    });

    _this.state = {
      characterList: [],
      status: "",
      species: "",
      gender: "",
      filter: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "rickandMorty-app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "leftCol ".concat(this.state.filter && "active"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "close-filter",
        onClick: this.closeFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, " Filters"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "filterBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, "Status"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        checked: this.state.status === "alive",
        value: "alive",
        onClick: this.addStatusFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }), "Alive"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        checked: this.state.status === "dead",
        value: "dead",
        onClick: this.addStatusFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }), "Dead"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        checked: this.state.status === "unknown",
        value: "unknown",
        onClick: this.addStatusFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }), "Unknown")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "filterBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, "Species"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        checked: this.state.species === "alien",
        type: "checkbox",
        value: "alien",
        onClick: this.addSpeciesFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }), " ", "Alien"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        checked: this.state.species === "human",
        type: "checkbox",
        value: "human",
        onClick: this.addSpeciesFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }), " ", "Human"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        checked: this.state.species === "mytholog",
        type: "checkbox",
        value: "mytholog",
        onClick: this.addSpeciesFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }), " ", "Mytholog"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        checked: this.state.species === "humanoid",
        type: "checkbox",
        value: "humanoid",
        onClick: this.addSpeciesFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }), " ", "Humanoid"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        checked: this.state.species === "unknown",
        type: "checkbox",
        value: "unknown",
        onClick: this.addSpeciesFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }), " ", "Other Species ...")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "filterBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, "Gender"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        checked: this.state.gender === "male",
        value: "male",
        onClick: this.addGenderFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }), "Male"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        checked: this.state.gender === "female",
        value: "female",
        onClick: this.addGenderFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }), "Female")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "rightCol",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "filterBtn",
        onClick: this.openFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "filter-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }), " Filter"), (this.state.status.length > 0 || this.state.species.length > 0 || this.state.gender.length > 0) && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, "Selected Filters"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "SelectedFilterBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, this.state.status && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "selectedFilter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, this.state.status, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        onClick: function onClick() {
          return _this2.removeFilter("status", _this2.state.status);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, "X")), this.state.species && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "selectedFilter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, this.state.species, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        onClick: function onClick() {
          return _this2.removeFilter("species", _this2.state.species);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, "X")), this.state.gender && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "selectedFilter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, this.state.gender, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        onClick: function onClick() {
          return _this2.removeFilter("gender", _this2.state.gender);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, "X"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "sort",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        onChange: this.sortCharacterList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }, "Ascending"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, "Descending"))), this.state.characterList.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "tile-outer",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "tile",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "imgbox",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: item.image,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          }
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "nameIdBox",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 271
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272
          }
        }, item.name, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274
          }
        }, "id: ", item.id, " - created 2 years ago")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "textbox",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 278
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 279
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "col1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          }
        }, "STATUS"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "col2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          }
        }, item.status, " ")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "col1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 284
          }
        }, "SPECIES"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "col2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 285
          }
        }, item.species, " ")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "col1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288
          }
        }, "GENDER"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "col2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 289
          }
        }, item.gender, " ")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 291
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "col1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292
          }
        }, "ORIGIN"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "col2 ellipsis1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          }
        }, item.origin.name, " ")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 295
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "col1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296
          }
        }, "LAST LOCATION"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "col2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297
          }
        }, item.location.name, " ")))));
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

};
//# sourceMappingURL=main.0e1a6a114b58755e82f0.hot-update.js.map