<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Carbon\Carbon;
use App\Traits\CartTrait;
use App\Cart;
use Log;

class NotifyOldCarts extends Command
{
    use CartTrait;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notify:oldcarts';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Notifiying old carts';

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

        $maxTime = 24;

        $oldCarts = Cart::where('status','ACTIVE')->get();
        $time = Carbon::now()->subHour($maxTime);
        
        $ids = [];
        foreach($oldCarts as $oldCart)
        {
            if($oldCart->created_at < $time)
            {
                array_push($ids, $oldCart->id);
            }
        }
        
        Log::info($this->notifyOldCarts($ids));
    }
}
