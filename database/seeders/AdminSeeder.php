<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Admin::create([
            'first_name' => 'test',
            'last_name' => 'admin',
            'email' => 'test@admin.com',
            'password' => '$2y$10$L.gDZljq.Po8Qm82bh5e6usGncbIqSMhd1MIsDbikPvMfc3o8YKWS',
        ]);
    }
}
