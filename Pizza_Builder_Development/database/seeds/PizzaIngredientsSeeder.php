<?php

use Illuminate\Database\Seeder;

class PizzaIngredientsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //DB::table('pizza_ingredients')->truncate();
        for ($i = 0; $i < 100; $i++) {
            DB::table('pizza_ingredients')->insert([
                'name' => 'pizza ingredient ' . $i,
                'category' => 'ingredient category ' . $i,
                'amount' => 100,
                'units' => 'gram',
                'unit_price' => 1,
                'unit_deduction' => 10
            ]);
        }
    }
}
