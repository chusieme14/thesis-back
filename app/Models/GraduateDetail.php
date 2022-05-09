<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GraduateDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'graduate_id', 'civil_status', 'birthday',
        'residence', 'gender', 'attainment',
        'prof_exam_passed', 'awards', 'employed',
        'employment_date', 'employment_status',
        'company_name', 'c_address',
        'c_city', 'country_id',
    ];

    public function graduate()
    {
        return $this->belongsTo(Graduate::class);
    }
}
