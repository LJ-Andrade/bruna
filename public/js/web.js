/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

//////////////////////////////
// 						    //
//        PLUGINS           //
//                          //
//////////////////////////////

new WOW().init();

//////////////////////////////
// 					        //
//        NAVIGATION        //
//                          //
//////////////////////////////

$(document).ready(function () {

	var section = $('#ActualSection').data('section');
	var logo = $('.navbar .navbar-brand');
	var navbar = $('.navbar-default');

	function nav_logic() {

		switch (section) {

			//////// HOME /////////
			case "home":
				// $('body').css('padding-top','0');
				logo.css('opacity', '0');
				// $('.navbar .navbar-right').css('border-bottom', '1px solid white');
				navbar.addClass('home-nav');

				$(window).scroll(function () {
					var scrollPos = $(window).scrollTop();

					if (scrollPos > 250) {
						navbar.addClass('change-nav');
						logo.css('opacity', '100');
					} else {
						navbar.removeClass('change-nav');
						logo.css('opacity', '0');
					}
				});

				break;

			//////// PORTFOLIO /////////
			case "portfolio":

				navbar = $('.navbar-default');
				navbar.addClass('nav-portfolio');
				$('body').css('background-color', '#f9f9f9');
				$(window).scroll(function () {
					var scrollPos = $(window).scrollTop();

					if (scrollPos > 250) {
						navbar.addClass('change-nav');
					} else {
						navbar.removeClass('change-nav');
					}
				});

				break;

			//////// GENERIC /////////
			default:
				$(window).scroll(function () {

					var scrollPos = $(window).scrollTop(),
					    navbar = $('.navbar-default');

					if (scrollPos > 250) {
						navbar.addClass('change-nav');
					} else {
						navbar.removeClass('change-nav');
					}
				});
		}
	}
	// ----------- End Navigation Script ------------ //

	//Activate nav effects in desktop
	if (screen.width > 775) {
		nav_logic();
	}
}); // Document Ready

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTAzYzEzOGUzYWQyOGY1NDBhMTYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy93ZWIvd2ViLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2Fzcy93ZWIvd2ViLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL3N0b3JlL3N0b3JlLWN1c3RvbS5zYXNzPzY0MTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL3ZhZG1pbi92YWRtaW4uc2Fzcz83MDM3Il0sIm5hbWVzIjpbIldPVyIsImluaXQiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNlY3Rpb24iLCJkYXRhIiwibG9nbyIsIm5hdmJhciIsIm5hdl9sb2dpYyIsImNzcyIsImFkZENsYXNzIiwid2luZG93Iiwic2Nyb2xsIiwic2Nyb2xsUG9zIiwic2Nyb2xsVG9wIiwicmVtb3ZlQ2xhc3MiLCJzY3JlZW4iLCJ3aWR0aCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLEdBQUosR0FBVUMsSUFBVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQyxFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBWTs7QUFFN0IsS0FBSUMsVUFBZ0JILEVBQUUsZ0JBQUYsRUFBb0JJLElBQXBCLENBQXlCLFNBQXpCLENBQXBCO0FBQ0EsS0FBSUMsT0FBZ0JMLEVBQUUsdUJBQUYsQ0FBcEI7QUFDQSxLQUFJTSxTQUFnQk4sRUFBRSxpQkFBRixDQUFwQjs7QUFFQSxVQUFTTyxTQUFULEdBQXFCOztBQUVwQixVQUFPSixPQUFQOztBQUVDO0FBQ0EsUUFBSyxNQUFMO0FBQ0M7QUFDQUUsU0FBS0csR0FBTCxDQUFTLFNBQVQsRUFBbUIsR0FBbkI7QUFDQTtBQUNBRixXQUFPRyxRQUFQLENBQWdCLFVBQWhCOztBQUVBVCxNQUFFVSxNQUFGLEVBQVVDLE1BQVYsQ0FBaUIsWUFBVztBQUMzQixTQUFJQyxZQUFZWixFQUFFVSxNQUFGLEVBQVVHLFNBQVYsRUFBaEI7O0FBRUEsU0FBSUQsWUFBWSxHQUFoQixFQUFxQjtBQUNwQk4sYUFBT0csUUFBUCxDQUFnQixZQUFoQjtBQUNBSixXQUFLRyxHQUFMLENBQVMsU0FBVCxFQUFtQixLQUFuQjtBQUNBLE1BSEQsTUFHTztBQUNORixhQUFPUSxXQUFQLENBQW1CLFlBQW5CO0FBQ0FULFdBQUtHLEdBQUwsQ0FBUyxTQUFULEVBQW1CLEdBQW5CO0FBQ0E7QUFDRCxLQVZEOztBQVlEOztBQUVBO0FBQ0EsUUFBSyxXQUFMOztBQUVDRixhQUFTTixFQUFFLGlCQUFGLENBQVQ7QUFDQU0sV0FBT0csUUFBUCxDQUFnQixlQUFoQjtBQUNBVCxNQUFFLE1BQUYsRUFBVVEsR0FBVixDQUFjLGtCQUFkLEVBQWlDLFNBQWpDO0FBQ0FSLE1BQUVVLE1BQUYsRUFBVUMsTUFBVixDQUFpQixZQUFXO0FBQzNCLFNBQUlDLFlBQVlaLEVBQUVVLE1BQUYsRUFBVUcsU0FBVixFQUFoQjs7QUFFQSxTQUFJRCxZQUFZLEdBQWhCLEVBQXFCO0FBQ3BCTixhQUFPRyxRQUFQLENBQWdCLFlBQWhCO0FBQ0EsTUFGRCxNQUVPO0FBQ05ILGFBQU9RLFdBQVAsQ0FBbUIsWUFBbkI7QUFDQTtBQUNELEtBUkQ7O0FBVUQ7O0FBR0E7QUFDQTtBQUNDZCxNQUFFVSxNQUFGLEVBQVVDLE1BQVYsQ0FBaUIsWUFBVzs7QUFFM0IsU0FBSUMsWUFBWVosRUFBRVUsTUFBRixFQUFVRyxTQUFWLEVBQWhCO0FBQUEsU0FDQVAsU0FBV04sRUFBRSxpQkFBRixDQURYOztBQUdBLFNBQUlZLFlBQVksR0FBaEIsRUFBcUI7QUFDcEJOLGFBQU9HLFFBQVAsQ0FBZ0IsWUFBaEI7QUFDQSxNQUZELE1BRU87QUFDTkgsYUFBT1EsV0FBUCxDQUFtQixZQUFuQjtBQUNBO0FBQ0QsS0FWRDtBQTVDRjtBQXlERztBQUNEOztBQUVBO0FBQ0gsS0FBSUMsT0FBT0MsS0FBUCxHQUFlLEdBQW5CLEVBQXdCO0FBQ2pCVDtBQUNMO0FBR0YsQ0ExRUQsRSxDQTBFSSxpQjs7Ozs7O0FDeEZKLHlDOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiL2pzL3dlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDkwM2MxMzhlM2FkMjhmNTQwYTE2IiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFx0XHRcdFx0XHRcdCAgICAvL1xyXG4vLyAgICAgICAgUExVR0lOUyAgICAgICAgICAgLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxubmV3IFdPVygpLmluaXQoKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBcdFx0XHRcdFx0ICAgICAgICAvL1xyXG4vLyAgICAgICAgTkFWSUdBVElPTiAgICAgICAgLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuXHR2YXIgc2VjdGlvbiAgICAgICA9ICQoJyNBY3R1YWxTZWN0aW9uJykuZGF0YSgnc2VjdGlvbicpO1xyXG5cdHZhciBsb2dvICAgICAgICAgID0gJCgnLm5hdmJhciAubmF2YmFyLWJyYW5kJyk7XHJcblx0dmFyIG5hdmJhciAgICAgICAgPSAkKCcubmF2YmFyLWRlZmF1bHQnKTtcclxuXHJcblx0ZnVuY3Rpb24gbmF2X2xvZ2ljKCkge1xyXG5cclxuXHRcdHN3aXRjaChzZWN0aW9uKSB7XHJcblxyXG5cdFx0XHQvLy8vLy8vLyBIT01FIC8vLy8vLy8vL1xyXG5cdFx0XHRjYXNlIFwiaG9tZVwiOlxyXG5cdFx0XHRcdC8vICQoJ2JvZHknKS5jc3MoJ3BhZGRpbmctdG9wJywnMCcpO1xyXG5cdFx0XHRcdGxvZ28uY3NzKCdvcGFjaXR5JywnMCcpO1xyXG5cdFx0XHRcdC8vICQoJy5uYXZiYXIgLm5hdmJhci1yaWdodCcpLmNzcygnYm9yZGVyLWJvdHRvbScsICcxcHggc29saWQgd2hpdGUnKTtcclxuXHRcdFx0XHRuYXZiYXIuYWRkQ2xhc3MoJ2hvbWUtbmF2Jyk7XHJcblxyXG5cdFx0XHRcdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR2YXIgc2Nyb2xsUG9zID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChzY3JvbGxQb3MgPiAyNTApIHtcclxuXHRcdFx0XHRcdFx0bmF2YmFyLmFkZENsYXNzKCdjaGFuZ2UtbmF2Jyk7XHJcblx0XHRcdFx0XHRcdGxvZ28uY3NzKCdvcGFjaXR5JywnMTAwJyk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRuYXZiYXIucmVtb3ZlQ2xhc3MoJ2NoYW5nZS1uYXYnKTtcclxuXHRcdFx0XHRcdFx0bG9nby5jc3MoJ29wYWNpdHknLCcwJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRcdC8vLy8vLy8vIFBPUlRGT0xJTyAvLy8vLy8vLy9cclxuXHRcdFx0Y2FzZSBcInBvcnRmb2xpb1wiOlxyXG5cclxuXHRcdFx0XHRuYXZiYXIgPSAkKCcubmF2YmFyLWRlZmF1bHQnKTtcdFx0XHJcblx0XHRcdFx0bmF2YmFyLmFkZENsYXNzKCduYXYtcG9ydGZvbGlvJyk7XHJcblx0XHRcdFx0JCgnYm9keScpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsJyNmOWY5ZjknKTtcclxuXHRcdFx0XHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dmFyIHNjcm9sbFBvcyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoc2Nyb2xsUG9zID4gMjUwKSB7XHJcblx0XHRcdFx0XHRcdG5hdmJhci5hZGRDbGFzcygnY2hhbmdlLW5hdicpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bmF2YmFyLnJlbW92ZUNsYXNzKCdjaGFuZ2UtbmF2Jyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRicmVhaztcclxuXHJcblxyXG5cdFx0XHQvLy8vLy8vLyBHRU5FUklDIC8vLy8vLy8vL1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHZhciBzY3JvbGxQb3MgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXHJcblx0XHRcdFx0XHRuYXZiYXIgICA9ICQoJy5uYXZiYXItZGVmYXVsdCcpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoc2Nyb2xsUG9zID4gMjUwKSB7XHJcblx0XHRcdFx0XHRcdG5hdmJhci5hZGRDbGFzcygnY2hhbmdlLW5hdicpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bmF2YmFyLnJlbW92ZUNsYXNzKCdjaGFuZ2UtbmF2Jyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0ICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAvLyAtLS0tLS0tLS0tLSBFbmQgTmF2aWdhdGlvbiBTY3JpcHQgLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gICAgLy9BY3RpdmF0ZSBuYXYgZWZmZWN0cyBpbiBkZXNrdG9wXHJcblx0aWYgKHNjcmVlbi53aWR0aCA+IDc3NSkge1xyXG4gICAgICAgIG5hdl9sb2dpYygpO1xyXG4gXHR9IFxyXG5cclxuXHJcbn0pOyAvLyBEb2N1bWVudCBSZWFkeVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3dlYi93ZWIuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL3dlYi93ZWIuc2Fzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL3N0b3JlL3N0b3JlLWN1c3RvbS5zYXNzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvdmFkbWluL3ZhZG1pbi5zYXNzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=