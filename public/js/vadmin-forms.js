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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

//enable fileuploader plugin
$('.ImagesUploader').fileuploader(_defineProperty({
    extensions: ['jpg', 'jpeg', 'png', 'gif'],
    addMore: true,
    enableApi: true,
    dragDrop: {
        // set the drop container {null, String, jQuery Object}
        // example: 'body'
        // container: null,

        // Callback fired on entering with dragging files the drop container
        onDragEnter: function onDragEnter(event, listEl, parentEl, newInputEl, inputEl) {
            // callback will go here
        },

        // Callback fired on leaving with dragging files the drop container
        onDragLeave: function onDragLeave(event, listEl, parentEl, newInputEl, inputEl) {
            // callback will go here
        },

        // Callback fired on dropping the files in the drop container
        onDrop: function onDrop(event, listEl, parentEl, newInputEl, inputEl) {
            // callback will go here
        }
    },
    sorter: {
        selectorExclude: null,
        placeholder: null,
        scrollContainer: window,
        onSort: function onSort(list, listEl, parentEl, newInputEl, inputEl) {
            // onSort callback
        }
    },
    thumbnails: {
        onImageLoaded: function onImageLoaded(item) {
            item.html.find('.fileuploader-action-remove').before('<a class="fileuploader-action fileuploader-action-sort fas fa-sort title="Sort"><i></i></a>');
            if (!item.html.find('.fileuploader-action-edit').length) item.html.find('.fileuploader-action-remove').before('<a class="fileuploader-action fileuploader-action-popup fileuploader-action-edit fas fa-edit" title="Edit"><i></i></a>');
        }
    },
    editor: {
        cropper: {
            ratio: '1:1',
            minWidth: 100,
            minHeight: 100,
            showGrid: true
        }
    }
}, 'sorter', {
    selectorExclude: null,
    placeholder: null,
    scrollContainer: window,
    onSort: function onSort(list, listEl, parentEl, newInputEl, inputEl) {
        // onSort callback
    }
}));

$('#Multi_Images, .Multi_Images').fileuploader({
    extensions: ['jpg', 'jpeg', 'png', 'gif', 'bmp'],
    changeInput: ' ',
    theme: 'thumbnails',
    enableApi: true,
    addMore: true,
    dragDrop: {
        // set the drop container {null, String, jQuery Object}
        // example: 'body'
        container: null,

        // Callback fired on entering with dragging files the drop container
        onDragEnter: function onDragEnter(event, listEl, parentEl, newInputEl, inputEl) {
            // callback will go here
        },

        // Callback fired on leaving with dragging files the drop container
        onDragLeave: function onDragLeave(event, listEl, parentEl, newInputEl, inputEl) {
            // callback will go here
        },

        // Callback fired on dropping the files in the drop container
        onDrop: function onDrop(event, listEl, parentEl, newInputEl, inputEl) {
            // callback will go here
        }
    },
    sorter: {
        selectorExclude: null,
        placeholder: null,
        scrollContainer: window,
        onSort: function onSort(list, listEl, parentEl, newInputEl, inputEl) {
            // onSort callback
        }
    },
    thumbnails: _defineProperty({
        onItemShow: function onItemShow(item) {
            // add sorter button to the item html<i class="fas fa-sort"></i>
            item.html.find('.fileuploader-action-remove').before('<a class="fileuploader-action fileuploader-action-sort fas fa-sort" title="Sort"><i></i></a>');
        },
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
            sorter: '.fileuploader-action-sort',
            remove: '.fileuploader-action-remove'
        }
    }, 'onItemShow', function onItemShow(item, listEl, parentEl, newInputEl, inputEl) {
        var plusInput = listEl.find('.fileuploader-thumbnails-input'),
            api = $.fileuploader.getInstance(inputEl.get(0));

        plusInput.insertAfter(item.html)[api.getOptions().limit && api.getChoosedFiles().length >= api.getOptions().limit ? 'hide' : 'show']();

        if (item.format == 'image') {
            item.html.find('.fileuploader-item-icon').hide();
        }
    }),
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

// $('#Multi_Images, .Multi_Images').fileuploader({
//     extensions: ['jpg', 'jpeg', 'png', 'gif', 'bmp'],
//     changeInput: ' ',
//     theme: 'thumbnails',
//     enableApi: true,
//     addMore: true,
//     thumbnails: {
//         box: '<div class="fileuploader-items">' +
//                   '<ul class="fileuploader-items-list">' +
//                       '<li class="fileuploader-thumbnails-input"><div class="fileuploader-thumbnails-input-inner">+</div></li>' +
//                   '</ul>' +
//               '</div>',
//         item: '<li class="fileuploader-item">' +
//                    '<div class="fileuploader-item-inner">' +
//                        '<div class="thumbnail-holder">${image}</div>' +
//                        '<div class="actions-holder">' +
//                               '<a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i class="remove"></i></a>' +
//                            '<span class="fileuploader-action-popup"></span>' +
//                        '</div>' +
//                           '<div class="progress-holder">${progressBar}</div>' +
//                    '</div>' +
//                '</li>',
//         item2: '<li class="fileuploader-item">' +
//                    '<div class="fileuploader-item-inner">' +
//                        '<div class="thumbnail-holder">${image}</div>' +
//                        '<div class="actions-holder">' +
//                            '<a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i class="remove"></i></a>' +
//                            '<span class="fileuploader-action-popup"></span>' +
//                        '</div>' +
//                    '</div>' +
//                '</li>',
//         startImageRenderer: true,
//         canvasImage: false,
//         _selectors: {
//             list: '.fileuploader-items-list',
//             item: '.fileuploader-item',
//             start: '.fileuploader-action-start',
//             retry: '.fileuploader-action-retry',
//             remove: '.fileuploader-action-remove'
//         },
//         onItemShow: function(item, listEl, parentEl, newInputEl, inputEl) {
//             var plusInput = listEl.find('.fileuploader-thumbnails-input'),
//                 api = $.fileuploader.getInstance(inputEl.get(0));

//             plusInput.insertAfter(item.html)[api.getOptions().limit && api.getChoosedFiles().length >= api.getOptions().limit ? 'hide' : 'show']();

//             if(item.format == 'image') {
//                 item.html.find('.fileuploader-item-icon').hide();
//             }
//         }
//     },
//     afterRender: function(listEl, parentEl, newInputEl, inputEl) {
//         var plusInput = listEl.find('.fileuploader-thumbnails-input'),
//             api = $.fileuploader.getInstance(inputEl.get(0));

//         plusInput.on('click', function() {
//             api.open();
//         });
//     },
//     onRemove: function(item, listEl, parentEl, newInputEl, inputEl) {
//         var plusInput = listEl.find('.fileuploader-thumbnails-input'),
//             api = $.fileuploader.getInstance(inputEl.get(0));

//         if (api.getOptions().limit && api.getChoosedFiles().length - 1 < api.getOptions().limit)
//             plusInput.show();
//     },
//     /*
//     // while using upload option, please set
//     // startImageRenderer: false
//     // for a better effect
//     upload: {
//         url: './php/upload_file.php',
//         data: null,
//         type: 'POST',
//         enctype: 'multipart/form-data',
//         start: true,
//         synchron: true,
//         beforeSend: null,
//         onSuccess: function(data, item) {
//             setTimeout(function() {
//                 item.html.find('.progress-holder').hide();
//                 item.renderThumbnail();
//             }, 400);
//         },
//         onError: function(item) {
//             item.html.find('.progress-holder').hide();
//             item.html.find('.fileuploader-item-icon i').text('Failed!');
//         },
//         onProgress: function(data, item) {
//             var progressBar = item.html.find('.progress-holder');

//             if(progressBar.length > 0) {
//                 progressBar.show();
//                 progressBar.find('.fileuploader-progressbar .bar').width(data.percentage + "%");
//             }
//         }
//     },
//     dragDrop: {
//         container: '.fileuploader-thumbnails-input'
//     },
//     onRemove: function(item) {
//         $.post('php/upload_remove.php', {
//             file: item.name
//         });
//     },
//     */
// });


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmNkODA1M2VlYWJkZTQxOTg2MzAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92YWRtaW4tZm9ybXMuanMiXSwibmFtZXMiOlsiJCIsImNob3NlbiIsInBsYWNlaG9sZGVyX3RleHRfbXVsdGlwbGUiLCJzZWFyY2hfY29udGFpbnMiLCJub19yZXN1bHRzX3RleHQiLCJwbGFjZWhvbGRlcl90ZXh0X3NpbmdsZSIsImtleXVwIiwiVGV4dCIsInZhbCIsInRvTG93ZXJDYXNlIiwicmVnRXhwIiwicmVwbGFjZSIsImV2ZW50Iiwic3R0IiwiY2xpY2siLCJub3RlcyIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImFkZHJlc3NJbnB1dCIsImxvY0lucHV0IiwiYXBwZW5kIiwiZmlsZXVwbG9hZGVyIiwiZXh0ZW5zaW9ucyIsImxpbWl0IiwiYWRkTW9yZSIsImZpbGVNYXhTaXplIiwiY2FwdGlvbnMiLCJidXR0b24iLCJvcHRpb25zIiwiZmVlZGJhY2siLCJmZWVkYmFjazIiLCJsZW5ndGgiLCJkcm9wIiwicGFzdGUiLCJyZW1vdmVDb25maXJtYXRpb24iLCJlcnJvcnMiLCJmaWxlc0xpbWl0IiwiZmlsZXNUeXBlIiwiZmlsZVNpemUiLCJmaWxlTmFtZSIsImZvbGRlclVwbG9hZCIsImRpYWxvZ3MiLCJhbGVydCIsInRleHQiLCJjb25maXJtIiwiY2FsbGJhY2siLCJlbmFibGVBcGkiLCJkcmFnRHJvcCIsIm9uRHJhZ0VudGVyIiwibGlzdEVsIiwicGFyZW50RWwiLCJuZXdJbnB1dEVsIiwiaW5wdXRFbCIsIm9uRHJhZ0xlYXZlIiwib25Ecm9wIiwic29ydGVyIiwic2VsZWN0b3JFeGNsdWRlIiwicGxhY2Vob2xkZXIiLCJzY3JvbGxDb250YWluZXIiLCJ3aW5kb3ciLCJvblNvcnQiLCJsaXN0IiwidGh1bWJuYWlscyIsIm9uSW1hZ2VMb2FkZWQiLCJpdGVtIiwiaHRtbCIsImZpbmQiLCJiZWZvcmUiLCJlZGl0b3IiLCJjcm9wcGVyIiwicmF0aW8iLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsInNob3dHcmlkIiwiY2hhbmdlSW5wdXQiLCJ0aGVtZSIsImNvbnRhaW5lciIsIm9uSXRlbVNob3ciLCJib3giLCJpdGVtMiIsInN0YXJ0SW1hZ2VSZW5kZXJlciIsImNhbnZhc0ltYWdlIiwiX3NlbGVjdG9ycyIsInN0YXJ0IiwicmV0cnkiLCJyZW1vdmUiLCJwbHVzSW5wdXQiLCJhcGkiLCJnZXRJbnN0YW5jZSIsImdldCIsImluc2VydEFmdGVyIiwiZ2V0T3B0aW9ucyIsImdldENob29zZWRGaWxlcyIsImZvcm1hdCIsImhpZGUiLCJhZnRlclJlbmRlciIsIm9uIiwib3BlbiIsIm9uUmVtb3ZlIiwic2hvdyIsIiRlbCIsIiRpbnB1dCIsInJlcGxhY2VXaXRoIiwic2F2ZSIsIiRwIiwib25lIiwiZm9jdXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0FBLEVBQUUsY0FBRixFQUFrQkMsTUFBbEIsQ0FBeUI7QUFDckJDLCtCQUEyQiwwQkFETjtBQUVyQjtBQUNBQyxxQkFBaUIsSUFISTtBQUlyQkMscUJBQWlCO0FBSkksQ0FBekI7O0FBT0FKLEVBQUUsa0JBQUYsRUFBc0JDLE1BQXRCLENBQTZCO0FB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aUIsV0FBUixDQUFvQix3QkFBcEI7QUFDSCxDQUZEOztBQUtBO0FBQ0E7QUFDQTs7QUFFQWpCLEVBQUUsTUFBRixFQUFVaUcsRUFBVixDQUFhLE9BQWIsRUFBc0IsaUJBQXRCLEVBQXlDLFlBQVU7O0FBRS9DLFFBQUlJLE1BQU1yRyxFQUFFLElBQUYsQ0FBVjs7QUFFQSxRQUFJc0csU0FBU3RHLEVBQUUsVUFBRixFQUFjUSxHQUFkLENBQW1CNkYsSUFBSXpELElBQUosRUFBbkIsQ0FBYjtBQUNBeUQsUUFBSUUsV0FBSixDQUFpQkQsTUFBakI7O0FBRUEsUUFBSUUsT0FBTyxTQUFQQSxJQUFPLEdBQVU7QUFDbkIsWUFBSUMsS0FBS3pHLEVBQUUscUJBQUYsRUFBeUI0QyxJQUF6QixDQUErQjBELE9BQU85RixHQUFQLEVBQS9CLENBQVQ7QUFDQThGLGVBQU9DLFdBQVAsQ0FBb0JFLEVBQXBCO0FBQ0QsS0FIRDs7QUFLQTs7Ozs7OztBQU9BSCxXQUFPSSxHQUFQLENBQVcsTUFBWCxFQUFtQkYsSUFBbkIsRUFBeUJHLEtBQXpCO0FBRUQsQ0FyQkgsRSIsImZpbGUiOiIvanMvdmFkbWluLWZvcm1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDc4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyY2Q4MDUzZWVhYmRlNDE5ODYzMCIsIi8vIC0tLS0tLS0tLS0tLSBUYWdzIC0tLS0tLS0tLS0tLSAvL1xyXG4kKCcuU2VsZWN0LVRhZ3MnKS5jaG9zZW4oe1xyXG4gICAgcGxhY2Vob2xkZXJfdGV4dF9tdWx0aXBsZTogJ1NlbGVjY2lvbmUgbGFzIGV0aXF1ZXRhcycsXHJcbiAgICAvLyBtYXhfc2VsZWN0ZWRfb3B0aW9uczogMyxcclxuICAgIHNlYXJjaF9jb250YWluczogdHJ1ZSxcclxuICAgIG5vX3Jlc3VsdHNfdGV4dDogJ05vIHNlIGhhIGVuY29udHJhZG8gbGEgZXRpcXVldGEnXHJcbn0pO1xyXG5cclxuJCgnLlNlbGVjdC1BdHJpYnV0ZScpLmNob3Nlbih7XHJcbiAgICBwbGFjZWhvbGRlcl90ZXh0X211bHRpcGxlOiAnU2VsZWNjaW9uYXInLFxyXG4gICAgLy8gbWF4X3NlbGVjdGVkX29wdGlvbnM6IDMsXHJcbiAgICBzZWFyY2hfY29udGFpbnM6IHRydWUsXHJcbiAgICBub19yZXN1bHRzX3RleHQ6ICdObyBzZSBoYSBlbmNvbnRyYWRvJ1xyXG59KTtcclxuXHJcbiQoJy5TZWxlY3QtQ2F0ZWdvcnknKS5jaG9zZW4oe1xyXG4gICAgcGxhY2Vob2xkZXJfdGV4dF9zaW5nbGU6ICdTZWxlY2Npb25lIHVuYSBjYXRlZ29yw61hJyxcclxufSk7XHJcblxyXG4kKCcuU2VsZWN0LUNob3NlbicpLmNob3Nlbih7XHJcbiAgICBwbGFjZWhvbGRlcl90ZXh0X3NpbmdsZTogJ1NlbGVjY2lvbmUgdW5hIGNhdGVnb3LDrWEnLFxyXG59KTtcclxuXHJcbi8vIC0tLS0tLS0tLSBTbHVnIHNhbml0aXplciAtLS0tLS0tLSAvL1xyXG4kKFwiLlNsdWdJbnB1dFwiKS5rZXl1cChmdW5jdGlvbigpe1xyXG4gICAgdmFyIFRleHQgICAgID0gJCh0aGlzKS52YWwoKTtcclxuICAgIFRleHQgICAgICAgICA9IFRleHQudG9Mb3dlckNhc2UoKTtcclxuICAgIHZhciByZWdFeHAgICA9IC9cXHMrL2c7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoL1smXFwvXFxcXCMswqEhwrQjKygpJH4lLidcIjoqPzw+e31dL2csJycpO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKHJlZ0V4cCwnLScpO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDsScsICduJykgO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDoScsICdhJykgO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDqScsICdlJykgO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDrScsICdpJykgO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDsycsICdvJykgO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDuicsICd1JykgO1xyXG4gICAgXHJcbiAgICAkKFwiLlNsdWdJbnB1dFwiKS52YWwoVGV4dCk7ICAgXHJcbn0pO1xyXG5cclxuLy8gLS0tLS0tLS0tIFNsdWcgQXV0b0ZpbGxucHV0IGZyb20gdGl0bGUgLS0tLS0tLS0tIC8vXHJcbiQoXCIjVGl0bGVJbnB1dFwiKS5rZXl1cChmdW5jdGlvbihldmVudCkge1xyXG4gICAgdmFyIHN0dCA9ICQodGhpcykudmFsKCk7XHJcbiAgICB2YXIgVGV4dCAgICAgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdmFyIHJlZ0V4cCAgID0gL1xccysvZztcclxuICAgIFRleHQgICAgICAgICA9IFRleHQucmVwbGFjZSgvWyZcXC9cXFxcIyzCoSHCtCMrKCkkfiUuJ1wiOio/PD57fV0vZywnJyk7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UocmVnRXhwLCctJyk7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OxJywgJ24nKSA7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OhJywgJ2EnKSA7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OpJywgJ2UnKSA7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OtJywgJ2knKSA7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OzJywgJ28nKSA7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8O6JywgJ3UnKSA7XHJcbiAgICAkKFwiLlNsdWdJbnB1dFwiKS52YWwoVGV4dCk7ICAgXHJcbn0pO1xyXG5cclxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbi8vIFx0JCgnI011bHRpX0ltYWdlcycpLmZpbGVyKHtcclxuLy8gXHRcdC8vIGxpbWl0OiAzLFxyXG4vLyBcdFx0bWF4U2l6ZTogMyxcclxuLy8gXHRcdGV4dGVuc2lvbnM6IFsnanBnJywgJ2pwZWcnLCAncG5nJywgJ2dpZiddLFxyXG4vLyBcdFx0Y2hhbmdlSW5wdXQ6IHRydWUsXHJcbi8vIFx0XHRzaG93VGh1bWJzOiB0cnVlLFxyXG4vLyBcdFx0YWRkTW9yZTogdHJ1ZVxyXG4vLyBcdH0pO1xyXG4vLyB9KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBcdFx0XHRcdFx0XHRcdC8vXHJcbi8vICAgICAgQ1JFQVRFIEZPUk0gICAgICAgICAvL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBTaG93IE5vdGVzIFRleHQgQXJlYVxyXG4kKCcuU2hvd05vdGVzVGV4dEFyZWEnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgdmFyIG5vdGVzID0gJCgnLk5vdGVzVGV4dEFyZWEnKTtcclxuICAgIGlmIChub3Rlcy5oYXNDbGFzcygnSGlkZGVuJykpe1xyXG4gICAgICAgIG5vdGVzLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbm90ZXMuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIEFkZCBBbm90aGVyIEFkZHJlc3NcclxuJCgnLkFkZEFub3RoZXJBZGRyZXNzQnRuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgIHZhciBhZGRyZXNzSW5wdXQgPSBcIjxpbnB1dCBjbGFzcz0nZm9ybS1jb250cm9sJyBwbGFjZWhvbGRlcj0nSW5ncmVzZSBvdHJvIHRlbMOpZm9ubycgbmFtZT0nZGVsaXZlcnlhZGRyZXNzW10nIHR5cGU9J3RleHQnIHN0eWxlPSdtYXJnaW4tdG9wOjVweCc+XCI7XHJcbiAgICB2YXIgbG9jSW5wdXQgICAgID0gXCI8aW5wdXQgY2xhc3M9J2Zvcm0tY29udHJvbCcgcGxhY2Vob2xkZXI9J0luZ3Jlc2Ugb3RybyB0ZWzDqWZvbm8nIG5hbWU9J2RlbGl2ZXJ5YWRkcmVzc1tdJyB0eXBlPSd0ZXh0JyBzdHlsZT0nbWFyZ2luLXRvcDo1cHgnPlwiO1xyXG5cclxuICAgICQoJy5Bbm90aGVyQWRkcmVzcycpLmFwcGVuZChhZGRyZXNzSW5wdXQpO1xyXG4gICAgJCgnLkFub3RoZXJMb2MnKS5hcHBlbmQobG9jSW5wdXQpO1xyXG59KTtcclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gXHRcdFx0XHRcdFx0XHQvL1xyXG4vLyAgIEVESVRPUlMgQU5EIEZJRUxEUyAgICAgLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gJCgnI011bHRpX0ltYWdlcycpLmZpbGV1cGxvYWRlcih7XHJcbi8vICAgICBleHRlbnNpb25zOiBbJ2pwZycsICdqcGVnJywgJ3BuZycsICdnaWYnXSxcclxuLy8gICAgIGxpbWl0OiBudWxsLFxyXG4vLyAgICAgYWRkTW9yZTogdHJ1ZSxcclxuLy8gICAgIC8vIFBlc28gbcOheGltbyBkZSB0b2RhcyBsYXMgaW3DoWdlbmVzXHJcbi8vICAgICBtYXhTaXplOiA1LFxyXG4vLyAgICAgLy8gUGVzbyBtw6F4aW1vIHBvciBpbcOhZ2VuXHJcbi8vICAgICBmaWxlTWF4U2l6ZTogMixcclxuLy8gICAgIHRoZW1lOiAndGh1bWJuYWlscycsXHJcbi8vICAgICBlbmFibGVBcGk6IHRydWUsXHJcbi8vICAgICBjYXB0aW9uczoge1xyXG4vLyAgICAgICAgIGJ1dHRvbjogZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gJ1NlbGVjY2lvbmFyICcgKyAob3B0aW9ucy5saW1pdCA9PSAxID8gJ0ltw6FnZW5lcycgOiAnSW3DoWdlbicpOyB9LFxyXG4vLyAgICAgICAgIGZlZWRiYWNrOiBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiAnSGFnYSBjbGljayBwYXJhIGFncmVnYXIuLi4nOyB9LFxyXG4vLyAgICAgICAgIGZlZWRiYWNrMjogZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gb3B0aW9ucy5sZW5ndGggKyAnICcgKyAob3B0aW9ucy5sZW5ndGggPiAxID8gJyBpbcOhZ2VuZXMgc2VsZWNjaW9uYWRhcycgOiAnIGltw6FnZW4gc2VsZWNjaW9uYWRhJyk7IH0sXHJcbi8vICAgICAgICAgZHJvcDogJ0FycmFzdHJlIGxhcyBpbcOhZ2VuZXMgYXF1w60nLFxyXG4vLyAgICAgICAgIHBhc3RlOiAnPGRpdiBjbGFzcz1cImZpbGV1cGxvYWRlci1wZW5kaW5nLWxvYWRlclwiPjxkaXYgY2xhc3M9XCJsZWZ0LWhhbGZcIiBzdHlsZT1cImFuaW1hdGlvbi1kdXJhdGlvbjogJHttc31zXCI+PC9kaXY+PGRpdiBjbGFzcz1cInNwaW5uZXJcIiBzdHlsZT1cImFuaW1hdGlvbi1kdXJhdGlvbjogJHttc31zXCI+PC9kaXY+PGRpdiBjbGFzcz1cInJpZ2h0LWhhbGZcIiBzdHlsZT1cImFuaW1hdGlvbi1kdXJhdGlvbjogJHttc31zXCI+PC9kaXY+PC9kaXY+IFBhc3RpbmcgYSBmaWxlLCBjbGljayBoZXJlIHRvIGNhbmNlbC4nLFxyXG4vLyAgICAgICAgIHJlbW92ZUNvbmZpcm1hdGlvbjogJ0VsaW1pbmFyPycsXHJcbi8vICAgICAgICAgZXJyb3JzOiB7XHJcbi8vICAgICAgICAgICAgIGZpbGVzTGltaXQ6ICdTb2xvIGVzIHBvc2libGUgc3ViaXIgJHtsaW1pdH0gaW3DoWdlbi4nLFxyXG4vLyAgICAgICAgICAgICBmaWxlc1R5cGU6ICdTb2xvIHNlIGFjZXB0YW4gbG9zIGZvcm1hdG9zOiAke2V4dGVuc2lvbnN9LicsXHJcbi8vICAgICAgICAgICAgIGZpbGVTaXplOiAnJHtuYW1lfSBlcyBtdXkgZ3JhbmRlcyEgU2VsZWNjaW9uZSB1bmEgZGUgJHtmaWxlTWF4U2l6ZX1NQi4gY29tbyBtw6F4aW1vJyxcclxuLy8gICAgICAgICAgICAgZmlsZXNTaXplQWxsOiAnJHtuYW1lfSBzb24gbXV5IGdyYW5kZXMhIFNlbGVjY2lvbmUgdW5hcyBkZSAke2ZpbGVNYXhTaXplfU1CLiBjb21vIG3DoXhpbW8nLFxyXG4vLyAgICAgICAgICAgICBmaWxlTmFtZTogJ0xhIGltw6FnZW4gY29uIGVsIG5vbWJyZSAke25hbWV9IHlhIGVzdMOhIHNlbGVjY2lvbmFkYS4nLFxyXG4vLyAgICAgICAgICAgICBmb2xkZXJVcGxvYWQ6ICdObyBlc3TDoSBwZXJtaXRpZG8gc3ViaXIgY2FycGV0YXMuJ1xyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgZGlhbG9nczoge1xyXG4vLyAgICAgICAgICAgICAvLyBhbGVydCBkaWFsb2dcclxuLy8gICAgICAgICAgICAgYWxlcnQ6IGZ1bmN0aW9uKHRleHQpIHtcclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBhbGVydF9jb25maXJtKHRleHQpO1xyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAvLyBjb25maXJtIGRpYWxvZ1xyXG4vLyAgICAgICAgICAgICBjb25maXJtOiBmdW5jdGlvbih0ZXh0LCBjYWxsYmFjaykge1xyXG4vLyAgICAgICAgICAgICAgICAgJ2NvbmZpcm0odGV4dCkgPyBjYWxsYmFjaygpIDogbnVsbDsnXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgfVxyXG4vLyB9KTtcclxuXHJcbiQoJyNTaW5nbGVfSW1hZ2UnKS5maWxldXBsb2FkZXIoe1xyXG4gICAgZXh0ZW5zaW9uczogWydqcGcnLCAnanBlZycsICdwbmcnLCAnZ2lmJ10sXHJcbiAgICBsaW1pdDogMSxcclxuICAgIGFkZE1vcmU6IGZhbHNlLFxyXG4gICAgZmlsZU1heFNpemU6IDIsXHJcbiAgICBjYXB0aW9uczoge1xyXG4gICAgICAgIGJ1dHRvbjogZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gJ1NlbGVjY2lvbmFyICcgKyAob3B0aW9ucy5saW1pdCA9PSAxID8gJ0ltw6FnZW4nIDogJ0ltw6FnZW4nKTsgfSxcclxuICAgICAgICBmZWVkYmFjazogZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gJ0FncmVnYXIgaW3DoWdlbmVzLi4uJzsgfSxcclxuICAgICAgICBmZWVkYmFjazI6IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIG9wdGlvbnMubGVuZ3RoICsgJyAnICsgKG9wdGlvbnMubGVuZ3RoID4gMSA/ICcgaW3DoWdlbmVzIHNlbGVjY2lvbmFkYXMnIDogJyBpbcOhZ2VuIHNlbGVjY2lvbmFkYScpOyB9LFxyXG4gICAgICAgIGRyb3A6ICdBcnJhc3RyZSBsYXMgaW3DoWdlbmVzIGFxdcOtJyxcclxuICAgICAgICBwYXN0ZTogJzxkaXYgY2xhc3M9XCJmaWxldXBsb2FkZXItcGVuZGluZy1sb2FkZXJcIj48ZGl2IGNsYXNzPVwibGVmdC1oYWxmXCIgc3R5bGU9XCJhbmltYXRpb24tZHVyYXRpb246ICR7bXN9c1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJzcGlubmVyXCIgc3R5bGU9XCJhbmltYXRpb24tZHVyYXRpb246ICR7bXN9c1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJyaWdodC1oYWxmXCIgc3R5bGU9XCJhbmltYXRpb24tZHVyYXRpb246ICR7bXN9c1wiPjwvZGl2PjwvZGl2PiBQYXN0aW5nIGEgZmlsZSwgY2xpY2sgaGVyZSB0byBjYW5jZWwuJyxcclxuICAgICAgICByZW1vdmVDb25maXJtYXRpb246ICdFbGltaW5hcj8nLFxyXG4gICAgICAgIGVycm9yczoge1xyXG4gICAgICAgICAgICBmaWxlc0xpbWl0OiAnU29sbyBlcyBwb3NpYmxlIHN1YmlyICR7bGltaXR9IGltw6FnZW4uJyxcclxuICAgICAgICAgICAgZmlsZXNUeXBlOiAnU29sbyBzZSBhY2VwdGFuIGxvcyBmb3JtYXRvczogJHtleHRlbnNpb25zfS4nLFxyXG4gICAgICAgICAgICBmaWxlU2l6ZTogJ0xhIGltw6FnZW4gcGVzYSBtdWNobyEgRWxpamEgdW5hIGRlICR7ZmlsZU1heFNpemV9TUIgY29tbyBtw6F4aW1vLicsXHJcbiAgICAgICAgICAgIGZpbGVOYW1lOiAnTGEgaW3DoWdlbiBjb24gZXNlIG5vbWJyZSB5YSBoYSBzaWRvIGVsZWdpZGEnLFxyXG4gICAgICAgICAgICBmb2xkZXJVcGxvYWQ6ICdObyBlc3TDoSBwZXJtaXRpZG8gc3ViaXIgY2FycGV0YXMuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpYWxvZ3M6IHtcclxuICAgICAgICAgICAgLy8gYWxlcnQgZGlhbG9nXHJcbiAgICAgICAgICAgIGFsZXJ0OiBmdW5jdGlvbih0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQodGV4dCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIGNvbmZpcm0gZGlhbG9nXHJcbiAgICAgICAgICAgIGNvbmZpcm06IGZ1bmN0aW9uKHRleHQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAnY29uZmlybSh0ZXh0KSA/IGNhbGxiYWNrKCkgOiBudWxsOydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vZW5hYmxlIGZpbGV1cGxvYWRlciBwbHVnaW5cclxuJCgnLkltYWdlc1VwbG9hZGVyJykuZmlsZXVwbG9hZGVyKHtcclxuICAgIGV4dGVuc2lvbnM6IFsnanBnJywgJ2pwZWcnLCAncG5nJywgJ2dpZiddLFxyXG4gICAgYWRkTW9yZTogdHJ1ZSxcclxuICAgIGVuYWJsZUFwaTogdHJ1ZSxcclxuICAgIGRyYWdEcm9wOiB7XHJcbiAgICAgICAgLy8gc2V0IHRoZSBkcm9wIGNvbnRhaW5lciB7bnVsbCwgU3RyaW5nLCBqUXVlcnkgT2JqZWN0fVxyXG4gICAgICAgIC8vIGV4YW1wbGU6ICdib2R5J1xyXG4gICAgICAgIC8vIGNvbnRhaW5lcjogbnVsbCxcclxuICAgIFxyXG4gICAgICAgIC8vIENhbGxiYWNrIGZpcmVkIG9uIGVudGVyaW5nIHdpdGggZHJhZ2dpbmcgZmlsZXMgdGhlIGRyb3AgY29udGFpbmVyXHJcbiAgICAgICAgb25EcmFnRW50ZXI6IGZ1bmN0aW9uKGV2ZW50LCBsaXN0RWwsIHBhcmVudEVsLCBuZXdJbnB1dEVsLCBpbnB1dEVsKSB7XHJcbiAgICAgICAgICAgIC8vIGNhbGxiYWNrIHdpbGwgZ28gaGVyZVxyXG4gICAgICAgIH0sXHJcbiAgICBcclxuICAgICAgICAvLyBDYWxsYmFjayBmaXJlZCBvbiBsZWF2aW5nIHdpdGggZHJhZ2dpbmcgZmlsZXMgdGhlIGRyb3AgY29udGFpbmVyXHJcbiAgICAgICAgb25EcmFnTGVhdmU6IGZ1bmN0aW9uKGV2ZW50LCBsaXN0RWwsIHBhcmVudEVsLCBuZXdJbnB1dEVsLCBpbnB1dEVsKSB7XHJcbiAgICAgICAgICAgIC8vIGNhbGxiYWNrIHdpbGwgZ28gaGVyZVxyXG4gICAgICAgIH0sXHJcbiAgICBcclxuICAgICAgICAvLyBDYWxsYmFjayBmaXJlZCBvbiBkcm9wcGluZyB0aGUgZmlsZXMgaW4gdGhlIGRyb3AgY29udGFpbmVyXHJcbiAgICAgICAgb25Ecm9wOiBmdW5jdGlvbihldmVudCwgbGlzdEVsLCBwYXJlbnRFbCwgbmV3SW5wdXRFbCwgaW5wdXRFbCkge1xyXG4gICAgICAgICAgICAvLyBjYWxsYmFjayB3aWxsIGdvIGhlcmVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc29ydGVyOiB7XHJcbiAgICAgICAgc2VsZWN0b3JFeGNsdWRlOiBudWxsLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBudWxsLFxyXG4gICAgICAgIHNjcm9sbENvbnRhaW5lcjogd2luZG93LFxyXG4gICAgICAgIG9uU29ydDogZnVuY3Rpb24obGlzdCwgbGlzdEVsLCBwYXJlbnRFbCwgbmV3SW5wdXRFbCwgaW5wdXRFbCkge1xyXG4gICAgICAgICAgICAvLyBvblNvcnQgY2FsbGJhY2tcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGh1bWJuYWlsczoge1xyXG4gICAgICAgIG9uSW1hZ2VMb2FkZWQ6IGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5odG1sLmZpbmQoJy5maWxldXBsb2FkZXItYWN0aW9uLXJlbW92ZScpLmJlZm9yZSgnPGEgY2xhc3M9XCJmaWxldXBsb2FkZXItYWN0aW9uIGZpbGV1cGxvYWRlci1hY3Rpb24tc29ydCBmYXMgZmEtc29ydCB0aXRsZT1cIlNvcnRcIj48aT48L2k+PC9hPicpO1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0uaHRtbC5maW5kKCcuZmlsZXVwbG9hZGVyLWFjdGlvbi1lZGl0JykubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgaXRlbS5odG1sLmZpbmQoJy5maWxldXBsb2FkZXItYWN0aW9uLXJlbW92ZScpLmJlZm9yZSgnPGEgY2xhc3M9XCJmaWxldXBsb2FkZXItYWN0aW9uIGZpbGV1cGxvYWRlci1hY3Rpb24tcG9wdXAgZmlsZXVwbG9hZGVyLWFjdGlvbi1lZGl0IGZhcyBmYS1lZGl0XCIgdGl0bGU9XCJFZGl0XCI+PGk+PC9pPjwvYT4nKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZWRpdG9yOiB7XHJcbiAgICAgICAgY3JvcHBlcjoge1xyXG4gICAgICAgICAgICByYXRpbzogJzE6MScsXHJcbiAgICAgICAgICAgIG1pbldpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogMTAwLFxyXG4gICAgICAgICAgICBzaG93R3JpZDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzb3J0ZXI6IHtcclxuICAgICAgICBzZWxlY3RvckV4Y2x1ZGU6IG51bGwsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IG51bGwsXHJcbiAgICAgICAgc2Nyb2xsQ29udGFpbmVyOiB3aW5kb3csXHJcbiAgICAgICAgb25Tb3J0OiBmdW5jdGlvbihsaXN0LCBsaXN0RWwsIHBhcmVudEVsLCBuZXdJbnB1dEVsLCBpbnB1dEVsKSB7XHJcbiAgICAgICAgICAgIC8vIG9uU29ydCBjYWxsYmFja1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuJCgnI011bHRpX0ltYWdlcywgLk11bHRpX0ltYWdlcycpLmZpbGV1cGxvYWRlcih7XHJcbiAgICBleHRlbnNpb25zOiBbJ2pwZycsICdqcGVnJywgJ3BuZycsICdnaWYnLCAnYm1wJ10sXHJcbiAgICBjaGFuZ2VJbnB1dDogJyAnLFxyXG4gICAgdGhlbWU6ICd0aHVtYm5haWxzJyxcclxuICAgIGVuYWJsZUFwaTogdHJ1ZSxcclxuICAgIGFkZE1vcmU6IHRydWUsXHJcbiAgICBkcmFnRHJvcDoge1xyXG4gICAgICAgIC8vIHNldCB0aGUgZHJvcCBjb250YWluZXIge251bGwsIFN0cmluZywgalF1ZXJ5IE9iamVjdH1cclxuICAgICAgICAvLyBleGFtcGxlOiAnYm9keSdcclxuICAgICAgICBjb250YWluZXI6IG51bGwsXHJcbiAgICBcclxuICAgICAgICAvLyBDYWxsYmFjayBmaXJlZCBvbiBlbnRlcmluZyB3aXRoIGRyYWdnaW5nIGZpbGVzIHRoZSBkcm9wIGNvbnRhaW5lclxyXG4gICAgICAgIG9uRHJhZ0VudGVyOiBmdW5jdGlvbihldmVudCwgbGlzdEVsLCBwYXJlbnRFbCwgbmV3SW5wdXRFbCwgaW5wdXRFbCkge1xyXG4gICAgICAgICAgICAvLyBjYWxsYmFjayB3aWxsIGdvIGhlcmVcclxuICAgICAgICB9LFxyXG4gICAgXHJcbiAgICAgICAgLy8gQ2FsbGJhY2sgZmlyZWQgb24gbGVhdmluZyB3aXRoIGRyYWdnaW5nIGZpbGVzIHRoZSBkcm9wIGNvbnRhaW5lclxyXG4gICAgICAgIG9uRHJhZ0xlYXZlOiBmdW5jdGlvbihldmVudCwgbGlzdEVsLCBwYXJlbnRFbCwgbmV3SW5wdXRFbCwgaW5wdXRFbCkge1xyXG4gICAgICAgICAgICAvLyBjYWxsYmFjayB3aWxsIGdvIGhlcmVcclxuICAgICAgICB9LFxyXG4gICAgXHJcbiAgICAgICAgLy8gQ2FsbGJhY2sgZmlyZWQgb24gZHJvcHBpbmcgdGhlIGZpbGVzIGluIHRoZSBkcm9wIGNvbnRhaW5lclxyXG4gICAgICAgIG9uRHJvcDogZnVuY3Rpb24oZXZlbnQsIGxpc3RFbCwgcGFyZW50RWwsIG5ld0lucHV0RWwsIGlucHV0RWwpIHtcclxuICAgICAgICAgICAgLy8gY2FsbGJhY2sgd2lsbCBnbyBoZXJlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNvcnRlcjoge1xyXG4gICAgICAgIHNlbGVjdG9yRXhjbHVkZTogbnVsbCxcclxuICAgICAgICBwbGFjZWhvbGRlcjogbnVsbCxcclxuICAgICAgICBzY3JvbGxDb250YWluZXI6IHdpbmRvdyxcclxuICAgICAgICBvblNvcnQ6IGZ1bmN0aW9uKGxpc3QsIGxpc3RFbCwgcGFyZW50RWwsIG5ld0lucHV0RWwsIGlucHV0RWwpIHtcclxuICAgICAgICAgICAgLy8gb25Tb3J0IGNhbGxiYWNrXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRodW1ibmFpbHM6IHtcclxuICAgICAgICBvbkl0ZW1TaG93OiBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgIC8vIGFkZCBzb3J0ZXIgYnV0dG9uIHRvIHRoZSBpdGVtIGh0bWw8aSBjbGFzcz1cImZhcyBmYS1zb3J0XCI+PC9pPlxyXG4gICAgICAgICAgICBpdGVtLmh0bWwuZmluZCgnLmZpbGV1cGxvYWRlci1hY3Rpb24tcmVtb3ZlJykuYmVmb3JlKCc8YSBjbGFzcz1cImZpbGV1cGxvYWRlci1hY3Rpb24gZmlsZXVwbG9hZGVyLWFjdGlvbi1zb3J0IGZhcyBmYS1zb3J0XCIgdGl0bGU9XCJTb3J0XCI+PGk+PC9pPjwvYT4nKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJveDogJzxkaXYgY2xhc3M9XCJmaWxldXBsb2FkZXItaXRlbXNcIj4nICtcclxuICAgICAgICAgICAgICAgICAgJzx1bCBjbGFzcz1cImZpbGV1cGxvYWRlci1pdGVtcy1saXN0XCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAnPGxpIGNsYXNzPVwiZmlsZXVwbG9hZGVyLXRodW1ibmFpbHMtaW5wdXRcIj48ZGl2IGNsYXNzPVwiZmlsZXVwbG9hZGVyLXRodW1ibmFpbHMtaW5wdXQtaW5uZXJcIj4rPC9kaXY+PC9saT4nICtcclxuICAgICAgICAgICAgICAgICAgJzwvdWw+JyArXHJcbiAgICAgICAgICAgICAgJzwvZGl2PicsXHJcbiAgICAgICAgaXRlbTogJzxsaSBjbGFzcz1cImZpbGV1cGxvYWRlci1pdGVtXCI+JyArIFxyXG4gICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJmaWxldXBsb2FkZXItaXRlbS1pbm5lclwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidGh1bWJuYWlsLWhvbGRlclwiPiR7aW1hZ2V9PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJhY3Rpb25zLWhvbGRlclwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGEgY2xhc3M9XCJmaWxldXBsb2FkZXItYWN0aW9uIGZpbGV1cGxvYWRlci1hY3Rpb24tcmVtb3ZlXCIgdGl0bGU9XCIke2NhcHRpb25zLnJlbW92ZX1cIj48aSBjbGFzcz1cInJlbW92ZVwiPjwvaT48L2E+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImZpbGV1cGxvYWRlci1hY3Rpb24tcG9wdXBcIj48L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtaG9sZGVyXCI+JHtwcm9ncmVzc0Jhcn08L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgJzwvbGk+JyxcclxuICAgICAgICBpdGVtMjogJzxsaSBjbGFzcz1cImZpbGV1cGxvYWRlci1pdGVtXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImZpbGV1cGxvYWRlci1pdGVtLWlubmVyXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0aHVtYm5haWwtaG9sZGVyXCI+JHtpbWFnZX08L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImFjdGlvbnMtaG9sZGVyXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICc8YSBjbGFzcz1cImZpbGV1cGxvYWRlci1hY3Rpb24gZmlsZXVwbG9hZGVyLWFjdGlvbi1yZW1vdmVcIiB0aXRsZT1cIiR7Y2FwdGlvbnMucmVtb3ZlfVwiPjxpIGNsYXNzPVwicmVtb3ZlXCI+PC9pPjwvYT4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZmlsZXVwbG9hZGVyLWFjdGlvbi1wb3B1cFwiPjwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICc8L2xpPicsXHJcbiAgICAgICAgc3RhcnRJbWFnZVJlbmRlcmVyOiB0cnVlLFxyXG4gICAgICAgIGNhbnZhc0ltYWdlOiBmYWxzZSxcclxuICAgICAgICBfc2VsZWN0b3JzOiB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICcuZmlsZXVwbG9hZGVyLWl0ZW1zLWxpc3QnLFxyXG4gICAgICAgICAgICBpdGVtOiAnLmZpbGV1cGxvYWRlci1pdGVtJyxcclxuICAgICAgICAgICAgc3RhcnQ6ICcuZmlsZXVwbG9hZGVyLWFjdGlvbi1zdGFydCcsXHJcbiAgICAgICAgICAgIHJldHJ5OiAnLmZpbGV1cGxvYWRlci1hY3Rpb24tcmV0cnknLFxyXG4gICAgICAgICAgICBzb3J0ZXI6ICcuZmlsZXVwbG9hZGVyLWFjdGlvbi1zb3J0JyxcclxuICAgICAgICAgICAgcmVtb3ZlOiAnLmZpbGV1cGxvYWRlci1hY3Rpb24tcmVtb3ZlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25JdGVtU2hvdzogZnVuY3Rpb24oaXRlbSwgbGlzdEVsLCBwYXJlbnRFbCwgbmV3SW5wdXRFbCwgaW5wdXRFbCkge1xyXG4gICAgICAgICAgICB2YXIgcGx1c0lucHV0ID0gbGlzdEVsLmZpbmQoJy5maWxldXBsb2FkZXItdGh1bWJuYWlscy1pbnB1dCcpLFxyXG4gICAgICAgICAgICAgICAgYXBpID0gJC5maWxldXBsb2FkZXIuZ2V0SW5zdGFuY2UoaW5wdXRFbC5nZXQoMCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcGx1c0lucHV0Lmluc2VydEFmdGVyKGl0ZW0uaHRtbClbYXBpLmdldE9wdGlvbnMoKS5saW1pdCAmJiBhcGkuZ2V0Q2hvb3NlZEZpbGVzKCkubGVuZ3RoID49IGFwaS5nZXRPcHRpb25zKCkubGltaXQgPyAnaGlkZScgOiAnc2hvdyddKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihpdGVtLmZvcm1hdCA9PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmh0bWwuZmluZCgnLmZpbGV1cGxvYWRlci1pdGVtLWljb24nKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKGxpc3RFbCwgcGFyZW50RWwsIG5ld0lucHV0RWwsIGlucHV0RWwpIHtcclxuICAgICAgICB2YXIgcGx1c0lucHV0ID0gbGlzdEVsLmZpbmQoJy5maWxldXBsb2FkZXItdGh1bWJuYWlscy1pbnB1dCcpLFxyXG4gICAgICAgICAgICBhcGkgPSAkLmZpbGV1cGxvYWRlci5nZXRJbnN0YW5jZShpbnB1dEVsLmdldCgwKSk7XHJcbiAgICBcclxuICAgICAgICBwbHVzSW5wdXQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGFwaS5vcGVuKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmU6IGZ1bmN0aW9uKGl0ZW0sIGxpc3RFbCwgcGFyZW50RWwsIG5ld0lucHV0RWwsIGlucHV0RWwpIHtcclxuICAgICAgICB2YXIgcGx1c0lucHV0ID0gbGlzdEVsLmZpbmQoJy5maWxldXBsb2FkZXItdGh1bWJuYWlscy1pbnB1dCcpLFxyXG4gICAgICAgICAgICBhcGkgPSAkLmZpbGV1cGxvYWRlci5nZXRJbnN0YW5jZShpbnB1dEVsLmdldCgwKSk7XHJcbiAgICBcclxuICAgICAgICBpZiAoYXBpLmdldE9wdGlvbnMoKS5saW1pdCAmJiBhcGkuZ2V0Q2hvb3NlZEZpbGVzKCkubGVuZ3RoIC0gMSA8IGFwaS5nZXRPcHRpb25zKCkubGltaXQpXHJcbiAgICAgICAgICAgIHBsdXNJbnB1dC5zaG93KCk7XHJcbiAgICB9LFxyXG4gICAgLypcclxuICAgIC8vIHdoaWxlIHVzaW5nIHVwbG9hZCBvcHRpb24sIHBsZWFzZSBzZXRcclxuICAgIC8vIHN0YXJ0SW1hZ2VSZW5kZXJlcjogZmFsc2VcclxuICAgIC8vIGZvciBhIGJldHRlciBlZmZlY3RcclxuICAgIHVwbG9hZDoge1xyXG4gICAgICAgIHVybDogJy4vcGhwL3VwbG9hZF9maWxlLnBocCcsXHJcbiAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZW5jdHlwZTogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxyXG4gICAgICAgIHN0YXJ0OiB0cnVlLFxyXG4gICAgICAgIHN5bmNocm9uOiB0cnVlLFxyXG4gICAgICAgIGJlZm9yZVNlbmQ6IG51bGwsXHJcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbihkYXRhLCBpdGVtKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmh0bWwuZmluZCgnLnByb2dyZXNzLWhvbGRlcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucmVuZGVyVGh1bWJuYWlsKCk7XHJcbiAgICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uaHRtbC5maW5kKCcucHJvZ3Jlc3MtaG9sZGVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICBpdGVtLmh0bWwuZmluZCgnLmZpbGV1cGxvYWRlci1pdGVtLWljb24gaScpLnRleHQoJ0ZhaWxlZCEnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M6IGZ1bmN0aW9uKGRhdGEsIGl0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIHByb2dyZXNzQmFyID0gaXRlbS5odG1sLmZpbmQoJy5wcm9ncmVzcy1ob2xkZXInKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHByb2dyZXNzQmFyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnNob3coKTtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmZpbmQoJy5maWxldXBsb2FkZXItcHJvZ3Jlc3NiYXIgLmJhcicpLndpZHRoKGRhdGEucGVyY2VudGFnZSArIFwiJVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmFnRHJvcDoge1xyXG4gICAgICAgIGNvbnRhaW5lcjogJy5maWxldXBsb2FkZXItdGh1bWJuYWlscy1pbnB1dCdcclxuICAgIH0sXHJcbiAgICBvblJlbW92ZTogZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICQucG9zdCgncGhwL3VwbG9hZF9yZW1vdmUucGhwJywge1xyXG4gICAgICAgICAgICBmaWxlOiBpdGVtLm5hbWVcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAqL1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbi8vICQoJyNNdWx0aV9JbWFnZXMsIC5NdWx0aV9JbWFnZXMnKS5maWxldXBsb2FkZXIoe1xyXG4vLyAgICAgZXh0ZW5zaW9uczogWydqcGcnLCAnanBlZycsICdwbmcnLCAnZ2lmJywgJ2JtcCddLFxyXG4vLyAgICAgY2hhbmdlSW5wdXQ6ICcgJyxcclxuLy8gICAgIHRoZW1lOiAndGh1bWJuYWlscycsXHJcbi8vICAgICBlbmFibGVBcGk6IHRydWUsXHJcbi8vICAgICBhZGRNb3JlOiB0cnVlLFxyXG4vLyAgICAgdGh1bWJuYWlsczoge1xyXG4vLyAgICAgICAgIGJveDogJzxkaXYgY2xhc3M9XCJmaWxldXBsb2FkZXItaXRlbXNcIj4nICtcclxuLy8gICAgICAgICAgICAgICAgICAgJzx1bCBjbGFzcz1cImZpbGV1cGxvYWRlci1pdGVtcy1saXN0XCI+JyArXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAnPGxpIGNsYXNzPVwiZmlsZXVwbG9hZGVyLXRodW1ibmFpbHMtaW5wdXRcIj48ZGl2IGNsYXNzPVwiZmlsZXVwbG9hZGVyLXRodW1ibmFpbHMtaW5wdXQtaW5uZXJcIj4rPC9kaXY+PC9saT4nICtcclxuLy8gICAgICAgICAgICAgICAgICAgJzwvdWw+JyArXHJcbi8vICAgICAgICAgICAgICAgJzwvZGl2PicsXHJcbi8vICAgICAgICAgaXRlbTogJzxsaSBjbGFzcz1cImZpbGV1cGxvYWRlci1pdGVtXCI+JyArXHJcbi8vICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImZpbGV1cGxvYWRlci1pdGVtLWlubmVyXCI+JyArXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0aHVtYm5haWwtaG9sZGVyXCI+JHtpbWFnZX08L2Rpdj4nICtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImFjdGlvbnMtaG9sZGVyXCI+JyArXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8YSBjbGFzcz1cImZpbGV1cGxvYWRlci1hY3Rpb24gZmlsZXVwbG9hZGVyLWFjdGlvbi1yZW1vdmVcIiB0aXRsZT1cIiR7Y2FwdGlvbnMucmVtb3ZlfVwiPjxpIGNsYXNzPVwicmVtb3ZlXCI+PC9pPjwvYT4nICtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZmlsZXVwbG9hZGVyLWFjdGlvbi1wb3B1cFwiPjwvc3Bhbj4nICtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwcm9ncmVzcy1ob2xkZXJcIj4ke3Byb2dyZXNzQmFyfTwvZGl2PicgK1xyXG4vLyAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4vLyAgICAgICAgICAgICAgICAnPC9saT4nLFxyXG4vLyAgICAgICAgIGl0ZW0yOiAnPGxpIGNsYXNzPVwiZmlsZXVwbG9hZGVyLWl0ZW1cIj4nICtcclxuLy8gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZmlsZXVwbG9hZGVyLWl0ZW0taW5uZXJcIj4nICtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRodW1ibmFpbC1ob2xkZXJcIj4ke2ltYWdlfTwvZGl2PicgK1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYWN0aW9ucy1ob2xkZXJcIj4nICtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxhIGNsYXNzPVwiZmlsZXVwbG9hZGVyLWFjdGlvbiBmaWxldXBsb2FkZXItYWN0aW9uLXJlbW92ZVwiIHRpdGxlPVwiJHtjYXB0aW9ucy5yZW1vdmV9XCI+PGkgY2xhc3M9XCJyZW1vdmVcIj48L2k+PC9hPicgK1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJmaWxldXBsb2FkZXItYWN0aW9uLXBvcHVwXCI+PC9zcGFuPicgK1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuLy8gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuLy8gICAgICAgICAgICAgICAgJzwvbGk+JyxcclxuLy8gICAgICAgICBzdGFydEltYWdlUmVuZGVyZXI6IHRydWUsXHJcbi8vICAgICAgICAgY2FudmFzSW1hZ2U6IGZhbHNlLFxyXG4vLyAgICAgICAgIF9zZWxlY3RvcnM6IHtcclxuLy8gICAgICAgICAgICAgbGlzdDogJy5maWxldXBsb2FkZXItaXRlbXMtbGlzdCcsXHJcbi8vICAgICAgICAgICAgIGl0ZW06ICcuZmlsZXVwbG9hZGVyLWl0ZW0nLFxyXG4vLyAgICAgICAgICAgICBzdGFydDogJy5maWxldXBsb2FkZXItYWN0aW9uLXN0YXJ0JyxcclxuLy8gICAgICAgICAgICAgcmV0cnk6ICcuZmlsZXVwbG9hZGVyLWFjdGlvbi1yZXRyeScsXHJcbi8vICAgICAgICAgICAgIHJlbW92ZTogJy5maWxldXBsb2FkZXItYWN0aW9uLXJlbW92ZSdcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIG9uSXRlbVNob3c6IGZ1bmN0aW9uKGl0ZW0sIGxpc3RFbCwgcGFyZW50RWwsIG5ld0lucHV0RWwsIGlucHV0RWwpIHtcclxuLy8gICAgICAgICAgICAgdmFyIHBsdXNJbnB1dCA9IGxpc3RFbC5maW5kKCcuZmlsZXVwbG9hZGVyLXRodW1ibmFpbHMtaW5wdXQnKSxcclxuLy8gICAgICAgICAgICAgICAgIGFwaSA9ICQuZmlsZXVwbG9hZGVyLmdldEluc3RhbmNlKGlucHV0RWwuZ2V0KDApKTtcclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgIHBsdXNJbnB1dC5pbnNlcnRBZnRlcihpdGVtLmh0bWwpW2FwaS5nZXRPcHRpb25zKCkubGltaXQgJiYgYXBpLmdldENob29zZWRGaWxlcygpLmxlbmd0aCA+PSBhcGkuZ2V0T3B0aW9ucygpLmxpbWl0ID8gJ2hpZGUnIDogJ3Nob3cnXSgpO1xyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgaWYoaXRlbS5mb3JtYXQgPT0gJ2ltYWdlJykge1xyXG4vLyAgICAgICAgICAgICAgICAgaXRlbS5odG1sLmZpbmQoJy5maWxldXBsb2FkZXItaXRlbS1pY29uJykuaGlkZSgpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSxcclxuLy8gICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihsaXN0RWwsIHBhcmVudEVsLCBuZXdJbnB1dEVsLCBpbnB1dEVsKSB7XHJcbi8vICAgICAgICAgdmFyIHBsdXNJbnB1dCA9IGxpc3RFbC5maW5kKCcuZmlsZXVwbG9hZGVyLXRodW1ibmFpbHMtaW5wdXQnKSxcclxuLy8gICAgICAgICAgICAgYXBpID0gJC5maWxldXBsb2FkZXIuZ2V0SW5zdGFuY2UoaW5wdXRFbC5nZXQoMCkpO1xyXG4gICAgXHJcbi8vICAgICAgICAgcGx1c0lucHV0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgICAgICBhcGkub3BlbigpO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfSxcclxuLy8gICAgIG9uUmVtb3ZlOiBmdW5jdGlvbihpdGVtLCBsaXN0RWwsIHBhcmVudEVsLCBuZXdJbnB1dEVsLCBpbnB1dEVsKSB7XHJcbi8vICAgICAgICAgdmFyIHBsdXNJbnB1dCA9IGxpc3RFbC5maW5kKCcuZmlsZXVwbG9hZGVyLXRodW1ibmFpbHMtaW5wdXQnKSxcclxuLy8gICAgICAgICAgICAgYXBpID0gJC5maWxldXBsb2FkZXIuZ2V0SW5zdGFuY2UoaW5wdXRFbC5nZXQoMCkpO1xyXG4gICAgXHJcbi8vICAgICAgICAgaWYgKGFwaS5nZXRPcHRpb25zKCkubGltaXQgJiYgYXBpLmdldENob29zZWRGaWxlcygpLmxlbmd0aCAtIDEgPCBhcGkuZ2V0T3B0aW9ucygpLmxpbWl0KVxyXG4vLyAgICAgICAgICAgICBwbHVzSW5wdXQuc2hvdygpO1xyXG4vLyAgICAgfSxcclxuLy8gICAgIC8qXHJcbi8vICAgICAvLyB3aGlsZSB1c2luZyB1cGxvYWQgb3B0aW9uLCBwbGVhc2Ugc2V0XHJcbi8vICAgICAvLyBzdGFydEltYWdlUmVuZGVyZXI6IGZhbHNlXHJcbi8vICAgICAvLyBmb3IgYSBiZXR0ZXIgZWZmZWN0XHJcbi8vICAgICB1cGxvYWQ6IHtcclxuLy8gICAgICAgICB1cmw6ICcuL3BocC91cGxvYWRfZmlsZS5waHAnLFxyXG4vLyAgICAgICAgIGRhdGE6IG51bGwsXHJcbi8vICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4vLyAgICAgICAgIGVuY3R5cGU6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuLy8gICAgICAgICBzdGFydDogdHJ1ZSxcclxuLy8gICAgICAgICBzeW5jaHJvbjogdHJ1ZSxcclxuLy8gICAgICAgICBiZWZvcmVTZW5kOiBudWxsLFxyXG4vLyAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24oZGF0YSwgaXRlbSkge1xyXG4vLyAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgICAgICAgICAgaXRlbS5odG1sLmZpbmQoJy5wcm9ncmVzcy1ob2xkZXInKS5oaWRlKCk7XHJcbi8vICAgICAgICAgICAgICAgICBpdGVtLnJlbmRlclRodW1ibmFpbCgpO1xyXG4vLyAgICAgICAgICAgICB9LCA0MDApO1xyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgb25FcnJvcjogZnVuY3Rpb24oaXRlbSkge1xyXG4vLyAgICAgICAgICAgICBpdGVtLmh0bWwuZmluZCgnLnByb2dyZXNzLWhvbGRlcicpLmhpZGUoKTtcclxuLy8gICAgICAgICAgICAgaXRlbS5odG1sLmZpbmQoJy5maWxldXBsb2FkZXItaXRlbS1pY29uIGknKS50ZXh0KCdGYWlsZWQhJyk7XHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBvblByb2dyZXNzOiBmdW5jdGlvbihkYXRhLCBpdGVtKSB7XHJcbi8vICAgICAgICAgICAgIHZhciBwcm9ncmVzc0JhciA9IGl0ZW0uaHRtbC5maW5kKCcucHJvZ3Jlc3MtaG9sZGVyJyk7XHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICBpZihwcm9ncmVzc0Jhci5sZW5ndGggPiAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5zaG93KCk7XHJcbi8vICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5maW5kKCcuZmlsZXVwbG9hZGVyLXByb2dyZXNzYmFyIC5iYXInKS53aWR0aChkYXRhLnBlcmNlbnRhZ2UgKyBcIiVcIik7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9LFxyXG4vLyAgICAgZHJhZ0Ryb3A6IHtcclxuLy8gICAgICAgICBjb250YWluZXI6ICcuZmlsZXVwbG9hZGVyLXRodW1ibmFpbHMtaW5wdXQnXHJcbi8vICAgICB9LFxyXG4vLyAgICAgb25SZW1vdmU6IGZ1bmN0aW9uKGl0ZW0pIHtcclxuLy8gICAgICAgICAkLnBvc3QoJ3BocC91cGxvYWRfcmVtb3ZlLnBocCcsIHtcclxuLy8gICAgICAgICAgICAgZmlsZTogaXRlbS5uYW1lXHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9LFxyXG4vLyAgICAgKi9cclxuLy8gfSk7XHJcblxyXG5cclxuJCgnLkRpc3BsYXktSW5wdXQtTW9kaWZpY2FibGUnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZGlzcGxheS1pbnB1dC1kaXNhYmxlZCcpOyBcclxufSk7XHJcblxyXG5cclxuLy8gLS0tLSBNb2RpZmljYWJsZSBpbnB1dCB0ZXh0XHJcbi8vIEh0bWwgZWxlbWVudFxyXG4vLzxwIGRhdGEtZWRpdGFibGUgY2xhc3M9XCJTbHVnSW5wdXRcIj57eyAkYXJ0aWNsZS0+c2x1ZyB9fTwvcD4gICBcclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtZWRpdGFibGVdJywgZnVuY3Rpb24oKXtcclxuICBcclxuICAgIHZhciAkZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICB2YXIgJGlucHV0ID0gJCgnPGlucHV0Lz4nKS52YWwoICRlbC50ZXh0KCkgKTtcclxuICAgICRlbC5yZXBsYWNlV2l0aCggJGlucHV0ICk7XHJcbiAgICBcclxuICAgIHZhciBzYXZlID0gZnVuY3Rpb24oKXtcclxuICAgICAgdmFyICRwID0gJCgnPHAgZGF0YS1lZGl0YWJsZSAvPicpLnRleHQoICRpbnB1dC52YWwoKSApO1xyXG4gICAgICAkaW5wdXQucmVwbGFjZVdpdGgoICRwICk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAgV2UncmUgZGVmaW5pbmcgdGhlIGNhbGxiYWNrIHdpdGggYG9uZWAsIGJlY2F1c2Ugd2Uga25vdyB0aGF0XHJcbiAgICAgIHRoZSBlbGVtZW50IHdpbGwgYmUgZ29uZSBqdXN0IGFmdGVyIHRoYXQsIGFuZCB3ZSBkb24ndCB3YW50IFxyXG4gICAgICBhbnkgY2FsbGJhY2tzIGxlZnRvdmVycyB0YWtlIG1lbW9yeS4gXHJcbiAgICAgIE5leHQgdGltZSBgcGAgdHVybnMgaW50byBgaW5wdXRgIHRoaXMgc2luZ2xlIGNhbGxiYWNrIFxyXG4gICAgICB3aWxsIGJlIGFwcGxpZWQgYWdhaW4uXHJcbiAgICAqL1xyXG4gICAgJGlucHV0Lm9uZSgnYmx1cicsIHNhdmUpLmZvY3VzKCk7XHJcbiAgICBcclxuICB9KTtcclxuICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZhZG1pbi1mb3Jtcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=