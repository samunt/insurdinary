webpackHotUpdate("static/development/pages/healthCondition.js",{

/***/ "./components/HealthConditionForm.js":
/*!*******************************************!*\
  !*** ./components/HealthConditionForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TobaccoForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _TobaccoForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TobaccoForm.module.css */ \"./components/TobaccoForm.module.css\");\n/* harmony import */ var _TobaccoForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TobaccoForm_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/FormContext */ \"./contexts/FormContext.js\");\n/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/ProgressBar */ \"./node_modules/react-bootstrap/esm/ProgressBar.js\");\n/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap-icons */ \"./node_modules/react-bootstrap-icons/dist/index.js\");\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nfunction TobaccoForm() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_7__[\"DispatchContext\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showHealthCondition = _useState[0],\n      setShowHealthCondition = _useState[1];\n\n  var handleCloseHealthCondition = function handleCloseHealthCondition() {\n    return setShowHealthCondition(false);\n  };\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showHealthPrice = _useState2[0],\n      setShowHealthPrice = _useState2[1];\n\n  var handleCloseHealthPrice = function handleCloseHealthPrice() {\n    return setShowHealthPrice(false);\n  };\n\n  var now = 55;\n\n  var progressInstance = __jsx(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    style: {\n      height: '0.5rem'\n    },\n    now: now\n  });\n\n  return __jsx(\"div\", null, __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: {\n      span: 10,\n      offset: 1\n    },\n    md: {\n      span: 10,\n      offset: 1\n    },\n    lg: {\n      span: 10,\n      offset: 1\n    }\n  }, progressInstance)), __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: {\n      span: 8,\n      offset: 2\n    },\n    md: {\n      span: 6,\n      offset: 3\n    },\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(\"h2\", {\n    className: _TobaccoForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n  }, \"Have you been diagnosed with a serious health condition?\")), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 1,\n    md: 1,\n    lg: 1\n  }, __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_9__[\"QuestionCircle\"], {\n    size: 30,\n    onClick: function onClick() {\n      setShowHealthCondition(true);\n    },\n    style: {\n      position: 'relative',\n      top: '18px',\n      right: '100%'\n    }\n  }))), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 6,\n    md: {\n      span: 6\n    },\n    lg: {\n      span: 3,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"align-button\",\n    onClick: function onClick() {\n      dispatch({\n        type: \"HEALTH_CONDITION\",\n        healthCondition: true\n      });\n      router.push('/familyIncome');\n    },\n    style: {\n      width: \"100%\"\n    },\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"Yes\"), \" \"), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 6,\n    md: {\n      span: 6\n    },\n    lg: {\n      span: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"align-button\",\n    onClick: function onClick() {\n      dispatch({\n        type: \"HEALTH_CONDITION\",\n        healthCondition: false\n      });\n      router.push('/familyIncome');\n    },\n    style: {\n      width: \"100%\"\n    },\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"No\"), \" \")), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: {\n      span: 11\n    },\n    md: {\n      span: 6,\n      offset: 3\n    },\n    lg: {\n      span: 6,\n      offset: 3\n    },\n    onClick: function onClick() {\n      setShowHealthPrice(true);\n    }\n  }, __jsx(\"h5\", {\n    className: _TobaccoForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n  }, __jsx(\"u\", null, \"How does my health affect my price?\"))), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 1,\n    md: 1,\n    lg: 1\n  }, __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_9__[\"QuestionCircle\"], {\n    size: 30,\n    onClick: function onClick() {\n      setShowHealthPrice(true);\n    },\n    style: {\n      position: 'relative',\n      top: '12px',\n      right: '75px'\n    }\n  })))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    show: showHealthCondition,\n    onHide: handleCloseHealthCondition\n  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Body, null, \"Select \\u201CYes\\u201D if you\\u2019ve been diagnosed with any of the following: heart attack, stroke, cancer, lung disease, diabetes, psychiatric illness, AIDS or any other major illness.\"), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Footer, null, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"outline-primary\",\n    onClick: handleCloseHealthCondition\n  }, \"Close\"))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    show: showHealthPrice,\n    onHide: handleCloseHealthPrice\n  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Body, null, \"Your health tends to be an important factor in your insurance rate. For example, if you\\u2019ve suffered from a recent heart attack, you will probably pay higher premiums than someone who hasn\\u2019t. Most people aren\\u2019t too surprised by this. Insurers are pretty comprehensive when it comes to assessing your health. They\\u2019ll ask you about everything from asthma to Alzheimer\\u2019s. (You can count on them being very thorough here.) Each of these illnesses has different implications for your life expectancy, and each one gets factored into your life insurance rate. Luckily, getting insurance with a pre-existing health condition isn\\u2019t impossible. We\\u2019re here to help you through the application process as your questions arise.\"), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Footer, null, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"outline-primary\",\n    onClick: handleCloseHealthPrice\n  }, \"Close\"))));\n}\n\n_s(TobaccoForm, \"FlSm10ohhlGwjZJ3n6UiHOFPhgU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = TobaccoForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"TobaccoForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWx0aENvbmRpdGlvbkZvcm0uanM/NTk2MSJdLCJuYW1lcyI6WyJUb2JhY2NvRm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRpc3BhdGNoQ29udGV4dCIsInVzZVN0YXRlIiwic2hvd0hlYWx0aENvbmRpdGlvbiIsInNldFNob3dIZWFsdGhDb25kaXRpb24iLCJoYW5kbGVDbG9zZUhlYWx0aENvbmRpdGlvbiIsInNob3dIZWFsdGhQcmljZSIsInNldFNob3dIZWFsdGhQcmljZSIsImhhbmRsZUNsb3NlSGVhbHRoUHJpY2UiLCJub3ciLCJwcm9ncmVzc0luc3RhbmNlIiwiaGVpZ2h0Iiwic3BhbiIsIm9mZnNldCIsInN0eWxlcyIsImhlYWRlciIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJ0eXBlIiwiaGVhbHRoQ29uZGl0aW9uIiwicHVzaCIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFDbEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVUsQ0FBQ0MscUVBQUQsQ0FBM0I7O0FBRmtDLGtCQUdvQkMsc0RBQVEsQ0FBQyxLQUFELENBSDVCO0FBQUEsTUFHM0JDLG1CQUgyQjtBQUFBLE1BR05DLHNCQUhNOztBQUlsQyxNQUFNQywwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCO0FBQUEsV0FBTUQsc0JBQXNCLENBQUMsS0FBRCxDQUE1QjtBQUFBLEdBQW5DOztBQUprQyxtQkFLWUYsc0RBQVEsQ0FBQyxLQUFELENBTHBCO0FBQUEsTUFLM0JJLGVBTDJCO0FBQUEsTUFLVkMsa0JBTFU7O0FBTWxDLE1BQU1DLHNCQUFzQixHQUFHLFNB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QUFPLFFBQUksRUFBRUMsZUFBYjtBQUE4QixVQUFNLEVBQUVFO0FBQXRDLEtBQ0ksTUFBQyw4REFBRCxDQUFPLElBQVAsd3ZCQURKLEVBTUksTUFBQyw4REFBRCxDQUFPLE1BQVAsUUFDSSxNQUFDLDhEQUFEO0FBQVEsV0FBTyxFQUFDLGlCQUFoQjtBQUFrQyxXQUFPLEVBQUVBO0FBQTNDLGFBREosQ0FOSixDQXBGSixDQURKO0FBb0dIOztHQS9HdUJaLFc7VUFDTEUscUQ7OztLQURLRixXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFsdGhDb25kaXRpb25Gb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RvYmFjY29Gb3JtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcbmltcG9ydCB7IERpc3BhdGNoQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9Gb3JtQ29udGV4dFwiO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCB7UXVlc3Rpb25DaXJjbGV9IGZyb20gXCJyZWFjdC1ib290c3RyYXAtaWNvbnNcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL01vZGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvYmFjY29Gb3JtKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChEaXNwYXRjaENvbnRleHQpO1xuICAgIGNvbnN0IFtzaG93SGVhbHRoQ29uZGl0aW9uLCBzZXRTaG93SGVhbHRoQ29uZGl0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBoYW5kbGVDbG9zZUhlYWx0aENvbmRpdGlvbiA9ICgpID0+IHNldFNob3dIZWFsdGhDb25kaXRpb24oZmFsc2UpO1xuICAgIGNvbnN0IFtzaG93SGVhbHRoUHJpY2UsIHNldFNob3dIZWFsdGhQcmljZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgaGFuZGxlQ2xvc2VIZWFsdGhQcmljZSA9ICgpID0+IHNldFNob3dIZWFsdGhQcmljZShmYWxzZSk7XG5cbiAgICBjb25zdCBub3cgPSA1NTtcbiAgICBjb25zdCBwcm9ncmVzc0luc3RhbmNlID0gPFByb2dyZXNzQmFyIHN0eWxlPXt7aGVpZ2h0OiAnMC41cmVtJ319IG5vdz17bm93fSAvPjtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgICAgICB4cz17eyBzcGFuOiAxMCwgb2Zmc2V0OiAxIH19XG4gICAgICAgICAgICAgICAgICAgIG1kPXt7IHNwYW46IDEwLCBvZmZzZXQ6IDEgfX1cbiAgICAgICAgICAgICAgICAgICAgbGc9e3sgc3BhbjogMTAsIG9mZnNldDogMSB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Byb2dyZXNzSW5zdGFuY2V9XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sIHhzPXt7c3BhbjogOCwgb2Zmc2V0OiAyfX0gbWQ9e3sgc3BhbjogNiwgb2Zmc2V0OiAzIH19IGxnPXt7IHNwYW46IDYsIG9mZnNldDogMyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+SGF2ZSB5b3UgYmVlbiBkaWFnbm9zZWQgd2l0aCBhIHNlcmlvdXMgaGVhbHRoIGNvbmRpdGlvbj88L2gyPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezF9IG1kPXsxfSBsZz17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkNpcmNsZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd0hlYWx0aENvbmRpdGlvbih0cnVlKX19XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICcxOHB4JywgcmlnaHQ6ICcxMDAlJ319XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gbWQ9e3sgc3BhbjogNiB9fSBsZz17eyBzcGFuOiAzLCBvZmZzZXQ6IDMgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiSEVBTFRIX0NPTkRJVElPTlwiLCBoZWFsdGhDb25kaXRpb246IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvZmFtaWx5SW5jb21lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFllc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gbWQ9e3sgc3BhbjogNiB9fSBsZz17eyBzcGFuOiAzIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkhFQUxUSF9DT05ESVRJT05cIiwgaGVhbHRoQ29uZGl0aW9uOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9mYW1pbHlJbmNvbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgICAgICAgICAgeHM9e3sgc3BhbjogMTEgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1kPXt7IHNwYW46IDYsIG9mZnNldDogMyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGc9e3sgc3BhbjogNiwgb2Zmc2V0OiAzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd0hlYWx0aFByaWNlKHRydWUpfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+PHU+SG93IGRvZXMgbXkgaGVhbHRoIGFmZmVjdCBteSBwcmljZT88L3U+PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezF9IG1kPXsxfSBsZz17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25DaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXszMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd0hlYWx0aFByaWNlKHRydWUpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICcxMnB4JywgcmlnaHQ6ICc3NXB4J319XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICB7Lyphc2sgYWJvdXQgaWYgdGhleSBoYXZlIGhlYWx0aCBjb25kaXRpb24qL31cbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93SGVhbHRoQ29uZGl0aW9ufSBvbkhpZGU9e2hhbmRsZUNsb3NlSGVhbHRoQ29uZGl0aW9ufT5cbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5TZWxlY3Qg4oCcWWVz4oCdIGlmIHlvdeKAmXZlIGJlZW4gZGlhZ25vc2VkIHdpdGggYW55IG9mIHRoZSBmb2xsb3dpbmc6IGhlYXJ0IGF0dGFjaywgc3Ryb2tlLCBjYW5jZXIsIGx1bmcgZGlzZWFzZSwgZGlhYmV0ZXMsIHBzeWNoaWF0cmljIGlsbG5lc3MsIEFJRFMgb3IgYW55IG90aGVyIG1ham9yIGlsbG5lc3MuPC9Nb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlSGVhbHRoQ29uZGl0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgIHsvKmFzayBhYm91dCBob3cgaGVhbHRoIGNvbmRpdGlvbiBhZmZlY3RzIHByaWNlKi99XG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd0hlYWx0aFByaWNlfSBvbkhpZGU9e2hhbmRsZUNsb3NlSGVhbHRoUHJpY2V9PlxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PllvdXIgaGVhbHRoIHRlbmRzIHRvIGJlIGFuIGltcG9ydGFudCBmYWN0b3IgaW4geW91ciBpbnN1cmFuY2UgcmF0ZS4gRm9yIGV4YW1wbGUsIGlmIHlvdeKAmXZlIHN1ZmZlcmVkIGZyb20gYSByZWNlbnQgaGVhcnQgYXR0YWNrLCB5b3Ugd2lsbCBwcm9iYWJseSBwYXkgaGlnaGVyIHByZW1pdW1zIHRoYW4gc29tZW9uZSB3aG8gaGFzbuKAmXQuIE1vc3QgcGVvcGxlIGFyZW7igJl0IHRvbyBzdXJwcmlzZWQgYnkgdGhpcy5cblxuICAgICAgICAgICAgICAgICAgICBJbnN1cmVycyBhcmUgcHJldHR5IGNvbXByZWhlbnNpdmUgd2hlbiBpdCBjb21lcyB0byBhc3Nlc3NpbmcgeW91ciBoZWFsdGguIFRoZXnigJlsbCBhc2sgeW91IGFib3V0IGV2ZXJ5dGhpbmcgZnJvbSBhc3RobWEgdG8gQWx6aGVpbWVy4oCZcy4gKFlvdSBjYW4gY291bnQgb24gdGhlbSBiZWluZyB2ZXJ5IHRob3JvdWdoIGhlcmUuKSBFYWNoIG9mIHRoZXNlIGlsbG5lc3NlcyBoYXMgZGlmZmVyZW50IGltcGxpY2F0aW9ucyBmb3IgeW91ciBsaWZlIGV4cGVjdGFuY3ksIGFuZCBlYWNoIG9uZSBnZXRzIGZhY3RvcmVkIGludG8geW91ciBsaWZlIGluc3VyYW5jZSByYXRlLlxuXG4gICAgICAgICAgICAgICAgICAgIEx1Y2tpbHksIGdldHRpbmcgaW5zdXJhbmNlIHdpdGggYSBwcmUtZXhpc3RpbmcgaGVhbHRoIGNvbmRpdGlvbiBpc27igJl0IGltcG9zc2libGUuIFdl4oCZcmUgaGVyZSB0byBoZWxwIHlvdSB0aHJvdWdoIHRoZSBhcHBsaWNhdGlvbiBwcm9jZXNzIGFzIHlvdXIgcXVlc3Rpb25zIGFyaXNlLjwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZUhlYWx0aFByaWNlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPC9Nb2RhbD5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/HealthConditionForm.js\n");

/***/ })

})