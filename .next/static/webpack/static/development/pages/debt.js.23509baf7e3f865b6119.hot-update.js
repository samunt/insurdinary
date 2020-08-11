webpackHotUpdate("static/development/pages/debt.js",{

/***/ "./reducers/form.reducer.js":
/*!**********************************!*\
  !*** ./reducers/form.reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case \"ADD_SPOUSE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        spouse: action.spouse\n      });\n\n    case \"SPOUSE_AGE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        spouseAge: action.spouseAge\n      });\n\n    case \"HAS_CHILDREN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasChildren: action.hasChildren\n      });\n\n    case \"NUMBER_OF_CHILDREN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        numberOfChildren: action.numberOfChildren\n      });\n\n    case \"CHILDREN_AGE_ARRAY\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        childrenAgeArray: action.childrenAgeArray\n      });\n\n    case \"PAY_FOR_COLLEGE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        payForCollege: action.payForCollege\n      });\n\n    case \"DOB\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        dob: action.dob\n      });\n\n    case \"SEX\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        sex: action.sex\n      });\n\n    case \"TOBACCO\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        tobacco: action.tobacco\n      });\n\n    case \"HEALTH_CONDITION\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        healthCondition: action.healthCondition\n      });\n\n    case \"YOUR_INCOME\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        yourIncome: action.yourIncome\n      });\n\n    case \"SPOUSE_INCOME\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        spouseIncome: action.spouseIncome\n      });\n\n    case \"RENT_OR_OWN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        rentOrOwn: action.rentOrOwn\n      });\n\n    case \"MONTHLY_RENT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        monthlyRent: action.monthlyRent\n      });\n\n    case \"MORTGAGE_CURRENT_BALANCE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mortgageCurrentBalance: action.mortgageCurrentBalance\n      });\n\n    case \"MORTGAGE_MONTHLY_PAYMENT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mortgageMonthlyPayment: action.mortgageMonthlyPayment\n      });\n\n    case \"LIFE_INSURANCE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        lifeInsurance: action.lifeInsurance\n      });\n\n    case \"LIFE_INSURANCE_EMPLOYER\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        lifeInsuranceEmployer: action.lifeInsuranceEmployer\n      });\n\n    case \"LIFE_INSURANCE_PERSONAL\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        lifeInsurancePersonal: action.lifeInsurancePersonal\n      });\n\n    case \"HAS_SAVINGS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasSavings: action.hasSavings\n      });\n\n    case \"HAS_RETIREMENT_SAVINGS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasRetirementSavings: action.hasRetirementSavings\n      });\n\n    case \"HAS_NON_RETIREMENT_SAVINGS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasNonRetirementSavings: action.hasNonRetirementSavings\n      });\n\n    case \"HAS_DEBT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debt: action.debt\n      });\n\n    case \"DEBT_CREDIT_CARD\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debtCreditCard: action.debtCreditCard\n      });\n\n    case \"DEBT_STUDENT_LOAN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debtStudentLoan: action.debtStudentLoan\n      });\n\n    case \"DEBT_HOME_EQUITY\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debtHomeEquity: action.debtHomeEquity\n      });\n\n    case \"DEBT_LINE_OF_CREDIT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debtLineOfCredit: action.debtLineOfCredit\n      });\n\n    case \"DEBT_OTHER\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debtOther: action.debtOther\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXIuanM/MWNmMyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwic3BvdXNlIiwic3BvdXNlQWdlIiwiaGFzQ2hpbGRyZW4iLCJudW1iZXJPZkNoaWxkcmVuIiwiY2hpbGRyZW5BZ2VBcnJheSIsInBheUZvckNvbGxlZ2UiLCJkb2IiLCJzZXgiLCJ0b2JhY2NvIiwiaGVhbHRoQ29uZGl0aW9uIiwieW91ckluY29tZSIsInNwb3VzZUluY29tZSIsInJlbnRPck93biIsIm1vbnRobHlSZW50IiwibW9ydGdhZ2VDdXJyZW50QmFsYW5jZSIsIm1vcnRnYWdlTW9udGhseVBheW1lbnQiLCJsaWZlSW5zdXJhbmNlIiwibGlmZUluc3VyYW5jZUVtcGxveWVyIiwibGlmZUluc3VyYW5jZVBlcnNvbmFsIiwiaGFzU2F2aW5ncyIsImhhc1JldGlyZW1lbnRTYXZpbmdzIiwiaGFzTm9uUmV0aXJlbWVudFNhdmluZ3MiLCJkZWJ0IiwiZGVidENyZWRpdENhcmQiLCJkZWJ0U3R1ZGVudExvYW4iLCJkZWJ0SG9tZUVxdWl0eSIsImRlYnRMaW5lT2ZDcmVkaXQiLCJkZWJ0T3RoZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQy9CLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFNBQUssWUFBTDtBQUNJLDZDQUFXRixLQUFYO0FBQWtCRyxjQUFNLEVBQUVGLE1BQU0sQ0FBQ0U7QUFBakM7O0FBQ0osU0FBSyxZQUFMO0FBQ0ksNkNBQVdILEtBQVg7QUFBa0JJLGlCQUFTLEVBQUVILE1BQU0sQ0FBQ0c7QUFBcEM7O0FBQ0osU0FBSyxjQUFMO0FBQ0ksNkNBQVdKLEtBQVg7QUFBa0JLLG1CQUFXLEVBQUVKLE1BQU0sQ0FBQ0k7QUFBdEM7O0FBQ0osU0FBSyxvQkFBTDtBQUNJLDZD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O0FBMURSO0FBNERILENBN0REOztBQThEZUQsc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlIFwiQUREX1NQT1VTRVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BvdXNlOiBhY3Rpb24uc3BvdXNlfTtcbiAgICAgICAgY2FzZSBcIlNQT1VTRV9BR0VcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwb3VzZUFnZTogYWN0aW9uLnNwb3VzZUFnZX07XG4gICAgICAgIGNhc2UgXCJIQVNfQ0hJTERSRU5cIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhhc0NoaWxkcmVuOiBhY3Rpb24uaGFzQ2hpbGRyZW59O1xuICAgICAgICBjYXNlIFwiTlVNQkVSX09GX0NISUxEUkVOXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBudW1iZXJPZkNoaWxkcmVuOiBhY3Rpb24ubnVtYmVyT2ZDaGlsZHJlbn07XG4gICAgICAgIGNhc2UgXCJDSElMRFJFTl9BR0VfQVJSQVlcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGNoaWxkcmVuQWdlQXJyYXk6IGFjdGlvbi5jaGlsZHJlbkFnZUFycmF5fTtcbiAgICAgICAgY2FzZSBcIlBBWV9GT1JfQ09MTEVHRVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcGF5Rm9yQ29sbGVnZTogYWN0aW9uLnBheUZvckNvbGxlZ2V9O1xuICAgICAgICBjYXNlIFwiRE9CXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkb2I6IGFjdGlvbi5kb2J9O1xuICAgICAgICBjYXNlIFwiU0VYXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzZXg6IGFjdGlvbi5zZXh9O1xuICAgICAgICBjYXNlIFwiVE9CQUNDT1wiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdG9iYWNjbzogYWN0aW9uLnRvYmFjY299O1xuICAgICAgICBjYXNlIFwiSEVBTFRIX0NPTkRJVElPTlwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGVhbHRoQ29uZGl0aW9uOiBhY3Rpb24uaGVhbHRoQ29uZGl0aW9ufTtcbiAgICAgICAgY2FzZSBcIllPVVJfSU5DT01FXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCB5b3VySW5jb21lOiBhY3Rpb24ueW91ckluY29tZX07XG4gICAgICAgIGNhc2UgXCJTUE9VU0VfSU5DT01FXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcG91c2VJbmNvbWU6IGFjdGlvbi5zcG91c2VJbmNvbWV9O1xuICAgICAgICBjYXNlIFwiUkVOVF9PUl9PV05cIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHJlbnRPck93bjogYWN0aW9uLnJlbnRPck93bn07XG4gICAgICAgIGNhc2UgXCJNT05USExZX1JFTlRcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG1vbnRobHlSZW50OiBhY3Rpb24ubW9udGhseVJlbnR9O1xuICAgICAgICBjYXNlIFwiTU9SVEdBR0VfQ1VSUkVOVF9CQUxBTkNFXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBtb3J0Z2FnZUN1cnJlbnRCYWxhbmNlOiBhY3Rpb24ubW9ydGdhZ2VDdXJyZW50QmFsYW5jZX07XG4gICAgICAgIGNhc2UgXCJNT1JUR0FHRV9NT05USExZX1BBWU1FTlRcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG1vcnRnYWdlTW9udGhseVBheW1lbnQ6IGFjdGlvbi5tb3J0Z2FnZU1vbnRobHlQYXltZW50fTtcbiAgICAgICAgY2FzZSBcIkxJRkVfSU5TVVJBTkNFXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsaWZlSW5zdXJhbmNlOiBhY3Rpb24ubGlmZUluc3VyYW5jZX07XG4gICAgICAgIGNhc2UgXCJMSUZFX0lOU1VSQU5DRV9FTVBMT1lFUlwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbGlmZUluc3VyYW5jZUVtcGxveWVyOiBhY3Rpb24ubGlmZUluc3VyYW5jZUVtcGxveWVyfTtcbiAgICAgICAgY2FzZSBcIkxJRkVfSU5TVVJBTkNFX1BFUlNPTkFMXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsaWZlSW5zdXJhbmNlUGVyc29uYWw6IGFjdGlvbi5saWZlSW5zdXJhbmNlUGVyc29uYWx9O1xuICAgICAgICBjYXNlIFwiSEFTX1NBVklOR1NcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhhc1NhdmluZ3M6IGFjdGlvbi5oYXNTYXZpbmdzfTtcbiAgICAgICAgY2FzZSBcIkhBU19SRVRJUkVNRU5UX1NBVklOR1NcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhhc1JldGlyZW1lbnRTYXZpbmdzOiBhY3Rpb24uaGFzUmV0aXJlbWVudFNhdmluZ3N9O1xuICAgICAgICBjYXNlIFwiSEFTX05PTl9SRVRJUkVNRU5UX1NBVklOR1NcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhhc05vblJldGlyZW1lbnRTYXZpbmdzOiBhY3Rpb24uaGFzTm9uUmV0aXJlbWVudFNhdmluZ3N9O1xuICAgICAgICBjYXNlIFwiSEFTX0RFQlRcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnQ6IGFjdGlvbi5kZWJ0fTtcbiAgICAgICAgY2FzZSBcIkRFQlRfQ1JFRElUX0NBUkRcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnRDcmVkaXRDYXJkOiBhY3Rpb24uZGVidENyZWRpdENhcmR9O1xuICAgICAgICBjYXNlIFwiREVCVF9TVFVERU5UX0xPQU5cIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnRTdHVkZW50TG9hbjogYWN0aW9uLmRlYnRTdHVkZW50TG9hbn07XG4gICAgICAgIGNhc2UgXCJERUJUX0hPTUVfRVFVSVRZXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0SG9tZUVxdWl0eTogYWN0aW9uLmRlYnRIb21lRXF1aXR5fTtcbiAgICAgICAgY2FzZSBcIkRFQlRfTElORV9PRl9DUkVESVRcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnRMaW5lT2ZDcmVkaXQ6IGFjdGlvbi5kZWJ0TGluZU9mQ3JlZGl0fTtcbiAgICAgICAgY2FzZSBcIkRFQlRfT1RIRVJcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnRPdGhlcjogYWN0aW9uLmRlYnRPdGhlcn07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/form.reducer.js\n");

/***/ })

})