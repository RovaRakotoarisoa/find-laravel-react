<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\http\Controllers\ContactsController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/contacts',[ContactsController::class,'index']);
Route::post('/contact/create',[ContactsController::class,'create']);
Route::get('/contact/{$id}/edit',[ContactsController::class,'edit']);
Route::put('/contact/{$id}/update',[ContactsController::class,'update']);
Route::delete('/contact/{$id}/delete',[ContactsController::class,'delete']);

