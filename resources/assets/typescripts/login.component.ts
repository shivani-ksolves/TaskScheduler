import { Component } from '@angular/core';
import { apiService} from './apiservice.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Router }  from '@angular/router';  

@Component({
  selector: 'my-app',
  templateUrl: `../resources/views/login.blade.php`
})
export class LoginComponent { 
	
	model: any = {};
	url: string = "http://localhost/Project/Blog/public/login";
	constructor(
        private userService: apiService,
        private _router: Router
        ) { }

 	private extractData(res: Response) {
		let body = res.json();
        return body.data || {};
    }
    login() {

        this.userService.create(this.model,this.url).map(res => res.json()).subscribe((res) => {
        	if(res.status == 200){
                alert('login sucessfully');
                this._router.navigate(['dashboard']); 
        	} else {
        		alert('error');
        	}
            
        });
    }
    onRegister() { 
      this._router.navigate(['register']); 
    } 

}