@extends('store.partials.main')

@section('header-image')
	<div class="index-header">
		
	</div>
@endsection

@section('content')

	<!-- Page Content -->
	<div class="container-fluid padding-bottom-3x mb-1">
		<div class="row">
			<!-- SideBar -->
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-2">
				@include('store.partials.sidebar')
			</div>
			<!-- Products -->
			<div class="col-xs-12 col-sm-12 col-md-9 col-lg-10">
				<!-- Products Grid -->
				@if(isset($search) && $search == true || count($_GET) > 0)
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
				<div class="row articles-container">
					@foreach($articles as $article)
						<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 article">
							<div class="inner">
								{{-- =========== Discount Badge =========== --}}
								{{-- ====================================== --}}
								
								{{-- Reseller Discount --}}
								@if(Auth::guard('customer')->check() && Auth::guard('customer')->user()->group == '3')
									@if($article->reseller_discount > 0)
										<div class="discount-badge">
											<div class="triangle"></div>
											<div class="text">	%{{ $article->reseller_discount }} <br> off !!</div>
										</div> 
									@endif
								@else
									{{-- Normal Customer Discount --}}
									@if($article->discount > 0)
										<div class="discount-badge">
											<div class="triangle"></div>
											<div class="text">	%{{ $article->discount }} <br> off !!</div>
										</div> 
									@endif
								@endif
								{{-- =============== Image ================ --}}
								{{-- ====================================== --}}
								<div class="image">
									<a href="{{ url('tienda/articulo/'.$article->id) }}">
										<img class="CheckCatalogImg" src="{{ asset($article->featuredImageName()) }}" alt="Producto del Catálogo">
									</a>
									@if(Auth::guard('customer')->check())
									{{--  Check if product is in favs  --}}
									<a class="AddToFavs fa-icon fav-icon-nofav fav-btn
										@if(in_array($article->id, $favs['articleFavs'])) fav-icon-isfav @endif"
										data-id="{{ $article->id }}" data-toggle="tooltip" title="Agregar a Favoritos">
									</a>
									@endif
								</div>
								{{-- ============== Content =============== --}}
								{{-- ====================================== --}}
								<div class="content">
									{{-- ============ Title-Info ============== --}}
									<div class="title-info">
										<a href="{{ url('tienda/articulo/'.$article->id) }}"><h3 class="product-title max-text"><b>{{ $article->name }}</b></h3></a>
										<h3 class="product-title max-text"> {{ $article->color}} |
										@foreach($article->atribute1 as $atribute) 	{{ $atribute->name }} @endforeach
										</h3>
									</div>
									{{-- =============== Footer =============== --}}
									<div class="footer">
										<div class="col col-price pad0">
											@if(Auth::guard('customer')->check() && Auth::guard('customer')->user()->group == '3')
												@if($article->reseller_discount > 0)
													<del>$ {{ $article->reseller_price + 0 }}</del> 
													<span class="price">
														 $ {{ calcValuePercentNeg($article->reseller_price, $article->reseller_discount + 0) }}
													</span>
												@else
													<span class="price">$ {{ $article->reseller_price + 0 }}</span>
												@endif
											@else
												@if($article->discount > 0)
													<del>$ {{ $article->price + 0 }}</del>
													<span class="price">
														$ {{ calcValuePercentNeg($article->price, $article->discount + 0) }}
													</span>
												@else
													<span class="price">$ {{ $article->price + 0 }}</span>
												@endif
											@endif
										</div>
										<div class="col col-favs pad0">
											{{-- @if(Auth::guard('customer')->check()) --}}
											{{--  Check if product is in favs  --}}
											{{-- <a class="AddToFavs fa-icon fav-icon-nofav fav-btn
												@if(in_array($article->id, $favs['articleFavs'])) fav-icon-isfav @endif"
												data-id="{{ $article->id }}" data-toggle="tooltip" title="Agregar a Favoritos">
											</a>
											@endif --}}
											<a href="{{ url('tienda/articulo/'.$article->id) }}" class="btn btn-outline-primary btn-sm">Ver producto</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					@endforeach
				</div>
				{!! $articles->render() !!}
			</div>
		</div>
	</div>
	{{-- <div id="Error"></div> --}}
@endsection

@section('custom_js')
	@include('store.components.bladejs')
	<script>
		function openSidebar(){
			$('#Sidebar').toggle(100);
		}
	</script>
@endsection

