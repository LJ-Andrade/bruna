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
        if(!auth()->guard('customer')->check()){
            return redirect('tienda/login');
        }
        $cartItem = new CartItem();
        $cartItem->cart_id = auth()->guard('customer')->user()->cart->id;
        $cartItem->article_id = $request->articleId;
        $cartItem->quantity = $request->quantity;
        $cartItem->size = $request->size;
        
        $article = CatalogArticle::where('id', $request->articleId)->first();
        $cartItem->article_name = $article->name;
        $cartItem->color = $article->color;
        $cartItem->textile = $article->textile;
        try{
            $cartItem->save();
        } catch (\Exception $e) {
            dd($e);
        }
        return redirect()->back()->with('message', 'Producto agegado al carro de compras');
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
