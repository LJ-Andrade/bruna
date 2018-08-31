<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Customer;
use Auth;
use Image;
use File;
use PDF;
use Excel;

class CustomerController extends Controller
{

    /*
    |--------------------------------------------------------------------------
    | DISPLAY
    |--------------------------------------------------------------------------
    */
    public function index(Request $request)
    {    
        $group = $request->get('group');
        $status = $request->get('status');
        // Name is name, surname, username, email
        $name  = $request->get('name');
        
        $paginate = 15;

        if(isset($group) && isset($status)){
            $items = Customer::searchGroupStatus($group, $status)->orderBy('id', 'ASC')->paginate($paginate);    
        }
        elseif(isset($name))
        {
            $items = Customer::searchName($name)->orderBy('id', 'ASC')->paginate($paginate); 
        }
        elseif(isset($group))
        {
            $items = Customer::searchGroup($group)->orderBy('id', 'ASC')->paginate($paginate); 
        }
        else 
        {
            $items = Customer::orderBy('id', 'ASC')->paginate($paginate); 
        }


        return view('vadmin.customers.index')
            ->with('items', $items)
            ->with('name', $name)
            ->with('group', $group);
    }
    
    public function show($id)
    {
        $customer = Customer::findOrFail($id);
        return view('vadmin.customers.show', compact('customer'));
    }

    /*
    |--------------------------------------------------------------------------
    | EXPORT
    |--------------------------------------------------------------------------
    */

    public function exportPdf($params)
    {   
        $items = $this->getData($params);
        $pdf = PDF::loadView('vadmin.customers.invoice', array('items' => $items));
        $pdf->setPaper('A4', 'landscape');
        return $pdf->download('listado-de-clientes.pdf');
        
    }

    public function exportXls($params)
    {   
        $items = $this->getData($params);
        Excel::create('listado-de-clientes', function($excel) use($items){
            $excel->sheet('Listado', function($sheet) use($items) {   
                $sheet->loadView('vadmin.customers.invoice-excel', 
                compact('items'));
            });
        })->export('xls');         
    }


    public function getData($params)
    {
        if($params == 'all'){
            $items = Customer::orderBy('id', 'ASC')->get(); 
            return $items;
        }

        parse_str($params , $query);
        if(isset($query['name'])){
            return $items = Customer::searchname($query['name'])->orderBy('id', 'ASC')->get(); 
        }

        if(isset($query['group'])){
            return $items = Customer::searchGroup($query['group'])->orderBy('id', 'ASC')->get();
        } 
        

        $items = Customer::orderBy('id', 'ASC')->get(); 
        return $items;
    }



    /*
    |--------------------------------------------------------------------------
    | CREATE
    |--------------------------------------------------------------------------
    */

    public function create()
    {
        return view('vadmin.customers.create');
    }

    public function store(Request $request)
    {
        $Customer = new Customer($request->all());
        $this->validate($request,[
            'name'           => 'required',
            'email'          => 'min:3|max:250|required|unique:customers,email',
            'password'       => 'min:4|max:12listado-usuarios0|required|',
            
        ],[
            'email.required' => 'Debe ingresar un email',
            'email.unique'   => 'El email ya existe',
            'password'       => 'Debe ingresar una contraseña',
        ]);

        if($request->file('avatar') != null){
            $avatar   = $request->file('avatar');
            $filename = $Customer->Customername.'.jpg';
            Image::make($avatar)->encode('jpg', 80)->fit(300, 300)->save(public_path('images/customers/'.$filename));
            $Customer->avatar = $filename;
        }

        $Customer->password = bcrypt($request->password);
        $Customer->save();

        return redirect('vadmin/customers')->with('message', 'Cliente creado correctamente');
    }

    /*
    |--------------------------------------------------------------------------
    | UPDATE
    |--------------------------------------------------------------------------
    */
    public function edit($id)
    {
        $Customer = Customer::findOrFail($id);
        return view('vadmin.customers.edit', compact('Customer'));
    }

    public function update(Request $request, $id)
    {
        $Customer = Customer::findOrFail($id);
        $this->validate($request,[
            'name' => 'required|max:255',
            'Customername' => 'required|max:20|unique:customers,Customername,'.$Customer->id,
            'email' => 'required|email|max:255|unique:customers,email,'.$Customer->id,
            'password' => 'required|min:6|confirmed',
            
        ],[
            'name.required' => 'Debe ingresar un nombre',
            'Customername.required' => 'Debe ingresar un nombre de usuario',
            'Customername.unique' => 'El nombre de usuario ya está siendo utilizado',
            'email.required' => 'Debe ingresar un email',
            'email.unique' => 'El email ya existe',
            'password.min' => 'El password debe tener al menos :min caracteres',
            'password.required' => 'Debe ingresar una contraseña',
            'password.confirmed' => 'Las contraseñas no coinciden',
        ]);

        $Customer->fill($request->all());

        $Customer->password = bcrypt($request->password);
        if($request->file('avatar') != null){
            $avatar   = $request->file('avatar');
            $filename = $Customer->Customername.'.jpg';
            Image::make($avatar)->encode('jpg', 80)->fit(300, 300)->save(public_path('images/customers/'.$filename));
            $Customer->avatar = $filename;
        }

        $Customer->save();

        return redirect('vadmin/customers')->with('Message', 'Usuario '. $Customer->name .'editado correctamente');
    }

    // ---------- Update Avatar --------------- //


    public function updateCustomerAvatar(Request $request){
        
        if ($request->hasFile('avatar')) {
            $customer = Customer::findOrFail(Auth::guard('customer')->user()->id);
            $avatar = $request->file('avatar');
            $filename = $customer->id.'.jpg';

            $path = public_path('webimages/customers/');
            try{
                if (!file_exists($path)) {
                    $oldmask = umask(0);
                    mkdir($path, 0777);
                    umask($oldmask);
                }
                
                Image::make($avatar)->encode('jpg', 80)->fit(300, 300)->save($path.$filename);
                $customer->avatar = $filename;
                $customer->save();

                return back();
            }   catch(\Exception $e){
                dd($e);
            }
        }
    }

    public function updateCustomerGroup(Request $request){
        $customer = Customer::find($request->id);
        $customer->group = $request->group;
        $customer->save();

        return response()->json([
            'success'   => true,
            'message'   => 'Grupo actualizado'
        ]);    
    }
    /*
    |--------------------------------------------------------------------------
    | DESTROY
    |--------------------------------------------------------------------------
    */


    public function destroy(Request $request)
    {   
        
        $ids = json_decode('['.str_replace("'",'"',$request->id).']', true);
        
        try {
            foreach ($ids as $id) {
                $record = Customer::find($id);
                $record->delete();
            }
            return response()->json([
                'success'   => true,
            ]); 
        }  catch (\Exception $e) {
            return response()->json([
                'success'   => false,
                'error'    => 'Error: '.$e
            ]);    
        }
        
    }
}
