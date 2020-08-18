webpackHotUpdate("static/development/pages/gender.js",{

/***/ "./components/DobForm.js":
false,

/***/ "./components/DobForm.module.css":
false,

/***/ "./components/GenderForm.js":
/*!**********************************!*\
  !*** ./components/GenderForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GenderForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _GenderForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GenderForm.module.css */ \"./components/GenderForm.module.css\");\n/* harmony import */ var _GenderForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_GenderForm_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/FormContext */ \"./contexts/FormContext.js\");\n/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/ProgressBar */ \"./node_modules/react-bootstrap/esm/ProgressBar.js\");\n/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap-icons */ \"./node_modules/react-bootstrap-icons/dist/index.js\");\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nfunction GenderForm() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_7__[\"DispatchContext\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      sex = _useState[0],\n      setSex = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showSex = _useState2[0],\n      setShowSex = _useState2[1];\n\n  var handleCloseSex = function handleCloseSex() {\n    return setShowSex(false);\n  };\n\n  var now = 40;\n\n  var progressInstance = __jsx(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    style: {\n      height: '0.5rem'\n    },\n    now: now\n  });\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    dispatch({\n      type: \"SEX\",\n      sex: sex\n    });\n  }, [sex]);\n  return __jsx(\"div\", null, __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: {\n      span: 10,\n      offset: 1\n    },\n    md: {\n      span: 10,\n      offset: 1\n    },\n    lg: {\n      span: 10,\n      offset: 1\n    }\n  }, progressInstance)), __jsx(\"br\", null), __jsx(\"h2\", {\n    className: _GenderForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n  }, \"What is your sex?\"), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 6,\n    md: {\n      span: 6\n    },\n    lg: {\n      span: 3,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"align-button\",\n    onClick: function onClick() {\n      setSex('Male');\n      router.push('/tobacco');\n    },\n    style: {\n      width: \"100%\"\n    },\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"Male\"), \" \"), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 6,\n    md: {\n      span: 6\n    },\n    lg: {\n      span: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"align-button\",\n    onClick: function onClick() {\n      setSex('Female');\n      dispatch({\n        type: \"SEX\",\n        sex: sex\n      });\n      router.push('/tobacco');\n    },\n    style: {\n      width: \"100%\"\n    },\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"Female\"), \" \")), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: {\n      span: 8,\n      offset: 2\n    },\n    md: {\n      span: 6,\n      offset: 3\n    },\n    lg: {\n      span: 6,\n      offset: 3\n    },\n    onClick: function onClick() {\n      setShowSex(true);\n    }\n  }, __jsx(\"h5\", {\n    className: _GenderForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n  }, __jsx(\"u\", null, \"Why do we ask about your sex?\"))), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 1,\n    md: 1,\n    lg: 1\n  }, __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_9__[\"QuestionCircle\"], {\n    size: 30,\n    onClick: function onClick() {\n      setShowSex(true);\n    },\n    style: {\n      position: 'relative',\n      top: '10px',\n      right: '100%'\n    }\n  })))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    show: showSex,\n    onHide: handleCloseSex\n  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Body, null, \"Men and women have different life expectancies, and therefore, insurers take gender into account when pricing life insurance policies.\"), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Footer, null, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"outline-primary\",\n    onClick: handleCloseSex\n  }, \"Close\"))));\n}\n\n_s(GenderForm, \"5XqxA7kg3PhOLTicmC5T37N4v2w=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = GenderForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"GenderForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dlbmRlckZvcm0uanM/YTgzZCJdLCJuYW1lcyI6WyJHZW5kZXJGb3JtIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiRGlzcGF0Y2hDb250ZXh0IiwidXNlU3RhdGUiLCJzZXgiLCJzZXRTZXgiLCJzaG93U2V4Iiwic2V0U2hvd1NleCIsImhhbmRsZUNsb3NlU2V4Iiwibm93IiwicHJvZ3Jlc3NJbnN0YW5jZSIsImhlaWdodCIsInVzZUVmZmVjdCIsInR5cGUiLCJzcGFuIiwib2Zmc2V0Iiwic3R5bGVzIiwiaGVhZGVyIiwicHVzaCIsIndpZHRoIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQ2pDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLHdEQUFVLENBQUNDLHFFQUFELENBQTNCOztBQUZpQyxrQkFHWEMsc0RBQVEsRUFIRztBQUFBLE1BRzFCQyxHQUgwQjtBQUFBLE1BR3JCQyxNQUhxQjs7QUFBQSxtQkFJSEYsc0RBQVEsQ0FBQyxLQUFELENBSkw7QUFBQSxNQUkxQkcsT0FKMEI7QUFBQSxNQUlqQkMsVUFKaUI7O0FBS2pDLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxXQUFNRCxVQUFVLENBQUMsS0FBRCxDQUFoQjtBQUFBLEdBQXZCOztBQUVBLE1BQU1FLEdBQUcsR0FBRyxFQUFaOztBQUNBLE1BQU1DLGdCQUFnQixHQUFHLE1BQUMsbUVBQUQ7QUFBYSxTQUFLLEVBQUU7QUFBQ0MsWUFBTSxFQUFFO0FBQVQsS0FBcEI7QUFBd0MsT0FBRyxFQUFFRjtBQUE3QyxJQUF6Qjs7QUFFQUcseURBQVMs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RTtBQUFDYSxjQUFRLEVBQUUsVUFBWDtBQUF1QkMsU0FBRyxFQUFFLE1BQTVCO0FBQW9DQyxXQUFLLEVBQUU7QUFBM0M7QUFIWCxJQURKLENBTEosQ0FoQ0osQ0FiSixFQTRESSxNQUFDLDhEQUFEO0FBQU8sUUFBSSxFQUFFaEIsT0FBYjtBQUFzQixVQUFNLEVBQUVFO0FBQTlCLEtBQ0ksTUFBQyw4REFBRCxDQUFPLElBQVAsaUpBREosRUFFSSxNQUFDLDhEQUFELENBQU8sTUFBUCxRQUNJLE1BQUMsOERBQUQ7QUFBUSxXQUFPLEVBQUMsaUJBQWhCO0FBQWtDLFdBQU8sRUFBRUE7QUFBM0MsYUFESixDQUZKLENBNURKLENBREo7QUF3RUg7O0dBdEZ1QlgsVTtVQUNMRSxxRDs7O0tBREtGLFUiLCJmaWxlIjoiLi9jb21wb25lbnRzL0dlbmRlckZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9HZW5kZXJGb3JtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcbmltcG9ydCB7IERpc3BhdGNoQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9Gb3JtQ29udGV4dFwiO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCB7UXVlc3Rpb25DaXJjbGV9IGZyb20gXCJyZWFjdC1ib290c3RyYXAtaWNvbnNcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL01vZGFsXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2VuZGVyRm9ybSgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoRGlzcGF0Y2hDb250ZXh0KTtcbiAgICBjb25zdCBbc2V4LCBzZXRTZXhdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbc2hvd1NleCwgc2V0U2hvd1NleF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgaGFuZGxlQ2xvc2VTZXggPSAoKSA9PiBzZXRTaG93U2V4KGZhbHNlKTtcblxuICAgIGNvbnN0IG5vdyA9IDQwO1xuICAgIGNvbnN0IHByb2dyZXNzSW5zdGFuY2UgPSA8UHJvZ3Jlc3NCYXIgc3R5bGU9e3toZWlnaHQ6ICcwLjVyZW0nfX0gbm93PXtub3d9IC8+O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFWFwiLCBzZXg6IHNleCB9KTtcbiAgICB9LCBbc2V4XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2xcbiAgICAgICAgICAgICAgICAgICAgeHM9e3sgc3BhbjogMTAsIG9mZnNldDogMSB9fVxuICAgICAgICAgICAgICAgICAgICBtZD17eyBzcGFuOiAxMCwgb2Zmc2V0OiAxIH19XG4gICAgICAgICAgICAgICAgICAgIGxnPXt7IHNwYW46IDEwLCBvZmZzZXQ6IDEgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9ncmVzc0luc3RhbmNlfVxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PldoYXQgaXMgeW91ciBzZXg/PC9oMj5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gbWQ9e3sgc3BhbjogNiB9fSBsZz17eyBzcGFuOiAzLCBvZmZzZXQ6IDMgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNleCgnTWFsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL3RvYmFjY28nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFsZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gbWQ9e3sgc3BhbjogNiB9fSBsZz17eyBzcGFuOiAzIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2V4KCdGZW1hbGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFWFwiLCBzZXg6IHNleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy90b2JhY2NvJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZlbWFsZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXt7c3BhbjogOCwgb2Zmc2V0OiAyfX0gbWQ9e3sgc3BhbjogNiwgb2Zmc2V0OiAzIH19IGxnPXt7IHNwYW46IDYsIG9mZnNldDogMyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTaG93U2V4KHRydWUpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT48dT5XaHkgZG8gd2UgYXNrIGFib3V0IHlvdXIgc2V4PzwvdT48L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MX0gbWQ9ezF9IGxnPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkNpcmNsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTaG93U2V4KHRydWUpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICcxMHB4JywgcmlnaHQ6ICcxMDAlJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgey8qYXNrIGFib3V0IHNleCovfVxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dTZXh9IG9uSGlkZT17aGFuZGxlQ2xvc2VTZXh9PlxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5Pk1lbiBhbmQgd29tZW4gaGF2ZSBkaWZmZXJlbnQgbGlmZSBleHBlY3RhbmNpZXMsIGFuZCB0aGVyZWZvcmUsIGluc3VyZXJzIHRha2UgZ2VuZGVyIGludG8gYWNjb3VudCB3aGVuIHByaWNpbmcgbGlmZSBpbnN1cmFuY2UgcG9saWNpZXMuPC9Nb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlU2V4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC9kaXY+XG5cbilcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GenderForm.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/create-react-context/lib/implementation.js":
false,

/***/ "./node_modules/create-react-context/lib/index.js":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/DobForm.module.css":
false,

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/setUTCDay/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/setUTCISODay/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/setUTCISOWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/setUTCWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
false,

/***/ "./node_modules/date-fns/esm/addDays/index.js":
false,

/***/ "./node_modules/date-fns/esm/addHours/index.js":
false,

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/addMinutes/index.js":
false,

/***/ "./node_modules/date-fns/esm/addMonths/index.js":
false,

/***/ "./node_modules/date-fns/esm/addWeeks/index.js":
false,

/***/ "./node_modules/date-fns/esm/addYears/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInCalendarWeeks/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInCalendarYears/index.js":
false,

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
false,

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/endOfWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/format/index.js":
false,

/***/ "./node_modules/date-fns/esm/getDate/index.js":
false,

/***/ "./node_modules/date-fns/esm/getDay/index.js":
false,

/***/ "./node_modules/date-fns/esm/getDaysInMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/getHours/index.js":
false,

/***/ "./node_modules/date-fns/esm/getMinutes/index.js":
false,

/***/ "./node_modules/date-fns/esm/getMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/getQuarter/index.js":
false,

/***/ "./node_modules/date-fns/esm/getSeconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/getTime/index.js":
false,

/***/ "./node_modules/date-fns/esm/getWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/getWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/getYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/isAfter/index.js":
false,

/***/ "./node_modules/date-fns/esm/isBefore/index.js":
false,

/***/ "./node_modules/date-fns/esm/isDate/index.js":
false,

/***/ "./node_modules/date-fns/esm/isEqual/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSameMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSameQuarter/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSameYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/isValid/index.js":
false,

/***/ "./node_modules/date-fns/esm/isWithinInterval/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
false,

/***/ "./node_modules/date-fns/esm/max/index.js":
false,

/***/ "./node_modules/date-fns/esm/min/index.js":
false,

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/index.js":
false,

/***/ "./node_modules/date-fns/esm/parse/index.js":
false,

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
false,

/***/ "./node_modules/date-fns/esm/setHours/index.js":
false,

/***/ "./node_modules/date-fns/esm/setMinutes/index.js":
false,

/***/ "./node_modules/date-fns/esm/setMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/setQuarter/index.js":
false,

/***/ "./node_modules/date-fns/esm/setSeconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/setYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfQuarter/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/subDays/index.js":
false,

/***/ "./node_modules/date-fns/esm/subHours/index.js":
false,

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/subMinutes/index.js":
false,

/***/ "./node_modules/date-fns/esm/subMonths/index.js":
false,

/***/ "./node_modules/date-fns/esm/subWeeks/index.js":
false,

/***/ "./node_modules/date-fns/esm/subYears/index.js":
false,

/***/ "./node_modules/date-fns/esm/toDate/index.js":
false,

/***/ "./node_modules/deep-equal/index.js":
false,

/***/ "./node_modules/define-properties/index.js":
false,

/***/ "./node_modules/es-abstract/GetIntrinsic.js":
false,

/***/ "./node_modules/es-abstract/helpers/callBind.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/gud/index.js":
false,

/***/ "./node_modules/has-symbols/index.js":
false,

/***/ "./node_modules/has-symbols/shams.js":
false,

/***/ "./node_modules/is-arguments/index.js":
false,

/***/ "./node_modules/is-date-object/index.js":
false,

/***/ "./node_modules/is-regex/index.js":
false,

/***/ "./node_modules/object-is/implementation.js":
false,

/***/ "./node_modules/object-is/index.js":
false,

/***/ "./node_modules/object-is/polyfill.js":
false,

/***/ "./node_modules/object-is/shim.js":
false,

/***/ "./node_modules/object-keys/implementation.js":
false,

/***/ "./node_modules/object-keys/index.js":
false,

/***/ "./node_modules/object-keys/isArguments.js":
false,

/***/ "./node_modules/popper.js/dist/esm/popper.js":
false,

/***/ "./node_modules/prop-types-extra/lib/all.js":
false,

/***/ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Feedback.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Form.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormCheck.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormCheckInput.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormCheckLabel.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormContext.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormControl.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormFile.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormFileInput.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormFileLabel.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormGroup.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormLabel.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormText.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Switch.js":
false,

/***/ "./node_modules/react-datepicker/dist/react-datepicker.min.js":
false,

/***/ "./node_modules/react-onclickoutside/dist/react-onclickoutside.es.js":
false,

/***/ "./node_modules/react-popper/lib/esm/Manager.js":
false,

/***/ "./node_modules/react-popper/lib/esm/Popper.js":
false,

/***/ "./node_modules/react-popper/lib/esm/Reference.js":
false,

/***/ "./node_modules/react-popper/lib/esm/index.js":
false,

/***/ "./node_modules/react-popper/lib/esm/utils.js":
false,

/***/ "./node_modules/regexp.prototype.flags/implementation.js":
false,

/***/ "./node_modules/regexp.prototype.flags/index.js":
false,

/***/ "./node_modules/regexp.prototype.flags/polyfill.js":
false,

/***/ "./node_modules/regexp.prototype.flags/shim.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false

})