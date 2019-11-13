<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use App\Pizza;
use App\PizzaIngredient;
use Carbon\Carbon;

class OrderController extends Controller
{
    public function index($status)
    {
        $orders = Order::where('status', 'in_progress')
            ->with('pizzas');   // GET orders with status in_progress

        $orders = $orders->get();
        $orderids = $orders->pluck('id'); //    Now we have all order ids, we need pizza-ids

        $pizza_ids = Pizza::whereIn('order_id', $orderids)->pluck('pizza_id');  //  Get ingredients only of in_progress pizzas

        $in_progress_ingredients = PizzaIngredient::leftJoin('pizza_order_ingredients', 'pizza_ingredients.id', '=', 'pizza_order_ingredients.ingredient_id')
            ->leftJoin('pizzas', 'pizza_order_ingredients.pizza_id', '=', 'pizzas.pizza_id')
            ->whereIn('pizzas.pizza_id', $pizza_ids)
            ->get(); //  Get ingredients only of in_progress pizzas

        return [
            'orders' => $orders,
            'items' => $in_progress_ingredients,
        ];
    }

    public function show($id)
    {
        $order = Order::where('id', $id)->with('pizzas')->get();
        //$order = Order::where('orders.id', $id)->with('pizzas')->with('ingredients')->get();

        return $order;
    }

    public function store(Request $request)
    {
        $newOrder = new Order();

        $newOrder->first_name = $request->input('first_name');
        $newOrder->last_name = $request->input('last_name');
        $newOrder->phone_number = $request->input('phone_number');
        $newOrder->street_and_housenumber = $request->input('street_and_housenumber');
        $newOrder->postcode = $request->input('postcode');
        $newOrder->city = $request->input('city');
        $newOrder->order_price = $request->input('order_price');
        $newOrder->created_at = Carbon::now('Europe/Amsterdam')->toDateTimeString();

        $newOrder->save();

        return $request->first_name;
    }

    public function test($id = 1)
    {
        $orders = Order::where('status', 'in_progress')
            ->with('pizzas');   // GET orders with status in_progress

        $orders = $orders->get();
        $orderids = $orders->pluck('id'); //    Now we have all order ids, we need pizza-ids

        $pizza_ids = Pizza::whereIn('order_id', $orderids)->pluck('pizza_id');  //  Get ingredients only of in_progress pizzas

        $in_progress_ingredients = PizzaIngredient::leftJoin('pizza_order_ingredients', 'pizza_ingredients.id', '=', 'pizza_order_ingredients.ingredient_id')
            ->leftJoin('pizzas', 'pizza_order_ingredients.pizza_id', '=', 'pizzas.pizza_id')
            ->whereIn('pizzas.pizza_id', $pizza_ids)
            ->get(); //  Get ingredients only of in_progress pizzas

        return [
            'orders' => $orders,
            'items' => $in_progress_ingredients,
        ];
    }
}
