webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SpouseForm.js":
/*!**********************************!*\
  !*** ./components/SpouseForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SpouseForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpouseForm.module.css */ \"./components/SpouseForm.module.css\");\n/* harmony import */ var _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/FormContext */ \"./contexts/FormContext.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction SpouseForm() {\n  _s();\n\n  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_6__[\"DispatchContext\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      hasSpouse = _useState[0],\n      updateHasSpouse = _useState[1];\n\n  var spouse;\n\n  if (hasSpouse) {\n    spouse = __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      xs: 12,\n      md: 12,\n      lg: 12\n    }, __jsx(\"br\", null), __jsx(\"br\", null), __jsx(\"h3\", {\n      className: _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header\n    }, \"How old is your spouse or partner?\")));\n  }\n\n  return __jsx(\"div\", null, __jsx(\"h1\", {\n    className: _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header\n  }, \"Do you have a spouse or partner?\"), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 6,\n    md: 6,\n    lg: 6\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    onClick: function onClick(e) {\n      dispatch({\n        type: \"ADD_SPOUSE\",\n        spouse: true\n      });\n      updateHasSpouse(true);\n    },\n    style: {\n      width: '100%'\n    },\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"Yes\"), ' '), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 6,\n    md: 6,\n    lg: 6\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    onClick: function onClick(e) {\n      dispatch({\n        type: \"ADD_SPOUSE\",\n        spouse: false\n      });\n    },\n    style: {\n      width: '100%'\n    },\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"No\"), ' ')), spouse));\n}\n\n_s(SpouseForm, \"FljMTLjVhjOUIbDHi47iMh+7qK8=\");\n\n_c = SpouseForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"SpouseForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nwb3VzZUZvcm0uanM/OGE3MiJdLCJuYW1lcyI6WyJTcG91c2VGb3JtIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiRGlzcGF0Y2hDb250ZXh0IiwidXNlU3RhdGUiLCJoYXNTcG91c2UiLCJ1cGRhdGVIYXNTcG91c2UiLCJzcG91c2UiLCJzdHlsZXMiLCJoZWFkZXIiLCJlIiwidHlwZSIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUNqQyxNQUFNQyxRQUFRLEdBQUdDLHdEQUFVLENBQUNDLHFFQUFELENBQTNCOztBQURpQyxrQkFFRUMsc0RBQVEsQ0FBQyxLQUFELENBRlY7QUFBQSxNQUU1QkMsU0FGNEI7QUFBQSxNQUVqQkMsZUFGaUI7O0FBR2pDLE1BQUlDLE1BQUo7O0FBQ0EsTUFBSUYsU0FBSixFQUFlO0FBQ1hFLFVBQU0sR0FBRyxNQUFDLDJEQUFELFFBQ0wsTUFBQywyREFBRDtBQUFLLFFBQUUsRUFBRSxFQUFUO0FBQWEsUUFBRSxFQUFFLEVBQWpCO0FBQXFCLFFBQUUsRUFBRTtBQUF6QixPQUNJLGlCQURKLEVBQ1MsaUJBRFQsRUFFSTtBQUFJLGVBQVMsRUFBRUMsNkRBQU0sQ0FBQ0M7QUFBdEIsNENBRkosQ0FESyxDQUFUO0FBTUg7O0FBQ0QsU0FDSSxtQkFDSTtBQUFJLGFBQVMsRUFBRUQsNkRBQU0sQ0FBQ0M7QUFBdEIsd0NBREosRUFFSSxNQUFDLGlFQUFELFFBQ0ksTUFBQywyREFBRCxRQUNJLE1BQUMsMkRBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLE1BQUUsRUFBRSxDQUFoQjtBQUFtQixNQUFFLEVBQUU7QUFBdkIsS0FDSSxNQUFDLDhEQUFEO0FBQ0ksV0FBTyxFQUFFLGlCQUFDQyxDQUFELEVBQU87QUFDWlQsY0FBUSxDQUFDO0FBQUNVLFlBQUksRUFBRSxZQUFQO0FBQXFCSixjQUFNLEVBQUU7QUFBN0IsT0FBRCxDQUFSO0FBQ0FELHFCQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0gsS0FKTDtBQUtJLFNBQUssRUFBRTtBQUFDTSxXQUFLLEVBQUU7QUFBUixLQUxYO0FBTUksV0FBTyxFQUFDLGlCQU5aO0FBT0ksUUFBSSxFQUFDO0FBUFQsV0FESixFQVFnQyxHQVJoQyxDQURKLEVBV0ksTUFBQywyREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQVksTUFBRSxFQUFFLENBQWhCO0FBQW1CLE1BQUUsRUFBRTtBQUF2QixLQUNJLE1BQUMsOERBQUQ7QUFDSSxXQUFPLEVBQUUsaUJBQUNGLENBQUQsRUFBTztBQUNaVCxjQUFRLENBQUM7QUFBQ1UsWUFBSSxFQUFFLFlBQVA7QUFBcUJKLGNBQU0sRUFBRTtBQUE3QixPQUFELENBQVI7QUFDSCxLQUhMO0FBSUksU0FBSyxFQUFFO0FBQUNLLFdBQUssRUFBRTtBQUFSLEtBSlg7QUFLSSxXQUFPLEVBQUMsaUJBTFo7QUFNSSxRQUFJLEVBQUM7QUFOVCxVQURKLEVBTytCLEdBUC9CLENBWEosQ0FESixFQXNCS0wsTUF0QkwsQ0FGSixDQURKO0FBNkJIOztHQXpDdUJQLFU7O0tBQUFBLFUiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nwb3VzZUZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TcG91c2VGb3JtLm1vZHVsZS5jc3MnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xuaW1wb3J0IHtEaXNwYXRjaENvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0cy9Gb3JtQ29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcG91c2VGb3JtKCkge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChEaXNwYXRjaENvbnRleHQpO1xuICAgIGxldCBbaGFzU3BvdXNlLCB1cGRhdGVIYXNTcG91c2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGxldCBzcG91c2U7XG4gICAgaWYgKGhhc1Nwb3VzZSkge1xuICAgICAgICBzcG91c2UgPSA8Um93PlxuICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXsxMn0gbGc9ezEyfT5cbiAgICAgICAgICAgICAgICA8YnIvPjxici8+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+SG93IG9sZCBpcyB5b3VyIHNwb3VzZSBvciBwYXJ0bmVyPzwvaDM+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+RG8geW91IGhhdmUgYSBzcG91c2Ugb3IgcGFydG5lcj88L2gxPlxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs2fSBtZD17Nn0gbGc9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIkFERF9TUE9VU0VcIiwgc3BvdXNlOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUhhc1Nwb3VzZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCIgPlllczwvQnV0dG9uPnsnICd9XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs2fSBtZD17Nn0gbGc9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIkFERF9TUE9VU0VcIiwgc3BvdXNlOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIiA+Tm88L0J1dHRvbj57JyAnfVxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICB7c3BvdXNlfVxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SpouseForm.js\n");

/***/ })

})