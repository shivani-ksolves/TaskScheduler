import { Injectable } from '@angular/core';
import { Test } from './testClass';
import { TESTDATA } from './testData';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataCollectorService {

  constructor(private myhttp: Http,
  	private http: HttpClient) { }

  getJson2(id) 
  { 
    return this.http.get('http://localhost/laravel5.5-basic/public/api/getTasks/'+id)
                .map(function(response:Response){  
                  return response})
  } 

  getMyTasks(id) 
  { 
    return this.http.get('http://localhost/laravel5.5-basic/public/api/getMyTasks/'+id)
                .map(function(response:Response){  
                  return response})
  } 

  getTaskAssignee(id) 
  { 
    return this.http.get('http://localhost/laravel5.5-basic/public/api/getTaskAssignee/'+id)
                .map(function(response:Response){  
                  return response})
  }

  getData()
  {
    return this.http.get('http://localhost/laravel5.5-basic/public/api/getData');
  }

  saveData(user)
  { 
    const body = user;
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post('http://localhost/laravel5.5-basic/public/api/saveData',body,{headers:headers});
  } 

  changeData(user)
  { 
    const body = user;
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post('http://localhost/laravel5.5-basic/public/api/changeData',body,{headers:headers});
  } 

  validateData(userData)
  {
    const body = userData;
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post('http://localhost/laravel5.5-basic/public/api/validateData',body,{headers:headers});
  }

  getTask(taskId)
  { 
    var param = JSON.parse(taskId);
    return this.http.get('http://localhost/laravel5.5-basic/public/api/getTask/'+param)
    .map(function(response:Response){
      return response
    });
  }

  updateTask(taskObj,id)
  { 
    const body = taskObj;
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put('http://localhost/laravel5.5-basic/public/api/updateTask/'+id, body, {headers:headers})
    .map(function(response:Response){
     return response
    })  

  }

  updateStatus(str,taskId)
  {
    const body = {'status':str,'taskId':taskId};
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post('http://localhost/laravel5.5-basic/public/api/updateStatus',body,{headers:headers})
  }

  deleteTask(id)
  { 
    return this.http.get('http://localhost/laravel5.5-basic/public/api/deleteTask/'+id);
  }

  addTask(taskData)
  {
    const body = taskData;
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    return this.http.post('http://localhost/laravel5.5-basic/public/api/addTask',body,{headers=headers});
  }
}
