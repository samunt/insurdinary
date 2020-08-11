webpackHotUpdate("static/development/pages/debt.js",{

/***/ "./reducers/form.reducer.js":
/*!**********************************!*\
  !*** ./reducers/form.reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case \"ID\":\n      if (state.id) {\n        return state;\n      } else {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          id: action.id\n        });\n      }\n\n    case \"ADD_SPOUSE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        spouse: action.spouse\n      });\n\n    case \"SPOUSE_AGE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        spouseAge: action.spouseAge\n      });\n\n    case \"HAS_CHILDREN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasChildren: action.hasChildren\n      });\n\n    case \"NUMBER_OF_CHILDREN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        numberOfChildren: action.numberOfChildren\n      });\n\n    case \"CHILDREN_AGE_ARRAY\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        childrenAgeArray: action.childrenAgeArray\n      });\n\n    case \"PAY_FOR_COLLEGE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        payForCollege: action.payForCollege\n      });\n\n    case \"DOB\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        dob: action.dob\n      });\n\n    case \"SEX\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        sex: action.sex\n      });\n\n    case \"TOBACCO\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        tobacco: action.tobacco\n      });\n\n    case \"HEALTH_CONDITION\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        healthCondition: action.healthCondition\n      });\n\n    case \"YOUR_INCOME\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        yourIncome: action.yourIncome\n      });\n\n    case \"SPOUSE_INCOME\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        spouseIncome: action.spouseIncome\n      });\n\n    case \"RENT_OR_OWN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        rentOrOwn: action.rentOrOwn\n      });\n\n    case \"MONTHLY_RENT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        monthlyRent: action.monthlyRent\n      });\n\n    case \"MORTGAGE_CURRENT_BALANCE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mortgageCurrentBalance: action.mortgageCurrentBalance\n      });\n\n    case \"MORTGAGE_MONTHLY_PAYMENT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mortgageMonthlyPayment: action.mortgageMonthlyPayment\n      });\n\n    case \"LIFE_INSURANCE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        lifeInsurance: action.lifeInsurance\n      });\n\n    case \"LIFE_INSURANCE_EMPLOYER\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        lifeInsuranceEmployer: action.lifeInsuranceEmployer\n      });\n\n    case \"LIFE_INSURANCE_PERSONAL\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        lifeInsurancePersonal: action.lifeInsurancePersonal\n      });\n\n    case \"HAS_SAVINGS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasSavings: action.hasSavings\n      });\n\n    case \"HAS_RETIREMENT_SAVINGS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasRetirementSavings: action.hasRetirementSavings\n      });\n\n    case \"HAS_NON_RETIREMENT_SAVINGS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasNonRetirementSavings: action.hasNonRetirementSavings\n      });\n\n    case \"HAS_DEBT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debt: action.debt\n      });\n\n    case \"DEBT_CREDIT_CARD\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debtCreditCard: action.debtCreditCard\n      });\n\n    case \"DEBT_STUDENT_LOAN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debtStudentLoan: action.debtStudentLoan\n      });\n\n    case \"DEBT_HOME_EQUITY\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debtHomeEquity: action.debtHomeEquity\n      });\n\n    case \"DEBT_LINE_OF_CREDIT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debtLineOfCredit: action.debtLineOfCredit\n      });\n\n    case \"DEBT_OTHER\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debtOther: action.debtOther\n      });\n\n    case \"NAME_FIRST\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        nameFirst: action.nameFirst\n      });\n\n    case \"NAME_LAST\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        nameLast: action.nameLast\n      });\n\n    case \"NAME_EMAIL\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        nameEmail: action.nameEmail\n      });\n\n    case \"NAME_PHONE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        namePhone: action.namePhone\n      });\n\n    case \"EXPENSE_MORTGAGE_RENT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseMortgageAndRent: action.expenseMortgageAndRent\n      });\n\n    case \"EXPENSE_HOUSING_BILLS_UTILITIES\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseHousingBillsUtilities: action.expenseHousingBillsUtilities\n      });\n\n    case \"EXPENSE_GROCERIES_RESTAURANTS_ALCOHOL\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseGroceriesRestaurantsAlcohol: action.expenseGroceriesRestaurantsAlcohol\n      });\n\n    case \"EXPENSE_PHONE_INTERNET_CABLE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expensePhoneInternetCable: action.expensePhoneInternetCable\n      });\n\n    case \"EXPENSE_SHOPPING_FITNESS_GROOMING\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseShoppingFitnessGrooming: action.expenseShoppingFitnessGrooming\n      });\n\n    case \"EXPENSE_CARS_TAXIS_TRANSIT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseCarsTaxisPublicTransit: action.expenseCarsTaxisPublicTransit\n      });\n\n    case \"EXPENSE_CHILDCARE_EDUCATION\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseChildcareEducation: action.expenseChildcareEducation\n      });\n\n    case \"EXPENSE_DISCRETIONARY_TRAVEL_REC_GIFTS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseDiscretionaryTravelRecGifts: action.expenseDiscretionaryTravelRecGifts\n      });\n\n    case \"EXPENSE_TOTAL\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseTotal: action.expenseTotal\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXIuanM/MWNmMyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaWQiLCJzcG91c2UiLCJzcG91c2VBZ2UiLCJoYXNDaGlsZHJlbiIsIm51bWJlck9mQ2hpbGRyZW4iLCJjaGlsZHJlbkFnZUFycmF5IiwicGF5Rm9yQ29sbGVnZSIsImRvYiIsInNleCIsInRvYmFjY28iLCJoZWFsdGhDb25kaXRpb24iLCJ5b3VySW5jb21lIiwic3BvdXNlSW5jb21lIiwicmVudE9yT3duIiwibW9udGhseVJlbnQiLCJtb3J0Z2FnZUN1cnJlbnRCYWxhbmNlIiwibW9ydGdhZ2VNb250aGx5UGF5bWVudCIsImxpZmVJbnN1cmFuY2UiLCJsaWZlSW5zdXJhbmNlRW1wbG95ZXIiLCJsaWZlSW5zdXJhbmNlUGVyc29uYWwiLCJoYXNTYXZpbmdzIiwiaGFzUmV0aXJlbWVudFNhdmluZ3MiLCJoYXNOb25SZXRpcmVtZW50U2F2aW5ncyIsImRlYnQiLCJkZWJ0Q3JlZGl0Q2FyZCIsImRlYnRTdHVkZW50TG9hbiIsImRlYnRIb21lRXF1aXR5IiwiZGVidExpbmVPZkNyZWRpdCIsImRlYnRPdGhlciIsIm5hbWVGaXJzdCIsIm5hbWVMYXN0IiwibmFtZUVtYWlsIiwibmFtZVBob25lIiwiZXhwZW5zZU1vcnRnYWdlQW5kUmVudCIsImV4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXMiLCJleHBlbnNlR3JvY2VyaWVzUmVzdGF1cmFudHNBbGNvaG9sIiwiZXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZSIsImV4cGVuc2VTaG9wcGluZ0ZpdG5lc3NHcm9vbWluZyIsImV4cGVuc2VDYXJzVGF4aXNQdWJsaWNUcmFuc2l0IiwiZXhwZW5zZUNoaWxkY2FyZUVkdWNhdGlvbiIsImV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHMiLCJleHBlbnNlVG90YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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NkNBQVdyQyxLQUFYO0FBQWtCc0MsMENBQWtDLEVBQUVyQyxNQUFNLENBQUNxQztBQUE3RDs7QUFDSixTQUFLLDhCQUFMO0FBQ0ksNkNBQVd0QyxLQUFYO0FBQWtCdUMsaUNBQXlCLEVBQUV0QyxNQUFNLENBQUNzQztBQUFwRDs7QUFDSixTQUFLLG1DQUFMO0FBQ0ksNkNBQVd2QyxLQUFYO0FBQWtCd0Msc0NBQThCLEVBQUV2QyxNQUFNLENBQUN1QztBQUF6RDs7QUFDSixTQUFLLDRCQUFMO0FBQ0ksNkNBQVd4QyxLQUFYO0FBQWtCeUMscUNBQTZCLEVBQUV4QyxNQUFNLENBQUN3QztBQUF4RDs7QUFDSixTQUFLLDZCQUFMO0FBQ0ksNkNBQVd6QyxLQUFYO0FBQWtCMEMsaUNBQXlCLEVBQUV6QyxNQUFNLENBQUN5QztBQUFwRDs7QUFDSixTQUFLLHdDQUFMO0FBQ0ksNkNBQVcxQyxLQUFYO0FBQWtCMkMsMENBQWtDLEVBQUUxQyxNQUFNLENBQUMwQztBQUE3RDs7QUFDSixTQUFLLGVBQUw7QUFDSSw2Q0FBVzNDLEtBQVg7QUFBa0I0QyxvQkFBWSxFQUFFM0MsTUFBTSxDQUFDMkM7QUFBdkM7O0FBQ0o7QUFDSSxhQUFPNUMsS0FBUDtBQTFGUjtBQTRGSCxDQTdGRDs7QUE4RmVELHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvZm9ybS5yZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICAgICAgY2FzZSBcIklEXCI6XG4gICAgICAgICAgICBpZiAoc3RhdGUuaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaWQ6IGFjdGlvbi5pZH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcIkFERF9TUE9VU0VcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwb3VzZTogYWN0aW9uLnNwb3VzZX07XG4gICAgICAgIGNhc2UgXCJTUE9VU0VfQUdFXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcG91c2VBZ2U6IGFjdGlvbi5zcG91c2VBZ2V9O1xuICAgICAgICBjYXNlIFwiSEFTX0NISUxEUkVOXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoYXNDaGlsZHJlbjogYWN0aW9uLmhhc0NoaWxkcmVufTtcbiAgICAgICAgY2FzZSBcIk5VTUJFUl9PRl9DSElMRFJFTlwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbnVtYmVyT2ZDaGlsZHJlbjogYWN0aW9uLm51bWJlck9mQ2hpbGRyZW59O1xuICAgICAgICBjYXNlIFwiQ0hJTERSRU5fQUdFX0FSUkFZXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBjaGlsZHJlbkFnZUFycmF5OiBhY3Rpb24uY2hpbGRyZW5BZ2VBcnJheX07XG4gICAgICAgIGNhc2UgXCJQQVlfRk9SX0NPTExFR0VcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHBheUZvckNvbGxlZ2U6IGFjdGlvbi5wYXlGb3JDb2xsZWdlfTtcbiAgICAgICAgY2FzZSBcIkRPQlwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZG9iOiBhY3Rpb24uZG9ifTtcbiAgICAgICAgY2FzZSBcIlNFWFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc2V4OiBhY3Rpb24uc2V4fTtcbiAgICAgICAgY2FzZSBcIlRPQkFDQ09cIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHRvYmFjY286IGFjdGlvbi50b2JhY2NvfTtcbiAgICAgICAgY2FzZSBcIkhFQUxUSF9DT05ESVRJT05cIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhlYWx0aENvbmRpdGlvbjogYWN0aW9uLmhlYWx0aENvbmRpdGlvbn07XG4gICAgICAgIGNhc2UgXCJZT1VSX0lOQ09NRVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgeW91ckluY29tZTogYWN0aW9uLnlvdXJJbmNvbWV9O1xuICAgICAgICBjYXNlIFwiU1BPVVNFX0lOQ09NRVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BvdXNlSW5jb21lOiBhY3Rpb24uc3BvdXNlSW5jb21lfTtcbiAgICAgICAgY2FzZSBcIlJFTlRfT1JfT1dOXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCByZW50T3JPd246IGFjdGlvbi5yZW50T3JPd259O1xuICAgICAgICBjYXNlIFwiTU9OVEhMWV9SRU5UXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBtb250aGx5UmVudDogYWN0aW9uLm1vbnRobHlSZW50fTtcbiAgICAgICAgY2FzZSBcIk1PUlRHQUdFX0NVUlJFTlRfQkFMQU5DRVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbW9ydGdhZ2VDdXJyZW50QmFsYW5jZTogYWN0aW9uLm1vcnRnYWdlQ3VycmVudEJhbGFuY2V9O1xuICAgICAgICBjYXNlIFwiTU9SVEdBR0VfTU9OVEhMWV9QQVlNRU5UXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBtb3J0Z2FnZU1vbnRobHlQYXltZW50OiBhY3Rpb24ubW9ydGdhZ2VNb250aGx5UGF5bWVudH07XG4gICAgICAgIGNhc2UgXCJMSUZFX0lOU1VSQU5DRVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbGlmZUluc3VyYW5jZTogYWN0aW9uLmxpZmVJbnN1cmFuY2V9O1xuICAgICAgICBjYXNlIFwiTElGRV9JTlNVUkFOQ0VfRU1QTE9ZRVJcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxpZmVJbnN1cmFuY2VFbXBsb3llcjogYWN0aW9uLmxpZmVJbnN1cmFuY2VFbXBsb3llcn07XG4gICAgICAgIGNhc2UgXCJMSUZFX0lOU1VSQU5DRV9QRVJTT05BTFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbGlmZUluc3VyYW5jZVBlcnNvbmFsOiBhY3Rpb24ubGlmZUluc3VyYW5jZVBlcnNvbmFsfTtcbiAgICAgICAgY2FzZSBcIkhBU19TQVZJTkdTXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoYXNTYXZpbmdzOiBhY3Rpb24uaGFzU2F2aW5nc307XG4gICAgICAgIGNhc2UgXCJIQVNfUkVUSVJFTUVOVF9TQVZJTkdTXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoYXNSZXRpcmVtZW50U2F2aW5nczogYWN0aW9uLmhhc1JldGlyZW1lbnRTYXZpbmdzfTtcbiAgICAgICAgY2FzZSBcIkhBU19OT05fUkVUSVJFTUVOVF9TQVZJTkdTXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoYXNOb25SZXRpcmVtZW50U2F2aW5nczogYWN0aW9uLmhhc05vblJldGlyZW1lbnRTYXZpbmdzfTtcbiAgICAgICAgY2FzZSBcIkhBU19ERUJUXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0OiBhY3Rpb24uZGVidH07XG4gICAgICAgIGNhc2UgXCJERUJUX0NSRURJVF9DQVJEXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0Q3JlZGl0Q2FyZDogYWN0aW9uLmRlYnRDcmVkaXRDYXJkfTtcbiAgICAgICAgY2FzZSBcIkRFQlRfU1RVREVOVF9MT0FOXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0U3R1ZGVudExvYW46IGFjdGlvbi5kZWJ0U3R1ZGVudExvYW59O1xuICAgICAgICBjYXNlIFwiREVCVF9IT01FX0VRVUlUWVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGVidEhvbWVFcXVpdHk6IGFjdGlvbi5kZWJ0SG9tZUVxdWl0eX07XG4gICAgICAgIGNhc2UgXCJERUJUX0xJTkVfT0ZfQ1JFRElUXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0TGluZU9mQ3JlZGl0OiBhY3Rpb24uZGVidExpbmVPZkNyZWRpdH07XG4gICAgICAgIGNhc2UgXCJERUJUX09USEVSXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0T3RoZXI6IGFjdGlvbi5kZWJ0T3RoZXJ9O1xuICAgICAgICBjYXNlIFwiTkFNRV9GSVJTVFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmFtZUZpcnN0OiBhY3Rpb24ubmFtZUZpcnN0fTtcbiAgICAgICAgY2FzZSBcIk5BTUVfTEFTVFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmFtZUxhc3Q6IGFjdGlvbi5uYW1lTGFzdH07XG4gICAgICAgIGNhc2UgXCJOQU1FX0VNQUlMXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYW1lRW1haWw6IGFjdGlvbi5uYW1lRW1haWx9O1xuICAgICAgICBjYXNlIFwiTkFNRV9QSE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmFtZVBob25lOiBhY3Rpb24ubmFtZVBob25lfTtcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfTU9SVEdBR0VfUkVOVFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZU1vcnRnYWdlQW5kUmVudDogYWN0aW9uLmV4cGVuc2VNb3J0Z2FnZUFuZFJlbnR9O1xuICAgICAgICBjYXNlIFwiRVhQRU5TRV9IT1VTSU5HX0JJTExTX1VUSUxJVElFU1wiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZUhvdXNpbmdCaWxsc1V0aWxpdGllczogYWN0aW9uLmV4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXN9O1xuICAgICAgICBjYXNlIFwiRVhQRU5TRV9HUk9DRVJJRVNfUkVTVEFVUkFOVFNfQUxDT0hPTFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZUdyb2Nlcmllc1Jlc3RhdXJhbnRzQWxjb2hvbDogYWN0aW9uLmV4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2x9O1xuICAgICAgICBjYXNlIFwiRVhQRU5TRV9QSE9ORV9JTlRFUk5FVF9DQUJMRVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZTogYWN0aW9uLmV4cGVuc2VQaG9uZUludGVybmV0Q2FibGV9O1xuICAgICAgICBjYXNlIFwiRVhQRU5TRV9TSE9QUElOR19GSVRORVNTX0dST09NSU5HXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmc6IGFjdGlvbi5leHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmd9O1xuICAgICAgICBjYXNlIFwiRVhQRU5TRV9DQVJTX1RBWElTX1RSQU5TSVRcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VDYXJzVGF4aXNQdWJsaWNUcmFuc2l0OiBhY3Rpb24uZXhwZW5zZUNhcnNUYXhpc1B1YmxpY1RyYW5zaXR9O1xuICAgICAgICBjYXNlIFwiRVhQRU5TRV9DSElMRENBUkVfRURVQ0FUSU9OXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlQ2hpbGRjYXJlRWR1Y2F0aW9uOiBhY3Rpb24uZXhwZW5zZUNoaWxkY2FyZUVkdWNhdGlvbn07XG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX0RJU0NSRVRJT05BUllfVFJBVkVMX1JFQ19HSUZUU1wiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZURpc2NyZXRpb25hcnlUcmF2ZWxSZWNHaWZ0czogYWN0aW9uLmV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHN9O1xuICAgICAgICBjYXNlIFwiRVhQRU5TRV9UT1RBTFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZVRvdGFsOiBhY3Rpb24uZXhwZW5zZVRvdGFsfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/form.reducer.js\n");

/***/ })

})