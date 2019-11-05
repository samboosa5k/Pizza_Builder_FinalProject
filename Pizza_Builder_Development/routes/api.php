<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//  AUTHENTICATION ETC
Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'PassportController@login');
    Route::post('register', 'PassportController@register');

    Route::group([
        'middleware' => 'auth:api'
    ], function () {

        Route::get('logout', 'PassportController@logout');
        Route::get('user', 'PassportController@user');
    });
});

//  INGREDIENTS
Route::get('ingredients', 'IngredientController@index');
