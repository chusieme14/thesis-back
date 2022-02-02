<?php

namespace App\Helpers\SearchFilterHelpers;

use Carbon\Carbon;
use App\Models\Level;
use App\Models\Course;

class Courses {

    public function __construct()
    {
        $this->model = Course::query();
    }

    public function searchable()
    {
        $this->model->with('level');
        $this->searchColumns();
        $this->byCreatedAt();
        $this->byLevel();
        $this->byPrice();
        $this->byStartDate();
        $this->byEndDate();
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

    public function byLevel()
    {
        if(Request()->level){
            $this->model->where('level_id', Request()->level);  
        }
    }

    public function byStartDate()
    {
        if(Request()->start_date){
            $date = explode(',',Request()->start_date);
            if (empty($date[1])) {
                $date[1] = $date[0];
            }
            $this->model->whereBetween('date_from', [Carbon::parse($date[0])->startOfDay(), Carbon::parse($date[1])->endOfDay()]);  
        }
    }

    public function byEndDate()
    {
        if(Request()->end_date){
            $date = explode(',',Request()->end_date);
            if (empty($date[1])) {
                $date[1] = $date[0];
            }
            $this->model->whereBetween('date_to', [Carbon::parse($date[0])->startOfDay(), Carbon::parse($date[1])->endOfDay()]);  
        }
    }

    public function byPrice()
    {
        if(Request()->min_price || Request()->max_price){

            $min_price = Request()->min_price ? Request()->min_price : 0;
            $max_price = Request()->max_price ? Request()->max_price : $min_price;

            $this->model->whereBetween('price', [$min_price, $max_price]);
        }
    }
}