<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pizza;
use App\PizzaIngredient;
use App\User;

class PizzaController extends Controller
{
    public function index()
    {
        $all_pizzas = Pizza::all();

        return $all_pizzas;
    }

    public function show(Request $request, $id)
    {
        //dd("PizzaController.php");

        $pizza_details = Pizza::where('pizza_id', $id)->get();

        $singleorderandingredients = PizzaIngredient::leftJoin('pizza_order_ingredients', 'pizza_ingredients.id', '=', 'pizza_order_ingredients.ingredient_id')->where('pizza_id', $id)->get();

        return [
            'pizza_details' => $pizza_details,
            'pizza_order_ingredients' => $singleorderandingredients
        ];
    }
}
