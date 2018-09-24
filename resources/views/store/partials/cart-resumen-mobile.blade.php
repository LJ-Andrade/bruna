<div class="container cart-resume-details-mobile Hidden">
    <div class="top-title">Artículos en carro de compras:</div>
    @foreach($activeCart['rawdata']->items as $item)
        <div class="row inner">
            <a class="image" href="{{ url('tienda/articulo/'.$item->id) }}">
                <img src="{{ asset($item->article->featuredImageName()) }}" alt="Product">
            </a>
            <div class="content">
                <a class="title" href="">
                    @if(strlen($item->article->name) > 15)
                        {{ substr($item->article->name, 0, 15) }}...
                    @else
                        {{ $item->article->name }}
                    @endif
                </a>
                <span class="details"> 
                    @if(Auth::guard('customer')->user()->group == '3') 
                        $ {{ calcValuePercentNeg($item->article->reseller_price, $item->article->reseller_discount)}}
                    @else 
                        $ {{ calcValuePercentNeg($item->article->price, $item->article->discount)}}
                    @endif
                    (x{{ $item->quantity }})
                </span><br>
                <span class="details">Talle: {{ $item->size }} | {{ $item->color }} </span>
            </div>
        </div>
    @endforeach
    <div class="footer">
        <div class="price"> Total: $ {{ $activeCart['cartSubTotal'] }}</div>
        <div class="column"><a class="btn btn-sm btn-main" href="{{ route('store.checkout') }}"><i class="fas fa-shopping-cart"></i> Ir al carro</a></div>
    </div>
</div>