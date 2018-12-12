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
/******/ 	return __webpack_require__(__webpack_require__.s = 80);
/******/ })
/************************************************************************/
/******/ ({

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(81);


/***/ }),

/***/ 81:
/***/ (function(module, exports) {

/*
|--------------------------------------------------------------------------
| SERIALIZABLE LIST UPDATER
|--------------------------------------------------------------------------
*/

// Changes values from columns of a list.
// -------------------------------------------
window.dataSetter = function (fields) {
    var row = $('.SerializableItem');
    items = [];

    $(row).each(function () {
        // This is the row id
        var id = $(this).data('id');

        item = {};
        // Store row id in array
        item['id'] = id;

        item['fields'] = {};
        // Store columns data in array
        for (var i = 0; i < fields.length; i++) {
            var field = $(this).children(fields[i]).children('input').data('field');
            item['fields'][field] = $(this).children(fields[i]).children('input').val();
        }

        // Push row with cols data to array
        items.push(item);
    });
    // First row

    // Debug Table Log
    // All rows
    //for(let i = 0; i < items.length; i++ ){
    //    console.table(items[i]['fields']);
    //}
};

$(document).ready(function () {
    $(document).on("click", "#UpdateList", function () {
        if (items == undefined || items == '' || items == null) {
            alert_error("", "Aún no se realizaron cambios");
        } else {
            var route = $(this).data("route");
            updateList(items, route);
        }
    });
});

function updateList(items, route) {
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { data: items },
        success: function success(data) {
            console.log(data);
            alert_ok('OK!', 'Items actualizados');
        },
        error: function error(data) {
            $('#Error').html(data.responseText);
            // alert_error("", "Ha ingresado un dato incorrecto. Solo puede ingresar números enteros positivos.");
            console.log("Error en updateList()");
            console.log(data);
        }
    });
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTg3YTI4Y2FlZDY5NmEzZGRjZDgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92YWRtaW4tZHluYW1pYy1mb3Jtcy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJkYXRhU2V0dGVyIiwiZmllbGRzIiwicm93IiwiJCIsIml0ZW1zIiwiZWFjaCIsImlkIiwiZGF0YSIsIml0ZW0iLCJpIiwibGVuZ3RoIiwiZmllbGQiLCJjaGlsZHJlbiIsInZhbCIsInB1c2giLCJkb2N1bWVudCIsInJlYWR5Iiwib24iLCJ1bmRlZmluZWQiLCJhbGVydF9lcnJvciIsInJvdXRlIiwidXBkYXRlTGlzdCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiYWxlcnRfb2siLCJlcnJvciIsImh0bWwiLCJyZXNwb25zZVRleHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7Ozs7O0FBTUE7QUFDQTtBQUNBQSxPQUFPQyxVQUFQLEdBQW9CLFVBQVVDLE1BQVYsRUFBa0I7QUFDbEMsUUFBSUMsTUFBTUMsRUFBRSxtQkFBRixDQUFWO0FBQ0FDLFlBQVEsRUFBUjs7QUFFQUQsTUFBRUQsR0FBRixFQUFPRyxJQUFQLENBQVksWUFBWTtBQUNwQjtBQUNBLFlBQUlDLEtBQUtILEVBQUUsSUFBRixFQUFRSSxJQUFSLENBQWEsSUFBYixDQUFUOztBQUVBQyxlQUFPLEVBQVA7QUFDQTtBQUNBQSxhQUFLLElBQUwsSUFBYUYsRUFBYjs7QUFFQUUsYUFBSyxRQUFMLElBQWlCLEVBQWpCO0FBQ0E7QUFDQSxhQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSVIsT0FBT1MsTUFBM0IsRUFBbUNELEdBQW5DLEVBQXdDO0FBQ3BDLGdCQUFJRSxRQUFRUixFQUFFLElBQUYsRUFBUVMsUUFBUixDQUFpQlgsT0FBT1EsQ0FBUCxDQUFqQixFQUE0QkcsUUFBNUIsQ0FBcUMsT0FBckMsRUFBOENMLElBQTlDLENBQW1ELE9BQW5ELENBQVo7QUFDQUMsaUJBQUssUUFBTCxFQUFlRyxLQUFmLElBQXdCUixFQUFFLElBQUYsRUFBUVMsUUFBUixDQUFpQlgsT0FBT1EsQ0FBUCxDQUFqQixFQUE0QkcsUUFBNUIsQ0FBcUMsT0FBckMsRUFBOENDLEdBQTlDLEVBQXhCO0FBQ0g7O0FBRUQ7QUFDQVQsY0FBTVUsSUFBTixDQUFXTixJQUFYO0FBQ0gsS0FqQkQ7QUFrQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILENBN0JEOztBQStCQUwsRUFBRVksUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekJiLE1BQUVZLFFBQUYsRUFBWUUsRUFBWixDQUFlLE9BQWYsRUFBdUIsYUFBdkIsRUFBcUMsWUFBVztBQUM1QyxZQUFHYixTQUFTYyxTQUFULElBQXNCZCxTQUFTLEVBQS9CLElBQXFDQSxTQUFTLElBQWpELEVBQ0E7QUFDSWUsd0JBQVksRUFBWixFQUFnQiw4QkFBaEI7QUFDSCxTQUhELE1BS0E7QUFDSSxnQkFBSUMsUUFBUWpCLEVBQUUsSUFBRixFQUFRSSxJQUFSLENBQWEsT0FBYixDQUFaO0FBQ0FjLHVCQUFXakIsS0FBWCxFQUFrQmdCLEtBQWxCO0FBQ0g7QUFDSixLQVZEO0FBV0gsQ0FaRDs7QUFlQSxTQUFTQyxVQUFULENBQW9CakIsS0FBcEIsRUFBMkJnQixLQUEzQixFQUNBO0FBQ0tqQixNQUFFbUIsSUFBRixDQUFPO0FBQ0pDLGFBQUtILEtBREQ7QUFFSkksZ0JBQVEsTUFGSjtBQUdKQyxrQkFBVSxNQUhOO0FBSUpsQixjQUFNLEVBQUNBLE1BQU1ILEtBQVAsRUFKRjtBQUtKc0IsaUJBQVMsaUJBQVVuQixJQUFWLEVBQWdCO0FBQ3pCb0Isb0JBQVFDLEdBQVIsQ0FBWXJCLElBQVo7QUFDSXNCLHFCQUFTLEtBQVQsRUFBZSxvQkFBZjtBQUNILFNBUkc7QUFTSkMsZUFBTyxlQUFVdkIsSUFBVixFQUFnQjtBQUNuQkosY0FBRSxRQUFGLEVBQVk0QixJQUFaLENBQWlCeEIsS0FBS3lCLFlBQXRCO0FBQ0E7QUFDQUwsb0JBQVFDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBRCxvQkFBUUMsR0FBUixDQUFZckIsSUFBWjtBQUNIO0FBZEcsS0FBUDtBQWdCSixDIiwiZmlsZSI6Ii9qcy92YWRtaW4tZHluYW1pYy1mb3Jtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4MCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTg3YTI4Y2FlZDY5NmEzZGRjZDgiLCIvKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IFNFUklBTElaQUJMRSBMSVNUIFVQREFURVJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuLy8gQ2hhbmdlcyB2YWx1ZXMgZnJvbSBjb2x1bW5zIG9mIGEgbGlzdC5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbndpbmRvdy5kYXRhU2V0dGVyID0gZnVuY3Rpb24gKGZpZWxkcykge1xuICAgIGxldCByb3cgPSAkKCcuU2VyaWFsaXphYmxlSXRlbScpO1xuICAgIGl0ZW1zID0gW107XG4gICAgXG4gICAgJChyb3cpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUaGlzIGlzIHRoZSByb3cgaWRcbiAgICAgICAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xuICAgICAgICBcbiAgICAgICAgaXRlbSA9IHt9XG4gICAgICAgIC8vIFN0b3JlIHJvdyBpZCBpbiBhcnJheVxuICAgICAgICBpdGVtWydpZCddID0gaWQ7XG4gICAgICAgIFxuICAgICAgICBpdGVtWydmaWVsZHMnXSA9IHt9O1xuICAgICAgICAvLyBTdG9yZSBjb2x1bW5zIGRhdGEgaW4gYXJyYXlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBmaWVsZCA9ICQodGhpcykuY2hpbGRyZW4oZmllbGRzW2ldKS5jaGlsZHJlbignaW5wdXQnKS5kYXRhKCdmaWVsZCcpO1xuICAgICAgICAgICAgaXRlbVsnZmllbGRzJ11bZmllbGRdID0gJCh0aGlzKS5jaGlsZHJlbihmaWVsZHNbaV0pLmNoaWxkcmVuKCdpbnB1dCcpLnZhbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHVzaCByb3cgd2l0aCBjb2xzIGRhdGEgdG8gYXJyYXlcbiAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICB9KTtcbiAgICAvLyBGaXJzdCByb3dcblxuICAgIC8vIERlYnVnIFRhYmxlIExvZ1xuICAgIC8vIEFsbCByb3dzXG4gICAgLy9mb3IobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKysgKXtcbiAgICAvLyAgICBjb25zb2xlLnRhYmxlKGl0ZW1zW2ldWydmaWVsZHMnXSk7XG4gICAgLy99XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIixcIiNVcGRhdGVMaXN0XCIsZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKGl0ZW1zID09IHVuZGVmaW5lZCB8fCBpdGVtcyA9PSAnJyB8fCBpdGVtcyA9PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBhbGVydF9lcnJvcihcIlwiLCBcIkHDum4gbm8gc2UgcmVhbGl6YXJvbiBjYW1iaW9zXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHJvdXRlID0gJCh0aGlzKS5kYXRhKFwicm91dGVcIik7XG4gICAgICAgICAgICB1cGRhdGVMaXN0KGl0ZW1zLCByb3V0ZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG5cbmZ1bmN0aW9uIHVwZGF0ZUxpc3QoaXRlbXMsIHJvdXRlKVxue1xuICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YToge2RhdGE6IGl0ZW1zfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBhbGVydF9vaygnT0shJywnSXRlbXMgYWN0dWFsaXphZG9zJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAvLyBhbGVydF9lcnJvcihcIlwiLCBcIkhhIGluZ3Jlc2FkbyB1biBkYXRvIGluY29ycmVjdG8uIFNvbG8gcHVlZGUgaW5ncmVzYXIgbsO6bWVyb3MgZW50ZXJvcyBwb3NpdGl2b3MuXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBlbiB1cGRhdGVMaXN0KClcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfVxuICAgICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZhZG1pbi1keW5hbWljLWZvcm1zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==