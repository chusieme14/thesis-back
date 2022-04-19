<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tempGraduate extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_number',
        'first_name',
        'last_name',
        'middle_name',
        'email',
        'contact_number',
        'batch',
        'section',
        'course',
        'course_id',
        'status',
        'reason',
        'session',
    ];

    public function resetVillageMassImport($session)
    {
        $this->where('session',$session)->delete();
    }


}
