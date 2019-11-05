<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ManagementController extends Controller
{
    public function index()
    {
        /* return response()->json(['message' => 'Yeaah boooiii!!!!'])
            ->withHeaders(['Cache-Control' => 'public', 'Cache-Control' => 'max-age=31536000']);    // This enables caching interface elements loaded from controller */

        return response()->json(
            [
                'message' => 'You have logged in!'
            ]
        )
            ->withHeaders(['Cache-Control' => 'public', 'Cache-Control' => 'max-age=31536000']);    // This enables caching interface elements loaded from controller
    }
}
