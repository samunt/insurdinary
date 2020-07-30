webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SpouseForm.js":
/*!**********************************!*\
  !*** ./components/SpouseForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SpouseForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpouseForm.module.css */ \"./components/SpouseForm.module.css\");\n/* harmony import */ var _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/FormContext */ \"./contexts/FormContext.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction SpouseForm() {\n  _s();\n\n  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_6__[\"DispatchContext\"]);\n  var hasSpouse = false;\n\n  if (hasSpouse) {\n    var _spouse = __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      xs: 6,\n      md: 6,\n      lg: 6\n    }, __jsx(\"h3\", {\n      className: _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header\n    }, \"How old is your spouse or partner?\")));\n  }\n\n  return __jsx(\"div\", null, __jsx(\"h1\", {\n    className: _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header\n  }, \"Do you have a spouse or partner?\"), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 6,\n    md: 6,\n    lg: 6\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    onClick: function onClick(e) {\n      dispatch({\n        type: \"ADD_SPOUSE\",\n        spouse: true\n      });\n    },\n    style: {\n      width: '100%'\n    },\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"Yes\"), ' '), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 6,\n    md: 6,\n    lg: 6\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    onClick: function onClick(e) {\n      dispatch({\n        type: \"ADD_SPOUSE\",\n        spouse: false\n      });\n    },\n    style: {\n      width: '100%'\n    },\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"No\"), ' ')), spouse));\n}\n\n_s(SpouseForm, \"kCU+r/6VuXUfg74P0SIOBSNFld8=\");\n\n_c = SpouseForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"SpouseForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nwb3VzZUZvcm0uanM/OGE3MiJdLCJuYW1lcyI6WyJTcG91c2VGb3JtIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiRGlzcGF0Y2hDb250ZXh0IiwiaGFzU3BvdXNlIiwic3BvdXNlIiwic3R5bGVzIiwiaGVhZGVyIiwiZSIsInR5cGUiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFVBQVQsR0FBc0I7QUFBQTs7QUFDakMsTUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyxxRUFBRCxDQUEzQjtBQUNBLE1BQUlDLFNBQVMsR0FBRyxLQUFoQjs7QUFDQSxNQUFJQSxTQUFKLEVBQWU7QUFDWCxRQUFJQyxPQUFNLEdBQUcsTUFBQywyREFBRCxRQUNULE1BQUMsMkRBQUQ7QUFBSyxRQUFFLEVBQUUsQ0FBVDtBQUFZLFFBQUUsRUFBRSxDQUFoQjtBQUFtQixRQUFFLEVBQUU7QUFBdkIsT0FDSTtBQUFJLGVBQVMsRUFBRUMsNkRBQU0sQ0FBQ0M7QUFBdEIsNENBREosQ0FEUyxDQUFiO0FBS0g7O0FBQ0QsU0FDSSxtQkFDSTtBQUFJLGFBQVMsRUFBRUQsNkRBQU0sQ0FBQ0M7QUFBdEIsd0NBREosRUFFSSxNQUFDLGlFQUFELFFBQ0ksTUFBQywyREFBRCxRQUNJLE1BQUMsMkRBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLE1BQUUsRUFBRSxDQUFoQjtBQUFtQixNQUFFLEVBQUU7QUFBdkIsS0FDSSxNQUFDLDhEQUFEO0FBQ0ksV0FBTyxFQUFFLGlCQUFDQyxDQUFELEVBQU87QUFDWlAsY0FBUSxDQUFDO0FBQUNRLFlBQUksRUFBRSxZQUFQO0FBQXFCSixjQUFNLEVBQUU7QUFBN0IsT0FBRCxDQUFSO0FBQ0gsS0FITDtBQUlJLFNBQUssRUFBRTtBQUFDSyxXQUFLLEVBQUU7QUFBUixLQUpYO0FBS0ksV0FBTyxFQUFDLGlCQUxaO0FBTUksUUFBSSxFQUFDO0FBTlQsV0FESixFQU9nQyxHQVBoQyxDQURKLEVBVUksTUFBQywyREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQVksTUFBRSxFQUFFLENBQWhCO0FBQW1CLE1BQUUsRUFBRTtBQUF2QixLQUNJLE1BQUMsOERBQUQ7QUFDSSxXQUFPLEVBQUUsaUJBQUNGLENBQUQsRUFBTztBQUNaUCxjQUFRLENBQUM7QUFBQ1EsWUFBSSxFQUFFLFlBQVA7QUFBcUJKLGNBQU0sRUFBRTtBQUE3QixPQUFELENBQVI7QUFDSCxLQUhMO0FBSUksU0FBSyxFQUFFO0FBQUNLLFdBQUssRUFBRTtBQUFSLEtBSlg7QUFLSSxXQUFPLEVBQUMsaUJBTFo7QUFNSSxRQUFJLEVBQUM7QUFOVCxVQURKLEVBTytCLEdBUC9CLENBVkosQ0FESixFQXFCS0wsTUFyQkwsQ0FGSixDQURKO0FBNEJIOztHQXRDdUJMLFU7O0tBQUFBLFUiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nwb3VzZUZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Nwb3VzZUZvcm0ubW9kdWxlLmNzcyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5pbXBvcnQge0Rpc3BhdGNoQ29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHRzL0Zvcm1Db250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwb3VzZUZvcm0oKSB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VDb250ZXh0KERpc3BhdGNoQ29udGV4dCk7XG4gICAgbGV0IGhhc1Nwb3VzZSA9IGZhbHNlO1xuICAgIGlmIChoYXNTcG91c2UpIHtcbiAgICAgICAgbGV0IHNwb3VzZSA9IDxSb3c+XG4gICAgICAgICAgICA8Q29sIHhzPXs2fSBtZD17Nn0gbGc9ezZ9PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PkhvdyBvbGQgaXMgeW91ciBzcG91c2Ugb3IgcGFydG5lcj88L2gzPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PkRvIHlvdSBoYXZlIGEgc3BvdXNlIG9yIHBhcnRuZXI/PC9oMT5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gbWQ9ezZ9IGxnPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJBRERfU1BPVVNFXCIsIHNwb3VzZTogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIiA+WWVzPC9CdXR0b24+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezZ9IG1kPXs2fSBsZz17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiQUREX1NQT1VTRVwiLCBzcG91c2U6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiID5ObzwvQnV0dG9uPnsnICd9XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIHtzcG91c2V9XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SpouseForm.js\n");

/***/ })

})