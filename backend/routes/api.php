<?php

use App\Models\Project;
use Illuminate\Support\Facades\Route;

Route::get('/projects', function () {
    return Project::all();
});