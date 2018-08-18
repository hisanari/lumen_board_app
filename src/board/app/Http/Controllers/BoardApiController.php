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
    Board::create($request->all());
    $Allboards = Board::all();
    return response()->json($Allboards);
  }

  public function updateBoard(Request $request, $id)
  {
    $targetBoard = Board::find($id);
    // $fillableを確認しつつ保存
    $targetBoard->fill($request->all())->save();
    $Allboards = Board::all();
    return response()->json($Allboards);
  }

  public function deleteBoard($id)
  {
    $targetBoard = Board::find($id)->delete();
    $Allboards = Board::all();
    return response()->json($Allboards);
  }
}
