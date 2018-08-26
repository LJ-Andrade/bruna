@extends('store.partials.main')

@section('content')
<div class="container padding-bottom-3x mb-1 marg-top-25">
	<div class="row product-show">
		<div class="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-6 image">
			<span class="text-medium">Categoría:&nbsp;</span>
			<a class="navi-link" href="#">{{ $article->category->name }}</a>
			<div class="row product-gallery">
				<div class="col-xs-12 col-sm-3 col-md-3 pad0">
					<ul class="product-thumbnails">
						@foreach($article->images as $image)
							<li class=""><a href="#{{ $image->id }}"><img src="{{ asset('webimages/catalogo/'. $image->name) }}" alt="Product"></a></li>
						@endforeach
					</ul>
				</div>
				<div class="col-xs-12 col-sm-9 col-md-9 images-container pad0">
					<div class="gallery-wrapper">
						@foreach($article->images as $index => $image)
						<div class="gallery-item {{ $index == 0 ? 'active' : '' }}">
							<a href="{{ asset('webimages/catalogo/'. $image->name) }}" data-hash="{{ $image->id }}" data-size="500x750"><i class="icon-zoom-in"></i></a>
						</div>
						@endforeach
					</div>
					<div class="product-carousel owl-carousel">
						@if(!$article->images->isEmpty())
						@foreach($article->images as $image)
							<div data-hash="{{ $image->id }}"><img class="img-fluid" src="{{ asset('webimages/catalogo/'. $image->name) }}" alt="Product"></div>
						@endforeach
						@else
							<img src="{{ asset($article->featuredImageName()) }}" alt="Producto del Catálogo">
						@endif
					</div>
				</div>
			</div>
		</div>

		<div class="col-xs-12 col-sm-6 col-md-6 col-lg-7 col-xl-6 products-details">
			<div class="padding-top-2x hidden-md-up"></div>
			{{--  Article Name  --}}
			<h2 class="text-normal" style="margin: 0">{{ $article->name }}</h2>
			<div class="mb-3"><span class="text-medium">Código:</span> #{{ $article->id }}</div>
			
			@if(Auth::guard('customer')->check() && Auth::guard('customer')->user()->group == '3')
				{{-- Reseller Article Price and Discount --}}	
				@if($article->reseller_discount > 0)
					DESCUENTO % {{ $article->reseller_discount }}!!
					<span class="h2 d-block">
						<del class="text-muted text-normal">$ {{ $article->reseller_price }}</del>
						&nbsp; ${{ calcValuePercentNeg($article->reseller_price, $article->reseller_discount) }}
					</span>
				@else
					<span class="h2 d-block">$ {{ $article->reseller_price }}</span>
				@endif
			@else
				{{-- Article Price and Discount --}}
				@if($article->discount > 0)
					DESCUENTO % {{ $article->discount }}!!
					<span class="h2 d-block">
						<del class="text-muted text-normal">$ {{ $article->price }}</del>
						&nbsp; ${{ calcValuePercentNeg($article->price, $article->discount) }}
					</span>
				@else
					<span class="h2 d-block">$ {{ $article->price }}</span>
				@endif
			@endif
		
			{{-- Article Description --}}
			<p>{{ strip_tags($article->description) }}</p>
			<div class="row">
				<div class="col-sm-12">
					<span class="text-medium"><b>Talle:</b></span>
					<a class="navi-link" href="#">@foreach($article->atribute1 as $atribute) {{ $atribute->name }} @endforeach</a> |
					<span class="text-medium"><b>Color:</b></span>
					<a class="navi-link" href="#">{{ $article->color }}</a> |
					<span class="text-medium"><b>Tela:</b></span>
					<a class="navi-link" href="#">{{ $article->textile }}</a>
				</div>
			</div>
			<label for="quantity">Cantidad</label>
			<div class="row margin-top-1x">
				{{-- Quantity --}}
				<div class="col-sm-3">
					{!! Form::open(['route' => 'store.addtocart', 'method' => 'POST', 'class' => 'form-group']) !!}	
						Cantidad
						<input type="hidden" value="{{ $article->id }}" name="articleId">
						<input class="form-control" name="quantity" type="number" min="1" max="{{ $article->stock }}" value="1">
						<button type="submit" class="btn btn-outline-primary btn-sm">Agregar</button>
					{!! Form::close() !!}
				</div>
				<div class="sp-buttons">
					<button class="AddToFavs btn btn-outline-secondary btn-sm btn-wishlist
						@if($isFav) addedToFavs @endif" data-id="{{ $article->id }}" data-toggle="tooltip" title="Agregar a Favoritos">
						<i class="icon-heart"></i>
					</button>
				</div>
			</div>
			<hr class="mb-3">
			<div class="pull-right">
				<a class="btn btn-outline-secondary" href="{{ route('store') }}"><i class="icon-arrow-left"></i>&nbsp;Volver a la tienda</a>
			</div>
			<div class="clearfix"></div>
			<br>
		</div>
	</div>
</div>
	
	<!-- Photoswipe container // This Shows Big Image Preview -->
	<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="pswp__bg"></div>
		<div class="pswp__scroll-wrap">
			<div class="pswp__container">
				<div class="pswp__item"></div>
				<div class="pswp__item"></div>
				<div class="pswp__item"></div>
			</div>
			<div class="pswp__ui pswp__ui--hidden">
			<div class="pswp__top-bar">
				<div class="pswp__counter"></div>
				<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
				<button class="pswp__button pswp__button--share" title="Share"></button>
				<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
				<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
				<div class="pswp__preloader">
					<div class="pswp__preloader__icn">
						<div class="pswp__preloader__cut">
							<div class="pswp__preloader__donut"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
				<div class="pswp__share-tooltip"></div>
			</div>
			<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
			<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
			<div class="pswp__caption">
				<div class="pswp__caption__center"></div>
			</div>
		</div>
	</div>
</div>
<div id="Error"></div>
@endsection

@section('custom_js')
	@include('store.components.bladejs')
@endsection

@section('scripts')
	<script>
		
	</script>
@endsection