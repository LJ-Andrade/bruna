@extends('store.partials.main')

@section('content')
<div class="container padding-bottom-3x mb-2 marg-top-25">
	<div class="row centered-form">
		<div class="centered-notification">
			<div class="content">
				<h3>Gracias por registrarse !</h3>
			</div>
			<div class="bottom">
				<a href="{{ url('tienda') }}" class="btn btn-outline-primary btn-sm"> Seguir viendo la tienda </a>
			</div>
		</div>
	</div>
</div>
@endsection
    