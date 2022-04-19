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
    
    Route::post('graduates/upload-file',[GraduateController::class, 'fileImport']);
    Route::get('graduates/temp-uploads',[GraduateController::class, 'getTempUploads']);
    Route::delete('graduates/temp-uploads/{session}/remove',[GraduateController::class, 'removeTempUploads']);
    Route::get('graduates/temp-uploads/{session}/save',[GraduateController::class, 'saveMultiple']);
    Route::resource('graduates',GraduateController::class);
    Route::resource('courses',CourseController::class);
});
