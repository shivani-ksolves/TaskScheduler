// ./app/shared/hidden.directive.ts
import { Directive, ElementRef, Renderer, Attribute, Input,Output } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

// Directive decorator
@Directive({ selector: '[myHidden]'
 })
// Directive class
export class HiddenDirective {

	// @Input() name: string;
 //    @Input() value: string;
  	//@Output() ngModelChange = new EventEmitter();
  
  	
    constructor(c: AbstractControl): { [key: string]: any } {
     // Use renderer to render the element with styles
     	//console.log(c.root);
     	//console.log(renderer);
     	//console.log(model);
       //renderer.setElementStyle(el.nativeElement, 'display', 'none');
    }
    // ngOnInit() {
    //     console.log("input-box keys  : ", this.name);
    // }
    onInputChange(){
    	//console.log(this.el);
    	//console.log(el);
        // this.modelValue = this.getModelValue();
        // var stringToFormat = this.modelValue;
        // if(stringToFormat.length < 10){
        //     stringToFormat = this.padString(stringToFormat);
        // }
        
        // this.viewValue = this.format(stringToFormat);
        // this.model.viewToModelUpdate(this.modelValue);
        // this.model.valueAccessor.writeValue(this.viewValue)
	}
}