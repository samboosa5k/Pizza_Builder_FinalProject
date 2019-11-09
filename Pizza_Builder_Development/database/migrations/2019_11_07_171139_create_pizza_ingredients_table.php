<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePizzaIngredientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pizza_ingredients', function (Blueprint $table) {
            $table->increments('id')->unsigned()->unique();
            $table->string('name')->nullable();
            $table->string('category')->nullable();
            $table->string('description')->nullable();
            $table->string('allergens')->nullable();
            $table->unsignedBigInteger('amount');
            $table->string('units');
            $table->unsignedInteger('unit_price')->nullable();
            $table->unsignedInteger('unit_deduction')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pizza_ingredients');
    }
}
