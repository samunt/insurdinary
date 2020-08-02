webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SpouseForm.js":
/*!**********************************!*\
  !*** ./components/SpouseForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpouseForm.module.css */ \"./components/SpouseForm.module.css\");\n/* harmony import */ var _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/FormContext */ \"./contexts/FormContext.js\");\n/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/FormControl */ \"./node_modules/react-bootstrap/esm/FormControl.js\");\n/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/InputGroup */ \"./node_modules/react-bootstrap/esm/InputGroup.js\");\n/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/ProgressBar */ \"./node_modules/react-bootstrap/esm/ProgressBar.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction SpouseForm() {\n  _s();\n\n  var _this = this;\n\n  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_7__[\"DispatchContext\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      hasSpouse = _useState[0],\n      updateHasSpouse = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  return __jsx(\"div\", null, __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: {\n      span: 6,\n      offset: 3\n    },\n    md: {\n      span: 6,\n      offset: 3\n    },\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    variant: \"success\",\n    now: 10\n  }))), __jsx(\"br\", null), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    onSubmit: function onSubmit(e) {\n      e.preventDefault();\n      console.log(e);\n      router.push('/children');\n    }\n  }, __jsx(\"br\", null), __jsx(\"h2\", {\n    className: _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n  }, \"Do you have a spouse or partner?\"), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 6,\n    md: {\n      span: 6\n    },\n    lg: {\n      span: 3,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"align-button\",\n    onClick: function onClick() {\n      updateHasSpouse({\n        hasSpouse: true\n      });\n      dispatch({\n        type: \"ADD_SPOUSE\",\n        spouse: true\n      });\n    },\n    style: {\n      width: '100%'\n    },\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"Yes\"), ' '), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 6,\n    md: {\n      span: 6\n    },\n    lg: {\n      span: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"align-button\",\n    onClick: function onClick(e) {\n      e.preventDefault();\n      updateHasSpouse({\n        hasSpouse: false\n      });\n      dispatch({\n        type: \"ADD_SPOUSE\",\n        spouse: false\n      });\n      router.push('/children');\n    },\n    style: {\n      width: '100%'\n    },\n    variant: \"outline-primary\",\n    type: \"submit\",\n    size: \"lg\"\n  }, \"No\"), ' ')))), hasSpouse === true ? __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 12,\n    md: 12,\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(\"br\", null), __jsx(\"br\", null), __jsx(\"h3\", {\n    className: _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n  }, \"How old is your spouse or partner?\"))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    onSubmit: function onSubmit(e) {\n      e.preventDefault(); // this.context.dispatch({type: \"SPOUSE_AGE\", spouseAge: this.state.spouseAge})\n\n      router.push('/children');\n    }\n  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 12,\n    md: 12,\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    className: \"mb-3\"\n  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Prepend, null, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Text, null, \"Age\")), __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onChange: function onChange(e) {\n      _this.setState({\n        spouseAge: e.target.value\n      });\n    }\n  })))), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 12,\n    md: 12,\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    style: {\n      width: '100%'\n    },\n    type: \"submit\",\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"Next\"), ' ')))) : null);\n}\n\n_s(SpouseForm, \"x4vyHzRI8HQi/0yyYwhOtmjfzDA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = SpouseForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpouseForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"SpouseForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nwb3VzZUZvcm0uanM/OGE3MiJdLCJuYW1lcyI6WyJTcG91c2VGb3JtIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiRGlzcGF0Y2hDb250ZXh0IiwidXNlU3RhdGUiLCJoYXNTcG91c2UiLCJ1cGRhdGVIYXNTcG91c2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzcGFuIiwib2Zmc2V0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJzdHlsZXMiLCJoZWFkZXIiLCJ0eXBlIiwic3BvdXNlIiwid2lkdGgiLCJzZXRTdGF0ZSIsInNwb3VzZUFnZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsR0FBc0I7QUFBQTs7QUFBQTs7QUFDZCxNQUFNQyxRQUFRLEdBQUdDLHdEQUFVLENBQUNDLHFFQUFELENBQTNCOztBQURjLGtCQUVxQkMsc0RBQVEsQ0FBQyxLQUFELENBRjdCO0FBQUEsTUFFVEMsU0FGUztBQUFBLE1BRUVDLGVBRkY7O0FBR2QsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFNBQ0EsbUJBQ0ksaUJBREosRUFFSSxNQUFDLDJEQUFELFFBQ0ksTUFBQywyREFBRDtBQUFLLE1BQUUsRUFBRTtBQUFDQyxVQUFJLEVBQUMsQ0FBTjtBQUFTQyxZQUFNLEVBQUU7QUFBakIsS0FBVDtBQUE4QixNQUFFLEVBQUU7QUFBQ0QsVUFBSSxFQUFDLENBQU47QUFBU0MsWUFBTSxFQUFFO0FBQWpCLEtBQWxDO0FBQXVELE1BQUUsRUFBRTtBQUFDRCxVQUFJLEVBQUMsQ0FBTjtBQUFTQyxZQUFNLEVBQUU7QUFBakI7QUFBM0QsS0FDSSxNQUFDLG9FQUFEO0FBQWEsV0FBTyxFQUFDLFNBQXJCO0FB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LE9BQVosUUFDSSxNQUFDLGtFQUFELENBQVksSUFBWixjQURKLENBREosRUFJSSxNQUFDLG1FQUFEO0FBQWEsWUFBUSxFQUFFLGtCQUFDQyxDQUFELEVBQU87QUFDMUIsV0FBSSxDQUFDVSxRQUFMLENBQWM7QUFBQ0MsaUJBQVMsRUFBRVgsQ0FBQyxDQUFDWSxNQUFGLENBQVNDO0FBQXJCLE9BQWQ7QUFFSDtBQUhELElBSkosQ0FESixDQURKLENBTEosRUFrQkksTUFBQywyREFBRCxRQUNJLE1BQUMsMkRBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxFQUFqQjtBQUFxQixNQUFFLEVBQUU7QUFBQ2YsVUFBSSxFQUFDLENBQU47QUFBU0MsWUFBTSxFQUFFO0FBQWpCO0FBQXpCLEtBQ0ksTUFBQyw4REFBRDtBQUNJLFNBQUssRUFBRTtBQUFDVSxXQUFLLEVBQUU7QUFBUixLQURYO0FBRUksUUFBSSxFQUFDLFFBRlQ7QUFHSSxXQUFPLEVBQUMsaUJBSFo7QUFJSSxRQUFJLEVBQUM7QUFKVCxZQURKLEVBS2lDLEdBTGpDLENBREosQ0FsQkosQ0FQSixDQURILEdBc0NLLElBckZWLENBREE7QUEwRlA7O0dBOUZRcEIsVTtVQUdjUSxxRDs7O0tBSGRSLFU7QUFnR01BLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TcG91c2VGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU3BvdXNlRm9ybS5tb2R1bGUuY3NzJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCB7RGlzcGF0Y2hDb250ZXh0fSBmcm9tIFwiLi4vY29udGV4dHMvRm9ybUNvbnRleHRcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IElucHV0R3JvdXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0lucHV0R3JvdXAnO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Qcm9ncmVzc0Jhcic7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5cbmZ1bmN0aW9uIFNwb3VzZUZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChEaXNwYXRjaENvbnRleHQpO1xuICAgICAgICBsZXQgW2hhc1Nwb3VzZSwgdXBkYXRlSGFzU3BvdXNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sIHhzPXt7c3Bhbjo2LCBvZmZzZXQ6IDN9fSBtZD17e3NwYW46Niwgb2Zmc2V0OiAzfX0gbGc9e3tzcGFuOjYsIG9mZnNldDogM319PlxuICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NCYXIgdmFyaWFudD1cInN1Y2Nlc3NcIiBub3c9ezEwfSAvPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8YnIvPlxuXG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvY2hpbGRyZW4nKVxuICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PkRvIHlvdSBoYXZlIGEgc3BvdXNlIG9yIHBhcnRuZXI/PC9oMj5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gbWQ9e3tzcGFuOjZ9fSBsZz17e3NwYW46Mywgb2Zmc2V0OiAzfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVIYXNTcG91c2Uoe2hhc1Nwb3VzZTogdHJ1ZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJBRERfU1BPVVNFXCIsIHNwb3VzZTogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCIgPlllczwvQnV0dG9uPnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezZ9IG1kPXt7c3Bhbjo2fX0gbGc9e3tzcGFuOjN9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVIYXNTcG91c2Uoe2hhc1Nwb3VzZTogZmFsc2V9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiQUREX1NQT1VTRVwiLCBzcG91c2U6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2NoaWxkcmVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIiA+Tm88L0J1dHRvbj57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAge2hhc1Nwb3VzZSA9PT0gdHJ1ZSA/XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17MTJ9IGxnPXt7c3Bhbjo2LCBvZmZzZXQ6IDN9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+SG93IG9sZCBpcyB5b3VyIHNwb3VzZSBvciBwYXJ0bmVyPzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jb250ZXh0LmRpc3BhdGNoKHt0eXBlOiBcIlNQT1VTRV9BR0VcIiwgc3BvdXNlQWdlOiB0aGlzLnN0YXRlLnNwb3VzZUFnZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2NoaWxkcmVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezEyfSBsZz17e3NwYW46Niwgb2Zmc2V0OiAzfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuVGV4dD5BZ2U8L0lucHV0R3JvdXAuVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nwb3VzZUFnZTogZS50YXJnZXQudmFsdWV9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezEyfSBsZz17e3NwYW46Niwgb2Zmc2V0OiAzfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCIgPk5leHQ8L0J1dHRvbj57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDogbnVsbH1cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwb3VzZUZvcm1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SpouseForm.js\n");

/***/ })

})