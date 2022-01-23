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
        // }
        $token = $admin->createToken('ACCESS TOKEN')->accessToken;

        return response(['user' => auth()->user(), 'token' => $token]);
    }

    public function checkUser(Request $request){
        // return Auth::guard('web')->user();
        if($request->user()) return true;
        else return false; 
    }

    public function logout(Request $request){
        $request->user()->tokens()->delete();
        Cookie::queue(Cookie::forget('alumni_session'));
        return $request->user();
    }
}
