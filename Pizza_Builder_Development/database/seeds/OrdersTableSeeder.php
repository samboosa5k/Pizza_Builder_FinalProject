<?php

use Illuminate\Database\Seeder;

class OrdersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 20; $i++) {
            DB::table('orders')->insert([
                'first_name' => 'Admin',
                'last_name' => 'The Boss',
                'phone_number' => 31617983364,
                'street_and_housenumber' => 'Pizza Street 24',
                'postcode' => '1343BJ',
                'city' => 'Prague',
                'status' => 'In Progress'
            ]);
        }
    }
}
