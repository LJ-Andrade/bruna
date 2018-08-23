<?php

namespace App\Http\Controllers\Store;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Cart;
use App\Customer;
use App\Traits\CartTrait;

class OrdersController extends Controller
{
    use CartTrait;

    /*
    |--------------------------------------------------------------------------
    | CREATE
    |--------------------------------------------------------------------------
    */

    public function index(Request $request)
    {          
        if($request->id != null)
        {
            $items = Cart::searchId($request->id)->orderBy('id', 'ASC')->paginate(15); 
        } 
        else if($request->status != null)
        {
            if($request->status == 'All')
            {
                $items = Cart::orderBy('created_at', 'DESC')->where('status', '!=','Active')->get();
            } else {
                $items = Cart::searchStatus($request->status)->orderBy('created_at', 'DESC')->get();
            }
        } else {
            $items = Cart::orderBy('created_at', 'DESC')->where('status', '=','Process')->get();
        }

        return view('vadmin.orders.index')->with('items', $items);    
    }

    public function show($id)
    {
        
        $cart = Cart::find($id);
        $customer = Customer::find($cart->customer_id);
        
        $order = $this->calcCartData($cart);
        return view('vadmin.orders.show')
            ->with('order', $order)
            ->with('customer', $customer);
    }

    // public function show($id)
    // {
    //     dd($id);
    //     $order = Cart::find($id);
    //     $customer = Customer::find($order->customer_id);
        
    //     $prices = $this->calcCartTotalPrice($order);
        
    //     $subtotal = $prices['subtotal'];
    //     $total = $prices['total'];

    //     return view('vadmin.orders.show')
    //         ->with('order', $order)
    //         ->with('subtotal', $subtotal)
    //         ->with('total', $total)
    //         ->with('customer', $customer);
    // }
    
    // public function calcCartTotalPrice($cart)
    // {

    //     $articlesPrice = 0;
    //     $shippingCost = 0;
    //     $paymentCost = 0;
    //     $total = 0;
        
    //     // Sum all article prices
    //     foreach($cart->details as $detail)
    //     {
    //         // Check discounts
    //         if($detail->discount != '0'){
    //             $articlesPrice += calcValuePercentNeg($detail->price, $detail->discount);
    //         } else {
    //             $articlesPrice += $detail->price;
    //         }
    //     }

    //     $subtotal = $articlesPrice;
        
    //     // Check for shipping cost
    //     if($cart->shipping_id != null){
    //         $shippingCost = $cart->shipping->price;
    //     }

    //     // Check for payment cost
    //     if($cart->payment_method_id != null){
    //         $paymentCost  = calcValuePercentNeg($subtotal, $cart->payment->percent);
    //     }
        
    //     $total = $subtotal + $shippingCost + $paymentCost;
              
    //     return array("subtotal" => $subtotal, "total" => $total);
    // }

    /*
    |--------------------------------------------------------------------------
    | UPDATE
    |--------------------------------------------------------------------------
    */

    public function edit($id)
    {
        $order = Cart::find($id);
        return view('vadmin.orders.edit')->with('order', $order);
    }

    public function update(Request $request, $id)
    {
        $category = Category::find($id);

        $this->validate($request,[
            'name' => 'required|min:4|max:250|unique:categories,name,'.$category->id,
        ],[
            'name.required' => 'Debe ingresar un nombre a la categoría',
            'name.unique'   => 'La categoría ya existe'
        ]);
        
        $category->fill($request->all());
        $category->save();

        return redirect()->route('categories.index')->with('message','Categoría editada');
    } 

}