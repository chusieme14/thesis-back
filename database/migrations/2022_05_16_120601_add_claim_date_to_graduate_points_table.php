<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddClaimDateToGraduatePointsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('graduate_points', function (Blueprint $table) {
            $table->date('claim_date')->nullable()->after('exchangewith');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('graduate_points', function (Blueprint $table) {
            $table->dropColumn('claim_date');
        });
    }
}
