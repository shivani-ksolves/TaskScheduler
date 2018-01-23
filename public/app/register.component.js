System.register(['@angular/core', './apiservice.service', 'rxjs/add/operator/map', 'rxjs/add/operator/toPromise', '@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, apiservice_service_1, router_1;
    var RegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (apiservice_service_1_1) {
                apiservice_service_1 = apiservice_service_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RegisterComponent = (function () {
                function RegisterComponent(userService, _router) {
                    this.userService = userService;
                    this._router = _router;
                    this.model = {};
                    this.url = "http://localhost/Project/Blog/public/register";
                }
                RegisterComponent.prototype.extractData = function (res) {
                    var body = res.json();
                    return body.data || {};
                };
                RegisterComponent.prototype.register = function () {
                    this.userService.create(this.model, this.url).map(function (res) { return res.json(); }).subscribe(function (res) {
                        if (res.status == 200) {
                            alert('registered sucessfully');
                        }
                        else {
                            alert('error');
                        }
                    });
                };
                RegisterComponent.prototype.onLogin = function () {
                    this._router.navigate(['login']);
                };
                RegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: "../resources/views/register.blade.php"
                    }), 
                    __metadata('design:paramtypes', [apiservice_service_1.apiService, router_1.Router])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});

//# sourceMappingURL=register.component.js.map
