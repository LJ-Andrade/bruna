<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    protected $table = 'settings';

    protected $primaryKey = 'id';

    protected $fillable = ['email_notifications', 'email_1'];
}
