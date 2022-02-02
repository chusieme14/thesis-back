<?php

namespace App\Helpers\SearchFilterHelpers;

use Carbon\Carbon;
use App\Models\GunType;

class GunTypes {

    public function __construct()
    {
        $this->model = GunType::query();
    }

    public function searchable()
    {
        $this->searchColumns();
        // $this->bySubscription();
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
        $searchable = ['name', 'short_name'];
        if(Request()->keyword && Request()->keyword!="null"){
            $keyword = Request()->keyword;
            // $this->model->where(function($q) use ($keyword, $searchable) {
                foreach ($searchable as $column) {
                    $this->model->orWhere($column, 'like', "%".$keyword."%");
                }
            // });
        }
    }

    public function bySubscription()
    {
        if(Request()->subscription){
            $this->model->whereHas('subscription', function($q){
                $q->where('id', Request()->subscription);
            });   
        }

        if(Request()->sub_start_date){
            $date = explode(',',Request()->sub_start_date);
            if (empty($date[1])) {
                $date[1] = $date[0];
            }
            $this->model->whereBetween('start_date', [Carbon::parse($date[0])->startOfDay(), Carbon::parse($date[1])->endOfDay()]);
        }

        if(Request()->sub_end_date){
            $date = explode(',',Request()->sub_end_date);
            if (empty($date[1])) {
                $date[1] = $date[0];
            }
            $this->model->whereBetween('end_date', [Carbon::parse($date[0])->startOfDay(), Carbon::parse($date[1])->endOfDay()]);
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
                $this->model->orderBy($exactSortKey, $exactSortType);          
            }
        }
        else{
            $this->model->orderBy('created_at', 'desc');
        }
    }
}