<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\CartDetail;

class Cart extends Model
{
    protected $table = "carts";

    protected $fillable = ['customer_id', 'status', 'shipping_id', 'shipping_price', 'bus_name', 'payment_method_id', 'payment_percent', 'payment_token', 'notes', 'order_date', 'arrived_date'];

    public function items(){
    	return $this->hasMany('App\CartItem');
    }

    
    public function shipping()
    {
        return $this->belongsTo('App\Shipping');
    }
    
    public function payment()
    {
        return $this->belongsTo('App\Payment', 'payment_method_id');
    }
    
    public function customer()
    {
        return $this->belongsTo('App\Customer');
    }
    
    // Search Scopes 
    public function scopeSearchId($query, $id)
    {
        $query->where('id', '=', $id);
    }

    public function scopeSearchStatus($query, $status)
    {
        $query->where('status', '=', $status);
    }

    public function scopeSearchCustomer($query, $term)
    {
        return $query->whereHas('customer', function($customers) use($term){
            $customers->where('name', 'like', "%" . $term ."%")
            ->orWhere('surname', 'like', "%" . $term ."%")
            ->orWhere('username', 'like', "%" . $term ."%")
            ->orWhere('email', 'like', "%" . $term ."%");
        });
    }

    public function deleteOldCarts()
    {
        dd("Test");
    }

}
