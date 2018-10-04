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
        $cartItem = new CartItem();
        $cartItem->cart_id = auth()->guard('customer')->user()->cart->id;
        $cartItem->article_id = $request->articleId;
        $cartItem->quantity = $request->quantity;
        $cartItem->size = $request->size;

        $article = CatalogArticle::where('id', $request->articleId)->first();

        // Stock management 
        if($request->quantity > $article->stock){
            return response()->json(['response' => 'warning', 'message' => 'Seleccionó una cantidad mayor al stock disponible']); 
        } else {
            // Discount Stock
            // * Note the minus (-) sign in $request->quantity
            $newStock = $this->updateCartItemStock($article->id, -$request->quantity);
        }

        $cartItem->article_name = $article->name;
        $cartItem->color = $article->color;
        $cartItem->size = $article->atribute1->first()->name;
        $cartItem->textile = $article->textile;
        
        try{
            $cartItem->save();
            return response()->json(['response' => 'success', 'message' => 'Producto "'. $article->name .'" agregado']); 
        } catch (\Exception $e) {
            return response()->json(['response' => 'error', 'message' => $e->getMessage()]); 
        }
    }

    // public function store(Request $request)
    // {
    //     if(!auth()->guard('customer')->check()){
    //         return redirect('tienda/login');
    //     }
        
    //     $cartItem = new CartItem();
    //     $cartItem->cart_id = auth()->guard('customer')->user()->cart->id;
    //     $cartItem->article_id = $request->articleId;
    //     $cartItem->quantity = $request->quantity;
    //     $cartItem->size = $request->size;
        
    //     $article = CatalogArticle::where('id', $request->articleId)->first();
        
    //     // Stock management 
    //     if($request->quantity > $article->stock){
    //         return redirect()->back()->with('message', 'Seleccionó una cantidad mayor al stock disponible');    
    //     } else {
    //         // Discount Stock
    //         // * Note the minus (-) sign in $request->quantity
    //         $newStock = $this->updateCartItemStock($article->id, -$request->quantity);
    //     }
        
    //     $cartItem->article_name = $article->name;
    //     $cartItem->color = $article->color;
    //     $cartItem->size = $article->atribute1->first()->name;
    //     $cartItem->textile = $article->textile;

    //     try{
    //         $cartItem->save();
    //     }  catch (\Exception $e)  {
    //         dd($e->getMessage());
    //     }

    //     return redirect()->back()->with('message', 'Artículo "' .$article->name. '" agegado al carro de compras');
    // }

    public function addQtoCartItem(Request $request)
    {
        $cartItem = CartItem::findOrFail($request->itemId);
        
        if($request->quantity == $cartItem->quantity)
        {
            return redirect()->back();
        }
        elseif($request->quantity > ($cartItem->article->stock + $cartItem->quantity))
        {   
            return redirect()->back()->with('message', 'Stock actual excedido');
        }

        try
        {
            $value = $cartItem->article->stock - $request->quantity + $cartItem->quantity;
            $this->replaceCartItemStock($cartItem->article->id, $value);
            
            $cartItem->quantity = $request->quantity;
            $cartItem->save();
    
            return redirect()->back()->with('message', 'Cantidad modificada');
        }
        catch (\Exception $e)  {
            dd($e);
            return redirect()->back()->with('message', $e->getMessage());
        }
    }

    public function destroy(Request $request)
    {
        $item = CartItem::where('id', $request->itemid)->first();
        try{
            // Return Stock
            $this->updateCartItemStock($item->article->id, $request->quantity);
            $item->delete();
        } catch (\Exception $e) {
            dd($e);
            return redirect()->back()->with('message', 'Error al eliminar');
        }
        // If last article is deleted also delete activecart
        $cart = Cart::findOrFail($item->cart->id);
        if($cart->Items->count() < 1)
        {
            $cart->delete();
            if(isset($request->action) && $request->action == 'reload')
            {
                return response()->json(['response' => 'cart-removed', 'message' => 'Carro de compras eliminado']); 
            }
            else 
            {
                return redirect('tienda')->with('message', 'Carro de compras eliminado');
            }
        } else {
            if(isset($request->action) && $request->action == 'reload')
            {
                return response()->json(['response' => 'success', 'message' => 'Artículo eliminado del carro de compras']); 
            }
            else 
            {
                return redirect('tienda')->with('message', 'Carro de compras eliminado');
            }
            return redirect()->back()->with('message', 'Artículo eliminado');
        }
    }
}
