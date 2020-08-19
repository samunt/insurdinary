webpackHotUpdate("static/development/pages/tobacco.js",{

/***/ "./components/TobaccoForm.js":
/*!***********************************!*\
  !*** ./components/TobaccoForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TobaccoForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _TobaccoForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TobaccoForm.module.css */ \"./components/TobaccoForm.module.css\");\n/* harmony import */ var _TobaccoForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TobaccoForm_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/FormContext */ \"./contexts/FormContext.js\");\n/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/ProgressBar */ \"./node_modules/react-bootstrap/esm/ProgressBar.js\");\n/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap-icons */ \"./node_modules/react-bootstrap-icons/dist/index.js\");\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nfunction TobaccoForm() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_7__[\"DispatchContext\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showNicotine = _useState[0],\n      setShowNicotine = _useState[1];\n\n  var handleCloseNicotine = function handleCloseNicotine() {\n    return setShowNicotine(false);\n  };\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showUsedToSmoke = _useState2[0],\n      setShowUsedToSmoke = _useState2[1];\n\n  var handleCloseUsedToSmoke = function handleCloseUsedToSmoke() {\n    return setShowUsedToSmoke(false);\n  };\n\n  var now = 50;\n\n  var progressInstance = __jsx(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    style: {\n      height: '0.5rem'\n    },\n    now: now\n  });\n\n  return __jsx(\"div\", null, __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: {\n      span: 10,\n      offset: 1\n    },\n    md: {\n      span: 10,\n      offset: 1\n    },\n    lg: {\n      span: 10,\n      offset: 1\n    }\n  }, progressInstance)), __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: {\n      span: 6,\n      offset: 3\n    },\n    md: {\n      span: 6,\n      offset: 3\n    },\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(\"h2\", {\n    className: _TobaccoForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n  }, \"Do you smoke or use nicotine products?\")), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 1,\n    md: 1,\n    lg: 1\n  }, __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_9__[\"QuestionCircle\"], {\n    size: 30,\n    onClick: function onClick() {\n      setShowNicotine(true);\n    },\n    style: {\n      position: 'relative',\n      top: '15px',\n      right: '100%'\n    }\n  }))), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 6,\n    md: {\n      span: 6\n    },\n    lg: {\n      span: 3,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"align-button\",\n    onClick: function onClick() {\n      dispatch({\n        type: \"TOBACCO\",\n        tobacco: true\n      });\n      router.push('/healthCondition');\n    },\n    style: {\n      width: \"100%\"\n    },\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"Yes\"), \" \"), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 6,\n    md: {\n      span: 6\n    },\n    lg: {\n      span: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"align-button\",\n    onClick: function onClick() {\n      dispatch({\n        type: \"TOBACCO\",\n        tobacco: false\n      });\n      router.push('/healthCondition');\n    },\n    style: {\n      width: \"100%\"\n    },\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"No\"), \" \")), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: {\n      span: 11\n    },\n    md: {\n      span: 6,\n      offset: 3\n    },\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(\"h3\", {\n    className: _TobaccoForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n  }, \"What if I used to smoke?\")), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 1,\n    md: 1,\n    lg: 1\n  }, __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_9__[\"QuestionCircle\"], {\n    size: 30,\n    onClick: function onClick() {\n      setShowUsedToSmoke(true);\n    },\n    style: {\n      position: 'relative',\n      top: '15px',\n      right: '50px'\n    }\n  })))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    show: showNicotine,\n    onHide: handleCloseNicotine\n  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Body, null, \"Select \\u201CYes\\u201D if you\\u2019ve used any nicotine products in the past year. Nicotine products include cigarettes, e-cigarettes, cigars, pipes, chewing tobacco, nicotine gum or patches, etc.\"), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Footer, null, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"outline-primary\",\n    onClick: handleCloseNicotine\n  }, \"Close\"))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    show: showUsedToSmoke,\n    onHide: handleCloseUsedToSmoke\n  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Body, null, \"An insurance company will consider you a smoker only if you have engaged in smoking over the last 12 months. So if you quit smoking over a year ago, we have good news for you: No matter how long you were smoking for or how often you were smoking, you can specify \\u201CNo\\u201D for this question. Your life insurance premiums will be the same as those for a non-smoker! Wasn\\u2019t that an unexpected surprise?\"), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Footer, null, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"outline-primary\",\n    onClick: handleCloseUsedToSmoke\n  }, \"Close\"))));\n}\n\n_s(TobaccoForm, \"8AdW+A2XHLWwH76LwWbLR64VXoQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = TobaccoForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"TobaccoForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvYmFjY29Gb3JtLmpzPzNhZTIiXSwibmFtZXMiOlsiVG9iYWNjb0Zvcm0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJEaXNwYXRjaENvbnRleHQiLCJ1c2VTdGF0ZSIsInNob3dOaWNvdGluZSIsInNldFNob3dOaWNvdGluZSIsImhhbmRsZUNsb3NlTmljb3RpbmUiLCJzaG93VXNlZFRvU21va2UiLCJzZXRTaG93VXNlZFRvU21va2UiLCJoYW5kbGVDbG9zZVVzZWRUb1Ntb2tlIiwibm93IiwicHJvZ3Jlc3NJbnN0YW5jZSIsImhlaWdodCIsInNwYW4iLCJvZmZzZXQiLCJzdHlsZXMiLCJoZWFkZXIiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwidHlwZSIsInRvYmFjY28iLCJwdXNoIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUNsQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyxxRUFBRCxDQUEzQjs7QUFGa0Msa0JBR01DLHNEQUFRLENBQUMsS0FBRCxDQUhkO0FBQUEsTUFHM0JDLFlBSDJCO0FBQUEsTUFHYkMsZUFIYTs7QUFJbEMsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQjtBQUFBLFdBQU1ELGVBQWUsQ0FBQyxLQUFELENBQXJCO0FBQUEsR0FBNUI7O0FBSmtDLG1CQUtZRixzREFBUSxDQUFDLEtBQUQsQ0FMcEI7QUFBQSxNQUszQkksZUFMMkI7QUFBQSxNQUtWQyxrQkFMVTs7QUFNbEMsTUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QjtBQUFBLFdBQU1ELGtCQUFrQixDQUFDLEtB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O0FBQVEsV0FBTyxFQUFDLGlCQUFoQjtBQUFrQyxXQUFPLEVBQUVBO0FBQTNDLGFBREosQ0FGSixDQWxGSixDQURKO0FBNkZIOztHQXhHdUJaLFc7VUFDTEUscUQ7OztLQURLRixXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Ub2JhY2NvRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Ub2JhY2NvRm9ybS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvUm93XCI7XG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XG5pbXBvcnQgeyBEaXNwYXRjaENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvRm9ybUNvbnRleHRcIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Byb2dyZXNzQmFyXCI7XG5pbXBvcnQge1F1ZXN0aW9uQ2lyY2xlfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwLWljb25zXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Nb2RhbFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvYmFjY29Gb3JtKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChEaXNwYXRjaENvbnRleHQpO1xuICAgIGNvbnN0IFtzaG93Tmljb3RpbmUsIHNldFNob3dOaWNvdGluZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgaGFuZGxlQ2xvc2VOaWNvdGluZSA9ICgpID0+IHNldFNob3dOaWNvdGluZShmYWxzZSk7XG4gICAgY29uc3QgW3Nob3dVc2VkVG9TbW9rZSwgc2V0U2hvd1VzZWRUb1Ntb2tlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBoYW5kbGVDbG9zZVVzZWRUb1Ntb2tlID0gKCkgPT4gc2V0U2hvd1VzZWRUb1Ntb2tlKGZhbHNlKTtcblxuICAgIGNvbnN0IG5vdyA9IDUwO1xuICAgIGNvbnN0IHByb2dyZXNzSW5zdGFuY2UgPSA8UHJvZ3Jlc3NCYXIgc3R5bGU9e3toZWlnaHQ6ICcwLjVyZW0nfX0gbm93PXtub3d9IC8+O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAgICAgIHhzPXt7IHNwYW46IDEwLCBvZmZzZXQ6IDEgfX1cbiAgICAgICAgICAgICAgICAgICAgbWQ9e3sgc3BhbjogMTAsIG9mZnNldDogMSB9fVxuICAgICAgICAgICAgICAgICAgICBsZz17eyBzcGFuOiAxMCwgb2Zmc2V0OiAxIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7cHJvZ3Jlc3NJbnN0YW5jZX1cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2wgeHM9e3tzcGFuOiA2LCBvZmZzZXQ6IDN9fSBtZD17eyBzcGFuOiA2LCBvZmZzZXQ6IDMgfX0gbGc9e3sgc3BhbjogNiwgb2Zmc2V0OiAzIH19PlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5EbyB5b3Ugc21va2Ugb3IgdXNlIG5pY290aW5lIHByb2R1Y3RzPzwvaDI+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCB4cz17MX0gbWQ9ezF9IGxnPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXszMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTaG93Tmljb3RpbmUodHJ1ZSl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAnMTVweCcsIHJpZ2h0OiAnMTAwJSd9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezZ9IG1kPXt7IHNwYW46IDYgfX0gbGc9e3sgc3BhbjogMywgb2Zmc2V0OiAzIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlRPQkFDQ09cIiwgdG9iYWNjbzogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9oZWFsdGhDb25kaXRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWWVzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs2fSBtZD17eyBzcGFuOiA2IH19IGxnPXt7IHNwYW46IDMgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiVE9CQUNDT1wiLCB0b2JhY2NvOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9oZWFsdGhDb25kaXRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgICAgICAgICAgeHM9e3sgc3BhbjogMTEgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1kPXt7IHNwYW46IDYsIG9mZnNldDogMyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGc9e3sgc3BhbjogNiwgb2Zmc2V0OiAzIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PldoYXQgaWYgSSB1c2VkIHRvIHNtb2tlPzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxfSBtZD17MX0gbGc9ezF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dVc2VkVG9TbW9rZSh0cnVlKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAnMTVweCcsIHJpZ2h0OiAnNTBweCd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIHsvKmFzayBhYm91dCBuaWNvdGluZSovfVxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dOaWNvdGluZX0gb25IaWRlPXtoYW5kbGVDbG9zZU5pY290aW5lfT5cbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5TZWxlY3Qg4oCcWWVz4oCdIGlmIHlvdeKAmXZlIHVzZWQgYW55IG5pY290aW5lIHByb2R1Y3RzIGluIHRoZSBwYXN0IHllYXIuIE5pY290aW5lIHByb2R1Y3RzIGluY2x1ZGUgY2lnYXJldHRlcywgZS1jaWdhcmV0dGVzLCBjaWdhcnMsIHBpcGVzLCBjaGV3aW5nIHRvYmFjY28sIG5pY290aW5lIGd1bSBvciBwYXRjaGVzLCBldGMuPC9Nb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTmljb3RpbmV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgey8qYXNrIGFib3V0IHVzZWQgdG8gc21va2UqL31cbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93VXNlZFRvU21va2V9IG9uSGlkZT17aGFuZGxlQ2xvc2VVc2VkVG9TbW9rZX0+XG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+QW4gaW5zdXJhbmNlIGNvbXBhbnkgd2lsbCBjb25zaWRlciB5b3UgYSBzbW9rZXIgb25seSBpZiB5b3UgaGF2ZSBlbmdhZ2VkIGluIHNtb2tpbmcgb3ZlciB0aGUgbGFzdCAxMiBtb250aHMuIFNvIGlmIHlvdSBxdWl0IHNtb2tpbmcgb3ZlciBhIHllYXIgYWdvLCB3ZSBoYXZlIGdvb2QgbmV3cyBmb3IgeW91OiBObyBtYXR0ZXIgaG93IGxvbmcgeW91IHdlcmUgc21va2luZyBmb3Igb3IgaG93IG9mdGVuIHlvdSB3ZXJlIHNtb2tpbmcsIHlvdSBjYW4gc3BlY2lmeSDigJxOb+KAnSBmb3IgdGhpcyBxdWVzdGlvbi4gWW91ciBsaWZlIGluc3VyYW5jZSBwcmVtaXVtcyB3aWxsIGJlIHRoZSBzYW1lIGFzIHRob3NlIGZvciBhIG5vbi1zbW9rZXIhIFdhc27igJl0IHRoYXQgYW4gdW5leHBlY3RlZCBzdXJwcmlzZT88L01vZGFsLkJvZHk+XG4gICAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xvc2VVc2VkVG9TbW9rZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TobaccoForm.js\n");

/***/ })

})