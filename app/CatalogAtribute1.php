<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CatalogAtribute1 extends Model
{
    protected $table = 'catalog_atribute1';

    protected $fillable = ['name'];
    
    public function scopeSearchname($query, $name)
    {
        return $query->where('name','LIKE', "%$name%");
    }
}
