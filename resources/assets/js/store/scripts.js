// Loaders
// -------------------------------------------
$( ".loader-on-change" ).on('change', function() {
    $('#full-loader').removeClass('Hidden');
    return true;
});

$( ".loader-on-submit" ).on('submit', function() {
    $('#full-loader').removeClass('Hidden');
    return true;
});

$('.dont-submit-on-enter, .dson').keypress(function(e){
    console.log("ENTER");
    if ( e.which == 13 ) return false;
    if ( e.which == 13 ) e.preventDefault();
 }); 

// Modify cart item quantity 
// -------------------------------------------
$('.InputBtnQ').on('change keyup', function(){
    //  Original Article Price
    let value = $(this).siblings('.ArticlePrice').val();
    // Quantity
    let quantity = $(this).val();
    // Ner Value
    let newValue = (value * quantity);
    // New Price Target
    let newPriceTarget = $(this).parent().parent().parent().siblings('.TotalItemPrice');

    console.log(value, quantity, newValue);
    modifyCartItemQ($(this), newPriceTarget, newValue);
})

function modifyCartItemQ(e, newPriceTarget, newValue)
{
    e.siblings('.InputBtnQ').removeClass('Hidden');
    newPriceTarget.html('$ '+newValue);
}


// Checkout sidebar
// -------------------------------------------		
window.checkoutSidebar = function(action) 
{
    if(action == 'open')
    {
        $('#SideContainer').toggle(100);
        $('#MainOverlay').fadeIn(100);
        $('body').css('overflow', 'hidden');
    }
    if(action == 'close')
    {
        $('#SideContainer').toggle(100);
        $('#MainOverlay').fadeOut(100);
        $('body').css('overflow-y', 'scroll');
    }
}

$('#MainOverlay').click(function(){
    checkoutSidebar("close");
});


window.openFilters = function()
{
    const filters = $('#SearchFilters');
    if(filters.css('display') == 'none')
    {
        filters.css('display','inherit');
    }
    else
    {
        filters.css('display','none');
    }
}

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
  
        
window.sumAllItems = function()
{
    sum = 0;
    $('.TotalItemPrice').each(function( index ) {
        sum += parseInt($(this).html());
    });
    $('.SubTotal').html(sum);
}
    
    
// Sum divs text
window.sumDivs = function(origins, target){
    let sum = 0;
    origins.each(function(){
        sum += parseFloat($(this).text());
    });
    target.text(sum);   
}


// Set cart items JSON
// -------------------------------------------
window.setItemsData = function() 
{
    console.log("Insertandola");
    itemData = [];
    
    $('.Item-Data').each(function() {
        var id = $(this).data('id');
        var price = $(this).data('price');
        var quantity = $(this).val();

        item = {}
        item ['id'] = id;
        item ['price'] = price;
        item ['quantity'] = quantity;
        // Update display total item price
        total = price * quantity;
        $('.'+id+'-TotalItemPrice').html(total);

        itemData.push(item);
    });
    // Update Total
    console.info(itemData);
    sumAllItems();
    $('#Items-Data').val(itemData);
}

// Add product to cart
// -------------------------------------------
window.addToCart = function(route, data)
{
    $.ajax({	
        url: route,
        method: 'POST',             
        dataType: 'JSON',
        data: data,
        success: function(data){
            if(data.response == 'success'){
                toast_success('Ok!', data.message, 'bottomCenter', '', 2500);
                // Live Reloading stuff
                $("#SideContainerItems").load(window.location.href + " #SideContainerItems");
                $(".TotalCartItems").load(window.location.href + " .TotalCartItems");
                $(".CartSubTotal").load(window.location.href + " .CartSubTotal");
                $(".AvailableStock").load(window.location.href + " .AvailableStock");
                setItemsData();
                setTimeout(function(){
                    setItemsData();
                }, 100);

            } else if($data.response == 'warning') {
                toast_success('Ups!', data.message, 'bottomCenter');
            }
        },
        error: function(data){
            // $('#Error').html(data.responseText);
            console.log("Error en addtoCart()");
            console.log(data);
        }
    });
}

// Remove product from cart
// -------------------------------------------
window.removeFromCart = function(route, id, quantity, div, action)
{
    $.ajax({	
        url: route,
        method: 'POST',             
        dataType: 'JSON',
        data: { itemid: id, quantity: quantity, action: action, method: 'ajax' },
        success: function(data){
            if(data.response == 'cart-removed'){
                console.log(data);
                window.location = window.location.href.split("?")[0];
                setItemsData();
            } else if(data.response == 'success')
            {
                $(div).hide(100);
                $(div).remove();
                console.log(div);
                setItemsData();
            }
        },
        error: function(data){
            $('#Error').html(data.responseText);
            console.log("Error en removeFromCart()");
            console.log(data);
            // If an error pops when destroying an item, reload and prevent bad magic
            // location.reload();
        }
    });
}

// Submit Form
// -------------------------------------------
window.submitForm = function(route, target, data, action)
{
    $.ajax({	
        url: route,
        method: 'POST',             
        dataType: 'JSON',
        data: { data, action: action },
        success: function(data){
            if(data.response == 'success'){
                if(target == 'reload'){
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
        error: function(data){
            // $('#Error').html(data.responseText);
            console.log("Error en submitForm()");
            console.log(data);
            location.reload();
        }
    });
}

// Validate and set coupon
// -------------------------------------------
window.validateAndSetCoupon = function(route, code, cartid)
{
    let couponDiv = $('#CouponDiv');
    let couponSet = $('#SettedCoupon');
    console.log(code, cartid);
    $.ajax({	
        url: route,
        method: 'POST',             
        dataType: 'JSON',
        data: {code: code, cartid: cartid},
        beforeSend: function(){
            console.log("Comprobando cupón...");
            $('.CouponLoader').removeClass('Hidden');
        },
        success: function(data){
            if(data.response == true){
                $('#CouponValidationMessage').html("Cupón aceptado !");
                couponDiv.hide(200, function() {
                    couponSet.removeClass('Hidden');
                });
                location.reload();
            } else if(data.response == null){
                $('#CouponValidationMessage').html(data.message);
            }
        },
        error: function(data){
            $('#CouponValidationMessage').html(data.responseText);
            console.log(data);
        },
        complete: function(){
            $('.CouponLoader').addClass('Hidden');
        }
    });
}





window.addArticleToFavs = function(route, favid, articleid, action, displayButton){
    $.ajax({	
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { fav_id: favid, article_id: articleid },
        success: function(data){
            if(data.response == true && data.result == 'added'){
                switch(action) {
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
            } else if(data.response == true && data.result == 'removed') {
                    displayButton.addClass('fav-icon-nofav');
                    displayButton.removeClass('fav-icon-isfav');
                    toast_success('Ok!', 'Producto eliminado de favoritos', 'bottomCenter');
            }
        },
        error: function(data){
            // $('#Error').html(data.responseText);
            console.log(data);
        }
    });
}

window.removeArticleFromFavs = function(route, favid, action){
    var doaction = action;
    $.ajax({	
        url: route,
        method: 'POST',             
        dataType: 'JSON',
        data: { fav_id: favid },
        success: function(data){
            $('#Error').html(data.responseText);
            console.log(data);
            if(data.response == true){
                console.log(doaction);
                switch(doaction) {
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
        error: function(data){
            //$('#Error').html(data.responseText);
            console.log(data);
        }
    });
}


window.removeAllArticlesFromFavs = function(route, customerid, action){
    $.ajax({	
        url: route,
        method: 'POST',             
        dataType: 'JSON',
        data: { customer_id: customerid },
        success: function(data){
            console.log(data);
            //$('#Error').html(data.responseText);
            if(data.response == true){
                switch(action) {
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
        error: function(data){
            //$('#Error').html(data.responseText);
            console.log(data);
        }
    });
}
