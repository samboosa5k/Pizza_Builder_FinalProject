<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PizzaIngredient extends Model
{
    protected $fillable = ['name', 'category', 'description', 'allergens', 'amount', 'units'];

    public function pizza()
    {
        return $this->belongsToMany('App\Pizza', 'foreign_key', 'pizza_id');
    }
}
