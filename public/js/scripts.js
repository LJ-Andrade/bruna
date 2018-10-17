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
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
/******/ })
/************************************************************************/
/******/ ({

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ }),

/***/ 73:
/***/ (function(module, exports) {

// Loaders
// -------------------------------------------
$(".loader-on-change").on('change', function () {
    $('#full-loader').removeClass('Hidden');
    return true;
});

$(".loader-on-submit").on('submit', function () {
    $('#full-loader').removeClass('Hidden');
    return true;
});

$('.dont-submit-on-enter, .dson').keypress(function (e) {
    console.log("ENTER");
    if (e.which == 13) return false;
    if (e.which == 13) e.preventDefault();
});

// Modify cart item quantity 
// -------------------------------------------
$('.InputBtnQ').on('change keyup', function () {
    //  Original Article Price
    var value = $(this).siblings('.ArticlePrice').val();
    // Quantity
    var quantity = $(this).val();
    // Ner Value
    var newValue = value * quantity;
    // New Price Target
    var newPriceTarget = $(this).parent().parent().parent().siblings('.TotalItemPrice');

    console.log(value, quantity, newValue);
    modifyCartItemQ($(this), newPriceTarget, newValue);
});

function modifyCartItemQ(e, newPriceTarget, newValue) {
    e.siblings('.InputBtnQ').removeClass('Hidden');
    newPriceTarget.html('$ ' + newValue);
}

// Checkout sidebar
// -------------------------------------------		
window.checkoutSidebar = function (state) {

    var sidebar = $('#CheckoutSidebar');
    var content = $('#MainContent');

    var show = function show() {
        sidebar.addClass('active');
        content.addClass('col-xs-12 col-lg-9 fix-column fix-column-small');
    };

    var hide = function hide() {
        content.removeClass('col-lg-9 col-sm-8 col-md-8 fix-column fix-column-small');
        sidebar.removeClass('active');
    };

    if (state == undefined) {
        if (sidebar.hasClass('active')) {
            hide();
        } else {
            show();
        }
    } else if (state == 'show') {
        show();
        return false;
    } else if (state == 'hide') {
        hide();
        return false;
    }
};

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    if (scroll > 125) {
        $('.side-container').addClass('scrolled');
    } else {
        $('.side-container').removeClass('scrolled');
    }
});

// Sidebar checkout absolute
// window.checkoutSidebar = function (action) {
//     if (action == 'open') {
//         $('#SideContainer').toggle(100);
//         $('#MainOverlay').fadeIn(100);
//     }
//     if (action == 'close') {
//         $('#SideContainer').toggle(100);
//         $('#MainOverlay').fadeOut(100);
//     }
// }

// $('#MainOverlay').click(function () {
//     checkoutSidebar("close");
// });

window.openFilters = function () {
    var filters = $('#SearchFilters');
    if (filters.css('display') == 'none') {
        filters.css('display', 'inherit');
    } else {
        filters.css('display', 'none');
    }
};

// Hide alerts
// -------------------------------------------
// setTimeout(function(){
//     $('.alert').hide(100);
// }, 4000);


// Cart Resumen
// -------------------------------------------

// window.showCartResumeMobile = function()
// {
//     $('.cart-resume-details-mobile').toggleClass('Hidden', 100);
// }

/*
|--------------------------------------------------------------------------
| CART
|--------------------------------------------------------------------------
*/

window.sumAllItems = function () {
    sum = 0;
    $('.TotalItemPrice').each(function (index) {
        sum += parseInt($(this).html());
    });
    $('.SubTotal').html(sum);
};

// Sum divs text
window.sumDivs = function (origins, target) {
    var sum = 0;
    origins.each(function () {
        sum += parseFloat($(this).text());
    });
    target.text(sum);
};

// Set cart items JSON
// -------------------------------------------
window.setItemsData = function () {
    itemData = [];

    $('.Item-Data').each(function () {
        var id = $(this).data('id');
        var price = $(this).data('price');
        var quantity = $(this).val();

        item = {};
        item['id'] = id;
        item['price'] = price;
        item['quantity'] = quantity;
        // Update display total item price
        total = price * quantity;
        $('.' + id + '-TotalItemPrice').html(total);

        itemData.push(item);
    });
    // Update Total
    console.info(itemData);
    sumAllItems();
    $('#Items-Data').val(itemData);
};

// Add product to cart
// -------------------------------------------
window.addToCart = function (route, data) {
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: data,
        success: function success(data) {
            console.log(data);
            if (data.response == 'success') {
                toast_success('Ok!', data.message, 'bottomCenter', '', 2500);
                updateTotals();
                setItemsData();
                checkoutSidebar('show');
                setTimeout(function () {
                    setItemsData();
                    sumAllItems();
                }, 100);
            } else if (data.response == 'warning') {
                toast_success('Ups!', data.message, 'bottomCenter');
            }
        },
        error: function error(data) {
            //$('#Error').html(data.responseText);
            console.log("Error en addtoCart()");
            location.reload();
            console.log(data);
        }
    });
};

// Remove product from cart
// -------------------------------------------
window.removeFromCart = function (route, id, quantity, div, action) {
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { itemid: id, quantity: quantity, action: action, method: 'ajax' },
        success: function success(data) {
            if (data.response == 'cart-removed') {
                console.log(data);
                updateTotals();
                window.location = window.location.href.split("?")[0];
                setItemsData();
            } else if (data.response == 'success') {
                $(div).hide(100);
                $(div).remove();
                updateTotals();
                console.log(div);
                setItemsData();
            }
        },
        error: function error(data) {
            //$('#Error').html(data.responseText);
            console.log("Error en removeFromCart()");
            console.log(data);
            // If an error pops when destroying an item, reload and prevent bad magic
            location.reload();
        }
    });
};

function updateTotals() {
    // Live Reloading stuff
    $("#SideContainerItems").load(window.location.href + " #SideContainerItems");
    $(".TotalCartItems").load(window.location.href + " .TotalCartItems");
    $(".TotalCartItemsSidebar").load(window.location.href + " .TotalCartItemsSidebar");
    $(".CartSubTotal").load(window.location.href + " .CartSubTotal");
    $(".AvailableStock").load(window.location.href + " .AvailableStock");
}

// Submit Form
// -------------------------------------------
window.submitForm = function (route, target, data, action) {
    // console.log("Ruta: " + route + " Target: " + target + " Data: " + data + "Action: "+ action);
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { data: data, action: action },
        success: function success(data) {
            console.log(data);
            if (data.response == 'success') {
                console.log(target);
                if (target == 'reload') {
                    // Refresh page, delete parametters and open checkout sidebar
                    window.location = window.location.href.split("?")[0] + "?checkout-on";
                } else {
                    window.location.href = target;
                }
            } else {
                console.log('Error en submitForm');
                console.log(data);
                toast_error('', data.message, 'bottomCenter', '');
                $('.SideContainerError').html(data.message);
                // $('#Error').html(data.responseText);
            }
            $('#Error').html(data.responseText);
        },
        error: function error(data) {
            // $('#Error').html(data.responseText);
            console.log("Error en submitForm()");
            console.log(data);
            location.reload();
        }
    });
};

// Validate and set coupon
// -------------------------------------------
window.validateAndSetCoupon = function (route, code, cartid) {
    var couponDiv = $('#CouponDiv');
    var couponSet = $('#SettedCoupon');
    console.log(code, cartid);
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { code: code, cartid: cartid },
        beforeSend: function beforeSend() {
            console.log("Comprobando cupón...");
            $('.CouponLoader').removeClass('Hidden');
        },
        success: function success(data) {
            if (data.response == true) {
                $('#CouponValidationMessage').html("Cupón aceptado !");
                couponDiv.hide(200, function () {
                    couponSet.removeClass('Hidden');
                });
                location.reload();
            } else if (data.response == null) {
                $('#CouponValidationMessage').html(data.message);
            }
        },
        error: function error(data) {
            $('#CouponValidationMessage').html(data.responseText);
            console.log(data);
        },
        complete: function complete() {
            $('.CouponLoader').addClass('Hidden');
        }
    });
};

// Favs
// -------------------------------------------
window.addArticleToFavs = function (route, favid, articleid, action, displayButton) {
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { fav_id: favid, article_id: articleid },
        success: function success(data) {
            if (data.response == true && data.result == 'added') {
                switch (action) {
                    case 'reload':
                        location.reload();
                        break;
                    case 'show':
                        displayButton.removeClass('fav-icon-nofav');
                        displayButton.addClass('fav-icon-isfav');
                        toast_success('Ok!', 'Producto agregado a favoritos', 'bottomCenter', '', 1000);
                        break;
                    case 'none':
                        console.log('Actualizado - Sin Acción');
                    default:
                        console.log('No hay acción');
                        break;
                }
            } else if (data.response == true && data.result == 'removed') {
                displayButton.addClass('fav-icon-nofav');
                displayButton.removeClass('fav-icon-isfav');
                toast_success('Ok!', 'Producto eliminado de favoritos', 'bottomCenter', '', 1000);
            }
            setFavsTotalIcon(data.favsCount);
        },
        error: function error(data) {
            $('#Error').html(data.responseText);
            console.log(data);
        }
    });
};

function setFavsTotalIcon(favs) {
    if (favs > 0) {
        $('.FavMainIcon').removeClass('far');
        $('.FavMainIcon').addClass('fa');
    } else if (favs == 0) {
        $('.FavMainIcon').removeClass('fa');
        $('.FavMainIcon').addClass('far');
    } else {
        $('.FavMainIcon').removeClass('fa');
        $('.FavMainIcon').removeClass('far');
        $('.FavMainIcon').addClass('fa');
        console.log("Error en setFavsTotalIcon()");
    }
}

window.removeArticleFromFavs = function (route, favid, action) {
    var doaction = action;
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { fav_id: favid },
        success: function success(data) {
            $('#Error').html(data.responseText);
            console.log(data);
            if (data.response == true) {
                console.log(doaction);
                switch (doaction) {
                    case 'reload':
                        var action = 'reload';
                        toast_success('Ok!', 'Producto eliminado de favoritos', 'bottomCenter', action, 1000);
                        break;
                    default:
                        console.log('No hay acción');
                        break;
                }
            } else {
                //$('#Error').html(data.message['errorInfo']);
                console.log(data);
            }
        },
        error: function error(data) {
            //$('#Error').html(data.responseText);
            console.log(data);
        }
    });
};

window.removeAllArticlesFromFavs = function (route, customerid, action) {
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { customer_id: customerid },
        success: function success(data) {
            console.log(data);
            //$('#Error').html(data.responseText);
            if (data.response == true) {
                switch (action) {
                    case 'reload':
                        location.reload();
                        break;
                    default:
                        console.log('No hay acción');
                        break;
                }
            } else {
                $('#Error').html(data.message['errorInfo']);
                console.log(data);
            }
        },
        error: function error(data) {
            //$('#Error').html(data.responseText);
            console.log(data);
        }
    });
};

/*
|--------------------------------------------------------------------------
| LOGIN AND REGISTER
|--------------------------------------------------------------------------
*/

$('#ResellerBox').hide();

window.openResellerRegistration = function () {
    $('#IsResellerCheckbox').prop('checked', true);
    $('.IfResellerEnable').prop('disabled', false);
    $('#ResellerBox').show(100);
    $('#ResellerCTA').hide(0);
    $('.NormaClientTitle').hide(0);
    $('.ResellerTitle').show(0);
};

window.closeResellerRegistration = function () {
    $('#IsResellerCheckbox').prop('checked', false);
    $('.IfResellerEnable').prop('disabled', true);
    $('#ResellerBox').hide(0);
    $('#ResellerCTA').show(100);
    $('.NormaClientTitle').show(0);
    $('.ResellerTitle').hide(0);
};

$(document).ready(function () {
    $('.GeoProvSelect').on('change', function () {
        var prov_id = $(this).val();
        getGeoLocs(prov_id);
    });
});

/*
|--------------------------------------------------------------------------
| GENERIC FUNCTIONS
|--------------------------------------------------------------------------
*/

window.closeElement = function (selector) {
    $(selector).hide(100);
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjMwMTc0NmI0ZWViODMwNzQ4NzgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbIiQiLCJvbiIsInJlbW92ZUNsYXNzIiwia2V5cHJlc3MiLCJlIiwiY29uc29sZSIsImxvZyIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsInNpYmxpbmdzIiwidmFsIiwicXVhbnRpdHkiLCJuZXdWYWx1ZSIsIm5ld1ByaWNlVGFyZ2V0IiwicGFyZW50IiwibW9kaWZ5Q2FydEl0ZW1RIiwiaHRtbCIsIndpbmRvdyIsImNoZWNrb3V0U2lkZWJhciIsInN0YXRlIiwic2lkZWJhciIsImNvbnRlbnQiLCJzaG93IiwiYWRkQ2xhc3MiLCJoaWRlIiwidW5kZWZpbmVkIiwiaGFzQ2xhc3MiLCJzY3JvbGwiLCJldmVudCIsInNjcm9sbFRvcCIsIm9wZW5GaWx0ZXJzIiwiZmlsdGVycyIsImNzcyIsInN1bUFsbEl0ZW1zIiwic3VtIiwiZWFjaCIsImluZGV4IiwicGFyc2VJbnQiLCJzdW1EaXZzIiwib3JpZ2lucyIsInRhcmdldCIsInBhcnNlRmxvYXQiLCJ0ZXh0Iiwic2V0SXRlbXNEYXRhIiwiaXRlbURhdGEiLCJpZCIsImRhdGEiLCJwcmljZSIsIml0ZW0iLCJ0b3RhbCIsInB1c2giLCJpbmZvIiwiYWRkVG9DYXJ0Iiwicm91dGUiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJ0b2FzdF9zdWNjZXNzIiwibWVzc2FnZSIsInVwZGF0ZVRvdGFscyIsInNldFRpbWVvdXQiLCJlcnJvciIsImxvY2F0aW9uIiwicmVsb2FkIiwicmVtb3ZlRnJvbUNhcnQiLCJkaXYiLCJhY3Rpb24iLCJpdGVtaWQiLCJocmVmIiwic3BsaXQiLCJyZW1vdmUiLCJsb2FkIiwic3VibWl0Rm9ybSIsInRvYXN0X2Vycm9yIiwicmVzcG9uc2VUZXh0IiwidmFsaWRhdGVBbmRTZXRDb3Vwb24iLCJjb2RlIiwiY2FydGlkIiwiY291cG9uRGl2IiwiY291cG9uU2V0IiwiYmVmb3JlU2VuZCIsImNvbXBsZXRlIiwiYWRkQXJ0aWNsZVRvRmF2cyIsImZhdmlkIiwiYXJ0aWNsZWlkIiwiZGlzcGxheUJ1dHRvbiIsImZhdl9pZCIsImFydGljbGVfaWQiLCJyZXN1bHQiLCJzZXRGYXZzVG90YWxJY29uIiwiZmF2c0NvdW50IiwiZmF2cyIsInJlbW92ZUFydGljbGVGcm9tRmF2cyIsImRvYWN0aW9uIiwicmVtb3ZlQWxsQXJ0aWNsZXNGcm9tRmF2cyIsImN1c3RvbWVyaWQiLCJjdXN0b21lcl9pZCIsIm9wZW5SZXNlbGxlclJlZ2lzdHJhdGlvbiIsInByb3AiLCJjbG9zZVJlc2VsbGVyUmVnaXN0cmF0aW9uIiwiZG9jdW1lbnQiLCJyZWFkeSIsInByb3ZfaWQiLCJnZXRHZW9Mb2NzIiwiY2xvc2VFbGVtZW50Iiwic2VsZWN0b3IiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0FBLEVBQUUsbUJBQUYsRUFBdUJDLEVBQXZCLENBQTBCLFFBQTFCLEVBQW9DLFlBQVk7QUFDNUNELE1BQUUsY0FBRixFQUFrQkUsV0FBbEIsQ0FBOEIsUUFBOUI7QUFDQSxX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LE1BQUU2RyxRQUFGLEVBQVlwRixJQUFaLENBQWlCLEdBQWpCO0FBQ0gsQ0FIRCxDIiwiZmlsZSI6Ii9qcy9zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2MzAxNzQ2YjRlZWI4MzA3NDg3OCIsIi8vIExvYWRlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiQoXCIubG9hZGVyLW9uLWNoYW5nZVwiKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICQoJyNmdWxsLWxvYWRlcicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG4kKFwiLmxvYWRlci1vbi1zdWJtaXRcIikub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjZnVsbC1sb2FkZXInKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuJCgnLmRvbnQtc3VibWl0LW9uLWVudGVyLCAuZHNvbicpLmtleXByZXNzKGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc29sZS5sb2coXCJFTlRFUlwiKTtcbiAgICBpZiAoZS53aGljaCA9PSAxMykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChlLndoaWNoID09IDEzKSBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuLy8gTW9kaWZ5IGNhcnQgaXRlbSBxdWFudGl0eSBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiQoJy5JbnB1dEJ0blEnKS5vbignY2hhbmdlIGtleXVwJywgZnVuY3Rpb24gKCkge1xuICAgIC8vICBPcmlnaW5hbCBBcnRpY2xlIFByaWNlXG4gICAgbGV0IHZhbHVlID0gJCh0aGlzKS5zaWJsaW5ncygnLkFydGljbGVQcmljZScpLnZhbCgpO1xuICAgIC8vIFF1YW50aXR5XG4gICAgbGV0IHF1YW50aXR5ID0gJCh0aGlzKS52YWwoKTtcbiAgICAvLyBOZXIgVmFsdWVcbiAgICBsZXQgbmV3VmFsdWUgPSAodmFsdWUgKiBxdWFudGl0eSk7XG4gICAgLy8gTmV3IFByaWNlIFRhcmdldFxuICAgIGxldCBuZXdQcmljZVRhcmdldCA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuc2libGluZ3MoJy5Ub3RhbEl0ZW1QcmljZScpO1xuXG4gICAgY29uc29sZS5sb2codmFsdWUsIHF1YW50aXR5LCBuZXdWYWx1ZSk7XG4gICAgbW9kaWZ5Q2FydEl0ZW1RKCQodGhpcyksIG5ld1ByaWNlVGFyZ2V0LCBuZXdWYWx1ZSk7XG59KVxuXG5mdW5jdGlvbiBtb2RpZnlDYXJ0SXRlbVEoZSwgbmV3UHJpY2VUYXJnZXQsIG5ld1ZhbHVlKSB7XG4gICAgZS5zaWJsaW5ncygnLklucHV0QnRuUScpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcbiAgICBuZXdQcmljZVRhcmdldC5odG1sKCckICcgKyBuZXdWYWx1ZSk7XG59XG5cblxuLy8gQ2hlY2tvdXQgc2lkZWJhclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVx0XHRcbndpbmRvdy5jaGVja291dFNpZGViYXIgPSBmdW5jdGlvbiAoc3RhdGUpIHtcblxuICAgIGNvbnN0IHNpZGViYXIgPSAkKCcjQ2hlY2tvdXRTaWRlYmFyJyk7XG4gICAgY29uc3QgY29udGVudCA9ICQoJyNNYWluQ29udGVudCcpO1xuXG4gICAgY29uc3Qgc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2lkZWJhci5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIGNvbnRlbnQuYWRkQ2xhc3MoJ2NvbC14cy0xMiBjb2wtbGctOSBmaXgtY29sdW1uIGZpeC1jb2x1bW4tc21hbGwnKTtcbiAgICB9XG5cbiAgICBjb25zdCBoaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNsYXNzKCdjb2wtbGctOSBjb2wtc20tOCBjb2wtbWQtOCBmaXgtY29sdW1uIGZpeC1jb2x1bW4tc21hbGwnKTtcbiAgICAgICAgc2lkZWJhci5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuXG5cbiAgICBpZiAoc3RhdGUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChzaWRlYmFyLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvdygpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChzdGF0ZSA9PSAnc2hvdycpIHtcbiAgICAgICAgc2hvdygpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChzdGF0ZSA9PSAnaGlkZScpIHtcbiAgICAgICAgaGlkZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgIGlmIChzY3JvbGwgPiAxMjUpIHtcbiAgICAgICAgJCgnLnNpZGUtY29udGFpbmVyJykuYWRkQ2xhc3MoJ3Njcm9sbGVkJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAkKCcuc2lkZS1jb250YWluZXInKS5yZW1vdmVDbGFzcygnc2Nyb2xsZWQnKTtcbiAgICB9XG59KTtcblxuXG4vLyBTaWRlYmFyIGNoZWNrb3V0IGFic29sdXRlXG4vLyB3aW5kb3cuY2hlY2tvdXRTaWRlYmFyID0gZnVuY3Rpb24gKGFjdGlvbikge1xuLy8gICAgIGlmIChhY3Rpb24gPT0gJ29wZW4nKSB7XG4vLyAgICAgICAgICQoJyNTaWRlQ29udGFpbmVyJykudG9nZ2xlKDEwMCk7XG4vLyAgICAgICAgICQoJyNNYWluT3ZlcmxheScpLmZhZGVJbigxMDApO1xuLy8gICAgIH1cbi8vICAgICBpZiAoYWN0aW9uID09ICdjbG9zZScpIHtcbi8vICAgICAgICAgJCgnI1NpZGVDb250YWluZXInKS50b2dnbGUoMTAwKTtcbi8vICAgICAgICAgJCgnI01haW5PdmVybGF5JykuZmFkZU91dCgxMDApO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gJCgnI01haW5PdmVybGF5JykuY2xpY2soZnVuY3Rpb24gKCkge1xuLy8gICAgIGNoZWNrb3V0U2lkZWJhcihcImNsb3NlXCIpO1xuLy8gfSk7XG5cbndpbmRvdy5vcGVuRmlsdGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gJCgnI1NlYXJjaEZpbHRlcnMnKTtcbiAgICBpZiAoZmlsdGVycy5jc3MoJ2Rpc3BsYXknKSA9PSAnbm9uZScpIHtcbiAgICAgICAgZmlsdGVycy5jc3MoJ2Rpc3BsYXknLCAnaW5oZXJpdCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZmlsdGVycy5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIH1cbn1cblxuLy8gSGlkZSBhbGVydHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbi8vICAgICAkKCcuYWxlcnQnKS5oaWRlKDEwMCk7XG4vLyB9LCA0MDAwKTtcblxuXG4vLyBDYXJ0IFJlc3VtZW5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gd2luZG93LnNob3dDYXJ0UmVzdW1lTW9iaWxlID0gZnVuY3Rpb24oKVxuLy8ge1xuLy8gICAgICQoJy5jYXJ0LXJlc3VtZS1kZXRhaWxzLW1vYmlsZScpLnRvZ2dsZUNsYXNzKCdIaWRkZW4nLCAxMDApO1xuLy8gfVxuXG4vKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IENBUlRcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuXG53aW5kb3cuc3VtQWxsSXRlbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3VtID0gMDtcbiAgICAkKCcuVG90YWxJdGVtUHJpY2UnKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBzdW0gKz0gcGFyc2VJbnQoJCh0aGlzKS5odG1sKCkpO1xuICAgIH0pO1xuICAgICQoJy5TdWJUb3RhbCcpLmh0bWwoc3VtKTtcbn1cblxuXG4vLyBTdW0gZGl2cyB0ZXh0XG53aW5kb3cuc3VtRGl2cyA9IGZ1bmN0aW9uIChvcmlnaW5zLCB0YXJnZXQpIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBvcmlnaW5zLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBzdW0gKz0gcGFyc2VGbG9hdCgkKHRoaXMpLnRleHQoKSk7XG4gICAgfSk7XG4gICAgdGFyZ2V0LnRleHQoc3VtKTtcbn1cblxuXG4vLyBTZXQgY2FydCBpdGVtcyBKU09OXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG53aW5kb3cuc2V0SXRlbXNEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIGl0ZW1EYXRhID0gW107XG5cbiAgICAkKCcuSXRlbS1EYXRhJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcbiAgICAgICAgdmFyIHByaWNlID0gJCh0aGlzKS5kYXRhKCdwcmljZScpO1xuICAgICAgICB2YXIgcXVhbnRpdHkgPSAkKHRoaXMpLnZhbCgpO1xuXG4gICAgICAgIGl0ZW0gPSB7fVxuICAgICAgICBpdGVtWydpZCddID0gaWQ7XG4gICAgICAgIGl0ZW1bJ3ByaWNlJ10gPSBwcmljZTtcbiAgICAgICAgaXRlbVsncXVhbnRpdHknXSA9IHF1YW50aXR5O1xuICAgICAgICAvLyBVcGRhdGUgZGlzcGxheSB0b3RhbCBpdGVtIHByaWNlXG4gICAgICAgIHRvdGFsID0gcHJpY2UgKiBxdWFudGl0eTtcbiAgICAgICAgJCgnLicgKyBpZCArICctVG90YWxJdGVtUHJpY2UnKS5odG1sKHRvdGFsKTtcblxuICAgICAgICBpdGVtRGF0YS5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuICAgIC8vIFVwZGF0ZSBUb3RhbFxuICAgIGNvbnNvbGUuaW5mbyhpdGVtRGF0YSk7XG4gICAgc3VtQWxsSXRlbXMoKTtcbiAgICAkKCcjSXRlbXMtRGF0YScpLnZhbChpdGVtRGF0YSk7XG59XG5cbi8vIEFkZCBwcm9kdWN0IHRvIGNhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbndpbmRvdy5hZGRUb0NhcnQgPSBmdW5jdGlvbiAocm91dGUsIGRhdGEpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgdG9hc3Rfc3VjY2VzcygnT2shJywgZGF0YS5tZXNzYWdlLCAnYm90dG9tQ2VudGVyJywgJycsIDI1MDApO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVRvdGFscygpO1xuICAgICAgICAgICAgICAgIHNldEl0ZW1zRGF0YSgpO1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0U2lkZWJhcignc2hvdycpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRJdGVtc0RhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgc3VtQWxsSXRlbXMoKTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXNwb25zZSA9PSAnd2FybmluZycpIHtcbiAgICAgICAgICAgICAgICB0b2FzdF9zdWNjZXNzKCdVcHMhJywgZGF0YS5tZXNzYWdlLCAnYm90dG9tQ2VudGVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy8kKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW4gYWRkdG9DYXJ0KClcIik7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIFJlbW92ZSBwcm9kdWN0IGZyb20gY2FydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxud2luZG93LnJlbW92ZUZyb21DYXJ0ID0gZnVuY3Rpb24gKHJvdXRlLCBpZCwgcXVhbnRpdHksIGRpdiwgYWN0aW9uKSB7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IHsgaXRlbWlkOiBpZCwgcXVhbnRpdHk6IHF1YW50aXR5LCBhY3Rpb246IGFjdGlvbiwgbWV0aG9kOiAnYWpheCcgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlID09ICdjYXJ0LXJlbW92ZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlVG90YWxzKCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzBdO1xuICAgICAgICAgICAgICAgIHNldEl0ZW1zRGF0YSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3BvbnNlID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICQoZGl2KS5oaWRlKDEwMCk7XG4gICAgICAgICAgICAgICAgJChkaXYpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVRvdGFscygpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpdik7XG4gICAgICAgICAgICAgICAgc2V0SXRlbXNEYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy8kKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW4gcmVtb3ZlRnJvbUNhcnQoKVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgLy8gSWYgYW4gZXJyb3IgcG9wcyB3aGVuIGRlc3Ryb3lpbmcgYW4gaXRlbSwgcmVsb2FkIGFuZCBwcmV2ZW50IGJhZCBtYWdpY1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVG90YWxzKCkge1xuICAgIC8vIExpdmUgUmVsb2FkaW5nIHN0dWZmXG4gICAgJChcIiNTaWRlQ29udGFpbmVySXRlbXNcIikubG9hZCh3aW5kb3cubG9jYXRpb24uaHJlZiArIFwiICNTaWRlQ29udGFpbmVySXRlbXNcIik7XG4gICAgJChcIi5Ub3RhbENhcnRJdGVtc1wiKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCIgLlRvdGFsQ2FydEl0ZW1zXCIpO1xuICAgICQoXCIuVG90YWxDYXJ0SXRlbXNTaWRlYmFyXCIpLmxvYWQod2luZG93LmxvY2F0aW9uLmhyZWYgKyBcIiAuVG90YWxDYXJ0SXRlbXNTaWRlYmFyXCIpO1xuICAgICQoXCIuQ2FydFN1YlRvdGFsXCIpLmxvYWQod2luZG93LmxvY2F0aW9uLmhyZWYgKyBcIiAuQ2FydFN1YlRvdGFsXCIpO1xuICAgICQoXCIuQXZhaWxhYmxlU3RvY2tcIikubG9hZCh3aW5kb3cubG9jYXRpb24uaHJlZiArIFwiIC5BdmFpbGFibGVTdG9ja1wiKTtcbn1cblxuLy8gU3VibWl0IEZvcm1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbndpbmRvdy5zdWJtaXRGb3JtID0gZnVuY3Rpb24gKHJvdXRlLCB0YXJnZXQsIGRhdGEsIGFjdGlvbikge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiUnV0YTogXCIgKyByb3V0ZSArIFwiIFRhcmdldDogXCIgKyB0YXJnZXQgKyBcIiBEYXRhOiBcIiArIGRhdGEgKyBcIkFjdGlvbjogXCIrIGFjdGlvbik7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IHsgZGF0YSwgYWN0aW9uOiBhY3Rpb24gfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ID09ICdyZWxvYWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlZnJlc2ggcGFnZSwgZGVsZXRlIHBhcmFtZXR0ZXJzIGFuZCBvcGVuIGNoZWNrb3V0IHNpZGViYXJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzBdICsgXCI/Y2hlY2tvdXQtb25cIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBlbiBzdWJtaXRGb3JtJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgdG9hc3RfZXJyb3IoJycsIGRhdGEubWVzc2FnZSwgJ2JvdHRvbUNlbnRlcicsICcnKTtcbiAgICAgICAgICAgICAgICAkKCcuU2lkZUNvbnRhaW5lckVycm9yJykuaHRtbChkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIC8vICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy8gJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGVuIHN1Ym1pdEZvcm0oKVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gVmFsaWRhdGUgYW5kIHNldCBjb3Vwb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbndpbmRvdy52YWxpZGF0ZUFuZFNldENvdXBvbiA9IGZ1bmN0aW9uIChyb3V0ZSwgY29kZSwgY2FydGlkKSB7XG4gICAgbGV0IGNvdXBvbkRpdiA9ICQoJyNDb3Vwb25EaXYnKTtcbiAgICBsZXQgY291cG9uU2V0ID0gJCgnI1NldHRlZENvdXBvbicpO1xuICAgIGNvbnNvbGUubG9nKGNvZGUsIGNhcnRpZCk7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IHsgY29kZTogY29kZSwgY2FydGlkOiBjYXJ0aWQgfSxcbiAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb21wcm9iYW5kbyBjdXDDs24uLi5cIik7XG4gICAgICAgICAgICAkKCcuQ291cG9uTG9hZGVyJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQoJyNDb3Vwb25WYWxpZGF0aW9uTWVzc2FnZScpLmh0bWwoXCJDdXDDs24gYWNlcHRhZG8gIVwiKTtcbiAgICAgICAgICAgICAgICBjb3Vwb25EaXYuaGlkZSgyMDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY291cG9uU2V0LnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXNwb25zZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgJCgnI0NvdXBvblZhbGlkYXRpb25NZXNzYWdlJykuaHRtbChkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICQoJyNDb3Vwb25WYWxpZGF0aW9uTWVzc2FnZScpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcuQ291cG9uTG9hZGVyJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIEZhdnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbndpbmRvdy5hZGRBcnRpY2xlVG9GYXZzID0gZnVuY3Rpb24gKHJvdXRlLCBmYXZpZCwgYXJ0aWNsZWlkLCBhY3Rpb24sIGRpc3BsYXlCdXR0b24pIHtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YTogeyBmYXZfaWQ6IGZhdmlkLCBhcnRpY2xlX2lkOiBhcnRpY2xlaWQgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlID09IHRydWUgJiYgZGF0YS5yZXN1bHQgPT0gJ2FkZGVkJykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlbG9hZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzaG93JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlCdXR0b24ucmVtb3ZlQ2xhc3MoJ2Zhdi1pY29uLW5vZmF2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5QnV0dG9uLmFkZENsYXNzKCdmYXYtaWNvbi1pc2ZhdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3Rfc3VjY2VzcygnT2shJywgJ1Byb2R1Y3RvIGFncmVnYWRvIGEgZmF2b3JpdG9zJywgJ2JvdHRvbUNlbnRlcicsICcnLCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdub25lJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBY3R1YWxpemFkbyAtIFNpbiBBY2Npw7NuJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gaGF5IGFjY2nDs24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXNwb25zZSA9PSB0cnVlICYmIGRhdGEucmVzdWx0ID09ICdyZW1vdmVkJykge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlCdXR0b24uYWRkQ2xhc3MoJ2Zhdi1pY29uLW5vZmF2Jyk7XG4gICAgICAgICAgICAgICAgZGlzcGxheUJ1dHRvbi5yZW1vdmVDbGFzcygnZmF2LWljb24taXNmYXYnKTtcbiAgICAgICAgICAgICAgICB0b2FzdF9zdWNjZXNzKCdPayEnLCAnUHJvZHVjdG8gZWxpbWluYWRvIGRlIGZhdm9yaXRvcycsICdib3R0b21DZW50ZXInLCAnJywgMTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRGYXZzVG90YWxJY29uKGRhdGEuZmF2c0NvdW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldEZhdnNUb3RhbEljb24oZmF2cykge1xuICAgIGlmIChmYXZzID4gMCkge1xuICAgICAgICAkKCcuRmF2TWFpbkljb24nKS5yZW1vdmVDbGFzcygnZmFyJyk7XG4gICAgICAgICQoJy5GYXZNYWluSWNvbicpLmFkZENsYXNzKCdmYScpO1xuICAgIH0gZWxzZSBpZiAoZmF2cyA9PSAwKSB7XG4gICAgICAgICQoJy5GYXZNYWluSWNvbicpLnJlbW92ZUNsYXNzKCdmYScpO1xuICAgICAgICAkKCcuRmF2TWFpbkljb24nKS5hZGRDbGFzcygnZmFyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykucmVtb3ZlQ2xhc3MoJ2ZhJyk7XG4gICAgICAgICQoJy5GYXZNYWluSWNvbicpLnJlbW92ZUNsYXNzKCdmYXInKTtcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykuYWRkQ2xhc3MoJ2ZhJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW4gc2V0RmF2c1RvdGFsSWNvbigpXCIpO1xuICAgIH1cbn1cblxud2luZG93LnJlbW92ZUFydGljbGVGcm9tRmF2cyA9IGZ1bmN0aW9uIChyb3V0ZSwgZmF2aWQsIGFjdGlvbikge1xuICAgIHZhciBkb2FjdGlvbiA9IGFjdGlvbjtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YTogeyBmYXZfaWQ6IGZhdmlkIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGRvYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlbG9hZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gJ3JlbG9hZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdF9zdWNjZXNzKCdPayEnLCAnUHJvZHVjdG8gZWxpbWluYWRvIGRlIGZhdm9yaXRvcycsICdib3R0b21DZW50ZXInLCBhY3Rpb24sIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gaGF5IGFjY2nDs24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8kKCcjRXJyb3InKS5odG1sKGRhdGEubWVzc2FnZVsnZXJyb3JJbmZvJ10pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIC8vJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbndpbmRvdy5yZW1vdmVBbGxBcnRpY2xlc0Zyb21GYXZzID0gZnVuY3Rpb24gKHJvdXRlLCBjdXN0b21lcmlkLCBhY3Rpb24pIHtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YTogeyBjdXN0b21lcl9pZDogY3VzdG9tZXJpZCB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAvLyQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlbG9hZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGhheSBhY2Npw7NuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJyNFcnJvcicpLmh0bWwoZGF0YS5tZXNzYWdlWydlcnJvckluZm8nXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy8kKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgTE9HSU4gQU5EIFJFR0lTVEVSXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbiQoJyNSZXNlbGxlckJveCcpLmhpZGUoKTtcblxud2luZG93Lm9wZW5SZXNlbGxlclJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uKClcbntcbiAgICAkKCcjSXNSZXNlbGxlckNoZWNrYm94JykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICQoJy5JZlJlc2VsbGVyRW5hYmxlJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgJCgnI1Jlc2VsbGVyQm94Jykuc2hvdygxMDApO1xuICAgICQoJyNSZXNlbGxlckNUQScpLmhpZGUoMCk7XG4gICAgJCgnLk5vcm1hQ2xpZW50VGl0bGUnKS5oaWRlKDApO1xuICAgICQoJy5SZXNlbGxlclRpdGxlJykuc2hvdygwKTtcbn1cblxuXG53aW5kb3cuY2xvc2VSZXNlbGxlclJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uKClcbntcbiAgICAkKCcjSXNSZXNlbGxlckNoZWNrYm94JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAkKCcuSWZSZXNlbGxlckVuYWJsZScpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgJCgnI1Jlc2VsbGVyQm94JykuaGlkZSgwKTtcbiAgICAkKCcjUmVzZWxsZXJDVEEnKS5zaG93KDEwMCk7XG4gICAgJCgnLk5vcm1hQ2xpZW50VGl0bGUnKS5zaG93KDApO1xuICAgICQoJy5SZXNlbGxlclRpdGxlJykuaGlkZSgwKTtcbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAkKCcuR2VvUHJvdlNlbGVjdCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgcHJvdl9pZCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGdldEdlb0xvY3MocHJvdl9pZCk7XG4gICAgfSk7XG59KTtcblxuXG4vKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IEdFTkVSSUMgRlVOQ1RJT05TXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbndpbmRvdy5jbG9zZUVsZW1lbnQgPSBmdW5jdGlvbihzZWxlY3RvcilcbntcbiAgICAkKHNlbGVjdG9yKS5oaWRlKDEwMCk7XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9zY3JpcHRzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==