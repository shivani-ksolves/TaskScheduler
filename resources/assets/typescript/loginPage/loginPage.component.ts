import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Test } from '../testClass';
import { DataCollectorService} from '../data-collector.service';
import { Router } from "@angular/router";
import {SessionStorageService} from '../../sessionstorage.service';

@Component({
  selector: 'app-test-reg',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.css']
})

export class LoginPageComponent implements OnInit {
  
  loginForm:FormGroup;

  constructor(private fb: FormBuilder,
  	          private user: DataCollectorService,
  	          private router: Router
  	         ) 
  {
    this.createForm();
  }

  createForm()
  {
  	this.loginForm= this.fb.group({
  		name:['',Validators.compose([Validators.required])],
  		password:['',Validators.compose([Validators.required])]
  	})
  }

  onSubmit()
  {
  	var userData = {
      "name" : this.loginForm.value.name,
      "password" : this.loginForm.value.password,
    };

    this.user.validateData(userData)
    .subscribe(
      (response) => this.loadDashboard(response)
      );
                    
  }

  loadDashboard(response)
  { 
  	if(response.result!=1)
  	{ debugger
  	  alert("Login error, Please try again");
  	}
  	else
  	{ debugger
      let key = "user";
	  let value = JSON.stringify(response.data[0]);
	  sessionStorage.setItem(key, value);
	  this.router.navigate(['/dashboard']) 
  	}
  }

  goToRegistration()
  {
  	this.router.navigate(['/registration']) 
  }

  ngOnInit() {
  }

}
