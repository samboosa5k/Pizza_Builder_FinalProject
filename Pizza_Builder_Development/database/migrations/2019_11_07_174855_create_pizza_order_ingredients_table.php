<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePizzaOrderIngredientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pizza_order_ingredients', function (Blueprint $table) {
            $table->unsignedInteger('pizza_id');
            $table->unsignedInteger('ingredient_id');

            $table->foreign('ingredient_id')->references('id')->on('pizza_ingredients');
            $table->foreign('pizza_id')->references('pizza_id')->on('pizzas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pizza_order_ingredients');
    }
}
