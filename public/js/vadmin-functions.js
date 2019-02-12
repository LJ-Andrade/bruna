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
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
/******/ })
/************************************************************************/
/******/ ({

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(77);


/***/ }),

/***/ 77:
/***/ (function(module, exports) {

$.ajaxSetup({
	headers: {
		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	}
});

/*
|--------------------------------------------------------------------------
| LISTS
|--------------------------------------------------------------------------
*/

// Set List Action Buttons
$(document).on("click", ".List-Checkbox", function (e) {
	e.stopPropagation();
	var selectedRows = [];
	$(".List-Checkbox:checked").each(function () {
		selectedRows.push($(this).attr('data-id'));
		$('#RowsToDeletion').val(selectedRows);
	});

	if (selectedRows.length == 1) {
		$('#EditId, #CreateFromAnotherId').val(selectedRows);
	} else if (selectedRows.length < 1) {
		$('#EditId, #CreateFromAnotherId').val('');
	} else if (selectedRows.length > 1) {
		$('#EditId, #CreateFromAnotherId').val('');
	} else {
		$('#EditId, #CreateFromAnotherId').val('');
	}

	showButtons(this);

	var checkbox = $(this).prop('checked');
	if (checkbox) {
		$(this).parent().parent().parent().addClass('row-selected');
	} else {
		$(this).parent().parent().parent().removeClass('row-selected');
	}
});

function showButtons(trigger) {
	var countSelected = $('.List-Checkbox:checkbox:checked').length;
	if (countSelected == 1) {
		$('.DeleteBtn').removeClass('Hidden');
		$('.DiscountinueBtn').removeClass('Hidden');
		$('.EditBtn').removeClass('Hidden');
		$('.CreateFromAnotherBtn').removeClass('Hidden');
	} else if (countSelected >= 2) {
		$('.EditBtn').addClass('Hidden');
		$('.CreateFromAnotherBtn').addClass('Hidden');
	} else if (countSelected == 0) {
		$('.DeleteBtn').addClass('Hidden');
		$('.DiscountinueBtn').addClass('Hidden');
		$('.EditBtn').addClass('Hidden');
		$('.CreateFromAnotherBtn').addClass('Hidden');
	}
}

// Show Edit and Delete buttons in bottom if scrolled to mutch
$(document).scroll(function (e) {
	var scrollAmount = $(window).scrollTop();
	if (scrollAmount > 150) {
		$('.DiscountinueBtn').css({ "position": "fixed", "bottom": "50px", "right": "120px", "z-index": "999" });
		$('.DeleteBtn').css({ "position": "fixed", "bottom": "50px", "right": "10px", "z-index": "999" });
		$('.EditBtn').css({ "position": "fixed", "bottom": "50px", "right": "425px", "z-index": "999" });
		$('.CreateFromAnotherBtn').css({ "position": "fixed", "bottom": "50px", "right": "265px", "z-index": "999" });
	} else {
		$('.DiscountinueBtn').css({ "position": "relative", "bottom": "auto", "right": "auto", "z-index": "999" });
		$('.DeleteBtn').css({ "position": "relative", "bottom": "auto", "right": "auto", "z-index": "999" });
		$('.EditBtn').css({ "position": "relative", "bottom": "auto", "right": "auto", "z-index": "999" });
		$('.CreateFromAnotherBtn').css({ "position": "relative", "bottom": "auto", "right": "auto", "z-index": "999" });
	}
});

// Uncheck all checkboxes on reload.
function uncheckAll() {
	$('#TableList tbody .CheckBoxes').find('input[type="checkbox"]').each(function () {
		$(this).prop('checked', false);
	});
}
uncheckAll();

/*
|--------------------------------------------------------------------------
| FUNCTIONS
|--------------------------------------------------------------------------
*/

deleteRecord = function deleteRecord(id, route, bigtext, smalltext) {
	swal({
		title: bigtext,
		text: smalltext,
		type: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'ELIMINAR',
		cancelButtonText: 'Cancelar',
		confirmButtonClass: 'btn btnGreen',
		cancelButtonClass: 'btn btnRed',
		buttonsStyling: false
	}).then(function () {

		$.ajax({
			url: route,
			method: 'POST',
			dataType: 'JSON',
			data: { id: id },
			beforeSend: function beforeSend() {
				// $('#Main-Loader').removeClass('Hidden');
			},
			success: function success(data) {
				$('#BatchDeleteBtn').addClass('Hidden');
				if (data.success == true) {
					$('#Id' + id).hide(200);
					for (i = 0; i < id.length; i++) {
						$('#Id' + id[i]).hide(200);
					}
					alert_ok('Ok!', 'Eliminación completa');
					console.log(data);
					return true;
				} else {
					alert_error('Ups!', 'Ha ocurrido un error (Puede que este registro tenga relación con otros items en el sistema). Debe eliminar primero los mismos.');
					console.log(data);
					return false;
				}
			},
			error: function error(data) {
				$('#Error').html(data.responseText);
				console.log(data);
			},
			complete: function complete() {
				// $('#Main-Loader').addClass('Hidden');
			}
		});
	});
};

deleteAndReload = function deleteAndReload(id, route, bigtext, smalltext) {
	swal({
		title: bigtext,
		text: smalltext,
		type: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'ELIMINAR',
		cancelButtonText: 'Cancelar',
		confirmButtonClass: 'btn btnGreen',
		cancelButtonClass: 'btn btnRed',
		buttonsStyling: false
	}).then(function () {
		$.ajax({
			url: route,
			method: 'POST',
			dataType: 'JSON',
			data: { id: id },
			beforeSend: function beforeSend() {
				// $('#Main-Loader').removeClass('Hidden');
			},
			success: function success(data) {
				$('#BatchDeleteBtn').addClass('Hidden');
				if (data.success == true) {
					// alert_ok('Ok!','Eliminación completa');
					location.reload();
				} else {
					alert_error('Ups!', 'Ha ocurrido un error (Puede que este registro tenga relación con otros items en el sistema). Debe eliminar primero los mismos.');
					console.log(data);
					return false;
				}
			},
			error: function error(data) {
				location.reload();
				// $('#Error').html(data.responseText);
				console.log(data);
			}
		});
	});
};

discountinueArticle = function discountinueArticle(id, route, value, bigtext, smalltext) {
	swal({
		title: bigtext,
		text: smalltext,
		type: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Discontinuar',
		cancelButtonText: 'Cancelar',
		confirmButtonClass: 'btn btnGreen',
		cancelButtonClass: 'btn btnRed',
		buttonsStyling: false
	}).then(function () {
		$.ajax({
			url: route,
			method: 'POST',
			dataType: 'JSON',
			data: { id: id, value: value },
			beforeSend: function beforeSend() {
				// $('#Main-Loader').removeClass('Hidden');
			},
			success: function success(data) {
				$('#BatchDeleteBtn').addClass('Hidden');
				if (data.success == true) {
					// alert_ok('Ok!','Eliminación completa');
					location.reload();
				} else {
					alert_error('Ups!', 'Ha ocurrido un error (Puede que este registro tenga relación con otros items en el sistema). Debe eliminar primero los mismos.');
					console.log(data);
					return false;
				}
			},
			error: function error(data) {
				$('#Error').html(data.responseText);
				console.log(data);
			}
		});
	});
};

/*
|--------------------------------------------------------------------------
| ALERTS
|--------------------------------------------------------------------------
*/

function alert_ok(bigtext, smalltext) {
	swal(bigtext, smalltext, 'success');
}

function alert_error(bigtext, smalltext) {
	swal(bigtext, smalltext, 'error');
}

function alert_info(bigtext, smalltext) {

	swal({
		title: bigtext,
		type: 'info',
		html: smalltext,
		showCloseButton: true,
		showCancelButton: false,
		confirmButtonText: '<i class="ion-checkmark-round"></i> Ok!'
	});
}

function closeParent() {
	$(this).parent('hide');
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjgwZTQ4YjUwYjQ1M2ZiNTY0MGEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92YWRtaW4tZnVuY3Rpb25zLmpzIl0sIm5hbWVzIjpbIiQiLCJhamF4U2V0dXAiLCJoZWFkZXJzIiwiYXR0ciIsImRvY3VtZW50Iiwib24iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwic2VsZWN0ZWRSb3dzIiwiZWFjaCIsInB1c2giLCJ2YWwiLCJsZW5ndGgiLCJzaG93QnV0dG9ucyIsImNoZWNrYm94IiwicHJvcCIsInBhcmVudCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0cmlnZ2VyIiwiY291bnRTZWxlY3RlZCIsInNjcm9sbCIsInNjcm9sbEFtb3VudCIsIndpbmRvdyIsInNjcm9sbFRvcCIsImNzcyIsInVuY2hlY2tBbGwiLCJmaW5kIiwiZGVsZXRlUmVjb3JkIiwiaWQiLCJyb3V0ZSIsImJpZ3RleHQiLCJzbWFsbHRleHQiLCJzd2FsIiwidGl0bGUiLCJ0ZXh0IiwidHlwZSIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsImNvbmZpcm1CdXR0b25DbGFzcyIsImNhbmNlbEJ1dHRvbkNsYXNzIiwiYnV0dG9uc1N0eWxpbmciLCJ0aGVuIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiZGF0YSIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwiaGlkZSIsImkiLCJhbGVydF9vayIsImNvbnNvbGUiLCJsb2ciLCJhbGVydF9lcnJvciIsImVycm9yIiwiaHRtbCIsInJlc3BvbnNlVGV4dCIsImNvbXBsZXRlIiwiZGVsZXRlQW5kUmVsb2FkIiwibG9jYXRpb24iLCJyZWxvYWQiLCJkaXNjb3VudGludWVBcnRpY2xlIiwidmFsdWUiLCJhbGVydF9pbmZvIiwi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NUIsU0FITDtBQUlEcUMsbUJBQWlCLElBSmhCO0FBS0RoQyxvQkFBa0IsS0FMakI7QUFNREcscUJBQ0k7QUFQSCxFQUFMO0FBU0g7O0FBR0QsU0FBUzhCLFdBQVQsR0FBc0I7QUFDckJ0RSxHQUFFLElBQUYsRUFBUWdCLE1BQVIsQ0FBZSxNQUFmO0FBQ0EsQyIsImZpbGUiOiIvanMvdmFkbWluLWZ1bmN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3Nik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjgwZTQ4YjUwYjQ1M2ZiNTY0MGEiLCIkLmFqYXhTZXR1cCh7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcclxuICAgIH1cclxufSk7XHJcbiBcclxuLypcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnwgTElTVFNcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcblxyXG4vLyBTZXQgTGlzdCBBY3Rpb24gQnV0dG9uc1xyXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLkxpc3QtQ2hlY2tib3hcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdHZhciBzZWxlY3RlZFJvd3MgPSBbXTtcclxuICAgICQoXCIuTGlzdC1DaGVja2JveDpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24oKSB7ICAgICAgICAgIFxyXG4gICAgICAgIHNlbGVjdGVkUm93cy5wdXNoKCQodGhpcykuYXR0cignZGF0YS1pZCcpKTtcclxuXHRcdCQoJyNSb3dzVG9EZWxldGlvbicpLnZhbChzZWxlY3RlZFJvd3MpO1xyXG4gICAgfSk7XHJcbiAgICAgICBcclxuICAgIGlmKHNlbGVjdGVkUm93cy5sZW5ndGggPT0gMSl7XHJcblx0XHQkKCcjRWRpdElkLCAjQ3JlYXRlRnJvbUFub3RoZXJJZCcpLnZhbChzZWxlY3RlZFJvd3MpO1xyXG4gICAgfSBlbHNlIGlmKHNlbGVjdGVkUm93cy5sZW5ndGggPCAxKXtcclxuXHRcdCQoJyNFZGl0SWQsICNDcmVhdGVGcm9tQW5vdGhlcklkJykudmFsKCcnKTtcclxuICAgIH0gZWxzZSBpZihzZWxlY3RlZFJvd3MubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgJCgnI0VkaXRJZCwgI0NyZWF0ZUZyb21Bbm90aGVySWQnKS52YWwoJycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjRWRpdElkLCAjQ3JlYXRlRnJvbUFub3RoZXJJZCcpLnZhbCgnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0J1dHRvbnModGhpcyk7XHJcblxyXG5cdHZhciBjaGVja2JveCA9ICQodGhpcykucHJvcCgnY2hlY2tlZCcpO1xyXG5cdGlmKGNoZWNrYm94KXtcclxuXHRcdCQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuYWRkQ2xhc3MoJ3Jvdy1zZWxlY3RlZCcpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdyb3ctc2VsZWN0ZWQnKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2hvd0J1dHRvbnModHJpZ2dlcikge1xyXG5cdHZhciBjb3VudFNlbGVjdGVkID0gJCgnLkxpc3QtQ2hlY2tib3g6Y2hlY2tib3g6Y2hlY2tlZCcpLmxlbmd0aDtcclxuXHRpZihjb3VudFNlbGVjdGVkID09IDEpIHtcclxuXHRcdCQoJy5EZWxldGVCdG4nKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XHJcblx0XHQkKCcuRGlzY291bnRpbnVlQnRuJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0JCgnLkVkaXRCdG4nKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XHJcblx0XHQkKCcuQ3JlYXRlRnJvbUFub3RoZXJCdG4nKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XHJcblx0fSBlbHNlIGlmKGNvdW50U2VsZWN0ZWQgPj0gMikge1xyXG5cdFx0JCgnLkVkaXRCdG4nKS5hZGRDbGFzcygnSGlkZGVuJyk7XHJcblx0XHQkKCcuQ3JlYXRlRnJvbUFub3RoZXJCdG4nKS5hZGRDbGFzcygnSGlkZGVuJyk7XHJcbiAgICB9IGVsc2UgaWYoY291bnRTZWxlY3RlZCA9PSAwKSB7XHJcblx0XHQkKCcuRGVsZXRlQnRuJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0JCgnLkRpc2NvdW50aW51ZUJ0bicpLmFkZENsYXNzKCdIaWRkZW4nKTtcclxuXHRcdCQoJy5FZGl0QnRuJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0JCgnLkNyZWF0ZUZyb21Bbm90aGVyQnRuJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBTaG93IEVkaXQgYW5kIERlbGV0ZSBidXR0b25zIGluIGJvdHRvbSBpZiBzY3JvbGxlZCB0byBtdXRjaFxyXG4kKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oZSl7XHJcblx0dmFyIHNjcm9sbEFtb3VudCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHRpZihzY3JvbGxBbW91bnQgPiAxNTApe1xyXG5cdFx0JCgnLkRpc2NvdW50aW51ZUJ0bicpLmNzcyh7XCJwb3NpdGlvblwiOlwiZml4ZWRcIiwgXCJib3R0b21cIjpcIjUwcHhcIiwgXCJyaWdodFwiOlwiMTIwcHhcIiwgXCJ6LWluZGV4XCI6XCI5OTlcIn0pO1xyXG5cdFx0JCgnLkRlbGV0ZUJ0bicpLmNzcyh7XCJwb3NpdGlvblwiOlwiZml4ZWRcIiwgXCJib3R0b21cIjpcIjUwcHhcIiwgXCJyaWdodFwiOlwiMTBweFwiLCBcInotaW5kZXhcIjpcIjk5OVwifSk7XHJcblx0XHQkKCcuRWRpdEJ0bicpLmNzcyh7XCJwb3NpdGlvblwiOlwiZml4ZWRcIiwgXCJib3R0b21cIjpcIjUwcHhcIiwgXCJyaWdodFwiOlwiNDI1cHhcIiwgXCJ6LWluZGV4XCI6XCI5OTlcIn0pO1xyXG5cdFx0JCgnLkNyZWF0ZUZyb21Bbm90aGVyQnRuJykuY3NzKHtcInBvc2l0aW9uXCI6XCJmaXhlZFwiLCBcImJvdHRvbVwiOlwiNTBweFwiLCBcInJpZ2h0XCI6XCIyNjVweFwiLCBcInotaW5kZXhcIjpcIjk5OVwifSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJy5EaXNjb3VudGludWVCdG4nKS5jc3Moe1wicG9zaXRpb25cIjpcInJlbGF0aXZlXCIsIFwiYm90dG9tXCI6XCJhdXRvXCIsIFwicmlnaHRcIjpcImF1dG9cIiwgXCJ6LWluZGV4XCI6XCI5OTlcIn0pO1xyXG5cdFx0JCgnLkRlbGV0ZUJ0bicpLmNzcyh7XCJwb3NpdGlvblwiOlwicmVsYXRpdmVcIiwgXCJib3R0b21cIjpcImF1dG9cIiwgXCJyaWdodFwiOlwiYXV0b1wiLCBcInotaW5kZXhcIjpcIjk5OVwifSk7XHJcblx0XHQkKCcuRWRpdEJ0bicpLmNzcyh7XCJwb3NpdGlvblwiOlwicmVsYXRpdmVcIiwgXCJib3R0b21cIjpcImF1dG9cIiwgXCJyaWdodFwiOlwiYXV0b1wiLCBcInotaW5kZXhcIjpcIjk5OVwifSk7XHJcblx0XHQkKCcuQ3JlYXRlRnJvbUFub3RoZXJCdG4nKS5jc3Moe1wicG9zaXRpb25cIjpcInJlbGF0aXZlXCIsIFwiYm90dG9tXCI6XCJhdXRvXCIsIFwicmlnaHRcIjpcImF1dG9cIiwgXCJ6LWluZGV4XCI6XCI5OTlcIn0pO1xyXG5cdFx0XHJcblx0fVxyXG59KTtcclxuXHJcbi8vIFVuY2hlY2sgYWxsIGNoZWNrYm94ZXMgb24gcmVsb2FkLlxyXG5mdW5jdGlvbiB1bmNoZWNrQWxsKCl7XHJcblx0JCgnI1RhYmxlTGlzdCB0Ym9keSAuQ2hlY2tCb3hlcycpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHQkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHRcclxuXHR9KTtcdFxyXG59XHJcbnVuY2hlY2tBbGwoKTtcclxuXHJcbi8qXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG58IEZVTkNUSU9OU1xyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuXHJcbmRlbGV0ZVJlY29yZCA9IGZ1bmN0aW9uKGlkLCByb3V0ZSwgYmlndGV4dCwgc21hbGx0ZXh0KSB7XHJcblx0c3dhbCh7XHJcblx0XHR0aXRsZTogYmlndGV4dCxcclxuXHRcdHRleHQ6IHNtYWxsdGV4dCxcclxuXHRcdHR5cGU6ICd3YXJuaW5nJyxcclxuXHRcdHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcblx0XHRjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcclxuXHRcdGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXHJcblx0XHRjb25maXJtQnV0dG9uVGV4dDogJ0VMSU1JTkFSJyxcclxuXHRcdGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWxhcicsXHJcblx0XHRjb25maXJtQnV0dG9uQ2xhc3M6ICdidG4gYnRuR3JlZW4nLFxyXG5cdFx0Y2FuY2VsQnV0dG9uQ2xhc3M6ICdidG4gYnRuUmVkJyxcclxuXHRcdGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG5cdH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG5cclxuIFx0XHQkLmFqYXgoe1xyXG5cdFx0XHR1cmw6IHJvdXRlLFxyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJywgICAgICAgICAgICAgXHJcblx0XHRcdGRhdGFUeXBlOiAnSlNPTicsXHJcblx0XHRcdGRhdGE6IHsgaWQ6IGlkIH0sXHJcblx0XHRcdGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0Ly8gJCgnI01haW4tTG9hZGVyJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdFx0XHQkKCcjQmF0Y2hEZWxldGVCdG4nKS5hZGRDbGFzcygnSGlkZGVuJyk7XHJcblx0XHRcdFx0aWYgKGRhdGEuc3VjY2VzcyA9PSB0cnVlKSB7XHJcblx0XHRcdFx0XHQkKCcjSWQnK2lkKS5oaWRlKDIwMCk7XHJcblx0XHRcdFx0XHRmb3IoaT0wOyBpIDwgaWQubGVuZ3RoIDsgaSsrKXtcclxuXHRcdFx0XHRcdFx0JCgnI0lkJytpZFtpXSkuaGlkZSgyMDApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YWxlcnRfb2soJ09rIScsJ0VsaW1pbmFjacOzbiBjb21wbGV0YScpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0YWxlcnRfZXJyb3IoJ1VwcyEnLCdIYSBvY3VycmlkbyB1biBlcnJvciAoUHVlZGUgcXVlIGVzdGUgcmVnaXN0cm8gdGVuZ2EgcmVsYWNpw7NuIGNvbiBvdHJvcyBpdGVtcyBlbiBlbCBzaXN0ZW1hKS4gRGViZSBlbGltaW5hciBwcmltZXJvIGxvcyBtaXNtb3MuJyk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yOiBmdW5jdGlvbihkYXRhKVxyXG5cdFx0XHR7XHJcbiAgICAgICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb21wbGV0ZTogZnVuY3Rpb24oKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gJCgnI01haW4tTG9hZGVyJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcbn1cclxuXHJcbmRlbGV0ZUFuZFJlbG9hZCA9IGZ1bmN0aW9uKGlkLCByb3V0ZSwgYmlndGV4dCwgc21hbGx0ZXh0KSB7XHJcblx0c3dhbCh7XHJcblx0XHR0aXRsZTogYmlndGV4dCxcclxuXHRcdHRleHQ6IHNtYWxsdGV4dCxcclxuXHRcdHR5cGU6ICd3YXJuaW5nJyxcclxuXHRcdHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcblx0XHRjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcclxuXHRcdGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXHJcblx0XHRjb25maXJtQnV0dG9uVGV4dDogJ0VMSU1JTkFSJyxcclxuXHRcdGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWxhcicsXHJcblx0XHRjb25maXJtQnV0dG9uQ2xhc3M6ICdidG4gYnRuR3JlZW4nLFxyXG5cdFx0Y2FuY2VsQnV0dG9uQ2xhc3M6ICdidG4gYnRuUmVkJyxcclxuXHRcdGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG5cdH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dXJsOiByb3V0ZSxcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsICAgICAgICAgICAgIFxyXG5cdFx0XHRkYXRhVHlwZTogJ0pTT04nLFxyXG5cdFx0XHRkYXRhOiB7IGlkOiBpZCB9LFxyXG5cdFx0XHRiZWZvcmVTZW5kOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdC8vICQoJyNNYWluLUxvYWRlcicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRcdFx0JCgnI0JhdGNoRGVsZXRlQnRuJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0XHRcdGlmIChkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0Ly8gYWxlcnRfb2soJ09rIScsJ0VsaW1pbmFjacOzbiBjb21wbGV0YScpO1xyXG5cdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGFsZXJ0X2Vycm9yKCdVcHMhJywnSGEgb2N1cnJpZG8gdW4gZXJyb3IgKFB1ZWRlIHF1ZSBlc3RlIHJlZ2lzdHJvIHRlbmdhIHJlbGFjacOzbiBjb24gb3Ryb3MgaXRlbXMgZW4gZWwgc2lzdGVtYSkuIERlYmUgZWxpbWluYXIgcHJpbWVybyBsb3MgbWlzbW9zLicpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRlcnJvcjogZnVuY3Rpb24oZGF0YSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHRcdC8vICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1x0XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmRpc2NvdW50aW51ZUFydGljbGUgPSBmdW5jdGlvbihpZCwgcm91dGUsIHZhbHVlLCBiaWd0ZXh0LCBzbWFsbHRleHQpIHtcclxuXHRzd2FsKHtcclxuXHRcdHRpdGxlOiBiaWd0ZXh0LFxyXG5cdFx0dGV4dDogc21hbGx0ZXh0LFxyXG5cdFx0dHlwZTogJ3dhcm5pbmcnLFxyXG5cdFx0c2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuXHRcdGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxyXG5cdFx0Y2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcclxuXHRcdGNvbmZpcm1CdXR0b25UZXh0OiAnRGlzY29udGludWFyJyxcclxuXHRcdGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWxhcicsXHJcblx0XHRjb25maXJtQnV0dG9uQ2xhc3M6ICdidG4gYnRuR3JlZW4nLFxyXG5cdFx0Y2FuY2VsQnV0dG9uQ2xhc3M6ICdidG4gYnRuUmVkJyxcclxuXHRcdGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG5cdH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dXJsOiByb3V0ZSxcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsICAgICAgICAgICAgIFxyXG5cdFx0XHRkYXRhVHlwZTogJ0pTT04nLFxyXG5cdFx0XHRkYXRhOiB7IGlkOiBpZCwgdmFsdWU6IHZhbHVlIH0sXHJcblx0XHRcdGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0Ly8gJCgnI01haW4tTG9hZGVyJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdFx0XHQkKCcjQmF0Y2hEZWxldGVCdG4nKS5hZGRDbGFzcygnSGlkZGVuJyk7XHJcblx0XHRcdFx0aWYgKGRhdGEuc3VjY2VzcyA9PSB0cnVlKSB7XHJcblx0XHRcdFx0XHQvLyBhbGVydF9vaygnT2shJywnRWxpbWluYWNpw7NuIGNvbXBsZXRhJyk7XHJcblx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0YWxlcnRfZXJyb3IoJ1VwcyEnLCdIYSBvY3VycmlkbyB1biBlcnJvciAoUHVlZGUgcXVlIGVzdGUgcmVnaXN0cm8gdGVuZ2EgcmVsYWNpw7NuIGNvbiBvdHJvcyBpdGVtcyBlbiBlbCBzaXN0ZW1hKS4gRGViZSBlbGltaW5hciBwcmltZXJvIGxvcyBtaXNtb3MuJyk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yOiBmdW5jdGlvbihkYXRhKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0JCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHRcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG59XHJcblxyXG4vKlxyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxufCBBTEVSVFNcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcblxyXG5mdW5jdGlvbiBhbGVydF9vayhiaWd0ZXh0LCBzbWFsbHRleHQpe1xyXG4gICAgc3dhbChcclxuICAgICAgICBiaWd0ZXh0LFxyXG4gICAgICAgIHNtYWxsdGV4dCxcclxuICAgICAgICAnc3VjY2VzcydcclxuICAgICk7ICAgIFxyXG59XHJcbiAgICBcclxuZnVuY3Rpb24gYWxlcnRfZXJyb3IoYmlndGV4dCwgc21hbGx0ZXh0KXtcclxuICAgIHN3YWwoXHJcbiAgICAgICAgYmlndGV4dCxcclxuICAgICAgICBzbWFsbHRleHQsXHJcbiAgICAgICAgJ2Vycm9yJ1xyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWxlcnRfaW5mbyhiaWd0ZXh0LCBzbWFsbHRleHQpe1xyXG5cclxuICAgIHN3YWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogYmlndGV4dCxcclxuICAgICAgICB0eXBlOiAnaW5mbycsXHJcbiAgICAgICAgaHRtbDogc21hbGx0ZXh0LFxyXG4gICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDpcclxuICAgICAgICAgICAgJzxpIGNsYXNzPVwiaW9uLWNoZWNrbWFyay1yb3VuZFwiPjwvaT4gT2shJ1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2xvc2VQYXJlbnQoKXtcclxuXHQkKHRoaXMpLnBhcmVudCgnaGlkZScpO1xyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZhZG1pbi1mdW5jdGlvbnMuanMiXSwic291cmNlUm9vdCI6IiJ9