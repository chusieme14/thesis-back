<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CountryController;
use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\GraduateController as ApiGraduateController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\BackOffice\GraduateController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('login' ,[AuthController::class,'login']);
Route::get('courses' ,[CourseController::class,'all']);
Route::post('register' ,[AuthController::class,'register']);
Route::group(['middleware'=>['auth:api']],function(){
    Route::get('user-details' ,[AuthController::class,'details']);
    Route::post('logout' ,[AuthController::class,'logout']);
    
    Route::get('graduates/{id}' ,[GraduateController::class,'show']);
    Route::put('graduates/{id}' ,[ApiGraduateController::class,'updateInfo']);
    Route::put('update-graduate-profile/{id}' ,[ApiGraduateController::class,'updateProfile']);
    Route::put('update-graduate-password/{id}' ,[ApiGraduateController::class,'updatePassword']);
    Route::get('courses' ,[CourseController::class,'all']);
    Route::get('countries' ,[CountryController::class,'all']);
    Route::get('posts' ,[PostController::class,'all']);
});
