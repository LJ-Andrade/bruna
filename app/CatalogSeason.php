<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CatalogSeason extends Model
{
    protected $table = "catalog_seasons";

    protected $fillable = ['name'];

    public function articles()
    {
        return $this->hasMany('App\CatalogSeason');
    }

    public function scopeSearchname($query, $name)
    {
        return $query->where('name','LIKE', "%$name%");
    }
}
