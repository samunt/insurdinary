webpackHotUpdate("static/development/pages/quotes.js",{

/***/ "./components/QuotesPage.js":
/*!**********************************!*\
  !*** ./components/QuotesPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QuotesPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _SavingsForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SavingsForm.module.css */ \"./components/SavingsForm.module.css\");\n/* harmony import */ var _SavingsForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SavingsForm_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/FormContext */ \"./contexts/FormContext.js\");\n/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/ProgressBar */ \"./node_modules/react-bootstrap/esm/ProgressBar.js\");\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\n/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap-icons */ \"./node_modules/react-bootstrap-icons/dist/index.js\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nfunction QuotesPage() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_6__[\"DispatchContext\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showQuoteMessage = _useState[0],\n      setShowQuoteMessage = _useState[1];\n\n  var handleCloseQuoteMessage = function handleCloseQuoteMessage() {\n    return setShowQuoteMessage(false);\n  };\n\n  var policyPrice = [\"$25.99\", \"18.99\", \"32.99\", \"54.99\", \"29.99\"]; // progress bar\n\n  var now = 100;\n\n  var progressInstance = __jsx(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    style: {\n      height: '0.5rem'\n    },\n    now: now\n  });\n\n  return __jsx(\"div\", null, __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: {\n      span: 10,\n      offset: 1\n    },\n    md: {\n      span: 10,\n      offset: 1\n    },\n    lg: {\n      span: 10,\n      offset: 1\n    }\n  }, progressInstance)), __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: {\n      span: 8,\n      offset: 2\n    },\n    md: {\n      span: 6,\n      offset: 3\n    },\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(\"h2\", {\n    className: _SavingsForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n  }, \"Here are your quotes!\")), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 1,\n    md: 1,\n    lg: 1\n  }, __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_9__[\"QuestionCircle\"], {\n    size: 30,\n    onClick: function onClick() {\n      setShowQuoteMessage(true);\n    },\n    style: {\n      position: 'relative',\n      top: '18px',\n      right: '100%'\n    }\n  }))), ['Canada Life', 'Manulife', 'TD Term Life', 'Sunlife', 'RBC Insurance'].map(function (variant) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      xs: {\n        span: 10,\n        offset: 2\n      },\n      md: {\n        span: 6,\n        offset: 3\n      },\n      lg: {\n        span: 6,\n        offset: 3\n      }\n    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      bg: \"white\",\n      text: 'dark',\n      style: {\n        width: '18rem'\n      },\n      className: \"mb-2\"\n    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Header, null, \"Quote\"), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Body, null, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Title, null, variant, \" Policy \"), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Text, null, __jsx(\"h5\", null, variant, \" is offering a policy of\"), __jsx(\"h5\", null, \"35.99 per month for a term 20 policy\")))))));\n  }), \";\", __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    show: showQuoteMessage,\n    onHide: handleCloseQuoteMessage\n  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Body, null, \"These are mock quotes and do not necessarily reflect your final quote.\"), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Footer, null, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"outline-primary\",\n    onClick: handleCloseQuoteMessage\n  }, \"Close\"))));\n}\n\n_s(QuotesPage, \"zEGWgtsZ8TBgF0vh4X5m/eaZ1Q4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = QuotesPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"QuotesPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1F1b3Rlc1BhZ2UuanM/OGI5MSJdLCJuYW1lcyI6WyJRdW90ZXNQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiRGlzcGF0Y2hDb250ZXh0IiwidXNlU3RhdGUiLCJzaG93UXVvdGVNZXNzYWdlIiwic2V0U2hvd1F1b3RlTWVzc2FnZSIsImhhbmRsZUNsb3NlUXVvdGVNZXNzYWdlIiwicG9saWN5UHJpY2UiLCJub3ciLCJwcm9ncmVzc0luc3RhbmNlIiwiaGVpZ2h0Iiwic3BhbiIsIm9mZnNldCIsInN0eWxlcyIsImhlYWRlciIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJtYXAiLCJ2YXJpYW50Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUNqQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyxxRUFBRCxDQUEzQjs7QUFGaUMsa0JBR2VDLHNEQUFRLENBQUMsS0FBRCxDQUh2QjtBQUFBLE1BRzFCQyxnQkFIMEI7QUFBQSxNQUdSQyxtQkFIUTs7QUFJakMsTUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQjtBQUFBLFdBQU1ELG1CQUFtQixDQUFDLEtBQUQsQ0FBekI7QUFBQSxHQUFoQzs7QUFDQSxNQUFNRSxXQUFXLEdBQUcsQ0FBQyxRQUFELEVBQVcsT0FBWCxFQUFvQixPQUFwQixFQUE2QixPQUE3QixFQUFzQyxPQUF0QyxDQUFwQixDQUxpQyxDQU9qQzs7QUFDQSxNQUFNQyxHQUFHLEdBQUcsR0FBWjs7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxNQUFDLG1FQUFEO0FBQWEsU0FBSyxFQUFFO0FBQUNDLFlBQU0s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anMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TYXZpbmdzRm9ybS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvUm93XCI7XG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XG5pbXBvcnQgeyBEaXNwYXRjaENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvRm9ybUNvbnRleHRcIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Nb2RhbFwiO1xuaW1wb3J0IHtRdWVzdGlvbkNpcmNsZX0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC1pY29uc1wiO1xuaW1wb3J0IENhcmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NhcmQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVvdGVzUGFnZSgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoRGlzcGF0Y2hDb250ZXh0KTtcbiAgICBjb25zdCBbc2hvd1F1b3RlTWVzc2FnZSwgc2V0U2hvd1F1b3RlTWVzc2FnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgaGFuZGxlQ2xvc2VRdW90ZU1lc3NhZ2UgPSAoKSA9PiBzZXRTaG93UXVvdGVNZXNzYWdlKGZhbHNlKTtcbiAgICBjb25zdCBwb2xpY3lQcmljZSA9IFtcIiQyNS45OVwiLCBcIjE4Ljk5XCIsIFwiMzIuOTlcIiwgXCI1NC45OVwiLCBcIjI5Ljk5XCJdO1xuXG4gICAgLy8gcHJvZ3Jlc3MgYmFyXG4gICAgY29uc3Qgbm93ID0gMTAwO1xuICAgIGNvbnN0IHByb2dyZXNzSW5zdGFuY2UgPSA8UHJvZ3Jlc3NCYXIgc3R5bGU9e3toZWlnaHQ6ICcwLjVyZW0nfX0gbm93PXtub3d9IC8+O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAgICAgIHhzPXt7IHNwYW46IDEwLCBvZmZzZXQ6IDEgfX1cbiAgICAgICAgICAgICAgICAgICAgbWQ9e3sgc3BhbjogMTAsIG9mZnNldDogMSB9fVxuICAgICAgICAgICAgICAgICAgICBsZz17eyBzcGFuOiAxMCwgb2Zmc2V0OiAxIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7cHJvZ3Jlc3NJbnN0YW5jZX1cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2wgeHM9e3tzcGFuOiA4LCBvZmZzZXQ6IDJ9fSBtZD17eyBzcGFuOiA2LCBvZmZzZXQ6IDMgfX0gbGc9e3sgc3BhbjogNiwgb2Zmc2V0OiAzIH19PlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5IZXJlIGFyZSB5b3VyIHF1b3RlcyE8L2gyPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezF9IG1kPXsxfSBsZz17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkNpcmNsZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd1F1b3RlTWVzc2FnZSh0cnVlKX19XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICcxOHB4JywgcmlnaHQ6ICcxMDAlJ319XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICdDYW5hZGEgTGlmZScsXG4gICAgICAgICAgICAnTWFudWxpZmUnLFxuICAgICAgICAgICAgJ1REIFRlcm0gTGlmZScsXG4gICAgICAgICAgICAnU3VubGlmZScsXG4gICAgICAgICAgICAnUkJDIEluc3VyYW5jZScsXG4gICAgICAgICAgICBdLm1hcCgodmFyaWFudCkgPT4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXt7c3BhbjogMTAsIG9mZnNldDogMn19IG1kPXt7IHNwYW46IDYsIG9mZnNldDogMyB9fSBsZz17eyBzcGFuOiA2LCBvZmZzZXQ6IDMgfX0+XG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGJnPXtcIndoaXRlXCJ9XG4gICAgICAgICAgICAgICAgdGV4dD17J2RhcmsnfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMThyZW0nIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPlF1b3RlPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57dmFyaWFudH0gUG9saWN5IDwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57dmFyaWFudH0gaXMgb2ZmZXJpbmcgYSBwb2xpY3kgb2Y8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT4zNS45OSBwZXIgbW9udGggZm9yIGEgdGVybSAyMCBwb2xpY3k8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC8+XG5cbiAgICAgICAgICAgICkpfTtcbiAgICAgICAgICAgIHsvKnF1b3RlIG1lc3NhZ2UqL31cbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93UXVvdGVNZXNzYWdlfSBvbkhpZGU9e2hhbmRsZUNsb3NlUXVvdGVNZXNzYWdlfT5cbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5UaGVzZSBhcmUgbW9jayBxdW90ZXMgYW5kIGRvIG5vdCBuZWNlc3NhcmlseSByZWZsZWN0IHlvdXIgZmluYWwgcXVvdGUuPC9Nb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlUXVvdGVNZXNzYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/QuotesPage.js\n");

/***/ })

})