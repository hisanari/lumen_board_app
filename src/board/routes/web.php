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

// home/idにアクセスしたときのコントローラーを設定
$router->get('home/{id}', 'StaticPagesController@index');

$router->get('test', function() use ($router) {
    return $router->app->make('view')->make('test');
});

$router->get('api/v1/tes', 'TestJsonController@get');