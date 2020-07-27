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

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputBase */ \"@material-ui/core/InputBase\");\n/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Search */ \"@material-ui/icons/Search\");\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Switch */ \"@material-ui/core/Switch\");\n/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_NavBarStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/NavBarStyles */ \"./styles/NavBarStyles.js\");\n/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../contexts/ThemeContext */ \"./contexts/ThemeContext.js\");\n/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../contexts/LanguageContext */ \"./contexts/LanguageContext.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nconst content = {\n  english: {\n    search: \"Search\",\n    flag: \"eng\"\n  },\n  french: {\n    search: 'chercher',\n    flag: 'fr'\n  },\n  spanish: {\n    search: \"buscar\",\n    flag: \"esp\"\n  }\n};\n\nfunction Navbar(props) {\n  const {\n    isDarkMode,\n    toggleTheme\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_10__[\"ThemeContext\"]);\n  const {\n    language\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_11__[\"LanguageContext\"]);\n  const {\n    classes\n  } = props;\n  const {\n    search,\n    flag\n  } = content[language];\n  return __jsx(\"div\", {\n    className: classes.root\n  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    position: \"static\",\n    color: isDarkMode ? \"primary\" : \"default\"\n  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    className: classes.menuButton,\n    color: \"inherit\"\n  }, __jsx(\"span\", null, flag)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    className: classes.title,\n    variant: \"h6\",\n    color: \"inherit\"\n  }, \"App title\"), __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    onChange: toggleTheme\n  }), __jsx(\"div\", {\n    className: classes.grow\n  }), __jsx(\"div\", {\n    className: classes.search\n  }, __jsx(\"div\", {\n    className: classes.searchIcon\n  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6___default.a, null)), __jsx(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    placeholder: `${search}...`,\n    classes: {\n      root: classes.inputRoot,\n      input: classes.inputInput\n    }\n  })))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"withStyles\"])(_styles_NavBarStyles__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Navbar));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhci5qcz9jZDgyIl0sIm5hbWVzIjpbImNvbnRlbnQiLCJlbmdsaXNoIiwic2VhcmNoIiwiZmxhZyIsImZyZW5jaCIsInNwYW5pc2giLCJOYXZiYXIiLCJwcm9wcyIsImlzRGFya01vZGUiLCJ0b2dnbGVUaGVtZSIsInVzZUNvbnRleHQiLCJUaGVtZUNvbnRleHQiLCJsYW5ndWFnZSIsIkxhbmd1YWdlQ29udGV4dCIsImNsYXNzZXMiLCJyb290IiwibWVudUJ1dHRvbiIsInRpdGxlIiwiZ3JvdyIsInNlYXJjaEljb24iLCJpbnB1dFJvb3QiLCJpbnB1dCIsImlucHV0SW5wdXQiLCJ3aXRoU3R5bGVzIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLE9BQU8sR0FBRztBQUNaQyxTQUFPLEVBQUU7QUFDTEMsVUFBTSxFQUFFLFFBREg7QUFFTEMsUUFBSSxFQUFFO0FBRkQsR0FERztBQUtaQyxRQUFNLEVBQUU7QUFDSkYsVUFBTSxFQUFFLFVBREo7QUFFSkMsUUFBSSxFQUFFO0FBRkYsR0FMSTtBQVNaRSxTQUFPLEVBQUU7QUFDTEgsVUFBTSxFQUFFLFFBREg7QUFFTEMsUUFBSSxFQUFFO0FBRkQ7QUFURyxDQUFoQjs7QUFlQSxTQUFTRyxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUNuQixRQUFNO0FBQUNDLGNBQUQ7QUFBYUM7QUFBYixNQUE0QkMsd0RBQVUsQ0FBQ0Msb0VBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUNDO0FBQUQsTUFBYUYsd0RBQVUsQ0FBQ0csMEVBQUQsQ0FBN0I7QUFDQSxRQUFNO0FBQUNDO0FBQUQsTUFBWVAsS0FBbEI7QUFDQSxRQUFNO0FBQUNMLFVBQUQ7QUFBU0M7QUFBVCxNQUFpQkgsT0FBTyxDQUFDWSxRQUFELENBQTlCO0FBQ0EsU0FDSTtBQUFLLGFBQVMsRUFBRUUsT0FBTyxDQUFDQztBQUF4QixLQUNJLE1BQUMsK0RBQUQ7QUFBUSxZQUFRLEVBQUMsUUFBakI7QUFBMEIsU0FBSyxFQUFFUCxVQUFVLEdBQUcsU0FBSCxHQUFlO0FBQTFELEtBQ0ksTUFBQyxnRUFBRCxRQUNJLE1BQUMsbUVBQUQ7QUFBWSxhQUFTLEVBQUVNLE9BQU8sQ0FBQ0UsVUFBL0I7QUFBMkMsU0FBSyxFQUFDO0FBQWpELEtBQ0ksb0JBQU9iLElBQVAsQ0FESixDQURKLEVBSUksTUFBQyxtRUFBRDtBQUFZLGFBQVMsRUFBRVcsT0FBTyxDQUFDRyxLQUEvQjtBQUFzQyxXQUFPLEVBQUMsSUFBOUM7QUFBbUQsU0FBSyxFQUFDO0FBQXpELGlCQUpKLEVBT0ksTUFBQywrREFBRDtBQUFRLFlBQVEsRUFBRVI7QUFBbEIsSUFQSixFQVFJO0FBQUssYUFBUyxFQUFFSyxPQUFPLENBQUNJO0FBQXhCLElBUkosRUFTSTtBQUFLLGFBQVMsRUFBRUosT0FBTyxDQUFDWjtBQUF4QixLQUNJO0FBQUssYUFBUyxFQUFFWSxPQUFPLENBQUNLO0FBQXhCLEtBQ0ksTUFBQyxnRUFBRCxPQURKLENBREosRUFJSSxNQUFDLGtFQUFEO0FBQVcsZUFBVyxFQUFHLEdBQUVqQixNQUFPLEtBQWxDO0FBQXdDLFdBQU8sRUFBRTtBQUM3Q2EsVUFBSSxFQUFFRCxPQUFPLENBQUNNLFNBRCtCO0FBRTdDQyxXQUFLLEVBQUVQLE9BQU8sQ0FBQ1E7QUFGOEI7QUFBakQsSUFKSixDQVRKLENBREosQ0FESixDQURKO0FBeUJIOztBQUVjQyxtSUFBVSxDQUFDQyw0REFBRCxDQUFWLENBQW1CbEIsTUFBbkIsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2YmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IElucHV0QmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEJhc2UnO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTmF2QmFyU3R5bGVzXCI7XG5pbXBvcnQge1RoZW1lQ29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHRzL1RoZW1lQ29udGV4dFwiO1xuaW1wb3J0IHtMYW5ndWFnZUNvbnRleHR9IGZyb20gJy4uL2NvbnRleHRzL0xhbmd1YWdlQ29udGV4dCc7XG5cbmNvbnN0IGNvbnRlbnQgPSB7XG4gICAgZW5nbGlzaDoge1xuICAgICAgICBzZWFyY2g6IFwiU2VhcmNoXCIsXG4gICAgICAgIGZsYWc6IFwiZW5nXCJcbiAgICB9LFxuICAgIGZyZW5jaDoge1xuICAgICAgICBzZWFyY2g6ICdjaGVyY2hlcicsXG4gICAgICAgIGZsYWc6ICdmcidcbiAgICB9LFxuICAgIHNwYW5pc2g6IHtcbiAgICAgICAgc2VhcmNoOiBcImJ1c2NhclwiLFxuICAgICAgICBmbGFnOiBcImVzcFwiXG4gICAgfVxufVxuXG5mdW5jdGlvbiBOYXZiYXIocHJvcHMpIHtcbiAgICBjb25zdCB7aXNEYXJrTW9kZSwgdG9nZ2xlVGhlbWV9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICAgIGNvbnN0IHtsYW5ndWFnZX0gPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dClcbiAgICBjb25zdCB7Y2xhc3Nlc30gPSBwcm9wcztcbiAgICBjb25zdCB7c2VhcmNoLCBmbGFnfSA9IGNvbnRlbnRbbGFuZ3VhZ2VdXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPSdzdGF0aWMnIGNvbG9yPXtpc0RhcmtNb2RlID8gXCJwcmltYXJ5XCIgOiBcImRlZmF1bHRcIn0+XG4gICAgICAgICAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufSBjb2xvcj1cImluaGVyaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntmbGFnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9J2g2JyBjb2xvcj0naW5oZXJpdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8U3dpdGNoIG9uQ2hhbmdlPXt0b2dnbGVUaGVtZX0vPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fS8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hJY29ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEJhc2UgcGxhY2Vob2xkZXI9e2Ake3NlYXJjaH0uLi5gfSBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5pbnB1dFJvb3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGNsYXNzZXMuaW5wdXRJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTmF2YmFyKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ }),

/***/ "./components/PageContent.js":
/*!***********************************!*\
  !*** ./components/PageContent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PageContent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ThemeContext */ \"./contexts/ThemeContext.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction PageContent(props) {\n  const {\n    isDarkMode\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__[\"ThemeContext\"]);\n  const styles = {\n    backgroundColor: isDarkMode ? \"white\" : \"black\",\n    height: \"100vh\",\n    width: \"100vw\"\n  };\n  return __jsx(\"div\", {\n    style: styles\n  }, props.children);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2VDb250ZW50LmpzPzE3MmUiXSwibmFtZXMiOlsiUGFnZUNvbnRlbnQiLCJwcm9wcyIsImlzRGFya01vZGUiLCJ1c2VDb250ZXh0IiwiVGhlbWVDb250ZXh0Iiwic3R5bGVzIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0Iiwid2lkdGgiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQ25DLFFBQU07QUFBQ0M7QUFBRCxNQUFlQyx3REFBVSxDQUFDQyxtRUFBRCxDQUEvQjtBQUNBLFFBQU1DLE1BQU0sR0FBRTtBQUNWQyxtQkFBZSxFQUFFSixVQUFVLEdBQUcsT0FBSCxHQUFhLE9BRDlCO0FBRVZLLFVBQU0sRUFBRSxPQUZFO0FBR1ZDLFNBQUssRUFBRTtBQUhHLEdBQWQ7QUFLQSxTQUNJO0FBQUssU0FBSyxFQUFFSDtBQUFaLEtBQ0tKLEtBQUssQ0FBQ1EsUUFEWCxDQURKO0FBS1AiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VDb250ZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtUaGVtZUNvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0cy9UaGVtZUNvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZUNvbnRlbnQocHJvcHMpIHtcbiAgICAgICAgY29uc3Qge2lzRGFya01vZGV9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICAgICAgICBjb25zdCBzdHlsZXM9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNEYXJrTW9kZSA/IFwid2hpdGVcIiA6IFwiYmxhY2tcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwdndcIlxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzfT5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PageContent.js\n");

/***/ }),

/***/ "./contexts/LanguageContext.js":
/*!*************************************!*\
  !*** ./contexts/LanguageContext.js ***!
  \*************************************/
/*! exports provided: LanguageContext, LanguageProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LanguageContext\", function() { return LanguageContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LanguageProvider\", function() { return LanguageProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst LanguageContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nfunction LanguageProvider(props) {\n  const {\n    0: language,\n    1: setLanguage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"spanish\");\n\n  const changeLanguage = e => setLanguage(e.target.value);\n\n  return __jsx(LanguageContext.Provider, {\n    value: {\n      language,\n      changeLanguage\n    }\n  }, props.children);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9MYW5ndWFnZUNvbnRleHQuanM/OGM1YSJdLCJuYW1lcyI6WyJMYW5ndWFnZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTGFuZ3VhZ2VQcm92aWRlciIsInByb3BzIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInVzZVN0YXRlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxlQUFlLEdBQUdDLDJEQUFhLEVBQXJDO0FBRUEsU0FBU0MsZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDO0FBQ3BDLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxTQUFELENBQXhDOztBQUNBLFFBQU1DLGNBQWMsR0FBSUMsQ0FBRCxJQUFPSCxXQUFXLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXpDOztBQUNBLFNBQ0ksTUFBQyxlQUFELENBQWlCLFFBQWpCO0FBQTBCLFNBQUssRUFBRTtBQUFDTixjQUFEO0FBQVdHO0FBQVg7QUFBakMsS0FDS0osS0FBSyxDQUFDUSxRQURYLENBREo7QUFLSCIsImZpbGUiOiIuL2NvbnRleHRzL0xhbmd1YWdlQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IExhbmd1YWdlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIExhbmd1YWdlUHJvdmlkZXIocHJvcHMpIHtcbiAgICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IHVzZVN0YXRlKFwic3BhbmlzaFwiKTtcbiAgICBjb25zdCBjaGFuZ2VMYW5ndWFnZSA9IChlKSA9PiBzZXRMYW5ndWFnZShlLnRhcmdldC52YWx1ZSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExhbmd1YWdlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2xhbmd1YWdlLCBjaGFuZ2VMYW5ndWFnZX19PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0xhbmd1YWdlQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/LanguageContext.js\n");

/***/ }),

/***/ "./contexts/ThemeContext.js":
/*!**********************************!*\
  !*** ./contexts/ThemeContext.js ***!
  \**********************************/
/*! exports provided: ThemeContext, ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThemeContext\", function() { return ThemeContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThemeProvider\", function() { return ThemeProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useToggleState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useToggleState */ \"./hooks/useToggleState.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nfunction ThemeProvider(props) {\n  const [isDarkMode, toggleTheme] = Object(_hooks_useToggleState__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false);\n  return __jsx(ThemeContext.Provider, {\n    value: {\n      isDarkMode,\n      toggleTheme\n    }\n  }, props.children);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9UaGVtZUNvbnRleHQuanM/MTkzOSJdLCJuYW1lcyI6WyJUaGVtZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiVGhlbWVQcm92aWRlciIsInByb3BzIiwiaXNEYXJrTW9kZSIsInRvZ2dsZVRoZW1lIiwidXNlVG9nZ2xlU3RhdGUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDTyxNQUFNQSxZQUFZLEdBQUdDLDJEQUFhLEVBQWxDO0FBRUEsU0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDakMsUUFBTSxDQUFDQyxVQUFELEVBQWFDLFdBQWIsSUFBNEJDLHFFQUFjLENBQUMsS0FBRCxDQUFoRDtBQUNBLFNBQ0ksTUFBQyxZQUFELENBQWMsUUFBZDtBQUF1QixTQUFLLEVBQUU7QUFBQ0YsZ0JBQUQ7QUFBYUM7QUFBYjtBQUE5QixLQUNLRixLQUFLLENBQUNJLFFBRFgsQ0FESjtBQUtIIiwiZmlsZSI6Ii4vY29udGV4dHMvVGhlbWVDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlVG9nZ2xlU3RhdGUgZnJvbSAnLi4vaG9va3MvdXNlVG9nZ2xlU3RhdGUnO1xuZXhwb3J0IGNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIocHJvcHMpIHtcbiAgICBjb25zdCBbaXNEYXJrTW9kZSwgdG9nZ2xlVGhlbWVdID0gdXNlVG9nZ2xlU3RhdGUoZmFsc2UpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tpc0RhcmtNb2RlLCB0b2dnbGVUaGVtZX19PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/ThemeContext.js\n");

/***/ }),

/***/ "./hooks/useToggleState.js":
/*!*********************************!*\
  !*** ./hooks/useToggleState.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction useToggle(initialVal = false) {\n  // call usestate\n  const {\n    0: state,\n    1: changeState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initialVal);\n\n  const toggle = () => {\n    changeState(!state);\n  }; // return a piece of state AND a function to toggle it\n\n\n  return [state, toggle];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useToggle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy91c2VUb2dnbGVTdGF0ZS5qcz80OGJmIl0sIm5hbWVzIjpbInVzZVRvZ2dsZSIsImluaXRpYWxWYWwiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwidXNlU3RhdGUiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBLFNBQVNBLFNBQVQsQ0FBbUJDLFVBQVUsR0FBRyxLQUFoQyxFQUF1QztBQUNuQztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUF1QkMsc0RBQVEsQ0FBQ0gsVUFBRCxDQUFyQzs7QUFDQSxRQUFNSSxNQUFNLEdBQUcsTUFBTTtBQUNqQkYsZUFBVyxDQUFDLENBQUNELEtBQUYsQ0FBWDtBQUNILEdBRkQsQ0FIbUMsQ0FNbkM7OztBQUNBLFNBQU8sQ0FBQ0EsS0FBRCxFQUFRRyxNQUFSLENBQVA7QUFDSDs7QUFDY0wsd0VBQWYiLCJmaWxlIjoiLi9ob29rcy91c2VUb2dnbGVTdGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmZ1bmN0aW9uIHVzZVRvZ2dsZShpbml0aWFsVmFsID0gZmFsc2UpIHtcbiAgICAvLyBjYWxsIHVzZXN0YXRlXG4gICAgY29uc3QgW3N0YXRlLCBjaGFuZ2VTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsKTtcbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIGNoYW5nZVN0YXRlKCFzdGF0ZSlcbiAgICB9O1xuICAgIC8vIHJldHVybiBhIHBpZWNlIG9mIHN0YXRlIEFORCBhIGZ1bmN0aW9uIHRvIHRvZ2dsZSBpdFxuICAgIHJldHVybiBbc3RhdGUsIHRvZ2dsZV1cbn1cbmV4cG9ydCBkZWZhdWx0IHVzZVRvZ2dsZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useToggleState.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _components_PageContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageContent */ \"./components/PageContent.js\");\n/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/LanguageContext */ \"./contexts/LanguageContext.js\");\n/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/ThemeContext */ \"./contexts/ThemeContext.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__[\"ThemeProvider\"], null, __jsx(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_3__[\"LanguageProvider\"], null, __jsx(_components_PageContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), __jsx(Component, pageProps)))));\n} // Only uncomment this method if you have blocking data requirements for\n// every single page in your application. This disables the ability to\n// perform automatic static optimization, causing every page in your app to\n// be server-side rendered.\n//\n// MyApp.getInitialProps = async (appContext) => {\n//   // calls page's `getInitialProps` and fills `appProps.pageProps`\n//   const appProps = await App.getInitialProps(appContext);\n//\n//   return { ...appProps }\n// }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUNyQyxTQUNJLG1FQUNJLE1BQUMsb0VBQUQsUUFDSSxNQUFDLDBFQUFELFFBQ0ksTUFBQywrREFBRCxRQUNJLE1BQUMsMERBQUQsT0FESixFQUVJLE1BQUMsU0FBRCxFQUFlQSxTQUFmLENBRkosQ0FESixDQURKLENBREosQ0FESjtBQWNILEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZUYsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgUGFnZUNvbnRlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlQ29udGVudCc7XG5pbXBvcnQge0xhbmd1YWdlUHJvdmlkZXJ9IGZyb20gJy4uL2NvbnRleHRzL0xhbmd1YWdlQ29udGV4dCdcbmltcG9ydCB7VGhlbWVQcm92aWRlcn0gZnJvbSBcIi4uL2NvbnRleHRzL1RoZW1lQ29udGV4dFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPExhbmd1YWdlUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxQYWdlQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZUNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9MYW5ndWFnZVByb3ZpZGVyPlxuICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuXG4gICAgICAgIDwvPlxuICAgICAgICApXG59XG5cbi8vIE9ubHkgdW5jb21tZW50IHRoaXMgbWV0aG9kIGlmIHlvdSBoYXZlIGJsb2NraW5nIGRhdGEgcmVxdWlyZW1lbnRzIGZvclxuLy8gZXZlcnkgc2luZ2xlIHBhZ2UgaW4geW91ciBhcHBsaWNhdGlvbi4gVGhpcyBkaXNhYmxlcyB0aGUgYWJpbGl0eSB0b1xuLy8gcGVyZm9ybSBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiwgY2F1c2luZyBldmVyeSBwYWdlIGluIHlvdXIgYXBwIHRvXG4vLyBiZSBzZXJ2ZXItc2lkZSByZW5kZXJlZC5cbi8vXG4vLyBNeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xuLy8gICAvLyBjYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXG4vLyAgIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcbi8vXG4vLyAgIHJldHVybiB7IC4uLmFwcFByb3BzIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/NavBarStyles.js":
/*!********************************!*\
  !*** ./styles/NavBarStyles.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ \"@material-ui/core/styles/colorManipulator\");\n/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst styles = theme => ({\n  root: {\n    width: \"100%\",\n    marginBottom: 0\n  },\n  grow: {\n    flexGrow: 1\n  },\n  menuButton: {\n    marginLeft: -12,\n    marginRight: 20\n  },\n  title: {\n    display: \"none\",\n    [theme.breakpoints.up(\"sm\")]: {\n      display: \"block\"\n    }\n  },\n  search: {\n    position: \"relative\",\n    borderRadius: theme.shape.borderRadius,\n    backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_0__[\"fade\"])(theme.palette.common.white, 0.15),\n    \"&:hover\": {\n      backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_0__[\"fade\"])(theme.palette.common.white, 0.25)\n    },\n    marginLeft: 0,\n    width: \"100%\",\n    [theme.breakpoints.up(\"sm\")]: {\n      marginLeft: theme.spacing.unit,\n      width: \"auto\"\n    }\n  },\n  searchIcon: {\n    width: theme.spacing.unit * 9,\n    height: \"100%\",\n    position: \"absolute\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n  },\n  inputRoot: {\n    color: \"inherit\",\n    width: \"100%\"\n  },\n  inputInput: {\n    paddingTop: theme.spacing.unit,\n    paddingRight: theme.spacing.unit,\n    paddingBottom: theme.spacing.unit,\n    paddingLeft: theme.spacing.unit * 10,\n    transition: theme.transitions.create(\"width\"),\n    width: \"100%\",\n    [theme.breakpoints.up(\"sm\")]: {\n      width: 120,\n      \"&:focus\": {\n        width: 200\n      }\n    }\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (styles);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvTmF2QmFyU3R5bGVzLmpzPzg2NGIiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290Iiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJncm93IiwiZmxleEdyb3ciLCJtZW51QnV0dG9uIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwidGl0bGUiLCJkaXNwbGF5IiwiYnJlYWtwb2ludHMiLCJ1cCIsInNlYXJjaCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwic2hhcGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmYWRlIiwicGFsZXR0ZSIsImNvbW1vbiIsIndoaXRlIiwic3BhY2luZyIsInVuaXQiLCJzZWFyY2hJY29uIiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaW5wdXRSb290IiwiY29sb3IiLCJpbnB1dElucHV0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0EsTUFBTUEsTUFBTSxHQUFHQyxLQUFLLEtBQUs7QUFDckJDLE1BQUksRUFBRTtBQUNGQyxTQUFLLEVBQUUsTUFETDtBQUVGQyxnQkFBWSxFQUFFO0FBRlosR0FEZTtBQUtyQkMsTUFBSSxFQUFFO0FBQ0ZDLFlBQVEsRUFBRTtBQURSLEdBTGU7QUFRckJDLFlBQVUsRUFBRTtBQUNSQyxjQUFVLEVBQUUsQ0FBQyxFQURMO0FBRVJDLGVBQVcsRUFBRTtBQUZMLEdBUlM7QUFZckJDLE9BQUssRUFBRTtBQUNIQyxXQUFPLEVBQUUsTUFETjtBQUVILEtBQUNWLEtBQUssQ0FBQ1csV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUErQjtBQUMzQkYsYUFBTyxFQUFFO0FBRGtCO0FBRjVCLEdBWmM7QUFrQnJCRyxRQUFNLEVBQUU7QUFDSkMsWUFBUSxFQUFFLFVBRE47QUFFSkMsZ0JBQVksRUFBRWYsS0FBSyxDQUFDZ0IsS0FBTixDQUFZRCxZQUZ0QjtBQUdKRSxtQkFBZSxFQUFFQyxzRkFBSSxDQUFDbEIsS0FBSyxDQUFDbUIsT0FBTixDQUFjQyxNQUFkLENBQXFCQyxLQUF0QixFQUE2QixJQUE3QixDQUhqQjtBQUlKLGVBQVk7QUFDUkoscUJBQWUsRUFBRUMsc0ZBQUksQ0FBQ2xCLEtBQUssQ0FBQ21CLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FBdEIsRUFBNkIsSUFBN0I7QUFEYixLQUpSO0FBT0pkLGNBQVUsRUFBRSxDQVBSO0FBUUpMLFNBQUssRUFBRSxNQVJIO0FBU0osS0FBQ0YsS0FBSyxDQUFDVyxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQStCO0FBQzNCTCxnQkFBVSxFQUFFUCxLQUFLLENBQUNzQixPQUFOLENBQWNDLElBREM7QUFFM0JyQixXQUFLLEVBQUU7QUFGb0I7QUFUM0IsR0FsQmE7QUFnQ3JCc0IsWUFBVSxFQUFFO0FBQ1J0QixTQUFLLEVBQUVGLEtBQUssQ0FBQ3NCLE9BQU4sQ0FBY0MsSUFBZCxHQUFxQixDQURwQjtBQUVSRSxVQUFNLEVBQUUsTUFGQTtBQUdSWCxZQUFRLEVBQUUsVUFIRjtBQUlSSixXQUFPLEVBQUUsTUFKRDtBQUtSZ0IsY0FBVSxFQUFFLFFBTEo7QUFNUkMsa0JBQWMsRUFBRTtBQU5SLEdBaENTO0FBd0NyQkMsV0FBUyxFQUFFO0FBQ1BDLFNBQUssRUFBRSxTQURBO0FBRVAzQixTQUFLLEVBQUU7QUFGQSxHQXhDVTtBQTRDckI0QixZQUFVLEVBQUU7QUFDUkMsY0FBVSxFQUFFL0IsS0FBSyxDQUFDc0IsT0FBTixDQUFjQyxJQURsQjtBQUVSUyxnQkFBWSxFQUFFaEMsS0FBSyxDQUFDc0IsT0FBTixDQUFjQyxJQUZwQjtBQUdSVSxpQkFBYSxFQUFFakMsS0FBSyxDQUFDc0IsT0FBTixDQUFjQyxJQUhyQjtBQUlSVyxlQUFXLEVBQUVsQyxLQUFLLENBQUNzQixPQUFOLENBQWNDLElBQWQsR0FBcUIsRUFKMUI7QUFLUlksY0FBVSxFQUFFbkMsS0FBSyxDQUFDb0MsV0FBTixDQUFrQkMsTUFBbEIsQ0FBeUIsT0FBekIsQ0FMSjtBQU1SbkMsU0FBSyxFQUFFLE1BTkM7QUFPUixLQUFDRixLQUFLLENBQUNXLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBK0I7QUFDM0JWLFdBQUssRUFBRSxHQURvQjtBQUUzQixpQkFBVztBQUNQQSxhQUFLLEVBQUU7QUFEQTtBQUZnQjtBQVB2QjtBQTVDUyxDQUFMLENBQXBCOztBQTZEZUgscUVBQWYiLCJmaWxlIjoiLi9zdHlsZXMvTmF2QmFyU3R5bGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmYWRlfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3JcIjtcbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICB9LFxuICAgIGdyb3c6IHtcbiAgICAgICAgZmxleEdyb3c6IDFcbiAgICB9LFxuICAgIG1lbnVCdXR0b246IHtcbiAgICAgICAgbWFyZ2luTGVmdDogLTEyLFxuICAgICAgICBtYXJnaW5SaWdodDogMjBcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV0gOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCJcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHNlYXJjaDoge1xuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjE1KSxcbiAgICAgICAgXCImOmhvdmVyXCIgOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsIDAuMjUpXG4gICAgICAgIH0sXG4gICAgICAgIG1hcmdpbkxlZnQ6IDAsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildIDoge1xuICAgICAgICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy51bml0LFxuICAgICAgICAgICAgd2lkdGg6IFwiYXV0b1wiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNlYXJjaEljb246IHtcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDksXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxuICAgIH0sXG4gICAgaW5wdXRSb290OiB7XG4gICAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiXG4gICAgfSxcbiAgICBpbnB1dElucHV0OiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDEwLFxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ3aWR0aFwiKSxcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV0gOiB7XG4gICAgICAgICAgICB3aWR0aDogMTIwLFxuICAgICAgICAgICAgXCImOmZvY3VzXCI6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/NavBarStyles.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/AppBar\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIj85MWNkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/AppBar\n");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/IconButton\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI/N2ZmMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/IconButton\n");

/***/ }),

/***/ "@material-ui/core/InputBase":
/*!**********************************************!*\
  !*** external "@material-ui/core/InputBase" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/InputBase\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEJhc2VcIj9iYmZjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0lucHV0QmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0QmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/InputBase\n");

/***/ }),

/***/ "@material-ui/core/Switch":
/*!*******************************************!*\
  !*** external "@material-ui/core/Switch" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Switch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2hcIj9iMDJmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL1N3aXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1N3aXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Switch\n");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Toolbar\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI/MzZlMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Toolbar\n");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI/MGJlYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Typography\n");

/***/ }),

/***/ "@material-ui/core/styles/colorManipulator":
/*!************************************************************!*\
  !*** external "@material-ui/core/styles/colorManipulator" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles/colorManipulator\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvclwiP2YyNDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles/colorManipulator\n");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Search\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI/N2JkZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Search\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });