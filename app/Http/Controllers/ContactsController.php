<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\Request;

class ContactsController extends Controller
{
    //
    public function index(){
        $contacts = Contact::all();
        return response()->json($contacts);
    }
    public function create(Request $request){
        $contact = Contact::create([
            'name'=> $request->name,
            'tel' => $request->tel
        ]);
        return response()->json($contact);
    }

    public function edit($id){
        $contact = Contact::find($id);
        return response()->json($contact);
    }

    public function update(Request $request, $id){
        $contact = Contact::find($id)->update([
            'name'=> $request->name,
            'tel' => $request->tel
        ]);
        return response()->json($contact);
    }

    public function delete($id){
        $contact = Contact::find($id)->update();
        return response()->json($contact);
    }



}
