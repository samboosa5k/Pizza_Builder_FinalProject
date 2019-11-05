<?php

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IngredientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 10; $i++) {
            DB::table('ingredients')->insert([
                'name' => 'pizza ingredient ' . $i,
                'category' => 'ingredient category ' . $i,
                'amount' => 100,
                'units' => 'gram'
            ]);
        }
    }
}
