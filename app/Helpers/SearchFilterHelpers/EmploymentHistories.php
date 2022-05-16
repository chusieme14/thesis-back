<?php

namespace App\Helpers\SearchFilterHelpers;

use Carbon\Carbon;
use App\Models\EmploymentHistory;

class EmploymentHistories {

    public function __construct()
    {
        $this->model = EmploymentHistory::query();
    }

    public function searchable()
    {
        $this->searchColumns();
        $this->sortBy();
        $this->byGraduate();
        
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
                $this->model->orWhere($column, 'like', "%".$keyword."%");
            }
        }
    }

    public function byGraduate()
    {
        if(Request()->graduate_id){
            $this->model->where('graduate_id', Request()->graduate_id);
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
                if($exactSortKey == 'level'){
                    $this->model->join('levels', 'levels.id', '=', 'courses.level_id')
                        ->select('levels.difficulty', 'courses.*')
                        ->orderBy('levels.difficulty', $exactSortType);
                }
                elseif($exactSortKey == 'dates'){
                    $this->model->orderBy('date_from', $exactSortType);  
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