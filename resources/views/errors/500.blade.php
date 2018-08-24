@extends('web.partials.main')
@section('title')
    {{ APP_BUSSINESS_NAME }}
@endsection

@section('content')
    <div class="container error-page">
        <div class="row">
            <h1>UPS !</h1>
            <p>La página que está buscando no existe</p>
            <hr class="softhr">
            <a href="{{ url('/') }}"><button class="button btnHollowGreen">Volver al inicio</button></a>
            <a href="{{ route('store') }}"><button class="button btnHollowGreen">Ir a la tienda</button></button></a>
        </div>
    </div>
@endsection
