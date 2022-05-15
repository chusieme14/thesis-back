<?php

namespace App\Http\Controllers\BackOffice;

use App\Http\Controllers\Controller;
use App\Models\Graduate;
class DashboardController extends Controller
{
    
    public function civilStatus()
    {
        if(Request()->department_id){
            if(Request()->batch){
                $temp_array = [
                    'single' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('civil_status', 'Single');})->where('batch', Request()->batch)->count(),
                    'married' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('civil_status', 'Married');})->where('batch', Request()->batch)->count(),
                    'separated' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('civil_status', 'Separated');})->where('batch', Request()->batch)->count(),
                    'widowed' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('civil_status', 'Widowed');})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('civil_status', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    'single' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('civil_status', 'Single');})->count(),
                    'married' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('civil_status', 'Married');})->count(),
                    'separated' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('civil_status', 'Separated');})->count(),
                    'widowed' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('civil_status', 'Widowed');})->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('civil_status', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }
        else if(Request()->course_id){
            if(Request()->batch){
                $temp_array = [
                    'single' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('civil_status', 'Single');})->where('batch', Request()->batch)->count(),
                    'married' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('civil_status', 'Married');})->where('batch', Request()->batch)->count(),
                    'separated' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('civil_status', 'Separated');})->where('batch', Request()->batch)->count(),
                    'widowed' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('civil_status', 'Widowed');})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('civil_status', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    'single' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('civil_status', 'Single');})->count(),
                    'married' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('civil_status', 'Married');})->count(),
                    'separated' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('civil_status', 'Separated');})->count(),
                    'widowed' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('civil_status', 'Widowed');})->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('civil_status', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }
        else{
            $temp_array = [
                'single' => Graduate::whereHas('detail', function($q){$q->where('civil_status', 'Single');})->count(),
                'married' => Graduate::whereHas('detail', function($q){$q->where('civil_status', 'Married');})->count(),
                'separated' => Graduate::whereHas('detail', function($q){$q->where('civil_status', 'Separated');})->count(),
                'widowed' => Graduate::whereHas('detail', function($q){$q->where('civil_status', 'Widowed');})->count(),
                'no_data' => Graduate::whereHas('detail', function($q){$q->where('civil_status', null);})->orWhereDoesntHave('detail')->count(),
            ];
        }

        return array_values($temp_array);
    }
    
    public function gender()
    {
        if(Request()->department_id){
            if(Request()->batch){
                $temp_array = [
                    'male' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('gender', 'Male');})->where('batch', Request()->batch)->count(),
                    'female' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('gender', 'Female');})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('gender', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    'male' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('gender', 'Male');})->count(),
                    'female' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('gender', 'Female');})->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('gender', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }
        else if(Request()->course_id){
            if(Request()->batch){
                $temp_array = [
                    'male' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('gender', 'Male');})->where('batch', Request()->batch)->count(),
                    'female' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('gender', 'Female');})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('gender', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    'male' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('gender', 'Male');})->count(),
                    'female' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('gender', 'Female');})->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('gender', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }else{
            $temp_array = [
                'male' => Graduate::whereHas('detail', function($q){$q->where('gender', 'Male');})->count(),
                'female' => Graduate::whereHas('detail', function($q){$q->where('gender', 'Female');})->count(),
                'no_data' => Graduate::whereHas('detail', function($q){$q->where('gender', null);})->orWhereDoesntHave('detail')->count(),
            ];
        }

        return array_values($temp_array);
    }
    
    public function residence()
    {
        if(Request()->department_id){
            if(Request()->batch){
                $temp_array = [
                    'city' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('residence', 'like','%calbayog%');})->where('batch', Request()->batch)->count(),
                    'municipality' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('residence', 'not like', '%calbayog%');})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('residence', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    'city' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('residence', 'like','%calbayog%');})->count(),
                    'municipality' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('residence', 'not like', '%calbayog%');})->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('residence', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }
        else if(Request()->course_id){
            if(Request()->batch){
                $temp_array = [
                    'city' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('residence', 'like','%calbayog%');})->where('batch', Request()->batch)->count(),
                    'municipality' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('residence', 'not like', '%calbayog%');})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('residence', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    'city' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('residence', 'like','%calbayog%');})->count(),
                    'municipality' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('residence', 'not like', '%calbayog%');})->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('residence', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }
        else{
            $temp_array = [
                'city' => Graduate::whereHas('detail', function($q){$q->where('residence', 'like','%calbayog%');})->count(),
                'municipality' => Graduate::whereHas('detail', function($q){$q->where('residence', 'not like', '%calbayog%');})->count(),
                'no_data' => Graduate::whereHas('detail', function($q){$q->where('residence', null);})->orWhereDoesntHave('detail')->count(),
            ];
        }

        return array_values($temp_array);
    }
    public function employment()
    {
        if(Request()->department_id){
            if(Request()->batch){
                $temp_array = [
                    'employed' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('employed', 1);})->where('batch', Request()->batch)->count(),
                    'not_employed' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('employed', 0);})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('employed', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    'employed' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('employed', 1);})->count(),
                    'not_employed' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('employed', 0);})->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('employed', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }
        else if(Request()->course_id){
            if(Request()->batch){
                $temp_array = [
                    'employed' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('employed', 1);})->where('batch', Request()->batch)->count(),
                    'not_employed' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('employed', 0);})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('employed', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    'employed' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('employed', 1);})->count(),
                    'not_employed' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('employed', 0);})->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('employed', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }else{
            $temp_array = [
                'employed' => Graduate::whereHas('detail', function($q){$q->where('employed', 1);})->count(),
                'not_employed' => Graduate::whereHas('detail', function($q){$q->where('employed', 0);})->count(),
                'no_data' => Graduate::whereHas('detail', function($q){$q->where('employed', null);})->orWhereDoesntHave('detail')->count(),
            ];
        }


        return array_values($temp_array);
    }
    public function employmentStatus()
    {
        if(Request()->department_id){
            if(Request()->batch){
                $temp_array = [
                    'Contractual' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('employment_status', 'Contractual');})->where('batch', Request()->batch)->count(),
                    'Permanent' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('employment_status', 'Permanent');})->where('batch', Request()->batch)->count(),
                    'Self_employed' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('employment_status', 'Self-employed');})->where('batch', Request()->batch)->count(),
                    'Casual' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('employment_status', 'Casual');})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('employment_status', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    'Contractual' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('employment_status', 'Contractual');})->count(),
                    'Permanent' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('employment_status', 'Permanent');})->count(),
                    'Self_employed' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('employment_status', 'Self-employed');})->count(),
                    'Casual' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('employment_status', 'Casual');})->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('employment_status', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }
        else if(Request()->course_id){
            if(Request()->batch){
                $temp_array = [
                    'Contractual' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('employment_status', 'Contractual');})->where('batch', Request()->batch)->count(),
                    'Permanent' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('employment_status', 'Permanent');})->where('batch', Request()->batch)->count(),
                    'Self_employed' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('employment_status', 'Self-employed');})->where('batch', Request()->batch)->count(),
                    'Casual' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('employment_status', 'Casual');})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('employment_status', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    'Contractual' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('employment_status', 'Contractual');})->count(),
                    'Permanent' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('employment_status', 'Permanent');})->count(),
                    'Self_employed' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('employment_status', 'Self-employed');})->count(),
                    'Casual' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('employment_status', 'Casual');})->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('employment_status', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }else{
            $temp_array = [
                'Contractual' => Graduate::whereHas('detail', function($q){$q->where('employment_status', 'Contractual');})->count(),
                'Permanent' => Graduate::whereHas('detail', function($q){$q->where('employment_status', 'Permanent');})->count(),
                'Self_employed' => Graduate::whereHas('detail', function($q){$q->where('employment_status', 'Self-employed');})->count(),
                'Casual' => Graduate::whereHas('detail', function($q){$q->where('employment_status', 'Casual');})->count(),
                'no_data' => Graduate::whereHas('detail', function($q){$q->where('employment_status', null);})->orWhereDoesntHave('detail')->count(),
            ];
        }

        return array_values($temp_array);
    }
    
    public function work()
    {
        if(Request()->department_id){
            if(Request()->batch){
                $temp_array = [
                    'local' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('country_id', 173);})->where('batch', Request()->batch)->count(),
                    'abroad' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('country_id', '<>', 173);})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('country_id', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    'local' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('country_id', 173);})->count(),
                    'abroad' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('country_id', '<>', 173);})->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('country_id', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }
        else if(Request()->course_id){
            if(Request()->batch){
                $temp_array = [
                    'local' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('country_id', 173);})->where('batch', Request()->batch)->count(),
                    'abroad' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('country_id', '<>', 173);})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('country_id', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    'local' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('country_id', 173);})->count(),
                    'abroad' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('country_id', '<>', 173);})->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('country_id', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }
        else{
            $temp_array = [
                'local' => Graduate::whereHas('detail', function($q){$q->where('country_id', 173);})->count(),
                'abroad' => Graduate::whereHas('detail', function($q){$q->where('country_id', '<>', 173);})->count(),
                'no_data' => Graduate::whereHas('detail', function($q){$q->where('country_id', null);})->orWhereDoesntHave('detail')->count(),
            ];
        }

        return array_values($temp_array);
    }
    public function attainment()
    {
        if(Request()->department_id){
            if(Request()->batch){
                $temp_array = [
                    'Baccalaureate' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('attainment', 'Baccalaureate');})->where('batch', Request()->batch)->count(),
                    'Masteral' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('attainment', 'Masteral');})->where('batch', Request()->batch)->count(),
                    'Doctorate' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('attainment', 'Doctorate');})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('attainment', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    'Baccalaureate' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('attainment', 'Baccalaureate');})->count(),
                    'Masteral' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('attainment', 'Masteral');})->count(),
                    'Doctorate' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('attainment', 'Doctorate');})->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('attainment', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }
        else if(Request()->course_id){
            if(Request()->batch){
                $temp_array = [
                    'Baccalaureate' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('attainment', 'Baccalaureate');})->where('batch', Request()->batch)->count(),
                    'Masteral' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('attainment', 'Masteral');})->where('batch', Request()->batch)->count(),
                    'Doctorate' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('attainment', 'Doctorate');})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('attainment', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    'Baccalaureate' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('attainment', 'Baccalaureate');})->count(),
                    'Masteral' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('attainment', 'Masteral');})->count(),
                    'Doctorate' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('attainment', 'Doctorate');})->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('attainment', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }else{
            $temp_array = [
                'Baccalaureate' => Graduate::whereHas('detail', function($q){$q->where('attainment', 'Baccalaureate');})->count(),
                'Masteral' => Graduate::whereHas('detail', function($q){$q->where('attainment', 'Masteral');})->count(),
                'Doctorate' => Graduate::whereHas('detail', function($q){$q->where('attainment', 'Doctorate');})->count(),
                'no_data' => Graduate::whereHas('detail', function($q){$q->where('attainment', null);})->orWhereDoesntHave('detail')->count(),
            ];
        }

        return array_values($temp_array);
    }
    
    public function income()
    {
        if(Request()->department_id){
            if(Request()->batch){
                $temp_array = [
                    '1st' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('income', 1);})->where('batch', Request()->batch)->count(),
                    '2nd' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('income', 2);})->where('batch', Request()->batch)->count(),
                    '3rd' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('income', 3);})->where('batch', Request()->batch)->count(),
                    '4th' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('income', 4);})->where('batch', Request()->batch)->count(),
                    '5rd' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('income', 5);})->where('batch', Request()->batch)->count(),
                    '6rd' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('income', 6);})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('income', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    '1st' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('income', 1);})->count(),
                    '2nd' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('income', 2);})->count(),
                    '3rd' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('income', 3);})->count(),
                    '4th' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('income', 4);})->count(),
                    '5rd' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('income', 5);})->count(),
                    '6rd' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('income', 6);})->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('income', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }
        else if(Request()->course_id){
            if(Request()->batch){
                $temp_array = [
                    '1st' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('income', 1);})->where('batch', Request()->batch)->count(),
                    '2nd' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('income', 2);})->where('batch', Request()->batch)->count(),
                    '3rd' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('income', 3);})->where('batch', Request()->batch)->count(),
                    '4th' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('income', 4);})->where('batch', Request()->batch)->count(),
                    '5rd' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('income', 5);})->where('batch', Request()->batch)->count(),
                    '6rd' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('income', 6);})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('income', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    '1st' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('income', 1);})->count(),
                    '2nd' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('income', 2);})->count(),
                    '3rd' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('income', 3);})->count(),
                    '4th' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('income', 4);})->count(),
                    '5rd' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('income', 5);})->count(),
                    '6rd' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('income', 6);})->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('income', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }
        else{
            $temp_array = [
                '1st' => Graduate::whereHas('detail', function($q){$q->where('income', 1);})->count(),
                '2nd' => Graduate::whereHas('detail', function($q){$q->where('income', 2);})->count(),
                '3rd' => Graduate::whereHas('detail', function($q){$q->where('income', 3);})->count(),
                '4th' => Graduate::whereHas('detail', function($q){$q->where('income', 4);})->count(),
                '5rd' => Graduate::whereHas('detail', function($q){$q->where('income', 5);})->count(),
                '6rd' => Graduate::whereHas('detail', function($q){$q->where('income', 6);})->count(),
                'no_data' => Graduate::whereHas('detail', function($q){$q->where('income', null);})->orWhereDoesntHave('detail')->count(),
            ];
        }

        return array_values($temp_array);
    }
    
    public function timeJobs()
    {
        if(Request()->department_id){
            if(Request()->batch){
                $temp_array = [
                    '1st' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('time_jobs', 1);})->where('batch', Request()->batch)->count(),
                    '2nd' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('time_jobs', 2);})->where('batch', Request()->batch)->count(),
                    '3rd' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('time_jobs', 3);})->where('batch', Request()->batch)->count(),
                    '4th' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('time_jobs', 4);})->where('batch', Request()->batch)->count(),
                    '5rd' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('time_jobs', 5);})->where('batch', Request()->batch)->count(),
                    '6rd' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('time_jobs', 6);})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('time_jobs', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    '1st' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('time_jobs', 1);})->count(),
                    '2nd' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('time_jobs', 2);})->count(),
                    '3rd' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('time_jobs', 3);})->count(),
                    '4th' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('time_jobs', 4);})->count(),
                    '5rd' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('time_jobs', 5);})->count(),
                    '6rd' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('time_jobs', 6);})->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('time_jobs', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }
        else if(Request()->course_id){
            if(Request()->batch){
                $temp_array = [
                    '1st' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('time_jobs', 1);})->where('batch', Request()->batch)->count(),
                    '2nd' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('time_jobs', 2);})->where('batch', Request()->batch)->count(),
                    '3rd' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('time_jobs', 3);})->where('batch', Request()->batch)->count(),
                    '4th' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('time_jobs', 4);})->where('batch', Request()->batch)->count(),
                    '5rd' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('time_jobs', 5);})->where('batch', Request()->batch)->count(),
                    '6rd' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('time_jobs', 6);})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('time_jobs', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    '1st' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('time_jobs', 1);})->count(),
                    '2nd' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('time_jobs', 2);})->count(),
                    '3rd' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('time_jobs', 3);})->count(),
                    '4th' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('time_jobs', 4);})->count(),
                    '5rd' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('time_jobs', 5);})->count(),
                    '6rd' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('time_jobs', 6);})->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('time_jobs', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }
        else{
            $temp_array = [
                '1st' => Graduate::whereHas('detail', function($q){$q->where('time_jobs', 1);})->count(),
                '2nd' => Graduate::whereHas('detail', function($q){$q->where('time_jobs', 2);})->count(),
                '3rd' => Graduate::whereHas('detail', function($q){$q->where('time_jobs', 3);})->count(),
                '4th' => Graduate::whereHas('detail', function($q){$q->where('time_jobs', 4);})->count(),
                '5rd' => Graduate::whereHas('detail', function($q){$q->where('time_jobs', 5);})->count(),
                '6rd' => Graduate::whereHas('detail', function($q){$q->where('time_jobs', 6);})->count(),
                'no_data' => Graduate::whereHas('detail', function($q){$q->where('time_jobs', null);})->orWhereDoesntHave('detail')->count(),
            ];
        }

        return array_values($temp_array);
    }
    //
    public function curriculum()
    {
        if(Request()->department_id){
            if(Request()->batch){
                $temp_array = [
                    'yes' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('curriculum', 1);})->where('batch', Request()->batch)->count(),
                    'no' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('curriculum', 0);})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('curriculum', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    'yes' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('curriculum', 1);})->count(),
                    'no' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('curriculum', 0);})->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('curriculum', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }
        else if(Request()->course_id){
            if(Request()->batch){
                $temp_array = [
                    'yes' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('curriculum', 1);})->where('batch', Request()->batch)->count(),
                    'no' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('curriculum', 0);})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('curriculum', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    'yes' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('curriculum', 1);})->count(),
                    'no' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('curriculum', 0);})->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('curriculum', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }else{
            $temp_array = [
                'yes' => Graduate::whereHas('detail', function($q){$q->where('curriculum', 1);})->count(),
                'no' => Graduate::whereHas('detail', function($q){$q->where('curriculum', 0);})->count(),
                'no_data' => Graduate::whereHas('detail', function($q){$q->where('curriculum', null);})->orWhereDoesntHave('detail')->count(),
            ];
        }

        return array_values($temp_array);
    }
    public function promotion()
    {
        if(Request()->department_id){
            if(Request()->batch){
                $temp_array = [
                    'yes' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('promotion', 1);})->where('batch', Request()->batch)->count(),
                    'no' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('promotion', 0);})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('promotion', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    'yes' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('promotion', 1);})->count(),
                    'no' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('promotion', 0);})->count(),
                    'no_data' => Graduate::whereHas('course', function($q){$q->where('department_id', Request()->department_id);})
                        ->whereHas('detail', function($q){$q->where('promotion', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }
        else if(Request()->course_id){
            if(Request()->batch){
                $temp_array = [
                    'yes' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('promotion', 1);})->where('batch', Request()->batch)->count(),
                    'no' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('promotion', 0);})->where('batch', Request()->batch)->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('promotion', null);})->orWhereDoesntHave('detail')->where('batch', Request()->batch)->count(),
                ];
            }else{
                $temp_array = [
                    'yes' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('promotion', 1);})->count(),
                    'no' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('promotion', 0);})->count(),
                    'no_data' => Graduate::where('course_id', Request()->course_id)
                        ->whereHas('detail', function($q){$q->where('promotion', null);})->orWhereDoesntHave('detail')->count(),
                ];
            }
        }else{
            $temp_array = [
                'yes' => Graduate::whereHas('detail', function($q){$q->where('promotion', 1);})->count(),
                'no' => Graduate::whereHas('detail', function($q){$q->where('promotion', 0);})->count(),
                'no_data' => Graduate::whereHas('detail', function($q){$q->where('promotion', null);})->orWhereDoesntHave('detail')->count(),
            ];
        }

        return array_values($temp_array);
    }
}
