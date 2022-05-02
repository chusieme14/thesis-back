<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name', 'code', 'department_id'
    ];

    protected $with = [
        'department'
    ];

    public function graduates(){
        return $this->hasMany(Graduate::class);
    }

    public function department(){
        return $this->belongsTo(Department::class);
    }
}
