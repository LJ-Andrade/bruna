<?php 

namespace App\Http\ViewComposers;
use Illuminate\Contracts\View\View;
use App\CatalogTag;
use App\CatalogAtribute1;
use App\CatalogCategory;

class StoreCatalogComposer
{
	public function compose(View $view)
	{   
		$tags = CatalogTag::orderBy('name', 'desc')->get();
		$atributes1 = CatalogAtribute1::orderBy('name', 'asc')->get();
		$categories = CatalogCategory::orderBy('name', 'asc')->get();
		$view->with('tags', $tags)->with('atributes1', $atributes1)->with('categories', $categories);
	}
}