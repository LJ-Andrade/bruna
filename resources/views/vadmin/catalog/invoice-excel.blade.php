@extends('vadmin.partials.invoice-excel')

@section('content')
<table class="table">
    <thead>
        <tr>
            <th>Cód.</th>
            <th>Título</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Oferta (%)</th>
            <th>Categoría</th>
        </tr>
    </thead>
    <tbody>
    @foreach($items as $item)
        <tr>
            <td class="w-50">#{{ $item->code }}</td>
            <td class="max-text">{{ $item->name }}</td>
            {{--  STOCK  --}}
            <td>
                @if($item->stock > $item->stockmin)
                    <div class="">{{ $item->stock }}</div>
                @else
                    <div class="highlight">{{ $item->stock }}</div>
                @endif
            </td>
            {{--  PRICE  --}}
            <td>
                <span class="Extra-Data">$ </span><span class="DisplayPriceData">{{ $item->price }}</span>
            </td>
            {{--  Discount PERCENT and PRICE  --}}
            <td>
                @if($item->discount == '0')
                    <span class="Extra-Data">-</span>
                @else
                    <span class="Extra-Data">%</span><span class="DisplayDiscountData">{{ $item->discount }}</span>
                    <span class="Extra-Data"> ($ {{ calcValuePercentNeg($item->price, $item->discount) }})</span>
                @endif
                <div class="UpdateDiscountBtn action-button Hidden" data-id="{{ $item->id }}"><i class="icon-checkmark2"></i></div>
            </td>
            {{--  DATE   --}}
            <td class="w-200">{{ $item->category->name }}</td>		
        </tr>
    @endforeach
    </tbody>
</table>
@endsection