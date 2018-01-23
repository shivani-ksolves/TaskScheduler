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
    var LoginComponent;
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
            LoginComponent = (function () {
                function LoginComponent(userService, _router) {
                    this.userService = userService;
                    this._router = _router;
                    this.model = {};
                    this.url = "http://localhost/Project/Blog/public/login";
                }
                LoginComponent.prototype.extractData = function (res) {
                    var body = res.json();
                    return body.data || {};
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    this.userService.create(this.model, this.url).map(function (res) { return res.json(); }).subscribe(function (res) {
                        if (res.status == 200) {
                            alert('login sucessfully');
                            _this._router.navigate(['dashboard']);
                        }
                        else {
                            alert('error');
                        }
                    });
                };
                LoginComponent.prototype.onRegister = function () {
                    this._router.navigate(['register']);
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: "../resources/views/login.blade.php"
                    }), 
                    __metadata('design:paramtypes', [apiservice_service_1.apiService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=login.component.js.map
