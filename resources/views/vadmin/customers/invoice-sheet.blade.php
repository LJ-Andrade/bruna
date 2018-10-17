@extends('vadmin.partials.invoice-excel')

@section('content')
<table class="table">
    <thead>
        <tr>
            <th>Cód.</th>
            <th>Nombre y Apellido</th>
            <th>E-Mail</th>
            <th>CUIT</th>
            <th>Dirección</th>
            <th>Prov / Loc</th>
            <th>Teléfonos</th>
            <th>Prendas Compradas</th>
            <th>Valor</th>
        </tr>
    </thead>
    <tbody>
    @foreach($items as $item)
    <tr>
        <td class="w-50">#{{ $item->id }}</td>
        <td class="max-text">{{ $item->name }} {{ $item->surname }}<br>({{ groupTrd($item->group) }})</td>
        <td>{{ $item->email }}</td>
        <td>{{ $item->cuit }}</td>
        <td>@if($item->address != '') {{ $item->address }} <br>({{$item->cp }}) @endif</td>
        <td>@if($item->geoprov['name'] != '') {{ $item->geoprov['name'] }} <br>({{ $item->geoloc['name'] }}) @endif</td>
        <td>{{ $item->phone }} <br> {{ $item->phone2 }}</td>
        <td>@if($item->staticstics('totalItems') != 0) {{ $item->staticstics('totalItems') }} @endif</td>
        <td>@if($item->staticstics('totalSpent') != 0) ${{ $item->staticstics('totalSpent') }} @endif</td>
    </tr>
    @endforeach			
    </tbody>
</table>
@endsection