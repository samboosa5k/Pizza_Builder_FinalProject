<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use App\Pizza;

class OrderController extends Controller
{
    public function index($status)
    {
        $orders = Order::where('status', $status)
            ->with('pizzas')
            ->get();


        return $orders;
    }

    public function show($id)
    {
        $order = Order::where('id', $id)->with('pizzas')->get();
        //$order = Order::where('orders.id', $id)->with('pizzas')->with('ingredients')->get();

        return $order;
    }
}
