<?php

namespace App\Providers;

use Illuminate\Routing\UrlGenerator;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema; 
use View;
use App\Contact;
use App\Cart;
use Carbon\Carbon;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
        Carbon::setLocale('es');
        $newMessages = Contact::where('status', '=', '0')->get();
        $newOrders = Cart::where('status', '=', 'Process')->count();
        $activeOrders = Cart::where('status', '=', 'Active')->count();
        View::share(['newMessages' => $newMessages, 'newOrders' => $newOrders, 'activeOrders' => $activeOrders]);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
    }
}
