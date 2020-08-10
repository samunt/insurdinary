webpackHotUpdate("static/development/pages/tobacco.js",{

/***/ "./reducers/form.reducer.js":
/*!**********************************!*\
  !*** ./reducers/form.reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case \"ADD_SPOUSE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        spouse: action.spouse\n      });\n\n    case \"SPOUSE_AGE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        spouseAge: action.spouseAge\n      });\n\n    case \"HAS_CHILDREN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasChildren: action.hasChildren\n      });\n\n    case \"NUMBER_OF_CHILDREN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        numberOfChildren: action.numberOfChildren\n      });\n\n    case \"CHILDREN_AGE_ARRAY\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        childrenAgeArray: action.childrenAgeArray\n      });\n\n    case \"PAY_FOR_COLLEGE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        payForCollege: action.payForCollege\n      });\n\n    case \"DOB\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        dob: action.dob\n      });\n\n    case \"SEX\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        sex: action.sex\n      });\n\n    case \"TOBACCO\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        tobacco: action.tobacco\n      });\n\n    case \"HEALTH_CONDITION\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        health: action.health\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXIuanM/MWNmMyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwic3BvdXNlIiwic3BvdXNlQWdlIiwiaGFzQ2hpbGRyZW4iLCJudW1iZXJPZkNoaWxkcmVuIiwiY2hpbGRyZW5BZ2VBcnJheSIsInBheUZvckNvbGxlZ2UiLCJkb2IiLCJzZXgiLCJ0b2JhY2NvIiwiaGVhbHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUMvQixVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLLFlBQUw7QUFDSSw2Q0FBV0YsS0FBWDtBQUFrQkcsY0FBTSxFQUFFRixNQUFNLENBQUNFO0FBQWpDOztBQUNKLFNBQUssWUFBTDtBQUNJLDZDQUFXSCxLQUFYO0FBQWtCSSxpQkFBUyxFQUFFSCxNQUFNLENBQUNHO0FBQXBDOztBQUNKLFNBQUssY0FBTDtBQUNJLDZDQUFXSixLQUFYO0FBQWtCSyxtQkFBVyxFQUFFSixNQUFNLENBQUNJO0FBQXRDOztBQUNKLFNBQUssb0JBQUw7QUFDSSw2Q0FBV0wsS0FBWDtBQUFrQk0sd0JBQWdCLEVBQUVMLE1BQU0sQ0FBQ0s7QUFBM0M7O0FBQ0osU0FBSyxvQkFBTDtBQUNJLDZDQUFXTixLQUFYO0FBQWtCTyx3QkFBZ0IsRUFBRU4sTUFBTSxDQUFDTTtBQUEzQzs7QUFDSixTQUFLLGlCQUFMO0FBQ0ksNkNBQVdQLEtBQVg7QUFBa0JRLHFCQUFhLEVBQUVQLE1BQU0sQ0FBQ087QUFBeEM7O0FBQ0osU0FBSyxLQUFMO0FBQ0ksNkNBQVdSLEtBQVg7QUFBa0JTLFdBQUcsRUFBRVIsTUFBTSxDQUFDUTtBQUE5Qjs7QUFDSixTQUFLLEtBQUw7QUFDSSw2Q0FBV1QsS0FBWDtBQUFrQlUsV0FBRyxFQUFFVCxNQUFNLENBQUNTO0FBQTlCOztBQUNKLFNBQUssU0FBTDtBQUNJLDZDQUFXVixLQUFYO0FBQWtCVyxlQUFPLEVBQUVWLE1BQU0sQ0FBQ1U7QUFBbEM7O0FBQ0osU0FBSyxrQkFBTDtBQUNJLDZDQUFXWCxLQUFYO0FBQWtCWSxjQUFNLEVBQUVYLE1BQU0sQ0FBQ1c7QUFBakM7O0FBQ0o7QUFDSSxhQUFPWixLQUFQO0FBdEJSO0FBd0JILENBekJEOztBQTBCZUQsc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlIFwiQUREX1NQT1VTRVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BvdXNlOiBhY3Rpb24uc3BvdXNlfTtcbiAgICAgICAgY2FzZSBcIlNQT1VTRV9BR0VcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwb3VzZUFnZTogYWN0aW9uLnNwb3VzZUFnZX07XG4gICAgICAgIGNhc2UgXCJIQVNfQ0hJTERSRU5cIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhhc0NoaWxkcmVuOiBhY3Rpb24uaGFzQ2hpbGRyZW59O1xuICAgICAgICBjYXNlIFwiTlVNQkVSX09GX0NISUxEUkVOXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBudW1iZXJPZkNoaWxkcmVuOiBhY3Rpb24ubnVtYmVyT2ZDaGlsZHJlbn07XG4gICAgICAgIGNhc2UgXCJDSElMRFJFTl9BR0VfQVJSQVlcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGNoaWxkcmVuQWdlQXJyYXk6IGFjdGlvbi5jaGlsZHJlbkFnZUFycmF5fTtcbiAgICAgICAgY2FzZSBcIlBBWV9GT1JfQ09MTEVHRVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcGF5Rm9yQ29sbGVnZTogYWN0aW9uLnBheUZvckNvbGxlZ2V9O1xuICAgICAgICBjYXNlIFwiRE9CXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkb2I6IGFjdGlvbi5kb2J9O1xuICAgICAgICBjYXNlIFwiU0VYXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzZXg6IGFjdGlvbi5zZXh9O1xuICAgICAgICBjYXNlIFwiVE9CQUNDT1wiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdG9iYWNjbzogYWN0aW9uLnRvYmFjY299O1xuICAgICAgICBjYXNlIFwiSEVBTFRIX0NPTkRJVElPTlwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGVhbHRoOiBhY3Rpb24uaGVhbHRofTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/form.reducer.js\n");

/***/ })

})