<script>


    var loader = "<img src='{{ asset('images/gral/loader-sm.svg') }}'>";
    
    
    /*
    |--------------------------------------------------------------------------
    | CART
    |--------------------------------------------------------------------------
    */
    

    // Sum divs text
    function sumDivs(origins, target){
        let sum = 0;
        origins.each(function(){
            sum += parseFloat($(this).text());
        });
        target.text(sum);   
    }

    /*
    |--------------------------------------------------------------------------
    | COUPON
    |--------------------------------------------------------------------------
    */
    $('#CheckCoupon').click(function(){
        let code = $('#CuponCodeInput').val();
        let cartid = $('#CartId').val();
        validateAndSetCoupon(code, cartid);
    });

    function validateAndSetCoupon(code, cartid)
    {
        let couponDiv = $('#CouponDiv');
        let couponSet = $('#SettedCoupon');
        console.log(code, cartid);
        $.ajax({	
            url: "{{ route('store.validateAndSetCoupon') }}",
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

    /*
    |--------------------------------------------------------------------------
    | WHISH-LISTS
    |--------------------------------------------------------------------------
    */

    // Add Article to WishList
    $(document).on("click", ".AddToFavs", function(e){
        e.preventDefault();
        var articleid  = $(this).data('id');
        var favid      = $(this).data('favid');
        action         = 'show';
        displayButton  = $(this);
        addArticleToFavs(favid, articleid, action, displayButton);
    });

    // Remove Article from WishList
    $(document).on("click", ".RemoveFromFavs", function(e){
        e.preventDefault();
        var favid      = $(this).data('favid');
        action         = 'reload';
        removeArticleFromFavs(favid, action);
    });

    $(document).on("click", ".RemoveAllFromFavs", function(e){
        e.preventDefault();
        var customerid = $(this).data('customerid');
        action         = 'reload';
        removeAllArticlesFromFavs(customerid, action);
    });

    function addArticleToFavs(favid, articleid, action, displayButton){
        $.ajax({	
            url: "{{ route('customer.addArticleToFavs') }}",
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

    function removeArticleFromFavs(favid, action){
        var doaction = action;
        $.ajax({	
            url: "{{ route('customer.removeArticleFromFavs') }}",
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
    
    function removeAllArticlesFromFavs(customerid, action){
        $.ajax({	
            url: "{{ route('customer.removeAllArticlesFromFavs') }}",
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

    /*
    |--------------------------------------------------------------------------
    | MERCADO PAGO CHECKOUT
    |--------------------------------------------------------------------------
    */
    $('#MpModalBtn').click(function(){
        var responseDiv = $('#MpResponse');
        var redirectBtn = $('#MpRedirect');
        var cartId      = $('#CartId').val();
        var cartTotal   = $('#CartTotal').val();

        createPreference(cartId, cartTotal, responseDiv, redirectBtn);
    });
    //url: "{{ route('store.getCreatePreference') }}",
    function createPreference(cartId, cartTotal, responseDiv, redirectBtn) {

        var btnLoader   = $('.CheckOutLoader').html(loader);
        btnLoader.hide();

        $.ajax({
            url: "{{ route('store.getCreatePreference') }}",
            method: 'POST',
            dataType: 'JSON',
            data: { cartId: cartId, cartTotal: cartTotal },
            beforeSend: function(){
                btnLoader.show();
            },
            success: function(data){
                console.log(data);
                if(data.response == true){
                    // Redirect to MP
                    if(data.result.response.init_point != undefined){
                        var href = data.result.response.init_point;
                        window.location.replace(href);
                    } else {
                        console.log('Error en MP');
                        btnLoader.hide();        
                    }
                } else {
                $('#Error').html(data.result);
 	               console.log(data);
                }
            },
            error: function(data){
                console.log(data);
                $('#Error').html(data.responseText);
            },
            complete: function(){
            }
        });
    }

    /*
    |--------------------------------------------------------------------------
    | GET PROVINCES and LOCALITIES
    |--------------------------------------------------------------------------
    */


    function getGeoLocs(geoprov_id){

        let route = "{{ url('getGeoLocs') }}/"+geoprov_id+"";
        $.ajax({
            url: route,
            method: 'GET',
            dataType: 'JSON',
            success: function(e){
                // Print Locs
                var select = $('#GeoLocsSelect');
                var actuallocid = $('#GeoLocsSelect').data('actuallocid');

                select.html('');
                for (var i = 0, len = e.geolocs.length; i < len; i++) {
                    if(actuallocid != '' && e.geolocs[i]['id'] == actuallocid){
                        select.append("<option selected value='"+ e.geolocs[i]['id'] +"'>"+ e.geolocs[i]['name'] +"</option>");
                    } else {
                        select.append("<option value='"+ e.geolocs[i]['id'] +"'>"+ e.geolocs[i]['name'] +"</option>");
                    }
                }

            },
            error: function(e){
                console.log('ERROR');
                console.log(e);
                $('#Error').html(e.responseText);
            }
        });
        
    }
    
     

</script>
