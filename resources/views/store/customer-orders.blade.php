@extends('store.partials.main')

@section('content')
    <div class="container padding-bottom-3x mb-2 marg-top-25">
        <div class="row">
            <div class="col-lg-4">
                @include('store.partials.profile-aside')
            </div>
            <div class="col-lg-8 white-container">
                <h3>Órdenes realizadas</h3>
                <div class="padding-top-2x mt-2 hidden-lg-up"></div>
                <div class="table-responsive">
                    <table class="table table-hover margin-bottom-none">
                        <thead>
                            <tr>
                            <th>Pedido #</th>
                            <th>Fecha de Compra</th>
                            <th>Estado</th>
                            <th class="text-center">Comprobante</th>
                            <th></th>
                            </tr>
                        </thead>
                    <tbody>
                    @if(!$carts->isEmpty())
                        @foreach($carts as $cart)
                            <tr>
                                <td><span class="text-medium">{{ $cart->id }}</span></td>
                                <td>{{ transDateAndTime($cart->created_at) }}</td>
                                <td><span class="text-danger">{{ orderStatusTrd($cart->status) }}</span></td>
                                <td class="text-center">
                                    <a href="{{ url('tienda/descargar-comprobante', [$cart->id, 'download']) }}" target="_blank"><span class="btnIcon"><i class="icon-download"></i></span></a>
                                    <a href="{{ url('tienda/descargar-comprobante', [$cart->id, 'stream']) }}" target="_blank"><span class="btnIcon"><i class="icon-eye"></i></span></a>
                                </td>
                                @if($cart->status == 'Active')
                                    <td><a href="{{ route('store.checkout') }}">Ver Detalle</a></td>                                    
                                @else
                                    <td><a href="{{ route('store.customerOrder', ['id' => $cart->id]) }}">Ver Detalle</a></td>
                                @endif
                            </tr>
                        @endforeach
                        @else 
                        <tr>
                            <td>
                                No se han realizado órdenes al momento.
                            </td>
                            <td></td><td></td><td></td><td></td><td></td>
                        </td>
                        @endif
                        </tbody>
                    </table>
                </div>
                <hr>
            @if($activeCart != null)
                <div class="column"><a class="btn btn-sm btn-block btn-secondary" href="{{ route('store.checkout') }}">Ver carro de compras activo</a></div>
            @endif
            </div>
		</div>
		<div id="Error"></div>
    </div>
    <i class="fas fa-file-pdf"></i>
@endsection

@section('custom_js')
	@include('store.components.bladejs')
@endsection