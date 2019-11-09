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
        //DB::table('pizzas')->truncate();

        for ($i = 1; $i <= 20; $i++) {
            DB::table('pizzas')->insert([
                'user_id' => 1,
                'order_id' => $i
            ]);
        }
    }
}
