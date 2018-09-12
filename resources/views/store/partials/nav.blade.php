<!-- Navbar-->
<!-- Remove ".navbar-sticky" class to make navigation bar scrollable with the page.-->
<header class="navbar navbar-sticky">
	<!-- Search-->
	<form class="site-search" method="get">
		<input type="text" name="site_search" placeholder="Type to search...">
		<div class="search-tools"><span class="clear-search">Clear</span><span class="close-search"><i class="icon-cross"></i></span></div>
	</form>
	<div class="site-branding">
		<div class="inner">
			<!-- Site Logo-->
			<a class="site-logo" href="{{ url('/') }}"><img style="width: 110px" src="{{ asset('images/logos/app-logo.png') }}" alt="Logo"></a>
		</div>
	</div>
	<!-- Main Navigation-->
	@include('store.partials.userbar')
</header>
<div class="under-nav-container">
	<div class="text-links">
		<a href="{{ url('politica-de-exclusividad') }}">Política de Exclusividad</a>
		<a href="{{ url('como-comprar') }}">Como comprar</a> 
	</div>
</div>