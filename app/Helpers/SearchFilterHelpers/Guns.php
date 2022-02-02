<?php

namespace App\Helpers\SearchFilterHelpers;

use App\Models\Gun;
use Carbon\Carbon;

class Guns {

    public function __construct()
    {
        $this->model = Gun::query();
    }

    public function searchable()
    {
        $this->searchColumns();
        $this->byPrice();
        $this->byType();
        // $this->byCreatedAt();
        // $this->byUser();
        $this->sortBy();
        // return $this->model->paginate(Request()->per_page);
        $per_page = Request()->per_page;
        if ($per_page=='-1') return $this->model->paginate($this->model->count());
        return $this->model->paginate($per_page);
    }

    public function searchColumns()
    {
        $searchable = ['name', 'ammunitions','type'];
        if(Request()->keyword && Request()->keyword!="null"){
            $keyword = Request()->keyword;
            // $this->model->where(function($q) use ($keyword, $searchable) {
                foreach ($searchable as $column) {
                    if($column=='ammunitions'){
                        $this->model->orWhereHas('ammunitions',function($q) use($keyword){
                            $q->where('name', 'like', "%".$keyword."%");
                        });
                    }
                    elseif($column=='type'){
                        $this->model->orWhereHas('gunType',function($q) use($keyword){
                            $q->where('name', 'like', "%".$keyword."%");
                            $q->orwhere('short_name', 'like', "%".$keyword."%");
                        });
                    }
                    else
                        $this->model->orWhere($column, 'like', "%".$keyword."%");
                }
            // });
        }
    }

    public function byType()
    {
        if(Request()->ammunitions_type){
            $this->model->whereHas('ammunitions', function($q){
                $q->where('ammunition_id', Request()->ammunitions_type);
            });   
        }

        if(Request()->gun_type){
            $this->model->whereHas('gunType', function($q){
                $q->where('id', Request()->gun_type);
            });   
        }

        // if(Request()->sub_start_date){
        //     $date = explode(',',Request()->sub_start_date);
        //     if (empty($date[1])) {
        //         $date[1] = $date[0];
        //     }
        //     $this->model->whereBetween('start_date', [Carbon::parse($date[0])->startOfDay(), Carbon::parse($date[1])->endOfDay()]);
        // }

        // if(Request()->sub_end_date){
        //     $date = explode(',',Request()->sub_end_date);
        //     if (empty($date[1])) {
        //         $date[1] = $date[0];
        //     }
        //     $this->model->whereBetween('end_date', [Carbon::parse($date[0])->startOfDay(), Carbon::parse($date[1])->endOfDay()]);
        // }
    }

    public function byCreatedAt()
    {
        if(Request()->created_at){
            $date = explode(',',Request()->created_at);
            if (empty($date[1])) {
                $date[1] = $date[0];
            }
            $this->model->whereBetween('created_at', [Carbon::parse($date[0])->startOfDay(), Carbon::parse($date[1])->endOfDay()]);
        }
    }

    public function byPrice()
    {
        if(Request()->min_price && Request()->max_price)
            $this->model->whereBetween('price', [Request()->min_price, Request()->max_price]);
    }

    public function sortBy()
    {
        if(Request()->sortBy){
            $sortByFilters = explode(',', Request()->sortBy);
            foreach ($sortByFilters as $key => $filter) {
                if (empty($filter)) continue;
                $exactSortKey = explode('/', $filter)[0];
                $exactSortType = explode('/', $filter)[1];
                if($exactSortKey == 'type'){
                    $this->model->join('gun_types', 'gun_types.id', '=', 'guns.gun_type_id')
                    ->select('gun_types.name', 'guns.*')
                    ->orderBy('gun_types.name', $exactSortType);
                }else{
                    $this->model->orderBy($exactSortKey, $exactSortType);          
                }
            }
        }
        else{
            $this->model->orderBy('name');
        }
    }
}