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

    var sidebar = $('.CheckoutCart');
    var floatingCheckout = $('.CheckoutCartFloating');
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

window.openCheckoutDesktop = function () {
    if ($(window).width() > 768) {
        checkoutSidebar('show');
    }
    return false;
};

// $(window).scroll(function (event) {
//     var scroll = $(window).scrollTop();

//     if (scroll > 125) {
//         $('.checkout-cart').addClass('scrolled');
//     }
//     else {
//         $('.checkout-cart').removeClass('scrolled');
//     }
// });


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
                setTimeout(function () {
                    setItemsData();
                    sumAllItems();
                    openCheckoutDesktop();
                }, 100);
            } else if (data.response == 'warning') {
                toast_success('Ups!', data.message, 'bottomCenter');
            }
        },
        error: function error(data) {
            $('#Error').html(data.responseText);
            console.log("Error en addtoCart()");
            // location.reload();
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
    $("#SideContainerItemsFixed").load(window.location.href + " #SideContainerItemsFixed");
    $("#SideContainerItemsFloating").load(window.location.href + " #SideContainerItemsFloating");
    $(".TotalCartItems").load(window.location.href + " .TotalCartItems");
    $(".TotalCartItemsSidebar").load(window.location.href + " .TotalCartItemsSidebar");
    $(".CartSubTotal").load(window.location.href + " .CartSubTotal");
    $(".AvailableStock").load(window.location.href + " .AvailableStock");
}

// Submit Form
// -------------------------------------------
window.submitForm = function (route, target, data, action) {
    //console.log("Ruta: " + route + " Target: " + target + " Data: " + data + "Action: "+ action);
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
            $('#Error').html(data.responseText);
            console.log("Error en submitForm()");
            console.log(data);
            // location.reload();
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
| MIX FUNCTIONS
|--------------------------------------------------------------------------
*/

window.closeElement = function (selector) {
    $(selector).hide(100);
};

window.getParam = function (parameterName) {
    var result = null,
        tmp = [];
    location.search.substr(1).split("&").forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
    return result;
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODZlYWE1MTU5NGEyNGIzMjdhYzciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbIiQiLCJvbiIsInJlbW92ZUNsYXNzIiwia2V5cHJlc3MiLCJlIiwiY29uc29sZSIsImxvZyIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsInNpYmxpbmdzIiwidmFsIiwicXVhbnRpdHkiLCJuZXdWYWx1ZSIsIm5ld1ByaWNlVGFyZ2V0IiwicGFyZW50IiwibW9kaWZ5Q2FydEl0ZW1RIiwiaHRtbCIsIndpbmRvdyIsImNoZWNrb3V0U2lkZWJhciIsInN0YXRlIiwic2lkZWJhciIsImZsb2F0aW5nQ2hlY2tvdXQiLCJjb250ZW50Iiwic2hvdyIsImFkZENsYXNzIiwiaGlkZSIsInVuZGVmaW5lZCIsImhhc0NsYXNzIiwib3BlbkNoZWNrb3V0RGVza3RvcCIsIndpZHRoIiwib3BlbkZpbHRlcnMiLCJmaWx0ZXJzIiwiY3NzIiwic3VtQWxsSXRlbXMiLCJzdW0iLCJlYWNoIiwiaW5kZXgiLCJwYXJzZUludCIsInN1bURpdnMiLCJvcmlnaW5zIiwidGFyZ2V0IiwicGFyc2VGbG9hdCIsInRleHQiLCJzZXRJdGVtc0RhdGEiLCJpdGVtRGF0YSIsImlkIiwiZGF0YSIsInByaWNlIiwiaXRlbSIsInRvdGFsIiwicHVzaCIsImluZm8iLCJhZGRUb0NhcnQiLCJyb3V0ZSIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInRvYXN0X3N1Y2Nlc3MiLCJtZXNzYWdlIiwidXBkYXRlVG90YWxzIiwic2V0VGltZW91dCIsImVycm9yIiwicmVzcG9uc2VUZXh0IiwicmVtb3ZlRnJvbUNhcnQiLCJkaXYiLCJhY3Rpb24iLCJpdGVtaWQiLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsInJlbW92ZSIsInJlbG9hZCIsImxvYWQiLCJzdWJtaXRGb3JtIiwidG9hc3RfZXJyb3IiLCJ2YWxpZGF0ZUFuZFNldENvdXBvbiIsImNvZGUiLCJjYXJ0aWQiLCJjb3Vwb25EaXYiLCJjb3Vwb25TZXQiLCJiZWZvcmVTZW5kIiwiY29tcGxldGUiLCJhZGRBcnRpY2xlVG9GYXZzIiwiZmF2aWQiLCJhcnRpY2xlaWQiLCJkaXNwbGF5QnV0dG9uIiwiZmF2X2lkIiwiYXJ0aWNsZV9pZCIsInJlc3VsdCIsInNldEZhdnNUb3RhbEljb24iLCJmYXZzQ291bnQiLCJmYXZzIiwicmVtb3ZlQXJ0aWNsZUZyb21GYXZzIiwiZG9hY3Rpb24iLCJyZW1vdmVBbGxBcnRpY2xlc0Zyb21GYXZzIiwiY3VzdG9tZXJpZCIsImN1c3RvbWVyX2lkIiwib3BlblJlc2VsbGVyUmVnaXN0cmF0aW9uIiwicHJvcCIsImNsb3NlUmVzZWxsZXJSZWdpc3RyYXRpb24iLCJkb2N1bWVudCIsInJlYWR5IiwicHJvdl9pZCIsImdldEdlb0xvY3MiLCJjbG9zZUVsZW1lbnQiLCJzZWxlY3RvciIsImdldFBhcmFtIiwicGFyYW1ldGVyTmFtZSIsInRtcCIsInNlYXJjaCIsInN1YnN0ciIsImZvckVhY2giLCJkZWNvZGVVUklDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNB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QUFDeEJ6RyxNQUFFLGdCQUFGLEVBQW9CQyxFQUFwQixDQUF1QixRQUF2QixFQUFpQyxZQUFVO0FBQ3ZDLFlBQUl5RyxVQUFVMUcsRUFBRSxJQUFGLEVBQVFXLEdBQVIsRUFBZDtBQUNBZ0csbUJBQVdELE9BQVg7QUFDSCxLQUhEO0FBSUgsQ0FMRDs7QUFRQTs7Ozs7O0FBTUF4RixPQUFPMEYsWUFBUCxHQUFzQixVQUFTQyxRQUFULEVBQ3RCO0FBQ0k3RyxNQUFFNkcsUUFBRixFQUFZbkYsSUFBWixDQUFpQixHQUFqQjtBQUNILENBSEQ7O0FBS0FSLE9BQU80RixRQUFQLEdBQWtCLFVBQVNDLGFBQVQsRUFBd0I7QUFDdEMsUUFBSW5CLFNBQVMsSUFBYjtBQUFBLFFBQ0lvQixNQUFNLEVBRFY7QUFFQXpDLGFBQVMwQyxNQUFULENBQ0tDLE1BREwsQ0FDWSxDQURaLEVBRUt6QyxLQUZMLENBRVcsR0FGWCxFQUdLMEMsT0FITCxDQUdhLFVBQVVsRSxJQUFWLEVBQWdCO0FBQ3pCK0QsY0FBTS9ELEtBQUt3QixLQUFMLENBQVcsR0FBWCxDQUFOO0FBQ0EsWUFBSXVDLElBQUksQ0FBSixNQUFXRCxhQUFmLEVBQThCbkIsU0FBU3dCLG1CQUFtQkosSUFBSSxDQUFKLENBQW5CLENBQVQ7QUFDN0IsS0FOTDtBQU9BLFdBQU9wQixNQUFQO0FBQ0gsQ0FYRCxDIiwiZmlsZSI6Ii9qcy9zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4NmVhYTUxNTk0YTI0YjMyN2FjNyIsIi8vIExvYWRlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiQoXCIubG9hZGVyLW9uLWNoYW5nZVwiKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICQoJyNmdWxsLWxvYWRlcicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG4kKFwiLmxvYWRlci1vbi1zdWJtaXRcIikub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjZnVsbC1sb2FkZXInKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuJCgnLmRvbnQtc3VibWl0LW9uLWVudGVyLCAuZHNvbicpLmtleXByZXNzKGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc29sZS5sb2coXCJFTlRFUlwiKTtcbiAgICBpZiAoZS53aGljaCA9PSAxMykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChlLndoaWNoID09IDEzKSBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuLy8gTW9kaWZ5IGNhcnQgaXRlbSBxdWFudGl0eSBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiQoJy5JbnB1dEJ0blEnKS5vbignY2hhbmdlIGtleXVwJywgZnVuY3Rpb24gKCkge1xuICAgIC8vICBPcmlnaW5hbCBBcnRpY2xlIFByaWNlXG4gICAgbGV0IHZhbHVlID0gJCh0aGlzKS5zaWJsaW5ncygnLkFydGljbGVQcmljZScpLnZhbCgpO1xuICAgIC8vIFF1YW50aXR5XG4gICAgbGV0IHF1YW50aXR5ID0gJCh0aGlzKS52YWwoKTtcbiAgICAvLyBOZXIgVmFsdWVcbiAgICBsZXQgbmV3VmFsdWUgPSAodmFsdWUgKiBxdWFudGl0eSk7XG4gICAgLy8gTmV3IFByaWNlIFRhcmdldFxuICAgIGxldCBuZXdQcmljZVRhcmdldCA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuc2libGluZ3MoJy5Ub3RhbEl0ZW1QcmljZScpO1xuXG4gICAgY29uc29sZS5sb2codmFsdWUsIHF1YW50aXR5LCBuZXdWYWx1ZSk7XG4gICAgbW9kaWZ5Q2FydEl0ZW1RKCQodGhpcyksIG5ld1ByaWNlVGFyZ2V0LCBuZXdWYWx1ZSk7XG59KVxuXG5mdW5jdGlvbiBtb2RpZnlDYXJ0SXRlbVEoZSwgbmV3UHJpY2VUYXJnZXQsIG5ld1ZhbHVlKSB7XG4gICAgZS5zaWJsaW5ncygnLklucHV0QnRuUScpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcbiAgICBuZXdQcmljZVRhcmdldC5odG1sKCckICcgKyBuZXdWYWx1ZSk7XG59XG5cblxuLy8gQ2hlY2tvdXQgc2lkZWJhclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVx0XHRcbndpbmRvdy5jaGVja291dFNpZGViYXIgPSBmdW5jdGlvbiAoc3RhdGUpIHtcblxuICAgIGNvbnN0IHNpZGViYXIgPSAkKCcuQ2hlY2tvdXRDYXJ0Jyk7XG4gICAgY29uc3QgZmxvYXRpbmdDaGVja291dCA9ICQoJy5DaGVja291dENhcnRGbG9hdGluZycpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSAkKCcjTWFpbkNvbnRlbnQnKTtcblxuICAgIGNvbnN0IHNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNpZGViYXIuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBjb250ZW50LmFkZENsYXNzKCdjb2wteHMtMTIgY29sLWxnLTkgZml4LWNvbHVtbiBmaXgtY29sdW1uLXNtYWxsJyk7XG4gICAgfVxuXG4gICAgY29uc3QgaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDbGFzcygnY29sLWxnLTkgY29sLXNtLTggY29sLW1kLTggZml4LWNvbHVtbiBmaXgtY29sdW1uLXNtYWxsJyk7XG4gICAgICAgIHNpZGViYXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cblxuXG4gICAgaWYgKHN0YXRlID09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoc2lkZWJhci5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIGhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3coKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gJ3Nob3cnKSB7XG4gICAgICAgIHNob3coKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gJ2hpZGUnKSB7XG4gICAgICAgIGhpZGUoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG5cbndpbmRvdy5vcGVuQ2hlY2tvdXREZXNrdG9wID0gZnVuY3Rpb24oKVxue1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2OCkge1xuICAgICAgICBjaGVja291dFNpZGViYXIoJ3Nob3cnKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbi8vICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKGV2ZW50KSB7XG4vLyAgICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuLy8gICAgIGlmIChzY3JvbGwgPiAxMjUpIHtcbi8vICAgICAgICAgJCgnLmNoZWNrb3V0LWNhcnQnKS5hZGRDbGFzcygnc2Nyb2xsZWQnKTtcbi8vICAgICB9XG4vLyAgICAgZWxzZSB7XG4vLyAgICAgICAgICQoJy5jaGVja291dC1jYXJ0JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbGVkJyk7XG4vLyAgICAgfVxuLy8gfSk7XG5cblxuLy8gU2lkZWJhciBjaGVja291dCBhYnNvbHV0ZVxuLy8gd2luZG93LmNoZWNrb3V0U2lkZWJhciA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbi8vICAgICBpZiAoYWN0aW9uID09ICdvcGVuJykge1xuLy8gICAgICAgICAkKCcjU2lkZUNvbnRhaW5lcicpLnRvZ2dsZSgxMDApO1xuLy8gICAgICAgICAkKCcjTWFpbk92ZXJsYXknKS5mYWRlSW4oMTAwKTtcbi8vICAgICB9XG4vLyAgICAgaWYgKGFjdGlvbiA9PSAnY2xvc2UnKSB7XG4vLyAgICAgICAgICQoJyNTaWRlQ29udGFpbmVyJykudG9nZ2xlKDEwMCk7XG4vLyAgICAgICAgICQoJyNNYWluT3ZlcmxheScpLmZhZGVPdXQoMTAwKTtcbi8vICAgICB9XG4vLyB9XG5cbi8vICQoJyNNYWluT3ZlcmxheScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbi8vICAgICBjaGVja291dFNpZGViYXIoXCJjbG9zZVwiKTtcbi8vIH0pO1xuXG53aW5kb3cub3BlbkZpbHRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZmlsdGVycyA9ICQoJyNTZWFyY2hGaWx0ZXJzJyk7XG4gICAgaWYgKGZpbHRlcnMuY3NzKCdkaXNwbGF5JykgPT0gJ25vbmUnKSB7XG4gICAgICAgIGZpbHRlcnMuY3NzKCdkaXNwbGF5JywgJ2luaGVyaXQnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZpbHRlcnMuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9XG59XG5cbi8vIEhpZGUgYWxlcnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4vLyAgICAgJCgnLmFsZXJ0JykuaGlkZSgxMDApO1xuLy8gfSwgNDAwMCk7XG5cblxuLy8gQ2FydCBSZXN1bWVuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIHdpbmRvdy5zaG93Q2FydFJlc3VtZU1vYmlsZSA9IGZ1bmN0aW9uKClcbi8vIHtcbi8vICAgICAkKCcuY2FydC1yZXN1bWUtZGV0YWlscy1tb2JpbGUnKS50b2dnbGVDbGFzcygnSGlkZGVuJywgMTAwKTtcbi8vIH1cblxuLypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBDQVJUXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cblxud2luZG93LnN1bUFsbEl0ZW1zID0gZnVuY3Rpb24gKCkge1xuICAgIHN1bSA9IDA7XG4gICAgJCgnLlRvdGFsSXRlbVByaWNlJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgc3VtICs9IHBhcnNlSW50KCQodGhpcykuaHRtbCgpKTtcbiAgICB9KTtcbiAgICAkKCcuU3ViVG90YWwnKS5odG1sKHN1bSk7XG59XG5cblxuLy8gU3VtIGRpdnMgdGV4dFxud2luZG93LnN1bURpdnMgPSBmdW5jdGlvbiAob3JpZ2lucywgdGFyZ2V0KSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgb3JpZ2lucy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3VtICs9IHBhcnNlRmxvYXQoJCh0aGlzKS50ZXh0KCkpO1xuICAgIH0pO1xuICAgIHRhcmdldC50ZXh0KHN1bSk7XG59XG5cblxuLy8gU2V0IGNhcnQgaXRlbXMgSlNPTlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxud2luZG93LnNldEl0ZW1zRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpdGVtRGF0YSA9IFtdO1xuXG4gICAgJCgnLkl0ZW0tRGF0YScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XG4gICAgICAgIHZhciBwcmljZSA9ICQodGhpcykuZGF0YSgncHJpY2UnKTtcbiAgICAgICAgdmFyIHF1YW50aXR5ID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgICBpdGVtID0ge31cbiAgICAgICAgaXRlbVsnaWQnXSA9IGlkO1xuICAgICAgICBpdGVtWydwcmljZSddID0gcHJpY2U7XG4gICAgICAgIGl0ZW1bJ3F1YW50aXR5J10gPSBxdWFudGl0eTtcbiAgICAgICAgLy8gVXBkYXRlIGRpc3BsYXkgdG90YWwgaXRlbSBwcmljZVxuICAgICAgICB0b3RhbCA9IHByaWNlICogcXVhbnRpdHk7XG4gICAgICAgICQoJy4nICsgaWQgKyAnLVRvdGFsSXRlbVByaWNlJykuaHRtbCh0b3RhbCk7XG5cbiAgICAgICAgaXRlbURhdGEucHVzaChpdGVtKTtcbiAgICB9KTtcbiAgICAvLyBVcGRhdGUgVG90YWxcbiAgICBjb25zb2xlLmluZm8oaXRlbURhdGEpO1xuICAgIHN1bUFsbEl0ZW1zKCk7XG4gICAgJCgnI0l0ZW1zLURhdGEnKS52YWwoaXRlbURhdGEpO1xufVxuXG4vLyBBZGQgcHJvZHVjdCB0byBjYXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG53aW5kb3cuYWRkVG9DYXJ0ID0gZnVuY3Rpb24gKHJvdXRlLCBkYXRhKSB7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgIHRvYXN0X3N1Y2Nlc3MoJ09rIScsIGRhdGEubWVzc2FnZSwgJ2JvdHRvbUNlbnRlcicsICcnLCAyNTAwKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVUb3RhbHMoKTtcbiAgICAgICAgICAgICAgICBzZXRJdGVtc0RhdGEoKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbXNEYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1bUFsbEl0ZW1zKCk7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5DaGVja291dERlc2t0b3AoKTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3BvbnNlID09ICd3YXJuaW5nJykge1xuICAgICAgICAgICAgICAgIHRvYXN0X3N1Y2Nlc3MoJ1VwcyEnLCBkYXRhLm1lc3NhZ2UsICdib3R0b21DZW50ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW4gYWRkdG9DYXJ0KClcIik7XG4gICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbiBcblxuLy8gUmVtb3ZlIHByb2R1Y3QgZnJvbSBjYXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG53aW5kb3cucmVtb3ZlRnJvbUNhcnQgPSBmdW5jdGlvbiAocm91dGUsIGlkLCBxdWFudGl0eSwgZGl2LCBhY3Rpb24pIHtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YTogeyBpdGVtaWQ6IGlkLCBxdWFudGl0eTogcXVhbnRpdHksIGFjdGlvbjogYWN0aW9uLCBtZXRob2Q6ICdhamF4JyB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ2NhcnQtcmVtb3ZlZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVUb3RhbHMoKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIj9cIilbMF07XG4gICAgICAgICAgICAgICAgc2V0SXRlbXNEYXRhKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgJChkaXYpLmhpZGUoMTAwKTtcbiAgICAgICAgICAgICAgICAkKGRpdikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlVG90YWxzKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGl2KTtcbiAgICAgICAgICAgICAgICBzZXRJdGVtc0RhdGEoKTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAvLyQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBlbiByZW1vdmVGcm9tQ2FydCgpXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAvLyBJZiBhbiBlcnJvciBwb3BzIHdoZW4gZGVzdHJveWluZyBhbiBpdGVtLCByZWxvYWQgYW5kIHByZXZlbnQgYmFkIG1hZ2ljXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUb3RhbHMoKSB7XG4gICAgLy8gTGl2ZSBSZWxvYWRpbmcgc3R1ZmZcbiAgICAkKFwiI1NpZGVDb250YWluZXJJdGVtc0ZpeGVkXCIpLmxvYWQod2luZG93LmxvY2F0aW9uLmhyZWYgKyBcIiAjU2lkZUNvbnRhaW5lckl0ZW1zRml4ZWRcIik7XG4gICAgJChcIiNTaWRlQ29udGFpbmVySXRlbXNGbG9hdGluZ1wiKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCIgI1NpZGVDb250YWluZXJJdGVtc0Zsb2F0aW5nXCIpO1xuICAgICQoXCIuVG90YWxDYXJ0SXRlbXNcIikubG9hZCh3aW5kb3cubG9jYXRpb24uaHJlZiArIFwiIC5Ub3RhbENhcnRJdGVtc1wiKTtcbiAgICAkKFwiLlRvdGFsQ2FydEl0ZW1zU2lkZWJhclwiKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCIgLlRvdGFsQ2FydEl0ZW1zU2lkZWJhclwiKTtcbiAgICAkKFwiLkNhcnRTdWJUb3RhbFwiKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCIgLkNhcnRTdWJUb3RhbFwiKTtcbiAgICAkKFwiLkF2YWlsYWJsZVN0b2NrXCIpLmxvYWQod2luZG93LmxvY2F0aW9uLmhyZWYgKyBcIiAuQXZhaWxhYmxlU3RvY2tcIik7XG59XG5cbi8vIFN1Ym1pdCBGb3JtXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG53aW5kb3cuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uIChyb3V0ZSwgdGFyZ2V0LCBkYXRhLCBhY3Rpb24pIHtcbiAgICAvL2NvbnNvbGUubG9nKFwiUnV0YTogXCIgKyByb3V0ZSArIFwiIFRhcmdldDogXCIgKyB0YXJnZXQgKyBcIiBEYXRhOiBcIiArIGRhdGEgKyBcIkFjdGlvbjogXCIrIGFjdGlvbik7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IHsgZGF0YSwgYWN0aW9uOiBhY3Rpb24gfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ID09ICdyZWxvYWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlZnJlc2ggcGFnZSwgZGVsZXRlIHBhcmFtZXR0ZXJzIGFuZCBvcGVuIGNoZWNrb3V0IHNpZGViYXJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzBdICsgXCI/Y2hlY2tvdXQtb25cIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBlbiBzdWJtaXRGb3JtJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgdG9hc3RfZXJyb3IoJycsIGRhdGEubWVzc2FnZSwgJ2JvdHRvbUNlbnRlcicsICcnKTtcbiAgICAgICAgICAgICAgICAkKCcuU2lkZUNvbnRhaW5lckVycm9yJykuaHRtbChkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIC8vICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGVuIHN1Ym1pdEZvcm0oKVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gVmFsaWRhdGUgYW5kIHNldCBjb3Vwb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbndpbmRvdy52YWxpZGF0ZUFuZFNldENvdXBvbiA9IGZ1bmN0aW9uIChyb3V0ZSwgY29kZSwgY2FydGlkKSB7XG4gICAgbGV0IGNvdXBvbkRpdiA9ICQoJyNDb3Vwb25EaXYnKTtcbiAgICBsZXQgY291cG9uU2V0ID0gJCgnI1NldHRlZENvdXBvbicpO1xuICAgIGNvbnNvbGUubG9nKGNvZGUsIGNhcnRpZCk7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IHsgY29kZTogY29kZSwgY2FydGlkOiBjYXJ0aWQgfSxcbiAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb21wcm9iYW5kbyBjdXDDs24uLi5cIik7XG4gICAgICAgICAgICAkKCcuQ291cG9uTG9hZGVyJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQoJyNDb3Vwb25WYWxpZGF0aW9uTWVzc2FnZScpLmh0bWwoXCJDdXDDs24gYWNlcHRhZG8gIVwiKTtcbiAgICAgICAgICAgICAgICBjb3Vwb25EaXYuaGlkZSgyMDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY291cG9uU2V0LnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXNwb25zZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgJCgnI0NvdXBvblZhbGlkYXRpb25NZXNzYWdlJykuaHRtbChkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICQoJyNDb3Vwb25WYWxpZGF0aW9uTWVzc2FnZScpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcuQ291cG9uTG9hZGVyJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIEZhdnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbndpbmRvdy5hZGRBcnRpY2xlVG9GYXZzID0gZnVuY3Rpb24gKHJvdXRlLCBmYXZpZCwgYXJ0aWNsZWlkLCBhY3Rpb24sIGRpc3BsYXlCdXR0b24pIHtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YTogeyBmYXZfaWQ6IGZhdmlkLCBhcnRpY2xlX2lkOiBhcnRpY2xlaWQgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlID09IHRydWUgJiYgZGF0YS5yZXN1bHQgPT0gJ2FkZGVkJykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlbG9hZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzaG93JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlCdXR0b24ucmVtb3ZlQ2xhc3MoJ2Zhdi1pY29uLW5vZmF2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5QnV0dG9uLmFkZENsYXNzKCdmYXYtaWNvbi1pc2ZhdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3Rfc3VjY2VzcygnT2shJywgJ1Byb2R1Y3RvIGFncmVnYWRvIGEgZmF2b3JpdG9zJywgJ2JvdHRvbUNlbnRlcicsICcnLCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdub25lJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBY3R1YWxpemFkbyAtIFNpbiBBY2Npw7NuJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gaGF5IGFjY2nDs24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXNwb25zZSA9PSB0cnVlICYmIGRhdGEucmVzdWx0ID09ICdyZW1vdmVkJykge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlCdXR0b24uYWRkQ2xhc3MoJ2Zhdi1pY29uLW5vZmF2Jyk7XG4gICAgICAgICAgICAgICAgZGlzcGxheUJ1dHRvbi5yZW1vdmVDbGFzcygnZmF2LWljb24taXNmYXYnKTtcbiAgICAgICAgICAgICAgICB0b2FzdF9zdWNjZXNzKCdPayEnLCAnUHJvZHVjdG8gZWxpbWluYWRvIGRlIGZhdm9yaXRvcycsICdib3R0b21DZW50ZXInLCAnJywgMTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRGYXZzVG90YWxJY29uKGRhdGEuZmF2c0NvdW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldEZhdnNUb3RhbEljb24oZmF2cykge1xuICAgIGlmIChmYXZzID4gMCkge1xuICAgICAgICAkKCcuRmF2TWFpbkljb24nKS5yZW1vdmVDbGFzcygnZmFyJyk7XG4gICAgICAgICQoJy5GYXZNYWluSWNvbicpLmFkZENsYXNzKCdmYScpO1xuICAgIH0gZWxzZSBpZiAoZmF2cyA9PSAwKSB7XG4gICAgICAgICQoJy5GYXZNYWluSWNvbicpLnJlbW92ZUNsYXNzKCdmYScpO1xuICAgICAgICAkKCcuRmF2TWFpbkljb24nKS5hZGRDbGFzcygnZmFyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykucmVtb3ZlQ2xhc3MoJ2ZhJyk7XG4gICAgICAgICQoJy5GYXZNYWluSWNvbicpLnJlbW92ZUNsYXNzKCdmYXInKTtcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykuYWRkQ2xhc3MoJ2ZhJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW4gc2V0RmF2c1RvdGFsSWNvbigpXCIpO1xuICAgIH1cbn1cblxud2luZG93LnJlbW92ZUFydGljbGVGcm9tRmF2cyA9IGZ1bmN0aW9uIChyb3V0ZSwgZmF2aWQsIGFjdGlvbikge1xuICAgIHZhciBkb2FjdGlvbiA9IGFjdGlvbjtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YTogeyBmYXZfaWQ6IGZhdmlkIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGRvYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlbG9hZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gJ3JlbG9hZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdF9zdWNjZXNzKCdPayEnLCAnUHJvZHVjdG8gZWxpbWluYWRvIGRlIGZhdm9yaXRvcycsICdib3R0b21DZW50ZXInLCBhY3Rpb24sIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gaGF5IGFjY2nDs24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8kKCcjRXJyb3InKS5odG1sKGRhdGEubWVzc2FnZVsnZXJyb3JJbmZvJ10pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIC8vJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbndpbmRvdy5yZW1vdmVBbGxBcnRpY2xlc0Zyb21GYXZzID0gZnVuY3Rpb24gKHJvdXRlLCBjdXN0b21lcmlkLCBhY3Rpb24pIHtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YTogeyBjdXN0b21lcl9pZDogY3VzdG9tZXJpZCB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAvLyQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlbG9hZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGhheSBhY2Npw7NuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJyNFcnJvcicpLmh0bWwoZGF0YS5tZXNzYWdlWydlcnJvckluZm8nXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy8kKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgTE9HSU4gQU5EIFJFR0lTVEVSXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbiQoJyNSZXNlbGxlckJveCcpLmhpZGUoKTtcblxud2luZG93Lm9wZW5SZXNlbGxlclJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uKClcbntcbiAgICAkKCcjSXNSZXNlbGxlckNoZWNrYm94JykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICQoJy5JZlJlc2VsbGVyRW5hYmxlJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgJCgnI1Jlc2VsbGVyQm94Jykuc2hvdygxMDApO1xuICAgICQoJyNSZXNlbGxlckNUQScpLmhpZGUoMCk7XG4gICAgJCgnLk5vcm1hQ2xpZW50VGl0bGUnKS5oaWRlKDApO1xuICAgICQoJy5SZXNlbGxlclRpdGxlJykuc2hvdygwKTtcbn1cblxuXG53aW5kb3cuY2xvc2VSZXNlbGxlclJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uKClcbntcbiAgICAkKCcjSXNSZXNlbGxlckNoZWNrYm94JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAkKCcuSWZSZXNlbGxlckVuYWJsZScpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgJCgnI1Jlc2VsbGVyQm94JykuaGlkZSgwKTtcbiAgICAkKCcjUmVzZWxsZXJDVEEnKS5zaG93KDEwMCk7XG4gICAgJCgnLk5vcm1hQ2xpZW50VGl0bGUnKS5zaG93KDApO1xuICAgICQoJy5SZXNlbGxlclRpdGxlJykuaGlkZSgwKTtcbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAkKCcuR2VvUHJvdlNlbGVjdCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgcHJvdl9pZCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGdldEdlb0xvY3MocHJvdl9pZCk7XG4gICAgfSk7XG59KTtcblxuXG4vKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IE1JWCBGVU5DVElPTlNcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxud2luZG93LmNsb3NlRWxlbWVudCA9IGZ1bmN0aW9uKHNlbGVjdG9yKVxue1xuICAgICQoc2VsZWN0b3IpLmhpZGUoMTAwKTtcbn1cblxud2luZG93LmdldFBhcmFtID0gZnVuY3Rpb24ocGFyYW1ldGVyTmFtZSkge1xuICAgIHZhciByZXN1bHQgPSBudWxsLFxuICAgICAgICB0bXAgPSBbXTtcbiAgICBsb2NhdGlvbi5zZWFyY2hcbiAgICAgICAgLnN1YnN0cigxKVxuICAgICAgICAuc3BsaXQoXCImXCIpXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHRtcCA9IGl0ZW0uc3BsaXQoXCI9XCIpO1xuICAgICAgICBpZiAodG1wWzBdID09PSBwYXJhbWV0ZXJOYW1lKSByZXN1bHQgPSBkZWNvZGVVUklDb21wb25lbnQodG1wWzFdKTtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL3NjcmlwdHMuanMiXSwic291cmNlUm9vdCI6IiJ9