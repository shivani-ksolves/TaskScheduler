<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Task;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $user = new User;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = $request->input('password');
        if($user->save()) {
            $data['status'] = 200;
            $data['msg'] = 'success';
        } else {
            $data['status'] = 400;
            $data['msg'] = 'fail';
        }
        return response()->json($data);

    }

    public function login(Request $request)
    {

        $email = $request->input('email');
        $password = $request->input('password');
        $user = User::where('email', $email)->where('password',$password)->first();
        if($user) {
            $data['status'] = 200;
            $data['msg'] = 'success';
        } else {
            $data['status'] = 400;
            $data['msg'] = 'fail';
        }
        return response()->json($data);

    }

    public function addTask(Request $request)
    {

        $task = $request->input('newTodo');
        $status = $request->input('completed');

        $addTask = new Task;
        $addTask->task = $task;
        $addTask->is_completed = $status;
        $addTask->save();
        
        if($addTask) {
            $data['status'] = 200;
            $data['msg'] = 'success';
            $data['id'] = $addTask->id;
        } else {
            $data['status'] = 400;
            $data['msg'] = 'fail';
        }
        return response()->json($data);

    }

    public function updateTask(Request $request)
    {

        $id = $request->input('id');
        if($request->input('is_completed')){
            $update = Task::where('id',$id)->update(['is_completed'=>1]);
        } else {
            $update = Task::where('id',$id)->update(['is_deleted'=>1]);
        }
        

        if($update) {
            $data['status'] = 200;
            $data['msg'] = 'success';
        } else {
            $data['status'] = 400;
            $data['msg'] = 'fail';
        }
        return response()->json($data);

    }

    public function getTask()
    {

        $allTasks = Task::where('is_deleted',0)->orderBy('is_completed',"ASC")->get();
    
        if($allTasks) {
            $data['status'] = 200;
            $data['tasks'] = $allTasks;
        } else {
            $data['status'] = 400;
            $data['msg'] = 'fail';
        }
        return response()->json($data);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
