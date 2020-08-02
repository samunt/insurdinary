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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MainNavbar.js":
/*!**********************************!*\
  !*** ./components/MainNavbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"react-bootstrap/Navbar\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction MainNavbar() {\n  return __jsx(\"div\", {\n    className: \"root\"\n  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    bg: \"light\",\n    variant: \"light\"\n  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a.Brand, {\n    href: \"#home\"\n  }, \"Insurdinary Insurance Advice\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainNavbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW5OYXZiYXIuanM/ZGIyZiJdLCJuYW1lcyI6WyJNYWluTmF2YmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOztBQUNBLFNBQVNBLFVBQVQsR0FBc0I7QUFDbEIsU0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0ksTUFBQyw2REFBRDtBQUFRLE1BQUUsRUFBQyxPQUFYO0FBQW1CLFdBQU8sRUFBQztBQUEzQixLQUNJLE1BQUMsNkRBQUQsQ0FBUSxLQUFSO0FBQWMsUUFBSSxFQUFDO0FBQW5CLG9DQURKLENBREosQ0FESjtBQVNIOztBQUVjQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWFpbk5hdmJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xuZnVuY3Rpb24gTWFpbk5hdmJhcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgICAgICAgIDxOYXZiYXIgYmc9XCJsaWdodFwiIHZhcmlhbnQ9XCJsaWdodFwiPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCI+XG4gICAgICAgICAgICAgICAgICAgIEluc3VyZGluYXJ5IEluc3VyYW5jZSBBZHZpY2VcbiAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgIDwvTmF2YmFyPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5OYXZiYXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MainNavbar.js\n");

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

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.min.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/FormContext */ \"./contexts/FormContext.js\");\n/* harmony import */ var _components_MainNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MainNavbar */ \"./components/MainNavbar.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_1__[\"GlobalFormProvider\"], null, __jsx(_components_MainNavbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), __jsx(Component, pageProps)));\n} // Only uncomment this method if you have blocking data requirements for\n// every single page in your application. This disables the ability to\n// perform automatic static optimization, causing every page in your app to\n// be server-side rendered.\n//\n// MyApp.getInitialProps = async (appContext) => {\n//   // calls page's `getInitialProps` and fills `appProps.pageProps`\n//   const appProps = await App.getInitialProps(appContext);\n//\n//   return { ...appProps }\n// }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDckMsU0FDSSxtRUFDSSxNQUFDLHdFQUFELFFBQ1ksTUFBQyw4REFBRCxPQURaLEVBRVksTUFBQyxTQUFELEVBQWVBLFNBQWYsQ0FGWixDQURKLENBREo7QUFRSCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWVGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2xvYmFsRm9ybVByb3ZpZGVyfSBmcm9tIFwiLi4vY29udGV4dHMvRm9ybUNvbnRleHRcIjtcbmltcG9ydCBNYWluTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL01haW5OYXZiYXJcIjtcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxHbG9iYWxGb3JtUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFpbk5hdmJhci8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0dsb2JhbEZvcm1Qcm92aWRlcj5cbiAgICAgICAgPC8+XG4gICAgICAgIClcbn1cblxuLy8gT25seSB1bmNvbW1lbnQgdGhpcyBtZXRob2QgaWYgeW91IGhhdmUgYmxvY2tpbmcgZGF0YSByZXF1aXJlbWVudHMgZm9yXG4vLyBldmVyeSBzaW5nbGUgcGFnZSBpbiB5b3VyIGFwcGxpY2F0aW9uLiBUaGlzIGRpc2FibGVzIHRoZSBhYmlsaXR5IHRvXG4vLyBwZXJmb3JtIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLCBjYXVzaW5nIGV2ZXJ5IHBhZ2UgaW4geW91ciBhcHAgdG9cbi8vIGJlIHNlcnZlci1zaWRlIHJlbmRlcmVkLlxuLy9cbi8vIE15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0KSA9PiB7XG4vLyAgIC8vIGNhbGxzIHBhZ2UncyBgZ2V0SW5pdGlhbFByb3BzYCBhbmQgZmlsbHMgYGFwcFByb3BzLnBhZ2VQcm9wc2Bcbi8vICAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xuLy9cbi8vICAgcmV0dXJuIHsgLi4uYXBwUHJvcHMgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/form.reducer.js":
/*!**********************************!*\
  !*** ./reducers/form.reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case \"ADD_SPOUSE\":\n      console.log(action.spouse);\n      return [...state, {\n        spouse: action.spouse\n      }];\n\n    case \"SPOUSE_AGE\":\n      console.log(action.spouseAge);\n      return [...state, {\n        spouseAge: action.spouseAge\n      }];\n\n    case \"HAS_CHILDREN\":\n      console.log(action.hasChildren);\n      return [...state, {\n        hasChildren: action.hasChildren\n      }];\n\n    case \"NUMBER_OF_CHILDREN\":\n      console.log(action.numberOfChildren);\n      return [...state, {\n        numberOfChildren: action.numberOfChildren\n      }];\n\n    case \"CHILDREN_AGE_ARRAY\":\n      console.log(action.childrenAgeArray);\n      return [...state, {\n        childrenAgeArray: action.childrenAgeArray\n      }];\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXIuanM/MWNmMyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInNwb3VzZSIsInNwb3VzZUFnZSIsImhhc0NoaWxkcmVuIiwibnVtYmVyT2ZDaGlsZHJlbiIsImNoaWxkcmVuQWdlQXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsT0FBTyxHQUFHLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUMvQixVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLLFlBQUw7QUFDSUMsYUFBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sQ0FBQ0ksTUFBbkI7QUFDQSxhQUFRLENBQUMsR0FBR0wsS0FBSixFQUFXO0FBQUNLLGNBQU0sRUFBRUosTUFBTSxDQUFDSTtBQUFoQixPQUFYLENBQVI7O0FBQ0osU0FBSyxZQUFMO0FBQ0lGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFNLENBQUNLLFNBQW5CO0FBQ0EsYUFBUSxDQUFDLEdBQUdOLEtBQUosRUFBVztBQUFDTSxpQkFBUyxFQUFFTCxNQUFNLENBQUNLO0FBQW5CLE9BQVgsQ0FBUjs7QUFDSixTQUFLLGNBQUw7QUFDSUgsYUFBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sQ0FBQ00sV0FBbkI7QUFDQSxhQUFRLENBQUMsR0FBR1AsS0FBSixFQUFXO0FBQUNPLG1CQUFXLEVBQUVOLE1BQU0sQ0FBQ007QUFBckIsT0FBWCxDQUFSOztBQUNKLFNBQUssb0JBQUw7QUFDSUosYUFBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sQ0FBQ08sZ0JBQW5CO0FBQ0EsYUFBUSxDQUFDLEdBQUdSLEtBQUosRUFBVztBQUFDUSx3QkFBZ0IsRUFBRVAsTUFBTSxDQUFDTztBQUExQixPQUFYLENBQVI7O0FBQ0osU0FBSyxvQkFBTDtBQUNJTCxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBTSxDQUFDUSxnQkFBbkI7QUFDQSxhQUFRLENBQUMsR0FBR1QsS0FBSixFQUFXO0FBQUNTLHdCQUFnQixFQUFFUixNQUFNLENBQUNRO0FBQTFCLE9BQVgsQ0FBUjs7QUFDSjtBQUNJLGFBQU9ULEtBQVA7QUFqQlI7QUFtQkgsQ0FwQkQ7O0FBcUJlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL2Zvcm0ucmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgXCJBRERfU1BPVVNFXCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uc3BvdXNlKTtcbiAgICAgICAgICAgIHJldHVybiAoWy4uLnN0YXRlLCB7c3BvdXNlOiBhY3Rpb24uc3BvdXNlfV0pO1xuICAgICAgICBjYXNlIFwiU1BPVVNFX0FHRVwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLnNwb3VzZUFnZSk7XG4gICAgICAgICAgICByZXR1cm4gKFsuLi5zdGF0ZSwge3Nwb3VzZUFnZTogYWN0aW9uLnNwb3VzZUFnZX1dKTtcbiAgICAgICAgY2FzZSBcIkhBU19DSElMRFJFTlwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmhhc0NoaWxkcmVuKTtcbiAgICAgICAgICAgIHJldHVybiAoWy4uLnN0YXRlLCB7aGFzQ2hpbGRyZW46IGFjdGlvbi5oYXNDaGlsZHJlbn1dKTtcbiAgICAgICAgY2FzZSBcIk5VTUJFUl9PRl9DSElMRFJFTlwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLm51bWJlck9mQ2hpbGRyZW4pO1xuICAgICAgICAgICAgcmV0dXJuIChbLi4uc3RhdGUsIHtudW1iZXJPZkNoaWxkcmVuOiBhY3Rpb24ubnVtYmVyT2ZDaGlsZHJlbn1dKTtcbiAgICAgICAgY2FzZSBcIkNISUxEUkVOX0FHRV9BUlJBWVwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmNoaWxkcmVuQWdlQXJyYXkpO1xuICAgICAgICAgICAgcmV0dXJuIChbLi4uc3RhdGUsIHtjaGlsZHJlbkFnZUFycmF5OiBhY3Rpb24uY2hpbGRyZW5BZ2VBcnJheX1dKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/form.reducer.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Navbar\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI/YWRmNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAvTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Navbar\n");

/***/ })

/******/ });