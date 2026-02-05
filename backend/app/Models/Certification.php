<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certification extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'issuer',
        'issue_date',
        'expiration_date',
        'credential_id',
        'credential_url',
        'image',
        'description',
    ];

    // Opsional: Jika kamu ingin memastikan issue_date dianggap sebagai objek tanggal
    protected $casts = [
        'issue_date' => 'date',
        'expiration_date' => 'date',
    ];
}