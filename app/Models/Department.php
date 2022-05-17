<?php

namespace App\Models;

use App\Helpers\SearchFilterHelpers\Admins;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'abbreviation'
    ];

    public function courses(){
        return $this->hasMany(Course::class);
    }

    public function announcements(){
        return $this->hasMany(Announcement::class);
    }

    public function admins(){
        return $this->hasMany(Admins::class);
    }
}
