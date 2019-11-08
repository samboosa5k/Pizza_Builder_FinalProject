<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PizzaIngredient;

class PizzaIngredientController extends Controller
{
    public function index() //  This function currently returns ALL ingredients
    {

        $ingredient = new PizzaIngredient;
        //dd($ingredient);
        return PizzaIngredient::get();
    }
}
