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
		{{--  This Is the SIDEMENU  --}}
		{{--  <!-- Off-Canvas Toggle (#shop-categories)--><a class="offcanvas-toggle cats-toggle" href="#shop-categories" data-toggle="offcanvas"></a>
		<!-- Off-Canvas Toggle (#mobile-menu)--><a class="offcanvas-toggle menu-toggle" href="#mobile-menu" data-toggle="offcanvas"></a>  --}}
		<!-- Site Logo--><a class="site-logo" href="{{ url('/') }}"><img style="width: 110px" src="{{ asset('images/logos/app-logo.png') }}" alt="Logo"></a>
		</div>
	</div>
	<!-- Main Navigation-->
	@include('store.partials.userbar')
</header>