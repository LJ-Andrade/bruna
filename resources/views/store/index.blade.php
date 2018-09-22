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
						<a href="{{ url('tienda') }}" class="btn btn-outline-primary btn-sm">Volver al listado</a> 
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
						<div class="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3 article">
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
									<img class="CheckCatalogImg" src="{{ asset($article->featuredImageName()) }}" alt="Producto del Catálogo">
									@if(Auth::guard('customer')->check())
									{{--  Check if product is in favs  --}}
									<a class="AddToFavs fa-icon fav-icon-nofav fav-btn
										@if(in_array($article->id, $favs['articleFavs'])) fav-icon-isfav @endif"
										data-id="{{ $article->id }}" data-toggle="tooltip" title="Agregar a Favoritos">
									</a>
									@endif
									<a href="{{ url('tienda/articulo/'.$article->id) }}">
										<div class="overlay text-center">
											Ver producto
										</div>
									</a>
								</div>
								{{-- ============== Content =============== --}}
								{{-- ====================================== --}}
								<div class="content">
									{{-- ============ Title-Info ============== --}}
									<div class="title-info">
										<a href="{{ url('tienda/articulo/'.$article->id) }}"><h3 class="product-title max-text"><b>{{ $article->name }}</b></h3></a>
										{{-- <h3 class="product-title max-text"> {{ $article->color}} |
										@foreach($article->atribute1 as $atribute) 	{{ $atribute->name }} @endforeach
										</h3> --}}
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
										<div class="col col-favs col-add pad0">
											{{-- @if(Auth::guard('customer')->check()) --}}
											{{--  Check if product is in favs  --}}
											{{-- <a class="AddToFavs fa-icon fav-icon-nofav fav-btn
												@if(in_array($article->id, $favs['articleFavs'])) fav-icon-isfav @endif"
												data-id="{{ $article->id }}" data-toggle="tooltip" title="Agregar a Favoritos">
											</a>
											@endif --}}
											@if(Auth::guard('customer')->check())
												{!! Form::open(['route' => 'store.addtocart', 'method' => 'POST', 'class' => 'form-group price']) !!}	
													<input type="number" min="0" max="{{ $article->stock }}" name="quantity" class="quantity-input" value="1">
													<button type="submit" class="btn btn-outline-primary btn-sm">Agregar</button>
													<input type="hidden" value="{{ $article->id }}" name="articleId">
												{!! Form::close() !!}
											@else
												<a href="{{ url('tienda/articulo/'.$article->id) }}" class="btn btn-outline-primary btn-sm">Ver detalles</a>
											@endif
										</div>
									</div>
								</div>
							</div>
						</div>
					@endforeach
				</div>
				{!! $articles->appends(request()->query())->render()!!}
				<span class="pagination-results">
					<b>Resultados por página:</b>
					<a href="{{ route('store', ['results' => '20']) }}">20</a> | 
					<a href="{{ route('store', ['results' => '40']) }}">40</a> |
					<a href="{{ route('store', ['results' => '60']) }}">60</a>
				</span>
			</div>
		</div>
	</div>
	{{-- <div id="Error"></div> --}}
@endsection

@section('scripts')
	@include('store.components.bladejs')
	<script>
		function openSidebar(){
			$('#Sidebar').toggle(100);
		}
	</script>
@endsection


