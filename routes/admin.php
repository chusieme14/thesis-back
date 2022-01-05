<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// Route::get('/admin/api/checkuser',[AuthController::class,'checkuser']);
// Route::post('/admin/api/loginrequest',[AuthController::class,'login']);
Route::group(['middleware'=>['auth:sanctum']],function(){

});
Route::get('/{any?}',function(){
    return view('welcome');
})->where('any','.*');