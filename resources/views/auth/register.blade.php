@extends('auth.app')

@section('content')
<section class="login-container">
    <div class="inner">
        <div class="card border-grey border-lighten-3 px-2 py-2 m-0">
            <div class="card-header no-border">
                <div class="card-title text-xs-center">
                    <img src="{{ asset('vadmin-ui/app-assets/images/logo/robust-logo-dark.png') }}" alt="branding logo">
                </div>
                <h6 class="card-subtitle line-on-side text-muted text-xs-center font-small-3 pt-2"><span>Creación de Cuenta</span></h6>
            </div>
            <div class="card-body collapse in">	
                <div class="card-block" style="padding: 20px 10px">
                    @include('auth.messages')
                    <form class="form-horizontal form-simple" method="POST" action="{{ route('register') }}">
                        {{ csrf_field() }}
                        {{-- Name --}}
                        <fieldset class="form-group{{ $errors->has('email') ? ' has-error' : '' }} position-relative has-icon-left mb-1">
                            <input id="name" type="text" name="name" class="form-control round" placeholder="Ingrese su nombre" value="{{ old('name') }}" required>
                            @if ($errors->has('name'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('name') }}</strong>
                                </span>
                            @endif
                            <div class="form-control-position">
                                <i class="icon-head"></i>
                            </div>
                        </fieldset>
                        {{-- Username --}}
                        <fieldset class="form-group{{ $errors->has('username') ? ' has-error' : '' }} position-relative has-icon-left mb-1">
                            <input id="username" type="text" name="username" class="form-control round" placeholder="Ingrese su nombre de usuario" value="{{ old('name') }}" required>
                            @if ($errors->has('username'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('username') }}</strong>
                                </span>
                            @endif
                            <div class="form-control-position">
                                <i class="icon-head"></i>
                            </div>
                        </fieldset>
                        {{-- Email --}}
                        <fieldset class="form-group{{ $errors->has('email') ? ' has-error' : '' }} position-relative has-icon-left mb-1">
                            <input id="email" type="email" name="email" class="form-control round" placeholder="Ingrese su email" value="{{ old('email') }}" required>
                            @if ($errors->has('email'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                            @endif
                            <div class="form-control-position">
                                <i class="icon-head"></i>
                            </div>
                        </fieldset>
                        {{-- Password --}}
                        <fieldset class="form-group{{ $errors->has('password') ? ' has-error' : '' }} position-relative has-icon-left">
                            <input id="password" type="password"  name="password" class="form-control round" placeholder="Contraseña" required>
                            @if ($errors->has('password'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('password') }}</strong>
                                </span>
                            @endif
                            <div class="form-control-position">
                                <i class="icon-key3"></i>
                            </div>
                        </fieldset>
                        {{-- Password Confirmation --}}
                        <fieldset class="form-group{{ $errors->has('password') ? ' has-error' : '' }} position-relative has-icon-left">
                            <input id="password-confirm" type="password" name="password_confirmation" class="form-control round" placeholder="Confirme Contraseña" required>
                            <div class="form-control-position">
                                <i class="icon-key3"></i>
                            </div>
                        </fieldset>
                        {{-- Submit --}}
                        <input type="hidden" name="usertype" value="111">
                        <button type="submit" class="btn btn-primary btn-block"><i class="icon-unlock2"></i> Registrarse</button>
                    </form>
                </div>
                <p class="text-xs-center">Ya tiene cuenta ? <a href="{{ route('login')}}" class="card-link"><b>Conectarse</b></a></p>
            </div>
        </div>
    </div>
</section>

@endsection