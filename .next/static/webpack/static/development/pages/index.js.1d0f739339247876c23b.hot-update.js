webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SpouseForm.js":
/*!**********************************!*\
  !*** ./components/SpouseForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SpouseForm.module.css */ \"./components/SpouseForm.module.css\");\n/* harmony import */ var _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../contexts/FormContext */ \"./contexts/FormContext.js\");\n/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/FormControl */ \"./node_modules/react-bootstrap/esm/FormControl.js\");\n/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/InputGroup */ \"./node_modules/react-bootstrap/esm/InputGroup.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap/ProgressBar */ \"./node_modules/react-bootstrap/esm/ProgressBar.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar SpouseForm = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(SpouseForm, _Component);\n\n  var _super = _createSuper(SpouseForm);\n\n  function SpouseForm(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SpouseForm);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      hasSpouse: false,\n      spouseAge: null\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SpouseForm, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      // const dispatch = useContext(DispatchContext);\n      // let [hasSpouse, updateHasSpouse] = useState(false);\n      // const router = useRouter();\n      var router = this.props.router;\n      console.log(this.context);\n      return __jsx(\"div\", null, __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        xs: {\n          span: 6,\n          offset: 3\n        },\n        md: {\n          span: 6,\n          offset: 3\n        },\n        lg: {\n          span: 6,\n          offset: 3\n        }\n      }, __jsx(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n        variant: \"success\",\n        now: 10\n      }))), __jsx(\"br\", null), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n        onSubmit: function onSubmit(e) {\n          console.log(e);\n          router.push('/children');\n        }\n      }, __jsx(\"br\", null), __jsx(\"h2\", {\n        className: _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.header\n      }, \"Do you have a spouse or partner?\"), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        xs: 6,\n        md: {\n          span: 6,\n          offset: 3\n        },\n        lg: {\n          span: 6,\n          offset: 3\n        }\n      }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        className: \"align-button\",\n        onClick: function onClick() {\n          _this2.setState({\n            hasSpouse: true\n          }); // dispatch({type: \"ADD_SPOUSE\", spouse: true});\n          // updateHasSpouse(true);\n\n        },\n        style: {\n          width: '100%'\n        },\n        variant: \"outline-primary\",\n        size: \"lg\"\n      }, \"Yes\"), ' '), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        xs: 6,\n        md: {\n          span: 6,\n          offset: 3\n        },\n        lg: {\n          span: 6,\n          offset: 3\n        }\n      }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        className: \"align-button\",\n        onClick: function onClick(e) {\n          e.preventDefault();\n\n          _this2.setState({\n            hasSpouse: false\n          }); // this.context.dispatch({type: \"ADD_SPOUSE\", spouse: false});\n          // router.push('/children')\n\n        },\n        style: {\n          width: '100%'\n        },\n        variant: \"outline-primary\",\n        type: \"submit\",\n        size: \"lg\"\n      }, \"No\"), ' ')))), this.state.hasSpouse === true ? __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        xs: 12,\n        md: 12,\n        lg: {\n          span: 6,\n          offset: 3\n        }\n      }, __jsx(\"br\", null), __jsx(\"br\", null), __jsx(\"h3\", {\n        className: _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.header\n      }, \"How old is your spouse or partner?\"))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n        onSubmit: function onSubmit(e) {\n          e.preventDefault();\n\n          _this2.context.dispatch({\n            type: \"SPOUSE_AGE\",\n            spouseAge: _this2.state.spouseAge\n          });\n\n          router.push('/children');\n        }\n      }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        xs: 12,\n        md: 12,\n        lg: {\n          span: 6,\n          offset: 3\n        }\n      }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n        className: \"mb-3\"\n      }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_14__[\"default\"].Prepend, null, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_14__[\"default\"].Text, null, \"Age\")), __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        onChange: function onChange(e) {\n          _this2.setState({\n            spouseAge: e.target.value\n          });\n        }\n      })))), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        xs: 12,\n        md: 12,\n        lg: {\n          span: 6,\n          offset: 3\n        }\n      }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        style: {\n          width: '100%'\n        },\n        type: \"submit\",\n        variant: \"outline-primary\",\n        size: \"lg\"\n      }, \"Next\"), ' ')))) : null);\n    }\n  }]);\n\n  return SpouseForm;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\nObject(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(SpouseForm, \"contextType\", _contexts_FormContext__WEBPACK_IMPORTED_MODULE_12__[\"DispatchContext\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c = Object(next_router__WEBPACK_IMPORTED_MODULE_15__[\"withRouter\"])(SpouseForm));\n\nvar _c;\n\n$RefreshReg$(_c, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nwb3VzZUZvcm0uanM/OGE3MiJdLCJuYW1lcyI6WyJTcG91c2VGb3JtIiwicHJvcHMiLCJzdGF0ZSIsImhhc1Nwb3VzZSIsInNwb3VzZUFnZSIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJjb250ZXh0Iiwic3BhbiIsIm9mZnNldCIsImUiLCJwdXNoIiwic3R5bGVzIiwiaGVhZGVyIiwic2V0U3RhdGUiLCJ3aWR0aCIsInByZXZlbnREZWZhdWx0IiwiZGlzcGF0Y2giLCJ0eXBlIiwidGFyZ2V0IiwidmFsdWUiLCJDb21wb25lbnQiLCJEaXNwYXRjaENvbnRleHQiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxVOzs7OztBQUNGLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsZUFBUyxFQUFFLEtBREY7QUFFVEMsZUFBUyxFQUFFO0FBRkYsS0FBYjtBQUZlO0FBT2xCOzs7OzZCQUVRO0FBQUE7O0FBQ0w7QUFDQTtBQUNBO0FBSEssVUFJRUMsTUFKRixHQUlZLEtBQUtKLEtBSmpCLENBSUVJLE1BSkY7QUFLTEMsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsT0FBakI7QUFDQSxhQUNJLG1CQUNJLGlCQURKLEVBRUksTUFBQyw0REFBRCxRQUNJLE1BQUMsNERBQUQ7QUFBSyxVQUFFLEVBQUU7QUFBQ0MsY0FBSSxFQUFDLENBQU47QUFBU0MsZ0JBQU0sRUFBRTtBQUFqQixTQUFUO0FBQThCLFVBQUUsRUFBRTtBQUFDRCxjQUFJLEVBQUMsQ0FBTjtBQUFTQyxnQkFBTSxFQUFFO0FBQWpCLFNBQWxDO0FBQXVELFVBQUUsRUFBRTtBQUFDRCxjQUFJ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QWpCO0FBQXFCLFVBQUUsRUFBRTtBQUFDSCxjQUFJLEVBQUMsQ0FBTjtBQUFTQyxnQkFBTSxFQUFFO0FBQWpCO0FBQXpCLFNBQ0ksTUFBQyxtRUFBRDtBQUFZLGlCQUFTLEVBQUM7QUFBdEIsU0FDSSxNQUFDLG1FQUFELENBQVksT0FBWixRQUNJLE1BQUMsbUVBQUQsQ0FBWSxJQUFaLGNBREosQ0FESixFQUlJLE1BQUMsb0VBQUQ7QUFBYSxnQkFBUSxFQUFFLGtCQUFDQyxDQUFELEVBQU87QUFDMUIsZ0JBQUksQ0FBQ0ksUUFBTCxDQUFjO0FBQUNYLHFCQUFTLEVBQUVPLENBQUMsQ0FBQ1MsTUFBRixDQUFTQztBQUFyQixXQUFkO0FBRUg7QUFIRCxRQUpKLENBREosQ0FESixDQUxBLEVBa0JBLE1BQUMsNERBQUQsUUFDSSxNQUFDLDREQUFEO0FBQUssVUFBRSxFQUFFLEVBQVQ7QUFBYSxVQUFFLEVBQUUsRUFBakI7QUFBcUIsVUFBRSxFQUFFO0FBQUNaLGNBQUksRUFBQyxDQUFOO0FBQVNDLGdCQUFNLEVBQUU7QUFBakI7QUFBekIsU0FDSSxNQUFDLDhEQUFEO0FBQ0ksYUFBSyxFQUFFO0FBQUNNLGVBQUssRUFBRTtBQUFSLFNBRFg7QUFFSSxZQUFJLEVBQUMsUUFGVDtBQUdJLGVBQU8sRUFBQyxpQkFIWjtBQUlJLFlBQUksRUFBQztBQUpULGdCQURKLEVBS2lDLEdBTGpDLENBREosQ0FsQkEsQ0FQSixDQURILEdBc0NLLElBckZkLENBREo7QUEwRkg7Ozs7RUExR29CTSwrQzs7MEZBQW5CdEIsVSxpQkFTbUJ1QixzRTs7QUFvR1Ysb0VBQUFDLCtEQUFVLENBQUN4QixVQUFELENBQXpCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TcG91c2VGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGUsIENvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TcG91c2VGb3JtLm1vZHVsZS5jc3MnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xuaW1wb3J0IHtEaXNwYXRjaENvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0cy9Gb3JtQ29udGV4dFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tICdyZWFjdC1ib290c3RyYXAvSW5wdXRHcm91cCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Byb2dyZXNzQmFyJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcblxuY2xhc3MgU3BvdXNlRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaGFzU3BvdXNlOiBmYWxzZSxcbiAgICAgICAgICAgIHNwb3VzZUFnZTogbnVsbFxuICAgICAgICB9O1xuXG4gICAgfVxuICAgIHN0YXRpYyBjb250ZXh0VHlwZSA9IERpc3BhdGNoQ29udGV4dDtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChEaXNwYXRjaENvbnRleHQpO1xuICAgICAgICAvLyBsZXQgW2hhc1Nwb3VzZSwgdXBkYXRlSGFzU3BvdXNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgICAgIGNvbnN0IHtyb3V0ZXJ9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZXh0KVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9e3tzcGFuOjYsIG9mZnNldDogM319IG1kPXt7c3Bhbjo2LCBvZmZzZXQ6IDN9fSBsZz17e3NwYW46Niwgb2Zmc2V0OiAzfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NCYXIgdmFyaWFudD1cInN1Y2Nlc3NcIiBub3c9ezEwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8YnIvPlxuXG4gICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvY2hpbGRyZW4nKVxuICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5EbyB5b3UgaGF2ZSBhIHNwb3VzZSBvciBwYXJ0bmVyPzwvaDI+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezZ9IG1kPXt7c3Bhbjo2LCBvZmZzZXQ6IDN9fSBsZz17e3NwYW46Niwgb2Zmc2V0OiAzfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtoYXNTcG91c2U6IHRydWV9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2goe3R5cGU6IFwiQUREX1NQT1VTRVwiLCBzcG91c2U6IHRydWV9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZUhhc1Nwb3VzZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiID5ZZXM8L0J1dHRvbj57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs2fSBtZD17e3NwYW46Niwgb2Zmc2V0OiAzfX0gbGc9e3tzcGFuOjYsIG9mZnNldDogMyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtoYXNTcG91c2U6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNvbnRleHQuZGlzcGF0Y2goe3R5cGU6IFwiQUREX1NQT1VTRVwiLCBzcG91c2U6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByb3V0ZXIucHVzaCgnL2NoaWxkcmVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIiA+Tm88L0J1dHRvbj57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaGFzU3BvdXNlID09PSB0cnVlID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXsxMn0gbGc9e3tzcGFuOjYsIG9mZnNldDogM319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+SG93IG9sZCBpcyB5b3VyIHNwb3VzZSBvciBwYXJ0bmVyPzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5kaXNwYXRjaCh7dHlwZTogXCJTUE9VU0VfQUdFXCIsIHNwb3VzZUFnZTogdGhpcy5zdGF0ZS5zcG91c2VBZ2V9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2NoaWxkcmVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXsxMn0gbGc9e3tzcGFuOjYsIG9mZnNldDogM319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlRleHQ+QWdlPC9JbnB1dEdyb3VwLlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzcG91c2VBZ2U6IGUudGFyZ2V0LnZhbHVlfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXsxMn0gbGc9e3tzcGFuOjYsIG9mZnNldDogM319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCIgPk5leHQ8L0J1dHRvbj57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTcG91c2VGb3JtKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SpouseForm.js\n");

/***/ })

})