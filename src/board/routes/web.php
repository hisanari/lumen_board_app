<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
  return "Hello, World!";
});

// /home/idにアクセスしたときのコントローラーを設定
$router->get('home/{id}', 'StaticPagesController@index');
// /boardにアクセスしたときのコントローラーを設定
$router->get('board', 'BoardsController@index');

// /api/v1/allにアクセスしたときのコントローラーを設定
$router->group(['prefix' => 'api/v1'], function() use ($router)
{
  $router->get('allBoard', 'BoardApiController@allBoard');
});