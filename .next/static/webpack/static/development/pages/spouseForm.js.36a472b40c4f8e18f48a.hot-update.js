webpackHotUpdate("static/development/pages/spouseForm.js",{

/***/ "./components/SpouseForm.js":
/*!**********************************!*\
  !*** ./components/SpouseForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpouseForm.module.css */ \"./components/SpouseForm.module.css\");\n/* harmony import */ var _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/FormContext */ \"./contexts/FormContext.js\");\n/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/FormControl */ \"./node_modules/react-bootstrap/esm/FormControl.js\");\n/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/InputGroup */ \"./node_modules/react-bootstrap/esm/InputGroup.js\");\n/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/ProgressBar */ \"./node_modules/react-bootstrap/esm/ProgressBar.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap-icons */ \"./node_modules/react-bootstrap-icons/dist/index.js\");\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction SpouseForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      hasSpouse = _useState[0],\n      updateHasSpouse = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      spouseAge = _useState2[0],\n      updateSpouseAge = _useState2[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_7__[\"DispatchContext\"]);\n  var form = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_7__[\"FormContext\"]);\n  var now = 10;\n\n  var progressInstance = __jsx(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    style: {\n      height: '0.5rem'\n    },\n    now: now\n  }); // modal stuff\n\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showTitle = _useState3[0],\n      setShowTitle = _useState3[1];\n\n  var handleCloseTitle = function handleCloseTitle() {\n    return setShowTitle(false);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    dispatch({\n      type: \"ADD_SPOUSE\",\n      spouse: hasSpouse\n    });\n  }, [hasSpouse]);\n  return __jsx(\"div\", null, __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: {\n      span: 10,\n      offset: 1\n    },\n    md: {\n      span: 10,\n      offset: 1\n    },\n    lg: {\n      span: 10,\n      offset: 1\n    }\n  }, progressInstance)), __jsx(\"br\", null), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    onSubmit: function onSubmit(e) {\n      e.preventDefault();\n      console.log(e);\n      router.push(\"/children\");\n    }\n  }, __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: {\n      span: 6,\n      offset: 3\n    },\n    md: {\n      span: 6,\n      offset: 3\n    },\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(\"h2\", {\n    className: _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n  }, \"Do you have a spouse or partner?\")), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 1,\n    md: 1,\n    lg: 1\n  }, __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_12__[\"QuestionCircle\"], {\n    size: 30,\n    onClick: function onClick() {\n      setShowTitle(true);\n    },\n    style: {\n      position: 'relative',\n      top: '15px'\n    }\n  }))), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 6,\n    md: {\n      span: 6\n    },\n    lg: {\n      span: 3,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"align-button\",\n    onClick: function onClick() {\n      updateHasSpouse(true);\n    },\n    style: {\n      width: \"100%\"\n    },\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"Yes\"), \" \"), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 6,\n    md: {\n      span: 6\n    },\n    lg: {\n      span: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"align-button\",\n    onClick: function onClick(e) {\n      e.preventDefault();\n      updateHasSpouse(false);\n      router.push(\"/children\");\n    },\n    style: {\n      width: \"100%\"\n    },\n    variant: \"outline-primary\",\n    type: \"submit\",\n    size: \"lg\"\n  }, \"No\"), \" \")))), hasSpouse === true && __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 12,\n    md: 12,\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(\"br\", null), __jsx(\"br\", null), __jsx(\"h3\", {\n    className: _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n  }, \"How old is your spouse or partner?\"))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    onSubmit: function onSubmit(e) {\n      e.preventDefault();\n      dispatch({\n        type: \"SPOUSE_AGE\",\n        spouseAge: spouseAge\n      });\n      router.push(\"/children\");\n    }\n  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 12,\n    md: 12,\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    className: \"mb-3\"\n  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Prepend, null, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Text, null, \"Age\")), __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onChange: function onChange(e) {\n      updateSpouseAge(e.target.value);\n    }\n  })))), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 12,\n    md: 12,\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    style: {\n      width: \"100%\"\n    },\n    type: \"submit\",\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"Next\"), \" \")))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    show: showTitle,\n    onHide: handleCloseTitle\n  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_13__[\"default\"].Header, {\n    closeButton: true\n  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_13__[\"default\"].Title, null, \"Modal heading\")), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_13__[\"default\"].Body, null, \"Woohoo, you're reading this text in a modal!\"), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_13__[\"default\"].Footer, null, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"secondary\",\n    onClick: handleCloseTitle\n  }, \"Close\"))));\n}\n\n_s(SpouseForm, \"XkUVPsJubOztfBG9NYK4mR9Z/Ng=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = SpouseForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpouseForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"SpouseForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nwb3VzZUZvcm0uanM/OGE3MiJdLCJuYW1lcyI6WyJTcG91c2VGb3JtIiwidXNlU3RhdGUiLCJoYXNTcG91c2UiLCJ1cGRhdGVIYXNTcG91c2UiLCJzcG91c2VBZ2UiLCJ1cGRhdGVTcG91c2VBZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJEaXNwYXRjaENvbnRleHQiLCJmb3JtIiwiRm9ybUNvbnRleHQiLCJub3ciLCJwcm9ncmVzc0luc3RhbmNlIiwiaGVpZ2h0Iiwic2hvd1RpdGxlIiwic2V0U2hvd1RpdGxlIiwiaGFuZGxlQ2xvc2VUaXRsZSIsInVzZUVmZmVjdCIsInR5cGUiLCJzcG91c2UiLCJzcGFuIiwib2Zmc2V0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJzdHlsZXMiLCJoZWFkZXIiLCJwb3NpdGlvbiIsInRvcCIsIndpZHRoIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUFBLGtCQUNpQkMsc0RBQVEsQ0FBQyxFQUFELENBRHpCO0FBQUEsTUFDYkMsU0FEYTtBQUFBLE1BQ0ZDLGVBREU7O0FBQUEsbUJBRWlCRixzREFBUSxDQUFDLEVBQUQsQ0FGekI7QUFBQSxNQUViRyxTQUZhO0FBQUEsTUFFRkMsZUFGRTs7QUFHbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVUsQ0FBQ0MscUVBQUQsQ0FBM0I7QUFDQSxNQUFNQyxJQUFJLEdBQUdGLHdEQUFVLENBQUNHLGlFQUFELENBQXZCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHLEVBQVo7O0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsTUFBQyxvRUFBRDtBQUFhLFNBQUssRUFBRTtBQUFDQyxZQUFNLEVBQUU7QUFBVCxLQUFwQjtBQUF3QyxPQUFHLEVBQUVGO0FBQTdDLElBQXpCLENBUGtCLENBUWxCOzs7QUFSa0IsbUJBU2dCWixzREFBUSxDQUFDLEtBQUQsQ0FUeEI7QUFBQSxNQVNYZSxTQVRXO0FBQUEsTUFTQUMsWUFUQTs7QUFVbEIsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLFdBQU1ELFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUEsR0FBekI7O0FBRUFFLHlEQUFTLENBQUMsWUFBTTtBQUNaWCxZQUFRLENBQUM7QUFBRVksVUFBSSxFQUFFLFlBQVI7QUFBc0JDLFlBQU0sRUFBRW5CO0FBQTlCLEtBQUQsQ0FBUjtBQUNDLEdBRkksRUFFRixDQUFDQSxTQUFELENBRkUsQ0FBVDtBQUlBLFNBQ0ksbUJBQ0ksaUJBREosRUFFSSxNQUFDLDJEQUFELFFBQ0ksTUFBQywyREFBRDtBQUNJLE1BQUUsRUFBRTtBQUFFb0IsVUFBSSxFQUFFLEVBQVI7QUFBWUMsWUFBTSxFQUFFO0FBQXBCLEtBRFI7QUFFSSxNQUFFLEVBQUU7QUFBRUQsVUFBSSxFQUFFLEVBQVI7QUFBWUMsWUFBTSxFQUFFO0FBQXBCLEtBRlI7QUFHSSxNQUFFLEVBQUU7QUFBRUQsVUFBSSxFQUFFLEVBQVI7QUFBWUMsWUFBTSxFQUFFO0FBQXBCO0FBSFIsS0FLS1QsZ0JBTEwsQ0FESixDQUZKLEVBV0ksaUJBWEosRUFhSSxNQUFDLDZEQUFEO0FBQ0ksWUFBUSxFQUFFLGtCQUFDVSxDQUFELEVBQU87QUFDYkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxDQUFaO0FBQ0FsQixZQUFNLENBQUNzQixJQUFQLENBQVksV0FBWjtBQUNIO0FBTEwsS0FPSSxpQkFQSixFQVFJLE1BQUMsMkRBQUQsUUFDSSxNQUFDLDJEQUFEO0FBQUssTUFBRSxFQUFFO0FBQUNOLFVBQUksRUFBRSxDQUFQO0FBQVVDLFlBQU0sRUFBRTtBQUFsQixLQUFUO0FBQStCLE1BQUUsRUFBRTtBQUFFRCxVQUFJLEVBQUUsQ0FBUjtBQUFXQyxZQUFNLEVBQUU7QUFBbkIsS0FBbkM7QUFBMkQsTUFBRSxFQUFFO0FBQUVELFVBQUksRUFBRSxDQUFSO0FBQVdDLFlBQU0sRUFBRTtBQUFuQjtBQUEvRCxLQUNJO0FBQUksYUFBUyxFQUFFTSw2REFBTSxDQUFDQztBQUF0Qix3Q0FESixDQURKLEVBSUksTUFBQywyREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQVksTUFBRSxFQUFFLENBQWhCO0FBQW1CLE1BQUUsRUFBRTtBQUF2QixLQUNJLE1BQUMscUVBQUQ7QUFDSSxRQUFJLEVBQUUsRUFEVjtBQUVJLFdBQU8sRUFBRSxtQkFBTTtBQUFDYixrQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUFtQixLQUZ2QztBQUdJLFNBQUssRUFBRTtBQUFDYyxjQUFRLEVBQUUsVUFBWDtBQUF1QkMsU0FBRyxFQUFFO0FBQTVCO0FBSFgsSUFESixDQUpKLENBUkosRUFvQkksTUFBQyxpRUFBRCxRQUNJLE1BQUMsMkRBQUQsUUFDSSxNQUFDLDJEQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBWSxNQUFFLEVBQUU7QUFBRVYsVUFBSSxFQUFFO0FBQVIsS0FBaEI7QUFBNkIsTUFBRSxFQUFFO0FBQUVBLFVBQUksRUFBRSxDQUFSO0FBQVdDLFlBQU0sRUFBRTtBQUFuQjtBQUFqQyxLQUNJLE1BQUMsOERBQUQ7QUFDSSxhQUFTLEVBQUMsY0FEZDtBQUVJLFdBQU8sRUFBRyxtQkFBTTtBQUNacEIscUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDSCxLQUpMO0FBS0ksU0FBSyxFQUFFO0FBQUU4QixXQUFLLEVBQUU7QUFBVCxLQUxYO0FBTUksV0FBTyxFQUFDLGlCQU5aO0FBT0ksUUFBSSxFQUFDO0FBUFQsV0FESixFQVdjLEdBWGQsQ0FESixFQWNJLE1BQUMsMkRBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLE1BQUUsRUFBRTtBQUFFWCxVQUFJLEVBQUU7QUFBUixLQUFoQjtBQUE2QixNQUFFLEVBQUU7QUFBRUEsVUFBSSxFQUFFO0FBQVI7QUFBakMsS0FDSSxNQUFDLDhEQUFEO0FBQ0ksYUFBUyxFQUFDLGNBRGQ7QUFFSSxXQUFPLEVBQUcsaUJBQUNFLENBQUQsRUFBTztBQUNiQSxPQUFDLENBQUNDLGNBQUY7QUFDQXRCLHFCQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0FHLFlBQU0sQ0FBQ3NCLElBQVAsQ0FBWSxXQUFaO0FBQ0gsS0FOTDtBQU9JLFNBQUssRUFBRTtBQUFFSyxXQUFLLEVBQUU7QUFBVCxLQVBYO0FBUUksV0FBTyxFQUFDLGlCQVJaO0FBU0ksUUFBSSxFQUFDLFFBVFQ7QUFVSSxRQUFJLEVBQUM7QUFWVCxVQURKLEVBY2MsR0FkZCxDQWRKLENBREosQ0FwQkosQ0FiSixFQW1FSy9CLFNBQVMsS0FBSyxJQUFkLElBQ0csTUFBQyxpRUFBRCxRQUNJLE1BQUMsMkRBQUQsUUFDSSxNQUFDLDJEQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsRUFBakI7QUFBcUIsTUFBRSxFQUFFO0FBQUVvQixVQUFJLEVBQUUsQ0FBUjtBQUFXQyxZQUFNLEVBQUU7QUFBbkI7QUFBekIsS0FDSSxpQkFESixFQUVJLGlCQUZKLEVBR0k7QUFBSSxhQUFTLEVBQUVNLDZEQUFNLENBQUNDO0FBQXRCLDBDQUhKLENBREosQ0FESixFQVVJLE1BQUMsNkRBQUQ7QUFDSSxZQUFRLEVBQUUsa0JBQUNOLENBQUQsRUFBTztBQUNiQSxPQUFDLENBQUNDLGNBQUY7QUFDQWpCLGNBQVEsQ0FBQztBQUFFWSxZQUFJLEVBQUUsWUFBUjtBQUFzQmhCLGlCQUFTLEVBQUVBO0FBQWpDLE9BQUQsQ0FBUjtBQUNBRSxZQUFNLENBQUNzQixJQUFQLENBQVksV0FBWjtBQUNIO0FBTEwsS0FPSSxNQUFDLDJEQUFELFFBQ0ksTUFBQywyREFBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQXFCLE1BQUUsRUFBRTtBQUFFTixVQUFJLEVBQUUsQ0FBUjtBQUFXQyxZQUFNLEVBQUU7QUFBbkI7QUFBekIsS0FDSSxNQUFDLGtFQUFEO0FBQVksYUFBUyxFQUFDO0FBQXRCLEtBQ0ksTUFBQyxrRUFBRCxDQUFZLE9BQVosUUFDSSxNQUFDLGtFQUFELENBQVksSUFBWixjQURKLENBREosRUFJSSxNQUFDLG1FQUFEO0FBQ0ksWUFBUSxFQUFFLGtCQUFDQyxDQUFELEVBQU87QUFDYm5CLHFCQUFlLENBQUNtQixDQUFDLENBQUNVLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQ0g7QUFITCxJQUpKLENBREosQ0FESixDQVBKLEVBcUJJLE1BQUMsMkRBQUQsUUFDSSxNQUFDLDJEQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsRUFBakI7QUFBcUIsTUFBRSxFQUFFO0FBQUViLFVBQUksRUFBRSxDQUFSO0FBQVdDLFlBQU0sRUFBRTtBQUFuQjtBQUF6QixLQUNJLE1BQUMsOERBQUQ7QUFDSSxTQUFLLEVBQUU7QUFBRVUsV0FBSyxFQUFFO0FBQVQsS0FEWDtBQUVJLFFBQUksRUFBQyxRQUZUO0FBR0ksV0FBTyxFQUFDLGlCQUhaO0FBSUksUUFBSSxFQUFDO0FBSlQsWUFESixFQVFjLEdBUmQsQ0FESixDQXJCSixDQVZKLENBcEVSLEVBbUhJLE1BQUMsOERBQUQ7QUFBTyxRQUFJLEVBQUVqQixTQUFiO0FBQXdCLFVBQU0sRUFBRUU7QUFBaEMsS0FDSSxNQUFDLDhEQUFELENBQU8sTUFBUDtBQUFjLGVBQVc7QUFBekIsS0FDSSxNQUFDLDhEQUFELENBQU8sS0FBUCx3QkFESixDQURKLEVBSUksTUFBQyw4REFBRCxDQUFPLElBQVAsdURBSkosRUFLSSxNQUFDLDhEQUFELENBQU8sTUFBUCxRQUNJLE1BQUMsOERBQUQ7QUFBUSxXQUFPLEVBQUMsV0FBaEI7QUFBNEIsV0FBTyxFQUFFQTtBQUFyQyxhQURKLENBTEosQ0FuSEosQ0FESjtBQWlJSDs7R0FqSlFsQixVO1VBR1VPLHFEOzs7S0FIVlAsVTtBQW1KTUEseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nwb3VzZUZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TcG91c2VGb3JtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcbmltcG9ydCB7RGlzcGF0Y2hDb250ZXh0LCBGb3JtQ29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHRzL0Zvcm1Db250ZXh0XCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9JbnB1dEdyb3VwXCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Qcm9ncmVzc0JhclwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XG5pbXBvcnQgeyBRdWVzdGlvbkNpcmNsZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC1pY29ucydcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL01vZGFsXCJcblxuZnVuY3Rpb24gU3BvdXNlRm9ybSgpIHtcbiAgICBsZXQgW2hhc1Nwb3VzZSwgdXBkYXRlSGFzU3BvdXNlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBsZXQgW3Nwb3VzZUFnZSwgdXBkYXRlU3BvdXNlQWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChEaXNwYXRjaENvbnRleHQpO1xuICAgIGNvbnN0IGZvcm0gPSB1c2VDb250ZXh0KEZvcm1Db250ZXh0KTtcbiAgICBjb25zdCBub3cgPSAxMDtcbiAgICBjb25zdCBwcm9ncmVzc0luc3RhbmNlID0gPFByb2dyZXNzQmFyIHN0eWxlPXt7aGVpZ2h0OiAnMC41cmVtJ319IG5vdz17bm93fSAvPjtcbiAgICAvLyBtb2RhbCBzdHVmZlxuICAgIGNvbnN0IFtzaG93VGl0bGUsIHNldFNob3dUaXRsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgaGFuZGxlQ2xvc2VUaXRsZSA9ICgpID0+IHNldFNob3dUaXRsZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiQUREX1NQT1VTRVwiLCBzcG91c2U6IGhhc1Nwb3VzZSB9KTtcbiAgICAgICAgfSwgW2hhc1Nwb3VzZV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAgICAgIHhzPXt7IHNwYW46IDEwLCBvZmZzZXQ6IDEgfX1cbiAgICAgICAgICAgICAgICAgICAgbWQ9e3sgc3BhbjogMTAsIG9mZnNldDogMSB9fVxuICAgICAgICAgICAgICAgICAgICBsZz17eyBzcGFuOiAxMCwgb2Zmc2V0OiAxIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7cHJvZ3Jlc3NJbnN0YW5jZX1cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2NoaWxkcmVuXCIpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17e3NwYW46IDYsIG9mZnNldDogM319IG1kPXt7IHNwYW46IDYsIG9mZnNldDogMyB9fSBsZz17eyBzcGFuOiA2LCBvZmZzZXQ6IDMgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5EbyB5b3UgaGF2ZSBhIHNwb3VzZSBvciBwYXJ0bmVyPzwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxfSBtZD17MX0gbGc9ezF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dUaXRsZSh0cnVlKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAnMTVweCd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezZ9IG1kPXt7IHNwYW46IDYgfX0gbGc9e3sgc3BhbjogMywgb2Zmc2V0OiAzIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUhhc1Nwb3VzZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs2fSBtZD17eyBzcGFuOiA2IH19IGxnPXt7IHNwYW46IDMgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUhhc1Nwb3VzZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9jaGlsZHJlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAge2hhc1Nwb3VzZSA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17MTJ9IGxnPXt7IHNwYW46IDYsIG9mZnNldDogMyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG93IG9sZCBpcyB5b3VyIHNwb3VzZSBvciBwYXJ0bmVyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNQT1VTRV9BR0VcIiwgc3BvdXNlQWdlOiBzcG91c2VBZ2UgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvY2hpbGRyZW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17MTJ9IGxnPXt7IHNwYW46IDYsIG9mZnNldDogMyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5UZXh0PkFnZTwvSW5wdXRHcm91cC5UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlU3BvdXNlQWdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17MTJ9IGxnPXt7IHNwYW46IDYsIG9mZnNldDogMyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsvKnRpdGxlIG1vZGFsKi99XG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd1RpdGxlfSBvbkhpZGU9e2hhbmRsZUNsb3NlVGl0bGV9PlxuICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5UaXRsZT5Nb2RhbCBoZWFkaW5nPC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5Xb29ob28sIHlvdSdyZSByZWFkaW5nIHRoaXMgdGV4dCBpbiBhIG1vZGFsITwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZVRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BvdXNlRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SpouseForm.js\n");

/***/ })

})