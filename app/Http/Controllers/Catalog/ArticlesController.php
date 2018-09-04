<?php

namespace App\Http\Controllers\Catalog;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\CatalogCategory;
use App\CatalogTag;
use App\CatalogArticle;
use App\CatalogFav;
use App\CatalogImage;
use App\CatalogAtribute1;
use File;
use PDF;
use Excel;

class ArticlesController extends Controller
{

    /*
    |--------------------------------------------------------------------------
    | VIEW
    |--------------------------------------------------------------------------
    */

    public function index(Request $request)
    {
        $code     = $request->get('code');
        $name     = $request->get('name');
        $category = $request->get('category');
        $order    = $request->get('orden');
        $p = 20;
        $rowName = 'stock';
        if(!isset($order))
        {
            $rowName = 'id';
            $order = 'ASC';
        }

        if(isset($code))
        {
            $articles = CatalogArticle::where('code', 'LIKE', "%".$code."%")->paginate($p);
        }
        elseif(isset($name) || isset($category))
        {
            $articles = CatalogArticle::search($name, $category)->orderBy($rowName, $order)->paginate($p);
        } 
        else 
        {
            $articles = CatalogArticle::orderBy($rowName, $order)->paginate($p);
        }

        //$cats = CatalogCategory::orderBy('id','ASC')->get();
        $categories = CatalogCategory::orderBy('id', 'ASC')->pluck('name','id');

        return view('vadmin.catalog.index')
            ->with('articles', $articles)
            ->with('categories', $categories);
    }

    public function show($id)
    {
        $article = CatalogArticle::find($id);
        if($article == null){
            return back();
        } else {
            return view('vadmin.catalog.show')->with('article', $article);
        }
    }

    /*
    |--------------------------------------------------------------------------
    | EXPORT
    |--------------------------------------------------------------------------
    */

    public function exportPdf($params)
    {   
        $items = $this->getData($params);

        $pdf = PDF::loadView('vadmin.catalog.invoice', array('items' => $items));
        $pdf->setPaper('A4', 'landscape');
        return $pdf->download('listado-catalogo.pdf');
    }

    public function exportExcel($params)
    {
        $items = $this->getData($params);
        
		Excel::create('Excel', function($excel) use($items){
            $excel->sheet('Listado', function($sheet) use($items) {   
                $sheet->loadView('vadmin.catalog.invoice-excel', 
                compact('items'));
            });
        })->export('xls');       
    }

    public function getData($params)
    {
        if($params == 'all'){
            $items = CatalogArticle::orderBy('id', 'DESCC')->paginate(15);    
            return $items;
        }

        parse_str($params , $query);

        $code     = $query['code'];
        $name     = $query['name'];
        $category = $query['category'];

        if(isset($code) || isset($name) || isset($category))
        {
            $items = CatalogArticle::search($code, $name, $category)->orderBy('id', 'ASC')->paginate(15); 
        } else {
            $items = CatalogArticle::orderBy('id', 'DESCC')->paginate(15);    
        }

        return $items;
    }


    /*
    |--------------------------------------------------------------------------
    | CREATE
    |--------------------------------------------------------------------------
    */

    public function create(Request $request)
    {
        $categories = CatalogCategory::orderBy('name', 'ASC')->pluck('name', 'id');
        $atribute1  = CatalogAtribute1::orderBy('name', 'ASC')->pluck('name', 'id');
        $tags       = CatalogTag::orderBy('name', 'ASC')->pluck('name', 'id');
        return view('vadmin.catalog.create')
            ->with('categories', $categories)
            ->with('atribute1', $atribute1)
            ->with('tags', $tags);
    }


    public function checkSlug($slug)
    {
        $checkSlug = CatalogArticle::where('slug', $slug)->first();
        if($checkSlug != null) 
        {
            $checkSlug = $checkSlug->slug.'-variante-'. rand(1000,10000). date('d').date('s');
            return $checkSlug;
        } 
        else
        {
            return $slug;
        }
    }

    public function store(Request $request)
    {
        $this->validate($request,[
            'name'                 => 'required|min:4|max:250',
            'code'                 => 'unique:catalog_articles,code',
            'category_id'          => 'required',
            'image'                => 'image|mimes:jpeg,png,jpg,gif',
        ],[
            'name.required'        => 'Debe ingresar un nombre',
            'name.min'             => 'El título debe tener al menos 4 caracteress',
            'name.max'             => 'El título debe tener como máximo 250 caracteress',
            'code.unique'          => 'El código está utilizado por otro producto',
            'category_id.required' => 'Debe ingresar una categoría',
            'slug.required'        => 'Se requiere un slug',
            'slug.min'             => 'El slug debe tener 4 caracteres como mínimo',
            'slug.max'             => 'El slug debe tener 255 caracteres como máximo',
            'slug.max'             => 'El slug debe tener guiones bajos en vez de espacios',
            'image'                => 'El archivo adjuntado no es soportado',
        ]);
        
        if($request->discount == null){
            $request->discount = '0';
        }

        if($request->slug) {
            $checkSlug = $this->checkSlug($request->slug);
        }
        $article = new CatalogArticle($request->all());
        $article->slug = $checkSlug;
        $article->user_id = \Auth::guard('user')->user()->id;
        
        $images = $request->file('images');
        $thumbnail = $request->file('thumbnail');
        $imgPath = public_path("webimages/catalogo/"); 
        $thumbPath = public_path("webimages/catalogo/thumbs/");

        // Creates directory if no exist
        if (!file_exists($imgPath)) { $oldmask = umask(0); mkdir($imgPath, 0777); umask($oldmask); }
        if (!file_exists($thumbPath)) { $oldmask = umask(0); mkdir($thumbPath, 0777); umask($oldmask); }

        $extension = '.jpg';
        
        $thumbWidth = 240;
        $thumbHeight = 360;
        $imgWidth = 500;
        $imgHeight = 700;

        if($article->save()) {
            $article->atribute1()->sync($request->atribute1);
            $article->tags()->sync($request->tags);
                if($images){
                try {    
                    $number = '0';
                    foreach($images as $phisic_image){
                        $filename = $article->id.'-'.$number;
                        $img = \Image::make($phisic_image);
                        $img->encode('jpg', 80)->fit($imgWidth, $imgHeight)->save($imgPath.$filename.$extension);
                        
                        $image = new CatalogImage();
                            if($number == '0'){ $image->featured = 1; }
                        $image->name = $filename.$extension;
                        $image->article()->associate($article);
                        
                        $thumb = \Image::make($phisic_image);
                        $thumb->encode('jpg', 80)->fit($thumbWidth, $thumbHeight)->save($thumbPath.$filename.$extension);
                        //$article->thumb = $article->id.'-thumb'.$extension;
                        $image->thumb = $filename.$extension;
                        $image->save();
                        $number++;
                    }
                } catch(\Exception $e) {
                    $article->delete();
                    return redirect()->route('catalogo.index')->with('message','Error al crear el artículo: '. $e);
                }
            }
        }
    
    
        return redirect()->route('catalogo.index')->with('message','Artículo agregado al catálogo');
    }

    /*
    |--------------------------------------------------------------------------
    | UPDATE
    |--------------------------------------------------------------------------
    */

    public function edit($id)
    {   
        $tags       = CatalogTag::orderBy('name', 'DESC')->pluck('name', 'id');
        $atribute1  = CatalogAtribute1::orderBy('name', 'DESC')->pluck('name', 'id');
        $article    = CatalogArticle::find($id);
        $categories = CatalogCategory::orderBy('name', 'DESC')->pluck('name', 'id');
        $article->each(function($article){
                $article->images;
        });

        return view('vadmin.catalog.edit')
            ->with('categories', $categories)
            ->with('article', $article)
            ->with('tags', $tags)
            ->with('atribute1', $atribute1);
    }

    public function update(Request $request, $id)
    {
        $article   = CatalogArticle::find($id);

        $this->validate($request,[
            'name'                 => 'required|min:4|max:250',
            'code'                 => 'unique:catalog_articles,code,'.$article->id,
            'category_id'          => 'required',
            'slug'                 => 'required|alpha_dash|min:4|max:255',
            'image'                => 'image|mimes:jpeg,png,jpg,gif',

        ],[
            'name.required'        => 'Debe ingresar un nombre',
            'name.min'             => 'El título debe tener al menos 4 caracteress',
            'name.max'             => 'El título debe tener como máximo 250 caracteress',
            'code.unique'          => 'El código está utilizado por otro producto',
            'category_id.required' => 'Debe ingresar una categoría',
            'slug.required'        => 'Se requiere un slug',
            'slug.min'             => 'El slug debe tener 4 caracteres como mínimo',
            'slug.max'             => 'El slug debe tener 255 caracteres como máximo',
            'slug.max'             => 'El slug debe tener guiones bajos en vez de espacios',
            'image'                => 'El archivo adjunto no es soportado',
        ]);

        $article->fill($request->all());
        
        if($request->slug) {
            $checkSlug = $this->checkSlug($request->slug);
        }
            
        $article->slug = $checkSlug;

        $images = $request->file('images');
        $thumbnail = $request->file('thumbnail');
        $imgPath = public_path("webimages/catalogo/"); 
        $thumbPath = public_path("webimages/catalogo/thumbs/");
        $extension = '.jpg';
        // Creates directory if no exist
        if (!file_exists($imgPath)) { $oldmask = umask(0); mkdir($imgPath, 0777); umask($oldmask); }
        if (!file_exists($thumbPath)) { $oldmask = umask(0); mkdir($thumbPath, 0777); umask($oldmask); }

        $thumbWidth = 240;
        $thumbHeight = 360;
        $imgWidth = 500;
        $imgHeight = 700;
               
        if($article->save()){
            $article->atribute1()->sync($request->atribute1);
            $article->tags()->sync($request->tags);
            
            if(!$article->images->isEmpty()){
                $number = $article->images->last()->name;
                $number = explode('-',$number);
                $number = explode('.',$number[1]);
                $number = ($number[0]+'1');
            } else {
                $number = '0';
            }
            
            if($images){
                try {    
                    foreach($images as $phisic_image){
                        $filename = $article->id.'-'.$number;
                        $img = \Image::make($phisic_image);
                        $img->encode('jpg', 80)->fit($imgWidth, $imgHeight)->save($imgPath.$filename.$extension);
                        
                        $image = new CatalogImage();
                            if($number == '0'){ $image->featured = 1; }
                        $image->name = $filename.$extension;
                        $image->article()->associate($article);
                        
                        $thumb = \Image::make($phisic_image);
                        $thumb->encode('jpg', 80)->fit($thumbWidth, $thumbHeight)->save($thumbPath.$filename.$extension);
                        //$article->thumb = $article->id.'-thumb'.$extension;
                        $image->thumb = $filename.$extension;
                        $image->save();
                        $number++;
                    }
                } catch(\Exception $e) {
                    $article->delete();
                    return redirect()->route('catalogo.index')->with('message','Error al crear el item: '. $e);
                }
            }
        }
        return redirect()->route('catalogo.index')->with('message', 'Se ha editado el item con éxito');
    }

    public function updateStatus(Request $request, $id)
    {
        $article = CatalogArticle::find($id);
        $article->status = $request->status;
        $article->save();

        return response()->json([
            "lastStatus" => $article->status,
        ]);
    }

    public function updateField(Request $request)
    {
        $article = CatalogArticle::find($request->id);
        $article->{$request->field} = $request->value;
        
        try {
            $article->save();
            return response()->json([
                "response" => "success",
                "action"   => $request->action
            ]);
        } catch (\Exception $e) {
            return response()->json([
                "response" => "error",
                "message"  => $e->getMessage()
            ]);
        }
    }

    public function updateStock(Request $request)
    {   
        if(!ctype_digit($request->value)){
            return response()->json([
                "response" => "error",
                "message"   => "El valor ingresado no es un número entero"
            ]);
        }

        $item          = CatalogArticle::find($request->id);
        $item->stock   = $request->value;
        
        try {
            $item->save();
            return response()->json([
                "response" => "success",
                "action"   => $request->action
            ]);

        } catch (\Exception $e) {
            return response()->json([
                "response" => "error",
                "message"  => $e
            ]);
        }
    }

    public function updatePrice(Request $request)
    {   
        $item          = CatalogArticle::find($request->id);
        $item->price   = $request->value;
        $item->save();

        return response()->json([
            "response" => 'success',
            "action"   => $request->action
        ]);
    }

    public function updateDiscount(Request $request, $id)
    {   
        $item          = CatalogArticle::find($request->id);
        $item->discount   = $request->value;
        $item->save();

        return response()->json([
            "response" => '1',
            "newdiscount" => $item->discount,
            "action"   => $request->action
        ]);
    }



    /*
    |--------------------------------------------------------------------------
    | DESTROY
    |--------------------------------------------------------------------------
    */

    public function destroy(Request $request)
    {   
        $ids = json_decode('['.str_replace("'",'"',$request->id).']', true);
        $path = '/webimages/catalogo/';
        $thumb = '/webimages/catalogo/thumbs/';

        try {
            foreach ($ids as $id) {
                // Check existence of related favs and delete
                $relatedFavs = CatalogFav::where('article_id', $id)->get();
                if(!$relatedFavs->isEmpty()){
                    foreach($relatedFavs as $relatedFav){
                        $relatedFav->delete();
                    }
                }
                $record = CatalogArticle::find($id);
                $record->tags()->detach();
                $record->atribute1()->detach();
                
                $images = $record->images;
                foreach ($images as $image) {
                    File::Delete(public_path($path.$image->name));
                    File::Delete(public_path($thumb.$image->name));
                    $image->delete();
                }
                $delete = $record->delete();
            }
            return response()->json([
                'success'   => true,
            ]); 
        }  catch (\Exception $e) {
            return response()->json([
                'success'   => false,
                'error'    => 'Error: '.$e
            ]);    
        }
    }
}

