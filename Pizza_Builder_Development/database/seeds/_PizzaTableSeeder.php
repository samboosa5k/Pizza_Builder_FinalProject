<?php

use Illuminate\Database\Seeder;

class PizzaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 10; $i++) {
            DB::table('pizzas')->insert([
                'order_id' => $i,
                'user_id' => 1,
            ]);
        }
    }
}
