@extends('vadmin.partials.main')
@section('title', 'Vadmin | Perfil de Usuario')

@section('header')
	@component('vadmin.components.header')
		@slot('breadcrums')
			<li class="breadcrumb-item"><a href="{{ url('vadmin')}}">Inicio</a></li>
            <li class="breadcrumb-item"><a href="{{ route('customers.index')}}">Clientes</a></li>
            <li class="breadcrumb-item active">Perfil de <b>{{ $customer->customername }}</b></li>
		@endslot
		@slot('actions')
		@endslot
	@endcomponent
@endsection

@section('content')
    <div class="row">
        @component('vadmin.components.container')
            @slot('title')
                 <span style="color: #ada8a8">Perfil | </span>{{ $customer->name }}
            @endslot
            @slot('content')
                <div class="col-md-5">
                    <div class="round-image-card">
                        <div class="inner">
                            <div class="image">
                                @if($customer->avatar == '')
                                    <img id="Avatar" class="Image-Container CheckImg" src="{{ asset('images/customers/default.jpg') }}" alt="Imágen de Usuario">
                                @else	
                                    <img id="Avatar" class="Image-Container CheckImg" src="{{ asset('images/customers/'.$customer->avatar) }}" alt="Imágen de Usuario">
                                @endif
                                <span class="over-text">Cambiar imágen</span>
                            </div>
                        </div>
                    </div>
                    <div class="ActionContainer Hidden">
                        <hr class="softhr">
                        {!! Form::open(['url' => 'vadmin/updateAvatar', 'method' => 'POST', 'class' => 'UpdateAvatarForm Hidden', 'files' => true]) !!}
                            {{-- <form enctype="multipart/form-data" action="profile" method="POST"> --}}
                            {{ csrf_field() }}
                            <input type="file" name="avatar" class="Hidden" id="ImageInput">
                            <input type="hidden" name="id" value="{{ $customer->id }}">
                            <input type="submit" class="btn btnGreen" id="ConfirmChange" value="Confirmar">
                        {!! Form::close() !!}    
                        {{-- <button id="UpdateProfileBtn" class="btn btnGreen"><i class="icon-check2"></i> Actualizar</button> --}}
                    </div>
                </div>
                <div class="col-md-7">
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>Nombre de usuario: </td>
                                <td>{{ $customer->username }}</td>
                            </tr>
                            <tr>
                                <td>Nombre y apellido: </td>
                                <td>{{ $customer->name }} {{ $customer->surname }}</td>
                            </tr>

                            <tr>
                                <td>E-Mail: </td>
                                <td>{{ $customer->email }}</td>
                            </tr>

                            <tr>
                                <td>Tipo de cliente: </td>
                                <td>{{ clientGroupTrd($customer->group) }}</td>
                            </tr>

                            <tr>
                                <td>Fecha de ingreso: </td>
                                <td>{{ transDateT($customer->created_at) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            @endslot
        @endcomponent
    </div>
@endsection

@section('custom_js')
	<script>
    	$(document).ready(function() {
			$('#Avatar').click(function(){
				$('#ImageInput').click();
			});       
		});
		function readURL(input) {
			if (input.files && input.files[0]) {
				var reader = new FileReader();

				reader.onload = function (e) {
					$('.Image-Container').attr('src', e.target.result);
                    $('.ActionContainer').removeClass('Hidden');
				}
					reader.readAsDataURL(input.files[0]);
				}
			}
			$("#ImageInput").change(function(){
			readURL(this);
			$('.UpdateAvatarForm').removeClass('Hidden');
		});
	</script>
@endsection