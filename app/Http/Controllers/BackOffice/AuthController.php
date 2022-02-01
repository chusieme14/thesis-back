<?php

namespace App\Http\Controllers\BackOffice;

use App\Models\Admin;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{
    public function login(Request $request){
        $data = $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);
        // if(!auth()->attempt($data)){
        $admin = Admin::where('email',$data['email'])->first();
        if(!$admin){
            return response(['error_message' => 'Incorrect credentials']);
        }
        $admin->makeVisible(['password']);
        if(!Hash::check($data['password'],$admin->password)){
            return response(['error_message' => 'Incorrect credentials']);
        }
        Auth::login($admin);


        return response()->json('success', 200);
    }

    public function checkUser(Request $request){
        return Auth::check();
    }

    public function logout(Request $request){
        auth()->guard('web')->logout();
        $request->session()->invalidate();

        return "success";
    }
}
