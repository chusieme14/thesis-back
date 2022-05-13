<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PointController;
use App\Http\Controllers\Api\CountryController;
use App\Http\Controllers\BackOffice\AuthController;
use App\Http\Controllers\BackOffice\NewsController;
use App\Http\Controllers\BackOffice\CourseController;
use App\Http\Controllers\BackOffice\GraduateController;
use App\Http\Controllers\BackOffice\DepartmentController;
use App\Http\Controllers\BackOffice\AnnouncementController;
use App\Http\Controllers\BackOffice\DashboardController;

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
    Route::resource('news',NewsController::class);
    Route::post('announcement/send-save',[AnnouncementController::class, 'saveSend']);
    Route::get('announcement/send/{id}',[AnnouncementController::class, 'send']);
    Route::resource('announcements',AnnouncementController::class);
    Route::resource('departments',DepartmentController::class);
    Route::resource('points',PointController::class);
    Route::get('countries' ,[CountryController::class,'all']);
    Route::get('get-civil-statistics' ,[DashboardController::class,'civilStatus']);
    Route::get('get-gender' ,[DashboardController::class,'gender']);
    Route::get('get-residence' ,[DashboardController::class,'residence']);
    Route::get('get-employment' ,[DashboardController::class,'employment']);
    Route::get('get-employment-status' ,[DashboardController::class,'employmentStatus']);
    Route::get('get-work' ,[DashboardController::class,'work']);
    Route::get('get-attainment' ,[DashboardController::class,'attainment']);
    Route::get('get-income' ,[DashboardController::class,'income']);
    Route::get('get-time-jobs' ,[DashboardController::class,'timeJobs']);
    Route::get('get-curriculum' ,[DashboardController::class,'curriculum']);
    Route::get('get-promotion' ,[DashboardController::class,'promotion']);

    Route::get('graduates/generate-pdf/{id}',[GraduateController::class, 'generatePdf']);
});
