<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\BackOffice\AuthController;
use App\Http\Controllers\BackOffice\CourseController;
use App\Http\Controllers\BackOffice\GraduateController;

Route::get('checkuser',[AuthController::class,'checkUser']);
Route::post('login',[AuthController::class,'login']);
Route::group(['middleware'=>['auth:web']],function(){
    Route::get('logout',[AuthController::class,'logout']);
    
    Route::resource('graduates',GraduateController::class);
    Route::resource('courses',CourseController::class);
});
