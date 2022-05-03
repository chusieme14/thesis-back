<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'platform',
        'withlink',
        'option',
        'course_id',
        'department_id',
        'section',
        'status'
    ];

    protected $with = [
        'course','department'
    ];

    const SAVE = 1;
    const SENT = 2;

    //platform
    const EMAIL = 1;
    const SMS = 2;

    //option
    const BYSECTION = 1;
    const BYCOURSE = 2;
    const BYDEPARTMENT = 3;
    const CUSTOM = 4;

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

}
