<?php

namespace App\Http\Controllers\Store;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Auth;
use App\CatalogCategory;
use App\CatalogArticle;
use App\CatalogImage;
use App\CatalogAtribute1;
use App\CatalogTag;
use App\CatalogFav;
use App\Customer;
use App\Shipping;
use App\Payment;
use App\GeoProv;
use App\Cart;
use App\CartItem;
use App\CatalogCoupon;
use Carbon\Carbon;
use PDF;
use App\Traits\CartTrait;
use Illuminate\Support\Facades\View;
use Mail;
use App\Mail\SendMail;


class StoreController extends Controller
{

    use CartTrait;
    
    public function __construct()
    {
        // $this->middleware('auth:customer');
        //$customer = auth()->guard('customer')->user();     
    }
    
    public function index(Request $request)
    {   
        $paginate = 12;
        
        if(isset($request->buscar))
        {
            $articles = CatalogArticle::search($request->buscar)->active()->paginate($paginate);
        } 
        else if(isset($request->categoria))
        {
            $articles = CatalogArticle::orderBy('id', 'DESC')->active()->where('category_id', $request->categoria)->paginate($paginate);
        }
        else if(isset($request->etiqueta))
        {
            $articles = CatalogArticle::orderBy('id', 'DESC')->active()->where('category_id', $request->etiqueta)->paginate($paginate);
        }
        else 
        {
            $articles = CatalogArticle::orderBy('id', 'DESCC')->active()->paginate($paginate);
        }
        
        // Get only categories with active products
        //$categories = CatalogCategory::with(['articles' => function($query) { $query->where('status','=', '1'); } ])->get();
//
        //$tags = CatalogTag::orderBy('id', 'ASC')->select('name', 'id')->get();
        //$atributes1 = CatalogAtribute1::orderBy('id', 'ASC')->select('name', 'id')->get();
        
        $favs = $this->getCustomerFavs();
        return view('store.index')
            ->with('articles', $articles)
            ->with('favs', $favs);
    }

    public function searchSize($name)
	{
        $size = CatalogAtribute1::searchName($name)->first();
		$articles = $size->articles()->paginate(15);
        $articles->each(function($articles){
            $articles->category;
            $articles->images;
        });  
        
        $favs = $this->getCustomerFavs();
        $search = true;
        return view('store.index')
            ->with('search', $search)
            ->with('articles', $articles)
            ->with('favs', $favs);
    }
    
    public function searchTag($name)
	{
        $tag = CatalogTag::searchName($name)->first();
		$articles = $tag->articles()->paginate(15);
        $articles->each(function($articles){
            $articles->category;
            $articles->images;
        });  

        $favs = $this->getCustomerFavs();
        $search = true;
        return view('store.index')
            ->with('search', $search)
            ->with('articles', $articles)
            ->with('favs', $favs);
    }
    
    public function show(Request $request)
    {
        $article = CatalogArticle::findOrFail($request->id);
        $user = auth()->guard('customer')->user();

        if($user)
        {
            $isFav   = CatalogFav::where('customer_id', '=', $user->id)->where('article_id', '=', $article->id)->get();
            if(!$isFav->isEmpty()){
                $isFav = true;
            } else {
                $isFav = false;
            }
        } 
        else 
        {
            $isFav = false;
        }
        return view('store.show')
            ->with('article', $article)
            ->with('isFav', $isFav)
            ->with('user', $user);
    }

    /*
    |--------------------------------------------------------------------------
    | SHOP and CHECKOUT
    |--------------------------------------------------------------------------
    */

    public function checkout(Request $request)
    {
        $activeCart = Cart::where('customer_id', auth()->guard('customer')->user()->id)->where('status', 'active')->get();
        
        if(count($activeCart) == 0)
        {
            return redirect()->route('store')->with('message', 'La página solicitada no existe o ha expirado');
        }

        $geoprovs = GeoProv::pluck('name','id');
        $shippings = Shipping::orderBy('name', 'ASC')->get();
        $payment_methods = Payment::orderBy('name', 'ASC')->get();
        
        return view('store.checkout')
            ->with('geoprovs', $geoprovs)
            ->with('shippings', $shippings)
            ->with('payment_methods', $payment_methods)
            ->with('geoprovs', $geoprovs);
    }

    public function validateAndSetCoupon(Request $request)
    {
        $coupon = CatalogCoupon::where('code', $request->code)->first();
        // Not existing coupon
        if($coupon == null)
        {
            return response()->json(['response' => null, 'message' => "El cupón no existe"]);
        }
        // Expired Coupon
        $coupon_expire = $coupon->expire_date;
        $coupon_expire = Carbon::parse($coupon_expire, 'America/Araguaina');
        $actual_date = Carbon::now()->format('Y-m-d');
        $actual_date = Carbon::parse($actual_date, 'America/Araguaina');
        if($coupon_expire->lt($actual_date))
        {
            return response()->json(['response' => null, 'message' => "El cupón ingresado ha expirado :("]);
        } 
        
        // Group User Not Included in promo
        if($coupon->reseller == '0')
        {
            if(auth()->guard('customer')->user()->group != '2')
            {
                return response()->json(['response' => null, 'message' => "El cupón ingresado es válido solo para clientes minorístas"]);
            }
        }

        
        $cart = Cart::find($request->cartid);
        // Cart Not exist
        if($cart == null)
        {
            return response()->json(['response' => null, 'message' => "Error. El carro de compras no existe"]);
        }
        
        try {
            $cart->order_discount = $coupon->percent;
            $cart->save();
            return response()->json(['response' => true, 'message' => $coupon->percent]);
        } catch (\Exception $e) {
            return response()->json(['response' => false, 'message' => $e->getMessage()]);
        }

    }

    
    public function processCheckout(Request $request)
    {
        // Check if user has required data completed
        $userData = $this->checkCustomerRequiredData(auth()->guard('customer')->user()->id);
        if(!$userData)
            return back()->with('error', 'missing-data');
        $cart = Cart::findOrFail($request->cart_id);  
        // Check if user choose payment method
        if($cart->payment_method_id == null)
            return back()->with('error', 'missing-payment');
        // Check if user choose payment method and shipping
        if($cart->shipping_id == null)
            return back()->with('error', 'missing-shipping');
        
        // Set fixed prices on checkout confirmation
        foreach($cart->items as $item){
            $order = CartItem::find($item->id);
            if(auth()->guard('customer')->user()->group == '3'){
                $order->final_price = calcValuePercentNeg($item->article->reseller_price, $item->article->reseller_discount);
            } else {
                $order->final_price = calcValuePercentNeg($item->article->price, $item->article->discount);
            }   
            $order->save();    
        }

        $cart->status = 'Process';
        
        try {
            $cart->save();
            // Notify Bussiness
            Mail::to(APP_EMAIL_1)->send(new SendMail('Compra Recibida', 'Checkout', $cart));
            // Notify Customer
            $customerEmail = auth()->guard('customer')->user()->email;
            //$customerEmail = 'javzero1@gmail.com';
            Mail::to($customerEmail)->send(new SendMail('Bruna Indumentaria - Compra recibida !', 'CustomerCheckout', ''));
        } catch (\Exception $e) {
            //dd($e->getMessage());
            // return back()->with('error', 'Ha ocurrido un error '. $e);
        }    
    
        // return back()->with('message','Su compra se ha registrado. Muchas gracias !.');
        return view('store.checkout-success')
            ->with('cart', $cart);
    }
    
    /*
    |--------------------------------------------------------------------------
    | MERCADO LIBRE
    |--------------------------------------------------------------------------
    */

    public function mpConnect(Request $request)
    {
        $cartid = $request->cartId;
        $cart = Cart::where('id', $cartid)->first();
        $cartTotal = $request->cartTotal;
        // Al pedo el quilombo mandar solo el detalle general de la compra
        $preferenceData = [
            'items' => [
                [
                    'id' => 'ORD#'.$cart->id,
                    'category_id' => '-',
                    'title' => 'Compra Vadmin',
                    'description' => '-',
                    'picture_url' => '-',
                    'quantity' => 1,
                    'currency_id' => 'ARS',
                    'unit_price' => floatval($cartTotal)
                    ]
                ],
        ];
        //dd($preferenceData);
        try{
            //return dd($preference);
            //return dd($preference['response']['init_point']);
            $preference = MP::create_preference($preferenceData);
            $initPoint = $preference['response']['init_point'];
            return response()->json(['response' => true, 'result' => $preference]);
        } catch (\Exception $e){
            return response()->json(['response' => false, 'result' => $e->getMessage()]);
        }
    }
    
    // Check if customer has required data completed
    public function checkCustomerRequiredData($customerId)
    {
        // Check if customer data has null or empty values
        $customer = Customer::where('id', $customerId)->first();
        $customer = $customer->toArray();
        
        unset($customer['id'], $customer['created_at'], $customer['updated_at'], $customer['avatar'], $customer['phone2']);
        
        // If customer is not reseller dont ask for CUIT
        if($customer['group'] != '3')
            unset($customer['cuit']);

        $emptyValues = array();
        foreach ($customer as $key => $val) {
            if($val == '' or $val === '0' or $val === null){
                array_push($emptyValues, $key);
            }
        }
        if(!$emptyValues){
            return true;
        } else {
            return false;
        }    
    }

    /*
    |--------------------------------------------------------------------------
    | INVOICE
    |--------------------------------------------------------------------------
    */

    // DOWNLOAD INVOICE PDF
    public function downloadInvoice($id, $action)
    {
        
        // Return Options
        // return $pdf->dowload($filename.'.pdf');
        // return $pdf->stream($filename.'.pdf');
        $order = Cart::find($id);
        if($order != null && $order->customer->id == auth()->guard('customer')->user()->id){
            $cart = $this->calcCartData($order);
            $pdf = PDF::loadView('store.checkout-invoice', compact('order', 'cart'))->setPaper('a4', 'portrait');
            $filename = 'Comprobante-Pedido-N-'.$order->id;
            if($action == 'stream')
            {
                return $pdf->stream($filename.'.pdf');
            } else {
                return $pdf->download($filename.'.pdf');
            }
            die();

        } else {
            return redirect()->route('store')->with('message','Estás intentando una acción ilegal...');
        }
    }
    
    /*
    |--------------------------------------------------------------------------
    | CUSTOMER
    |--------------------------------------------------------------------------
    */

    public function customerAccount(Request $request)
    {
        $favs = $this->getCustomerFavs();
        $geoprovs = GeoProv::pluck('name','id');

        return view('store.customer-account')
            ->with('favs', $favs)
            ->with('geoprovs',$geoprovs);
    }

    public function customerOrders(Request $request)
    {
        $customer = auth()->guard('customer')->user();
        $carts = Cart::where('customer_id', auth()->guard('customer')->user()->id)->where('status', '!=', 'Active')->get();
        return view('store.customer-orders')
            ->with('customer', $customer)
            ->with('carts', $carts);
    }

    public function customerCartItem(Request $request)
    {
        $cart = $this->calcCartData(Cart::where('id', $request->id)->first());
        if($cart == null)
            return back();
        return view('store.customer-order')
            ->with('cart', $cart);
    }


    public function updatePassword(Request $request)
    {
        return view('store.customer-updatepassword');
    }


    /*
    |--------------------------------------------------------------------------
    | WISHLIST
    |--------------------------------------------------------------------------
    */

    public function customerWishlist(Request $request)
    {
        if(auth()->guard('customer')->check()){
            $favs = $this->getCustomerFavs();
            $customer = auth()->guard('customer')->user();
        } else {
            $favs = null;
            $customer = null;
        }
        
        return view('store.customer-wishlist')
            ->with('customer', $customer)
            ->with('favs', $favs);
    }
    
    public function getCustomerFavs()
    {
        if(auth()->guard('customer')->check()){
            $favs = CatalogFav::where('customer_id', '=', auth()->guard('customer')->user()->id)->get();
            
            $articleFavs = CatalogFav::where('customer_id', '=', auth()->guard('customer')->user()->id)->pluck('article_id');
            $articleFavs = $articleFavs->toArray();
        
            // Delete fav if product was removed and fav wasn't
            foreach($favs as $item){
                if(is_null($item->article)){
                    $item->delete();
                }
            }

        } else {
            $favs = null;
            $articleFavs = null;
        }
        
        return array("articleFavs" => $articleFavs, "favs" => $favs);
    }

    public function addArticleToFavs(Request $request)
    {        
        $customer_id = auth()->guard('customer')->user()->id;
        try{
            $favs= CatalogFav::where('customer_id', '=', $customer_id)->where('article_id', '=', $request->article_id)->pluck('id');
            if(!$favs->isEmpty()) {
                $item = CatalogFav::find($favs[0]);
                $item->delete();
                return response()->json(['response' => true, 'result' => 'removed', 'message' => 'Hecho']); 
            } else { 
                $item = new CatalogFav($request->all());
                $item->customer_id = $customer_id;
                $item->save();
                return response()->json(['response' => true, 'result' => 'added', 'message' => 'Hecho']); 
            }

        } catch (\Exception $e){
            return response()->json(['response' => false, 'message' => $e]); 
        }
    }

    public function removeArticleFromFavs(Request $request)
    {
        try{
            $item = CatalogFav::find($request->fav_id);
            $item->delete();
            return response()->json(['response' => true, 'result' => 'removed', 'doaction' => 'reload']);
        } catch (\Exception $e){
            return response()->json(['response' => false, 'message' => $e]); 
        }
    }

    public function removeAllArticlesFromFavs(Request $request)
    {
        try{
            $items = CatalogFav::where('customer_id', '=', $request->customer_id)->delete();
            return response()->json(['response' => true, 'result' => 'removed', 'message' => 'Hecho']);
        } catch (\Exception $e){
            return response()->json(['response' => false, 'message' => $e]); 
        }
    }

}
