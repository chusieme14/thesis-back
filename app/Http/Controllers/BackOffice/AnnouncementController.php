<?php

namespace App\Http\Controllers\BackOffice;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Helpers\SearchFilterHelpers\Announcements;
use App\Jobs\SendAnnouncement;
use App\Models\Announcement;
use App\Models\Graduate;

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

    public function saveSend(Request $request)
    {
        Announcement::create($request->all());
        if($request->option==1){
            $this->sendSection($request);
        }
    }

    private function sendSection($request){
        if($request->platform == 1){
            $graduates = Graduate::where(['section' => $request->section, 'course_id' => $request->course_id])->where('email', '!=', null)->get();
        }else{
            $graduates = Graduate::where(['section' => $request->section, 'course_id' => $request->course_id])->where('contact_number', '!=', null)->get();
        }

        foreach ($graduates as $graduate) {
            if($request->platform == 1){
                SendAnnouncement::dispatch($graduate->email, $request->title, $request->content, $graduate)->delay(now()->addSeconds(5));
            }else{

            }
        }
    }


}
