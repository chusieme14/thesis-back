<?php

namespace App\Http\Controllers\BackOffice;

use App\Models\News;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Helpers\SearchFilterHelpers\HNews;

class NewsController extends Controller
{
    public function index(){
        return (new HNews)->searchable();
    }

    public function store(Request $request){
        $news = News::create($request->all());
        if($request->image_base64){
            $news->update([
                'image' => userProfileUploader($request->image_base64, 'news/')
            ]);
        }
    }

    public function destroy($id){

        $news = News::findOrfail($id);
        if($news->image){
            removeFile($news->image);
        }
        $news->delete();
    }

    public function update(Request $request, $id){

        $news = News::where('id', $id)->first();
        if($request->image && $request->image != $request->image_base64){
            removeFile($news->image);
            $news->image = userProfileUploader($request->image_base64,'news/');
        }
        $news->update($request->all());
        if($request->image && $request->image != $request->image_base64){
            $news->update([
                'image' => userProfileUploader($request->image_base64, 'news/')
            ]);
        }
    }
}
