<!-- Sidebar Trigger Mobile-->
<div class="container sidebar-trigger">
	<div class="row">
		{!! Form::open(['route' => 'store', 'method' => 'GET', 'class' => 'input-group form-group']) !!}
			<span class="input-group-btn">
				<button type="submit"><i class="icon-search"></i></button>
			</span>
			<input class="form-control" name="buscar" type="search" placeholder="Buscar...">
		{!! Form::close() !!}
		<button class="btn main-btn" onclick="openSidebar()"><i class="fas fa-sliders-h"></i></button>
	</div>
</div>

<!-- Sidebar -->
<aside id="Sidebar" class="sidebar">
	<section class="sidebar-widget">
		{!! Form::open(['route' => 'store', 'method' => 'GET', 'class' => 'input-group form-group search-input']) !!}
			<span class="input-group-btn">
				<button type="submit"><i class="icon-search"></i></button>
			</span>
			<input class="form-control" name="buscar" type="search" placeholder="Buscar...">
		{!! Form::close() !!}
	</section>
	<section class="sidebar-widget">
		<h4>Talles</h4>
		<div class="horizontal-list">
			<ul>
				@foreach($atributes1 as $size)
					<a href="{{ route('store.search.size', $size->name) }}">
						<li class="sq-badge font-1">{{ $size->name }}</li>
					</a>
				@endforeach
			</ul>
		</div>
	</section>
	<section class="sidebar-widget">
		<h4>Etiquetas</h4>
		<div class="horizontal-list">
			<ul>
				@foreach($tags as $tag)
					<a href="{{ route('store.search.tag', $tag->name) }}">
						<li class="sq-badge font-1"><span>{{ $tag->name }}</span></li>
					</a>
				@endforeach
			</ul>
		</div>
	</section>
	<section class="sidebar-widget">
		<h4>Categorias</h4>
		<ul>
			@foreach($categories as $category)
				<li><a href="{{ route('store', 'categoria=').$category->id }}">{{ $category->name }} ({{ $category->articles->count() }})</a><span></span></li>
			@endforeach
		</ul>
	</section>
</aside>
