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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SpouseForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ \"react-bootstrap/Button\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpouseForm.module.css */ \"./components/SpouseForm.module.css\");\n/* harmony import */ var _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ \"react-bootstrap/Container\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ \"react-bootstrap/Row\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ \"react-bootstrap/Col\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/FormContext */ \"./contexts/FormContext.js\");\n/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/FormControl */ \"react-bootstrap/FormControl\");\n/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/InputGroup */ \"react-bootstrap/InputGroup\");\n/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nfunction SpouseForm() {\n  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_6__[\"DispatchContext\"]);\n  let {\n    0: hasSpouse,\n    1: updateHasSpouse\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])();\n  let spouse;\n  let spouseAge;\n  let nextPage;\n\n  if (hasSpouse) {\n    spouse = __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      xs: 12,\n      md: 12,\n      lg: 12\n    }, __jsx(\"br\", null), __jsx(\"br\", null), __jsx(\"h3\", {\n      className: _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header\n    }, \"How old is your spouse or partner?\")));\n    spouseAge = __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      xs: 12,\n      md: 12,\n      lg: 12\n    }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_8___default.a, {\n      className: \"mb-3\"\n    }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_8___default.a.Prepend, null, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_8___default.a.Text, null, \"Age\")), __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_7___default.a, null))));\n    nextPage = __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      xs: 12,\n      md: 12,\n      lg: 12\n    }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      onClick: e => {\n        dispatch({\n          type: \"SPOUSE_AGE\",\n          spouseAge: e.target.value\n        });\n        router.push('/children');\n      },\n      style: {\n        width: '100%'\n      },\n      variant: \"outline-primary\",\n      size: \"lg\"\n    }, \"Next\"), ' '));\n  }\n\n  return __jsx(\"div\", null, __jsx(\"h2\", {\n    className: _SpouseForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header\n  }, \"Do you have a spouse or partner?\"), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    xs: 6,\n    md: 6,\n    lg: 6\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    onClick: () => {\n      dispatch({\n        type: \"ADD_SPOUSE\",\n        spouse: true\n      });\n      updateHasSpouse(true);\n    },\n    style: {\n      width: '100%'\n    },\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"Yes\"), ' '), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    xs: 6,\n    md: 6,\n    lg: 6\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    onClick: () => {\n      dispatch({\n        type: \"ADD_SPOUSE\",\n        spouse: false\n      });\n      router.push('/children');\n    },\n    style: {\n      width: '100%'\n    },\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"No\"), ' ')), spouse, spouseAge, nextPage));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nwb3VzZUZvcm0uanM/OGE3MiJdLCJuYW1lcyI6WyJTcG91c2VGb3JtIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiRGlzcGF0Y2hDb250ZXh0IiwiaGFzU3BvdXNlIiwidXBkYXRlSGFzU3BvdXNlIiwidXNlU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzcG91c2UiLCJzcG91c2VBZ2UiLCJuZXh0UGFnZSIsInN0eWxlcyIsImhlYWRlciIsImUiLCJ0eXBlIiwidGFyZ2V0IiwidmFsdWUiLCJwdXNoIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFVBQVQsR0FBc0I7QUFDakMsUUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyxxRUFBRCxDQUEzQjtBQUNBLE1BQUk7QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUErQkMsc0RBQVEsQ0FBQyxLQUFELENBQTNDO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQUlDLE1BQUo7QUFDQSxNQUFJQyxTQUFKO0FBQ0EsTUFBSUMsUUFBSjs7QUFDQSxNQUFJUCxTQUFKLEVBQWU7QUFDWEssVUFBTSxHQUFHLE1BQUMsMERBQUQsUUFDTCxNQUFDLDBEQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBYSxRQUFFLEVBQUUsRUFBakI7QUFBcUIsUUFBRSxFQUFFO0FBQXpCLE9BQ0ksaUJBREosRUFDUyxpQkFEVCxFQUVJO0FBQUksZUFBUyxFQUFFRyw2REFBTSxDQUFDQztBQUF0Qiw0Q0FGSixDQURLLENBQVQ7QUFNQUgsYUFBUyxHQUFHLE1BQUMsMERBQUQsUUFDUixNQUFDLDBEQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBYSxRQUFFLEVBQUUsRUFBakI7QUFBcUIsUUFBRSxFQUFFO0FBQXpCLE9BQ0ksTUFBQyxpRUFBRDtBQUFZLGVBQVMsRUFBQztBQUF0QixPQUNJLE1BQUMsaUVBQUQsQ0FBWSxPQUFaLFFBQ0ksTUFBQyxpRUFBRCxDQUFZLElBQVosY0FESixDQURKLEVBSUksTUFBQyxrRUFBRCxPQUpKLENBREosQ0FEUSxDQUFaO0FBVUFDLFlBQVEsR0FBRyxNQUFDLDBEQUFELFFBQ1AsTUFBQywwREFBRDtBQUFLLFFBQUUsRUFBRSxFQUFUO0FBQWEsUUFBRSxFQUFFLEVBQWpCO0FBQXFCLFFBQUUsRUFBRTtBQUF6QixPQUNJLE1BQUMsNkRBQUQ7QUFDSSxhQUFPLEVBQUdHLENBQUQsSUFBTztBQUNaYixnQkFBUSxDQUFDO0FBQUNjLGNBQUksRUFBRSxZQUFQO0FBQXFCTCxtQkFBUyxFQUFFSSxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFBekMsU0FBRCxDQUFSO0FBQ0FWLGNBQU0sQ0FBQ1csSUFBUCxDQUFZLFdBQVo7QUFDSCxPQUpMO0FBS0ksV0FBSyxFQUFFO0FBQUNDLGFBQUssRUFBRTtBQUFSLE9BTFg7QUFNSSxhQUFPLEVBQUMsaUJBTlo7QUFPSSxVQUFJLEVBQUM7QUFQVCxjQURKLEVBUWlDLEdBUmpDLENBRE8sQ0FBWDtBQVlIOztBQUNELFNBQ0ksbUJBQ0k7QUFBSSxhQUFTLEVBQUVQLDZEQUFNLENBQUNDO0FBQXRCLHdDQURKLEVBRUksTUFBQyxnRUFBRCxRQUNJLE1BQUMsMERBQUQsUUFDSSxNQUFDLDBEQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBWSxNQUFFLEVBQUUsQ0FBaEI7QUFBbUIsTUFBRSxFQUFFO0FBQXZCLEtBQ0ksTUFBQyw2REFBRDtBQUNJLFdBQU8sRUFBRSxNQUFNO0FBQ1haLGNBQVEsQ0FBQztBQUFDYyxZQUFJLEVBQUUsWUFBUDtBQUFxQk4sY0FBTSxFQUFFO0FBQTdCLE9BQUQsQ0FBUjtBQUNBSixxQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNILEtBSkw7QUFLSSxTQUFLLEVBQUU7QUFBQ2MsV0FBSyxFQUFFO0FBQVIsS0FMWDtBQU1JLFdBQU8sRUFBQyxpQkFOWjtBQU9JLFFBQUksRUFBQztBQVBULFdBREosRUFRZ0MsR0FSaEMsQ0FESixFQVdJLE1BQUMsMERBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLE1BQUUsRUFBRSxDQUFoQjtBQUFtQixNQUFFLEVBQUU7QUFBdkIsS0FDSSxNQUFDLDZEQUFEO0FBQ0ksV0FBTyxFQUFFLE1BQU07QUFDWGxCLGNBQVEsQ0FBQztBQUFDYyxZQUFJLEVBQUUsWUFBUDtBQUFxQk4sY0FBTSxFQUFFO0FBQTdCLE9BQUQsQ0FBUjtBQUNBRixZQUFNLENBQUNXLElBQVAsQ0FBWSxXQUFaO0FBQ0gsS0FKTDtBQUtJLFNBQUssRUFBRTtBQUFDQyxXQUFLLEVBQUU7QUFBUixLQUxYO0FBTUksV0FBTyxFQUFDLGlCQU5aO0FBT0ksUUFBSSxFQUFDO0FBUFQsVUFESixFQVErQixHQVIvQixDQVhKLENBREosRUF1QktWLE1BdkJMLEVBd0JLQyxTQXhCTCxFQXlCS0MsUUF6QkwsQ0FGSixDQURKO0FBaUNIIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TcG91c2VGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU3BvdXNlRm9ybS5tb2R1bGUuY3NzJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCB7RGlzcGF0Y2hDb250ZXh0fSBmcm9tIFwiLi4vY29udGV4dHMvRm9ybUNvbnRleHRcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IElucHV0R3JvdXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0lucHV0R3JvdXAnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwb3VzZUZvcm0oKSB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VDb250ZXh0KERpc3BhdGNoQ29udGV4dCk7XG4gICAgbGV0IFtoYXNTcG91c2UsIHVwZGF0ZUhhc1Nwb3VzZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgbGV0IHNwb3VzZTtcbiAgICBsZXQgc3BvdXNlQWdlO1xuICAgIGxldCBuZXh0UGFnZTtcbiAgICBpZiAoaGFzU3BvdXNlKSB7XG4gICAgICAgIHNwb3VzZSA9IDxSb3c+XG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezEyfSBsZz17MTJ9PlxuICAgICAgICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5Ib3cgb2xkIGlzIHlvdXIgc3BvdXNlIG9yIHBhcnRuZXI/PC9oMz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz47XG4gICAgICAgIHNwb3VzZUFnZSA9IDxSb3c+XG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezEyfSBsZz17MTJ9PlxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlRleHQ+QWdlPC9JbnB1dEdyb3VwLlRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wvPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz47XG4gICAgICAgIG5leHRQYWdlID0gPFJvdz5cbiAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17MTJ9IGxnPXsxMn0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiU1BPVVNFX0FHRVwiLCBzcG91c2VBZ2U6IGUudGFyZ2V0LnZhbHVlfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2NoaWxkcmVuJylcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiID5OZXh0PC9CdXR0b24+eycgJ31cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5EbyB5b3UgaGF2ZSBhIHNwb3VzZSBvciBwYXJ0bmVyPzwvaDI+XG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezZ9IG1kPXs2fSBsZz17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJBRERfU1BPVVNFXCIsIHNwb3VzZTogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVIYXNTcG91c2UodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiID5ZZXM8L0J1dHRvbj57JyAnfVxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gbWQ9ezZ9IGxnPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIkFERF9TUE9VU0VcIiwgc3BvdXNlOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2NoaWxkcmVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCIgPk5vPC9CdXR0b24+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAge3Nwb3VzZX1cbiAgICAgICAgICAgICAgICB7c3BvdXNlQWdlfVxuICAgICAgICAgICAgICAgIHtuZXh0UGFnZX1cblxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SpouseForm.js\n");

/***/ }),

/***/ "./components/SpouseForm.module.css":
/*!******************************************!*\
  !*** ./components/SpouseForm.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"SpouseForm_header__2aWS2\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nwb3VzZUZvcm0ubW9kdWxlLmNzcz84NjRmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TcG91c2VGb3JtLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJTcG91c2VGb3JtX2hlYWRlcl9fMmFXUzJcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SpouseForm.module.css\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_FormApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormApp */ \"./components/FormApp.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Index(props) {\n  return __jsx(\"div\", null, __jsx(_components_FormApp__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index); // get intiial props runs first time on the server,\n// and each consecutive time on the client\n// Index.getInitialProps = async (ctx) => {\n//\n//     // const res = await axios.get('https://jsonplaceholder.typicode.com/posts')\n//     // const {data} = res;\n//     // return {posts: data} //must be an object\n//     return {}\n//\n// };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFDQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDbEIsU0FDRyxtQkFDSSxNQUFDLDJEQUFELE9BREosQ0FESDtBQUtIOztBQUNjRCxvRUFBZixFLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybUFwcCBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1BcHAnXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgPGRpdj5cbiAgICAgICAgICAgPEZvcm1BcHAvPlxuICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cblxuLy8gZ2V0IGludGlpYWwgcHJvcHMgcnVucyBmaXJzdCB0aW1lIG9uIHRoZSBzZXJ2ZXIsXG4vLyBhbmQgZWFjaCBjb25zZWN1dGl2ZSB0aW1lIG9uIHRoZSBjbGllbnRcbi8vIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbi8vXG4vLyAgICAgLy8gY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKVxuLy8gICAgIC8vIGNvbnN0IHtkYXRhfSA9IHJlcztcbi8vICAgICAvLyByZXR1cm4ge3Bvc3RzOiBkYXRhfSAvL211c3QgYmUgYW4gb2JqZWN0XG4vLyAgICAgcmV0dXJuIHt9XG4vL1xuLy8gfTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./reducers/form.reducer.js":
/*!**********************************!*\
  !*** ./reducers/form.reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case \"ADD_SPOUSE\":\n      console.log(action.spouse);\n      return [...state, {\n        spouse: action.spouse\n      }];\n\n    case \"SPOUSE_AGE\":\n      return [...state, {\n        spouseAge: action.spouseAge\n      }];\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXIuanM/MWNmMyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInNwb3VzZSIsInNwb3VzZUFnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxPQUFPLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQy9CLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFNBQUssWUFBTDtBQUNJQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBTSxDQUFDSSxNQUFuQjtBQUNBLGFBQVEsQ0FBQyxHQUFHTCxLQUFKLEVBQVc7QUFBQ0ssY0FBTSxFQUFFSixNQUFNLENBQUNJO0FBQWhCLE9BQVgsQ0FBUjs7QUFDSixTQUFLLFlBQUw7QUFDSSxhQUFRLENBQUMsR0FBR0wsS0FBSixFQUFXO0FBQUNNLGlCQUFTLEVBQUVMLE1BQU0sQ0FBQ0s7QUFBbkIsT0FBWCxDQUFSOztBQUNKO0FBQ0ksYUFBT04sS0FBUDtBQVBSO0FBU0gsQ0FWRDs7QUFXZUQsc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlIFwiQUREX1NQT1VTRVwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLnNwb3VzZSlcbiAgICAgICAgICAgIHJldHVybiAoWy4uLnN0YXRlLCB7c3BvdXNlOiBhY3Rpb24uc3BvdXNlfV0pO1xuICAgICAgICBjYXNlIFwiU1BPVVNFX0FHRVwiOlxuICAgICAgICAgICAgcmV0dXJuIChbLi4uc3RhdGUsIHtzcG91c2VBZ2U6IGFjdGlvbi5zcG91c2VBZ2V9XSlcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/form.reducer.js\n");

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

/***/ "react-bootstrap/Row":
/*!**************************************!*\
  !*** external "react-bootstrap/Row" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Row\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvUm93XCI/MWM3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAvUm93LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Row\n");

/***/ })

/******/ });