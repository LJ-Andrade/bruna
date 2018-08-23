<?php

namespace App\Http\Controllers\Store;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\CartItem;
use App\Cart;
use App\CatalogArticle;

class CartItemController extends Controller
{
    public function store(Request $request)
    {
        $cartItem = new CartItem();
        $cartItem->cart_id = auth()->guard('customer')->user()->cart->id;
        $cartItem->article_id = $request->article_id;
        $cartItem->quantity = $request->quantity;
        $cartItem->size = $request->size;
        
        $article = CatalogArticle::where('id', $request->article_id)->first();
        $cartItem->article_name = $article->name;
        $cartItem->color = $article->color;
        $cartItem->textile = $article->textile;
        
        $cartItem->save();

        return response()->json(['response' => true, 'result' => 'done', 'message' => 'done']); 
    }

    public function destroy(Request $request)
    {
        $item = CartItem::findOrFail($request->itemid);
        
        try{
            $item->delete();
            } catch (\Exception $e) {
                return response()->json([
                    'response'   => false,
                    'error'    => 'Error: '.$e
                    ]);
            }
            
        // If last article is deleted also delete activecart
        $cart = Cart::findOrFail($item->cart->id);
        if($cart->Items->count() < 1)
        {
            $cart->delete();
            return response()->json([
                'response'   => true,
                'doaction'   => 'back'
            ]);  
        } else {
            return response()->json([
                'response'   => true,
                'doaction'   => 'reload'
            ]);  
        }
    }



}
