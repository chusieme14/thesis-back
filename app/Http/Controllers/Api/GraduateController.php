<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Graduate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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

    public function updateProfile(Request $request, $id)
    {
        $graduate = Graduate::findOrfail($id);
        if($graduate->avatar){
            removeFile($graduate->avatar);
        }
        $graduate->update([
            'avatar' => userProfileUploader($request->image_base64, 'profile/')
        ]);
    }

    public function updatePassword(Request $request, $id)
    {
        $graduate = Graduate::findOrfail($id);
        if(!Hash::check($request->old_password, $graduate->password)){
            return response()->json(['message'=>'Old password not match'],404);
        }
        $graduate->update([
            'password' => Hash::make($request->new_password)
        ]);
    }
}
