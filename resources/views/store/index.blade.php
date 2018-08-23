@extends('store.partials.main')

@section('header-image')
	<div class="index-header">
		
	</div>
@endsection

@section('content')
	<!-- Page Content-->
	<div class="container-fluid padding-bottom-3x mb-1">
		<div class="row">
			<!-- Products-->
			<div class="col-sm-10 push-sm-2">
				<!-- Products Grid-->
				@if(count($_GET) > 0)
					<div class="top-info">
						<a href="{{ url('tienda') }}" class="btn btn-outline-primary btn-sm">Mostrar Todos</a> 
						<br>	
						@if($articles->count() == '1')
							{{ $articles->count() }} artículo encontrado <br>
						@elseif($articles->count() == '0')
							No hay artículos
						@else
							{{ $articles->count() }} artículos encontrados <br>
						@endif
					</div>
				@endif
				<div class="isotope-grid cols-4 mb-2">
					<div class="gutter-sizer"></div>
					<div class="grid-sizer"></div>
					<!-- Product-->
					@foreach($articles as $article)
					<div class="grid-item">
						<div class="product-card">
							{{-- Discount Badge --}}
							@if(Auth::guard('customer')->check() && Auth::guard('customer')->user()->group == '3')
								{{-- Reseller Discount --}}
								@if($article->reseller_discount > 0)
									<div class="discount-badge">
										<div class="triangle"></div>
										<div class="inner">	%{{ $article->reseller_discount }} <br> off !!</div>
									</div> 
								@endif
							@else
								{{-- Normal Customer Discount --}}
								@if($article->discount > 0)
									<div class="discount-badge">
										<div class="triangle"></div>
										<div class="inner">	%{{ $article->discount }} <br> off !!</div>
									</div> 
								@endif
							@endif
							<a class="product-thumb" href="{{ url('tienda/articulo/'.$article->id) }}">
								<div class="inner">
									{{-- Overlay --}}{{-- <div class="data"><div class="text"></div></div> --}}
									@if($article->featuredImageName())
										<img class="CheckCatalogImg" src="{{ asset($article->featuredImageName()) }}" alt="Producto del Catálogo">
									@endif
								</div>
								<a href="{{ url('tienda/articulo/'.$article->id) }}"><h3 class="product-title max-text"><b>{{ $article->name }}</b></h3></a>
								<h3 class="product-title max-text"> {{ $article->color}} |
								@foreach($article->atribute1 as $atribute) 	{{ $atribute->name }} @endforeach
								</h3>
							</a>
							<div class="footer">
								<div class="price">
									<h4 class="product-price">
										@if(Auth::guard('customer')->check() && Auth::guard('customer')->user()->group == '3')
											@if($article->reseller_discount > 0)
												<del>$ {{ $article->reseller_price }}</del> <br>
												$ {{ calcValuePercentNeg($article->reseller_price, $article->reseller_discount) }}
											@else
												$ {{ $article->reseller_price }}
											@endif
										@else
											@if($article->discount > 0)
												<del>$ {{ $article->price }}</del> <br>
												$ {{ calcValuePercentNeg($article->price, $article->discount) }}
											@else
												$ {{ $article->price }}
											@endif
										@endif
									</h4>
								</div>
								<div class="product-buttons">
									@if(Auth::guard('customer')->check())
									{{--  Check if product is in favs  --}}
										<button class="AddToFavs btn btn-outline-secondary btn-sm-round btn-wishlist
											@if(in_array($article->id, $favs['articleFavs'])) addedToFavs @endif" 
											data-id="{{ $article->id }}" data-toggle="tooltip" title="A Favoritos"><i class="icon-heart"></i>
										</button>
										<a href="{{ url('tienda/articulo/'.$article->id) }}" class="btn btn-outline-primary btn-sm">Ver</a>
									@else 
										<a href="{{ route('customer.login') }}" class="btn btn-outline-secondary btn-sm-round btn-wishlist" data-toggle="tooltip" title="Agregar a Favoritos"><i class="icon-heart"></i></a>	
										<a href="{{ route('customer.login') }}" class="btn btn-outline-primary btn-sm">Agregar</a>
									@endif
								</div>
							</div>
						</div>
					</div>
					{{ $article->catalogfavs }}
					@endforeach
				</div>
				<!-- Pagination-->
				{!! $articles->render() !!}
			</div>
			<div class="col-sm-2 pull-sm-10">
				@include('store.partials.sidebar')
			</div>
		</div>
	</div>
	{{-- <div id="Error"></div> --}}
@endsection

@section('custom_js')
	@include('store.components.bladejs')
@endsection

	