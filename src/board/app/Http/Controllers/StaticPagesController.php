<?php

namespace App\Http\Controllers;


class StaticPagesController extends Controller
{
    public function index($id)
    {
        return view('staticPages.index', ['id' => $id]);
    }
}