<?php

namespace App\Helpers\SearchFilterHelpers;

use Carbon\Carbon;
use App\Models\Client;
use App\Models\Graduate;

class Graduates {

    public function __construct()
    {
        $this->model = Graduate::query();
    }

    public function searchable()
    {   
        $this->searchColumns();
        $this->sortBy();
        $this->byBatch();
        $this->byCourse();
        $per_page = Request()->per_page;
        if ($per_page=='-1' || !isset(Request()->per_page)) return $this->model->paginate($this->model->count());
        return $this->model->paginate($per_page);
    }

    public function searchColumns()
    {
        $searchable = ['title'];
        if(Request()->keyword && Request()->keyword!="null"){
            $keyword = Request()->keyword;
            // $this->model->where(function($q) use ($keyword, $searchable) {
                // foreach ($searchable as $column) {
                foreach ($this->clientTableFields as $column) {
                    $this->model->orWhere($column, 'like', "%".$keyword."%");
                }
            // });
        }
    }

    public function byBatch(){
        if(Request()->batch){
            $this->model->where('batch', 'like', '%'.Request()->batch.'%');
        }
    }

    public function byCourse(){
        if(Request()->course_id){
            $this->model->where('course_id', Request()->course_id);
        }
    }

    public function sortBy()
    {
        if(Request()->sortBy){
            $sortByFilters = explode(',', Request()->sortBy);
            foreach ($sortByFilters as $key => $filter) {
                if (empty($filter)) continue;
                
                $exactSortKey = explode('/', $filter)[0];
                $exactSortType = explode('/', $filter)[1];
                
                
                    $this->model->orderBy($exactSortKey, $exactSortType);          
                
            }
        }
        else{
            $this->model->orderBy('id', 'desc');
        }
    }
}