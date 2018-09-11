@extends('store.partials.main')


@section('content')
<div class="container padding-bottom-3x mb-2 marg-top-25">
	<div class="row centered-form">
        <form class="login-box form-simple inner" method="POST" action="{{ route('customer.register') }}">
            {{ csrf_field() }}
            <h3 class="text-center">Registro de Usuario</h3>
            <div class="row">
                {{-- Username --}}
                <div class="col-sm-6 form-group{{ $errors->has('username') ? ' has-error' : '' }}">
                    <label for="reg-fn">Nombre de Usuario (Apodo)</label>
                    <input id="username" type="text" name="username" class="form-control round" placeholder="Ingrese su nombre de usuario" value="{{ old('name') }}" required>
                    @if ($errors->has('username'))
                        <span class="help-block">
                            <strong>{{ $errors->first('username') }}</strong>
                        </span>
                    @endif
                </div> 	
                {{-- E-mail --}}
                <div class="col-sm-6 form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                    <label for="reg-fn">E-Mail</label>
                    <input type="text" name="email" class="form-control round" placeholder="Ingrese su email" value="{{ old('email') }}" required>
                    @if ($errors->has('email'))
                        <span class="help-block">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
                    @endif
                </div> 
            </div>
            <div class="row">
                {{-- Name --}}
                <div class="col-sm-6 form-group{{ $errors->has('username') ? ' has-error' : '' }}">
                    <label for="reg-fn">Nombre</label>
                    <input type="text" name="name" class="form-control round" placeholder="Nombre de Usuario" value="{{ old('username') }}" required>
                    @if ($errors->has('username'))
                        <span class="help-block">
                            <strong>{{ $errors->first('username') }}</strong>
                        </span>
                    @endif
                </div> 	
                {{-- Surname --}}
                <div class="col-sm-6 form-group{{ $errors->has('name') ? ' has-error' : '' }} ">
                    <label for="reg-fn">Apellido</label>
                    <input type="text" name="surname" class="form-control round" placeholder="Ingrese su nombre" value="{{ old('name') }}" required>
                    @if ($errors->has('name'))
                        <span class="help-block">
                            <strong>{{ $errors->first('name') }}</strong>
                        </span>
                    @endif
                </div>
            </div>
            <div class="row">
                {{-- Password --}}
                <div class="col-sm-6 form-group{{ $errors->has('password') ? ' has-error' : '' }} position-relative has-icon-left">
                    <label for="reg-fn">Contraseña</label>
                    <input id="password" type="password"  name="password" class="form-control round" placeholder="Contraseña" required>
                    @if ($errors->has('password'))
                        <span class="help-block">
                            <strong>{{ $errors->first('password') }}</strong>
                        </span>
                    @endif
                </div> 	
                {{-- Password Confirmation --}}
                <div class="col-sm-6 form-group{{ $errors->has('password') ? ' has-error' : '' }} position-relative has-icon-left">
                    <label for="reg-fn">Confirmar Contraseña</label>
                    <input id="password-confirm" type="password" name="password_confirmation" class="form-control round" placeholder="Confirme Contraseña" required>
                    @if ($errors->has('name'))
                        <span class="help-block">
                            <strong>{{ $errors->first('name') }}</strong>
                        </span>
                    @endif
                </div>
            </div>
            {{-- RESELLER BOX REQUIRED --}}
            <div id="ResellerBox">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Provincia</label>
                            {!! Form::select('geoprov_id', $geoprovs, null,
                            ['class' => 'GeoProvSelect IfResellerEnable form-control', 'placeholder' => 'Seleccione una opción', 
                            'disabled' => 'disabled', 'required' => '']) !!}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Localidad</label>
                            <select id='GeoLocsSelect' name="geoloc_id" 
                                data-actualloc="" 
                                data-actuallocid="" 
                                class="GeoLocsSelect IfResellerEnable form-control " disabled="disabled" required>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 form-group">
                        <label>CUIT (Sin guiones)</label>
                        <input type="number" name="cuit" class="IfResellerEnable form-control round" min="0" placeholder="Ingrese su número de CUIT" disabled="disabled" required>
                    </div>
                    <div class="col-md-6 form-group">
                        <label>Teléfono</label>
                        <input type="text" name="phone" class="IfResellerEnable form-control round" placeholder="Ingrese teléfono" disabled="disabled" required>
                    </div>
                </div>
            </div>
            {{-- RESELLER BOX REQUIRED Edisplay: none;--}}            
            <div class="col-xs-12 text-xs-center text-md-left bordered-box">
                <input id="IsResellerCeckbox" type="checkbox" name="isreseller"> Deseo aplicar para ser cliente mayorísta <br>
                <span class="text-muted">(Quedará en proceso de espera hasta ser aceptado por<br> <b>Bruna Indumentaria</b>)</span>
            </div>
            {{-- Submit --}}
            <button type="submit" class="btn btn-primary btn-block"><i class="icon-unlock"></i> Registrarse</button>
            <div class="bottom-text">Ya tiene cuenta? | <a href="{{ route('customer.login') }}">Ingresar</a></div>
        </form>
	</div>
</div>
@endsection
    

@section('scripts')
	@include('store.components.bladejs')
@endsection

@section('custom_js')
<script>
    const isReseller = $('#IsResellerCeckbox');
    const resellerInputs = $('.IfResellerEnable');
    const resellerBox = $('#ResellerBox');
    resellerBox.hide();

    isReseller.on('change', function(e){
        e.preventDefault();

        if(isReseller.prop('checked')){

            resellerInputs.prop('disabled', false);
            resellerBox.show(100);
        } else {
            resellerInputs.prop('disabled', true);
            resellerBox.hide(100);
        }
    });


    

    $(document).ready(function(){
 
        $('.GeoProvSelect').on('change', function(){
            let prov_id = $(this).val();
            getGeoLocs(prov_id);
        });
    });
</script>
@endsection