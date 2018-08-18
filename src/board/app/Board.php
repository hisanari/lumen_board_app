<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    // DBと接続
    protected $table = 'boards';
    protected  $fillable = ['title', 'comment'];
}
