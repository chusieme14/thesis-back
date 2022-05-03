<?php

namespace App\Http\Controllers\BackOffice;

use App\Models\Graduate;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;
use App\Helpers\SearchFilterHelpers\Graduates;
use App\Helpers\SearchFilterHelpers\TempGraduates;
use App\Imports\GraduatesImport;
use App\Models\tempGraduate;

class GraduateController extends Controller
{
    public function index()
    {
        return (new Graduates)->searchable();
    }

    public function store(Request $request)
    {
        $graduate = Graduate::create($request->all());
        $code = $this->generateCode();
        $graduate->update([
            'share_code' => $code, 
            'password' => bcrypt($request->student_number)
        ]);
        if($request->detail){
            $graduate->detail()->create($request->detail);
        }
        if($request->image_base64){
            $graduate->update([
                'avatar' => userProfileUploader($request->image_base64, 'profile/')
            ]);
        }
    }

    private function generateCode(){
        $code = Str::random(12);
        if(Graduate::where('share_code',$code)->exists()) $this->generateCode();
        return $code;
    }

    public function update(Request $request, $id)
    {
        $graduate = Graduate::findOrfail($id);
        if($request->avatar && $request->avatar != $request->image_base64){
            removeFile($graduate->avatar);
            $graduate->avatar = userProfileUploader($request->image_base64,'profile/');
        }
        $graduate->update($request->all());
        if($request->avatar && $request->avatar != $request->image_base64){
            $graduate->update([
                'avatar' => userProfileUploader($request->image_base64, 'profile/')
            ]);
        }
    }

    public function show($id)
    {
        return Graduate::findOrfail($id);
    }

    public function destroy($id)
    {
        $graduate = Graduate::where('id', $id)->first();
        $graduate->detail()->delete();
        if($graduate->avatar){
            removeFile($graduate->avatar);
        }
        $graduate->delete();
    }

    public function fileImport(Request $request)
    {
        $file = $request->file('file');
        Excel::import(new GraduatesImport($request->session), $file);
        return response()->json(['message'=>'success'],200);
    }

    public function massImportProcessPoints(Request $request, $village_id)
    {
        return $this->generate_point_service->processMassImportPoints($village_id);
    }

    public function getTempUploads(){
        return (new TempGraduates)->searchable();
    }

    public function removeTempUploads($session){
        $import = new tempGraduate();
        $import->resetVillageMassImport($session);
    }

    public function saveMultiple($session){
        $graduates = tempGraduate::where(['session' => $session, 'status' => true])->get();

        foreach ($graduates as $key => $graduate) {
            $graduate->password = bcrypt('$graduate->student_number');
            $graduate->share_code = $this->generateCode();
            Graduate::create($graduate->toArray());
        }

        $import = new tempGraduate();
        $import->resetVillageMassImport($session);
    }
}
