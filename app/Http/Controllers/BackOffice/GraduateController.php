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
            Graduate::create($graduate->toArray());
        }

        $import = new tempGraduate();
        $import->resetVillageMassImport($session);
    }
}
