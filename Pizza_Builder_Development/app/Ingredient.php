<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    public function pizza()
    {
        return $this->belongsToMany('App\Pizza');
    }
}
