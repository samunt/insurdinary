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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FormApp.js":
/*!*******************************!*\
  !*** ./components/FormApp.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpouseForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpouseForm */ \"./components/SpouseForm.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction FormApp() {\n  return __jsx(\"div\", null, __jsx(_SpouseForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm1BcHAuanM/Mzk3ZSJdLCJuYW1lcyI6WyJGb3JtQXBwIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBQ0EsU0FBU0EsT0FBVCxHQUFtQjtBQUNmLFNBQ0ksbUJBQ0ksTUFBQyxtREFBRCxPQURKLENBREo7QUFLSDs7QUFFY0Esc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1BcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU3BvdXNlRm9ybSBmcm9tICcuL1Nwb3VzZUZvcm0nO1xuZnVuY3Rpb24gRm9ybUFwcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFNwb3VzZUZvcm0vPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1BcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FormApp.js\n");

/***/ }),

/***/ "./components/SpouseForm.js":
/*!**********************************!*\
  !*** ./components/SpouseForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"react-bootstrap/Button\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpouseForm.module.css */ \"./components/SpouseForm.module.css\");\n/* harmony import */ var _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ \"react-bootstrap/Container\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ \"react-bootstrap/Row\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ \"react-bootstrap/Col\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/FormContext */ \"./contexts/FormContext.js\");\n/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/FormControl */ \"react-bootstrap/FormControl\");\n/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/InputGroup */ \"react-bootstrap/InputGroup\");\n/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/ProgressBar */ \"react-bootstrap/ProgressBar\");\n/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Form */ \"react-bootstrap/Form\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction SpouseForm() {\n  let {\n    0: hasSpouse,\n    1: updateHasSpouse\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  let {\n    0: spouseAge,\n    1: updateSpouseAge\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_7__[\"DispatchContext\"]);\n  const now = 10;\n\n  const progressInstance = __jsx(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    style: {\n      height: '0.5rem'\n    },\n    now: now\n  });\n\n  return __jsx(\"div\", null, __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    xs: {\n      span: 10,\n      offset: 1\n    },\n    md: {\n      span: 10,\n      offset: 1\n    },\n    lg: {\n      span: 10,\n      offset: 1\n    }\n  }, progressInstance)), __jsx(\"br\", null), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11___default.a, {\n    onSubmit: e => {\n      e.preventDefault();\n      console.log(e);\n      router.push(\"/children\");\n    }\n  }, __jsx(\"br\", null), __jsx(\"h2\", {\n    className: _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n  }, \"Do you have a spouse or partner?\"), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    xs: 6,\n    md: {\n      span: 6\n    },\n    lg: {\n      span: 3,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: \"align-button\",\n    onClick: async () => {\n      await updateHasSpouse(true);\n      dispatch({\n        type: \"ADD_SPOUSE\",\n        spouse: hasSpouse\n      });\n    },\n    style: {\n      width: \"100%\"\n    },\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"Yes\"), \" \"), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    xs: 6,\n    md: {\n      span: 6\n    },\n    lg: {\n      span: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: \"align-button\",\n    onClick: async e => {\n      e.preventDefault();\n      await updateHasSpouse(false);\n      dispatch({\n        type: \"ADD_SPOUSE\",\n        spouse: hasSpouse\n      });\n      router.push(\"/children\");\n    },\n    style: {\n      width: \"100%\"\n    },\n    variant: \"outline-primary\",\n    type: \"submit\",\n    size: \"lg\"\n  }, \"No\"), \" \")))), hasSpouse === true && __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    xs: 12,\n    md: 12,\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(\"br\", null), __jsx(\"br\", null), __jsx(\"h3\", {\n    className: _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n  }, \"How old is your spouse or partner?\"))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11___default.a, {\n    onSubmit: e => {\n      e.preventDefault();\n      dispatch({\n        type: \"SPOUSE_AGE\",\n        spouseAge: spouseAge\n      });\n      router.push(\"/children\");\n    }\n  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    xs: 12,\n    md: 12,\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    className: \"mb-3\"\n  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9___default.a.Prepend, null, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9___default.a.Text, null, \"Age\")), __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    onChange: e => {\n      updateSpouseAge(e.target.value);\n    }\n  })))), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    xs: 12,\n    md: 12,\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    style: {\n      width: \"100%\"\n    },\n    type: \"submit\",\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"Next\"), \" \")))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpouseForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nwb3VzZUZvcm0uanM/OGE3MiJdLCJuYW1lcyI6WyJTcG91c2VGb3JtIiwiaGFzU3BvdXNlIiwidXBkYXRlSGFzU3BvdXNlIiwidXNlU3RhdGUiLCJzcG91c2VBZ2UiLCJ1cGRhdGVTcG91c2VBZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJEaXNwYXRjaENvbnRleHQiLCJub3ciLCJwcm9ncmVzc0luc3RhbmNlIiwiaGVpZ2h0Iiwic3BhbiIsIm9mZnNldCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwic3R5bGVzIiwiaGVhZGVyIiwidHlwZSIsInNwb3VzZSIsIndpZHRoIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxHQUFzQjtBQUNsQixNQUFJO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBK0JDLHNEQUFRLENBQUMsS0FBRCxDQUEzQztBQUNBLE1BQUk7QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUErQkYsc0RBQVEsQ0FBQyxFQUFELENBQTNDO0FBQ0EsUUFBTUcsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU1DLFFBQVEsR0FBR0Msd0RBQVUsQ0FBQ0MscUVBQUQsQ0FBM0I7QUFDQSxRQUFNQyxHQUFHLEdBQUcsRUFBWjs7QUFDQSxRQUFNQyxnQkFBZ0IsR0FBRyxNQUFDLG1FQUFEO0FBQWEsU0FBSyxFQUFFO0FBQUNDLFlBQU0sRUFBRTtBQUFULEtBQXBCO0FBQXdDLE9BQUcsRUFBRUY7QUFBN0MsSUFBekI7O0FBRUEsU0FDSSxtQkFDSSxpQkFESixFQUVJLE1BQUMsMERBQUQsUUFDSSxN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TEwsS0FPSSxNQUFDLDBEQUFELFFBQ0ksTUFBQywwREFBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQXFCLE1BQUUsRUFBRTtBQUFFTixVQUFJLEVBQUUsQ0FBUjtBQUFXQyxZQUFNLEVBQUU7QUFBbkI7QUFBekIsS0FDSSxNQUFDLGlFQUFEO0FBQVksYUFBUyxFQUFDO0FBQXRCLEtBQ0ksTUFBQyxpRUFBRCxDQUFZLE9BQVosUUFDSSxNQUFDLGlFQUFELENBQVksSUFBWixjQURKLENBREosRUFJSSxNQUFDLGtFQUFEO0FBQ0ksWUFBUSxFQUFHQyxDQUFELElBQU87QUFDYlgscUJBQWUsQ0FBQ1csQ0FBQyxDQUFDVSxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUNIO0FBSEwsSUFKSixDQURKLENBREosQ0FQSixFQXFCSSxNQUFDLDBEQUFELFFBQ0ksTUFBQywwREFBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQXFCLE1BQUUsRUFBRTtBQUFFYixVQUFJLEVBQUUsQ0FBUjtBQUFXQyxZQUFNLEVBQUU7QUFBbkI7QUFBekIsS0FDSSxNQUFDLDZEQUFEO0FBQ0ksU0FBSyxFQUFFO0FBQUVVLFdBQUssRUFBRTtBQUFULEtBRFg7QUFFSSxRQUFJLEVBQUMsUUFGVDtBQUdJLFdBQU8sRUFBQyxpQkFIWjtBQUlJLFFBQUksRUFBQztBQUpULFlBREosRUFRYyxHQVJkLENBREosQ0FyQkosQ0FWSixDQTNEUixDQURKO0FBNEdIOztBQUVjekIseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nwb3VzZUZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TcG91c2VGb3JtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcbmltcG9ydCB7IERpc3BhdGNoQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9Gb3JtQ29udGV4dFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSW5wdXRHcm91cFwiO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xuXG5mdW5jdGlvbiBTcG91c2VGb3JtKCkge1xuICAgIGxldCBbaGFzU3BvdXNlLCB1cGRhdGVIYXNTcG91c2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGxldCBbc3BvdXNlQWdlLCB1cGRhdGVTcG91c2VBZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VDb250ZXh0KERpc3BhdGNoQ29udGV4dCk7XG4gICAgY29uc3Qgbm93ID0gMTA7XG4gICAgY29uc3QgcHJvZ3Jlc3NJbnN0YW5jZSA9IDxQcm9ncmVzc0JhciBzdHlsZT17e2hlaWdodDogJzAuNXJlbSd9fSBub3c9e25vd30gLz47XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2xcbiAgICAgICAgICAgICAgICAgICAgeHM9e3sgc3BhbjogMTAsIG9mZnNldDogMSB9fVxuICAgICAgICAgICAgICAgICAgICBtZD17eyBzcGFuOiAxMCwgb2Zmc2V0OiAxIH19XG4gICAgICAgICAgICAgICAgICAgIGxnPXt7IHNwYW46IDEwLCBvZmZzZXQ6IDEgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9ncmVzc0luc3RhbmNlfVxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvY2hpbGRyZW5cIik7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5EbyB5b3UgaGF2ZSBhIHNwb3VzZSBvciBwYXJ0bmVyPzwvaDI+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezZ9IG1kPXt7IHNwYW46IDYgfX0gbGc9e3sgc3BhbjogMywgb2Zmc2V0OiAzIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdXBkYXRlSGFzU3BvdXNlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkFERF9TUE9VU0VcIiwgc3BvdXNlOiBoYXNTcG91c2UgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gbWQ9e3sgc3BhbjogNiB9fSBsZz17eyBzcGFuOiAzIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHVwZGF0ZUhhc1Nwb3VzZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiQUREX1NQT1VTRVwiLCBzcG91c2U6IGhhc1Nwb3VzZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2NoaWxkcmVuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICB7aGFzU3BvdXNlID09PSB0cnVlICYmIChcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXsxMn0gbGc9e3sgc3BhbjogNiwgb2Zmc2V0OiAzIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb3cgb2xkIGlzIHlvdXIgc3BvdXNlIG9yIHBhcnRuZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU1BPVVNFX0FHRVwiLCBzcG91c2VBZ2U6IHNwb3VzZUFnZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9jaGlsZHJlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXsxMn0gbGc9e3sgc3BhbjogNiwgb2Zmc2V0OiAzIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlRleHQ+QWdlPC9JbnB1dEdyb3VwLlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVTcG91c2VBZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXsxMn0gbGc9e3sgc3BhbjogNiwgb2Zmc2V0OiAzIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcG91c2VGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SpouseForm.js\n");

/***/ }),

/***/ "./components/SpouseForm.module.css":
/*!******************************************!*\
  !*** ./components/SpouseForm.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"SpouseForm_header__2aWS2\",\n\t\"progress\": \"SpouseForm_progress__3_akZ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nwb3VzZUZvcm0ubW9kdWxlLmNzcz84NjRmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nwb3VzZUZvcm0ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlclwiOiBcIlNwb3VzZUZvcm1faGVhZGVyX18yYVdTMlwiLFxuXHRcInByb2dyZXNzXCI6IFwiU3BvdXNlRm9ybV9wcm9ncmVzc19fM19ha1pcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SpouseForm.module.css\n");

/***/ }),

/***/ "./contexts/FormContext.js":
/*!*********************************!*\
  !*** ./contexts/FormContext.js ***!
  \*********************************/
/*! exports provided: FormContext, DispatchContext, GlobalFormProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormContext\", function() { return FormContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DispatchContext\", function() { return DispatchContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalFormProvider\", function() { return GlobalFormProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useLocalStorageReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useLocalStorageReducer */ \"./hooks/useLocalStorageReducer.js\");\n/* harmony import */ var _reducers_form_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/form.reducer */ \"./reducers/form.reducer.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst defaultForm = [{}];\nconst FormContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nconst DispatchContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nfunction GlobalFormProvider(props) {\n  const [form, dispatch] = Object(_hooks_useLocalStorageReducer__WEBPACK_IMPORTED_MODULE_1__[\"useLocalStorageReducer\"])(\"form\", defaultForm, _reducers_form_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  return __jsx(FormContext.Provider, {\n    value: form\n  }, __jsx(DispatchContext.Provider, {\n    value: dispatch\n  }, props.children));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9Gb3JtQ29udGV4dC5qcz9jZGNiIl0sIm5hbWVzIjpbImRlZmF1bHRGb3JtIiwiRm9ybUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRGlzcGF0Y2hDb250ZXh0IiwiR2xvYmFsRm9ybVByb3ZpZGVyIiwicHJvcHMiLCJmb3JtIiwiZGlzcGF0Y2giLCJ1c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyIiwiZm9ybVJlZHVjZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsV0FBVyxHQUFHLENBQ2hCLEVBRGdCLENBQXBCO0FBR08sTUFBTUMsV0FBVyxHQUFHQywyREFBYSxFQUFqQztBQUNBLE1BQU1DLGVBQWUsR0FBR0QsMkRBQWEsRUFBckM7QUFFQSxTQUFTRSxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFDdEMsUUFBTSxDQUFDQyxJQUFELEVBQU9DLFFBQVAsSUFBbUJDLDRGQUFzQixDQUFDLE1BQUQsRUFBU1IsV0FBVCxFQUFzQlMsOERBQXRCLENBQS9DO0FBQ0EsU0FDSSxNQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRUg7QUFBN0IsS0FDSSxNQUFDLGVBQUQsQ0FBaUIsUUFBakI7QUFBMEIsU0FBSyxFQUFFQztBQUFqQyxLQUNDRixLQUFLLENBQUNLLFFBRFAsQ0FESixDQURKO0FBT0giLCJmaWxlIjoiLi9jb250ZXh0cy9Gb3JtQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlTG9jYWxTdG9yYWdlUmVkdWNlcn0gZnJvbSBcIi4uL2hvb2tzL3VzZUxvY2FsU3RvcmFnZVJlZHVjZXJcIjtcbmltcG9ydCBmb3JtUmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnMvZm9ybS5yZWR1Y2VyXCJcbmNvbnN0IGRlZmF1bHRGb3JtID0gW1xuICAgIHt9XG5dO1xuZXhwb3J0IGNvbnN0IEZvcm1Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuZXhwb3J0IGNvbnN0IERpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEdsb2JhbEZvcm1Qcm92aWRlcihwcm9wcykge1xuICAgIGNvbnN0IFtmb3JtLCBkaXNwYXRjaF0gPSB1c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyKFwiZm9ybVwiLCBkZWZhdWx0Rm9ybSwgZm9ybVJlZHVjZXIpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Zm9ybX0+XG4gICAgICAgICAgICA8RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L0Rpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgPC9Gb3JtQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/FormContext.js\n");

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_FormApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormApp */ \"./components/FormApp.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Index() {\n  return __jsx(\"div\", null, __jsx(_components_FormApp__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index); // get intiial props runs first time on the server,\n// and each consecutive time on the client\n// Index.getInitialProps = async (ctx) => {\n//\n//     // const res = await axios.get('https://jsonplaceholder.typicode.com/posts')\n//     // const {data} = res;\n//     // return {posts: data} //must be an object\n//     return {}\n//\n// };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBQ0EsU0FBU0EsS0FBVCxHQUFpQjtBQUNiLFNBQ0csbUJBQ0ksTUFBQywyREFBRCxPQURKLENBREg7QUFLSDs7QUFDY0Esb0VBQWYsRSxDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm1BcHAgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtQXBwJ1xuZnVuY3Rpb24gSW5kZXgoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICA8ZGl2PlxuICAgICAgICAgICA8Rm9ybUFwcC8+XG4gICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuXG4vLyBnZXQgaW50aWlhbCBwcm9wcyBydW5zIGZpcnN0IHRpbWUgb24gdGhlIHNlcnZlcixcbi8vIGFuZCBlYWNoIGNvbnNlY3V0aXZlIHRpbWUgb24gdGhlIGNsaWVudFxuLy8gSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuLy9cbi8vICAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpXG4vLyAgICAgLy8gY29uc3Qge2RhdGF9ID0gcmVzO1xuLy8gICAgIC8vIHJldHVybiB7cG9zdHM6IGRhdGF9IC8vbXVzdCBiZSBhbiBvYmplY3Rcbi8vICAgICByZXR1cm4ge31cbi8vXG4vLyB9O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./reducers/form.reducer.js":
/*!**********************************!*\
  !*** ./reducers/form.reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case \"ADD_SPOUSE\":\n      console.log(action.spouse);\n      return [...state, {\n        spouse: action.spouse\n      }];\n\n    case \"SPOUSE_AGE\":\n      console.log(action.spouseAge);\n      return [...state, {\n        spouseAge: action.spouseAge\n      }];\n\n    case \"HAS_CHILDREN\":\n      console.log(action.hasChildren);\n      return [...state, {\n        hasChildren: action.hasChildren\n      }];\n\n    case \"NUMBER_OF_CHILDREN\":\n      console.log(action.numberOfChildren);\n      return [...state, {\n        numberOfChildren: action.numberOfChildren\n      }];\n\n    case \"CHILDREN_AGE_ARRAY\":\n      console.log('children age array', action.childrenAgeArray);\n      return [...state, {\n        childrenAgeArray: action.childrenAgeArray\n      }];\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXIuanM/MWNmMyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInNwb3VzZSIsInNwb3VzZUFnZSIsImhhc0NoaWxkcmVuIiwibnVtYmVyT2ZDaGlsZHJlbiIsImNoaWxkcmVuQWdlQXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsT0FBTyxHQUFHLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUMvQixVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLLFlBQUw7QUFDSUMsYUFBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sQ0FBQ0ksTUFBbkI7QUFDQSxhQUFRLENBQUMsR0FBR0wsS0FBSixFQUFXO0FBQUNLLGNBQU0sRUFBRUosTUFBTSxDQUFDSTtBQUFoQixPQUFYLENBQVI7O0FBQ0osU0FBSyxZQUFMO0FBQ0lGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFNLENBQUNLLFNBQW5CO0FBQ0EsYUFBUSxDQUFDLEdBQUdOLEtBQUosRUFBVztBQUFDTSxpQkFBUyxFQUFFTCxNQUFNLENBQUNLO0FBQW5CLE9BQVgsQ0FBUjs7QUFDSixTQUFLLGNBQUw7QUFDSUgsYUFBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sQ0FBQ00sV0FBbkI7QUFDQSxhQUFRLENBQUMsR0FBR1AsS0FBSixFQUFXO0FBQUNPLG1CQUFXLEVBQUVOLE1BQU0sQ0FBQ007QUFBckIsT0FBWCxDQUFSOztBQUNKLFNBQUssb0JBQUw7QUFDSUosYUFBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sQ0FBQ08sZ0JBQW5CO0FBQ0EsYUFBUSxDQUFDLEdBQUdSLEtBQUosRUFBVztBQUFDUSx3QkFBZ0IsRUFBRVAsTUFBTSxDQUFDTztBQUExQixPQUFYLENBQVI7O0FBQ0osU0FBSyxvQkFBTDtBQUNJTCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFpQ0gsTUFBTSxDQUFDUSxnQkFBeEM7QUFDQSxhQUFRLENBQUMsR0FBR1QsS0FBSixFQUFXO0FBQUNTLHdCQUFnQixFQUFFUixNQUFNLENBQUNRO0FBQTFCLE9BQVgsQ0FBUjs7QUFDSjtBQUNJLGFBQU9ULEtBQVA7QUFqQlI7QUFtQkgsQ0FwQkQ7O0FBcUJlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL2Zvcm0ucmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgXCJBRERfU1BPVVNFXCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uc3BvdXNlKTtcbiAgICAgICAgICAgIHJldHVybiAoWy4uLnN0YXRlLCB7c3BvdXNlOiBhY3Rpb24uc3BvdXNlfV0pO1xuICAgICAgICBjYXNlIFwiU1BPVVNFX0FHRVwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLnNwb3VzZUFnZSk7XG4gICAgICAgICAgICByZXR1cm4gKFsuLi5zdGF0ZSwge3Nwb3VzZUFnZTogYWN0aW9uLnNwb3VzZUFnZX1dKTtcbiAgICAgICAgY2FzZSBcIkhBU19DSElMRFJFTlwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmhhc0NoaWxkcmVuKTtcbiAgICAgICAgICAgIHJldHVybiAoWy4uLnN0YXRlLCB7aGFzQ2hpbGRyZW46IGFjdGlvbi5oYXNDaGlsZHJlbn1dKTtcbiAgICAgICAgY2FzZSBcIk5VTUJFUl9PRl9DSElMRFJFTlwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLm51bWJlck9mQ2hpbGRyZW4pO1xuICAgICAgICAgICAgcmV0dXJuIChbLi4uc3RhdGUsIHtudW1iZXJPZkNoaWxkcmVuOiBhY3Rpb24ubnVtYmVyT2ZDaGlsZHJlbn1dKTtcbiAgICAgICAgY2FzZSBcIkNISUxEUkVOX0FHRV9BUlJBWVwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkcmVuIGFnZSBhcnJheScsYWN0aW9uLmNoaWxkcmVuQWdlQXJyYXkpO1xuICAgICAgICAgICAgcmV0dXJuIChbLi4uc3RhdGUsIHtjaGlsZHJlbkFnZUFycmF5OiBhY3Rpb24uY2hpbGRyZW5BZ2VBcnJheX1dKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/form.reducer.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sammyunterman/WebstormProjects/react-next/pages/index.js */"./pages/index.js");


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

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Container\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI/ZGM2MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Container\n");

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