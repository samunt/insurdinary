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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"react-bootstrap/Navbar\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap-icons */ \"react-bootstrap-icons\");\n/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction MainNavbar() {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  return __jsx(\"div\", {\n    className: \"root\"\n  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    bg: \"light\",\n    variant: \"light\"\n  }, __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__[\"ArrowLeftCircleFill\"], {\n    size: 40,\n    onClick: () => {\n      router.back();\n    }\n  }), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a.Brand, {\n    href: \"#home\",\n    style: {\n      position: 'relative',\n      left: '50px'\n    }\n  }, \"Insurdinary Insurance Advice\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainNavbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW5OYXZiYXIuanM/ZGIyZiJdLCJuYW1lcyI6WyJNYWluTmF2YmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwiYmFjayIsInBvc2l0aW9uIiwibGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsR0FBc0I7QUFDbEIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLFNBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJLE1BQUMsNkRBQUQ7QUFBUSxNQUFFLEVBQUMsT0FBWDtBQUFtQixXQUFPLEVBQUM7QUFBM0IsS0FDSSxNQUFDLHlFQUFEO0FBQXFCLFFBQUksRUFBRSxFQUEzQjtBQUErQixXQUFPLEVBQUUsTUFBTTtBQUFDRCxZQUFNLENBQUNFLElBQVA7QUFBYztBQUE3RCxJQURKLEVBRUksTUFBQyw2REFBRCxDQUFRLEtBQVI7QUFBYyxRQUFJLEVBQUMsT0FBbkI7QUFBMkIsU0FBSyxFQUFFO0FBQUNDLGNBQVEsRUFBRSxVQUFYO0FBQXVCQyxVQUFJLEVBQUU7QUFBN0I7QUFBbEMsb0NBRkosQ0FESixDQURKO0FBVUg7O0FBRWNMLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NYWluTmF2YmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XG5pbXBvcnQgeyBBcnJvd0xlZnRDaXJjbGVGaWxsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwLWljb25zJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5mdW5jdGlvbiBNYWluTmF2YmFyKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICAgICAgICA8TmF2YmFyIGJnPVwibGlnaHRcIiB2YXJpYW50PVwibGlnaHRcIj5cbiAgICAgICAgICAgICAgICA8QXJyb3dMZWZ0Q2lyY2xlRmlsbCBzaXplPXs0MH0gb25DbGljaz17KCkgPT4ge3JvdXRlci5iYWNrKCl9fS8+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiI2hvbWVcIiBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLCBsZWZ0OiAnNTBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgSW5zdXJkaW5hcnkgSW5zdXJhbmNlIEFkdmljZVxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbk5hdmJhclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MainNavbar.js\n");

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

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.min.css\n");

/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-datepicker/dist/react-datepicker.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/FormContext */ \"./contexts/FormContext.js\");\n/* harmony import */ var _components_MainNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MainNavbar */ \"./components/MainNavbar.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ \"./node_modules/react-datepicker/dist/react-datepicker.css\");\n/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_1__[\"GlobalFormProvider\"], null, __jsx(_components_MainNavbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), __jsx(Component, pageProps)));\n} // Only uncomment this method if you have blocking data requirements for\n// every single page in your application. This disables the ability to\n// perform automatic static optimization, causing every page in your app to\n// be server-side rendered.\n//\n// MyApp.getInitialProps = async (appContext) => {\n//   // calls page's `getInitialProps` and fills `appProps.pageProps`\n//   const appProps = await App.getInitialProps(appContext);\n//\n//   return { ...appProps }\n// }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUNyQyxTQUNJLG1FQUNRLE1BQUMsd0VBQUQsUUFDWSxNQUFDLDhEQUFELE9BRFosRUFFWSxNQUFDLFNBQUQsRUFBZUEsU0FBZixDQUZaLENBRFIsQ0FESjtBQVFILEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZUYsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7R2xvYmFsRm9ybVByb3ZpZGVyfSBmcm9tIFwiLi4vY29udGV4dHMvRm9ybUNvbnRleHRcIjtcbmltcG9ydCBNYWluTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL01haW5OYXZiYXJcIjtcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8R2xvYmFsRm9ybVByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluTmF2YmFyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPC9HbG9iYWxGb3JtUHJvdmlkZXI+XG4gICAgICAgIDwvPlxuICAgICAgICApXG59XG5cbi8vIE9ubHkgdW5jb21tZW50IHRoaXMgbWV0aG9kIGlmIHlvdSBoYXZlIGJsb2NraW5nIGRhdGEgcmVxdWlyZW1lbnRzIGZvclxuLy8gZXZlcnkgc2luZ2xlIHBhZ2UgaW4geW91ciBhcHBsaWNhdGlvbi4gVGhpcyBkaXNhYmxlcyB0aGUgYWJpbGl0eSB0b1xuLy8gcGVyZm9ybSBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiwgY2F1c2luZyBldmVyeSBwYWdlIGluIHlvdXIgYXBwIHRvXG4vLyBiZSBzZXJ2ZXItc2lkZSByZW5kZXJlZC5cbi8vXG4vLyBNeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xuLy8gICAvLyBjYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXG4vLyAgIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcbi8vXG4vLyAgIHJldHVybiB7IC4uLmFwcFByb3BzIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/form.reducer.js":
/*!**********************************!*\
  !*** ./reducers/form.reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case \"ADD_SPOUSE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        spouse: action.spouse\n      });\n\n    case \"SPOUSE_AGE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        spouseAge: action.spouseAge\n      });\n\n    case \"HAS_CHILDREN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasChildren: action.hasChildren\n      });\n\n    case \"NUMBER_OF_CHILDREN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        numberOfChildren: action.numberOfChildren\n      });\n\n    case \"CHILDREN_AGE_ARRAY\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        childrenAgeArray: action.childrenAgeArray\n      });\n\n    case \"PAY_FOR_COLLEGE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        payForCollege: action.payForCollege\n      });\n\n    case \"DOB\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        dob: action.dob\n      });\n\n    case \"SEX\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        sex: action.sex\n      });\n\n    case \"TOBACCO\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        tobacco: action.tobacco\n      });\n\n    case \"HEALTH_CONDITION\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        healthCondition: action.healthCondition\n      });\n\n    case \"YOUR_INCOME\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        yourIncome: action.yourIncome\n      });\n\n    case \"SPOUSE_INCOME\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        spouseIncome: action.spouseIncome\n      });\n\n    case \"RENT_OR_OWN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        rentOrOwn: action.rentOrOwn\n      });\n\n    case \"MONTHLY_RENT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        monthlyRent: action.monthlyRent\n      });\n\n    case \"MORTGAGE_CURRENT_BALANCE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mortgageCurrentBalance: action.mortgageCurrentBalance\n      });\n\n    case \"MORTGAGE_MONTHLY_PAYMENT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mortgageMonthlyPayment: action.mortgageMonthlyPayment\n      });\n\n    case \"LIFE_INSURANCE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        lifeInsurance: action.lifeInsurance\n      });\n\n    case \"LIFE_INSURANCE_EMPLOYER\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        lifeInsuranceEmployer: action.lifeInsuranceEmployer\n      });\n\n    case \"LIFE_INSURANCE_PERSONAL\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        lifeInsurancePersonal: action.lifeInsurancePersonal\n      });\n\n    case \"HAS_SAVINGS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasSavings: action.hasSavings\n      });\n\n    case \"HAS_RETIREMENT_SAVINGS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasRetirementSavings: action.hasRetirementSavings\n      });\n\n    case \"HAS_NON_RETIREMENT_SAVINGS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hasNonRetirementSavings: action.hasNonRetirementSavings\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXIuanM/MWNmMyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwic3BvdXNlIiwic3BvdXNlQWdlIiwiaGFzQ2hpbGRyZW4iLCJudW1iZXJPZkNoaWxkcmVuIiwiY2hpbGRyZW5BZ2VBcnJheSIsInBheUZvckNvbGxlZ2UiLCJkb2IiLCJzZXgiLCJ0b2JhY2NvIiwiaGVhbHRoQ29uZGl0aW9uIiwieW91ckluY29tZSIsInNwb3VzZUluY29tZSIsInJlbnRPck93biIsIm1vbnRobHlSZW50IiwibW9ydGdhZ2VDdXJyZW50QmFsYW5jZSIsIm1vcnRnYWdlTW9udGhseVBheW1lbnQiLCJsaWZlSW5zdXJhbmNlIiwibGlmZUluc3VyYW5jZUVtcGxveWVyIiwibGlmZUluc3VyYW5jZVBlcnNvbmFsIiwiaGFzU2F2aW5ncyIsImhhc1JldGlyZW1lbnRTYXZpbmdzIiwiaGFzTm9uUmV0aXJlbWVudFNhdmluZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNQSxPQUFPLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQy9CLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFNBQUssWUFBTDtBQUNJLDZDQUFXRixLQUFYO0FBQWtCRyxjQUFNLEVBQUVGLE1BQU0sQ0FBQ0U7QUFBakM7O0FBQ0osU0FBSyxZQUFMO0FBQ0ksNkNBQVdILEtBQVg7QUFBa0JJLGlCQUFTLEVBQUVILE1BQU0sQ0FBQ0c7QUFBcEM7O0FBQ0osU0FBSyxjQUFMO0FBQ0ksNkNBQVdKLEtBQVg7QUFBa0JLLG1CQUFXLEVBQUVKLE1BQU0sQ0FBQ0k7QUFBdEM7O0FBQ0osU0FBSyxvQkFBTDtBQUNJLDZDQUFXTCxLQUFYO0FBQWtCTSx3QkFBZ0IsRUFBRUwsTUFBTSxDQUFDSztBQUEzQzs7QUFDSixTQUFLLG9CQUFMO0FBQ0ksNkNBQVdOLEtBQVg7QUFBa0JPLHdCQUFnQixFQUFFTixNQUFNLENBQUNNO0FBQTNDOztBQUNKLFNBQUssaUJBQUw7QUFDSSw2Q0FBV1AsS0FBWDtBQUFrQlEscUJBQWEsRUFBRVAsTUFBTSxDQUFDTztBQUF4Qzs7QUFDSixTQUFLLEtBQUw7QUFDSSw2Q0FBV1IsS0FBWDtBQUFrQlMsV0FBRyxFQUFFUixNQUFNLENBQUNRO0FBQTlCOztBQUNKLFNBQUssS0FBTDtBQUNJLDZDQUFXVCxLQUFYO0FBQWtCVSxXQUFHLEVBQUVULE1BQU0sQ0FBQ1M7QUFBOUI7O0FBQ0osU0FBSyxTQUFMO0FBQ0ksNkNBQVdWLEtBQVg7QUFBa0JXLGVBQU8sRUFBRVYsTUFBTSxDQUFDVTtBQUFsQzs7QUFDSixTQUFLLGtCQUFMO0FBQ0ksNkNBQVdYLEtBQVg7QUFBa0JZLHVCQUFlLEVBQUVYLE1BQU0sQ0FBQ1c7QUFBMUM7O0FBQ0osU0FBSyxhQUFMO0FBQ0ksNkNBQVdaLEtBQVg7QUFBa0JhLGtCQUFVLEVBQUVaLE1BQU0sQ0FBQ1k7QUFBckM7O0FBQ0osU0FBSyxlQUFMO0FBQ0ksNkNBQVdiLEtBQVg7QUFBa0JjLG9CQUFZLEVBQUViLE1BQU0sQ0FBQ2E7QUFBdkM7O0FBQ0osU0FBSyxhQUFMO0FBQ0ksNkNBQVdkLEtBQVg7QUFBa0JlLGlCQUFTLEVBQUVkLE1BQU0sQ0FBQ2M7QUFBcEM7O0FBQ0osU0FBSyxjQUFMO0FBQ0ksNkNBQVdmLEtBQVg7QUFBa0JnQixtQkFBVyxFQUFFZixNQUFNLENBQUNlO0FBQXRDOztBQUNKLFNBQUssMEJBQUw7QUFDSSw2Q0FBV2hCLEtBQVg7QUFBa0JpQiw4QkFBc0IsRUFBRWhCLE1BQU0sQ0FBQ2dCO0FBQWpEOztBQUNKLFNBQUssMEJBQUw7QUFDSSw2Q0FBV2pCLEtBQVg7QUFBa0JrQiw4QkFBc0IsRUFBRWpCLE1BQU0sQ0FBQ2lCO0FBQWpEOztBQUNKLFNBQUssZ0JBQUw7QUFDSSw2Q0FBV2xCLEtBQVg7QUFBa0JtQixxQkFBYSxFQUFFbEIsTUFBTSxDQUFDa0I7QUFBeEM7O0FBQ0osU0FBSyx5QkFBTDtBQUNJLDZDQUFXbkIsS0FBWDtBQUFrQm9CLDZCQUFxQixFQUFFbkIsTUFBTSxDQUFDbUI7QUFBaEQ7O0FBQ0osU0FBSyx5QkFBTDtBQUNJLDZDQUFXcEIsS0FBWDtBQUFrQnFCLDZCQUFxQixFQUFFcEIsTUFBTSxDQUFDb0I7QUFBaEQ7O0FBQ0osU0FBSyxhQUFMO0FBQ0ksNkNBQVdyQixLQUFYO0FBQWtCc0Isa0JBQVUsRUFBRXJCLE1BQU0sQ0FBQ3FCO0FBQXJDOztBQUNKLFNBQUssd0JBQUw7QUFDSSw2Q0FBV3RCLEtBQVg7QUFBa0J1Qiw0QkFBb0IsRUFBRXRCLE1BQU0sQ0FBQ3NCO0FBQS9DOztBQUNKLFNBQUssNEJBQUw7QUFDSSw2Q0FBV3ZCLEtBQVg7QUFBa0J3QiwrQkFBdUIsRUFBRXZCLE1BQU0sQ0FBQ3VCO0FBQWxEOztBQUNKO0FBQ0ksYUFBT3hCLEtBQVA7QUE5Q1I7QUFnREgsQ0FqREQ7O0FBa0RlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL2Zvcm0ucmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgXCJBRERfU1BPVVNFXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcG91c2U6IGFjdGlvbi5zcG91c2V9O1xuICAgICAgICBjYXNlIFwiU1BPVVNFX0FHRVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BvdXNlQWdlOiBhY3Rpb24uc3BvdXNlQWdlfTtcbiAgICAgICAgY2FzZSBcIkhBU19DSElMRFJFTlwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGFzQ2hpbGRyZW46IGFjdGlvbi5oYXNDaGlsZHJlbn07XG4gICAgICAgIGNhc2UgXCJOVU1CRVJfT0ZfQ0hJTERSRU5cIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG51bWJlck9mQ2hpbGRyZW46IGFjdGlvbi5udW1iZXJPZkNoaWxkcmVufTtcbiAgICAgICAgY2FzZSBcIkNISUxEUkVOX0FHRV9BUlJBWVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgY2hpbGRyZW5BZ2VBcnJheTogYWN0aW9uLmNoaWxkcmVuQWdlQXJyYXl9O1xuICAgICAgICBjYXNlIFwiUEFZX0ZPUl9DT0xMRUdFXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBwYXlGb3JDb2xsZWdlOiBhY3Rpb24ucGF5Rm9yQ29sbGVnZX07XG4gICAgICAgIGNhc2UgXCJET0JcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRvYjogYWN0aW9uLmRvYn07XG4gICAgICAgIGNhc2UgXCJTRVhcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNleDogYWN0aW9uLnNleH07XG4gICAgICAgIGNhc2UgXCJUT0JBQ0NPXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCB0b2JhY2NvOiBhY3Rpb24udG9iYWNjb307XG4gICAgICAgIGNhc2UgXCJIRUFMVEhfQ09ORElUSU9OXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoZWFsdGhDb25kaXRpb246IGFjdGlvbi5oZWFsdGhDb25kaXRpb259O1xuICAgICAgICBjYXNlIFwiWU9VUl9JTkNPTUVcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHlvdXJJbmNvbWU6IGFjdGlvbi55b3VySW5jb21lfTtcbiAgICAgICAgY2FzZSBcIlNQT1VTRV9JTkNPTUVcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwb3VzZUluY29tZTogYWN0aW9uLnNwb3VzZUluY29tZX07XG4gICAgICAgIGNhc2UgXCJSRU5UX09SX09XTlwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcmVudE9yT3duOiBhY3Rpb24ucmVudE9yT3dufTtcbiAgICAgICAgY2FzZSBcIk1PTlRITFlfUkVOVFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbW9udGhseVJlbnQ6IGFjdGlvbi5tb250aGx5UmVudH07XG4gICAgICAgIGNhc2UgXCJNT1JUR0FHRV9DVVJSRU5UX0JBTEFOQ0VcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG1vcnRnYWdlQ3VycmVudEJhbGFuY2U6IGFjdGlvbi5tb3J0Z2FnZUN1cnJlbnRCYWxhbmNlfTtcbiAgICAgICAgY2FzZSBcIk1PUlRHQUdFX01PTlRITFlfUEFZTUVOVFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbW9ydGdhZ2VNb250aGx5UGF5bWVudDogYWN0aW9uLm1vcnRnYWdlTW9udGhseVBheW1lbnR9O1xuICAgICAgICBjYXNlIFwiTElGRV9JTlNVUkFOQ0VcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxpZmVJbnN1cmFuY2U6IGFjdGlvbi5saWZlSW5zdXJhbmNlfTtcbiAgICAgICAgY2FzZSBcIkxJRkVfSU5TVVJBTkNFX0VNUExPWUVSXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsaWZlSW5zdXJhbmNlRW1wbG95ZXI6IGFjdGlvbi5saWZlSW5zdXJhbmNlRW1wbG95ZXJ9O1xuICAgICAgICBjYXNlIFwiTElGRV9JTlNVUkFOQ0VfUEVSU09OQUxcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxpZmVJbnN1cmFuY2VQZXJzb25hbDogYWN0aW9uLmxpZmVJbnN1cmFuY2VQZXJzb25hbH07XG4gICAgICAgIGNhc2UgXCJIQVNfU0FWSU5HU1wiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGFzU2F2aW5nczogYWN0aW9uLmhhc1NhdmluZ3N9O1xuICAgICAgICBjYXNlIFwiSEFTX1JFVElSRU1FTlRfU0FWSU5HU1wiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGFzUmV0aXJlbWVudFNhdmluZ3M6IGFjdGlvbi5oYXNSZXRpcmVtZW50U2F2aW5nc307XG4gICAgICAgIGNhc2UgXCJIQVNfTk9OX1JFVElSRU1FTlRfU0FWSU5HU1wiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGFzTm9uUmV0aXJlbWVudFNhdmluZ3M6IGFjdGlvbi5oYXNOb25SZXRpcmVtZW50U2F2aW5nc307XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/form.reducer.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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

/***/ "react-bootstrap-icons":
/*!****************************************!*\
  !*** external "react-bootstrap-icons" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap-icons\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAtaWNvbnNcIj8yOWNkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC1pY29ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC1pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap-icons\n");

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