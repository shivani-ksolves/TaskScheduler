import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataCollectorService } from '../data-collector.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-assigned-tasks-view',
  templateUrl: './assigned-tasks-view.component.html',
  styleUrls: ['./assigned-tasks-view.component.css']
})

export class AssignedTasksViewComponent implements OnInit {
  
  taskData : any;
  userData: any;
  edit: boolean = false;
  editTask : FormGroup;
  allUserData:any;
  constructor(private dataServer: DataCollectorService,
  	          private activatedRoute: ActivatedRoute,
  	          private fb: FormBuilder) 
  {
  	this.createForm();
  }

  createForm()
  {
  	this.editTask = this.fb.group({
  		status : ['',Validators.compose([])],
  		subject : ['',Validators.compose([])],
  		date : ['',Validators.compose([])],
  		time : ['',Validators.compose([])],
  		priority : ['',Validators.compose([])],
  		assignee : ['', Validators.compose([])],
  		body : ['',Validators.compose([])],
  	})
  }



  ngOnInit() 
  { 
  	this.activatedRoute.params.subscribe((parms: any) => { 
	    if(this.activatedRoute.params.value.taskId)
	    {
	      this.dataServer.getTask(this.activatedRoute.params.value.taskId)
	      .subscribe((val) =>this.getTasks(val[0]));
	    }
	    this.userData = JSON.parse(sessionStorage.user)
	  	this.dataServer.getData()
	  	.subscribe((val) => this.allUserData = val.data);
    }
  }
   
  getTasks(task)
  { 
    this.taskData = task;
  }


  onSubmit()
  { 
  	var dateTime = this.editTask.value.date.getFullYear()+"-"+(this.editTask.value.date.getMonth()+1)+"-"+this.editTask.value.date.getDate()+" "+this.editTask.value.time+":00";

  	var userData = {
      "status" : "pending approval",
      "subject": this.editTask.value.subject,
      "dateTime": dateTime,
      "priority" : this.editTask.value.priority,
      "assignee" :this.editTask.value.assignee,
      "body" : this.editTask.value.body,
    };
    this.dataServer.updateTask(userData, this.taskData.id)
    .subscribe((val) =>  this.decider(val));
  } 
 
  decider(val)
  {
   if(val == 1)
  	{ 
  	  alert("Update Sucessfull");
  	  this.edit = false;
  	  window.location.reload();
  	}
  	else
  	{ 
      alert("Some error occurred");
    }
  }

  deleteTask(id)
  {
    if(confirm("Are you sure to delete "+id)) {
    this.dataServer.deleteTask(id)
    .subscribe((val) =>  {if(val)
                          {
                            alert("task deleted");
                            window.location.reload();
                          }
                         }
    );
    }
  }

}
