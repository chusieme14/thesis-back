<?php

namespace App\Http\Controllers\BackOffice;

use App\Helpers\SearchFilterHelpers\Courses;
use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index()
    {
        return (new Courses)->searchable();
    }

    public function store(Request $request)
    {
        return Course::create($request->all());
    }
    
    public function update(Request $request, $id)
    {
        return Course::findOrfail($id)->update($request->all());
    }

    public function destroy($id)
    {
        return Course::findOrfail($id)->delete();
    }
}
