<?php

namespace App\Http\Controllers;

use App\Helpers\SearchFilterHelpers\Points;
use Illuminate\Http\Request;

class PointController extends Controller
{
    public function index()
    {
        return (new Points)->searchable();
    }
}
