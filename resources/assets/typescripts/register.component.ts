import { Component } from '@angular/core';
import { apiService} from './apiservice.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Router }  from '@angular/router';  

@Component({
  selector: 'my-app',
  templateUrl: `../resources/views/register.blade.php`
})
export class RegisterComponent { 
	
	model: any = {};
    url: string = "http://localhost/Project/Blog/public/register";

	constructor(
        private userService: apiService,
        private _router: Router
        ) { }

 	private extractData(res: Response) {
	let body = res.json();
        return body.data || {};
    }

    register() {
        this.userService.create(this.model,this.url).map(res => res.json()).subscribe((res) => {
        	if(res.status == 200){
                alert('registered sucessfully')
        	} else {
        		alert('error');
        	}
            
         });

    }
    onLogin() { 
      this._router.navigate(['login']); 
    } 
}

