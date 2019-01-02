<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Carbon\Carbon;
use App\Cart;
use Log;

class DeleteOldCarts extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'delete:oldcarts';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Deleting old carts';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        $oldCarts = Cart::where('status','ACTIVE')->get();
        $time = Carbon::now()->subHour(72);

        $ids = [];
        foreach($oldCarts as $oldCart)
        {
            if($oldCart->created_at < $time)
            {
                array_push($ids, $oldCart->id);
            }
            else 
            {
                
            }
        }
        $array_string = '';
        
        foreach($ids as $id)
        {
            $array_string .= $id . " | ";
        }
        
        $string = 'Borrar carros de compra: ' . $array_string;

        Log::info($string);
    }
}
