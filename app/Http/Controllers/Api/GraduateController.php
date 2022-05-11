<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Graduate;
use Carbon\Carbon;
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
        if($request->code){
            if($graduate->share_code != $request->code){
                $this->generatePoints($graduate, $request->code);
            }
        }
        return response()->json(['message' => 'success'], 200);
    }

    private function generatePoints($graduate, $code){
        $sharer = Graduate::where('share_code', $code)->first();
        $enableDate = Carbon::parse($sharer->updated_at)->addMonth(1);
        if($enableDate <= Carbon::now()){
            $sharer->points()->create([
                'point' => 30
            ]);
        }
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
