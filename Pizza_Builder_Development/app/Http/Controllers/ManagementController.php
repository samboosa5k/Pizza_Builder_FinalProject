<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ManagementController extends Controller
{
    public function index()
    {
        return response()->json(['message' => 'Yeaah boooiii!!!!']);
    }
}
