<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<title>{{ APP_BUSSINESS_NAME }} | Tienda</title>
		<!-- SEO Meta Tags-->
		<meta name="description" content="{{ APP_BUSSINESS_NAME }} | Tienda>
		<meta name="keywords" content="bruna, indumentaria, ropa, vestidos, ropa interior, lenceria, bombachas, tangas">
		<meta name="author" content="Vimana Studio">
		<meta name="csrf-token" content="{{ csrf_token() }}" />
		<!-- Mobile Specific Meta Tag-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<!-- Favicon and Apple Icons-->
		{{--  <link rel="icon" type="image/x-icon" href="favicon.ico">  --}}
		<link rel="icon" type="image/png" href="{{ asset('store-ui/images/favicon.png') }}">
		<link rel="apple-touch-icon" href="{{ asset('store-ui/images/favicon.png') }}">
		<link rel="apple-touch-icon" sizes="152x152" href="{{ asset('store-ui/images/favicon.png') }}">
		<link rel="apple-touch-icon" sizes="180x180" href="{{ asset('store-ui/images/favicon.png') }}">
		<link rel="apple-touch-icon" sizes="167x167" href="{{ asset('store-ui/images/favicon.png') }}">
		<!-- Vendor Styles including: Bootstrap, Font Icons, Plugins, etc.-->
		<link rel="stylesheet" media="screen" href="{{ asset('store-ui/css/vendor.min.css') }}">
		<link rel="stylesheet" media="screen" href="{{ asset('store-ui/css/iziToast.min.css') }}">
		<link rel="stylesheet" href="{{ asset('plugins/font-awesome/css/all.css') }}">
		<!-- Main Template Styles-->
		<link rel="stylesheet" media="screen" href="{{ asset('css/store-custom.css') }}">
		
		@yield('styles')
		<!-- Modernizr-->
		<script src="{{ asset('store-ui/js/modernizr.min.js') }}"></script>
	</head>
	<!-- Body-->
	<body>
		
		<div id="full-loader" class="full-loader Hidden">
			<div class="inner">
				<img src="{{ asset('store-ui/images/loader.gif') }}" alt="">
			</div>
		</div>
		
		@yield('modal')
		@include('store.partials.topbar')
		@include('store.partials.mobilemenu')
		@include('store.partials.nav') {{-- ToolBar in inside this nav include --}}
		<!-- Off-Canvas Wrapper-->
		{{-- <div class="offcanvas-wrapper">
		<!-- Page Title-->
		 <div class="page-title">
			<div class="container">
			<div class="column">
				<h1>Santa Osadía | Tienda </h1>
			</div>
			</div>
		</div>  --}}
		<div class="container-fluid custom-page-title pad0">
			@yield('header-image')
			<div class="container">
				@include('store.partials.alerts')
			</div>
		</div>
		@yield('content')
		@include('store.partials.foot')
		<!-- Back To Top Button--><a class="scroll-to-top-btn" href="#"><i class="icon-arrow-up"></i></a>
		<!-- Backdrop-->
		<div class="site-backdrop"></div>
		<!-- JavaScript (jQuery) libraries, plugins and custom scripts-->
		<script src="{{ asset('store-ui/js/vendor.min.js') }}"></script>
		<script src="{{ asset('store-ui/js/iziToast.min.js') }}"></script>
		<script src="{{ asset('store-ui/js/scripts.min.js') }}"></script>
		<script src="{{ asset('plugins/jquery/jquery-3.3.1.min.js') }}"></script>
		<script src="{{ asset('js/store-scripts.js') }}"></script>
		@include('store.partials.scripts')
		@yield('scripts')
		@yield('custom_js')
		<script>
			$('.CheckCatalogImg').on('error', function(){
				var defaultImg = "{{ asset('images/gen/catalog-gen.jpg') }}"
				$(this).attr('src', defaultImg);
			});
		</script>
	</body>
</html>