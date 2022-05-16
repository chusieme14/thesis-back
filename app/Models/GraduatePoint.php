<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GraduatePoint extends Model
{
    use HasFactory;

    protected $table = 'graduate_points';

    protected $fillable = [
        'graduate_id','point', 'status', 'exchangewith'
    ];

    public function graduate()
    {
        return $this->belongsTo(Graduate::class);
    }
}
