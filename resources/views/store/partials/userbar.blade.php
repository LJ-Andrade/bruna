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
                    <div class="cart">
                        <i class="icon-bag"></i><span class="count">{{ $activeCart['totalItems'] }}</span>
                        <span class="subtotal">$ {{ $activeCart['cartSubTotal'] }}</span>
                        <div class="toolbar-dropdown toolbar-user-dropdown">
                            @foreach($activeCart['rawdata']->items as $item)
                                <div class="dropdown-product-item">
                                    {{-- <span class="RemoveArticleFromCart dropdown-product-remove" data-itemid="{{ $item->id }}">
                                        <i class="icon-cross"></i>
                                    </span> --}}
                                    <a class="dropdown-product-custom-thumb" href="{{ url('tienda/articulo/'.$item->id) }}">
                                        <img src="{{ asset($item->article->featuredImageName()) }}" alt="Product">
                                    </a>
                                    <div class="dropdown-product-info">
                                        <a class="dropdown-product-title" href="">
                                            @if(strlen($item->article->name) > 15)
                                                {{ substr($item->article->name, 0, 15) }}...
                                            @else
                                                {{ $item->article->name }}
                                            @endif
                                        </a>
                                        <span class="dropdown-product-details"> 
                                            @if(Auth::guard('customer')->user()->group == '3') 
                                                $ {{ calcValuePercentNeg($item->article->reseller_price, $item->article->reseller_discount)}}
                                            @else 
                                                $ {{ calcValuePercentNeg($item->article->price, $item->article->discount)}}
                                            @endif
                                            (x{{ $item->quantity }})
                                        </span><br>
                                        <span class="dropdown-product-details">Talle: {{ $item->size }} | {{ $item->color }} </span>
                                    </div>
                                </div>
                            @endforeach
                            <div class="toolbar-dropdown-group">
                                <div class="column"><span class="text-lg">Total:</span></div>
                                <div class="column text-right"><span class="text-lg text-medium">$ {{ $activeCart['cartSubTotal'] }} &nbsp;</span></div>
                            </div>
                            <div class="toolbar-dropdown-group">
                                <div class="column"><a class="btn btn-sm btn-block btn-main" href="{{ route('store.checkout') }}"><i class="fas fa-shopping-cart"></i> Ir al carro</a></div>
                            </div>
                        </div>
                    </div>
                    @else  
                    <div class="cart"><a href="#"></a><i class="icon-bag"></i><span class="count">0</span>
                    </div>
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
                <a href="{{ route('customer.login') }}"><button class="btn btn-outline-primary btn-sm">Ingresar</button></a>
                <a href="{{ route('customer.register') }}"><button class="btn btn-outline-primary btn-sm">Registrarse</button></a>
            @endif
        </div>
    </div>
</div>