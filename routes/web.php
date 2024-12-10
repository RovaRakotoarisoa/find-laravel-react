<?php

// use App\Http\Middleware\CorsMiddleware; //Ajouter

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ContactController;


// Route::get('/', function () {
//     return view('welcome');
// });

// Route::middleware([
//     'auth:sanctum',
//     config('jetstream.auth_session'),
//     'verified',
// ])->group(function () {
//     Route::get('/dashboard', function () {
//         return view('dashboard');
//     })->name('dashboard');
// });


// Ajouter pour que tou les routes soit accessible
Route::get('/{pathMatch}',function(){
    return view('welcome');
})->where('pathMatch','.*');

Route::Resource('contacts', ContactController::class);

// Appliquer à un groupe de routes
// Route::middleware([CorsMiddleware::class])->group(function () {
//     Route::get('/example1', function () {
//         return 'Route 1';
//     });

//     Route::get('/example2', function () {
//         return 'Route 2';
//     });
// });
