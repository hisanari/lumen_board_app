<?php

namespace App\Http\Controllers;

use App\Board;
use Illuminate\Http\Request;

class BoardApiController extends Controller
{
  public function allBoard()
  {
    $boards = Board::all();
    // jsonで返す
    return response()->json($boards);
  }

  public function createBoard(Request $request)
  {
    $newBoard = new Board;
    $newBoard->title = $request->title;
    $newBoard->comment = $request->comment;
    $newBoard->save();
  }
}