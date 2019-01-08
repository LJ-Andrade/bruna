@extends('vadmin.partials.main')

@section('title', 'Vadmin | Tests')

@section('styles')
@endsection

@section('content')
	<div class="dashboard">
		<div class="content-body">
			<h1>Testear mails</h1>
            <hr class="softhr">
            <div class="row">
                <div class="container-fluid">
                    {!! Form::open(['route' => 'updateSettings', 'method' => 'POST', 'class' => 'settings-form']) !!}	
                        {{ csrf_field() }}
                        <label for="">Testear mails de notificación de carros activos con más de 24hs</label>
                        <label for="">Cliente: </label>
                        <div class="form-group">
                            <select name="" id="" class="font-control">
                                @foreach($carts as $cart)
                                <option value="">Órder: #{{ $cart->id}} ({{ $cart->customer->email }})</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="">E-mail destino</label>
                            <input class="form-control" type="text" name="email" value="dev@vimana.studio">
                        </div>
                        <input class="btnSm btnBlue" type="submit" value="Enviar">
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
    <div id="Error"></div>
@endsection

@section('scripts')
<script type="text/javascript" src="{{ asset('plugins/chosen/chosen.jquery.min.js') }}" ></script>
<script type="text/javascript" src="{{ asset('js/vadmin-forms.js') }}" ></script>
@endsection

@section('custom_js')
@endsection
