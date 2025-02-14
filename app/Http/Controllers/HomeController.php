<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $name = 'zabeer';
        $email = 'zabeer@gmail.com';

        return Inertia::render('Home/Home',compact('name','email'));

    }
}
