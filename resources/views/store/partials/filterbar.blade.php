<div class="form-inline horizontal-filters search-filter">
    {!! Form::open(['route' => 'store', 'method' => 'GET', 'class' => 'input-group form-group search-input']) !!}
        <span class="input-group-btn">
            <button type="submit"><i class="icon-search"></i></button>
        </span>
        <input class="form-control" name="buscar" type="search" placeholder="Buscar...">
    {!! Form::close() !!}
    <a class="trigger" onclick="openFilters()"><i class="fas fa-sliders-h"></i></a> 
</div>
<div id="SearchFilters" class="form-inline horizontal-filters general-filters">
    <select class="form-control item" name="order" onchange="location = this.value;">
        <option value="Etiquetas" selected disabled>Ordenar por</option>
        <option value="{{ route('store', ['precio' => 'menor']) }}">Menor precio</option>
        <option value="{{ route('store', ['precio' => 'menor']) }}">Mayor precio</option>
        <option value="{{ route('store', ['precio' => 'menor']) }}">Con Descuento</option>
        <option value="{{ route('store', ['precio' => 'menor']) }}">Populares</option>
    </select>
    {{-- Tags --}}
    <select class="form-control item" name="tags" onchange="location = this.value;">
        <option value="Etiquetas" selected disabled>Etiquetas</option>
        @foreach($tags as $tag)
            <option value="{{ route('store.search.tag', $tag->name) }}"> {{ $tag->name }} </option>
        @endforeach
    </select>
    {{-- Categories --}}
    <select class="form-control item" name="categories" onchange="location = this.value;">
        <option value="Etiquetas" selected disabled>Categorías</option>
        @foreach($categories as $category)
            <option value="{{ route('store', 'categoria=').$category->id }}"> {{ $category->name }} </option>
        @endforeach
    </select>
    <div class="back-to-list-desktop">
        @if(!isset($_GET['checkout-on']))
            @if(isset($_GET['page']) && !isset($search) && count($_GET) == 1)
            @else
                @if(isset($search) && $search == true || count($_GET) > 0 && !isset($_GET['results']))
                    <a href="{{ url('tienda') }}" class="form-control filter-button item" type="button">Volver al listado</a>
                @endif
            @endif
        @endif
    </div>
</div>

<div class="back-to-list-mobile">
    @if(!isset($_GET['checkout-on']))
        @if(isset($_GET['page']) && !isset($search) && count($_GET) == 1)
        @else
            @if(isset($search) && $search == true || count($_GET) > 0 && !isset($_GET['results']))
                <a href="{{ url('tienda') }}" class="btn btm-sm btn-main" type="button">Volver al listado</a>
            @endif
        @endif
    @endif
</div>