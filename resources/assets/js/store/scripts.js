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


// Cart Actions
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