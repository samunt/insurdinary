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

/***/ "./components/ChildrenForm.js":
/*!************************************!*\
  !*** ./components/ChildrenForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ChildrenForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"react-bootstrap/Button\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ChildrenForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChildrenForm.module.css */ \"./components/ChildrenForm.module.css\");\n/* harmony import */ var _ChildrenForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ChildrenForm_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ \"react-bootstrap/Container\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ \"react-bootstrap/Row\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ \"react-bootstrap/Col\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/FormContext */ \"./contexts/FormContext.js\");\n/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/FormControl */ \"react-bootstrap/FormControl\");\n/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/InputGroup */ \"react-bootstrap/InputGroup\");\n/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/ProgressBar */ \"react-bootstrap/ProgressBar\");\n/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Form */ \"react-bootstrap/Form\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nfunction ChildrenForm() {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_7__[\"DispatchContext\"]);\n  const {\n    0: hasChildren,\n    1: updateHasChildren\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: numberOfChildren,\n    1: updateNumberOfChildren\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n    childAge: undefined\n  }]);\n  return __jsx(\"div\", null, __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    xs: {\n      span: 6,\n      offset: 3\n    },\n    md: {\n      span: 6,\n      offset: 3\n    },\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    variant: \"success\",\n    now: 20\n  }))), __jsx(\"br\", null), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11___default.a, {\n    onSubmit: e => {\n      e.preventDefault(); // router.push(\"/children\");\n    }\n  }, __jsx(\"br\", null), __jsx(\"h2\", {\n    className: _ChildrenForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n  }, \"Do you have children?\"), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    xs: 6,\n    md: {\n      span: 6\n    },\n    lg: {\n      span: 3,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: \"align-button\",\n    onClick: async () => {\n      await updateHasChildren(true);\n      dispatch({\n        type: \"HAS_CHILDREN\",\n        hasChildren: true\n      });\n      dispatch({\n        type: \"NUMBER_OF_CHILDREN\",\n        numberOfChildren: 1\n      });\n    },\n    style: {\n      width: \"100%\"\n    },\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"Yes\"), \" \"), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    xs: 6,\n    md: {\n      span: 6\n    },\n    lg: {\n      span: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: \"align-button\",\n    onClick: async e => {\n      e.preventDefault();\n      await dispatch({\n        type: \"HAS_CHILDREN\",\n        hasChildren: false\n      });\n      updateHasChildren(false); // router.push(\"/children\");\n    },\n    style: {\n      width: \"100%\"\n    },\n    variant: \"outline-primary\",\n    type: \"submit\",\n    size: \"lg\"\n  }, \"No\"), \" \")))), hasChildren === true && __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11___default.a, {\n    onSubmit: e => {\n      e.preventDefault();\n      dispatch({\n        type: \"NUMBER_OF_CHILDREN\",\n        numberOfChildren: numberOfChildren.length + 1\n      });\n      dispatch({\n        type: \"CHILDREN_AGE_ARRAY\",\n        childrenAgeArray: numberOfChildren\n      }); // router.push(\"/children\");\n    }\n  }, __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    xs: {\n      span: 6,\n      offset: 3\n    },\n    md: {\n      span: 6,\n      offset: 3\n    },\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(\"h2\", {\n    className: _ChildrenForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n  }, \"How old are your children?\"))), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default.a, null, numberOfChildren.map((child, index) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    xs: {\n      span: 3,\n      offset: 3\n    },\n    md: {\n      span: 3,\n      offset: 3\n    },\n    lg: {\n      span: 3,\n      offset: 3\n    },\n    key: index\n  }, __jsx(\"h5\", null, \"Child #\", index + 1)), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    xs: {\n      span: 3\n    },\n    md: {\n      span: 3\n    },\n    lg: {\n      span: 3\n    },\n    key: index + 20\n  }, __jsx(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    className: \"mb-3\"\n  }, __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    placeholder: \"Age\",\n    \"aria-label\": \"Age\",\n    \"aria-describedby\": \"basic-addon2\",\n    onChange: e => {// updateNumberOfChildren[index](e.target.value)\n    }\n  })))))), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    xs: {\n      span: 6,\n      offset: 3\n    },\n    md: {\n      span: 6,\n      offset: 3\n    },\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: \"align-button\",\n    onClick: async e => {\n      e.preventDefault();\n      await updateNumberOfChildren(children => [...children, {\n        childAge: undefined\n      }]);\n    },\n    style: {\n      width: \"100%\"\n    },\n    variant: \"outline-primary\",\n    type: \"submit\",\n    size: \"lg\"\n  }, \"Add Child\"), \" \")), __jsx(\"br\", null), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    xs: {\n      span: 6,\n      offset: 3\n    },\n    md: {\n      span: 6,\n      offset: 3\n    },\n    lg: {\n      span: 6,\n      offset: 3\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    style: {\n      width: \"100%\"\n    },\n    type: \"submit\",\n    variant: \"outline-primary\",\n    size: \"lg\"\n  }, \"Next\"), \" \"))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoaWxkcmVuRm9ybS5qcz9hNjNkIl0sIm5hbWVzIjpbIkNoaWxkcmVuRm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRpc3BhdGNoQ29udGV4dCIsImhhc0NoaWxkcmVuIiwidXBkYXRlSGFzQ2hpbGRyZW4iLCJ1c2VTdGF0ZSIsIm51bWJlck9mQ2hpbGRyZW4iLCJ1cGRhdGVOdW1iZXJPZkNoaWxkcmVuIiwiY2hpbGRBZ2UiLCJ1bmRlZmluZWQiLCJzcGFuIiwib2Zmc2V0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3R5bGVzIiwiaGVhZGVyIiwidHlwZSIsIndpZHRoIiwibGVuZ3RoIiwiY2hpbGRyZW5BZ2VBcnJheSIsIm1hcCIsImNoaWxkIiwiaW5kZXgiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxZQUFULEdBQXdCO0FBQ25DLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLHdEQUFVLENBQUNDLHFFQUFELENBQTNCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQW1DQyxzREFBUSxDQUFDLEtBQUQsQ0FBakQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsZ0JBQUQ7QUFBQSxPQUFtQkM7QUFBbkIsTUFBNkNGLHNEQUFRLENBQUMsQ0FDeEQ7QUFBRUcsWUFBUSxFQUFFQztBQUFaLEdBRHdELENBQUQsQ0FBM0Q7QUFJQSxTQUNJLG1CQUNJLGlCQURKLEVBRUksTUFBQywwREFBRCxRQUNJLE1BQUMsMERBQUQ7QUFDSSxNQUFFLEVBQUU7QUFBRUMsVUFBSSxFQUFFLENBQVI7QUFBV0MsWUFBTSxFQUFFO0FBQW5CLEtBRFI7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LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ2hpbGRyZW5Gb3JtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcbmltcG9ydCB7IERpc3BhdGNoQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9Gb3JtQ29udGV4dFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSW5wdXRHcm91cFwiO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGlsZHJlbkZvcm0oKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VDb250ZXh0KERpc3BhdGNoQ29udGV4dCk7XG4gICAgY29uc3QgW2hhc0NoaWxkcmVuLCB1cGRhdGVIYXNDaGlsZHJlbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW251bWJlck9mQ2hpbGRyZW4sIHVwZGF0ZU51bWJlck9mQ2hpbGRyZW5dID0gdXNlU3RhdGUoW1xuICAgICAgICB7IGNoaWxkQWdlOiB1bmRlZmluZWQgfSxcbiAgICBdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgICAgICB4cz17eyBzcGFuOiA2LCBvZmZzZXQ6IDMgfX1cbiAgICAgICAgICAgICAgICAgICAgbWQ9e3sgc3BhbjogNiwgb2Zmc2V0OiAzIH19XG4gICAgICAgICAgICAgICAgICAgIGxnPXt7IHNwYW46IDYsIG9mZnNldDogMyB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzQmFyIHZhcmlhbnQ9XCJzdWNjZXNzXCIgbm93PXsyMH0gLz5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJvdXRlci5wdXNoKFwiL2NoaWxkcmVuXCIpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+RG8geW91IGhhdmUgY2hpbGRyZW4/PC9oMj5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gbWQ9e3sgc3BhbjogNiB9fSBsZz17eyBzcGFuOiAzLCBvZmZzZXQ6IDMgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB1cGRhdGVIYXNDaGlsZHJlbih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJIQVNfQ0hJTERSRU5cIiwgaGFzQ2hpbGRyZW46IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJOVU1CRVJfT0ZfQ0hJTERSRU5cIiwgbnVtYmVyT2ZDaGlsZHJlbjogMX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezZ9IG1kPXt7IHNwYW46IDYgfX0gbGc9e3sgc3BhbjogMyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBkaXNwYXRjaCh7IHR5cGU6IFwiSEFTX0NISUxEUkVOXCIsIGhhc0NoaWxkcmVuOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUhhc0NoaWxkcmVuKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcm91dGVyLnB1c2goXCIvY2hpbGRyZW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIHtoYXNDaGlsZHJlbiA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIk5VTUJFUl9PRl9DSElMRFJFTlwiLCBudW1iZXJPZkNoaWxkcmVuOiBudW1iZXJPZkNoaWxkcmVuLmxlbmd0aCArIDEgfSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIkNISUxEUkVOX0FHRV9BUlJBWVwiLCBjaGlsZHJlbkFnZUFycmF5OiBudW1iZXJPZkNoaWxkcmVufSlcbiAgICAgICAgICAgICAgICAgICAgLy8gcm91dGVyLnB1c2goXCIvY2hpbGRyZW5cIik7XG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhzPXt7IHNwYW46IDYsIG9mZnNldDogMyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1kPXt7IHNwYW46IDYsIG9mZnNldDogMyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxnPXt7IHNwYW46IDYsIG9mZnNldDogMyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PkhvdyBvbGQgYXJlIHlvdXIgY2hpbGRyZW4/PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtudW1iZXJPZkNoaWxkcmVuLm1hcCgoY2hpbGQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhzPXt7IHNwYW46IDMsIG9mZnNldDogMyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZD17eyBzcGFuOiAzLCBvZmZzZXQ6IDMgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGc9e3sgc3BhbjogMywgb2Zmc2V0OiAzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkNoaWxkICN7aW5kZXggKyAxfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4cz17eyBzcGFuOiAzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1kPXt7IHNwYW46IDMgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGc9e3sgc3BhbjogMyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4ICsgMjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZU51bWJlck9mQ2hpbGRyZW5baW5kZXhdKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeHM9e3sgc3BhbjogNiwgb2Zmc2V0OiAzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ9e3sgc3BhbjogNiwgb2Zmc2V0OiAzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGc9e3sgc3BhbjogNiwgb2Zmc2V0OiAzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdXBkYXRlTnVtYmVyT2ZDaGlsZHJlbigoY2hpbGRyZW4pID0+IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNoaWxkQWdlOiB1bmRlZmluZWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIENoaWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17eyBzcGFuOiA2LCBvZmZzZXQ6IDMgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ9e3sgc3BhbjogNiwgb2Zmc2V0OiAzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxnPXt7IHNwYW46IDYsIG9mZnNldDogMyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ChildrenForm.js\n");

/***/ }),

/***/ "./components/ChildrenForm.module.css":
/*!********************************************!*\
  !*** ./components/ChildrenForm.module.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"ChildrenForm_header__2O-wN\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoaWxkcmVuRm9ybS5tb2R1bGUuY3NzPzlhZmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoaWxkcmVuRm9ybS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiQ2hpbGRyZW5Gb3JtX2hlYWRlcl9fMk8td05cIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ChildrenForm.module.css\n");

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

/***/ "./pages/children.js":
/*!***************************!*\
  !*** ./pages/children.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Children; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ChildrenForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ChildrenForm */ \"./components/ChildrenForm.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Children() {\n  return __jsx(_components_ChildrenForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGlsZHJlbi5qcz80MjQ4Il0sIm5hbWVzIjpbIkNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxHQUFvQjtBQUMvQixTQUNJLE1BQUMsZ0VBQUQsT0FESjtBQUdIIiwiZmlsZSI6Ii4vcGFnZXMvY2hpbGRyZW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoaWxkcmVuRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGlsZHJlbkZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENoaWxkcmVuRm9ybS8+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/children.js\n");

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

/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/children.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sammyunterman/WebstormProjects/react-next/pages/children.js */"./pages/children.js");


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