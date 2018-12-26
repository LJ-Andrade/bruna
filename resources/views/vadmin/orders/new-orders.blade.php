@extends('vadmin.partials.main')
@section('title', 'Vadmin | Pedidos')
{{-- STYLE INCLUDES --}}
@section('styles')
@endsection

{{-- HEADER --}}
@section('header')
	@component('vadmin.components.header-list')
		@slot('breadcrums')
			<li class="breadcrumb-item"><a href="{{ url('vadmin')}}">Inicio</a></li>
			<li class="breadcrumb-item active"><a href="{{ route('orders.index', ['status' => 'Process']) }}">Pedidos Nuevos</a></li>
		@endslot
		@slot('actions')
			{{-- Actions --}}
			<div class="list-actions">
				<a href="{{ route('vadmin.show_new_orders', ['output' => 'csv']) }}"><button type="button" class="btn btnMain"><i class="fas fa-file-excel"></i> &nbsp; Generar CSV</button></a>
				<a href="{{ route('vadmin.show_new_orders', ['output' => 'xls']) }}"><button type="button" class="btn btnMain"><i class="fas fa-file-excel"></i> &nbsp; Generar XLS</button></a>
			</div>
		@endslot
		@slot('searcher')
			
		@endslot
	@endcomponent
@endsection

{{-- CONTENT --}}
@section('content')
	<div class="list-wrapper">
		{{-- Search --}}
		{{-- Test --}}
		<div id="TestBox" class="col-xs-12 test-box Hidden">
		</div>
		<div class="row">
			{{-- List --}}
			{{-- {{			dd($items)}} --}}
			@component('vadmin.components.list')
				@slot('actions', '')
				@slot('title', 'Pedidos Nuevos')
					@slot('tableTitles')
						<th>Cantidad</th>
						<th>Artículo</th>
						<th>Detalles</th>
						<th>Precio</th>
					@endslot

					@slot('tableContent')
						@foreach($items as $item)
							<tr>
								<td class="mw-50">{{ $item['quantity'] }}</td>
								<td>{{ $item['article_name'] }}</td>
								<td>{{ $item['details'] }}</td>
								<td>{{ $item['price'] }}</td>
							</tr>
						@endforeach
				@endslot
			@endcomponent
		</div>
		<div id="Error"></div>	
	</div>
@endsection

{{-- SCRIPT INCLUDES --}}
@section('scripts')
	@include('vadmin.components.bladejs')
@endsection

