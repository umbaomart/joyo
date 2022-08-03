/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/_polyfill */ \"./src/js/modules/_polyfill.js\");\n/* harmony import */ var _modules_myAccordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/_myAccordion */ \"./src/js/modules/_myAccordion.js\");\n/* harmony import */ var _modules_fadeInUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/_fadeInUp */ \"./src/js/modules/_fadeInUp.js\");\n/* harmony import */ var _modules_stickyBtnGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/_stickyBtnGroup */ \"./src/js/modules/_stickyBtnGroup.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/_smoothScroll */ \"./src/js/modules/_smoothScroll.js\");\n // import { viewport } from './modules/_viewport';\n// import { btnClickFunc } from './modules/_btnClickFunc';\n// import { getSearchParams } from './modules/_getSearchParams';\n\n\n\n // import { accordion } from './modules/_accordion';\n// import { backToTop } from './modules/_backToTop';\n// import { checkView } from './modules/_checkView';\n// import { customSelect } from './modules/_customSelect';\n// import { modal } from './modules/_modal';\n\n // import { stickyHeader } from './modules/_stickyHeader';\n// import { swiperSlider } from './modules/_swiperSlider';\n// import { wowEffects } from './modules/_wowEffects';\n// import { smoothScrollVs } from './modules/_smoothScrollVs';\n// import { sampleArray } from './modules/_sampleArray';\n\n$(function () {\n  (0,_modules_polyfill__WEBPACK_IMPORTED_MODULE_0__.polyfill)();\n  (0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_4__.smoothScroll)(); // smoothScrollVs()\n  // sampleArray();\n  // viewport();\n  // btnClickFunc();\n  // wowEffects();\n\n  (0,_modules_myAccordion__WEBPACK_IMPORTED_MODULE_1__.myAccordion)();\n  (0,_modules_fadeInUp__WEBPACK_IMPORTED_MODULE_2__.fadeInUp)(); // accordion();\n  // swiperSlider();\n  // customSelect();\n  // backToTop();\n  // modal();\n});\n$(window).on('load resize scroll', function () {\n  //   checkView();\n  // stickyHeader();\n  (0,_modules_stickyBtnGroup__WEBPACK_IMPORTED_MODULE_3__.stickyBtnGroup)();\n});\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/_fadeInUp.js":
/*!*************************************!*\
  !*** ./src/js/modules/_fadeInUp.js ***!
  \*************************************/
/*! namespace exports */
/*! export fadeInUp [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fadeInUp\": function() { return /* binding */ fadeInUp; }\n/* harmony export */ });\nvar fadeInUp = function fadeInUp() {\n  gsap.defaults({\n    easeEach: \"sine\"\n  });\n  gsap.set(\".fadeInUp\", {\n    y: 50\n  });\n\n  if (window.innerWidth > 768) {\n    ScrollTrigger.batch(\".fadeInUp\", {\n      interval: 0.7,\n      // time window (in seconds) for batching to occur.\n      // batchMax: 3,   // maximum batch size (targets)\n      onEnter: function onEnter(batch) {\n        return gsap.to(batch, {\n          opacity: 1,\n          y: 0,\n          stagger: 0.23\n        });\n      } // also onLeave, onEnterBack, and onLeaveBack\n      // also most normal ScrollTrigger values like start, end, etc.\n\n    });\n  } else {\n    ScrollTrigger.batch(\".fadeInUp\", {\n      interval: 0.5,\n      // time window (in seconds) for batching to occur.\n      // batchMax: 3,   // maximum batch size (targets)\n      onEnter: function onEnter(batch) {\n        return gsap.to(batch, {\n          opacity: 1,\n          y: 0,\n          stagger: 0.2\n        });\n      } // also onLeave, onEnterBack, and onLeaveBack\n      // also most normal ScrollTrigger values like start, end, etc.\n\n    });\n  }\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_fadeInUp.js?");

/***/ }),

/***/ "./src/js/modules/_myAccordion.js":
/*!****************************************!*\
  !*** ./src/js/modules/_myAccordion.js ***!
  \****************************************/
/*! namespace exports */
/*! export myAccordion [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myAccordion\": function() { return /* binding */ myAccordion; }\n/* harmony export */ });\nvar myAccordion = function myAccordion() {\n  if ($('.js-accordion').length) {\n    var accordionHeader = $('.js-accordion');\n    accordionHeader.on('click', function () {\n      $(this).parent().toggleClass('is-open');\n      $(this).next().slideToggle();\n    });\n  }\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_myAccordion.js?");

/***/ }),

/***/ "./src/js/modules/_polyfill.js":
/*!*************************************!*\
  !*** ./src/js/modules/_polyfill.js ***!
  \*************************************/
/*! namespace exports */
/*! export polyfill [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"polyfill\": function() { return /* binding */ polyfill; }\n/* harmony export */ });\nvar polyfill = function polyfill() {\n  //Reference:\n  //reeversedev.com/polyfill-for-foreach-map-filter-reduce\n  // Polyfills\n  // Foreach function\n  if (window.NodeList && !NodeList.prototype.forEach) {\n    NodeList.prototype.forEach = Array.prototype.forEach;\n  } // Map function\n\n\n  Array.prototype.map = function (callback) {\n    var arr = [];\n\n    for (var i = 0; i < this.length; i++) {\n      arr.push(callback(this[i], i, this));\n    }\n\n    return arr;\n  }; // Filter function\n\n\n  Array.prototype.filter = function (callback, context) {\n    var arr = [];\n\n    for (var i = 0; i < this.length; i++) {\n      if (callback.call(context, this[i], i, this)) {\n        arr.push(this[i]);\n      }\n    }\n\n    return arr;\n  }; // Reduce function\n\n\n  Array.prototype.reduce = function (callback, initialValue) {\n    var accumulator = initialValue === undefined ? undefined : initialValue;\n\n    for (var i = 0; i < this.length; i++) {\n      if (accumulator !== undefined) {\n        accumulator = callback.call(undefined, accumulator, this[i], i, this);\n      } else {\n        accumulator = this[i];\n      }\n    }\n\n    return accumulator;\n  };\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_polyfill.js?");

/***/ }),

/***/ "./src/js/modules/_smoothScroll.js":
/*!*****************************************!*\
  !*** ./src/js/modules/_smoothScroll.js ***!
  \*****************************************/
/*! namespace exports */
/*! export smoothScroll [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"smoothScroll\": function() { return /* binding */ smoothScroll; }\n/* harmony export */ });\nvar smoothScroll = function smoothScroll() {\n  $('a[href^=\"#\"]').on(\"click\", function (e) {\n    var speed = 600;\n    var href = $(e.currentTarget).attr(\"href\");\n    var target = $(href == \"#\" || href == \"\" ? \"html\" : href);\n    var position = target.offset().top;\n    $(\"body, html\").delay(200).animate({\n      scrollTop: position\n    }, speed, \"swing\");\n    return false;\n  });\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_smoothScroll.js?");

/***/ }),

/***/ "./src/js/modules/_stickyBtnGroup.js":
/*!*******************************************!*\
  !*** ./src/js/modules/_stickyBtnGroup.js ***!
  \*******************************************/
/*! namespace exports */
/*! export stickyBtnGroup [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stickyBtnGroup\": function() { return /* binding */ stickyBtnGroup; }\n/* harmony export */ });\nvar stickyBtnGroup = function stickyBtnGroup() {\n  var sec02 = $('.sec02');\n  var sec02Top = sec02.offset().top;\n\n  if ($(window).scrollTop() > sec02Top && !$('.siteFooter').isInViewport()) {\n    $('#js-sticky').addClass('is-visible');\n  } else {\n    $('#js-sticky').removeClass('is-visible');\n  }\n};\n\n$.fn.isInViewport = function () {\n  var elementTop = $(this).offset().top;\n  var elementBottom = elementTop + $(this).outerHeight();\n  var viewportTop = $(window).scrollTop();\n  var viewportBottom = viewportTop + $(window).height();\n  return elementBottom > viewportTop && elementTop < viewportBottom;\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_stickyBtnGroup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;