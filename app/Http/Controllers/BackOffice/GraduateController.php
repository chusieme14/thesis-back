<?php

namespace App\Http\Controllers\BackOffice;

use App\Models\Graduate;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Helpers\SearchFilterHelpers\Graduates;

class GraduateController extends Controller
{
    public function index()
    {
        return (new Graduates)->searchable();
    }

    public function store(Request $request)
    {
        return Graduate::create($request->all());
    }
}
