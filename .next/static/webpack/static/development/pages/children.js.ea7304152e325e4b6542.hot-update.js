webpackHotUpdate("static/development/pages/children.js",{

/***/ "./reducers/form.reducer.js":
/*!**********************************!*\
  !*** ./reducers/form.reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case \"ADD_SPOUSE\":\n      console.log(action.spouse);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        spouse: action.spouse\n      }]);\n\n    case \"SPOUSE_AGE\":\n      console.log(action.spouseAge);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        spouseAge: action.spouseAge\n      }]);\n\n    case \"HAS_CHILDREN\":\n      console.log(action.hasChildren);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        hasChildren: action.hasChildren\n      }]);\n\n    case \"NUMBER_OF_CHILDREN\":\n      console.log(action.numberOfChildren);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        numberOfChildren: action.numberOfChildren\n      }]);\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXIuanM/MWNmMyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInNwb3VzZSIsInNwb3VzZUFnZSIsImhhc0NoaWxkcmVuIiwibnVtYmVyT2ZDaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUMvQixVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLLFlBQUw7QUFDSUMsYUFBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sQ0FBQ0ksTUFBbkI7QUFDQSxvSEFBWUwsS0FBWixJQUFtQjtBQUFDSyxjQUFNLEVBQUVKLE1BQU0sQ0FBQ0k7QUFBaEIsT0FBbkI7O0FBQ0osU0FBSyxZQUFMO0FBQ0lGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFNLENBQUNLLFNBQW5CO0FBQ0Esb0hBQVlOLEtBQVosSUFBbUI7QUFBQ00saUJBQVMsRUFBRUwsTUFBTSxDQUFDSztBQUFuQixPQUFuQjs7QUFDSixTQUFLLGNBQUw7QUFDSUgsYUFBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sQ0FBQ00sV0FBbkI7QUFDQSxvSEFBWVAsS0FBWixJQUFtQjtBQUFDTyxtQkFBVyxFQUFFTixNQUFNLENBQUNNO0FBQXJCLE9BQW5COztBQUNKLFNBQUssb0JBQUw7QUFDSUosYUFBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sQ0FBQ08sZ0JBQW5CO0FBQ0Esb0hBQVlSLEtBQVosSUFBbUI7QUFBQ1Esd0JBQWdCLEVBQUVQLE1BQU0sQ0FBQ087QUFBMUIsT0FBbkI7O0FBQ0o7QUFDSSxhQUFPUixLQUFQO0FBZFI7QUFnQkgsQ0FqQkQ7O0FBa0JlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL2Zvcm0ucmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgXCJBRERfU1BPVVNFXCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uc3BvdXNlKVxuICAgICAgICAgICAgcmV0dXJuIChbLi4uc3RhdGUsIHtzcG91c2U6IGFjdGlvbi5zcG91c2V9XSk7XG4gICAgICAgIGNhc2UgXCJTUE9VU0VfQUdFXCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uc3BvdXNlQWdlKVxuICAgICAgICAgICAgcmV0dXJuIChbLi4uc3RhdGUsIHtzcG91c2VBZ2U6IGFjdGlvbi5zcG91c2VBZ2V9XSk7XG4gICAgICAgIGNhc2UgXCJIQVNfQ0hJTERSRU5cIjpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5oYXNDaGlsZHJlbilcbiAgICAgICAgICAgIHJldHVybiAoWy4uLnN0YXRlLCB7aGFzQ2hpbGRyZW46IGFjdGlvbi5oYXNDaGlsZHJlbn1dKTtcbiAgICAgICAgY2FzZSBcIk5VTUJFUl9PRl9DSElMRFJFTlwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLm51bWJlck9mQ2hpbGRyZW4pXG4gICAgICAgICAgICByZXR1cm4gKFsuLi5zdGF0ZSwge251bWJlck9mQ2hpbGRyZW46IGFjdGlvbi5udW1iZXJPZkNoaWxkcmVufV0pXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/form.reducer.js\n");

/***/ })

})