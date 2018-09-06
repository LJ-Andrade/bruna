<?php

namespace App\Http\Controllers\Store;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\CartItem;
use App\Cart;
use App\CatalogArticle;
use App\Traits\CartTrait;

class CartItemController extends Controller
{
    use CartTrait;

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
        
        // Stock management 
        if($request->quantity > $article->stock){
            return redirect()->back()->with('message', 'Seleccionó una cantidad mayor al stock disponible');    
        } else {
            // Discount Stock
            // * Note the minus (-) sign in $request->quantity
            $newStock = $this->updateCartItemStock($article->id, -$request->quantity);
        }

        $cartItem->article_name = $article->name;
        $cartItem->color = $article->color;
        $cartItem->textile = $article->textile;


        try{
            $cartItem->save();
        }  catch (\Exception $e)  {
            dd($e->getMessage());
        }


        return redirect()->back()->with('message', 'Producto agegado al carro de compras');
    }

    public function destroy(Request $request)
    {
        $item = CartItem::where('id', $request->itemid)->first();
        
        try{
            // Return Stock
            $this->updateCartItemStock($item->article->id, $request->quantity);
            $item->delete();
            } catch (\Exception $e) {
                return redirect()->back()->with('message', 'Error al eliminar');
            }
        // If last article is deleted also delete activecart
        $cart = Cart::findOrFail($item->cart->id);
        if($cart->Items->count() < 1)
        {
            $cart->delete();
            return redirect('tienda')->with('message', 'Carro de compras eliminado');
        } else {
            return redirect()->back()->with('message', 'Artículo eliminado');
        }
    }
}
