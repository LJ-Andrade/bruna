<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\CartDetail;

class CatalogArticle extends Model
{
    protected $table = "catalog_articles";

    protected $fillable = ['category_id', 'user_id', 'name', 'code',  'description', 'color', 'textile', 'stock', 'stockmin', 'price', 'discount', 'reseller_price', 'reseller_discount', 'thumb', 'status', 'slug'];

    public function category(){
    	return $this->belongsTo('App\CatalogCategory');
    }

    public function fav(){
    	return $this->belongsTo('App\CatalogFav', 'article_id');
    }
    
    public function cartDetails(){
    	return $this->hasMany('App\CartDetail', 'id');
    }

    public function customer(){
    	return $this->belongsTo('App\Customer');
    }

    public function user(){
    	return $this->belongsTo('App\User');
    }

    public function images(){
    	return $this->hasMany('App\CatalogImage', 'article_id');
    }

    public function atribute1(){
    	return $this->belongsToMany('App\CatalogAtribute1');
    }

    public function tags(){
    	return $this->belongsToMany('App\CatalogTag');
    }

    public function featuredImageName(){
        
        $featuredImage = $this->images()->where('featured', true)->first();
        if(!$featuredImage){
            $featuredImage = $this->images()->first();
        }
        
        if($featuredImage){
            return 'webimages/catalogo/'.$featuredImage->name;
        }

        
        return 'webimages/gen/catalog-gen.jpg';

    }

    public function scopeActive($query){
        return $query->where('status', '1');
    }

    public function scopeSearch($query, $code=null, $name=null, $category=null)
    {   
        //dd($code." ".$name." ".$category);
        if($code != null && $name != null & $category != null)
        {
            return $query
            ->where('code', 'like', "%" . $code . "%")
            ->where('name', 'like', "%" . $name . "%")
            ->where('category_id', '=', $category);
            
        } elseif($name != null && $category != null)
        {
            return $query
                ->where('name', 'like', "%" . $name . "%")
                ->where('category_id', '=', $category);
        } elseif($code != null && $category != null)
        {
            return $query
            ->where('code', 'like', "%" . $code . "%")
            ->where('category_id', '=', $category);
        } elseif($name != null && $code != null)
        {
            return $query
            ->where('code', 'like', "%" . $code . "%")
            ->where('name', '=', $name);
        } elseif($code != null)
        {
            return $query->where('code', 'like', "%" . $code . "%");
        } elseif($name != null) 
        {
            return $query->where('name', 'like', "%" . $name . "%");
        } elseif($category != null)
        {
            return $query->where('category_id', '=', $category);
        }
    }

    public function scopeSearchtitle($query, $title)
    {
        return $query->where('name', 'LIKE', "%$title%");
    }

}
