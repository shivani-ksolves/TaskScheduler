import { Component } from '@angular/core';
import { apiService} from './apiservice.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'my-app',
  templateUrl: `../resources/views/todo.blade.php`
})
export class DashboardComponent { 
	
	addTasks: boolean = false;
    newTodo: string;
    todos: any;
    todoObj: any;
    url: string = "http://localhost/Project/Blog/public/addTask";

    constructor(private userService: apiService) {
      this.newTodo = '';
      this.todos = [];
    }

    addTodo(event) {
      this.todoObj = {
        newTodo: this.newTodo,
        completed: false
      }
      
      //console.log(this.newTodo);
      	this.userService.create(this.todoObj,this.url).map(res => res.json()).subscribe((res) => {
        	if(res.status == 200){
        		this.todoObj.id = res.id;
                alert('added sucessfully')
        	} else {
        		alert('error');
        	}
            
        });

        this.todos.push(this.todoObj);
      	this.newTodo = '';
      	event.preventDefault();
    }

    deleteTodo(index) {
    	let data = {id:index};
    	this.userService.post(data,"http://localhost/Project/Blog/public/deleteTask").map(res => res.json()).subscribe((res) => {
        	if(res.status == 200){
                alert('deleted sucessfully')
        	} else {
        		alert('error');
        	}
            
        });

      	this.todos.splice(index, 1);
    }

    completed(index,completed) {
    	let data = {id:index,is_completed:completed};
    	this.userService.post(data,"http://localhost/Project/Blog/public/deleteTask").map(res => res.json()).subscribe((res) => {
        	if(res.status == 200){
                alert('updated sucessfully')
        	} else {
        		alert('error');
        	}
            
        });

      	this.todos.splice(index, 1);
    }

    deleteSelectedTodos() {
      //need ES5 to reverse loop in order to splice by index
      for(var i=(this.todos.length -1); i > -1; i--) {
        if(this.todos[i].completed) {
          this.todos.splice(i, 1);
        }
      }
    }

    ngOnInit(){
     	this.userService.get("http://localhost/Project/Blog/public/getTask").map(res => res.json()).subscribe((res) => {
        	for (var i = 0; i < res.tasks.length; i++) {
        		this.todoObj = {
        			id: res.tasks[i].id,
			        newTodo: res.tasks[i].task,
			        completed: res.tasks[i].is_completed
			    }

			    this.todos.push(this.todoObj);
        	}
        	console.log(this.todos);
        });
  	}
}
