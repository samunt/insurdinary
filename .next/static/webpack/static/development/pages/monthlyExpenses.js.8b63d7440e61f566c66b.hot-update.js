webpackHotUpdate("static/development/pages/monthlyExpenses.js",{

/***/ "./reducers/form.reducer.js":
/*!**********************************!*\
  !*** ./reducers/form.reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case \"ADD_SPOUSE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        spouse: action.spouse\n      });\n\n    case \"SPOUSE_AGE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        spouseAge: action.spouseAge\n      });\n\n    case \"HAS_CHILDREN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasChildren: action.hasChildren\n      });\n\n    case \"NUMBER_OF_CHILDREN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        numberOfChildren: action.numberOfChildren\n      });\n\n    case \"CHILDREN_AGE_ARRAY\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        childrenAgeArray: action.childrenAgeArray\n      });\n\n    case \"PAY_FOR_COLLEGE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        payForCollege: action.payForCollege\n      });\n\n    case \"DOB\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        dob: action.dob\n      });\n\n    case \"SEX\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        sex: action.sex\n      });\n\n    case \"TOBACCO\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        tobacco: action.tobacco\n      });\n\n    case \"HEALTH_CONDITION\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        healthCondition: action.healthCondition\n      });\n\n    case \"YOUR_INCOME\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        yourIncome: action.yourIncome\n      });\n\n    case \"SPOUSE_INCOME\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        spouseIncome: action.spouseIncome\n      });\n\n    case \"RENT_OR_OWN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        rentOrOwn: action.rentOrOwn\n      });\n\n    case \"MONTHLY_RENT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        monthlyRent: action.monthlyRent\n      });\n\n    case \"MORTGAGE_CURRENT_BALANCE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mortgageCurrentBalance: action.mortgageCurrentBalance\n      });\n\n    case \"MORTGAGE_MONTHLY_PAYMENT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mortgageMonthlyPayment: action.mortgageMonthlyPayment\n      });\n\n    case \"LIFE_INSURANCE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        lifeInsurance: action.lifeInsurance\n      });\n\n    case \"LIFE_INSURANCE_EMPLOYER\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        lifeInsuranceEmployer: action.lifeInsuranceEmployer\n      });\n\n    case \"LIFE_INSURANCE_PERSONAL\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        lifeInsurancePersonal: action.lifeInsurancePersonal\n      });\n\n    case \"HAS_SAVINGS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasSavings: action.hasSavings\n      });\n\n    case \"HAS_RETIREMENT_SAVINGS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasRetirementSavings: action.hasRetirementSavings\n      });\n\n    case \"HAS_NON_RETIREMENT_SAVINGS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasNonRetirementSavings: action.hasNonRetirementSavings\n      });\n\n    case \"HAS_DEBT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debt: action.debt\n      });\n\n    case \"DEBT_CREDIT_CARD\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debtCreditCard: action.debtCreditCard\n      });\n\n    case \"DEBT_STUDENT_LOAN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debtStudentLoan: action.debtStudentLoan\n      });\n\n    case \"DEBT_HOME_EQUITY\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debtHomeEquity: action.debtHomeEquity\n      });\n\n    case \"DEBT_LINE_OF_CREDIT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debtLineOfCredit: action.debtLineOfCredit\n      });\n\n    case \"DEBT_OTHER\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debtOther: action.debtOther\n      });\n\n    case \"NAME_FIRST\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        nameFirst: action.nameFirst\n      });\n\n    case \"NAME_LAST\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        nameLast: action.nameLast\n      });\n\n    case \"NAME_EMAIL\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        nameEmail: action.nameEmail\n      });\n\n    case \"NAME_PHONE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        namePhone: action.namePhone\n      });\n\n    case \"EXPENSE_MORTGAGE_RENT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseMortgageAndRent: action.expenseMortgageAndRent\n      });\n\n    case \"EXPENSE_HOUSING_BILLS_UTILITIES\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseHousingBillsUtilities: action.expenseHousingBillsUtilities\n      });\n\n    case \"EXPENSE_GROCERIES_RESTAURANTS_ALCOHOL\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseGroceriesRestaurantsAlcohol: action.expenseGroceriesRestaurantsAlcohol\n      });\n\n    case \"EXPENSE_PHONE_INTERNET_CABLE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expensePhoneInternetCable: action.expensePhoneInternetCable\n      });\n\n    case \"EXPENSE_SHOPPING_FITNESS_GROOMING\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseShoppingFitnessGrooming: action.expenseShoppingFitnessGrooming\n      });\n\n    case \"EXPENSE_CARS_TAXIS_TRANSIT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseCarsTaxisPublicTransit: action.expenseCarsTaxisPublicTransit\n      });\n\n    case \"EXPENSE_CHILDCARE_EDUCATION\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseChildcareEducation: action.expenseChildcareEducation\n      });\n\n    case \"EXPENSE_DISCRETIONARY_TRAVEL_REC_GIFTS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseDiscretionaryTravelRecGifts: action.expenseDiscretionaryTravelRecGifts\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXIuanM/MWNmMyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwic3BvdXNlIiwic3BvdXNlQWdlIiwiaGFzQ2hpbGRyZW4iLCJudW1iZXJPZkNoaWxkcmVuIiwiY2hpbGRyZW5BZ2VBcnJheSIsInBheUZvckNvbGxlZ2UiLCJkb2IiLCJzZXgiLCJ0b2JhY2NvIiwiaGVhbHRoQ29uZGl0aW9uIiwieW91ckluY29tZSIsInNwb3VzZUluY29tZSIsInJlbnRPck93biIsIm1vbnRobHlSZW50IiwibW9ydGdhZ2VDdXJyZW50QmFsYW5jZSIsIm1vcnRnYWdlTW9udGhseVBheW1lbnQiLCJsaWZlSW5zdXJhbmNlIiwibGlmZUluc3VyYW5jZUVtcGxveWVyIiwibGlmZUluc3VyYW5jZVBlcnNvbmFsIiwiaGFzU2F2aW5ncyIsImhhc1JldGlyZW1lbnRTYXZpbmdzIiwiaGFzTm9uUmV0aXJlbWVudFNhdmluZ3MiLCJkZWJ0IiwiZGVidENyZWRpdENhcmQiLCJkZWJ0U3R1ZGVudExvYW4iLCJkZWJ0SG9tZUVxdWl0eSIsImRlYnRMaW5lT2ZDcmVkaXQiLCJkZWJ0T3RoZXIiLCJuYW1lRmlyc3QiLCJuYW1lTGFzdCIsIm5hbWVFbWFpbCIsIm5hbWVQaG9uZSIsImV4cGVuc2VNb3J0Z2FnZUFuZFJlbnQiLCJleHBlbnNlSG91c2luZ0JpbGxzVXRpbGl0aWVzIiwiZXhwZW5zZUdyb2Nlcmllc1Jlc3RhdXJhbnRzQWxjb2hvbCIsImV4cGVuc2VQaG9uZUludGVybmV0Q2FibGUiLCJleHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmciLCJleHBlbnNlQ2Fyc1RheGlzUHVibGljVHJhbnNpdCIsImV4cGVuc2VDaGlsZGNhcmVFZHVjYXRpb24iLCJleHBlbnNlRGlzY3JldGlvbmFyeVRyYXZlbFJlY0dpZnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FB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QVg7QUFBa0J1QyxzQ0FBOEIsRUFBRXRDLE1BQU0sQ0FBQ3NDO0FBQXpEOztBQUNKLFNBQUssNEJBQUw7QUFDSSw2Q0FBV3ZDLEtBQVg7QUFBa0J3QyxxQ0FBNkIsRUFBRXZDLE1BQU0sQ0FBQ3VDO0FBQXhEOztBQUNKLFNBQUssNkJBQUw7QUFDSSw2Q0FBV3hDLEtBQVg7QUFBa0J5QyxpQ0FBeUIsRUFBRXhDLE1BQU0sQ0FBQ3dDO0FBQXBEOztBQUNKLFNBQUssd0NBQUw7QUFDSSw2Q0FBV3pDLEtBQVg7QUFBa0IwQywwQ0FBa0MsRUFBRXpDLE1BQU0sQ0FBQ3lDO0FBQTdEOztBQUNKO0FBQ0ksYUFBTzFDLEtBQVA7QUFsRlI7QUFvRkgsQ0FyRkQ7O0FBc0ZlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL2Zvcm0ucmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgXCJBRERfU1BPVVNFXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcG91c2U6IGFjdGlvbi5zcG91c2V9O1xuICAgICAgICBjYXNlIFwiU1BPVVNFX0FHRVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BvdXNlQWdlOiBhY3Rpb24uc3BvdXNlQWdlfTtcbiAgICAgICAgY2FzZSBcIkhBU19DSElMRFJFTlwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGFzQ2hpbGRyZW46IGFjdGlvbi5oYXNDaGlsZHJlbn07XG4gICAgICAgIGNhc2UgXCJOVU1CRVJfT0ZfQ0hJTERSRU5cIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG51bWJlck9mQ2hpbGRyZW46IGFjdGlvbi5udW1iZXJPZkNoaWxkcmVufTtcbiAgICAgICAgY2FzZSBcIkNISUxEUkVOX0FHRV9BUlJBWVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgY2hpbGRyZW5BZ2VBcnJheTogYWN0aW9uLmNoaWxkcmVuQWdlQXJyYXl9O1xuICAgICAgICBjYXNlIFwiUEFZX0ZPUl9DT0xMRUdFXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBwYXlGb3JDb2xsZWdlOiBhY3Rpb24ucGF5Rm9yQ29sbGVnZX07XG4gICAgICAgIGNhc2UgXCJET0JcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRvYjogYWN0aW9uLmRvYn07XG4gICAgICAgIGNhc2UgXCJTRVhcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNleDogYWN0aW9uLnNleH07XG4gICAgICAgIGNhc2UgXCJUT0JBQ0NPXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCB0b2JhY2NvOiBhY3Rpb24udG9iYWNjb307XG4gICAgICAgIGNhc2UgXCJIRUFMVEhfQ09ORElUSU9OXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoZWFsdGhDb25kaXRpb246IGFjdGlvbi5oZWFsdGhDb25kaXRpb259O1xuICAgICAgICBjYXNlIFwiWU9VUl9JTkNPTUVcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHlvdXJJbmNvbWU6IGFjdGlvbi55b3VySW5jb21lfTtcbiAgICAgICAgY2FzZSBcIlNQT1VTRV9JTkNPTUVcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwb3VzZUluY29tZTogYWN0aW9uLnNwb3VzZUluY29tZX07XG4gICAgICAgIGNhc2UgXCJSRU5UX09SX09XTlwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcmVudE9yT3duOiBhY3Rpb24ucmVudE9yT3dufTtcbiAgICAgICAgY2FzZSBcIk1PTlRITFlfUkVOVFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbW9udGhseVJlbnQ6IGFjdGlvbi5tb250aGx5UmVudH07XG4gICAgICAgIGNhc2UgXCJNT1JUR0FHRV9DVVJSRU5UX0JBTEFOQ0VcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG1vcnRnYWdlQ3VycmVudEJhbGFuY2U6IGFjdGlvbi5tb3J0Z2FnZUN1cnJlbnRCYWxhbmNlfTtcbiAgICAgICAgY2FzZSBcIk1PUlRHQUdFX01PTlRITFlfUEFZTUVOVFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbW9ydGdhZ2VNb250aGx5UGF5bWVudDogYWN0aW9uLm1vcnRnYWdlTW9udGhseVBheW1lbnR9O1xuICAgICAgICBjYXNlIFwiTElGRV9JTlNVUkFOQ0VcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxpZmVJbnN1cmFuY2U6IGFjdGlvbi5saWZlSW5zdXJhbmNlfTtcbiAgICAgICAgY2FzZSBcIkxJRkVfSU5TVVJBTkNFX0VNUExPWUVSXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsaWZlSW5zdXJhbmNlRW1wbG95ZXI6IGFjdGlvbi5saWZlSW5zdXJhbmNlRW1wbG95ZXJ9O1xuICAgICAgICBjYXNlIFwiTElGRV9JTlNVUkFOQ0VfUEVSU09OQUxcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxpZmVJbnN1cmFuY2VQZXJzb25hbDogYWN0aW9uLmxpZmVJbnN1cmFuY2VQZXJzb25hbH07XG4gICAgICAgIGNhc2UgXCJIQVNfU0FWSU5HU1wiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGFzU2F2aW5nczogYWN0aW9uLmhhc1NhdmluZ3N9O1xuICAgICAgICBjYXNlIFwiSEFTX1JFVElSRU1FTlRfU0FWSU5HU1wiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGFzUmV0aXJlbWVudFNhdmluZ3M6IGFjdGlvbi5oYXNSZXRpcmVtZW50U2F2aW5nc307XG4gICAgICAgIGNhc2UgXCJIQVNfTk9OX1JFVElSRU1FTlRfU0FWSU5HU1wiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGFzTm9uUmV0aXJlbWVudFNhdmluZ3M6IGFjdGlvbi5oYXNOb25SZXRpcmVtZW50U2F2aW5nc307XG4gICAgICAgIGNhc2UgXCJIQVNfREVCVFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGVidDogYWN0aW9uLmRlYnR9O1xuICAgICAgICBjYXNlIFwiREVCVF9DUkVESVRfQ0FSRFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGVidENyZWRpdENhcmQ6IGFjdGlvbi5kZWJ0Q3JlZGl0Q2FyZH07XG4gICAgICAgIGNhc2UgXCJERUJUX1NUVURFTlRfTE9BTlwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGVidFN0dWRlbnRMb2FuOiBhY3Rpb24uZGVidFN0dWRlbnRMb2FufTtcbiAgICAgICAgY2FzZSBcIkRFQlRfSE9NRV9FUVVJVFlcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnRIb21lRXF1aXR5OiBhY3Rpb24uZGVidEhvbWVFcXVpdHl9O1xuICAgICAgICBjYXNlIFwiREVCVF9MSU5FX09GX0NSRURJVFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGVidExpbmVPZkNyZWRpdDogYWN0aW9uLmRlYnRMaW5lT2ZDcmVkaXR9O1xuICAgICAgICBjYXNlIFwiREVCVF9PVEhFUlwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGVidE90aGVyOiBhY3Rpb24uZGVidE90aGVyfTtcbiAgICAgICAgY2FzZSBcIk5BTUVfRklSU1RcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hbWVGaXJzdDogYWN0aW9uLm5hbWVGaXJzdH07XG4gICAgICAgIGNhc2UgXCJOQU1FX0xBU1RcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hbWVMYXN0OiBhY3Rpb24ubmFtZUxhc3R9O1xuICAgICAgICBjYXNlIFwiTkFNRV9FTUFJTFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmFtZUVtYWlsOiBhY3Rpb24ubmFtZUVtYWlsfTtcbiAgICAgICAgY2FzZSBcIk5BTUVfUEhPTkVcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hbWVQaG9uZTogYWN0aW9uLm5hbWVQaG9uZX07XG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX01PUlRHQUdFX1JFTlRcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VNb3J0Z2FnZUFuZFJlbnQ6IGFjdGlvbi5leHBlbnNlTW9ydGdhZ2VBbmRSZW50fTtcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfSE9VU0lOR19CSUxMU19VVElMSVRJRVNcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXM6IGFjdGlvbi5leHBlbnNlSG91c2luZ0JpbGxzVXRpbGl0aWVzfTtcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfR1JPQ0VSSUVTX1JFU1RBVVJBTlRTX0FMQ09IT0xcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2w6IGFjdGlvbi5leHBlbnNlR3JvY2VyaWVzUmVzdGF1cmFudHNBbGNvaG9sfTtcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfUEhPTkVfSU5URVJORVRfQ0FCTEVcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VQaG9uZUludGVybmV0Q2FibGU6IGFjdGlvbi5leHBlbnNlUGhvbmVJbnRlcm5ldENhYmxlfTtcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfU0hPUFBJTkdfRklUTkVTU19HUk9PTUlOR1wiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZVNob3BwaW5nRml0bmVzc0dyb29taW5nOiBhY3Rpb24uZXhwZW5zZVNob3BwaW5nRml0bmVzc0dyb29taW5nfTtcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfQ0FSU19UQVhJU19UUkFOU0lUXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlQ2Fyc1RheGlzUHVibGljVHJhbnNpdDogYWN0aW9uLmV4cGVuc2VDYXJzVGF4aXNQdWJsaWNUcmFuc2l0fTtcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfQ0hJTERDQVJFX0VEVUNBVElPTlwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZUNoaWxkY2FyZUVkdWNhdGlvbjogYWN0aW9uLmV4cGVuc2VDaGlsZGNhcmVFZHVjYXRpb259O1xuICAgICAgICBjYXNlIFwiRVhQRU5TRV9ESVNDUkVUSU9OQVJZX1RSQVZFTF9SRUNfR0lGVFNcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHM6IGFjdGlvbi5leHBlbnNlRGlzY3JldGlvbmFyeVRyYXZlbFJlY0dpZnRzfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/form.reducer.js\n");

/***/ })

})