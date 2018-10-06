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
window.checkoutSidebar = function (action) {
    if (action == 'open') {
        $('#SideContainer').toggle(100);
        $('#MainOverlay').fadeIn(100);
        $('body').css('overflow', 'hidden');
    }
    if (action == 'close') {
        $('#SideContainer').toggle(100);
        $('#MainOverlay').fadeOut(100);
        $('body').css('overflow-y', 'scroll');
    }
};

$('#MainOverlay').click(function () {
    checkoutSidebar("close");
});

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
    console.log("Insertandola");
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
            if (data.response == 'success') {
                toast_success('Ok!', data.message, 'bottomCenter', '', 2500);
                // Live Reloading stuff
                $("#SideContainerItems").load(window.location.href + " #SideContainerItems");
                $(".TotalCartItems").load(window.location.href + " .TotalCartItems");
                $(".CartSubTotal").load(window.location.href + " .CartSubTotal");
                $(".AvailableStock").load(window.location.href + " .AvailableStock");
                setItemsData();
                setTimeout(function () {
                    setItemsData();
                }, 100);
            } else if ($data.response == 'warning') {
                toast_success('Ups!', data.message, 'bottomCenter');
            }
        },
        error: function error(data) {
            // $('#Error').html(data.responseText);
            console.log("Error en addtoCart()");
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
                window.location = window.location.href.split("?")[0];
                setItemsData();
            } else if (data.response == 'success') {
                $(div).hide(100);
                $(div).remove();
                console.log(div);
                setItemsData();
            }
        },
        error: function error(data) {
            $('#Error').html(data.responseText);
            console.log("Error en removeFromCart()");
            console.log(data);
            // If an error pops when destroying an item, reload and prevent bad magic
            // location.reload();
        }
    });
};

// Submit Form
// -------------------------------------------
window.submitForm = function (route, target, data, action) {
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { data: data, action: action },
        success: function success(data) {
            if (data.response == 'success') {
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
                        toast_success('Ok!', 'Producto agregado a favoritos', 'bottomCenter');
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
                toast_success('Ok!', 'Producto eliminado de favoritos', 'bottomCenter');
            }
        },
        error: function error(data) {
            // $('#Error').html(data.responseText);
            console.log(data);
        }
    });
};

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTVlY2FkZDA5M2E1MTUwZThjN2EiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbIiQiLCJvbiIsInJlbW92ZUNsYXNzIiwia2V5cHJlc3MiLCJlIiwiY29uc29sZSIsImxvZyIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsInNpYmxpbmdzIiwidmFsIiwicXVhbnRpdHkiLCJuZXdWYWx1ZSIsIm5ld1ByaWNlVGFyZ2V0IiwicGFyZW50IiwibW9kaWZ5Q2FydEl0ZW1RIiwiaHRtbCIsIndpbmRvdyIsImNoZWNrb3V0U2lkZWJhciIsImFjdGlvbiIsInRvZ2dsZSIsImZhZGVJbiIsImNzcyIsImZhZGVPdXQiLCJjbGljayIsIm9wZW5GaWx0ZXJzIiwiZmlsdGVycyIsInN1bUFsbEl0ZW1zIiwic3VtIiwiZWFjaCIsImluZGV4IiwicGFyc2VJbnQiLCJzdW1EaXZzIiwib3JpZ2lucyIsInRhcmdldCIsInBhcnNlRmxvYXQiLCJ0ZXh0Iiwic2V0SXRlbXNEYXRhIiwiaXRlbURhdGEiLCJpZCIsImRhdGEiLCJwcmljZSIsIml0ZW0iLCJ0b3RhbCIsInB1c2giLCJpbmZvIiwiYWRkVG9DYXJ0Iiwicm91dGUiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJ0b2FzdF9zdWNjZXNzIiwibWVzc2FnZSIsImxvYWQiLCJsb2NhdGlvbiIsImhyZWYiLCJzZXRUaW1lb3V0IiwiJGRhdGEiLCJlcnJvciIsInJlbW92ZUZyb21DYXJ0IiwiZGl2IiwiaXRlbWlkIiwic3BsaXQiLCJoaWRlIiwicmVtb3ZlIiwicmVzcG9uc2VUZXh0Iiwic3VibWl0Rm9ybSIsInRvYXN0X2Vycm9yIiwicmVsb2FkIiwidmFsaWRhdGVBbmRTZXRDb3Vwb24iLCJjb2RlIiwiY2FydGlkIiwiY291cG9uRGl2IiwiY291cG9uU2V0IiwiYmVmb3JlU2VuZCIsImNvbXBsZXRlIiwiYWRkQ2xhc3MiLCJhZGRBcnRpY2xlVG9GYXZzIiwiZmF2aWQiLCJhcnRpY2xlaWQiLCJkaXNwbGF5QnV0dG9uIiwiZmF2X2lkIiwiYXJ0aWNsZV9pZCIsInJlc3VsdCIsInJlbW92ZUFydGljbGVGcm9tRmF2cyIsImRvYWN0aW9uIiwicmVtb3ZlQWxsQXJ0aWNsZXNGcm9tRmF2cyIsImN1c3RvbWVyaWQiLCJjdXN0b21lcl9pZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQUEsRUFBRyxtQkFBSCxFQUF5QkMsRUFBekIsQ0FBNEIsUUFBNUIsRUFBc0MsWUFBVztBQUM3Q0QsTUFBRSxjQUFGLEVBQWtCRSxXQUFsQixDQUE4QixRQUE5QjtBQUNBLFdBQU8sSUFBUDtBQUNILENBSEQ7O0FBS0FGLEVBQUcsbUJBQUgsRUFBeUJDLEVBQXpCLENBQTRCLFFBQTVCLEVBQXNDLFlBQVc7QUFDN0NELE1BQUUsY0FBRixFQUFrQkUsV0FBbEIsQ0FBOEIsUUFBOUI7QUFDQSxXQUFPLElBQVA7QUFDSCxDQUhEOztBQUtBRixFQUFFLDhCQUFGLEVBQWtDRyxRQUFsQyxDQUEyQyxVQUFTQyxDQUFULEVBQVc7QUFDbERDLFlBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsUUFBS0YsRUFBRUcsS0FBRixJQUFXLEVBQWhCLEVBQXFCLE9BQU8sS0FBUDtBQUNyQixRQUFLSCxFQUFFRyxLQUFGLElBQVcsRUFBaEIsRUFBcUJILEVBQUVJLGNBQUY7QUFDdkIsQ0FKRjs7QUFNQTtBQUNBO0FBQ0FSLEVBQUUsWUFBRixFQUFnQkMsRUFBaEIsQ0FBbUIsY0FBbkIsRUFBbUMsWUFBVTtBQUN6QztBQUNBLFFBQUlRLFFBQVFULEVBQUUsSUFBRixFQUFRVSxRQUFSLENBQWlCLGVBQWpCLEVBQWtDQyxHQUFsQyxFQUFaO0FBQ0E7QUFDQSxRQUFJQyxXQUFXWixFQUFFLElBQUYsRUFBUVcsR0FBUixFQUFmO0FBQ0E7QUFDQSxRQUFJRSxXQUFZSixRQUFRRyxRQUF4QjtBQUNBO0FBQ0EsUUFBSUUsaUJBQWlCZCxFQUFFLElBQUYsRUFBUWUsTUFBUixHQUFpQkEsTUFBakIsR0FBMEJBLE1BQTFCLEdBQW1DTCxRQUFuQyxDQUE0QyxpQkFBNUMsQ0FBckI7O0FBRUFMLFlBQVFDLEdBQVIsQ0FBWUcsS0FBWixFQUFtQkcsUUFBbkIsRUFBNkJDLFFBQTdCO0FBQ0FHLG9CQUFnQmhCLEVBQUUsSUFBRixDQUFoQixFQUF5QmMsY0FBekIsRUFBeUNELFFBQXpDO0FBQ0gsQ0FaRDs7QUFjQSxTQUFTRyxlQUFULENBQXlCWixDQUF6QixFQUE0QlUsY0FBNUIsRUFBNENELFFBQTVDLEVBQ0E7QUFDSVQsTUFBRU0sUUFBRixDQUFXLFlBQVgsRUFBeUJSLFdBQXpCLENBQXFDLFFBQXJDO0FBQ0FZLG1CQUFlRyxJQUFmLENBQW9CLE9BQUtKLFFBQXpCO0FBQ0g7O0FBR0Q7QUFDQTtBQUNBSyxPQUFPQyxlQUFQLEdBQXlCLFVBQVNDLE1BQVQsRUFDekI7QUFDSSxRQUFHQSxVQUFVLE1BQWIsRUFDQTtBQUNJcEIsVUFBRSxnQkFBRixFQUFvQnFCLE1BQXBCLENBQTJCLEdBQTNCO0FBQ0FyQixVQUFFLGNBQUYsRUFBa0JzQixNQUFsQixDQUF5QixHQUF6QjtBQUNBdEIsVUFBRSxNQUFGLEVBQVV1QixHQUFWLENBQWMsVUFBZCxFQUEwQixRQUExQjtBQUNIO0FBQ0QsUUFBR0gsVUFBVSxPQUFiLEVBQ0E7QUFDSXBCLFVBQUUsZ0JBQUYsRUFBb0JxQixNQUFwQixDQUEyQixHQUEzQjtBQUNBckIsVUFBRSxjQUFGLEVBQWtCd0IsT0FBbEIsQ0FBMEIsR0FBMUI7QUFDQXhCLFVBQUUsTUFBRixFQUFVdUIsR0FBVixDQUFjLFlBQWQsRUFBNEIsUUFBNUI7QUFDSDtBQUNKLENBZEQ7O0FBZ0JBdkIsRUFBRSxjQUFGLEVBQWtCeUIsS0FBbEIsQ0FBd0IsWUFBVTtBQUM5Qk4sb0JBQWdCLE9BQWhCO0FBQ0gsQ0FGRDs7QUFLQUQsT0FBT1EsV0FBUCxHQUFxQixZQUNyQjtBQUNJLFFBQU1DLFVBQVUzQixFQUFFLGdCQUFGLENBQWhCO0FBQ0EsUUFBRzJCLFFBQVFKLEdBQVIsQ0FBWSxTQUFaLEtBQTBCLE1BQTdCLEVBQ0E7QUFDSUksZ0JBQVFKLEdBQVIsQ0FBWSxTQUFaLEVBQXNCLFNBQXRCO0FBQ0gsS0FIRCxNQUtBO0FBQ0lJLGdCQUFRSixHQUFSLENBQVksU0FBWixFQUFzQixNQUF0QjtBQUNIO0FBQ0osQ0FYRDs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFPQUwsT0FBT1UsV0FBUCxHQUFxQixZQUNyQjtBQUNJQyxVQUFNLENBQU47QUFDQTdCLE1BQUUsaUJBQUYsRUFBcUI4QixJQUFyQixDQUEwQixVQUFVQyxLQUFWLEVBQWtCO0FBQ3hDRixlQUFPRyxTQUFTaEMsRUFBRSxJQUFGLEVBQVFpQixJQUFSLEVBQVQsQ0FBUDtBQUNILEtBRkQ7QUFHQWpCLE1BQUUsV0FBRixFQUFlaUIsSUFBZixDQUFvQlksR0FBcEI7QUFDSCxDQVBEOztBQVVBO0FBQ0FYLE9BQU9lLE9BQVAsR0FBaUIsVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBeUI7QUFDdEMsUUFBSU4sTUFBTSxDQUFWO0FBQ0FLLFlBQVFKLElBQVIsQ0FBYSxZQUFVO0FBQ25CRCxlQUFPTyxXQUFXcEMsRUFBRSxJQUFGLEVBQVFxQyxJQUFSLEVBQVgsQ0FBUDtBQUNILEtBRkQ7QUFHQUYsV0FBT0UsSUFBUCxDQUFZUixHQUFaO0FBQ0gsQ0FORDs7QUFTQTtBQUNBO0FBQ0FYLE9BQU9vQixZQUFQLEdBQXNCLFlBQ3RCO0FBQ0lqQyxZQUFRQyxHQUFSLENBQVksY0FBWjtBQUNBaUMsZUFBVyxFQUFYOztBQUVBdkMsTUFBRSxZQUFGLEVBQWdCOEIsSUFBaEIsQ0FBcUIsWUFBVztBQUM1QixZQUFJVSxLQUFLeEMsRUFBRSxJQUFGLEVBQVF5QyxJQUFSLENBQWEsSUFBYixDQUFUO0FBQ0EsWUFBSUMsUUFBUTFDLEVBQUUsSUFBRixFQUFReUMsSUFBUixDQUFhLE9BQWIsQ0FBWjtBQUNBLFlBQUk3QixXQUFXWixFQUFFLElBQUYsRUFBUVcsR0FBUixFQUFmOztBQUVBZ0MsZUFBTyxFQUFQO0FBQ0FBLGFBQU0sSUFBTixJQUFjSCxFQUFkO0FBQ0FHLGFBQU0sT0FBTixJQUFpQkQsS0FBakI7QUFDQUMsYUFBTSxVQUFOLElBQW9CL0IsUUFBcEI7QUFDQTtBQUNBZ0MsZ0JBQVFGLFFBQVE5QixRQUFoQjtBQUNBWixVQUFFLE1BQUl3QyxFQUFKLEdBQU8saUJBQVQsRUFBNEJ2QixJQUE1QixDQUFpQzJCLEtBQWpDOztBQUVBTCxpQkFBU00sSUFBVCxDQUFjRixJQUFkO0FBQ0gsS0FkRDtBQWVBO0FBQ0F0QyxZQUFReUMsSUFBUixDQUFhUCxRQUFiO0FBQ0FYO0FBQ0E1QixNQUFFLGFBQUYsRUFBaUJXLEdBQWpCLENBQXFCNEIsUUFBckI7QUFDSCxDQXhCRDs7QUEwQkE7QUFDQTtBQUNBckIsT0FBTzZCLFNBQVAsR0FBbUIsVUFBU0MsS0FBVCxFQUFnQlAsSUFBaEIsRUFDbkI7QUFDSXpDLE1BQUVpRCxJQUFGLENBQU87QUFDSEMsYUFBS0YsS0FERjtBQUVIRyxnQkFBUSxNQUZMO0FBR0hDLGtCQUFVLE1BSFA7QUFJSFgsY0FBTUEsSUFKSDtBQUtIWSxpQkFBUyxpQkFBU1osSUFBVCxFQUFjO0FBQ25CLGdCQUFHQSxLQUFLYSxRQUFMLElBQWlCLFNBQXBCLEVBQThCO0FBQzFCQyw4QkFBYyxLQUFkLEVBQXFCZCxLQUFLZSxPQUExQixFQUFtQyxjQUFuQyxFQUFtRCxFQUFuRCxFQUF1RCxJQUF2RDtBQUNBO0FBQ0F4RCxrQkFBRSxxQkFBRixFQUF5QnlELElBQXpCLENBQThCdkMsT0FBT3dDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLHNCQUFyRDtBQUNBM0Qsa0JBQUUsaUJBQUYsRUFBcUJ5RCxJQUFyQixDQUEwQnZDLE9BQU93QyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixrQkFBakQ7QUFDQTNELGtCQUFFLGVBQUYsRUFBbUJ5RCxJQUFuQixDQUF3QnZDLE9BQU93QyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixnQkFBL0M7QUFDQTNELGtCQUFFLGlCQUFGLEVBQXFCeUQsSUFBckIsQ0FBMEJ2QyxPQUFPd0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsa0JBQWpEO0FBQ0FyQjtBQUNBc0IsMkJBQVcsWUFBVTtBQUNqQnRCO0FBQ0gsaUJBRkQsRUFFRyxHQUZIO0FBSUgsYUFaRCxNQVlPLElBQUd1QixNQUFNUCxRQUFOLElBQWtCLFNBQXJCLEVBQWdDO0FBQ25DQyw4QkFBYyxNQUFkLEVBQXNCZCxLQUFLZSxPQUEzQixFQUFvQyxjQUFwQztBQUNIO0FBQ0osU0FyQkU7QUFzQkhNLGVBQU8sZUFBU3JCLElBQVQsRUFBYztBQUNqQjtBQUNBcEMsb0JBQVFDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBRCxvQkFBUUMsR0FBUixDQUFZbUMsSUFBWjtBQUNIO0FBMUJFLEtBQVA7QUE0QkgsQ0E5QkQ7O0FBZ0NBO0FBQ0E7QUFDQXZCLE9BQU82QyxjQUFQLEdBQXdCLFVBQVNmLEtBQVQsRUFBZ0JSLEVBQWhCLEVBQW9CNUIsUUFBcEIsRUFBOEJvRCxHQUE5QixFQUFtQzVDLE1BQW5DLEVBQ3hCO0FBQ0lwQixNQUFFaUQsSUFBRixDQUFPO0FBQ0hDLGFBQUtGLEtBREY7QUFFSEcsZ0JBQVEsTUFGTDtBQUdIQyxrQkFBVSxNQUhQO0FBSUhYLGNBQU0sRUFBRXdCLFFBQVF6QixFQUFWLEVBQWM1QixVQUFVQSxRQUF4QixFQUFrQ1EsUUFBUUEsTUFBMUMsRUFBa0QrQixRQUFRLE1BQTFELEVBSkg7QUFLSEUsaUJBQVMsaUJBQVNaLElBQVQsRUFBYztBQUNuQixnQkFBR0EsS0FBS2EsUUFBTCxJQUFpQixjQUFwQixFQUFtQztBQUMvQmpELHdCQUFRQyxHQUFSLENBQVltQyxJQUFaO0FBQ0F2Qix1QkFBT3dDLFFBQVAsR0FBa0J4QyxPQUFPd0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJPLEtBQXJCLENBQTJCLEdBQTNCLEVBQWdDLENBQWhDLENBQWxCO0FBQ0E1QjtBQUNILGFBSkQsTUFJTyxJQUFHRyxLQUFLYSxRQUFMLElBQWlCLFNBQXBCLEVBQ1A7QUFDSXRELGtCQUFFZ0UsR0FBRixFQUFPRyxJQUFQLENBQVksR0FBWjtBQUNBbkUsa0JBQUVnRSxHQUFGLEVBQU9JLE1BQVA7QUFDQS9ELHdCQUFRQyxHQUFSLENBQVkwRCxHQUFaO0FBQ0ExQjtBQUNIO0FBQ0osU0FqQkU7QUFrQkh3QixlQUFPLGVBQVNyQixJQUFULEVBQWM7QUFDakJ6QyxjQUFFLFFBQUYsRUFBWWlCLElBQVosQ0FBaUJ3QixLQUFLNEIsWUFBdEI7QUFDQWhFLG9CQUFRQyxHQUFSLENBQVksMkJBQVo7QUFDQUQsb0JBQVFDLEdBQVIsQ0FBWW1DLElBQVo7QUFDQTtBQUNBO0FBQ0g7QUF4QkUsS0FBUDtBQTBCSCxDQTVCRDs7QUE4QkE7QUFDQTtBQUNBdkIsT0FBT29ELFVBQVAsR0FBb0IsVUFBU3RCLEtBQVQsRUFBZ0JiLE1BQWhCLEVBQXdCTSxJQUF4QixFQUE4QnJCLE1BQTlCLEVBQ3BCO0FBQ0lwQixNQUFFaUQsSUFBRixDQUFPO0FBQ0hDLGFBQUtGLEtBREY7QUFFSEcsZ0JBQVEsTUFGTDtBQUdIQyxrQkFBVSxNQUhQO0FBSUhYLGNBQU0sRUFBRUEsVUFBRixFQUFRckIsUUFBUUEsTUFBaEIsRUFKSDtBQUtIaUMsaUJBQVMsaUJBQVNaLElBQVQsRUFBYztBQUNuQixnQkFBR0EsS0FBS2EsUUFBTCxJQUFpQixTQUFwQixFQUE4QjtBQUMxQixvQkFBR25CLFVBQVUsUUFBYixFQUFzQjtBQUNsQjtBQUNBakIsMkJBQU93QyxRQUFQLEdBQWtCeEMsT0FBT3dDLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCTyxLQUFyQixDQUEyQixHQUEzQixFQUFnQyxDQUFoQyxJQUFxQyxjQUF2RDtBQUNILGlCQUhELE1BR087QUFDSGhELDJCQUFPd0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUJ4QixNQUF2QjtBQUNIO0FBQ0osYUFQRCxNQU9PO0FBQ0g5Qix3QkFBUUMsR0FBUixDQUFZLHFCQUFaO0FBQ0FELHdCQUFRQyxHQUFSLENBQVltQyxJQUFaO0FBQ0E4Qiw0QkFBWSxFQUFaLEVBQWdCOUIsS0FBS2UsT0FBckIsRUFBOEIsY0FBOUIsRUFBOEMsRUFBOUM7QUFDQXhELGtCQUFFLHFCQUFGLEVBQXlCaUIsSUFBekIsQ0FBOEJ3QixLQUFLZSxPQUFuQztBQUNBO0FBQ0g7QUFDSixTQXBCRTtBQXFCSE0sZUFBTyxlQUFTckIsSUFBVCxFQUFjO0FBQ2pCO0FBQ0FwQyxvQkFBUUMsR0FBUixDQUFZLHVCQUFaO0FBQ0FELG9CQUFRQyxHQUFSLENBQVltQyxJQUFaO0FBQ0FpQixxQkFBU2MsTUFBVDtBQUNIO0FBMUJFLEtBQVA7QUE0QkgsQ0E5QkQ7O0FBZ0NBO0FBQ0E7QUFDQXRELE9BQU91RCxvQkFBUCxHQUE4QixVQUFTekIsS0FBVCxFQUFnQjBCLElBQWhCLEVBQXNCQyxNQUF0QixFQUM5QjtBQUNJLFFBQUlDLFlBQVk1RSxFQUFFLFlBQUYsQ0FBaEI7QUFDQSxRQUFJNkUsWUFBWTdFLEVBQUUsZUFBRixDQUFoQjtBQUNBSyxZQUFRQyxHQUFSLENBQVlvRSxJQUFaLEVBQWtCQyxNQUFsQjtBQUNBM0UsTUFBRWlELElBQUYsQ0FBTztBQUNIQyxhQUFLRixLQURGO0FBRUhHLGdCQUFRLE1BRkw7QUFHSEMsa0JBQVUsTUFIUDtBQUlIWCxjQUFNLEVBQUNpQyxNQUFNQSxJQUFQLEVBQWFDLFFBQVFBLE1BQXJCLEVBSkg7QUFLSEcsb0JBQVksc0JBQVU7QUFDbEJ6RSxvQkFBUUMsR0FBUixDQUFZLHNCQUFaO0FBQ0FOLGNBQUUsZUFBRixFQUFtQkUsV0FBbkIsQ0FBK0IsUUFBL0I7QUFDSCxTQVJFO0FBU0htRCxpQkFBUyxpQkFBU1osSUFBVCxFQUFjO0FBQ25CLGdCQUFHQSxLQUFLYSxRQUFMLElBQWlCLElBQXBCLEVBQXlCO0FBQ3JCdEQsa0JBQUUsMEJBQUYsRUFBOEJpQixJQUE5QixDQUFtQyxrQkFBbkM7QUFDQTJELDBCQUFVVCxJQUFWLENBQWUsR0FBZixFQUFvQixZQUFXO0FBQzNCVSw4QkFBVTNFLFdBQVYsQ0FBc0IsUUFBdEI7QUFDSCxpQkFGRDtBQUdBd0QseUJBQVNjLE1BQVQ7QUFDSCxhQU5ELE1BTU8sSUFBRy9CLEtBQUthLFFBQUwsSUFBaUIsSUFBcEIsRUFBeUI7QUFDNUJ0RCxrQkFBRSwwQkFBRixFQUE4QmlCLElBQTlCLENBQW1Dd0IsS0FBS2UsT0FBeEM7QUFDSDtBQUNKLFNBbkJFO0FBb0JITSxlQUFPLGVBQVNyQixJQUFULEVBQWM7QUFDakJ6QyxjQUFFLDBCQUFGLEVBQThCaUIsSUFBOUIsQ0FBbUN3QixLQUFLNEIsWUFBeEM7QUFDQWhFLG9CQUFRQyxHQUFSLENBQVltQyxJQUFaO0FBQ0gsU0F2QkU7QUF3QkhzQyxrQkFBVSxvQkFBVTtBQUNoQi9FLGNBQUUsZUFBRixFQUFtQmdGLFFBQW5CLENBQTRCLFFBQTVCO0FBQ0g7QUExQkUsS0FBUDtBQTRCSCxDQWpDRDs7QUF1Q0E5RCxPQUFPK0QsZ0JBQVAsR0FBMEIsVUFBU2pDLEtBQVQsRUFBZ0JrQyxLQUFoQixFQUF1QkMsU0FBdkIsRUFBa0MvRCxNQUFsQyxFQUEwQ2dFLGFBQTFDLEVBQXdEO0FBQzlFcEYsTUFBRWlELElBQUYsQ0FBTztBQUNIQyxhQUFLRixLQURGO0FBRUhHLGdCQUFRLE1BRkw7QUFHSEMsa0JBQVUsTUFIUDtBQUlIWCxjQUFNLEVBQUU0QyxRQUFRSCxLQUFWLEVBQWlCSSxZQUFZSCxTQUE3QixFQUpIO0FBS0g5QixpQkFBUyxpQkFBU1osSUFBVCxFQUFjO0FBQ25CLGdCQUFHQSxLQUFLYSxRQUFMLElBQWlCLElBQWpCLElBQXlCYixLQUFLOEMsTUFBTCxJQUFlLE9BQTNDLEVBQW1EO0FBQy9DLHdCQUFPbkUsTUFBUDtBQUNJLHlCQUFLLFFBQUw7QUFDSXNDLGlDQUFTYyxNQUFUO0FBQ0E7QUFDSix5QkFBSyxNQUFMO0FBQ0lZLHNDQUFjbEYsV0FBZCxDQUEwQixnQkFBMUI7QUFDQWtGLHNDQUFjSixRQUFkLENBQXVCLGdCQUF2QjtBQUNBekIsc0NBQWMsS0FBZCxFQUFxQiwrQkFBckIsRUFBc0QsY0FBdEQ7QUFDQTtBQUNKLHlCQUFLLE1BQUw7QUFDSWxELGdDQUFRQyxHQUFSLENBQVksMEJBQVo7QUFDSjtBQUNJRCxnQ0FBUUMsR0FBUixDQUFZLGVBQVo7QUFDQTtBQWJSO0FBZUgsYUFoQkQsTUFnQk8sSUFBR21DLEtBQUthLFFBQUwsSUFBaUIsSUFBakIsSUFBeUJiLEtBQUs4QyxNQUFMLElBQWUsU0FBM0MsRUFBc0Q7QUFDckRILDhCQUFjSixRQUFkLENBQXVCLGdCQUF2QjtBQUNBSSw4QkFBY2xGLFdBQWQsQ0FBMEIsZ0JBQTFCO0FBQ0FxRCw4QkFBYyxLQUFkLEVBQXFCLGlDQUFyQixFQUF3RCxjQUF4RDtBQUNQO0FBQ0osU0EzQkU7QUE0QkhPLGVBQU8sZUFBU3JCLElBQVQsRUFBYztBQUNqQjtBQUNBcEMsb0JBQVFDLEdBQVIsQ0FBWW1DLElBQVo7QUFDSDtBQS9CRSxLQUFQO0FBaUNILENBbENEOztBQW9DQXZCLE9BQU9zRSxxQkFBUCxHQUErQixVQUFTeEMsS0FBVCxFQUFnQmtDLEtBQWhCLEVBQXVCOUQsTUFBdkIsRUFBOEI7QUFDekQsUUFBSXFFLFdBQVdyRSxNQUFmO0FBQ0FwQixNQUFFaUQsSUFBRixDQUFPO0FBQ0hDLGFBQUtGLEtBREY7QUFFSEcsZ0JBQVEsTUFGTDtBQUdIQyxrQkFBVSxNQUhQO0FBSUhYLGNBQU0sRUFBRTRDLFFBQVFILEtBQVYsRUFKSDtBQUtIN0IsaUJBQVMsaUJBQVNaLElBQVQsRUFBYztBQUNuQnpDLGNBQUUsUUFBRixFQUFZaUIsSUFBWixDQUFpQndCLEtBQUs0QixZQUF0QjtBQUNBaEUsb0JBQVFDLEdBQVIsQ0FBWW1DLElBQVo7QUFDQSxnQkFBR0EsS0FBS2EsUUFBTCxJQUFpQixJQUFwQixFQUF5QjtBQUNyQmpELHdCQUFRQyxHQUFSLENBQVltRixRQUFaO0FBQ0Esd0JBQU9BLFFBQVA7QUFDSSx5QkFBSyxRQUFMO0FBQ0ksNEJBQUlyRSxTQUFTLFFBQWI7QUFDQW1DLHNDQUFjLEtBQWQsRUFBcUIsaUNBQXJCLEVBQXdELGNBQXhELEVBQXdFbkMsTUFBeEUsRUFBZ0YsSUFBaEY7QUFDQTtBQUNKO0FBQ0lmLGdDQUFRQyxHQUFSLENBQVksZUFBWjtBQUNBO0FBUFI7QUFTSCxhQVhELE1BV087QUFDUDtBQUNBRCx3QkFBUUMsR0FBUixDQUFZbUMsSUFBWjtBQUNDO0FBQ0osU0F2QkU7QUF3QkhxQixlQUFPLGVBQVNyQixJQUFULEVBQWM7QUFDakI7QUFDQXBDLG9CQUFRQyxHQUFSLENBQVltQyxJQUFaO0FBQ0g7QUEzQkUsS0FBUDtBQTZCSCxDQS9CRDs7QUFrQ0F2QixPQUFPd0UseUJBQVAsR0FBbUMsVUFBUzFDLEtBQVQsRUFBZ0IyQyxVQUFoQixFQUE0QnZFLE1BQTVCLEVBQW1DO0FBQ2xFcEIsTUFBRWlELElBQUYsQ0FBTztBQUNIQyxhQUFLRixLQURGO0FBRUhHLGdCQUFRLE1BRkw7QUFHSEMsa0JBQVUsTUFIUDtBQUlIWCxjQUFNLEVBQUVtRCxhQUFhRCxVQUFmLEVBSkg7QUFLSHRDLGlCQUFTLGlCQUFTWixJQUFULEVBQWM7QUFDbkJwQyxvQkFBUUMsR0FBUixDQUFZbUMsSUFBWjtBQUNBO0FBQ0EsZ0JBQUdBLEtBQUthLFFBQUwsSUFBaUIsSUFBcEIsRUFBeUI7QUFDckIsd0JBQU9sQyxNQUFQO0FBQ0kseUJBQUssUUFBTDtBQUNJc0MsaUNBQVNjLE1BQVQ7QUFDQTtBQUNKO0FBQ0luRSxnQ0FBUUMsR0FBUixDQUFZLGVBQVo7QUFDQTtBQU5SO0FBUUgsYUFURCxNQVNPO0FBQ1BOLGtCQUFFLFFBQUYsRUFBWWlCLElBQVosQ0FBaUJ3QixLQUFLZSxPQUFMLENBQWEsV0FBYixDQUFqQjtBQUNBbkQsd0JBQVFDLEdBQVIsQ0FBWW1DLElBQVo7QUFDQztBQUNKLFNBckJFO0FBc0JIcUIsZUFBTyxlQUFTckIsSUFBVCxFQUFjO0FBQ2pCO0FBQ0FwQyxvQkFBUUMsR0FBUixDQUFZbUMsSUFBWjtBQUNIO0FBekJFLEtBQVA7QUEyQkgsQ0E1QkQsQyIsImZpbGUiOiIvanMvc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3Mik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTVlY2FkZDA5M2E1MTUwZThjN2EiLCIvLyBMb2FkZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4kKCBcIi5sb2FkZXItb24tY2hhbmdlXCIgKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgJCgnI2Z1bGwtbG9hZGVyJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xuICAgIHJldHVybiB0cnVlO1xufSk7XG5cbiQoIFwiLmxvYWRlci1vbi1zdWJtaXRcIiApLm9uKCdzdWJtaXQnLCBmdW5jdGlvbigpIHtcbiAgICAkKCcjZnVsbC1sb2FkZXInKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuJCgnLmRvbnQtc3VibWl0LW9uLWVudGVyLCAuZHNvbicpLmtleXByZXNzKGZ1bmN0aW9uKGUpe1xuICAgIGNvbnNvbGUubG9nKFwiRU5URVJcIik7XG4gICAgaWYgKCBlLndoaWNoID09IDEzICkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICggZS53aGljaCA9PSAxMyApIGUucHJldmVudERlZmF1bHQoKTtcbiB9KTsgXG5cbi8vIE1vZGlmeSBjYXJ0IGl0ZW0gcXVhbnRpdHkgXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4kKCcuSW5wdXRCdG5RJykub24oJ2NoYW5nZSBrZXl1cCcsIGZ1bmN0aW9uKCl7XG4gICAgLy8gIE9yaWdpbmFsIEFydGljbGUgUHJpY2VcbiAgICBsZXQgdmFsdWUgPSAkKHRoaXMpLnNpYmxpbmdzKCcuQXJ0aWNsZVByaWNlJykudmFsKCk7XG4gICAgLy8gUXVhbnRpdHlcbiAgICBsZXQgcXVhbnRpdHkgPSAkKHRoaXMpLnZhbCgpO1xuICAgIC8vIE5lciBWYWx1ZVxuICAgIGxldCBuZXdWYWx1ZSA9ICh2YWx1ZSAqIHF1YW50aXR5KTtcbiAgICAvLyBOZXcgUHJpY2UgVGFyZ2V0XG4gICAgbGV0IG5ld1ByaWNlVGFyZ2V0ID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5zaWJsaW5ncygnLlRvdGFsSXRlbVByaWNlJyk7XG5cbiAgICBjb25zb2xlLmxvZyh2YWx1ZSwgcXVhbnRpdHksIG5ld1ZhbHVlKTtcbiAgICBtb2RpZnlDYXJ0SXRlbVEoJCh0aGlzKSwgbmV3UHJpY2VUYXJnZXQsIG5ld1ZhbHVlKTtcbn0pXG5cbmZ1bmN0aW9uIG1vZGlmeUNhcnRJdGVtUShlLCBuZXdQcmljZVRhcmdldCwgbmV3VmFsdWUpXG57XG4gICAgZS5zaWJsaW5ncygnLklucHV0QnRuUScpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcbiAgICBuZXdQcmljZVRhcmdldC5odG1sKCckICcrbmV3VmFsdWUpO1xufVxuXG5cbi8vIENoZWNrb3V0IHNpZGViYXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cdFx0XG53aW5kb3cuY2hlY2tvdXRTaWRlYmFyID0gZnVuY3Rpb24oYWN0aW9uKSBcbntcbiAgICBpZihhY3Rpb24gPT0gJ29wZW4nKVxuICAgIHtcbiAgICAgICAgJCgnI1NpZGVDb250YWluZXInKS50b2dnbGUoMTAwKTtcbiAgICAgICAgJCgnI01haW5PdmVybGF5JykuZmFkZUluKDEwMCk7XG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgIH1cbiAgICBpZihhY3Rpb24gPT0gJ2Nsb3NlJylcbiAgICB7XG4gICAgICAgICQoJyNTaWRlQ29udGFpbmVyJykudG9nZ2xlKDEwMCk7XG4gICAgICAgICQoJyNNYWluT3ZlcmxheScpLmZhZGVPdXQoMTAwKTtcbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cteScsICdzY3JvbGwnKTtcbiAgICB9XG59XG5cbiQoJyNNYWluT3ZlcmxheScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgY2hlY2tvdXRTaWRlYmFyKFwiY2xvc2VcIik7XG59KTtcblxuXG53aW5kb3cub3BlbkZpbHRlcnMgPSBmdW5jdGlvbigpXG57XG4gICAgY29uc3QgZmlsdGVycyA9ICQoJyNTZWFyY2hGaWx0ZXJzJyk7XG4gICAgaWYoZmlsdGVycy5jc3MoJ2Rpc3BsYXknKSA9PSAnbm9uZScpXG4gICAge1xuICAgICAgICBmaWx0ZXJzLmNzcygnZGlzcGxheScsJ2luaGVyaXQnKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgZmlsdGVycy5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG4gICAgfVxufVxuXG4vLyBIaWRlIGFsZXJ0c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gc2V0VGltZW91dChmdW5jdGlvbigpe1xuLy8gICAgICQoJy5hbGVydCcpLmhpZGUoMTAwKTtcbi8vIH0sIDQwMDApO1xuXG5cbi8vIENhcnQgUmVzdW1lblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB3aW5kb3cuc2hvd0NhcnRSZXN1bWVNb2JpbGUgPSBmdW5jdGlvbigpXG4vLyB7XG4vLyAgICAgJCgnLmNhcnQtcmVzdW1lLWRldGFpbHMtbW9iaWxlJykudG9nZ2xlQ2xhc3MoJ0hpZGRlbicsIDEwMCk7XG4vLyB9XG5cbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgQ0FSVFxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuICBcbiAgICAgICAgXG53aW5kb3cuc3VtQWxsSXRlbXMgPSBmdW5jdGlvbigpXG57XG4gICAgc3VtID0gMDtcbiAgICAkKCcuVG90YWxJdGVtUHJpY2UnKS5lYWNoKGZ1bmN0aW9uKCBpbmRleCApIHtcbiAgICAgICAgc3VtICs9IHBhcnNlSW50KCQodGhpcykuaHRtbCgpKTtcbiAgICB9KTtcbiAgICAkKCcuU3ViVG90YWwnKS5odG1sKHN1bSk7XG59XG4gICAgXG4gICAgXG4vLyBTdW0gZGl2cyB0ZXh0XG53aW5kb3cuc3VtRGl2cyA9IGZ1bmN0aW9uKG9yaWdpbnMsIHRhcmdldCl7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgb3JpZ2lucy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHN1bSArPSBwYXJzZUZsb2F0KCQodGhpcykudGV4dCgpKTtcbiAgICB9KTtcbiAgICB0YXJnZXQudGV4dChzdW0pOyAgIFxufVxuXG5cbi8vIFNldCBjYXJ0IGl0ZW1zIEpTT05cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbndpbmRvdy5zZXRJdGVtc0RhdGEgPSBmdW5jdGlvbigpIFxue1xuICAgIGNvbnNvbGUubG9nKFwiSW5zZXJ0YW5kb2xhXCIpO1xuICAgIGl0ZW1EYXRhID0gW107XG4gICAgXG4gICAgJCgnLkl0ZW0tRGF0YScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcbiAgICAgICAgdmFyIHByaWNlID0gJCh0aGlzKS5kYXRhKCdwcmljZScpO1xuICAgICAgICB2YXIgcXVhbnRpdHkgPSAkKHRoaXMpLnZhbCgpO1xuXG4gICAgICAgIGl0ZW0gPSB7fVxuICAgICAgICBpdGVtIFsnaWQnXSA9IGlkO1xuICAgICAgICBpdGVtIFsncHJpY2UnXSA9IHByaWNlO1xuICAgICAgICBpdGVtIFsncXVhbnRpdHknXSA9IHF1YW50aXR5O1xuICAgICAgICAvLyBVcGRhdGUgZGlzcGxheSB0b3RhbCBpdGVtIHByaWNlXG4gICAgICAgIHRvdGFsID0gcHJpY2UgKiBxdWFudGl0eTtcbiAgICAgICAgJCgnLicraWQrJy1Ub3RhbEl0ZW1QcmljZScpLmh0bWwodG90YWwpO1xuXG4gICAgICAgIGl0ZW1EYXRhLnB1c2goaXRlbSk7XG4gICAgfSk7XG4gICAgLy8gVXBkYXRlIFRvdGFsXG4gICAgY29uc29sZS5pbmZvKGl0ZW1EYXRhKTtcbiAgICBzdW1BbGxJdGVtcygpO1xuICAgICQoJyNJdGVtcy1EYXRhJykudmFsKGl0ZW1EYXRhKTtcbn1cblxuLy8gQWRkIHByb2R1Y3QgdG8gY2FydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxud2luZG93LmFkZFRvQ2FydCA9IGZ1bmN0aW9uKHJvdXRlLCBkYXRhKVxue1xuICAgICQuYWpheCh7XHRcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsICAgICAgICAgICAgIFxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGlmKGRhdGEucmVzcG9uc2UgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgICAgICB0b2FzdF9zdWNjZXNzKCdPayEnLCBkYXRhLm1lc3NhZ2UsICdib3R0b21DZW50ZXInLCAnJywgMjUwMCk7XG4gICAgICAgICAgICAgICAgLy8gTGl2ZSBSZWxvYWRpbmcgc3R1ZmZcbiAgICAgICAgICAgICAgICAkKFwiI1NpZGVDb250YWluZXJJdGVtc1wiKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCIgI1NpZGVDb250YWluZXJJdGVtc1wiKTtcbiAgICAgICAgICAgICAgICAkKFwiLlRvdGFsQ2FydEl0ZW1zXCIpLmxvYWQod2luZG93LmxvY2F0aW9uLmhyZWYgKyBcIiAuVG90YWxDYXJ0SXRlbXNcIik7XG4gICAgICAgICAgICAgICAgJChcIi5DYXJ0U3ViVG90YWxcIikubG9hZCh3aW5kb3cubG9jYXRpb24uaHJlZiArIFwiIC5DYXJ0U3ViVG90YWxcIik7XG4gICAgICAgICAgICAgICAgJChcIi5BdmFpbGFibGVTdG9ja1wiKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCIgLkF2YWlsYWJsZVN0b2NrXCIpO1xuICAgICAgICAgICAgICAgIHNldEl0ZW1zRGF0YSgpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbXNEYXRhKCk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmKCRkYXRhLnJlc3BvbnNlID09ICd3YXJuaW5nJykge1xuICAgICAgICAgICAgICAgIHRvYXN0X3N1Y2Nlc3MoJ1VwcyEnLCBkYXRhLm1lc3NhZ2UsICdib3R0b21DZW50ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgLy8gJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGVuIGFkZHRvQ2FydCgpXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gUmVtb3ZlIHByb2R1Y3QgZnJvbSBjYXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG53aW5kb3cucmVtb3ZlRnJvbUNhcnQgPSBmdW5jdGlvbihyb3V0ZSwgaWQsIHF1YW50aXR5LCBkaXYsIGFjdGlvbilcbntcbiAgICAkLmFqYXgoe1x0XG4gICAgICAgIHVybDogcm91dGUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCAgICAgICAgICAgICBcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YTogeyBpdGVtaWQ6IGlkLCBxdWFudGl0eTogcXVhbnRpdHksIGFjdGlvbjogYWN0aW9uLCBtZXRob2Q6ICdhamF4JyB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGlmKGRhdGEucmVzcG9uc2UgPT0gJ2NhcnQtcmVtb3ZlZCcpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiP1wiKVswXTtcbiAgICAgICAgICAgICAgICBzZXRJdGVtc0RhdGEoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihkYXRhLnJlc3BvbnNlID09ICdzdWNjZXNzJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkKGRpdikuaGlkZSgxMDApO1xuICAgICAgICAgICAgICAgICQoZGl2KS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkaXYpO1xuICAgICAgICAgICAgICAgIHNldEl0ZW1zRGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW4gcmVtb3ZlRnJvbUNhcnQoKVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgLy8gSWYgYW4gZXJyb3IgcG9wcyB3aGVuIGRlc3Ryb3lpbmcgYW4gaXRlbSwgcmVsb2FkIGFuZCBwcmV2ZW50IGJhZCBtYWdpY1xuICAgICAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gU3VibWl0IEZvcm1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbndpbmRvdy5zdWJtaXRGb3JtID0gZnVuY3Rpb24ocm91dGUsIHRhcmdldCwgZGF0YSwgYWN0aW9uKVxue1xuICAgICQuYWpheCh7XHRcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsICAgICAgICAgICAgIFxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICBkYXRhOiB7IGRhdGEsIGFjdGlvbjogYWN0aW9uIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgaWYoZGF0YS5yZXNwb25zZSA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgICAgIGlmKHRhcmdldCA9PSAncmVsb2FkJyl7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlZnJlc2ggcGFnZSwgZGVsZXRlIHBhcmFtZXR0ZXJzIGFuZCBvcGVuIGNoZWNrb3V0IHNpZGViYXJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzBdICsgXCI/Y2hlY2tvdXQtb25cIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBlbiBzdWJtaXRGb3JtJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgdG9hc3RfZXJyb3IoJycsIGRhdGEubWVzc2FnZSwgJ2JvdHRvbUNlbnRlcicsICcnKTtcbiAgICAgICAgICAgICAgICAkKCcuU2lkZUNvbnRhaW5lckVycm9yJykuaHRtbChkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIC8vICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAvLyAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW4gc3VibWl0Rm9ybSgpXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBWYWxpZGF0ZSBhbmQgc2V0IGNvdXBvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxud2luZG93LnZhbGlkYXRlQW5kU2V0Q291cG9uID0gZnVuY3Rpb24ocm91dGUsIGNvZGUsIGNhcnRpZClcbntcbiAgICBsZXQgY291cG9uRGl2ID0gJCgnI0NvdXBvbkRpdicpO1xuICAgIGxldCBjb3Vwb25TZXQgPSAkKCcjU2V0dGVkQ291cG9uJyk7XG4gICAgY29uc29sZS5sb2coY29kZSwgY2FydGlkKTtcbiAgICAkLmFqYXgoe1x0XG4gICAgICAgIHVybDogcm91dGUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCAgICAgICAgICAgICBcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YToge2NvZGU6IGNvZGUsIGNhcnRpZDogY2FydGlkfSxcbiAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29tcHJvYmFuZG8gY3Vww7NuLi4uXCIpO1xuICAgICAgICAgICAgJCgnLkNvdXBvbkxvYWRlcicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBpZihkYXRhLnJlc3BvbnNlID09IHRydWUpe1xuICAgICAgICAgICAgICAgICQoJyNDb3Vwb25WYWxpZGF0aW9uTWVzc2FnZScpLmh0bWwoXCJDdXDDs24gYWNlcHRhZG8gIVwiKTtcbiAgICAgICAgICAgICAgICBjb3Vwb25EaXYuaGlkZSgyMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb3Vwb25TZXQucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGRhdGEucmVzcG9uc2UgPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgJCgnI0NvdXBvblZhbGlkYXRpb25NZXNzYWdlJykuaHRtbChkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAkKCcjQ291cG9uVmFsaWRhdGlvbk1lc3NhZ2UnKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQoJy5Db3Vwb25Mb2FkZXInKS5hZGRDbGFzcygnSGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG5cblxuXG53aW5kb3cuYWRkQXJ0aWNsZVRvRmF2cyA9IGZ1bmN0aW9uKHJvdXRlLCBmYXZpZCwgYXJ0aWNsZWlkLCBhY3Rpb24sIGRpc3BsYXlCdXR0b24pe1xuICAgICQuYWpheCh7XHRcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IHsgZmF2X2lkOiBmYXZpZCwgYXJ0aWNsZV9pZDogYXJ0aWNsZWlkIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgaWYoZGF0YS5yZXNwb25zZSA9PSB0cnVlICYmIGRhdGEucmVzdWx0ID09ICdhZGRlZCcpe1xuICAgICAgICAgICAgICAgIHN3aXRjaChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUJ1dHRvbi5yZW1vdmVDbGFzcygnZmF2LWljb24tbm9mYXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlCdXR0b24uYWRkQ2xhc3MoJ2Zhdi1pY29uLWlzZmF2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdF9zdWNjZXNzKCdPayEnLCAnUHJvZHVjdG8gYWdyZWdhZG8gYSBmYXZvcml0b3MnLCAnYm90dG9tQ2VudGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm9uZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWN0dWFsaXphZG8gLSBTaW4gQWNjacOzbicpO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGhheSBhY2Npw7NuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfSBlbHNlIGlmKGRhdGEucmVzcG9uc2UgPT0gdHJ1ZSAmJiBkYXRhLnJlc3VsdCA9PSAncmVtb3ZlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUJ1dHRvbi5hZGRDbGFzcygnZmF2LWljb24tbm9mYXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUJ1dHRvbi5yZW1vdmVDbGFzcygnZmF2LWljb24taXNmYXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3Rfc3VjY2VzcygnT2shJywgJ1Byb2R1Y3RvIGVsaW1pbmFkbyBkZSBmYXZvcml0b3MnLCAnYm90dG9tQ2VudGVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIC8vICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxud2luZG93LnJlbW92ZUFydGljbGVGcm9tRmF2cyA9IGZ1bmN0aW9uKHJvdXRlLCBmYXZpZCwgYWN0aW9uKXtcbiAgICB2YXIgZG9hY3Rpb24gPSBhY3Rpb247XG4gICAgJC5hamF4KHtcdFxuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJywgICAgICAgICAgICAgXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IHsgZmF2X2lkOiBmYXZpZCB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBpZihkYXRhLnJlc3BvbnNlID09IHRydWUpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2goZG9hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSAncmVsb2FkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0X3N1Y2Nlc3MoJ09rIScsICdQcm9kdWN0byBlbGltaW5hZG8gZGUgZmF2b3JpdG9zJywgJ2JvdHRvbUNlbnRlcicsIGFjdGlvbiwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBoYXkgYWNjacOzbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyQoJyNFcnJvcicpLmh0bWwoZGF0YS5tZXNzYWdlWydlcnJvckluZm8nXSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgLy8kKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxud2luZG93LnJlbW92ZUFsbEFydGljbGVzRnJvbUZhdnMgPSBmdW5jdGlvbihyb3V0ZSwgY3VzdG9tZXJpZCwgYWN0aW9uKXtcbiAgICAkLmFqYXgoe1x0XG4gICAgICAgIHVybDogcm91dGUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCAgICAgICAgICAgICBcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YTogeyBjdXN0b21lcl9pZDogY3VzdG9tZXJpZCB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgLy8kKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGlmKGRhdGEucmVzcG9uc2UgPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgc3dpdGNoKGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdyZWxvYWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBoYXkgYWNjacOzbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEubWVzc2FnZVsnZXJyb3JJbmZvJ10pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIC8vJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9zY3JpcHRzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==