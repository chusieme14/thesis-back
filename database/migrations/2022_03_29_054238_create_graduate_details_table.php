<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGraduateDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('graduate_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('graduate_id');
            $table->string('civil_status')->nullable();
            $table->date('birthday')->nullable();
            $table->string('residence')->nullable();
            $table->string('gender')->nullable();
            $table->string('attainment')->nullable();
            $table->boolean('prof_exam_passed')->default(false);
            $table->string('awards')->nullable();
            $table->boolean('employed')->default(false);
            $table->date('employment_date')->nullable();
            $table->string('employment_status')->nullable();
            $table->string('company_name')->nullable();
            $table->string('c_address')->nullable();
            $table->text('c_city')->nullable();
            $table->unsignedBigInteger('country_id')->nullable();
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
        Schema::dropIfExists('graduate_details');
    }
}
