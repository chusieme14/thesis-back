<?php

namespace App\Http\Controllers\BackOffice;

use App\Helpers\SearchFilterHelpers\Departments;
use App\Http\Controllers\Controller;
use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    public function index(){
        return (new Departments)->searchable();
    }

    public function store(Request $request){
        Department::create($request->all());
    }

    public function update(Request $request, $id){
        $department = Department::where('id', $id)->update($request->all());
    }

    public function destroy($id){
        Department::where('id', $id)->delete();
    }
}
