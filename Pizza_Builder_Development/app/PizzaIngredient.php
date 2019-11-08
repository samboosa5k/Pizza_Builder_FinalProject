<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PizzaIngredient extends Model
{
    public function pizza()
    {
        return $this->belongsToMany('App\Pizza', 'foreign_key', 'pizza_id');
    }
}
