webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/form.reducer.js":
/*!**********************************!*\
  !*** ./reducers/form.reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case \"ADD_SPOUSE\":\n      console.log(action.spouse);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        spouse: action.spouse\n      }]);\n\n    case \"SPOUSE_AGE\":\n      console.log(action.spouseAge);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        spouseAge: action.spouseAge\n      }]);\n\n    case \"HAS_CHILDREN\":\n      console.log(action.hasChildren);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        hasChildren: action.hasChildren\n      }]);\n\n    case \"NUMBER_OF_CHILDREN\":\n      console.log(action.numberOfChildren);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        numberOfChildren: action.numberOfChildren\n      }]);\n\n    case \"CHILDREN_AGE_ARRAY\":\n      console.log('children age array', action.childrenAgeArray);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        childrenAgeArray: action.childrenAgeArray\n      }]);\n\n    case \"PAY_FOR_COLLEGE\":\n      console.log('pay for college', action.payForCollege);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        payForCollege: action.payForCollege\n      }]);\n\n    case \"DATE_OF_BIRTH\":\n      console.log('pay for college', action.dob);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        dob: action.dob\n      }]);\n\n    case \"SEX\":\n      console.log('sex', action.sexForm);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        sex: action.sexForm\n      }]);\n\n    case \"TOBACCO\":\n      console.log('tobacco', action.tobacco);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        tobacco: action.tobacco\n      }]);\n\n    case \"HEALTH_CONDITION\":\n      console.log('health', action.health);\n      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state), [{\n        health: action.health\n      }]), console.log(state);\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXIuanM/MWNmMyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInNwb3VzZSIsInNwb3VzZUFnZSIsImhhc0NoaWxkcmVuIiwibnVtYmVyT2ZDaGlsZHJlbiIsImNoaWxkcmVuQWdlQXJyYXkiLCJwYXlGb3JDb2xsZWdlIiwiZG9iIiwic2V4Rm9ybSIsInNleCIsInRvYmFjY28iLCJoZWFsdGgiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDL0IsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBSyxZQUFMO0FBQ0lDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFNLENBQUNJLE1BQW5CO0FBQ0Esb0hBQVlMLEtBQVosSUFBbUI7QUFBQ0ssY0FBTSxFQUFFSixNQUFNLENBQUNJO0FBQWhCLE9BQW5COztBQUNKLFNBQUssWUFBTDtBQUNJRixhQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBTSxDQUFDSyxTQUFuQjtBQUNBLG9IQUFZTixLQUFaLElBQW1CO0FBQUNNLGlCQUFTLEVBQUVMLE1BQU0sQ0FBQ0s7QUFBbkIsT0FBbkI7O0FBQ0osU0FBSyxjQUFMO0FBQ0lILGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFNLENBQUNNLFdBQW5CO0FBQ0Esb0hBQVlQLEtBQVosSUFBbUI7QUFBQ08sbUJBQVcsRUFBRU4sTUFBTSxDQUFDTTtBQUFyQixPQUFuQjs7QUFDSixTQUFLLG9CQUFMO0FBQ0lKLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFNLENBQUNPLGdCQUFuQjtBQUNBLG9IQUFZUixLQUFaLElBQW1CO0FBQUNRLHdCQUFnQixFQUFFUCxNQUFNLENBQUNPO0FBQTFCLE9BQW5COztBQUNKLFNBQUssb0JBQUw7QUFDSUwsYUFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBaUNILE1BQU0sQ0FBQ1EsZ0JBQXhDO0FBQ0Esb0hBQVlULEtBQVosSUFBbUI7QUFBQ1Msd0JBQWdCLEVBQUVSLE1BQU0sQ0FBQ1E7QUFBMUIsT0FBbkI7O0FBQ0osU0FBSyxpQkFBTDtBQUNJTixhQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkgsTUFBTSxDQUFDUyxhQUF0QztBQUNBLG9IQUFZVixLQUFaLElBQW1CO0FBQUNVLHFCQUFhLEVBQUVULE1BQU0sQ0FBQ1M7QUFBdkIsT0FBbkI7O0FBQ0osU0FBSyxlQUFMO0FBQ0lQLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCSCxNQUFNLENBQUNVLEdBQXRDO0FBQ0Esb0hBQVlYLEtBQVosSUFBbUI7QUFBQ1csV0FBRyxFQUFFVixNQUFNLENBQUNVO0FBQWIsT0FBbkI7O0FBQ0osU0FBSyxLQUFMO0FBQ0lSLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJILE1BQU0sQ0FBQ1csT0FBMUI7QUFDQSxvSEFBWVosS0FBWixJQUFtQjtBQUFDYSxXQUFHLEVBQUVaLE1BQU0sQ0FBQ1c7QUFBYixPQUFuQjs7QUFDSixTQUFLLFNBQUw7QUFDSVQsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkgsTUFBTSxDQUFDYSxPQUE5QjtBQUNBLG9IQUFZZCxLQUFaLElBQW1CO0FBQUNjLGVBQU8sRUFBRWIsTUFBTSxDQUFDYTtBQUFqQixPQUFuQjs7QUFDSixTQUFLLGtCQUFMO0FBQ0lYLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JILE1BQU0sQ0FBQ2MsTUFBN0I7QUFDQSxhQUFRLHVHQUFJZixLQUFKLElBQVc7QUFBQ2UsY0FBTSxFQUFFZCxNQUFNLENBQUNjO0FBQWhCLE9BQVgsSUFBcUNaLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaLENBQTdDOztBQUNKO0FBQ0ksYUFBT0EsS0FBUDtBQWhDUjtBQWtDSCxDQW5DRDs7QUFvQ2VELHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvZm9ybS5yZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICAgICAgY2FzZSBcIkFERF9TUE9VU0VcIjpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5zcG91c2UpO1xuICAgICAgICAgICAgcmV0dXJuIChbLi4uc3RhdGUsIHtzcG91c2U6IGFjdGlvbi5zcG91c2V9XSk7XG4gICAgICAgIGNhc2UgXCJTUE9VU0VfQUdFXCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uc3BvdXNlQWdlKTtcbiAgICAgICAgICAgIHJldHVybiAoWy4uLnN0YXRlLCB7c3BvdXNlQWdlOiBhY3Rpb24uc3BvdXNlQWdlfV0pO1xuICAgICAgICBjYXNlIFwiSEFTX0NISUxEUkVOXCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uaGFzQ2hpbGRyZW4pO1xuICAgICAgICAgICAgcmV0dXJuIChbLi4uc3RhdGUsIHtoYXNDaGlsZHJlbjogYWN0aW9uLmhhc0NoaWxkcmVufV0pO1xuICAgICAgICBjYXNlIFwiTlVNQkVSX09GX0NISUxEUkVOXCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24ubnVtYmVyT2ZDaGlsZHJlbik7XG4gICAgICAgICAgICByZXR1cm4gKFsuLi5zdGF0ZSwge251bWJlck9mQ2hpbGRyZW46IGFjdGlvbi5udW1iZXJPZkNoaWxkcmVufV0pO1xuICAgICAgICBjYXNlIFwiQ0hJTERSRU5fQUdFX0FSUkFZXCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGRyZW4gYWdlIGFycmF5JyxhY3Rpb24uY2hpbGRyZW5BZ2VBcnJheSk7XG4gICAgICAgICAgICByZXR1cm4gKFsuLi5zdGF0ZSwge2NoaWxkcmVuQWdlQXJyYXk6IGFjdGlvbi5jaGlsZHJlbkFnZUFycmF5fV0pO1xuICAgICAgICBjYXNlIFwiUEFZX0ZPUl9DT0xMRUdFXCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncGF5IGZvciBjb2xsZWdlJywgYWN0aW9uLnBheUZvckNvbGxlZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIChbLi4uc3RhdGUsIHtwYXlGb3JDb2xsZWdlOiBhY3Rpb24ucGF5Rm9yQ29sbGVnZX1dKTtcbiAgICAgICAgY2FzZSBcIkRBVEVfT0ZfQklSVEhcIjpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXkgZm9yIGNvbGxlZ2UnLCBhY3Rpb24uZG9iKTtcbiAgICAgICAgICAgIHJldHVybiAoWy4uLnN0YXRlLCB7ZG9iOiBhY3Rpb24uZG9ifV0pO1xuICAgICAgICBjYXNlIFwiU0VYXCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2V4JywgYWN0aW9uLnNleEZvcm0pO1xuICAgICAgICAgICAgcmV0dXJuIChbLi4uc3RhdGUsIHtzZXg6IGFjdGlvbi5zZXhGb3JtfV0pO1xuICAgICAgICBjYXNlIFwiVE9CQUNDT1wiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvYmFjY28nLCBhY3Rpb24udG9iYWNjbyk7XG4gICAgICAgICAgICByZXR1cm4gKFsuLi5zdGF0ZSwge3RvYmFjY286IGFjdGlvbi50b2JhY2NvfV0pO1xuICAgICAgICBjYXNlIFwiSEVBTFRIX0NPTkRJVElPTlwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlYWx0aCcsIGFjdGlvbi5oZWFsdGgpO1xuICAgICAgICAgICAgcmV0dXJuIChbLi4uc3RhdGUsIHtoZWFsdGg6IGFjdGlvbi5oZWFsdGh9XSwgY29uc29sZS5sb2coc3RhdGUpKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/form.reducer.js\n");

/***/ })

})