<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pizza extends Model
{
    public function ingredient()
    {
        return $this->hasMany('App\Ingredient');
    }
}
