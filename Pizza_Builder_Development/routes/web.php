<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', function () {
    return view('login.index');
});

//  Passport controller
Route::group([
    'middleware' => 'auth:api'
], function () {
    Route::get('/management', 'ManagementController@index');
    Route::get('order/status/{status}/', 'OrderController@index');  //  Show orders based on status
});

//  Pizza Controller
Route::get('pizza', 'PizzaController@index');
Route::get('pizza/{id}/', 'PizzaController@show');

//  Order Controller
Route::get('order/{id}/', 'OrderController@show');      //  Show single order, not protected for now

//  EMAIL
Route::get('email', 'EmailController@index');
