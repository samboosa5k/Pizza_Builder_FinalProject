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

//  REACT CUSTOMER routes
Route::get('/', function () {
    return view('index');
});

Route::get('/magic', function () {
    return view('index');
});

Route::get('/magic/{any}', function ($any) {
    return view('index');
});

//  REACT ADMIN routes

Route::get('/login', function () {
    return view('index');
});

Route::get('/admin', function () {
    return view('index');
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
Route::post('order/finalize', 'OrderController@store');

//  EMAIL
Route::get('email', 'EmailController@index');
