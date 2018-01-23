import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '../../sessionstorage.service';
import { FormControl, FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from "@angular/router";
import { DataCollectorService} from '../data-collector.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './changeUserDetails.component.html',
  styleUrls: ['./changeUserDetails.component.css']
})

export class ChangeUserDetailsComponent implements OnInit {
   
  userData: any;
  cForm: FormGroup;
  constructor(private fb: FormBuilder,
  	          private router: Router,
  	          private server: DataCollectorService) 
  {
   this.userData = JSON.parse(sessionStorage.user);
   this.createForm();
  }

  createForm() 
  {
    this.cForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required,this.confirmPasswordValidator()]) ],	
      cpassword: ['', Validators.compose([Validators.required,this.confirmPasswordValidator()]) ], // <--- the FormControl called "name"
    });
  }

  confirmPasswordValidator(): any {name
  return (control: any): {[key: string]: any} => {
  	if (typeof control.root.controls != "undefined"){
    const confirmPassword = control.root.controls.cpassword.value;
    const password = control.root.controls.password.value;
    const result = password==confirmPassword ? null : 'error';
    if(password==confirmPassword)
    {
      if(control.root.controls.cpassword.status=='INVALID')
      {
        control.root.controls.cpassword.status='VALID';
      }
      else
      {
      	control.root.controls.password.status='VALID';
      }
    }
    return result ? {'wrongPassword': {value: confirmPassword}} : null;
    }
   };
  }

  onSubmit()
  {
    var userData = {
      "id" : this.userData.id,
      "name" : this.cForm.value.name,
      "email" : this.cForm.value.email,
      "password" : this.cForm.value.password,
      "cpassword" : this.cForm.value.cpassword,
    };

    this.server.changeData(userData)
    .subscribe(
      (data) => this.loadDecisionMaker(data)
    );
  }
  
  loadDecisionMaker(response)
  {
  	if(response==1)
  	alert('Successfully updated account details')
    else
    alert('Sorry some error occured in updating details') 	
  }
  ngOnInit() {
  }

}
