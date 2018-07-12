<?php

namespace App\Http\Controllers;

use App\Board;

class TestJsonController extends Controller
{
    public function all()
    {
        $boards = Board::all();
        // jsonで返す
        return response()->json($boards);
    }
}