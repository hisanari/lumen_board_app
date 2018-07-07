<?php

namespace App\Http\Controllers;

use App\StaticPages;

class StaticPagesController extends Controller
{
    public function index($id)
    {
        return view('staticPages.index', ['id' => $id]);
    }
}