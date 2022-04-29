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
        'by_course',
        'by_section',
        'recipient',
        'status'
    ];

    const SAVE = 1;
    const SENT = 2;

    //platform
    const EMAIL = 1;
    const SMS = 2;

    

}
