<?php

namespace App\Http\Controllers\CustomerAuth;

use App\Customer;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use App\GeoProv;
use Mail;
use App\Mail\SendMail;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    
    // protected $redirectTo = '/registro-completo';
    protected function redirectTo()
    {
        $customer = auth()->guard('customer')->user();
        if($customer->group == '3' && $customer->status == '0' ){
            return '/registro-en-proceso';
        } else {
            return '/registro-completo';
        }
    }
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'username' => 'required|string|max:20|unique:customers',
            'email' => 'required|string|email|max:255|unique:customers',
            'cuit' => 'numeric|unique:customers',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }
        
    protected function create(array $data)
    {
        $status = '1'; // Active
        $group = '2'; // Min 
        if(isset($data['isreseller'])){
            if($data['isreseller'] == 'on'){
                $status = '0'; // Suspended
                $group = '3'; // Reseller
            } 
        } 
        
        $cuit = null;
        if(isset($data['cuit'])){
            $cuit = $data['cuit'];
        }

        return Customer::create([
            'name' => $data['name'],
            'surname' => $data['surname'],
            'username' => $data['username'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'status' => $status,
            'geoprov_id' => $data['geoprov_id'],
            'geoloc_id' => $data['geoloc_id'],
            'cuit' => $cuit,
            'password' => bcrypt($data['password']),
            'group' => $group
        ]);
    }

    protected function guard(){
        return auth()->guard('customer');
    }

    public function showRegistrationForm(){
        $geoprovs = GeoProv::pluck('name','id');
        
        return view('store.register')
        ->with('geoprovs',$geoprovs);
    }

    public function register(Request $request)
    {
        $this->validator($request->all())->validate();

        event(new Registered($user = $this->create($request->all())));

        $this->guard()->login($user);
        try{
            if($user->group == '3'){
                $subject = 'Solicitud de cliente mayorísta';
                $message = 'Un usuario ha solicitado ser cliente mayorísta';
            } else {
                $subject = 'Nuevo usuario registrado';
                $message = 'Nuevo usuario registrado';
            }
            Mail::to(APP_EMAIL_1)->send(new SendMail($subject, 'SimpleMail', $message));
        } catch (\Exception $e) {
            //
        }

        return $this->registered($request, $user)
                        ?: redirect($this->redirectPath());
    }
}
