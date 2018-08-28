<?php

namespace App\Http\Controllers;

use Validator;
use App\Board;
use Illuminate\Http\Request;

class BoardApiController extends Controller
{

  public function boards()
  {
    $boards = Board::all();
    // jsonで返す
    return response()->json(['boardResults' => $boards, 'status'=>'OK']);
  }

  public function showBoard($id)
  {
    $board = Board::find($id);
    // jsonで返す
    return response()->json($board);
  }

  public function createBoard(Request $request)
  {
    // validation
    $validator = Validator::make($request->all(), [
      'comment' => 'required',
    ]);

    if($validator->fails())
    {
      return response()->json([
        'status' => 'Error',
      ]);
    }

    Board::create($request->all());
    $Allboards = Board::all();
    return response()->json(['boardResults' => $Allboards, 'status'=>'OK']);
  }

  public function updateBoard(Request $request, $id)
  {
    $targetBoard = Board::find($id);
    // $fillableを確認しつつ保存
    $targetBoard->fill($request->all())->save();
    $Allboards = Board::all();
    return response()->json(['boardResults' => $Allboards, 'status'=>'OK']);
  }

  public function deleteBoard($id)
  {
    $targetBoard = Board::find($id)->delete();
    $Allboards = Board::all();
    return response()->json(['boardResults' => $Allboards, 'status'=>'OK']);
  }
}
