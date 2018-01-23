System.register(['@angular/core', './apiservice.service', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
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
    var core_1, apiservice_service_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (apiservice_service_1_1) {
                apiservice_service_1 = apiservice_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(userService) {
                    this.userService = userService;
                    this.addTasks = false;
                    this.url = "http://localhost/Project/Blog/public/addTask";
                    this.newTodo = '';
                    this.todos = [];
                }
                DashboardComponent.prototype.addTodo = function (event) {
                    var _this = this;
                    this.todoObj = {
                        newTodo: this.newTodo,
                        completed: false
                    };
                    //console.log(this.newTodo);
                    this.userService.create(this.todoObj, this.url).map(function (res) { return res.json(); }).subscribe(function (res) {
                        if (res.status == 200) {
                            _this.todoObj.id = res.id;
                            alert('added sucessfully');
                        }
                        else {
                            alert('error');
                        }
                    });
                    this.todos.push(this.todoObj);
                    this.newTodo = '';
                    event.preventDefault();
                };
                DashboardComponent.prototype.deleteTodo = function (index) {
                    var data = { id: index };
                    this.userService.post(data, "http://localhost/Project/Blog/public/deleteTask").map(function (res) { return res.json(); }).subscribe(function (res) {
                        if (res.status == 200) {
                            alert('deleted sucessfully');
                        }
                        else {
                            alert('error');
                        }
                    });
                    this.todos.splice(index, 1);
                };
                DashboardComponent.prototype.completed = function (index, completed) {
                    var data = { id: index, is_completed: completed };
                    this.userService.post(data, "http://localhost/Project/Blog/public/deleteTask").map(function (res) { return res.json(); }).subscribe(function (res) {
                        if (res.status == 200) {
                            alert('updated sucessfully');
                        }
                        else {
                            alert('error');
                        }
                    });
                    this.todos.splice(index, 1);
                };
                DashboardComponent.prototype.deleteSelectedTodos = function () {
                    //need ES5 to reverse loop in order to splice by index
                    for (var i = (this.todos.length - 1); i > -1; i--) {
                        if (this.todos[i].completed) {
                            this.todos.splice(i, 1);
                        }
                    }
                };
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userService.get("http://localhost/Project/Blog/public/getTask").map(function (res) { return res.json(); }).subscribe(function (res) {
                        for (var i = 0; i < res.tasks.length; i++) {
                            _this.todoObj = {
                                id: res.tasks[i].id,
                                newTodo: res.tasks[i].task,
                                completed: res.tasks[i].is_completed
                            };
                            _this.todos.push(_this.todoObj);
                        }
                        console.log(_this.todos);
                    });
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: "../resources/views/todo.blade.php"
                    }), 
                    __metadata('design:paramtypes', [apiservice_service_1.apiService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});

//# sourceMappingURL=dashboard.component.js.map
