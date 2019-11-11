<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public $timestamps = false;

    protected $fillable = array(
        'first_name',
        'last_name',
        'phone_number',
        'street_and_housenumber',
        'postcode',
        'city',
        'created_at',
        // The rest of the column names that you want it to be mass-assignable.
    );

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function pizzas()
    {
        return $this->hasMany('App\Pizza');
    }

    public function ingredients()
    {
        return $this->hasManyThrough(
            'App\PizzaOrderIngredient',
            'App\Pizza',
            'order_id',
            'pizza_id',
            'id',
            'pizza_id',

        );
    }
}
