<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

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
Route::group(['middleware'=>['auth:api']],function(){
    Route::get('user-details' ,[AuthController::class,'details']);
    Route::post('logout' ,[AuthController::class,'logout']);
});
