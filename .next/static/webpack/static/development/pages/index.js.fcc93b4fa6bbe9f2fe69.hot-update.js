webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SpouseForm.js":
/*!**********************************!*\
  !*** ./components/SpouseForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpouseForm.module.css */ \"./components/SpouseForm.module.css\");\n/* harmony import */ var _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/FormContext */ \"./contexts/FormContext.js\");\n/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/FormControl */ \"./node_modules/react-bootstrap/esm/FormControl.js\");\n/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/InputGroup */ \"./node_modules/react-bootstrap/esm/InputGroup.js\");\n/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/ProgressBar */ \"./node_modules/react-bootstrap/esm/ProgressBar.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction SpouseForm() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      hasSpouse = _useState[0],\n      updateHasSpouse = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_7__[\"DispatchContext\"]);\n  return __jsx(\"div\", null, __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: {\n      span: 6,\n      offset: 3\n    },\n    md: {\n      span: 6,\n      offset: 3\n    },\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    variant: \"success\",\n    now: 10\n  }))), __jsx(\"br\", null), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    onSubmit: function onSubmit(e) {\n      e.preventDefault();\n      console.log(e);\n      router.push('/children');\n    }\n  }, __jsx(\"br\", null), __jsx(\"h2\", {\n    className: _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n  }, \"Do you have a spouse or partner?\"), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 6,\n    md: {\n      span: 6\n    },\n    lg: {\n      span: 3,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"align-button\",\n    onClick: function onClick() {\n      updateHasSpouse(true);\n      dispatch({\n        type: \"ADD_SPOUSE\",\n        spouse: true\n      });\n    },\n    style: {\n      width: '100%'\n    },\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"Yes\"), ' '), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 6,\n    md: {\n      span: 6\n    },\n    lg: {\n      span: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"align-button\",\n    onClick: function onClick(e) {\n      e.preventDefault();\n      updateHasSpouse(false);\n      dispatch({\n        type: \"ADD_SPOUSE\",\n        spouse: false\n      });\n      router.push('/children');\n    },\n    style: {\n      width: '100%'\n    },\n    variant: \"outline-primary\",\n    type: \"submit\",\n    size: \"lg\"\n  }, \"No\"), ' ')))), hasSpouse === true && __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 12,\n    md: 12,\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(\"br\", null), __jsx(\"br\", null), __jsx(\"h3\", {\n    className: _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n  }, \"How old is your spouse or partner?\"))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    onSubmit: function onSubmit(e) {\n      e.preventDefault();\n      context.dispatch({\n        type: \"SPOUSE_AGE\",\n        spouseAge: _this.state.spouseAge\n      });\n      router.push('/children');\n    }\n  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 12,\n    md: 12,\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    className: \"mb-3\"\n  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Prepend, null, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Text, null, \"Age\")), __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onChange: function onChange(e) {\n      updateHasSpouse({\n        spouseAge: e.target.value\n      });\n    }\n  })))), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 12,\n    md: 12,\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    style: {\n      width: '100%'\n    },\n    type: \"submit\",\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"Next\"), ' ')))));\n}\n\n_s(SpouseForm, \"gLSFSdA2yj4GfJaP5wajOQ3tQEE=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = SpouseForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpouseForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"SpouseForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nwb3VzZUZvcm0uanM/OGE3MiJdLCJuYW1lcyI6WyJTcG91c2VGb3JtIiwidXNlU3RhdGUiLCJoYXNTcG91c2UiLCJ1cGRhdGVIYXNTcG91c2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJEaXNwYXRjaENvbnRleHQiLCJzcGFuIiwib2Zmc2V0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJzdHlsZXMiLCJoZWFkZXIiLCJ0eXBlIiwic3BvdXNlIiwid2lkdGgiLCJjb250ZXh0Iiwic3BvdXNlQWdlIiwic3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ3FCQyxzREFBUSxDQUFDLEtBQUQsQ0FEN0I7QUFBQSxNQUNUQyxTQURTO0FBQUEsTUFDRUMsZUFERjs7QUFFZCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyxxRUFBRCxDQUEzQjtBQUVKLFNBQ0ksbUJBQ0ksaUJBREosRUFFSSxNQUFDLDJEQUFELFFBQ0ksTUFBQywyREFBRDtBQUFLLE1BQUUsRUFBRTtBQUFDQyxVQUFJLEVBQUMsQ0FBTjtBQUFTQyxZQUFNLEVBQUU7QUFBakIsS0FBVDtBQUE4QixNQUFFLEVBQUU7QUFBQ0QsVUFBSSxFQUFDLENBQU47QUFBU0MsWUFBTSxFQUFFO0FBQWpCLEtBQWxDO0FBQXVELE1BQUUsRUFBRTtBQUFDRCxVQUFJLEVBQUMsQ0FBTjtBQUFTQyxZQUFNLEVBQUU7QUFBakI7QUFBM0QsS0FDSSxNQUFDLG9FQUFEO0FBQWEsV0FBTyxFQUFDLFNB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QUMsa0VBQUQ7QUFBWSxhQUFTLEVBQUM7QUFBdEIsS0FDSSxNQUFDLGtFQUFELENBQVksT0FBWixRQUNJLE1BQUMsa0VBQUQsQ0FBWSxJQUFaLGNBREosQ0FESixFQUlJLE1BQUMsbUVBQUQ7QUFBYSxZQUFRLEVBQUUsa0JBQUNDLENBQUQsRUFBTztBQUMxQlIscUJBQWUsQ0FBQztBQUFDbUIsaUJBQVMsRUFBRVgsQ0FBQyxDQUFDYSxNQUFGLENBQVNDO0FBQXJCLE9BQUQsQ0FBZjtBQUVIO0FBSEQsSUFKSixDQURKLENBREosQ0FMSixFQWtCSSxNQUFDLDJEQUFELFFBQ0ksTUFBQywyREFBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQXFCLE1BQUUsRUFBRTtBQUFDaEIsVUFBSSxFQUFDLENBQU47QUFBU0MsWUFBTSxFQUFFO0FBQWpCO0FBQXpCLEtBQ0ksTUFBQyw4REFBRDtBQUNJLFNBQUssRUFBRTtBQUFDVSxXQUFLLEVBQUU7QUFBUixLQURYO0FBRUksUUFBSSxFQUFDLFFBRlQ7QUFHSSxXQUFPLEVBQUMsaUJBSFo7QUFJSSxRQUFJLEVBQUM7QUFKVCxZQURKLEVBS2lDLEdBTGpDLENBREosQ0FsQkosQ0FQSixDQWhEUixDQURKO0FBMEZIOztHQS9GUXBCLFU7VUFFY0sscUQ7OztLQUZkTCxVO0FBaUdNQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3BvdXNlRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Nwb3VzZUZvcm0ubW9kdWxlLmNzcyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5pbXBvcnQge0Rpc3BhdGNoQ29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHRzL0Zvcm1Db250ZXh0XCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm1Db250cm9sJztcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9JbnB1dEdyb3VwJztcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICdyZWFjdC1ib290c3RyYXAvUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuXG5mdW5jdGlvbiBTcG91c2VGb3JtKCkge1xuICAgICAgICBsZXQgW2hhc1Nwb3VzZSwgdXBkYXRlSGFzU3BvdXNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChEaXNwYXRjaENvbnRleHQpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2wgeHM9e3tzcGFuOjYsIG9mZnNldDogM319IG1kPXt7c3Bhbjo2LCBvZmZzZXQ6IDN9fSBsZz17e3NwYW46Niwgb2Zmc2V0OiAzfX0+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc0JhciB2YXJpYW50PVwic3VjY2Vzc1wiIG5vdz17MTB9IC8+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxici8+XG5cbiAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9jaGlsZHJlbicpXG4gICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+RG8geW91IGhhdmUgYSBzcG91c2Ugb3IgcGFydG5lcj88L2gyPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs2fSBtZD17e3NwYW46Nn19IGxnPXt7c3BhbjozLCBvZmZzZXQ6IDN9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUhhc1Nwb3VzZSh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiQUREX1NQT1VTRVwiLCBzcG91c2U6IHRydWV9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiID5ZZXM8L0J1dHRvbj57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs2fSBtZD17e3NwYW46Nn19IGxnPXt7c3BhbjozfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlSGFzU3BvdXNlKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiQUREX1NQT1VTRVwiLCBzcG91c2U6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2NoaWxkcmVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIiA+Tm88L0J1dHRvbj57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAge2hhc1Nwb3VzZSA9PT0gdHJ1ZSAgJiZcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXsxMn0gbGc9e3tzcGFuOjYsIG9mZnNldDogM319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5Ib3cgb2xkIGlzIHlvdXIgc3BvdXNlIG9yIHBhcnRuZXI/PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoKHt0eXBlOiBcIlNQT1VTRV9BR0VcIiwgc3BvdXNlQWdlOiB0aGlzLnN0YXRlLnNwb3VzZUFnZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2NoaWxkcmVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezEyfSBsZz17e3NwYW46Niwgb2Zmc2V0OiAzfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuVGV4dD5BZ2U8L0lucHV0R3JvdXAuVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUhhc1Nwb3VzZSh7c3BvdXNlQWdlOiBlLnRhcmdldC52YWx1ZX0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17MTJ9IGxnPXt7c3Bhbjo2LCBvZmZzZXQ6IDN9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIiA+TmV4dDwvQnV0dG9uPnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICAgfVxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BvdXNlRm9ybVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SpouseForm.js\n");

/***/ })

})