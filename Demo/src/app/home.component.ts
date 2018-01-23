import { Component } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Router }  from '@angular/router';  
import {Headers} from '@angular/http';
//import { Product } from './product';

@Component ({
   selector: 'my-app',
   templateUrl: 'app/app.home.html',
})
export   class   Apphome  {
	
	data: string;
	url: string = 'http://localhost/Angular/Demo/src/home.php';
	email: string = '';
	password: string = '';

	constructor(private http:Http,private _router: Router) {
		
	}

	// onSubmit(): string {

	// 	var data = {email:this.email,password:this.password};
		
	// 	var headers = new Headers();
	// 	headers.append('Content-Type', 'application/json; charset=UTF-8');
	// 	//debugger
 //        this.http.post(this.url, data, {headers:headers}).map(res => res.json()).subscribe((res) => {
 //            if(res.s === true){
	//     		//this._router.navigate(['/Product']); 
	//     	} else {
	//     		alert('error');
	//     	}
 //         });

 //    }

	private extractData(res: Response) {
		let body = res.json();
        return body;
    }
    

    private handleErrorObservable (error: Response | any) {
		console.error('sss');
		return Observable.throw(error.message || error);
    }

}