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


// Hide alerts
// -------------------------------------------
// setTimeout(function(){
//     $('.alert').hide(100);
// }, 4000);


// Cart Resumen
// -------------------------------------------

window.showCartResumeMobile = function()
{
    $('.cart-resume-details-mobile').toggleClass('Hidden', 100);
}