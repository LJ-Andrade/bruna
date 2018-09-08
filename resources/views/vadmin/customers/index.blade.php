@extends('vadmin.partials.main')
{{-- PAGE TITLE --}}
@section('title', 'Vadmin | Clientes')

{{-- CONTENT --}}
@section('header')
	@component('vadmin.components.header-list')
		@slot('breadcrums')
		    <li class="breadcrumb-item"><a href="{{ url('vadmin')}}">Inicio</a></li>
            <li class="breadcrumb-item active">Listado de Clientes</li>
		@endslot
		@slot('actions')
			{{-- Actions --}}
			<div class="list-actions">
				<a href="{{ route('customers.create') }}" class="btn btnBlue"><i class="icon-plus-round"></i>  Nuevo Cliente</a>
				<button id="SearchFiltersBtn" class="btn btnGreen"><i class="icon-ios-search-strong"></i></button>
				@if(Auth::guard('user')->user()->role <= 2)
				{{-- Edit --}}
				{{-- <button class="EditBtn btn btnGreen Hidden"><i class="icon-pencil2"></i> Editar</button>
				<input id="EditId" type="hidden"> --}}
				{{-- Delete --}}
				{{--  THIS VALUE MUST BE THE NAME OF THE SECTION CONTROLLER  --}}
				<input id="ModelName" type="hidden" value="customers">
				<button class="DeleteBtn btn btnRed Hidden"><i class="icon-bin2"></i> Eliminar</button>
				<input id="RowsToDeletion" type="hidden" name="rowstodeletion[]" value="">
				@endif
				{{-- If Search --}}
				@if(isset($_GET['name']) || isset($_GET['group']))
					<a href="{{ url('vadmin/customers') }}"><button type="button" class="btn btnGrey">Mostrar Todos</button></a>
					{{--  <div class="results">{{ $items->total() }} resultados de búsqueda: </div>  --}}
				@endif
			</div>
		@endslot
		@slot('searcher')
			@include('vadmin.customers.searcher')
		@endslot
	@endcomponent
@endsection

@section('content')
	<div class="list-wrapper">
		{{-- Test --}}
		<div id="TestBox" class="col-xs-12 test-box Hidden">
		</div>
		<div class="row">
			@component('vadmin.components.list')
				@slot('actions')
					@if(isset($_GET['name']) || isset($_GET['role']) || isset($_GET['group']))
						<a href="{{ route('vadmin.exportCustomersListPdf', ['params' => http_build_query($_GET)]) }}" data-toggle="tooltip" title="Exportar a PDF">
							<i class="icon-file-pdf"></i></a>
						<a href="{{ route('vadmin.exportCustomersListXls', ['params' => http_build_query($_GET)]) }}" data-toggle="tooltip" title="Exportar a XLS">
							<i class="icon-file-excel"></i></a>
					@else
						<a href="{{ route('vadmin.exportCustomersListPdf', ['params' => 'all']) }}" data-toggle="tooltip" title="Exportar a PDF"><i class="icon-file-pdf"></i></a>
						<a href="{{ route('vadmin.exportCustomersListXls', ['params' => 'all']) }}" data-toggle="tooltip" title="Exportar a XLS"><i class="icon-file-excel"></i></a>
					@endif
				@endslot	
				@slot('title', 'Clientes')
				@slot('tableTitles')
					@if(!$items->isEmpty())
						@if(Auth::guard('user')->user()->role <= 2)
						<th class="w-50"></th>
						@endif
						<th>Nombre y apellido</th>
						<th>Usuario</th>
						<th>Email</th>
						<th style="min-width: 150px">Tipo</th>
						<th>Estado</th>
					@else
						<th></th>
					@endif
				@endslot

				@slot('tableContent')
					@if(!$items->isEmpty())
						@foreach($items as $item)
							<tr>
								@if(Auth::guard('user')->user()->role <= 2)
								<td class="mw-50">
									<label class="custom-control custom-checkbox list-checkbox">
										<input type="checkbox" class="List-Checkbox custom-control-input row-checkbox" data-id="{{ $item->id }}">
										<span class="custom-control-indicator"></span>
										<span class="custom-control-description"></span>
									</label>
								</td>
								@endif
								<td class="show-link"><a href="{{ url('vadmin/customers/'.$item->id) }}"> {{ $item->name }} {{ $item->surname}}</a></td>
								<td>{{ $item->username }}</td>
								<td>{{ $item->email }}</td>
								<td>
									{!! Form::select('group', [1 => 'Esperando aprobación', 2 => 'Minorísta', 3 => 'Mayorísta'], $item->group, ['class' => 'form-control', 'onChange' => 'updateCustomerGroup(this, this.dataset.id)', 'data-id' => $item->id]) !!}
								</td>
								{{-- {{ clientGroupTrd($item->group) }}</td> --}}
								<td class="w-50 pad0 centered">
									<label class="switch">
										<input class="UpdateStatus switch-checkbox" type="checkbox" 
										data-model="Customer" data-id="{{ $item->id }}"
										@if($item->status == '1') checked @endif>
										<span class="slider round"></span>
									</label>
								</td>
							</tr>						
						@endforeach
					@else
						<tr>
							<td>No se han encontrado resultados</td>
						</tr>
					@endif
				@endslot
			@endcomponent
			
			@if(isset($_GET['name']))
				{!! $items->appends(['name' => $name])->render(); !!}
			@elseif(isset($_GET['group']))
				{!! $items->appends(['group' => $group])->render(); !!}
			@else
				{!! $items->render(); !!}
			@endif
		</div>
		<div id="Error"></div>	
	</div>
@endsection

{{-- SCRIPT INCLUDES --}}
@section('scripts')
	@include('vadmin.components.bladejs')
@endsection

