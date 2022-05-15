<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmploymentHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_name',
        'employment_date',
        'c_city',
        'graduate_id',
        'country_id'
    ];

    protected $table = 'employment_histories';

    protected $with = ['country'];

    public function graduate(){
        return $this->belongsTo(Graduate::class);
    }

    public function country(){
        return $this->belongsTo(Country::class);
    }

}
