<?php

namespace App\Http\Controllers;

use App\Helpers\SearchFilterHelpers\Points;
use App\Models\GraduatePoint;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PointController extends Controller
{
    public function index()
    {
        return (new Points)->searchable();
    }

    public function totalPoints($graduate_id)
    {
        return GraduatePoint::where('graduate_id', $graduate_id)->where('status', 1)->sum('point');
    }

    public function claimLoadPoints(Request $request, $point_id)
    {
        if($request->isall){
            GraduatePoint::where(['graduate_id'=> $request->graduate_id, 'status' => 1])
                ->update([
                    'status' => 2,
                    'exchangewith' => 'load',
                    'claim_date' => Carbon::now()
                ]);
            
        }else{
            GraduatePoint::where('id', $point_id)
                ->update([
                    'status' => 2,
                    'exchangewith' => 'load',
                    'claim_date' => Carbon::now()
                ]);
        }
    }

    public function claimId(Request $request, $point_id)
    {
        $points = GraduatePoint::where(['graduate_id' => $request->graduate_id, 'status' => 1])->get();
        $cost=0;
        foreach ($points as $key => $point) {
            if($cost==300)return;
            else{
                $point->update([
                    'status' => 2,
                    'exchangewith' => 'load',
                    'claim_date' => Carbon::now()
                ]);
                $cost+=$point->point;
            }
        }
    }
}
