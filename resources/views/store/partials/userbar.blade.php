<!-- Toolbar-->
<div class="toolbar">
    <div class="inner">
        <a class="site-logo-mobile" href="{{ url('/') }}"><img style="width: 110px" src="{{ asset('images/logos/app-logo.png') }}" alt="Logo"></a>
        <div class="text-links">
            <a href="{{ url('politica-de-exclusividad') }}">Política de Exclusividad</a>
            <a href="{{ url('como-comprar') }}"><i class="far fa-question-circle"></i> Como comprar</a> 
        </div>
        <div class="tools">
            @if(Auth::guard('customer')->check())
                @if(isset($activeCart))
                    <div class="CartResumen cart-resumen-desktop">
                        @include('store.partials.cart-resumen-desktop')
                    </div>
                    <div onclick="showCartResumeMobile()" class="cart-resumen-mobile">
                        <div class="CartResumenMobile cart">
                            <i class="icon-bag"></i><span class="count">{{ $activeCart['totalItems'] }}</span>
                            <span class="subtotal">$ {{ $activeCart['cartSubTotal'] }}</span>
                        </div>
                    </div>
                @else
                    <div class="CartResumen CartResumenMobile cart"><a href="#"></a><i class="icon-bag"></i><span class="count">0</span></div>
                @endif
                <div class="account"><a href="#" onclick="event.preventDefault();"></a>
                    <img src="{{ asset('webimages/customers/'.Auth::guard('customer')->user()->avatar ) }}" class="CheckImg" alt="">
                    {{-- @if(Auth::guard('customer')->user()->avatar)
                    @else
                        <i class="icon-head"></i>
                    @endif --}}
                    <ul class="toolbar-dropdown">
                        <li class="sub-menu-title"><span>Hola,</span> {{ Auth::guard('customer')->user()->name }}</li>
                        <li><a href="{{ route('store.customer-account') }}">Cuenta</a></li>
                        <li><a href="{{ route('store.customer-orders') }}">Lista de Pedidos</a></li>
                        <li><a href="{{ route('store.customer-wishlist') }}">Favoritos</a></li>
                        <li class="sub-menu-separator"></li>
                        <li>
                            <a href="{{ route('customer.logout') }}" class="dropdown-item" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                <i class="icon-unlock"></i> Desconectar
                                <form id="logout-form" action="{{ route('customer.logout') }}" method="POST" style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </a>
                        </li> 
                        {{ csrf_field() }}
                    </ul>
                </div>
            @else
                <div class="access-buttons">
                    <a href="{{ route('customer.login') }}"><button class="btn btn-outline-primary btn-sm">Ingresar</button></a>
                    <a href="{{ route('customer.register') }}"><button class="btn btn-outline-primary btn-sm">Registrarse</button></a>
                </div>
                <div class="access-icons">
                    <a href="{{ route('customer.login') }}"><button class="icon-button"><i class="fas fa-sign-in-alt"></i></button></a>
                    <a href="{{ route('customer.register') }}"><button class="icon-button"><i class="fas fa-user-plus"></i></button></a>
                </div>
            @endif
        </div>
    </div>
</div>