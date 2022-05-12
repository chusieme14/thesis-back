<?php

namespace App\Http\Controllers\BackOffice;

use App\Http\Controllers\Controller;
use App\Models\Graduate;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function civilStatus()
    {
        $temp_array = [
            'single' => Graduate::whereHas('detail', function($q){$q->where('civil_status', 'Single');})->count(),
            'married' => Graduate::whereHas('detail', function($q){$q->where('civil_status', 'Married');})->count(),
            'separated' => Graduate::whereHas('detail', function($q){$q->where('civil_status', 'Separated');})->count(),
            'widowed' => Graduate::whereHas('detail', function($q){$q->where('civil_status', 'Widowed');})->count(),
            'no_data' => Graduate::whereHas('detail', function($q){$q->where('civil_status', null);})->orWhereDoesntHave('detail')->count(),
        ];

        return array_values($temp_array);
    }
    public function gender()
    {
        $temp_array = [
            'male' => Graduate::whereHas('detail', function($q){$q->where('gender', 'Male');})->count(),
            'female' => Graduate::whereHas('detail', function($q){$q->where('gender', 'Female');})->count(),
            'no_data' => Graduate::whereHas('detail', function($q){$q->where('gender', null);})->orWhereDoesntHave('detail')->count(),
        ];

        return array_values($temp_array);
    }
    public function residence()
    {
        $temp_array = [
            'city' => Graduate::whereHas('detail', function($q){$q->where('residence', 'like','%calbayog%');})->count(),
            'municipality' => Graduate::whereHas('detail', function($q){$q->where('residence', 'not like', '%calbayog%');})->count(),
            'no_data' => Graduate::whereHas('detail', function($q){$q->where('residence', null);})->orWhereDoesntHave('detail')->count(),
        ];

        return array_values($temp_array);
    }
    public function employment()
    {
        $temp_array = [
            'employed' => Graduate::whereHas('detail', function($q){$q->where('employed', 1);})->count(),
            'not_employed' => Graduate::whereHas('detail', function($q){$q->where('employed', 0);})->count(),
            'no_data' => Graduate::whereHas('detail', function($q){$q->where('employed', null);})->orWhereDoesntHave('detail')->count(),
        ];

        return array_values($temp_array);
    }
    public function employmentStatus()
    {
        $temp_array = [
            'Contractual' => Graduate::whereHas('detail', function($q){$q->where('employment_status', 'Contractual');})->count(),
            'Permanent' => Graduate::whereHas('detail', function($q){$q->where('employment_status', 'Permanent');})->count(),
            'Self_employed' => Graduate::whereHas('detail', function($q){$q->where('employment_status', 'Self-employed');})->count(),
            'Casual' => Graduate::whereHas('detail', function($q){$q->where('employment_status', 'Casual');})->count(),
            'no_data' => Graduate::whereHas('detail', function($q){$q->where('employment_status', null);})->orWhereDoesntHave('detail')->count(),
        ];

        return array_values($temp_array);
    }
    public function work()
    {
        $temp_array = [
            'local' => Graduate::whereHas('detail', function($q){$q->where('country_id', 173);})->count(),
            'abroad' => Graduate::whereHas('detail', function($q){$q->where('country_id', '!=', 173);})->count(),
            'no_data' => Graduate::whereHas('detail', function($q){$q->where('country_id', null);})->orWhereDoesntHave('detail')->count(),
        ];

        return array_values($temp_array);
    }
    public function attainment()
    {
        $temp_array = [
            'Baccalaureate' => Graduate::whereHas('detail', function($q){$q->where('attainment', 'Baccalaureate');})->count(),
            'Masteral' => Graduate::whereHas('detail', function($q){$q->where('attainment', 'Masteral');})->count(),
            'Doctorate' => Graduate::whereHas('detail', function($q){$q->where('attainment', 'Doctorate');})->count(),
            'no_data' => Graduate::whereHas('detail', function($q){$q->where('attainment', null);})->orWhereDoesntHave('detail')->count(),
        ];

        return array_values($temp_array);
    }
    public function income()
    {
        $temp_array = [
            '1st' => Graduate::whereHas('detail', function($q){$q->where('income', 1);})->count(),
            '2nd' => Graduate::whereHas('detail', function($q){$q->where('income', 2);})->count(),
            '3rd' => Graduate::whereHas('detail', function($q){$q->where('income', 3);})->count(),
            '4th' => Graduate::whereHas('detail', function($q){$q->where('income', 4);})->count(),
            '5rd' => Graduate::whereHas('detail', function($q){$q->where('income', 5);})->count(),
            '6rd' => Graduate::whereHas('detail', function($q){$q->where('income', 6);})->count(),
            'no_data' => Graduate::whereHas('detail', function($q){$q->where('income', null);})->orWhereDoesntHave('detail')->count(),
        ];

        return array_values($temp_array);
    }
    public function timeJobs()
    {
        $temp_array = [
            '1st' => Graduate::whereHas('detail', function($q){$q->where('time_jobs', 1);})->count(),
            '2nd' => Graduate::whereHas('detail', function($q){$q->where('time_jobs', 2);})->count(),
            '3rd' => Graduate::whereHas('detail', function($q){$q->where('time_jobs', 3);})->count(),
            '4th' => Graduate::whereHas('detail', function($q){$q->where('time_jobs', 4);})->count(),
            '5rd' => Graduate::whereHas('detail', function($q){$q->where('time_jobs', 5);})->count(),
            '6rd' => Graduate::whereHas('detail', function($q){$q->where('time_jobs', 6);})->count(),
            'no_data' => Graduate::whereHas('detail', function($q){$q->where('time_jobs', null);})->orWhereDoesntHave('detail')->count(),
        ];

        return array_values($temp_array);
    }
    public function curriculum()
    {
        $temp_array = [
            'yes' => Graduate::whereHas('detail', function($q){$q->where('curriculum', 1);})->count(),
            'no' => Graduate::whereHas('detail', function($q){$q->where('curriculum', 0);})->count(),
            'no_data' => Graduate::whereHas('detail', function($q){$q->where('curriculum', null);})->orWhereDoesntHave('detail')->count(),
        ];

        return array_values($temp_array);
    }
    public function promotion()
    {
        $temp_array = [
            'yes' => Graduate::whereHas('detail', function($q){$q->where('promotion', 1);})->count(),
            'no' => Graduate::whereHas('detail', function($q){$q->where('promotion', 0);})->count(),
            'no_data' => Graduate::whereHas('detail', function($q){$q->where('promotion', null);})->orWhereDoesntHave('detail')->count(),
        ];

        return array_values($temp_array);
    }
}
