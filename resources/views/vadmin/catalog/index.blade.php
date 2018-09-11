@extends('vadmin.partials.main')
@section('title', 'Vadmin | Listados de artículos del catálogo')

{{-- HEADER --}}
@section('header')
	@component('vadmin.components.header-list')
		@slot('breadcrums')
		    <li class="breadcrumb-item"><a href="{{ url('vadmin')}}">Inicio</a></li>
            <li class="breadcrumb-item active">Listado de artículos</li>
		@endslot
		@slot('actions')
			{{-- Actions --}}
			<div class="list-actions">
				<a href="{{ route('catalogo.create') }}" class="btn btnBlue"><i class="icon-plus-round"></i>  Nuevo artículo</a>
				<button id="SearchFiltersBtn" class="btn btnBlue"><i class="icon-ios-search-strong"></i></button>
				{{-- Edit --}}
				<button class="EditBtn btn btnGreen Hidden"><i class="icon-pencil2"></i> Editar</button>
				<input id="EditId" type="hidden">
				{{-- Delete --}}
				{{-- THIS VALUE MUST BE THE NAME OF THE SECTION CONTROLLER --}}
				<input id="ModelName" type="hidden" value="catalogo">
				<button class="DeleteBtn btn btnRed Hidden"><i class="icon-bin2"></i> Eliminar</button>
				<input id="RowsToDeletion" type="hidden" name="rowstodeletion[]" value="">
				{{-- If Search --}}
				@if(isset($_GET['code']) || isset($_GET['title']) || isset($_GET['category']) || isset($_GET['orden']))
				<a href="{{ url('vadmin/catalogo') }}"><button type="button" class="btn btnGrey">Mostrar Todos</button></a>
				@endif
			</div>
		@endslot
		@slot('searcher')
			@include('vadmin.catalog.searcher')
		@endslot
	@endcomponent
@endsection

{{-- CONTENT --}}
@section('content')
{{-- {{dd($articles)}} --}}
	<div class="list-wrapper">
		{{-- Search --}}
		<div class="row inline-links">
			<span class="with-background">
				<b>Órden:</b> 
				<a href="{{ route('catalogo.index', ['orden' => 'ASC']) }}">Stock Bajo</a> | 
				<a href="{{ route('catalogo.index', ['orden' => 'DESC']) }}">Stock Alto</a> |
				<a href="{{ route('catalogo.index', ['orden' => 'limitados']) }}" >Stock Limitado</a>
			</span>
		</div>
		<div class="row">

				{{-- <a href="{{ url('vadmin/exportOrderCsv', [$item->id]) }}" class="icon-container green" target="_blank" data-toggle="tooltip" title="Exportar .XLS">
					<i class="fas fa-file-excel"></i>
				</a>
				<a href="{{ url('vadmin/exportOrderXls', [$item->id]) }}" class="icon-container blue" target="_blank" data-toggle="tooltip" title="Exportar .CSV">
					<i class="fas fa-file-excel"></i>
				</a>
				<a href="{{ url('vadmin/descargar-comprobante', [$item->id, 'download']) }}" class="icon-container red" target="_blank" data-toggle="tooltip" title="Exportar .PDF">
					<i class="fas fa-file-pdf"></i>
				</a>
				@endif
				<a href="{{ url('vadmin/orders/'.$item->id) }}" class="icon-container black" data-toggle="tooltip" title="Detalle del pedido">
					<i class="fas fa-eye"></i>
				</a>
 --}}


			@component('vadmin.components.list')
				@slot('actions')
					@if(isset($_GET['name']) || isset($_GET['code']) || isset($_GET['title']) || isset($_GET['category']) || isset($_GET['orden']))
						<a href="{{ route('vadmin.exportCatalogListSheet', ['params' => http_build_query($_GET), 'format' => 'xls']) }}" data-toggle="tooltip" title="Exportar a .XLS"  class="icon-container green">
							<i class="fas fa-file-excel"></i>
						</a>
						<a href="{{ route('vadmin.exportCatalogListSheet', ['params' => http_build_query($_GET), 'format' => 'csv']) }}" data-toggle="tooltip" title="Exportar a .CSV"  class="icon-container blue">
							<i class="fas fa-file-excel"></i>
						</a>
						<a href="{{ route('vadmin.exportCatalogListPdf', ['params' => http_build_query($_GET), 'action' => 'download']) }}" data-toggle="tooltip" title="Exportar a .PDF" class="icon-container red">
							<i class="fas fa-file-pdf"></i>
						</a>
						<a href="{{ route('vadmin.exportCatalogListPdf', ['params' => http_build_query($_GET), 'action' => 'stream']) }}" data-toggle="tooltip" title="Exportar a .PDF" class="icon-container red">
							<i class="fas fa-eye"></i>
						</a>
					@else
						<a href="{{ route('vadmin.exportCatalogListSheet', ['params' => 'all', 'format' => 'xls']) }}" data-toggle="tooltip" title="Exportar a XLS"  class="icon-container green">
							<i class="fas fa-file-excel"></i>
						</a>
						<a href="{{ route('vadmin.exportCatalogListSheet', ['params' => 'all', 'format' => 'csv']) }}" data-toggle="tooltip" title="Exportar a .CSV"  class="icon-container blue">
							<i class="fas fa-file-excel"></i>
						</a>
						<a href="{{ route('vadmin.exportCatalogListPdf', ['params' => 'all', 'action' => 'download']) }}" data-toggle="tooltip" title="Exportar a .PDF" class="icon-container black">
							<i class="fas fa-file-pdf"></i>
						</a>
						<a href="{{ route('vadmin.exportCatalogListPdf', ['params' => 'all', 'action' => 'stream']) }}" data-toggle="tooltip" title="Exportar a .PDF" class="icon-container black">
							<i class="fas fa-eye"></i>
						</a>
					@endif
				@endslot

				@slot('title', 'Listado de artículos de la tienda')
				@slot('tableTitles')
					@if(!$articles->count() == '0')
						<th class="w-50"></th>
						<th></th>
						<th>Cód.</th>
						<th>Título</th>
						<th>Stock</th>
						<th>Stock Min.</th>
						<th>Precio</th>
						<th>% Oferta</th>
						<th>Precio May.</th>
						<th>% Oferta May.</th>
						<th>Estado</th>
					@endslot
					@slot('tableContent')
						@foreach($articles as $item)
							
							<tr id="ItemId{{$item->id}}">
								<td class="mw-50">
									<label class="CheckBoxes custom-control custom-checkbox list-checkbox">
										<input type="checkbox" class="List-Checkbox custom-control-input row-checkbox" data-id="{{ $item->id }}">
										<span class="custom-control-indicator"></span>
										<span class="custom-control-description"></span>
									</label>
								</td>
								{{-- THUMBNAIL --}}
								<td class="thumb">
									@if($item->featuredImageName())
										<img class="CheckImg" src="{{ asset($item->featuredImageName()) }}">
									@endif
								</td>
								<td class="mw-100">#{{ $item->code }}
								</td>
								{{-- NAME --}}
								<td class="show-link max-text">
									<a href="{{ url('vadmin/catalogo/'.$item->id) }}">{{ $item->name }}</a>
								</td>
								{{--  STOCK --}}
								<td class="with-notification mw-50">
									<input class="editable-input mw-50" onfocus="event.target.select()" type="number" value="{{ $item->stock }}" min="0">
									<div class="editable-input-data " data-id="{{ $item->id }}" 
											data-route="update_catalog_field" data-field="stock" data-type="int" data-action="reload" data-value=""></div>
											@if($item->stock < $item->stockmin) <div class="cell-notification"><i class="icon-notification"></i></div> @endif
									</div>
								</td>	
								<td class="mw-50">
									<input class="editable-input mw-50" onfocus="event.target.select()" type="number" value="{{ $item->stockmin }}" min="0">
									<div class="editable-input-data " data-id="{{ $item->id }}" 
										data-route="update_catalog_field" data-field="stockmin" data-type="int" data-action="reload" data-value=""></div>	
									</div>
								</td> 
								{{-- PRICE --}}
								<td>
									<span class="money"><input class="editable-input mw-80" onfocus="event.target.select()" type="number" value="{{ $item->price }}" min="0">
									<div class="editable-input-data" data-id="{{ $item->id }}" 
									data-route="update_catalog_field" data-field="price" data-type="decimal" data-action="reload" data-value=""></div>
									</span>
								</td>
								{{-- DISCOUNT --}}
								<td>
									<span class="percent"><input class="editable-input mw-50" onfocus="event.target.select()" type="number" value="{{ $item->discount }}" min="0">
									@if($item->discount >= '0')<span> ($ {{ calcValuePercentNeg($item->price, $item->discount) }})</span>@endif
									<div class="editable-input-data" data-id="{{ $item->id }}" 
									data-route="update_catalog_field" data-field="discount" data-type="decimal" data-action="reload" data-value=""></div>
									</span>
								</td>
								{{-- RESELLER PRICE --}}
								<td>
									<span class="money"><input class="editable-input mw-80" type="number" value="{{ $item->reseller_price }}" min="0">
									<div class="editable-input-data" data-id="{{ $item->id }}" 
									data-route="update_catalog_field" data-field="reseller_price" data-type="decimal" data-action="reload" data-value=""></div>
									</span>
								</td>
								{{-- RESELLER DISCOUNT --}}
								<td>
									<span class="percent"><input class="editable-input mw-50" type="number" value="{{ $item->reseller_discount }}" min="0">
									@if($item->reseller_discount >= '0')<span> ($ {{ calcValuePercentNeg($item->reseller_price, $item->reseller_discount) }})</span>@endif
									<div class="editable-input-data" data-id="{{ $item->id }}" 
									data-route="update_catalog_field" data-field="reseller_discount" data-type="decimal" data-action="reload" data-value=""></div>
									</span>
								</td>
								{{-- DATE --}}
								<td class="w-50 pad0 centered">
									<label class="switch">
										<input class="UpdateStatus switch-checkbox" type="checkbox" 
										data-model="CatalogArticle" data-id="{{ $item->id }}"
										@if($item->status == '1') checked @endif>
										<span class="slider round"></span>
									</label>
								</td>
							</tr>					
						@endforeach
						@else 
							@slot('tableTitles')
								<th></th>
							@endslot
							@slot('tableContent')
								<tr>
									<td class="w-200">No se han encontrado items</td>
								</tr>
							@endslot
						@endif
				@endslot
			@endcomponent
			{{--  Pagination  --}}
			@if(isset($_GET['name']))
				{!! $articles->appends(['name' => $_GET['name']])->render() !!}
			@elseif(isset($_GET['category']))
				{!! $articles->appends(['category' => $_GET['category']])->render() !!}
			@elseif(isset($_GET['code']))
				{!! $articles->appends(['code' => $_GET['code']])->render() !!}
			@else
				{!! $articles->render() !!}
			@endif
		</div>
		<div id="Error"></div>
	</div>
@endsection

{{-- SCRIPT INCLUDES --}}
@section('scripts')
	@include('vadmin.components.bladejs')
@endsection

@section('custom_js')
	<script>
		// function selectText(e)
		// {
		// 	console.log(e);
		// 	$(this).select();
		// }
	</script>
@endsection