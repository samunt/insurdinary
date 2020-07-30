webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/uuid/dist/esm-browser/index.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/md5.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/nil.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/parse.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/v3.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/version.js":
false,

/***/ "./reducers/form.reducer.js":
/*!**********************************!*\
  !*** ./reducers/form.reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case \"ADD_SPOUSE\":\n      console.log(action.spouse);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        spouse: action.spouse\n      }]);\n\n    case \"SPOUSE_AGE\":\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        spouseAge: action.spouseAge\n      }]);\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXIuanM/MWNmMyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInNwb3VzZSIsInNwb3VzZUFnZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUMvQixVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLLFlBQUw7QUFDSUMsYUFBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sQ0FBQ0ksTUFBbkI7QUFDQSxvSEFBWUwsS0FBWixJQUFtQjtBQUFDSyxjQUFNLEVBQUVKLE1BQU0sQ0FBQ0k7QUFBaEIsT0FBbkI7O0FBQ0osU0FBSyxZQUFMO0FBQ0ksb0hBQVlMLEtBQVosSUFBbUI7QUFBQ00saUJBQVMsRUFBRUwsTUFBTSxDQUFDSztBQUFuQixPQUFuQjs7QUFDSjtBQUNJLGFBQU9OLEtBQVA7QUFQUjtBQVNILENBVkQ7O0FBV2VELHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvZm9ybS5yZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICAgICAgY2FzZSBcIkFERF9TUE9VU0VcIjpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5zcG91c2UpXG4gICAgICAgICAgICByZXR1cm4gKFsuLi5zdGF0ZSwge3Nwb3VzZTogYWN0aW9uLnNwb3VzZX1dKTtcbiAgICAgICAgY2FzZSBcIlNQT1VTRV9BR0VcIjpcbiAgICAgICAgICAgIHJldHVybiAoWy4uLnN0YXRlLCB7c3BvdXNlQWdlOiBhY3Rpb24uc3BvdXNlQWdlfV0pXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/form.reducer.js\n");

/***/ })

})