<?php

namespace App\Helpers\SearchFilterHelpers;

use App\Models\Ammunition;
use Carbon\Carbon;

class Ammunitions {

    public function __construct()
    {
        $this->model = Ammunition::query();
    }

    public function searchable()
    {
        $this->searchColumns();
        $this->byType();
        $this->byCreatedAt();
        $this->byPrice();
        $this->sortBy();
        // return $this->model->paginate(Request()->per_page);
        $per_page = Request()->per_page;
        if ($per_page=='-1') return $this->model->paginate($this->model->count());
        return $this->model->paginate($per_page);
    }

    public function searchColumns()
    {
        $searchable = ['name', 'price'];
        if(Request()->keyword && Request()->keyword!="null"){
            $keyword = Request()->keyword;
            // $this->model->where(function($q) use ($keyword, $searchable) {
                foreach ($searchable as $column) {
                    $this->model->orWhere($column, 'like', "%".$keyword."%");
                }
            // });
        }
    }

    public function byType()
    {
        if(Request()->ammunition_type){
            $this->model->where('ammunition_type_id', Request()->ammunition_type);   
        }
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
                    $this->model->join('ammunition_types', 'ammunition_types.id', '=', 'ammunitions.ammunition_type_id')
                    ->select('ammunition_types.name', 'ammunitions.*')
                    ->orderBy('ammunition_types.name', $exactSortType);
                }
                else{
                    $this->model->orderBy($exactSortKey, $exactSortType);          
                }
            }
        }
        else{
            $this->model->orderBy('created_at', 'desc');
        }
    }
}