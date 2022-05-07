<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Graduate;
use Illuminate\Http\Request;

class GraduateController extends Controller
{
    public function updateInfo(Request $request, $id){

        $graduate = Graduate::where('id', $id)->first();
        $graduate->update($request->all());
        if($graduate->detail){
            $graduate->detail->update($request->detail);
        }else{
            $graduate->detail()->create($request->detail);
        }
        return response()->json(['message' => 'success'], 200);
    }
}
