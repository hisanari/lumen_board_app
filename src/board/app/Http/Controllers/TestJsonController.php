<?php

namespace App\Http\Controllers;

use App\TestJson;

class TestJsonController extends Controller
{
    public function get()
    {
        // jsonで返す
        return response()->json(['id' => 1234, 'name' => 'hisanari']);
    }
}