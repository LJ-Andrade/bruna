<!-- Topbar-->
<div class="topbar">
	<div class="topbar-column">
		Seguinos: 
		<a class="social-button sb-facebook shape-none sb-dark" href="https://www.facebook.com/br.ndumentaria/" target="_blank">
			<i class="socicon-facebook"></i>
		</a>
		<a class="social-button sb-twitter shape-none sb-dark" href="https://www.instagram.com/bruna.indumentaria1/" target="_blank">
			<i class="socicon-twitter"></i>
		</a>
	</div>
	<div class="topbar-column">
		<a class="">&nbsp;<b>11-6761-8867 </b></a>
		<a class="e-mail-field" href="mailto:info@bruna.com.ar">
			<i class="icon-mail"></i>&nbsp; info@bruna.com.ar
		</a>
		@if(isset($activeCart))
			<a href="{{ route('store.checkout') }}"><i class="fas fa-shopping-cart"></i></a>
		@endif
	</div>
</div>