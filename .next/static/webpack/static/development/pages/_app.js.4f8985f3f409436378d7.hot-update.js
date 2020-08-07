webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/form.reducer.js":
/*!**********************************!*\
  !*** ./reducers/form.reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case \"ADD_SPOUSE\":\n      console.log(action.spouse);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        spouse: action.spouse\n      }]);\n\n    case \"SPOUSE_AGE\":\n      console.log(action.spouseAge);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        spouseAge: action.spouseAge\n      }]);\n\n    case \"HAS_CHILDREN\":\n      console.log(action.hasChildren);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        hasChildren: action.hasChildren\n      }]);\n\n    case \"NUMBER_OF_CHILDREN\":\n      console.log(action.numberOfChildren);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        numberOfChildren: action.numberOfChildren\n      }]);\n\n    case \"CHILDREN_AGE_ARRAY\":\n      console.log('children age array', action.childrenAgeArray);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        childrenAgeArray: action.childrenAgeArray\n      }]);\n\n    case \"PAY_FOR_COLLEGE\":\n      console.log('pay for college', action.payForCollege);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        payForCollege: action.payForCollege\n      }]);\n\n    case \"DATE_OF_BIRTH\":\n      console.log('pay for college', action.dob);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        dob: action.dob\n      }]);\n\n    case \"SEX\":\n      console.log('sex', action.sexForm);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        sex: action.sexForm\n      }]);\n\n    case \"TOBACCO\":\n      console.log('tobacco', action.tobacco);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        tobacco: action.tobacco\n      }]);\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXIuanM/MWNmMyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInNwb3VzZSIsInNwb3VzZUFnZSIsImhhc0NoaWxkcmVuIiwibnVtYmVyT2ZDaGlsZHJlbiIsImNoaWxkcmVuQWdlQXJyYXkiLCJwYXlGb3JDb2xsZWdlIiwiZG9iIiwic2V4Rm9ybSIsInNleCIsInRvYmFjY28iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDL0IsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBSyxZQUFMO0FBQ0lDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFNLENBQUNJLE1BQW5CO0FBQ0Esb0hBQVlMLEtBQVosSUFBbUI7QUFBQ0ssY0FBTSxFQUFFSixNQUFNLENBQUNJO0FBQWhCLE9BQW5COztBQUNKLFNBQUssWUFBTDtBQUNJRixhQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBTSxDQUFDSyxTQUFuQjtBQUNBLG9IQUFZTixLQUFaLElBQW1CO0FBQUNNLGlCQUFTLEVBQUVMLE1BQU0sQ0FBQ0s7QUFBbkIsT0FBbkI7O0FBQ0osU0FBSyxjQUFMO0FBQ0lILGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFNLENBQUNNLFdBQW5CO0FBQ0Esb0hBQVlQLEtBQVosSUFBbUI7QUFBQ08sbUJBQVcsRUFBRU4sTUFBTSxDQUFDTTtBQUFyQixPQUFuQjs7QUFDSixTQUFLLG9CQUFMO0FBQ0lKLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFNLENBQUNPLGdCQUFuQjtBQUNBLG9IQUFZUixLQUFaLElBQW1CO0FBQUNRLHdCQUFnQixFQUFFUCxNQUFNLENBQUNPO0FBQTFCLE9BQW5COztBQUNKLFNBQUssb0JBQUw7QUFDSUwsYUFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBaUNILE1BQU0sQ0FBQ1EsZ0JBQXhDO0FBQ0Esb0hBQVlULEtBQVosSUFBbUI7QUFBQ1Msd0JBQWdCLEVBQUVSLE1BQU0sQ0FBQ1E7QUFBMUIsT0FBbkI7O0FBQ0osU0FBSyxpQkFBTDtBQUNJTixhQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkgsTUFBTSxDQUFDUyxhQUF0QztBQUNBLG9IQUFZVixLQUFaLElBQW1CO0FBQUNVLHFCQUFhLEVBQUVULE1BQU0sQ0FBQ1M7QUFBdkIsT0FBbkI7O0FBQ0osU0FBSyxlQUFMO0FBQ0lQLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCSCxNQUFNLENBQUNVLEdBQXRDO0FBQ0Esb0hBQVlYLEtBQVosSUFBbUI7QUFBQ1csV0FBRyxFQUFFVixNQUFNLENBQUNVO0FBQWIsT0FBbkI7O0FBQ0osU0FBSyxLQUFMO0FBQ0lSLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJILE1BQU0sQ0FBQ1csT0FBMUI7QUFDQSxvSEFBWVosS0FBWixJQUFtQjtBQUFDYSxXQUFHLEVBQUVaLE1BQU0sQ0FBQ1c7QUFBYixPQUFuQjs7QUFDSixTQUFLLFNBQUw7QUFDSVQsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkgsTUFBTSxDQUFDYSxPQUE5QjtBQUNBLG9IQUFZZCxLQUFaLElBQW1CO0FBQUNjLGVBQU8sRUFBRWIsTUFBTSxDQUFDYTtBQUFqQixPQUFuQjs7QUFDSjtBQUNJLGFBQU9kLEtBQVA7QUE3QlI7QUErQkgsQ0FoQ0Q7O0FBaUNlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL2Zvcm0ucmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgXCJBRERfU1BPVVNFXCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uc3BvdXNlKTtcbiAgICAgICAgICAgIHJldHVybiAoWy4uLnN0YXRlLCB7c3BvdXNlOiBhY3Rpb24uc3BvdXNlfV0pO1xuICAgICAgICBjYXNlIFwiU1BPVVNFX0FHRVwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLnNwb3VzZUFnZSk7XG4gICAgICAgICAgICByZXR1cm4gKFsuLi5zdGF0ZSwge3Nwb3VzZUFnZTogYWN0aW9uLnNwb3VzZUFnZX1dKTtcbiAgICAgICAgY2FzZSBcIkhBU19DSElMRFJFTlwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmhhc0NoaWxkcmVuKTtcbiAgICAgICAgICAgIHJldHVybiAoWy4uLnN0YXRlLCB7aGFzQ2hpbGRyZW46IGFjdGlvbi5oYXNDaGlsZHJlbn1dKTtcbiAgICAgICAgY2FzZSBcIk5VTUJFUl9PRl9DSElMRFJFTlwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLm51bWJlck9mQ2hpbGRyZW4pO1xuICAgICAgICAgICAgcmV0dXJuIChbLi4uc3RhdGUsIHtudW1iZXJPZkNoaWxkcmVuOiBhY3Rpb24ubnVtYmVyT2ZDaGlsZHJlbn1dKTtcbiAgICAgICAgY2FzZSBcIkNISUxEUkVOX0FHRV9BUlJBWVwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkcmVuIGFnZSBhcnJheScsYWN0aW9uLmNoaWxkcmVuQWdlQXJyYXkpO1xuICAgICAgICAgICAgcmV0dXJuIChbLi4uc3RhdGUsIHtjaGlsZHJlbkFnZUFycmF5OiBhY3Rpb24uY2hpbGRyZW5BZ2VBcnJheX1dKTtcbiAgICAgICAgY2FzZSBcIlBBWV9GT1JfQ09MTEVHRVwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BheSBmb3IgY29sbGVnZScsIGFjdGlvbi5wYXlGb3JDb2xsZWdlKTtcbiAgICAgICAgICAgIHJldHVybiAoWy4uLnN0YXRlLCB7cGF5Rm9yQ29sbGVnZTogYWN0aW9uLnBheUZvckNvbGxlZ2V9XSk7XG4gICAgICAgIGNhc2UgXCJEQVRFX09GX0JJUlRIXCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncGF5IGZvciBjb2xsZWdlJywgYWN0aW9uLmRvYik7XG4gICAgICAgICAgICByZXR1cm4gKFsuLi5zdGF0ZSwge2RvYjogYWN0aW9uLmRvYn1dKTtcbiAgICAgICAgY2FzZSBcIlNFWFwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NleCcsIGFjdGlvbi5zZXhGb3JtKTtcbiAgICAgICAgICAgIHJldHVybiAoWy4uLnN0YXRlLCB7c2V4OiBhY3Rpb24uc2V4Rm9ybX1dKTtcbiAgICAgICAgY2FzZSBcIlRPQkFDQ09cIjpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2JhY2NvJywgYWN0aW9uLnRvYmFjY28pO1xuICAgICAgICAgICAgcmV0dXJuIChbLi4uc3RhdGUsIHt0b2JhY2NvOiBhY3Rpb24udG9iYWNjb31dKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/form.reducer.js\n");

/***/ })

})