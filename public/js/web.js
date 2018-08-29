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
/******/ 	__webpack_require__.p = "/";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWExZGVmODEyNWUzM2Q0ZDI4ZWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy93ZWIvd2ViLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2Fzcy93ZWIvd2ViLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL3N0b3JlL3N0b3JlLWN1c3RvbS5zYXNzP2Q5MjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL3ZhZG1pbi92YWRtaW4uc2Fzcz8yODg1Il0sIm5hbWVzIjpbIldPVyIsImluaXQiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNlY3Rpb24iLCJkYXRhIiwibG9nbyIsIm5hdmJhciIsIm5hdl9sb2dpYyIsImNzcyIsImFkZENsYXNzIiwid2luZG93Iiwic2Nyb2xsIiwic2Nyb2xsUG9zIiwic2Nyb2xsVG9wIiwicmVtb3ZlQ2xhc3MiLCJzY3JlZW4iLCJ3aWR0aCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLEdBQUosR0FBVUMsSUFBVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQyxFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBWTs7QUFFN0IsS0FBSUMsVUFBZ0JILEVBQUUsZ0JBQUYsRUFBb0JJLElBQXBCLENBQXlCLFNBQXpCLENBQXBCO0FBQ0EsS0FBSUMsT0FBZ0JMLEVBQUUsdUJBQUYsQ0FBcEI7QUFDQSxLQUFJTSxTQUFnQk4sRUFBRSxpQkFBRixDQUFwQjs7QUFFQSxVQUFTTyxTQUFULEdBQXFCOztBQUVwQixVQUFPSixPQUFQOztBQUVDO0FBQ0EsUUFBSyxNQUFMO0FBQ0M7QUFDQUUsU0FBS0csR0FBTCxDQUFTLFNBQVQsRUFBbUIsR0FBbkI7QUFDQTtBQUNBRixXQUFPRyxRQUFQLENBQWdCLFVBQWhCOztBQUVBVCxNQUFFVSxNQUFGLEVBQVVDLE1BQVYsQ0FBaUIsWUFBVztBQUMzQixTQUFJQyxZQUFZWixFQUFFVSxNQUFGLEVBQVVHLFNBQVYsRUFBaEI7O0FBRUEsU0FBSUQsWUFBWSxHQUFoQixFQUFxQjtBQUNwQk4sYUFBT0csUUFBUCxDQUFnQixZQUFoQjtBQUNBSixXQUFLRyxHQUFMLENBQVMsU0FBVCxFQUFtQixLQUFuQjtBQUNBLE1BSEQsTUFHTztBQUNORixhQUFPUSxXQUFQLENBQW1CLFlBQW5CO0FBQ0FULFdBQUtHLEdBQUwsQ0FBUyxTQUFULEVBQW1CLEdBQW5CO0FBQ0E7QUFDRCxLQVZEOztBQVlEOztBQUVBO0FBQ0EsUUFBSyxXQUFMOztBQUVDRixhQUFTTixFQUFFLGlCQUFGLENBQVQ7QUFDQU0sV0FBT0csUUFBUCxDQUFnQixlQUFoQjtBQUNBVCxNQUFFLE1BQUYsRUFBVVEsR0FBVixDQUFjLGtCQUFkLEVBQWlDLFNBQWpDO0FBQ0FSLE1BQUVVLE1BQUYsRUFBVUMsTUFBVixDQUFpQixZQUFXO0FBQzNCLFNBQUlDLFlBQVlaLEVBQUVVLE1BQUYsRUFBVUcsU0FBVixFQUFoQjs7QUFFQSxTQUFJRCxZQUFZLEdBQWhCLEVBQXFCO0FBQ3BCTixhQUFPRyxRQUFQLENBQWdCLFlBQWhCO0FBQ0EsTUFGRCxNQUVPO0FBQ05ILGFBQU9RLFdBQVAsQ0FBbUIsWUFBbkI7QUFDQTtBQUNELEtBUkQ7O0FBVUQ7O0FBR0E7QUFDQTtBQUNDZCxNQUFFVSxNQUFGLEVBQVVDLE1BQVYsQ0FBaUIsWUFBVzs7QUFFM0IsU0FBSUMsWUFBWVosRUFBRVUsTUFBRixFQUFVRyxTQUFWLEVBQWhCO0FBQUEsU0FDQVAsU0FBV04sRUFBRSxpQkFBRixDQURYOztBQUdBLFNBQUlZLFlBQVksR0FBaEIsRUFBcUI7QUFDcEJOLGFBQU9HLFFBQVAsQ0FBZ0IsWUFBaEI7QUFDQSxNQUZELE1BRU87QUFDTkgsYUFBT1EsV0FBUCxDQUFtQixZQUFuQjtBQUNBO0FBQ0QsS0FWRDtBQTVDRjtBQXlERztBQUNEOztBQUVBO0FBQ0gsS0FBSUMsT0FBT0MsS0FBUCxHQUFlLEdBQW5CLEVBQXdCO0FBQ2pCVDtBQUNMO0FBR0YsQ0ExRUQsRSxDQTBFSSxpQjs7Ozs7O0FDeEZKLHlDOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiL2pzL3dlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxYTFkZWY4MTI1ZTMzZDRkMjhlZCIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBcdFx0XHRcdFx0XHQgICAgLy9cclxuLy8gICAgICAgIFBMVUdJTlMgICAgICAgICAgIC8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbm5ldyBXT1coKS5pbml0KCk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gXHRcdFx0XHRcdCAgICAgICAgLy9cclxuLy8gICAgICAgIE5BVklHQVRJT04gICAgICAgIC8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcblx0dmFyIHNlY3Rpb24gICAgICAgPSAkKCcjQWN0dWFsU2VjdGlvbicpLmRhdGEoJ3NlY3Rpb24nKTtcclxuXHR2YXIgbG9nbyAgICAgICAgICA9ICQoJy5uYXZiYXIgLm5hdmJhci1icmFuZCcpO1xyXG5cdHZhciBuYXZiYXIgICAgICAgID0gJCgnLm5hdmJhci1kZWZhdWx0Jyk7XHJcblxyXG5cdGZ1bmN0aW9uIG5hdl9sb2dpYygpIHtcclxuXHJcblx0XHRzd2l0Y2goc2VjdGlvbikge1xyXG5cclxuXHRcdFx0Ly8vLy8vLy8gSE9NRSAvLy8vLy8vLy9cclxuXHRcdFx0Y2FzZSBcImhvbWVcIjpcclxuXHRcdFx0XHQvLyAkKCdib2R5JykuY3NzKCdwYWRkaW5nLXRvcCcsJzAnKTtcclxuXHRcdFx0XHRsb2dvLmNzcygnb3BhY2l0eScsJzAnKTtcclxuXHRcdFx0XHQvLyAkKCcubmF2YmFyIC5uYXZiYXItcmlnaHQnKS5jc3MoJ2JvcmRlci1ib3R0b20nLCAnMXB4IHNvbGlkIHdoaXRlJyk7XHJcblx0XHRcdFx0bmF2YmFyLmFkZENsYXNzKCdob21lLW5hdicpO1xyXG5cclxuXHRcdFx0XHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dmFyIHNjcm9sbFBvcyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoc2Nyb2xsUG9zID4gMjUwKSB7XHJcblx0XHRcdFx0XHRcdG5hdmJhci5hZGRDbGFzcygnY2hhbmdlLW5hdicpO1xyXG5cdFx0XHRcdFx0XHRsb2dvLmNzcygnb3BhY2l0eScsJzEwMCcpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bmF2YmFyLnJlbW92ZUNsYXNzKCdjaGFuZ2UtbmF2Jyk7XHJcblx0XHRcdFx0XHRcdGxvZ28uY3NzKCdvcGFjaXR5JywnMCcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHQvLy8vLy8vLyBQT1JURk9MSU8gLy8vLy8vLy8vXHJcblx0XHRcdGNhc2UgXCJwb3J0Zm9saW9cIjpcclxuXHJcblx0XHRcdFx0bmF2YmFyID0gJCgnLm5hdmJhci1kZWZhdWx0Jyk7XHRcdFxyXG5cdFx0XHRcdG5hdmJhci5hZGRDbGFzcygnbmF2LXBvcnRmb2xpbycpO1xyXG5cdFx0XHRcdCQoJ2JvZHknKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCcjZjlmOWY5Jyk7XHJcblx0XHRcdFx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHZhciBzY3JvbGxQb3MgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHNjcm9sbFBvcyA+IDI1MCkge1xyXG5cdFx0XHRcdFx0XHRuYXZiYXIuYWRkQ2xhc3MoJ2NoYW5nZS1uYXYnKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdG5hdmJhci5yZW1vdmVDbGFzcygnY2hhbmdlLW5hdicpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cclxuXHRcdFx0Ly8vLy8vLy8gR0VORVJJQyAvLy8vLy8vLy9cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR2YXIgc2Nyb2xsUG9zID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxyXG5cdFx0XHRcdFx0bmF2YmFyICAgPSAkKCcubmF2YmFyLWRlZmF1bHQnKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKHNjcm9sbFBvcyA+IDI1MCkge1xyXG5cdFx0XHRcdFx0XHRuYXZiYXIuYWRkQ2xhc3MoJ2NoYW5nZS1uYXYnKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdG5hdmJhci5yZW1vdmVDbGFzcygnY2hhbmdlLW5hdicpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdCAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLy8gLS0tLS0tLS0tLS0gRW5kIE5hdmlnYXRpb24gU2NyaXB0IC0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICAgIC8vQWN0aXZhdGUgbmF2IGVmZmVjdHMgaW4gZGVza3RvcFxyXG5cdGlmIChzY3JlZW4ud2lkdGggPiA3NzUpIHtcclxuICAgICAgICBuYXZfbG9naWMoKTtcclxuIFx0fSBcclxuXHJcblxyXG59KTsgLy8gRG9jdW1lbnQgUmVhZHlcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy93ZWIvd2ViLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvc2Fzcy93ZWIvd2ViLnNhc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9zdG9yZS9zdG9yZS1jdXN0b20uc2Fzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL3ZhZG1pbi92YWRtaW4uc2Fzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9