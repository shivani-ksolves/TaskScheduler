import { Component } from '@angular/core';
import { Router }  from '@angular/router';  

@Component ({
   selector: 'my-app',
   template: `<div class='container'>Inventory 
   <a class = "button" (click) = "onBack()">Back to Products</a></div>`

})
export class Appinventory  {
 	constructor(private _router: Router){} 

   	onBack(): void { 
      this._router.navigate(['/Product']); 
   	} 
}