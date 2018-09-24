<div class="CartResumen cart">
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