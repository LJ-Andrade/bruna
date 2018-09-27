@extends('store.partials.main')

@section('content')
	<input id="CartId" class="form-control" type="hidden" name="cart_id" value="{{ $activeCart['rawdata']->id }}">
	{{--------- Checkout Error Messages ----------}}
	{{-- Missing shipping method Message --}}
	@if(session('error')=='low-quantity')
		<div class="alert alert-success alert-dismissible fade show text-center margin-bottom-1x">
			<span class="alert-close" data-dismiss="alert"></span>
			<span>Para realizar compras mayorístas debe incluír al menos 12 prendas.</span><br>
			<span>{{ $activeCart['totalItems'] }} prendas incluídas</span> - 
			<span>Resta incluír: {{ $activeCart['goalQuantity'] }} más </span> 
		</div>
	@endif
  	<div class="container checkout-container padding-bottom-3x mb-2 marg-top-25">
		<div class="back-to-store"><a href="{{ url('tienda') }}"><i class="icon-arrow-left"></i> Volver a la tienda</a></div>
   		<div class="row">
			<div class="col-md-12">
				<h3>Carro de Compras | Checkout</h3> 
				{{-- <p>Pedido N: #{{ $activeCart['rawdata']->id }}</p> --}}
				@if(Auth::guard('customer')->user()->group == '3')
				<div class="warning"><span>Compra mínima: <b>12 unidades</b></span></div>
				@endif
				<div class="table-responsive shopping-cart">
					{{-- CART PRODUCTS LIST --}}
					<table class="table">
						<thead>
							<tr>
								<th>Detalle</th>
								<th>P.U.</th>
								<th>Cantidad</th>
								<th>SubTotal</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							@foreach($activeCart['rawdata']->items as $item)
							<tr>
								<td>
									<div class="product-item">
										<a class="product-thumb" href="{{ url('tienda/articulo/'.$item->article->id) }}">
											<img class="CheckCatalogImg" src="{{ asset($item->article->featuredImageName()) }}" alt="{{ $item->name }}">
										</a>
										<div class="product-info">
											<h4 class="product-title">
												<a href="{{ url('tienda/articulo/'.$item->article->id) }}">{{ $item->article->name }}<small>{{ $item->article->size }}</small></a>
											</h4>
											<span><em>Código:</em> #{{ $item->article->code }}</span>
											<span><em>Talle: @foreach($item->article->atribute1 as $atribute) {{ $atribute->name }} @endforeach</em></span>
											<span><em>Color: {{ $item->color }}</em></span>
											<span><em>Textil: {{ $item->textile }}</em></span>
											<span>Item Id: {{ $item->id }}</span>
										</div>
									</div>
								</td>
								{{-- Reseller Item Prices --}}
								@php($articlePrice = '0')
								@if(Auth::guard('customer')->user()->group == '3')
									@php($articlePrice = $item->article->reseller_price)
									@if($item->article->reseller_discount > 0)
										<td class="text-lg">
											@php($articlePrice = calcValuePercentNeg($item->article->reseller_price, $item->article->reseller_discount))
											<del class="text-muted">$ {{ $item->article->reseller_price }}</del><br>
											$ {{ $articlePrice }}
										</td>
									@else
										<td class="text-lg">$ {{ $articlePrice }}</td>
									@endif
								@else
									{{-- Estandar Item Prices --}}
									
									@if($item->article->discount > 0)
										<td>
											@php($articlePrice = calcValuePercentNeg($item->article->price, $item->article->discount))
											<del class="text-muted">$ {{ $item->article->price }}</del><br>
											$ {{ $articlePrice }}
										</td>
									@else
										@php($articlePrice = $item->article->price)
										<td class="text-lg">${{ $articlePrice }}</td>
									@endif
								@endif
								{{-- Add Quantity to Cart Item --}}
								<td>
									<div class="input-with-btn input-with-btn-mobile">
										{{-- Send this data to JSON via js with .Item-Data class --}}
										<input class="Item-Data small-input under-element" name="data" type="number" 
										min="1"  max="{{ $item->quantity + $item->article->stock }}" value="{{ $item->quantity }}" placeholder="1" required="" 
										data-price="{{$articlePrice}}" data-id="{{ $item->id }}">
										<div class="under-input"> Stock: {{ $item->article->stock }} </div>
									</div>
								</td>
								<td>$ <span class="{{ $item->id }}-TotalItemPrice TotalItemPrice">{{ ($articlePrice * $item->quantity) }}</span></td>
								{{-- REMOVE ITEMS FROM CART --}}
								<td class="text-center">
									{!! Form::open(['route' => 'store.removeFromCart', 'method' => 'POST', 'class' => 'loader-on-submit']) !!}	
										{{ csrf_field() }}
										<input type="hidden" name="itemid" value="{{ $item->id }}">
										<input type="hidden" name="quantity" value="{{ $item->quantity }}">
										<button type="submit" class="icon-only-btn"><i class="far fa-trash-alt"></i></button>
									{!! Form::close() !!}
								</td>
							</tr>
							@endforeach
							<tr>
								<td></td>
								<td></td>
								<td><b>SUBTOTAL</b></td>
								<td>$ <b><span class="SubTotal"></span></b></td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
					<div class="text-right">
						<button id="UpdateDataBtn" type="button" class="btn main-btn">Actualizar <i class="fas fa-sync-alt"></i></button>
						<button id="SubmitDataBtn" type="button" class="btn main-btn">Continuar <i class="fa fa-arrow-right"></i></button>
					</div>
				<div class="back-to-store"><a href="{{ url('tienda') }}"><i class="icon-arrow-left"></i> Volver a la tienda</a></div>
			</div>{{-- / col-md-12 --}}
		</div> {{-- / Row --}}
	</div> {{-- / Container --}}
	<div id="Error"></div>
@endsection

@section('scripts')
	@include('store.components.bladejs')
	<script>
		
		setItemsData();
		sumAllItems();
		// let itemSum = $('.TotalItemPrice').html();
		// sum = 0;

		$('.Item-Data').on('keyup change', function(){
			setItemsData();	
		});
		
		
		function sumAllItems()
		{
			sum = 0;
			$('.TotalItemPrice').each(function( index ) {
				sum += parseInt($(this).html());
			});
			$('.SubTotal').html(sum);
		}
		
		
		function setItemsData() {
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
	
		$("#SubmitDataBtn").on('click', function(){
			submitForm("{{ route('store.processCheckout')}}", itemData);
		});

		$("#UpdateDataBtn").on('click', function(){
			submitForm("reload", itemData);
		});

		function submitForm(target, data)
		{
			const route = "{{ route('store.checkout-set-items') }}";
			$.ajax({	
				url: route,
				method: 'POST',             
				dataType: 'JSON',
				data: { data },
				success: function(data){
					if(data.response == 'success'){
						if(target == 'reload'){
							location.reload();
						} else {
							window.location.href = target;
						}
					} else {
						console.log(data);
						toast_success('', data.message, 'bottomCenter');
						// $('#Error').html(data.responseText);
					}
				},
				error: function(data){
					$('#Error').html(data.responseText);
					console.log(data);
				}
			});
			
		}

	</script>
@endsection
