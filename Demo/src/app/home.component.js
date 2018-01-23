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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var router_1 = require("@angular/router");
//import { Product } from './product';
var Apphome = (function () {
    function Apphome(http, _router) {
        this.http = http;
        this._router = _router;
        this.url = 'http://localhost/Angular/Demo/src/home.php';
        this.email = '';
        this.password = '';
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
    Apphome.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    Apphome.prototype.handleErrorObservable = function (error) {
        console.error('sss');
        return Observable_1.Observable.throw(error.message || error);
    };
    return Apphome;
}());
Apphome = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.home.html',
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], Apphome);
exports.Apphome = Apphome;
//# sourceMappingURL=home.component.js.map