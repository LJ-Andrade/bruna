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
/******/ 	return __webpack_require__(__webpack_require__.s = 78);
/******/ })
/************************************************************************/
/******/ ({

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(79);


/***/ }),

/***/ 79:
/***/ (function(module, exports) {

// ------------ Tags ------------ //
$('.Select-Tags').chosen({
    placeholder_text_multiple: 'Seleccione las etiquetas',
    // max_selected_options: 3,
    search_contains: true,
    no_results_text: 'No se ha encontrado la etiqueta'
});

$('.Select-Atribute').chosen({
    placeholder_text_multiple: 'Seleccionar',
    // max_selected_options: 3,
    search_contains: true,
    no_results_text: 'No se ha encontrado'
});

$('.Select-Category').chosen({
    placeholder_text_single: 'Seleccione una categoría'
});

$('.Select-Chosen').chosen({
    placeholder_text_single: 'Seleccione una categoría'
});

// --------- Slug sanitizer -------- //
$(".SlugInput").keyup(function () {
    var Text = $(this).val();
    Text = Text.toLowerCase();
    var regExp = /\s+/g;
    Text = Text.replace(/[&\/\\#,¡!´#+()$~%.'":*?<>{}]/g, '');
    Text = Text.replace(regExp, '-');
    Text = Text.replace('ñ', 'n');
    Text = Text.replace('á', 'a');
    Text = Text.replace('é', 'e');
    Text = Text.replace('í', 'i');
    Text = Text.replace('ó', 'o');
    Text = Text.replace('ú', 'u');

    $(".SlugInput").val(Text);
});

// --------- Slug AutoFillnput from title --------- //
$("#TitleInput").keyup(function (event) {
    var stt = $(this).val();
    var Text = $(this).val();
    Text = Text.toLowerCase();
    var regExp = /\s+/g;
    Text = Text.replace(/[&\/\\#,¡!´#+()$~%.'":*?<>{}]/g, '');
    Text = Text.replace(regExp, '-');
    Text = Text.replace('ñ', 'n');
    Text = Text.replace('á', 'a');
    Text = Text.replace('é', 'e');
    Text = Text.replace('í', 'i');
    Text = Text.replace('ó', 'o');
    Text = Text.replace('ú', 'u');
    $(".SlugInput").val(Text);
});

// $(document).ready(function() {
// 	$('#Multi_Images').filer({
// 		// limit: 3,
// 		maxSize: 3,
// 		extensions: ['jpg', 'jpeg', 'png', 'gif'],
// 		changeInput: true,
// 		showThumbs: true,
// 		addMore: true
// 	});
// });

//////////////////////////////
// 							//
//      CREATE FORM         //
//                          //
//////////////////////////////

// Show Notes Text Area
$('.ShowNotesTextArea').click(function () {
    var notes = $('.NotesTextArea');
    if (notes.hasClass('Hidden')) {
        notes.removeClass('Hidden');
    } else {
        notes.addClass('Hidden');
    }
});

// Add Another Address
$('.AddAnotherAddressBtn').click(function () {
    var addressInput = "<input class='form-control' placeholder='Ingrese otro teléfono' name='deliveryaddress[]' type='text' style='margin-top:5px'>";
    var locInput = "<input class='form-control' placeholder='Ingrese otro teléfono' name='deliveryaddress[]' type='text' style='margin-top:5px'>";

    $('.AnotherAddress').append(addressInput);
    $('.AnotherLoc').append(locInput);
});

//////////////////////////////
// 							//
//   EDITORS AND FIELDS     //
//                          //
//////////////////////////////

// $('#Multi_Images').fileuploader({
//     extensions: ['jpg', 'jpeg', 'png', 'gif'],
//     limit: null,
//     addMore: true,
//     // Peso máximo de todas las imágenes
//     maxSize: 5,
//     // Peso máximo por imágen
//     fileMaxSize: 2,
//     theme: 'thumbnails',
//     enableApi: true,
//     captions: {
//         button: function(options) { return 'Seleccionar ' + (options.limit == 1 ? 'Imágenes' : 'Imágen'); },
//         feedback: function(options) { return 'Haga click para agregar...'; },
//         feedback2: function(options) { return options.length + ' ' + (options.length > 1 ? ' imágenes seleccionadas' : ' imágen seleccionada'); },
//         drop: 'Arrastre las imágenes aquí',
//         paste: '<div class="fileuploader-pending-loader"><div class="left-half" style="animation-duration: ${ms}s"></div><div class="spinner" style="animation-duration: ${ms}s"></div><div class="right-half" style="animation-duration: ${ms}s"></div></div> Pasting a file, click here to cancel.',
//         removeConfirmation: 'Eliminar?',
//         errors: {
//             filesLimit: 'Solo es posible subir ${limit} imágen.',
//             filesType: 'Solo se aceptan los formatos: ${extensions}.',
//             fileSize: '${name} es muy grandes! Seleccione una de ${fileMaxSize}MB. como máximo',
//             filesSizeAll: '${name} son muy grandes! Seleccione unas de ${fileMaxSize}MB. como máximo',
//             fileName: 'La imágen con el nombre ${name} ya está seleccionada.',
//             folderUpload: 'No está permitido subir carpetas.'
//         },
//         dialogs: {
//             // alert dialog
//             alert: function(text) {
//                 return alert_confirm(text);
//             },
//             // confirm dialog
//             confirm: function(text, callback) {
//                 'confirm(text) ? callback() : null;'
//             }
//         },
//     }
// });

$('#Single_Image').fileuploader({
    extensions: ['jpg', 'jpeg', 'png', 'gif'],
    limit: 1,
    addMore: false,
    fileMaxSize: 2,
    captions: {
        button: function button(options) {
            return 'Seleccionar ' + (options.limit == 1 ? 'Imágen' : 'Imágen');
        },
        feedback: function feedback(options) {
            return 'Agregar imágenes...';
        },
        feedback2: function feedback2(options) {
            return options.length + ' ' + (options.length > 1 ? ' imágenes seleccionadas' : ' imágen seleccionada');
        },
        drop: 'Arrastre las imágenes aquí',
        paste: '<div class="fileuploader-pending-loader"><div class="left-half" style="animation-duration: ${ms}s"></div><div class="spinner" style="animation-duration: ${ms}s"></div><div class="right-half" style="animation-duration: ${ms}s"></div></div> Pasting a file, click here to cancel.',
        removeConfirmation: 'Eliminar?',
        errors: {
            filesLimit: 'Solo es posible subir ${limit} imágen.',
            filesType: 'Solo se aceptan los formatos: ${extensions}.',
            fileSize: 'La imágen pesa mucho! Elija una de ${fileMaxSize}MB como máximo.',
            fileName: 'La imágen con ese nombre ya ha sido elegida',
            folderUpload: 'No está permitido subir carpetas.'
        },
        dialogs: {
            // alert dialog
            alert: function (_alert) {
                function alert(_x) {
                    return _alert.apply(this, arguments);
                }

                alert.toString = function () {
                    return _alert.toString();
                };

                return alert;
            }(function (text) {
                return alert(text);
            }),
            // confirm dialog
            confirm: function confirm(text, callback) {
                'confirm(text) ? callback() : null;';
            }
        }
    }
});

$('#Multi_Images').fileuploader({
    extensions: ['jpg', 'jpeg', 'png', 'gif', 'bmp'],
    changeInput: ' ',
    theme: 'thumbnails',
    enableApi: true,
    addMore: true,
    thumbnails: {
        box: '<div class="fileuploader-items">' + '<ul class="fileuploader-items-list">' + '<li class="fileuploader-thumbnails-input"><div class="fileuploader-thumbnails-input-inner">+</div></li>' + '</ul>' + '</div>',
        item: '<li class="fileuploader-item">' + '<div class="fileuploader-item-inner">' + '<div class="thumbnail-holder">${image}</div>' + '<div class="actions-holder">' + '<a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i class="remove"></i></a>' + '<span class="fileuploader-action-popup"></span>' + '</div>' + '<div class="progress-holder">${progressBar}</div>' + '</div>' + '</li>',
        item2: '<li class="fileuploader-item">' + '<div class="fileuploader-item-inner">' + '<div class="thumbnail-holder">${image}</div>' + '<div class="actions-holder">' + '<a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i class="remove"></i></a>' + '<span class="fileuploader-action-popup"></span>' + '</div>' + '</div>' + '</li>',
        startImageRenderer: true,
        canvasImage: false,
        _selectors: {
            list: '.fileuploader-items-list',
            item: '.fileuploader-item',
            start: '.fileuploader-action-start',
            retry: '.fileuploader-action-retry',
            remove: '.fileuploader-action-remove'
        },
        onItemShow: function onItemShow(item, listEl, parentEl, newInputEl, inputEl) {
            var plusInput = listEl.find('.fileuploader-thumbnails-input'),
                api = $.fileuploader.getInstance(inputEl.get(0));

            plusInput.insertAfter(item.html)[api.getOptions().limit && api.getChoosedFiles().length >= api.getOptions().limit ? 'hide' : 'show']();

            if (item.format == 'image') {
                item.html.find('.fileuploader-item-icon').hide();
            }
        }
    },
    afterRender: function afterRender(listEl, parentEl, newInputEl, inputEl) {
        var plusInput = listEl.find('.fileuploader-thumbnails-input'),
            api = $.fileuploader.getInstance(inputEl.get(0));

        plusInput.on('click', function () {
            api.open();
        });
    },
    onRemove: function onRemove(item, listEl, parentEl, newInputEl, inputEl) {
        var plusInput = listEl.find('.fileuploader-thumbnails-input'),
            api = $.fileuploader.getInstance(inputEl.get(0));

        if (api.getOptions().limit && api.getChoosedFiles().length - 1 < api.getOptions().limit) plusInput.show();
    }
    /*
    // while using upload option, please set
    // startImageRenderer: false
    // for a better effect
    upload: {
        url: './php/upload_file.php',
        data: null,
        type: 'POST',
        enctype: 'multipart/form-data',
        start: true,
        synchron: true,
        beforeSend: null,
        onSuccess: function(data, item) {
            setTimeout(function() {
                item.html.find('.progress-holder').hide();
                item.renderThumbnail();
            }, 400);
        },
        onError: function(item) {
            item.html.find('.progress-holder').hide();
            item.html.find('.fileuploader-item-icon i').text('Failed!');
        },
        onProgress: function(data, item) {
            var progressBar = item.html.find('.progress-holder');
            
            if(progressBar.length > 0) {
                progressBar.show();
                progressBar.find('.fileuploader-progressbar .bar').width(data.percentage + "%");
            }
        }
    },
    dragDrop: {
        container: '.fileuploader-thumbnails-input'
    },
    onRemove: function(item) {
        $.post('php/upload_remove.php', {
            file: item.name
        });
    },
    */
});

$('.Display-Input-Modificable').click(function () {
    $(this).removeClass('display-input-disabled');
});

// ---- Modificable input text
// Html element
//<p data-editable class="SlugInput">{{ $article->slug }}</p>   

$('body').on('click', '[data-editable]', function () {

    var $el = $(this);

    var $input = $('<input/>').val($el.text());
    $el.replaceWith($input);

    var save = function save() {
        var $p = $('<p data-editable />').text($input.val());
        $input.replaceWith($p);
    };

    /**
      We're defining the callback with `one`, because we know that
      the element will be gone just after that, and we don't want 
      any callbacks leftovers take memory. 
      Next time `p` turns into `input` this single callback 
      will be applied again.
    */
    $input.one('blur', save).focus();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODZlYWE1MTU5NGEyNGIzMjdhYzciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92YWRtaW4tZm9ybXMuanMiXSwibmFtZXMiOlsiJCIsImNob3NlbiIsInBsYWNlaG9sZGVyX3RleHRfbXVsdGlwbGUiLCJzZWFyY2hfY29udGFpbnMiLCJub19yZXN1bHRzX3RleHQiLCJwbGFjZWhvbGRlcl90ZXh0X3NpbmdsZSIsImtleXVwIiwiVGV4dCIsInZhbCIsInRvTG93ZXJDYXNlIiwicmVnRXhwIiwicmVwbGFjZSIsImV2ZW50Iiwic3R0IiwiY2xpY2siLCJub3RlcyIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImFkZHJlc3NJbnB1dCIsImxvY0lucHV0IiwiYXBwZW5kIiwiZmlsZXVwbG9hZGVyIiwiZXh0ZW5zaW9ucyIsImxpbWl0IiwiYWRkTW9yZSIsImZpbGVNYXhTaXplIiwiY2FwdGlvbnMiLCJidXR0b24iLCJvcHRpb25zIiwiZmVlZGJhY2siLCJmZWVkYmFjazIiLCJsZW5ndGgiLCJkcm9wIiwicGFzdGUiLCJyZW1vdmVDb25maXJtYXRpb24iLCJlcnJvcnMiLCJmaWxlc0xpbWl0IiwiZmlsZXNUeXBlIiwiZmlsZVNpemUiLCJmaWxlTmFtZSIsImZvbGRlclVwbG9hZCIsImRpYWxvZ3MiLCJhbGVydCIsInRleHQiLCJjb25maXJtIiwiY2FsbGJhY2siLCJjaGFuZ2VJbnB1dCIsInRoZW1lIiwiZW5hYmxlQXBpIiwidGh1bWJuYWlscyIsImJveCIsIml0ZW0iLCJpdGVtMiIsInN0YXJ0SW1hZ2VSZW5kZXJlciIsImNhbnZhc0ltYWdlIiwiX3NlbGVjdG9ycyIsImxpc3QiLCJzdGFydCIsInJldHJ5IiwicmVtb3ZlIiwib25JdGVtU2hvdyIsImxpc3RFbCIsInBhcmVudEVsIiwibmV3SW5wdXRFbCIsImlucHV0RWwiLCJwbHVzSW5wdXQiLCJmaW5kIiwiYXBpIiwiZ2V0SW5zdGFuY2UiLCJnZXQiLCJpbnNlcnRBZnRlciIsImh0bWwiLCJnZXRPcHRpb25zIiwiZ2V0Q2hvb3NlZEZpbGVzIiwiZm9ybWF0IiwiaGlkZSIsImFmdGVyUmVuZGVyIiwib24iLCJvcGVuIiwib25SZW1vdmUiLCJzaG93IiwiJGVsIiwiJGlucHV0IiwicmVwbGFjZVdpdGgiLCJzYXZlIiwiJHAiLCJvbmUiLCJmb2N1cyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0FBLEVBQUUsY0FBRixFQUFrQkMsTUFBbEIsQ0FBeUI7QUFDckJDLCtCQUEyQiwwQkFETjtBQUVyQjtBQUNBQyxxQkFBaUIsSUFISTtBQUlyQkMscUJBQWlCO0FBSkksQ0FBekI7O0FBT0FKLEVBQUUsa0JBQUYsRUFBc0JDLE1BQXRCLENBQTZCO0FBQ3pCQywrQkFBMkIsYUFERjtBQUV6QjtBQUNBQyxxQkFBaUIsSUFIUTtBQUl6QkMscUJBQWlCO0FBSlEsQ0FBN0I7O0FBT0FKLEVBQUUsa0JBQUYsRUFBc0JDLE1BQXRCLENBQTZCO0FBQ3pCSSw2QkFBeUI7QUFEQSxDQUE3Qjs7QUFJQUwsRUFBRSxnQkFBRixFQUFvQkMsTUFBcEIsQ0FBMkI7QUFDdkJJLDZCQUF5QjtBQURGLENBQTNCOztBQUlBO0FBQ0FMLEVBQUUsWUFBRixFQUFnQk0sS0FBaEIs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWxFNEIsQ0FBaEM7O0FBNkdBakYsRUFBRSw0QkFBRixFQUFnQ2MsS0FBaEMsQ0FBc0MsWUFBVTtBQUM1Q2QsTUFBRSxJQUFGLEVBQVFpQixXQUFSLENBQW9CLHdCQUFwQjtBQUNILENBRkQ7O0FBS0E7QUFDQTtBQUNBOztBQUVBakIsRUFBRSxNQUFGLEVBQVU4RSxFQUFWLENBQWEsT0FBYixFQUFzQixpQkFBdEIsRUFBeUMsWUFBVTs7QUFFL0MsUUFBSUksTUFBTWxGLEVBQUUsSUFBRixDQUFWOztBQUVBLFFBQUltRixTQUFTbkYsRUFBRSxVQUFGLEVBQWNRLEdBQWQsQ0FBbUIwRSxJQUFJdEMsSUFBSixFQUFuQixDQUFiO0FBQ0FzQyxRQUFJRSxXQUFKLENBQWlCRCxNQUFqQjs7QUFFQSxRQUFJRSxPQUFPLFNBQVBBLElBQU8sR0FBVTtBQUNuQixZQUFJQyxLQUFLdEYsRUFBRSxxQkFBRixFQUF5QjRDLElBQXpCLENBQStCdUMsT0FBTzNFLEdBQVAsRUFBL0IsQ0FBVDtBQUNBMkUsZUFBT0MsV0FBUCxDQUFvQkUsRUFBcEI7QUFDRCxLQUhEOztBQUtBOzs7Ozs7O0FBT0FILFdBQU9JLEdBQVAsQ0FBVyxNQUFYLEVBQW1CRixJQUFuQixFQUF5QkcsS0FBekI7QUFFRCxDQXJCSCxFIiwiZmlsZSI6Ii9qcy92YWRtaW4tZm9ybXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg2ZWFhNTE1OTRhMjRiMzI3YWM3IiwiLy8gLS0tLS0tLS0tLS0tIFRhZ3MgLS0tLS0tLS0tLS0tIC8vXHJcbiQoJy5TZWxlY3QtVGFncycpLmNob3Nlbih7XHJcbiAgICBwbGFjZWhvbGRlcl90ZXh0X211bHRpcGxlOiAnU2VsZWNjaW9uZSBsYXMgZXRpcXVldGFzJyxcclxuICAgIC8vIG1heF9zZWxlY3RlZF9vcHRpb25zOiAzLFxyXG4gICAgc2VhcmNoX2NvbnRhaW5zOiB0cnVlLFxyXG4gICAgbm9fcmVzdWx0c190ZXh0OiAnTm8gc2UgaGEgZW5jb250cmFkbyBsYSBldGlxdWV0YSdcclxufSk7XHJcblxyXG4kKCcuU2VsZWN0LUF0cmlidXRlJykuY2hvc2VuKHtcclxuICAgIHBsYWNlaG9sZGVyX3RleHRfbXVsdGlwbGU6ICdTZWxlY2Npb25hcicsXHJcbiAgICAvLyBtYXhfc2VsZWN0ZWRfb3B0aW9uczogMyxcclxuICAgIHNlYXJjaF9jb250YWluczogdHJ1ZSxcclxuICAgIG5vX3Jlc3VsdHNfdGV4dDogJ05vIHNlIGhhIGVuY29udHJhZG8nXHJcbn0pO1xyXG5cclxuJCgnLlNlbGVjdC1DYXRlZ29yeScpLmNob3Nlbih7XHJcbiAgICBwbGFjZWhvbGRlcl90ZXh0X3NpbmdsZTogJ1NlbGVjY2lvbmUgdW5hIGNhdGVnb3LDrWEnLFxyXG59KTtcclxuXHJcbiQoJy5TZWxlY3QtQ2hvc2VuJykuY2hvc2VuKHtcclxuICAgIHBsYWNlaG9sZGVyX3RleHRfc2luZ2xlOiAnU2VsZWNjaW9uZSB1bmEgY2F0ZWdvcsOtYScsXHJcbn0pO1xyXG5cclxuLy8gLS0tLS0tLS0tIFNsdWcgc2FuaXRpemVyIC0tLS0tLS0tIC8vXHJcbiQoXCIuU2x1Z0lucHV0XCIpLmtleXVwKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgVGV4dCAgICAgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdmFyIHJlZ0V4cCAgID0gL1xccysvZztcclxuICAgIFRleHQgICAgICAgICA9IFRleHQucmVwbGFjZSgvWyZcXC9cXFxcIyzCoSHCtCMrKCkkfiUuJ1wiOio/PD57fV0vZywnJyk7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UocmVnRXhwLCctJyk7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OxJywgJ24nKSA7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OhJywgJ2EnKSA7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OpJywgJ2UnKSA7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OtJywgJ2knKSA7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OzJywgJ28nKSA7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8O6JywgJ3UnKSA7XHJcbiAgICBcclxuICAgICQoXCIuU2x1Z0lucHV0XCIpLnZhbChUZXh0KTsgICBcclxufSk7XHJcblxyXG4vLyAtLS0tLS0tLS0gU2x1ZyBBdXRvRmlsbG5wdXQgZnJvbSB0aXRsZSAtLS0tLS0tLS0gLy9cclxuJChcIiNUaXRsZUlucHV0XCIpLmtleXVwKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICB2YXIgc3R0ID0gJCh0aGlzKS52YWwoKTtcclxuICAgIHZhciBUZXh0ICAgICA9ICQodGhpcykudmFsKCk7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICB2YXIgcmVnRXhwICAgPSAvXFxzKy9nO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKC9bJlxcL1xcXFwjLMKhIcK0IysoKSR+JS4nXCI6Kj88Pnt9XS9nLCcnKTtcclxuICAgIFRleHQgICAgICAgICA9IFRleHQucmVwbGFjZShyZWdFeHAsJy0nKTtcclxuICAgIFRleHQgICAgICAgICA9IFRleHQucmVwbGFjZSgnw7EnLCAnbicpIDtcclxuICAgIFRleHQgICAgICAgICA9IFRleHQucmVwbGFjZSgnw6EnLCAnYScpIDtcclxuICAgIFRleHQgICAgICAgICA9IFRleHQucmVwbGFjZSgnw6knLCAnZScpIDtcclxuICAgIFRleHQgICAgICAgICA9IFRleHQucmVwbGFjZSgnw60nLCAnaScpIDtcclxuICAgIFRleHQgICAgICAgICA9IFRleHQucmVwbGFjZSgnw7MnLCAnbycpIDtcclxuICAgIFRleHQgICAgICAgICA9IFRleHQucmVwbGFjZSgnw7onLCAndScpIDtcclxuICAgICQoXCIuU2x1Z0lucHV0XCIpLnZhbChUZXh0KTsgICBcclxufSk7XHJcblxyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuLy8gXHQkKCcjTXVsdGlfSW1hZ2VzJykuZmlsZXIoe1xyXG4vLyBcdFx0Ly8gbGltaXQ6IDMsXHJcbi8vIFx0XHRtYXhTaXplOiAzLFxyXG4vLyBcdFx0ZXh0ZW5zaW9uczogWydqcGcnLCAnanBlZycsICdwbmcnLCAnZ2lmJ10sXHJcbi8vIFx0XHRjaGFuZ2VJbnB1dDogdHJ1ZSxcclxuLy8gXHRcdHNob3dUaHVtYnM6IHRydWUsXHJcbi8vIFx0XHRhZGRNb3JlOiB0cnVlXHJcbi8vIFx0fSk7XHJcbi8vIH0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFx0XHRcdFx0XHRcdFx0Ly9cclxuLy8gICAgICBDUkVBVEUgRk9STSAgICAgICAgIC8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIFNob3cgTm90ZXMgVGV4dCBBcmVhXHJcbiQoJy5TaG93Tm90ZXNUZXh0QXJlYScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgbm90ZXMgPSAkKCcuTm90ZXNUZXh0QXJlYScpO1xyXG4gICAgaWYgKG5vdGVzLmhhc0NsYXNzKCdIaWRkZW4nKSl7XHJcbiAgICAgICAgbm90ZXMucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBub3Rlcy5hZGRDbGFzcygnSGlkZGVuJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gQWRkIEFub3RoZXIgQWRkcmVzc1xyXG4kKCcuQWRkQW5vdGhlckFkZHJlc3NCdG4nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgdmFyIGFkZHJlc3NJbnB1dCA9IFwiPGlucHV0IGNsYXNzPSdmb3JtLWNvbnRyb2wnIHBsYWNlaG9sZGVyPSdJbmdyZXNlIG90cm8gdGVsw6lmb25vJyBuYW1lPSdkZWxpdmVyeWFkZHJlc3NbXScgdHlwZT0ndGV4dCcgc3R5bGU9J21hcmdpbi10b3A6NXB4Jz5cIjtcclxuICAgIHZhciBsb2NJbnB1dCAgICAgPSBcIjxpbnB1dCBjbGFzcz0nZm9ybS1jb250cm9sJyBwbGFjZWhvbGRlcj0nSW5ncmVzZSBvdHJvIHRlbMOpZm9ubycgbmFtZT0nZGVsaXZlcnlhZGRyZXNzW10nIHR5cGU9J3RleHQnIHN0eWxlPSdtYXJnaW4tdG9wOjVweCc+XCI7XHJcblxyXG4gICAgJCgnLkFub3RoZXJBZGRyZXNzJykuYXBwZW5kKGFkZHJlc3NJbnB1dCk7XHJcbiAgICAkKCcuQW5vdGhlckxvYycpLmFwcGVuZChsb2NJbnB1dCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBcdFx0XHRcdFx0XHRcdC8vXHJcbi8vICAgRURJVE9SUyBBTkQgRklFTERTICAgICAvL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyAkKCcjTXVsdGlfSW1hZ2VzJykuZmlsZXVwbG9hZGVyKHtcclxuLy8gICAgIGV4dGVuc2lvbnM6IFsnanBnJywgJ2pwZWcnLCAncG5nJywgJ2dpZiddLFxyXG4vLyAgICAgbGltaXQ6IG51bGwsXHJcbi8vICAgICBhZGRNb3JlOiB0cnVlLFxyXG4vLyAgICAgLy8gUGVzbyBtw6F4aW1vIGRlIHRvZGFzIGxhcyBpbcOhZ2VuZXNcclxuLy8gICAgIG1heFNpemU6IDUsXHJcbi8vICAgICAvLyBQZXNvIG3DoXhpbW8gcG9yIGltw6FnZW5cclxuLy8gICAgIGZpbGVNYXhTaXplOiAyLFxyXG4vLyAgICAgdGhlbWU6ICd0aHVtYm5haWxzJyxcclxuLy8gICAgIGVuYWJsZUFwaTogdHJ1ZSxcclxuLy8gICAgIGNhcHRpb25zOiB7XHJcbi8vICAgICAgICAgYnV0dG9uOiBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiAnU2VsZWNjaW9uYXIgJyArIChvcHRpb25zLmxpbWl0ID09IDEgPyAnSW3DoWdlbmVzJyA6ICdJbcOhZ2VuJyk7IH0sXHJcbi8vICAgICAgICAgZmVlZGJhY2s6IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuICdIYWdhIGNsaWNrIHBhcmEgYWdyZWdhci4uLic7IH0sXHJcbi8vICAgICAgICAgZmVlZGJhY2syOiBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBvcHRpb25zLmxlbmd0aCArICcgJyArIChvcHRpb25zLmxlbmd0aCA+IDEgPyAnIGltw6FnZW5lcyBzZWxlY2Npb25hZGFzJyA6ICcgaW3DoWdlbiBzZWxlY2Npb25hZGEnKTsgfSxcclxuLy8gICAgICAgICBkcm9wOiAnQXJyYXN0cmUgbGFzIGltw6FnZW5lcyBhcXXDrScsXHJcbi8vICAgICAgICAgcGFzdGU6ICc8ZGl2IGNsYXNzPVwiZmlsZXVwbG9hZGVyLXBlbmRpbmctbG9hZGVyXCI+PGRpdiBjbGFzcz1cImxlZnQtaGFsZlwiIHN0eWxlPVwiYW5pbWF0aW9uLWR1cmF0aW9uOiAke21zfXNcIj48L2Rpdj48ZGl2IGNsYXNzPVwic3Bpbm5lclwiIHN0eWxlPVwiYW5pbWF0aW9uLWR1cmF0aW9uOiAke21zfXNcIj48L2Rpdj48ZGl2IGNsYXNzPVwicmlnaHQtaGFsZlwiIHN0eWxlPVwiYW5pbWF0aW9uLWR1cmF0aW9uOiAke21zfXNcIj48L2Rpdj48L2Rpdj4gUGFzdGluZyBhIGZpbGUsIGNsaWNrIGhlcmUgdG8gY2FuY2VsLicsXHJcbi8vICAgICAgICAgcmVtb3ZlQ29uZmlybWF0aW9uOiAnRWxpbWluYXI/JyxcclxuLy8gICAgICAgICBlcnJvcnM6IHtcclxuLy8gICAgICAgICAgICAgZmlsZXNMaW1pdDogJ1NvbG8gZXMgcG9zaWJsZSBzdWJpciAke2xpbWl0fSBpbcOhZ2VuLicsXHJcbi8vICAgICAgICAgICAgIGZpbGVzVHlwZTogJ1NvbG8gc2UgYWNlcHRhbiBsb3MgZm9ybWF0b3M6ICR7ZXh0ZW5zaW9uc30uJyxcclxuLy8gICAgICAgICAgICAgZmlsZVNpemU6ICcke25hbWV9IGVzIG11eSBncmFuZGVzISBTZWxlY2Npb25lIHVuYSBkZSAke2ZpbGVNYXhTaXplfU1CLiBjb21vIG3DoXhpbW8nLFxyXG4vLyAgICAgICAgICAgICBmaWxlc1NpemVBbGw6ICcke25hbWV9IHNvbiBtdXkgZ3JhbmRlcyEgU2VsZWNjaW9uZSB1bmFzIGRlICR7ZmlsZU1heFNpemV9TUIuIGNvbW8gbcOheGltbycsXHJcbi8vICAgICAgICAgICAgIGZpbGVOYW1lOiAnTGEgaW3DoWdlbiBjb24gZWwgbm9tYnJlICR7bmFtZX0geWEgZXN0w6Egc2VsZWNjaW9uYWRhLicsXHJcbi8vICAgICAgICAgICAgIGZvbGRlclVwbG9hZDogJ05vIGVzdMOhIHBlcm1pdGlkbyBzdWJpciBjYXJwZXRhcy4nXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBkaWFsb2dzOiB7XHJcbi8vICAgICAgICAgICAgIC8vIGFsZXJ0IGRpYWxvZ1xyXG4vLyAgICAgICAgICAgICBhbGVydDogZnVuY3Rpb24odGV4dCkge1xyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0X2NvbmZpcm0odGV4dCk7XHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIC8vIGNvbmZpcm0gZGlhbG9nXHJcbi8vICAgICAgICAgICAgIGNvbmZpcm06IGZ1bmN0aW9uKHRleHQsIGNhbGxiYWNrKSB7XHJcbi8vICAgICAgICAgICAgICAgICAnY29uZmlybSh0ZXh0KSA/IGNhbGxiYWNrKCkgOiBudWxsOydcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICB9XHJcbi8vIH0pO1xyXG5cclxuJCgnI1NpbmdsZV9JbWFnZScpLmZpbGV1cGxvYWRlcih7XHJcbiAgICBleHRlbnNpb25zOiBbJ2pwZycsICdqcGVnJywgJ3BuZycsICdnaWYnXSxcclxuICAgIGxpbWl0OiAxLFxyXG4gICAgYWRkTW9yZTogZmFsc2UsXHJcbiAgICBmaWxlTWF4U2l6ZTogMixcclxuICAgIGNhcHRpb25zOiB7XHJcbiAgICAgICAgYnV0dG9uOiBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiAnU2VsZWNjaW9uYXIgJyArIChvcHRpb25zLmxpbWl0ID09IDEgPyAnSW3DoWdlbicgOiAnSW3DoWdlbicpOyB9LFxyXG4gICAgICAgIGZlZWRiYWNrOiBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiAnQWdyZWdhciBpbcOhZ2VuZXMuLi4nOyB9LFxyXG4gICAgICAgIGZlZWRiYWNrMjogZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gb3B0aW9ucy5sZW5ndGggKyAnICcgKyAob3B0aW9ucy5sZW5ndGggPiAxID8gJyBpbcOhZ2VuZXMgc2VsZWNjaW9uYWRhcycgOiAnIGltw6FnZW4gc2VsZWNjaW9uYWRhJyk7IH0sXHJcbiAgICAgICAgZHJvcDogJ0FycmFzdHJlIGxhcyBpbcOhZ2VuZXMgYXF1w60nLFxyXG4gICAgICAgIHBhc3RlOiAnPGRpdiBjbGFzcz1cImZpbGV1cGxvYWRlci1wZW5kaW5nLWxvYWRlclwiPjxkaXYgY2xhc3M9XCJsZWZ0LWhhbGZcIiBzdHlsZT1cImFuaW1hdGlvbi1kdXJhdGlvbjogJHttc31zXCI+PC9kaXY+PGRpdiBjbGFzcz1cInNwaW5uZXJcIiBzdHlsZT1cImFuaW1hdGlvbi1kdXJhdGlvbjogJHttc31zXCI+PC9kaXY+PGRpdiBjbGFzcz1cInJpZ2h0LWhhbGZcIiBzdHlsZT1cImFuaW1hdGlvbi1kdXJhdGlvbjogJHttc31zXCI+PC9kaXY+PC9kaXY+IFBhc3RpbmcgYSBmaWxlLCBjbGljayBoZXJlIHRvIGNhbmNlbC4nLFxyXG4gICAgICAgIHJlbW92ZUNvbmZpcm1hdGlvbjogJ0VsaW1pbmFyPycsXHJcbiAgICAgICAgZXJyb3JzOiB7XHJcbiAgICAgICAgICAgIGZpbGVzTGltaXQ6ICdTb2xvIGVzIHBvc2libGUgc3ViaXIgJHtsaW1pdH0gaW3DoWdlbi4nLFxyXG4gICAgICAgICAgICBmaWxlc1R5cGU6ICdTb2xvIHNlIGFjZXB0YW4gbG9zIGZvcm1hdG9zOiAke2V4dGVuc2lvbnN9LicsXHJcbiAgICAgICAgICAgIGZpbGVTaXplOiAnTGEgaW3DoWdlbiBwZXNhIG11Y2hvISBFbGlqYSB1bmEgZGUgJHtmaWxlTWF4U2l6ZX1NQiBjb21vIG3DoXhpbW8uJyxcclxuICAgICAgICAgICAgZmlsZU5hbWU6ICdMYSBpbcOhZ2VuIGNvbiBlc2Ugbm9tYnJlIHlhIGhhIHNpZG8gZWxlZ2lkYScsXHJcbiAgICAgICAgICAgIGZvbGRlclVwbG9hZDogJ05vIGVzdMOhIHBlcm1pdGlkbyBzdWJpciBjYXJwZXRhcy4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlhbG9nczoge1xyXG4gICAgICAgICAgICAvLyBhbGVydCBkaWFsb2dcclxuICAgICAgICAgICAgYWxlcnQ6IGZ1bmN0aW9uKHRleHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCh0ZXh0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gY29uZmlybSBkaWFsb2dcclxuICAgICAgICAgICAgY29uZmlybTogZnVuY3Rpb24odGV4dCwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICdjb25maXJtKHRleHQpID8gY2FsbGJhY2soKSA6IG51bGw7J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuJCgnI011bHRpX0ltYWdlcycpLmZpbGV1cGxvYWRlcih7XHJcbiAgICBleHRlbnNpb25zOiBbJ2pwZycsICdqcGVnJywgJ3BuZycsICdnaWYnLCAnYm1wJ10sXHJcbiAgICBjaGFuZ2VJbnB1dDogJyAnLFxyXG4gICAgdGhlbWU6ICd0aHVtYm5haWxzJyxcclxuICAgIGVuYWJsZUFwaTogdHJ1ZSxcclxuICAgIGFkZE1vcmU6IHRydWUsXHJcbiAgICB0aHVtYm5haWxzOiB7XHJcbiAgICAgICAgYm94OiAnPGRpdiBjbGFzcz1cImZpbGV1cGxvYWRlci1pdGVtc1wiPicgK1xyXG4gICAgICAgICAgICAgICAgICAnPHVsIGNsYXNzPVwiZmlsZXVwbG9hZGVyLWl0ZW1zLWxpc3RcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICc8bGkgY2xhc3M9XCJmaWxldXBsb2FkZXItdGh1bWJuYWlscy1pbnB1dFwiPjxkaXYgY2xhc3M9XCJmaWxldXBsb2FkZXItdGh1bWJuYWlscy1pbnB1dC1pbm5lclwiPis8L2Rpdj48L2xpPicgK1xyXG4gICAgICAgICAgICAgICAgICAnPC91bD4nICtcclxuICAgICAgICAgICAgICAnPC9kaXY+JyxcclxuICAgICAgICBpdGVtOiAnPGxpIGNsYXNzPVwiZmlsZXVwbG9hZGVyLWl0ZW1cIj4nICtcclxuICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZmlsZXVwbG9hZGVyLWl0ZW0taW5uZXJcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRodW1ibmFpbC1ob2xkZXJcIj4ke2ltYWdlfTwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYWN0aW9ucy1ob2xkZXJcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxhIGNsYXNzPVwiZmlsZXVwbG9hZGVyLWFjdGlvbiBmaWxldXBsb2FkZXItYWN0aW9uLXJlbW92ZVwiIHRpdGxlPVwiJHtjYXB0aW9ucy5yZW1vdmV9XCI+PGkgY2xhc3M9XCJyZW1vdmVcIj48L2k+PC9hPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJmaWxldXBsb2FkZXItYWN0aW9uLXBvcHVwXCI+PC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInByb2dyZXNzLWhvbGRlclwiPiR7cHJvZ3Jlc3NCYXJ9PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICc8L2xpPicsXHJcbiAgICAgICAgaXRlbTI6ICc8bGkgY2xhc3M9XCJmaWxldXBsb2FkZXItaXRlbVwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJmaWxldXBsb2FkZXItaXRlbS1pbm5lclwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidGh1bWJuYWlsLWhvbGRlclwiPiR7aW1hZ2V9PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJhY3Rpb25zLWhvbGRlclwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAnPGEgY2xhc3M9XCJmaWxldXBsb2FkZXItYWN0aW9uIGZpbGV1cGxvYWRlci1hY3Rpb24tcmVtb3ZlXCIgdGl0bGU9XCIke2NhcHRpb25zLnJlbW92ZX1cIj48aSBjbGFzcz1cInJlbW92ZVwiPjwvaT48L2E+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImZpbGV1cGxvYWRlci1hY3Rpb24tcG9wdXBcIj48L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAnPC9saT4nLFxyXG4gICAgICAgIHN0YXJ0SW1hZ2VSZW5kZXJlcjogdHJ1ZSxcclxuICAgICAgICBjYW52YXNJbWFnZTogZmFsc2UsXHJcbiAgICAgICAgX3NlbGVjdG9yczoge1xyXG4gICAgICAgICAgICBsaXN0OiAnLmZpbGV1cGxvYWRlci1pdGVtcy1saXN0JyxcclxuICAgICAgICAgICAgaXRlbTogJy5maWxldXBsb2FkZXItaXRlbScsXHJcbiAgICAgICAgICAgIHN0YXJ0OiAnLmZpbGV1cGxvYWRlci1hY3Rpb24tc3RhcnQnLFxyXG4gICAgICAgICAgICByZXRyeTogJy5maWxldXBsb2FkZXItYWN0aW9uLXJldHJ5JyxcclxuICAgICAgICAgICAgcmVtb3ZlOiAnLmZpbGV1cGxvYWRlci1hY3Rpb24tcmVtb3ZlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25JdGVtU2hvdzogZnVuY3Rpb24oaXRlbSwgbGlzdEVsLCBwYXJlbnRFbCwgbmV3SW5wdXRFbCwgaW5wdXRFbCkge1xyXG4gICAgICAgICAgICB2YXIgcGx1c0lucHV0ID0gbGlzdEVsLmZpbmQoJy5maWxldXBsb2FkZXItdGh1bWJuYWlscy1pbnB1dCcpLFxyXG4gICAgICAgICAgICAgICAgYXBpID0gJC5maWxldXBsb2FkZXIuZ2V0SW5zdGFuY2UoaW5wdXRFbC5nZXQoMCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcGx1c0lucHV0Lmluc2VydEFmdGVyKGl0ZW0uaHRtbClbYXBpLmdldE9wdGlvbnMoKS5saW1pdCAmJiBhcGkuZ2V0Q2hvb3NlZEZpbGVzKCkubGVuZ3RoID49IGFwaS5nZXRPcHRpb25zKCkubGltaXQgPyAnaGlkZScgOiAnc2hvdyddKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihpdGVtLmZvcm1hdCA9PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmh0bWwuZmluZCgnLmZpbGV1cGxvYWRlci1pdGVtLWljb24nKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKGxpc3RFbCwgcGFyZW50RWwsIG5ld0lucHV0RWwsIGlucHV0RWwpIHtcclxuICAgICAgICB2YXIgcGx1c0lucHV0ID0gbGlzdEVsLmZpbmQoJy5maWxldXBsb2FkZXItdGh1bWJuYWlscy1pbnB1dCcpLFxyXG4gICAgICAgICAgICBhcGkgPSAkLmZpbGV1cGxvYWRlci5nZXRJbnN0YW5jZShpbnB1dEVsLmdldCgwKSk7XHJcbiAgICBcclxuICAgICAgICBwbHVzSW5wdXQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGFwaS5vcGVuKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmU6IGZ1bmN0aW9uKGl0ZW0sIGxpc3RFbCwgcGFyZW50RWwsIG5ld0lucHV0RWwsIGlucHV0RWwpIHtcclxuICAgICAgICB2YXIgcGx1c0lucHV0ID0gbGlzdEVsLmZpbmQoJy5maWxldXBsb2FkZXItdGh1bWJuYWlscy1pbnB1dCcpLFxyXG4gICAgICAgICAgICBhcGkgPSAkLmZpbGV1cGxvYWRlci5nZXRJbnN0YW5jZShpbnB1dEVsLmdldCgwKSk7XHJcbiAgICBcclxuICAgICAgICBpZiAoYXBpLmdldE9wdGlvbnMoKS5saW1pdCAmJiBhcGkuZ2V0Q2hvb3NlZEZpbGVzKCkubGVuZ3RoIC0gMSA8IGFwaS5nZXRPcHRpb25zKCkubGltaXQpXHJcbiAgICAgICAgICAgIHBsdXNJbnB1dC5zaG93KCk7XHJcbiAgICB9LFxyXG4gICAgLypcclxuICAgIC8vIHdoaWxlIHVzaW5nIHVwbG9hZCBvcHRpb24sIHBsZWFzZSBzZXRcclxuICAgIC8vIHN0YXJ0SW1hZ2VSZW5kZXJlcjogZmFsc2VcclxuICAgIC8vIGZvciBhIGJldHRlciBlZmZlY3RcclxuICAgIHVwbG9hZDoge1xyXG4gICAgICAgIHVybDogJy4vcGhwL3VwbG9hZF9maWxlLnBocCcsXHJcbiAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZW5jdHlwZTogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxyXG4gICAgICAgIHN0YXJ0OiB0cnVlLFxyXG4gICAgICAgIHN5bmNocm9uOiB0cnVlLFxyXG4gICAgICAgIGJlZm9yZVNlbmQ6IG51bGwsXHJcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbihkYXRhLCBpdGVtKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmh0bWwuZmluZCgnLnByb2dyZXNzLWhvbGRlcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucmVuZGVyVGh1bWJuYWlsKCk7XHJcbiAgICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uaHRtbC5maW5kKCcucHJvZ3Jlc3MtaG9sZGVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICBpdGVtLmh0bWwuZmluZCgnLmZpbGV1cGxvYWRlci1pdGVtLWljb24gaScpLnRleHQoJ0ZhaWxlZCEnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M6IGZ1bmN0aW9uKGRhdGEsIGl0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIHByb2dyZXNzQmFyID0gaXRlbS5odG1sLmZpbmQoJy5wcm9ncmVzcy1ob2xkZXInKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHByb2dyZXNzQmFyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnNob3coKTtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmZpbmQoJy5maWxldXBsb2FkZXItcHJvZ3Jlc3NiYXIgLmJhcicpLndpZHRoKGRhdGEucGVyY2VudGFnZSArIFwiJVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmFnRHJvcDoge1xyXG4gICAgICAgIGNvbnRhaW5lcjogJy5maWxldXBsb2FkZXItdGh1bWJuYWlscy1pbnB1dCdcclxuICAgIH0sXHJcbiAgICBvblJlbW92ZTogZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICQucG9zdCgncGhwL3VwbG9hZF9yZW1vdmUucGhwJywge1xyXG4gICAgICAgICAgICBmaWxlOiBpdGVtLm5hbWVcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAqL1xyXG59KTtcclxuXHJcblxyXG4kKCcuRGlzcGxheS1JbnB1dC1Nb2RpZmljYWJsZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdkaXNwbGF5LWlucHV0LWRpc2FibGVkJyk7IFxyXG59KTtcclxuXHJcblxyXG4vLyAtLS0tIE1vZGlmaWNhYmxlIGlucHV0IHRleHRcclxuLy8gSHRtbCBlbGVtZW50XHJcbi8vPHAgZGF0YS1lZGl0YWJsZSBjbGFzcz1cIlNsdWdJbnB1dFwiPnt7ICRhcnRpY2xlLT5zbHVnIH19PC9wPiAgIFxyXG5cclxuJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1lZGl0YWJsZV0nLCBmdW5jdGlvbigpe1xyXG4gIFxyXG4gICAgdmFyICRlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgIHZhciAkaW5wdXQgPSAkKCc8aW5wdXQvPicpLnZhbCggJGVsLnRleHQoKSApO1xyXG4gICAgJGVsLnJlcGxhY2VXaXRoKCAkaW5wdXQgKTtcclxuICAgIFxyXG4gICAgdmFyIHNhdmUgPSBmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgJHAgPSAkKCc8cCBkYXRhLWVkaXRhYmxlIC8+JykudGV4dCggJGlucHV0LnZhbCgpICk7XHJcbiAgICAgICRpbnB1dC5yZXBsYWNlV2l0aCggJHAgKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICBXZSdyZSBkZWZpbmluZyB0aGUgY2FsbGJhY2sgd2l0aCBgb25lYCwgYmVjYXVzZSB3ZSBrbm93IHRoYXRcclxuICAgICAgdGhlIGVsZW1lbnQgd2lsbCBiZSBnb25lIGp1c3QgYWZ0ZXIgdGhhdCwgYW5kIHdlIGRvbid0IHdhbnQgXHJcbiAgICAgIGFueSBjYWxsYmFja3MgbGVmdG92ZXJzIHRha2UgbWVtb3J5LiBcclxuICAgICAgTmV4dCB0aW1lIGBwYCB0dXJucyBpbnRvIGBpbnB1dGAgdGhpcyBzaW5nbGUgY2FsbGJhY2sgXHJcbiAgICAgIHdpbGwgYmUgYXBwbGllZCBhZ2Fpbi5cclxuICAgICovXHJcbiAgICAkaW5wdXQub25lKCdibHVyJywgc2F2ZSkuZm9jdXMoKTtcclxuICAgIFxyXG4gIH0pO1xyXG4gIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdmFkbWluLWZvcm1zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==