///<reference path="../../../typings/index.d.ts"/>
System.register(['@angular/core', '@angular/platform-browser', './app.component', './login.component', './dashboard.component', './register.component', '@angular/forms', '@angular/http', './apiservice.service', '@angular/router', '@angular/common'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, app_component_1, login_component_1, dashboard_component_1, register_component_1, forms_1, http_1, apiservice_service_1, router_1, common_1;
    var appRoutes, AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (apiservice_service_1_1) {
                apiservice_service_1 = apiservice_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: '', component: login_component_1.LoginComponent, pathMatch: 'full' },
                { path: 'register', component: register_component_1.RegisterComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
            ];
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
                        declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, register_component_1.RegisterComponent, dashboard_component_1.DashboardComponent],
                        providers: [apiservice_service_1.apiService, { provide: common_1.APP_BASE_HREF, useValue: '/Project/Blog/public/' }],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});

//# sourceMappingURL=app.module.js.map
