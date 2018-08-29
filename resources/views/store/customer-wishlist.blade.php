@extends('store.partials.main')

@section('content')
    <div class="container padding-bottom-3x mb-2 marg-top-25">
        <div class="row">
            <div class="col-lg-4">
                @include('store.partials.profile-aside')
            </div>
            <div class="col-lg-8 white-container">
				<h2>Productos favoritos</h2>
				<div class="padding-top-2x mt-2 hidden-lg-up"></div>
				<!-- Wishlist Table-->
				<div class="table-responsive wishlist-table margin-bottom-none">
					<table class="table">
						<thead>
							<tr>
								<th>Productos Favoritos</th>
								@if($favs['favs']->count() > '0')
								<th class="text-center"><a class="RemoveAllFromFavs btn btn-sm btn-outline-danger" data-customerid="{{ $customer->id }}" href="">Limpiar Lista</a></th>
								@endif
							</tr>
						</thead>
						<tbody>
							@if($favs['favs']->count() > '0')
								@foreach($favs['favs'] as $item)
									@if(!$item == null)
									<tr>
										<td>
											<div class="product-item">
												<a class="product-thumb" href="{{ url('tienda/articulo/'.$item->article->id) }}">
													<img class="CheckCatalogImg" src="{{ asset($item->article->featuredImageName()) }}" alt="Producto del Catálogo">
												</a>
												<div class="product-info">
													<h4 class="product-title"><a href="{{ url('tienda/articulo/'.$item->article->id) }}">
													{{ $item->article->name }}</a>
													</h4>
													<div class="text-lg text-medium text-muted">
													{{ $item->article->textile }} | 
													{{ $item->article->color }}  <br>
													Talle: 
														@foreach($item->article->atribute1 as $size)
															{{ $size->name }}
														@endforeach
													</div>
													<div>Disponibilidad:
														<div class="d-inline text-success">
															@if($item->article->status == '0')
																No disponible
															@else
																@if($item->article->stock > 1)
																En stock
																@else
																Sin Stock
																@endif
															@endif
														</div>
													</div>
												</div>
											</div>
										</td>
										<td class="text-center"><a class="RemoveFromFavs remove-from-cart cursor-pointer" data-favid="{{ $item->id }}" data-toggle="tooltip" title="Remover de Favoritos"><i class="icon-cross"></i></a></td>
									</tr>
									@endif
								@endforeach
							@else 
								<tr>
									<td>
										No tiene productos favoritos al momento...
									</tr>
								</td>
							@endif
						</tbody>
					</table>
				</div>
				<hr class="mb-4">
				{{--  <label class="custom-control custom-checkbox d-block">
					<input class="custom-control-input" type="checkbox" checked><span class="custom-control-indicator"></span><span class="custom-control-description">Inform me when item from my wishlist is available</span>
				</label>  --}}
            </div>
		</div>
		<div id="Error"></div>
    </div>

@endsection

@section('custom_js')
	@include('store.components.bladejs')
@endsection