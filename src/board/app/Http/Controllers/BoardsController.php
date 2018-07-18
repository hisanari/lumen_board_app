<?php

namespace App\Http\Controllers;

use App\Board;

class BoardsController extends Controller
{
  public function index()
  {
    // DBからの情報を全件取得
    $boards = Board::all();
    return view('boards.index', ['boards' => $boards]);
  }
}