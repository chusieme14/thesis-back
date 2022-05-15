<?php

namespace App\Http\Controllers\BackOffice;

use App\Helpers\SearchFilterHelpers\EmploymentHistories;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EmploymentHistoryController extends Controller
{
    public function index()
    {
        return (new EmploymentHistories)->searchable();
    }
}
