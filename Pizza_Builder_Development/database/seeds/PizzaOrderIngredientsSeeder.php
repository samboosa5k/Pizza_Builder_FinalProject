<?php

use Illuminate\Database\Seeder;

class PizzaOrderIngredientsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pizza_order_ingredients')->truncate();

        for ($i = 0; $i < 50; $i++) {
            DB::table('pizza_order_ingredients')->insert([
                'pizza_id' => random_int(1, 10),
                'ingredient_id' => random_int(1, 99)
            ]);
        }
    }
}
