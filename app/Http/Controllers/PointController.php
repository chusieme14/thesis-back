<?php

namespace App\Http\Controllers;

use App\Helpers\SearchFilterHelpers\Points;
use App\Models\GraduatePoint;
use Illuminate\Http\Request;

class PointController extends Controller
{
    public function index()
    {
        return (new Points)->searchable();
    }

    public function totalPoints($graduate_id)
    {
        return GraduatePoint::where('graduate_id', $graduate_id)->where('status', 1)->sum('point');
    }
}
