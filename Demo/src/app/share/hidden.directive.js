"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ./app/shared/hidden.directive.ts
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
// Directive decorator
var HiddenDirective = (function () {
    // @Input() name: string;
    //    @Input() value: string;
    //@Output() ngModelChange = new EventEmitter();
    function HiddenDirective(c) {
        // Use renderer to render the element with styles
        //console.log(c.root);
        //console.log(renderer);
        //console.log(model);
        //renderer.setElementStyle(el.nativeElement, 'display', 'none');
    }
    // ngOnInit() {
    //     console.log("input-box keys  : ", this.name);
    // }
    HiddenDirective.prototype.onInputChange = function () {
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
    };
    return HiddenDirective;
}());
HiddenDirective = __decorate([
    core_1.Directive({ selector: '[myHidden]'
    }),
    __metadata("design:paramtypes", [forms_1.AbstractControl])
], HiddenDirective);
exports.HiddenDirective = HiddenDirective;
//# sourceMappingURL=hidden.directive.js.map