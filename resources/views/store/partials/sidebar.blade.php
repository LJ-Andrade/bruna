<!-- Sidebar          -->

<aside class="sidebar">
	{{-- <section class="widget">
		<div class="shop-sorting">
			<select class="form-control" id="sorting">
			<option>Menor Precio</option>
			<option>Mayor Precio</option>
			<option>A - Z</option>
			<option>Z - A</option>
			</select>
			<span class="text-muted">Mostrando:&nbsp;</span><span>1 - 12 items</span> 
		</div>
	</section> --}}
	<!-- Widget Categories-->
	<section class="widget widget-categories">
		<h3 class="widget-title">Categorias</h3>
		<ul>
			@foreach($categories as $category)
				<li><a href="{{ route('store', 'category=').$category->id }}">{{ $category->name }} ({{ $category->articles->count() }})</a><span></span></li>
			@endforeach
		</ul>
	</section>

	<!-- Widget Size Filter-->
	{{-- {!! Form::open(['id' => 'SearchForm', 'method' => 'GET', 'route' => 'store', 'class' => 'form-inline', 'role' => 'search']) !!} 
	<section class="widget">
		<h3 class="widget-title">Atributos</h3>
		<div class="row inline">
			<ul>
			@foreach($atributes1 as $atribute1)
				<li>
					<label class="custom-control custom-checkbox d-block">
						<input class="custom-control-input" type="checkbox" name="atributes1[]" value="{{ $atribute1->id }}">
						<span class="custom-control-indicator"></span><span>{!! $atribute1->name !!}</span>
					</label>
				</li>
			@endforeach
			</ul>
		</div>
		<br>
		<h3 class="widget-title">Etiquetas</h3>
		<div class="row inline">
			<ul>
			@foreach($tags as $tag)
				<li>
				<label class="custom-control custom-checkbox d-block">
					<input class="custom-control-input" type="checkbox" name="tags[]" value="{{ $tag->id }}">
					<span class="custom-control-indicator"></span>
					<span>{{ $tag->name }}</span>
				</label>
				</li>
			@endforeach
			</ul>
		</div>
		<br>
		<button class="btn btn-outline-primary btn-sm" type="submit">Buscar</button>
	</section>
	{!! Form::close() !!} --}}
</aside>
