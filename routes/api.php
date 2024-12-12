<?php


use App\Http\Controllers\PostController;
use App\Http\Controllers\ContactController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


Route::apiResource('posts', PostController::class);

Route::apiResource('contacts', ContactController::class);

// Route::get('/',function(){
//     return 'API';
// });



Route::delete('/contacts/{id}', function ($id) {
    $contact = Contact::find($id);
    if ($contact) {
        $contact->delete();
        return response()->json(null, 204);
    }
    return response()->json(['message' => 'Contact not found'], 404);
});

