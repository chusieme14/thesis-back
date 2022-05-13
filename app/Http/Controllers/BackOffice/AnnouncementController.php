<?php

namespace App\Http\Controllers\BackOffice;

use App\Jobs\SendSms;
use App\Models\Graduate;
use App\Models\Announcement;
use Illuminate\Http\Request;
use App\Jobs\SendAnnouncement;
use App\Http\Controllers\Controller;
use App\Helpers\SearchFilterHelpers\Announcements;
use App\Models\Course;

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
        $announcement = Announcement::create($request->all());
        if($request->option==1){
            $this->sendSection($announcement);
        }elseif ($request->option==2) {
            $this->sendCourse($announcement);
        }elseif ($request->option==3) {
            $this->sendDepartment($announcement);
        }
    }

    private function sendSection($announcement){
        if($announcement->platform == 1){
            $graduates = Graduate::where(['section' => $announcement->section, 'course_id' => $announcement->course_id])->where('email', '!=', null)->get();
        }else{
            $graduates = Graduate::where(['section' => $announcement->section, 'course_id' => $announcement->course_id])->where('contact_number', '!=', null)->get();
        }

        foreach ($graduates as $graduate) {
            if($announcement->platform == 1){
                SendAnnouncement::dispatch($graduate->email, $announcement->title, $announcement->content, $graduate)->delay(now()->addSeconds(5));
            }else{
                SendSms::dispatch($graduate->contact_number, $announcement->content)->delay(now()->addSeconds(5));
            }
        }
    }

    private function sendCourse($announcement){
        if($announcement->platform == 1){
            $graduates = Graduate::where('course_id', $announcement->course_id)->where('email', '!=', null)->get();
        }else{
            $graduates = Graduate::where('course_id', $announcement->course_id)->where('contact_number', '!=', null)->get();
        }

        foreach ($graduates as $graduate) {
            if($announcement->platform == 1){
                SendAnnouncement::dispatch($graduate->email, $announcement->title, $announcement->content, $graduate)->delay(now()->addSeconds(5));
            }else{
                SendSms::dispatch($graduate->contact_number, $announcement->content)->delay(now()->addSeconds(5));
            }
        }
    }

    private function sendDepartment($announcement){
        $courses = Course::where('department_id', $announcement->department_id)->get();
        foreach ($courses as $key => $course) {
            if($announcement->platform == 1){
                $graduates = Graduate::where('course_id', $course->id)->where('email', '!=', null)->orderBy('updated_at', 'desc')->take(5)->get();
            }else{
                $graduates = Graduate::where('course_id', $course->id)->where('contact_number', '!=', null)->orderBy('updated_at', 'desc')->take(5)->get();
            }
            foreach ($graduates as $graduate) {
                if($announcement->platform == 1){
                    SendAnnouncement::dispatch($graduate->email, $announcement->title, $announcement->content, $graduate)->delay(now()->addSeconds(5));
                }else{
                    SendSms::dispatch($graduate->contact_number, $announcement->content)->delay(now()->addSeconds(5));
                }
            }
        }

    }

    public function send($id)
    {
        $announcement = Announcement::where('id', $id)->first();
        $announcement->update(['status'=>2]);
        if($announcement->option==1){
            $this->sendSection($announcement);
        }elseif ($announcement->option==2) {
            $this->sendCourse($announcement);
        }elseif ($announcement->option==3) {
            $this->sendDepartment($announcement);
        }
    }


}
