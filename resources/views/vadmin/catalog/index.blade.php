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
				<a href="{{ route('catalogo.create') }}" class="btn btnMain"><i class="icon-plus-round"></i>  Nuevo artículo</a>
				<button id="SearchFiltersBtn" class="btn btnMain"><i class="icon-ios-search-strong"></i></button>
				{{-- Update Live Data --}}
				<button id="UpdateList" data-route="{{ route('vadmin.update_catalog_fields') }}" class="fixed-if-scroll false btn btnMain Hidden">
				<i class="icon-pencil2"></i> Actualizar</button>
				{{-- Edit --}}
				<button class="EditBtn btn btnMain Hidden"><i class="icon-pencil2"></i> Editar</button>
				<input id="EditId" type="hidden">
				{{-- Add Similar --}}
				<button class="CreateFromAnotherBtn btn btnMain Hidden"><i class="icon-pencil2"></i> Publicar Similar</button>
				<input id="CreateFromAnotherId" type="hidden">
				{{-- Delete --}}
				{{-- THIS VALUE MUST BE THE NAME OF THE SECTION CONTROLLER --}}
				<input id="ModelName" type="hidden" value="catalogo">
				@if(isset($_GET['redirect']) && $_GET['redirect'] == 'discontinued')
				<button class="DiscountinueBtn btn btnGreen Hidden" data-value="0"><i class="fas fa-box-open"></i> Revivir</button>
				@else
				<button class="DiscountinueBtn btn btnRed Hidden" data-value="1"><i class="fas fa-archive"></i> Discontinuar</button>
				@endif
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
			<b>Órden:</b> 
			<a href="{{ route('catalogo.index', ['orden_af' => 'ASC']) }}" >A-Z</a>
			<a href="{{ route('catalogo.index', ['orden_af' => 'DESC']) }}" >Z-A</a>
			<a href="{{ route('catalogo.index', ['orden' => 'ASC']) }}">Stock Bajo</a> 
			<a href="{{ route('catalogo.index', ['orden' => 'DESC']) }}">Stock Alto</a>
			<a href="{{ route('catalogo.index', ['orden' => 'limitados']) }}" >Stock Limitado</a>
			<a href="{{ route('catalogo.index', ['orden' => 'descuento']) }}" >Con descuento</a>
		</div>
		<div class="row">
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
						<th>Discont.</th>
					@endslot
					@slot('tableContent')
						@foreach($articles as $item)
							<tr id="ItemId{{$item->id}}"
								class="SerializableItem"
								data-id="{{ $item->id }}"
								data-controller="ArticlesController"
								data-model="CatalogArticle">
								<td class="mw-50">
									<label class="CheckBoxes custom-control custom-checkbox list-checkbox">
										<input type="checkbox" class="List-Checkbox custom-control-input row-checkbox" data-id="{{ $item->id }}">
										<span class="custom-control-indicator"></span>
										<span class="custom-control-description"></span>
									</label>
								</td>
								{{-- THUMBNAIL --}}
								<td class="thumb">
									<a href="{{ url('vadmin/catalogo/'.$item->id.'/edit') }}">
										@if($item->featuredImageName())
											<img class="CheckImg" src="{{ asset($item->featuredImageName()) }}">
										@endif
									</a>
								</td>
								<td class="mw-100"><a href="{{ url('vadmin/catalogo/'.$item->id.'/edit') }}"> #{{ $item->code }} </a>
								</td>
								{{-- NAME --}}
								<td class="NameField">
									<input class="invisible-input" type="text"
									onchange="setData();" onfocus="event.target.select();"
									data-field="name" value="{{ $item->name }}">
								</td>
								{{--  STOCK --}}
								<td class="StockField">
									<input class="invisible-input mw-50" type="number" min="0"
									onchange="setData();" onfocus="event.target.select();"
									data-field="stock" value="{{ $item->stock }}">
								</td>
								{{--  STOCK --}}
								<td class="StockMinField">
									<input class="invisible-input mw-50" type="number" min="0"
									onchange="setData();" onfocus="event.target.select();"
									data-field="stockmin" value="{{ $item->stockmin }}">
								</td>
								{{-- PRICE --}}
								<td class="PriceField money-sign">
									{{-- <span class="money"> --}}
										<input class="invisible-input mw-80" type="number" min="0"
										onchange="setData();" onfocus="event.target.select();"
										data-field="price" value="{{ $item->price + 0}}">
									{{-- </span> --}}
								</td>
								{{-- DISCOUNT --}}
								<td class="DiscountField percent-sign">
									{{-- <span class="percent"> --}}
										<input class="invisible-input mw-50" type="number" min="0"
										onchange="setData();" onfocus="event.target.select();"
										data-field="discount" value="{{ $item->discount }}">
									{{-- </span> --}}
								</td>
								{{-- RESELLER PRICE --}}
								<td class="ResellerPriceField money-sign">
									<input class="invisible-input mw-80" type="number" min="0"
									onchange="setData();" onfocus="event.target.select();"
									data-field="reseller_price" value="{{ $item->reseller_price + 0 }}">
								</td>
								{{-- RESELLER DISCOUNT --}}
								<td class="ResellerDiscountField percent-sign">
									<input class="invisible-input mw-50" type="number" min="0"
									onchange="setData();" onfocus="event.target.select();"
									data-field="reseller_discount" value="{{ $item->reseller_discount }}">
								</td>
								{{-- STATUS --}}
								<td class="w-50 pad0 centered">
									<label class="switch">
										<input class="UpdateStatus switch-checkbox" type="checkbox" 
										data-model="CatalogArticle" data-id="{{ $item->id }}"
										@if($item->status == '1') checked @endif>
										<span class="slider round"></span>
									</label>
								</td>
								<td>
									{{ $item->discontinued }}
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
			<div class="inline-links">
				<b>Resultados por página:</b>
				<a href="{{ route('catalogo.index', ['orden' => 'ASC', 'results' => '50']) }}">50</a>
				<a href="{{ route('catalogo.index', ['orden' => 'ASC', 'results' => '100']) }}">100</a>
			</div>
			{!! $articles->appends(request()->query())->render()!!}
		</div>
	</div>
	<div id="Error"></div>
@endsection

@section('scripts')
	@include('vadmin.components.bladejs')
	<script src="{{ asset('js/vadmin-dynamic-forms.js') }}" type="text/javascript"></script>
@endsection

@section('custom_js')
	<script>
		allowEnterOnForms = true;
		function setData()
		{
			dataSetter(['.NameField', '.StockField', '.StockMinField', '.PriceField', '.DiscountField', '.ResellerPriceField', '.ResellerDiscountField']);
			$(this).parent().css('background','red');
			$('#UpdateList').removeClass('Hidden');
		}
		setData();
	</script>
@endsection