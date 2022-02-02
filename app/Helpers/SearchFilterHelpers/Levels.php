<?php

namespace App\Helpers\SearchFilterHelpers;

use App\Models\Level;

class Levels {

    public function __construct()
    {
        $this->model = Level::query();
    }

    public function searchable()
    {
        $this->searchColumns();
        $this->sortBy();
        
        $per_page = Request()->per_page;
        if ($per_page=='-1') return $this->model->paginate($this->model->count());
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
            $this->model->orderBy('difficulty', 'asc');
        }
    }
}