<aside class="sidebar">
    {{-- {{dd($activeCart)}} --}}
    <div class="hidden-lg-up"></div>
    <!-- Order Summary Widget-->
    <section class="widget-order-summary">
        <h3 class="widget-title">Resumen de Pedido</h3>
        {{-- {{ dd($activeCart['shippingPrice']) }} --}}
        {!! Form::open(['route' => 'store.processCheckout', 'method' => 'POST']) !!}	
            <input type="hidden" name="cart_id" value="{{ $activeCart['rawdata']->id }}">
            <table class="table checkout-table">
            <tr>
                <td>Subtotal:</td>
                <td class="text-medium dont-break">$ {{ number_format($activeCart['cartSubTotal'],2) }}</td>
            </tr>
            @if($activeCart['orderDiscount'] > 0)
            <tr>
                <td>Descuento (%{{$activeCart['orderDiscount']}}):</td>
                <td class="text-medium dont-break">$ -{{ number_format($activeCart['orderDiscountValue'],2) }}</td>
            </tr>
            @endif
            <tr>
                <td>Costo de envío:</td>
                <td class="text-medium dont-break">$ {{ $activeCart['shippingPrice'] }}</td>
            </tr>
            <tr>
                <td>Recargo por forma de pago: <br> (% {{ $activeCart['paymentPercent'] }}) </td>
                <td class="text-medium dont-break">
                    $ {{ calcPercent($activeCart['cartSubTotal'], $activeCart['paymentPercent']) }}
                </td> 
            </tr>
            <tr>
                <td></td>
                <td class="text-lg text-medium txtR dont-break"><h4>Total $ {{ number_format($activeCart['cartTotal'], 2) }}</h4></td>
            </tr>
            </table>
            <div class="text-right">
                <button class="btn btn-green margin-right-none" type="submit">Finalizar Compra</button>
            </div>
        {!! Form::close() !!}
    </section>
</aside>