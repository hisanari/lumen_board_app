<?php

namespace App\Http\Controllers;

use App\Board;

class BoardApiController extends Controller
{
  public function allBoard()
  {
    $boards = Board::all();
    // jsonで返す
    return response()->json($boards);
  }
}