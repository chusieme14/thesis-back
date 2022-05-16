<?php

namespace App\Helpers\SearchFilterHelpers;

use Carbon\Carbon;
use App\Models\GraduatePoint;

class Points  {

    public function __construct()
    {
        $this->model = GraduatePoint::query();
    }

    public function searchable()
    {
        $this->model->with('graduate');
        $this->searchColumns();
        $this->byGraduate();
        $this->sortBy();
        
        $per_page = Request()->per_page;
        if ($per_page=='-1' || !isset(Request()->per_page)) return $this->model->paginate($this->model->count());
        return $this->model->paginate($per_page);
    }

    public function searchColumns()
    {
        $searchable = ['name'];
        if(Request()->keyword && Request()->keyword!="null"){
            $keyword = Request()->keyword;
            foreach ($searchable as $column) {
                $this->model->whereHas('graduate', function($q) use($keyword){
                    $q->whereRaw("CONCAT(TRIM(`first_name`),' ', TRIM(`last_name`)) LIKE "."'%" .$keyword. "%'");
                });
                // $this->model->orWhere($column, 'like', "%".$keyword."%");
            }
        }
    }

    public function byGraduate()
    {
        if(Request()->graduates_id){
            $this->model->where('graduate_id', Request()->graduates_id);
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
                if($exactSortKey == 'sharer'){
                    $this->model->join('graduates', 'graduates.id', '=', 'graduate_points.graduate_id')
                        ->select('graduates.last_name', 'graduate_points.*')
                        ->orderBy('graduates.last_name', $exactSortType);
                }
                else{
                    $this->model->orderBy($exactSortKey, $exactSortType);  
                }       
            }
        }
        else{
            $this->model->orderBy('id', 'desc');
        }
    }
}