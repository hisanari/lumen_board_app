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
    $newComment = new Board;
    $newComment->title = $request->title;
    $newComment->comment = $request->comment;
    $newComment->save();
    $Allboards = Board::all();
    return response()->json($Allboards);
  }

  public function deleteBoard($id)
  {
    $targetComment = Board::find($id);
    $targetComment->delete();
    $Allboards = Board::all();
    return response()->json($Allboards);
  }
}