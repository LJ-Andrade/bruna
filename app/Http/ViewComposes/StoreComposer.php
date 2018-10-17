<?php 

namespace App\Http\ViewComposers;

use Illuminate\Contracts\View\View;
// use App\Cart;
use App\Traits\CartTrait;

class StoreComposer
{
    use CartTrait;

	public function compose(View $view)
	{   
        $favs = $this->getCustomerFavs();
        $activeCart = $this->activeCart();
        $view
            ->with('activeCart', $activeCart)
            ->with('favs', $favs);
	}
}