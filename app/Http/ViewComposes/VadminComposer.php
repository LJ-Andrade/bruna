<?php 

namespace App\Http\ViewComposers;

use Illuminate\Contracts\View\View;
use App\Cart;
use App\Traits\CartTrait;
use App\Contact;

class VadminComposer
{
    use CartTrait;

    public function compose(View $view)
    {
        $newMessages = Contact::where('status', '=', '0')->get();
        $newOrders = Cart::where('status', '=', 'Process')->count();
        $activeOrders = Cart::where('status', '=', 'Active')->count();
        $view->with('newMessages', $newMessages)
             ->with('newOrders', $newOrders)
             ->with('activeOrders', $activeOrders);
    }
}