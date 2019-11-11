<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use App\Pizza;
use Carbon\Carbon;

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
}
