<?php

namespace App\Http\Controllers\BackOffice;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Helpers\SearchFilterHelpers\Announcements;
use App\Models\Announcement;

class AnnouncementController extends Controller
{
    public function index(){
        return (new Announcements)->searchable();
    }

    public function store(Request $request){
        Announcement::create($request->all());
    }

    public function update(Request $request, $id){
        Announcement::where('id', $id)->update($request->all());
    }

    public function destroy($id){
        Announcement::where('id', $id)->delete();
    }

    public function sendSms(Request $request){
        
    }


}
