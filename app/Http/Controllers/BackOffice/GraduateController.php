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
        $graduate = Graduate::create($request->all());
        if($request->detail){
            $graduate->detail()->create($request->detail);
        }
    }

    public function update(Request $request, $id)
    {
        
    }

    public function destroy($id)
    {
        $graduate = Graduate::where('id', $id)->first();
        $graduate->detail()->delete();
        $graduate->delete();
    }
}
