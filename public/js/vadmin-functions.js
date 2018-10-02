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
		$('#EditId').val(selectedRows);
	} else if (selectedRows.length < 1) {
		$('#EditId').val('');
	} else if (selectedRows.length > 1) {
		$('#EditId').val('');
	} else {
		$('#EditId').val('');
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
		$('.EditBtn').removeClass('Hidden');
	} else if (countSelected >= 2) {
		$('.EditBtn').addClass('Hidden');
	} else if (countSelected == 0) {
		$('.DeleteBtn').addClass('Hidden');
		$('.EditBtn').addClass('Hidden');
	}
}

// Show Edit and Delete buttons in bottom if scrolled to mutch
$(document).scroll(function (e) {
	var scrollAmount = $(window).scrollTop();
	if (scrollAmount > 150) {
		$('.DeleteBtn').css({ "position": "fixed", "bottom": "50px", "right": "10px", "z-index": "999" });
		$('.EditBtn').css({ "position": "fixed", "bottom": "50px", "right": "130px", "z-index": "999" });
	} else {
		$('.DeleteBtn').css({ "position": "relative", "bottom": "auto", "right": "auto", "z-index": "999" });
		$('.EditBtn').css({ "position": "relative", "bottom": "auto", "right": "auto", "z-index": "999" });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWYxZGFmZDRmNTViZDE4YTEzYmEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92YWRtaW4tZnVuY3Rpb25zLmpzIl0sIm5hbWVzIjpbIiQiLCJhamF4U2V0dXAiLCJoZWFkZXJzIiwiYXR0ciIsImRvY3VtZW50Iiwib24iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwic2VsZWN0ZWRSb3dzIiwiZWFjaCIsInB1c2giLCJ2YWwiLCJsZW5ndGgiLCJzaG93QnV0dG9ucyIsImNoZWNrYm94IiwicHJvcCIsInBhcmVudCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0cmlnZ2VyIiwiY291bnRTZWxlY3RlZCIsInNjcm9sbCIsInNjcm9sbEFtb3VudCIsIndpbmRvdyIsInNjcm9sbFRvcCIsImNzcyIsInVuY2hlY2tBbGwiLCJmaW5kIiwiZGVsZXRlUmVjb3JkIiwiaWQiLCJyb3V0ZSIsImJpZ3RleHQiLCJzbWFsbHRleHQiLCJzd2FsIiwidGl0bGUiLCJ0ZXh0IiwidHlwZSIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsImNvbmZpcm1CdXR0b25DbGFzcyIsImNhbmNlbEJ1dHRvbkNsYXNzIiwiYnV0dG9uc1N0eWxpbmciLCJ0aGVuIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiZGF0YSIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwiaGlkZSIsImkiLCJhbGVydF9vayIsImNvbnNvbGUiLCJsb2ciLCJhbGVydF9lcnJvciIsImVycm9yIiwiaHRtbCIsInJlc3BvbnNlVGV4dCIsImNvbXBsZXRlIiwiZGVsZXRlQW5kUmVsb2FkIiwibG9jYXRpb24iLCJyZWxvYWQiLCJhbGVydF9pbmZvIiwic2hvd0Nsb3NlQnV0dG9uIiwiY2xvc2VQYXJlbnQi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M0IsRUFBcUM7QUFDakNDLE1BQ0lGLE9BREosRUFFSUMsU0FGSixFQUdJLFNBSEo7QUFLSDs7QUFFRCxTQUFTMEIsV0FBVCxDQUFxQjNCLE9BQXJCLEVBQThCQyxTQUE5QixFQUF3QztBQUNwQ0MsTUFDSUYsT0FESixFQUVJQyxTQUZKLEVBR0ksT0FISjtBQUtIOztBQUVELFNBQVNrQyxVQUFULENBQW9CbkMsT0FBcEIsRUFBNkJDLFNBQTdCLEVBQXVDOztBQUVuQ0MsTUFBSztBQUNHQyxTQUFPSCxPQURWO0FBRURLLFFBQU0sTUFGTDtBQUdEd0IsUUFBTTVCLFNBSEw7QUFJRG1DLG1CQUFpQixJQUpoQjtBQUtEOUIsb0JBQWtCLEtBTGpCO0FBTURHLHFCQUNJO0FBUEgsRUFBTDtBQVNIOztBQUdELFNBQVM0QixXQUFULEdBQXNCO0FBQ3JCcEUsR0FBRSxJQUFGLEVBQVFnQixNQUFSLENBQWUsTUFBZjtBQUNBLEMiLCJmaWxlIjoiL2pzL3ZhZG1pbi1mdW5jdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVmMWRhZmQ0ZjU1YmQxOGExM2JhIiwiJC5hamF4U2V0dXAoe1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXHJcbiAgICB9XHJcbn0pO1xyXG4gXHJcbi8qXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG58IExJU1RTXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG5cclxuLy8gU2V0IExpc3QgQWN0aW9uIEJ1dHRvbnNcclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5MaXN0LUNoZWNrYm94XCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0dmFyIHNlbGVjdGVkUm93cyA9IFtdO1xyXG4gICAgJChcIi5MaXN0LUNoZWNrYm94OmNoZWNrZWRcIikuZWFjaChmdW5jdGlvbigpIHsgICAgICAgICAgXHJcbiAgICAgICAgc2VsZWN0ZWRSb3dzLnB1c2goJCh0aGlzKS5hdHRyKCdkYXRhLWlkJykpO1xyXG5cdFx0JCgnI1Jvd3NUb0RlbGV0aW9uJykudmFsKHNlbGVjdGVkUm93cyk7XHJcbiAgICB9KTtcclxuICAgICAgIFxyXG4gICAgaWYoc2VsZWN0ZWRSb3dzLmxlbmd0aCA9PSAxKXtcclxuICAgICAgICAkKCcjRWRpdElkJykudmFsKHNlbGVjdGVkUm93cyk7XHJcbiAgICB9IGVsc2UgaWYoc2VsZWN0ZWRSb3dzLmxlbmd0aCA8IDEpe1xyXG4gICAgICAgICQoJyNFZGl0SWQnKS52YWwoJycpO1xyXG4gICAgfSBlbHNlIGlmKHNlbGVjdGVkUm93cy5sZW5ndGggPiAxKXtcclxuICAgICAgICAkKCcjRWRpdElkJykudmFsKCcnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI0VkaXRJZCcpLnZhbCgnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0J1dHRvbnModGhpcyk7XHJcblxyXG5cdHZhciBjaGVja2JveCA9ICQodGhpcykucHJvcCgnY2hlY2tlZCcpO1xyXG5cdGlmKGNoZWNrYm94KXtcclxuXHRcdCQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuYWRkQ2xhc3MoJ3Jvdy1zZWxlY3RlZCcpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdyb3ctc2VsZWN0ZWQnKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dCdXR0b25zKHRyaWdnZXIpIHtcclxuXHRcclxuXHR2YXIgY291bnRTZWxlY3RlZCA9ICQoJy5MaXN0LUNoZWNrYm94OmNoZWNrYm94OmNoZWNrZWQnKS5sZW5ndGg7XHJcblx0aWYoY291bnRTZWxlY3RlZCA9PSAxKSB7XHJcbiAgICAgICAgJCgnLkRlbGV0ZUJ0bicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcclxuXHRcdCQoJy5FZGl0QnRuJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0XHJcblx0fSBlbHNlIGlmKGNvdW50U2VsZWN0ZWQgPj0gMikge1xyXG4gICAgICAgICQoJy5FZGl0QnRuJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG4gICAgfSBlbHNlIGlmKGNvdW50U2VsZWN0ZWQgPT0gMCkge1xyXG4gICAgICAgICQoJy5EZWxldGVCdG4nKS5hZGRDbGFzcygnSGlkZGVuJyk7XHJcbiAgICAgICAgJCgnLkVkaXRCdG4nKS5hZGRDbGFzcygnSGlkZGVuJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFNob3cgRWRpdCBhbmQgRGVsZXRlIGJ1dHRvbnMgaW4gYm90dG9tIGlmIHNjcm9sbGVkIHRvIG11dGNoXHJcbiQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbihlKXtcclxuXHR2YXIgc2Nyb2xsQW1vdW50ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cdGlmKHNjcm9sbEFtb3VudCA+IDE1MCl7XHJcblx0XHQkKCcuRGVsZXRlQnRuJykuY3NzKHtcInBvc2l0aW9uXCI6XCJmaXhlZFwiLCBcImJvdHRvbVwiOlwiNTBweFwiLCBcInJpZ2h0XCI6XCIxMHB4XCIsIFwiei1pbmRleFwiOlwiOTk5XCJ9KTtcclxuXHRcdCQoJy5FZGl0QnRuJykuY3NzKHtcInBvc2l0aW9uXCI6XCJmaXhlZFwiLCBcImJvdHRvbVwiOlwiNTBweFwiLCBcInJpZ2h0XCI6XCIxMzBweFwiLCBcInotaW5kZXhcIjpcIjk5OVwifSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJy5EZWxldGVCdG4nKS5jc3Moe1wicG9zaXRpb25cIjpcInJlbGF0aXZlXCIsIFwiYm90dG9tXCI6XCJhdXRvXCIsIFwicmlnaHRcIjpcImF1dG9cIiwgXCJ6LWluZGV4XCI6XCI5OTlcIn0pO1xyXG5cdFx0JCgnLkVkaXRCdG4nKS5jc3Moe1wicG9zaXRpb25cIjpcInJlbGF0aXZlXCIsIFwiYm90dG9tXCI6XCJhdXRvXCIsIFwicmlnaHRcIjpcImF1dG9cIiwgXCJ6LWluZGV4XCI6XCI5OTlcIn0pO1xyXG5cdH1cclxufSk7XHJcblxyXG4vLyBVbmNoZWNrIGFsbCBjaGVja2JveGVzIG9uIHJlbG9hZC5cclxuZnVuY3Rpb24gdW5jaGVja0FsbCgpe1xyXG5cdCQoJyNUYWJsZUxpc3QgdGJvZHkgLkNoZWNrQm94ZXMnKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1x0XHJcblx0fSk7XHRcclxufVxyXG51bmNoZWNrQWxsKCk7XHJcblxyXG4vKlxyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxufCBGVU5DVElPTlNcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcblxyXG5kZWxldGVSZWNvcmQgPSBmdW5jdGlvbihpZCwgcm91dGUsIGJpZ3RleHQsIHNtYWxsdGV4dCkge1xyXG5cdHN3YWwoe1xyXG5cdFx0dGl0bGU6IGJpZ3RleHQsXHJcblx0XHR0ZXh0OiBzbWFsbHRleHQsXHJcblx0XHR0eXBlOiAnd2FybmluZycsXHJcblx0XHRzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG5cdFx0Y29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXHJcblx0XHRjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxyXG5cdFx0Y29uZmlybUJ1dHRvblRleHQ6ICdFTElNSU5BUicsXHJcblx0XHRjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsYXInLFxyXG5cdFx0Y29uZmlybUJ1dHRvbkNsYXNzOiAnYnRuIGJ0bkdyZWVuJyxcclxuXHRcdGNhbmNlbEJ1dHRvbkNsYXNzOiAnYnRuIGJ0blJlZCcsXHJcblx0XHRidXR0b25zU3R5bGluZzogZmFsc2VcclxuXHR9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiBcdFx0JC5hamF4KHtcclxuXHRcdFx0dXJsOiByb3V0ZSxcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsICAgICAgICAgICAgIFxyXG5cdFx0XHRkYXRhVHlwZTogJ0pTT04nLFxyXG5cdFx0XHRkYXRhOiB7IGlkOiBpZCB9LFxyXG5cdFx0XHRiZWZvcmVTZW5kOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdC8vICQoJyNNYWluLUxvYWRlcicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRcdFx0JCgnI0JhdGNoRGVsZXRlQnRuJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0XHRcdGlmIChkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0JCgnI0lkJytpZCkuaGlkZSgyMDApO1xyXG5cdFx0XHRcdFx0Zm9yKGk9MDsgaSA8IGlkLmxlbmd0aCA7IGkrKyl7XHJcblx0XHRcdFx0XHRcdCQoJyNJZCcraWRbaV0pLmhpZGUoMjAwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGFsZXJ0X29rKCdPayEnLCdFbGltaW5hY2nDs24gY29tcGxldGEnKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGFsZXJ0X2Vycm9yKCdVcHMhJywnSGEgb2N1cnJpZG8gdW4gZXJyb3IgKFB1ZWRlIHF1ZSBlc3RlIHJlZ2lzdHJvIHRlbmdhIHJlbGFjacOzbiBjb24gb3Ryb3MgaXRlbXMgZW4gZWwgc2lzdGVtYSkuIERlYmUgZWxpbWluYXIgcHJpbWVybyBsb3MgbWlzbW9zLicpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRlcnJvcjogZnVuY3Rpb24oZGF0YSlcclxuXHRcdFx0e1xyXG4gICAgICAgICAgICAgICAgJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29tcGxldGU6IGZ1bmN0aW9uKClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vICQoJyNNYWluLUxvYWRlcicpLmFkZENsYXNzKCdIaWRkZW4nKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG59XHJcblxyXG5kZWxldGVBbmRSZWxvYWQgPSBmdW5jdGlvbihpZCwgcm91dGUsIGJpZ3RleHQsIHNtYWxsdGV4dCkge1xyXG5cdHN3YWwoe1xyXG5cdFx0dGl0bGU6IGJpZ3RleHQsXHJcblx0XHR0ZXh0OiBzbWFsbHRleHQsXHJcblx0XHR0eXBlOiAnd2FybmluZycsXHJcblx0XHRzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG5cdFx0Y29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXHJcblx0XHRjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxyXG5cdFx0Y29uZmlybUJ1dHRvblRleHQ6ICdFTElNSU5BUicsXHJcblx0XHRjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsYXInLFxyXG5cdFx0Y29uZmlybUJ1dHRvbkNsYXNzOiAnYnRuIGJ0bkdyZWVuJyxcclxuXHRcdGNhbmNlbEJ1dHRvbkNsYXNzOiAnYnRuIGJ0blJlZCcsXHJcblx0XHRidXR0b25zU3R5bGluZzogZmFsc2VcclxuXHR9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHVybDogcm91dGUsXHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLCAgICAgICAgICAgICBcclxuXHRcdFx0ZGF0YVR5cGU6ICdKU09OJyxcclxuXHRcdFx0ZGF0YTogeyBpZDogaWQgfSxcclxuXHRcdFx0YmVmb3JlU2VuZDogZnVuY3Rpb24oKXtcclxuXHRcdFx0XHQvLyAkKCcjTWFpbi1Mb2FkZXInKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0XHRcdCQoJyNCYXRjaERlbGV0ZUJ0bicpLmFkZENsYXNzKCdIaWRkZW4nKTtcclxuXHRcdFx0XHRpZiAoZGF0YS5zdWNjZXNzID09IHRydWUpIHtcclxuXHRcdFx0XHRcdC8vIGFsZXJ0X29rKCdPayEnLCdFbGltaW5hY2nDs24gY29tcGxldGEnKTtcclxuXHRcdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRhbGVydF9lcnJvcignVXBzIScsJ0hhIG9jdXJyaWRvIHVuIGVycm9yIChQdWVkZSBxdWUgZXN0ZSByZWdpc3RybyB0ZW5nYSByZWxhY2nDs24gY29uIG90cm9zIGl0ZW1zIGVuIGVsIHNpc3RlbWEpLiBEZWJlIGVsaW1pbmFyIHByaW1lcm8gbG9zIG1pc21vcy4nKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKGRhdGEpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcdFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcbn1cclxuXHJcbi8qXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG58IEFMRVJUU1xyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuXHJcbmZ1bmN0aW9uIGFsZXJ0X29rKGJpZ3RleHQsIHNtYWxsdGV4dCl7XHJcbiAgICBzd2FsKFxyXG4gICAgICAgIGJpZ3RleHQsXHJcbiAgICAgICAgc21hbGx0ZXh0LFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgKTsgICAgXHJcbn1cclxuICAgIFxyXG5mdW5jdGlvbiBhbGVydF9lcnJvcihiaWd0ZXh0LCBzbWFsbHRleHQpe1xyXG4gICAgc3dhbChcclxuICAgICAgICBiaWd0ZXh0LFxyXG4gICAgICAgIHNtYWxsdGV4dCxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbGVydF9pbmZvKGJpZ3RleHQsIHNtYWxsdGV4dCl7XHJcblxyXG4gICAgc3dhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBiaWd0ZXh0LFxyXG4gICAgICAgIHR5cGU6ICdpbmZvJyxcclxuICAgICAgICBodG1sOiBzbWFsbHRleHQsXHJcbiAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OlxyXG4gICAgICAgICAgICAnPGkgY2xhc3M9XCJpb24tY2hlY2ttYXJrLXJvdW5kXCI+PC9pPiBPayEnXHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjbG9zZVBhcmVudCgpe1xyXG5cdCQodGhpcykucGFyZW50KCdoaWRlJyk7XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdmFkbWluLWZ1bmN0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=