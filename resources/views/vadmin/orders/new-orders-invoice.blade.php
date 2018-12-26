@extends('vadmin.partials.invoice-excel')

@section('content')
    <table>
        <tr>
            <th>Cantidad</th>
            <th>Artículo</th>
            <th>Detalles</th>
            <th>Precio</th>
        </tr>
        @foreach($data as $item)
        <tr>
            <td class="mw-50">{{ $item['quantity'] }}</td>
            <td>{{ $item['article_name'] }}</td>
            <td>{{ $item['details'] }}</td>
            <td>{{ $item['price'] }}</td>
        </tr>
        @endforeach
    </table>
@endsection