<?php

namespace App\Helpers\SearchFilterHelpers;

use Carbon\Carbon;
use App\Models\tempGraduate;

class TempGraduates {

    public function __construct()
    {
        $this->model = tempGraduate::query();
    }

    public function searchable()
    {   
        $this->searchColumns();
        $this->sortBy();
        $per_page = Request()->per_page;
        if ($per_page=='-1' || !isset(Request()->per_page)) return $this->model->paginate($this->model->count());
        return $this->model->paginate($per_page);
    }

    public function searchColumns()
    {
        if(Request()->keyword && Request()->keyword!="null"){
            $searchable = ['first_name', 'last_name', 'email'];
            $keyword = Request()->keyword;
            foreach ($searchable as $column) {
                $this->model->orWhere($column, 'like', "%".$keyword."%");
            }
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
            $this->model->orderBy('created_at', 'desc');
        }
    }
}