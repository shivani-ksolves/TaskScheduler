import { Component, OnInit } from '@angular/core';
import { DataCollectorService } from '../data-collector.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionStorageService } from '../../sessionstorage.service';

@Component({
  selector: 'app-assigned-tasks-add',
  templateUrl: './assigned-tasks-add.component.html',
  styleUrls: ['./assigned-tasks-add.component.css']
})
export class AssignedTasksAddComponent implements OnInit {

  newTask : FormGroup;
  userData: any;
  allUserData:any;
  edit:any;
  matDatepicker: any;
  max:any;
  min:any;
  constructor(private dataServer: DataCollectorService,
  	          private fb: FormBuilder) 
  {
  	this.userData = JSON.parse(sessionStorage.user);
  	this.createForm();
  }

  createForm()
  {
  	this.newTask = this.fb.group({
  		status : ['',Validators.compose([])],
  		subject : ['',Validators.compose([])],
  		date : ['',Validators.compose([])],
  		time : ['',Validators.compose([])],
  		priority : ['',Validators.compose([])],
  		assignee : ['', Validators.compose([])],
  		body : ['',Validators.compose([])],
  	})
  }

  onSubmit()
  { 
  	var dateTime = this.newTask.value.date.getFullYear()+"-"+(this.newTask.value.date.getMonth()+1)+"-"+this.newTask.value.date.getDate()+" "+this.newTask.value.time+":00";

  	var userData = {
      "status" : "pending approval",
      "subject": this.newTask.value.subject,
      "dateTime": dateTime,
      "priority" : this.newTask.value.priority,
      "assignee" :this.newTask.value.assignee,
      "assigner" : this.userData.id,
      "body" : this.newTask.value.body,
    };
     debugger
    this.dataServer.addTask(userData)
    .subscribe((val) => this.decider(val));
  } 

   decider(val)
  { debugger
   if(val == true)
  	{ 
  	  alert("Sucessfully added a new task");
  	  this.edit = 0;
  	  window.location.reload();
  	}
  	else
  	{ 
      alert("Some error occurred");
    }
  }

  ngOnInit() {
  	this.dataServer.getData()
  	.subscribe((val) => this.allUserData = val.data);
  }

}
