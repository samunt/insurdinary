module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FamilyIncomeForm.js":
/*!****************************************!*\
  !*** ./components/FamilyIncomeForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FamilyIncomeForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"react-bootstrap/Button\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FamilyIncomeForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FamilyIncomeForm.module.css */ \"./components/FamilyIncomeForm.module.css\");\n/* harmony import */ var _FamilyIncomeForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FamilyIncomeForm_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ \"react-bootstrap/Row\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ \"react-bootstrap/Col\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/FormContext */ \"./contexts/FormContext.js\");\n/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/FormControl */ \"react-bootstrap/FormControl\");\n/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/InputGroup */ \"react-bootstrap/InputGroup\");\n/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/ProgressBar */ \"react-bootstrap/ProgressBar\");\n/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Form */ \"react-bootstrap/Form\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nfunction FamilyIncomeForm() {\n  const now = 55;\n\n  const progressInstance = __jsx(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    style: {\n      height: '0.5rem'\n    },\n    now: now\n  });\n\n  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_6__[\"DispatchContext\"]);\n  const form = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_6__[\"FormContext\"]);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    0: yourIncome,\n    1: setYourIncome\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: spouseIncome,\n    1: setSpouseIncome\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    dispatch({\n      type: \"YOUR_INCOME\",\n      yourIncome: yourIncome\n    });\n  }, [yourIncome]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    dispatch({\n      type: \"SPOUSE_INCOME\",\n      spouseIncome: spouseIncome\n    });\n  }, [spouseIncome]);\n  return __jsx(\"div\", null, __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    xs: {\n      span: 10,\n      offset: 1\n    },\n    md: {\n      span: 10,\n      offset: 1\n    },\n    lg: {\n      span: 10,\n      offset: 1\n    }\n  }, progressInstance)), __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    xs: {\n      span: 10,\n      offset: 1\n    },\n    md: {\n      span: 10,\n      offset: 1\n    },\n    lg: {\n      span: 10,\n      offset: 1\n    }\n  }, __jsx(\"h2\", {\n    className: _FamilyIncomeForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n  }, \"What is your family's annual income (before taxes)? \"))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default.a, null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    xs: {\n      span: 4\n    },\n    md: {\n      span: 2,\n      offset: 2\n    },\n    lg: {\n      span: 2,\n      offset: 2\n    }\n  }, __jsx(\"h5\", {\n    className: _FamilyIncomeForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.h5\n  }, \"You\")), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    xs: {\n      span: 5\n    },\n    md: {\n      span: 5\n    },\n    lg: {\n      span: 5\n    }\n  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    className: \"mb-3\"\n  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_8___default.a.Prepend, null, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_8___default.a.Text, null, \"$\")), __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    placeholder: \"Your Income\",\n    \"aria-label\": \"Your Income\",\n    \"aria-describedby\": \"basic-addon2\",\n    onChange: e => {\n      setYourIncome(e.target.value);\n    }\n  })))), __jsx(\"br\", null), form.spouse ? __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    xs: {\n      span: 4\n    },\n    md: {\n      span: 2,\n      offset: 2\n    },\n    lg: {\n      span: 2,\n      offset: 2\n    }\n  }, __jsx(\"h5\", {\n    className: _FamilyIncomeForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.h5\n  }, \"Spouse\")), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    xs: {\n      span: 5\n    },\n    md: {\n      span: 5\n    },\n    lg: {\n      span: 5\n    }\n  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    className: \"mb-3\"\n  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_8___default.a.Prepend, null, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_8___default.a.Text, null, \"$\")), __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    placeholder: \"Spouse Income\",\n    \"aria-label\": \"Spouse Income\",\n    \"aria-describedby\": \"basic-addon2\",\n    onChange: e => {\n      setSpouseIncome(e.target.value);\n    }\n  })))) : null, __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    xs: {\n      span: 8,\n      offset: 2\n    },\n    md: {\n      span: 6,\n      offset: 3\n    },\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    style: {\n      width: \"100%\"\n    },\n    variant: \"outline-primary\",\n    size: \"lg\",\n    onClick: e => {\n      e.preventDefault;\n      router.push(\"/rentOrOwn\");\n    }\n  }, \"Next\"), \" \"))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZhbWlseUluY29tZUZvcm0uanM/ZDM0OSJdLCJuYW1lcyI6WyJGYW1pbHlJbmNvbWVGb3JtIiwibm93IiwicHJvZ3Jlc3NJbnN0YW5jZSIsImhlaWdodCIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRpc3BhdGNoQ29udGV4dCIsImZvcm0iLCJGb3JtQ29udGV4dCIsInJvdXRlciIsInVzZVJvdXRlciIsInlvdXJJbmNvbWUiLCJzZXRZb3VySW5jb21lIiwidXNlU3RhdGUiLCJzcG91c2VJbmNvbWUiLCJzZXRTcG91c2VJbmNvbWUiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwic3BhbiIsIm9mZnNldCIsInN0eWxlcyIsImhlYWRlciIsImg1IiwiZSIsInRhcmdldCIsInZhbHVlIiwic3BvdXNlIiwid2lkdGgiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxnQkFBVCxHQUE0QjtBQUN2QyxRQUFNQyxHQUFHLEdBQUcsRUFBWjs7QUFDQSxRQUFNQyxnQkFBZ0IsR0FBRyxNQUFDLGtFQUFEO0FBQWEsU0FBSyxFQUFFO0FBQUNDLFlBQU0sRUFBRTtBQUFULEtBQXBCO0FBQXdDLE9BQUcsRUFBRUY7QUFBN0MsSUFBekI7O0FBQ0EsUUFBTUcsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyxxRUFBRCxDQUEzQjtBQUNBLFFBQU1DLElBQUksR0FBR0Ysd0RBQVUsQ0FBQ0csaUVBQUQsQ0FBdkI7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCQyxzREFBUSxDQUFDLEVBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FB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Q0FESjtBQXFHSCIsImZpbGUiOiIuL2NvbXBvbmVudHMvRmFtaWx5SW5jb21lRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmFtaWx5SW5jb21lRm9ybS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvUm93XCI7XG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XG5pbXBvcnQge0Rpc3BhdGNoQ29udGV4dCwgRm9ybUNvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0cy9Gb3JtQ29udGV4dFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSW5wdXRHcm91cFwiO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYW1pbHlJbmNvbWVGb3JtKCkge1xuICAgIGNvbnN0IG5vdyA9IDU1O1xuICAgIGNvbnN0IHByb2dyZXNzSW5zdGFuY2UgPSA8UHJvZ3Jlc3NCYXIgc3R5bGU9e3toZWlnaHQ6ICcwLjVyZW0nfX0gbm93PXtub3d9IC8+O1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChEaXNwYXRjaENvbnRleHQpO1xuICAgIGNvbnN0IGZvcm0gPSB1c2VDb250ZXh0KEZvcm1Db250ZXh0KTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbeW91ckluY29tZSwgc2V0WW91ckluY29tZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Nwb3VzZUluY29tZSwgc2V0U3BvdXNlSW5jb21lXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJZT1VSX0lOQ09NRVwiLCB5b3VySW5jb21lOiB5b3VySW5jb21lIH0pO1xuICAgIH0sIFt5b3VySW5jb21lXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNQT1VTRV9JTkNPTUVcIiwgc3BvdXNlSW5jb21lOiBzcG91c2VJbmNvbWUgfSk7XG4gICAgfSwgW3Nwb3VzZUluY29tZV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAgICAgIHhzPXt7IHNwYW46IDEwLCBvZmZzZXQ6IDEgfX1cbiAgICAgICAgICAgICAgICAgICAgbWQ9e3sgc3BhbjogMTAsIG9mZnNldDogMSB9fVxuICAgICAgICAgICAgICAgICAgICBsZz17eyBzcGFuOiAxMCwgb2Zmc2V0OiAxIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7cHJvZ3Jlc3NJbnN0YW5jZX1cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2xcbiAgICAgICAgICAgICAgICAgICAgeHM9e3sgc3BhbjogMTAsIG9mZnNldDogMSB9fVxuICAgICAgICAgICAgICAgICAgICBtZD17eyBzcGFuOiAxMCwgb2Zmc2V0OiAxIH19XG4gICAgICAgICAgICAgICAgICAgIGxnPXt7IHNwYW46IDEwLCBvZmZzZXQ6IDEgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PldoYXQgaXMgeW91ciBmYW1pbHkncyBhbm51YWwgaW5jb21lIChiZWZvcmUgdGF4ZXMpPyA8L2gyPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAgICAgICAgICB4cz17eyBzcGFuOiA0IH19XG4gICAgICAgICAgICAgICAgICAgICAgICBtZD17eyBzcGFuOiAyLCBvZmZzZXQ6IDIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxnPXt7IHNwYW46IDIsIG9mZnNldDogMiB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtzdHlsZXMuaDV9PllvdTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAgICAgICAgICB4cz17eyBzcGFuOiA1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICBtZD17eyBzcGFuOiA1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICBsZz17eyBzcGFuOiA1IH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5UZXh0PiQ8L0lucHV0R3JvdXAuVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIEluY29tZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJZb3VyIEluY29tZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXRZb3VySW5jb21lKGUudGFyZ2V0LnZhbHVlKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICB7IGZvcm0uc3BvdXNlID9cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAgICAgICAgICB4cz17eyBzcGFuOiA0IH19XG4gICAgICAgICAgICAgICAgICAgICAgICBtZD17eyBzcGFuOiAyLCBvZmZzZXQ6IDIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxnPXt7IHNwYW46IDIsIG9mZnNldDogMiB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtzdHlsZXMuaDV9PlNwb3VzZTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAgICAgICAgICB4cz17eyBzcGFuOiA1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICBtZD17eyBzcGFuOiA1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICBsZz17eyBzcGFuOiA1IH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5UZXh0PiQ8L0lucHV0R3JvdXAuVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTcG91c2UgSW5jb21lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNwb3VzZSBJbmNvbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0U3BvdXNlSW5jb21lKGUudGFyZ2V0LnZhbHVlKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAgICAgICAgICB4cz17eyBzcGFuOiA4LCBvZmZzZXQ6IDIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1kPXt7IHNwYW46IDYsIG9mZnNldDogMyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGc9e3sgc3BhbjogNiwgb2Zmc2V0OiAzIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3JlbnRPck93blwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FamilyIncomeForm.js\n");

/***/ }),

/***/ "./components/FamilyIncomeForm.module.css":
/*!************************************************!*\
  !*** ./components/FamilyIncomeForm.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"FamilyIncomeForm_header__kEEYw\",\n\t\"progress\": \"FamilyIncomeForm_progress__3yHHA\",\n\t\"h5\": \"FamilyIncomeForm_h5__1ymva\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZhbWlseUluY29tZUZvcm0ubW9kdWxlLmNzcz81ZDRmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvRmFtaWx5SW5jb21lRm9ybS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiRmFtaWx5SW5jb21lRm9ybV9oZWFkZXJfX2tFRVl3XCIsXG5cdFwicHJvZ3Jlc3NcIjogXCJGYW1pbHlJbmNvbWVGb3JtX3Byb2dyZXNzX18zeUhIQVwiLFxuXHRcImg1XCI6IFwiRmFtaWx5SW5jb21lRm9ybV9oNV9fMXltdmFcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FamilyIncomeForm.module.css\n");

/***/ }),

/***/ "./contexts/FormContext.js":
/*!*********************************!*\
  !*** ./contexts/FormContext.js ***!
  \*********************************/
/*! exports provided: FormContext, DispatchContext, GlobalFormProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormContext\", function() { return FormContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DispatchContext\", function() { return DispatchContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalFormProvider\", function() { return GlobalFormProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useLocalStorageReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useLocalStorageReducer */ \"./hooks/useLocalStorageReducer.js\");\n/* harmony import */ var _reducers_form_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/form.reducer */ \"./reducers/form.reducer.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst defaultForm = {};\nconst FormContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nconst DispatchContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nfunction GlobalFormProvider(props) {\n  const [form, dispatch] = Object(_hooks_useLocalStorageReducer__WEBPACK_IMPORTED_MODULE_1__[\"useLocalStorageReducer\"])(\"form\", defaultForm, _reducers_form_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  return __jsx(FormContext.Provider, {\n    value: form\n  }, __jsx(DispatchContext.Provider, {\n    value: dispatch\n  }, props.children));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9Gb3JtQ29udGV4dC5qcz9jZGNiIl0sIm5hbWVzIjpbImRlZmF1bHRGb3JtIiwiRm9ybUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRGlzcGF0Y2hDb250ZXh0IiwiR2xvYmFsRm9ybVByb3ZpZGVyIiwicHJvcHMiLCJmb3JtIiwiZGlzcGF0Y2giLCJ1c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyIiwiZm9ybVJlZHVjZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsV0FBVyxHQUFHLEVBQXBCO0FBQ08sTUFBTUMsV0FBVyxHQUFHQywyREFBYSxFQUFqQztBQUNBLE1BQU1DLGVBQWUsR0FBR0QsMkRBQWEsRUFBckM7QUFFQSxTQUFTRSxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFDdEMsUUFBTSxDQUFDQyxJQUFELEVBQU9DLFFBQVAsSUFBbUJDLDRGQUFzQixDQUFDLE1BQUQsRUFBU1IsV0FBVCxFQUFzQlMsOERBQXRCLENBQS9DO0FBQ0EsU0FDSSxNQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRUg7QUFBN0IsS0FDSSxNQUFDLGVBQUQsQ0FBaUIsUUFBakI7QUFBMEIsU0FBSyxFQUFFQztBQUFqQyxLQUNDRixLQUFLLENBQUNLLFFBRFAsQ0FESixDQURKO0FBT0giLCJmaWxlIjoiLi9jb250ZXh0cy9Gb3JtQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlTG9jYWxTdG9yYWdlUmVkdWNlcn0gZnJvbSBcIi4uL2hvb2tzL3VzZUxvY2FsU3RvcmFnZVJlZHVjZXJcIjtcbmltcG9ydCBmb3JtUmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnMvZm9ybS5yZWR1Y2VyXCJcbmNvbnN0IGRlZmF1bHRGb3JtID0ge307XG5leHBvcnQgY29uc3QgRm9ybUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5leHBvcnQgY29uc3QgRGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gR2xvYmFsRm9ybVByb3ZpZGVyKHByb3BzKSB7XG4gICAgY29uc3QgW2Zvcm0sIGRpc3BhdGNoXSA9IHVzZUxvY2FsU3RvcmFnZVJlZHVjZXIoXCJmb3JtXCIsIGRlZmF1bHRGb3JtLCBmb3JtUmVkdWNlcik7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm1Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtmb3JtfT5cbiAgICAgICAgICAgIDxEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICA8L0Zvcm1Db250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/FormContext.js\n");

/***/ }),

/***/ "./hooks/useLocalStorageReducer.js":
/*!*****************************************!*\
  !*** ./hooks/useLocalStorageReducer.js ***!
  \*****************************************/
/*! exports provided: useLocalStorageReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useLocalStorageReducer\", function() { return useLocalStorageReducer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction useLocalStorageReducer(key, defaultVal, reducer) {\n  // make piece of state based on of value in localstorage (or default)\n  const {\n    0: state,\n    1: dispatch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(reducer, defaultVal, () => {\n    let val;\n\n    try {\n      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));\n    } catch (e) {\n      val = defaultVal;\n    }\n\n    return val;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    window.localStorage.setItem(key, JSON.stringify(state));\n  }, [state]);\n  return [state, dispatch];\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy91c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyLmpzPzA0ZDciXSwibmFtZXMiOlsidXNlTG9jYWxTdG9yYWdlUmVkdWNlciIsImtleSIsImRlZmF1bHRWYWwiLCJyZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJ2YWwiLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiU3RyaW5nIiwiZSIsInVzZUVmZmVjdCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsU0FBU0Esc0JBQVQsQ0FBZ0NDLEdBQWhDLEVBQXFDQyxVQUFyQyxFQUFpREMsT0FBakQsRUFBMEQ7QUFDdEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHdEQUFVLENBQUNILE9BQUQsRUFBVUQsVUFBVixFQUFzQixNQUFNO0FBQzVELFFBQUlLLEdBQUo7O0FBQ0EsUUFBSTtBQUNBQSxTQUFHLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUNGQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCWCxHQUE1QixLQUFvQ1ksTUFBTSxDQUFDWCxVQUFELENBRHhDLENBQU47QUFHSCxLQUpELENBS0EsT0FBT1ksQ0FBUCxFQUFTO0FBQ0xQLFNBQUcsR0FBR0wsVUFBTjtBQUNIOztBQUNELFdBQU9LLEdBQVA7QUFDSCxHQVhtQyxDQUFwQztBQVlBUSx5REFBUyxDQUFDLE1BQU07QUFDWkwsVUFBTSxDQUFDQyxZQUFQLENBQW9CSyxPQUFwQixDQUE0QmYsR0FBNUIsRUFBaUNPLElBQUksQ0FBQ1MsU0FBTCxDQUFlYixLQUFmLENBQWpDO0FBQ0gsR0FGUSxFQUVOLENBQUNBLEtBQUQsQ0FGTSxDQUFUO0FBR0EsU0FBTyxDQUFDQSxLQUFELEVBQVFDLFFBQVIsQ0FBUDtBQUNIIiwiZmlsZSI6Ii4vaG9va3MvdXNlTG9jYWxTdG9yYWdlUmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIHVzZUxvY2FsU3RvcmFnZVJlZHVjZXIoa2V5LCBkZWZhdWx0VmFsLCByZWR1Y2VyKSB7XG4gICAgLy8gbWFrZSBwaWVjZSBvZiBzdGF0ZSBiYXNlZCBvbiBvZiB2YWx1ZSBpbiBsb2NhbHN0b3JhZ2UgKG9yIGRlZmF1bHQpXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGRlZmF1bHRWYWwsICgpID0+IHtcbiAgICAgICAgbGV0IHZhbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhbCA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgU3RyaW5nKGRlZmF1bHRWYWwpXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpe1xuICAgICAgICAgICAgdmFsID0gZGVmYXVsdFZhbFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWxcbiAgICB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpXG4gICAgfSwgW3N0YXRlXSk7XG4gICAgcmV0dXJuIFtzdGF0ZSwgZGlzcGF0Y2hdXG59XG5leHBvcnQge3VzZUxvY2FsU3RvcmFnZVJlZHVjZXJ9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useLocalStorageReducer.js\n");

/***/ }),

/***/ "./pages/familyIncome.js":
/*!*******************************!*\
  !*** ./pages/familyIncome.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FamilyIncome; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_FamilyIncomeForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FamilyIncomeForm */ \"./components/FamilyIncomeForm.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction FamilyIncome() {\n  return __jsx(_components_FamilyIncomeForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9mYW1pbHlJbmNvbWUuanM/YTMwNyJdLCJuYW1lcyI6WyJGYW1pbHlJbmNvbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxZQUFULEdBQXdCO0FBQ25DLFNBQ0ksTUFBQyxvRUFBRCxPQURKO0FBR0giLCJmaWxlIjoiLi9wYWdlcy9mYW1pbHlJbmNvbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZhbWlseUluY29tZUZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRmFtaWx5SW5jb21lRm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYW1pbHlJbmNvbWUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZhbWlseUluY29tZUZvcm0vPlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/familyIncome.js\n");

/***/ }),

/***/ "./reducers/form.reducer.js":
/*!**********************************!*\
  !*** ./reducers/form.reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case \"ADD_SPOUSE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        spouse: action.spouse\n      });\n\n    case \"SPOUSE_AGE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        spouseAge: action.spouseAge\n      });\n\n    case \"HAS_CHILDREN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasChildren: action.hasChildren\n      });\n\n    case \"NUMBER_OF_CHILDREN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        numberOfChildren: action.numberOfChildren\n      });\n\n    case \"CHILDREN_AGE_ARRAY\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        childrenAgeArray: action.childrenAgeArray\n      });\n\n    case \"PAY_FOR_COLLEGE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        payForCollege: action.payForCollege\n      });\n\n    case \"DOB\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        dob: action.dob\n      });\n\n    case \"SEX\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        sex: action.sex\n      });\n\n    case \"TOBACCO\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        tobacco: action.tobacco\n      });\n\n    case \"HEALTH_CONDITION\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        healthCondition: action.healthCondition\n      });\n\n    case \"YOUR_INCOME\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        yourIncome: action.yourIncome\n      });\n\n    case \"SPOUSE_INCOME\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        spouseIncome: action.spouseIncome\n      });\n\n    case \"RENT_OR_OWN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        rentOrOwn: action.rentOrOwn\n      });\n\n    case \"MONTHLY_RENT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        monthlyRent: action.monthlyRent\n      });\n\n    case \"MORTGAGE_CURRENT_BALANCE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mortgageCurrentBalance: action.mortgageCurrentBalance\n      });\n\n    case \"MORTGAGE_MONTHLY_PAYMENT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mortgageMonthlyPayment: action.mortgageMonthlyPayment\n      });\n\n    case \"LIFE_INSURANCE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        lifeInsurance: action.lifeInsurance\n      });\n\n    case \"LIFE_INSURANCE_EMPLOYER\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        lifeInsuranceEmployer: action.lifeInsuranceEmployer\n      });\n\n    case \"LIFE_INSURANCE_PERSONAL\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        lifeInsurancePersonal: action.lifeInsurancePersonal\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXIuanM/MWNmMyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwic3BvdXNlIiwic3BvdXNlQWdlIiwiaGFzQ2hpbGRyZW4iLCJudW1iZXJPZkNoaWxkcmVuIiwiY2hpbGRyZW5BZ2VBcnJheSIsInBheUZvckNvbGxlZ2UiLCJkb2IiLCJzZXgiLCJ0b2JhY2NvIiwiaGVhbHRoQ29uZGl0aW9uIiwieW91ckluY29tZSIsInNwb3VzZUluY29tZSIsInJlbnRPck93biIsIm1vbnRobHlSZW50IiwibW9ydGdhZ2VDdXJyZW50QmFsYW5jZSIsIm1vcnRnYWdlTW9udGhseVBheW1lbnQiLCJsaWZlSW5zdXJhbmNlIiwibGlmZUluc3VyYW5jZUVtcGxveWVyIiwibGlmZUluc3VyYW5jZVBlcnNvbmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsT0FBTyxHQUFHLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUMvQixVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLLFlBQUw7QUFDSSw2Q0FBV0YsS0FBWDtBQUFrQkcsY0FBTSxFQUFFRixNQUFNLENBQUNFO0FBQWpDOztBQUNKLFNBQUssWUFBTDtBQUNJLDZDQUFXSCxLQUFYO0FBQWtCSSxpQkFBUyxFQUFFSCxNQUFNLENBQUNHO0FBQXBDOztBQUNKLFNBQUssY0FBTDtBQUNJLDZDQUFXSixLQUFYO0FBQWtCSyxtQkFBVyxFQUFFSixNQUFNLENBQUNJO0FBQXRDOztBQUNKLFNBQUssb0JBQUw7QUFDSSw2Q0FBV0wsS0FBWDtBQUFrQk0sd0JBQWdCLEVBQUVMLE1BQU0sQ0FBQ0s7QUFBM0M7O0FBQ0osU0FBSyxvQkFBTDtBQUNJLDZDQUFXTixLQUFYO0FBQWtCTyx3QkFBZ0IsRUFBRU4sTUFBTSxDQUFDTTtBQUEzQzs7QUFDSixTQUFLLGlCQUFMO0FBQ0ksNkNBQVdQLEtBQVg7QUFBa0JRLHFCQUFhLEVBQUVQLE1BQU0sQ0FBQ087QUFBeEM7O0FBQ0osU0FBSyxLQUFMO0FBQ0ksNkNBQVdSLEtBQVg7QUFBa0JTLFdBQUcsRUFBRVIsTUFBTSxDQUFDUTtBQUE5Qjs7QUFDSixTQUFLLEtBQUw7QUFDSSw2Q0FBV1QsS0FBWDtBQUFrQlUsV0FBRyxFQUFFVCxNQUFNLENBQUNTO0FBQTlCOztBQUNKLFNBQUssU0FBTDtBQUNJLDZDQUFXVixLQUFYO0FBQWtCVyxlQUFPLEVBQUVWLE1BQU0sQ0FBQ1U7QUFBbEM7O0FBQ0osU0FBSyxrQkFBTDtBQUNJLDZDQUFXWCxLQUFYO0FBQWtCWSx1QkFBZSxFQUFFWCxNQUFNLENBQUNXO0FBQTFDOztBQUNKLFNBQUssYUFBTDtBQUNJLDZDQUFXWixLQUFYO0FBQWtCYSxrQkFBVSxFQUFFWixNQUFNLENBQUNZO0FBQXJDOztBQUNKLFNBQUssZUFBTDtBQUNJLDZDQUFXYixLQUFYO0FBQWtCYyxvQkFBWSxFQUFFYixNQUFNLENBQUNhO0FBQXZDOztBQUNKLFNBQUssYUFBTDtBQUNJLDZDQUFXZCxLQUFYO0FBQWtCZSxpQkFBUyxFQUFFZCxNQUFNLENBQUNjO0FBQXBDOztBQUNKLFNBQUssY0FBTDtBQUNJLDZDQUFXZixLQUFYO0FBQWtCZ0IsbUJBQVcsRUFBRWYsTUFBTSxDQUFDZTtBQUF0Qzs7QUFDSixTQUFLLDBCQUFMO0FBQ0ksNkNBQVdoQixLQUFYO0FBQWtCaUIsOEJBQXNCLEVBQUVoQixNQUFNLENBQUNnQjtBQUFqRDs7QUFDSixTQUFLLDBCQUFMO0FBQ0ksNkNBQVdqQixLQUFYO0FBQWtCa0IsOEJBQXNCLEVBQUVqQixNQUFNLENBQUNpQjtBQUFqRDs7QUFDSixTQUFLLGdCQUFMO0FBQ0ksNkNBQVdsQixLQUFYO0FBQWtCbUIscUJBQWEsRUFBRWxCLE1BQU0sQ0FBQ2tCO0FBQXhDOztBQUNKLFNBQUsseUJBQUw7QUFDSSw2Q0FBV25CLEtBQVg7QUFBa0JvQiw2QkFBcUIsRUFBRW5CLE1BQU0sQ0FBQ21CO0FBQWhEOztBQUNKLFNBQUsseUJBQUw7QUFDSSw2Q0FBV3BCLEtBQVg7QUFBa0JxQiw2QkFBcUIsRUFBRXBCLE1BQU0sQ0FBQ29CO0FBQWhEOztBQUNKO0FBQ0ksYUFBT3JCLEtBQVA7QUF4Q1I7QUEwQ0gsQ0EzQ0Q7O0FBNENlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL2Zvcm0ucmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgXCJBRERfU1BPVVNFXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcG91c2U6IGFjdGlvbi5zcG91c2V9O1xuICAgICAgICBjYXNlIFwiU1BPVVNFX0FHRVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BvdXNlQWdlOiBhY3Rpb24uc3BvdXNlQWdlfTtcbiAgICAgICAgY2FzZSBcIkhBU19DSElMRFJFTlwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGFzQ2hpbGRyZW46IGFjdGlvbi5oYXNDaGlsZHJlbn07XG4gICAgICAgIGNhc2UgXCJOVU1CRVJfT0ZfQ0hJTERSRU5cIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG51bWJlck9mQ2hpbGRyZW46IGFjdGlvbi5udW1iZXJPZkNoaWxkcmVufTtcbiAgICAgICAgY2FzZSBcIkNISUxEUkVOX0FHRV9BUlJBWVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgY2hpbGRyZW5BZ2VBcnJheTogYWN0aW9uLmNoaWxkcmVuQWdlQXJyYXl9O1xuICAgICAgICBjYXNlIFwiUEFZX0ZPUl9DT0xMRUdFXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBwYXlGb3JDb2xsZWdlOiBhY3Rpb24ucGF5Rm9yQ29sbGVnZX07XG4gICAgICAgIGNhc2UgXCJET0JcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRvYjogYWN0aW9uLmRvYn07XG4gICAgICAgIGNhc2UgXCJTRVhcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNleDogYWN0aW9uLnNleH07XG4gICAgICAgIGNhc2UgXCJUT0JBQ0NPXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCB0b2JhY2NvOiBhY3Rpb24udG9iYWNjb307XG4gICAgICAgIGNhc2UgXCJIRUFMVEhfQ09ORElUSU9OXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoZWFsdGhDb25kaXRpb246IGFjdGlvbi5oZWFsdGhDb25kaXRpb259O1xuICAgICAgICBjYXNlIFwiWU9VUl9JTkNPTUVcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHlvdXJJbmNvbWU6IGFjdGlvbi55b3VySW5jb21lfTtcbiAgICAgICAgY2FzZSBcIlNQT1VTRV9JTkNPTUVcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwb3VzZUluY29tZTogYWN0aW9uLnNwb3VzZUluY29tZX07XG4gICAgICAgIGNhc2UgXCJSRU5UX09SX09XTlwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcmVudE9yT3duOiBhY3Rpb24ucmVudE9yT3dufTtcbiAgICAgICAgY2FzZSBcIk1PTlRITFlfUkVOVFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbW9udGhseVJlbnQ6IGFjdGlvbi5tb250aGx5UmVudH07XG4gICAgICAgIGNhc2UgXCJNT1JUR0FHRV9DVVJSRU5UX0JBTEFOQ0VcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG1vcnRnYWdlQ3VycmVudEJhbGFuY2U6IGFjdGlvbi5tb3J0Z2FnZUN1cnJlbnRCYWxhbmNlfTtcbiAgICAgICAgY2FzZSBcIk1PUlRHQUdFX01PTlRITFlfUEFZTUVOVFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbW9ydGdhZ2VNb250aGx5UGF5bWVudDogYWN0aW9uLm1vcnRnYWdlTW9udGhseVBheW1lbnR9O1xuICAgICAgICBjYXNlIFwiTElGRV9JTlNVUkFOQ0VcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxpZmVJbnN1cmFuY2U6IGFjdGlvbi5saWZlSW5zdXJhbmNlfTtcbiAgICAgICAgY2FzZSBcIkxJRkVfSU5TVVJBTkNFX0VNUExPWUVSXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsaWZlSW5zdXJhbmNlRW1wbG95ZXI6IGFjdGlvbi5saWZlSW5zdXJhbmNlRW1wbG95ZXJ9O1xuICAgICAgICBjYXNlIFwiTElGRV9JTlNVUkFOQ0VfUEVSU09OQUxcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxpZmVJbnN1cmFuY2VQZXJzb25hbDogYWN0aW9uLmxpZmVJbnN1cmFuY2VQZXJzb25hbH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/form.reducer.js\n");

/***/ }),

/***/ 5:
/*!*************************************!*\
  !*** multi ./pages/familyIncome.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sammyunterman/WebstormProjects/react-next/pages/familyIncome.js */"./pages/familyIncome.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Button\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI/ZmFhOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAvQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Button\n");

/***/ }),

/***/ "react-bootstrap/Col":
/*!**************************************!*\
  !*** external "react-bootstrap/Col" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Col\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ29sXCI/NGNjOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAvQ29sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Col\n");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Form\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiPzljZDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtYm9vdHN0cmFwL0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Form\n");

/***/ }),

/***/ "react-bootstrap/FormControl":
/*!**********************************************!*\
  !*** external "react-bootstrap/FormControl" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/FormControl\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2xcIj9kMTU0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/FormControl\n");

/***/ }),

/***/ "react-bootstrap/InputGroup":
/*!*********************************************!*\
  !*** external "react-bootstrap/InputGroup" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/InputGroup\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvSW5wdXRHcm91cFwiP2M2ZWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtYm9vdHN0cmFwL0lucHV0R3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvSW5wdXRHcm91cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/InputGroup\n");

/***/ }),

/***/ "react-bootstrap/ProgressBar":
/*!**********************************************!*\
  !*** external "react-bootstrap/ProgressBar" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/ProgressBar\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvUHJvZ3Jlc3NCYXJcIj8xZWU3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC9Qcm9ncmVzc0Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Qcm9ncmVzc0JhclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/ProgressBar\n");

/***/ }),

/***/ "react-bootstrap/Row":
/*!**************************************!*\
  !*** external "react-bootstrap/Row" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Row\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvUm93XCI/MWM3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAvUm93LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Row\n");

/***/ })

/******/ });