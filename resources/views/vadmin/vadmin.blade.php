@extends('vadmin.partials.main')

@section('title', 'Vadmin | Inicio')

@section('header_subtitle')
	Bienvenid@ <b>{{ Auth::user()->name }}</b>
@endsection

@section('styles')
@endsection

@section('content')
	<div class="dashboard">
		<div class="content-body"><!--native-font-stack -->
			<section id="global-settings" class="card">
				{{-- --}}
				<div class="card-header">
					<h4 class="card-title"><i class="icon-android-hand"></i> Bienvenid@ {{ Auth::user()->name }}</h4>
				</div>
				{{-- <div class="card-body collapse in">
					<div class="card-block">
						<div class="card-text">
							Este es un mensaje de los desarrolladores	
						</div>
					</div>
				</div> --}}
			</section>
			<div class="row match-height">
				<a href="{{ route('catalogo.index') }}">
					<div class="col-xl-4 col-lg-4">
						<div class="card">
							<div class="card-body dash-item1">
								<div class="media">
									<div class="p-2 text-xs-center blue-back media-left media-middle">
										<i class="icon-pricetags font-large-2 white"></i>
									</div>
									<div class="p-2 media-body">
										<h5>Productos existentes</h5>
										<h5 class="text-bold-400">{{ $catalogarticlesCount }}</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</a>
				<a href="{{ route('customers.index') }}">
					<div class="col-xl-4 col-lg-4">
						<div class="card">
							<div class="card-body dash-item1">
								<div class="media">
									<div class="p-2 text-xs-center green-back media-left media-middle">
										<i class="icon-users2 font-large-2 white"></i>
									</div>
									<div class="p-2 media-body">
										<h5>N° de Clientes</h5>
										<h5 class="text-bold-400">{{ $customersCount }}</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</a>
				<div class="col-xl-4 col-lg-4">
					<div class="form-group">
						{{-- <b>Actualizar Stock</b> --}}
						{{-- <hr class="softhr">
						{!! Form::label('term', 'Buscar por nombre') !!}
						{!! Form::text('term', null, ['id' => 'UpdateStockByName', 'class' => 'form-control']) !!}
						{!! Form::label('term', 'Buscar por código') !!}
						{!! Form::text('term', null, ['id' => 'UpdateStockByName', 'class' => 'form-control']) !!} --}}
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-xl-8 col-md-6 col-sm-12">
					<div class="card" style="height: 500px;">
						<div class="card-body">
							<div class="card-block">
							
								<h4 class="card-title"><i class="icon-cart4"></i> Tienda</h4>
								<p class="card-text">Resumen de actividad</p>
							</div>
							<ul class="list-group list-group-flush">
								<li class="list-group-item">
									@if($activeCartsCount == 1)
									En este momento hay 1 carro de compras abierto
									@elseif($activeCartsCount >= 2)
									En este momento hay {{ $activeCartsCount }} carros de compras abiertos
									@else
									En este momento no hay carros de compras abiertos
									@endif
									{{-- <span class="tag tag-default tag-pill bg-warning float-xs-right">{{ $activeCartsCount }}</span> --}}
								</li>
								<li class="list-group-item">
									<span class="tag tag-default tag-pill bg-danger float-xs-right">{{ $processCartsCount }}</span> Pedidos en espera
								</li>
								<li class="list-group-item">
									<span class="tag tag-default tag-pill bg-info float-xs-right">{{ $approvedCartsCount }}</span> Pedidos aprobados
								</li>
								<li class="list-group-item">
									<span class="tag tag-default tag-pill bg-warning float-xs-right">{{ $finishedCartsCount }}</span> Pedidos finalizadas
								</li>
							</ul>
						</div>
						<br>
					</div>
			
				</div>
			</div>
		</div>		
	</div>
	<div id="Error"></div>
@endsection

@section('scripts')
	
@endsection

@section('custom_js')
	<script>
		//$('#UpdateStockByName').autocomplete({
		//	source: "{!!URL::route('search')!!}",
		//	minlength: 1,
		//	autoFocus: true,
		//	search: function()
		//	{
		//		// Loader
		//	},
		//	select: function(e,ui)
		//	{
		//		var id = ui.item.codigo;
		//		$('#UpdateStockByCode').val(id);
		//	}
		//});
	</script>
@endsection
