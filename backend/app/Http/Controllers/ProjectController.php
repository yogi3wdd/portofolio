<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        // Mengambil data dari database (yang sudah terhubung ke Supabase)
        $projects = Project::all(); 
        
        return response()->json($projects);
    }
}