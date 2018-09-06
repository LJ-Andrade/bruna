<?php
 
namespace App\Traits;
use App\Cart;
use App\CatalogArticle;

trait CartTrait {
 
    // Calc Cart Fixed Prices
    // ----------------------------------------------------------
    public function calcCartData($cart)
    {
        $cartSubTotal = '0';
        
        if($cart == null || $cart == '')
            return false;

        // Sum Prices (Fixed)
        foreach($cart->items as $item)
        {
            $cartSubTotal += $item->final_price * $item->quantity;
        }
        $cartSubTotal = number_format($cartSubTotal, 2);
        $discount = calcPercent($cartSubTotal, $cart->order_discount);
        // Fixed Costs
        $paymentCost = calcPercent($cartSubTotal, $cart->payment_percent);
	    $cartSubTotal = okNum($cartSubTotal);
        $cartPreTotal = $cartSubTotal + $paymentCost + $cart->shipping_price;        
        
        $cartTotal = $cartPreTotal - $discount;        

        $cart = array
                (
                    "rawdata" => $cart, 
                    "totalItems" => $cart->items->count(),
                    "subTotal" => $cartSubTotal, 
                    "paymentPercent" => $cart->payment_percent, 
                    "paymentCost" => $paymentCost,
                    "shippingCost" => $cart->shipping_price,
                    "discountValue" => $discount,
                    "orderDiscount" => $cart->order_discount,
                    "total" => $cartTotal
                );

        return $cart;

    }

    // Return ActiveCart
    // ----------------------------------------------------------
    public function activeCart()
    {
        $cartTotal = 0;
        $cartSubTotal = 0;
        $payment_percent = 0;
        $shipping_price = 0;
        $activeCart = null;
        
        if(auth()->guard('customer')->check())
        {
            $cart = Cart::where('status', '=', 'Active')->where('customer_id', auth()->guard('customer')->user()->id)->first();
            if($cart != null) 
            {
                $cartSubTotal = $this->calcSubtotal($cart->items, auth()->guard('customer')->user()->group);
                $orderDiscount = calcPercent($cartSubTotal, $cart->order_discount);
                $cartTotal = $cartSubTotal + calcPercent($cartSubTotal, $cart->payment_percent) + $cart->shipping_price - $orderDiscount;
                $activeCart = array
                            (
                                "rawdata" => $cart,
                                "totalItems" => $cart->items->count(),
                                "paymentPercent" => $cart->payment_percent,
                                "paymentId" =>$cart->payment_method_id,
                                "shippingPrice" => $cart->shipping_price,
                                "shippingId" => $cart->shipping_id,
                                "orderDiscount" => $cart->order_discount,
                                "orderDiscountValue" => $orderDiscount,
                                "cartSubTotal" => $cartSubTotal,
                                "cartTotal" => $cartTotal
                            );
            }
        } 
        return $activeCart;
    }

    // Cacl Subtotal
    // ----------------------------------------------------------
    public function calcSubtotal($items, $group)
    {
        $result = '0';
        if($group == '3')
        {
            foreach($items as $item) {
                if($item->article->reseller_discount > '0'){
                    $result += calcValuePercentNeg($item->article->reseller_price, $item->article->reseller_discount) * $item->quantity;
                } else {
                    $result += $item->article->reseller_price * $item->quantity;
                }
            }
        } 
        else 
        {
            foreach($items as $item) {
                if($item->article->discount > '0'){
                    $result += calcValuePercentNeg($item->article->price, $item->article->discount) * $item->quantity;
                } else {
                    $result += $item->article->price * $item->quantity;
                }
            }
        }
        return $result;
    }

    // Stock Update
    // ----------------------------------------------------------
    public function updateCartItemStock($articleId, $quantity)
    {
        try{
            //CatalogArticle::where('id', $articleId)->update(['stock'=>$newStock]);
            $article = CatalogArticle::where('id', $articleId)->first();
            $newStock = intval($article->stock) + intval($quantity);
            $article->stock = $newStock;
            $article->save();
        } 
        catch(\Exception $e)
        {
            return dd("Error");
        }
        return $newStock;
    }


}
