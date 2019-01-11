@extends('store.partials.main')

@section('header-image')
	<div class="index-header">
		
	</div>
@endsection

@section('content')
    @if(Auth::guard('customer')->check())
    <div class="CheckoutCart checkout-cart checkout-cart-floating">
        @include('store.partials.checkout-cart')
    </div>
    @endif
    <div class="container info-container">
		<div class="row">
            <div class="deco-title">
                <span>
                    <div class="deco deco-left"><img src="{{ asset('images/gral/icons/icon-deco-left.png') }}" alt="Deco"></div>
                    Condiciones para la compra mayorísta
                    <div class="deco deco-right"><img src="{{ asset('images/gral/icons/icon-deco-right.png') }}" alt="Deco"></div>
                </span>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 item">
                <hr>
                <br>
                <h4>¿Cuál es el mínimo de compra?</h4>
                <p>El mínimo es de {{ $settings->reseller_min}} prendas surtidas, para las reposiciones se respetará el mismo mínimo de prendas.</p>

                <h4>¿Cómo accedo a los productos y precios mayoristas?</h4>
                <p>Los precios que figuran en la web son los precios mayoristas. </p>

                <h4>¿Cómo realizo mi pedido?</h4>
                <p>Vas agregando al carrito todod los productos que te interesen y al finalizar la compra vas a poder elegir el método de pago y
                     el método de envío. Cuando finalices tu compra nosotras recibimos la notificación del pedido y 
                     nos ponemos en contacto dentro de las 48hs para coordinar el pago y envío de tu pedido.
                </p>
                <h4>¿Está todo en stock?</h4>
                <p>
                    Tratamos de mantener el stock lo más actualizado posible, como tenemos otros canales de ventas, puede haber algún desfasaje.
                     Por lo tanto el pedido lo confirmamos siempre antes con el cliente.
                     Si falta algún color intentamos reemplazarlo por el más parecido. Si no tenemos el artículo, se puede reemplazar por otro o dar de baja del pedido.
                </p>

                <h4>¿Cuánto demoran en despacharme?</h4>
                <p>Las terminación de las prendas tiene un proceso de estampado o costura artesanal por lo que la preparación del pedido demora de 2 a 4 días hábiles.
                </p>

                <h4>Día de envío y cómo despachamos</h4>
                <p>
                    Los envíos de mercadería se realizan los días miércoles y viernes. Podes elegir la empresa de transporte que 
                    prefieras siempre que salga de retiro. Si optás por operar con una empresa que no esté ubicada en retiro, 
                    tendremos que adicionar el costo de envío hasta la sucursal de la empresa, dicho costo es de $200.
                </p>

                <h4>¿Qué pasa si me llegan productos con fallas?</h4>
                <p>
                    En el caso de que llegue un producto con fallas, deberá ser informado dentro de la semana de recibido el pedido con foto
                     de la falla por mail a info@brunaindumentaria.com.ar. Podés optar por la devolución del importe del artículo fallado 
                     o por un crédito para tu próxima compra.
                </p>

                <h4>¿Puedo realizar cambios?</h4>
                <p>
                    Sólo aceptamos cambios o devoluciones por fallas en el producto.
                </p>


            </div>
        </div>
    </div>
@endsection


