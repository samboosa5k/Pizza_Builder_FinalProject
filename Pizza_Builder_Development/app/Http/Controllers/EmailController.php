<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\TestEmail;

use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function index()
    {

        $user_name = 'Jasper';
        $user_email = 'test@test.com';

        Mail::to('mail@example.com')
            ->cc('copy@example.com')
            ->bcc('hidden_copy@example.com')
            ->send(new TestEmail($user_name));
    }
}
