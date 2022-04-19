<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTempGraduatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('temp_graduates', function (Blueprint $table) {
            $table->id();
            $table->string('student_number')->nullable();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('middle_name')->nullable();
            $table->string('email')->nullable();
            $table->string('contact_number')->nullable();
            $table->string('batch')->nullable();
            $table->string('section')->nullable();
            $table->string('course')->nullable();
            $table->unsignedBigInteger('course_id')->nullable();
            $table->boolean('status')->nullable();
            $table->string('reason')->nullable();
            $table->string('session');
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
        Schema::dropIfExists('temp_graduates');
    }
}
