@extends('auth.app')

@section('content')
<section class="login-container">
    <div class="inner">
        <div class="card border-grey border-lighten-3 m-0">
            <div class="card-header no-border">
                <div class="card-title text-xs-center">
                    <div class="p-1"><img src="{{ asset('vadmin-ui/app-assets/images/logo/app-logo2.png') }}" alt="branding logo"></div>
                </div>
                {{--  <h6 class="card-subtitle line-on-side text-muted text-xs-center font-small-3 pt-2" style="margin-top: 0"><span>Ingreso al Sistema</span></h6>  --}}
            </div>
            <div class="card-body collapse in">
                <div class="container" style="text-align: center">Gestor de Contenido</div>
                <div class="card-block">
                    @include('auth.messages')
                    <form class="form-horizontal form-simple" method="POST" action="{{ route('vadmin.login') }}">
                        {{ csrf_field() }}
                        <fieldset class="form-group{{ $errors->has('email') ? ' has-error' : '' }} position-relative has-icon-left mb-0">
                            <input id="email" type="text" name="email" class="form-control round" placeholder="Ingrese su Email" value="{{ old('email') }}" required>
                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            <div class="form-control-position">
                                <i class="icon-head"></i>
                            </div>
                        </fieldset>
                        <fieldset class="form-group{{ $errors->has('password') ? ' has-error' : '' }} position-relative has-icon-left">
                            <input id="password" type="password" name="password"  class="form-control round" placeholder="Ingrese su contraseña" required>
                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            <div class="form-control-position">
                                <i class="icon-key3"></i>
                            </div>
                        </fieldset>
                        <fieldset class="form-group position-relative">
                            <button type="submit" class="btn btn-primary btn-block">
                                <i class="icon-unlock2"></i> Conectar
                            </button>
                            <div class="col-md-6 col-xs-12 text-xs-center text-md-left rememberme-box">
                                <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Recordarme
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div class="card-footer">
                <div class="">
                    <p class="float-sm-left text-xs-center m-0">
                        <a class="card-link" href="{{ route('password.request') }}">Olvidé mi contraseña</a>
                    </p>
                    <p class="float-sm-right text-xs-center m-0"> <a href="{{ route('register') }}" class="card-link"><b>Registrarse</b></a></p>
                </div>
            </div>
        </div>
    </div>
</section>

@endsection
    