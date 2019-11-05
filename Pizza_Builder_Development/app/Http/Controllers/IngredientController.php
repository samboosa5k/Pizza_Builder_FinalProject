<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Ingredient;

class IngredientController extends Controller
{
    public function index() //  This function currently returns ALL ingredients
    {
        $ingredient = new Ingredient;

        return $ingredient->get();
    }
}
