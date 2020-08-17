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

/***/ "./components/DobForm.js":
/*!*******************************!*\
  !*** ./components/DobForm.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DobForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"react-bootstrap/Button\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _DobForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DobForm.module.css */ \"./components/DobForm.module.css\");\n/* harmony import */ var _DobForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_DobForm_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ \"react-bootstrap/Container\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ \"react-bootstrap/Row\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ \"react-bootstrap/Col\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/FormContext */ \"./contexts/FormContext.js\");\n/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/ProgressBar */ \"react-bootstrap/ProgressBar\");\n/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Form */ \"react-bootstrap/Form\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-datepicker */ \"react-datepicker\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_10__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nfunction DobForm() {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_7__[\"DispatchContext\"]);\n  const now = 35;\n\n  const progressInstance = __jsx(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    style: {\n      height: '0.5rem'\n    },\n    now: now\n  });\n\n  const {\n    0: startDate,\n    1: setStartDate\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(new Date());\n  return __jsx(\"div\", null, __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    xs: {\n      span: 10,\n      offset: 1\n    },\n    md: {\n      span: 10,\n      offset: 1\n    },\n    lg: {\n      span: 10,\n      offset: 1\n    }\n  }, progressInstance)), __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, null, __jsx(\"h2\", {\n    className: _DobForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n  }, \"What is your date of birth?\"))), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    onSubmit: e => {\n      e.preventDefault();\n      console.log('form submit dob', startDate);\n      dispatch({\n        type: \"DOB\",\n        dob: startDate\n      });\n      router.push('/gender');\n    }\n  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    xs: 12,\n    md: {\n      span: 6,\n      offset: 3\n    },\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    selected: startDate,\n    onChange: date => setStartDate(date),\n    className: _DobForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.dobCSS\n  }))), __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    xs: 12,\n    md: {\n      span: 6,\n      offset: 3\n    },\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: \"align-button\",\n    style: {\n      width: \"100%\"\n    },\n    variant: \"outline-primary\",\n    size: \"lg\",\n    type: \"submit\"\n  }, \"Next\"), \" \")))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RvYkZvcm0uanM/NWRhMyJdLCJuYW1lcyI6WyJEb2JGb3JtIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiRGlzcGF0Y2hDb250ZXh0Iiwibm93IiwicHJvZ3Jlc3NJbnN0YW5jZSIsImhlaWdodCIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsInVzZVN0YXRlIiwiRGF0ZSIsInNwYW4iLCJvZmZzZXQiLCJzdHlsZXMiLCJoZWFkZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsImRvYiIsInB1c2giLCJkYXRlIiwiZG9iQ1NTIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxPQUFULEdBQW1CO0FBQzlCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLHdEQUFVLENBQUNDLHFFQUFELENBQTNCO0FBQ0EsUUFBTUMsR0FBRyxHQUFHLEVBQVo7O0FBQ0EsUUFBTUMsZ0JBQWdCLEdBQUcsTUFBQyxrRUFBRDtBQUFhLFNBQUssRUFBRTtBQUFDQyxZQUFNLEVBQUU7QUFBVCxLQUFwQjtBQUF3QyxPQUFHLEVBQUVGO0FBQTdDLElBQXpCOztBQUNBLFFBQU07QUFBQSxPQUFDRyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxJQUFJQyxJQUFKLEVBQUQsQ0FBMUM7QUFDQSxTQUNJLG1CQUNJLGlCQURKLEVBRUksTUFBQywwREFBRCxRQUNJLE1BQUMsMERBQUQ7QUFDSSxNQUFFLEVBQUU7QUFBRUMsVUFBSSxFQUFFLEVBQVI7QUFBWUMsWUFBTSxFQUFFO0FBQXBCLEtBRFI7QUFFSSxNQUFFLEVBQUU7QUFBRUQsVUFBSSxFQUFFLEVBQVI7QUFBWUMsWUFBTSxFQUFFO0FBQXBCLEtBRlI7QUFHSSxNQUFFLEVBQUU7QUFBRUQsVUFBSSxFQUFFLEVBQVI7QUFBWUMsWUFBTSxFQUFFO0FBQXBCO0FBSFIsS0FLS1AsZ0JBTEwsQ0FESixDQUZKLEVBV0ksaUJBWEosRUFZSSxNQUFDLDBEQUFELFFBQ0ksTUFBQywwREFBRCxRQUNJO0FBQUksYUFBUyxFQUFFUSwwREFBTSxDQUFDQztBQUF0QixtQ0FESixDQURKLENBWkosRUFpQkksTUFBQyxnRUFBRCxRQUNJLE1BQUMsMkRBQUQ7QUFBTSxZQUFRLEVBQUdDLENBQUQsSUFBTztBQUNuQkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCWCxTQUEvQjtBQUNBTixjQUFRLENBQUM7QUFBRWtCLFlBQUksRUFBRSxLQUFSO0FBQWVDLFdBQUcsRUFBRWI7QUFBcEIsT0FBRCxDQUFSO0FBQ0FSLFlBQU0sQ0FBQ3NCLElBQVAsQ0FBWSxTQUFaO0FBQ0g7QUFMRCxLQU1JLE1BQUMsMERBQUQsUUFDSSxNQUFDLDBEQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUU7QUFBRVYsVUFBSSxFQUFFLENBQVI7QUFBV0MsWUFBTSxFQUFFO0FBQW5CLEtBQWpCO0FBQXlDLE1BQUUsRUFBRTtBQUFFRCxVQUFJLEVBQUUsQ0FBUjtBQUFXQyxZQUFNLEVBQUU7QUFBbkI7QUFBN0MsS0FDSSxNQUFDLHdEQUFEO0FBQ0ksWUFBUSxFQUFFTCxTQURkO0FBRUksWUFBUSxFQUFFZSxJQUFJLElBQUlkLFlBQVksQ0FBQ2MsSUFBRCxDQUZsQztBQUdJLGFBQVMsRUFBRVQsMERBQU0sQ0FBQ1U7QUFIdEIsSUFESixDQURKLENBTkosRUFlSSxpQkFmSixFQWdCSSxNQUFDLDBEQUFELFFBQ0ksTUFBQywwREFBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFO0FBQUVaLFVBQUksRUFBRSxDQUFSO0FBQVdDLFlBQU0sRUFBRTtBQUFuQixLQUFqQjtBQUF5QyxNQUFFLEVBQUU7QUFBRUQsVUFBSSxFQUFFLENBQVI7QUFBV0MsWUFBTSxFQUFFO0FBQW5CO0FBQTdDLEtBQ0ksTUFBQyw2REFBRDtBQUNJLGFBQVMsRUFBQyxjQURkO0FBRUksU0FBSyxFQUFFO0FBQUVZLFdBQUssRUFBRTtBQUFULEtBRlg7QUFHSSxXQUFPLEVBQUMsaUJBSFo7QUFJSSxRQUFJLEVBQUMsSUFKVDtBQUtJLFFBQUksRUFBQztBQUxULFlBREosRUFTYyxHQVRkLENBREosQ0FoQkosQ0FESixDQWpCSixDQURKO0FBb0RIIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Eb2JGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRG9iRm9ybS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvUm93XCI7XG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XG5pbXBvcnQgeyBEaXNwYXRjaENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvRm9ybUNvbnRleHRcIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9iRm9ybSgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoRGlzcGF0Y2hDb250ZXh0KTtcbiAgICBjb25zdCBub3cgPSAzNTtcbiAgICBjb25zdCBwcm9ncmVzc0luc3RhbmNlID0gPFByb2dyZXNzQmFyIHN0eWxlPXt7aGVpZ2h0OiAnMC41cmVtJ319IG5vdz17bm93fSAvPjtcbiAgICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAgICAgIHhzPXt7IHNwYW46IDEwLCBvZmZzZXQ6IDEgfX1cbiAgICAgICAgICAgICAgICAgICAgbWQ9e3sgc3BhbjogMTAsIG9mZnNldDogMSB9fVxuICAgICAgICAgICAgICAgICAgICBsZz17eyBzcGFuOiAxMCwgb2Zmc2V0OiAxIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7cHJvZ3Jlc3NJbnN0YW5jZX1cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PldoYXQgaXMgeW91ciBkYXRlIG9mIGJpcnRoPzwvaDI+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Zvcm0gc3VibWl0IGRvYicsIHN0YXJ0RGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkRPQlwiLCBkb2I6IHN0YXJ0RGF0ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9nZW5kZXInKTtcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17eyBzcGFuOiA2LCBvZmZzZXQ6IDMgfX0gbGc9e3sgc3BhbjogNiwgb2Zmc2V0OiAzIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzdGFydERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtkYXRlID0+IHNldFN0YXJ0RGF0ZShkYXRlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZG9iQ1NTfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9e3sgc3BhbjogNiwgb2Zmc2V0OiAzIH19IGxnPXt7IHNwYW46IDYsIG9mZnNldDogMyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DobForm.js\n");

/***/ }),

/***/ "./components/DobForm.module.css":
/*!***************************************!*\
  !*** ./components/DobForm.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"DobForm_header__2Oog0\",\n\t\"progress\": \"DobForm_progress__2bEA3\",\n\t\"dobCSS\": \"DobForm_dobCSS__18l2r\",\n\t\"react-datepicker-wrapper\": \"DobForm_react-datepicker-wrapper__3TA_J\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RvYkZvcm0ubW9kdWxlLmNzcz9iODNkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Eb2JGb3JtLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJEb2JGb3JtX2hlYWRlcl9fMk9vZzBcIixcblx0XCJwcm9ncmVzc1wiOiBcIkRvYkZvcm1fcHJvZ3Jlc3NfXzJiRUEzXCIsXG5cdFwiZG9iQ1NTXCI6IFwiRG9iRm9ybV9kb2JDU1NfXzE4bDJyXCIsXG5cdFwicmVhY3QtZGF0ZXBpY2tlci13cmFwcGVyXCI6IFwiRG9iRm9ybV9yZWFjdC1kYXRlcGlja2VyLXdyYXBwZXJfXzNUQV9KXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DobForm.module.css\n");

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

/***/ "./pages/dob.js":
/*!**********************!*\
  !*** ./pages/dob.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return dob; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_DobForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DobForm */ \"./components/DobForm.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction dob() {\n  return __jsx(_components_DobForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kb2IuanM/NjA4OCJdLCJuYW1lcyI6WyJkb2IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULEdBQWU7QUFDMUIsU0FDSSxNQUFDLDJEQUFELE9BREo7QUFHSCIsImZpbGUiOiIuL3BhZ2VzL2RvYi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRG9iRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Eb2JGb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRvYigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RG9iRm9ybS8+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dob.js\n");

/***/ }),

/***/ "./reducers/form.reducer.js":
/*!**********************************!*\
  !*** ./reducers/form.reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case \"ID\":\n      if (state.id) {\n        return state;\n      } else {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          id: action.id\n        });\n      }\n\n    case \"ADD_SPOUSE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        spouse: action.spouse\n      });\n\n    case \"SPOUSE_AGE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        spouseAge: action.spouseAge\n      });\n\n    case \"HAS_CHILDREN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasChildren: action.hasChildren\n      });\n\n    case \"NUMBER_OF_CHILDREN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        numberOfChildren: action.numberOfChildren\n      });\n\n    case \"CHILDREN_AGE_ARRAY\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        childrenAgeArray: action.childrenAgeArray\n      });\n\n    case \"PAY_FOR_COLLEGE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        payForCollege: action.payForCollege\n      });\n\n    case \"DOB\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        dob: action.dob\n      });\n\n    case \"SEX\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        sex: action.sex\n      });\n\n    case \"TOBACCO\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        tobacco: action.tobacco\n      });\n\n    case \"HEALTH_CONDITION\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        healthCondition: action.healthCondition\n      });\n\n    case \"YOUR_INCOME\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        yourIncome: action.yourIncome\n      });\n\n    case \"SPOUSE_INCOME\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        spouseIncome: action.spouseIncome\n      });\n\n    case \"RENT_OR_OWN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        rentOrOwn: action.rentOrOwn\n      });\n\n    case \"MONTHLY_RENT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        monthlyRent: action.monthlyRent\n      });\n\n    case \"MORTGAGE_CURRENT_BALANCE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mortgageCurrentBalance: action.mortgageCurrentBalance\n      });\n\n    case \"MORTGAGE_MONTHLY_PAYMENT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mortgageMonthlyPayment: action.mortgageMonthlyPayment\n      });\n\n    case \"LIFE_INSURANCE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        lifeInsurance: action.lifeInsurance\n      });\n\n    case \"LIFE_INSURANCE_EMPLOYER\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        lifeInsuranceEmployer: action.lifeInsuranceEmployer\n      });\n\n    case \"LIFE_INSURANCE_PERSONAL\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        lifeInsurancePersonal: action.lifeInsurancePersonal\n      });\n\n    case \"HAS_SAVINGS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasSavings: action.hasSavings\n      });\n\n    case \"HAS_RETIREMENT_SAVINGS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasRetirementSavings: action.hasRetirementSavings\n      });\n\n    case \"HAS_NON_RETIREMENT_SAVINGS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasNonRetirementSavings: action.hasNonRetirementSavings\n      });\n\n    case \"HAS_DEBT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debt: action.debt\n      });\n\n    case \"DEBT_CREDIT_CARD\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debtCreditCard: action.debtCreditCard\n      });\n\n    case \"DEBT_STUDENT_LOAN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debtStudentLoan: action.debtStudentLoan\n      });\n\n    case \"DEBT_HOME_EQUITY\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debtHomeEquity: action.debtHomeEquity\n      });\n\n    case \"DEBT_LINE_OF_CREDIT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debtLineOfCredit: action.debtLineOfCredit\n      });\n\n    case \"DEBT_OTHER\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        debtOther: action.debtOther\n      });\n\n    case \"NAME_FIRST\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        nameFirst: action.nameFirst\n      });\n\n    case \"NAME_LAST\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        nameLast: action.nameLast\n      });\n\n    case \"NAME_EMAIL\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        nameEmail: action.nameEmail\n      });\n\n    case \"NAME_PHONE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        namePhone: action.namePhone\n      });\n\n    case \"EXPENSE_MORTGAGE_RENT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseMortgageAndRent: action.expenseMortgageAndRent\n      });\n\n    case \"EXPENSE_HOUSING_BILLS_UTILITIES\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseHousingBillsUtilities: action.expenseHousingBillsUtilities\n      });\n\n    case \"EXPENSE_GROCERIES_RESTAURANTS_ALCOHOL\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseGroceriesRestaurantsAlcohol: action.expenseGroceriesRestaurantsAlcohol\n      });\n\n    case \"EXPENSE_PHONE_INTERNET_CABLE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expensePhoneInternetCable: action.expensePhoneInternetCable\n      });\n\n    case \"EXPENSE_SHOPPING_FITNESS_GROOMING\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseShoppingFitnessGrooming: action.expenseShoppingFitnessGrooming\n      });\n\n    case \"EXPENSE_CARS_TAXIS_TRANSIT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseCarsTaxisPublicTransit: action.expenseCarsTaxisPublicTransit\n      });\n\n    case \"EXPENSE_CHILDCARE_EDUCATION\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseChildcareEducation: action.expenseChildcareEducation\n      });\n\n    case \"EXPENSE_DISCRETIONARY_TRAVEL_REC_GIFTS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseDiscretionaryTravelRecGifts: action.expenseDiscretionaryTravelRecGifts\n      });\n\n    case \"EXPENSE_TOTAL\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        expenseTotal: action.expenseTotal\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXIuanM/MWNmMyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaWQiLCJzcG91c2UiLCJzcG91c2VBZ2UiLCJoYXNDaGlsZHJlbiIsIm51bWJlck9mQ2hpbGRyZW4iLCJjaGlsZHJlbkFnZUFycmF5IiwicGF5Rm9yQ29sbGVnZSIsImRvYiIsInNleCIsInRvYmFjY28iLCJoZWFsdGhDb25kaXRpb24iLCJ5b3VySW5jb21lIiwic3BvdXNlSW5jb21lIiwicmVudE9yT3duIiwibW9udGhseVJlbnQiLCJtb3J0Z2FnZUN1cnJlbnRCYWxhbmNlIiwibW9ydGdhZ2VNb250aGx5UGF5bWVudCIsImxpZmVJbnN1cmFuY2UiLCJsaWZlSW5zdXJhbmNlRW1wbG95ZXIiLCJsaWZlSW5zdXJhbmNlUGVyc29uYWwiLCJoYXNTYXZpbmdzIiwiaGFzUmV0aXJlbWVudFNhdmluZ3MiLCJoYXNOb25SZXRpcmVtZW50U2F2aW5ncyIsImRlYnQiLCJkZWJ0Q3JlZGl0Q2FyZCIsImRlYnRTdHVkZW50TG9hbiIsImRlYnRIb21lRXF1aXR5IiwiZGVidExpbmVPZkNyZWRpdCIsImRlYnRPdGhlciIsIm5hbWVGaXJzdCIsIm5hbWVMYXN0IiwibmFtZUVtYWlsIiwibmFtZVBob25lIiwiZXhwZW5zZU1vcnRnYWdlQW5kUmVudCIsImV4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXMiLCJleHBlbnNlR3JvY2VyaWVzUmVzdGF1cmFudHNBbGNvaG9sIiwiZXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZSIsImV4cGVuc2VTaG9wcGluZ0ZpdG5lc3NHcm9vbWluZyIsImV4cGVuc2VDYXJzVGF4aXNQdWJsaWNUcmFuc2l0IiwiZXhwZW5zZUNoaWxkY2FyZUVkdWNhdGlvbiIsImV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHMiLCJleHBlbnNlVG90YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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O0FBQWtCc0MsMENBQWtDLEVBQUVyQyxNQUFNLENBQUNxQztBQUE3RDs7QUFDSixTQUFLLDhCQUFMO0FBQ0ksNkNBQVd0QyxLQUFYO0FBQWtCdUMsaUNBQXlCLEVBQUV0QyxNQUFNLENBQUNzQztBQUFwRDs7QUFDSixTQUFLLG1DQUFMO0FBQ0ksNkNBQVd2QyxLQUFYO0FBQWtCd0Msc0NBQThCLEVBQUV2QyxNQUFNLENBQUN1QztBQUF6RDs7QUFDSixTQUFLLDRCQUFMO0FBQ0ksNkNBQVd4QyxLQUFYO0FBQWtCeUMscUNBQTZCLEVBQUV4QyxNQUFNLENBQUN3QztBQUF4RDs7QUFDSixTQUFLLDZCQUFMO0FBQ0ksNkNBQVd6QyxLQUFYO0FBQWtCMEMsaUNBQXlCLEVBQUV6QyxNQUFNLENBQUN5QztBQUFwRDs7QUFDSixTQUFLLHdDQUFMO0FBQ0ksNkNBQVcxQyxLQUFYO0FBQWtCMkMsMENBQWtDLEVBQUUxQyxNQUFNLENBQUMwQztBQUE3RDs7QUFDSixTQUFLLGVBQUw7QUFDSSw2Q0FBVzNDLEtBQVg7QUFBa0I0QyxvQkFBWSxFQUFFM0MsTUFBTSxDQUFDMkM7QUFBdkM7O0FBQ0o7QUFDSSxhQUFPNUMsS0FBUDtBQTFGUjtBQTRGSCxDQTdGRDs7QUE4RmVELHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvZm9ybS5yZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICAgICAgY2FzZSBcIklEXCI6XG4gICAgICAgICAgICBpZiAoc3RhdGUuaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaWQ6IGFjdGlvbi5pZH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcIkFERF9TUE9VU0VcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwb3VzZTogYWN0aW9uLnNwb3VzZX07XG4gICAgICAgIGNhc2UgXCJTUE9VU0VfQUdFXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcG91c2VBZ2U6IGFjdGlvbi5zcG91c2VBZ2V9O1xuICAgICAgICBjYXNlIFwiSEFTX0NISUxEUkVOXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoYXNDaGlsZHJlbjogYWN0aW9uLmhhc0NoaWxkcmVufTtcbiAgICAgICAgY2FzZSBcIk5VTUJFUl9PRl9DSElMRFJFTlwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbnVtYmVyT2ZDaGlsZHJlbjogYWN0aW9uLm51bWJlck9mQ2hpbGRyZW59O1xuICAgICAgICBjYXNlIFwiQ0hJTERSRU5fQUdFX0FSUkFZXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBjaGlsZHJlbkFnZUFycmF5OiBhY3Rpb24uY2hpbGRyZW5BZ2VBcnJheX07XG4gICAgICAgIGNhc2UgXCJQQVlfRk9SX0NPTExFR0VcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHBheUZvckNvbGxlZ2U6IGFjdGlvbi5wYXlGb3JDb2xsZWdlfTtcbiAgICAgICAgY2FzZSBcIkRPQlwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZG9iOiBhY3Rpb24uZG9ifTtcbiAgICAgICAgY2FzZSBcIlNFWFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc2V4OiBhY3Rpb24uc2V4fTtcbiAgICAgICAgY2FzZSBcIlRPQkFDQ09cIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHRvYmFjY286IGFjdGlvbi50b2JhY2NvfTtcbiAgICAgICAgY2FzZSBcIkhFQUxUSF9DT05ESVRJT05cIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhlYWx0aENvbmRpdGlvbjogYWN0aW9uLmhlYWx0aENvbmRpdGlvbn07XG4gICAgICAgIGNhc2UgXCJZT1VSX0lOQ09NRVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgeW91ckluY29tZTogYWN0aW9uLnlvdXJJbmNvbWV9O1xuICAgICAgICBjYXNlIFwiU1BPVVNFX0lOQ09NRVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BvdXNlSW5jb21lOiBhY3Rpb24uc3BvdXNlSW5jb21lfTtcbiAgICAgICAgY2FzZSBcIlJFTlRfT1JfT1dOXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCByZW50T3JPd246IGFjdGlvbi5yZW50T3JPd259O1xuICAgICAgICBjYXNlIFwiTU9OVEhMWV9SRU5UXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBtb250aGx5UmVudDogYWN0aW9uLm1vbnRobHlSZW50fTtcbiAgICAgICAgY2FzZSBcIk1PUlRHQUdFX0NVUlJFTlRfQkFMQU5DRVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbW9ydGdhZ2VDdXJyZW50QmFsYW5jZTogYWN0aW9uLm1vcnRnYWdlQ3VycmVudEJhbGFuY2V9O1xuICAgICAgICBjYXNlIFwiTU9SVEdBR0VfTU9OVEhMWV9QQVlNRU5UXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBtb3J0Z2FnZU1vbnRobHlQYXltZW50OiBhY3Rpb24ubW9ydGdhZ2VNb250aGx5UGF5bWVudH07XG4gICAgICAgIGNhc2UgXCJMSUZFX0lOU1VSQU5DRVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbGlmZUluc3VyYW5jZTogYWN0aW9uLmxpZmVJbnN1cmFuY2V9O1xuICAgICAgICBjYXNlIFwiTElGRV9JTlNVUkFOQ0VfRU1QTE9ZRVJcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxpZmVJbnN1cmFuY2VFbXBsb3llcjogYWN0aW9uLmxpZmVJbnN1cmFuY2VFbXBsb3llcn07XG4gICAgICAgIGNhc2UgXCJMSUZFX0lOU1VSQU5DRV9QRVJTT05BTFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbGlmZUluc3VyYW5jZVBlcnNvbmFsOiBhY3Rpb24ubGlmZUluc3VyYW5jZVBlcnNvbmFsfTtcbiAgICAgICAgY2FzZSBcIkhBU19TQVZJTkdTXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoYXNTYXZpbmdzOiBhY3Rpb24uaGFzU2F2aW5nc307XG4gICAgICAgIGNhc2UgXCJIQVNfUkVUSVJFTUVOVF9TQVZJTkdTXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoYXNSZXRpcmVtZW50U2F2aW5nczogYWN0aW9uLmhhc1JldGlyZW1lbnRTYXZpbmdzfTtcbiAgICAgICAgY2FzZSBcIkhBU19OT05fUkVUSVJFTUVOVF9TQVZJTkdTXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoYXNOb25SZXRpcmVtZW50U2F2aW5nczogYWN0aW9uLmhhc05vblJldGlyZW1lbnRTYXZpbmdzfTtcbiAgICAgICAgY2FzZSBcIkhBU19ERUJUXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0OiBhY3Rpb24uZGVidH07XG4gICAgICAgIGNhc2UgXCJERUJUX0NSRURJVF9DQVJEXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0Q3JlZGl0Q2FyZDogYWN0aW9uLmRlYnRDcmVkaXRDYXJkfTtcbiAgICAgICAgY2FzZSBcIkRFQlRfU1RVREVOVF9MT0FOXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0U3R1ZGVudExvYW46IGFjdGlvbi5kZWJ0U3R1ZGVudExvYW59O1xuICAgICAgICBjYXNlIFwiREVCVF9IT01FX0VRVUlUWVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGVidEhvbWVFcXVpdHk6IGFjdGlvbi5kZWJ0SG9tZUVxdWl0eX07XG4gICAgICAgIGNhc2UgXCJERUJUX0xJTkVfT0ZfQ1JFRElUXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0TGluZU9mQ3JlZGl0OiBhY3Rpb24uZGVidExpbmVPZkNyZWRpdH07XG4gICAgICAgIGNhc2UgXCJERUJUX09USEVSXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0T3RoZXI6IGFjdGlvbi5kZWJ0T3RoZXJ9O1xuICAgICAgICBjYXNlIFwiTkFNRV9GSVJTVFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmFtZUZpcnN0OiBhY3Rpb24ubmFtZUZpcnN0fTtcbiAgICAgICAgY2FzZSBcIk5BTUVfTEFTVFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmFtZUxhc3Q6IGFjdGlvbi5uYW1lTGFzdH07XG4gICAgICAgIGNhc2UgXCJOQU1FX0VNQUlMXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYW1lRW1haWw6IGFjdGlvbi5uYW1lRW1haWx9O1xuICAgICAgICBjYXNlIFwiTkFNRV9QSE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmFtZVBob25lOiBhY3Rpb24ubmFtZVBob25lfTtcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfTU9SVEdBR0VfUkVOVFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZU1vcnRnYWdlQW5kUmVudDogYWN0aW9uLmV4cGVuc2VNb3J0Z2FnZUFuZFJlbnR9O1xuICAgICAgICBjYXNlIFwiRVhQRU5TRV9IT1VTSU5HX0JJTExTX1VUSUxJVElFU1wiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZUhvdXNpbmdCaWxsc1V0aWxpdGllczogYWN0aW9uLmV4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXN9O1xuICAgICAgICBjYXNlIFwiRVhQRU5TRV9HUk9DRVJJRVNfUkVTVEFVUkFOVFNfQUxDT0hPTFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZUdyb2Nlcmllc1Jlc3RhdXJhbnRzQWxjb2hvbDogYWN0aW9uLmV4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2x9O1xuICAgICAgICBjYXNlIFwiRVhQRU5TRV9QSE9ORV9JTlRFUk5FVF9DQUJMRVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZTogYWN0aW9uLmV4cGVuc2VQaG9uZUludGVybmV0Q2FibGV9O1xuICAgICAgICBjYXNlIFwiRVhQRU5TRV9TSE9QUElOR19GSVRORVNTX0dST09NSU5HXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmc6IGFjdGlvbi5leHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmd9O1xuICAgICAgICBjYXNlIFwiRVhQRU5TRV9DQVJTX1RBWElTX1RSQU5TSVRcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VDYXJzVGF4aXNQdWJsaWNUcmFuc2l0OiBhY3Rpb24uZXhwZW5zZUNhcnNUYXhpc1B1YmxpY1RyYW5zaXR9O1xuICAgICAgICBjYXNlIFwiRVhQRU5TRV9DSElMRENBUkVfRURVQ0FUSU9OXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlQ2hpbGRjYXJlRWR1Y2F0aW9uOiBhY3Rpb24uZXhwZW5zZUNoaWxkY2FyZUVkdWNhdGlvbn07XG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX0RJU0NSRVRJT05BUllfVFJBVkVMX1JFQ19HSUZUU1wiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZURpc2NyZXRpb25hcnlUcmF2ZWxSZWNHaWZ0czogYWN0aW9uLmV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHN9O1xuICAgICAgICBjYXNlIFwiRVhQRU5TRV9UT1RBTFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZVRvdGFsOiBhY3Rpb24uZXhwZW5zZVRvdGFsfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/form.reducer.js\n");

/***/ }),

/***/ 4:
/*!****************************!*\
  !*** multi ./pages/dob.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sammyunterman/WebstormProjects/react-next/pages/dob.js */"./pages/dob.js");


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

/***/ }),

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-datepicker\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kYXRlcGlja2VyXCI/NGRiZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1kYXRlcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGF0ZXBpY2tlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-datepicker\n");

/***/ })

/******/ });