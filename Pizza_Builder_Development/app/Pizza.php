<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pizza extends Model
{
    protected $primaryKey = 'user_id';
    protected $fillable = ['user_id', 'pizza_id', 'order_id'];
    public $incrementing = false;

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function pizza_order_ingredients()
    {
        return $this->belongsToMany('App\PizzaIngredient', 'pizza_order_ingredients', 'pizza_id', 'ingredient_id');
    }

    public function order()
    {
        return $this->belongsToMany('App\Order');
    }
}
