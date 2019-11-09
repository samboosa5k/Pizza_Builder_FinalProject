<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PizzaOrderIngredient extends Model
{
    protected $table = 'pizza_order_ingredients';

    protected $fillable = ['pizza_id', 'ingredient_id'];

    public function pizza()
    {
        return $this->belongsTo('App\Pizza');
    }
}
